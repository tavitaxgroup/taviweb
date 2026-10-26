"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Heart,
  User,
  Truck,
  RotateCcw,
  CreditCard,
  Headphones,
  Home,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct6DefaultData,
  type B2BProduct6Data
} from "@/template-sources/b2b_product_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: B2BProduct6Data = adaptClonedTemplateData(
    b2bProduct6DefaultData,
    incomingData
  );

  const [featuredTab, setFeaturedTab] = useState("Sản phẩm mới");
  const [bestSellerTab, setBestSellerTab] = useState("Điện thoại");
  const [newArrivalTab, setNewArrivalTab] = useState("Laptop");
  const [promoTab, setPromoTab] = useState("Laptop");
  const [cartCount, setCartCount] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedHardware, setSelectedHardware] = useState(
    "Báo giá trang bị Laptop & Thiết bị CNTT Doanh nghiệp"
  );
  const [quoteSent, setQuoteSent] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "b2b@monacomputer.vn";

  const openHardwareQuote = (itemTitle?: string) => {
    if (itemTitle) setSelectedHardware(itemTitle);
    setQuoteSent(false);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#f5b800] selection:text-slate-900">
      {/* 1. TOP PROMO BANNER + MAIN HEADER + CATEGORY NAV STRIP */}
      <div className="bg-[#f8f5f2] border-b border-slate-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#e04124]">20%</span>
            <div className="leading-tight">
              <span className="block text-[10px] text-slate-500">đăng ký</span>
              <span className="font-bold text-slate-800">Tài khoản B2B đầu tiên</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-slate-200">
            <span className="text-slate-500">Nhập mã khuyến mãi:</span>
            <strong className="text-[#e04124] uppercase">sale2025</strong>
          </div>

          <button
            onClick={() => openHardwareQuote("Đăng ký ưu đãi 20% khách hàng doanh nghiệp mới")}
            className="bg-[#e04124] hover:bg-[#c53218] text-white text-[11px] font-bold px-4 py-1.5 rounded transition-colors cursor-pointer"
          >
            Mua ngay
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="text-2xl font-black tracking-tight uppercase">
            <span className="text-slate-900">{data.business.name.slice(0, 4)}</span>
            <span className="text-[#f5b800]">{data.business.name.slice(4) || "COMPUTER"}</span>
          </a>

          {/* Category Select + Search Input + Amber Search Button */}
          <div className="flex-1 max-w-2xl w-full order-3 lg:order-none">
            <div className="flex items-center border border-slate-300 rounded overflow-hidden bg-white">
              <div className="hidden sm:flex items-center gap-1 px-3 py-2 bg-slate-50 border-r border-slate-200 text-xs text-slate-600 shrink-0">
                <span>Tất cả</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                placeholder="Nhập sản phẩm tìm kiếm (Laptop, Máy chủ, Camera IP...)"
                className="w-full px-3.5 py-2 text-xs sm:text-sm focus:outline-none"
              />
              <button
                onClick={() => openHardwareQuote()}
                className="bg-[#f5b800] hover:bg-[#e0a800] text-slate-900 font-bold text-xs px-5 py-2.5 shrink-0 transition-colors cursor-pointer"
              >
                Tìm kiếm
              </button>
            </div>
          </div>

          {/* Right Wishlist / Cart / Login */}
          <div className="flex items-center gap-5 text-xs">
            <button
              onClick={() => setCartCount((c) => c + 1)}
              className="relative text-slate-700 hover:text-[#e04124] cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#f5b800] text-slate-900 text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </button>

            <button
              onClick={() => openHardwareQuote("Giỏ hàng thiết bị CNTT")}
              className="relative text-slate-700 hover:text-[#e04124] cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#e04124] text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            <button
              onClick={() => openHardwareQuote("Đăng nhập đại lý B2B")}
              className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Đăng nhập</span>
            </button>
          </div>
        </div>

        {/* Category Navigation Bar */}
        <div className="border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-7">
              <a
                href="#danh-muc-noi-bat"
                className="flex items-center gap-1.5 font-bold text-slate-900"
              >
                <span>Danh mục sản phẩm</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </a>

              <nav className="hidden md:flex items-center gap-6">
                <a href="#trang-chu" className="text-slate-900 font-bold">
                  Trang chủ
                </a>
                <a href="#san-pham-ban-chay" className="hover:text-[#e04124]">
                  Sản phẩm
                </a>
                <a href="#san-pham-moi" className="hover:text-[#e04124]">
                  Laptop B2B
                </a>
                <button
                  onClick={() => openHardwareQuote()}
                  className="hover:text-[#e04124] cursor-pointer"
                >
                  Liên hệ dự án
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-1.5 text-slate-800">
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>Hotline:</span>
              <a
                href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
                className="font-extrabold text-slate-900"
              >
                {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 2. GREY TECH HERO BANNER */}
      <section id="trang-chu" className="bg-[#e5e7eb] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-3">
              <span className="text-xs font-bold text-[#e04124]">
                {data.hero.eyebrow || "Đừng bỏ lỡ"}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 leading-tight">
                {data.hero.title}
              </h1>
              <div className="pt-1">
                <span className="text-xs text-slate-500 block">Discount</span>
                <span className="text-2xl font-extrabold text-emerald-600">
                  30% Off
                </span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => openHardwareQuote(data.hero.title)}
                  className="bg-[#f5b800] hover:bg-[#e0a800] text-slate-900 font-bold text-xs px-7 py-3 rounded shadow-sm transition-colors cursor-pointer"
                >
                  {data.hero.ctaText || "Mua ngay"}
                </button>
              </div>
            </div>

            <div className="md:col-span-6 flex justify-center">
              <img
                src={data.hero.backgroundImage}
                alt={data.business.name}
                className="max-h-72 sm:max-h-80 object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 TRUST ICONS BAR + 3 PROMO SUB-BANNERS */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 Trust Boxed Strip */}
          <div className="border border-slate-200 rounded-lg p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center gap-3.5">
              <Truck className="w-8 h-8 text-[#f5b800] shrink-0" />
              <div>
                <h3 className="text-xs font-bold text-slate-800">
                  Giao hàng miễn phí
                </h3>
                <p className="text-[11px] text-slate-500">
                  Cho đơn hàng trên 5,000,000₫
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <RotateCcw className="w-8 h-8 text-[#f5b800] shrink-0" />
              <div>
                <h3 className="text-xs font-bold text-slate-800">
                  Hoàn trả 90 ngày
                </h3>
                <p className="text-[11px] text-slate-500">
                  Nếu sản phẩm có vấn đề kỹ thuật
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <CreditCard className="w-8 h-8 text-[#f5b800] shrink-0" />
              <div>
                <h3 className="text-xs font-bold text-slate-800">
                  Thanh toán an toàn
                </h3>
                <p className="text-[11px] text-slate-500">
                  100% thanh toán an toàn & VAT
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <Headphones className="w-8 h-8 text-[#f5b800] shrink-0" />
              <div>
                <h3 className="text-xs font-bold text-slate-800">Hỗ trợ 24/7</h3>
                <p className="text-[11px] text-slate-500">
                  Hỗ trợ kỹ thuật chuyên dụng
                </p>
              </div>
            </div>
          </div>

          {/* 3 Promo Sub-Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(data.promoTriplet || b2bProduct6DefaultData.promoTriplet).map((item) => (
              <div
                key={item.id}
                onClick={() => openHardwareQuote(item.title)}
                className="bg-[#f3f4f6] border border-slate-200 rounded-lg p-5 flex items-center justify-between gap-3 relative overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="z-10 space-y-1.5 max-w-[55%]">
                  <h3 className="font-bold text-base text-slate-800 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500">{item.subtitle}</p>
                </div>

                {/* Red Discount Seal */}
                <span className="z-20 w-12 h-12 rounded-full bg-[#e04124] text-white text-[10px] font-black flex items-center justify-center text-center leading-tight shrink-0 shadow">
                  {item.discount}
                </span>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "ƯU ĐÃI GIỚI HẠN" + RED COUNTDOWN TIMER + 5-COLUMN FLASH DEAL ROW */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-lg font-extrabold text-slate-800">
                Ưu đãi giới hạn
              </h2>
              <span className="bg-[#e04124] text-white text-[11px] font-bold px-3.5 py-1 rounded">
                Thời gian còn lại: 13 : 32 : 28
              </span>
            </div>
            <button
              onClick={() => openHardwareQuote("Báo giá lô phụ kiện ưu đãi giới hạn")}
              className="bg-[#f5b800] hover:bg-[#e0a800] text-slate-900 text-xs font-bold px-4 py-1.5 rounded cursor-pointer"
            >
              Xem tất cả
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {(data.flashDeals || b2bProduct6DefaultData.flashDeals).map((deal) => (
              <div
                key={deal.id}
                onClick={() => openHardwareQuote(deal.name)}
                className="group p-3 rounded-lg border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="h-36 flex items-center justify-center overflow-hidden mb-3 bg-slate-50 rounded">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-extrabold text-emerald-600">
                    {deal.price}
                  </span>
                  {deal.oldPrice && (
                    <span className="text-[10px] text-slate-400 line-through">
                      {deal.oldPrice}
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-[11px] font-semibold text-[#0284c7] group-hover:underline line-clamp-2">
                  {deal.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "DANH MỤC NỔI BẬT" SPLIT SECTION (VIRTUAL REALITY BANNER + SECURITY CAMERAS + RIGHT SIDEBAR) */}
      <section id="danh-muc-noi-bat" className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-lg p-5">
            <div className="flex items-center gap-2 pb-4 mb-5 border-b border-slate-200">
              <Home className="w-4 h-4 text-slate-700" />
              <h2 className="text-base font-extrabold text-slate-800">
                Danh mục nổi bật
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left 8 Cols: VR Banner + Tabs + 4 Camera Cards */}
              <div className="lg:col-span-8 space-y-6">
                {/* Purple VR Banner */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-800 text-white p-7 sm:p-10 min-h-[230px] flex flex-col justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1000&q=80"
                    alt="Virtual Reality"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                  <div className="relative z-10 max-w-sm space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-purple-200">
                      CÔNG NGHỆ TƯƠNG LAI
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black tracking-wide uppercase leading-none">
                      VIRTUAL REALITY
                    </h3>
                    <div className="pt-2">
                      <button
                        onClick={() => openHardwareQuote("Thiết bị thực tế ảo & Camera AI")}
                        className="border border-white text-white hover:bg-white hover:text-purple-900 text-xs font-bold px-5 py-2 rounded transition-colors cursor-pointer"
                      >
                        Let&apos;s start!
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3 Filter Tabs */}
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                  {["Sản phẩm mới", "Bán chạy", "Khuyến mãi"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setFeaturedTab(tab)}
                      className={`text-xs font-bold px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                        featuredTab === tab
                          ? "bg-slate-800 text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* 4 CCTV / Smart Camera Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {(
                    data.securityCameras || b2bProduct6DefaultData.securityCameras
                  )
                    .slice(0, 4)
                    .map((cam) => (
                      <div
                        key={cam.id}
                        onClick={() => openHardwareQuote(cam.name)}
                        className="group p-2.5 border border-slate-100 rounded hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="h-28 bg-slate-50 rounded overflow-hidden mb-2">
                          <img
                            src={cam.image}
                            alt={cam.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-[11px] font-semibold text-[#0284c7] line-clamp-2 group-hover:underline">
                          {cam.name}
                        </h4>
                        <p className="mt-1 text-xs font-extrabold text-slate-800">
                          {cam.price}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Right 4 Cols: "Nổi bật" Vertical List */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-extrabold text-slate-700 uppercase mb-4">
                    Nổi bật
                  </h3>
                  <div className="space-y-3.5">
                    {(
                      data.sidebarFeatured || b2bProduct6DefaultData.sidebarFeatured
                    ).map((item) => (
                      <div
                        key={item.id}
                        onClick={() => openHardwareQuote(item.name)}
                        className="flex items-center gap-3 group cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded object-cover bg-slate-100 shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-[11px] font-semibold text-[#0284c7] group-hover:underline line-clamp-2">
                            {item.name}
                          </h4>
                          <span className="text-xs font-extrabold text-slate-800">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <button
                    onClick={() => openHardwareQuote("Báo giá trọn bộ Camera Giám sát")}
                    className="bg-[#f5b800] hover:bg-[#e0a800] text-slate-900 text-xs font-bold px-5 py-2 rounded cursor-pointer"
                  >
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "SẢN PHẨM BÁN CHẠY" (5-COLUMN MOBILE/TECH GRID) */}
      <section id="san-pham-ban-chay" className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200 mb-6">
            <h2 className="text-lg font-extrabold text-slate-800">
              Sản phẩm bán chạy
            </h2>
            <div className="flex items-center gap-2">
              {["Điện thoại", "Laptop", "Tablet"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setBestSellerTab(tab)}
                  className={`text-xs font-bold px-4 py-1.5 rounded-full cursor-pointer ${
                    bestSellerTab === tab
                      ? "bg-slate-800 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {(
              data.bestSellerPhones || b2bProduct6DefaultData.bestSellerPhones
            ).map((phone) => (
              <div
                key={phone.id}
                onClick={() => openHardwareQuote(phone.name)}
                className="group p-3.5 border border-slate-100 rounded-lg hover:shadow-lg transition-all relative cursor-pointer"
              >
                {phone.discount && (
                  <span className="absolute top-2.5 right-2.5 bg-[#e04124] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {phone.discount}
                  </span>
                )}
                <div className="h-40 bg-slate-50 rounded flex items-center justify-center overflow-hidden mb-3">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-[11px] font-semibold text-[#0284c7] group-hover:underline line-clamp-2">
                  {phone.name}
                </h3>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="text-xs font-extrabold text-[#e04124]">
                    {phone.price}
                  </span>
                  {phone.oldPrice && (
                    <span className="text-[10px] text-slate-400 line-through">
                      {phone.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "COMPUTER & TECHNOLOGIES" 3-COLUMN FEATURE BLOCK */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Sidebar Categories */}
            <div className="lg:col-span-3 p-5 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-extrabold text-slate-800 mb-4">
                  Computer & Technologies
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {(
                    data.techCategories || b2bProduct6DefaultData.techCategories
                  ).map((cat, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => openHardwareQuote(`Danh mục: ${cat}`)}
                        className="hover:text-[#0284c7] transition-colors cursor-pointer"
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => openHardwareQuote("Toàn bộ danh mục CNTT")}
                className="mt-6 bg-[#f5b800] hover:bg-[#e0a800] text-slate-900 text-xs font-bold py-2 px-4 rounded self-start cursor-pointer"
              >
                Xem tất cả
              </button>
            </div>

            {/* Middle Promo Banner */}
            <div className="lg:col-span-3 bg-[#e5e7eb] p-6 flex flex-col items-center justify-between text-center relative">
              <div className="w-16 h-16 rounded-full bg-[#e04124] text-white font-black text-sm flex items-center justify-center shadow-md">
                30% OFF
              </div>
              <div className="my-4">
                <span className="text-[11px] text-slate-500 block">
                  Special Edition
                </span>
                <h4 className="text-xl font-black text-slate-900 uppercase mt-1">
                  XBOX ONE CONTROLLER
                </h4>
                <button
                  onClick={() => openHardwareQuote("Tay cầm & Phụ kiện Gaming B2B")}
                  className="mt-3 bg-[#f5b800] text-slate-900 text-xs font-bold px-5 py-2 rounded cursor-pointer"
                >
                  Shop Now
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=500&q=80"
                alt="Controller"
                className="w-40 h-40 object-cover rounded-xl shadow"
              />
            </div>

            {/* Right 3x2 Camera & Tech Hardware Grid */}
            <div className="lg:col-span-6 p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {(
                data.securityCameras || b2bProduct6DefaultData.securityCameras
              ).map((item) => (
                <div
                  key={item.id}
                  onClick={() => openHardwareQuote(item.name)}
                  className="group p-2.5 border border-slate-100 rounded hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="h-28 bg-slate-50 rounded overflow-hidden mb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-[11px] font-semibold text-[#0284c7] line-clamp-2 group-hover:underline">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs font-extrabold text-slate-800">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. "SẢN PHẨM MỚI" (5-COLUMN LAPTOP CATALOG) + "SẢN PHẨM KHUYẾN MÃI" */}
      <section id="san-pham-moi" className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200 mb-6">
            <h2 className="text-lg font-extrabold text-slate-800">Sản phẩm mới</h2>
            <div className="flex items-center gap-2">
              {["Laptop", "Điện thoại", "Tablet"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setNewArrivalTab(tab)}
                  className={`text-xs font-bold px-4 py-1.5 rounded-full cursor-pointer ${
                    newArrivalTab === tab
                      ? "bg-slate-800 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {(data.laptopCatalog || b2bProduct6DefaultData.laptopCatalog).map(
              (laptop) => (
                <div
                  key={laptop.id}
                  onClick={() => openHardwareQuote(laptop.name)}
                  className="group p-3.5 border border-slate-100 rounded-lg hover:shadow-lg transition-all relative cursor-pointer"
                >
                  {laptop.discount && (
                    <span className="absolute top-2.5 right-2.5 bg-[#e04124] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {laptop.discount}
                    </span>
                  )}
                  <div className="h-36 bg-slate-50 rounded overflow-hidden mb-3">
                    <img
                      src={laptop.image}
                      alt={laptop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-[11px] font-semibold text-[#0284c7] group-hover:underline line-clamp-2">
                    {laptop.name}
                  </h3>
                  <div className="mt-1.5 flex items-baseline gap-1.5">
                    <span className="text-xs font-extrabold text-[#e04124]">
                      {laptop.price}
                    </span>
                    {laptop.oldPrice && (
                      <span className="text-[10px] text-slate-400 line-through">
                        {laptop.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* "SẢN PHẨM KHUYẾN MÃI" */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200 mb-6">
            <h2 className="text-lg font-extrabold text-slate-800">
              Sản phẩm khuyến mãi
            </h2>
            <div className="flex items-center gap-2">
              {["Laptop", "Điện thoại", "Tablet"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setPromoTab(tab)}
                  className={`text-xs font-bold px-4 py-1.5 rounded-full cursor-pointer ${
                    promoTab === tab
                      ? "bg-slate-800 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {(data.laptopCatalog || b2bProduct6DefaultData.laptopCatalog)
              .slice(0, 5)
              .map((laptop) => (
                <div
                  key={`promo-${laptop.id}`}
                  onClick={() => openHardwareQuote(laptop.name)}
                  className="group p-3.5 border border-slate-100 rounded-lg hover:shadow-lg transition-all relative cursor-pointer"
                >
                  {laptop.discount && (
                    <span className="absolute top-2.5 right-2.5 bg-[#e04124] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {laptop.discount}
                    </span>
                  )}
                  <div className="h-36 bg-slate-50 rounded overflow-hidden mb-3">
                    <img
                      src={laptop.image}
                      alt={laptop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-[11px] font-semibold text-[#0284c7] group-hover:underline line-clamp-2">
                    {laptop.name}
                  </h3>
                  <div className="mt-1.5 flex items-baseline gap-1.5">
                    <span className="text-xs font-extrabold text-[#e04124]">
                      {laptop.price}
                    </span>
                    {laptop.oldPrice && (
                      <span className="text-[10px] text-slate-400 line-through">
                        {laptop.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER BAR + 4-COLUMN FOOTER + SEO TAG DIRECTORY */}
      <footer className="bg-white border-t border-slate-200 pt-10 pb-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-200">
            <div>
              <h3 className="text-base font-extrabold text-slate-800">Bản tin</h3>
              <p className="text-xs text-slate-500">
                Đăng ký nhận bảng giá sỉ thiết bị CNTT và mã giảm giá dự án
              </p>
            </div>

            {newsletterSent ? (
              <span className="text-xs font-bold text-emerald-600">
                Đã đăng ký nhận bản tin B2B thành công!
              </span>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSent(true);
                }}
                className="flex items-center w-full md:w-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập email phòng IT / Thu mua..."
                  className="border border-slate-300 rounded-l px-4 py-2.5 text-xs w-full md:w-72 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#f5b800] hover:bg-[#e0a800] text-slate-900 font-bold text-xs px-6 py-2.5 rounded-r shrink-0 cursor-pointer"
                >
                  Đăng ký
                </button>
              </form>
            )}
          </div>

          {/* 4 Columns */}
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-slate-200 text-xs">
            <div className="space-y-2.5">
              <h4 className="font-extrabold text-slate-800 text-sm">
                Thông tin liên hệ
              </h4>
              <span className="text-slate-400 block">Gọi hỗ trợ 24/7</span>
              <a
                href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
                className="text-lg font-extrabold text-[#0284c7] block"
              >
                {primaryPhone}
              </a>
              <p className="text-slate-600 leading-relaxed">
                {data.business.address}
              </p>
              <p className="text-[#0284c7]">{primaryEmail}</p>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-800 text-sm mb-3">
                Chính sách
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>Chính sách bảo hành tận nơi</li>
                <li>Câu hỏi thường gặp (FAQs)</li>
                <li>Điều khoản công nợ B2B</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-800 text-sm mb-3">
                Danh mục
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>Trang chủ</li>
                <li>Sản phẩm CNTT</li>
                <li>Tin tức công nghệ</li>
                <li>Liên hệ dự án</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-800 text-sm mb-3">
                Liên kết
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>Chính sách vận chuyển</li>
                <li>Điều khoản & Điều kiện</li>
                <li>Tra cứu đơn hàng B2B</li>
              </ul>
            </div>
          </div>

          {/* SEO Tech Tag Directory */}
          <div className="py-6 space-y-2 text-[11px] text-slate-500 border-b border-slate-200">
            <p>
              <strong className="text-slate-700">Điện thoại:</strong> Apple | BlackBerry |
              Motorola | Samsung | Linh kiện máy tính | Máy tính văn phòng | PlayStation |
              Flash Sale | Điện thoại | Laptop
            </p>
            <p>
              <strong className="text-slate-700">Laptop:</strong> Laptop Asus | Laptop Dell |
              Laptop HP | MacBook Pro | MacBook Air | Tai nghe | Bàn phím cơ | Màn hình đồ họa
            </p>
            <p>
              <strong className="text-slate-700">Phụ kiện:</strong> Bàn phím | Bao da – Ốp lưng |
              Dán màn hình | Loa hội nghị | Camera IP Dahua | Camera Hikvision | Thiết bị mạng
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {data.business.name}. All rights reserved.</p>
            <div className="flex items-center gap-2 font-bold text-slate-700">
              <span>Phương thức thanh toán:</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">VISA</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">MasterCard</span>
              <span className="px-2 py-0.5 bg-slate-100 rounded">VAT Invoice</span>
            </div>
          </div>
        </div>
      </footer>

      {/* B2B IT HARDWARE QUOTE MODAL */}
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
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  Đã gửi yêu cầu báo giá CNTT!
                </h3>
                <p className="text-xs text-slate-600">
                  Chuyên viên dự án của <strong>{data.business.name}</strong> sẽ gửi báo giá
                  chiết khấu kèm hồ sơ năng lực qua email trong 15 phút.
                </p>
                <button
                  onClick={() => setQuoteModalOpen(false)}
                  className="bg-[#f5b800] text-slate-900 text-xs font-bold px-6 py-2.5 rounded cursor-pointer"
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
                  <span className="text-[11px] font-bold uppercase text-[#e04124]">
                    Báo giá Dự án & Thiết bị CNTT
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    {data.business.name}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Tên công ty / Mã số thuế *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#f5b800]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại người liên hệ *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#f5b800]"
                />
                <input
                  type="text"
                  value={selectedHardware}
                  onChange={(e) => setSelectedHardware(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#f5b800]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#f5b800] hover:bg-[#e0a800] text-slate-900 font-extrabold text-xs uppercase py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Gửi yêu cầu báo giá VAT
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
