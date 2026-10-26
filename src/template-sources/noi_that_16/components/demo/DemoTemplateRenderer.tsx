"use client";

import React, { useState } from "react";
import {
  Search,
  Gem,
  User,
  Send,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat16DefaultData,
  type NoiThat16Data
} from "@/template-sources/noi_that_16/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NoiThat16Data = adaptClonedTemplateData(
    noiThat16DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePackageTabId, setActivePackageTabId] = useState(
    data.packageTabs[0]?.id || "tab-chung-cu"
  );

  // Hero consultation form state
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formNote, setFormNote] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeTab =
    data.packageTabs.find((t) => t.id === activePackageTabId) || data.packageTabs[0];
  const testimonials = data.testimonials || noiThat16DefaultData.testimonials || [];
  const newsList = data.news || noiThat16DefaultData.news || [];

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormName("");
    setFormPhone("");
    setFormEmail("");
    setFormAddress("");
    setFormNote("");
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1e293b] font-sans selection:bg-[#00467f] selection:text-white"
    >
      {/* 1. DARK TRANSLUCENT TOP NAVBAR + LUXURY APARTMENT HERO WITH RIGHT "NHẬN TƯ VẤN" FORM CARD */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex flex-col justify-between overflow-hidden bg-slate-900 text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/75" />

        {/* Top Navbar */}
        <header className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-8 py-4 flex items-center justify-between border-b border-white/15">
          {/* Left Diamond Logo + Brand Name */}
          <a href="#top" className="flex items-center gap-2.5">
            <Gem className="w-7 h-7 text-white" />
            <div className="leading-none">
              <span className="block text-base sm:text-lg font-extrabold uppercase tracking-wider text-white">
                {data.business.name}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.28em] text-white/75 mt-0.5">
                STORE & INTERIOR
              </span>
            </div>
          </a>

          {/* Right Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-white/95">
            <a href="#top" className="text-white">
              TRANG CHỦ
            </a>
            <a
              href="#design-grid"
              className="flex items-center gap-1 hover:text-sky-300 transition-colors"
            >
              <span>THIẾT KẾ NỘI THẤT</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#construction-grid"
              className="flex items-center gap-1 hover:text-sky-300 transition-colors"
            >
              <span>THI CÔNG NỘI THẤT</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#packages"
              className="flex items-center gap-1 hover:text-sky-300 transition-colors"
            >
              <span>TRỌN GÓI</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#projects" className="hover:text-sky-300 transition-colors">
              DỰ ÁN NỔI BẬT
            </a>
            <a href="#news" className="hover:text-sky-300 transition-colors">
              TIN TỨC
            </a>
            <a href="#footer" className="hover:text-sky-300 transition-colors">
              LIÊN HỆ
            </a>
            <a href="#design-grid" aria-label="Tìm kiếm" className="hover:text-sky-300">
              <Search className="w-3.5 h-3.5" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </header>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="relative z-30 lg:hidden bg-slate-900/95 px-6 py-4 space-y-2 text-xs font-bold uppercase tracking-wider border-b border-white/15">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-sky-300"
            >
              Giới thiệu
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-sky-300"
            >
              Thiết kế thi công trọn gói
            </a>
            <a
              href="#design-grid"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-sky-300"
            >
              Thiết kế nội thất
            </a>
            <a
              href="#construction-grid"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-sky-300"
            >
              Thi công nội thất
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-sky-300"
            >
              Dự án nổi bật
            </a>
          </div>
        )}

        {/* Hero Split Content: Left Headline + Right "NHẬN TƯ VẤN" Form Card */}
        <div
          id="consult-form"
          className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8 my-auto py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Title */}
            <div className="lg:col-span-7 space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white drop-shadow">
                {data.business.name}
              </h1>
              <p className="text-sm sm:text-lg font-semibold uppercase tracking-widest text-white/90">
                {data.hero.subtitle || "THIẾT KẾ ĐỘC ĐÁO - THI CÔNG CHÍNH XÁC"}
              </p>
            </div>

            {/* Right Dark Translucent Form Card */}
            <div className="lg:col-span-5 bg-black/55 backdrop-blur-md border border-white/15 p-6 sm:p-7 rounded shadow-2xl">
              <h2 className="text-base sm:text-lg font-bold uppercase text-center text-white mb-4">
                NHẬN TƯ VẤN
              </h2>

              {formSubmitted ? (
                <div className="bg-[#00467f]/80 border border-sky-400/50 p-5 text-center rounded space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-sky-300 mx-auto" />
                  <p className="text-xs font-bold text-white">
                    Đã gửi yêu cầu tư vấn thiết kế! Kiến trúc sư trưởng của {data.business.name} sẽ
                    liên hệ ngay.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Họ và tên"
                    className="w-full bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="Số điện thoại"
                    className="w-full bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                  />
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                  />
                  <input
                    type="text"
                    value={formAddress}
                    onChange={(e) => setFormAddress(e.target.value)}
                    placeholder="Địa chỉ công trình"
                    className="w-full bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                  />
                  <textarea
                    rows={3}
                    value={formNote}
                    onChange={(e) => setFormNote(e.target.value)}
                    placeholder="Lời nhắn (loại hình căn hộ, biệt thự, diện tích...)"
                    className="w-full bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#00467f] hover:bg-[#003561] text-white text-xs font-bold uppercase tracking-wider py-2.5 transition-colors"
                  >
                    GỬI LỜI NHẮN
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPLIT "GIỚI THIỆU NHÀ ĐẸP Ở ĐÂY" & 3 HORIZONTAL STAT ROWS */}
      <section id="about" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Intro & Photo */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#00467f]">
                {data.business.aboutTitle || `Giới thiệu ${data.business.name}`}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
              <div className="h-44 sm:h-48 overflow-hidden rounded shadow-xs">
                <img
                  src={data.aboutImage}
                  alt="Không gian nội thất mẫu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right 3 Horizontal Stat Rows */}
            <div className="lg:col-span-6 divide-y divide-slate-200">
              {data.statRows.map((row) => (
                <div
                  key={row.id}
                  className="py-5 first:pt-0 last:pb-0 grid grid-cols-12 gap-4 items-center"
                >
                  <div className="col-span-4 border-r border-slate-200 pr-3">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#00467f]">
                      {row.number}
                    </span>
                  </div>
                  <div className="col-span-8 pl-2">
                    <h3 className="text-xs sm:text-sm font-bold text-[#00467f] mb-1">
                      {row.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {row.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEEP NAVY (#00467f) "THIẾT KẾ THI CÔNG NỘI THẤT TRỌN GÓI" INTERACTIVE TAB BOX */}
      <section id="packages" className="py-16 lg:py-20 bg-[#00467f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center text-white max-w-2xl mx-auto mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase mb-2">
              THIẾT KẾ THI CÔNG NỘI THẤT TRỌN GÓI
            </h2>
            <p className="text-xs text-white/80 leading-relaxed">
              Thiết kế thi công nội thất trọn gói giúp bạn tiết kiệm thời gian, tiết kiệm chi phí
              &gt;30%, tránh được sai sót không đồng nhất khi thiết kế và thi công là 2 đơn vị khác
              nhau.
            </p>
          </div>

          {/* White Inner Tab Container */}
          <div className="bg-white p-5 sm:p-7 rounded shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Vertical 6-Tab Menu */}
            <div className="md:col-span-3 border border-slate-200 divide-y divide-slate-200 flex flex-col">
              {data.packageTabs.map((tab) => {
                const isActive = tab.id === activeTab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActivePackageTabId(tab.id)}
                    className={`px-4 py-3 text-left text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-[#00467f] text-white"
                        : "bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Right Tab Content */}
            {activeTab && (
              <div className="md:col-span-9 flex flex-col justify-between">
                <div>
                  <div className="h-52 sm:h-64 overflow-hidden mb-4 bg-slate-100">
                    <img
                      src={activeTab.image}
                      alt={activeTab.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                    {activeTab.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {activeTab.description}
                  </p>
                </div>

                <div className="text-right">
                  <a
                    href="#consult-form"
                    className="text-xs font-bold text-[#00467f] hover:underline"
                  >
                    Xem thêm +
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. "THIẾT KẾ NỘI THẤT" (4x2 Category Photo Grid) */}
      <section id="design-grid" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#00467f] mb-2">
              THIẾT KẾ NỘI THẤT
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Lựa chọn dịch vụ của chúng tôi, quý khách sẽ có được những giải pháp tối ưu trong
              thiết kế nội thất, đảm bảo tiết kiệm chi phí và nâng cao trải nghiệm về một không gian
              sống hoàn hảo.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {data.designCategories.map((cat) => (
              <a
                key={cat.id}
                href="#consult-form"
                className="group relative h-64 sm:h-72 overflow-hidden bg-slate-900 block shadow-xs"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Bottom White Overlay Box */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 px-3 py-2 shadow">
                  <span className="block text-[10px] text-slate-500">{cat.prefix}</span>
                  <span className="block text-[11px] sm:text-xs font-extrabold uppercase text-slate-900 group-hover:text-[#00467f]">
                    {cat.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "THI CÔNG NỘI THẤT" (4x2 Construction Category Photo Grid) */}
      <section id="construction-grid" className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#00467f] mb-2">
              THI CÔNG NỘI THẤT
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {data.business.name} cung cấp những giải pháp toàn diện cho hạng mục thi công nội thất
              với đa dạng loại hình xây dựng.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {data.constructionCategories.map((cat) => (
              <a
                key={cat.id}
                href="#consult-form"
                className="group relative h-64 sm:h-72 overflow-hidden bg-slate-900 block shadow-xs"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 px-3 py-2 shadow">
                  <span className="block text-[10px] text-slate-500">{cat.prefix}</span>
                  <span className="block text-[11px] sm:text-xs font-extrabold uppercase text-slate-900 group-hover:text-[#00467f]">
                    {cat.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "BÁO CHÍ NÓI VỀ CHÚNG TÔI" SPLIT NAVY BOX + 6 MEDIA LOGOS */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 border border-slate-100 shadow-sm overflow-hidden">
            {/* Left Navy Box */}
            <div className="md:col-span-5 bg-[#00467f] text-white p-8 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-2 mb-3">
                <Gem className="w-6 h-6 text-white" />
                <span className="text-base font-extrabold uppercase tracking-wider">
                  {data.business.name}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide">
                BÁO CHÍ NÓI VỀ CHÚNG TÔI
              </h3>
            </div>

            {/* Right 3x2 Press Logos */}
            <div className="md:col-span-7 bg-[#f8fafc] p-6 grid grid-cols-3 gap-4 items-center">
              {data.pressLogos.map((pr) => (
                <div
                  key={pr.id}
                  className="bg-white h-16 rounded flex items-center justify-center p-3 shadow-2xs"
                >
                  <span className={`text-xs sm:text-sm font-black uppercase ${pr.color}`}>
                    {pr.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. "DỰ ÁN CỦA CHÚNG TÔI" (4-Column Strip) + "Ý KIẾN KHÁCH HÀNG" */}
      <section id="projects" className="py-14 bg-white">
        <div className="text-center max-w-2xl mx-auto px-4 mb-8">
          <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#00467f] mb-1.5">
            DỰ ÁN CỦA CHÚNG TÔI
          </h2>
          <p className="text-xs text-slate-500">
            Phong cách đẹp mang lại ngôi nhà đẹp. Nội thất đồ gỗ {data.business.name} mang đến những
            giá trị hoàn hảo cho ngôi nhà Việt.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {data.projectStripImages.map((img, idx) => (
            <div key={idx} className="h-48 sm:h-56 overflow-hidden border-r border-white">
              <img
                src={img}
                alt={`Dự án hoàn thiện ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Ý KIẾN KHÁCH HÀNG */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-lg sm:text-xl font-extrabold uppercase text-center text-[#00467f] mb-10">
            Ý KIẾN KHÁCH HÀNG
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {testimonials.map((t) => (
              <div key={t.id} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-200 text-white flex items-center justify-center mb-3">
                  <User className="w-6 h-6" />
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  <strong className="text-[#00467f]">{t.author}</strong> / {t.role}
                </p>
                <p className="text-xs italic text-slate-500 leading-relaxed">{t.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "TIN TỨC THIẾT KẾ NỘI THẤT" (Bento 1 Large Left + 3 Right Cards) */}
      <section id="news" className="py-14 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-lg sm:text-xl font-extrabold uppercase text-center text-[#00467f] mb-10">
            TIN TỨC THIẾT KẾ NỘI THẤT
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Large Featured News */}
            <div className="lg:col-span-6 relative rounded overflow-hidden group min-h-[340px]">
              <img
                src={data.featuredNews.image}
                alt={data.featuredNews.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3.5">
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
                  {data.featuredNews.title}
                </h3>
                <p className="text-[11px] text-slate-600 line-clamp-1">
                  {data.featuredNews.excerpt}
                </p>
              </div>
            </div>

            {/* Right Top Wide + Bottom 2 Square News */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {newsList[0] && (
                <div className="col-span-2 relative rounded overflow-hidden h-44 group">
                  <img
                    src={newsList[0].image}
                    alt={newsList[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/90 p-2.5">
                    <h3 className="text-xs font-extrabold text-slate-900 line-clamp-1">
                      {newsList[0].title}
                    </h3>
                    <p className="text-[10px] text-slate-500 line-clamp-1">
                      {newsList[0].excerpt}
                    </p>
                  </div>
                </div>
              )}

              {newsList.slice(1, 3).map((post) => (
                <div
                  key={post.id}
                  className="col-span-1 relative rounded overflow-hidden h-44 group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 p-2">
                    <h3 className="text-[11px] font-extrabold text-slate-900 line-clamp-1">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT GRAY 4-COLUMN LINKS SECTION + DARK SHOWROOM FOOTER BANNER */}
      <section className="py-12 bg-[#f3f4f6] border-t border-slate-200 text-xs text-slate-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold uppercase text-slate-800 mb-2 pb-1 border-b border-slate-300">
              ĐĂNG KÝ
            </h4>
            <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
              Bạn sẽ luôn nhận được thông tin về sản phẩm mới và khuyến mại đặc biệt nhất
            </p>
            <div className="flex bg-white border border-slate-200 px-3 py-1.5">
              <input
                type="email"
                placeholder="Email..."
                className="bg-transparent text-xs flex-1 focus:outline-none"
              />
              <Send className="w-3.5 h-3.5 text-[#00467f]" />
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-slate-800 mb-2 pb-1 border-b border-slate-300">
              HỖ TRỢ KHÁCH HÀNG
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-500">
              <li>Quy trình làm việc</li>
              <li>Vận chuyển - Giao nhận</li>
              <li>Bảo hành - Đổi trả</li>
              <li>Chính sách bảo mật</li>
              <li>Hình thức thanh toán</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-slate-800 mb-2 pb-1 border-b border-slate-300">
              THIẾT KẾ
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-500">
              <li>Nội thất phòng khách</li>
              <li>Nội thất biệt thự</li>
              <li>Nội thất nhà bếp</li>
              <li>Nội thất nhà phố</li>
              <li>Nội thất phòng ngủ</li>
              <li>Nội thất văn phòng</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-slate-800 mb-2 pb-1 border-b border-slate-300">
              THI CÔNG
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-500">
              <li>Nội thất chung cư</li>
              <li>Nội thất biệt thự</li>
              <li>Nội thất nhà bếp</li>
              <li>Nội thất nhà phố</li>
              <li>Nội thất phòng khách</li>
              <li>Nội thất văn phòng</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DARK SHOWROOM FOOTER BANNER */}
      <footer id="footer" className="relative bg-slate-900 text-white overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt="Footer Background"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3 flex items-center gap-2.5">
            <Gem className="w-8 h-8 text-white" />
            <div>
              <span className="block text-lg font-extrabold uppercase">{data.business.name}</span>
              <span className="block text-[9px] uppercase tracking-widest text-white/70">
                STORE & INTERIOR
              </span>
            </div>
          </div>

          <div className="md:col-span-5 space-y-1.5 text-[11px] text-white/85">
            <p className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>Trụ sở & Showroom: {data.business.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>Hotline / Zalo: {primaryPhone}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>{primaryEmail}</span>
            </p>
          </div>

          <div className="md:col-span-4 text-center space-y-3">
            <p className="text-[11px] text-white/80 leading-relaxed">
              Thiết kế thi công nội thất trọn gói giúp bạn tiết kiệm thời gian, tiết kiệm chi phí
              &gt;30%.
            </p>
            <a
              href="#consult-form"
              className="inline-block bg-[#00467f] hover:bg-[#005ba3] text-white text-xs font-bold uppercase px-6 py-2.5 rounded-xs transition-colors"
            >
              LIÊN HỆ NGAY
            </a>
          </div>
        </div>

        <div className="relative z-10 bg-black/80 text-center py-3 text-[11px] text-white/50">
          © Thiết kế và lập trình bởi {data.business.name}
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
