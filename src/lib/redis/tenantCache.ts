import { redis, isRedisConfigured } from './client';
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

type MemoryCacheEntry = {
  data: CachedTenant;
  expiresAt: number;
};

const MEMORY_TTL_MS = 60 * 1000; // 60 seconds in-memory fast cache

function getMemoryCache(): Map<string, MemoryCacheEntry> {
  const g = globalThis as any;
  if (!g.__tenantStatusMemoryCache) {
    g.__tenantStatusMemoryCache = new Map<string, MemoryCacheEntry>();
  }
  return g.__tenantStatusMemoryCache;
}

export function invalidateTenantCache(tenantId: string) {
  const mem = getMemoryCache();
  mem.delete(tenantId);
  if (isRedisConfigured) {
    redis.del(`tenant:${tenantId}`).catch(() => {});
  }
}

export async function getTenantStatus(tenantId: string): Promise<CachedTenant | null> {
  const mem = getMemoryCache();
  const now = Date.now();
  const memHit = mem.get(tenantId);
  if (memHit && memHit.expiresAt > now) {
    return memHit.data;
  }

  const cacheKey = `tenant:${tenantId}`;

  // 1. Try get from Redis only if Upstash Redis is actually configured
  if (isRedisConfigured) {
    try {
      const cached = await redis.get<CachedTenant>(cacheKey);
      if (cached) {
        mem.set(tenantId, { data: cached, expiresAt: now + MEMORY_TTL_MS });
        return cached;
      }
    } catch {
      // Ignore Redis error and fallback to DB
    }
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

  // Save in-memory immediately (0ms subsequent lookups)
  mem.set(tenantId, { data: payload, expiresAt: now + MEMORY_TTL_MS });

  // 3. Cache in Redis asynchronously (do not block response)
  if (isRedisConfigured) {
    redis.setex(cacheKey, 60, JSON.stringify(payload)).catch(() => {});
  }

  return payload;
}
