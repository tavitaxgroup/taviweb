"use client";

import React, { useState } from "react";
import {
  Heart,
  Citrus,
  Leaf,
  Droplets,
  CheckCircle2,
  FileText,
  Gift,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Menu,
  X,
  ShieldCheck
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  quanCafe6DefaultData,
  type QuanCafe6Data,
  type QuanCafe6Product
} from "@/template-sources/quan_cafe_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: QuanCafe6Data = adaptClonedTemplateData(
    quanCafe6DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [activeProductTab, setActiveProductTab] = useState("NƯỚC TRÁI CÂY");
  const [selectedJuice, setSelectedJuice] =
    useState<QuanCafe6Product | null>(null);
  const [sampleSent, setSampleSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const wColumns = data.wColumns || quanCafe6DefaultData.wColumns || [];
  const productTabs =
    data.productTabs || quanCafe6DefaultData.productTabs || [];
  const juiceProducts =
    data.juiceProducts || quanCafe6DefaultData.juiceProducts || [];
  const deliverySteps =
    data.deliveryProcess?.steps ||
    quanCafe6DefaultData.deliveryProcess.steps ||
    [];
  const mainTestimonial =
    data.testimonials?.[0] || quanCafe6DefaultData.testimonials?.[0];
  const newsList = data.news || quanCafe6DefaultData.news || [];
  const certifications =
    data.certifications || quanCafe6DefaultData.certifications || [];

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleSent(true);
    setTimeout(() => {
      setSampleSent(false);
      setSelectedJuice(null);
    }, 2200);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#146c32] selection:text-white"
    >
      {/* 1. CLEAN WHITE HEADER WITH TROPICAL SPLASH LOGO (Matches CF006) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Tropical Splash Brand Logo */}
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#146c32] to-[#7cb342] text-white flex items-center justify-center shadow-sm">
              <Citrus className="w-5 h-5" />
            </div>
            <div className="leading-none">
              <span className="text-lg font-black tracking-tight text-[#146c32]">
                {data.business.name.slice(0, 4) || "Mona"}
              </span>
              <span className="text-lg font-black tracking-tight text-[#d91f26]">
                {data.business.name.slice(4) || "Juice"}
              </span>
            </div>
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-700">
            <a href="#top" className="text-slate-900 relative py-1">
              <span>TRANG CHỦ</span>
              <span className="w-1 h-1 rounded-full bg-[#d91f26] absolute bottom-0 left-1/2 -translate-x-1/2" />
            </a>
            <a href="#about" className="hover:text-[#146c32] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#footer" className="hover:text-[#146c32] transition-colors">
              CHỨNG NHẬN
            </a>
            <a
              href="#beetroot"
              className="hover:text-[#146c32] transition-colors"
            >
              KÍCH THƯỚC BAO BÌ
            </a>
            <a
              href="#products"
              className="hover:text-[#146c32] transition-colors"
            >
              SẢN PHẨM
            </a>
            <a href="#news" className="hover:text-[#146c32] transition-colors">
              TIN TỨC
            </a>
            <a
              href="#delivery-process"
              className="hover:text-[#146c32] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Wishlist Icon */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setWishlistCount((w) => w + 1)}
              className="relative p-2 text-slate-700 hover:text-[#d91f26]"
              aria-label="Yêu thích"
            >
              <Heart className="w-4 h-4" />
              <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#d91f26] text-white text-[8px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#146c32]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              SẢN PHẨM NỔI BẬT
            </a>
            <a
              href="#delivery-process"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              QUY TRÌNH GIAO HÀNG
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              TIN TỨC MỚI NHẤT
            </a>
          </div>
        )}
      </header>

      {/* 2. TROPICAL CITRUS HERO BANNER WITH GIANT TYPOGRAPHY & 3 YELLOW CANS */}
      <section className="relative min-h-[420px] sm:min-h-[500px] bg-gradient-to-r from-[#2e4c1e] via-[#8ea832] to-[#c99e28] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url('${data.hero.backgroundImage}')` }}
        />

        {/* Left/Right Slider Pills */}
        <button
          type="button"
          onClick={() => setSelectedJuice(juiceProducts[0])}
          aria-label="Trước"
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-7 h-12 rounded-r-full bg-white/90 text-slate-700 items-center justify-center shadow"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => setSelectedJuice(juiceProducts[1])}
          aria-label="Sau"
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-7 h-12 rounded-l-full bg-[#d91f26] text-white items-center justify-center shadow"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Left & Center Giant Display Typography */}
          <div className="lg:col-span-6 text-center lg:text-right">
            <span className="inline-block bg-white/90 text-[#146c32] text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 shadow-sm">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase leading-none tracking-tight text-[#ff9800] drop-shadow-md">
              THE {data.business.name.replace(/juice/i, "").toUpperCase() || "MONA"}
              <span className="block text-slate-950 mt-1">JUICE</span>
            </h1>
            <p className="text-xs sm:text-sm text-white font-semibold mt-3 max-w-md mx-auto lg:ml-auto lg:mr-0 drop-shadow">
              {data.hero.description}
            </p>
          </div>

          {/* Right 3 Yellow Tropical Cans + Red Circle Badge */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative flex items-end gap-2 sm:gap-3 pt-10">
              {/* Red Circle Badge */}
              <div className="absolute -top-2 left-1/3 z-20 w-16 h-16 rounded-full bg-[#d91f26] text-white flex flex-col items-center justify-center text-center leading-tight shadow-lg -rotate-12 border-2 border-white/40">
                <span className="text-[9px] font-black uppercase">MỚI</span>
                <span className="text-[9px] font-black uppercase">RA MẮT</span>
              </div>

              {[
                { label: "XOÀI", sub: "100% TƯƠI" },
                { label: "CAM ĐÀO", sub: "VITAMIN C" },
                { label: "DỪA VẢI", sub: "TỰ NHIÊN" }
              ].map((can, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedJuice(juiceProducts[idx])}
                  className="w-24 sm:w-28 h-52 sm:h-60 rounded-2xl bg-gradient-to-b from-[#fdd835] via-[#fbc02d] to-[#f57f17] border-t-4 border-b-4 border-slate-300 shadow-2xl flex flex-col items-center justify-between p-3 text-center cursor-pointer hover:-translate-y-2 transition-transform"
                >
                  <span className="text-[8px] font-bold uppercase text-amber-900">
                    TROPICAL
                  </span>
                  <div>
                    <div className="text-xs sm:text-sm font-black uppercase text-slate-950 tracking-tight">
                      {data.business.name.toUpperCase()}
                    </div>
                    <div className="text-[9px] font-extrabold text-[#146c32] mt-0.5">
                      {can.label}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center">
                    <Citrus className="w-6 h-6 text-[#d91f26]" />
                  </div>
                  <span className="text-[8px] font-bold text-slate-800">
                    {can.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MONA JUICE - CHUYÊN CUNG CẤP ĐỒ UỐNG HÀNG ĐẦU VIỆT NAM (4 Giant W Columns) */}
      <section id="about" className="relative py-16 sm:py-20 bg-white overflow-hidden">
        {/* Faint 2026 Watermark */}
        <div className="hidden lg:block absolute top-6 right-28 text-[140px] font-black text-slate-100/80 select-none pointer-events-none leading-none">
          2026
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase leading-snug max-w-xl mb-12">
            <span className="text-slate-900">{data.business.name} - </span>
            <span className="text-[#146c32]">
              CHUYÊN CUNG CẤP ĐỒ UỐNG HÀNG ĐẦU VIỆT NAM
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {wColumns.map((col, idx) => (
              <div
                key={col.id}
                className={idx > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""}
              >
                <div
                  className="text-5xl sm:text-6xl font-light tracking-tighter leading-none mb-4 select-none"
                  style={{ color: col.color }}
                >
                  W
                </div>
                <h3 className="text-xs font-extrabold uppercase text-slate-900 mb-2.5 min-h-[32px]">
                  {col.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                  {col.description}
                </p>
                <a
                  href="#products"
                  className="text-[10px] font-extrabold uppercase text-[#d91f26] hover:underline"
                >
                  XEM THÊM
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NƯỚC ÉP CỦ DỀN MONA JUICE (Deep Crimson Beetroot Feature Banner) */}
      <section
        id="beetroot"
        className="relative py-14 sm:py-16 bg-gradient-to-r from-[#2b0507] via-[#7f1116] to-[#b31b21] text-white overflow-hidden"
      >
        {/* Faint BEETROOT Watermark */}
        <div className="hidden lg:block absolute bottom-2 right-10 text-7xl font-black uppercase tracking-[0.25em] text-white/10 select-none pointer-events-none">
          BEETROOT
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Can Showcase */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="absolute -top-4 left-6 z-20 w-16 h-16 rounded-full bg-[#d91f26] border-2 border-white/40 flex items-center justify-center text-center text-[9px] font-black uppercase -rotate-12 shadow-lg">
              {data.beetrootFeature.badgeText}
            </div>
            <div className="w-44 h-64 rounded-3xl overflow-hidden border-4 border-amber-300 shadow-2xl bg-amber-400">
              <img
                src={data.beetrootFeature.canImage}
                alt={data.beetrootFeature.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Nutritional Copy & Stats */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              <div className="sm:col-span-6">
                <h2 className="text-xl sm:text-2xl font-extrabold uppercase leading-snug">
                  {data.beetrootFeature.title}
                </h2>
              </div>
              <div className="sm:col-span-6 space-y-4">
                <p className="text-xs text-red-100 leading-relaxed">
                  {data.beetrootFeature.description}
                </p>

                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-3">
                    <Citrus className="w-6 h-6 text-amber-300 shrink-0" />
                    <div>
                      <div className="text-lg font-extrabold leading-none">
                        {data.beetrootFeature.stat1Number}
                      </div>
                      <div className="text-[9px] font-bold uppercase text-red-200 mt-0.5">
                        {data.beetrootFeature.stat1Label}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Droplets className="w-6 h-6 text-amber-300 shrink-0" />
                    <div>
                      <div className="text-lg font-extrabold leading-none">
                        {data.beetrootFeature.stat2Number}
                      </div>
                      <div className="text-[9px] font-bold uppercase text-red-200 mt-0.5">
                        {data.beetrootFeature.stat2Label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SẢN PHẨM NỔI BẬT (5 Category Tabs + 8 Can/Bottle Cards) */}
      <section id="products" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-900">
              SẢN PHẨM
            </h2>
            <div className="text-[11px] font-medium text-[#146c32] mt-1">
              — Sản Phẩm Nổi Bật —
            </div>
          </div>

          {/* 5 Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-6 border-b border-slate-200 mb-10 text-xs font-bold uppercase">
            {productTabs.map((tab) => {
              const isActive = activeProductTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveProductTab(tab)}
                  className={`pb-3 border-b-2 transition-colors ${
                    isActive
                      ? "border-[#d91f26] text-slate-900"
                      : "border-transparent text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 4x2 Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {juiceProducts.map((prd) => (
              <div
                key={prd.id}
                onClick={() => setSelectedJuice(prd)}
                className="bg-[#f8f9fa] rounded-2xl p-5 text-center flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group"
              >
                <div>
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-white mb-4 p-3 flex items-center justify-center">
                    <img
                      src={prd.image}
                      alt={prd.name}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-[11px] font-extrabold text-slate-800 leading-snug line-clamp-2 mb-3">
                    {prd.name}
                  </h3>
                </div>

                <div>
                  <span className="inline-block bg-[#d91f26] hover:bg-[#b5161c] text-white text-[9px] font-bold uppercase px-5 py-1.5 rounded-full transition-colors">
                    XEM THÊM
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUY TRÌNH GIAO HÀNG (4-Step Semi-Circle Arc + Center Bottle + Testimonial) */}
      <section
        id="delivery-process"
        className="py-16 sm:py-20 bg-gradient-to-b from-[#eff9f2] to-[#f7fbf8] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-900">
            {data.deliveryProcess.title}
          </h2>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#146c32] mt-1 mb-12">
            — {data.deliveryProcess.subtitle} —
          </div>

          {/* 4-Step Arc + Center Bottle */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-8">
            {deliverySteps.map((step, idx) => (
              <div
                key={step.id}
                className={`flex flex-col items-center text-center ${
                  idx === 0 || idx === 3 ? "lg:mt-16" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-white border border-emerald-200 text-[#146c32] flex items-center justify-center shadow-sm mb-3">
                  {step.icon === "select" && <CheckCircle2 className="w-6 h-6" />}
                  {step.icon === "quote" && <FileText className="w-6 h-6" />}
                  {step.icon === "sample" && <Gift className="w-6 h-6" />}
                  {step.icon === "order" && <ShoppingCart className="w-6 h-6" />}
                </div>
                <h3 className="text-xs font-extrabold uppercase text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-500">{step.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Center Bottle Showcase */}
          <div className="my-6 flex justify-center">
            <div className="w-44 h-64 rounded-full bg-white p-3 shadow-lg border border-emerald-100 overflow-hidden">
              <img
                src={data.deliveryProcess.centerBottleImage}
                alt="Chai nước ép"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Testimonial Block */}
          {mainTestimonial && (
            <div className="relative max-w-2xl mx-auto pt-4">
              <div className="text-4xl sm:text-6xl font-black uppercase tracking-[0.2em] text-white select-none pointer-events-none">
                TESTIMONIAL
              </div>
              {mainTestimonial.avatar && (
                <img
                  src={mainTestimonial.avatar}
                  alt={mainTestimonial.author}
                  className="w-12 h-12 rounded-full object-cover mx-auto -mt-8 mb-3 border-2 border-white shadow"
                />
              )}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                “{mainTestimonial.content}”
              </p>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900">
                {mainTestimonial.author}{" "}
                <span className="text-slate-400 font-normal">
                  / {mainTestimonial.role}
                </span>
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {[0, 1, 2, 3, 4].map((d) => (
                  <span
                    key={d}
                    className={`w-1.5 h-1.5 rounded-full ${
                      d === 4 ? "bg-[#146c32]" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. TIN TỨC MỚI NHẤT (3 Cards) */}
      <section id="news" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-900">
              TIN TỨC
            </h2>
            <div className="text-[11px] font-medium text-[#146c32] mt-1">
              — Tin Tức Mới Nhất —
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedJuice(juiceProducts[0])}
                className="text-center group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-extrabold uppercase text-slate-900 leading-snug mb-2 px-2 group-hover:text-[#146c32]">
                  {post.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2 mb-3 px-2">
                  {post.excerpt}
                </p>
                <span className="text-[10px] font-extrabold uppercase text-[#d91f26] hover:underline">
                  XEM THÊM
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLEAN WHITE FOOTER WITH CERTIFICATION BADGES */}
      <footer id="footer" className="bg-white border-t border-slate-200 py-12 text-xs text-slate-600">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Col 1: Company Info */}
          <div className="md:col-span-5">
            <h4 className="text-[11px] font-extrabold uppercase text-slate-900 mb-4">
              {data.business.name} - CHUYÊN CUNG CẤP ĐỒ UỐNG HÀNG ĐẦU VIỆT NAM
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px]">
              <div className="space-y-1.5">
                <p>{data.business.address}</p>
                <p>
                  <strong className="text-slate-900 block">Email</strong>
                  {primaryEmail}
                </p>
                <p>
                  <strong className="text-slate-900 block">Phone</strong>
                  {primaryPhone}
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-800">
                  Chăm sóc khách hàng
                </p>
                <p>
                  <strong className="text-slate-900 block">Email</strong>
                  {primaryEmail}
                </p>
                <p>
                  <strong className="text-slate-900 block">Call center</strong>
                  {primaryPhone}
                </p>
              </div>
            </div>
            <div className="mt-6 text-[10px] text-slate-400">
              Designed and developed by {data.business.name}
            </div>
          </div>

          {/* Col 2: SẢN PHẨM */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-extrabold uppercase text-slate-900 mb-4">
              SẢN PHẨM
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <a href="#products" className="hover:text-[#146c32]">
                NƯỚC TRÁI CÂY
              </a>
              <a href="#products" className="hover:text-[#146c32]">
                NƯỚC DỪA
              </a>
              <a href="#products" className="hover:text-[#146c32]">
                NƯỚC CÓ GA
              </a>
              <a href="#products" className="hover:text-[#146c32]">
                CÀ PHÊ
              </a>
              <a href="#products" className="hover:text-[#146c32]">
                NƯỚC LÔ HỘI
              </a>
            </div>

            <div className="flex items-center gap-3 mt-5 text-slate-800 font-bold">
              <a href="#top">f</a>
              <a href="#top">ig</a>
              <a href="#top">▶</a>
              <a href="#top">tw</a>
            </div>
          </div>

          {/* Col 3: Certification Seals */}
          <div className="md:col-span-3 flex flex-wrap items-center content-start gap-2.5">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`w-12 h-12 rounded-full flex flex-col items-center justify-center text-center p-1 border-2 font-black text-[9px] leading-tight ${
                  i % 2 === 0
                    ? "bg-[#b3392b] border-amber-200 text-white"
                    : "bg-[#146c32] border-emerald-200 text-white"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 mb-0.5" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#top"
          aria-label="Lên đầu trang"
          className="hidden sm:flex fixed bottom-5 right-5 w-8 h-8 rounded bg-[#d91f26] text-white items-center justify-center shadow-lg z-30"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </footer>

      {/* FREE SAMPLE / PRODUCT ORDER MODAL */}
      {selectedJuice && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedJuice(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {sampleSent ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#146c32] mx-auto mb-3" />
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  Đăng ký nhận mẫu thử & Báo giá thành công!
                </h3>
                <p className="text-xs text-slate-500">
                  Bộ phận kinh doanh của {data.business.name} sẽ gửi mẫu thử và bảng giá sỉ/lẻ cho bạn ngay.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSampleSubmit} className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={selectedJuice.image}
                    alt={selectedJuice.name}
                    className="w-16 h-16 rounded-xl object-cover border border-slate-100"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#146c32]">
                      {selectedJuice.flavorTag} • {selectedJuice.volume}
                    </span>
                    <h3 className="text-xs font-extrabold text-slate-900">
                      {selectedJuice.name}
                    </h3>
                    <div className="text-xs font-black text-[#d91f26] mt-0.5">
                      Giá lẻ tham khảo: {selectedJuice.price}
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên / Tên quán Cafe, Cửa hàng"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#146c32]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại nhận mẫu miễn phí"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#146c32]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#d91f26] hover:bg-[#b5161c] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-colors"
                >
                  ĐẶT MUA / ĐĂNG KÝ NHẬN MẪU THỬ
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
