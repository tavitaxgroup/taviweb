'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, FileText, File, Trash2 } from 'lucide-react';

interface KnowledgeChunk {
  id: string;
  content: string;
  source_type: string;
  created_at: string;
}

export function KnowledgeDocuments() {
  const [chunks, setChunks] = useState<KnowledgeChunk[]>([]);
  const [loadingChunks, setLoadingChunks] = useState(true);

  useEffect(() => {
    fetchChunks();

    // Listen for custom event to refresh when new files are uploaded
    const handleRefresh = () => fetchChunks();
    window.addEventListener('refresh_knowledge', handleRefresh);
    return () => window.removeEventListener('refresh_knowledge', handleRefresh);
  }, []);

  const fetchChunks = async () => {
    setLoadingChunks(true);
    try {
      const res = await fetch('/api/admin/knowledge');
      const data = await res.json();
      if (data.data) setChunks(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingChunks(false);
    }
  };

  const deleteDocument = async (sourceType: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa tài liệu này? Toàn bộ kiến thức liên quan sẽ bị xóa khỏi AI.')) return;
    try {
      await fetch(`/api/admin/knowledge?source_type=${encodeURIComponent(sourceType)}`, { method: 'DELETE' });
      fetchChunks();
    } catch (error) {
      console.error(error);
    }
  };

  const groupedDocs = chunks.reduce((acc: any, chunk) => {
    if (!acc[chunk.source_type]) {
      acc[chunk.source_type] = {
        source_type: chunk.source_type,
        created_at: chunk.created_at,
        count: 0
      };
    }
    acc[chunk.source_type].count += 1;
    if (new Date(chunk.created_at) > new Date(acc[chunk.source_type].created_at)) {
      acc[chunk.source_type].created_at = chunk.created_at;
    }
    return acc;
  }, {});

  const documents = Object.values(groupedDocs).sort((a: any, b: any) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  ) as any[];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <h2 className="text-lg font-bold text-slate-800">Tài liệu đã học ({documents.length})</h2>
        <button onClick={fetchChunks} className="text-sm text-indigo-600 font-semibold hover:underline flex items-center gap-1">
          <RefreshCw className="w-4 h-4" /> Làm mới
        </button>
      </div>
      <div className="divide-y divide-slate-100 flex-1 overflow-auto max-h-[500px]">
        {loadingChunks ? (
          <div className="p-8 text-center text-slate-400">Đang tải dữ liệu...</div>
        ) : documents.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">Chưa có tài liệu kiến thức nào được nạp.</div>
        ) : (
          documents.map(doc => {
            const isFile = doc.source_type.startsWith('document:');
            const docName = isFile ? doc.source_type.replace('document:', '') : 'Dữ liệu nhập tay';
            
            return (
              <div key={doc.source_type} className="p-6 flex items-center gap-4 hover:bg-slate-50/50 transition">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  {isFile ? <File className="w-5 h-5 text-indigo-500" /> : <FileText className="w-5 h-5 text-emerald-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-700 truncate">
                    {docName}
                  </p>
                  <div className="text-[12px] text-slate-500 mt-1 flex items-center gap-2">
                    <span className="bg-slate-100 px-2 py-0.5 rounded-full text-slate-600 font-medium">{doc.count} đoạn kiến thức</span>
                    <span>•</span>
                    <span>{new Date(doc.created_at).toLocaleString('vi-VN')}</span>
                  </div>
                </div>
                <button 
                  onClick={() => deleteDocument(doc.source_type)}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                  title="Xóa tài liệu"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
