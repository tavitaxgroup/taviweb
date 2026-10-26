"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  ShoppingBag,
  Heart,
  User,
  Leaf,
  Truck,
  RefreshCw,
  ShieldCheck,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Percent,
  Menu,
  X,
  CheckCircle2,
  Apple,
  Carrot,
  Beef,
  Egg,
  Milk
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct4DefaultData,
  type B2BProduct4Data
} from "@/template-sources/b2b_product_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: B2BProduct4Data = adaptClonedTemplateData(
    b2bProduct4DefaultData,
    incomingData
  );

  const [activeCategory, setActiveCategory] = useState<string>("Trái cây");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(2);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(
    data.products?.[0]?.name || "Nước Cam Ép Lạnh Hữu Cơ"
  );
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0908 728 397";
  const primaryEmail = data.business.email?.[0] || "b2b@monaorganic.vn";

  const allProducts = data.products || b2bProduct4DefaultData.products;
  const filteredProducts =
    activeCategory === "Trái cây"
      ? allProducts
      : allProducts.filter(
          (p) =>
            p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            activeCategory === "Trái cây"
        );
  const displayedProducts =
    filteredProducts.length >= 4 ? filteredProducts : allProducts;

  const openQuoteModal = (productName?: string) => {
    if (productName) setSelectedProduct(productName);
    setQuoteSubmitted(false);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1f2937] font-sans selection:bg-[#14462f] selection:text-white">
      {/* 1. FOREST GREEN TOP STRIP + WHITE HEADER + CATEGORY BAR */}
      <div className="bg-[#14462f] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <p className="font-medium">
            Miễn phí vận chuyển kho lạnh cho đơn hàng đại lý trên 1.000.000đ{" "}
            <button
              onClick={() => openQuoteModal("Đăng ký chính sách đại lý B2B")}
              className="underline font-bold text-[#c9ec9a] ml-1 cursor-pointer"
            >
              Xem thêm
            </button>
          </p>
          <div className="hidden sm:flex items-center gap-4 text-emerald-100">
            <span>Chứng nhận USDA & GlobalG.A.P</span>
            <span>•</span>
            <span>Cung ứng HORECA & Siêu thị toàn quốc</span>
          </div>
        </div>
      </div>

      {/* Main White Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#14462f] text-[#c9ec9a] flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight text-[#14462f] uppercase leading-none">
                {data.business.name}
              </span>
              <span className="block text-[10px] font-bold tracking-[0.2em] text-[#b84a27] uppercase mt-1">
                FRESH & NATURAL B2B
              </span>
            </div>
          </a>

          {/* Hotline Pill */}
          <div className="hidden xl:flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#b84a27] text-white flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="text-stone-400 block">Hotline Đặt Sỉ</span>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="font-extrabold text-[#14462f] text-sm"
              >
                {primaryPhone}
              </a>
            </div>
          </div>

          {/* Search Input with Forest Green Button */}
          <div className="flex-1 max-w-xl mx-auto w-full order-3 lg:order-none">
            <div className="flex items-center bg-stone-100 rounded-full p-1 border border-stone-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm nông sản hữu cơ, mã lô, danh mục..."
                className="bg-transparent text-xs sm:text-sm px-4 py-2 w-full focus:outline-none"
              />
              <button
                onClick={() => openQuoteModal(searchQuery || "Báo giá sỉ nông sản")}
                className="bg-[#14462f] hover:bg-[#0e3522] text-white text-xs font-bold px-6 py-2.5 rounded-full shrink-0 transition-colors cursor-pointer"
              >
                Tìm kiếm
              </button>
            </div>
          </div>

          {/* User / Wishlist / Cart Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => openQuoteModal("Tài khoản đối tác B2B")}
              className="p-2 text-stone-700 hover:text-[#14462f] cursor-pointer"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCartCount((c) => c + 1)}
              className="relative p-2 text-stone-700 hover:text-[#b84a27] cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#b84a27] text-white text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </button>
            <button
              onClick={() => openQuoteModal("Đơn hàng sỉ trong giỏ")}
              className="relative p-2 text-stone-700 hover:text-[#14462f] cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#b84a27] text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Category Navigation Strip */}
        <div className="border-t border-stone-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <button
                onClick={() => {
                  const el = document.getElementById("san-pham");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#b84a27] hover:bg-[#9f3d1e] text-white text-xs font-bold px-4 py-2 rounded-md flex items-center gap-2.5 cursor-pointer"
              >
                <Menu className="w-4 h-4" />
                <span>Danh Mục Sản Phẩm</span>
              </button>

              <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-bold text-stone-700">
                <a href="#trang-chu" className="text-[#b84a27]">
                  Trang chủ
                </a>
                <a href="#uu-dai" className="hover:text-[#14462f]">
                  Giới thiệu
                </a>
                <a href="#san-pham" className="hover:text-[#14462f]">
                  Sản phẩm
                </a>
                <a href="#ban-chay" className="hover:text-[#14462f]">
                  Bán chạy
                </a>
                <a href="#kien-thuc" className="hover:text-[#14462f]">
                  Tin tức
                </a>
                <button
                  onClick={() => openQuoteModal()}
                  className="hover:text-[#14462f] cursor-pointer"
                >
                  Liên hệ B2B
                </button>
              </nav>
            </div>

            <button
              onClick={() => openQuoteModal("Nhận bảng giá khuyến mãi đại lý")}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-[#b84a27] cursor-pointer"
            >
              <span className="w-6 h-6 rounded-full bg-[#b84a27] text-white flex items-center justify-center">
                <Percent className="w-3.5 h-3.5" />
              </span>
              <span>Sản phẩm đang giảm giá sỉ</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. PEACH ORGANIC HERO BANNER */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-r from-[#f6d8bd] via-[#f8dfc7] to-[#f4cfa9]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Bold Organic Typography */}
            <div className="lg:col-span-6 space-y-5 relative z-10">
              <span className="inline-block bg-white/80 text-[#14462f] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {data.hero.eyebrow || "CHUẨN HỮU CƠ QUỐC TẾ"}
              </span>
              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#14462f] drop-shadow-sm leading-[1.08]">
                {data.hero.title}
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-[#5a3e2b]">
                {data.hero.subtitle}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openQuoteModal("Yêu cầu Catalogue & Bảng giá sỉ")}
                  className="bg-[#14462f] hover:bg-[#0e3522] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {data.hero.ctaText || "KHÁM PHÁ NGAY"}
                </button>
              </div>
            </div>

            {/* Right Fresh Basket + Circular "UP TO 25%" Badge */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Circular Terracotta Discount Seal */}
              <div className="z-20 -mr-10 sm:-mr-14 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#b84a27] text-white flex flex-col items-center justify-center shadow-2xl border-4 border-[#f6d8bd] shrink-0">
                <span className="text-[11px] font-bold uppercase tracking-widest">
                  UP TO
                </span>
                <span className="text-3xl sm:text-4xl font-black leading-none mt-1">
                  25%
                </span>
                <span className="text-[10px] uppercase tracking-wider mt-1">
                  Giá Sỉ B2B
                </span>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70 max-w-md w-full">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.business.name}
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 TRUST FEATURE STRIP */}
      <section id="uu-dai" className="py-10 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.trustFeatures || b2bProduct4DefaultData.trustFeatures).map(
              (feat, idx) => (
                <div key={feat.id} className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#eef7e6] text-[#14462f] flex items-center justify-center shrink-0">
                    {idx === 0 ? (
                      <Leaf className="w-6 h-6" />
                    ) : idx === 1 ? (
                      <ShieldCheck className="w-6 h-6" />
                    ) : idx === 2 ? (
                      <Truck className="w-6 h-6" />
                    ) : (
                      <RefreshCw className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#14462f]">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 4. 3 PROMOTIONAL CATEGORY BANNERS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.promoBanners3 || b2bProduct4DefaultData.promoBanners3).map(
              (banner, i) => (
                <div
                  key={banner.id}
                  className={`${banner.bgClass} rounded-2xl p-6 sm:p-7 relative overflow-hidden flex items-center justify-between min-h-[210px] shadow-sm`}
                >
                  <div className="z-10 space-y-2 max-w-[58%]">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#14462f]">
                      {banner.eyebrow}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#14462f] leading-tight">
                      {banner.title}
                    </h3>
                    <button
                      onClick={() => openQuoteModal(banner.title)}
                      className={`mt-3 inline-block ${
                        i === 1
                          ? "bg-[#14462f] text-white"
                          : "bg-[#b84a27] text-white"
                      } text-[11px] font-extrabold uppercase px-5 py-2 rounded-full shadow-sm cursor-pointer`}
                    >
                      {banner.ctaText}
                    </button>
                  </div>
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white/60 shadow-md shrink-0"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 5. "THỰC PHẨM HỮU CƠ" + 5 CATEGORY TABS + 5x2 PRODUCT GRID */}
      <section id="san-pham" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#14462f] uppercase tracking-wide">
            THỰC PHẨM HỮU CƠ
          </h2>

          {/* 5 Circular Icon Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {(data.categories || b2bProduct4DefaultData.categories).map((cat, idx) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.name)}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#b84a27] text-white shadow-lg scale-105"
                        : "bg-white text-[#14462f] border border-stone-200 group-hover:border-[#b84a27]"
                    }`}
                  >
                    {idx === 0 ? (
                      <Apple className="w-7 h-7" />
                    ) : idx === 1 ? (
                      <Beef className="w-7 h-7" />
                    ) : idx === 2 ? (
                      <Carrot className="w-7 h-7" />
                    ) : idx === 3 ? (
                      <Egg className="w-7 h-7" />
                    ) : (
                      <Milk className="w-7 h-7" />
                    )}
                  </div>
                  <span
                    className={`text-xs font-extrabold ${
                      isActive ? "text-[#b84a27]" : "text-stone-700"
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 5x2 Product Grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {displayedProducts.slice(0, 10).map((prd) => (
              <div
                key={prd.id}
                className="group bg-white rounded-2xl border border-stone-100 p-4 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative"
              >
                {prd.badge && (
                  <span className="absolute top-3 left-3 z-10 bg-[#b84a27] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                    {prd.badge}
                  </span>
                )}

                <div>
                  <div className="h-40 rounded-xl overflow-hidden bg-stone-50 mb-3 flex items-center justify-center">
                    <img
                      src={prd.image}
                      alt={prd.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-stone-800 line-clamp-2 group-hover:text-[#14462f]">
                    {prd.name}
                  </h3>

                  <div className="flex items-center gap-0.5 text-amber-400 my-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < prd.rating ? "fill-amber-400" : "text-stone-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-end justify-between gap-2">
                  <div>
                    {prd.oldPrice && (
                      <span className="block text-[11px] text-stone-400 line-through">
                        {prd.oldPrice}
                      </span>
                    )}
                    <span className="text-sm font-extrabold text-[#b84a27]">
                      {prd.price}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setCartCount((c) => c + 1);
                      openQuoteModal(prd.name);
                    }}
                    className="w-8 h-8 rounded-full bg-[#14462f] hover:bg-[#b84a27] text-white flex items-center justify-center transition-colors cursor-pointer"
                    title="Đặt sỉ sản phẩm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "SẢN PHẨM BÁN CHẠY" + COUNTDOWN TIMER */}
      <section id="ban-chay" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#14462f] uppercase">
                SẢN PHẨM BÁN CHẠY
              </h2>
              <span className="bg-[#b84a27] text-white text-xs font-extrabold px-4 py-1.5 rounded-full">
                112 Days : 09 : 43 : 01
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-500">
              <button
                onClick={() => openQuoteModal()}
                className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#14462f] hover:text-white cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => openQuoteModal()}
                className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#14462f] hover:text-white cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {(data.bestSellers || b2bProduct4DefaultData.bestSellers).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-100 p-4 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative"
              >
                {item.badge && (
                  <span className="absolute top-3 left-3 z-10 bg-[#b84a27] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                <div>
                  <div className="h-36 rounded-xl overflow-hidden bg-stone-50 mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-800 line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-0.5 text-amber-400 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-extrabold text-[#b84a27]">
                      {item.price}
                    </span>
                    <button
                      onClick={() => openQuoteModal(item.name)}
                      className="w-8 h-8 rounded-full bg-[#14462f] text-white flex items-center justify-center cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Stock Progress Bar */}
                <div className="mt-3 pt-2 border-t border-stone-100">
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#b84a27] w-2/3 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[11px] text-stone-500 mt-1.5">
                    <span>Có sẵn: {item.available || 6} lô</span>
                    <span>Đã bán: {item.sold || 10} lô</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DUAL WIDE PROMO BANNERS */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Warm Apricot Banner */}
            <div className="rounded-2xl bg-[#f7e1b5] p-8 flex items-center justify-between gap-4 overflow-hidden">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase text-[#14462f]">
                  KHUYẾN MÃI 50% ĐƠN SỈ
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#14462f] leading-tight">
                  NƯỚC ÉP <br /> HỮU CƠ
                </h3>
                <button
                  onClick={() => openQuoteModal("Nước ép hữu cơ đóng chai B2B")}
                  className="mt-2 bg-[#b84a27] hover:bg-[#9f3d1e] text-white text-xs font-extrabold uppercase px-6 py-2.5 rounded-full cursor-pointer"
                >
                  XEM NGAY
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80"
                alt="Nước ép hữu cơ"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-lg border-4 border-white/60"
              />
            </div>

            {/* Right Olive Green Banner */}
            <div className="rounded-2xl bg-[#607d24] text-white p-8 flex items-center justify-between gap-4 overflow-hidden">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase text-[#c9ec9a]">
                  KHUYẾN MÃI 20% HỢP ĐỒNG NĂM
                </span>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                  RAU CỦ <br /> TƯƠI SẠCH
                </h3>
                <button
                  onClick={() => openQuoteModal("Hợp đồng cung ứng rau củ tươi")}
                  className="mt-2 bg-[#b84a27] hover:bg-[#9f3d1e] text-white text-xs font-extrabold uppercase px-6 py-2.5 rounded-full cursor-pointer"
                >
                  XEM NGAY
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
                alt="Rau củ tươi"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-lg border-4 border-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. "SẢN PHẨM NỔI BẬT" (4x2 HORIZONTAL MINI CARDS ON SOFT CREAM) */}
      <section className="py-14 bg-[#fbf3e4] mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#14462f] uppercase mb-10">
            SẢN PHẨM NỔI BẬT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(
              data.featuredHorizontal || b2bProduct4DefaultData.featuredHorizontal
            ).map((item) => (
              <div
                key={item.id}
                onClick={() => openQuoteModal(item.name)}
                className="bg-white rounded-xl p-3.5 shadow-sm hover:shadow-md transition-all flex items-center gap-3.5 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover shrink-0 bg-stone-50"
                />
                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-stone-800 truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-0.5 text-amber-400 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.oldPrice && (
                      <span className="text-[10px] text-stone-400 line-through">
                        {item.oldPrice}
                      </span>
                    )}
                    <span className="text-xs font-extrabold text-[#b84a27]">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHOLESALE PROMO BANNER ("GIẢM NGAY 20% CHO 10 KHÁCH HÀNG ĐẦU TIÊN") */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#f5efe6] border border-stone-200 p-8 sm:p-14 text-center">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
              alt="Organic Wholesale"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10 max-w-xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#b84a27]">
                ƯU ĐÃI ĐỐI TÁC MỚI !
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14462f] leading-tight">
                GIẢM NGAY 20% <br /> CHO 10 ĐỐI TÁC ĐẦU TIÊN
              </h2>
              <div className="pt-2">
                <button
                  onClick={() => openQuoteModal("Đăng ký ưu đãi 20% đối tác mới")}
                  className="bg-[#b84a27] hover:bg-[#9f3d1e] text-white text-xs font-extrabold uppercase tracking-wider px-8 py-3 rounded-full shadow-md cursor-pointer"
                >
                  MUA NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS ("KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI") + ORGANIC CERTIFICATIONS STRIP */}
      <section className="py-16 bg-[#eef7e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#14462f] uppercase mb-10">
            KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || b2bProduct4DefaultData.testimonials || []).map(
              (t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-0.5 text-amber-400 mb-1">
                          {[...Array(t.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] font-extrabold uppercase text-[#b84a27]">
                          CHẤT LƯỢNG TUYỆT VỜI
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      “{t.content}”
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100">
                    <h3 className="text-xs font-extrabold text-[#14462f] uppercase">
                      {t.author}
                    </h3>
                    <p className="text-[11px] text-stone-400">{t.role}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Organic Certification Badges Strip */}
      <div className="py-8 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {(data.certifications || b2bProduct4DefaultData.certifications).map(
            (cert, idx) => (
              <div
                key={idx}
                className="py-3 px-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-500 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5"
              >
                <Leaf className="w-4 h-4 text-[#14462f]" />
                <span>{cert}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* "KIẾN THỨC VỀ NÔNG TRẠI" (4 BLOG CARDS) */}
      <section id="kien-thuc" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14462f] uppercase mb-8">
            KIẾN THỨC VỀ NÔNG TRẠI
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || b2bProduct4DefaultData.news || []).map((post) => {
              const parts = post.date.split(" ");
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#b84a27] text-white rounded-lg px-2.5 py-1 text-center leading-tight">
                        <span className="block text-[10px] font-bold uppercase">
                          {parts[1] || "TH3"}
                        </span>
                        <span className="block text-sm font-black">
                          {parts[0] || "08"}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <span className="text-[11px] font-semibold text-stone-400 block mb-1">
                        {data.business.name} • {post.category}
                      </span>
                      <h3 className="text-sm font-extrabold text-[#14462f] line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs text-stone-500 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <button
                      onClick={() => openQuoteModal()}
                      className="bg-[#14462f] hover:bg-[#b84a27] text-white text-[10px] font-extrabold uppercase px-4 py-2 rounded-full transition-colors cursor-pointer"
                    >
                      XEM THÊM
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER + 5-COLUMN FOOTER */}
      <footer className="bg-[#faf6f0] pt-14 pb-10 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter Center Box */}
          <div className="max-w-xl mx-auto text-center mb-14">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#14462f] uppercase">
              ĐĂNG KÝ NHẬN BẢNG GIÁ NÔNG SẢN MỚI NHẤT HÀNG TUẦN
            </h3>
            {newsletterDone ? (
              <p className="mt-3 text-sm font-bold text-[#14462f]">
                Đã đăng ký nhận báo giá sỉ hàng tuần thành công!
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterDone(true);
                }}
                className="mt-4 flex items-center bg-white rounded-full p-1.5 shadow-sm border border-stone-200"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập email phòng thu mua / đại lý..."
                  className="bg-transparent text-xs sm:text-sm px-4 py-2 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#b84a27] hover:bg-[#9f3d1e] text-white text-xs font-extrabold uppercase px-6 py-2.5 rounded-full shrink-0 cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>

          {/* 5 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-stone-200 text-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#14462f] text-[#c9ec9a] flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-base font-black text-[#14462f] uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-stone-600 underline">{primaryEmail}</p>
              <p className="text-stone-500 leading-relaxed">
                {data.business.workingHours}
              </p>
            </div>

            <div>
              <h4 className="font-extrabold text-[#14462f] uppercase mb-3">
                DANH MỤC
              </h4>
              <ul className="space-y-2 text-stone-600">
                <li>Giới thiệu nông trại</li>
                <li>Sản phẩm hữu cơ</li>
                <li>Chứng nhận GlobalGAP</li>
                <li>Liên hệ đại lý</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-[#14462f] uppercase mb-3">
                SẢN PHẨM
              </h4>
              <ul className="space-y-2 text-stone-600">
                <li>Sữa & Kem hữu cơ</li>
                <li>Thịt hữu cơ ăn cỏ</li>
                <li>Rau củ tươi Đà Lạt</li>
                <li>Trái cây & Hạt xuất khẩu</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-[#14462f] uppercase mb-3">
                CHÍNH SÁCH B2B
              </h4>
              <ul className="space-y-2 text-stone-600">
                <li>Điều khoản hợp đồng sỉ</li>
                <li>Chính sách vận chuyển lạnh</li>
                <li>Chính sách đổi trả 24h</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-[#14462f] uppercase mb-3">
                ĐỊA CHỈ KHO TỔNG
              </h4>
              <p className="text-stone-600 leading-relaxed mb-3">
                {data.business.address}
              </p>
              <div className="bg-white rounded-xl p-3 border border-stone-200 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#b84a27] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-[#14462f] text-sm">
                  {primaryPhone}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-stone-500">
            © {new Date().getFullYear()} {data.business.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* B2B WHOLESALE QUOTE MODAL */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {quoteSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#14462f] mx-auto" />
                <h3 className="text-lg font-extrabold text-[#14462f]">
                  Đã gửi yêu cầu báo giá sỉ!
                </h3>
                <p className="text-xs text-stone-600">
                  Bộ phận Kinh doanh B2B của <strong>{data.business.name}</strong> sẽ gửi bảng
                  chiết khấu theo sản lượng tới quý đối tác trong 15 phút.
                </p>
                <button
                  onClick={() => setQuoteModalOpen(false)}
                  className="bg-[#14462f] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#b84a27]">
                    Báo giá sỉ & Cung ứng B2B
                  </span>
                  <h3 className="text-xl font-extrabold text-[#14462f] mt-0.5">
                    {data.business.name}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Tên doanh nghiệp / Siêu thị / Nhà hàng *"
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#14462f]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại người phụ trách *"
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#14462f]"
                />
                <input
                  type="text"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#14462f]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#14462f] hover:bg-[#b84a27] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  Nhận bảng giá chiết khấu B2B
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
