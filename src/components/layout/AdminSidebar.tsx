"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Target,
  Settings,
  Building2,
  ChevronRight,
  Shield,
  History,
  Bot,
  Globe,
  FileText,
  BookOpen,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  ExternalLink,
  Sliders,
} from 'lucide-react';
import { useSidebar } from './ClientLayout';

type NavItem = {
  name: string;
  path: string;
  icon: any;
  badge?: string;
  moduleKey?: string;
  permissionKey?: string;
  superAdminOnly?: boolean;
};

const WORKSPACE_MENU: NavItem[] = [
  { name: 'Tổng quan', path: '/admin', icon: LayoutDashboard },
  { name: 'Bán hàng & Đơn hàng', path: '/admin/ecommerce', icon: ShoppingBag, badge: 'Shop', moduleKey: 'ecommerce' },
  { name: 'CRM & Pipeline', path: '/admin/crm', icon: Target, moduleKey: 'crm' },
  { name: 'Lịch hẹn (Booking)', path: '/admin/booking/admin', icon: CalendarDays, moduleKey: 'booking' },
  { name: 'AI CMS (Bài viết)', path: '/admin/cms', icon: FileText, moduleKey: 'cms' },
  { name: 'Khóa học Online (LMS)', path: '/admin/lms', icon: BookOpen, moduleKey: 'lms' },
  { name: 'Quản lý Đào tạo', path: '/admin/edu', icon: GraduationCap, moduleKey: 'edu' },
];

const PLATFORM_MENU: NavItem[] = [
  { name: 'SaaS Factory (Tenants)', path: '/admin/workspaces', icon: Building2, superAdminOnly: true },
  { name: 'Kho Leads Google Maps', path: '/admin/leads', icon: Users, superAdminOnly: true },
  { name: 'Trung tâm AI Keys', path: '/admin/ai-hub', icon: Sparkles, superAdminOnly: true },
];

const SETTINGS_MENU: NavItem[] = [
  { name: 'Giao diện & Thanh toán Web', path: '/admin/settings/website', icon: Globe, permissionKey: 'manage_settings' },
  { name: 'Trợ lý AI (Chatbot)', path: '/admin/settings/chatbot', icon: Bot, moduleKey: 'chatbot', permissionKey: 'manage_settings' },
  { name: 'Quy trình Pipeline', path: '/admin/settings/pipelines', icon: Sliders, permissionKey: 'manage_pipelines' },
  { name: 'Đội ngũ Nhân sự', path: '/admin/settings/team', icon: Users, permissionKey: 'manage_users' },
  { name: 'Phân quyền (Roles)', path: '/admin/settings/roles', icon: Shield, permissionKey: 'manage_roles' },
  { name: 'Gói cước & API Key', path: '/admin/settings', icon: Settings, permissionKey: 'manage_settings' },
  { name: 'Nhật ký hệ thống', path: '/admin/audit-logs', icon: History, permissionKey: 'manage_settings' },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { user, isSuperAdmin, hasPermission } = useAuth();
  const { isSidebarOpen } = useSidebar();

  const activeModules = user?.tenant?.active_modules || [
    'crm',
    'ecommerce',
    'booking',
    'cms',
    'lms',
    'edu',
    'chatbot',
  ];

  const tenantSlug = user?.tenant?.slug || 'tavi';
  const tenantName = user?.tenant?.name || 'TAVIWEB';

  const renderNavItem = (item: NavItem) => {
    if (item.superAdminOnly && !isSuperAdmin) return null;
    if (item.moduleKey) {
      if (item.moduleKey === 'edu') {
        if (!activeModules.includes('edu') && !activeModules.includes('lms')) return null;
      } else if (!activeModules.includes(item.moduleKey)) {
        return null;
      }
    }
    if (item.permissionKey && !hasPermission(item.permissionKey)) return null;

    const isActive =
      item.path === '/admin'
        ? pathname === '/admin'
        : pathname === item.path || pathname?.startsWith(item.path + '/');

    return (
      <Link
        key={item.path}
        href={item.path}
        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative ${
          isActive
            ? 'bg-indigo-500/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] border border-indigo-500/30'
            : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100 border border-transparent'
        }`}
      >
        {isActive && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-400 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
        )}
        <div className="flex items-center gap-3 min-w-0">
          <item.icon
            className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
              isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-indigo-300'
            }`}
          />
          <span className="truncate">{item.name}</span>
        </div>
        {item.badge ? (
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            {item.badge}
          </span>
        ) : (
          isActive && <ChevronRight className="w-4 h-4 opacity-70 shrink-0 text-indigo-300" />
        )}
      </Link>
    );
  };

  return (
    <aside
      className={`${
        isSidebarOpen ? 'w-68 border-r border-slate-800/80' : 'w-0 border-r-0'
      } bg-slate-950 h-dvh max-h-dvh sticky top-0 flex flex-col text-slate-300 transition-all duration-300 shadow-2xl shrink-0 overflow-hidden relative select-none`}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-indigo-500/10 blur-[60px] pointer-events-none" />

      {/* Brand + Tenant Switcher Info */}
      <div className="h-16 shrink-0 flex items-center justify-between px-5 border-b border-slate-800/60 relative z-10">
        <div className="flex items-center min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)] mr-3 shrink-0">
            <Building2 className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-white font-extrabold text-sm tracking-wide truncate">{tenantName}</div>
            <div className="text-[11px] text-slate-400 font-medium truncate">
              /{tenantSlug}
            </div>
          </div>
        </div>
        <Link
          href={`/${tenantSlug}`}
          target="_blank"
          title="Xem Website Cửa hàng"
          className="p-2 rounded-lg bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-800 transition-colors shrink-0"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Scrollable Unified Navigation */}
      <nav className="flex-1 min-h-0 py-4 px-3 pb-6 space-y-6 overflow-y-auto custom-scrollbar whitespace-nowrap relative z-10">
        {/* Section 1: Business Operations */}
        <div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">
            Kinh doanh & Vận hành
          </div>
          <div className="space-y-1">{WORKSPACE_MENU.map(renderNavItem)}</div>
        </div>

        {/* Section 2: Platform Management (Only for TAVI SuperAdmin) */}
        {isSuperAdmin && (
          <div>
            <div className="text-[10px] font-bold text-amber-400/80 uppercase tracking-widest px-3 mb-2 flex items-center gap-1.5">
              <span>Quản trị TaviWeb (B2B)</span>
            </div>
            <div className="space-y-1">{PLATFORM_MENU.map(renderNavItem)}</div>
          </div>
        )}

        {/* Section 3: Configuration & Settings */}
        <div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">
            Cấu hình & Hệ thống
          </div>
          <div className="space-y-1">{SETTINGS_MENU.map(renderNavItem)}</div>
        </div>
      </nav>

      {/* Footer Quick Storefront Preview */}
      <div className="p-3 shrink-0 border-t border-slate-800/60 bg-slate-900/50 relative z-10">
        <Link
          href="/kho-giao-dien"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 hover:from-indigo-600/30 hover:to-purple-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-200 transition-all"
        >
          <span className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            Kho 15 Giao diện Mẫu
          </span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </Link>
      </div>
    </aside>
  );
}
