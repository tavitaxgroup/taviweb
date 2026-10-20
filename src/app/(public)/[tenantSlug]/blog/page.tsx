import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Calendar, ArrowRight, FileText, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function BlogListPage({
  params,
}: {
  params: { tenantSlug: string };
}) {
  const resolvedParams = await params;

  const { data: tenant, error: tenantErr } = await supabase
    .from('tenants')
    .select('id, name, contact_info')
    .eq('slug', resolvedParams.tenantSlug)
    .single();

  if (tenantErr || !tenant) {
    notFound();
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('tenant_id', tenant.id)
    .eq('status', 'published')
    .order('created_at', { ascending: false });

  const stripHtml = (html: string) => {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
  };

  const getReadMinutes = (html: string) => {
    const text = stripHtml(html);
    const words = text ? text.split(' ').length : 0;
    return Math.max(1, Math.ceil(words / 200));
  };

  const featuredPost = posts && posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts && posts.length > 1 ? posts.slice(1) : [];

  return (
    <div className="min-h-dvh bg-[#FAF9F6] font-sans text-slate-900 pb-24">
      {/* Editorial Top Navigation */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href={`/${resolvedParams.tenantSlug}`}
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Trang chủ</span>
            </Link>
            <span className="h-4 w-px bg-slate-200" />
            <Link
              href={`/${resolvedParams.tenantSlug}/blog`}
              className="text-sm font-semibold text-slate-900 tracking-[-0.01em]"
            >
              {tenant.name}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/${resolvedParams.tenantSlug}/booking`}
              className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all"
            >
              <span>Đặt lịch hẹn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Editorial Title Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 border-b border-slate-200/70">
        <h1 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-[-0.03em] leading-tight max-w-3xl">
          Tạp chí chuyên môn & Cẩm nang từ {tenant.name}
        </h1>
        <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
          Tổng hợp kiến thức chuyên sâu, xu hướng mới nhất và chia sẻ thực tế từ đội ngũ chuyên gia.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        {!posts || posts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200/80 max-w-xl mx-auto my-8">
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">
              Chưa có bài viết nào được xuất bản
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Nội dung cẩm nang đang được đội ngũ biên tập cập nhật.
            </p>
            <Link
              href={`/${resolvedParams.tenantSlug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay về trang chủ</span>
            </Link>
          </div>
        ) : (
          <div className="space-y-14">
            {/* Featured First Post — Editorial Split */}
            {featuredPost && (
              <Link
                href={`/${resolvedParams.tenantSlug}/blog/${featuredPost.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/80 shadow-[0_2px_16px_-4px_rgba(15,23,42,0.04)] hover:border-slate-300 transition-all duration-300"
              >
                <div className="lg:col-span-7 aspect-16/10 w-full rounded-2xl overflow-hidden bg-slate-100 relative">
                  {featuredPost.thumbnail_url ? (
                    <img
                      src={featuredPost.thumbnail_url}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <FileText className="w-12 h-12" />
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div className="flex items-center gap-3 text-xs font-mono tabular-nums text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(featuredPost.created_at).toLocaleDateString('vi-VN')}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {getReadMinutes(featuredPost.content)} phút đọc
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-[-0.02em] leading-snug group-hover:text-slate-700 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {stripHtml(featuredPost.content)}
                  </p>

                  <div className="pt-2 inline-flex items-center gap-2 text-xs font-semibold text-slate-900">
                    <span>Đọc toàn bộ bài viết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining Articles Grid */}
            {remainingPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map(post => (
                  <Link
                    key={post.id}
                    href={`/${resolvedParams.tenantSlug}/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-300 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all duration-300 flex flex-col"
                  >
                    <div className="aspect-16/10 bg-slate-100 relative overflow-hidden">
                      {post.thumbnail_url ? (
                        <img
                          src={post.thumbnail_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                          <FileText className="w-8 h-8" />
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2.5 text-[11px] font-mono tabular-nums text-slate-400 mb-2.5">
                        <span>{new Date(post.created_at).toLocaleDateString('vi-VN')}</span>
                        <span>·</span>
                        <span>{getReadMinutes(post.content)} phút đọc</span>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 tracking-[-0.01em] leading-snug mb-2.5 line-clamp-2 group-hover:text-slate-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-5 flex-1">
                        {stripHtml(post.content)}
                      </p>

                      <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 mt-auto">
                        <span>Xem chi tiết</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
