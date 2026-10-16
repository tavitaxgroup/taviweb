'use client';

import { Edit, Trash2, CheckCircle2, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function LMSCourseActions({
  courseId,
  currentStatus,
  courseTitle,
}: {
  courseId: string;
  currentStatus: string;
  courseTitle: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const handleToggleStatus = async () => {
    setBusy(true);
    const nextStatus = currentStatus === 'published' ? 'draft' : 'published';
    try {
      const { error } = await supabase
        .from('courses')
        .update({ status: nextStatus })
        .eq('id', courseId);
      if (error) throw error;
      toast.success(
        nextStatus === 'published'
          ? 'Đã mở bán khóa học!'
          : 'Đã chuyển khóa học về bản nháp'
      );
      router.refresh();
    } catch (err: any) {
      toast.error('Lỗi cập nhật trạng thái: ' + err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async () => {
    if (
      !window.confirm(
        `Bạn có chắc chắn muốn xóa khóa học "${courseTitle}" và toàn bộ bài giảng bên trong không?`
      )
    )
      return;

    setBusy(true);
    try {
      const { error } = await supabase
        .from('courses')
        .delete()
        .eq('id', courseId);
      if (error) throw error;
      toast.success('Đã xóa khóa học!');
      router.refresh();
    } catch (err: any) {
      toast.error('Lỗi khi xóa khóa học: ' + err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex justify-end items-center gap-1.5">
      <button
        onClick={handleToggleStatus}
        disabled={busy}
        className={`p-2 rounded-lg transition-colors text-xs font-bold flex items-center gap-1 ${
          currentStatus === 'published'
            ? 'text-amber-600 hover:bg-amber-50'
            : 'text-emerald-600 hover:bg-emerald-50'
        }`}
        title={
          currentStatus === 'published'
            ? 'Tạm ẩn (Chuyển về nháp)'
            : 'Xuất bản khóa học'
        }
      >
        {currentStatus === 'published' ? (
          <EyeOff className="w-4 h-4" />
        ) : (
          <CheckCircle2 className="w-4 h-4" />
        )}
      </button>
      <Link
        href={`/admin/lms/courses/${courseId}`}
        className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
        title="Sửa khóa học & Nội dung"
      >
        <Edit className="w-4 h-4" />
      </Link>
      <button
        onClick={handleDelete}
        disabled={busy}
        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
        title="Xóa khóa học"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
