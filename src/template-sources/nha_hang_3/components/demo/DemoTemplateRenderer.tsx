"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Search,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Smartphone,
  Calendar,
  Store,
  Wine,
  ScrollText,
  ArrowUp,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaHang3DefaultData,
  type NhaHang3Data
} from "@/template-sources/nha_hang_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function SushiBowlEmblem() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-9 rounded-full border border-[#c8a96a]/60 bg-[#1f1d18] flex items-center justify-center relative overflow-hidden shadow-inner">
        <svg viewBox="0 0 64 48" className="w-10 h-8" fill="none">
          <ellipse cx="32" cy="22" rx="22" ry="11" fill="#e9c46a" opacity="0.9" />
          <circle cx="24" cy="20" r="5" fill="#e76f51" />
          <circle cx="36" cy="19" r="5" fill="#f4a261" />
          <circle cx="31" cy="24" r="4" fill="#a5b36b" />
          <path
            d="M10 23C10 33 19 40 32 40C45 40 54 33 54 23H10Z"
            fill="#2b2620"
            stroke="#c8a96a"
            strokeWidth="1.5"
          />
          <line x1="8" y1="14" x2="56" y2="8" stroke="#c8a96a" strokeWidth="1.8" />
          <line x1="8" y1="18" x2="56" y2="13" stroke="#c8a96a" strokeWidth="1.5" />
        </svg>
      </div>
      <span className="font-serif text-base font-normal text-stone-200 tracking-wide mt-0.5 leading-none">
        Mona
      </span>
      <span className="text-[8px] uppercase tracking-[0.3em] text-[#a5b36b] mt-0.5">
        sushi
      </span>
    </div>
  );
}

