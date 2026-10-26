"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Search,
  Award,
  ShieldCheck,
  HeartHandshake,
  Send,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien2DefaultData,
  type ThamMyVien2Data
} from "@/template-sources/tham_my_vien_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: ThamMyVien2Data = adaptClonedTemplateData(
    thamMyVien2DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    data.services?.[0]?.title || "Nâng cơ trẻ hóa Ultherapy"
  );
  const [onlineFormDone, setOnlineFormDone] = useState(false);
  const [footerEmailDone, setFooterEmailDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0903 999 888";
  const primaryEmail = data.business.email?.[0] || "tuvan@elegantbeauty.vn";

  const scrollToBooking = (serviceTitle?: string) => {
    if (serviceTitle) setSelectedService(serviceTitle);
    setOnlineFormDone(false);
    const el = document.getElementById("dat-lich-truc-tuyen");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#2d2220] font-sans selection:bg-[#d48c84] selection:text-white">
      {/* 1. BLUSH/WHITE HEADER + LUXURY BEAUTY HERO */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#f3e3e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Floral Rose Emblem + Brand Name */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fcf5f4] border border-[#d48c84]/40 flex items-center justify-center text-[#c2766e]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-wide text-[#2d2220] uppercase leading-tight">
                {data.business.name}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#c2766e] font-semibold">
                Korean Aesthetic Clinic
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-widest text-[#2d2220]/80">
            <a href="#trang-chu" className="text-[#c2766e]">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#c2766e] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu" className="hover:text-[#c2766e] transition-colors">
              DỊCH VỤ
            </a>
            <a href="#co-so-vat-chat" className="hover:text-[#c2766e] transition-colors">
              CƠ SỞ VẬT CHẤT
            </a>
            <a href="#tin-tuc" className="hover:text-[#c2766e] transition-colors">
              TIN TỨC SỰ KIỆN
            </a>
            <a
              href="#dat-lich-truc-tuyen"
              className="hover:text-[#c2766e] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => scrollToBooking()}
              className="p-2 text-[#2d2220]/70 hover:text-[#c2766e] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToBooking()}
              className="bg-[#d48c84] hover:bg-[#c2766e] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors shadow-sm cursor-pointer"
            >
              ĐẶT LỊCH
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2d2220]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#f3e3e1] px-4 py-4 space-y-2.5 text-xs font-bold uppercase tracking-widest">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#c2766e]"
            >
              Giới thiệu
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#c2766e]"
            >
              Dịch vụ nổi bật
            </a>
            <a
              href="#co-so-vat-chat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#c2766e]"
            >
              Cơ sở vật chất
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#c2766e]"
            >
              Tin tức & Sự kiện
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToBooking();
              }}
              className="w-full bg-[#d48c84] text-white py-3 text-xs font-bold uppercase tracking-widest"
            >
              Đặt lịch ngay
            </button>
          </div>
        )}
      </header>

      {/* LUXURY BEAUTY HERO */}
      <section
        id="trang-chu"
        className="relative min-h-[520px] lg:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d2220]/70 via-[#2d2220]/60 to-[#2d2220]/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 space-y-5">
          {/* Floral Crest */}
          <div className="w-12 h-12 rounded-full border border-[#d48c84]/60 bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto text-[#f5d0cb]">
            <Sparkles className="w-5 h-5" />
          </div>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-[#f5d0cb]">
            {data.hero.eyebrow || "THẨM MỸ CÔNG NGHỆ CAO CHUẨN HÀN"}
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide uppercase leading-tight">
            {data.hero.title}
          </h1>

          <p className="text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {data.hero.subtitle}
          </p>

          <div className="pt-4">
            <button
              onClick={() => scrollToBooking()}
              className="bg-[#d48c84] hover:bg-[#c2766e] text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              {data.hero.ctaText || "KHÁM PHÁ THÊM"}
            </button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION ("GIỚI THIỆU VỀ THẨM MỸ VIỆN HÀNG ĐẦU") */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Beauty Portrait with Soft Blush Backdrop */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#fcf5f4] p-6 sm:p-8 relative">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                  alt="Giới thiệu Thẩm mỹ viện"
                  className="w-full h-[380px] object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c2766e]">
                <Sparkles className="w-4 h-4" />
                <span>ABOUT US</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2d2220] uppercase leading-snug">
                {data.business.aboutTitle || "GIỚI THIỆU VỀ THẨM MỸ VIỆN HÀNG ĐẦU"}
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                {data.business.aboutText.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* 2 Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#fcf5f4] text-[#c2766e] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#2d2220]">
                      Thiết bị công nghệ hiện đại
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      Hệ thống máy nâng cơ & Laser chuyển giao chính hãng đạt chuẩn FDA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#fcf5f4] text-[#c2766e] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#2d2220]">
                      Đội ngũ giàu kinh nghiệm
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                      Bác sĩ chuyên khoa Tạo hình Thẩm mỹ tu nghiệp tại Hàn Quốc
                    </p>
                  </div>
                </div>
              </div>

              {/* Doctor Signature & CTA */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#f3e3e1]">
                <div>
                  <span className="font-serif italic text-xl text-[#c2766e] block">
                    Dr. Evelyn Park
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-stone-400">
                    Giám đốc Chuyên môn {data.business.name}
                  </span>
                </div>

                <button
                  onClick={() => scrollToBooking()}
                  className="bg-[#d48c84] hover:bg-[#c2766e] text-white text-xs font-bold uppercase tracking-widest px-7 py-3.5 transition-colors cursor-pointer"
                >
                  KHÁM PHÁ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "DỊCH VỤ NỔI BẬT" (3x2 CIRCULAR PHOTO SERVICE CARDS) */}
      <section id="dich-vu" className="py-16 lg:py-24 bg-[#fcf5f4]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#c2766e]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2d2220] uppercase">
              DỊCH VỤ NỔI BẬT
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {(data.services || thamMyVien2DefaultData.services || []).map((srv) => (
              <div
                key={srv.id}
                className="bg-white p-8 text-center shadow-sm hover:shadow-xl border border-[#f3e3e1] transition-all flex flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* Circular Photo + Dusty Rose Icon Badge */}
                  <div className="relative mb-6">
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#fcf5f4] shadow-md">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#d48c84] text-white flex items-center justify-center shadow-md absolute -bottom-3 left-1/2 -translate-x-1/2 border-2 border-white">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#2d2220]">
                    {srv.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-stone-500 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <button
                  onClick={() => scrollToBooking(srv.title)}
                  className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#2d2220] hover:text-[#c2766e] transition-colors cursor-pointer"
                >
                  <span>XEM THÊM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "CƠ SỞ VẬT CHẤT HIỆN ĐẠI" */}
      <section id="co-so-vat-chat" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Photo Collage of VIP Treatment Suites */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-2.5">
              {(data.facilityImages || thamMyVien2DefaultData.facilityImages).map(
                (imgUrl, idx) => (
                  <div
                    key={idx}
                    className={`overflow-hidden ${
                      idx >= 3 ? "h-44 sm:h-52" : "h-32 sm:h-36"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`VIP Suite ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )
              )}
            </div>

            {/* Right Title, Description, 5 Rose Checkmarks & Badge */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c2766e]">
                <Sparkles className="w-4 h-4" />
                <span>CHẤT LƯỢNG - AN TOÀN</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d2220] uppercase">
                CƠ SỞ VẬT CHẤT HIỆN ĐẠI - TIÊN TIẾN
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Hệ thống phòng điều trị công nghệ cao và phòng VIP tại{" "}
                <strong>{data.business.name}</strong> được thiết kế theo tiêu chuẩn khách sạn 5 sao,
                đảm bảo sự riêng tư, thư thái và an toàn vô khuẩn tuyệt đối.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-2">
                <ul className="sm:col-span-8 space-y-2.5">
                  {(
                    data.facilityChecklist ||
                    thamMyVien2DefaultData.facilityChecklist
                  ).map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#2d2220]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#d48c84] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="sm:col-span-4 bg-[#fcf5f4] border border-[#f3e3e1] p-5 text-center">
                  <Award className="w-8 h-8 text-[#c2766e] mx-auto mb-2" />
                  <p className="font-serif text-sm font-bold text-[#2d2220]">
                    Trung tâm Beauty & Spa
                  </p>
                  <p className="text-[11px] text-[#c2766e] mt-1">Chuẩn 5 Sao Quốc Tế</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "PHẢN HỒI TỪ KHÁCH HÀNG" (3 QUOTE CARDS) + "QUY TRÌNH DỊCH VỤ" (3 LARGE CIRCULAR STEPS) */}
      <section className="py-16 lg:py-24 bg-[#fcf5f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c2766e]">
                <Sparkles className="w-4 h-4" />
                <span>ĐÁNH GIÁ TÍCH CỰC</span>
              </div>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2d2220] uppercase">
                PHẢN HỒI TỪ KHÁCH HÀNG
              </h2>
            </div>
            <div className="lg:col-span-6 text-xs sm:text-sm text-stone-600">
              Chúng tôi trân trọng từng sự tin tưởng và phản hồi tích cực của khách hàng,
              đó là động lực để {data.business.name} không ngừng nâng tầm dịch vụ mỗi ngày.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || thamMyVien2DefaultData.testimonials || []).map(
              (t) => (
                <div
                  key={t.id}
                  className="bg-white p-7 shadow-sm border border-[#f3e3e1] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-0.5 text-[#d48c84]">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#d48c84]" />
                        ))}
                      </div>
                      <span className="font-serif text-4xl text-[#f3e3e1] leading-none">
                        ”
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      “{t.content}”
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-sm text-[#2d2220]">{t.author}</h3>
                      <span className="text-[10px] uppercase tracking-widest text-[#c2766e]">
                        {t.role || "KHÁCH HÀNG"}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* QUY TRÌNH DỊCH VỤ (3 Large Circular Steps) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c2766e]">
              <Sparkles className="w-4 h-4" />
              <span>NHANH CHÓNG - TIỆN LỢI</span>
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2d2220] uppercase">
              QUY TRÌNH DỊCH VỤ
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Connecting Line on Desktop */}
            <div className="hidden md:block absolute top-20 inset-x-16 h-px bg-[#d48c84]/40 z-0" />

            {(data.processSteps || thamMyVien2DefaultData.processSteps).map((step) => (
              <div
                key={step.id}
                className="relative z-10 text-center flex flex-col items-center"
              >
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg ring-2 ring-[#d48c84]/30">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="w-10 h-10 rounded-full bg-[#d48c84] text-white font-bold text-xs flex items-center justify-center shadow-md absolute top-2 -right-2 border-2 border-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2d2220]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "TIN TỨC & SỰ KIỆN" (3 CARDS) + "ĐẶT LỊCH TRỰC TUYẾN" SPLIT SECTION */}
      <section id="tin-tuc" className="py-16 lg:py-24 bg-[#fcf5f4]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c2766e]">
                <Sparkles className="w-4 h-4" />
                <span>NEWS & BLOG</span>
              </div>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2d2220] uppercase">
                TIN TỨC & SỰ KIỆN
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md">
              Cập nhật những công nghệ làm đẹp mới nhất và bí quyết giữ gìn nét thanh xuân
              từ đội ngũ bác sĩ chuyên khoa thẩm mỹ.
            </p>
            <button
              onClick={() => scrollToBooking()}
              className="self-start lg:self-auto bg-[#2d2220] hover:bg-[#c2766e] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors cursor-pointer"
            >
              XEM THÊM
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || thamMyVien2DefaultData.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="h-60 overflow-hidden mb-4 bg-white">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-500 mb-2">
                  <span className="px-3 py-0.5 rounded-full border border-[#d48c84] text-[#c2766e] font-semibold">
                    {post.category || "Beauty"}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2d2220] group-hover:text-[#c2766e] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <button
                  onClick={() => scrollToBooking()}
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#c2766e] cursor-pointer"
                >
                  <span>XEM THÊM</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* "ĐẶT LỊCH TRỰC TUYẾN" SPLIT SECTION */}
      <section id="dat-lich-truc-tuyen" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side Beauty Stats (326+ & 8000+) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c2766e]">
                  <Sparkles className="w-4 h-4" />
                  <span>CAM KẾT CHẤT LƯỢNG</span>
                </div>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2d2220] uppercase">
                  ĐẶT LỊCH TRỰC TUYẾN
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Nếu bạn cần hỗ trợ tư vấn phác đồ thẩm mỹ hoặc đặt lịch thăm khám 1:1
                  cùng Bác sĩ Trưởng khoa, vui lòng để lại thông tin bên cạnh.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-2">
                <div className="sm:col-span-6 overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
                    alt="Hot stone & aesthetic therapy"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="sm:col-span-6 space-y-6">
                  {(data.stats || thamMyVien2DefaultData.stats || []).map((st) => (
                    <div key={st.id} className="border-b border-[#f3e3e1] pb-4 last:border-none last:pb-0">
                      <div className="font-serif text-3xl sm:text-4xl font-bold text-[#d48c84]">
                        {st.number}
                      </div>
                      <div className="text-xs font-bold text-[#2d2220] mt-1">
                        {st.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Online Booking Form */}
            <div className="lg:col-span-6">
              <div className="bg-white p-7 sm:p-10 shadow-xl border border-[#f3e3e1]">
                {onlineFormDone ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#fcf5f4] text-[#c2766e] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#2d2220]">
                      Đã nhận thông tin đặt lịch!
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      Chuyên viên tư vấn của <strong>{data.business.name}</strong> sẽ gọi điện
                      xác nhận lịch hẹn VIP cùng quý khách ngay.
                    </p>
                    <button
                      onClick={() => setOnlineFormDone(false)}
                      className="bg-[#d48c84] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 cursor-pointer"
                    >
                      Đặt thêm lịch hẹn khác
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setOnlineFormDone(true);
                    }}
                    className="space-y-4"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Họ tên *"
                      className="w-full bg-[#fcf5f4] border border-transparent focus:border-[#d48c84] px-4 py-3 text-xs sm:text-sm focus:outline-none"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại *"
                        className="w-full bg-[#fcf5f4] border border-transparent focus:border-[#d48c84] px-4 py-3 text-xs sm:text-sm focus:outline-none"
                      />
                      <input
                        type="date"
                        className="w-full bg-[#fcf5f4] border border-transparent focus:border-[#d48c84] px-4 py-3 text-xs sm:text-sm text-stone-600 focus:outline-none"
                      />
                    </div>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#fcf5f4] border border-transparent focus:border-[#d48c84] px-4 py-3 text-xs sm:text-sm text-[#2d2220] focus:outline-none"
                    >
                      {(data.services || thamMyVien2DefaultData.services || []).map(
                        (s) => (
                          <option key={s.id} value={s.title}>
                            Dịch vụ: {s.title}
                          </option>
                        )
                      )}
                    </select>
                    <textarea
                      rows={3}
                      placeholder="Tình trạng da hoặc mong muốn tư vấn thêm..."
                      className="w-full bg-[#fcf5f4] border border-transparent focus:border-[#d48c84] px-4 py-3 text-xs sm:text-sm focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#d48c84] hover:bg-[#c2766e] text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors cursor-pointer"
                    >
                      ĐẶT LỊCH HẸN
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 6-PHOTO INSTAGRAM BEAUTY STRIP + DARK ESPRESSO FOOTER (#2d2220) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {(data.galleryStrip || thamMyVien2DefaultData.galleryStrip).map(
          (img, index) => (
            <div key={index} className="h-48 sm:h-56 overflow-hidden group relative">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#2d2220]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          )
        )}
      </div>

      <footer className="bg-[#2d2220] text-stone-300 pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-xs">
            {/* Col 1: Brand + Newsletter */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#d48c84] text-white flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-serif text-lg font-bold text-white uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-stone-400 leading-relaxed">
                Với sứ mệnh mang lại niềm tin và vẻ đẹp kiêu hãnh cho mọi khách hàng,
                chúng tôi không ngừng cập nhật những công nghệ thẩm mỹ hàng đầu thế giới.
              </p>
              {footerEmailDone ? (
                <p className="text-[#f5d0cb] font-semibold">
                  Đã đăng ký nhận ưu đãi thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFooterEmailDone(true);
                  }}
                  className="flex items-center bg-white/10"
                >
                  <input
                    type="email"
                    required
                    placeholder="Nhập email..."
                    className="bg-transparent text-white px-3 py-2.5 w-full focus:outline-none text-xs"
                  />
                  <button
                    type="submit"
                    className="bg-[#d48c84] hover:bg-[#c2766e] text-white p-2.5 shrink-0 cursor-pointer"
                    aria-label="Send"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Col 2: Danh mục */}
            <div>
              <h4 className="font-bold text-white text-sm mb-4">Danh mục</h4>
              <ul className="space-y-2.5 text-stone-400">
                <li>
                  <a href="#dat-lich-truc-tuyen" className="hover:text-[#d48c84]">
                    Liên hệ đặt lịch
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#d48c84]">
                    Bảng giá dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#d48c84]">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#co-so-vat-chat" className="hover:text-[#d48c84]">
                    Không gian VIP 5 sao
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Liên hệ */}
            <div>
              <h4 className="font-bold text-white text-sm mb-4">Liên hệ</h4>
              <div className="space-y-3 text-stone-300">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#d48c84] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#d48c84] shrink-0" />
                  <span>{primaryEmail}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#d48c84] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="font-bold text-white hover:text-[#d48c84]"
                  >
                    {primaryPhone}
                  </a>
                </p>
              </div>
            </div>

            {/* Col 4: Hình ảnh */}
            <div>
              <h4 className="font-bold text-white text-sm mb-4">Hình ảnh</h4>
              <div className="grid grid-cols-3 gap-2">
                {(data.galleryStrip || thamMyVien2DefaultData.galleryStrip).map(
                  (img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Thumb"
                      className="w-full h-14 object-cover rounded-sm"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <p>© {new Date().getFullYear()} {data.business.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Điều khoản dịch vụ</span>
              <span>/</span>
              <span>Chính sách bảo mật</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
