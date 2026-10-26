"use client";

import React, { useState } from "react";
import {
  Phone,
  ChevronDown,
  Trophy,
  Flag,
  Compass,
  Play,
  Calendar,
  CheckCircle2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym7DefaultData,
  type PhongGym7Data,
  type PhongGym7ClubProduct
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongGym7Data = adaptClonedTemplateData(
    phongGym7DefaultData,
    incomingData
  );

  const [selectedHistoryYear, setSelectedHistoryYear] = useState<string>(
    data.historyItems[0]?.year || "1877"
  );
  const [selectedClub, setSelectedClub] = useState<PhongGym7ClubProduct | null>(null);
  const [bookingSent, setBookingSent] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const activeHistory =
    data.historyItems.find((h) => h.year === selectedHistoryYear) ||
    data.historyItems[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSent(true);
    setTimeout(() => setBookingSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#d9b543] selection:text-slate-950">
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-stone-200/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Crest */}
          <a href="#trang-chu" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full border-2 border-[#d9b543] flex items-center justify-center text-[#d9b543] font-serif font-bold text-sm">
              G
            </div>
            <div>
              <div className="text-sm font-serif font-bold tracking-wider text-[#c59b27] uppercase leading-none">
                {data.business.name}
              </div>
              <div className="text-[8px] tracking-[0.25em] text-slate-400 uppercase mt-0.5">
                Club &amp; Academy
              </div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-700">
            <a
              href="#trang-chu"
              className="text-slate-900 border-b-2 border-[#d9b543] pb-1"
            >
              TRANG CHỦ
            </a>
            <a href="#lich-su" className="hover:text-[#c59b27]">
              GOLF
            </a>
            <a href="#thanh-vien" className="hover:text-[#c59b27]">
              THÀNH VIÊN
            </a>
            <a href="#co-so-vat-chat" className="hover:text-[#c59b27]">
              LỄ CƯỚI
            </a>
            <a href="#gay-golf" className="hover:text-[#c59b27]">
              SỰ KIỆN
            </a>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1 hover:text-[#c59b27]"
            >
              <span>GIỚI THIỆU</span>
              <ChevronDown className="w-3 h-3" />
            </a>
          </nav>

          {/* Right Phone & Gold CTA */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${data.business.phone[0]}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>{data.business.phone[0]}</span>
            </a>
            <a
              href="#dat-lich"
              className="px-4 py-2 bg-[#d9b543] hover:bg-[#c5a030] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs shadow-xs transition-colors"
            >
              {data.hero.ctaText || "ĐẶT LỊCH HẸN"}
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO BANNER + 4 OVERLAPPING CARDS */}
      <section id="trang-chu" className="relative">
        <div className="relative h-[540px] md:h-[640px] w-full overflow-hidden bg-stone-900">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/35 via-stone-900/25 to-stone-950/85" />

          {/* Centered Serif Italic Title + Gold Laurel */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 -mt-12">
            <div className="relative px-10 py-6">
              <div className="text-[#e3c352] text-xs uppercase tracking-[0.3em] mb-2">
                ✦ ─── ✦
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif italic font-bold text-white drop-shadow-lg">
                {data.hero.title}
              </h1>
              <p className="mt-2 text-sm sm:text-base font-bold text-white tracking-wider">
                {data.hero.subtitle}
              </p>
            </div>
          </div>

          {/* 4 Labels Along Bottom of Hero */}
          <div className="absolute bottom-24 inset-x-0 z-20 hidden md:block">
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-4 gap-6 text-center">
              {data.heroCards.map((c) => (
                <div key={c.id} className="space-y-1">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-white">
                    {c.title}
                  </div>
                  <div className="text-[#e3c352] text-xs">⛳</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Overlapping Square Photo Cards */}
        <div className="max-w-5xl mx-auto px-4 -mt-20 relative z-30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {data.heroCards.map((card) => (
              <div
                key={card.id}
                className="bg-white p-1.5 shadow-xl border border-stone-100 group overflow-hidden"
              >
                <div className="h-44 sm:h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:hidden text-center pt-2 pb-1 text-[10px] font-bold uppercase text-slate-800">
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHÀO MỪNG ĐẾN VỚI CÂU LẠC BỘ GOLF TRIOMPHER */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <div className="text-[#e3c352] text-sm tracking-widest">─── 🌿 ───</div>
          <h2 className="text-2xl sm:text-3xl font-serif italic font-bold text-slate-900 leading-snug max-w-md mx-auto">
            {data.business.aboutTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {data.business.aboutText[0]}
          </p>
          <div className="pt-2">
            <a
              href="#lich-su"
              className="inline-block px-7 py-2.5 bg-[#6f9385] hover:bg-[#5b7c6f] text-white text-[10px] font-bold uppercase tracking-widest rounded-xs transition-colors"
            >
              XEM THÊM
            </a>
          </div>
        </div>
      </section>

      {/* 4. LỊCH SỬ CÂU LẠC BỘ (WARM PARCHMENT WITH TIMELINE TABS) */}
      <section
        id="lich-su"
        className="relative py-16 md:py-24 bg-[#ede7d9] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Vintage Golfer Image */}
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-xs shadow-md">
              <img
                src={data.historyBgImage}
                alt="Lịch sử Câu lạc bộ"
                className="w-full h-[320px] object-cover sepia-[0.25]"
              />
            </div>
          </div>

          {/* Right Interactive Year Tabs */}
          <div className="md:col-span-6 space-y-4">
            <div className="text-[#d9b543] text-xs uppercase tracking-widest">
              ✦ Truyền Thống Trăm Năm
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-900">
              Lịch Sử Câu Lạc Bộ
            </h2>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {data.historyItems.map((item) => {
                const active = item.year === activeHistory?.year;
                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setSelectedHistoryYear(item.year)}
                    className={`px-3.5 py-1.5 text-xs font-bold transition-colors ${
                      active
                        ? "bg-[#c89d28] text-white shadow-xs"
                        : "bg-[#dfd5be] text-slate-700 hover:bg-[#d2c5a8]"
                    }`}
                  >
                    {item.year}
                  </button>
                );
              })}
            </div>

            {activeHistory && (
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                {activeHistory.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 5. ĐƯA TRÒ CHƠI LÊN CẤP ĐỘ CAO HƠN + 4 GOLD METRICS PANEL */}
      <section id="thanh-vien" className="bg-white pt-14 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-4 lg:pl-8">
              <h2 className="text-2xl sm:text-3xl font-serif italic font-bold text-slate-900 leading-snug">
                {data.elevateTitle}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {data.elevateDesc}
              </p>
              <div className="pt-2">
                <a
                  href="#dat-lich"
                  className="inline-block px-6 py-2.5 bg-[#6f9385] hover:bg-[#5b7c6f] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  TRỞ THÀNH THÀNH VIÊN
                </a>
              </div>
            </div>

            {/* Right Sunny Golfers Image */}
            <div className="lg:col-span-7">
              <img
                src={data.elevateImage}
                alt={data.elevateTitle}
                className="w-full h-[360px] md:h-[420px] object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Overlapping Warm Gold 2x2 Metrics Block */}
          <div className="lg:w-8/12 bg-[#e6cb65] p-8 sm:p-12 -mt-6 relative z-20 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {data.goldMetrics.map((m) => (
                <div key={m.id} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/85 flex items-center justify-center text-[#c59b27] shrink-0 shadow-xs">
                    {m.icon === "ball" && <Compass className="w-5 h-5" />}
                    {m.icon === "trophy" && <Trophy className="w-5 h-5" />}
                    {m.icon === "course" && <Flag className="w-5 h-5" />}
                    {m.icon === "flags" && <Calendar className="w-5 h-5" />}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-serif italic font-bold text-slate-900">
                      {m.title}
                    </h3>
                    <p className="text-[11px] text-slate-700 leading-relaxed">
                      {m.description}
                    </p>
                    <div>
                      <a
                        href="#dat-lich"
                        className="text-[10px] font-extrabold uppercase text-white underline tracking-wider"
                      >
                        XEM THÊM
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TẢI XUỐNG HƯỚNG DẪN */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <div
              onClick={() => setVideoModalOpen(true)}
              className="relative group cursor-pointer overflow-hidden shadow-lg h-64"
            >
              <img
                src={data.guideVideoThumb}
                alt={data.guideTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-black/40 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif italic font-bold text-slate-900">
              {data.guideTitle}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">{data.guideDesc}</p>
            <div className="pt-1">
              <a
                href="#dat-lich"
                className="inline-block px-6 py-2.5 bg-[#6f9385] hover:bg-[#5b7c6f] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                HƯỚNG DẪN TẢI VỀ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CƠ SỞ VẬT CHẤT */}
      <section id="co-so-vat-chat" className="py-16 bg-[#f6f3eb]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-[#d9b543] text-xs">─── ✦ ───</div>
            <h2 className="text-2xl sm:text-3xl font-serif italic font-bold text-slate-900 mt-1">
              Cơ Sở Vật Chất
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.facilities.map((fac) => (
              <div
                key={fac.id}
                className="bg-white shadow-xs border border-stone-200/60 overflow-hidden flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center space-y-2 flex-1">
                  <h3 className="text-sm font-serif italic font-bold text-slate-900">
                    {fac.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#dat-lich"
              className="inline-block px-7 py-2.5 bg-[#6f9385] hover:bg-[#5b7c6f] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors"
            >
              XEM THÊM
            </a>
          </div>
        </div>
      </section>

      {/* 8. THAM GIA MIỄN PHÍ LƯỢT CHƠI + KHUNG ĐẶT LỊCH NỀN VÀNG */}
      <section id="dat-lich" className="bg-white">
        <div
          className="relative py-20 md:py-28 bg-stone-900 bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${data.freePlayBgImage})` }}
        >
          <div className="absolute inset-0 bg-stone-950/55" />
          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <div className="max-w-lg space-y-4">
              <h2 className="text-2xl sm:text-4xl font-serif italic font-bold leading-snug">
                {data.freePlayTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-200">
                {data.freePlaySubtitle}
              </p>
              <div className="pt-2">
                <a
                  href="#gay-golf"
                  className="inline-block px-6 py-2 bg-[#6f9385] hover:bg-[#5b7c6f] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs"
                >
                  XEM THÊM
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping Right-Aligned Gold Booking Panel */}
        <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20 flex justify-end">
          <div className="w-full lg:w-8/12 bg-[#e6cb65] p-8 sm:p-12 shadow-xl">
            <h3 className="text-base font-serif italic font-bold text-slate-900 mb-5">
              Đặt Lịch
            </h3>

            <form onSubmit={handleBooking} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-700 mb-1">
                    Họ Và Tên
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white px-3 py-2 text-slate-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-700 mb-1">
                    Số Điện Thoại
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-white px-3 py-2 text-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-4">
                  <label className="block text-[10px] font-semibold text-slate-700 mb-1">
                    Ngày Hẹn
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-white px-3 py-2 text-slate-800 focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-[10px] font-semibold text-slate-700 mb-1">
                    Số Người
                  </label>
                  <input
                    type="number"
                    min={1}
                    defaultValue={2}
                    className="w-full bg-white px-3 py-2 text-slate-800 focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-5">
                  <label className="block text-[10px] font-semibold text-slate-700 mb-1">
                    Email Của Bạn
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white px-3 py-2 text-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="inline-flex items-center gap-2 text-[11px] text-slate-700">
                  <input type="checkbox" defaultChecked className="accent-[#6f9385]" />
                  <span>Tôi đồng ý dữ liệu của tôi được thu thập và lưu trữ</span>
                </label>

                <button
                  type="submit"
                  className="px-8 py-2 bg-[#6f9385] hover:bg-[#5b7c6f] text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
                >
                  GỬI
                </button>
              </div>

              {bookingSent && (
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Đã đặt lịch chơi golf &amp; huấn luyện thành công!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 9. GẬY ĐIỀU KHIỂN TỐT NHẤT (4 PRO SHOP DRIVERS) */}
      <section id="gay-golf" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-[#d9b543] text-xs">─── ✦ ───</div>
            <h2 className="text-2xl sm:text-3xl font-serif italic font-bold text-slate-900 mt-1">
              Gậy Điều Khiển Tốt Nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {data.drivers.map((club) => (
              <div key={club.id} className="group flex flex-col items-center">
                <div className="w-full h-52 bg-[#f3f3f3] flex items-center justify-center p-4 mb-3 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-36 h-36 object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[10px] font-extrabold uppercase text-slate-800 tracking-wide">
                  {club.name}
                </h3>
                <div className="text-sm font-serif font-bold text-[#c89d28] my-1.5">
                  {club.price}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedClub(club)}
                  className="px-4 py-1.5 bg-[#6f9385] hover:bg-[#5b7c6f] text-white text-[9px] font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  MUA HÀNG
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. MAP + ADDRESS & DARK CHARCOAL FOOTER */}
      <section id="lien-he" className="border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-6 h-60 overflow-hidden relative">
            <img
              src={data.mapImage}
              alt="Bản đồ sân Golf"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-white p-2.5 shadow text-[10px]">
              <div className="font-bold text-slate-900">{data.business.name}</div>
              <div className="text-slate-500">{data.business.address}</div>
            </div>
          </div>

          <div className="md:col-span-6 p-8 sm:p-12 space-y-4 text-xs">
            <div>
              <div className="text-[10px] font-extrabold uppercase text-slate-900">
                ĐỊA CHỈ
              </div>
              <div className="text-slate-500 mt-0.5">{data.business.address}</div>
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase text-slate-900">
                ĐIỆN THOẠI
              </div>
              <div className="text-slate-500 mt-0.5">{data.business.phone[0]}</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2e2e2e] text-stone-300 pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-700 text-xs">
            <div className="md:col-span-2 space-y-2">
              <h4 className="font-serif font-bold text-white mb-3">Golf</h4>
              <div>Khóa Học</div>
              <div>Phiếu Ghi Điểm</div>
              <div>Thẻ Hội Viên</div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <h4 className="font-serif font-bold text-white mb-3">Liên Kết</h4>
              <div>Thành Viên</div>
              <div>Lễ Cưới</div>
              <div>Sự Kiện</div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <h4 className="font-serif font-bold text-white mb-3">Sự Kiện</h4>
              <div>Sự Kiện Nhóm</div>
              <div>Giải Nghiệp Dư</div>
              <div>Lễ Cưới</div>
            </div>

            <div className="md:col-span-6 space-y-3">
              <h4 className="font-serif font-bold text-white">
                Đăng Ký Để Nhận Thông Báo Từ Chúng Tôi
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSent(true);
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập Email Của Bạn"
                  className="flex-1 bg-white text-slate-800 px-3.5 py-2 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#555555] hover:bg-[#d9b543] hover:text-slate-950 text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {newsletterSent && (
                <div className="text-[11px] text-[#e3c352]">
                  Đã đăng ký nhận bản tin Câu lạc bộ thành công!
                </div>
              )}
            </div>
          </div>

          <div className="pt-5 text-center text-[10px] text-stone-400">
            © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
          </div>
        </div>
      </footer>

      {/* CLUB PURCHASE MODAL */}
      {selectedClub && (
        <div
          onClick={() => setSelectedClub(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white p-6 relative shadow-2xl border-t-4 border-[#d9b543]"
          >
            <button
              type="button"
              onClick={() => setSelectedClub(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-3">
              <img
                src={selectedClub.image}
                alt={selectedClub.name}
                className="w-36 h-36 object-cover rounded-full mx-auto"
              />
              <h4 className="text-sm font-bold text-slate-900">
                {selectedClub.name}
              </h4>
              <div className="text-base font-serif font-bold text-[#c89d28]">
                {selectedClub.price}
              </div>
              <button
                type="button"
                onClick={() => setSelectedClub(null)}
                className="w-full py-2.5 bg-[#6f9385] text-white text-xs font-bold uppercase"
              >
                XÁC NHẬN ĐẶT MUA GẬY GOLF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div className="max-w-2xl w-full bg-stone-900 p-6 text-white text-center space-y-4">
            <h4 className="text-lg font-serif italic">
              Video Giới Thiệu Sân Golf 18 Hố &amp; Học Viện {data.business.name}
            </h4>
            <img
              src={data.guideVideoThumb}
              alt="Video"
              className="w-full h-72 object-cover"
            />
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="px-6 py-2 bg-[#d9b543] text-slate-950 text-xs font-bold uppercase"
            >
              ĐÓNG VIDEO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
