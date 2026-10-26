"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  ChevronDown,
  Users,
  Globe,
  Landmark,
  Handshake,
  Send,
  CheckCircle2,
  Star,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh9DefaultData,
  type TrungTamTiengAnh9Data
} from "@/template-sources/trung_tam_tieng_anh_9/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function UniversityCrest({
  name,
  dark = false
}: {
  name: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-end gap-0.5">
        <span
          className={`w-1.5 h-5 ${dark ? "bg-white" : "bg-[#1b365d]"} rounded-t-xs`}
        />
        <span
          className={`font-serif text-2xl sm:text-3xl font-black leading-none ${
            dark ? "text-white" : "text-[#1b365d]"
          }`}
        >
          M
        </span>
        <span
          className={`w-1.5 h-5 ${dark ? "bg-white" : "bg-[#1b365d]"} rounded-t-xs`}
        />
      </div>
      <span
        className={`font-serif text-xs sm:text-sm font-bold tracking-wider ${
          dark ? "text-white" : "text-[#1b365d]"
        } leading-none mt-0.5`}
      >
        {name}
      </span>
      <span
        className={`text-[8px] uppercase tracking-[0.28em] ${
          dark ? "text-stone-400" : "text-stone-500"
        } mt-0.5`}
      >
        UNIVERSITY
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh9Data = adaptClonedTemplateData(
    trungTamTiengAnh9DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMajor, setSelectedMajor] = useState("Công nghệ thông tin");
  const [admissionSubmitted, setAdmissionSubmitted] = useState(false);
  const [footerDone, setFooterDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "tuyensinh@globaluni.edu.vn";
  const stats =
    data.universityStats || trungTamTiengAnh9DefaultData.universityStats;
  const faculties = data.faculties || trungTamTiengAnh9DefaultData.faculties;
  const philosophy =
    data.philosophyBanner || trungTamTiengAnh9DefaultData.philosophyBanner;
  const lecturers =
    data.lecturerReviews || trungTamTiengAnh9DefaultData.lecturerReviews;
  const newsList = data.news || trungTamTiengAnh9DefaultData.news || [];
  const alumni =
    data.alumniReviews || trungTamTiengAnh9DefaultData.alumniReviews;

  const scrollToAdmission = (majorName?: string) => {
    if (majorName) setSelectedMajor(majorName);
    setAdmissionSubmitted(false);
    const el = document.getElementById("dang-ky-xet-tuyen");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#f26b21] selection:text-white">
      {/* 1. TOP UTILITY BAR + WHITE UNIVERSITY HEADER */}
      <div className="bg-[#f5f6f8] border-b border-stone-200 py-2 text-[11px] text-stone-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
          {/* Left QS Stars Badge + University Crest */}
          <div className="flex items-center gap-4">
            <div className="bg-[#1b2a47] text-white px-2.5 py-1 rounded-xs flex flex-col items-center leading-none border border-[#eab308]">
              <span className="text-[9px] font-black tracking-wider text-[#facc15]">
                QS STARS™
              </span>
              <span className="text-[6px] uppercase tracking-widest text-stone-300 mt-0.5">
                RATED FOR EXCELLENCE
              </span>
              <div className="flex items-center gap-0.5 mt-0.5 text-[#facc15]">
                <Star className="w-2 h-2 fill-[#facc15]" />
                <Star className="w-2 h-2 fill-[#facc15]" />
                <Star className="w-2 h-2 fill-[#facc15]" />
              </div>
            </div>

            <a href="#trang-chu">
              <UniversityCrest name={data.business.name} />
            </a>
          </div>

          {/* Center Contact Details */}
          <div className="hidden lg:flex items-center gap-5 text-stone-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#1b365d]" />
              <span>{data.business.address}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#1b365d]" />
              <span>{primaryEmail}</span>
            </span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 font-bold text-[#1b365d]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{primaryPhone}</span>
            </a>
          </div>

          {/* Right Social Icons */}
          <div className="hidden sm:flex items-center gap-3 text-stone-500 font-bold">
            <a href="#lien-he" className="hover:text-[#f26b21]">
              f
            </a>
            <a href="#lien-he" className="hover:text-[#f26b21]">
              𝕏
            </a>
            <a href="#lien-he" className="hover:text-[#f26b21]">
              G+
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
          <nav className="hidden lg:flex items-center justify-between w-full text-[11px] font-extrabold uppercase tracking-wide text-[#222222]">
            <a href="#trang-chu" className="text-[#f26b21]">
              TRANG CHỦ
            </a>
            <a
              href="#triet-ly"
              className="hover:text-[#f26b21] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dang-ky-xet-tuyen"
              className="inline-flex items-center gap-1 hover:text-[#f26b21] transition-colors"
            >
              <span>TUYỂN SINH</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#nganh-hoc"
              className="inline-flex items-center gap-1 hover:text-[#f26b21] transition-colors"
            >
              <span>NGÀNH HỌC</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#he-thong-lien-ket"
              className="inline-flex items-center gap-1 hover:text-[#f26b21] transition-colors"
            >
              <span>DOANH NGHIỆP</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#cuu-sinh-vien"
              className="inline-flex items-center gap-1 hover:text-[#f26b21] transition-colors"
            >
              <span>HỘI CỰU SINH VIÊN</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#giang-vien"
              className="hover:text-[#f26b21] transition-colors"
            >
              HỎI – ĐÁP
            </a>
            <a href="#tin-tuc" className="hover:text-[#f26b21] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#f26b21] transition-colors">
              LIÊN HỆ
            </a>
            <button
              onClick={() => scrollToAdmission()}
              className="text-stone-500 hover:text-[#f26b21] cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </nav>

          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="text-xs font-extrabold uppercase text-[#f26b21]">
              CỔNG THÔNG TIN TUYỂN SINH
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#1b365d]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#nganh-hoc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#f26b21]"
            >
              Ngành học đào tạo
            </a>
            <a
              href="#giang-vien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#f26b21]"
            >
              Ý kiến giảng viên
            </a>
            <a
              href="#dang-ky-xet-tuyen"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#f26b21]"
            >
              Đăng ký xét tuyển trực tuyến
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#f26b21]"
            >
              Tin tức sinh viên
            </a>
          </div>
        )}
      </header>

      {/* 2. BRIGHT YELLOW MATH-DOODLE HERO BANNER (#ffda00) */}
      <section
        id="trang-chu"
        className="relative bg-gradient-to-r from-[#ffdf00] via-[#ffda00] to-[#facc15] overflow-hidden"
      >
        {/* Subtle Academic Math/Geometry Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#92400e 1px, transparent 1px), linear-gradient(to right, rgba(180,83,9,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        <div className="max-w-6xl mx-auto px-4 pt-10 pb-8 lg:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            {/* Left/Center Typography */}
            <div className="lg:col-span-7 text-center space-y-3">
              <div className="flex flex-wrap items-baseline justify-center gap-3">
                <span className="text-2xl sm:text-3xl font-black uppercase text-[#e11d2a] tracking-wide">
                  {data.hero.eyebrow || "TUYỂN SINH"}
                </span>
                <h1 className="font-serif italic text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1b365d]">
                  {data.hero.title}
                </h1>
              </div>

              <p className="text-3xl sm:text-5xl font-black text-[#e11d2a] tracking-tight">
                {data.hero.subtitle}
              </p>

              {/* Year Divider with Double Lines */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <div className="w-20 sm:w-28 border-y border-[#1b365d]/60 h-1.5" />
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#1b365d]">
                  {data.heroYear || "2 0 2 5"}
                </span>
                <div className="w-20 sm:w-28 border-y border-[#1b365d]/60 h-1.5" />
              </div>

              {/* Downward Red Triangle Button */}
              <div className="pt-1">
                <button
                  onClick={() => scrollToAdmission()}
                  className="inline-block w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#e11d2a] hover:translate-y-1 transition-transform cursor-pointer"
                  aria-label="Cuộn xuống đăng ký"
                />
              </div>
            </div>

            {/* Right Smiling Graduate in Cap & Gown */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-76 h-[310px] sm:h-[360px] rounded-t-full overflow-hidden border-4 border-white/80 shadow-xl bg-amber-100">
                <img
                  src={data.graduateImage || data.hero.backgroundImage}
                  alt="Tân cử nhân tốt nghiệp"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 UNIVERSITY STAT CARDS + 4 ACADEMIC FACULTIES */}
      <section className="py-12 bg-[#f5f6f8] border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((st) => (
              <div
                key={st.id}
                className="bg-white border border-stone-200 p-6 text-center shadow-2xs flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-lg bg-[#f26b21] text-white flex items-center justify-center mb-3">
                  {st.icon === "users" && <Users className="w-6 h-6" />}
                  {st.icon === "globe" && <Globe className="w-6 h-6" />}
                  {st.icon === "landmark" && <Landmark className="w-6 h-6" />}
                  {st.icon === "handshake" && <Handshake className="w-6 h-6" />}
                </div>
                <span className="font-serif text-base font-bold text-[#1e1e1e]">
                  {st.value}
                </span>
                <span className="text-[11px] text-stone-500 mt-0.5">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Academic Faculties */}
      <section id="nganh-hoc" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center font-serif text-sm sm:text-base font-bold text-[#c2591a] mb-8">
            {data.missionQuote}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculties.map((fac) => (
              <div
                key={fac.id}
                onClick={() => scrollToAdmission(fac.name)}
                className="group cursor-pointer text-center"
              >
                <div className="h-44 overflow-hidden mb-3 border border-stone-200">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-sm font-bold text-[#1e1e1e] group-hover:text-[#f26b21] transition-colors">
                  {fac.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DARK NAVY GRADUATION PHILOSOPHY BANNER (#182d49) */}
      <section
        id="triet-ly"
        className="relative py-16 lg:py-20 bg-[#182d49] text-white text-center overflow-hidden"
      >
        <img
          src={philosophy.backgroundImage}
          alt="Lễ tốt nghiệp đại học"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-lg sm:text-2xl font-bold uppercase leading-relaxed tracking-wide">
            {philosophy.statement}
          </h2>
          <div>
            <button
              onClick={() => scrollToAdmission()}
              className="bg-[#f26b21] hover:bg-[#d95812] text-white text-xs font-extrabold uppercase tracking-wider px-8 py-3 rounded-full shadow-lg transition-colors cursor-pointer"
            >
              {philosophy.ctaLabel}
            </button>
          </div>
        </div>
      </section>

      {/* 5. SECTION: Ý KIẾN GIẢNG VIÊN (3 CARDS) */}
      <section id="giang-vien" className="py-16 bg-[#f5f6f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#222222] mb-10">
            Ý kiến giảng viên
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lecturers.map((lec) => (
              <div
                key={lec.id}
                className="bg-white p-6 border border-stone-200 shadow-2xs flex flex-col justify-between"
              >
                <p className="italic text-xs text-stone-500 leading-relaxed">
                  {lec.quote}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={lec.avatar}
                    alt={lec.name}
                    className="w-11 h-11 rounded-full object-cover border border-stone-200"
                  />
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#1e1e1e]">
                      {lec.name}
                    </h3>
                    <span className="text-[11px] text-stone-400">
                      {lec.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPLIT GEOMETRIC YELLOW/ORANGE ĐĂNG KÝ ADMISSION FORM SECTION */}
      <section
        id="dang-ky-xet-tuyen"
        className="relative bg-gradient-to-br from-[#f59e0b] via-[#f28518] to-[#ea580c] overflow-hidden pt-12 pb-12 lg:py-16"
      >
        {/* Geometric Polygon Accents */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[#d95812]/40 [clip-path:polygon(0_25%,85%_60%,20%_100%,0_100%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Student Portrait with Colorful Folders */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 sm:w-76 h-[360px] sm:h-[410px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/70 bg-white">
                <img
                  src={data.admissionFormStudentImage}
                  alt="Sinh viên đăng ký xét tuyển"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right Outlined Frame Registration Box */}
            <div className="lg:col-span-7">
              <div className="border border-white/80 bg-[#f59e0b]/40 backdrop-blur-xs p-6 sm:p-8">
                <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-[#1e1e1e] text-center mb-6">
                  ĐĂNG KÝ
                </h2>

                {admissionSubmitted ? (
                  <div className="bg-white p-6 text-center space-y-3 rounded">
                    <CheckCircle2 className="w-10 h-10 text-[#16a34a] mx-auto" />
                    <h3 className="font-serif text-lg font-bold text-[#1e1e1e]">
                      Đăng ký hồ sơ xét tuyển thành công!
                    </h3>
                    <p className="text-xs text-stone-600">
                      Hội đồng Tuyển sinh <strong>{data.business.name}</strong> đã ghi nhận
                      nguyện vọng ngành <strong>{selectedMajor}</strong> của bạn.
                    </p>
                    <button
                      onClick={() => setAdmissionSubmitted(false)}
                      className="bg-[#f26b21] text-white text-xs font-bold uppercase px-6 py-2.5 cursor-pointer"
                    >
                      Đăng ký thêm nguyện vọng
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setAdmissionSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên"
                      className="w-full bg-white text-xs px-3.5 py-2.5 text-[#1e1e1e] focus:outline-none"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Trường THPT / Cao đẳng"
                      className="w-full bg-white text-xs px-3.5 py-2.5 text-[#1e1e1e] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Tỉnh/Thành"
                      className="w-full bg-white text-xs px-3.5 py-2.5 text-[#1e1e1e] focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại"
                      className="w-full bg-white text-xs px-3.5 py-2.5 text-[#1e1e1e] focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="E-mail"
                      className="w-full bg-white text-xs px-3.5 py-2.5 text-[#1e1e1e] focus:outline-none"
                    />
                    <select
                      value={selectedMajor}
                      onChange={(e) => setSelectedMajor(e.target.value)}
                      className="w-full bg-white text-xs px-3.5 py-2.5 text-[#1e1e1e] focus:outline-none"
                    >
                      <option value="">— Chọn ngành học —</option>
                      {faculties.map((f) => (
                        <option key={f.id} value={f.name}>
                          Ngành: {f.name}
                        </option>
                      ))}
                    </select>

                    <div className="pt-2 text-center">
                      <button
                        type="submit"
                        className="bg-[#f26b21] hover:bg-[#d4540f] text-white text-xs font-extrabold uppercase tracking-wider px-12 py-3 shadow-md transition-colors cursor-pointer"
                      >
                        ĐĂNG KÝ
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: TIN TỨC (3 UNIVERSITY NEWS CARDS) */}
      <section id="tin-tuc" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#222222] mb-10">
            Tin tức
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.map((post) => (
              <article
                key={post.id}
                onClick={() => scrollToAdmission()}
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
                  <h3 className="text-xs font-extrabold text-[#1e1e1e] group-hover:text-[#f26b21] transition-colors line-clamp-2">
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

      {/* 8. SECTION: Ý KIẾN CỰU SINH VIÊN (DARK NAVY GRADUATION BACKDROP + 2 CARDS) */}
      <section
        id="cuu-sinh-vien"
        className="relative py-16 bg-[#182d49] overflow-hidden"
      >
        <img
          src={philosophy.backgroundImage}
          alt="Cựu sinh viên"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-center text-white mb-10">
            Ý kiến cựu sinh viên
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alumni.map((al) => (
              <div
                key={al.id}
                className="bg-white p-6 shadow-lg flex flex-col justify-between"
              >
                <p className="italic text-xs text-stone-600 leading-relaxed">
                  {al.quote}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={al.avatar}
                    alt={al.name}
                    className="w-11 h-11 rounded-full object-cover border border-stone-200"
                  />
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#1e1e1e]">
                      {al.name}
                    </h3>
                    <span className="text-[11px] text-stone-400">{al.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION: HỆ THỐNG LIÊN KẾT (4 PARTNER LOGOS) */}
      <section
        id="he-thong-lien-ket"
        className="py-12 bg-white border-b-4 border-[#f26b21]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-center text-[#222222] mb-8">
            Hệ thống liên kết
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
            {/* QS Stars */}
            <div className="bg-[#1b2a47] text-white px-4 py-2 rounded-xs text-center border border-[#eab308]">
              <span className="block text-xs font-black text-[#facc15]">
                QS STARS™
              </span>
              <span className="block text-[7px] uppercase tracking-widest text-stone-300">
                RATED FOR EXCELLENCE
              </span>
            </div>

            {/* Microsoft */}
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                <span className="bg-[#f25022]" />
                <span className="bg-[#7fba00]" />
                <span className="bg-[#00a4ef]" />
                <span className="bg-[#ffb900]" />
              </div>
              <span className="text-lg font-bold text-stone-600">Microsoft</span>
            </div>

            {/* Jetking */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-b-full border-2 border-[#dc2626] flex items-center justify-center text-[#dc2626] font-black text-xs">
                JK
              </div>
              <span className="text-base font-extrabold text-[#dc2626]">
                Jetking®
              </span>
            </div>

            {/* Aptech */}
            <div className="bg-[#1e1e1e] text-white px-4 py-1.5 -skew-x-6 border-b-2 border-[#dc2626]">
              <span className="block text-sm font-black italic text-[#facc15]">
                Aptech
              </span>
              <span className="block text-[7px] uppercase tracking-wider text-white">
                COMPUTER EDUCATION
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. DARK UNIVERSITY FOOTER (#333333) */}
      <footer id="lien-he" className="bg-[#333333] text-stone-300 pt-10 text-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
          {/* Centered University Crest */}
          <div className="flex justify-center mb-10">
            <UniversityCrest name={data.business.name} dark />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Thông tin liên hệ */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#f26b21] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#f26b21] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#f26b21] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: Liên kết */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase">LIÊN KẾT</h4>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <a href="#trang-chu" className="text-[#f26b21]">
                  Trang chủ
                </a>
                <a href="#triet-ly" className="hover:text-white">
                  Giới thiệu
                </a>
                <a href="#dang-ky-xet-tuyen" className="hover:text-white">
                  Tuyển sinh
                </a>
                <a href="#nganh-hoc" className="hover:text-white">
                  Ngành học
                </a>
                <a href="#he-thong-lien-ket" className="hover:text-white">
                  Doanh nghiệp
                </a>
                <a href="#giang-vien" className="hover:text-white">
                  Hỏi đáp
                </a>
                <a href="#tin-tuc" className="hover:text-white">
                  Tin tức
                </a>
                <a href="#lien-he" className="hover:text-white">
                  Liên hệ
                </a>
              </div>
            </div>

            {/* Col 3: Hình ảnh (3x2 Grid) */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase">HÌNH ẢNH</h4>
              <div className="grid grid-cols-3 gap-1.5">
                {(data.footerGallery || trungTamTiengAnh9DefaultData.footerGallery).map(
                  (img, i) => (
                    <div key={i} className="h-12 overflow-hidden">
                      <img
                        src={img}
                        alt={`Hoạt động ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Col 4: Đăng ký */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase">ĐĂNG KÝ</h4>
              <p className="text-[11px] leading-relaxed">
                Đăng ký để nhận được thông tin tuyển sinh mới nhất từ chúng tôi.
              </p>
              {footerDone ? (
                <p className="text-[#facc15] font-bold text-xs">
                  ✓ Đã đăng ký nhận thông báo tuyển sinh!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFooterDone(true);
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
                    className="px-3 py-2 text-[#f26b21] cursor-pointer"
                    aria-label="Gửi"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#1b1b1b] text-stone-400 text-center py-3 text-[11px]">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>
        </div>
      </footer>
    </div>
  );
}
