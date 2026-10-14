'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Save, RefreshCw } from 'lucide-react';

export function ChatbotPromptSettings() {
  const [systemPrompt, setSystemPrompt] = useState('');
  const [loadingPrompt, setLoadingPrompt] = useState(true);
  const [savingPrompt, setSavingPrompt] = useState(false);

  useEffect(() => {
    fetchPrompt();
  }, []);

  const fetchPrompt = async () => {
    try {
      const res = await fetch('/api/admin/settings/chatbot');
      const data = await res.json();
      if (data.system_prompt) setSystemPrompt(data.system_prompt);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingPrompt(false);
    }
  };

  const savePrompt = async () => {
    setSavingPrompt(true);
    try {
      await fetch('/api/admin/settings/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ system_prompt: systemPrompt }),
      });
      alert('Đã lưu cấu hình Prompt thành công!');
    } catch (error) {
      alert('Có lỗi xảy ra khi lưu.');
    } finally {
      setSavingPrompt(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <FileText className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-bold text-slate-800">1. Tính cách & Quy tắc (System Prompt)</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4">
        Hướng dẫn AI cách xưng hô với khách hàng (VD: "Tôi là trợ lý của shop X..."), giọng văn (Thân thiện, chuyên nghiệp) và những điều KHÔNG được nói.
      </p>
      <div className="flex-1 min-h-[300px]">
        {loadingPrompt ? (
          <div className="w-full h-full bg-slate-50 animate-pulse rounded-lg border border-slate-200"></div>
        ) : (
          <textarea
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            placeholder="VD: Bạn là nhân viên tư vấn của Cửa hàng Thời Trang Y. Xưng hô là 'Em' và gọi khách là 'Anh/Chị'. Luôn trả lời ngắn gọn, vui vẻ..."
            className="w-full h-full min-h-[300px] p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none resize-none transition"
          />
        )}
      </div>
      <button 
        onClick={savePrompt}
        disabled={savingPrompt || loadingPrompt}
        className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 text-white w-full py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition disabled:opacity-70"
      >
        {savingPrompt ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
        Lưu Cấu Hình Prompt
      </button>
    </div>
  );
}
