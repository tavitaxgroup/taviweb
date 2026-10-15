import { redis } from './client';
import '../supabase/pgRestEngine';
import { adminSupabase } from '../supabase';

export type CachedTenant = {
  id: string;
  name: string;
  slug: string;
  package_id: string | null;
  ai_quota: number;
  ai_used: number;
  active_modules: string[];
  isExpired: boolean;
};

export async function getTenantStatus(tenantId: string): Promise<CachedTenant | null> {
  const cacheKey = `tenant:${tenantId}`;

  // 1. Try get from Redis (gracefully fallback if Redis is unavailable)
  try {
    const cached = await redis.get<CachedTenant>(cacheKey);
    if (cached) {
      return cached;
    }
  } catch (err) {
    console.warn('Redis get error in getTenantStatus, falling back to DB:', err);
  }

  // 2. Fetch from Database
  const { data: tenant, error } = await adminSupabase
    .from('tenants')
    .select('id, name, slug, package_id, ai_quota, ai_used, active_modules, package_expires_at')
    .eq('id', tenantId)
    .single();

  if (error || !tenant) {
    return null;
  }

  const isExpired = tenant.package_expires_at
    ? new Date(tenant.package_expires_at) < new Date()
    : false;

  const payload: CachedTenant = {
    id: tenant.id,
    name: tenant.name,
    slug: tenant.slug,
    package_id: tenant.package_id,
    ai_quota: tenant.ai_quota,
    ai_used: tenant.ai_used,
    active_modules: tenant.active_modules || [],
    isExpired,
  };

  // 3. Cache in Redis (TTL 60s)
  try {
    await redis.setex(cacheKey, 60, JSON.stringify(payload));
  } catch (err) {
    console.warn('Redis setex error in getTenantStatus:', err);
  }

  return payload;
}
