"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronRight,
  Star,
  ArrowUpRight,
  Package,
  CreditCard,
  RotateCcw,
  Headphones,
  ArrowUp,
  X,
  CheckCircle2,
  Menu,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct17DefaultData,
  B2bProduct17Data,
  SpeakerHubAudioProduct,
} from "@/template-sources/b2b_product_17/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function SpeakerHubLogo({ brandName }: { brandName: string }) {
  return (
    <a href="#" className="inline-flex items-center gap-2.5 select-none">
      <div className="w-9 h-9 flex items-center justify-center relative shrink-0">
        <svg viewBox="0 0 40 36" className="w-9 h-8" fill="none">
          <polygon points="0,36 12,4 20,22 10,36" fill="#d97228" />
          <polygon points="40,36 28,4 20,22 30,36" fill="#18181b" />
          <polygon points="14,36 20,22 26,36" fill="#71717a" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-black tracking-tight text-zinc-800 lowercase">
          {brandName.toLowerCase()}
        </span>
        <span className="text-xs font-medium text-zinc-400 tracking-wide">
          speakerhub
        </span>
      </div>
    </a>
  );
}

function ProductGridSection({
  id,
  title,
  products,
  onSelectProduct,
  onAddCart,
}: {
  id?: string;
  title: string;
  products: SpeakerHubAudioProduct[];
  onSelectProduct: (p: SpeakerHubAudioProduct) => void;
  onAddCart: () => void;
}) {
  return (
    <section id={id} className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl font-extrabold text-zinc-900 mb-6">
          {title}
        </h2>

        <div className="bg-slate-50/70 rounded-3xl p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="bg-white rounded-2xl border border-slate-100 p-4 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all cursor-pointer group"
              >
                <div>
                  <div className="relative h-40 rounded-xl overflow-hidden bg-white mb-3 flex items-center justify-center">
                    <span className="absolute top-1.5 right-1.5 z-10 bg-[#d97228] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {prod.discountBadge}
                    </span>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-0.5 text-slate-300 text-[10px] mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-slate-400 ml-1">
                      ({prod.reviewCount})
                    </span>
                  </div>

                  <h3 className="text-xs font-semibold text-zinc-800 line-clamp-2 group-hover:text-[#d97228] min-h-[32px]">
                    {prod.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 flex items-end justify-between">
                  <div>
                    {prod.oldPrice ? (
                      <div className="text-[10px] text-slate-400 line-through">
                        {prod.oldPrice}
                      </div>
                    ) : (
                      <div className="text-[10px] text-slate-400">
                        {prod.pricePrefix}
                      </div>
                    )}
                    <div className="text-xs sm:text-sm font-extrabold text-[#e11d48]">
                      {prod.price}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddCart();
                    }}
                    aria-label="Thêm vào giỏ"
                    className="w-7 h-7 rounded-full bg-[#d97228] hover:bg-[#b85d1d] text-white flex items-center justify-center shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: B2bProduct17Data = adaptClonedTemplateData(
    b2bProduct17DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [selectedProduct, setSelectedProduct] =
    useState<SpeakerHubAudioProduct | null>(null);
  const [orderTrackModalOpen, setOrderTrackModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSaved, setNewsletterSaved] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSaved(true);
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans selection:bg-[#d97228] selection:text-white overflow-x-hidden">
      {/* 1. BURNT-ORANGE TOPBAR */}
      <div className="bg-[#d97228] text-white text-[11px] py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a href={`tel:${data.business.phone[0]}`} className="hover:underline">
              {data.business.phone[0]}
            </a>
            <span>{data.business.email[0]}</span>
          </div>
          <div className="font-semibold hidden sm:block">
            {data.topAnnouncement}
          </div>
          <div className="w-10 hidden lg:block" />
        </div>
      </div>

      {/* 2. MAIN WHITE NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <SpeakerHubLogo brandName={data.business.name} />

          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-zinc-700">
            <a href="#" className="text-[#d97228]">
              Trang chủ
            </a>
            <a
              href="#san-pham-khuyen-mai"
              className="hover:text-[#d97228] transition-colors"
            >
              Sản phẩm ▾
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#d97228] transition-colors"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#d97228] transition-colors"
            >
              Liên hệ
            </a>
            <button
              type="button"
              onClick={() => setOrderTrackModalOpen(true)}
              className="hover:text-[#d97228] transition-colors cursor-pointer"
            >
              Theo dõi đơn hàng
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setOrderTrackModalOpen(true)}
              aria-label="Tìm kiếm"
              className="text-zinc-700 hover:text-[#d97228] cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setOrderTrackModalOpen(true)}
              aria-label="Tài khoản"
              className="text-zinc-700 hover:text-[#d97228] cursor-pointer"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setWishlistCount((w) => w + 1)}
              aria-label="Yêu thích"
              className="relative text-zinc-700 hover:text-[#d97228] cursor-pointer"
            >
              <Heart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#d97228] text-white text-[9px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              aria-label="Giỏ hàng"
              className="relative text-zinc-700 hover:text-[#d97228] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#d97228] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded border border-slate-200"
              aria-label="Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-2 text-xs font-bold">
            <a href="#" className="block py-1 text-[#d97228]">
              Trang chủ
            </a>
            <a href="#san-pham-khuyen-mai" className="block py-1">
              Sản phẩm
            </a>
            <a href="#tin-tuc" className="block py-1">
              Tin tức
            </a>
            <a href="#lien-he" className="block py-1">
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER + BURNT-ORANGE MARQUEE TICKER */}
      <section className="bg-gradient-to-b from-slate-50/60 to-white pt-10 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                {data.hero.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 leading-tight uppercase">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                {data.hero.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href={data.hero.ctaLink || "#san-pham-khuyen-mai"}
                  className="inline-flex items-center gap-2 bg-[#d97228] hover:bg-[#b85d1d] text-white text-xs font-bold px-6 py-3 rounded-full shadow-sm transition-colors"
                >
                  <span>{data.hero.ctaText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center">
              <div className="relative max-w-lg w-full rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-full h-72 sm:h-88 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Burnt-Orange Marquee Ticker Strip */}
        <div className="bg-[#d97228] text-white py-2.5 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-8 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider whitespace-nowrap">
            {data.marqueeItems.map((m, idx) => (
              <span key={idx} className="inline-flex items-center gap-3">
                <span>•</span>
                <span>{m}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 8 AUDIO CATEGORY THUMBNAIL CARDS */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {data.audioCategories.map((cat) => (
              <a
                key={cat.id}
                href="#san-pham-khuyen-mai"
                className="bg-white border border-slate-200/80 hover:border-[#d97228] rounded-xl p-3 flex flex-col items-center text-center shadow-2xs transition-all group"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden mb-2 bg-slate-50">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-[11px] font-bold text-zinc-800 group-hover:text-[#d97228]">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SẢN PHẨM KHUYẾN MÃI (5x2 Grid) */}
      <ProductGridSection
        id="san-pham-khuyen-mai"
        title="Sản phẩm khuyến mãi"
        products={data.promoProducts}
        onSelectProduct={setSelectedProduct}
        onAddCart={() => setCartCount((c) => c + 1)}
      />

      {/* 6. SPLIT BURNT-ORANGE COUNTDOWN BANNER (Giảm lên đến 60%) */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-md">
            <div className="lg:col-span-6 bg-slate-200 h-72 sm:h-88">
              <img
                src={data.orangeCountdownBanner.image}
                alt={data.orangeCountdownBanner.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 bg-[#d97228] text-white p-8 sm:p-12 flex flex-col justify-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-100">
                {data.orangeCountdownBanner.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold">
                {data.orangeCountdownBanner.title}
              </h2>
              <p className="text-xs text-orange-50 max-w-md">
                {data.orangeCountdownBanner.subtitle}
              </p>

              <div className="flex items-center gap-2.5 pt-1">
                {[
                  {
                    v: data.orangeCountdownBanner.countdown.days,
                    l: "NGÀY",
                  },
                  {
                    v: data.orangeCountdownBanner.countdown.hours,
                    l: "GIỜ",
                  },
                  {
                    v: data.orangeCountdownBanner.countdown.mins,
                    l: "PHÚT",
                  },
                  {
                    v: data.orangeCountdownBanner.countdown.secs,
                    l: "GIÂY",
                  },
                ].map((bx, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-white text-zinc-900 rounded-md flex flex-col items-center justify-center shadow-xs"
                  >
                    <span className="text-sm font-extrabold leading-none">
                      {bx.v}
                    </span>
                    <span className="text-[8px] font-bold text-zinc-400 mt-0.5">
                      {bx.l}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#karaoke-gia-dinh"
                  className="inline-block bg-white hover:bg-zinc-900 hover:text-white text-zinc-900 text-xs font-bold px-6 py-2.5 rounded-full transition-colors"
                >
                  {data.orangeCountdownBanner.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ÂM THANH KARAOKE GIA ĐÌNH */}
      <ProductGridSection
        id="karaoke-gia-dinh"
        title="Âm thanh Karaoke gia đình"
        products={data.karaokeProducts}
        onSelectProduct={setSelectedProduct}
        onAddCart={() => setCartCount((c) => c + 1)}
      />

      {/* 8. LOA KÉO, LOA BLUETOOTH */}
      <ProductGridSection
        title="Loa kéo, Loa Bluetooth"
        products={data.bluetoothProducts}
        onSelectProduct={setSelectedProduct}
        onAddCart={() => setCartCount((c) => c + 1)}
      />

      {/* 9. SPLIT SLATE ACCESSORY PROMO BANNER (Giảm lên đến 40%) */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-md border border-slate-100">
            <div className="lg:col-span-6 bg-[#526576] text-white p-8 sm:p-12 flex flex-col justify-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-200">
                {data.slateAccessoryBanner.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold">
                {data.slateAccessoryBanner.title}
              </h2>
              <p className="text-xs text-slate-100 max-w-md">
                {data.slateAccessoryBanner.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href="#phu-kien-am-thanh"
                  className="inline-block bg-white hover:bg-[#d97228] hover:text-white text-zinc-900 text-xs font-bold px-6 py-2.5 rounded-full transition-colors"
                >
                  {data.slateAccessoryBanner.ctaText}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white h-72 sm:h-84 p-6 flex items-center justify-center">
              <img
                src={data.slateAccessoryBanner.image}
                alt={data.slateAccessoryBanner.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. PHỤ KIỆN ÂM THANH */}
      <ProductGridSection
        id="phu-kien-am-thanh"
        title="Phụ kiện âm thanh"
        products={data.accessoryProducts}
        onSelectProduct={setSelectedProduct}
        onAddCart={() => setCartCount((c) => c + 1)}
      />

      {/* 11. TIN TỨC (4 Audio Blog Cards) */}
      <section id="tin-tuc" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl sm:text-2xl font-extrabold text-zinc-900 uppercase mb-8">
            TIN TỨC
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-white text-zinc-800 text-[9px] font-extrabold uppercase px-2.5 py-1 rounded shadow-2xs">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-zinc-800 line-clamp-2 mb-2 group-hover:text-[#d97228]">
                  {post.title}
                </h3>
                <a
                  href="#lien-he"
                  className="mt-auto inline-flex items-center gap-1 text-[11px] font-bold text-zinc-800 underline hover:text-[#d97228]"
                >
                  <span>Xem thêm</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. 14 AUDIO BRAND LOGOS (2 Rows of 7 Boxes) */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {data.audioBrands.map((brand, idx) => (
              <div
                key={idx}
                className="h-14 border border-zinc-800 rounded-md flex items-center justify-center px-3 bg-white hover:bg-zinc-900 hover:text-white transition-colors"
              >
                <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-center">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. 4 SERVICE TRUST FEATURES */}
      <section className="py-10 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.trustFeatures.map((tf) => {
            const TfIcon =
              tf.iconType === "box"
                ? Package
                : tf.iconType === "card"
                ? CreditCard
                : tf.iconType === "return"
                ? RotateCcw
                : Headphones;

            return (
              <div key={tf.id} className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-slate-100 text-zinc-700 flex items-center justify-center shrink-0">
                  <TfIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-zinc-900">
                    {tf.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500">{tf.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 14. LIGHT GRAY 4-COLUMN FOOTER */}
      <footer id="lien-he" className="bg-[#f3f3f3] text-zinc-600 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-zinc-200">
            <div className="lg:col-span-3 space-y-3">
              <SpeakerHubLogo brandName={data.business.name} />
              <div className="text-xs space-y-1 text-zinc-600 pt-1">
                <p>Địa chỉ: {data.business.address}</p>
                <p>
                  Email: <strong>{data.business.email[0]}</strong>
                </p>
                <p>
                  Điện thoại: <strong>{data.business.phone[0]}</strong>
                </p>
              </div>
              <div className="flex items-center gap-2 pt-1">
                {["f", "x", "ig", "tk", "yt"].map((s) => (
                  <a
                    key={s}
                    href="#lien-he"
                    className="w-7 h-7 rounded-full border border-zinc-300 flex items-center justify-center text-[10px] font-bold hover:bg-[#d97228] hover:text-white hover:border-[#d97228] uppercase"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-2">
              <h4 className="text-xs font-extrabold text-zinc-900">Liên kết</h4>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a href="#" className="hover:text-[#d97228]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a
                    href="#san-pham-khuyen-mai"
                    className="hover:text-[#d97228]"
                  >
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#d97228]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#d97228]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-2">
              <h4 className="text-xs font-extrabold text-zinc-900">
                Chính sách
              </h4>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a href="#lien-he" className="hover:text-[#d97228]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#d97228]">
                    Chính sách hoàn trả – trao đổi
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#d97228]">
                    Chính sách vận chuyển
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#d97228]">
                    Điều khoản dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#d97228]">
                    Theo dõi đơn hàng
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-extrabold text-zinc-900">
                Đăng ký nhận bản tin
              </h4>
              <p className="text-xs text-zinc-500">
                Đăng ký để được ưu tiên nhận thông tin về sản phẩm âm thanh mới
                về và chương trình khuyến mãi sỉ.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex items-center bg-zinc-800 rounded-full p-1 max-w-sm"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email *"
                  className="w-full bg-transparent text-white text-xs px-4 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#d97228] hover:bg-[#b85d1d] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-full shrink-0 cursor-pointer"
                >
                  ĐĂNG KÝ ›
                </button>
              </form>
              {newsletterSaved && (
                <p className="text-xs font-bold text-[#d97228]">
                  Đã đăng ký nhận thông tin ưu đãi!
                </p>
              )}
            </div>
          </div>

          <div className="pt-6 flex items-center justify-between text-xs text-zinc-500">
            <span>© Thiết kế và lập trình bởi {data.business.name}</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Lên đầu trang"
              className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-2xs cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-56 bg-slate-100">
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
              <span className="inline-block bg-orange-50 text-[#d97228] text-xs font-bold px-2.5 py-0.5 rounded-full">
                Khuyến mãi {selectedProduct.discountBadge}
              </span>
              <h3 className="mt-2 text-base font-extrabold text-zinc-900">
                {selectedProduct.title}
              </h3>
              <div className="mt-2 text-lg font-extrabold text-[#e11d48]">
                {selectedProduct.price}
              </div>
              <div className="mt-3 space-y-1.5">
                {selectedProduct.specs.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-zinc-600"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d97228] shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
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
                  className="bg-[#d97228] text-white text-xs font-bold px-5 py-2.5 rounded-full cursor-pointer"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ORDER TRACKING / B2B MODAL */}
      {orderTrackModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setOrderTrackModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-extrabold text-zinc-900">
              Tra Cứu Đơn Hàng &amp; Chính Sách Đại Lý
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Nhập mã đơn hàng hoặc số điện thoại đặt hàng tại{" "}
              {data.business.name}.
            </p>
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Mã đơn hàng (VD: SPH-202688)"
                className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#d97228]"
              />
              <input
                type="tel"
                placeholder="Số điện thoại nhận hàng"
                className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#d97228]"
              />
              <button
                type="button"
                onClick={() => setOrderTrackModalOpen(false)}
                className="w-full bg-[#d97228] text-white text-xs font-bold py-2.5 rounded-lg cursor-pointer"
              >
                Kiểm Tra Ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
