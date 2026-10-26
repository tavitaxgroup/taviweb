"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Play,
  Heart,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  dichVuVeSinh7DefaultData,
  type VeSinh7Data
} from "@/template-sources/dich_vu_ve_sinh_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: VeSinh7Data = adaptClonedTemplateData(
    dichVuVeSinh7DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedItem, setLastAddedItem] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [footerNewsletterDone, setFooterNewsletterDone] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState(
    "Gói Vệ Sinh & Chăm Sóc Sảnh Tòa Nhà"
  );

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@fiorelloclean.vn";

  const allItems = data.catalogItems || dichVuVeSinh7DefaultData.catalogItems;
  const filteredItems =
    activeCategory === "ALL"
      ? allItems
      : allItems.filter((item) => item.categoryKey === activeCategory);

  const testimonials =
    data.testimonials && data.testimonials.length > 0
      ? data.testimonials
      : dichVuVeSinh7DefaultData.testimonials || [];
  const currentTestimonial =
    testimonials[activeTestimonial % testimonials.length];

  const handleAddToCart = (itemName: string) => {
    setCartCount((c) => c + 1);
    setLastAddedItem(itemName);
    setTimeout(() => {
      setLastAddedItem(null);
    }, 2600);
  };

  const openBookingModal = (pkgName?: string) => {
    if (pkgName) setSelectedPackageName(pkgName);
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  const brandWords = (data.business.name || "Fiorello Clean").split(" ");
  const firstWord = brandWords[0] || "FIORELLO";
  const restWords = brandWords.slice(1).join(" ") || "CLEAN";

  return (
    <div className="min-h-screen bg-white text-[#2b2b2b] font-sans selection:bg-[#f34f3f] selection:text-white">
      {/* Floating Cart Toast */}
      {lastAddedItem && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#2b2b2b] text-white px-4 py-3 shadow-xl border-l-4 border-[#f34f3f] flex items-center gap-2.5 text-xs">
          <CheckCircle2 className="w-4 h-4 text-[#f34f3f] shrink-0" />
          <span>
            Đã thêm <strong>{lastAddedItem}</strong> vào giỏ dịch vụ ({cartCount})
          </span>
        </div>
      )}

      {/* 1. CLEAN WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Spaced Serif Logo */}
          <a
            href="#trang-chu"
            className="font-serif text-lg sm:text-xl tracking-[0.28em] uppercase font-normal shrink-0"
          >
            <span className="text-[#f34f3f]">{firstWord}</span>
            {restWords && <span className="text-[#2b2b2b] ml-2">{restWords}</span>}
          </a>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-[#2b2b2b]">
            <a
              href="#trang-chu"
              className="text-[#f34f3f] border-b border-[#f34f3f] pb-1"
            >
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#f34f3f] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#cua-hang" className="hover:text-[#f34f3f] transition-colors">
              CỬA HÀNG
            </a>
            <a href="#tin-tuc" className="hover:text-[#f34f3f] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#f34f3f] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Search & Cart */}
          <div className="hidden sm:flex items-center gap-5 text-[11px] font-semibold uppercase tracking-wider">
            <button
              type="button"
              onClick={() => openBookingModal()}
              aria-label="Tìm kiếm"
              className="text-gray-600 hover:text-[#f34f3f] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openBookingModal()}
              className="flex items-center gap-2 text-[#2b2b2b] hover:text-[#f34f3f] transition-colors cursor-pointer"
            >
              <span>
                GIỎ HÀNG / {cartCount > 0 ? `${cartCount * 259},000 ₫` : "0 ₫"}
              </span>
              <span className="w-5 h-5 border border-[#f34f3f] text-[#f34f3f] text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2b2b2b] hover:text-[#f34f3f]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2.5 text-xs font-semibold uppercase tracking-wider">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#f34f3f]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#cua-hang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              CỬA HÀNG
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. STUDIO BOTANICAL HERO SECTION */}
      <section id="trang-chu" className="bg-[#f3f3f5] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left 6 Cols: Editorial Serif Heading + Handwritten Signature */}
          <div className="md:col-span-6">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#2b2b2b] mb-5">
              {data.heroTitlePrefix || "Không gian "}
              <span className="text-[#f34f3f]">
                {data.heroTitleHighlight || "xanh sạch"}
              </span>
              <br />
              {data.heroTitleSuffix || "nâng tầm cuộc sống."}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mb-7">
              {data.hero.subtitle}
            </p>
            {/* Handwritten Coral-Red Signature */}
            <div className="font-serif italic text-3xl sm:text-4xl text-[#f34f3f] tracking-wider select-none">
              {data.signatureText || "Fiorello"}
            </div>
          </div>

          {/* Right 6 Cols: Botanical Arrangement Image */}
          <div className="md:col-span-6 flex justify-center md:justify-end">
            <div className="w-full max-w-lg h-72 sm:h-96 overflow-hidden rounded-xs">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTERABLE 8-CARD CATALOG GRID */}
      <section id="cua-hang" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold uppercase tracking-widest mb-10">
            {(data.categories || dichVuVeSinh7DefaultData.categories).map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`transition-colors cursor-pointer ${
                  activeCategory === cat.key
                    ? "text-[#f34f3f]"
                    : "text-[#2b2b2b] hover:text-[#f34f3f]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 4x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleAddToCart(item.name)}
                className="text-center group cursor-pointer"
              >
                <div className="relative h-72 sm:h-80 bg-[#f7f7f7] overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top-Left Badge (-39% or New) */}
                  {item.badgeText && (
                    <span
                      className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 ${
                        item.badgeType === "coral"
                          ? "bg-[#f34f3f]"
                          : "bg-[#2b2b2b]"
                      }`}
                    >
                      {item.badgeText}
                    </span>
                  )}

                  {/* Bottom-Left Quick Add Icon */}
                  <span className="absolute bottom-3 left-3 w-7 h-7 bg-white/90 text-[#f34f3f] flex items-center justify-center shadow-2xs opacity-85 group-hover:opacity-100">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="font-serif text-xs sm:text-sm text-[#2b2b2b] group-hover:text-[#f34f3f] transition-colors mb-1">
                  {item.name}
                </h3>

                <div className="text-xs text-gray-500 space-x-1.5">
                  {item.oldPrice && (
                    <span className="line-through text-gray-400">
                      {item.oldPrice}
                    </span>
                  )}
                  <span className="font-bold text-[#2b2b2b]">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 2-COLUMN VIDEO & FEATURE SPLIT */}
      <section id="gioi-thieu" className="py-16 sm:py-20 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left 6 Cols: Video Image with Play Button */}
          <div
            onClick={() => openBookingModal()}
            className="md:col-span-6 relative h-72 sm:h-80 overflow-hidden cursor-pointer group shadow-md"
          >
            <img
              src={data.videoSectionImage}
              alt={data.videoTitleHighlight}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white text-[#2b2b2b] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-[#2b2b2b] ml-0.5" />
              </div>
            </div>
          </div>

          {/* Right 6 Cols: Serif Title + Heart Bullets */}
          <div className="md:col-span-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2b2b2b] leading-snug mb-4">
              {data.videoTitlePrefix}
              <span className="text-[#f34f3f]">{data.videoTitleHighlight}</span>
              <br />
              {data.videoTitleSecondLine}
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-5">
              {data.videoDescription}
            </p>
            <ul className="space-y-2.5 text-xs text-gray-600">
              {(data.videoBullets || dichVuVeSinh7DefaultData.videoBullets).map(
                (bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <Heart className="w-3.5 h-3.5 text-[#f34f3f] fill-[#f34f3f] shrink-0" />
                    <span>{bullet}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CHUYÊN GIA CẢNH QUAN & VỆ SINH (4 CIRCULAR PORTRAITS) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-md mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2b2b2b] mb-2">
              Chuyên Gia Cảnh Quan
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Sự kết hợp hoàn hảo giữa tư duy thẩm mỹ xanh, quy trình làm sạch chuẩn quốc tế và sự
              tận tâm trong từng công trình.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {(data.team || dichVuVeSinh7DefaultData.team || []).map((member) => (
              <div key={member.id} className="group">
                <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full overflow-hidden mb-4 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b]">
                  {member.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARALLAX BOTANICAL NEWSLETTER BANNER */}
      <section
        className="relative py-20 bg-cover bg-center text-white text-center"
        style={{
          backgroundImage: `url('${data.newsletterBannerImage}')`
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-xl mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl mb-6 drop-shadow">
            {data.newsletterBannerTitle || "Đồng Hành Cùng Không Gian Xanh!"}
          </h2>

          {newsletterDone ? (
            <div className="bg-white/95 text-[#2b2b2b] text-xs font-semibold py-3 px-5 inline-flex items-center gap-2 shadow">
              <CheckCircle2 className="w-4 h-4 text-[#f34f3f]" />
              <span>Đã đăng ký nhận cẩm nang &amp; ưu đãi từ {data.business.name}!</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterDone(true);
              }}
              className="flex max-w-md mx-auto shadow-lg"
            >
              <input
                type="email"
                required
                placeholder="Email ..."
                className="flex-1 h-11 bg-white text-[#2b2b2b] text-xs px-4 focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 px-6 bg-[#f34f3f] hover:bg-[#d93f30] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 7. TIN TỨC & CẨM NANG XANH */}
      <section id="tin-tuc" className="py-16 sm:py-20 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-md mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2b2b2b] mb-2">
              Góc Chia Sẻ &amp; Cẩm Nang
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Kiến thức chăm sóc cây xanh nội thất, mẹo giữ gìn vệ sinh tòa nhà và xu hướng kiến
              trúc xanh bền vững.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || dichVuVeSinh7DefaultData.news || []).map((post) => (
              <article key={post.id} className="text-center group">
                <div className="relative h-52 overflow-hidden mb-4 bg-white">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-[#f34f3f] text-white text-[10px] font-bold leading-tight flex flex-col items-center justify-center">
                    <span>{post.date.split(" ")[0] || "06"}</span>
                    <span className="text-[9px] font-normal">
                      {post.date.split(" ")[1] || "Th5"}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-sm sm:text-base text-[#2b2b2b] group-hover:text-[#f34f3f] transition-colors mb-2 line-clamp-2 px-2">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 px-3">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CENTERED TESTIMONIAL SLIDER */}
      {currentTestimonial && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 relative text-center">
            <button
              type="button"
              onClick={() =>
                setActiveTestimonial(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              aria-label="Trước"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#2b2b2b] cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.author}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-4 shadow-xs"
            />
            <p className="font-serif italic text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed mb-4">
              “{currentTestimonial.content}”
            </p>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">
              <strong className="text-[#2b2b2b]">{currentTestimonial.author}</strong> /{" "}
              {currentTestimonial.role}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
              }
              aria-label="Tiếp"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#2b2b2b] cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      )}

      {/* 9. 8-IMAGE FULL-WIDTH INSTAGRAM STRIP */}
      <div className="grid grid-cols-4 lg:grid-cols-8 w-full">
        {(
          data.instagramStripImages ||
          dichVuVeSinh7DefaultData.instagramStripImages
        ).map((imgUrl, idx) => (
          <div key={idx} className="h-32 sm:h-36 overflow-hidden group">
            <img
              src={imgUrl}
              alt={`Không gian xanh ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* 10. WARM CREAM 4-COLUMN FOOTER */}
      <footer id="lien-he" className="bg-[#fdfbf7] pt-14 pb-10 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-gray-500">
          {/* Col 1 (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="font-serif text-lg tracking-[0.25em] uppercase mb-4">
              <span className="text-[#f34f3f]">{firstWord}</span>
              {restWords && <span className="text-[#2b2b2b] ml-1.5">{restWords}</span>}
            </div>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 2 (2 Cols): Menu */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2b2b2b] mb-3">
              MENU
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a href="#trang-chu" className="text-[#f34f3f]">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#gioi-thieu" className="hover:text-[#f34f3f]">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#cua-hang" className="hover:text-[#f34f3f]">
                  Cửa hàng
                </a>
              </li>
              <li>
                <a href="#tin-tuc" className="hover:text-[#f34f3f]">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#lien-he" className="hover:text-[#f34f3f]">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 (2 Cols): Danh mục */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2b2b2b] mb-3">
              DANH MỤC
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>Tiểu cảnh để bàn</li>
              <li>Cảnh quan sân vườn</li>
              <li>Cây lọc không khí</li>
              <li>Vệ sinh văn phòng</li>
              <li>Chăm sóc định kỳ</li>
            </ul>
          </div>

          {/* Col 4 (4 Cols): Đăng ký */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2b2b2b] mb-3">
              ĐĂNG KÝ
            </h4>
            <p className="text-[11px] mb-3 leading-relaxed">
              Đăng ký để nhận được thông tin mới nhất từ chúng tôi.
            </p>
            {footerNewsletterDone ? (
              <div className="text-xs text-[#f34f3f] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã đăng ký nhận thông tin thành công!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFooterNewsletterDone(true);
                }}
                className="flex border border-gray-200 bg-white h-9"
              >
                <input
                  type="email"
                  required
                  placeholder="Email ..."
                  className="w-full px-3 text-xs text-[#2b2b2b] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#f34f3f] hover:bg-[#d93f30] text-white text-[10px] font-bold uppercase px-4 shrink-0 cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-10 pt-5 border-t border-gray-200/60 text-center text-[11px] text-gray-400">
          © Bản quyền thuộc về <strong className="text-[#2b2b2b]">{data.business.name}</strong>.
        </div>
      </footer>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl text-[#2b2b2b] mb-1">
              Đặt Lịch Chăm Sóc Cảnh Quan &amp; Vệ Sinh
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Chuyên viên {data.business.name} sẽ liên hệ tư vấn gói giải pháp phù hợp nhất.
            </p>

            {bookingSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#f34f3f] mx-auto mb-3" />
                <p className="font-bold text-sm text-[#2b2b2b] mb-1">
                  Đặt dịch vụ thành công!
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Chúng tôi đã ghi nhận yêu cầu <strong>{selectedPackageName}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="bg-[#f34f3f] text-white text-xs font-bold uppercase px-6 py-2 cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#f34f3f]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Nhập số điện thoại"
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#f34f3f]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Sản phẩm / Gói dịch vụ
                  </label>
                  <input
                    type="text"
                    value={selectedPackageName}
                    onChange={(e) => setSelectedPackageName(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#f34f3f]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f34f3f] hover:bg-[#d93f30] text-white font-bold uppercase py-2.5 transition-colors cursor-pointer"
                >
                  XÁC NHẬN ĐẶT DỊCH VỤ
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
