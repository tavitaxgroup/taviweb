"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronRight,
  Play,
  Home,
  Phone,
  Mail,
  Send,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration13DefaultData,
  type LeadGeneration13Data
} from "@/template-sources/lead_generation_13/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration13Data = adaptClonedTemplateData(
    leadGeneration13DefaultData,
    incomingData
  );

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProgram, setSelectedProgram] = useState<string>(
    "Tư Vấn Du Học Nhật Bản Miễn Phí 100% Hồ Sơ"
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  const openConsultModal = (title?: string) => {
    if (title) setSelectedProgram(title);
    setSubmitted(false);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#1DA1F2] selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo: Red Circle Swoosh + Blue MONA */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#E1251B] text-white flex items-center justify-center shadow-sm">
              <Send className="w-5 h-5 -rotate-12" />
            </div>
            <div className="leading-none">
              <span className="text-2xl font-black tracking-tight uppercase text-[#1DA1F2] block">
                {data.business.name}
              </span>
              <span className="text-[10px] font-semibold text-slate-400">
                Du học Nhật Bản Yoko
              </span>
            </div>
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
            <a href="#trang-chu" className="text-[#E1251B]">
              TRANG CHỦ
            </a>
            <a href="#san-pham" className="hover:text-[#1DA1F2] transition">
              GIỚI THIỆU
            </a>
            <a href="#san-pham" className="hover:text-[#1DA1F2] transition">
              DU HỌC NHẬT BẢN
            </a>
            <a href="#tin-tuc" className="hover:text-[#1DA1F2] transition">
              THÔNG TIN DU HỌC
            </a>
            <a href="#tai-nguyen" className="hover:text-[#1DA1F2] transition">
              TIẾNG NHẬT ONLINE
            </a>
          </nav>

          {/* Right Search + Red CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => openConsultModal("Tra cứu thông tin học bổng")}
              className="text-slate-600 hover:text-[#1DA1F2] cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => openConsultModal()}
              className="bg-[#E1251B] hover:bg-red-700 text-white text-[11px] font-extrabold uppercase px-4 py-2.5 rounded transition shadow-sm cursor-pointer"
            >
              ĐĂNG KÝ NGAY
            </button>
          </div>
        </div>
      </header>

      {/* HERO BANNER WITH RED ADMISSION STAMP & STUDENTS */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-pink-50 to-white py-12 sm:py-16"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Red Circular Stamp Badge */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                onClick={() => openConsultModal()}
                className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-gradient-to-br from-[#F43F5E] to-[#E1251B] text-white p-6 flex flex-col items-center justify-center text-center shadow-2xl ring-8 ring-red-200/70 -rotate-3 hover:rotate-0 transition cursor-pointer"
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                    {data.heroStamp.line1}
                  </span>
                  <span className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                    {data.heroStamp.line2}
                  </span>
                </div>
                <div className="w-full py-1.5 px-3 bg-white/15 border-y border-white/40 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3">
                  {data.heroStamp.line3}
                </div>
                <div className="bg-white text-[#E1251B] rounded-xl px-5 py-2 shadow-md">
                  <span className="text-[10px] font-extrabold uppercase mr-1">
                    MIỄN PHÍ
                  </span>
                  <strong className="text-2xl sm:text-3xl font-black">
                    {data.heroStamp.highlightPercent}
                  </strong>
                  <span className="text-[10px] font-extrabold uppercase ml-1.5 block sm:inline">
                    {data.heroStamp.line4}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Students Portrait */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-md">
                <img
                  src={data.hero.images?.[0] || data.hero.backgroundImage}
                  alt="Du học sinh Nhật Bản"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl p-3.5 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-[#E1251B] block">
                      Kỳ nhập học gần nhất
                    </span>
                    <strong className="text-xs font-black text-slate-900">
                      Tỷ lệ đỗ Visa / COE đạt 98.6%
                    </strong>
                  </div>
                  <button
                    onClick={() => openConsultModal()}
                    className="px-3.5 py-1.5 rounded bg-[#1DA1F2] text-white text-[10px] font-extrabold uppercase cursor-pointer"
                  >
                    Tư vấn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SẢN PHẨM CỦA CHÚNG TÔI (3 ALTERNATING NUMBERED BLOB SECTIONS) */}
      <section id="san-pham" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800">
            {data.business.aboutTitle}
          </h2>
          <span className="w-10 h-0.5 bg-slate-800 block mx-auto mt-2" />
        </div>

        <div className="space-y-8">
          {data.programs.map((prog, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={prog.id}
                className={`py-12 ${isEven ? "bg-[#F7F8FA]" : "bg-white"}`}
              >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
                    {/* Giant Watermark Number */}
                    <span
                      className={`text-[180px] sm:text-[230px] font-black text-slate-900/[0.04] leading-none select-none pointer-events-none absolute -top-10 ${
                        isEven ? "right-4" : "left-4"
                      }`}
                    >
                      {prog.numberWatermark}
                    </span>

                    {/* Blob Image Column */}
                    <div
                      className={`lg:col-span-6 flex justify-center relative z-10 ${
                        isEven ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="relative">
                        {/* Decorative Floating Dots */}
                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-indigo-600 absolute -top-3 left-6 z-20 shadow" />
                        <span className="w-5 h-5 rounded-full border-2 border-pink-300 absolute bottom-6 -right-3 z-20" />

                        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-[46%_54%_52%_48%/48%_46%_54%_52%] overflow-hidden shadow-xl border-8 border-pink-100/70">
                          <img
                            src={prog.image}
                            alt={prog.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text Column */}
                    <div
                      className={`lg:col-span-6 relative z-10 ${
                        isEven ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="border-l-4 border-[#1DA1F2] pl-4 mb-4">
                        <h3 className="text-lg sm:text-xl font-extrabold uppercase text-slate-800 leading-snug">
                          {prog.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                        {prog.description}
                      </p>
                      <button
                        onClick={() => openConsultModal(prog.title)}
                        className="inline-flex items-center gap-1.5 bg-[#2596FF] hover:bg-sky-600 text-white text-xs font-bold px-5 py-2.5 rounded shadow-sm transition cursor-pointer"
                      >
                        <span>{prog.ctaText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: TIN TỨC (FEATURED LEFT + 3 HORIZONTAL RIGHT) */}
      <section id="tin-tuc" className="bg-[#F7F8FA] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800">
              Tin tức
            </h2>
            <span className="w-10 h-0.5 bg-slate-800 block mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Featured Article */}
            <article
              onClick={() => openConsultModal(data.featuredArticle.title)}
              className="lg:col-span-6 cursor-pointer group"
            >
              <div className="h-64 sm:h-72 overflow-hidden rounded mb-3 shadow-sm">
                <img
                  src={data.featuredArticle.image}
                  alt={data.featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold uppercase text-slate-800 group-hover:text-[#1DA1F2] mb-2">
                {data.featuredArticle.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {data.featuredArticle.excerpt}
              </p>
            </article>

            {/* Right 3 Stacked Articles */}
            <div className="lg:col-span-6 space-y-5">
              {data.sideArticles.map((art) => (
                <article
                  key={art.id}
                  onClick={() => openConsultModal(art.title)}
                  className="grid grid-cols-12 gap-4 items-start cursor-pointer group"
                >
                  <div className="col-span-5 h-24 sm:h-28 overflow-hidden rounded shadow-2xs">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="col-span-7">
                    <h4 className="text-xs font-extrabold text-slate-800 group-hover:text-[#1DA1F2] leading-snug mb-1">
                      {art.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 block mb-1.5">
                      {art.date}
                    </span>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {art.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PARTNER UNIVERSITIES ("CÁC ĐỐI TÁC CỦA CHÚNG TÔI") */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
          alt="Đối tác trường Nhật ngữ"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Các đối tác của chúng tôi
            </h2>
            <span className="w-10 h-0.5 bg-white block mx-auto mb-3" />
            <p className="text-xs text-slate-200 leading-relaxed">
              Có rất nhiều bảng xếp hạng và thông tin của các trường Đại học danh tiếng tại Nhật Bản được YOKO cập nhật để giúp bạn đưa ra quyết định lựa chọn phù hợp nhất.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {data.partnerSchools.map((sch) => (
              <div
                key={sch.id}
                onClick={() => openConsultModal(`Tư vấn trường ${sch.name}`)}
                className="bg-white text-slate-900 rounded p-4 h-24 flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span className="text-lg font-black tracking-tight text-[#1DA1F2] leading-none">
                  {sch.code}
                </span>
                <span className="text-[10px] font-bold text-slate-700 mt-1 line-clamp-1">
                  {sch.name}
                </span>
                <span className="text-[9px] text-slate-400">{sch.jpSubtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: RESOURCES & MEDIA COVERAGE */}
      <section id="tai-nguyen" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Tài nguyên của Yoko */}
          <div className="lg:col-span-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-1">
              Tài nguyên của Yoko
            </h2>
            <span className="w-10 h-0.5 bg-slate-800 block mb-6" />

            <div
              onClick={() => openConsultModal(data.videoResource.title)}
              className="relative h-64 rounded overflow-hidden shadow-md mb-4 cursor-pointer group"
            >
              <img
                src={data.videoResource.image}
                alt={data.videoResource.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
            </div>

            <h3 className="text-sm font-extrabold text-slate-800 mb-1">
              {data.videoResource.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {data.videoResource.subtitle}
            </p>
            <button
              onClick={() => openConsultModal("Nhận trọn bộ video học tiếng Nhật")}
              className="px-5 py-2 rounded bg-[#B91C1C] hover:bg-red-800 text-white text-xs font-bold cursor-pointer"
            >
              {data.videoResource.ctaText}
            </button>
          </div>

          {/* Right: Truyền thông nói gì về Yoko? */}
          <div className="lg:col-span-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-1">
              Truyền thông nói gì về Yoko?
            </h2>
            <span className="w-10 h-0.5 bg-slate-800 block mb-6" />

            <div className="grid grid-cols-2 gap-5">
              {data.pressMentions.map((press) => (
                <div
                  key={press.id}
                  className="border border-slate-200 rounded-lg p-5 flex flex-col justify-center bg-white hover:shadow-md transition"
                >
                  <span className={`text-xl font-black uppercase ${press.color}`}>
                    {press.name}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                    {press.tagline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BOTTOM STUDENTS BANNER & CLEAN WHITE FOOTER */}
      <section className="h-72 sm:h-88 overflow-hidden bg-slate-100">
        <img
          src={data.bottomBannerImage}
          alt="Cộng đồng du học sinh Yoko"
          className="w-full h-full object-cover"
        />
      </section>

      <footer className="bg-white border-t border-slate-100 pt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-full bg-[#E1251B] text-white flex items-center justify-center">
              <Send className="w-4 h-4 -rotate-12" />
            </div>
            <div className="leading-none">
              <span className="text-xl font-black uppercase text-[#1DA1F2] block">
                {data.business.name}
              </span>
              <span className="text-[10px] text-slate-400">Mona Yoko</span>
            </div>
          </div>

          {/* 3 Contact Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-slate-500">
            <div>
              <h4 className="font-extrabold uppercase text-slate-700 flex items-center gap-1.5 mb-2">
                <Home className="w-3.5 h-3.5 text-slate-600" />
                <span>ĐỊA CHỈ</span>
              </h4>
              <p className="leading-relaxed mb-4">{data.business.address}</p>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#3B5998] text-white flex items-center justify-center font-bold text-[11px]">
                  f
                </span>
                <span className="w-7 h-7 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center font-bold text-[11px]">
                  tw
                </span>
                <span className="w-7 h-7 rounded-full bg-[#E1251B] text-white flex items-center justify-center font-bold text-[11px]">
                  yt
                </span>
              </div>
            </div>

            <div className=" md:border-l md:border-slate-200 md:pl-8">
              <h4 className="font-extrabold uppercase text-slate-700 flex items-center gap-1.5 mb-2">
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>ĐIỆN THOẠI</span>
              </h4>
              <p className="leading-relaxed">{data.business.phone[0]}</p>
              <p className="leading-relaxed">Bấm 109 - Phòng tư vấn tuyển sinh</p>
              <p className="leading-relaxed">Bấm 103 - Phòng hồ sơ & đào tạo</p>
            </div>

            <div className="md:border-l md:border-slate-200 md:pl-8">
              <h4 className="font-extrabold uppercase text-slate-700 flex items-center gap-1.5 mb-2">
                <Mail className="w-3.5 h-3.5 text-slate-600" />
                <span>EMAIL</span>
              </h4>
              <p className="leading-relaxed">{data.business.email[0]}</p>
              {data.business.email[1] && (
                <p className="leading-relaxed">{data.business.email[1]}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#555555] text-slate-200 text-center py-3 text-xs">
          © Bản quyền thuộc về {data.business.name}
        </div>
      </footer>

      {/* CONSULTATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-slate-900 mb-1">
                  Đăng Ký Hồ Sơ Thành Công!
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Cố vấn du học <strong>{data.business.name}</strong> sẽ liên hệ tư vấn chọn trường và học bổng miễn phí cho bạn.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2 rounded bg-[#1DA1F2] text-white text-xs font-bold cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <>
                <span className="inline-block px-2.5 py-0.5 rounded bg-red-50 text-[#E1251B] text-[10px] font-extrabold uppercase mb-2">
                  Miễn phí 100% phí dịch vụ hồ sơ
                </span>
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  {selectedProgram}
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên học sinh / phụ huynh *"
                    className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại Zalo *"
                    className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs"
                  />
                  <select className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs text-slate-700 bg-white">
                    <option>Du học Nhật Bản Kỳ Tháng 10</option>
                    <option>Du học Hàn Quốc Học bổng Top 1</option>
                    <option>Khóa học Tiếng Nhật Cấp tốc N5 - N2</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-[#E1251B] hover:bg-red-700 text-white text-xs font-extrabold uppercase cursor-pointer"
                  >
                    Nhận Tư Vấn Miễn Phí Ngay
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
