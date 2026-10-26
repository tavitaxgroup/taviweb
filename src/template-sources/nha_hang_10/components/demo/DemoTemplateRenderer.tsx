'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowDown,
  Play,
  Send,
  Phone,
  Quote,
  ArrowUp,
  Check,
  X,
  Share2,
  Globe,
  MessageCircle,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultData,
  NhaHang10Data,
  TetFeastFeaturedItem,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, any>;
  customData?: Record<string, any>;
  templateKey?: string;
}

export function DemoTemplateRenderer({
  data: incomingData,
  customData,
}: DemoTemplateRendererProps) {
  const data: NhaHang10Data = useMemo(
    () => adaptClonedTemplateData(defaultData, incomingData || customData),
    [incomingData, customData]
  );

  const [activeNavIdx, setActiveNavIdx] = useState(0);
  const [emailInput, setEmailInput] = useState('');
  const [agreedPrivacy, setAgreedPrivacy] = useState(true);
  const [selectedItem, setSelectedItem] = useState<TetFeastFeaturedItem | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeReviewDot, setActiveReviewDot] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2600);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#F04923] text-white px-5 py-3 rounded-full shadow-xl text-xs font-bold">
          <Check className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. FESTIVE RED-AMBER HERO WITH FLOATING 4-PHOTO COLLAGE */}
      <section className="relative min-h-[620px] lg:min-h-[680px] overflow-hidden bg-gradient-to-br from-[#8E1811] via-[#B83717] to-[#911C12] text-white flex flex-col justify-between">
        {/* Ambient blurred golden bokeh */}
        <div className="absolute top-12 left-1/3 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-red-600/30 blur-3xl pointer-events-none" />

        {/* Top Transparent Navbar */}
        <header className="relative z-20 max-w-[1240px] w-full mx-auto px-6 pt-6 flex items-center justify-between">
          <a
            href="#top"
            className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white"
          >
            MONA<span className="text-[10px] font-normal align-bottom ml-0.5 opacity-80">TET</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-white/90">
            {data.navLinks.map((item, idx) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setActiveNavIdx(idx);
                  if (idx === 1) scrollToSection('categories-section');
                  if (idx === 2) scrollToSection('featured-section');
                  if (idx === 3) scrollToSection('video-section');
                  if (idx === 4) scrollToSection('hot-section');
                  if (idx === 5) scrollToSection('footer-section');
                }}
                className={`pb-1 transition-all cursor-pointer ${
                  activeNavIdx === idx
                    ? 'border-b-2 border-white font-bold text-white'
                    : 'hover:text-amber-200'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-white/85">
            <button
              type="button"
              onClick={() => triggerToast('Kết nối fanpage TetFeast!')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
              aria-label="Chia sẻ"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => triggerToast('Kết nối cộng đồng ẩm thực TetFeast!')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
              aria-label="Website"
            >
              <Globe className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => triggerToast('Tư vấn đặt bàn trực tuyến!')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
              aria-label="Tin nhắn"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Center Hero Layout with Left & Right Floating Collage Images */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left 2 Staggered Vertical Images (4 cols) */}
          <div className="hidden lg:flex lg:col-span-4 items-center justify-center relative h-[380px]">
            <div className="w-44 h-60 rounded shadow-2xl overflow-hidden absolute left-2 top-2 border border-white/15">
              <img
                src={data.heroCollage.leftTop}
                alt="Mâm cỗ Tết"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-60 rounded shadow-2xl overflow-hidden absolute left-32 bottom-2 border border-white/15 z-10">
              <img
                src={data.heroCollage.leftBottom}
                alt="Ẩm thực mùa xuân"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Hero Title & Subtitle (4 cols) */}
          <div className="lg:col-span-4 text-center space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white drop-shadow-md">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xs mx-auto">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('featured-section')}
                className="px-7 py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#d97706] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                {data.hero.primaryCta}
              </button>
            </div>
          </div>

          {/* Right 2 Staggered Vertical Images (4 cols) */}
          <div className="hidden lg:flex lg:col-span-4 items-center justify-center relative h-[380px]">
            <div className="w-44 h-60 rounded shadow-2xl overflow-hidden absolute right-2 top-2 border border-white/15 z-10">
              <img
                src={data.heroCollage.rightTop}
                alt="Trà Tết đoàn viên"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-44 h-60 rounded shadow-2xl overflow-hidden absolute right-32 bottom-2 border border-white/15">
              <img
                src={data.heroCollage.rightBottom}
                alt="Bàn tiệc truyền thống"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Downward Arrow */}
        <div className="relative z-10 pb-6 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('categories-section')}
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Cuộn xuống"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* 2. 4-COLUMN VERTICAL CATEGORY CARDS */}
      <section id="categories-section" className="bg-[#F7F7F7] py-14 px-4">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {data.categoryCards.map((card) => (
            <div
              key={card.id}
              onClick={() => scrollToSection('featured-section')}
              className="group relative aspect-[3/4] rounded overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 inset-x-4 text-white">
                <h3 className="text-sm sm:text-base font-extrabold leading-snug drop-shadow">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SẢN PHẨM & THỰC ĐƠN NỔI BẬT (3x2 Grid + Amber Pill Button) */}
      <section id="featured-section" className="py-16 px-4 bg-white">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F04923]">
              {data.featuredSection.eyebrow}
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              {data.featuredSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.featuredSection.items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded overflow-hidden bg-slate-100 mb-3 shadow-xs">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/65 text-white text-[11px] font-bold">
                    {item.price}
                  </div>
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#F04923] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{item.servings}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => triggerToast('Đang mở toàn bộ thực đơn tiệc Tết & quà xuân!')}
              className="px-8 py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#d97706] text-white text-xs font-extrabold shadow-md transition-colors cursor-pointer"
            >
              {data.featuredSection.ctaText}
            </button>
          </div>
        </div>
      </section>

      {/* 4. VIDEO SHOWCASE + NEWSLETTER SUBSCRIPTION */}
      <section id="video-section" className="py-16 px-4 bg-[#F7F7F7]">
        <div className="max-w-[980px] mx-auto text-center">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F04923]">
            {data.videoSection.eyebrow}
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
            {data.videoSection.title}
          </h2>
          <p className="mt-2 text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            {data.videoSection.description}
          </p>

          {/* Wide Video Banner */}
          <div
            onClick={() => setVideoModalOpen(true)}
            className="mt-8 relative aspect-[16/8] rounded overflow-hidden shadow-lg cursor-pointer group bg-red-950"
          >
            <img
              src={data.videoSection.thumbnail}
              alt={data.videoSection.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-slate-900 ml-0.5" />
              </div>
            </div>
          </div>

          {/* Email Subscription Box below Video */}
          <div className="mt-10 max-w-md mx-auto space-y-3">
            <div className="w-7 h-7 rounded-full bg-[#F04923] text-white flex items-center justify-center mx-auto shadow">
              <Send className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
              {data.videoSection.newsletterHeading}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!emailInput.trim()) return;
                triggerToast(`Đã đăng ký nhận ưu đãi tiệc Tết cho ${emailInput}!`);
                setEmailInput('');
              }}
              className="flex items-center bg-white rounded-full p-1 shadow-xs border border-slate-200"
            >
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder={data.videoSection.placeholder}
                className="flex-1 pl-4 pr-2 py-2 text-xs text-slate-800 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-extrabold text-slate-800 hover:text-[#F04923] transition-colors cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span>{data.videoSection.buttonText}</span>
              </button>
            </form>

            <label className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedPrivacy}
                onChange={(e) => setAgreedPrivacy(e.target.checked)}
                className="rounded border-slate-300"
              />
              <span className="underline">{data.videoSection.privacyText}</span>
            </label>
          </div>
        </div>
      </section>

      {/* 5. ASYMMETRIC FEATURE SPLIT ("MONA HOT / Đèn trang trí & Không gian tiệc Tết") */}
      <section id="hot-section" className="py-16 px-4 bg-white">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Text Column (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F04923]">
              {data.hotHighlight.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {data.hotHighlight.title}
            </h2>
            <p className="text-xs font-semibold text-slate-700">
              {data.hotHighlight.subtitle}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              {data.hotHighlight.description}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('featured-section')}
                className="px-7 py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#d97706] text-white text-xs font-extrabold shadow-sm transition-colors cursor-pointer"
              >
                {data.hotHighlight.ctaText}
              </button>

              <a
                href={`tel:${data.hotHighlight.hotline.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-800 hover:text-[#F04923]"
              >
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span>{data.hotHighlight.hotline}</span>
              </a>
            </div>
          </div>

          {/* Right Overlapping Staggered Photos (7 cols) */}
          <div className="md:col-span-7 relative min-h-[360px] sm:min-h-[420px] flex items-center justify-end">
            {/* Back right tall image */}
            <div className="w-3/5 sm:w-72 h-72 sm:h-80 rounded overflow-hidden shadow-lg">
              <img
                src={data.hotHighlight.secondaryImage}
                alt="Không gian trà xuân"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Front overlapping bottom-left image */}
            <div className="w-3/5 sm:w-64 h-64 sm:h-72 rounded overflow-hidden shadow-2xl border-4 border-white absolute left-0 sm:left-8 bottom-0">
              <img
                src={data.hotHighlight.primaryImage}
                alt="Không gian đèn lồng đỏ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ĐÁNH GIÁ CỦA KHÁCH HÀNG (3 Speech-Bubble Cards, Center Orange-Red) */}
      <section className="py-16 px-4 bg-[#F7F7F7]">
        <div className="max-w-[980px] mx-auto text-center">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F04923]">
            {data.reviewsSection.eyebrow}
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900 mb-10">
            {data.reviewsSection.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.reviewsSection.items.map((rev) => {
              const isHighlighted = rev.highlighted;
              return (
                <div key={rev.id} className="flex flex-col items-center">
                  {/* Speech Bubble Box */}
                  <div
                    className={`relative p-7 rounded shadow-xs w-full min-h-[210px] flex flex-col items-center justify-center text-center ${
                      isHighlighted
                        ? 'bg-[#F04923] text-white shadow-lg'
                        : 'bg-white text-slate-700'
                    }`}
                  >
                    <Quote
                      className={`w-5 h-5 mb-3 ${
                        isHighlighted ? 'text-white' : 'text-[#F04923]'
                      }`}
                    />
                    <p className="text-xs leading-relaxed">{rev.quote}</p>

                    {/* Speech Bubble Pointer Triangle */}
                    <div
                      className={`w-4 h-4 rotate-45 absolute -bottom-2 left-1/2 -translate-x-1/2 ${
                        isHighlighted ? 'bg-[#F04923]' : 'bg-white'
                      }`}
                    />
                  </div>

                  {/* Customer Avatar & Info */}
                  <div className="mt-6 flex flex-col items-center">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                    />
                    <h4 className="mt-2 text-xs font-extrabold text-slate-900">
                      {rev.author}
                    </h4>
                    <p className="text-[10px] text-slate-400">{rev.role}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => setActiveReviewDot(dot)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  activeReviewDot === dot
                    ? 'bg-[#F59E0B] scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Trang đánh giá ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FULL-BLEED 4-COLUMN BOTTOM GALLERY STRIP */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.categoryCards.map((card) => (
          <div
            key={`bottom-${card.id}`}
            onClick={() => scrollToSection('featured-section')}
            className="group relative aspect-square overflow-hidden cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-5 inset-x-5 text-white">
              <h3 className="text-base sm:text-lg font-extrabold drop-shadow">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </section>

      {/* 8. CENTERED MINIMAL DARK FOOTER (#181A1F) */}
      <footer id="footer-section" className="relative bg-[#181A1F] text-white pt-12 pb-6 px-4 text-center">
        <div className="max-w-xl mx-auto space-y-5">
          <div>
            <a
              href="#top"
              className="inline-block text-xl font-black uppercase tracking-wider border-b-2 border-white pb-1"
            >
              MONA<span className="text-[10px] font-normal ml-0.5">TET</span>
            </a>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-300">
            {['Trang Chủ', 'Về Chúng Tôi', 'Khuyến Mãi', 'Cửa Hàng', 'Liên Hệ'].map(
              (lnk, idx) => (
                <button
                  key={lnk}
                  type="button"
                  onClick={() => scrollToSection('top')}
                  className={`hover:text-white transition-colors cursor-pointer ${
                    idx === 0 ? 'underline text-white font-semibold' : ''
                  }`}
                >
                  {lnk}
                </button>
              )
            )}
          </nav>

          <div className="flex items-center justify-center gap-3 pt-1">
            {[Share2, Globe, MessageCircle].map((Icon, i) => (
              <button
                key={i}
                type="button"
                onClick={() => triggerToast('Cảm ơn bạn đã kết nối cùng TetFeast!')}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#F04923] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 text-[11px] text-slate-400">
          © Lập Trình Và Thiết Kế Bởi <strong>{data.business.name}</strong>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection('top')}
          className="fixed bottom-5 right-5 w-8 h-8 rounded bg-slate-800/90 hover:bg-[#F04923] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer z-30"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </footer>

      {/* Dish / Set Detail Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            <div className="relative h-56">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/55 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <span className="text-[11px] font-bold uppercase text-[#F04923]">
                {selectedItem.category} • {selectedItem.servings}
              </span>
              <h3 className="text-lg font-black text-slate-900">{selectedItem.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedItem.description}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-lg font-black text-[#F04923]">
                  {selectedItem.price}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    triggerToast(`Đã gửi yêu cầu đặt "${selectedItem.title}"!`);
                    setSelectedItem(null);
                  }}
                  className="px-5 py-2 rounded-full bg-[#F59E0B] hover:bg-[#d97706] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  Đặt Tiệc Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl"
          >
            <div className="p-3 bg-[#8E1811] text-white flex items-center justify-between text-xs font-bold">
              <span>{data.videoSection.title}</span>
              <button type="button" onClick={() => setVideoModalOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 text-center space-y-3">
              <img
                src={data.videoSection.thumbnail}
                alt={data.videoSection.title}
                className="w-full h-56 object-cover rounded"
              />
              <p className="text-xs text-slate-600">{data.videoSection.description}</p>
              <button
                type="button"
                onClick={() => {
                  setVideoModalOpen(false);
                  scrollToSection('featured-section');
                }}
                className="px-6 py-2 rounded-full bg-[#F59E0B] text-white text-xs font-bold uppercase"
              >
                Khám Phá Thực Đơn Tiệc
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
