"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { adaptClonedTemplateData, type ClonedTemplateInput } from "@/lib/demo/clonedTemplateUtils";
import {
  phongKham13DefaultData,
  type PhongKham13Data,
  type PhongKham13Product
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  companyName?: string;
}

export function DemoTemplateRenderer({ data, companyName }: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<PhongKham13Data>(phongKham13DefaultData, {
    ...(data || {}),
    ...(companyName ? { companyName } : {})
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [bagCount, setBagCount] = useState<number>(0);
  const [toast, setToast] = useState<string | null>(null);
  const [consultName, setConsultName] = useState("");
  const [consultPhone, setConsultPhone] = useState("");
  const [consultConcern, setConsultConcern] = useState(
    "Tư vấn Kem Chống Nắng Jojoba & Da nhạy cảm"
  );
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const handleAddToBag = (product: PhongKham13Product) => {
    setBagCount((c) => c + 1);
    setToast(`Đã thêm "${product.name}" vào túi mua sắm!`);
    setTimeout(() => setToast(null), 2600);
  };

  const filteredProducts =
    selectedCategory === "Tất cả"
      ? merged.bestSellers
      : merged.bestSellers.filter((p) => p.category === selectedCategory);

  return (
    <div id="top" className="min-h-screen bg-white font-sans text-[#18181b] antialiased">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#18181b] px-5 py-3 text-xs font-bold text-white shadow-xl">
          <CheckCircle2 className="h-4 w-4 text-[#d4f068]" />
          <span>{toast}</span>
        </div>
      )}

      {/* ==================== 1. HEADER BAR MATCHING PK016-phong_kham_13.png ==================== */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1260px] items-center justify-between px-4 py-3.5 sm:px-8">
          {/* Left Navigation Links: Sản Phẩm ▾ | Best Sellers | Về The Cafuné | Blog */}
          <nav className="hidden items-center gap-7 text-xs font-semibold text-gray-700 lg:flex">
            <a
              href="#best-sellers"
              className="inline-flex items-center gap-1 hover:text-black"
            >
              <span>Sản Phẩm</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </a>
            <a href="#best-sellers" className="hover:text-black">
              Best Sellers
            </a>
            <a href="#ve-the-cafune" className="hover:text-black">
              Về The Cafuné
            </a>
            <a href="#blog-cafune" className="hover:text-black">
              Blog
            </a>
          </nav>

          {/* Center Framed Wordmark Logo: THE CAFUNÉ — FEEL NATURAL, BE NATURAL */}
          <a
            href="#top"
            className="flex flex-col items-center border-y border-[#18181b] px-4 py-1 text-center"
          >
            <span className="text-lg font-black uppercase tracking-[0.14em] text-[#18181b] sm:text-xl">
              {merged.business.name}
            </span>
            <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-gray-500">
              {merged.slogan}
            </span>
          </a>

          {/* Right Actions: Search | Bag (0) | Lime Pill Button "Liên hệ ngay ↗" */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setToast("Tìm kiếm dược mỹ phẩm thiên nhiên The Cafuné...")}
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Tìm kiếm"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setToast(`Túi mua sắm của bạn có ${bagCount} sản phẩm.`)}
              className="relative rounded-full p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#18181b] text-[9px] font-bold text-white">
                {bagCount}
              </span>
            </button>

            <a
              href="#tu-van-da-lieu"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#d4f068] px-4 py-2 text-xs font-extrabold text-[#18181b] shadow-2xs transition hover:bg-[#c3e548]"
            >
              <span>Liên hệ ngay</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ==================== 2. HERO BENTO CANVAS (EXACT LAYOUT FROM PK016) ==================== */}
      <section className="mx-auto max-w-[1260px] px-4 pt-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-[#eaedec] p-6 sm:p-10 lg:min-h-[540px]">
          {/* Background Radiant Model Portrait in Center-Right */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left Column: Headline + Bottom Floating CHĂM SÓC CƠ THỂ Card (5 cols) */}
            <div className="relative z-10 flex flex-col justify-between space-y-10 lg:col-span-5 lg:min-h-[450px]">
              <div className="pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {merged.slogan}
                </p>
                <h1 className="mt-2 whitespace-pre-line text-3xl font-black uppercase leading-tight tracking-tight text-[#18181b] sm:text-4xl">
                  CÙNG {merged.business.name}
                </h1>
                <p className="mt-3 max-w-sm text-xs leading-relaxed text-gray-600">
                  {merged.hero.subtitle}
                </p>
                <div className="mt-6">
                  <a
                    href={merged.hero.ctaLink}
                    className="inline-flex items-center gap-2 rounded-full bg-[#d4f068] px-6 py-3 text-xs font-extrabold text-[#18181b] shadow-sm transition hover:bg-[#c2e44c]"
                  >
                    <span>{merged.hero.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Bottom-Left White Glass Card: CHĂM SÓC CƠ THỂ */}
              <div className="flex max-w-md items-center gap-4 rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-md backdrop-blur-xs">
                <img
                  src={merged.heroBottomCard.image}
                  alt={merged.heroBottomCard.title}
                  className="h-16 w-16 shrink-0 rounded-xl bg-[#f3f5f4] object-cover"
                />
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wide text-[#18181b]">
                    {merged.heroBottomCard.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-gray-500">
                    {merged.heroBottomCard.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Center Portrait Image (4 cols) */}
            <div className="relative flex justify-center lg:col-span-4">
              <div className="h-[360px] w-full max-w-[340px] overflow-hidden rounded-3xl shadow-lg sm:h-[440px]">
                <img
                  src={merged.hero.backgroundImage}
                  alt="Làn da thuần khiết The Cafuné"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: 3 Pill Tags + Floating Jojoba Sunscreen Card (3 cols) */}
            <div className="relative z-10 flex flex-col justify-center lg:col-span-3">
              {/* 3 Pill Tags: Thiên nhiên | Bán chạy | Hiệu quả */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {merged.heroFloatingProduct.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white bg-white/80 px-3 py-1 text-[10px] font-bold text-gray-700 shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* White Floating Product Card */}
              <div className="rounded-3xl border border-white bg-white p-5 shadow-xl">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xs font-extrabold leading-snug text-[#18181b]">
                      {merged.heroFloatingProduct.title}
                    </h3>
                    <span className="mt-0.5 block text-[10px] text-gray-400">
                      {merged.heroFloatingProduct.volume}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddToBag(merged.bestSellers[0])}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-[#d4f068]"
                    aria-label="Xem nhanh"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 overflow-hidden rounded-2xl bg-[#f6f7f6] p-4">
                  <img
                    src={merged.heroFloatingProduct.image}
                    alt={merged.heroFloatingProduct.title}
                    className="mx-auto h-44 w-full object-contain"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-black text-[#18181b]">
                    {merged.heroFloatingProduct.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleAddToBag(merged.bestSellers[0])}
                    className="rounded-full bg-[#18181b] px-3.5 py-1.5 text-[10px] font-bold text-white hover:bg-[#3f6212]"
                  >
                    + Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. BRAND STORY ("Feel Natural, Be Natural") & BENTO CARDS ==================== */}
      <section id="ve-the-cafune" className="mx-auto max-w-[1260px] px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Product Composition Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#e9f5db] via-[#f2f8ea] to-[#d9ed92] p-8 shadow-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#3f6212]">
                <Leaf className="h-3.5 w-3.5" />
                95% ORGANIC BAMBOO &amp; JOJOBA
              </span>
              <h3 className="mt-3 text-xl font-black text-[#18181b]">
                Bộ Đôi Làm Sạch &amp; Bảo Vệ Cơ Thể Toàn Diện
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Cafuné Body Wash 95% Bamboo • Jojoba Sunscreen SPF 50+ • Charcoal Detox
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl bg-white p-4 shadow-md">
                <img
                  src={merged.brandStorySection.leftProductImage}
                  alt="Bộ sản phẩm The Cafuné"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Brand Story Text + 2 Colorful Bento Cards (7 cols) */}
          <div className="lg:col-span-7">
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
              {merged.brandStorySection.introText}
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#18181b] sm:text-4xl">
              {merged.brandStorySection.quote}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
              {merged.brandStorySection.missionText}
            </p>

            <div className="mt-5">
              <a
                href="#best-sellers"
                className="inline-flex items-center gap-2 rounded-full border border-[#18181b] px-5 py-2 text-xs font-bold text-[#18181b] transition hover:bg-[#18181b] hover:text-white"
              >
                <span>{merged.brandStorySection.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* 2 Colorful Bento Cards Below (Sky Blue Water Splash + Warm Peach Care) */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {merged.brandStorySection.bentoCards.map((card) => (
                <div
                  key={card.id}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.bgClass} p-6 shadow-sm`}
                >
                  <span className="inline-block rounded-full bg-white/85 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-gray-900">
                    {card.badge}
                  </span>
                  <h4 className="mt-2.5 text-sm font-black leading-snug text-gray-900">
                    {card.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-gray-800/80">{card.subtitle}</p>
                  <div className="mt-4 overflow-hidden rounded-2xl bg-white/90 p-3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-36 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. BEST SELLERS — DƯỢC MỸ PHẨM LÀNH TÍNH ==================== */}
      <section id="best-sellers" className="bg-[#f7f8f7] py-16">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4d7c0f]">
                THE CAFUNÉ OFFICIAL STORE
              </span>
              <h2 className="mt-1 text-2xl font-black uppercase text-[#18181b] sm:text-3xl">
                Sản Phẩm Lành Tính Bán Chạy Nhất
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {["Tất cả", "Chống nắng", "Chăm sóc cơ thể", "Dưỡng da mặt"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 font-bold transition ${
                    selectedCategory === cat
                      ? "bg-[#18181b] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-2xs transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-[#f3f5f3] p-4">
                    {prod.badge && (
                      <span className="absolute left-3 top-3 rounded-full bg-[#d4f068] px-3 py-1 text-[10px] font-extrabold text-[#18181b]">
                        {prod.badge}
                      </span>
                    )}
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="h-full w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      <span>{prod.category}</span>
                      <span>{prod.volume}</span>
                    </div>
                    <h3 className="mt-1.5 text-sm font-extrabold leading-snug text-[#18181b]">
                      {prod.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
                      {prod.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3.5">
                  <div>
                    <span className="text-sm font-black text-[#18181b]">{prod.price}</span>
                    {prod.oldPrice && (
                      <span className="ml-2 text-[11px] text-gray-400 line-through">
                        {prod.oldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddToBag(prod)}
                    className="rounded-full bg-[#d4f068] px-4 py-2 text-[11px] font-extrabold text-[#18181b] transition hover:bg-[#18181b] hover:text-white"
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. BẢNG THÀNH PHẦN THỰC VẬT CHUẨN KHOA HỌC ==================== */}
      <section className="mx-auto max-w-[1260px] px-4 py-16 sm:px-8">
        <div className="text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4d7c0f]">
            CLEAN BEAUTY FORMULATION
          </span>
          <h2 className="mt-1 text-2xl font-black text-[#18181b] sm:text-3xl">
            Nguồn Nguyên Liệu Thiên Nhiên Minh Bạch
          </h2>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {merged.naturalIngredients.map((ing) => (
            <div
              key={ing.id}
              className="rounded-3xl border border-lime-200/70 bg-[#f9fcef] p-6"
            >
              <span className="inline-block rounded-full bg-[#d4f068] px-3 py-1 text-[10px] font-extrabold text-[#18181b]">
                {ing.percentage}
              </span>
              <h3 className="mt-3 text-base font-extrabold text-[#18181b]">
                {ing.name}
              </h3>
              <p className="text-[11px] font-semibold text-[#4d7c0f]">{ing.origin}</p>
              <p className="mt-2.5 text-xs leading-relaxed text-gray-600">
                {ing.benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 6. PHÁC ĐỒ CHĂM SÓC DA LIỄU CLINIC & ĐẶT LỊCH SOI DA ==================== */}
      <section id="tu-van-da-lieu" className="bg-[#18181b] py-16 text-white">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left: 3 Dermatology Protocols (7 cols) */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4f068]">
                THE CAFUNÉ DERMATOLOGY CLINIC
              </span>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Phác Đồ Chăm Sóc &amp; Phục Hồi Da Thuần Tự Nhiên
              </h2>

              <div className="mt-6 space-y-4">
                {merged.dermatologyTreatments.map((dt) => (
                  <div
                    key={dt.id}
                    className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center"
                  >
                    <img
                      src={dt.image}
                      alt={dt.title}
                      className="h-24 w-28 shrink-0 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold text-[#d4f068]">
                          {dt.step}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-gray-400">
                          <Clock className="h-3 w-3" />
                          {dt.duration}
                        </span>
                      </div>
                      <h3 className="mt-1 text-sm font-extrabold text-white">
                        {dt.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-300">{dt.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Consultation Booking Form (5 cols) */}
            <div className="rounded-3xl bg-white p-7 text-[#18181b] shadow-2xl lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d4f068] px-3 py-1 text-[10px] font-extrabold uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                MIỄN PHÍ SOI DA &amp; TƯ VẤN ROUTINE
              </span>
              <h3 className="mt-3 text-xl font-black">
                Liên Hệ Chuyên Gia Da Liễu The Cafuné
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Để lại thông tin để nhận phác đồ chăm sóc cơ thể &amp; chống nắng lành tính
                phù hợp với làn da của bạn.
              </p>

              {consultSubmitted ? (
                <div className="mt-6 rounded-2xl bg-lime-50 p-5 text-center text-xs text-lime-950">
                  <CheckCircle2 className="mx-auto mb-2 h-9 w-9 text-[#4d7c0f]" />
                  <p className="text-sm font-extrabold">Đã gửi yêu cầu tư vấn thành công!</p>
                  <p className="mt-1">
                    Chuyên viên Da liễu {merged.business.name} sẽ liên hệ SĐT{" "}
                    <strong>{consultPhone}</strong> trong 10 phút.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConsultSubmitted(true);
                  }}
                  className="mt-5 space-y-3.5 text-xs"
                >
                  <div>
                    <label className="mb-1 block font-bold text-gray-700">
                      Họ và tên của bạn *
                    </label>
                    <input
                      type="text"
                      required
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      placeholder="Nhập họ và tên..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#18181b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-bold text-gray-700">
                      Số điện thoại Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      value={consultPhone}
                      onChange={(e) => setConsultPhone(e.target.value)}
                      placeholder="Ví dụ: 0909 882 345"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#18181b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-bold text-gray-700">
                      Nhu cầu chăm sóc da
                    </label>
                    <select
                      aria-label="Nhu cầu chăm sóc da"
                      value={consultConcern}
                      onChange={(e) => setConsultConcern(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#18181b] focus:outline-none"
                    >
                      <option value="Tư vấn Kem Chống Nắng Jojoba & Da nhạy cảm">
                        Tư vấn Kem Chống Nắng Jojoba SPF 50+ &amp; Da nhạy cảm
                      </option>
                      <option value="Tư vấn Sữa tắm Tre non 95% & Chăm sóc cơ thể">
                        Tư vấn Sữa tắm Tre non 95% &amp; Chăm sóc cơ thể
                      </option>
                      <option value="Đặt lịch soi da AI & trị liệu tại Clinic">
                        Đặt lịch soi da AI &amp; trị liệu tại Clinic
                      </option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#d4f068] py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#18181b] shadow-md transition hover:bg-[#c2e44c]"
                  >
                    Nhận Tư Vấn Ngay
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. BLOG LÀM ĐẸP THUẦN KHIẾT ==================== */}
      <section id="blog-cafune" className="mx-auto max-w-[1260px] px-4 py-16 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4d7c0f]">
              THE CAFUNÉ JOURNAL
            </span>
            <h2 className="mt-1 text-2xl font-black text-[#18181b]">
              Góc Chia Sẻ Chăm Sóc Cơ Thể Lành Tính
            </h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-3">
          {merged.blogPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xs transition hover:shadow-lg"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase text-gray-400">
                  <span className="text-[#4d7c0f]">{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-2 text-sm font-extrabold leading-snug text-[#18181b] group-hover:text-[#4d7c0f]">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== 8. FOOTER ==================== */}
      <footer className="border-t border-gray-200 bg-[#f7f8f7] pt-12 text-xs text-gray-600">
        <div className="mx-auto max-w-[1260px] px-4 pb-10 sm:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="inline-flex flex-col border-y border-[#18181b] py-1">
                <span className="text-base font-black uppercase tracking-[0.14em] text-[#18181b]">
                  {merged.business.name}
                </span>
                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {merged.slogan}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-gray-500">
                Công ty Cổ phần Dược Mỹ phẩm Cafuné — Chăm sóc cơ thể và làn da với những
                sản phẩm lành tính chiết xuất từ thiên nhiên.
              </p>
            </div>

            <div>
              <h4 className="mb-3 font-extrabold uppercase text-[#18181b]">
                Dòng Sản Phẩm
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#best-sellers" className="hover:text-black">
                    Kem Chống Nắng Jojoba SPF 50+
                  </a>
                </li>
                <li>
                  <a href="#best-sellers" className="hover:text-black">
                    Sữa Tắm Tre Non Cafuné 95%
                  </a>
                </li>
                <li>
                  <a href="#best-sellers" className="hover:text-black">
                    Bột Than Hoạt Tính Detox
                  </a>
                </li>
                <li>
                  <a href="#best-sellers" className="hover:text-black">
                    Tinh Chất Phục Hồi Da Nhạy Cảm
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-extrabold uppercase text-[#18181b]">
                Cam Kết Chất Lượng
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#4d7c0f]" />
                  <span>100% Công bố Bộ Y Tế</span>
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-[#4d7c0f]" />
                  <span>Chiết xuất thiên nhiên lành tính</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4d7c0f]" />
                  <span>Đổi trả miễn phí trong 14 ngày</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-extrabold uppercase text-[#18181b]">
                Thông Tin Liên Hệ
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#4d7c0f]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#4d7c0f]" />
                  <span>{merged.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#4d7c0f]" />
                  <span>{merged.business.email[0]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-4 text-center text-[11px] text-gray-500">
          © Bản quyền thuộc về <strong className="text-[#18181b]">{merged.business.name}</strong>{" "}
          — Feel Natural, Be Natural | Thiết kế bởi <strong className="text-[#18181b]">MONA.Media</strong>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
