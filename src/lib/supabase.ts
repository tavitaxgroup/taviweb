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
 * Custom fetch adapter that routes Supabase PostgREST (/rest/v1/*) requests:
 * - On the server (Node.js): directly invokes globalThis.__pgRestExecute in-memory (zero HTTP roundtrip).
 * - On the browser client: routes through /api/pg-rest/* on the current origin.
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

    if (typeof window === 'undefined' && typeof (globalThis as any).__pgRestExecute === 'function') {
      const parsed = new URL(urlStr);
      const markerInPath = parsed.pathname.indexOf(restMarker);
      const pathAfterRestV1 =
        markerInPath !== -1 ? parsed.pathname.slice(markerInPath + restMarker.length) : suffix.split('?')[0];
      const headers = new Headers(init?.headers as HeadersInit | undefined);
      const bodyText =
        init?.body !== undefined && init?.body !== null ? String(init.body) : null;
      const result = await (globalThis as any).__pgRestExecute(
        init?.method || 'GET',
        pathAfterRestV1,
        parsed.searchParams,
        headers,
        bodyText
      );
      return new Response(result.body, {
        status: result.status,
        headers: result.headers,
      });
    }

    const localBase = `http://127.0.0.1:${process.env.PORT || 3000}`;
    const baseUrl =
      typeof window !== 'undefined'
        ? ''
        : process.env.NODE_ENV === 'development'
        ? localBase
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NEXT_PUBLIC_SITE_URL || localBase;
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
