"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Heart,
  User,
  Droplets,
  Sparkles,
  Flower2,
  Pipette,
  Feather,
  Ban,
  Award,
  Play,
  Star,
  Truck,
  Headphones,
  ShieldCheck,
  RefreshCw,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Leaf,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien5DefaultData,
  type ThamMyVien5Data,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: ThamMyVien5Data = adaptClonedTemplateData(
    thamMyVien5DefaultData,
    incomingData
  );

  const [activeDealTab, setActiveDealTab] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [activeVideo, setActiveVideo] = useState<any | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@sacdep24.vn";
  const products = data.services || [];

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "droplet":
        return <Droplets className="w-9 h-9 text-[#3a3a3a] stroke-[1.3]" />;
      case "spray":
        return <Sparkles className="w-9 h-9 text-[#3a3a3a] stroke-[1.3]" />;
      case "flower":
        return <Flower2 className="w-9 h-9 text-[#3a3a3a] stroke-[1.3]" />;
      default:
        return <Pipette className="w-9 h-9 text-[#3a3a3a] stroke-[1.3]" />;
    }
  };

  const renderPromoIcon = (iconName: string) => {
    switch (iconName) {
      case "feather":
        return <Feather className="w-5 h-5 text-[#5C8D3E]" />;
      case "ban":
        return <Ban className="w-5 h-5 text-[#5C8D3E]" />;
      case "award":
        return <Award className="w-5 h-5 text-[#5C8D3E]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#5C8D3E]" />;
    }
  };

  const renderGuaranteeIcon = (iconName: string) => {
    switch (iconName) {
      case "truck":
        return <Truck className="w-8 h-8 text-[#5C8D3E] stroke-[1.4]" />;
      case "headset":
        return <Headphones className="w-8 h-8 text-[#5C8D3E] stroke-[1.4]" />;
      case "shield":
        return <ShieldCheck className="w-8 h-8 text-[#5C8D3E] stroke-[1.4]" />;
      default:
        return <RefreshCw className="w-8 h-8 text-[#5C8D3E] stroke-[1.4]" />;
    }
  };

  const dealProducts = products.slice(
    activeDealTab === 0 ? 0 : activeDealTab === 1 ? 2 : 4,
    activeDealTab === 0 ? 8 : activeDealTab === 1 ? 10 : 12
  );

  return (
    <div className="min-h-screen bg-white text-[#262626] font-sans selection:bg-[#5C8D3E] selection:text-white">
      {/* HERO + OVERLAY HEADER (Matches TMV008-tham_my_vien_5.png) */}
      <section className="relative min-h-[680px] lg:min-h-[760px] flex flex-col justify-between overflow-hidden bg-[#5a4a3a]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/25" />
        </div>

        {/* Topbar + Main Navigation */}
        <header className="relative z-20">
          {/* Top Utility Bar */}
          <div className="border-b border-white/15 bg-black/20 backdrop-blur-[2px] text-white/90 text-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-[#a8d886] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#a8d886]" />
                  <span>(+84) {primaryPhone}</span>
                </a>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="hidden sm:flex items-center gap-1.5 hover:text-[#a8d886] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#a8d886]" />
                  <span>{primaryEmail}</span>
                </a>
              </div>
              <div className="flex items-center gap-5 uppercase tracking-wider text-[11px] font-medium">
                <a
                  href="#lien-he"
                  className="flex items-center gap-1.5 hover:text-[#a8d886] transition-colors"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>ĐĂNG NHẬP</span>
                </a>
                <a
                  href="#san-pham"
                  className="flex items-center gap-1.5 hover:text-[#a8d886] transition-colors"
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>YÊU THÍCH</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Navbar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={data.business.name}
                  className="h-11 w-auto object-contain"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-[#C6A355]/90 border border-white/40 flex items-center justify-center text-white shadow-md">
                  <Leaf className="w-6 h-6" />
                </div>
              )}
              <div>
                <span className="block text-xl sm:text-2xl font-serif font-semibold text-white tracking-wide leading-none">
                  {data.business.name}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.24em] text-white/80 mt-1">
                  DƯỢC MỸ PHẨM THIÊN NHIÊN
                </span>
              </div>
            </a>

            {/* Center Links */}
            <nav className="hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
              <a
                href="#"
                className="px-3.5 py-1.5 rounded-sm bg-[#5C8D3E] text-white shadow-sm"
              >
                TRANG CHỦ
              </a>
              <a
                href="#gioi-thieu"
                className="px-3.5 py-1.5 hover:text-[#a8d886] transition-colors"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#san-pham"
                className="px-3.5 py-1.5 hover:text-[#a8d886] transition-colors"
              >
                SẢN PHẨM
              </a>
              <a
                href="#loi-ich"
                className="px-3.5 py-1.5 hover:text-[#a8d886] transition-colors"
              >
                CÔNG NGHỆ
              </a>
              <a
                href="#tin-tuc"
                className="px-3.5 py-1.5 hover:text-[#a8d886] transition-colors"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he"
                className="px-3.5 py-1.5 hover:text-[#a8d886] transition-colors"
              >
                LIÊN HỆ
              </a>
            </nav>

            {/* Right Search & Cart */}
            <div className="flex items-center gap-4 text-white text-xs font-medium">
              <a
                href="#san-pham"
                className="flex items-center gap-1.5 hover:text-[#a8d886] transition-colors"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline uppercase tracking-wider">
                  TÌM KIẾM
                </span>
              </a>
              <button
                type="button"
                onClick={() => setCartCount((c) => c + 1)}
                className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-sm transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-[#a8d886]" />
                <span>
                  {cartCount > 0
                    ? `${(cartCount * 419000).toLocaleString("vi-VN")} ₫`
                    : "0 ₫"}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            {data.hero.eyebrow && (
              <p className="text-xs uppercase tracking-[0.25em] text-[#cde7b5] font-semibold mb-3">
                {data.hero.eyebrow}
              </p>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-white leading-[1.15] tracking-tight whitespace-pre-line">
              {data.hero.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed max-w-lg">
              {data.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={data.hero.ctaLink || "#san-pham"}
                className="px-7 py-3 bg-[#9E7B56] hover:bg-[#876744] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all shadow-md"
              >
                {data.hero.ctaText}
              </a>
              <a
                href={data.hero.secondaryCtaLink || "#lien-he"}
                className="px-7 py-3 bg-[#5C8D3E] hover:bg-[#4b7631] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all shadow-md"
              >
                {data.hero.secondaryCtaText || "LIÊN HỆ NGAY"}
              </a>
            </div>
          </div>

          {/* Right Circular Organic Stamp Badge */}
          <div className="hidden md:flex items-center justify-center lg:mr-8">
            <div className="w-36 h-36 rounded-full bg-white/95 p-2 shadow-2xl flex items-center justify-center relative">
              <div className="w-full h-full rounded-full border-2 border-[#262626] flex flex-col items-center justify-center text-center p-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#262626]">
                  CHÍNH HÃNG 100%
                </span>
                <div className="my-1.5 w-12 h-12 rounded-full border border-[#5C8D3E]/40 bg-[#5C8D3E]/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[#5C8D3E]" />
                </div>
                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#5C8D3E]">
                  THẢO MỘC HỮU CƠ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="relative z-10 pb-6 flex flex-col items-center justify-center text-white/80">
          <div className="flex items-center gap-4 mb-3">
            <button
              type="button"
              aria-label="Slide trước"
              className="p-1.5 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button
              type="button"
              aria-label="Slide tiếp"
              className="p-1.5 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
          <a
            href="#danh-muc"
            className="flex flex-col items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#262626] sm:text-white/90 hover:text-white transition-colors"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
            <span>CUỘN XUỐNG</span>
          </a>
        </div>
      </section>

      {/* SECTION 2: 4 MINIMAL BOTANICAL CATEGORY ICONS */}
      <section id="danh-muc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {data.topCategories.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col items-center text-center group px-2"
              >
                <div className="w-20 h-20 rounded-full border border-dashed border-[#d5cfc4] group-hover:border-[#5C8D3E] flex items-center justify-center mb-5 transition-colors bg-[#faf8f5]">
                  {renderCategoryIcon(cat.icon)}
                </div>
                <h3 className="text-lg font-medium text-[#262626] group-hover:text-[#5C8D3E] transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2.5 text-xs text-[#737373] leading-relaxed max-w-[240px]">
                  {cat.description}
                </p>
                <a
                  href="#san-pham"
                  className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#262626] hover:text-[#5C8D3E] border-b border-transparent hover:border-[#5C8D3E] pb-0.5 transition-all"
                >
                  CHI TIẾT
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ANTI-AGING NATURAL SOLUTION SPLIT BANNER */}
      <section id="gioi-thieu" className="py-16 lg:py-20 bg-[#F5F5F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Organic Bottle Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#F5DEC9]/70 flex items-center justify-center p-6">
                <img
                  src={data.promoBanner.image}
                  alt={data.promoBanner.title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-3 -left-3 bg-white px-4 py-2.5 rounded-sm shadow-md flex items-center gap-2 border border-[#eae5dc]">
                  <Leaf className="w-4 h-4 text-[#5C8D3E]" />
                  <span className="text-xs font-semibold text-[#262626]">
                    100% Tinh Dầu Ép Lạnh
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8c8c8c]">
                {data.promoBanner.eyebrow}
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#262626] leading-snug">
                {data.business.aboutTitle || data.promoBanner.title}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xl">
                {data.business.aboutText?.[0] || data.promoBanner.description}
              </p>

              {/* 2x2 Feature Pills */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.promoBanner.features.map((feat) => (
                  <div key={feat.id} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full border border-[#d6d3cb] bg-white flex items-center justify-center shrink-0">
                      {renderPromoIcon(feat.icon)}
                    </div>
                    <span className="text-sm font-medium text-[#333333]">
                      {feat.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom CTA + Direct Phone & Email */}
              <div className="mt-8 pt-6 border-t border-[#e5e2dc] flex flex-wrap items-center gap-6">
                <a
                  href="#san-pham"
                  className="px-6 py-2.5 bg-[#9E7B56] hover:bg-[#856543] text-white text-[11px] font-bold uppercase tracking-widest rounded-sm transition-colors"
                >
                  {data.promoBanner.ctaText}
                </a>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#9E7B56] text-white flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <span className="block text-[#888888] text-[10px]">
                      Gọi cho chúng tôi
                    </span>
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                      className="font-bold text-[#262626] hover:text-[#5C8D3E]"
                    >
                      (+84) {primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#9E7B56] text-white flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <span className="block text-[#888888] text-[10px]">
                      Email tư vấn
                    </span>
                    <a
                      href={`mailto:${primaryEmail}`}
                      className="font-bold text-[#262626] hover:text-[#5C8D3E]"
                    >
                      {primaryEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SẢN PHẨM NỔI BẬT (12-PRODUCT 4x3 GRID) */}
      <section id="san-pham" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8c8c8c]">
                SẢN PHẨM NỔI BẬT
              </span>
              <h2 className="mt-1.5 text-2xl sm:text-3xl font-normal text-[#262626]">
                Sản Phẩm Tinh Chất Thảo Dược
              </h2>
              <p className="mt-2 text-xs text-[#777777] max-w-md leading-relaxed">
                Cung cấp dưỡng chất tự nhiên giúp da căng mịn, phục hồi và tái
                tạo. Thành phần dịu nhẹ phù hợp cho mọi loại da.
              </p>
            </div>
            <a
              href="#uu-dai"
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#262626] hover:text-[#5C8D3E] border-b border-[#262626] hover:border-[#5C8D3E] pb-0.5 self-start sm:self-auto"
            >
              XEM TẤT CẢ
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.slice(0, 12).map((product) => (
              <div
                key={product.id}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square bg-[#F4F0EA] overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.icon && (
                    <span className="absolute top-3 right-3 bg-[#9E7B56] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5">
                      SALE
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3">
                    <button
                      type="button"
                      onClick={() => setCartCount((c) => c + 1)}
                      className="bg-[#5C8D3E] hover:bg-[#48722e] text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-2 shadow-md transition-colors"
                    >
                      Thêm giỏ hàng
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="bg-white hover:bg-[#262626] text-[#262626] hover:text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-2 shadow-md transition-colors"
                    >
                      Xem nhanh
                    </button>
                  </div>
                </div>

                <h3 className="text-xs font-bold uppercase tracking-wider text-[#262626] group-hover:text-[#5C8D3E] transition-colors">
                  {product.title}
                </h3>
                <span className="text-[11px] text-[#8c8c8c] mt-1">
                  {product.category || "Dược mỹ phẩm thiên nhiên"}
                </span>
                <div className="mt-1.5 flex items-center justify-center gap-2 text-xs">
                  {product.icon && (
                    <span className="text-[#999999] line-through">
                      {product.icon}
                    </span>
                  )}
                  <span className="font-bold text-[#D9534F]">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LỢI ÍCH CỦA SẢN PHẨM (CENTER DROPPER BOTTLE + 8 NUMBERED BENEFITS) */}
      <section
        id="loi-ich"
        className="py-16 lg:py-24 bg-[#FAF9F6] relative overflow-hidden"
      >
        {/* Subtle Watermark Text */}
        <div className="pointer-events-none select-none absolute top-6 left-4 text-[90px] lg:text-[140px] font-serif font-light text-[#ECE6DC]/70 leading-none tracking-widest">
          ORGANIC
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8c8c8c]">
              {data.benefitsSection.eyebrow}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-[#262626] whitespace-pre-line leading-snug">
              {data.benefitsSection.title}
            </h2>
            <p className="mt-3 text-xs text-[#737373] leading-relaxed">
              {data.benefitsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 Items */}
            <div className="lg:col-span-4 space-y-8">
              {data.benefitsSection.leftItems.map((item) => (
                <div
                  key={item.num}
                  className="relative text-left lg:text-right pr-0 lg:pr-4"
                >
                  <span className="pointer-events-none select-none absolute -top-4 right-0 text-5xl font-bold text-[#EFECE6] -z-10">
                    {item.num}
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#262626]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#737373] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Bottle Image */}
            <div className="lg:col-span-4 flex items-center justify-center my-4 lg:my-0">
              <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={data.benefitsSection.centerImage}
                  alt="Tinh chất thảo dược"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 bg-[#262626]/90 backdrop-blur-sm text-white p-3 text-center rounded-sm">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#a8d886]">
                    CÔNG THỨC ĐỘC QUYỀN
                  </span>
                  <span className="block text-sm font-serif mt-0.5">
                    {data.business.name} Herbal Oil
                  </span>
                </div>
              </div>
            </div>

            {/* Right 4 Items */}
            <div className="lg:col-span-4 space-y-8">
              {data.benefitsSection.rightItems.map((item) => (
                <div key={item.num} className="relative text-left pl-0 lg:pl-4">
                  <span className="pointer-events-none select-none absolute -top-4 left-0 text-5xl font-bold text-[#EFECE6] -z-10">
                    {item.num}
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#262626]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#737373] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SẢN PHẨM ĐÃ QUA THỬ NGHIỆM LÂM SÀNG (3 VIDEO CARDS) */}
      <section className="py-16 lg:py-20 bg-[#E6E4DD] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6e6d68]">
              {data.clinicalSection.eyebrow}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-[#262626] whitespace-pre-line leading-snug">
              {data.clinicalSection.title}
            </h2>
            <p className="mt-3 text-xs text-[#595854] leading-relaxed">
              {data.clinicalSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.clinicalSection.videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group relative aspect-[16/10] bg-[#262626] overflow-hidden cursor-pointer shadow-md"
              >
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/80 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <p className="text-xs font-medium line-clamp-1">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ƯU ĐÃI TRONG NGÀY + TABBED MINI PRODUCT LIST */}
      <section id="uu-dai" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Vertical Deal Banner */}
            <div className="lg:col-span-5 relative min-h-[460px] flex flex-col justify-start p-8 sm:p-10 text-center overflow-hidden bg-[#5a4a3a]">
              <img
                src={data.dailyDeal.image}
                alt={data.dailyDeal.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#3d3124]/85 via-[#3d3124]/45 to-black/50" />
              <div className="relative z-10 max-w-sm mx-auto text-white pt-2">
                <h3 className="text-2xl sm:text-3xl font-normal">
                  {data.dailyDeal.title}
                </h3>
                <p className="mt-3 text-xs text-white/85 leading-relaxed">
                  {data.dailyDeal.description}
                </p>
                <a
                  href="#lien-he"
                  className="mt-6 inline-block px-6 py-2.5 bg-[#9E7B56] hover:bg-[#876643] text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
                >
                  {data.dailyDeal.ctaText}
                </a>
              </div>
            </div>

            {/* Right Tabbed 2x4 Horizontal Product List */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Category Tabs */}
              <div className="flex flex-wrap items-center gap-2 border-b border-[#ece9e2] pb-4 mb-6">
                {data.dailyDeal.tabs.map((tab, idx) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveDealTab(idx)}
                    className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                      activeDealTab === idx
                        ? "bg-[#9E7B56] text-white"
                        : "bg-transparent text-[#555555] hover:text-[#262626]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* 2-Column x 4-Row Mini Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dealProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="relative w-20 h-20 bg-[#F4F0EA] shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      {item.icon && (
                        <span className="absolute top-1 right-1 bg-[#9E7B56] text-white text-[8px] font-bold uppercase px-1.5 py-0.5">
                          SALE
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#262626] group-hover:text-[#5C8D3E] transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-0.5 my-1 text-[#F5A623]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-[#F5A623] text-[#F5A623]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        {item.icon && (
                          <span className="text-[#999999] line-through text-[11px]">
                            {item.icon}
                          </span>
                        )}
                        <span className="font-bold text-[#D9534F]">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: UY TÍN HÀNG ĐẦU — THƯƠNG HIỆU NỔI BẬT */}
      <section className="py-14 bg-[#EFECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#888888]">
            UY TÍN HÀNG ĐẦU
          </span>
          <h2 className="mt-1 text-2xl font-normal text-[#262626]">
            Thương hiệu nổi bật
          </h2>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {(data.clients || []).map((brand) => (
              <div
                key={brand.id}
                className="py-4 px-6 flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
              >
                <Leaf className="w-7 h-7 text-[#5C8D3E] mb-1.5" />
                <span className="text-sm font-serif font-bold tracking-widest text-[#2c3e24] uppercase">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: BLOG & NEWS — TIN TỨC MỚI NHẤT */}
      <section id="tin-tuc" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#888888]">
              BLOG & NEWS
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-normal text-[#262626]">
              Tin tức mới nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="relative aspect-[4/3] bg-[#F4F0EA] overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 text-[#262626] text-[10px] font-semibold px-2.5 py-1 shadow-sm">
                    {post.date}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#999999]">
                  {post.category}
                </span>
                <h3 className="mt-1.5 text-lg font-medium text-[#262626] group-hover:text-[#5C8D3E] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-xs text-[#737373] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href="#lien-he"
                  className="mt-4 inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#262626] hover:text-[#5C8D3E] self-start"
                >
                  XEM THÊM
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION / ORDER SECTION */}
      <section id="lien-he" className="py-14 bg-[#F7F5F0] border-t border-[#E8E4DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5C8D3E]">
            ĐẶT LỊCH SOI DA & TƯ VẤN DƯỢC MỸ PHẨM
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-[#262626]">
            Nhận Phác Đồ Chăm Sóc Da Cá Nhân Hóa Từ {data.business.name}
          </h2>
          {bookingSubmitted ? (
            <div className="mt-6 p-6 bg-white border border-[#5C8D3E]/30 rounded-sm inline-flex items-center gap-3 text-sm text-[#2c3e24]">
              <CheckCircle2 className="w-5 h-5 text-[#5C8D3E]" />
              <span>
                Cảm ơn bạn! Chuyên viên da liễu của{" "}
                <strong>{data.business.name}</strong> sẽ liên hệ qua số điện thoại
                trong ít phút.
              </span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setBookingSubmitted(true);
              }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên của bạn *"
                className="px-4 py-3 bg-white border border-[#dcd7cc] text-xs focus:outline-none focus:border-[#5C8D3E]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại liên hệ *"
                className="px-4 py-3 bg-white border border-[#dcd7cc] text-xs focus:outline-none focus:border-[#5C8D3E]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#5C8D3E] hover:bg-[#497330] text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                NHẬN TƯ VẤN NGAY
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 10: 4 GUARANTEES + 6 GALLERY IMAGES + FOOTER */}
      <footer className="bg-[#ECE9E2] text-[#333333] pt-12">
        {/* 4 Guarantees Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.guarantees.map((g) => (
              <div key={g.id} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{renderGuaranteeIcon(g.icon)}</div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#262626]">
                    {g.title}
                  </h4>
                  <p className="mt-1.5 text-[11px] text-[#666666] leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Image Square Gallery Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {data.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-square bg-white overflow-hidden group"
              >
                <img
                  src={imgUrl}
                  alt={`Bộ sưu tập ${data.business.name} ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Main Columns */}
        <div className="border-t border-[#dcd8ce] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Brand */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#5C8D3E] text-white flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-lg font-serif font-bold text-[#262626] leading-none">
                    {data.business.name}
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-[#777777] mt-0.5">
                    COSMETICS SHOP
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#666666] leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>
            </div>

            {/* Col 2: Danh mục */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#262626] mb-4">
                Danh mục
              </h4>
              <ul className="space-y-2 text-xs text-[#666666]">
                <li>
                  <a href="#" className="hover:text-[#5C8D3E]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#5C8D3E]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#5C8D3E]">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#5C8D3E]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#5C8D3E]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Liên kết */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#262626] mb-4">
                Liên kết
              </h4>
              <ul className="space-y-2 text-xs text-[#666666]">
                <li>Điều khoản dịch vụ</li>
                <li>Thông tin giao hàng</li>
                <li>Theo dõi đơn hàng</li>
                <li>Phương thức thanh toán</li>
                <li>Vận chuyển và giao hàng</li>
              </ul>
            </div>

            {/* Col 4: Hỗ trợ khách hàng */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#262626] mb-4">
                Hỗ trợ khách hàng
              </h4>
              <ul className="space-y-2 text-xs text-[#666666]">
                <li>Chính sách quyền riêng tư</li>
                <li>Chính sách vận chuyển</li>
                <li>Chính sách giao hàng</li>
                <li>Chính sách thanh toán</li>
                <li>Chính sách đổi trả</li>
              </ul>
            </div>

            {/* Col 5: Liên hệ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#262626] mb-4">
                Liên hệ
              </h4>
              <ul className="space-y-3 text-xs text-[#666666]">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#5C8D3E] shrink-0 mt-0.5" />
                  <span>Địa chỉ: {data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#5C8D3E] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="font-semibold text-[#262626] hover:text-[#5C8D3E]"
                  >
                    (+84) {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#5C8D3E] shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-[#5C8D3E]"
                  >
                    {primaryEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[#dcd8ce] py-4 text-center text-[11px] text-[#777777]">
          © Bản quyền thuộc về <strong>{data.business.name}</strong> • Cung cấp
          bởi TaviWeb
        </div>
      </footer>

      {/* QUICK VIEW PRODUCT MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white max-w-lg w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#262626]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full aspect-square object-cover bg-[#F4F0EA]"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5C8D3E]">
                  {selectedProduct.category}
                </span>
                <h3 className="mt-1 text-base font-bold text-[#262626]">
                  {selectedProduct.title}
                </h3>
                <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="mt-3 text-base font-bold text-[#D9534F]">
                  {selectedProduct.price}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSelectedProduct(null);
                  }}
                  className="mt-5 w-full py-2.5 bg-[#5C8D3E] hover:bg-[#497330] text-white text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  ĐẶT MUA NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CLINICAL VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#262626]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeVideo.image}
              alt={activeVideo.title}
              className="w-full aspect-video object-cover mb-4"
            />
            <h4 className="text-sm font-bold text-[#262626]">
              {activeVideo.title}
            </h4>
            <p className="mt-2 text-xs text-[#666666]">
              Thời lượng: {activeVideo.duration} • Đã kiểm nghiệm lâm sàng bởi
              đội ngũ chuyên gia {data.business.name}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
