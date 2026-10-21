'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Globe,
  Sliders,
  Users,
  Shield,
  Settings,
  UserCircle,
} from 'lucide-react';
import { useAuth } from '@/modules/crm/contexts/AuthContext';

const SETTINGS_TABS = [
  {
    name: 'Giao diện & Thanh toán Web',
    href: '/admin/settings/website',
    icon: Globe,
    permissionKey: 'manage_settings',
  },
  {
    name: 'Quy trình Pipeline',
    href: '/admin/settings/pipelines',
    icon: Sliders,
    permissionKey: 'manage_pipelines',
  },
  {
    name: 'Đội ngũ Nhân sự',
    href: '/admin/settings/team',
    icon: Users,
    permissionKey: 'manage_users',
  },
  {
    name: 'Phân quyền (Roles)',
    href: '/admin/settings/roles',
    icon: Shield,
    permissionKey: 'manage_roles',
  },
  {
    name: 'Gói cước & API Key',
    href: '/admin/settings',
    icon: Settings,
    exact: true,
    permissionKey: 'manage_settings',
  },
  {
    name: 'Tài khoản cá nhân',
    href: '/admin/settings/account',
    icon: UserCircle,
  },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { hasPermission } = useAuth();

  const visibleTabs = SETTINGS_TABS.filter(
    (tab) => !tab.permissionKey || hasPermission(tab.permissionKey)
  );

  return (
    <div className="min-h-full flex flex-col bg-[#FAF9F6]">
      {/* Horizontal Settings Navigation Bar */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2.5">
          {visibleTabs.map((tab) => {
            const isActive = tab.exact
              ? pathname === tab.href
              : pathname === tab.href || pathname?.startsWith(tab.href + '/');
            const Icon = tab.icon;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-indigo-600 !text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isActive ? '!text-white' : 'text-slate-400'
                  }`}
                />
                <span className={isActive ? '!text-white' : ''}>{tab.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Active Settings Tab Content */}
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}
