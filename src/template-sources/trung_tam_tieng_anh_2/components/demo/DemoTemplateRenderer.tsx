"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
  BookOpen,
  Users,
  X,
  Menu,
  Sparkles,
  Globe,
  Share2,
  Video,
  Award,
  ChevronRight,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh2DefaultData,
  TrungTamTiengAnh2Data,
  TrungTamTiengAnh2Course,
  TrungTamTiengAnh2Activity,
} from "@/template-sources/trung_tam_tieng_anh_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function BenefitLineIcon({ type }: { type: string }) {
  switch (type) {
    case "document":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-12 h-12 mx-auto text-[#dc1f26]"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <rect x="10" y="6" width="28" height="36" rx="2" />
          <line x1="16" y1="15" x2="32" y2="15" />
          <line x1="16" y1="22" x2="32" y2="22" />
          <line x1="16" y1="29" x2="26" y2="29" />
          <line x1="16" y1="35" x2="22" y2="35" />
        </svg>
      );
    case "award":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-12 h-12 mx-auto text-[#dc1f26]"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <circle cx="24" cy="19" r="11" />
          <circle cx="24" cy="19" r="6" />
          <path d="M18 29L15 42L24 37L33 42L30 29" />
        </svg>
      );
    case "timer":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-12 h-12 mx-auto text-[#dc1f26]"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <circle cx="24" cy="26" r="14" />
          <line x1="20" y1="7" x2="28" y2="7" />
          <line x1="24" y1="7" x2="24" y2="12" />
          <line x1="34" y1="14" x2="38" y2="10" />
          <polyline points="24,18 24,26 30,26" />
        </svg>
      );
    case "teacher":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-12 h-12 mx-auto text-[#dc1f26]"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <rect x="6" y="10" width="36" height="24" rx="2" />
          <circle cx="24" cy="20" r="4" />
          <path d="M16 30C16 26.5 19.5 24 24 24C28.5 24 32 26.5 32 30" />
          <line x1="14" y1="38" x2="34" y2="38" />
        </svg>
      );
    case "review":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-12 h-12 mx-auto text-[#dc1f26]"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <rect x="9" y="7" width="24" height="34" rx="2" />
          <line x1="15" y1="15" x2="27" y2="15" />
          <line x1="15" y1="22" x2="27" y2="22" />
          <line x1="15" y1="29" x2="22" y2="29" />
          <path d="M27 31L31 35L40 24" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-12 h-12 mx-auto text-[#dc1f26]"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <rect x="7" y="9" width="34" height="23" rx="2" />
          <line x1="7" y1="27" x2="41" y2="27" />
          <line x1="20" y1="32" x2="18" y2="39" />
          <line x1="28" y1="32" x2="30" y2="39" />
          <line x1="14" y1="39" x2="34" y2="39" />
        </svg>
      );
  }
}

