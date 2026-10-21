'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  UserCheck,
  BookOpen,
  Send,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from 'lucide-react';

export interface EcosystemServiceItem {
  id: string;
  name: string;
  duration_minutes: number;
  price: number;
}

export interface EcosystemResourceItem {
  id: string;
  name: string;
  type: string;
  role_or_capacity?: string;
  status: string;
}

export interface EcosystemPostItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  thumbnail_url?: string | null;
  meta_description?: string | null;
  created_at: string;
}

interface TenantEcosystemShowcaseProps {
  tenantId: string;
  tenantSlug: string;
  tenantName: string;
  services: EcosystemServiceItem[];
  resources: EcosystemResourceItem[];
  posts: EcosystemPostItem[];
}

export default function TenantEcosystemShowcase({
  tenantId,
  tenantSlug,
  tenantName,
  services,
  resources,
  posts,
}: TenantEcosystemShowcaseProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(
    services[0]?.id || ''
  );
  const [branch, setBranch] = useState('Quận 1 - Đồng Khởi');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const selectedService = services.find((s) => s.id === selectedServiceId);

  const stripHtml = (html: string) => {
    if (!html) return '';
    return html
      .replace(/<[^>]*>?/gm, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const getReadMinutes = (html: string) => {
    const text = stripHtml(html);
    const words = text ? text.split(' ').length : 0;
    return Math.max(1, Math.ceil(words / 200));
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Vui lòng nhập đầy đủ Họ tên và Số điện thoại.');
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/public/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantId,
          tenantSlug,
          name: name.trim(),
          phone: phone.trim(),
          service: selectedService?.name || 'Tư vấn chuyên sâu 1:1',
          servicePrice: selectedService?.price || 0,
          branch,
          source: 'Web Booking',
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error('Không thể gửi thông tin');
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMsg('Có lỗi xảy ra khi kết nối máy chủ. Vui lòng thử lại.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="font-sans">
      {/* 1. LIVE BOOKING SERVICES & DIRECT BOOKING BRIDGE */}
      {services.length > 0 && (
        <section
          id="live-booking-services"
          className="py-20 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E8E0D5]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60233f]/10 text-[#60233f] text-xs font-semibold uppercase tracking-widest mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Bảng Giá & Đặt Lịch Trực Tuyến</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2A1820] tracking-tight">
                  Danh Mục Liệu Trình Đặc Quyền tại {tenantName}
                </h2>
                <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl">
                  Chọn liệu trình phù hợp và đặt lịch hẹn trực tiếp với Bác sĩ chuyên khoa chỉ trong 30 giây.
                </p>
              </div>
              <Link
                href={`/${tenantSlug}/booking`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#60233f] hover:bg-[#4b1a31] !text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-all shrink-0"
              >
                <Calendar className="w-4 h-4 !text-white" />
                <span className="!text-white">Mở Cổng Đặt Lịch Chọn Giờ</span>
                <ArrowRight className="w-4 h-4 !text-white" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  className="bg-white rounded-2xl p-6 border border-[#E8E0D5] hover:border-[#C5A059] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                        {svc.duration_minutes} phút
                      </span>
                      <span className="text-base font-bold text-[#60233f]">
                        {Number(svc.price).toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-slate-900 group-hover:text-[#60233f] transition-colors leading-snug mb-2">
                      {svc.name}
                    </h3>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedServiceId(svc.id);
                        const el = document.getElementById('crm-lead-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-slate-600 hover:text-[#60233f] transition-colors"
                    >
                      Nhận tư vấn phác đồ
                    </button>

                    <Link
                      href={`/${tenantSlug}/booking?serviceId=${svc.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#60233f]/10 hover:bg-[#60233f] text-[#60233f] hover:!text-white text-xs font-semibold transition-all"
                    >
                      <span>Đặt lịch ngay</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. CRM LEAD CAPTURE & VIP CONSULTATION SECTION */}
      <section
        id="crm-lead-section"
        className="py-24 px-6 md:px-12 bg-[#1F1218] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Info + Active Doctors/Resources */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E5C888] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tư Vấn Chuyên Gia 1:1 · Đồng Bộ CRM Tức Thì</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight text-white">
              Đăng Ký Tư Vấn Phác Đồ & Giữ Suất Ưu Đãi VIP
            </h2>

            <p className="text-white/75 text-base leading-relaxed">
              Để lại thông tin để Hội đồng Bác sĩ Chuyên khoa tại{' '}
              <strong className="text-white">{tenantName}</strong> trực tiếp phân
              tích tình trạng và thiết kế phác đồ cá nhân hóa. Dữ liệu được tự
              động chuyển thẳng vào hệ thống quản trị khách hàng (CRM) để phục vụ
              tức thì.
            </p>

            {resources.length > 0 && (
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E5C888] mb-3">
                  Đội ngũ Chuyên gia & Phòng VIP sẵn sàng phục vụ:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {resources.slice(0, 4).map((res) => (
                    <div
                      key={res.id}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 text-[#E5C888] flex items-center justify-center shrink-0">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white truncate">
                          {res.name}
                        </div>
                        <div className="text-[11px] text-white/60 truncate">
                          {res.role_or_capacity || 'Chuyên gia'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/${tenantSlug}/booking`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#b59049] !text-[#1F1218] text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Chọn Giờ & Đặt Lịch Trực Tuyến</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <ShieldCheck className="w-4 h-4 text-[#E5C888]" />
                <span>Bảo mật hồ sơ khách hàng chuẩn Y khoa 100%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive CRM Lead Form */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
              {submitted ? (
                <div className="py-6 text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
                      Đã đồng bộ vào CRM
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Cảm ơn {name}!
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                      Yêu cầu tư vấn dịch vụ{' '}
                      <strong className="text-slate-900">
                        {selectedService?.name || 'Tư vấn chuyên sâu'}
                      </strong>{' '}
                      tại chi nhánh <strong className="text-slate-900">{branch}</strong>{' '}
                      đã được ghi nhận vào hệ thống CRM. Chuyên viên sẽ liên hệ qua số{' '}
                      <strong className="text-slate-900">{phone}</strong> trong 15 phút.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href={`/${tenantSlug}/booking${
                        selectedService ? `?serviceId=${selectedService.id}` : ''
                      }`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#60233f] hover:bg-[#4b1a31] !text-white text-xs font-semibold transition-all"
                    >
                      <Calendar className="w-4 h-4 !text-white" />
                      <span className="!text-white">Chọn khung giờ hẹn ngay</span>
                    </Link>

                    <Link
                      href="/admin/crm"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all"
                    >
                      <span>Kiểm tra trên CRM Admin</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="text-xs text-slate-400 hover:text-slate-600 underline"
                  >
                    Gửi thêm yêu cầu tư vấn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Phiếu Đăng Ký Tư Vấn & Ưu Đãi
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Điền thông tin bên dưới để nhận phác đồ từ Bác sĩ Chuyên khoa
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Họ và tên quý khách *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="VD: Chị Nguyễn Minh Khuê"
                        className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#60233f]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="VD: 0909 888 999"
                        className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#60233f]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Dịch vụ quan tâm
                      </label>
                      <select
                        value={selectedServiceId}
                        onChange={(e) => setSelectedServiceId(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#60233f]"
                      >
                        {services.map((svc) => (
                          <option key={svc.id} value={svc.id}>
                            {svc.name} ({Number(svc.price).toLocaleString('vi-VN')}đ)
                          </option>
                        ))}
                        <option value="custom">Tư vấn phác đồ tổng quát 1:1</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Chi nhánh đăng ký
                      </label>
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#60233f]"
                      >
                        <option value="Quận 1 - Đồng Khởi">Quận 1 - Đồng Khởi</option>
                        <option value="Quận 3 - Pasteur">Quận 3 - Pasteur</option>
                        <option value="Thủ Đức - Sala">Thủ Đức - Sala</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Tình trạng / Yêu cầu tư vấn thêm
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Chia sẻ nhu cầu của bạn hoặc khung giờ mong muốn bác sĩ gọi tư vấn..."
                      className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#60233f]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 rounded-xl bg-[#60233f] hover:bg-[#4b1a31] !text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-60 cursor-pointer"
                  >
                    <Send className="w-4 h-4 !text-white" />
                    <span className="!text-white">
                      {submitting
                        ? 'Đang gửi vào hệ thống CRM...'
                        : 'Gửi Yêu Cầu Tư Vấn & Nhận Ưu Đãi VIP'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI CMS EDITORIAL MAGAZINE & BLOG SECTION */}
      {posts.length > 0 && (
        <section
          id="cms-magazine-section"
          className="py-24 px-6 md:px-12 bg-white border-t border-slate-200/70"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-widest mb-4">
                  <BookOpen className="w-3.5 h-3.5 text-[#60233f]" />
                  <span>Tạp Chí Chuyên Môn & Cẩm Nang (AI CMS)</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                  Kiến Thức Chuyên Sâu Từ Hội Đồng Bác Sĩ
                </h2>
                <p className="text-slate-500 text-sm md:text-base mt-2 max-w-2xl">
                  Cập nhật công nghệ thẩm mỹ nội khoa, nha khoa sứ nghệ thuật và phác đồ chăm sóc chuẩn Y khoa quốc tế.
                </p>
              </div>

              <Link
                href={`/${tenantSlug}/blog`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 hover:border-slate-900 text-slate-900 text-xs font-semibold uppercase tracking-wider transition-all shrink-0"
              >
                <span>Xem tất cả bài viết ({posts.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.slice(0, 4).map((post) => {
                const excerpt =
                  post.meta_description ||
                  stripHtml(post.content).slice(0, 130) + '...';
                const readMin = getReadMinutes(post.content);

                return (
                  <Link
                    key={post.id}
                    href={`/${tenantSlug}/blog/${post.slug}`}
                    className="group bg-[#FAF9F6] rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#C5A059] hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                        {post.thumbnail_url ? (
                          <img
                            src={post.thumbnail_url}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <BookOpen className="w-8 h-8" />
                          </div>
                        )}
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-xs text-white text-[11px] font-medium">
                          {readMin} phút đọc
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="text-[11px] text-slate-400 font-medium mb-2">
                          {new Date(post.created_at).toLocaleDateString(
                            'vi-VN',
                            {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric',
                            }
                          )}
                        </div>
                        <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#60233f] transition-colors line-clamp-2 leading-snug mb-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                          {excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#60233f]">
                      <span>Đọc bài viết</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. FLOATING CONCIERGE BAR FOR SEAMLESS NAVIGATION */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-2 p-1.5 rounded-full bg-[#1F1218]/90 backdrop-blur-md border border-white/15 shadow-2xl">
        <Link
          href={`/${tenantSlug}/booking`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A059] hover:bg-[#d1ad66] !text-[#1F1218] text-xs font-bold transition-all"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Đặt Lịch Hẹn Online</span>
        </Link>
        <a
          href="#crm-lead-section"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 text-xs font-medium transition-all"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#E5C888]" />
          <span>Tư Vấn VIP (CRM)</span>
        </a>
        <Link
          href={`/${tenantSlug}/blog`}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 text-xs font-medium transition-all"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#E5C888]" />
          <span>Tạp Chí & Blog (CMS)</span>
        </Link>
      </div>
    </div>
  );
}
