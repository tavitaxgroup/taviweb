"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Search,
  ShoppingCart,
  Users,
  ShieldCheck,
  FileText,
  Send,
  CheckCircle2,
  Leaf,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  spa5DefaultData,
  type Spa5Data
} from "@/template-sources/spa_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function SectionHeading({
  title,
  light = false
}: {
  title: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-10">
      <h2
        className={`text-xl sm:text-2xl font-normal uppercase tracking-wide mb-2.5 ${
          light ? "text-[#79d759]" : "text-[#54b435]"
        }`}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#54b435]" />
        <span className="w-2 h-2 rounded-full bg-[#54b435]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#54b435]" />
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Spa5Data = adaptClonedTemplateData(spa5DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(
    data.services?.[0]?.title || "Massage toàn thân"
  );
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@flyspa.vn";

  const openBooking = (serviceName?: string) => {
    if (serviceName) setSelectedServiceTitle(serviceName);
    setBookingSuccess(false);
    setBookingModalOpen(true);
  };

  const handleAddPackage = (pkgName: string) => {
    setCartItems((prev) => [...prev, pkgName]);
  };

  const statIcons = [Users, Clock, ShieldCheck, FileText];

  return (
    <div className="min-h-screen bg-white text-[#444444] font-sans selection:bg-[#54b435] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#f2f2f2] border-b border-gray-200 text-[11px] text-gray-600 py-1.5">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#54b435]" />
            <span>HOME: {data.business.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-gray-700">
              <Phone className="w-3.5 h-3.5 text-[#54b435]" />
              HOTLINE: {primaryPhone}
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#trang-chu" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-light tracking-widest text-[#222222] uppercase">
                  {data.business.name}
                </span>
                <Leaf className="w-6 h-6 text-[#54b435] -mt-2 fill-[#54b435]/20" />
              </div>
              <span className="block font-serif italic text-xs text-[#54b435] -mt-1 tracking-wide">
                spa &amp; beauty salon
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-gray-600">
            <a
              href="#trang-chu"
              className="text-[#222222] border-b-2 border-[#54b435] pb-1"
            >
              TRANG CHỦ
            </a>
            <a href="#ve-chung-toi" className="hover:text-[#54b435] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#cac-dich-vu" className="hover:text-[#54b435] transition-colors">
              DỊCH VỤ
            </a>
            <a href="#tin-tuc" className="hover:text-[#54b435] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#54b435] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-600">
            <button
              type="button"
              onClick={() => openBooking()}
              aria-label="Tìm kiếm dịch vụ"
              className="hover:text-[#54b435] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openBooking()}
              className="flex items-center gap-1.5 hover:text-[#54b435] transition-colors cursor-pointer"
            >
              <span className="font-semibold">
                {cartItems.length > 0 ? `${cartItems.length} gói` : "0 ₫"}
              </span>
              <ShoppingCart className="w-4 h-4 text-[#54b435]" />
            </button>

            <button
              type="button"
              onClick={() => openBooking()}
              className="text-[11px] font-semibold uppercase text-gray-600 hover:text-[#54b435] border-l border-gray-200 pl-4 cursor-pointer"
            >
              ĐẶT LỊCH / TƯ VẤN
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#54b435]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2.5 text-xs font-semibold uppercase text-gray-700">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#54b435]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#ve-chung-toi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#cac-dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              DỊCH VỤ
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER + GREEN INFO STRIP */}
      <section id="trang-chu" className="w-full">
        {/* Hero Image Area */}
        <div className="relative h-[420px] sm:h-[490px] w-full overflow-hidden flex items-center justify-center text-center">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
            <p className="text-base sm:text-xl font-normal text-white/95 mb-2 drop-shadow">
              {data.hero.eyebrow || `Welcome to ${data.business.name} & Beauty Salon`}
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal uppercase tracking-wide leading-tight drop-shadow-md mb-6">
              <span className="block text-white">{data.hero.title}</span>
              <span className="block text-[#54b435] font-semibold mt-1">
                {data.heroHighlightLine || "MỌI KHÁCH HÀNG"}
              </span>
            </h1>
            <button
              type="button"
              onClick={() => openBooking()}
              className="bg-[#54b435] hover:bg-[#46992b] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-2.5 rounded-full shadow-lg transition-colors cursor-pointer"
            >
              {data.hero.ctaText || "TRẢI NGHIỆM NGAY"}
            </button>
          </div>
        </div>

        {/* Green Info Strip directly below Hero */}
        <div className="bg-gradient-to-r from-[#54b435] via-[#65c444] to-[#54b435] text-white py-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center">
            {/* Phone & Email */}
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-white/90 mb-2 stroke-[1.5]" />
              <p className="text-xs font-medium">{primaryPhone}</p>
              <p className="text-[11px] text-white/85">{primaryEmail}</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-white/90 mb-2 stroke-[1.5]" />
              <p className="text-xs font-medium max-w-[220px] leading-snug">
                {data.business.address}
              </p>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col items-center">
              <Calendar className="w-6 h-6 text-white/90 mb-2 stroke-[1.5]" />
              <p className="text-xs font-medium">9h - 18h</p>
              <p className="text-[11px] text-white/85">Thứ 2 - thứ 6</p>
            </div>

            {/* Outline Pill CTA */}
            <div className="flex justify-center">
              <a
                href="#cac-dich-vu"
                className="border border-white text-white hover:bg-white hover:text-[#54b435] text-xs font-semibold uppercase tracking-wider px-8 py-2.5 rounded-full transition-colors"
              >
                XEM DỊCH VỤ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VỀ CHÚNG TÔI */}
      <section id="ve-chung-toi" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title={data.business.aboutTitle || "VỀ CHÚNG TÔI"} />

          {/* Italic Quote Box with Green Left Border */}
          <div className="max-w-3xl mx-auto border-l-2 border-[#54b435] pl-5 py-1 mb-7">
            <p className="font-serif italic text-sm sm:text-base text-gray-600 leading-relaxed">
              {data.business.aboutText?.[0]}
            </p>
          </div>

          <div className="text-center mb-10">
            <button
              type="button"
              onClick={() => openBooking()}
              className="bg-[#54b435] hover:bg-[#46992b] text-white text-xs font-semibold uppercase px-7 py-2 rounded-full transition-colors cursor-pointer"
            >
              XEM THÊM
            </button>
          </div>

          {/* 2 Side-by-Side Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.aboutImages || spa5DefaultData.aboutImages).map((imgUrl, idx) => (
              <div key={idx} className="h-64 sm:h-72 overflow-hidden shadow-md">
                <img
                  src={imgUrl}
                  alt={`Không gian ${data.business.name} ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CÁC DỊCH VỤ (3x2 ROUNDED SERVICE CARDS) */}
      <section id="cac-dich-vu" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="CÁC DỊCH VỤ" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
            {(data.services || spa5DefaultData.services || []).map((srv) => (
              <div
                key={srv.id}
                onClick={() => openBooking(srv.title)}
                className="bg-white rounded-md shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all cursor-pointer group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-sm text-[#333333] group-hover:text-[#54b435] transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 2 Outlined Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openBooking()}
              className="border border-gray-200 hover:border-[#54b435] text-[#54b435] text-xs font-semibold uppercase px-7 py-2 rounded-full shadow-xs transition-colors cursor-pointer"
            >
              XEM THÊM
            </button>
            <button
              type="button"
              onClick={() => openBooking("Tải Catalog Dịch vụ")}
              className="border border-gray-200 hover:border-[#54b435] text-[#54b435] text-xs font-semibold uppercase px-7 py-2 rounded-full shadow-xs transition-colors cursor-pointer"
            >
              TẢI CATALOG
            </button>
          </div>
        </div>
      </section>

      {/* 6. CHÚNG TÔI GỒM (DARK SPA STONE & CANDLE PARALLAX BANNER) */}
      <section
        className="relative py-16 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <SectionHeading title="CHÚNG TÔI GỒM" light />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {(data.team || spa5DefaultData.team || []).map((member) => (
              <div key={member.id} className="group">
                <div className="h-56 w-48 mx-auto overflow-hidden rounded-t-lg mb-3 border-b-2 border-[#54b435]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-sm text-white">{member.name}</h3>
                <p className="text-xs text-gray-300 mt-0.5">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THƯ VIỆN (3x2 GALLERY GRID) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="THƯ VIỆN" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.galleryImages || spa5DefaultData.galleryImages).map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveGalleryImage(item.image)}
                className="h-52 overflow-hidden shadow-sm cursor-pointer group relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-end p-4">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PHẢN HỒI CỦA KHÁCH HÀNG */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="PHẢN HỒI CỦA KHÁCH HÀNG" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.testimonials || spa5DefaultData.testimonials || []).map((item) => (
              <div key={item.id} className="text-center">
                <div className="h-48 overflow-hidden mb-4 bg-white shadow-xs">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm text-[#333333] mb-1.5">
                  {item.author}
                </h3>
                <p className="text-xs text-gray-500 italic leading-relaxed px-2">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GREEN STATS COUNTER BAR */}
      <section className="bg-[#54b435] py-12 text-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {(data.stats || spa5DefaultData.stats || []).map((st, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <div key={st.id} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white text-[#54b435] flex items-center justify-center mb-3 shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-xl sm:text-2xl font-bold mb-1">{st.number}</span>
                <span className="text-xs text-white/90">{st.title}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. GIÁ CÁC GÓI DỊCH VỤ (4 PACKAGES WITH DISCOUNT BADGE) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="GIÁ CÁC GÓI DỊCH VỤ" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.packages || spa5DefaultData.packages).map((pkg) => (
              <div
                key={pkg.id}
                className="text-center group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-3 shadow-sm">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 w-9 h-9 rounded-full bg-[#54b435] text-white text-[11px] font-bold flex items-center justify-center shadow">
                      {pkg.discountBadge}
                    </span>
                  </div>

                  <h3 className="text-xs text-gray-600 font-medium mb-1 line-clamp-1">
                    {pkg.name}
                  </h3>
                  <div className="text-xs mb-3 space-x-1.5">
                    <span className="line-through text-gray-400">{pkg.oldPrice}</span>
                    <span className="font-bold text-[#222222]">{pkg.price}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddPackage(pkg.name)}
                  className="bg-[#54b435] hover:bg-[#45992a] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 mx-auto transition-colors cursor-pointer"
                >
                  THÊM VÀO GIỎ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TIN TỨC & KHUYẾN MÃI */}
      <section id="tin-tuc" className="pb-20 pt-4 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="TIN TỨC & KHUYẾN MÃI" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || spa5DefaultData.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#54b435] text-white text-[10px] font-bold leading-tight flex flex-col items-center justify-center shadow">
                    <span>{post.date.split(" ")[0] || "06"}</span>
                    <span className="text-[9px] font-normal">
                      {post.date.split(" ")[1] || "Th5"}
                    </span>
                  </div>
                </div>

                <div className="relative -mt-6 mx-3 bg-white p-4 shadow-md text-center rounded-xs">
                  <h3 className="font-bold text-xs sm:text-sm text-[#333333] group-hover:text-[#54b435] transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-gray-200 mx-auto mb-2" />
                  <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. DARK SPA FOOTER */}
      <footer
        id="lien-he"
        className="relative bg-cover bg-center text-gray-300 pt-14 pb-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-[#121610]/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Brand & Contact */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-light tracking-widest text-white uppercase">
                  {data.business.name}
                </span>
                <Leaf className="w-6 h-6 text-[#54b435] fill-[#54b435]/30" />
              </div>
              <span className="block font-serif italic text-xs text-[#54b435] -mt-1">
                spa &amp; beauty salon
              </span>
            </div>

            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#54b435] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#54b435] shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#54b435] shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Menu */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              MENU
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a
                  href="#trang-chu"
                  className="inline-flex items-center gap-1.5 text-[#54b435]"
                >
                  <ChevronRight className="w-3 h-3" /> Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="#ve-chung-toi"
                  className="inline-flex items-center gap-1.5 hover:text-[#54b435] transition-colors"
                >
                  <ChevronRight className="w-3 h-3" /> Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#cac-dich-vu"
                  className="inline-flex items-center gap-1.5 hover:text-[#54b435] transition-colors"
                >
                  <ChevronRight className="w-3 h-3" /> Dịch vụ
                </a>
              </li>
              <li>
                <a
                  href="#tin-tuc"
                  className="inline-flex items-center gap-1.5 hover:text-[#54b435] transition-colors"
                >
                  <ChevronRight className="w-3 h-3" /> Tin tức
                </a>
              </li>
              <li>
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-1.5 hover:text-[#54b435] transition-colors"
                >
                  <ChevronRight className="w-3 h-3" /> Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Đăng ký */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              ĐĂNG KÝ
            </h4>
            <p className="text-xs text-gray-300 mb-3 leading-relaxed">
              Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
            </p>
            {newsletterDone ? (
              <div className="bg-[#54b435]/20 border border-[#54b435] text-white text-xs p-3 rounded flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#54b435] shrink-0" />
                <span>Đã đăng ký nhận ưu đãi thành công!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterDone(true);
                }}
                className="flex items-center bg-white rounded-xs overflow-hidden h-9"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email..."
                  className="w-full px-3 text-xs text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Gửi email"
                  className="h-full px-3 text-[#54b435] hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </footer>

      <div className="bg-black py-3 text-center text-[11px] text-gray-400">
        © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
      </div>

      {/* Lightbox Modal for Gallery */}
      {activeGalleryImage && (
        <div
          onClick={() => setActiveGalleryImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={activeGalleryImage}
              alt="Thư viện hình ảnh"
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <button
              type="button"
              onClick={() => setActiveGalleryImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#54b435] cursor-pointer"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-[#54b435] uppercase mb-1">
              Đặt Lịch Trải Nghiệm
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Vui lòng để lại thông tin, chuyên viên {data.business.name} sẽ gọi xác nhận ngay.
            </p>

            {bookingSuccess ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#54b435] mx-auto mb-3" />
                <p className="font-bold text-sm text-gray-800 mb-1">
                  Đặt lịch hẹn thành công!
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Cảm ơn bạn đã chọn liệu trình <strong>{selectedServiceTitle}</strong> tại{" "}
                  {data.business.name}.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="bg-[#54b435] text-white text-xs font-bold uppercase px-6 py-2 rounded-full cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSuccess(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#54b435]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Nhập số điện thoại"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#54b435]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Liệu trình quan tâm
                  </label>
                  <input
                    type="text"
                    value={selectedServiceTitle}
                    onChange={(e) => setSelectedServiceTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#54b435]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#54b435] hover:bg-[#46992b] text-white font-bold uppercase py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  XÁC NHẬN ĐẶT LỊCH
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
