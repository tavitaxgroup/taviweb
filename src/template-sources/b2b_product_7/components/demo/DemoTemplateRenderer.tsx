"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Heart,
  Package,
  Menu,
  ChevronRight,
  ChevronDown,
  Star,
  Flame,
  CheckCircle2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct7DefaultData,
  type B2BProduct7Data,
  type OfficeProductItem
} from "@/template-sources/b2b_product_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: B2BProduct7Data = adaptClonedTemplateData(
    b2bProduct7DefaultData,
    incomingData
  );

  const [recommendedTab, setRecommendedTab] = useState("Newest Products");
  const [cartCount, setCartCount] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    "Hợp đồng cung ứng Văn phòng phẩm & Thiết bị định kỳ"
  );
  const [quoteSent, setQuoteSent] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@officesup.vn";

  const openSupplyQuote = (title?: string) => {
    if (title) setSelectedItem(title);
    setQuoteSent(false);
    setQuoteModalOpen(true);
  };

  const renderProductCard = (item: OfficeProductItem) => (
    <div
      key={item.id}
      onClick={() => openSupplyQuote(item.name)}
      className="group bg-white p-3.5 rounded-lg border border-slate-100 hover:border-[#ef3f23]/40 hover:shadow-md transition-all flex flex-col justify-between relative cursor-pointer"
    >
      {/* Badges */}
      {item.badge && (
        <span className="absolute top-2.5 left-2.5 z-10 bg-sky-100 text-sky-700 text-[10px] font-bold px-2 py-0.5 rounded">
          {item.badge}
        </span>
      )}
      {item.discount && (
        <span className="absolute top-2.5 right-2.5 z-10 bg-amber-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded leading-tight text-center">
          {item.discount}
        </span>
      )}

      <div>
        <div className="h-36 bg-slate-50 rounded flex items-center justify-center overflow-hidden mb-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h4 className="text-xs font-semibold text-slate-700 group-hover:text-[#ef3f23] line-clamp-2">
          {item.name}
        </h4>

        <div className="flex items-center gap-1 my-1.5">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="w-3 h-3 fill-amber-400" />
            ))}
          </div>
          <span className="text-[10px] text-slate-400">{item.reviews}</span>
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-1.5">
          {item.oldPrice && (
            <span className="text-[10px] text-slate-400 line-through">
              {item.oldPrice}
            </span>
          )}
          <span className="text-xs font-extrabold text-[#ef3f23]">
            {item.price}
          </span>
        </div>
        <p className="text-[10px] text-slate-400 mt-1">
          Người bán:{" "}
          <strong className="text-slate-600">
            {item.vendor || data.business.name.toLowerCase()}
          </strong>
        </p>

        {item.soldText && (
          <div className="mt-2 bg-orange-100 rounded-full h-4 relative overflow-hidden flex items-center justify-center">
            <div className="absolute left-0 inset-y-0 bg-[#ef3f23] w-2/3 rounded-full" />
            <span className="relative z-10 text-[9px] font-bold text-white flex items-center gap-0.5">
              <Flame className="w-2.5 h-2.5" />
              {item.soldText}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-slate-800 font-sans selection:bg-[#ef3f23] selection:text-white">
      {/* 1. TOP UTILITY STRIP + WHITE HEADER + FULL-WIDTH ORANGE NAVBAR */}
      <div className="bg-white border-b border-slate-100 text-[11px] text-slate-600 py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <p>
            Miễn phí vận chuyển tận văn phòng trong{" "}
            <strong className="text-emerald-600 underline">
              Ngày của {data.business.name}.
            </strong>
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => openSupplyQuote("Đăng ký nhà cung cấp B2B")}
              className="hover:text-[#ef3f23] cursor-pointer"
            >
              Bán trên {data.business.name}
            </button>
            <button
              onClick={() => openSupplyQuote("Tra cứu vận đơn doanh nghiệp")}
              className="hover:text-[#ef3f23] cursor-pointer"
            >
              Theo dõi đơn hàng
            </button>
            <button
              onClick={() => openSupplyQuote("Đăng nhập tài khoản doanh nghiệp")}
              className="hover:text-[#ef3f23] font-semibold cursor-pointer"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>

      {/* Main White Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#ef3f23] text-white flex items-center justify-center shadow-sm">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight text-slate-900 uppercase leading-none">
                {data.business.name}
              </span>
              <span className="block text-[9px] font-bold tracking-[0.22em] text-slate-400 uppercase mt-1">
                CORPORATE SUPPLY
              </span>
            </div>
          </a>

          {/* Search Input */}
          <div className="flex-1 max-w-2xl w-full order-3 lg:order-none">
            <div className="flex items-center border border-slate-200 rounded overflow-hidden bg-slate-50">
              <div className="hidden sm:flex items-center gap-1 px-3 py-2 text-xs text-slate-600 border-r border-slate-200 bg-white shrink-0">
                <span>Tất cả</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm hơn 20.000 sản phẩm văn phòng phẩm, thiết bị..."
                className="w-full bg-white px-3.5 py-2 text-xs sm:text-sm focus:outline-none"
              />
              <button
                onClick={() => openSupplyQuote()}
                className="bg-[#ef3f23] hover:bg-[#d63218] text-white px-4 py-2.5 shrink-0 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Wishlist & Cart */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setCartCount((c) => c + 1)}
              className="relative text-slate-700 hover:text-[#ef3f23] cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#ef3f23] text-white text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => openSupplyQuote("Giỏ hàng vật tư văn phòng")}
              className="relative text-slate-700 hover:text-[#ef3f23] cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#ef3f23] text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Full-Width Orange Navigation Bar */}
        <div className="bg-[#ef3f23] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between text-xs font-bold">
            <div className="flex items-center gap-6 h-full">
              <div className="bg-[#2b2d32] h-full px-5 flex items-center gap-2.5 min-w-[220px]">
                <Menu className="w-4 h-4" />
                <span>Tất cả danh mục</span>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                <a href="#danh-muc-noi-bat" className="hover:underline">
                  Giới thiệu
                </a>
                <a href="#san-pham-uu-dai" className="hover:underline">
                  Sản phẩm
                </a>
                <a href="#thiet-bi-cong-nghe" className="hover:underline">
                  Thiết bị điện tử
                </a>
                <button
                  onClick={() => openSupplyQuote()}
                  className="hover:underline cursor-pointer"
                >
                  Liên hệ
                </button>
                <a href="#san-pham-uu-dai" className="hover:underline">
                  Khuyến mãi giới hạn
                </a>
              </nav>
            </div>

            <div className="hidden sm:flex items-center gap-1">
              <span>Đã xem gần đây</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. 12-CATEGORY LEFT SIDEBAR + MAIN HERO BANNER + 2 BOTTOM PROMO CARDS */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Vertical 12-Category Sidebar */}
            <div className="hidden lg:block lg:col-span-3 bg-white rounded-lg border border-slate-200/80 py-2">
              <ul className="divide-y divide-slate-100 text-xs text-slate-700">
                {(
                  data.sidebarCategories || b2bProduct7DefaultData.sidebarCategories
                ).map((cat, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => openSupplyQuote(`Danh mục: ${cat}`)}
                      className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-slate-50 hover:text-[#ef3f23] transition-colors cursor-pointer"
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Main Hero + 2 Sub-Cards */}
            <div className="lg:col-span-9 flex flex-col gap-5">
              {/* Top Hero Card */}
              <div className="bg-white rounded-lg border border-slate-200/80 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
                <div className="md:col-span-6 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ef3f23]">
                    {data.hero.eyebrow || "THIẾT BỊ VĂN PHÒNG"}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {data.hero.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {data.hero.subtitle}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => openSupplyQuote(data.hero.title)}
                      className="bg-[#ef3f23] hover:bg-[#d63218] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-sm transition-colors cursor-pointer"
                    >
                      {data.hero.ctaText || "Mua ngay"}
                    </button>
                  </div>
                </div>

                <div className="md:col-span-6">
                  <img
                    src={data.hero.backgroundImage}
                    alt={data.hero.title}
                    className="w-full h-56 sm:h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Bottom 2 Promo Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div
                  onClick={() => openSupplyQuote("Apple MacBook Air 256GB Doanh Nghiệp")}
                  className="bg-white rounded-lg border border-slate-200/80 p-5 flex items-center justify-between gap-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                      Apple MacBook <br /> Air 256GB
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Retina Display</p>
                    <span className="inline-block mt-2 text-xs font-extrabold text-[#ef3f23]">
                      25% Off
                    </span>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
                    alt="MacBook Air"
                    className="w-32 h-24 object-cover rounded"
                  />
                </div>

                <div
                  onClick={() => openSupplyQuote("Sofa Phòng Chờ Văn Phòng Wooden Aqua")}
                  className="bg-[#e8eff5] rounded-lg border border-slate-200/80 p-5 flex items-center justify-between gap-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                      Wooden <br /> Sofa Aqua
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">1-year warranty</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80"
                    alt="Sofa Aqua"
                    className="w-32 h-24 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "DANH MỤC NỔI BẬT" (6x2 VISUAL CATEGORY GRID) */}
      <section id="danh-muc-noi-bat" className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200/80 p-6">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-base font-extrabold text-slate-900">
                Danh mục nổi bật
              </h2>
              <button
                onClick={() => openSupplyQuote("Tất cả danh mục vật tư văn phòng")}
                className="text-xs font-semibold text-[#ef3f23] hover:underline cursor-pointer"
              >
                Tất cả sản phẩm
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {(
                data.featuredCategories12 ||
                b2bProduct7DefaultData.featuredCategories12
              ).map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => openSupplyQuote(cat.name)}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-xl bg-slate-50 overflow-hidden mb-2.5 border border-slate-100 group-hover:border-[#ef3f23] transition-colors">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-[#ef3f23]">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. "SẢN PHẨM ƯU ĐÃI" + ORANGE COUNTDOWN PILL + 5-COLUMN FLASH SALE */}
      <section id="san-pham-uu-dai" className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
              <h2 className="text-base font-extrabold text-slate-900">
                Sản phẩm ưu đãi
              </h2>
              <span className="bg-[#ef3f23] text-white text-xs font-extrabold px-4 py-1 rounded">
                289 : 19 : 09 : 31
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {(
                data.flashSaleProducts || b2bProduct7DefaultData.flashSaleProducts
              ).map(renderProductCard)}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "ĐANG THỊNH HÀNH" (18 PILL TAG CLOUD BUTTONS) */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200/80 p-6">
            <h2 className="text-base font-extrabold text-slate-900 mb-4">
              Đang thịnh hành trên {data.business.name}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {(data.trendingTags || b2bProduct7DefaultData.trendingTags).map(
                (tag, i) => (
                  <button
                    key={i}
                    onClick={() => openSupplyQuote(`Từ khóa: ${tag}`)}
                    className="px-3.5 py-1.5 rounded border border-slate-200 text-xs text-slate-600 hover:border-[#ef3f23] hover:text-[#ef3f23] transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6A. "THIẾT BỊ CÔNG NGHỆ HÀNG ĐẦU" (LEFT TALL BANNER + 4 PRODUCT CARDS) */}
      <section id="thiet-bi-cong-nghe" className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 mb-5 border-b border-slate-100">
              <h2 className="text-base font-extrabold text-slate-900">
                Thiết bị công nghệ hàng đầu
              </h2>
              <div className="flex items-center gap-5 text-xs font-semibold">
                <span className="text-[#ef3f23] border-b-2 border-[#ef3f23] pb-1">
                  Phụ kiện điện tử
                </span>
                <span className="text-slate-500">Thiết bị điện tử</span>
                <span className="text-slate-500">TV & Phòng họp</span>
                <span className="text-slate-500">Tất cả</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Left Tall Promo Banner */}
              <div
                onClick={() => openSupplyQuote("Trạm sạc iPhone MagSafe Văn Phòng")}
                className="bg-[#eef3f8] rounded-lg p-5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    iPhone MagSafe <br /> Charger
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Sẵn hàng phân phối sỉ
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
                  alt="MagSafe"
                  className="w-full h-44 object-cover rounded-lg mt-4"
                />
              </div>

              {(data.techShowcase || b2bProduct7DefaultData.techShowcase).map(
                renderProductCard
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6B. "ĐỒNG PHỤC & QUẦN ÁO THỜI TRANG" (4 PRODUCT CARDS + RIGHT TALL BANNER) */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 mb-5 border-b border-slate-100">
              <h2 className="text-base font-extrabold text-slate-900">
                Đồng phục & Quà tặng thương hiệu
              </h2>
              <div className="flex items-center gap-5 text-xs font-semibold">
                <span className="text-[#ef3f23] border-b-2 border-[#ef3f23] pb-1">
                  Quà tặng sự kiện
                </span>
                <span className="text-slate-500">Đồng phục công sở</span>
                <span className="text-slate-500">Tất cả</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {(data.apparelShowcase || b2bProduct7DefaultData.apparelShowcase).map(
                renderProductCard
              )}

              {/* Right Tall Promo Banner */}
              <div
                onClick={() => openSupplyQuote("Giày & Đồng phục Team Building")}
                className="bg-[#f3f4f6] rounded-lg p-5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Reebok White <br /> Club Double C
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Make your day.</p>
                  <span className="inline-block mt-2 text-xs font-extrabold text-[#ef3f23]">
                    50% Off
                  </span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80"
                  alt="Sneaker"
                  className="w-full h-44 object-cover rounded-lg mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6C. "ĐỒ GIA DỤNG & NỘI THẤT HIỆN ĐẠI" (LEFT TALL BANNER + 4 PRODUCT CARDS) */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 mb-5 border-b border-slate-100">
              <h2 className="text-base font-extrabold text-slate-900">
                Đồ gia dụng & Nội thất văn phòng hiện đại
              </h2>
              <div className="flex items-center gap-5 text-xs font-semibold">
                <span className="text-[#ef3f23] border-b-2 border-[#ef3f23] pb-1">
                  Nội thất & Pantry
                </span>
                <span className="text-slate-500">Ghế Giám Đốc</span>
                <span className="text-slate-500">Tất cả</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Left Tall Chair Banner */}
              <div
                onClick={() => openSupplyQuote("Ghế văn phòng Armen Living Cassie Chair")}
                className="bg-[#f8efe8] rounded-lg p-5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Armen Living <br /> Cassie Chair
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Mid-century modern.</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=500&q=80"
                  alt="Chair"
                  className="w-full h-44 object-cover rounded-lg mt-4"
                />
              </div>

              {(
                data.furnitureShowcase || b2bProduct7DefaultData.furnitureShowcase
              ).map(renderProductCard)}
            </div>
          </div>
        </div>
      </section>

      {/* 6D. "SỨC KHỎE & LÀM ĐẸP" (4 PRODUCT CARDS + RIGHT TALL BANNER) */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 mb-5 border-b border-slate-100">
              <h2 className="text-base font-extrabold text-slate-900">
                Sức khỏe & Quà tặng đối tác VIP
              </h2>
              <div className="flex items-center gap-5 text-xs font-semibold">
                <span className="text-[#ef3f23] border-b-2 border-[#ef3f23] pb-1">
                  Health & Beauty
                </span>
                <span className="text-slate-500">Quà tặng VIP</span>
                <span className="text-slate-500">Tất cả</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {(
                data.healthGiftShowcase || b2bProduct7DefaultData.healthGiftShowcase
              ).map(renderProductCard)}

              {/* Right Tall Perfume Gift Banner */}
              <div
                onClick={() => openSupplyQuote("Bộ quà tặng đối tác VIP Acqua Di Gio")}
                className="bg-[#f5ebd9] rounded-lg p-5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Acqua Di Gio <br /> Absolu Gift Set
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Quà tặng tri ân đối tác sang trọng.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80"
                  alt="Gift Set"
                  className="w-full h-44 object-cover rounded-lg mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "SẢN PHẨM ĐỀ CỬ" (5 TABS + 5-COLUMN PRODUCT ROW) */}
      <section className="py-4 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 mb-5 border-b border-slate-100">
              <h2 className="text-base font-extrabold text-slate-900">
                Sản phẩm đề cử
              </h2>
              <div className="flex flex-wrap items-center gap-5 text-xs font-semibold">
                {[
                  "Newest Products",
                  "On Sale Products",
                  "Best Selling",
                  "Top Rated",
                  "Featured Product"
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setRecommendedTab(tab)}
                    className={`pb-1 cursor-pointer ${
                      recommendedTab === tab
                        ? "text-[#ef3f23] border-b-2 border-[#ef3f23]"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {(
                data.recommendedProducts ||
                b2bProduct7DefaultData.recommendedProducts
              ).map(renderProductCard)}
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER STRIP + 4-COLUMN FOOTER + 8-CATEGORY SEO DIRECTORY */}
      <footer className="bg-white border-t-2 border-[#ef3f23] pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-10 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-[#ef3f23] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">
                  Theo dõi tin tức & Bảng giá sỉ
                </h3>
                <p className="text-xs text-slate-500">
                  Đăng ký ngay để cập nhật chiết khấu văn phòng phẩm mới nhất
                </p>
              </div>
            </div>

            {newsletterSent ? (
              <span className="text-xs font-bold text-emerald-600">
                Đã đăng ký nhận báo giá định kỳ thành công!
              </span>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSent(true);
                }}
                className="flex items-center w-full md:w-auto gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập Email phòng Hành chính - Nhân sự..."
                  className="border border-slate-200 rounded px-4 py-2.5 text-xs w-full md:w-72 focus:outline-none focus:border-[#ef3f23]"
                />
                <button
                  type="submit"
                  className="bg-[#ef3f23] hover:bg-[#d63218] text-white font-bold text-xs px-6 py-2.5 rounded shrink-0 cursor-pointer"
                >
                  Đăng Ký
                </button>
              </form>
            )}
          </div>

          {/* 4 Columns */}
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-slate-100 text-xs">
            <div className="space-y-2.5">
              <h4 className="font-extrabold text-slate-900 text-sm">Liên hệ</h4>
              <p className="text-slate-600 leading-relaxed">
                {data.business.address}
              </p>
              <p className="text-slate-600">{primaryEmail}</p>
              <a
                href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
                className="text-base font-extrabold text-emerald-600 block pt-1"
              >
                {primaryPhone}
              </a>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-900 text-sm mb-3">
                Liên kết
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>Về {data.business.name}</li>
                <li>Trở thành Nhà cung cấp</li>
                <li>Chương trình Đối tác B2B</li>
                <li>Điều khoản & Điều kiện</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-900 text-sm mb-3">Hỗ trợ</h4>
              <ul className="space-y-2 text-slate-600">
                <li>Trung tâm trợ giúp</li>
                <li>Hướng dẫn đặt hàng sỉ</li>
                <li>Vận chuyển & Giao nhận</li>
                <li>Chính sách công nợ 30 ngày</li>
                <li>Quy trình đổi trả</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-900 text-sm mb-3">
                Mạng xã hội
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>Facebook Official</li>
                <li>YouTube Channel</li>
                <li>LinkedIn B2B</li>
                <li>Zalo OA Doanh Nghiệp</li>
              </ul>
            </div>
          </div>

          {/* 8-Category SEO Link Directory */}
          <div className="py-8 border-b border-slate-100">
            <h4 className="font-extrabold text-slate-900 text-xs mb-4">
              Danh mục sản phẩm cung ứng
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[11px] text-slate-500">
              <div>
                <strong className="text-slate-800 block mb-1">
                  Mobile & Tablets
                </strong>
                <p className="leading-relaxed">
                  Apple | Samsung | Xiaomi | Máy tính bảng phòng họp | Thiết bị điểm danh
                  vân tay | Điện thoại IP bàn
                </p>
              </div>
              <div>
                <strong className="text-slate-800 block mb-1">
                  Màn hình & Trình chiếu
                </strong>
                <p className="leading-relaxed">
                  Smart TV 4K | Màn hình tương tác | Máy chiếu Laser | Giá treo di động |
                  Cáp HDMI quang học
                </p>
              </div>
              <div>
                <strong className="text-slate-800 block mb-1">
                  Computer & Laptop
                </strong>
                <p className="leading-relaxed">
                  Dell | HP | Lenovo ThinkPad | MacBook Pro | Máy in Laser Canon | Máy hủy
                  tài liệu văn phòng
                </p>
              </div>
              <div>
                <strong className="text-slate-800 block mb-1">
                  Văn phòng phẩm & Pantry
                </strong>
                <p className="leading-relaxed">
                  Giấy in Double A | Bút ký | File hồ sơ | Máy pha cà phê | Bình đun siêu
                  tốc | Ghế công thái học
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 text-[11px] text-slate-500 space-y-1">
            <p>
              <strong className="text-slate-800">{data.business.name}</strong> tự hào mang
              đến cho doanh nghiệp trải nghiệm mua sắm vật tư & thiết bị công nghệ trọn gói
              tiện lợi nhất.
            </p>
            <p>© {new Date().getFullYear()} {data.business.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* OFFICE SUPPLY B2B QUOTE MODAL */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {quoteSent ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#ef3f23] mx-auto" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  Đã nhận yêu cầu báo giá văn phòng!
                </h3>
                <p className="text-xs text-slate-600">
                  Chuyên viên B2B của <strong>{data.business.name}</strong> sẽ gửi báo giá
                  chiết khấu kèm hợp đồng mẫu tới quý công ty trong 15 phút.
                </p>
                <button
                  onClick={() => setQuoteModalOpen(false)}
                  className="bg-[#ef3f23] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSent(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-[#ef3f23]">
                    Báo giá Vật tư & Thiết bị Văn phòng B2B
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    {data.business.name}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Tên doanh nghiệp / Đơn vị *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#ef3f23]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại phòng Hành chính / Thu mua *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#ef3f23]"
                />
                <input
                  type="text"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#ef3f23]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#ef3f23] hover:bg-[#d63218] text-white font-extrabold text-xs uppercase py-3 rounded-lg transition-colors cursor-pointer"
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
