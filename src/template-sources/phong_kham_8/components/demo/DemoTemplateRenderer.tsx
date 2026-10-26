"use client";

import React, { useState } from "react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  ArrowRight,
  Cloud,
  Sparkles,
  Clock,
  Truck,
  Mail,
  CheckCircle2,
  X
} from "lucide-react";
import { adaptClonedTemplateData, type ClonedTemplateInput } from "@/lib/demo/clonedTemplateUtils";
import {
  phongKham8DefaultData,
  type PhongKham8Data,
  type PhongKham8Product
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  companyName?: string;
}

export function DemoTemplateRenderer({ data, companyName }: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<PhongKham8Data>(phongKham8DefaultData, {
    ...(data || {}),
    ...(companyName ? { companyName } : {})
  });

  const [activeBestSellerTab, setActiveBestSellerTab] = useState<string>("All");
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  const [toast, setToast] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [classScheduleModal, setClassScheduleModal] = useState(false);

  const handleAddToCart = (product: PhongKham8Product) => {
    setCartCount((c) => c + 1);
    setToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
    setTimeout(() => setToast(null), 2600);
  };

  const filteredBestSellers =
    activeBestSellerTab === "All"
      ? merged.bestSellers
      : merged.bestSellers.filter((p) => p.tab === activeBestSellerTab);

  return (
    <div id="top" className="min-h-screen bg-white font-sans text-[#1d242b] antialiased">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#1d242b] px-5 py-3 text-xs font-semibold text-white shadow-xl">
          <CheckCircle2 className="h-4 w-4 text-[#e76f51]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Class Schedule Modal */}
      {classScheduleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl">
            <button
              type="button"
              onClick={() => setClassScheduleModal(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#e76f51]">
              LỊCH LỚP HỌC TIỀN SẢN &amp; SƠ SINH
            </span>
            <h3 className="mt-1 text-xl font-bold text-[#1d242b]">
              Lớp Học Cùng Bác Sĩ Nhi Khoa Tuần Này
            </h3>
            <div className="mt-4 space-y-3 text-xs">
              {[
                {
                  day: "Thứ Bảy, 09:00 - 11:00",
                  topic: "Chăm sóc rốn, tắm bé & nhận biết vàng da sơ sinh",
                  doctor: "BS.CKI Nguyễn Minh Hạnh"
                },
                {
                  day: "Chủ Nhật, 09:30 - 11:30",
                  topic: "Thiết lập nếp ăn ngủ EASY & chọn chất liệu vải cho trẻ có cơ địa chàm sữa",
                  doctor: "ThS.BS Trần Quốc Bảo"
                }
              ].map((cls) => (
                <div
                  key={cls.topic}
                  className="rounded-xl border border-gray-100 bg-[#f6f8f7] p-3.5"
                >
                  <p className="font-bold text-[#e76f51]">{cls.day}</p>
                  <p className="mt-1 font-semibold text-[#1d242b]">{cls.topic}</p>
                  <p className="mt-0.5 text-gray-500">Giảng viên: {cls.doctor}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setClassScheduleModal(false);
                setToast("Đã ghi nhận đăng ký tham gia lớp học tiền sản miễn phí!");
                setTimeout(() => setToast(null), 2600);
              }}
              className="mt-5 w-full rounded-md bg-[#e76f51] py-3 text-xs font-bold text-white hover:bg-[#d65f42]"
            >
              Đăng Ký Tham Dự Miễn Phí
            </button>
          </div>
        </div>
      )}

      {/* ==================== 1. MINIMALIST TOP HEADER ==================== */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-8">
          {/* Left Logo: MonaKid with cute sprout doodle */}
          <a href="#top" className="flex items-center gap-1.5">
            <span className="text-2xl font-extrabold tracking-tight text-[#1d242b]">
              {merged.business.name}
            </span>
            <span className="-mt-3 text-sm text-[#e76f51]">🌱</span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden items-center gap-7 text-xs font-medium text-gray-600 lg:flex">
            <a
              href="#top"
              className="border-b-2 border-[#e76f51] pb-0.5 font-semibold text-[#1d242b]"
            >
              Trang chủ
            </a>
            <a href="#shop-by-category" className="hover:text-[#1d242b]">
              Sơ sinh
            </a>
            <a href="#best-sellers" className="hover:text-[#1d242b]">
              Bé gái
            </a>
            <a href="#best-sellers" className="hover:text-[#1d242b]">
              Bé trai
            </a>
            <a href="#gifting-with-love" className="hover:text-[#1d242b]">
              Quà tặng
            </a>
            <a href="#online-community" className="hover:text-[#1d242b]">
              Lớp học &amp; Sự kiện
            </a>
            <a href="#why-debebe" className="hover:text-[#1d242b]">
              Dịch vụ
            </a>
            <a href="#online-community" className="hover:text-[#1d242b]">
              Cẩm nang
            </a>
          </nav>

          {/* Right Quick Icons: Search, Wish list, Account, Cart */}
          <div className="flex items-center gap-4 text-xs text-gray-700">
            <button
              type="button"
              onClick={() => setToast("Nhập tên sản phẩm hữu cơ hoặc lớp học cần tìm...")}
              className="flex items-center gap-1.5 hover:text-[#e76f51]"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Tìm kiếm</span>
            </button>

            <button
              type="button"
              onClick={() => setWishlistCount((w) => w + 1)}
              className="flex items-center gap-1 hover:text-[#e76f51]"
            >
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Yêu thích</span>
              <span className="text-[10px] font-bold text-[#e76f51]">{wishlistCount}</span>
            </button>

            <button type="button" className="hover:text-[#e76f51]" aria-label="Tài khoản">
              <User className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setToast(`Giỏ hàng của bạn đang có ${cartCount} sản phẩm.`)}
              className="relative flex items-center gap-1 hover:text-[#e76f51]"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e76f51] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ==================== 2. SCANDINAVIAN KIDS HERO BANNER ==================== */}
      <section className="relative overflow-hidden bg-[#dfe3e6]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center px-6 py-14 sm:px-12 lg:min-h-[520px] lg:grid-cols-12">
          {/* Left Hero Copy */}
          <div className="relative z-10 lg:col-span-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500">
              {merged.hero.eyebrow}
            </p>
            <h1 className="mt-3 whitespace-pre-line text-3xl font-extrabold leading-[1.15] tracking-tight text-[#1d242b] sm:text-5xl">
              {merged.hero.title}
            </h1>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-600">
              {merged.hero.subtitle}
            </p>
            <div className="mt-7">
              <a
                href={merged.hero.ctaLink}
                className="inline-flex items-center gap-2.5 rounded bg-[#e76f51] px-6 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#d55d3f]"
              >
                <span>{merged.hero.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Hero Studio Image + Hand-Drawn Sun, Clouds & Price Badge */}
          <div className="relative mt-10 flex items-center justify-center lg:col-span-7 lg:mt-0">
            {/* Hand-drawn Sun Doodle */}
            <div className="absolute -top-6 left-1/3 z-10 hidden h-14 w-14 items-center justify-center rounded-full bg-[#fde68a]/80 text-amber-500 sm:flex">
              ☀️
            </div>

            {/* Dark Navy Scalloped Price Callout Sticker */}
            <div className="absolute right-8 top-4 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#13293d] p-2 text-center text-white shadow-lg sm:right-20">
              <span className="text-[10px] leading-tight text-gray-200">
                {merged.heroProductCallout.name}
              </span>
              <span className="mt-1 text-xs font-extrabold text-[#fde68a]">
                {merged.heroProductCallout.price}
              </span>
            </div>

            {/* Main Studio Photo */}
            <div className="relative overflow-hidden rounded-2xl shadow-md">
              <img
                src={merged.hero.backgroundImage}
                alt={merged.hero.title}
                className="h-[340px] w-full max-w-[600px] object-cover sm:h-[420px]"
              />
            </div>

            {/* Cute Lion Doodle Badge at bottom right */}
            <div className="absolute -bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-2xl border border-amber-200 bg-[#fef3c7] px-3.5 py-2 text-xs font-bold text-amber-800 shadow-sm">
              <span className="text-lg">🦁</span>
              <span>100% Organic Cotton</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. SHOP BY CATEGORY (4 PORTRAIT CARDS) ==================== */}
      <section id="shop-by-category" className="mx-auto max-w-[1140px] px-4 pt-16">
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
            DE BEBE
          </p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1d242b]">
            Danh mục cho bé
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {merged.categories.map((cat) => (
            <a
              key={cat.id}
              href="#best-sellers"
              className="group block overflow-hidden"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#f3f4f4]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-sm font-extrabold text-[#1d242b] group-hover:text-[#e76f51]">
                {cat.title}
              </h3>
              <p className="text-[11px] text-gray-400">{cat.subtitle}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ==================== 4. BEST SELLERS (FILTER TABS + 4 STUDIO CARDS) ==================== */}
      <section id="best-sellers" className="mx-auto max-w-[1140px] px-4 pt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              ĐƯỢC YÊU THÍCH NHẤT
            </p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1d242b]">
              Sản phẩm bán chạy
            </h2>
          </div>

          {/* Center Filter Pills */}
          <div className="flex items-center gap-2 text-xs">
            {["All", "Sơ sinh", "Bé gái", "Bé trai"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveBestSellerTab(tab)}
                className={`rounded-md px-3.5 py-1.5 font-semibold transition ${
                  activeBestSellerTab === tab
                    ? "bg-[#eef2f1] text-[#1d242b]"
                    : "text-gray-500 hover:text-[#1d242b]"
                }`}
              >
                {tab === "All" ? "Tất cả" : tab}
              </button>
            ))}
          </div>

          <a
            href="#new-in"
            className="border-b border-dashed border-[#1d242b] pb-0.5 text-xs font-bold text-[#1d242b] hover:text-[#e76f51]"
          >
            Xem tất cả
          </a>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {filteredBestSellers.map((prod) => (
            <div key={prod.id} className="group">
              <div
                onClick={() => handleAddToCart(prod)}
                className="relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#f3f4f4] p-6"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#1d242b] opacity-0 shadow-xs transition group-hover:opacity-100">
                  + Thêm giỏ
                </span>
              </div>
              <h4 className="mt-3 text-xs font-medium text-gray-700 group-hover:text-[#e76f51]">
                {prod.name}
              </h4>
              <p className="mt-1 text-xs font-extrabold text-[#1d242b]">{prod.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 5. ASYMMETRIC EDITORIAL COLLECTIONS ==================== */}
      <section className="mx-auto max-w-[1140px] px-4 pt-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          CHẾ TÁC BẰNG TÌNH YÊU
        </p>
        <div className="mt-4 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Tall Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl bg-[#f3f4f4]">
              <img
                src={merged.editorialCollections.left.image}
                alt={merged.editorialCollections.left.title}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-base font-extrabold text-[#1d242b]">
              {merged.editorialCollections.left.title}
            </h3>
            <a
              href="#new-in"
              className="mt-1 inline-block border-b border-wavy border-[#94a3b8] pb-0.5 text-xs font-bold text-[#1d242b] hover:text-[#e76f51]"
            >
              {merged.editorialCollections.left.cta}
            </a>
          </div>

          {/* Right Wide Card (7 cols) with Giraffe Doodle Accent */}
          <div className="relative lg:col-span-7">
            <div className="overflow-hidden rounded-xl bg-[#e5e9ec]">
              <img
                src={merged.editorialCollections.right.image}
                alt={merged.editorialCollections.right.title}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl">🦒</span>
              <div>
                <h3 className="text-base font-extrabold text-[#1d242b]">
                  {merged.editorialCollections.right.title}
                </h3>
                <a
                  href="#new-in"
                  className="mt-0.5 inline-block border-b border-wavy border-[#94a3b8] pb-0.5 text-xs font-bold text-[#1d242b] hover:text-[#e76f51]"
                >
                  {merged.editorialCollections.right.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. NEW IN (4 STUDIO CARDS + ASYMMETRIC FEATURE PAIR) ==================== */}
      <section id="new-in" className="mx-auto max-w-[1140px] px-4 pt-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              XU HƯỚNG MỚI
            </p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1d242b]">
              Sản phẩm mới về
            </h2>
          </div>
          <a
            href="#gifting-with-love"
            className="border-b border-dashed border-[#1d242b] pb-0.5 text-xs font-bold text-[#1d242b] hover:text-[#e76f51]"
          >
            Xem tất cả
          </a>
        </div>

        {/* 4 New Arrival Cards */}
        <div className="mt-7 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {merged.newArrivals.map((prod) => (
            <div key={prod.id} className="group">
              <div
                onClick={() => handleAddToCart(prod)}
                className="relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#f3f4f4] p-6"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#1d242b] opacity-0 shadow-xs transition group-hover:opacity-100">
                  + Thêm giỏ
                </span>
              </div>
              <h4 className="mt-3 text-xs font-medium text-gray-700 group-hover:text-[#e76f51]">
                {prod.name}
              </h4>
              <p className="mt-1 text-xs font-extrabold text-[#1d242b]">{prod.price}</p>
            </div>
          ))}
        </div>

        {/* Asymmetric Pair Below: Left Single Tall Product + Right Wide Sibling Collection */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div
              onClick={() => handleAddToCart(merged.featuredPair.leftProduct)}
              className="cursor-pointer overflow-hidden rounded-xl bg-[#f3f4f4] p-8"
            >
              <img
                src={merged.featuredPair.leftProduct.image}
                alt={merged.featuredPair.leftProduct.name}
                className="aspect-[4/5] w-full rounded-lg object-cover"
              />
            </div>
            <h4 className="mt-3 text-xs font-medium text-gray-700">
              {merged.featuredPair.leftProduct.name}
            </h4>
            <p className="mt-1 text-xs font-extrabold text-[#1d242b]">
              {merged.featuredPair.leftProduct.price}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl bg-[#e5e9ec]">
              <img
                src={merged.featuredPair.rightBanner.image}
                alt={merged.featuredPair.rightBanner.title}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-base font-extrabold text-[#1d242b]">
              {merged.featuredPair.rightBanner.title}
            </h3>
            <a
              href="#gifting-with-love"
              className="mt-1 inline-block border-b border-wavy border-[#94a3b8] pb-0.5 text-xs font-bold text-[#1d242b] hover:text-[#e76f51]"
            >
              {merged.featuredPair.rightBanner.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 7. GIFTING WITH LOVE (2-COLUMN SPLIT) ==================== */}
      <section id="gifting-with-love" className="mx-auto max-w-[1140px] px-4 pt-20">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-[#f5f6f7] lg:grid-cols-12">
          {/* Left Featured Gift Card */}
          <div className="relative flex flex-col items-center justify-center p-8 sm:p-12 lg:col-span-6">
            <h3 className="mb-6 text-lg font-extrabold text-[#1d242b]">
              {merged.giftingSection.heading}
            </h3>

            <div
              onClick={() => handleAddToCart(merged.giftingSection.featuredGift)}
              className="w-full max-w-[260px] cursor-pointer rounded-xl bg-white p-4 shadow-xs transition hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-[#f3f4f4]">
                <img
                  src={merged.giftingSection.featuredGift.image}
                  alt={merged.giftingSection.featuredGift.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs font-medium text-gray-600">
                {merged.giftingSection.featuredGift.name}
              </p>
              <p className="mt-0.5 text-xs font-extrabold text-[#1d242b]">
                {merged.giftingSection.featuredGift.price}
              </p>
            </div>

            <a
              href="#best-sellers"
              className="mt-6 border-b border-dashed border-[#1d242b] pb-0.5 text-xs font-bold text-[#1d242b] hover:text-[#e76f51]"
            >
              {merged.giftingSection.ctaText}
            </a>

            {/* Cute Yellow Bear Doodle at bottom right of left panel */}
            <span className="absolute bottom-3 right-5 text-3xl">🧸</span>
          </div>

          {/* Right Sleeping Newborn Image */}
          <div className="lg:col-span-6">
            <img
              src={merged.giftingSection.rightImage}
              alt={merged.giftingSection.heading}
              className="h-full min-h-[380px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==================== 8. WHY DEBEBE (3 PILLARS) ==================== */}
      <section id="why-debebe" className="mx-auto max-w-[960px] px-4 pt-20 text-center">
        <h2 className="text-2xl font-extrabold text-[#1d242b]">
          Vì sao ba mẹ chọn {merged.business.name}
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          Cam kết chuẩn y khoa cho sự phát triển khỏe mạnh của trẻ sơ sinh
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {merged.whyPillars.map((pillar) => (
            <div key={pillar.id} className="flex flex-col items-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f7f6] text-[#e76f51]">
                {pillar.iconType === "cloud" && <Cloud className="h-6 w-6" />}
                {pillar.iconType === "flower" && <Sparkles className="h-6 w-6" />}
                {pillar.iconType === "heart" && <Heart className="h-6 w-6" />}
              </div>
              <h3 className="text-xs font-extrabold text-[#1d242b]">{pillar.title}</h3>
              <p className="mt-1.5 max-w-[240px] text-[11px] leading-relaxed text-gray-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 9. JOIN OUR ONLINE COMMUNITY & BEDTIME BLOG ==================== */}
      <section id="online-community" className="mx-auto max-w-[1140px] px-4 pt-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left 7 Columns: Online Prenatal Classes & Maternity Photo */}
          <div className="lg:col-span-7">
            <h2 className="max-w-sm text-2xl font-extrabold leading-tight text-[#1d242b]">
              {merged.communityAndBlog.communityTitle}
            </h2>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-gray-500">
              {merged.communityAndBlog.communityDescription}
            </p>
            <button
              type="button"
              onClick={() => setClassScheduleModal(true)}
              className="mt-4 inline-block border-b border-dashed border-[#1d242b] pb-0.5 text-xs font-bold text-[#1d242b] hover:text-[#e76f51]"
            >
              {merged.communityAndBlog.communityCta}
            </button>

            <div className="mt-6 overflow-hidden rounded-xl">
              <img
                src={merged.communityAndBlog.communityImage}
                alt={merged.communityAndBlog.communityTitle}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          {/* Right 5 Columns: Bedtime Stories from Blog */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl">
              <img
                src={merged.communityAndBlog.blogImage}
                alt={merged.communityAndBlog.blogTitle}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-base font-extrabold text-[#1d242b]">
              {merged.communityAndBlog.blogTitle}
            </h3>
            <button
              type="button"
              onClick={() => setClassScheduleModal(true)}
              className="mt-1 inline-block border-b border-dashed border-[#1d242b] pb-0.5 text-xs font-bold text-[#1d242b] hover:text-[#e76f51]"
            >
              {merged.communityAndBlog.blogCta}
            </button>
          </div>
        </div>
      </section>

      {/* ==================== 10. WHY ORGANIC MATTERS (2-COLUMN SPLIT BANNER) ==================== */}
      <section className="mx-auto max-w-[1140px] px-4 pt-20">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-2xl bg-[#e7eeec] lg:grid-cols-12">
          <div className="flex flex-col justify-center p-8 sm:p-14 lg:col-span-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              {merged.organicStory.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#1d242b] sm:text-3xl">
              {merged.organicStory.title}
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-gray-600">
              {merged.organicStory.description}
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setClassScheduleModal(true)}
                className="inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-xs font-bold text-[#1d242b] shadow-2xs transition hover:bg-[#e76f51] hover:text-white"
              >
                <span>{merged.organicStory.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src={merged.organicStory.image}
              alt={merged.organicStory.title}
              className="h-full min-h-[340px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==================== 11. THREE SERVICE PERKS STRIP ==================== */}
      <section className="mx-auto max-w-[960px] px-4 py-16">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {merged.shippingPerks.map((perk, idx) => {
            const icons = [Clock, Truck, Mail];
            const IconComp = icons[idx % icons.length];
            return (
              <div key={perk.id} className="flex flex-col items-center">
                <IconComp className="mb-2.5 h-5 w-5 text-gray-400" />
                <h4 className="text-xs font-extrabold text-[#1d242b]">{perk.title}</h4>
                <p className="mt-1 text-[11px] text-gray-400">{perk.subtitle}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 12. MINIMALIST OFF-WHITE FOOTER ==================== */}
      <footer className="bg-[#f6f6f4] pt-14 text-[#1d242b]">
        <div className="mx-auto max-w-[1140px] px-4">
          {/* Newsletter Center Box */}
          <div className="mx-auto max-w-md text-center">
            <h3 className="text-sm font-extrabold text-[#1d242b]">Bản tin Mẹ &amp; Bé</h3>
            <p className="mt-1 text-[11px] text-gray-500">
              Đăng ký nhận cẩm nang chăm sóc trẻ sơ sinh &amp; ưu đãi bộ sưu tập mới
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) {
                  setNewsletterDone(true);
                  setNewsletterEmail("");
                }
              }}
              className="mt-4 flex overflow-hidden rounded border border-gray-200 bg-white p-1"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Nhập địa chỉ email của bạn..."
                className="flex-1 px-3 text-xs focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-8 w-9 items-center justify-center rounded bg-[#e76f51] text-white hover:bg-[#d55d3f]"
                aria-label="Gửi"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
            {newsletterDone && (
              <p className="mt-2 text-[11px] font-semibold text-emerald-700">
                ✓ Cảm ơn ba mẹ đã đăng ký bản tin MonaKid!
              </p>
            )}
          </div>

          {/* 3 Middle Contact Callouts */}
          <div className="mt-12 grid grid-cols-1 gap-6 border-y border-gray-200 py-8 text-center sm:grid-cols-3">
            <div>
              <p className="text-[10px] text-gray-400">Cần giải đáp thắc mắc?</p>
              <button
                type="button"
                onClick={() => setClassScheduleModal(true)}
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#1d242b] hover:text-[#e76f51]"
              >
                <span>Xem câu hỏi thường gặp</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div>
              <p className="text-[10px] text-gray-400">Tổng đài tư vấn Sơ sinh</p>
              <p className="mt-1 text-sm font-extrabold text-[#1d242b]">
                {merged.business.phone[0]}
              </p>
            </div>

            <div>
              <p className="text-[10px] text-gray-400">Trải nghiệm trực tiếp?</p>
              <a
                href="#top"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#1d242b] hover:text-[#e76f51]"
              >
                <span>Tìm cửa hàng gần nhất</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Bottom 4 Columns */}
          <div className="grid grid-cols-2 gap-8 py-10 text-[11px] text-gray-500 sm:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1d242b]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300">
                  f
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300">
                  in
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300">
                  p
                </span>
              </div>
              <p>Điều khoản &amp; Chính sách bảo mật</p>
            </div>

            <ul className="space-y-1.5">
              <li>
                <a href="#top" className="hover:text-[#1d242b]">
                  Câu chuyện thương hiệu
                </a>
              </li>
              <li>
                <a href="#why-debebe" className="hover:text-[#1d242b]">
                  Sự khác biệt Organic
                </a>
              </li>
              <li>
                <a href="#online-community" className="hover:text-[#1d242b]">
                  Dịch vụ Lớp học Tiền sản
                </a>
              </li>
              <li>
                <a href="#online-community" className="hover:text-[#1d242b]">
                  Cẩm nang Nhi khoa
                </a>
              </li>
            </ul>

            <ul className="space-y-1.5">
              <li>
                <a href="#best-sellers" className="hover:text-[#1d242b]">
                  Bảng kích cỡ sơ sinh
                </a>
              </li>
              <li>
                <a href="#gifting-with-love" className="hover:text-[#1d242b]">
                  Thẻ quà tặng đầy tháng
                </a>
              </li>
              <li>
                <a href="#new-in" className="hover:text-[#1d242b]">
                  Lookbook Xuân Hè
                </a>
              </li>
            </ul>

            <ul className="space-y-1.5">
              <li>
                <a href="#top" className="hover:text-[#1d242b]">
                  Tra cứu đơn hàng
                </a>
              </li>
              <li>
                <a href="#top" className="hover:text-[#1d242b]">
                  Chính sách đổi trả 30 ngày
                </a>
              </li>
              <li>
                <span className="text-gray-400">{merged.business.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#111111] py-3 text-center text-[11px] text-gray-400">
          © Thiết kế và phát triển bởi <strong className="text-white">MONA.Media</strong> /{" "}
          {merged.business.name}
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
