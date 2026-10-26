"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingCart,
  ChevronDown,
  Leaf,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  X,
  Menu,
  ShoppingBasket
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct9DefaultData,
  type B2BProduct9TemplateData,
  type B2BProduct9Product
} from "@/template-sources/b2b_product_9/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: B2BProduct9TemplateData = adaptClonedTemplateData(
    b2bProduct9DefaultData,
    incomingData
  );

  const [activeTab, setActiveTab] = useState<string>("all");
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] =
    useState<B2BProduct9Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "demonhunterg@gmail.com";
  const secondaryEmail = data.business.email?.[1] || "mon@mona.media";
  const brandName = data.business.name || "CleverFood";

  const filteredProducts = (data.featuredProducts || []).filter((item) => {
    if (activeTab === "all") return true;
    return item.tab === activeTab;
  });

  const renderBrandLogo = () => {
    if (data.business.logo) {
      return (
        <img
          src={data.business.logo}
          alt={brandName}
          className="h-9 w-auto object-contain"
        />
      );
    }
    return (
      <span className="inline-flex items-center text-3xl font-light tracking-tight text-[#7eb83a]">
        <span className="font-normal">M</span>
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#7eb83a] text-white mx-0.5">
          <Leaf className="w-3.5 h-3.5" />
        </span>
        <span>na</span>
        {brandName.toLowerCase() !== "mona" && (
          <span className="text-sm font-bold text-[#333333] ml-2 uppercase tracking-wider">
            {brandName}
          </span>
        )}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#7eb83a] selection:text-white">
      {/* 1. CLEAN WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#efefef]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <a href="#trang-chu" className="shrink-0">
            {renderBrandLogo()}
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#555555]">
            <a
              href="#trang-chu"
              className="text-[#7eb83a] transition-colors"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#7eb83a] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#san-pham"
              className="inline-flex items-center gap-1 hover:text-[#7eb83a] transition-colors"
            >
              <span>CỬA HÀNG</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#khuyen-mai"
              className="hover:text-[#7eb83a] transition-colors"
            >
              KIẾN THỨC
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#7eb83a] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 text-[#444444]">
            <a
              href="#san-pham"
              aria-label="Tìm kiếm"
              className="hover:text-[#7eb83a] transition-colors"
            >
              <Search className="w-4 h-4" />
            </a>
            <a
              href="#lien-he"
              aria-label="Tài khoản"
              className="hover:text-[#7eb83a] transition-colors"
            >
              <User className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() =>
                setSelectedProduct(data.featuredProducts?.[0] || null)
              }
              aria-label="Giỏ hàng"
              className="relative hover:text-[#7eb83a] transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#7eb83a] text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden p-1.5"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#eeeeee] px-6 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#7eb83a]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              CỬA HÀNG
            </a>
            <a
              href="#khuyen-mai"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              KHUYẾN MÃI TRONG TUẦN
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. WARM AMBER-GOLD HERO SECTION */}
      <section
        id="trang-chu"
        className="relative bg-gradient-to-r from-[#9e6200] via-[#c78506] to-[#a96b00] pt-12 pb-24 sm:py-20 overflow-hidden text-white"
      >
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="md:col-span-6 z-10">
              <span className="inline-block bg-[#7eb83a] text-white text-xs sm:text-sm font-bold px-3.5 py-1 rounded-xs mb-3">
                {data.hero.eyebrow || "Nước Ép Táo"}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight mb-3 drop-shadow-xs">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-white/90 mb-6">
                {data.hero.subtitle}
              </p>
              <a
                href={data.hero.ctaLink || "#san-pham"}
                className="inline-block bg-[#7eb83a] hover:bg-[#6da32d] text-white text-xs font-bold uppercase tracking-wider px-7 py-2.5 rounded-full shadow-md transition-colors"
              >
                {data.hero.ctaText || "MUA NGAY"}
              </a>
            </div>

            {/* Right Fresh Fruit Bowl */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white/15 p-3 shadow-2xl">
                <img
                  src={data.heroProductImage || data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 2x2 PROMO BANNERS OVERLAPPING HERO */}
      <section id="gioi-thieu" className="relative z-20 -mt-12 pb-14">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.promoBanners || []).map((banner) => (
              <a
                key={banner.id}
                href="#san-pham"
                className="group bg-[#f7f7f7] hover:bg-white border border-[#eeeeee] rounded-md p-6 flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="max-w-[58%]">
                  <span className="block font-serif italic text-sm text-[#7eb83a] font-semibold mb-1">
                    {banner.eyebrow}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#1f1f1f] leading-snug mb-1.5">
                    {banner.title}
                  </h3>
                  <p className="text-xs text-[#666666]">{banner.subtitle}</p>
                </div>
                <div className="w-32 h-28 sm:w-36 sm:h-32 shrink-0 overflow-hidden rounded">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS ("Sản phẩm nổi bật") */}
      <section id="san-pham" className="py-10 sm:py-14 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222] mb-4">
              Sản phẩm nổi bật
            </h2>

            <div className="inline-flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
              {[
                { id: "all", label: "MỚI NHẤT" },
                { id: "giam-gia", label: "GIẢM GIÁ" },
                { id: "ban-chay", label: "BÁN CHẠY" }
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={`transition-colors cursor-pointer ${
                    activeTab === t.id
                      ? "text-[#7eb83a]"
                      : "text-[#777777] hover:text-[#222222]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4x2 Clean Studio Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group border border-[#eeeeee] rounded-sm overflow-hidden bg-white hover:shadow-md transition-shadow cursor-pointer flex flex-col"
              >
                <div className="aspect-square bg-[#f7f7f7] p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xs group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="py-3.5 px-3 text-center bg-white border-t border-[#f3f3f3]">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#222222] group-hover:text-[#7eb83a] transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs font-extrabold text-[#7eb83a]">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WEEKLY PROMOTIONS BANNER + COUNTDOWN + 4 DEAL CARDS ("Khuyến Mãi Trong Tuần") */}
      <section id="khuyen-mai" className="pt-8 pb-14 bg-white">
        {/* Rustic Wood Banner with Countdown */}
        <div className="relative py-16 sm:py-20 bg-[#5a3e28] text-white overflow-hidden">
          <img
            src={data.weeklyDealBgImage}
            alt="Khuyến mãi trong tuần"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[#4b3320]/65" />

          <div className="relative z-10 max-w-[900px] mx-auto px-4 text-center pb-10">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-2">
              Khuyến Mãi Trong Tuần
            </h2>
            <div className="flex items-center justify-center gap-2 text-white/80 my-2">
              <span className="w-10 h-[1px] bg-white/40" />
              <ShoppingBasket className="w-4 h-4" />
              <span className="w-10 h-[1px] bg-white/40" />
            </div>
            <p className="text-xs sm:text-sm text-white/90 mb-7">
              Cơ hội để gia đình bạn sở hữu những sản phẩm ưu đãi
            </p>

            {/* 4 Circular Countdown Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {(data.weeklyDealCountdown || []).map((cd, i) => (
                <div
                  key={i}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/80 bg-black/20 backdrop-blur-2xs flex flex-col items-center justify-center"
                >
                  <span className="text-lg sm:text-2xl font-extrabold leading-none">
                    {cd.value}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider opacity-90 mt-1">
                    {cd.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Overlapping Deal Product Cards */}
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 -mt-14 relative z-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {(data.weeklyDealProducts || []).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className="group border border-[#eeeeee] rounded-sm overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-square bg-[#f7f7f7] p-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="py-3.5 px-3 text-center bg-white border-t border-[#f3f3f3]">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#222222] group-hover:text-[#7eb83a] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs font-extrabold text-[#7eb83a]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "100% NATURAL" ASYMMETRIC BENTO SHOWCASE */}
      <section className="pb-14 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Left Tall Card */}
            <div className="md:col-span-3 bg-[#f7f7f7] rounded-sm overflow-hidden h-[260px] md:h-[360px]">
              <img
                src={data.naturalBentoImages.tallLeft}
                alt="Trà thảo mộc tự nhiên"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right 9-col Sub-grid */}
            <div className="md:col-span-9 flex flex-col gap-5">
              {/* Top 3 Square Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-[#f7f7f7] h-[170px] overflow-hidden rounded-sm">
                  <img
                    src={data.naturalBentoImages.topCenterLeft}
                    alt="Bơ sáp tươi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-[#f7f7f7] h-[170px] overflow-hidden rounded-sm">
                  <img
                    src={data.naturalBentoImages.topCenterRight}
                    alt="Cà chua hữu cơ"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-[#f7f7f7] h-[170px] overflow-hidden rounded-sm">
                  <img
                    src={data.naturalBentoImages.topRight}
                    alt="Chanh dây tươi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Bottom 2 Tiles: "100% NATURAL" Typography + Wide Lime Juice Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-white border border-[#f0f0f0] h-[170px] flex flex-col items-center justify-center text-center p-4">
                  <span className="font-serif text-4xl sm:text-5xl font-black text-[#4d7c0f] leading-none">
                    100%
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#365314] mt-1">
                    NATURAL
                  </span>
                </div>
                <div className="sm:col-span-2 bg-[#f7f7f7] h-[170px] overflow-hidden rounded-sm">
                  <img
                    src={data.naturalBentoImages.bottomWideRight}
                    alt="Nước cốt chanh tươi tự nhiên"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 6 ORGANIC PARTNER LOGOS STRIP */}
      <section className="py-8 border-t border-[#f2f2f2] bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="flex items-center justify-center gap-1.5 py-2 text-center opacity-80 hover:opacity-100 transition-opacity"
              >
                <Leaf className="w-4 h-4 text-[#7eb83a] shrink-0" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#333333]">
                  {cl.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER BANNER ("Đăng ký để nhận cập nhật") */}
      <section className="relative py-16 sm:py-20 bg-[#243b4a] text-white overflow-hidden">
        <img
          src={data.newsletterBgImage}
          alt="Đăng ký nhận bản tin"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#1f3442]/75" />

        <div className="relative z-10 max-w-[680px] mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
            Đăng ký để nhận cập nhật
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/80 my-2">
            <span className="w-10 h-[1px] bg-white/40" />
            <ShoppingBasket className="w-4 h-4" />
            <span className="w-10 h-[1px] bg-white/40" />
          </div>
          <p className="text-xs text-white/85 mb-6">
            Để lại email để không bỏ lỡ bất kì ưu đãi nào
          </p>

          {newsletterDone ? (
            <div className="max-w-md mx-auto bg-white/15 border border-white/30 rounded-full py-2.5 px-5 text-xs font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7eb83a]" />
              <span>Đã đăng ký nhận ưu đãi thành công!</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterDone(true);
              }}
              className="max-w-md mx-auto flex items-center bg-white rounded-full p-1 shadow-lg"
            >
              <input
                type="email"
                required
                placeholder="Email..."
                className="flex-1 bg-transparent text-[#222222] pl-4 pr-2 py-2 text-xs focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#7eb83a] hover:bg-[#6da32d] text-white text-xs font-bold uppercase px-6 py-2 rounded-full transition-colors"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 9. WHITE FOOTER + DARK BOTTOM BAR */}
      <footer id="lien-he" className="bg-white pt-12 text-xs text-[#666666]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-4 space-y-2.5">
              <div className="mb-2">{renderBrandLogo()}</div>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#7eb83a] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#7eb83a] shrink-0" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#7eb83a] shrink-0 mt-0.5" />
                <span>
                  {primaryEmail}
                  <br />
                  {secondaryEmail}
                </span>
              </p>
            </div>

            {/* Col 2: MENU */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-sm font-bold uppercase text-[#222222] mb-3">
                MENU
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#trang-chu" className="text-[#7eb83a] font-semibold">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#7eb83a]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#7eb83a]">
                    Cửa hàng
                  </a>
                </li>
                <li>
                  <a href="#khuyen-mai" className="hover:text-[#7eb83a]">
                    Kiến thức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#7eb83a]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: SẢN PHẨM */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-sm font-bold uppercase text-[#222222] mb-3">
                SẢN PHẨM
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#san-pham" className="hover:text-[#7eb83a]">
                    Rau củ
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#7eb83a]">
                    Trái cây
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#7eb83a]">
                    Đồ uống
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#7eb83a]">
                    Đồ khô
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: INSTAGRAM */}
            <div className="lg:col-span-4">
              <h3 className="font-serif text-sm font-bold uppercase text-[#222222] mb-3">
                INSTAGRAM
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {(data.instagramPhotos || []).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden bg-[#f5f5f5]"
                  >
                    <img
                      src={img}
                      alt={`Hình thực tế ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] text-zinc-400 py-3.5 text-center text-[11px]">
          © Bản quyền thuộc về {brandName}. Thiết kế website bởi{" "}
          <span className="text-white font-semibold">{brandName}</span>
        </div>
      </footer>

      {/* FLOATING MESSENGER ICON */}
      <button
        type="button"
        onClick={() =>
          setSelectedProduct(data.featuredProducts?.[0] || null)
        }
        aria-label="Chat tư vấn"
        className="fixed right-4 bottom-6 z-40 w-10 h-10 rounded-full bg-[#0084ff] text-white shadow-lg flex items-center justify-center"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </button>

      {/* PRODUCT QUICK-VIEW MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full rounded-md overflow-hidden shadow-2xl"
          >
            <div className="aspect-video bg-[#f7f7f7] relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5">
              <span className="text-xs font-bold text-[#7eb83a]">
                Nguồn gốc: {selectedProduct.origin}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#222222] mt-1">
                {selectedProduct.name}
              </h3>
              <p className="text-base font-extrabold text-[#7eb83a] my-2">
                {selectedProduct.price} / {selectedProduct.unit}
              </p>
              <div className="flex gap-2.5 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-[#7eb83a] hover:bg-[#6da32d] text-white text-xs font-bold uppercase py-2.5 rounded-full"
                >
                  Đặt Mua Ngay
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="border border-[#7eb83a] text-[#7eb83a] text-xs font-bold uppercase px-4 py-2.5 rounded-full"
                >
                  Báo Giá Sỉ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
