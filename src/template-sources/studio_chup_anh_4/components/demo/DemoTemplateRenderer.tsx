"use client";

import React, { useState } from "react";
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  ChevronDown,
  Truck,
  Clock,
  CircleDollarSign,
  BadgePercent,
  MapPin,
  Phone,
  Mail,
  Globe,
  Share2,
  X,
  Menu,
  CheckCircle2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  studioChupAnh4DefaultData,
  StudioChupAnh4Data,
  StudioChupAnh4Product,
} from "@/template-sources/studio_chup_anh_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: StudioChupAnh4Data = adaptClonedTemplateData(
    studioChupAnh4DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>(["fl-1"]);
  const [cartCount, setCartCount] = useState(1);
  const [selectedProductModal, setSelectedProductModal] =
    useState<StudioChupAnh4Product | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    note: "",
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const topProducts = data.products.filter((p) => p.isTopProduct).slice(0, 4);
  const primaryPhone = data.business.phone?.[0] || "(028) 800 456 789";
  const primaryEmail = data.business.email?.[0] || "contact@flodabridal.vn";

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name.trim() || !bookingForm.phone.trim()) return;
    setCartCount((c) => c + 1);
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-[#c81e24] selection:text-white">
      {/* 1. TOP UTILITY STRIP + WHITE NAVIGATION BAR */}
      <div className="border-b border-gray-100 bg-white text-[11px] text-zinc-500">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
          <span>
            {data.business.aboutTitle ||
              `Chào mừng đến với cửa hàng trực tuyến ${data.business.name}`}
          </span>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 cursor-pointer hover:text-zinc-800">
              <span>Ngôn ngữ: Tiếng Việt</span>
              <ChevronDown className="w-3 h-3" />
            </span>
            <span className="text-gray-200">|</span>
            <div className="flex items-center gap-2.5 text-zinc-400">
              <a href="#lien-he" className="hover:text-[#c81e24]">
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a href="#lien-he" className="hover:text-[#c81e24]">
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main White Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="#trang-chu"
            className="text-2xl sm:text-[26px] font-bold tracking-tight text-zinc-900 focus:outline-none"
          >
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-9 w-auto object-contain"
              />
            ) : (
              data.business.name.split(" ")[0] || "Floda"
            )}
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-zinc-700">
            <a
              href="#trang-chu"
              className="text-[#c81e24] transition-colors"
            >
              TRANG CHỦ
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#c81e24] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#san-pham-moi"
              className="hover:text-[#c81e24] transition-colors inline-flex items-center gap-1"
            >
              <span>CỬA HÀNG</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="#bo-suu-tap"
              className="hover:text-[#c81e24] transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#c81e24] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          <div className="flex items-center gap-4 text-zinc-800">
            <a
              href="#san-pham-moi"
              aria-label="Tìm kiếm"
              className="hover:text-[#c81e24] transition-colors"
            >
              <Search className="w-4 h-4" />
            </a>
            <a
              href="#san-pham-moi"
              aria-label="Yêu thích"
              className="relative hover:text-[#c81e24] transition-colors"
            >
              <Heart className="w-4 h-4 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => {
                setBookingSuccess(false);
                setSelectedProductModal(data.products[0]);
              }}
              aria-label="Tài khoản"
              className="hover:text-[#c81e24] transition-colors cursor-pointer"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setBookingSuccess(false);
                setSelectedProductModal(data.products[0]);
              }}
              aria-label="Giỏ hàng"
              className="relative hover:text-[#c81e24] transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-[#c81e24] text-white text-[8px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-zinc-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2 text-xs font-bold uppercase tracking-wider">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#c81e24]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#san-pham-moi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              SẢN PHẨM MỚI
            </a>
            <a
              href="#san-pham-hang-dau"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              SẢN PHẨM HÀNG ĐẦU
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. LAVENDER-BLUSH HERO (#f4dfe9) */}
      <section
        id="trang-chu"
        className="bg-gradient-to-r from-[#f3dee9] via-[#f6e4ee] to-[#f1d8e6] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Left Copy */}
          <div className="md:col-span-6 space-y-3">
            <p className="font-serif italic text-lg sm:text-xl text-[#c81e24]">
              {data.hero.eyebrow || "Món quà Valentine"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-[1.22] whitespace-pre-line">
              {data.hero.title}
            </h1>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#san-pham-moi"}
                className="inline-block bg-[#c81e24] hover:bg-[#a6161b] text-white text-xs font-bold px-6 py-2.5 transition-colors shadow-xs"
              >
                {data.hero.ctaText || "Mua Ngay"}
              </a>
            </div>
          </div>

          {/* Right Bouquet Visual */}
          <div className="md:col-span-6 flex justify-center md:justify-end">
            <div className="relative w-64 sm:w-80 md:w-88 aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white/60">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3 PROMO CARDS + 4 SERVICE TRUST BADGES */}
      <section id="dich-vu" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* 3 Promo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {data.topPromos.map((promo) => (
              <a
                key={promo.id}
                href="#san-pham-moi"
                className="group relative aspect-[16/10] overflow-hidden bg-zinc-100 flex items-center justify-center text-center"
              >
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-white/40 group-hover:bg-white/25 transition-colors" />
                <div className="relative z-10 px-4">
                  <p className="font-serif italic text-sm text-[#c81e24]">
                    {promo.scriptEyebrow}
                  </p>
                  <h3 className="text-base font-bold text-zinc-900 mt-0.5">
                    {promo.title}
                  </h3>
                  <span className="inline-block mt-1.5 text-[11px] font-bold text-zinc-900 border-b border-zinc-900 pb-0.5">
                    {promo.ctaText}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* 4 Service Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-4">
            {data.trustPerks.map((perk) => (
              <div key={perk.id} className="flex items-center gap-3">
                <div className="text-zinc-800 shrink-0">
                  {perk.icon === "truck" && (
                    <Truck className="w-7 h-7 stroke-[1.4]" />
                  )}
                  {perk.icon === "clock" && (
                    <Clock className="w-7 h-7 stroke-[1.4]" />
                  )}
                  {perk.icon === "dollar" && (
                    <CircleDollarSign className="w-7 h-7 stroke-[1.4]" />
                  )}
                  {perk.icon === "percent" && (
                    <BadgePercent className="w-7 h-7 stroke-[1.4]" />
                  )}
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-zinc-900">
                    {perk.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500">{perk.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "SẢN PHẨM MỚI" (4x2 BORDERED GRID WITH CIRCULAR BLACK DISCOUNT BADGES) */}
      <section id="san-pham-moi" className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
              Sản Phẩm Mới
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              {data.hero.subtitle ||
                "Sản phẩm mới, ý tưởng mới, phong cách mới, vẻ đẹp mới"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {data.products.slice(0, 8).map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setBookingSuccess(false);
                  setSelectedProductModal(item);
                }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Bordered White Square Card */}
                <div className="relative aspect-[4/5] border border-gray-100 bg-white p-4 mb-2.5 flex items-center justify-center overflow-hidden group-hover:border-gray-300 transition-colors">
                  {item.discountBadge && (
                    <span className="absolute top-2.5 left-2.5 z-10 w-8 h-8 rounded-full bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center">
                      {item.discountBadge}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xs font-bold text-zinc-800 group-hover:text-[#c81e24] transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 text-xs mt-0.5">
                  {item.oldPrice && (
                    <span className="line-through text-zinc-400 text-[11px]">
                      {item.oldPrice}
                    </span>
                  )}
                  <span className="font-bold text-[#c81e24]">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => {
                setBookingSuccess(false);
                setSelectedProductModal(data.products[0]);
              }}
              className="bg-[#c81e24] hover:bg-[#a6161b] text-white text-xs font-bold px-6 py-2.5 transition-colors cursor-pointer"
            >
              Xem Thêm Sản Phẩm
            </button>
          </div>
        </div>
      </section>

      {/* 5. 2 PASTEL PINK SPLIT BANNERS (#f5dce1 WITH WHITE INNER FRAME BORDER) */}
      <section id="bo-suu-tap" className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.splitBanners.map((banner) => (
              <div
                key={banner.id}
                className="relative bg-[#f3d9df] p-3 overflow-hidden group"
              >
                <div className="border border-white/80 p-5 sm:p-7 flex items-center justify-between gap-4 relative z-10 min-h-[190px]">
                  <div className="w-36 sm:w-44 h-36 shrink-0 overflow-hidden rounded-xs shadow-sm">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 pl-2">
                    <p className="font-serif italic text-base text-[#c81e24]">
                      {banner.scriptEyebrow}
                    </p>
                    <h3 className="text-xl font-bold text-zinc-900 mt-0.5 mb-2">
                      {banner.title}
                    </h3>
                    <a
                      href="#san-pham-hang-dau"
                      className="inline-block text-xs font-bold text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-[#c81e24] hover:border-[#c81e24]"
                    >
                      {banner.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "SẢN PHẨM HÀNG ĐẦU" (4-COLUMN ROW) */}
      <section id="san-pham-hang-dau" className="py-8 pb-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
              Sản Phẩm Hàng Đầu
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Những sản phẩm hàng đầu của cửa hàng
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {topProducts.map((item) => (
              <div
                key={`top-${item.id}`}
                onClick={() => {
                  setBookingSuccess(false);
                  setSelectedProductModal(item);
                }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] border border-gray-100 bg-white p-4 mb-2.5 flex items-center justify-center overflow-hidden group-hover:border-gray-300 transition-colors">
                  {item.discountBadge && (
                    <span className="absolute top-2.5 left-2.5 z-10 w-8 h-8 rounded-full bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center">
                      {item.discountBadge}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xs font-bold text-zinc-800 group-hover:text-[#c81e24] transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 text-xs mt-0.5">
                  {item.oldPrice && (
                    <span className="line-through text-zinc-400 text-[11px]">
                      {item.oldPrice}
                    </span>
                  )}
                  <span className="font-bold text-[#c81e24]">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH 6-PHOTO DESTINATION & BRIDAL STRIP */}
      <section className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {data.galleryStrip.map((imgUrl, idx) => (
          <div
            key={idx}
            className="aspect-square overflow-hidden bg-zinc-200 group"
          >
            <img
              src={imgUrl}
              alt={`Bộ sưu tập Floda ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </section>

      {/* 8. CLEAN WHITE 4-COLUMN FOOTER + GRAY COPYRIGHT BAR */}
      <footer id="lien-he" className="bg-white pt-12 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-zinc-600">
            {/* Col 1: Liên hệ (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-sm font-bold text-zinc-900 mb-3">Liên hệ</h4>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-800 shrink-0 mt-0.5" />
                <span>Địa chỉ: {data.business.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-800 shrink-0" />
                <span>Điện Thoại: {primaryPhone}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-800 shrink-0" />
                <span>Mail: {primaryEmail}</span>
              </p>

              {/* Payment Badges */}
              <div className="pt-2 flex items-center gap-1.5">
                {["AMEX", "PayPal", "MasterCard", "Discover", "VISA"].map(
                  (card) => (
                    <span
                      key={card}
                      className="px-2 py-1 rounded-xs bg-zinc-100 border border-gray-200 text-[9px] font-extrabold text-zinc-700"
                    >
                      {card}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Col 2: Danh Mục (2 Cols) */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-sm font-bold text-zinc-900 mb-3">Danh Mục</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <a href="#san-pham-moi" className="hover:text-[#c81e24]">
                    Hoa cưới
                  </a>
                </li>
                <li>
                  <a href="#san-pham-moi" className="hover:text-[#c81e24]">
                    Hoa Sale
                  </a>
                </li>
                <li>
                  <a href="#san-pham-moi" className="hover:text-[#c81e24]">
                    Hoa của mẹ
                  </a>
                </li>
                <li>
                  <a href="#san-pham-moi" className="hover:text-[#c81e24]">
                    Hoa Valentine
                  </a>
                </li>
                <li>
                  <a href="#san-pham-moi" className="hover:text-[#c81e24]">
                    Hoa Tựu Trường
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Mục Lục (2 Cols) */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-sm font-bold text-zinc-900 mb-3">Mục Lục</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <a href="#trang-chu" className="hover:text-[#c81e24]">
                    Trang Chủ
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#c81e24]">
                    Giới Thiệu
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#c81e24]">
                    Liên Hệ
                  </a>
                </li>
                <li>
                  <a href="#san-pham-moi" className="hover:text-[#c81e24]">
                    Giao Dịch
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#c81e24]">
                    Vận Chuyển
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Liên Kết (3 Cols) */}
            <div className="lg:col-span-3 space-y-2.5">
              <h4 className="text-sm font-bold text-zinc-900 mb-3">Liên Kết</h4>
              <ul className="space-y-2 text-zinc-500">
                <li>
                  <a href="#lien-he" className="hover:text-[#c81e24]">
                    Tài Khoản
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#c81e24]">
                    Địa Chỉ Cửa Hàng
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#c81e24]">
                    Theo Dõi Đơn Hàng
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#c81e24]">
                    Hướng Dẫn Đặt Hoa
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#c81e24]">
                    Liên Hệ Tư Vấn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#e8e8e8] py-3 text-center text-[11px] text-zinc-600">
          © Bản quyền thuộc về <strong>{data.business.name}</strong>. Thiết kế
          bởi <strong>TaviWeb</strong>.
        </div>
      </footer>

      {/* PRODUCT ORDER MODAL */}
      {selectedProductModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProductModal(null)}
        >
          <div
            className="bg-white max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#c81e24] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Đặt Hoa &amp; Lịch Chụp Hình — {data.business.name}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedProductModal(null)}
                className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {bookingSuccess ? (
                <div className="text-center py-4 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">
                    Đã xác nhận đơn đặt hàng!
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Cảm ơn <strong>{bookingForm.name}</strong>. Cửa hàng{" "}
                    <strong>{data.business.name}</strong> sẽ gọi lại số{" "}
                    <strong>{bookingForm.phone}</strong> ngay.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(null)}
                    className="bg-[#c81e24] text-white text-xs font-bold px-6 py-2"
                  >
                    Đóng
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleBookingSubmit}
                  className="space-y-3 text-xs"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <img
                      src={selectedProductModal.image}
                      alt={selectedProductModal.name}
                      className="w-16 h-16 object-cover border border-gray-100"
                    />
                    <div>
                      <h4 className="font-bold text-zinc-900">
                        {selectedProductModal.name}
                      </h4>
                      <p className="font-bold text-[#c81e24] mt-0.5">
                        {selectedProductModal.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-500 leading-relaxed">
                    {selectedProductModal.description}
                  </p>
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên của bạn *"
                    value={bookingForm.name}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, name: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#c81e24]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại nhận hoa *"
                    value={bookingForm.phone}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#c81e24]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#c81e24] hover:bg-[#a6161b] text-white font-bold uppercase tracking-wider py-2.5 cursor-pointer"
                  >
                    XÁC NHẬN ĐẶT MUA
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
