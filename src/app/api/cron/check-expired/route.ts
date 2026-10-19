import { NextResponse } from 'next/server';
import '@/lib/supabase/pgRestEngine';
import { adminSupabase as supabase } from '@/lib/supabase';

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: expiredTenants, error: fetchError } = await supabase
      .from('tenants')
      .select('id, slug, package_name, package_expires_at')
      .neq('slug', 'tavi')
      .not('package_expires_at', 'is', null)
      .lt('package_expires_at', new Date().toISOString());

    if (fetchError) {
      throw fetchError;
    }

    if (!expiredTenants || expiredTenants.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No expired packages found.',
        count: 0,
      });
    }

    const expiredIds = expiredTenants.map((t) => t.id);

    // Keep package_expires_at as the past timestamp so website suspension remains active until renewed
    const { error: updateError } = await supabase
      .from('tenants')
      .update({
        package_name: 'Đã hết hạn (Tạm ngưng)',
        ai_quota: 0,
      })
      .in('id', expiredIds);

    if (updateError) {
      throw updateError;
    }

    return NextResponse.json({
      success: true,
      count: expiredIds.length,
      disabledTenants: expiredIds,
    });
  } catch (error) {
    console.error('Check Expired Packages Cron Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
