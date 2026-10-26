"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShoppingBag,
  Play,
  Star,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat13DefaultData,
  type NoiThat13TemplateData,
  type NoiThat13RoomItem
} from "@/template-sources/noi_that_13/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat13TemplateData = adaptClonedTemplateData(
    noiThat13DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRoomCategory, setActiveRoomCategory] = useState("Tất cả");
  const [selectedRoom, setSelectedRoom] = useState<NoiThat13RoomItem | null>(
    null
  );
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [questionSubmitted, setQuestionSubmitted] = useState(false);

  const [heroForm, setHeroForm] = useState({
    fullName: "",
    email: "",
    note: ""
  });

  const [questionForm, setQuestionForm] = useState({
    fullName: "",
    email: "",
    question: ""
  });

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const secondaryPhone = data.business.phone?.[1] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "info@monabeach.vn";

  const categories = data.roomCategories || [
    "Tất cả",
    "Cặp đôi",
    "Gia đình",
    "Sang trọng",
    "Giá rẻ"
  ];

  const filteredRooms = (data.rooms || []).filter((rm) => {
    if (activeRoomCategory === "Tất cả") return true;
    return rm.category.toLowerCase() === activeRoomCategory.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#1da1f2] selection:text-white overflow-x-hidden">
      {/* 1. HERO OVER TROPICAL LAGOON WITH TOPBAR, TRANSPARENT HEADER & STACKED 3-FIELD FORM (Exact match to NT016) */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex flex-col justify-between overflow-hidden bg-[#0e4d6c]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3c5d]/75 via-[#0b3c5d]/40 to-[#0e4d6c]/65" />

        {/* Topbar + Main Transparent Header */}
        <div className="relative z-30">
          {/* Thin Topbar */}
          <div className="border-b border-white/15 text-white/85 text-[10px] sm:text-[11px]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
              <span>Chào mừng đến với {data.business.name}</span>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-300" />
                  <span>ĐỊA CHỈ</span>
                </span>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1 hover:text-sky-300"
                >
                  <Phone className="w-3 h-3 text-sky-300" />
                  <span>{primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Transparent Header */}
          <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="#" className="text-white shrink-0">
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={data.business.name}
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
              ) : (
                <span className="text-lg sm:text-xl font-serif uppercase tracking-[0.18em]">
                  {data.business.name}
                </span>
              )}
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-white">
              <a href="#" className="border-b-2 border-white pb-1 font-bold">
                Trang chủ
              </a>
              <a href="#hotel-resort" className="hover:text-sky-200 transition">
                Khách sạn
              </a>
              <a href="#diem-den" className="hover:text-sky-200 transition">
                Dịch vụ
              </a>
              <a href="#tour-tron-goi" className="hover:text-sky-200 transition">
                Tin tức
              </a>
              <a href="#tan-huong" className="hover:text-sky-200 transition">
                Giới thiệu
              </a>
              <a href="#lien-he" className="hover:text-sky-200 transition">
                Liên hệ
              </a>
              <a
                href="#hotel-resort"
                aria-label="Đặt phòng"
                className="hover:text-sky-200"
              >
                <ShoppingBag className="w-4 h-4" />
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded bg-white/15 text-white"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </header>

          {mobileMenuOpen && (
            <div className="md:hidden bg-[#0b3c5d]/95 text-white px-6 py-4 space-y-2 border-b border-white/15">
              {[
                { label: "Trang chủ", href: "#" },
                { label: "Khách sạn", href: "#hotel-resort" },
                { label: "Dịch vụ", href: "#diem-den" },
                { label: "Tin tức", href: "#tour-tron-goi" },
                { label: "Giới thiệu", href: "#tan-huong" },
                { label: "Liên hệ", href: "#lien-he" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-xs font-semibold hover:text-sky-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Center Hero Title + Stacked 3-Field Form */}
        <div className="relative z-20 max-w-3xl mx-auto w-full px-4 pb-20 pt-10 text-center text-white">
          <h1 className="text-3xl sm:text-5xl font-normal uppercase tracking-wider text-white drop-shadow-md mb-2">
            {data.hero.title}
          </h1>
          <p className="text-xs sm:text-base text-white/95 mb-8">
            {data.hero.subtitle}
          </p>

          {heroSubmitted ? (
            <div className="bg-white/95 text-slate-900 p-5 rounded-lg max-w-xl mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8 text-[#1da1f2] mx-auto mb-2" />
              <p className="text-sm font-bold">
                Đã gửi yêu cầu thành công! Tư vấn viên {data.business.name} sẽ liên hệ với bạn ngay.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setHeroSubmitted(true);
                setTimeout(() => setHeroSubmitted(false), 3500);
              }}
              className="max-w-2xl mx-auto space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên"
                value={heroForm.fullName}
                onChange={(e) =>
                  setHeroForm({ ...heroForm, fullName: e.target.value })
                }
                className="w-full bg-white text-slate-800 px-4 py-3 text-xs sm:text-sm shadow-md focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder="Email hoặc Số điện thoại"
                value={heroForm.email}
                onChange={(e) =>
                  setHeroForm({ ...heroForm, email: e.target.value })
                }
                className="w-full bg-white text-slate-800 px-4 py-3 text-xs sm:text-sm shadow-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Ghi chú"
                value={heroForm.note}
                onChange={(e) =>
                  setHeroForm({ ...heroForm, note: e.target.value })
                }
                className="w-full bg-white text-slate-800 px-4 py-3 text-xs sm:text-sm shadow-md focus:outline-none"
              />
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#1da1f2] hover:bg-[#0d8ddb] text-white text-xs font-bold uppercase tracking-wider px-8 py-2.5 rounded-full shadow-lg transition cursor-pointer"
                >
                  {data.hero.ctaText || "ĐẶT NGAY"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 2. "TẬN HƯỞNG CUỘC SỐNG" + FULL-BLEED 4-PHOTO STRIP + 2-COLUMN WAVE VIDEO SPLIT */}
      <section id="tan-huong" className="bg-[#f8f9fa] pt-14 pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-normal uppercase tracking-wide text-[#2b8cbe]">
            TẬN HƯỞNG CUỘC SỐNG
          </h2>
          <div className="w-8 h-0.5 bg-[#2b8cbe] mx-auto my-2.5" />
          <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
            Hãy đi dạo qua những khu vườn tươi tốt và thưởng thức các loại nước uống dưới ánh nắng và thư giãn trên bãi cát trắng của chúng tôi hoặc lướt sóng, thả diều.
          </p>
        </div>

        {/* Full-Bleed 4-Photo Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-14">
          {(data.lifestyleStripImages || []).map((imgUrl, idx) => (
            <div
              key={idx}
              className="aspect-[16/10] overflow-hidden bg-slate-200"
            >
              <img
                src={imgUrl}
                alt={`Trải nghiệm biển ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Contained 2-Column Split: Left Copy + Right Video Player Card */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <h3 className="text-base sm:text-lg font-normal text-slate-800 mb-3">
                {data.waveSectionTitle}
              </h3>
              <div className="space-y-3 text-xs text-slate-500 leading-relaxed">
                {(data.waveSectionParagraphs || []).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            <div className="md:col-span-6">
              <div
                onClick={() => setVideoModalOpen(true)}
                className="group relative aspect-[16/10] overflow-hidden bg-slate-900 shadow-lg cursor-pointer"
              >
                <img
                  src={data.waveVideoImage}
                  alt={data.waveSectionTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 text-[#1da1f2] text-[10px] font-bold uppercase px-2.5 py-1">
                  TRẢI NGHIỆM BIỆT THỰ BIỂN & LƯỚT SÓNG
                </div>
                <div className="absolute bottom-3 left-3 w-11 h-8 rounded bg-black/80 group-hover:bg-[#1da1f2] text-white flex items-center justify-center transition">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "HOTEL và RESORT" (FILTERABLE 3x2 INTERIOR ROOM GALLERY) */}
      <section id="hotel-resort" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-normal uppercase tracking-wide text-[#2b8cbe]">
              HOTEL và RESORT
            </h2>
            <div className="w-8 h-0.5 bg-[#2b8cbe] mx-auto my-2.5" />
            <p className="text-xs text-slate-500">
              Chọn phòng phù hợp với nhu cầu của bạn. Liên hệ HOTLINE để tư vấn thêm
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 mb-8">
            {categories.map((cat) => {
              const isActive = activeRoomCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveRoomCategory(cat)}
                  className={`pb-1 transition cursor-pointer ${
                    isActive
                      ? "text-slate-900 font-bold border-b-2 border-slate-800"
                      : "hover:text-[#2b8cbe]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3x2 Grid of 6 Coastal Bedroom Interiors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className="group relative aspect-square overflow-hidden bg-slate-100 cursor-pointer shadow-sm"
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold uppercase text-sky-300">
                    {room.category} • {room.priceText}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold mt-0.5">
                    {room.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUR FULL-WIDTH 50/50 CHECKERBOARD SPLIT ROWS */}
      <section id="diem-den" className="bg-white border-t border-slate-100">
        {(data.checkerboardRows || []).map((row) => (
          <div key={row.id} className="grid grid-cols-1 md:grid-cols-2">
            {/* Text Half */}
            <div
              className={`flex flex-col justify-center p-10 sm:p-16 lg:p-20 bg-white ${
                row.imageOnLeft ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="max-w-md mx-auto w-full">
                <h3 className="text-lg sm:text-2xl font-normal uppercase tracking-wide text-slate-800 mb-3">
                  {row.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {row.description}
                </p>
                <div>
                  <a
                    href="#dat-cau-hoi"
                    className="inline-block bg-[#1a1a1a] hover:bg-[#1da1f2] text-white text-[11px] font-semibold px-6 py-2 rounded-full transition"
                  >
                    Đọc thêm
                  </a>
                </div>
              </div>
            </div>

            {/* Image Half */}
            <div
              className={`min-h-[280px] sm:min-h-[340px] overflow-hidden bg-slate-200 ${
                row.imageOnLeft ? "md:order-1" : "md:order-2"
              }`}
            >
              <img
                src={row.image}
                alt={row.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        ))}
      </section>

      {/* 5. OCEAN-BLUE TESTIMONIAL BANNER (#1f7ab8) */}
      <section className="bg-[#1f7ab8] py-12 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <img
            src={
              data.testimonials?.[0]?.avatar ||
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
            }
            alt={data.testimonials?.[0]?.author || "Khách hàng"}
            className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-white shadow-md mb-2"
          />
          <div className="flex items-center justify-center gap-0.5 text-yellow-300 mb-2">
            {[1, 2, 3, 4, 5].map((st) => (
              <Star key={st} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <p className="text-xs sm:text-sm text-white/95 mb-2">
            {data.testimonials?.[0]?.content}
          </p>
          <p className="text-xs font-bold">
            {data.testimonials?.[0]?.author || "Khách hàng Minh Anh"}{" "}
            <span className="font-normal text-white/80">
              / {data.testimonials?.[0]?.role || "Nhà thám hiểm"}
            </span>
          </p>
        </div>
      </section>

      {/* 6. "TOUR TRỌN GÓI" (3 PACKAGE CARDS WITH SKY-BLUE PRICE) */}
      <section id="tour-tron-goi" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-normal uppercase tracking-wide text-[#2b8cbe]">
              TOUR TRỌN GÓI
            </h2>
            <div className="w-8 h-0.5 bg-[#2b8cbe] mx-auto my-2.5" />
            <p className="text-xs text-slate-500">
              Đơn giản hóa lịch trình du lịch trong tầm tay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.tourPackages || []).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#f8f9fa] border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800">
                    {pkg.title}
                  </h3>
                  <span className="text-xs font-bold text-[#1da1f2] mt-0.5 mb-3 block">
                    {pkg.priceText}
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK DINING VIDEO BANNER ("THƯỞNG THỨC ẨM THỰC ĐỘC ĐÁO") */}
      <section className="relative py-24 bg-slate-900 text-white text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Thưởng thức ẩm thực độc đáo"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            className="w-12 h-12 rounded-full border-2 border-white/80 hover:bg-[#1da1f2] hover:border-[#1da1f2] text-white flex items-center justify-center mx-auto mb-3 transition cursor-pointer"
            aria-label="Xem video ẩm thực"
          >
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </button>
          <h2 className="text-lg sm:text-2xl font-normal uppercase tracking-widest">
            THƯỞNG THỨC ẨM THỰC ĐỘC ĐÁO
          </h2>
        </div>
      </section>

      {/* 8. "ĐẶT CÂU HỎI ?" CONTACT FORM SECTION */}
      <section id="dat-cau-hoi" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-normal uppercase tracking-wide text-[#2b8cbe]">
            ĐẶT CÂU HỎI ?
          </h2>
          <div className="w-8 h-0.5 bg-[#2b8cbe] mx-auto mt-2 mb-8" />

          {questionSubmitted ? (
            <div className="bg-white border border-sky-200 p-6 rounded shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-[#1da1f2] mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Cảm ơn bạn đã gửi câu hỏi! Đội ngũ tư vấn {data.business.name} sẽ phản hồi sớm nhất.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setQuestionSubmitted(true);
                setTimeout(() => setQuestionSubmitted(false), 3500);
              }}
              className="space-y-3 text-left"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên"
                value={questionForm.fullName}
                onChange={(e) =>
                  setQuestionForm({ ...questionForm, fullName: e.target.value })
                }
                className="w-full bg-white border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-[#1da1f2]"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={questionForm.email}
                onChange={(e) =>
                  setQuestionForm({ ...questionForm, email: e.target.value })
                }
                className="w-full bg-white border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-[#1da1f2]"
              />
              <input
                type="text"
                required
                placeholder="Để lại câu hỏi"
                value={questionForm.question}
                onChange={(e) =>
                  setQuestionForm({ ...questionForm, question: e.target.value })
                }
                className="w-full bg-white border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-[#1da1f2]"
              />
              <div className="pt-3 text-center">
                <button
                  type="submit"
                  className="bg-[#1da1f2] hover:bg-[#0d8ddb] text-white text-xs font-bold uppercase tracking-wider px-8 py-2.5 rounded-full shadow transition cursor-pointer"
                >
                  GỬI NGAY
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 9. DARK CHARCOAL 4-COLUMN FOOTER (#222222) */}
      <footer id="lien-he" className="bg-[#222222] text-slate-400 pt-14 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: VỀ CHÚNG TÔI */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                VỀ CHÚNG TÔI
              </h4>
              <p className="text-[11px] leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>
              <div className="text-lg font-serif uppercase tracking-[0.18em] text-white pt-1">
                {data.business.name}
              </div>
            </div>

            {/* Col 2: LIÊN HỆ */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                LIÊN HỆ
              </h4>
              <ul className="space-y-2 text-[11px] mb-5">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <a
                    href={`tel:${secondaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white"
                  >
                    {secondaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-white"
                  >
                    {primaryEmail}
                  </a>
                </li>
              </ul>
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                KẾT NỐI NGAY
              </h5>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <span>FB</span>
                <span>IG</span>
                <span>TW</span>
                <span>PT</span>
              </div>
            </div>

            {/* Col 3: CỔNG THANH TOÁN */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                CỔNG THANH TOÁN
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Visa", "PayPal", "MasterCard"].map((method) => (
                  <span
                    key={method}
                    className="border border-slate-600 px-3 py-1 text-[11px] text-slate-300 rounded-sm"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Col 4: BÀI VIẾT MỚI */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                BÀI VIẾT MỚI
              </h4>
              <ul className="divide-y divide-slate-700/70 text-[11px]">
                {(data.news || []).slice(0, 3).map((post) => (
                  <li key={post.id} className="py-2 first:pt-0">
                    <a href="#tour-tron-goi" className="hover:text-white">
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#191919] py-3 text-center text-[11px] text-slate-500">
        © Bản quyền thuộc về {data.business.name} • Thiết Kế Nội Thất & Biệt Thự Nghỉ Dưỡng Biển
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase text-[#1da1f2]">
                {selectedRoom.category} • {selectedRoom.priceText}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                {selectedRoom.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                {selectedRoom.description}
              </p>
              <a
                href="#dat-cau-hoi"
                onClick={() => setSelectedRoom(null)}
                className="block w-full text-center bg-[#1da1f2] text-white text-xs font-bold uppercase py-3 rounded-full"
              >
                Đặt phòng & Tư vấn nội thất
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-white max-w-xl w-full rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-slate-100">
              <span className="text-xs font-bold uppercase text-[#2b8cbe]">
                Video Trải Nghiệm {data.business.name}
              </span>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-center space-y-3">
              <img
                src={data.waveVideoImage}
                alt="Video"
                className="w-full h-60 object-cover rounded"
              />
              <p className="text-xs text-slate-600">
                Liên hệ Hotline <strong className="text-[#1da1f2]">{primaryPhone}</strong> để đặt lịch trải nghiệm thực tế.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
