"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Truck,
  Gift,
  Award,
  Headphones,
  Play,
  Footprints,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym12DefaultData,
  type Gym12Data,
  type Gym12ShoeProduct
} from "@/template-sources/phong_gym_12/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function UnderlineHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-8">
      <h2 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-wide text-[#111111] pb-2 inline-block border-b border-gray-300">
        {title}
      </h2>
    </div>
  );
}

function ShoeProductCard({
  product,
  onAdd
}: {
  product: Gym12ShoeProduct;
  onAdd: (name: string) => void;
}) {
  const [selectedColor, setSelectedColor] = useState(
    product.swatches?.[0] || "#111111"
  );

  return (
    <div
      onClick={() => onAdd(product.name)}
      className="bg-white border border-gray-200 hover:border-[#d62828] p-3 text-center transition-all hover:shadow-md cursor-pointer group flex flex-col justify-between"
    >
      <div>
        <div className="relative h-36 sm:h-40 overflow-hidden mb-3 bg-white flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.discountBadge && (
            <span className="absolute top-1.5 left-1.5 w-8 h-8 rounded-full bg-[#111111] text-white text-[10px] font-bold flex items-center justify-center shadow">
              {product.discountBadge}
            </span>
          )}
        </div>

        <h3 className="text-[11px] text-gray-600 group-hover:text-[#d62828] transition-colors line-clamp-1 mb-1">
          {product.name}
        </h3>

        <div className="text-[11px] mb-2.5 space-x-1">
          {product.oldPrice && (
            <span className="line-through text-gray-400 text-[10px]">
              {product.oldPrice}
            </span>
          )}
          <span className="font-extrabold text-[#111111]">{product.price}</span>
        </div>
      </div>

      {/* Color Swatch Dots */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-center gap-1.5 pt-1"
      >
        {(product.swatches || ["#111111"]).map((hex, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedColor(hex)}
            aria-label={`Màu ${hex}`}
            className={`w-3 h-3 rounded-full cursor-pointer transition-transform ${
              selectedColor === hex
                ? "ring-1 ring-offset-1 ring-gray-500 scale-110"
                : ""
            }`}
            style={{ backgroundColor: hex }}
          />
        ))}
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Gym12Data = adaptClonedTemplateData(
    phongGym12DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedShoe, setLastAddedShoe] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "cskh@dualeosport.vn";

  const handleAddToCart = (shoeName: string) => {
    setCartCount((c) => c + 1);
    setLastAddedShoe(shoeName);
    setTimeout(() => {
      setLastAddedShoe(null);
    }, 2600);
  };

  const navItems = [
    { label: "Trang chủ", href: "#trang-chu", active: true },
    { label: "Giới thiệu", href: "#sieu-khuyen-mai", active: false },
    { label: "Cửa hàng", href: "#san-pham-moi", active: false },
    { label: "Tin tức", href: "#tin-tuc", active: false },
    { label: "Liên hệ", href: "#lien-he", active: false },
    { label: "Chỉ đường", href: "#lien-he", active: false }
  ];

  const trustIcons = [Truck, Gift, Award, Headphones];

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#d62828] selection:text-white">
      {/* Floating Cart Toast */}
      {lastAddedShoe && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#222222] text-white px-4 py-3 shadow-xl border-l-4 border-[#d62828] flex items-center gap-2.5 text-xs">
          <CheckCircle2 className="w-4 h-4 text-[#d62828] shrink-0" />
          <span>
            Đã thêm <strong>{lastAddedShoe}</strong> vào giỏ hàng ({cartCount})
          </span>
        </div>
      )}

      {/* 1. TOP MICRO BAR + ICON-ABOVE-TEXT WHITE NAVBAR */}
      <div className="bg-[#f8f8f8] border-b border-gray-200 py-1 text-[10px] text-gray-500">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span>HOME: {data.business.address}</span>
          <a href="#lien-he" className="hover:text-[#d62828]">
            Đăng nhập
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Tall Red Condensed Logo */}
          <a href="#trang-chu" className="flex items-center gap-2 shrink-0">
            <Footprints className="w-7 h-7 text-[#d62828] -rotate-12" />
            <span className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#d62828]">
              {data.heroTitleBrand || data.business.name.split(" ")[0]}
            </span>
          </a>

          {/* Center Nav with Icon Above Each Item */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-1 text-[11px] font-medium transition-colors ${
                  item.active
                    ? "text-[#d62828]"
                    : "text-gray-600 hover:text-[#d62828]"
                }`}
              >
                <Footprints className="w-4 h-4 opacity-75" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Search + Cart */}
          <div className="hidden sm:flex items-center border-l border-gray-200 h-full">
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="px-5 h-full border-r border-gray-200 text-gray-600 hover:text-[#d62828] flex items-center justify-center cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="pl-5 h-full flex items-center gap-2 text-xs text-gray-700 hover:text-[#d62828] cursor-pointer"
            >
              <span>Giỏ hàng</span>
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#111111]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#d62828] text-white text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#d62828]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2 text-xs font-semibold">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1 ${
                  item.active ? "text-[#d62828]" : "text-gray-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. STUDIO GRAY SHOE HERO */}
      <section id="trang-chu" className="bg-[#ebebeb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left 6 Cols: Hero Shoe Image */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-full max-w-md h-64 sm:h-80 overflow-hidden rounded-lg shadow-sm">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right 6 Cols: Title + Subtitle + Red Underlined CTA */}
          <div className="md:col-span-6 text-center">
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-wide uppercase mb-2">
              <span className="text-[#111111]">
                {data.heroTitleBrand || "DUALEO"}{" "}
              </span>
              <span className="text-[#d62828]">
                {data.heroTitleAccent || "SPORT"}
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mb-5">
              {data.hero.subtitle}
            </p>
            <a
              href={data.hero.ctaLink || "#sieu-khuyen-mai"}
              className="inline-block text-xs font-bold text-[#d62828] border-b border-[#d62828] pb-0.5 hover:opacity-80"
            >
              {data.hero.ctaText || "Xem ngay"}
            </a>
          </div>
        </div>
      </section>

      {/* 3. 4-COLUMN TRUST & POLICY STRIP */}
      <section className="border-b border-gray-200 py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(data.trustItems || phongGym12DefaultData.trustItems).map((tr, idx) => {
            const IconComp = trustIcons[idx % trustIcons.length];
            return (
              <div key={tr.id} className="flex items-center gap-3.5">
                <IconComp className="w-7 h-7 text-gray-700 shrink-0 stroke-[1.5]" />
                <div>
                  <h3 className="text-xs font-bold text-[#111111]">{tr.title}</h3>
                  <p className="text-[11px] text-gray-500">{tr.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SIÊU KHUYẾN MÃI (COUNTDOWN + 5-COL PRODUCT ROW) */}
      <section id="sieu-khuyen-mai" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <UnderlineHeading title="SIÊU KHUYẾN MÃI" />

          {/* 4 Red Circular Countdown Badges */}
          <div className="flex items-center justify-center gap-2.5 mb-8">
            {[
              { val: data.countdown?.days || "5", unit: "Ngày" },
              { val: data.countdown?.hours || "8", unit: "Giờ" },
              { val: data.countdown?.minutes || "56", unit: "Phút" },
              { val: data.countdown?.seconds || "9", unit: "Giây" }
            ].map((cd, idx) => (
              <div
                key={idx}
                className="w-9 h-9 rounded-full bg-[#d62828] text-white flex flex-col items-center justify-center leading-none shadow"
              >
                <span className="text-[11px] font-extrabold">{cd.val}</span>
                <span className="text-[7px] uppercase opacity-90">{cd.unit}</span>
              </div>
            ))}
          </div>

          {/* 5-Column Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {(
              data.flashSaleProducts || phongGym12DefaultData.flashSaleProducts
            ).map((prod) => (
              <ShoeProductCard
                key={prod.id}
                product={prod}
                onAdd={handleAddToCart}
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href="#san-pham-moi"
              className="inline-block bg-[#d62828] hover:bg-[#b81f1f] text-white text-xs font-semibold px-6 py-2 rounded-xs transition-colors"
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </section>

      {/* 5. TOP 10 SẢN PHẨM HOT TUẦN NÀY + 2 SPLIT PROMO BANNERS */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <UnderlineHeading title="TOP 10 SẢN PHẨM HOT TUẦN NÀY" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {(data.topWeekProducts || phongGym12DefaultData.topWeekProducts).map(
              (prod) => (
                <ShoeProductCard
                  key={prod.id}
                  product={prod}
                  onAdd={handleAddToCart}
                />
              )
            )}
          </div>

          <div className="text-center mb-10">
            <a
              href="#san-pham-moi"
              className="inline-block bg-[#d62828] hover:bg-[#b81f1f] text-white text-xs font-semibold px-6 py-2 rounded-xs transition-colors"
            >
              Xem tất cả
            </a>
          </div>

          {/* 2 Split Gray Promo Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.dualBanners || phongGym12DefaultData.dualBanners).map((bn) => (
              <div
                key={bn.id}
                className="bg-[#f2f2f2] p-6 grid grid-cols-12 gap-4 items-center"
              >
                <div className="col-span-6">
                  <h3 className="font-serif text-lg sm:text-xl text-[#222222] uppercase mb-1">
                    {bn.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-snug mb-3">
                    {bn.subtitle}
                  </p>
                  <a
                    href="#san-pham-moi"
                    className="text-[11px] font-bold text-[#d62828] border-b border-[#d62828] pb-0.5"
                  >
                    {bn.ctaText}
                  </a>
                </div>
                <div className="col-span-6 h-36 overflow-hidden">
                  <img
                    src={bn.image}
                    alt={bn.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NHỮNG SẢN PHẨM MỚI NHẤT (5x3 = 15 CARDS GRID) */}
      <section id="san-pham-moi" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <UnderlineHeading title="NHỮNG SẢN PHẨM MỚI NHẤT" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {(data.newestProducts || phongGym12DefaultData.newestProducts).map(
              (prod) => (
                <ShoeProductCard
                  key={prod.id}
                  product={prod}
                  onAdd={handleAddToCart}
                />
              )
            )}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => handleAddToCart("Bộ sưu tập Giày Chạy Bộ Dualeo")}
              className="bg-[#d62828] hover:bg-[#b81f1f] text-white text-xs font-semibold px-6 py-2 rounded-xs transition-colors cursor-pointer"
            >
              Xem tất cả
            </button>
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH VIDEO BANNER */}
      <section
        onClick={() => setVideoModalOpen(true)}
        className="relative h-72 sm:h-80 bg-cover bg-center flex items-center justify-center text-center cursor-pointer group my-6"
        style={{
          backgroundImage: `url('${data.videoBannerImage}')`
        }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
        <div className="relative z-10 px-4">
          <h2 className="font-serif text-xl sm:text-2xl text-white mb-4 drop-shadow">
            Xem video giới thiệu về {data.business.name.split(" ")[0]}{" "}
            <span className="text-[#d62828] font-bold">
              {data.heroTitleAccent || "Sport"}
            </span>
          </h2>
          <div className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>
      </section>

      {/* 8. THÔNG TIN KHUYẾN MÃI (3-COLUMN BLOG GRID) */}
      <section id="tin-tuc" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <UnderlineHeading title="THÔNG TIN KHUYẾN MÃI" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || phongGym12DefaultData.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="h-48 overflow-hidden mb-3 bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-[#111111] group-hover:text-[#d62828] transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h3>
                <span className="block text-[10px] text-gray-400 mb-2">
                  {post.date}
                </span>
                <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PARTNER LOGO STRIP */}
      <div className="bg-[#f4f4f4] py-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
          {(data.partnerLogos || phongGym12DefaultData.partnerLogos).map(
            (logo, idx) => (
              <span
                key={idx}
                className="text-sm font-extrabold tracking-widest text-gray-400 hover:text-gray-700 transition-colors"
              >
                {logo}
              </span>
            )
          )}
        </div>
      </div>

      {/* 10. DARK CHARCOAL 4-COLUMN FOOTER */}
      <footer id="lien-he" className="bg-[#2b2b2b] text-gray-300 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          {/* Col 1: LIÊN HỆ */}
          <div className="lg:col-span-3">
            <h4 className="font-bold uppercase text-white mb-3">LIÊN HỆ</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-3">
              {data.business.aboutText?.[0]}
            </p>
            <ul className="space-y-2 text-[11px] text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: HỖ TRỢ KHÁCH HÀNG */}
          <div className="lg:col-span-3">
            <h4 className="font-bold uppercase text-white mb-3">
              HỖ TRỢ KHÁCH HÀNG
            </h4>
            <ul className="space-y-2 text-[11px] text-gray-400">
              <li>Tài khoản thành viên</li>
              <li>Giỏ hàng ({cartCount})</li>
              <li>Hướng dẫn thanh toán</li>
              <li>Kiểm tra đơn hàng</li>
            </ul>
          </div>

          {/* Col 3: DANH SÁCH MENU */}
          <div className="lg:col-span-3">
            <h4 className="font-bold uppercase text-white mb-3">
              DANH SÁCH MENU
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a href="#trang-chu" className="text-[#d62828]">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#sieu-khuyen-mai" className="text-gray-400 hover:text-white">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#tin-tuc" className="text-gray-400 hover:text-white">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#san-pham-moi" className="text-gray-400 hover:text-white">
                  Cửa hàng
                </a>
              </li>
              <li>
                <a href="#lien-he" className="text-gray-400 hover:text-white">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: KẾT NỐI VỚI DUALEO */}
          <div className="lg:col-span-3">
            <h4 className="font-bold uppercase text-white mb-3">
              KẾT NỐI VỚI {data.business.name.toUpperCase()}
            </h4>
            <div className="bg-white rounded p-3 text-[#222222]">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-10 h-10 rounded bg-[#d62828] text-white flex items-center justify-center font-bold">
                  DS
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">
                    {data.business.name}
                  </p>
                  <p className="text-[10px] text-gray-500">8,365 người theo dõi</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[10px] font-semibold text-gray-600">
                <span className="border border-gray-300 px-2 py-0.5 rounded-xs">
                  Theo dõi Trang
                </span>
                <span className="border border-gray-300 px-2 py-0.5 rounded-xs">
                  Chia sẻ
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#1f1f1f] py-3 text-center text-[11px] text-gray-400">
        © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-md w-full p-6 text-center relative"
          >
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <Footprints className="w-10 h-10 text-[#d62828] mx-auto mb-2" />
            <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
              {data.business.name} — Hành Trình Bứt Phá Tốc Độ
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Trải nghiệm công nghệ đệm đế đàn hồi vượt trội giúp bảo vệ cổ chân và tối ưu hiệu
              suất trong mọi bài tập chạy bộ, Cardio và thể hình.
            </p>
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="bg-[#d62828] text-white text-xs font-bold uppercase px-6 py-2 rounded-xs cursor-pointer"
            >
              Khám phá ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
