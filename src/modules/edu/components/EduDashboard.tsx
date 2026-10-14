"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../crm/contexts/AuthContext';
import { EduService } from '../api/edu.service';
import { CRMClass, CRMEnrollment } from '../types';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Wallet,
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react';

interface DashboardMetrics {
  totalStudents: number;
  activeClasses: number;
  totalRevenue: number;
  pendingTuition: number;
}

export default function EduDashboard({ onChangeView }: { onChangeView: (view: 'courses' | 'classes' | 'enrollments') => void }) {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalStudents: 0,
    activeClasses: 0,
    totalRevenue: 0,
    pendingTuition: 0
  });
  const [recentEnrollments, setRecentEnrollments] = useState<CRMEnrollment[]>([]);
  const [activeClassesList, setActiveClassesList] = useState<CRMClass[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.tenant_id) loadDashboardData();
  }, [user]);

  const loadDashboardData = async () => {
    if (!user?.tenant_id) return;
    try {
      setLoading(true);
      const [enrollments, classes] = await Promise.all([
        EduService.getAllEnrollments(user.tenant_id),
        EduService.getClasses(user.tenant_id)
      ]);

      // Calculate Metrics
      let totalStudents = new Set(enrollments.map(e => e.contact_id)).size;
      let activeClasses = classes.filter(c => c.status === 'ongoing' || c.status === 'upcoming').length;
      
      let totalRevenue = 0;
      let pendingTuition = 0;

      enrollments.forEach(enr => {
        totalRevenue += (enr.amount_paid || 0);
        const tuition = enr.class?.course?.price || 0;
        const debt = Math.max(0, tuition - (enr.amount_paid || 0));
        pendingTuition += debt;
      });

      setMetrics({
        totalStudents,
        activeClasses,
        totalRevenue,
        pendingTuition
      });

      setRecentEnrollments(enrollments.slice(0, 5));
      setActiveClassesList(classes.filter(c => c.status === 'ongoing').slice(0, 5));

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (val: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  if (loading) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div className="animate-spin h-8 w-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">Tổng quan Đào tạo</h1>
        <p className="text-slate-500 mt-1">Nắm bắt nhanh tình hình hoạt động của trung tâm</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button 
          onClick={() => onChangeView('enrollments')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-2xl flex items-center gap-4 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md"
        >
          <div className="bg-white/20 p-3 rounded-xl"><Users className="w-6 h-6" /></div>
          <div className="text-left">
            <div className="font-bold">Ghi danh học viên</div>
            <div className="text-indigo-100 text-sm">Thêm học viên vào lớp</div>
          </div>
        </button>
        <button 
          onClick={() => onChangeView('classes')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-2xl flex items-center gap-4 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md"
        >
          <div className="bg-white/20 p-3 rounded-xl"><BookOpen className="w-6 h-6" /></div>
          <div className="text-left">
            <div className="font-bold">Mở lớp học mới</div>
            <div className="text-emerald-100 text-sm">Quản lý lịch và giáo viên</div>
          </div>
        </button>
        <button 
          onClick={() => onChangeView('enrollments')}
          className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-2xl flex items-center gap-4 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md"
        >
          <div className="bg-white/20 p-3 rounded-xl"><Wallet className="w-6 h-6" /></div>
          <div className="text-left">
            <div className="font-bold">Thu học phí</div>
            <div className="text-amber-100 text-sm">Cập nhật công nợ</div>
          </div>
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="text-slate-500 text-sm font-semibold">TỔNG HỌC VIÊN</div>
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><GraduationCap className="w-5 h-5" /></div>
          </div>
          <div className="text-3xl font-extrabold text-slate-800">{metrics.totalStudents}</div>
        </div>
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="text-slate-500 text-sm font-semibold">LỚP ĐANG MỞ</div>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><BookOpen className="w-5 h-5" /></div>
          </div>
          <div className="text-3xl font-extrabold text-slate-800">{metrics.activeClasses}</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="text-slate-500 text-sm font-semibold">DOANH THU ĐÃ THU</div>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><TrendingUp className="w-5 h-5" /></div>
          </div>
          <div className="text-2xl font-extrabold text-slate-800 truncate" title={formatCurrency(metrics.totalRevenue)}>{formatCurrency(metrics.totalRevenue)}</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="text-slate-500 text-sm font-semibold">CÔNG NỢ CẦN THU</div>
            <div className="p-2 bg-red-50 text-red-600 rounded-lg"><Wallet className="w-5 h-5" /></div>
          </div>
          <div className="text-2xl font-extrabold text-red-600 truncate" title={formatCurrency(metrics.pendingTuition)}>{formatCurrency(metrics.pendingTuition)}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Enrollments */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h3 className="font-bold text-slate-800">Ghi danh gần đây</h3>
            <button onClick={() => onChangeView('enrollments')} className="text-sm text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-1">Xem tất cả <ArrowRight className="w-4 h-4" /></button>
          </div>
          <div className="divide-y divide-slate-100 flex-1">
            {recentEnrollments.length === 0 ? (
              <div className="p-8 text-center text-slate-500">Chưa có học viên nào</div>
            ) : (
              recentEnrollments.map(enr => (
                <div key={enr.id} className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                      {enr.contact?.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">{enr.contact?.name}</div>
                      <div className="text-xs text-slate-500">{enr.class?.name}</div>
                    </div>
                  </div>
                  <div className={`px-2.5 py-1 rounded-full text-xs font-semibold ${enr.payment_status === 'paid' ? 'bg-emerald-100 text-emerald-700' : enr.payment_status === 'partial' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {enr.payment_status === 'paid' ? 'Đã đóng' : enr.payment_status === 'partial' ? 'Nợ một phần' : 'Chưa đóng'}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Active Classes */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h3 className="font-bold text-slate-800">Lớp đang diễn ra</h3>
            <button onClick={() => onChangeView('classes')} className="text-sm text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-1">Xem tất cả <ArrowRight className="w-4 h-4" /></button>
          </div>
          <div className="divide-y divide-slate-100 flex-1">
            {activeClassesList.length === 0 ? (
              <div className="p-8 text-center text-slate-500">Không có lớp nào đang diễn ra</div>
            ) : (
              activeClassesList.map(cls => (
                <div key={cls.id} className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{cls.name}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" /> {cls.schedule_desc || 'Chưa có lịch'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-700">{cls.enrollments?.[0]?.count || 0} học viên</div>
                    <div className="text-xs text-slate-500">{cls.teacher?.name || 'Chưa phân công'}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
