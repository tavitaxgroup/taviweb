"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Palmtree,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung20DefaultData,
  type XayDung20TemplateData,
  type XayDung20RoomCard
} from "@/template-sources/xay_dung_20/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung20TemplateData = adaptClonedTemplateData(
    xayDung20DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<XayDung20RoomCard | null>(
    null
  );
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    phone: "",
    roomType: "Twin Garden View",
    guests: "2 người"
  });

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "booking@monaresort.vn";

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingForm({
        fullName: "",
        phone: "",
        roomType: "Twin Garden View",
        guests: "2 người"
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#f5df18] selection:text-black">
      {/* 1. HERO + TOPBAR + TRANSPARENT HEADER + BRIGHT YELLOW BOOKING BAR (#f5df18 - Exact match to XD020) */}
      <section className="relative">
        <div className="relative min-h-[540px] lg:min-h-[620px] flex flex-col justify-between overflow-hidden bg-slate-900">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/70" />

          {/* Topbar + Main Header */}
          <div className="relative z-30">
            {/* Thin Topbar */}
            <div className="border-b border-white/15 text-white/90 text-[11px]">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#f5df18]" />
                    <span>{data.business.address}</span>
                  </span>
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#f5df18]"
                  >
                    <Phone className="w-3 h-3 text-[#f5df18]" />
                    <span>{primaryPhone}</span>
                  </a>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider">
                  <a href="#lien-he" className="hover:text-[#f5df18]">
                    FB
                  </a>
                  <a href="#lien-he" className="hover:text-[#f5df18]">
                    IG
                  </a>
                  <a href="#lien-he" className="hover:text-[#f5df18]">
                    TW
                  </a>
                </div>
              </div>
            </div>

            {/* Main Transparent Navbar */}
            <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
              <a href="#" className="flex items-center gap-2.5 shrink-0">
                {data.business.logo ? (
                  <img
                    src={data.business.logo}
                    alt={data.business.name}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full border-2 border-[#f5df18] bg-slate-900/70 flex items-center justify-center text-[#f5df18]">
                      <Palmtree className="w-5 h-5" />
                    </div>
                    <div className="leading-none text-white">
                      <span className="block text-base sm:text-lg font-serif font-bold tracking-wide">
                        {data.business.name}
                      </span>
                      <span className="block text-[9px] uppercase tracking-[0.25em] text-[#f5df18]">
                        Resort & Villas
                      </span>
                    </div>
                  </div>
                )}
              </a>

              <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-white">
                <a href="#" className="text-[#f5df18]">
                  TRANG CHỦ
                </a>
                <a href="#gioi-thieu" className="hover:text-[#f5df18] transition">
                  GIỚI THIỆU
                </a>
                <a href="#dich-vu" className="hover:text-[#f5df18] transition">
                  DỊCH VỤ
                </a>
                <a href="#phong-nghi" className="hover:text-[#f5df18] transition">
                  PHÒNG
                </a>
                <a href="#tin-tuc" className="hover:text-[#f5df18] transition">
                  TIN TỨC
                </a>
                <a href="#lien-he" className="hover:text-[#f5df18] transition">
                  LIÊN HỆ
                </a>
              </nav>

              {/* Rounded Search Pill */}
              <div className="hidden sm:flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3.5 py-1.5 text-white text-xs">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="bg-transparent placeholder:text-white/80 text-white text-xs w-28 focus:outline-none"
                />
                <Search className="w-3.5 h-3.5 text-white/90" />
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded bg-white/15 text-white"
                aria-label="Mở menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </header>

            {mobileMenuOpen && (
              <div className="lg:hidden bg-slate-900/95 text-white px-6 py-4 space-y-2 border-b border-white/15">
                {[
                  { label: "TRANG CHỦ", href: "#" },
                  { label: "GIỚI THIỆU", href: "#gioi-thieu" },
                  { label: "DỊCH VỤ", href: "#dich-vu" },
                  { label: "PHÒNG", href: "#phong-nghi" },
                  { label: "TIN TỨC", href: "#tin-tuc" },
                  { label: "LIÊN HỆ", href: "#lien-he" }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-bold uppercase tracking-wider hover:text-[#f5df18]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Center Hero Title & Yellow Outlined Button */}
          <div className="relative z-20 max-w-3xl mx-auto px-4 pb-20 pt-10 text-center text-white">
            <h1 className="text-4xl sm:text-6xl font-serif font-bold uppercase tracking-wider text-[#f5df18] drop-shadow-md mb-4">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-xl mx-auto mb-7">
              {data.hero.subtitle}
            </p>
            <a
              href={data.hero.ctaLink || "#phong-nghi"}
              className="inline-block border-2 border-[#f5df18] text-[#f5df18] hover:bg-[#f5df18] hover:text-black text-xs font-bold px-7 py-2.5 transition"
            >
              {data.hero.ctaText || "Xem phòng"}
            </a>
          </div>
        </div>

        {/* Full-Width Bright Yellow Booking Bar (#f5df18) */}
        <div id="dat-phong" className="bg-[#f5df18] py-6 shadow-md">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {bookingSubmitted ? (
              <div className="bg-black text-[#f5df18] py-3 px-4 text-center text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  Đã tiếp nhận yêu cầu đặt phòng! Lễ tân {data.business.name} sẽ gọi xác nhận ngay.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleBookingSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
              >
                <div>
                  <label className="block text-[11px] font-bold text-slate-900 mb-1">
                    Họ & tên:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ và tên"
                    value={bookingForm.fullName}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        fullName: e.target.value
                      })
                    }
                    className="w-full bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-900 mb-1">
                    Số điện thoại:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    value={bookingForm.phone}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, phone: e.target.value })
                    }
                    className="w-full bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-900 mb-1">
                    Chọn loại phòng:
                  </label>
                  <select
                    value={bookingForm.roomType}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        roomType: e.target.value
                      })
                    }
                    className="w-full bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none"
                  >
                    {(data.roomCards || []).map((rm) => (
                      <option key={rm.id} value={rm.title}>
                        {rm.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-900 mb-1">
                    Số người:
                  </label>
                  <input
                    type="text"
                    placeholder="Số lượng khách"
                    value={bookingForm.guests}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, guests: e.target.value })
                    }
                    className="w-full bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider py-2.5 transition cursor-pointer"
                  >
                    ĐẶT PHÒNG
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 2. "Chào mừng đến với MONA RESORT" + 4-PHOTO STRIP */}
      <section id="gioi-thieu" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-serif text-slate-600 mb-1">
            Chào mừng đến với
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wide text-slate-900 mb-3">
            {data.business.aboutTitle || data.business.name}
          </h2>
          <div className="w-10 h-0.5 bg-slate-800 mx-auto mb-5" />

          <div className="max-w-2xl mx-auto text-xs text-slate-500 leading-relaxed mb-10">
            {(data.business.aboutText || []).map((txt, idx) => (
              <p key={idx}>{txt}</p>
            ))}
          </div>

          {/* 4-Photo Horizontal Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(data.welcomeGallery || []).map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-[16/10] overflow-hidden bg-slate-100 shadow-sm"
              >
                <img
                  src={imgUrl}
                  alt={`Khung cảnh resort ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "PHÒNG NGHỈ" (ASYMMETRIC 2x2 MASONRY GRID WITH DARK BOTTOM OVERLAYS) */}
      <section id="phong-nghi" className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif uppercase tracking-wider text-slate-900 mb-2">
              PHÒNG NGHỈ
            </h2>
            <div className="w-10 h-0.5 bg-slate-900 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {(data.roomCards || []).map((room) => {
              const spanClass =
                room.colSpan === "wide" ? "md:col-span-7" : "md:col-span-5";
              return (
                <div
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={`${spanClass} group relative h-64 sm:h-72 overflow-hidden bg-slate-200 cursor-pointer shadow-sm`}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/55 backdrop-blur-[1px] py-3 px-4 text-center text-white">
                    <h3 className="text-sm font-serif font-bold tracking-wide group-hover:text-[#f5df18] transition">
                      {room.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. "DỊCH VỤ" (4 ALTERNATING CHECKERBOARD ROWS ON #f8f8f8) */}
      <section id="dich-vu" className="py-16 lg:py-20 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif uppercase tracking-wider text-slate-900 mb-2">
              DỊCH VỤ
            </h2>
            <div className="w-10 h-0.5 bg-slate-900 mx-auto" />
          </div>

          <div className="space-y-8">
            {(data.alternatingServices || []).map((srv) => (
              <div
                key={srv.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Text Block */}
                <div
                  className={`md:col-span-6 ${
                    srv.imageOnLeft ? "md:order-2 md:pl-6" : "md:order-1 md:pr-6"
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {srv.description}
                  </p>
                  <a
                    href="#dat-phong"
                    className="inline-block bg-black hover:bg-[#f5df18] text-white hover:text-black text-[11px] font-bold px-5 py-2 transition"
                  >
                    Xem thêm
                  </a>
                </div>

                {/* Image Block */}
                <div
                  className={`md:col-span-6 ${
                    srv.imageOnLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden shadow-md bg-slate-200">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRIGHT YELLOW CUSTOMER TESTIMONIAL BANNER (#f5df18) */}
      <section className="bg-[#f5df18] py-14 text-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={
              data.testimonials?.[0]?.avatar ||
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
            }
            alt={data.testimonials?.[0]?.author || "Khách hàng"}
            className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-md mb-4"
          />

          <div className="relative px-6 sm:px-12">
            <span className="absolute left-0 top-0 text-4xl font-serif font-black text-black leading-none select-none">
              “
            </span>
            <p className="text-xs sm:text-sm italic text-slate-800 leading-relaxed">
              {data.testimonials?.[0]?.content}
            </p>
            <span className="absolute right-0 bottom-0 text-4xl font-serif font-black text-black leading-none select-none">
              ”
            </span>
          </div>

          <p className="text-sm font-serif font-bold text-slate-900 mt-4">
            Khách hàng
          </p>

          <div className="flex items-center justify-center gap-1.5 mt-3">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="w-2 h-2 rounded-full border border-white" />
            <span className="w-2 h-2 rounded-full border border-white" />
          </div>
        </div>
      </section>

      {/* 6. "TIN TỨC" (3 BLOG CARDS WITH YELLOW OUTLINED "CHI TIẾT" BUTTON) */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif uppercase tracking-wider text-slate-900 mb-2">
              TIN TỨC
            </h2>
            <div className="w-10 h-0.5 bg-slate-900 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).slice(0, 3).map((post) => (
              <article key={post.id} className="flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 mb-1.5">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3 flex-1">
                  {post.excerpt}
                </p>
                <div>
                  <a
                    href="#dat-phong"
                    className="inline-block border border-[#e5ce00] text-[#b5a300] hover:bg-[#f5df18] hover:text-black text-[10px] font-bold uppercase px-3.5 py-1 transition"
                  >
                    CHI TIẾT
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BRIGHT YELLOW NEWSLETTER BAR (#f5df18) */}
      <div className="bg-[#f5df18] py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-serif font-bold text-slate-900">
            Đăng ký để nhận được thông tin mới nhất từ chúng tôi
          </p>
          {newsletterSubmitted ? (
            <span className="text-xs font-bold text-slate-900">
              Cảm ơn bạn đã đăng ký nhận tin!
            </span>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSubmitted(true);
              }}
              className="flex items-center w-full sm:w-auto"
            >
              <input
                type="email"
                required
                placeholder="Email..."
                className="bg-white px-3.5 py-2 text-xs text-slate-900 w-full sm:w-64 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white text-xs font-bold uppercase px-5 py-2 shrink-0 cursor-pointer"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 8. DARK CHARCOAL 4-COLUMN FOOTER (#1e1e1e) */}
      <footer id="lien-he" className="bg-[#1e1e1e] text-slate-300 pt-14 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Brand */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center gap-2 text-white">
                <Palmtree className="w-6 h-6 text-[#f5df18]" />
                <span className="text-base font-serif font-bold">
                  {data.business.name}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>
            </div>

            {/* Col 2: THÔNG TIN LIÊN HỆ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-serif uppercase tracking-wider text-white mb-4">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#f5df18] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#f5df18] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#f5df18]"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#f5df18] shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-[#f5df18]"
                  >
                    {primaryEmail}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: HÌNH ẢNH */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-serif uppercase tracking-wider text-white mb-4">
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
                      alt={`Ảnh resort ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: THANH TOÁN */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-serif uppercase tracking-wider text-white mb-4">
                THANH TOÁN
              </h4>
              <div className="flex flex-wrap gap-2">
                {["VISA", "PayPal", "MasterCard", "JCB"].map((card) => (
                  <span
                    key={card}
                    className="bg-white text-slate-900 text-[10px] font-extrabold px-2.5 py-1 rounded-sm shadow-sm"
                  >
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#141414] py-3 text-center text-[11px] text-slate-500">
        © Bản quyền thuộc về {data.business.name} • Khu Nghỉ Dưỡng Sinh Thái & Biệt Thự Biển
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="bg-white max-w-lg w-full overflow-hidden shadow-2xl"
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
              <span className="text-xs font-bold text-amber-600">
                {selectedRoom.priceText} • {selectedRoom.areaText}
              </span>
              <h3 className="text-lg font-serif font-bold text-slate-900 mt-1 mb-2">
                {selectedRoom.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                {selectedRoom.description}
              </p>
              <a
                href="#dat-phong"
                onClick={() => setSelectedRoom(null)}
                className="block w-full text-center bg-black hover:bg-[#f5df18] text-white hover:text-black text-xs font-bold uppercase py-3 transition"
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
