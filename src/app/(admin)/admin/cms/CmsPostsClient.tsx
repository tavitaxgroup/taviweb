'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FileText, Search, Plus, ExternalLink, Clock } from 'lucide-react';
import PostActions from './PostActions';

interface CmsPostsClientProps {
  posts: any[];
  tenantSlug: string;
}

export default function CmsPostsClient({ posts, tenantSlug }: CmsPostsClientProps) {
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getWordCount = (html: string) => {
    if (!html) return 0;
    const text = html.replace(/<[^>]*>?/gm, ' ').trim();
    if (!text) return 0;
    return text.split(/\s+/).length;
  };

  const publishedCount = posts.filter(p => p.status === 'published').length;
  const draftCount = posts.length - publishedCount;
  const totalWords = useMemo(
    () => posts.reduce((acc, p) => acc + getWordCount(p.content || ''), 0),
    [posts]
  );

  const filteredPosts = useMemo(() => {
    return posts.filter(p => {
      if (statusFilter === 'published' && p.status !== 'published') return false;
      if (statusFilter === 'draft' && p.status === 'published') return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = String(p.title || '')
          .toLowerCase()
          .includes(q);
        const matchSlug = String(p.slug || '')
          .toLowerCase()
          .includes(q);
        if (!matchTitle && !matchSlug) return false;
      }
      return true;
    });
  }, [posts, statusFilter, searchQuery]);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 tracking-[-0.02em]">
            Biên tập Bài viết & Tạp chí SEO (AI CMS)
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Xuất bản nội dung chuẩn SEO và đồng bộ trực tiếp vào kho tri thức AI Chatbot
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {tenantSlug && (
            <Link
              href={`/${tenantSlug}/blog`}
              target="_blank"
              className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-semibold transition-colors"
            >
              <span>Xem trang Blog</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          )}
          <Link
            href="/admin/cms/editor/new"
            className="inline-flex items-center gap-1.5 h-9 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all active:scale-[0.985]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Viết bài mới</span>
          </Link>
        </div>
      </div>

      {/* Executive KPI Strip */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70 overflow-hidden">
        <div className="px-5 py-4">
          <p className="text-xs font-medium text-slate-500 mb-1">Tổng bài viết</p>
          <p className="text-2xl font-mono tabular-nums font-semibold text-slate-900">
            {posts.length}
          </p>
        </div>
        <div className="px-5 py-4">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
            <span>Đã xuất bản</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <p className="text-2xl font-mono tabular-nums font-semibold text-emerald-700">
            {publishedCount}
          </p>
        </div>
        <div className="px-5 py-4">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
            <span>Bản nháp</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </div>
          <p className="text-2xl font-mono tabular-nums font-semibold text-slate-900">
            {draftCount}
          </p>
        </div>
        <div className="px-5 py-4 bg-slate-50/40">
          <p className="text-xs font-medium text-slate-500 mb-1">Tổng khối lượng nội dung</p>
          <p className="text-2xl font-mono tabular-nums font-semibold text-slate-900">
            {new Intl.NumberFormat('vi-VN').format(totalWords)}{' '}
            <span className="text-xs font-sans font-normal text-slate-400">từ</span>
          </p>
        </div>
      </div>

      {/* Filter & Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] overflow-hidden">
        {/* Control Bar */}
        <div className="px-5 py-3.5 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
            {[
              { id: 'all', label: `Tất cả (${posts.length})` },
              { id: 'published', label: `Đã xuất bản (${publishedCount})` },
              { id: 'draft', label: `Bản nháp (${draftCount})` },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStatusFilter(tab.id as any)}
                className={`px-3 py-1 text-xs rounded-md transition-all ${
                  statusFilter === tab.id
                    ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800 font-medium'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Tìm tiêu đề hoặc đường dẫn slug..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="h-8 pl-8 pr-3 text-xs rounded-lg border border-slate-200/80 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 w-[230px]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-500 text-[11px] font-medium">
                <th className="py-3 pl-6 pr-4 font-medium">Bài viết</th>
                <th className="py-3 px-4 font-medium">Đường dẫn (Slug)</th>
                <th className="py-3 px-4 font-medium">Độ dài</th>
                <th className="py-3 px-4 font-medium">Trạng thái</th>
                <th className="py-3 px-4 font-medium">Ngày tạo</th>
                <th className="py-3 pl-4 pr-6 text-right font-medium">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => {
                  const words = getWordCount(post.content || '');
                  const readMin = Math.max(1, Math.ceil(words / 200));

                  return (
                    <tr key={post.id} className="hover:bg-slate-50/70 transition-colors group">
                      <td className="py-3.5 pl-6 pr-4">
                        <div className="flex items-center gap-3.5">
                          <div className="w-14 h-10 rounded-lg bg-slate-100 border border-slate-200/80 overflow-hidden shrink-0 flex items-center justify-center">
                            {post.thumbnail_url ? (
                              <img
                                src={post.thumbnail_url}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <FileText className="w-4 h-4 text-slate-400" />
                            )}
                          </div>
                          <Link
                            href={`/admin/cms/editor/${post.id}`}
                            className="font-semibold text-slate-900 hover:text-slate-600 transition-colors line-clamp-1 text-[13px]"
                          >
                            {post.title}
                          </Link>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 font-mono text-[11px]">
                        /{post.slug}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 font-mono tabular-nums text-[11px] whitespace-nowrap">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {readMin} phút ({words} từ)
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {post.status === 'published' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Đã xuất bản
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            Bản nháp
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 font-mono tabular-nums whitespace-nowrap">
                        {new Date(post.created_at).toLocaleDateString('vi-VN')}
                      </td>
                      <td className="py-3.5 pl-4 pr-6 text-right">
                        <PostActions
                          postId={post.id}
                          tenantSlug={tenantSlug}
                          postSlug={post.slug}
                          currentStatus={post.status || 'draft'}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="p-16 text-center text-slate-400">
                    <FileText className="w-8 h-8 mx-auto mb-2.5 text-slate-300" />
                    <p className="font-semibold text-slate-700 text-xs">
                      Chưa có bài viết nào phù hợp
                    </p>
                    <p className="text-xs mt-1 text-slate-400">
                      Hãy nhấn &quot;Viết bài mới&quot; để khởi tạo nội dung chuẩn SEO đầu tiên.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
