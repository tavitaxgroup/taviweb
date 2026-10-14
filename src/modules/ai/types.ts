export interface TenantAiConfig {
  ai_quota: number;
  ai_used: number;
  system_prompt: string | null;
}

export interface AiKey {
  id: string;
  key: string;
  provider: string;
  is_default: boolean;
}

export interface RAGAnalytics {
  id: string;
  tenant_id: string;
  question: string;
  answer: string;
  is_answered: boolean;
  created_at: string;
}
