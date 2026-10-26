"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Search,
  Heart,
  ShoppingBag,
  ArrowRight,
  Star,
  Flame,
  Sparkles,
  BadgePercent,
  Utensils,
  Eye,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MessageSquare,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaHang4DefaultData,
  type NhaHang4Data,
  type DishItem
} from "@/template-sources/nha_hang_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NhaHang4Data = adaptClonedTemplateData(
    nhaHang4DefaultData,
    incomingData
  );

  const [activeDietTab, setActiveDietTab] = useState<"fastfood" | "healthy">("fastfood");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [cartCount, setCartCount] = useState<number>(2);
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);

  const filteredTabbedItems = (data.tabbedMenuItems || []).filter((item) => {
    const matchesCategory =
      activeCategory === "ALL" || item.category === activeCategory;
    if (activeDietTab === "healthy") {
      return matchesCategory && (item.dietType === "healthy" || activeCategory !== "ALL");
    }
    return matchesCategory;
  });

  const displayMenuItems =
    filteredTabbedItems.length > 0
      ? filteredTabbedItems
      : data.tabbedMenuItems || [];

  const handleAddToCart = (dish: DishItem) => {
    setCartCount((c) => c + 1);
    setSelectedDish(dish);
    setOrderSubmitted(false);
    setOrderModalOpen(true);
  };

  const renderDishShowcaseGrid = (
    sectionTitle: string,
    items: DishItem[],
    sectionId?: string
  ) => (
    <section id={sectionId} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-slate-900">
          {sectionTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((dish) => (
          <div
            key={dish.id}
            onClick={() => handleAddToCart(dish)}
            className="bg-[#F7F6F2] hover:bg-white rounded-2xl p-5 text-center border border-transparent hover:border-[#E3001B]/30 hover:shadow-xl transition group cursor-pointer relative"
          >
            {dish.discountBadge && (
              <span className="absolute top-3 left-3 z-10 w-11 h-11 rounded-full bg-[#E3001B] text-white text-[10px] font-black uppercase leading-tight flex items-center justify-center shadow-md">
                {dish.discountBadge}
              </span>
            )}

            <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-slate-900/10 shadow-md mb-4 bg-slate-900">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#E3001B] transition">
              {dish.name}
            </h3>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
              {dish.subtitle}
            </p>
            <div className="mt-2.5 flex items-center justify-center gap-2">
              <span className="text-sm font-black text-[#E3001B]">{dish.price}</span>
              {dish.oldPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {dish.oldPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E3001B] selection:text-white">
      {/* TOP RED UTILITY BAR */}
      <div className="bg-[#E3001B] text-white text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>{data.topBarPromo}</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {data.business.address}
            </span>
            <div className="flex items-center gap-2.5 font-bold">
              <span>f</span>
              <span>tw</span>
              <span>in</span>
              <span>ig</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN DARK HEADER */}
      <header className="sticky top-0 z-40 bg-[#0B0C0E] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#E3001B] flex items-center justify-center shadow-md">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider uppercase text-white block leading-none">
                {data.business.name}
              </span>
              <span className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase">
                Burger & Pizza
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider">
            <a href="#trang-chu" className="text-[#E3001B] transition">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="text-white hover:text-[#E3001B] transition">
              Giới thiệu
            </a>
            <a href="#san-pham" className="text-white hover:text-[#E3001B] transition">
              Sản phẩm
            </a>
            <a href="#tin-tuc" className="text-white hover:text-[#E3001B] transition">
              Tin tức
            </a>
            <a href="#lien-he" className="text-white hover:text-[#E3001B] transition">
              Liên hệ
            </a>
          </nav>

          {/* Right Call, Cart & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E3001B]/20 border border-[#E3001B] flex items-center justify-center text-[#E3001B]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight">
                <span className="text-[10px] text-slate-400 block">Gọi ngay</span>
                <span className="text-xs font-extrabold text-white">
                  {data.business.phone[0]}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-slate-300">
              <button
                onClick={() => {
                  setSelectedDish(null);
                  setOrderModalOpen(true);
                }}
                className="p-2 hover:text-white transition cursor-pointer"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setSelectedDish(null);
                  setOrderModalOpen(true);
                }}
                className="p-2 hover:text-white transition cursor-pointer"
                aria-label="Yêu thích"
              >
                <Heart className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setSelectedDish(null);
                  setOrderModalOpen(true);
                }}
                className="relative p-2 hover:text-white transition cursor-pointer"
                aria-label="Giỏ hàng"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#E3001B] text-white text-[9px] font-black flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>

            <button
              onClick={() => {
                setSelectedDish(null);
                setOrderSubmitted(false);
                setOrderModalOpen(true);
              }}
              className="inline-flex items-center gap-2 bg-[#E3001B] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded-md transition cursor-pointer shadow-md"
            >
              <span>Đặt hàng ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO BANNER (DARK FLAME BURGER) */}
      <section
        id="trang-chu"
        className="relative bg-[#0B090A] text-white overflow-hidden py-16 sm:py-24"
      >
        {/* Fiery Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(227,0,27,0.28),transparent_60%)] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-48 bg-amber-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Vertical Mini Dish Switcher + Hero Copy */}
            <div className="lg:col-span-6 flex items-center gap-6">
              <div className="hidden sm:flex flex-col gap-3">
                {(data.hero.images || []).slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className={`w-11 h-11 rounded-full overflow-hidden border-2 ${
                      i === 0 ? "border-[#E3001B] scale-110" : "border-white/20 opacity-70"
                    }`}
                  >
                    <img src={img} alt="Mini Dish" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <div>
                <span className="font-serif italic text-lg sm:text-xl text-[#E3001B] block mb-2">
                  {data.hero.eyebrow}
                </span>
                <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.08] text-white mb-5">
                  {data.hero.title}
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed mb-7">
                  {data.hero.subtitle}
                </p>
                <a
                  href={data.hero.ctaLink || "#thuc-don"}
                  className="inline-flex items-center gap-2 bg-[#E3001B] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-md transition shadow-lg"
                >
                  <span>{data.hero.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Floating Gourmet Burger Image */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden border-4 border-[#E3001B]/40 shadow-[0_0_80px_rgba(227,0,27,0.35)]">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 right-6 bg-[#E3001B] text-white w-20 h-20 rounded-full flex flex-col items-center justify-center font-black shadow-xl rotate-12 border-2 border-amber-300">
                <span className="text-[10px] uppercase">Hot Deal</span>
                <span className="text-lg leading-none">-35%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT SECTION ("NƠI TIN CẬY CHO ĐỒ ĂN NHANH CHẤT LƯỢNG") */}
      <section id="gioi-thieu" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Circular Platter with 40% OFF Badge */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-full overflow-hidden border-8 border-slate-900 shadow-2xl">
              <img
                src={data.aboutSection.image}
                alt={data.aboutSection.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Red 40% Off Tag */}
            <div className="absolute top-4 right-8 sm:right-12 w-16 h-16 rounded-full bg-[#E3001B] text-white flex flex-col items-center justify-center font-black shadow-lg">
              <span className="text-base leading-none">40%</span>
              <span className="text-[9px] uppercase">Giảm</span>
            </div>
            {/* Bottom Stamp */}
            <div className="absolute -bottom-3 right-16 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-md text-xs font-black text-slate-900">
              Đặt Ngay
            </div>
          </div>

          {/* Right About Text & 3 Feature Icons */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 leading-tight mb-4">
              {data.aboutSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-7">
              {data.aboutSection.description}
            </p>

            {/* 3 Red Outline Icon Features */}
            <div className="flex flex-wrap items-center gap-8 mb-8">
              {data.aboutSection.features.map((ft, idx) => (
                <div key={ft.id} className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full bg-red-50 text-[#E3001B] flex items-center justify-center mb-2">
                    {idx === 0 ? (
                      <Utensils className="w-5 h-5" />
                    ) : idx === 1 ? (
                      <Sparkles className="w-5 h-5" />
                    ) : (
                      <BadgePercent className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-900">
                    {ft.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#thuc-don"
              className="inline-flex items-center gap-2 bg-[#E3001B] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-md transition shadow-md"
            >
              <span>Khám phá</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3 STACKED 4-COLUMN PRODUCT SHOWCASE ROWS */}
      {renderDishShowcaseGrid(
        "KHÁM PHÁ NHỮNG MÓN ĂN ĐƯỢC YÊU THÍCH NHẤT !",
        data.popularDishes,
        "san-pham"
      )}
      {renderDishShowcaseGrid(
        "THƯỞNG THỨC NHỮNG HƯƠNG VỊ ĐẶC SẮC NHẤT TỪ THỰC ĐƠN CỦA CHÚNG TÔI!",
        data.signatureDishes
      )}
      {renderDishShowcaseGrid(
        "NHỮNG MÓN NGON KHÔNG THỂ BỎ QUA",
        data.mustTryDishes
      )}

      {/* SECTION 4: 3 COLORFUL PROMO BANNERS ROW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.promoBanners.map((banner) => (
            <div
              key={banner.id}
              onClick={() => {
                setSelectedDish(null);
                setOrderModalOpen(true);
              }}
              className={`${banner.bgColor} rounded-2xl p-6 flex items-center justify-between relative overflow-hidden cursor-pointer group shadow-md`}
            >
              <div className="relative z-10 max-w-[58%]">
                <h3 className="text-base sm:text-lg font-black leading-snug mb-1.5">
                  {banner.title}
                </h3>
                <p className="text-xs opacity-90 leading-relaxed mb-4">
                  {banner.subtitle}
                </p>
                <span className="inline-block text-[11px] font-black uppercase tracking-wider underline underline-offset-4">
                  {banner.ctaText}
                </span>
              </div>
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/25 shrink-0 group-hover:scale-105 transition">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FULL-WIDTH DARK FIERY SPECIAL OFFER BANNER */}
      <section className="relative bg-[#0E0B0A] text-white py-14 sm:py-20 my-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(227,0,27,0.32),transparent_65%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5">
              <span className="text-xs sm:text-sm font-bold text-amber-400 block mb-2">
                {data.specialOfferBanner.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase leading-[1.1] tracking-tight text-white mb-3">
                {data.specialOfferBanner.title}
              </h2>
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E3001B]">
                {data.specialOfferBanner.subtitle}
              </p>
            </div>

            {/* Center Starburst Discount Sticker */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-28 h-28 rounded-full bg-white text-slate-950 border-4 border-dashed border-[#E3001B] flex flex-col items-center justify-center shadow-2xl">
                <span className="text-[10px] font-extrabold uppercase text-slate-700">
                  Giảm ngay
                </span>
                <span className="text-3xl font-black text-[#E3001B] leading-none my-0.5">
                  {data.specialOfferBanner.discountPercent}
                </span>
                <span className="text-[10px] font-extrabold uppercase text-slate-700">
                  Hôm nay
                </span>
              </div>
            </div>

            {/* Right Double Burgers Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src={data.specialOfferBanner.image}
                alt={data.specialOfferBanner.title}
                className="w-full max-w-md h-64 sm:h-72 object-cover rounded-2xl border-2 border-amber-500/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE TABBED MENU ("THỰC ĐƠN ĐƯỢC YÊU THÍCH NHẤT") */}
      <section id="thuc-don" className="bg-[#F9F8F4] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-7">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900">
              THỰC ĐƠN ĐƯỢC <span className="text-[#E3001B]">YÊU THÍCH NHẤT</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1.5">
              Thưởng thức những món ăn nhanh hấp dẫn và ngon miệng nhất
            </p>

            {/* Diet Type Sub-Tabs */}
            <div className="inline-flex items-center gap-6 border-b border-slate-200 mt-5 text-xs font-extrabold uppercase">
              <button
                onClick={() => setActiveDietTab("fastfood")}
                className={`pb-2 border-b-2 transition cursor-pointer ${
                  activeDietTab === "fastfood"
                    ? "border-[#E3001B] text-[#E3001B]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Đồ ăn nhanh
              </button>
              <button
                onClick={() => setActiveDietTab("healthy")}
                className={`pb-2 border-b-2 transition cursor-pointer ${
                  activeDietTab === "healthy"
                    ? "border-[#E3001B] text-[#E3001B]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Đồ ăn Healthy
              </button>
            </div>
          </div>

          {/* 6 Category Icon Tabs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-white rounded-xl p-1.5 shadow-xs border border-slate-200/80 mb-10">
            {data.menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex flex-col items-center justify-center py-3.5 px-3 rounded-lg text-[11px] font-extrabold uppercase tracking-wider transition cursor-pointer relative ${
                    isActive
                      ? "bg-[#E3001B] text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-red-50"
                  }`}
                >
                  <Utensils
                    className={`w-4 h-4 mb-1.5 ${
                      isActive ? "text-white" : "text-[#E3001B]"
                    }`}
                  />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* 2-Column Horizontal Dish Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {displayMenuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 border border-slate-200/70 hover:border-[#E3001B]/40 shadow-2xs hover:shadow-md transition"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-extrabold text-slate-900 truncate">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 line-clamp-2 mb-2.5">
                    {item.subtitle}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-black text-[#E3001B]">
                        {item.price}
                      </span>
                      {item.oldPrice && (
                        <span className="text-[11px] text-slate-400 line-through">
                          {item.oldPrice}
                        </span>
                      )}
                    </div>

                    {/* 3 Action Mini Buttons */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-6 h-6 rounded-full bg-slate-900 hover:bg-[#E3001B] text-white flex items-center justify-center transition cursor-pointer"
                        title="Đặt món"
                      >
                        <ShoppingBag className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-6 h-6 rounded-full bg-slate-900 hover:bg-[#E3001B] text-white flex items-center justify-center transition cursor-pointer"
                        title="Yêu thích"
                      >
                        <Heart className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-6 h-6 rounded-full bg-slate-900 hover:bg-[#E3001B] text-white flex items-center justify-center transition cursor-pointer"
                        title="Xem nhanh"
                      >
                        <Eye className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-9">
            <button
              onClick={() => setActiveCategory("ALL")}
              className="inline-flex items-center gap-2 bg-[#E3001B] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-md transition cursor-pointer shadow-md"
            >
              <span>Xem tất cả</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: APP DOWNLOAD BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-12">
          {/* Left Light App Info */}
          <div className="lg:col-span-6 bg-[#F6F5F0] p-8 sm:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 leading-snug mb-6">
              TẢI XUỐNG ỨNG DỤNG ĐẶT HÀNG NGAY HÔM NAY
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setSelectedDish(null);
                  setOrderModalOpen(true);
                }}
                className="flex items-center gap-3 bg-[#E3001B] hover:bg-red-700 text-white px-5 py-3 rounded-xl transition cursor-pointer shadow-sm"
              >
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-wider block opacity-85">
                    Tải ngay trên
                  </span>
                  <span className="text-sm font-black">Google Play</span>
                </div>
              </button>
              <button
                onClick={() => {
                  setSelectedDish(null);
                  setOrderModalOpen(true);
                }}
                className="flex items-center gap-3 bg-[#F59E0B] hover:bg-amber-600 text-white px-5 py-3 rounded-xl transition cursor-pointer shadow-sm"
              >
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-wider block opacity-85">
                    Tải ngay trên
                  </span>
                  <span className="text-sm font-black">App Store</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Dark App Visual & Dish */}
          <div className="lg:col-span-6 bg-[#111315] text-white p-8 flex items-center justify-around relative overflow-hidden">
            <div className="bg-slate-900 border-2 border-white/15 rounded-2xl p-4 w-44 shadow-2xl">
              <span className="text-[10px] text-[#E3001B] font-bold uppercase block">
                {data.business.name} App
              </span>
              <p className="text-xs font-extrabold text-white mt-1 mb-3">
                Giao Nhanh 25 Phút
              </p>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
                alt="App Preview"
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <span className="block text-center py-1.5 rounded bg-[#E3001B] text-[10px] font-bold">
                Đặt Món Ngay
              </span>
            </div>

            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
                alt="Spaghetti Dish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOOD GALLERY CAROUSEL ("MÓN NGON KHÔNG THỂ BỎ QUA") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-7">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
            MÓN NGON KHÔNG THỂ BỎ QUA
          </h2>
          <div className="flex items-center gap-2">
            <button
              className="w-9 h-9 rounded-full border border-[#E3001B] text-[#E3001B] hover:bg-[#E3001B] hover:text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="w-9 h-9 rounded-full border border-[#E3001B] text-[#E3001B] hover:bg-[#E3001B] hover:text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.galleryImages.map((item) => (
            <div
              key={item.id}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-5">
                <span className="text-sm font-extrabold text-white">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: CUSTOMER REVIEWS ("KHÁCH HÀNG ĐÁNH GIÁ") */}
      <section className="bg-[#F9F8F4] py-16 my-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Heading */}
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 mb-3">
                KHÁCH HÀNG ĐÁNH GIÁ
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Đóng góp của khách hàng chúng tôi sẽ ghi nhận và cải thiện hơn.
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="w-9 h-9 rounded-full border border-[#E3001B] text-[#E3001B] hover:bg-[#E3001B] hover:text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Đánh giá trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  className="w-9 h-9 rounded-full border border-[#E3001B] text-[#E3001B] hover:bg-[#E3001B] hover:text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Đánh giá sau"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 2 Review Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(data.testimonials || []).map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#E3001B] text-white text-[10px] font-black flex items-center justify-center">
                        ”
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-0.5 text-[#E3001B] mb-0.5">
                        {[...Array(rev.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-[#E3001B] text-[#E3001B]"
                          />
                        ))}
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900">
                        {rev.author}
                      </h4>
                      <span className="text-[11px] text-slate-400">{rev.role}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {rev.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: TIN TỨC ĐỒ ĂN NHANH (3 BLOG CARDS) */}
      <section id="tin-tuc" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900">
            TIN TỨC ĐỒ ĂN NHANH
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(data.news || []).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-2.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#E3001B]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-[#E3001B]" />
                    {post.category}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#E3001B] transition leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href="#tin-tuc"
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase text-slate-900 group-hover:text-[#E3001B] transition"
                >
                  <span>Chi tiết</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 11: DARK FOOTER */}
      <footer id="lien-he" className="bg-[#0B0C0E] text-slate-300 pt-14 pb-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: Về chúng tôi */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-extrabold uppercase text-white mb-4 pb-2 border-b-2 border-[#E3001B] inline-block">
                Về chúng tôi
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                {data.business.aboutText[0]}
              </p>
              <div className="flex items-center gap-2.5">
                {["f", "tw", "in", "ig"].map((soc) => (
                  <span
                    key={soc}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E3001B] text-white text-xs font-bold flex items-center justify-center transition cursor-pointer"
                  >
                    {soc}
                  </span>
                ))}
              </div>
            </div>

            {/* Col 2: Danh mục */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-extrabold uppercase text-white mb-4 pb-2 border-b-2 border-[#E3001B] inline-block">
                Danh mục
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#trang-chu" className="hover:text-white">→ Trang chủ</a></li>
                <li><a href="#gioi-thieu" className="hover:text-white">→ Giới thiệu</a></li>
                <li><a href="#san-pham" className="hover:text-white">→ Sản phẩm</a></li>
                <li><a href="#tin-tuc" className="hover:text-white">→ Tin tức</a></li>
                <li><a href="#lien-he" className="hover:text-white">→ Liên hệ</a></li>
              </ul>
            </div>

            {/* Col 3: Bài viết mới nhất */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-extrabold uppercase text-white mb-4 pb-2 border-b-2 border-[#E3001B] inline-block">
                Bài viết mới nhất
              </h4>
              <div className="space-y-3.5">
                {(data.news || []).slice(0, 2).map((post) => (
                  <div key={post.id} className="flex items-center gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                        {post.title}
                      </h5>
                      <span className="text-[10px] text-[#E3001B] block mt-1">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: Liên hệ */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-extrabold uppercase text-white mb-4 pb-2 border-b-2 border-[#E3001B] inline-block">
                Liên hệ
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded bg-[#E3001B] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded bg-[#E3001B] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-bold text-white">{data.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded bg-[#E3001B] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <div className="flex items-center gap-4">
              <a href="#lien-he" className="hover:text-white">Chính sách bảo mật</a>
              <span>|</span>
              <a href="#lien-he" className="hover:text-white">Điều khoản và điều kiện</a>
            </div>
          </div>
        </div>
      </footer>

      {/* QUICK ORDER MODAL */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 relative shadow-2xl">
            <button
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {orderSubmitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#E3001B] text-white flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black uppercase text-slate-900 mb-2">
                  Đặt Món Thành Công!
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  Bếp <strong>{data.business.name}</strong> đang chuẩn bị món ăn nóng hổi cho bạn. Shipper sẽ giao tận nơi trong 25 phút!
                </p>
                <button
                  onClick={() => setOrderModalOpen(false)}
                  className="px-6 py-2.5 rounded-md bg-[#E3001B] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  Đóng cửa sổ
                </button>
              </div>
            ) : (
              <>
                <span className="inline-block px-3 py-1 rounded bg-red-50 text-[#E3001B] text-[10px] font-extrabold uppercase tracking-wider mb-2">
                  Giao hàng siêu tốc 25 phút
                </span>
                <h3 className="text-xl font-black uppercase text-slate-900 mb-1">
                  Đặt Món Trực Tuyến
                </h3>
                {selectedDish && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 my-3">
                    <img
                      src={selectedDish.image}
                      alt={selectedDish.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">
                        {selectedDish.name}
                      </div>
                      <div className="text-xs font-black text-[#E3001B]">
                        {selectedDish.price}
                      </div>
                    </div>
                  </div>
                )}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setOrderSubmitted(true);
                  }}
                  className="space-y-3 mt-4"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên người nhận *"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#E3001B]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại nhận hàng *"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#E3001B]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Địa chỉ giao hàng chi tiết *"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#E3001B]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#E3001B] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider transition cursor-pointer"
                  >
                    Xác Nhận Đặt Hàng Ngay
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
