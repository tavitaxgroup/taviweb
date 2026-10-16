'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle } from 'lucide-react';
import { RAGAnalytics } from '../types';

export function KnowledgeAnalytics() {
  const [analytics, setAnalytics] = useState<RAGAnalytics[]>([]);
  const [loadingAnalytics, setLoadingAnalytics] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await fetch('/api/admin/knowledge/analytics');
      const data = await res.json();
      if (data.data) setAnalytics(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingAnalytics(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <h2 className="text-lg font-bold text-slate-800">Thống Kê Kiến Thức (Analytics)</h2>
        <button onClick={fetchAnalytics} className="text-sm text-indigo-600 font-semibold hover:underline flex items-center gap-1">
          <RefreshCw className="w-4 h-4" /> Làm mới
        </button>
      </div>
      <div className="flex-1 overflow-auto max-h-[500px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-sm text-slate-500">
              <th className="p-4 font-semibold">Câu Hỏi (Question)</th>
              <th className="p-4 font-semibold">Trạng Thái (Status)</th>
              <th className="p-4 font-semibold">Ngày (Date)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loadingAnalytics ? (
              <tr><td colSpan={3} className="p-8 text-center text-slate-400">Đang tải dữ liệu...</td></tr>
            ) : analytics.length === 0 ? (
              <tr><td colSpan={3} className="p-8 text-center text-slate-500 text-sm">Chưa có dữ liệu thống kê.</td></tr>
            ) : (
              analytics.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition">
                  <td className="p-4 text-sm text-slate-700">{item.question}</td>
                  <td className="p-4">
                    {item.is_answered ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center w-max gap-1">
                        <CheckCircle className="w-3 h-3" /> Trả lời được
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium w-max inline-block">
                        Không tìm thấy
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-slate-500">
                    {new Date(item.created_at).toLocaleString('vi-VN')}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
