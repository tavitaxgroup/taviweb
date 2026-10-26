"use client";

import React, { useState } from "react";
import {
  Trophy,
  Globe as Facebook,
  Camera as Instagram,
  PlayCircle as Youtube,
  Share2,
  X,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym8DefaultData,
  type PhongGym8Data,
  type PhongGym8Package
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongGym8Data = adaptClonedTemplateData(
    phongGym8DefaultData,
    incomingData
  );

  const [selectedPackage, setSelectedPackage] = useState<PhongGym8Package | null>(
    null
  );
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => {
      setRegistered(false);
      setSelectedPackage(null);
    }, 2200);
  };

  const parts = data.business.name.split(" ");
  const leftWord = parts[0] || "MONA";
  const rightWord = parts.slice(1).join(" ") || "GOLF";

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#6b8e3d] selection:text-white">
      {/* 1. HERO WITH OVERLAY HEADER */}
      <section
        id="trang-chu"
        className="relative w-full h-[560px] md:h-[660px] bg-stone-900 overflow-hidden flex flex-col justify-between"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />

        {/* Overlay Navigation Bar */}
        <header className="relative z-20 max-w-5xl mx-auto w-full px-4 sm:px-6 h-20 flex items-center justify-between text-white">
          <a href="#trang-chu" className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-widest uppercase">
              {leftWord}
            </span>
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
              <Trophy className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-extrabold tracking-widest uppercase">
              {rightWord}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
            <a
              href="#trang-chu"
              className="text-white border-b-2 border-[#789c48] pb-1"
            >
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="text-white/90 hover:text-white">
              GIỚI THIỆU
            </a>
            <a href="#khoa-hoc" className="text-white/90 hover:text-white">
              KHÓA HỌC
            </a>
            <a href="#cac-goi-dao-tao" className="text-white/90 hover:text-white">
              THÀNH VIÊN
            </a>
            <a href="#chuyen-gia" className="text-white/90 hover:text-white">
              SỰ KIỆN
            </a>
            <a href="#cac-goi-dao-tao" className="text-white/90 hover:text-white">
              TIN TỨC
            </a>
            <a href="#lien-he" className="text-white/90 hover:text-white">
              LIÊN HỆ
            </a>
          </nav>
        </header>

        {/* Hero Center Headline + 2 White Bordered Buttons */}
        <div className="relative z-20 max-w-2xl mx-auto px-4 text-center text-white my-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug tracking-wide drop-shadow">
            {data.hero.title}
          </h1>

          <div className="mt-7 flex items-center justify-center gap-4">
            <a
              href={data.hero.ctaLink || "#khoa-hoc"}
              className="px-6 py-2 border border-white text-white text-xs font-medium hover:bg-white hover:text-slate-900 transition-colors"
            >
              {data.hero.ctaText || "Sự kiện"}
            </a>
            <a
              href={data.hero.secondaryCtaLink || "#cac-goi-dao-tao"}
              className="px-6 py-2 border border-white text-white text-xs font-medium hover:bg-white hover:text-slate-900 transition-colors"
            >
              {data.hero.secondaryCtaText || "Thành viên"}
            </a>
          </div>
        </div>

        <div className="h-8" />
      </section>

      {/* 2. PITCH-BLACK CTA STRIP (#050505) */}
      <section id="gioi-thieu" className="bg-[#050505] text-white py-7">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm sm:text-base font-light tracking-wide text-center sm:text-left">
            {data.blackBarText}
          </p>
          <a
            href="#khoa-hoc"
            className="px-7 py-2 border border-white/80 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors shrink-0"
          >
            {data.blackBarCta}
          </a>
        </div>
      </section>

      {/* 3. KHÓA HỌC */}
      <section id="khoa-hoc" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-800 text-center mb-12">
            {data.courseSectionTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 overflow-hidden shadow-md">
              <img
                src={data.courseImage}
                alt={data.courseSubheading}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>

            <div className="md:col-span-6 space-y-4">
              <h3 className="text-sm font-medium text-slate-700">
                {data.courseSubheading}
              </h3>
              <div className="space-y-3 text-xs text-slate-400 leading-relaxed text-justify">
                {data.courseParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="pt-2">
                <a
                  href="#cac-goi-dao-tao"
                  className="inline-block px-6 py-2 border border-[#789c48] text-[#789c48] text-[10px] font-bold uppercase tracking-wider hover:bg-[#789c48] hover:text-white transition-colors"
                >
                  XEM THÊM
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARALLAX BANNER (THAM GIA ĐÀO TẠO CÙNG VỚI CÁC CHUYÊN GIA) */}
      <section
        id="chuyen-gia"
        className="relative py-20 md:py-28 bg-stone-900 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${data.expertBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide">
            {data.expertTitle}
          </h2>
          <p className="text-xs text-stone-200 leading-relaxed max-w-xl mx-auto">
            {data.expertSubtitle}
          </p>
          <div className="pt-2">
            <a
              href="#cac-goi-dao-tao"
              className="inline-block px-7 py-2.5 border border-white text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors"
            >
              {data.expertCta}
            </a>
          </div>
        </div>
      </section>

      {/* 5. CÁC GÓI ĐÀO TẠO (3 PRICING CARDS: GÓI BẠC, GÓI VÀNG, GÓI ROYAL) */}
      <section id="cac-goi-dao-tao" className="py-16 md:py-24 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-normal text-slate-800">
              Các gói đào tạo
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              Chọn gói phù hợp với bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch">
            {data.packages.map((pkg) => {
              const isGold = pkg.theme === "gold";
              const isRoyal = pkg.theme === "royal";

              const topBorderClass = isGold
                ? "border-t-2 border-t-[#c59b46]"
                : isRoyal
                ? "border-t-2 border-t-[#14237a]"
                : "border-t-2 border-t-[#8c8c8c]";

              const titleColorClass = isGold
                ? "text-[#c59b46]"
                : isRoyal
                ? "text-[#14237a]"
                : "text-[#8c8c8c]";

              const btnBgClass = isGold
                ? "bg-[#c59b46] hover:bg-[#b08736]"
                : isRoyal
                ? "bg-[#14237a] hover:bg-[#0e195c]"
                : "bg-[#8c8c8c] hover:bg-[#737373]";

              return (
                <div
                  key={pkg.id}
                  className={`bg-white p-7 sm:p-8 flex flex-col justify-between ${topBorderClass} ${
                    pkg.featured
                      ? "shadow-2xl md:-my-4 relative z-10 border-x border-b border-slate-100"
                      : "shadow-md border border-slate-100"
                  }`}
                >
                  <div>
                    <h3
                      className={`text-sm font-extrabold uppercase text-center tracking-wider mb-3 ${titleColorClass}`}
                    >
                      {pkg.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 text-center leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    <div className="border-b border-slate-100 pb-3 mb-4">
                      <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">
                        GIÁ:
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-slate-900">
                        {pkg.price}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-400 mb-2.5">
                        QUYỀN LỢI:
                      </div>
                      <ul className="space-y-2 text-[11px] text-slate-500">
                        {pkg.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-slate-400">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="button"
                      onClick={() => setSelectedPackage(pkg)}
                      className={`w-full py-2.5 text-white text-[10px] font-bold uppercase tracking-widest transition-colors ${btnBgClass}`}
                    >
                      MUA NGAY
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. THÔNG TIN LIÊN HỆ (GREEN TURF OVERLAY FOOTER) */}
      <footer id="lien-he">
        <div
          className="relative py-16 md:py-20 bg-cover bg-center text-white text-center"
          style={{ backgroundImage: `url(${data.contactBgImage})` }}
        >
          <div className="absolute inset-0 bg-[#6d8c49]/80" />
          <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-light tracking-wide">
              Thông tin liên hệ
            </h2>
            <p className="text-xs sm:text-sm text-white/90 pb-2">
              {data.contactSubtitle}
            </p>

            <div className="space-y-1.5 text-xs text-white/95">
              <p>
                <strong>Địa chỉ:</strong> {data.business.address}
              </p>
              <p>
                <strong>Điện thoại:</strong> {data.business.phone[0]}
              </p>
              <p>
                <strong>Email:</strong> {data.business.email[0]}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              {[Facebook, Instagram, Share2, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#lien-he"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white hover:text-[#6d8c49] flex items-center justify-center text-white transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] text-neutral-400 py-3 text-center text-[10px]">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
        </div>
      </footer>

      {/* PACKAGE REGISTRATION MODAL */}
      {selectedPackage && (
        <div
          onClick={() => setSelectedPackage(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white p-6 relative shadow-2xl border-t-4 border-[#c59b46]"
          >
            <button
              type="button"
              onClick={() => setSelectedPackage(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-bold text-slate-900 uppercase mb-1">
              Đăng Ký {selectedPackage.name}
            </h3>
            <p className="text-sm font-extrabold text-[#c59b46] mb-4">
              Học phí: {selectedPackage.price}
            </p>

            <form onSubmit={handleRegister} className="space-y-3 text-xs">
              <input
                type="text"
                required
                placeholder="Họ và tên hội viên"
                className="w-full border border-slate-200 px-3.5 py-2.5 focus:outline-none focus:border-[#789c48]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại liên hệ"
                className="w-full border border-slate-200 px-3.5 py-2.5 focus:outline-none focus:border-[#789c48]"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#789c48] hover:bg-[#648439] text-white font-bold uppercase tracking-wider transition-colors"
              >
                HOÀN TẤT ĐĂNG KÝ GÓI ĐÀO TẠO
              </button>
              {registered && (
                <div className="flex items-center justify-center gap-1.5 text-emerald-600 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã đăng ký thành công!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
