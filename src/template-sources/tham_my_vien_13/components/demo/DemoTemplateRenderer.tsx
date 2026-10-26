"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
  Mail,
  Phone,
  MapPin,
  X,
  Clock,
  Share2,
  CheckCircle2
} from "lucide-react";
import {
  adaptClonedTemplateData,
  type ClonedTemplateInput
} from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien13DefaultData,
  type EvaBeautyData,
  type EvaArticleItem
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  template?: ClonedTemplateInput;
  companyName?: string;
}

/**
 * Reusable Magazine Section Header Bar with Colored Pill Badge
 */
function SectionBadgeBar({
  title,
  bgColor,
  textColor = "text-white",
  borderColor,
  subLinks
}: {
  title: string;
  bgColor: string;
  textColor?: string;
  borderColor: string;
  subLinks?: string[];
}) {
  return (
    <div
      className="mb-4 flex flex-wrap items-center justify-between border-b-2 pb-1"
      style={{ borderColor }}
    >
      <span
        className={`inline-block px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ${textColor}`}
        style={{ backgroundColor: bgColor }}
      >
        {title}
      </span>

      {subLinks && subLinks.length > 0 && (
        <div className="hidden flex-wrap items-center gap-3 text-[11px] text-gray-500 sm:flex">
          {subLinks.map((lnk, idx) => (
            <button
              key={lnk}
              type="button"
              className={`transition hover:text-[#b80d70] ${
                idx === 0 ? "font-bold text-amber-500" : ""
              }`}
            >
              {lnk}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function DemoTemplateRenderer({
  data,
  template,
  companyName
}: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<EvaBeautyData>(
    thamMyVien13DefaultData,
    {
      ...(data || template || {}),
      ...(companyName ? { companyName } : {})
    }
  );

  const [tickerIndex, setTickerIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] =
    useState<EvaArticleItem | null>(null);
  const [showAllBottomNews, setShowAllBottomNews] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone =
    Array.isArray(merged.business.phone) && merged.business.phone.length > 0
      ? merged.business.phone[0]
      : "1900 636 648";
  const primaryEmail =
    Array.isArray(merged.business.email) && merged.business.email.length > 0
      ? merged.business.email[0]
      : "mon@mona.media";

  const activeVideo =
    merged.videoPlaylist[activeVideoIndex] || merged.videoPlaylist[0];

  const currentTicker =
    merged.breakingNews[tickerIndex % (merged.breakingNews.length || 1)] ||
    merged.breakingNews[0];

  return (
    <div
      id="top"
      className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#b80d70] selection:text-white"
    >
      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#b80d70] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <span className="inline-block bg-[#b80d70] px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
              {selectedArticle.category}
            </span>
            <h2 className="mt-2 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
              {selectedArticle.title}
            </h2>
            <p className="mt-1.5 text-xs text-gray-400">
              Bởi <strong className="text-gray-700">{selectedArticle.author}</strong>{" "}
              - {selectedArticle.date}
            </p>
            {selectedArticle.image && (
              <div className="mt-4 h-64 overflow-hidden rounded bg-gray-100">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {selectedArticle.excerpt ||
                "Bài viết chuyên sâu từ đội ngũ biên tập viên và cố vấn bác sĩ da liễu tại Chuyên trang làm đẹp EvaBeauty, mang đến góc nhìn khoa học về chăm sóc sắc đẹp, trẻ hóa làn da và giữ gìn vóc dáng thanh xuân."}
            </p>
          </div>
        </div>
      )}

      {/* ==================== 1. VIBRANT MAGENTA-PLUM HEADER BAR (#b80d70) ==================== */}
      <header className="sticky top-0 z-40 bg-[#b80d70] text-white shadow-md">
        <div className="mx-auto flex max-w-[1060px] items-center justify-between px-4 py-3">
          {/* Left Stylized Logo: [M]ona */}
          <a href="#top" className="flex items-center gap-1.5">
            <span className="flex h-9 w-9 items-center justify-center bg-white font-serif text-2xl font-black text-[#b80d70]">
              M
            </span>
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              ona
            </span>
          </a>

          {/* Center Uppercase Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {merged.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-extrabold uppercase tracking-wider text-white/95 transition hover:text-amber-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Search Icon */}
          <button
            type="button"
            onClick={() => setSearchOpen((s) => !s)}
            aria-label="Tìm kiếm"
            className="p-1.5 text-white hover:text-amber-300"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="border-t border-white/15 bg-[#9c0a5e] px-4 py-2.5">
            <div className="mx-auto flex max-w-[1060px] items-center gap-2">
              <Search className="h-4 w-4 text-pink-200" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bài viết làm đẹp, chăm sóc da, bí quyết Sao..."
                className="w-full bg-transparent text-xs text-white placeholder-pink-200 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-xs text-pink-200 hover:text-white"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ==================== 2. TIN HOT BREAKING NEWS TICKER ==================== */}
      <div className="mx-auto max-w-[1060px] px-4 pt-4 pb-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="shrink-0 bg-[#d81b60] px-2.5 py-1 text-[10px] font-extrabold uppercase text-white">
              TIN HOT
            </span>
            <p className="truncate text-xs text-gray-600">{currentTicker}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() =>
                setTickerIndex(
                  (i) =>
                    (i - 1 + merged.breakingNews.length) %
                    merged.breakingNews.length
                )
              }
              aria-label="Tin trước"
              className="flex h-6 w-6 items-center justify-center border border-gray-200 text-gray-400 hover:border-[#b80d70] hover:text-[#b80d70]"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() =>
                setTickerIndex((i) => (i + 1) % merged.breakingNews.length)
              }
              aria-label="Tin tiếp"
              className="flex h-6 w-6 items-center justify-center border border-gray-200 text-gray-400 hover:border-[#b80d70] hover:text-[#b80d70]"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ==================== 3. HERO 4-TILE MAGAZINE BENTO MOSAIC ==================== */}
      <section className="mx-auto max-w-[1060px] px-4 pb-8">
        <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-12">
          {/* Left Large Tile (6 Cols) */}
          <article
            onClick={() => setSelectedArticle(merged.heroMosaic.mainLeft)}
            className="group relative h-[320px] cursor-pointer overflow-hidden bg-gray-900 sm:h-[380px] lg:col-span-6"
          >
            <img
              src={merged.heroMosaic.mainLeft.image}
              alt={merged.heroMosaic.mainLeft.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <span className="inline-block bg-black/75 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                {merged.heroMosaic.mainLeft.category}
              </span>
              <h1 className="mt-2 text-lg font-bold leading-snug sm:text-xl">
                {merged.heroMosaic.mainLeft.title}
              </h1>
              <p className="mt-1.5 text-[11px] text-gray-300">
                <strong>{merged.heroMosaic.mainLeft.author}</strong> -{" "}
                {merged.heroMosaic.mainLeft.date}
              </p>
            </div>
          </article>

          {/* Right 3 Tiles (6 Cols) */}
          <div className="flex flex-col gap-1.5 lg:col-span-6">
            {/* Top Right Wide Tile */}
            <article
              onClick={() => setSelectedArticle(merged.heroMosaic.topRight)}
              className="group relative h-[185px] cursor-pointer overflow-hidden bg-gray-900"
            >
              <img
                src={merged.heroMosaic.topRight.image}
                alt={merged.heroMosaic.topRight.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="inline-block bg-black/75 px-2 py-0.5 text-[9px] font-bold uppercase">
                  {merged.heroMosaic.topRight.category}
                </span>
                <h2 className="mt-1.5 line-clamp-2 text-sm font-bold leading-snug sm:text-base">
                  {merged.heroMosaic.topRight.title}
                </h2>
              </div>
            </article>

            {/* Bottom Right 2 Square Tiles */}
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {merged.heroMosaic.bottomRight.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedArticle(item)}
                  className="group relative h-[189px] cursor-pointer overflow-hidden bg-gray-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5 text-white">
                    <span className="inline-block bg-black/75 px-1.5 py-0.5 text-[8px] font-bold uppercase">
                      {item.category}
                    </span>
                    <h3 className="mt-1 line-clamp-2 text-xs font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. MAIN 2-COLUMN EDITORIAL BODY (8 COLS LEFT + 4 COLS RIGHT SIDEBAR) ==================== */}
      <div className="mx-auto max-w-[1060px] px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* LEFT 8 COLUMNS */}
          <div className="space-y-10 lg:col-span-8">
            {/* BLOCK 1: ĐỪNG BỎ LỠ (Yellow Badge #f5b82e) */}
            <section id="dung-bo-lo">
              <SectionBadgeBar
                title="ĐỪNG BỎ LỠ"
                bgColor="#f5b82e"
                textColor="text-gray-900"
                borderColor="#f5b82e"
                subLinks={[
                  "All",
                  "Mẹ & Bé",
                  "Công nghệ",
                  "Cuộc sống",
                  "Giải trí",
                  "Làm đẹp",
                  "Xem thêm ⌄"
                ]}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                {/* Left Featured Article (6 Cols) */}
                <article
                  onClick={() =>
                    setSelectedArticle(merged.dontMissSection.featured)
                  }
                  className="group cursor-pointer sm:col-span-6"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={merged.dontMissSection.featured.image}
                      alt={merged.dontMissSection.featured.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-bold text-white">
                      {merged.dontMissSection.featured.category}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 group-hover:text-[#b80d70]">
                    {merged.dontMissSection.featured.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-gray-400">
                    <strong>{merged.dontMissSection.featured.author}</strong> -{" "}
                    {merged.dontMissSection.featured.date}
                  </p>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-gray-500">
                    {merged.dontMissSection.featured.excerpt}
                  </p>
                </article>

                {/* Right 4 Compact Horizontal Items (6 Cols) */}
                <div className="space-y-3.5 sm:col-span-6">
                  {merged.dontMissSection.list.map((item) => (
                    <article
                      key={item.id}
                      onClick={() => setSelectedArticle(item)}
                      className="group flex cursor-pointer gap-3"
                    >
                      <div className="h-16 w-24 shrink-0 overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="line-clamp-2 text-xs font-bold leading-snug text-gray-800 group-hover:text-[#b80d70]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[10px] text-gray-400">
                          {item.date}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* BLOCK 2: GIẢI TRÍ (Slate Blue Badge #6c8ebf) */}
            <section id="giai-tri">
              <SectionBadgeBar
                title="GIẢI TRÍ"
                bgColor="#6c8ebf"
                borderColor="#6c8ebf"
              />

              <article
                onClick={() => setSelectedArticle(merged.beautyTrendBanner)}
                className="group relative h-[320px] cursor-pointer overflow-hidden bg-gray-900 sm:h-[360px]"
              >
                <img
                  src={merged.beautyTrendBanner.image}
                  alt={merged.beautyTrendBanner.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-block bg-black/80 px-2 py-0.5 text-[9px] font-bold uppercase">
                    {merged.beautyTrendBanner.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug sm:text-xl">
                    {merged.beautyTrendBanner.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] text-gray-300">
                    <strong>{merged.beautyTrendBanner.author}</strong> -{" "}
                    {merged.beautyTrendBanner.date}
                  </p>
                </div>
              </article>
            </section>

            {/* BLOCK 3: SAO VIỆT (Emerald Green Badge #28a745) */}
            <section id="sao-viet">
              <SectionBadgeBar
                title="SAO VIỆT"
                bgColor="#28a745"
                borderColor="#28a745"
                subLinks={[
                  "All",
                  "Mẹ & Bé",
                  "Công nghệ",
                  "Cuộc sống",
                  "Giải trí",
                  "Làm đẹp",
                  "Sao Việt",
                  "Xem thêm ⌄"
                ]}
              />

              {/* Top 2 Featured Articles Side-by-Side */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {merged.celebSecretsSection.topPair.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedArticle(post)}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-44 overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-bold text-white">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-sm font-bold leading-snug text-gray-900 group-hover:text-[#28a745]">
                      {post.title}
                    </h3>
                    <div className="mt-1 flex items-center justify-between text-[10px] text-gray-400">
                      <span>
                        <strong>{post.author}</strong> - {post.date}
                      </span>
                      <span className="bg-black px-1.5 py-0.2 font-bold text-white">
                        {post.comments}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs text-gray-500">
                      {post.excerpt}
                    </p>
                  </article>
                ))}
              </div>

              {/* Bottom 2x2 Compact Horizontal Grid */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {merged.celebSecretsSection.bottomGrid.map((item) => (
                  <article
                    key={item.id}
                    onClick={() => setSelectedArticle(item)}
                    className="group flex cursor-pointer gap-3"
                  >
                    <div className="h-16 w-24 shrink-0 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="line-clamp-2 text-xs font-bold leading-snug text-gray-800 group-hover:text-[#28a745]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[10px] text-gray-400">
                        {item.date}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* BLOCK 4: CUỘC SỐNG (Coral Red Badge #e55353) */}
            <section id="cuoc-song">
              <SectionBadgeBar
                title="CUỘC SỐNG"
                bgColor="#e55353"
                borderColor="#e55353"
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                {/* Left Featured Article */}
                <article
                  onClick={() =>
                    setSelectedArticle(merged.skincareLifestyleSection.featured)
                  }
                  className="group cursor-pointer sm:col-span-6"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={merged.skincareLifestyleSection.featured.image}
                      alt={merged.skincareLifestyleSection.featured.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-bold text-white">
                      {merged.skincareLifestyleSection.featured.category}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 group-hover:text-[#e55353]">
                    {merged.skincareLifestyleSection.featured.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-[10px] text-gray-400">
                    <span>
                      <strong>
                        {merged.skincareLifestyleSection.featured.author}
                      </strong>{" "}
                      - {merged.skincareLifestyleSection.featured.date}
                    </span>
                    <span className="bg-black px-1.5 py-0.2 font-bold text-white">
                      {merged.skincareLifestyleSection.featured.comments}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs text-gray-500">
                    {merged.skincareLifestyleSection.featured.excerpt}
                  </p>
                </article>

                {/* Right 4 Compact Horizontal Items */}
                <div className="space-y-3.5 sm:col-span-6">
                  {merged.skincareLifestyleSection.list.map((item) => (
                    <article
                      key={item.id}
                      onClick={() => setSelectedArticle(item)}
                      className="group flex cursor-pointer gap-3"
                    >
                      <div className="h-16 w-24 shrink-0 overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="line-clamp-2 text-xs font-bold leading-snug text-gray-800 group-hover:text-[#e55353]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[10px] text-gray-400">
                          {item.date}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT 4 COLUMNS SIDEBAR */}
          <aside className="space-y-8 lg:col-span-4">
            {/* Widget 1: KẾT NỐI NGAY */}
            <div>
              <SectionBadgeBar
                title="KẾT NỐI NGAY"
                bgColor="#3aa6dd"
                borderColor="#3aa6dd"
              />
              <div className="grid grid-cols-3 gap-3 text-center">
                {merged.sidebar.socialStats.map((soc) => (
                  <div key={soc.id} className="flex flex-col items-center">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-black text-white shadow-xs"
                      style={{ backgroundColor: soc.bgColor }}
                    >
                      {soc.platform}
                    </div>
                    <span className="mt-2 text-xs font-extrabold text-gray-900">
                      {soc.count}
                    </span>
                    <span className="text-[10px] text-gray-400">{soc.unit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2: Illustrated Mailbox Card */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 bg-[#fbfcfd] p-6 text-center">
              <div className="relative flex h-36 w-36 flex-col items-center justify-center">
                {/* Stylized Red Mailbox SVG matching TMV016 */}
                <svg viewBox="0 0 160 160" className="h-full w-full">
                  <rect x="74" y="75" width="10" height="70" fill="#c58c5c" />
                  <path
                    d="M35 55 C35 35, 125 35, 125 55 L125 85 L35 85 Z"
                    fill="#e05a47"
                  />
                  <path d="M35 55 C35 38, 68 38, 68 55 L68 85 L35 85 Z" fill="#b83b2b" />
                  <text
                    x="76"
                    y="72"
                    fill="#ffffff"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    MAIL
                  </text>
                  <circle cx="48" cy="135" r="5" fill="#3aa6dd" />
                  <circle cx="112" cy="130" r="5" fill="#f5b82e" />
                </svg>
              </div>
              <p className="mt-2 text-xs font-semibold text-gray-600">
                Đón đọc bản tin làm đẹp &amp; thẩm mỹ mỗi sáng
              </p>
            </div>

            {/* Widget 3: NỔI BẬT (2x2 Grid) */}
            <div>
              <SectionBadgeBar
                title="NỔI BẬT"
                bgColor="#3aa6dd"
                borderColor="#3aa6dd"
              />
              <div className="grid grid-cols-2 gap-3.5">
                {merged.sidebar.highlightedGrid.map((item) => (
                  <article
                    key={item.id}
                    onClick={() => setSelectedArticle(item)}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-24 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                      <span className="absolute bottom-1 left-1 bg-black/80 px-1.5 py-0.2 text-[8px] font-bold text-white">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="mt-1.5 line-clamp-3 text-[11px] font-bold leading-snug text-gray-800 group-hover:text-[#3aa6dd]">
                      {item.title}
                    </h4>
                  </article>
                ))}
              </div>
            </div>

            {/* Widget 4: TIN MỚI NHẤT */}
            <div>
              <SectionBadgeBar
                title="TIN MỚI NHẤT"
                bgColor="#3aa6dd"
                borderColor="#3aa6dd"
              />
              <article
                onClick={() =>
                  setSelectedArticle(merged.sidebar.latestFeatured)
                }
                className="group cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={merged.sidebar.latestFeatured.image}
                    alt={merged.sidebar.latestFeatured.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-bold text-white">
                    {merged.sidebar.latestFeatured.category}
                  </span>
                </div>
                <h3 className="mt-2.5 text-sm font-bold leading-snug text-gray-900 group-hover:text-[#3aa6dd]">
                  {merged.sidebar.latestFeatured.title}
                </h3>
                <div className="mt-1 flex items-center justify-between text-[10px] text-gray-400">
                  <span>
                    <strong>{merged.sidebar.latestFeatured.author}</strong> -{" "}
                    {merged.sidebar.latestFeatured.date}
                  </span>
                  <span className="bg-black px-1.5 py-0.2 font-bold text-white">
                    {merged.sidebar.latestFeatured.comments}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-xs text-gray-500">
                  {merged.sidebar.latestFeatured.excerpt}
                </p>
              </article>

              <div className="mt-4 space-y-3">
                {merged.sidebar.latestList.map((item) => (
                  <article
                    key={item.id}
                    onClick={() => setSelectedArticle(item)}
                    className="group flex cursor-pointer gap-3"
                  >
                    <div className="h-14 w-20 shrink-0 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="line-clamp-2 text-xs font-bold leading-snug text-gray-800 group-hover:text-[#3aa6dd]">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-[10px] text-gray-400">
                        {item.date}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ==================== 5. FULL-WIDTH 3-COLUMN DARK FEATURE CARDS STRIP ==================== */}
      <section className="mx-auto my-10 max-w-[1060px] px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {merged.threeDarkCardsStrip.map((card) => (
            <article
              key={card.id}
              onClick={() => setSelectedArticle(card)}
              className="group relative h-52 cursor-pointer overflow-hidden bg-gray-900"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center text-white">
                <span className="bg-black/75 px-2 py-0.5 text-[9px] font-bold uppercase">
                  {card.category}
                </span>
                <h3 className="mt-2.5 line-clamp-3 text-xs font-extrabold uppercase leading-relaxed">
                  {card.title}
                </h3>
                <p className="mt-2 text-[10px] text-gray-300">
                  <strong>{card.author}</strong> - {card.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== 6. LOWER 3-COLUMN SECTION (LÀM ĐẸP | THỜI TRANG | ĐIỂM TIN) + VIDEO ==================== */}
      <section id="lam-dep" className="mx-auto max-w-[1060px] px-4 py-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Col 1: LÀM ĐẸP (4 Cols) */}
          <div className="lg:col-span-4">
            <SectionBadgeBar
              title="LÀM ĐẸP"
              bgColor="#f5b82e"
              textColor="text-gray-900"
              borderColor="#f5b82e"
            />
            <article
              onClick={() =>
                setSelectedArticle(merged.lowerThreeCols.lamDep.featured)
              }
              className="group relative h-48 cursor-pointer overflow-hidden bg-gray-900"
            >
              <img
                src={merged.lowerThreeCols.lamDep.featured.image}
                alt={merged.lowerThreeCols.lamDep.featured.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="bg-black/80 px-2 py-0.5 text-[8px] font-bold uppercase">
                  {merged.lowerThreeCols.lamDep.featured.category}
                </span>
                <h3 className="mt-1.5 line-clamp-2 text-xs font-bold leading-snug">
                  {merged.lowerThreeCols.lamDep.featured.title}
                </h3>
              </div>
            </article>
            <div className="mt-4 space-y-3">
              {merged.lowerThreeCols.lamDep.list.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedArticle(item)}
                  className="group flex cursor-pointer gap-3"
                >
                  <div className="h-14 w-20 shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="line-clamp-2 text-xs font-bold leading-snug text-gray-800 group-hover:text-[#f5b82e]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[10px] text-gray-400">
                      {item.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Col 2: THỜI TRANG (4 Cols) */}
          <div className="lg:col-span-4">
            <SectionBadgeBar
              title="THỜI TRANG"
              bgColor="#3aa6dd"
              borderColor="#3aa6dd"
            />
            <article
              onClick={() =>
                setSelectedArticle(merged.lowerThreeCols.thoiTrang.featured)
              }
              className="group relative h-48 cursor-pointer overflow-hidden bg-gray-900"
            >
              <img
                src={merged.lowerThreeCols.thoiTrang.featured.image}
                alt={merged.lowerThreeCols.thoiTrang.featured.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="bg-black/80 px-2 py-0.5 text-[8px] font-bold uppercase">
                  {merged.lowerThreeCols.thoiTrang.featured.category}
                </span>
                <h3 className="mt-1.5 line-clamp-2 text-xs font-bold leading-snug">
                  {merged.lowerThreeCols.thoiTrang.featured.title}
                </h3>
              </div>
            </article>
            <div className="mt-4 space-y-3">
              {merged.lowerThreeCols.thoiTrang.list.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedArticle(item)}
                  className="group flex cursor-pointer gap-3"
                >
                  <div className="h-14 w-20 shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="line-clamp-2 text-xs font-bold leading-snug text-gray-800 group-hover:text-[#3aa6dd]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[10px] text-gray-400">
                      {item.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Col 3: ĐIỂM TIN (4 Cols) */}
          <div className="lg:col-span-4">
            <SectionBadgeBar
              title="ĐIỂM TIN"
              bgColor="#3aa6dd"
              borderColor="#3aa6dd"
            />
            <div className="space-y-4">
              {merged.lowerThreeCols.diemTin.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedArticle(item)}
                  className="cursor-pointer border-b border-gray-100 pb-3 last:border-b-0"
                >
                  <span className="inline-block bg-black px-2 py-0.5 text-[9px] font-bold text-white">
                    {item.category}
                  </span>
                  <h4 className="mt-1.5 text-xs font-bold leading-snug text-gray-900 hover:text-[#3aa6dd]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[10px] text-gray-400">
                    <strong>{item.author}</strong> - {item.date}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* VIDEO NỔI BẬT (8 Cols) + BÌNH LUẬN GẦN ĐÂY (4 Cols) */}
        <div
          id="video-noi-bat"
          className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12"
        >
          {/* Left 8 Cols: Video Player Box */}
          <div className="lg:col-span-8">
            <div className="border-b-2 border-neutral-800 pb-1">
              <span className="inline-block bg-neutral-800 px-3 py-1 text-[11px] font-extrabold text-white">
                Video nổi bật
              </span>
            </div>

            <div className="overflow-hidden bg-[#1e1e1e] text-white">
              {/* Main Video Stage */}
              <div className="relative h-[300px] sm:h-[360px]">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="h-full w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-black/35 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="line-clamp-1 font-bold text-white drop-shadow">
                      {activeVideo.title}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] text-gray-200">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> Xem sau
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Share2 className="h-3.5 w-3.5" /> Chia sẻ
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveVideoIndex(
                          (idx) => (idx + 1) % merged.videoPlaylist.length
                        )
                      }
                      aria-label="Phát video"
                      className="flex h-14 w-20 items-center justify-center rounded-xl bg-black/75 text-white transition hover:bg-[#d81b60]"
                    >
                      <Play className="h-7 w-7 fill-current" />
                    </button>
                  </div>

                  <div />
                </div>
              </div>

              {/* Cyan Active Bar */}
              <div className="flex items-center justify-between bg-[#2b9fd9] px-4 py-3 text-xs font-bold text-white">
                <div className="flex items-center gap-2.5 truncate">
                  <Play className="h-4 w-4 shrink-0 fill-current" />
                  <span className="truncate">{activeVideo.title}</span>
                </div>
                <span className="ml-2 shrink-0 text-[11px]">
                  {activeVideo.duration}
                </span>
              </div>

              {/* Dark Playlist Items */}
              <div className="divide-y divide-white/10 bg-[#222222]">
                {merged.videoPlaylist.map((vid, idx) => (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition ${
                      idx === activeVideoIndex
                        ? "bg-white/10"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="h-12 w-20 shrink-0 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-1 text-xs font-medium text-gray-200">
                        {vid.title}
                      </p>
                      <span className="text-[10px] text-gray-400">
                        {vid.duration}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right 4 Cols: BÌNH LUẬN GẦN ĐÂY */}
          <div className="lg:col-span-4">
            <SectionBadgeBar
              title="BÌNH LUẬN GẦN ĐÂY"
              bgColor="#3aa6dd"
              borderColor="#3aa6dd"
            />
            <ul className="space-y-4 text-xs">
              {merged.sidebar.recentComments.map((cmt) => (
                <li
                  key={cmt.id}
                  className="border-b border-gray-100 pb-3 text-gray-600"
                >
                  <span className="text-gray-500">{cmt.user}</span> trên{" "}
                  <a
                    href="#tin-tuc-cuoi"
                    className="font-bold italic text-gray-900 hover:text-[#b80d70]"
                  >
                    {cmt.postTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== 7. TIN TỨC (PINK BADGE #d81b60 — 2x5 = 10 ARTICLE GRID) ==================== */}
      <section id="tin-tuc-cuoi" className="mx-auto max-w-[1060px] px-4 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionBadgeBar
              title="TIN TỨC"
              bgColor="#d81b60"
              borderColor="#d81b60"
            />

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              {(showAllBottomNews
                ? merged.bottomNewsGrid
                : merged.bottomNewsGrid.slice(0, 6)
              ).map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer"
                >
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-bold text-white">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-sm font-bold leading-snug text-gray-900 group-hover:text-[#d81b60]">
                    {article.title}
                  </h3>
                  <div className="mt-1.5 flex items-center justify-between text-[10px] text-gray-400">
                    <span>
                      <strong>{article.author}</strong> - {article.date}
                    </span>
                    <span className="bg-black px-1.5 py-0.2 font-bold text-white">
                      {article.comments}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAllBottomNews((s) => !s)}
                className="inline-flex items-center gap-1 border border-gray-200 px-5 py-2 text-xs text-gray-500 hover:border-[#d81b60] hover:text-[#d81b60]"
              >
                <span>{showAllBottomNews ? "Thu gọn" : "Xem thêm"}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 8. DARK CHARCOAL FOOTER (#222222) ==================== */}
      <footer className="bg-[#222222] py-14 text-gray-300">
        <div className="mx-auto max-w-[1060px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Logo & Contact (3 Cols) */}
            <div className="lg:col-span-3">
              <a href="#top" className="flex items-center gap-1.5">
                <span className="flex h-9 w-9 items-center justify-center bg-white font-serif text-2xl font-black text-[#222222]">
                  M
                </span>
                <span className="font-serif text-2xl font-bold text-white">
                  ona
                </span>
              </a>

              <ul className="mt-6 space-y-3 text-xs text-gray-300">
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="uppercase">{primaryEmail}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                  <span className="uppercase">{merged.business.address}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: BÀI VIẾT MỚI (3 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                BÀI VIẾT MỚI
              </h4>
              <div className="mt-4 space-y-3">
                {merged.bottomNewsGrid.slice(0, 3).map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedArticle(post)}
                    className="flex cursor-pointer gap-3"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-12 w-16 shrink-0 object-cover"
                    />
                    <h5 className="line-clamp-2 text-[11px] font-medium leading-snug text-gray-300 hover:text-white">
                      {post.title}
                    </h5>
                  </article>
                ))}
              </div>
            </div>

            {/* Col 3: CHỦ ĐỀ NỔI BẬT (3 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                CHỦ ĐỀ NỔI BẬT
              </h4>
              <ul className="mt-4 space-y-2 text-xs">
                {merged.footerTopics.map((topic) => (
                  <li
                    key={topic.name}
                    className="flex items-center justify-between text-gray-300 hover:text-white"
                  >
                    <a href="#tin-tuc-cuoi">{topic.name}</a>
                    <span>{topic.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Đăng ký nhận thông báo (3 Cols) */}
            <div className="lg:col-span-3">
              <div className="border border-white/15 bg-[#2a2a2a] p-5">
                <h4 className="text-sm font-bold text-white">
                  Đăng ký nhận thông báo
                </h4>
                <p className="mt-2 text-[11px] leading-relaxed text-gray-400">
                  Trở thành 1 trong những người nhận được thông báo mới nhất từ
                  chúng tôi
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail.trim()) {
                      setNewsletterDone(true);
                      setNewsletterEmail("");
                    }
                  }}
                  className="mt-4 space-y-2.5"
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full bg-white px-3 py-2 text-xs text-gray-900 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#3aa6dd] py-2 text-xs font-bold text-white transition hover:bg-[#2b90c4]"
                  >
                    Đăng ký
                  </button>
                </form>
                {newsletterDone && (
                  <p className="mt-2 flex items-center gap-1 text-[11px] text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Đã đăng ký thành công!</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
