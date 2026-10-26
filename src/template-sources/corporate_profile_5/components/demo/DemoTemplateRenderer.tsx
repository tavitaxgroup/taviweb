"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  LayoutGrid,
  ArrowUpRight,
  ArrowRight,
  Play,
  Check,
  CheckCircle2,
  Package,
  Plane,
  Truck,
  Ship,
  Warehouse,
  ShieldCheck,
  Clock,
  Headphones,
  Target,
  Rocket,
  Star,
  User,
  MessageSquare,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile5DefaultData,
  type CorporateProfile5TemplateData
} from "@/template-sources/corporate_profile_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: CorporateProfile5TemplateData = adaptClonedTemplateData(
    corporateProfile5DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [feeModalOpen, setFeeModalOpen] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingResult, setTrackingResult] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Nhập hàng chính ngạch"
  });

  const primaryPhone = data.business.phone?.[0] || "0909 313 728";
  const primaryEmail = data.business.email?.[0] || "info@shipfast.vn";

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        fullName: "",
        email: "",
        phone: "",
        service: "Nhập hàng chính ngạch"
      });
    }, 3500);
  };

  const handleTrackingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;
    setTrackingResult(
      `Vận đơn #${trackingCode.toUpperCase()}: Đang thông quan tại Cảng Cát Lái TP.HCM — Dự kiến giao hàng trong 24h.`
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#0d333c] font-sans selection:bg-[#f37021] selection:text-white">
      {/* 1. TOPBAR (#08242b) + STICKY TEAL HEADER (#0d333c) */}
      <div className="bg-[#08242b] text-slate-300 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-[#f37021] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#f37021]" />
              <span>Số điện thoại : {primaryPhone}</span>
            </a>
            <a
              href={`mailto:${primaryEmail}`}
              className="inline-flex items-center gap-2 hover:text-[#f37021] transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#f37021]" />
              <span>Email : {primaryEmail}</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-400">
            <span>{data.business.address}</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#0d333c]/95 backdrop-blur-md text-white border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f37021] to-amber-400 flex items-center justify-center text-white shadow-md">
                <Ship className="w-6 h-6" />
              </div>
            )}
            <div className="leading-none">
              <span className="block text-lg sm:text-xl font-black tracking-wide text-white uppercase">
                {data.business.name}
              </span>
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#f37021] uppercase mt-1">
                GLOBAL LOGISTICS
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-200">
            <a href="#" className="text-[#f37021] transition">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#f37021] transition">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu" className="hover:text-[#f37021] transition">
              DỊCH VỤ +
            </a>
            <a href="#quy-trinh" className="hover:text-[#f37021] transition">
              QUY TRÌNH
            </a>
            <a href="#bang-gia" className="hover:text-[#f37021] transition">
              CHÍNH SÁCH +
            </a>
            <a href="#tin-tuc" className="hover:text-[#f37021] transition">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#f37021] transition">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => setFeeModalOpen(true)}
              aria-label="Tra cứu"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f37021] flex items-center justify-center text-white transition cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
            <span className="w-px h-5 bg-white/20" />
            <button
              type="button"
              onClick={() => setFeeModalOpen(true)}
              aria-label="Tiện ích"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f37021] flex items-center justify-center text-white transition cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <a
              href="#lien-he"
              className="bg-[#f37021] hover:bg-[#d95d12] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-md shadow-md inline-flex items-center gap-1.5 transition"
            >
              <span>LIÊN HỆ NGAY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-white/20 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#08242b] border-t border-white/10 px-5 py-4 space-y-2.5 text-xs font-bold uppercase tracking-wider">
            {[
              { label: "TRANG CHỦ", href: "#" },
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "DỊCH VỤ", href: "#dich-vu" },
              { label: "QUY TRÌNH ORDER", href: "#quy-trinh" },
              { label: "BẢNG GIÁ PHÍ NHẬP HÀNG", href: "#bang-gia" },
              { label: "TIN TỨC", href: "#tin-tuc" },
              { label: "LIÊN HỆ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-200 hover:text-[#f37021] border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (Matches DN008-corporate_profile_5.png) */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#08242b]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08242b]/95 via-[#08242b]/80 to-[#08242b]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#0d333c] border border-teal-500/30 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-[#f37021]" />
                <span>{data.hero.eyebrow || "LOGISTICS ĐÁNG TIN CẬY"}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.16] mb-5">
                Đồng Hành Cùng Bạn{" "}
                <span className="block text-[#f37021] mt-1">
                  Trên Con Đường Thành Công!
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
                {data.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href={data.hero.ctaLink || "#dich-vu"}
                  className="bg-[#f37021] hover:bg-[#d95d12] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-md shadow-lg shadow-[#f37021]/30 inline-flex items-center gap-2 transition"
                >
                  <span>{data.hero.ctaText || "KHÁM PHÁ NGAY"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setFeeModalOpen(true)}
                  className="border border-white/30 hover:border-[#f37021] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-md transition cursor-pointer"
                >
                  TRA CỨU CƯỚC PHÍ
                </button>
              </div>

              {/* Quick Tracking Bar */}
              <form
                onSubmit={handleTrackingSearch}
                className="max-w-lg bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/15 flex items-center gap-2"
              >
                <Package className="w-5 h-5 text-[#f37021] ml-2.5 shrink-0" />
                <input
                  type="text"
                  placeholder="Nhập mã vận đơn để tra cứu hành trình (VD: SF88920)..."
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  className="w-full bg-transparent text-white placeholder:text-slate-400 text-xs sm:text-sm px-2 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#f37021] hover:bg-[#d95d12] text-white text-xs font-bold uppercase px-4 py-2.5 rounded-lg shrink-0 transition cursor-pointer"
                >
                  Tra cứu
                </button>
              </form>
              {trackingResult && (
                <p className="mt-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-3.5 py-2 rounded-lg max-w-lg">
                  {trackingResult}
                </p>
              )}
            </div>

            {/* Right Circular / Overlapping Warehouse Collage with Play Button */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80"
                    alt="Kho vận ShipFast"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Play button in center-left */}
                <button
                  type="button"
                  onClick={() => setFeeModalOpen(true)}
                  aria-label="Xem giới thiệu"
                  className="absolute top-1/2 -left-4 -translate-y-1/2 w-16 h-16 rounded-full bg-[#0d333c] border-4 border-white/20 text-white flex items-center justify-center shadow-xl hover:bg-[#f37021] transition cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
                {/* Bottom floating card */}
                <div className="absolute -bottom-4 right-2 bg-white text-[#0d333c] rounded-xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f37021]/15 text-[#f37021] flex items-center justify-center font-black">
                    24/7
                  </div>
                  <div>
                    <p className="text-xs font-extrabold">Thông Quan Nhanh</p>
                    <p className="text-[11px] text-slate-500">Cam kết đúng tiến độ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SPLIT SECTION ("VỀ CHÚNG TÔI") */}
      <section id="gioi-thieu" className="py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Circular Masked Photo + Vertical Orange 10+ Badge */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-80 h-80 sm:w-[410px] sm:h-[410px]">
                {/* Background soft gray circle */}
                <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-slate-100 -z-10" />
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-slate-50 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=900&q=80"
                    alt="Về chúng tôi"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Vertical Orange Badge on Top-Right */}
                <div className="absolute top-0 right-4 bg-[#f37021] text-white px-5 py-6 rounded-b-2xl rounded-t-md shadow-xl text-center">
                  <span className="block text-3xl font-black leading-none">
                    {data.business.experienceYears || "10+"}
                  </span>
                  <span className="block text-[11px] font-bold uppercase tracking-wider mt-1.5">
                    Năm kinh nghiệm
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-[#0d333c] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-[#f37021]" />
                <span>GIỚI THIỆU</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d333c] uppercase mb-4">
                {data.business.aboutTitle || "VỀ CHÚNG TÔI"}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {data.business.aboutText?.[0]}
              </p>

              {/* 2 Feature Cards: Mục tiêu (dark teal) & Tầm nhìn (white) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0d333c] text-white rounded-xl p-5 flex items-start gap-3.5 shadow-md">
                  <div className="w-11 h-11 rounded-full bg-white/10 text-[#f37021] flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold mb-1">Mục tiêu</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Cung cấp dịch vụ logistics chất lượng cao, tối ưu chi phí vận tải.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#0d333c] text-white flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#0d333c] mb-1">
                      Tầm nhìn
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Trở thành đối tác vận chuyển & chuỗi cung ứng hàng đầu khu vực.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 Checkmarks */}
              <div className="space-y-2.5 mb-7">
                {(data.business.highlights || []).map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm font-bold text-[#0d333c]">
                    <CheckCircle2 className="w-4 h-4 text-[#0d333c] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <a
                href="#dich-vu"
                className="inline-flex items-center gap-2 bg-[#f37021] hover:bg-[#d95d12] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-md shadow-md transition"
              >
                <span>XEM THÊM</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4 MAIN SERVICES ("CÁC DỊCH VỤ CHÍNH") */}
      <section id="dich-vu" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#0d333c] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#f37021]" />
              <span>DỊCH VỤ CHẤT LƯỢNG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d333c] uppercase">
              CÁC DỊCH VỤ CHÍNH
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.services || []).slice(0, 4).map((srv, idx) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#f37021]/40 transition group flex flex-col justify-between"
              >
                <div>
                  {/* Isometric / Logistics Graphic Box */}
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-6 group-hover:bg-[#f37021] transition">
                    {idx === 0 && (
                      <Package className="w-8 h-8 text-[#f37021] group-hover:text-white transition" />
                    )}
                    {idx === 1 && (
                      <Plane className="w-8 h-8 text-[#f37021] group-hover:text-white transition" />
                    )}
                    {idx === 2 && (
                      <Truck className="w-8 h-8 text-[#f37021] group-hover:text-white transition" />
                    )}
                    {idx >= 3 && (
                      <Ship className="w-8 h-8 text-[#f37021] group-hover:text-white transition" />
                    )}
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0d333c] mb-2.5 group-hover:text-[#f37021] transition">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <a
                  href="#bang-gia"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#f37021] group-hover:translate-x-1 transition"
                >
                  <span>XEM THÊM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-STEP ORDER PROCESS ("QUY TRÌNH ORDER HÀNG") */}
      <section id="quy-trinh" className="py-20 bg-[#f4f7f9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#0d333c] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#f37021]" />
              <span>ORDER HÀNG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d333c] uppercase">
              QUY TRÌNH ORDER HÀNG
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {(data.orderSteps || []).map((step, idx) => (
              <div key={step.id} className="text-center flex flex-col items-center">
                <div className="relative w-28 h-28 rounded-full bg-white border-2 border-dashed border-slate-300 flex items-center justify-center shadow-sm mb-5">
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#f37021] text-white text-xs font-extrabold flex items-center justify-center shadow">
                    {step.number}
                  </span>
                  {idx === 0 && <Package className="w-10 h-10 text-[#0d333c]" />}
                  {idx === 1 && <ShieldCheck className="w-10 h-10 text-[#0d333c]" />}
                  {idx === 2 && <Warehouse className="w-10 h-10 text-[#0d333c]" />}
                  {idx >= 3 && <Truck className="w-10 h-10 text-[#0d333c]" />}
                </div>
                <h3 className="text-base font-extrabold text-[#0d333c] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMPORT FEE BREAKDOWN & STATS SPLIT ("PHÍ DỊCH VỤ NHẬP HÀNG") */}
      <section id="bang-gia" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 5 Fee Items */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-[#0d333c] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-[#f37021]" />
                <span>BẢNG GIÁ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d333c] uppercase mb-3">
                PHÍ DỊCH VỤ NHẬP HÀNG
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-7">
                Các biểu phí dịch vụ nhập hàng được niêm yết minh bạch, tối ưu theo trọng lượng (kg) hoặc thể tích (m³) thực tế của lô hàng:
              </p>

              <div className="space-y-5 mb-8">
                {(data.feeItems || []).map((fee, idx) => (
                  <div key={fee.id} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0d333c] text-white flex items-center justify-center shrink-0 mt-0.5">
                      {idx === 0 && <Truck className="w-4 h-4" />}
                      {idx === 1 && <Clock className="w-4 h-4" />}
                      {idx === 2 && <Warehouse className="w-4 h-4" />}
                      {idx === 3 && <Package className="w-4 h-4" />}
                      {idx >= 4 && <ShieldCheck className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm font-extrabold text-[#0d333c]">
                          {fee.title}
                        </h4>
                        <span className="text-[11px] font-bold text-[#f37021] bg-orange-50 px-2.5 py-0.5 rounded">
                          {fee.unitRate}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {fee.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setFeeModalOpen(true)}
                className="bg-[#0d333c] hover:bg-[#f37021] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-md inline-flex items-center gap-2 transition cursor-pointer"
              >
                <span>XEM CHI TIẾT BIỂU PHÍ</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Collage with 3 Stacked Orange Stat Boxes + Warehouse Photos */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Left Column: 3 Orange Stat Cards + Container Truck Photo */}
                <div className="col-span-6 space-y-3">
                  {(data.stats || []).slice(0, 3).map((st) => (
                    <div
                      key={st.id}
                      className="bg-[#f37021] text-white rounded-xl p-5 text-center shadow-lg"
                    >
                      <span className="block text-3xl font-black leading-none">
                        {st.number}
                      </span>
                      <span className="block text-xs font-semibold mt-1 text-white/90">
                        {st.title}
                      </span>
                    </div>
                  ))}
                  <div className="rounded-xl overflow-hidden h-44 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80"
                      alt="Container"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Column: Tall Warehouse Forklift Photo */}
                <div className="col-span-6">
                  <div className="rounded-2xl overflow-hidden h-[460px] shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
                      alt="Hệ thống kho bãi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DARK TEAL 3-GUARANTEE BANNER (#08242b) */}
      <section className="py-14 bg-[#08242b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.guarantees || []).map((g, i) => (
              <div
                key={g.id}
                className="bg-[#0d333c]/90 border border-white/10 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f37021]/15 border border-[#f37021]/40 text-[#f37021] flex items-center justify-center shrink-0">
                  {i === 0 && <ShieldCheck className="w-6 h-6" />}
                  {i === 1 && <Package className="w-6 h-6" />}
                  {i >= 2 && <Headphones className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white mb-1">
                    {g.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR COMMITMENT SPLIT ("CAM KẾT CỦA CHÚNG TÔI") */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-[#0d333c] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-[#f37021]" />
                <span>CAM KẾT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d333c] uppercase mb-3">
                CAM KẾT CỦA CHÚNG TÔI
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-7">
                Các cam kết dịch vụ bằng văn bản giúp xây dựng niềm tin bền vững và sự an tâm tuyệt đối cho mọi khách hàng doanh nghiệp:
              </p>

              <div className="space-y-5 mb-8">
                {(data.commitments || []).map((cm) => (
                  <div key={cm.id} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-orange-50 text-[#f37021] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                    <div>
                      <h4 className="text-base font-extrabold text-[#0d333c]">
                        {cm.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        {cm.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 bg-[#0d333c] hover:bg-[#f37021] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-md transition"
              >
                <span>KHÁM PHÁ</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right 2 Tall Photos + 10+ Năm kinh nghiệm bar */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-stretch">
              <div className="col-span-7 flex flex-col gap-3">
                <div className="rounded-xl overflow-hidden flex-1 min-h-[280px] shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80"
                    alt="Đội ngũ vận hành"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#0d333c] text-white rounded-xl p-5 flex items-center justify-between">
                  <span className="text-3xl font-black text-white">
                    {data.business.experienceYears || "10+"}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Năm kinh nghiệm vận tải quốc tế
                  </span>
                </div>
              </div>
              <div className="col-span-5">
                <div className="rounded-xl overflow-hidden h-full min-h-[360px] shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
                    alt="Tàu container quốc tế"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PARTNER LOGO STRIP */}
      <section className="py-10 bg-[#8ea3aa]/30 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center text-center">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="py-3 px-4 rounded-lg bg-white/70 border border-slate-200/80 flex items-center justify-center gap-2"
              >
                <Ship className="w-4 h-4 text-[#f37021]" />
                <span className="text-xs sm:text-sm font-black tracking-wider text-[#0d333c]">
                  {cl.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT SPLIT ("LIÊN HỆ VỚI CHÚNG TÔI") */}
      <section id="lien-he" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 bg-[#0d333c] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-[#f37021]" />
                <span>LIÊN HỆ NGAY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d333c] uppercase mb-8">
                LIÊN HỆ VỚI CHÚNG TÔI
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-slate-100 text-[#0d333c] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0d333c]">
                      Bảo mật thông tin
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Chúng tôi cam kết bảo vệ thông tin nhà cung cấp và nguồn hàng của quý khách tuyệt đối.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-slate-100 text-[#0d333c] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0d333c]">
                      Đáp ứng thời gian
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Báo giá cước vận chuyển và thuế nhập khẩu chỉ trong vòng 15 phút sau khi nhận yêu cầu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-slate-100 text-[#0d333c] flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0d333c]">
                      Hỗ trợ 24/7
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Tổng đài viên và chuyên viên chứng từ trực tuyến 24/7 để hỗ trợ thông quan lô hàng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#f4f7f9] rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-sm">
                {formSubmitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="text-xl font-extrabold text-[#0d333c]">
                      Đã gửi yêu cầu báo giá vận chuyển!
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Chuyên viên Logistics của {data.business.name} sẽ liên hệ lại với bạn ngay.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Họ tên *"
                        value={contactForm.fullName}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            fullName: e.target.value
                          })
                        }
                        className="w-full bg-white text-[#0d333c] placeholder:text-slate-400 text-sm px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#0d333c]"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-5 top-1/2 -translate-y-1/2" />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="Email *"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            email: e.target.value
                          })
                        }
                        className="w-full bg-white text-[#0d333c] placeholder:text-slate-400 text-sm px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#0d333c]"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute right-5 top-1/2 -translate-y-1/2" />
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại *"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            phone: e.target.value
                          })
                        }
                        className="w-full bg-white text-[#0d333c] placeholder:text-slate-400 text-sm px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#0d333c]"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute right-5 top-1/2 -translate-y-1/2" />
                    </div>

                    <div>
                      <select
                        value={contactForm.service}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            service: e.target.value
                          })
                        }
                        className="w-full bg-white text-[#0d333c] text-sm px-5 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#0d333c]"
                      >
                        <option value="Nhập hàng chính ngạch">
                          Chọn dịch vụ: Nhập hàng chính ngạch
                        </option>
                        <option value="Vận chuyển đường biển / hàng không">
                          Chọn dịch vụ: Vận chuyển đường biển / hàng không
                        </option>
                        <option value="Khai báo hải quan trọn gói">
                          Chọn dịch vụ: Khai báo hải quan trọn gói
                        </option>
                        <option value="Thuê kho ngoại quan & phân phối">
                          Chọn dịch vụ: Thuê kho ngoại quan & phân phối
                        </option>
                      </select>
                    </div>

                    <div className="pt-2 flex justify-center">
                      <button
                        type="submit"
                        className="bg-[#0d333c] hover:bg-[#f37021] text-white text-xs font-extrabold uppercase tracking-wider px-9 py-3.5 rounded-full inline-flex items-center gap-2 transition shadow-md cursor-pointer"
                      >
                        <span>GỬI NGAY</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS ("ĐÁNH GIÁ TỪ KHÁCH HÀNG") */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#0d333c] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#f37021]" />
              <span>PHẢN HỒI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d333c] uppercase">
              ĐÁNH GIÁ TỪ KHÁCH HÀNG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.testimonials || []).map((item) => (
              <div
                key={item.id}
                className="bg-[#f4f7f9] rounded-2xl p-7 border border-slate-200/70 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-[#0d333c]/80 leading-none">
                      99
                    </span>
                    <div>
                      <span className="block text-xs font-extrabold text-[#0d333c]">
                        Dịch vụ chất lượng
                      </span>
                      <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/70">
                  <img
                    src={
                      item.avatar ||
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                    }
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0d333c]">
                      {item.author}
                    </h4>
                    <span className="text-xs text-slate-500">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. NEWS SECTION ("TIN TỨC NỔI BẬT") */}
      <section id="tin-tuc" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#0d333c] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#f37021]" />
              <span>TIN TỨC & BLOGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d333c] uppercase">
              TIN TỨC NỔI BẬT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* Top-right Date Badge like screenshot */}
                  <div className="absolute top-3 right-3 bg-white rounded-lg p-2 text-center shadow-md min-w-[46px]">
                    <span className="block text-sm font-black text-[#0d333c] leading-none">
                      {post.date.split(" ")[0] || "11"}
                    </span>
                    <span className="block text-[10px] font-bold uppercase text-slate-500 mt-0.5">
                      {post.date.split(" ")[1] || "TH4"}
                    </span>
                  </div>
                  {/* Bottom Dark Author Pill */}
                  <div className="absolute bottom-3 inset-x-3 bg-[#0d333c]/95 text-white text-[11px] px-3.5 py-2 rounded-lg flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#f37021]" />
                      <span>Bởi {data.business.name}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-[#f37021]" />
                      <span>Tư vấn XNK</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-[#0d333c] group-hover:text-[#f37021] transition mb-2.5">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  <a
                    href="#lien-he"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d333c] group-hover:text-[#f37021] transition"
                  >
                    <span>Xem Thêm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. DARK PETROL TEAL FOOTER (#08242b) */}
      <footer className="bg-[#08242b] text-slate-300">
        {/* Top 3-Column Contact Strip */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#f37021] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xs leading-relaxed text-white">
                {data.business.address}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#f37021] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="text-white font-bold">{primaryPhone}</p>
                {data.business.phone?.[1] && (
                  <p className="text-slate-400">{data.business.phone[1]}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#f37021] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="text-slate-400">Email hỗ trợ:</p>
                <p className="text-white font-bold">{primaryEmail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#f37021] flex items-center justify-center text-white">
                  <Ship className="w-5 h-5" />
                </div>
                <span className="text-lg font-black uppercase text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                Với nền tảng kinh nghiệm và sự am hiểu sâu sắc về ngành Logistics quốc tế, chúng tôi tự hào là đối tác tin cậy hỗ trợ chuỗi cung ứng của doanh nghiệp bạn.
              </p>
              <div className="flex items-center gap-2.5">
                {["FB", "TW", "IN", "YT"].map((s) => (
                  <a
                    key={s}
                    href="#lien-he"
                    className="w-8 h-8 rounded-full bg-[#f37021] text-white text-[10px] font-bold flex items-center justify-center"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-extrabold text-white mb-4">Dịch vụ</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#dich-vu" className="hover:text-[#f37021]">
                    › Vận chuyển hàng hóa quốc tế
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#f37021]">
                    › Lưu trữ và quản lý kho bãi
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#f37021]">
                    › Quản lý chuỗi cung ứng
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#f37021]">
                    › Bảo hiểm hàng hóa XNK
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#f37021]">
                    › Nhập hàng chính ngạch
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-extrabold text-white mb-4">
                Chính sách
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#bang-gia" className="hover:text-[#f37021]">
                    › Chính sách bảo hiểm hàng hóa
                  </a>
                </li>
                <li>
                  <a href="#bang-gia" className="hover:text-[#f37021]">
                    › Bảo mật thông tin nguồn hàng
                  </a>
                </li>
                <li>
                  <a href="#bang-gia" className="hover:text-[#f37021]">
                    › Cam kết tiến độ giao nhận
                  </a>
                </li>
                <li>
                  <a href="#bang-gia" className="hover:text-[#f37021]">
                    › Quy trình giải quyết khiếu nại
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-extrabold text-white mb-4">Liên hệ</h4>
              <div className="space-y-2.5 text-xs text-slate-400">
                <p>Địa chỉ: {data.business.address}</p>
                <p>{data.business.workingHours || "Thứ 2 - Thứ 7: 08:00 - 18:00"}</p>
                <p className="text-white font-bold">{primaryPhone}</p>
                <p>{primaryEmail}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} {data.business.name}. Bảo lưu mọi quyền.</p>
            <div className="flex gap-4">
              <a href="#bang-gia" className="hover:text-white">
                Điều khoản
              </a>
              <a href="#bang-gia" className="hover:text-white">
                Quyền riêng tư
              </a>
              <a href="#gioi-thieu" className="hover:text-white">
                Giới thiệu
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* SHIPPING FEE MODAL */}
      {feeModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFeeModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#0d333c]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setFeeModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="inline-block bg-[#f37021]/15 text-[#f37021] text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-2">
              Biểu phí tham khảo 2026
            </span>
            <h3 className="text-xl font-extrabold mb-4">
              Bảng Cước Vận Chuyển & Nhập Khẩu Chính Ngạch
            </h3>
            <div className="space-y-3 text-xs sm:text-sm border-y border-slate-100 py-4 mb-5">
              {(data.feeItems || []).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 py-1.5 border-b last:border-b-0 border-slate-100"
                >
                  <span className="font-bold text-[#0d333c]">{item.title}</span>
                  <span className="font-extrabold text-[#f37021]">
                    {item.unitRate}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setFeeModalOpen(false)}
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-bold"
              >
                Đóng
              </button>
              <a
                href="#lien-he"
                onClick={() => setFeeModalOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-[#f37021] text-white text-xs font-bold uppercase"
              >
                Nhận báo giá theo lô hàng
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
