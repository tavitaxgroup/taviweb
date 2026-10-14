import { BookOpen, Plus, Users, GraduationCap, CheckCircle2, FileText } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import LMSCourseActions from './LMSCourseActions';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';

export const dynamic = 'force-dynamic';

export default async function LMSPage() {
  let courses: any[] = [];
  
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('crm_token')?.value;
    
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      const { data } = await supabase
        .from('courses')
        .select(`
          *,
          enrollments (count)
        `)
        .eq('tenant_id', decoded.tenant_id)
        .order('created_at', { ascending: false });
        
      if (data) {
        courses = data;
      }
    }
  } catch (e) {
    console.error('Error loading courses:', e);
  }

  const publishedCount = courses.filter((c) => c.status === 'published').length;
  const totalStudents = courses.reduce(
    (sum, c) => sum + (c.enrollments?.[0]?.count || 0),
    0
  );

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-300 space-y-6">
      {/* Top Switcher & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              <BookOpen className="w-3.5 h-3.5" /> Khóa học Video (LMS)
            </span>
            <Link
              href="/admin/edu"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5" /> Quản lý Lớp học & Học phí (Edu) →
            </Link>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            Quản lý Khóa học Trực tuyến (E-Learning LMS)
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Xây dựng giáo trình video, bài giảng trực tuyến và quản lý học viên đăng ký trên website.
          </p>
        </div>
        <Link 
          href="/admin/lms/courses/new"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-sm shadow-indigo-200 shrink-0"
        >
          <Plus className="w-4 h-4" />
          Tạo khóa học mới
        </Link>
      </div>

      {/* KPI Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tổng khóa học</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">{courses.length}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Đang mở bán</p>
            <p className="text-2xl font-extrabold text-emerald-600 mt-1">{publishedCount}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lượt ghi danh</p>
            <p className="text-2xl font-extrabold text-sky-600 mt-1">{totalStudents}</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Course Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="p-4 pl-6">Khóa học</th>
                <th className="p-4">Học phí</th>
                <th className="p-4">Học viên</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4 text-right pr-6">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <tr key={course.id} className="hover:bg-slate-50/60 transition-colors group">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden border border-slate-200">
                          {course.thumbnail_url ? (
                            <img src={course.thumbnail_url} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                              <BookOpen className="w-5 h-5" />
                            </div>
                          )}
                        </div>
                        <div>
                          <Link
                            href={`/admin/lms/courses/${course.id}`}
                            className="font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                          >
                            {course.title}
                          </Link>
                          <p className="text-xs text-slate-400 font-mono">/{course.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-bold text-slate-700 text-sm">
                      {course.price > 0 ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.price) : 'Miễn phí'}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                        <Users className="w-4 h-4 text-slate-400" />
                        <span className="font-bold">{course.enrollments?.[0]?.count || 0}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        course.status === 'published' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {course.status === 'published' ? 'Đang mở bán' : 'Bản nháp'}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <LMSCourseActions
                        courseId={course.id}
                        currentStatus={course.status || 'draft'}
                        courseTitle={course.title}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-slate-400">
                    <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                    <p className="font-bold text-slate-600">Chưa có khóa học trực tuyến nào.</p>
                    <p className="text-sm mt-1">Bấm &quot;Tạo khóa học mới&quot; để xây dựng chương trình học đầu tiên.</p>
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
