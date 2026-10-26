"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronRight,
  Send,
  ArrowUp,
  CheckCircle2,
  X,
  Menu,
  Globe,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct18DefaultData,
  B2bProduct18Data,
  TakimexExportOffer,
} from "@/template-sources/b2b_product_18/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function TakimexPandaEmblem() {
  return (
    <div className="w-12 h-12 rounded-full bg-white border-2 border-zinc-900 shadow-md flex items-center justify-center shrink-0">
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
        <circle cx="16" cy="16" r="8" fill="#18181b" />
        <circle cx="48" cy="16" r="8" fill="#18181b" />
        <circle
          cx="32"
          cy="34"
          r="20"
          fill="#ffffff"
          stroke="#18181b"
          strokeWidth="3"
        />
        <ellipse cx="24" cy="32" rx="5" ry="6" fill="#18181b" />
        <ellipse cx="40" cy="32" rx="5" ry="6" fill="#18181b" />
        <circle cx="25" cy="31" r="1.5" fill="#ffffff" />
        <circle cx="41" cy="31" r="1.5" fill="#ffffff" />
        <ellipse cx="32" cy="40" rx="3.5" ry="2.2" fill="#18181b" />
      </svg>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: B2bProduct18Data = adaptClonedTemplateData(
    b2bProduct18DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [selectedOffer, setSelectedOffer] =
    useState<TakimexExportOffer | null>(null);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [exportSubmitted, setExportSubmitted] = useState(false);
  const [bannerEmail, setBannerEmail] = useState("");
  const [bannerEmailSent, setBannerEmailSent] = useState(false);
  const [footerEmail, setFooterEmail] = useState("");
  const [footerEmailSent, setFooterEmailSent] = useState(false);

  const currentTestimonial =
    (data.testimonials || [])[activeTestimonialIdx] ||
    (data.testimonials || [])[0];

  const handleBannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bannerEmail.trim()) return;
    setBannerEmailSent(true);
    setBannerEmail("");
  };

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail.trim()) return;
    setFooterEmailSent(true);
    setFooterEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans selection:bg-[#dfaa44] selection:text-white overflow-x-hidden">
      {/* 1. HERO WITH OVERLAY NAVBAR & DARK TRANSLUCENT BOX */}
      <section className="relative min-h-[560px] lg:min-h-[640px] flex flex-col justify-between pb-28 overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />

        {/* Overlay Navbar */}
        <header className="relative z-30 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-5">
          <div className="flex items-center justify-between gap-4">
            <a href="#" className="inline-flex items-center gap-3">
              <TakimexPandaEmblem />
            </a>

            <nav className="hidden md:flex items-center gap-5 text-xs font-extrabold uppercase tracking-wider text-white">
              <a
                href="#"
                className="bg-[#dfaa44] text-white px-4 py-1.5 rounded-sm shadow-xs"
              >
                TRANG CHỦ
              </a>
              <a
                href="#ve-chung-toi"
                className="hover:text-[#dfaa44] transition-colors"
              >
                VỀ CHÚNG TÔI
              </a>
              <a
                href="#san-pham"
                className="hover:text-[#dfaa44] transition-colors"
              >
                SẢN PHẨM ▾
              </a>
              <a
                href="#uu-dai"
                className="hover:text-[#dfaa44] transition-colors"
              >
                HOẠT ĐỘNG
              </a>
              <a
                href="#tin-tuc"
                className="hover:text-[#dfaa44] transition-colors"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he"
                className="hover:text-[#dfaa44] transition-colors"
              >
                LIÊN HỆ
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center bg-white/85 backdrop-blur-xs rounded-full px-3.5 py-1.5 w-44">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm..."
                  className="w-full bg-transparent text-xs text-zinc-800 focus:outline-none"
                />
                <Search className="w-3.5 h-3.5 text-zinc-500" />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded bg-white/90 text-zinc-900"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-3 bg-zinc-900/95 text-white rounded-xl p-4 space-y-2 text-xs font-bold uppercase">
              <a href="#" className="block py-1 text-[#dfaa44]">
                TRANG CHỦ
              </a>
              <a href="#ve-chung-toi" className="block py-1">
                VỀ CHÚNG TÔI
              </a>
              <a href="#san-pham" className="block py-1">
                SẢN PHẨM
              </a>
              <a href="#tin-tuc" className="block py-1">
                TIN TỨC
              </a>
              <a href="#lien-he" className="block py-1">
                LIÊN HỆ
              </a>
            </div>
          )}
        </header>

        {/* Center Dark Translucent Hero Box */}
        <div className="relative z-20 max-w-3xl mx-auto px-4 w-full my-auto py-12">
          <div className="bg-black/65 backdrop-blur-[2px] border-l-4 border-[#dfaa44] rounded-xl px-6 py-10 sm:px-14 sm:py-12 text-center text-white shadow-2xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wider">
              {data.business.name}
            </h1>
            <p className="mt-3 text-lg sm:text-2xl font-extrabold uppercase tracking-wide">
              {data.hero.subtitle}
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  setExportSubmitted(false);
                  setExportModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 bg-[#dfaa44] hover:bg-[#c8932e] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-colors cursor-pointer"
              >
                <span>{data.hero.ctaText || "LIÊN HỆ NGAY"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING 4 EXPORT PRODUCT CATEGORY CARDS */}
      <section id="san-pham" className="relative z-20 -mt-20 pb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {data.productCategories.map((cat) => (
                <a
                  key={cat.id}
                  href="#uu-dai"
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-28 h-24 sm:w-32 sm:h-24 rounded-xl overflow-hidden mb-3 bg-amber-50/40 p-1">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase text-zinc-900 group-hover:text-[#dfaa44] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {cat.subtitle}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. VỀ CHÚNG TÔI (ABOUT TAKIMEX FACTORY) */}
      <section id="ve-chung-toi" className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-lg sm:text-xl font-extrabold uppercase text-[#dfaa44]">
              {data.business.name}
            </div>
            <h2 className="mt-1 text-base sm:text-lg font-extrabold uppercase text-zinc-900">
              {data.aboutFactorySection.heading}
            </h2>
            <div className="w-10 h-0.5 bg-[#dfaa44] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-3 text-xs text-zinc-600 leading-relaxed lg:pr-4">
              {data.aboutFactorySection.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              <p>
                <strong className="italic text-zinc-900">
                  {data.aboutFactorySection.visionLabel}
                </strong>{" "}
                {data.aboutFactorySection.visionText}
              </p>
              <p>
                <strong className="italic text-zinc-900">
                  {data.aboutFactorySection.missionLabel}
                </strong>{" "}
                {data.aboutFactorySection.missionText}
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setExportSubmitted(false);
                    setExportModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 bg-[#dfaa44] hover:bg-[#c8932e] text-white text-xs font-bold px-5 py-2 rounded-full shadow-xs cursor-pointer"
                >
                  <span>{data.aboutFactorySection.ctaText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Aerial Factory Photo with Left Gold Accent Border */}
            <div className="lg:col-span-6 lg:border-l-2 lg:border-[#dfaa44] lg:pl-6">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={data.aboutFactorySection.factoryImage}
                  alt="Nhà máy chế biến xuất khẩu"
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DUAL GOLD FEATURE BANNERS */}
      <section className="py-12 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden bg-[#dfaa44] h-60 shadow-md group">
            <img
              src={data.dualFeatureBanners.leftImage}
              alt={data.dualFeatureBanners.leftTitle}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end p-5">
              <h3 className="text-sm font-extrabold text-white">
                {data.dualFeatureBanners.leftTitle}
              </h3>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-[#dfaa44] h-60 shadow-md group">
            <img
              src={data.dualFeatureBanners.rightImage}
              alt={data.dualFeatureBanners.rightTitle}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end p-5">
              <h3 className="text-sm font-extrabold text-white">
                {data.dualFeatureBanners.rightTitle}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ƯU ĐÃI LÔ HÀNG XUẤT KHẨU TRONG TUẦN (4 Coconut Export Cards) */}
      <section id="uu-dai" className="py-14 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl py-6 px-4 text-center shadow-2xs mb-6">
            <div className="text-xs sm:text-sm font-extrabold uppercase text-zinc-900">
              {data.weeklyPromoSection.eyebrow}
            </div>
            <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#dfaa44]">
              {data.weeklyPromoSection.title}
            </h2>
            <div className="w-10 h-0.5 bg-[#dfaa44] mx-auto my-2" />
            <p className="text-xs font-bold text-zinc-700">
              {data.weeklyPromoSection.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl border-t-4 border-[#dfaa44] shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.weeklyPromoSection.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedOffer(item)}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-xs font-extrabold text-zinc-900 group-hover:text-[#dfaa44] line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-zinc-500 mt-0.5">
                      {item.specLabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERNATIONAL BUYER TESTIMONIAL + 6 EXPORT CERTIFICATES */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentTestimonial && (
            <div className="bg-[#f7f7f7] rounded-xl p-8 sm:p-10 text-center">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.author}
                className="w-20 h-20 rounded-full object-cover mx-auto shadow-md mb-4 border-2 border-white"
              />
              <p className="text-xs sm:text-sm text-zinc-600 italic max-w-2xl mx-auto leading-relaxed">
                &ldquo;{currentTestimonial.content}&rdquo;
              </p>
              <div className="mt-4 text-xs text-zinc-800">
                <strong>{currentTestimonial.author}</strong> /{" "}
                <span className="text-zinc-500">{currentTestimonial.role}</span>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                {(data.testimonials || []).map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTestimonialIdx(idx)}
                    aria-label={`Đối tác ${idx + 1}`}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      idx === activeTestimonialIdx
                        ? "bg-zinc-900"
                        : "bg-zinc-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* 6 Monochrome Export Badges */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {data.exportCertifications.map((cert) => (
              <div
                key={cert.id}
                className="py-4 px-3 border border-dashed border-zinc-200 rounded-lg text-center hover:border-[#dfaa44] transition-colors"
              >
                <div className="text-xs font-black tracking-widest uppercase text-zinc-800">
                  {cert.name}
                </div>
                <div className="text-[9px] font-bold tracking-wider uppercase text-zinc-400 mt-0.5">
                  {cert.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIN TỨC NÔNG SẢN XUẤT KHẨU (4 Cards) */}
      <section id="tin-tuc" className="py-14 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#dfaa44]">
              TIN TỨC
            </h2>
            <div className="w-10 h-0.5 bg-[#dfaa44] mx-auto mt-1.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xs font-extrabold text-zinc-900 line-clamp-2 mb-1 hover:text-[#dfaa44]">
                    {post.title}
                  </h3>
                  <div className="text-[10px] text-zinc-400 mb-2">
                    {post.date}
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DARK SPICES PARALLAX CONTACT BANNER */}
      <section className="relative py-14 overflow-hidden">
        <img
          src={data.contactBanner.backgroundImage}
          alt={data.contactBanner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-lg mx-auto px-4 text-center text-white">
          <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider">
            {data.contactBanner.title}
          </h2>
          <div className="w-10 h-0.5 bg-[#dfaa44] mx-auto my-2.5" />
          <form onSubmit={handleBannerSubmit} className="mt-4">
            <input
              type="email"
              required
              value={bannerEmail}
              onChange={(e) => setBannerEmail(e.target.value)}
              placeholder={data.contactBanner.placeholder}
              className="w-full bg-white text-zinc-800 rounded-full px-5 py-2.5 text-xs focus:outline-none shadow-md"
            />
          </form>
          {bannerEmailSent && (
            <p className="mt-2 text-xs font-bold text-[#dfaa44]">
              Đã ghi nhận email! Phòng Xuất khẩu sẽ gửi Catalogue &amp; Báo giá
              FOB/CIF ngay.
            </p>
          )}
        </div>
      </section>

      {/* 9. 4-COLUMN WHITE FOOTER + GOLD COPYRIGHT BAR */}
      <footer id="lien-he" className="bg-white text-zinc-600 pt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Company & Factories */}
            <div className="lg:col-span-4 space-y-2 text-[11px]">
              <h4 className="text-xs font-extrabold uppercase text-[#dfaa44] mb-3">
                {data.business.name}
              </h4>
              <p>
                <strong className="text-zinc-900">Trụ sở chính:</strong>{" "}
                {data.business.address}
              </p>
              <p>
                <strong className="text-zinc-900">Điện thoại 1:</strong>{" "}
                {data.business.phone[0]}
              </p>
              <p>
                <strong className="text-zinc-900">Điện thoại 2:</strong>{" "}
                {data.business.phone[1] || data.business.phone[0]}
              </p>
              <p>
                <strong className="text-zinc-900">Email:</strong>{" "}
                {data.business.email[0]}
              </p>
              {data.factories.map((f) => (
                <p key={f.id}>
                  <strong className="text-zinc-900">{f.label}:</strong>{" "}
                  {f.address}
                </p>
              ))}
            </div>

            {/* Col 2: Danh mục */}
            <div className="lg:col-span-2 space-y-2 text-[11px]">
              <h4 className="text-xs font-extrabold text-[#dfaa44] mb-3">
                Dịch vụ
              </h4>
              <ul className="space-y-2 uppercase">
                <li>
                  <a href="#" className="text-[#dfaa44] font-bold">
                    TRANG CHỦ
                  </a>
                </li>
                <li>
                  <a href="#ve-chung-toi" className="hover:text-[#dfaa44]">
                    VỀ CHÚNG TÔI
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#dfaa44]">
                    SẢN PHẨM
                  </a>
                </li>
                <li>
                  <a href="#uu-dai" className="hover:text-[#dfaa44]">
                    HOẠT ĐỘNG
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#dfaa44]">
                    TIN TỨC
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#dfaa44]">
                    LIÊN HỆ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Sản phẩm */}
            <div className="lg:col-span-3 space-y-2 text-[11px]">
              <h4 className="text-xs font-extrabold text-[#dfaa44] mb-3">
                Sản phẩm xuất khẩu
              </h4>
              <ul className="space-y-2 uppercase">
                <li>
                  <a href="#san-pham" className="hover:text-[#dfaa44]">
                    SẢN PHẨM TỪ DỪA
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#dfaa44]">
                    THỨC ĂN THÚ CƯNG
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#dfaa44]">
                    SẢN PHẨM RONG BIỂN
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#dfaa44]">
                    THỦY HẢI SẢN XUẤT KHẨU
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#dfaa44]">
                    THỦ CÔNG MỸ NGHỆ
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#dfaa44]">
                    NÔNG SẢN ĐÓNG HỘP &amp; IQF
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#dfaa44]">
                    PHỤ PHẨM NÔNG NGHIỆP
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Đăng ký */}
            <div className="lg:col-span-3 space-y-3 text-[11px]">
              <h4 className="text-xs font-extrabold text-[#dfaa44] mb-3">
                Đăng ký nhận tin
              </h4>
              <p>Đăng ký để nhận bảng giá xuất khẩu mới nhất từ chúng tôi.</p>
              <form
                onSubmit={handleFooterSubmit}
                className="flex items-center border border-zinc-200 rounded-full px-3.5 py-1.5"
              >
                <input
                  type="email"
                  required
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Email..."
                  className="w-full text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Gửi"
                  className="text-[#dfaa44] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {footerEmailSent && (
                <p className="text-[11px] font-bold text-[#dfaa44]">
                  Đăng ký thành công!
                </p>
              )}

              <div className="flex items-center gap-2 pt-2">
                {[
                  { l: "f", bg: "bg-[#1877f2]" },
                  { l: "ig", bg: "bg-[#3b5998]" },
                  { l: "p", bg: "bg-[#bd081c]" },
                  { l: "in", bg: "bg-[#0a66c2]" },
                  { l: "yt", bg: "bg-[#ff0000]" },
                ].map((s) => (
                  <a
                    key={s.l}
                    href="#lien-he"
                    className={`w-6 h-6 rounded-full ${s.bg} text-white text-[10px] font-bold flex items-center justify-center uppercase`}
                  >
                    {s.l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#c59b40] text-white py-3 px-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between text-[11px]">
            <span className="mx-auto">
              © Thiết kế và lập trình bởi <strong>{data.business.name}</strong>
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Lên đầu trang"
              className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* EXPORT OFFER MODAL */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-52">
              <img
                src={selectedOffer.image}
                alt={selectedOffer.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedOffer(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#dfaa44]">
                <Globe className="w-3.5 h-3.5" />
                {selectedOffer.origin}
              </span>
              <h3 className="mt-1 text-base font-extrabold text-zinc-900">
                {selectedOffer.title}
              </h3>
              <p className="mt-1 text-xs font-semibold text-zinc-500">
                {selectedOffer.specLabel}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {selectedOffer.description}
              </p>
              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedOffer(null)}
                  className="text-xs font-bold text-zinc-500 px-4 py-2"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedOffer(null);
                    setExportSubmitted(false);
                    setExportModalOpen(true);
                  }}
                  className="bg-[#dfaa44] text-white text-xs font-bold px-5 py-2.5 rounded-full cursor-pointer"
                >
                  Yêu cầu báo giá FOB/CIF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EXPORT CONSULTATION MODAL */}
      {exportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setExportModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>
            {exportSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#dfaa44] mx-auto" />
                <h3 className="text-lg font-extrabold text-zinc-900">
                  Đã gửi yêu cầu báo giá xuất khẩu!
                </h3>
                <p className="text-xs text-zinc-600">
                  Phòng Xuất nhập khẩu của{" "}
                  <strong>{data.business.name}</strong> sẽ liên hệ và gửi hồ sơ
                  năng lực nhà máy trong vòng 30 phút.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-extrabold text-zinc-900">
                  Liên Hệ Đặt Hàng Sỉ &amp; Xuất Khẩu (OEM/ODM)
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Hotline Kinh doanh Quốc tế: {data.business.phone[0]}
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setExportSubmitted(true);
                  }}
                  className="mt-4 space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Tên công ty / Đối tác thu mua *"
                    className="w-full border border-zinc-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#dfaa44]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại / WhatsApp *"
                    className="w-full border border-zinc-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#dfaa44]"
                  />
                  <input
                    type="text"
                    placeholder="Mặt hàng & Sản lượng dự kiến (Container 20ft/40ft)"
                    className="w-full border border-zinc-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#dfaa44]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#dfaa44] hover:bg-[#c8932e] text-white text-xs font-extrabold uppercase py-3 rounded-lg cursor-pointer"
                  >
                    Gửi Yêu Cầu Báo Giá
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
