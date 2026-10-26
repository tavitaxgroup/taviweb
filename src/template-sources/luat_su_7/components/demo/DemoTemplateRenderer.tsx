"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Truck,
  Landmark,
  Accessibility,
  Banknote,
  Quote,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu7DefaultData,
  type LuatSu7Data,
  type LuatSu7PracticeBox,
  type LuatSu7LawyerMember
} from "@/template-sources/luat_su_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LuatSu7Data = adaptClonedTemplateData(luatSu7DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState<LuatSu7PracticeBox | null>(
    null
  );
  const [selectedMember, setSelectedMember] = useState<LuatSu7LawyerMember | null>(null);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  // Secret Free Consultation Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "mon@mona.media";
  const testimonials = data.testimonials || luatSu7DefaultData.testimonials || [];
  const activeReview = testimonials[activeReviewIdx] || testimonials[0];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormName("");
    setFormEmail("");
    setFormSubject("");
    setFormMessage("");
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const renderPracticeIcon = (icon: LuatSu7PracticeBox["icon"]) => {
    switch (icon) {
      case "truck":
        return <Truck className="w-11 h-11 text-[#ef6666]" />;
      case "landmark":
        return <Landmark className="w-11 h-11 text-[#ef6666]" />;
      case "accessibility":
        return <Accessibility className="w-11 h-11 text-[#ef6666]" />;
      default:
        return <Banknote className="w-11 h-11 text-[#ef6666]" />;
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#333333] font-sans selection:bg-[#ef6666] selection:text-white"
    >
      {/* 1. DARK SLATE HEADER (#232931) */}
      <header className="sticky top-0 z-40 bg-[#232931] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          {/* Left: Monogram M Logo + Navigation */}
          <div className="flex items-center gap-8">
            <a href="#top" className="flex flex-col items-center group">
              <div className="w-9 h-9 border-2 border-[#ef6666] flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-[#ef6666] leading-none">
                  M
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.18em] text-[#ef6666] font-semibold mt-1">
                {data.business.name}
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-6 text-xs text-stone-300">
              <a
                href="#top"
                className="text-white font-medium border-b-2 border-[#ef6666] pb-1"
              >
                Trang chủ
              </a>
              <a
                href="#about"
                className="hover:text-[#ef6666] transition-colors pb-1"
              >
                Giới thiệu
              </a>
              <a
                href="#team"
                className="hover:text-[#ef6666] transition-colors pb-1"
              >
                Thành viên
              </a>
              <a
                href="#practice-areas"
                className="hover:text-[#ef6666] transition-colors pb-1"
              >
                Dịch vụ
              </a>
              <a
                href="#testimonials"
                className="hover:text-[#ef6666] transition-colors pb-1"
              >
                Tin tức
              </a>
              <a
                href="#contact-form"
                className="hover:text-[#ef6666] transition-colors pb-1"
              >
                Liên hệ
              </a>
            </nav>
          </div>

          {/* Right: Stacked Phone & Email with Coral Icons */}
          <div className="hidden sm:flex flex-col items-start gap-1.5 text-[11px] text-stone-300">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-[#ef6666] transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-[#ef6666] text-white flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </span>
              <span>{primaryPhone}</span>
            </a>
            <a
              href={`mailto:${primaryEmail}`}
              className="flex items-center gap-2 hover:text-[#ef6666] transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-[#ef6666] text-white flex items-center justify-center">
                <Mail className="w-3 h-3" />
              </span>
              <span>{primaryEmail}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-200 hover:text-[#ef6666]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1d2229] border-t border-white/10 px-6 py-4 space-y-2.5 text-xs text-stone-200">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#ef6666] font-semibold"
            >
              Trang chủ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#ef6666]"
            >
              Giới thiệu
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#ef6666]"
            >
              Thành viên
            </a>
            <a
              href="#practice-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#ef6666]"
            >
              Dịch vụ
            </a>
            <a
              href="#contact-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#ef6666]"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (DARK RED NIGHT CITYSCAPE / RIVER) */}
      <section className="relative overflow-hidden bg-[#1a0a0c] text-white">
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3a0d12]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#2a080c]/60 to-black/80" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 py-28 sm:py-36 text-center space-y-4">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow">
            {data.hero.title}
          </h1>
          <p className="font-serif text-lg sm:text-2xl uppercase tracking-[0.18em] text-stone-100 pt-1">
            {data.hero.subtitle}
          </p>
          <div className="pt-5">
            <a
              href={data.hero.ctaLink || "#practice-areas"}
              className="inline-block bg-white hover:bg-[#ef6666] text-[#232931] hover:text-white text-xs font-semibold px-9 py-3 rounded-sm shadow-lg transition-colors"
            >
              {data.hero.ctaText || "Xem thêm"}
            </a>
          </div>
        </div>

        {/* Bottom Slider Indicator Bar */}
        <div className="relative z-10 pb-5 flex items-center justify-center gap-2">
          <span className="w-7 h-1 bg-white/40 rounded-full" />
          <span className="w-7 h-1 bg-white rounded-full" />
        </div>
      </section>

      {/* 3. RECOVERY MILESTONE SECTION ("Công ty chúng tôi đã phục hồi hơn 3.000.000.000 VNĐ") */}
      <section id="about" className="bg-white pt-16 pb-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#222222]">
            {data.recoverySection.heading}
          </h2>
          <p className="font-serif italic text-2xl sm:text-4xl lg:text-5xl text-[#ef6666] pt-1">
            <span className="text-lg sm:text-xl text-[#333333] mr-2">
              {data.recoverySection.prefixText}
            </span>
            {data.recoverySection.highlightAmount}
          </p>
          <div className="pt-2">
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#333333] block">
              {data.recoverySection.sinceLabel}
            </span>
            <div className="w-12 h-0.5 bg-[#ef6666] mx-auto mt-3" />
          </div>

          {/* 3-Column Paragraphs */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-xs text-stone-500 leading-relaxed font-serif">
            {data.recoverySection.columns.map((col, idx) => (
              <p key={idx}>{col}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LĨNH VỰC HOẠT ĐỘNG (4 CORAL-BORDERED OUTLINED ICON BOXES) */}
      <section id="practice-areas" className="bg-white pt-6 pb-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#df6c6c]">
            Lĩnh vực hoạt động
          </h2>
          <div className="w-12 h-0.5 bg-[#ef6666] mx-auto mt-3 mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.practiceBoxes.map((box) => (
              <button
                key={box.id}
                type="button"
                onClick={() => setSelectedPractice(box)}
                className="group border-2 border-[#ef6666]/70 hover:border-[#ef6666] bg-white p-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {renderPracticeIcon(box.icon)}
                </div>
                <h3 className="font-serif text-sm sm:text-base text-stone-600 group-hover:text-[#ef6666] transition-colors">
                  {box.title}
                </h3>
              </button>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact-form"
              className="inline-block bg-[#ef6666] hover:bg-[#dc5353] text-white text-xs font-medium px-9 py-2.5 rounded-sm shadow transition-colors"
            >
              Xem thêm
            </a>
          </div>
        </div>
      </section>

      {/* 5. DARK PARALLAX BANNER ("Chúng tôi ở đây để giúp đỡ") */}
      <section className="relative overflow-hidden bg-[#140708] text-white py-20 px-4 sm:px-8">
        <img
          src={data.helpBanner.backgroundImage}
          alt={data.helpBanner.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-[#3d1114]/70 to-black/85" />

        <div className="relative max-w-4xl mx-auto text-center space-y-3">
          <h2 className="font-serif text-2xl sm:text-4xl text-white">
            {data.helpBanner.title}
          </h2>
          <div className="text-[11px] sm:text-xs text-stone-200 space-y-1 font-serif">
            {data.helpBanner.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THÀNH PHẦN LUẬT SƯ (4 CORAL-RED DUOTONE PORTRAIT CARDS) */}
      <section id="team" className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#df6c6c]">
            {data.teamSection.title}
          </h2>
          <div className="max-w-2xl mx-auto border-t border-stone-200 mt-4 pt-4">
            <p className="font-serif italic text-xs text-stone-500 leading-relaxed">
              {data.teamSection.quote}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.teamSection.members.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer text-center"
              >
                {/* Coral-Red Duotone Portrait Box */}
                <div className="relative aspect-[4/4.3] overflow-hidden bg-[#ef6666] mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#e05252]/70 mix-blend-multiply group-hover:bg-[#d14343]/60 transition-colors" />
                </div>

                <h3 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-[#222222] group-hover:text-[#ef6666] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-0.5">
                  {member.role}
                </p>
                <div className="flex items-center justify-center gap-3 mt-1.5 text-[11px] text-stone-400 font-semibold">
                  <span className="hover:text-[#ef6666]">f</span>
                  <span className="hover:text-[#ef6666]">t</span>
                  <span className="hover:text-[#ef6666]">G+</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact-form"
              className="inline-block bg-[#ef6666] hover:bg-[#dc5353] text-white text-xs font-medium px-9 py-2.5 rounded-sm shadow transition-colors"
            >
              Xem thêm
            </a>
          </div>
        </div>
      </section>

      {/* 7. LIÊN HỆ — 3 REGIONAL OFFICES ON CORAL-RED BOKEH BANNER */}
      <section className="relative overflow-hidden bg-[#8c2d2d] text-white py-16 px-4 sm:px-8">
        <img
          src={data.branchesBanner.backgroundImage}
          alt="Hệ thống văn phòng"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-105 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7a2424]/90 via-[#b84b4b]/80 to-[#7a2424]/90" />

        <div className="relative max-w-4xl mx-auto text-center space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl text-white">
            {data.branchesBanner.title}
          </h2>
          <p className="font-serif italic text-xs text-stone-100">
            {data.branchesBanner.subtitle}
          </p>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {data.branchesBanner.branches.map((br) => (
              <div key={br.id} className="space-y-2.5 font-serif">
                <h3 className="text-base sm:text-lg font-bold tracking-wider uppercase text-white">
                  {br.city}
                </h3>
                <p className="text-[11px] text-stone-100 leading-relaxed">
                  Address : {data.business.address || br.address}
                </p>
                <p className="text-[11px] text-stone-100">
                  Phone : {primaryPhone || br.phone}
                </p>
                <p className="text-[11px] text-stone-100">
                  Email : {primaryEmail || br.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PHẢN HỒI KHÁCH HÀNG (WHITE QUOTE BLOCK WITH AVATAR RIGHT) */}
      <section id="testimonials" className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#df6c6c]">
            Phản hồi khách hàng
          </h2>
          <div className="w-12 h-0.5 bg-[#ef6666] mx-auto mt-3 mb-10" />

          {activeReview && (
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-left">
              <div className="flex-1 space-y-3">
                <p className="font-serif italic text-xs sm:text-sm text-stone-600 leading-relaxed">
                  <Quote className="w-4 h-4 inline-block text-stone-700 mr-1.5 -mt-1" />
                  {activeReview.content}
                </p>
                <p className="font-serif text-xs font-bold text-[#222222] text-right">
                  {activeReview.author} / {activeReview.role}
                </p>
              </div>
              <div className="w-20 h-20 shrink-0 overflow-hidden bg-stone-200 shadow">
                <img
                  src={
                    activeReview.avatar ||
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
                  }
                  alt={activeReview.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((rev, i) => (
                <button
                  key={rev.id}
                  type="button"
                  onClick={() => setActiveReviewIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === activeReviewIdx ? "bg-[#ef6666]" : "bg-stone-300"
                  }`}
                  aria-label={`Phản hồi ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 9. ĐẶT CÂU HỎI CHO CHÚNG TÔI ? (RED-TINTED BRIDGE SILHOUETTE BANNER) */}
      <section className="relative overflow-hidden bg-[#3a1215] text-white py-20 px-4 sm:px-8">
        <img
          src={data.questionBanner.backgroundImage}
          alt={data.questionBanner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#9e3338]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-4xl text-white">
            {data.questionBanner.title}
          </h2>
          <p className="font-serif text-xs sm:text-sm text-stone-100 leading-relaxed">
            {data.questionBanner.description}
          </p>
          <div className="pt-2">
            <a
              href="#contact-form"
              className="inline-block bg-white hover:bg-[#ef6666] text-[#232931] hover:text-white text-xs font-semibold px-9 py-2.5 rounded-sm shadow transition-colors"
            >
              {data.questionBanner.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* 10. DARK SLATE CONTACT FORM & FOOTER (#232931) */}
      <footer id="contact-form" className="bg-[#232931] text-white pt-16 pb-8 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white">Liên hệ</h2>
          <p className="font-serif text-xs sm:text-sm text-stone-300 mt-2">
            Điền vào mẫu để nhận được tư vấn bí mật miễn phí
          </p>

          {formSubmitted ? (
            <div className="mt-8 bg-emerald-950/80 border border-emerald-500/40 p-6 rounded text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <p className="font-serif text-base font-bold">
                Đã tiếp nhận yêu cầu tư vấn bảo mật!
              </p>
              <p className="text-xs text-stone-300">
                Luật sư thành viên của {data.business.name} sẽ phản hồi trực tiếp cho
                quý khách trong thời gian sớm nhất.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleContactSubmit}
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
            >
              {/* Left 3 Inputs */}
              <div className="space-y-3.5">
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Họ và tên"
                  className="w-full bg-[#353d47] text-white placeholder:text-stone-400 text-xs px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#ef6666]"
                />
                <input
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-[#353d47] text-white placeholder:text-stone-400 text-xs px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#ef6666]"
                />
                <input
                  type="text"
                  required
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="Tiêu đề"
                  className="w-full bg-[#353d47] text-white placeholder:text-stone-400 text-xs px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#ef6666]"
                />
              </div>

              {/* Right Textarea + Outlined Submit Button */}
              <div className="flex flex-col justify-between gap-3.5">
                <textarea
                  rows={4}
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Lời nhắn"
                  className="w-full flex-1 bg-[#353d47] text-white placeholder:text-stone-400 text-xs px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#ef6666]"
                />
                <button
                  type="submit"
                  className="w-full border border-[#ef6666] text-[#ef6666] hover:bg-[#ef6666] hover:text-white text-xs font-serif py-2.5 transition-colors"
                >
                  Gửi tin nhắn
                </button>
              </div>
            </form>
          )}

          {/* Social Links & Copyright */}
          <div className="mt-12 pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-center gap-4 text-xs text-stone-400 font-semibold">
              <a href="#top" className="hover:text-[#ef6666]">
                f
              </a>
              <a href="#top" className="hover:text-[#ef6666]">
                ig
              </a>
              <a href="#top" className="hover:text-[#ef6666]">
                t
              </a>
              <a href="#top" className="hover:text-[#ef6666]">
                p
              </a>
              <a href="#top" className="hover:text-[#ef6666]">
                G+
              </a>
              <a href="#top" className="hover:text-[#ef6666]">
                in
              </a>
            </div>
            <p className="text-[11px] text-stone-400">
              © Bản quyền thuộc về {data.business.name}. Thiết kế website chuẩn SEO.
            </p>
          </div>
        </div>
      </footer>

      {/* PRACTICE BOX MODAL */}
      {selectedPractice && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedPractice(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 rounded shadow-2xl space-y-4 border-t-4 border-[#ef6666]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {renderPracticeIcon(selectedPractice.icon)}
                <h3 className="font-serif text-xl font-bold text-[#232931]">
                  {selectedPractice.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPractice(null)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {selectedPractice.description}
            </p>
            <div className="space-y-2 pt-1">
              {selectedPractice.details.map((dt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#ef6666] shrink-0 mt-0.5" />
                  <span>{dt}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 flex justify-end gap-3">
              <a
                href="#contact-form"
                onClick={() => setSelectedPractice(null)}
                className="bg-[#ef6666] hover:bg-[#dc5353] text-white text-xs font-semibold px-5 py-2"
              >
                Nhận tư vấn miễn phí
              </a>
            </div>
          </div>
        </div>
      )}

      {/* LAWYER MEMBER MODAL */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 rounded shadow-2xl space-y-4 border-t-4 border-[#ef6666]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-16 h-16 object-cover rounded-full border-2 border-[#ef6666]"
                />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#232931]">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs text-[#ef6666] font-semibold">
                    {selectedMember.role}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">{selectedMember.bio}</p>
            <p className="text-xs text-stone-700">
              <strong>Lĩnh vực chuyên trách:</strong> {selectedMember.specialty}
            </p>
            <a
              href="#contact-form"
              onClick={() => setSelectedMember(null)}
              className="block w-full text-center bg-[#ef6666] hover:bg-[#dc5353] text-white text-xs font-semibold py-2.5"
            >
              Đặt lịch làm việc cùng luật sư
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
