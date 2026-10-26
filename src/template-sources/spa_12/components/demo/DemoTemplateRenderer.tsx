'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowUp,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Menu,
  RotateCcw,
  Search,
  ShoppingCart,
  Star,
  Store,
  Truck,
  User,
  X,
} from 'lucide-react';
import { SubpageData } from '@/components/demo/shared/SubpageLayout';
import {
  adaptClonedTemplateData,
  ClonedTemplateInput,
} from '@/lib/demo/clonedTemplateUtils';
import * as defaultMockData from '../../data/mockData';
import type { SummerProductItem } from '../../data/mockData';

interface DemoTemplateRendererProps {
  companyName?: string;
  subpageData?: SubpageData;
  templateInput?: ClonedTemplateInput;
}

function ProductShelfSection({
  id,
  title,
  products,
  onAddToCart,
}: {
  id: string;
  title: string;
  products: SummerProductItem[];
  onAddToCart: (product: SummerProductItem) => void;
}) {
  return (
    <section id={id} className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative mb-6 flex items-center justify-center">
          <h2 className="text-xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-2xl">
            {title}
          </h2>
          <a
            href="#khuyen-mai"
            className="absolute right-0 text-xs font-medium text-slate-500 hover:text-[#1182c5]"
          >
            Xem tất cả
          </a>
        </div>

        <div className="relative">
          {/* Decorative Left / Right Carousel Arrows */}
          <div className="pointer-events-none absolute -left-3 top-1/3 z-10 hidden -translate-y-1/2 lg:block">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow">
              <ChevronLeft className="h-4 w-4" />
            </span>
          </div>
          <div className="pointer-events-none absolute -right-3 top-1/3 z-10 hidden -translate-y-1/2 lg:block">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow">
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {products.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-lg border border-slate-100 bg-white p-3 transition hover:border-sky-200 hover:shadow-md"
              >
                <div>
                  <div className="relative h-48 overflow-hidden rounded bg-slate-50">
                    {item.discountBadge && (
                      <span className="absolute left-2 top-2 z-10 rounded bg-[#b91c1c] px-2 py-0.5 text-[10px] font-bold text-white">
                        {item.discountBadge}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-3 line-clamp-2 text-xs font-medium leading-snug text-slate-800 group-hover:text-[#1182c5]">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-2 pt-1">
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    {item.oldPrice && (
                      <span className="text-[11px] text-slate-400 line-through">
                        {item.oldPrice}
                      </span>
                    )}
                    <span className="text-xs font-extrabold text-[#dc2626]">
                      {item.price}
                    </span>
                  </div>

                  {item.rating && (
                    <div className="mt-1 flex items-center gap-1">
                      <div className="flex text-amber-400">
                        {Array.from({ length: item.rating }).map((_, idx) => (
                          <Star
                            key={idx}
                            className="h-3 w-3 fill-current"
                          />
                        ))}
                      </div>
                      {item.reviewCount && (
                        <span className="text-[10px] text-slate-400">
                          {item.reviewCount}
                        </span>
                      )}
                    </div>
                  )}

                  {item.swatches && item.swatches.length > 0 && (
                    <div className="mt-2 flex items-center gap-1.5">
                      {item.swatches.map((hex, i) => (
                        <span
                          key={i}
                          className="h-3.5 w-3.5 rounded-full border border-slate-300"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => onAddToCart(item)}
                    className="mt-2.5 w-full rounded bg-sky-50 py-1.5 text-[11px] font-bold text-[#1182c5] opacity-0 transition group-hover:opacity-100 hover:bg-[#1182c5] hover:text-white"
                  >
                    + Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DemoTemplateRenderer({
  companyName,
  subpageData,
  templateInput,
}: DemoTemplateRendererProps) {
  const mockData = useMemo(
    () =>
      adaptClonedTemplateData(defaultMockData, {
        companyName,
        subpageData,
        templateInput,
      }),
    [companyName, subpageData, templateInput]
  );

  const {
    business,
    CATEGORY_NAV,
    HERO_BANNERS,
    PROMO_PRODUCTS,
    NEWEST_PRODUCTS,
    POPULAR_PRODUCTS,
    ACCESSORY_PRODUCTS,
    FEATURED_BRANDS,
    INSTAGRAM_GALLERY,
    TRUST_PILLARS,
  } = mockData;

  const primaryPhone = business.phone?.[0] || '(+84) 0313-728-397';
  const primaryEmail = business.email?.[0] || 'info@themona.global';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<SummerProductItem[]>([]);
  const [cartToast, setCartToast] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleAddToCart = (product: SummerProductItem) => {
    setCartItems((prev) => [...prev, product]);
    setCartToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  return (
    <div
      id="top-page"
      className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#38a3dc] selection:text-white"
    >
      {/* 1. TOP CYAN PROMO BAR + MAIN WHITE HEADER + CATEGORY NAV BAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
        {/* Top Cyan Bar */}
        <div className="bg-[#38a3dc] py-1.5 text-center text-[11px] font-bold uppercase tracking-wider text-white">
          {business.promoTopBar}
        </div>

        {/* Main Header Row */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
          {/* Left Store & Order Links */}
          <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-wide text-slate-600 md:flex">
            <a
              href="#lien-he"
              className="flex items-center gap-1.5 hover:text-[#1182c5]"
            >
              <MapPin className="h-3.5 w-3.5 text-slate-500" />
              <span>HỆ THỐNG CỬA HÀNG</span>
            </a>
            <a
              href="#khuyen-mai"
              className="flex items-center gap-1.5 hover:text-[#1182c5]"
            >
              <ShoppingCart className="h-3.5 w-3.5 text-slate-500" />
              <span>THEO DÕI ĐƠN HÀNG</span>
            </a>
          </div>

          {/* Center Blue Emblem Logo ("Online SUMMER BEACH") */}
          <a href="#top-page" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1182c5] text-[#1182c5]">
              <ShoppingCart className="h-4 w-4" />
            </div>
            <div className="leading-none">
              <span className="block text-xl font-black tracking-tight text-[#1182c5]">
                {business.logoTitle}
              </span>
              <span className="block rounded bg-[#1182c5] px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-widest text-white">
                {business.logoSub}
              </span>
            </div>
          </a>

          {/* Right Icons (Search, Wishlist, Account, Cart Badge) */}
          <div className="flex items-center gap-3.5 text-slate-700">
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              className="hover:text-[#1182c5]"
              aria-label="Tìm kiếm"
            >
              <Search className="h-4 w-4" />
            </button>
            <a
              href="#pho-bien"
              className="hidden hover:text-[#1182c5] sm:inline-block"
              aria-label="Yêu thích"
            >
              <Heart className="h-4 w-4" />
            </a>
            <a
              href="#lien-he"
              className="hidden hover:text-[#1182c5] sm:inline-block"
              aria-label="Tài khoản"
            >
              <User className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() =>
                setCartToast(
                  cartItems.length > 0
                    ? `Giỏ hàng hiện có ${cartItems.length} sản phẩm.`
                    : 'Giỏ hàng của bạn đang trống. Hãy chọn sản phẩm bên dưới!'
                )
              }
              className="relative flex items-center hover:text-[#1182c5]"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className=" -right-2 -top-2 absolute flex h-4 w-4 items-center justify-center rounded-full bg-[#1182c5] text-[10px] font-bold text-white">
                {cartItems.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Search Input Drawer */}
        {searchOpen && (
          <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5">
            <div className="mx-auto flex max-w-xl items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kem chống nắng, vali du lịch, kính bơi, phụ kiện spa biển..."
                className="w-full rounded border border-slate-200 bg-white px-3 py-1.5 text-xs focus:border-[#1182c5] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded bg-[#1182c5] px-4 py-1.5 text-xs font-bold text-white"
              >
                Tìm
              </button>
            </div>
          </div>
        )}

        {/* Category Navigation Bar */}
        <div className="border-t border-slate-100 bg-white">
          <nav className="mx-auto hidden max-w-6xl items-center justify-center gap-6 px-4 py-2.5 text-xs font-semibold text-slate-700 lg:flex">
            {CATEGORY_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#1182c5]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {mobileMenuOpen && (
            <div className="grid grid-cols-2 gap-2 border-t border-slate-100 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 lg:hidden">
              {CATEGORY_NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#1182c5]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {cartToast && (
          <div className="bg-emerald-600 px-4 py-1.5 text-center text-xs font-semibold text-white">
            <span>{cartToast}</span>
            <button
              type="button"
              onClick={() => setCartToast(null)}
              className="ml-3 underline"
            >
              Đóng
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO SPLIT BANNER ("The Mona Summer Sale 50% OFF" + "The Mona New Collection") + BLUE MARQUEE BAR */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Tropical Pool Banner */}
          <div className="relative flex min-h-[340px] items-center overflow-hidden bg-sky-200 p-8 sm:min-h-[420px] sm:p-12">
            <img
              src={HERO_BANNERS.leftBanner.image}
              alt={HERO_BANNERS.leftBanner.mainTitle}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/55 via-sky-800/25 to-transparent" />

            <div className="relative z-10 max-w-md">
              <span className="font-serif text-3xl font-bold italic text-[#ffdd3c] drop-shadow sm:text-4xl">
                {HERO_BANNERS.leftBanner.scriptTitle}
              </span>
              <h1 className="mt-1 font-serif text-4xl font-black italic leading-none text-[#ffdd3c] drop-shadow-md sm:text-6xl">
                {HERO_BANNERS.leftBanner.mainTitle}
              </h1>
              <div className="mt-4 inline-block rounded bg-[#ffdd3c] px-4 py-1.5 text-lg font-black uppercase tracking-wider text-slate-900 shadow">
                {HERO_BANNERS.leftBanner.badge}
              </div>
              <p className="mt-3 text-xs font-medium text-white drop-shadow">
                {HERO_BANNERS.leftBanner.subtitle}
              </p>
            </div>
          </div>

          {/* Right Tropical Palm & Luggage Banner */}
          <div className="relative flex min-h-[340px] items-center justify-end overflow-hidden bg-cyan-700 p-8 text-right sm:min-h-[420px] sm:p-12">
            <img
              src={HERO_BANNERS.rightBanner.image}
              alt={HERO_BANNERS.rightBanner.mainTitle}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-teal-950/65 via-teal-900/30 to-transparent" />

            <div className="relative z-10 max-w-md">
              <span className="font-serif text-3xl font-bold italic text-[#ffdd3c] drop-shadow sm:text-4xl">
                {HERO_BANNERS.rightBanner.scriptTitle}
              </span>
              <h2 className="mt-1 font-serif text-4xl font-black italic leading-none text-[#ffdd3c] drop-shadow-md sm:text-6xl">
                {HERO_BANNERS.rightBanner.mainTitle}
              </h2>
              <p className="mt-3 text-xs font-medium text-white drop-shadow">
                {HERO_BANNERS.rightBanner.subtitle}
              </p>
              <a
                href="#moi-nhat"
                className="mt-4 inline-block rounded-full bg-[#ffdd3c] px-6 py-2 text-xs font-extrabold uppercase tracking-wider text-slate-900 shadow transition hover:bg-white"
              >
                Khám phá ngay
              </a>
            </div>
          </div>
        </div>

        {/* Blue Ticker Strip ("SUMMER SALE 50% OFF") */}
        <div className="bg-[#0d6efd] py-2.5 text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-4 px-4 text-xs font-extrabold uppercase tracking-wider">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffdd3c]" />
                <span>SUMMER SALE 50% OFF</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: KHUYẾN MÃI (5-Column Product Grid) */}
      <ProductShelfSection
        id="khuyen-mai"
        title="KHUYẾN MÃI"
        products={PROMO_PRODUCTS}
        onAddToCart={handleAddToCart}
      />

      {/* 4. SECTION 2: MỚI NHẤT (5-Column Product Grid) */}
      <ProductShelfSection
        id="moi-nhat"
        title="MỚI NHẤT"
        products={NEWEST_PRODUCTS}
        onAddToCart={handleAddToCart}
      />

      {/* 5. SECTION 3: PHỔ BIẾN (5-Column Product Grid) */}
      <ProductShelfSection
        id="pho-bien"
        title="PHỔ BIẾN"
        products={POPULAR_PRODUCTS}
        onAddToCart={handleAddToCart}
      />

      {/* 6. SECTION 4: Phụ kiện thời trang (5-Column Product Grid) */}
      <ProductShelfSection
        id="phu-kien"
        title="Phụ kiện thời trang"
        products={ACCESSORY_PRODUCTS}
        onAddToCart={handleAddToCart}
      />

      {/* 7. SECTION 5: DUAL PROMO BANNER ROW 1 + CENTERED EDITORIAL + DUAL PROMO BANNER ROW 2 */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4">
          {/* Top 2 Promo Banners */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative flex h-60 items-center overflow-hidden rounded-xl bg-sky-100 p-8 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
                alt="Summer Sale 50%"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-sky-950/30" />
              <div className="relative z-10">
                <span className="font-serif text-4xl font-black italic text-white drop-shadow">
                  Summer Sale
                </span>
                <span className="mt-2 block w-fit rounded-full bg-white px-4 py-1 text-sm font-extrabold text-orange-500 shadow">
                  50% OFF
                </span>
              </div>
            </div>

            <div className="relative flex h-60 items-center justify-between overflow-hidden rounded-xl bg-amber-400 p-8 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=900&q=80"
                alt="Special Offer 50% Off"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="relative z-10 ml-auto rounded-xl bg-white/95 p-5 text-center shadow-lg">
                <span className="block text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  SPECIAL OFFER
                </span>
                <span className="mt-0.5 block text-xs font-bold text-amber-600">
                  Summer Sale
                </span>
                <span className="mt-1 block text-2xl font-black text-slate-900">
                  50% OFF
                </span>
              </div>
            </div>
          </div>

          {/* Centered Editorial Heading ("Khám Phá Thế Giới Đồ Biển và Du Lịch") */}
          <div className="mx-auto my-12 max-w-3xl text-center">
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              Khám Phá Thế Giới Đồ Biển, Chăm Sóc Da và Du Lịch
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-sm">
              Chúng tôi cung cấp một loạt các sản phẩm đa dạng, từ đồ tắm thời
              trang, kem chống nắng khoáng chất, tinh dầu phục hồi da sau nắng
              đến vali du lịch biển và túi xách tiện lợi, giúp bạn chuẩn bị cho
              những chuyến đi đáng nhớ bên bờ biển hay những kỳ nghỉ tuyệt vời.
              Hãy để chúng tôi đồng hành cùng bạn trong hành trình tạo nên những
              kỷ niệm tuyệt vời.
            </p>
          </div>

          {/* Bottom 2 Promo Banners */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative flex h-60 items-center overflow-hidden rounded-xl bg-[#0b7dda] p-8 text-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
                alt="Summer Big Sale 50% Off"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />
              <div className="relative z-10">
                <span className="block text-2xl font-black uppercase tracking-wider">
                  SUMMER
                </span>
                <span className="font-serif text-3xl italic text-[#ffdd3c]">
                  Big Sale
                </span>
                <span className="mt-2 block w-fit rounded border border-white/60 bg-white/15 px-4 py-1 text-lg font-black backdrop-blur-sm">
                  50% OFF
                </span>
              </div>
            </div>

            <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-xl bg-cyan-500 p-8 text-center text-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80"
                alt="Summer Sale Collection"
                className="absolute inset-0 h-full w-full object-cover opacity-55"
              />
              <div className="relative z-10">
                <span className="font-serif text-4xl font-bold italic drop-shadow-md sm:text-5xl">
                  Summer Sale
                </span>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-amber-200">
                  Beach Spa & Resort Essentials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: "Uy tín - đảm bảo / THƯƠNG HIỆU NỔI BẬT" (4x2 Grid of 8 Brands) */}
      <section id="thuong-hieu" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="font-serif text-sm italic text-rose-400">
              Uy tín - đảm bảo
            </span>
            <h2 className="mt-1 text-xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-2xl">
              THƯƠNG HIỆU NỔI BẬT
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {FEATURED_BRANDS.map((brand) => (
              <div key={brand.id} className="group text-center">
                <div className="h-40 overflow-hidden rounded-xl bg-slate-100 shadow-sm sm:h-44">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2.5 text-xs font-extrabold text-slate-800">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-slate-400">{brand.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: "Thư viện hình ảnh / Instagram" (6-Photo Strip) + "Tại sao chọn chúng tôi ?" (4 Blue Line-Icon Columns) */}
      <section className="bg-rose-50/40 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="font-serif text-sm italic text-rose-400">
              Thư viện hình ảnh
            </span>
            <h2 className="mt-0.5 text-xl font-extrabold text-slate-900 sm:text-2xl">
              Instagram
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {INSTAGRAM_GALLERY.map((photo, index) => (
              <div
                key={index}
                className="group h-44 overflow-hidden bg-slate-200"
              >
                <img
                  src={photo}
                  alt={`Instagram lookbook ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tại sao chọn chúng tôi ? */}
      <section id="tai-sao-chon" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              Tại sao chọn chúng tôi ?
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              <strong>Chất lượng vượt trội:</strong> Mỗi sản phẩm của chúng tôi
              được chọn lọc từ những nguồn nguyên liệu tốt nhất, đảm bảo không
              chỉ vẻ đẹp mà còn tính bền bỉ và an toàn cho làn da của bạn và gia
              đình.
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              <strong>Thiết kế tinh tế:</strong> Chúng tôi hiểu rằng phong cách
              không chỉ nằm ở bề ngoài. Những sản phẩm của chúng tôi được thiết
              kế để phản ánh cá tính và gu thẩm mỹ của bạn, khiến bạn nổi bật
              trong mọi khoảnh khắc bên bãi biển.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.id} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-[#1182c5]">
                  {pillar.iconKey === 'warranty' && (
                    <CheckCircle2 className="h-6 w-6" />
                  )}
                  {pillar.iconKey === 'authentic' && (
                    <Store className="h-6 w-6" />
                  )}
                  {pillar.iconKey === 'shipping' && (
                    <Truck className="h-6 w-6" />
                  )}
                  {pillar.iconKey === 'return' && (
                    <RotateCcw className="h-6 w-6" />
                  )}
                </div>
                <h3 className="mt-3 text-xs font-extrabold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLEAN WHITE 4-COLUMN FOOTER */}
      <footer id="lien-he" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Danh mục */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                Danh mục
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#top-page" className="hover:text-[#1182c5]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#tai-sao-chon" className="hover:text-[#1182c5]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#thuong-hieu" className="hover:text-[#1182c5]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#1182c5]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: Liên kết */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                Liên kết
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#tai-sao-chon" className="hover:text-[#1182c5]">
                    Điều khoản và điều kiện
                  </a>
                </li>
                <li>
                  <a href="#tai-sao-chon" className="hover:text-[#1182c5]">
                    Chính sách thanh toán
                  </a>
                </li>
                <li>
                  <a href="#tai-sao-chon" className="hover:text-[#1182c5]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#tai-sao-chon" className="hover:text-[#1182c5]">
                    Chính sách giao hàng
                  </a>
                </li>
                <li>
                  <a href="#tai-sao-chon" className="hover:text-[#1182c5]">
                    Chính sách đổi trả
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Liên hệ */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                Liên hệ
              </h3>
              <p className="mt-3 text-xs text-slate-500">
                Tìm hệ thống cửa hàng{' '}
                <a
                  href="#lien-he"
                  className="font-semibold underline hover:text-[#1182c5]"
                >
                  Tại đây
                </a>
              </p>
              <p className="mt-2 text-xs font-bold text-slate-800">
                {primaryPhone}
              </p>
              <p className="mt-1 text-xs font-bold text-slate-800">
                {primaryEmail}
              </p>
            </div>

            {/* Col 4: Thông tin */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                Thông tin
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                <strong>Địa chỉ:</strong> {business.address}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                <strong>Giờ hoạt động:</strong> {business.workingHours}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 py-4 text-center text-[11px] text-slate-500">
          © Thiết kế và lập trình bởi{' '}
          <strong className="text-purple-700">MONA.Media / Website</strong> •{' '}
          {business.name}
        </div>
      </footer>

      {/* Floating Scroll-To-Top Blue Circle Button (Matching right edge of screenshot) */}
      <a
        href="#top-page"
        className="fixed bottom-6 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#5aa9e6] text-white shadow-lg transition hover:bg-[#1182c5]"
        aria-label="Lên đầu trang"
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </div>
  );
}

export default DemoTemplateRenderer;
