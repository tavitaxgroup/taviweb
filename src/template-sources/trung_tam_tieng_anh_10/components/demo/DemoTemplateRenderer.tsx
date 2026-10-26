"use client";

import React, { useState } from "react";
import {
  Search,
  ArrowRight,
  ArrowLeft,
  Check,
  Users,
  GraduationCap,
  PlaySquare,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh10DefaultData,
  type TrungTamTiengAnh10Data
} from "@/template-sources/trung_tam_tieng_anh_10/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function PillCtaButton({
  label,
  onClick,
  white = false
}: {
  label: string;
  onClick?: () => void;
  white?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-xs font-bold transition-all shadow-xs cursor-pointer ${
        white
          ? "bg-white text-[#ea546c] hover:bg-stone-50"
          : "bg-white border border-[#ea546c]/50 text-[#ea546c] hover:bg-[#ea546c] hover:text-white group"
      }`}
    >
      <span>{label}</span>
      <span className="w-7 h-7 rounded-full bg-[#ea546c] text-white flex items-center justify-center shrink-0">
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </button>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh10Data = adaptClonedTemplateData(
    trungTamTiengAnh10DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [activeParentIdx, setActiveParentIdx] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [footerEmailDone, setFooterEmailDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const bubbles =
    data.heroBubbles || trungTamTiengAnh10DefaultData.heroBubbles;
  const statsList = data.stats || trungTamTiengAnh10DefaultData.stats || [];
  const collageImgs =
    data.aboutCollageImages || trungTamTiengAnh10DefaultData.aboutCollageImages;
  const curriculumList =
    data.curriculumSlides || trungTamTiengAnh10DefaultData.curriculumSlides;
  const teachers = data.team || trungTamTiengAnh10DefaultData.team || [];
  const promo =
    data.admissionPromo || trungTamTiengAnh10DefaultData.admissionPromo;
  const communityNews =
    data.communityNews || trungTamTiengAnh10DefaultData.communityNews;
  const parentsList =
    data.testimonials || trungTamTiengAnh10DefaultData.testimonials || [];

  const currentCurriculum =
    curriculumList[activeSlideIdx] || curriculumList[0];
  const currentParent = parentsList[activeParentIdx] || parentsList[0];

  const scrollToContact = () => {
    setContactSubmitted(false);
    const el = document.getElementById("lien-he-phu-huynh");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-[#fffdfd] text-[#2d2d2d] font-sans selection:bg-[#ea546c] selection:text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(234,84,108,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(234,84,108,0.03) 1px, transparent 1px)",
        backgroundSize: "36px 36px"
      }}
    >
      {/* 1. TOP SOCIAL BAR + CORAL PINK HEADER (#ea546c) */}
      <div className="bg-white py-1.5 border-b border-pink-100 text-[11px]">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-600">
            <span>Liên hệ với chúng tôi:</span>
            <a
              href="#lien-he-phu-huynh"
              className="w-5 h-5 rounded-full bg-[#1877f2] text-white text-[10px] font-bold flex items-center justify-center"
            >
              f
            </a>
            <a
              href="#lien-he-phu-huynh"
              className="w-5 h-5 rounded-full bg-[#ff0000] text-white text-[9px] flex items-center justify-center"
            >
              ▶
            </a>
            <a
              href="#lien-he-phu-huynh"
              className="w-5 h-5 rounded-full bg-[#1da1f2] text-white text-[10px] font-bold flex items-center justify-center"
            >
              t
            </a>
          </div>

          <div className="hidden sm:flex items-center border border-stone-200 rounded-full px-3 py-1 w-56 bg-stone-50">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="bg-transparent text-xs w-full focus:outline-none"
            />
            <Search className="w-3.5 h-3.5 text-stone-400" />
          </div>
        </div>
      </div>

      {/* Coral Pink Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#ea546c] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Circular Yellow Preschool Badge */}
          <a
            href="#trang-chu"
            className="flex items-center gap-2.5 shrink-0"
          >
            <div className="w-13 h-13 rounded-full bg-[#fbd334] border-2 border-white shadow-md flex flex-col items-center justify-center text-[#ea546c] -my-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-serif italic font-black text-[9px] leading-none mt-0.5">
                Preschool
              </span>
            </div>
            <span className="font-extrabold text-sm sm:text-base uppercase tracking-wide text-white lg:hidden">
              {data.business.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-extrabold uppercase tracking-wider">
            <a
              href="#trang-chu"
              className="text-[#fbd334] underline underline-offset-4"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#fbd334] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#chuong-trinh-hoc"
              className="hover:text-[#fbd334] transition-colors"
            >
              CHƯƠNG TRÌNH HỌC
            </a>
            <a
              href="#tuyen-sinh"
              className="hover:text-[#fbd334] transition-colors"
            >
              TUYỂN SINH
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#fbd334] transition-colors"
            >
              TIN TỨC CỘNG ĐỒNG
            </a>
            <a
              href="#doi-ngu-giao-vien"
              className="hover:text-[#fbd334] transition-colors"
            >
              TUYỂN DỤNG
            </a>
            <a
              href="#lien-he-phu-huynh"
              className="hover:text-[#fbd334] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Language Flags & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#da251d] text-[#ffff00] text-[10px] flex items-center justify-center font-bold border border-white">
              ★
            </span>
            <span className="w-5 h-5 rounded-full bg-[#012169] text-white text-[8px] flex items-center justify-center font-bold border border-white opacity-80">
              EN
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#d8435b] px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Giới thiệu {data.business.name}
            </a>
            <a
              href="#chuong-trinh-hoc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Chương trình học
            </a>
            <a
              href="#doi-ngu-giao-vien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Đội ngũ giáo viên
            </a>
            <a
              href="#tuyen-sinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Tuyển sinh (Miễn phí học thử 1 tuần)
            </a>
            <a
              href="#lien-he-phu-huynh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Liên hệ phụ huynh
            </a>
          </div>
        )}
      </header>

      {/* 2. PLAYROOM HERO WITH 3 CIRCULAR BUBBLES + CURVED CORAL STATS BAR */}
      <section id="trang-chu" className="relative overflow-hidden">
        <div className="relative min-h-[480px] lg:min-h-[540px] flex items-end pb-12 pt-16">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-[#f79489]/90" />

          {/* Wavy Coral-Pink Bottom Slope */}
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-r from-[#f6b26b]/90 via-[#f38b7a]/95 to-[#ea546c]/95 [clip-path:ellipse(75%_100%_at_50%_100%)]" />

          <div className="relative z-10 max-w-6xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 3 Circular Classroom Bubbles */}
            <div className="lg:col-span-7 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
              {bubbles.map((b) => (
                <div
                  key={b.id}
                  onClick={scrollToContact}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div
                    className={`rounded-full overflow-hidden shadow-xl transition-transform group-hover:scale-105 ${
                      b.size === "large"
                        ? "w-44 h-44 sm:w-52 sm:h-52 border-[6px] border-[#ea546c]"
                        : "w-32 h-32 sm:w-36 sm:h-36 border-[5px] border-[#fbd334]"
                    }`}
                  >
                    <img
                      src={b.image}
                      alt={b.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-2 text-xs font-extrabold text-white drop-shadow">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Creative Preschool Title & Pill Button */}
            <div className="lg:col-span-5 text-center space-y-3">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-wide text-[#e03e58] drop-shadow-xs whitespace-pre-line leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm font-extrabold text-[#5c1924] max-w-xs mx-auto">
                {data.hero.subtitle}
              </p>
              <div className="pt-2">
                <PillCtaButton
                  label={data.hero.ctaText || "Tìm hiểu thêm"}
                  onClick={scrollToContact}
                  white
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Curved Coral Stats Bar (1000+ Học sinh | 300+ Giáo viên | 04+ Chương trình học) */}
        <div className="max-w-6xl mx-auto pl-4 sm:pl-16">
          <div className="bg-[#ea546c] text-white rounded-bl-[64px] py-7 px-8 sm:px-14 shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {statsList.map((st, idx) => (
              <div
                key={st.id}
                className={`flex items-center justify-center gap-4 ${
                  idx < 2 ? "sm:border-r sm:border-white/25" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                  {idx === 0 && <Users className="w-7 h-7" />}
                  {idx === 1 && <GraduationCap className="w-7 h-7" />}
                  {idx === 2 && <PlaySquare className="w-7 h-7" />}
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black leading-none">
                    {st.number}
                  </span>
                  <span className="block text-xs text-white/90 mt-1">
                    {st.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION: CREATIVE PRESCHOOL ABOUT + YELLOW CLOUD COLLAGE */}
      <section id="gioi-thieu" className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content + 3 Checkmarks */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#ea546c]">
                {data.business.aboutTitle || data.business.name}
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                {data.business.aboutText.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>Ba điểm mạnh nổi bật của {data.business.name}:</p>
              </div>

              <ul className="space-y-2.5 pt-1">
                {(
                  data.business.highlights ||
                  trungTamTiengAnh10DefaultData.business.highlights ||
                  []
                ).map((hl, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#2d2d2d]"
                  >
                    <span className="w-5 h-5 rounded-full border border-[#ea546c]/50 text-[#ea546c] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <PillCtaButton label="Xem thêm" onClick={scrollToContact} />
              </div>
            </div>

            {/* Right Playful Yellow-Bordered Organic Collage */}
            <div className="lg:col-span-6">
              <div className="bg-[#fbd334] p-3 sm:p-4 rounded-[48px] shadow-xl grid grid-cols-2 gap-3">
                {collageImgs.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className={`overflow-hidden border-2 border-white ${
                      idx === 0
                        ? "rounded-tl-[36px] rounded-br-2xl h-36 sm:h-44"
                        : idx === 1
                        ? "rounded-tr-[36px] rounded-bl-2xl h-36 sm:h-44"
                        : idx === 2
                        ? "rounded-bl-[36px] rounded-tr-2xl h-36 sm:h-44"
                        : "rounded-br-[36px] rounded-tl-2xl h-36 sm:h-44"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Hoạt động mầm non ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: CHƯƠNG TRÌNH HỌC (GIANT CORAL 06 + ROUNDED PHOTO CAROUSEL) */}
      <section id="chuong-trinh-hoc" className="py-12 lg:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-center text-[#ea546c] mb-12">
            CHƯƠNG TRÌNH HỌC
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Giant Coral Number + Bullets */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative pt-8">
                <span className="text-[110px] sm:text-[130px] font-black text-[#ea546c]/85 leading-none select-none block">
                  {currentCurriculum.number}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#2d2d2d] -mt-8 relative z-10 bg-white/80 backdrop-blur-2xs py-1 px-2 rounded">
                  {currentCurriculum.title}
                </h3>
              </div>

              <p className="text-xs text-stone-500 leading-relaxed">
                {currentCurriculum.description}
              </p>

              <ul className="space-y-2 text-xs text-stone-600">
                {currentCurriculum.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ea546c] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <PillCtaButton label="Xem chi tiết" onClick={scrollToContact} />
              </div>
            </div>

            {/* Right Large Rounded Classroom Photo + 01..06 Switcher */}
            <div className="lg:col-span-8">
              <div className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white h-[320px] sm:h-[400px]">
                <img
                  src={currentCurriculum.image}
                  alt={currentCurriculum.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Bottom Right Number Switcher */}
                <div className="absolute bottom-4 right-6 flex items-center gap-2 text-xs font-bold text-white/80">
                  {curriculumList.map((sl, idx) => (
                    <button
                      key={sl.id}
                      onClick={() => setActiveSlideIdx(idx)}
                      className={`px-2 py-1 rounded cursor-pointer transition-all ${
                        activeSlideIdx === idx
                          ? "text-[#ea546c] bg-white font-black scale-110"
                          : "hover:text-white"
                      }`}
                    >
                      {sl.number}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: ĐỘI NGŨ GIÁO VIÊN (4 CIRCULAR PORTRAITS) */}
      <section id="doi-ngu-giao-vien" className="py-16 lg:py-20 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#ea546c]">
            ĐỘI NGŨ GIÁO VIÊN
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Chương trình học tại trường Mầm Non Quốc Tế {data.business.name} được thiết kế
            đặc biệt để thúc đẩy sự phát triển toàn diện của trẻ nhỏ, tạo điều kiện cho bé
            khám phá và học hỏi một cách sáng tạo.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {teachers.map((tc) => (
              <div key={tc.id} className="flex flex-col items-center group">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-pink-100 shadow-md mb-4">
                  <img
                    src={tc.image}
                    alt={tc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-[#2d2d2d]">
                  {tc.name}
                </h3>
                <span className="text-[11px] text-stone-400 mt-0.5">
                  {tc.position}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <PillCtaButton
              label="Hãy cùng chúng tôi xây dựng tương lai cho lớp trẻ"
              onClick={scrollToContact}
            />
          </div>
        </div>
      </section>

      {/* 6. CORAL PINK ROUNDED ADMISSION PROMO CARD ("MIỄN PHÍ HỌC THỬ 1 TUẦN") */}
      <section id="tuyen-sinh" className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-[36px] bg-gradient-to-r from-[#f06479] to-[#ea546c] text-white p-6 sm:p-10 shadow-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Happy Preschool Kids in Soft Arch */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#f794a4]/60 p-3 shadow-inner overflow-hidden">
                <img
                  src={promo.kidsImage}
                  alt="Tuyển sinh mầm non"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Right Admission Offer */}
            <div className="lg:col-span-7 space-y-4">
              <p className="font-serif italic text-sm sm:text-base text-pink-100">
                {promo.scriptEyebrow}
              </p>

              <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight whitespace-pre-line">
                {promo.title}
              </h2>

              <div className="inline-block bg-[#881337]/75 border border-yellow-300/40 px-5 py-2.5 rounded-xl">
                <span className="text-base sm:text-xl font-black text-[#fbd334]">
                  {promo.highlightBadge}
                </span>
              </div>

              <div className="space-y-1 text-xs text-white/95">
                <p className="font-bold">Ưu đãi chào đón năm học mới:</p>
                <ul className="space-y-1 pl-3">
                  {promo.perks.map((pk, i) => (
                    <li key={i}>• {pk}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <PillCtaButton
                  label="Đăng ký ngay"
                  onClick={scrollToContact}
                  white
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: TIN TỨC (LEFT 2 HORIZONTAL CARDS + RIGHT INTRO) */}
      <section id="tin-tuc" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 2 Coral-Bordered Horizontal Cards */}
            <div className="lg:col-span-7 space-y-4">
              {communityNews.map((item) => (
                <article
                  key={item.id}
                  onClick={scrollToContact}
                  className="bg-white rounded-2xl border border-[#ea546c]/40 p-3.5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center shadow-2xs hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="sm:col-span-5 h-32 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-1.5">
                    <span className="text-[10px] font-bold text-[#ea546c]">
                      {item.tagAndDate}
                    </span>
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#2d2d2d] line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Heading & CTA */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#ea546c]">
                TIN TỨC
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                Cùng ươm mầm hạnh phúc của trẻ tại {data.business.name} ngay từ hôm nay!
                Đăng ký ngay từ hôm nay nhận ngay ưu đãi học thử hấp dẫn.
              </p>
              <PillCtaButton label="Xem tất cả" onClick={scrollToContact} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: NHẬN XÉT TỪ PHỤ HUYNH */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-center text-[#ea546c] mb-12">
            NHẬN XÉT TỪ PHỤ HUYNH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Soft Blush Quote Card */}
            <div className="md:col-span-9 bg-[#fdf2f4] rounded-3xl p-6 sm:p-8 relative shadow-xs border border-pink-100">
              <span className="font-serif text-7xl text-[#f4c2cb] absolute -top-5 right-8 leading-none select-none">
                ”
              </span>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={currentParent?.avatar}
                  alt={currentParent?.author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm"
                />
                <div>
                  <h3 className="text-sm font-extrabold text-[#ea546c]">
                    {currentParent?.author}
                  </h3>
                  <span className="text-xs text-stone-500">
                    {currentParent?.role}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed whitespace-pre-line">
                {currentParent?.content}
              </p>
            </div>

            {/* Right Vertical Parent Avatar Switcher */}
            <div className="md:col-span-3 flex md:flex-col items-center justify-center gap-3">
              {parentsList.map((pr, idx) => (
                <button
                  key={pr.id}
                  onClick={() => setActiveParentIdx(idx)}
                  className={`rounded-full overflow-hidden border-2 transition-all cursor-pointer ${
                    activeParentIdx === idx
                      ? "w-14 h-14 border-[#ea546c] scale-110 shadow-md"
                      : "w-11 h-11 border-white opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={pr.avatar}
                    alt={pr.author}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. SOFT MINT-GREEN ROUNDED CONTACT SECTION (#d8e8e2) + YELLOW MARQUEE */}
      <section
        id="lien-he-phu-huynh"
        className="pt-14 pb-8 bg-[#d8e8e2] rounded-t-[48px] relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Form */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#ea546c]">
                  LIÊN HỆ VỚI CHÚNG TÔI
                </h2>
                <p className="mt-1 text-xs text-[#ea546c]/80">
                  Chúng tôi sẵn sàng lắng nghe và giải đáp mọi thắc mắc của quý phụ huynh và
                  các em học sinh
                </p>
              </div>

              {contactSubmitted ? (
                <div className="bg-white/90 rounded-2xl p-6 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#16a34a] mx-auto" />
                  <h3 className="font-bold text-base text-[#2d2d2d]">
                    Đã gửi đơn đăng ký học thử thành công!
                  </h3>
                  <p className="text-xs text-stone-600">
                    Các cô giáo tư vấn tuyển sinh của{" "}
                    <strong>{data.business.name}</strong> sẽ gọi điện hướng dẫn lịch tham
                    quan trường cho gia đình mình ngay.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-5 pt-2"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên*"
                      className="w-full bg-transparent border-b border-stone-400 py-2 text-xs focus:outline-none focus:border-[#ea546c]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại*"
                      className="w-full bg-transparent border-b border-stone-400 py-2 text-xs focus:outline-none focus:border-[#ea546c]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email*"
                      className="w-full bg-transparent border-b border-stone-400 py-2 text-xs focus:outline-none focus:border-[#ea546c]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={`Lời nhắn gửi đến ${data.business.name}`}
                    className="w-full bg-transparent border-b border-stone-400 py-2 text-xs focus:outline-none focus:border-[#ea546c]"
                  />
                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-white hover:bg-[#ea546c] text-[#ea546c] hover:text-white text-xs font-extrabold px-6 py-2 rounded-full shadow-sm transition-colors cursor-pointer"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#ea546c] text-white flex items-center justify-center">
                        <Send className="w-3 h-3" />
                      </span>
                      <span>Nộp đơn</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Smiling Preschooler in Coral Circle with Floating Badges */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative">
                {/* Floating 1,000+ học sinh badge */}
                <div className="absolute -top-3 right-2 z-20 bg-[#ea546c] text-white text-xs font-extrabold px-4 py-1.5 rounded-xl rotate-12 shadow-md">
                  1,000+ học sinh
                </div>
                {/* Floating 2,000+ đánh giá badge */}
                <div className="absolute top-12 -left-6 z-20 bg-white border border-[#ea546c] text-[#ea546c] text-xs font-extrabold px-4 py-1.5 rounded-xl -rotate-12 shadow-md">
                  2,000+ đánh giá
                </div>

                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#ea546c] p-3 overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=85"
                    alt="Học sinh mầm non"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sunny Yellow Ticker Bar */}
      <div className="bg-[#f9d849] text-[#2d2d2d] py-2.5 overflow-hidden">
        <div className="flex items-center justify-around gap-6 text-[11px] font-black uppercase tracking-wider whitespace-nowrap">
          <span>• TUYỂN SINH NĂM HỌC MỚI 2025 - 2026</span>
          <span>• TUYỂN SINH NĂM HỌC MỚI 2025 - 2026</span>
          <span className="hidden sm:inline">
            • TUYỂN SINH NĂM HỌC MỚI 2025 - 2026
          </span>
          <span className="hidden md:inline">
            • TUYỂN SINH NĂM HỌC MỚI 2025 - 2026
          </span>
        </div>
      </div>

      {/* 10. CORAL PINK FOOTER (#e24a62) */}
      <footer className="bg-[#e24a62] text-white pt-14 pb-8 text-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/20">
            {/* Col 1: Preschool Logo & Email Signup */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#fbd334] text-[#e24a62] flex items-center justify-center font-black">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="font-serif italic text-xl font-black text-[#fbd334] mt-1">
                  {data.business.name}
                </span>
                <span className="text-[10px] text-white/90 text-center max-w-[180px] mt-0.5">
                  “Nuôi dưỡng Tương Lai với Sáng Tạo và Yêu Thương!”
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-extrabold uppercase">
                  ĐĂNG KÝ NGAY NHẬN ƯU ĐÃI TỪ {data.business.name.toUpperCase()}
                </p>
                {footerEmailDone ? (
                  <p className="text-[#fbd334] font-bold">
                    ✓ Đã đăng ký nhận cẩm nang nuôi dạy trẻ!
                  </p>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFooterEmailDone(true);
                    }}
                    className="flex items-center bg-[#c83249] rounded-full p-1"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Nhập email của bạn"
                      className="bg-transparent text-white placeholder:text-white/70 text-xs px-3 py-1.5 w-full focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-7 h-7 rounded-full bg-[#ea546c] text-white flex items-center justify-center shrink-0 cursor-pointer"
                      aria-label="Gửi"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Col 2: Về chúng tôi */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="font-extrabold uppercase text-xs">VỀ CHÚNG TÔI</h4>
              <ul className="space-y-2 text-[11px] text-white/90">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#fbd334]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#chuong-trinh-hoc" className="hover:text-[#fbd334]">
                    Chương trình học
                  </a>
                </li>
                <li>
                  <a href="#tuyen-sinh" className="hover:text-[#fbd334]">
                    Tuyển sinh
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#fbd334]">
                    Tin tức cộng đồng
                  </a>
                </li>
                <li>
                  <a href="#lien-he-phu-huynh" className="hover:text-[#fbd334]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Liên hệ với chúng tôi */}
            <div className="lg:col-span-3 space-y-2.5">
              <h4 className="font-extrabold uppercase text-xs">
                LIÊN HỆ VỚI CHÚNG TÔI
              </h4>
              <ul className="space-y-2 text-[11px] text-white/90">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#fbd334] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#fbd334] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#fbd334] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#fbd334] shrink-0" />
                  <span>{data.business.workingHours || "8:00 - 17:00"}</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Theo dõi Creative Preschool */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-extrabold uppercase text-xs">
                THEO DÕI {data.business.name.toUpperCase()}
              </h4>
              <div className="bg-white/15 p-3 rounded-xl border border-white/25 space-y-2">
                <p className="font-bold text-xs">{data.business.name}</p>
                <p className="text-[10px] text-white/85">
                  10.500+ Phụ huynh theo dõi trang
                </p>
                <button
                  onClick={scrollToContact}
                  className="bg-white text-[#e24a62] text-[10px] font-bold px-3 py-1 rounded cursor-pointer"
                >
                  + Theo dõi Trang
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-white/85">
            © Bản quyền thuộc về <strong>{data.business.name}</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}
