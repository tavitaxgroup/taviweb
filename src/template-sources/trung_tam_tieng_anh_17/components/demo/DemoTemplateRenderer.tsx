"use client";

import React, { useState } from "react";
import {
  BookOpen,
  ShoppingBag,
  Star,
  Settings,
  PlayCircle,
  GraduationCap,
  MessageSquare,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Smartphone,
  CheckCircle2,
  Plus,
  Minus,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh17DefaultData,
  type TrungTamTiengAnh17Data
} from "@/template-sources/trung_tam_tieng_anh_17/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh17Data = adaptClonedTemplateData(
    trungTamTiengAnh17DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");
  const [leadMagnetSubmitted, setLeadMagnetSubmitted] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(
    "Khóa học Tiếng Anh Giao tiếp Phản xạ Bản xứ"
  );
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);

  const openCourseModal = (courseTitle?: string) => {
    if (courseTitle) setSelectedCourse(courseTitle);
    setEnrollSubmitted(false);
    setEnrollModalOpen(true);
  };

  const newsList = data.news || trungTamTiengAnh17DefaultData.news || [];
  const featuredNews = newsList[0];
  const sideNews = newsList.slice(1, 3);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#5b47f5] selection:text-white">
      {/* 1. WHITE HEADER ("LEARN PRO") + CENTERED EDTECH HERO */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#5b47f5] text-white flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-lg font-black tracking-tight text-slate-900 uppercase">
              {data.business.name}
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a
              href="#trang-chu"
              className="text-[#5b47f5] border-b-2 border-[#5b47f5] pb-1 font-bold"
            >
              Trang Chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#5b47f5]">
              Giới thiệu
            </a>
            <a
              href="#khoa-hoc"
              className="hover:text-[#5b47f5] flex items-center gap-1"
            >
              <span>Khoá học</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#tin-tuc" className="hover:text-[#5b47f5]">
              Blog
            </a>
            <a href="#giang-vien" className="hover:text-[#5b47f5]">
              Giảng viên
            </a>
            <a href="#faq" className="hover:text-[#5b47f5]">
              Liên hệ
            </a>
          </nav>

          {/* Right Cart + Log In / Sign Up */}
          <div className="hidden sm:flex items-center gap-3 text-xs font-bold">
            <button
              onClick={() => openCourseModal("Giỏ hàng khóa học")}
              className="relative p-2 text-slate-700 hover:text-[#5b47f5] cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#5b47f5] text-white text-[9px] flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => openCourseModal("Đăng nhập tài khoản học viên")}
              className="text-slate-700 hover:text-[#5b47f5] px-2 py-1.5 cursor-pointer"
            >
              Đăng nhập
            </button>
            <button
              onClick={() => openCourseModal("Đăng ký tài khoản mới")}
              className="bg-[#eceafe] hover:bg-[#5b47f5] text-[#5b47f5] hover:text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Đăng ký
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2.5 text-xs font-bold">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Giới thiệu
            </a>
            <a
              href="#khoa-hoc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Khóa học trực tuyến
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Tin tức & Blog
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCourseModal();
              }}
              className="w-full bg-[#5b47f5] text-white py-2.5 rounded-lg"
            >
              Đăng ký học ngay
            </button>
          </div>
        )}
      </header>

      {/* CENTERED EDTECH HERO WITH LAPTOP ILLUSTRATION */}
      <section
        id="trang-chu"
        className="bg-[#f8f7fc] pt-14 pb-16 lg:pt-20 lg:pb-24 relative overflow-hidden"
      >
        {/* Playful Geometric Accents */}
        <span className="hidden sm:block w-5 h-5 rounded-full bg-orange-400 absolute top-14 left-1/4" />
        <span className="hidden sm:block w-4 h-4 bg-amber-700 rotate-12 absolute top-36 left-1/5" />
        <span className="hidden sm:block w-6 h-6 bg-[#5b47f5] rotate-12 absolute top-32 right-1/5" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            {data.hero.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            {data.hero.subtitle}
          </p>
          <div className="pt-2">
            <button
              onClick={() => openCourseModal()}
              className="bg-[#5b47f5] hover:bg-[#4936d9] text-white text-xs font-extrabold uppercase px-7 py-3.5 rounded-lg shadow-lg shadow-[#5b47f5]/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              {data.hero.ctaText || "ĐĂNG KÝ NGAY"}
            </button>
          </div>

          {/* Illustrated Laptop Mockup */}
          <div className="pt-8 max-w-xl mx-auto">
            <div className="bg-white rounded-t-3xl p-3 shadow-xl border-4 border-slate-200 mx-auto max-w-md">
              <div className="bg-gradient-to-br from-[#5b47f5] to-[#7c69ff] text-white rounded-2xl py-10 px-6 text-center space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">
                  {data.hero.eyebrow || "MONA LEARN PRO"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                  Chinh Phục <br /> Kiến Thức, Xây <br /> Dựng Tương Lai
                </h2>
                <p className="text-xs text-indigo-100 pt-1">
                  Với Giảng Viên {data.business.name}
                </p>
              </div>
            </div>
            <div className="h-4 bg-slate-300 rounded-b-2xl max-w-lg mx-auto shadow-md" />
          </div>
        </div>
      </section>

      {/* 2. MENTOR QUOTE SPLIT SECTION ("Xin chào, tôi là Văn Long 👋") */}
      <section id="giang-vien" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Portrait with Green Shape Accent */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-56 h-56 rounded-full bg-emerald-400/80 absolute -bottom-4 -right-2 -z-10" />
              <div className="w-64 sm:w-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={data.mentorSection.image}
                  alt="Mentor"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Right Quote + 2 Columns + Full-width Indigo Bar */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold text-[#5b47f5]">
                {data.mentorSection.greeting}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#5b47f5] leading-snug">
                {data.mentorSection.quote}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <h3 className="text-xs font-extrabold text-slate-900">
                    {data.mentorSection.col1Title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    {data.mentorSection.col1Desc}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-slate-900">
                    {data.mentorSection.col2Title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    {data.mentorSection.col2Desc}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openCourseModal("Tư vấn lộ trình cá nhân hóa")}
                  className="w-full bg-[#5b47f5] hover:bg-[#4936d9] text-white text-xs font-extrabold uppercase py-3.5 px-6 rounded-lg flex items-center justify-center gap-1.5 shadow-md transition-colors cursor-pointer"
                >
                  <span>BẮT ĐẦU NGAY BÂY GIỜ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Xây Dựng Một Quan Điểm Nghề Nghiệp Tuyệt Vời" (LEFT GRAPHIC + 2x2 FEATURE CARDS) */}
      <section id="gioi-thieu" className="py-16 lg:py-20 bg-[#f4f3ff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Xây Dựng Một Quan Điểm Nghề Nghiệp Tuyệt Vời
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bạn không phải vật lộn một mình, bạn đã có sự hỗ trợ và đồng hành
                24/7 của đội ngũ giảng viên chúng tôi.
              </p>
              <div className="pt-2">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
                  alt="Học trực tuyến"
                  className="w-full h-48 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {(
                data.platformFeatures4 ||
                trungTamTiengAnh17DefaultData.platformFeatures4
              ).map((feat, idx) => (
                <div
                  key={feat.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-50 space-y-3"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      idx === 0
                        ? "bg-indigo-50 text-[#5b47f5]"
                        : idx === 1
                        ? "bg-rose-50 text-rose-500"
                        : idx === 2
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-500"
                    }`}
                  >
                    {idx === 0 ? (
                      <Settings className="w-5 h-5" />
                    ) : idx === 1 ? (
                      <PlayCircle className="w-5 h-5" />
                    ) : idx === 2 ? (
                      <GraduationCap className="w-5 h-5" />
                    ) : (
                      <MessageSquare className="w-5 h-5" />
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-snug">
                    {feat.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Bắt Đầu Học Ngôn Ngữ & Kỹ Năng" (3 TRACK CARDS + WARM PEACH BANNER) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Bắt Đầu Học Ngôn Ngữ & Kỹ Năng Toàn Cầu
            </h2>
            <p className="mt-1.5 text-xs text-slate-500">
              Học bất kỳ chương trình ngoại ngữ nào từ xa và với mức phí hợp lý. Bạn
              không phải vật lộn một mình.
            </p>
            <button
              onClick={() => openCourseModal()}
              className="mt-2 text-xs font-bold text-[#5b47f5] underline cursor-pointer"
            >
              Bạn muốn học gì?
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(
              data.skillTracks3 || trungTamTiengAnh17DefaultData.skillTracks3
            ).map((track) => (
              <div
                key={track.id}
                className="bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-4 border-indigo-50">
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {track.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {track.description}
                  </p>
                </div>

                <button
                  onClick={() => openCourseModal(track.title)}
                  className="mt-5 w-full bg-slate-50 hover:bg-[#5b47f5] text-slate-700 hover:text-white text-[11px] font-extrabold uppercase py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  BẮT ĐẦU NGAY &gt;
                </button>
              </div>
            ))}
          </div>

          {/* Warm Peach Horizontal Banner (#fcece3) */}
          <div className="mt-12 bg-[#fcece3] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-bold text-slate-600">
                Đăng Ký Khóa Học
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                Chọn Khóa Học Phù Hợp Với Mục Tiêu Và Sở Thích Của Bạn
              </h3>
            </div>
            <button
              onClick={() => openCourseModal()}
              className="bg-[#5b47f5] hover:bg-[#4936d9] text-white text-xs font-extrabold uppercase px-6 py-3 rounded-lg shrink-0 shadow cursor-pointer"
            >
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </section>

      {/* 5. LEAD MAGNET SPLIT SECTION ("MIỄN PHÍ Tài nguyên học tiếng Anh cho người mới bắt đầu") */}
      <section className="py-16 bg-[#f4f3ff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy + Countdown Timer */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                <span className="text-[#5b47f5]">MIỄN PHÍ</span> Tài nguyên học tiếng
                Anh cho người mới bắt đầu
              </h2>
              <p className="text-xs text-slate-500">
                Học ngôn ngữ mới, kết nối với thế giới và trở thành công dân toàn cầu
                cùng {data.business.name}
              </p>

              {/* 4 Countdown Numbers (99 : 14 : 15 : 51) */}
              <div className="flex items-center gap-6 pt-2">
                {[
                  { num: "99", label: "NGÀY" },
                  { num: "14", label: "GIỜ" },
                  { num: "15", label: "PHÚT" },
                  { num: "51", label: "GIÂY" }
                ].map((unit, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-2xl sm:text-3xl font-black text-[#5b47f5]">
                      {unit.num}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right White Registration Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-50">
                <h3 className="text-center text-base font-extrabold text-slate-900 mb-5">
                  Đăng Ký Ngay
                </h3>
                {leadMagnetSubmitted ? (
                  <div className="text-center py-6 space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                    <p className="text-xs font-bold text-slate-800">
                      Bộ tài liệu tự học Tiếng Anh PDF + Audio đã được gửi tới bạn!
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setLeadMagnetSubmitted(true);
                    }}
                    className="space-y-3.5"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Họ tên đầy đủ"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#5b47f5]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#5b47f5]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#5b47f5]"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#5b47f5] hover:bg-[#4936d9] text-white font-bold text-xs py-3 rounded-lg shadow transition-colors cursor-pointer"
                    >
                      Nhận ngay
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Khóa Học Trực Tuyến Cho Mọi Người Và Mọi Nơi" (3x2 COURSE CATALOG GRID) */}
      <section id="khoa-hoc" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Khóa Học Trực Tuyến Cho Mọi Người Và Mọi Nơi
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Bạn không phải vật lộn một mình, bạn đã có sự hỗ trợ và giúp đỡ của
                chúng tôi.
              </p>
            </div>
            <button
              onClick={() => openCourseModal("Tất cả khóa học trực tuyến")}
              className="border border-slate-200 hover:border-[#5b47f5] text-[#5b47f5] text-[11px] font-bold uppercase px-4 py-2 rounded-lg cursor-pointer"
            >
              XEM TẤT CẢ KHÓA HỌC
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.courses6 || trungTamTiengAnh17DefaultData.courses6).map((c) => (
              <div
                key={c.id}
                onClick={() => openCourseModal(c.title)}
                className="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                      {c.badges.map((b, idx) => (
                        <span
                          key={idx}
                          className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded text-white ${
                            b === "MIỄN PHÍ" ? "bg-emerald-500" : "bg-rose-600"
                          }`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4">
                    <span className="inline-block bg-indigo-50 text-[#5b47f5] text-[10px] font-bold px-2.5 py-0.5 rounded mb-2">
                      {c.level}
                    </span>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-2 group-hover:text-[#5b47f5]">
                      {c.title}
                    </h3>
                    <p className="text-[11px] text-[#5b47f5] mt-1">{c.instructor}</p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-black text-slate-900">
                    {c.price}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                    <span className="text-[10px] text-slate-400 ml-1">(1)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "Được Yêu Thích Bởi 200,000+ Học Viên" (4 STAGGERED TESTIMONIAL CARDS) */}
      <section className="py-16 lg:py-24 bg-[#eef0f3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Được Yêu Thích Bởi 200,000+ Học Viên
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Sự kỳ diệu là trong các đánh giá. Học viên của chúng tôi nói gì
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(
              data.testimonials || trungTamTiengAnh17DefaultData.testimonials || []
            ).map((t, idx) => {
              const isHighlighted = idx === 0;
              return (
                <div
                  key={t.id}
                  className={`rounded-2xl p-6 sm:p-7 shadow-sm ${
                    isHighlighted
                      ? "bg-[#5b47f5] text-white"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {t.content}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3
                        className={`text-xs font-extrabold ${
                          isHighlighted ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {t.author}
                      </h3>
                      <span
                        className={`text-[10px] ${
                          isHighlighted ? "text-indigo-200" : "text-slate-400"
                        }`}
                      >
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. "Tin Tức Gần Đây" + "Các Câu Hỏi Thường Gặp" + INDIGO APP BANNER + FOOTER */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Tin Tức Gần Đây
              </h2>
              <p className="text-xs text-slate-500">
                Tin tức mới nhất từ {data.business.name}
              </p>
            </div>
            <button
              onClick={() => openCourseModal()}
              className="border border-slate-200 text-[#5b47f5] text-[11px] font-bold uppercase px-4 py-2 rounded-lg cursor-pointer"
            >
              XEM TẤT CẢ TIN TỨC
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Large Overlay News Card */}
            {featuredNews && (
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden h-64 sm:h-72 group">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className="text-[11px] font-bold text-indigo-300">
                    {featuredNews.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold mt-1">
                    {featuredNews.title}
                  </h3>
                </div>
              </div>
            )}

            {/* Right 2 Standard News Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sideNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-[#5b47f5]">
                      {item.category}
                    </span>
                    <h3 className="text-xs font-extrabold text-slate-900 mt-1 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* "Các Câu Hỏi Thường Gặp" (FAQ Accordion) */}
      <section id="faq" className="py-16 bg-[#eef0f3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 mb-12">
            Các Câu Hỏi Thường Gặp
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Q&A Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-56 h-56 flex items-center justify-center">
                <div className="w-28 h-28 rounded-2xl bg-[#5b47f5] text-white flex items-center justify-center text-5xl font-black shadow-xl z-10">
                  ?
                </div>
                <div className="w-20 h-20 rounded-2xl bg-sky-400 text-white flex items-center justify-center text-3xl font-black shadow-lg absolute -top-2 -right-2">
                  ?
                </div>
                <div className="w-16 h-16 rounded-2xl bg-rose-400 text-white flex items-center justify-center text-2xl font-black shadow-lg absolute -bottom-2 -left-2">
                  ?
                </div>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {(data.faqs || trungTamTiengAnh17DefaultData.faqs).map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                      className={`w-full px-5 py-3.5 text-left text-xs sm:text-sm font-extrabold flex items-center justify-between gap-3 cursor-pointer ${
                        isOpen
                          ? "bg-[#5b47f5] text-white"
                          : "bg-white text-slate-800"
                      }`}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 shrink-0 text-slate-400" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-5 text-xs text-slate-600 leading-relaxed bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Indigo App Download Banner */}
      <section className="py-12 bg-[#5b47f5] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold leading-snug max-w-sm">
              Tìm Hiểu Thêm Trên Di Động Của Bạn Bất Cứ Lúc Nào!
            </h2>
            <p className="text-xs text-indigo-100">Tải ứng dụng học tập</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-1">
              <button
                onClick={() => openCourseModal("Tải ứng dụng iOS App Store")}
                className="bg-black text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
              >
                App Store
              </button>
              <button
                onClick={() => openCourseModal("Tải ứng dụng Google Play")}
                className="bg-black text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
              >
                Google Play
              </button>
            </div>
          </div>

          <div className="w-28 h-28 rounded-3xl bg-white/15 flex items-center justify-center">
            <Smartphone className="w-14 h-14 text-amber-300" />
          </div>
        </div>
      </section>

      {/* 4-Column White Footer */}
      <footer className="bg-white border-t border-slate-100 pt-12 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-100 text-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#5b47f5] text-white flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="font-black text-base text-slate-900 uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-900 mb-3">Danh mục</h4>
              <ul className="space-y-2 text-slate-500">
                <li>Giới thiệu</li>
                <li>Khóa học</li>
                <li>Giảng viên</li>
                <li>Tin tức</li>
                <li>Trở thành giảng viên</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-900 mb-3">Liên kết</h4>
              <ul className="space-y-2 text-slate-500">
                <li>Tin tức</li>
                <li>Thư viện</li>
                <li>Phòng trưng bày</li>
                <li>Đối tác</li>
                <li>Công việc</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-extrabold text-slate-900">
                Đăng ký nhận tin tức
              </h4>
              <p className="text-slate-500 leading-relaxed">
                Bạn muốn luôn cập nhật những thông tin mới nhất về khóa học, sự kiện
                và các nguồn tư liệu giá trị?
              </p>
              {newsletterDone ? (
                <p className="text-[#5b47f5] font-bold">
                  Đã đăng ký nhận tin thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex items-center gap-1.5"
                >
                  <input
                    type="email"
                    required
                    placeholder="Nhập email..."
                    className="border border-slate-200 rounded-lg px-3 py-2 text-xs w-full focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#5b47f5] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-lg shrink-0 cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} {data.business.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* COURSE ENROLLMENT MODAL */}
      {enrollModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setEnrollModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {enrollSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#5b47f5] mx-auto" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  Kích hoạt khóa học thành công!
                </h3>
                <p className="text-xs text-slate-600">
                  Bộ phận Học vụ của <strong>{data.business.name}</strong> sẽ gửi tài khoản
                  truy cập và lộ trình học qua Email/Zalo trong 5 phút.
                </p>
                <button
                  onClick={() => setEnrollModalOpen(false)}
                  className="bg-[#5b47f5] text-white text-xs font-bold px-6 py-2.5 rounded-lg cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnrollSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#5b47f5]">
                    Đăng ký Khóa học Trực tuyến
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    {data.business.name}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên học viên *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#5b47f5]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại / Zalo *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#5b47f5]"
                />
                <input
                  type="text"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#5b47f5]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#5b47f5] hover:bg-[#4936d9] text-white font-extrabold text-xs uppercase py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Xác nhận đăng ký học
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
