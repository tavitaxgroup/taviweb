'use client';

import React from 'react';
import { Bot } from 'lucide-react';
import { ChatbotPromptSettings } from '@/modules/ai/components/ChatbotPromptSettings';
import { KnowledgeManagement } from '@/modules/ai/components/KnowledgeManagement';
import { KnowledgeAnalytics } from '@/modules/ai/components/KnowledgeAnalytics';
import { KnowledgeDocuments } from '@/modules/ai/components/KnowledgeDocuments';

export default function TenantChatbotSettings() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Cấu hình Trợ lý AI</h1>
          <p className="text-sm text-slate-500 mt-1">
            Thiết lập tính cách, quy tắc trả lời và nạp thêm kiến thức về doanh nghiệp để AI tư vấn thông minh hơn.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChatbotPromptSettings />
        <KnowledgeManagement />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KnowledgeDocuments />
        <KnowledgeAnalytics />
      </div>
    </div>
  );
}
