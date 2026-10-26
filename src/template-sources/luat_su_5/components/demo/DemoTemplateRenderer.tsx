"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Scale,
  DollarSign,
  FileText,
  UserCheck,
  Gavel,
  MessageSquare,
  Search,
  Building2,
  Send,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { luatSu5DefaultData, type LuatSu5Data } from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: LuatSu5Data = adaptClonedTemplateData(
    luatSu5DefaultData,
    incomingData
  );

  const [servicePage, setServicePage] = useState<number>(0);
  const [consultOpen, setConsultOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "tuvan@lawking.vn";

  const servicesList = data.services || [];
  const visibleServices =
    servicePage === 0
      ? servicesList.slice(0, 3)
      : servicesList.slice(3, 6).length > 0
      ? servicesList.slice(3, 6)
      : servicesList.slice(0, 3);

  const renderServiceIcon = (icon?: string) => {
    switch (icon) {
      case "dollar":
        return <DollarSign className="w-7 h-7 text-[#222222] stroke-[1.6]" />;
      case "file":
        return <FileText className="w-7 h-7 text-[#222222] stroke-[1.6]" />;
      default:
        return <Scale className="w-7 h-7 text-[#222222] stroke-[1.6]" />;
    }
  };

  const renderAboutIcon = (icon?: string) => {
    switch (icon) {
      case "user":
        return <UserCheck className="w-7 h-7 text-[#A93F33] stroke-[1.5]" />;
      case "gavel":
        return <Gavel className="w-7 h-7 text-[#A93F33] stroke-[1.5]" />;
      default:
        return <Scale className="w-7 h-7 text-[#A93F33] stroke-[1.5]" />;
    }
  };

  const renderPrincipleIcon = (icon?: string) => {
    switch (icon) {
      case "chat":
        return <MessageSquare className="w-5 h-5 text-white" />;
      case "search":
        return <Search className="w-5 h-5 text-white" />;
      default:
        return <Building2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#A93F33] selection:text-white">
      {/* HEADER (3-Row Header matching LUAT008-luat_su_5.jpg) */}
      <header className="bg-white sticky top-0 z-40 shadow-xs">
        {/* Top Utility Strip */}
        <div className="border-b border-[#efefef] text-[11px] text-[#555555]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
            <div className="flex items-center gap-3 font-semibold text-[#444444]">
              <a href="#lien-he" className="hover:text-[#A93F33]">
                f
              </a>
              <a href="#lien-he" className="hover:text-[#A93F33]">
                t
              </a>
              <a href="#lien-he" className="hover:text-[#A93F33]">
                g+
              </a>
              <a href="#lien-he" className="hover:text-[#A93F33]">
                in
              </a>
            </div>
            <div className="flex items-center gap-5">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 font-semibold text-[#222222] hover:text-[#A93F33]"
              >
                <Phone className="w-3.5 h-3.5 text-[#222222]" />
                <span>{primaryPhone}</span>
              </a>
              <a
                href={`mailto:${primaryEmail}`}
                className="hidden sm:flex items-center gap-1.5 hover:text-[#A93F33]"
              >
                <Mail className="w-3.5 h-3.5 text-[#555555]" />
                <span>{primaryEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Logo & Consultation CTA Row */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full border-2 border-[#A93F33] flex items-center justify-center text-[#A93F33]">
                  <Scale className="w-4 h-4" />
                </div>
                <span className="text-xs font-serif font-bold text-[#A93F33] mt-0.5">
                  {data.business.name}
                </span>
              </div>
            )}
          </a>

          <button
            type="button"
            onClick={() => setConsultOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D2432] hover:bg-[#A93F33] text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ĐĂNG KÝ TƯ VẤN</span>
          </button>
        </div>

        {/* Bottom Terracotta Red Navigation Bar (#A93F33) */}
        <div className="bg-[#A93F33] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-center">
            <nav className="flex items-center gap-6 sm:gap-10 text-[11px] font-bold uppercase tracking-wider overflow-x-auto no-scrollbar">
              <a
                href="#"
                className="border-b-2 border-white py-1 whitespace-nowrap"
              >
                TRANG CHỦ
              </a>
              <a
                href="#gioi-thieu"
                className="hover:text-white/80 py-1 whitespace-nowrap"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#linh-vuc"
                className="hover:text-white/80 py-1 whitespace-nowrap"
              >
                DỊCH VỤ
              </a>
              <a
                href="#tin-tuc"
                className="hover:text-white/80 py-1 whitespace-nowrap"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he"
                className="hover:text-white/80 py-1 whitespace-nowrap"
              >
                LIÊN HỆ
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO BANNER (Gavel & Law Books Background matching LUAT008-luat_su_5.jpg) */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden bg-[#3a2f28]">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c2520]/85 via-[#3d342d]/65 to-black/35" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 py-16">
          <div className="max-w-lg text-white">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/95">
              {data.hero.eyebrow || "CÔNG TY TƯ VẤN PHÁP LUẬT"}
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              {data.business.name || data.hero.title}
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-white/90 leading-relaxed max-w-md">
              {data.hero.subtitle}
            </p>
            <div className="mt-6">
              <a
                href={data.hero.ctaLink || "#linh-vuc"}
                className="inline-block px-6 py-2.5 bg-[#1D2432] hover:bg-[#A93F33] text-white text-xs font-bold rounded-xs transition-colors shadow-md"
              >
                {data.hero.ctaText || "Tìm hiểu ngay"}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slider Dots */}
        <div className="absolute bottom-4 inset-x-0 z-10 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 bg-white/60" />
          <span className="w-2.5 h-2.5 bg-white border border-black/30" />
          <span className="w-2 h-2 bg-white/60" />
        </div>
      </section>

      {/* SECTION 2: LĨNH VỰC TƯ VẤN (3 Bordered Cards + Slider Dots) */}
      <section id="linh-vuc" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#222222]">
              LĨNH VỰC TƯ VẤN
            </h2>
            <div className="w-10 h-0.5 bg-[#A93F33] mx-auto my-2.5" />
            <p className="text-xs font-medium text-[#444444]">
              Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành
              động pháp lý của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleServices.map((srv) => (
              <div
                key={srv.id}
                className="border border-[#e6e6e6] hover:border-[#A93F33] p-7 transition-all bg-white group"
              >
                <div className="mb-4">{renderServiceIcon(srv.icon)}</div>
                <h3 className="text-xs font-extrabold uppercase tracking-wide text-[#222222] group-hover:text-[#A93F33] transition-colors">
                  {srv.title}
                </h3>
                <p className="mt-2.5 text-xs text-[#777777] leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setServicePage(0)}
              aria-label="Trang 1"
              className={`w-2.5 h-2.5 transition-colors ${
                servicePage === 0 ? "bg-[#A93F33]" : "bg-[#d5d5d5]"
              }`}
            />
            <button
              type="button"
              onClick={() => setServicePage(1)}
              aria-label="Trang 2"
              className={`w-2.5 h-2.5 transition-colors ${
                servicePage === 1 ? "bg-[#A93F33]" : "bg-[#d5d5d5]"
              }`}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: GIỚI THIỆU (Split 50/50 Scales Image Left + 3 Icon Blocks Right) */}
      <section id="gioi-thieu" className="bg-[#F6F6F6]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Half: Brass Scales of Justice Image */}
          <div className="lg:col-span-6 min-h-[380px] overflow-hidden">
            <img
              src={data.aboutImage}
              alt="Giới thiệu"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Half: GIỚI THIỆU + 3 Blocks */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-lg">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#222222]">
                {data.business.aboutTitle || "GIỚI THIỆU"}
              </h2>
              <div className="w-10 h-0.5 bg-[#A93F33] mt-2 mb-7" />

              <div className="space-y-6">
                {data.aboutBlocks.map((blk, idx) => (
                  <div key={blk.id} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      {renderAboutIcon(blk.icon)}
                    </div>
                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-wide text-[#222222]">
                        {blk.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-[#666666] leading-relaxed">
                        {idx === 0 && data.business.aboutText?.[0]
                          ? data.business.aboutText[0]
                          : blk.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: KHÁCH HÀNG DOANH NGHIỆP BAR */}
      <section className="py-7 bg-white border-b border-[#efefef]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:pr-8 md:border-r-2 md:border-[#A93F33] py-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#222222]">
              KHÁCH HÀNG DOANH NGHIỆP
            </span>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center text-center">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="text-base font-serif font-bold text-[#888888] hover:text-[#222222] transition-colors tracking-wider"
              >
                {cl.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: NGUYÊN TẮC HOẠT ĐỘNG (Dark Law Books Banner with 3 Columns) */}
      <section className="relative py-16 bg-[#241610] text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80"
          alt="Nguyên tắc hoạt động"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#2b1810]/80" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold uppercase">
            NGUYÊN TẮC HOẠT ĐỘNG
          </h2>
          <div className="w-10 h-0.5 bg-[#A93F33] mx-auto mt-2.5 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {data.principles.map((pr) => (
              <div
                key={pr.id}
                className="px-6 py-4 flex flex-col items-center text-center"
              >
                <div className="mb-3">{renderPrincipleIcon(pr.icon)}</div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider">
                  {pr.title}
                </h3>
                <p className="mt-2 text-xs text-white/80 leading-relaxed max-w-xs">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: KHÁCH HÀNG NHẬN XÉT (3 Cards with Circular Avatars) */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#222222]">
              KHÁCH HÀNG NHẬN XÉT
            </h2>
            <div className="w-10 h-0.5 bg-[#A93F33] mx-auto my-2.5" />
            <p className="text-xs font-medium text-[#444444]">
              Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành
              động pháp lý của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((rv) => (
              <div
                key={rv.id}
                className="bg-white p-8 text-center shadow-xs border border-[#ececec] flex flex-col items-center"
              >
                <img
                  src={rv.avatar}
                  alt={rv.author}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#f0f0f0]"
                />
                <h3 className="text-sm font-bold text-[#A93F33]">
                  {rv.author}
                </h3>
                <span className="text-[11px] italic text-[#777777] mt-0.5">
                  {rv.role}
                </span>
                <p className="mt-3 text-xs italic text-[#555555] leading-relaxed">
                  {rv.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TERRACOTTA RED COUNTER STRIP (#A93F33) */}
      <section className="py-12 bg-[#A93F33] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {(data.stats || []).map((st) => (
            <div key={st.id}>
              <span className="block text-3xl sm:text-4xl font-extrabold">
                {st.number}
              </span>
              <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-wider text-white/90">
                {st.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: LUẬT SƯ CỦA CHÚNG TÔI (4 Circular Portraits) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#222222]">
              LUẬT SƯ CỦA CHÚNG TÔI
            </h2>
            <div className="w-10 h-0.5 bg-[#A93F33] mx-auto my-2.5" />
            <p className="text-xs font-medium text-[#444444]">
              Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành
              động pháp lý của bạn
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {(data.team || []).map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center group"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 border-4 border-[#f5f5f5] shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#A93F33]">
                  {member.name}
                </h3>
                <span className="text-xs italic text-[#666666] mt-0.5">
                  {member.position}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: SPLIT CALL-TO-ACTION BANNER */}
      <section className="bg-[#241c18] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Dark CTA */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:py-14 lg:px-16 flex flex-col justify-center relative">
            <div className="max-w-lg ml-auto w-full">
              <h2 className="text-xl sm:text-2xl font-bold">
                {data.ctaBanner.title}
              </h2>
              <p className="mt-1.5 text-xs text-white/80">
                {data.ctaBanner.subtitle}
              </p>
              <div className="mt-5">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="inline-block px-6 py-2.5 bg-[#A93F33] hover:bg-[#8f3227] text-white text-sm font-extrabold tracking-wider transition-colors"
                >
                  {primaryPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Handshake Photo */}
          <div className="lg:col-span-5 min-h-[220px]">
            <img
              src={data.ctaBanner.handshakeImage}
              alt="Hợp tác pháp lý"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 10: TIN MỚI NHẤT (3-Column Blog Grid) */}
      <section id="tin-tuc" className="py-16 bg-[#F7F7F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#222222]">
              TIN MỚI NHẤT
            </h2>
            <div className="w-10 h-0.5 bg-[#A93F33] mx-auto mt-2.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#ebebeb] shadow-2xs overflow-hidden group flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[#A93F33] group-hover:text-[#222222] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <span className="block text-[10px] text-[#999999] mt-1.5">
                      {post.date}
                    </span>
                    <p className="mt-2.5 text-xs text-[#666666] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (Deep Navy #12161F matching LUAT008-luat_su_5.jpg) */}
      <footer id="lien-he" className="bg-[#12161F] text-white/80 pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Col 1: Shield Logo & Bio */}
            <div className="lg:col-span-3">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white mb-2">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="text-base font-serif font-bold text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="mt-3 text-xs text-white/65 leading-relaxed">
                Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành
                động pháp lý của bạn.
              </p>
            </div>

            {/* Col 2: LIÊN HỆ */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <a href={`mailto:${primaryEmail}`} className="hover:text-white">
                    {primaryEmail}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: LIÊN KẾT */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                LIÊN KẾT
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-[#A93F33] font-semibold">
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="#linh-vuc" className="hover:text-white">
                      Dịch vụ
                    </a>
                  </li>
                  <li>
                    <a href="#lien-he" className="hover:text-white">
                      Liên hệ
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <a href="#gioi-thieu" className="hover:text-white">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="#tin-tuc" className="hover:text-white">
                      Tin tức
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                ĐĂNG KÝ
              </h4>
              <p className="text-xs text-white/65 leading-relaxed mb-3">
                Đăng ký để nhận được được thông tin pháp lý mới nhất từ chúng
                tôi.
              </p>
              {newsletterDone ? (
                <div className="text-xs text-[#a8d886] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã đăng ký nhận bản tin!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex items-center bg-white rounded-xs overflow-hidden"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="w-full px-3 py-2 text-xs text-[#222222] focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Gửi"
                    className="px-3 py-2 text-[#A93F33] hover:bg-[#f5f5f5]"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-white/50">
            © Bản quyền thuộc về <strong>{data.business.name}</strong> • Thiết
            kế bởi TaviWeb
          </div>
        </div>
      </footer>

      {/* CONSULTATION MODAL */}
      {consultOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
          onClick={() => setConsultOpen(false)}
        >
          <div
            className="bg-white max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setConsultOpen(false)}
              className="absolute top-4 right-4 text-[#777777] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold uppercase text-[#222222]">
              ĐĂNG KÝ TƯ VẤN PHÁP LÝ
            </h3>
            <div className="w-10 h-0.5 bg-[#A93F33] mt-1.5 mb-4" />

            {submitted ? (
              <div className="py-6 text-center text-xs text-[#222222] space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#5C8D3E] mx-auto" />
                <p className="font-bold">Đã gửi yêu cầu thành công!</p>
                <p className="text-[#666666]">
                  Luật sư của {data.business.name} sẽ liên hệ lại với bạn ngay.
                </p>
              </div>
            ) : (
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
                  placeholder="Họ và tên *"
                  className="w-full px-3.5 py-2.5 border border-[#dddddd] text-xs focus:outline-none focus:border-[#A93F33]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  className="w-full px-3.5 py-2.5 border border-[#dddddd] text-xs focus:outline-none focus:border-[#A93F33]"
                />
                <textarea
                  rows={3}
                  required
                  placeholder="Tóm tắt nội dung cần luật sư tư vấn..."
                  className="w-full px-3.5 py-2.5 border border-[#dddddd] text-xs focus:outline-none focus:border-[#A93F33]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#A93F33] hover:bg-[#8e3329] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  GỬI YÊU CẦU NGAY
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
