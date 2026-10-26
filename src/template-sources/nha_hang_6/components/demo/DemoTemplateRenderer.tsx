"use client";

import React, { useState } from "react";
import {
  Phone,
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  ArrowRight,
  Play,
  UtensilsCrossed,
  Mail,
  ArrowUp,
  Menu,
  X,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaHang6DefaultData,
  type NhaHang6Data
} from "@/template-sources/nha_hang_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NhaHang6Data = adaptClonedTemplateData(
    nhaHang6DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [bookingModalTopic, setBookingModalTopic] = useState<string | null>(
    null
  );
  const [bookingSent, setBookingSent] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterAgreed, setNewsletterAgreed] = useState(true);
  const [newsletterSent, setNewsletterSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0313728397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const heroImages =
    data.hero.images && data.hero.images.length > 0
      ? data.hero.images
      : [data.hero.backgroundImage];

  const eventCategories =
    data.eventCategories || nhaHang6DefaultData.eventCategories || [];
  const clientNames = data.clientNames || nhaHang6DefaultData.clientNames || [];
  const menuItems =
    data.menuSection?.items || nhaHang6DefaultData.menuSection.items || [];
  const newsList = data.news || nhaHang6DefaultData.news || [];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSent(true);
    setTimeout(() => {
      setBookingSent(false);
      setBookingModalTopic(null);
    }, 2200);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1e2024] font-sans selection:bg-[#c59d5f] selection:text-white"
    >
      {/* 1. FULL-BLEED EDITORIAL CATERING HERO + TRANSPARENT HEADER (Matches NH006) */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex flex-col justify-between overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('${heroImages[heroIdx] || data.hero.backgroundImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" />

        {/* Top Navigation Bar */}
        <header className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 flex items-center justify-between text-white">
          {/* Left Brand + Nav */}
          <div className="flex items-center gap-10">
            <a href="#top" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#c8a98e] text-white flex items-center justify-center shadow">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-serif font-bold tracking-wide">
                  {data.business.name.split(" ")[0] || "Mona"}
                </span>
                <span className="block text-[9px] text-white/75 tracking-widest uppercase">
                  Catering Service
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-white/90">
              <a
                href="#top"
                className="text-white border-b border-white pb-0.5"
              >
                Trang chủ
              </a>
              <a href="#about" className="hover:text-[#d4a038] transition-colors">
                Giới thiệu
              </a>
              <a
                href="#services"
                className="hover:text-[#d4a038] transition-colors"
              >
                Dịch vụ
              </a>
              <a href="#menu" className="hover:text-[#d4a038] transition-colors">
                Thực đơn
              </a>
              <a href="#news" className="hover:text-[#d4a038] transition-colors">
                Blog
              </a>
              <a href="#footer" className="hover:text-[#d4a038] transition-colors">
                Liên hệ
              </a>
              <button
                type="button"
                onClick={() => setBookingModalTopic("Tra cứu thực đơn sự kiện")}
                aria-label="Tìm kiếm"
                className="hover:text-[#d4a038]"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </nav>
          </div>

          {/* Right Phone & CTA */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-xs font-semibold text-white hover:text-[#d4a038]"
            >
              <span className="w-6 h-6 rounded-full bg-[#d4a038] text-white flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </span>
              <span>{primaryPhone}</span>
            </a>

            <button
              type="button"
              onClick={() => setBookingModalTopic("Đặt tiệc & Nhận báo giá")}
              className="bg-[#d4a038] hover:bg-[#b88628] text-white text-xs font-semibold px-5 py-2.5 transition-colors shadow"
            >
              Liên hệ
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {mobileMenuOpen && (
          <div className="lg:hidden relative z-30 bg-[#191b1f]/95 text-white px-6 py-4 space-y-2.5 text-xs border-t border-white/10">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#d4a038] font-bold"
            >
              Trang chủ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giới thiệu
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Dịch vụ tiệc
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Thực đơn hàng đầu
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tin tức sự kiện
            </a>
          </div>
        )}

        {/* Center Staggered Serif Hero Typography */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 my-auto py-12 flex items-center justify-between">
          <button
            type="button"
            onClick={() =>
              setHeroIdx((prev) =>
                prev === 0 ? heroImages.length - 1 : prev - 1
              )
            }
            aria-label="Slide trước"
            className="hidden sm:flex w-10 h-10 items-center justify-center text-white/75 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-7 h-7 stroke-[1.2]" />
          </button>

          <div className="text-center mx-auto max-w-3xl">
            <h1 className="font-serif text-white text-4xl sm:text-6xl lg:text-[68px] uppercase leading-[1.12] tracking-wide drop-shadow-md">
              <span className="block">PHỤC VỤ</span>
              <span className="block sm:-ml-16">CHẤT LƯỢNG</span>
              <span className="block sm:ml-24">THANH LỊCH</span>
            </h1>
          </div>

          <button
            type="button"
            onClick={() =>
              setHeroIdx((prev) =>
                prev === heroImages.length - 1 ? 0 : prev + 1
              )
            }
            aria-label="Slide tiếp theo"
            className="hidden sm:flex w-10 h-10 items-center justify-center text-white/75 hover:text-white transition-colors"
          >
            <ChevronRight className="w-7 h-7 stroke-[1.2]" />
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="relative z-10 pb-6 text-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-white/85 hover:text-white text-[10px] uppercase tracking-[0.2em]"
          >
            <ArrowDown className="w-4 h-4 stroke-[1.5] animate-bounce" />
            <span>CUỘN XUỐNG</span>
          </a>
        </div>
      </section>

      {/* 2. VỀ CHÚNG TÔI: LÀM CHO SỰ KIỆN TRỞ NÊN HOÀN HẢO (Staggered 2-Column Collage) */}
      <section id="about" className="relative py-20 bg-white overflow-hidden">
        {/* Decorative Warm Cream Corner Shapes */}
        <div className="hidden lg:block absolute top-0 right-0 w-72 h-64 bg-[#f7f2ec] rounded-bl-[120px] pointer-events-none" />
        <div className="hidden lg:block absolute bottom-0 left-0 w-72 h-64 bg-[#f7f2ec] rounded-tr-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading + Tall Appetizer Image */}
          <div className="md:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8a98e] block mb-2">
                {data.aboutCollage.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl uppercase text-[#1e2024] leading-snug">
                {data.aboutCollage.title}
              </h2>
            </div>

            <div className="md:pl-12">
              <div className="aspect-[3/4] overflow-hidden shadow-md bg-slate-100">
                <img
                  src={data.aboutCollage.leftTallImage}
                  alt={data.aboutCollage.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Square Canapé Image + Caption */}
          <div className="md:col-span-6 space-y-6">
            <div className="aspect-square overflow-hidden shadow-md bg-slate-100">
              <img
                src={data.aboutCollage.rightSquareImage}
                alt="Canapé Catering"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              {data.aboutCollage.caption}
            </p>
          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH VIDEO BANNER WITH PLAY BUTTON */}
      <section className="relative h-[320px] sm:h-[440px] overflow-hidden flex items-center justify-center">
        <img
          src={data.videoBannerImage}
          alt="Bàn tiệc sự kiện"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <button
          type="button"
          onClick={() => setVideoModalOpen(true)}
          className="relative z-10 w-20 h-20 rounded-full border border-white/80 bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest flex items-center justify-center transition-transform hover:scale-110"
        >
          PLAY
        </button>
      </section>

      {/* 4. CHÚNG TÔI LÀM GÌ: DỊCH VỤ (4 Event Cards + Client Logo Bar) */}
      <section id="services" className="relative py-20 bg-white overflow-hidden">
        <div className="hidden lg:block absolute top-0 right-0 w-64 h-64 bg-[#f7f2ec] rounded-bl-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12">
            <div className="md:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8a98e] block mb-1.5">
                CHÚNG TÔI LÀM GÌ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl uppercase text-[#1e2024]">
                DỊCH VỤ
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-xs text-slate-500 leading-relaxed">
                Chúng tôi tận hưởng việc tạo ra những trải nghiệm ẩm thực độc đáo và tùy chỉnh để đáp ứng mọi nhu cầu sự kiện của khách hàng.
              </p>
            </div>
            <div className="md:col-span-2 md:text-right">
              <button
                type="button"
                onClick={() => setBookingModalTopic("Tư vấn dịch vụ tổ chức tiệc")}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 hover:text-[#c59d5f]"
              >
                <span>Xem thêm</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4 Portrait Event Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {eventCategories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setBookingModalTopic(`Đặt tiệc: ${cat.title}`)}
                className="group relative aspect-[3/4] overflow-hidden bg-black cursor-pointer shadow-sm"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-5 px-5 text-white">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#d4a038] block mb-0.5">
                    {cat.title}
                  </span>
                  <h3 className="font-serif text-sm uppercase tracking-wider">
                    {cat.englishSubtitle}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Row */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-6 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 text-slate-300 font-serif italic text-lg sm:text-xl select-none">
              {clientNames.map((cl, i) => (
                <span
                  key={i}
                  className="hover:text-[#c8a98e] transition-colors cursor-default"
                >
                  {cl}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-slate-300" />
              <span className="font-serif text-sm uppercase tracking-widest text-slate-700">
                CLIENTS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KHÁM PHÁ CÁC MỤC MENU HÀNG ĐẦU CỦA CHÚNG TÔI VÀ ĐẶT NGAY */}
      <section id="menu" className="py-20 bg-[#f7f4ef]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 relative">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8a98e] block mb-2">
              {data.menuSection.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase text-[#1e2024] leading-snug mb-4">
              {data.menuSection.title}
            </h2>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
              {data.menuSection.chefName}
            </div>
            <div className="text-[10px] text-slate-400">
              {data.menuSection.chefRole}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setBookingModalTopic(item.title)}
                className="group relative aspect-[3/4] overflow-hidden bg-white shadow-sm cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#d4a038] font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-sm mt-1">{item.title}</h3>
                  <span className="text-xs font-semibold text-white/90 mt-1">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-[#c8a98e]" />
          </div>
        </div>
      </section>

      {/* 6. SANG TRỌNG VÀ CHẤT LƯỢNG: DỊP ĐẶC BIỆT CỦA BẠN */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="hidden lg:block absolute top-0 right-0 w-72 h-72 bg-[#f7f2ec] rounded-bl-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Photo + Dark Overlapping Quote Box */}
          <div className="md:col-span-6 relative pb-8 sm:pb-10 pr-4 sm:pr-8">
            <div className="aspect-[4/5] overflow-hidden shadow-md bg-slate-100">
              <img
                src={data.specialOccasion.image}
                alt={data.specialOccasion.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 bg-[#181c23] text-white p-6 sm:p-8 max-w-[230px] shadow-xl">
              <p className="font-serif text-xs sm:text-sm uppercase leading-relaxed tracking-wide">
                {data.specialOccasion.overlayQuote}
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8a98e] block mb-2">
              {data.specialOccasion.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase text-[#1e2024] leading-snug mb-4">
              {data.specialOccasion.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              {data.specialOccasion.description}
            </p>

            <div className="divide-y divide-slate-100 mb-7">
              {data.specialOccasion.numberedPoints.map((pt, idx) => (
                <div key={idx} className="py-3.5">
                  <div className="flex items-center gap-3 font-serif text-xs uppercase tracking-wider text-[#1e2024] font-semibold">
                    <span className="text-slate-400">{pt.number}</span>
                    <span>{pt.label}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 pl-7">
                    {pt.detail}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setBookingModalTopic("Tư vấn thực đơn cho dịp đặc biệt")
              }
              className="inline-flex items-center gap-3 bg-[#c8a98e] hover:bg-[#b39174] text-white text-xs font-medium px-6 py-3 transition-colors"
            >
              <span>Xem thêm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. BÀI VIẾT MỚI NHẤT: TIN TỨC (3 Editorial Cards) */}
      <section id="news" className="py-20 bg-[#f7f4ef]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8a98e] block mb-1.5">
              BÀI VIẾT MỚI NHẤT
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase text-[#1e2024]">
              TIN TỨC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((post) => (
              <article
                key={post.id}
                onClick={() => setBookingModalTopic(post.title)}
                className="bg-white p-7 sm:p-8 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-3">
                    <span className="text-[#d4a038] font-bold">
                      {post.category || "CHUẨN BỊ TIỆC"}
                    </span>{" "}
                    • {post.date}
                  </div>
                  <h3 className="font-serif text-sm uppercase text-[#1e2024] leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DARK CHARCOAL FOOTER */}
      <footer id="footer" className="bg-[#191b1f] text-slate-400">
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-12">
          <h2 className="font-serif text-2xl sm:text-3xl uppercase text-white leading-snug max-w-xl mb-12">
            CHÚNG TÔI CUNG CẤP <br />
            TẤT CẢ CÁC DỊCH VỤ ĂN UỐNG
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs pb-12 border-b border-white/10">
            {/* ĐỊA CHỈ */}
            <div className="lg:col-span-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-4">
                ĐỊA CHỈ
              </h4>
              <p className="leading-relaxed text-slate-400">
                {data.business.address}
              </p>
            </div>

            {/* LIÊN HỆ */}
            <div className="lg:col-span-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-4">
                LIÊN HỆ
              </h4>
              <p className="mb-2">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-white underline hover:text-[#d4a038]"
                >
                  {primaryEmail}
                </a>
              </p>
              <p className="text-white font-semibold">{primaryPhone}</p>
            </div>

            {/* DANH MỤC */}
            <div className="lg:col-span-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-4">
                DANH MỤC
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#top" className="hover:text-white">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* BẢN TIN */}
            <div className="lg:col-span-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-4">
                BẢN TIN
              </h4>
              {newsletterSent ? (
                <div className="text-xs text-[#d4a038] font-medium">
                  Cảm ơn bạn đã đăng ký nhận thực đơn mới!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSent(true);
                    setNewsletterEmail("");
                  }}
                >
                  <div className="flex items-center border-b border-white/20 pb-2 mb-3">
                    <Mail className="w-4 h-4 text-slate-500 mr-2.5" />
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Nhập email..."
                      className="bg-transparent text-xs text-white flex-1 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Đăng ký"
                      className="text-white hover:text-[#d4a038]"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <label className="flex items-center gap-2 text-[10px] text-slate-500 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newsletterAgreed}
                      onChange={(e) => setNewsletterAgreed(e.target.checked)}
                      className="accent-[#d4a038]"
                    />
                    <span>
                      Tôi đồng ý với{" "}
                      <span className="underline text-slate-400">
                        Chính sách bảo mật
                      </span>
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>

          <div className="pt-6 flex items-center justify-between text-[11px] text-slate-500">
            <div>
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-white">{data.business.name}</strong>
            </div>
            <a
              href="#top"
              aria-label="Lên đầu trang"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d4a038] text-white flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* VIDEO PREVIEW MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#191b1f] text-white rounded-xl max-w-2xl w-full p-6 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-lg uppercase mb-3">
              Hậu trường chuẩn bị đại tiệc — {data.business.name}
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden relative bg-black">
              <img
                src={data.videoBannerImage}
                alt="Video Catering"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40">
                <Play className="w-12 h-12 text-[#d4a038] mb-2" />
                <p className="text-xs text-white/90 max-w-md">
                  Quy trình chuẩn bị hơn 500 phần tiệc Canapé, Fine Dining và bàn tiệc cưới sang trọng bởi đội ngũ đầu bếp {data.business.name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CATERING QUOTE / BOOKING MODAL */}
      {bookingModalTopic && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-7 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setBookingModalTopic(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSent ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#c59d5f] mx-auto mb-3" />
                <h3 className="font-serif text-lg uppercase text-slate-900 mb-1">
                  Đã nhận yêu cầu đặt tiệc!
                </h3>
                <p className="text-xs text-slate-500">
                  Chuyên viên sự kiện của {data.business.name} sẽ gửi thực đơn chi tiết và báo giá trong 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c8a98e]">
                    {data.business.name}
                  </span>
                  <h3 className="font-serif text-lg uppercase text-slate-900 mt-1">
                    {bookingModalTopic}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên quý khách"
                  className="w-full border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#c8a98e]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ"
                  className="w-full border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#c8a98e]"
                />
                <input
                  type="text"
                  placeholder="Số lượng khách dự kiến & Ngày tổ chức"
                  className="w-full border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#c8a98e]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#d4a038] hover:bg-[#b88628] text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors"
                >
                  NHẬN THỰC ĐƠN & BÁO GIÁ
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
