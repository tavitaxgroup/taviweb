"use client";

import React, { useState } from "react";
import {
  Leaf,
  Globe,
  Recycle,
  Play,
  Check,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  dichVuVeSinh6DefaultData,
  type VeSinh6Data
} from "@/template-sources/dich_vu_ve_sinh_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: VeSinh6Data = adaptClonedTemplateData(
    dichVuVeSinh6DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(
    data.services?.[0]?.title || "Giải pháp quản lý & xử lý rác thải"
  );
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const openContact = (topic?: string) => {
    if (topic) setSelectedSolution(topic);
    setContactSubmitted(false);
    setContactModalOpen(true);
  };

  const gallery = data.galleryImages || dichVuVeSinh6DefaultData.galleryImages;

  return (
    <div className="min-h-screen bg-white text-[#1e2e29] font-sans selection:bg-[#f4a924] selection:text-[#19362e]">
      {/* 1. DARK FOREST GREEN ROUNDED-BOTTOM HERO + FLOATING PILL NAVBAR */}
      <div id="trang-chu" className="bg-[#19362e] text-white rounded-b-[42px] sm:rounded-b-[64px] pt-6 pb-32 sm:pb-44 px-4 relative">
        {/* Floating Pill Header */}
        <header className="max-w-4xl mx-auto bg-[#294940]/90 backdrop-blur-md rounded-full px-5 sm:px-7 h-14 flex items-center justify-between shadow-lg border border-white/10">
          {/* Brand Logo */}
          <a href="#trang-chu" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#f4a924] flex items-center justify-center text-[#19362e] shadow-xs">
              <Leaf className="w-4 h-4 fill-[#19362e]" />
            </div>
            <div className="leading-none">
              <span className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                {data.business.name}
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-[#f4a924] mt-0.5">
                GREEN ENVIRONMENT
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-white/85">
            <a
              href="#trang-chu"
              className="text-white border-b-2 border-[#f4a924] pb-0.5 font-semibold"
            >
              Trang Chủ
            </a>
            <a href="#ve-chung-toi" className="hover:text-[#f4a924] transition-colors">
              Giới Thiệu
            </a>
            <a href="#thu-vien" className="hover:text-[#f4a924] transition-colors">
              Thư Viện
            </a>
            <a href="#quy-moi-truong" className="hover:text-[#f4a924] transition-colors">
              Sự Kiện
            </a>
            <a href="#tin-tuc" className="hover:text-[#f4a924] transition-colors">
              Tin Tức
            </a>
            <a href="#lien-he" className="hover:text-[#f4a924] transition-colors">
              Liên Hệ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-white hover:text-[#f4a924]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden max-w-md mx-auto mt-2 bg-[#25433b] rounded-2xl p-4 space-y-2 text-xs font-semibold text-white border border-white/10">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#f4a924]"
            >
              Trang Chủ
            </a>
            <a
              href="#ve-chung-toi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giới Thiệu
            </a>
            <a
              href="#thu-vien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Thư Viện
            </a>
            <a
              href="#quy-moi-truong"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Sự Kiện
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Liên Hệ
            </a>
          </div>
        )}

        {/* Hero Center Text */}
        <div className="max-w-3xl mx-auto text-center mt-12 sm:mt-16">
          <h1 className="text-2xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-tight mb-4">
            <span className="block text-white">
              {data.heroTitleLine1 || "Cùng nhau xây dựng một tương lai xanh"}
            </span>
            <span className="block mt-1">
              {data.heroTitleLine2Prefix || "Giải pháp "}
              <span className="text-[#f4a924]">
                {data.heroTitleHighlight || "quản lý rác thải hiệu quả"}
              </span>
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed mb-7">
            {data.hero.subtitle}
          </p>

          <button
            type="button"
            onClick={() => openContact()}
            className="bg-[#f4a924] hover:bg-[#e09612] text-[#19362e] text-xs font-extrabold px-6 py-2.5 rounded-md shadow-md transition-colors cursor-pointer"
          >
            {data.hero.ctaText || "Khám Phá Ngay"}
          </button>
        </div>
      </div>

      {/* Overlapping Video Card below Hero */}
      <div className="max-w-3xl mx-auto px-4 -mt-24 sm:-mt-36 relative z-20">
        <div
          onClick={() => setVideoModalOpen(true)}
          className="relative h-60 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group border-4 border-white/15"
        >
          <img
            src={data.heroVideoCoverImage || data.hero.backgroundImage}
            alt="Quy trình phân loại và xử lý rác thải"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm border border-white/70 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. HÀNH ĐỘNG XANH VÌ TƯƠNG LAI */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#19362e] mb-8">
            Hành Động Xanh Vì Tương Lai
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(data.greenActions || dichVuVeSinh6DefaultData.greenActions).map(
              (act) => (
                <div
                  key={act.id}
                  onClick={() => openContact(act.title)}
                  className="border border-gray-200 hover:border-[#19362e] rounded-xl p-6 text-center transition-all hover:shadow-md cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#19362e]/10 text-[#19362e] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#19362e] group-hover:text-white transition-colors">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-extrabold text-[#19362e]">
                    {act.title}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 3. VỀ CHÚNG TÔI (OVERLAPPING DUAL IMAGE COLLAGE) */}
      <section id="ve-chung-toi" className="py-16 bg-[#f3f5f4]">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left 6 Cols: Text + Checklist */}
          <div className="md:col-span-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#19362e] mb-2">
              Về Chúng Tôi
            </h2>
            <h3 className="text-xs sm:text-sm font-bold text-[#2b423b] mb-3 leading-snug">
              {data.business.aboutTitle}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              {data.business.aboutText?.[0]}
            </p>

            <ul className="space-y-2.5 text-[11px] text-gray-600 mb-6">
              {(data.aboutChecklist || dichVuVeSinh6DefaultData.aboutChecklist).map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#19362e] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>

            <button
              type="button"
              onClick={() => openContact("Tư vấn dịch vụ vệ sinh & môi trường")}
              className="bg-[#19362e] hover:bg-[#112620] text-white text-xs font-bold px-5 py-2 rounded-md transition-colors cursor-pointer"
            >
              Giới Thiệu
            </button>
          </div>

          {/* Right 6 Cols: Overlapping Collage */}
          <div className="md:col-span-6 relative pb-8 pl-6 sm:pl-12">
            <div className="h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={data.aboutMainImage}
                alt="Chiến dịch thu gom rác thải"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-44 sm:w-52 h-48 sm:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
              <img
                src={data.aboutInsetImage}
                alt="Thùng phân loại rác tái chế"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. GIẢI PHÁP XỬ LÝ RÁC THẢI (4 COLUMNS) */}
      <section id="giai-phap" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#19362e] mb-10">
            Giải Pháp Xử Lý Rác Thải
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {(data.services || dichVuVeSinh6DefaultData.services || []).map((srv) => (
              <div
                key={srv.id}
                onClick={() => openContact(srv.title)}
                className="group cursor-pointer"
              >
                <div className="h-40 rounded-xl overflow-hidden mb-3 shadow-xs">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-extrabold text-xs text-[#19362e] group-hover:text-[#f4a924] transition-colors mb-1.5">
                  {srv.title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-4">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => openContact()}
              className="bg-[#19362e] hover:bg-[#112620] text-white text-xs font-bold px-6 py-2 rounded-md transition-colors cursor-pointer"
            >
              Xem Thêm
            </button>
          </div>
        </div>
      </section>

      {/* 5. QUỸ VỀ MÔI TRƯỜNG (WHITE CARD WITH 4 PROGRESS BARS) */}
      <section id="quy-moi-truong" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#19362e] mb-8">
            Quỹ Về Môi Trường
          </h2>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left 5 Cols: Image + Green Recycle Badge */}
            <div className="md:col-span-5 relative">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#16a34a] flex items-center justify-center mb-3">
                <Recycle className="w-8 h-8" />
              </div>
              <div className="h-64 rounded-xl overflow-hidden">
                <img
                  src={data.fundImage}
                  alt={data.fundTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right 7 Cols: Title + 2x2 Progress Metrics */}
            <div className="md:col-span-7">
              <h3 className="text-sm sm:text-base font-extrabold text-[#19362e] mb-2">
                {data.fundTitle}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                {data.fundDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {(data.fundMetrics || dichVuVeSinh6DefaultData.fundMetrics).map(
                  (fm) => (
                    <div key={fm.id}>
                      <span className="block text-base font-black text-[#19362e]">
                        {fm.value}
                      </span>
                      <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
                        <span className="line-clamp-1">{fm.label}</span>
                        <span className="font-bold text-[#19362e]">
                          {fm.percent}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#19362e] rounded-full"
                          style={{ width: `${fm.percent}%` }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THƯ VIỆN XANH (3-COLUMN BENTO MASONRY GRID) */}
      <section id="thu-vien" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#19362e] mb-10">
            Thư Viện Xanh
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {/* Col 1 */}
            <div className="space-y-4">
              {gallery[0] && (
                <div className="h-64 rounded-2xl overflow-hidden shadow-xs">
                  <img
                    src={gallery[0].image}
                    alt={gallery[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              {gallery[1] && (
                <div className="h-36 rounded-2xl overflow-hidden shadow-xs">
                  <img
                    src={gallery[1].image}
                    alt={gallery[1].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>

            {/* Col 2 */}
            <div className="space-y-4">
              {gallery[2] && (
                <div className="h-36 rounded-2xl overflow-hidden shadow-xs">
                  <img
                    src={gallery[2].image}
                    alt={gallery[2].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              {gallery[3] && (
                <div className="h-64 rounded-2xl overflow-hidden shadow-xs">
                  <img
                    src={gallery[3].image}
                    alt={gallery[3].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>

            {/* Col 3 */}
            <div className="space-y-4">
              {gallery[4] && (
                <div className="h-64 rounded-2xl overflow-hidden shadow-xs">
                  <img
                    src={gallery[4].image}
                    alt={gallery[4].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              {gallery[5] && (
                <div className="h-36 rounded-2xl overflow-hidden shadow-xs">
                  <img
                    src={gallery[5].image}
                    alt={gallery[5].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => openContact("Báo giá dịch vụ vệ sinh & thu gom rác thải")}
              className="bg-[#19362e] hover:bg-[#112620] text-white text-xs font-bold px-6 py-2 rounded-md transition-colors cursor-pointer"
            >
              Xem Thêm
            </button>
          </div>
        </div>
      </section>

      {/* 7. ĐÁNH GIÁ TỪ CỘNG ĐỒNG (DARK FOREST GREEN SECTION) */}
      <section className="py-16 bg-[#19362e] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-white mb-10">
            Đánh Giá Từ Cộng Đồng
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || dichVuVeSinh6DefaultData.testimonials || []).map(
              (item) => (
                <div
                  key={item.id}
                  className="bg-[#27463e] rounded-xl p-6 text-center flex flex-col justify-between border border-white/5 shadow-md"
                >
                  <p className="text-[11px] text-white/85 leading-relaxed mb-6">
                    {item.content}
                  </p>
                  <div className="flex flex-col items-center">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-9 h-9 rounded-full object-cover border border-[#f4a924] mb-2"
                    />
                    <span className="text-xs font-bold text-[#f4a924]">
                      {item.author}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 8. TIN TỨC MÔI TRƯỜNG + LIÊN HỆ NGAY CHO CHÚNG TÔI */}
      <section id="tin-tuc" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#19362e]">
              Tin Tức Môi Trường
            </h2>
            <button
              type="button"
              onClick={() => openContact()}
              className="bg-[#19362e] hover:bg-[#112620] text-white text-[11px] font-bold px-4 py-1.5 rounded-md cursor-pointer"
            >
              Xem Thêm
            </button>
          </div>

          {/* 3 Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {(data.news || dichVuVeSinh6DefaultData.news || []).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="h-40 rounded-xl overflow-hidden mb-3 shadow-xs">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-xs text-[#19362e] group-hover:text-[#f4a924] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>

          {/* Liên Hệ Ngay Cho Chúng Tôi Horizontal Strip */}
          <div
            id="lien-he"
            className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="max-w-sm">
              <h3 className="text-base sm:text-lg font-extrabold text-[#19362e] mb-1">
                Liên Hệ Ngay Cho Chúng Tôi
              </h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Liên hệ với chúng tôi để cùng chung tay, hỗ trợ mục tiêu xử lý rác thải của chúng tôi
              </p>
            </div>

            {newsletterDone ? (
              <div className="bg-emerald-50 border border-emerald-200 text-[#19362e] text-xs font-semibold px-4 py-2.5 rounded-md flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                <span>Đã đăng ký đồng hành cùng {data.business.name}!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterDone(true);
                }}
                className="flex w-full md:w-auto gap-2"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email..."
                  className="flex-1 md:w-64 h-10 bg-gray-50 border border-gray-200 rounded-md px-3 text-xs focus:outline-none focus:border-[#19362e]"
                />
                <button
                  type="submit"
                  className="h-10 px-5 bg-[#19362e] hover:bg-[#112620] text-white text-xs font-bold rounded-md transition-colors cursor-pointer shrink-0"
                >
                  Đăng Ký
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. DARK FOREST GREEN FOOTER */}
      <footer className="bg-[#19362e] text-white pt-14 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
            {/* Col 1 (4 Cols) */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#f4a924] flex items-center justify-center text-[#19362e]">
                  <Leaf className="w-4 h-4 fill-[#19362e]" />
                </div>
                <div className="leading-none">
                  <span className="block text-sm font-extrabold uppercase text-white">
                    {data.business.name}
                  </span>
                  <span className="block text-[9px] font-bold uppercase text-[#f4a924] mt-0.5">
                    GREEN ENVIRONMENT
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-white/75 leading-relaxed mb-4">
                Hợp tác vì hành tinh xanh: Cùng giảm thiểu, tái chế, xử lý rác thải, bảo vệ môi
                trường và tạo không gian sống lành mạnh cho thế hệ mai sau.
              </p>
              <div className="flex items-center gap-2">
                {["f", "yt", "in", "ig"].map((s) => (
                  <span
                    key={s}
                    className="w-6 h-6 rounded bg-[#f4a924] text-[#19362e] text-[10px] font-extrabold flex items-center justify-center"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white mb-3">Về chúng tôi</h4>
              <ul className="space-y-2 text-[11px] text-white/75">
                <li>
                  <a href="#ve-chung-toi" className="hover:text-[#f4a924]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#giai-phap" className="hover:text-[#f4a924]">
                    Giáo Dục Về Tái Chế
                  </a>
                </li>
                <li>
                  <a href="#giai-phap" className="hover:text-[#f4a924]">
                    Sáng Kiến Phát Triển Bền Vững
                  </a>
                </li>
                <li>
                  <a href="#quy-moi-truong" className="hover:text-[#f4a924]">
                    Đóng Góp Tài Chính
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-white mb-3">
                Hoạt Động Nổi Bật
              </h4>
              <ul className="space-y-2 text-[11px] text-white/75">
                <li>Bảo Trợ Trẻ Em</li>
                <li>Gia Nhập Cộng Đồng</li>
                <li>Dự Án Hỗ Trợ Lương Thực</li>
                <li>Chương Trình Toàn Thế Giới</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-white mb-3">
                Liên Kết Đối Tác
              </h4>
              <ul className="space-y-2 text-[11px] text-white/75">
                <li>Quyên Góp Tài Trợ</li>
                <li>Tham Gia Hành Động</li>
                <li>Hỗ Trợ Giáo Dục Trẻ Em</li>
                <li>Định Hướng Phát Triển Bền Vững</li>
              </ul>
            </div>
          </div>

          {/* Rounded Pill Copyright Bar */}
          <div className="bg-[#294940] rounded-lg py-3 px-4 text-center text-[11px] text-white/80">
            © Thiết kế và vận hành bởi <strong className="text-white">{data.business.name}</strong>{" "}
            — {data.business.address}
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#19362e] text-white rounded-2xl max-w-lg w-full p-6 text-center relative border border-white/15"
          >
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <Recycle className="w-12 h-12 text-[#f4a924] mx-auto mb-3" />
            <h3 className="text-base font-extrabold mb-2">
              Hành Trình Xử Lý &amp; Tái Chế Chất Thải — {data.business.name}
            </h3>
            <p className="text-xs text-white/80 leading-relaxed mb-5">
              Hệ thống thu gom, phân loại và tái chế rác thải khép kín giúp giảm 85% lượng rác thải
              nhựa ra môi trường tự nhiên.
            </p>
            <button
              type="button"
              onClick={() => {
                setVideoModalOpen(false);
                openContact("Đăng ký hợp tác thu gom & tái chế rác thải");
              }}
              className="bg-[#f4a924] text-[#19362e] text-xs font-extrabold px-6 py-2 rounded-md cursor-pointer"
            >
              Đăng Ký Hợp Tác Ngay
            </button>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-extrabold text-[#19362e] mb-1">
              Đăng Ký Dịch Vụ Vệ Sinh &amp; Môi Trường
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Chuyên viên {data.business.name} sẽ khảo sát và gửi báo giá giải pháp tối ưu.
            </p>

            {contactSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] mx-auto mb-3" />
                <p className="font-bold text-sm text-gray-800 mb-1">
                  Đã gửi thông tin thành công!
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Cảm ơn bạn đã quan tâm đến <strong>{selectedSolution}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setContactModalOpen(false)}
                  className="bg-[#19362e] text-white text-xs font-bold px-6 py-2 rounded-md cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Họ tên / Đơn vị *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ tên hoặc tên đơn vị"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#19362e]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Nhập số điện thoại"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#19362e]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Hạng mục quan tâm
                  </label>
                  <input
                    type="text"
                    value={selectedSolution}
                    onChange={(e) => setSelectedSolution(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#19362e]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#19362e] hover:bg-[#112620] text-white font-bold py-2.5 rounded-md transition-colors cursor-pointer"
                >
                  GỬI YÊU CẦU
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
