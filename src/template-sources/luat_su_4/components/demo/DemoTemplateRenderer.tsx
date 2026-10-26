"use client";

import React, { useState } from "react";
import {
  Phone,
  Search,
  MessageSquare,
  Users,
  Briefcase,
  Plane,
  Scale,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Star,
  Send,
  MapPin,
  ArrowUp,
  CheckCircle2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { luatSu4DefaultData, type LuatSu4Data } from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: LuatSu4Data = adaptClonedTemplateData(
    luatSu4DefaultData,
    incomingData
  );

  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "1900 638 648";
  const primaryEmail = data.business.email?.[0] || "contact@attorneyslaw.vn";
  const mainTestimonial = data.testimonials?.[0];

  const renderServiceIcon = (iconName?: string) => {
    switch (iconName) {
      case "family":
        return <Users className="w-8 h-8 text-[#C2A661] stroke-[1.4]" />;
      case "briefcase":
        return <Briefcase className="w-8 h-8 text-[#C2A661] stroke-[1.4]" />;
      case "plane":
        return <Plane className="w-8 h-8 text-[#C2A661] stroke-[1.4]" />;
      default:
        return <Scale className="w-8 h-8 text-[#C2A661] stroke-[1.4]" />;
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#333333] font-sans selection:bg-[#C2A661] selection:text-white"
    >
      {/* TOPBAR & HEADER (Matches LUAT007-luat_su_4.jpg) */}
      <header className="bg-white border-b border-[#eeeeee] sticky top-0 z-40">
        {/* Top Utility Strip */}
        <div className="border-b border-[#f0f0f0] text-[11px] text-[#888888]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
            <div>
              GỌI NGAY :{" "}
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="font-semibold text-[#555555] hover:text-[#C2A661]"
              >
                {primaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#tu-van"
                className="flex items-center gap-1.5 hover:text-[#C2A661] transition-colors uppercase tracking-wider"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C2A661]" />
                <span>NHẬN TƯ VẤN TRỰC TIẾP</span>
              </a>
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="hover:text-[#C2A661] transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-[#C2A661] bg-[#222426] flex items-center justify-center text-[#C2A661]">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm sm:text-base font-serif font-bold tracking-[0.18em] uppercase text-[#222426]">
                    {data.business.name}
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.22em] text-[#999999]">
                    PERSONAL INJURY & CORPORATE ATTORNEY
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#555555]">
            <a href="#" className="text-[#C2A661] font-semibold">
              Trang chủ
            </a>
            <a
              href="#chung-toi-la-ai"
              className="hover:text-[#C2A661] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#luat-su"
              className="hover:text-[#C2A661] transition-colors"
            >
              Thành viên
            </a>
            <a
              href="#linh-vuc"
              className="hover:text-[#C2A661] transition-colors"
            >
              Dịch vụ
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#C2A661] transition-colors"
            >
              Tin tức
            </a>
            <a
              href="#tu-van"
              className="hover:text-[#C2A661] transition-colors"
            >
              Liên hệ
            </a>
          </nav>
        </div>
      </header>

      {/* HERO BANNER (Dark Moody City Skyline with Center Serif Headline) */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center justify-center text-center overflow-hidden bg-[#1b1f24] pb-16">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14181d]/80 via-[#1b2028]/75 to-[#14181d]/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16">
          {/* Center Shield / Emblem */}
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="text-xs font-serif font-bold tracking-[0.25em] uppercase text-white/90">
              {data.business.name}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-bold text-white leading-[1.2] whitespace-pre-line">
            {data.hero.title}
          </h1>

          {data.hero.subtitle && (
            <p className="mt-3 text-xs sm:text-sm text-white/80 tracking-wider uppercase">
              {data.hero.subtitle}
            </p>
          )}

          <div className="mt-8">
            <a
              href={data.hero.ctaLink || "#linh-vuc"}
              className="inline-block px-8 py-3 bg-white hover:bg-[#C2A661] text-[#222426] hover:text-white text-xs font-semibold tracking-wider rounded-xs shadow-lg transition-colors"
            >
              {data.hero.ctaText || "Xem thêm"}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: OVERLAPPING 4-STATS BOX + 4 PRACTICE AREAS GRID */}
      <section id="linh-vuc" className="pb-16 bg-white relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Overlapping Stats Box */}
          <div className="-mt-14 bg-white shadow-lg border border-[#ebebeb] grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#eeeeee]">
            {(data.stats || []).map((st) => (
              <div key={st.id} className="py-7 px-4 text-center">
                <span className="block text-xl sm:text-2xl font-bold text-[#333333]">
                  {st.number}
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#999999]">
                  {st.title}
                </span>
              </div>
            ))}
          </div>

          {/* 4 Practice Area Columns */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.services || []).map((srv) => (
              <div key={srv.id} className="group">
                <div className="mb-4">{renderServiceIcon(srv.icon)}</div>
                <h3 className="text-sm font-bold text-[#333333] group-hover:text-[#C2A661] transition-colors">
                  {srv.title}
                </h3>
                <p className="mt-3 text-xs text-[#777777] leading-relaxed">
                  {srv.description}
                </p>
                <a
                  href="#tu-van"
                  className="mt-5 inline-flex items-center gap-1 text-[11px] text-[#C2A661] hover:text-[#9c8243] font-medium"
                >
                  <span>Đọc thêm</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CHÚNG TÔI LÀ AI (Quote + History Timeline + Help/FAQ) */}
      <section
        id="chung-toi-la-ai"
        className="py-16 bg-white border-t border-[#f0f0f0]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#e0e0e0]" />
              <h2 className="text-lg sm:text-xl font-normal uppercase tracking-[0.15em] text-[#444444]">
                {data.business.aboutTitle || "CHÚNG TÔI LÀ AI"}
              </h2>
              <span className="h-px w-12 bg-[#e0e0e0]" />
            </div>

            <blockquote className="mt-6 text-sm sm:text-base font-serif text-[#333333] leading-relaxed">
              {data.aboutQuote.quote}
            </blockquote>
            <p className="mt-2.5 text-xs text-[#888888] leading-relaxed">
              {data.business.aboutText?.[0] || data.aboutQuote.subtext}
            </p>
            <span className="mt-3 block text-[10px] uppercase tracking-[0.2em] text-[#999999]">
              – {data.aboutQuote.author} –
            </span>
          </div>

          {/* 2-Column Layout: LỊCH SỬ (Left) & CHÚNG TÔI CÓ THỂ GIÚP (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: LỊCH SỬ */}
            <div className="lg:col-span-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#777777] mb-4">
                LỊCH SỬ :
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                {/* Portrait + Dark Slate Quick Links Box */}
                <div className="sm:col-span-5 flex flex-col">
                  <img
                    src={data.aboutQuote.lawyerPortrait}
                    alt={data.aboutQuote.author}
                    className="w-full h-52 object-cover"
                  />
                  <div className="bg-[#343A40] text-white/80 p-5 text-[10px] uppercase tracking-[0.16em] space-y-2">
                    <a
                      href="#chung-toi-la-ai"
                      className="block hover:text-[#C2A661]"
                    >
                      FAQ →
                    </a>
                    <a href="#tin-tuc" className="block hover:text-[#C2A661]">
                      KHÁCH HÀNG →
                    </a>
                    <a href="#tu-van" className="block hover:text-[#C2A661]">
                      LIÊN HỆ →
                    </a>
                    <a href="#tin-tuc" className="block hover:text-[#C2A661]">
                      NHẬN XÉT →
                    </a>
                    <a href="#luat-su" className="block hover:text-[#C2A661]">
                      LUẬT SƯ →
                    </a>
                  </div>
                  <div className="mt-4 font-serif italic text-xl text-[#666666] pl-2">
                    {data.aboutQuote.author}
                  </div>
                </div>

                {/* Right Chronological Milestones */}
                <div className="sm:col-span-7 space-y-6">
                  {data.historyMilestones.map((item) => (
                    <div key={item.id}>
                      <h4 className="text-xs font-bold text-[#333333]">
                        <span className="text-[#5C8D3E]">– {item.year}, </span>
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-[#777777] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                  <a
                    href="#tu-van"
                    className="inline-flex items-center gap-1 text-[11px] text-[#C2A661] hover:underline font-medium"
                  >
                    <span>Xem thêm</span>
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: CHÚNG TÔI CÓ THỂ GIÚP + FAQ ACCORDION */}
            <div className="lg:col-span-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#777777] mb-4">
                CHÚNG TÔI CÓ THỂ GIÚP :
              </h3>

              {/* Top Split Image Banner */}
              <div className="relative h-56 overflow-hidden mb-5 bg-[#222426]">
                <img
                  src={data.helpBannerImage}
                  alt="Chúng tôi có thể giúp"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-y-0 left-0 w-3/5 bg-[#222426]/85 p-5 flex flex-col justify-center">
                  <ShieldCheck className="w-7 h-7 text-[#C2A661] mb-3 stroke-[1.5]" />
                  <ul className="space-y-1.5 text-xs text-white/90">
                    {data.helpLinks.map((lnk, idx) => (
                      <li key={idx}>
                        <a
                          href="#tu-van"
                          className="hover:text-[#C2A661] transition-colors flex items-center gap-1"
                        >
                          <span>{lnk}</span>
                          <span>→</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interactive FAQ Accordion */}
              <div className="border border-[#eeeeee] divide-y divide-[#eeeeee]">
                {data.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={faq.id} className="bg-white">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full px-4 py-3 text-left flex items-center gap-2 text-xs font-semibold text-[#555555] hover:text-[#C2A661] transition-colors"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-[#C2A661] transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span>{faq.question}</span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 pt-1 text-xs text-[#777777] leading-relaxed border-l-2 border-[#C2A661] ml-4 mb-2">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PARTNER LOGOS STRIP */}
      <section className="py-10 bg-white border-t border-b border-[#f0f0f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-5 gap-6 items-center text-center">
          {(data.clients || []).map((cl) => (
            <div
              key={cl.id}
              className="text-sm font-serif font-bold tracking-widest text-[#999999] hover:text-[#333333] transition-colors uppercase"
            >
              {cl.name}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: TIN TỨC & NHẬN XÉT */}
      <section id="tin-tuc" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-px w-12 bg-[#e0e0e0]" />
            <h2 className="text-lg sm:text-xl font-normal uppercase tracking-[0.15em] text-[#444444]">
              TIN TỨC & NHẬN XÉT
            </h2>
            <span className="h-px w-12 bg-[#e0e0e0]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 2 News Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(data.news || []).slice(0, 2).map((post) => (
                <article key={post.id} className="group flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden mb-4 bg-[#f5f5f5]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#999999]">
                    {post.category || "TIN TỨC"}
                  </span>
                  <h3 className="mt-1 text-xs font-bold text-[#9E7B56] group-hover:text-[#333333] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <span className="mt-1 text-[10px] text-[#999999]">
                    {post.date}
                  </span>
                  <p className="mt-2.5 text-xs text-[#777777] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href="#tu-van"
                    className="mt-4 inline-block text-[10px] font-bold uppercase tracking-wider text-[#555555] hover:text-[#C2A661] border-b border-[#cccccc] pb-0.5 self-start"
                  >
                    ĐỌC THÊM
                  </a>
                </article>
              ))}
            </div>

            {/* Right Client Testimonial Column */}
            {mainTestimonial && (
              <div className="lg:col-span-5 flex flex-col sm:flex-row gap-5 items-start pt-2">
                <img
                  src={mainTestimonial.avatar}
                  alt={mainTestimonial.author}
                  className="w-24 h-28 object-cover shrink-0 shadow-xs"
                />
                <div>
                  <div className="flex items-center gap-0.5 text-[#333333] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#333333] text-[#333333]"
                      />
                    ))}
                  </div>
                  <h4 className="text-base font-serif italic text-[#444444]">
                    Hội nhập vào nền kinh tế
                  </h4>
                  <p className="mt-2 text-xs italic text-[#777777] leading-relaxed">
                    {mainTestimonial.content}
                  </p>
                  <div className="mt-4 font-serif italic text-lg text-[#666666]">
                    {mainTestimonial.author}
                  </div>
                  <div className="mt-1 text-[11px] text-[#555555]">
                    <strong>{mainTestimonial.author}</strong> /{" "}
                    <span className="text-[#888888]">
                      {mainTestimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 6: THÀNH PHẦN LUẬT SƯ + INTERNSHIP CTA */}
      <section
        id="luat-su"
        className="py-16 bg-white border-t border-[#f0f0f0]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#e0e0e0]" />
              <h2 className="text-lg sm:text-xl font-normal uppercase tracking-[0.15em] text-[#444444]">
                THÀNH PHẦN LUẬT SƯ
              </h2>
              <span className="h-px w-12 bg-[#e0e0e0]" />
            </div>
            <p className="mt-3 text-xs italic text-[#888888]">
              “Bắt đầu ở nơi bạn đứng và làm việc với bất kỳ công cụ pháp lý nào
              bạn có, giải pháp tối ưu nhất sẽ được tìm thấy cùng đội ngũ luật
              sư của chúng tôi.”
            </p>
          </div>

          {/* 4 Lawyer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.team || []).map((member) => (
              <div key={member.id} className="group">
                <div className="aspect-[4/4.3] overflow-hidden bg-[#f2f2f2] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#333333]">
                  {member.name}
                </h3>
                <span className="block text-[10px] uppercase tracking-widest text-[#999999] mt-0.5">
                  {member.position}
                </span>

                <div className="my-3 h-px w-6 bg-[#dddddd]" />

                <div className="text-[11px] text-[#777777] space-y-0.5">
                  <p>Email : {primaryEmail}</p>
                  <p>Tel : {primaryPhone}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Internship Recruitment Block */}
          <div className="mt-16 pt-12 border-t border-[#f0f0f0] text-center max-w-2xl mx-auto">
            <h3 className="text-base sm:text-lg font-normal text-[#444444]">
              {data.internshipCta.title}
            </h3>
            <p className="mt-2.5 text-xs text-[#888888] leading-relaxed">
              {data.internshipCta.description}
            </p>
            <a
              href="#tu-van"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2 border border-[#dddddd] hover:border-[#C2A661] text-xs text-[#666666] hover:text-[#C2A661] transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-[#C2A661]" />
              <span>{data.internshipCta.buttonText}</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: YÊU CẦU TƯ VẤN MIỄN PHÍ (Marble Pillars Background) */}
      <section
        id="tu-van"
        className="py-16 lg:py-20 bg-[#F2F2F2] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d5d5d5]" />
            <h2 className="text-lg sm:text-xl font-normal uppercase tracking-[0.15em] text-[#444444]">
              YÊU CẦU TƯ VẤN MIỄN PHÍ
            </h2>
            <span className="h-px w-10 bg-[#d5d5d5]" />
          </div>
          <p className="mt-2 text-xs text-[#777777]">
            Điền thông tin và chúng tôi sẽ liên hệ cho bạn nhanh nhất
          </p>

          {formSubmitted ? (
            <div className="mt-8 p-6 bg-white border border-[#C2A661] shadow-sm inline-flex items-center gap-3 text-xs text-[#333333]">
              <CheckCircle2 className="w-5 h-5 text-[#5C8D3E]" />
              <span>
                Yêu cầu tư vấn của Quý khách đã được tiếp nhận. Luật sư của{" "}
                <strong>{data.business.name}</strong> sẽ liên hệ ngay!
              </span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
              className="mt-8 space-y-4 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên"
                  className="px-4 py-3 bg-white border border-[#e2e2e2] text-xs focus:outline-none focus:border-[#C2A661]"
                />
                <input
                  type="text"
                  required
                  placeholder="Email / Số điện thoại"
                  className="px-4 py-3 bg-white border border-[#e2e2e2] text-xs focus:outline-none focus:border-[#C2A661]"
                />
                <select className="px-4 py-3 bg-white border border-[#e2e2e2] text-xs text-[#555555] focus:outline-none focus:border-[#C2A661]">
                  <option>Hôn nhân & gia đình</option>
                  <option>Tư vấn Doanh nghiệp & Thuế</option>
                  <option>Đầu tư vốn nước ngoài</option>
                  <option>Tố tụng dân sự & thương mại</option>
                </select>
              </div>
              <textarea
                rows={4}
                required
                placeholder="Lời nhắn chi tiết vụ việc cần luật sư hỗ trợ..."
                className="w-full px-4 py-3 bg-white border border-[#e2e2e2] text-xs focus:outline-none focus:border-[#C2A661]"
              />
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#C2A661] hover:bg-[#ad914d] text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-xs"
                >
                  GỬI TIN NHẮN
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER (Dark Charcoal #222426 matching LUAT007-luat_su_4.jpg) */}
      <footer className="bg-[#222426] text-white/80 pt-10 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Back to top & Menu */}
          <div className="text-center pb-8 border-b border-white/10">
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.22em] text-white/60 hover:text-[#C2A661] mb-4"
            >
              <ArrowUp className="w-3 h-3" />
              <span>- BACK TO TOP -</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
              <a href="#" className="hover:text-[#C2A661]">
                Trang chủ
              </a>
              <a href="#chung-toi-la-ai" className="hover:text-[#C2A661]">
                Giới thiệu
              </a>
              <a href="#luat-su" className="hover:text-[#C2A661]">
                Thành viên
              </a>
              <a href="#linh-vuc" className="hover:text-[#C2A661]">
                Dịch vụ
              </a>
              <a href="#tin-tuc" className="hover:text-[#C2A661]">
                Tin tức
              </a>
              <a href="#tu-van" className="hover:text-[#C2A661]">
                Liên hệ
              </a>
            </div>
          </div>

          {/* Hotlines Row */}
          <div className="py-8 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div>
              <span className="block text-xs text-white/60">Hồ Chí Minh</span>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="text-xl font-normal text-[#C2A661] tracking-wider"
              >
                {primaryPhone}
              </a>
            </div>
            <div>
              <span className="block text-xs text-white/60">Hà Nội</span>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="text-xl font-normal text-[#C2A661] tracking-wider"
              >
                {primaryPhone}
              </a>
            </div>
            <div className="sm:text-right">
              <a
                href="#tu-van"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/25 hover:border-[#C2A661] text-xs uppercase tracking-wider text-white hover:text-[#C2A661] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>NHẬN TƯ VẤN MIỄN PHÍ ›</span>
              </a>
            </div>
          </div>

          {/* Bottom 4 Columns */}
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
            <div>
              <h4 className="font-bold text-white mb-3">Về chúng tôi</h4>
              <p className="text-white/60 leading-relaxed text-[11px]">
                {data.business.aboutText?.[0]}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Dịch vụ</h4>
              <ul className="space-y-1.5 text-white/65 text-[11px]">
                {data.helpLinks.map((lnk, idx) => (
                  <li key={idx}>
                    <a href="#linh-vuc" className="hover:text-[#C2A661]">
                      {lnk} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Hồ Chí Minh</h4>
              <p className="text-white/60 text-[11px] leading-relaxed">
                {data.business.address}
              </p>
              <p className="mt-2 text-white/60 text-[11px]">
                Tel : {primaryPhone}
              </p>
              <p className="text-white/60 text-[11px]">
                Email : {primaryEmail}
              </p>
              <a
                href="#tu-van"
                className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#C2A661] hover:underline"
              >
                <span>Xem đường đi</span>
                <MapPin className="w-3 h-3" />
              </a>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Hà Nội</h4>
              <p className="text-white/60 text-[11px] leading-relaxed">
                {data.offices?.[1]?.address || data.business.address}
              </p>
              <p className="mt-2 text-white/60 text-[11px]">
                Tel : {primaryPhone}
              </p>
              <p className="text-white/60 text-[11px]">
                Email : {primaryEmail}
              </p>
              <a
                href="#tu-van"
                className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#C2A661] hover:underline"
              >
                <span>Xem đường đi</span>
                <MapPin className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-[11px] text-white/50">
            © Bản quyền thuộc về <strong>{data.business.name}</strong> • Thiết
            kế bởi TaviWeb
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
