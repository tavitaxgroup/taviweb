"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronRight,
  PaintRoller,
  PaintBucket,
  Palette,
  Droplets,
  SwatchBook,
  Paintbrush,
  Send,
  CheckCircle2,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung5DefaultData,
  type XayDung5TemplateData,
  type XayDung5GalleryRoom
} from "@/template-sources/xay_dung_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung5TemplateData = adaptClonedTemplateData(
    xayDung5DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqs?.[0]?.id || "faq-1"
  );
  const [selectedRoom, setSelectedRoom] = useState<XayDung5GalleryRoom | null>(
    null
  );
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [quoteForm, setQuoteForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const secondaryPhone = data.business.phone?.[1] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "tuvan@monapaint.vn";

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setQuoteForm({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        message: ""
      });
    }, 3500);
  };

  const renderWhyIcon = (
    iconType: string,
    gradient: string
  ) => {
    const iconClass = "w-8 h-8 text-white";
    return (
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition duration-300`}
      >
        {iconType === "roller" && <PaintRoller className={iconClass} />}
        {iconType === "bucket" && <PaintBucket className={iconClass} />}
        {iconType === "board" && <Palette className={iconClass} />}
        {iconType === "droplet" && <Droplets className={iconClass} />}
        {iconType === "swatch" && <SwatchBook className={iconClass} />}
        {iconType === "brush" && <Paintbrush className={iconClass} />}
      </div>
    );
  };

  const renderThreeColorDots = () => (
    <div className="flex items-center justify-center gap-1.5 mt-2.5">
      <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
      <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
      <span className="w-2 h-2 rounded-full bg-[#ec4899]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#1e293b] font-sans selection:bg-[#d946ef] selection:text-white overflow-x-hidden">
      {/* 1. RAINBOW SPECTRUM HEADER NAVBAR (Exact match to XD005) */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-[#00b4d8] via-[#2563eb] via-[#7c3aed] via-[#e11d48] to-[#eab308] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            ) : (
              <span className="text-2xl sm:text-3xl font-light tracking-wider lowercase text-white">
                {data.business.name}
              </span>
            )}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-white/95">
            <a href="#" className="hover:text-yellow-200 transition">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-yellow-200 transition">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu" className="hover:text-yellow-200 transition">
              DỊCH VỤ
            </a>
            <a href="#bo-suu-tap" className="hover:text-yellow-200 transition">
              SẢN PHẨM
            </a>
            <a href="#tin-tuc" className="hover:text-yellow-200 transition">
              TIN TỨC
            </a>
            <a href="#bao-gia" className="hover:text-yellow-200 transition">
              LIÊN HỆ
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/15 text-white"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1e1b4b] text-white px-4 py-4 space-y-2 border-t border-white/15">
            {[
              { label: "TRANG CHỦ", href: "#" },
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "DỊCH VỤ", href: "#dich-vu" },
              { label: "SẢN PHẨM", href: "#bo-suu-tap" },
              { label: "TIN TỨC", href: "#tin-tuc" },
              { label: "LIÊN HỆ", href: "#bao-gia" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-xs font-bold uppercase tracking-wider hover:text-pink-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO BANNER WITH PAINT ROLLER RAINBOW STROKE & COLOR FAN DECK */}
      <section className="relative bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] overflow-hidden border-b border-slate-100">
        {/* Decorative soft studio backdrop */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Paint Roller & Rainbow Brush Stroke Banner */}
            <div className="lg:col-span-7 relative">
              <div className="flex items-center">
                {/* Metallic Paint Roller Handle + Yellow/Orange Roller */}
                <div className="hidden sm:flex flex-col items-center mr-2 shrink-0">
                  <div className="w-8 h-36 sm:h-44 rounded-lg bg-gradient-to-b from-[#facc15] via-[#f97316] to-[#ea580c] shadow-lg border-2 border-white" />
                  <div className="w-3 h-10 bg-slate-400 rounded-b" />
                  <div className="w-5 h-12 bg-red-600 rounded-b-lg shadow" />
                </div>

                {/* Rainbow Paint Stroke Card */}
                <div className="relative flex-1 rounded-2xl sm:rounded-r-[60px] bg-gradient-to-r from-[#f59e0b] via-[#ef4444] via-[#a855f7] to-[#2563eb] p-7 sm:p-10 text-white shadow-2xl overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none" />
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-yellow-200 mb-2">
                    {data.hero.eyebrow}
                  </p>
                  <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight drop-shadow-sm mb-3">
                    {data.hero.title}
                  </h1>

                  {/* Colorful C•O•L•O•R Display Letters */}
                  <div className="flex items-center gap-1.5 sm:gap-2.5 my-4 select-none">
                    {[
                      { char: "C", bg: "bg-[#06b6d4]" },
                      { char: "O", bg: "bg-[#f97316]" },
                      { char: "L", bg: "bg-[#22c55e]" },
                      { char: "O", bg: "bg-[#eab308]" },
                      { char: "R", bg: "bg-[#ec4899]" }
                    ].map((item, idx) => (
                      <React.Fragment key={idx}>
                        <span
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.bg} border-2 border-white shadow-md flex items-center justify-center text-xl sm:text-2xl font-black text-white tracking-tight`}
                        >
                          {item.char}
                        </span>
                        {idx < 4 && (
                          <span className="w-2 h-2 rounded-full bg-white/90" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl mb-6">
                    {data.hero.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={data.hero.ctaLink || "#bao-gia"}
                      className="bg-white text-[#7c3aed] hover:bg-yellow-300 hover:text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-lg transition"
                    >
                      {data.hero.ctaText}
                    </a>
                    <a
                      href={data.hero.secondaryCtaLink || "#bo-suu-tap"}
                      className="border border-white/70 hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-full transition"
                    >
                      {data.hero.secondaryCtaText || "BỘ SƯU TẬP MÀU SƠN"}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Painter & Color Swatch Wheel Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative Rainbow Color Fan Wheel behind image */}
                <div className="absolute -left-6 top-6 w-40 h-40 rounded-full bg-gradient-to-tr from-[#06b6d4] via-[#22c55e] via-[#eab308] to-[#ec4899] opacity-80 blur-sm animate-pulse" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-white">
                  <img
                    src={data.hero.backgroundImage}
                    alt={data.hero.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] text-white flex items-center justify-center">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-slate-800">
                          2.000+ Mã Màu Phong Thủy
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Bảo hành màng sơn lên đến 10 năm
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-[#d946ef] bg-pink-50 px-2.5 py-1 rounded-full">
                      100% Chính hãng
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE CATEGORY CARDS + INTRO STATEMENT & PURPLE-PINK GRADIENT CTA */}
      <section id="gioi-thieu" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3 Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
            {(data.categoryCards || []).map((card) => (
              <div
                key={card.id}
                className="group relative flex flex-col items-center"
              >
                <div className="w-full aspect-[4/3] rounded-md overflow-hidden shadow-md bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                {/* Overlapping White Box */}
                <div className="-mt-6 z-10 bg-white shadow-md border border-slate-100 px-6 py-3.5 w-[84%] text-center rounded-sm group-hover:border-[#d946ef]/40 transition">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-[#9333ea] transition">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Intro Statement */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4">
              {data.business.aboutTitle || data.introHeadline}
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              {(data.business.aboutText || []).map((txt, idx) => (
                <p key={idx}>{txt}</p>
              ))}
            </div>

            {/* 3 Slash-Separated Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-sm sm:text-base font-medium text-slate-500 mb-8">
              {(data.introHighlights || data.business.highlights || []).map(
                (hl, index, arr) => (
                  <React.Fragment key={hl}>
                    <span className="text-slate-600">{hl}</span>
                    {index < arr.length - 1 && (
                      <span className="text-slate-300 font-light">/</span>
                    )}
                  </React.Fragment>
                )
              )}
            </div>

            {/* Gradient Purple-Magenta CTA Button */}
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="bg-gradient-to-r from-[#7c3aed] via-[#c026d3] to-[#ec4899] hover:opacity-95 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-9 py-3.5 rounded shadow-lg shadow-purple-500/25 transition cursor-pointer"
            >
              YÊU CẦU BÁO GIÁ
            </button>
          </div>
        </div>
      </section>

      {/* 4. "VÌ SAO CHỌN CHÚNG TÔI" (6-CELL HAIRLINE GRID) */}
      <section id="dich-vu" className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-800 tracking-wide">
              Vì sao chọn chúng tôi
            </h2>
            {renderThreeColorDots()}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100">
            {(data.whyChooseItems || []).map((item) => (
              <div
                key={item.id}
                className="group p-8 sm:p-10 text-center border-r border-b border-slate-100 hover:bg-slate-50/60 transition"
              >
                {renderWhyIcon(item.icon, item.gradient)}
                <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "BỘ SƯU TẬP" (FULL-BLEED 4x2 COLOR ROOM GALLERY) */}
      <section id="bo-suu-tap" className="py-12 bg-white relative">
        {/* Decorative floating geometric triangles */}
        <span className="hidden lg:block absolute left-8 top-6 w-4 h-4 bg-[#2563eb] rotate-45 opacity-80" />
        <span className="hidden lg:block absolute right-14 top-10 w-5 h-3 bg-[#0ea5e9] -rotate-12 opacity-80" />

        <div className="text-center mb-10 px-4">
          <h2 className="text-2xl sm:text-3xl font-light text-slate-800 tracking-wide">
            Bộ sưu tập
          </h2>
          {renderThreeColorDots()}
        </div>

        {/* Edge-to-edge 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {(data.galleryRooms || []).map((room) => (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-slate-200"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-pink-300">
                  Mã màu: {room.paintCode}
                </span>
                <h3 className="text-sm font-bold mt-0.5">{room.title}</h3>
                <p className="text-xs text-white/80 mt-0.5">{room.colorTone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. "TIN TỨC" (3 BLOG CARDS WITH OVERLAPPING WHITE BOXES) */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-800 tracking-wide">
              Tin tức
            </h2>
            {renderThreeColorDots()}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).slice(0, 3).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="aspect-[16/11] w-full overflow-hidden rounded-sm bg-slate-100 shadow-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="-mt-8 mx-3 z-10 bg-white p-5 shadow-md border border-slate-100 flex-1 flex flex-col">
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#9333ea] transition leading-snug mb-1">
                    {post.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 mb-3 block">
                    {post.date}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "BÁO GIÁ DỊCH VỤ MIỄN PHÍ" (SPLIT GRAY SECTION + GEOMETRIC CONFETTI + PAINTER ON LADDER) */}
      <section
        id="bao-gia"
        className="relative bg-[#f3f4f6] py-16 lg:py-20 overflow-hidden border-y border-slate-200/70"
      >
        {/* Decorative colorful geometric triangles */}
        <span className="hidden sm:block absolute left-6 top-16 w-4 h-4 bg-[#f59e0b] rotate-12 opacity-75" />
        <span className="hidden sm:block absolute left-10 top-44 w-5 h-5 bg-[#22c55e] -rotate-12 opacity-75" />
        <span className="hidden sm:block absolute left-12 bottom-16 w-4 h-4 bg-[#8b5cf6] rotate-45 opacity-75" />
        <span className="hidden sm:block absolute right-10 top-14 w-5 h-5 bg-[#ec4899] rotate-12 opacity-75" />
        <span className="hidden sm:block absolute right-8 bottom-24 w-4 h-4 bg-[#2563eb] -rotate-45 opacity-75" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Form */}
            <div className="lg:col-span-6">
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-800 mb-2">
                  Báo giá dịch vụ miễn phí
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Vui lòng chia sẻ thông tin của bạn dưới đây và chúng tôi sẽ liên lạc với bạn sớm.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-white border border-emerald-200 rounded-xl p-6 text-center shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                  <h3 className="text-base font-bold text-slate-800">
                    Đã gửi yêu cầu báo giá thành công!
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Chuyên viên kỹ thuật của {data.business.name} sẽ liên hệ lại với bạn trong vòng 15 phút.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên"
                      value={quoteForm.fullName}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, fullName: e.target.value })
                      }
                      className="w-full bg-white border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#9333ea]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={quoteForm.email}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, email: e.target.value })
                      }
                      className="w-full bg-white border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#9333ea]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại"
                      value={quoteForm.phone}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, phone: e.target.value })
                      }
                      className="w-full bg-white border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#9333ea]"
                    />
                    <input
                      type="text"
                      placeholder="Địa chỉ công trình"
                      value={quoteForm.address}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, address: e.target.value })
                      }
                      className="w-full bg-white border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#9333ea]"
                    />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Lời nhắn (Diện tích cần sơn, mã màu mong muốn, tình trạng tường...)"
                    value={quoteForm.message}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, message: e.target.value })
                    }
                    className="w-full bg-white border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#9333ea]"
                  />
                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-64 bg-gradient-to-r from-[#6d28d9] via-[#a21caf] to-[#ec4899] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider py-3 rounded shadow-md transition cursor-pointer"
                    >
                      NHẬN BÁO GIÁ
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Painter on Wooden Ladder */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg bg-white border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80"
                  alt="Đội ngũ thợ sơn chuyên nghiệp"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow">
                  Khảo sát & Báo giá tận nơi 0đ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "CÂU HỎI THƯỜNG GẶP" (ACCORDION + COLORFUL FLOWER PETALS + 4 BRAND LOGOS) */}
      <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
        {/* Decorative Color Petals on Left & Right */}
        <div className="hidden lg:flex absolute -right-8 top-6 w-36 h-36 rounded-full bg-gradient-to-tr from-[#f97316] via-[#ec4899] to-[#22c55e] opacity-20 blur-md pointer-events-none" />
        <div className="hidden lg:flex absolute -left-6 bottom-28 w-28 h-28 rounded-full bg-gradient-to-tr from-[#06b6d4] via-[#3b82f6] to-[#a855f7] opacity-20 blur-md pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-800 tracking-wide">
              Câu hỏi thường gặp
            </h2>
            {renderThreeColorDots()}
          </div>

          <div className="divide-y divide-slate-100 border-y border-slate-100 mb-14">
            {(data.faqs || []).map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-3.5">
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                    className="w-full flex items-center gap-3 text-left text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#9333ea] transition cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-[#9333ea]" : ""
                      }`}
                    />
                    <span>{faq.question}</span>
                  </button>
                  {isOpen && (
                    <div className="pl-7 pr-2 pt-2.5 text-xs text-slate-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 4 Partner Typographic Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center text-center pt-4">
            <div className="p-3">
              <span className="block text-[9px] uppercase tracking-widest text-slate-400">
                1897
              </span>
              <span className="text-base sm:text-lg font-serif font-bold tracking-widest text-slate-800">
                COPENHAGEN
              </span>
              <span className="block text-[8px] uppercase tracking-[0.25em] text-slate-400">
                COATING COMPANY
              </span>
            </div>

            <div className="p-3 flex justify-center">
              <div className="border border-slate-800 px-3 py-1.5 inline-flex items-center gap-2">
                <span className="text-xs font-black border-r border-slate-800 pr-2">
                  K/T
                </span>
                <span className="text-xs font-bold tracking-widest bg-slate-900 text-white px-2 py-0.5">
                  KINGSMEN TY
                </span>
              </div>
            </div>

            <div className="p-3">
              <span className="text-base sm:text-lg font-extrabold tracking-wider text-slate-800">
                JULIO STEVE
              </span>
              <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-400">
                COLOR LAB STUDIO
              </span>
            </div>

            <div className="p-3">
              <div className="border border-slate-700 px-3 py-1.5 inline-block">
                <span className="text-sm sm:text-base font-serif font-bold tracking-wider text-slate-800">
                  RYAN MANSION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER QUOTE STRIP */}
      <section className="bg-[#f5f6f8] py-12 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <img
              src={
                data.testimonials?.[0]?.avatar ||
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
              }
              alt={data.testimonials?.[0]?.author || "Chị Nga"}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md shrink-0"
            />
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm italic text-slate-600 leading-relaxed mb-2">
                {data.testimonials?.[0]?.content}
              </p>
              <p className="text-xs font-bold text-slate-800">
                {data.testimonials?.[0]?.author || "Chị Nga"}{" "}
                <span className="font-normal text-slate-400">
                  / {data.testimonials?.[0]?.role || "Facebook"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. RAINBOW HOTLINE BANNER */}
      <div className="bg-gradient-to-r from-[#991b1b] via-[#eab308] via-[#22c55e] via-[#06b6d4] to-[#6366f1] py-4 text-center text-white shadow-inner">
        <a
          href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
          className="text-base sm:text-xl font-normal tracking-wide hover:underline"
        >
          Nhận báo giá miễn phí: <strong className="font-bold">{primaryPhone}</strong>
        </a>
      </div>

      {/* 11. WHITE 4-COLUMN FOOTER + BOTTOM RAINBOW BAR */}
      <footer className="bg-white pt-14 pb-10 text-slate-600 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-3xl font-light tracking-wider lowercase bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#2563eb] bg-clip-text text-transparent inline-block">
                {data.business.name}
              </div>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <a
                    href={`tel:${secondaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#9333ea]"
                  >
                    {secondaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-[#9333ea]"
                  >
                    {primaryEmail}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: MENU */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-4">
                MENU
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                {[
                  { label: "Trang chủ", href: "#" },
                  { label: "Giới thiệu", href: "#gioi-thieu" },
                  { label: "Dịch vụ", href: "#dich-vu" },
                  { label: "Sản phẩm", href: "#bo-suu-tap" },
                  { label: "Tin tức", href: "#tin-tuc" },
                  { label: "Liên hệ", href: "#bao-gia" }
                ].map((item, idx) => (
                  <li key={item.label} className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className={`hover:text-[#ec4899] flex items-center gap-1.5 ${
                        idx === 0 ? "text-[#ec4899] font-semibold" : ""
                      }`}
                    >
                      <span className="text-[10px]">•</span>
                      <span>{item.label}</span>
                    </a>
                    <ChevronRight className="w-3 h-3 text-slate-300" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: BÀI VIẾT MỚI */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-4">
                BÀI VIẾT MỚI
              </h4>
              <div className="space-y-3">
                {(data.news || []).slice(0, 3).map((post) => (
                  <a
                    key={post.id}
                    href="#tin-tuc"
                    className="flex items-center gap-3 group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-9 h-9 rounded-full object-cover shrink-0 border border-slate-200"
                    />
                    <span className="text-[11px] text-slate-500 group-hover:text-[#9333ea] leading-snug line-clamp-2">
                      {post.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-4">
                ĐĂNG KÝ
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Đăng ký để nhận được được thông tin bảng màu và ưu đãi mới nhất từ chúng tôi.
              </p>
              {newsletterSubmitted ? (
                <p className="text-xs font-bold text-emerald-600">
                  Cảm ơn bạn đã đăng ký nhận bản tin!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubmitted(true);
                  }}
                  className="flex items-center border border-slate-200 rounded overflow-hidden mb-4"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="w-full px-3 py-2 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 text-[#ec4899] hover:bg-pink-50 transition cursor-pointer"
                    aria-label="Gửi"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Rainbow Copyright Bar */}
      <div className="bg-gradient-to-r from-[#2563eb] via-[#7c3aed] via-[#ec4899] to-[#eab308] py-2.5 text-center text-[11px] text-white/95">
        © Bản quyền thuộc về {data.business.name} • Dịch vụ Sơn Nhà & Cải Tạo Chuyên Nghiệp
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
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
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c026d3]">
                Mã sơn đề xuất: {selectedRoom.paintCode} • {selectedRoom.colorTone}
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-2">
                {selectedRoom.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-5">
                Phối màu nội thất sử dụng dòng sơn bóng cao cấp kháng khuẩn, chùi rửa dễ dàng và bền màu trên 10 năm.
              </p>
              <a
                href="#bao-gia"
                onClick={() => setSelectedRoom(null)}
                className="inline-block w-full text-center bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg"
              >
                Nhận báo giá phối màu này
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Quick Quote Modal */}
      {quoteModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setQuoteModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-extrabold text-slate-900 mb-1">
              Yêu cầu khảo sát & Báo giá sơn nhà
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Đội ngũ kỹ thuật {data.business.name} mang bảng quạt màu đến tận nhà tư vấn miễn phí.
            </p>
            <form
              onSubmit={(e) => {
                handleQuoteSubmit(e);
                setQuoteModalOpen(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên của bạn"
                className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#9333ea]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại liên hệ"
                className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#9333ea]"
              />
              <input
                type="text"
                placeholder="Diện tích sàn hoặc số tầng cần sơn"
                className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#9333ea]"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg shadow-md cursor-pointer"
              >
                Gửi yêu cầu ngay
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
