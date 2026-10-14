'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import BookingAdmin from '@/modules/booking/components/BookingAdmin';
import ResourceManagement from '@/modules/booking/components/ResourceManagement';
import ServiceManagement from '@/modules/booking/components/ServiceManagement';
import BookingSettings from '@/modules/booking/components/BookingSettings';
import { Calendar as CalendarIcon, Scissors, Utensils } from 'lucide-react';
import Link from 'next/link';

export default function StandaloneBookingAdminPage() {
  const { user, logout, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<'calendar' | 'resources' | 'services' | 'settings'>('calendar');
  const [templateKey, setTemplateKey] = useState<string>('salon_toc');
  const [tenantSlug, setTenantSlug] = useState<string>('');

  useEffect(() => {
    if (user?.tenant) {
      setTemplateKey(user.tenant.template_key || 'salon_toc');
      setTenantSlug(user.tenant.slug || '');
    } else if (user?.tenant_id) {
      // Fallback cho trường hợp user.tenant chưa được load kịp
      import('@/modules/booking/api/booking.service').then(({ BookingService }) => {
        BookingService.getTemplateKey(user.tenant_id as string).then(key => {
          setTemplateKey(key);
        });
      });
    }
  }, [user]);

  if (loading) {
    return <div className="flex h-[calc(100vh-4rem)] items-center justify-center bg-slate-50"><div className="animate-spin h-8 w-8 border-4 border-indigo-600 rounded-full border-t-transparent"></div></div>;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-[#f8fafc] font-sans overflow-hidden">
      {/* Top Navigation for Booking Module */}
      <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-sm z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
            <CalendarIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-extrabold text-slate-900">
                Điều Phối Đặt Lịch (Booking)
              </h1>
              <select
                value={templateKey}
                onChange={(e) => setTemplateKey(e.target.value)}
                className="text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 rounded-lg px-2.5 py-1 outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                title="Chế độ hiển thị ngành nghề"
              >
                <option value="salon_toc">✂️ Salon / Spa / Thẩm mỹ</option>
                <option value="nha_khoa">🦷 Phòng khám / Nha khoa</option>
                <option value="nha_hang">🍽️ Nhà hàng / Đặt bàn</option>
              </select>
            </div>
            <p className="text-xs font-medium text-slate-400">Quản lý lịch hẹn, nhân sự/bàn và bảng giá dịch vụ</p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <nav className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
             <button 
                onClick={() => setActiveTab('calendar')}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${activeTab === 'calendar' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:bg-white/60 hover:text-slate-800'}`}
             >
                Lịch Hẹn
             </button>
             <button 
                onClick={() => setActiveTab('resources')}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${activeTab === 'resources' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:bg-white/60 hover:text-slate-800'}`}
             >
                Nhân Sự / Bàn
             </button>
             <button 
                onClick={() => setActiveTab('services')}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${activeTab === 'services' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:bg-white/60 hover:text-slate-800'}`}
             >
                Bảng Dịch Vụ
             </button>
             <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:bg-white/60 hover:text-slate-800'}`}
             >
                Giờ Mở Cửa
             </button>
          </nav>
          
          {tenantSlug && (
            <Link
              href={`/${tenantSlug}/booking`}
              target="_blank"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold rounded-xl shadow-sm transition-all"
            >
              Trang đặt lịch khách <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </Link>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden p-4 md:p-6 relative max-w-7xl mx-auto w-full">
         {activeTab === 'calendar' && <BookingAdmin template={templateKey as any} />}
         {activeTab === 'resources' && <ResourceManagement template={templateKey as any} />}
         {activeTab === 'services' && <ServiceManagement template={templateKey as any} />}
         {activeTab === 'settings' && <BookingSettings />}
      </main>
    </div>
  );
}
