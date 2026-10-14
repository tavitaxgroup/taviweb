'use client';

import React, { useState, useRef } from 'react';
import { Database, RefreshCw, Upload } from 'lucide-react';

export function KnowledgeManagement() {
  const [ragContent, setRagContent] = useState('');
  const [loadingRag, setLoadingRag] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const ingestRag = async () => {
    if (!ragContent.trim()) return alert('Vui lòng nhập nội dung kiến thức!');
    setLoadingRag(true);
    try {
      const res = await fetch('/api/admin/knowledge/ingest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: ragContent, source_type: `custom:${Date.now()}` }),
      });
      const data = await res.json();
      if (data.success) {
        alert(`Đã nạp thành công! Tạo ra ${data.chunksCount} đoạn kiến thức nhỏ.`);
        setRagContent('');
        window.dispatchEvent(new Event('refresh_knowledge'));
      } else {
        alert(data.error || 'Lỗi nạp dữ liệu');
      }
    } catch (error) {
      alert('Có lỗi xảy ra khi nạp RAG.');
    } finally {
      setLoadingRag(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (fileInputRef.current) fileInputRef.current.value = '';

    const allowedTypes = ['.pdf', '.docx', '.xlsx', '.csv', '.txt'];
    const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    
    if (!allowedTypes.includes(ext)) {
      alert(`Định dạng ${ext} không được hỗ trợ. Vui lòng chọn PDF, DOCX, XLSX, CSV hoặc TXT.`);
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/knowledge/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        alert(`Đã phân tích file thành công! AI đã học được ${data.chunksCount} đoạn kiến thức mới.`);
        window.dispatchEvent(new Event('refresh_knowledge'));
      } else {
        alert(data.error || 'Có lỗi khi tải lên file.');
      }
    } catch (error) {
      alert('Có lỗi mạng khi tải file.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <Database className="w-5 h-5 text-emerald-600" />
        <h2 className="text-lg font-bold text-slate-800">2. Nạp Kiến Thức (RAG / Knowledge Base)</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4">
        Dán bảng giá, chính sách bảo hành, mô tả sản phẩm vào đây, hoặc upload file tài liệu. AI sẽ tự động học để trả lời khách.
      </p>
      <div className="flex-1 min-h-[200px] mb-4">
        <textarea
          value={ragContent}
          onChange={(e) => setRagContent(e.target.value)}
          placeholder="Nhập thông tin sản phẩm, bảng giá, FAQ... vào đây."
          className="w-full h-full min-h-[200px] p-4 bg-emerald-50 border border-emerald-100 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none resize-none transition"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button 
          onClick={ingestRag}
          disabled={loadingRag || uploading}
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-emerald-700 transition disabled:opacity-70"
        >
          {loadingRag ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Database className="w-5 h-5" />}
          Nạp Chữ Trực Tiếp
        </button>

        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept=".pdf,.docx,.xlsx,.csv,.txt"
          onChange={handleFileUpload}
        />
        
        <button 
          onClick={() => fileInputRef.current?.click()}
          disabled={loadingRag || uploading}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-slate-900 transition disabled:opacity-70"
        >
          {uploading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
          Tải Lên File (PDF, Word...)
        </button>
      </div>
    </div>
  );
}
