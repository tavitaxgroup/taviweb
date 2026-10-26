"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Search,
  ShoppingBag,
  BookOpen,
  GraduationCap,
  ThumbsUp,
  Zap,
  UserCheck,
  Award,
  Calendar,
  Eye,
  ArrowRight,
  ChevronDown,
  Lightbulb,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh18DefaultData,
  type TrungTamTiengAnh18Data
} from "@/template-sources/trung_tam_tieng_anh_18/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh18Data = adaptClonedTemplateData(
    trungTamTiengAnh18DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCourseTab, setActiveCourseTab] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(
    "Tư vấn chọn khóa học phù hợp"
  );
  const [submitted, setSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "031 3728 397";
  const primaryEmail = data.business.email?.[0] || "info@coursepro.edu.vn";

  const allCourses =
    data.popularCourses8 || trungTamTiengAnh18DefaultData.popularCourses8;
  const filteredCourses =
    activeCourseTab === "Tất cả"
      ? allCourses
      : allCourses.filter((c) => c.categoryTab === activeCourseTab);
  const displayedCourses =
    filteredCourses.length >= 4 ? filteredCourses : allCourses;

  const openCourseModal = (title?: string) => {
    if (title) setSelectedTitle(title);
    setSubmitted(false);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#009ee2] selection:text-white">
      {/* 1. DEEP PETROL TOPBAR (#0b486b) + WHITE STICKY HEADER */}
      <div className="bg-[#0b486b] text-white text-[11px] py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[#fdb813]"
            >
              <Phone className="w-3.5 h-3.5 text-[#fdb813]" />
              <span>{primaryPhone}</span>
            </a>
            <a
              href={`mailto:${primaryEmail}`}
              className="flex items-center gap-1.5 hover:text-[#fdb813]"
            >
              <Mail className="w-3.5 h-3.5 text-[#fdb813]" />
              <span>{primaryEmail}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => openCourseModal("Đăng nhập học viên")}
              className="hover:text-[#fdb813] cursor-pointer"
            >
              Đăng nhập
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => openCourseModal("Đăng ký tài khoản mới")}
              className="hover:text-[#fdb813] cursor-pointer"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      {/* White Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#009ee2] text-white flex items-center justify-center shadow-sm">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-black tracking-tight text-slate-900 uppercase leading-none">
                {data.business.name}
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">
                ONLINE ACADEMY
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-600">
            <a
              href="#trang-chu"
              className="text-[#009ee2] border-b-2 border-[#009ee2] pb-1"
            >
              Trang chủ
            </a>
            <a href="#thanh-cong" className="hover:text-[#009ee2]">
              Giới thiệu
            </a>
            <a
              href="#khoa-hoc"
              className="hover:text-[#009ee2] flex items-center gap-1"
            >
              <span>Khoá học</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#blog" className="hover:text-[#009ee2]">
              Blog
            </a>
            <a href="#su-kien" className="hover:text-[#009ee2]">
              Sự kiện
            </a>
            <button
              onClick={() => openCourseModal()}
              className="hover:text-[#009ee2] cursor-pointer"
            >
              Liên hệ
            </button>
          </nav>

          {/* Right Cart */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openCourseModal("Giỏ hàng khóa học")}
              className="relative p-2 text-slate-700 hover:text-[#009ee2] cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#009ee2] text-white text-[9px] font-bold flex items-center justify-center">
                0
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2.5 text-xs font-bold">
            <a
              href="#khoa-hoc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Các khóa học phổ biến
            </a>
            <a
              href="#su-kien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Sự kiện sắp tới
            </a>
            <a
              href="#blog"
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
              className="w-full bg-[#009ee2] text-white py-2.5 rounded-lg"
            >
              Tìm khóa học phù hợp
            </button>
          </div>
        )}
      </header>

      {/* 2. ICE-BLUE CENTERED SEARCH HERO ("Học điều gì MỚI hôm nay") */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-b from-[#e8f5fc] to-[#f4fafe] py-16 lg:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Floating Student Collage */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-start relative">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md border-4 border-white -mb-6 z-10">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-40 h-44 rounded-2xl bg-[#fdb813] p-2 shadow-xl ml-8">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="Student"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Center Search + 3 Line-Art Counters */}
            <div className="lg:col-span-6 text-center space-y-8">
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                Học điều gì{" "}
                <span className="text-[#009ee2] underline decoration-[#fdb813] decoration-4 underline-offset-8">
                  MỚI
                </span>{" "}
                <br /> hôm nay
              </h1>

              {/* White Search Bar */}
              <div className="bg-white rounded-xl shadow-lg p-2 flex items-center border border-sky-100 max-w-lg mx-auto">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Bạn muốn học gì?"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm focus:outline-none"
                />
                <button
                  onClick={() =>
                    openCourseModal(searchTerm || "Tư vấn chọn khóa học")
                  }
                  className="p-2.5 text-[#009ee2] hover:bg-sky-50 rounded-lg cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* 3 Line-Art Counters (1,205+ | 50+ | 800+) */}
              <div className="pt-4 grid grid-cols-3 gap-4">
                {(
                  data.heroCounters3 || trungTamTiengAnh18DefaultData.heroCounters3
                ).map((item, idx) => (
                  <div key={item.id} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white text-[#009ee2] shadow-sm flex items-center justify-center mb-2">
                      {idx === 0 ? (
                        <BookOpen className="w-6 h-6 stroke-[1.5]" />
                      ) : idx === 1 ? (
                        <GraduationCap className="w-6 h-6 stroke-[1.5]" />
                      ) : (
                        <ThumbsUp className="w-6 h-6 stroke-[1.5]" />
                      )}
                    </div>
                    <span className="text-lg sm:text-xl font-black text-[#009ee2]">
                      {item.number}
                    </span>
                    <span className="text-[11px] font-bold text-slate-700 mt-0.5">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Student Portrait + Notification Toast */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-end relative">
              <div className="w-44 h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={data.hero.backgroundImage}
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 bg-white rounded-xl p-3.5 shadow-lg border border-sky-100 max-w-[230px] relative">
                <div className="w-7 h-7 rounded-lg bg-[#fdb813] text-white flex items-center justify-center absolute -top-3 -left-3 shadow">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed pl-2">
                  Xin chúc mừng <strong>Sophia</strong> vì đã trở thành học viên xuất sắc
                  của tuần này!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "KHOA HỌC — Các Khoá Học Phổ Biến Nhất" (4 TABS + 4x2 GRID + COURSE FINDER) */}
      <section id="khoa-hoc" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#009ee2]">
              KHOA HỌC
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Các Khoá Học{" "}
              <span className="underline decoration-[#fdb813] decoration-4 underline-offset-4">
                Phổ Biến
              </span>{" "}
              Nhất
            </h2>
          </div>

          {/* 4 Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {["Tất cả", "Đang hot", "Phổ biến", "Đặc sắc"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCourseTab(tab)}
                className={`text-xs font-bold px-4 py-1.5 rounded transition-colors cursor-pointer ${
                  activeCourseTab === tab
                    ? "bg-white text-[#009ee2] shadow border border-sky-100"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 4x2 Course Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedCourses.slice(0, 8).map((c) => (
              <div
                key={c.id}
                onClick={() => openCourseModal(c.title)}
                className="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 flex gap-1">
                      {c.badges.map((b, i) => (
                        <span
                          key={i}
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
                    <span className="inline-block bg-sky-50 text-[#009ee2] text-[10px] font-bold px-2.5 py-0.5 rounded mb-2">
                      {c.level}
                    </span>
                    <h3 className="text-xs font-extrabold text-slate-900 line-clamp-2 group-hover:text-[#009ee2] leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-[11px] text-[#009ee2] mt-1.5">
                      {c.instructor}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-1">
                  <span className="text-xs font-black text-slate-900 block">
                    {c.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Course Finder Callout Box */}
          <div className="mt-14 max-w-2xl mx-auto relative">
            <div className="w-10 h-10 rounded-full bg-[#009ee2] text-white flex items-center justify-center shadow-lg absolute -top-5 -left-3 z-10">
              <Zap className="w-5 h-5" />
            </div>
            <div className="bg-[#eff8fe] border border-sky-100 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#009ee2]">
                  Hãy để chúng tôi giúp
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                  Tìm Khoá Học Phù Hợp Với Bạn
                </h3>
              </div>
              <button
                onClick={() => openCourseModal("Tư vấn lộ trình cá nhân hóa")}
                className="bg-[#fdb813] hover:bg-[#e5a50d] text-slate-900 text-xs font-extrabold px-6 py-3 rounded-lg shadow-sm shrink-0 cursor-pointer"
              >
                Bắt đầu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "BẮT ĐẦU THÀNH CÔNG — Đạt Được Mục Tiêu Của Bạn" (4 LINE-ART MILESTONE COUNTERS) */}
      <section id="thanh-cong" className="py-14 bg-[#f2f9fd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-1.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#009ee2]">
                BẮT ĐẦU THÀNH CÔNG
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Đạt Được Mục Tiêu Của Bạn Với{" "}
                <span className="underline decoration-[#fdb813] decoration-4 underline-offset-4">
                  {data.business.name}
                </span>
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {(
                data.goalCounters4 || trungTamTiengAnh18DefaultData.goalCounters4
              ).map((item, idx) => (
                <div key={item.id} className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-white text-[#009ee2] border border-sky-100 flex items-center justify-center mb-3 shadow-sm">
                    {idx === 0 ? (
                      <UserCheck className="w-6 h-6 stroke-[1.5]" />
                    ) : idx === 1 ? (
                      <BookOpen className="w-6 h-6 stroke-[1.5]" />
                    ) : idx === 2 ? (
                      <Award className="w-6 h-6 stroke-[1.5]" />
                    ) : (
                      <GraduationCap className="w-6 h-6 stroke-[1.5]" />
                    )}
                  </div>
                  <span className="text-lg sm:text-xl font-black text-slate-900">
                    {item.number}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "SỰ KIỆN — Sự Kiện Sắp Tới" (LEFT INTRO + 3 DETAILED CARDS) */}
      <section id="su-kien" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3 space-y-4">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#009ee2]">
                SỰ KIỆN
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Sự Kiện{" "}
                <span className="underline decoration-[#fdb813] decoration-4 underline-offset-4">
                  Sắp Tới
                </span>
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Chuỗi hội thảo chuyên đề và lớp học thử trực tuyến giúp học viên định
                hướng lộ trình ngoại ngữ hiệu quả.
              </p>
              <button
                onClick={() => openCourseModal("Đăng ký tham gia Sự kiện sắp tới")}
                className="bg-sky-50 hover:bg-[#009ee2] text-[#009ee2] hover:text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Xem tất cả
              </button>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
              {(
                data.upcomingEvents3 ||
                trungTamTiengAnh18DefaultData.upcomingEvents3
              ).map((ev) => (
                <div
                  key={ev.id}
                  onClick={() => openCourseModal(ev.title)}
                  className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={ev.image}
                        alt={ev.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2.5 left-2.5 flex gap-1">
                        {ev.badges.map((b, i) => (
                          <span
                            key={i}
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
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-2">
                        {ev.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 my-2">
                        <span>{ev.lessons}</span>
                        <span>•</span>
                        <span>{ev.duration}</span>
                        <span>•</span>
                        <span>{ev.level}</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {ev.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[#009ee2] font-semibold">
                      {ev.instructor}
                    </span>
                    <span className="font-black text-slate-900">{ev.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. "TESTIMONIALS — Xem Những Gì Các Sinh Viên Của Chúng Tôi Nói" (4 CARDS) */}
      <section className="py-16 lg:py-24 bg-[#f4f7f9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#009ee2]">
              TESTIMONIALS
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Xem Những Gì Các Sinh Viên{" "}
              <span className="underline decoration-[#fdb813] decoration-4 underline-offset-4">
                Của Chúng Tôi
              </span>{" "}
              Nói
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(
              data.studentReviews4 || trungTamTiengAnh18DefaultData.studentReviews4
            ).map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-12 h-12 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#009ee2]">
                    {rev.headline}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {rev.content}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-50">
                  <h4 className="text-xs font-extrabold text-slate-900">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] text-slate-400">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "CẬP NHẬT BLOG — Tin Tức Của CoursePro" */}
      <section id="blog" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Quick Links */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#009ee2]">
                CẬP NHẬT BLOG
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                Tin Tức Của{" "}
                <span className="underline decoration-[#fdb813] decoration-4 underline-offset-4">
                  {data.business.name}
                </span>
              </h2>

              <ul className="space-y-3 pt-2 text-xs font-bold text-slate-800">
                {(
                  data.blogQuickLinks ||
                  trungTamTiengAnh18DefaultData.blogQuickLinks
                ).map((link, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#009ee2] shrink-0 mt-0.5" />
                    <button
                      onClick={() => openCourseModal(link)}
                      className="text-left hover:text-[#009ee2] transition-colors cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right 3 Blog Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
              {(data.news || trungTamTiengAnh18DefaultData.news || []).map(
                (post) => (
                  <article
                    key={post.id}
                    className="flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="h-40 rounded-xl overflow-hidden mb-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-slate-400 mb-1.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div>
                      <button
                        onClick={() => openCourseModal(post.title)}
                        className="bg-sky-50 hover:bg-[#009ee2] text-[#009ee2] hover:text-white text-[11px] font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                      >
                        Đọc thêm
                      </button>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLEAN WHITE 4-COLUMN FOOTER */}
      <footer className="bg-[#f8fafc] border-t border-slate-100 pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-200 text-xs">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#009ee2] text-white flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="font-black text-base text-slate-900 uppercase">
                  {data.business.name}
                </span>
              </div>
              <span className="block text-slate-400 pt-1">Gọi cho chúng tôi</span>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="text-base font-extrabold text-[#009ee2] block"
              >
                {primaryPhone}
              </a>
              <p className="text-slate-500 leading-relaxed">
                {data.business.address}
              </p>
              <p className="text-slate-500">{primaryEmail}</p>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-900 mb-3">
                Về chúng tôi
              </h4>
              <ul className="space-y-2 text-slate-500">
                <li>Giới Thiệu</li>
                <li>Khoá học</li>
                <li>Giảng viên</li>
                <li>Sự kiện</li>
                <li>Trở thành một giảng viên</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-900 mb-3">Liên kết</h4>
              <ul className="space-y-2 text-slate-500">
                <li>Tin tức & Blogs</li>
                <li>Thư viện</li>
                <li>Phòng trưng bày</li>
                <li>Đối tác</li>
                <li>Sự nghiệp</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-900 mb-3">Hỗ trợ</h4>
              <ul className="space-y-2 text-slate-500">
                <li>Tài liệu</li>
                <li>FAQs</li>
                <li>Diễn đàn</li>
                <li>Sơ đồ trang web</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span>Điều khoản sử dụng</span>
              <span>Chính sách bảo mật</span>
            </div>
            <p>© {new Date().getFullYear()} {data.business.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* COURSE CONSULTATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#009ee2] mx-auto" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  Đăng ký thành công!
                </h3>
                <p className="text-xs text-slate-600">
                  Đội ngũ tư vấn của <strong>{data.business.name}</strong> sẽ gửi tài khoản học
                  thử và tài liệu tới bạn ngay.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-[#009ee2] text-white text-xs font-bold px-6 py-2.5 rounded-lg cursor-pointer"
                >
                  Đóng
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
                  <span className="text-[11px] font-bold uppercase text-[#009ee2]">
                    Tư vấn & Ghi danh Khóa học
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    {data.business.name}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên học viên *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#009ee2]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ *"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#009ee2]"
                />
                <input
                  type="text"
                  value={selectedTitle}
                  onChange={(e) => setSelectedTitle(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#009ee2]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#009ee2] hover:bg-[#0284c7] text-white font-extrabold text-xs uppercase py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Bắt đầu học ngay
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