function ToriiWatermark() {
  return (
    <svg
      viewBox="0 0 180 150"
      className="w-36 sm:w-44 h-32 text-stone-200/80 shrink-0"
      fill="none"
    >
      <path
        d="M12 24C55 34 125 34 168 24L162 34C120 41 60 41 18 34L12 24Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="26"
        y="48"
        width="128"
        height="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line x1="48" y1="36" x2="44" y2="140" stroke="currentColor" strokeWidth="1.8" />
      <line x1="132" y1="36" x2="136" y2="140" stroke="currentColor" strokeWidth="1.8" />
      <line x1="54" y1="36" x2="51" y2="140" stroke="currentColor" strokeWidth="1.2" />
      <line x1="126" y1="36" x2="129" y2="140" stroke="currentColor" strokeWidth="1.2" />
      <rect
        x="82"
        y="36"
        width="16"
        height="12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NhaHang3Data = adaptClonedTemplateData(
    nhaHang3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState("Set Omakase Bếp Trưởng");
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const about = data.aboutSection || nhaHang3DefaultData.aboutSection;
  const menuList = data.menuItems || nhaHang3DefaultData.menuItems;
  const masonry = data.masonryShowcase || nhaHang3DefaultData.masonryShowcase;
  const asianDining =
    data.asianDiningSection || nhaHang3DefaultData.asianDiningSection;

  const openReservation = (dishName?: string) => {
    if (dishName) setSelectedDish(dishName);
    setReservationSuccess(false);
    setReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#a5b36b] selection:text-white">
      {/* 1. PITCH-BLACK HEADER (#121212) */}
      <header className="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-300">
            <a
              href="#trang-chu"
              className="text-white border-b border-[#a5b36b] pb-1"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#a5b36b] transition-colors pb-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#khong-gian"
              className="hover:text-[#a5b36b] transition-colors pb-1"
            >
              SỰ KIỆN
            </a>
            <a
              href="#am-thuc-chau-a"
              className="hover:text-[#a5b36b] transition-colors pb-1"
            >
              BLOG
            </a>
            <a
              href="#thuc-don"
              className="hover:text-[#a5b36b] transition-colors pb-1"
            >
              CỬA HÀNG
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#a5b36b] transition-colors pb-1"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Center Sushi Bowl Crest */}
          <a href="#trang-chu" className="lg:mx-auto">
            <SushiBowlEmblem />
          </a>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => openReservation()}
              className="relative text-stone-200 hover:text-[#a5b36b] transition-colors cursor-pointer"
              aria-label="Giỏ đặt món"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -bottom-1.5 -right-2 w-4 h-4 rounded-full bg-[#a5b36b] text-[#121212] text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              onClick={() => openReservation()}
              className="text-stone-200 hover:text-[#a5b36b] transition-colors cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => openReservation()}
              className="hidden sm:inline-flex text-stone-200 hover:text-[#a5b36b] transition-colors cursor-pointer"
              aria-label="Menu đặt bàn"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-1"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#181818] border-t border-white/10 px-6 py-4 space-y-2.5 text-xs uppercase tracking-widest">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-stone-200 hover:text-[#a5b36b]"
            >
              Giới thiệu
            </a>
            <a
              href="#thuc-don"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-stone-200 hover:text-[#a5b36b]"
            >
              Thực đơn Omakase
            </a>
            <a
              href="#khong-gian"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-stone-200 hover:text-[#a5b36b]"
            >
              Nghệ thuật Sushi
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-stone-200 hover:text-[#a5b36b]"
            >
              Liên hệ đặt bàn
            </a>
          </div>
        )}
      </header>

      {/* 2. DRAMATIC OVERHEAD SALMON NIGIRI HERO */}
      <section
        id="trang-chu"
        className="relative min-h-[540px] lg:min-h-[640px] bg-[#070707] text-white flex items-center overflow-hidden"
      >
        <img
          src={
            heroSlide === 0
              ? data.hero.backgroundImage
              : data.hero.images?.[1] || data.hero.backgroundImage
          }
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/65" />

        {/* Left & Right Thin Slider Arrows */}
        <button
          onClick={() => setHeroSlide((s) => (s + 1) % 2)}
          className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Slide trước"
        >
          <ChevronLeft className="w-9 h-9 stroke-[1]" />
        </button>
        <button
          onClick={() => setHeroSlide((s) => (s + 1) % 2)}
          className="hidden sm:flex absolute right-14 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Slide tiếp"
        >
          <ChevronRight className="w-9 h-9 stroke-[1]" />
        </button>

        {/* Right Floating Olive Green Quick Action Dock */}
        <div className="hidden sm:flex flex-col gap-1 absolute right-0 top-1/3 z-30">
          <button
            onClick={() => openReservation()}
            className="w-9 h-9 bg-[#a5b36b] hover:bg-[#92a058] text-white flex items-center justify-center shadow-md cursor-pointer"
            title="Thực đơn đặt món"
          >
            <Store className="w-4 h-4" />
          </button>
          <button
            onClick={() => openReservation()}
            className="w-9 h-9 bg-[#a5b36b] hover:bg-[#92a058] text-white flex items-center justify-center shadow-md cursor-pointer"
            title="Đặt bàn Omakase"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <a
            href="#lien-he"
            className="w-9 h-9 bg-[#a5b36b] hover:bg-[#92a058] text-white flex items-center justify-center shadow-md"
            title="Địa chỉ nhà hàng"
          >
            <MapPin className="w-4 h-4" />
          </a>
        </div>

        {/* Center-Left Editorial Typography + Giant Subtle Circle Watermark */}
        <div className="relative z-10 max-w-5xl w-full mx-auto px-6 sm:px-12 py-20">
          {/* Giant Translucent Seal Watermark */}
          <div className="hidden sm:flex w-44 h-44 rounded-full border-[6px] border-white/15 items-center justify-center absolute left-1/3 top-1/2 -translate-y-1/2 select-none pointer-events-none">
            <span className="font-serif text-7xl text-white/15">鮨</span>
          </div>

          <div className="max-w-xl space-y-5 relative z-10">
            <p className="text-xs sm:text-sm font-medium tracking-wider text-stone-200">
              {data.hero.eyebrow || "Tinh Hoa Ẩm Thực Nhật Bản"}
            </p>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[86px] font-normal leading-[0.98] tracking-tight text-white whitespace-pre-line">
              {data.hero.title}
            </h1>

            <div className="pt-3">
              <a
                href="#gioi-thieu"
                className="inline-block bg-[#a5b36b] hover:bg-[#92a058] text-white text-xs font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                {data.hero.ctaText || "Về chúng tôi"}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slider Dots */}
        <div className="absolute bottom-6 inset-x-0 z-20 flex items-center justify-center gap-2.5">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setHeroSlide(idx % 2)}
              aria-label={`Slide ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                heroSlide === idx % 2 ? "bg-[#a5b36b] scale-125" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 3. SECTION: NHÀ HÀNG CỦA CHÚNG TÔI ("Chúng tôi yêu thích ẩm thực cổ điển Nhật Bản") */}
      <section id="gioi-thieu" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Overlapping Dual Photos (Red Lanterns + Sushi Geta Board) */}
            <div className="lg:col-span-6 relative min-h-[420px] sm:min-h-[470px]">
              {/* Top-left Red Japanese Paper Lanterns */}
              <div className="w-[68%] h-[340px] sm:h-[380px] overflow-hidden shadow-lg">
                <img
                  src={about.lanternImage}
                  alt="Đèn lồng Nhật Bản truyền thống"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Subtle Bamboo Watermark Top-Right */}
              <svg
                viewBox="0 0 120 120"
                className="w-28 h-28 text-stone-200 absolute top-2 right-6 pointer-events-none"
                fill="none"
              >
                <path
                  d="M20 100C45 70 70 40 100 10M60 52C75 48 92 50 105 58M45 72C30 62 18 60 8 66"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>

              {/* Bottom-right Overlapping Wooden Board Sushi Photo */}
              <div className="w-[62%] h-[250px] sm:h-[280px] overflow-hidden shadow-2xl absolute bottom-0 right-2 sm:right-6 border-4 border-white">
                <img
                  src={about.sushiBoardImage}
                  alt="Sushi truyền thống Nhật Bản"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Editorial Content */}
            <div className="lg:col-span-6 space-y-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a5b36b]">
                {about.eyebrow}
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a] leading-[1.2]">
                {data.business.aboutTitle || about.title}
              </h2>

              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {data.business.aboutText?.[0] || about.description}
              </p>

              <div className="pt-2 space-y-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1a1a1a]">
                <p>{about.weekdayHours}</p>
                <p>{about.saturdayHours}</p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => openReservation()}
                  className="bg-[#a5b36b] hover:bg-[#92a058] text-white text-xs font-semibold px-8 py-3 rounded-full transition-colors cursor-pointer"
                >
                  {about.ctaLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: THỰC ĐƠN (2-COLUMN DOTTED-LEADER FINE DINING MENU) */}
      <section id="thuc-don" className="py-20 lg:py-24 bg-[#f9f7f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-lg mx-auto mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a5b36b]">
              TRỞ THÀNH KHÁCH CỦA CHÚNG TÔI
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a]">
              Thực đơn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {menuList.map((dish) => (
              <div
                key={dish.id}
                onClick={() => {
                  setCartCount((c) => c + 1);
                  openReservation(dish.name);
                }}
                className="group cursor-pointer"
              >
                <div className="flex items-baseline gap-2">
                  <h3 className="font-serif text-base sm:text-lg font-normal text-[#1a1a1a] group-hover:text-[#7f8d46] transition-colors shrink-0">
                    {dish.name}
                  </h3>
                  <div className="flex-1 border-b border-dotted border-stone-300 mx-1" />
                  <span className="font-serif text-sm sm:text-base font-semibold text-[#1a1a1a] shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-stone-400 leading-relaxed">
                  {dish.vietnameseSub}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openReservation("Trọn bộ Thực đơn Omakase")}
              className="bg-[#a5b36b] hover:bg-[#92a058] text-white text-xs font-semibold px-9 py-3 rounded-full transition-colors cursor-pointer"
            >
              Xem thêm
            </button>
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH 5-PHOTO MASONRY SHOWCASE GRID */}
      <section id="khong-gian" className="bg-[#111111]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Left Large 2x2 Square: Master Itamae Sushi Chef */}
          <div className="md:col-span-2 md:row-span-2 h-[380px] sm:h-[520px] overflow-hidden group relative">
            <img
              src={masonry.mainChefImage}
              alt="Bếp trưởng Itamae chế biến Sashimi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Top-Middle: Minimalist Japanese Tableware */}
          <div className="h-64 sm:h-[260px] overflow-hidden group">
            <img
              src={masonry.topMiddleImage}
              alt="Không gian bàn tiệc Nhật Bản"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Top-Right: Nigiri & White Wine */}
          <div className="h-64 sm:h-[260px] overflow-hidden group">
            <img
              src={masonry.topRightImage}
              alt="Thưởng thức Nigiri thượng hạng"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom-Middle: Chef Preparing Roll */}
          <div className="h-64 sm:h-[260px] overflow-hidden group">
            <img
              src={masonry.bottomMiddleImage}
              alt="Nghệ nhân cuộn Maki"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom-Right: Chopsticks Lifting Salmon Nigiri */}
          <div className="h-64 sm:h-[260px] overflow-hidden group">
            <img
              src={masonry.bottomRightImage}
              alt="Sushi cá hồi tươi Na Uy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 6. SECTION: TƯƠI & NGON ("Thưởng thức ẩm thực châu Á đích thực") */}
      <section id="am-thuc-chau-a" className="py-20 lg:py-28 bg-[#f9f7f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Overlapping Dual Photos */}
            <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[430px]">
              <div className="w-[65%] h-[280px] sm:h-[310px] overflow-hidden shadow-md">
                <img
                  src={asianDining.backImage}
                  alt="Chế biến sushi thủ công"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-[68%] h-[270px] sm:h-[300px] overflow-hidden shadow-2xl absolute bottom-0 right-2 sm:right-4 border-4 border-[#f9f7f2]">
                <img
                  src={asianDining.frontImage}
                  alt="Thực khách thưởng thức sushi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content + 2 Line-Icon Features */}
            <div className="lg:col-span-6 space-y-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a5b36b]">
                {asianDining.eyebrow}
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a] leading-[1.2]">
                {asianDining.title}
              </h2>

              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {asianDining.description}
              </p>

              <div className="space-y-5 pt-3">
                {asianDining.highlights.map((hl) => (
                  <div key={hl.id} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded border border-[#a5b36b]/50 text-[#a5b36b] flex items-center justify-center shrink-0 mt-0.5">
                      {hl.icon === "menu" ? (
                        <ScrollText className="w-5 h-5 stroke-[1.5]" />
                      ) : (
                        <Wine className="w-5 h-5 stroke-[1.5]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-[#1a1a1a]">
                        {hl.title}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                        {hl.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: THÔNG TIN ("Liên hệ với chúng tôi") + TORII GATE ILLUSTRATION */}
      <section id="lien-he" className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Intro */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a5b36b]">
                THÔNG TIN
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1a1a1a] leading-tight">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-xs text-stone-400 leading-relaxed pt-1">
                Quý khách vui lòng liên hệ đặt bàn trước để đội ngũ bếp trưởng chuẩn bị
                nguyên liệu hải sản theo mùa tươi ngon nhất và sắp xếp phòng riêng Tatami.
              </p>
            </div>

            {/* Middle: Địa chỉ */}
            <div className="lg:col-span-3 flex items-start gap-3 pt-2">
              <div className="w-8 h-8 rounded-full border border-stone-200 text-[#a5b36b] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-[#1a1a1a]">
                  Địa chỉ
                </h3>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                  {data.business.address}
                </p>
              </div>
            </div>

            {/* Right: Thông tin liên hệ */}
            <div className="lg:col-span-3 flex items-start gap-3 pt-2">
              <div className="w-8 h-8 rounded-full border border-stone-200 text-[#a5b36b] flex items-center justify-center shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-[#1a1a1a]">
                  Thông tin liên hệ
                </h3>
                <p className="mt-2 text-xs">
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="text-stone-600 border-b border-[#a5b36b] pb-0.5 hover:text-[#a5b36b]"
                  >
                    {primaryEmail}
                  </a>
                </p>
                <p className="mt-3 text-xs font-bold text-[#1a1a1a]">
                  <a href={`tel:${primaryPhone.replace(/\s+/g, "")}`}>
                    {primaryPhone}
                  </a>
                </p>
              </div>
            </div>

            {/* Far Right Torii Gate Line Illustration */}
            <div className="lg:col-span-2 flex justify-end">
              <ToriiWatermark />
            </div>
          </div>
        </div>
      </section>

      {/* 8. MINIMALIST DARK FOOTER (#141414) */}
      <footer className="bg-[#141414] text-stone-400 pt-16 pb-8 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-7">
          <div className="flex justify-center">
            <SushiBowlEmblem />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300">
            <a
              href="#trang-chu"
              className="text-white border-b border-[#a5b36b] pb-0.5"
            >
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#a5b36b] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#khong-gian" className="hover:text-[#a5b36b] transition-colors">
              SỰ KIỆN
            </a>
            <a
              href="#am-thuc-chau-a"
              className="hover:text-[#a5b36b] transition-colors"
            >
              BLOG
            </a>
            <a href="#thuc-don" className="hover:text-[#a5b36b] transition-colors">
              CỬA HÀNG
            </a>
            <a href="#lien-he" className="hover:text-[#a5b36b] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          <div className="flex items-center justify-center gap-3">
            <a
              href="#lien-he"
              className="w-8 h-8 rounded-full border border-white/15 hover:border-[#a5b36b] text-white flex items-center justify-center text-xs transition-colors"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#lien-he"
              className="w-8 h-8 rounded-full border border-white/15 hover:border-[#a5b36b] text-white flex items-center justify-center text-xs transition-colors"
              aria-label="Youtube"
            >
              ▶
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 text-[11px] text-stone-500 flex items-center justify-center">
            <span>
              © Bản quyền thuộc về{" "}
              <strong className="text-stone-300">{data.business.name}</strong>
            </span>
          </div>
        </div>

        <a
          href="#trang-chu"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#a5b36b] text-white flex items-center justify-center absolute right-6 bottom-6 transition-colors"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </footer>

      {/* OMAKASE TABLE RESERVATION MODAL */}
      {reservationOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#181818] border border-[#a5b36b]/50 text-white max-w-md w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setReservationOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a5b36b]">
              ĐẶT BÀN TRỰC TUYẾN
            </p>
            <h3 className="font-serif text-2xl font-normal text-white mt-1 mb-5">
              Trải Nghiệm {data.business.name}
            </h3>

            {reservationSuccess ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#a5b36b] mx-auto" />
                <h4 className="font-serif text-lg">Đã xác nhận yêu cầu đặt bàn!</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Cảm ơn quý khách đã chọn món / bàn <strong>{selectedDish}</strong>. Lễ
                  tân nhà hàng sẽ liên hệ xác nhận vị trí bàn ngay.
                </p>
                <button
                  onClick={() => setReservationOpen(false)}
                  className="bg-[#a5b36b] text-white text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReservationSuccess(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">
                    Món đặc biệt / Không gian bàn
                  </label>
                  <input
                    type="text"
                    value={selectedDish}
                    onChange={(e) => setSelectedDish(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 px-3.5 py-2.5 text-white focus:outline-none focus:border-[#a5b36b]"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên thực khách *"
                  className="w-full bg-white/5 border border-white/15 px-3.5 py-2.5 text-white focus:outline-none focus:border-[#a5b36b]"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    className="w-full bg-white/5 border border-white/15 px-3.5 py-2.5 text-white focus:outline-none focus:border-[#a5b36b]"
                  />
                  <select className="w-full bg-[#222222] border border-white/15 px-3.5 py-2.5 text-white focus:outline-none focus:border-[#a5b36b]">
                    <option>2 Khách (Quầy Omakase)</option>
                    <option>4 Khách (Bàn tiêu chuẩn)</option>
                    <option>6-10 Khách (Phòng Tatami VIP)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#a5b36b] hover:bg-[#92a058] text-white font-semibold py-3 rounded-full transition-colors cursor-pointer"
                >
                  Xác Nhận Đặt Bàn
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
