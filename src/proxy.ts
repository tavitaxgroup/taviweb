import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { getTenantStatus } from './lib/redis/tenantCache';
import { globalRateLimiter } from './lib/redis/rateLimiter';
import { isRedisConfigured } from './lib/redis/client';
import './lib/supabase/pgRestEngine';
import { adminSupabase as supabase } from './lib/supabase';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';
const encodedJwtSecret = new TextEncoder().encode(JWT_SECRET);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Fast-path bypass for static assets, internal pg-rest bridge, and auth/webhook routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/api/pg-rest') ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/api/webhooks') ||
    pathname.startsWith('/api/cron')
  ) {
    return NextResponse.next();
  }

  const hostname = (request.headers.get('host') || '')
    .replace('.localhost:3000', `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    .replace('localhost:3000', process.env.NEXT_PUBLIC_ROOT_DOMAIN || '');

  // Handle Custom Domains FIRST (only for external custom domains)
  const isSystemDomain =
    !hostname ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN ||
    hostname === 'localhost' ||
    hostname.startsWith('localhost:') ||
    hostname.startsWith('127.0.0.1') ||
    hostname.includes('vercel.app');

  if (!isSystemDomain && !pathname.startsWith('/api/') && !pathname.startsWith('/admin')) {
    try {
      const { data: tenant } = await supabase
        .from('tenants')
        .select('slug')
        .eq('custom_domain', hostname)
        .single();

      if (tenant && tenant.slug) {
        const searchParams = request.nextUrl.searchParams.toString();
        const path = `${pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`;
        return NextResponse.rewrite(new URL(`/${tenant.slug}${path}`, request.url));
      }
    } catch (error) {
      console.error('Middleware Custom Domain Error:', error);
    }
  }

  // 2. Global Rate Limiting for public API endpoints (only when Upstash Redis is configured)
  if (isRedisConfigured && pathname.startsWith('/api/') && !pathname.startsWith('/api/admin')) {
    try {
      const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
      const { success, limit, reset, remaining } = await globalRateLimiter.limit(ip);
      if (!success) {
        return new NextResponse('Too Many Requests', {
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          },
        });
      }
    } catch {
      // Gracefully continue if Redis rate limiter is unreachable
    }
  }

  // 3. Auth Guard for protected routes (/admin, /crm, or /api/admin)
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/crm') ||
    pathname.startsWith('/api/admin')
  ) {
    if (pathname.includes('/login')) {
      return NextResponse.next();
    }

    const token = request.cookies.get('crm_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/crm/login', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, encodedJwtSecret);
      const tenantId = payload.tenant_id as string;

      if (!tenantId) {
        return NextResponse.redirect(new URL('/admin/crm/login', request.url));
      }

      // 4. Check Tenant Status (In-Memory 0ms cache -> Redis -> DB)
      const tenant = await getTenantStatus(tenantId);

      if (!tenant) {
        const res = NextResponse.redirect(new URL('/admin/crm/login', request.url));
        res.cookies.delete('crm_token');
        return res;
      }

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-tenant-id', tenantId);
      requestHeaders.set('x-user-id', payload.id as string);
      requestHeaders.set('x-user-role', payload.role as string);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch {
      const res = NextResponse.redirect(new URL('/admin/crm/login', request.url));
      res.cookies.delete('crm_token');
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
