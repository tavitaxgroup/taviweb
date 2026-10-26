"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  Wrench,
  Home,
  Users,
  Compass,
  Globe,
  HardHat,
  Calendar,
  Handshake,
  Smartphone,
  ShieldCheck,
  Award,
  CheckCircle2,
  Send,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung21DefaultData,
  type XayDung21TemplateData
} from "@/template-sources/xay_dung_21/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung21TemplateData = adaptClonedTemplateData(
    xayDung21DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBookingTab, setActiveBookingTab] = useState<"online" | "quote">(
    "online"
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    service: "Sửa chữa ống nước"
  });

  const primaryPhone = data.business.phone?.[0] || "1900 - 636 - 648";
  const secondaryPhone = data.business.phone?.[1] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setBookingForm({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        service: "Sửa chữa ống nước"
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#1e293b] font-sans selection:bg-[#f5b800] selection:text-black">
      {/* 1. THREE-TIER HEADER (Exact match to XD021) */}
      {/* Tier 1: Dark Topbar */}
      <div className="bg-[#111111] text-slate-300 text-[10px] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <span className="truncate">
            <strong className="text-white">ĐỊA CHỈ:</strong>{" "}
            {data.business.address}
          </span>
          <a
            href="#dat-dich-vu"
            className="hover:text-[#f5b800] shrink-0 ml-4"
          >
            Đăng nhập / Đăng ký
          </a>
        </div>
      </div>

      {/* Tier 2: White Middle Brand & Info Badges Bar */}
      <div className="bg-white py-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          {/* Left Gear + House Roof Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#f5b800]/15 border-2 border-[#f5b800] flex items-center justify-center text-[#111111]">
                  <Home className="w-5 h-5 text-[#f5b800] fill-current" />
                </div>
                <span className="text-sm font-black uppercase tracking-tight text-[#111111] mt-0.5">
                  MONA <span className="text-[#f5b800]">HOMEFIX</span>
                </span>
              </div>
            )}
          </a>

          {/* Right 3 Yellow Square Info Badges */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#f5b800] text-black flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-tight">
                <span className="block font-extrabold uppercase text-slate-900">
                  GIỜ HOẠT ĐỘNG
                </span>
                <span className="text-slate-500">
                  {data.business.workingHours || "T2 - T6 : 9 A.M - 6 P.M"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#f5b800] text-black flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-tight">
                <span className="block font-extrabold uppercase text-slate-900">
                  HOTLINE
                </span>
                <a
                  href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
                  className="text-slate-600 font-semibold hover:text-[#f5b800]"
                >
                  {primaryPhone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#f5b800] text-black flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-tight">
                <span className="block font-extrabold uppercase text-slate-900">
                  EMAIL
                </span>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-slate-500 hover:text-[#f5b800]"
                >
                  {primaryEmail}
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-slate-200 text-slate-800"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Tier 3: Sticky Black Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#111111] text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between gap-4">
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-bold uppercase tracking-wider">
            <a href="#" className="text-[#f5b800]">
              TRANG CHỦ
            </a>
            <a href="#thanh-qua" className="hover:text-[#f5b800] transition">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu" className="hover:text-[#f5b800] transition">
              DỊCH VỤ
            </a>
            <a href="#du-an" className="hover:text-[#f5b800] transition">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#f5b800] transition">
              LIÊN HỆ
            </a>
          </nav>

          {/* Search Input */}
          <div className="flex items-center bg-white rounded-sm overflow-hidden ml-auto w-full md:w-56">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="px-3 py-1 text-xs text-slate-800 w-full focus:outline-none"
            />
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="px-2.5 py-1 text-slate-600 hover:text-black"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] px-4 py-3 space-y-2 border-t border-white/10">
            {[
              { label: "TRANG CHỦ", href: "#" },
              { label: "GIỚI THIỆU", href: "#thanh-qua" },
              { label: "DỊCH VỤ", href: "#dich-vu" },
              { label: "DỰ ÁN", href: "#du-an" },
              { label: "LIÊN HỆ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-xs font-bold uppercase text-white hover:text-[#f5b800]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO BANNER + DARK HOTLINE CALLOUT STRIP */}
      <section>
        {/* Engineer Hero */}
        <div className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden bg-slate-800">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <div className="max-w-md text-white">
              <p className="text-xl sm:text-2xl font-bold leading-snug">
                Việc chăm sóc
              </p>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white my-1">
                NHÀ CỦA BẠN
              </h1>
              <p className="text-xl sm:text-2xl font-bold mb-5">
                hãy để chúng tôi
              </p>
              <a
                href={data.hero.ctaLink || "#dich-vu"}
                className="inline-block bg-[#f5b800] hover:bg-[#e0a800] text-black text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-sm shadow transition"
              >
                {data.hero.ctaText || "TÌM HIỂU"}
              </a>
            </div>
          </div>
        </div>

        {/* Dark Hotline Banner */}
        <div className="bg-[#111111] text-white py-12 text-center border-t-2 border-[#f5b800]">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-xs sm:text-sm font-bold text-white/95 mb-4">
              {data.hotlineBannerTitle}
            </p>
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <a
              href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
              className="block text-3xl sm:text-5xl font-black text-[#f5b800] tracking-wider mb-3 hover:underline"
            >
              {data.hotlineNumber}
            </a>
            <p className="text-xs font-semibold text-slate-300 mb-5">
              {data.hotlineSubtext}
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="#dat-dich-vu"
                className="bg-white text-black px-4 py-1.5 rounded flex items-center gap-2 text-left shadow"
              >
                <Smartphone className="w-4 h-4 text-black" />
                <div className="leading-none">
                  <span className="block text-[8px] text-slate-500">
                    Tải ứng dụng trên
                  </span>
                  <span className="text-xs font-extrabold">App Store</span>
                </div>
              </a>
              <a
                href="#dat-dich-vu"
                className="bg-white text-black px-4 py-1.5 rounded flex items-center gap-2 text-left shadow"
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <div className="leading-none">
                  <span className="block text-[8px] text-slate-500">
                    Tải ứng dụng trên
                  </span>
                  <span className="text-xs font-extrabold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "DỊCH VỤ CỦA CHÚNG TÔI" (ASYMMETRIC 5-CARD GRID: 2 TOP + 3 BOTTOM) */}
      <section id="dich-vu" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-slate-900">
              DỊCH VỤ CỦA CHÚNG TÔI
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Những gì chúng tôi có thể làm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {(data.serviceTiles || []).map((tile) => {
              const colClass =
                tile.colSpan === "wide"
                  ? "md:col-span-7"
                  : tile.colSpan === "medium"
                  ? "md:col-span-5"
                  : "md:col-span-4";
              return (
                <div
                  key={tile.id}
                  onClick={() => {
                    setBookingForm({ ...bookingForm, service: tile.title });
                    const el = document.getElementById("dat-dich-vu");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${colClass} group relative h-56 overflow-hidden bg-slate-900 cursor-pointer shadow-sm`}
                >
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="w-8 h-8 rounded-full bg-[#f5b800] text-black flex items-center justify-center mb-2 shadow">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold group-hover:text-[#f5b800] transition">
                      {tile.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. "THÀNH QUẢ CỦA CHÚNG TÔI" (DARK COUNTER STRIP + 2 TABS + SPLIT BOOKING FORM) */}
      <section id="thanh-qua">
        {/* Dark Counter Strip */}
        <div className="bg-[#141414] text-white pt-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide">
              THÀNH QUẢ CỦA CHÚNG TÔI
            </h2>
            <p className="text-xs text-slate-400 mt-1 mb-10">
              Những thành quả trong 9 năm qua
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
              {(data.stats || []).map((st, idx) => (
                <div key={st.id} className="flex flex-col items-center">
                  {idx === 0 && (
                    <Users className="w-9 h-9 text-white mb-2 stroke-[1.5]" />
                  )}
                  {idx === 1 && (
                    <Compass className="w-9 h-9 text-white mb-2 stroke-[1.5]" />
                  )}
                  {idx === 2 && (
                    <Globe className="w-9 h-9 text-white mb-2 stroke-[1.5]" />
                  )}
                  {idx >= 3 && (
                    <HardHat className="w-9 h-9 text-white mb-2 stroke-[1.5]" />
                  )}
                  <div className="w-5 h-0.5 bg-[#f5b800] mb-2" />
                  <span className="text-xl sm:text-2xl font-black text-white">
                    {st.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    {st.title}
                  </span>
                </div>
              ))}
            </div>

            {/* 2 Overlapping Bottom Tabs: ĐẶT ONLINE | BÁO GIÁ */}
            <div className="inline-flex">
              <button
                type="button"
                onClick={() => setActiveBookingTab("online")}
                className={`px-7 py-2.5 text-xs font-extrabold uppercase tracking-wider cursor-pointer transition ${
                  activeBookingTab === "online"
                    ? "bg-white text-slate-900"
                    : "bg-[#222222] text-slate-300"
                }`}
              >
                ĐẶT ONLINE
              </button>
              <button
                type="button"
                onClick={() => setActiveBookingTab("quote")}
                className={`px-7 py-2.5 text-xs font-extrabold uppercase tracking-wider cursor-pointer transition ${
                  activeBookingTab === "quote"
                    ? "bg-[#f5b800] text-black"
                    : "bg-[#f5b800]/90 text-black hover:bg-[#f5b800]"
                }`}
              >
                BÁO GIÁ
              </button>
            </div>
          </div>
        </div>

        {/* White Split Booking Form & Construction Crane Blueprint */}
        <div id="dat-dich-vu" className="py-14 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              {/* Left Form */}
              <div className="md:col-span-6">
                <h3 className="text-base sm:text-lg font-black uppercase text-slate-900">
                  {activeBookingTab === "online"
                    ? "ĐẶT DỊCH VỤ ONLINE"
                    : "YÊU CẦU BÁO GIÁ NHANH"}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 mb-5">
                  Để lại thông tin và bên chúng tôi sẽ liên hệ với bạn
                </p>

                {formSubmitted ? (
                  <div className="bg-amber-50 border border-[#f5b800] p-6 text-center rounded">
                    <CheckCircle2 className="w-9 h-9 text-amber-600 mx-auto mb-2" />
                    <p className="text-xs font-bold text-slate-900">
                      Đã đặt lịch hẹn thành công! Kỹ thuật viên {data.business.name} sẽ liên hệ xác nhận trong 15 phút.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên *"
                      value={bookingForm.fullName}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          fullName: e.target.value
                        })
                      }
                      className="w-full border border-slate-200 px-3.5 py-2 text-xs focus:outline-none focus:border-[#f5b800]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email *"
                      value={bookingForm.email}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          email: e.target.value
                        })
                      }
                      className="w-full border border-slate-200 px-3.5 py-2 text-xs focus:outline-none focus:border-[#f5b800]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại *"
                      value={bookingForm.phone}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          phone: e.target.value
                        })
                      }
                      className="w-full border border-slate-200 px-3.5 py-2 text-xs focus:outline-none focus:border-[#f5b800]"
                    />
                    <input
                      type="date"
                      value={bookingForm.date}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, date: e.target.value })
                      }
                      className="w-full border border-slate-200 px-3.5 py-2 text-xs text-slate-600 focus:outline-none focus:border-[#f5b800]"
                    />
                    <select
                      value={bookingForm.service}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          service: e.target.value
                        })
                      }
                      className="w-full border border-slate-200 px-3.5 py-2 text-xs text-slate-700 focus:outline-none focus:border-[#f5b800]"
                    >
                      <option>Sửa chữa ống nước</option>
                      <option>Sửa chữa điện dân dụng</option>
                      <option>Vệ sinh & Chống thấm mái</option>
                      <option>Thi công lát sàn gỗ</option>
                      <option>Cải tạo nhà trọn gói</option>
                    </select>
                    <div className="pt-1">
                      <button
                        type="submit"
                        className="bg-[#f5b800] hover:bg-[#e0a800] text-black text-[11px] font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-sm shadow cursor-pointer"
                      >
                        ĐẶT LỊCH HẸN ONLINE
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Construction Crane & Blueprint Image */}
              <div className="md:col-span-6">
                <div className="aspect-square overflow-hidden rounded-sm shadow-lg border border-slate-200 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                    alt="Bản vẽ kỹ thuật và thi công"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "NHẬN XÉT KHÁCH HÀNG" (DARK BANNER WITH 3 YELLOW-BORDERED CARDS) */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-10">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide">
              NHẬN XÉT KHÁCH HÀNG
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Khách hàng nói về chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.reviewCards || []).map((rev) => (
              <div
                key={rev.id}
                className="bg-white border-2 border-[#f5b800] p-4 text-center flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="bg-[#111111] text-[#f5b800] font-bold text-xs py-3 px-3 mb-4">
                    {rev.headline}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-5 px-2">
                    {rev.content}
                  </p>
                </div>

                <div>
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-12 h-12 object-cover mx-auto mb-2 border border-slate-200"
                  />
                  <p className="text-[11px] font-black uppercase text-slate-900">
                    {rev.author}
                  </p>
                  <div className="w-5 h-0.5 bg-[#f5b800] mx-auto my-1" />
                  <p className="text-[10px] text-slate-400">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "QUY TRÌNH LÀM VIỆC" (4 STEP CARDS WITH YELLOW CIRCULAR ICONS) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-slate-900">
              QUY TRÌNH LÀM VIỆC
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Để lại thông tin và bên chúng tôi sẽ liên hệ với bạn
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.processSteps || []).map((step) => (
              <div
                key={step.id}
                className="border border-slate-200 p-5 text-center hover:border-[#f5b800] transition bg-white shadow-sm"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#f5b800] text-slate-900 flex items-center justify-center mx-auto mb-4">
                  {step.icon === "calendar" && <Calendar className="w-5 h-5" />}
                  {step.icon === "handshake" && (
                    <Handshake className="w-5 h-5" />
                  )}
                  {step.icon === "wrench" && <Wrench className="w-5 h-5" />}
                  {step.icon === "home" && <Home className="w-5 h-5" />}
                </div>
                <h3 className="text-xs font-extrabold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "GIÁ CÁC GÓI DỊCH VỤ" (DARK SECTION WITH 3 WHITE/YELLOW TICKET PRICING CARDS) */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-10">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide">
              GIÁ CÁC GÓI DỊCH VỤ
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Chọn mua theo gói để tối ưu chi phí
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.pricingTickets || []).map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white border-2 border-dashed border-slate-300 overflow-hidden text-center flex flex-col shadow-xl"
              >
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-black uppercase text-slate-900 mb-2">
                    {ticket.packageName}
                  </h3>
                  <p className="text-xs font-bold text-slate-600 mb-3">
                    {ticket.subtitle}
                  </p>
                  <p className="text-[11px] text-slate-400 mb-5">
                    {ticket.note}
                  </p>
                  <a
                    href="#dat-dich-vu"
                    className="inline-block w-full bg-[#111111] hover:bg-slate-800 text-white text-xs font-bold py-2 rounded-full transition"
                  >
                    Đặt ngay +
                  </a>
                </div>
                <div className="bg-[#f5b800] py-3.5 px-4 text-xs font-black text-slate-900 border-t-2 border-dashed border-black/20">
                  {ticket.conditionText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "CÁC DỰ ÁN GẦN ĐÂY" (3x2 SPLIT BEFORE/AFTER RENOVATION CARDS) */}
      <section id="du-an" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-slate-900">
              CÁC DỰ ÁN GẦN ĐÂY
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Trước và sau khi sửa chữa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
            {(data.beforeAfterProjects || []).map((prj) => (
              <div
                key={prj.id}
                className="group relative aspect-[4/3] overflow-hidden border border-slate-200 shadow-sm grid grid-cols-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={prj.beforeImage}
                    alt={`Trước: ${prj.title}`}
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-[9px] font-bold uppercase px-1.5 py-0.5">
                    Trước
                  </span>
                </div>
                <div className="relative overflow-hidden border-l-2 border-white">
                  <img
                    src={prj.afterImage}
                    alt={`Sau: ${prj.title}`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-[#f5b800] text-black text-[9px] font-bold uppercase px-1.5 py-0.5">
                    Sau
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-black/75 text-white py-1.5 px-2.5 text-[11px] font-bold truncate text-center">
                  {prj.title}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#dat-dich-vu"
              className="inline-block bg-[#f5b800] hover:bg-[#e0a800] text-black text-xs font-extrabold px-6 py-2 rounded-sm shadow transition"
            >
              Xem thêm dự án
            </a>
          </div>
        </div>
      </section>

      {/* 9. "ĐẦY ĐỦ CHỨC NĂNG" APP BANNER + 4 PARTNER LOGOS + CERTIFICATIONS */}
      <section className="bg-[#141414] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex justify-center">
              <div className="w-44 h-56 rounded-3xl border-4 border-[#f5b800] bg-gradient-to-b from-sky-500 to-blue-700 p-4 flex flex-col items-center justify-center text-center shadow-2xl">
                <HardHat className="w-14 h-14 text-[#f5b800] mb-2" />
                <span className="text-xs font-black uppercase tracking-wider">
                  {data.business.name}
                </span>
                <span className="text-[10px] text-sky-100 mt-1">
                  Ứng dụng đặt thợ 24/7
                </span>
              </div>
            </div>

            <div className="md:col-span-7">
              <h2 className="text-lg sm:text-xl font-black uppercase mb-1">
                ĐẦY ĐỦ CHỨC NĂNG
              </h2>
              <p className="text-xs text-slate-400 mb-4">
                Các bạn có thể tải ứng dụng ngay bây giờ
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                {(data.appFeatures || []).map((feat, idx) => (
                  <li key={idx}>• {feat}</li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-white text-black px-4 py-1.5 rounded text-xs font-extrabold">
                  App Store
                </span>
                <span className="bg-white text-black px-4 py-1.5 rounded text-xs font-extrabold">
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base sm:text-lg font-black uppercase text-slate-900">
            ĐỐI TÁC CỦA CHÚNG TÔI
          </h2>
          <p className="text-[11px] text-slate-400 mt-0.5 mb-8">
            Hãy là những đối tác tiếp theo
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {[
              { name: "Fix Services", sub: "SUPPORT CENTER" },
              { name: "GARAGE DOORS", sub: "WINDOW GLASS & DOOR" },
              { name: "FIX STORE", sub: "HARDWARE SUPPLY" },
              { name: "homemovers", sub: "PROFESSIONAL MOVING" }
            ].map((p) => (
              <div key={p.name} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded bg-[#f5b800]/20 text-[#111111] flex items-center justify-center mb-1.5">
                  <Wrench className="w-5 h-5 text-[#f5b800]" />
                </div>
                <span className="text-xs font-black uppercase text-slate-900">
                  {p.name}
                </span>
                <span className="text-[8px] uppercase tracking-widest text-slate-400">
                  {p.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Certification & Payment Strip */}
      <div className="bg-[#0c0c0c] text-white py-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div>
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="w-12 h-12 rounded-full bg-red-900/60 border border-[#f5b800] flex items-center justify-center">
                <Award className="w-6 h-6 text-[#f5b800]" />
              </span>
              <span className="w-12 h-12 rounded bg-blue-900/60 border border-[#f5b800] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#f5b800]" />
              </span>
              <span className="w-12 h-12 rounded-full bg-amber-900/60 border border-[#f5b800] flex items-center justify-center">
                <HardHat className="w-6 h-6 text-[#f5b800]" />
              </span>
            </div>
            <p className="text-[11px] font-bold text-slate-300">
              Chứng nhận quốc tế trong lĩnh vực
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-4 mb-2">
              {["PayPal", "VISA", "VNPAY"].map((pay) => (
                <span
                  key={pay}
                  className="w-12 h-12 rounded-full bg-white text-blue-900 text-[10px] font-black flex items-center justify-center shadow"
                >
                  {pay}
                </span>
              ))}
            </div>
            <p className="text-[11px] font-bold text-slate-300">
              Hình thức thanh toán hỗ trợ
            </p>
          </div>
        </div>
      </div>

      {/* 10. DARK FOOTER WITH 4 CONTACT BOXES */}
      <footer id="lien-he" className="bg-[#141414] text-slate-400 pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
            {/* Col 1 */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-base font-black uppercase text-white">
                MONA <span className="text-[#f5b800]">HOMEFIX</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>
            </div>

            {/* Col 2: BÀI VIẾT MỚI NHẤT */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-extrabold uppercase text-white mb-1">
                BÀI VIẾT <span className="text-[#f5b800]">MỚI NHẤT</span>
              </h4>
              <div className="w-6 h-0.5 bg-[#f5b800] mb-4" />
              <div className="space-y-2.5">
                {(data.news || []).slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-start gap-2.5 text-[11px]">
                    <span className="bg-[#222222] text-white font-bold px-1.5 py-0.5 text-[10px] shrink-0">
                      {post.date}
                    </span>
                    <a
                      href="#dat-dich-vu"
                      className="text-slate-300 hover:text-[#f5b800] leading-snug"
                    >
                      {post.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: MENU */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase text-white mb-1">
                ME<span className="text-[#f5b800]">NU</span>
              </h4>
              <div className="w-6 h-0.5 bg-[#f5b800] mb-4" />
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <a href="#" className="text-[#f5b800]">
                    • Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#thanh-qua" className="hover:text-white">
                    • Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    • Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#du-an" className="hover:text-white">
                    • Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    • Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-1">
                ĐĂNG <span className="text-[#f5b800]">KÝ</span>
              </h4>
              <div className="w-6 h-0.5 bg-[#f5b800] mb-4" />
              <p className="text-[11px] mb-3">
                Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
              </p>
              {newsletterSubmitted ? (
                <p className="text-xs font-bold text-[#f5b800]">
                  Đã đăng ký thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubmitted(true);
                  }}
                  className="flex bg-white rounded-sm overflow-hidden"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    className="w-full px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Gửi"
                    className="px-2.5 text-[#f5b800] hover:bg-slate-100 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 4 Bottom Contact Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            <div className="bg-[#1c1c1c] p-3 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#f5b800] text-black flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-[10px] leading-tight">
                <span className="block font-bold text-white uppercase">
                  ĐỊA CHỈ
                </span>
                <span className="text-slate-400 line-clamp-2">
                  {data.business.address}
                </span>
              </div>
            </div>

            <div className="bg-[#1c1c1c] p-3 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#f5b800] text-black flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-[10px] leading-tight">
                <span className="block font-bold text-white uppercase">
                  SỐ ĐIỆN THOẠI
                </span>
                <span className="text-slate-400">{secondaryPhone}</span>
              </div>
            </div>

            <div className="bg-[#1c1c1c] p-3 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#f5b800] text-black flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-[10px] leading-tight">
                <span className="block font-bold text-white uppercase">
                  EMAIL
                </span>
                <span className="text-slate-400">{primaryEmail}</span>
              </div>
            </div>

            <div className="bg-[#1c1c1c] p-3 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#f5b800] text-black flex items-center justify-center shrink-0 font-black text-xs">
                S
              </div>
              <div className="text-[10px] leading-tight">
                <span className="block font-bold text-white uppercase">
                  HỖ TRỢ TRỰC TUYẾN
                </span>
                <span className="text-slate-400">Tư vấn kỹ thuật 24/7</span>
              </div>
            </div>
          </div>

          <div className="text-center text-[10px] text-slate-500 mt-6">
            © Thiết kế và lập trình bởi {data.business.name}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
