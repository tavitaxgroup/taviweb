"use client";

import React, { useState } from "react";
import {
  Menu,
  Search,
  User,
  Heart,
  ShoppingBag,
  Crown,
  Clock,
  ChevronDown,
  Truck,
  ShieldCheck,
  Headphones,
  Star,
  ChevronLeft,
  ChevronRight,
  Send,
  Phone,
  Gem,
  Share2,
  X,
  CheckCircle2
} from "lucide-react";
import { Facebook, Instagram, Youtube } from "@/components/icons/BrandIcons";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  studioChupAnh5DefaultData,
  type StudioChupAnh5Data,
  type StudioChupAnh5Item
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: StudioChupAnh5Data = adaptClonedTemplateData(
    studioChupAnh5DefaultData,
    incomingData
  );

  const [activeShowcaseTab, setActiveShowcaseTab] = useState("Bán chạy");
  const [selectedItem, setSelectedItem] = useState<StudioChupAnh5Item | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [emailSent, setEmailSent] = useState(false);

  const renderBadgeStack = (badges?: Array<"SALE" | "PHỔ BIẾN">) => {
    if (!badges || badges.length === 0) return null;
    return (
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
        {badges.map((b) => (
          <span
            key={b}
            className={`text-[9px] font-extrabold uppercase px-2 py-0.5 text-white ${
              b === "SALE" ? "bg-[#eb6734]" : "bg-[#16a34a]"
            }`}
          >
            {b}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#eb6734] selection:text-white">
      {/* 1. TWO-TIER LUXURY HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        {/* Top Row */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href="#trang-chu" className="flex items-center gap-2">
              <Gem className="w-6 h-6 text-[#eb6734]" />
              <div>
                <div className="text-lg font-serif font-bold tracking-widest uppercase text-slate-900 leading-none">
                  {data.business.name}
                </div>
                <div className="text-[8px] tracking-[0.28em] uppercase text-slate-400 mt-0.5">
                  Bridal &amp; Fine Studio
                </div>
              </div>
            </a>

            <a
              href="#danh-muc"
              className="hidden md:inline-flex items-center gap-2 bg-[#eb6734] hover:bg-[#d55625] text-white text-xs font-semibold px-4 py-2 rounded-xs transition-colors"
            >
              <Menu className="w-3.5 h-3.5" />
              <span>Danh mục sản phẩm</span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg items-center border border-slate-200 rounded-xs overflow-hidden">
            <div className="px-3 py-2 text-[11px] text-slate-600 border-r border-slate-200 flex items-center gap-1 bg-slate-50/60 shrink-0">
              <span>Tất cả danh mục</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm nhẫn kim cương, trang sức cưới..."
              className="flex-1 px-3 py-2 text-xs focus:outline-none"
            />
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="px-3 py-2 text-slate-500 hover:text-[#eb6734]"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* User / Wishlist / Cart Icons */}
          <div className="flex items-center gap-4 text-slate-700">
            <a href="#lien-he" aria-label="Tài khoản" className="hover:text-[#eb6734]">
              <User className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setWishlistCount((w) => w + 1)}
              className="relative hover:text-[#eb6734]"
              aria-label="Yêu thích"
            >
              <Heart className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#eb6734] text-white text-[9px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="relative hover:text-[#eb6734]"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#eb6734] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Nav Row */}
        <div className="border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between text-xs">
            <nav className="flex items-center gap-6 font-medium text-slate-600">
              <a href="#trang-chu" className="text-[#eb6734] font-semibold">
                Trang chủ
              </a>
              <a href="#gioi-thieu" className="hover:text-[#eb6734]">
                Giới thiệu
              </a>
              <a href="#san-pham" className="hover:text-[#eb6734]">
                Sản phẩm
              </a>
              <a href="#danh-gia" className="hover:text-[#eb6734]">
                Tin tức
              </a>
              <a href="#lien-he" className="hover:text-[#eb6734]">
                Liên hệ
              </a>
            </nav>

            <div className="hidden sm:flex items-center gap-5 text-[11px] text-slate-600">
              <a
                href="#san-pham"
                className="inline-flex items-center gap-1 font-semibold hover:text-[#eb6734]"
              >
                <Crown className="w-3.5 h-3.5 text-amber-500" />
                <span>Nổi bật</span>
              </a>
              <a
                href="#khuyen-mai-gioi-han"
                className="inline-flex items-center gap-1 font-semibold hover:text-[#eb6734]"
              >
                <Clock className="w-3.5 h-3.5 text-[#eb6734]" />
                <span>Ưu đãi</span>
              </a>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-1">
                Sản phẩm đã xem <ChevronDown className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. EDITORIAL HERO BANNER */}
      <section
        id="trang-chu"
        className="relative w-full h-[460px] md:h-[540px] bg-[#ebe6e0] overflow-hidden flex items-center"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3efe9] via-[#f3efe9]/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#san-pham"}
                className="inline-block px-6 py-2.5 bg-[#eb6734] hover:bg-[#d45626] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                {data.hero.ctaText || "TÌM HIỂU"}
              </a>
            </div>
          </div>

          <div className="mt-16 text-slate-800 font-serif">
            <span className="text-2xl font-bold">01</span>
            <span className="text-xs text-slate-400"> /03</span>
          </div>
        </div>
      </section>

      {/* 3. 3 SERVICE GUARANTEES + 2 TOP PROMO BANNERS */}
      <section id="gioi-thieu" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* 3 Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
            {data.guarantees.map((g) => (
              <div key={g.id} className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-orange-50 text-[#eb6734] flex items-center justify-center shrink-0">
                  {g.icon === "truck" && <Truck className="w-5 h-5" />}
                  {g.icon === "shield" && <ShieldCheck className="w-5 h-5" />}
                  {g.icon === "headset" && <Headphones className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-800">{g.title}</h3>
                  <p className="text-[11px] text-slate-400">{g.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 2 Cream Promo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.topBanners.map((banner) => (
              <div
                key={banner.id}
                className="relative overflow-hidden bg-[#f8f5f1] p-7 sm:p-9 h-56 flex items-center justify-between border border-stone-200/60"
              >
                <div className="relative z-10 space-y-2 max-w-[55%]">
                  <span className="text-xs font-bold text-[#eb6734] uppercase">
                    {banner.discount}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-snug">
                    {banner.title}
                  </h3>
                  <div className="pt-2">
                    <a
                      href="#san-pham"
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-600 border-b border-slate-400 pb-0.5 hover:text-[#eb6734] hover:border-[#eb6734]"
                    >
                      {banner.ctaText}
                    </a>
                  </div>
                </div>
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-40 h-40 object-cover rounded-full shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KHUYẾN MÃI GIỚI HẠN (WITH COUNTDOWN & PROGRESS BARS) */}
      <section id="khuyen-mai-gioi-han" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-3 mb-8 gap-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Khuyến mãi giới hạn
            </h2>

            <div className="flex items-center gap-2 text-center font-mono">
              {[
                { val: data.countdown.days, unit: "NGÀY" },
                { val: data.countdown.hours, unit: "GIỜ" },
                { val: data.countdown.minutes, unit: "PHÚT" },
                { val: data.countdown.seconds, unit: "GIÂY" }
              ].map((t, idx) => (
                <React.Fragment key={t.unit}>
                  <div className="px-2">
                    <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-none">
                      {t.val}
                    </div>
                    <div className="text-[8px] text-slate-400 uppercase mt-0.5">
                      {t.unit}
                    </div>
                  </div>
                  {idx < 3 && <span className="text-slate-400 font-bold">:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.flashSaleItems.map((item) => {
              const pct =
                item.soldCount && item.totalStock
                  ? Math.round((item.soldCount / item.totalStock) * 100)
                  : 25;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative bg-[#fafafa] h-64 flex items-center justify-center p-4 mb-3 overflow-hidden">
                    {renderBadgeStack(item.badges)}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-48 h-48 object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs">
                      {item.oldPrice && (
                        <span className="text-slate-400 line-through mr-1.5">
                          {item.oldPrice}
                        </span>
                      )}
                      <span className="font-bold text-[#eb6734]">{item.price}</span>
                    </div>
                    <div className="text-[10px] text-slate-400">{item.collection}</div>
                    <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#eb6734] transition-colors">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-1 pt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                      <span className="text-[10px] text-slate-400 ml-1">
                        {item.reviewCount}
                      </span>
                    </div>

                    <div className="pt-2">
                      <div className="text-[10px] text-slate-500 mb-1">
                        Đã bán hết:{" "}
                        <strong className="text-slate-800">
                          {item.soldCount}/{item.totalStock}
                        </strong>
                      </div>
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${pct}%` }}
                          className="h-full bg-[#eb6734]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href="#san-pham"
              className="inline-block px-7 py-2.5 bg-[#f7d6c8] hover:bg-[#eb6734] text-[#eb6734] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* 5. TABBED SHOWCASE (BÁN CHẠY | MỚI NHẤT | KHUYẾN MÃI) */}
      <section id="san-pham" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center gap-8 mb-10 text-base sm:text-lg font-serif">
            {["Bán chạy", "Mới nhất", "Khuyến mãi"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveShowcaseTab(tab)}
                className={`pb-1.5 transition-colors ${
                  activeShowcaseTab === tab
                    ? "font-bold text-slate-900 border-b-2 border-slate-900"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {data.bestsellerItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="relative bg-[#fafafa] h-60 flex items-center justify-center p-4 mb-3 overflow-hidden">
                  {renderBadgeStack(item.badges)}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-44 h-44 object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-xs">
                    {item.oldPrice && (
                      <span className="text-slate-400 line-through mr-1.5">
                        {item.oldPrice}
                      </span>
                    )}
                    <span className="font-bold text-[#eb6734]">{item.price}</span>
                  </div>
                  <div className="text-[10px] text-slate-400">{item.collection}</div>
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#eb6734] transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 pt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-[10px] text-slate-400 ml-1">
                      {item.reviewCount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#lien-he"
              className="inline-block px-7 py-2.5 bg-[#f7d6c8] hover:bg-[#eb6734] text-[#eb6734] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* 6. DANH MỤC PHỔ BIẾN (FULL-WIDTH CORAL ORANGE #eb6734 SECTION) */}
      <section id="danh-muc" className="py-16 bg-[#eb6734] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Danh mục phổ biến
            </h2>
            <div className="text-white/70 text-xs mt-1 tracking-widest">
              ─── ❖ ───
            </div>
          </div>

          {/* 5 Circular White Category Medallions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {data.popularCategories.map((cat) => (
              <a
                key={cat.id}
                href="#san-pham"
                className="group flex flex-col items-center text-center"
              >
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white p-3 flex items-center justify-center shadow-lg mb-3 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-serif font-bold text-white">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-orange-100 mt-0.5">
                  {cat.countLabel}
                </span>
              </a>
            ))}
          </div>

          {/* 2 Promo Cards Inside Orange Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[#faf6f2] text-slate-800 p-7 sm:p-9 h-52 flex items-center justify-between overflow-hidden">
              <div className="space-y-2 max-w-[55%]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#eb6734]">
                  {data.orangeBanners[0]?.eyebrow}
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                  {data.orangeBanners[0]?.title}
                </h3>
                <div className="pt-2">
                  <a
                    href="#san-pham"
                    className="text-[11px] font-bold uppercase border-b border-slate-400 pb-0.5 hover:text-[#eb6734]"
                  >
                    {data.orangeBanners[0]?.ctaText}
                  </a>
                </div>
              </div>
              <img
                src={data.orangeBanners[0]?.image}
                alt={data.orangeBanners[0]?.title}
                className="w-36 h-36 object-cover rounded-full shadow"
              />
            </div>

            <div className="lg:col-span-5 bg-[#faf6f2] text-slate-800 p-7 sm:p-9 h-52 flex items-center justify-between overflow-hidden">
              <div className="space-y-2 max-w-[55%]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#eb6734]">
                  {data.orangeBanners[1]?.eyebrow}
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                  {data.orangeBanners[1]?.title}
                </h3>
                <div className="pt-2">
                  <a
                    href="#san-pham"
                    className="text-[11px] font-bold uppercase border-b border-slate-400 pb-0.5 hover:text-[#eb6734]"
                  >
                    {data.orangeBanners[1]?.ctaText}
                  </a>
                </div>
              </div>
              <img
                src={data.orangeBanners[1]?.image}
                alt={data.orangeBanners[1]?.title}
                className="w-32 h-32 object-cover rounded-full shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. SẢN PHẨM PHỔ BIẾN (WARM CREAM #f8f4ef) */}
      <section className="py-16 bg-[#f8f4ef]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Sản phẩm phổ biến
            </h2>
            <div className="text-slate-400 text-xs mt-1 tracking-widest">
              ─── ❖ ───
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.popularSliderItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="relative bg-white h-60 flex items-center justify-center p-4 mb-3 overflow-hidden shadow-2xs">
                  {renderBadgeStack(item.badges)}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-44 h-44 object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#eb6734]">{item.price}</div>
                  <div className="text-[10px] text-slate-400">{item.collection}</div>
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#eb6734]">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 pt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-[10px] text-slate-400 ml-1">
                      {item.reviewCount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#san-pham"
              className="inline-block px-7 py-2.5 bg-[#f2d0c2] hover:bg-[#eb6734] text-[#eb6734] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* 8. KHÁCH HÀNG ĐÁNH GIÁ & STUDIO CREST LOGOS */}
      <section id="danh-gia" className="py-16 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Khách hàng đánh giá
            </h2>
            <div className="text-slate-400 text-xs mt-1 tracking-widest">
              ─── ❖ ───
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {(data.testimonials || []).map((t, idx) => (
              <div
                key={t.id}
                className="bg-white p-8 shadow-xs border border-slate-100 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  {idx === 0 ? "“Sản phẩm chất lượng”" : "“Hỗ trợ tận tình”"}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">{t.content}</p>

                <div className="border-l-2 border-[#eb6734] pl-3">
                  <div className="text-xs font-bold text-slate-800">{t.author}</div>
                  <div className="text-[10px] text-[#eb6734]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 6 Studio Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {data.studioBadges.map((badge, i) => (
              <div
                key={i}
                className="py-4 px-2 border border-slate-200/80 rounded-full text-[10px] font-serif tracking-widest text-slate-400 uppercase"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DARK CHARCOAL COUPON NEWSLETTER BANNER (#232931) */}
      <section className="bg-[#232931] text-white py-14 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-bold text-[#eb6734]">
              Giảm giá 500k cho đơn hàng đầu tiên
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Đăng ký email ngay
            </h2>
            <p className="text-xs text-slate-300 max-w-md leading-relaxed">
              Phiếu giảm giá sẽ được gửi vào email của bạn trị giá 500,000₫ khi đơn hàng đầu tiên trên 5,000,000₫
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmailSent(true);
              }}
              className="flex max-w-md pt-2"
            >
              <input
                type="email"
                required
                placeholder="Nhập email..."
                className="flex-1 bg-white text-slate-800 px-4 py-2.5 text-xs focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#eb6734] hover:bg-[#d55625] text-white text-xs font-bold uppercase inline-flex items-center gap-1.5 transition-colors"
              >
                <span>ĐĂNG KÝ</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {emailSent && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã gửi mã ưu đãi 500,000₫ vào email của bạn!</span>
              </div>
            )}
          </div>

          {/* Right Tilted Coupon Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end gap-4">
            <div className="bg-white text-slate-900 p-5 rounded-xs shadow-xl transform -rotate-6 border-2 border-dashed border-[#eb6734] text-center w-44">
              <div className="text-xs font-bold uppercase text-slate-400">VOUCHER</div>
              <div className="text-3xl font-black text-[#eb6734] my-1">50%</div>
              <div className="text-[10px] font-semibold uppercase text-slate-600">
                Gói Chụp Cưới Luxury
              </div>
            </div>
            <div className="bg-white text-slate-900 p-5 rounded-xs shadow-xl transform rotate-6 border-2 border-dashed border-[#eb6734] text-center w-44">
              <div className="text-xs font-bold text-white bg-[#eb6734] px-2 py-0.5 mb-2">
                ƯU ĐÃI 500K
              </div>
              <div className="text-xs font-bold text-slate-800">
                Trang Sức Kim Cương
              </div>
              <div className="text-[10px] text-slate-400 mt-1">Áp dụng toàn hệ thống</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer id="lien-he" className="bg-white text-slate-600 pt-8 pb-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top Hours Bar */}
          <div className="flex flex-wrap items-center justify-between text-[11px] pb-6 border-b border-slate-100 gap-4">
            <div>
              <strong className="text-slate-800">Hoạt động:</strong>{" "}
              {data.business.workingHours}
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase text-slate-400">
              <span>VISA</span>
              <span>MASTERCARD</span>
              <span>PAYPAL</span>
            </div>
          </div>

          {/* Middle Hotline + Brand + Social Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center py-8 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-slate-400" />
              <div>
                <div className="text-[11px] text-slate-400">Bạn cần hỗ trợ?</div>
                <div className="text-base font-extrabold text-slate-900">
                  {data.business.phone[0]}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2">
                <Gem className="w-6 h-6 text-[#eb6734]" />
                <span className="text-xl font-serif font-bold tracking-widest uppercase text-slate-900">
                  {data.business.name}
                </span>
              </div>
            </div>

            <div className="flex items-center md:justify-end gap-3">
              {[Facebook, Share2, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#lien-he"
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#eb6734] hover:bg-[#eb6734] hover:text-white transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 text-xs">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 mb-3">Liên hệ</h4>
              <p>
                <strong>Địa chỉ:</strong> {data.business.address}
              </p>
              <p>
                <strong>E-mail:</strong> {data.business.email[0]}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 mb-3">Liên kết</h4>
              <div>Giới thiệu</div>
              <div>Câu hỏi thường gặp</div>
              <div>Nghệ nhân chế tác</div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 mb-3">Dịch vụ khách hàng</h4>
              <div>Tra cứu đơn hàng</div>
              <div>Liên hệ tư vấn</div>
              <div>Điều khoản dịch vụ</div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 mb-3">Danh mục</h4>
              <div>Dây chuyền &amp; Mặt đá quý</div>
              <div>Nhẫn cầu hôn Kim cương</div>
              <div>Bông tai Ngọc trai</div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
            <span>
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-slate-700">{data.business.name}</strong>
            </span>
            <div className="flex gap-4">
              <span>Chính sách bảo mật</span>
              <span>Điều khoản và điều kiện</span>
              <span>Tin tức</span>
            </div>
          </div>
        </div>
      </footer>

      {/* JEWELRY DETAIL MODAL */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white p-6 relative shadow-2xl border-t-4 border-[#eb6734]"
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-3">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-44 h-44 object-cover rounded-full mx-auto border border-stone-200"
              />
              <div className="text-[10px] uppercase tracking-widest text-slate-400">
                {selectedItem.collection}
              </div>
              <h4 className="text-base font-serif font-bold text-slate-900">
                {selectedItem.name}
              </h4>
              <div className="text-sm font-bold text-[#eb6734]">
                {selectedItem.price}
              </div>
              <button
                type="button"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  setSelectedItem(null);
                }}
                className="w-full py-2.5 bg-[#eb6734] hover:bg-[#d55625] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
