"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Gift,
  Droplets,
  Leaf,
  Sparkles,
  ShoppingBag,
  Menu,
  ChevronDown,
  CheckCircle2,
  X
} from "lucide-react";
import {
  adaptClonedTemplateData,
  type ClonedTemplateInput
} from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien16DefaultData,
  type AforexBotanicalData,
  type AforexEssentialOilCard
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  template?: ClonedTemplateInput;
  companyName?: string;
}

/**
 * Reusable Lotus-Bird Botanical Emblem matching TMV019-tham_my_vien_16.png
 */
function AforexLotusBirdLogo({
  brandName,
  darkTheme = false,
  compact = false
}: {
  brandName: string;
  darkTheme?: boolean;
  compact?: boolean;
}) {
  return (
    <div className="inline-flex flex-col items-center text-center">
      <svg
        viewBox="0 0 120 84"
        className={compact ? "h-9 w-14" : "h-16 w-24"}
        fill="none"
      >
        {/* Star Anise / Lotus Petals */}
        <path
          d="M52 44 C46 24, 52 10, 56 6 C60 12, 60 28, 55 44 Z"
          fill={darkTheme ? "#ffffff" : "#5c2612"}
        />
        <path
          d="M48 46 C34 32, 32 18, 34 12 C42 18, 48 32, 50 45 Z"
          fill={darkTheme ? "#e5e5e5" : "#78351b"}
        />
        <path
          d="M56 45 C66 28, 76 18, 82 16 C78 26, 68 38, 57 46 Z"
          fill={darkTheme ? "#e5e5e5" : "#78351b"}
        />
        {/* Graceful Bird Curve */}
        <path
          d="M16 68 C36 52, 58 54, 78 44 C86 38, 84 28, 92 26 C96 26, 100 30, 104 32 C96 34, 92 42, 86 50 C70 64, 42 58, 18 72 Z"
          fill={darkTheme ? "#f3c65f" : "#c78b3b"}
        />
      </svg>
      <span
        className={`font-serif font-extrabold tracking-wider ${
          compact ? "text-[10px]" : "text-xs sm:text-sm"
        } ${darkTheme ? "text-white" : "text-[#5c2612]"}`}
      >
        {brandName}
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({
  data,
  template,
  companyName
}: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<AforexBotanicalData>(
    thamMyVien16DefaultData,
    {
      ...(data || template || {}),
      ...(companyName ? { companyName } : {})
    }
  );

  const [selectedOil, setSelectedOil] =
    useState<AforexEssentialOilCard | null>(null);
  const [selectedVolume, setSelectedVolume] = useState("20ML");
  const [cartCount, setCartCount] = useState(2);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const primaryPhone =
    Array.isArray(merged.business.phone) && merged.business.phone.length > 0
      ? merged.business.phone[0]
      : "0918 686 397";
  const primaryEmail =
    Array.isArray(merged.business.email) && merged.business.email.length > 0
      ? merged.business.email[0]
      : "info@aforex.vn";

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#fdfaf5] font-sans text-stone-800 selection:bg-[#b85d38] selection:text-white"
    >
      {/* Floating Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl bg-[#5c2612] px-4 py-3 text-xs font-bold text-white shadow-2xl">
          <CheckCircle2 className="h-4 w-4 text-[#f3c65f]" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Essential Oil Quick View Modal */}
      {selectedOil && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border-2 border-[#b85d38] bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedOil(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-[#b85d38] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div
                style={{ backgroundColor: selectedOil.posterBg }}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl p-4"
              >
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-75">
                    OFFICIAL STORE
                  </span>
                  <h4
                    className={`mt-1 whitespace-pre-line text-lg font-black uppercase leading-tight ${
                      selectedOil.posterTextDark
                        ? "text-[#5c2612]"
                        : "text-white"
                    }`}
                  >
                    {selectedOil.posterHeading}
                  </h4>
                </div>
                <img
                  src={selectedOil.image}
                  alt={selectedOil.fullTitle}
                  className="my-3 h-40 w-full rounded-lg object-cover shadow"
                />
                <span
                  style={{ backgroundColor: selectedOil.badgeColor }}
                  className="self-end rounded px-2.5 py-0.5 text-xs font-black text-white"
                >
                  {selectedOil.discountBadge}
                </span>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-extrabold uppercase leading-snug text-stone-900">
                    {selectedOil.fullTitle}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xl font-black text-[#e60012]">
                      {selectedOil.price}
                    </span>
                    <span className="text-xs text-stone-400 line-through">
                      {selectedOil.oldPrice}
                    </span>
                  </div>

                  {/* Volume Selector */}
                  <div className="mt-3">
                    <span className="block text-[11px] font-bold text-stone-600">
                      Chọn dung tích:
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {["10ML", "20ML", "50ML", "100ML"].map((vol) => (
                        <button
                          key={vol}
                          type="button"
                          onClick={() => setSelectedVolume(vol)}
                          className={`rounded border px-2.5 py-1 text-[10px] font-bold ${
                            selectedVolume === vol
                              ? "border-[#b85d38] bg-[#b85d38] text-white"
                              : "border-stone-200 text-stone-600"
                          }`}
                        >
                          {vol}
                        </button>
                      ))}
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-stone-600">
                    {selectedOil.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#b85d38] text-[9px] font-bold text-white">
                          {i + 1}
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    showToast(
                      `Đã thêm "${selectedOil.fullTitle} (${selectedVolume})" vào giỏ hàng!`
                    );
                    setSelectedOil(null);
                  }}
                  className="mt-5 w-full rounded-xl bg-[#b85d38] py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#964828]"
                >
                  Đặt Mua Tinh Dầu Nguyên Chất
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 1. BOTANICAL HEADER (MATCHING TMV019) ==================== */}
      <header className="sticky top-0 z-40 border-b border-amber-900/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <AforexLotusBirdLogo
              brandName={merged.business.name}
              compact={true}
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {merged.navigation.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition ${
                  idx === 0
                    ? "text-[#b85d38]"
                    : "text-stone-600 hover:text-[#b85d38]"
                }`}
              >
                {idx === 1 && <Leaf className="h-3.5 w-3.5 text-[#b85d38]" />}
                {idx === 2 && (
                  <Droplets className="h-3.5 w-3.5 text-[#b85d38]" />
                )}
                {idx === 3 && (
                  <Sparkles className="h-3.5 w-3.5 text-[#b85d38]" />
                )}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] font-bold text-stone-700 sm:inline-flex">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-600" />
              <span>VN</span>
              <ChevronDown className="h-3 w-3" />
            </span>

            <button
              type="button"
              onClick={() =>
                showToast(`Giỏ hàng thảo mộc đang có ${cartCount} sản phẩm.`)
              }
              className="flex items-center gap-1.5 rounded-full bg-[#b85d38] px-4 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-[#964828]"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Giỏ hàng ({cartCount})</span>
            </button>
          </div>
        </div>
      </header>

      {/* ==================== 2. HERO SHOWCASE & DARK CHARCOAL "HỒI QUẾ LẠNG SƠN" CARD (MATCHING TMV019) ==================== */}
      <section className="relative overflow-hidden bg-[#f3ead8] pt-10 pb-16">
        {/* Soft Botanical Star-Anise Background Texture */}
        <img
          src={merged.hero.backgroundImage}
          alt={merged.hero.title}
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdf8ee]/80 via-[#f5ead4]/85 to-[#ead5b3]/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Top Stacked Purple & Hot-Pink Ribbons + Right Dark Charcoal Card */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="flex flex-col items-start gap-2.5 lg:col-span-7">
              <div className="inline-block bg-[#6e0dd0] px-5 py-2.5 shadow-lg sm:px-7 sm:py-3">
                <h1 className="font-sans text-xl font-black uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {merged.heroPurpleRibbon}
                </h1>
              </div>
              <div className="inline-block bg-[#f01888] px-5 py-2.5 shadow-lg sm:px-7 sm:py-3">
                <p className="font-sans text-xl font-black uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
                  {merged.heroPinkRibbon}
                </p>
              </div>
              <p className="mt-3 max-w-xl text-xs leading-relaxed text-stone-700 sm:text-sm">
                {merged.hero.subtitle}
              </p>
            </div>

            {/* Right 5 Cols: Floating Dark Charcoal & Gold Script Card matching TMV019 */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-[#232323] p-6 text-center text-white shadow-2xl transition-transform duration-500 lg:-rotate-3 lg:hover:rotate-0">
                <img
                  src={merged.hero.backgroundImage}
                  alt="Hồi Quế Lạng Sơn"
                  className="absolute inset-0 h-full w-full object-cover opacity-25"
                />
                <div className="relative z-10">
                  {/* Top Bar inside Dark Card */}
                  <div className="flex items-center justify-between text-xs text-stone-300">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-600" />
                      <span>{merged.darkBadgeCard.langLabel} ▾</span>
                    </span>
                    <AforexLotusBirdLogo
                      brandName={merged.business.name}
                      darkTheme={true}
                      compact={true}
                    />
                    <Menu className="h-4 w-4 text-white" />
                  </div>

                  <h2 className="mt-5 text-base font-extrabold uppercase tracking-[0.14em] text-white sm:text-lg">
                    {merged.darkBadgeCard.heading}
                  </h2>
                  <p className="mt-1 font-serif text-2xl italic text-[#f3c65f] sm:text-3xl">
                    {merged.darkBadgeCard.goldScript}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Showcase Row: Left White Square AFOREX Logo Card + Right Poster Cards Grid */}
          <div
            id="bo-suu-tap-tinh-dau"
            className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12"
          >
            {/* Left 3 Cols: White Square Logo Card matching TMV019 Bottom-Left */}
            <div className="flex flex-col items-center gap-5 lg:col-span-3">
              <div className="flex aspect-square w-full max-w-[240px] flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-xl">
                <AforexLotusBirdLogo brandName={merged.business.name} />
                <p className="mt-3 text-center text-[11px] font-medium text-stone-500">
                  Chứng nhận Tinh dầu Thảo mộc Tự nhiên &amp; Liệu pháp Thẩm mỹ
                  Hữu cơ
                </p>
              </div>

              <div className="w-full max-w-[240px] rounded-2xl border border-amber-900/15 bg-white/90 p-4 text-xs text-stone-700 shadow-sm">
                <p className="font-extrabold uppercase text-[#b85d38]">
                  Ưu đãi đơn hàng mới
                </p>
                <p className="mt-1 leading-relaxed">
                  Tặng ngay túi thơm Hồi – Quế Lạng Sơn khử mùi &amp; thư giãn
                  cho mọi đơn hàng từ <strong>200.000 ₫</strong>.
                </p>
              </div>
            </div>

            {/* Right 9 Cols: Red "Bán chạy nhất" Tab + 6 Color-Coded Botanical Poster Cards */}
            <div className="rounded-3xl bg-white p-5 shadow-2xl sm:p-8 lg:col-span-9">
              {/* Top Progress Line + Red "Bán chạy nhất" Badge */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-12 rounded-full bg-[#eab308]" />
                    <span className="h-0.5 w-24 bg-stone-200" />
                  </div>
                  <span className="inline-block rounded-lg bg-[#e60012] px-4 py-1.5 text-xs font-extrabold text-white shadow">
                    Bán chạy nhất
                  </span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Tinh dầu nguyên chất 100% • Đủ dung tích 10ml / 20ml / 50ml /
                  100ml
                </p>
              </div>

              {/* 6 Color-Coded Poster Cards Grid matching TMV019 */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {merged.essentialOilCards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => setSelectedOil(card)}
                    className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Graphic Poster Top Half */}
                    <div
                      style={{ backgroundColor: card.posterBg }}
                      className={`relative flex flex-col justify-between p-4 ${
                        card.posterTextDark ? "text-[#4a2010]" : "text-white"
                      }`}
                    >
                      {/* Top Official Store Row */}
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider opacity-85">
                        <span>🌿 OFFICIAL STORE</span>
                        <span>AFOREX</span>
                      </div>

                      {/* Poster Title & Subtitle */}
                      <div className="mt-2">
                        <h3 className="whitespace-pre-line font-sans text-lg font-black uppercase leading-tight">
                          {card.posterHeading}
                        </h3>
                        <p className="text-[10px] italic opacity-85">
                          {card.posterSub}
                        </p>
                      </div>

                      {/* Center Split: Numbered 1-2-3 White Benefit Pills Left + Product Image Right */}
                      <div className="my-3 grid grid-cols-12 items-center gap-2">
                        <div className="col-span-7 space-y-1.5">
                          {card.benefits.map((ben, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1.5 rounded-full bg-white/95 px-2 py-1 text-[9px] font-bold leading-tight text-stone-800 shadow-2xs"
                            >
                              <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#b85d38] text-[8px] font-black text-white">
                                {idx + 1}
                              </span>
                              <span className="line-clamp-2">{ben}</span>
                            </div>
                          ))}
                        </div>
                        <div className="col-span-5">
                          <div className="aspect-[3/4] overflow-hidden rounded-lg border border-white/40 bg-white shadow-md">
                            <img
                              src={card.image}
                              alt={card.fullTitle}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Gift Row + Discount Corner Tag */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-extrabold text-[#b85d38] shadow-2xs">
                          <Gift className="h-3 w-3 text-[#e60012]" />
                          <span>{card.giftNote}</span>
                        </div>

                        <span
                          style={{ backgroundColor: card.badgeColor }}
                          className="rounded px-2 py-0.5 text-[11px] font-black text-white shadow"
                        >
                          {card.discountBadge}
                        </span>
                      </div>
                    </div>

                    {/* White Bottom Caption Box */}
                    <div className="flex flex-1 flex-col justify-between bg-white p-3.5">
                      <h4 className="line-clamp-2 text-[11px] font-extrabold uppercase leading-snug text-stone-900 group-hover:text-[#b85d38]">
                        {card.fullTitle}
                      </h4>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-sm font-black text-[#e60012]">
                            {card.price}
                          </span>
                          <span className="text-[10px] text-stone-400 line-through">
                            {card.oldPrice}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-[#b85d38] underline">
                          Chọn mua →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. LIỆU TRÌNH SPA THẢO MỘC HỒI QUẾ TẠI VIỆN THẨM MỸ AFOREX ==================== */}
      <section
        id="lieu-trinh-thao-moc"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
      >
        <div className="text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-[#b85d38]">
            TRỊ LIỆU THẨM MỸ &amp; DƯỠNG SINH TỰ NHIÊN
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-stone-900 sm:text-3xl">
            Liệu Trình Chăm Sóc Sắc Đẹp Ứng Dụng Tinh Dầu Hồi Quế Xứ Lạng
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
          {merged.spaTreatments.map((tr) => (
            <div
              key={tr.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-900/10 bg-white shadow-sm"
            >
              <div>
                <div className="h-52 overflow-hidden bg-stone-100">
                  <img
                    src={tr.image}
                    alt={tr.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#b85d38]">
                    🌿 {tr.herbsUsed}
                  </span>
                  <h3 className="mt-1.5 text-base font-extrabold text-stone-900">
                    {tr.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-600">
                    {tr.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-stone-100 px-6 py-4">
                <div>
                  <span className="text-base font-black text-[#e60012]">
                    {tr.price}
                  </span>{" "}
                  <span className="text-xs text-stone-400">
                    / {tr.duration}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    showToast(`Đã đăng ký lịch hẹn "${tr.title}" tại Aforex!`)
                  }
                  className="rounded-lg bg-[#b85d38] px-4 py-2 text-xs font-bold text-white hover:bg-[#964828]"
                >
                  Đặt lịch Spa
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 4. QUY TRÌNH CHƯNG CẤT TINH DẦU NGUYÊN CHẤT ==================== */}
      <section id="quy-trinh-chung-cat" className="bg-[#232323] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="font-serif text-xl italic text-[#f3c65f]">
              Tinh hoa xứ Lạng
            </p>
            <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wider sm:text-3xl">
              Quy Trình 4 Bước Chưng Cất Tinh Dầu Hữu Cơ Chuẩn Quốc Tế
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merged.distillationSteps.map((st) => (
              <div
                key={st.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="font-serif text-2xl font-bold text-[#f3c65f]">
                  {st.step}
                </span>
                <h3 className="mt-3 text-sm font-extrabold text-white">
                  {st.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-300">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. FOOTER ==================== */}
      <footer id="footer-aforex" className="bg-[#181512] py-12 text-stone-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <AforexLotusBirdLogo
                brandName={merged.business.name}
                darkTheme={true}
                compact={true}
              />
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                {merged.business.tagline}. Tự hào mang tinh hoa Hồi – Quế Lạng
                Sơn chăm sóc sức khỏe và sắc đẹp phụ nữ Việt.
              </p>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                LIÊN HỆ NHÀ MÁY &amp; SHOWROOM
              </h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f3c65f]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#f3c65f]" />
                  <span className="font-bold text-white">{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#f3c65f]" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                SẢN PHẨM CHỦ LỰC
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs">
                {merged.essentialOilCards.slice(0, 5).map((c) => (
                  <li key={c.id}>
                    <a href="#bo-suu-tap-tinh-dau" className="hover:text-white">
                      • {c.posterHeading.replace("\n", " ")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
            © Bản quyền thuộc về{" "}
            <strong className="text-white">{merged.business.name}</strong> •
            Hồi Quế Lạng Sơn — Tinh hoa xứ Lạng.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
