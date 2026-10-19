'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const SYSTEM_TENANT_IDS = new Set([
  '00000000-0000-0000-0000-000000000000',
  '6064025b-7fe4-4840-a27f-2d5da65e15fa',
]);

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  role_id?: string;
  tenant_id?: string;
  permissions?: string[];
  tenant?: {
    id?: string;
    name?: string;
    slug: string;
    template_key: string;
    active_modules?: string[];
    package_name?: string;
    package_expires_at?: string | null;
  };
}

export function isSystemSuperAdminUser(user: User | null | undefined): boolean {
  if (!user) return false;
  if (user.role === 'superadmin') return true;
  if (user.tenant_id && SYSTEM_TENANT_IDS.has(user.tenant_id)) return true;
  if (user.tenant?.slug === 'tavi' || user.tenant?.slug === 'tavi-admin') return true;
  return false;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isSuperAdmin: boolean;
  login: (user: User) => void;
  logout: () => void;
  hasPermission: (perm: string) => boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isSuperAdmin: false,
  login: () => {},
  logout: () => {},
  hasPermission: () => false,
  refreshUser: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/me', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        if (process.env.NODE_ENV === 'development') {
          setUser({
            id: '00000000-0000-0000-0000-000000000000',
            name: 'Super Admin',
            email: 'admin',
            role: 'admin',
            tenant_id: '00000000-0000-0000-0000-000000000000',
            tenant: {
              name: 'TAVIWEB',
              slug: 'tavi',
              template_key: 'fashion',
              active_modules: ['crm', 'ecommerce', 'booking', 'leads', 'cms', 'lms', 'edu', 'chatbot'],
            },
          });
        } else {
          setUser(null);
          if (pathname?.startsWith('/admin') && pathname !== '/admin/crm/login') {
            router.push('/admin/crm/login');
          }
        }
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = (userData: User) => {
    setUser(userData);
    window.location.href = '/admin';
  };

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    router.push('/admin/crm/login');
  };

  const hasPermission = (perm: string) => {
    if (!user) return false;
    if (user.role === 'admin' || user.role === 'superadmin') return true;
    if (user.role_id) {
      return user.permissions?.includes(perm) || false;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isSuperAdmin: isSystemSuperAdminUser(user),
        login,
        logout,
        hasPermission,
        refreshUser: checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
