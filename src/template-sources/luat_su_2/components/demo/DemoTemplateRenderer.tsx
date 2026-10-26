"use client";

import React, { useState } from "react";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Heart,
  ThumbsUp,
  Plus,
  Minus,
  Users,
  FileCheck,
  Briefcase,
  Gavel,
  Trophy,
  Award,
  CheckCircle2,
  Send,
  X,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu2DefaultData,
  type LuatSu2Data,
  type LuatSu2PracticeArea
} from "@/template-sources/luat_su_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LuatSu2Data = adaptClonedTemplateData(luatSu2DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");
  const [selectedPractice, setSelectedPractice] = useState<LuatSu2PracticeArea | null>(
    null
  );

  // Free consultation form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "luatsu@monalaw.vn";
  const stats = data.stats || luatSu2DefaultData.stats || [];
  const team = data.team || luatSu2DefaultData.team || [];
  const testimonials = data.testimonials || luatSu2DefaultData.testimonials || [];
  const clients = data.clients || luatSu2DefaultData.clients || [];

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormAddress("");
    setFormMessage("");
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#2b2b2b] font-sans selection:bg-[#a68b5b] selection:text-white"
    >
      {/* 1. WHITE TOPBAR + ANTIQUE GOLD NAVBAR (#a68b5b) */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* White Topbar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Scales of Justice Logo + Brand Name */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full border border-[#a68b5b]/40 bg-[#f5f2eb] text-[#a68b5b] flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2b2b2b] block leading-none">
                {data.business.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#a68b5b] font-semibold">
                LAW FIRM & LEGAL ADVISORY
              </span>
            </div>
          </a>

          {/* Right Contact Info + Dark CTA Button */}
          <div className="hidden md:flex items-center gap-6 text-xs text-stone-600">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-[#a68b5b]"
            >
              <span className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center text-stone-600">
                <Phone className="w-3 h-3" />
              </span>
              <span className="font-medium">{primaryPhone}</span>
            </a>

            <a
              href={`mailto:${primaryEmail}`}
              className="flex items-center gap-2 hover:text-[#a68b5b]"
            >
              <span className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center text-stone-600">
                <Mail className="w-3 h-3" />
              </span>
              <span>{primaryEmail}</span>
            </a>

            <a
              href="#consultation"
              className="bg-[#2b2b2b] hover:bg-[#a68b5b] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-xs transition-colors"
            >
              ĐĂNG KÝ TƯ VẤN
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2b2b2b]"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Antique Gold Navbar (#a68b5b) */}
        <div className="bg-[#a68b5b] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.14em]">
              <a href="#top" className="text-white underline underline-offset-4">
                TRANG CHỦ
              </a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors">
                GIỚI THIỆU
              </a>
              <a
                href="#practice-areas"
                className="text-white/90 hover:text-white transition-colors"
              >
                DỊCH VỤ
              </a>
              <a href="#lawyers" className="text-white/90 hover:text-white transition-colors">
                LUẬT SƯ
              </a>
              <a href="#awards" className="text-white/90 hover:text-white transition-colors">
                GIẢI THƯỞNG
              </a>
              <a
                href="#consultation"
                className="text-white/90 hover:text-white transition-colors"
              >
                LIÊN HỆ
              </a>
            </nav>

            <div className="flex items-center gap-4 text-[11px] font-bold ml-auto">
              {["f", "t", "p", "g+", "in"].map((soc) => (
                <a
                  key={soc}
                  href="#consultation"
                  className="text-white/85 hover:text-white uppercase"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2b2b2b] text-white px-6 py-4 space-y-2.5 text-xs uppercase tracking-wider">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#a68b5b]"
            >
              Giới thiệu
            </a>
            <a
              href="#practice-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#a68b5b]"
            >
              Lĩnh vực tư vấn
            </a>
            <a
              href="#lawyers"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#a68b5b]"
            >
              Đội ngũ luật sư
            </a>
            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#a68b5b]"
            >
              Đăng ký tư vấn miễn phí
            </a>
          </div>
        )}
      </header>

      {/* 2. LADY JUSTICE & SCALES HERO (Matches diagonal crimson-brown overlay on left) */}
      <section className="relative h-[480px] sm:h-[540px] lg:h-[600px] flex items-center overflow-hidden bg-[#1a1310] text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        {/* Diagonal dark warm-crimson overlay on left side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(108deg, rgba(84,22,18,0.88) 0%, rgba(72,24,18,0.82) 52%, rgba(20,16,14,0.55) 52.5%, rgba(15,12,10,0.45) 100%)"
          }}
        />

        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8 pb-12">
          <div className="max-w-lg">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-2">
              {data.hero.subtitle || "CÔNG TY TƯ VẤN PHÁP LUẬT"}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-4">
              {data.hero.title || data.business.name}
            </h1>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-7 max-w-md">
              {data.hero.description}
            </p>
            <a
              href={data.hero.ctaLink || "#practice-areas"}
              className="inline-block bg-[#a68b5b] hover:bg-[#8e7447] text-white text-xs font-bold px-7 py-3 rounded-xs shadow transition-colors"
            >
              {data.hero.ctaText || "Tìm hiểu ngay"}
            </a>
          </div>
        </div>
      </section>

      {/* 3. OVERLAPPING 3-COLUMN WHITE BOX + WARM PARCHMENT QUOTE BANNER (#f5f2eb) */}
      <section className="bg-[#f5f2eb] pb-16 lg:pb-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Overlapping 3-Column White Box */}
          <div className="relative z-20 -mt-16 sm:-mt-20 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200/80">
            {data.pillars.map((pillar) => (
              <div key={pillar.id} className="p-8 sm:p-10 text-center">
                <div className="text-[#b34b3c] flex justify-center mb-3">
                  {pillar.icon === "heart" && <Heart className="w-6 h-6 fill-current" />}
                  {pillar.icon === "scale" && <Scale className="w-6 h-6" />}
                  {pillar.icon === "thumbsUp" && <ThumbsUp className="w-6 h-6 fill-current" />}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#a68b5b] font-semibold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed max-w-xs mx-auto">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Serif Quote Banner */}
          <div className="pt-14 sm:pt-16 max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] text-[#a68b5b] leading-snug mb-4">
              {data.quoteBanner.quote}
            </h2>
            <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed mb-4">
              {data.business.aboutText[0] || data.quoteBanner.description}
            </p>
            <p className="text-xs font-bold text-stone-600">{data.business.name}</p>
          </div>
        </div>
      </section>

      {/* 4. "LĨNH VỰC TƯ VẤN" (3x2 Practice Area Photo Grid) */}
      <section id="practice-areas" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#a68b5b] mb-2">
              Lĩnh vực tư vấn
            </h2>
            <div className="w-10 h-[2px] bg-[#b34b3c]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.practiceAreas.map((area) => (
              <div
                key={area.id}
                onClick={() => setSelectedPractice(area)}
                className="group relative h-52 sm:h-60 overflow-hidden cursor-pointer shadow-sm bg-stone-900"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="font-serif text-lg sm:text-xl font-medium group-hover:text-[#e2c792] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-[11px] text-white/75 line-clamp-1 mt-0.5">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPLIT "CÂU HỎI THƯỜNG GẶP" & "GIỚI THIỆU" (#f5f2eb background) */}
      <section id="about" className="py-16 lg:py-24 bg-[#f5f2eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Half: Câu hỏi thường gặp (Interactive FAQ Accordion) */}
            <div className="lg:col-span-6">
              <div className="mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#a68b5b] mb-2">
                  Câu hỏi thường gặp
                </h2>
                <div className="w-10 h-[2px] bg-[#b34b3c]" />
              </div>

              <div className="space-y-3">
                {data.faqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-white border border-stone-200/80 rounded-xs overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                        className="w-full px-5 py-4 flex items-center gap-3 text-left"
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white ${
                            isOpen ? "bg-[#a68b5b]" : "bg-[#6b6b6b]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3 h-3" />
                          ) : (
                            <Plus className="w-3 h-3" />
                          )}
                        </span>
                        <span
                          className={`text-xs sm:text-sm font-bold ${
                            isOpen ? "text-[#b34b3c]" : "text-[#2b2b2b]"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs text-stone-500 leading-relaxed border-t border-stone-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Half: Giới thiệu */}
            <div className="lg:col-span-6">
              <div className="mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#a68b5b] mb-2">
                  Giới thiệu
                </h2>
                <div className="w-10 h-[2px] bg-[#b34b3c]" />
              </div>

              {/* Handshake Banner Photo */}
              <div className="h-32 sm:h-36 overflow-hidden mb-6 shadow-xs">
                <img
                  src={data.aboutSplit.bannerImage}
                  alt="Hợp tác pháp lý"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 2 Columns: Chúng tôi là ai? & Trách nhiệm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#2b2b2b] mb-2">
                    {data.aboutSplit.whoWeAreTitle}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {data.aboutSplit.whoWeAreText}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#2b2b2b] mb-2">
                    {data.aboutSplit.responsibilityTitle}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {data.aboutSplit.responsibilityText}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href="#consultation"
                  className="inline-block bg-[#a68b5b] hover:bg-[#8e7447] text-white text-xs font-bold px-6 py-2.5 rounded-xs transition-colors"
                >
                  Chi tiết
                </a>

                {/* Stylized Managing Partner Signature */}
                <div className="text-right">
                  <span className="font-serif italic text-2xl sm:text-3xl text-[#2b2b2b] tracking-wider select-none">
                    {data.aboutSplit.signatureName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DARK PARALLAX "THÀNH CÔNG CỦA CHÚNG TÔI" (5 Icon Counters) */}
      <section className="relative py-16 lg:py-20 bg-[#1c2331] text-white overflow-hidden">
        <img
          src={data.aboutSplit.bannerImage}
          alt="Thành công"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-2">
            Thành công của chúng tôi
          </h2>
          <div className="w-10 h-[2px] bg-white/60 mx-auto mb-12" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((st, idx) => (
              <div key={st.id} className="flex flex-col items-center">
                <div className="text-white/85 mb-3">
                  {idx === 0 && <Users className="w-8 h-8 stroke-[1.5]" />}
                  {idx === 1 && <FileCheck className="w-8 h-8 stroke-[1.5]" />}
                  {idx === 2 && <Briefcase className="w-8 h-8 stroke-[1.5]" />}
                  {idx === 3 && <Gavel className="w-8 h-8 stroke-[1.5]" />}
                  {idx === 4 && <Trophy className="w-8 h-8 stroke-[1.5]" />}
                </div>
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                  {st.number}
                </span>
                <span className="w-8 h-[1px] bg-white/40 mb-2" />
                <span className="text-xs text-white/85 font-medium">{st.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "LUẬT SƯ CỦA CHÚNG TÔI" (4 Circular Portraits) + TERRACOTTA RED INTERNSHIP BANNER (#b34b3c) */}
      <section id="lawyers" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#a68b5b] mb-2">
            Luật sư của chúng tôi
          </h2>
          <div className="w-10 h-[2px] bg-[#b34b3c] mx-auto mb-12" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col items-center group">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 border-4 border-stone-100 shadow-md group-hover:border-[#a68b5b] transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-[#a68b5b]">
                  {member.name}
                </h3>
                <p className="text-xs italic text-stone-500 mt-0.5">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terracotta Red Career / Internship Banner (#b34b3c) */}
      <section className="bg-[#b34b3c] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            {/* Left Portrait */}
            <div className="md:col-span-4 pt-6 flex justify-center">
              <img
                src={data.internshipBanner.image}
                alt="Tuyển thực tập sinh ngành luật"
                className="w-52 h-60 object-cover object-top rounded-t-xl shadow-lg"
              />
            </div>

            {/* Right Text & Outline Button */}
            <div className="md:col-span-8 py-10 md:py-12">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-snug mb-3">
                {data.internshipBanner.title}
              </h2>
              <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed mb-6 max-w-xl">
                {data.internshipBanner.subtitle}
              </p>
              <a
                href="#consultation"
                className="inline-block border border-white/80 hover:bg-white hover:text-[#b34b3c] text-white text-xs font-bold px-6 py-2.5 rounded-xs transition-colors"
              >
                {data.internshipBanner.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "KHÁCH HÀNG NHẬN XÉT" (3 Speech-Bubble Review Cards) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#a68b5b] mb-2">
              Khách hàng nhận xét
            </h2>
            <div className="w-10 h-[2px] bg-[#b34b3c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((rev) => (
              <div key={rev.id} className="flex flex-col">
                {/* Speech Bubble Box */}
                <div className="relative bg-[#f8f8f8] border border-stone-200/60 p-6 sm:p-7 text-xs text-stone-500 leading-relaxed mb-6">
                  {rev.content}
                  {/* Bottom Triangle Pointer */}
                  <div className="w-4 h-4 bg-[#f8f8f8] border-r border-b border-stone-200/60 rotate-45 absolute -bottom-2 left-10" />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pl-4">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-12 h-12 rounded-full object-cover border border-stone-200"
                  />
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#a68b5b]">
                      {rev.author}
                    </h4>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stone-600">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCALES OF JUSTICE PARALLAX CONSULTATION SECTION ("Tư vấn miễn phí") */}
      <section
        id="consultation"
        className="relative py-16 lg:py-24 bg-[#2b1e16] overflow-hidden"
      >
        <img
          src={data.consultationBg}
          alt="Tư vấn pháp lý miễn phí"
          className="absolute inset-0 w-full h-full object-cover object-left opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/35 to-black/65" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-6" />

            {/* White Consultation Card on Right */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-10 lg:p-12 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#a68b5b] mb-2">
                  Tư vấn miễn phí
                </h2>
                <div className="w-10 h-[2px] bg-[#b34b3c] mx-auto mb-3" />
                <p className="text-xs text-stone-500 leading-relaxed">
                  Gọi cho chúng tôi 24/7 theo số <strong>{primaryPhone}</strong> hoặc điền vào mẫu
                  dưới đây để nhận được tư vấn ban đầu miễn phí và bảo mật.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-[#f5f2eb] border border-[#a68b5b]/40 p-6 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#a68b5b] mx-auto" />
                  <h3 className="font-serif text-lg font-bold text-[#2b2b2b]">
                    Đã tiếp nhận hồ sơ yêu cầu tư vấn!
                  </h3>
                  <p className="text-xs text-stone-600">
                    Luật sư chuyên trách của {data.business.name} sẽ liên hệ lại ngay qua số điện
                    thoại bạn đã cung cấp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConsultSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Họ và tên"
                      className="w-full border border-stone-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a68b5b]"
                    />
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full border border-stone-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a68b5b]"
                    />
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="Số điện thoại"
                      className="w-full border border-stone-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a68b5b]"
                    />
                    <input
                      type="text"
                      value={formAddress}
                      onChange={(e) => setFormAddress(e.target.value)}
                      placeholder="Địa chỉ"
                      className="w-full border border-stone-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a68b5b]"
                    />
                  </div>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Lời nhắn / Tóm tắt nội dung vụ việc cần luật sư tư vấn..."
                    className="w-full border border-stone-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a68b5b]"
                  />
                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="bg-[#a68b5b] hover:bg-[#8e7447] text-white text-xs font-bold uppercase tracking-widest px-14 py-3 transition-colors"
                    >
                      GỬI
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. SPLIT "KHÁCH HÀNG" (2x3 Partner Logos) & "GIẢI THƯỞNG" (3 Gold Seal Award Cards) */}
      <section id="awards" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Half: Khách hàng (2x3 Partner Logos) */}
            <div className="lg:col-span-6">
              <div className="mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#a68b5b] mb-2">
                  Khách hàng
                </h2>
                <div className="w-10 h-[2px] bg-[#b34b3c]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {clients.map((cl) => (
                  <div
                    key={cl.id}
                    className="border border-stone-200/80 h-24 flex items-center justify-center p-4 bg-white hover:border-[#a68b5b] transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-stone-700 uppercase">
                      {cl.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Half: Giải thưởng (3 Gold Seal Award Cards) */}
            <div className="lg:col-span-6">
              <div className="mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#a68b5b] mb-2">
                  Giải thưởng
                </h2>
                <div className="w-10 h-[2px] bg-[#b34b3c]" />
              </div>

              <div className="space-y-4">
                {data.awards.map((aw, idx) => (
                  <div
                    key={aw.id}
                    className="border border-stone-200/80 p-4 sm:p-5 flex items-center gap-5 bg-white hover:border-[#a68b5b] transition-colors"
                  >
                    {/* Gold / Crimson Wax Seal Badge */}
                    <div
                      className={`w-16 h-16 rounded-full flex flex-col items-center justify-center shrink-0 text-white shadow-md border-4 ${
                        idx === 1
                          ? "bg-[#b34b3c] border-[#e2c792]"
                          : "bg-[#2b2b2b] border-[#a68b5b]"
                      }`}
                    >
                      <Award className="w-6 h-6 text-[#e2c792]" />
                      <span className="text-[8px] font-bold uppercase tracking-tighter text-[#e2c792]">
                        BEST
                      </span>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-stone-500 mb-0.5">{aw.date}</p>
                      <h3 className="text-xs sm:text-sm font-extrabold uppercase text-[#2b2b2b]">
                        {aw.title}
                      </h3>
                      <p className="text-[11px] text-stone-400 mt-0.5">{aw.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK CONTACT STRIP & WARM FOOTER */}
      <div className="bg-[#333333] text-white py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-[#2b2b2b] flex items-center justify-center shrink-0 rounded-xs">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-white">Địa chỉ:</span>
              <span className="text-white/80">{data.business.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-[#2b2b2b] flex items-center justify-center shrink-0 rounded-xs">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-white">Số điện thoại:</span>
              <span className="text-white/80">{primaryPhone}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-[#2b2b2b] flex items-center justify-center shrink-0 rounded-xs">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-white">Email:</span>
              <span className="text-white/80">{primaryEmail}</span>
            </div>
          </div>
        </div>
      </div>

      {/* WARM FOOTER (#f5f2eb) */}
      <footer className="bg-[#f5f2eb] text-stone-600 pt-14 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
            {/* GIỚI THIỆU */}
            <div>
              <h4 className="font-serif text-sm font-bold uppercase text-[#a68b5b] mb-3">
                GIỚI THIỆU
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed mb-4">
                Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của
                bạn. Bảo vệ quyền và lợi ích hợp pháp trên phạm vi toàn quốc.
              </p>
              <div className="flex items-center gap-3 text-xs font-bold text-stone-500">
                <span>f</span>
                <span>t</span>
                <span>p</span>
                <span>g+</span>
                <span>in</span>
              </div>
            </div>

            {/* LIÊN HỆ */}
            <div>
              <h4 className="font-serif text-sm font-bold uppercase text-[#a68b5b] mb-3">
                LIÊN HỆ
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-500">
                <a href="#top" className="hover:text-[#a68b5b]">
                  Trang chủ
                </a>
                <a href="#about" className="hover:text-[#a68b5b]">
                  Giới thiệu
                </a>
                <a href="#practice-areas" className="hover:text-[#a68b5b]">
                  Dịch vụ
                </a>
                <a href="#lawyers" className="hover:text-[#a68b5b]">
                  Luật sư
                </a>
                <a href="#consultation" className="hover:text-[#a68b5b]">
                  Liên hệ
                </a>
              </div>
            </div>

            {/* GIỜ LÀM VIỆC */}
            <div>
              <h4 className="font-serif text-sm font-bold uppercase text-[#a68b5b] mb-3">
                GIỜ LÀM VIỆC
              </h4>
              <div className="space-y-1.5 text-xs text-stone-500">
                <p>Thứ 2 đến Thứ 6:</p>
                <p>Từ 8h00 (sáng) - 18h00 (chiều)</p>
                <p className="pt-1">Thứ 7 & Chủ Nhật: Nghỉ</p>
              </div>
            </div>

            {/* ĐĂNG KÝ */}
            <div>
              <h4 className="font-serif text-sm font-bold uppercase text-[#a68b5b] mb-3">
                ĐĂNG KÝ
              </h4>
              <p className="text-xs text-stone-500 mb-3 leading-relaxed">
                Đăng ký để nhận được thông tin pháp lý và bản tin mới nhất từ chúng tôi.
              </p>
              <div className="flex bg-white border border-stone-200 px-3 py-2">
                <input
                  type="email"
                  placeholder="Email..."
                  className="bg-transparent text-xs text-stone-700 focus:outline-none flex-1"
                />
                <Send className="w-3.5 h-3.5 text-[#a68b5b]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] text-white/60 text-center py-3.5 text-[11px]">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>
        </div>
      </footer>

      {/* Practice Area Detail Modal */}
      {selectedPractice && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedPractice(null)}
        >
          <div
            className="bg-white max-w-lg w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPractice(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#a68b5b]"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={selectedPractice.image}
              alt={selectedPractice.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b34b3c]">
                LĨNH VỰC TƯ VẤN CHUYÊN SÂU
              </span>
              <h3 className="font-serif text-2xl text-[#2b2b2b]">{selectedPractice.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {selectedPractice.description}
              </p>
              <div className="pt-2">
                <a
                  href="#consultation"
                  onClick={() => setSelectedPractice(null)}
                  className="inline-block bg-[#a68b5b] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5"
                >
                  Đặt lịch tư vấn lĩnh vực này
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
