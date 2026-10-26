"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Moon,
  Brain,
  Smile,
  HeartPulse,
  Bell,
  AlertTriangle,
  Award,
  CheckCircle2,
  Star,
  Menu,
  X,
  MessageCircle,
  Leaf
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { phongKham4DefaultData, type PhongKham4Data } from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<PhongKham4Data>(phongKham4DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroFormSubmitted, setHeroFormSubmitted] = useState(false);
  const [orderFormSubmitted, setOrderFormSubmitted] = useState(false);
  const [heroForm, setHeroForm] = useState({ name: "", phone: "" });
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "1 Liệu trình (2 hộp)",
    note: ""
  });

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "tamanlactien@vanxuanduong.vn";

  /* Signature Herbal Mortar & Pestle Divider matching PK007 */
  const renderHerbalDivider = (isLight = false) => (
    <div className="flex items-center justify-center gap-2.5 mt-2 mb-8">
      <div className={`w-8 h-[1.5px] ${isLight ? "bg-emerald-300/60" : "bg-[#1b5e34]"}`} />
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          isLight ? "bg-emerald-400/20 text-emerald-200" : "bg-[#1b5e34]/10 text-[#1b5e34]"
        }`}
      >
        <Leaf className="w-3.5 h-3.5" />
      </div>
      <div className={`w-8 h-[1.5px] ${isLight ? "bg-emerald-300/60" : "bg-[#1b5e34]"}`} />
    </div>
  );

  /* Realistic 3D Tâm An Lạc Tiên Herbal Box + Capsule Bottle Showcase */
  const renderHerbalProductPack = (compact = false) => (
    <div
      className={`relative flex items-end justify-center gap-3 select-none ${
        compact ? "scale-90" : ""
      }`}
    >
      {/* Left: Green & White Herbal Box */}
      <div className="w-28 sm:w-32 h-44 sm:h-48 rounded-xs bg-gradient-to-b from-[#2e7d32] via-white to-[#43a047] shadow-[0_14px_28px_rgba(0,0,0,0.3)] border border-emerald-700/40 p-2.5 flex flex-col justify-between text-center relative overflow-hidden">
        <div className="bg-[#1b5e20] text-white text-[7px] font-bold uppercase py-0.5 px-1 rounded-xs">
          THẢO DƯỢC ĐÔNG Y
        </div>
        <div className="my-auto py-2 bg-white/95 rounded-xs px-1 shadow-xs border border-emerald-100">
          <div className="w-6 h-6 rounded-full bg-[#1b5e20] text-white mx-auto flex items-center justify-center mb-1">
            <Leaf className="w-3.5 h-3.5" />
          </div>
          <p className="text-[11px] font-black text-[#1b5e20] leading-tight uppercase">
            TÂM AN
            <br />
            LẠC TIÊN
          </p>
          <p className="text-[7px] text-slate-500 mt-0.5 font-semibold">ĐẶC TRỊ MẤT NGỦ</p>
        </div>
        <div className="text-[7px] font-extrabold text-white bg-[#1b5e20]/90 py-0.5 rounded-xs">
          {data.business.name}
        </div>
      </div>

      {/* Right: White Medicinal Capsule Bottle with Green Cap */}
      <div className="flex flex-col items-center -ml-2 z-10">
        {/* Ribbed Bottle Cap */}
        <div className="w-16 h-5 rounded-t-md bg-gradient-to-r from-slate-200 via-white to-slate-300 border border-slate-300 shadow-xs" />
        <div className="w-14 h-2 bg-slate-200 border-x border-slate-300" />
        {/* Bottle Body */}
        <div className="w-24 sm:w-28 h-36 sm:h-40 rounded-2xl bg-gradient-to-r from-slate-100 via-white to-slate-200 shadow-[0_14px_28px_rgba(0,0,0,0.35)] border border-slate-300 flex flex-col justify-center px-2 py-3 text-center relative overflow-hidden">
          <div className="bg-gradient-to-b from-[#2e7d32] to-[#1b5e20] h-3 w-full rounded-t-xs mb-1.5" />
          <div className="w-7 h-7 rounded-full border border-[#1b5e20] text-[#1b5e20] mx-auto flex items-center justify-center mb-1">
            <Leaf className="w-3.5 h-3.5" />
          </div>
          <p className="text-[10px] font-black text-[#1b5e20] uppercase tracking-tight">
            {data.productName}
          </p>
          <span className="text-[7px] text-slate-600 font-semibold mt-0.5">
            Hộp 60 viên hoàn mềm
          </span>
          <div className="bg-gradient-to-b from-[#43a047] to-[#1b5e20] h-2.5 w-full rounded-b-xs mt-2" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#1b5e34] selection:text-white relative">
      {/* Floating Messenger Button */}
      <a
        href="#dat-mua"
        className="fixed right-4 top-36 z-40 w-10 h-10 rounded-full bg-[#1890ff] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title="Tư vấn trực tuyến cùng Bác sĩ Đông y"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>

      {/* Header + Hero Section (Deep Herbal Leaf Green Backdrop) */}
      <section className="relative bg-gradient-to-b from-[#2d6a31] via-[#1c4f29] to-[#133b1f] text-white overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt={data.productName}
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />

        {/* Top Navigation Bar with Center Circular Emblem */}
        <header className="relative z-20 border-b border-white/15 bg-black/15 backdrop-blur-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Left Nav Links */}
            <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-emerald-100">
              <a href="#" className="text-amber-300">
                HOME
              </a>
              <a href="#lieu-trinh" className="hover:text-amber-300 transition-colors">
                LIỆU TRÌNH
              </a>
              <a href="#gioi-thieu" className="hover:text-amber-300 transition-colors">
                GIỚI THIỆU
              </a>
              <a href="#dau-hieu" className="hover:text-amber-300 transition-colors">
                DẤU HIỆU
              </a>
              <a href="#bien-chung" className="hover:text-amber-300 transition-colors">
                BIẾN CHỨNG
              </a>
            </nav>

            {/* Center Circular Yin-Yang Herbal Emblem Logo */}
            <a
              href="#"
              className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#144223] border-2 border-amber-300/80 shadow-lg shrink-0 mx-auto lg:mx-0"
            >
              <Leaf className="w-6 h-6 text-amber-300" />
              <span className="text-[6px] font-extrabold uppercase tracking-tighter text-white text-center leading-none mt-0.5 px-1">
                {data.business.name}
              </span>
            </a>

            {/* Right Nav Links */}
            <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-emerald-100">
              <a href="#san-pham" className="hover:text-amber-300 transition-colors">
                SẢN PHẨM
              </a>
              <a href="#hieu-qua" className="hover:text-amber-300 transition-colors">
                HIỆU QUẢ
              </a>
              <a href="#tin-dung" className="hover:text-amber-300 transition-colors">
                TIN DÙNG
              </a>
              <a href="#cam-nhan" className="hover:text-amber-300 transition-colors">
                CẢM NHẬN
              </a>
              <a href="#dat-mua" className="hover:text-amber-300 transition-colors">
                ĐẶT MUA
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#10331a] px-4 py-3 grid grid-cols-2 gap-2 text-xs font-bold uppercase border-t border-white/15">
              {[
                { href: "#lieu-trinh", label: "LIỆU TRÌNH" },
                { href: "#gioi-thieu", label: "GIỚI THIỆU" },
                { href: "#dau-hieu", label: "DẤU HIỆU" },
                { href: "#bien-chung", label: "BIẾN CHỨNG" },
                { href: "#san-pham", label: "SẢN PHẨM" },
                { href: "#hieu-qua", label: "HIỆU QUẢ" },
                { href: "#tin-dung", label: "TIN DÙNG" },
                { href: "#cam-nhan", label: "CẢM NHẬN" },
                { href: "#dat-mua", label: "ĐẶT MUA" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-emerald-100 hover:text-amber-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-14">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white">
              {data.hero.title}
            </h1>
            <p className="text-sm sm:text-base font-extrabold uppercase text-[#f6e05e] mt-1">
              {data.hero.subtitle}
            </p>
            <p className="text-[11px] sm:text-xs text-emerald-100 mt-1 font-medium">
              {data.licenseNumber}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Herbal Box & Bottle */}
            <div className="md:col-span-6 flex justify-center">
              {renderHerbalProductPack(false)}
            </div>

            {/* Right: Translucent Glass Consultation Box */}
            <div className="md:col-span-6">
              <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded p-6 max-w-sm mx-auto shadow-2xl text-center">
                <h2 className="text-sm sm:text-base font-extrabold uppercase text-white mb-1">
                  ĐĂNG KÝ TƯ VẤN
                </h2>
                <p className="text-[11px] text-emerald-100 mb-4 leading-relaxed">
                  Chữa Mất ngủ mãn tính phải có bí quyết.
                  <br />
                  Hãy để lại SĐT để chúng tôi tư vấn cho bạn.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setHeroFormSubmitted(true);
                    setTimeout(() => setHeroFormSubmitted(false), 4000);
                  }}
                  className="space-y-2.5"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên"
                    value={heroForm.name}
                    onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3 py-2 rounded-xs focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    value={heroForm.phone}
                    onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3 py-2 rounded-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#0e4221] hover:bg-[#082c15] text-white text-xs font-extrabold uppercase tracking-wider px-8 py-2 rounded-xs border border-emerald-400/30 shadow-md transition-colors cursor-pointer"
                  >
                    TƯ VẤN
                  </button>
                  {heroFormSubmitted && (
                    <p className="text-[11px] text-amber-300 font-semibold pt-1">
                      Đã nhận thông tin! Bác sĩ nhà thuốc sẽ gọi tư vấn ngay.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Chỉ Một Liệu Trình Hết Ngay (4 Illustrated Badges) */}
      <section id="lieu-trinh" className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#163824]">
            Chỉ Một Liệu Trình Hết Ngay
          </h2>
          {renderHerbalDivider(false)}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {(data.courseBenefits || []).map((item, idx) => {
              const colors = [
                "bg-amber-50 text-amber-500 border-amber-200",
                "bg-orange-50 text-orange-500 border-orange-200",
                "bg-yellow-50 text-yellow-600 border-yellow-200",
                "bg-emerald-50 text-emerald-600 border-emerald-200"
              ];
              return (
                <div key={item.id} className="flex flex-col items-center px-2">
                  <div
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-3 shadow-xs ${
                      colors[idx % colors.length]
                    }`}
                  >
                    {item.icon === "moon" && <Moon className="w-8 h-8" />}
                    {item.icon === "brain" && <Brain className="w-8 h-8" />}
                    {item.icon === "smile" && <Smile className="w-8 h-8" />}
                    {item.icon === "heart" && <HeartPulse className="w-8 h-8" />}
                  </div>
                  <p className="text-xs font-bold text-slate-700 leading-snug max-w-[200px]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Lịch Sử Vạn Xuân Đường & Công Nghệ Chiết Xuất Hiện Đại */}
      <section id="gioi-thieu" className="border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: History of Van Xuan Duong */}
          <div className="bg-white px-6 sm:px-12 py-12 md:py-16 flex flex-col justify-center max-w-xl ml-auto">
            <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#1b5e34]">
              {data.business.aboutTitle || data.historySection.title}
            </h2>
            {renderHerbalDivider(false)}

            <ul className="space-y-4 text-xs text-slate-700 leading-relaxed">
              {(data.business.aboutText?.length
                ? data.business.aboutText
                : data.historySection.items
              ).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1b5e34]/10 text-[#1b5e34] flex items-center justify-center shrink-0 mt-0.5">
                    <Leaf className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <Bell className="w-5 h-5 text-amber-500 mx-auto mb-1 fill-current" />
              <p className="text-xs font-bold text-[#c53030] leading-snug">
                {data.historySection.warningNote}
              </p>
            </div>
          </div>

          {/* Right Column: Modern Extraction & Formulation Technology */}
          <div className="bg-[#231915] text-white px-6 sm:px-12 py-12 md:py-16 flex flex-col justify-between">
            <div className="max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
                <div className="sm:col-span-5">
                  <h3 className="text-lg sm:text-xl font-extrabold uppercase leading-tight text-white">
                    {data.historySection.techTitle}
                  </h3>
                </div>
                <div className="sm:col-span-7 text-[11px] text-amber-100/80 leading-relaxed">
                  {data.historySection.techDescription}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {(data.historySection.labImages || []).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-xs overflow-hidden border border-white/20 bg-black"
                  >
                    <img src={img} alt="Dây chuyền GMP" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Bottom GMP / ISO / TQM Certification Badges */}
              <div className="text-center pt-2 border-t border-white/10">
                <p className="text-[10px] text-amber-200/80 mb-3">
                  Đơn vị tự hào đạt đầy đủ các chứng chỉ dược phẩm quốc tế:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {["GMP WHO", "ISO 9001", "TQM", "HUY CHƯƠNG VÀNG VÌ SỨC KHỎE"].map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 text-[9px] font-black px-2.5 py-1 rounded-full shadow-xs"
                    >
                      <Award className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Dấu Hiệu Nguy Hiểm Của Mất Ngủ (Dark Night Slate #1b2938) */}
      <section id="dau-hieu" className="py-14 md:py-18 bg-[#1b2938] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Sleepless Person Visual */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-slate-600/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
                  alt="Mất ngủ kéo dài"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1b2938]/30" />
              </div>
            </div>

            {/* Right 6 Danger Signs */}
            <div className="md:col-span-8">
              <h2 className="text-center text-lg sm:text-xl font-extrabold text-white">
                Dấu Hiệu Nguy Hiểm Của Mất Ngủ
              </h2>
              {renderHerbalDivider(true)}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs text-slate-200">
                {(data.insomniaSigns || []).map((sign, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/10 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Leaf className="w-3.5 h-3.5" />
                    </span>
                    <span className="leading-relaxed">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Mất Ngủ Mãn Tính Dẫn Đến Biến Chứng Nguy Hiểm (ĐỘT QUỴ) */}
      <section id="bien-chung" className="py-14 md:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#163824]">
            {data.complicationSection.heading}
          </h2>
          {renderHerbalDivider(false)}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Circular Headache Photo */}
            <div className="md:col-span-6 flex justify-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-xl border-8 border-slate-100">
                <img
                  src={data.complicationSection.patientImage}
                  alt="Biến chứng đột quỵ do mất ngủ"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>

            {/* Right Warning Block */}
            <div className="md:col-span-6 text-center space-y-3 px-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded bg-amber-400 text-slate-900 shadow-xs">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#d91c24]">
                {data.complicationSection.alertTitle}
              </h3>
              {renderHerbalDivider(false)}
              <p className="text-xs font-semibold text-slate-700 leading-relaxed uppercase">
                {data.complicationSection.mainWarning}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-2">
                {data.complicationSection.subWarning}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: TÂM AN LẠC TIÊN - Giải Pháp Điều Trị Mất Ngủ Mãn Tính */}
      <section id="san-pham" className="py-16 md:py-20 bg-[#eff3ef]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#163824]">
              {data.solutionSection.heading}
            </h2>
            <p className="text-base sm:text-lg font-extrabold text-[#1b5e34] mt-0.5">
              {data.solutionSection.subheading}
            </p>
          </div>
          {renderHerbalDivider(false)}

          {/* 3 Columns: Commitment + Product Pack + Quick Order Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            {/* Left Commitment Text */}
            <div className="lg:col-span-4 text-center space-y-3 text-xs text-slate-700 leading-relaxed">
              <h3 className="text-sm font-extrabold text-[#163824]">
                {data.solutionSection.commitmentTitle}
              </h3>
              <p>{data.solutionSection.herbsSummary}</p>
              <p>{data.solutionSection.benefitsSummary}</p>
            </div>

            {/* Center Product Pack */}
            <div className="lg:col-span-4 flex justify-center bg-gradient-to-b from-[#65c13e] to-[#2e7d32] p-6 rounded shadow-lg">
              {renderHerbalProductPack(true)}
            </div>

            {/* Right Quick Consultation Form */}
            <div className="lg:col-span-4 space-y-2.5">
              <h3 className="text-center text-sm font-extrabold uppercase text-[#163824]">
                {data.productName}
              </h3>
              <p className="text-xs font-extrabold text-[#d91c24]">
                {data.solutionSection.priceHighlight}
              </p>
              <p className="text-[11px] font-bold text-[#163824]">
                {data.solutionSection.promoHighlight}
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setHeroFormSubmitted(true);
                }}
                className="space-y-2 pt-1"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên"
                  className="w-full bg-white border border-slate-200 text-xs px-3 py-2 rounded-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại"
                  className="w-full bg-white border border-slate-200 text-xs px-3 py-2 rounded-xs"
                />
                <div className="text-center pt-1">
                  <button
                    type="submit"
                    className="bg-[#0e4221] hover:bg-[#082c15] text-white text-xs font-extrabold uppercase px-10 py-2 rounded-xs cursor-pointer"
                  >
                    TƯ VẤN
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Upgraded Product Comparison Banner matching screenshot */}
          <div className="max-w-lg mx-auto bg-gradient-to-b from-[#9ae66e] to-[#4caf50] rounded p-4 shadow-md border-2 border-white text-center">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase text-white drop-shadow-xs mb-3">
              GIÁ KHÔNG ĐỔI VỚI CHẤT LƯỢNG TỐT HƠN
            </h4>
            <div className="grid grid-cols-11 items-center gap-2 bg-white/90 rounded p-3">
              <div className="col-span-5 text-center">
                <span className="text-[10px] font-extrabold uppercase text-slate-700 block mb-1">
                  SẢN PHẨM CŨ
                </span>
                <div className="text-[10px] text-slate-500 font-semibold">
                  Dạng viên nang thường
                </div>
              </div>
              <div className="col-span-1 flex justify-center">
                <span className="bg-[#2e7d32] text-white text-xs font-black px-2 py-1 rounded">
                  ➔
                </span>
              </div>
              <div className="col-span-5 text-center">
                <span className="text-[10px] font-extrabold uppercase text-[#d91c24] block mb-1">
                  ĐÃ CẢI TIẾN
                </span>
                <div className="text-[10px] text-[#1b5e20] font-bold">
                  Tinh chất cô đặc gấp 2 lần
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Tại Sao TÂM AN LẠC TIÊN Lại Rất Hiệu Quả (11 Herbal Ingredients Diagram) */}
      <section id="hieu-qua" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#163824]">
            Tại Sao {data.productName} Lại Rất Hiệu Quả
            <br />
            Trong Việc Điều Trị ?
          </h2>
          {renderHerbalDivider(false)}

          {/* Green-Bordered Radial Herbal Diagram Frame */}
          <div className="border-2 border-[#4caf50] rounded-xs p-5 sm:p-8 bg-white shadow-sm">
            <p className="text-xs sm:text-[13px] font-bold text-[#1b5e20] text-center mb-6">
              Với sự kết hợp tinh túy từng thành phần với nhau đã tạo nên phương thuốc với dược tính
              tối đa. Để đảm bảo chữa khỏi bệnh cho bệnh nhân sử dụng đúng liệu trình.
            </p>

            {/* Top Herb (Bạch Thược) */}
            <div className="max-w-xs mx-auto flex items-center gap-3 mb-6 bg-emerald-50/60 p-2.5 rounded border border-emerald-100">
              <img
                src={data.herbalIngredients[5]?.image}
                alt={data.herbalIngredients[5]?.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#4caf50] shrink-0"
              />
              <div className="text-[11px] leading-tight">
                <strong className="text-[#d97706] uppercase block">
                  {data.herbalIngredients[5]?.name}
                </strong>
                <span className="text-slate-600">{data.herbalIngredients[5]?.benefit}</span>
              </div>
            </div>

            {/* 3-Column Layout: Left 5 Herbs + Center Product Pack + Right 5 Herbs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left 5 Herbs */}
              <div className="lg:col-span-4 space-y-4">
                {(data.herbalIngredients || [])
                  .filter((h) => h.side === "left")
                  .map((herb) => (
                    <div key={herb.id} className="flex items-center gap-3">
                      <img
                        src={herb.image}
                        alt={herb.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shrink-0 shadow-xs"
                      />
                      <div className="text-[11px] leading-snug">
                        <strong className="text-[#d97706] uppercase block">{herb.name}</strong>
                        <span className="text-slate-600">{herb.benefit}</span>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Center Product Pack */}
              <div className="lg:col-span-4 flex justify-center py-4">
                {renderHerbalProductPack(false)}
              </div>

              {/* Right 5 Herbs */}
              <div className="lg:col-span-4 space-y-4">
                {(data.herbalIngredients || [])
                  .filter((h) => h.side === "right")
                  .map((herb) => (
                    <div key={herb.id} className="flex items-center justify-between gap-3">
                      <div className="text-[11px] leading-snug text-right flex-1">
                        <strong className="text-[#d97706] uppercase block">{herb.name}</strong>
                        <span className="text-slate-600">{herb.benefit}</span>
                      </div>
                      <img
                        src={herb.image}
                        alt={herb.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shrink-0 shadow-xs"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Tại Sao Khách Hàng Lại Tin Dùng (Ministry of Health License + Recovery Timeline) */}
      <section id="tin-dung" className="py-16 md:py-20 bg-[#e6ebe6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#163824]">
            Tại Sao Khách Hàng Lại Tin Dùng
            <br />
            {data.productName}
          </h2>
          {renderHerbalDivider(false)}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: Ministry of Health Certificate Document */}
            <div className="flex flex-col items-center">
              <div className="bg-[#a81818] text-white text-xs font-extrabold uppercase px-5 py-2 rounded-xs mb-4 shadow-sm">
                {data.trustSection.licenseTabTitle}
              </div>

              <div className="w-full flex-1 bg-[#fdfcf7] border-4 border-double border-slate-400 p-6 shadow-lg text-center flex flex-col justify-between">
                <div>
                  <div className="grid grid-cols-2 gap-2 text-[9px] text-slate-600 border-b border-slate-200 pb-3 mb-4">
                    <div>
                      <strong className="block text-slate-800">BỘ Y TẾ</strong>
                      <span>CỤC AN TOÀN THỰC PHẨM</span>
                    </div>
                    <div>
                      <strong className="block text-slate-800">
                        CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                      </strong>
                      <span>Độc lập - Tự do - Hạnh phúc</span>
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-extrabold text-[#1b4d2e] uppercase leading-snug mb-3">
                    XÁC NHẬN CÔNG BỐ PHÙ HỢP QUY ĐỊNH
                    <br />
                    AN TOÀN THỰC PHẨM
                  </h3>

                  <div className="text-[10px] text-slate-600 text-left space-y-1.5 leading-relaxed bg-white p-3 border border-slate-200 rounded-xs">
                    <p>
                      <strong>Tổ chức, cá nhân:</strong> CÔNG TY CỔ PHẦN DƯỢC PHẨM{" "}
                      {data.business.name}
                    </p>
                    <p>
                      <strong>Địa chỉ:</strong> {data.business.address}
                    </p>
                    <p>
                      <strong>Cho sản phẩm:</strong> Thực phẩm bảo vệ sức khỏe{" "}
                      <strong className="text-[#1b5e20]">{data.productName}</strong>
                    </p>
                    <p>
                      Phù hợp quy định an toàn thực phẩm của Bộ Y Tế theo số cấp phép{" "}
                      <strong>12281/2016/ATTP-XNCB</strong>.
                    </p>
                  </div>
                </div>

                {/* Red Official Stamp */}
                <div className="mt-5 flex items-center justify-between px-4">
                  <span className="text-[9px] text-slate-400">Hồ sơ: 16.05.04.64251</span>
                  <div className="text-center">
                    <span className="text-[9px] font-bold text-slate-700 block">CỤC TRƯỞNG</span>
                    <div className="w-14 h-14 rounded-full border-2 border-red-600/80 text-red-600/85 flex items-center justify-center text-[7px] font-black uppercase mx-auto my-1 rotate-[-12deg]">
                      ĐÃ CHỨNG NHẬN
                      <br />
                      BỘ Y TẾ
                    </div>
                    <span className="text-[9px] font-bold text-slate-800">Đã ký duyệt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Efficacy After Use */}
            <div className="flex flex-col items-center">
              <div className="bg-[#a81818] text-white text-xs font-extrabold uppercase px-5 py-2 rounded-xs mb-4 shadow-sm">
                {data.trustSection.efficacyTabTitle}
              </div>

              <div className="w-full flex-1 bg-white border border-slate-200 p-5 shadow-lg flex flex-col justify-between">
                <div className="bg-gradient-to-b from-[#65c13e] to-[#2e7d32] p-5 rounded-xs flex justify-center mb-4">
                  {renderHerbalProductPack(true)}
                </div>

                <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  {(data.trustSection.milestones || []).map((ms, idx) => (
                    <p key={idx}>
                      <strong className="text-[#d91c24] underline">{ms.stage}</strong> {ms.detail}
                    </p>
                  ))}
                </div>

                <p className="text-center text-[11px] font-extrabold text-slate-800 pt-4 border-t border-slate-100 mt-4">
                  {data.licenseNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Cảm Nhận Của Khách Hàng (4 Patient Columns) */}
      <section id="cam-nhan" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#163824]">
            Cảm Nhận Của Khách Hàng
          </h2>
          {renderHerbalDivider(false)}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {(data.testimonials || []).map((t) => (
              <div key={t.id} className="flex flex-col items-center px-2">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-20 h-20 rounded-full object-cover border-2 border-emerald-600 shadow-md mb-2.5"
                />
                <div className="flex items-center justify-center gap-0.5 text-amber-400 mb-2">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-[11px] italic text-slate-600 leading-relaxed mb-3">
                  {t.content}
                </p>
                <p className="text-[11px] font-extrabold text-[#163824]">
                  {t.author}{" "}
                  <span className="font-normal text-slate-500">/ {t.role}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer — Đặt Ngay & Thời Gian Ưu Đãi Còn (Deep Herbal Green #143d23) */}
      <footer id="dat-mua" className="bg-gradient-to-b from-[#174928] to-[#0f311b] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Col: Emblem Logo & Address */}
            <div className="lg:col-span-3 space-y-3 text-xs text-emerald-100">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-20 h-20 rounded-full bg-[#10361d] border-2 border-amber-300 flex flex-col items-center justify-center mb-3 shadow-md">
                  <Leaf className="w-8 h-8 text-amber-300" />
                  <span className="text-[7px] font-extrabold uppercase text-white mt-0.5">
                    {data.business.name}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-amber-300 font-bold"
                >
                  {primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{primaryEmail}</span>
              </div>
            </div>

            {/* Center Col: Countdown Timer + Order Form */}
            <div className="lg:col-span-6 text-center">
              <h3 className="text-base sm:text-lg font-extrabold text-white">
                Đặt Ngay
                <br />
                Thời Gian Ưu Đãi Còn
              </h3>

              {/* 5 Countdown Boxes matching PK007 */}
              <div className="grid grid-cols-5 gap-2 max-w-md mx-auto my-5">
                {[
                  { num: "26", unit: "WEEKS" },
                  { num: "5", unit: "DAYS" },
                  { num: "1", unit: "HOUR" },
                  { num: "21", unit: "MIN" },
                  { num: "22", unit: "SEC" }
                ].map((box) => (
                  <div
                    key={box.unit}
                    className="bg-black/45 border border-white/25 rounded-xs py-2.5 px-1 flex flex-col items-center justify-center"
                  >
                    <span className="text-lg sm:text-xl font-extrabold text-white leading-none">
                      {box.num}
                    </span>
                    <span className="text-[8px] uppercase text-emerald-200 mt-1 border-t border-white/20 pt-1 w-full">
                      {box.unit}
                    </span>
                  </div>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOrderFormSubmitted(true);
                  setTimeout(() => setOrderFormSubmitted(false), 4000);
                }}
                className="space-y-2.5 max-w-md mx-auto"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên"
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3 py-2 rounded-xs"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={orderForm.email}
                    onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3 py-2 rounded-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3 py-2 rounded-xs"
                  />
                  <input
                    type="text"
                    placeholder="Số lượng"
                    value={orderForm.quantity}
                    onChange={(e) => setOrderForm({ ...orderForm, quantity: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3 py-2 rounded-xs"
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="Lời nhắn"
                  value={orderForm.note}
                  onChange={(e) => setOrderForm({ ...orderForm, note: e.target.value })}
                  className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3 py-2 rounded-xs"
                />
                <div className="pt-1">
                  <button
                    type="submit"
                    className="bg-[#0b3b1c] hover:bg-black text-white text-xs font-extrabold uppercase tracking-wider px-12 py-2.5 rounded-xs border border-emerald-400/40 shadow-md cursor-pointer"
                  >
                    ĐẶT MUA
                  </button>
                </div>
                {orderFormSubmitted && (
                  <p className="text-xs text-amber-300 font-bold flex items-center justify-center gap-1.5 pt-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Đặt mua thành công! Nhà thuốc sẽ liên hệ xác nhận đơn hàng.</span>
                  </p>
                )}
              </form>
            </div>

            {/* Right Col: Working Hours & Operating License */}
            <div className="lg:col-span-3 space-y-5 text-xs">
              <div>
                <h4 className="text-xs font-extrabold uppercase text-white mb-2">
                  THỜI GIAN LÀM VIỆC
                </h4>
                <p className="text-emerald-100/90">Làm việc tất cả các ngày trong tuần</p>
                <p className="text-emerald-100/90 mt-1">
                  Thời gian làm việc: <strong className="text-white">08h00 - 21h30</strong>
                </p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase text-white mb-2">
                  GIẤY PHÉP HOẠT ĐỘNG
                </h4>
                <p className="text-emerald-100/90">Số 0107228215</p>
                <p className="text-emerald-100/90 mt-0.5">
                  Sở KHĐT &amp; Bộ Y Tế Cấp Phép Lưu Hành.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#092111] py-3 text-center text-[11px] text-emerald-200/70 border-t border-white/10">
          © Bản quyền thuộc về <span className="text-white font-semibold">{data.business.name}</span>{" "}
          • Sản phẩm {data.productName}
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
