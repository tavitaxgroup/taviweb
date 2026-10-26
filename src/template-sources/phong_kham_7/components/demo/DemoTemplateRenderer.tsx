"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronRight,
  Star,
  HelpCircle,
  Newspaper,
  Clock,
  ThumbsUp,
  Smile,
  Truck,
  RotateCcw,
  ShieldCheck,
  Phone,
  MessageCircle,
  CheckCircle2,
  Baby,
  Heart,
  Gift,
  Sparkles,
  Utensils,
  Shirt,
  Moon,
  X
} from "lucide-react";
import { adaptClonedTemplateData, type ClonedTemplateInput } from "@/lib/demo/clonedTemplateUtils";
import {
  phongKham7DefaultData,
  type PhongKham7Data,
  type PhongKham7Product
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  companyName?: string;
}

export function DemoTemplateRenderer({ data, companyName }: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData(phongKham7DefaultData, {
    ...(data || {}),
    ...(companyName ? { companyName } : {})
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalText, setCartTotalText] = useState("0 đ");
  const [toast, setToast] = useState<string | null>(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [classModalOpen, setClassModalOpen] = useState<string | null>(null);
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [classSubmitted, setClassSubmitted] = useState(false);

  const handleAddProduct = (prod: PhongKham7Product) => {
    setCartCount((prev) => prev + 1);
    setCartTotalText(prod.price);
    setToast(`Đã thêm "${prod.name}" vào giỏ hàng!`);
    setTimeout(() => setToast(null), 2600);
  };

  const renderProductCard = (prod: PhongKham7Product) => (
    <div
      key={prod.id}
      onClick={() => handleAddProduct(prod)}
      className="group relative flex cursor-pointer flex-col justify-between border-b border-r border-gray-100 bg-white p-3.5 text-center transition hover:shadow-md"
    >
      {prod.discountBadge && (
        <span className="absolute left-2.5 top-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff6600] text-[10px] font-bold text-white shadow-xs">
          {prod.discountBadge}
        </span>
      )}

      <div>
        <div className="mb-2.5 flex h-32 w-full items-center justify-center overflow-hidden bg-white p-1.5">
          <img
            src={prod.image}
            alt={prod.name}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
          {prod.category}
        </p>

        <h4 className="mt-1 line-clamp-2 min-h-[32px] text-xs font-medium leading-snug text-gray-800 group-hover:text-[#0072bc]">
          {prod.name}
        </h4>
      </div>

      <div className="mt-1.5">
        {prod.rating && (
          <div className="mb-1 flex items-center justify-center gap-0.5 text-[#ff9800]">
            {Array.from({ length: prod.rating }).map((_, idx) => (
              <Star key={idx} className="h-3 w-3 fill-current" />
            ))}
          </div>
        )}
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs">
          {prod.oldPrice && (
            <span className="text-[11px] text-gray-400 line-through">{prod.oldPrice}</span>
          )}
          <span className="font-bold text-gray-900">{prod.price}</span>
        </div>
      </div>
    </div>
  );

  const sidebarIcons = [
    Utensils,
    Sparkles,
    Shirt,
    Moon,
    ShieldCheck,
    Baby,
    Heart,
    Gift,
    ThumbsUp
  ];

  return (
    <div id="top" className="min-h-screen bg-[#f5f6f8] font-sans text-gray-800 antialiased">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded bg-[#0072bc] px-4 py-3 text-xs font-semibold text-white shadow-xl">
          <CheckCircle2 className="h-4 w-4 text-[#ffd43b]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Free Prenatal / Weaning Class Registration Modal */}
      {classModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setClassModalOpen(null);
                setClassSubmitted(false);
              }}
              className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded bg-[#e0f2fe] px-2.5 py-1 text-[11px] font-bold text-[#0072bc]">
              ĐĂNG KÝ LỚP HỌC MIỄN PHÍ CÙNG BÁC SĨ NHI
            </span>
            <h3 className="mt-2 text-base font-extrabold text-gray-900">{classModalOpen}</h3>

            {classSubmitted ? (
              <div className="mt-4 rounded bg-green-50 p-4 text-center text-xs text-green-800">
                <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <p className="font-bold">Đăng ký thành công!</p>
                <p className="mt-1">
                  Bộ phận CSKH Nhi Khoa ({merged.business.phone[0]}) sẽ liên hệ gửi lịch học gần
                  nhất cho ba mẹ.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setClassSubmitted(true);
                }}
                className="mt-4 space-y-3"
              >
                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-700">
                    Họ tên Mẹ / Bố *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Nhập họ và tên..."
                    className="w-full rounded border border-gray-300 px-3 py-2 text-xs focus:border-[#0072bc] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-700">
                    Số điện thoại nhận vé mời *
                  </label>
                  <input
                    type="tel"
                    required
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="Ví dụ: 0912 931 028"
                    className="w-full rounded border border-gray-300 px-3 py-2 text-xs focus:border-[#0072bc] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-[#ff6600] py-2.5 text-xs font-bold uppercase text-white hover:bg-[#e65c00]"
                >
                  Hoàn Tất Đăng Ký Miễn Phí
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Right Messenger Icon & "We are here!" badge */}
      <div className="fixed right-3 top-1/3 z-40 hidden flex-col items-end gap-3 xl:flex">
        <a
          href="#hoi-dap-tin-tuc"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0084ff] text-white shadow-lg transition hover:scale-110"
          title="Chat tư vấn Bác sĩ Nhi & Mẹ Bé"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <div className="rounded-lg border-2 border-[#0072bc] bg-white px-2.5 py-1 text-center shadow-md">
          <span className="block font-serif text-xs font-black italic leading-none text-[#0072bc]">
            We are
          </span>
          <span className="font-serif text-sm font-black italic leading-none text-[#0288d1]">
            here!
          </span>
        </div>
      </div>

      {/* ==================== 1. TOP UTILITY STRIP ==================== */}
      <div className="border-b border-gray-200 bg-[#f8f9fa] text-[11px] text-gray-600">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-2 px-4 py-1.5">
          <div className="flex flex-wrap items-center gap-3">
            <a href="#he-thong-cua-hang" className="hover:text-[#0072bc]">
              {merged.topSystemCount} &gt;
            </a>
            <span>
              Hotline:{" "}
              <strong className="font-bold text-[#ff6600]">{merged.business.phone[0]}</strong> -
              CSKH: <strong className="font-bold text-[#ff6600]">{merged.cskhPhone}</strong>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>
              Bạn đang xem tại: <strong className="text-gray-800">{merged.regionLabel}</strong>
            </span>
            <a href="#footer-contact" className="text-[#0072bc] hover:underline">
              Liên hệ
            </a>
            <a href="#hoi-dap-tin-tuc" className="hover:text-[#0072bc]">
              Thêm
            </a>
          </div>
        </div>
      </div>

      {/* ==================== 2. MAIN WHITE HEADER & NAV BAR ==================== */}
      <header className="bg-white shadow-xs">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-4 py-3.5">
          {/* Playful Red/Orange MONA KIDS SHOP Logo */}
          <a href="#top" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-[#ef4444] sm:text-3xl">
              MONA <span className="text-[#ff6600]">KIDS</span>{" "}
              <span className="text-[#dc2626]">SHOP</span>
            </span>
          </a>

          {/* Center Orange-Bordered Search Bar */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="order-3 flex h-9 w-full max-w-md overflow-hidden rounded-xs border border-[#ff6600] bg-white lg:order-2"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Bố mẹ muốn tìm gì hôm nay?"
              className="flex-1 px-3 text-xs text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-[#ff6600] px-3.5 text-white hover:bg-[#e65c00]"
              aria-label="Tìm kiếm"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* Right Auth & Cart */}
          <div className="order-2 flex items-center gap-4 text-xs text-gray-600 lg:order-3">
            <button type="button" className="hover:text-[#0072bc]">
              Đăng nhập / Đăng ký
            </button>
            <span className="text-gray-300">|</span>
            <button
              type="button"
              onClick={() => setToast(`Giỏ hàng đang có ${cartCount} sản phẩm (${cartTotalText})`)}
              className="flex items-center gap-1.5 font-semibold text-gray-700 hover:text-[#ff6600]"
            >
              <span>Giỏ hàng / {cartTotalText}</span>
              <div className="relative">
                <ShoppingCart className="h-4 w-4 text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff6600] text-[9px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Navigation Bar with Blue DANH MỤC SẢN PHẨM header */}
        <div className="border-t border-gray-200 bg-white">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4">
            <div className="flex w-[230px] items-center gap-2 bg-[#0072bc] px-3.5 py-2.5 text-xs font-bold uppercase text-white">
              <Menu className="h-4 w-4" />
              <span>DANH MỤC SẢN PHẨM</span>
            </div>

            <ul className="hidden items-center gap-6 text-xs font-medium text-gray-600 md:flex">
              <li>
                <a href="#top" className="font-bold text-[#0072bc]">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#do-cho-be-an" className="hover:text-[#0072bc]">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#do-cho-be-mac" className="hover:text-[#0072bc]">
                  Cửa hàng
                </a>
              </li>
              <li>
                <a href="#hoi-dap-tin-tuc" className="hover:text-[#0072bc]">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#he-thong-cua-hang" className="hover:text-[#0072bc]">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* ==================== 3. HERO SECTION (SIDEBAR + MAIN BANNER) ==================== */}
      <section className="mx-auto max-w-[1180px] px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left 9-item Sidebar Menu */}
          <div className="hidden w-[230px] shrink-0 border-x border-b border-gray-200 bg-white lg:block">
            <ul className="divide-y divide-gray-100">
              {merged.sidebarCategories.map((cat, idx) => {
                const IconComp = sidebarIcons[idx % sidebarIcons.length];
                return (
                  <li key={cat.id}>
                    <a
                      href="#do-cho-be-an"
                      className="flex items-center justify-between px-3.5 py-[9.5px] text-xs text-gray-700 transition hover:bg-[#f0f7fc] hover:font-semibold hover:text-[#0072bc]"
                    >
                      <span className="flex items-center gap-2.5">
                        <IconComp className="h-3.5 w-3.5 text-[#0072bc]" />
                        <span>{cat.label}</span>
                      </span>
                      {cat.hasChildren && (
                        <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Wide Hero Banner */}
          <div className="relative min-h-[340px] flex-1 overflow-hidden border-b border-r border-gray-200 bg-gray-900">
            <img
              src={merged.hero.backgroundImage}
              alt={merged.hero.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white sm:p-10">
              <span className="inline-block w-fit rounded bg-[#ff6600] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                {merged.hero.eyebrow}
              </span>
              <h1 className="mt-3 max-w-lg text-2xl font-extrabold leading-tight sm:text-3xl">
                {merged.hero.title}
              </h1>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-gray-100">
                {merged.hero.subtitle}
              </p>
              <div className="mt-5">
                <a
                  href={merged.hero.ctaLink}
                  className="inline-block rounded-full bg-[#0072bc] px-6 py-2 text-xs font-bold uppercase text-white shadow-md transition hover:bg-[#ff6600]"
                >
                  {merged.hero.ctaText}
                </a>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="h-2 w-2 rounded-full bg-white/50" />
              <span className="h-2 w-2 rounded-full bg-white/50" />
              <span className="h-2 w-2 rounded-full bg-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. THREE PROMOTIONAL SUB-BANNERS ==================== */}
      <section className="mx-auto mt-4 max-w-[1180px] px-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {merged.promoSubBanners.map((banner) => (
            <div
              key={banner.id}
              onClick={() => setClassModalOpen(banner.title)}
              className={`group relative flex cursor-pointer items-center justify-between overflow-hidden rounded border border-gray-200 bg-gradient-to-r ${banner.bgClass} p-4 shadow-2xs transition hover:shadow-md`}
            >
              <div className="z-10 max-w-[65%]">
                <span
                  className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                  style={{ backgroundColor: banner.accentColor }}
                >
                  {banner.badge}
                </span>
                <h3
                  className="mt-1.5 text-sm font-black uppercase leading-snug"
                  style={{ color: banner.accentColor }}
                >
                  {banner.title}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-gray-700">
                  {banner.subtitle}
                </p>
                <span
                  className="mt-2 inline-block rounded bg-white px-2.5 py-1 text-[11px] font-extrabold shadow-2xs"
                  style={{ color: banner.accentColor }}
                >
                  {banner.hotlineOrCta}
                </span>
              </div>

              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 5. 8-BRAND LOGO STRIP ==================== */}
      <section className="mx-auto mt-4 max-w-[1180px] px-4">
        <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 border border-gray-200 bg-white sm:grid-cols-4 lg:grid-cols-8 lg:divide-y-0">
          {merged.brands.map((br) => (
            <div
              key={br.id}
              className="flex h-14 flex-col items-center justify-center px-2 text-center hover:bg-gray-50"
            >
              <span
                className="text-sm font-black tracking-tight"
                style={{ color: br.color }}
              >
                {br.name}
              </span>
              <span className="text-[8px] font-semibold uppercase tracking-widest text-gray-400">
                {br.tagline}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 6. FOUR MAJOR CATEGORY SHOWCASE BLOCKS ==================== */}
      <div className="mx-auto mt-5 max-w-[1180px] space-y-6 px-4">
        {merged.categoryBlocks.map((block) => (
          <section
            key={block.id}
            id={block.id}
            className="overflow-hidden border border-gray-200 bg-white shadow-2xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column (2 cols): Colored Header + Subcategory list + HiPP & Aptamil logos */}
              <div className="flex flex-col justify-between border-b border-gray-100 lg:col-span-2 lg:border-b-0 lg:border-r">
                <div>
                  <div
                    className="flex flex-col items-center justify-center px-3 py-4 text-center text-white"
                    style={{ backgroundColor: block.headerBg }}
                  >
                    <Baby className="mb-1 h-6 w-6 opacity-90" />
                    <h2 className="text-xs font-extrabold uppercase tracking-wide">
                      {block.title}
                    </h2>
                  </div>

                  <ul className="divide-y divide-gray-100 px-3 py-1">
                    {block.subCategories.map((sub) => (
                      <li key={sub}>
                        <a
                          href={`#${block.id}`}
                          className="block py-2 text-xs text-gray-700 hover:font-semibold hover:text-[#0072bc]"
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Partner Mini Logos at bottom of left column */}
                <div className="flex flex-col items-center gap-2 border-t border-gray-100 p-3">
                  <span className="rounded border border-pink-100 bg-pink-50/50 px-3 py-0.5 text-xs font-black tracking-wide text-[#db2777]">
                    HiPP
                  </span>
                  <span className="rounded border border-sky-100 bg-sky-50/50 px-3 py-0.5 text-xs font-black tracking-wide text-[#0369a1]">
                    Aptamil
                  </span>
                </div>
              </div>

              {/* Center Column (4 cols): Colorful Showcase Poster with Circular Image & Discount Badge */}
              <div
                className={`relative flex flex-col items-center justify-between bg-gradient-to-b ${block.bannerBg} p-5 text-center lg:col-span-4 lg:border-r lg:border-gray-100`}
              >
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">
                    {block.bannerTitle}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gray-700">
                    {block.bannerSubtitle}
                  </p>
                </div>

                {/* Circular Product Showcase with Orange Badge */}
                <div className="relative my-4 flex h-56 w-56 items-center justify-center rounded-full border-4 border-white bg-white shadow-md">
                  <img
                    src={block.bannerImage}
                    alt={block.bannerTitle}
                    className="h-full w-full rounded-full object-cover"
                  />
                  <div className="absolute -right-3 -top-2 flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-white bg-[#ff9800] text-white shadow-md">
                    <span className="text-[10px] font-semibold leading-none">
                      {block.badgeLabel}
                    </span>
                    <span className="text-sm font-black leading-tight">
                      {block.badgeValue}
                    </span>
                  </div>
                </div>

                <div className="w-full text-right">
                  <a
                    href={`#${block.id}`}
                    className="text-xs font-bold text-[#d81b60] hover:underline"
                  >
                    &gt;&gt; Xem ngay
                  </a>
                </div>
              </div>

              {/* Right Column (6 cols): 2x3 = 6 Product Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-6">
                {block.products.map((prod) => renderProductCard(prod))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ==================== 7. 3-COLUMN INFO ROW (THANH LÝ ĐỒ + HỎI ĐÁP + TIN TỨC) ==================== */}
      <section id="hoi-dap-tin-tuc" className="mx-auto mt-6 max-w-[1180px] px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Left Poster: Mẹ Đang Cần THANH LÝ ĐỒ */}
          <div className="flex flex-col justify-between overflow-hidden border border-gray-200 bg-gradient-to-b from-[#fff0f6] to-[#fce7f3] p-4 text-center lg:col-span-2">
            <div>
              <p className="text-[11px] font-semibold text-gray-600">Mẹ Đang Cần</p>
              <h3 className="mt-0.5 text-base font-black uppercase leading-tight text-[#d81b60]">
                THANH LÝ ĐỒ
              </h3>
              <p className="mt-0.5 text-[10px] font-medium text-[#0072bc]">
                Cho Bé Yêu &amp; Gia Đình
              </p>
            </div>
            <div className="my-3 overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=400&q=80"
                alt="Thanh lý đồ cho bé"
                className="h-36 w-full object-cover"
              />
            </div>
            <button
              type="button"
              onClick={() => setClassModalOpen("Đăng ký Ký Gửi & Thanh Lý Đồ Mẹ Bé")}
              className="rounded bg-[#d81b60] py-1.5 text-[11px] font-bold text-white hover:bg-[#ad1457]"
            >
              Xem Chi Tiết
            </button>
          </div>

          {/* Middle Column: Hỏi đáp */}
          <div className="border border-gray-200 bg-white lg:col-span-5">
            <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
              <HelpCircle className="h-4 w-4 text-gray-600" />
              <h3 className="text-xs font-bold text-gray-800">Hỏi đáp</h3>
            </div>
            <ul className="divide-y divide-gray-100 p-4">
              {merged.qaList.map((qa) => (
                <li key={qa.id} className="py-2.5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedQuestionId(selectedQuestionId === qa.id ? null : qa.id)
                    }
                    className="w-full text-center text-xs font-semibold leading-snug text-gray-700 hover:text-[#0072bc]"
                  >
                    {qa.question}
                  </button>
                  {selectedQuestionId === qa.id && (
                    <p className="mt-1.5 rounded bg-sky-50 p-2.5 text-[11px] text-gray-600">
                      {qa.answer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Tin tức */}
          <div className="border border-gray-200 bg-white lg:col-span-5">
            <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
              <Newspaper className="h-4 w-4 text-gray-600" />
              <h3 className="text-xs font-bold text-gray-800">Tin tức</h3>
            </div>
            <div className="divide-y divide-gray-100 p-3">
              {merged.newsArticles.map((art) => (
                <div key={art.id} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="h-14 w-20 shrink-0 rounded-xs object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-semibold leading-snug text-gray-800 hover:text-[#0072bc]">
                      {art.title}
                    </h4>
                    <p className="mt-0.5 line-clamp-1 text-[11px] text-gray-500">
                      {art.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 8. SẢN PHẨM ĐÃ XEM (5-COLUMN PRODUCT STRIP) ==================== */}
      <section className="mx-auto mt-6 mb-8 max-w-[1180px] px-4">
        <div className="border border-gray-200 bg-white">
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
            <Clock className="h-4 w-4 text-gray-600" />
            <h3 className="text-xs font-bold uppercase text-gray-700">SẢN PHẨM ĐÃ XEM</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {merged.recentlyViewed.map((prod) => renderProductCard(prod))}
          </div>
        </div>
      </section>

      {/* ==================== 9. CYAN 4-BADGE SERVICE GUARANTEE BAR ==================== */}
      <section className="bg-[#d8f1f5] py-5">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {merged.serviceCommitments.map((sc, idx) => {
            const icons = [ThumbsUp, Smile, Truck, RotateCcw];
            const IconComp = icons[idx % icons.length];
            return (
              <div key={sc.id} className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0288d1]/40 bg-white text-[#0288d1]">
                  <IconComp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">{sc.title}</h4>
                  <p className="text-[11px] text-gray-500">{sc.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 10. CUSTOMER TESTIMONIAL STRIP ==================== */}
      <section className="bg-white py-6">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs font-extrabold uppercase text-[#0072bc]">
              VIẾT CẢM NHẬN VỀ
            </p>
            <p className="text-sm font-black uppercase text-gray-800">SHOP TRẺ THƠ</p>
          </div>

          <div className="max-w-xl border-l-2 border-gray-200 pl-4">
            <div className="flex items-center gap-0.5 text-[#ff9800]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-xs font-semibold italic text-gray-700">
              {(merged.testimonials || [])[0]?.name}
            </p>
            <p className="mt-1 text-xs italic text-gray-600">
              &ldquo;{(merged.testimonials || [])[0]?.content}&rdquo;
            </p>
            <p className="mt-1 text-[11px] text-gray-400">
              {(merged.testimonials || [])[0]?.role}
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs font-extrabold uppercase text-[#0072bc]">
              KHÁCH HÀNG NÓI VỀ
            </p>
            <p className="text-sm font-black uppercase text-gray-800">SHOP TRẺ THƠ</p>
          </div>
        </div>
      </section>

      {/* ==================== 11. SOFT CYAN FOOTER & 36-STORE DIRECTORY ==================== */}
      <footer id="footer-contact" className="bg-[#d8f1f5] pt-8 text-gray-700">
        {/* Top 4 Columns */}
        <div className="mx-auto max-w-[1180px] border-b border-[#bce3ea] px-4 pb-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase text-gray-900">MENU</h4>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a href="#top" className="font-semibold text-gray-900">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#do-cho-be-an" className="hover:text-[#0072bc]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#do-cho-be-mac" className="hover:text-[#0072bc]">
                    Cửa hàng
                  </a>
                </li>
                <li>
                  <a href="#hoi-dap-tin-tuc" className="hover:text-[#0072bc]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#he-thong-cua-hang" className="hover:text-[#0072bc]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase text-gray-900">
                HƯỚNG DẪN, HỖ TRỢ
              </h4>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a href="#hoi-dap-tin-tuc" className="hover:text-[#0072bc]">
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#0072bc]">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#0072bc]">
                    Phương thức vận chuyển
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#0072bc]">
                    Hướng dẫn đổi trả
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#0072bc]">
                    Hướng dẫn trả góp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase text-gray-900">
                LIÊN HỆ VỚI CHÚNG TÔI
              </h4>
              <div className="space-y-1.5 text-xs text-gray-600">
                <p className="font-semibold text-gray-800">Công ty Con Ngoan</p>
                <p>{merged.business.address}</p>
                <p className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-[#0072bc]" />
                  <span>Hotline : {merged.business.phone[0]}</span>
                </p>
                <p className="text-[11px]">
                  MST: 2901270911 - Số ĐKKD: 2901270911 cấp ngày 06/09/2010 bởi Sở KH và ĐT
                  tỉnh Nghệ An
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase text-gray-900">FANPAGE</h4>
              <div className="overflow-hidden rounded border border-white bg-white p-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0072bc] text-xs font-black text-white">
                    MK
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0072bc]">
                      {merged.business.name} - Mẹ &amp; Bé
                    </p>
                    <p className="text-[10px] text-gray-500">58K lượt thích</p>
                  </div>
                </div>
                <div className="mt-2.5 flex gap-2">
                  <span className="inline-block rounded-xs border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-700">
                    👍 Thích Trang
                  </span>
                  <span className="inline-block rounded-xs border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-700">
                    Chia sẻ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HỆ THỐNG 36 CỬA HÀNG CỦA SHOPTRETHO */}
        <div id="he-thong-cua-hang" className="mx-auto max-w-[1180px] px-4 py-7">
          <h3 className="mb-4 text-sm font-extrabold uppercase text-gray-800">
            HỆ THỐNG 36 CỬA HÀNG CỦA SHOPTRETHO
          </h3>

          <div className="grid grid-cols-1 gap-8 text-[11px] leading-relaxed text-gray-700 md:grid-cols-2">
            {/* Left Column: Hà Nội, Hải Phòng, Bình Phước, Đồng Nai, Phú Thọ, Thanh Hóa */}
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-900">Hà Nội:</h4>
                <ul className="mt-1 space-y-1">
                  {merged.storeBranches.hanoi.map((addr) => (
                    <li key={addr}>{addr}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900">Hải Phòng:</h4>
                <ul className="mt-1 space-y-1">
                  {merged.storeBranches.haiPhong.map((addr) => (
                    <li key={addr}>{addr}</li>
                  ))}
                </ul>
              </div>

              {merged.storeBranches.otherNorthCentral.map((item) => (
                <div key={item.city}>
                  <h4 className="font-bold text-gray-900">{item.city}:</h4>
                  <p>{item.address}</p>
                </div>
              ))}
            </div>

            {/* Right Column: TP.HCM, Bình Dương, Cần Thơ, Ninh Bình, Quảng Ninh, Tiền Giang */}
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-900">TP.Hồ Chí Minh:</h4>
                <ul className="mt-1 space-y-1">
                  {merged.storeBranches.hcm.map((addr) => (
                    <li key={addr}>{addr}</li>
                  ))}
                </ul>
              </div>

              {merged.storeBranches.otherSouth.map((item) => (
                <div key={item.city}>
                  <h4 className="font-bold text-gray-900">{item.city}:</h4>
                  <p>{item.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Company Info + ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG + Green Grassy Hill Illustration */}
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 border-t border-[#bce3ea] px-4 py-4 text-[11px] text-gray-600">
          <div>
            <p className="font-bold text-gray-800">CÔNG TY TNHH MONA MEDIA</p>
            <p>Giấy phép kinh doanh: 0313728397 Sở kế hoạch và đầu tư TP.Hồ Chí Minh</p>
            <p>Thiết kế web, Dịch vụ thiết kế website DMCA.com Protection Status</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded border border-[#0288d1] bg-white px-3 py-1.5 shadow-2xs">
            <CheckCircle2 className="h-5 w-5 text-[#0288d1]" />
            <div className="leading-none">
              <span className="block text-[10px] font-extrabold text-[#0288d1]">
                ĐÃ THÔNG BÁO
              </span>
              <span className="text-[9px] font-semibold text-gray-600">BỘ CÔNG THƯƠNG</span>
            </div>
          </div>
        </div>

        {/* Playful Green Grassy Hill Footer Finish */}
        <div className="relative mt-2 h-20 w-full overflow-hidden">
          <div className="absolute -bottom-10 left-1/2 h-28 w-[120%] -translate-x-1/2 rounded-t-[100%] bg-gradient-to-b from-[#8bc34a] to-[#558b2f]" />
          <div className="relative z-10 flex h-full items-center justify-center gap-4 text-xs font-bold text-white drop-shadow-xs">
            <span>✿ Bé Khỏe — Mẹ Vui — Cả Nhà Hạnh Phúc ✿</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
