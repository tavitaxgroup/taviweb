"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Play,
  ArrowRight,
  ArrowLeft,
  Building2,
  Home,
  Coins,
  CheckCircle2,
  BedDouble,
  Bath,
  Maximize2,
  Heart,
  ChevronDown,
  Star,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile6DefaultData,
  type CorporateProfile6TemplateData,
  type CorporateProfile6Property
} from "@/template-sources/corporate_profile_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: CorporateProfile6TemplateData = adaptClonedTemplateData(
    corporateProfile6DefaultData,
    incomingData
  );

  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqs?.[0]?.id || "faq-1"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] =
    useState<CorporateProfile6Property | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0908 313 728";
  const primaryEmail = data.business.email?.[0] || "info@monaland.vn";

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSent(true);
    setTimeout(() => {
      setNewsletterSent(false);
      setNewsletterEmail("");
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#18181b] font-sans selection:bg-[#b89355] selection:text-white">
      {/* 1. CLEAN WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Left Gold Roof Logo + Brand */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="flex flex-col items-center">
                <svg
                  viewBox="0 0 64 28"
                  className="w-12 h-6 stroke-[#b89355] fill-none"
                  strokeWidth="2.2"
                >
                  <path d="M4 24 L22 8 L36 18 L46 10 L60 24" />
                  <path d="M16 24 V16 H26 V24" />
                </svg>
                <span className="text-xs font-black tracking-[0.22em] text-[#18181b] uppercase">
                  {data.business.name}
                </span>
              </div>
            )}
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-medium text-stone-700">
            <a href="#" className="text-[#b89355] font-semibold">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#b89355] transition">
              Giới thiệu
            </a>
            <a href="#bat-dong-san" className="hover:text-[#b89355] transition">
              Bất động sản
            </a>
            <a href="#dich-vu" className="hover:text-[#b89355] transition">
              Dịch vụ
            </a>
            <a href="#faq" className="hover:text-[#b89355] transition">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-[#b89355] transition">
              Liên hệ
            </a>
          </nav>

          {/* Right Phone Call Pill */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#b89355] transition"
            >
              <span className="w-9 h-9 rounded-full bg-[#b89355] text-white flex items-center justify-center shadow-sm">
                <Phone className="w-4 h-4" />
              </span>
              <span>{primaryPhone}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-stone-200 text-stone-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 px-5 py-4 space-y-2.5 text-sm font-medium">
            {[
              { label: "Trang chủ", href: "#" },
              { label: "Giới thiệu", href: "#gioi-thieu" },
              { label: "Bất động sản", href: "#bat-dong-san" },
              { label: "Dịch vụ", href: "#dich-vu" },
              { label: "Câu hỏi thường gặp", href: "#faq" },
              { label: "Liên hệ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-stone-700 hover:text-[#b89355]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. EDITORIAL BENTO HERO ("BẤT ĐỘNG SẢN MONA NGÔI NHÀ MƠ ƯỚC CỦA BẠN") */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Circular Badge + Large Editorial Title */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 mb-10">
            {/* Circular Stamp Badge */}
            <div className="relative w-24 h-24 rounded-full border border-stone-300 bg-white flex items-center justify-center shrink-0 shadow-sm">
              <div className="absolute inset-1.5 rounded-full border border-dashed border-[#b89355]/50 flex items-center justify-center">
                <Play className="w-4 h-4 text-[#b89355] fill-current ml-0.5" />
              </div>
              <span className="sr-only">Khám phá ngôi nhà mơ ước</span>
              <span className="absolute -bottom-2 bg-[#b89355] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                DREAM HOME
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-normal uppercase tracking-wide text-[#18181b] leading-[1.18]">
              {data.hero.title}
            </h1>
          </div>

          {/* Bottom Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left 8 Cols: Main Twilight Villa Image */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-md min-h-[360px] lg:min-h-[440px]">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right 4 Cols: Top 2 Mini Cards + Bottom Bronze Card */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4 flex-1">
                {/* 36K+ Card */}
                <div className="bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm border border-stone-200/60">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#b89355] block">
                      36K+
                    </span>
                    <span className="text-xs text-stone-500 mt-1 block">
                      Đánh giá tích cực
                    </span>
                  </div>
                  <div className="flex -space-x-2 overflow-hidden pt-4">
                    {[
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    ].map((av, i) => (
                      <img
                        key={i}
                        src={av}
                        alt="Khách hàng"
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      />
                    ))}
                  </div>
                </div>

                {/* High-rise Tower Mini Photo */}
                <div className="rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                    alt="Tòa nhà"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Bronze Card (#b89355) */}
              <div className="bg-[#b89355] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md">
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 mb-6">
                  {data.hero.subtitle}
                </p>
                <a
                  href={data.hero.ctaLink || "#bat-dong-san"}
                  className="flex items-center justify-between text-xs font-bold uppercase tracking-widest group"
                >
                  <span>{data.hero.ctaText || "KHÁM PHÁ"}</span>
                  <span className="flex-1 mx-3 h-px bg-white/40" />
                  <span className="w-8 h-8 rounded border border-white/60 flex items-center justify-center group-hover:bg-white group-hover:text-[#b89355] transition">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3 SERVICE CARDS ("DỊCH VỤ BẤT ĐỘNG SẢN CHẤT LƯỢNG CAO") */}
      <section id="dich-vu" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b89355] block mb-2">
              DỊCH VỤ CỦA CHÚNG TÔI
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal uppercase tracking-wide text-[#18181b]">
              DỊCH VỤ BẤT ĐỘNG SẢN CHẤT LƯỢNG CAO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.services || []).slice(0, 3).map((srv, idx) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md border border-stone-200/60 transition"
              >
                <div className="w-14 h-14 rounded-full bg-[#f7f5f0] text-[#b89355] flex items-center justify-center mx-auto mb-5">
                  {idx === 0 && <Coins className="w-7 h-7 stroke-[1.5]" />}
                  {idx === 1 && <Home className="w-7 h-7 stroke-[1.5]" />}
                  {idx >= 2 && <Building2 className="w-7 h-7 stroke-[1.5]" />}
                </div>
                <h3 className="text-base font-bold text-[#18181b] mb-3">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SPLIT SECTION ("ĐÁP ỨNG MỌI NHU CẦU MUA, BÁN, HOẶC THUÊ NHÀ") */}
      <section id="gioi-thieu" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Giới thiệu MonaLand"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b89355] block mb-2">
                GIỚI THIỆU
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal uppercase tracking-wide text-[#18181b] leading-snug mb-4">
                {data.business.aboutTitle ||
                  "ĐÁP ỨNG MỌI NHU CẦU MUA, BÁN, HOẶC THUÊ NHÀ"}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                {data.business.aboutText?.[0]}
              </p>

              <div className="space-y-3 mb-7">
                {(data.business.highlights || []).map((hl, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#18181b]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#b89355] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <a
                href="#bat-dong-san"
                className="inline-block border border-[#b89355] text-[#18181b] hover:bg-[#b89355] hover:text-white text-xs font-bold uppercase tracking-wider px-7 py-3 rounded transition"
              >
                TÌM HIỂU NGAY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH ARCHITECTURAL VIDEO BANNER + BRAND MARQUEE STRIP */}
      <section className="pt-8 pb-12">
        <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85"
            alt="Video dự án"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <a
              href="#bat-dong-san"
              aria-label="Xem video dự án"
              className="w-20 h-20 rounded-full bg-[#b89355]/90 hover:bg-[#b89355] text-white flex items-center justify-center shadow-2xl transition transform hover:scale-105"
            >
              <Play className="w-7 h-7 fill-current ml-1" />
            </a>
          </div>
        </div>

        {/* Typographic Marquee Strip like DN009-corporate_profile_6.png */}
        <div className="py-10 border-b border-stone-200/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            <div className="flex items-center gap-3">
              <Home className="w-8 h-8 text-[#b89355]" />
              <span className="text-2xl sm:text-4xl font-bold text-[#18181b]">
                {data.business.name}
              </span>
            </div>
            <span
              className="text-2xl sm:text-4xl font-bold text-transparent"
              style={{ WebkitTextStroke: "1px #a8a29e" }}
            >
              Luxury Real Estate
            </span>
            <div className="flex items-center gap-3">
              <Home className="w-8 h-8 text-[#b89355]" />
              <span className="text-2xl sm:text-4xl font-bold text-[#18181b]">
                {data.business.name}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 3 FEATURED LUXURY VILLA CARDS ("BẤT ĐỘNG SẢN DÀNH CHO BẠN") */}
      <section id="bat-dong-san" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b89355] block mb-2">
              LUXURY VILLAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal uppercase tracking-wide text-[#18181b]">
              BẤT ĐỘNG SẢN DÀNH CHO BẠN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.featuredProperties || []).map((prop) => (
              <div
                key={prop.id}
                onClick={() => setSelectedProperty(prop)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/70 transition cursor-pointer group flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 text-[#18181b] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {prop.badge}
                  </span>
                </div>

                {/* Overlapping White Info Card */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-[#18181b] group-hover:text-[#b89355] transition leading-snug">
                        {prop.title}
                      </h3>
                      <span className="bg-[#f7f5f0] text-[#18181b] text-xs font-extrabold px-2.5 py-1 rounded shrink-0">
                        {prop.price}
                      </span>
                    </div>

                    <p className="text-xs text-stone-500 flex items-center gap-1 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#b89355]" />
                      <span>{prop.location}</span>
                    </p>

                    <div className="flex items-center gap-4 text-xs text-stone-600 pb-4 border-b border-stone-100">
                      <span className="inline-flex items-center gap-1">
                        <BedDouble className="w-3.5 h-3.5 text-[#b89355]" />
                        {prop.bedrooms}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5 text-[#b89355]" />
                        {prop.bathrooms}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[#b89355]" />
                        {prop.area}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs text-stone-500">
                    <span className="font-medium">{prop.transactionType}</span>
                    <button
                      type="button"
                      onClick={(e) => toggleLike(prop.id, e)}
                      aria-label="Yêu thích"
                      className="text-[#b89355] hover:scale-110 transition cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          likedIds[prop.id] ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INLINE NEWSLETTER CARD ("Đăng ký nhận tin") */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-stone-200/70 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h3 className="text-xl font-bold text-[#18181b] mb-2">
                Đăng ký nhận tin
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Đăng ký nhận bản tin mới nhất từ {data.business.name}, bạn sẽ luôn được cập nhật những thông tin nóng hổi về thị trường Bất động sản và các dự án tiềm năng.
              </p>
            </div>

            <div className="lg:col-span-7">
              {newsletterSent ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-3.5 rounded-lg">
                  Cảm ơn bạn đã đăng ký nhận bảng giá & thông tin dự án mới nhất!
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Nhập email của bạn..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#f7f5f0] border border-stone-200 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-[#b89355]"
                  />
                  <button
                    type="submit"
                    className="bg-[#b89355] hover:bg-[#a37f43] text-white text-xs font-bold uppercase tracking-wider px-7 py-3 rounded-lg shrink-0 transition cursor-pointer"
                  >
                    GỬI NGAY
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SPLIT SECTION ("CÁC CÂU HỎI VÀ TRẢ LỜI THƯỜNG GẶP") */}
      <section id="faq" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
                  alt="Câu hỏi thường gặp"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b89355] block mb-2">
                FAQ MESSAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal uppercase tracking-wide text-[#18181b] mb-7">
                CÁC CÂU HỎI VÀ TRẢ LỜI THƯỜNG GẶP
              </h2>

              <div className="space-y-3.5">
                {(data.faqs || []).map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-white rounded-xl border border-stone-200/80 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaqId(isOpen ? "" : faq.id)
                        }
                        className="w-full p-5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-[#18181b] cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#b89355] shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-xs text-stone-500 leading-relaxed border-t border-stone-100 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 4 GOLD STATS + 4-PHOTO ARCHITECTURAL COLLAGE */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 Gold Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {(data.stats || []).map((st) => (
              <div
                key={st.id}
                className="pb-4 border-b border-stone-300"
              >
                <span className="block text-3xl sm:text-4xl font-semibold text-[#b89355] mb-1">
                  {st.number}
                </span>
                <span className="text-xs text-stone-500">{st.title}</span>
              </div>
            ))}
          </div>

          {/* 3-Column Photo Collage (Left Tall, Middle 2 Stacked, Right Tall) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-4 rounded-2xl overflow-hidden h-80 md:h-[420px]">
              <img
                src={
                  data.galleryImages?.[0] ||
                  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80"
                }
                alt="Kiến trúc 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-4 flex flex-col gap-5 h-80 md:h-[420px]">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img
                  src={
                    data.galleryImages?.[1] ||
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                  }
                  alt="Kiến trúc 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden flex-1">
                <img
                  src={
                    data.galleryImages?.[2] ||
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                  }
                  alt="Kiến trúc 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-4 rounded-2xl overflow-hidden h-80 md:h-[420px]">
              <img
                src={
                  data.galleryImages?.[3] ||
                  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80"
                }
                alt="Kiến trúc 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS ("ĐÁNH GIÁ TỪ KHÁCH HÀNG") */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b89355] block mb-2">
                LỜI CHỨNG THỰC CỦA KHÁCH HÀNG
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal uppercase tracking-wide text-[#18181b]">
                ĐÁNH GIÁ TỪ KHÁCH HÀNG
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500">
                <ArrowLeft className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.testimonials || []).map((item) => (
              <div key={item.id} className="space-y-3">
                <img
                  src={
                    item.avatar ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  }
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#18181b]">
                      {item.author}
                    </h4>
                    <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                      {Array.from({ length: item.rating || 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span
                    className="text-4xl font-black text-transparent select-none"
                    style={{ WebkitTextStroke: "1px #d6d3d1" }}
                  >
                    99
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. DARK CHARCOAL FOOTER (#141414) */}
      <footer id="lien-he" className="bg-[#141414] text-stone-400 pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex flex-col items-start">
                <svg
                  viewBox="0 0 64 28"
                  className="w-12 h-6 stroke-[#b89355] fill-none"
                  strokeWidth="2.2"
                >
                  <path d="M4 24 L22 8 L36 18 L46 10 L60 24" />
                </svg>
                <span className="text-sm font-black tracking-[0.22em] text-white uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Nếu bạn có bất kỳ câu hỏi, đề xuất hoặc yêu cầu thẩm định bất động sản nào, xin vui lòng liên hệ với chúng tôi.
              </p>
              <div className="space-y-2 text-xs">
                <p className="flex items-center gap-2 text-stone-300">
                  <Mail className="w-3.5 h-3.5 text-[#b89355]" />
                  <span>{primaryEmail}</span>
                </p>
                <p className="flex items-center gap-2 text-stone-300">
                  <Phone className="w-3.5 h-3.5 text-[#b89355]" />
                  <span>{primaryPhone}</span>
                </p>
                <p className="flex items-start gap-2 text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-[#b89355] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </p>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Quy định
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#faq" className="hover:text-[#b89355]">
                    Quy định đăng tin
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#b89355]">
                    Quy chế hoạt động
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#b89355]">
                    Điều khoản thỏa thuận
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#b89355]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#b89355]">
                    Giải quyết khiếu nại
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Danh mục
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#b89355]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#bat-dong-san" className="hover:text-[#b89355]">
                    Bất động sản
                  </a>
                </li>
                <li>
                  <a href="#bat-dong-san" className="hover:text-[#b89355]">
                    Dự án
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#b89355]">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#b89355]">
                    Tin tức
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                BĐS phổ biến
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#bat-dong-san" className="hover:text-[#b89355]">
                    › Bạch Hạc Lakeview Residences
                  </a>
                </li>
                <li>
                  <a href="#bat-dong-san" className="hover:text-[#b89355]">
                    › Hương Sen Manor
                  </a>
                </li>
                <li>
                  <a href="#bat-dong-san" className="hover:text-[#b89355]">
                    › Thiên Thanh Hillside Retreat
                  </a>
                </li>
                <li>
                  <a href="#bat-dong-san" className="hover:text-[#b89355]">
                    › Vạn Lộc Horizon Towers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2">
            <p>© {new Date().getFullYear()} {data.business.name}. Bảo lưu mọi quyền.</p>
            <div className="flex gap-4">
              <span>Điều khoản & Điều kiện</span>
              <span>Bảo mật</span>
              <span>Sơ đồ trang</span>
            </div>
          </div>
        </div>
      </footer>

      {/* PROPERTY DETAIL MODAL */}
      {selectedProperty && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-4 left-4 bg-[#b89355] text-white text-xs font-extrabold px-3 py-1 rounded">
                Giá niêm yết: {selectedProperty.price}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#18181b] mb-1">
                {selectedProperty.title}
              </h3>
              <p className="text-xs text-stone-500 mb-3">
                {selectedProperty.location} • {selectedProperty.bedrooms} Phòng ngủ •{" "}
                {selectedProperty.bathrooms} Phòng tắm • {selectedProperty.area}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                {selectedProperty.description}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProperty(null)}
                  className="px-4 py-2 rounded border border-stone-200 text-xs font-bold"
                >
                  Đóng
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="px-5 py-2 rounded bg-[#b89355] text-white text-xs font-bold uppercase"
                >
                  Gọi đặt lịch xem nhà
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
