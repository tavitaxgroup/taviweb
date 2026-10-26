"use client";

import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Cloud,
  CloudRain,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Sun,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh20DefaultData,
  type KidsStoreProduct,
  type TrungTamTiengAnh20Data
} from "../../data/mockData";

interface Props {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: Props) {
  const merged = adaptClonedTemplateData(
    trungTamTiengAnh20DefaultData,
    data
  ) as TrungTamTiengAnh20Data;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAgeTab, setActiveAgeTab] = useState<
    "all" | "infant" | "toddler" | "preschool"
  >("all");
  const [selectedStoreCategory, setSelectedStoreCategory] = useState<string>(
    merged.onlineStoreCategoriesLeft[0] || "Sách và Truyện tranh"
  );
  const [cartCount, setCartCount] = useState(2);
  const [selectedProduct, setSelectedProduct] =
    useState<KidsStoreProduct | null>(null);
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [enrollForm, setEnrollForm] = useState({
    parentName: "",
    phone: "",
    childAge: "3 - 4 tuổi"
  });
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);

  const primaryPhone = merged.business.phone[0] || "076 922 0162";
  const hotlinePhone = merged.business.phone[1] || "1900 636 648";
  const primaryEmail = merged.business.email[0] || "mon@mona.media";

  const filteredProducts =
    activeAgeTab === "all"
      ? merged.popularProducts
      : merged.popularProducts.filter((p) => p.ageGroup === activeAgeTab);

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollForm.parentName.trim() || !enrollForm.phone.trim()) return;
    setEnrollSubmitted(true);
  };

  const renderColorfulLogo = () => (
    <a href="#top" className="inline-flex items-baseline font-extrabold tracking-tight">
      <span className="text-2xl text-[#e6004c] sm:text-3xl">K</span>
      <span className="text-2xl text-[#ff9800] sm:text-3xl">i</span>
      <span className="text-2xl text-[#8bc34a] sm:text-3xl">d</span>
      <span className="text-2xl text-[#00bcd4] sm:text-3xl">s</span>
      <span className="ml-0.5 text-2xl text-[#4a32a8] sm:text-3xl">M</span>
      <span className="text-2xl text-[#ff5722] sm:text-3xl">o</span>
      <span className="text-2xl text-[#009688] sm:text-3xl">n</span>
      <span className="text-2xl text-[#e91e63] sm:text-3xl">a</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Royal Purple Topbar */}
      <div className="bg-[#4a32a8] py-2 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 text-[11px] font-medium">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[#fae042]" />
              EMAIL: {primaryEmail}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#fae042]" />
              HOTLINE: {primaryPhone}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setEnrollOpen(true)}
              className="rounded-full bg-[#fae042] px-3 py-0.5 text-[10px] font-extrabold uppercase text-[#4a32a8] transition hover:bg-white"
            >
              Đăng ký học thử
            </button>
          </div>
        </div>
      </div>

      {/* 2. White Navbar with Colorful KidsMona Logo */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          {renderColorfulLogo()}

          <nav className="hidden items-center gap-6 text-xs font-extrabold uppercase tracking-wide text-slate-700 lg:flex">
            <a href="#top" className="text-[#e6004c] transition">
              TRANG CHỦ
            </a>
            <a href="#features-strip" className="transition hover:text-[#e6004c]">
              GIỚI THIỆU
            </a>
            <a href="#popular-products" className="transition hover:text-[#e6004c]">
              SẢN PHẨM
            </a>
            <a href="#classroom-strips" className="transition hover:text-[#e6004c]">
              ĐỘI NGŨ GIÁO VIÊN
            </a>
            <a href="#online-store" className="transition hover:text-[#e6004c]">
              TIN TỨC
            </a>
            <a href="#footer-contact" className="transition hover:text-[#e6004c]">
              LIÊN HỆ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#popular-products"
              className="relative inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200"
            >
              <ShoppingBag className="h-4 w-4 text-[#e6004c]" />
              <span className="rounded-full bg-[#e6004c] px-1.5 py-0.2 text-[10px] font-extrabold text-white">
                {cartCount}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded p-1.5 text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2.5 text-xs font-bold uppercase text-slate-700">
              <a href="#features-strip" onClick={() => setMobileMenuOpen(false)}>
                GIỚI THIỆU
              </a>
              <a href="#popular-products" onClick={() => setMobileMenuOpen(false)}>
                SẢN PHẨM
              </a>
              <a href="#classroom-strips" onClick={() => setMobileMenuOpen(false)}>
                ĐỘI NGŨ GIÁO VIÊN
              </a>
              <a href="#online-store" onClick={() => setMobileMenuOpen(false)}>
                CỬA HÀNG TRỰC TUYẾN
              </a>
              <a href="#footer-contact" onClick={() => setMobileMenuOpen(false)}>
                LIÊN HỆ
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Classroom Hero Banner */}
      <section id="top" className="relative overflow-hidden">
        <div className="relative min-h-[430px] w-full sm:min-h-[500px]">
          <img
            src={merged.hero.backgroundImage}
            alt={merged.hero.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-900/35 to-slate-950/60" />

          <div className="relative z-10 mx-auto flex min-h-[430px] max-w-5xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[500px]">
            <h1 className="max-w-3xl text-3xl font-black leading-tight text-white drop-shadow-md sm:text-5xl">
              {merged.hero.title}
            </h1>

            <div className="mt-6 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => setEnrollOpen(true)}
                className="rounded-full bg-white px-8 py-2.5 text-sm font-extrabold text-[#4a32a8] shadow-lg transition hover:scale-105 hover:bg-[#fae042]"
              >
                {merged.hero.ctaText}
              </button>

              <span className="rounded-full bg-[#4a32a8] px-6 py-2 text-xs font-bold text-white shadow-md sm:text-sm">
                {merged.hero.eyebrow}
              </span>
            </div>

            <p className="mt-8 rounded-full bg-black/45 px-5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
              Đặt câu hỏi hoặc gọi ngay cho chúng tôi HOTLINE :{" "}
              <strong className="text-[#fae042]">{hotlinePhone}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 4. 6-Column Alternating Photo & Color Strip + Black Label Bar */}
      <section id="features-strip" className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {merged.stripCards.map((card) => (
            <div key={card.id} className="flex flex-col">
              <div
                className="relative flex h-44 items-center justify-center overflow-hidden"
                style={{
                  backgroundColor:
                    card.type === "color" ? card.bgColor : "#1e293b"
                }}
              >
                {card.type === "image" && card.image ? (
                  <img
                    src={card.image}
                    alt={card.label}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-white">
                    {card.iconType === "sun" && (
                      <Sun className="h-16 w-16 stroke-[1.75] text-white drop-shadow" />
                    )}
                    {card.iconType === "cloud" && (
                      <Cloud className="h-16 w-16 stroke-[1.75] text-white drop-shadow" />
                    )}
                    {card.iconType === "rain" && (
                      <CloudRain className="h-16 w-16 stroke-[1.75] text-white drop-shadow" />
                    )}
                  </div>
                )}
              </div>
              <div className="bg-[#222222] px-2 py-3 text-center text-xs font-bold text-white">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Three Fullwidth Color-Blocked Toy / Course Banners */}
      <section>
        {merged.colorBanners.map((banner) => {
          const isImageLeft = banner.align === "left";
          return (
            <div
              key={banner.id}
              style={{ backgroundColor: banner.bgColor }}
              className="py-12 text-white sm:py-16"
            >
              <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-12">
                <div
                  className={`md:col-span-6 ${
                    isImageLeft ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h2 className="text-2xl font-black leading-tight sm:text-4xl">
                    {banner.title}
                  </h2>
                  <p className="mt-3 max-w-md text-xs leading-relaxed text-white/90 sm:text-sm">
                    {banner.subtitle}
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setEnrollOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-2 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-white hover:text-slate-900"
                    >
                      {banner.ctaText}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div
                  className={`flex justify-center md:col-span-6 ${
                    isImageLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="overflow-hidden rounded-3xl border-4 border-white/30 bg-white/10 p-2 shadow-2xl">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="h-56 w-80 rounded-2xl object-cover sm:h-64 sm:w-96"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 6. Sunny Yellow "Cửa hàng trực tuyến" Section */}
      <section
        id="online-store"
        className="relative overflow-hidden bg-[#fae042] py-14 text-slate-900"
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#4a32a8] sm:text-3xl">
              Cửa hàng trực tuyến
            </h2>
            <p className="mt-1 text-xs font-semibold text-slate-700">
              Chọn danh mục đồ dùng học tập & phụ kiện mầm non song ngữ cho bé
            </p>
          </div>

          <div className="mt-10 grid items-center gap-8 md:grid-cols-12">
            {/* Left 5 Categories */}
            <div className="space-y-3 md:col-span-4">
              {merged.onlineStoreCategoriesLeft.map((cat) => {
                const active = selectedStoreCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedStoreCategory(cat)}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-4 py-2.5 text-left text-xs font-extrabold transition sm:text-sm ${
                      active
                        ? "bg-[#4a32a8] text-white shadow"
                        : "bg-white/60 text-slate-900 hover:bg-white"
                    }`}
                  >
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 ${
                        active ? "text-[#fae042]" : "text-[#e6004c]"
                      }`}
                    />
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Right 5 Categories */}
            <div className="space-y-3 md:col-span-4">
              {merged.onlineStoreCategoriesRight.map((cat) => {
                const active = selectedStoreCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedStoreCategory(cat)}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-4 py-2.5 text-left text-xs font-extrabold transition sm:text-sm ${
                      active
                        ? "bg-[#4a32a8] text-white shadow"
                        : "bg-white/60 text-slate-900 hover:bg-white"
                    }`}
                  >
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 ${
                        active ? "text-[#fae042]" : "text-[#e6004c]"
                      }`}
                    />
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Floating 3D Alphabet Blocks / Preview Card */}
            <div className="md:col-span-4">
              <div className="rounded-3xl border-4 border-white bg-white/90 p-5 text-center shadow-xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6004c] text-white shadow">
                  <BookOpen className="h-7 w-7" />
                </div>
                <span className="mt-3 inline-block rounded-full bg-[#4a32a8]/10 px-3 py-0.5 text-[10px] font-extrabold uppercase text-[#4a32a8]">
                  Danh mục đang chọn
                </span>
                <h3 className="mt-1.5 text-base font-black text-slate-900">
                  {selectedStoreCategory}
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Học cụ chuẩn an toàn châu Âu EN71 dành riêng cho học sinh
                  KidsMona.
                </p>
                <a
                  href="#popular-products"
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#e6004c] px-5 py-2 text-xs font-bold text-white shadow hover:bg-[#c50040]"
                >
                  Xem sản phẩm <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Two Horizontal Classroom Photo Strips */}
      <section id="classroom-strips" className="w-full">
        {merged.classroomStrips.map((strip) => (
          <div
            key={strip.id}
            className="group relative h-60 w-full overflow-hidden sm:h-72"
          >
            <img
              src={strip.image}
              alt={strip.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/25 to-transparent" />
            <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-8 text-white">
              <span className="w-fit rounded-full bg-[#fae042] px-3 py-0.5 text-[10px] font-extrabold uppercase text-slate-900">
                Hoạt động lớp học KidsMona
              </span>
              <h3 className="mt-2 text-xl font-black sm:text-2xl">
                {strip.title}
              </h3>
              <p className="mt-1 max-w-xl text-xs text-slate-100 sm:text-sm">
                {strip.caption}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 8. Sky Blue "Sản phẩm phổ biến" Section */}
      <section id="popular-products" className="bg-[#3ba9f4] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-black sm:text-3xl">
              Sản phẩm phổ biến
            </h2>

            {/* Age Group Tabs */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {[
                { id: "all", label: "TẤT CẢ" },
                { id: "infant", label: "TRẺ SƠ SINH" },
                { id: "toddler", label: "TRẺ TẬP ĐI" },
                { id: "preschool", label: "TRẺ MẪU GIÁO" }
              ].map((tab) => {
                const isActive = activeAgeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setActiveAgeTab(
                        tab.id as "all" | "infant" | "toddler" | "preschool"
                      )
                    }
                    className={`rounded-full px-5 py-2 text-xs font-extrabold uppercase tracking-wider transition ${
                      isActive
                        ? "bg-white text-[#0d5aa7] shadow"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4 White Product Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white p-4 text-center text-slate-800 shadow-lg transition hover:-translate-y-1.5 hover:shadow-xl"
              >
                {product.saleBadge && (
                  <span className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#fae042] text-[10px] font-black leading-tight text-slate-900 shadow">
                    Giảm
                    <br />
                    giá
                  </span>
                )}

                <div className="relative mx-auto flex h-44 w-full items-center justify-center overflow-hidden rounded-lg bg-slate-50 p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 line-clamp-2 text-xs font-bold text-slate-700 group-hover:text-[#4a32a8] sm:text-sm">
                  {product.name}
                </h3>

                {/* 5 Gold Stars */}
                <div className="mt-2 flex items-center justify-center gap-0.5 text-[#f59e0b]">
                  {Array.from({ length: product.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}
                </div>

                <div className="mt-2 flex items-center justify-center gap-2">
                  {product.oldPrice && (
                    <span className="text-[11px] text-slate-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="text-sm font-black text-slate-900">
                    {product.price}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCartCount((c) => c + 1);
                    setSelectedProduct(product);
                  }}
                  className="mt-3 rounded-full bg-[#4a32a8] px-4 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#e6004c]"
                >
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Fullwidth Map Section */}
      <section className="relative h-64 w-full bg-slate-200 sm:h-72">
        <iframe
          title="Bản đồ cơ sở KidsMona"
          src="https://www.google.com/maps?q=319+L%C3%BD+Th%C6%B0%E1%BB%9Dng+Ki%E1%BB%87t,+Qu%E1%BA%ADn+11,+TP.HCM&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </section>

      {/* 10. White 4-Column KidsMona Footer */}
      <footer
        id="footer-contact"
        className="border-t border-slate-200 bg-white text-slate-700"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: KidsMona */}
          <div>
            {renderColorfulLogo()}
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              {merged.business.aboutText[0]}
            </p>
            <div className="mt-4 space-y-1.5 text-xs text-slate-600">
              {(merged.business.highlights || []).map((item: any, idx: number) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8bc34a]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Thư viện 3x2 */}
          <div>
            <h3 className="text-sm font-black text-slate-900">Thư viện</h3>
            <div className="mt-1 h-0.5 w-8 bg-[#fae042]" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {merged.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded bg-slate-100"
                >
                  <img
                    src={img}
                    alt={`KidsMona gallery ${i + 1}`}
                    className="h-full w-full object-cover transition hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Liên hệ */}
          <div>
            <h3 className="text-sm font-black text-slate-900">Liên hệ</h3>
            <div className="mt-1 h-0.5 w-8 bg-[#00a3b4]" />
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e6004c]" />
                <span>{merged.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#4a32a8]" />
                <span>
                  {primaryPhone} – Hotline: {hotlinePhone}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#00a3b4]" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Bài viết mới */}
          <div>
            <h3 className="text-sm font-black text-slate-900">Bài viết mới</h3>
            <div className="mt-1 h-0.5 w-8 bg-[#e6004c]" />
            <div className="mt-4 space-y-3">
              {merged.latestPosts.map((post) => (
                <div key={post.id} className="flex gap-2.5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-12 w-12 shrink-0 rounded object-cover"
                  />
                  <div>
                    <h4 className="line-clamp-2 text-xs font-bold text-slate-800 hover:text-[#e6004c]">
                      {post.title}
                    </h4>
                    <p className="mt-0.5 text-[10px] text-slate-400">
                      {post.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 py-3 text-center text-[11px] text-slate-500">
          © Bản quyền thuộc về {merged.business.name}.
        </div>
      </footer>

      {/* Product Quick-View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="mx-auto h-48 w-full rounded-xl object-cover"
            />
            <span className="mt-3 inline-block rounded-full bg-[#fae042] px-3 py-0.5 text-[10px] font-black uppercase text-slate-900">
              Cửa hàng học cụ KidsMona
            </span>
            <h3 className="mt-2 text-lg font-black text-slate-900">
              {selectedProduct.name}
            </h3>
            <p className="mt-1 text-base font-extrabold text-[#e6004c]">
              {selectedProduct.price}
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Sản phẩm chính hãng an toàn cho trẻ em, giao hàng tận nơi hoặc
              nhận trực tiếp tại quầy lễ tân cơ sở KidsMona.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  setSelectedProduct(null);
                  setEnrollOpen(true);
                }}
                className="rounded-full bg-[#4a32a8] px-5 py-2 text-xs font-bold text-white hover:bg-[#e6004c]"
              >
                Đặt mua / Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enrollment Modal */}
      {enrollOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setEnrollOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2 text-[#4a32a8]">
              <Sparkles className="h-5 w-5 text-[#e6004c]" />
              <h3 className="text-lg font-black">
                Đăng ký Nhập học & Tham quan KidsMona
              </h3>
            </div>
            {enrollSubmitted ? (
              <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-xs text-emerald-800">
                <p className="font-bold">Đăng ký thành công!</p>
                <p className="mt-1">
                  Bộ phận Tuyển sinh KidsMona sẽ liên hệ phụ huynh{" "}
                  <strong>{enrollForm.parentName}</strong> qua số{" "}
                  <strong>{enrollForm.phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnrollSubmit} className="mt-4 space-y-3">
                <input
                  type="text"
                  required
                  value={enrollForm.parentName}
                  onChange={(e) =>
                    setEnrollForm({ ...enrollForm, parentName: e.target.value })
                  }
                  placeholder="Họ tên Phụ huynh..."
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#4a32a8] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  value={enrollForm.phone}
                  onChange={(e) =>
                    setEnrollForm({ ...enrollForm, phone: e.target.value })
                  }
                  placeholder="Số điện thoại liên hệ..."
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#4a32a8] focus:outline-none"
                />
                <select
                  value={enrollForm.childAge}
                  onChange={(e) =>
                    setEnrollForm({ ...enrollForm, childAge: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-xs focus:border-[#4a32a8] focus:outline-none"
                >
                  <option value="1 - 2 tuổi (Trẻ sơ sinh & Tập đi)">
                    1 - 2 tuổi (Trẻ sơ sinh & Tập đi)
                  </option>
                  <option value="3 - 4 tuổi (Mẫu giáo bé)">
                    3 - 4 tuổi (Mẫu giáo bé)
                  </option>
                  <option value="5 - 6 tuổi (Tiền tiểu học Song ngữ)">
                    5 - 6 tuổi (Tiền tiểu học Song ngữ)
                  </option>
                </select>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#e6004c] py-2.5 text-xs font-extrabold uppercase text-white shadow hover:bg-[#c50040]"
                >
                  Gửi đăng ký ngay
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
