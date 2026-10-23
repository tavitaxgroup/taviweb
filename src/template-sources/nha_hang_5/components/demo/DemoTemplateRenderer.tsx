"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  Menu,
  Leaf,
  ShieldCheck,
  Award,
  Sprout,
  Eye,
  ShoppingCart,
  Calendar,
  Share2,
  X,
  CheckCircle2
} from "lucide-react";
import { Facebook, Instagram } from "@/components/icons/BrandIcons";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaHang5DefaultData,
  type NhaHang5Data,
  type NhaHang5Product
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NhaHang5Data = adaptClonedTemplateData(nhaHang5DefaultData, incomingData);

  const [qualityTab, setQualityTab] = useState("Mới nhất");
  const [bestsellerTab, setBestsellerTab] = useState("Trái cây");
  const [promoTab, setPromoTab] = useState("Trái cây");
  const [cartCount, setCartCount] = useState(2);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<NhaHang5Product | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderProductGrid = () => (
    <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {data.products.slice(0, 10).map((prod) => {
        const liked = wishlistIds.includes(prod.id);
        return (
          <div
            key={prod.id}
            className="group bg-white flex flex-col justify-between transition-all"
          >
            <div className="relative bg-[#f7f7f7] h-40 flex items-center justify-center overflow-hidden p-3 mb-2.5">
              {prod.discountBadge && (
                <span className="absolute top-2.5 left-2.5 z-10 bg-[#5c9e1f] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {prod.discountBadge}
                </span>
              )}
              <button
                type="button"
                onClick={() => toggleWishlist(prod.id)}
                aria-label="Yêu thích"
                className="absolute top-2.5 right-2.5 z-10 text-slate-400 hover:text-rose-500 transition-colors"
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    liked ? "fill-rose-500 text-rose-500" : ""
                  }`}
                />
              </button>
              <img
                src={prod.image}
                alt={prod.name}
                className="w-28 h-28 object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="px-0.5">
              <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#5c9e1f] transition-colors line-clamp-1">
                {prod.name}
              </h3>
              <div className="mt-1 flex items-center justify-between">
                <div className="text-[11px]">
                  {prod.oldPrice && (
                    <span className="text-slate-400 line-through mr-1.5">
                      {prod.oldPrice}
                    </span>
                  )}
                  <span className="font-bold text-slate-700">{prod.price}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <button
                    type="button"
                    onClick={() => setQuickViewProduct(prod)}
                    aria-label="Xem nhanh"
                    className="hover:text-[#5c9e1f]"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCartCount((c) => c + 1)}
                    aria-label="Thêm vào giỏ"
                    className="hover:text-[#5c9e1f]"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#5c9e1f] selection:text-white">
      {/* 1. TWO-TIER HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        {/* Top Row: Brand, Search Pill, Account Actions */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#trang-chu" className="flex items-center gap-1.5 shrink-0">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 flex items-center">
              Mona{" "}
              <span className="text-[#5c9e1f] ml-1 inline-flex items-center">
                Fru
                <Leaf className="w-4 h-4 text-[#5c9e1f] -mt-3 mx-0.5" />t
              </span>
            </span>
          </a>

          <div className="hidden md:flex flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="Đang tìm kiếm thực phẩm hữu cơ, salad, trái cây..."
              className="w-full bg-[#f3f4f6] rounded-full px-5 py-2 pr-10 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#5c9e1f]"
            />
            <Search className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex items-center gap-5 text-[11px] text-slate-600">
            <a href="#lien-he" className="flex flex-col items-center hover:text-[#5c9e1f]">
              <User className="w-4 h-4 mb-0.5" />
              <span className="hidden sm:inline">Tài khoản</span>
            </a>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="relative flex flex-col items-center hover:text-[#5c9e1f]"
            >
              <ShoppingBag className="w-4 h-4 mb-0.5" />
              <span className="hidden sm:inline">Giỏ hàng ({cartCount})</span>
            </button>
            <a href="#san-pham" className="flex flex-col items-center hover:text-[#5c9e1f]">
              <Heart className="w-4 h-4 mb-0.5" />
              <span className="hidden sm:inline">Yêu thích ({wishlistIds.length})</span>
            </a>
          </div>
        </div>

        {/* Bottom Nav Row */}
        <div className="border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-11 flex items-center gap-8">
            <a
              href="#san-pham"
              className="h-full px-5 bg-[#5c9e1f] text-white text-xs font-bold uppercase flex items-center gap-2 tracking-wide"
            >
              <Menu className="w-4 h-4" />
              <span>DANH MỤC SẢN PHẨM</span>
            </a>

            <nav className="hidden sm:flex items-center gap-6 text-xs font-medium text-slate-700">
              <a
                href="#trang-chu"
                className="text-slate-900 font-bold border-b-2 border-[#5c9e1f] py-1"
              >
                Trang chủ
              </a>
              <a href="#gioi-thieu" className="hover:text-[#5c9e1f]">
                Giới thiệu
              </a>
              <a href="#san-pham" className="hover:text-[#5c9e1f]">
                Sản phẩm
              </a>
              <a href="#tin-tuc" className="hover:text-[#5c9e1f]">
                Tin tức
              </a>
              <a href="#lien-he" className="hover:text-[#5c9e1f]">
                Liên hệ
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* 2. SPLIT HERO BANNER (8 COLS + 4 COLS) */}
      <section id="trang-chu" className="py-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Main Organic Farm Banner */}
          <div className="lg:col-span-8 relative rounded-xs overflow-hidden bg-[#efefef] min-h-[340px] md:min-h-[380px] flex items-center">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="absolute inset-y-0 left-0 w-3/5 h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-[#efefef]/85 to-[#efefef]" />

            <div className="relative z-10 ml-auto w-full md:w-3/5 p-6 sm:p-10 space-y-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-snug">
                Trang trại{" "}
                <span className="text-[#5c9e1f] font-normal">
                  Thực phẩm tươi sạch &amp;
                </span>{" "}
                <span className="font-extrabold">100% Hữu cơ</span>
              </h1>
              <p className="text-xs text-slate-500">{data.hero.subtitle}</p>
              <div className="pt-2">
                <a
                  href={data.hero.ctaLink || "#san-pham"}
                  className="inline-block px-5 py-2 bg-[#5c9e1f] hover:bg-[#4b8318] text-white text-[11px] font-bold uppercase rounded-xs transition-colors"
                >
                  {data.hero.ctaText || "MUA NGAY"}
                </a>
              </div>
            </div>
          </div>

          {/* Right Citrus Gold Promo Card */}
          <div className="lg:col-span-4 relative rounded-xs overflow-hidden bg-[#f7b731] min-h-[340px] md:min-h-[380px] p-7 flex flex-col justify-between">
            <div className="relative z-10 space-y-1.5">
              <div className="text-xl font-bold text-slate-900">
                <span className="text-3xl font-extrabold text-[#5c9e1f] mr-1.5">
                  {data.heroPromoCard.discount}
                </span>
                {data.heroPromoCard.label}
              </div>
              <p className="text-xs text-slate-800 font-medium max-w-[180px]">
                {data.heroPromoCard.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href="#khuyen-mai"
                  className="inline-block px-4 py-1.5 bg-white text-slate-800 text-[10px] font-bold uppercase rounded-xs shadow-xs hover:bg-[#5c9e1f] hover:text-white transition-colors"
                >
                  {data.heroPromoCard.ctaText}
                </a>
              </div>
            </div>

            <img
              src={data.heroPromoCard.image}
              alt="Cam tươi hữu cơ"
              className="w-52 h-52 object-cover rounded-full self-end -mr-6 -mb-6 border-4 border-white/30 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 3. 4 FEATURE BADGES ROW */}
      <section id="gioi-thieu" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.features.map((feat) => (
            <div key={feat.id} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-[#5c9e1f] shrink-0">
                {feat.icon === "fresh" && <Sprout className="w-6 h-6" />}
                {feat.icon === "organic" && <Leaf className="w-6 h-6" />}
                {feat.icon === "quality" && <Award className="w-6 h-6" />}
                {feat.icon === "natural" && <ShieldCheck className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-800">{feat.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SẢN PHẨM CHẤT LƯỢNG */}
      <section id="san-pham" className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-3 mb-6">
            <h2 className="text-base font-bold text-slate-800">Sản phẩm chất lượng</h2>
            <div className="flex items-center gap-5 text-xs">
              {["Mới nhất", "Bán chạy", "Khuyến mãi"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setQualityTab(tab)}
                  className={`pb-1 transition-colors ${
                    qualityTab === tab
                      ? "font-bold text-slate-900 border-b-2 border-[#5c9e1f]"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Vertical Sage Banner */}
            <div className="lg:col-span-3 relative rounded-xs overflow-hidden bg-[#4d6b3c] text-white p-6 flex flex-col justify-between min-h-[420px]">
              <img
                src={data.qualityBanner.image}
                alt={data.qualityBanner.title}
                className="absolute inset-0 w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#3d562e]/85 via-transparent to-black/40" />
              <div className="relative z-10 space-y-3">
                <h3 className="text-lg font-bold leading-snug max-w-[150px]">
                  {data.qualityBanner.title}
                </h3>
                <a
                  href="#lien-he"
                  className="inline-block px-4 py-1.5 bg-white text-slate-800 text-[10px] font-bold uppercase rounded-xs hover:bg-[#5c9e1f] hover:text-white transition-colors"
                >
                  {data.qualityBanner.ctaText}
                </a>
              </div>
            </div>

            {/* Right 5x2 Product Grid */}
            {renderProductGrid()}
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH HORIZONTAL PROMO STRIP (20% OFF RAU QUẢ HỮU CƠ) */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-xs overflow-hidden bg-[#f5f6f8] border border-slate-100 py-7 px-6 text-center flex items-center justify-center">
            <img
              src={data.midPromoStrip.image}
              alt={data.midPromoStrip.title}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10 space-y-1">
              <div className="text-sm font-extrabold text-red-500 uppercase">
                {data.midPromoStrip.discount}
              </div>
              <h3 className="text-sm font-bold text-slate-800">
                {data.midPromoStrip.title}
              </h3>
              <div>
                <a
                  href="#khuyen-mai"
                  className="text-[10px] font-bold uppercase text-slate-500 hover:text-[#5c9e1f] underline"
                >
                  {data.midPromoStrip.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BÁN CHẠY */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-3 mb-6">
            <h2 className="text-base font-bold text-slate-800">Bán chạy</h2>
            <div className="flex flex-wrap items-center gap-5 text-xs">
              {["Trái cây", "Rau củ", "Sữa trái cây", "Nước trái cây"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setBestsellerTab(tab)}
                  className={`pb-1 transition-colors ${
                    bestsellerTab === tab
                      ? "font-bold text-slate-900 border-b-2 border-[#5c9e1f]"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Vertical Light Wood Banner */}
            <div className="lg:col-span-3 relative rounded-xs overflow-hidden bg-[#f3f4f6] p-6 flex flex-col justify-between min-h-[420px]">
              <img
                src={data.bestsellerBanner.image}
                alt={data.bestsellerBanner.title}
                className="absolute inset-x-0 bottom-0 h-3/5 w-full object-cover"
              />
              <div className="relative z-10 space-y-2.5 bg-white/85 backdrop-blur-xs p-4 rounded-xs">
                <h3 className="text-base font-bold text-slate-800 leading-snug">
                  {data.bestsellerBanner.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {data.bestsellerBanner.subtitle}
                </p>
                <a
                  href="#lien-he"
                  className="inline-block px-4 py-1.5 bg-[#5c9e1f] text-white text-[10px] font-bold uppercase rounded-xs"
                >
                  {data.bestsellerBanner.ctaText}
                </a>
              </div>
            </div>

            {/* Right 5x2 Product Grid */}
            {renderProductGrid()}
          </div>
        </div>
      </section>

      {/* 7. 3-COLUMN PROMO BANNERS */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.trioBanners.map((b) => (
            <div
              key={b.id}
              className="relative rounded-xs overflow-hidden bg-[#f5f5f5] p-6 h-44 flex items-center justify-between border border-slate-100"
            >
              <div className="relative z-10 space-y-1.5 max-w-[58%]">
                <h3 className="text-sm font-bold text-slate-800 leading-snug">
                  {b.title}
                </h3>
                {b.subtitle && (
                  <p className="text-[10px] text-slate-500">{b.subtitle}</p>
                )}
                <div className="text-xs font-extrabold text-red-500">
                  {b.highlight}
                </div>
                {b.ctaText && (
                  <div className="pt-1">
                    <a
                      href="#san-pham"
                      className="inline-block px-3.5 py-1 bg-[#5c9e1f] text-white text-[10px] font-bold uppercase rounded-xs"
                    >
                      {b.ctaText}
                    </a>
                  </div>
                )}
              </div>
              <img
                src={b.image}
                alt={b.title}
                className="w-28 h-28 object-cover rounded-full shadow-sm"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 8. KHUYẾN MÃI */}
      <section id="khuyen-mai" className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-3 mb-6">
            <h2 className="text-base font-bold text-slate-800">Khuyến mãi</h2>
            <div className="flex flex-wrap items-center gap-5 text-xs">
              {["Trái cây", "Rau củ", "Sữa trái cây", "Nước trái cây"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setPromoTab(tab)}
                  className={`pb-1 transition-colors ${
                    promoTab === tab
                      ? "font-bold text-slate-900 border-b-2 border-[#5c9e1f]"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Dark Chalkboard Banner */}
            <div className="lg:col-span-3 relative rounded-xs overflow-hidden bg-[#2b2d2f] text-white p-6 flex flex-col justify-center items-center text-center min-h-[420px]">
              <img
                src={data.promoChalkBanner.image}
                alt={data.promoChalkBanner.title}
                className="absolute inset-0 w-full h-full object-cover opacity-35"
              />
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f7b731]">
                  {data.promoChalkBanner.eyebrow}
                </span>
                <h3 className="text-2xl font-serif italic text-white">
                  {data.promoChalkBanner.title}
                </h3>
              </div>
            </div>

            {/* Right 5x2 Product Grid */}
            {renderProductGrid()}
          </div>
        </div>
      </section>

      {/* 9. KIẾN THỨC MỚI (4 BLOG CARDS) */}
      <section id="tin-tuc" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-lg font-bold text-slate-800">Kiến thức mới</h2>
            <p className="text-xs italic text-slate-400 mt-1">
              Cẩm nang dinh dưỡng hữu cơ &amp; tin tức ẩm thực xanh mới nhất
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="h-48 overflow-hidden rounded-xs mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {post.category}
                </div>
                <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#5c9e1f] line-clamp-2 leading-snug mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-[10px] text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span>• {data.business.name}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer id="lien-he" className="bg-[#f9f9f9] border-t border-slate-200/70 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top Newsletter & Social Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-8 border-b border-slate-200">
            <div className="lg:col-span-3">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                {data.business.name}
              </span>
            </div>

            <div className="lg:col-span-3 flex items-center gap-4 text-slate-600">
              {[Facebook, Instagram, Share2].map((Icon, i) => (
                <a key={i} href="#lien-he" className="hover:text-[#5c9e1f]">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="lg:col-span-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập địa chỉ Email..."
                  className="flex-1 bg-white border border-slate-200 px-4 py-2 text-xs focus:outline-none focus:border-[#5c9e1f]"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#5c9e1f] hover:bg-[#4b8318] text-white text-xs font-bold uppercase transition-colors"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#5c9e1f] mt-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Đã đăng ký nhận ưu đãi nông sản sạch!</span>
                </div>
              )}
            </div>
          </div>

          {/* 4 Info Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 py-8 text-xs text-slate-600">
            <div className="lg:col-span-4 space-y-2">
              <p>{data.business.address}</p>
              <p>{data.business.phone[0]}</p>
              <p>{data.business.email[0]}</p>
            </div>

            <div className="lg:col-span-3 space-y-2">
              <div>Thông tin giao hàng</div>
              <div>Chính sách bảo mật</div>
              <div>Chính sách giao hàng</div>
              <div>Thanh toán an toàn</div>
              <div>Chính sách hoàn trả</div>
            </div>

            <div className="lg:col-span-2 space-y-2">
              <div>Chăm sóc khách hàng</div>
              <div>Điều khoản sử dụng</div>
              <div>Sản phẩm bán chạy</div>
              <div>Nông trại đối tác</div>
            </div>

            <div className="lg:col-span-3 space-y-2">
              <div className="flex justify-between">
                <span>Thứ hai - Thứ sáu</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Thứ bảy</span>
                <span>09:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Chủ nhật</span>
                <span>09:00 - 12:00</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
            <span>
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-slate-700">{data.business.name}</strong>
            </span>
            <div className="flex gap-4">
              <span>Điều khoản &amp; Điều kiện</span>
              <span>Chính sách bảo mật</span>
              <span>Chính sách giao hàng</span>
              <span>Giới thiệu</span>
            </div>
          </div>
        </div>
      </footer>

      {/* QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white rounded-xs p-6 relative shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center space-y-3">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-[#5c9e1f]/20"
              />
              <span className="text-[10px] font-bold uppercase text-[#5c9e1f]">
                {quickViewProduct.category} • 100% Hữu Cơ
              </span>
              <h4 className="text-base font-bold text-slate-800">
                {quickViewProduct.name}
              </h4>
              <div className="text-sm font-extrabold text-[#5c9e1f]">
                {quickViewProduct.price}
              </div>
              <button
                type="button"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  setQuickViewProduct(null);
                }}
                className="w-full py-2.5 bg-[#5c9e1f] text-white text-xs font-bold uppercase rounded-xs hover:bg-[#4b8318]"
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
