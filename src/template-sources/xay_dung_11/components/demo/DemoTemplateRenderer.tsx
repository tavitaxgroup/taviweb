"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Search,
  ShoppingBag,
  Award,
  ShieldCheck,
  Palette,
  Sparkles,
  Check,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung11DefaultData,
  type XayDung11Data,
  type PaintProductItem
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<XayDung11Data>(xayDung11DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<PaintProductItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@monapainting.vn";

  const handleAddToCart = (product: PaintProductItem) => {
    const numericPrice = parseInt(product.price.replace(/\D/g, ""), 10) || 1950000;
    setCartCount((prev) => prev + 1);
    setCartTotal((prev) => prev + numericPrice);
  };

  const formatCurrency = (amount: number) => {
    if (amount === 0) return "0 đ";
    return `${amount.toLocaleString("vi-VN")} đ`;
  };

  /* Decorative Paint Brush Section Divider matching reference screenshot */
  const renderBrushDivider = () => (
    <div className="flex items-center justify-center gap-3 mt-2 mb-8">
      <div className="w-8 h-px bg-slate-200" />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
        <path
          d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 10-3-3z"
          fill="currentColor"
        />
        <path
          d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="w-8 h-px bg-slate-200" />
    </div>
  );

  /* Realistic 3D Paint Bucket Visual matching Dulux & Maxilite cans in screenshot */
  const renderPaintBucket = (product: PaintProductItem, isCompact = false) => {
    const themeMap = {
      "silver-green": {
        lid: "from-slate-300 via-white to-slate-400",
        bodyBg: "from-slate-100 via-white to-slate-200",
        headerBg: "from-[#1a3d7c] to-[#0f2552]",
        bannerBg: "bg-[#2c5234]",
        accentWave: "#6bbd45"
      },
      "blue-yellow": {
        lid: "from-[#1a4388] via-[#2458ad] to-[#14336b]",
        bodyBg: "from-[#f9c623] via-[#ffd84d] to-[#e5ac00]",
        headerBg: "from-[#163a7a] to-[#0d2759]",
        bannerBg: "bg-[#1a4388]",
        accentWave: "#f9c623"
      },
      "silver-teal": {
        lid: "from-slate-300 via-slate-100 to-slate-400",
        bodyBg: "from-slate-100 via-white to-slate-200",
        headerBg: "from-slate-100 to-white",
        bannerBg: "bg-[#0077a8]",
        accentWave: "#0095da"
      },
      "purple-orange": {
        lid: "from-[#152d68] via-[#214394] to-[#102252]",
        bodyBg: "from-[#3b215d] via-[#5e2a6e] to-[#c85a32]",
        headerBg: "from-[#152d68] to-[#1e3d85]",
        bannerBg: "bg-[#d96b27]",
        accentWave: "#f39c12"
      },
      "blue-white": {
        lid: "from-[#143575] via-[#1f4ca1] to-[#10295c]",
        bodyBg: "from-white via-slate-50 to-slate-200",
        headerBg: "from-[#143575] to-[#1e4b9e]",
        bannerBg: "bg-[#0088cc]",
        accentWave: "#4caf50"
      },
      "red-blue": {
        lid: "from-[#162f6e] via-[#22459c] to-[#102354]",
        bodyBg: "from-[#d9232a] via-[#e63940] to-[#162f6e]",
        headerBg: "from-[#162f6e] to-[#1b3a85]",
        bannerBg: "bg-[#f5b800]",
        accentWave: "#f5b800"
      }
    };

    const style = themeMap[product.bucketTheme] || themeMap["silver-green"];

    return (
      <div className="relative mx-auto w-44 sm:w-48 flex flex-col items-center select-none group-hover:-translate-y-1.5 transition-transform duration-300">
        {/* Wire Handle Arc */}
        <div className="w-40 h-5 border-t-2 border-x-2 border-slate-300 rounded-t-full -mb-2 opacity-75" />

        {/* Bucket Lid Rim */}
        <div
          className={`w-44 h-4 rounded-t-md bg-gradient-to-r ${style.lid} shadow-sm border-b border-black/15 z-10`}
        />
        <div
          className={`w-[172px] h-2 bg-gradient-to-r ${style.lid} shadow-xs border-b border-black/10 z-10`}
        />

        {/* Tapered Cylindrical Paint Can Body */}
        <div
          className={`relative w-40 ${
            isCompact ? "h-36" : "h-48"
          } rounded-b-xl bg-gradient-to-b ${style.bodyBg} shadow-[0_12px_24px_-8px_rgba(0,0,0,0.28)] border border-slate-300/80 overflow-hidden flex flex-col justify-between`}
        >
          {/* Metallic Side Highlights */}
          <div className="absolute inset-y-0 left-2 w-3 bg-white/30 blur-[2px] pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-2 w-3 bg-black/10 blur-[2px] pointer-events-none z-20" />

          {/* Top Brand Header inside Bucket */}
          <div
            className={`px-3 pt-2.5 pb-2 bg-gradient-to-b ${style.headerBg} text-center relative`}
          >
            {/* Rainbow / Flourish curve */}
            <svg viewBox="0 0 120 18" className="w-24 h-3.5 mx-auto -mb-1">
              <path
                d="M10,15 Q60,-5 110,12"
                fill="none"
                stroke={style.accentWave}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              className={`text-sm font-black tracking-tight ${
                product.bucketTheme === "silver-teal" ? "text-[#143575]" : "text-white"
              }`}
            >
              {product.brand}
            </span>
          </div>

          {/* Center Product Label & Architectural Photo Vignette */}
          <div className="relative flex-1 flex flex-col justify-center items-center px-2.5 py-1 text-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div
              className={`relative z-10 ${style.bannerBg} text-white px-2.5 py-1 rounded-xs shadow-xs w-full`}
            >
              <p className="text-[10px] font-black uppercase tracking-wider leading-tight truncate">
                {product.badgeText}
              </p>
            </div>
            {!isCompact && (
              <p
                className={`relative z-10 text-[8px] font-bold uppercase mt-1.5 leading-tight px-1 ${
                  product.bucketTheme === "purple-orange" || product.bucketTheme === "red-blue"
                    ? "text-white"
                    : "text-slate-800"
                }`}
              >
                {product.subBadgeText}
              </p>
            )}
          </div>

          {/* Bottom Volume & Quality Footer */}
          <div className="bg-white/90 px-2.5 py-1 border-t border-slate-200 flex items-center justify-between text-[8px] font-extrabold text-slate-700">
            <span>AKZONOBEL</span>
            <span className="text-[#0095da]">{product.volume}</span>
          </div>
        </div>
      </div>
    );
  };

  const filteredMainProducts = (data.mainProducts || []).filter((p) =>
    searchQuery.trim()
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#0095da] selection:text-white relative">
      {/* Floating Messenger Chat Button */}
      <a
        href="#lien-he"
        className="fixed right-4 top-40 z-40 w-10 h-10 rounded-full bg-[#0095da] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title="Chat tư vấn chọn màu sơn"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>

      {/* Topbar — Signature Multi-Color Paint Gradient (Green -> Olive Gold -> Magenta) */}
      <div className="bg-gradient-to-r from-[#6cbd45] via-[#a3912d] to-[#c42c82] text-white text-[11px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="uppercase">{data.business.address.split(",")[0]}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3 shrink-0" />
              <span>{data.business.workingHours || "08:00 - 17:00"}</span>
            </span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 font-semibold hover:underline"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span>{primaryPhone}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-white/90">
              <span className="font-bold cursor-pointer hover:text-white">f</span>
              <span className="font-bold cursor-pointer hover:text-white">◎</span>
              <span className="font-bold cursor-pointer hover:text-white">𝕏</span>
            </div>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a href="#lien-he" className="hover:underline font-medium">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Colorful Paint Roller + House Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-[#0095da] via-[#7ac143] to-[#f37021] p-0.5 shadow-xs">
              <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                <Palette className="w-6 h-6 text-[#0095da]" />
              </div>
            </div>
            <div className="leading-none">
              <span className="block text-xl font-black tracking-tight text-slate-900 uppercase">
                {data.business.name.replace(/PAINTING/i, "").trim() || "MONA"}
              </span>
              <span className="block text-[11px] font-medium text-slate-500 tracking-widest">
                Painting
              </span>
            </div>
          </a>

          {/* Rounded Search Input */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-full pl-4 pr-9 py-1.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#0095da]"
              />
              <Search className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold uppercase tracking-wide text-slate-700">
            <a href="#" className="text-[#0095da]">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#0095da] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#san-pham" className="hover:text-[#0095da] transition-colors">
              CỬA HÀNG
            </a>
            <a href="#y-tuong" className="hover:text-[#0095da] transition-colors">
              Ý TƯỞNG
            </a>
            <a href="#lien-he" className="hover:text-[#0095da] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Cart Status */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("san-pham");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 text-xs font-extrabold text-slate-800 hover:text-[#0095da] transition-colors cursor-pointer"
            >
              <span>{formatCurrency(cartTotal)}</span>
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-slate-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#0095da] text-white text-[9px] flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2.5 text-xs font-extrabold uppercase">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#0095da]">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" onClick={() => setMobileMenuOpen(false)} className="block py-1">
              GIỚI THIỆU
            </a>
            <a href="#san-pham" onClick={() => setMobileMenuOpen(false)} className="block py-1">
              CỬA HÀNG
            </a>
            <a href="#y-tuong" onClick={() => setMobileMenuOpen(false)} className="block py-1">
              Ý TƯỞNG
            </a>
            <a href="#lien-he" onClick={() => setMobileMenuOpen(false)} className="block py-1">
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* Hero Banner — Artistic Paint Brush Left + Right-Aligned Text & Dual Buttons */}
      <section className="relative w-full min-h-[420px] sm:min-h-[480px] bg-[#e5e6ea] overflow-hidden flex items-center">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-left opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/65 to-white/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-16">
          <div className="ml-auto max-w-lg text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0095da] uppercase tracking-wide">
              {data.business.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-800 mt-1">
              {data.hero.subtitle}
            </p>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-3 leading-relaxed">
              {data.hero.description}
            </p>

            <div className="flex items-center justify-end gap-3 mt-6">
              <a
                href={data.hero.ctaLink || "#san-pham"}
                className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-xs font-extrabold uppercase px-5 py-2.5 rounded-xs shadow-sm transition-colors"
              >
                {data.hero.ctaText || "XEM THÊM"}
              </a>
              <a
                href={data.hero.secondaryCtaLink || "#phu-tro"}
                className="bg-[#0095da] hover:bg-[#007bb5] text-white text-xs font-extrabold uppercase px-5 py-2.5 rounded-xs shadow-sm transition-colors"
              >
                {data.hero.secondaryCtaText || "MUA NGAY"}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slider Indicator Bars */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="w-7 h-1 bg-white rounded-full shadow-xs" />
          <span className="w-7 h-1 bg-white/50 rounded-full" />
        </div>
      </section>

      {/* Section 1: 4 USP Feature Columns */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {(data.features || []).map((feat) => (
              <div key={feat.id} className="flex flex-col items-center px-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-xs"
                  style={{ backgroundColor: `${feat.color}18`, color: feat.color }}
                >
                  {feat.icon === "quality" && <Award className="w-7 h-7" />}
                  {feat.icon === "efficiency" && <ShieldCheck className="w-7 h-7" />}
                  {feat.icon === "palette" && <Palette className="w-7 h-7" />}
                  {feat.icon === "durability" && <Sparkles className="w-7 h-7" />}
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-[#0095da] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Về Chúng Tôi Full-Width Interior Banner */}
      <section id="gioi-thieu" className="relative py-20 md:py-24 overflow-hidden bg-[#2b221e] text-white">
        <img
          src={data.aboutBanner.backgroundImage}
          alt={data.aboutBanner.subtitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
              {data.business.name}
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-100 mt-1">
              {data.aboutBanner.subtitle}
            </p>
            <p className="text-xs sm:text-[13px] text-slate-200 mt-3 leading-relaxed">
              {data.aboutBanner.description}
            </p>
            <div className="mt-6">
              <a
                href="#san-pham"
                className="inline-block bg-[#0095da] hover:bg-[#007bb5] text-white text-xs font-extrabold uppercase px-5 py-2.5 rounded-xs shadow-md transition-colors"
              >
                {data.aboutBanner.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Sản Phẩm Sơn (4 Dulux Paint Buckets) */}
      <section id="san-pham" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-slate-800">
            Sản Phẩm Sơn
          </h2>
          {renderBrushDivider()}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMainProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center text-center group"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer py-4 w-full flex justify-center"
                >
                  {renderPaintBucket(product, false)}
                </div>

                <h3 className="text-xs font-semibold text-slate-600 mt-3 min-h-[32px] px-2 flex items-center justify-center">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="bg-[#0095da] hover:bg-[#007bb5] text-white text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-xs shadow-xs transition-colors cursor-pointer"
                  >
                    ĐỌC TIẾP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Sản Phẩm Phụ Trợ (4 Auxiliary Products + Green CỬA HÀNG Button) */}
      <section id="phu-tro" className="pb-16 md:pb-20 pt-4 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-slate-800">
            Sản Phẩm Phụ Trợ
          </h2>
          {renderBrushDivider()}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.auxiliaryProducts || []).map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="py-2 w-full flex justify-center">
                  {renderPaintBucket(product, true)}
                </div>
                <p className="text-xs font-semibold text-slate-600 mt-2">{product.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#lien-he"
              className="inline-block bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-xs font-extrabold uppercase px-7 py-2.5 rounded-xs shadow-sm transition-colors"
            >
              CỬA HÀNG
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Ý Tưởng (Light Diagonal-Patterned #f2f7fb Background + 3x2 Inspiration Grid) */}
      <section
        id="y-tuong"
        className="py-16 md:py-20 bg-[#f2f7fb]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,149,218,0.03) 0px, rgba(0,149,218,0.03) 12px, transparent 12px, transparent 24px)"
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-slate-800">Ý Tưởng</h2>
          {renderBrushDivider()}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.ideas || []).map((idea) => (
              <article
                key={idea.id}
                className="bg-white rounded-xs overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xs sm:text-[13px] font-extrabold text-slate-800 group-hover:text-[#0095da] transition-colors line-clamp-1">
                    {idea.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {idea.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Đối Tác Của Chúng Tôi */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-slate-800">
            Đối Tác Của Chúng Tôi
          </h2>
          {renderBrushDivider()}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {(data.partners || []).map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center justify-center p-3 text-center group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-xs border"
                  style={{
                    borderColor: `${partner.primaryColor}40`,
                    background: `linear-gradient(135deg, ${partner.primaryColor}15, ${partner.secondaryColor}20)`
                  }}
                >
                  <Palette className="w-6 h-6" style={{ color: partner.primaryColor }} />
                </div>
                <span
                  className="text-sm font-extrabold tracking-tight"
                  style={{ color: partner.secondaryColor }}
                >
                  {partner.name}
                </span>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider">
                  {partner.slogan}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer — Dark #0e1013 with Vibrant Paint Splash Graphic at Bottom */}
      <footer id="lien-he" className="relative bg-[#0e1013] text-slate-300 overflow-hidden">
        {/* Vibrant Bottom Paint Splash Gradient Effect matching screenshot */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 15% 100%, #f37021 0%, transparent 45%), radial-gradient(circle at 45% 100%, #0095da 0%, transparent 50%), radial-gradient(circle at 80% 100%, #7ac143 0%, transparent 45%)"
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Logo & Contact Details */}
            <div className="lg:col-span-3 space-y-3 text-xs">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0095da] via-[#7ac143] to-[#f37021] flex items-center justify-center text-white font-black">
                  <Palette className="w-5 h-5" />
                </div>
                <div className="leading-none">
                  <span className="block text-lg font-black text-white uppercase">
                    {data.business.name.replace(/PAINTING/i, "").trim() || "MONA"}
                  </span>
                  <span className="block text-[10px] text-slate-400">Painting</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#0095da]"
                >
                  {primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href={`mailto:${primaryEmail}`} className="hover:text-[#0095da]">
                  {primaryEmail}
                </a>
              </div>
            </div>

            {/* Col 2: MENU with Blue Checkmarks & Right Arrows */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                MENU
              </h3>
              <ul className="space-y-2.5 text-xs">
                {[
                  { label: "Trang chủ", href: "#", active: true },
                  { label: "Giới thiệu", href: "#gioi-thieu" },
                  { label: "Cửa hàng", href: "#san-pham" },
                  { label: "Ý tưởng", href: "#y-tuong" },
                  { label: "Liên hệ", href: "#lien-he" }
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`flex items-center justify-between hover:text-[#0095da] transition-colors ${
                        link.active ? "text-[#0095da] font-semibold" : "text-slate-300"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0095da]" />
                        <span>{link.label}</span>
                      </span>
                      <ArrowRight className="w-3 h-3 text-slate-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: ĐĂNG KÝ NHẬN BẢN TIN */}
            <div className="lg:col-span-4">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                ĐĂNG KÝ NHẬN BẢN TIN
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Đăng ký email để nhận ngay bảng giá chiết khấu đại lý mới nhất, tài liệu xu hướng
                màu sắc Dulux của năm và ưu đãi thi công sơn trọn gói.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSubscribed(true);
                  setNewsletterEmail("");
                }}
                className="flex items-stretch gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Email ..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white text-slate-800 placeholder-slate-400 text-xs px-3 py-2 rounded-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#0095da] hover:bg-[#007bb5] text-white text-xs font-extrabold uppercase px-4 py-2 rounded-xs shrink-0 cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {newsletterSubscribed && (
                <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Đã đăng ký nhận bảng màu &amp; báo giá thành công!</span>
                </p>
              )}
            </div>

            {/* Col 4: Ý TƯỞNG (2 Recent Blog Posts with Thumbnails) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                Ý TƯỞNG
              </h3>
              <div className="space-y-3">
                {(data.ideas || []).slice(0, 2).map((post) => (
                  <a
                    key={post.id}
                    href="#y-tuong"
                    className="flex items-start gap-3 group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-14 h-12 rounded-xs object-cover shrink-0 border border-white/10"
                    />
                    <div className="min-w-0">
                      <h4 className="text-[11px] font-bold text-white group-hover:text-[#0095da] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <span className="text-[10px] text-slate-500 block mt-0.5">{post.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="relative z-10 bg-black/60 py-3 text-center text-[11px] text-slate-400 border-t border-white/10">
          © Bản quyền thuộc về <span className="text-white font-semibold">{data.business.name}</span>{" "}
          • Đại lý phân phối sơn chính hãng
        </div>
      </footer>

      {/* Product Quick-View & Order Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-md max-w-lg w-full overflow-hidden shadow-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">{renderPaintBucket(selectedProduct, true)}</div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="inline-block bg-[#0095da]/10 text-[#0095da] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded">
                  {selectedProduct.brand} • {selectedProduct.volume}
                </span>
                <h3 className="text-base font-extrabold text-slate-900">{selectedProduct.name}</h3>
                <p className="text-lg font-black text-[#d91c5c]">{selectedProduct.price}</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <p className="text-[11px] text-slate-500">
                  Độ phủ lý thuyết: <strong>{selectedProduct.coverage}</strong>
                </p>
                <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-xs font-extrabold uppercase px-4 py-2 rounded-xs cursor-pointer"
                  >
                    Thêm vào giỏ hàng
                  </button>
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="bg-[#0095da] text-white text-xs font-extrabold uppercase px-4 py-2 rounded-xs"
                  >
                    Gọi báo giá sỉ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
