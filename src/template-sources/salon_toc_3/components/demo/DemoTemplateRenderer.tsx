"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBasket,
  ChevronDown,
  Truck,
  CreditCard,
  UserCheck,
  Sun,
  Globe,
  Share2,
  X,
  Menu,
  CheckCircle2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  salonToc3DefaultData,
  SalonToc3Data,
  SalonToc3Product,
} from "@/template-sources/salon_toc_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function MonasaStyleLogo({ brandName }: { brandName: string }) {
  return (
    <div className="inline-flex items-center gap-2 select-none">
      {/* Olive-Gold Floral Swirl Emblem */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        className="w-9 h-9 text-[#9b953b]"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M22 6C15 11 13 20 19 25C25 30 23 36 16 39" />
        <path d="M22 6C29 11 31 20 25 25C19 30 21 36 28 39" />
        <circle cx="22" cy="14" r="3" fill="currentColor" />
      </svg>
      <span className="font-serif italic font-bold text-2xl sm:text-[26px] text-[#9b953b] tracking-wide">
        {brandName.split(" ")[0] || "Harosa"}
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: SalonToc3Data = adaptClonedTemplateData(
    salonToc3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "HÀNG MỚI" | "BÁN CHẠY" | "GIẢM GIÁ"
  >("HÀNG MỚI");
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [selectedModalItem, setSelectedModalItem] = useState<{
    title?: string;
    name?: string;
    price: string;
    image: string;
    description: string;
    [key: string]: any;
  } | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    serviceNote: "",
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "contact@harosasalon.vn";

  // Sort products so matching tab comes first while keeping all 4 visible
  const sortedProducts = [...data.products].sort((a, b) => {
    const aMatch = a.tab === activeTab ? -1 : 1;
    const bMatch = b.tab === activeTab ? -1 : 1;
    return aMatch - bMatch;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name.trim() || !bookingForm.phone.trim()) return;
    setCartTotal((prev) => prev + 320000);
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-700 font-sans antialiased selection:bg-[#9b953b] selection:text-white">
      {/* 1. TOP UTILITY STRIP + WHITE NAVIGATION BAR */}
      <div className="bg-[#f8f8f8] border-b border-gray-100 text-[11px] text-zinc-500">
        <div className="max-w-5xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#9b953b]" />
              <span>
                HOTLINE:{" "}
                <strong className="text-[#9b953b]">{primaryPhone}</strong>
              </span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-zinc-600" />
              <span>
                Email:{" "}
                <strong className="text-[#9b953b]">{primaryEmail}</strong>
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setBookingSubmitted(false);
                setSelectedModalItem({
                  title: "Đặt Lịch Tạo Mẫu Tóc & Phục Hồi",
                  price: "Ưu đãi 40%",
                  image: data.hero.backgroundImage,
                  description:
                    "Đặt lịch trước cùng Giám đốc Kỹ thuật tại Harosa Salon để nhận ưu đãi lên đến 40%.",
                });
              }}
              className="hover:text-[#9b953b] cursor-pointer"
            >
              Đăng nhập / Đăng ký
            </button>
            <div className="flex items-center gap-2 text-zinc-400">
              <a href="#lien-he" className="hover:text-[#9b953b]">
                <Globe className="w-3 h-3" />
              </a>
              <a href="#lien-he" className="hover:text-[#9b953b]">
                <Share2 className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main White Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
          <a href="#trang-chu" className="focus:outline-none">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <MonasaStyleLogo brandName={data.business.name} />
            )}
          </a>

          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-zinc-700">
            <a href="#trang-chu" className="text-[#9b953b]">
              TRANG CHỦ
            </a>
            <a
              href="#danh-muc-hot"
              className="hover:text-[#9b953b] inline-flex items-center gap-0.5"
            >
              <span>TẠO MẪU TÓC</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#9b953b] inline-flex items-center gap-0.5"
            >
              <span>CHĂM SÓC TÓC</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="#uu-dai"
              className="hover:text-[#9b953b] inline-flex items-center gap-0.5"
            >
              <span>HAIR &amp; BODY</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="#uu-dai"
              className="hover:text-[#9b953b] inline-flex items-center gap-0.5"
            >
              <span>DỊCH VỤ KHÁC</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </a>
            <a href="#tin-tuc" className="hover:text-[#9b953b]">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#9b953b]">
              LIÊN HỆ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#san-pham"
              aria-label="Tìm kiếm"
              className="text-zinc-600 hover:text-[#9b953b]"
            >
              <Search className="w-4 h-4" />
            </a>
            <span className="text-gray-200">|</span>
            <button
              type="button"
              onClick={() => {
                setBookingSubmitted(false);
                setSelectedModalItem(data.products[0]);
              }}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-zinc-700 hover:text-[#9b953b] cursor-pointer"
            >
              <span>
                GIỎ HÀNG / {cartTotal.toLocaleString("vi-VN")} ₫
              </span>
              <ShoppingBasket className="w-4 h-4 text-zinc-800" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 text-zinc-700"
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
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#9b953b]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#danh-muc-hot"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              DANH MỤC HOT TRONG NGÀY
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              SẢN PHẨM CHĂM SÓC TÓC
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              TIN TỨC LÀM ĐẸP
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              LIÊN HỆ SALON
            </a>
          </div>
        )}
      </header>

      {/* 2. TOWEL-WRAPPED SALON & SPA HERO */}
      <section
        id="trang-chu"
        className="relative bg-[#f4eee8] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Left Salon Model Photo */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-72 sm:w-88 md:w-96 aspect-[4/4] rounded-full overflow-hidden border-8 border-white/80 shadow-xl">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Olive-Gold Typography */}
          <div className="md:col-span-6 space-y-3 text-left">
            <p className="font-serif italic text-xl sm:text-2xl text-zinc-500">
              {data.hero.eyebrow || "Ưu đãi mùa lễ hội đã bắt đầu..."}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#9b953b] leading-[1.15] whitespace-pre-line">
              {data.hero.title}
            </h1>
            <p className="text-xs text-zinc-500 max-w-md">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#san-pham"}
                className="inline-block border border-zinc-800 hover:bg-[#9b953b] hover:border-[#9b953b] hover:text-white text-zinc-900 text-[11px] font-bold uppercase tracking-wider px-7 py-2 rounded-full transition-colors"
              >
                {data.hero.ctaText || "MUA NGAY"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 CIRCULAR OLIVE-GOLD ICON PERKS */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.perks.map((perk) => (
              <div key={perk.id} className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full border border-[#9b953b]/50 p-1 shrink-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-[#9b953b] flex items-center justify-center text-[#9b953b]">
                    {perk.icon === "truck" && <Truck className="w-4 h-4" />}
                    {perk.icon === "card" && <CreditCard className="w-4 h-4" />}
                    {perk.icon === "user" && <UserCheck className="w-4 h-4" />}
                    {perk.icon === "sun" && <Sun className="w-4 h-4" />}
                  </div>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-zinc-700">
                    {perk.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400">{perk.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "DANH MỤC HOT TRONG NGÀY" (3 CIRCULAR GOLD-RINGED CATEGORIES) */}
      <section id="danh-muc-hot" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-[28px] font-bold text-[#9b953b] mb-2">
            {data.business.aboutTitle || "Danh Mục HOT Trong Ngày"}
          </h2>
          <p className="text-xs text-zinc-500 max-w-xl mx-auto leading-relaxed mb-10">
            {data.business.aboutText[0]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.hotCategories.map((cat) => (
              <div key={cat.id} className="flex flex-col items-center">
                <div className="w-56 h-56 rounded-full border-[3px] border-[#9b953b] p-1.5 mb-5 overflow-hidden group">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#9b953b] mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed max-w-xs mb-4">
                  {cat.description}
                </p>
                <a
                  href="#san-pham"
                  className="inline-block border border-[#9b953b] text-[#9b953b] hover:bg-[#9b953b] hover:text-white text-[10px] font-bold uppercase tracking-wider px-5 py-1.5 rounded-full transition-colors"
                >
                  MUA NGAY
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH SPLIT DUAL PROMO STRIP */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Half: Warm Peach Hair & Body Care */}
        <div className="bg-[#f4dfce] px-6 sm:px-12 py-8 flex items-center justify-between gap-6">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80"
            alt="Chăm sóc tóc & da đầu"
            className="w-36 sm:w-44 h-28 object-cover rounded-sm shadow-sm shrink-0"
          />
          <div className="text-left">
            <p className="text-xs font-bold text-zinc-700">
              Ưu đãi lên tới 50%
            </p>
            <h3 className="font-serif text-xl sm:text-2xl text-[#9b953b] uppercase leading-tight mt-0.5">
              SKIN &amp; HAIR CARE
            </h3>
          </div>
        </div>

        {/* Right Half: Cool Gray John Master Organics */}
        <div className="bg-[#a3a6a8] text-white px-6 sm:px-12 py-8 flex items-center justify-between gap-6">
          <img
            src="https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=500&q=80"
            alt="John Master Organics"
            className="w-36 sm:w-44 h-28 object-cover rounded-sm shadow-sm shrink-0"
          />
          <div className="text-left">
            <p className="font-serif italic text-base text-[#e9e396]">
              Tinh chất hữu cơ
            </p>
            <h3 className="font-serif text-xl sm:text-2xl text-white leading-tight">
              John Master Organics
            </h3>
          </div>
        </div>
      </section>

      {/* 6. TABBED PRODUCT SHOWCASE (• HÀNG MỚI | • BÁN CHẠY | • GIẢM GIÁ) */}
      <section id="san-pham" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex items-center justify-center gap-6 mb-8 text-xs font-bold uppercase tracking-wider">
            {(["HÀNG MỚI", "BÁN CHẠY", "GIẢM GIÁ"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
                  activeTab === tab
                    ? "text-[#9b953b]"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>{tab}</span>
              </button>
            ))}
          </div>

          {/* 4-Column Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200/80 p-4 text-center flex flex-col justify-between hover:shadow-md transition-shadow bg-white"
              >
                <div>
                  <div className="relative aspect-square mb-3 flex items-center justify-center overflow-hidden bg-zinc-50">
                    {product.discountBadge && (
                      <span className="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-zinc-800 text-white text-[10px] font-bold flex items-center justify-center">
                        {product.discountBadge}
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                    {product.category}
                  </p>
                  <h3 className="text-xs font-semibold text-zinc-700 mt-1 mb-2 line-clamp-2 min-h-[32px]">
                    {product.name}
                  </h3>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-1.5 text-xs mb-3">
                    {product.oldPrice && (
                      <span className="line-through text-zinc-400 text-[11px]">
                        {product.oldPrice}
                      </span>
                    )}
                    <span className="font-bold text-zinc-900">
                      {product.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setBookingSubmitted(false);
                      setSelectedModalItem({
                        title: product.name,
                        price: product.price,
                        image: product.image,
                        description: product.description,
                      });
                    }}
                    className="bg-[#9b953b] hover:bg-[#827d30] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 transition-colors cursor-pointer"
                  >
                    THÊM VÀO GIỎ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ZEN SPA STONES BANNER + 3 OVERLAPPING FEATURED SALE CARDS */}
      <section id="uu-dai" className="pb-16 bg-white">
        {/* Zen Stones & Bamboo Banner */}
        <div className="relative py-16 bg-zinc-100 overflow-hidden text-center">
          <img
            src={data.quoteSection.backgroundImage}
            alt="Spa quote"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-3">
            <img
              src={data.quoteSection.avatar}
              alt={data.quoteSection.author}
              className="w-12 h-12 rounded-full object-cover mx-auto border-2 border-white shadow"
            />
            <p className="font-serif italic text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {data.quoteSection.quote}
            </p>
            <p className="text-xs font-bold text-zinc-800">
              {data.quoteSection.author}
            </p>
          </div>
        </div>

        {/* 3 Overlapping Featured Sale Cards */}
        <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.featuredSales.map((sale) => (
              <div
                key={sale.id}
                className="bg-white p-5 text-center shadow-[0_6px_25px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 flex items-center justify-center mb-4 overflow-hidden bg-zinc-50">
                    <img
                      src={sale.image}
                      alt={sale.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {sale.saleTag}
                  </p>
                  <h3 className="text-xs font-extrabold uppercase text-zinc-800 mt-1 mb-2 leading-snug">
                    {sale.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed mb-4">
                    {sale.description}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setBookingSubmitted(false);
                      setSelectedModalItem({
                        title: sale.title,
                        price: sale.price,
                        image: sale.image,
                        description: sale.description,
                      });
                    }}
                    className="inline-block border border-[#9b953b] text-[#9b953b] hover:bg-[#9b953b] hover:text-white text-[10px] font-bold uppercase tracking-wider px-6 py-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    MUA NGAY
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DARK WOOD PARALLAX "BÀI VIẾT MỚI NHẤT" WITH OLIVE-GOLD CARD FOOTERS */}
      <section
        id="tin-tuc"
        className="relative py-16 bg-zinc-900 text-white overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=80"
          alt="Bài viết mới nhất"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="mb-8 max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
              BÀI VIẾT MỚI NHẤT
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
              Đừng Bỏ Lỡ Những Thứ Bạn Đã Xem
            </h2>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Cập nhật xu hướng màu nhuộm thời thượng và bí quyết chăm sóc mái
              tóc chuẩn salon ngay tại nhà.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="overflow-hidden shadow-lg flex flex-col"
              >
                <div className="aspect-[16/10] bg-white overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Olive-Gold Card Body matching ST006 */}
                <div className="bg-[#9b953b] text-white p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-xs font-bold leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[10px] text-white/80 mt-0.5">
                      {post.date}
                    </p>
                  </div>
                  <p className="text-[11px] text-white/90 leading-relaxed line-clamp-2 pt-1 border-t border-white/20">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER ("ĐĂNG KÝ NHẬN TIN") + 6 LUXURY BRAND LOGOS + 4-COLUMN FOOTER */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="font-serif text-lg sm:text-xl font-bold uppercase text-[#9b953b]">
            ĐĂNG KÝ NHẬN TIN
          </h3>
          <p className="text-xs text-zinc-500 mt-1 mb-5">
            (Nhận ngay phiếu giảm giá 30% dịch vụ Uốn / Nhuộm tại Salon)
          </p>

          {newsletterSent ? (
            <div className="text-xs font-bold text-[#9b953b] bg-zinc-50 py-3 px-4 rounded-full border border-[#9b953b]/40">
              Đã gửi mã ưu đãi 30% vào hộp thư của bạn!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newsletterEmail.trim()) return;
                setNewsletterSent(true);
              }}
              className="flex items-stretch rounded-full overflow-hidden border border-gray-200 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Email ..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2 text-xs text-zinc-700 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#9b953b] hover:bg-[#827d30] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2 transition-colors cursor-pointer"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}
        </div>

        {/* 6 Luxury Brand Logos */}
        <div className="max-w-5xl mx-auto px-4 pt-12">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center text-center">
            {data.brandLogos.map((logo, idx) => (
              <div
                key={idx}
                className="text-xs sm:text-sm font-serif font-bold tracking-[0.2em] text-zinc-400 hover:text-zinc-700 transition-colors select-none"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Column White Footer */}
      <footer id="lien-he" className="bg-white pt-12 text-xs text-zinc-500">
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: THÔNG TIN LIÊN HỆ */}
            <div className="space-y-2.5">
              <h4 className="font-serif font-bold uppercase text-zinc-800 text-xs mb-3">
                THÔNG TIN LIÊN HỆ
              </h4>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>

            {/* Col 2: SẢN PHẨM */}
            <div>
              <h4 className="font-serif font-bold uppercase text-zinc-800 text-xs mb-3">
                SẢN PHẨM &amp; DỊCH VỤ
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#san-pham" className="hover:text-[#9b953b]">
                    • Tạo mẫu tóc nữ
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#9b953b]">
                    • Phục hồi Keratin &amp; Olaplex
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#9b953b]">
                    • Tinh dầu &amp; Huyết thanh tóc
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#9b953b]">
                    • Chăm sóc da đầu hữu cơ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: ĐIỀU HƯỚNG */}
            <div>
              <h4 className="font-serif font-bold uppercase text-zinc-800 text-xs mb-3">
                ĐIỀU HƯỚNG
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#trang-chu"
                    className="font-bold text-zinc-800 hover:text-[#9b953b]"
                  >
                    • Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#danh-muc-hot" className="hover:text-[#9b953b]">
                    • Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#9b953b]">
                    • Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#9b953b]">
                    • Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#9b953b]">
                    • Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: INSTAGRAM */}
            <div>
              <h4 className="font-serif font-bold uppercase text-zinc-800 text-xs mb-3">
                INSTAGRAM
              </h4>
              <p className="text-zinc-500 leading-relaxed mb-2">
                Theo dõi bộ sưu tập mẫu tóc mới nhất mỗi ngày của{" "}
                {data.business.name}.
              </p>
              <a
                href="#danh-muc-hot"
                className="text-[11px] font-bold text-[#9b953b] hover:underline"
              >
                Theo dõi Instagram của chúng tôi &gt;&gt;
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-4 text-[11px] text-zinc-400">
          <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              © Bản quyền thuộc về{" "}
              <strong className="text-zinc-700">{data.business.name}</strong>.
              Thiết kế website bởi{" "}
              <strong className="text-zinc-700">TaviWeb</strong>
            </p>
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase text-zinc-500">
              <span className="px-2 py-0.5 border border-gray-200">VISA</span>
              <span className="px-2 py-0.5 border border-gray-200">
                MasterCard
              </span>
              <span className="px-2 py-0.5 border border-gray-200">PayPal</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL FOR BOOKING / ORDER */}
      {selectedModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedModalItem(null)}
        >
          <div
            className="bg-white max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#9b953b] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {data.business.name} — Đặt Dịch Vụ &amp; Sản Phẩm
              </h3>
              <button
                type="button"
                onClick={() => setSelectedModalItem(null)}
                className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              {bookingSubmitted ? (
                <div className="text-center py-4 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#9b953b] mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">
                    Đặt lịch &amp; đơn hàng thành công!
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Cảm ơn <strong>{bookingForm.name}</strong>. Lễ tân của{" "}
                    <strong>{data.business.name}</strong> sẽ liên hệ số{" "}
                    <strong>{bookingForm.phone}</strong> trong ít phút.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedModalItem(null)}
                    className="bg-[#9b953b] text-white text-xs font-bold px-6 py-2 rounded-full"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleBookingSubmit}
                  className="space-y-3 text-xs"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <img
                      src={selectedModalItem.image}
                      alt={selectedModalItem.title}
                      className="w-16 h-16 object-cover border border-gray-100"
                    />
                    <div>
                      <h4 className="font-bold text-zinc-800">
                        {selectedModalItem.title}
                      </h4>
                      <p className="font-bold text-[#9b953b] mt-0.5">
                        {selectedModalItem.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-500 leading-relaxed">
                    {selectedModalItem.description}
                  </p>
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên khách hàng *"
                    value={bookingForm.name}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, name: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#9b953b]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    value={bookingForm.phone}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#9b953b]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#9b953b] hover:bg-[#827d30] text-white font-bold uppercase tracking-wider py-2.5 rounded-full cursor-pointer"
                  >
                    XÁC NHẬN ĐẶT NGAY
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
