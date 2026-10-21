import '@/lib/supabase/pgRestEngine';
import { supabase } from '@/lib/supabase/client';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import CmsPostsClient from './CmsPostsClient';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';

export const dynamic = 'force-dynamic';

export default async function CMSPage() {
  let posts: any[] = [];
  let tenantSlug = '';

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('crm_token')?.value;

    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET) as any;

      const [{ data: tenant }, { data }] = await Promise.all([
        supabase.from('tenants').select('slug').eq('id', decoded.tenant_id).single(),
        supabase
          .from('posts')
          .select('*')
          .eq('tenant_id', decoded.tenant_id)
          .order('created_at', { ascending: false }),
      ]);

      if (tenant) {
        tenantSlug = tenant.slug;
      }

      if (data) {
        posts = data;
      }
    }
  } catch (e) {
    console.error('Error loading posts:', e);
  }

  return (
    <div className="min-h-full bg-[#FAF9F6]">
      <CmsPostsClient posts={posts} tenantSlug={tenantSlug} />
    </div>
  );
}
