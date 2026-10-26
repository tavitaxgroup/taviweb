"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung27DefaultData,
  type XayDung27TemplateData,
  type XayDung27SuiteCard
} from "@/template-sources/xay_dung_27/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung27TemplateData = adaptClonedTemplateData(
    xayDung27DefaultData,
    incomingData
  );

  const [selectedSuite, setSelectedSuite] =
    useState<XayDung27SuiteCard | null>(null);
  const [searchSubmitted, setSearchSubmitted] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const brandName = data.business.name || "Mona Hotel";

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#2596d1] selection:text-white">
      {/* 1. TOP UTILITY BAR + DARK TRANSLUCENT HEADER + TWILIGHT HARBOR HERO */}
      <section
        id="trang-chu"
        className="relative min-h-[580px] sm:min-h-[650px] w-full overflow-hidden bg-[#0e1525] text-white"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1324]/75 via-[#181e36]/45 to-[#0b1324]/85" />

        {/* Top Bar */}
        <div className="relative z-30 border-b border-white/15 bg-black/30 text-[10px]">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
            <span className="uppercase tracking-wider text-zinc-200 truncate">
              {data.topBarText}
            </span>
            <a
              href="#dat-phong"
              className="bg-[#2596d1] hover:bg-[#1d7eb0] text-white font-bold uppercase px-3.5 py-1 rounded-2xs transition-colors shrink-0"
            >
              {data.hero.ctaText || "ĐẶT PHÒNG"}
            </a>
          </div>
        </div>

        {/* Main Header */}
        <header className="relative z-30 bg-black/25 backdrop-blur-2xs border-b border-white/10">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <a
              href="#trang-chu"
              className="font-serif italic text-2xl sm:text-3xl text-white tracking-wide"
            >
              {brandName.split(" ")[0] || "Mona"}
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-200">
              <a
                href="#trang-chu"
                className="text-[#2596d1] border-b border-[#2596d1] pb-0.5"
              >
                Trang chủ
              </a>
              <a
                href="#loai-phong"
                className="inline-flex items-center gap-1 hover:text-[#2596d1]"
              >
                <span>Loại phòng</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </a>
              <a href="#uu-dai" className="hover:text-[#2596d1]">
                Dịch vụ
              </a>
              <a href="#spa" className="hover:text-[#2596d1]">
                Tin tức
              </a>
              <a href="#gioi-thieu" className="hover:text-[#2596d1]">
                Giới thiệu
              </a>
              <a href="#lien-he" className="hover:text-[#2596d1]">
                Liên hệ
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden text-white p-1.5"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-[#121829] px-6 py-4 space-y-2 text-xs font-semibold">
              <a
                href="#trang-chu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#2596d1]"
              >
                Trang chủ
              </a>
              <a
                href="#loai-phong"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                Loại phòng
              </a>
              <a
                href="#uu-dai"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                Ưu đãi 25%
              </a>
              <a
                href="#spa"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                Spa trọn gói
              </a>
              <a
                href="#lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                Liên hệ
              </a>
            </div>
          )}
        </header>

        {/* Hero Body: Center Script Title + Right Dark Booking Form */}
        <div
          id="dat-phong"
          className="relative z-20 max-w-[1140px] mx-auto px-4 sm:px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Center Calligraphic Title */}
          <div className="lg:col-span-8 text-center">
            <h1 className="font-serif italic text-5xl sm:text-7xl font-light text-white mb-3 drop-shadow-lg">
              {data.hero.title}
            </h1>
            <p className="font-serif text-sm sm:text-lg uppercase tracking-[0.18em] text-white/95 mb-2">
              {data.hero.subtitle}
            </p>
            <p className="text-xs text-zinc-300">{data.heroAwardSubtitle}</p>
          </div>

          {/* Right Dark Translucent Booking Card */}
          <div className="lg:col-span-4 bg-black/55 backdrop-blur-xs p-5 border border-white/15">
            {searchSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#2596d1] mx-auto" />
                <p className="text-xs font-bold">
                  Đã kiểm tra tình trạng phòng trống!
                </p>
                <p className="text-[11px] text-zinc-300">
                  Bộ phận đặt phòng {brandName} sẽ giữ ưu đãi giảm 25% cho bạn.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchSubmitted(false)}
                  className="bg-[#2596d1] text-white text-[11px] font-bold uppercase px-4 py-1.5 mt-2"
                >
                  Tìm lại
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearchSubmitted(true);
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="block text-[11px] text-zinc-200 mb-1">
                    Ngày nhận phòng *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-white text-[#222222] px-3 py-2 text-xs focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-zinc-200 mb-1">
                    Ngày trả phòng *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-white text-[#222222] px-3 py-2 text-xs focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-zinc-200 mb-1">
                    Người lớn
                  </label>
                  <select className="w-full bg-white text-[#222222] px-3 py-2 text-xs focus:outline-none">
                    <option>1 Người lớn</option>
                    <option>2 Người lớn</option>
                    <option>4 Người lớn</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-zinc-200 mb-1">
                    Trẻ em
                  </label>
                  <select className="w-full bg-white text-[#222222] px-3 py-2 text-xs focus:outline-none">
                    <option>0 Trẻ em</option>
                    <option>1 Trẻ em</option>
                    <option>2 Trẻ em</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2596d1] hover:bg-[#1d7eb0] text-white text-xs font-bold uppercase py-2.5 transition-colors cursor-pointer"
                >
                  TÌM KIẾM PHÒNG
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom-Left Solid Cerulean Hotline Box */}
        <div className="relative z-20 max-w-[1140px] mx-auto">
          <div className="inline-block bg-[#2596d1] text-white px-7 py-3.5 text-base sm:text-xl font-serif">
            Hotline: {primaryPhone}
          </div>
        </div>
      </section>

      {/* 2. DARK TESTIMONIAL QUOTE BAR */}
      <section
        id="gioi-thieu"
        className="bg-[#131519] text-white py-12 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-base sm:text-xl leading-relaxed mb-3">
            {data.testimonialQuote}
          </p>
          <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            {data.testimonialAuthor}
          </span>
        </div>
      </section>

      {/* 3. FULL-BLEED 3x2 HOSPITALITY PHOTO GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {(data.sixGridPhotos || []).map((imgUrl, idx) => (
          <div key={idx} className="aspect-[16/10] overflow-hidden bg-zinc-900">
            <img
              src={imgUrl}
              alt={`Không gian khách sạn ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </section>

      {/* 4. NIGHT SKYLINE BANNER ("ĐẶT PHÒNG NGAY HÔM NAY") */}
      <section className="relative py-24 sm:py-32 bg-[#061326] text-white text-center overflow-hidden">
        <img
          src={data.skylineBanner.bgImage}
          alt={data.skylineBanner.heading}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[#051225]/60" />

        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <p className="font-serif italic text-4xl sm:text-6xl font-light mb-3">
            {data.skylineBanner.scriptTitle}
          </p>
          <h2 className="font-serif text-lg sm:text-2xl uppercase tracking-widest mb-5">
            {data.skylineBanner.heading}
          </h2>
          <a
            href="#loai-phong"
            aria-label="Xem phòng"
            className="w-8 h-8 rounded-full bg-[#2596d1] hover:bg-[#1d7eb0] text-white inline-flex items-center justify-center shadow-lg transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 5. LUXURY SUITES ("Phòng Nghỉ") */}
      <section id="loai-phong" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-[#222222] mb-2">
              Phòng Nghỉ
            </h2>
            <p className="text-xs text-[#777777]">{data.heroAwardSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.suites || []).map((suite) => (
              <div
                key={suite.id}
                onClick={() => setSelectedSuite(suite)}
                className="border border-[#e6e6e6] bg-white hover:shadow-lg transition-shadow cursor-pointer group flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={suite.image}
                    alt={suite.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#999999] mb-1">
                    {suite.badge}
                  </span>
                  <h3 className="font-serif text-sm font-bold text-[#222222] group-hover:text-[#2596d1] transition-colors mb-1.5">
                    {suite.title}
                  </h3>
                  <p className="text-xs font-extrabold text-[#222222]">
                    {suite.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setSelectedSuite(data.suites?.[0] || null)}
              className="border border-[#dddddd] hover:border-[#2596d1] hover:text-[#2596d1] text-[#666666] text-xs px-6 py-2 transition-colors cursor-pointer"
            >
              Xem tất cả phòng
            </button>
          </div>
        </div>
      </section>

      {/* 6. SUITE INTERIOR BANNER WITH RIGHT DARK "Ưu đãi" OVERLAY */}
      <section
        id="uu-dai"
        className="relative min-h-[380px] sm:min-h-[440px] w-full overflow-hidden bg-[#1e1916] flex items-center"
      >
        <img
          src={data.promoOverlayBanner.bgImage}
          alt={data.promoOverlayBanner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-[1060px] mx-auto w-full px-4 sm:px-6 flex justify-end py-12">
          <div className="bg-black/75 backdrop-blur-xs text-white p-7 sm:p-9 max-w-sm w-full">
            <h2 className="font-serif text-2xl sm:text-3xl mb-1">
              {data.promoOverlayBanner.title}
            </h2>
            <p className="text-xs font-bold text-[#2596d1] mb-4">
              {data.promoOverlayBanner.discountText}
            </p>
            <ul className="space-y-2 text-xs text-zinc-200 mb-6">
              {data.promoOverlayBanner.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#dat-phong"
              className="inline-block bg-[#111111] hover:bg-[#2596d1] border border-white/20 text-white text-xs font-semibold px-6 py-2 transition-colors"
            >
              Đặt ngay
            </a>
          </div>
        </div>
      </section>

      {/* 7. CERULEAN BLUE FULL-WIDTH CTA BANNER ("Kỳ nghỉ của bạn đang chờ") */}
      <section className="bg-[#2596d1] text-white py-10 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-xl sm:text-2xl font-bold mb-1.5">
            {data.blueCtaBanner.title}
          </h2>
          <p className="text-xs text-white/90 mb-4">
            {data.blueCtaBanner.subtitle}
          </p>
          <a
            href="#dat-phong"
            className="inline-block border border-white/80 hover:bg-white hover:text-[#2596d1] text-white text-xs font-semibold px-6 py-2 transition-colors"
          >
            {data.blueCtaBanner.buttonText}
          </a>
        </div>
      </section>

      {/* 8. SPA PACKAGE PARALLAX BANNER ("THƯ GIÃN VỚI SPA TRỌN GÓI") */}
      <section
        id="spa"
        className="relative py-24 sm:py-32 bg-[#1c232b] text-white overflow-hidden"
      >
        <img
          src={data.spaBanner.bgImage}
          alt={data.spaBanner.title}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-xl mx-auto px-4">
          <div className="border border-white/60 p-1.5">
            <div className="border border-white/40 bg-black/35 backdrop-blur-2xs py-8 px-6 text-center">
              <h2 className="font-serif text-xl sm:text-3xl uppercase tracking-wider mb-1.5">
                {data.spaBanner.title}
              </h2>
              <p className="font-serif text-sm text-zinc-200">
                {data.spaBanner.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 2-TIER DARK LUXURY FOOTER */}
      <footer id="lien-he" className="bg-[#222428] text-zinc-400 text-xs">
        {/* Tier 1: 8-Group Link Matrix */}
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-8 border-b border-white/10">
            <div>
              <h3 className="text-white font-semibold mb-2">
                Tham Gia Phần Thưởng
              </h3>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Cách Sử Dụng Điểm
              </h3>
              <ul className="space-y-1 text-[11px]">
                <li>
                  <a href="#loai-phong" className="hover:text-white">
                    Khách sạn
                  </a>
                </li>
                <li>
                  <a href="#uu-dai" className="hover:text-white">
                    Cửa hàng bán lẻ
                  </a>
                </li>
                <li>
                  <a href="#spa" className="hover:text-white">
                    Trao đổi điểm
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Cách Kiếm Điểm</h3>
              <ul className="space-y-1 text-[11px]">
                <li>
                  <a href="#uu-dai" className="hover:text-white">
                    Từ những đối tác
                  </a>
                </li>
                <li>
                  <a href="#uu-dai" className="hover:text-white">
                    Hãng hàng không
                  </a>
                </li>
                <li>
                  <a href="#uu-dai" className="hover:text-white">
                    Mua sắm
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Khám Phá Lợi Ích
              </h3>
              <ul className="space-y-1 text-[11px]">
                <li>
                  <a href="#uu-dai" className="hover:text-white">
                    Lợi ích thành viên
                  </a>
                </li>
                <li>
                  <a href="#uu-dai" className="hover:text-white">
                    Tin tức chương trình
                  </a>
                </li>
                <li>
                  <a href="#uu-dai" className="hover:text-white">
                    Các câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#uu-dai" className="hover:text-white">
                    Ưu đãi của {brandName}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8">
            <div>
              <h3 className="text-white font-semibold mb-2">
                Hỗ Trợ Khách Hàng
              </h3>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Điều Khoản Và Điều Kiện
              </h3>
              <ul className="space-y-1 text-[11px]">
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    Thành viên vàng
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    Thành viên bạc
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    Câu lạc bộ thú cưng
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Tài Khoản Của Tôi
              </h3>
              <ul className="space-y-1 text-[11px]">
                <li>
                  <a href="#dat-phong" className="hover:text-white">
                    Đặt phòng sắp tới
                  </a>
                </li>
                <li>
                  <a href="#dat-phong" className="hover:text-white">
                    Hoạt động tài khoản
                  </a>
                </li>
                <li>
                  <a href="#dat-phong" className="hover:text-white">
                    Hồ sơ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Phần Thưởng Của {brandName}
              </h3>
              <ul className="space-y-1 text-[11px]">
                <li>
                  <a href="#dat-phong" className="hover:text-white">
                    Bắt đầu
                  </a>
                </li>
                <li>
                  <a href="#dat-phong" className="hover:text-white">
                    Diễn đàn du lịch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tier 2: Centered Calligraphic Brand Footer */}
        <div className="bg-[#121316] py-12 text-center">
          <div className="max-w-lg mx-auto px-4">
            <div className="font-serif italic text-4xl sm:text-5xl text-white mb-3">
              {brandName}
            </div>
            <p className="text-[11px] text-zinc-400 mb-1">
              {data.business.address}
            </p>
            <p className="text-[11px] text-zinc-400 mb-5">
              Đặt chỗ : {primaryPhone}
            </p>
            <div className="flex items-center justify-center gap-2.5">
              {["f", "IG", "𝕏", "G+", "in"].map((soc) => (
                <a
                  key={soc}
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 text-white text-[10px] flex items-center justify-center hover:bg-[#2596d1] hover:border-[#2596d1] transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#1c1e22] py-3.5 text-center text-[11px] text-zinc-500">
          © Bản quyền thuộc về {brandName}. Thiết kế website bởi{" "}
          <span className="text-white font-semibold">{brandName}</span>
        </div>
      </footer>

      {/* SUITE DETAIL MODAL */}
      {selectedSuite && (
        <div
          onClick={() => setSelectedSuite(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full overflow-hidden shadow-2xl border-t-4 border-[#2596d1]"
          >
            <img
              src={selectedSuite.image}
              alt={selectedSuite.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-5">
              <span className="text-[10px] font-bold uppercase text-[#2596d1]">
                {selectedSuite.badge} • Diện tích {selectedSuite.area}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#222222] mt-1 mb-1">
                {selectedSuite.title}
              </h3>
              <p className="text-sm font-extrabold text-[#2596d1] mb-3">
                {selectedSuite.price} / đêm
              </p>
              <p className="text-xs text-[#666666] leading-relaxed mb-4">
                {selectedSuite.description}
              </p>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSuite(null)}
                  className="px-4 py-2 border border-zinc-300 text-xs font-bold"
                >
                  Đóng
                </button>
                <a
                  href="#dat-phong"
                  onClick={() => setSelectedSuite(null)}
                  className="px-5 py-2 bg-[#2596d1] text-white text-xs font-bold uppercase"
                >
                  Đặt Phòng Ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
