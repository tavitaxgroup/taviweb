"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  ShieldCheck,
  Coins,
  ChevronLeft,
  ChevronRight,
  Heart,
  User,
  Phone,
  Share2,
  X,
  CheckCircle2,
  Armchair,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat19DefaultData,
  NoiThat19Data,
  NoiThat19Product,
} from "@/template-sources/noi_that_19/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function ProductGridCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onOrder,
  compact = false,
}: {
  product: NoiThat19Product;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onOrder: (p: NoiThat19Product) => void;
  compact?: boolean;
}) {
  return (
    <div className="bg-white border border-gray-200/80 p-3 flex flex-col justify-between text-center relative group hover:shadow-md transition-shadow">
      {/* Discount Badge Top-Left */}
      <span className="absolute top-2.5 left-2.5 z-10 bg-[#d91b23] text-white text-[10px] font-bold px-2 py-0.5 rounded-xs">
        {product.discountBadge}
      </span>

      {/* Wishlist Heart Top-Right */}
      <button
        type="button"
        onClick={() => onToggleWishlist(product.id)}
        aria-label="Yêu thích"
        className={`absolute top-2.5 right-2.5 z-10 w-6 h-6 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
          isWishlisted
            ? "border-[#d91b23] text-[#d91b23] bg-red-50"
            : "border-gray-200 text-zinc-300 hover:text-[#d91b23] bg-white"
        }`}
      >
        <Heart className={`w-3 h-3 ${isWishlisted ? "fill-current" : ""}`} />
      </button>

      <div>
        <div
          onClick={() => onOrder(product)}
          className={`${
            compact ? "h-28 sm:h-32" : "h-36 sm:h-40"
          } w-full mb-2.5 flex items-center justify-center overflow-hidden bg-zinc-50 cursor-pointer`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-400">
          {product.category}
        </p>
        <h3
          onClick={() => onOrder(product)}
          className="text-[11.5px] font-medium text-[#1b65b8] hover:text-[#d91b23] transition-colors line-clamp-2 min-h-[32px] mt-0.5 cursor-pointer leading-snug"
        >
          {product.name}
        </h3>
      </div>

      <div className="pt-2">
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] mb-2">
          <span className="line-through text-zinc-400 text-[10px]">
            {product.oldPrice}
          </span>
          <span className="font-bold text-zinc-900">{product.price}</span>
        </div>

        <button
          type="button"
          onClick={() => onOrder(product)}
          className="bg-[#d91b23] hover:bg-[#b5141b] text-white text-[9.5px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xs transition-colors cursor-pointer"
        >
          {product.ctaLabel || "THÊM VÀO GIỎ"}
        </button>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: NoiThat19Data = adaptClonedTemplateData(
    noiThat19DefaultData,
    incomingData
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [diningTab, setDiningTab] = useState<
    "SẢN PHẨM MỚI" | "BÁN CHẠY NHẤT" | "ĐANG KHUYẾN MÃI"
  >("SẢN PHẨM MỚI");
  const [fridgeTab, setFridgeTab] = useState<
    "SẢN PHẨM MỚI" | "BÁN CHẠY NHẤT" | "ĐANG KHUYẾN MÃI"
  >("SẢN PHẨM MỚI");
  const [stoveTab, setStoveTab] = useState<
    "SẢN PHẨM MỚI" | "BÁN CHẠY NHẤT" | "ĐANG KHUYẾN MÃI"
  >("SẢN PHẨM MỚI");

  const [wishlistIds, setWishlistIds] = useState<string[]>(["nt19-f2"]);
  const [cartCount, setCartCount] = useState(1);
  const [selectedProductModal, setSelectedProductModal] =
    useState<NoiThat19Product | null>(null);
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@kitchenlux.vn";

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const featuredProducts = data.products.filter(
    (p) => p.section === "featured"
  );
  const diningProducts = [...data.products]
    .filter((p) => p.section === "dining")
    .sort((a, b) => (a.tab === diningTab ? -1 : b.tab === diningTab ? 1 : 0));
  const fridgeProducts = [...data.products]
    .filter((p) => p.section === "fridge")
    .sort((a, b) => (a.tab === fridgeTab ? -1 : b.tab === fridgeTab ? 1 : 0));
  const stoveProducts = [...data.products]
    .filter((p) => p.section === "stove")
    .sort((a, b) => (a.tab === stoveTab ? -1 : b.tab === stoveTab ? 1 : 0));

  const openOrderModal = (product: NoiThat19Product) => {
    setOrderSubmitted(false);
    setSelectedProductModal(product);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderForm.name.trim() || !orderForm.phone.trim()) return;
    setCartCount((c) => c + 1);
    setOrderSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-zinc-800 font-sans antialiased selection:bg-[#d91b23] selection:text-white">
      {/* 1. CRIMSON RED TOP STRIP + MAIN SUPERMARKET HEADER */}
      <div className="bg-[#d91b23] text-white text-[11px] font-medium">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <span>Hệ thống siêu thị</span>
          <span className="font-bold">Hotline: {primaryPhone}</span>
          <button
            type="button"
            onClick={() => openOrderModal(featuredProducts[1])}
            className="hover:underline cursor-pointer"
          >
            Đăng nhập
          </button>
        </div>
      </div>

      {/* Main White Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#trang-chu"
            className="flex items-center gap-2.5 shrink-0 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-md bg-[#d91b23] text-white flex items-center justify-center shadow-xs">
              <Armchair className="w-6 h-6" />
            </div>
            <div className="leading-none">
              <span className="block text-xl font-black tracking-tight text-[#d91b23] uppercase">
                {data.business.name.split(" ")[0] || "MONA"}
              </span>
              <span className="block text-[10px] font-extrabold tracking-[0.2em] text-zinc-800 uppercase mt-0.5">
                FURNITURE
              </span>
            </div>
          </a>

          {/* Center Red-Bordered Search Input + Cart */}
          <div className="flex items-center gap-3 w-full md:max-w-md">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const el = document.getElementById("san-pham-noi-bat");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-1 flex items-stretch"
            >
              <input
                type="text"
                placeholder="Bạn muốn tìm gì nào ...?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border border-r-0 border-[#d91b23] px-3.5 py-2 text-xs text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Tìm kiếm"
                className="bg-[#d91b23] hover:bg-[#b5141b] text-white px-3.5 flex items-center justify-center cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            <button
              type="button"
              onClick={() => openOrderModal(featuredProducts[1])}
              className="relative p-2 text-[#d91b23] hover:bg-red-50 rounded-sm cursor-pointer"
              title="Giỏ hàng"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-zinc-900 text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>

          {/* Right 2 Trust Badges */}
          <div className="hidden lg:flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-7 h-7 text-[#d91b23] shrink-0" />
              <div className="leading-tight text-zinc-600">
                <p className="font-bold text-zinc-800">100% bảo vệ</p>
                <p className="text-[11px]">người mua hàng</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="w-7 h-7 text-amber-500 shrink-0" />
              <div className="leading-tight text-zinc-600">
                <p className="font-bold text-zinc-800">Thanh toán</p>
                <p className="text-[11px]">khi nhận hàng</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. 11-ITEM LEFT VERTICAL CATEGORY MENU + RIGHT HERO SLIDER & 2 SUB-BANNERS */}
      <section id="trang-chu" className="pt-4 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-gray-200 p-3 grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Left Vertical Category List (3 Cols) */}
            <div className="lg:col-span-3 border border-gray-100 divide-y divide-gray-100">
              {data.sidebarCategories.map((cat, idx) => (
                <a
                  key={idx}
                  href={
                    cat === "Bàn Ăn"
                      ? "#ban-an"
                      : cat === "Tủ Lạnh"
                      ? "#tu-lanh"
                      : cat === "Các Loại Bếp"
                      ? "#cac-loai-bep"
                      : "#san-pham-noi-bat"
                  }
                  className="block px-3.5 py-2.5 text-xs text-zinc-700 hover:bg-[#d91b23] hover:text-white transition-colors font-medium"
                >
                  {cat}
                </a>
              ))}
            </div>

            {/* Right Hero Slider + 2 Bottom Promo Banners (9 Cols) */}
            <div className="lg:col-span-9 flex flex-col gap-3">
              {/* Top Modern Kitchen Island Hero */}
              <div className="relative h-64 sm:h-80 md:h-[310px] overflow-hidden bg-zinc-900 group">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                    {data.hero.eyebrow}
                  </span>
                  <h1 className="text-xl sm:text-2xl font-bold mt-0.5">
                    {data.hero.title}
                  </h1>
                  <p className="text-xs text-white/85 mt-1 max-w-xl">
                    {data.hero.subtitle}
                  </p>
                </div>

                {/* Slider Arrows */}
                <button
                  type="button"
                  onClick={() => openOrderModal(featuredProducts[1])}
                  aria-label="Trước"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/60 bg-black/25 text-white flex items-center justify-center hover:bg-[#d91b23]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openOrderModal(featuredProducts[1])}
                  aria-label="Tiếp"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/60 bg-black/25 text-white flex items-center justify-center hover:bg-[#d91b23]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom 2 Split Promo Banners */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Left Banner: QUÀ TẶNG CỰC SỐC */}
                <div
                  onClick={() => openOrderModal(featuredProducts[1])}
                  className="relative h-28 overflow-hidden bg-zinc-900 p-4 flex flex-col justify-end cursor-pointer group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
                    alt="Quà tặng cực sốc"
                    className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="bg-black/75 px-3 py-1.5 rounded-xs border border-amber-400/50">
                      <span className="text-amber-400 font-black text-xs uppercase block">
                        QUÀ TẶNG CỰC SỐC
                      </span>
                      <span className="text-white text-[10px]">
                        Gọi ngay! Quà tặng có hạn
                      </span>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-[#d91b23] text-white text-[10px] font-black flex items-center justify-center shadow">
                      SỐC
                    </span>
                  </div>
                </div>

                {/* Right Banner: 100% QUÀ TẶNG */}
                <div
                  onClick={() => openOrderModal(featuredProducts[1])}
                  className="relative h-28 overflow-hidden bg-white border border-red-200 p-4 flex items-center justify-between cursor-pointer group"
                >
                  <div className="w-12 h-full bg-[#d91b23] -my-4 -ml-4 flex items-center justify-center text-white font-black text-xs">
                    GIFT
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-2xl sm:text-3xl font-black italic text-zinc-800 leading-none">
                      100%
                    </p>
                    <p className="font-serif italic text-lg text-[#d91b23] font-bold">
                      quà tặng
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-[#d91b23] uppercase border border-[#d91b23] px-2.5 py-1">
                    Nhận ngay
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "SẢN PHẨM NỔI BẬT" (5-COLUMN PRODUCT ROW) */}
      <section id="san-pham-noi-bat" className="pb-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Bar */}
          <div className="bg-white border border-gray-200 mb-3 flex items-center">
            <span className="border-2 border-[#d91b23] text-[#d91b23] text-xs font-bold uppercase px-4 py-2">
              SẢN PHẨM NỔI BẬT
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {featuredProducts.map((product) => (
              <ProductGridCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={toggleWishlist}
                onOrder={openOrderModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. "BÀN ĂN" SECTION (RED HEADER TAB #d91b23 + LEFT TALL BANNER + RIGHT 4x2 GRID) */}
      <section id="ban-an" className="pb-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Bar */}
          <div className="bg-white border border-gray-200 mb-3 flex flex-wrap items-center">
            <div className="bg-[#d91b23] text-white text-xs font-bold uppercase px-6 py-2.5 min-w-[160px]">
              BÀN ĂN
            </div>
            <div className="flex items-center divide-x divide-gray-200 text-[11px] font-bold uppercase">
              {(
                ["SẢN PHẨM MỚI", "BÁN CHẠY NHẤT", "ĐANG KHUYẾN MÃI"] as const
              ).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setDiningTab(tab)}
                  className={`px-4 py-2.5 transition-colors cursor-pointer ${
                    diningTab === tab
                      ? "text-[#d91b23] bg-red-50/40"
                      : "text-zinc-600 hover:text-[#d91b23]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Body: Left 3-Col Tall Lifestyle Image + Right 9-Col 4x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            <div className="lg:col-span-3 bg-white border border-gray-200 p-2">
              <div className="relative h-full min-h-[340px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=700&q=80"
                  alt="Không gian bàn ăn"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {diningProducts.slice(0, 8).map((product) => (
                <ProductGridCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlistIds.includes(product.id)}
                  onToggleWishlist={toggleWishlist}
                  onOrder={openOrderModal}
                  compact
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "TỦ LẠNH" SECTION (ORANGE HEADER TAB #f37021 + LEFT 4x2 GRID + RIGHT TALL POSTER) */}
      <section id="tu-lanh" className="pb-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Bar */}
          <div className="bg-white border border-gray-200 mb-3 flex flex-wrap items-center">
            <div className="bg-[#f37021] text-white text-xs font-bold uppercase px-6 py-2.5 min-w-[160px]">
              TỦ LẠNH
            </div>
            <div className="flex items-center divide-x divide-gray-200 text-[11px] font-bold uppercase">
              {(
                ["SẢN PHẨM MỚI", "BÁN CHẠY NHẤT", "ĐANG KHUYẾN MÃI"] as const
              ).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFridgeTab(tab)}
                  className={`px-4 py-2.5 transition-colors cursor-pointer ${
                    fridgeTab === tab
                      ? "text-[#f37021] bg-orange-50/40"
                      : "text-zinc-600 hover:text-[#f37021]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Body: Left 9-Col 4x2 Grid + Right 3-Col Tall Poster */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {fridgeProducts.slice(0, 8).map((product) => (
                <ProductGridCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlistIds.includes(product.id)}
                  onToggleWishlist={toggleWishlist}
                  onOrder={openOrderModal}
                  compact
                />
              ))}
            </div>

            <div className="lg:col-span-3 bg-white border border-gray-200 p-4 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="text-left">
                <span className="text-sm font-black tracking-tight text-[#d91b23] block">
                  TOSHIBA
                </span>
                <span className="text-[9px] text-zinc-400 uppercase tracking-wider">
                  Leading Innovation &gt;&gt;&gt;
                </span>
              </div>
              <div className="my-4">
                <p className="text-sm text-zinc-600">Đổi mới từng ngày</p>
                <p className="font-serif italic text-lg font-bold text-zinc-800">
                  Thêm đẹp yêu thương
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center my-2">
                <img
                  src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80"
                  alt="Tủ lạnh Toshiba"
                  className="w-full h-56 object-cover rounded-xs"
                />
              </div>
              <p className="text-[10px] font-bold text-[#d91b23] uppercase pt-2">
                Bảo hành chính hãng 24 tháng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "CÁC LOẠI BẾP" SECTION (BLUE HEADER TAB #1b65b8 + LEFT TALL SALE POSTER + RIGHT 4x2 GRID) */}
      <section id="cac-loai-bep" className="pb-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Bar */}
          <div className="bg-white border border-gray-200 mb-3 flex flex-wrap items-center">
            <div className="bg-[#1b65b8] text-white text-xs font-bold uppercase px-6 py-2.5 min-w-[160px]">
              CÁC LOẠI BẾP
            </div>
            <div className="flex items-center divide-x divide-gray-200 text-[11px] font-bold uppercase">
              {(
                ["SẢN PHẨM MỚI", "BÁN CHẠY NHẤT", "ĐANG KHUYẾN MÃI"] as const
              ).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setStoveTab(tab)}
                  className={`px-4 py-2.5 transition-colors cursor-pointer ${
                    stoveTab === tab
                      ? "text-[#1b65b8] bg-blue-50/40"
                      : "text-zinc-600 hover:text-[#1b65b8]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Body: Left 3-Col Tall Sale Poster + Right 9-Col 4x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            <div className="lg:col-span-3 bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#1e3a8a] text-white p-5 flex flex-col justify-between text-center">
              <div>
                <div className="inline-block bg-[#d91b23] text-white font-black text-xl px-4 py-1 tracking-wider uppercase shadow">
                  SALE
                </div>
                <h3 className="text-base font-extrabold uppercase text-amber-300 mt-3 leading-snug">
                  MUA SẮM THẢ GA — RINH QUÀ SIÊU KHỦNG
                </h3>
                <ul className="mt-3 text-[11px] text-left bg-blue-950/60 p-3 rounded-xs space-y-1">
                  <li>• Tặng 01 Aptomat chống giật</li>
                  <li>• Miễn phí cắt đá &amp; lắp đặt</li>
                  <li>• Giao hàng tận nhà trong 2 giờ</li>
                </ul>
              </div>

              <div className="my-4">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80"
                  alt="Khuyến mãi bếp từ"
                  className="w-full h-40 object-cover rounded-xs border-2 border-white/40"
                />
              </div>

              <button
                type="button"
                onClick={() => openOrderModal(stoveProducts[0])}
                className="w-full bg-[#d91b23] hover:bg-[#b5141b] text-white text-xs font-bold uppercase py-2 rounded-xs cursor-pointer"
              >
                NHẬN ƯU ĐÃI NGAY
              </button>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stoveProducts.slice(0, 8).map((product) => (
                <ProductGridCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlistIds.includes(product.id)}
                  onToggleWishlist={toggleWishlist}
                  onOrder={openOrderModal}
                  compact
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. "THÔNG TIN TIÊU DÙNG" (4 BLOG CARDS) + "THƯƠNG HIỆU HÀNG ĐẦU" */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {/* THÔNG TIN TIÊU DÙNG */}
          <div>
            <div className="bg-white border border-gray-200 mb-3 flex items-center">
              <div className="bg-[#d91b23] text-white text-xs font-bold uppercase px-5 py-2.5">
                THÔNG TIN TIÊU DÙNG
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(data.news || []).map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 p-3 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-zinc-100 mb-2.5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xs font-bold text-zinc-800 hover:text-[#d91b23] transition-colors leading-snug mb-1.5 line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* THƯƠNG HIỆU HÀNG ĐẦU */}
          <div>
            <div className="bg-white border border-gray-200 mb-3 flex items-center">
              <span className="border-2 border-[#d91b23] text-[#d91b23] text-xs font-bold uppercase px-4 py-2">
                THƯƠNG HIỆU HÀNG ĐẦU
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {data.brandLogos.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white border border-gray-200 py-3 px-2 text-center flex flex-col items-center justify-center hover:border-[#d91b23] transition-colors select-none"
                >
                  <span className="text-xs font-black tracking-wider text-zinc-800">
                    {brand.name}
                  </span>
                  <span className="text-[8px] font-semibold tracking-widest text-zinc-400 uppercase mt-0.5">
                    {brand.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. 4-COLUMN WHITE FOOTER + DARK GRAY COPYRIGHT BAR */}
      <footer className="bg-white border-t border-gray-200 pt-10">
        <div className="max-w-6xl mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs text-zinc-600">
            {/* Col 1: CHĂM SÓC KHÁCH HÀNG */}
            <div>
              <h4 className="flex items-center gap-1.5 text-[#d91b23] font-bold uppercase text-xs mb-3">
                <User className="w-3.5 h-3.5" />
                <span>CHĂM SÓC KHÁCH HÀNG</span>
              </h4>
              <ul className="space-y-1.5 text-[11.5px]">
                <li>Miễn phí vận chuyển &amp; lắp đặt</li>
                <li>Điều khoản giao dịch</li>
                <li>Hỗ trợ đặt hàng trực tuyến</li>
                <li>Phương thức thanh toán</li>
                <li>Thời gian giao hàng</li>
                <li>Chính sách bảo hành 5 năm</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>

            {/* Col 2: TUYỂN DỤNG & KẾT NỐI */}
            <div>
              <h4 className="flex items-center gap-1.5 text-[#d91b23] font-bold uppercase text-xs mb-3">
                <User className="w-3.5 h-3.5" />
                <span>TUYỂN DỤNG</span>
              </h4>
              <p className="text-[11.5px] mb-3">
                Đồng hành cùng {data.business.name}
              </p>
              <div className="flex items-center gap-1.5">
                {["f", "IG", "tw", "G+", "YT"].map((s) => (
                  <span
                    key={s}
                    className="w-6 h-6 rounded-full bg-[#1b65b8] text-white text-[10px] font-bold flex items-center justify-center"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Col 3: TỔNG ĐÀI TƯ VẤN */}
            <div>
              <h4 className="flex items-center gap-1.5 text-[#d91b23] font-bold uppercase text-xs mb-3">
                <Phone className="w-3.5 h-3.5" />
                <span>TỔNG ĐÀI TƯ VẤN</span>
              </h4>
              <div className="space-y-1.5 text-[11.5px]">
                <p>
                  <strong>Tổng đài:</strong>{" "}
                  <span className="text-[#1b65b8] font-bold">
                    {primaryPhone}
                  </span>
                </p>
                <p>
                  <strong>Di động:</strong>{" "}
                  <span className="text-[#1b65b8] font-bold">
                    {data.business.phone?.[1] || primaryPhone}
                  </span>
                </p>
                <div className="pt-2 border-t border-gray-100 mt-2">
                  <p className="font-semibold text-zinc-700">Giờ làm việc:</p>
                  <p>{data.business.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Col 4: KẾT NỐI VỚI CHÚNG TÔI */}
            <div>
              <h4 className="flex items-center gap-1.5 text-[#d91b23] font-bold uppercase text-xs mb-3">
                <Share2 className="w-3.5 h-3.5" />
                <span>KẾT NỐI VỚI CHÚNG TÔI</span>
              </h4>
              <div className="space-y-1.5 text-[11.5px]">
                <p className="font-bold text-zinc-800">
                  Siêu Thị {data.business.name}
                </p>
                <p>VP Việt Nam: {data.business.address}</p>
                <p className="pt-1">Điện thoại tư vấn: {primaryPhone}</p>
                <p>Email: {primaryEmail}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#555555] text-white/90 py-3 text-[11px]">
          <div className="max-w-6xl mx-auto px-4">
            © Bản quyền thuộc về <strong>{data.business.name}</strong>. Thiết kế
            website bởi <strong>TaviWeb</strong>
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
            <div className="bg-[#d91b23] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Đặt Hàng &amp; Khảo Sát Tủ Bếp — {data.business.name}
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
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">
                    Đặt hàng thành công!
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Cảm ơn <strong>{orderForm.name}</strong>. Chuyên viên tư vấn
                    của <strong>{data.business.name}</strong> sẽ gọi điện tới số{" "}
                    <strong>{orderForm.phone}</strong> trong 10 phút.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(null)}
                    className="bg-[#d91b23] text-white text-xs font-bold px-6 py-2"
                  >
                    Đóng
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
                      <p className="font-bold text-[#d91b23] mt-0.5">
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
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#d91b23]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    value={orderForm.phone}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#d91b23]"
                  />
                  <input
                    type="text"
                    placeholder="Địa chỉ giao hàng / khảo sát đo đạc"
                    value={orderForm.address}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, address: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#d91b23]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#d91b23] hover:bg-[#b5141b] text-white font-bold uppercase tracking-wider py-2.5 cursor-pointer"
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
