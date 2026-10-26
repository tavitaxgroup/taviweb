"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  ShieldCheck,
  Coins,
  ChevronRight,
  User,
  Users,
  PhoneCall,
  Network,
  CheckCircle2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongKham6DefaultData,
  type PhongKham6Data,
  type JapanaProductItem
} from "@/template-sources/phong_kham_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function ProductCard({
  item,
  onAdd
}: {
  item: JapanaProductItem;
  onAdd: (name: string) => void;
}) {
  return (
    <div className="bg-white border border-stone-200/90 p-3 flex flex-col justify-between text-center relative group hover:shadow-md transition-shadow">
      {item.discountBadge && (
        <span className="w-9 h-9 rounded-full bg-[#e31837] text-white text-[10px] font-extrabold flex items-center justify-center absolute top-2.5 left-2.5 z-10 shadow-xs">
          {item.discountBadge}
        </span>
      )}

      <div>
        <div className="h-36 sm:h-40 flex items-center justify-center overflow-hidden mb-2.5 p-2">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <span className="block text-[9px] uppercase tracking-wider text-stone-400">
          {item.categoryLabel}
        </span>
        <h3 className="mt-0.5 text-[11px] font-medium text-[#222222] group-hover:text-[#e31837] transition-colors line-clamp-2 min-h-[32px]">
          {item.name}
        </h3>
      </div>

      <div className="mt-2 pt-1">
        <div className="flex items-center justify-center gap-1.5 text-xs">
          {item.oldPrice && (
            <span className="text-[10px] text-stone-400 line-through">
              {item.oldPrice}
            </span>
          )}
          <span className="font-extrabold text-[#111111]">{item.price}</span>
        </div>

        <button
          onClick={() => onAdd(item.name)}
          className="mt-2 border border-[#e31837] text-[#e31837] hover:bg-[#e31837] hover:text-white text-[9px] font-extrabold uppercase px-3 py-1 transition-colors cursor-pointer"
        >
          THÊM VÀO GIỎ
        </button>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongKham6Data = adaptClonedTemplateData(
    phongKham6DefaultData,
    incomingData
  );

  const [cartCount, setCartCount] = useState(0);
  const [skincareTab, setSkincareTab] = useState(0);
  const [haircareTab, setHaircareTab] = useState(0);
  const [perfumeTab, setPerfumeTab] = useState(0);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState(
    "Nước Uống Collagen Nhật Bản"
  );
  const [orderDone, setOrderDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "tuvan@japanacare.vn";
  const categories =
    data.sidebarCategories || phongKham6DefaultData.sidebarCategories;
  const subBanners =
    data.subPromoBanners || phongKham6DefaultData.subPromoBanners;
  const featuredList =
    data.featuredProducts || phongKham6DefaultData.featuredProducts;
  const catalogList =
    data.catalogProducts || phongKham6DefaultData.catalogProducts;
  const newsList = data.consumerNews || phongKham6DefaultData.consumerNews;
  const brandsList =
    data.japaneseBrands || phongKham6DefaultData.japaneseBrands;

  const handleAddToCart = (productTitle: string) => {
    setCartCount((c) => c + 1);
    setSelectedItemName(productTitle);
    setOrderDone(false);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#222222] font-sans selection:bg-[#e31837] selection:text-white">
      {/* 1. TOP CRIMSON BAR (#e31837) + WHITE MEGASTORE HEADER */}
      <div className="bg-[#e31837] text-white text-[11px] py-1.5">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="font-semibold">Hệ thống siêu thị</span>
          <a
            href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
            className="font-bold hover:text-yellow-200"
          >
            Hotline: {primaryPhone}
          </a>
          <button
            onClick={() => handleAddToCart("Tư vấn dược sĩ chuyên môn")}
            className="hover:underline cursor-pointer"
          >
            Đăng nhập
          </button>
        </div>
      </div>

      {/* Main White Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <a href="#trang-chu" className="shrink-0">
            <span className="block font-serif text-2xl sm:text-3xl font-black text-[#e31837] tracking-tight leading-none">
              {data.business.name}
            </span>
            <span className="block text-[10px] font-bold text-[#e31837] tracking-widest uppercase">
              Healthcare & Beauty
            </span>
          </a>

          {/* Center Red-Bordered Search Input + Cart */}
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="flex items-center w-full border border-[#e31837] rounded-xs overflow-hidden">
              <input
                type="text"
                placeholder="Bạn muốn tìm gì nào ...?"
                className="w-full px-3 py-1.5 text-xs focus:outline-none"
              />
              <button
                onClick={() => handleAddToCart("Tìm kiếm sản phẩm Nhật Bản")}
                className="bg-[#e31837] text-white px-3 py-2 cursor-pointer"
                aria-label="Tìm kiếm"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => handleAddToCart("Giỏ hàng của bạn")}
              className="relative text-[#e31837] p-1.5 cursor-pointer shrink-0"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#111111] text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Right 2 Buyer Protection Badges */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] text-stone-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#111111] shrink-0" />
              <div className="leading-tight">
                <span className="block font-bold">100% bảo vệ</span>
                <span className="text-stone-500">người mua hàng</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="w-6 h-6 text-[#111111] shrink-0" />
              <div className="leading-tight">
                <span className="block font-bold">Thanh toán</span>
                <span className="text-stone-500">khi nhận hàng</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION: 11-CATEGORY SIDEBAR LEFT + MAIN BANNER & 2 SUB-BANNERS RIGHT */}
      <section id="trang-chu" className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-stone-200 p-3 grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Left 11-Row Vertical Category Sidebar */}
            <div className="lg:col-span-3 border border-stone-200 divide-y divide-stone-100">
              {categories.map((cat, idx) => (
                <a
                  key={idx}
                  href="#duong-da"
                  className="px-3.5 py-2.5 flex items-center justify-between text-xs text-stone-700 hover:bg-[#fff1f3] hover:text-[#e31837] transition-colors"
                >
                  <span>{cat}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              ))}
            </div>

            {/* Right Main Banner + 2 Sub-Banners */}
            <div className="lg:col-span-9 flex flex-col justify-between gap-3">
              {/* Top Main Pink/Red Sale Banner */}
              <div className="relative min-h-[260px] sm:min-h-[300px] bg-gradient-to-r from-[#ffdde4] via-[#ffc2d1] to-[#ff8fab] overflow-hidden flex items-center p-6 sm:p-10">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="absolute inset-y-0 left-0 w-1/2 h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffb3c6]/80 to-[#ff8fab]" />

                <div className="relative z-10 ml-auto text-center max-w-md space-y-2">
                  <span className="text-sm sm:text-base font-black uppercase tracking-wider text-[#222222]">
                    QUYỀN NĂNG{" "}
                    <strong className="text-white drop-shadow text-xl sm:text-2xl italic">
                      PHÁI ĐẸP
                    </strong>
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-black uppercase text-[#fff200] drop-shadow-md leading-none">
                    {data.hero.title}
                  </h1>
                  <p className="text-xl sm:text-2xl font-black uppercase text-[#111111]">
                    {data.hero.subtitle}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() =>
                        handleAddToCart("Combo Quyền Năng Phái Đẹp Mua 1 Tặng 1")
                      }
                      className="bg-[#e31837] hover:bg-[#b8122b] text-white text-xs font-extrabold uppercase px-7 py-2.5 rounded-full shadow-md transition-colors cursor-pointer"
                    >
                      {data.hero.ctaText || "XEM NGAY"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom 2 Sub-Promo Banners */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subBanners.map((sb) => (
                  <div
                    key={sb.id}
                    onClick={() => handleAddToCart(sb.title)}
                    className={`relative h-32 overflow-hidden p-4 flex items-center justify-between cursor-pointer group ${
                      sb.theme === "pink"
                        ? "bg-gradient-to-r from-[#fce7f3] to-[#fbcfe8]"
                        : "bg-gradient-to-r from-[#e0f2fe] to-[#bae6fd]"
                    }`}
                  >
                    <img
                      src={sb.image}
                      alt={sb.title}
                      className="w-24 h-24 object-cover rounded-full border-2 border-white shadow-sm shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="text-right">
                      <span className="block text-[10px] font-extrabold uppercase text-stone-700">
                        {sb.title}
                      </span>
                      <span className="block text-xl font-black uppercase text-[#e31837] leading-tight">
                        {sb.highlight}
                      </span>
                      <span className="block text-xs font-extrabold uppercase text-[#0284c7]">
                        {sb.subText}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: SẢN PHẨM NỔI BẬT (5-COLUMN ROW) */}
      <section id="san-pham-noi-bat" className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-stone-200 border-l-4 border-l-[#e31837] px-4 py-2.5 mb-3">
            <h2 className="text-xs font-extrabold uppercase text-[#e31837]">
              SẢN PHẨM NỔI BẬT
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {featuredList.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onAdd={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: DƯỠNG DA (RED TAB BAR #e31837 + LEFT COLLAGEN BANNER + RIGHT 4x2 GRID) */}
      <section id="duong-da" className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Bar */}
          <div className="bg-white border border-stone-200 flex flex-wrap items-center mb-3">
            <div className="bg-[#e31837] text-white text-xs font-extrabold uppercase px-8 py-3 min-w-[180px] text-center">
              DƯỠNG DA
            </div>
            <div className="flex items-center divide-x divide-stone-200 text-[11px] font-bold uppercase">
              {["SẢN PHẨM MỚI", "BÁN CHẠY NHẤT", "ĐANG KHUYẾN MÃI"].map(
                (t, idx) => (
                  <button
                    key={t}
                    onClick={() => setSkincareTab(idx)}
                    className={`px-4 py-3 transition-colors cursor-pointer ${
                      skincareTab === idx
                        ? "text-[#e31837]"
                        : "text-stone-500 hover:text-[#222222]"
                    }`}
                  >
                    {t}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            {/* Left Tall Vertical Collagen Banner */}
            <div
              onClick={() =>
                handleAddToCart("Collagen Nhật Bản Giảm 10% Mua 1 Tặng 1")
              }
              className="lg:col-span-3 bg-gradient-to-b from-white via-[#fff0f3] to-[#fda4af] border border-stone-200 p-5 flex flex-col justify-between text-center cursor-pointer relative overflow-hidden"
            >
              <div className="space-y-1.5 relative z-10">
                <span className="block text-xl font-black uppercase tracking-widest text-[#111111]">
                  COLLAGEN
                </span>
                <span className="block text-[10px] font-extrabold uppercase text-stone-600">
                  DẠNG NƯỚC - DẠNG VIÊN - DẠNG BỘT
                </span>
                <span className="block text-2xl font-black uppercase text-[#e31837] pt-1">
                  GIẢM 10%
                </span>
                <span className="inline-block bg-[#0284c7] text-white text-sm font-black uppercase px-4 py-1 rounded-xs">
                  MUA 1 TẶNG 1
                </span>
              </div>

              <div className="my-4 h-64 overflow-hidden rounded border border-pink-200 bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
                  alt="Collagen Nhật Bản"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-[11px] font-bold text-[#9f1239]">
                Hấp thu nhanh gấp 5 lần • Chuẩn nội địa Nhật
              </span>
            </div>

            {/* Right 4x2 Product Grid */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {catalogList.map((item) => (
                <ProductCard
                  key={`sk-${item.id}`}
                  item={item}
                  onAdd={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: DƯỠNG TÓC (ORANGE TAB BAR #e87e24 + LEFT 4x2 GRID + RIGHT PLACENTA BANNER) */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-stone-200 flex flex-wrap items-center mb-3">
            <div className="bg-[#e87e24] text-white text-xs font-extrabold uppercase px-8 py-3 min-w-[180px] text-center">
              DƯỠNG TÓC
            </div>
            <div className="flex items-center divide-x divide-stone-200 text-[11px] font-bold uppercase">
              {["SẢN PHẨM MỚI", "BÁN CHẠY NHẤT", "ĐANG KHUYẾN MÃI"].map(
                (t, idx) => (
                  <button
                    key={t}
                    onClick={() => setHaircareTab(idx)}
                    className={`px-4 py-3 transition-colors cursor-pointer ${
                      haircareTab === idx
                        ? "text-[#e87e24]"
                        : "text-stone-500 hover:text-[#222222]"
                    }`}
                  >
                    {t}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            {/* Left 4x2 Product Grid */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {catalogList.map((item) => (
                <ProductCard
                  key={`hc-${item.id}`}
                  item={item}
                  onAdd={handleAddToCart}
                />
              ))}
            </div>

            {/* Right Tall Vertical Placenta Banner */}
            <div
              onClick={() =>
                handleAddToCart("Thực Phẩm Làm Đẹp Resvera Placenta Mua 1 Tặng 1")
              }
              className="lg:col-span-3 bg-gradient-to-b from-[#fff7ed] via-[#ffedd5] to-[#fdba74] border border-stone-200 p-5 flex flex-col justify-between text-center cursor-pointer"
            >
              <div className="space-y-1.5">
                <span className="block text-base font-black italic uppercase text-[#1e1e1e]">
                  THỰC PHẨM LÀM ĐẸP
                </span>
                <span className="block text-3xl font-black uppercase text-[#ea580c] leading-none">
                  MUA 1
                </span>
                <span className="block text-3xl font-black uppercase text-[#ea580c] leading-none">
                  TẶNG 1
                </span>
              </div>

              <div className="my-4 h-64 overflow-hidden rounded border border-orange-200 bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
                  alt="Viên uống Resvera Placenta"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-[11px] font-bold text-[#9a3412]">
                Tinh chất nhau thai Resvera Placenta Nhật Bản
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: NƯỚC HOA & THỰC PHẨM GIẢM CÂN (ROYAL BLUE TAB BAR #1b5299) */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-stone-200 flex flex-wrap items-center mb-3">
            <div className="bg-[#1b5299] text-white text-xs font-extrabold uppercase px-8 py-3 min-w-[180px] text-center">
              NƯỚC HOA
            </div>
            <div className="flex items-center divide-x divide-stone-200 text-[11px] font-bold uppercase">
              {["SẢN PHẨM MỚI", "BÁN CHẠY NHẤT", "ĐANG KHUYẾN MÃI"].map(
                (t, idx) => (
                  <button
                    key={t}
                    onClick={() => setPerfumeTab(idx)}
                    className={`px-4 py-3 transition-colors cursor-pointer ${
                      perfumeTab === idx
                        ? "text-[#1b5299]"
                        : "text-stone-500 hover:text-[#222222]"
                    }`}
                  >
                    {t}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            {/* Left Tall Vertical Diet Banner */}
            <div
              onClick={() =>
                handleAddToCart("Thực Phẩm Giảm Cân An Toàn Hiệu Quả Be-Max Diet")
              }
              className="lg:col-span-3 bg-gradient-to-b from-[#f3e8ff] via-[#e9d5ff] to-[#c084fc] border border-stone-200 p-5 flex flex-col justify-between text-center cursor-pointer"
            >
              <div className="space-y-1">
                <span className="block text-sm font-black italic uppercase text-[#1e1e1e]">
                  THỰC PHẨM GIẢM CÂN
                </span>
                <span className="block text-2xl font-black uppercase text-[#6b21a8] leading-tight">
                  AN TOÀN
                </span>
                <span className="block text-2xl font-black uppercase text-[#6b21a8] leading-tight">
                  HIỆU QUẢ
                </span>
              </div>

              <div className="my-4 h-64 overflow-hidden rounded border border-purple-200 bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
                  alt="Thực phẩm giảm cân Nhật Bản"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-[11px] font-bold text-[#581c87]">
                Kiểm soát cân nặng chuẩn y khoa Nhật Bản
              </span>
            </div>

            {/* Right 4x2 Product Grid */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {catalogList.map((item) => (
                <ProductCard
                  key={`pf-${item.id}`}
                  item={item}
                  onAdd={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: THÔNG TIN TIÊU DÙNG (4 HEALTH BLOG CARDS) */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-b-2 border-[#e31837] mb-4 flex items-center">
            <span className="bg-[#e31837] text-white text-xs font-extrabold uppercase px-5 py-2">
              THÔNG TIN TIÊU DÙNG
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsList.map((post) => (
              <article
                key={post.id}
                onClick={() => handleAddToCart(post.title)}
                className="bg-white border border-stone-200 p-2.5 group cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="h-36 overflow-hidden relative mb-2.5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-white border border-[#e31837] text-[#e31837] text-[10px] font-extrabold px-2 py-0.5 leading-tight text-center">
                    <span className="block">{post.day}</span>
                    <span className="block text-[9px]">{post.month}</span>
                  </div>
                </div>
                <h3 className="text-xs font-bold text-[#222222] group-hover:text-[#e31837] transition-colors text-center line-clamp-2 px-1">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION: THƯƠNG HIỆU HÀNG ĐẦU (7 JAPANESE BRAND LOGOS) */}
      <section className="py-4 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-stone-200 border-l-4 border-l-[#e31837] px-4 py-2.5 mb-3">
            <h2 className="text-xs font-extrabold uppercase text-[#e31837]">
              THƯƠNG HIỆU HÀNG ĐẦU
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {brandsList.map((br) => (
              <div
                key={br.id}
                className="bg-white border border-stone-200 h-16 flex flex-col items-center justify-center px-2 text-center"
              >
                <span
                  className="font-serif text-sm sm:text-base font-black tracking-tight"
                  style={{ color: br.color }}
                >
                  {br.name}
                </span>
                {br.sub && (
                  <span className="text-[7px] font-bold uppercase tracking-widest text-stone-400">
                    {br.sub}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 4-COLUMN WHITE FOOTER + DARK COPYRIGHT BAR */}
      <footer className="bg-white border-t border-stone-200 pt-10 text-xs text-stone-600">
        <div className="max-w-6xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Chăm sóc khách hàng */}
            <div className="space-y-2.5">
              <h4 className="font-extrabold text-[#e31837] uppercase flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>CHĂM SÓC KHÁCH HÀNG</span>
              </h4>
              <ul className="space-y-1.5 text-[11px]">
                <li>Miễn phí vận chuyển</li>
                <li>Điều khoản giao dịch</li>
                <li>Hỗ trợ đặt hàng</li>
                <li>Phương thức thanh toán</li>
                <li>Thời gian giao hàng</li>
                <li>Chính sách bảo hành</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>

            {/* Col 2: Tuyển dụng */}
            <div className="space-y-2.5">
              <h4 className="font-extrabold text-[#e31837] uppercase flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>TUYỂN DỤNG</span>
              </h4>
              <p className="text-[11px]">Bán hàng cùng {data.business.name}</p>
              <div className="flex items-center gap-1.5 pt-1">
                <span className="w-6 h-6 rounded-full bg-[#1877f2] text-white text-[10px] font-bold flex items-center justify-center">
                  f
                </span>
                <span className="w-6 h-6 rounded-full bg-[#0284c7] text-white text-[10px] font-bold flex items-center justify-center">
                  ◎
                </span>
                <span className="w-6 h-6 rounded-full bg-[#38bdf8] text-white text-[10px] font-bold flex items-center justify-center">
                  t
                </span>
                <span className="w-6 h-6 rounded-full bg-[#ea580c] text-white text-[10px] font-bold flex items-center justify-center">
                  G+
                </span>
                <span className="w-6 h-6 rounded-full bg-[#dc2626] text-white text-[10px] font-bold flex items-center justify-center">
                  ▶
                </span>
              </div>
            </div>

            {/* Col 3: Tổng đài tư vấn */}
            <div className="space-y-2.5">
              <h4 className="font-extrabold text-[#e31837] uppercase flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>TỔNG ĐÀI TƯ VẤN</span>
              </h4>
              <div className="text-[11px] space-y-1">
                <p>
                  <strong>Tổng đài:</strong>{" "}
                  <span className="text-[#0284c7] font-semibold">
                    {primaryPhone}
                  </span>
                </p>
                <p>
                  <strong>Di động :</strong>{" "}
                  <span className="text-[#0284c7] font-semibold">
                    {primaryPhone}
                  </span>
                </p>
                <p className="text-stone-400">----------------------</p>
                <p>Giờ làm việc:</p>
                <p>{data.business.workingHours}</p>
              </div>
            </div>

            {/* Col 4: Kết nối với chúng tôi */}
            <div className="space-y-2.5">
              <h4 className="font-extrabold text-[#e31837] uppercase flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5" />
                <span>KẾT NỐI VỚI CHÚNG TÔI</span>
              </h4>
              <div className="text-[11px] space-y-1">
                <p className="font-bold text-[#111111]">
                  Siêu Thị {data.business.name}
                </p>
                <p>VP Việt Nam: {data.business.address}</p>
                <p>
                  Điện thoại tư vấn:{" "}
                  <span className="text-[#0284c7]">{primaryPhone}</span>
                </p>
                <p>Email: {primaryEmail}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#555555] text-stone-200 text-center py-3 text-[11px]">
          © Bản quyền thuộc về <strong>{data.business.name}</strong>
        </div>
      </footer>

      {/* QUICK ORDER MODAL */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full rounded overflow-hidden shadow-2xl border border-stone-200">
            <div className="bg-[#e31837] text-white px-5 py-3.5 flex items-center justify-between">
              <span className="font-extrabold text-xs uppercase">
                Đặt Hàng Nhanh • {data.business.name}
              </span>
              <button
                onClick={() => setOrderModalOpen(false)}
                className="text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {orderDone ? (
                <div className="text-center py-4 space-y-2.5">
                  <CheckCircle2 className="w-10 h-10 text-[#16a34a] mx-auto" />
                  <h4 className="font-bold text-sm">
                    Đặt hàng thành công!
                  </h4>
                  <p className="text-xs text-stone-500">
                    Đơn hàng <strong>{selectedItemName}</strong> sẽ được dược sĩ{" "}
                    <strong>{data.business.name}</strong> gọi xác nhận và giao COD tận nơi.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setOrderDone(true);
                  }}
                  className="space-y-3 text-xs"
                >
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#e31837] mb-1">
                      Sản phẩm đã chọn
                    </label>
                    <input
                      type="text"
                      value={selectedItemName}
                      onChange={(e) => setSelectedItemName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 font-semibold"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên người nhận *"
                    className="w-full border border-stone-300 px-3 py-2"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại nhận hàng COD *"
                    className="w-full border border-stone-300 px-3 py-2"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Địa chỉ giao hàng tận nơi *"
                    className="w-full border border-stone-300 px-3 py-2"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#e31837] hover:bg-[#b8122b] text-white font-extrabold uppercase py-2.5 cursor-pointer"
                  >
                    Xác Nhận Đặt Hàng (Thanh Toán Khi Nhận)
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
