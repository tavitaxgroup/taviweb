"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Award,
  ClipboardCheck,
  Users,
  Palette,
  HeartHandshake,
  Lightbulb,
  Store,
  FileText,
  Sparkles,
  PenTool,
  Languages,
  Camera,
  Play,
  ChevronLeft,
  ChevronRight,
  Send,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration9DefaultData,
  type LeadGeneration9Data
} from "@/template-sources/lead_generation_9/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration9Data = adaptClonedTemplateData(
    leadGeneration9DefaultData,
    incomingData
  );

  const [leadSubmitted, setLeadSubmitted] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalCourse, setModalCourse] = useState<string>("Đăng ký khóa học Thiết kế Đồ họa");
  const [modalDone, setModalDone] = useState<boolean>(false);

  const openCourseModal = (title?: string) => {
    if (title) setModalCourse(title);
    setModalDone(false);
    setModalOpen(true);
  };

  const renderWhyIcon = (icon: string) => {
    switch (icon) {
      case "award":
        return <Award className="w-10 h-10 text-[#C82027]" />;
      case "clipboard":
        return <ClipboardCheck className="w-10 h-10 text-[#C82027]" />;
      case "users":
        return <Users className="w-10 h-10 text-[#C82027]" />;
      case "clock":
        return <Clock className="w-10 h-10 text-[#C82027]" />;
      case "palette":
        return <Palette className="w-10 h-10 text-[#C82027]" />;
      default:
        return <HeartHandshake className="w-10 h-10 text-[#C82027]" />;
    }
  };

  const renderServiceIcon = (idx: number) => {
    const icons = [
      Lightbulb,
      Store,
      FileText,
      Sparkles,
      PenTool,
      Languages,
      Camera,
      FileText
    ];
    const IconComp = icons[idx % icons.length];
    return <IconComp className="w-7 h-7 text-[#C82027] shrink-0" />;
  };

  const featuredProject = data.bentoProjects[0];
  const topRightProject = data.bentoProjects[1];
  const bottomRightProjects = data.bentoProjects.slice(2, 4);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#C82027] selection:text-white">
      {/* TOP PROMO STRIP */}
      <div className="bg-gradient-to-r from-[#1E3A8A] via-[#C82027] to-[#B91C1C] text-white text-[11px] font-extrabold py-2 px-4 text-center tracking-wider uppercase">
        {data.topPromoBannerText}
      </div>

      {/* MAIN WHITE NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Red Box Logo */}
          <a
            href="#"
            className="bg-[#C82027] text-white font-black uppercase tracking-wider text-sm sm:text-base px-4 py-2 rounded-xs shadow-xs"
          >
            {data.business.name}
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
            <a href="#trang-chu" className="text-[#C82027]">
              Trang chủ
            </a>
            <a href="#du-an" className="hover:text-[#C82027] transition">
              Dự án
            </a>
            <a href="#dich-vu" className="hover:text-[#C82027] transition">
              Học đồ họa ▾
            </a>
            <a href="#khoa-hoc" className="hover:text-[#C82027] transition">
              Khóa học ▾
            </a>
            <a href="#mua-sam" className="hover:text-[#C82027] transition">
              Mua sắm ▾
            </a>
            <a href="#tin-tuc" className="hover:text-[#C82027] transition">
              Tin tức ▾
            </a>
          </nav>

          {/* Right Phone & Red CTA */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${data.business.phone[0]}`}
              className="hidden sm:flex items-center gap-1.5 text-xs font-extrabold text-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-[#C82027]" />
              <span>{data.business.phone[0]}</span>
            </a>
            <button
              onClick={() => openCourseModal("Tư vấn lộ trình học Đồ họa")}
              className="bg-[#C82027] hover:bg-red-800 text-white text-[11px] font-extrabold uppercase px-4 py-2 rounded-xs transition cursor-pointer"
            >
              LIÊN HỆ
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION + INLINE DARK LEAD CAPTURE BAR */}
      <section id="trang-chu" className="relative bg-slate-900 text-white">
        <div className="relative h-[420px] sm:h-[500px] overflow-hidden flex items-center justify-center text-center">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

          {/* Floating InDesign Badge */}
          <div className="hidden md:flex w-20 h-20 rounded-2xl bg-[#49021F] border-2 border-[#FF3366] text-[#FF3366] text-3xl font-black items-center justify-center shadow-2xl rotate-6 absolute bottom-10 right-16">
            Id
          </div>

          <div className="relative z-10 max-w-xl px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-200 block mb-2">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              {data.hero.title}
            </h1>
            <a
              href={data.hero.ctaLink || "#khoa-hoc"}
              className="inline-block border border-white/80 hover:bg-white hover:text-slate-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 transition"
            >
              {data.hero.ctaText}
            </a>
          </div>
        </div>

        {/* Inline Dark Lead Capture Bar */}
        <div className="bg-[#1A1C20] border-t border-white/10 py-6 px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-center text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              LIÊN HỆ {data.business.name.toUpperCase()}
            </h3>
            {leadSubmitted ? (
              <p className="text-center text-xs text-emerald-400 font-bold py-2">
                ✓ Đã ghi nhận thông tin! Chuyên viên tư vấn khóa học sẽ liên hệ với bạn ngay.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLeadSubmitted(true);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ tên *"
                  className="lg:col-span-3 px-3.5 py-2 bg-black/60 border border-white/20 text-xs text-white focus:outline-none focus:border-[#C82027]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  className="lg:col-span-3 px-3.5 py-2 bg-black/60 border border-white/20 text-xs text-white focus:outline-none focus:border-[#C82027]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="lg:col-span-2 px-3.5 py-2 bg-black/60 border border-white/20 text-xs text-white focus:outline-none focus:border-[#C82027]"
                />
                <input
                  type="text"
                  placeholder="Lời nhắn"
                  className="lg:col-span-3 px-3.5 py-2 bg-black/60 border border-white/20 text-xs text-white focus:outline-none focus:border-[#C82027]"
                />
                <button
                  type="submit"
                  className="lg:col-span-1 py-2 bg-[#C82027] hover:bg-red-700 text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  GỬI
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE US ("TẠI SAO CHỌN CREATIVE SPOT?") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900 mb-3">
            {data.business.aboutTitle}
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            {data.business.aboutText[0]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.whyChooseReasons.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-lg p-7 flex flex-col items-center text-center hover:border-[#C82027] hover:shadow-md transition"
            >
              <div className="mb-3">{renderWhyIcon(item.icon)}</div>
              <p className="text-xs text-slate-600 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: PROJECTS BENTO ("DỰ ÁN") */}
      <section id="du-an" className="bg-[#F5F6F8] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl sm:text-2xl font-black uppercase text-slate-900 mb-8">
            DỰ ÁN & CHƯƠNG TRÌNH ĐÀO TẠO
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Tall Poster Card */}
            {featuredProject && (
              <div
                onClick={() => openCourseModal(featuredProject.title)}
                className="lg:col-span-6 relative rounded-xl overflow-hidden h-96 lg:h-[420px] group cursor-pointer shadow-lg bg-[#0A2246]"
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-[#0A1931]/30 to-transparent p-6 flex flex-col justify-between text-white">
                  <div>
                    <span className="inline-block px-3 py-1 rounded bg-[#C82027] text-white text-[10px] font-black uppercase mb-2">
                      {featuredProject.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase leading-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-xs text-sky-200 mt-1">
                      {featuredProject.subtitle}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-950 text-xs font-extrabold">
                      Đăng ký ngay!
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Right Top Wide + Bottom 2 Square Cards */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              {topRightProject && (
                <div
                  onClick={() => openCourseModal(topRightProject.title)}
                  className="relative rounded-xl overflow-hidden h-48 group cursor-pointer shadow-md"
                >
                  <img
                    src={topRightProject.image}
                    alt={topRightProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-5 flex items-end">
                    <h3 className="text-sm sm:text-base font-black uppercase text-white">
                      {topRightProject.title}
                    </h3>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                {bottomRightProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => openCourseModal(proj.title)}
                    className="relative rounded-xl overflow-hidden h-48 group cursor-pointer shadow-md"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 flex items-end">
                      <h3 className="text-xs sm:text-sm font-black uppercase text-white leading-snug">
                        {proj.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW ("DỊCH VỤ") */}
      <section id="dich-vu" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Poster */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden h-72 bg-[#0F2A56] text-white p-6 flex flex-col justify-between shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Thiết kế đồ họa"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase text-amber-300 block">
                THIẾT KẾ ĐỒ HỌA
              </span>
              <h3 className="text-lg font-black uppercase leading-snug mt-1">
                NGHỀ TAY TRÁI, THU NHẬP X2
              </h3>
              <button
                onClick={() => openCourseModal("Đăng ký học thử miễn phí")}
                className="mt-3 px-3 py-1 rounded bg-[#C82027] text-white text-[10px] font-extrabold uppercase cursor-pointer"
              >
                ĐĂNG KÝ HỌC THỬ MIỄN PHÍ
              </button>
            </div>
            <div className="relative z-10 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-sky-900 border border-sky-400 text-sky-300 text-xs font-black">
                Ps
              </span>
              <span className="px-2.5 py-1 rounded bg-amber-950 border border-amber-400 text-amber-300 text-xs font-black">
                Ai
              </span>
            </div>
          </div>

          {/* Right 2x4 Icon List */}
          <div className="lg:col-span-7">
            <h2 className="text-center text-xl font-black uppercase text-slate-900 mb-7">
              DỊCH VỤ
            </h2>
            <div className="grid grid-cols-2 gap-y-5 gap-x-6">
              {data.serviceItems.map((srv, idx) => (
                <div key={srv.id} className="flex items-center gap-3">
                  {renderServiceIcon(idx)}
                  <span className="text-xs font-bold text-slate-800">
                    {srv.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: 3 STACKED 50/50 SPLIT SERVICE SHOWCASE BANNERS */}
      <section className="space-y-2">
        {data.splitShowcases.map((box) => (
          <div
            key={box.id}
            className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px] bg-[#1C1E22] text-white overflow-hidden"
          >
            {/* Left Dark Overlay Content */}
            <div className="lg:col-span-6 p-8 sm:p-14 flex flex-col justify-center relative">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {box.title}
              </h3>
              {box.description && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-lg">
                  {box.description}
                </p>
              )}
              {box.bullets && (
                <ul className="space-y-2 text-xs text-slate-200 font-semibold mb-6">
                  {box.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              <div>
                <button
                  onClick={() => openCourseModal(box.title)}
                  className="bg-[#C82027] hover:bg-red-700 text-white text-xs font-extrabold uppercase px-6 py-2.5 transition cursor-pointer"
                >
                  {box.ctaText}
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 h-72 lg:h-auto overflow-hidden">
              <img
                src={box.image}
                alt={box.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 6: FULL-WIDTH GRAPHIC DESIGN VIDEO BANNER */}
      <section className="relative h-80 sm:h-96 bg-[#0E1E38] text-white flex items-center justify-center text-center overflow-hidden my-6">
        <img
          src={data.videoBanner.image}
          alt={data.videoBanner.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-10 max-w-xl px-4">
          <button
            onClick={() => openCourseModal("Xem video giới thiệu khóa học")}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-3 hover:bg-[#C82027] hover:border-[#C82027] transition cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </button>
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-200 block mb-2">
            {data.videoBanner.subtitle}
          </span>
          <h2 className="text-xl sm:text-3xl font-bold leading-snug">
            {data.videoBanner.title}
          </h2>
        </div>
      </section>

      {/* SECTION 7: COURSES CAROUSEL ("KHÓA HỌC") */}
      <section id="khoa-hoc" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-center text-xl sm:text-2xl font-black uppercase text-slate-900 mb-8">
          KHÓA HỌC
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition flex flex-col"
              >
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-0 right-3 bg-[#C82027] text-white text-[10px] font-extrabold px-2.5 py-1.5 rounded-b shadow">
                    {course.discountBadge}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900 mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="space-y-1 text-[11px] text-slate-600 mb-4">
                      <p>
                        Trình độ: <strong>{course.level}</strong>
                      </p>
                      <p>
                        Thời lượng: <strong>{course.duration}</strong>
                      </p>
                      <p>
                        Ngày khai giảng: <strong>{course.startDate}</strong>
                      </p>
                      <p>
                        Chi phí:{" "}
                        <span className="line-through text-slate-400 mr-1">
                          {course.oldPrice}
                        </span>
                        <strong className="text-[#C82027]">{course.price}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => openCourseModal(course.title)}
                      className="px-5 py-1.5 rounded-xs bg-[#C82027] hover:bg-red-700 text-white text-[10px] font-extrabold uppercase cursor-pointer"
                    >
                      XEM CHI TIẾT
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => openCourseModal("Xem tất cả khóa học")}
            className="text-xs font-bold text-[#C82027] hover:underline cursor-pointer"
          >
            Xem tất cả
          </button>
        </div>
      </section>

      {/* SECTION 8: DARK CREATIVE TOOLKITS SHOP ("MUA SẮM") */}
      <section id="mua-sam" className="bg-[#12172B] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl sm:text-2xl font-black uppercase text-white mb-8">
            MUA SẮM HỌC LIỆU & BỘ CÔNG CỤ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.toolkits.map((kit) => (
              <div
                key={kit.id}
                className="bg-white text-slate-900 rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-0 right-3 bg-[#C82027] text-white text-[10px] font-extrabold px-2.5 py-1.5 rounded-b shadow">
                    {kit.discountBadge}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900 mb-2 line-clamp-2">
                      {kit.title}
                    </h3>
                    <div className="space-y-1 text-[11px] text-slate-600 mb-4">
                      <p>
                        Định dạng: <strong>{kit.format}</strong>
                      </p>
                      <p>
                        Phần mềm: <strong>{kit.software}</strong>
                      </p>
                      <p>
                        Số lượng: <strong>{kit.versionCount}</strong>
                      </p>
                      <p>
                        Chi phí:{" "}
                        {kit.oldPrice && (
                          <span className="line-through text-slate-400 mr-1">
                            {kit.oldPrice}
                          </span>
                        )}
                        <strong className="text-[#C82027]">{kit.price}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => openCourseModal(kit.title)}
                      className="px-5 py-1.5 rounded-xs bg-[#C82027] hover:bg-red-700 text-white text-[10px] font-extrabold uppercase cursor-pointer"
                    >
                      XEM CHI TIẾT
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: LATEST NEWS ("TIN TỨC MỚI NHẤT") */}
      <section id="tin-tuc" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-xl sm:text-2xl font-black uppercase text-slate-900 mb-8">
          TIN TỨC MỚI NHẤT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(data.news || []).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase text-slate-400 block mb-1">
                    {post.category}
                  </span>
                  <h3 className="text-xs font-extrabold text-slate-900 leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 10: DARK STUDIO FOOTER */}
      <footer className="bg-[#1A1C20] text-slate-300 pt-14 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            {/* Col 1 */}
            <div>
              <span className="inline-block bg-[#C82027] text-white font-black uppercase text-lg px-4 py-2 mb-4">
                {data.business.name}
              </span>
              <h4 className="text-xs font-extrabold uppercase text-white mb-2">
                HỌC VIỆN SÁNG TẠO {data.business.name.toUpperCase()}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.business.aboutText[1]}
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                LIÊN KẾT NHANH
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#trang-chu" className="hover:text-white">• Trang chủ</a></li>
                <li><a href="#du-an" className="hover:text-white">• Giới thiệu</a></li>
                <li><a href="#dich-vu" className="hover:text-white">• Tuyển dụng</a></li>
                <li><a href="#khoa-hoc" className="hover:text-white">• Chính sách bảo mật thông tin</a></li>
                <li><a href="#mua-sam" className="hover:text-white">• Quy định về thanh toán</a></li>
                <li><a href="#tin-tuc" className="hover:text-white">• Những câu hỏi thường gặp</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                LIÊN HỆ
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  openCourseModal("Đăng ký tư vấn qua Email");
                }}
                className="flex bg-white rounded-full overflow-hidden p-1 mb-5"
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-1.5 text-xs text-slate-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-[#C82027] text-white flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{data.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Giờ làm việc: {data.business.workingHours}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-5 text-center text-xs text-slate-500">
            © Thiết kế và lập trình bởi {data.business.name}
          </div>
        </div>
      </footer>

      {/* COURSE REGISTRATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-7 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {modalDone ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#C82027] text-white flex items-center justify-center mx-auto mb-3">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black uppercase text-slate-900 mb-1">
                  Đăng Ký Thành Công!
                </h3>
                <p className="text-xs text-slate-600 mb-5">
                  Bộ phận giáo vụ <strong>{data.business.name}</strong> sẽ gửi lịch học thử và ưu đãi học phí cho bạn ngay.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded bg-[#C82027] text-white text-xs font-bold cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <>
                <span className="text-[11px] font-extrabold uppercase text-[#C82027] block mb-1">
                  Ưu đãi học phí tới 52%
                </span>
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  {modalCourse}
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setModalDone(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên học viên *"
                    className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại Zalo *"
                    className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-[#C82027] hover:bg-red-700 text-white text-xs font-extrabold uppercase cursor-pointer"
                  >
                    Nhận Tư Vấn & Giữ Suất Ưu Đãi
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
