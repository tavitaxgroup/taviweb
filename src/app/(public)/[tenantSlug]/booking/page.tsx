import { supabase } from '@/lib/supabase';
import '@/lib/supabase/pgRestEngine';
import { notFound } from 'next/navigation';
import PublicBookingForm from '@/modules/booking/components/PublicBookingForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function PublicBookingPage({
  params,
}: {
  params: Promise<{ tenantSlug: string }>;
}) {
  const resolvedParams = await params;

  const { data: tenant, error } = await supabase
    .from('tenants')
    .select('id, name, template_key, status')
    .eq('slug', resolvedParams.tenantSlug)
    .single();

  if (error || !tenant || tenant.status !== 'active') {
    notFound();
  }

  return (
    <div className="min-h-dvh bg-[#FAF9F6] flex flex-col justify-between relative overflow-x-hidden font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 pt-6 sm:pt-10 pb-16 relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href={`/${resolvedParams.tenantSlug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-2xs transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay về {tenant.name}</span>
          </Link>

          <Link
            href={`/${resolvedParams.tenantSlug}/blog`}
            className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            Bài viết & Cẩm nang
          </Link>
        </div>

        <PublicBookingForm
          tenantId={tenant.id}
          tenantName={tenant.name}
          templateKey={tenant.template_key || 'salon_toc'}
        />
      </div>
    </div>
  );
}
