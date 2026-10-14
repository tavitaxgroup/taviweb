import { NextResponse } from 'next/server';
import { adminSupabase } from '@/lib/supabase';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';

async function getTenantId() {
  const cookieStore = await cookies();
  const token = cookieStore.get('crm_token')?.value;
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return decoded.tenant_id;
  } catch (err) {
    return null;
  }
}

export async function GET(request: Request) {
  try {
    const tenantId = await getTenantId();
    if (!tenantId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data, error } = await adminSupabase
      .from('rag_analytics')
      .select('id, question, is_answered, created_at')
      .eq('tenant_id', tenantId)
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
