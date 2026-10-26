"use client";

import React, { useState } from "react";
import {
  Search,
  Store,
  User,
  Heart,
  ShoppingCart,
  Truck,
  RefreshCw,
  Users,
  Tag,
  Star,
  Sparkles,
  ShoppingBag,
  Gift,
  Flower2,
  Phone,
  Share2,
  MessageCircle,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien6DefaultData,
  type ThamMyVien6Data,
  type ThamMyVien6Product,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: ThamMyVien6Data = adaptClonedTemplateData(
    thamMyVien6DefaultData,
    incomingData
  );

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cartCount, setCartCount] = useState<number>(0);
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] =
    useState<ThamMyVien6Product | null>(null);
  const [newsletterSubscribed, setNewsletterSubscribed] =
    useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@cosmeticluxe.vn";

  const renderPolicyIcon = (iconName: string) => {
    switch (iconName) {
      case "truck":
        return <Truck className="w-7 h-7 text-white shrink-0" />;
      case "refresh":
        return <RefreshCw className="w-7 h-7 text-white shrink-0" />;
      case "users":
        return <Users className="w-7 h-7 text-white shrink-0" />;
      default:
        return <Tag className="w-7 h-7 text-white shrink-0" />;
    }
  };

  const renderProductCard = (product: ThamMyVien6Product) => (
    <div
      key={product.id}
      onClick={() => setSelectedProduct(product)}
      className="bg-white rounded-md border border-[#cbe2b4] hover:border-[#3B6E22] hover:shadow-md transition-all p-3 flex flex-col justify-between cursor-pointer group"
    >
      <div>
        {/* Badges Row */}
        <div className="flex flex-col items-start gap-1 min-h-[24px] mb-1.5">
          {product.discountBadge && (
            <span className="inline-block bg-[#FADBD8] text-[#C0392B] text-[10px] font-bold px-2 py-0.5 rounded-xs">
              {product.discountBadge}
            </span>
          )}
          {product.badge && (
            <span className="inline-block bg-[#E1F2D5] text-[#2E5A18] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Thumbnail */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xs bg-[#FAFBF9] mb-3">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Title */}
        <h3 className="text-xs text-[#333333] group-hover:text-[#3B6E22] font-medium line-clamp-2 leading-snug transition-colors">
          {product.title}
        </h3>
      </div>

      <div className="mt-2.5 pt-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-bold text-[#E65100]">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-[11px] text-[#999999] line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
        <div className="mt-1 flex items-center gap-1">
          <div className="flex items-center text-[#F5A623]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-[#F5A623] text-[#F5A623]"
              />
            ))}
          </div>
          <span className="text-[10px] text-[#888888]">{product.reviews}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#2b2b2b] font-sans selection:bg-[#3B6E22] selection:text-white">
      {/* HEADER (Forest Green #3B6E22 matching TMV009-tham_my_vien_6.png) */}
      <header className="bg-[#3B6E22] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top Header Row */}
          <div className="py-3 flex flex-wrap items-center justify-between gap-4">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={data.business.name}
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <Flower2 className="w-8 h-8 text-white stroke-[1.6]" />
                  <span className="text-xs font-extrabold uppercase tracking-widest mt-0.5">
                    {data.business.name}
                  </span>
                </div>
              )}
            </a>

            {/* Center Search Input */}
            <div className="flex-1 max-w-xl mx-auto order-3 sm:order-2 w-full sm:w-auto">
              <div className="relative flex items-center bg-white rounded-full overflow-hidden px-4 py-2 shadow-inner">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm, danh sách mong muốn..."
                  className="w-full text-xs text-[#333333] placeholder-[#888888] focus:outline-none"
                />
                <Search className="w-4 h-4 text-[#3B6E22] shrink-0 ml-2" />
              </div>
            </div>

            {/* Right Store Locator & Icons */}
            <div className="flex items-center gap-4 order-2 sm:order-3">
              <a
                href="#lien-he"
                className="hidden md:flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide hover:text-[#d5f2b8] transition-colors"
              >
                <Store className="w-4 h-4" />
                <span className="leading-tight">
                  HỆ THỐNG
                  <br />
                  CỬA HÀNG
                </span>
              </a>

              <a
                href="#lien-he"
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Tài khoản"
              >
                <User className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setWishlistCount((w) => w + 1)}
                className="relative p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Yêu thích"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#F5A623] text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setCartCount((c) => c + 1)}
                className="relative p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Giỏ hàng"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#F5A623] text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="border-t border-white/15 py-2.5 flex items-center justify-between text-xs font-medium overflow-x-auto no-scrollbar">
            <nav className="flex items-center gap-5 whitespace-nowrap">
              {data.navCategories.map((cat, idx) => (
                <a
                  key={idx}
                  href="#san-pham-moi"
                  className="hover:text-[#d5f2b8] transition-colors"
                >
                  {cat}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5 whitespace-nowrap pl-6 border-l border-white/20">
              <a href="#chuyen-cua-cosmetic" className="hover:text-[#d5f2b8]">
                Về {data.business.name}
              </a>
              <a href="#nguyen-lieu" className="hover:text-[#d5f2b8]">
                Blog làm đẹp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO BANNER + 4 GREEN POLICY ITEMS */}
      <section className="relative bg-gradient-to-r from-[#DCECC9] via-[#E8F4D9] to-[#CFE5B8] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Big Size Typography */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <span className="inline-block bg-[#2E5A18] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-xs shadow-xs">
                {data.heroPromo.badge}
              </span>
              <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-black text-[#1E4611] tracking-tight leading-none">
                {data.hero.title || data.heroPromo.bigTitle}
              </h1>
              <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#2E5A18]">
                {data.hero.subtitle || data.heroPromo.subtitle}
              </p>

              {/* Gift Highlight Box */}
              <div className="mt-5 inline-flex items-center gap-3 bg-white/80 backdrop-blur-xs px-5 py-3 rounded-lg border border-[#a9d18e] shadow-xs">
                <span className="text-3xl sm:text-4xl font-black text-[#2E5A18] tracking-tight">
                  {data.heroPromo.giftLabel}
                </span>
                <div className="text-left">
                  <span className="block text-xs sm:text-sm font-extrabold text-[#2E5A18] uppercase">
                    {data.heroPromo.giftHighlight}
                  </span>
                  <span className="block text-[11px] text-[#557a40]">
                    Áp dụng cho mọi đơn hàng mặt nạ thảo mộc
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={data.hero.ctaLink || "#san-pham-moi"}
                  className="inline-block px-8 py-2.5 bg-[#2E5A18] hover:bg-[#214210] text-white text-sm font-extrabold uppercase tracking-widest rounded-full shadow-md transition-all"
                >
                  {data.hero.ctaText || data.heroPromo.ctaText}
                </a>
              </div>
            </div>

            {/* Right Dual Clay Mask Jars Display */}
            <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6">
              <div className="relative w-44 sm:w-56 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white transform -rotate-2">
                <img
                  src={data.heroPromo.productImage1}
                  alt="Mặt nạ cấp ẩm phục hồi Tơ Tằm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white/95 p-2.5 text-center">
                  <span className="block text-[10px] font-extrabold text-[#2E5A18] uppercase">
                    MẶT NẠ CẤP ẨM PHỤC HỒI
                  </span>
                  <span className="block text-[9px] text-[#666666]">
                    Chiết xuất Tơ Tằm • 120g
                  </span>
                </div>
              </div>

              <div className="relative w-48 sm:w-60 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white transform rotate-2">
                <img
                  src={data.heroPromo.productImage2}
                  alt="Mặt nạ ngừa mụn Rau Má"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#2E5A18]/95 text-white p-2.5 text-center">
                  <span className="block text-[10px] font-extrabold uppercase">
                    MẶT NẠ NGỪA MỤN RAU MÁ
                  </span>
                  <span className="block text-[9px] text-white/80">
                    Thanh lọc lỗ chân lông • 120g
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Policy Strip (#3B6E22) */}
        <div className="bg-[#3B6E22] text-white py-4 border-t border-white/15">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.policies.map((pol) => (
              <div
                key={pol.id}
                className="flex items-center gap-3 bg-white/5 rounded-md px-3.5 py-2"
              >
                {renderPolicyIcon(pol.icon)}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide">
                    {pol.title}
                  </h4>
                  <p className="text-[10px] text-white/80 leading-tight mt-0.5">
                    {pol.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ⭐ SẢN PHẨM MỚI NHẤT */}
      <section id="san-pham-moi" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-7">
            <Star className="w-5 h-5 text-[#F5A623] fill-[#F5A623]" />
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-[#2E5A18]">
              SẢN PHẨM MỚI NHẤT
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.newProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 3: 2 PROMO BANNERS SIDE BY SIDE */}
      <section className="py-4 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Pink Floral Cleanser Banner */}
          <div className="relative h-52 sm:h-60 rounded-lg overflow-hidden bg-[#FCEAE8] flex items-center p-6 sm:p-8 shadow-xs group">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80"
              alt="Sữa rửa mặt dịu nhẹ"
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-10 ml-auto text-right max-w-xs">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B86B77]">
                DƯỢC MỸ PHẨM LÀNH TÍNH
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-light tracking-widest text-[#8C4A56] uppercase leading-tight">
                SỮA RỬA MẶT
                <br />
                HOA HỒNG
              </h3>
              <p className="mt-2 text-xs text-[#7a4b53]">
                Sạch sâu dịu nhẹ • Cân bằng pH 5.5 tự nhiên
              </p>
            </div>
          </div>

          {/* Right Herbal Hair Care Banner */}
          <div className="relative h-52 sm:h-60 rounded-lg overflow-hidden bg-[#E5EFE0] flex items-center p-6 sm:p-8 shadow-xs group">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
              alt="Gội đầu không hóa chất"
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-10 max-w-xs">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E4611] uppercase leading-tight">
                GỘI ĐẦU
                <br />
                KHÔNG HÓA CHẤT
              </h3>
              <span className="mt-3 inline-block bg-[#2E5A18] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                Bí quyết sở hữu mái tóc dày khỏe
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SẢN PHẨM BÁN CHẠY NHẤT */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-7">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-[#2E5A18]">
              SẢN PHẨM BÁN CHẠY NHẤT
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.bestSellers.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 5: 🌿 CHĂM SÓC DA (Pastel Green #E6F3D8 Background) */}
      <section className="py-12 bg-[#E6F3D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#2E5A18]" />
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-[#2E5A18]">
              CHĂM SÓC DA
            </h2>
          </div>

          {/* Wide Green Tea Banner */}
          <div className="relative rounded-lg overflow-hidden mb-6 bg-gradient-to-r from-[#E2F3D5] via-[#C5E8B7] to-[#8FD175] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="max-w-md">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2E5A18]">
                {data.skincareBanner.subtitle}
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-serif font-bold text-[#1B3B10] uppercase">
                {data.skincareBanner.title}
              </h3>
              <p className="mt-2 text-xs text-[#2E5A18] font-medium">
                {data.skincareBanner.tag}
              </p>
            </div>
            <img
              src={data.skincareBanner.image}
              alt={data.skincareBanner.title}
              className="w-48 sm:w-64 h-36 sm:h-44 object-cover rounded-lg shadow-md border-2 border-white"
            />
          </div>

          {/* 5-Column Skincare Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.skincareProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 6: 🛍️ KHUYẾN MÃI VÀ COMBO */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-7">
            <ShoppingBag className="w-5 h-5 text-[#F5A623]" />
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-[#2E5A18]">
              KHUYẾN MÃI VÀ COMBO
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.comboProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 7: 🎁 QUÀ TẶNG */}
      <section className="py-12 bg-white border-t border-[#f0f4ec]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-7">
            <Gift className="w-5 h-5 text-[#E65100]" />
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-[#2E5A18]">
              QUÀ TẶNG
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.giftProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 8: 💄 SON MÔI (Pastel Green #E6F3D8 Background) */}
      <section className="py-12 bg-[#E6F3D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-[#2E5A18]">
              💄 SON MÔI
            </h2>
          </div>

          {/* Wide Lipstick Banner */}
          <div className="relative rounded-lg overflow-hidden mb-6 bg-gradient-to-r from-[#F9E3DE] via-[#F5D0C8] to-[#EBB7AC] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <img
              src={data.lipstickBanner.image}
              alt={data.lipstickBanner.title}
              className="w-52 sm:w-72 h-40 sm:h-48 object-cover rounded-lg shadow-md border-2 border-white"
            />
            <div className="max-w-md text-left sm:text-right">
              <span className="text-xs font-serif italic text-[#8B3A3A]">
                {data.lipstickBanner.subtitle}
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-[#6E2626] uppercase">
                {data.lipstickBanner.title}
              </h3>
              <p className="mt-2 text-xs text-[#6E2626]/80 leading-relaxed">
                {data.lipstickBanner.description}
              </p>
            </div>
          </div>

          {/* 5-Column Lipstick Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.lipstickProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 9: 100% MINH BẠCH NGUYÊN LIỆU (4 Alternating Vertical Ingredient Cards) */}
      <section id="nguyen-lieu" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Intro Column */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-extrabold uppercase text-[#2E5A18] leading-snug">
                100% MINH BẠCH
                <br />
                NGUYÊN LIỆU
              </h2>
              <p className="mt-2.5 text-xs text-[#555555] leading-relaxed">
                Sản phẩm AN LÀNH - Con người CHÂN THẬT. Mọi thành phần thảo mộc
                đều có nguồn gốc canh tác rõ ràng tại Việt Nam.
              </p>
              <a
                href="#chuyen-cua-cosmetic"
                className="mt-4 inline-block px-5 py-2 bg-[#E6F3D8] hover:bg-[#3B6E22] text-[#2E5A18] hover:text-white text-xs font-bold rounded-xs transition-colors"
              >
                Xem thêm
              </a>
            </div>

            {/* Right 4 Colorful Vertical Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.ingredients.map((ing) => (
                <div
                  key={ing.id}
                  style={{ backgroundColor: ing.bgColor }}
                  className="rounded-xl overflow-hidden text-white flex flex-col justify-between shadow-md min-h-[340px]"
                >
                  {ing.imagePosition === "top" && (
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={ing.image}
                        alt={ing.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="p-5 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider">
                      {ing.name}
                    </h3>
                    <p className="mt-2.5 text-[11px] text-white/90 leading-relaxed">
                      {ing.description}
                    </p>
                  </div>

                  {ing.imagePosition === "bottom" && (
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={ing.image}
                        alt={ing.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CHUYỆN CỦA COSMETIC */}
      <section id="chuyen-cua-cosmetic" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#F6F6F6] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs">
            {/* Left Artisan Soap Image */}
            <div className="lg:col-span-5 min-h-[320px]">
              <img
                src={data.brandStory.image}
                alt={data.brandStory.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Brand Story + 2 cGMP Cards */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#2E5A18] text-center lg:text-left">
                  {data.business.aboutTitle || data.brandStory.title}
                </h2>
                <p className="mt-3 text-xs font-bold text-[#333333] leading-relaxed">
                  {data.brandStory.highlight}
                </p>
                {(data.business.aboutText || data.brandStory.paragraphs).map(
                  (p, i) => (
                    <p
                      key={i}
                      className="mt-2 text-xs text-[#555555] leading-relaxed"
                    >
                      {p}
                    </p>
                  )
                )}

                <div className="mt-4">
                  <a
                    href="#lien-he"
                    className="inline-block px-6 py-2 bg-[#F5A623] hover:bg-[#d98c12] text-white text-xs font-bold uppercase rounded-full transition-colors"
                  >
                    XEM THÊM
                  </a>
                </div>
              </div>

              {/* 2 Certificate Mini Cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.brandStory.certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-white p-3 rounded-lg flex items-center gap-3 shadow-xs border border-[#eaeaea]"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-16 h-14 object-cover rounded-xs shrink-0"
                    />
                    <span className="text-[11px] font-semibold text-[#333333] leading-snug">
                      {cert.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: THEO DÕI INSTAGRAM */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
          <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#2E5A18]">
            THEO DÕI INSTAGRAM
          </h2>
          <p className="mt-1 text-xs text-[#666666]">
            Là phụ nữ, nhất định phải xinh đẹp và tự tin. Hãy cùng{" "}
            {data.business.name} khám phá những bí quyết làm đẹp thú vị nhé!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
          {data.instagramGallery.map((imgUrl, idx) => (
            <div key={idx} className="aspect-[16/10] overflow-hidden group">
              <img
                src={imgUrl}
                alt={`Instagram ${data.business.name} ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER (Deep Forest Green #3B6E22 matching TMV009-tham_my_vien_6.png) */}
      <footer id="lien-he" className="bg-[#3B6E22] text-white pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/15">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider mb-4">
                VỀ {data.business.name.toUpperCase()}
              </h4>
              <ul className="space-y-2 text-xs text-white/85">
                <li>
                  <a href="#chuyen-cua-cosmetic" className="hover:underline">
                    Chuyện của {data.business.name}
                  </a>
                </li>
                <li>
                  <a href="#nguyen-lieu" className="hover:underline">
                    Về nhà máy sản xuất cGMP
                  </a>
                </li>
                <li>
                  <a href="#san-pham-moi" className="hover:underline">
                    Tin tức & Sự kiện
                  </a>
                </li>
                <li>
                  <a href="#nguyen-lieu" className="hover:underline">
                    Blog làm đẹp thuần chay
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider mb-4">
                HOẠT ĐỘNG CỘNG ĐỒNG
              </h4>
              <ul className="space-y-2 text-xs text-white/85">
                <li>Xây trường cho trẻ em vùng cao</li>
                <li>Đổi vỏ chai cũ lấy quà xanh</li>
                <li>Chung tay bảo vệ môi trường</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider mb-4">
                HƯỚNG DẪN MUA HÀNG
              </h4>
              <ul className="space-y-2 text-xs text-white/85">
                <li>Chính sách mua hàng và thanh toán</li>
                <li>Chính sách bảo hành</li>
                <li>Chính sách đổi trả và hoàn tiền</li>
                <li>Chính sách bảo mật thông tin</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider mb-4">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2 text-xs text-white/90">
                <li>{primaryEmail}</li>
                <li className="font-bold text-sm">{primaryPhone}</li>
                <li className="pt-1">
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 bg-white text-[#2E5A18] font-bold text-xs px-4 py-2 rounded-xs shadow-xs hover:bg-[#e6f3d8] transition-colors"
                  >
                    <Store className="w-4 h-4 text-[#F5A623]" />
                    <span>Hệ thống cửa hàng</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Newsletter + Brand Tagline */}
          <div className="py-8 border-b border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-xs bg-white/15 px-4 py-2.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#F5A623]" />
                <span>Đã đăng ký nhận ưu đãi thành công!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSubscribed(true);
                }}
                className="flex items-center w-full max-w-md bg-white/15 rounded-xs p-1"
              >
                <input
                  type="email"
                  required
                  placeholder="Đăng ký email để nhận ưu đãi*"
                  className="bg-transparent text-xs text-white placeholder-white/70 px-3 py-2 flex-1 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#F5A623] hover:bg-[#e09112] text-white text-xs font-bold uppercase px-4 py-2 rounded-xs transition-colors"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}

            <div className="flex items-center gap-3">
              <Flower2 className="w-8 h-8 text-white" />
              <div>
                <span className="block text-base font-extrabold uppercase tracking-wider">
                  {data.business.name}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-white/80">
                  MỸ PHẨM THIÊN NHIÊN LÀNH VÀ THẬT
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Legal Row */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/80">
            <div>
              <p className="font-bold text-white">
                Công ty Cổ phần Mỹ Phẩm Thiên Nhiên {data.business.name}
              </p>
              <p className="mt-0.5">Địa chỉ: {data.business.address}</p>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xs text-center">
              *Lưu ý: Tác dụng của sản phẩm có thể thay đổi tùy theo tình trạng
              cơ địa mỗi người
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING RIGHT CONTACT BUTTONS */}
      <div className="fixed right-3 bottom-6 z-40 flex flex-col gap-2">
        <a
          href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
          className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Tư vấn trực tuyến"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
          className="w-10 h-10 rounded-full bg-[#E53935] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Gọi điện"
        >
          <Phone className="w-5 h-5" />
        </a>
        <button
          type="button"
          onClick={() => setCartCount((c) => c + 1)}
          className="w-10 h-10 rounded-full bg-[#F5A623] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Chia sẻ"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* PRODUCT QUICK VIEW MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full aspect-square object-cover rounded-lg border border-[#e6f3d8]"
              />
              <div>
                <span className="inline-block bg-[#E1F2D5] text-[#2E5A18] text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-xs">
                  {selectedProduct.category}
                </span>
                <h3 className="mt-2 text-sm font-bold text-[#222222] leading-snug">
                  {selectedProduct.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-lg font-extrabold text-[#E65100]">
                    {selectedProduct.price}
                  </span>
                  {selectedProduct.oldPrice && (
                    <span className="text-xs text-[#999999] line-through">
                      {selectedProduct.oldPrice}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs text-[#666666]">
                  100% nguyên liệu thiên nhiên lành tính • Đạt chuẩn cGMP • Đổi
                  trả miễn phí trong 30 ngày.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSelectedProduct(null);
                  }}
                  className="mt-5 w-full py-2.5 bg-[#3B6E22] hover:bg-[#2E5A18] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
                >
                  THÊM VÀO GIỎ HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
