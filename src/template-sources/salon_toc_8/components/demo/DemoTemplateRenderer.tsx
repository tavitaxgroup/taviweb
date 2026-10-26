"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Menu,
  X,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { salonToc8DefaultData, type SalonToc8Data } from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<SalonToc8Data>(salonToc8DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroImg, setHeroImg] = useState(data.hero.backgroundImage);
  const [cartCount, setCartCount] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  /* Centered Serif Section Heading with Underline & Italic Subtitle matching ST011 */
  const renderSerifHeading = (title: string, subtitle: string, isDark = false) => (
    <div className="text-center max-w-lg mx-auto mb-10">
      <h2
        className={`text-xl sm:text-2xl font-serif uppercase tracking-wider ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-8 h-px mx-auto my-2.5 ${
          isDark ? "bg-white/40" : "bg-slate-400"
        }`}
      />
      <p
        className={`font-serif italic text-xs ${
          isDark ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#1c1c1c] selection:text-white">
      {/* Topbar — Soft Cream #f5f0ec */}
      <div className="bg-[#f5f0ec] text-slate-600 text-[10px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
            <span>Chào mừng đến cửa hàng online của {data.business.name}</span>
            <span className="hidden sm:inline">{primaryEmail}</span>
            <span className="font-semibold text-slate-800">{primaryPhone}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="#footer" className="hover:text-black">
              FAQs
            </a>
            <a href="#footer" className="hover:text-black">
              Theo dõi lịch hẹn
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left Serif Logo */}
          <a href="#" className="text-xl sm:text-2xl font-serif tracking-wider text-slate-900 uppercase">
            {data.business.name}
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
            <a href="#" className="text-slate-900 font-bold">
              TRANG CHỦ
            </a>
            <a href="#studio" className="hover:text-slate-900">
              GIỚI THIỆU
            </a>
            <a href="#thoi-trang" className="hover:text-slate-900">
              CỬA HÀNG
            </a>
            <a href="#xu-huong" className="hover:text-slate-900">
              XU HƯỚNG
            </a>
            <a href="#footer" className="hover:text-slate-900">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Underlined Search + User + Bag */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center border-b border-slate-300 pb-0.5 w-32">
              <input
                type="text"
                placeholder="Tìm kiếm ..."
                className="w-full text-[10px] text-slate-700 placeholder-slate-400 focus:outline-none"
              />
              <Search className="w-3 h-3 text-slate-500" />
            </div>
            <button type="button" className="text-slate-700" aria-label="Tài khoản">
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="relative text-slate-700 cursor-pointer"
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

      {/* Hero Section — Blush-Cream Backdrop with Arch-Framed Portrait & 4 Arch Thumbnails */}
      <section className="relative bg-gradient-to-r from-[#f7ece6] via-[#fbf5f1] to-[#f7ece6] pt-10 pb-0 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8">
            {/* Left Heading + 4 Arch Thumbnails */}
            <div className="md:col-span-6 pb-12 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-serif text-slate-900 uppercase leading-tight tracking-wide">
                CỬA HÀNG
                <br />
                {data.business.name}
              </h1>
              <p className="font-serif italic text-xs sm:text-sm text-slate-500">
                {data.hero.subtitle}
              </p>

              {/* 4 Small Arch-Topped Thumbnails */}
              <div className="flex items-center gap-2.5 pt-4">
                {(data.heroThumbnails || []).map((thumb, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setHeroImg(thumb)}
                    className="w-12 h-14 rounded-t-full overflow-hidden border border-white shadow-xs hover:scale-105 transition-transform cursor-pointer"
                  >
                    <img src={thumb} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Double-Bordered Arch Portrait */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative p-2.5 rounded-t-full border border-slate-400/50">
                <div className="w-72 sm:w-80 h-80 sm:h-96 rounded-t-full overflow-hidden shadow-lg">
                  <img
                    src={heroImg}
                    alt={data.business.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: DANH MỤC NỔI BẬT (4 Arch-Topped Cards) */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        {renderSerifHeading("DANH MỤC NỔI BẬT", "Phong cách mới được thêm vào hàng tuần")}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.featuredCategories || []).map((cat) => (
            <div
              key={cat.id}
              className="rounded-t-full bg-[#f8f3ef] pt-8 pb-5 px-4 flex flex-col items-center text-center group cursor-pointer"
            >
              <h3 className="text-xs font-serif uppercase tracking-wider text-slate-800">
                {cat.title}
              </h3>
              <span className="font-serif italic text-[10px] text-slate-400 mb-4">
                {cat.itemCount}
              </span>

              <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-2">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-slate-700 shadow-sm flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: SẢN PHẨM MỚI (3-Column Portrait Carousel) */}
      <section id="san-pham-moi" className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
        {renderSerifHeading(
          "SẢN PHẨM MỚI",
          `Tất cả kiểu dáng và màu sắc đều có sẵn trong cửa hàng trực tuyến chính thức của ${data.business.name}`
        )}

        <div className="relative">
          <button
            type="button"
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white shadow-md items-center justify-center text-slate-600"
            aria-label="Trước"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.newArrivals || []).map((item) => (
              <div
                key={item.id}
                onClick={() => setCartCount((c) => c + 1)}
                className="group cursor-pointer text-center"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f2ede9] mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-white text-slate-800 text-[9px] font-bold px-2 py-0.5 uppercase shadow-2xs">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-[10px] font-semibold uppercase tracking-wider text-slate-700">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-800 mt-0.5">
                  {item.oldPrice && (
                    <span className="text-slate-400 line-through mr-1.5">{item.oldPrice}</span>
                  )}
                  <strong className="font-bold">{item.price}</strong>
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white shadow-md items-center justify-center text-slate-600"
            aria-label="Tiếp"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 3: Asymmetric Arch Editorial Banner (STUDIO COLLECTION + ƯU ĐÃI 30% TẤT CẢ) */}
      <section id="studio" className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Overlapping Arch & STUDIO COLLECTION Typography */}
          <div className="md:col-span-7 relative flex items-center">
            <div className="p-2 rounded-t-full border border-slate-300 w-64 sm:w-72 shrink-0">
              <div className="aspect-[3/4] rounded-t-full overflow-hidden bg-[#efe8e2]">
                <img
                  src={data.studioCollection.leftImage}
                  alt={data.studioCollection.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="-ml-12 sm:-ml-16 relative z-10 bg-white/80 sm:bg-transparent p-4 sm:p-0">
              <p className="font-serif italic text-sm sm:text-base text-slate-600">
                {data.studioCollection.eyebrow}
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-wide text-slate-900 leading-none my-2">
                STUDIO
                <br />
                COLLECTION
              </h3>
              <a
                href="#thoi-trang"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-800 hover:underline mt-2"
              >
                <span>KHÁM PHÁ NGAY</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Arch Photo + 30% Offer + 4 Countdown Boxes */}
          <div className="md:col-span-5 space-y-4">
            <div className="aspect-[4/3] rounded-t-full overflow-hidden bg-[#efe8e2] max-w-xs mx-auto md:mx-0">
              <img
                src={data.studioCollection.rightImage}
                alt={data.studioCollection.promoTitle}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-2">
              <h4 className="text-lg sm:text-xl font-serif uppercase text-slate-900">
                {data.studioCollection.promoTitle}
              </h4>
              <div className="w-8 h-px bg-slate-400 my-2" />
              <p className="font-serif italic text-[11px] text-slate-500">
                {data.studioCollection.promoSubtitle}
              </p>

              {/* 4 Cream Countdown Boxes */}
              <div className="flex items-center gap-2.5 mt-4">
                {[
                  { num: "27", unit: "Ngày" },
                  { num: "15", unit: "Giờ" },
                  { num: "00", unit: "Phút" },
                  { num: "53", unit: "Giây" }
                ].map((box) => (
                  <div
                    key={box.unit}
                    className="w-12 h-12 bg-[#f8f3ef] flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-base font-serif text-slate-800 leading-none">
                      {box.num}
                    </span>
                    <span className="font-serif italic text-[9px] text-slate-400 mt-0.5">
                      {box.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: THƯƠNG HIỆU (Dark Charcoal #1d1d1d Section) */}
      <section className="py-16 bg-[#1d1d1d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {renderSerifHeading(
            "THƯƠNG HIỆU",
            "Dưới đây là một số thương hiệu chúng tôi đã có cơ hội đồng hành",
            true
          )}

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-sm sm:text-base font-serif tracking-widest text-white/90">
            {(data.partnerBrands || []).map((brand, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border border-white/10 hover:border-white/40 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: THỜI TRANG & LÀM ĐẸP (4x2 Grid = 8 Cards) */}
      <section id="thoi-trang" className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        {renderSerifHeading(
          "THỜI TRANG",
          "Sản phẩm của chúng tôi đã được lựa chọn một cách cẩn thận và tỉ mỉ bởi những nhà thiết kế nổi tiếng"
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.catalogItems || []).map((item) => (
            <div key={item.id} className="group text-center">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f4f4] mb-2.5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top-Left Badge */}
                {item.badge && (
                  <span
                    className={`absolute top-2.5 left-2.5 text-[8px] font-bold px-2 py-0.5 uppercase ${
                      item.badge === "NEW"
                        ? "bg-[#5c4938] text-white"
                        : "bg-white text-slate-800"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Top-Right Plus Circle Button */}
                <button
                  type="button"
                  onClick={() => setCartCount((c) => c + 1)}
                  className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white text-slate-700 hover:bg-black hover:text-white flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
                  aria-label="Thêm vào giỏ"
                >
                  <Plus className="w-3 h-3" />
                </button>

                {/* Out of Stock Center Bar */}
                {item.outOfStock && (
                  <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 bg-black/85 text-white text-[9px] font-bold uppercase tracking-widest py-1.5 text-center">
                    HẾT HÀNG TẠM THỜI
                  </div>
                )}
              </div>

              <h3 className="text-[9px] font-semibold uppercase tracking-wider text-slate-700 line-clamp-1">
                {item.name}
              </h3>
              <p className="text-[10px] text-slate-600 mt-0.5">
                {item.oldPrice && (
                  <span className="line-through text-slate-400 mr-1">{item.oldPrice}</span>
                )}
                <span>{item.price}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: THỜI TRANG & XU HƯỚNG (3 Arch-Topped Blog Cards) */}
      <section id="xu-huong" className="py-14 max-w-5xl mx-auto px-4 sm:px-6">
        {renderSerifHeading(
          "THỜI TRANG & XU HƯỚNG",
          "Thông tin thời trang & xu hướng mới nhất, được cập nhật mỗi ngày, mời các bạn đọc tận hưởng"
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(data.news || []).map((post) => (
            <article key={post.id} className="text-center group cursor-pointer">
              <div className="aspect-[4/3] rounded-t-full overflow-hidden bg-slate-100 mb-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 block">
                {post.category} / {post.date}
              </span>
              <h3 className="text-xs font-serif uppercase text-slate-800 group-hover:text-black mt-1 leading-snug px-2">
                {post.title}
              </h3>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <span className="font-serif italic text-sm text-slate-500">#{data.business.name}</span>
        </div>
      </section>

      {/* Footer — Dark Charcoal #1b1b1b */}
      <footer id="footer" className="bg-[#1b1b1b] text-slate-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-lg font-serif text-white uppercase tracking-wider">
              {data.business.name}
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-400">
              {data.business.aboutText?.[0]}
            </p>
          </div>

          {/* Col 2: ĐIỀU HƯỚNG */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-serif uppercase text-white tracking-wider mb-3">
              ĐIỀU HƯỚNG
            </h4>
            <ul className="space-y-1.5 text-[10px] uppercase tracking-wider">
              <li>TRANG CHỦ</li>
              <li>CỬA HÀNG</li>
              <li>VỀ {data.business.name}</li>
              <li>TIN TỨC</li>
              <li>LIÊN HỆ</li>
            </ul>
          </div>

          {/* Col 3: HỖ TRỢ */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-serif uppercase text-white tracking-wider mb-3">
              HỖ TRỢ
            </h4>
            <ul className="space-y-1.5 text-[10px] uppercase tracking-wider">
              <li>HỎI ĐÁP</li>
              <li>CHÍNH SÁCH ĐỔI TRẢ</li>
              <li>ĐIỀU KHOẢN &amp; CHÍNH SÁCH</li>
              <li>CHÍNH SÁCH BẢO MẬT</li>
            </ul>
          </div>

          {/* Col 4: NHẬN TẤT CẢ CÁC TIN TỨC MỚI NHẤT & BẢN TIN */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-serif uppercase text-white leading-snug">
              NHẬN TẤT CẢ CÁC TIN TỨC MỚI NHẤT &amp; BẢN TIN.
            </h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                setNewsletterEmail("");
              }}
              className="flex items-stretch bg-white p-1"
            >
              <input
                type="email"
                required
                placeholder="Nhập địa chỉ email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 text-slate-800 text-xs px-3 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="text-[10px] font-extrabold uppercase text-slate-900 px-3 cursor-pointer"
              >
                ĐĂNG KÍ
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Đã đăng ký nhận bản tin!</span>
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-[10px] text-slate-500">
            <span>
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-white">{data.business.name}</strong>
            </span>
            <div className="flex items-center gap-3 font-bold text-slate-400">
              <span>PayPal</span>
              <span>VISA</span>
              <span>MasterCard</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
