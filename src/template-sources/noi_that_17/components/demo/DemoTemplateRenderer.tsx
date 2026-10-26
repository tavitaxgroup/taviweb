"use client";

import React, { useState } from "react";
import {
  Search,
  Home,
  Lightbulb,
  BarChart3,
  Pin,
  Atom,
  Users,
  Headphones,
  ChevronDown,
  CheckCircle2,
  X,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat17DefaultData,
  type NoiThat17Data
} from "@/template-sources/noi_that_17/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NoiThat17Data = adaptClonedTemplateData(
    noiThat17DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(2);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 638 646";
  const primaryEmail = data.business.email?.[0] || "mon@mona.media";

  const leftTop = data.bentoProjects.find((p) => p.position === "left-top");
  const leftBottom = data.bentoProjects.find((p) => p.position === "left-bottom");
  const centerTall = data.bentoProjects.find((p) => p.position === "center-tall");
  const rightTop = data.bentoProjects.find((p) => p.position === "right-top");
  const rightBottom = data.bentoProjects.find((p) => p.position === "right-bottom");

  const currentQuote =
    data.commitmentQuotes[activeQuoteIdx] || data.commitmentQuotes[0];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setCommentModalOpen(false);
      setContactName("");
      setContactPhone("");
      setContactMessage("");
    }, 3000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#f7f5f0] text-[#1f1f1f] font-sans selection:bg-[#b59a6a] selection:text-white"
    >
      {/* 1. TRANSLUCENT TOP NAVBAR + MODERN LOBBY HERO */}
      <section className="relative h-[520px] sm:h-[600px] lg:h-[660px] flex flex-col justify-between overflow-hidden bg-stone-900 text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/55" />

        {/* Top Navbar */}
        <header className="relative z-20 max-w-6xl w-full mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
          {/* Left Nav */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-white/95">
            <a href="#benefits" className="hover:text-[#e2c792] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#panels"
              className="flex items-center gap-1 hover:text-[#e2c792] transition-colors"
            >
              <span>THIẾT KẾ</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          {/* Center House Emblem + Brand Logo */}
          <a href="#top" className="flex flex-col items-center text-center">
            <Home className="w-7 h-7 text-white stroke-[1.6]" />
            <span className="font-serif text-lg sm:text-xl tracking-wider lowercase text-white -mt-1">
              {data.business.name.length > 14 ? "mona" : data.business.name}
            </span>
          </a>

          {/* Right Contact + Search */}
          <div className="flex items-center gap-5 text-[11px] font-bold uppercase tracking-widest text-white/95">
            <button
              type="button"
              onClick={() => setCommentModalOpen(true)}
              className="hidden sm:inline hover:text-[#e2c792] transition-colors"
            >
              LIÊN HỆ
            </button>
            <a href="#projects" aria-label="Tìm kiếm" className="hover:text-[#e2c792]">
              <Search className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="relative z-30 md:hidden bg-black/90 px-6 py-4 space-y-2 text-xs font-bold uppercase tracking-wider">
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white"
            >
              Tiện ích thiết kế
            </a>
            <a
              href="#panels"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white"
            >
              Hạng mục không gian
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white"
            >
              Dự án đáng chú ý
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setCommentModalOpen(true);
              }}
              className="block py-1 text-[#c29d45]"
            >
              Liên hệ tư vấn
            </button>
          </div>
        )}

        {/* Centered Hero Copy */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center my-auto">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] text-white leading-tight mb-3 drop-shadow">
            {data.hero.title}
          </h1>
          <p className="text-sm sm:text-lg text-white/90 mb-8">{data.hero.subtitle}</p>
          <a
            href={data.hero.ctaLink || "#projects"}
            className="inline-block bg-[#c29d45] hover:bg-[#a88634] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-xs shadow transition-colors"
          >
            {data.hero.ctaText || "XEM THÊM"}
          </a>
        </div>

        {/* Bottom Slider Indicator Lines */}
        <div className="relative z-10 flex items-center justify-center gap-2 pb-5">
          <span className="w-8 h-[2px] bg-white" />
          <span className="w-8 h-[2px] bg-white/40" />
        </div>
      </section>

      {/* Architectural Vertical Connector Line */}
      <div className="w-[1px] h-14 bg-stone-400 mx-auto" />

      {/* 2. "TẤT CẢ NHỮNG TIỆN ÍCH MÀ BẠN NHẬN ĐƯỢC TỪ CHÚNG TÔI" (3x2 Feature Grid) */}
      <section id="benefits" className="pb-20 pt-4 bg-[#f7f5f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl uppercase text-center text-[#1f1f1f] max-w-2xl mx-auto leading-snug mb-14">
            TẤT CẢ NHỮNG TIỆN ÍCH MÀ BẠN NHẬN ĐƯỢC TỪ CHÚNG TÔI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 text-center">
            {data.benefits.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-[#c5b393] bg-white/60 text-[#b59a6a] flex items-center justify-center mb-4">
                  {item.icon === "lightbulb" && <Lightbulb className="w-7 h-7 stroke-[1.5]" />}
                  {item.icon === "chart" && <BarChart3 className="w-7 h-7 stroke-[1.5]" />}
                  {item.icon === "pin" && <Pin className="w-7 h-7 stroke-[1.5]" />}
                  {item.icon === "atom" && <Atom className="w-7 h-7 stroke-[1.5]" />}
                  {item.icon === "users" && <Users className="w-7 h-7 stroke-[1.5]" />}
                  {item.icon === "headset" && <Headphones className="w-7 h-7 stroke-[1.5]" />}
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-[#1f1f1f] mb-2.5">
                  {item.title}
                </h3>
                <ul className="space-y-1 text-[11px] italic text-stone-500">
                  {item.bullets.map((b, idx) => (
                    <li key={idx}>→ {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5-COLUMN FULL-BLEED VERTICAL ACCORDION / GALLERY STRIP */}
      <section id="panels" className="w-full overflow-hidden bg-stone-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 h-auto lg:h-[480px]">
          {data.verticalPanels.map((panel) => (
            <a
              key={panel.id}
              href="#projects"
              className="group relative h-64 sm:h-80 lg:h-full overflow-hidden border-r border-white/10 flex items-center justify-center"
            >
              <img
                src={panel.image}
                alt={panel.title}
                className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="relative z-10 bg-black/65 backdrop-blur-2xs border border-white/15 px-6 py-4 text-center">
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug max-w-[110px]">
                  {panel.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Architectural Vertical Connector Line */}
      <div className="w-[1px] h-14 bg-stone-400 mx-auto" />

      {/* 4. "NHỮNG DỰ ÁN ĐÁNG CHÚ Ý" (Asymmetric 3-Column Bento Grid) */}
      <section id="projects" className="pb-16 pt-4 bg-[#f7f5f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f1f1f] mb-2">
              Những dự án đáng chú ý
            </h2>
            <p className="text-xs text-stone-500 leading-relaxed">
              Từ thiết kế DIY cho đến tạo ra thành phẩm, chúng tôi luôn ở đây để giúp bạn kết hợp
              tất cả lại với nhau
            </p>
          </div>

          {/* 3-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {/* Left Column (2 Stacked) */}
            <div className="space-y-5 flex flex-col">
              {leftTop && (
                <div className="relative h-56 sm:h-60 border-2 border-[#c5b393] overflow-hidden group">
                  <img
                    src={leftTop.image}
                    alt={leftTop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xs font-extrabold">{leftTop.title}</h3>
                    <p className="text-[10px] italic text-white/80">{leftTop.subtitle}</p>
                  </div>
                </div>
              )}

              {leftBottom && (
                <div className="relative h-56 sm:h-60 border-2 border-[#c5b393] overflow-hidden group">
                  <img
                    src={leftBottom.image}
                    alt={leftBottom.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xs font-extrabold">{leftBottom.title}</h3>
                    <p className="text-[10px] italic text-white/80">{leftBottom.subtitle}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Center Column (1 Tall) */}
            {centerTall && (
              <div className="relative h-96 md:h-auto border-2 border-[#c5b393] overflow-hidden group">
                <img
                  src={centerTall.image}
                  alt={centerTall.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xs sm:text-sm font-extrabold mb-1">{centerTall.title}</h3>
                  <p className="text-[10px] italic text-white/85 leading-relaxed">
                    {centerTall.subtitle}
                  </p>
                </div>
              </div>
            )}

            {/* Right Column (2 Stacked) */}
            <div className="space-y-5 flex flex-col">
              {rightTop && (
                <div className="relative h-56 sm:h-60 border-2 border-[#c5b393] overflow-hidden group">
                  <img
                    src={rightTop.image}
                    alt={rightTop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xs font-extrabold">{rightTop.title}</h3>
                    <p className="text-[10px] italic text-white/80">{rightTop.subtitle}</p>
                  </div>
                </div>
              )}

              {rightBottom && (
                <div className="relative h-56 sm:h-60 border-2 border-[#c5b393] overflow-hidden group">
                  <img
                    src={rightBottom.image}
                    alt={rightBottom.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xs font-extrabold">{rightBottom.title}</h3>
                    <p className="text-[10px] italic text-white/80">{rightBottom.subtitle}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setCommentModalOpen(true)}
              className="border border-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white text-[11px] font-bold uppercase tracking-wider px-8 py-2.5 transition-colors"
            >
              XEM THÊM DỰ ÁN
            </button>
          </div>
        </div>
      </section>

      {/* 5. FLORAL PATTERN CREAM SECTION ("Chúng tôi cam kết với bạn") */}
      <section className="py-16 lg:py-20 bg-[#f1ede6] border-y border-stone-200/80 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          {/* Circular Champagne-Gold House Emblem */}
          <div className="w-24 h-24 rounded-full border-2 border-[#c5b393] bg-white/80 mx-auto mb-6 flex flex-col items-center justify-center text-[#b59a6a] shadow-xs">
            <Home className="w-8 h-8 stroke-[1.5]" />
            <span className="font-serif text-base tracking-wider lowercase">mona</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f1f1f] mb-4">
            {data.business.aboutTitle || "Chúng tôi cam kết với bạn"}
          </h2>

          {currentQuote && (
            <div className="mb-5">
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-lg mx-auto mb-2">
                {currentQuote.quote}
              </p>
              <p className="text-xs font-bold text-[#1f1f1f]">{currentQuote.author}</p>
            </div>
          )}

          {/* 3 Interactive Dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {data.commitmentQuotes.map((q, idx) => (
              <button
                key={q.id}
                type="button"
                onClick={() => setActiveQuoteIdx(idx)}
                className={`w-2 h-2 rounded-full border border-stone-600 transition-colors ${
                  activeQuoteIdx === idx ? "bg-stone-800" : "bg-transparent"
                }`}
                aria-label={`Cam kết ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="border border-[#1f1f1f] bg-white hover:bg-[#1f1f1f] hover:text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 transition-colors"
            >
              XEM TẤT CẢ THIẾT KẾ
            </a>
            <button
              type="button"
              onClick={() => setCommentModalOpen(true)}
              className="border border-[#1f1f1f] bg-white hover:bg-[#1f1f1f] hover:text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 transition-colors"
            >
              ĐỂ LẠI BÌNH LUẬN THIẾT KẾ
            </button>
          </div>
        </div>
      </section>

      {/* 6. VERTICAL CONNECTOR LINE + CENTERED "LIÊN HỆ" BUTTON + CLEAN 4-COLUMN FOOTER */}
      <div className="py-10 bg-[#f7f5f0] text-center">
        <div className="w-[1px] h-14 bg-stone-400 mx-auto mb-6" />
        <button
          type="button"
          onClick={() => setCommentModalOpen(true)}
          className="border border-[#1f1f1f] bg-white hover:bg-[#1f1f1f] hover:text-white text-[11px] font-bold uppercase tracking-wider px-8 py-2.5 transition-colors"
        >
          LIÊN HỆ
        </button>
      </div>

      {/* CLEAN 4-COLUMN ARCHITECTURAL FOOTER */}
      <footer className="bg-white pt-12 pb-0 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Your LIFE Your STYLE */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-20 bg-[#1f1f1f] -skew-x-12 shrink-0" />
            <div className="font-serif italic font-black text-base sm:text-lg leading-tight text-[#1f1f1f]">
              <span className="block">Your</span>
              <span className="block">LIFE</span>
              <span className="block">Your</span>
              <span className="block">STYLE</span>
            </div>
          </div>

          {/* Col 2: Bản quyền */}
          <div className="text-xs text-stone-500 space-y-1">
            <h4 className="font-serif text-sm font-bold text-[#1f1f1f] mb-2">Bản quyền</h4>
            <p className="font-semibold text-stone-700">© {data.business.name} 2026</p>
            <p>Thiết kế & Thi công Nội thất Độc bản</p>
          </div>

          {/* Col 3: Liên hệ */}
          <div className="text-xs text-stone-500 space-y-1">
            <h4 className="font-serif text-sm font-bold text-[#1f1f1f] mb-2">Liên hệ</h4>
            <p>Địa chỉ: {data.business.address}</p>
            <p>Email: {primaryEmail}</p>
            <p>Hotline: {primaryPhone}</p>
          </div>

          {/* Col 4: Kết nối */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#1f1f1f] mb-3">Kết nối</h4>
            <div className="flex items-center gap-2">
              {["f", "ig", "in"].map((soc) => (
                <button
                  key={soc}
                  type="button"
                  onClick={() => setCommentModalOpen(true)}
                  className="w-7 h-7 bg-[#1f1f1f] text-white text-[11px] font-bold flex items-center justify-center hover:bg-[#c29d45] transition-colors"
                >
                  {soc}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#111111] text-white/60 text-center py-3 text-[11px]">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>
        </div>
      </footer>

      {/* Consultation / Comment Modal */}
      {commentModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setCommentModalOpen(false)}
        >
          <div
            className="bg-white max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setCommentModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-xl font-bold text-[#1f1f1f] mb-1">
              Liên hệ Tư vấn Thiết kế
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Để lại yêu cầu hoặc bình luận về không gian bạn mong muốn, kiến trúc sư{" "}
              {data.business.name} sẽ phản hồi ngay.
            </p>

            {contactSubmitted ? (
              <div className="bg-[#f7f5f0] border border-[#c5b393] p-5 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#c29d45] mx-auto" />
                <p className="text-xs font-bold text-[#1f1f1f]">
                  Cảm ơn bạn! Yêu cầu tư vấn đã được gửi thành công.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCommentSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Họ và tên*"
                  className="w-full border border-stone-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#c29d45]"
                />
                <input
                  type="tel"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="Số điện thoại*"
                  className="w-full border border-stone-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#c29d45]"
                />
                <textarea
                  rows={3}
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Nội dung cần tư vấn (văn phòng, biệt thự, căn hộ...)"
                  className="w-full border border-stone-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#c29d45]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#c29d45] hover:bg-[#a88634] text-white text-xs font-bold uppercase tracking-widest py-3 transition-colors"
                >
                  GỬI YÊU CẦU
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
