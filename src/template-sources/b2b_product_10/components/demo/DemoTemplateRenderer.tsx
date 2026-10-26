"use client";

import React, { useState } from "react";
import {
  Search,
  Sprout,
  Wheat,
  Fish,
  PiggyBank,
  Recycle,
  Star,
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct10DefaultData,
  type B2BProduct10TemplateData,
  type B2BProduct10ExclusiveProduct
} from "@/template-sources/b2b_product_10/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: B2BProduct10TemplateData = adaptClonedTemplateData(
    b2bProduct10DefaultData,
    incomingData
  );

  const [activeSectorId, setActiveSectorId] = useState<string>(
    data.sectorCircles?.[0]?.id || "sec-1"
  );
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] =
    useState<B2BProduct10ExclusiveProduct | null>(null);
  const [supportModalOpen, setSupportModalOpen] = useState<boolean>(false);
  const [supportSent, setSupportSent] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "demonhunterg@gmail.com";
  const secondaryEmail = data.business.email?.[1] || "mon@mona.media";
  const brandName = data.business.name || "Bio-Mona Vietnam";

  const testimonials = data.testimonials || [];
  const currentTestimonial =
    testimonials[activeTestimonialIdx] || testimonials[0];

  const renderBrandLogo = (darkFooter = false) => {
    if (data.business.logo) {
      return (
        <img
          src={data.business.logo}
          alt={brandName}
          className="h-9 w-auto object-contain"
        />
      );
    }
    return (
      <span className="inline-flex items-center text-2xl sm:text-3xl font-extrabold tracking-tight">
        <span className="text-[#82c341]">Bi</span>
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#82c341] text-[#82c341] mx-0.5">
          <Sprout className="w-3.5 h-3.5" />
        </span>
        <span className={darkFooter ? "text-white" : "text-[#16466d]"}>
          -Mona
        </span>
      </span>
    );
  };

  const renderSectorIcon = (type: string) => {
    const cls = "w-10 h-10 text-[#16466d] stroke-[1.5]";
    switch (type) {
      case "crop":
        return <Wheat className={cls} />;
      case "aqua":
        return <Fish className={cls} />;
      case "livestock":
        return <PiggyBank className={cls} />;
      default:
        return <Recycle className={cls} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#82c341] selection:text-white">
      {/* 1. HEADER */}
      <header className="sticky top-0 z-40 bg-[#f5f8f9]/95 backdrop-blur-sm border-b border-[#e5edf0]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <a href="#trang-chu" className="shrink-0">
            {renderBrandLogo(false)}
          </a>

          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-[#16466d]">
            <a
              href="#trang-chu"
              className="border border-[#16466d] rounded-full px-4 py-1.5 font-bold"
            >
              Trang chủ
            </a>
            <a
              href="#giai-phap"
              className="hover:text-[#82c341] transition-colors px-2 py-1"
            >
              Giới thiệu
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#82c341] transition-colors px-2 py-1"
            >
              Cửa hàng
            </a>
            <a
              href="#linh-vuc"
              className="hover:text-[#82c341] transition-colors px-2 py-1"
            >
              Kiến thức
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#82c341] transition-colors px-2 py-1"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#82c341] transition-colors px-2 py-1"
            >
              Liên hệ
            </a>
            <a
              href="#san-pham"
              aria-label="Tìm kiếm"
              className="p-1.5 hover:text-[#82c341]"
            >
              <Search className="w-4 h-4" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Mở menu"
            className="lg:hidden p-2 text-[#16466d]"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#e5edf0] px-6 py-4 space-y-2.5 text-xs font-bold text-[#16466d]">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#82c341]"
            >
              Trang chủ
            </a>
            <a
              href="#giai-phap"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giải pháp công nghệ
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Sản phẩm độc quyền
            </a>
            <a
              href="#linh-vuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Lĩnh vực hoạt động
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Thông tin kỹ thuật
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO + TECHNOLOGY SOLUTION UNIFIED SCIENTIFIC SECTION */}
      <section
        id="trang-chu"
        className="bg-[#f5f8f9] pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden"
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          {/* Top Hero Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#16466d] mb-2">
                {data.hero.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl font-black text-[#82c341] leading-[1.1] mb-6">
                {data.hero.title.includes(" ") ? (
                  <>
                    <span className="block">
                      {data.hero.title.split(" ")[0]}
                    </span>
                    <span className="block">
                      {data.hero.title.split(" ").slice(1).join(" ")}
                    </span>
                  </>
                ) : (
                  data.hero.title
                )}
              </h1>

              <blockquote className="border-l-2 border-[#16466d] pl-4 text-xs sm:text-sm italic text-[#16466d]/90 leading-relaxed mb-8 max-w-lg">
                {data.hero.subtitle}
              </blockquote>

              <a
                href={data.hero.ctaLink || "#giai-phap"}
                className="inline-block bg-[#16466d] hover:bg-[#0f3452] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shadow-md transition-colors"
              >
                {data.hero.ctaText || "TÌM HIỂU THÊM"}
              </a>
            </div>

            {/* Right Bio-Microbial Droplet Graphic */}
            <div className="lg:col-span-6 flex items-center justify-center relative min-h-[260px]">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Organic liquid shapes matching the reference screenshot */}
                <span className="w-28 h-16 rounded-full bg-gradient-to-tr from-[#0d3b66] to-[#2a6f97] rotate-45 shadow-lg" />
                <span className="w-8 h-8 rounded-full bg-[#1d4e89] absolute top-12 right-16" />
                <span className="w-6 h-6 rounded-full bg-[#f77f00] absolute bottom-20 right-8" />
                <span className="w-4 h-4 rounded-full bg-[#fcbf49] absolute top-6 left-1/2" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#e63946] absolute bottom-12 right-20" />
                <span className="w-3 h-3 rounded-full bg-[#2a9d8f] absolute bottom-16 left-20" />
              </div>
            </div>
          </div>

          {/* Technology Solution Sub-Section ("Giải pháp công nghệ") */}
          <div id="giai-phap" className="text-center pt-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16466d] mb-2">
              {data.business.aboutTitle || "Giải pháp công nghệ"}
            </h2>
            <p className="text-xl sm:text-2xl font-extrabold uppercase text-[#82c341] tracking-wide mb-12">
              {data.solutionFormula}
            </p>

            {/* 4 Circular Sector Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10">
              {(data.sectorCircles || []).map((sec) => {
                const isActive = activeSectorId === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setActiveSectorId(sec.id)}
                    className="group flex flex-col items-center cursor-pointer"
                  >
                    <div
                      className={`w-28 h-28 rounded-full border-2 flex items-center justify-center transition-all mb-3 ${
                        isActive
                          ? "border-[#16466d] bg-white shadow-lg scale-105"
                          : "border-[#16466d]/70 bg-white/70 group-hover:bg-white group-hover:scale-105"
                      }`}
                    >
                      <div className="w-24 h-24 rounded-full border border-[#16466d]/30 flex items-center justify-center">
                        {renderSectorIcon(sec.iconType)}
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#222222] group-hover:text-[#16466d]">
                      {sec.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Green Divider Line */}
            <div className="w-full max-w-2xl mx-auto h-[1.5px] bg-[#82c341] mb-6" />

            <p className="max-w-3xl mx-auto text-xs sm:text-[13px] text-[#444444] leading-relaxed mb-8">
              {data.solutionSummary}
            </p>

            <h3 className="text-sm sm:text-base font-extrabold uppercase text-[#16466d] max-w-lg mx-auto leading-snug mb-6">
              {data.solutionPromise}
            </h3>

            {/* 2 Side-by-Side CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#san-pham"
                className="bg-[#1c4f78] hover:bg-[#133b5c] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shadow transition-colors"
              >
                THAM KHẢO GIẢI PHÁP
              </a>
              <button
                type="button"
                onClick={() => {
                  setSupportModalOpen(true);
                  setSupportSent(false);
                }}
                className="bg-[#82c341] hover:bg-[#6fb030] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shadow transition-colors"
              >
                YÊU CẦU HỖ TRỢ KỸ THUẬT
              </button>
            </div>

            <div className="w-36 mx-auto h-[1.5px] bg-[#82c341] mt-8" />
          </div>
        </div>
      </section>

      {/* 3. EXCLUSIVE PRODUCTS ("SẢN PHẨM ĐỘC QUYỀN" — 5 Items) */}
      <section id="san-pham" className="py-14 sm:py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="flex-1 h-[1px] bg-[#e5e5e5]" />
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#16466d] tracking-wide shrink-0">
              SẢN PHẨM ĐỘC QUYỀN
            </h2>
            <span className="flex-1 h-[1px] bg-[#e5e5e5]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {(data.exclusiveProducts || []).map((prod) => (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="group cursor-pointer flex flex-col items-center text-center"
              >
                {/* Bio-Product Bag/IBC Packaging Mockup */}
                <div className="w-full aspect-square bg-[#f9fbfc] border border-[#eaeff2] p-4 mb-3 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#82c341] transition-colors">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-3 bottom-3 bg-white/95 border border-[#16466d]/20 p-2 shadow-xs text-left">
                    <span className="block text-[8px] font-black uppercase text-[#82c341]">
                      {prod.origin}
                    </span>
                    <span className="block text-[9px] font-extrabold text-[#16466d] truncate">
                      {prod.name}
                    </span>
                    <span className="block text-[8px] text-[#666666] truncate">
                      {prod.packaging}
                    </span>
                  </div>
                </div>

                <h3 className="text-[11px] font-bold uppercase text-[#333333] group-hover:text-[#16466d] line-clamp-1 mb-1">
                  {prod.name}
                </h3>
                <p className="text-xs font-extrabold text-[#82c341]">
                  {prod.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FIELDS OF ACTIVITY ("LĨNH VỰC HOẠT ĐỘNG" — 6 Tiles) */}
      <section id="linh-vuc" className="pb-12 bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="flex-1 h-[1px] bg-[#e5e5e5]" />
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#16466d] tracking-wide shrink-0">
              LĨNH VỰC HOẠT ĐỘNG
            </h2>
            <span className="flex-1 h-[1px] bg-[#e5e5e5]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {(data.activityTiles || []).map((tile) => (
              <div
                key={tile.id}
                className="group relative h-24 sm:h-28 overflow-hidden bg-zinc-900 rounded-xs"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    {tile.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DARK NAVY PATTERNED TESTIMONIAL BANNER */}
      <section className="bg-[#0b1d2c] text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="max-w-[920px] mx-auto px-4 sm:px-6">
          {currentTestimonial && (
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.author}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#82c341] shrink-0"
              />
              <div>
                <div className="flex items-center gap-1 mb-2 justify-center sm:justify-start">
                  {[1, 2, 3, 4, 5].map((st) => (
                    <Star
                      key={st}
                      className={`w-3.5 h-3.5 ${
                        st <= (currentTestimonial.rating || 5)
                          ? "fill-[#82c341] text-[#82c341]"
                          : "text-zinc-500"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm italic text-white/95 leading-relaxed mb-2 text-center sm:text-left">
                  “{currentTestimonial.content}”
                </p>
                <p className="text-xs font-bold text-white text-center sm:text-left">
                  {currentTestimonial.author}
                </p>
              </div>
            </div>
          )}

          {/* Slider Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTestimonialIdx(idx)}
                aria-label={`Đánh giá ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeTestimonialIdx === idx
                    ? "bg-white"
                    : "border border-white/60 bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. BIO-MONA INFORMATION & ARTICLES ("THÔNG TIN BIO-MONA™") */}
      <section
        id="tin-tuc"
        className="relative py-14 sm:py-16 bg-[#2c3b19] text-white overflow-hidden"
      >
        <img
          src={data.infoSectionBg}
          alt={data.infoBoxTitle}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Dark Info Box */}
            <div className="lg:col-span-5 bg-black/65 backdrop-blur-xs p-6 sm:p-8 flex flex-col justify-center border border-white/10">
              <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white mb-4">
                {data.infoBoxTitle}
              </h2>
              <p className="border-l-2 border-[#82c341] pl-4 text-xs sm:text-[13px] italic text-white/90 leading-relaxed">
                {data.infoBoxDescription}
              </p>
            </div>

            {/* Right 3 Article Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {(data.news || []).map((post) => (
                <article key={post.id} className="group flex flex-col">
                  <div className="aspect-square overflow-hidden bg-white p-1 mb-2.5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#82c341] transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                  <span className="text-[10px] text-white/70 mb-1.5">
                    {post.date}
                  </span>
                  <p className="text-[11px] text-white/85 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DARK CHARCOAL FOOTER */}
      <footer
        id="lien-he"
        className="bg-[#2b2e33] text-zinc-300 pt-12 pb-6 text-xs"
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-3 space-y-2.5">
              <div className="mb-3">{renderBrandLogo(true)}</div>
              <p className="flex items-start gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-zinc-400">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-start gap-2 text-zinc-400">
                <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  {primaryEmail}
                  <br />
                  {secondaryEmail}
                </span>
              </p>
            </div>

            {/* Col 2: SẢN PHẨM */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold uppercase mb-3">SẢN PHẨM</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#san-pham" className="hover:text-[#82c341]">
                    Thực phẩm
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#82c341]">
                    Thủy sản
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#82c341]">
                    Nông nghiệp
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#82c341]">
                    Chăn nuôi
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#82c341]">
                    Môi trường
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: DANH MỤC */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold uppercase mb-3">DANH MỤC</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#trang-chu" className="text-[#82c341]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#giai-phap" className="hover:text-[#82c341]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#82c341]">
                    Cửa hàng
                  </a>
                </li>
                <li>
                  <a href="#linh-vuc" className="hover:text-[#82c341]">
                    Kiến thức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#82c341]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: DỊCH VỤ */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold uppercase mb-3">DỊCH VỤ</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#giai-phap" className="hover:text-[#82c341]">
                    Thực phẩm sạch
                  </a>
                </li>
                <li>
                  <a href="#giai-phap" className="hover:text-[#82c341]">
                    Thủy sản công nghệ
                  </a>
                </li>
                <li>
                  <a href="#giai-phap" className="hover:text-[#82c341]">
                    Nông nghiệp hữu cơ
                  </a>
                </li>
                <li>
                  <a href="#giai-phap" className="hover:text-[#82c341]">
                    Chăn nuôi an toàn
                  </a>
                </li>
                <li>
                  <a href="#giai-phap" className="hover:text-[#82c341]">
                    Xử lý môi trường
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: ĐĂNG KÝ */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold uppercase mb-3">ĐĂNG KÝ</h3>
              <p className="text-zinc-400 mb-3 leading-relaxed">
                Đăng ký để nhận được tài liệu kỹ thuật vi sinh và thông tin mới
                nhất từ chúng tôi.
              </p>

              {newsletterDone ? (
                <div className="bg-[#82c341]/20 border border-[#82c341] text-white p-2.5 rounded text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#82c341]" />
                  <span>Đã đăng ký nhận bản tin kỹ thuật!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="relative mb-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="w-full bg-white text-[#222222] rounded px-3 py-2 pr-9 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Đăng ký"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#82c341]"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="flex items-center gap-3 text-zinc-400 pt-1">
                <a href="#lien-he" className="hover:text-white">
                  f
                </a>
                <a href="#lien-he" className="hover:text-white">
                  IG
                </a>
                <a href="#lien-he" className="hover:text-white">
                  𝕏
                </a>
                <a href="#lien-he" className="hover:text-white">
                  ▶
                </a>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-white/10 text-center text-[11px] text-zinc-400">
            © Bản quyền thuộc về {brandName}. Thiết kế website bởi{" "}
            <span className="text-white font-semibold">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* FLOATING MESSENGER ICON */}
      <button
        type="button"
        onClick={() => {
          setSupportModalOpen(true);
          setSupportSent(false);
        }}
        aria-label="Hỗ trợ kỹ thuật"
        className="fixed right-4 bottom-6 z-40 w-10 h-10 rounded-full bg-[#0084ff] text-white shadow-lg flex items-center justify-center"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </button>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full rounded-md overflow-hidden shadow-2xl border-t-4 border-[#16466d]"
          >
            <div className="aspect-video relative bg-[#f5f8f9]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
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
            <div className="p-5">
              <span className="text-[11px] font-bold uppercase text-[#82c341]">
                {selectedProduct.origin} • {selectedProduct.packaging}
              </span>
              <h3 className="text-lg font-extrabold text-[#16466d] mt-1 mb-1">
                {selectedProduct.name}
              </h3>
              <p className="text-sm font-extrabold text-[#82c341] mb-3">
                {selectedProduct.price}
              </p>
              <p className="text-xs text-[#555555] leading-relaxed mb-4">
                {selectedProduct.description}
              </p>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct(null);
                    setSupportModalOpen(true);
                    setSupportSent(false);
                  }}
                  className="flex-1 bg-[#16466d] text-white text-xs font-bold uppercase py-2.5 rounded"
                >
                  Đặt Hàng Đại Lý B2B
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="bg-[#82c341] text-white text-xs font-bold uppercase px-4 py-2.5 rounded"
                >
                  Gọi Kỹ Sư
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TECHNICAL SUPPORT MODAL */}
      {supportModalOpen && (
        <div
          onClick={() => setSupportModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full p-6 rounded-md shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-[#16466d]">
                Yêu Cầu Hỗ Trợ Kỹ Thuật & Báo Giá Đại Lý
              </h3>
              <button
                type="button"
                onClick={() => setSupportModalOpen(false)}
                className="text-zinc-400 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {supportSent ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#82c341] mx-auto" />
                <p className="text-sm font-bold text-[#16466d]">
                  Đã gửi yêu cầu hỗ trợ kỹ thuật!
                </p>
                <p className="text-xs text-[#666666]">
                  Kỹ sư nông nghiệp của {brandName} sẽ liên hệ hướng dẫn quy
                  trình sử dụng chi tiết.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSupportSent(true);
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ tên chủ trang trại / đại lý"
                  className="w-full border border-zinc-300 rounded px-3.5 py-2.5 text-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ"
                  className="w-full border border-zinc-300 rounded px-3.5 py-2.5 text-xs"
                />
                <select className="w-full border border-zinc-300 rounded px-3.5 py-2.5 text-xs">
                  <option>Lĩnh vực Nông nghiệp & Cây trồng</option>
                  <option>Lĩnh vực Thủy sản (Tôm / Cá)</option>
                  <option>Lĩnh vực Chăn nuôi gia súc, gia cầm</option>
                  <option>Lĩnh vực Xử lý môi trường</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#82c341] hover:bg-[#6fb030] text-white text-xs font-bold uppercase py-3 rounded"
                >
                  GỬI YÊU CẦU NGAY
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
