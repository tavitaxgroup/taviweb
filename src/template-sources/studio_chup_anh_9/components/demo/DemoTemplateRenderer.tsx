"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  studioChupAnh9DefaultData,
  type StudioChupAnh9Data,
  type MinimalJewelryProduct
} from "../../data/mockData";
import {
  Search,
  Heart,
  ShoppingBag,
  Gem,
  Sparkles,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: StudioChupAnh9Data = adaptClonedTemplateData(
    studioChupAnh9DefaultData,
    incomingData || customData
  );

  const [activeBestSellerTab, setActiveBestSellerTab] =
    useState<string>("Tất cả");
  const [activeNewestTab, setActiveNewestTab] = useState<string>("Tất cả");
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedProd, setSelectedProd] =
    useState<MinimalJewelryProduct | null>(null);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const renderMinimalCard = (prod: MinimalJewelryProduct) => (
    <div
      key={prod.id}
      onClick={() => {
        setCartCount((c) => c + 1);
        setSelectedProd(prod);
      }}
      className="group cursor-pointer space-y-2.5"
    >
      <div className="relative aspect-square bg-[#f9f6f0] overflow-hidden">
        <button
          type="button"
          aria-label="Yêu thích"
          className="absolute top-2.5 right-2.5 z-10 w-6 h-6 rounded-full bg-white text-slate-400 hover:text-rose-500 flex items-center justify-center shadow-sm"
        >
          <Heart className="w-3 h-3" />
        </button>
        <img
          src={prod.image}
          alt={prod.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-xs font-medium text-slate-800 group-hover:text-[#b99b6b] transition-colors truncate">
          {prod.name}
        </h3>
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>{prod.price}</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] border border-stone-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-stone-300 border border-stone-200" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#b99b6b] selection:text-white">
      {/* 1. CLEAN WHITE HEADER */}
      <header className="bg-white border-b border-stone-100 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Gem className="w-6 h-6 text-[#b99b6b]" />
            <div className="leading-none">
              <div className="text-base font-serif font-bold tracking-widest uppercase text-slate-900">
                {data.business.name.split(" ")[0] || "MONA"}
              </div>
              <div className="text-[8px] tracking-[0.25em] uppercase text-slate-400">
                JEWELRY
              </div>
            </div>
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-600">
            <a href="#" className="text-[#b99b6b] font-semibold">
              Trang chủ
            </a>
            <a
              href="#tu-nhien"
              className="hover:text-[#b99b6b] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#ban-chay"
              className="hover:text-[#b99b6b] transition-colors"
            >
              Sản phẩm ▾
            </a>
            <a
              href="#xu-huong"
              className="hover:text-[#b99b6b] transition-colors"
            >
              Dịch vụ
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#b99b6b] transition-colors"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#b99b6b] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          {/* Right Icons + Account Pill */}
          <div className="flex items-center gap-3.5 text-slate-700">
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="hover:text-[#b99b6b]"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedProd(data.bestSellerItems[0])}
              className="relative hover:text-[#b99b6b]"
            >
              <Heart className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#b99b6b] text-white text-[8px] font-bold flex items-center justify-center">
                0
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedProd(data.bestSellerItems[0])}
              className="relative hover:text-[#b99b6b] mr-1"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#b99b6b] text-white text-[8px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <a
              href="#lien-he"
              className="px-4 py-1.5 rounded-full border border-stone-300 hover:border-[#b99b6b] text-[10px] font-semibold uppercase tracking-wider text-slate-700"
            >
              TÀI KHOẢN
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO BANNER */}
      <section className="relative h-[440px] sm:h-[520px] bg-stone-900 text-white overflow-hidden flex items-end justify-center pb-14">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <div className="relative z-10 text-center px-4 space-y-5 max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-serif italic leading-tight">
            Tỏa sáng vẻ đẹp
            <br />
            với trang sức độc đáo
          </h1>
          <div>
            <a
              href={data.hero.ctaLink || "#ban-chay"}
              className="inline-block px-7 py-2 rounded-full bg-white text-slate-900 hover:bg-[#b99b6b] hover:text-white text-xs font-semibold transition-colors shadow"
            >
              {data.hero.ctaText || "Mua ngay"}
            </a>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3 absolute bottom-8 right-12 z-10 text-white/80">
          <ArrowLeft className="w-4 h-4 cursor-pointer hover:text-white" />
          <ArrowRight className="w-4 h-4 cursor-pointer hover:text-white" />
        </div>
      </section>

      {/* 3. TAGLINE, 5 PARTNER LOGOS & 3 GOLD LINE-ICON PILLARS */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="hidden sm:block w-24 h-[1px] bg-stone-200" />
          <p className="text-xs sm:text-sm font-medium text-slate-700 text-center">
            {data.taglineQuote}
          </p>
          <span className="hidden sm:block w-24 h-[1px] bg-stone-200" />
        </div>

        {/* 5 Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center text-center pb-10 border-b border-stone-100">
          {(data.clients || []).map((cl) => (
            <div
              key={cl.id}
              className="text-xs font-serif font-bold tracking-widest uppercase text-stone-400"
            >
              ❖ {cl.name}
            </div>
          ))}
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-4 border-b border-stone-100 text-center">
          {data.valuePillars.map((vp, idx) => (
            <div key={vp.id} className="space-y-2 px-4">
              <div className="flex justify-center text-[#b99b6b] mb-2">
                {idx === 0 ? (
                  <Gem className="w-7 h-7 stroke-[1.5]" />
                ) : idx === 1 ? (
                  <Sparkles className="w-7 h-7 stroke-[1.5]" />
                ) : (
                  <ShieldCheck className="w-7 h-7 stroke-[1.5]" />
                )}
              </div>
              <h3 className="text-xs font-bold text-slate-800">{vp.title}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed max-w-xs mx-auto">
                {vp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BEST SELLERS SECTION (`SẢN PHẨM BÁN CHẠY`) */}
      <section id="ban-chay" className="py-10 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base sm:text-lg font-medium uppercase tracking-wide text-slate-800">
            SẢN PHẨM <span className="text-[#b99b6b]">BÁN CHẠY</span>
          </h2>
          <a
            href="#moi-nhat"
            className="px-4 py-1 rounded-full border border-stone-300 text-[10px] font-semibold uppercase text-slate-600 hover:border-[#b99b6b]"
          >
            XEM THÊM
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-6 border-b border-stone-200 pb-2.5 mb-6 overflow-x-auto text-xs">
          {data.productTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveBestSellerTab(tab)}
              className={`whitespace-nowrap pb-2.5 -mb-2.5 transition-colors ${
                activeBestSellerTab === tab
                  ? "border-b-2 border-slate-800 font-bold text-slate-900"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {data.bestSellerItems.map((prod) => renderMinimalCard(prod))}
        </div>
      </section>

      {/* 5. TRENDING SEARCH SHOWCASE (`XU HƯỚNG TÌM KIẾM`) */}
      <section id="xu-huong" className="py-14 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-base sm:text-lg font-medium uppercase tracking-wide text-slate-800 mb-8">
          XU HƯỚNG <span className="text-[#b99b6b]">TÌM KIẾM</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
          {/* Left Image */}
          <div className="md:col-span-4 relative aspect-[4/3.8] rounded-tr-[60px] overflow-hidden bg-stone-100">
            <img
              src={data.trendingShowcase.leftImage}
              alt="Xu hướng nhẫn cưới"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Arch Image + Price Bar */}
          <div className="md:col-span-4">
            <div className="rounded-t-[140px] overflow-hidden aspect-[4/3.5] bg-stone-100">
              <img
                src={data.trendingShowcase.centerImage}
                alt={data.trendingShowcase.centerTitle}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#f5f2ed] px-5 py-3 flex items-center justify-between text-xs font-serif italic font-bold text-slate-900">
              <span>{data.trendingShowcase.centerTitle}</span>
              <span>{data.trendingShowcase.centerPrice}</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-4 relative aspect-[4/3.8] rounded-tl-[60px] overflow-hidden bg-stone-100">
            <img
              src={data.trendingShowcase.rightImage}
              alt="Xu hướng bông tai"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. NEWEST PRODUCTS SECTION (`SẢN PHẨM MỚI NHẤT`) */}
      <section id="moi-nhat" className="py-10 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base sm:text-lg font-medium uppercase tracking-wide text-slate-800">
            SẢN PHẨM <span className="text-[#b99b6b]">MỚI NHẤT</span>
          </h2>
          <a
            href="#lien-he"
            className="px-4 py-1 rounded-full border border-stone-300 text-[10px] font-semibold uppercase text-slate-600 hover:border-[#b99b6b]"
          >
            XEM THÊM
          </a>
        </div>

        <div className="flex items-center gap-6 border-b border-stone-200 pb-2.5 mb-6 overflow-x-auto text-xs">
          {data.productTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveNewestTab(tab)}
              className={`whitespace-nowrap pb-2.5 -mb-2.5 transition-colors ${
                activeNewestTab === tab
                  ? "border-b-2 border-slate-800 font-bold text-slate-900"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {data.bestSellerItems.map((prod) =>
            renderMinimalCard({ ...prod, id: `new-${prod.id}` })
          )}
        </div>
      </section>

      {/* 7. DISCOVER NATURAL BEAUTY SECTION (`KHÁM PHÁ VẺ ĐẸP TỰ NHIÊN`) */}
      <section id="tu-nhien" className="py-14 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-lg sm:text-xl font-normal uppercase tracking-wide text-slate-800">
              {data.naturalBeautySection.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              {data.naturalBeautySection.description}
            </p>
            <div className="pt-1">
              <a
                href="#lien-he"
                className="inline-block px-6 py-1.5 rounded-full border border-[#b99b6b] text-[10px] font-bold uppercase tracking-wider text-slate-700 hover:bg-[#b99b6b] hover:text-white transition-colors"
              >
                {data.naturalBeautySection.ctaText}
              </a>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="aspect-[16/10] overflow-hidden bg-stone-100">
              <img
                src={data.naturalBeautySection.image}
                alt={data.naturalBeautySection.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. YOU MIGHT ALSO LIKE (`CÓ THỂ BẠN THÍCH`) */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <h2 className="text-center text-base sm:text-lg font-medium uppercase tracking-wide text-slate-800 mb-8">
          CÓ THỂ BẠN THÍCH
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {data.bestSellerItems.map((prod) =>
            renderMinimalCard({ ...prod, id: `like-${prod.id}` })
          )}
        </div>
      </section>

      {/* 9. SPARKLING LUXURY JEWELRY SECTION (`LẤP LÁNH TRANG SỨC SANG TRỌNG`) */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Dual Pill/Arch Images */}
          <div className="md:col-span-6 flex items-center justify-center">
            <div className="w-40 sm:w-44 h-60 sm:h-64 rounded-full overflow-hidden shadow-md grayscale">
              <img
                src={data.sparklingLuxurySection.leftArchImage}
                alt="Khuyên tai ngọc trai"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="-ml-8 w-52 sm:w-60 h-72 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={data.sparklingLuxurySection.rightArchImage}
                alt="Mặt dây kim cương"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-lg sm:text-xl font-normal uppercase tracking-wide text-slate-800">
              {data.sparklingLuxurySection.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              {data.sparklingLuxurySection.description}
            </p>
            <div className="pt-1">
              <a
                href="#lien-he"
                className="inline-block px-6 py-1.5 rounded-full border border-[#b99b6b] text-[10px] font-bold uppercase tracking-wider text-slate-700 hover:bg-[#b99b6b] hover:text-white transition-colors"
              >
                {data.sparklingLuxurySection.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WARM TAUPE TESTIMONIAL BANNER (`#a89b8c`) */}
      <section className="py-16 bg-[#a89b8c] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4 relative">
          <div className="flex items-center justify-center gap-1 text-white">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
            ))}
          </div>

          <p className="text-sm sm:text-base font-serif italic leading-relaxed px-4">
            {data.testimonials?.[0]?.content}
          </p>

          <div>
            <div className="text-xs font-bold">
              {data.testimonials?.[0]?.author}
            </div>
            <div className="text-[10px] text-stone-200">
              {data.testimonials?.[0]?.role}
            </div>
          </div>
        </div>
      </section>

      {/* 11. LATEST NEWS SECTION (`TIN TỨC MỚI NHẤT`) */}
      <section id="tin-tuc" className="py-16 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base sm:text-lg font-medium uppercase tracking-wide text-slate-800">
            TIN TỨC MỚI NHẤT
          </h2>
          <a
            href="#lien-he"
            className="px-4 py-1 rounded-full border border-stone-300 text-[10px] font-semibold uppercase text-slate-600 hover:border-[#b99b6b]"
          >
            XEM THÊM
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.news || []).map((post) => (
            <article key={post.id} className="group space-y-2">
              <div className="aspect-[16/11] overflow-hidden bg-stone-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-[10px] text-slate-400">{post.date}</div>
              <h3 className="text-xs font-serif italic font-bold text-slate-900 group-hover:text-[#b99b6b] line-clamp-1">
                {post.title}
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 12. 5-IMAGE FULL-WIDTH LOOKBOOK STRIP */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {data.lookbookStrip.map((imgUrl, idx) => (
          <div key={idx} className="aspect-square overflow-hidden bg-stone-200">
            <img
              src={imgUrl}
              alt={`Lookbook trang sức ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </section>

      {/* 13. CLEAN LIGHT FOOTER (`#f8f6f2`) */}
      <footer
        id="lien-he"
        className="bg-[#f8f6f2] text-slate-600 pt-12 pb-6 border-t border-stone-200/70"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-200 text-xs">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <Gem className="w-6 h-6 text-[#b99b6b]" />
                <div className="leading-none">
                  <div className="text-base font-serif font-bold tracking-widest uppercase text-slate-900">
                    {data.business.name.split(" ")[0] || "MONA"}
                  </div>
                  <div className="text-[8px] tracking-[0.25em] uppercase text-slate-400">
                    JEWELRY
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-500 pt-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#b99b6b] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#b99b6b] shrink-0" />
                  <span>{primaryPhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#b99b6b] shrink-0" />
                  <span>{primaryEmail}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                {["f", "𝕏", "▶", "◎"].map((s) => (
                  <a
                    key={s}
                    href="#lien-he"
                    className="w-6 h-6 rounded-full bg-slate-800 hover:bg-[#b99b6b] text-white flex items-center justify-center text-[10px] font-bold transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-2 space-y-2">
              <h4 className="font-bold uppercase text-slate-800 text-[11px]">
                CHÍNH SÁCH
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Chính sách giao hàng</li>
                <li>Chính sách hoàn tiền</li>
                <li>Chính sách bảo hành</li>
                <li>Chính sách bảo mật</li>
                <li>Điều khoản & điều kiện</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="lg:col-span-2 space-y-2">
              <h4 className="font-bold uppercase text-slate-800 text-[11px]">
                CẨM NANG
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Mua hàng trả góp</li>
                <li>Hướng dẫn mua hàng</li>
                <li>Hướng dẫn thanh toán</li>
                <li>Cẩm nang trang sức</li>
                <li>Hệ thống cửa hàng</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="lg:col-span-2 space-y-2">
              <h4 className="font-bold uppercase text-slate-800 text-[11px]">
                THÔNG TIN CHUNG
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Tin trang sức</li>
                <li>Quyền lợi khách hàng</li>
                <li>Tiếp thị liên kết</li>
                <li>Ưu đãi đánh giá</li>
                <li>Nhận quà tri ân</li>
              </ul>
            </div>

            {/* Col 5 */}
            <div className="lg:col-span-2 space-y-2">
              <h4 className="font-bold uppercase text-slate-800 text-[11px]">
                DANH MỤC
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Giới thiệu</li>
                <li>Sản phẩm</li>
                <li>Khuyến mãi</li>
                <li>Tin tức</li>
                <li>Liên hệ</li>
              </ul>
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-slate-400">
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-slate-700">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* QUICK MODAL */}
      {selectedProd && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 shadow-2xl border-t-4 border-[#b99b6b]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-serif font-bold text-slate-900">
                Tư vấn Trang sức & Đặt lịch Lookbook
              </h3>
              <button
                type="button"
                onClick={() => setSelectedProd(null)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#f9f6f0] mb-4">
              <img
                src={selectedProd.image}
                alt={selectedProd.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <div className="text-xs font-bold text-slate-900">
                  {selectedProd.name}
                </div>
                <div className="text-xs font-bold text-[#b99b6b] mt-0.5">
                  {selectedProd.price}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Liên hệ <strong>{data.business.name}</strong> qua hotline{" "}
              <strong className="text-[#b99b6b]">{primaryPhone}</strong> để được
              tư vấn kích cỡ nhẫn và đặt lịch thử trang sức.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedProd(null)}
                className="px-4 py-2 border border-stone-300 text-xs font-bold text-slate-600"
              >
                Đóng
              </button>
              <a
                href={`tel:${primaryPhone}`}
                className="px-5 py-2 bg-[#b99b6b] text-white text-xs font-bold"
              >
                Gọi ngay: {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
