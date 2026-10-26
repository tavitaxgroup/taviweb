"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  GraduationCap,
  Info,
  Home,
  BookOpen,
  UserCheck,
  Globe,
  Compass,
  Presentation,
  Award,
  CheckCircle2,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh15DefaultData,
  type TrungTamTiengAnh15Data
} from "@/template-sources/trung_tam_tieng_anh_15/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh15Data = adaptClonedTemplateData(
    trungTamTiengAnh15DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(
    "Luyện thi IELTS & Tư vấn học bổng du học"
  );
  const [submitted, setSubmitted] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "info@newocean.edu.vn";

  const openConsultation = (programTitle?: string) => {
    if (programTitle) setSelectedProgram(programTitle);
    setSubmitted(false);
    setConsultModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0d47a1] selection:text-white">
      {/* 1. TOP UTILITY STRIP + WHITE STICKY HEADER */}
      <div className="bg-slate-50 border-b border-slate-100 text-[11px] text-slate-500 py-1.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end gap-5">
          <button
            onClick={() => openConsultation("Hỏi đáp lộ trình IELTS & Du học")}
            className="hover:text-[#0d47a1] cursor-pointer"
          >
            Hỏi đáp
          </button>
          <a href="#lich-su" className="hover:text-[#0d47a1]">
            Kinh nghiệm
          </a>
          <button
            onClick={() => openConsultation("Danh sách Học bổng 2025")}
            className="hover:text-[#0d47a1] cursor-pointer"
          >
            Học bổng
          </button>
          <button
            onClick={() => openConsultation("Bảng dự toán chi phí học tập")}
            className="hover:text-[#0d47a1] cursor-pointer"
          >
            Chi phí
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#0d47a1] text-white flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-black text-slate-900 uppercase leading-none">
                {data.business.name}
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-[#0d47a1] mt-0.5">
                NGOẠI NGỮ & GIÁO DỤC QUỐC TẾ
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold uppercase tracking-wider text-slate-700 h-full">
            <a href="#gioi-thieu" className="hover:text-[#0d47a1] flex items-center h-full">
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="text-[#f59e0b] border-t-2 border-[#f59e0b] flex items-center h-full"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#0d47a1] flex items-center gap-1 h-full"
            >
              <span>CHƯƠNG TRÌNH</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#tam-nhin" className="hover:text-[#0d47a1] flex items-center h-full">
              TẦM NHÌN
            </a>
            <a href="#lanh-dao" className="hover:text-[#0d47a1] flex items-center h-full">
              ĐỘI NGŨ
            </a>
            <a href="#lich-su" className="hover:text-[#0d47a1] flex items-center h-full">
              LỊCH SỬ
            </a>
            <button
              onClick={() => openConsultation()}
              className="hover:text-[#0d47a1] flex items-center h-full cursor-pointer"
            >
              LIÊN HỆ
            </button>
          </nav>

          {/* Right Red CTA + Search */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openConsultation()}
              className="bg-[#e53935] hover:bg-[#c62828] text-white text-[11px] font-extrabold uppercase px-4 py-2 rounded shadow-sm transition-colors cursor-pointer"
            >
              {data.hero.ctaText || "ĐĂNG KÝ TƯ VẤN"}
            </button>
            <button
              onClick={() => openConsultation()}
              className="p-2 text-slate-600 hover:text-[#0d47a1] cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#f59e0b]"
            >
              Giới thiệu chung
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Dịch vụ cung cấp
            </a>
            <a
              href="#lanh-dao"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Đội ngũ lãnh đạo
            </a>
            <a
              href="#lich-su"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Lịch sử phát triển
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="w-full bg-[#e53935] text-white py-2.5 rounded font-extrabold"
            >
              Đăng ký tư vấn
            </button>
          </div>
        )}
      </header>

      {/* 2. "GIỚI THIỆU CHUNG" HERO + VERTICAL INDIGO STATS SIDEBAR */}
      <section id="gioi-thieu" className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#0d47a1] uppercase tracking-wide">
              {data.hero.title}
            </h1>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {data.hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 shadow-lg rounded-sm overflow-hidden">
            {/* Left 9 Cols: Group Photo */}
            <div className="lg:col-span-9 relative h-72 sm:h-96">
              <img
                src={data.hero.backgroundImage}
                alt={data.business.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
              </div>
            </div>

            {/* Right 3 Cols: Indigo 3-Row Stats */}
            <div className="lg:col-span-3 bg-[#31429b] text-white divide-y divide-white/20 flex flex-col justify-between">
              {(data.heroStats || trungTamTiengAnh15DefaultData.heroStats).map(
                (st, idx) => (
                  <div
                    key={idx}
                    className="flex-1 p-6 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-xs font-semibold text-indigo-100">
                      {st.label}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black mt-1">
                      {st.value}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. "DỊCH VỤ NEW OCEAN CUNG CẤP" (3x2 SERVICE GRID) */}
      <section id="dich-vu" className="py-14 lg:py-20 bg-[#f5f6f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#0d47a1] uppercase tracking-wide mb-10">
            DỊCH VỤ {data.business.name.toUpperCase()} CUNG CẤP
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.services || trungTamTiengAnh15DefaultData.services || []).map(
              (srv, idx) => (
                <div
                  key={srv.id}
                  onClick={() => openConsultation(srv.title)}
                  className="bg-white p-8 text-center rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center"
                >
                  <div className="text-[#0d47a1] mb-4">
                    {idx === 0 ? (
                      <GraduationCap className="w-12 h-12" />
                    ) : idx === 1 ? (
                      <Info className="w-12 h-12" />
                    ) : idx === 2 ? (
                      <Home className="w-12 h-12" />
                    ) : idx === 3 ? (
                      <BookOpen className="w-12 h-12" />
                    ) : idx === 4 ? (
                      <UserCheck className="w-12 h-12" />
                    ) : (
                      <Globe className="w-12 h-12" />
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#0d47a1] uppercase">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 4. "THÀNH TÍCH HOẠT ĐỘNG" (4 ROYAL BLUE COUNTER CARDS) + 5. "TẦM NHÌN VÀ SỨ MỆNH" */}
      <section id="tam-nhin" className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 4 Royal Blue Counter Cards */}
          <div>
            <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#0d47a1] uppercase tracking-wide mb-8">
              THÀNH TÍCH HOẠT ĐỘNG
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {(data.stats || trungTamTiengAnh15DefaultData.stats || []).map((st) => (
                <div
                  key={st.id}
                  className="bg-[#0d47a1] text-white rounded-xl py-7 px-4 text-center shadow-md"
                >
                  <div className="text-3xl sm:text-4xl font-black">{st.number}</div>
                  <div className="text-xs font-bold text-sky-100 mt-1.5">
                    {st.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TẦM NHÌN VÀ SỨ MỆNH */}
          <div>
            <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#0d47a1] uppercase tracking-wide mb-8">
              {data.business.aboutTitle || "TẦM NHÌN VÀ SỨ MỆNH"}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#f5f6f8] rounded overflow-hidden shadow-sm">
              {/* Left Quote + Mission Text */}
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center space-y-4">
                <div className="border-l-4 border-[#f59e0b] pl-4 space-y-2">
                  <p className="text-xs sm:text-sm font-bold text-[#f59e0b] leading-relaxed">
                    {data.visionQuote}
                  </p>
                  <span className="block text-xs font-black text-slate-800 uppercase">
                    {data.visionAuthor}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                  {data.business.aboutText.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Right CEO Image */}
              <div className="lg:col-span-6 h-72 sm:h-80 lg:h-auto">
                <img
                  src={data.visionImage}
                  alt={data.visionAuthor}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "ĐỘI NGŨ LÃNH ĐẠO" (3x2 CIRCULAR PORTRAIT CARDS) */}
      <section id="lanh-dao" className="py-14 lg:py-20 bg-[#f5f6f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#0d47a1] uppercase tracking-wide mb-10">
            ĐỘI NGŨ LÃNH ĐẠO
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.team || trungTamTiengAnh15DefaultData.team || []).map((member) => (
              <div
                key={member.id}
                className="bg-white rounded p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-sm font-extrabold text-slate-800">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN" (ALTERNATING VERTICAL TIMELINE) */}
      <section id="lich-su" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#0d47a1] uppercase tracking-wide mb-14">
            LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN
          </h2>

          <div className="relative">
            {/* Center Vertical Line on Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

            <div className="space-y-10">
              {(data.timeline || trungTamTiengAnh15DefaultData.timeline).map(
                (item, idx) => {
                  const isRight = item.side === "right";
                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative"
                    >
                      {/* Left Column */}
                      <div
                        className={`md:col-span-5 ${
                          isRight ? "hidden md:block" : "block"
                        }`}
                      >
                        {!isRight && (
                          <div className="border border-slate-200 rounded shadow-sm overflow-hidden bg-white">
                            <div
                              className={`${item.headerColor} px-5 py-2.5 text-xs font-extrabold`}
                            >
                              {item.year}
                            </div>
                            <div className="p-5">
                              <h3 className="text-sm font-extrabold text-slate-800 mb-2.5">
                                {item.title}
                              </h3>
                              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                                {item.bullets.map((b, i) => (
                                  <li key={i}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Center Node Icon */}
                      <div className="hidden md:flex md:col-span-2 justify-center">
                        <div
                          className={`w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center shadow-sm z-10 ${
                            idx === 0
                              ? "border-[#1a3cd4] text-[#1a3cd4]"
                              : idx === 1
                              ? "border-[#8bc49e] text-[#8bc49e]"
                              : idx === 2
                              ? "border-[#f5c230] text-[#f5c230]"
                              : "border-[#ea5b50] text-[#ea5b50]"
                          }`}
                        >
                          {idx === 0 ? (
                            <Compass className="w-4 h-4" />
                          ) : idx === 1 ? (
                            <Presentation className="w-4 h-4" />
                          ) : idx === 2 ? (
                            <BookOpen className="w-4 h-4" />
                          ) : (
                            <Award className="w-4 h-4" />
                          )}
                        </div>
                      </div>

                      {/* Right Column */}
                      <div
                        className={`md:col-span-5 ${
                          isRight ? "block" : "hidden md:block"
                        }`}
                      >
                        {isRight && (
                          <div className="border border-slate-200 rounded shadow-sm overflow-hidden bg-white">
                            <div
                              className={`${item.headerColor} px-5 py-2.5 text-xs font-extrabold`}
                            >
                              {item.year}
                            </div>
                            <div className="p-5">
                              <h3 className="text-sm font-extrabold text-slate-800 mb-2.5">
                                {item.title}
                              </h3>
                              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                                {item.bullets.map((b, i) => (
                                  <li key={i}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. LIGHT GREY 4-COLUMN FOOTER + ROYAL BLUE BOTTOM BAR */}
      <footer className="bg-[#f5f6f8] border-t border-slate-200 pt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
            {/* Col 1 */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-slate-800 uppercase">
                TỔ CHỨC GIÁO DỤC QUỐC TẾ {data.business.name.toUpperCase()}
              </h4>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0d47a1] text-white flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="font-black text-slate-900 uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Đơn vị đào tạo ngoại ngữ học thuật IELTS/PTE và tư vấn du học 12 quốc gia
                uy tín hàng đầu tại Việt Nam từ năm 2007.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-extrabold text-slate-800 uppercase mb-3">
                THÔNG TIN CHUNG
              </h4>
              <ul className="space-y-2 text-[#0d47a1] font-medium">
                <li>
                  <a href="#gioi-thieu" className="hover:underline">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => openConsultation()}
                    className="hover:underline cursor-pointer"
                  >
                    Liên hệ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openConsultation("Hỏi đáp du học")}
                    className="hover:underline cursor-pointer"
                  >
                    Hỏi đáp du học
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openConsultation("Điều kiện học bổng")}
                    className="hover:underline cursor-pointer"
                  >
                    Điều kiện du học
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openConsultation("Chi phí du học")}
                    className="hover:underline cursor-pointer"
                  >
                    Chi phí du học
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-2.5">
              <h4 className="font-extrabold text-slate-800 uppercase mb-3">
                ĐỊA CHỈ LIÊN HỆ
              </h4>
              <p className="flex items-start gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="font-bold text-slate-800"
                >
                  {primaryPhone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-slate-800 uppercase">
                ĐĂNG KÝ NHẬN TIN
              </h4>
              <p className="text-slate-500 leading-relaxed">
                Đừng bỏ lỡ những thông tin học bổng và lịch thi IELTS hữu ích cập nhật
                liên tục trên {data.business.name}
              </p>
              {newsletterDone ? (
                <p className="text-emerald-600 font-bold">
                  Đã đăng ký nhận bản tin thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex items-center"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    className="bg-white border border-slate-200 px-3 py-2 text-xs w-full focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#e53935] hover:bg-[#c62828] text-white text-[11px] font-bold uppercase px-4 py-2 shrink-0 cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#0d47a1] text-white py-3 text-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            © Bản quyền thuộc về {data.business.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* CONSULTATION MODAL */}
      {consultModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setConsultModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#0d47a1] mx-auto" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  Đăng ký tư vấn thành công!
                </h3>
                <p className="text-xs text-slate-600">
                  Chuyên viên giáo dục của <strong>{data.business.name}</strong> sẽ liên hệ tư
                  vấn lộ trình học và học bổng trong vòng 15 phút.
                </p>
                <button
                  onClick={() => setConsultModalOpen(false)}
                  className="bg-[#0d47a1] text-white text-xs font-bold px-6 py-2.5 rounded cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#e53935]">
                    Đăng ký tư vấn miễn phí
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0d47a1] mt-0.5">
                    {data.business.name}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên học viên / phụ huynh *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0d47a1]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0d47a1]"
                />
                <input
                  type="text"
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0d47a1]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#e53935] hover:bg-[#c62828] text-white font-extrabold text-xs uppercase py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Gửi đăng ký ngay
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
