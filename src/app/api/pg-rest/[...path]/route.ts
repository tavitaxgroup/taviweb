import { NextRequest, NextResponse } from 'next/server';
import { executePostgrestRequest } from '@/lib/supabase/pgRestEngine';

async function handle(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  const pathAfterRestV1 = (path || []).join('/');
  const bodyText =
    req.method !== 'GET' && req.method !== 'HEAD' ? await req.text() : null;

  const result = await executePostgrestRequest(
    req.method,
    pathAfterRestV1,
    req.nextUrl.searchParams,
    req.headers,
    bodyText
  );

  return new NextResponse(result.body, {
    status: result.status,
    headers: result.headers,
  });
}

export const GET = handle;
export const HEAD = handle;
export const POST = handle;
export const PATCH = handle;
export const PUT = handle;
export const DELETE = handle;
