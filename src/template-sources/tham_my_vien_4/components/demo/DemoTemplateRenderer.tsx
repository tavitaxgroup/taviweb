"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Gift,
  Play,
  Sparkles,
  CheckCircle2,
  Award,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien4DefaultData,
  type Thamy4Data,
  type Thamy4GiftBox
} from "@/template-sources/tham_my_vien_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function BlueGoldGiftCard({
  box,
  onSelect
}: {
  box: Thamy4GiftBox;
  onSelect: (serviceName: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(box.serviceName)}
      className="group relative flex flex-col items-center text-center cursor-pointer focus:outline-none"
    >
      {/* Decorative Gold Ribbon Bow on Top */}
      <div className="flex items-center justify-center -mb-1.5 z-10">
        <span className="w-6 h-3.5 rounded-tl-full rounded-bl-full border-2 border-[#ffd700] bg-gradient-to-r from-[#ffec8b] to-[#d49b00] -rotate-12" />
        <span className="w-3 h-3 rounded-full bg-[#ffd700] z-10 -mx-1 shadow" />
        <span className="w-6 h-3.5 rounded-tr-full rounded-br-full border-2 border-[#ffd700] bg-gradient-to-l from-[#ffec8b] to-[#d49b00] rotate-12" />
      </div>

      {/* Gold Lid Bar */}
      <div className="w-full bg-gradient-to-r from-[#f7d14c] via-[#fff1a8] to-[#d99f00] h-3 rounded-t-xs shadow-sm" />

      {/* Royal Blue Gift Box Body */}
      <div className="w-full bg-gradient-to-b from-[#0b6dff] via-[#0051d5] to-[#003499] border border-[#3d94ff]/60 rounded-b-md px-3 py-3.5 shadow-[0_10px_25px_rgba(0,81,213,0.5)] group-hover:scale-105 transition-transform">
        <span className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white">
          {box.badgeTop}
        </span>
        <span className="block text-2xl sm:text-3xl font-black text-[#ffd700] leading-none my-1 drop-shadow">
          {box.discountText}
        </span>
        <span className="block text-[10px] sm:text-[11px] text-white/95 font-medium leading-tight">
          {box.serviceName}
        </span>
      </div>
    </button>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Thamy4Data = adaptClonedTemplateData(
    thamMyVien4DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedGiftTopic, setSelectedGiftTopic] = useState(
    "Đăng ký vé tham dự Đại Hội Thẩm Mỹ & Nhận tài trợ 100%"
  );
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const galaHotline = data.hotlineGala || data.business.phone?.[1] || "1900 0027";

  const cases =
    data.transformationCases && data.transformationCases.length > 0
      ? data.transformationCases
      : thamMyVien4DefaultData.transformationCases;
  const currentCase = cases[activeCaseIndex % cases.length];

  const openRegistration = (topic?: string) => {
    if (topic) setSelectedGiftTopic(topic);
    setRegisterSuccess(false);
    setRegisterModalOpen(true);
  };

  const galaLineupAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <div className="min-h-screen bg-[#030938] text-white font-sans selection:bg-[#ffd700] selection:text-[#030938] overflow-x-hidden">
      {/* 1. DARK NAVY HEADER */}
      <header className="sticky top-0 z-40 bg-[#02051d]/95 backdrop-blur-md border-b border-blue-900/50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#trang-chu" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-full border border-white/40 bg-blue-950/60 flex items-center justify-center text-[#ffd700]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <span className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                {data.business.name}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.22em] text-[#ffd700]">
                BEAUTY &amp; CLINIC
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-white/90">
            <a href="#trang-chu" className="text-[#ffd700] transition-colors">
              TRANG CHỦ
            </a>
            <a href="#dai-hoi" className="hover:text-[#ffd700] transition-colors">
              ĐẠI HỘI
            </a>
            <a href="#tri-an" className="hover:text-[#ffd700] transition-colors">
              TRI ÂN
            </a>
            <a href="#khach-hang" className="hover:text-[#ffd700] transition-colors">
              KHÁCH HÀNG
            </a>
            <a href="#bac-si" className="hover:text-[#ffd700] transition-colors">
              BÁC SĨ
            </a>
            <a href="#timeline" className="hover:text-[#ffd700] transition-colors">
              TIMELINE
            </a>
          </nav>

          {/* Hotline & Register */}
          <div className="hidden sm:flex items-center gap-4 text-[11px] font-semibold">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-[#ffd700]"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffd700]" />
              <span>{primaryPhone}</span>
            </a>
            <button
              type="button"
              onClick={() => openRegistration()}
              className="text-white/85 hover:text-[#ffd700] uppercase cursor-pointer"
            >
              ĐĂNG NHẬP / ĐĂNG KÝ
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#ffd700]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#02051d] border-t border-blue-900/50 px-4 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#ffd700]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#dai-hoi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white/90"
            >
              ĐẠI HỘI
            </a>
            <a
              href="#tri-an"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white/90"
            >
              TRI ÂN
            </a>
            <a
              href="#khach-hang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white/90"
            >
              KHÁCH HÀNG
            </a>
            <a
              href="#bac-si"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white/90"
            >
              BÁC SĨ
            </a>
            <a
              href="#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white/90"
            >
              TIMELINE
            </a>
          </div>
        )}
      </header>

      {/* 2. ROYAL BLUE GALA HERO ("TỎA SÁNG CÙNG SAO") */}
      <section
        id="trang-chu"
        className="relative pt-12 pb-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_#0b2b9e_0%,_#041054_50%,_#020629_100%)]"
      >
        {/* Glowing Blue Light Waves */}
        <div className="absolute top-12 left-0 right-0 h-44 bg-gradient-to-r from-blue-600/20 via-cyan-400/30 to-blue-600/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Golden Emblem Lockup */}
          <div className="inline-block mb-10">
            <p className="font-serif italic text-lg sm:text-2xl text-[#ffd700] mb-1">
              {data.eventScriptTagline || "Nhan sắc mới - Khởi đầu mới"}
            </p>
            <h2 className="text-lg sm:text-2xl font-extrabold uppercase tracking-wider text-white mb-1">
              {data.eventSubTitle || "ĐẠI HỘI THẨM MỸ"}
            </h2>
            <div className="relative inline-flex items-center justify-center gap-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-[#fff6b7] via-[#ffd700] to-[#d48b00] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,215,0,0.35)]">
                {data.hero.title || "TỎA SÁNG CÙNG SAO"}
              </h1>
              <Star className="w-10 h-10 sm:w-14 sm:h-14 text-[#ffd700] fill-[#ffd700] drop-shadow-[0_0_18px_rgba(255,215,0,0.65)] -mt-2" />
            </div>
          </div>

          {/* Panoramic Gala Guest & Doctor Lineup */}
          <div className="max-w-4xl mx-auto mt-4">
            <div className="flex items-end justify-center -space-x-3 sm:-space-x-4 overflow-hidden px-4 pt-4">
              {galaLineupAvatars.map((imgUrl, idx) => {
                const isCenter = idx === 4 || idx === 5;
                return (
                  <div
                    key={idx}
                    className={`relative rounded-t-full overflow-hidden border-2 border-[#ffd700]/60 shadow-lg transition-transform hover:scale-105 hover:z-20 ${
                      isCenter
                        ? "w-16 h-24 sm:w-24 sm:h-32 z-10 ring-2 ring-[#ffd700]"
                        : "w-12 h-20 sm:w-20 sm:h-28 opacity-90"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Khách mời & Chuyên gia ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                );
              })}
            </div>
            {/* Golden Stage Border Line */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ffd700] to-transparent shadow-[0_0_12px_#ffd700]" />
          </div>
        </div>
      </section>

      {/* 3. SECTION: 600 CƠ HỘI PHẪU THUẬT MIỄN PHÍ */}
      <section
        id="dai-hoi"
        className="relative py-14 bg-gradient-to-b from-[#020629] via-[#05135c] to-[#02072d] border-t border-blue-900/30"
      >
        {/* Decorative Gift Watermark */}
        <Gift className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-28 h-28 text-blue-400/10 rotate-12 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left 6 Cols: Title + 2x2 Free Gift Boxes */}
          <div className="md:col-span-6">
            <h2 className="text-center text-base sm:text-xl font-bold uppercase tracking-wide text-[#ffd700] mb-7">
              {data.business.aboutTitle || "600 CƠ HỘI PHẪU THUẬT MIỄN PHÍ"}
            </h2>

            <div className="grid grid-cols-2 gap-5 max-w-md mx-auto">
              {(data.freeSurgeryBoxes || thamMyVien4DefaultData.freeSurgeryBoxes).map(
                (box) => (
                  <BlueGoldGiftCard
                    key={box.id}
                    box={box}
                    onSelect={(srv) =>
                      openRegistration(`Đăng ký suất Miễn Phí 100%: ${srv}`)
                    }
                  />
                )
              )}
            </div>
          </div>

          {/* Right 6 Cols: Smiling Ambassador Couple */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md h-80 sm:h-96 rounded-xl overflow-hidden border border-blue-400/30 shadow-[0_0_35px_rgba(0,102,255,0.3)]">
              <img
                src={data.coupleBannerImage1}
                alt="Khách hàng nhận tài trợ phẫu thuật thẩm mỹ"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02072d] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="inline-block bg-[#ffd700] text-[#030938] text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow">
                  Tài trợ thẩm mỹ 100% chi phí
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: QUYỀN LỢI KHÁCH HÀNG THAM DỰ */}
      <section
        id="tri-an"
        className="relative py-14 bg-gradient-to-b from-[#02072d] via-[#061769] to-[#02072d] border-t border-blue-900/30"
      >
        <Gift className="hidden lg:block absolute right-12 top-1/3 w-28 h-28 text-blue-400/10 rotate-12 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left 7 Cols: 3 Top Blue Gift Boxes + 3 Bottom Navy/Gold Privilege Boxes */}
          <div className="md:col-span-7">
            {/* Top Row: 3 Blue Gift Boxes */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {(data.extraGiftBoxes || thamMyVien4DefaultData.extraGiftBoxes).map(
                (box) => (
                  <BlueGoldGiftCard
                    key={box.id}
                    box={box}
                    onSelect={(srv) =>
                      openRegistration(`Đăng ký suất Miễn Phí 100%: ${srv}`)
                    }
                  />
                )
              )}
            </div>

            {/* Subheading */}
            <h3 className="text-center text-sm sm:text-lg font-bold uppercase tracking-wide text-[#ffd700] mb-5">
              QUYỀN LỢI KHÁCH HÀNG THAM DỰ
            </h3>

            {/* Bottom Row: 3 Dark Navy/Gold Outlined Gift Boxes */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {(
                data.attendeePrivileges ||
                thamMyVien4DefaultData.attendeePrivileges
              ).map((priv) => (
                <div
                  key={priv.id}
                  onClick={() =>
                    openRegistration(`${priv.ribbonText} ${priv.valueText} ${priv.subText}`)
                  }
                  className="group cursor-pointer flex flex-col items-center text-center"
                >
                  {/* Gold Ribbon Header */}
                  <div className="bg-gradient-to-r from-[#ffd700] via-[#fff2a6] to-[#d49b00] text-[#030938] text-[9px] sm:text-[10px] font-extrabold px-2.5 py-0.5 rounded-t-xs w-full truncate">
                    {priv.ribbonText}
                  </div>
                  {/* Dark Navy Box with Gold/White Border */}
                  <div className="w-full bg-[#030b3d]/90 border border-white/40 group-hover:border-[#ffd700] rounded-b-md p-3 flex-1 flex flex-col items-center justify-center transition-colors">
                    {priv.unitText && (
                      <span className="text-[10px] font-bold text-[#ffd700] self-end">
                        {priv.unitText}
                      </span>
                    )}
                    <span className="text-base sm:text-xl font-black text-[#ffd700] leading-tight">
                      {priv.valueText}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-white/90 mt-1 leading-tight">
                      {priv.subText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Cols: Celebrity/Client Duo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-80 sm:h-96 rounded-xl overflow-hidden border border-blue-400/30 shadow-[0_0_35px_rgba(0,102,255,0.3)]">
              <img
                src={data.coupleBannerImage2}
                alt="Khách hàng tỏa sáng tại Đại hội thẩm mỹ"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02072d] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: GẶP GỠ TRỰC TIẾP HÀNG LOẠT ĐỆ NHẤT THẨM MỸ JW */}
      <section
        id="khach-hang"
        className="relative py-16 bg-gradient-to-b from-[#02072d] via-[#071a75] to-[#020626] border-t border-blue-900/30"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm sm:text-base uppercase tracking-widest text-blue-200 mb-1">
              GẶP GỠ TRỰC TIẾP
            </p>
            <h2 className="text-lg sm:text-2xl font-extrabold uppercase tracking-wide text-[#ffd700]">
              HÀNG LOẠT ĐỆ NHẤT THẨM MỸ JW
            </h2>
          </div>

          {/* Main Before/After Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left 6 Cols: Large After Portrait */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-xl overflow-hidden border-2 border-[#ffd700]/60 shadow-[0_0_30px_rgba(0,110,255,0.4)]">
                <img
                  src={currentCase.afterImage}
                  alt={currentCase.personName}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-2.5 left-2.5 bg-[#0051d5] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded">
                  Sau thẩm mỹ
                </span>
              </div>
            </div>

            {/* Right 6 Cols: Circular Before Portrait + Story Info */}
            <div className="md:col-span-6 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white shadow-lg mb-4">
                <img
                  src={currentCase.beforeImage}
                  alt={`Trước thẩm mỹ - ${currentCase.personName}`}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-1 inset-x-0 bg-black/65 text-[9px] text-white font-semibold py-0.5">
                  Trước đây
                </span>
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                {currentCase.personTitle}{" "}
                <span className="text-[#ffd700] uppercase">
                  {currentCase.personName}
                </span>
              </h3>
              <p className="text-xs text-blue-100 max-w-xs leading-relaxed mb-3">
                {currentCase.servicePerformed}
              </p>
              <p className="text-[11px] italic text-blue-200/80 max-w-xs">
                “{currentCase.storyQuote}”
              </p>

              {/* Case Switcher Dots */}
              <div className="flex items-center gap-2 mt-5">
                {cases.map((c, idx) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveCaseIndex(idx)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-colors cursor-pointer ${
                      idx === activeCaseIndex
                        ? "bg-[#ffd700] text-[#030938]"
                        : "bg-blue-950/80 text-blue-200 hover:bg-blue-900"
                    }`}
                  >
                    {c.personName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-[11px] text-blue-200/80 mt-8">
            (*)Lưu ý: Kết quả thẩm mỹ phụ thuộc vào cơ địa mỗi người
          </p>
        </div>
      </section>

      {/* 6. SECTION: ĐỘI NGŨ CHUYÊN GIA & BÁC SĨ (STAGE SPOTLIGHTS) */}
      <section
        id="bac-si"
        className="relative py-16 bg-[radial-gradient(ellipse_at_bottom,_#0d2ca8_0%,_#030938_65%,_#01041a_100%)] border-t border-blue-900/30"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* 3 Doctors Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end mb-4">
            {(data.team || thamMyVien4DefaultData.team || []).map((doc, idx) => (
              <div key={doc.id} className="flex flex-col items-center">
                <div
                  className={`w-44 sm:w-48 overflow-hidden rounded-t-2xl border-b-2 border-[#ffd700]/60 mb-3 ${
                    idx === 1 ? "h-60 sm:h-64" : "h-56"
                  }`}
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  {doc.name}
                </h3>
                <p className="text-[11px] text-blue-200 mt-0.5">{doc.position}</p>
              </div>
            ))}
          </div>

          {/* Red Pill CTA Button: Gặp chuyên gia */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => openRegistration("Đăng ký gặp trực tiếp Chuyên gia & Bác sĩ")}
              className="bg-[#e50914] hover:bg-[#c40710] text-white text-xs font-bold px-9 py-2 rounded-full shadow-[0_0_20px_rgba(229,9,20,0.6)] transition-all cursor-pointer"
            >
              Gặp chuyên gia
            </button>
          </div>
        </div>
      </section>

      {/* 7. SECTION: TIME LINE CHƯƠNG TRÌNH + VIDEO GALA */}
      <section
        id="timeline"
        className="py-16 bg-gradient-to-b from-[#020624] to-[#04104d] border-t border-blue-900/40"
      >
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 6 Cols: Timeline Table */}
          <div className="lg:col-span-6">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#5ca8ff] mb-4">
              TIME LINE CHƯƠNG TRÌNH
            </h2>

            <div className="space-y-2.5 text-xs text-white/95 mb-5">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#5ca8ff] shrink-0" />
                <span className="font-semibold">
                  {data.eventDateText || "7h00 ngày 8 tháng 12"}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5ca8ff] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {data.eventVenueText ||
                    "Trung tâm hội nghị THE ADORA DYNASTY - 1A Tôn Thất Tùng, P.Phạm Ngũ Lão, Q.1, TP.HCM"}
                </span>
              </div>
            </div>

            {/* Dashed Schedule Table */}
            <div className="border border-dashed border-blue-400/50 divide-y divide-dashed divide-blue-400/40 text-xs">
              {(data.timelineSlots || thamMyVien4DefaultData.timelineSlots).map(
                (slot) => (
                  <div
                    key={slot.id}
                    className="grid grid-cols-12 bg-[#030b3b]/60 hover:bg-[#07196e]/60 transition-colors"
                  >
                    <div className="col-span-5 py-2.5 px-3 font-bold text-white border-r border-dashed border-blue-400/40 text-center">
                      {slot.time}
                    </div>
                    <div className="col-span-7 py-2.5 px-4 text-blue-100">
                      {slot.activity}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right 6 Cols: Gala Logo + Video Preview Box */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Golden Event Title */}
            <div className="text-center mb-4">
              <span className="block text-xs font-bold uppercase tracking-widest text-white">
                {data.eventSubTitle || "ĐẠI HỘI THẨM MỸ"}
              </span>
              <div className="inline-flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black uppercase bg-gradient-to-b from-[#fff4b0] via-[#ffd700] to-[#d48b00] bg-clip-text text-transparent">
                  {data.eventMainTitle || "TỎA SÁNG CÙNG SAO"}
                </span>
                <Star className="w-7 h-7 text-[#ffd700] fill-[#ffd700]" />
              </div>
            </div>

            {/* Video Player Card */}
            <div className="w-full bg-[#020833] border border-blue-500/40 rounded overflow-hidden shadow-2xl">
              <div className="relative h-56 sm:h-64 overflow-hidden flex items-center justify-center">
                <img
                  src={data.videoThumbnailImage}
                  alt="Video Đại Hội Thẩm Mỹ Tỏa Sáng Cùng Sao"
                  className="absolute inset-0 w-full h-full object-cover opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020833] via-[#041461]/50 to-transparent" />

                {videoPlaying ? (
                  <div className="relative z-10 bg-black/80 p-6 rounded-lg text-center max-w-xs">
                    <Sparkles className="w-8 h-8 text-[#ffd700] mx-auto mb-2" />
                    <p className="text-xs text-white font-semibold mb-3">
                      Video giới thiệu Đại Hội Thẩm Mỹ — {data.business.name}
                    </p>
                    <button
                      type="button"
                      onClick={() => openRegistration("Nhận vé mời VIP Đại Hội Thẩm Mỹ")}
                      className="bg-[#ffd700] text-[#030938] text-[11px] font-extrabold uppercase px-4 py-1.5 rounded cursor-pointer"
                    >
                      Nhận vé mời ngay
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setVideoPlaying(true)}
                    aria-label="Phát video"
                    className="relative z-10 w-16 h-11 rounded-xl bg-[#ff0000] hover:bg-[#d90000] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,0,0,0.75)] transition-transform hover:scale-110 cursor-pointer"
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>
                )}
              </div>

              {/* Video Footer Bar */}
              <div className="bg-[#04125c] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] border-t border-blue-400/30">
                <div className="flex items-center gap-3">
                  <span className="text-blue-200">
                    Xem trên <strong className="text-white">YouTube</strong>
                  </span>
                  <span className="border-l border-blue-400/40 pl-3 font-extrabold text-[#ffd700]">
                    08/12
                  </span>
                </div>

                <a
                  href={`tel:${galaHotline.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#ffd700] to-[#e09f00] text-[#030938] font-black px-3 py-1 rounded-full text-[11px]"
                >
                  <span>GỌI NGAY: {galaHotline}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Copyright */}
      <footer className="bg-[#010417] py-4 border-t border-blue-950 text-center text-[11px] text-blue-300/70">
        © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong> —{" "}
        {data.business.address}
      </footer>

      {/* Registration Modal */}
      {registerModalOpen && (
        <div
          id="dang-ky-dai-hoi"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-gradient-to-b from-[#071970] to-[#020836] border border-[#ffd700]/60 rounded-xl max-w-md w-full p-6 text-white shadow-2xl relative">
            <button
              type="button"
              onClick={() => setRegisterModalOpen(false)}
              className="absolute top-4 right-4 text-blue-200 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#ffd700] mb-1">
              <Award className="w-5 h-5" />
              <h3 className="text-base font-extrabold uppercase">
                Đăng Ký Tham Dự Đại Hội
              </h3>
            </div>
            <p className="text-xs text-blue-200 mb-5">{selectedGiftTopic}</p>

            {registerSuccess ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#ffd700] mx-auto mb-3" />
                <p className="font-bold text-sm text-white mb-1">
                  Đăng ký giữ suất thành công!
                </p>
                <p className="text-xs text-blue-200 mb-5">
                  Ban tổ chức <strong>{data.business.name}</strong> sẽ gửi mã vé mời VIP qua
                  SMS cho bạn ngay.
                </p>
                <button
                  type="button"
                  onClick={() => setRegisterModalOpen(false)}
                  className="bg-[#ffd700] text-[#030938] text-xs font-extrabold uppercase px-6 py-2 rounded-full cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRegisterSuccess(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block font-semibold text-blue-100 mb-1">
                    Họ và tên khách tham dự *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ và tên..."
                    className="w-full bg-[#020629] border border-blue-400/50 rounded px-3 py-2 text-white placeholder:text-blue-300/50 focus:outline-none focus:border-[#ffd700]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-blue-100 mb-1">
                    Số điện thoại nhận mã vé *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Nhập số điện thoại..."
                    className="w-full bg-[#020629] border border-blue-400/50 rounded px-3 py-2 text-white placeholder:text-blue-300/50 focus:outline-none focus:border-[#ffd700]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-blue-100 mb-1">
                    Dịch vụ mong muốn nhận tài trợ
                  </label>
                  <input
                    type="text"
                    value={selectedGiftTopic}
                    onChange={(e) => setSelectedGiftTopic(e.target.value)}
                    className="w-full bg-[#020629] border border-blue-400/50 rounded px-3 py-2 text-white focus:outline-none focus:border-[#ffd700]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ffd700] via-[#ffe875] to-[#d49b00] text-[#030938] font-black uppercase py-2.5 rounded-full shadow-lg cursor-pointer"
                >
                  NHẬN VÉ MỜI &amp; ƯU ĐÃI NGAY
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
