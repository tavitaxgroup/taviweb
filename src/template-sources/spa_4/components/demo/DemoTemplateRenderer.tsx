"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Search,
  ChevronDown,
  CheckCircle2,
  Flower2,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  spa4DefaultData,
  type Spa4Data
} from "@/template-sources/spa_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Spa4Data = adaptClonedTemplateData(spa4DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(
    data.roomTypes?.[0] || "Tiêu chuẩn (Standard Spa Room)"
  );
  const [selectedService, setSelectedService] = useState(
    data.bookingServices?.[0] || "Chăm sóc da chuyên sâu"
  );
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedProduct, setLastAddedProduct] = useState<string | null>(null);

  const heroImages =
    data.hero.images && data.hero.images.length > 0
      ? data.hero.images
      : [data.hero.backgroundImage];
  const currentHeroImage = heroImages[heroSlide % heroImages.length] || data.hero.backgroundImage;

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@victoriaspa.vn";

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const handleAddToCart = (productName: string) => {
    setCartCount((prev) => prev + 1);
    setLastAddedProduct(productName);
    setTimeout(() => {
      setLastAddedProduct(null);
    }, 2800);
  };

  const handleQuickSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setBookingSubmitted(false);
    const el = document.getElementById("dat-dich-vu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans selection:bg-[#7fb401] selection:text-white">
      {/* Floating Cart Toast */}
      {lastAddedProduct && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#222222] text-white px-4 py-3 rounded shadow-xl border-l-4 border-[#7fb401] flex items-center gap-3 text-sm">
          <CheckCircle2 className="w-4 h-4 text-[#7fb401] shrink-0" />
          <span>
            Đã thêm <strong>{lastAddedProduct}</strong> vào giỏ hàng ({cartCount})
          </span>
        </div>
      )}

      {/* 1. DARK HEADER BAR */}
      <header className="sticky top-0 z-40 bg-[#141414] text-white border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#trang-chu" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-white group-hover:border-[#7fb401] transition-colors">
              <Flower2 className="w-6 h-6 text-[#7fb401]" />
            </div>
            <div className="leading-tight">
              <span className="block font-serif italic text-xl sm:text-2xl font-bold tracking-wide text-white">
                {data.business.name}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-white/60">
                Resort &amp; Spa
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            <a href="#trang-chu" className="text-[#7fb401] transition-colors">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="text-white/85 hover:text-[#7fb401] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu-chinh"
              className="text-white/85 hover:text-[#7fb401] transition-colors inline-flex items-center gap-1"
            >
              DỊCH VỤ <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a
              href="#san-pham"
              className="text-white/85 hover:text-[#7fb401] transition-colors inline-flex items-center gap-1"
            >
              SẢN PHẨM <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a href="#tin-tuc" className="text-white/85 hover:text-[#7fb401] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="text-white/85 hover:text-[#7fb401] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Search Box & Cart */}
          <div className="hidden sm:flex items-center gap-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white rounded-sm overflow-hidden h-8 w-48 lg:w-56"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm..."
                className="w-full px-3 text-xs text-[#333333] placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Tìm kiếm"
                className="h-full px-2.5 bg-[#7fb401] hover:bg-[#6e9c01] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>

            {cartCount > 0 && (
              <div className="relative flex items-center justify-center w-8 h-8 rounded-sm bg-white/10 text-white">
                <ShoppingBag className="w-4 h-4 text-[#7fb401]" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#7fb401] text-[10px] font-bold flex items-center justify-center text-white">
                  {cartCount}
                </span>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/85 hover:text-[#7fb401]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1c1c1c] border-t border-white/10 px-4 py-4 space-y-3 text-xs font-bold uppercase tracking-wider">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#7fb401]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white/85"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu-chinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white/85"
            >
              DỊCH VỤ
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white/85"
            >
              SẢN PHẨM
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white/85"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white/85"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER */}
      <section
        id="trang-chu"
        className="relative h-[460px] sm:h-[540px] lg:h-[600px] w-full overflow-hidden flex items-center justify-center text-center"
      >
        <img
          src={currentHeroImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-white">
          <h1 className="font-serif italic text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wider uppercase drop-shadow-md mb-4">
            {data.hero.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/95 max-w-xl mx-auto leading-relaxed mb-7 drop-shadow">
            {data.hero.subtitle}
          </p>
          <a
            href={data.hero.ctaLink || "#dat-dich-vu"}
            className="inline-block bg-[#7fb401] hover:bg-[#6d9b00] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded shadow-lg transition-colors"
          >
            {data.hero.ctaText || "Tìm hiểu thêm"}
          </a>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setHeroSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full border border-white transition-all cursor-pointer ${
                heroSlide % heroImages.length === idx
                  ? "bg-white scale-110"
                  : "bg-transparent hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 3. SPLIT INTRO (WHITE) & BOOKING FORM (LIME GREEN #7fb401) */}
      <section id="gioi-thieu" className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Dịch vụ nghỉ dưỡng Resort & Spa */}
        <div className="bg-white px-6 sm:px-10 lg:px-14 py-12 lg:py-16 flex flex-col justify-between">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-px w-10 sm:w-16 bg-gray-200" />
              <h2 className="font-serif italic font-bold text-lg sm:text-xl md:text-2xl text-[#7fb401] uppercase tracking-wide">
                {data.business.aboutTitle || "DỊCH VỤ NGHỈ DƯỠNG RESORT & SPA"}
              </h2>
              <span className="h-px w-10 sm:w-16 bg-gray-200" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              {data.business.aboutText?.[0] ||
                "Thiên đường nghỉ dưỡng và chăm sóc sức khỏe toàn diện cho mọi người với không gian hiện đại cùng những mảng màu xanh ngát của thiên nhiên"}
            </p>
          </div>

          <div className="overflow-hidden shadow-md border border-gray-100">
            <img
              src={
                data.resortIntroImage ||
                "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80"
              }
              alt="Không gian trị liệu Resort & Spa"
              className="w-full h-[300px] sm:h-[360px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right: Đặt dịch vụ (Solid Lime Green Background) */}
        <div
          id="dat-dich-vu"
          className="bg-[#7fb401] text-white px-6 sm:px-10 lg:px-14 py-12 lg:py-16 flex flex-col justify-center"
        >
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-px w-12 sm:w-20 bg-white/40" />
              <h2 className="font-serif italic font-bold text-lg sm:text-xl md:text-2xl text-white uppercase tracking-wide">
                ĐẶT DỊCH VỤ
              </h2>
              <span className="h-px w-12 sm:w-20 bg-white/40" />
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Thiên đường nghỉ dưỡng và chăm sóc sức khỏe toàn diện cho mọi người với không gian hiện đại
              cùng những mảng màu xanh ngát của thiên nhiên
            </p>
          </div>

          {bookingSubmitted ? (
            <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded p-8 text-center max-w-lg mx-auto w-full">
              <CheckCircle2 className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="font-serif italic text-xl font-bold mb-2">
                Đã Tiếp Nhận Lịch Hẹn!
              </h3>
              <p className="text-xs sm:text-sm text-white/95 mb-4 leading-relaxed">
                Cảm ơn <strong>{customerName || "Quý khách"}</strong> đã đăng ký dịch vụ{" "}
                <strong>{selectedService}</strong> ({selectedRoom}). Bộ phận lễ tân{" "}
                {data.business.name} sẽ liên hệ qua số <strong>{customerPhone}</strong> trong ít
                phút.
              </p>
              <button
                type="button"
                onClick={() => setBookingSubmitted(false)}
                className="bg-[#333333] hover:bg-[#1f1f1f] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 transition-colors cursor-pointer"
              >
                ĐẶT LỊCH HẸN KHÁC
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="max-w-xl mx-auto w-full space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1f2d00] text-center mb-1.5">
                    Chọn loại phòng
                  </label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full h-10 bg-white text-[#333333] text-xs px-3 focus:outline-none shadow-sm"
                  >
                    {(data.roomTypes || spa4DefaultData.roomTypes).map((room) => (
                      <option key={room} value={room}>
                        {room}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1f2d00] text-center mb-1.5">
                    Chọn dịch vụ
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full h-10 bg-white text-[#333333] text-xs px-3 focus:outline-none shadow-sm"
                  >
                    {(data.bookingServices || spa4DefaultData.bookingServices).map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Họ và tên"
                  className="w-full h-10 bg-white text-[#333333] placeholder:text-gray-400 text-xs px-3 focus:outline-none shadow-sm"
                />
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Số điện thoại"
                  className="w-full h-10 bg-white text-[#333333] placeholder:text-gray-400 text-xs px-3 focus:outline-none shadow-sm"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Địa chỉ / Yêu cầu khung giờ trị liệu..."
                  className="w-full bg-white text-[#333333] placeholder:text-gray-400 text-xs p-3 focus:outline-none shadow-sm resize-none"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-56 bg-[#333333] hover:bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-wider py-3 shadow-md transition-colors cursor-pointer"
                >
                  ĐẶT HẸN
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4. PROMOTIONAL CHECKERBOARD MOSAIC */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white">
        {/* Left Big Image */}
        <div className="relative min-h-[340px] sm:min-h-[460px] overflow-hidden">
          <img
            src={
              data.promoBannerImage ||
              "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
            }
            alt="Trị liệu thư giãn cao cấp"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
            <span className="w-2.5 h-2.5 rounded-full border border-white/80" />
          </div>
        </div>

        {/* Right 2x2 Checkerboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Top-Left: Text Promo 1 */}
          <div className="bg-white p-8 flex flex-col items-center justify-center text-center min-h-[230px]">
            <span className="text-xs font-bold text-[#7fb401] mb-1.5">
              {data.promotions?.[0]?.tag || "Khuyến mãi"}
            </span>
            <h3 className="font-serif italic font-bold text-xl text-[#222222] mb-2">
              {data.promotions?.[0]?.title || "Dịch vụ Massage"}
            </h3>
            <p className="inline-flex items-center gap-1.5 text-[11px] text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              {data.promotions?.[0]?.dateRange || "01/05/2025 – 30/06/2025"}
            </p>
          </div>

          {/* Top-Right: Image Promo 1 */}
          <div className="min-h-[230px] overflow-hidden">
            <img
              src={
                data.promotions?.[0]?.image ||
                "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80"
              }
              alt="Khuyến mãi Dịch vụ Massage"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom-Left: Image Promo 2 */}
          <div className="min-h-[230px] overflow-hidden order-4 sm:order-3">
            <img
              src={
                data.promotions?.[1]?.image ||
                "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
              }
              alt="Khuyến mãi Chăm sóc da"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom-Right: Text Promo 2 */}
          <div className="bg-white p-8 flex flex-col items-center justify-center text-center min-h-[230px] order-3 sm:order-4">
            <span className="text-xs font-bold text-[#7fb401] mb-1.5">
              {data.promotions?.[1]?.tag || "Khuyến mãi"}
            </span>
            <h3 className="font-serif italic font-bold text-xl text-[#222222] mb-2">
              {data.promotions?.[1]?.title || "Chăm sóc da"}
            </h3>
            <p className="inline-flex items-center gap-1.5 text-[11px] text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              {data.promotions?.[1]?.dateRange || "01/05/2025 – 30/06/2025"}
            </p>
          </div>
        </div>
      </section>

      {/* 5. CÁC MÔN YOGA KẾT HỢP */}
      <section className="py-16 sm:py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading with flanking lines */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-px w-16 sm:w-28 bg-gray-300" />
              <h2 className="font-serif italic font-bold text-xl sm:text-2xl text-[#7fb401] uppercase">
                CÁC MÔN YOGA KẾT HỢP
              </h2>
              <span className="h-px w-16 sm:w-28 bg-gray-300" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Thiên đường nghỉ dưỡng và chăm sóc sức khỏe toàn diện cho mọi người với không gian hiện đại
              cùng những mảng màu xanh ngát của thiên nhiên
            </p>
          </div>

          {/* 4 Yoga Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.yogaClasses || spa4DefaultData.yogaClasses).map((yoga) => (
              <div key={yoga.id} className="text-center group">
                <div className="h-52 overflow-hidden rounded-sm bg-white shadow-sm mb-5 flex items-center justify-center">
                  <img
                    src={yoga.image}
                    alt={yoga.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif italic font-bold text-base text-[#222222] mb-1">
                  {yoga.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Phí dịch vụ:{" "}
                  <span className="font-bold text-[#7fb401]">{yoga.price}</span>
                </p>
                <button
                  type="button"
                  onClick={() => handleQuickSelectService(yoga.title)}
                  className="inline-block border border-[#7fb401] text-[#7fb401] hover:bg-[#7fb401] hover:text-white text-[11px] font-bold uppercase px-5 py-1.5 rounded transition-colors cursor-pointer"
                >
                  LIÊN HỆ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DỊCH VỤ CHÍNH (CIRCULAR GREEN-BORDERED PORTRAITS) */}
      <section id="dich-vu-chinh" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-px w-16 sm:w-28 bg-gray-200" />
              <h2 className="font-serif italic font-bold text-xl sm:text-2xl text-[#7fb401] uppercase">
                DỊCH VỤ CHÍNH
              </h2>
              <span className="h-px w-16 sm:w-28 bg-gray-200" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Thiên đường nghỉ dưỡng và chăm sóc sức khỏe toàn diện cho mọi người với không gian hiện đại
              cùng những mảng màu xanh ngát của thiên nhiên
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.mainServices || spa4DefaultData.mainServices).map((item) => (
              <div
                key={item.id}
                onClick={() => handleQuickSelectService(item.title)}
                className="text-center group cursor-pointer"
              >
                <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full border-[4px] border-[#7fb401] overflow-hidden shadow-md mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#222222] group-hover:text-[#7fb401] transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SẢN PHẨM CHÍNH (DARK NATURE PARALLAX BANNER) */}
      <section
        id="san-pham"
        className="relative py-16 sm:py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-[#0f1d14]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 sm:w-28 bg-white/40" />
              <h2 className="font-serif italic font-bold text-xl sm:text-2xl text-white uppercase">
                SẢN PHẨM CHÍNH
              </h2>
              <span className="h-px w-16 sm:w-28 bg-white/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {(data.products || spa4DefaultData.products).map((prod) => (
              <div
                key={prod.id}
                className="bg-white p-4 text-center flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="h-44 overflow-hidden mb-3 flex items-center justify-center bg-gray-50">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xs text-gray-600 font-medium line-clamp-1 mb-1">
                    {prod.name}
                  </h3>
                  <p className="text-xs font-extrabold text-[#222222] mb-3">
                    {prod.price}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddToCart(prod.name)}
                  className="bg-[#7fb401] hover:bg-[#6b9800] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 mx-auto transition-colors cursor-pointer"
                >
                  THÊM VÀO GIỎ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GREEN NEWSLETTER BAR */}
      <section className="bg-[#7fb401] py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif italic font-bold text-lg sm:text-xl mb-1">
              Đăng ký nhận thông tin
            </h3>
            <p className="text-xs sm:text-sm text-white/90">
              Hãy để lại email để nhận những thông tin mới nhất từ chúng tôi
            </p>
          </div>

          {newsletterSubmitted ? (
            <div className="bg-white/20 px-5 py-2.5 rounded text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Cảm ơn bạn đã đăng ký nhận bản tin khuyến mãi từ {data.business.name}!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSubmitted(true);
              }}
              className="flex w-full md:w-auto max-w-md gap-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email ..."
                className="flex-1 md:w-72 h-10 bg-white text-[#333333] placeholder:text-gray-400 text-xs px-3.5 rounded-sm focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 px-6 bg-[#333333] hover:bg-[#1c1c1c] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer shrink-0"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 9. DARK CHARCOAL FOOTER */}
      <footer id="lien-he" className="bg-[#252525] text-gray-300 pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center">
                <Flower2 className="w-6 h-6 text-[#7fb401]" />
              </div>
              <div>
                <span className="block font-serif italic text-xl font-bold text-white">
                  {data.business.name}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  Resort &amp; Spa
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-5">
              {data.business.aboutText?.[0] ||
                "Thiên đường nghỉ dưỡng và chăm sóc sức khỏe toàn diện cho mọi người với không gian hiện đại cùng những mảng màu xanh ngát của thiên nhiên."}
            </p>
          </div>

          {/* Col 2: Liên hệ */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              LIÊN HỆ
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-300 shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-300 shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Menu */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              MENU
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#trang-chu" className="hover:text-[#7fb401] transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#gioi-thieu" className="hover:text-[#7fb401] transition-colors">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-[#7fb401] transition-colors">
                  Cửa hàng
                </a>
              </li>
              <li>
                <a href="#tin-tuc" className="hover:text-[#7fb401] transition-colors">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#lien-he" className="hover:text-[#7fb401] transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Tin tức */}
          <div id="tin-tuc">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              TIN TỨC
            </h4>
            <div className="space-y-3.5">
              {(data.news || spa4DefaultData.news || []).slice(0, 3).map((post) => (
                <div key={post.id} className="flex items-start gap-3 group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-11 object-cover shrink-0 rounded-xs"
                  />
                  <div className="text-xs leading-snug text-gray-300 group-hover:text-[#7fb401] transition-colors line-clamp-2">
                    {post.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Copyright */}
      <div className="bg-[#111111] py-3.5 text-center text-[11px] text-gray-400">
        © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>. Thiết kế
        &amp; vận hành hệ thống Spa chuyên nghiệp.
      </div>
    </div>
  );
}

export default DemoTemplateRenderer;
