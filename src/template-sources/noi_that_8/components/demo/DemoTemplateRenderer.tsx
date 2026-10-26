"use client";

import React, { useState } from "react";
import {
  MapPin,
  Truck,
  Phone,
  Headphones,
  ShieldCheck,
  Search,
  User,
  Heart,
  ShoppingBag,
  ArrowRight,
  Lock,
  Wallet,
  Star,
  Armchair,
  Mail,
  CheckCircle2,
  X,
  Menu,
  ChevronUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat8DefaultData,
  type NoiThat8TemplateData,
  type NoiThat8ProductItem
} from "@/template-sources/noi_that_8/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat8TemplateData = adaptClonedTemplateData(
    noiThat8DefaultData,
    incomingData
  );

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<NoiThat8ProductItem | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const brandName = data.business.name || "Bloxic";

  const allProducts = data.products || [];
  const modernChairsProducts = allProducts.filter(
    (p) => p.sectionKey === "ban-ghe"
  );
  const wardrobeProducts = allProducts.filter(
    (p) => p.sectionKey === "tu-quan-ao"
  );

  const filteredSearchProducts = searchQuery.trim()
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const toggleWishlist = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderProductCard = (product: NoiThat8ProductItem) => {
    const isLiked = wishlistIds.includes(product.id);
    return (
      <div
        key={product.id}
        onClick={() => {
          setSelectedProduct(product);
          setOrderSuccess(false);
        }}
        className="group cursor-pointer flex flex-col"
      >
        {/* Light Gray Studio Card */}
        <div className="relative aspect-square bg-[#f6f6f6] overflow-hidden mb-3 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-xs group-hover:scale-105 transition-transform duration-500"
          />

          {/* Top-left Black Discount Badge */}
          {product.discountBadge && (
            <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] font-bold px-2.5 py-0.5">
              {product.discountBadge}
            </span>
          )}

          {/* Top-right Wishlist Heart */}
          <button
            type="button"
            onClick={(e) => toggleWishlist(product.id, e)}
            aria-label="Yêu thích"
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 hover:bg-white shadow-xs flex items-center justify-center text-[#777777] hover:text-[#e53935] transition-colors"
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                isLiked ? "fill-[#e53935] text-[#e53935]" : ""
              }`}
            />
          </button>

          {/* Hover Quick Add */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCartCount((c) => c + 1);
              setSelectedProduct(product);
              setOrderSuccess(true);
            }}
            className="absolute inset-x-3 bottom-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-[#1a1a1a] hover:bg-[#e53935] text-white text-[11px] font-bold uppercase py-2 text-center"
          >
            + Thêm vào giỏ
          </button>
        </div>

        {/* 5 Stars */}
        <div className="flex items-center gap-0.5 text-[#ffb400] mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#ffb400] text-[#ffb400]" />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-[13px] font-semibold text-[#222222] group-hover:text-[#e53935] transition-colors line-clamp-1 mb-1.5">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          {product.oldPrice && (
            <span className="text-[11px] text-[#999999] line-through">
              {product.oldPrice}
            </span>
          )}
          <span className="text-xs sm:text-[13px] font-bold text-[#e53935]">
            {product.price}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#e53935] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="border-b border-[#efefef] bg-white text-[11px] text-[#555555]">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Left Utility Links */}
          <div className="flex items-center gap-5">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1.5 hover:text-[#e53935] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#777777]" />
              <span>Vị trí cửa hàng</span>
            </a>
            <a
              href="#ban-ghe"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#e53935] transition-colors"
            >
              <Truck className="w-3.5 h-3.5 text-[#777777]" />
              <span>Theo dõi đơn hàng</span>
            </a>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-[#e53935] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#777777]" />
              <span>Hotline: {primaryPhone}</span>
            </a>
          </div>

          {/* Right Mini Trust Badges */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#222222]" />
              <div className="leading-tight">
                <p className="font-bold text-[#222222]">Miễn phí vận chuyển</p>
                <p className="text-[10px] text-[#888888]">
                  Cho đơn hàng trên 2tr
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#222222]" />
              <div className="leading-tight">
                <p className="font-bold text-[#222222]">Hỗ trợ 24/7</p>
                <p className="text-[10px] text-[#888888]">Hỗ trợ tận tâm</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#222222]" />
              <div className="leading-tight">
                <p className="font-bold text-[#222222]">Thanh toán an toàn</p>
                <p className="text-[10px] text-[#888888]">Bảo mật thông tin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header
        id="trang-chu"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-[#f0f0f0]"
      >
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#trang-chu"
            className="flex items-center gap-2.5 text-2xl font-black text-[#1a1a1a] shrink-0"
          >
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={brandName}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <>
                <span className="w-9 h-9 rounded-lg border border-[#e0e0e0] flex items-center justify-center text-[#1a1a1a]">
                  <Armchair className="w-5 h-5 stroke-[1.8]" />
                </span>
                <span className="tracking-tight">{brandName}</span>
              </>
            )}
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-semibold text-[#333333]">
            <a
              href="#trang-chu"
              className="text-[#e53935] font-bold transition-colors"
            >
              Trang Chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#e53935] transition-colors"
            >
              Giới Thiệu
            </a>
            <a
              href="#ban-ghe"
              className="hover:text-[#e53935] transition-colors"
            >
              Sản Phẩm
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#e53935] transition-colors"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#e53935] transition-colors"
            >
              Liên Hệ
            </a>
          </nav>

          {/* Right Pill Search + Icons */}
          <div className="flex items-center gap-3.5">
            <div className="hidden sm:flex items-center bg-[#f4f6f9] rounded-full px-4 py-2 w-48 lg:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm..."
                className="bg-transparent w-full text-xs text-[#222222] focus:outline-none"
              />
              <Search className="w-4 h-4 text-[#666666] shrink-0" />
            </div>

            <a
              href="#lien-he"
              aria-label="Tài khoản"
              className="text-[#333333] hover:text-[#e53935] transition-colors"
            >
              <User className="w-5 h-5 stroke-[1.7]" />
            </a>

            <button
              type="button"
              onClick={() => {
                if (allProducts[0]) toggleWishlist(allProducts[0].id);
              }}
              aria-label="Yêu thích"
              className="relative text-[#333333] hover:text-[#e53935] transition-colors"
            >
              <Heart className="w-5 h-5 stroke-[1.7]" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#1a1a1a] text-white text-[9px] font-bold flex items-center justify-center">
                {wishlistIds.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (allProducts[0]) {
                  setSelectedProduct(allProducts[0]);
                  setOrderSuccess(false);
                }
              }}
              aria-label="Giỏ hàng"
              className="relative text-[#333333] hover:text-[#e53935] transition-colors"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.7]" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#1a1a1a] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-1 text-[#222222]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#eeeeee] bg-white px-4 py-3 space-y-2 text-sm font-medium">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#e53935] font-bold"
            >
              Trang Chủ
            </a>
            <a
              href="#ban-ghe"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#e53935]"
            >
              Bàn Ghế Hiện Đại
            </a>
            <a
              href="#tu-quan-ao"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#e53935]"
            >
              Tủ Quần Áo & Lưu Trữ
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#e53935]"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#e53935]"
            >
              Liên Hệ
            </a>
          </div>
        )}
      </header>

      {/* Instant Search Results */}
      {filteredSearchProducts && (
        <div className="bg-[#f9fafb] border-b border-[#e5e7eb] py-5 px-4">
          <div className="max-w-[1220px] mx-auto">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-[#222222]">
                Tìm thấy {filteredSearchProducts.length} sản phẩm cho &ldquo;
                {searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-semibold text-[#e53935] hover:underline"
              >
                Xóa tìm kiếm
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {filteredSearchProducts.map((p) => renderProductCard(p))}
            </div>
          </div>
        </div>
      )}

      {/* 3. DARK MOODY MINIMALIST HERO BANNER */}
      <section className="relative w-full bg-[#1a1c1e] text-white overflow-hidden">
        <div className="relative min-h-[420px] sm:min-h-[540px] flex items-center">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

          <div className="relative z-10 max-w-[1220px] mx-auto px-4 sm:px-6 w-full py-12">
            <div className="max-w-lg">
              <p className="text-xs font-bold text-[#e53935] tracking-wider mb-2">
                {data.hero.eyebrow || brandName}
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                {data.hero.subtitle}
              </p>
              <p className="text-sm font-bold mb-6">
                Giá chỉ từ:{" "}
                <span className="text-[#e53935] text-lg font-extrabold">
                  {data.heroPriceFrom || "500k"}
                </span>
              </p>
              <a
                href={data.hero.ctaLink || "#ban-ghe"}
                className="inline-flex items-center gap-3 bg-white hover:bg-[#e53935] hover:text-white text-[#1a1a1a] text-xs font-bold px-6 py-3.5 transition-colors shadow-lg"
              >
                <span>{data.hero.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Floating White Circle 30% OFF Badge */}
          <div className="hidden md:flex absolute right-[34%] bottom-14 z-10 w-20 h-20 rounded-full bg-white shadow-2xl flex-col items-center justify-center text-center">
            <span className="text-lg font-black text-[#e53935] leading-none">
              {data.heroDiscountBadge || "30%"}
            </span>
            <span className="text-[11px] font-bold text-[#1a1a1a] uppercase mt-0.5">
              OFF
            </span>
          </div>

          {/* Right Vertical Brand Watermark */}
          <div className="hidden xl:flex absolute right-4 inset-y-0 items-center pointer-events-none select-none">
            <span className="text-5xl font-black tracking-widest text-white/25 -rotate-90 whitespace-nowrap">
              {brandName}
            </span>
          </div>
        </div>
      </section>

      {/* 4. 4 SERVICE GUARANTEE STRIP */}
      <section className="py-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="border border-[#eeeeee] rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#eeeeee]">
            {(data.serviceGuarantees || []).map((item) => {
              const IconComp =
                item.icon === "truck"
                  ? Truck
                  : item.icon === "lock"
                  ? Lock
                  : item.icon === "headphones"
                  ? Headphones
                  : Wallet;
              return (
                <div
                  key={item.id}
                  className="p-6 flex items-start gap-4 hover:bg-[#fafafa] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#222222] shrink-0">
                    <IconComp className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-[#222222] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#777777] leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 3 PROMO CATEGORY CARDS ROW */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.topThreePromos || []).map((card) => (
              <a
                key={card.id}
                href="#ban-ghe"
                className="group bg-[#f4f5f7] p-6 flex items-center justify-between gap-4 min-h-[175px] overflow-hidden hover:shadow-md transition-all"
              >
                <div className="space-y-1.5">
                  <span className="text-[11px] text-[#666666] font-medium block">
                    {card.eyebrow}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#1a1a1a] uppercase tracking-tight">
                    {card.title}
                  </h3>
                  {card.priceFrom && (
                    <p className="text-xs text-[#555555] pt-1">
                      Giá chỉ từ{" "}
                      <span className="text-[#e53935] font-bold">
                        {card.priceFrom}
                      </span>
                    </p>
                  )}
                </div>
                <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 overflow-hidden rounded">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: BÀN GHẾ HIỆN ĐẠI (8 PRODUCTS) */}
      <section id="ban-ghe" className="py-8 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-7">
            <span className="w-1 h-5 bg-[#e53935] inline-block" />
            <h2 className="text-lg sm:text-xl font-bold text-[#1a1a1a]">
              Bàn Ghế <span className="font-normal text-[#555555]">Hiện Đại</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-9">
            {modernChairsProducts.map((product) => renderProductCard(product))}
          </div>
        </div>
      </section>

      {/* 7. TYPOGRAPHY MARQUEE / BRAND QUALITY RIBBON */}
      <section className="py-10 my-6 border-y border-[#eeeeee] bg-white overflow-hidden">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-baseline gap-4 sm:gap-6 text-2xl sm:text-4xl font-bold tracking-tight">
            <span className="text-[#d0d5dd]">Thiết Kế.</span>
            <span className="text-[#e4e7ec]">Thương Hiệu.</span>
            <span className="text-[#e53935]">Chất Lượng</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-lg overflow-hidden border border-[#e5e5e5] rotate-12 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=200&q=80"
                alt="Decor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 rounded-full border border-dashed border-[#cccccc] flex flex-col items-center justify-center text-center p-2">
              <span className="text-[9px] uppercase tracking-widest font-bold text-[#444444]">
                Bộ Sưu Tập
              </span>
              <Heart className="w-3.5 h-3.5 fill-[#e53935] text-[#e53935] my-0.5" />
              <span className="text-[9px] uppercase tracking-widest font-bold text-[#444444]">
                Nội Thất
              </span>
            </div>
            <div className="w-14 h-14 rounded-lg overflow-hidden border border-[#e5e5e5] -rotate-12 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80"
                alt="Sofa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="hidden xl:block text-3xl font-bold text-[#d0d5dd]">
            Tối Giản.
          </div>
        </div>
      </section>

      {/* 8. 2 HORIZONTAL PROMO BANNERS */}
      <section className="py-6 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.midTwoPromos || []).map((card) => (
              <div
                key={card.id}
                className="bg-[#f4f5f7] p-6 sm:p-8 flex items-center justify-between gap-4 min-h-[210px] relative overflow-hidden group"
              >
                <div className="max-w-[220px] z-10">
                  <span className="text-[11px] font-semibold text-[#e53935] block mb-1">
                    {card.eyebrow}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#1a1a1a] leading-snug mb-4">
                    {card.title}
                  </h3>
                  <a
                    href="#tu-quan-ao"
                    className="inline-block text-xs font-bold text-[#1a1a1a] hover:text-[#e53935] underline underline-offset-4"
                  >
                    {card.ctaText || "Mua Ngay"}
                  </a>
                </div>

                {/* Red Discount Circle + Product Image */}
                <div className="relative flex items-center">
                  {card.discountBadge && (
                    <div className="w-12 h-12 rounded-full bg-[#e53935] text-white flex flex-col items-center justify-center text-center shadow-md z-10 -mr-4">
                      <span className="text-xs font-black leading-none">
                        {card.discountBadge}
                      </span>
                      <span className="text-[8px] uppercase font-bold">
                        OFF
                      </span>
                    </div>
                  )}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white p-3 shadow-xs overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION: TỦ QUẦN ÁO & LƯU TRỮ (8 PRODUCTS) */}
      <section id="tu-quan-ao" className="py-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-7">
            <span className="w-1 h-5 bg-[#e53935] inline-block" />
            <h2 className="text-lg sm:text-xl font-bold text-[#1a1a1a]">
              Tủ Quần Áo & Nội Thất Lưu Trữ
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-9">
            {wardrobeProducts.map((product) => renderProductCard(product))}
          </div>
        </div>
      </section>

      {/* 10. PARTNER BRAND LOGOS STRIP */}
      <section className="py-8 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="bg-[#f8f8f8] py-7 px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="text-base sm:text-lg font-black tracking-tight text-[#222222] opacity-80 hover:opacity-100 transition-opacity"
              >
                {cl.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. 2 DUAL LIFESTYLE CAMPAIGN BANNERS */}
      <section id="gioi-thieu" className="py-8 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.lifestyleBanners || []).map((banner) => {
              const isDark = banner.theme === "dark";
              return (
                <div
                  key={banner.id}
                  className={`relative min-h-[250px] p-7 sm:p-9 flex items-center justify-between overflow-hidden group ${
                    isDark ? "bg-[#1c1c1c] text-white" : "bg-[#e8eceb] text-[#1a1a1a]"
                  }`}
                >
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                      isDark ? "opacity-45" : "opacity-35"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 ${
                      isDark
                        ? "bg-gradient-to-r from-black/85 via-black/50 to-transparent"
                        : "bg-gradient-to-r from-[#e8eceb]/95 via-[#e8eceb]/75 to-transparent"
                    }`}
                  />

                  <div className="relative z-10 max-w-[270px]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#e53935] block mb-2">
                      {banner.eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug mb-5">
                      {banner.title.replace(/Bloxic/gi, brandName)}
                    </h3>
                    <a
                      href="#ban-ghe"
                      className="inline-flex items-center gap-1.5 text-xs font-bold hover:text-[#e53935] transition-colors"
                    >
                      <span>{banner.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Right Circular Sale Badge */}
                  <div
                    className={`relative z-10 w-20 h-20 rounded-full border flex flex-col items-center justify-center text-center shrink-0 ${
                      isDark
                        ? "border-white/40 bg-black/40 text-white"
                        : "border-[#1a1a1a]/30 bg-white/80 text-[#1a1a1a]"
                    }`}
                  >
                    <span className="text-xs font-extrabold uppercase">
                      {banner.badgeTop}
                    </span>
                    <span className="text-[10px] font-bold text-[#e53935]">
                      {banner.badgeBottom}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. SECTION: CÓ THỂ BẠN QUAN TÂM (4-COLUMN BLOG GRID) */}
      <section id="tin-tuc" className="py-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-7">
            <span className="w-1 h-5 bg-[#e53935] inline-block" />
            <h2 className="text-lg sm:text-xl font-bold text-[#1a1a1a]">
              Có Thể{" "}
              <span className="font-normal text-[#555555]">Bạn Quan Tâm</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-9">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="relative aspect-[4/3] bg-[#f5f5f5] overflow-hidden mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white text-[#222222] text-[9px] font-extrabold uppercase px-2.5 py-1 shadow-xs">
                    {post.category || "NỘI THẤT"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#888888] mb-1.5">
                  <span>
                    Bởi:{" "}
                    <strong className="text-[#e53935] font-medium">
                      {brandName.toLowerCase()}
                    </strong>
                  </span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xs sm:text-[13.5px] font-bold text-[#222222] group-hover:text-[#e53935] transition-colors line-clamp-2 mb-3 leading-snug">
                  {post.title}
                </h3>

                <a
                  href="#lien-he"
                  className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#555555] hover:text-[#e53935]"
                >
                  <span>Xem thêm</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#e53935] text-white text-xs font-bold px-7 py-3 transition-colors"
            >
              <span>Xem Tất Cả</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 13. 6-IMAGE INSTAGRAM / SHOWROOM GALLERY STRIP */}
      <section className="pt-6 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {(data.galleryImages || []).map((imgUrl, idx) => (
            <div
              key={idx}
              className="aspect-square overflow-hidden bg-[#f0f0f0] group"
            >
              <img
                src={imgUrl}
                alt={`Không gian nội thất ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer
        id="lien-he"
        className="bg-[#f7f7f7] pt-14 pb-8 border-t border-[#eaeaea] text-xs text-[#555555]"
      >
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#e5e5e5]">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2.5 text-xl font-black text-[#1a1a1a] mb-2">
                <span className="w-8 h-8 rounded border border-[#dddddd] bg-white flex items-center justify-center">
                  <Armchair className="w-4 h-4" />
                </span>
                <span>{brandName}</span>
              </div>
              <p className="leading-relaxed text-[#666666]">
                {data.business.address}
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="flex items-center gap-2.5 text-[#e53935] font-medium hover:underline"
                >
                  <span className="w-7 h-7 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span>{primaryEmail}</span>
                </a>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-[#e53935] font-bold hover:underline"
                >
                  <span className="w-7 h-7 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>{primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Col 2: Danh mục */}
            <div className="lg:col-span-2 space-y-2.5">
              <h3 className="text-sm font-bold text-[#1a1a1a] mb-3">
                Danh mục
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#trang-chu" className="hover:text-[#e53935]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#e53935]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#ban-ghe" className="hover:text-[#e53935]">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#e53935]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e53935]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Liên kết */}
            <div className="lg:col-span-3 space-y-2.5">
              <h3 className="text-sm font-bold text-[#1a1a1a] mb-3">
                Liên kết
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#ban-ghe" className="hover:text-[#e53935]">
                    Bàn ghế phòng khách
                  </a>
                </li>
                <li>
                  <a href="#ban-ghe" className="hover:text-[#e53935]">
                    Ghế thư giãn Bắc Âu
                  </a>
                </li>
                <li>
                  <a href="#tu-quan-ao" className="hover:text-[#e53935]">
                    Tủ kệ & Hệ lưu trữ
                  </a>
                </li>
                <li>
                  <a href="#tu-quan-ao" className="hover:text-[#e53935]">
                    Phụ kiện trang trí nội thất
                  </a>
                </li>
                <li>
                  <a href="#tu-quan-ao" className="hover:text-[#e53935]">
                    Nội thất phòng ngủ hiện đại
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Chính sách */}
            <div className="lg:col-span-3 space-y-2.5">
              <h3 className="text-sm font-bold text-[#1a1a1a] mb-3">
                Chính sách
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#lien-he" className="hover:text-[#e53935]">
                    Trung tâm hỗ trợ khách hàng
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e53935]">
                    Điều khoản & Điều kiện
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e53935]">
                    Chính sách vận chuyển & lắp đặt
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e53935]">
                    Chính sách bảo mật thông tin
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e53935]">
                    Hướng dẫn mua hàng trả góp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-[#777777]">
            © Thiết kế và lập trình bởi{" "}
            <span className="font-bold text-[#1a1a1a]">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* Scroll To Top */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-5 right-5 z-40 w-9 h-9 bg-white border border-[#dddddd] text-[#222222] hover:bg-[#e53935] hover:text-white hover:border-[#e53935] shadow-md flex items-center justify-center transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

      {/* PRODUCT QUICK-VIEW MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-2xl w-full overflow-hidden shadow-2xl border border-[#eeeeee]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#f6f6f6] aspect-square relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.discountBadge && (
                  <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-xs font-bold px-2.5 py-1">
                    {selectedProduct.discountBadge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase text-[#e53935]">
                      {selectedProduct.categoryName}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(null)}
                      className="text-[#888888] hover:text-[#1a1a1a]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a1a] mb-2">
                    {selectedProduct.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-black text-[#e53935]">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.oldPrice && (
                      <span className="text-xs text-[#999999] line-through">
                        {selectedProduct.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className="space-y-1 text-xs text-[#555555] border-y border-[#eeeeee] py-3 mb-4">
                    <p>
                      <strong>Kích thước:</strong> {selectedProduct.dimensions}
                    </p>
                    <p>
                      <strong>Chất liệu:</strong> {selectedProduct.material}
                    </p>
                    <p>
                      <strong>Bảo hành:</strong> {selectedProduct.warranty}
                    </p>
                  </div>
                </div>

                {orderSuccess ? (
                  <div className="bg-[#fef2f2] border border-[#e53935]/40 p-3 text-xs text-[#1a1a1a] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e53935] shrink-0" />
                    <span>
                      Đã thêm <strong>{selectedProduct.title}</strong> vào giỏ
                      hàng!
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setCartCount((c) => c + 1);
                        setOrderSuccess(true);
                      }}
                      className="flex-1 bg-[#1a1a1a] hover:bg-[#e53935] text-white text-xs font-bold uppercase py-3 transition-colors"
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                      className="border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-xs font-bold uppercase py-3 px-4 transition-colors"
                    >
                      Gọi ngay
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
