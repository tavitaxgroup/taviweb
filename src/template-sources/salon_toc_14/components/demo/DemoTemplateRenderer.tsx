"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type SalonToc14Data,
  type ChronoBarberProduct,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

/**
 * Red Wavy Underline Divider matching ST017-salon_toc_14.png
 */
function WavyRedDivider() {
  return (
    <div className="mt-2 flex justify-center">
      <svg
        viewBox="0 0 60 10"
        className="h-2.5 w-14 text-[#eb5757]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M2 6c4-4 8-4 12 0s8 4 12 0 8-4 12 0 8 4 12 0 8-4 10-2" />
      </svg>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<SalonToc14Data>(mockData, incomingData);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(1);
  const [selectedProduct, setSelectedProduct] =
    useState<ChronoBarberProduct | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const [qName, setQName] = useState("");
  const [qEmail, setQEmail] = useState("");
  const [qPhone, setQPhone] = useState("");
  const [qSubject, setQSubject] = useState("");
  const [qMessage, setQMessage] = useState("");
  const [qSent, setQSent] = useState(false);

  const [footerEmail, setFooterEmail] = useState("");
  const [footerSubscribed, setFooterSubscribed] = useState(false);

  const notify = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  const primaryPhone = data.business.phone[0] || "(+84) 0313-728-397";
  const secondaryPhone = data.business.phone[1] || "(+84) 0909-789-888";
  const primaryEmail = data.business.email[0] || "info@themona.global";

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#eb5757] selection:text-white">
      {/* Floating Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-lg border border-[#eb5757] bg-[#181818] px-5 py-3 text-xs font-bold text-white shadow-2xl">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eb5757] text-white">
            ✓
          </span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Product / Service Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl overflow-hidden rounded-xl border-2 border-[#eb5757] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#181818] text-xs font-bold text-white hover:bg-[#eb5757]"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-[#f9f9f9] p-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-60 w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="inline-block rounded bg-[#faecec] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#eb5757]">
                    {selectedProduct.brand}
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-[#181818]">
                    {selectedProduct.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-black text-[#eb5757]">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {selectedProduct.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    notify(
                      `Đã thêm "${selectedProduct.name}" vào giỏ hàng ChronoBarber!`,
                    );
                    setSelectedProduct(null);
                  }}
                  className="mt-6 w-full rounded bg-[#eb5757] py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#181818]"
                >
                  ĐẶT LỊCH / MUA NGAY →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          1. TWO-ROW WHITE HEADER WITH CORAL CATEGORY BUTTON & SEARCH
      ===================================================================== */}
      <header id="trang-chu" className="border-b border-gray-100 bg-white">
        {/* Row 1: Logo + Category Dropdown + Search Bar + Icons */}
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          {/* Left Logo: chrono barber. */}
          <a href="#trang-chu" className="text-2xl font-black tracking-tight">
            <span className="text-[#181818]">{data.logoTextMain}</span>
            <span className="text-[#eb5757]">{data.logoTextDot}</span>
          </a>

          {/* Center: Coral Category Button + Wide Search Bar */}
          <div className="flex flex-1 max-w-2xl items-center gap-2">
            <button
              type="button"
              onClick={() =>
                notify("Danh mục: Cắt tạo kiểu, Sáp vuốt tóc, Tông đơ, Dưỡng râu")
              }
              className="flex shrink-0 items-center gap-2 rounded bg-[#eb5757] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#d84848]"
            >
              <span>☰ {data.categoryDropdownLabel}</span>
              <span>⌄</span>
            </button>

            <div className="flex flex-1 items-center overflow-hidden rounded border border-gray-200 bg-[#f7f7f7]">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Tìm kiếm kiểu tóc, sáp Reuzel, tông đơ Wahl..."
                className="w-full bg-transparent px-3.5 py-2 text-xs text-gray-800 focus:outline-none"
              />
              <button
                type="button"
                onClick={() =>
                  notify(
                    searchKeyword
                      ? `Đang tìm kiếm "${searchKeyword}"...`
                      : "Nhập từ khóa sản phẩm hoặc dịch vụ bạn cần tìm!",
                  )
                }
                aria-label="Tìm kiếm"
                className="bg-[#eb5757] px-3.5 py-2 text-xs font-bold text-white hover:bg-[#d84848]"
              >
                🔍
              </button>
            </div>
          </div>

          {/* Right: User + Wishlist + Cart Icons */}
          <div className="flex items-center gap-4 text-sm text-gray-700">
            <button
              type="button"
              onClick={() => notify("Cổng thành viên Quý ông ChronoBarber VIP")}
              aria-label="Tài khoản"
              className="hover:text-[#eb5757]"
            >
              👤
            </button>
            <button
              type="button"
              onClick={() => {
                setWishlistCount((w) => w + 1);
                notify("Đã lưu vào bộ sưu tập yêu thích!");
              }}
              aria-label="Yêu thích"
              className="relative hover:text-[#eb5757]"
            >
              ♡
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#eb5757] text-[9px] font-bold text-white">
                {wishlistCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() =>
                notify(`Giỏ hàng của bạn đang có ${cartCount} mục!`)
              }
              aria-label="Giỏ hàng"
              className="relative hover:text-[#eb5757]"
            >
              🛒
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#eb5757] text-[9px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Row 2: Navigation Links + Recently Viewed */}
        <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-gray-100 px-4 py-2.5 text-xs sm:px-6">
          <nav className="flex flex-wrap items-center gap-6 font-medium text-gray-700">
            {data.navigation.map((item: any, idx: number) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  idx === 0
                    ? "border-b-2 border-[#eb5757] pb-1 font-bold text-[#eb5757]"
                    : "transition hover:text-[#eb5757]"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() =>
              notify("Hiển thị các gói tạo kiểu & sản phẩm bạn vừa xem")
            }
            className="hidden text-xs text-gray-500 hover:text-[#eb5757] sm:inline-flex sm:items-center sm:gap-1"
          >
            <span>{data.recentViewedLabel}</span>
            <span>⌄</span>
          </button>
        </div>
      </header>

      {/* =====================================================================
          2. SOFT BLUSH-PINK SPLIT HERO (#faecec)
      ===================================================================== */}
      <section className="bg-[#faecec] py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-12">
          {/* Left Column */}
          <div className="md:col-span-6">
            <h1 className="text-2xl font-extrabold uppercase leading-snug tracking-wide text-[#181818] sm:text-3xl">
              {data.hero.title}
            </h1>
            <p className="mt-3 text-xs leading-relaxed text-gray-600">
              {data.hero.subtitle}
            </p>

            {/* Dual CTA Buttons: Black + Coral Red */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={data.hero.ctaLink}
                className="rounded bg-[#181818] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-gray-800"
              >
                {data.hero.ctaText}
              </a>
              <a
                href={data.hero.secondaryCtaLink}
                className="rounded bg-[#eb5757] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-[#d84848]"
              >
                {data.hero.secondaryCtaText}
              </a>
            </div>

            {/* Partner Capsule Box */}
            <div className="mt-8">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#181818]">
                {data.heroPartnersLabel}
              </p>
              <div className="mt-2.5 inline-flex flex-wrap items-center gap-5 rounded-full border border-gray-300/80 bg-white/60 px-6 py-2 text-xs font-extrabold tracking-wider text-gray-500">
                {data.heroPartners.map((partner) => (
                  <span key={partner}>{partner}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Gentleman Portrait */}
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="h-80 w-full object-cover sm:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ASYMMETRIC 2-PHOTO OVERLAPPING "ABOUT US" STAMP SECTION
      ===================================================================== */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          {/* Left: Square Portrait + Circular "ABOUT US" Stamp */}
          <div className="relative md:col-span-5">
            <img
              src={data.modernLeftImage}
              alt="ChronoBarber Bespoke Styling"
              className="h-72 w-full object-cover shadow-md"
            />
            {/* Circular Text Stamp Overlapping Bottom-Right Corner */}
            <div className="absolute -bottom-8 -right-6 flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-gray-400 bg-white/95 p-2 text-center text-[9px] font-black uppercase tracking-widest text-gray-700 shadow">
              ABOUT US • CHRONO BARBER •
            </div>
          </div>

          {/* Right: Heading + Wavy Red Line + Paragraph + Large Photo */}
          <div className="md:col-span-7">
            <div className="text-center">
              <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#181818] sm:text-xl">
                {data.modernSectionTitle}
              </h2>
              <WavyRedDivider />
              <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-gray-500">
                {data.modernSectionDesc}
              </p>
            </div>

            <div className="mt-6 overflow-hidden shadow-lg">
              <img
                src={data.modernRightImage}
                alt={data.modernSectionTitle}
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. "THƯƠNG HIỆU NỔI TIẾNG" + CORAL-RED "KHUYẾN MÃI GIỚI HẠN" (5x2)
      ===================================================================== */}
      <section id="khuyen-mai" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#181818]">
            {data.famousBrandsTitle}
          </h2>
          <WavyRedDivider />
        </div>

        {/* 6 Brand Logos Row */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-6">
          {data.famousBrands.map((brand) => (
            <div
              key={brand}
              className="py-2 text-xs font-extrabold tracking-widest text-gray-400 transition hover:text-[#eb5757]"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Coral-Red Framed Container (#f06e6e) with Dotted Corners */}
        <div className="relative mt-6 rounded-xl bg-[#f06e6e] p-5 shadow-xl sm:p-8">
          {/* Decorative Dotted Top Corners */}
          <span className="pointer-events-none absolute left-4 top-3 text-xs tracking-widest text-white/60">
            ••••••••
          </span>
          <span className="pointer-events-none absolute right-4 top-3 text-xs tracking-widest text-white/60">
            ••••••••
          </span>

          <div className="text-center text-white">
            <h3 className="text-base font-extrabold uppercase tracking-wider sm:text-lg">
              {data.limitedPromoTitle}
            </h3>
          </div>

          {/* 5x2 White Product Cards */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {data.limitedPromoItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className="group flex cursor-pointer flex-col justify-between rounded bg-white p-3 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="relative h-36 overflow-hidden bg-[#f9f9f9]">
                    {item.discountBadge && (
                      <span className="absolute left-1.5 top-1.5 z-10 rounded-xs bg-pink-100 px-1.5 py-0.5 text-[9px] font-bold text-[#eb5757]">
                        {item.discountBadge}
                      </span>
                    )}
                    {item.statusBadge === "PHO_BIEN" && (
                      <span className="absolute left-1.5 top-6 z-10 rounded-xs bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-emerald-700">
                        PHỔ BIẾN
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="mt-2.5 line-clamp-2 text-[10px] font-extrabold uppercase leading-snug text-gray-800 group-hover:text-[#eb5757]">
                    {item.name}
                  </h4>
                </div>
                <div className="mt-2 flex flex-wrap items-baseline gap-1.5 text-[10px]">
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through">
                      {item.originalPrice}
                    </span>
                  )}
                  <span className="font-extrabold text-[#eb5757]">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() =>
                notify("Đang mở toàn bộ danh sách Khuyến mãi giới hạn!")
              }
              className="rounded bg-[#181818] px-6 py-2 text-xs font-bold text-white transition hover:bg-gray-800"
            >
              Xem thêm →
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. "HƠN 20 NĂM MỘT THƯƠNG HIỆU" (OVERLAPPING PHOTOS + STATS)
      ===================================================================== */}
      <section
        id="gioi-thieu"
        className="my-12 bg-[#f5f6f8] py-16"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-12">
          {/* Left: Main Rounded Image + Overlapping Secondary Square Image */}
          <div className="relative md:col-span-6">
            <img
              src={data.heritageMainImage}
              alt={data.heritageTitle}
              className="h-72 w-4/5 rounded-2xl object-cover shadow-lg"
            />
            <img
              src={data.heritageSubImage}
              alt="ChronoBarber Craftsmanship"
              className=" -mt-20 ml-auto h-48 w-56 rounded-2xl border-4 border-white object-cover shadow-xl"
            />
          </div>

          {/* Right: Title + Text + 2 Stat Counters + Coral Button */}
          <div className="md:col-span-6">
            <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#181818] sm:text-xl">
              {data.heritageTitle}
            </h2>
            <WavyRedDivider />
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              {data.heritageParagraph}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-6 text-center">
              {data.heritageStats.map((st) => (
                <div key={st.label}>
                  <p className="text-2xl font-black text-[#181818] sm:text-3xl">
                    {st.value}
                  </p>
                  <p className="mt-1 text-[11px] text-gray-500">{st.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <a
                href="#lien-he"
                className="inline-block rounded bg-[#eb5757] px-6 py-2 text-xs font-bold text-white transition hover:bg-[#181818]"
              >
                Xem thêm →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. "SẢN PHẨM BÁN CHẠY" (5x2 WITH COLOR SWATCHES) + DARK CTA BANNER
      ===================================================================== */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#181818]">
            {data.bestSellerTitle}
          </h2>
          <WavyRedDivider />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {data.bestSellerItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProduct(item)}
              className="group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden rounded bg-[#fafafa]">
                {item.statusBadge === "PHO_BIEN" && (
                  <span className="absolute left-2 top-2 z-10 rounded-xs bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-emerald-700">
                    PHỔ BIẾN
                  </span>
                )}
                {item.statusBadge === "HET_HANG" && (
                  <span className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 bg-white/85 py-1 text-center text-[10px] font-bold text-gray-700">
                    Tạm kín lịch
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-2.5 line-clamp-1 text-[11px] font-semibold text-gray-700 group-hover:text-[#eb5757]">
                {item.name}
              </h3>
              <p className="mt-0.5 text-[11px] font-extrabold text-[#eb5757]">
                {item.price}
              </p>
              {item.swatches && (
                <div className="mt-1.5 flex items-center gap-1.5">
                  {item.swatches.map((hex, i) => (
                    <span
                      key={i}
                      style={{ backgroundColor: hex }}
                      className="h-3 w-3 rounded-full border border-gray-300"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => notify("Đang tải thêm sản phẩm bán chạy...")}
            className="rounded bg-[#181818] px-6 py-2 text-xs font-bold text-white transition hover:bg-[#eb5757]"
          >
            Xem thêm →
          </button>
        </div>
      </section>

      {/* Dark Full-Width CTA Banner ("LIÊN HỆ NGAY NẾU CÓ THẮC MẮC") */}
      <section className="relative my-8 overflow-hidden bg-[#12161f] py-14 text-white">
        <img
          src={data.midCtaBanner.backgroundImage}
          alt={data.midCtaBanner.title}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-lg font-extrabold uppercase tracking-wider sm:text-xl">
            {data.midCtaBanner.title}
          </h2>
          <WavyRedDivider />
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-gray-300">
            {data.midCtaBanner.subtitle}
          </p>
          <div className="mt-5">
            <a
              href="#lien-he"
              className="inline-block rounded bg-[#eb5757] px-6 py-2 text-xs font-bold text-white transition hover:bg-white hover:text-[#181818]"
            >
              {data.midCtaBanner.buttonLabel}
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. "SẢN PHẨM MỚI NHẤT" + SPLIT CRAFTSMANSHIP FEATURE SECTION
      ===================================================================== */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#181818]">
            {data.newestSectionTitle}
          </h2>
          <WavyRedDivider />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {[...data.newestItems, ...data.limitedPromoItems.slice(5, 10)].map(
            (item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => setSelectedProduct(item)}
                className="group cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden rounded bg-[#f9f9f9]">
                  {item.discountBadge && (
                    <span className="absolute left-2 top-2 z-10 rounded-xs bg-pink-100 px-1.5 py-0.5 text-[9px] font-bold text-[#eb5757]">
                      {item.discountBadge}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2.5 line-clamp-2 text-[10px] font-extrabold uppercase text-gray-800 group-hover:text-[#eb5757]">
                  {item.name}
                </h3>
                <div className="mt-1 flex items-baseline gap-1.5 text-[10px]">
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through">
                      {item.originalPrice}
                    </span>
                  )}
                  <span className="font-extrabold text-[#eb5757]">
                    {item.price}
                  </span>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => notify("Đã hiển thị toàn bộ Sản phẩm mới nhất!")}
            className="rounded bg-[#181818] px-6 py-2 text-xs font-bold text-white transition hover:bg-[#eb5757]"
          >
            Xem thêm →
          </button>
        </div>
      </section>

      {/* Split Feature Section: Left 2 Icon Blocks + Right Grooming Lifestyle Photo */}
      <section className="my-8 grid grid-cols-1 bg-[#f5f6f8] md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6 px-8 py-12 sm:px-16">
          {data.craftsmanshipFeatures.map((feat) => (
            <div key={feat.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg text-[#181818] shadow-xs">
                {feat.icon === "style" ? "💈" : "⏱"}
              </div>
              <h3 className="mt-3 text-sm font-extrabold text-[#181818]">
                {feat.title}
              </h3>
              <p className="mt-1 max-w-md text-xs leading-relaxed text-gray-500">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
        <div className="h-80 md:h-auto">
          <img
            src={data.craftsmanshipImage}
            alt="Thể hiện phong cách quý ông"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* =====================================================================
          8. "KHÁCH HÀNG ĐÁNH GIÁ" + QUESTION FORM + "CẬP NHẬT TIN TỨC"
      ===================================================================== */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#181818]">
            {data.customerReviewsTitle}
          </h2>
          <WavyRedDivider />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="relative rounded-xl border border-gray-100 bg-white p-6 pt-10 shadow-sm"
            >
              <img
                src={rev.avatar}
                alt={rev.name}
                className="absolute -top-5 left-6 h-12 w-12 rounded-lg object-cover shadow"
              />
              <p className="text-xs leading-relaxed text-gray-500">
                {rev.quote}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                <div>
                  <p className="text-xs font-extrabold text-[#181818]">
                    {rev.name}
                  </p>
                  <p className="text-[10px] text-gray-400">{rev.role}</p>
                </div>
                <span className="text-xs text-amber-400">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Split "Đặt câu hỏi" Form & Contact Details */}
      <section id="lien-he" className="bg-[#f8f3f3] py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-12">
          {/* Left White Card Form */}
          <div className="rounded-xl bg-white p-6 shadow-md sm:p-8 md:col-span-6">
            <h3 className="text-center text-base font-extrabold text-[#181818]">
              Đặt câu hỏi
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setQSent(true);
                notify("Đã gửi câu hỏi thành công! ChronoBarber sẽ liên hệ ngay.");
              }}
              className="mt-5 space-y-3"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  value={qName}
                  onChange={(e) => setQName(e.target.value)}
                  placeholder="Họ tên *"
                  className="rounded border border-gray-200 px-3 py-2 text-xs focus:border-[#eb5757] focus:outline-none"
                />
                <input
                  type="email"
                  required
                  value={qEmail}
                  onChange={(e) => setQEmail(e.target.value)}
                  placeholder="Email *"
                  className="rounded border border-gray-200 px-3 py-2 text-xs focus:border-[#eb5757] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="tel"
                  required
                  value={qPhone}
                  onChange={(e) => setQPhone(e.target.value)}
                  placeholder="Số điện thoại *"
                  className="rounded border border-gray-200 px-3 py-2 text-xs focus:border-[#eb5757] focus:outline-none"
                />
                <input
                  type="text"
                  value={qSubject}
                  onChange={(e) => setQSubject(e.target.value)}
                  placeholder="Chủ đề"
                  className="rounded border border-gray-200 px-3 py-2 text-xs focus:border-[#eb5757] focus:outline-none"
                />
              </div>
              <textarea
                rows={4}
                value={qMessage}
                onChange={(e) => setQMessage(e.target.value)}
                placeholder="Nội dung cần tư vấn..."
                className="w-full rounded border border-gray-200 px-3 py-2 text-xs focus:border-[#eb5757] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded bg-[#eb5757] py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#181818]"
              >
                GỬI LIÊN HỆ
              </button>
              {qSent && (
                <p className="text-center text-xs font-bold text-emerald-600">
                  ✓ Yêu cầu của bạn đã được ghi nhận!
                </p>
              )}
            </form>
          </div>

          {/* Right Contact Information */}
          <div className="md:col-span-6">
            <h3 className="text-lg font-extrabold uppercase text-[#181818]">
              LIÊN HỆ MỚI CÓ THẮC MẮC
            </h3>
            <WavyRedDivider />
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              Đội ngũ Master Barber và chuyên viên chăm sóc khách hàng luôn sẵn sàng giải đáp mọi câu hỏi về tạo mẫu tóc, đặt lịch hẹn VIP và tư vấn sản phẩm phù hợp chất tóc.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 text-xs sm:grid-cols-2">
              <div>
                <p className="font-extrabold text-[#181818]">📍 Địa chỉ</p>
                <p className="mt-1 text-gray-500">{data.business.address}</p>
              </div>
              <div>
                <p className="font-extrabold text-[#181818]">📞 Số điện thoại</p>
                <p className="mt-1 text-gray-500">{primaryPhone}</p>
                <p className="text-gray-500">{secondaryPhone}</p>
              </div>
              <div>
                <p className="font-extrabold text-[#181818]">✉️ Email</p>
                <p className="mt-1 text-gray-500">{primaryEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "CẬP NHẬT TIN TỨC" (3 Blog Cards) */}
      <section id="tin-tuc" className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#181818]">
            {data.newsSectionTitle}
          </h2>
          <WavyRedDivider />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.newsArticles.map((art) => (
            <article
              key={art.id}
              className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs"
            >
              <div>
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-4">
                  <span className="text-[10px] font-bold text-[#eb5757]">
                    🏷 {art.category}
                  </span>
                  <h3 className="mt-1 line-clamp-2 text-xs font-extrabold text-[#181818]">
                    {art.title}
                  </h3>
                  <p className="mt-1.5 text-[10px] text-gray-400">
                    👤 {art.author} • 💬 {art.comments} bình luận
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4">
                <button
                  type="button"
                  onClick={() => notify(`Đang đọc bài viết: ${art.title}`)}
                  className="rounded bg-[#181818] px-4 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#eb5757]"
                >
                  Xem thêm
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================================
          9. SOFT BLUSH FOOTER (#fdf3f3) + CORAL RED BOTTOM BAR (#eb5757)
      ===================================================================== */}
      <footer className="bg-[#fdf3f3] pt-12">
        <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1 */}
            <div className="lg:col-span-3">
              <div className="text-2xl font-black tracking-tight">
                <span className="text-[#181818]">{data.logoTextMain}</span>
                <span className="text-[#eb5757]">{data.logoTextDot}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                {data.business.tagline}
              </p>
              <div className="mt-4 flex gap-2">
                {["f", "TW", "YT"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => notify(`Đang mở kênh ${s} của ChronoBarber`)}
                    className="flex h-7 w-7 items-center justify-center rounded bg-white text-[10px] font-bold text-gray-700 shadow-2xs hover:bg-[#eb5757] hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-extrabold text-[#181818]">
                Thông tin liên hệ
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                <li>📍 Địa chỉ: {data.business.address}</li>
                <li>📞 Số điện thoại: {primaryPhone}</li>
                <li>✉️ Email: {primaryEmail}</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold text-[#181818]">Danh mục</h4>
              <ul className="mt-3 space-y-1.5 text-xs text-gray-500">
                {data.navigation.map((n: any) => (
                  <li key={n.label}>
                    <a href={n.href} className="hover:text-[#eb5757]">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold text-[#181818]">Đăng ký</h4>
              <p className="mt-3 text-xs text-gray-500">
                Đăng ký ngay để cập nhật tin tức và ưu đãi mới nhất.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (footerEmail.trim()) {
                    setFooterSubscribed(true);
                    setFooterEmail("");
                  }
                }}
                className="mt-3 flex overflow-hidden rounded border border-gray-200 bg-white"
              >
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Địa chỉ Email..."
                  className="w-full px-3 py-2 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#181818] px-3.5 py-2 text-xs font-bold text-white hover:bg-[#eb5757]"
                >
                  →
                </button>
              </form>
              {footerSubscribed && (
                <p className="mt-1.5 text-[11px] font-bold text-[#eb5757]">
                  ✓ Đăng ký thành công!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Coral Red Bottom Copyright Bar */}
        <div className="bg-[#eb5757] py-2.5 text-xs text-white">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 sm:px-6">
            <span>
              © Thiết kế và lập trình bởi{" "}
              <strong className="font-bold">{data.business.name}</strong>
            </span>
            <div className="flex gap-4 text-[11px]">
              <span>Chính sách bảo mật</span>
              <span>Điều khoản dịch vụ</span>
              <span>Chính sách đổi trả</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
