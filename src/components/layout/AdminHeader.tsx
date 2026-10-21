"use client";

import { useState, useRef, useEffect } from 'react';
import { Bell, Search, UserCircle, Menu, LogOut, Settings as SettingsIcon, ChevronDown, ExternalLink, ShoppingBag } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import Link from 'next/link';
import { useSidebar } from './ClientLayout';

export function AdminHeader() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { toggleSidebar } = useSidebar();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotiMenu, setShowNotiMenu] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loadingNoti, setLoadingNoti] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const notiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/admin/notifications')
      .then(res => res.json())
      .then(data => {
        if (data.notifications) {
          setNotifications(data.notifications);
        }
        setLoadingNoti(false);
      })
      .catch(() => {
        setLoadingNoti(false);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
      if (notiRef.current && !notiRef.current.contains(event.target as Node)) {
        setShowNotiMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getPageTitle = () => {
    if (pathname === '/admin') return 'Tổng quan Hệ thống';
    if (pathname.startsWith('/admin/ecommerce')) return 'Bán hàng & Quản lý Đơn hàng';
    if (pathname.startsWith('/admin/workspaces')) return 'SaaS Factory (Quản lý Tenants)';
    if (pathname.startsWith('/admin/crm')) return 'CRM & Pipeline Bán hàng';
    if (pathname.startsWith('/admin/leads')) return 'Kho Dữ Liệu Leads';
    if (pathname.startsWith('/admin/booking')) return 'Quản lý Lịch hẹn (Booking)';
    if (pathname.startsWith('/admin/cms')) return 'AI CMS & Bài viết SEO';
    if (pathname.startsWith('/admin/lms')) return 'Khóa học Online (LMS)';
    if (pathname.startsWith('/admin/edu')) return 'Quản lý Đào tạo & Lớp học';
    if (pathname.startsWith('/admin/ai-hub')) return 'Trung tâm AI Keys';
    if (pathname.startsWith('/admin/audit-logs')) return 'Nhật ký Hoạt động';
    if (pathname.startsWith('/admin/settings/website')) return 'Giao diện & Thanh toán Website';
    if (pathname.startsWith('/admin/settings/chatbot')) return 'Cấu hình Trợ lý AI Chatbot';
    if (pathname.startsWith('/admin/settings/pipelines')) return 'Cấu hình Quy trình CRM';
    if (pathname.startsWith('/admin/settings/team')) return 'Quản lý Đội ngũ Nhân sự';
    if (pathname.startsWith('/admin/settings/roles')) return 'Phân quyền Hệ thống (RBAC)';
    if (pathname.startsWith('/admin/settings/account')) return 'Tài khoản Cá nhân';
    if (pathname.startsWith('/admin/settings')) return 'Gói cước & Tích hợp API';
    return 'Bảng điều khiển';
  };

  const tenantSlug = user?.tenant?.slug || 'tavi';

  return (
    <header className="h-16 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 px-6 flex items-center justify-between shrink-0 z-40 sticky top-0">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight">
            {getPageTitle()}
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Quick Storefront Button */}
        <Link
          href={`/${tenantSlug}`}
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/60 transition-colors"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Xem Web Bán Hàng (/{tenantSlug})</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </Link>

        {/* Notifications */}
        <div className="relative" ref={notiRef}>
          <button
            onClick={() => setShowNotiMenu(!showNotiMenu)}
            className="relative p-2 text-slate-500 hover:bg-slate-100 hover:text-indigo-600 rounded-xl transition-colors"
          >
            <Bell className="w-5 h-5" />
            {notifications.length > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
            )}
          </button>

          {showNotiMenu && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/80 py-3 z-50">
              <div className="px-4 pb-2.5 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 text-sm">Thông báo mới</h3>
                <span className="text-xs font-semibold text-indigo-600">{notifications.length} tin</span>
              </div>
              <div className="max-h-[300px] overflow-y-auto divide-y divide-slate-50">
                {loadingNoti ? (
                  <div className="p-4 text-center text-xs text-slate-500">Đang tải...</div>
                ) : notifications.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-400">Chưa có thông báo nào.</div>
                ) : (
                  notifications.map(noti => (
                    <Link
                      key={noti.id}
                      href={noti.link || '/admin'}
                      onClick={() => setShowNotiMenu(false)}
                      className="block px-4 py-3 hover:bg-slate-50/90 transition-colors text-left"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            noti.type === 'reminder'
                              ? 'bg-amber-500'
                              : noti.type === 'deal'
                              ? 'bg-emerald-500'
                              : 'bg-slate-900'
                          }`}
                        />
                        <p className="text-xs font-semibold text-slate-900 truncate">{noti.title}</p>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 pl-3.5 line-clamp-2">{noti.message}</p>
                      <p className="text-[10px] font-mono tabular-nums text-slate-400 mt-1 pl-3.5">
                        {new Date(noti.time).toLocaleString('vi-VN')}
                      </p>
                    </Link>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        <div className="w-px h-6 bg-slate-200 hidden sm:block" />

        {/* Profile Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2.5 p-1.5 hover:bg-slate-100 rounded-xl transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              {user ? user.name.charAt(0).toUpperCase() : <UserCircle className="w-5 h-5" />}
            </div>
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-xs font-bold text-slate-800 leading-tight">
                {user ? user.name : 'Khách'}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {user ? user.role : 'User'}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>

          {showProfileMenu && user && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200/80 py-2 z-50">
              <div className="px-4 py-2.5 border-b border-slate-100 mb-1">
                <p className="text-sm font-bold text-slate-800 truncate">{user.name}</p>
                <p className="text-xs text-slate-500 truncate">{user.email}</p>
              </div>

              <Link
                href="/admin/settings/account"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
              >
                <SettingsIcon className="w-4 h-4" />
                Thông tin cá nhân
              </Link>

              <Link
                href="/admin/settings/website"
                onClick={() => setShowProfileMenu(false)}
                className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Cấu hình Cửa hàng & Web
              </Link>

              <div className="h-px bg-slate-100 my-1.5" />

              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  logout();
                }}
                className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
