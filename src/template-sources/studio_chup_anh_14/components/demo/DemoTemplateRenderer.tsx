'use client';

import React, { useState } from 'react';
import {
  Search,
  CloudSun,
  Droplets,
  Wind,
  Cloud,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Camera,
  CheckCircle2,
  Globe,
  Share2,
  Rss,
  Play,
  Menu,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultStudioChupAnh14Data,
  type StudioChupAnh14Data,
} from '../../data/mockData';

interface Props {
  data?: Partial<StudioChupAnh14Data> & Record<string, unknown>;
}

function MonaColorfulLogo() {
  return (
    <div className="flex items-center gap-1 select-none">
      <span className="w-7 h-7 rounded-xs bg-[#e53935] text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
        M
      </span>
      <span className="w-7 h-7 rounded-xs bg-[#1e88e5] text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
        O
      </span>
      <span className="w-7 h-7 rounded-xs bg-[#43a047] text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
        N
      </span>
      <span className="w-7 h-7 rounded-xs bg-[#fdd835] text-[#222222] font-extrabold text-sm flex items-center justify-center shadow-xs">
        A
      </span>
      <span className="ml-1.5 w-7 h-7 rounded-xs bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center">
        <Camera className="w-4 h-4" />
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data = adaptClonedTemplateData(defaultStudioChupAnh14Data, incomingData);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans">
      {/* TOP WHITE STICKY HEADER WITH COLORFUL MONA LOGO */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-40 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <a href="#" className="flex items-center gap-2 shrink-0">
              <MonaColorfulLogo />
            </a>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#222222]">
              {data.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#e53935] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Search & Mobile Button */}
            <div className="flex items-center gap-2">
              {searchOpen && (
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Tìm bài viết nhiếp ảnh..."
                  className="border border-neutral-300 rounded-xs px-3 py-1 text-xs w-44 focus:outline-none focus:border-[#e53935]"
                />
              )}
              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                className="p-2 text-neutral-600 hover:text-[#e53935] cursor-pointer"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 text-neutral-700 cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-neutral-100 flex flex-wrap gap-3 text-xs font-bold uppercase">
              {data.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#e53935]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* TOP ILLUSTRATED AD BANNER STRIP (Matches SC014 Top Hotline Banner) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-5 pb-3">
        <div className="bg-gradient-to-r from-[#e8f5e9] via-[#e3f2fd] to-[#f1f8e9] border border-[#c8e6c9] rounded-xs px-6 py-3.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center shadow-2xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2e7d32]">
            {data.business.adBannerText}
          </span>
          <div className="text-xs sm:text-sm text-neutral-700 flex flex-wrap items-center justify-center gap-2">
            <span>
              Hotline:{' '}
              <strong className="text-[#1b5e20] text-sm sm:text-base font-extrabold">
                {data.business.phone[0]}
              </strong>
            </span>
            <span>–</span>
            <span>
              Email: <strong className="text-[#0d47a1]">{data.business.email[0]}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* ROW 1: 5-COLUMN TOP QUICK-READ STRIP */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.topQuickRow.map((item) => (
              <a
                key={item.id}
                href="#mona-chon"
                className="group flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-serif font-bold text-[#222222] group-hover:text-[#e53935] leading-snug line-clamp-3">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ROW 2: MAIN LEAD PHOTO (8 COLS) + HO CHI MINH CITY WEATHER & LIGHT WIDGET (4 COLS) */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 8-Col Lead Photo Story */}
            <div className="lg:col-span-8 relative min-h-[340px] sm:min-h-[410px] overflow-hidden bg-black group">
              <img
                src={data.leadStory.image}
                alt={data.leadStory.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="inline-block w-fit bg-[#e53935] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 mb-2.5">
                  {data.leadStory.category}
                </span>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold leading-snug">
                  {data.leadStory.title}
                </h1>
                <p className="mt-2 text-xs text-white/80">
                  <strong className="text-white">{data.leadStory.author}</strong> •{' '}
                  {data.leadStory.date}
                </p>
              </div>
            </div>

            {/* Right 4-Col Weather & Golden Hour Photography Forecast Widget */}
            <div className="lg:col-span-4 border border-neutral-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-base font-extrabold uppercase tracking-wider text-[#222222]">
                      {data.weatherWidget.city}
                    </h2>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {data.weatherWidget.condition}
                    </p>
                  </div>
                  <span className="w-3 h-3 rounded-full border-2 border-neutral-400" />
                </div>

                {/* Big Cloud Icon + 32°C */}
                <div className="my-6 flex items-center justify-around">
                  <CloudSun className="w-20 h-20 text-neutral-300 stroke-[1.2]" />
                  <div className="text-5xl font-light text-neutral-700">
                    {data.weatherWidget.tempC}
                    <span className="text-2xl align-top">°C</span>
                  </div>
                </div>

                {/* High / Low */}
                <div className="text-center space-y-1 text-xs text-neutral-500 mb-5">
                  <p>Cao nhất: {data.weatherWidget.highC}°</p>
                  <p>Thấp nhất: {data.weatherWidget.lowC}°</p>
                </div>

                {/* Humidity / Wind / Clouds Strip */}
                <div className="flex items-center justify-center gap-5 py-2.5 border-y border-neutral-100 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5" /> {data.weatherWidget.humidity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Wind className="w-3.5 h-3.5" /> {data.weatherWidget.wind}
                  </span>
                  <span className="flex items-center gap-1">
                    <Cloud className="w-3.5 h-3.5" /> {data.weatherWidget.cloudCover}
                  </span>
                </div>
              </div>

              {/* 5-Day Forecast Row */}
              <div className="pt-4">
                <div className="grid grid-cols-5 gap-2 text-center">
                  {data.weatherWidget.forecast.map((fc) => (
                    <div key={fc.day} className="text-xs">
                      <div className="text-neutral-400 font-medium">{fc.day}</div>
                      <div className="text-sm font-semibold text-neutral-600 mt-0.5">
                        {fc.temp}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-center text-amber-700 bg-amber-50 py-1.5 px-2 rounded-xs">
                  {data.weatherWidget.goldenHourNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 3: 3-COLUMN ASYMMETRIC MAGAZINE BODY (Mona chọn | Được yêu thích | Chủ đề Hot) */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN (6 COLS): MONA CHỌN (Red Header) */}
            <div id="mona-chon" className="lg:col-span-6 space-y-8">
              <div className="border-b border-neutral-200 pb-2">
                <h2 className="text-lg font-bold text-[#e53935]">
                  {data.monaChoiceColumn.title}
                </h2>
              </div>

              <div className="space-y-8">
                {data.monaChoiceColumn.posts
                  .filter(
                    (p) =>
                      !searchText.trim() ||
                      p.title.toLowerCase().includes(searchText.toLowerCase())
                  )
                  .map((post) => (
                    <article key={post.id} className="group">
                      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 mb-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute bottom-0 left-0 bg-[#222222] text-white text-[10px] px-2.5 py-1 font-medium">
                          {post.badge}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#222222] group-hover:text-[#e53935] leading-snug transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </article>
                  ))}
              </div>
            </div>

            {/* MIDDLE COLUMN (3 COLS): ĐƯỢC YÊU THÍCH (Green Header) */}
            <div id="duoc-yeu-thich" className="lg:col-span-3 space-y-5">
              <div className="border-b border-neutral-200 pb-2">
                <h2 className="text-lg font-bold text-[#2e7d32]">
                  {data.mostLikedColumn.title}
                </h2>
              </div>

              <div className="space-y-4">
                {data.mostLikedColumn.posts.map((item) => (
                  <article
                    key={item.id}
                    className="group flex gap-3 items-start pb-3.5 border-b border-neutral-100 last:border-none"
                  >
                    <div className="w-20 h-16 overflow-hidden bg-neutral-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-serif font-bold text-[#222222] group-hover:text-[#2e7d32] leading-snug line-clamp-3">
                        {item.title}
                      </h3>
                      <div className="mt-1.5 flex items-center justify-between text-[10px] text-neutral-400">
                        <span>
                          <strong className="text-neutral-600">{item.author}</strong> - {item.date}
                        </span>
                        <span className="bg-[#222222] text-white px-1.5 py-0.2 rounded-2xs text-[9px] font-bold">
                          {item.comments}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN (3 COLS): CHỦ ĐỀ HOT (Gold Header) */}
            <div id="chu-de-hot" className="lg:col-span-3 space-y-6">
              <div className="border-b border-neutral-200 pb-2">
                <h2 className="text-lg font-bold text-[#d97706]">
                  {data.hotTopicsColumn.title}
                </h2>
              </div>

              <div className="space-y-6">
                {data.hotTopicsColumn.posts.map((topic) => (
                  <article key={topic.id} className="group">
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 mb-2.5">
                      <img
                        src={topic.image}
                        alt={topic.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span
                        className={`absolute bottom-0 left-0 text-white text-[10px] px-2 py-0.5 font-medium ${
                          topic.isPromo ? 'bg-[#e53935]' : 'bg-[#222222]'
                        }`}
                      >
                        {topic.badge}
                      </span>
                    </div>
                    {topic.promoSub && (
                      <p className="text-[10px] font-extrabold uppercase text-[#e53935] mb-0.5">
                        {topic.promoSub}
                      </p>
                    )}
                    <h3 className="text-xs sm:text-sm font-serif font-bold text-[#222222] group-hover:text-[#d97706] leading-snug transition-colors">
                      {topic.title}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK 2-TIER FOOTER (Matches SC014 Footer with Giới thiệu, Chuyên mục, Bản đồ & Colorful Logo) */}
      <footer className="bg-[#1f1f1f] text-white/80 pt-12 pb-8 mt-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upper 3-Col Tier */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Col 1: Giới thiệu */}
            <div className="md:col-span-4">
              <h3 className="text-sm font-bold text-white mb-4">Giới thiệu</h3>
              <div className="space-y-3 text-xs text-white/70 leading-relaxed">
                {data.footer.aboutParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Col 2: Chuyên mục + Newsletter */}
            <div className="md:col-span-4">
              <h3 className="text-sm font-bold text-white mb-4">Chuyên mục</h3>
              <div className="grid grid-cols-2 gap-4 text-xs text-white/75 mb-6">
                <ul className="space-y-2">
                  {data.footer.categoriesLeft.map((c) => (
                    <li key={c}>
                      <a href="#mona-chon" className="hover:text-white">
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {data.footer.categoriesRight.map((c) => (
                    <li key={c}>
                      <a href="#chu-de-hot" className="hover:text-white">
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!emailInput.trim()) return;
                  setSubscribed(true);
                  setEmailInput('');
                }}
                className="space-y-2"
              >
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder={data.footer.newsletterPlaceholder}
                  className="w-full bg-white text-[#222222] px-3 py-2 text-xs focus:outline-none"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#1e88e5] hover:bg-[#1565c0] text-white text-xs font-semibold px-5 py-1.5 rounded-2xs cursor-pointer transition-colors"
                  >
                    {data.footer.newsletterButton}
                  </button>
                </div>
              </form>
              {subscribed && (
                <p className="mt-2 text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Đã đăng ký nhận tạp chí PhotoForum hàng tuần!</span>
                </p>
              )}
            </div>

            {/* Col 3: Bản đồ */}
            <div className="md:col-span-4">
              <h3 className="text-sm font-bold text-white mb-4">Bản đồ</h3>
              <div className="bg-[#e8e5de] text-[#222222] p-4 rounded-xs relative overflow-hidden min-h-[180px] flex flex-col justify-between">
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <div className="relative z-10 bg-white p-3 rounded-xs shadow-xs text-xs max-w-[240px]">
                  <p className="font-bold text-[#222222]">Công ty TNHH - MONA MEDIA</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">{data.business.address}</p>
                  <span className="inline-block mt-1 text-[10px] text-[#1e88e5] font-medium">
                    Xem bản đồ lớn hơn →
                  </span>
                </div>
                <div className="relative z-10 flex items-center gap-1.5 text-xs font-bold text-[#e53935] bg-white/90 w-fit px-2.5 py-1 rounded-full shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Phường 15, Quận 11</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Tier: Colorful Logo + VỀ CHÚNG TÔI + THEO DÕI CHÚNG TÔI */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-white/10">
            <div className="md:col-span-3">
              <MonaColorfulLogo />
            </div>
            <div className="md:col-span-6 text-xs text-white/75 space-y-1">
              <h4 className="font-bold uppercase tracking-wider text-white mb-2">
                VỀ CHÚNG TÔI
              </h4>
              <p>Địa chỉ: {data.business.address}</p>
              <p>Điện thoại: {data.business.phone[0]}</p>
              <p>Email: {data.business.email[0]}</p>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                THEO DÕI CHÚNG TÔI
              </h4>
              <div className="flex items-center gap-2">
                {[Globe, Rss, Share2, Play].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#mona-chon"
                    className="w-8 h-8 bg-white/10 hover:bg-[#e53935] text-white flex items-center justify-center rounded-2xs transition-colors"
                    aria-label="Mạng xã hội"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 text-[11px] text-white/45">{data.business.copyright}</div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
