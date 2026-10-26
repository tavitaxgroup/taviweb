"use client";

import React, { useState } from "react";
import {
  Building2,
  Phone,
  ChevronRight,
  ChevronLeft,
  Car,
  Sparkles,
  Wifi,
  Dumbbell,
  Utensils,
  Waves,
  Play,
  Check,
  Users,
  Maximize2,
  Star,
  Calendar,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung17DefaultData,
  type XayDung17Data
} from "@/template-sources/xay_dung_17/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: XayDung17Data = adaptClonedTemplateData(
    xayDung17DefaultData,
    incomingData
  );

  const amenityStrip = data.amenityStrip || xayDung17DefaultData.amenityStrip;
  const aboutCircle =
    data.aboutCircleSection || xayDung17DefaultData.aboutCircleSection;
  const hotelRooms = data.hotelRooms || xayDung17DefaultData.hotelRooms;
  const numberedServices =
    data.numberedServices || xayDung17DefaultData.numberedServices;
  const bentoGallery = data.bentoGallery || xayDung17DefaultData.bentoGallery;
  const testimonials = data.testimonials || xayDung17DefaultData.testimonials || [];
  const newsList = data.news || xayDung17DefaultData.news || [];
  const footerStrip =
    data.footerGalleryStrip || xayDung17DefaultData.footerGalleryStrip;

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Phòng Superior");
  const [bookingSent, setBookingSent] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";

  const openRoomBooking = (roomTitle?: string) => {
    if (roomTitle) setSelectedRoom(roomTitle);
    setBookingSent(false);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#173e4d] selection:text-white">
      {/* =====================================================================
          1. GRAND HOTEL ARCHITECTURE HERO + TRANSLUCENT TOP HEADER
         ===================================================================== */}
      <section
        id="trang-chu"
        className="relative min-h-[600px] md:min-h-[680px] bg-[#122b36] text-white flex flex-col justify-between overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65" />
        </div>

        {/* Translucent Top Header */}
        <header className="relative z-20 max-w-6xl mx-auto w-full px-4 h-20 flex items-center justify-between">
          <a href="#trang-chu" className="flex items-center gap-2.5">
            <Building2 className="w-7 h-7 text-white" />
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold leading-none">
                {data.business.name}
              </span>
              <span className="block text-[10px] text-white/75 tracking-wider">
                Mona Media
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-white/90">
            <a href="#trang-chu" className="text-amber-400 font-semibold">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-amber-300 transition">
              Giới thiệu
            </a>
            <a href="#phong-khach-san" className="hover:text-amber-300 transition">
              Phòng nghỉ
            </a>
            <a href="#dich-vu" className="hover:text-amber-300 transition">
              Dịch vụ
            </a>
            <a href="#tin-tuc" className="hover:text-amber-300 transition">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-amber-300 transition">
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/[^\d+]/g, "")}`}
              className="hidden sm:flex items-center gap-1.5 text-xs text-white/90 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{primaryPhone}</span>
            </a>
            <button
              type="button"
              onClick={() => openRoomBooking()}
              className="bg-[#173e4d] hover:bg-[#0f2c38] border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-xs inline-flex items-center gap-1 transition cursor-pointer"
            >
              <span>Đặt lịch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden text-white p-1"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="relative z-20 lg:hidden bg-[#173e4d] px-6 py-4 space-y-2 text-xs border-t border-white/15">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giới thiệu
            </a>
            <a
              href="#phong-khach-san"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Phòng khách sạn
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Dịch vụ &amp; Tiện ích
            </a>
            <a
              href="#thu-vien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Thư viện hình ảnh
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tin tức &amp; Sự kiện
            </a>
          </div>
        )}

        {/* Centered Hero Copy */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center my-auto pb-24 pt-10">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-[52px] font-bold leading-tight whitespace-pre-line mb-4">
            {data.hero.title}
          </h1>
          <p className="text-xs sm:text-sm text-white/85 max-w-xl mx-auto mb-6">
            {data.hero.subtitle}
          </p>
          <a
            href="#phong-khach-san"
            className="inline-flex items-center gap-1.5 bg-[#173e4d] hover:bg-[#11303c] text-white text-xs font-semibold px-6 py-3 rounded-xs shadow-md transition"
          >
            <span>{data.hero.ctaText || "Khám phá"}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* =====================================================================
          2. OVERLAPPING DARK-TEAL SEARCH BOX + 6 AMENITY CARDS ON SAND BG
         ===================================================================== */}
      <section id="tim-kiem" className="bg-[#ede6d6] pb-14 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Overlapping Dark-Teal Search Box (#173e4d) */}
          <div className="relative z-20 -mt-20 bg-[#173e4d] text-white p-6 sm:p-10 rounded-xs shadow-xl">
            <div className="text-center mb-6">
              <p className="text-[11px] text-sky-200/80">Tìm kiếm phòng</p>
              <h2 className="font-serif text-lg sm:text-2xl font-bold uppercase tracking-wide mt-0.5">
                CHÀO MỪNG ĐẾN VỚI {data.business.name.toUpperCase()}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end text-xs">
              <div>
                <label className="block text-[11px] text-white/75 mb-1">
                  Nhận phòng
                </label>
                <input
                  type="date"
                  defaultValue="2026-06-10"
                  className="w-full bg-transparent border-b border-white/35 py-2 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-white/75 mb-1">
                  Trả phòng
                </label>
                <input
                  type="date"
                  defaultValue="2026-06-14"
                  className="w-full bg-transparent border-b border-white/35 py-2 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-white/75 mb-1">
                  Người lớn
                </label>
                <select className="w-full bg-transparent border-b border-white/35 py-2 text-white focus:outline-none">
                  <option className="text-slate-800">1</option>
                  <option className="text-slate-800">2</option>
                  <option className="text-slate-800">4</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] text-white/75 mb-1">
                  Trẻ em
                </label>
                <select className="w-full bg-transparent border-b border-white/35 py-2 text-white focus:outline-none">
                  <option className="text-slate-800">0</option>
                  <option className="text-slate-800">1</option>
                  <option className="text-slate-800">2</option>
                </select>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => openRoomBooking()}
                  className="w-full border border-white/50 hover:bg-white hover:text-[#173e4d] text-white font-semibold py-2.5 px-4 inline-flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>Tìm kiếm</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 6 White Amenity Icon Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {amenityStrip.map((am) => (
              <div
                key={am.id}
                className="bg-white rounded-xs p-5 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-md transition"
              >
                <div className="text-[#173e4d] mb-2">
                  {am.iconType === "shuttle" && <Car className="w-6 h-6" />}
                  {am.iconType === "spa" && <Sparkles className="w-6 h-6" />}
                  {am.iconType === "wifi" && <Wifi className="w-6 h-6" />}
                  {am.iconType === "gym" && <Dumbbell className="w-6 h-6" />}
                  {am.iconType === "dining" && <Utensils className="w-6 h-6" />}
                  {am.iconType === "pool" && <Waves className="w-6 h-6" />}
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  {am.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. CIRCULAR PHOTO COLLAGE + "CHÀO MỪNG ĐẾN VỚI ĐIỂM DỪNG CHÂN..."
         ===================================================================== */}
      <section id="gioi-thieu" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Circular Collage (6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6">
            {/* Top-Left Square Thumbnail */}
            <img
              src={aboutCircle.topLeftThumb}
              alt="Ban công nghỉ dưỡng"
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xs shadow-md border-4 border-white absolute top-0 left-4 sm:left-8 z-20"
            />

            {/* Main Circle Photo */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg border-4 border-slate-50">
              <img
                src={aboutCircle.mainCircleImage}
                alt={aboutCircle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dark-Teal Play Button Badge Top-Right of Circle */}
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              aria-label="Xem video"
              className="w-12 h-10 bg-[#173e4d] text-white flex items-center justify-center rounded-xs shadow-md absolute top-6 right-16 sm:right-24 z-20 hover:bg-[#0f2c38] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
            </button>

            {/* Bottom-Right Square Thumbnail */}
            <img
              src={aboutCircle.bottomRightThumb}
              alt="Khuôn viên hồ bơi"
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xs shadow-md border-4 border-white absolute bottom-0 right-4 sm:right-8 z-20"
            />
          </div>

          {/* Right Copy + 2x2 Checkmarks (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs text-slate-500 font-medium">
              {aboutCircle.eyebrow}
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-slate-800 leading-snug">
              {aboutCircle.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {aboutCircle.description}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-700 font-medium">
              {aboutCircle.checkmarks.map((chk, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#173e4d] shrink-0" />
                  <span>{chk}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openRoomBooking()}
                className="bg-[#173e4d] hover:bg-[#102d38] text-white text-xs font-semibold px-6 py-2.5 rounded-xs inline-flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Khám phá</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. DARK-TEAL "PHÒNG KHÁCH SẠN CỦA CHÚNG TÔI" (#173e4d, 6 Cards 3x2)
         ===================================================================== */}
      <section id="phong-khach-san" className="bg-[#173e4d] py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center text-white mb-12">
            <p className="text-xs text-sky-200/80">Tiện nghi và an toàn</p>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold uppercase mt-1">
              PHÒNG KHÁCH SẠN CỦA CHÚNG TÔI
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xs overflow-hidden shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2.5">
                    <h3 className="font-serif text-base font-bold text-slate-800">
                      {room.title}
                    </h3>
                    <div className="flex items-center gap-4 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#173e4d]" />
                        Người lớn: {room.adults}
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3 h-3 text-[#173e4d]" />
                        Diện tích: {room.area}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {room.description}
                    </p>
                    <p className="text-xs text-slate-500 pt-1">
                      Từ{" "}
                      <strong className="text-sm font-extrabold text-slate-800">
                        {room.price}
                      </strong>{" "}
                      / đêm
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openRoomBooking(room.title)}
                  className="w-full bg-slate-100 hover:bg-[#173e4d] hover:text-white text-slate-700 text-xs font-semibold py-2.5 flex items-center justify-center gap-1 border-t border-slate-200 transition cursor-pointer"
                >
                  <span>Đặt ngay</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. WARM SAND "DỊCH VỤ ĐẲNG CẤP VÀ TIỆN ÍCH" (4 Numbered Cards)
         ===================================================================== */}
      <section id="dich-vu" className="bg-[#ede6d6] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-slate-500">Tận tâm chuyên nghiệp</p>
            <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-1">
              DỊCH VỤ ĐẲNG CẤP VÀ TIỆN ÍCH
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {numberedServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#f5f1e8] border border-white rounded-xs p-6 flex flex-col justify-between space-y-4 shadow-2xs"
              >
                <div className="space-y-2">
                  <span className="text-[11px] text-slate-400 font-semibold">
                    {srv.number}
                  </span>
                  <h3 className="font-serif text-sm font-bold text-slate-800">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="text-[#173e4d] pt-2">
                  {srv.iconType === "pool" && <Waves className="w-6 h-6" />}
                  {srv.iconType === "spa" && <Sparkles className="w-6 h-6" />}
                  {srv.iconType === "conference" && <Users className="w-6 h-6" />}
                  {srv.iconType === "restaurant" && <Utensils className="w-6 h-6" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. THƯ VIỆN KHÁCH SẠN (Asymmetric 6-Photo Bento Grid)
         ===================================================================== */}
      <section id="thu-vien" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-slate-500">Uy tín và tin cậy</p>
            <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-1">
              THƯ VIỆN KHÁCH SẠN
            </h2>
          </div>

          {/* Row 1: 3 cols + 3 cols + 6 cols */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
            <div className="md:col-span-3 h-60 overflow-hidden rounded-xs">
              <img
                src={bentoGallery[0]}
                alt="Thư viện 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-3 h-60 overflow-hidden rounded-xs">
              <img
                src={bentoGallery[1]}
                alt="Thư viện 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-6 h-60 overflow-hidden rounded-xs">
              <img
                src={bentoGallery[2]}
                alt="Thư viện 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Row 2: 6 cols + 3 cols + 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6 h-60 overflow-hidden rounded-xs">
              <img
                src={bentoGallery[3]}
                alt="Thư viện 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-3 h-60 overflow-hidden rounded-xs">
              <img
                src={bentoGallery[4]}
                alt="Thư viện 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-3 h-60 overflow-hidden rounded-xs">
              <img
                src={bentoGallery[5]}
                alt="Thư viện 6"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. FULL-WIDTH VIDEO SHOWCASE BANNER
         ===================================================================== */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden flex items-center justify-center">
        <img
          src={data.videoBannerImage}
          alt="Video giới thiệu khách sạn"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <button
          type="button"
          onClick={() => setVideoModalOpen(true)}
          aria-label="Phát video"
          className="relative z-10 w-16 h-16 rounded-full bg-white text-[#173e4d] flex items-center justify-center shadow-2xl hover:scale-110 transition cursor-pointer"
        >
          <Play className="w-6 h-6 fill-[#173e4d] ml-0.5" />
        </button>
      </div>

      {/* =====================================================================
          8. ĐÁNH GIÁ TÍCH CỰC CỦA KHÁCH HÀNG (4 Cards Row)
         ===================================================================== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-slate-500">Khách hàng phản hồi</p>
            <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-1">
              ĐÁNH GIÁ TÍCH CỰC CỦA KHÁCH HÀNG
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.slice(0, 4).map((tes) => (
              <div
                key={tes.id}
                className="border border-slate-200 rounded-xs p-5 text-center space-y-3"
              >
                {tes.avatar && (
                  <img
                    src={tes.avatar}
                    alt={tes.author}
                    className="w-12 h-12 rounded-full object-cover mx-auto"
                  />
                )}
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  &ldquo;{tes.content}&rdquo;
                </p>
                <div>
                  <h4 className="font-serif text-xs font-bold text-slate-800">
                    {tes.author}
                  </h4>
                  <span className="block text-[10px] text-slate-400">
                    {tes.role || "Khách hàng"}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-0.5 text-[#173e4d]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-[#173e4d]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. TIN TỨC VÀ SỰ KIỆN MỚI NHẤT (Warm Sand #ede6d6)
         ===================================================================== */}
      <section id="tin-tuc" className="bg-[#ede6d6] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs text-slate-500">Tin tức &amp; Blog</p>
              <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-0.5">
                TIN TỨC VÀ SỰ KIỆN MỚI NHẤT
              </h2>
            </div>
            <a
              href="#lien-he"
              className="bg-[#173e4d] text-white text-[11px] font-semibold px-4 py-2 rounded-xs inline-flex items-center gap-1"
            >
              <span>Xem thêm</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xs overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif text-sm font-bold text-slate-800 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4">
                  <a
                    href="#lien-he"
                    className="text-[11px] font-semibold text-slate-700 hover:text-[#173e4d] inline-flex items-center gap-1"
                  >
                    <span>Chi tiết</span>
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. DARK CHARCOAL FOOTER (#191919) WITH 6-IMAGE TOP STRIP
         ===================================================================== */}
      <footer id="lien-he" className="bg-[#191919] text-neutral-400 pt-10 pb-8 px-4 text-xs">
        <div className="max-w-5xl mx-auto">
          {/* 6-Image Strip */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-12">
            {footerStrip.map((img, idx) => (
              <div key={idx} className="h-24 rounded-xs overflow-hidden">
                <img
                  src={img}
                  alt={`Footer ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-start">
            {/* Left: DANH MỤC (3 cols) */}
            <div className="md:col-span-3 space-y-2">
              <h4 className="text-xs font-bold uppercase text-white mb-3">
                DANH MỤC
              </h4>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <a href="#trang-chu" className="hover:text-white">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#phong-khach-san" className="hover:text-white">
                    Phòng nghỉ
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-white">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Center: Golden Hotel Logo + Newsletter Input (6 cols) */}
            <div className="md:col-span-6 text-center space-y-4">
              <div className="inline-flex items-center gap-2 text-white">
                <Building2 className="w-7 h-7" />
                <div className="text-left">
                  <span className="block font-serif text-lg font-bold leading-none">
                    {data.business.name}
                  </span>
                  <span className="block text-[10px] text-neutral-400">
                    Mona Media
                  </span>
                </div>
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-white">
                ĐĂNG KÝ ĐỂ NHẬN BẢN TIN
              </p>

              {newsletterSent ? (
                <p className="text-emerald-400 text-xs font-semibold">
                  Cảm ơn bạn đã đăng ký nhận bản tin!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSent(true);
                  }}
                  className="max-w-sm mx-auto flex items-stretch bg-white p-1 rounded-xs"
                >
                  <input
                    type="email"
                    required
                    placeholder="Nhập email..."
                    className="flex-1 px-3 py-1.5 text-xs text-slate-800 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#173e4d] text-white text-[11px] font-semibold px-4 py-1.5 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Đăng ký</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: LIÊN KẾT (3 cols) */}
            <div className="md:col-span-3 md:text-right space-y-2">
              <h4 className="text-xs font-bold uppercase text-white mb-3">
                LIÊN KẾT
              </h4>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <a href="#gioi-thieu" className="hover:text-white">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#thu-vien" className="hover:text-white">
                    Thư viện
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-white">
                    Tin mới nhất
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-neutral-500">
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-neutral-300">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-xs shadow-2xl relative border-t-4 border-[#173e4d]">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-lg font-bold text-slate-800 mb-1">
              Đặt Phòng — {data.business.name}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Hạng phòng lựa chọn: <strong className="text-[#173e4d]">{selectedRoom}</strong>
            </p>
            {bookingSent ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-800">
                  Đã gửi yêu cầu đặt phòng thành công!
                </p>
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="bg-[#173e4d] text-white text-xs font-semibold px-6 py-2"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSent(true);
                }}
                className="space-y-3 text-xs"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên quý khách *"
                  className="w-full border border-slate-200 px-3 py-2.5 focus:outline-none focus:border-[#173e4d]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  className="w-full border border-slate-200 px-3 py-2.5 focus:outline-none focus:border-[#173e4d]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#173e4d] hover:bg-[#102d38] text-white font-semibold py-3 transition cursor-pointer"
                >
                  XÁC NHẬN ĐẶT LỊCH
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#173e4d] text-white max-w-lg w-full p-6 rounded-xs relative text-center space-y-4">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-3 right-3 text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-lg font-bold">
              Tour Tham Quan Kiến Trúc {data.business.name}
            </h3>
            <img
              src={data.videoBannerImage}
              alt="Tour khách sạn"
              className="w-full h-56 object-cover rounded-xs"
            />
            <p className="text-xs text-sky-100 leading-relaxed">
              Khám phá không gian nghỉ dưỡng 5 sao với hệ thống phòng Tổng thống,
              bể bơi ngoài trời và sảnh hội nghị tiêu chuẩn quốc tế.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
