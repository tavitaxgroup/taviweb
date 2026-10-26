"use client";

import React, { useState } from "react";
import {
  Zap,
  Calendar,
  Search,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Share2,
  Play,
  User,
  Clock,
  Scale,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu11DefaultData,
  type LuatSu11Data,
  type NewsArticleItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const content: LuatSu11Data = adaptClonedTemplateData(
    luatSu11DefaultData,
    data
  );

  const [heroSideTab, setHeroSideTab] = useState<"latest" | "trending">(
    "latest"
  );
  const [trendingRightTab, setTrendingRightTab] = useState<string>(
    content.trendingSection.rightTabs[0] || "Dân Sự"
  );
  const [digestTab, setDigestTab] = useState<string>(
    content.circularDigestSection.tabs[0] || "Thời Sự Pháp Lý"
  );
  const [intlRightTab, setIntlRightTab] = useState<string>(
    content.internationalLawSection.rightTabs[0] || "Chính Sách"
  );
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const heroSideArticles =
    heroSideTab === "latest"
      ? content.heroBento.latestTabArticles
      : content.heroBento.trendingTabArticles;

  const currentTrendingRightList =
    content.trendingSection.rightTabArticles[trendingRightTab] ||
    content.trendingSection.rightTabArticles["Dân Sự"] ||
    [];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName.trim() || !formState.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#111827] font-sans selection:bg-[#f21b3f] selection:text-white">
      {/* 1. TOP DARK BREAKING BAR */}
      <div className="bg-[#111111] text-white text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex items-center gap-1 bg-[#f21b3f] text-white font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0">
              <Zap className="w-3 h-3 fill-current" />
              {content.topBar.breakingLabel}
            </span>
            <p className="truncate text-gray-200 font-medium">
              {content.topBar.breakingTitle}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-5 shrink-0 text-gray-300">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#f21b3f]" />
              {content.topBar.currentDate}
            </span>
            <div className="flex items-center gap-2 border-l border-white/15 pl-4">
              {content.topBar.socials.map((soc) => (
                <a
                  key={soc}
                  href="#footer"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#f21b3f] text-[10px] font-bold flex items-center justify-center transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 rounded-xl bg-[#f21b3f] flex items-center justify-center text-white shadow-md shadow-[#f21b3f]/25 group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-[#111111] leading-none">
                {content.navigation.brandName}
              </div>
              <div className="text-[10px] font-bold tracking-widest text-[#f21b3f] uppercase mt-1">
                {content.navigation.brandTagline}
              </div>
            </div>
          </a>

          {/* Navigation Links with HOT badges */}
          <nav className="hidden lg:flex items-center gap-6">
            {content.navigation.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-2 text-sm font-bold text-gray-800 hover:text-[#f21b3f] transition-colors"
              >
                {item.badge && (
                  <span className="absolute -top-2.5 right-0 bg-[#f21b3f] text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-sm uppercase tracking-wider leading-tight">
                    {item.badge}
                  </span>
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Search & Hotline */}
          <div className="flex items-center gap-3">
            <a
              href="#digest"
              className="hidden sm:inline-flex items-center gap-1.5 bg-gray-100 hover:bg-[#f21b3f] hover:text-white text-gray-800 text-xs font-bold px-3.5 py-2 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f21b3f] group-hover:text-white" />
              {content.business.phone[0]}
            </a>
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#f21b3f] hover:text-[#f21b3f] flex items-center justify-center text-gray-600 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. TRENDING BREAKING TICKER BAR */}
      <div className="bg-white border-b border-gray-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-0.5">
            {content.tickerBar.topics.map((topic) => (
              <a
                key={topic.id}
                href="#popular"
                className="flex items-center gap-2.5 bg-gray-50 hover:bg-red-50/60 border border-gray-200/80 rounded-full pr-4 pl-1.5 py-1 shrink-0 transition-colors group"
              >
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span className="text-xs font-semibold text-gray-700 group-hover:text-[#f21b3f] max-w-[230px] truncate">
                  {topic.title}
                </span>
              </a>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <span className="bg-[#f21b3f] text-white text-[11px] font-bold px-2.5 py-1 rounded">
              {content.tickerBar.tagLabel}
            </span>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
              {content.tickerBar.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  {idx > 0 && <span className="text-gray-300">•</span>}
                  <a href="#trending" className="hover:text-[#f21b3f]">
                    {tag}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. HERO BENTO GRID */}
      <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        {/* Top Row: Left 8 Cols Main Overlay + Right 4 Cols Numbered Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Left 8 Cols Feature */}
          <div className="lg:col-span-8 relative rounded-xl overflow-hidden group min-h-[420px] sm:min-h-[460px] flex flex-col justify-end shadow-sm">
            <img
              src={content.heroBento.mainFeature.image}
              alt={content.heroBento.mainFeature.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 text-white">
              <span className="inline-block bg-[#f21b3f] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded mb-3">
                {content.heroBento.mainFeature.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold leading-tight mb-3 group-hover:text-red-200 transition-colors">
                {content.heroBento.mainFeature.title}
              </h1>
              {content.heroBento.mainFeature.excerpt && (
                <p className="text-sm text-gray-200 line-clamp-2 mb-4 max-w-3xl">
                  {content.heroBento.mainFeature.excerpt}
                </p>
              )}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/15">
                <div className="flex items-center gap-4 text-xs text-gray-300 font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#f21b3f]" />
                    {content.heroBento.mainFeature.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#f21b3f]" />
                    {content.heroBento.mainFeature.date}
                  </span>
                  {content.heroBento.mainFeature.comments && (
                    <span className="inline-flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-[#f21b3f]" />
                      {content.heroBento.mainFeature.comments} bình luận
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Bài trước"
                    className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#f21b3f] flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Bài tiếp"
                    className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#f21b3f] flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right 4 Cols Numbered Tabs */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200/90 p-5 flex flex-col justify-between shadow-sm">
            <div>
              {/* Tabs Header */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg mb-5">
                <button
                  type="button"
                  onClick={() => setHeroSideTab("latest")}
                  className={`py-2 text-xs font-extrabold uppercase tracking-wider rounded-md transition-all ${
                    heroSideTab === "latest"
                      ? "bg-[#f21b3f] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Mới Nhất
                </button>
                <button
                  type="button"
                  onClick={() => setHeroSideTab("trending")}
                  className={`py-2 text-xs font-extrabold uppercase tracking-wider rounded-md transition-all ${
                    heroSideTab === "trending"
                      ? "bg-[#f21b3f] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Thịnh Hành
                </button>
              </div>

              {/* 4 Numbered Items */}
              <div className="space-y-4">
                {heroSideArticles.map((item) => (
                  <article
                    key={item.id}
                    className="flex items-start gap-3.5 group cursor-pointer"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      {item.numberBadge && (
                        <span className="absolute top-1 left-1 w-5 h-5 rounded bg-[#f21b3f] text-white text-[10px] font-black flex items-center justify-center shadow">
                          {item.numberBadge}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#f21b3f] block mb-0.5">
                        {item.category}
                      </span>
                      <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-[#f21b3f] leading-snug line-clamp-2 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[11px] text-gray-400 mt-1 block">
                        {item.date}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Columns with TRENDING top-left tabs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Tall Card (4 cols) */}
          {content.heroBento.bottomCards[0] && (
            <div className="md:col-span-4 relative rounded-xl overflow-hidden group min-h-[300px] flex flex-col justify-end shadow-sm">
              <img
                src={content.heroBento.bottomCards[0].image}
                alt={content.heroBento.bottomCards[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <span className="absolute top-0 left-5 bg-[#f21b3f] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-b-md shadow">
                TRENDING
              </span>
              <div className="relative z-10 p-5 text-white">
                <h3 className="text-base font-extrabold leading-snug mb-2 group-hover:text-red-200 transition-colors">
                  {content.heroBento.bottomCards[0].title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-gray-300">
                  <span>{content.heroBento.bottomCards[0].author}</span>
                  <span>•</span>
                  <span>{content.heroBento.bottomCards[0].date}</span>
                </div>
              </div>
            </div>
          )}

          {/* Center Stacked 2 Cards (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {content.heroBento.bottomCards.slice(1, 3).map((card) => (
              <div
                key={card.id}
                className="relative rounded-xl overflow-hidden group min-h-[138px] flex-1 flex flex-col justify-end shadow-sm"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <span
                  className="absolute top-0 left-4 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-b-md"
                  style={{ backgroundColor: card.categoryColor || "#f21b3f" }}
                >
                  {card.category}
                </span>
                {card.isVideo && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#f21b3f] text-white flex items-center justify-center shadow-lg">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                )}
                <div className="relative z-10 p-4 text-white">
                  <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2 group-hover:text-red-200 transition-colors">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Tall Card (4 cols) */}
          {content.heroBento.bottomCards[3] && (
            <div className="md:col-span-4 relative rounded-xl overflow-hidden group min-h-[300px] flex flex-col justify-end shadow-sm">
              <img
                src={content.heroBento.bottomCards[3].image}
                alt={content.heroBento.bottomCards[3].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <span className="absolute top-0 left-5 bg-[#f21b3f] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-b-md shadow">
                TRENDING
              </span>
              <div className="relative z-10 p-5 text-white">
                <h3 className="text-base font-extrabold leading-snug mb-2 group-hover:text-red-200 transition-colors">
                  {content.heroBento.bottomCards[3].title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-gray-300">
                  <span>{content.heroBento.bottomCards[3].author}</span>
                  <span>•</span>
                  <span>{content.heroBento.bottomCards[3].date}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. SECTION: TIN TỨC PHỔ BIẾN */}
      <section id="popular" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <SectionHeading title={content.popularNewsSection.title} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 7 Cols: 3 Horizontal Cards */}
          <div className="lg:col-span-7 space-y-6">
            {content.popularNewsSection.leftArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-xl border border-gray-200/80 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 hover:shadow-md transition-shadow group"
              >
                <div className="sm:w-56 sm:h-44 rounded-lg overflow-hidden shrink-0 relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-2.5 left-2.5 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded"
                    style={{ backgroundColor: art.categoryColor || "#f21b3f" }}
                  >
                    {art.category}
                  </span>
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-[#f21b3f] leading-snug mb-2 transition-colors">
                      {art.title}
                    </h3>
                    {art.excerpt && (
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3">
                        {art.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-gray-100 text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-800">
                        {art.author}
                      </span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      {art.comments && (
                        <span className="inline-flex items-center gap-1">
                          <MessageSquare className="w-3.5 h-3.5" />
                          {art.comments}
                        </span>
                      )}
                      {art.shares && (
                        <span className="inline-flex items-center gap-1">
                          <Share2 className="w-3.5 h-3.5" />
                          {art.shares}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right 5 Cols: Featured Vertical Card + Mini Video Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <article className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-sm group flex-1">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={content.popularNewsSection.rightFeatured.image}
                  alt={content.popularNewsSection.rightFeatured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className="absolute top-3 left-3 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded"
                  style={{
                    backgroundColor:
                      content.popularNewsSection.rightFeatured.categoryColor ||
                      "#7c3aed",
                  }}
                >
                  {content.popularNewsSection.rightFeatured.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-[#f21b3f] leading-snug mb-2 transition-colors">
                  {content.popularNewsSection.rightFeatured.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-4">
                  {content.popularNewsSection.rightFeatured.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                  <span className="font-bold text-gray-800">
                    {content.popularNewsSection.rightFeatured.author}
                  </span>
                  <span>{content.popularNewsSection.rightFeatured.date}</span>
                </div>
              </div>
            </article>

            {/* Bottom Mini Video Card */}
            <article className="bg-white rounded-xl border border-gray-200/80 p-4 flex items-center gap-4 group hover:shadow-md transition-shadow">
              <div className="relative w-32 h-24 rounded-lg overflow-hidden shrink-0">
                <img
                  src={content.popularNewsSection.rightMiniVideo.image}
                  alt={content.popularNewsSection.rightMiniVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#f21b3f] text-white flex items-center justify-center shadow">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-extrabold uppercase text-[#f21b3f] block mb-1">
                  {content.popularNewsSection.rightMiniVideo.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#f21b3f] line-clamp-2 leading-snug">
                  {content.popularNewsSection.rightMiniVideo.title}
                </h4>
                <span className="text-[11px] text-gray-400 mt-1 block">
                  {content.popularNewsSection.rightMiniVideo.date}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. SECTION: THỊNH HÀNH (3 COLUMNS) */}
      <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <SectionHeading title={content.trendingSection.title} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left 4 Cols: 01-04 Numbered */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200/80 p-5 space-y-4">
            {content.trendingSection.leftNumbered.map((item) => (
              <NumberedThumbCard key={item.id} item={item} />
            ))}
          </div>

          {/* Center 4 Cols: Tall Dark Overlay Poster */}
          <div className="lg:col-span-4 relative rounded-xl overflow-hidden group min-h-[420px] flex flex-col justify-end shadow-sm">
            <img
              src={content.trendingSection.centerPoster.image}
              alt={content.trendingSection.centerPoster.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
            <div className="relative z-10 p-6 text-white">
              <span className="inline-block bg-[#f21b3f] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded mb-3">
                {content.trendingSection.centerPoster.category}
              </span>
              <h3 className="text-xl font-extrabold leading-snug mb-3 group-hover:text-red-200 transition-colors">
                {content.trendingSection.centerPoster.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-gray-300">
                <span>{content.trendingSection.centerPoster.author}</span>
                <span>•</span>
                <span>{content.trendingSection.centerPoster.date}</span>
              </div>
            </div>
          </div>

          {/* Right 4 Cols: Tabbed 01-04 */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200/80 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 border-b border-gray-200 pb-3 mb-4">
                {content.trendingSection.rightTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setTrendingRightTab(tab)}
                    className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition-colors ${
                      trendingRightTab === tab
                        ? "bg-[#f21b3f] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {currentTrendingRightList.map((item) => (
                  <NumberedThumbCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: THỜI SỰ / NHỊP SỐNG (CIRCULAR DIGEST) + NHẬN TIN TỨC MỚI NHẤT */}
      <section id="digest" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 8 Cols: 2x3 Circular Thumbnail Grid */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200/80 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                {content.circularDigestSection.tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setDigestTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-colors ${
                      digestTab === tab
                        ? "bg-[#f21b3f] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <span className="text-xs font-bold text-[#f21b3f]">
                Chuyên đề: {digestTab}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.circularDigestSection.items.map((item) => (
                <article
                  key={item.id}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="relative w-20 h-20 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 group-hover:border-[#f21b3f] transition-colors"
                    />
                    {item.numberBadge && (
                      <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[#f21b3f] text-white text-[10px] font-black flex items-center justify-center shadow">
                        {item.numberBadge}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block bg-red-50 text-[#f21b3f] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#f21b3f] line-clamp-2 leading-snug transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-gray-400 mt-1 block">
                      {item.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right 4 Cols: Nhận Tin Tức Mới Nhất Form */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200/80 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-6 bg-[#f21b3f] rounded-full" />
                <h3 className="text-lg font-extrabold text-gray-900">
                  {content.circularDigestSection.newsletterBox.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                {content.circularDigestSection.newsletterBox.subtitle}
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-emerald-950 mb-1">
                    Đã Gửi Yêu Cầu Thành Công!
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Ban Pháp chế Magezix sẽ phản hồi qua email{" "}
                    <strong>{formState.email}</strong> trong vòng 24 giờ.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên của bạn *"
                      value={formState.fullName}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, fullName: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-200 focus:border-[#f21b3f] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Địa chỉ Email *"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-200 focus:border-[#f21b3f] focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Nội dung câu hỏi pháp lý cần tư vấn..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-200 focus:border-[#f21b3f] focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#f21b3f] hover:bg-[#d41435] text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-lg shadow-md shadow-[#f21b3f]/20 transition-colors"
                  >
                    {content.circularDigestSection.newsletterBox.buttonText}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <span>Hotline trực ban:</span>
              <strong className="text-[#f21b3f]">
                {content.business.phone[0]}
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DARK NAVY SECTION: VIDEO HOT (#0d0f17) */}
      <section id="videos" className="bg-[#0d0f17] text-white py-14 my-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-7 bg-[#f21b3f] rounded-full" />
              <h2 className="text-2xl font-extrabold tracking-tight">
                {content.hotVideoSection.title}
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#f21b3f]">
              Magezix Legal TV • Phát sóng 24/7
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 3 Cols: 2 Stacked Video Cards */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {content.hotVideoSection.leftVideos.map((vid) => (
                <div
                  key={vid.id}
                  className="relative rounded-xl overflow-hidden group min-h-[200px] flex-1 flex flex-col justify-end"
                >
                  <img
                    src={vid.image}
                    alt={vid.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#f21b3f] text-white flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div className="relative z-10 p-4">
                    <span className="text-[10px] font-extrabold uppercase text-[#f21b3f] block mb-1">
                      {vid.category} • {vid.duration}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2 group-hover:text-red-300 transition-colors">
                      {vid.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Center 6 Cols: Main Large Video Showcase */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden group min-h-[420px] flex flex-col justify-end">
              <img
                src={content.hotVideoSection.centerMainVideo.image}
                alt={content.hotVideoSection.centerMainVideo.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-[#f21b3f] text-white flex items-center justify-center shadow-2xl shadow-[#f21b3f]/50 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
              <div className="relative z-10 p-6 sm:p-8">
                <span className="inline-block bg-[#f21b3f] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded mb-2.5">
                  {content.hotVideoSection.centerMainVideo.category} •{" "}
                  {content.hotVideoSection.centerMainVideo.duration}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-snug mb-2 group-hover:text-red-200 transition-colors">
                  {content.hotVideoSection.centerMainVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-3">
                  {content.hotVideoSection.centerMainVideo.excerpt}
                </p>
                <div className="text-xs text-gray-400">
                  {content.hotVideoSection.centerMainVideo.author} •{" "}
                  {content.hotVideoSection.centerMainVideo.date}
                </div>
              </div>
            </div>

            {/* Right 3 Cols: Tall Vertical Video Card */}
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden group min-h-[420px] flex flex-col justify-end">
              <img
                src={content.hotVideoSection.rightTallVideo.image}
                alt={content.hotVideoSection.rightTallVideo.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#f21b3f] text-white flex items-center justify-center shadow-lg">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <div className="relative z-10 p-5">
                <span className="inline-block bg-purple-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded mb-2">
                  {content.hotVideoSection.rightTallVideo.category}
                </span>
                <h3 className="text-base font-extrabold leading-snug mb-2 group-hover:text-red-200 transition-colors">
                  {content.hotVideoSection.rightTallVideo.title}
                </h3>
                <span className="text-xs text-gray-300">
                  {content.hotVideoSection.rightTallVideo.author} •{" "}
                  {content.hotVideoSection.rightTallVideo.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION: THẾ GIỚI & PHÁP LUẬT QUỐC TẾ */}
      <section id="international" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <SectionHeading title={content.internationalLawSection.title} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left 3 Cols: 01-04 Numbered */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200/80 p-4 space-y-4">
            {content.internationalLawSection.leftNumbered.map((item) => (
              <NumberedThumbCard key={item.id} item={item} />
            ))}
          </div>

          {/* Center 6 Cols: Main Card + Bottom Horizontal Video */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden group min-h-[300px] flex-1 flex flex-col justify-end shadow-sm">
              <img
                src={content.internationalLawSection.centerMain.image}
                alt={content.internationalLawSection.centerMain.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 p-6 text-white">
                <span className="inline-block bg-[#f21b3f] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded mb-2">
                  {content.internationalLawSection.centerMain.category}
                </span>
                <h3 className="text-xl font-extrabold leading-snug mb-2 group-hover:text-red-200 transition-colors">
                  {content.internationalLawSection.centerMain.title}
                </h3>
                <p className="text-xs text-gray-200 line-clamp-2">
                  {content.internationalLawSection.centerMain.excerpt}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200/80 p-4 flex items-center gap-4 group">
              <div className="relative w-36 h-24 rounded-lg overflow-hidden shrink-0">
                <img
                  src={content.internationalLawSection.centerBottomVideo.image}
                  alt={content.internationalLawSection.centerBottomVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#f21b3f] text-white flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-extrabold uppercase text-[#2563eb] block mb-1">
                  {content.internationalLawSection.centerBottomVideo.category} •{" "}
                  {content.internationalLawSection.centerBottomVideo.duration}
                </span>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#f21b3f] line-clamp-2 leading-snug">
                  {content.internationalLawSection.centerBottomVideo.title}
                </h4>
                <span className="text-xs text-gray-400 mt-1 block">
                  {content.internationalLawSection.centerBottomVideo.author}
                </span>
              </div>
            </div>
          </div>

          {/* Right 3 Cols: Tabs + 01-04 Numbered */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200/80 p-4">
            <div className="flex items-center gap-1 border-b border-gray-200 pb-2.5 mb-4">
              {content.internationalLawSection.rightTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setIntlRightTab(tab)}
                  className={`px-2.5 py-1 rounded text-[11px] font-extrabold transition-colors ${
                    intlRightTab === tab
                      ? "bg-[#f21b3f] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {content.internationalLawSection.rightNumbered.map((item) => (
                <NumberedThumbCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. BOTTOM 3-COLUMN CATEGORY LISTS & PARTNER LOGOS */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {content.bottomCategoryColumns.map((col) => (
            <div
              key={col.id}
              className="bg-white rounded-xl border border-gray-200/80 p-5"
            >
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-gray-200">
                <span className="w-2 h-5 bg-[#f21b3f] rounded-full" />
                <h3 className="text-base font-extrabold text-gray-900">
                  {col.title}
                </h3>
              </div>
              <div className="space-y-4">
                {col.items.map((item) => (
                  <article
                    key={item.id}
                    className="flex items-start gap-3.5 group cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-16 rounded-lg object-cover shrink-0 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-extrabold uppercase text-[#f21b3f] block">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#f21b3f] line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 6 Partner / Media Logos Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-4">
          {content.partnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white border border-gray-200/80 rounded-xl p-4 text-center hover:border-[#f21b3f] transition-colors"
            >
              <div className="text-xs font-black tracking-wider text-gray-800">
                {logo.name}
              </div>
              <div className="text-[10px] text-gray-400 font-semibold mt-0.5">
                {logo.subtitle}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DARK FOOTER (#111111) */}
      <footer id="footer" className="bg-[#111111] text-gray-300 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Col 1: Brand & Contact (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f21b3f] flex items-center justify-center text-white">
                  <Scale className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-white">
                  {content.navigation.brandName}
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {content.footer.description}
              </p>
              <div className="space-y-2 text-xs text-gray-300 pt-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#f21b3f] shrink-0 mt-0.5" />
                  <span>{content.business.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#f21b3f] shrink-0" />
                  <span>{content.business.phone.join(" | ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#f21b3f] shrink-0" />
                  <span>{content.business.email[0]}</span>
                </div>
              </div>
            </div>

            {/* Col 2: Thế giới (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#f21b3f] rounded-full" />
                Thế Giới Pháp Lý
              </h4>
              <div className="space-y-4">
                {content.footer.worldLinks.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-14 rounded object-cover shrink-0"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-gray-200 group-hover:text-[#f21b3f] line-clamp-2 leading-snug">
                        {item.title}
                      </h5>
                      <span className="text-[10px] text-gray-500">
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: Đời sống Pháp lý (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#f21b3f] rounded-full" />
                Đời Sống Pháp Lý
              </h4>
              <div className="space-y-4">
                {content.footer.legalLifeLinks.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-14 rounded object-cover shrink-0"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-gray-200 group-hover:text-[#f21b3f] line-clamp-2 leading-snug">
                        {item.title}
                      </h5>
                      <span className="text-[10px] text-gray-500">
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: Thư viện (3x2 grid) (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#f21b3f] rounded-full" />
                Thư Viện Hoạt Động
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {content.footer.galleryImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-lg overflow-hidden bg-gray-800"
                  >
                    <img
                      src={imgUrl}
                      alt={`Thư viện Magezix ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex flex-wrap items-center gap-5">
              {content.footer.bottomNav.map((nav) => (
                <a
                  key={nav}
                  href="#hero"
                  className="hover:text-white transition-colors"
                >
                  {nav}
                </a>
              ))}
            </div>
            <p>{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between pb-3 mb-6 border-b border-gray-200">
      <div className="flex items-center gap-2.5">
        <span className="w-2 h-6 bg-[#f21b3f] rounded-full" />
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#f21b3f]" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
    </div>
  );
}

function NumberedThumbCard({ item }: { item: NewsArticleItem }) {
  return (
    <article className="flex items-start gap-3.5 group cursor-pointer">
      <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        {item.numberBadge && (
          <span className="absolute top-1 left-1 w-5 h-5 rounded bg-[#f21b3f] text-white text-[10px] font-black flex items-center justify-center shadow">
            {item.numberBadge}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <span className="text-[10px] font-extrabold uppercase text-[#f21b3f] block">
          {item.category}
        </span>
        <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#f21b3f] line-clamp-2 leading-snug transition-colors">
          {item.title}
        </h4>
      </div>
    </article>
  );
}

export default DemoTemplateRenderer;
