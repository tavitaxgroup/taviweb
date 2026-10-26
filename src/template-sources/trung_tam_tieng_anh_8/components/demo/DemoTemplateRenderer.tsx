"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ChevronDown,
  Binoculars,
  Gem,
  Boxes,
  Send,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh8DefaultData,
  type TrungTamTiengAnh8Data
} from "@/template-sources/trung_tam_tieng_anh_8/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function BlueSectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-[#1476be]">
        {title}
      </h2>
      <div className="mt-2.5 flex items-center justify-center">
        <span className="w-16 h-0.5 bg-[#1476be]/30" />
        <span className="w-8 h-1 bg-[#1476be] rounded-full" />
        <span className="w-16 h-0.5 bg-[#1476be]/30" />
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh8Data = adaptClonedTemplateData(
    trungTamTiengAnh8DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Du học Nhật Bản ngành Điều dưỡng");
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [footerEmailDone, setFooterEmailDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "tuvan@nhatanhedu.vn";
  const pillars =
    data.visionPillars || trungTamTiengAnh8DefaultData.visionPillars;
  const majors =
    data.popularMajors || trungTamTiengAnh8DefaultData.popularMajors;
  const promo = data.promoBanner || trungTamTiengAnh8DefaultData.promoBanner;
  const academies =
    data.partnerAcademies || trungTamTiengAnh8DefaultData.partnerAcademies;
  const admissions =
    data.admissionsSection || trungTamTiengAnh8DefaultData.admissionsSection;
  const newsList = data.news || trungTamTiengAnh8DefaultData.news || [];
  const reviewItem =
    (data.testimonials || trungTamTiengAnh8DefaultData.testimonials || [])[0];

  const openConsultation = (topic?: string) => {
    if (topic) setSelectedTopic(topic);
    setConsultSubmitted(false);
    setConsultModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#1476be] selection:text-white">
      {/* 1. TOP OCEAN BLUE UTILITY BAR (#1476be) + WHITE HEADER */}
      <div className="bg-[#1476be] text-white text-[11px] py-1.5">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 text-white/95">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              <span>{data.business.address}</span>
            </span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 font-bold hover:text-yellow-200"
            >
              <Phone className="w-3 h-3" />
              <span>{primaryPhone}</span>
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3" />
              <span>{primaryEmail}</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 font-bold">
            <a href="#lien-he" className="hover:text-yellow-200">
              f
            </a>
            <a href="#lien-he" className="hover:text-yellow-200">
              ◎
            </a>
            <a href="#lien-he" className="hover:text-yellow-200">
              𝕏
            </a>
          </div>
        </div>
      </div>

      {/* White Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between gap-4">
          {/* Fuji & Red Sun Emblem */}
          <a href="#trang-chu" className="flex items-center gap-2.5 shrink-0">
            <div className="w-12 h-10 relative flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-[#d81b28] absolute top-0.5" />
              <svg
                viewBox="0 0 64 32"
                className="w-12 h-6 relative z-10 mt-3"
                fill="none"
              >
                <path
                  d="M4 30L24 8L32 14L40 8L60 30H4Z"
                  fill="#1476be"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div>
              <span className="block text-sm font-black uppercase text-[#1476be] leading-none">
                {data.business.name}
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-wider text-[#d81b28] mt-0.5">
                DU HỌC NHẬT BẢN
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-extrabold uppercase text-[#222222]">
            <a
              href="#tam-nhin"
              className="hover:text-[#1476be] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#chuyen-nganh"
              className="inline-flex items-center gap-1 hover:text-[#1476be] transition-colors"
            >
              <span>DU HỌC NHẬT BẢN</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#truong-nhat-ngu"
              className="inline-flex items-center gap-1 hover:text-[#1476be] transition-colors"
            >
              <span>THÔNG TIN NGÀNH HỌC</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#tin-tuc" className="hover:text-[#1476be] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#1476be] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Search Box with Blue Button */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center border border-stone-300 rounded-xs overflow-hidden">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="px-3 py-1.5 text-xs w-36 focus:outline-none"
              />
              <button
                onClick={() => openConsultation()}
                className="bg-[#1476be] text-white px-2.5 py-1.5 cursor-pointer"
                aria-label="Tìm kiếm"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#1476be]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#tam-nhin"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#1476be]"
            >
              Giới thiệu
            </a>
            <a
              href="#chuyen-nganh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#1476be]"
            >
              Chuyên ngành thu hút tại Nhật
            </a>
            <a
              href="#truong-nhat-ngu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#1476be]"
            >
              Danh sách trường Nhật ngữ
            </a>
            <a
              href="#tuyen-sinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#1476be]"
            >
              Tuyển sinh du học Nhật Bản
            </a>
          </div>
        )}
      </header>

      {/* 2. TOKYO SKYLINE & GIANT RED RISING SUN HERO */}
      <section
        id="trang-chu"
        className="relative min-h-[420px] lg:min-h-[470px] bg-[#0e2a47] overflow-hidden flex items-center"
      >
        {/* Background Tokyo Tower & Rainbow Bridge Night View */}
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340]/75 via-[#0c2340]/35 to-transparent" />

        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          {/* Left Giant Red Rising Sun Circle matching TA011 */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="w-[320px] h-[320px] sm:w-[370px] sm:h-[370px] rounded-full bg-gradient-to-b from-[#f05232] via-[#e02424] to-[#b91c1c] text-white p-7 sm:p-9 flex flex-col justify-center items-center text-center shadow-2xl border-4 border-white/25 relative">
              <span className="text-[11px] font-semibold tracking-wider text-yellow-100">
                {data.business.name.toLowerCase()}.vn
              </span>
              <h1 className="mt-1 text-2xl sm:text-3xl font-black uppercase tracking-wide text-white drop-shadow">
                {data.hero.title}
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-yellow-200 mt-0.5">
                {data.hero.eyebrow || "Chắp cánh ước mơ !"}
              </p>

              {/* 2 Red Ribbon Bullet Bars */}
              <div className="w-full space-y-2 mt-4 text-left">
                <div className="bg-[#991b1b]/80 border-l-4 border-yellow-300 px-3.5 py-1.5 text-xs sm:text-sm font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                  <span>Miễn phí làm hồ sơ du học</span>
                </div>
                <div className="bg-[#991b1b]/80 border-l-4 border-yellow-300 px-3.5 py-1.5 text-xs sm:text-sm font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                  <span>Đảm bảo công việc tại Nhật</span>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-white/20">
                <span className="block text-[10px] uppercase tracking-wider text-yellow-100">
                  Hotline tư vấn miễn phí:
                </span>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="text-lg sm:text-xl font-black text-white hover:text-yellow-200"
                >
                  {primaryPhone}
                </a>
                <button
                  onClick={() => openConsultation()}
                  className="block mt-1 text-[10px] underline text-yellow-200 cursor-pointer mx-auto"
                >
                  * Gọi ngay để được tư vấn tốt nhất
                </button>
              </div>
            </div>
          </div>

          {/* Center-Right Smiling Student Holding Kyoto University Folder */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-64 sm:w-72 h-[340px] sm:h-[390px] overflow-hidden rounded-t-full border-4 border-white/80 shadow-2xl bg-white">
              <img
                src={
                  data.hero.images?.[1] ||
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85"
                }
                alt="Sinh viên Đại học Kyoto"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 inset-x-4 bg-white/95 text-[#1476be] py-2 px-3 text-center shadow font-serif font-bold text-xs border border-[#1476be]/30">
                Kyoto University • Học bổng Du học
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-COLUMN VISION / MISSION / MOTTO STRIP (RED - BLUE - RED) */}
      <section id="tam-nhin" className="max-w-5xl mx-auto px-4 sm:px-6 -mt-2 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg">
          {pillars.map((pil) => (
            <div
              key={pil.id}
              className={`p-7 text-center text-white space-y-2.5 ${
                pil.theme === "blue" ? "bg-[#1476be]" : "bg-[#d81b28]"
              }`}
            >
              <div className="w-10 h-10 mx-auto flex items-center justify-center text-white">
                {pil.icon === "vision" && <Binoculars className="w-7 h-7" />}
                {pil.icon === "mission" && <Gem className="w-7 h-7" />}
                {pil.icon === "motto" && <Boxes className="w-7 h-7" />}
              </div>
              <h3 className="text-sm font-extrabold">{pil.title}</h3>
              <p className="text-[11px] text-white/90 leading-relaxed">
                {pil.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECTION: CHUYÊN NGÀNH THU HÚT TẠI NHẬT (3x2 GRID) */}
      <section id="chuyen-nganh" className="py-14 lg:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <BlueSectionHeading title="CHUYÊN NGÀNH THU HÚT TẠI NHẬT" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {majors.map((mj) => (
              <div
                key={mj.id}
                onClick={() => openConsultation(`Ngành ${mj.title}`)}
                className="relative h-48 sm:h-52 overflow-hidden group cursor-pointer shadow-xs border border-stone-200"
              >
                <img
                  src={mj.image}
                  alt={mj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-3 text-center text-white px-3">
                  <h3 className="text-sm font-bold group-hover:text-yellow-300 transition-colors">
                    {mj.title}
                  </h3>
                  <span className="text-[10px] text-white/80">
                    {mj.salaryRange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROMOTIONAL BANNER: LƯƠNG LÀM THÊM > 25TR VNĐ - DU HỌC NHẬT BẢN */}
      <section className="pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div
            onClick={() => openConsultation("Chương trình vừa học vừa làm > 25tr VNĐ")}
            className="relative rounded-xs overflow-hidden bg-gradient-to-r from-[#0e4f6e] via-[#136f8a] to-[#0a4b63] text-white shadow-lg cursor-pointer grid grid-cols-1 lg:grid-cols-12 items-center"
          >
            {/* Left Torii Gate & Student Circles */}
            <div className="lg:col-span-6 relative h-56 sm:h-64 overflow-hidden">
              <img
                src={promo.toriiImage}
                alt="Cổng Torii Nhật Bản"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#11647e] hidden lg:block" />

              {/* Overlapping Circular Student Portraits */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg absolute bottom-3 right-6">
                <img
                  src={promo.studentImage}
                  alt="Du học sinh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Benefits & Salary Highlight */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-2 text-left lg:text-right">
              <ul className="space-y-1 text-xs sm:text-sm font-semibold text-cyan-100">
                {promo.benefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center lg:justify-end gap-2"
                  >
                    <span className="text-yellow-300 font-bold">»</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <span className="inline-block bg-yellow-400/20 border border-yellow-300 text-yellow-300 font-extrabold text-sm sm:text-lg px-3 py-1 rounded-xs">
                  {promo.salaryHighlight}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-white pt-1">
                {promo.mainTitle}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: DANH SÁCH TRƯỜNG NHẬT NGỮ (4 PARTNER ACADEMIES) */}
      <section id="truong-nhat-ngu" className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <BlueSectionHeading title="DANH SÁCH TRƯỜNG NHẬT NGỮ" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academies.map((ac) => (
              <div
                key={ac.id}
                onClick={() => openConsultation(ac.name)}
                className="group cursor-pointer text-center"
              >
                {ac.isEmblem ? (
                  <div className="h-36 flex items-center justify-center bg-[#f0f9ff] border border-[#bae6fd] mb-3 p-4">
                    <div className="w-28 h-28 rounded-full border-4 border-[#1476be] bg-white flex flex-col items-center justify-center p-2 shadow-xs">
                      <span className="text-[8px] font-bold text-[#28963c] uppercase">
                        Since 2007
                      </span>
                      <span className="text-xl font-black text-[#1476be] tracking-tight">
                        ATYS
                      </span>
                      <span className="text-[7px] font-bold text-stone-500 uppercase">
                        INTERNATIONAL ACADEMY
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-36 overflow-hidden border border-stone-200 mb-3">
                    <img
                      src={ac.image}
                      alt={ac.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h3 className="text-xs font-extrabold text-[#1e1e1e] group-hover:text-[#1476be] transition-colors">
                  {ac.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: TUYỂN SINH DU HỌC NHẬT BẢN (1 LARGE LEFT + 2 RIGHT CARDS) */}
      <section id="tuyen-sinh" className="py-14 lg:py-18 bg-[#f2f4f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <BlueSectionHeading title="TUYỂN SINH DU HỌC NHẬT BẢN" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Featured Student Card */}
            <div
              onClick={() => openConsultation(admissions.featuredCard.title)}
              className="lg:col-span-6 relative min-h-[260px] overflow-hidden group cursor-pointer shadow-xs"
            >
              <img
                src={admissions.featuredCard.image}
                alt={admissions.featuredCard.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 inset-x-4 text-center text-white">
                <h3 className="text-xs sm:text-sm font-bold">
                  {admissions.featuredCard.title}
                </h3>
              </div>
            </div>

            {/* Right 2 Horizontal Admission Cards */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              {admissions.sideNotices.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => openConsultation(notice.title)}
                  className="bg-white p-3 border border-stone-200 grid grid-cols-12 gap-4 items-center group cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="col-span-5 h-28 overflow-hidden">
                    <img
                      src={notice.image}
                      alt={notice.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-7 space-y-1.5">
                    <h3 className="text-xs font-extrabold uppercase text-[#1e1e1e] group-hover:text-[#1476be] transition-colors line-clamp-2">
                      {notice.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 line-clamp-3 leading-relaxed">
                      {notice.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: GÓC CHIA SẺ (FULL-WIDTH OCEAN BLUE TESTIMONIAL BANNER #1476be) */}
      <section className="py-14 lg:py-16 bg-[#1476be] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider">
            GÓC CHIA SẺ
          </h2>

          {reviewItem && (
            <>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mx-auto shadow-md">
                <img
                  src={reviewItem.avatar}
                  alt={reviewItem.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="italic text-xs text-white/95 leading-relaxed">
                “{reviewItem.content}”
              </p>
              <p className="font-bold text-xs text-yellow-200">
                {reviewItem.author}
              </p>
            </>
          )}
        </div>
      </section>

      {/* 9. SECTION: TIN TỨC DU HỌC (3 CARDS) */}
      <section id="tin-tuc" className="py-14 lg:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <BlueSectionHeading title="TIN TỨC DU HỌC" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.map((post) => (
              <article
                key={post.id}
                onClick={() => openConsultation(post.title)}
                className="bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-xs font-extrabold text-[#1e1e1e] group-hover:text-[#1476be] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-stone-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. DARK SAKURA & PAGODA FOOTER (#2b272c) */}
      <footer
        id="lien-he"
        className="bg-[#2b272c] text-stone-300 pt-14 text-xs relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Văn phòng chính */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-white text-sm uppercase">
                VĂN PHÒNG CHÍNH
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1476be] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1476be] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1476be] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: Ngành học */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-white text-sm uppercase">
                NGÀNH HỌC
              </h4>
              <ul className="space-y-2 text-[11px]">
                {majors.slice(0, 5).map((m) => (
                  <li key={m.id}>
                    <a
                      href="#chuyen-nganh"
                      className="hover:text-white transition-colors"
                    >
                      {m.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Tin mới nhất */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-white text-sm uppercase">
                TIN MỚI NHẤT
              </h4>
              <ul className="space-y-2.5 text-[11px]">
                {newsList.map((n) => (
                  <li key={n.id}>
                    <a
                      href="#tin-tuc"
                      className="hover:text-white transition-colors line-clamp-2"
                    >
                      {n.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Đăng ký */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-white text-sm uppercase">
                ĐĂNG KÝ
              </h4>
              <p className="text-[11px] leading-relaxed">
                Đăng ký để nhận được thông tin học bổng du học mới nhất từ chúng tôi.
              </p>
              {footerEmailDone ? (
                <p className="text-yellow-300 font-bold text-xs">
                  ✓ Đã đăng ký nhận bản tin du học!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFooterEmailDone(true);
                  }}
                  className="flex items-center bg-white rounded-xs overflow-hidden"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="w-full px-3 py-2 text-xs text-[#1e1e1e] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 text-[#1476be] hover:text-[#d81b28] cursor-pointer"
                    aria-label="Gửi"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#121212] text-stone-500 text-center py-3 text-[11px]">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>
        </div>
      </footer>

      {/* CONSULTATION MODAL */}
      {consultModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full rounded overflow-hidden shadow-2xl border border-stone-200">
            <div className="bg-[#1476be] text-white px-6 py-4 flex items-center justify-between">
              <span className="font-extrabold text-sm uppercase">
                Đăng Ký Tư Vấn Du Học Nhật Bản
              </span>
              <button
                onClick={() => setConsultModalOpen(false)}
                className="text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {consultSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#16a34a] mx-auto" />
                  <h4 className="font-bold text-base">
                    Đã gửi hồ sơ đăng ký tư vấn!
                  </h4>
                  <p className="text-xs text-stone-500">
                    Ban tuyển sinh <strong>{data.business.name}</strong> sẽ liên hệ tư vấn
                    chương trình <strong>{selectedTopic}</strong> ngay.
                  </p>
                  <button
                    onClick={() => setConsultModalOpen(false)}
                    className="bg-[#1476be] text-white text-xs font-bold px-6 py-2.5 rounded cursor-pointer"
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
                    <label className="block text-[10px] font-bold uppercase text-[#1476be] mb-1">
                      Chương trình / Ngành học quan tâm
                    </label>
                    <input
                      type="text"
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2.5 font-semibold"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên học sinh / phụ huynh *"
                    className="w-full border border-stone-300 px-3 py-2.5"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại liên hệ *"
                    className="w-full border border-stone-300 px-3 py-2.5"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#d81b28] hover:bg-[#b81420] text-white font-extrabold uppercase py-3 transition-colors cursor-pointer"
                  >
                    Nhận Tư Vấn Miễn Phí
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
