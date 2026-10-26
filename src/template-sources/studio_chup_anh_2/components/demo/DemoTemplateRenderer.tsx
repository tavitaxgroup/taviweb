"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  Heart,
  ChevronDown,
  Sparkles,
  Check,
  Calendar,
  Phone,
  MapPin,
  Mail,
  X,
  Menu,
  ArrowRight
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  studioChupAnh2DefaultData,
  type StudioChupAnh2Data,
  type StudioChupAnh2Silhouette
} from "@/template-sources/studio_chup_anh_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function DressSilhouetteIllustration({
  code,
  active
}: {
  code: StudioChupAnh2Silhouette["code"];
  active: boolean;
}) {
  const strokeColor = active ? "#ffffff" : "rgba(255,255,255,0.85)";
  return (
    <svg
      viewBox="0 0 120 210"
      className={`w-24 h-44 mx-auto transition-transform duration-500 ${
        active ? "scale-105 drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]" : "opacity-90 group-hover:scale-105"
      }`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`gownGrad-${code}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>

      {code === "mermaid" && (
        <g>
          {/* Straps & Sweetheart Bodice */}
          <path
            d="M46 20 L48 36 M74 20 L72 36"
            stroke={strokeColor}
            strokeWidth="1.5"
          />
          <path
            d="M44 36 C50 32, 57 38, 60 41 C63 38, 70 32, 76 36 L73 68 L77 104 L68 140 L94 192 C74 198, 46 198, 26 192 L52 140 L43 104 L47 68 Z"
            fill={`url(#gownGrad-${code})`}
            stroke={strokeColor}
            strokeWidth="1.2"
          />
          {/* Flare pleats */}
          <path
            d="M60 140 L60 195 M54 142 L40 193 M66 142 L80 193"
            stroke="#9ca3af"
            strokeWidth="0.9"
             opacity="0.65"
          />
        </g>
      )}

      {code === "straight" && (
        <g>
          {/* Long Sleeve V-neck Column */}
          <path
            d="M38 34 L48 32 L60 54 L72 32 L82 34 L86 84 L79 85 L75 48 L72 72 L75 192 C65 195, 55 195, 45 192 L48 72 L45 48 L41 85 L34 84 Z"
            fill={`url(#gownGrad-${code})`}
            stroke={strokeColor}
            strokeWidth="1.2"
          />
          <path
            d="M48 72 L72 72 M56 72 L54 192 M64 72 L66 192"
            stroke="#9ca3af"
            strokeWidth="0.8"
            opacity="0.6"
          />
        </g>
      )}

      {code === "sheath" && (
        <g>
          {/* Draped Off-shoulder / Cap Sleeve Sheath */}
          <path
            d="M40 35 L49 32 L60 52 L71 32 L80 35 L84 82 L78 83 L74 48 L71 70 L77 192 C66 196, 54 196, 43 192 L49 70 L46 48 L42 83 L36 82 Z"
            fill={`url(#gownGrad-${code})`}
            stroke={strokeColor}
            strokeWidth="1.2"
          />
          <path
            d="M49 70 L71 70 M60 70 L60 193 M52 95 L47 191 M68 95 L73 191"
            stroke="#9ca3af"
            strokeWidth="0.85"
            opacity="0.6"
          />
        </g>
      )}

      {code === "princess" && (
        <g>
          {/* Off-shoulder Ballgown */}
          <path
            d="M38 38 C46 33, 55 36, 60 42 C65 36, 74 33, 82 38 L78 46 L72 44 L69 72 L102 184 C78 198, 42 198, 18 184 L51 72 L48 44 L42 46 Z"
            fill={`url(#gownGrad-${code})`}
            stroke={strokeColor}
            strokeWidth="1.2"
          />
          {/* Voluminous Ballgown Folds */}
          <path
            d="M51 72 L69 72 M55 72 L34 188 M60 72 L60 194 M65 72 L86 188 M53 105 L24 184 M67 105 L96 184"
            stroke="#9ca3af"
            strokeWidth="0.9"
            opacity="0.65"
          />
        </g>
      )}

      {code === "mini" && (
        <g>
          {/* Straps & Short Flared Mini Couture Dress */}
          <path
            d="M47 22 L49 36 M73 22 L71 36"
            stroke={strokeColor}
            strokeWidth="1.4"
          />
          <path
            d="M45 36 C51 33, 57 37, 60 40 C63 37, 69 33, 75 36 L70 68 L92 126 C72 135, 48 135, 28 126 L50 68 Z"
            fill={`url(#gownGrad-${code})`}
            stroke={strokeColor}
            strokeWidth="1.2"
          />
          <path
            d="M50 68 L70 68 M55 68 L42 129 M60 68 L60 132 M65 68 L78 129"
            stroke="#9ca3af"
            strokeWidth="0.9"
            opacity="0.65"
          />
          <ellipse
            cx="60"
            cy="188"
            rx="18"
            ry="3"
            fill="rgba(0,0,0,0.22)"
          />
        </g>
      )}
    </svg>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: StudioChupAnh2Data = adaptClonedTemplateData(
    studioChupAnh2DefaultData,
    incomingData
  );

  const silhouettes = data.silhouettes || studioChupAnh2DefaultData.silhouettes;
  const featuredBanners =
    data.featuredBanners || studioChupAnh2DefaultData.featuredBanners;
  const atelier = data.atelierSection || studioChupAnh2DefaultData.atelierSection;
  const promo = data.onlineStorePromo || studioChupAnh2DefaultData.onlineStorePromo;

  const [selectedSilhouetteId, setSelectedSilhouetteId] = useState<string>(
    silhouettes[0]?.id || "sil-mermaid"
  );
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedGownName, setSelectedGownName] = useState<string>(
    "Bộ sưu tập Honey Lee Couture"
  );
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const activeSilhouette =
    silhouettes.find((s) => s.id === selectedSilhouetteId) || silhouettes[0];

  const primaryPhone = data.business.phone?.[0] || "0909 888 789";
  const primaryEmail = data.business.email?.[0] || "couture@monadresswedding.vn";

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const openFittingModal = (gownTitle?: string) => {
    if (gownTitle) setSelectedGownName(gownTitle);
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white">
      {/* 1. HERO + TRANSPARENT COUTURE HEADER */}
      <section className="relative min-h-[88vh] md:min-h-[94vh] w-full overflow-hidden bg-[#1b1410] text-white flex flex-col justify-between">
        {/* Background Editorial Macro Bridal Portrait */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70" />
        </div>

        {/* Top Luxury Navigation Bar */}
        <header className="relative z-20 w-full border-b border-white/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-24 flex items-center justify-between">
            {/* Left: Search button */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-white/90 hover:text-white transition cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[1.5]" />
                <span className="hidden sm:inline">Tìm kiếm</span>
              </button>
            </div>

            {/* Center: Split Navigation + Centered MONA Serif Logo */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[11px] tracking-[0.2em] uppercase font-medium">
              <a
                href="#trang-chu"
                className="text-white border-b border-white pb-1 transition"
              >
                TRANG CHỦ
              </a>
              <a
                href="#bo-suu-tap"
                className="text-white/85 hover:text-white flex items-center gap-1 transition"
              >
                THƯƠNG HIỆU <ChevronDown className="w-3 h-3 opacity-75" />
              </a>
              <a
                href="#phom-dang"
                className="text-white/85 hover:text-white transition"
              >
                PHỤ KIỆN CƯỚI
              </a>

              {/* Centerpiece Brand Logo */}
              <a
                href="#trang-chu"
                className="px-4 text-center group flex flex-col items-center"
              >
                <span className="font-serif text-3xl xl:text-4xl tracking-[0.22em] font-light text-white leading-none">
                  {data.business.name.toUpperCase().includes("MONA")
                    ? "MONA"
                    : data.business.name.split(" ").slice(0, 2).join(" ").toUpperCase()}
                </span>
                <span className="text-[8px] tracking-[0.38em] uppercase text-white/75 mt-1">
                  DRESS WEDDING
                </span>
              </a>

              <a
                href="#bo-suu-tap"
                className="text-white/85 hover:text-white transition"
              >
                ĐẦM DẠ HỘI
              </a>
              <a
                href="#phom-dang"
                className="text-white/85 hover:text-white transition"
              >
                VÁY CƯỚI
              </a>
              <a
                href="#quy-trinh"
                className="text-white/85 hover:text-white flex items-center gap-1 transition"
              >
                VỀ CHÚNG TÔI <ChevronDown className="w-3 h-3 opacity-75" />
              </a>
            </nav>

            {/* Mobile Center Brand */}
            <a
              href="#trang-chu"
              className="lg:hidden text-center flex flex-col items-center"
            >
              <span className="font-serif text-2xl tracking-[0.22em] font-light text-white leading-none">
                MONA
              </span>
              <span className="text-[7px] tracking-[0.35em] uppercase text-white/75 mt-1">
                DRESS WEDDING
              </span>
            </a>

            {/* Right: Account + Wishlist Icon with badge + Mobile toggle */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => openFittingModal()}
                title="Đặt lịch thử váy"
                className="text-white/90 hover:text-white transition cursor-pointer"
              >
                <User className="w-4 h-4 stroke-[1.5]" />
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("phom-dang");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative text-white/90 hover:text-white transition cursor-pointer"
                title="Danh sách váy yêu thích"
              >
                <Heart className="w-4 h-4 stroke-[1.5]" />
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-black/80 border border-white/40 text-[9px] flex items-center justify-center font-medium">
                  {wishlistIds.length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden text-white p-1"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Expandable Search Drawer */}
          {searchOpen && (
            <div className="bg-black/85 backdrop-blur-md border-t border-white/15 py-4 px-6">
              <div className="max-w-2xl mx-auto flex items-center gap-3 border-b border-white/40 pb-2">
                <Search className="w-4 h-4 text-white/70" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm phom váy (Đuôi cá, Công chúa, Lụa Satin, Honey Lee)..."
                  className="w-full bg-transparent text-xs tracking-wider text-white placeholder:text-white/50 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white"
                >
                  Đóng
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#141414]/95 backdrop-blur-md border-t border-white/15 px-6 py-6 space-y-4 text-xs tracking-[0.2em] uppercase">
              <a
                href="#bo-suu-tap"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white border-b border-white/10"
              >
                Bộ Sưu Tập Váy Cưới
              </a>
              <a
                href="#phom-dang"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white border-b border-white/10"
              >
                5 Phom Dáng Kinh Điển (Silhouette)
              </a>
              <a
                href="#quy-trinh"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white border-b border-white/10"
              >
                Quy Trình Chế Tác Thủ Công
              </a>
              <a
                href="#cua-hang"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white border-b border-white/10"
              >
                Showroom & Cửa Hàng Trực Tuyến
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openFittingModal();
                }}
                className="w-full border border-white py-3 text-center text-white tracking-[0.2em] uppercase mt-2"
              >
                Đặt Lịch Thử Váy VIP
              </button>
            </div>
          )}
        </header>

        {/* Bottom-Left Editorial Hero Copy (Matches SC002 HONEY LEE positioning) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pb-16 md:pb-24 pt-32">
          <div className="max-w-md space-y-4">
            {data.hero.eyebrow && (
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/80">
                {data.hero.eyebrow}
              </p>
            )}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.16em] uppercase text-white">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
              {data.hero.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openFittingModal(data.hero.title)}
                className="border border-white/85 px-7 py-3.5 text-[10px] sm:text-xs tracking-[0.22em] uppercase text-white hover:bg-white hover:text-[#1a1a1a] transition duration-300 cursor-pointer"
              >
                {data.hero.ctaText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRIDAL DRESSES AND WEDDING GOWNS (2 Framed Editorial Banners) */}
      <section id="bo-suu-tap" className="py-16 md:py-24 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-light tracking-[0.22em] uppercase text-[#222222]">
              VÁY CƯỚI COUTURE &amp; ĐẦM DẠ HỘI THIẾT KẾ
            </h2>
            <p className="text-xs tracking-[0.18em] uppercase text-neutral-400 mt-2">
              BRIDAL DRESSES AND WEDDING GOWNS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredBanners.map((banner) => (
              <div
                key={banner.id}
                className="group relative aspect-[4/3] overflow-hidden bg-neutral-100"
              >
                <img
                  src={banner.image}
                  alt={banner.titleVi}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Soft Luminous Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10 group-hover:from-black/65 transition-colors" />

                {/* Signature Inner Thin White Frame */}
                <div className="absolute inset-3.5 sm:inset-5 border border-white/55 pointer-events-none" />

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-12 px-8 text-center text-white">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-white/80 mb-1">
                    {banner.labelEn}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium tracking-[0.2em] uppercase mb-2">
                    {banner.titleVi}
                  </h3>
                  <p className="text-xs text-white/85 max-w-xs leading-relaxed font-light mb-5">
                    {banner.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => openFittingModal(banner.titleVi)}
                    className="border border-white/85 px-7 py-2.5 text-[10px] tracking-[0.24em] uppercase text-white hover:bg-white hover:text-[#1a1a1a] transition duration-300 cursor-pointer"
                  >
                    {banner.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SILHOUETTE SECTION (Dark Slate-Charcoal #4d5057 with 5 Dress Silhouettes) */}
      <section
        id="phom-dang"
        className="bg-[#4d5057] text-white py-20 md:py-28 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14 md:mb-20">
            <h2 className="text-xl sm:text-2xl font-normal tracking-[0.22em] uppercase mb-3">
              SILHOUETTE — PHOM DÁNG VÁY CƯỚI
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              Vóc dáng của mỗi cô dâu đều tuyệt đẹp theo cách riêng. Hãy tôn vinh đường nét
              quyến rũ của bạn bằng việc lựa chọn phom dáng váy cưới hoàn hảo nhất.
            </p>
          </div>

          {/* 5 Interactive Bridal Silhouettes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-end">
            {silhouettes.map((sil) => {
              const isSelected = sil.id === activeSilhouette?.id;
              return (
                <button
                  key={sil.id}
                  type="button"
                  onClick={() => setSelectedSilhouetteId(sil.id)}
                  className="group flex flex-col items-center text-center focus:outline-none cursor-pointer"
                >
                  <DressSilhouetteIllustration
                    code={sil.code}
                    active={isSelected}
                  />
                  <span
                    className={`mt-5 text-[11px] tracking-[0.22em] uppercase pb-1.5 border-b transition-all ${
                      isSelected
                        ? "text-white font-semibold border-white"
                        : "text-white/75 border-white/40 group-hover:text-white group-hover:border-white"
                    }`}
                  >
                    {sil.nameEn}
                  </span>
                  <span className="mt-1.5 text-[11px] text-white/65 font-light">
                    {sil.nameVi}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Selected Silhouette Lookbook Drawer */}
          {activeSilhouette && (
            <div className="mt-16 pt-12 border-t border-white/15">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <span className="text-[10px] tracking-[0.28em] uppercase text-white/60">
                    BỘ SƯU TẬP THEO PHOM DÁNG • {activeSilhouette.nameEn}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium tracking-[0.12em] uppercase mt-1">
                    {activeSilhouette.nameVi} — {activeSilhouette.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 font-light mt-2 max-w-2xl">
                    {activeSilhouette.description}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-block text-[11px] bg-white/10 border border-white/20 px-4 py-2 text-white/90">
                    Phù hợp: {activeSilhouette.recommendedFor}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {activeSilhouette.sampleGowns.map((gown) => {
                  const wished = wishlistIds.includes(gown.id);
                  return (
                    <div
                      key={gown.id}
                      className="group bg-[#3e4147] border border-white/10 overflow-hidden flex flex-col"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-800">
                        <img
                          src={gown.image}
                          alt={gown.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <button
                          type="button"
                          onClick={() => toggleWishlist(gown.id)}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/45 hover:bg-black/70 flex items-center justify-center text-white transition cursor-pointer"
                          title="Yêu thích"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              wished ? "fill-white text-white" : "text-white"
                            }`}
                          />
                        </button>
                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs px-3 py-1 text-[10px] tracking-[0.18em] uppercase">
                          {gown.collection}
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-medium tracking-[0.12em] uppercase text-white">
                            {gown.name}
                          </h4>
                          <p className="text-xs text-white/70 mt-1">
                            Giá thuê / May đo: {gown.price}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => openFittingModal(gown.name)}
                          className="mt-4 w-full border border-white/50 py-2.5 text-[10px] tracking-[0.22em] uppercase text-white hover:bg-white hover:text-[#1a1a1a] transition cursor-pointer"
                        >
                          ĐẶT LỊCH THỬ MẪU NÀY
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. CREATING PROCESS (Top Studio Strip + Full-Width Craftsmanship Banner) */}
      <section id="quy-trinh" className="bg-white pt-10">
        {/* Architectural Atelier Ceiling Strip */}
        <div className="w-full h-24 sm:h-36 md:h-44 overflow-hidden mb-2">
          <img
            src={atelier.topStripImage}
            alt="Mona Bridal Atelier"
            className="w-full h-full object-cover object-center grayscale contrast-125"
          />
        </div>

        {/* Main Hand-Crafted Couture Banner */}
        <div className="relative w-full min-h-[420px] md:min-h-[540px] flex items-center justify-center overflow-hidden">
          <img
            src={atelier.craftImage}
            alt={atelier.titleVi}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 mb-2">
              {atelier.titleVi}
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase text-[#141414] mb-4">
              {atelier.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
              {atelier.description}
            </p>
          </div>
        </div>

        {/* 4 Atelier Steps Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-14 border-b border-neutral-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {atelier.steps.map((step) => (
              <div key={step.id} className="space-y-2">
                <span className="font-serif text-2xl text-neutral-400">
                  {step.stepNumber}.
                </span>
                <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#1a1a1a]">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPLIT EDITORIAL FEATURE (Vertical Portrait Left + Minimalist MONA Store Promo Right) */}
      <section id="cua-hang" className="py-16 md:py-24 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Tall Editorial Portrait */}
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 shadow-sm">
              <img
                src={promo.image}
                alt={promo.brandTitle}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Minimalist Brand Block */}
          <div className="md:col-span-7 flex flex-col items-center text-center px-4">
            <div className="mb-3">
              <span className="block font-serif text-3xl sm:text-4xl tracking-[0.22em] font-light text-[#1a1a1a]">
                {promo.brandTitle}
              </span>
              <span className="block text-[8px] tracking-[0.38em] uppercase text-neutral-500 mt-1">
                {promo.brandSub}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 font-light mt-2 mb-6 max-w-sm">
              {promo.tagline}
            </p>

            <button
              type="button"
              onClick={() => openFittingModal("Đặt lịch thử váy & Tư vấn gói chụp")}
              className="border border-[#1a1a1a] px-9 py-3 text-[10px] tracking-[0.24em] uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition duration-300 cursor-pointer"
            >
              {promo.ctaText}
            </button>
          </div>
        </div>
      </section>

      {/* 6. DARK LUXURY FOOTER (#1a1a1a) */}
      <footer className="bg-[#1c1c1c] text-white pt-16 pb-10 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Top Row: CONTACT US + NEWSLETTER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 border-b border-white/10">
            <div>
              <h3 className="text-sm font-semibold tracking-[0.18em] uppercase mb-3">
                LIÊN HỆ VỚI CHÚNG TÔI
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light max-w-md">
                Bạn có câu hỏi về bộ sưu tập váy cưới hoặc gói chụp ảnh Pre-Wedding?
                Ghé thăm showroom của {data.business.name} hoặc liên hệ ngay hôm nay –
                đội ngũ stylist của chúng tôi luôn sẵn sàng hỗ trợ bạn.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-[0.18em] uppercase mb-3">
                BẢN TIN THỜI TRANG CƯỚI
              </h3>
              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 py-2">
                  <Check className="w-4 h-4" />
                  <span>
                    Cảm ơn bạn đã đăng ký nhận Lookbook mùa cưới mới nhất từ{" "}
                    {data.business.name}.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail.trim()) setNewsletterSubscribed(true);
                  }}
                  className="flex items-stretch max-w-md"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Nhập địa chỉ Email của bạn"
                    className="flex-1 bg-white text-[#1a1a1a] px-4 py-2.5 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#1c1c1c] border border-white/80 px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase text-white hover:bg-white hover:text-[#1c1c1c] transition cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Middle Row: 3 Columns (CUSTOMER CARE / PRODUCT / CONTACT US) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 text-xs">
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-4">
                CHĂM SÓC KHÁCH HÀNG
              </h4>
              <ul className="space-y-2.5 text-white/70 font-light">
                <li>
                  <a href="#quy-trinh" className="hover:text-white transition">
                    Điều khoản &amp; Chính sách thuê váy
                  </a>
                </li>
                <li>
                  <a href="#quy-trinh" className="hover:text-white transition">
                    Chính sách bảo mật thông tin
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => openFittingModal()}
                    className="hover:text-white transition cursor-pointer"
                  >
                    Tài khoản &amp; Lịch hẹn của tôi
                  </button>
                </li>
                <li>
                  <a href="#phom-dang" className="hover:text-white transition">
                    Câu hỏi thường gặp (FAQs)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-4">
                SẢN PHẨM &amp; BỘ SƯU TẬP
              </h4>
              <ul className="space-y-2.5 text-white/70 font-light">
                <li>
                  <a href="#bo-suu-tap" className="hover:text-white transition">
                    Váy cưới Haute Couture
                  </a>
                </li>
                <li>
                  <a href="#bo-suu-tap" className="hover:text-white transition">
                    Đầm dạ hội &amp; After-Party
                  </a>
                </li>
                <li>
                  <a href="#phom-dang" className="hover:text-white transition">
                    Lúp cưới &amp; Phụ kiện thủ công
                  </a>
                </li>
                <li>
                  <a href="#cua-hang" className="hover:text-white transition">
                    Gói chụp ảnh Pre-Wedding
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-4">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-white/70 font-light">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-white/60 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white/60 shrink-0" />
                  <a href={`tel:${primaryPhone.replace(/\s+/g, "")}`} className="hover:text-white">
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white/60 shrink-0" />
                  <a href={`mailto:${primaryEmail}`} className="hover:text-white">
                    {primaryEmail}
                  </a>
                </li>
                <li className="pt-1">
                  <button
                    type="button"
                    onClick={() => openFittingModal()}
                    className="text-white underline underline-offset-4 hover:text-white/80 cursor-pointer"
                  >
                    Đặt lịch hẹn thử váy (Book Your Appointment)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-white/10 text-center text-[11px] text-white/50 font-light">
            © All rights reserved — Thiết kế &amp; vận hành bởi{" "}
            <span className="text-white/80">{data.business.name}</span>
          </div>
        </div>
      </footer>

      {/* VIP BRIDAL FITTING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-[#1a1a1a] w-full max-w-lg p-8 relative shadow-2xl border border-neutral-200">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="font-serif text-2xl tracking-[0.22em] uppercase block">
                MONA
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-neutral-400 block mt-0.5">
                PRIVATE BRIDAL FITTING
              </span>
              <h3 className="text-base font-medium tracking-[0.16em] uppercase mt-4">
                ĐẶT LỊCH THỬ VÁY &amp; TƯ VẤN RIÊNG
              </h3>
            </div>

            {bookingSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold tracking-[0.16em] uppercase">
                  ĐÃ GỬI YÊU CẦU ĐẶT LỊCH HẸN
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
                  Chuyên viên Bridal Stylist của {data.business.name} sẽ liên hệ xác nhận
                  khung giờ đón tiếp riêng tư tại phòng VIP Lounge trong vòng 15 phút.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="border border-neutral-900 px-8 py-2.5 text-[10px] tracking-[0.22em] uppercase hover:bg-neutral-900 hover:text-white transition"
                >
                  HOÀN TẤT
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block text-[10px] tracking-[0.18em] uppercase text-neutral-500 mb-1.5">
                    Thiết kế / Dịch vụ quan tâm
                  </label>
                  <input
                    type="text"
                    value={selectedGownName}
                    onChange={(e) => setSelectedGownName(e.target.value)}
                    className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-black"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-neutral-500 mb-1.5">
                      Họ và tên cô dâu *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Ngọc Minh Khuê"
                      className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-neutral-500 mb-1.5">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0909 xxx xxx"
                      className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-neutral-500 mb-1.5">
                      Ngày dự kiến thử váy
                    </label>
                    <input
                      type="date"
                      className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-neutral-500 mb-1.5">
                      Phom váy yêu thích
                    </label>
                    <select className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-black bg-white">
                      <option>Mermaid — Dáng Đuôi Cá</option>
                      <option>Princess — Dáng Công Chúa Bồng Xòe</option>
                      <option>Straight — Dáng Suông Thanh Lịch</option>
                      <option>Sheath — Dáng Ôm Tinh Tế</option>
                      <option>Mini — Váy Ngắn After-Party</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-white py-3.5 text-[10px] tracking-[0.24em] uppercase hover:bg-black transition cursor-pointer mt-2"
                >
                  XÁC NHẬN ĐẶT LỊCH HẸN VIP
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
