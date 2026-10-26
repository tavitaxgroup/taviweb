"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingCart,
  ShieldCheck,
  Award,
  MessageCircle,
  PackageCheck,
  Star,
  Quote,
  Clock,
  ArrowUpRight,
  ArrowUp,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct12DefaultData,
  type B2B12Data,
  type B2B12ProductItem
} from "@/template-sources/b2b_product_12/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: B2B12Data = adaptClonedTemplateData(
    b2bProduct12DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<B2B12ProductItem | null>(
    null
  );
  const [cartCount, setCartCount] = useState(0);
  const [phoneInput, setPhoneInput] = useState("");
  const [phoneSent, setPhoneSent] = useState(false);
  const [activeReviewId, setActiveReviewId] = useState("rv-3");

  const primaryPhone = data.business.phone?.[0] || "0313728397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput.trim()) return;
    setPhoneSent(true);
    setPhoneInput("");
    setTimeout(() => setPhoneSent(false), 5000);
  };

  const renderBrandCube = (size = "md") => {
    const boxSize = size === "sm" ? "w-5 h-5" : "w-7 h-7";
    return (
      <div className={`${boxSize} grid grid-cols-2 gap-0.5 shrink-0 -rotate-6`}>
        <span className="bg-[#e53935] rounded-[1px]" />
        <span className="bg-[#163a70] rounded-[1px]" />
        <span className="bg-[#163a70] rounded-[1px]" />
        <span className="bg-[#e53935] rounded-[1px]" />
      </div>
    );
  };

  const renderTrustIcon = (icon: string) => {
    switch (icon) {
      case "shield":
        return <ShieldCheck className="w-8 h-8 text-[#163a70]" />;
      case "award":
        return <Award className="w-8 h-8 text-[#163a70]" />;
      case "chat":
        return <MessageCircle className="w-8 h-8 text-[#163a70]" />;
      default:
        return <PackageCheck className="w-8 h-8 text-[#163a70]" />;
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1e293b] font-sans selection:bg-[#e53935] selection:text-white"
    >
      {/* 1. TWO-TONE TOPBAR (RED LEFT + NAVY RIGHT) & WHITE NAVBAR */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Split Topbar */}
        <div className="grid grid-cols-1 md:grid-cols-12 text-[11px] text-white">
          <div className="md:col-span-5 bg-[#e53935] px-4 sm:px-8 py-1.5 flex items-center justify-center md:justify-end gap-5">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{primaryPhone}</span>
            </a>
            <a
              href={`mailto:${primaryEmail}`}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{primaryEmail}</span>
            </a>
          </div>
          <div className="hidden md:flex md:col-span-7 bg-[#163a70] px-4 sm:px-8 py-1.5 items-center justify-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-sky-300 shrink-0" />
            <span className="truncate">{data.business.address}</span>
          </div>
        </div>

        {/* Main White Navbar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5">
            {renderBrandCube("md")}
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#e53935] uppercase">
              {data.business.name}
              <span className="text-[#163a70]">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-700">
            <a href="#top" className="text-[#e53935]">
              Trang chủ
            </a>
            <a href="#about" className="hover:text-[#e53935] transition-colors">
              Giới thiệu
            </a>
            <a
              href="#featured-products"
              className="hover:text-[#e53935] transition-colors"
            >
              Sản phẩm
            </a>
            <a href="#news" className="hover:text-[#e53935] transition-colors">
              Tin tức
            </a>
            <a
              href="#phone-capture"
              className="hover:text-[#e53935] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("featured-products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="p-1.5 text-slate-700 hover:text-[#e53935]"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("featured-products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative p-1.5 text-slate-700 hover:text-[#e53935]"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#e53935] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-700"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-bold text-slate-700">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#e53935]"
            >
              Trang chủ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Giới thiệu
            </a>
            <a
              href="#featured-products"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Sản phẩm
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Tin tức
            </a>
            <a
              href="#phone-capture"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 2. INDUSTRIAL PACKAGING HERO BANNER */}
      <section className="relative overflow-hidden bg-[#10221f] text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1f1c]/90 via-[#132a26]/75 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2.5">
              {renderBrandCube("md")}
              <span className="text-xl sm:text-3xl font-black text-[#e53935] tracking-tight">
                {data.business.name}{" "}
                <span className="text-lg sm:text-2xl font-extrabold">
                  Packaging<span className="text-[#3b82f6]">.</span>
                </span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase text-[#e53935] leading-tight tracking-wide drop-shadow">
              CHUYÊN GIA TRONG <br />
              GIA CÔNG BAO BÌ
            </h1>

            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#featured-products"}
                className="inline-block bg-[#e53935] hover:bg-[#c62828] text-white text-xs font-bold px-6 py-2.5 rounded shadow-lg transition-colors"
              >
                {data.hero.ctaText || "Khám phá ngay"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHÚNG TÔI THE MONA (OVERLAPPING PACKAGING MOCKUP LEFT + COPY RIGHT) */}
      <section id="about" className="relative bg-white py-20 px-4 sm:px-8 overflow-hidden">
        {/* Red Dotted Pattern Top-Right */}
        <div
          className="hidden sm:block absolute top-0 right-12 w-16 h-24 opacity-70"
          style={{
            backgroundImage: "radial-gradient(#e53935 1.5px, transparent 1.5px)",
            backgroundSize: "6px 6px"
          }}
        />
        {/* Red Dotted Pattern Bottom-Center */}
        <div
          className="hidden sm:block absolute bottom-0 left-1/2 w-16 h-20 opacity-70"
          style={{
            backgroundImage: "radial-gradient(#e53935 1.5px, transparent 1.5px)",
            backgroundSize: "6px 6px"
          }}
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Overlapping Packaging Photos + Red Outline Frame */}
          <div className="lg:col-span-6 relative pb-12 pr-6">
            {/* Red rectangular border behind */}
            <div className="hidden sm:block absolute top-10 left-24 right-8 bottom-0 border-2 border-[#e53935] z-0" />

            <div className="relative z-10 w-4/5 rounded shadow-lg overflow-hidden">
              <img
                src={data.aboutSection.mainImage}
                alt="Gia công chai lọ bao bì"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>

            <div className="relative z-20 w-3/5 ml-auto -mt-28 rounded shadow-xl overflow-hidden border-4 border-white bg-white">
              <img
                src={data.aboutSection.secondaryImage}
                alt="Túi giấy và hộp bao bì"
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              {data.aboutSection.titlePrefix}{" "}
              <span className="text-[#e53935] uppercase">
                {data.business.name}
              </span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
              {data.business.aboutText?.[0] || data.aboutSection.leadText}
            </p>
            <div className="w-24 h-0.5 bg-[#e53935]" />
            <p className="text-xs font-bold text-slate-500">
              {data.aboutSection.subTitle}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              {data.business.aboutText?.[1] || data.aboutSection.bodyText}
            </p>
          </div>
        </div>
      </section>

      {/* 4. 4 TRUST COMMITMENTS + CÁC THƯƠNG HIỆU CHÚNG TÔI PHÂN PHỐI */}
      <section className="relative overflow-hidden bg-[#dce4e1]">
        {/* Top 4 Trust Columns */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {data.trustItems.map((tr) => (
            <div key={tr.id} className="flex flex-col items-center space-y-2.5">
              <div className="flex items-center gap-1.5">
                {renderBrandCube("sm")}
                <span className="text-xs font-black text-[#e53935]">
                  {data.business.name} Packaging.
                </span>
              </div>
              <div className="py-1">{renderTrustIcon(tr.icon)}</div>
              <h3 className="text-sm font-extrabold text-[#111827]">
                {tr.title}
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed max-w-xs">
                {tr.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Distributed Brands Strip */}
        <div className="relative py-12 px-4 sm:px-8 bg-gradient-to-b from-[#cfd9d5] to-[#2c3e3a]">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#111827] flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e53935]" />
              <span>CÁC THƯƠNG HIỆU CHÚNG TÔI PHÂN PHỐI</span>
              <span className="w-1.5 h-1.5 bg-[#e53935]" />
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {data.distributedBrands.map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-white h-28 rounded shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform"
                >
                  <span
                    className={`font-black tracking-wider text-sm sm:text-base ${
                      idx === 1
                        ? "text-[#e53935] italic text-xl"
                        : idx === 2
                        ? "bg-[#e53935] text-white px-2.5 py-1 text-xs"
                        : idx === 3
                        ? "text-[#163a70]"
                        : "text-[#111827]"
                    }`}
                  >
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. VẬN CHUYỂN VÀ PHÂN PHỐI HÀNG MỸ (3 TALL SHOWCASE CARDS: CHAI, CỐC, BAO BÌ) */}
      <section className="bg-white pt-16 pb-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-1.5">
            <div className="flex items-center justify-center gap-2">
              {renderBrandCube("sm")}
              <span className="text-base font-black text-[#e53935]">
                {data.business.name} Packaging<span className="text-[#163a70]">.</span>
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-[#e53935]">
              {data.usaDistributionSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.usaDistributionSection.categories.map((cat) => (
              <div
                key={cat.id}
                className="group relative h-[400px] overflow-hidden bg-[#a3a3a3] shadow-md"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/50" />

                {/* Top-Left Blue "New" Pill + White Heading */}
                <div className="absolute top-7 left-7 space-y-2">
                  <span className="inline-block bg-[#163a70] text-white text-[10px] font-bold px-3 py-0.5 rounded">
                    {cat.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow">
                    {cat.title}
                  </h3>
                </div>

                {/* Bottom-Left Red CTA */}
                <div className="absolute bottom-7 left-7">
                  <a
                    href="#featured-products"
                    className="inline-block bg-[#e53935] hover:bg-[#c62828] text-white text-xs font-bold px-5 py-2 rounded shadow transition-colors"
                  >
                    Xem ngay
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SẢN PHẨM NỔI BẬT (8 PACKAGING PRODUCT CARDS IN 4x2 GRID) */}
      <section id="featured-products" className="bg-white py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-base sm:text-lg font-extrabold uppercase text-[#111827] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e53935]" />
              <span>SẢN PHẨM NỔI BẬT</span>
            </h2>
            <a
              href="#phone-capture"
              className="text-[11px] font-bold uppercase text-[#e53935] hover:underline flex items-center gap-1"
            >
              <span>XEM TẤT CẢ SẢN PHẨM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.featuredProducts.map((prd) => (
              <div
                key={prd.id}
                onClick={() => setSelectedProduct(prd)}
                className="group cursor-pointer text-center space-y-2.5"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#f1f5f9] border border-slate-100">
                  <img
                    src={prd.image}
                    alt={prd.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prd.badge && (
                    <span
                      className={`absolute top-2.5 left-2.5 text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full ${
                        prd.badgeType === "soldout"
                          ? "bg-[#e53935]"
                          : "bg-[#163a70]"
                      }`}
                    >
                      {prd.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-center gap-1 text-[11px] text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-slate-400">({prd.ratingCount})</span>
                  </div>
                  <h3 className="text-xs font-extrabold text-[#111827] group-hover:text-[#e53935] transition-colors line-clamp-2 px-2">
                    {prd.title}
                  </h3>
                  <div className="text-xs font-extrabold text-[#e53935]">
                    <span>{prd.price}</span>
                    {prd.oldPrice && (
                      <span className="text-[10px] text-slate-400 line-through ml-1.5 font-normal">
                        {prd.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ĐÁNH GIÁ TỪ KHÁCH HÀNG (5 REVIEW CARDS WITH SOLID RED FEATURED CENTER CARD) */}
      <section className="bg-gradient-to-b from-[#e4ece9] to-[#cbd7d3] py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#111827] flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e53935]" />
              <span>ĐÁNH GIÁ TỪ KHÁCH HÀNG</span>
              <span className="w-1.5 h-1.5 bg-[#e53935]" />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.customerReviews.map((rev) => {
              const isHighlighted = rev.id === activeReviewId;
              return (
                <div
                  key={rev.id}
                  onClick={() => setActiveReviewId(rev.id)}
                  className={`cursor-pointer rounded-xl p-5 text-center relative transition-all shadow-sm ${
                    isHighlighted
                      ? "bg-[#e53935] text-white shadow-xl -translate-y-1"
                      : "bg-[#fbf9f5] text-[#111827] hover:shadow-md"
                  }`}
                >
                  <Quote
                    className={`w-4 h-4 absolute top-3 right-3 ${
                      isHighlighted ? "text-white/80" : "text-slate-700"
                    }`}
                  />
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover mx-auto mb-2.5 border-2 border-white shadow"
                  />
                  <p
                    className={`text-[10px] ${
                      isHighlighted ? "text-red-100" : "text-slate-400"
                    }`}
                  >
                    {rev.role}
                  </p>
                  <h3 className="text-xs font-extrabold">{rev.name}</h3>
                  <div className="flex items-center justify-center gap-0.5 my-1.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-current" />
                    ))}
                  </div>
                  <p
                    className={`text-[11px] leading-relaxed line-clamp-3 ${
                      isHighlighted ? "text-white/95" : "text-slate-600"
                    }`}
                  >
                    {rev.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-1.5">
            {data.customerReviews.map((rev) => (
              <button
                key={rev.id}
                type="button"
                onClick={() => setActiveReviewId(rev.id)}
                className={`w-2 h-2 rounded-full ${
                  rev.id === activeReviewId ? "bg-[#e53935]" : "bg-white/70"
                }`}
                aria-label={rev.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. TIN TỨC NỔI BẬT (2 FEATURED ARTICLES LEFT + 4 COMPACT ITEMS RIGHT) */}
      <section id="news" className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#111827] flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e53935]" />
              <span>TIN TỨC NỔI BẬT</span>
              <span className="w-1.5 h-1.5 bg-[#e53935]" />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 2 Featured Articles */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.featuredNews.map((fn) => (
                <article key={fn.id} className="space-y-2.5 group">
                  <div className="h-52 rounded-lg overflow-hidden bg-slate-100">
                    <img
                      src={fn.image}
                      alt={fn.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{fn.date}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#111827] group-hover:text-[#e53935] transition-colors line-clamp-1">
                    {fn.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {fn.excerpt}
                  </p>
                  <a
                    href="#phone-capture"
                    className="inline-block text-xs font-bold text-[#163a70] hover:underline"
                  >
                    Xem thêm
                  </a>
                </article>
              ))}
            </div>

            {/* Right 4 Stacked News Items */}
            <div className="lg:col-span-4 space-y-3.5">
              {data.sideNews.map((sn) => (
                <div key={sn.id} className="flex items-start gap-3 group">
                  <div className="w-28 h-16 rounded overflow-hidden shrink-0 bg-slate-100">
                    <img
                      src={sn.image}
                      alt={sn.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-slate-700 group-hover:text-[#e53935] transition-colors leading-snug line-clamp-2">
                    {sn.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* 9. ĐĂNG KÝ NHẬN THÔNG TIN (PHONE LEAD BAR) */}
          <div id="phone-capture" className="mt-16 text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#111827] flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e53935]" />
              <span>{data.phoneCaptureBanner.title}</span>
              <span className="w-1.5 h-1.5 bg-[#e53935]" />
            </h2>
            <p className="text-xs text-slate-500">
              {data.phoneCaptureBanner.subtitle}
            </p>
            <form
              onSubmit={handlePhoneSubmit}
              className="pt-2 flex items-center justify-center max-w-md mx-auto"
            >
              <input
                type="tel"
                required
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder={data.phoneCaptureBanner.placeholder}
                className="flex-1 bg-slate-100 border border-slate-200 rounded-l px-4 py-2.5 text-xs focus:outline-none focus:border-[#e53935]"
              />
              <button
                type="submit"
                className="bg-[#e53935] hover:bg-[#c62828] text-white text-xs font-bold px-6 py-2.5 rounded-r transition-colors"
              >
                {data.phoneCaptureBanner.buttonText}
              </button>
            </form>
            {phoneSent && (
              <p className="text-xs text-emerald-600 font-semibold">
                Đã ghi nhận số điện thoại! Bộ phận kinh doanh bao bì sẽ gọi lại cho bạn
                ngay.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 10. DARK CHARCOAL MULTI-ROW FOOTER (#1c1e22) */}
      <footer className="bg-[#1c1e22] text-slate-400 text-xs pt-12 pb-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top Centered Brand Logo */}
          <div className="flex items-center justify-center gap-2.5 pb-10">
            {renderBrandCube("md")}
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#e53935] uppercase">
              {data.business.name}
              <span className="text-[#3b82f6]">.</span>
            </span>
          </div>

          {/* Row 1: LIÊN HỆ, CHĂM SÓC KHÁCH HÀNG, SẢN PHẨM */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase text-white">LIÊN HỆ</h3>
              <p className="flex items-center gap-2 text-[11px]">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-start gap-2 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-[11px]">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase text-white">
                CHĂM SÓC KHÁCH HÀNG
              </h3>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <a href="#phone-capture" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#featured-products" className="hover:text-white">
                    Tất cả sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-white">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    Hỏi đáp (FAQ)
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase text-white">SẢN PHẨM</h3>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <a href="#featured-products" className="hover:text-white">
                    Bao bì công nghiệp
                  </a>
                </li>
                <li>
                  <a href="#featured-products" className="hover:text-white">
                    Bao bì đồ uống
                  </a>
                </li>
                <li>
                  <a href="#featured-products" className="hover:text-white">
                    Bao bì dược phẩm
                  </a>
                </li>
                <li>
                  <a href="#featured-products" className="hover:text-white">
                    Bao bì thực phẩm
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 2: 3 Company Branches */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 text-[11px]">
            {data.companyBranches.map((br) => (
              <div key={br.id} className="space-y-1.5">
                <h4 className="font-bold text-white uppercase">{br.name}</h4>
                <p>Hotline: {primaryPhone || br.hotline}</p>
                <p>Email: {primaryEmail || br.email}</p>
                <p>Địa chỉ: {data.business.address || br.address}</p>
              </div>
            ))}
          </div>

          {/* Row 3: Badges, Socials, Payment Methods */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <span className="bg-[#0284c7] text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
              </span>
              <span className="bg-[#e53935] text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG
              </span>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase text-white mb-2">
                MẠNG XÃ HỘI
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href="#top"
                  className="w-7 h-7 rounded-full bg-white text-[#1c1e22] font-bold flex items-center justify-center"
                >
                  f
                </a>
                <a
                  href="#top"
                  className="w-7 h-7 rounded-full bg-white text-[#1c1e22] font-bold flex items-center justify-center"
                >
                  ig
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase text-white mb-2">
                PHƯƠNG THỨC THANH TOÁN
              </h4>
              <div className="flex items-center gap-2 text-[10px] font-bold">
                <span className="bg-white text-red-600 px-2.5 py-1 rounded">
                  MasterCard
                </span>
                <span className="bg-white text-blue-800 px-2.5 py-1 rounded">
                  VISA
                </span>
                <span className="bg-white text-emerald-700 px-2.5 py-1 rounded">
                  TIỀN MẶT
                </span>
                <span className="bg-white text-slate-800 px-2.5 py-1 rounded">
                  BANKING
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center text-[11px] text-slate-500">
            © Bản quyền thuộc về {data.business.name} Packaging.
          </div>
        </div>

        <a
          href="#top"
          className="fixed bottom-5 right-5 w-9 h-9 rounded-full bg-[#0284c7] text-white shadow-lg flex items-center justify-center hover:bg-[#0369a1] z-30"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </footer>

      {/* PRODUCT QUICK QUOTE MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 bg-slate-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-base font-extrabold text-[#111827]">
                {selectedProduct.title}
              </h3>
              <p className="text-sm font-black text-[#e53935]">
                {selectedProduct.price}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedProduct.specs}
              </p>
              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-[#163a70] hover:bg-[#0f2952] text-white text-xs font-bold py-2.5 rounded"
                >
                  Thêm vào giỏ mẫu
                </button>
                <a
                  href="#phone-capture"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 bg-[#e53935] hover:bg-[#c62828] text-white text-xs font-bold py-2.5 rounded text-center"
                >
                  Yêu cầu báo giá sỉ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
