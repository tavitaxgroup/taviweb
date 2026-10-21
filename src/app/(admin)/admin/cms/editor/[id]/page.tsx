'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Save,
  Loader2,
  Image as ImageIcon,
  Sparkles,
  X,
  UploadCloud,
  Bot,
  CheckCircle2,
  Circle,
  Clock,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import TiptapEditor from '@/components/cms/TiptapEditor';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import toast from 'react-hot-toast';

export default function CMSEditor({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { user } = useAuth();
  const resolvedParams = React.use(params);
  const isNew = resolvedParams.id === 'new';

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [focusKeyword, setFocusKeyword] = useState('');
  const [status, setStatus] = useState('draft');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isIngestingRag, setIsIngestingRag] = useState(false);

  // AI States
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiTopic, setAiTopic] = useState('');
  const [aiTone, setAiTone] = useState('Chuyên nghiệp, hữu ích');
  const [aiKeywords, setAiKeywords] = useState('');
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [isUploadingThumbnail, setIsUploadingThumbnail] = useState(false);
  const thumbnailInputRef = React.useRef<HTMLInputElement>(null);

  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingThumbnail(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setThumbnailUrl(data.url);
        toast.success('Đã tải ảnh bìa lên.');
      } else {
        toast.error('Lỗi tải ảnh lên: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      console.error(err);
      toast.error('Lỗi kết nối khi tải ảnh.');
    } finally {
      setIsUploadingThumbnail(false);
      if (thumbnailInputRef.current) thumbnailInputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (!isNew) {
      loadPost();
    }
  }, [resolvedParams.id]);

  const loadPost = async () => {
    setIsLoading(true);
    try {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('id', resolvedParams.id)
        .single();

      if (data) {
        setTitle(data.title || '');
        setSlug(data.slug || '');
        setContent(data.content || '');
        setThumbnailUrl(data.thumbnail_url || '');
        setStatus(data.status || 'draft');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9 -]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (isNew) {
      setSlug(generateSlug(newTitle));
    }
  };

  const handleSave = async () => {
    if (!title.trim() || !slug.trim()) {
      toast.error('Vui lòng nhập đầy đủ Tiêu đề và Đường dẫn (Slug).');
      return;
    }

    setIsSaving(true);
    try {
      if (!user || !user.tenant_id) throw new Error('Not authenticated');

      const postData = {
        title: title.trim(),
        slug: slug.trim(),
        content,
        thumbnail_url: thumbnailUrl,
        status,
        tenant_id: user.tenant_id,
      };

      if (isNew) {
        const { error } = await supabase.from('posts').insert([postData]);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', resolvedParams.id);
        if (error) throw error;
      }

      toast.success('Đã lưu bài viết.');
      router.push('/admin/cms');
      router.refresh();
    } catch (e: any) {
      console.error(e);
      toast.error('Lỗi khi lưu bài viết: ' + e.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSyncToRag = async () => {
    const plainText = content.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
    if (!title.trim() || plainText.length < 30) {
      toast.error('Bài viết cần có tiêu đề và nội dung tối thiểu trước khi nạp vào Chatbot.');
      return;
    }
    setIsIngestingRag(true);
    try {
      const fullDocument = `BÀI VIẾT / TIN TỨC: ${title}\nĐường dẫn: /blog/${slug}\nNội dung chi tiết:\n${plainText}`;
      const res = await fetch('/api/admin/knowledge/ingest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: fullDocument,
          source_type: 'cms_post',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Lỗi nạp kiến thức');
      toast.success(`Đã đồng bộ bài viết vào AI Chatbot (${data.chunksCount || 1} phân đoạn).`);
    } catch (e: any) {
      toast.error('Không thể nạp vào Chatbot: ' + e.message);
    } finally {
      setIsIngestingRag(false);
    }
  };

  const handleGenerateAI = async () => {
    if (!aiTopic.trim()) {
      toast.error('Vui lòng nhập chủ đề bài viết.');
      return;
    }

    setIsGeneratingAi(true);
    try {
      const res = await fetch('/api/admin/cms/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: aiTopic,
          tone: aiTone,
          keywords: aiKeywords,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate content');

      setTitle(data.title);
      if (isNew) {
        setSlug(generateSlug(data.title));
      }
      if (aiKeywords && !focusKeyword) {
        setFocusKeyword(aiKeywords.split(',')[0].trim());
      }
      setContent(data.contentHtml);
      setIsAiModalOpen(false);
      toast.success('Trợ lý AI đã hoàn tất bản thảo bài viết.');
    } catch (e: any) {
      console.error(e);
      toast.error('Lỗi khi tạo bài viết AI: ' + e.message);
    } finally {
      setIsGeneratingAi(false);
    }
  };

  // Real-time SEO Analysis
  const seoMetrics = useMemo(() => {
    const plainText = content.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = plainText ? plainText.split(' ').length : 0;
    const readMinutes = Math.max(1, Math.ceil(wordCount / 200));

    const hasTitleLength = title.trim().length >= 30 && title.trim().length <= 75;
    const hasGoodWordCount = wordCount >= 250;
    const hasHeadings = /<h[23][^>]*>/i.test(content);
    const hasVisuals = Boolean(thumbnailUrl) || /<img[^>]*>/i.test(content);
    const hasCleanSlug = slug.trim().length >= 5 && !slug.includes(' ');
    const kwMatch = focusKeyword.trim()
      ? plainText.toLowerCase().includes(focusKeyword.trim().toLowerCase()) &&
        title.toLowerCase().includes(focusKeyword.trim().toLowerCase())
      : true;

    const checks = [
      {
        label: 'Độ dài tiêu đề chuẩn SEO (30–75 ký tự)',
        passed: hasTitleLength,
        points: 20,
      },
      {
        label: 'Nội dung chuyên sâu (≥ 250 từ)',
        passed: hasGoodWordCount,
        points: 25,
      },
      {
        label: 'Phân đoạn bằng thẻ tiêu đề H2 / H3',
        passed: hasHeadings,
        points: 20,
      },
      {
        label: 'Có ảnh đại diện hoặc hình minh họa',
        passed: hasVisuals,
        points: 20,
      },
      {
        label: focusKeyword.trim()
          ? `Chứa từ khóa "${focusKeyword.trim()}" ở tiêu đề & bài`
          : 'Đường dẫn tĩnh (Slug) chuẩn hóa',
        passed: focusKeyword.trim() ? kwMatch : hasCleanSlug,
        points: 15,
      },
    ];

    const score = checks.reduce((acc, c) => acc + (c.passed ? c.points : 0), 0);
    return { wordCount, readMinutes, checks, score };
  }, [title, slug, content, thumbnailUrl, focusKeyword]);

  if (isLoading) {
    return (
      <div className="p-8 flex justify-center items-center h-[60vh] bg-[#FAF9F6]">
        <Loader2 className="w-6 h-6 animate-spin text-slate-900" />
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#FAF9F6] pb-16">
      {/* Sticky Studio Top Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/cms"
            className="w-8 h-8 rounded-lg border border-slate-200/80 hover:border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-sm font-semibold text-slate-900">
              {isNew ? 'Soạn bài viết mới' : 'Biên tập bài viết'}
            </h1>
            <div className="flex items-center gap-3 text-[11px] font-mono tabular-nums text-slate-400">
              <span className="inline-flex items-center gap-1">
                <FileText className="w-3 h-3" />
                {seoMetrics.wordCount} từ
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />~{seoMetrics.readMinutes} phút đọc
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsAiModalOpen(true)}
            className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg border border-indigo-200/80 hover:border-indigo-300 bg-indigo-50/60 hover:bg-indigo-50 text-indigo-700 text-xs font-semibold transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Trợ lý AI viết bài</span>
          </button>

          <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="h-9 px-3 bg-slate-100/80 border border-slate-200/80 rounded-lg outline-none text-xs font-medium text-slate-800 cursor-pointer"
          >
            <option value="draft">Trạng thái: Bản nháp</option>
            <option value="published">Trạng thái: Xuất bản</option>
          </select>

          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center gap-1.5 h-9 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-xs shadow-indigo-600/20 transition-all disabled:opacity-40"
          >
            {isSaving ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5" />
            )}
            <span>Lưu bài viết</span>
          </button>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="max-w-7xl mx-auto px-6 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: Writing Canvas (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] p-6 sm:p-8">
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Nhập tiêu đề bài viết tại đây..."
              className="w-full text-2xl sm:text-3xl font-semibold text-slate-900 tracking-[-0.02em] placeholder:text-slate-300 outline-none border-0 bg-transparent mb-3"
            />

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pb-5 mb-5 border-b border-slate-100">
              <span className="shrink-0">/blog/</span>
              <input
                type="text"
                value={slug}
                onChange={e => setSlug(e.target.value)}
                placeholder="duong-dan-bai-viet"
                className="w-full bg-slate-50/70 hover:bg-slate-100/70 focus:bg-white px-2 py-1 rounded border border-transparent focus:border-slate-200 outline-none text-slate-700 transition-colors"
              />
            </div>

            <TiptapEditor content={content} onChange={setContent} />
          </div>
        </div>

        {/* RIGHT: Inspector & SEO Scorecard (4 cols) */}
        <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-20">
          {/* Live SEO Scorecard */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xs font-semibold text-slate-900">Chỉ số tối ưu SEO</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Chấm điểm trực tiếp theo nội dung</p>
              </div>
              <div
                className={`px-2.5 py-1 rounded-lg font-mono tabular-nums text-sm font-semibold border ${
                  seoMetrics.score >= 80
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                    : seoMetrics.score >= 50
                    ? 'bg-amber-50 text-amber-700 border-amber-200/80'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                {seoMetrics.score}/100
              </div>
            </div>

            {/* Focus Keyword Input */}
            <div className="mb-4">
              <label className="block text-[11px] font-medium text-slate-500 mb-1">
                Từ khóa mục tiêu (Focus Keyword)
              </label>
              <input
                type="text"
                value={focusKeyword}
                onChange={e => setFocusKeyword(e.target.value)}
                placeholder="VD: trồng răng implant, chăm sóc da..."
                className="w-full px-3 py-1.5 bg-slate-50/70 border border-slate-200/80 rounded-lg text-xs outline-none focus:border-slate-400"
              />
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              {seoMetrics.checks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  {item.passed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  )}
                  <span className={item.passed ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <label className="block text-xs font-semibold text-slate-900 mb-3">
              Ảnh đại diện bài viết (Thumbnail)
            </label>
            {thumbnailUrl ? (
              <div className="relative mb-3 rounded-xl overflow-hidden border border-slate-200/80 aspect-16/10 bg-slate-100">
                <img
                  src={thumbnailUrl}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setThumbnailUrl('')}
                  className="absolute top-2 right-2 bg-slate-900/80 hover:bg-slate-900 text-white px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors"
                >
                  Gỡ ảnh
                </button>
              </div>
            ) : (
              <div
                onClick={() => thumbnailInputRef.current?.click()}
                className="h-32 bg-slate-50/70 hover:bg-slate-100/60 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center mb-3 cursor-pointer transition-colors"
              >
                <ImageIcon className="w-6 h-6 text-slate-400 mb-1.5" />
                <span className="text-xs text-slate-500 font-medium">Nhấn để tải ảnh bìa</span>
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={thumbnailUrl}
                onChange={e => setThumbnailUrl(e.target.value)}
                placeholder="Hoặc dán URL hình ảnh..."
                className="w-full px-3 py-2 bg-slate-50/70 border border-slate-200/80 rounded-lg outline-none focus:border-slate-400 text-xs"
              />
              <input
                type="file"
                accept="image/*"
                ref={thumbnailInputRef}
                onChange={handleThumbnailUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => thumbnailInputRef.current?.click()}
                disabled={isUploadingThumbnail}
                className="shrink-0 w-9 h-9 flex items-center justify-center bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-lg transition-colors"
                title="Tải ảnh từ máy tính"
              >
                {isUploadingThumbnail ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <UploadCloud className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Sync to AI Chatbot RAG Card */}
          <div className="bg-gradient-to-br from-indigo-50/70 via-white to-emerald-50/40 border border-indigo-200/70 p-5 rounded-2xl shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-100/80 text-indigo-600 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-semibold text-slate-900">Đồng bộ Kho tri thức AI Chatbot</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Đẩy nội dung bài viết này vào bộ nhớ RAG để Trợ lý AI trên website tự động giải đáp khi khách hàng hỏi về chủ đề này.
            </p>
            <button
              type="button"
              onClick={handleSyncToRag}
              disabled={isIngestingRag}
              className="w-full h-9 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-xs shadow-indigo-600/15 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
            >
              {isIngestingRag ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Đang nạp vào AI...</span>
                </>
              ) : (
                <span>Nạp bài viết vào AI Chatbot</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* AI Writer Modal */}
      {isAiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/10 w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <h3 className="text-base font-semibold text-slate-900">
                  Trợ lý AI Biên tập Bài viết Chuẩn SEO
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAiModalOpen(false)}
                className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1.5">
                  Chủ đề hoặc tiêu đề dự kiến <span className="text-rose-500">*</span>
                </label>
                <textarea
                  value={aiTopic}
                  onChange={e => setAiTopic(e.target.value)}
                  placeholder="Ví dụ: Quy trình 5 bước bọc răng sứ thẩm mỹ an toàn, không ê buốt"
                  className="w-full px-3.5 py-2.5 bg-slate-50/70 border border-slate-200/90 rounded-xl outline-none focus:border-slate-400 text-xs resize-none h-24 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">Phong cách viết</label>
                  <select
                    value={aiTone}
                    onChange={e => setAiTone(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50/70 border border-slate-200/90 rounded-xl outline-none focus:border-slate-400 text-xs text-slate-900"
                  >
                    <option value="Chuyên nghiệp, hữu ích">Chuyên nghiệp & Chuyên sâu</option>
                    <option value="Gần gũi, chia sẻ">Gần gũi & Tư vấn tận tâm</option>
                    <option value="Chuẩn SEO, thuyết phục">Thuyết phục & Chuyển đổi cao</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">
                    Từ khóa SEO (cách nhau dấu phẩy)
                  </label>
                  <input
                    type="text"
                    value={aiKeywords}
                    onChange={e => setAiKeywords(e.target.value)}
                    placeholder="bọc răng sứ, nha khoa uy tín..."
                    className="w-full px-3 py-2.5 bg-slate-50/70 border border-slate-200/90 rounded-xl outline-none focus:border-slate-400 text-xs text-slate-900"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setIsAiModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleGenerateAI}
                disabled={isGeneratingAi || !aiTopic.trim()}
                className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg text-xs font-semibold shadow-xs shadow-indigo-600/20 transition-all disabled:opacity-40"
              >
                {isGeneratingAi ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Đang biên tập...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
                    <span>Khởi tạo bản thảo</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
