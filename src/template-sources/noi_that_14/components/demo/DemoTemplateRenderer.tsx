"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  User,
  Maximize2,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat14DefaultData,
  type NoiThat14TemplateData,
  type NoiThat14SmallRoomCard
} from "@/template-sources/noi_that_14/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat14TemplateData = adaptClonedTemplateData(
    noiThat14DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRoomModal, setSelectedRoomModal] =
    useState<NoiThat14SmallRoomCard | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    checkIn: "24/10/2026",
    checkOut: "27/10/2026",
    adults: "2 Người lớn",
    children: "0 Trẻ em"
  });

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "info@monasuite.vn";

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#b5946d] selection:text-white">
      {/* 1. WHITE TOPBAR + DARK CHARCOAL NAVBAR (#1a1a1a) + WARM BRONZE CTA (#b5946d - Exact match to NT017) */}
      <div className="bg-white border-b border-slate-100 text-[11px] text-slate-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-slate-700" />
              <span>{data.business.address}</span>
            </span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-[#b5946d]"
            >
              <Phone className="w-3 h-3 text-slate-700" />
              <span>{primaryPhone}</span>
            </a>
          </div>
          <a
            href="#dat-phong"
            className="hidden sm:inline-flex items-center gap-1 hover:text-[#b5946d]"
          >
            <Mail className="w-3 h-3" />
            <span>Đăng nhập</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#1a1a1a] text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left 5-Star Script/Serif Logo */}
          <a href="#" className="flex flex-col items-center shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            ) : (
              <>
                <div className="flex items-center gap-0.5 text-[#b5946d] mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-2.5 h-2.5 fill-current" />
                  ))}
                </div>
                <span className="text-base sm:text-lg font-serif italic font-bold leading-none">
                  {data.business.name}
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">
                  Hotel & Resort
                </span>
              </>
            )}
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-300">
            <a
              href="#"
              className="text-white border-b-2 border-[#b5946d] pb-1"
            >
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#b5946d] transition">
              GIỚI THIỆU
            </a>
            <a href="#loai-phong" className="hover:text-[#b5946d] transition">
              PHÒNG
            </a>
            <a href="#am-thuc" className="hover:text-[#b5946d] transition">
              DỊCH VỤ
            </a>
            <a href="#tin-tuc" className="hover:text-[#b5946d] transition">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#b5946d] transition">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Bronze Button */}
          <div className="hidden sm:block">
            <a
              href="#dat-phong"
              className="bg-[#b5946d] hover:bg-[#9e7d56] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 transition"
            >
              ĐẶT PHÒNG
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-white/20 text-white"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141414] px-6 py-4 space-y-2 border-t border-white/10">
            {[
              { label: "TRANG CHỦ", href: "#" },
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "PHÒNG", href: "#loai-phong" },
              { label: "DỊCH VỤ", href: "#am-thuc" },
              { label: "TIN TỨC", href: "#tin-tuc" },
              { label: "LIÊN HỆ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-[#b5946d]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO BANNER + BOTTOM TRANSLUCENT DARK BOOKING BAR */}
      <section className="relative min-h-[540px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden bg-slate-900">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Center Hero Title */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 pt-28 pb-16 text-center text-white my-auto">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-white/90 mb-3">
            {data.hero.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold uppercase tracking-widest text-white drop-shadow mb-6">
            {data.hero.title}
          </h1>
          <a
            href={data.hero.ctaLink || "#loai-phong"}
            className="inline-block border border-white/80 hover:bg-[#b5946d] hover:border-[#b5946d] text-white text-xs font-medium px-6 py-2 transition"
          >
            {data.hero.ctaText || "Xem phòng"}
          </a>
        </div>

        {/* Bottom Translucent Dark Booking Bar */}
        <div
          id="dat-phong"
          className="relative z-20 max-w-5xl mx-auto w-full px-4 pb-6"
        >
          <div className="bg-black/65 backdrop-blur-md p-4 sm:p-5">
            {bookingSubmitted ? (
              <div className="text-center text-white py-2 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b5946d]" />
                <span>
                  Đã ghi nhận thông tin đặt phòng tại {data.business.name}!
                </span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                  setTimeout(() => setBookingSubmitted(false), 3500);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
              >
                <div>
                  <label className="block text-[11px] font-bold text-white mb-1">
                    Ngày nhận:
                  </label>
                  <input
                    type="text"
                    value={bookingForm.checkIn}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, checkIn: e.target.value })
                    }
                    className="w-full bg-white px-3 py-2 text-xs text-slate-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white mb-1">
                    Ngày trả:
                  </label>
                  <input
                    type="text"
                    value={bookingForm.checkOut}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        checkOut: e.target.value
                      })
                    }
                    className="w-full bg-white px-3 py-2 text-xs text-slate-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white mb-1">
                    Số người lớn:
                  </label>
                  <select
                    value={bookingForm.adults}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, adults: e.target.value })
                    }
                    className="w-full bg-white px-3 py-2 text-xs text-slate-800 focus:outline-none"
                  >
                    <option>1 Người lớn</option>
                    <option>2 Người lớn</option>
                    <option>4 Người lớn</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white mb-1">
                    Số trẻ em:
                  </label>
                  <select
                    value={bookingForm.children}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        children: e.target.value
                      })
                    }
                    className="w-full bg-white px-3 py-2 text-xs text-slate-800 focus:outline-none"
                  >
                    <option>0 Trẻ em</option>
                    <option>1 Trẻ em</option>
                    <option>2 Trẻ em</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#b5946d] hover:bg-[#9e7d56] text-white text-xs font-bold uppercase tracking-wider py-2.5 transition cursor-pointer"
                  >
                    ĐẶT PHÒNG
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. "GIỚI THIỆU / Mona Media Resort" (LEFT CENTERED COPY + RIGHT 3-PHOTO OVERLAPPING COLLAGE) */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Centered Copy */}
            <div className="lg:col-span-6 text-center px-2 sm:px-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                GIỚI THIỆU
              </span>
              <div className="w-6 h-0.5 bg-slate-300 mx-auto my-2" />
              <h2 className="text-2xl sm:text-4xl font-serif text-slate-900 mb-5">
                {data.business.aboutTitle || data.business.name}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-7">
                {data.business.aboutText?.[0]}
              </p>
              <a
                href="#loai-phong"
                className="inline-block bg-[#b5946d] hover:bg-[#9e7d56] text-white text-xs font-semibold px-6 py-2.5 transition"
              >
                Xem thêm
              </a>
            </div>

            {/* Right 3-Photo Overlapping Collage */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-3 items-center">
              <div className="col-span-7 space-y-3">
                <div className="aspect-[4/3] overflow-hidden shadow-md bg-slate-100">
                  <img
                    src={data.aboutCollageImages[0]}
                    alt="Nội thất phòng nghỉ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden shadow-md bg-slate-100">
                  <img
                    src={data.aboutCollageImages[1]}
                    alt="Phòng tắm hiện đại"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-5">
                <div className="aspect-[3/5] overflow-hidden shadow-lg bg-slate-100">
                  <img
                    src={data.aboutCollageImages[2]}
                    alt="Không gian đọc sách"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "MONA MEDIA / Loại phòng" (1 LARGE FEATURED CARD LEFT + 2x2 GRID RIGHT ON #f7f7f7) */}
      <section id="loai-phong" className="py-16 lg:py-24 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
              {data.business.name}
            </span>
            <div className="w-6 h-0.5 bg-slate-300 mx-auto my-2" />
            <h2 className="text-2xl sm:text-4xl font-serif text-slate-900">
              Loại phòng
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Large Featured Room Card */}
            <div className="lg:col-span-6 bg-white border border-slate-100 shadow-sm flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={data.featuredRoom.image}
                  alt={data.featuredRoom.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white drop-shadow">
                  {data.featuredRoom.badge}
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2">
                    {data.featuredRoom.title}
                  </h3>
                  <div className="flex items-center gap-5 text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#b5946d]" />
                      {data.featuredRoom.guestsText}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-[#b5946d]" />
                      {data.featuredRoom.areaText}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {data.featuredRoom.description}
                  </p>
                  <p className="text-xs text-slate-700 mb-5">
                    Giá:{" "}
                    <strong className="font-bold text-slate-900">
                      {data.featuredRoom.priceText}
                    </strong>
                  </p>
                </div>

                <div>
                  <a
                    href="#dat-phong"
                    className="inline-block bg-[#b5946d] hover:bg-[#9e7d56] text-white text-xs font-semibold px-6 py-2.5 transition"
                  >
                    Đặt ngay
                  </a>
                </div>
              </div>
            </div>

            {/* Right 2x2 Small Room Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {(data.smallRoomCards || []).map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedRoomModal(card)}
                  className="group relative aspect-square overflow-hidden bg-slate-200 cursor-pointer shadow-sm"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                      {card.title}
                    </span>
                    <span className="bg-[#b5946d] text-white text-[9px] font-bold uppercase px-2 py-1">
                      {card.priceBadge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "MONA MEDIA RESORT / Khám phá vị trí" (LEFT 2x2 INTERIOR GRID + RIGHT DARK #1c1c1c BOX) */}
      <section className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left 2x2 Interior Photo Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-1 bg-white">
          {(data.locationQuadImages || []).slice(0, 4).map((imgUrl, idx) => (
            <div key={idx} className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={imgUrl}
                alt={`Không gian nội thất ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Right Dark #1c1c1c Box with 2 Text Columns */}
        <div className="lg:col-span-6 bg-[#1c1c1c] text-white p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-2">
            {data.business.name}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif mb-6">
            {data.locationHeading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed mb-8">
            {(data.locationColumns || []).map((colText, idx) => (
              <p key={idx}>{colText}</p>
            ))}
          </div>

          <div>
            <a
              href="#dat-phong"
              className="inline-block bg-[#b5946d] hover:bg-[#9e7d56] text-white text-xs font-semibold px-6 py-2.5 transition"
            >
              Chi tiết
            </a>
          </div>
        </div>
      </section>

      {/* 6. 2x2 CHECKERBOARD: "ẨM THỰC / Nhà hàng" & "LỄ TÂN / Sảnh tiếp khách" */}
      <section id="am-thuc" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 shadow-sm border border-slate-100">
            {/* Top-Left: Nhà hàng Text */}
            <div className="p-10 sm:p-14 flex flex-col justify-center text-center bg-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                {data.diningBlock.eyebrow}
              </span>
              <div className="w-6 h-0.5 bg-slate-300 mx-auto my-2" />
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">
                {data.diningBlock.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                {data.diningBlock.description}
              </p>
              <div>
                <a
                  href="#dat-phong"
                  className="inline-block bg-[#b5946d] hover:bg-[#9e7d56] text-white text-xs font-semibold px-6 py-2 transition"
                >
                  Chi tiết
                </a>
              </div>
            </div>

            {/* Top-Right: Nhà hàng Image */}
            <div className="min-h-[280px] overflow-hidden bg-slate-100">
              <img
                src={data.diningBlock.image}
                alt={data.diningBlock.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Left: Sảnh tiếp khách Image */}
            <div className="min-h-[280px] overflow-hidden bg-slate-100 md:order-3">
              <img
                src={data.lobbyBlock.image}
                alt={data.lobbyBlock.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Right: Sảnh tiếp khách Text */}
            <div className="p-10 sm:p-14 flex flex-col justify-center text-center bg-white md:order-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                {data.lobbyBlock.eyebrow}
              </span>
              <div className="w-6 h-0.5 bg-slate-300 mx-auto my-2" />
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">
                {data.lobbyBlock.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                {data.lobbyBlock.description}
              </p>
              <div>
                <a
                  href="#dat-phong"
                  className="inline-block bg-[#b5946d] hover:bg-[#9e7d56] text-white text-xs font-semibold px-6 py-2 transition"
                >
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "MONA HOTEL & RESORT / Thiên đường nghỉ dưỡng" BANNER */}
      <section className="relative py-20 lg:py-24 bg-slate-900 text-white text-center overflow-hidden">
        <img
          src={data.paradiseBanner.backgroundImage}
          alt={data.paradiseBanner.title}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/90 mb-2">
            {data.paradiseBanner.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif mb-6">
            {data.paradiseBanner.title}
          </h2>
          <a
            href="#dat-phong"
            className="inline-block border border-white/80 hover:bg-[#b5946d] hover:border-[#b5946d] text-white text-xs px-7 py-2 transition"
          >
            {data.paradiseBanner.ctaText}
          </a>
        </div>
      </section>

      {/* 8. "TIN TỨC / Tin mới cập nhật" (3-COLUMN MULTI-ROW MASONRY BLOG GRID) */}
      <section id="tin-tuc" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
              TIN TỨC
            </span>
            <div className="w-6 h-0.5 bg-slate-300 mx-auto my-2" />
            <h2 className="text-2xl sm:text-4xl font-serif text-slate-900">
              Tin mới cập nhật
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Standard Article + Bottom Overlay Card */}
            <div className="space-y-6">
              {data.news?.[0] && (
                <article className="border border-slate-100 shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={data.news[0].image}
                      alt={data.news[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-serif font-bold text-slate-900 mb-2">
                      {data.news[0].title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {data.news[0].excerpt}
                    </p>
                    <a
                      href="#dat-phong"
                      className="inline-block border border-slate-300 hover:border-[#b5946d] hover:text-[#b5946d] text-[10px] font-bold uppercase px-3 py-1 transition"
                    >
                      ĐỌC THÊM
                    </a>
                  </div>
                </article>
              )}

              {data.overlayNewsCards?.[0] && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shadow-sm">
                  <img
                    src={data.overlayNewsCards[0].image}
                    alt={data.overlayNewsCards[0].title}
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 flex items-end justify-center p-4 text-center text-white bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <h4 className="text-xs font-serif font-bold">
                      {data.overlayNewsCards[0].title}
                    </h4>
                  </div>
                </div>
              )}
            </div>

            {/* Column 2: Top Gray Announcement Box + Standard Article */}
            <div className="space-y-6">
              <div className="bg-[#d6d6d6] text-white p-6 text-center font-serif text-xs">
                {data.centerAnnouncementText}
              </div>

              {data.news?.[1] && (
                <article className="border border-slate-100 shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={data.news[1].image}
                      alt={data.news[1].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-serif font-bold text-slate-900 mb-2">
                      {data.news[1].title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {data.news[1].excerpt}
                    </p>
                    <a
                      href="#dat-phong"
                      className="inline-block border border-slate-300 hover:border-[#b5946d] hover:text-[#b5946d] text-[10px] font-bold uppercase px-3 py-1 transition"
                    >
                      ĐỌC THÊM
                    </a>
                  </div>
                </article>
              )}
            </div>

            {/* Column 3: Standard Article + Bottom Overlay Card */}
            <div className="space-y-6">
              {data.news?.[2] && (
                <article className="border border-slate-100 shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={data.news[2].image}
                      alt={data.news[2].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-serif font-bold text-slate-900 mb-2">
                      {data.news[2].title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {data.news[2].excerpt}
                    </p>
                    <a
                      href="#dat-phong"
                      className="inline-block border border-slate-300 hover:border-[#b5946d] hover:text-[#b5946d] text-[10px] font-bold uppercase px-3 py-1 transition"
                    >
                      ĐỌC THÊM
                    </a>
                  </div>
                </article>
              )}

              {data.overlayNewsCards?.[1] && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shadow-sm">
                  <img
                    src={data.overlayNewsCards[1].image}
                    alt={data.overlayNewsCards[1].title}
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 flex items-end justify-center p-4 text-center text-white bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <h4 className="text-xs font-serif font-bold">
                      {data.overlayNewsCards[1].title}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. DARK CHARCOAL FOOTER (#1a1a1a) + PARTNER BRAND BAR */}
      <footer id="lien-he" className="bg-[#1a1a1a] text-slate-400 pt-14 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Col 1: Logo & Intro */}
            <div className="lg:col-span-3 space-y-3">
              <div>
                <div className="flex items-center gap-0.5 text-[#b5946d] mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-2.5 h-2.5 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-serif italic font-bold text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Tọa lạc ngay vịnh Mũi Né xinh đẹp và trông ra đảo Hòn Lao hoang sơ giữa biển xanh.
              </p>
            </div>

            {/* Col 2: THÔNG TIN LIÊN HỆ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#b5946d] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#b5946d] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#b5946d] shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-white"
                  >
                    {primaryEmail}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: HÌNH ẢNH */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                HÌNH ẢNH
              </h4>
              <div className="grid grid-cols-3 gap-1.5">
                {(data.footerGallery || []).slice(0, 6).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="aspect-square overflow-hidden bg-slate-800"
                  >
                    <img
                      src={imgUrl}
                      alt={`Hình nội thất ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                ĐĂNG KÝ
              </h4>
              <p className="text-[11px] leading-relaxed mb-3">
                Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
              </p>
              {newsletterSubmitted ? (
                <p className="text-xs font-bold text-[#b5946d]">
                  Đã đăng ký nhận bản tin thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubmitted(true);
                  }}
                  className="space-y-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="w-full bg-white text-slate-900 px-3 py-2 text-xs focus:outline-none"
                  />
                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-[#b5946d] hover:bg-[#9e7d56] text-white text-[10px] font-bold uppercase tracking-wider px-5 py-2 transition cursor-pointer"
                    >
                      ĐĂNG KÝ
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Partner Brand Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-5 text-[11px] text-slate-400">
              <a href="#" className="hover:text-white">
                Trang chủ
              </a>
              <a href="#gioi-thieu" className="hover:text-white">
                Giới thiệu
              </a>
              <a href="#loai-phong" className="hover:text-white">
                Cửa hàng
              </a>
              <a href="#tin-tuc" className="hover:text-white">
                Tin tức
              </a>
              <a href="#lien-he" className="hover:text-white">
                Liên hệ
              </a>
            </div>

            <div className="flex items-center gap-6 text-slate-500">
              <span className="font-serif italic text-base text-slate-300">
                eighty eight
              </span>
              <span className="font-serif uppercase tracking-widest text-xs">
                ALSONA
              </span>
              <span className="font-serif uppercase tracking-widest text-xs">
                WILLMONT
              </span>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#111111] py-3 text-center text-[11px] text-slate-500">
        © Bản quyền thuộc về {data.business.name} • Thiết Kế Nội Thất Căn Hộ Dịch Vụ & Resort
      </div>

      {/* Room Detail Modal */}
      {selectedRoomModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedRoomModal(null)}
        >
          <div
            className="bg-white max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <img
                src={selectedRoomModal.image}
                alt={selectedRoomModal.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedRoomModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase text-[#b5946d]">
                {selectedRoomModal.priceBadge}
              </span>
              <h3 className="text-lg font-serif font-bold text-slate-900 mt-1 mb-2">
                {selectedRoomModal.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                {selectedRoomModal.description}
              </p>
              <a
                href="#dat-phong"
                onClick={() => setSelectedRoomModal(null)}
                className="block w-full text-center bg-[#b5946d] hover:bg-[#9e7d56] text-white text-xs font-bold uppercase py-3 transition"
              >
                Đặt phòng ngay
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
