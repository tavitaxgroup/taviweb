"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Sprout,
  Tractor,
  ShieldCheck,
  Sun,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct5DefaultData,
  type B2BProduct5Data
} from "@/template-sources/b2b_product_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: B2BProduct5Data = adaptClonedTemplateData(
    b2bProduct5DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(
    "Hợp tác bao tiêu & Cung ứng nông sản sạch"
  );
  const [submitted, setSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "contact@agritechvn.com";

  const openModal = (topic?: string) => {
    if (topic) setSelectedTopic(topic);
    setSubmitted(false);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#182b1b] font-sans selection:bg-[#4b9e22] selection:text-white">
      {/* 1. TRANSPARENT OVERLAY HEADER + FULL-BLEED ORGANIC FARM HERO */}
      <section
        id="trang-chu"
        className="relative min-h-[580px] lg:min-h-[680px] flex flex-col justify-between text-white overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/45" />

        {/* Top Navbar */}
        <header className="relative z-30 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#4b9e22] text-white flex items-center justify-center shadow-md">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                {data.business.name}
              </span>
            </a>

            {/* Centered Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-semibold text-white/90">
              <a
                href="#trang-chu"
                className="text-white border-b-2 border-[#4b9e22] pb-1"
              >
                Trang chủ
              </a>
              <a href="#gioi-thieu" className="hover:text-[#7ce049] transition-colors">
                Giới thiệu
              </a>
              <a href="#cua-hang" className="hover:text-[#7ce049] transition-colors">
                Cửa hàng
              </a>
              <a href="#dich-vu" className="hover:text-[#7ce049] transition-colors">
                Dịch vụ
              </a>
              <a href="#blog" className="hover:text-[#7ce049] transition-colors">
                Blog
              </a>
              <button
                onClick={() => openModal()}
                className="hover:text-[#7ce049] transition-colors cursor-pointer"
              >
                Liên hệ
              </button>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => openModal("Đặt hàng nông sản sỉ")}
                className="relative p-2 text-white/90 hover:text-white cursor-pointer"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#f5a623] text-black text-[10px] font-extrabold flex items-center justify-center">
                  0
                </span>
              </button>
              <button
                onClick={() => openModal("Tìm kiếm giải pháp nông nghiệp")}
                className="p-2 text-white/90 hover:text-white cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#112214]/95 backdrop-blur-md px-4 py-4 space-y-2.5 text-sm">
              <a
                href="#gioi-thieu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-[#7ce049]"
              >
                Giới thiệu
              </a>
              <a
                href="#dich-vu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-[#7ce049]"
              >
                Các dịch vụ
              </a>
              <a
                href="#cua-hang"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-[#7ce049]"
              >
                Sản phẩm nông trại
              </a>
              <a
                href="#blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-[#7ce049]"
              >
                Thông tin - Kiến thức
              </a>
            </div>
          )}
        </header>

        {/* Hero Main Content */}
        <div className="relative z-20 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto py-16">
          <div className="max-w-xl space-y-5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight">
              {data.hero.title}
            </h1>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#dich-vu"}
                className="inline-block bg-[#4b9e22] hover:bg-[#3d851a] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
              >
                {data.hero.ctaText || "Dịch vụ"}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slider Dots */}
        <div className="relative z-20 pb-6 flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f5a623]" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
        </div>
      </section>

      {/* 2. ABOUT SPLIT SECTION ("DOANH NGHIỆP CỦA CHÚNG TÔI — Nông nghiệp Công nghệ cao") */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Overlapping Greenhouse & Harvest Photos */}
            <div className="lg:col-span-6 relative pb-12 sm:pb-16">
              <div className="w-4/5 overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80"
                  alt="Nhà màng nông nghiệp công nghệ cao"
                  className="w-full h-[380px] object-cover"
                />
              </div>
              <div className="w-3/5 absolute bottom-0 right-2 sm:right-6 overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80"
                  alt="Thu hoạch nông sản hữu cơ"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4b9e22]">
                DOANH NGHIỆP CỦA CHÚNG TÔI
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#182b1b] leading-tight">
                {data.business.aboutTitle || "Nông nghiệp Công nghệ cao"}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                {data.business.aboutText.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => openModal("Tư vấn giải pháp Nông nghiệp Công nghệ cao")}
                  className="bg-[#4b9e22] hover:bg-[#3d851a] text-white text-xs font-bold px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "VỀ CHÚNG TÔI — Các dịch vụ" (4 ICON PILLARS + 4 FULL-BLEED IMAGE COLUMNS) */}
      <section id="dich-vu" className="pt-16 bg-[#f8faf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4b9e22]">
              VỀ CHÚNG TÔI
            </span>
            <h2 className="mt-1.5 font-serif text-3xl sm:text-4xl font-bold text-[#182b1b]">
              Các dịch vụ
            </h2>
          </div>

          {/* 4 Agricultural Line Icon Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 text-center">
            {(data.serviceIcons || b2bProduct5DefaultData.serviceIcons).map(
              (item, idx) => (
                <div
                  key={item.id}
                  onClick={() => openModal(item.title)}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                    <span
                      className={`w-14 h-14 rounded-full ${item.accentColor} absolute right-1 top-1 group-hover:scale-110 transition-transform`}
                    />
                    <div className="relative z-10 text-[#182b1b]">
                      {idx === 0 ? (
                        <Sprout className="w-10 h-10 stroke-[1.5]" />
                      ) : idx === 1 ? (
                        <Tractor className="w-10 h-10 stroke-[1.5]" />
                      ) : idx === 2 ? (
                        <ShieldCheck className="w-10 h-10 stroke-[1.5]" />
                      ) : (
                        <Sun className="w-10 h-10 stroke-[1.5]" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-sm font-extrabold text-[#182b1b] group-hover:text-[#4b9e22] transition-colors">
                    {item.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-stone-400 mt-2 group-hover:text-[#4b9e22] group-hover:translate-x-1 transition-all" />
                </div>
              )
            )}
          </div>
        </div>

        {/* 4 Full-Bleed Vertical Image Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {(data.serviceColumns || b2bProduct5DefaultData.serviceColumns).map(
            (col) => (
              <div
                key={col.id}
                onClick={() => openModal(col.title)}
                className="group relative h-[380px] sm:h-[420px] overflow-hidden cursor-pointer"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-center text-white">
                  <h3 className="font-serif text-xl font-bold">{col.title}</h3>
                  <p className="mt-2 text-xs text-stone-200 leading-relaxed line-clamp-2">
                    {col.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* 4. "CỬA HÀNG — Sản phẩm" (4 CLEAN PRODUCT CARDS) */}
      <section id="cua-hang" className="py-16 lg:py-24 bg-[#f8faf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4b9e22]">
              CỬA HÀNG
            </span>
            <h2 className="mt-1.5 font-serif text-3xl sm:text-4xl font-bold text-[#182b1b]">
              Sản phẩm
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.services || b2bProduct5DefaultData.services || []).map((prd, i) => (
              <div
                key={prd.id}
                onClick={() => openModal(`Đặt mua sỉ: ${prd.title}`)}
                className="group bg-white p-5 text-center shadow-sm hover:shadow-xl transition-all cursor-pointer relative"
              >
                {prd.category && (
                  <span
                    className={`absolute top-4 left-4 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded ${
                      i === 2
                        ? "bg-[#4b9e22] text-white"
                        : "bg-[#182b1b] text-white"
                    }`}
                  >
                    {prd.category}
                  </span>
                )}
                <div className="h-48 flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src={prd.image}
                    alt={prd.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-extrabold text-[#182b1b] group-hover:text-[#4b9e22]">
                  {prd.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-stone-400">
                  {prd.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "SỨ MỆNH - TẦM NHÌN — Nông nghiệp - Sinh thái" + 6. "CHIA SẺ KINH NGHIỆM" */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Row 1: SỨ MỆNH - TẦM NHÌN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4b9e22]">
                {data.ecoMission.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#182b1b] leading-tight">
                {data.ecoMission.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {data.ecoMission.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openModal("Tầm nhìn Nông nghiệp Sinh thái")}
                  className="bg-[#f5a623] hover:bg-[#e09112] text-white text-xs font-extrabold px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
                >
                  {data.ecoMission.ctaText}
                </button>
              </div>
            </div>

            {/* Right Image + 2 Overlapping Stat Blocks (1000+ & 25) */}
            <div className="lg:col-span-7 relative">
              <div className="ml-auto max-w-lg overflow-hidden shadow-lg">
                <img
                  src={data.ecoMission.image}
                  alt={data.ecoMission.title}
                  className="w-full h-[380px] object-cover"
                />
              </div>

              <div className="mt-4 sm:mt-0 sm:absolute sm:bottom-6 sm:left-4 grid grid-cols-2 shadow-2xl max-w-md">
                <div className="bg-[#4b9e22] text-white p-6">
                  <span className="text-xs font-semibold text-emerald-100 block">
                    {data.ecoMission.statGreen.label}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black block mt-1">
                    {data.ecoMission.statGreen.number}
                  </span>
                  <span className="text-[11px] text-emerald-100 mt-1 block">
                    {data.ecoMission.statGreen.unit}
                  </span>
                </div>
                <div className="bg-[#182019] text-white p-6">
                  <span className="text-xs font-semibold text-stone-300 block">
                    {data.ecoMission.statDark.label}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black block mt-1">
                    {data.ecoMission.statDark.number}
                  </span>
                  <span className="text-[11px] text-stone-300 mt-1 block">
                    {data.ecoMission.statDark.unit}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: CHIA SẺ KINH NGHIỆM (Sweet Corn + 35% / 65% Circular Progress Rings) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden shadow-lg">
                <img
                  src={data.ecoTrend.image}
                  alt={data.ecoTrend.title}
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4b9e22]">
                {data.ecoTrend.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#182b1b] leading-tight">
                {data.ecoTrend.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {data.ecoTrend.description}
              </p>

              {/* 2 Circular Ring Charts (35% & 65%) */}
              <div className="pt-4 flex flex-wrap items-center gap-8">
                {data.ecoTrend.rings.map((ring, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full border-4 border-[#4b9e22] flex items-center justify-center font-black text-lg text-[#182b1b] bg-[#f8faf7]">
                      {ring.percent}%
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-[#182b1b] max-w-[110px]">
                      {ring.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "BLOG — Thông tin - Kiến thức" (3 AGRI BLOG CARDS) */}
      <section id="blog" className="py-16 lg:py-24 bg-[#f8faf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4b9e22]">
              BLOG
            </span>
            <h2 className="mt-1.5 font-serif text-3xl sm:text-4xl font-bold text-[#182b1b]">
              Thông tin - Kiến thức
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || b2bProduct5DefaultData.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="h-52 overflow-hidden mb-4 bg-white shadow-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  <span className="w-5 h-px bg-stone-400" />
                  <span className="text-[#4b9e22]">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#182b1b] group-hover:text-[#4b9e22] transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => openModal("Nhận tài liệu kỹ thuật canh tác hữu cơ")}
              className="bg-[#4b9e22] hover:bg-[#3d851a] text-white text-xs font-bold px-8 py-3 rounded-full shadow-md transition-colors cursor-pointer"
            >
              Xem tất cả
            </button>
          </div>
        </div>
      </section>

      {/* 8. DEEP FOREST CHARCOAL 4-COLUMN FOOTER (#112214) */}
      <footer className="bg-[#112214] text-stone-300 pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-xs">
            {/* Col 1: Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#4b9e22] text-white flex items-center justify-center">
                  <Sprout className="w-4 h-4" />
                </div>
                <span className="text-xl font-black text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-stone-400 leading-relaxed">
                {data.business.name} ngay từ ngày đầu thành lập đã xác định sứ mệnh tiên phong
                ứng dụng công nghệ sinh học và IoT vào nông nghiệp sạch bền vững.
              </p>
            </div>

            {/* Col 2: Văn phòng */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-white text-sm mb-3">Văn phòng</h4>
              <p className="font-semibold text-white">{data.business.name}</p>
              <p className="text-stone-400 leading-relaxed">
                {data.business.address}
              </p>
              <p className="text-stone-300 pt-1">{primaryEmail}</p>
              <p className="font-bold text-white pt-1">{primaryPhone}</p>
            </div>

            {/* Col 3: Điều hướng */}
            <div>
              <h4 className="font-bold text-white text-sm mb-3">Điều hướng</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <a href="#trang-chu" className="hover:text-[#7ce049]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#7ce049]">
                    Dịch vụ nông nghiệp
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#7ce049]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-[#7ce049]">
                    Blog kiến thức
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Liên lạc */}
            <div>
              <h4 className="font-bold text-white text-sm mb-3">Liên lạc</h4>
              <div className="flex items-center gap-4 text-stone-300 mb-4">
                <button
                  onClick={() => openModal()}
                  className="hover:text-[#7ce049] cursor-pointer"
                >
                  Facebook
                </button>
                <span>|</span>
                <button
                  onClick={() => openModal()}
                  className="hover:text-[#7ce049] cursor-pointer"
                >
                  Youtube
                </button>
              </div>
              <button
                onClick={() => openModal()}
                className="bg-[#4b9e22] hover:bg-[#3d851a] text-white text-xs font-bold px-5 py-2.5 rounded-full cursor-pointer"
              >
                Đăng ký đối tác B2B
              </button>
            </div>
          </div>

          <div className="pt-6 text-xs text-stone-400">
            © {new Date().getFullYear()} {data.business.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* CONTACT / B2B PARTNERSHIP MODAL */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#4b9e22] mx-auto" />
                <h3 className="text-lg font-extrabold text-[#182b1b]">
                  Đã tiếp nhận thông tin!
                </h3>
                <p className="text-xs text-stone-600">
                  Chuyên gia nông nghiệp của <strong>{data.business.name}</strong> sẽ liên hệ
                  tư vấn chi tiết trong thời gian sớm nhất.
                </p>
                <button
                  onClick={() => setContactOpen(false)}
                  className="bg-[#4b9e22] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#4b9e22]">
                    Kết nối Nông trại & Đối tác B2B
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#182b1b] mt-0.5">
                    {data.business.name}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ tên / Tên đơn vị hợp tác *"
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#4b9e22]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ *"
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#4b9e22]"
                />
                <input
                  type="text"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#4b9e22]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#4b9e22] hover:bg-[#3d851a] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-colors cursor-pointer"
                >
                  Gửi yêu cầu tư vấn
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
