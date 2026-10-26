"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  ChevronRight,
  UtensilsCrossed,
  Phone,
  Send,
  ArrowUp,
  CheckCircle2,
  X,
  Menu,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct19DefaultData,
  B2bProduct19Data,
  AusFoodNewProduct,
} from "@/template-sources/b2b_product_19/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function AusFoodRedBadge({
  brandName,
  large = false,
}: {
  brandName: string;
  large?: boolean;
}) {
  return (
    <a
      href="#"
      className={`inline-flex items-center justify-center bg-[#d9232a] text-white font-black uppercase tracking-wider rounded-xs shadow-sm select-none ${
        large ? "px-6 py-2.5 text-lg sm:text-xl" : "px-3.5 py-1.5 text-xs"
      }`}
    >
      {brandName}
    </a>
  );
}

function ForkKnifeDivider({ light = false }: { light?: boolean }) {
  return (
    <div className="mt-2.5 flex items-center justify-center gap-3">
      <span
        className={`w-20 sm:w-28 h-px ${
          light ? "bg-white/40" : "bg-[#d9232a]/35"
        }`}
      />
      <UtensilsCrossed
        className={`w-4 h-4 ${light ? "text-white" : "text-[#d9232a]"}`}
      />
      <span
        className={`w-20 sm:w-28 h-px ${
          light ? "bg-white/40" : "bg-[#d9232a]/35"
        }`}
      />
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: B2bProduct19Data = adaptClonedTemplateData(
    b2bProduct19DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] =
    useState<AusFoodNewProduct | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSaved, setNewsletterSaved] = useState(false);
  const [footerEmail, setFooterEmail] = useState("");
  const [footerSaved, setFooterSaved] = useState(false);

  const shortHeroBrand =
    data.business.name.replace(/\s+STORE$/i, "").trim() || "AUSFOOD";

  const handleBannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSaved(true);
    setNewsletterEmail("");
  };

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail.trim()) return;
    setFooterSaved(true);
    setFooterEmail("");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-zinc-800 font-sans selection:bg-[#d9232a] selection:text-white overflow-x-hidden">
      {/* 1. DARK STEAKHOUSE HERO WITH OVERLAY NAVBAR */}
      <section className="relative min-h-[480px] sm:min-h-[540px] flex flex-col justify-between pb-24 overflow-hidden bg-black text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />

        {/* Overlay Header */}
        <header className="relative z-30 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-5">
          <div className="flex items-center justify-between gap-4">
            <AusFoodRedBadge brandName={data.business.name} />

            <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-zinc-200">
              <a
                href="#"
                className="bg-[#d9232a] text-white px-3.5 py-1.5 rounded-xs"
              >
                Trang chủ
              </a>
              <a
                href="#cam-ket"
                className="hover:text-[#d9232a] transition-colors"
              >
                Giới thiệu
              </a>
              <a
                href="#san-pham-chinh"
                className="hover:text-[#d9232a] transition-colors"
              >
                Sản phẩm ▾
              </a>
              <a
                href="#san-pham-moi"
                className="hover:text-[#d9232a] transition-colors"
              >
                Hàng mới về
              </a>
              <a
                href="#dang-ky"
                className="hover:text-[#d9232a] transition-colors"
              >
                Kiến thức ẩm thực
              </a>
              <a
                href="#lien-he"
                className="hover:text-[#d9232a] transition-colors"
              >
                Liên hệ
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center bg-zinc-800/85 border border-zinc-700 rounded-full px-3.5 py-1.5 w-44">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm..."
                  className="w-full bg-transparent text-xs text-white focus:outline-none"
                />
                <Search className="w-3.5 h-3.5 text-zinc-300" />
              </div>

              <button
                type="button"
                onClick={() => setCartCount((c) => c + 1)}
                aria-label="Giỏ hàng"
                className="relative p-2 text-white hover:text-[#d9232a] cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#d9232a] text-white text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded bg-zinc-800 text-white"
                aria-label="Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 bg-zinc-900/95 rounded-xl p-4 space-y-2 text-xs font-bold">
              <a href="#" className="block py-1 text-[#d9232a]">
                Trang chủ
              </a>
              <a href="#san-pham-chinh" className="block py-1">
                Sản phẩm
              </a>
              <a href="#san-pham-moi" className="block py-1">
                Hàng mới về
              </a>
              <a href="#cam-ket" className="block py-1">
                Giới thiệu
              </a>
              <a href="#lien-he" className="block py-1">
                Liên hệ
              </a>
            </div>
          )}
        </header>

        {/* Center Hero Typography */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center my-auto py-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-[0.35em] text-white select-none">
            {shortHeroBrand}
          </h1>
          <p className="mt-4 text-sm sm:text-lg font-medium uppercase tracking-widest text-zinc-100">
            {data.hero.subtitle}
          </p>
          <div className="mt-7">
            <a
              href={data.hero.ctaLink || "#san-pham-moi"}
              className="inline-flex items-center gap-1.5 bg-[#d9232a] hover:bg-[#b81b21] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg transition-colors"
            >
              <span>{data.hero.ctaText || "XEM THÊM"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. FLOATING 5 MEAT & SEAFOOD CATEGORY BAR */}
      <section className="relative z-20 -mt-14 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-zinc-100 px-6 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center">
              {data.categoryIcons.map((cat) => (
                <a
                  key={cat.id}
                  href="#san-pham-moi"
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-24 h-14 rounded-lg overflow-hidden mb-2 bg-zinc-50">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-xs font-semibold text-zinc-700 group-hover:text-[#d9232a]">
                    {cat.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. 2x2 BENTO GOURMET FOOD SHOWCASE + SẢN PHẨM CHÍNH HEADER */}
      <section id="san-pham-chinh" className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.bentoShowcases.map((box) => (
              <div
                key={box.id}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md bg-zinc-900"
              >
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-white">
                  <h3 className="text-sm font-extrabold">{box.title}</h3>
                  <p className="text-xs text-zinc-200 mt-0.5">{box.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* White Banner Card: SẢN PHẨM CHÍNH */}
          <div className="bg-white rounded-2xl shadow-xs py-7 px-4 text-center">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#b91c1c]">
              {data.mainProductsHeading}
            </h2>
            <ForkKnifeDivider />
          </div>
        </div>
      </section>

      {/* 4. SẢN PHẨM MỚI (Dark Leafy Background + White Red-Bordered 4x2 Grid) */}
      <section id="san-pham-moi" className="relative py-14 overflow-hidden">
        <img
          src={data.newProductsSection.backgroundImage}
          alt={data.newProductsSection.heading}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-white">
              {data.newProductsSection.heading}
            </h2>
            <ForkKnifeDivider light />
          </div>

          {/* White Product Container with Red Top Border */}
          <div className="bg-white border-t-4 border-[#d9232a] rounded-b-2xl shadow-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.newProductsSection.products.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod)}
                  className="bg-white rounded-xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col text-center cursor-pointer group"
                >
                  <div className="relative aspect-square overflow-hidden bg-zinc-100">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {!prod.inStock && (
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-2xs py-2.5 text-center">
                        <span className="text-xs font-extrabold uppercase text-zinc-900">
                          HẾT HÀNG
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-bold text-zinc-800 group-hover:text-[#d9232a] line-clamp-1">
                        {prod.title}
                      </h3>
                      <div className="mt-1 text-xs font-extrabold text-[#d9232a]">
                        {prod.price}
                      </div>
                    </div>

                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (prod.inStock) {
                            setCartCount((c) => c + 1);
                          } else {
                            setSelectedProduct(prod);
                          }
                        }}
                        className="bg-[#b91c1c] hover:bg-[#991b1b] text-white text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-xs transition-colors cursor-pointer"
                      >
                        {prod.ctaLabel}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BRAND PLEDGE & 5 AUSTRALIAN BEEF / HALAL CERTIFICATION LOGOS */}
      <section id="cam-ket" className="py-14 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Center Mascot Emblem */}
          <div className="w-16 h-16 rounded-full bg-white border-2 border-zinc-800 shadow-sm flex items-center justify-center mx-auto mb-5">
            <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
              <circle cx="16" cy="16" r="8" fill="#18181b" />
              <circle cx="48" cy="16" r="8" fill="#18181b" />
              <circle
                cx="32"
                cy="34"
                r="20"
                fill="#ffffff"
                stroke="#18181b"
                strokeWidth="3"
              />
              <ellipse cx="24" cy="32" rx="5" ry="6" fill="#18181b" />
              <ellipse cx="40" cy="32" rx="5" ry="6" fill="#18181b" />
              <circle cx="25" cy="31" r="1.5" fill="#ffffff" />
              <circle cx="41" cy="31" r="1.5" fill="#ffffff" />
              <ellipse cx="32" cy="40" rx="3.5" ry="2.2" fill="#18181b" />
            </svg>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 italic max-w-2xl mx-auto leading-relaxed">
            {data.brandPledgeSection.quote}
          </p>

          {/* 5 Certification Badges */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-6 items-center">
            {data.brandPledgeSection.certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col items-center justify-center p-3"
              >
                <div
                  className="text-sm sm:text-base font-black tracking-wider uppercase"
                  style={{ color: cert.color }}
                >
                  {cert.title}
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mt-0.5">
                  {cert.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DARK CULINARY NEWSLETTER BANNER (ĐĂNG KÝ NGAY) */}
      <section id="dang-ky" className="relative py-14 overflow-hidden">
        <img
          src={data.newsletterBanner.backgroundImage}
          alt={data.newsletterBanner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-normal uppercase tracking-wider">
            {data.newsletterBanner.title}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm font-medium uppercase tracking-wide text-zinc-200">
            {data.newsletterBanner.subtitle}
          </p>
          <div className="mt-2.5 flex items-center justify-center">
            <span className="w-12 h-0.5 bg-[#d9232a]" />
            <span className="w-64 sm:w-96 h-px bg-white/60" />
          </div>

          <form
            onSubmit={handleBannerSubmit}
            className="mt-6 max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-2.5"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder={data.newsletterBanner.placeholder}
              className="w-full flex-1 bg-white text-zinc-800 rounded-full px-5 py-2.5 text-xs focus:outline-none shadow"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-extrabold uppercase px-7 py-2.5 rounded-full shadow cursor-pointer shrink-0"
            >
              {data.newsletterBanner.buttonText}
            </button>
          </form>
          {newsletterSaved && (
            <p className="mt-2 text-xs font-bold text-amber-300">
              Cảm ơn bạn đã đăng ký nhận cẩm nang ẩm thực &amp; báo giá từ{" "}
              {data.business.name}!
            </p>
          )}
        </div>
      </section>

      {/* 7. 4-COLUMN LIGHT GRAY FOOTER + BLACK COPYRIGHT BAR */}
      <footer id="lien-he" className="bg-[#f5f5f5] text-zinc-600 pt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Brand & 3 Branches */}
            <div className="lg:col-span-4 space-y-2.5 text-[11px]">
              <div className="mb-3">
                <AusFoodRedBadge brandName={data.business.name} large />
              </div>
              {data.branches.map((br) => (
                <div key={br.id} className="space-y-0.5">
                  <p>
                    <strong className="text-zinc-900">{br.name}:</strong>{" "}
                    {br.address}
                  </p>
                  <p className="inline-flex items-center gap-1 text-zinc-700">
                    <Phone className="w-3 h-3 text-zinc-900" />
                    <strong>SĐT:</strong> {br.phone}
                  </p>
                </div>
              ))}
              <p>
                <strong className="text-zinc-900">Email:</strong>{" "}
                {data.business.email[0]}
              </p>
              <p>
                <strong className="text-zinc-900">Giờ làm việc:</strong>{" "}
                {data.business.workingHours}
              </p>
              <p>
                <strong className="text-zinc-900">Facebook:</strong>{" "}
                {data.business.facebookUrl || "fb.com/AusFoodStore"}
              </p>
            </div>

            {/* Col 2: SẢN PHẨM */}
            <div className="lg:col-span-3 text-[11px]">
              <h4 className="text-xs font-extrabold uppercase text-[#b91c1c] pb-2 border-b border-zinc-200 mb-3">
                SẢN PHẨM
              </h4>
              <ul className="space-y-1.5">
                {data.footerProductLinks.map((lnk, idx) => (
                  <li key={idx}>
                    <a
                      href="#san-pham-moi"
                      className="hover:text-[#d9232a] transition-colors"
                    >
                      {lnk}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: DANH MỤC */}
            <div className="lg:col-span-2 text-[11px]">
              <h4 className="text-xs font-extrabold uppercase text-[#b91c1c] pb-2 border-b border-zinc-200 mb-3">
                DANH MỤC
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#d9232a] font-bold">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#cam-ket" className="hover:text-[#d9232a]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham-chinh" className="hover:text-[#d9232a]">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#san-pham-moi" className="hover:text-[#d9232a]">
                    Hàng mới về
                  </a>
                </li>
                <li>
                  <a href="#dang-ky" className="hover:text-[#d9232a]">
                    Kiến thức ẩm thực
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#d9232a]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div className="lg:col-span-3 text-[11px] space-y-3">
              <h4 className="text-xs font-extrabold uppercase text-[#b91c1c] pb-2 border-b border-zinc-200 mb-3">
                ĐĂNG KÝ
              </h4>
              <p>
                Đăng ký để nhận được thông tin mới nhất và bảng giá sỉ Horeca từ
                chúng tôi.
              </p>
              <form
                onSubmit={handleFooterSubmit}
                className="flex items-center bg-white border border-zinc-200 rounded-full px-3.5 py-1.5"
              >
                <input
                  type="email"
                  required
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Email ..."
                  className="w-full text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Gửi"
                  className="text-[#d9232a] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {footerSaved && (
                <p className="text-[11px] font-bold text-[#d9232a]">
                  Đã đăng ký thành công!
                </p>
              )}

              <div className="flex items-center gap-2 pt-1">
                {[
                  { l: "f", bg: "bg-[#1877f2]" },
                  { l: "ig", bg: "bg-[#3b5998]" },
                  { l: "tw", bg: "bg-[#1da1f2]" },
                  { l: "yt", bg: "bg-[#ff0000]" },
                ].map((s) => (
                  <a
                    key={s.l}
                    href="#lien-he"
                    className={`w-6 h-6 rounded-full ${s.bg} text-white text-[10px] font-bold flex items-center justify-center uppercase`}
                  >
                    {s.l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-zinc-400 py-3 px-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between text-[11px]">
            <span className="mx-auto">
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-white">{data.business.name}</strong>
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Lên đầu trang"
              className="w-7 h-7 rounded-full border border-zinc-600 text-white flex items-center justify-center cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-56 bg-zinc-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>Xuất xứ: {selectedProduct.origin}</span>
                <span>Quy cách: {selectedProduct.weight}</span>
              </div>
              <h3 className="mt-1.5 text-base font-extrabold text-zinc-900">
                {selectedProduct.title}
              </h3>
              <div className="mt-1 text-lg font-extrabold text-[#d9232a]">
                {selectedProduct.price}
              </div>
              <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="text-xs font-bold text-zinc-500 px-4 py-2"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSelectedProduct(null);
                  }}
                  className="bg-[#d9232a] text-white text-xs font-extrabold uppercase px-5 py-2.5 rounded-xs cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 inline mr-1.5" />
                  Đặt Mua / Báo Giá Sỉ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
