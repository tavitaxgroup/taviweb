"use client";

import React, { useState } from "react";
import {
  Sun,
  Search,
  Play,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu12DefaultData,
  type LuatSu12Data,
  type EditorialBriefItem,
  type EditorialSectionSplit,
  type EditorialSectionGrid6,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const content: LuatSu12Data = adaptClonedTemplateData(
    luatSu12DefaultData,
    data
  );

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const activeVideo =
    content.sidebar.videoPlaylist.items[activeVideoIndex] ||
    content.sidebar.videoPlaylist.items[0];

  // Helper to interleave splitSections and gridSections in the exact visual sequence of LUAT015:
  // 1. Xã hội (split)
  // 2. Pháp luật (split)
  // 3. Thế giới (grid6)
  // 4. Kinh doanh & Bảo hiểm (split)
  // 5. Đời sống Pháp lý (grid6)
  // 6. Hồ sơ & Án lệ (split)
  // 7. Luật Giao thông & Xe (grid6)
  // 8. Công nghệ Pháp lý (split)
  const splitMap = new Map<string, EditorialSectionSplit>(
    content.splitSections.map((s) => [s.id, s])
  );
  const gridMap = new Map<string, EditorialSectionGrid6>(
    content.gridSections.map((g) => [g.id, g])
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#9e0b0f] selection:text-white">
      {/* 1. TOP BLACK BAR (#1a1a1a) */}
      <div className="bg-[#1a1a1a] text-gray-300 text-xs">
        <div className="max-w-6xl mx-auto px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <Sun className="w-3.5 h-3.5" />
              {content.topWeatherBar.temperature}{" "}
              <span className="text-gray-200 font-normal">
                {content.topWeatherBar.city}
              </span>
            </span>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="hidden sm:inline text-gray-300">
              {content.topWeatherBar.dateText}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {content.topWeatherBar.socials.map((soc) => (
              <a
                key={soc}
                href="#footer"
                className="w-6 h-6 rounded-sm bg-white/10 hover:bg-[#b51218] text-white text-[11px] font-bold flex items-center justify-center transition-colors"
              >
                {soc}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. DEEP CRIMSON RED MASTHEAD (#9e0b0f) & NAVIGATION (#b51218) */}
      <header className="bg-[#9e0b0f] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left [news] MONA Logo */}
          <a href="#top" className="flex items-center gap-2.5 group shrink-0">
            <span className="bg-white text-[#9e0b0f] font-black text-xl sm:text-2xl px-2.5 py-1 rounded-sm tracking-tight uppercase shadow-sm">
              {content.masthead.logoPrefix}
            </span>
            <div>
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-white block leading-none">
                {content.masthead.logoMain}
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-red-200 uppercase block mt-1">
                {content.masthead.subtitle}
              </span>
            </div>
          </a>

          {/* Right Hotline Banner Box */}
          <div className="bg-[#7a070a] border border-red-400/30 rounded px-4 py-2.5 flex items-center gap-3">
            <Phone className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-red-200 font-semibold">
                Đường dây nóng Tư vấn Bảo hiểm & Tranh tụng
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-amber-300">
                {content.masthead.bannerHighlight}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar (#b51218) */}
        <div className="bg-[#b51218] border-t border-white/15">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-3">
            <nav className="flex items-center overflow-x-auto no-scrollbar">
              {content.masthead.navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-3 text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-colors ${
                    idx === 0
                      ? "bg-[#85080c] text-white"
                      : "text-white hover:bg-[#85080c]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center bg-[#85080c] rounded px-2.5 py-1 my-1.5 border border-white/15">
              <input
                type="text"
                placeholder="Tìm văn bản, án lệ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-xs text-white placeholder-red-200/70 focus:outline-none w-36"
              />
              <Search className="w-3.5 h-3.5 text-red-200" />
            </div>
          </div>
        </div>
      </header>

      {/* 3. MAIN 2-COLUMN EDITORIAL PORTAL LAYOUT */}
      <main id="top" className="max-w-6xl mx-auto px-4 py-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT 8 COLUMNS: MAIN EDITORIAL SECTIONS */}
          <div className="lg:col-span-8 space-y-10">
            {/* A. TOP LEAD SECTION (Main Story Left + 5 Breaking Briefs Right) */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-gray-200">
              {/* Main Lead Story (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="relative overflow-hidden rounded-sm mb-3 group">
                    <img
                      src={content.topLeadSection.mainStory.image}
                      alt={content.topLeadSection.mainStory.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {content.topLeadSection.mainStory.category && (
                      <span className="absolute top-2.5 left-2.5 bg-[#9e0b0f] text-white text-[10px] font-bold uppercase px-2.5 py-1">
                        {content.topLeadSection.mainStory.category}
                      </span>
                    )}
                  </div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 hover:text-[#9e0b0f] leading-snug mb-2 transition-colors">
                    {content.topLeadSection.mainStory.title}
                  </h1>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500">
                      {content.topLeadSection.mainStory.date}
                    </span>
                    <CommentSquareBadge
                      count={content.topLeadSection.mainStory.commentsCount}
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {content.topLeadSection.mainStory.excerpt}
                  </p>
                </div>
                <div>
                  <a
                    href="#phap-luat"
                    className="inline-block bg-[#9e0b0f] hover:bg-[#7a070a] text-white text-xs font-bold px-4 py-2 rounded-sm transition-colors"
                  >
                    Xem thêm
                  </a>
                </div>
              </div>

              {/* 5 Horizontal Breaking Briefs (5 cols) */}
              <div className="md:col-span-5 space-y-3.5">
                {content.topLeadSection.rightBriefs.map((item) => (
                  <article
                    key={item.id}
                    className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0 group cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-14 object-cover rounded-sm shrink-0 group-hover:opacity-90"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs font-bold text-gray-900 group-hover:text-[#9e0b0f] leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] text-gray-400">
                          {item.date}
                        </span>
                        <CommentSquareBadge count={item.commentsCount} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* B. SECTION: THỜI SỰ (3-Column Article Grid) */}
            <section id="thoi-su">
              <RedUnderlineHeading title={content.thoiSuSection.title} />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {content.thoiSuSection.cards.map((card) => (
                  <article key={card.id} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-sm mb-2.5">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-sm font-extrabold text-gray-900 group-hover:text-[#9e0b0f] leading-snug mb-1.5">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] text-gray-400">
                        {card.date}
                      </span>
                      <CommentSquareBadge count={card.commentsCount} />
                    </div>
                    {card.excerpt && (
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                        {card.excerpt}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* C. SECTION: TIÊU ĐIỂM (2 Top Side-by-Side + 4 Mini Horizontal Below) */}
            <section id="tieu-diem">
              <RedUnderlineHeading title={content.tieuDiemSection.title} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                {content.tieuDiemSection.topPair.map((item) => (
                  <article key={item.id} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-sm mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base font-extrabold text-gray-900 group-hover:text-[#9e0b0f] leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] text-gray-400">
                        {item.date}
                      </span>
                      <CommentSquareBadge count={item.commentsCount} />
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </article>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                {content.tieuDiemSection.bottomList.map((item) => (
                  <MiniHorizontalArticle key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* D. SECTION: XÃ HỘI (Split) */}
            {splitMap.get("xa-hoi") && (
              <SplitEditorialBlock section={splitMap.get("xa-hoi")!} />
            )}

            {/* E. SECTION: PHÁP LUẬT (Split) */}
            {splitMap.get("phap-luat") && (
              <SplitEditorialBlock section={splitMap.get("phap-luat")!} />
            )}

            {/* F. SECTION: THẾ GIỚI (3x2 Grid) */}
            {gridMap.get("the-gioi") && (
              <Grid6EditorialBlock section={gridMap.get("the-gioi")!} />
            )}

            {/* G. SECTION: KINH DOANH & BẢO HIỂM (Split) */}
            {splitMap.get("kinh-doanh") && (
              <SplitEditorialBlock section={splitMap.get("kinh-doanh")!} />
            )}

            {/* H. SECTION: ĐỜI SỐNG PHÁP LÝ (3x2 Grid) */}
            {gridMap.get("doi-song") && (
              <Grid6EditorialBlock section={gridMap.get("doi-song")!} />
            )}

            {/* I. SECTION: HỒ SƠ & ÁN LỆ (Split) */}
            {splitMap.get("ho-so") && (
              <SplitEditorialBlock section={splitMap.get("ho-so")!} />
            )}

            {/* J. SECTION: LUẬT GIAO THÔNG & XE (3x2 Grid) */}
            {gridMap.get("giao-thong") && (
              <Grid6EditorialBlock section={gridMap.get("giao-thong")!} />
            )}

            {/* K. SECTION: CÔNG NGHỆ PHÁP LÝ (Split) */}
            {splitMap.get("cong-nghe") && (
              <SplitEditorialBlock section={splitMap.get("cong-nghe")!} />
            )}
          </div>

          {/* RIGHT 4 COLUMNS: SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">
            {/* 1. Đọc nhiều nhất */}
            <div className="bg-white border border-gray-200 rounded-sm p-4">
              <RedUnderlineHeading title={content.sidebar.mostReadTitle} />
              <div className="divide-y divide-gray-100">
                {content.sidebar.mostReadItems.map((item, index) => (
                  <a
                    key={item.id}
                    href="#phap-luat"
                    className="py-2.5 flex items-start gap-3 group block"
                  >
                    <span className="w-5 h-5 rounded-sm bg-[#9e0b0f] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-gray-800 group-hover:text-[#9e0b0f] leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-gray-400">
                        {item.date}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Vertical Real Estate Legal Advisory Poster Banner */}
            <div className="relative rounded-sm overflow-hidden border border-gray-200 shadow-sm group">
              <img
                src={content.sidebar.realEstatePoster.image}
                alt={content.sidebar.realEstatePoster.title}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/65 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div>
                  <span className="inline-block bg-amber-500 text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-sm">
                    {content.sidebar.realEstatePoster.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-black leading-snug mb-2 text-amber-300">
                    {content.sidebar.realEstatePoster.title}
                  </h3>
                  <p className="text-xs text-gray-200 leading-relaxed mb-4">
                    {content.sidebar.realEstatePoster.subtitle}
                  </p>
                  <div className="bg-[#9e0b0f] text-white text-center py-2.5 px-3 rounded-sm font-extrabold text-xs tracking-wider uppercase">
                    Hotline Luật sư: {content.sidebar.realEstatePoster.hotline}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Weather Widget (TP. HỒ CHÍ MINH — 31°C + 5-day forecast) */}
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef2f6] border border-gray-200 rounded-sm p-4">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200">
                <div>
                  <div className="text-xs font-extrabold uppercase text-[#9e0b0f]">
                    {content.sidebar.weatherWidget.city}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {content.sidebar.weatherWidget.condition}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="w-7 h-7 text-amber-500" />
                  <span className="text-2xl font-black text-gray-900">
                    {content.sidebar.weatherWidget.currentTemp}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                <span>{content.sidebar.weatherWidget.humidity}</span>
                <span>{content.sidebar.weatherWidget.wind}</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 pt-2 border-t border-gray-200 text-center">
                {content.sidebar.weatherWidget.forecast.map((f) => (
                  <div
                    key={f.day}
                    className="bg-white rounded-sm py-1.5 border border-gray-100"
                  >
                    <div className="text-[10px] font-bold text-gray-500">
                      {f.day}
                    </div>
                    <Sun className="w-3.5 h-3.5 text-amber-500 mx-auto my-1" />
                    <div className="text-xs font-extrabold text-gray-800">
                      {f.temp}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Dark Video Playlist Box (Bản Tin Pháp Luật 24h) */}
            <div className="bg-[#1a1a1a] text-white rounded-sm overflow-hidden shadow-sm">
              <div className="bg-[#9e0b0f] px-4 py-2.5 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {content.sidebar.videoPlaylist.headerTitle}
                </span>
                <span className="text-[10px] bg-black/30 px-2 py-0.5 rounded">
                  VIDEO
                </span>
              </div>

              {/* Active Video Preview */}
              {activeVideo && (
                <div className="relative group">
                  <img
                    src={activeVideo.image}
                    alt={activeVideo.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#b51218] text-white flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="p-3 bg-[#111111]">
                    <h4 className="text-xs font-bold text-white leading-snug">
                      {activeVideo.title}
                    </h4>
                    <span className="text-[10px] text-red-400 mt-1 block">
                      Thời lượng: {activeVideo.duration}
                    </span>
                  </div>
                </div>
              )}

              {/* Queued Videos */}
              <div className="p-3 divide-y divide-white/10">
                {content.sidebar.videoPlaylist.items.map((vid, idx) => (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`w-full py-2.5 flex items-start gap-3 text-left transition-colors ${
                      idx === activeVideoIndex
                        ? "text-amber-300"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <img
                      src={vid.image}
                      alt={vid.title}
                      className="w-16 h-11 object-cover rounded-sm shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold line-clamp-2 leading-snug">
                        {vid.title}
                      </div>
                      <span className="text-[10px] text-gray-400">
                        {vid.duration}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Teal/Blue Enterprise Legal Advisory Banner */}
            <div className="bg-gradient-to-br from-[#0d4f6c] to-[#083346] text-white rounded-sm p-5 shadow-sm">
              <div className="inline-flex items-center gap-1.5 bg-teal-400/20 text-teal-200 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-sm mb-3">
                <Building2 className="w-3.5 h-3.5" />
                {content.sidebar.enterpriseBanner.badge}
              </div>
              <h3 className="text-base font-extrabold leading-snug mb-3">
                {content.sidebar.enterpriseBanner.title}
              </h3>
              <ul className="space-y-2 mb-4 text-xs text-teal-100">
                {content.sidebar.enterpriseBanner.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#footer"
                className="block w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs text-center uppercase py-2.5 rounded-sm transition-colors"
              >
                {content.sidebar.enterpriseBanner.ctaText}
              </a>
            </div>

            {/* 6. Lawyer Consultation Promo Card */}
            <div className="border border-gray-200 rounded-sm overflow-hidden bg-gray-50">
              <img
                src={content.sidebar.consultationPromo.image}
                alt={content.sidebar.consultationPromo.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-[#9e0b0f] mx-auto mb-1" />
                <h4 className="text-xs font-black uppercase text-gray-900 mb-1">
                  {content.sidebar.consultationPromo.title}
                </h4>
                <p className="text-[11px] text-gray-600 mb-3">
                  {content.sidebar.consultationPromo.subtitle}
                </p>
                <div className="inline-flex items-center gap-1.5 bg-[#9e0b0f] text-white text-xs font-extrabold px-4 py-1.5 rounded-sm">
                  <Phone className="w-3.5 h-3.5" />
                  {content.sidebar.consultationPromo.phone}
                </div>
              </div>
            </div>

            {/* 7. Section: Cần biết */}
            <div id="can-biet" className="bg-white border border-gray-200 rounded-sm p-4">
              <RedUnderlineHeading title={content.sidebar.canBietSection.title} />
              <div className="space-y-3.5">
                {content.sidebar.canBietSection.items.map((item) => (
                  <MiniHorizontalArticle key={item.id} item={item} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* 4. DEEP CRIMSON RED FOOTER (#9e0b0f + #7a070a) */}
      <footer id="footer" className="bg-[#9e0b0f] text-white mt-10">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white text-[#9e0b0f] font-black text-xl px-2 py-0.5 rounded-sm uppercase">
                {content.masthead.logoPrefix}
              </span>
              <span className="text-2xl font-black tracking-tight">
                {content.masthead.logoMain}
              </span>
            </div>
            <p className="text-xs text-red-100 leading-relaxed">
              {content.footer.aboutDescription}
            </p>
          </div>

          {/* Col 2: VỀ CHÚNG TÔI */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider mb-3 pb-2 border-b border-white/20">
              VỀ CHÚNG TÔI
            </h4>
            <div className="space-y-2 text-xs text-red-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{content.business.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Hotline: {content.business.phone.join(" - ")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Email: {content.business.email.join(" | ")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{content.business.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: THEO DÕI CHÚNG TÔI */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider mb-3 pb-2 border-b border-white/20">
              THEO DÕI CHÚNG TÔI
            </h4>
            <p className="text-xs text-red-100 mb-4">
              Kết nối với Ban Biên tập Pháp lý & Đoàn Luật sư Tranh tụng trên các nền tảng mạng xã hội:
            </p>
            <div className="flex items-center gap-2.5">
              {content.topWeatherBar.socials.map((soc) => (
                <a
                  key={soc}
                  href="#top"
                  className="w-9 h-9 rounded-sm bg-[#7a070a] hover:bg-white hover:text-[#9e0b0f] text-white font-extrabold text-xs flex items-center justify-center transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#7a070a] py-4 text-center text-[11px] text-red-200 px-4">
          {content.footer.copyright}
        </div>
      </footer>
    </div>
  );
}

function RedUnderlineHeading({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-gray-200 mb-4">
      <h2 className="inline-block text-base sm:text-lg font-extrabold uppercase tracking-wide text-[#9e0b0f] border-b-2 border-[#9e0b0f] -mb-[2px] pb-1.5">
        {title}
      </h2>
    </div>
  );
}

function CommentSquareBadge({ count }: { count: string }) {
  return (
    <span className="inline-flex items-center justify-center bg-[#222222] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-[2px] leading-tight">
      {count}
    </span>
  );
}

function MiniHorizontalArticle({ item }: { item: EditorialBriefItem }) {
  return (
    <article className="flex items-start gap-3 group cursor-pointer">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-14 object-cover rounded-sm shrink-0 group-hover:opacity-90"
      />
      <div className="min-w-0 flex-1">
        <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#9e0b0f] leading-snug line-clamp-2">
          {item.title}
        </h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] text-gray-400">{item.date}</span>
          <CommentSquareBadge count={item.commentsCount} />
        </div>
      </div>
    </article>
  );
}

function SplitEditorialBlock({ section }: { section: EditorialSectionSplit }) {
  return (
    <section id={section.id}>
      <RedUnderlineHeading title={section.title} />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Featured Article (6 cols) */}
        <article className="md:col-span-6 group cursor-pointer">
          <div className="overflow-hidden rounded-sm mb-3">
            <img
              src={section.featured.image}
              alt={section.featured.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-base font-extrabold text-gray-900 group-hover:text-[#9e0b0f] leading-snug mb-1.5">
            {section.featured.title}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] text-gray-400">
              {section.featured.date}
            </span>
            <CommentSquareBadge count={section.featured.commentsCount} />
          </div>
          {section.featured.excerpt && (
            <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
              {section.featured.excerpt}
            </p>
          )}
        </article>

        {/* Right 4 Horizontal Items (6 cols) */}
        <div className="md:col-span-6 space-y-3.5">
          {section.sideItems.map((item) => (
            <MiniHorizontalArticle key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Grid6EditorialBlock({ section }: { section: EditorialSectionGrid6 }) {
  return (
    <section id={section.id}>
      <RedUnderlineHeading title={section.title} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {section.items.map((item) => (
          <article key={item.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-sm mb-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-[#9e0b0f] leading-snug line-clamp-2 mb-1">
              {item.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400">{item.date}</span>
              <CommentSquareBadge count={item.commentsCount} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DemoTemplateRenderer;
