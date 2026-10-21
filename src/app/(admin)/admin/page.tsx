import {
  Target,
  CalendarDays,
  ShoppingBag,
  Package,
  Globe,
  FileText,
  GraduationCap,
  Bot,
  ArrowUpRight,
  LayoutTemplate,
} from 'lucide-react';
import '@/lib/supabase/pgRestEngine';
import { adminSupabase } from '@/lib/supabase';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';

export default async function DashboardHome() {
  let dealsCount = 0;
  let ordersCount = 0;
  let productsCount = 0;
  let bookingsCount = 0;
  let postsCount = 0;
  let publishedPostsCount = 0;
  let totalRevenue = 0;
  let storeRevenue = 0;
  let userName = 'Quản trị viên';
  let tenantName = 'TAVIWEB';
  let tenantSlug = 'tavi';
  let activeModules: string[] = ['crm', 'booking', 'cms'];
  let canViewAll = false;
  let recentDeals: any[] = [];
  let recentOrders: any[] = [];
  let recentAppointments: any[] = [];

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('crm_token')?.value;

    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      const tenantId = decoded.tenant_id || '00000000-0000-0000-0000-000000000000';

      const [
        { data: user },
        { data: rawDeals },
        { data: allOrders },
        { data: allProducts },
        { data: allAppointments },
        { data: allPosts },
      ] = await Promise.all([
        adminSupabase
          .from('crm_users')
          .select(
            'id, name, role, role_id, role_data:crm_roles(*), tenant:tenants(name, slug, active_modules)'
          )
          .eq('id', decoded.id)
          .single(),
        adminSupabase
          .from('crm_deals')
          .select('id, value, stage_id, created_at, title, assignee_id')
          .eq('tenant_id', tenantId),
        adminSupabase
          .from('orders')
          .select('id, order_code, customer_name, total_amount, status, payment_status, created_at')
          .eq('tenant_id', tenantId)
          .order('created_at', { ascending: false }),
        adminSupabase
          .from('products')
          .select('id')
          .eq('tenant_id', tenantId)
          .eq('status', 'active'),
        adminSupabase
          .from('booking_appointments')
          .select('id, customer_name, customer_phone, service_name, start_time, status')
          .eq('tenant_id', tenantId)
          .order('start_time', { ascending: false }),
        adminSupabase
          .from('posts')
          .select('id, status')
          .eq('tenant_id', tenantId),
      ]);

      if (user) {
        userName = user.name;
        const tData = Array.isArray(user.tenant) ? user.tenant[0] : user.tenant;
        if (tData?.slug) tenantSlug = tData.slug;
        if (tData?.name) tenantName = tData.name;
        if (Array.isArray(tData?.active_modules) && tData.active_modules.length > 0) {
          activeModules = tData.active_modules;
        }

        const roleData = Array.isArray(user.role_data) ? user.role_data[0] : user.role_data;
        const permissions = roleData?.permissions || [];
        canViewAll = user.role_id ? permissions.includes('view_all_deals') : user.role === 'admin';

        const allDeals = canViewAll
          ? rawDeals || []
          : (rawDeals || []).filter((d: any) => d.assignee_id === user.id);

        if (allDeals.length > 0) {
          dealsCount = allDeals.length;
          allDeals.forEach((d: any) => {
            totalRevenue += Number(d.value || 0);
          });
          recentDeals = [...allDeals]
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, 5);
        }

        if (allOrders) {
          ordersCount = allOrders.length;
          allOrders
            .filter((o) => o.status !== 'cancelled')
            .forEach((o) => {
              storeRevenue += Number(o.total_amount || 0);
            });
          recentOrders = allOrders.slice(0, 5);
        }

        if (allProducts) {
          productsCount = allProducts.length;
        }

        if (allAppointments) {
          bookingsCount = allAppointments.length;
          recentAppointments = allAppointments.slice(0, 5);
        }

        if (allPosts) {
          postsCount = allPosts.length;
          publishedPostsCount = allPosts.filter((p: any) => p.status === 'published').length;
        }
      }
    }
  } catch (e) {
    console.error(e);
  }

  const formatVND = (val: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val || 0);

  const hasEcommerce = activeModules.includes('ecommerce');

  const stats = hasEcommerce
    ? [
        {
          name: 'Doanh thu Đơn hàng Web',
          value: formatVND(storeRevenue),
          sub: `${ordersCount} đơn đặt hàng`,
          icon: ShoppingBag,
          color: 'text-amber-600',
          bg: 'bg-amber-100',
          href: '/admin/ecommerce',
        },
        {
          name: 'Sản phẩm Đang bán',
          value: productsCount.toString(),
          sub: 'Đồng bộ Storefront & AI',
          icon: Package,
          color: 'text-indigo-600',
          bg: 'bg-indigo-100',
          href: '/admin/ecommerce',
        },
        {
          name: canViewAll ? 'Cơ hội Bán hàng (CRM)' : 'Deals của tôi',
          value: dealsCount.toString(),
          sub: `Tổng giá trị: ${formatVND(totalRevenue)}`,
          icon: Target,
          color: 'text-blue-600',
          bg: 'bg-blue-100',
          href: '/admin/crm',
        },
        {
          name: 'Website Cửa hàng',
          value: `/${tenantSlug}`,
          sub: 'Đang hoạt động trực tuyến',
          icon: Globe,
          color: 'text-emerald-600',
          bg: 'bg-emerald-100',
          href: `/${tenantSlug}`,
        },
      ]
    : [
        {
          name: canViewAll ? 'Cơ hội Bán hàng (CRM)' : 'Deals của tôi',
          value: dealsCount.toString(),
          sub: `Tổng phễu: ${formatVND(totalRevenue)}`,
          icon: Target,
          color: 'text-indigo-600',
          bg: 'bg-indigo-100',
          href: '/admin/crm',
        },
        {
          name: 'Lịch hẹn Dịch vụ (Booking)',
          value: bookingsCount.toString(),
          sub: 'Đồng bộ lịch hẹn trực tuyến',
          icon: CalendarDays,
          color: 'text-purple-600',
          bg: 'bg-purple-100',
          href: '/admin/booking/admin',
        },
        {
          name: 'Bài viết & Cẩm nang (CMS)',
          value: postsCount.toString(),
          sub: `${publishedPostsCount} bài viết đã xuất bản SEO`,
          icon: FileText,
          color: 'text-emerald-600',
          bg: 'bg-emerald-100',
          href: '/admin/cms',
        },
        {
          name: 'Website Doanh nghiệp',
          value: `/${tenantSlug}`,
          sub: 'Đang hoạt động trực tuyến',
          icon: Globe,
          color: 'text-blue-600',
          bg: 'bg-blue-100',
          href: `/${tenantSlug}`,
        },
      ];

  const allQuickModules = [
    {
      key: 'crm',
      title: 'CRM & Pipeline Kanban',
      desc: 'Quản lý khách hàng, theo dõi tiến độ chốt sale và báo cáo KPI.',
      href: '/admin/crm',
      icon: Target,
      badge: 'Sales CRM',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      key: 'booking',
      title: 'Lịch hẹn (Booking)',
      desc: 'Quản lý đặt lịch dịch vụ, điều phối Bác sĩ / Chuyên viên & Phòng VIP.',
      href: '/admin/booking/admin',
      icon: CalendarDays,
      badge: 'Booking',
      color: 'from-purple-500 to-pink-600',
    },
    {
      key: 'cms',
      title: 'AI CMS & Blog SEO',
      desc: 'Tạo bài viết tự động bằng AI, tối ưu hóa SEO kéo khách vào web.',
      href: '/admin/cms',
      icon: FileText,
      badge: 'Content AI',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      key: 'ecommerce',
      title: 'Bán hàng & Quản lý Kho',
      desc: 'Đăng sản phẩm, quản lý đơn hàng, cấu hình VietQR nhận tiền cho Shop.',
      href: '/admin/ecommerce',
      icon: ShoppingBag,
      badge: 'E-commerce',
      color: 'from-amber-500 to-orange-600',
    },
    {
      key: 'edu',
      title: 'Đào tạo & Khóa học (LMS/Edu)',
      desc: 'Quản lý khóa học video, lớp học, điểm danh và học phí học viên.',
      href: '/admin/edu',
      icon: GraduationCap,
      badge: 'Education',
      color: 'from-sky-500 to-cyan-600',
    },
    {
      key: 'chatbot',
      title: 'Trợ lý AI Chatbot RAG',
      desc: 'Huấn luyện AI tư vấn sản phẩm & trả lời khách hàng 24/7 trên web.',
      href: '/admin/settings/chatbot',
      icon: Bot,
      badge: 'AI Agent',
      color: 'from-rose-500 to-red-600',
    },
  ];

  const quickModules = allQuickModules.filter(
    (m) =>
      activeModules.includes(m.key) ||
      (m.key === 'edu' && activeModules.includes('lms'))
  );

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 font-sans">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-extrabold mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>TAVIWEB PORTAL — {tenantName}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            👋 Xin chào, {userName}!
          </h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">
            Trung tâm điều hành hợp nhất CRM, Đặt lịch hẹn (Booking) và AI CMS của doanh nghiệp.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          {activeModules.includes('booking') && (
            <Link
              href="/admin/booking/admin"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 !text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
            >
              <CalendarDays className="w-4 h-4 !text-white" />
              <span className="!text-white">Điều phối Lịch hẹn</span>
            </Link>
          )}
          {hasEcommerce && (
            <Link
              href="/admin/ecommerce"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 !text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
            >
              <ShoppingBag className="w-4 h-4 !text-white" />
              <span className="!text-white">Quản lý Bán hàng</span>
            </Link>
          )}
          <Link
            href={`/${tenantSlug}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs sm:text-sm font-bold shadow-sm transition-colors"
          >
            <Globe className="w-4 h-4 text-indigo-600" />
            <span>Xem Website (/{tenantSlug})</span>
          </Link>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <Link
            key={i}
            href={stat.href}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.name}</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{stat.value}</p>
            <p className="text-xs font-medium text-slate-500 mt-1">{stat.sub}</p>
          </Link>
        ))}
      </div>

      {/* Quick Modules Grid */}
      <div>
        <h2 className="text-base font-extrabold text-slate-800 mb-4 uppercase tracking-wider">
          Phân hệ Nghiệp vụ Đang kích hoạt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickModules.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-indigo-400 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${mod.color} text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}
              >
                <mod.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-extrabold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                    {mod.title}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {mod.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{mod.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {hasEcommerce ? (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-amber-600" />
                Đơn hàng Website mới nhất
              </h3>
              <Link href="/admin/ecommerce" className="text-xs font-bold text-indigo-600 hover:underline">
                Xem tất cả →
              </Link>
            </div>
            <div className="divide-y divide-slate-100">
              {recentOrders.length === 0 ? (
                <p className="text-xs text-slate-400 py-6 text-center">Chưa có đơn hàng nào.</p>
              ) : (
                recentOrders.map((ord) => (
                  <div key={ord.id} className="py-3 flex items-center justify-between text-sm">
                    <div>
                      <div className="font-bold text-slate-900">
                        <span className="font-mono text-indigo-600 mr-1.5">#{ord.order_code}</span>
                        {ord.customer_name}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {new Date(ord.created_at).toLocaleString('vi-VN')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-slate-900">{formatVND(ord.total_amount)}</div>
                      <span
                        className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          ord.payment_status === 'paid'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {ord.payment_status === 'paid' ? 'Đã thanh toán' : 'Chờ thanh toán'}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-purple-600" />
                Lịch hẹn Đặt lịch (Booking) gần nhất
              </h3>
              <Link href="/admin/booking/admin" className="text-xs font-bold text-indigo-600 hover:underline">
                Mở Lịch biểu →
              </Link>
            </div>
            <div className="divide-y divide-slate-100">
              {recentAppointments.length === 0 ? (
                <p className="text-xs text-slate-400 py-6 text-center">Chưa có lịch hẹn nào.</p>
              ) : (
                recentAppointments.map((app) => (
                  <div key={app.id} className="py-3 flex items-center justify-between text-sm">
                    <div className="min-w-0 pr-3">
                      <div className="font-bold text-slate-900 truncate">{app.customer_name}</div>
                      <div className="text-xs text-slate-500 truncate mt-0.5">
                        {app.service_name || 'Dịch vụ tiêu chuẩn'} ·{' '}
                        {new Date(app.start_time).toLocaleString('vi-VN', {
                          hour: '2-digit',
                          minute: '2-digit',
                          day: '2-digit',
                          month: '2-digit',
                        })}
                      </div>
                    </div>
                    <span
                      className={`shrink-0 inline-block text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        app.status === 'confirmed'
                          ? 'bg-emerald-100 text-emerald-700'
                          : app.status === 'completed'
                          ? 'bg-blue-100 text-blue-700'
                          : app.status === 'cancelled'
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {app.status === 'confirmed'
                        ? 'Đã xác nhận'
                        : app.status === 'completed'
                        ? 'Hoàn thành'
                        : app.status === 'cancelled'
                        ? 'Đã hủy'
                        : 'Chờ xác nhận'}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Recent CRM Deals */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-600" />
              Cơ hội Bán hàng (CRM Deals) mới
            </h3>
            <Link href="/admin/crm" className="text-xs font-bold text-indigo-600 hover:underline">
              Mở Kanban →
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {recentDeals.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center">Chưa có Deal nào.</p>
            ) : (
              recentDeals.map((deal) => (
                <div key={deal.id} className="py-3 flex items-center justify-between text-sm">
                  <div className="min-w-0 pr-3">
                    <div className="font-bold text-slate-900 truncate">{deal.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {new Date(deal.created_at).toLocaleString('vi-VN')}
                    </div>
                  </div>
                  <div className="font-extrabold text-emerald-600 shrink-0">
                    {formatVND(deal.value || 0)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
