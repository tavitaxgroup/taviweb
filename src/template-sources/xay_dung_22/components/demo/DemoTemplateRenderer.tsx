"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShoppingBasket,
  Leaf,
  Home,
  Building2,
  Shovel,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Star,
  Calendar,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung22DefaultData,
  type XayDung22TemplateData,
  type XayDung22WorkItem
} from "@/template-sources/xay_dung_22/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung22TemplateData = adaptClonedTemplateData(
    xayDung22DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeWorkCategory, setActiveWorkCategory] = useState("Tất cả");
  const [selectedWork, setSelectedWork] = useState<XayDung22WorkItem | null>(
    null
  );
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 90009";
  const primaryEmail = data.business.email?.[0] || "tuvan@monaland.vn";

  const categories = data.workCategories || [
    "Tất cả",
    "Sự kiện",
    "Vườn",
    "Nội thất",
    "Bảo trì",
    "Thành thị"
  ];

  const filteredWorks = (data.works || []).filter((wk) => {
    if (activeWorkCategory === "Tất cả") return true;
    return wk.category.toLowerCase() === activeWorkCategory.toLowerCase();
  });

  const renderPillarIcon = (icon: string) => {
    const cls = "w-8 h-8 text-[#1b4332] stroke-[1.4] mx-auto mb-2";
    if (icon === "garden") return <Home className={cls} />;
    if (icon === "urban") return <Building2 className={cls} />;
    if (icon === "maintenance") return <Shovel className={cls} />;
    return <Sparkles className={cls} />;
  };

  return (
    <div className="min-h-screen bg-white text-[#1e293b] font-sans selection:bg-[#2d8a4e] selection:text-white">
      {/* 1. FOREST GREEN TOPBAR (#1b4332) + CLEAN WHITE NAVBAR (Exact match to XD022) */}
      <div className="bg-[#1b4332] text-white/90 text-[11px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-emerald-300"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              <span>{primaryPhone}</span>
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-emerald-300" />
              <span>{data.business.address}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-emerald-300" />
              <span>
                {primaryEmail} {data.business.workingHours}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-bold">
            <a href="#lien-he" className="hover:text-emerald-300">
              FB
            </a>
            <a href="#lien-he" className="hover:text-emerald-300">
              IG
            </a>
            <a href="#lien-he" className="hover:text-emerald-300">
              TW
            </a>
            <a href="#lien-he" className="hover:text-emerald-300">
              YT
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-1.5 text-[#1b4332]">
                <Leaf className="w-6 h-6 stroke-[1.5]" />
                <span className="text-base font-bold tracking-tight">
                  {data.business.name}
                </span>
              </div>
            )}
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-700">
            <a href="#" className="text-[#2d8a4e]">
              TRANG CHỦ
            </a>
            <a href="#dich-vu" className="hover:text-[#2d8a4e] transition">
              CỬA HÀNG
            </a>
            <a href="#gioi-thieu" className="hover:text-[#2d8a4e] transition">
              GIỚI THIỆU
            </a>
            <a href="#tin-tuc" className="hover:text-[#2d8a4e] transition">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#2d8a4e] transition">
              LIÊN HỆ
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setQuoteModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold uppercase text-slate-700 hover:text-[#2d8a4e] cursor-pointer"
          >
            <span>GIỎ HÀNG / 0 ₫</span>
            <ShoppingBasket className="w-4 h-4 text-[#1b4332]" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-slate-200 text-slate-700"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2">
            {[
              { label: "TRANG CHỦ", href: "#" },
              { label: "DỊCH VỤ CẢNH QUAN", href: "#dich-vu" },
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "CÔNG VIỆC", href: "#cong-viec" },
              { label: "TIN TỨC", href: "#tin-tuc" },
              { label: "LIÊN HỆ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs font-bold uppercase text-slate-700 hover:text-[#2d8a4e]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (HANDS HOLDING GARDEN PLANT + BOTANICAL LEAF LINE ART) */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center justify-center text-center overflow-hidden bg-[#143625]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-md">
            {data.hero.title}
          </h1>
          <span className="block font-serif italic text-3xl sm:text-4xl text-emerald-100 -mt-1 drop-shadow">
            {data.hero.subtitle}
          </span>
        </div>

        {/* Bottom Center White Scroll Circle */}
        <a
          href="#dich-vu"
          aria-label="Cuộn xuống"
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-white text-[#1b4332] shadow-md flex items-center justify-center hover:scale-110 transition"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </section>

      {/* 3. STUDIO INTRO + 4 LANDSCAPE CATEGORY CARDS + 4-COLUMN SERVICE CHECKLIST */}
      <section id="dich-vu" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm sm:text-base font-extrabold text-[#1b4332] max-w-lg mx-auto leading-relaxed mb-10">
            {data.studioHeadline}
          </h2>

          {/* 4 Tall Portrait Pillar Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {(data.pillarCards || []).map((card) => (
              <div
                key={card.id}
                onClick={() => setQuoteModalOpen(true)}
                className="group bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition cursor-pointer flex flex-col"
              >
                <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 text-center bg-white">
                  {renderPillarIcon(card.icon)}
                  <h3 className="text-xs font-bold text-slate-700 group-hover:text-[#2d8a4e]">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* 4-Column Service Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-slate-100 text-xs">
            <div>
              <p className="text-slate-500 mb-2">
                Chúng tôi xử lý mọi thứ cho bạn!
              </p>
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="font-extrabold text-[#1b4332] hover:text-[#2d8a4e] cursor-pointer"
              >
                Xem tất cả dịch vụ
              </button>
            </div>

            {(data.checklistColumns || []).map((col, colIdx) => (
              <ul key={colIdx} className="space-y-1.5 text-slate-500">
                {col.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-[#2d8a4e] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Tại sao chọn chúng tôi?" (2x2 ASYMMETRIC BENTO GRID) */}
      <section id="gioi-thieu" className="py-12 bg-[#f9fbf9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 shadow-sm border border-slate-100 bg-white overflow-hidden rounded-sm">
            {/* Top-Left: Why Choose Us Copy */}
            <div className="md:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1b4332] leading-tight mb-4">
                {data.business.aboutTitle || "Tại sao chọn chúng tôi?"}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                {data.business.aboutText?.[0] || data.whyChooseCopy}
              </p>
            </div>

            {/* Top-Right: Team Photo */}
            <div className="md:col-span-7 min-h-[260px] overflow-hidden bg-slate-100">
              <img
                src={data.whyChooseTeamImage}
                alt="Đội ngũ kiến trúc sư cảnh quan"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Left: Deep Forest Green "Nghề thủ công" Box */}
            <div className="md:col-span-5 bg-[#143625] text-white p-8 sm:p-10 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-[#4ade80] mb-3">
                {data.craftBox.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-emerald-100/85 leading-relaxed mb-6">
                {data.craftBox.description}
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-[#2d8a4e] hover:bg-[#236e3d] text-white text-[11px] font-bold px-5 py-2 rounded-full transition cursor-pointer"
                >
                  {data.craftBox.ctaText}
                </button>
              </div>
            </div>

            {/* Bottom-Right: 2 Sub-Columns ("Chúng tôi là từ năm 1987!" & "Triết học") */}
            <div className="md:col-span-7 p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white">
              <div>
                <h4 className="text-base font-bold text-[#2d8a4e] leading-snug mb-3">
                  {data.historyBox.title}
                </h4>
                <div className="space-y-2.5 text-[11px] text-slate-500 leading-relaxed">
                  {data.historyBox.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-[#2d8a4e] leading-snug mb-3">
                  {data.philosophyBox.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                  {data.philosophyBox.text}
                </p>
                <p className="text-[11px] font-extrabold text-slate-800">
                  {data.philosophyBox.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "CÔNG VIỆC" (FILTERABLE 3x2 ROUNDED-CORNER LANDSCAPE GALLERY) */}
      <section id="cong-viec" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-[#1b4332]">
              CÔNG VIỆC
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-500 mb-8">
            {categories.map((cat) => {
              const isActive = activeWorkCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveWorkCategory(cat)}
                  className={`pt-1.5 transition cursor-pointer ${
                    isActive
                      ? "text-[#1b4332] font-extrabold border-t-2 border-[#1b4332]"
                      : "hover:text-[#2d8a4e]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3x2 Rounded Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
            {filteredWorks.map((wk) => (
              <div
                key={wk.id}
                onClick={() => setSelectedWork(wk)}
                className="group relative aspect-square rounded-lg overflow-hidden bg-slate-100 cursor-pointer shadow-sm"
              >
                <img
                  src={wk.image}
                  alt={wk.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143625]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold uppercase text-emerald-300">
                    {wk.category} • {wk.location}
                  </span>
                  <h3 className="text-xs font-bold mt-0.5">{wk.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setActiveWorkCategory("Tất cả")}
              className="bg-[#2d8a4e] hover:bg-[#236e3d] text-white text-xs font-bold px-6 py-2 rounded-full shadow transition cursor-pointer"
            >
              Tải thêm
            </button>
          </div>
        </div>
      </section>

      {/* 6. SPLIT CUSTOMER TESTIMONIAL CARD & PARTNER LOGOS */}
      <section className="py-12 bg-[#f9fbf9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-white rounded-lg overflow-hidden shadow-md border border-slate-100">
            {/* Left 4-Col Card: Photo + Forest Green Box */}
            <div className="md:col-span-4 bg-[#143625] text-white flex flex-col">
              <div className="h-44 overflow-hidden">
                <img
                  src={data.clientLeftCard.image}
                  alt={data.clientLeftCard.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-emerald-200 mb-1">
                    {data.clientLeftCard.eyebrow}
                  </span>
                  <h3 className="text-sm font-extrabold text-white mb-2">
                    {data.clientLeftCard.title}
                  </h3>
                  <p className="text-[11px] text-emerald-100/80 leading-relaxed mb-5">
                    {data.clientLeftCard.description}
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setQuoteModalOpen(true)}
                    className="bg-[#2d8a4e] hover:bg-[#236e3d] text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-full transition cursor-pointer"
                  >
                    {data.clientLeftCard.ctaText}
                  </button>
                </div>
              </div>
            </div>

            {/* Right 8-Col Testimonial + 4 Partner Logos */}
            <div className="md:col-span-8 p-8 sm:p-10 flex flex-col justify-between relative">
              <div className="text-center my-auto">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#2d8a4e] flex items-center justify-center mx-auto mb-3">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center gap-0.5 text-[#143625] mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs italic text-slate-500 leading-relaxed max-w-md mx-auto mb-3">
                  “{data.testimonials?.[0]?.content}”
                </p>
                <p className="text-xs font-bold text-slate-800">
                  {data.testimonials?.[0]?.author || "Gia đình Anh Hoàng"}{" "}
                  <span className="font-normal text-slate-400">
                    / {data.testimonials?.[0]?.role || "Facebook"}
                  </span>
                </p>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <span className="w-2 h-2 rounded-full bg-[#143625]" />
                  <span className="w-2 h-2 rounded-full border border-slate-300" />
                  <span className="w-2 h-2 rounded-full border border-slate-300" />
                </div>
              </div>

              {/* 4 Partner Logos at Bottom */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center pt-6 mt-6 border-t border-slate-100 text-center">
                {["Pixeden", "envato", "appstorm", "GreenFlora"].map((br) => (
                  <div
                    key={br}
                    className="flex items-center justify-center gap-1.5 text-xs font-extrabold text-[#143625]"
                  >
                    <Leaf className="w-4 h-4 text-[#2d8a4e]" />
                    <span>{br}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "TIN TỨC" (3 GARDEN & LANDSCAPE BLOG CARDS) */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-[#1b4332]">
              TIN TỨC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#1b4332] line-clamp-1 mb-1">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 mb-2.5">
                    <Calendar className="w-3 h-3 text-lime-600" />
                    {post.date}
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div>
                    <a
                      href="#lien-he"
                      className="text-[10px] font-extrabold uppercase text-[#1b4332] hover:text-[#2d8a4e] border-b border-slate-300 pb-0.5"
                    >
                      XEM THÊM
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CENTERED MINIMALIST BOTANICAL FOOTER + DARK BOTTOM BAR */}
      <footer id="lien-he" className="bg-[#f8f9f8] pt-14 pb-10 text-center border-t border-slate-100">
        <div className="max-w-xl mx-auto px-4 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#1b4332]">
            <Leaf className="w-9 h-9 stroke-[1.5] text-[#2d8a4e]" />
            <span className="text-xl font-bold">{data.business.name}</span>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="border border-[#2d8a4e] text-[#1b4332] hover:bg-[#2d8a4e] hover:text-white text-xs font-semibold px-6 py-1.5 rounded-full transition cursor-pointer"
            >
              Nhận Báo Giá Miễn Phí
            </button>
          </div>

          <p className="text-xs text-slate-600">
            Hotline tư vấn: <strong>{primaryPhone}</strong>
          </p>
          <p className="text-xs text-slate-500">{data.business.address}</p>

          <div className="flex items-center justify-center gap-2 pt-2">
            {["FB", "TW", "PT", "IN", "IG"].map((soc, idx) => (
              <a
                key={soc}
                href="#lien-he"
                className={`w-7 h-7 rounded-full text-[10px] font-bold text-white flex items-center justify-center ${
                  idx % 2 === 0 ? "bg-[#1e3a8a]" : "bg-[#2d8a4e]"
                }`}
              >
                {soc}
              </a>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 pt-2">
            © 2026 {data.business.name} • Studio Kiến Trúc Cảnh Quan & Sân Vườn
          </p>
        </div>
      </footer>

      <div className="bg-[#2b2b2b] py-4 text-center text-[10px] text-slate-400 space-y-1">
        <div className="flex items-center justify-center gap-4 uppercase font-semibold text-slate-300">
          <a href="#">TRANG CHỦ</a>
          <a href="#dich-vu">CỬA HÀNG</a>
          <a href="#gioi-thieu">GIỚI THIỆU</a>
          <a href="#tin-tuc">TIN TỨC</a>
          <a href="#lien-he">LIÊN HỆ</a>
        </div>
        <p>© Bản quyền thuộc về {data.business.name}</p>
      </div>

      {/* Work Detail Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase text-[#2d8a4e]">
                {selectedWork.category} • {selectedWork.location}
              </span>
              <h3 className="text-lg font-extrabold text-[#1b4332] mt-1 mb-2">
                {selectedWork.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                {selectedWork.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedWork(null);
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-[#2d8a4e] text-white text-xs font-bold uppercase py-3 rounded-full cursor-pointer"
              >
                Yêu cầu thiết kế sân vườn tương tự
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {quoteModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setQuoteModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-extrabold text-[#1b4332] mb-1">
              Đăng ký khảo sát & Thiết kế sân vườn
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Kiến trúc sư cảnh quan {data.business.name} sẽ tư vấn giải pháp 3D miễn phí.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setQuoteModalOpen(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên gia chủ"
                className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#2d8a4e]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại"
                className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#2d8a4e]"
              />
              <input
                type="text"
                placeholder="Diện tích sân vườn & Hạng mục mong muốn (Hồ Koi, Vườn Nhật...)"
                className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#2d8a4e]"
              />
              <button
                type="submit"
                className="w-full bg-[#2d8a4e] hover:bg-[#236e3d] text-white text-xs font-bold uppercase py-3 rounded-full cursor-pointer"
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
