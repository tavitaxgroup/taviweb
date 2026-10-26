"use client";

import React, { useState } from "react";
import {
  Search,
  Phone,
  User,
  ShoppingBag,
  Plus,
  ChevronRight,
  ChevronLeft,
  Zap,
  ThumbsUp,
  Award,
  Truck,
  RefreshCw,
  Send,
  CheckCircle2,
  MapPin,
  Mail,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  quanCafe5DefaultData,
  type QuanCafe5Data,
  type HoneyProductItem
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<QuanCafe5Data>(quanCafe5DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(1);
  const [savedVouchers, setSavedVouchers] = useState<string[]>([]);
  const [activeBranchTab, setActiveBranchTab] = useState<"MonaMedia" | "Mona Software">(
    "MonaMedia"
  );
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0313728397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const handleSaveVoucher = (code: string) => {
    if (!savedVouchers.includes(code)) {
      setSavedVouchers((prev) => [...prev, code]);
    }
  };

  /* Hexagon Bee Emblem Logo matching HONEY THE MONA */
  const renderHexagonLogo = () => (
    <a href="#" className="flex items-center gap-2.5 shrink-0">
      <div className="w-10 h-10 bg-amber-50 border-2 border-[#3d2610] rounded-lg flex items-center justify-center shadow-xs">
        <span className="text-lg">🐝</span>
      </div>
      <div className="leading-none">
        <span className="block text-base sm:text-lg font-black tracking-tight text-[#3d2610] uppercase">
          HONEY
        </span>
        <span className="block text-[9px] font-bold tracking-[0.2em] text-[#d98200] uppercase mt-0.5">
          THE MONA
        </span>
      </div>
    </a>
  );

  /* Section Header with Small Bee Icon & Xem thêm Pill Button */
  const renderSectionHeader = (title: string) => (
    <div className="flex items-end justify-between mb-5">
      <div>
        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
          Sản phẩm <span>🐝</span>
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#d98200] mt-0.5">{title}</h2>
      </div>
      <a
        href="#goi-qua"
        className="inline-flex items-center gap-1.5 bg-[#f5a623] hover:bg-[#d98200] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-xs transition-colors"
      >
        <span>Xem thêm</span>
        <span className="w-4 h-4 rounded-full bg-white/25 flex items-center justify-center">
          <ChevronRight className="w-3 h-3" />
        </span>
      </a>
    </div>
  );

  /* Honey Product Card matching exact CF005 5-column cards */
  const renderHoneyCard = (item: HoneyProductItem) => {
    const isDarkBg = item.variant === "dark";
    return (
      <div
        key={item.id}
        className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-all p-2.5 flex flex-col justify-between group"
      >
        {/* Square Image Box */}
        <div
          className={`relative aspect-square rounded-lg overflow-hidden mb-2.5 flex items-center justify-center ${
            isDarkBg ? "bg-[#0d0d0d]" : "bg-[#fffdf9]"
          }`}
        >
          <img
            src={item.image}
            alt={item.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              isDarkBg ? "brightness-90 contrast-125" : ""
            }`}
          />
        </div>

        {/* Title & Badge */}
        <div>
          <h3 className="text-[11px] font-bold text-slate-800 group-hover:text-[#d98200] transition-colors line-clamp-1">
            {item.name}
          </h3>
          <div className="h-4 mt-0.5">
            {item.badge && (
              <span className="inline-block bg-[#fff3d6] text-[#d98200] text-[8px] font-bold px-1.5 py-0.5 rounded">
                {item.badge}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Price & Plus Button */}
        <div className="flex items-center justify-between pt-2 mt-1 border-t border-slate-50">
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] font-extrabold text-[#d98200]">{item.price}</span>
            {item.oldPrice && (
              <span className="text-[9px] text-slate-400 line-through">{item.oldPrice}</span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setCartCount((c) => c + 1)}
            className="w-5 h-5 rounded-full border border-[#f5a623] text-[#d98200] hover:bg-[#f5a623] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Thêm vào giỏ"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
    );
  };

  /* Marquee Ribbon Divider matching Brown/Green ribbons in CF005 */
  const renderMarqueeDivider = (theme: "brown" | "green") => (
    <div className="relative my-10 overflow-hidden">
      <div
        className={`py-2 px-4 flex items-center justify-between text-[10px] font-bold text-white whitespace-nowrap overflow-hidden ${
          theme === "brown" ? "bg-[#7a491d]" : "bg-[#1b7e3c]"
        }`}
      >
        <div className="flex items-center gap-6">
          {[...Array(10)].map((_, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5">
              <span>{data.business.name}</span>
              <span>🐝</span>
            </span>
          ))}
        </div>
      </div>
      <div className="h-2.5 bg-[#f5a623]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#f5a623] selection:text-white">
      {/* Top Golden Shipping Notice Bar */}
      <div className="bg-[#f5a623] text-white text-[11px] font-semibold py-1.5 text-center px-4">
        Giảm <strong className="font-extrabold">25.000đ</strong> phí ship cho đơn hàng trên{" "}
        <strong className="font-extrabold">600.000đ</strong>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-3 pb-2">
          {/* Top Row: Logo + Search + Hotline/Account/Cart */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {renderHexagonLogo()}

            {/* Rounded Search Input */}
            <div className="flex-1 max-w-md mx-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập từ khóa tìm kiếm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-slate-200 rounded-full pl-4 pr-9 py-1.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#f5a623]"
                />
                <button
                  type="button"
                  className="w-6 h-6 rounded-full bg-[#f5a623] text-white flex items-center justify-center absolute right-1.5 top-1/2 -translate-y-1/2"
                  aria-label="Tìm kiếm"
                >
                  <Search className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Right Actions: Hotline + Account + Cart */}
            <div className="hidden md:flex items-center gap-5 text-[11px]">
              <a
                href={`tel:${primaryPhone}`}
                className="flex items-center gap-2 hover:text-[#d98200]"
              >
                <span className="w-7 h-7 rounded-full bg-amber-50 text-[#f5a623] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <div className="leading-tight">
                  <span className="block text-[9px] text-slate-400">Hotline</span>
                  <strong className="text-[#d98200]">{primaryPhone}</strong>
                </div>
              </a>

              <a href="#tai-khoan" className="flex items-center gap-2 hover:text-[#d98200]">
                <span className="w-7 h-7 rounded-full bg-amber-50 text-[#f5a623] flex items-center justify-center">
                  <User className="w-3.5 h-3.5" />
                </span>
                <div className="leading-tight">
                  <span className="block text-[9px] text-slate-400">Tài khoản</span>
                  <strong className="text-slate-700">Đăng nhập</strong>
                </div>
              </a>

              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCartCount((c) => c + 1)}
              >
                <span className="w-7 h-7 rounded-full bg-emerald-50 text-[#1b7e3c] flex items-center justify-center">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </span>
                <div className="leading-tight text-left">
                  <span className="block text-[9px] text-slate-400">Giỏ hàng</span>
                  <strong className="text-[#1b7e3c]">{cartCount} sản phẩm</strong>
                </div>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-700"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Bottom Row: Horizontal Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 pt-2.5 mt-2 border-t border-slate-100 text-xs font-semibold text-slate-600">
            <a href="#" className="text-[#d98200] font-bold">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#d98200]">
              Giới thiệu
            </a>
            <a href="#mat-ong-nhap-khau" className="hover:text-[#d98200]">
              Sản phẩm
            </a>
            <a href="#goi-qua" className="hover:text-[#d98200]">
              Dịch vụ doanh nghiệp
            </a>
            <a href="#uu-dai" className="hover:text-[#d98200]">
              Tin tức
            </a>
            <a href="#footer" className="hover:text-[#d98200]">
              Chính sách
            </a>
            <a href="#footer" className="hover:text-[#d98200]">
              Hướng dẫn mua hàng
            </a>
            <a href="#footer" className="hover:text-[#d98200]">
              Liên hệ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section: Left Category Sidebar + Right Honey Sale Banner + 5 Voucher Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Left Category Sidebar */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-slate-100 shadow-2xs p-3">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#3d2610] pb-2.5 mb-2 border-b border-slate-100">
              <span className="w-5 h-5 rounded bg-[#f5a623] text-white flex items-center justify-center text-[10px]">
                ⊞
              </span>
              <span>Xem tất cả sản phẩm</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {(data.sidebarCategories || []).map((cat, idx) => (
                <li key={idx}>
                  <a
                    href="#mat-ong-nhap-khau"
                    className="block py-1 px-2 rounded hover:bg-amber-50 hover:text-[#d98200] transition-colors font-medium"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Honey Sale Banner */}
          <div className="lg:col-span-9 relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#fff3c4] via-[#ffe28a] to-[#ffcf52] min-h-[260px] sm:min-h-[300px] flex items-center shadow-sm">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="absolute inset-y-0 left-0 w-1/2 h-full object-cover opacity-90 mix-blend-multiply"
            />
            <div className="relative z-10 ml-auto w-full sm:w-3/5 p-6 sm:p-10 text-center">
              <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1105] leading-none">
                {data.hero.title}
              </h1>
              <div className="inline-block bg-[#f28c00] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 py-1.5 rounded-sm mt-3 shadow-xs">
                {data.hero.subtitle}
              </div>
              <div className="mt-4">
                <a
                  href="#mat-ong-nhap-khau"
                  className="inline-block bg-[#ffd54f] hover:bg-[#ffca28] text-white font-extrabold text-sm uppercase tracking-wider px-8 py-2.5 rounded-lg border-2 border-white shadow-md transition-transform hover:scale-105"
                >
                  {data.hero.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Pastel Voucher Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-4">
          {(data.vouchers || []).map((v) => {
            const isSaved = savedVouchers.includes(v.code);
            return (
              <div
                key={v.id}
                className="rounded-xl p-3 border border-black/5 flex flex-col justify-between gap-2 shadow-2xs"
                style={{ backgroundColor: v.bgColor }}
              >
                <div>
                  <span
                    className="text-xs font-extrabold block"
                    style={{ color: v.textColor }}
                  >
                    {v.code}
                  </span>
                  <span className="text-[10px] text-slate-500">{v.condition}</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-dashed border-black/10">
                  <span className="text-[9px] font-bold text-slate-600">{v.code}</span>
                  <button
                    type="button"
                    onClick={() => handleSaveVoucher(v.code)}
                    className="text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full cursor-pointer"
                    style={{ backgroundColor: v.btnColor }}
                  >
                    {isSaved ? "Đã lưu" : "Lưu lại"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 1: Mật ong nhập khẩu (5x2 Grid) */}
      <section id="mat-ong-nhap-khau" className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {renderSectionHeader("Mật ong nhập khẩu")}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {(data.importedHoney || []).map((item) => renderHoneyCard(item))}
        </div>
      </section>

      {/* Section 2: Wavy Golden-Amber Flash Sale Banner — Giá tốt mỗi ngày */}
      <section className="relative bg-[#f7a81b] py-12 my-6 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header + Green Countdown Boxes */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-semibold text-white/90 flex items-center gap-1">
                Sản phẩm khuyến mãi <span>🐝</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                Giá tốt mỗi ngày
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-white fill-current" />
              {["0", "8", "4", "5"].map((digit, idx) => (
                <span
                  key={idx}
                  className="w-7 h-8 rounded-md bg-[#1b7e3c] text-white font-extrabold text-xs flex items-center justify-center border border-white/40 shadow-xs"
                >
                  {digit}
                </span>
              ))}
            </div>
          </div>

          {/* 5-Card Row with Left/Right Arrows */}
          <div className="relative">
            <button
              type="button"
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/30 hover:bg-white/50 text-white items-center justify-center"
              aria-label="Trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {(data.dailyDeals || []).map((item) => renderHoneyCard(item))}
            </div>
            <button
              type="button"
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/30 hover:bg-white/50 text-white items-center justify-center"
              aria-label="Tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Phấn hoa (5x2 Grid) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {renderSectionHeader("Phấn hoa")}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {(data.pollenProducts || []).map((item) => renderHoneyCard(item))}
        </div>
      </section>

      {/* Section 4: Sáp ong (5x2 Grid) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {renderSectionHeader("Sáp ong")}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {(data.beeswaxProducts || []).map((item) => renderHoneyCard(item))}
        </div>
      </section>

      {/* Brown & Gold Marquee Divider */}
      {renderMarqueeDivider("brown")}

      {/* Section 5: Sữa ong chúa (5x2 Grid) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {renderSectionHeader("Sữa ong chúa")}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {(data.royalJellyProducts || []).map((item) => renderHoneyCard(item))}
        </div>
      </section>

      {/* Section 6: Tinh bột nghệ (5x2 Grid) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {renderSectionHeader("Tinh bột nghệ")}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {(data.turmericProducts || []).map((item) => renderHoneyCard(item))}
        </div>
      </section>

      {/* Green & Gold Marquee Divider */}
      {renderMarqueeDivider("green")}

      {/* Section 7: Gói Quà (12 Cards Grid) */}
      <section id="goi-qua" className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {renderSectionHeader("Gói Quà")}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {(data.giftPacks || []).map((item) => renderHoneyCard(item))}
        </div>
      </section>

      {/* Section 8: Rounded Golden Floral Banner "Hello!! Mona Honey." */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="rounded-2xl bg-gradient-to-r from-[#ffca28] via-[#ffd54f] to-[#ffb300] py-10 px-6 text-center shadow-sm relative overflow-hidden">
          <p className="font-serif italic text-xl sm:text-2xl text-[#5d4037]">Hello!!</p>
          <h3 className="font-serif italic text-4xl sm:text-5xl font-bold text-[#3d2610] mt-1">
            {data.business.name}.
          </h3>
        </div>
      </section>

      {/* Section 9: ƯU ĐÃI GIẢM GIÁ ĐẾN 50% - TÀI KHOẢN MỚI + 4 Trust Icons + Courier */}
      <section id="uu-dai" className="relative bg-gradient-to-r from-white via-[#fff9eb] to-[#f7a81b] pt-12 pb-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Offer & 4 Trust Badges */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase">
                <span className="text-[#d98200]">ƯU ĐÃI</span>
                <span className="bg-[#fff3d6] text-[#3d2610] px-2.5 py-1 rounded-full">
                  GIẢM GIÁ <strong className="text-[#d98200]">ĐẾN 50%</strong>
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#1f2937] uppercase tracking-tight">
                TÀI KHOẢN MỚI
              </h2>

              <div>
                <a
                  href="#footer"
                  className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d98200] text-white text-xs font-bold px-5 py-2 rounded-full shadow-xs"
                >
                  <span>Đăng ký ngay</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 4 Trust Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {[
                  { icon: ThumbsUp, label: "Chất lượng hảo hạng", color: "text-sky-500 bg-sky-50" },
                  { icon: Award, label: "Đảm bảo xuất xứ", color: "text-amber-500 bg-amber-50" },
                  { icon: Truck, label: "Giao hàng siêu tốc", color: "text-rose-500 bg-rose-50" },
                  { icon: RefreshCw, label: "Đổi trả dễ dàng", color: "text-orange-500 bg-orange-50" }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-1.5 shadow-2xs ${item.color}`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Delivery Courier & Floating Pills */}
            <div className="md:col-span-5 relative flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80"
                alt="Giao hàng mật ong"
                className="w-60 h-60 object-cover rounded-2xl shadow-lg border-4 border-white"
              />
              <span className="absolute -top-2 right-2 bg-white text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md">
                🎁 Khách hàng tin tưởng
              </span>
              <span className="absolute top-1/2 -left-2 bg-white text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md">
                🐝 Đa dạng sản phẩm
              </span>
              <span className="absolute -bottom-2 right-4 bg-white text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md">
                🏷️ Vô vàn ưu đãi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — Warm Cream #fbf3de */}
      <footer id="footer" className="bg-[#fbf3de] text-slate-700 border-t border-amber-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          {/* Top Row: Logo + Newsletter Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-amber-200/60">
            {renderHexagonLogo()}

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <span className="text-sm font-extrabold text-[#d98200]">Đăng ký nhận tin</span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterDone(true);
                  setNewsletterEmail("");
                }}
                className="flex-1 sm:w-72 relative"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập email của bạn"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white rounded-full pl-4 pr-10 py-2 text-xs text-slate-700 placeholder-slate-400 shadow-2xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-7 h-7 rounded-full bg-[#fff3d6] text-[#d98200] flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer"
                  aria-label="Gửi"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {newsletterDone && (
                <span className="text-[11px] text-emerald-700 font-bold">Đã đăng ký!</span>
              )}
            </div>
          </div>

          {/* 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pt-8 text-xs">
            {/* Col 1: Về Mona Honey */}
            <div className="lg:col-span-4 space-y-3 text-[11px] leading-relaxed text-slate-600">
              <h4 className="text-xs font-extrabold text-[#3d2610]">
                Về {data.business.name}
              </h4>
              <p>{data.business.aboutText?.[0]}</p>
              <h5 className="text-xs font-extrabold text-[#3d2610] pt-1">
                Bản quyền của Công ty TNHH {data.business.name}
              </h5>
              <p>{data.business.aboutText?.[1]}</p>

              <div className="inline-flex items-center gap-2 bg-[#0072bc] text-white px-3 py-1.5 rounded shadow-2xs mt-1">
                <CheckCircle2 className="w-5 h-5" />
                <div className="leading-none text-[9px] font-black uppercase">
                  <span>ĐÃ THÔNG BÁO</span>
                  <span className="block text-[8px] font-normal">BỘ CÔNG THƯƠNG</span>
                </div>
              </div>
            </div>

            {/* Col 2: Thông tin liên hệ */}
            <div className="lg:col-span-4 space-y-2.5 text-[11px]">
              <h4 className="text-xs font-extrabold text-[#3d2610]">Thông tin liên hệ</h4>
              <p className="text-[#d98200] font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Hệ thống chi nhánh cửa hàng</span>
              </p>

              {/* Branch Switcher Pills */}
              <div className="flex items-center gap-2">
                {(["MonaMedia", "Mona Software"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveBranchTab(tab)}
                    className={`px-2.5 py-1 rounded text-[10px] font-bold cursor-pointer ${
                      activeBranchTab === tab
                        ? "bg-[#f5a623] text-white"
                        : "bg-white text-slate-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <p className="text-slate-600">{data.business.address}</p>

              <div className="pt-1">
                <p className="text-[#d98200] font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Điện thoại</span>
                </p>
                <a href={`tel:${primaryPhone}`} className="font-semibold text-slate-700">
                  {primaryPhone}
                </a>
              </div>

              <div className="pt-1">
                <p className="text-[#d98200] font-bold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </p>
                <span>{primaryEmail}</span>
              </div>
            </div>

            {/* Col 3: Liên kết nhanh */}
            <div className="lg:col-span-2 space-y-2 text-[11px]">
              <h4 className="text-xs font-extrabold text-[#3d2610]">Liên kết nhanh</h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <a href="#" className="text-[#d98200] font-semibold">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#mat-ong-nhap-khau" className="hover:text-[#d98200]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#goi-qua" className="hover:text-[#d98200]">
                    Dịch vụ doanh nghiệp
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Chính sách */}
            <div className="lg:col-span-2 space-y-2 text-[11px]">
              <h4 className="text-xs font-extrabold text-[#3d2610]">Chính sách</h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>Chính sách bảo hành</li>
                <li>Câu chuyện thương hiệu</li>
                <li>Chính sách thanh toán</li>
                <li>Chính sách giao hàng</li>
                <li>Hướng dẫn mua hàng Online</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#f5a623] text-white py-2.5 text-center text-[11px] font-medium">
          © Thiết kế và lập trình bởi{" "}
          <strong className="font-extrabold">{data.business.name}</strong>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
