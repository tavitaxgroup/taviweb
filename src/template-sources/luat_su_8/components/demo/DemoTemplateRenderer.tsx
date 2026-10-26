"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  BookOpen,
  ChevronDown,
  Map,
  Users,
  Languages,
  Banknote,
  Scale,
  CheckCircle2,
  Plus,
  Minus,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu8DefaultData,
  type Luat8Data
} from "@/template-sources/luat_su_8/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function BookSectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#12489c] mb-2">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2.5 text-[#12489c]">
        <span className="w-6 h-0.5 bg-[#12489c]" />
        <BookOpen className="w-4 h-4 fill-[#12489c]/15" />
        <span className="w-6 h-0.5 bg-[#12489c]" />
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Luat8Data = adaptClonedTemplateData(luatSu8DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedVisaService, setSelectedVisaService] = useState(
    data.services?.[0]?.title || "VISA DU HỌC ÚC"
  );
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [mapZoom, setMapZoom] = useState(14);

  const primaryPhone = data.business.phone?.[0] || "0903 728 397";
  const primaryEmail = data.business.email?.[0] || "info@adeptlaw.vn";

  const openConsultation = (visaTitle?: string) => {
    if (visaTitle) setSelectedVisaService(visaTitle);
    setConsultSubmitted(false);
    setConsultModalOpen(true);
  };

  const renderFactIcon = (type: string) => {
    switch (type) {
      case "area":
        return <Map className="w-8 h-8 text-white/90 mb-2.5 stroke-[1.5]" />;
      case "population":
        return <Users className="w-8 h-8 text-white/90 mb-2.5 stroke-[1.5]" />;
      case "language":
        return <Languages className="w-8 h-8 text-white/90 mb-2.5 stroke-[1.5]" />;
      default:
        return <Banknote className="w-8 h-8 text-white/90 mb-2.5 stroke-[1.5]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans selection:bg-[#12489c] selection:text-white">
      {/* 1. CLEAN WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#trang-chu" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-full border-2 border-[#12489c] bg-[#12489c]/5 flex items-center justify-center text-[#12489c]">
              <Scale className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <span className="block text-base sm:text-lg font-extrabold tracking-tight text-[#12489c]">
                {data.business.name}
              </span>
              <span className="block text-[10px] text-gray-500 font-medium">
                Luật Di Trú &amp; Định Cư Quốc Tế
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#222222]">
            <a href="#trang-chu" className="text-[#12489c]">
              TRANG CHỦ
            </a>
            <a href="#ve-chung-toi" className="hover:text-[#12489c] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#12489c] transition-colors inline-flex items-center gap-1"
            >
              DỊCH VỤ <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a href="#tin-tuc" className="hover:text-[#12489c] transition-colors">
              CẨM NANG
            </a>
            <a href="#lien-he" className="hover:text-[#12489c] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Search & CTA Pill */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => openConsultation()}
              aria-label="Tìm kiếm thông tin di trú"
              className="text-gray-600 hover:text-[#12489c] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => openConsultation()}
              className="bg-[#12489c] hover:bg-[#0d3677] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm transition-colors cursor-pointer"
            >
              {data.hero.ctaText || "ĐĂNG KÝ NGAY"}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#12489c]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#12489c]"
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
              href="#dich-vu"
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
              CẨM NANG
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

      {/* 2. AUSTRALIA SKYLINE HERO */}
      <section
        id="trang-chu"
        className="relative h-[420px] sm:h-[500px] w-full overflow-hidden flex items-center justify-center text-center"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-3 drop-shadow">
            {data.hero.title}
          </h1>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl mx-auto">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 3. VỀ CHÚNG TÔI (2-COLUMN IMMIGRATION OVERVIEW) */}
      <section id="ve-chung-toi" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <BookSectionHeading title="VỀ CHÚNG TÔI" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 6 Cols: Student/Immigrant Portrait */}
            <div className="md:col-span-6 overflow-hidden shadow-md">
              <img
                src={data.aboutPortraitImage}
                alt={data.business.aboutTitle || "Định cư tại Úc"}
                className="w-full h-[360px] sm:h-[410px] object-cover"
              />
            </div>

            {/* Right 6 Cols: Text & CTA */}
            <div className="md:col-span-6">
              <div className="border-l-4 border-[#12489c] pl-3 mb-4">
                <h3 className="text-base sm:text-lg font-extrabold uppercase text-[#12489c]">
                  {data.business.aboutTitle || "ĐỊNH CƯ TẠI ÚC"}
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-gray-600 leading-relaxed mb-6">
                {(data.business.aboutText || luatSu8DefaultData.business.aboutText).map(
                  (paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  )
                )}
              </div>

              <button
                type="button"
                onClick={() => openConsultation("Tư vấn lộ trình Định cư tại Úc")}
                className="bg-[#12489c] hover:bg-[#0d3677] text-white text-xs font-bold px-6 py-2 rounded-full transition-colors cursor-pointer"
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COUNTRY FACTS PARALLAX STRIP WITH L-CORNER FRAMES */}
      <section
        className="relative py-14 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('${data.factsBannerImage}')`
        }}
      >
        <div className="absolute inset-0 bg-[#1c2331]/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {(data.countryFacts || luatSu8DefaultData.countryFacts).map((fact) => (
            <div
              key={fact.id}
              className="relative py-8 px-4 flex flex-col items-center justify-center text-center"
            >
              {/* Top-Left L Corner */}
              <span className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white/75 pointer-events-none" />
              {/* Bottom-Right L Corner */}
              <span className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white/75 pointer-events-none" />

              {renderFactIcon(fact.iconType)}
              <span className="text-xs text-white/85 mb-0.5">{fact.label}</span>
              <span className="text-sm sm:text-base font-extrabold text-white">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DỊCH VỤ CỦA CHÚNG TÔI (4 FRAMED IMAGE CARDS) */}
      <section id="dich-vu" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <BookSectionHeading title="DỊCH VỤ CỦA CHÚNG TÔI" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.services || luatSu8DefaultData.services || []).map((srv) => (
              <div
                key={srv.id}
                onClick={() => openConsultation(srv.title)}
                className="relative h-64 overflow-hidden group cursor-pointer shadow-md"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0b2247]/40 group-hover:bg-[#12489c]/60 transition-colors" />

                {/* Inner Thin White Frame */}
                <div className="absolute inset-3 border border-white/75 flex items-center justify-center p-3 text-center">
                  <h3 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider drop-shadow">
                    {srv.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TIN TỨC (ASYMMETRIC 2-COLUMN NEWS SECTION) */}
      <section id="tin-tuc" className="py-16 sm:py-20 bg-[#f6f6f6]">
        <div className="max-w-5xl mx-auto px-4">
          <BookSectionHeading title="TIN TỨC" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 6 Cols: Featured Big Post */}
            <article className="lg:col-span-6 group cursor-pointer">
              <div className="h-60 sm:h-64 overflow-hidden mb-3 bg-white shadow-xs">
                <img
                  src={
                    data.featuredNews?.image ||
                    luatSu8DefaultData.featuredNews.image
                  }
                  alt={data.featuredNews?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm uppercase text-[#222222] group-hover:text-[#12489c] transition-colors mb-1">
                {data.featuredNews?.title ||
                  luatSu8DefaultData.featuredNews.title}
              </h3>
              <div className="w-7 h-0.5 bg-gray-300 mb-2" />
              <p className="text-[11px] text-gray-500 leading-relaxed">
                {data.featuredNews?.excerpt ||
                  luatSu8DefaultData.featuredNews.excerpt}
              </p>
            </article>

            {/* Right 6 Cols: 3 Stacked Horizontal Posts */}
            <div className="lg:col-span-6 space-y-5">
              {(data.news || luatSu8DefaultData.news || []).slice(0, 3).map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-12 gap-4 items-start group cursor-pointer"
                >
                  <div className="col-span-5 h-24 overflow-hidden bg-white shadow-2xs">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-7">
                    <h4 className="font-bold text-xs text-[#222222] group-hover:text-[#12489c] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="block text-[10px] text-gray-400 my-1">
                      {item.date}
                    </span>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHITE 4-COLUMN FOOTER + BOTTOM BLUE COPYRIGHT BAR */}
      <footer id="lien-he" className="bg-white border-t border-gray-200 pt-14 pb-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1 (4 Cols): Logo & Contact Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#12489c] bg-[#12489c]/5 flex items-center justify-center text-[#12489c]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-base font-extrabold text-[#12489c]">
                  {data.business.name}
                </span>
                <span className="block text-[10px] text-gray-500">
                  Luật Di Trú &amp; Định Cư Quốc Tế
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-gray-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#12489c] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#12489c] shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#12489c] shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 2 (2 Cols): Giới thiệu */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase text-[#12489c] pb-2 mb-3 border-b-2 border-[#12489c]">
              GIỚI THIỆU
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <a href="#ve-chung-toi" className="hover:text-[#12489c]">
                  • Giới thiệu
                </a>
              </li>
              <li>
                <a href="#dich-vu" className="hover:text-[#12489c]">
                  • Dịch vụ
                </a>
              </li>
              <li>
                <a href="#tin-tuc" className="hover:text-[#12489c]">
                  • Cẩm nang
                </a>
              </li>
              <li>
                <a href="#lien-he" className="hover:text-[#12489c]">
                  • Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 (3 Cols): Dịch vụ */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase text-[#12489c] pb-2 mb-3 border-b-2 border-[#12489c]">
              DỊCH VỤ
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              {(data.services || luatSu8DefaultData.services || []).map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => openConsultation(s.title)}
                    className="hover:text-[#12489c] text-left cursor-pointer"
                  >
                    • {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 (3 Cols): Interactive Map Box */}
          <div className="lg:col-span-3">
            <div className="relative h-40 rounded border border-gray-200 overflow-hidden bg-[#eef2f6] shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
                alt="Bản đồ văn phòng luật"
                className="w-full h-full object-cover opacity-80 transition-transform duration-300"
                style={{ transform: `scale(${1 + (mapZoom - 14) * 0.08})` }}
              />
              {/* Top-left Map Info Card */}
              <div className="absolute top-2 left-2 bg-white/95 p-2 rounded shadow text-[10px] max-w-[150px]">
                <p className="font-bold text-gray-800 truncate">
                  {data.business.name}
                </p>
                <p className="text-[#12489c] hover:underline cursor-pointer">
                  Xem bản đồ lớn hơn
                </p>
              </div>
              {/* Center Map Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full shadow">
                <MapPin className="w-4 h-4 text-red-600 fill-red-600/20" />
                <span className="text-[10px] font-bold text-red-700">
                  {data.business.name}
                </span>
              </div>
              {/* Zoom Controls */}
              <div className="absolute bottom-2 right-2 bg-white rounded shadow flex flex-col divide-y divide-gray-200">
                <button
                  type="button"
                  onClick={() => setMapZoom((z) => Math.min(z + 1, 18))}
                  className="p-1 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  aria-label="Phóng to"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setMapZoom((z) => Math.max(z - 1, 12))}
                  className="p-1 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  aria-label="Thu nhỏ"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#12489c] py-3 text-center text-[11px] text-white">
        © Bản quyền thuộc về <strong>{data.business.name}</strong> — Tư vấn Luật Di Trú &amp; Định
        Cư Quốc Tế.
      </div>

      {/* Consultation Modal */}
      {consultModalOpen && (
        <div
          id="dang-ky-tu-van"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setConsultModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-extrabold uppercase text-[#12489c] mb-1">
              Đăng Ký Thẩm Định Hồ Sơ Di Trú
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Luật sư di trú {data.business.name} sẽ đánh giá điểm di trú và liên hệ tư vấn miễn phí.
            </p>

            {consultSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#12489c] mx-auto mb-3" />
                <p className="font-bold text-sm text-gray-800 mb-1">
                  Đã gửi yêu cầu tư vấn thành công!
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Chuyên viên pháp lý phụ trách diện <strong>{selectedVisaService}</strong> sẽ gọi
                  lại cho Quý khách trong vòng 15 phút.
                </p>
                <button
                  type="button"
                  onClick={() => setConsultModalOpen(false)}
                  className="bg-[#12489c] text-white text-xs font-bold uppercase px-6 py-2 rounded-full cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultSubmitted(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#12489c]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Nhập số điện thoại liên hệ"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#12489c]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Diện thị thực / Dịch vụ quan tâm
                  </label>
                  <input
                    type="text"
                    value={selectedVisaService}
                    onChange={(e) => setSelectedVisaService(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#12489c]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#12489c] hover:bg-[#0d3677] text-white font-bold uppercase py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  GỬI YÊU CẦU TƯ VẤN
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
