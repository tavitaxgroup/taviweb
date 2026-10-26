"use client";

import React, { useState } from "react";
import {
  Play,
  ArrowLeft,
  ArrowRight,
  Award,
  Sparkles,
  ClipboardList,
  ShieldCheck,
  Smile,
  Gem,
  Calendar,
  User,
  MapPin,
  Phone,
  Mail,
  Heart,
  Check,
  X,
  Menu,
  Users
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  spa7DefaultData,
  type Spa7Data
} from "@/template-sources/spa_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function SlantedCoralButton({
  label,
  onClick
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#dc796e] hover:bg-[#c86459] text-white text-[11px] font-bold uppercase tracking-wider px-7 py-3 transition cursor-pointer shadow-xs [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)]"
    >
      {label}
    </button>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Spa7Data = adaptClonedTemplateData(spa7DefaultData, incomingData);

  const aboutCollage = data.aboutCollage || spa7DefaultData.aboutCollage;
  const services = data.services || spa7DefaultData.services || [];
  const reasons = data.reasonsToChoose || spa7DefaultData.reasonsToChoose;
  const commitments = data.commitments || spa7DefaultData.commitments;
  const stats = data.stats || spa7DefaultData.stats || [];
  const newsList = data.news || spa7DefaultData.news || [];
  const relatedEvents = data.relatedEvents || spa7DefaultData.relatedEvents;
  const partnerBrands = data.partnerBrands || spa7DefaultData.partnerBrands;

  const [activeServiceIdx, setActiveServiceIdx] = useState(1);
  const [bookingSent, setBookingSent] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "Info@Themona.Global";

  const leftCommitments = commitments.nodes.filter((n) => n.side === "left");
  const rightCommitments = commitments.nodes.filter((n) => n.side === "right");

  const scrollToBooking = () => {
    const el = document.getElementById("dat-hen");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#1e1e1e] font-sans selection:bg-[#dc796e] selection:text-white">
      {/* =====================================================================
          1. TOP HEADER + BLUSH PINK DIAGONAL HERO
         ===================================================================== */}
      <header className="sticky top-0 z-40 bg-[#fdf5f3]/95 backdrop-blur-md border-b border-[#f3ded9]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#trang-chu" className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#dc796e] fill-[#dc796e]/20" />
            <div>
              <span className="font-serif italic text-xl font-bold text-[#1e1e1e] leading-none block">
                Beauty
              </span>
              <span className="text-[8px] font-extrabold tracking-[0.25em] uppercase text-[#dc796e] block">
                MONA MEDIA
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-neutral-700">
            <a href="#trang-chu" className="text-[#dc796e]">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#dc796e] transition">
              Giới thiệu
            </a>
            <a href="#dich-vu" className="hover:text-[#dc796e] transition">
              Dịch vụ nổi bật
            </a>
            <a href="#cam-ket" className="hover:text-[#dc796e] transition">
              Cam kết
            </a>
            <a href="#tin-tuc" className="hover:text-[#dc796e] transition">
              Tin tức
            </a>
            <a href="#dat-hen" className="hover:text-[#dc796e] transition">
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <SlantedCoralButton label="ĐẶT HẸN" onClick={scrollToBooking} />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-1.5 text-neutral-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#f3ded9] px-6 py-4 space-y-2.5 text-xs font-semibold">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giới thiệu Trung tâm
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Dịch vụ nổi bật
            </a>
            <a
              href="#ly-do"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Lý do chọn chúng tôi
            </a>
            <a
              href="#cam-ket"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Cam kết an toàn
            </a>
            <a
              href="#dat-hen"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#dc796e]"
            >
              Đặt hẹn tư vấn
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="trang-chu"
        className="relative bg-gradient-to-br from-[#fdf5f3] via-[#fbeae6] to-[#f7dad4] overflow-hidden pt-10 pb-16 md:py-20 px-4"
      >
        {/* Diagonal Coral Corner Triangles + Faint MONA Watermark */}
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#dc796e] [clip-path:polygon(0_25%,0_100%,85%_100%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-[#dc796e] [clip-path:polygon(100%_15%,15%_100%,100%_100%)] pointer-events-none" />
        <span className="hidden lg:block absolute top-14 left-4 text-[90px] font-black uppercase text-neutral-900/[0.04] rotate-45 select-none pointer-events-none">
          MONA
        </span>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#dc796e]">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e1e1e] leading-tight whitespace-pre-line">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed max-w-lg">
              {data.hero.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-5">
              <SlantedCoralButton
                label={data.hero.ctaText || "KHÁM PHÁ"}
                onClick={scrollToBooking}
              />

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#dc796e] hover:text-[#b8584e] transition cursor-pointer"
              >
                <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#1e1e1e]">
                  <Play className="w-3.5 h-3.5 fill-[#1e1e1e] ml-0.5" />
                </span>
                <span>{data.hero.secondaryCtaText || "Xem Video"}</span>
              </button>
            </div>
          </div>

          {/* Right Aesthetician & Facial Treatment Visual (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border-4 border-white/80">
              <img
                src={data.hero.backgroundImage}
                alt={data.business.name}
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. UY TÍN - CHẤT LƯỢNG — TRUNG TÂM THẨM MỸ MONA
         ===================================================================== */}
      <section id="gioi-thieu" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dc796e]">
                UY TÍN - CHẤT LƯỢNG
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#1e1e1e] mt-1">
                {data.business.aboutTitle}
              </h2>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              {data.business.aboutText[0]}
            </p>

            {/* 2 Value Rows */}
            <div className="space-y-4 pt-1">
              {aboutCollage.valuePoints.map((pt, idx) => (
                <div key={pt.id} className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#fdf0ed] text-[#dc796e] flex items-center justify-center shrink-0">
                    {idx === 0 ? (
                      <ClipboardList className="w-5 h-5" />
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1e1e1e]">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA + 20k Customers Avatars */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <SlantedCoralButton
                label="TÌM HIỂU THÊM"
                onClick={scrollToBooking}
              />

              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Khách hàng 1"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Khách hàng 2"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Khách hàng 3"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  />
                </div>
                <span className="text-xs font-bold text-[#1e1e1e]">
                  {aboutCollage.customerCountText}
                </span>
              </div>
            </div>
          </div>

          {/* Right Collage with Vertical "10 Năm kinh nghiệm" Coral Pill (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-3.5 items-stretch">
            <div className="col-span-7 flex flex-col gap-3.5">
              <div className="flex gap-3.5 h-36">
                {/* Vertical Coral Pill */}
                <div className="w-16 rounded-2xl bg-[#dc796e] text-white flex flex-col items-center justify-center p-2 text-center shadow-sm shrink-0">
                  <span className="text-xl font-black leading-none">
                    {aboutCollage.badgeYears}
                  </span>
                  <span
                    className="text-[9px] font-semibold mt-2 tracking-wider"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    Năm kinh nghiệm
                  </span>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden">
                  <img
                    src={aboutCollage.images[0]}
                    alt="Không gian thẩm mỹ 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="h-44 rounded-2xl overflow-hidden">
                <img
                  src={aboutCollage.images[1]}
                  alt="Chăm sóc da chuyên sâu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="col-span-5">
              <div className="h-full min-h-[320px] rounded-2xl rounded-br-[60px] overflow-hidden shadow-md">
                <img
                  src={aboutCollage.images[2]}
                  alt="Liệu trình trẻ hóa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. NHÂN VIÊN CHUYÊN NGHIỆP — DỊCH VỤ NỔI BẬT (3 Rounded Cards Carousel)
         ===================================================================== */}
      <section id="dich-vu" className="py-16 px-4 bg-[#fdf5f3]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dc796e]">
                NHÂN VIÊN CHUYÊN NGHIỆỆP
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#1e1e1e] mt-1">
                DỊCH VỤ NỔI BẬT
              </h2>
            </div>
            <SlantedCoralButton label="XEM TẤT CẢ" onClick={scrollToBooking} />
          </div>

          <div className="relative flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveServiceIdx((prev) =>
                  prev === 0 ? services.length - 1 : prev - 1
                )
              }
              aria-label="Trước"
              className="hidden md:flex w-9 h-9 rounded-full bg-white shadow-sm items-center justify-center text-neutral-600 hover:bg-[#dc796e] hover:text-white transition shrink-0 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.slice(0, 3).map((srv, idx) => {
                const isSelected = idx === activeServiceIdx;
                return (
                  <div
                    key={srv.id}
                    onClick={() => setActiveServiceIdx(idx)}
                    className="relative group cursor-pointer"
                  >
                    <div className="h-64 rounded-2xl overflow-hidden shadow-sm">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Floating Bottom Label Pill (Always visible on active/center card or hover) */}
                    <div
                      className={`mx-auto -mt-6 relative z-10 w-4/5 bg-white rounded-full py-2.5 px-4 text-center shadow-md transition-all ${
                        isSelected
                          ? "opacity-100 translate-y-0"
                          : "opacity-90 group-hover:opacity-100"
                      }`}
                    >
                      <span className="inline-block bg-[#dc796e] text-white text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-full -mt-5 mb-0.5 shadow-2xs">
                        {srv.category}
                      </span>
                      <h3 className="text-xs font-extrabold text-[#1e1e1e]">
                        {srv.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveServiceIdx((prev) => (prev + 1) % services.length)
              }
              aria-label="Tiếp"
              className="hidden md:flex w-9 h-9 rounded-full bg-white shadow-sm items-center justify-center text-neutral-600 hover:bg-[#dc796e] hover:text-white transition shrink-0 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. LÝ DO NÊN CHỌN MONA MEDIA (6 Cards 3x2, Center Featured)
         ===================================================================== */}
      <section id="ly-do" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dc796e]">
              LỰA CHỌN HOÀN HẢO
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#1e1e1e] mt-1">
              LÝ DO NÊN CHỌN {data.business.name.toUpperCase()}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-xl transition relative overflow-hidden ${
                  item.featured
                    ? "bg-[#fffafa] border border-[#f5d0cb] shadow-sm"
                    : "bg-white hover:bg-[#fdf5f3]/50"
                }`}
              >
                <div className="w-11 h-11 rounded-lg bg-[#fdf0ed] text-[#1e1e1e] flex items-center justify-center mb-4">
                  {item.iconType === "expertise" && <Award className="w-5 h-5" />}
                  {item.iconType === "tech" && <Sparkles className="w-5 h-5" />}
                  {item.iconType === "diverse" && (
                    <ClipboardList className="w-5 h-5" />
                  )}
                  {item.iconType === "safety" && (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                  {item.iconType === "space" && <Smile className="w-5 h-5" />}
                  {item.iconType === "value" && <Gem className="w-5 h-5" />}
                </div>

                <h3 className="text-sm font-extrabold text-[#1e1e1e] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.description}
                </p>

                {item.featured && (
                  <a
                    href="#dat-hen"
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-[#dc796e] mt-4 hover:underline"
                  >
                    <span>XEM THÊM</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <SlantedCoralButton label="XEM TẤT CẢ" onClick={scrollToBooking} />
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. CAM KẾT CỦA CHÚNG TÔI (Hub-and-Spoke Radial Doctor + Coral Stats Bar)
         ===================================================================== */}
      <section id="cam-ket" className="pt-16 bg-[#fdf5f3] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dc796e]">
              ĐẢM BẢO AN TOÀN
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#1e1e1e] mt-1">
              CAM KẾT CỦA CHÚNG TÔI
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 3 Commitment Nodes (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {leftCommitments.map((node) => (
                <div
                  key={node.id}
                  className="bg-white/80 rounded-xl p-4 flex items-start gap-3.5 shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-full bg-[#fce4e1] text-[#dc796e] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1e1e1e]">
                      {node.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 leading-relaxed mt-1">
                      {node.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Doctor Portrait in Soft Pink Circle (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-t-full bg-[#f8dad5] overflow-hidden flex items-end justify-center pt-6">
                <img
                  src={commitments.centerDoctorImage}
                  alt="Chuyên gia thẩm mỹ"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right 3 Commitment Nodes (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {rightCommitments.map((node) => (
                <div
                  key={node.id}
                  className="bg-white/80 rounded-xl p-4 flex items-start gap-3.5 shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-full bg-[#fce4e1] text-[#dc796e] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1e1e1e]">
                      {node.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 leading-relaxed mt-1">
                      {node.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Width Coral Stats Banner (#dc796e) */}
        <div className="bg-gradient-to-r from-[#e89990] via-[#dc796e] to-[#d4695d] text-white py-10 px-4 mt-10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.slice(0, 4).map((st) => (
              <div key={st.id} className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black leading-none">
                    {st.number}
                  </p>
                  <p className="text-[11px] text-white/90 mt-1">{st.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. ĐẶT HẸN TƯ VẤN (Left Form Card + Right Consultant Image)
         ===================================================================== */}
      <section id="dat-hen" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-[#fdf8f7] rounded-2xl overflow-hidden shadow-sm border border-[#f5e1dc] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Form (6 cols) */}
          <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center">
            <div className="text-center mb-6">
              <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#1e1e1e]">
                ĐẶT HẸN TƯ VẤN
              </h2>
              <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                Chỉ với một vài thao tác đơn giản nhân viên tư vấn tại{" "}
                {data.business.name} sẽ liên hệ với bạn ngay lập tức.
              </p>
            </div>

            {bookingSent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold text-[#1e1e1e]">
                  Đã gửi yêu cầu đặt hẹn tư vấn!
                </p>
                <p className="text-[11px] text-neutral-500">
                  Chuyên viên thẩm mỹ sẽ liên hệ lại với bạn trong vòng 10 phút.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingSent(false)}
                  className="bg-[#dc796e] text-white text-xs font-bold uppercase px-6 py-2 rounded-xs"
                >
                  Đặt lịch khác
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSent(true);
                }}
                className="space-y-3 text-xs"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ Tên *"
                  className="w-full bg-white border border-neutral-200 rounded-xs px-3.5 py-2.5 focus:outline-none focus:border-[#dc796e]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  className="w-full bg-white border border-neutral-200 rounded-xs px-3.5 py-2.5 focus:outline-none focus:border-[#dc796e]"
                />
                <textarea
                  rows={3}
                  placeholder="Nội Dung / Dịch vụ cần tư vấn"
                  className="w-full bg-white border border-neutral-200 rounded-xs px-3.5 py-2.5 focus:outline-none focus:border-[#dc796e] resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#dc796e] hover:bg-[#c86459] text-white font-bold uppercase py-3 rounded-xs transition cursor-pointer"
                >
                  ĐẶT HẸN TƯ VẤN
                </button>
              </form>
            )}
          </div>

          {/* Right Smiling Consultant Photo (6 cols) */}
          <div className="lg:col-span-6 min-h-[340px]">
            <img
              src={data.bookingConsultantImage}
              alt="Chuyên viên tư vấn thẩm mỹ"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. TIN TỨC NỔI BẬT (Left Featured Card + Right 3 Stacked Cards)
         ===================================================================== */}
      <section id="tin-tuc" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dc796e]">
                TIN TỨC &amp; BLOG
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#1e1e1e] mt-1">
                TIN TỨC NỔI BẬT
              </h2>
            </div>
            <SlantedCoralButton label="XEM TẤT CẢ" onClick={scrollToBooking} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Large Featured Post (6 cols) */}
            {newsList[0] && (
              <article className="lg:col-span-6 bg-white rounded-xl border border-neutral-100 shadow-2xs overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img
                    src={newsList[0].image}
                    alt={newsList[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#dc796e]" />
                      {newsList[0].date}
                    </span>
                    <span>{newsList[0].category}</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-[#1e1e1e]">
                    {newsList[0].title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {newsList[0].excerpt}
                  </p>
                </div>
              </article>
            )}

            {/* Right 3 Stacked Text Cards (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {newsList.slice(1, 4).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl border border-neutral-100 p-4 shadow-2xs hover:border-[#dc796e]/40 transition"
                >
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 mb-1.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#dc796e]" />
                      {post.date}
                    </span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1e1e1e]">
                    {post.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. CÁC SỰ KIỆN LIÊN QUAN (Left Intro + Right 3 Horizontal Event Cards)
         ===================================================================== */}
      <section className="py-16 px-4 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dc796e]">
              SỰ KIỆN MỚI NHẤT
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#1e1e1e]">
              CÁC SỰ KIỆN LIÊN QUAN
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {data.business.aboutText[1]}
            </p>
            <SlantedCoralButton label="XEM THÊM" onClick={scrollToBooking} />
          </div>

          <div className="lg:col-span-8 space-y-4">
            {relatedEvents.map((ev) => (
              <div
                key={ev.id}
                className="bg-white rounded-xl p-5 shadow-2xs border border-neutral-100 flex flex-col sm:flex-row items-center gap-5"
              >
                <div className="flex-1 space-y-1.5">
                  <span className="text-[10px] text-neutral-400 font-semibold">
                    {ev.date}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#1e1e1e]">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                    {ev.excerpt}
                  </p>
                  <a
                    href="#dat-hen"
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-[#1e1e1e] hover:text-[#dc796e] pt-1"
                  >
                    <span>XEM THÊM</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full sm:w-36 h-28 object-cover rounded-lg grayscale hover:grayscale-0 transition shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. BLUSH FOOTER + BLACK PARTNER LOGO STRIP
         ===================================================================== */}
      <footer className="bg-[#fdf5f3] text-neutral-600 pt-14 pb-8 px-4 text-xs">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#dc796e]" />
                <div>
                  <span className="font-serif italic text-lg font-bold text-[#1e1e1e] block leading-none">
                    Beauty
                  </span>
                  <span className="text-[7px] font-extrabold tracking-widest uppercase text-[#dc796e] block">
                    MONA MEDIA
                  </span>
                </div>
              </div>
              <p className="text-[11px] leading-relaxed text-neutral-500">
                Đồng hành cùng vẻ đẹp tự nhiên và sự tự tin của hàng chục ngàn
                phụ nữ Việt bằng công nghệ thẩm mỹ chuẩn quốc tế.
              </p>
              <div className="flex items-center gap-2 pt-1">
                {["f", "x", "yt", "in"].map((s) => (
                  <a
                    key={s}
                    href="#trang-chu"
                    className="w-7 h-7 rounded-full bg-[#1e1e1e] text-white flex items-center justify-center text-[10px] font-bold"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-extrabold text-[#1e1e1e] mb-3">
                Chính sách
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#cam-ket" className="hover:text-[#dc796e]">
                    Điều khoản dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#cam-ket" className="hover:text-[#dc796e]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#dc796e]">
                    Thông tin pháp lý
                  </a>
                </li>
                <li>
                  <a href="#ly-do" className="hover:text-[#dc796e]">
                    Cam kết chất lượng
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-extrabold text-[#1e1e1e] mb-3">
                Liên kết
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#tin-tuc" className="hover:text-[#dc796e]">
                    Tin tức mới nhất
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#dc796e]">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#dat-hen" className="hover:text-[#dc796e]">
                    Liên hệ tư vấn
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#dc796e]">
                    Bảng giá dịch vụ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-extrabold text-[#1e1e1e] mb-3">
                Thông tin liên hệ
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#dc796e] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#dc796e] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#dc796e] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Black Partner Logo Bar (Matches SPA010 Bottom Strip) */}
          <div className="bg-[#0d0d0d] text-white rounded-xs py-6 px-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center">
            {partnerBrands.map((pb) => (
              <div key={pb.id} className="text-center">
                <span className="block text-[11px] font-bold tracking-widest uppercase text-white/90">
                  {pb.name}
                </span>
                <span className="block text-[8px] tracking-widest uppercase text-white/45">
                  {pb.sub}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-neutral-400">
            <p>
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-[#1e1e1e]">{data.business.name}</strong>
            </p>
            <div className="flex gap-4">
              <span>Bảo mật</span>
              <span>Điều khoản</span>
              <span>Sơ đồ trang</span>
            </div>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full p-6 rounded-2xl relative text-center space-y-4">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-extrabold uppercase">
              Công Nghệ Làm Đẹp Tại {data.business.name}
            </h3>
            <img
              src={data.hero.backgroundImage}
              alt="Video thẩm mỹ"
              className="w-full h-56 object-cover rounded-xl"
            />
            <p className="text-xs text-neutral-500">
              Trải nghiệm quy trình chăm sóc da và trẻ hóa công nghệ cao chuẩn y
              khoa cùng đội ngũ hơn 80 bác sĩ chuyên khoa.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
