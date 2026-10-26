"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  Coins,
  ShieldCheck,
  Play,
  Layout,
  Smartphone,
  Megaphone,
  Check,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  User,
  Bookmark,
  Quote,
  Box,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile8DefaultData,
  type CorporateProfile8TemplateData
} from "@/template-sources/corporate_profile_8/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: CorporateProfile8TemplateData = adaptClonedTemplateData(
    corporateProfile8DefaultData,
    incomingData
  );

  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    topic: ""
  });

  const primaryPhone = data.business.phone?.[0] || "0909 313 728";
  const primaryEmail = data.business.email?.[0] || "info@techsolutions.vn";

  const testimonials = data.testimonials || [];
  const activeReview =
    testimonials[activeTestimonialIdx] || testimonials[0];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ fullName: "", email: "", topic: "" });
      setSelectedPlanName(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#ff5a26] selection:text-white">
      {/* 1. TOPBAR + FLOATING PILL WHITE NAVBAR + 2. CENTERED HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#111827]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/65 to-slate-950/80" />

        {/* Topbar + Floating Pill Navbar */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 w-full">
          {/* Mini Topbar */}
          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-200 pb-3 px-2">
            <div className="flex flex-wrap items-center gap-5">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff5a26]" />
                <span>{data.business.address}</span>
              </span>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 hover:text-[#ff5a26]"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff5a26]" />
                <span>{primaryPhone}</span>
              </a>
              <a
                href={`mailto:${primaryEmail}`}
                className="hidden md:inline-flex items-center gap-1.5 hover:text-[#ff5a26]"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff5a26]" />
                <span>{primaryEmail}</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              {["IG", "IN", "FB"].map((s) => (
                <a
                  key={s}
                  href="#lien-he"
                  className="hover:text-[#ff5a26] font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Floating Rounded-Full White Navbar */}
          <header className="bg-white rounded-full shadow-2xl px-6 py-3.5 flex items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={data.business.name}
                  className="h-9 w-auto object-contain"
                />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff5a26] to-amber-500 text-white flex items-center justify-center shadow">
                  <Box className="w-5 h-5" />
                </div>
              )}
              <div className="leading-none">
                <span className="block text-base sm:text-lg font-black tracking-tight text-[#111827] uppercase">
                  {data.business.name}
                </span>
                <span className="block text-[9px] font-bold tracking-[0.22em] text-[#ff5a26] uppercase">
                  TECHNOLOGY
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-700">
              <a
                href="#"
                className="text-[#ff5a26] border-b-2 border-[#ff5a26] pb-0.5"
              >
                Trang chủ
              </a>
              <a href="#gioi-thieu" className="hover:text-[#ff5a26] transition">
                Giới thiệu
              </a>
              <a href="#dich-vu" className="hover:text-[#ff5a26] transition">
                Dịch vụ
              </a>
              <a href="#du-an" className="hover:text-[#ff5a26] transition">
                Dự án
              </a>
              <a href="#tin-tuc" className="hover:text-[#ff5a26] transition">
                Tin tức
              </a>
              <a href="#lien-he" className="hover:text-[#ff5a26] transition">
                Liên hệ
              </a>
            </nav>

            <a
              href="#lien-he"
              className="hidden sm:inline-block border border-[#ff5a26] text-[#111827] hover:bg-[#ff5a26] hover:text-white text-xs font-bold px-5 py-2.5 rounded-full transition"
            >
              Khám phá ngay
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </header>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl p-4 space-y-2 text-xs font-bold text-slate-700">
              <a
                href="#gioi-thieu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                Giới thiệu
              </a>
              <a
                href="#dich-vu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                Dịch vụ
              </a>
              <a
                href="#bang-gia"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                Bảng giá
              </a>
              <a
                href="#du-an"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                Dự án
              </a>
              <a
                href="#lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-[#ff5a26]"
              >
                Liên hệ
              </a>
            </div>
          )}
        </div>

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center my-auto">
          <span className="text-xs sm:text-sm font-semibold text-white/90 block mb-3">
            {data.hero.eyebrow || "Giới thiệu dịch vụ"}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-5">
            {data.hero.title}
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed mb-9">
            {data.hero.subtitle}
          </p>
          <a
            href={data.hero.ctaLink || "#bang-gia"}
            className="inline-block bg-[#111827] hover:bg-[#ff5a26] text-white border border-white/20 text-xs font-extrabold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-xl transition"
          >
            {data.hero.ctaText || "KHÁM PHÁ THÊM"}
          </a>
        </div>
      </section>

      {/* 3. 3 COLORFUL ICON FEATURE CARDS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.pillars || []).map((pil) => {
              const badgeBg =
                pil.color === "cyan"
                  ? "bg-[#00aeff] shadow-[#00aeff]/30"
                  : pil.color === "orange"
                  ? "bg-[#ff6b3d] shadow-[#ff6b3d]/30"
                  : "bg-[#84cc16] shadow-[#84cc16]/30";
              return (
                <div
                  key={pil.id}
                  className="text-center px-4 py-6 rounded-2xl hover:bg-slate-50/70 transition"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${badgeBg} text-white flex items-center justify-center mx-auto mb-5 shadow-lg`}
                  >
                    {pil.color === "cyan" && <Lightbulb className="w-8 h-8" />}
                    {pil.color === "orange" && <Coins className="w-8 h-8" />}
                    {pil.color === "green" && (
                      <ShieldCheck className="w-8 h-8" />
                    )}
                  </div>
                  <h3 className="text-base font-extrabold text-[#111827] mb-2.5">
                    {pil.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {pil.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SPLIT SECTION ("Mở rộng sự hiện diện số") + PARTNER STRIP */}
      <section id="gioi-thieu" className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Organic Masked Portrait with Play Button */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="absolute -inset-3 rounded-[42%_58%_60%_40%/45%_45%_55%_55%] bg-gradient-to-tr from-[#ff5a26]/20 via-[#00aeff]/15 to-purple-200/40 animate-pulse" />
                <div className="relative w-full h-full rounded-[42%_58%_60%_40%/45%_45%_55%_55%] overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                    alt="Mở rộng sự hiện diện số"
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href="#bang-gia"
                  aria-label="Phát video"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#ff5a26] text-white flex items-center justify-center shadow-xl ring-8 ring-white/40 hover:scale-105 transition"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </a>
              </div>
            </div>

            {/* Right Progress Bars */}
            <div className="lg:col-span-6">
              <span className="text-xs font-extrabold text-[#ff5a26] block mb-2">
                Về chúng tôi
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] leading-tight mb-4">
                {data.business.aboutTitle ||
                  "Mở rộng sự hiện diện số của doanh nghiệp"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-7">
                {data.business.aboutText?.[0]}
              </p>

              <div className="space-y-4 mb-8">
                {(data.skillBars || []).map((sk) => (
                  <div key={sk.id}>
                    <div className="flex justify-between text-xs font-bold text-[#111827] mb-1.5">
                      <span>{sk.label}</span>
                      <span>{sk.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${sk.colorClass} rounded-full`}
                        style={{ width: `${sk.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#lien-he"
                className="inline-block bg-[#111827] hover:bg-[#ff5a26] text-white text-xs font-bold px-8 py-3.5 rounded-full shadow-md transition"
              >
                Bắt đầu ngay
              </a>
            </div>
          </div>

          {/* Partner Strip */}
          <div className="pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-around gap-8 opacity-60">
            {(data.clients || []).map((cl) => (
              <span
                key={cl.id}
                className="text-base sm:text-lg font-black tracking-widest text-slate-500 uppercase"
              >
                {cl.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 3 DIGITAL SERVICE CARDS ("Cung cấp dịch vụ") */}
      <section id="dich-vu" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#ff5a26] block mb-1">
              Dịch Vụ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Cung cấp dịch vụ công nghệ & tiếp thị
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.services || []).slice(0, 3).map((srv, idx) => (
              <div
                key={srv.id}
                className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#ff5a26] flex items-center justify-center mx-auto mb-5">
                  {idx === 0 && <Layout className="w-8 h-8" />}
                  {idx === 1 && <Smartphone className="w-8 h-8" />}
                  {idx >= 2 && <Megaphone className="w-8 h-8" />}
                </div>
                <h3 className="text-base font-extrabold text-[#111827] mb-3">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 4 COLORFUL PASTEL COUNTER CARDS ("Thành tích") */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold text-[#ff5a26] block mb-2">
            Thành Tích
          </span>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mb-10">
            Chúng tôi luôn nỗ lực mang đến những giải pháp sáng tạo, giúp các doanh nghiệp và cá nhân khai thác tối đa tiềm năng marketing số.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.stats || []).map((st, i) => {
              const cardStyles = [
                "bg-sky-50 text-[#00aeff]",
                "bg-orange-50 text-[#ff5a26]",
                "bg-lime-50 text-[#65a30d]",
                "bg-purple-50 text-[#9333ea]"
              ][i % 4];
              return (
                <div
                  key={st.id}
                  className={`${cardStyles.split(" ")[0]} rounded-2xl py-6 px-4 text-center`}
                >
                  <span
                    className={`block text-3xl sm:text-4xl font-black ${
                      cardStyles.split(" ")[1]
                    }`}
                  >
                    {st.number}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 mt-1 block">
                    {st.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH MODERN TECH OFFICE BANNER */}
      <section className="py-6">
        <div className="h-72 sm:h-96 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
            alt="Văn phòng công nghệ"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 8. 3 VIBRANT GRADIENT PRICING CARDS ("Gói dịch vụ giá trị") */}
      <section id="bang-gia" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#ff5a26] block mb-1">
              Gói dịch vụ giá trị
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Bảng giá dịch vụ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.pricingPlans || []).map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl bg-gradient-to-b ${plan.gradientClass} text-white p-7 shadow-xl flex flex-col justify-between`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#111827] flex items-center justify-center mx-auto mb-4 shadow">
                    <Box className="w-6 h-6 text-[#ff5a26]" />
                  </div>
                  <h3 className="text-base font-extrabold uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  <p className="text-[11px] text-white/85 mt-1 mb-4">
                    {plan.subtitle}
                  </p>
                  <div className="pb-5 mb-5 border-b border-white/25">
                    <span className="text-3xl font-black">{plan.price}</span>
                    <span className="text-xs text-white/90 ml-1">
                      {plan.unit}
                    </span>
                  </div>

                  <ul className="space-y-3 text-left text-xs mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-white shrink-0 stroke-[3]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPlanName(plan.name)}
                  className="w-full bg-white text-[#111827] hover:bg-slate-900 hover:text-white text-xs font-extrabold uppercase tracking-wider py-3.5 rounded-full shadow transition cursor-pointer"
                >
                  MUA NGAY
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 4-STEP COLORFUL PROCESS WAVE ("Quy Trình") */}
      <section className="py-20 bg-gradient-to-b from-sky-50/60 via-indigo-50/40 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold text-[#ff5a26] block mb-1">
            Quy Trình
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-14">
            Quy trình triển khai dự án
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.processSteps || []).map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-2xl ${step.badgeColor} text-white text-base font-black flex items-center justify-center shadow-lg mb-5`}
                >
                  {step.number}
                </div>
                <h3 className="text-sm font-extrabold text-[#111827] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. MASONRY 2-COLUMN FEATURED PROJECTS ("Dự án nổi bật") */}
      <section id="du-an" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#ff5a26] block mb-1">
              Dự án nổi bật
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2">
              Các dự án mới
            </h2>
            <p className="text-xs text-slate-500">
              Chúng tôi là đơn vị chuyên cung cấp các dịch vụ tiếp thị sáng tạo và hiệu quả, giúp doanh nghiệp của bạn phát triển và thành công trên thị trường cạnh tranh ngày nay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.projects || []).slice(0, 6).map((proj, idx) => (
              <div
                key={proj.id}
                className={`group relative rounded-2xl overflow-hidden shadow-md ${
                  idx % 3 === 1 ? "h-80" : "h-64"
                }`}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff5a26]">
                    {proj.category}
                  </span>
                  <h3 className="text-base font-extrabold mt-0.5">
                    {proj.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. MAP TESTIMONIALS CAROUSEL ("Đánh giá từ khách hàng") */}
      <section className="py-20 bg-slate-50/70 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-extrabold text-[#ff5a26] block mb-1">
            Đánh giá
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-10">
            Đánh giá từ khách hàng
          </h2>

          {activeReview && (
            <div className="max-w-xl mx-auto">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <img
                  src={
                    activeReview.avatar ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  }
                  alt={activeReview.author}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#ff5a26] text-white flex items-center justify-center shadow">
                  <Quote className="w-3.5 h-3.5" />
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-5">
                {activeReview.content}
              </p>

              <h4 className="text-sm font-extrabold text-[#111827]">
                {activeReview.author}
              </h4>
              <span className="text-xs text-slate-400 block mb-6">
                {activeReview.role}
              </span>

              <div className="flex justify-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonialIdx((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-[#ff5a26] flex items-center justify-center text-slate-600 cursor-pointer"
                  aria-label="Trước"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonialIdx(
                      (prev) => (prev + 1) % testimonials.length
                    )
                  }
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-[#ff5a26] flex items-center justify-center text-slate-600 cursor-pointer"
                  aria-label="Tiếp"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 12. CONTACT SPLIT WITH CONSULTANT PORTRAIT ("Liên hệ cho chúng tôi") */}
      <section id="lien-he" className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
                <span className="text-xs font-extrabold text-[#ff5a26] block mb-1">
                  Cần hỗ trợ
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-1">
                  Liên hệ cho chúng tôi
                </h2>
                <p className="text-xs text-slate-400 mb-6">
                  Liên hệ ngay để được tư vấn chiến lược miễn phí
                </p>

                {formSubmitted ? (
                  <div className="py-8 text-center">
                    <CheckCircle2 className="w-11 h-11 text-emerald-500 mx-auto mb-2" />
                    <p className="text-sm font-extrabold text-[#111827]">
                      Cảm ơn bạn! Chúng tôi đã nhận được yêu cầu.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3.5">
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Họ tên"
                        value={contactForm.fullName}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            fullName: e.target.value
                          })
                        }
                        className="w-full bg-slate-100/80 text-xs pl-10 pr-4 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff5a26]"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            email: e.target.value
                          })
                        }
                        className="w-full bg-slate-100/80 text-xs pl-10 pr-4 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff5a26]"
                      />
                    </div>

                    <div className="relative">
                      <Bookmark className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Chủ đề (SEO, Thiết kế Web/App, Quảng cáo...)"
                        value={contactForm.topic}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            topic: e.target.value
                          })
                        }
                        className="w-full bg-slate-100/80 text-xs pl-10 pr-4 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff5a26]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#111827] hover:bg-[#ff5a26] text-white text-xs font-extrabold py-3.5 rounded-full transition cursor-pointer mt-2"
                    >
                      Liên Hệ Ngay
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Consultant Portrait in Orange Circle + Floating Phone Pill */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#ff5a26] to-orange-400 overflow-hidden shadow-2xl border-8 border-orange-100">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="Chuyên gia tư vấn"
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="absolute bottom-6 -right-2 sm:-right-6 bg-white rounded-full px-5 py-3 shadow-2xl border border-slate-100 flex items-center gap-3 hover:scale-105 transition"
                >
                  <span className="w-10 h-10 rounded-full bg-[#ff5a26] text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] font-bold text-slate-400">
                      Hỗ trợ 24/7
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#111827]">
                      {primaryPhone}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. 3 BLOG CARDS ("Bài viết mới nhất") + COLORFUL WAVE + WHITE 4-COL FOOTER */}
      <section id="tin-tuc" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#ff5a26] block mb-1">
              Tin Tức
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Bài viết mới nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] text-slate-400 mb-2">
                      <span className="text-[#ff5a26] font-bold">
                        {post.category}
                      </span>{" "}
                      | {post.date}
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#111827] group-hover:text-[#ff5a26] transition line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="px-5 pb-5 flex justify-end">
                  <a
                    href="#lien-he"
                    aria-label="Đọc bài viết"
                    className="w-8 h-8 rounded-full bg-[#ff5a26] text-white flex items-center justify-center shadow hover:scale-110 transition"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Colorful Multi-Wave Divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 110"
          className="w-full h-14 sm:h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,110 720,0 1440,60 L1440,110 L0,110 Z"
            fill="#00aeff"
            opacity="0.85"
          />
          <path
            d="M0,65 C480,10 960,105 1440,35 L1440,110 L0,110 Z"
            fill="#ff2a7a"
            opacity="0.85"
          />
          <path
            d="M0,85 C600,45 1050,110 1440,75 L1440,110 L0,110 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* 4-Column White/Light Footer */}
      <footer className="bg-[#f8fafc] text-slate-600 pt-12 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-200">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#ff5a26] text-white flex items-center justify-center">
                  <Box className="w-4 h-4" />
                </div>
                <span className="text-base font-black uppercase text-[#111827]">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Công ty chúng tôi là đơn vị chuyên cung cấp các dịch vụ marketing chất lượng, giúp khách hàng nâng cao hiệu quả quảng cáo và tiếp cận đúng đối tượng.
              </p>
              <div className="space-y-1.5 text-xs">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#111827]" />
                  <span className="font-bold text-[#111827]">{primaryPhone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#111827]" />
                  <span>{primaryEmail}</span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#111827] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </p>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111827] mb-4">
                DANH MỤC
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#" className="hover:text-[#ff5a26]">
                    › Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#ff5a26]">
                    › Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#ff5a26]">
                    › Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#du-an" className="hover:text-[#ff5a26]">
                    › Dự án
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#ff5a26]">
                    › Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff5a26]">
                    › Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111827] mb-4">
                HỖ TRỢ
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#ff5a26]">
                    › Giới thiệu công ty
                  </a>
                </li>
                <li>
                  <a href="#bang-gia" className="hover:text-[#ff5a26]">
                    › Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#bang-gia" className="hover:text-[#ff5a26]">
                    › Chính sách hỗ trợ
                  </a>
                </li>
                <li>
                  <a href="#bang-gia" className="hover:text-[#ff5a26]">
                    › Chính sách thanh toán
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff5a26]">
                    › Điều khoản và điều kiện
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Map Card */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111827] mb-4">
                BẢN ĐỒ
              </h4>
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-3 shadow-sm">
                <div className="h-28 rounded-lg bg-sky-100 flex flex-col items-center justify-center text-center p-3 relative">
                  <MapPin className="w-6 h-6 text-[#ff5a26] mb-1" />
                  <span className="text-[11px] font-bold text-[#111827] line-clamp-2">
                    {data.business.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} {data.business.name}. Giải Pháp Công Nghệ & Digital Marketing.
          </div>
        </div>
      </footer>

      {/* PACKAGE REGISTRATION MODAL */}
      {selectedPlanName && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPlanName(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-7 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPlanName(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="inline-block bg-orange-50 text-[#ff5a26] text-xs font-extrabold px-3 py-1 rounded-full mb-2">
              Đăng ký dịch vụ
            </span>
            <h3 className="text-xl font-extrabold text-[#111827] mb-1">
              {selectedPlanName}
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Để lại thông tin để chuyên gia Digital Marketing gửi kế hoạch triển khai chi tiết.
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Họ và tên *"
                value={contactForm.fullName}
                onChange={(e) =>
                  setContactForm({ ...contactForm, fullName: e.target.value })
                }
                className="w-full border border-slate-200 rounded-full px-4 py-3 text-xs focus:outline-none focus:border-[#ff5a26]"
              />
              <input
                type="email"
                required
                placeholder="Email doanh nghiệp *"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
                className="w-full border border-slate-200 rounded-full px-4 py-3 text-xs focus:outline-none focus:border-[#ff5a26]"
              />
              <input
                type="text"
                placeholder="Website hoặc Fanpage cần tư vấn"
                value={contactForm.topic}
                onChange={(e) =>
                  setContactForm({ ...contactForm, topic: e.target.value })
                }
                className="w-full border border-slate-200 rounded-full px-4 py-3 text-xs focus:outline-none focus:border-[#ff5a26]"
              />
              <button
                type="submit"
                className="w-full bg-[#ff5a26] hover:bg-[#e04819] text-white text-xs font-extrabold uppercase py-3.5 rounded-full shadow-md transition cursor-pointer"
              >
                XÁC NHẬN ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
