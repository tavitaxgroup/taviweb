"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBasket,
  ChevronDown,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Send,
  Menu,
  X,
  CheckCircle2,
  ArrowUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto6DefaultData,
  type GarageOto6Data,
  type GarageOto6Product
} from "@/template-sources/garage_oto_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: GarageOto6Data = adaptClonedTemplateData(
    garageOto6DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [selectedProduct, setSelectedProduct] =
    useState<GarageOto6Product | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@hungvyauto.vn";
  const allProducts = data.products || garageOto6DefaultData.products || [];
  const screenProducts = allProducts.filter((p) => p.category === "screen");
  const cam360Products = allProducts.filter((p) => p.category === "cam360");
  const dashcamProducts = allProducts.filter((p) => p.category === "dashcam");
  const rearProducts = allProducts.filter((p) => p.category === "rear");
  const bigSaleBanners =
    data.bigSaleBanners || garageOto6DefaultData.bigSaleBanners || [];
  const newsList = data.news || garageOto6DefaultData.news || [];

  const handleAddToCart = (prd: GarageOto6Product) => {
    setCartTotal((prev) => prev + (prd.numericPrice || 1500000));
    setSelectedProduct(prd);
  };

  const renderRibbonHeading = (title: string, linkHref: string) => (
    <div className="text-center mb-10">
      <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
        <div className="flex-1 border-t border-b border-slate-300 h-1" />
        <div className="relative border border-slate-800 bg-white px-6 py-2 flex items-center gap-2.5 shadow-sm">
          <Star className="w-3 h-3 fill-slate-900 text-slate-900" />
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            {title}
          </h2>
          <Star className="w-3 h-3 fill-slate-900 text-slate-900" />
        </div>
        <div className="flex-1 border-t border-b border-slate-300 h-1" />
      </div>
      <a
        href={linkHref}
        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e13a3e] hover:underline mt-2"
      >
        <span>Xem thêm</span>
        <span className="text-[9px]">▶</span>
      </a>
    </div>
  );

  const renderProductCard = (prd: GarageOto6Product) => (
    <div
      key={prd.id}
      className="bg-white rounded-lg p-4 text-center flex flex-col justify-between group hover:shadow-lg transition-all border border-transparent hover:border-slate-100 relative"
    >
      {prd.discountBadge && (
        <span className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-[#e13a3e] text-white text-[10px] font-extrabold flex items-center justify-center shadow">
          {prd.discountBadge}
        </span>
      )}

      {prd.warrantyTag && (
        <span className="absolute top-2.5 right-2.5 z-10 bg-slate-100 border border-slate-300 text-slate-700 text-[9px] font-bold px-2 py-0.5 rounded">
          {prd.warrantyTag}
        </span>
      )}

      <div>
        {prd.modelTag && (
          <div className="text-[10px] font-extrabold text-slate-800 mb-1.5">
            {prd.modelTag}
          </div>
        )}
        <div className="aspect-[4/3] overflow-hidden rounded bg-slate-50 mb-3 flex items-center justify-center p-2">
          <img
            src={prd.image}
            alt={prd.name}
            className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {prd.specsNote && (
          <div className="text-[9px] text-slate-400 font-medium mb-2 line-clamp-1">
            {prd.specsNote}
          </div>
        )}

        <h3 className="text-xs font-medium text-slate-600 line-clamp-1 mb-1.5 group-hover:text-slate-900">
          {prd.name}
        </h3>
      </div>

      <div>
        <div className="flex items-center justify-center gap-1.5 mb-3">
          {prd.oldPrice && (
            <span className="text-[11px] text-slate-400 line-through">
              {prd.oldPrice}
            </span>
          )}
          <span className="text-xs font-extrabold text-[#e13a3e]">
            {prd.price}
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleAddToCart(prd)}
          className="bg-[#1b2135] hover:bg-[#e13a3e] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 transition-colors"
        >
          THÊM VÀO GIỎ
        </button>
      </div>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#e13a3e] selection:text-white"
    >
      {/* 1. MIDNIGHT NAVY HEADER WITH RED BOTTOM ACCENT LINE (Matches OTO006) */}
      <header className="sticky top-0 z-40 bg-[#1b2135] text-white border-b-2 border-[#e13a3e] shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-1.5 shrink-0">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white leading-none">
              M
            </span>
            <div className="leading-none">
              <div className="text-xs sm:text-sm font-black uppercase tracking-wider">
                <span className="text-[#e13a3e]">
                  {data.business.name.split(" ")[0] || "HÙNG VỸ"}
                </span>{" "}
                – CAR
              </div>
              <div className="text-[11px] font-extrabold tracking-widest text-white uppercase">
                ACCESSORY
              </div>
            </div>
          </a>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-white/90">
            <a
              href="#screen-section"
              aria-label="Tìm kiếm"
              className="hover:text-[#e13a3e]"
            >
              <Search className="w-3.5 h-3.5" />
            </a>
            <a href="#top" className="text-[#e13a3e]">
              TRANG CHỦ
            </a>
            <a href="#big-sale" className="hover:text-[#e13a3e] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#screen-section"
              className="flex items-center gap-1 hover:text-[#e13a3e] transition-colors"
            >
              <span>CỬA HÀNG</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#news" className="hover:text-[#e13a3e] transition-colors">
              TIN TỨC
            </a>
            <a href="#footer" className="hover:text-[#e13a3e] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Auth & Cart */}
          <div className="hidden sm:flex items-center gap-3 text-[11px] font-bold uppercase">
            <button
              type="button"
              onClick={() => setSelectedProduct(screenProducts[0])}
              className="text-white/85 hover:text-white border-r border-white/20 pr-3"
            >
              ĐĂNG NHẬP
            </button>
            <button
              type="button"
              onClick={() => setSelectedProduct(screenProducts[0])}
              className="flex items-center gap-1.5 text-white hover:text-[#e13a3e] transition-colors"
            >
              <span>
                GIỎ HÀNG / {cartTotal.toLocaleString("vi-VN")} ₫
              </span>
              <ShoppingBasket className="w-4 h-4 text-white" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#131829] border-t border-white/10 px-6 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#e13a3e]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#screen-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              MÀN HÌNH XE HƠI
            </a>
            <a
              href="#cam360-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              CAMERA 360 ĐỘ
            </a>
            <a
              href="#dashcam-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              CAMERA HÀNH TRÌNH
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              TIN TỨC – SỰ KIỆN
            </a>
          </div>
        )}
      </header>

      {/* 2. DARK SUPERCAR + ALLOY RIMS HERO BANNER */}
      <section className="relative bg-[#0b0d14] text-white min-h-[420px] sm:min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url('${data.hero.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-red-950/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6 space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">
              {data.business.name}
            </h1>
            <div className="text-xl sm:text-2xl font-light text-white/95">
              {data.hero.subtitle || "Car Accessory"}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              {data.hero.description}
            </p>
            <div className="pt-3">
              <a
                href={data.hero.ctaLink || "#screen-section"}
                className="inline-flex items-center gap-2 bg-[#e13a3e] hover:bg-[#c82d31] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded shadow-lg transition-transform hover:scale-105"
              >
                <span>{data.hero.ctaText || "MUA NGAY"}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Dual Sport Alloy Rims Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative flex items-center justify-center">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full border-8 border-slate-700/80 shadow-2xl overflow-hidden bg-black">
                <img
                  src={data.heroWheelImage}
                  alt="Mâm độ thể thao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-8 border-slate-800 shadow-2xl overflow-hidden bg-black -ml-14 mt-12">
                <img
                  src={data.hero.backgroundImage}
                  alt="Phụ kiện xe hơi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MÀN HÌNH XE HƠI */}
      <section id="screen-section" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {renderRibbonHeading("MÀN HÌNH XE HƠI", "#cam360-section")}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* 4. CAMERA 360 */}
      <section id="cam360-section" className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {renderRibbonHeading("CAMERA 360", "#dashcam-section")}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cam360Products.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* 5. TWO SIDE-BY-SIDE BIG SALE BANNERS */}
      <section id="big-sale" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {bigSaleBanners.map((banner) => {
            const isPurple = banner.theme === "purple";
            return (
              <div
                key={banner.id}
                className="relative h-64 sm:h-72 overflow-hidden flex items-center justify-center text-center p-6 text-white group shadow-md"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 ${
                    isPurple
                      ? "bg-gradient-to-tr from-[#2e0938]/85 via-[#18122b]/75 to-[#4a0e4e]/75"
                      : "bg-gradient-to-tr from-[#2b0f0e]/85 via-[#1a1414]/75 to-[#5c1614]/75"
                  }`}
                />
                <div className="relative z-10 max-w-sm">
                  <div className="text-sm font-bold uppercase tracking-widest text-white/90 mb-1">
                    {banner.eyebrow}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-2">
                    {banner.title}
                  </h3>
                  <p className="text-xs font-semibold text-white/85 mb-5">
                    {banner.subtitle}
                  </p>
                  <a
                    href="#dashcam-section"
                    className="inline-flex items-center gap-1.5 bg-[#e13a3e] hover:bg-[#c82d31] text-white text-xs font-bold px-5 py-2 rounded-full transition-colors shadow"
                  >
                    <span>{banner.buttonText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CAMERA HÀNH TRÌNH */}
      <section id="dashcam-section" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {renderRibbonHeading("CAMERA HÀNH TRÌNH", "#rear-section")}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashcamProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* 7. CAMERA LÙI */}
      <section id="rear-section" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {renderRibbonHeading("CAMERA LÙI", "#news")}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rearProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* 8. TIN TỨC – SỰ KIỆN (3 Rounded Supercar Blog Cards) */}
      <section id="news" className="py-14 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-4">
          {renderRibbonHeading("TIN TỨC – SỰ KIỆN", "#footer")}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-2 mb-2 group-hover:text-[#e13a3e] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <a
                    href="#footer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-700 hover:text-[#e13a3e]"
                  >
                    <span>Xem Thêm</span>
                    <span className="text-[#e13a3e]">▸</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DARK WORLD-MAP 4-COLUMN FOOTER */}
      <footer id="footer" className="bg-[#0e111a] text-slate-300">
        <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-3xl font-black tracking-tighter text-white leading-none">
                M
              </span>
              <div className="leading-none">
                <div className="text-xs font-black uppercase tracking-wider">
                  <span className="text-[#e13a3e]">
                    {data.business.name.split(" ")[0] || "HÙNG VỸ"}
                  </span>{" "}
                  – CAR
                </div>
                <div className="text-[11px] font-extrabold tracking-widest text-white uppercase">
                  ACCESSORY
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-[11px] text-slate-400">
              <MapPin className="w-4 h-4 text-[#e13a3e] shrink-0 mt-0.5" />
              <span>{data.business.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-[11px] text-slate-400">
              <Phone className="w-4 h-4 text-[#e13a3e] shrink-0" />
              <span>{primaryPhone}</span>
            </div>
            <div className="flex items-center gap-2.5 text-[11px] text-slate-400">
              <Mail className="w-4 h-4 text-[#e13a3e] shrink-0" />
              <span>{primaryEmail}</span>
            </div>
          </div>

          {/* Col 2: MENU */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase text-white pb-2 mb-3 border-b border-white/15">
              MENU
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>
                <a href="#top" className="text-[#e13a3e] font-semibold">
                  ▸ Trang chủ
                </a>
              </li>
              <li>
                <a href="#big-sale" className="hover:text-white">
                  ▸ Giới thiệu
                </a>
              </li>
              <li>
                <a href="#screen-section" className="hover:text-white">
                  ▸ Cửa hàng
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white">
                  ▸ Tin tức
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white">
                  ▸ Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: DANH MỤC */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase text-white pb-2 mb-3 border-b border-white/15">
              DANH MỤC
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>
                <a href="#cam360-section" className="hover:text-white">
                  ▸ Camera 360
                </a>
              </li>
              <li>
                <a href="#dashcam-section" className="hover:text-white">
                  ▸ Camera hành trình
                </a>
              </li>
              <li>
                <a href="#rear-section" className="hover:text-white">
                  ▸ Camera lùi
                </a>
              </li>
              <li>
                <a href="#screen-section" className="hover:text-white">
                  ▸ Màn hình xe hơi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: ĐĂNG KÝ */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase text-white pb-2 mb-3 border-b border-white/15">
              ĐĂNG KÝ
            </h4>
            <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
              Đăng ký để nhận được được thông tin bảng giá phụ kiện & ưu đãi mới nhất từ chúng tôi.
            </p>

            {newsletterSent ? (
              <div className="text-[11px] text-emerald-400 font-semibold mb-3">
                Đã đăng ký nhận thông tin thành công!
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSent(true);
                  setNewsletterEmail("");
                }}
                className="flex bg-white rounded overflow-hidden mb-4"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email..."
                  className="flex-1 px-3 py-2 text-xs text-slate-900 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Gửi"
                  className="px-3 text-[#e13a3e] hover:bg-slate-100"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-3 text-slate-400">
              <a href="#top" className="hover:text-white font-bold">
                f
              </a>
              <a href="#top" className="hover:text-white font-bold">
                ig
              </a>
              <a href="#top" className="hover:text-white font-bold">
                tw
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#080a10] py-3.5 text-center text-[11px] text-slate-500">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
        </div>
      </footer>

      {/* QUICK INSTALLATION / ORDER MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSent ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#e13a3e] mx-auto mb-3" />
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  Đặt lịch lắp đặt thành công!
                </h3>
                <p className="text-xs text-slate-500">
                  Kỹ thuật viên trưởng của {data.business.name} sẽ liên hệ xác nhận dòng xe và lịch lắp đặt cho quý khách.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOrderSent(true);
                  setTimeout(() => {
                    setOrderSent(false);
                    setSelectedProduct(null);
                  }, 2200);
                }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-16 h-16 rounded object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900">
                      {selectedProduct.name}
                    </h3>
                    <div className="text-sm font-black text-[#e13a3e] mt-0.5">
                      {selectedProduct.price}
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên chủ xe"
                  className="w-full border border-slate-200 rounded px-3.5 py-2 text-xs focus:outline-none focus:border-[#e13a3e]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ"
                  className="w-full border border-slate-200 rounded px-3.5 py-2 text-xs focus:outline-none focus:border-[#e13a3e]"
                />
                <input
                  type="text"
                  required
                  placeholder="Dòng xe & Đời xe (VD: Mazda 3 2023, Santafe 2022...)"
                  className="w-full border border-slate-200 rounded px-3.5 py-2 text-xs focus:outline-none focus:border-[#e13a3e]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1b2135] hover:bg-[#e13a3e] text-white text-xs font-bold uppercase tracking-wider py-3 rounded transition-colors"
                >
                  XÁC NHẬN ĐẶT HÀNG & LẮP ĐẶT
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
