-- Task 1: Add fts column to knowledge_chunks
ALTER TABLE knowledge_chunks ADD COLUMN IF NOT EXISTS fts tsvector GENERATED ALWAYS AS (to_tsvector('english', coalesce(content, ''))) STORED;

CREATE INDEX IF NOT EXISTS knowledge_chunks_fts_idx ON knowledge_chunks USING GIN (fts);

-- Task 2: Create stored procedure hybrid_search_knowledge
CREATE OR REPLACE FUNCTION hybrid_search_knowledge(
    query_text text,
    query_embedding vector(768),
    match_count int,
    p_tenant_id uuid
) RETURNS TABLE (
    id uuid,
    tenant_id uuid,
    content text,
    source_type text,
    embedding vector(768),
    created_at timestamptz,
    similarity float,
    rank int
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    WITH semantic_search AS (
        SELECT kc.*, 1 - (kc.embedding <=> query_embedding) AS similarity, 
        ROW_NUMBER() OVER(ORDER BY kc.embedding <=> query_embedding) AS rank_semantic
        FROM knowledge_chunks kc
        WHERE kc.tenant_id = p_tenant_id
        ORDER BY kc.embedding <=> query_embedding
        LIMIT match_count * 2
    ),
    keyword_search AS (
        SELECT kc.*, ts_rank(kc.fts, plainto_tsquery('english', query_text)) AS similarity,
        ROW_NUMBER() OVER(ORDER BY ts_rank(kc.fts, plainto_tsquery('english', query_text)) DESC) AS rank_keyword
        FROM knowledge_chunks kc
        WHERE kc.tenant_id = p_tenant_id AND kc.fts @@ plainto_tsquery('english', query_text)
        ORDER BY ts_rank(kc.fts, plainto_tsquery('english', query_text)) DESC
        LIMIT match_count * 2
    ),
    rrf AS (
        SELECT COALESCE(ss.id, ks.id) as chunk_id,
        COALESCE(1.0 / (60 + ss.rank_semantic), 0.0) + COALESCE(1.0 / (60 + ks.rank_keyword), 0.0) as rrf_score
        FROM semantic_search ss
        FULL OUTER JOIN keyword_search ks ON ss.id = ks.id
    )
    SELECT kc.id, kc.tenant_id, kc.content, kc.source_type, kc.embedding, kc.created_at, rrf.rrf_score::float as similarity,
    ROW_NUMBER() OVER(ORDER BY rrf.rrf_score DESC)::int as rank
    FROM rrf
    JOIN knowledge_chunks kc ON kc.id = rrf.chunk_id
    ORDER BY rrf.rrf_score DESC
    LIMIT match_count;
END;
$$;

-- Task 3: Create rag_analytics table
CREATE TABLE IF NOT EXISTS rag_analytics (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    tenant_id uuid NOT NULL,
    question text NOT NULL,
    answer text,
    is_answered boolean DEFAULT false,
    created_at timestamptz DEFAULT now()
);

-- RLS for rag_analytics (assuming standard RLS)
ALTER TABLE rag_analytics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable read for tenant" ON rag_analytics FOR SELECT USING (tenant_id = auth.uid()); -- Or appropriate logic
CREATE POLICY "Enable insert for all" ON rag_analytics FOR INSERT WITH CHECK (true);
