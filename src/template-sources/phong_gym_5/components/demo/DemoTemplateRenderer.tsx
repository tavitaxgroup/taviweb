"use client";

import React, { useState } from "react";
import {
  Dumbbell,
  UserCheck,
  Smile,
  Award,
  Flame,
  HeartPulse,
  Users,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  Smartphone
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym5DefaultData,
  type PhongGym5Data
} from "@/template-sources/phong_gym_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongGym5Data = adaptClonedTemplateData(
    phongGym5DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [trialSent, setTrialSent] = useState(false);
  const [modalPlan, setModalPlan] = useState<string | null>(null);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@pelvanfitness.vn";
  const programmeCards =
    data.programmeCards || phongGym5DefaultData.programmeCards || [];
  const dailyClasses =
    data.dailyClasses || phongGym5DefaultData.dailyClasses || [];
  const statsList = data.stats || phongGym5DefaultData.stats || [];
  const amenities = data.amenities || phongGym5DefaultData.amenities || [];
  const trainersList =
    data.trainersList || phongGym5DefaultData.trainersList || [];
  const pricingList = data.pricing || phongGym5DefaultData.pricing || [];
  const galleryImages =
    data.galleryImages || phongGym5DefaultData.galleryImages || [];
  const mainTestimonial =
    data.testimonials?.[0] || phongGym5DefaultData.testimonials?.[0];

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrialSent(true);
    setTimeout(() => {
      setTrialSent(false);
      setModalPlan(null);
    }, 2500);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#52b741] selection:text-white"
    >
      {/* 1. WHITE TOP NAVBAR (Matches GYM005) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Dumbbell className="w-7 h-7 text-[#52b741] stroke-[2.5]" />
            <span className="text-xl font-black tracking-tight uppercase text-[#181a1f]">
              {data.business.name.split(" ")[0] || "PELVAN"}
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-600">
            <a href="#top" className="text-[#52b741]">
              TRANG CHỦ
            </a>
            <a href="#about" className="hover:text-[#52b741] transition-colors">
              VỀ CHÚNG TÔI
            </a>
            <a
              href="#programme"
              className="hover:text-[#52b741] transition-colors"
            >
              KHÓA HỌC
            </a>
            <a href="#classes" className="hover:text-[#52b741] transition-colors">
              LỊCH TẬP
            </a>
            <a
              href="#trainers"
              className="hover:text-[#52b741] transition-colors"
            >
              CHUYÊN VIÊN GYM
            </a>
            <a href="#pricing" className="hover:text-[#52b741] transition-colors">
              BẢNG GIÁ
            </a>
            <a href="#gallery" className="hover:text-[#52b741] transition-colors">
              HÌNH ẢNH
            </a>
            <a
              href="#trial-contact"
              className="hover:text-[#52b741] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#52b741]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              VỀ CHÚNG TÔI
            </a>
            <a
              href="#programme"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              CHƯƠNG TRÌNH
            </a>
            <a
              href="#classes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              LỚP GYM PHÙ HỢP
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              BẢNG GIÁ
            </a>
            <a
              href="#trial-contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              3 NGÀY MIỄN PHÍ
            </a>
          </div>
        )}
      </header>

      {/* 2. DARK SMOKY HERO BANNER + OVERLAPPING 3-COLUMN GREEN STRIP */}
      <section className="relative bg-[#111317] text-white overflow-hidden pb-16">
        <div
          className="absolute inset-0 bg-cover bg-right-top opacity-65"
          style={{ backgroundImage: `url('${data.hero.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1014] via-[#0e1014]/85 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-20 pb-24">
          <div className="max-w-lg">
            <h1 className="text-3xl sm:text-5xl font-black uppercase leading-[1.15] tracking-tight">
              SĂN CHẮC CƠ <br />
              VỚI <span className="text-[#52b741]">CÔNG NGHỆ</span> TỐT <br />
              NHẤT.
            </h1>

            <div className="mt-5 pl-3 border-l-2 border-[#52b741] text-sm sm:text-base font-bold text-white/95">
              {data.hero.subtitle || data.heroPriceNote}
            </div>

            <div className="mt-7">
              <a
                href={data.hero.ctaLink || "#trial-contact"}
                className="inline-block border border-white/50 hover:border-[#52b741] hover:bg-[#52b741] text-white text-[11px] font-bold uppercase tracking-widest px-7 py-2.5 transition-colors"
              >
                {data.hero.ctaText || "ĐĂNG KÝ"}
              </a>
            </div>
          </div>

          {/* Faint Watermark Logo */}
          <div className="mt-12 flex items-center gap-2 opacity-15 select-none pointer-events-none">
            <Dumbbell className="w-10 h-10" />
            <span className="text-4xl font-black uppercase tracking-wider">
              {data.business.name.split(" ")[0] || "PELVAN"}
            </span>
          </div>
        </div>
      </section>

      {/* Overlapping 3-Box Green Bar */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#52b741] text-white shadow-xl divide-y md:divide-y-0 md:divide-x divide-white/20">
          {data.topGreenPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="py-8 px-6 flex flex-col items-center justify-center text-center group hover:bg-[#45a035] transition-colors"
            >
              {pillar.icon === "tech" && (
                <Dumbbell className="w-8 h-8 mb-2.5 text-white/95" />
              )}
              {pillar.icon === "trainer" && (
                <UserCheck className="w-8 h-8 mb-2.5 text-white/95" />
              )}
              {pillar.icon === "friendly" && (
                <Smile className="w-8 h-8 mb-2.5 text-white/95" />
              )}
              <span className="text-xs font-extrabold uppercase tracking-wider">
                {pillar.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CÂU CHUYỆN VỀ CHÚNG TÔI (KINH NGHIỆM HUẤN LUYỆN TRÊN 30 NĂM) */}
      <section id="about" className="py-16 sm:py-20 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Story */}
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              — {data.storySection.eyebrow}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#52b741] mb-4">
              {data.storySection.title}
            </h2>
            <p className="text-[11px] font-bold uppercase text-slate-700 leading-relaxed mb-4">
              {data.storySection.leadUppercase}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed mb-7">
              {data.storySection.description}
            </p>

            {/* 3 Icon Boxes */}
            <div className="grid grid-cols-3 gap-4 max-w-md mb-7">
              {data.storySection.badges.map((b) => (
                <div
                  key={b.id}
                  className="bg-white border border-slate-200 py-4 px-3 text-center flex flex-col items-center justify-center shadow-sm"
                >
                  {b.icon === "dumbbell" && (
                    <Dumbbell className="w-6 h-6 text-[#52b741] mb-2" />
                  )}
                  {b.icon === "muscle" && (
                    <Flame className="w-6 h-6 text-[#52b741] mb-2" />
                  )}
                  {b.icon === "yoga" && (
                    <HeartPulse className="w-6 h-6 text-[#52b741] mb-2" />
                  )}
                  <span className="text-[10px] font-extrabold uppercase text-slate-800">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#trial-contact"
              className="inline-block border border-slate-300 hover:border-[#52b741] hover:bg-[#52b741] text-slate-700 hover:text-white text-[10px] font-bold uppercase tracking-wider px-6 py-2.5 transition-colors"
            >
              ĐĂNG KÝ NGAY
            </a>
          </div>

          {/* Right Athlete Pair Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-2">
              <img
                src={data.storySection.trainerPairImage}
                alt={data.storySection.title}
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMME (Dark Section with Giant Watermark + 4 Tall Cards) */}
      <section
        id="programme"
        className="relative py-16 sm:py-20 bg-[#181a1f] text-white overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4">
          {/* Giant Faint Watermark */}
          <div className="text-center text-4xl sm:text-7xl font-black uppercase tracking-[0.2em] text-white/5 select-none mb-4">
            PROGRAMME
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programmeCards.map((card) => (
              <div
                key={card.id}
                onClick={() => setModalPlan(card.title)}
                className="group bg-[#121418] border border-white/5 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                    {card.title}
                  </h3>
                  <div className="w-6 h-0.5 bg-[#52b741] mx-auto mt-2.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 30% OFF GREEN PROMO BANNER */}
      <section className="py-12 sm:py-14 bg-[#52b741] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Circular Athlete Image + Red Badge */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2.5 bg-[#181a1f] shadow-2xl">
              <img
                src={data.promoBanner.circleImage}
                alt="30% Off Gym"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-2 right-0 w-16 h-16 rounded-full bg-[#e91e63] text-white flex flex-col items-center justify-center text-center leading-tight shadow-lg border-2 border-white">
                <span className="text-[10px] font-black italic">Come &</span>
                <span className="text-[10px] font-black italic">Join us</span>
              </div>
            </div>
          </div>

          {/* Right Offer Copy */}
          <div className="md:col-span-7 text-center md:text-left">
            <div className="text-sm font-bold text-white/95">
              {data.promoBanner.subtitle}
            </div>
            <div className="text-4xl sm:text-6xl font-black tracking-tight leading-none my-1">
              {data.promoBanner.discount}
            </div>
            <div className="text-xs font-extrabold uppercase tracking-wider mb-2">
              {data.promoBanner.packageLabel}
            </div>
            <span className="inline-block bg-[#181a1f] text-white text-[10px] font-bold uppercase px-3 py-1 mb-3">
              {data.promoBanner.badgeText}
            </span>
            <p className="text-xs text-white/90 leading-relaxed max-w-lg mb-5">
              {data.promoBanner.description}
            </p>
            <button
              type="button"
              onClick={() => setModalPlan("Ưu đãi 30% OFF Gói 2 Năm")}
              className="border border-white/70 hover:bg-white hover:text-[#52b741] text-white text-[10px] font-bold uppercase tracking-wider px-6 py-2 transition-colors"
            >
              ĐĂNG KÝ NGAY
            </button>
          </div>
        </div>
      </section>

      {/* 6. CÁC LỚP GYM PHÙ HỢP (2x2 Horizontal Split Cards) */}
      <section id="classes" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              — LỚP HỌC MỖI NGÀY
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#52b741]">
              CÁC LỚP GYM PHÙ HỢP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailyClasses.map((cls) => (
              <div
                key={cls.id}
                onClick={() => setModalPlan(cls.title)}
                className="grid grid-cols-12 bg-[#1f2229] text-white overflow-hidden shadow-md cursor-pointer group"
              >
                <div className="col-span-5 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="col-span-7 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold uppercase text-[#52b741] mb-2">
                      {cls.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {cls.description}
                    </p>
                  </div>
                  <div className="text-[10px] font-bold text-white/80 mt-4 pt-2 border-t border-white/10">
                    {cls.schedule}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NƠI TỐT NHẤT GIÀNH CHO BẠN LUYỆN TẬP + 4 COUNTER STATS */}
      <section className="bg-[#181a1f] text-white">
        {/* Top Split Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 min-h-[340px]">
            <img
              src={data.whyBestSection.image}
              alt={data.whyBestSection.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              — {data.whyBestSection.eyebrow}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#52b741] mb-6 leading-snug">
              {data.whyBestSection.title}
            </h2>

            <div className="space-y-4">
              {data.whyBestSection.items.map((item, idx) => (
                <div key={idx} className="border-b border-white/10 pb-3.5">
                  <div className="text-xs font-bold uppercase mb-1">
                    <span className="text-[#52b741] mr-1.5">{item.number}</span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom 4 Stats Row */}
        <div className="border-t border-white/10 py-12 bg-[#121418]">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsList.slice(0, 4).map((st, idx) => (
              <div
                key={st.id}
                className="border border-white/10 py-6 px-4 text-center relative"
              >
                <div className="w-8 h-8 rounded-full bg-[#181a1f] border border-white/15 flex items-center justify-center mx-auto -mt-10 mb-3 text-white">
                  {idx === 0 && <Users className="w-4 h-4 text-[#52b741]" />}
                  {idx === 1 && <UserCheck className="w-4 h-4 text-[#52b741]" />}
                  {idx === 2 && <Dumbbell className="w-4 h-4 text-[#52b741]" />}
                  {idx === 3 && <Award className="w-4 h-4 text-[#52b741]" />}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#52b741]">
                  {st.number}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                  {st.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CÁC TIỆN NGHI KHÁC TẠI GYM */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              — NHỮNG ĐIỀU BẠN NHẬN ĐƯỢC
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#52b741]">
              CÁC TIỆN NGHI KHÁC TẠI GYM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {amenities.map((am) => (
              <div
                key={am.id}
                className="bg-[#181a1f] text-white border-b-4 border-[#52b741] overflow-hidden shadow-md group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={am.image}
                    alt={am.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xs font-extrabold uppercase text-[#52b741] mb-2">
                    {am.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {am.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TẢI ỨNG DỤNG HỖ TRỢ (Dark App Section) */}
      <section className="py-16 bg-[#181a1f] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              — {data.appSection.eyebrow}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#52b741] mb-4">
              {data.appSection.title}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {data.appSection.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setModalPlan("Tải ứng dụng Pelvan iOS")}
                className="bg-black border border-white/25 hover:border-[#52b741] px-4 py-2 rounded flex items-center gap-2.5"
              >
                <Smartphone className="w-5 h-5 text-white" />
                <div className="text-left leading-tight">
                  <span className="block text-[9px] text-slate-400">
                    Download on the
                  </span>
                  <span className="block text-xs font-bold">App Store</span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setModalPlan("Tải ứng dụng Pelvan Android")}
                className="bg-black border border-white/25 hover:border-[#52b741] px-4 py-2 rounded flex items-center gap-2.5"
              >
                <Smartphone className="w-5 h-5 text-[#52b741]" />
                <div className="text-left leading-tight">
                  <span className="block text-[9px] text-slate-400">
                    GET IT ON
                  </span>
                  <span className="block text-xs font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-center">
            <div className="relative flex items-center gap-4">
              <div className="w-40 sm:w-44 h-72 rounded-3xl border-4 border-slate-700 overflow-hidden shadow-2xl bg-black">
                <img
                  src={data.appSection.appImage}
                  alt="Gym App"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
              <div className="w-44 sm:w-48 h-80 rounded-3xl border-4 border-slate-600 bg-[#22252c] shadow-2xl flex flex-col items-center justify-center p-4">
                <Dumbbell className="w-8 h-8 text-[#52b741] mb-2" />
                <span className="text-sm font-black uppercase tracking-wider">
                  {data.business.name.split(" ")[0]}
                </span>
                <span className="text-[10px] text-slate-400 mt-1">
                  Smart Fitness App
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. HÃY GẶP NHỮNG HLV ĐẦY KINH NGHIỆM + DARK TESTIMONIAL BANNER */}
      <section id="trainers" className="pt-16 sm:pt-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 pb-16">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              — NHỮNG NGƯỜI BẠN CHÚNG TÔI
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#52b741]">
              HÃY GẶP NHỮNG HLV ĐẦY KINH NGHIỆM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainersList.map((tr) => (
              <div key={tr.id} className="shadow-sm border border-slate-100">
                <div className="aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={tr.image}
                    alt={tr.name}
                    className={`w-full h-full object-cover ${
                      tr.featured ? "" : "grayscale hover:grayscale-0"
                    } transition-all duration-500`}
                  />
                </div>
                <div
                  className={`p-5 text-center ${
                    tr.featured
                      ? "bg-[#52b741] text-white"
                      : "bg-white text-slate-800"
                  }`}
                >
                  <h3
                    className={`text-xs font-extrabold uppercase ${
                      tr.featured ? "text-white" : "text-[#52b741]"
                    }`}
                  >
                    {tr.name}
                  </h3>
                  <div
                    className={`text-[10px] uppercase mt-0.5 ${
                      tr.featured ? "text-white/90" : "text-slate-400"
                    }`}
                  >
                    {tr.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Testimonial Strip */}
        {mainTestimonial && (
          <div className="bg-[#181a1f] py-14 text-center text-white px-4">
            <div className="max-w-2xl mx-auto">
              {mainTestimonial.avatar && (
                <img
                  src={mainTestimonial.avatar}
                  alt={mainTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-[#52b741]"
                />
              )}
              <p className="text-xs sm:text-sm italic font-medium text-white/90 leading-relaxed mb-3">
                “{mainTestimonial.content}”
              </p>
              <div className="text-[11px] font-bold text-[#52b741]">
                {mainTestimonial.author}{" "}
                <span className="text-slate-400 font-normal">
                  / {mainTestimonial.role}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 11. HIỆU QUẢ ĐẾN VỚI BẠN (3 Dark Pricing Cards) */}
      <section id="pricing" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              — KẾ HOẠCH CỦA CHÚNG TÔI
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#52b741]">
              HIỆU QUẢ ĐẾN VỚI BẠN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingList.map((plan, idx) => {
              const isMiddle = idx === 1;
              return (
                <div
                  key={plan.id}
                  className={`bg-[#181a1f] text-white overflow-hidden flex flex-col justify-between ${
                    isMiddle ? "ring-2 ring-[#181a1f] p-1.5" : ""
                  }`}
                >
                  <div
                    className={`h-full flex flex-col justify-between ${
                      isMiddle ? "border border-white/40" : ""
                    }`}
                  >
                    <div>
                      <div className="h-44 overflow-hidden relative">
                        <img
                          src={plan.image}
                          alt={plan.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#181a1f] via-[#181a1f]/30 to-transparent" />
                      </div>

                      <div className="px-6 pb-6 text-center -mt-4 relative z-10">
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#52b741] mb-1">
                          {plan.name}
                        </div>
                        <div className="text-xl sm:text-2xl font-extrabold text-white mb-5">
                          {plan.price}
                        </div>
                        <ul className="space-y-2.5 text-[11px] text-slate-400 mb-6">
                          {plan.features.map((f, i) => (
                            <li key={i}>{f.title}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pb-7 text-center">
                      <button
                        type="button"
                        onClick={() => setModalPlan(`Gói ${plan.name} - ${plan.price}`)}
                        className="border border-white/30 hover:border-[#52b741] hover:bg-[#52b741] text-white text-[10px] font-bold uppercase tracking-wider px-6 py-2 transition-colors"
                      >
                        ĐĂNG KÝ
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. HÌNH ẢNH PHÒNG TẬP (4x2 Full-Width Gallery) + GREEN NEWSLETTER BAR */}
      <section id="gallery" className="bg-[#181a1f] pt-12">
        <div className="text-center mb-8 px-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
            THƯ VIỆN
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#52b741]">
            HÌNH ẢNH PHÒNG TẬP
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {galleryImages.slice(0, 8).map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-black group">
              <img
                src={img}
                alt={`Phòng tập ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Green Newsletter Bar */}
        <div className="bg-[#52b741] py-12 px-4 text-center text-white">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/85 block mb-1">
            NHẬN CẬP NHẬT
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold uppercase mb-2">
            ĐĂNG KÝ NHẬN TIN
          </h3>
          <p className="text-xs text-white/85 max-w-xl mx-auto mb-6">
            Nhận ngay cẩm nang thực đơn tăng cơ giảm mỡ 7 ngày và thông tin ưu đãi thẻ hội viên sớm nhất từ {data.business.name}.
          </p>

          {newsletterSent ? (
            <div className="text-xs font-bold bg-[#181a1f] inline-block px-6 py-2.5 rounded">
              Đã đăng ký nhận bản tin thành công!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSent(true);
                setNewsletterEmail("");
              }}
              className="max-w-md mx-auto flex"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email..."
                className="flex-1 bg-white text-slate-900 px-4 py-2.5 text-xs focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#181a1f] hover:bg-black text-white text-[11px] font-bold uppercase px-6 py-2.5 transition-colors"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 13. 3 NGÀY MIỄN PHÍ (Dark Split Form + Map) & DARK FOOTER */}
      <footer id="trial-contact" className="bg-[#181a1f] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left 3 Days Free Form */}
          <div className="lg:col-span-6 p-10 sm:p-14 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              LIÊN HỆ
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#52b741] mb-6">
              3 NGÀY MIỄN PHÍ
            </h2>

            {trialSent ? (
              <div className="bg-[#52b741]/20 border border-[#52b741] text-white p-5 text-xs max-w-sm w-full">
                Chúc mừng! Mã vé tập thử 3 ngày miễn phí đã được kích hoạt cho số điện thoại của bạn.
              </div>
            ) : (
              <form
                onSubmit={handleTrialSubmit}
                className="w-full max-w-sm space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Tên của bạn"
                  className="w-full bg-[#121418] border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#52b741]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại / Email của bạn"
                  className="w-full bg-[#121418] border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#52b741]"
                />
                <textarea
                  rows={3}
                  placeholder="Lời nhắn (Khung giờ muốn tập thử)"
                  className="w-full bg-[#121418] border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#52b741]"
                />
                <button
                  type="submit"
                  className="bg-[#52b741] hover:bg-[#449d35] text-white text-[11px] font-bold uppercase tracking-wider px-8 py-2.5 transition-colors"
                >
                  ĐĂNG KÝ NGAY
                </button>
              </form>
            )}
          </div>

          {/* Right Map */}
          <div className="lg:col-span-6 relative min-h-[340px] bg-[#e5e7eb] text-slate-800 overflow-hidden">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #cbd5e1 1px, transparent 1px), linear-gradient(180deg, #cbd5e1 1px, transparent 1px)",
                backgroundSize: "28px 28px"
              }}
            />
            <div className="absolute top-4 left-4 bg-white p-3 rounded shadow-md max-w-xs z-10 text-left">
              <div className="text-xs font-bold text-slate-900">
                {data.business.name}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {data.business.address}
              </div>
              <div className="text-[10px] text-amber-500 font-bold mt-1">
                4.9 ★★★★★ ({data.business.reviewCount || 995} đánh giá)
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#52b741] text-white px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-bold">
                <MapPin className="w-4 h-4" />
                <span>{data.business.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Contact Columns */}
        <div className="border-t border-white/10 py-12 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-xs">
            <div>
              <MapPin className="w-5 h-5 text-[#52b741] mx-auto mb-2" />
              <div className="text-[10px] font-bold uppercase text-white mb-1">
                ĐỊA CHỈ
              </div>
              <p className="text-[11px] text-slate-400">
                {data.business.address}
              </p>
            </div>
            <div>
              <Phone className="w-5 h-5 text-[#52b741] mx-auto mb-2" />
              <div className="text-[10px] font-bold uppercase text-white mb-1">
                HOTLINE
              </div>
              <p className="text-[11px] text-slate-400">{primaryPhone}</p>
            </div>
            <div>
              <Mail className="w-5 h-5 text-[#52b741] mx-auto mb-2" />
              <div className="text-[10px] font-bold uppercase text-white mb-1">
                EMAIL
              </div>
              <p className="text-[11px] text-slate-400">{primaryEmail}</p>
            </div>
            <div>
              <MessageSquare className="w-5 h-5 text-[#52b741] mx-auto mb-2" />
              <div className="text-[10px] font-bold uppercase text-white mb-1">
                TƯ VẤN PT 24/7
              </div>
              <p className="text-[11px] text-slate-400">
                {data.business.workingHours}
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/5 text-center text-[11px] text-slate-500">
            © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
          </div>
        </div>
      </footer>

      {/* MODAL FOR CLASS / PLAN REGISTRATION */}
      {modalPlan && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#181a1f] text-white border border-[#52b741] max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setModalPlan(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {trialSent ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#52b741] mx-auto mb-3" />
                <h3 className="text-base font-bold uppercase mb-1">
                  Đăng ký thành công!
                </h3>
                <p className="text-xs text-slate-400">
                  Huấn luyện viên trưởng của {data.business.name} sẽ liên hệ với bạn ngay.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTrialSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#52b741]">
                    {data.business.name}
                  </span>
                  <h3 className="text-base font-extrabold uppercase mt-1">
                    {modalPlan}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên hội viên"
                  className="w-full bg-[#121418] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#52b741]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại"
                  className="w-full bg-[#121418] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#52b741]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#52b741] hover:bg-[#449d35] text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors"
                >
                  XÁC NHẬN ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
