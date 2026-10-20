import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

type Props = {
  params: { tenantSlug: string; postSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;

  const { data: tenant } = await supabase
    .from('tenants')
    .select('id, name')
    .eq('slug', resolvedParams.tenantSlug)
    .single();

  if (!tenant) return { title: 'Not Found' };

  const { data: post } = await supabase
    .from('posts')
    .select('title, content')
    .eq('tenant_id', tenant.id)
    .eq('slug', resolvedParams.postSlug)
    .eq('status', 'published')
    .single();

  if (!post) return { title: 'Not Found' };

  const stripHtml = (html: string) =>
    html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim().substring(0, 160) + '...';

  return {
    title: `${post.title} | ${tenant.name}`,
    description: post.content ? stripHtml(post.content) : '',
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;

  const { data: tenant } = await supabase
    .from('tenants')
    .select('id, name')
    .eq('slug', resolvedParams.tenantSlug)
    .single();

  if (!tenant) notFound();

  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('tenant_id', tenant.id)
    .eq('slug', resolvedParams.postSlug)
    .eq('status', 'published')
    .single();

  if (!post) notFound();

  const plainText = (post.content || '')
    .replace(/<[^>]*>?/gm, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = plainText ? plainText.split(' ').length : 0;
  const readMinutes = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-dvh bg-[#FAF9F6] font-sans text-slate-900 pb-24">
      {/* Editorial Top Bar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href={`/${resolvedParams.tenantSlug}/blog`}
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tất cả bài viết</span>
            </Link>
            <span className="h-4 w-px bg-slate-200" />
            <Link
              href={`/${resolvedParams.tenantSlug}`}
              className="text-xs font-semibold text-slate-900 hover:underline truncate max-w-[180px]"
            >
              {tenant.name}
            </Link>
          </div>

          <Link
            href={`/${resolvedParams.tenantSlug}/booking`}
            className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all"
          >
            <span>Đặt lịch hẹn</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Article Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono tabular-nums text-slate-400 mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.created_at).toLocaleDateString('vi-VN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {readMinutes} phút đọc ({wordCount} từ)
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-[1.15] tracking-[-0.03em]">
          {post.title}
        </h1>
      </div>

      {/* Article Thumbnail */}
      {post.thumbnail_url && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <div className="aspect-21/9 w-full rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-100">
            <img
              src={post.thumbnail_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          <article className="prose prose-slate prose-lg max-w-[68ch] mx-auto prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-slate-900 prose-img:rounded-2xl">
            <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          </article>
        </div>

        {/* Executive CTA Card */}
        <div className="mt-10 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-lg">
            <h3 className="text-xl font-semibold tracking-[-0.01em] mb-2">
              Trải nghiệm dịch vụ chuyên nghiệp tại {tenant.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Đặt lịch hẹn trực tuyến chỉ trong 30 giây để được đội ngũ chuyên viên chuẩn bị chu đáo nhất trước khi bạn ghé thăm.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={`/${resolvedParams.tenantSlug}/booking`}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs px-5 py-3 rounded-full transition-colors"
            >
              <span>Đặt lịch ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={`/${resolvedParams.tenantSlug}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-xs px-5 py-3 rounded-full border border-white/10 transition-colors"
            >
              <span>Về trang chủ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
