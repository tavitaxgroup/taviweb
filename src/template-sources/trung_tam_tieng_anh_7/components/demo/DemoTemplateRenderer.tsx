"use client";

import React, { useState } from "react";
import {
  Search,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle2,
  ClipboardCheck,
  ChevronDown,
  Send,
  GraduationCap,
  Menu,
  X,
  Bookmark
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh7DefaultData,
  type TrungTamTiengAnh7Data
} from "@/template-sources/trung_tam_tieng_anh_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-[#28963c]">
        {title}
      </h2>
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="w-16 h-px bg-[#eab308]/60" />
        <Bookmark className="w-4 h-4 text-[#eab308] fill-[#eab308]" />
        <span className="w-16 h-px bg-[#eab308]/60" />
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh7Data = adaptClonedTemplateData(
    trungTamTiengAnh7DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoFormDone, setPromoFormDone] = useState(false);
  const [footerDone, setFooterDone] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(
    "Khóa Song Ngữ Anh - Nhật (-50%)"
  );

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "tuvan@vietnhatedu.vn";
  const programs =
    data.trainingPrograms || trungTamTiengAnh7DefaultData.trainingPrograms;
  const promo =
    data.bilingualPromo || trungTamTiengAnh7DefaultData.bilingualPromo;
  const scholarships =
    data.scholarships || trungTamTiengAnh7DefaultData.scholarships;
  const whyChoose =
    data.whyChooseItems || trungTamTiengAnh7DefaultData.whyChooseItems;
  const langSchools =
    data.languageSchools || trungTamTiengAnh7DefaultData.languageSchools;
  const newsList = data.news || trungTamTiengAnh7DefaultData.news || [];
  const reviewItem =
    (data.testimonials || trungTamTiengAnh7DefaultData.testimonials || [])[0];
  const heroCircles =
    data.heroCircles || trungTamTiengAnh7DefaultData.heroCircles;

  const scrollToForm = (topic?: string) => {
    if (topic) setSelectedCourse(topic);
    setPromoFormDone(false);
    const el = document.getElementById("dang-ky-khuyen-mai");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#28963c] selection:text-white">
      {/* 1. TOP WHITE UTILITY BAR + EMERALD GREEN NAV BAR */}
      <header className="sticky top-0 z-40 bg-white shadow-xs">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#trang-chu" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full border-2 border-[#28963c] bg-[#f0fdf4] flex items-center justify-center text-[#28963c]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-extrabold uppercase tracking-wide text-[#28963c] leading-none">
                {data.business.name}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#eab308] mt-0.5">
                {data.hero.eyebrow || "CHUYÊN DU HỌC NHẬT BẢN"}
              </span>
            </div>
          </a>

          {/* Search Pill */}
          <div className="hidden md:flex items-center bg-stone-100 rounded-full px-4 py-1.5 w-64 border border-stone-200">
            <input
              type="text"
              placeholder="Tìm kiếm chương trình..."
              className="bg-transparent text-xs w-full focus:outline-none text-stone-700"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          </div>

          {/* Right CTA Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scrollToForm()}
              className="hidden sm:inline-block border border-stone-300 hover:border-[#28963c] text-stone-600 hover:text-[#28963c] text-[11px] font-bold uppercase px-3.5 py-2 rounded transition-colors cursor-pointer"
            >
              {data.hero.secondaryCtaText || "ĐĂNG KÝ TƯ VẤN"}
            </button>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="bg-[#d91e2a] hover:bg-[#b81620] text-white text-xs font-extrabold px-4 py-2 rounded transition-colors"
            >
              {primaryPhone}
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#28963c]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Emerald Green Navigation Bar (#28963c) */}
        <div className="bg-[#28963c] text-white">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="hidden lg:flex items-center justify-center gap-7 h-11 text-[11px] font-bold uppercase tracking-wider">
              <a href="#trang-chu" className="hover:text-[#f7d417] transition-colors">
                TRANG CHỦ
              </a>
              <a
                href="#tai-sao-chon"
                className="hover:text-[#f7d417] transition-colors"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#chuong-trinh-dao-tao"
                className="inline-flex items-center gap-1 hover:text-[#f7d417] transition-colors"
              >
                <span>CHƯƠNG TRÌNH DU HỌC</span>
                <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="#hoc-bong"
                className="inline-flex items-center gap-1 hover:text-[#f7d417] transition-colors"
              >
                <span>THÔNG TIN DU HỌC</span>
                <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="#truong-nhat-ngu"
                className="inline-flex items-center gap-1 hover:text-[#f7d417] transition-colors"
              >
                <span>TRƯỜNG HỌC NHẬT BẢN</span>
                <ChevronDown className="w-3 h-3" />
              </a>
              <a href="#tin-tuc" className="hover:text-[#f7d417] transition-colors">
                TIN TỨC
              </a>
              <a
                href="#dang-ky-khuyen-mai"
                className="hover:text-[#f7d417] transition-colors"
              >
                LIÊN HỆ
              </a>
            </nav>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1f7a30] text-white px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#chuong-trinh-dao-tao"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Chương trình đào tạo
            </a>
            <a
              href="#dang-ky-khuyen-mai"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Khóa song ngữ Anh - Nhật (-50%)
            </a>
            <a
              href="#hoc-bong"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Học bổng du học
            </a>
            <a
              href="#truong-nhat-ngu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Trường Nhật ngữ Tokyo
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER: DU HỌC NHẬT BẢN NHANH NHẤT + 3 YELLOW-RINGED JAPAN CIRCLES */}
      <section
        id="trang-chu"
        className="relative bg-white overflow-hidden border-b border-stone-200"
      >
        {/* Bottom Decorative Red & Orange Wave Swooshes */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#dc2626] opacity-90 [clip-path:polygon(0_45%,35%_85%,70%_40%,100%_15%,100%_100%,0_100%)]" />

        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Bold Impact Typography */}
            <div className="lg:col-span-6 space-y-3">
              <div className="leading-tight">
                <span className="text-2xl sm:text-3xl font-black text-[#1e1e1e] mr-2.5">
                  Du học
                </span>
                <span className="text-4xl sm:text-6xl font-black text-[#d91e2a] tracking-tight">
                  Nhật Bản
                </span>
                <span className="block text-3xl sm:text-5xl font-black text-[#d91e2a] mt-1">
                  nhanh nhất 2025
                </span>
              </div>

              <div className="pt-1">
                <span className="text-xl sm:text-2xl font-black text-[#1e1e1e] mr-2">
                  Bao
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#d91e2a]">
                  đỗ Visa 100%
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
                {data.hero.description}
              </p>

              {/* Red Pill Button with Checklist Circle Icon */}
              <div className="pt-3">
                <button
                  onClick={() => scrollToForm("Tư vấn Du học Nhật Bản trọn gói")}
                  className="inline-flex items-center bg-[#d91e2a] hover:bg-[#b81620] text-white rounded-full p-1.5 pr-7 shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  <span className="w-10 h-10 rounded-full bg-white/15 border border-white flex items-center justify-center mr-3">
                    <ClipboardCheck className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wide">
                    {data.hero.ctaText || "ĐĂNG KÝ NGAY"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right 3 Overlapping Yellow-Bordered Japan Landscape Circles */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[380px] flex items-center justify-center">
              {/* Main Large Circle: Chureito Pagoda & Cherry Blossoms */}
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-[6px] border-[#f59e0b] shadow-2xl relative z-20">
                <img
                  src={heroCircles[0]}
                  alt="Chùa Chureito và hoa anh đào Nhật Bản"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top-Right Circle: Mount Fuji */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#f59e0b] shadow-xl absolute top-0 right-2 sm:right-4 z-10">
                <img
                  src={heroCircles[1]}
                  alt="Núi Phú Sĩ Nhật Bản"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-Right Circle: Torii Gate */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#f59e0b] shadow-xl absolute bottom-2 right-6 sm:right-10 z-30">
                <img
                  src={heroCircles[2]}
                  alt="Cổng Torii Nhật Bản"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: CHƯƠNG TRÌNH ĐÀO TẠO (3x2 PHOTO GRID) */}
      <section id="chuong-trinh-dao-tao" className="py-14 lg:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading title="CHƯƠNG TRÌNH ĐÀO TẠO" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.id}
                onClick={() => scrollToForm(prog.title)}
                className="relative h-52 sm:h-56 overflow-hidden group cursor-pointer shadow-xs border border-stone-200"
              >
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-3 mx-3 bg-black/65 group-hover:bg-[#28963c]/90 backdrop-blur-xs text-white text-center py-2.5 px-3 transition-colors">
                  <h3 className="text-xs sm:text-sm font-bold">{prog.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: KHÓA ĐÀO TẠO SONG NGỮ ANH - NHẬT + 50% COUNTDOWN & FORM */}
      <section
        id="dang-ky-khuyen-mai"
        className="py-14 lg:py-20 bg-[#352c3d] text-white relative overflow-hidden"
      >
        {/* Decorative Sakura Blossom Branch SVG on Left */}
        <svg
          viewBox="0 0 400 400"
          className="w-96 h-96 absolute top-0 left-0 opacity-30 pointer-events-none"
          fill="none"
        >
          <path
            d="M0 320C90 250 180 150 320 20M120 220C180 210 240 190 290 150M70 265C95 290 135 310 175 315"
            stroke="#1a111e"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="220" cy="110" r="9" fill="#e11d48" />
          <circle cx="280" cy="60" r="7" fill="#f43f5e" />
          <circle cx="160" cy="175" r="8" fill="#e11d48" />
          <circle cx="250" cy="170" r="6" fill="#fb7185" />
          <circle cx="145" cy="295" r="8" fill="#e11d48" />
        </svg>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Khóa đào tạo song ngữ Anh - Nhật + 10 Lý do */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-center lg:text-left">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-200">
                  {promo.titleTop}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1">
                  {promo.titleMain}
                </h2>
              </div>

              <p className="text-xs text-stone-200 leading-relaxed">
                {promo.description}
              </p>

              {/* 2-Column 1-10 Yellow Badge List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-2 text-[11px]">
                {promo.tenReasons.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-xs bg-[#f7d417] text-[#1e1e1e] font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-stone-100 leading-snug">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 50% Countdown Boxes + Registration Form */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-xs sm:text-sm font-bold uppercase">
                  THỜI GIAN KHUYẾN MÃI
                </span>
                <span className="text-2xl sm:text-3xl font-black italic text-[#ef4444]">
                  {promo.discountHighlight}
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase">
                  HỌC PHÍ:
                </span>
              </div>

              {/* 5 Large Yellow Countdown Blocks */}
              <div className="grid grid-cols-5 gap-2.5">
                {promo.countdown.map((cd, i) => (
                  <div
                    key={i}
                    className="bg-[#f7d417] text-[#1e1e1e] py-3 px-2 rounded-xs text-center shadow-md"
                  >
                    <span className="block text-xl sm:text-2xl font-black leading-none">
                      {cd.value}
                    </span>
                    <span className="block text-[9px] font-extrabold uppercase mt-1">
                      {cd.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Registration Form */}
              {promoFormDone ? (
                <div className="bg-white text-[#1e1e1e] p-6 rounded text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#28963c] mx-auto" />
                  <h3 className="font-bold text-base">
                    Đăng ký nhận ưu đãi 50% học phí thành công!
                  </h3>
                  <p className="text-xs text-stone-600">
                    Cố vấn tuyển sinh <strong>{data.business.name}</strong> sẽ liên hệ xác nhận
                    suất học bổng cho khóa <strong>{selectedCourse}</strong>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setPromoFormDone(true);
                  }}
                  className="space-y-3 pt-1"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên"
                      className="w-full bg-white text-[#1e1e1e] text-xs px-3.5 py-2.5 focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      className="w-full bg-white text-[#1e1e1e] text-xs px-3.5 py-2.5 focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại"
                      className="w-full bg-white text-[#1e1e1e] text-xs px-3.5 py-2.5 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      className="w-full bg-white text-[#1e1e1e] text-xs px-3.5 py-2.5 focus:outline-none"
                    />
                  </div>
                  <textarea
                    rows={3}
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    placeholder="Lời nhắn"
                    className="w-full bg-white text-[#1e1e1e] text-xs px-3.5 py-2.5 focus:outline-none"
                  />
                  <div className="text-center pt-1">
                    <button
                      type="submit"
                      className="bg-[#28963c] hover:bg-[#1f7a30] text-white text-xs font-extrabold uppercase tracking-wider px-12 py-2.5 rounded-xs shadow-md transition-colors cursor-pointer"
                    >
                      GỬI
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: HỌC BỔNG DU HỌC (4 CARDS) */}
      <section id="hoc-bong" className="py-14 lg:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading title="HỌC BỔNG DU HỌC" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {scholarships.map((sch) => (
              <div
                key={sch.id}
                onClick={() => scrollToForm(sch.title)}
                className="group cursor-pointer text-center"
              >
                <div className="h-36 overflow-hidden border border-stone-200 mb-3 relative">
                  <img
                    src={sch.image}
                    alt={sch.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#d91e2a] text-white text-[10px] font-bold px-2 py-0.5 rounded-xs">
                    {sch.value}
                  </span>
                </div>
                <h3 className="text-[11px] font-extrabold uppercase text-[#1e1e1e] group-hover:text-[#28963c] transition-colors leading-snug px-1">
                  {sch.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: TẠI SAO NÊN CHỌN VIỆT NHẬT EDU */}
      <section id="tai-sao-chon" className="py-14 lg:py-18 bg-[#f5f6f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title={`TẠI SAO NÊN CHỌN ${data.business.name.toUpperCase()}`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 2 Star Items */}
            <div className="lg:col-span-4 space-y-7">
              {whyChoose.leftItems.map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-xs font-extrabold uppercase text-[#28963c] flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-[#eab308] text-[#eab308]" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Pointing Advisor Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-60 h-72 sm:w-64 sm:h-80 overflow-hidden rounded-t-full border-4 border-white shadow-md bg-white">
                <img
                  src={whyChoose.centerAdvisorImage}
                  alt="Tư vấn viên du học Nhật Bản"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right 2 Star Items */}
            <div className="lg:col-span-4 space-y-7">
              {whyChoose.rightItems.map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-xs font-extrabold uppercase text-[#28963c] flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-[#eab308] text-[#eab308]" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: TRƯỜNG NHẬT NGỮ */}
      <section id="truong-nhat-ngu" className="py-14 lg:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading title="TRƯỜNG NHẬT NGỮ" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Student Holding Sign Banner */}
            <div
              onClick={() => scrollToForm(langSchools.bannerCaption)}
              className="lg:col-span-6 relative min-h-[260px] bg-[#f3f4f6] overflow-hidden border border-stone-200 group cursor-pointer flex flex-col justify-end"
            >
              <img
                src={langSchools.bannerImage}
                alt={langSchools.bannerCaption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10 bg-white/95 mx-5 mb-5 p-4 text-center shadow-md border border-stone-200">
                <span className="text-lg sm:text-xl font-black uppercase text-[#1e1e1e]">
                  {langSchools.bannerCaption}
                </span>
              </div>
            </div>

            {/* Right 2 Tokyo Japanese Language Schools */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              {langSchools.schools.map((sch) => (
                <div
                  key={sch.id}
                  onClick={() => scrollToForm(sch.name)}
                  className="grid grid-cols-12 gap-4 items-center pb-4 border-b border-stone-100 group cursor-pointer"
                >
                  <div className="col-span-5 h-28 overflow-hidden border border-stone-200">
                    <img
                      src={sch.image}
                      alt={sch.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-7 space-y-1.5">
                    <h3 className="text-xs font-extrabold uppercase text-[#1e1e1e] group-hover:text-[#28963c] transition-colors">
                      {sch.name}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                      {sch.summary}
                    </p>
                  </div>
                </div>
              ))}

              <div className="text-right">
                <button
                  onClick={() => scrollToForm("Danh sách 120 trường Nhật ngữ Tokyo")}
                  className="text-xs font-bold text-[#28963c] hover:underline cursor-pointer"
                >
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: GÓC CHIA SẺ (LUSH GREEN BANNER WITH BOOKS & GLOBE) */}
      <section className="py-14 bg-gradient-to-r from-[#4b8316] via-[#5c9e1f] to-[#4f8c19] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Books & Globe Stack */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 rounded-xl overflow-hidden shadow-lg border-2 border-white/30">
                <img
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80"
                  alt="Hành trang du học"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Student Testimonial */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-lg font-extrabold uppercase tracking-wide text-center lg:text-left">
                GÓC CHIA SẺ
              </h2>

              {reviewItem && (
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <img
                    src={reviewItem.avatar}
                    alt={reviewItem.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shrink-0"
                  />
                  <div className="space-y-2 text-center sm:text-left">
                    <p className="italic text-xs text-white/95 leading-relaxed">
                      “{reviewItem.content}”
                    </p>
                    <p className="font-bold text-xs text-[#f7d417]">
                      {reviewItem.author}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION: TIN TỨC DU HỌC (4 CARDS) */}
      <section id="tin-tuc" className="py-14 lg:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading title="TIN TỨC DU HỌC" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {newsList.map((post) => (
              <article
                key={post.id}
                onClick={() => scrollToForm(post.title)}
                className="bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-shadow group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-xs font-extrabold text-[#1e1e1e] group-hover:text-[#28963c] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. EMERALD GREEN STARRY FOOTER (#28963c) */}
      <footer className="bg-[#28963c] text-white pt-12 text-xs relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Văn phòng chính */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm uppercase">VĂN PHÒNG CHÍNH</h4>
              <ul className="space-y-2 text-white/90 text-[11px]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: Thông tin du học */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm uppercase">THÔNG TIN DU HỌC</h4>
              <ul className="space-y-2 text-white/90 text-[11px]">
                <li>
                  <a href="#hoc-bong" className="hover:text-[#f7d417]">
                    Cẩm nang du học Nhật Bản
                  </a>
                </li>
                <li>
                  <a href="#truong-nhat-ngu" className="hover:text-[#f7d417]">
                    Thông tin trường Nhật ngữ Tokyo
                  </a>
                </li>
                <li>
                  <a href="#dang-ky-khuyen-mai" className="hover:text-[#f7d417]">
                    Thủ tục xin COE & Visa 100%
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#f7d417]">
                    Văn hóa & việc làm thêm Nhật Bản
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Tin mới nhất */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm uppercase">TIN MỚI NHẤT</h4>
              <ul className="space-y-2 text-white/90 text-[11px]">
                {newsList.slice(0, 3).map((n) => (
                  <li key={n.id}>
                    <a
                      href="#tin-tuc"
                      className="hover:text-[#f7d417] line-clamp-2"
                    >
                      {n.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Đăng ký */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm uppercase">ĐĂNG KÝ</h4>
              <p className="text-[11px] text-white/90 leading-relaxed">
                Đăng ký để nhận được thông tin học bổng mới nhất từ chúng tôi.
              </p>
              {footerDone ? (
                <p className="text-[#f7d417] font-bold text-xs">
                  ✓ Đã đăng ký nhận thông tin học bổng!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFooterDone(true);
                  }}
                  className="flex items-center bg-white rounded-xs overflow-hidden"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="w-full px-3 py-2 text-xs text-[#1e1e1e] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 text-[#f59e0b] hover:text-[#d91e2a] cursor-pointer"
                    aria-label="Gửi"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#1b1b1b] text-stone-400 text-center py-3 text-[11px]">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>
        </div>
      </footer>
    </div>
  );
}
