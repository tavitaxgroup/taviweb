"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  CheckCircle2,
  Phone,
  Scissors,
  Utensils,
  Stethoscope,
  Award,
  Star,
  Tag,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  Send,
  ChevronUp,
  X
} from "lucide-react";
import { adaptClonedTemplateData, type ClonedTemplateInput } from "@/lib/demo/clonedTemplateUtils";
import {
  phongKham10DefaultData,
  type PhongKham10Data,
  type PhongKham10Product
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  companyName?: string;
}

export function DemoTemplateRenderer({ data, companyName }: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<PhongKham10Data>(phongKham10DefaultData, {
    ...(data || {}),
    ...(companyName ? { companyName } : {})
  });

  const [activeProductTab, setActiveProductTab] = useState<string>("Tất cả");
  const [cartCount, setCartCount] = useState<number>(0);
  const [toast, setToast] = useState<string | null>(null);
  const [selectedPlanBooking, setSelectedPlanBooking] = useState<string | null>(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingDone, setBookingDone] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const filteredProducts =
    activeProductTab === "Tất cả"
      ? merged.featuredProducts
      : merged.featuredProducts.filter((p) => p.category === activeProductTab);

  const handleBuyProduct = (prod: PhongKham10Product) => {
    setCartCount((c) => c + 1);
    setToast(`Đã thêm "${prod.name}" (${prod.price}) vào giỏ hàng!`);
    setTimeout(() => setToast(null), 2600);
  };

  return (
    <div id="top" className="min-h-screen bg-white font-sans text-[#1e293b] antialiased">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-[#1b1b1b] px-5 py-3 text-xs font-bold text-white shadow-xl">
          <CheckCircle2 className="h-4 w-4 text-[#f6b93b]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Package Booking Modal */}
      {selectedPlanBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setSelectedPlanBooking(null);
                setBookingDone(false);
              }}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-1.5 text-gray-500 hover:bg-gray-200"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#f36f45]">
              🐾 ĐẶT LỊCH GÓI CHĂM SÓC THÚ CƯNG
            </span>
            <h3 className="mt-1 text-xl font-black text-[#1e293b]">{selectedPlanBooking}</h3>

            {bookingDone ? (
              <div className="mt-5 rounded-2xl bg-amber-50 p-5 text-center text-xs text-amber-900">
                <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-[#f6b93b]" />
                <p className="font-bold">Đặt lịch thành công!</p>
                <p className="mt-1">
                  Phòng khám {merged.business.name} sẽ liên hệ số{" "}
                  <strong>{bookingPhone}</strong> để xác nhận giờ đón bé.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingDone(true);
                }}
                className="mt-4 space-y-3"
              >
                <div>
                  <label className="mb-1 block text-xs font-bold text-gray-700">
                    Tên chủ nuôi &amp; Tên bé thú cưng *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="Ví dụ: Chị Lan - Bé Mèo Mochi"
                    className="w-full rounded-full border border-gray-200 bg-[#fbf5ee] px-4 py-2.5 text-xs focus:border-[#f6b93b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-gray-700">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    placeholder="Ví dụ: 0909 123 456"
                    className="w-full rounded-full border border-gray-200 bg-[#fbf5ee] px-4 py-2.5 text-xs focus:border-[#f6b93b] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#f6b93b] py-3 text-xs font-extrabold uppercase text-white shadow-md hover:bg-[#e5a629]"
                >
                  Xác Nhận Đặt Lịch Ngay
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ==================== 1. FULL-BLEED DARK CAT HERO + TRANSPARENT HEADER ==================== */}
      <div className="relative bg-[#1b1b1b]">
        <div className="relative min-h-[540px] w-full overflow-hidden">
          <img
            src={merged.hero.backgroundImage}
            alt={merged.hero.title}
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

          {/* Top Transparent Header */}
          <header className="relative z-20 border-b border-white/10">
            <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-4">
              {/* Left Logo */}
              <a href="#top" className="flex flex-col items-center text-white">
                <span className="text-xl">🐕‍🦺</span>
                <span className="text-xs font-black tracking-widest">
                  {merged.business.name}
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[#f6b93b]">
                  PET CARE CLINIC
                </span>
              </a>

              {/* Center Links */}
              <nav className="hidden items-center gap-7 text-xs font-bold text-white/90 md:flex">
                <a href="#top" className="text-[#f6b93b]">
                  Trang chủ
                </a>
                <a href="#gioi-thieu" className="hover:text-[#f6b93b]">
                  Giới thiệu
                </a>
                <a href="#dich-vu" className="hover:text-[#f6b93b]">
                  Dịch vụ
                </a>
                <a href="#san-pham-noi-bat" className="hover:text-[#f6b93b]">
                  Sản phẩm
                </a>
                <a href="#tin-tuc" className="hover:text-[#f6b93b]">
                  Tin tức
                </a>
                <a href="#lien-he-map" className="hover:text-[#f6b93b]">
                  Liên hệ
                </a>
              </nav>

              {/* Right Icons */}
              <div className="flex items-center gap-4 text-white">
                <button
                  type="button"
                  onClick={() => setToast("Tìm kiếm thức ăn, phụ kiện hoặc gói khám thú y...")}
                  className="hover:text-[#f6b93b]"
                  aria-label="Tìm kiếm"
                >
                  <Search className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setToast(`Giỏ hàng của bạn đang có ${cartCount} sản phẩm.`)}
                  className="relative hover:text-[#f6b93b]"
                  aria-label="Giỏ hàng"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#f6b93b] text-[9px] font-extrabold text-[#1b1b1b]">
                    {cartCount}
                  </span>
                </button>
                <button
                  type="button"
                  className="hover:text-[#f6b93b]"
                  aria-label="Tài khoản"
                >
                  <User className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Center-Left Copy */}
          <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col justify-center px-4 pb-28 pt-16 text-white sm:pt-24">
            <span className="w-fit border-b border-[#f6b93b] pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-200">
              {merged.hero.eyebrow}
            </span>
            <h1 className="mt-4 whitespace-pre-line text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl">
              {merged.hero.title}
            </h1>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-200 sm:text-sm">
              {merged.hero.subtitle}
            </p>
            <div className="mt-7">
              <a
                href={merged.hero.ctaLink}
                className="inline-block rounded-full bg-[#f6b93b] px-7 py-3 text-xs font-extrabold text-white shadow-lg transition hover:bg-[#e5a629]"
              >
                {merged.hero.ctaText}
              </a>
            </div>
          </div>
        </div>

        {/* 3 Overlapping Quick Category Cards at Bottom of Hero */}
        <div className="relative z-20 mx-auto -mt-14 max-w-[1000px] px-4">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {merged.heroQuickCards.map((card) => (
              <div
                key={card.id}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl transition hover:-translate-y-1"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl text-white shadow-sm"
                  style={{ backgroundColor: card.bgColor }}
                >
                  {card.iconType === "cat" ? "🐱" : card.iconType === "vet" ? "👩‍⚕️" : "🐶"}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#1e293b]">{card.title}</h3>
                  <p className="mt-1 text-[11px] leading-snug text-gray-400">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== 2. GIỚI THIỆU (2-COLUMN SPLIT + 25+ YEARS BADGE) ==================== */}
      <section id="gioi-thieu" className="mx-auto max-w-[1140px] px-4 pb-14 pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Copy & 2x2 Checklist */}
          <div className="lg:col-span-6">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f6b93b]">
              🐾 {merged.aboutSection.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-[#1e293b] sm:text-4xl">
              {merged.aboutSection.title}
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-gray-500 sm:text-sm">
              {merged.aboutSection.description}
            </p>

            {/* 2x2 Checklist */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {merged.aboutSection.checklist.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00839b]" />
                  <span className="text-xs font-extrabold text-[#1e293b]">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA + Call Anytime */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#bang-gia"
                className="inline-block rounded-full bg-[#f6b93b] px-7 py-3 text-xs font-extrabold text-white shadow-md transition hover:bg-[#e5a629]"
              >
                Khám phá
              </a>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff5eb] text-[#f36f45]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">Gọi tư vấn 24/7</p>
                  <p className="text-xs font-extrabold text-[#1e293b]">
                    {merged.business.phone[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Organic Photo + Floating "25+ Years Experience" Card */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="overflow-hidden rounded-[90px_50px_100px_40px] shadow-xl">
              <img
                src={merged.aboutSection.image}
                alt={merged.aboutSection.title}
                className="h-[360px] w-full max-w-[520px] object-cover sm:h-[400px]"
              />
            </div>

            {/* White Floating Experience Badge */}
            <div className="absolute bottom-6 left-4 rounded-2xl border border-amber-100 bg-white px-6 py-4 shadow-xl sm:left-8">
              <span className="block text-3xl font-black text-[#f6b93b]">
                {merged.aboutSection.experienceCount}
              </span>
              <span className="text-[11px] font-semibold text-gray-400">
                {merged.aboutSection.experienceLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. DỊCH VỤ ĐA DẠNG (4 WARM CREAM PAW CARDS) ==================== */}
      <section id="dich-vu" className="mx-auto max-w-[1140px] px-4 py-12">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f6b93b]">
            🐾 DỊCH VỤ ĐA DẠNG
          </p>
          <h2 className="mt-1.5 text-2xl font-black text-[#1e293b] sm:text-3xl">
            Cung cấp dịch vụ
            <br />
            chất lượng nhất
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {merged.diverseServices.map((srv) => {
            const IconComp =
              srv.iconType === "grooming"
                ? Scissors
                : srv.iconType === "food"
                  ? Utensils
                  : srv.iconType === "care"
                    ? Stethoscope
                    : Award;
            return (
              <div
                key={srv.id}
                className="relative overflow-hidden rounded-2xl bg-[#fbf5ee] p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="pointer-events-none absolute -right-2 -top-2 select-none text-6xl opacity-10">
                  🐾
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#f6b93b] shadow-2xs">
                  <IconComp className="h-5 w-5" />
                </div>
                <h3 className="mt-5 whitespace-pre-line text-base font-extrabold leading-snug text-[#1e293b]">
                  {srv.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-gray-500">
                  {srv.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 4. SẢN PHẨM NỔI BẬT (8-PRODUCT E-COMMERCE GRID) ==================== */}
      <section id="san-pham-noi-bat" className="mx-auto max-w-[1140px] px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f6b93b]">
              🐾 CHẤT LƯỢNG
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#1e293b] sm:text-3xl">
              Sản phẩm nổi bật
            </h2>
          </div>

          {/* Filter Tabs: Tất cả | Thức ăn | Đồ chơi | Đồ dùng */}
          <div className="flex items-center gap-5 text-xs font-bold">
            {["Tất cả", "Thức ăn", "Đồ chơi", "Đồ dùng"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveProductTab(tab)}
                className={`pb-1 transition ${
                  activeProductTab === tab
                    ? "border-b-2 border-[#1e293b] text-[#1e293b]"
                    : "text-gray-400 hover:text-[#1e293b]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => handleBuyProduct(prod)}
              className="group cursor-pointer text-center"
            >
              <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-2xl bg-[#f7f7f7] p-6 transition group-hover:shadow-md">
                {prod.saleBadge && (
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#3b82f6] text-[10px] font-bold text-white">
                    {prod.saleBadge}
                  </span>
                )}
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* 5 Gold Stars */}
              <div className="mt-3 flex items-center justify-center gap-0.5 text-[#f6b93b]">
                {Array.from({ length: prod.rating }).map((_, idx) => (
                  <Star key={idx} className="h-3 w-3 fill-current" />
                ))}
              </div>

              <h4 className="mt-1 text-xs font-extrabold text-[#1e293b] group-hover:text-[#f36f45]">
                {prod.name}
              </h4>

              <div className="mt-1 flex items-center justify-center gap-2 text-xs">
                <span className="font-bold text-[#f6b93b]">{prod.price}</span>
                {prod.oldPrice && (
                  <span className="text-[11px] text-gray-400 line-through">
                    {prod.oldPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 5. FULL-WIDTH PEACH PROMO BANNER (30% OFF) ==================== */}
      <section className="my-8 overflow-hidden bg-gradient-to-r from-[#f8b18b] via-[#f7a87e] to-[#f8bd9c]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-6 py-12 lg:grid-cols-12">
          {/* Left Toys & Kibble Image (3 cols) */}
          <div className="hidden lg:col-span-3 lg:block">
            <img
              src={merged.weeklyPromoBanner.leftImage}
              alt="Đồ chơi & dinh dưỡng"
              className="h-60 w-60 rounded-full border-4 border-white/50 object-cover shadow-lg"
            />
          </div>

          {/* Center Copy (5 cols) */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-white/90">
              {merged.weeklyPromoBanner.eyebrow}
            </p>
            <h2 className="mt-2 whitespace-pre-line text-3xl font-black leading-tight text-[#1e293b] sm:text-4xl">
              {merged.weeklyPromoBanner.title}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-white/95">
              {merged.weeklyPromoBanner.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#bang-gia"
                className="inline-block rounded-full bg-[#f6b93b] px-7 py-3 text-xs font-extrabold text-white shadow-md hover:bg-[#e5a629]"
              >
                {merged.weeklyPromoBanner.ctaText}
              </a>
              <span className="text-2xl text-white">↝</span>
            </div>
          </div>

          {/* Right Beagle Puppy + 30% Off Starburst (4 cols) */}
          <div className="relative flex items-center justify-center lg:col-span-4">
            <div className="relative">
              <img
                src={merged.weeklyPromoBanner.rightImage}
                alt="Ưu đãi 30%"
                className="h-64 w-64 rounded-full border-4 border-white object-cover shadow-xl"
              />
              <div className="absolute bottom-2 left-0 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#1b1b1b] text-center text-white shadow-lg">
                <span className="whitespace-pre-line text-sm font-black leading-tight text-[#f6b93b]">
                  {merged.weeklyPromoBanner.discountText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. NGẮM NHỮNG HÌNH ẢNH CHÂN THỰC (8-IMAGE STAGGERED GALLERY) ==================== */}
      <section className="mx-auto max-w-[1040px] px-4 py-14">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f6b93b]">
            🐾 HÌNH ẢNH
          </p>
          <h2 className="mt-1.5 text-2xl font-black text-[#1e293b] sm:text-3xl">
            Ngắm những hình ảnh
            <br />
            chân thực
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {merged.galleryImages.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-2xl shadow-sm ${
                idx % 2 === 1 ? "sm:mt-6" : ""
              }`}
            >
              <img
                src={imgUrl}
                alt={`Hình ảnh thực tế ${idx + 1}`}
                className="h-48 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 7. THREE PRICING PLANS (350K / 450K / 550K) ==================== */}
      <section id="bang-gia" className="mx-auto max-w-[1040px] px-4 py-12">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {merged.pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative overflow-hidden rounded-3xl bg-[#fbf5ee] p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fdebd0] text-2xl">
                {plan.petIcon === "cat" ? "🐱" : plan.petIcon === "dog" ? "🐶" : "🐹"}
              </div>

              <div className="mt-4">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  VISIT
                </span>
                <p className="text-3xl font-black text-[#1e293b]">{plan.price}</p>
                <p className="mt-1 text-xs font-bold text-[#f6b93b]">{plan.planName}</p>
              </div>

              <div className="mt-6 border-t border-amber-200/60 pt-5">
                <p className="text-xs font-extrabold text-[#1e293b]">Bao gồm:</p>
                <ul className="mt-3 space-y-2 text-xs text-gray-500">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#00839b]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedPlanBooking(`${plan.planName} (${plan.price} / Lần)`)
                  }
                  className="rounded-full bg-[#f6b93b] px-6 py-2 text-xs font-extrabold text-white shadow-sm transition hover:bg-[#e5a629]"
                >
                  Đặt ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 8. FULL-WIDTH CORAL NUTRITION BANNER (399,000₫) ==================== */}
      <section className="my-10 overflow-hidden bg-[#f36f45] text-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-6 py-14 lg:grid-cols-12">
          {/* Left Product Packs (4 cols) */}
          <div className="flex justify-center lg:col-span-4">
            <img
              src={merged.featuredNutritionBanner.productPackImage}
              alt="Thức ăn thú cưng"
              className="h-64 w-64 rounded-3xl border-4 border-white/30 bg-white object-contain p-4 shadow-2xl"
            />
          </div>

          {/* Center 399,000₫ Badge & Copy (5 cols) */}
          <div className="lg:col-span-5">
            <span className="inline-block rounded-xl bg-[#f6b93b] px-5 py-2 text-2xl font-black text-white shadow-md">
              {merged.featuredNutritionBanner.priceBadge}
            </span>
            <h2 className="mt-4 whitespace-pre-line text-3xl font-black leading-tight sm:text-4xl">
              {merged.featuredNutritionBanner.title}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-white/90">
              {merged.featuredNutritionBanner.description}
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() =>
                  handleBuyProduct({
                    id: "combo-399",
                    name: "Combo Dinh Dưỡng Thú Cưng Hàng Đầu",
                    price: merged.featuredNutritionBanner.priceBadge,
                    rating: 5,
                    category: "Thức ăn",
                    image: merged.featuredNutritionBanner.productPackImage
                  })
                }
                className="rounded-full bg-[#1b1b1b] px-7 py-3 text-xs font-extrabold text-white shadow-lg transition hover:bg-white hover:text-[#1b1b1b]"
              >
                {merged.featuredNutritionBanner.ctaText}
              </button>
            </div>
          </div>

          {/* Right Pets Group Photo (3 cols) */}
          <div className="flex justify-center lg:col-span-3">
            <img
              src={merged.featuredNutritionBanner.petsGroupImage}
              alt="Thú cưng khỏe mạnh"
              className="h-56 w-56 rounded-full border-4 border-white/40 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ==================== 9. TIN TỨC MỚI NHẤT (3 CARDS WITH 04 TH5 GREEN RIBBON) ==================== */}
      <section id="tin-tuc" className="mx-auto max-w-[1040px] px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f6b93b]">
              🐾 BÀI VIẾT
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#1e293b] sm:text-3xl">
              Tin tức mới nhất
            </h2>
          </div>
          <p className="max-w-sm text-xs text-gray-400">
            Cẩm nang chăm sóc sức khỏe, lịch tiêm phòng và chế độ dinh dưỡng chuẩn thú y cho
            chó mèo.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-3">
          {merged.blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-0 rounded-r-full bg-[#5eb946] px-3 py-1 text-[10px] font-extrabold uppercase text-white">
                    {post.dateRibbon}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Tag className="h-3 w-3 text-[#f36f45]" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3 text-[#f36f45]" />
                      {post.commentsCount} Bình luận
                    </span>
                  </div>

                  <h3 className="mt-2.5 line-clamp-2 text-sm font-extrabold leading-snug text-[#1e293b] group-hover:text-[#f36f45]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <a
                  href="#bang-gia"
                  className="inline-block rounded-full bg-[#fbf5ee] px-4 py-1.5 text-[11px] font-bold text-gray-700 transition group-hover:bg-[#f6b93b] group-hover:text-white"
                >
                  Đọc thêm
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== 10. MAP SECTION WITH FLOATING "THÔNG TIN LIÊN HỆ" CARD ==================== */}
      <section id="lien-he-map" className="relative mt-6 bg-[#eef2f6] py-16">
        {/* Stylized Map Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1500&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-sky-900/10" />

        <div className="relative z-10 mx-auto flex max-w-[1040px] justify-end px-4">
          <div className="w-full max-w-sm rounded-3xl bg-white p-7 shadow-2xl">
            <h3 className="text-lg font-black text-[#1e293b]">Thông tin liên hệ</h3>
            <ul className="mt-4 space-y-3 text-xs text-gray-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f6b93b]" />
                <span>{merged.business.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#f6b93b]" />
                <span>{merged.business.phone[0]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#f6b93b]" />
                <span>{merged.business.workingHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#f6b93b]" />
                <span>{merged.business.email[0]}</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {["tw", "fb", "pi", "ig"].map((s) => (
                  <a
                    key={s}
                    href="#top"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[10px] font-bold text-gray-700 hover:bg-[#f6b93b] hover:text-white"
                  >
                    {s}
                  </a>
                ))}
              </div>
              <span className="text-2xl">🐶🐱</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 11. OVERLAPPING GOLDEN NEWSLETTER + DARK FOOTER ==================== */}
      <footer className="relative bg-[#1b1b1b] pt-24 text-gray-300">
        {/* Overlapping Golden Newsletter Bar */}
        <div className="mx-auto -mt-36 mb-12 max-w-[1000px] px-4">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#fbb03b] px-6 py-7 text-white shadow-xl md:flex-row md:px-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base font-extrabold leading-snug sm:text-lg">
                Đăng ký ngay để được
                <br />
                nhận tin tức mới nhất.
              </h3>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) {
                  setNewsletterDone(true);
                  setNewsletterEmail("");
                }
              }}
              className="flex w-full max-w-md items-center border-b border-white/80 pb-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Nhập email..."
                className="flex-1 bg-transparent text-xs text-white placeholder-white/85 focus:outline-none"
              />
              <button
                type="submit"
                className="text-xs font-extrabold uppercase text-white hover:underline"
              >
                Gửi
              </button>
            </form>
          </div>
          {newsletterDone && (
            <p className="mt-2 text-center text-xs font-bold text-[#fbb03b]">
              ✓ Cảm ơn bạn đã đăng ký nhận tin tức &amp; ưu đãi từ {merged.business.name}!
            </p>
          )}
        </div>

        {/* 4-Column Dark Footer */}
        <div className="mx-auto max-w-[1140px] px-4 pb-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1 */}
            <div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">🐕‍🦺</span>
                <div>
                  <span className="block text-sm font-black uppercase tracking-wider">
                    {merged.business.name}
                  </span>
                  <span className="text-[9px] font-bold uppercase text-[#f6b93b]">
                    PET CARE &amp; NUTRITION
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-400">
                Phòng khám chăm sóc sức khỏe, spa cắt tỉa lông và siêu thị dinh dưỡng thú cưng
                uy tín hàng đầu tại TP.HCM.
              </p>
              <div className="mt-5 flex items-center gap-2.5">
                {["tw", "fb", "pi", "ig"].map((soc) => (
                  <a
                    key={soc}
                    href="#top"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white hover:bg-[#f6b93b]"
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-white">
                Danh mục
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#f6b93b]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#f6b93b]">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#san-pham-noi-bat" className="hover:text-[#f6b93b]">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#f6b93b]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he-map" className="hover:text-[#f6b93b]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Gallery 2x3 */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-white">
                Gallery
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {merged.footerGallery.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`Pet gallery ${idx + 1}`}
                    className="h-14 w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Col 4: Liên hệ */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-white">
                Liên hệ
              </h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f6b93b]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#f6b93b]" />
                  <span>{merged.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-[#f6b93b]" />
                  <span>{merged.business.workingHours}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#f6b93b]" />
                  <span>{merged.business.email[0]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-[11px] text-gray-400">
          © Thiết kế và lập trình bởi <strong className="text-white">MONA.Media / Website</strong>
        </div>

        <a
          href="#top"
          className="fixed bottom-5 right-5 z-40 flex h-9 w-9 items-center justify-center rounded bg-[#00839b] text-white shadow-lg hover:bg-[#f6b93b]"
          aria-label="Lên đầu trang"
        >
          <ChevronUp className="h-4 w-4" />
        </a>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
