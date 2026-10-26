"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Search,
  ChevronDown,
  ShieldCheck,
  Calculator,
  Headphones,
  Dna,
  Scale,
  Users,
  HeartHandshake,
  Droplets,
  Microscope,
  Phone,
  Mail,
  Send,
  Heart,
  Check,
  Menu,
  X,
  MessageCircle
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongKham3DefaultData,
  type PhongKham3Data,
  type PhongKham3ServiceCard,
  type PhongKham3ValueProp
} from "@/template-sources/phong_kham_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function MonaHealthCareLogo({
  brandName,
  size = "md"
}: {
  brandName: string;
  size?: "md" | "lg";
}) {
  return (
    <div className="flex flex-col items-center select-none">
      <div
        className={`rounded-full border-2 border-[#1e73be] bg-sky-50 flex items-center justify-center text-[#1e73be] shadow-xs ${
          size === "lg" ? "w-14 h-14" : "w-10 h-10"
        }`}
      >
        <Heart className={size === "lg" ? "w-7 h-7 fill-[#1e73be]" : "w-5 h-5 fill-[#1e73be]"} />
      </div>
      <span
        className={`font-extrabold text-[#1e73be] tracking-tight mt-1 ${
          size === "lg" ? "text-sm" : "text-[11px]"
        }`}
      >
        {brandName}
      </span>
    </div>
  );
}

function ValuePropIcon({ type }: { type: PhongKham3ValueProp["iconType"] }) {
  switch (type) {
    case "accuracy":
      return (
        <div className="w-11 h-11 rounded-xl bg-fuchsia-50 border border-fuchsia-200 flex items-center justify-center text-fuchsia-600 shrink-0">
          <Dna className="w-6 h-6" />
        </div>
      );
    case "security":
      return (
        <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
      );
    case "cost":
      return (
        <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
          <Calculator className="w-6 h-6" />
        </div>
      );
    default:
      return (
        <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
          <Headphones className="w-6 h-6" />
        </div>
      );
  }
}

