"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Sliders,
  PenTool,
  Truck,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Mail,
  ArrowUp,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct13DefaultData,
  type B2B13Data,
  type B2B13CollectionItem
} from "@/template-sources/b2b_product_13/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: B2B13Data = adaptClonedTemplateData(
    b2bProduct13DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [selectedPaletteColor, setSelectedPaletteColor] = useState(
    data.consultSection.paletteSwatches[0] || "#ea733d"
  );
  const [activeConsultOption, setActiveConsultOption] = useState(0);
  const [selectedCollection, setSelectedCollection] =
    useState<B2B13CollectionItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Quote Form State
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteQty, setQuoteQty] = useState("100 áo");
  const [quoteNote, setQuoteNote] = useState("");
  const [quoteSent, setQuoteSent] = useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterAgreed, setNewsletterAgreed] = useState(true);
  const [newsletterSent, setNewsletterSent] = useState(false);

  const testimonials =
    data.testimonials || b2bProduct13DefaultData.testimonials || [];
  const activeReview = testimonials[activeTestimonialIdx] || testimonials[0];
  const newsList = data.news || b2bProduct13DefaultData.news || [];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSent(true);
    setQuoteName("");
    setQuotePhone("");
    setQuoteNote("");
    setTimeout(() => {
      setQuoteSent(false);
      setQuoteModalOpen(false);
    }, 3500);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSent(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  const renderCmykLogo = (darkText = true) => (
    <div className="flex items-center gap-2.5">
      <div className="relative w-9 h-9 flex items-center justify-center">
        <span className="w-5 h-5 rounded-full bg-[#ffbe0b] absolute top-0 left-0 mix-blend-multiply opacity-90" />
        <span className="w-5 h-5 rounded-full bg-[#f06292] absolute top-0.5 right-0 mix-blend-multiply opacity-90" />
        <span className="w-5 h-5 rounded-full bg-[#00a8e8] absolute bottom-0 left-1.5 mix-blend-multiply opacity-90" />
      </div>
      <div>
        <span
          className={`text-lg font-extrabold tracking-tight block leading-none ${
            darkText ? "text-[#111827]" : "text-white"
          }`}
        >
          {data.business.name}
        </span>
        <span className="text-[10px] text-slate-400 block mt-0.5">
          Mona Media
        </span>
      </div>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#18181b] font-sans selection:bg-[#ec6ead] selection:text-white"
    >
      {/* 1. CLEAN WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
          <a href="#top">{renderCmykLogo(true)}</a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600">
            <a
              href="#top"
              className="text-[#ea733d] border-b-2 border-[#ea733d] pb-1"
            >
              Trang chủ
            </a>
            <a
              href="#value-section"
              className="hover:text-[#ea733d] transition-colors pb-1"
            >
              Giới thiệu
            </a>
            <a
              href="#promo-section"
              className="hover:text-[#ea733d] transition-colors pb-1"
            >
              Dịch vụ
            </a>
            <a
              href="#collection"
              className="hover:text-[#ea733d] transition-colors pb-1"
            >
              Sản phẩm
            </a>
            <a
              href="#news"
              className="hover:text-[#ea733d] transition-colors pb-1"
            >
              Tin tức
            </a>
            <a
              href="#consult-section"
              className="hover:text-[#ea733d] transition-colors pb-1"
            >
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-4 text-slate-700">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("collection")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="p-1.5 hover:text-[#ea733d]"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="relative p-1.5 hover:text-[#ea733d]"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#ea733d] text-white text-[9px] font-bold flex items-center justify-center">
                0
              </span>
            </button>
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="hidden sm:inline-flex p-1.5 hover:text-[#ea733d]"
              aria-label="Tài khoản"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-semibold text-slate-700">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#ea733d]"
            >
              Trang chủ
            </a>
            <a
              href="#value-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Giới thiệu
            </a>
            <a
              href="#promo-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Dịch vụ
            </a>
            <a
              href="#collection"
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
              href="#consult-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (CUSTOM APPAREL & INDUSTRIAL PRINTING SHOWCASE) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff5f7] via-white to-[#fff8f1] py-16 sm:py-24 px-4 sm:px-8">
        {/* Decorative CMYK Confetti Shapes */}
        <span className="hidden sm:block w-5 h-5 rounded-tl-full bg-[#ffbe0b] absolute top-8 left-1/4" />
        <span className="hidden sm:block w-4 h-4 rounded-full bg-[#00a8e8] absolute top-5 left-1/2" />
        <span className="hidden sm:block w-7 h-7 rounded-br-full bg-[#f06292]/70 absolute top-12 right-12" />
        <span className="hidden sm:block w-8 h-8 rounded-tl-full bg-[#f06292]/70 absolute bottom-8 left-4" />
        <span className="hidden sm:block w-5 h-5 rounded-full bg-[#ffbe0b] absolute bottom-6 left-1/2" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 block">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#111827] leading-tight">
              Dịch vụ <span className="text-[#ec6ead]">in áo</span> <br />
              chuyên nghiệp
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {data.hero.description}
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="bg-[#ea733d] hover:bg-[#d85f29] text-white text-xs font-bold px-8 py-3 rounded-full shadow-lg shadow-orange-500/25 transition-all"
              >
                {data.hero.ctaText || "Đặt ngay"}
              </button>
            </div>
          </div>

          {/* Right Hero 3D T-Shirt Showcase + Floating Upload & Order Cards */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#c084fc] via-[#f472b6] to-[#fbcfe8] p-4 shadow-2xl flex items-center justify-center">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl shadow-xl -rotate-3"
              />

              {/* Floating Bottom-Left Upload Pill */}
              <div className="absolute bottom-5 -left-6 sm:-left-10 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-3 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-pink-50 text-[#ec6ead] flex items-center justify-center text-xs font-bold">
                  AI
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-slate-400 block">
                    File thiết kế của bạn:
                  </span>
                  <span className="text-[11px] font-bold text-[#111827]">
                    {data.heroUploadCard.fileName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-[#ea733d] text-white text-[9px] font-extrabold uppercase px-3 py-1.5 rounded-full"
                >
                  TẢI FILE
                </button>
              </div>

              {/* Floating Top-Right Mini Order Card */}
              <div className="absolute top-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-3 w-32 text-center border border-slate-100">
                <img
                  src={data.heroUploadCard.secondaryImage}
                  alt={data.heroUploadCard.productTitle}
                  className="w-16 h-16 object-cover rounded-xl mx-auto mb-1.5"
                />
                <p className="text-[10px] font-bold text-[#111827] truncate">
                  {data.heroUploadCard.productTitle}
                </p>
                <div className="flex items-center justify-center gap-0.5 my-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current" />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full bg-[#ea733d] text-white text-[9px] font-extrabold uppercase py-1 rounded-full"
                >
                  ĐẶT IN
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SẢN PHẨM GIÁ TRỊ ("Giá trị Mona mang lại" — 3 FEATURE COLUMNS) */}
      <section id="value-section" className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 block">
            SẢN PHẨM GIÁ TRỊ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mt-1.5 mb-12">
            Giá trị {data.business.name} mang lại
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.valueCards.map((vc) => (
              <div
                key={vc.id}
                className="flex flex-col items-center text-center space-y-3 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#fdf2f8] text-[#ec6ead] flex items-center justify-center group-hover:bg-[#ec6ead] group-hover:text-white transition-colors">
                  {vc.icon === "quality" && <Sliders className="w-6 h-6" />}
                  {vc.icon === "design" && <PenTool className="w-6 h-6" />}
                  {vc.icon === "shipping" && <Truck className="w-6 h-6" />}
                </div>
                <h3 className="text-sm font-extrabold text-[#111827]">
                  {vc.title}
                </h3>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                  {vc.description}
                </p>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#ea733d] group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHƯƠNG TRÌNH ƯU ĐÃI ("Thiết kế in ấn hiện đại chất lượng") */}
      <section id="promo-section" className="relative py-16 px-4 sm:px-8">
        {/* Right-side soft lavender-gray background block */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-2/3 bg-[#f6f5fa] -z-10" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 2 Tall Printed Shirt Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#f48fb1] to-[#f8bbd0] p-6 h-96 flex items-center justify-center shadow-lg">
              <img
                src={data.promoSection.pinkCardImage}
                alt="Mẫu áo in kỹ thuật số 1"
                className="w-full h-full object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#5c6bc0] to-[#9fa8da] p-6 h-96 flex items-center justify-center shadow-lg">
              <img
                src={data.promoSection.purpleCardImage}
                alt="Mẫu áo in kỹ thuật số 2"
                className="w-full h-full object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Copy + 3 Checkmarks + Pink Pill Button */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 block">
              {data.promoSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] leading-snug">
              {data.promoSection.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {data.business.aboutText?.[0] || data.promoSection.description}
            </p>

            <div className="space-y-2.5 pt-1">
              {data.promoSection.bullets.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs font-semibold text-slate-700"
                >
                  <Check className="w-4 h-4 text-[#ea733d] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <a
                href="#collection"
                className="inline-block bg-[#ec6ead] hover:bg-[#db5398] text-white text-xs font-bold px-8 py-3 rounded-full shadow-md shadow-pink-500/20 transition-colors"
              >
                {data.promoSection.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MÀU SẮC HÀI HÒA ("Bộ sưu tập thiết kế nổi tiếng" — 8 COLORFUL BENTO CARDS) */}
      <section id="collection" className="bg-white py-20 px-4 sm:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 block">
              MÀU SẮC HÀI HÒA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mt-1">
              Bộ sưu tập thiết kế nổi tiếng
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.collectionItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCollection(item)}
                className="group cursor-pointer rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="h-52 rounded-xl overflow-hidden bg-white/15 backdrop-blur-sm p-2 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block">
                    {item.technique}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER TESTIMONIAL CAROUSEL */}
      <section className="bg-gradient-to-b from-white via-[#fff9fb] to-white py-16 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          {activeReview && (
            <>
              <img
                src={
                  activeReview.avatar ||
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
                }
                alt={activeReview.author}
                className="w-14 h-14 rounded-full object-cover mx-auto shadow-md border-2 border-[#ec6ead]"
              />

              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonialIdx((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#ea733d] hover:text-[#ea733d] shrink-0"
                  aria-label="Trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                  {activeReview.content}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonialIdx(
                      (prev) => (prev + 1) % testimonials.length
                    )
                  }
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#ea733d] hover:text-[#ea733d] shrink-0"
                  aria-label="Sau"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-1">
                <Quote className="w-5 h-5 text-[#ec6ead] mx-auto" />
                <h3 className="text-xs font-extrabold text-[#111827]">
                  {activeReview.author}
                </h3>
                <p className="text-[11px] text-slate-400">{activeReview.role}</p>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`w-2 h-2 rounded-full ${
                      idx === activeTestimonialIdx
                        ? "bg-[#ea733d]"
                        : "bg-slate-200"
                    }`}
                    aria-label={t.author}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* 7. THIẾT KẾ HIỆN ĐẠI ("Liên hệ tư vấn" + COLOR PALETTE PICKER + 6 PARTNER LOGOS) */}
      <section
        id="consult-section"
        className="bg-[#f6f5fa] py-20 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Mockup Shirt + Interactive Color Swatch Picker */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#a855f7] to-[#f472b6] p-4 flex items-center justify-center shadow-xl">
                <div
                  className="w-full h-full rounded-full overflow-hidden p-2 transition-colors duration-300"
                  style={{ backgroundColor: `${selectedPaletteColor}33` }}
                >
                  <img
                    src={data.consultSection.mockupImage}
                    alt="Mockup in áo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Floating Color Palette Card */}
                <div className="absolute bottom-3 left-0 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-600 block mb-1.5">
                    Bảng màu in
                  </span>
                  <div className="flex items-center gap-2">
                    {data.consultSection.paletteSwatches.map((hex) => (
                      <button
                        key={hex}
                        type="button"
                        onClick={() => setSelectedPaletteColor(hex)}
                        className={`w-4 h-4 rounded-full transition-transform ${
                          selectedPaletteColor === hex
                            ? "scale-125 ring-2 ring-offset-1 ring-slate-400"
                            : ""
                        }`}
                        style={{ backgroundColor: hex }}
                        aria-label={`Chọn màu ${hex}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Consult Options */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 block">
                {data.consultSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                {data.consultSection.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                {data.consultSection.description}
              </p>

              <div className="divide-y divide-slate-200 max-w-md pt-2">
                {data.consultSection.options.map((opt, idx) => (
                  <div
                    key={opt.num}
                    onClick={() => setActiveConsultOption(idx)}
                    className="py-3.5 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-slate-400">
                        {opt.num}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#111827]">
                        {opt.title}
                      </span>
                    </div>
                    {activeConsultOption === idx && (
                      <p className="text-xs text-slate-500 mt-1.5 pl-8 leading-relaxed">
                        {opt.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-[#ea733d] hover:bg-[#d85f29] text-white text-xs font-bold px-7 py-3 rounded-full shadow-md shadow-orange-500/20 transition-colors"
                >
                  {data.consultSection.ctaText}
                </button>
              </div>
            </div>
          </div>

          {/* 6 Partner Brand Logos */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {data.partnerLogos.map((logo, i) => (
              <div
                key={i}
                className="text-slate-400 hover:text-slate-700 font-black tracking-widest text-sm sm:text-base transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TIN TỨC MỚI NHẤT ("Thông tin hữu ích" — 3 VIETNAMESE BLOG CARDS) */}
      <section id="news" className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 block">
              TIN TỨC MỚI NHẤT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mt-1">
              Thông tin hữu ích
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {newsList.map((post) => (
              <article key={post.id} className="group space-y-3">
                <div className="h-48 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <span className="w-5 h-px bg-slate-300" />
                  <span className="text-slate-600">{post.category}</span>
                  <span>• {post.date}</span>
                </div>
                <h3 className="text-sm font-extrabold text-[#111827] group-hover:text-[#ea733d] transition-colors leading-snug">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DARK CHARCOAL FOOTER (#151515) */}
      <footer className="bg-[#151515] text-white pt-16 pb-8 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Top Row: Logo Left + Headline Right */}
          <div className="pb-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5">{renderCmykLogo(false)}</div>
            <div className="md:col-span-7">
              <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                Chuyên in ấn vải hàng đầu, mang đến chất lượng vượt trội và thiết
                kế tuyệt đẹp.
              </h3>
            </div>
          </div>

          {/* Middle Row: Newsletter Left + 3 Columns Right */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10 text-xs">
            <div className="md:col-span-5 space-y-3">
              <h4 className="font-bold text-white">Đăng ký tin tức</h4>
              <form
                onSubmit={handleNewsletter}
                className="flex items-center border-b border-white/20 pb-2"
              >
                <Mail className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập địa chỉ Email..."
                  className="bg-transparent text-xs text-white placeholder:text-slate-500 flex-1 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-slate-300 hover:text-[#ea733d]"
                  aria-label="Gửi"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <label className="flex items-center gap-2 text-[11px] text-slate-400 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newsletterAgreed}
                  onChange={(e) => setNewsletterAgreed(e.target.checked)}
                  className="rounded border-slate-600"
                />
                <span>
                  Tôi đồng ý với <u className="text-slate-300">chính sách bảo mật</u>
                </span>
              </label>
              {newsletterSent && (
                <p className="text-[11px] text-emerald-400">
                  Cảm ơn bạn đã đăng ký nhận bảng giá in ấn mới nhất!
                </p>
              )}
            </div>

            <div className="md:col-span-7 grid grid-cols-3 gap-6">
              <div className="space-y-2.5">
                <h4 className="font-bold text-white">Mạng xã hội</h4>
                <ul className="space-y-2 text-slate-400 text-[11px]">
                  <li>
                    <a href="#top" className="hover:text-white">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="hover:text-white">
                      Dribbble
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="hover:text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-bold text-white">Danh mục</h4>
                <ul className="space-y-2 text-slate-400 text-[11px]">
                  <li>
                    <a href="#value-section" className="hover:text-white">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="#promo-section" className="hover:text-white">
                      Dịch vụ
                    </a>
                  </li>
                  <li>
                    <a href="#collection" className="hover:text-white">
                      Sản phẩm
                    </a>
                  </li>
                  <li>
                    <a href="#news" className="hover:text-white">
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a href="#consult-section" className="hover:text-white">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-bold text-white">Liên kết</h4>
                <ul className="space-y-2 text-slate-400 text-[11px]">
                  <li>
                    <a href="#consult-section" className="hover:text-white">
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a href="#consult-section" className="hover:text-white">
                      Chính sách hoàn trả
                    </a>
                  </li>
                  <li>
                    <a href="#consult-section" className="hover:text-white">
                      Chính sách giao hàng
                    </a>
                  </li>
                  <li>
                    <a href="#consult-section" className="hover:text-white">
                      Chính sách thanh toán
                    </a>
                  </li>
                  <li>
                    <a href="#consult-section" className="hover:text-white">
                      Điều khoản dịch vụ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-[11px] text-slate-500">
            © Thiết kế và lập trình bởi {data.business.name}
          </div>
        </div>

        <a
          href="#top"
          className="fixed bottom-5 right-5 w-9 h-9 rounded-full bg-[#ea733d] text-white shadow-lg flex items-center justify-center hover:bg-[#d85f29] z-30"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </footer>

      {/* COLLECTION ITEM MODAL */}
      {selectedCollection && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelectedCollection(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="p-6 flex items-center justify-center relative h-60"
              style={{ backgroundColor: selectedCollection.bgColor }}
            >
              <img
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="h-48 w-48 object-cover rounded-2xl shadow-lg"
              />
              <button
                type="button"
                onClick={() => setSelectedCollection(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ec6ead]">
                {selectedCollection.technique}
              </span>
              <h3 className="text-lg font-extrabold text-[#111827]">
                {selectedCollection.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Nhận gia công in ấn theo file thiết kế riêng trên chất liệu vải
                Cotton 100% 2 chiều / 4 chiều định lượng 250gsm cao cấp.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCollection(null);
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-[#ea733d] text-white text-xs font-bold py-3 rounded-full"
              >
                Nhận Báo Giá Mẫu In Này
              </button>
            </div>
          </div>
        </div>
      )}

      {/* B2B PRINT ORDER / QUOTE MODAL */}
      {quoteModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setQuoteModalOpen(false)}
        >
          <div
            className="bg-white max-w-md w-full rounded-3xl p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-[#111827]">
                Đặt In & Nhận Báo Giá Xưởng
              </h3>
              <button
                type="button"
                onClick={() => setQuoteModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {quoteSent ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <p className="text-sm font-bold text-[#111827]">
                  Đã gửi yêu cầu báo giá in ấn!
                </p>
                <p className="text-xs text-slate-500">
                  Kỹ thuật viên của {data.business.name} sẽ liên hệ gửi mockup
                  miễn phí cho bạn trong 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-3 text-xs">
                <input
                  type="text"
                  required
                  value={quoteName}
                  onChange={(e) => setQuoteName(e.target.value)}
                  placeholder="Họ và tên / Tên doanh nghiệp"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ea733d]"
                />
                <input
                  type="tel"
                  required
                  value={quotePhone}
                  onChange={(e) => setQuotePhone(e.target.value)}
                  placeholder="Số điện thoại Zalo nhận mockup"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ea733d]"
                />
                <input
                  type="text"
                  value={quoteQty}
                  onChange={(e) => setQuoteQty(e.target.value)}
                  placeholder="Số lượng dự kiến (VD: 50 áo, 500 áo...)"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ea733d]"
                />
                <textarea
                  rows={3}
                  value={quoteNote}
                  onChange={(e) => setQuoteNote(e.target.value)}
                  placeholder="Yêu cầu công nghệ in (DTG, in lụa, in PET, thêu logo...)"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#ea733d]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#ea733d] hover:bg-[#d85f29] text-white font-bold py-3 rounded-full shadow"
                >
                  Gửi Yêu Cầu Thiết Kế Mẫu Miễn Phí
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
