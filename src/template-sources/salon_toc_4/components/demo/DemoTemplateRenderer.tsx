"use client";

import React, { useState } from "react";
import {
  User,
  ShoppingCart,
  Heart,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FlaskConical,
  Smile,
  Calendar,
  FileText,
  X,
  Menu,
  CheckCircle2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  salonToc4DefaultData,
  SalonToc4Data,
  SalonToc4Product,
} from "@/template-sources/salon_toc_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function PerfumeLogo({ brandName }: { brandName: string }) {
  return (
    <div className="inline-flex flex-col items-start select-none leading-none">
      <div className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900 lowercase">
        perfume
        <span className="text-[#f06262]">.</span>
      </div>
      <span className="text-[8px] font-medium tracking-[0.22em] text-zinc-400 lowercase mt-0.5">
        {brandName.toLowerCase()}
      </span>
    </div>
  );
}

function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onSelect,
}: {
  product: SalonToc4Product;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onSelect: (p: SalonToc4Product) => void;
}) {
  return (
    <div className="group flex flex-col">
      {/* Bordered White Square Box */}
      <div className="relative aspect-[4/5] border border-gray-100 bg-white p-3 mb-2 flex items-center justify-center overflow-hidden group-hover:border-gray-300 transition-colors">
        {/* Stacked Left Pill Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col items-start gap-1">
          {product.badges.map((b, idx) => {
            const bgClass =
              b.color === "coral"
                ? "bg-[#f06262]"
                : b.color === "green"
                ? "bg-[#689f38]"
                : "bg-[#e69a28]";
            return (
              <span
                key={idx}
                className={`${bgClass} text-white text-[8px] font-bold uppercase px-2 py-0.5 rounded-full leading-tight`}
              >
                {b.text}
              </span>
            );
          })}
        </div>

        {/* Top-Right Wishlist Heart */}
        <button
          type="button"
          onClick={() => onToggleWishlist(product.id)}
          aria-label="Yêu thích"
          className={`absolute top-2 right-2 z-10 transition-colors cursor-pointer ${
            isWishlisted
              ? "text-[#f06262]"
              : "text-zinc-300 hover:text-[#f06262]"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          onClick={() => onSelect(product)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
        />
      </div>

      <h3
        onClick={() => onSelect(product)}
        className="text-[11px] font-medium text-zinc-700 group-hover:text-[#f06262] transition-colors line-clamp-1 cursor-pointer"
      >
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 text-[11px] mt-0.5">
        <span className="line-through text-zinc-300 text-[10px]">
          {product.oldPrice}
        </span>
        <span className="font-bold text-zinc-800">{product.price}</span>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: SalonToc4Data = adaptClonedTemplateData(
    salonToc4DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBestSellerTab, setActiveBestSellerTab] = useState<
    "NỮ GIỚI" | "NAM GIỚI" | "MỚI NHẤT" | "KHUYẾN MÃI" | "PHỔ BIẾN"
  >("NỮ GIỚI");
  const [activeLuxuryTab, setActiveLuxuryTab] = useState<
    "Phổ biến" | "Bán chạy" | "Khuyến mãi" | "Mới nhất"
  >("Phổ biến");
  const [activeDealIndex, setActiveDealIndex] = useState(1); // Matches ST007 where 2nd mini item has coral left bar
  const [wishlistIds, setWishlistIds] = useState<string[]>(["pf-1", "pf-5"]);
  const [cartCount, setCartCount] = useState(1);
  const [selectedProductModal, setSelectedProductModal] =
    useState<SalonToc4Product | null>(null);
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reorder 12 products so matching tab appears first
  const sortedBestSellers = [...data.products].sort((a, b) => {
    const aMatch = a.tab === activeBestSellerTab ? -1 : 1;
    const bMatch = b.tab === activeBestSellerTab ? -1 : 1;
    return aMatch - bMatch;
  });

  const currentDeal =
    data.deals[activeDealIndex % data.deals.length] || data.deals[0];

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderForm.name.trim() || !orderForm.phone.trim()) return;
    setCartCount((c) => c + 1);
    setOrderSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-[#f06262] selection:text-white">
      {/* 1. MINIMALIST WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#trang-chu" className="focus:outline-none">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <PerfumeLogo brandName={data.business.name} />
            )}
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-600">
            <a
              href="#trang-chu"
              className="text-zinc-900 font-semibold border-b border-zinc-900 pb-0.5"
            >
              Trang chủ
            </a>
            <a
              href="#mui-huong"
              className="hover:text-[#f06262] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#ban-chay"
              className="hover:text-[#f06262] transition-colors"
            >
              Sản phẩm
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#f06262] transition-colors"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#f06262] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-3.5 text-zinc-700">
            <button
              type="button"
              onClick={() => {
                setOrderSubmitted(false);
                setSelectedProductModal(data.products[0]);
              }}
              aria-label="Tài khoản"
              className="hover:text-[#f06262] transition-colors cursor-pointer"
            >
              <User className="w-4 h-4 stroke-[1.6]" />
            </button>
            <button
              type="button"
              onClick={() => {
                setOrderSubmitted(false);
                setSelectedProductModal(data.products[0]);
              }}
              aria-label="Giỏ hàng"
              className="relative hover:text-[#f06262] transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 stroke-[1.6]" />
              <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-[#f06262] text-white text-[8px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <a
              href="#ban-chay"
              aria-label="Yêu thích"
              className="hover:text-[#f06262] transition-colors"
            >
              <Heart className="w-4 h-4 stroke-[1.6]" />
            </a>
            <a
              href="#ban-chay"
              aria-label="Tìm kiếm"
              className="hover:text-[#f06262] transition-colors"
            >
              <Search className="w-4 h-4 stroke-[1.6]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-zinc-700"
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
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2 text-xs font-medium">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 font-bold text-[#f06262]"
            >
              Trang chủ
            </a>
            <a
              href="#ban-chay"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              Nước Hoa &amp; Tinh Dầu Bán Chạy
            </a>
            <a
              href="#khuyen-mai"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              Khuyến mãi giới hạn
            </a>
            <a
              href="#cao-cap"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              Nước Hoa Cao Cấp
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 2. ALABASTER GRAY FLAT-LAY HERO (#f2f2f2) */}
      <section
        id="trang-chu"
        className="relative bg-[#efefef] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Left Typography */}
          <div className="md:col-span-6 space-y-3 md:pl-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500">
              {data.hero.eyebrow || "M O N A   S T O R E"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-normal text-zinc-800 leading-[1.22] whitespace-pre-line">
              {data.hero.title}
            </h1>
            <div className="pt-3">
              <a
                href={data.hero.ctaLink || "#ban-chay"}
                className="inline-block bg-zinc-900 hover:bg-[#f06262] text-white text-[11px] font-bold uppercase tracking-wider px-7 py-2.5 transition-colors"
              >
                {data.hero.ctaText || "MUA NGAY"}
              </a>
            </div>
          </div>

          {/* Right Flat-Lay Perfume Visual */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-xs shadow-lg border-4 border-white/70">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Coral Pill Indicator */}
        <div className="pb-4 flex justify-center gap-1.5">
          <span className="w-4 h-1 rounded-full bg-[#f06262]" />
          <span className="w-1.5 h-1 rounded-full bg-zinc-300" />
        </div>
      </section>

      {/* 3. 3 HORIZONTAL PROMO CARDS */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.topBanners.map((banner, idx) => (
              <div
                key={banner.id}
                className="bg-[#f3f3f3] p-6 flex items-center justify-between gap-4 overflow-hidden group"
              >
                <div
                  className={`space-y-2 ${
                    idx === 2 ? "order-2 text-right" : "order-1"
                  }`}
                >
                  <h3 className="text-base sm:text-lg font-medium text-zinc-800 whitespace-pre-line leading-snug">
                    {banner.title}
                  </h3>
                  {banner.promoText && (
                    <p className="text-xs text-zinc-500">
                      {banner.promoText}{" "}
                      <span className="text-[#f06262] font-bold text-base">
                        {banner.promoHighlight}
                      </span>
                    </p>
                  )}
                  {banner.ctaText && (
                    <div className="pt-1">
                      <a
                        href="#ban-chay"
                        className="inline-block border border-zinc-700 hover:bg-zinc-900 hover:text-white text-zinc-800 text-[10px] font-semibold px-3.5 py-1 rounded-full transition-colors"
                      >
                        {banner.ctaText}
                      </a>
                    </div>
                  )}
                </div>

                <div
                  className={`w-28 h-28 shrink-0 overflow-hidden rounded-xs ${
                    idx === 2 ? "order-1" : "order-2"
                  }`}
                >
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "NƯỚC HOA ĐANG BÁN CHẠY" (6x2 GRID = 12 CARDS WITH FILTER TABS) */}
      <section id="ban-chay" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-7">
            <h2 className="text-xl sm:text-2xl font-medium text-zinc-800 mb-4">
              Nước Hoa Đang Bán Chạy
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-medium">
              {(
                [
                  "NỮ GIỚI",
                  "NAM GIỚI",
                  "MỚI NHẤT",
                  "KHUYẾN MÃI",
                  "PHỔ BIẾN",
                ] as const
              ).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveBestSellerTab(tab)}
                  className={`pb-1 transition-colors cursor-pointer ${
                    activeBestSellerTab === tab
                      ? "text-zinc-900 font-bold border-b border-zinc-900"
                      : "text-zinc-400 hover:text-zinc-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sortedBestSellers.slice(0, 12).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={toggleWishlist}
                onSelect={(p) => {
                  setOrderSubmitted(false);
                  setSelectedProductModal(p);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. "KHUYẾN MÃI GIỚI HẠN" SPLIT DEAL BOX */}
      <section id="khuyen-mai" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Coral-Bordered Deal Card (8 Cols) */}
            <div className="lg:col-span-8 border border-[#f06262]/70 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                <h3 className="text-base font-medium text-zinc-800">
                  Khuyến mãi giới hạn
                </h3>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDealIndex(
                        (prev) =>
                          (prev - 1 + data.deals.length) % data.deals.length
                      )
                    }
                    className="hover:text-zinc-800 flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Trước</span>
                  </button>
                  <span>|</span>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDealIndex((prev) => (prev + 1) % data.deals.length)
                    }
                    className="hover:text-zinc-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Sau</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto">
                <div className="sm:col-span-5 flex justify-center">
                  <div className="w-48 h-56 bg-zinc-50 p-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={currentDeal.image}
                      alt={currentDeal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-400 leading-relaxed">
                    {currentDeal.category}
                  </p>
                  <h4 className="text-lg font-medium text-zinc-800">
                    {currentDeal.name}
                  </h4>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-sm line-through text-zinc-300">
                      {currentDeal.oldPrice}
                    </span>
                    <span className="text-base font-bold text-[#f06262]">
                      {currentDeal.price}
                    </span>
                  </div>

                  {/* 4 Countdown Boxes */}
                  <div className="flex items-center gap-2.5 pt-2 pb-3">
                    {[
                      { val: currentDeal.countdown.days, label: "DAYS" },
                      { val: currentDeal.countdown.hours, label: "HOURS" },
                      { val: currentDeal.countdown.mins, label: "MINS" },
                      { val: currentDeal.countdown.secs, label: "SECS" },
                    ].map((box, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-11 h-10 bg-zinc-50 border border-gray-200 flex items-center justify-center text-xs font-bold text-zinc-800">
                          {box.val}
                        </div>
                        <span className="text-[8px] font-bold text-zinc-400 uppercase mt-1 block">
                          {box.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setOrderSubmitted(false);
                      setSelectedProductModal(data.products[4]);
                    }}
                    className="bg-[#f06262] hover:bg-[#e04848] text-white text-[10px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-xs transition-colors cursor-pointer"
                  >
                    THÊM VÀO GIỎ HÀNG
                  </button>
                </div>
              </div>
            </div>

            {/* Right Stack of 4 Mini Deal Cards (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              {data.deals.map((deal, idx) => {
                const isActive = idx === activeDealIndex % data.deals.length;
                return (
                  <div
                    key={deal.id}
                    onClick={() => setActiveDealIndex(idx)}
                    className={`border p-3 flex items-center gap-3.5 cursor-pointer transition-all bg-white ${
                      isActive
                        ? "border-gray-200 border-l-4 border-l-[#f06262]"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-14 h-14 object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-medium text-zinc-700 line-clamp-2 leading-snug mb-1">
                        {deal.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="line-through text-zinc-300">
                          {deal.oldPrice}
                        </span>
                        <span className="font-bold text-[#f06262]">
                          {deal.price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. "TẠO DẤU ẤN RIÊNG CỦA BẠN — KHÁM PHÁ THẾ GIỚI MÙI HƯƠNG ĐA DẠNG" */}
      <section id="mui-huong" className="py-14 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#f06262]">
              TẠO DẤU ẤN RIÊNG CỦA BẠN
            </p>
            <h2 className="text-xl sm:text-2xl font-medium text-zinc-800 mt-1">
              {data.business.aboutTitle ||
                "Khám Phá Thế Giới Mùi Hương Đa Dạng"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            {/* Left Crystal Bottle Showcase */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-64 sm:w-72 aspect-[4/5] rounded-full overflow-hidden border-8 border-white shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80"
                  alt="Chai nước hoa pha lê"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right 4 Coral Circular Icon Rows */}
            <div className="md:col-span-7 space-y-5">
              {data.features.map((feat, idx) => (
                <div key={feat.id} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f06262] text-white flex flex-col items-center justify-center shrink-0 shadow-xs text-[8px] font-bold uppercase text-center leading-tight p-1">
                    {idx === 0 && <span>100% VEGAN</span>}
                    {idx === 1 && <Sparkles className="w-5 h-5" />}
                    {idx === 2 && <FlaskConical className="w-5 h-5" />}
                    {idx === 3 && <Smile className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-800 mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-[11px] italic text-zinc-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. "NƯỚC HOA CAO CẤP" (LEFT TALL BANNER + RIGHT 5x2 PRODUCT GRID) + 6 PARTNER LOGOS */}
      <section id="cao-cap" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header with Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
            <h2 className="text-xl font-medium text-zinc-800">
              Nước Hoa Cao Cấp
            </h2>
            <div className="flex items-center gap-5 text-xs">
              {(["Phổ biến", "Bán chạy", "Khuyến mãi", "Mới nhất"] as const).map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveLuxuryTab(tab)}
                    className={`pb-1 cursor-pointer ${
                      activeLuxuryTab === tab
                        ? "text-zinc-900 font-bold border-b border-zinc-900"
                        : "text-zinc-400 hover:text-zinc-700"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Left Tall Banner (2 Cols) + Right 5x2 Grid (10 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Tall Vertical Banner */}
            <div className="lg:col-span-2 bg-[#e8e8e8] p-5 flex flex-col justify-between relative overflow-hidden min-h-[360px]">
              <div className="relative z-10 space-y-2">
                <h3 className="text-base font-medium text-zinc-800 leading-snug">
                  Hòa mình vào thế giới mùi hương
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  Khám phá bí mật của hương thơm. Từ chất liệu đến cách pha trộn
                </p>
                <div className="pt-1">
                  <a
                    href="#ban-chay"
                    className="inline-block bg-[#f06262] text-white text-[10px] font-bold px-3.5 py-1.5 rounded-xs"
                  >
                    Mua ngay
                  </a>
                </div>
              </div>

              <div className="mt-4 h-48 overflow-hidden rounded-xs">
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80"
                  alt="Borcelle Luxury"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right 5x2 Grid */}
            <div className="lg:col-span-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {data.products.slice(0, 10).map((product) => (
                <ProductCard
                  key={`lux-${product.id}`}
                  product={product}
                  isWishlisted={wishlistIds.includes(product.id)}
                  onToggleWishlist={toggleWishlist}
                  onSelect={(p) => {
                    setOrderSubmitted(false);
                    setSelectedProductModal(p);
                  }}
                />
              ))}
            </div>
          </div>

          {/* 6 Partner Brand Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center pt-12 mt-10 border-t border-gray-100">
            {data.partnerLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex flex-col items-center text-center opacity-75 hover:opacity-100 transition-opacity select-none"
              >
                <span className="text-xs font-extrabold uppercase tracking-tight text-zinc-800">
                  {logo.name}
                </span>
                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-zinc-400 mt-0.5">
                  {logo.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 2-COLUMN CUSTOMER TESTIMONIALS BANNER */}
      <section className="py-14 bg-[#f5f5f5] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
            {(data.testimonials || []).map((t) => (
              <div key={t.id} className="space-y-4">
                <p className="text-xs italic text-zinc-500 leading-relaxed">
                  {t.content}
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover mb-2 border border-white shadow"
                  />
                  <h4 className="text-xs font-bold text-zinc-800">
                    {t.author}
                  </h4>
                  <span className="text-[10px] text-zinc-400">{t.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-1.5">
            <span className="w-4 h-1 rounded-full bg-[#f06262]" />
            <span className="w-1.5 h-1 rounded-full bg-zinc-300" />
          </div>
        </div>
      </section>

      {/* 9. "TIN TỨC MỚI NHẤT" (4 EDITORIAL CARDS) */}
      <section id="tin-tuc" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-medium text-zinc-800 text-center mb-8">
            Tin tức mới nhất
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="aspect-square overflow-hidden bg-zinc-100 mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                  {post.category}
                </span>
                <h3 className="text-xs font-medium text-zinc-800 group-hover:text-[#f06262] transition-colors mt-1 mb-2 line-clamp-1">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>|</span>
                  <span>monamedia</span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    Xem thêm
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE 4-COLUMN FOOTER WITH NEWSLETTER BAR */}
      <footer id="lien-he" className="bg-[#fafafa] border-t border-gray-100 pt-12">
        <div className="max-w-6xl mx-auto px-4 pb-10">
          {/* Top Row: Logo + Socials + Newsletter Input */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 pb-8 border-b border-gray-100">
            <div className="lg:col-span-3">
              <PerfumeLogo brandName={data.business.name} />
            </div>
            <div className="lg:col-span-3 flex items-center gap-4 text-xs font-bold text-zinc-600">
              <span>X</span>
              <span>f</span>
              <span>P</span>
              <span>IG</span>
            </div>
            <div className="lg:col-span-6">
              {newsletterSent ? (
                <p className="text-xs font-bold text-[#689f38]">
                  Đã đăng ký nhận thông tin ưu đãi mới nhất từ{" "}
                  {data.business.name}!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newsletterEmail.trim()) return;
                    setNewsletterSent(true);
                  }}
                  className="flex items-stretch"
                >
                  <input
                    type="email"
                    required
                    placeholder="Địa chỉ Email ..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-white border border-r-0 border-gray-200 px-4 py-2.5 text-xs text-zinc-700 focus:outline-none focus:border-[#f06262]"
                  />
                  <button
                    type="submit"
                    className="bg-[#f06262] hover:bg-[#e04848] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 transition-colors cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 text-xs text-zinc-500">
            <div className="space-y-2">
              <p>{data.business.address}</p>
              <p>{primaryPhone}</p>
              <p>{primaryEmail}</p>
            </div>

            <div className="space-y-2">
              <p className="hover:text-zinc-900 cursor-pointer">
                Thông tin giao hàng
              </p>
              <p className="hover:text-zinc-900 cursor-pointer">
                Chính sách bảo mật
              </p>
              <p className="hover:text-zinc-900 cursor-pointer">
                Điều khoản &amp; Điều kiện
              </p>
              <p className="hover:text-zinc-900 cursor-pointer">
                Chính sách hoàn trả
              </p>
              <p className="hover:text-zinc-900 cursor-pointer">Giới thiệu</p>
            </div>

            <div className="space-y-2">
              <p>
                <a href="#trang-chu" className="hover:text-zinc-900">
                  Trang chủ
                </a>
              </p>
              <p>
                <a href="#mui-huong" className="hover:text-zinc-900">
                  Giới thiệu
                </a>
              </p>
              <p>
                <a href="#ban-chay" className="hover:text-zinc-900">
                  Sản phẩm
                </a>
              </p>
              <p>
                <a href="#tin-tuc" className="hover:text-zinc-900">
                  Tin tức
                </a>
              </p>
              <p>
                <a href="#lien-he" className="hover:text-zinc-900">
                  Liên hệ
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Thứ 2 - Thứ 6</span>
                <span className="text-zinc-700">08:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Thứ 7</span>
                <span className="text-zinc-700">09:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Chủ nhật</span>
                <span className="text-zinc-700">13:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/70 py-4 text-[11px] text-zinc-400">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-zinc-800">TaviWeb</strong> •{" "}
              <span>{data.business.name}</span>
            </p>
            <div className="flex items-center gap-4">
              <span>Chính sách riêng tư</span>
              <span>Chính sách giao hàng</span>
              <span>Chính sách bảo mật</span>
              <span>Giới thiệu</span>
            </div>
          </div>
        </div>
      </footer>

      {/* QUICK ORDER MODAL */}
      {selectedProductModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProductModal(null)}
        >
          <div
            className="bg-white max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f06262] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Đặt Mua Sản Phẩm — {data.business.name}
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
              {orderSubmitted ? (
                <div className="text-center py-4 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#689f38] mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">
                    Đặt hàng thành công!
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Cảm ơn <strong>{orderForm.name}</strong>. Chuyên viên tư vấn
                    mùi hương của <strong>{data.business.name}</strong> sẽ liên
                    hệ qua số <strong>{orderForm.phone}</strong> ngay.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(null)}
                    className="bg-[#f06262] text-white text-xs font-bold px-6 py-2"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleOrderSubmit}
                  className="space-y-3 text-xs"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <img
                      src={selectedProductModal.image}
                      alt={selectedProductModal.name}
                      className="w-16 h-16 object-cover border border-gray-100"
                    />
                    <div>
                      <h4 className="font-bold text-zinc-800">
                        {selectedProductModal.name}
                      </h4>
                      <p className="font-bold text-[#f06262] mt-0.5">
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
                    placeholder="Họ và tên người nhận *"
                    value={orderForm.name}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, name: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#f06262]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    value={orderForm.phone}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#f06262]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#f06262] hover:bg-[#e04848] text-white font-bold uppercase tracking-wider py-2.5 cursor-pointer"
                  >
                    XÁC NHẬN ĐẶT HÀNG
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
