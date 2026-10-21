'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import BookingAdmin from '@/modules/booking/components/BookingAdmin';
import ResourceManagement from '@/modules/booking/components/ResourceManagement';
import ServiceManagement from '@/modules/booking/components/ServiceManagement';
import BookingSettings from '@/modules/booking/components/BookingSettings';
import { CalendarDays, Users, Sparkles, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function StandaloneBookingAdminPage() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<'calendar' | 'resources' | 'services' | 'settings'>('calendar');
  const [templateKey, setTemplateKey] = useState<string>('salon_toc');
  const [tenantSlug, setTenantSlug] = useState<string>('');

  useEffect(() => {
    if (user?.tenant) {
      setTemplateKey(user.tenant.template_key || 'salon_toc');
      setTenantSlug(user.tenant.slug || '');
    } else if (user?.tenant_id) {
      import('@/modules/booking/api/booking.service').then(({ BookingService }) => {
        BookingService.getTemplateKey(user.tenant_id as string).then(key => {
          setTemplateKey(key);
        });
      });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex h-full min-h-[560px] items-center justify-center bg-[#FAF9F6]">
        <div className="h-6 w-6 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full min-h-[560px] bg-[#FAF9F6] font-sans overflow-hidden">
      {/* Unified Executive Top Bar */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6 py-3 flex flex-wrap items-center justify-between gap-3 z-20 shrink-0">
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-1 bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
            <button
              type="button"
              onClick={() => setActiveTab('calendar')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200 ${
                activeTab === 'calendar'
                  ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Điều phối Lịch hẹn</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('resources')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200 ${
                activeTab === 'resources'
                  ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Nhân sự & Khu vực</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('services')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200 ${
                activeTab === 'services'
                  ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Danh mục Dịch vụ</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('settings')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200 ${
                activeTab === 'settings'
                  ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Giờ hoạt động</span>
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2.5">
          <select
            value={templateKey}
            onChange={e => setTemplateKey(e.target.value)}
            className="h-9 text-xs font-medium bg-white text-slate-700 border border-slate-200/80 hover:border-slate-300 rounded-lg px-3 outline-none cursor-pointer transition-colors"
            title="Chế độ thuật ngữ ngành nghề"
          >
            <option value="salon_toc">Mô hình: Salon · Spa · Thẩm mỹ</option>
            <option value="nha_khoa">Mô hình: Phòng khám · Nha khoa</option>
            <option value="nha_hang">Mô hình: Nhà hàng · Đặt bàn</option>
          </select>

          {tenantSlug && (
            <Link
              href={`/${tenantSlug}/booking`}
              target="_blank"
              className="inline-flex items-center gap-1.5 h-9 px-3.5 bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-800 text-xs font-semibold rounded-lg transition-all"
            >
              <span>Trang đặt lịch của khách</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 relative max-w-[1440px] mx-auto w-full custom-scrollbar">
        {activeTab === 'calendar' && <BookingAdmin template={templateKey as any} />}
        {activeTab === 'resources' && <ResourceManagement template={templateKey as any} />}
        {activeTab === 'services' && <ServiceManagement template={templateKey as any} />}
        {activeTab === 'settings' && <BookingSettings />}
      </main>
    </div>
  );
}
