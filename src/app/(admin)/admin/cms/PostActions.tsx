'use client';

import { Edit, Trash2, ExternalLink, CheckCircle2, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function PostActions({
  postId,
  tenantSlug,
  postSlug,
  currentStatus = 'draft',
}: {
  postId: string;
  tenantSlug: string;
  postSlug: string;
  currentStatus?: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const handleToggleStatus = async () => {
    setBusy(true);
    const nextStatus = currentStatus === 'published' ? 'draft' : 'published';
    try {
      const { error } = await supabase
        .from('posts')
        .update({ status: nextStatus })
        .eq('id', postId);
      if (error) throw error;
      toast.success(
        nextStatus === 'published'
          ? 'Đã xuất bản bài viết!'
          : 'Đã chuyển bài viết về bản nháp'
      );
      router.refresh();
    } catch (err: any) {
      toast.error('Lỗi cập nhật: ' + err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) return;
    setBusy(true);
    try {
      const { error } = await supabase.from('posts').delete().eq('id', postId);
      if (error) throw error;
      toast.success('Đã xóa bài viết!');
      router.refresh();
    } catch (err: any) {
      toast.error('Lỗi khi xóa: ' + err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex justify-end items-center gap-1.5">
      <button
        onClick={handleToggleStatus}
        disabled={busy}
        className={`p-2 rounded-lg transition-colors ${
          currentStatus === 'published'
            ? 'text-amber-600 hover:bg-amber-50'
            : 'text-emerald-600 hover:bg-emerald-50'
        }`}
        title={
          currentStatus === 'published'
            ? 'Chuyển về bản nháp'
            : 'Xuất bản bài viết ngay'
        }
      >
        {currentStatus === 'published' ? (
          <EyeOff className="w-4 h-4" />
        ) : (
          <CheckCircle2 className="w-4 h-4" />
        )}
      </button>
      {tenantSlug && (
        <a 
          href={`/${tenantSlug}/blog/${postSlug}`}
          target="_blank"
          rel="noreferrer"
          className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
          title="Xem bài viết trên web"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
      <Link 
        href={`/admin/cms/editor/${postId}`}
        className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
        title="Sửa bài viết"
      >
        <Edit className="w-4 h-4" />
      </Link>
      <button 
        onClick={handleDelete}
        disabled={busy}
        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
        title="Xóa bài viết"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