function SmartEnglishLogo({
  brandName,
  dark = false,
}: {
  brandName: string;
  dark?: boolean;
}) {
  return (
    <div className="inline-flex flex-col items-center select-none leading-none">
      <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-zinc-400 font-medium">
        <span>Grammar</span>
        <span className="text-[#dc1f26] font-extrabold text-sm tracking-tight normal-case">
          Smart
        </span>
        <span>Speaking</span>
      </div>
      <div
        className={`text-2xl md:text-[28px] font-black tracking-tight -mt-0.5 ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        English
        <span className="text-[#dc1f26]">.</span>
      </div>
      <div className="flex items-center gap-1.5 -mt-0.5">
        <span className="text-[8px] uppercase tracking-widest text-zinc-400">
          IELTS
        </span>
        <span
          className={`text-sm font-bold tracking-wide ${
            dark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          Center
        </span>
        <span className="text-[8px] uppercase tracking-widest text-zinc-400">
          TOEIC
        </span>
      </div>
      <span
        className={`mt-1 text-[10px] font-semibold uppercase tracking-widest ${
          dark ? "text-[#facc15]" : "text-[#dc1f26]"
        }`}
      >
        {brandName}
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh2Data = adaptClonedTemplateData(
    trungTamTiengAnh2DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [activeCourseModal, setActiveCourseModal] =
    useState<TrungTamTiengAnh2Course | null>(null);
  const [activeActivityModal, setActiveActivityModal] =
    useState<TrungTamTiengAnh2Activity | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // Consultation Form State
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    campus: data.campuses?.[0]?.name || "Cơ sở 1 - Quận 11",
    course: data.courses?.[0]?.title || "Tiếng Anh Giao Tiếp Phản Xạ",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = ["Tất cả", "Giao tiếp", "IELTS & TOEIC", "Thiếu nhi"];
  const filteredCourses =
    selectedCategory === "Tất cả"
      ? data.courses
      : data.courses.filter((c) => c.category === selectedCategory);

  const primaryPhone = data.business.phone?.[0] || "0909 126 922";
  const primaryEmail =
    data.business.email?.[0] || "tuyensinh@newyorkenglish.edu.vn";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName.trim() || !formState.phone.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-[#dc1f26] selection:text-white">
      {/* 1. WHITE TOPBAR + 4-COLUMN CRIMSON RED ACTION BAR */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch">
          {/* Left Logo Block spanning both rows on desktop */}
          <div className="flex items-center justify-between lg:justify-center px-4 sm:px-6 py-3 lg:w-60 bg-white border-b lg:border-b-0 lg:border-r border-gray-100 shrink-0">
            <a href="#trang-chu" className="focus:outline-none">
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={data.business.name}
                  className="h-14 w-auto object-contain"
                />
              ) : (
                <SmartEnglishLogo brandName={data.business.name} />
              )}
            </a>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 bg-[#dc1f26] text-white text-xs font-bold px-3 py-2 rounded"
              >
                <Phone className="w-3.5 h-3.5" />
                {primaryPhone}
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-700 hover:text-[#dc1f26]"
                aria-label="Mở menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Right Two-Row Stack */}
          <div className="flex-1 flex flex-col">
            {/* Top White Navigation Row */}
            <div className="hidden lg:flex items-center justify-between px-6 py-2.5 bg-white text-[13px] border-b border-gray-100">
              <nav className="flex items-center gap-7 font-medium text-zinc-600">
                <a
                  href="#trang-chu"
                  className="text-[#dc1f26] font-semibold transition-colors"
                >
                  Trang chủ
                </a>
                <a
                  href="#gioi-thieu"
                  className="hover:text-[#dc1f26] transition-colors"
                >
                  Giới thiệu
                </a>
                <a
                  href="#hoat-dong"
                  className="hover:text-[#dc1f26] transition-colors"
                >
                  Tin tức
                </a>
                <a
                  href="#tuyen-dung"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowScheduleModal(true);
                  }}
                  className="hover:text-[#dc1f26] transition-colors"
                >
                  Tuyển dụng
                </a>
                <a
                  href="#cam-nhan"
                  className="hover:text-[#dc1f26] transition-colors"
                >
                  Cảm nhận học viên
                </a>
                <a
                  href="#lien-he"
                  className="hover:text-[#dc1f26] transition-colors"
                >
                  Liên hệ
                </a>
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="mr-2 text-xs font-bold text-[#dc1f26] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {primaryPhone}
                </a>
                <a
                  href="#lien-he"
                  aria-label="Facebook"
                  className="w-6 h-6 rounded-full bg-zinc-300 hover:bg-[#dc1f26] text-white flex items-center justify-center transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#lien-he"
                  aria-label="Instagram"
                  className="w-6 h-6 rounded-full bg-zinc-300 hover:bg-[#dc1f26] text-white flex items-center justify-center transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#lien-he"
                  aria-label="Youtube"
                  className="w-6 h-6 rounded-full bg-zinc-300 hover:bg-[#dc1f26] text-white flex items-center justify-center transition-colors"
                >
                  <Video className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Bottom 4-Column Crimson Red Action Bar (#dc1f26) */}
            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#dc1f26] text-white">
              <a
                href="#khoa-hoc"
                onClick={() => setSelectedCategory("Giao tiếp")}
                className="py-3.5 px-3 text-center text-xs sm:text-[13px] font-bold uppercase tracking-wide border-r border-b md:border-b-0 border-white/15 hover:bg-[#b91c1c] transition-colors flex flex-col items-center justify-center leading-snug"
              >
                <span>TIẾNG ANH</span>
                <span>GIAO TIẾP</span>
              </a>
              <a
                href="#khoa-hoc"
                onClick={() => setSelectedCategory("IELTS & TOEIC")}
                className="py-3.5 px-3 text-center text-xs sm:text-[13px] font-bold uppercase tracking-wide md:border-r border-b md:border-b-0 border-white/15 hover:bg-[#b91c1c] transition-colors flex flex-col items-center justify-center leading-snug"
              >
                <span>LUYỆN THI</span>
                <span>IELTS, TOEIC ...</span>
              </a>
              <button
                type="button"
                onClick={() => setShowScheduleModal(true)}
                className="py-3.5 px-3 text-center text-xs sm:text-[13px] font-bold uppercase tracking-wide border-r border-white/15 hover:bg-[#b91c1c] transition-colors flex flex-col items-center justify-center leading-snug cursor-pointer"
              >
                <span>LỊCH KHAI</span>
                <span>GIẢNG</span>
              </button>
              <a
                href="#hoat-dong"
                className="py-3.5 px-3 text-center text-xs sm:text-[13px] font-bold uppercase tracking-wide hover:bg-[#b91c1c] transition-colors flex flex-col items-center justify-center leading-snug"
              >
                <span>BÍ QUYẾT</span>
                <span>HỌC TIẾNG ANH</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-2.5 text-sm font-medium">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#dc1f26] font-bold"
            >
              Trang chủ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-700"
            >
              Giới thiệu
            </a>
            <a
              href="#khoa-hoc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-700"
            >
              Các khóa học
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setShowScheduleModal(true);
              }}
              className="block w-full text-left py-1.5 text-zinc-700"
            >
              Lịch khai giảng tháng này
            </button>
            <a
              href="#hoat-dong"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-700"
            >
              Hình ảnh hoạt động & Tin tức
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-700"
            >
              Đăng ký tư vấn
            </a>
          </div>
        )}
      </header>

      {/* 2. CAMPUS HERO WITH CRIMSON RED LEFT PANEL */}
      <section
        id="trang-chu"
        className="relative w-full min-h-[480px] md:min-h-[540px] bg-zinc-900 overflow-hidden flex items-stretch"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 flex items-stretch">
          {/* Tall Solid Crimson Red Box on the Left */}
          <div className="w-full sm:w-[370px] md:w-[390px] bg-[#dc1f26] text-white px-8 sm:px-10 py-14 md:py-20 flex flex-col justify-center shadow-2xl">
            <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-bold leading-[1.35] tracking-tight mb-5">
              {data.hero.title}
            </h1>
            <p className="text-white/90 text-[13.5px] sm:text-sm leading-relaxed mb-8">
              {data.hero.subtitle}
            </p>
            <div>
              <a
                href={data.hero.ctaLink || "#khoa-hoc"}
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#facc15] transition-colors group"
              >
                <span>{data.hero.ctaText || "Xem thêm"}</span>
                <ArrowRight className="w-4 h-4 text-[#facc15] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OVERLAPPING WHITE CONTAINER ("Anh ngữ New York — Chúng tôi là ai" + 3x2 Benefits Grid) */}
      <section id="gioi-thieu" className="bg-[#f2f2f2] pb-16 pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-[0_12px_45px_rgba(0,0,0,0.08)] -mt-8 md:-mt-12 relative z-20">
            {/* Top Half: Campus Building Graphic Left + Right-Aligned About Copy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center p-7 sm:p-10 md:p-12 gap-8 lg:gap-10">
              {/* Left Campus / Schoolhouse Visual */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-sm overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 p-4 sm:p-6 border border-red-100">
                  <img
                    src={
                      data.aboutSection?.illustrationImage ||
                      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                    }
                    alt={data.business.name}
                    className="w-full h-64 sm:h-72 object-cover rounded-sm shadow-md"
                  />
                  {/* Schoolhouse Emblem Overlay */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 bg-[#dc1f26] text-white px-4 py-3 rounded-sm shadow">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#facc15] text-zinc-900 flex items-center justify-center font-black text-xs">
                        100%
                      </div>
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#facc15]">
                          Chuẩn Cambridge & IELTS Quốc Tế
                        </p>
                        <p className="text-[11px] text-white/90">
                          Hơn 15.000 học viên đạt mục tiêu đầu ra
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowScheduleModal(true)}
                      className="text-xs font-bold bg-white text-[#dc1f26] px-3 py-1.5 rounded-sm hover:bg-[#facc15] hover:text-zinc-900 transition-colors"
                    >
                      Lịch khai giảng
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Copy (Right-aligned on desktop like TA005 screenshot) */}
              <div className="lg:col-span-6 text-left lg:text-right flex flex-col lg:items-end">
                <h2 className="text-2xl sm:text-[28px] font-bold text-[#dc1f26] leading-tight">
                  {data.business.name}
                </h2>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-1 mb-5">
                  {data.business.aboutTitle ||
                    data.aboutSection?.subHeading ||
                    "Chúng tôi là ai"}
                </h3>
                <div className="space-y-3.5 text-zinc-500 text-[13.5px] leading-relaxed mb-7 max-w-xl">
                  {data.business.aboutText.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#dc1f26] hover:text-[#b91c1c] transition-colors group"
                >
                  <span>{data.aboutSection?.ctaText || "Xem thêm"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Bottom Half: 3x2 Bordered Benefits Grid */}
            <div
              id="cam-nhan"
              className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200"
            >
              {data.benefits.map((item, index) => {
                const isRightBorder = (index + 1) % 3 !== 0;
                const isSecondRow = index >= 3;
                return (
                  <div
                    key={item.id}
                    className={`p-8 sm:p-10 text-center transition-colors hover:bg-red-50/30 border-b md:border-b-0 border-gray-200 ${
                      isRightBorder ? "md:border-r md:border-gray-200" : ""
                    } ${isSecondRow ? "md:border-t md:border-gray-200" : ""}`}
                  >
                    <div className="mb-4">
                      <BenefitLineIcon type={item.icon} />
                    </div>
                    <h4 className="text-[15px] font-bold text-zinc-800 mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-zinc-500 leading-relaxed max-w-xs mx-auto">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. "CÁC KHÓA HỌC" (3 FEATURED COURSE CARDS) */}
      <section id="khoa-hoc" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[26px] font-bold text-zinc-900">
              Các khóa học
            </h2>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#dc1f26] text-white border-[#dc1f26]"
                      : "bg-white text-zinc-600 border-gray-200 hover:border-[#dc1f26] hover:text-[#dc1f26]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200/80 p-5 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 mb-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#dc1f26] text-white text-[11px] font-bold px-2.5 py-1">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-[15.5px] font-bold text-zinc-900 group-hover:text-[#dc1f26] transition-colors leading-snug mb-2.5">
                  {course.title}
                </h3>

                <p className="text-[13px] text-zinc-500 leading-relaxed mb-4 flex-1">
                  {course.description}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-zinc-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#dc1f26]" />
                    {course.duration}
                  </span>
                  <span className="font-bold text-[#dc1f26]">
                    {course.tuition}
                  </span>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setActiveCourseModal(course)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-800 hover:text-[#dc1f26] transition-colors cursor-pointer"
                  >
                    <span>Xem Thêm</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#dc1f26]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "CÁC HÌNH ẢNH HOẠT ĐỘNG & TIN TỨC" (6x2 STUDENT ACTIVITY PHOTO GRID) */}
      <section id="hoat-dong" className="py-12 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-[26px] font-bold text-zinc-900 text-center mb-10">
            Các hình ảnh hoạt động &amp; tin tức
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {data.activities.slice(0, 12).map((act) => (
              <button
                key={act.id}
                type="button"
                onClick={() => setActiveActivityModal(act)}
                className="group relative aspect-square overflow-hidden bg-zinc-100 shadow-sm hover:shadow-lg transition-all cursor-pointer text-left focus:outline-none"
              >
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#facc15]">
                    {act.category}
                  </span>
                  <p className="text-white text-xs font-semibold leading-snug line-clamp-2 mt-0.5">
                    {act.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPLIT CONSULTATION SECTION (RED LEFT PANEL + WHITE FORM RIGHT OVER CLASSROOM BG) */}
      <section id="lien-he" className="relative py-14 md:py-20 bg-zinc-900">
        {/* Background classroom photo */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
          alt="Đăng ký tư vấn lộ trình học tiếng Anh"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch shadow-2xl">
            {/* Left Crimson Red Box (Taller overlapping top/bottom on desktop like TA005) */}
            <div className="lg:w-[36%] bg-[#dc1f26] text-white p-8 sm:p-10 md:p-12 lg:-my-8 relative z-10 flex flex-col justify-center shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold leading-snug mb-6">
                Bạn muốn tư vấn học tiếng Anh?
              </h2>
              <p className="text-lg sm:text-[21px] font-bold leading-relaxed">
                Hãy để{" "}
                <span className="text-[#facc15]">{data.business.name}</span>{" "}
                giúp bạn{" "}
                <span className="text-[#facc15]">
                  vượt qua rào cản – cán bước thành công
                </span>
              </p>

              <div className="mt-8 pt-6 border-t border-white/20 space-y-2.5 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Kiểm tra trình độ 4 kỹ năng miễn phí 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Tư vấn lộ trình cá nhân hóa & học thử 2 buổi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0" />
                  <span>Ưu đãi học bổng lên tới 30% khi đăng ký sớm</span>
                </div>
              </div>
            </div>

            {/* Right White Form Card */}
            <div className="lg:w-[64%] bg-white p-8 sm:p-10 md:p-12 flex flex-col justify-center">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    Đăng ký tư vấn thành công!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto">
                    Cảm ơn <strong>{formState.fullName}</strong>. Bộ phận Tuyển
                    sinh của <strong>{data.business.name}</strong> sẽ liên hệ
                    qua số <strong>{formState.phone}</strong> trong vòng 15 phút
                    để xếp lịch kiểm tra trình độ miễn phí cho bạn.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({
                        ...formState,
                        fullName: "",
                        phone: "",
                        email: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center bg-[#dc1f26] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-[#b91c1c] transition-colors"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Column of 5 Compact Inputs */}
                    <div className="space-y-3">
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên"
                        value={formState.fullName}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            fullName: e.target.value,
                          })
                        }
                        className="w-full border border-gray-200 px-3.5 py-2.5 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#dc1f26]"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full border border-gray-200 px-3.5 py-2.5 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#dc1f26]"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full border border-gray-200 px-3.5 py-2.5 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#dc1f26]"
                      />
                      <select
                        value={formState.campus}
                        onChange={(e) =>
                          setFormState({ ...formState, campus: e.target.value })
                        }
                        className="w-full border border-gray-200 px-3.5 py-2.5 text-xs text-zinc-700 bg-white focus:outline-none focus:border-[#dc1f26]"
                      >
                        <option value="">Chi nhánh</option>
                        {data.campuses.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name} — {c.address}
                          </option>
                        ))}
                      </select>
                      <select
                        value={formState.course}
                        onChange={(e) =>
                          setFormState({ ...formState, course: e.target.value })
                        }
                        className="w-full border border-gray-200 px-3.5 py-2.5 text-xs text-zinc-700 bg-white focus:outline-none focus:border-[#dc1f26]"
                      >
                        <option value="">Lớp bạn muốn học</option>
                        {data.courses.map((c) => (
                          <option key={c.id} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Right Column: Full-Height Message Textarea */}
                    <div className="flex flex-col">
                      <textarea
                        placeholder="Lời nhắn (Trình độ hiện tại, mục tiêu điểm số hoặc khung giờ bạn có thể học...)"
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className="w-full flex-1 min-h-[180px] border border-gray-200 p-3.5 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#dc1f26] resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex justify-center">
                    <button
                      type="submit"
                      className="bg-[#dc1f26] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-widest px-14 py-3 transition-colors cursor-pointer shadow"
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

      {/* 7. DARK CHARCOAL 4-COLUMN FOOTER (#262626) */}
      <footer className="bg-[#262626] text-zinc-300 pt-14">
        <div className="max-w-6xl mx-auto px-4">
          {/* Centered Smart English Center Logo */}
          <div className="flex justify-center mb-12">
            <SmartEnglishLogo brandName={data.business.name} dark />
          </div>

          {/* 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 text-[13px]">
            {/* Col 1 */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-4">
                TRƯỜNG ANH NGỮ{" "}
                <span className="text-[#dc1f26]">
                  {data.business.name.replace(/^(Trường\s+)?Anh\s+Ngữ\s*/i, "") ||
                    "NEW YORK"}
                </span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Trung tâm đào tạo tiếng Anh giao tiếp phản xạ và luyện thi
                IELTS, TOEIC, Cambridge chất lượng cao với lộ trình cá nhân hóa
                cam kết chuẩn đầu ra quốc tế.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-4">
                {data.campuses?.[0]?.name || "CƠ SỞ 1"}
              </h3>
              <ul className="space-y-2.5 text-zinc-400">
                <li>{data.business.address}</li>
                <li className="text-zinc-300 font-medium">{primaryPhone}</li>
                <li>{primaryEmail}</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-4">
                {data.campuses?.[1]?.name || "CƠ SỞ 2"}
              </h3>
              <ul className="space-y-2.5 text-zinc-400">
                <li>
                  {data.campuses?.[1]?.address ||
                    "215 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM"}
                </li>
                <li className="text-zinc-300 font-medium">
                  {data.campuses?.[1]?.phone || primaryPhone}
                </li>
                <li>{data.campuses?.[1]?.email || primaryEmail}</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-4">
                GIỜ LÀM VIỆC
              </h3>
              <div className="space-y-3 text-zinc-400">
                {data.workingHoursList.map((item, idx) => (
                  <div key={idx}>
                    <p>{item.days}</p>
                    <p className="text-white font-bold">{item.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-[#1c1c1c] py-4 text-center text-xs text-zinc-400 border-t border-white/5">
          © Bản quyền thuộc về{" "}
          <span className="text-white font-semibold">{data.business.name}</span>
          . Thiết kế website bởi{" "}
          <span className="text-white font-semibold">TaviWeb</span>
        </div>
      </footer>

      {/* COURSE DETAIL MODAL */}
      {activeCourseModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setActiveCourseModal(null)}
        >
          <div
            className="bg-white max-w-xl w-full rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img
                src={activeCourseModal.image}
                alt={activeCourseModal.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveCourseModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#dc1f26]"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-3 left-4 bg-[#dc1f26] text-white text-xs font-bold px-3 py-1">
                {activeCourseModal.category}
              </span>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-zinc-900">
                {activeCourseModal.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {activeCourseModal.description}
              </p>
              <div className="grid grid-cols-2 gap-3 bg-zinc-50 p-3.5 text-xs border border-gray-100">
                <div>
                  <span className="text-zinc-400 block">Cấp độ đào tạo:</span>
                  <strong className="text-zinc-800">
                    {activeCourseModal.level}
                  </strong>
                </div>
                <div>
                  <span className="text-zinc-400 block">Thời lượng:</span>
                  <strong className="text-zinc-800">
                    {activeCourseModal.duration}
                  </strong>
                </div>
                <div>
                  <span className="text-zinc-400 block">Lịch học:</span>
                  <strong className="text-zinc-800">
                    {activeCourseModal.schedule}
                  </strong>
                </div>
                <div>
                  <span className="text-zinc-400 block">Học phí trọn gói:</span>
                  <strong className="text-[#dc1f26]">
                    {activeCourseModal.tuition}
                  </strong>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Quyền lợi khóa học:
                </p>
                {activeCourseModal.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-zinc-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#dc1f26] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveCourseModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900"
                >
                  Đóng
                </button>
                <a
                  href="#lien-he"
                  onClick={() => {
                    setFormState({
                      ...formState,
                      course: activeCourseModal.title,
                    });
                    setActiveCourseModal(null);
                  }}
                  className="bg-[#dc1f26] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5"
                >
                  Đăng ký học thử khóa này
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCHEDULE MODAL */}
      {showScheduleModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setShowScheduleModal(false)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#dc1f26] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  Lịch Khai Giảng Các Lớp Mới Nhất
                </h3>
                <p className="text-xs text-white/85">
                  Ưu đãi giảm ngay 15% học phí khi đăng ký giữ chỗ trước ngày
                  khai giảng
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowScheduleModal(false)}
                className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-zinc-500 uppercase">
                    <th className="py-2.5 px-3">Mã lớp</th>
                    <th className="py-2.5 px-3">Khóa học</th>
                    <th className="py-2.5 px-3">Cơ sở</th>
                    <th className="py-2.5 px-3">Lịch học</th>
                    <th className="py-2.5 px-3">Khai giảng</th>
                    <th className="py-2.5 px-3 text-right">Đăng ký</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.schedules.map((sch) => (
                    <tr key={sch.id} className="hover:bg-red-50/40">
                      <td className="py-3 px-3 font-bold text-[#dc1f26]">
                        {sch.code}
                      </td>
                      <td className="py-3 px-3 font-semibold text-zinc-800">
                        {sch.courseName}
                      </td>
                      <td className="py-3 px-3 text-zinc-600">{sch.campus}</td>
                      <td className="py-3 px-3 text-zinc-600">
                        {sch.days} ({sch.time})
                      </td>
                      <td className="py-3 px-3 font-medium text-zinc-800">
                        {sch.startDate}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <a
                          href="#lien-he"
                          onClick={() => {
                            setFormState({
                              ...formState,
                              course: sch.courseName,
                              campus: sch.campus,
                            });
                            setShowScheduleModal(false);
                          }}
                          className="inline-block bg-[#dc1f26] text-white font-bold px-3 py-1.5 hover:bg-[#b91c1c]"
                        >
                          Giữ chỗ ({sch.slotsLeft} suất)
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ACTIVITY LIGHTBOX MODAL */}
      {activeActivityModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveActivityModal(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeActivityModal.image}
              alt={activeActivityModal.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-5 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#dc1f26]">
                  {activeActivityModal.category} • {activeActivityModal.date}
                </span>
                <h4 className="text-base font-bold text-zinc-900 mt-0.5">
                  {activeActivityModal.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveActivityModal(null)}
                className="px-4 py-2 bg-zinc-900 text-white text-xs font-bold"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
