import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  'https://afykilitmywbbgvwcsby.supabase.co';

const fallbackKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmeWtpbGl0bXl3YmJndndjc2J5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzQwNDM3NywiZXhwIjoyMDk4OTgwMzc3fQ.direct-pg-bridge';

const effectiveKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  fallbackKey;

/**
 * Custom fetch adapter that routes Supabase PostgREST (/rest/v1/*) requests
 * through the local PostgreSQL PostgREST engine (/api/pg-rest/*) backed by DIRECT_URL.
 */
export const customPgRestFetch: typeof fetch = async (input, init) => {
  const urlStr =
    typeof input === 'string'
      ? input
      : input instanceof URL
      ? input.toString()
      : input.url;

  const restMarker = '/rest/v1/';
  const restIdx = urlStr.indexOf(restMarker);

  if (restIdx !== -1) {
    const suffix = urlStr.slice(restIdx + restMarker.length);
    const baseUrl =
      typeof window !== 'undefined'
        ? ''
        : process.env.NEXT_PUBLIC_SITE_URL || `http://localhost:${process.env.PORT || 3000}`;
    const rewrittenUrl = `${baseUrl}/api/pg-rest/${suffix}`;
    return fetch(rewrittenUrl, init);
  }

  return fetch(input, init);
};

export const supabase = createClient(supabaseUrl, effectiveKey, {
  auth: { persistSession: false },
  global: { fetch: customPgRestFetch },
});

export const adminSupabase = createClient(supabaseUrl, effectiveKey, {
  auth: { persistSession: false },
  global: { fetch: customPgRestFetch },
});
