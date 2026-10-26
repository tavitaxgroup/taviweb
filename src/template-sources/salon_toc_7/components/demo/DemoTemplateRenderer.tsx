"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  Star,
  Truck,
  RefreshCw,
  CreditCard,
  Quote,
  ArrowUp,
  Menu,
  X,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  salonToc7DefaultData,
  type SalonToc7Data,
  type TrendLuxeItem
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<SalonToc7Data>(salonToc7DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTrendTab, setActiveTrendTab] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  /* Product / Styling Card matching ST010 */
  const renderProductCard = (item: TrendLuxeItem) => (
    <div
      key={item.id}
      onClick={() => setCartCount((c) => c + 1)}
      className="group cursor-pointer flex flex-col"
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#f2f2f2] mb-2.5">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top-Left Pill Badges */}
        {item.badges && item.badges.length > 0 && (
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
            {item.badges.map((b, idx) => (
              <span
                key={idx}
                className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full leading-tight ${
                  b.isHot
                    ? "bg-[#e11d48] text-white"
                    : "bg-[#111111] text-white"
                }`}
              >
                {b.text}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Countdown Pill inside First Flash Sale Card */}
        {item.hasCountdown && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#111111] text-white px-3.5 py-1.5 rounded-lg flex items-center gap-2 text-center shadow-lg">
            {[
              { v: "23", u: "NGÀY" },
              { v: "13", u: "GIỜ" },
              { v: "02", u: "PHÚT" },
              { v: "27", u: "GIÂY" }
            ].map((t, idx) => (
              <React.Fragment key={t.u}>
                {idx > 0 && <span className="text-[10px] font-bold">:</span>}
                <div className="leading-none">
                  <span className="block text-[10px] font-extrabold">{t.v}</span>
                  <span className="block text-[6px] text-slate-400 mt-0.5">{t.u}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Star Rating Row */}
      <div className="flex items-center gap-0.5 text-slate-900 mb-1">
        {[...Array(item.rating || 5)].map((_, idx) => (
          <Star key={idx} className="w-2.5 h-2.5 fill-current" />
        ))}
        <span className="text-[9px] text-slate-400 ml-1">({item.reviews})</span>
      </div>

      {/* Title */}
      <h3 className="text-[11px] font-medium text-slate-700 group-hover:text-black transition-colors line-clamp-1">
        {item.name}
      </h3>

      {/* Price Row */}
      <div className="flex items-baseline gap-1.5 mt-0.5 text-[11px]">
        <span
          className={`font-extrabold ${
            item.oldPrice ? "text-[#e11d48]" : "text-slate-900"
          }`}
        >
          {item.price}
        </span>
        {item.oldPrice && (
          <span className="text-slate-900 line-through font-bold text-[10px]">
            {item.oldPrice}
          </span>
        )}
      </div>

      {/* Optional Size Boxes */}
      {item.sizes && (
        <div className="flex items-center gap-1 mt-1.5">
          {item.sizes.map((sz) => (
            <span
              key={sz}
              className="w-5 h-5 border border-slate-200 rounded-xs text-[9px] font-semibold text-slate-600 flex items-center justify-center"
            >
              {sz}
            </span>
          ))}
        </div>
      )}

      {/* Optional Color Swatches */}
      {item.swatches && (
        <div className="flex items-center gap-1.5 mt-1.5">
          {item.swatches.map((hex, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full border border-black/15"
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white">
      {/* Minimalist White Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Left Script Logo */}
          <a href="#" className="leading-none">
            <span className="block text-[8px] font-extrabold uppercase tracking-widest text-slate-500">
              THE
            </span>
            <span className="text-xl font-serif italic font-black tracking-tight text-slate-900">
              {data.business.name.split(" ")[0]?.toLowerCase() || "mona"}
            </span>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-700">
            <a href="#" className="text-black border-b-2 border-black pb-0.5 font-bold">
              Trang Chủ
            </a>
            <a href="#mona-luxe" className="hover:text-black">
              Giới Thiệu
            </a>
            <a href="#hot-trend" className="inline-flex items-center gap-1 hover:text-black">
              <span>Sản Phẩm</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#tin-tuc" className="hover:text-black">
              Tin Tức
            </a>
            <a href="#footer" className="hover:text-black">
              Liên Hệ
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4 text-slate-800">
            <button type="button" aria-label="Tìm kiếm">
              <Search className="w-4 h-4" />
            </button>
            <button type="button" aria-label="Tài khoản">
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setWishCount((w) => w + 1)}
              className="relative cursor-pointer"
              aria-label="Yêu thích"
            >
              <Heart className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center">
                {wishCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="relative cursor-pointer"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner — Editorial Sunlit Shadow Portrait */}
      <section className="relative w-full h-[420px] sm:h-[520px] overflow-hidden bg-[#3b2f26] flex items-center justify-center text-center">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal text-white tracking-tight drop-shadow-sm">
            {data.business.name}
          </h1>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white/95 -mt-1">
            {data.hero.subtitle}
          </p>
        </div>

        {/* Bottom Slider Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full border border-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </section>

      {/* Section 1: 3-Panel Asymmetric Bento Categories */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Left Half: Tall Card */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden bg-[#f3f3f3] min-h-[340px] sm:min-h-[420px] group">
            <img
              src={data.bentoCategories.leftCard.image}
              alt={data.bentoCategories.leftCard.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <span className="bg-black text-white text-[11px] font-bold px-6 py-2 rounded-full shadow-md inline-block">
                {data.bentoCategories.leftCard.label}
              </span>
            </div>
          </div>

          {/* Right Half: Top Wide + Bottom 2 Squares */}
          <div className="md:col-span-6 flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#f5f5f5] h-48 sm:h-52 group">
              <img
                src={data.bentoCategories.topRightCard.image}
                alt={data.bentoCategories.topRightCard.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="bg-black text-white text-[11px] font-bold px-6 py-1.5 rounded-full shadow-md inline-block">
                  {data.bentoCategories.topRightCard.label}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 flex-1 min-h-[180px]">
              <div className="relative rounded-2xl overflow-hidden bg-[#f3f3f3] group">
                <img
                  src={data.bentoCategories.bottomLeftCard.image}
                  alt={data.bentoCategories.bottomLeftCard.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    {data.bentoCategories.bottomLeftCard.label}
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-[#f3f3f3] group">
                <img
                  src={data.bentoCategories.bottomRightCard.image}
                  alt={data.bentoCategories.bottomRightCard.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    {data.bentoCategories.bottomRightCard.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Flash Sale! */}
      <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">Flash Sale!</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.flashSaleItems || []).map((item) => renderProductCard(item))}
        </div>
      </section>

      {/* Section 3: Thời Trang & Kiểu Tóc Hot Trend */}
      <section id="hot-trend" className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
          Thời Trang &amp; Kiểu Tóc Hot Trend
        </h2>

        {/* Rounded Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {(data.hotTrendTabs || []).map((tab, idx) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTrendTab(idx)}
              className={`px-4 py-1 rounded-full text-[11px] font-semibold border transition-colors cursor-pointer ${
                activeTrendTab === idx
                  ? "bg-black text-white border-black"
                  : "bg-white text-slate-600 border-slate-300 hover:border-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.hotTrendItems || []).map((item) => renderProductCard(item))}
        </div>
      </section>

      {/* Section 4: Marquee Ticker + 3 Service Highlights */}
      <section className="py-10 border-y border-slate-100 my-4 overflow-hidden">
        <div className="flex items-center justify-around gap-8 text-base sm:text-lg font-extrabold text-slate-900 whitespace-nowrap pb-8 border-b border-slate-100">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span>{data.business.name}</span>
              <span>*</span>
              <span>Trend Luxe</span>
              <span>*</span>
            </React.Fragment>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex flex-col items-center px-4">
            <Truck className="w-6 h-6 text-slate-700 mb-2 stroke-[1.5]" />
            <p className="text-[11px] text-slate-600">
              Miễn phí vận chuyển
              <br />
              từ 2 đơn hàng trở lên
            </p>
          </div>
          <div className="flex flex-col items-center px-4 pt-4 sm:pt-0">
            <RefreshCw className="w-6 h-6 text-slate-700 mb-2 stroke-[1.5]" />
            <p className="text-[11px] text-slate-600">
              Thời gian đổi trả &amp; bảo hành
              <br />
              lên tới 30 ngày
            </p>
          </div>
          <div className="flex flex-col items-center px-4 pt-4 sm:pt-0">
            <CreditCard className="w-6 h-6 text-slate-700 mb-2 stroke-[1.5]" />
            <p className="text-[11px] text-slate-600">
              Hỗ trợ nhiều phương thức
              <br />
              thanh toán khác nhau
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: MONA LUXE — SÀNH ĐIỆU MỌI LÚC MỌI NƠI (Rounded Gray Banner) */}
      <section id="mona-luxe" className="py-8 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#f3f3f3] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left 2x2 Aesthetic Photo Collage */}
          <div className="md:col-span-5 grid grid-cols-2">
            {[
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden">
                <img src={img} alt="Mona Luxe" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Right Editorial Text */}
          <div className="md:col-span-7 p-8 sm:p-12">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              MONA LUXE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-wide text-slate-900 leading-tight mt-2 mb-5">
              SÀNH ĐIỆU
              <br />
              MỌI LÚC MỌI NƠI
            </h2>
            <a
              href="#hot-trend"
              className="inline-block border border-slate-800 hover:bg-black hover:text-white text-xs font-semibold px-6 py-2 rounded-full transition-colors"
            >
              Mua Ngay
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Thời trang & Tạo kiểu nam */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 shrink-0">
              Thời trang nam
            </h2>
            <p className="text-xs text-slate-500 max-w-md">
              Biến mọi khoảnh khắc trở nên đặc biệt với những thiết kế mới mẻ, phù hợp từ công sở
              đến những buổi gặp gỡ.
            </p>
          </div>
          <a
            href="#hot-trend"
            className="border border-slate-300 hover:border-black text-[10px] font-bold uppercase px-4 py-1.5 rounded-full shrink-0 self-start sm:self-auto"
          >
            XEM TẤT CẢ
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.menItems || []).map((item) => renderProductCard(item))}
        </div>
      </section>

      {/* Section 7: Thời Trang Nữ */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 shrink-0">
              Thời Trang Nữ
            </h2>
            <p className="text-xs text-slate-500 max-w-md">
              Khám phá phong cách mới với những kiểu tóc &amp; trang phục đa năng, dễ dàng kết hợp
              cho mọi dịp trong cuộc sống.
            </p>
          </div>
          <a
            href="#hot-trend"
            className="border border-slate-300 hover:border-black text-[10px] font-bold uppercase px-4 py-1.5 rounded-full shrink-0 self-start sm:self-auto"
          >
            XEM TẤT CẢ
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.womenItems || []).map((item) => renderProductCard(item))}
        </div>
      </section>

      {/* Section 8: Khách hàng đánh giá (3 Gray Rounded Cards) */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-slate-900 mb-8">
          Khách hàng đánh giá
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(data.testimonials || []).map((t) => (
            <div key={t.id} className="bg-[#f7f7f7] rounded-xl p-6 space-y-2.5">
              <Quote className="w-4 h-4 text-slate-400" />
              <div className="flex items-center gap-0.5 text-slate-900">
                {[...Array(t.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{t.content}</p>
              <p className="text-xs font-extrabold text-slate-900 pt-1">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: Tin Tức Thời Trang */}
      <section id="tin-tuc" className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
          Tin Tức Thời Trang
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(data.news || []).map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#e11d48] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">{post.excerpt}</p>
              <span className="inline-block mt-3 border border-slate-300 text-[11px] font-bold px-4 py-1.5 rounded-full group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                Xem Thêm
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Section 10: @Instagram (5-Photo Row) */}
      <section className="pt-10 pb-0">
        <h2 className="text-center text-lg sm:text-xl font-extrabold text-slate-900 mb-6">
          @Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1">
          {(data.instagramPhotos || []).map((img, idx) => (
            <div key={idx} className="aspect-square overflow-hidden bg-slate-100">
              <img
                src={img}
                alt={`Instagram ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer — Soft Gray #f6f6f6 */}
      <footer id="footer" className="bg-[#f6f6f6] text-slate-600 pt-14 pb-6 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200/80 text-xs">
          {/* Col 1: BẢN TIN MỚI NHẤT */}
          <div className="lg:col-span-5 space-y-3 pr-4">
            <h4 className="text-[11px] font-extrabold uppercase text-slate-900">
              BẢN TIN MỚI NHẤT
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Đăng ký để nhận biết các chương trình khuyến mãi thường xuyên và ưu đãi độc quyền của
              chúng tôi
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                setNewsletterEmail("");
              }}
              className="flex items-center border-b border-slate-300 pb-1.5"
            >
              <input
                type="email"
                required
                placeholder="Nhập Email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-transparent text-xs focus:outline-none"
              />
              <button type="submit" className="text-[10px] font-extrabold uppercase text-slate-900">
                GỬI
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Đã đăng ký nhận bản tin!</span>
              </p>
            )}
          </div>

          {/* Col 2: DANH MỤC */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-extrabold uppercase text-slate-900 mb-3">DANH MỤC</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>Về chúng tôi</li>
              <li>Liên hệ</li>
              <li>Câu hỏi thường gặp</li>
              <li>Cửa hàng</li>
              <li>Tin tức</li>
            </ul>
          </div>

          {/* Col 3: LIÊN KẾT */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-extrabold uppercase text-slate-900 mb-3">LIÊN KẾT</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>Câu chuyện thương hiệu</li>
              <li>Chương trình thành viên</li>
              <li>Phát triển bền vững</li>
              <li>Tuyển dụng Stylist</li>
              <li>Cẩm nang làm đẹp</li>
            </ul>
          </div>

          {/* Col 4: HỖ TRỢ */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-extrabold uppercase text-slate-900 mb-3">HỖ TRỢ</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>Hỏi đáp</li>
              <li>Giao nhận</li>
              <li>Đổi trả</li>
              <li>Hướng dẫn chọn gói</li>
              <li>Chăm sóc tóc</li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-5 flex items-center justify-between text-[11px] text-slate-500">
          <span>
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-slate-900">{data.business.name}</strong>
          </span>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center"
            aria-label="Lên đầu trang"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
