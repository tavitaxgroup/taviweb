"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Sprout,
  Activity,
  Flame,
  Heart,
  Flower2,
  ChevronRight,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  spa6DefaultData,
  type Spa6Data
} from "@/template-sources/spa_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function ScriptSectionTitle({
  scriptText,
  title
}: {
  scriptText: string;
  title: string;
}) {
  return (
    <div className="text-center mb-10">
      <span className="block font-serif italic text-xl sm:text-2xl text-[#9e9578] mb-1">
        {scriptText}
      </span>
      <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-[#7d755d]">
        {title}
      </h2>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Spa6Data = adaptClonedTemplateData(spa6DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedService, setSelectedService] = useState(
    data.priceList?.[0]?.name || "Massage Đá Nóng Thảo Dược"
  );
  const [selectedStaff, setSelectedStaff] = useState(
    data.staffOptions?.[0] || "Chuyên viên Minh Thư (Trưởng nhóm Trị liệu)"
  );
  const [bookingDate, setBookingDate] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const scriptBrand = data.scriptBrand || data.business.name || "Helen Spa";
  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const secondaryPhone = data.business.phone?.[1] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@helenspa.vn";

  const scrollToBooking = (serviceTitle?: string) => {
    if (serviceTitle) setSelectedService(serviceTitle);
    setBookingSubmitted(false);
    const el = document.getElementById("lien-he-dat-dich-vu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderBenefitIcon = (type: string) => {
    switch (type) {
      case "routine":
        return (
          <div className="w-11 h-11 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-5 h-5" />
          </div>
        );
      case "blood":
        return (
          <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
            <Sprout className="w-5 h-5" />
          </div>
        );
      case "tissue":
        return (
          <div className="w-11 h-11 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-3">
            <Heart className="w-5 h-5" />
          </div>
        );
      case "chronic":
        return (
          <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-3">
            <Activity className="w-5 h-5" />
          </div>
        );
      case "soul":
        return (
          <div className="w-11 h-11 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3">
            <Flame className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-11 h-11 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mx-auto mb-3">
            <Flower2 className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#4a463b] font-sans selection:bg-[#9e9578] selection:text-white">
      {/* 1. CLEAN WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Mandala Floral Brand Logo */}
          <a href="#trang-chu" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border-2 border-[#7ccce5]/60 bg-[#f7fbfc] flex items-center justify-center text-[#9e9578] shadow-2xs">
              <Flower2 className="w-6 h-6 text-[#5ab1c9]" />
            </div>
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#333333]">
              {data.business.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-gray-600">
            <a
              href="#trang-chu"
              className="text-[#5ab1c9] border-b-2 border-[#5ab1c9] pb-1"
            >
              TRANG CHỦ
            </a>
            <a href="#bang-gia" className="hover:text-[#9e9578] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu-noi-bat" className="hover:text-[#9e9578] transition-colors">
              DỊCH VỤ
            </a>
            <a href="#blogs" className="hover:text-[#9e9578] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he-dat-dich-vu" className="hover:text-[#9e9578] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#9e9578]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2.5 text-xs font-bold uppercase text-gray-700">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#5ab1c9]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#bang-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu-noi-bat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              DỊCH VỤ
            </a>
            <a
              href="#blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he-dat-dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. SOFT WHITE SPA TOWEL & PLUMERIA HERO */}
      <section
        id="trang-chu"
        className="relative h-[380px] sm:h-[440px] w-full overflow-hidden flex items-center justify-center text-center"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/65 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <span className="block font-serif italic text-2xl sm:text-3xl text-[#222222] mb-1">
            {data.hero.eyebrow || scriptBrand}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-[#d81b60] mb-4">
            {data.hero.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#333333] leading-relaxed font-medium">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 3. BẢNG GIÁ DỊCH VỤ + DỊCH VỤ NỔI BẬT (WITH BAMBOO SIDE BACKGROUND) */}
      <section id="bang-gia" className="relative py-14 bg-white overflow-hidden">
        {/* Decorative Bamboo Stalks on Right Edge */}
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-56 bg-cover bg-left opacity-90 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80')"
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          {/* Part A: Split Pricing Card */}
          <div className="bg-white shadow-xl border border-gray-100 grid grid-cols-1 md:grid-cols-12 mb-12">
            {/* Left 7 Cols: Price Rows */}
            <div className="md:col-span-7 p-6 sm:p-9">
              <span className="block font-serif italic text-xl text-[#9e9578]">
                {scriptBrand}
              </span>
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-[#7d755d] mb-6">
                BẢNG GIÁ DỊCH VỤ
              </h2>

              <div className="space-y-5">
                {(data.priceList || spa6DefaultData.priceList).map((row) => (
                  <div
                    key={row.id}
                    onClick={() => scrollToBooking(row.name)}
                    className="flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={row.image}
                        alt={row.name}
                        className="w-12 h-12 rounded-full object-cover shrink-0 border border-gray-200"
                      />
                      <div>
                        <h3 className="font-serif italic font-bold text-sm text-[#333333] group-hover:text-[#9e9578] transition-colors">
                          {row.name}
                        </h3>
                        <p className="text-[11px] text-gray-400">{row.durationNote}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[#6bc5d8] shrink-0">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Warm Taupe CTA Box */}
            <div className="md:col-span-5 bg-[#9e9578] text-white p-8 flex flex-col items-center justify-center text-center">
              <span className="font-serif italic text-2xl text-white/90 mb-1">
                {scriptBrand}
              </span>
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider leading-snug mb-5 max-w-[200px]">
                HÃY ĐỂ CHÚNG TÔI PHỤC VỤ BẠN
              </h3>
              <button
                type="button"
                onClick={() => scrollToBooking()}
                className="bg-white hover:bg-gray-100 text-[#6e664f] text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 shadow-sm transition-colors cursor-pointer"
              >
                ĐẶT DỊCH VỤ
              </button>
            </div>
          </div>

          {/* Part B: Center Callout Text */}
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-bold text-sm sm:text-base text-[#222222] mb-2">
              {data.business.aboutTitle ||
                "Hãy cho bản thân bạn, và làm trẻ hóa tâm trí & tâm hồn của bạn"}
            </h3>
            <p className="text-xs text-gray-500 mb-4">Nơi thiên nhiên gặp hạnh phúc</p>
            <a
              href="#dich-vu-noi-bat"
              className="inline-block border border-gray-300 hover:border-[#9e9578] text-gray-600 hover:text-[#9e9578] text-[10px] font-bold uppercase tracking-wider px-5 py-2 transition-colors"
            >
              KHÁM PHÁ TẤT CẢ DỊCH VỤ
            </a>
          </div>

          {/* Part C: Dịch Vụ Nổi Bật White Card */}
          <div
            id="dich-vu-noi-bat"
            className="bg-white shadow-lg border border-gray-100 p-8 sm:p-10"
          >
            <ScriptSectionTitle scriptText={scriptBrand} title="DỊCH VỤ NỔI BẬT" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {(data.services || spa6DefaultData.services || []).slice(0, 3).map((srv) => (
                <div key={srv.id} className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-sm border border-gray-100">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif italic font-bold text-sm text-[#333333] mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => scrollToBooking(srv.title)}
                    className="inline-flex items-center gap-1 border border-gray-200 hover:border-[#9e9578] text-[10px] text-gray-500 hover:text-[#9e9578] uppercase px-3.5 py-1 transition-colors cursor-pointer"
                  >
                    XEM NGAY <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HÃY ĐẾN VỚI HELEN SPA (6 WELLNESS BENEFITS ON BEIGE BG) */}
      <section className="py-16 bg-[#eee9dc]">
        <div className="max-w-4xl mx-auto px-4">
          <ScriptSectionTitle
            scriptText={scriptBrand}
            title={`HÃY ĐẾN VỚI ${data.business.name.toUpperCase()}`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 text-center">
            {(data.benefits || spa6DefaultData.benefits).map((ben) => (
              <div key={ben.id}>
                {renderBenefitIcon(ben.iconType)}
                <h3 className="font-serif italic font-bold text-sm text-[#6b634b] mb-1.5">
                  {ben.title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed max-w-xs mx-auto">
                  {ben.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LIÊN HỆ ĐẶT DỊCH VỤ (ZEN STONES BG + TAUPE FORM BOX) */}
      <section
        id="lien-he-dat-dich-vu"
        className="relative py-14 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-white/55" />

        <div className="relative z-10 max-w-md mx-auto px-4">
          <div className="bg-[#9e9578]/95 text-white p-8 sm:p-10 shadow-2xl">
            <h2 className="text-center text-base font-bold uppercase tracking-wider mb-6">
              LIÊN HỆ ĐẶT DỊCH VỤ
            </h2>

            {bookingSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-white mx-auto mb-3" />
                <h3 className="font-serif italic text-lg font-bold mb-2">
                  Đặt Lịch Thành Công!
                </h3>
                <p className="text-xs text-white/90 leading-relaxed mb-5">
                  Cảm ơn <strong>{customerName || "Quý khách"}</strong> đã đặt lịch{" "}
                  <strong>{selectedService}</strong> cùng{" "}
                  <strong>{selectedStaff}</strong>. Lễ tân {data.business.name} sẽ gọi xác nhận
                  tới số <strong>{customerPhone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingSubmitted(false)}
                  className="bg-white text-[#6b634b] text-xs font-bold uppercase px-6 py-2 cursor-pointer"
                >
                  ĐẶT THÊM LỊCH HẸN
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block text-[11px] text-white/90 mb-1">Họ tên:</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full h-9 bg-transparent border border-white/70 px-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-white/90 mb-1">
                    Số điện thoại:
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full h-9 bg-transparent border border-white/70 px-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-white/90 mb-1">Dịch vụ:</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full h-9 bg-[#9e9578] border border-white/70 px-2.5 text-white focus:outline-none"
                  >
                    {(data.priceList || spa6DefaultData.priceList).map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} ({r.price})
                      </option>
                    ))}
                    {(data.services || spa6DefaultData.services || []).map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-white/90 mb-1">Nhân viên:</label>
                  <select
                    value={selectedStaff}
                    onChange={(e) => setSelectedStaff(e.target.value)}
                    className="w-full h-9 bg-[#9e9578] border border-white/70 px-2.5 text-white focus:outline-none"
                  >
                    {(data.staffOptions || spa6DefaultData.staffOptions).map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-white/90 mb-1">Thời gian:</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full h-9 bg-transparent border border-white/70 px-3 text-white focus:outline-none"
                  />
                </div>

                <div className="pt-3 text-center">
                  <button
                    type="submit"
                    className="w-36 bg-white hover:bg-gray-100 text-[#6b634b] text-xs font-bold uppercase py-2 shadow transition-colors cursor-pointer"
                  >
                    GỬI
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. TẬN HƯỞNG CHĂM SÓC ĐẶC BIỆT (MOSAIC GRID) */}
      <section className="py-16 bg-[#f4f1ea]">
        <div className="max-w-4xl mx-auto px-4">
          <ScriptSectionTitle
            scriptText={scriptBrand}
            title="TẬN HƯỞNG CHĂM SÓC ĐẶC BIỆT"
          />

          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-white shadow-xs">
              {/* Col 1: Pure Natural Bliss */}
              <div className="md:col-span-4 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-[#d81b60] mb-2">
                  <Flower2 className="w-7 h-7" />
                </div>
                <span className="font-serif italic text-xs text-gray-500 mb-2">
                  Beauty Center
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#6b634b] mb-2">
                  THƯ GIÃN THUẦN KHIẾT
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Làm nhiều hơn những gì làm cho bạn hạnh phúc và nhớ chăm sóc bản thân!
                </p>
              </div>

              {/* Col 2: Image 01 */}
              <div className="md:col-span-5 h-56 md:h-auto overflow-hidden">
                <img
                  src={
                    data.specialCare?.[0]?.image ||
                    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
                  }
                  alt={data.specialCare?.[0]?.title || "Massage Thụy Điển"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Col 3: 01 Text */}
              <div className="md:col-span-3 p-6 flex flex-col justify-center">
                <span className="text-lg font-bold text-[#9e9578] mb-1">
                  {data.specialCare?.[0]?.number || "01"}
                </span>
                <h3 className="font-serif italic font-bold text-sm text-[#6b634b] mb-2">
                  {data.specialCare?.[0]?.title || "Massage Thụy Điển"}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {data.specialCare?.[0]?.description}
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-white shadow-xs">
              {/* Col 1: Image 02 */}
              <div className="md:col-span-5 h-56 md:h-auto overflow-hidden">
                <img
                  src={
                    data.specialCare?.[1]?.image ||
                    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80"
                  }
                  alt={data.specialCare?.[1]?.title || "Massage Thái Cổ Truyền"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Col 2: 02 Text */}
              <div className="md:col-span-4 p-6 flex flex-col justify-center">
                <span className="text-lg font-bold text-[#9e9578] mb-1">
                  {data.specialCare?.[1]?.number || "02"}
                </span>
                <h3 className="font-serif italic font-bold text-sm text-[#6b634b] mb-2">
                  {data.specialCare?.[1]?.title || "Massage Thái Cổ Truyền"}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {data.specialCare?.[1]?.description}
                </p>
              </div>

              {/* Col 3: Sky Blue Aloha Badge */}
              <div className="md:col-span-3 bg-[#7fd1e8] p-6 flex items-center justify-center min-h-[180px]">
                <div className="w-28 h-28 rounded-full bg-[#1b5e8a] border-4 border-white/40 flex flex-col items-center justify-center text-white shadow-inner">
                  <Flower2 className="w-6 h-6 text-[#7fd1e8] mb-1" />
                  <span className="font-serif italic font-bold text-lg tracking-wider">
                    ALOHA
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-white/80">
                    Royal Spa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GÓI DỊCH VỤ SPA (2 COLORFUL SPLIT BANNERS) */}
      <section className="py-12 bg-[#f4f1ea]">
        <div className="max-w-4xl mx-auto px-4">
          <ScriptSectionTitle scriptText={scriptBrand} title="GÓI DỊCH VỤ SPA" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.packageBanners || spa6DefaultData.packageBanners).map((pkg) => {
              const isMint = pkg.themeColor === "mint";
              return (
                <div
                  key={pkg.id}
                  className="grid grid-cols-12 bg-white shadow-md overflow-hidden min-h-[230px]"
                >
                  {/* Left 7 Cols Image + Price Circle */}
                  <div className="col-span-7 relative overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute bottom-3 left-3 w-14 h-14 rounded-full text-white flex flex-col items-center justify-center text-center shadow-md ${
                        isMint ? "bg-[#88c498]/95" : "bg-[#f3b562]/95"
                      }`}
                    >
                      <span className="text-[8px] uppercase font-bold">GIÁ GÓI</span>
                      <span className="text-[10px] font-extrabold">{pkg.price}</span>
                    </div>
                  </div>

                  {/* Right 5 Cols Colored Panel */}
                  <div
                    className={`col-span-5 p-5 text-white flex flex-col items-center justify-center text-center ${
                      isMint ? "bg-[#88c498]" : "bg-[#f3b562]"
                    }`}
                  >
                    <Sparkles className="w-5 h-5 text-white/90 mb-1" />
                    <span className="text-[9px] uppercase tracking-widest border-y border-white/40 py-0.5 px-2 mb-3">
                      {pkg.badgeLabel}
                    </span>
                    <h3 className="font-serif italic font-bold text-sm mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-[10px] text-white/90 leading-relaxed mb-4">
                      {pkg.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => scrollToBooking(pkg.title)}
                      className="bg-white text-[#555555] hover:bg-gray-100 text-[10px] font-bold uppercase px-4 py-1.5 shadow-2xs transition-colors cursor-pointer"
                    >
                      MUA NGAY
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. BLOGS */}
      <section id="blogs" className="py-14 bg-[#f4f1ea]">
        <div className="max-w-4xl mx-auto px-4">
          <ScriptSectionTitle scriptText={scriptBrand} title="BLOGS" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || spa6DefaultData.news || []).map((blog) => (
              <article
                key={blog.id}
                className="bg-white shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xs text-[#333333] mb-2 leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER & HOTLINE SPLIT CARD */}
      <section className="pb-12 pt-2 bg-[#f4f1ea]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white shadow-xs grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Left: Newsletter */}
            <div className="p-8 text-center flex flex-col items-center justify-center">
              <h3 className="text-xs font-semibold text-gray-600 mb-3 max-w-xs leading-relaxed">
                Nhận thông tin mới nhất về{" "}
                <strong className="text-[#333333]">Ưu đãi &amp; Khuyến mãi</strong>
              </h3>
              {newsletterDone ? (
                <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Đã đăng ký nhận ưu đãi thành công!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="w-full max-w-xs space-y-3"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email ..."
                    className="w-full h-9 bg-[#f2f2f2] text-xs px-3 text-gray-700 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="border border-gray-300 hover:border-[#9e9578] text-gray-600 hover:text-[#9e9578] text-[10px] font-bold uppercase px-5 py-1.5 transition-colors cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>

            {/* Right: Hotline Callout */}
            <div className="p-8 text-center flex flex-col items-center justify-center">
              <p className="text-xs text-gray-500 mb-2 max-w-xs leading-relaxed">
                Có bất kỳ câu hỏi nào? Cần một cuộc hẹn? Hãy gọi cho chúng tôi
              </p>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="text-xl sm:text-2xl font-bold text-[#9e9578] hover:underline mb-2"
              >
                {data.hotlineNumber || primaryPhone}
              </a>
              <p className="text-[10px] text-gray-400 leading-tight">
                (Bấm 109 - Phòng kinh doanh
                <br />
                Bấm 103 - Phòng kỹ thuật)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WARM BEIGE FOOTER */}
      <footer className="bg-[#ece6d8] py-12 text-[#6b634b]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left Brand & Philosophy */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full border border-[#9e9578]/50 bg-white flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-[#9e9578]" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#333333]">
                {data.business.name}
              </span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              {data.business.aboutText?.[0]}
            </p>
          </div>

          {/* Right Contact Info */}
          <div className="md:text-right text-xs text-gray-600 space-y-1">
            <h4 className="font-bold uppercase tracking-wider text-[#7d755d] mb-2">
              THÔNG TIN LIÊN HỆ
            </h4>
            <p>{data.business.address}</p>
            <p>{secondaryPhone}</p>
            <p>{primaryEmail}</p>
          </div>
        </div>
      </footer>

      <div className="bg-[#111111] py-3 text-center text-[11px] text-gray-400">
        © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
      </div>
    </div>
  );
}

export default DemoTemplateRenderer;