function DnaServiceIcon({ type }: { type: PhongKham3ServiceCard["iconType"] }) {
  switch (type) {
    case "dna":
      return <Dna className="w-7 h-7 text-white" />;
    case "legal":
      return <Scale className="w-7 h-7 text-white" />;
    case "grandpa":
      return <Users className="w-7 h-7 text-white" />;
    case "grandma":
      return <HeartHandshake className="w-7 h-7 text-white" />;
    case "sibling":
      return <Microscope className="w-7 h-7 text-white" />;
    default:
      return <Droplets className="w-7 h-7 text-white" />;
  }
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongKham3Data = adaptClonedTemplateData(
    phongKham3DefaultData,
    incomingData
  );

  const schedule = data.workingSchedule || phongKham3DefaultData.workingSchedule;
  const valueProps = data.valueProps || phongKham3DefaultData.valueProps;
  const faqs = data.faqs || phongKham3DefaultData.faqs;
  const dnaServices = data.dnaServices || phongKham3DefaultData.dnaServices;
  const labGallery = data.labGallery || phongKham3DefaultData.labGallery;
  const stats = data.stats || phongKham3DefaultData.stats || [];
  const team = data.team || phongKham3DefaultData.team || [];
  const pillars = data.expertPillars || phongKham3DefaultData.expertPillars;
  const newsList = data.news || phongKham3DefaultData.news || [];

  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || "faq-1");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarFormSent, setSidebarFormSent] = useState(false);
  const [mainBookingSent, setMainBookingSent] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const primaryPhone = data.business.phone?.[0] || "0313728397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#1e73be] selection:text-white">
      {/* =====================================================================
          1. TOP WHITE UTILITY BAR + SOLID BLUE NAVIGATION BAR (#1e73be)
         ===================================================================== */}
      <header className="w-full bg-white shadow-xs sticky top-0 z-40">
        {/* White Utility Top Row */}
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <a href="#trang-chu" className="flex items-center gap-2">
            <MonaHealthCareLogo brandName={data.business.name} />
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1e73be]/10 text-[#1e73be] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-700 leading-snug max-w-[230px]">
                  {data.business.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1e73be]/10 text-[#1e73be] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500">Ngày Làm Việc</p>
                <p className="font-semibold text-slate-700">
                  {data.business.workingHours || "Mon-Sat: 8.00-18.00"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#gioi-thieu"
              className="bg-[#d9232e] hover:bg-[#b91c26] text-white text-xs font-bold uppercase px-5 py-2.5 rounded-full shadow-xs transition"
            >
              VỀ CHÚNG TÔI
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-[#1e73be]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Solid Medical Blue Navigation Bar (#1e73be) */}
        <div className="bg-[#1e73be] text-white">
          <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
            <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wide">
              <a href="#trang-chu" className="hover:text-sky-200 transition">
                TRANG CHỦ
              </a>
              <a
                href="#gioi-thieu"
                className="hover:text-sky-200 flex items-center gap-1 transition"
              >
                GIỚI THIỆU <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a
                href="#dich-vu"
                className="hover:text-sky-200 flex items-center gap-1 transition"
              >
                DỊCH VỤ <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a
                href="#phong-xet-nghiem"
                className="hover:text-sky-200 flex items-center gap-1 transition"
              >
                HƯỚNG DẪN <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a href="#dich-vu" className="hover:text-sky-200 transition">
                BẢNG GIÁ
              </a>
              <a href="#tin-tuc" className="hover:text-sky-200 transition">
                TIN TỨC
              </a>
              <a href="#dat-hen" className="hover:text-sky-200 transition">
                LIÊN HỆ
              </a>
            </nav>

            {/* Right Search Pill */}
            <div className="ml-auto flex items-center bg-white/20 rounded-full px-3.5 py-1 w-48 sm:w-56">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Tìm kiếm..."
                className="bg-transparent text-xs text-white placeholder:text-white/75 w-full focus:outline-none"
              />
              <Search className="w-3.5 h-3.5 text-white/85 shrink-0" />
            </div>
          </div>

          {/* Mobile Dropdown Nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#185d9b] px-4 py-4 space-y-2.5 text-xs font-bold uppercase border-t border-white/15">
              <a
                href="#gioi-thieu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                Giới thiệu Trung tâm
              </a>
              <a
                href="#dich-vu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                Dịch vụ Xét nghiệm ADN
              </a>
              <a
                href="#phong-xet-nghiem"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                Phòng Xét Nghiệm
              </a>
              <a
                href="#chuyen-gia"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                Đội ngũ Chuyên gia
              </a>
              <a
                href="#tin-tuc"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                Tin tức Y khoa
              </a>
              <a
                href="#dat-hen"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-amber-300"
              >
                Đặt Hẹn Thu Mẫu Tại Nhà
              </a>
            </div>
          )}
        </div>
      </header>

      {/* =====================================================================
          2. MEDICAL HERO BANNER (Doctor Left + Floating White Card Right)
         ===================================================================== */}
      <section
        id="trang-chu"
        className="relative bg-[#f2f4f7] overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center"
      >
        {/* Background Clinical Portrait */}
        <div className="max-w-6xl mx-auto w-full px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Doctor Portrait (5 cols) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-full max-w-sm rounded-2xl overflow-hidden shadow-md bg-white">
              <img
                src={data.hero.backgroundImage}
                alt={data.business.name}
                className="w-full h-[340px] sm:h-[390px] object-cover object-top"
              />
            </div>
          </div>

          {/* Right Floating White Card (7 cols - Matches PK006 Hero Card) */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-xl p-7 sm:p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {data.hero.eyebrow || "CHÀO MỪNG BẠN ĐẾN VỚI"}
                </span>
                <span className="flex-1 h-px bg-slate-200 max-w-[160px]" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#1e73be] tracking-tight mb-4">
                {data.hero.title}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <strong className="text-slate-800">
                  Đơn vị xét nghiệm trực thuộc công ty TNHH {data.business.name}
                </strong>
                , {data.hero.subtitle.replace(/^Đơn vị xét nghiệm[^,]*,\s*/i, "")}
              </p>

              <a
                href={data.hero.ctaLink || "#gioi-thieu"}
                className="inline-block bg-[#d9232e] hover:bg-[#b91c26] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-xs transition"
              >
                {data.hero.ctaText || "Về chúng tôi"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. AN TÂM XÉT NGHIỆM + FAQ + BLUE SIDEBAR "THỜI GIAN LÀM VIỆC"
         ===================================================================== */}
      <section id="gioi-thieu" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Intro + 2x2 Value Props + Interactive FAQ (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase text-slate-700 inline-block border-b-2 border-[#d9232e] pb-1 mb-2">
                AN TÂM XÉT NGHIỆM
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-800">
                TẠI <span className="text-[#d9232e]">{data.business.name.toUpperCase()}</span>
              </h2>
            </div>

            <div className="text-xs sm:text-[13px] text-slate-600 leading-relaxed space-y-1.5">
              <p className="font-bold text-slate-800">
                “Tận tâm – Chính xác – Bảo mật” là phương châm hoạt động của chúng tôi.
              </p>
              <p>
                <span className="text-[#d9232e] font-bold">{data.business.name}</span> là
                trung tâm xét nghiệm huyết thống được xây dựng với cơ sở vật chất hiện
                đại, đội ngũ kỹ thuật viên nhiều năm kinh nghiệm cùng với quy trình xét
                nghiệm tiên tiến.
              </p>
            </div>

            {/* 2x2 Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {valueProps.map((vp) => (
                <div key={vp.id} className="flex items-start gap-3.5">
                  <ValuePropIcon type={vp.iconType} />
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">{vp.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {vp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CÁC CÂU HỎI THƯỜNG GẶP (Interactive Accordion with Red Circle Chevron) */}
            <div className="pt-4">
              <p className="text-xs font-extrabold uppercase text-slate-800 inline-block border-b-2 border-[#d9232e] pb-1 mb-4">
                CÁC CÂU HỎI THƯỜNG GẶP
              </p>

              <div className="space-y-2.5">
                {faqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-lg bg-slate-100/90 border border-slate-200/80 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="w-full px-4 py-3 flex items-center gap-3 text-left cursor-pointer hover:bg-slate-200/60 transition"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#d9232e] text-white flex items-center justify-center shrink-0">
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
                          {faq.question}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-3.5 pt-1 pl-12 text-xs text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Blue "THỜI GIAN LÀM VIỆC" Card (#2575c0) (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#2575c0] text-white rounded-xl p-6 sm:p-7 shadow-lg space-y-6">
              <h3 className="text-base sm:text-lg font-extrabold uppercase text-center tracking-wide">
                THỜI GIAN LÀM VIỆC
              </h3>

              {/* Schedule Rows */}
              <div className="space-y-3 text-xs">
                {schedule.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between pb-2.5 border-b border-dashed border-white/30"
                  >
                    <span className="font-semibold text-white/95">{row.label}</span>
                    <span className="font-bold">{row.hours}</span>
                  </div>
                ))}
              </div>

              {/* Boxed HOTLINE 24/7 */}
              <div className="relative border border-white/55 rounded-lg p-4 text-center">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#2575c0] px-3 text-[11px] font-bold uppercase tracking-wider">
                  HOTLINE 24/7
                </span>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="text-xl sm:text-2xl font-black tracking-wider text-white hover:text-amber-200 transition block"
                >
                  {primaryPhone}
                </a>
              </div>

              {/* Boxed Đặt Hẹn Thu Mẫu Tại Nhà Mini Form */}
              <div className="relative border border-white/55 rounded-lg p-5 pt-6">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#2575c0] px-3 text-xs font-bold whitespace-nowrap">
                  Đặt Hẹn Thu Mẫu Tại Nhà
                </span>

                {sidebarFormSent ? (
                  <div className="text-center py-6 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold">Đã tiếp nhận lịch hẹn thu mẫu!</p>
                    <p className="text-[11px] text-sky-100">
                      Chuyên viên y tế sẽ gọi xác nhận địa chỉ trong 15 phút.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSidebarFormSent(true);
                    }}
                    className="space-y-3 text-xs"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên*"
                      className="w-full bg-white text-slate-800 rounded-xs px-3 py-2 text-xs focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại*"
                      className="w-full bg-white text-slate-800 rounded-xs px-3 py-2 text-xs focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      className="w-full bg-white text-slate-800 rounded-xs px-3 py-2 text-xs focus:outline-none"
                    />
                    <div className="pt-1 text-center">
                      <button
                        type="submit"
                        className="bg-[#d9232e] hover:bg-[#b91c26] text-white font-bold uppercase text-xs px-8 py-2 rounded-xs shadow-sm transition cursor-pointer"
                      >
                        GỬI
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CÁC DỊCH VỤ CỦA CHÚNG TÔI (6 Cards with Floating Colorful Circles)
         ===================================================================== */}
      <section id="dich-vu" className="py-16 px-4 bg-[#fafbfd]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-800">
              CÁC <span className="text-[#d9232e]">DỊCH VỤ</span> CỦA CHÚNG TÔI
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Xét nghiệm ADN huyết thống là việc sử dụng mẫu vật để kiểm tra thông tin
              di truyền, giúp xác định nguồn gốc, họ hàng, hoặc chẩn đoán bệnh di truyền.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {dnaServices.map((srv) => (
              <div
                key={srv.id}
                className="relative bg-white rounded-xl pt-12 pb-7 px-6 text-center shadow-xs border border-slate-100 hover:shadow-md transition"
              >
                {/* Floating Colorful Circle Icon Top-Center */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-md mx-auto -mt-20 mb-4 border-4 border-white"
                  style={{ backgroundColor: srv.badgeColor }}
                >
                  <DnaServiceIcon type={srv.iconType} />
                </div>

                <h3 className="text-sm font-bold text-slate-800 mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  {srv.description}
                </p>
                <span className="inline-block text-[11px] font-bold text-[#1e73be] bg-sky-50 px-3 py-1 rounded-full">
                  Chi phí tham khảo: {srv.price}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#dat-hen"
              className="inline-block bg-[#d9232e] hover:bg-[#b91c26] text-white text-xs font-bold uppercase px-7 py-2.5 rounded-full shadow-sm transition"
            >
              XEM TẤT CẢ DỊCH VỤ
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PHÒNG XÉT NGHIỆM TẠI MONAHEALTHCARE (Bento Photo Collage)
         ===================================================================== */}
      <section id="phong-xet-nghiem" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-center text-slate-800 mb-10">
            PHÒNG XÉT NGHIỆM TẠI{" "}
            <span className="text-[#d9232e]">{data.business.name.toUpperCase()}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Column: Tall top photo + Wide bottom photo (6 cols) */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="h-64 sm:h-72 rounded-xl overflow-hidden shadow-xs">
                <img
                  src={labGallery[0]}
                  alt="Phòng xét nghiệm ADN 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-36 sm:h-40 rounded-xl overflow-hidden shadow-xs">
                <img
                  src={labGallery[1]}
                  alt="Phòng xét nghiệm ADN 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Wide top photo + 2 split bottom photos (6 cols) */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="h-52 sm:h-56 rounded-xl overflow-hidden shadow-xs">
                <img
                  src={labGallery[2]}
                  alt="Hệ thống giải trình tự gen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 flex-1">
                <div className="h-48 sm:h-56 rounded-xl overflow-hidden shadow-xs">
                  <img
                    src={labGallery[3]}
                    alt="Ống nghiệm phân tích ADN"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="h-48 sm:h-56 rounded-xl overflow-hidden shadow-xs">
                  <img
                    src={labGallery[4] || labGallery[0]}
                    alt="Chuyên viên phòng Lab"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. THÀNH TỰU ĐẠT ĐƯỢC (Blue Banner with Red Corner Brackets)
         ===================================================================== */}
      <section className="bg-[#2575c0] text-white py-14 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-lg sm:text-xl font-extrabold uppercase text-center tracking-wide mb-10">
            THÀNH TỰU ĐẠT ĐƯỢC
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.slice(0, 4).map((st) => (
              <div
                key={st.id}
                className="relative py-5 px-4 text-center bg-white/5 rounded-xs"
              >
                {/* Red Top-Left Corner Bracket */}
                <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#d9232e]" />
                {/* Red Bottom-Right Corner Bracket */}
                <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#d9232e]" />

                <p className="text-xl sm:text-2xl font-black text-white">
                  {st.number}
                </p>
                <p className="text-xs text-sky-100 mt-1">{st.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. CÁC CHUYÊN GIA CỦA CHÚNG TÔI (Left Doctors + Right 4 Core Values)
         ===================================================================== */}
      <section id="chuyen-gia" className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Doctor Cards Stack (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-lg sm:text-xl font-extrabold uppercase text-slate-800 mb-4">
                CÁC <span className="text-[#d9232e]">CHUYÊN GIA</span> CỦA CHÚNG TÔI
              </h2>

              <div className="space-y-3">
                {team.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center gap-4 bg-slate-100/90 hover:bg-sky-50/70 p-3 rounded-lg border border-slate-200/70 transition"
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-slate-500">{doc.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 4 Core Pillars + Doctor Portrait (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-8 space-y-5">
                {pillars.map((pil) => (
                  <div key={pil.id} className="flex items-start gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 shadow-xs"
                      style={{ backgroundColor: pil.badgeColor }}
                    >
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">
                        {pil.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                        {pil.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden sm:block sm:col-span-4">
                <img
                  src={data.doctorBackdropImage}
                  alt="Chuyên gia tư vấn di truyền"
                  className="w-full h-72 object-cover object-top rounded-xl shadow-xs"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="#dat-hen"
              className="inline-block bg-[#d9232e] hover:bg-[#b91c26] text-white text-xs font-bold uppercase px-8 py-2.5 rounded-full shadow-xs transition"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. TIN TỨC (3 Medical Blog Cards)
         ===================================================================== */}
      <section id="tin-tuc" className="py-14 px-4 bg-[#fafbfd]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-center text-slate-800 mb-10">
            TIN TỨC
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-xs border border-slate-100 hover:shadow-md transition flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-slate-800/75 text-white text-[9px] font-bold uppercase px-2.5 py-1 rounded-xs">
                    {item.category || "TIN TỨC"}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] text-slate-400 mb-1">{item.date}</p>
                    <h3 className="text-sm font-bold text-slate-800 mb-2 hover:text-[#1e73be] transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. SKY-BLUE "ĐẶT HẸN NGAY" BANNER (#8ce0ff)
         ===================================================================== */}
      <section
        id="dat-hen"
        className="bg-gradient-to-r from-[#80dcff] via-[#9be5ff] to-[#80dcff] py-12 px-4 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Smiling Doctor Portrait (5 cols) */}
          <div className="md:col-span-5 flex justify-center">
            <img
              src={data.bookingDoctorImage}
              alt="Bác sĩ tư vấn đặt hẹn"
              className="w-64 sm:w-72 md:w-80 h-[340px] object-cover object-top rounded-2xl shadow-md border-4 border-white/70"
            />
          </div>

          {/* Right White Rounded Form Card (7 cols) */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-lg mx-auto">
              <div className="text-center mb-5">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-slate-800">
                  ĐẶT HẸN NGAY
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Hãy để lại thông tin, chúng tôi sẽ liên hệ lại trong 30p
                </p>
              </div>

              {mainBookingSent ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Đặt lịch hẹn thành công!
                  </h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Cảm ơn quý khách đã tin tưởng {data.business.name}. Bác sĩ tư vấn
                    sẽ liên hệ qua số điện thoại trong vòng 30 phút.
                  </p>
                  <button
                    type="button"
                    onClick={() => setMainBookingSent(false)}
                    className="bg-[#1e73be] text-white text-xs font-bold px-6 py-2 rounded-full"
                  >
                    Đặt lịch mới
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMainBookingSent(true);
                  }}
                  className="space-y-3 text-xs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên*"
                      className="w-full border border-slate-200 rounded-xs px-3 py-2.5 focus:outline-none focus:border-[#1e73be]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border border-slate-200 rounded-xs px-3 py-2.5 focus:outline-none focus:border-[#1e73be]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại*"
                      className="w-full border border-slate-200 rounded-xs px-3 py-2.5 focus:outline-none focus:border-[#1e73be]"
                    />
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      className="w-full border border-slate-200 rounded-xs px-3 py-2.5 focus:outline-none focus:border-[#1e73be]"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Lời nhắn"
                    className="w-full border border-slate-200 rounded-xs px-3 py-2.5 focus:outline-none focus:border-[#1e73be] resize-none"
                  />
                  <div className="pt-1 text-center">
                    <button
                      type="submit"
                      className="w-44 bg-[#d9232e] hover:bg-[#b91c26] text-white font-bold uppercase text-xs py-2.5 rounded-xs shadow-sm transition cursor-pointer"
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

      {/* =====================================================================
          10. LIGHT 4-COLUMN FOOTER + FLOATING ACTION BUTTONS
         ===================================================================== */}
      <footer className="bg-[#f5f6f8] text-slate-700 py-14 px-4 border-t border-slate-200 relative">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Col 1: Brand Logo + Intro */}
          <div className="space-y-3">
            <div className="flex justify-start">
              <MonaHealthCareLogo brandName={data.business.name} size="lg" />
            </div>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-[#1e73be]">{data.business.name}</strong> là
              trung tâm xét nghiệm huyết thống được xây dựng với cơ sở vật chất hiện
              đại, đội ngũ kỹ thuật viên nhiều năm kinh nghiệm cùng với quy trình xét
              nghiệm chuẩn mực.
            </p>
          </div>

          {/* Col 2: Địa chỉ */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#d9232e]">Địa chỉ</h3>
            <span className="inline-block bg-[#d9232e] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-xs">
              TRỤ SỞ: TP HỒ CHÍ MINH
            </span>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <strong className="text-slate-800">Địa chỉ :</strong>{" "}
                {data.business.address}
              </li>
              <li>
                <strong className="text-slate-800">Hotline:</strong> {primaryPhone}
              </li>
              <li>
                <strong className="text-slate-800">Email:</strong> {primaryEmail}
              </li>
            </ul>
          </div>

          {/* Col 3: Dịch vụ */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#d9232e]">Dịch vụ</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#gioi-thieu" className="hover:text-[#1e73be]">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#dich-vu" className="hover:text-[#1e73be]">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#phong-xet-nghiem" className="hover:text-[#1e73be]">
                  Hướng dẫn
                </a>
              </li>
              <li>
                <a
                  href="#dich-vu"
                  className="font-semibold text-slate-800 hover:text-[#1e73be]"
                >
                  BẢNG GIÁ XÉT NGHIỆM ADN
                </a>
              </li>
              <li>
                <a href="#tin-tuc" className="hover:text-[#1e73be]">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#dat-hen" className="hover:text-[#1e73be]">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Đăng Ký */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#d9232e]">Đăng Ký</h3>
            <p className="text-slate-600">
              Đăng ký để được tư vấn ngay lập tức.
            </p>
            {newsletterSent ? (
              <p className="text-emerald-600 font-semibold">
                Đã đăng ký nhận tư vấn thành công!
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSent(true);
                }}
                className="flex items-center bg-white border border-slate-200 rounded-full overflow-hidden p-1"
              >
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại* ..."
                  className="flex-1 px-3 py-1.5 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-7 h-7 rounded-full bg-white text-[#d9232e] hover:bg-rose-50 flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-2 pt-2">
              <a
                href="#dat-hen"
                className="w-7 h-7 rounded-full bg-[#3b5998] text-white flex items-center justify-center text-[11px] font-bold"
              >
                f
              </a>
              <a
                href="#dat-hen"
                className="w-7 h-7 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[11px] font-bold"
              >
                ig
              </a>
              <a
                href="#dat-hen"
                className="w-7 h-7 rounded-full bg-[#0284c7] text-white flex items-center justify-center text-[11px] font-bold"
              >
                tw
              </a>
              <a
                href="#dat-hen"
                className="w-7 h-7 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-[11px] font-bold"
              >
                yt
              </a>
            </div>
          </div>
        </div>

        {/* Floating Quick Call & Chat Pill Buttons Bottom Right */}
        <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
          <a
            href="#dat-hen"
            title="Chat tư vấn trực tuyến"
            className="w-11 h-11 rounded-full bg-[#29b6f6] hover:bg-[#0288d1] text-white flex items-center justify-center shadow-lg transition"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
            title="Gọi Hotline 24/7"
            className="w-11 h-11 rounded-full bg-[#d9232e] hover:bg-[#b91c26] text-white flex items-center justify-center shadow-lg transition"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
