"use client";

import React, { useState } from "react";
import {
  Phone,
  Search,
  MapPin,
  Award,
  ShieldCheck,
  Sparkles,
  ShoppingCart,
  MessageCircle,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Mail
} from "lucide-react";
import {
  adaptClonedTemplateData,
  type ClonedTemplateInput
} from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien15DefaultData,
  type SongTraAestheticData,
  type SongTraCatalogItem
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  template?: ClonedTemplateInput;
  companyName?: string;
}

/**
 * Reusable Sông Trà Emblem Badge matching TMV018-tham_my_vien_15.png
 */
function SongTraBrandBadge({
  brandName,
  large = false
}: {
  brandName: string;
  large?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 bg-[#d71920] text-white shadow-md ${
        large ? "px-6 py-4" : "px-4 py-2"
      }`}
    >
      {/* Dynamic Aesthetic Wave / Mobility Emblem SVG */}
      <svg
        viewBox="0 0 64 48"
        className={large ? "h-11 w-14" : "h-7 w-9"}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="28" cy="10" r="6" />
        <path d="M8 38 C8 26, 20 26, 24 38 L42 38 C45 24, 58 26, 56 38" />
        <path d="M16 24 L36 24 L42 14" />
      </svg>
      <span
        className={`font-sans font-black uppercase tracking-wider ${
          large ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"
        }`}
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
  const merged = adaptClonedTemplateData<SongTraAestheticData>(
    thamMyVien15DefaultData,
    {
      ...(data || template || {}),
      ...(companyName ? { companyName } : {})
    }
  );

  const [activeTab, setActiveTab] = useState<
    "all" | "may-nang-co" | "laser-tre-hoa" | "duoc-my-pham" | "goi-4s"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSwatchByItem, setSelectedSwatchByItem] = useState<
    Record<string, number>
  >({});
  const [modalItem, setModalItem] = useState<SongTraCatalogItem | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const primaryPhone =
    Array.isArray(merged.business.phone) && merged.business.phone.length > 0
      ? merged.business.phone[0]
      : "1800 9007";
  const primaryEmail =
    Array.isArray(merged.business.email) && merged.business.email.length > 0
      ? merged.business.email[0]
      : "cskh@songtraaesthetic.vn";

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const filteredItems = merged.catalogItems.filter((item) => {
    const matchTab = activeTab === "all" || item.category === activeTab;
    const matchSearch =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div
      id="top"
      className="min-h-screen bg-white font-sans text-neutral-800 selection:bg-[#d71920] selection:text-white"
    >
      {/* Floating Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 rounded bg-[#d71920] px-4 py-3 text-xs font-bold text-white shadow-2xl">
          <CheckCircle2 className="h-4 w-4 text-amber-300" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Floating Right Action Buttons (Zalo & Phone matching TMV018 UI) */}
      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
        <button
          type="button"
          onClick={() =>
            triggerToast("Đang kết nối chuyên viên tư vấn Zalo Sông Trà...")
          }
          aria-label="Chat Zalo"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0284c7] text-[10px] font-black text-white shadow-lg transition hover:scale-110"
        >
          Zalo
        </button>
        <a
          href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
          aria-label="Gọi ngay"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d71920] text-white shadow-lg transition hover:scale-110"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Product / Device Detail Modal */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg overflow-hidden rounded-xl border-2 border-[#d71920] bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setModalItem(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-[#d71920] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="aspect-square overflow-hidden rounded-lg bg-neutral-50 p-3">
                <img
                  src={modalItem.image}
                  alt={modalItem.name}
                  className="h-full w-full rounded object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#d71920] px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                    BẢO HÀNH CHUẨN 4S
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-neutral-900">
                    {modalItem.name}
                  </h3>
                  <p className="mt-1 text-sm font-black text-[#d71920]">
                    {modalItem.price}
                  </p>
                  <div className="mt-3 divide-y divide-neutral-100 border-y border-neutral-100 py-1 text-xs">
                    {modalItem.specs.map((sp) => (
                      <div
                        key={sp.label}
                        className="flex items-center justify-between py-1.5"
                      >
                        <span className="text-neutral-500">{sp.label}:</span>
                        <span className="font-bold text-neutral-800">
                          {sp.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    triggerToast(
                      `Đã gửi yêu cầu đặt mua "${modalItem.name}" tại Sông Trà!`
                    );
                    setModalItem(null);
                  }}
                  className="mt-5 w-full bg-[#d71920] py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#b51218]"
                >
                  MUA HÀNG &amp; ĐẶT LỊCH NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 1. TWO-TIER SÔNG TRÀ HEADER (MATCHING TMV018) ==================== */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Top White Utility & Brand Bar */}
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5">
          {/* Left: Red Brand Box + Award Seals + Social Icons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a href="#top">
              <SongTraBrandBadge brandName={merged.business.name} />
            </a>

            {/* Black Luxury Top 10 Seal */}
            <div className="hidden h-10 w-10 flex-col items-center justify-center rounded border border-amber-400 bg-neutral-950 text-[8px] font-bold text-amber-400 sm:flex">
              <Award className="h-4 w-4" />
              <span>TOP 1</span>
            </div>

            {/* Red 100% Seal */}
            <div className="hidden h-10 w-10 flex-col items-center justify-center rounded-full border-2 border-[#d71920] bg-red-50 text-[8px] font-extrabold text-[#d71920] sm:flex">
              <span>100%</span>
              <span>4S</span>
            </div>

            {/* Social Circles */}
            <div className="hidden items-center gap-1.5 pl-1 md:flex">
              {[
                { label: "f", bg: "#1877f2" },
                { label: "Z", bg: "#0284c7" },
                { label: "▶", bg: "#ff0000" },
                { label: "IG", bg: "#e1306c" }
              ].map((soc) => (
                <a
                  key={soc.label}
                  href="#footer-songtra"
                  style={{ backgroundColor: soc.bg }}
                  className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold text-white"
                >
                  {soc.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Amber Khuyến Mãi Button + Search + Hotline */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#hero-showcase"
              className="rounded bg-[#f59e0b] px-3.5 py-1.5 text-xs font-extrabold text-neutral-900 shadow-2xs hover:bg-[#d97706] hover:text-white"
            >
              Khuyến mãi
            </a>

            <a
              href="#he-thong-chi-nhanh"
              className="hidden items-center gap-1 text-xs font-bold text-neutral-700 hover:text-[#d71920] lg:inline-flex"
            >
              <MapPin className="h-3.5 w-3.5 text-[#d71920]" />
              <span>Hệ thống 10 chi nhánh</span>
            </a>

            <div className="relative hidden sm:block">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm thiết bị, dịch vụ..."
                className="w-44 rounded border border-neutral-200 bg-neutral-50 py-1.5 pl-3 pr-8 text-xs focus:border-[#d71920] focus:bg-white focus:outline-none"
              />
              <Search className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
            </div>

            <a
              href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-right"
            >
              <div className="hidden leading-tight xl:block">
                <span className="block text-[10px] text-neutral-400">
                  TỔNG ĐÀI MIỄN PHÍ
                </span>
                <span className="text-xs font-black text-[#d71920]">
                  {primaryPhone}
                </span>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d71920] text-white shadow">
                <Phone className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Crimson Red Navigation Bar (#d71920) */}
        <nav className="bg-[#d71920] text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-1 px-4 py-1.5">
            {merged.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider transition ${
                  item.active
                    ? "rounded-xs bg-white text-[#d71920] shadow-xs"
                    : "text-white hover:bg-[#b51218]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* ==================== 2. CRIMSON SHOWCASE HERO + PANORAMIC BANNER (MATCHING TMV018) ==================== */}
      <section
        id="hero-showcase"
        className="relative overflow-hidden bg-gradient-to-br from-[#e11d24] via-[#f43f5e] to-[#b91c1c] py-10 text-white"
      >
        {/* Background "26 PHÚT / Thời gian khuyến mãi" Watermark from TMV018 */}
        <div className="pointer-events-none absolute right-6 top-6 hidden select-none text-right opacity-85 lg:block">
          <p className="text-sm font-semibold text-red-100">
            Thời gian khuyến mãi
          </p>
          <div className="mt-2 inline-flex flex-col items-center rounded-xl bg-[#b91c1c]/80 px-6 py-3 shadow-inner">
            <span className="text-4xl font-black text-red-100">26</span>
          </div>
          <p className="mt-1 text-center text-sm font-black uppercase tracking-widest text-red-100">
            PHÚT
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Top Stacked Purple & Hot-Pink Ribbons */}
          <div className="flex flex-col items-start gap-2.5">
            <div className="inline-block bg-[#5b09b5] px-5 py-2.5 shadow-xl sm:px-7 sm:py-3">
              <h1 className="font-sans text-xl font-black uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                {merged.heroPurpleRibbon}
              </h1>
            </div>
            <div className="inline-block bg-[#ef1d8a] px-5 py-2.5 shadow-xl sm:px-7 sm:py-3">
              <p className="font-sans text-xl font-black uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
                {merged.heroPinkRibbon}
              </p>
            </div>
          </div>

          {/* Lower Showcase Grid: Left Red Brand Card & Mini Grid + Right Panoramic Coastal Banner */}
          <div className="mt-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            {/* Left 5 Cols: Mini Green-Bordered Preview Card + Curved Red Arrow + Large SÔNG TRÀ Badge */}
            <div className="flex flex-col items-start gap-5 lg:col-span-5">
              {/* Green-Bordered Mini Catalog Card matching TMV018 */}
              <div className="w-full rounded-2xl border-2 border-emerald-500 bg-white p-4 text-neutral-800 shadow-2xl">
                <div className="mb-3 flex items-center justify-between border-b border-neutral-100 pb-2 text-[10px] font-extrabold uppercase text-neutral-700">
                  <span>DANH MỤC THIẾT BỊ &amp; LIỆU TRÌNH</span>
                  <span className="text-[#d71920]">CHUẨN 4S</span>
                </div>
                <div className="grid grid-cols-4 gap-2.5">
                  {merged.catalogItems.slice(0, 8).map((mini) => (
                    <div
                      key={mini.id}
                      onClick={() => setModalItem(mini)}
                      className="cursor-pointer text-center"
                    >
                      <div className="mb-1 flex justify-center gap-0.5">
                        {mini.swatches.slice(0, 4).map((sw, idx) => (
                          <span
                            key={idx}
                            style={{ backgroundColor: sw }}
                            className="h-1.5 w-1.5 rounded-full border border-neutral-300"
                          />
                        ))}
                      </div>
                      <div className="aspect-square overflow-hidden rounded bg-neutral-50 p-1">
                        <img
                          src={mini.image}
                          alt={mini.name}
                          className="h-full w-full rounded object-cover"
                        />
                      </div>
                      <p className="mt-1 truncate text-[8px] font-bold text-neutral-800">
                        {mini.name}
                      </p>
                      <div className="mt-0.5 flex justify-center gap-0.5">
                        <span className="h-2 w-2 rounded-2xs bg-[#0284c7]" />
                        <span className="h-2 w-2 rounded-2xs bg-[#f97316]" />
                        <span className="h-2 w-2 rounded-2xs bg-[#1e3a8a]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Red SÔNG TRÀ Emblem Card + Curved Red Arrow */}
              <div className="flex flex-wrap items-center gap-6">
                <SongTraBrandBadge
                  brandName={merged.business.name}
                  large={true}
                />
                <svg
                  viewBox="0 0 120 70"
                  className="hidden h-14 w-24 sm:block"
                  fill="none"
                >
                  <path
                    d="M10 10 C25 50, 65 55, 100 45 L92 34 L115 46 L94 60 L98 50 C58 60, 18 52, 10 10 Z"
                    fill="#b91c1c"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            </div>

            {/* Right 7 Cols: Panoramic Hero Slider Banner matching TMV018 Right Screen */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-white/30 bg-neutral-900 shadow-2xl">
                <div className="relative h-64 sm:h-80">
                  <img
                    src={merged.heroPanoramaBanner.image}
                    alt={merged.heroPanoramaBanner.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-white/95 px-3 py-1 text-[10px] font-black uppercase text-[#d71920] shadow">
                        {merged.heroPanoramaBanner.badge}
                      </span>
                      <span className="font-sans text-3xl font-black italic tracking-tighter text-white/40 sm:text-5xl">
                        160+
                      </span>
                    </div>

                    <div>
                      <h2 className="text-lg font-black uppercase leading-snug sm:text-2xl">
                        {merged.heroPanoramaBanner.title}
                      </h2>
                      <p className="mt-1 text-xs text-neutral-300">
                        {merged.heroPanoramaBanner.subtitle}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-white" />
                          <span className="h-2 w-2 rounded-full bg-[#d71920]" />
                        </div>
                        <div className="flex gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-neutral-800">
                            <ChevronLeft className="h-4 w-4" />
                          </span>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-neutral-800">
                            <ChevronRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. 4x2 CATALOG GRID WITH COLOR SWATCHES & MULTI-CHANNEL BADGES ==================== */}
      <section
        id="danh-muc-san-pham"
        className="mx-auto max-w-7xl px-4 py-14"
      >
        {/* Breadcrumb */}
        <div className="mb-4 text-xs text-neutral-400">
          <span>Trang chủ</span> <span className="mx-1">›</span>{" "}
          <span className="font-semibold text-[#d71920]">
            Danh mục sản phẩm &amp; thiết bị thẩm mỹ
          </span>
        </div>

        {/* Visual Category Tabs Bar */}
        <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-neutral-200 pb-4">
          {merged.catalogTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded border px-4 py-2.5 text-xs font-extrabold uppercase transition ${
                activeTab === tab.id
                  ? "border-[#d71920] bg-red-50/60 text-[#d71920]"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-[#d71920]"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#d71920]" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 4x2 Product Grid matching TMV018 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => {
            const activeSwatch = selectedSwatchByItem[item.id] ?? 0;
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-4 transition hover:border-[#d71920] hover:shadow-xl"
              >
                <div>
                  {/* Top Row of Circular Color Swatches */}
                  <div className="mb-3 flex flex-wrap items-center gap-1.5">
                    {item.swatches.map((colorHex, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() =>
                          setSelectedSwatchByItem((prev) => ({
                            ...prev,
                            [item.id]: idx
                          }))
                        }
                        aria-label={`Chọn phiên bản ${idx + 1}`}
                        style={{ backgroundColor: colorHex }}
                        className={`h-3.5 w-3.5 rounded-full border transition ${
                          activeSwatch === idx
                            ? "scale-125 border-neutral-900 ring-2 ring-[#d71920]/40"
                            : "border-neutral-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Product Studio Image */}
                  <div
                    onClick={() => setModalItem(item)}
                    className="relative h-44 cursor-pointer overflow-hidden rounded bg-neutral-50 p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* If Featured Spec Card (4th item in TMV018), show inline specs + red MUA HÀNG NGAY button */}
                  {item.isFeaturedSpecCard ? (
                    <div className="mt-3">
                      <div className="divide-y divide-neutral-200 border-y border-neutral-200 text-[11px]">
                        {item.specs.map((sp) => (
                          <div
                            key={sp.label}
                            className="flex items-center justify-between py-1"
                          >
                            <span className="text-neutral-500">{sp.label}</span>
                            <span className="font-bold text-neutral-800">
                              {sp.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setModalItem(item)}
                        className="mt-2.5 w-full bg-[#d71920] py-2 text-[11px] font-black uppercase tracking-wider text-white hover:bg-[#b51218]"
                      >
                        MUA HÀNG NGAY
                      </button>
                    </div>
                  ) : (
                    <div className="mt-3">
                      <h3
                        onClick={() => setModalItem(item)}
                        className="line-clamp-2 cursor-pointer text-xs font-extrabold text-neutral-900 group-hover:text-[#d71920]"
                      >
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs font-black text-[#d71920]">
                        {item.price}
                      </p>

                      {/* 4 Multi-Channel Colorful Square Badges matching TMV018 */}
                      <div className="mt-3 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            triggerToast(
                              `Đang mở tư vấn Zalo cho "${item.name}"`
                            )
                          }
                          title="Tư vấn Zalo"
                          className="flex h-6 w-6 items-center justify-center rounded-xs bg-[#0284c7] text-[9px] font-black text-white"
                        >
                          Z
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            triggerToast(
                              `Đã mở gian hàng Shopee Sông Trà cho "${item.name}"`
                            )
                          }
                          title="Đặt qua Shopee"
                          className="flex h-6 w-6 items-center justify-center rounded-xs bg-[#f97316] text-[9px] font-black text-white"
                        >
                          S
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            triggerToast(
                              `Đã mở gian hàng Lazada Sông Trà cho "${item.name}"`
                            )
                          }
                          title="Đặt qua Lazada"
                          className="flex h-6 w-6 items-center justify-center rounded-xs bg-[#1e3a8a] text-[9px] font-black text-white"
                        >
                          L
                        </button>
                        <button
                          type="button"
                          onClick={() => setModalItem(item)}
                          title="Xem thông số & Đặt hàng"
                          className="flex h-6 w-6 items-center justify-center rounded-xs border border-[#d71920] text-[#d71920] hover:bg-[#d71920] hover:text-white"
                        >
                          <ShoppingCart className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 4. TIÊU CHUẨN 4S ĐỘC QUYỀN TẠI SÔNG TRÀ ==================== */}
      <section id="tieu-chuan-4s" className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="inline-block bg-[#d71920] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
              CHUẨN MỰC DỊCH VỤ 4S
            </span>
            <h2 className="mt-2 text-2xl font-black uppercase text-neutral-900 sm:text-3xl">
              {merged.business.aboutTitle}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merged.pillars4S.map((pil) => (
              <div
                key={pil.code}
                className="rounded-xl border-t-4 border-[#d71920] bg-white p-6 shadow-xs"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-base font-black text-[#d71920]">
                  {pil.code}
                </span>
                <h3 className="mt-4 text-sm font-extrabold text-neutral-900">
                  {pil.title}
                </h3>
                <p className="mt-0.5 text-[11px] font-bold text-[#d71920]">
                  {pil.subtitle}
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-neutral-500">
                  {pil.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. HỆ THỐNG CHI NHÁNH SÔNG TRÀ ==================== */}
      <section id="he-thong-chi-nhanh" className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-center text-2xl font-black uppercase text-neutral-900">
          Hệ Thống Trung Tâm Thẩm Mỹ &amp; Bảo Hành Sông Trà
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {merged.branches.map((br) => (
            <div
              key={br.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs"
            >
              <h3 className="text-sm font-extrabold text-[#d71920]">
                {br.name}
              </h3>
              <p className="mt-2 flex items-start gap-2 text-xs text-neutral-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d71920]" />
                <span>{br.address}</span>
              </p>
              <p className="mt-2 flex items-center gap-2 text-xs font-bold text-neutral-800">
                <Phone className="h-4 w-4 text-[#d71920]" />
                <span>{br.hotline}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 6. FOOTER ==================== */}
      <footer id="footer-songtra" className="bg-neutral-950 py-12 text-neutral-400">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <SongTraBrandBadge brandName={merged.business.name} />
              <p className="mt-4 text-xs leading-relaxed text-neutral-400">
                {merged.business.tagline}. Cam kết chất lượng chính hãng 100%,
                bảo hành chu đáo chuẩn 4S trên toàn hệ thống.
              </p>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                LIÊN HỆ TRỤ SỞ CHÍNH
              </h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d71920]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#d71920]" />
                  <span className="font-bold text-white">
                    Tổng đài miễn phí: {primaryPhone}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#d71920]" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                GIỜ LÀM VIỆC
              </h4>
              <p className="mt-3 text-xs text-neutral-300">
                {merged.business.workingHours}
              </p>
              <a
                href="#danh-muc-san-pham"
                className="mt-4 inline-block rounded bg-[#d71920] px-5 py-2.5 text-xs font-extrabold uppercase text-white hover:bg-[#b51218]"
              >
                Tư Vấn Ngay
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
            © Bản quyền thuộc về Hệ thống{" "}
            <strong className="text-white">{merged.business.name}</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
