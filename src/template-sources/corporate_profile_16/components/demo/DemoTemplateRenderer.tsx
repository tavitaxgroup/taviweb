"use client";

import React, { useState } from "react";
import {
  Search,
  Plane,
  ThumbsUp,
  UserCheck,
  Mail,
  CreditCard,
  Package,
  Gift,
  RefreshCw,
  DollarSign,
  Wrench,
  Truck,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile16DefaultData,
  type CorporateProfile16Data,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: CorporateProfile16Data = adaptClonedTemplateData(
    corporateProfile16DefaultData,
    incomingData
  );

  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "order@globalimport.vn";

  const renderHeaderIcon = (icon: string) => {
    switch (icon) {
      case "plane":
        return <Plane className="w-6 h-6 text-[#FF9900] shrink-0" />;
      case "thumbsup":
        return <ThumbsUp className="w-6 h-6 text-[#FF9900] shrink-0" />;
      default:
        return <UserCheck className="w-6 h-6 text-[#FF9900] shrink-0" />;
    }
  };

  const renderReasonIcon = (icon: string) => {
    switch (icon) {
      case "gift":
        return <Gift className="w-8 h-8 text-[#4A90E2] shrink-0" />;
      case "refresh":
        return <RefreshCw className="w-8 h-8 text-[#4A90E2] shrink-0" />;
      case "dollar":
        return <DollarSign className="w-8 h-8 text-[#4A90E2] shrink-0" />;
      case "wrench":
        return <Wrench className="w-8 h-8 text-[#4A90E2] shrink-0" />;
      case "truck":
        return <Truck className="w-8 h-8 text-[#4A90E2] shrink-0" />;
      default:
        return <MapPin className="w-8 h-8 text-[#4A90E2] shrink-0" />;
    }
  };

  const renderSectionDivider = () => (
    <div className="flex items-center justify-center gap-2 mt-2 mb-10">
      <span className="w-4 h-px bg-[#FF9900]" />
      <span className="text-base font-black text-[#FF9900] leading-none">
        a
      </span>
      <span className="w-4 h-px bg-[#FF9900]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#FF9900] selection:text-white">
      {/* HEADER (2-Row Header matching DN019-corporate_profile_16.jpg) */}
      <header className="sticky top-0 z-40 bg-white shadow-xs">
        {/* Top White Row */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-black text-[#111111] leading-none">
                    a
                  </span>
                  <span className="w-8 h-1 bg-[#FF9900] rounded-full -mt-0.5" />
                </div>
                <div className="hidden sm:block">
                  <span className="block text-sm font-extrabold text-[#111111] leading-none">
                    {data.business.name}
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider text-[#777777] mt-0.5">
                    EU LOGISTICS & ORDER
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Search Bar */}
          <div className="flex items-center bg-[#F4F4F4] border border-[#e2e2e2] rounded-full px-3.5 py-1.5 w-48 sm:w-56">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="bg-transparent text-xs text-[#333333] w-full focus:outline-none"
            />
            <Search className="w-3.5 h-3.5 text-[#555555] shrink-0" />
          </div>

          {/* 3 Header Highlights */}
          <div className="hidden lg:grid grid-cols-3 gap-5 max-w-2xl">
            {data.headerHighlights.map((hh) => (
              <div key={hh.id} className="flex items-center gap-2.5">
                {renderHeaderIcon(hh.icon)}
                <div>
                  <h4 className="text-[11px] font-bold text-[#222222] leading-tight">
                    {hh.title}
                  </h4>
                  <p className="text-[10px] text-[#777777] leading-tight mt-0.5">
                    {hh.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Dark Charcoal Navbar (#1F1F1F) */}
        <div className="bg-[#1F1F1F] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-center">
            <nav className="flex items-center gap-5 sm:gap-7 text-[11px] font-bold uppercase tracking-wider overflow-x-auto no-scrollbar">
              <a href="#" className="text-[#FF9900] whitespace-nowrap">
                TRANG CHỦ
              </a>
              <a
                href="#dich-vu"
                className="hover:text-[#FF9900] transition-colors whitespace-nowrap"
              >
                DỊCH VỤ ⌄
              </a>
              <a
                href="#ly-do"
                className="hover:text-[#FF9900] transition-colors whitespace-nowrap"
              >
                PHÍ VẬN CHUYỂN
              </a>
              <a
                href="#huong-dan"
                className="hover:text-[#FF9900] transition-colors whitespace-nowrap"
              >
                HƯỚNG DẪN
              </a>
              <a
                href="#gioi-thieu"
                className="hover:text-[#FF9900] transition-colors whitespace-nowrap"
              >
                SẢN PHẨM ⌄
              </a>
              <a
                href="#ly-do"
                className="hover:text-[#FF9900] transition-colors whitespace-nowrap"
              >
                CHÍNH SÁCH ⌄
              </a>
              <a
                href="#kinh-nghiem"
                className="hover:text-[#FF9900] transition-colors whitespace-nowrap"
              >
                KINH NGHIỆM ⌄
              </a>
              <a
                href="#lien-he"
                className="hover:text-[#FF9900] transition-colors whitespace-nowrap"
              >
                LIÊN HỆ
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO BANNER (Logistics Boxes + Dark Translucent Box on Left) */}
      <section className="relative min-h-[420px] lg:min-h-[470px] flex items-center overflow-hidden bg-[#2b2623]">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 py-12">
          <div className="max-w-md bg-black/85 backdrop-blur-[2px] p-8 sm:p-10 text-center text-white shadow-2xl">
            <span className="block text-lg sm:text-xl font-extrabold uppercase tracking-wide">
              {data.hero.eyebrow || "MUA SẮM CHÂU ÂU"}
            </span>
            <h1 className="mt-1 text-3xl sm:text-4xl font-serif font-extrabold text-[#FF9900] uppercase tracking-wide">
              {data.hero.title || "GIÁ VIỆT NAM"}
            </h1>
            <p className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90">
              {data.hero.subtitle}
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href={data.hero.ctaLink || "#dich-vu"}
                className="px-5 py-2 bg-[#FF9900] hover:bg-[#e08600] text-white text-xs font-bold uppercase rounded-xs transition-colors"
              >
                {data.hero.ctaText || "DỊCH VỤ"}
              </a>
              <a
                href={data.hero.secondaryCtaLink || "#huong-dan"}
                className="px-5 py-2 border border-white/80 hover:bg-white hover:text-[#111111] text-white text-xs font-bold uppercase rounded-xs transition-colors"
              >
                {data.hero.secondaryCtaText || "SẢN PHẨM"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MUA HÀNG CHÂU ÂU – SHIP VỀ VIỆT NAM */}
      <section id="gioi-thieu" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111]">
              {data.business.aboutTitle || "Mua Hàng Châu Âu – Ship Về Việt Nam"}
            </h2>
            {renderSectionDivider()}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy & Bullet Points */}
            <div className="lg:col-span-6 text-xs text-[#555555] leading-relaxed space-y-3">
              <p>{data.business.aboutText?.[0]}</p>
              {data.business.aboutText?.[1] && (
                <p>{data.business.aboutText[1]}</p>
              )}

              <ul className="space-y-2 pt-2 pl-4 list-disc marker:text-[#FF9900]">
                {data.aboutBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Right Warehouse / Drone Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden shadow-md border border-[#eeeeee]">
                <img
                  src={data.aboutVisual}
                  alt="Mua hàng Châu Âu"
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DỊCH VỤ CỦA CHÚNG TÔI */}
      <section id="dich-vu" className="py-16 bg-[#F3F3F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111]">
              Dịch Vụ Của Chúng Tôi
            </h2>
            {renderSectionDivider()}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.services || []).map((srv) => (
              <div
                key={srv.id}
                onClick={() => setQuoteModalOpen(true)}
                className="relative h-52 overflow-hidden shadow-sm cursor-pointer group bg-[#222222]"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/80 py-3 px-4 text-center">
                  <h3 className="text-xs font-serif font-bold text-white group-hover:text-[#FF9900] transition-colors">
                    {srv.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HƯỚNG DẪN MUA HÀNG */}
      <section id="huong-dan" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111]">
              Hướng Dẫn Mua Hàng
            </h2>
            {renderSectionDivider()}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Websites List + 4 Steps Box */}
            <div className="lg:col-span-6">
              <h3 className="text-xs font-bold text-[#222222] mb-2">
                Các trang bán hàng uy tín tại Đức
              </h3>
              <ul className="space-y-1 text-xs text-[#4A90E2] mb-6">
                {data.trustedSites.map((site) => (
                  <li key={site}>
                    <a
                      href="#huong-dan"
                      onClick={(e) => {
                        e.preventDefault();
                        setQuoteModalOpen(true);
                      }}
                      className="hover:underline"
                    >
                      {site}
                    </a>
                  </li>
                ))}
              </ul>

              {/* 4 BƯỚC ĐẶT HÀNG Visual Box (Matches purple bordered flowchart in screenshot) */}
              <div className="border-2 border-[#7E57C2] rounded-md p-4 relative pt-6 bg-white">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-xs font-extrabold uppercase text-[#7E57C2]">
                  4 BƯỚC ĐẶT HÀNG
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  {data.orderSteps.map((st, idx) => (
                    <div key={st.step} className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-[#FFF3E0] text-[#FF9900] flex items-center justify-center mb-2 shadow-2xs">
                        {idx === 0 ? (
                          <Mail className="w-5 h-5 text-[#E53935]" />
                        ) : idx === 1 ? (
                          <CreditCard className="w-5 h-5 text-[#43A047]" />
                        ) : idx === 2 ? (
                          <Plane className="w-5 h-5 text-[#1E88E5]" />
                        ) : (
                          <Package className="w-5 h-5 text-[#FB8C00]" />
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-[#2E7D32] leading-tight">
                        {st.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right E-Commerce Skyline Banner */}
            <div className="lg:col-span-6">
              <div className="relative h-60 rounded-lg overflow-hidden bg-gradient-to-b from-[#9FA8DA] via-[#7986CB] to-[#3949AB] flex flex-col items-center justify-center text-white p-6 shadow-md">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111]">
                  amazon<span className="text-[#FF9900]">.de</span>
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/90">
                  Cổng Đặt Hàng Quốc Tế Chính Hãng {data.business.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LÝ DO BẠN NÊN CHỌN CHÚNG TÔI */}
      <section id="ly-do" className="py-16 bg-[#F3F3F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111]">
              Lý Do Bạn Nên Chọn Chúng Tôi
            </h2>
            {renderSectionDivider()}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.reasons.map((rs) => (
              <div key={rs.id} className="flex items-start gap-4">
                <div className="mt-1">{renderReasonIcon(rs.icon)}</div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#222222]">
                    {rs.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#666666] leading-relaxed">
                    {rs.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DARK CHARCOAL QUOTE CTA BAR */}
      <section className="py-9 bg-[#2B2B2B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold">
              Bạn có sản phẩm muốn mua?
            </h3>
            <p className="text-xs text-white/80 mt-0.5">
              Hãy gửi yêu cầu cho chúng tôi để được báo giá trong vòng 30 phút!
            </p>
          </div>
          <button
            type="button"
            onClick={() => setQuoteModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EF6C57] hover:bg-[#dc5640] text-white text-xs font-bold rounded-xs shadow-md transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Đăng ký ngay !</span>
          </button>
        </div>
      </section>

      {/* SECTION 7: KINH NGHIỆM MUA SẮM */}
      <section id="kinh-nghiem" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111]">
              Kinh Nghiệm Mua Sắm
            </h2>
            {renderSectionDivider()}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-[#ececec] shadow-xs overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xs font-bold text-[#222222] group-hover:text-[#FF9900] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <span className="block text-[10px] text-[#999999] mt-1">
                      {post.date}
                    </span>
                    <p className="mt-2 text-xs text-[#666666] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4">
                  <a
                    href="#lien-he"
                    className="text-[11px] font-bold text-[#444444] hover:text-[#FF9900]"
                  >
                    Xem Thêm <span className="text-[#E53935]">▸</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (Deep Black #0F0F0F matching DN019-corporate_profile_16.jpg) */}
      <footer id="lien-he" className="bg-[#0F0F0F] text-white/75 pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Col 1: Logo & Contact */}
            <div className="lg:col-span-3">
              <div className="mb-4">
                <span className="text-4xl font-black text-white leading-none">
                  a
                </span>
                <span className="block w-10 h-1 bg-[#FF9900] rounded-full mt-0.5" />
              </div>
              <ul className="space-y-2 text-[11px] text-white/75">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: MENU */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                MENU
              </h4>
              <ul className="divide-y divide-white/10 text-[11px]">
                {[
                  { label: "Trang chủ", active: true },
                  { label: "Giới thiệu" },
                  { label: "Sản phẩm" },
                  { label: "Tin tức" },
                  { label: "Liên hệ" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="py-2 flex items-center justify-between"
                  >
                    <a
                      href="#"
                      className={
                        item.active
                          ? "text-[#FF9900] font-semibold"
                          : "hover:text-white"
                      }
                    >
                      ▸ {item.label}
                    </a>
                    <ArrowRight
                      className={`w-3 h-3 ${
                        item.active ? "text-[#FF9900]" : "text-white/50"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: DỊCH VỤ MUA HỘ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                DỊCH VỤ MUA HỘ
              </h4>
              <ul className="divide-y divide-white/10 text-[11px]">
                {[
                  "Dịch vụ",
                  "Phí vận chuyển",
                  "Hướng dẫn",
                  "Chính sách",
                  "Tiện ích",
                  "Kinh nghiệm",
                ].map((label) => (
                  <li
                    key={label}
                    className="py-2 flex items-center justify-between"
                  >
                    <a href="#dich-vu" className="hover:text-white">
                      ▸ {label}
                    </a>
                    <ArrowRight className="w-3 h-3 text-white/50" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                ĐĂNG KÝ
              </h4>
              <p className="text-[11px] text-white/70 mb-3 leading-relaxed">
                Đăng ký để nhận được được thông tin tỷ giá & khuyến mãi mới nhất
                từ chúng tôi.
              </p>
              {newsletterDone ? (
                <div className="text-xs text-[#FF9900] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã đăng ký nhận bản tin!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex items-center bg-white rounded-xs overflow-hidden"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    className="w-full px-3 py-2 text-xs text-[#222222] focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Gửi"
                    className="px-3 py-2 text-[#FF9900] hover:bg-[#f5f5f5]"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-white/50">
            © Bản quyền thuộc về <strong>{data.business.name}</strong> • Thiết
            kế bởi TaviWeb
          </div>
        </div>
      </footer>

      {/* FAST 30-MINUTE QUOTE MODAL */}
      {quoteModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
          onClick={() => setQuoteModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-serif font-bold text-[#111111]">
              Yêu Cầu Báo Giá Mua Hộ Châu Âu
            </h3>
            <p className="text-xs text-[#666666] mt-1">
              Nhận báo giá trọn gói về tận tay tại Việt Nam trong 30 phút.
            </p>
            {quoteSubmitted ? (
              <div className="mt-4 p-4 bg-[#FFF8EB] border border-[#FF9900] text-xs text-[#222222] text-center font-semibold">
                Đã gửi link sản phẩm! Chuyên viên {data.business.name} sẽ gửi
                báo giá ngay.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSubmitted(true);
                }}
                className="mt-4 space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên quý khách *"
                  className="w-full px-3.5 py-2.5 border border-[#dddddd] text-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại / Zalo nhận báo giá *"
                  className="w-full px-3.5 py-2.5 border border-[#dddddd] text-xs"
                />
                <input
                  type="text"
                  required
                  placeholder="Dán link sản phẩm Amazon.de / Ebay / Otto..."
                  className="w-full px-3.5 py-2.5 border border-[#dddddd] text-xs"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#FF9900] hover:bg-[#e08600] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  NHẬN BÁO GIÁ TRONG 30 PHÚT
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
