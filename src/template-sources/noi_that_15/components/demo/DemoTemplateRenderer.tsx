"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  Truck,
  CreditCard,
  Percent,
  Headphones,
  Star,
  CheckCircle2,
  X,
  ArrowUp,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat15DefaultData,
  type NoiThat15Data,
  type NoiThat15Product
} from "@/template-sources/noi_that_15/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function SectionBoxHeading({ title }: { title: string }) {
  return (
    <div className="inline-block border border-stone-200 px-8 py-3 bg-white mb-4">
      <h2 className="font-serif text-base sm:text-lg tracking-wider uppercase text-[#1a1a1a]">
        {title}
      </h2>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NoiThat15Data = adaptClonedTemplateData(
    noiThat15DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<NoiThat15Product | null>(
    null
  );
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const testimonials = data.testimonials || noiThat15DefaultData.testimonials || [];
  const currentTestimonial = testimonials[activeTestimonialIdx] || testimonials[0];
  const newsList = data.news || noiThat15DefaultData.news || [];

  const handleAddToCart = (prod: NoiThat15Product) => {
    setCartCount((c) => c + 1);
    setSelectedProduct(prod);
  };

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSubscribed(false), 4000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#2e4a44] selection:text-white"
    >
      {/* 1. MINIMALIST NORDIC NAVBAR (#eae5df) + ARCHED SHOWROOM HERO */}
      <section className="bg-[#eae5df] text-[#1a1a1a] overflow-hidden">
        <header className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between border-b border-stone-300/60">
          {/* Left Serif Logo */}
          <a
            href="#top"
            className="font-serif text-lg sm:text-xl tracking-[0.15em] uppercase text-[#1a1a1a]"
          >
            {data.business.name}
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.15em] text-stone-700">
            <a href="#top" className="text-[#1a1a1a]">
              TRANG CHỦ
            </a>
            <a href="#editorial" className="hover:text-[#2e4a44] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#newest-products" className="hover:text-[#2e4a44] transition-colors">
              SẢN PHẨM
            </a>
            <a href="#blog" className="hover:text-[#2e4a44] transition-colors">
              TIN TỨC
            </a>
            <a href="#footer" className="hover:text-[#2e4a44] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Utility Icons */}
          <div className="flex items-center gap-4 text-stone-700">
            <a
              href="#newest-products"
              aria-label="Tìm kiếm"
              className="hover:text-[#1a1a1a]"
            >
              <Search className="w-4 h-4" />
            </a>
            <a href="#footer" aria-label="Tài khoản" className="hover:text-[#1a1a1a]">
              <User className="w-4 h-4" />
            </a>
            <a
              href="#newest-products"
              aria-label="Giỏ hàng"
              className="relative hover:text-[#1a1a1a]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#2e4a44] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-stone-800"
              aria-label="Mở menu"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#e2dcd4] px-6 py-4 space-y-2 text-xs font-semibold uppercase tracking-widest border-b border-stone-300">
            <a
              href="#editorial"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giới thiệu
            </a>
            <a
              href="#newest-products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Sản phẩm mới nhất
            </a>
            <a
              href="#featured-products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Sản phẩm nổi bật
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tin tức
            </a>
          </div>
        )}

        {/* Arched Showroom Hero Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 pb-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-5">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.15] text-[#1a1a1a]">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md">
                {data.hero.subtitle}
              </p>
              <div className="pt-1">
                <a
                  href={data.hero.ctaLink || "#newest-products"}
                  className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2e4a44] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 transition-colors"
                >
                  <span>{data.hero.ctaText || "MUA NGAY"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Arched Photo with Offset Wireframe Arch */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-md pt-4 pl-4">
                {/* Offset Thin Arch Outline */}
                <div className="absolute top-0 left-0 right-6 bottom-6 rounded-t-full border border-stone-500/60 pointer-events-none" />
                <div className="relative rounded-t-full overflow-hidden aspect-[4/4.3] shadow-lg bg-stone-200">
                  <img
                    src={data.hero.backgroundImage}
                    alt={data.hero.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2-COLUMN EDITORIAL SPLIT ("TRANG TRÍ NHÀ VỚI THIẾT KẾ NỘI THẤT") */}
      <section id="editorial" className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
            {/* Left Column: Heading + Subtitle + Horizontal Sofa Photo */}
            <div className="lg:col-span-6 py-12 lg:py-16 lg:pr-12 flex flex-col justify-between">
              <div className="mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl leading-snug text-[#1a1a1a] mb-3">
                  {data.business.aboutTitle || data.editorialSplit.title}
                </h2>
                <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed">
                  {data.business.aboutText[0] || data.editorialSplit.subtitle}
                </p>
              </div>
              <div className="h-60 sm:h-72 overflow-hidden bg-stone-100">
                <img
                  src={data.editorialSplit.leftBottomImage}
                  alt="Không gian sofa thư giãn"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Tall Lounge Corner Photo */}
            <div className="lg:col-span-6 py-12 lg:py-16 lg:pl-12">
              <div className="h-96 sm:h-[440px] overflow-hidden bg-stone-100">
                <img
                  src={data.editorialSplit.rightTallImage}
                  alt="Góc ghế bành và bàn trà Bắc Âu"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 MINIMALIST TRUST ICONS BAR */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {data.trustFeatures.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div className="text-[#2e4a44] mb-3">
                  {item.icon === "ship" && <Truck className="w-7 h-7 stroke-[1.4]" />}
                  {item.icon === "card" && <CreditCard className="w-7 h-7 stroke-[1.4]" />}
                  {item.icon === "percent" && <Percent className="w-7 h-7 stroke-[1.4]" />}
                  {item.icon === "support" && <Headphones className="w-7 h-7 stroke-[1.4]" />}
                </div>
                <h3 className="font-serif text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-400 max-w-[210px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "SẢN PHẨM MỚI NHẤT" (4x2 Nordic Decor Product Grid) */}
      <section id="newest-products" className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <SectionBoxHeading title="SẢN PHẨM MỚI NHẤT" />
            <p className="text-xs text-stone-400 leading-relaxed">
              Với tầm nhìn sáng tạo, chúng tôi không ngừng tìm kiếm và chọn lọc những sản phẩm chất
              lượng từ các nhà sản xuất uy tín trong ngành nội thất.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.newestProducts.map((prod) => {
              const wished = wishlistIds.includes(prod.id);
              return (
                <div key={prod.id} className="group flex flex-col">
                  {/* Gray Studio Image Box */}
                  <div className="relative bg-[#f4f4f4] aspect-square overflow-hidden flex items-center justify-center">
                    {prod.isNew && (
                      <span className="absolute top-3 left-3 z-10 bg-[#2e4a44] text-white text-[9px] font-bold uppercase px-2 py-0.5">
                        NEW!
                      </span>
                    )}
                    {prod.discountBadge && (
                      <span className="absolute top-9 left-3 z-10 bg-white text-[#1a1a1a] text-[9px] font-bold px-2 py-0.5 shadow-2xs">
                        {prod.discountBadge}
                      </span>
                    )}
                    <img
                      src={prod.image}
                      alt={prod.name}
                      onClick={() => handleAddToCart(prod)}
                      className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Action Bar Below Image */}
                  <div className="grid grid-cols-2 border-x border-b border-stone-200/80 text-[9px] font-bold uppercase tracking-wider text-stone-500 divide-x divide-stone-200/80 bg-white">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(prod)}
                      className="py-2.5 flex items-center justify-center gap-1 hover:text-[#1a1a1a] hover:bg-stone-50 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>THÊM VÀO GIỎ HÀNG</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(prod.id)}
                      className={`py-2.5 flex items-center justify-center gap-1 hover:bg-stone-50 transition-colors ${
                        wished ? "text-red-600" : "hover:text-[#1a1a1a]"
                      }`}
                    >
                      <Heart className={`w-3 h-3 ${wished ? "fill-current" : ""}`} />
                      <span>YÊU THÍCH</span>
                    </button>
                  </div>

                  {/* Product Title & Price */}
                  <div className="text-center pt-3">
                    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-bold text-[#1a1a1a]">
                      {prod.oldPrice && (
                        <span className="text-stone-400 line-through font-normal mr-1.5">
                          {prod.oldPrice}
                        </span>
                      )}
                      {prod.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. "Giảm giá tới 50% — MUA SẮM TIẾT KIỆM" PROMO BANNER WITH 4 GREEN COUNTDOWN CIRCLES */}
      <section className="py-16 lg:py-20 bg-[#f5f5f3] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Countdown & CTA */}
            <div className="lg:col-span-5 text-center space-y-4">
              <p className="font-serif italic text-xl sm:text-2xl text-stone-600">
                {data.flashSaleBanner.eyebrow}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] tracking-wide">
                {data.flashSaleBanner.title}
              </h2>
              <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
                {data.flashSaleBanner.subtitle}
              </p>

              {/* 4 Dark-Green Circular Countdown Badges */}
              <div className="flex items-center justify-center gap-3 py-3">
                {[
                  { val: data.flashSaleBanner.countdown.days, unit: "Ngày" },
                  { val: data.flashSaleBanner.countdown.hours, unit: "Giờ" },
                  { val: data.flashSaleBanner.countdown.mins, unit: "Phút" },
                  { val: data.flashSaleBanner.countdown.secs, unit: "Giây" }
                ].map((c) => (
                  <div
                    key={c.unit}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2e4a44] text-white flex flex-col items-center justify-center shadow"
                  >
                    <span className="font-serif text-lg sm:text-xl leading-none">{c.val}</span>
                    <span className="text-[9px] text-white/80 mt-0.5">{c.unit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#featured-products"
                  className="inline-flex items-center gap-1.5 border border-stone-400 hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-[10px] font-bold uppercase tracking-widest px-7 py-2.5 transition-all"
                >
                  <span>{data.flashSaleBanner.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Sofa & Mustard Armchair Showcase */}
            <div className="lg:col-span-7">
              <div className="rounded-lg overflow-hidden shadow-md h-72 sm:h-96">
                <img
                  src={data.flashSaleBanner.sofaImage}
                  alt="Sofa khuyến mãi 50%"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "SẢN PHẨM NỔI BẬT" (4x2 Featured Decor Grid) */}
      <section id="featured-products" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <SectionBoxHeading title="SẢN PHẨM NỔI BẬT" />
            <p className="text-xs text-stone-400 leading-relaxed">
              Với tầm nhìn sáng tạo, chúng tôi không ngừng tìm kiếm và chọn lọc những sản phẩm chất
              lượng từ các nhà sản xuất uy tín trong ngành nội thất.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.featuredProducts.map((prod) => {
              const wished = wishlistIds.includes(prod.id);
              return (
                <div key={prod.id} className="group flex flex-col">
                  <div className="relative bg-[#f4f4f4] aspect-square overflow-hidden">
                    {prod.isNew && (
                      <span className="absolute top-3 left-3 z-10 bg-[#2e4a44] text-white text-[9px] font-bold uppercase px-2 py-0.5">
                        NEW!
                      </span>
                    )}
                    <img
                      src={prod.image}
                      alt={prod.name}
                      onClick={() => handleAddToCart(prod)}
                      className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 border-x border-b border-stone-200/80 text-[9px] font-bold uppercase tracking-wider text-stone-500 divide-x divide-stone-200/80 bg-white">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(prod)}
                      className="py-2.5 flex items-center justify-center gap-1 hover:text-[#1a1a1a] hover:bg-stone-50"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>THÊM VÀO GIỎ HÀNG</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(prod.id)}
                      className={`py-2.5 flex items-center justify-center gap-1 hover:bg-stone-50 ${
                        wished ? "text-red-600" : "hover:text-[#1a1a1a]"
                      }`}
                    >
                      <Heart className={`w-3 h-3 ${wished ? "fill-current" : ""}`} />
                      <span>YÊU THÍCH</span>
                    </button>
                  </div>

                  <div className="text-center pt-3">
                    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-bold text-[#1a1a1a]">{prod.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. "KHÁCH HÀNG PHẢN HỒI" CENTERED QUOTE SLIDER */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <SectionBoxHeading title="KHÁCH HÀNG PHẢN HỒI" />

          {currentTestimonial && (
            <div className="relative mt-6 px-8 sm:px-14">
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonialIdx((idx) =>
                    idx > 0 ? idx - 1 : testimonials.length - 1
                  )
                }
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2"
                aria-label="Phản hồi trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <p className="font-serif italic text-base sm:text-xl text-stone-700 leading-relaxed mb-6">
                {currentTestimonial.content}
              </p>

              <button
                type="button"
                onClick={() =>
                  setActiveTestimonialIdx((idx) =>
                    idx < testimonials.length - 1 ? idx + 1 : 0
                  )
                }
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2"
                aria-label="Phản hồi tiếp"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-0.5 text-amber-400 mb-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">
                {currentTestimonial.author}
              </p>
              <p className="text-[10px] text-stone-400">{currentTestimonial.role}</p>
            </div>
          )}
        </div>
      </section>

      {/* 8. "TIN TỨC MỚI NHẤT" + "THEO DÕI BẢN TIN" + 6 BRAND BADGES + DARK FOOTER */}
      <section id="blog" className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <SectionBoxHeading title="TIN TỨC MỚI NHẤT" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {newsList.map((post) => (
              <article key={post.id} className="group text-center">
                <div className="h-52 overflow-hidden bg-stone-100 mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                  {post.category} / {post.date}
                </p>
                <h3 className="font-serif text-sm sm:text-base text-[#1a1a1a] group-hover:text-[#2e4a44] transition-colors">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THEO DÕI BẢN TIN */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <SectionBoxHeading title="THEO DÕI BẢN TIN" />
          <p className="text-xs text-stone-400 mt-2 mb-6">
            Đăng ký email và được giảm giá 10% cho đơn hàng đầu tiên!
          </p>

          {newsletterSubscribed ? (
            <div className="inline-flex items-center gap-2 text-xs text-[#2e4a44] font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Đã gửi mã ưu đãi 10% vào hộp thư của bạn!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex items-center border-b border-stone-400 pb-2 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Nhập địa chỉ email..."
                className="flex-1 text-xs bg-transparent focus:outline-none text-stone-700"
              />
              <button
                type="submit"
                className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#2e4a44]"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 6 Brand Badges */}
      <section className="py-10 bg-white border-t border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {data.brandLogos.map((br) => (
              <div key={br.id} className="py-2">
                <span className="font-serif text-base font-bold text-stone-700 block">
                  {br.name}
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-stone-400">
                  {br.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK FOOTER (#1f1f1f) */}
      <footer id="footer" className="bg-[#1f1f1f] text-white/75 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: Brand */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-serif text-lg uppercase tracking-wider text-white">
                {data.business.name}
              </h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Hãy khám phá Website để hiểu rõ hơn về chúng tôi, các giá trị mà chúng tôi mang lại
                và cách chúng tôi có thể giúp bạn tạo ra một không gian sống đẹp và ấm cúng.
              </p>
            </div>

            {/* Col 2: ĐIỀU HƯỚNG */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                ĐIỀU HƯỚNG
              </h4>
              <ul className="space-y-2 text-[11px] text-white/60 uppercase">
                <li>
                  <a href="#top" className="hover:text-white">
                    TRANG CHỦ
                  </a>
                </li>
                <li>
                  <a href="#editorial" className="hover:text-white">
                    GIỚI THIỆU
                  </a>
                </li>
                <li>
                  <a href="#newest-products" className="hover:text-white">
                    CỬA HÀNG
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white">
                    TIN TỨC
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-white">
                    LIÊN HỆ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: HỖ TRỢ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                HỖ TRỢ
              </h4>
              <ul className="space-y-2 text-[11px] text-white/60 uppercase">
                <li>HỎI ĐÁP</li>
                <li>CHÍNH SÁCH ĐỔI TRẢ</li>
                <li>ĐIỀU KHOẢN & CHÍNH SÁCH</li>
                <li>CHÍNH SÁCH BẢO MẬT</li>
              </ul>
            </div>

            {/* Col 4: NHẬN TẤT CẢ CÁC TIN TỨC MỚI NHẤT & BẢN TIN */}
            <div className="lg:col-span-4">
              <h4 className="font-serif text-sm sm:text-base uppercase text-white mb-4 leading-snug">
                NHẬN TẤT CẢ CÁC TIN TỨC MỚI NHẤT & BẢN TIN.
              </h4>
              <form onSubmit={handleSubscribe} className="flex bg-white p-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập địa chỉ email..."
                  className="flex-1 px-3 py-2 text-xs text-stone-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#1a1a1a] hover:text-[#2e4a44]"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/45 gap-4">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-widest text-white/60">
                PayPal • VISA • MasterCard
              </span>
              <a
                href="#top"
                aria-label="Lên đầu trang"
                className="w-7 h-7 rounded-full bg-white text-[#1a1a1a] flex items-center justify-center"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Quick Cart Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover bg-[#f4f4f4]"
              />
              <div>
                <span className="inline-block bg-[#2e4a44] text-white text-[9px] font-bold uppercase px-2 py-0.5 mb-1">
                  ĐÃ THÊM VÀO GIỎ ({cartCount})
                </span>
                <h3 className="font-serif text-sm font-bold text-[#1a1a1a]">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs font-bold text-stone-600 mt-0.5">
                  {selectedProduct.price}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="w-full bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-[#2e4a44] transition-colors"
            >
              TIẾP TỤC MUA SẮM
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
