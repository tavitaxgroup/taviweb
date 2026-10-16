import { FileText, Plus, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import PostActions from './PostActions';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';

export const dynamic = 'force-dynamic';

export default async function CMSPage() {
  let posts: any[] = [];
  let tenantSlug = '';
  
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('crm_token')?.value;
    
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      
      const { data: tenant } = await supabase.from('tenants').select('slug').eq('id', decoded.tenant_id).single();
      if (tenant) {
        tenantSlug = tenant.slug;
      }

      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('tenant_id', decoded.tenant_id)
        .order('created_at', { ascending: false });
        
      if (data) {
        posts = data;
      }
    }
  } catch (e) {
    console.error('Error loading posts:', e);
  }

  const publishedCount = posts.filter((p) => p.status === 'published').length;
  const draftCount = posts.length - publishedCount;

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-300 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <FileText className="w-7 h-7 text-indigo-600" />
            Quản lý Bài viết & Tin tức (AI CMS)
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Soạn thảo nội dung chuẩn SEO hoặc dùng Trợ lý AI viết bài tự động cho website.
          </p>
        </div>
        <Link 
          href="/admin/cms/editor/new"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-sm shadow-indigo-200 shrink-0"
        >
          <Plus className="w-4 h-4" />
          Viết bài mới
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tổng bài viết</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">{posts.length}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Đã xuất bản</p>
            <p className="text-2xl font-extrabold text-emerald-600 mt-1">{publishedCount}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
            ✓
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bản nháp</p>
            <p className="text-2xl font-extrabold text-amber-600 mt-1">{draftCount}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
            ✎
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="p-4 pl-6">Bài viết</th>
                <th className="p-4">Đường dẫn (Slug)</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4">Ngày tạo</th>
                <th className="p-4 text-right pr-6">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50/60 transition-colors group">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-10 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                          {post.thumbnail_url ? (
                            <img src={post.thumbnail_url} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <FileText className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                        <Link
                          href={`/admin/cms/editor/${post.id}`}
                          className="font-bold text-slate-900 hover:text-indigo-600 transition-colors line-clamp-1"
                        >
                          {post.title}
                        </Link>
                      </div>
                    </td>
                    <td className="p-4 text-slate-500 text-xs font-mono">/{post.slug}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        post.status === 'published' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {post.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 text-sm">
                      {new Date(post.created_at).toLocaleDateString('vi-VN')}
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <PostActions
                        postId={post.id}
                        tenantSlug={tenantSlug}
                        postSlug={post.slug}
                        currentStatus={post.status || 'draft'}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-slate-400">
                    <FileText className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                    <p className="font-bold text-slate-600">Chưa có bài viết nào.</p>
                    <p className="text-sm mt-1">Hãy bấm &quot;Viết bài mới&quot; hoặc dùng AI để tạo bài viết đầu tiên.</p>
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
