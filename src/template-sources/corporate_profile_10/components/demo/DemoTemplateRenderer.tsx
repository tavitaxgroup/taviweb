"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile10DefaultData,
  type CorporateProfile10Data
} from "../../data/mockData";
import {
  Truck,
  Ship,
  Plane,
  Check,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: CorporateProfile10Data = adaptClonedTemplateData(
    corporateProfile10DefaultData,
    incomingData || customData
  );

  const [activeServiceTabId, setActiveServiceTabId] = useState<string>(
    data.serviceTabs?.[2]?.id || "tab-air"
  );
  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqs?.[0]?.id || "faq-1"
  );
  const [consultSubmitted, setConsultSubmitted] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const activeServiceTab =
    data.serviceTabs.find((t) => t.id === activeServiceTabId) ||
    data.serviceTabs[0];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#ff4d1c] selection:text-white">
      {/* 1. WHITE NAVBAR */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#ff4d1c] text-white flex items-center justify-center font-black text-lg shadow-sm">
              ▲
            </div>
            <span className="text-xl font-black tracking-wider uppercase text-slate-900">
              {data.business.name}
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-700">
            <a href="#" className="text-[#ff4d1c]">
              Trang Chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#ff4d1c] transition-colors"
            >
              Giới Thiệu
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#ff4d1c] transition-colors"
            >
              Dịch Vụ Vận Chuyển
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#ff4d1c] transition-colors"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#ff4d1c] transition-colors"
            >
              Liên Hệ
            </a>
          </nav>

          {/* Right Quote Button */}
          <a
            href="#lien-he"
            className="px-5 py-2.5 bg-[#ff4d1c] hover:bg-[#e03e10] text-white text-xs font-extrabold uppercase tracking-wider rounded shadow-sm transition-colors"
          >
            YÊU CẦU BÁO GIÁ
          </a>
        </div>
      </header>

      {/* 2. HERO BANNER */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        </div>

        {/* Left & Right Slider Arrows */}
        <button
          type="button"
          aria-label="Slide trước"
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-[#ff4d1c] backdrop-blur-sm items-center justify-center text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Slide tiếp"
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-[#ff4d1c] backdrop-blur-sm items-center justify-center text-white transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-28 sm:py-36">
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.18] tracking-tight">
              {data.hero.title}
            </h1>
            <div>
              <a
                href={data.hero.ctaLink || "#lien-he"}
                className="inline-block px-7 py-3 bg-[#ff4d1c] hover:bg-[#e03e10] text-white text-xs font-extrabold uppercase tracking-wider rounded shadow-lg transition-colors"
              >
                {data.hero.ctaText || "LIÊN HỆ"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-COLUMN ORANGE FEATURE STRIP (`#ff4d1c`) */}
      <section className="bg-[#ff4d1c] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/25">
            {data.orangeStripFeatures.map((item) => (
              <div
                key={item.id}
                className="px-6 py-4 flex flex-col items-center text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                  {item.iconType === "truck" ? (
                    <Truck className="w-6 h-6 text-white" />
                  ) : item.iconType === "ship" ? (
                    <Ship className="w-6 h-6 text-white" />
                  ) : (
                    <Plane className="w-6 h-6 text-white" />
                  )}
                </div>
                <p className="text-xs font-bold leading-relaxed max-w-xs">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION ("GIAO HÀNG NHANH CHÓNG VÀ AN TOÀN") */}
      <section id="gioi-thieu" className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image + 20 Years Badge */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/4.8]">
                <img
                  src={data.aboutSection.image}
                  alt="Vận tải container"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-5 -right-4 bg-white px-7 py-5 shadow-xl border-r-8 border-b-8 border-[#ff4d1c] text-center">
                <div className="text-3xl font-black text-[#ff4d1c] leading-none">
                  {data.aboutSection.yearsNumber}
                </div>
                <div className="text-xs font-extrabold text-slate-800 mt-1">
                  {data.aboutSection.yearsLabel}
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase leading-snug text-slate-900">
                GIAO HÀNG{" "}
                <span className="text-[#ff4d1c]">NHANH CHÓNG VÀ AN TOÀN</span>
              </h2>

              {(data.business.aboutText || []).map((para, idx) => (
                <p
                  key={idx}
                  className="text-xs sm:text-sm text-slate-500 leading-relaxed"
                >
                  {para}
                </p>
              ))}

              <div className="space-y-2 pt-2">
                {data.aboutSection.checkpoints.map((cp) => (
                  <div
                    key={cp}
                    className="flex items-center gap-2.5 text-xs font-extrabold text-slate-800"
                  >
                    <Check className="w-4 h-4 text-[#ff4d1c]" />
                    <span>{cp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE 5-TAB SERVICES SECTION ("DỊCH VỤ - TẬN TÂM PHỤC VỤ") */}
      <section id="dich-vu" className="py-20 bg-[#f7f8fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">
              DỊCH VỤ
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              <span className="text-[#ff4d1c]">TẬN TÂM</span> PHỤC VỤ
            </h2>
          </div>

          {/* 5 Horizontal Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {data.serviceTabs.map((tab) => {
              const isActive = tab.id === activeServiceTab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveServiceTabId(tab.id)}
                  className={`relative py-3.5 px-3 rounded text-[11px] font-extrabold uppercase tracking-wider transition-all shadow-sm ${
                    isActive
                      ? "bg-[#ff4d1c] text-white shadow-md"
                      : "bg-white text-slate-700 hover:text-[#ff4d1c]"
                  }`}
                >
                  {tab.tabLabel}
                  {isActive && (
                    <span className="hidden lg:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#ff4d1c]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left 3-Image Collage */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-3">
              <div className="col-span-7 rounded overflow-hidden shadow-md aspect-[3/3.5]">
                <img
                  src={activeServiceTab.mainImage}
                  alt={activeServiceTab.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 flex flex-col gap-3">
                <div className="rounded overflow-hidden shadow-md flex-1">
                  <img
                    src={activeServiceTab.subImage1}
                    alt={activeServiceTab.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded overflow-hidden shadow-md flex-1">
                  <img
                    src={activeServiceTab.subImage2}
                    alt={activeServiceTab.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Tab Details */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-900">
                {activeServiceTab.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {activeServiceTab.description}
              </p>

              <div className="space-y-2 pt-1">
                {activeServiceTab.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2.5 text-xs font-bold text-slate-800"
                  >
                    <span className="w-3 h-3 rounded-full border-2 border-[#ff4d1c]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#lien-he"
                  className="inline-block px-6 py-2.5 bg-[#ff4d1c] hover:bg-[#e03e10] text-white text-xs font-extrabold uppercase tracking-wider rounded shadow"
                >
                  LIÊN HỆ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH DARK PARALLAX CTA BANNER */}
      <section className="relative py-24 bg-slate-900 text-white text-center overflow-hidden">
        <img
          src={data.ctaBanner.backgroundImage}
          alt="Giải pháp vận hành logistics"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-snug">
            {data.ctaBanner.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {data.ctaBanner.description}
          </p>
          <div className="pt-2">
            <a
              href="#lien-he"
              className="inline-block px-7 py-3 bg-[#ff4d1c] hover:bg-[#e03e10] text-white text-xs font-extrabold uppercase tracking-wider rounded shadow-lg transition-colors"
            >
              {data.ctaBanner.buttonText}
            </a>
          </div>
        </div>
      </section>

      {/* 7. LONG-TERM PARTNERS GRID ("ĐỐI TÁC LÂU NĂM") */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold uppercase text-slate-900 mb-10">
            <span className="text-[#ff4d1c]">ĐỐI TÁC</span> LÂU NĂM
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="bg-white rounded-lg shadow-sm border border-slate-100 h-24 flex items-center justify-center px-6 hover:border-[#ff4d1c] transition-colors"
              >
                <span className="text-base sm:text-lg font-black tracking-wider text-slate-800">
                  {cl.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION ("CÂU HỎI THƯỜNG GẶP") */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Giant Container Ship Photo */}
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/4.2]">
                <img
                  src={data.faqShipImage}
                  alt="Tàu container quốc tế"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900 mb-4">
                <span className="text-[#ff4d1c]">CÂU HỎI</span> THƯỜNG GẶP
              </h2>

              <div className="space-y-3">
                {data.faqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="rounded border border-slate-200 overflow-hidden bg-white shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                        className={`w-full px-5 py-3.5 flex items-center justify-between text-left text-xs sm:text-sm font-bold transition-colors ${
                          isOpen
                            ? "bg-[#ff4d1c] text-white"
                            : "bg-white text-slate-800 hover:bg-slate-50"
                        }`}
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-5 text-xs text-slate-500 leading-relaxed bg-white">
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

      {/* 9. CUSTOMER TESTIMONIALS ("ĐÁNH GIÁ CỦA KHÁCH HÀNG") */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold uppercase text-slate-900 mb-12">
            ĐÁNH GIÁ CỦA <span className="text-[#ff4d1c]">KHÁCH HÀNG</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(data.testimonials || []).map((rv) => (
              <div key={rv.id} className="space-y-5">
                {/* Speech Bubble */}
                <div className="relative bg-white rounded-xl p-7 shadow-md border border-slate-100">
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {Array.from({ length: rv.rating || 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {rv.content}
                  </p>
                  <span className="absolute -bottom-3 left-8 w-6 h-6 bg-white rotate-45 border-r border-b border-slate-100" />
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pl-4">
                  <img
                    src={rv.avatar}
                    alt={rv.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#ff4d1c]"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">
                      {rv.author}
                    </div>
                    <div className="text-[11px] text-slate-400">{rv.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d1c]" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      {/* 10. LATEST NEWS SECTION ("TIN TỨC MỚI NHẤT") */}
      <section id="tin-tuc" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold uppercase text-slate-900 mb-12">
            <span className="text-[#ff4d1c]">TIN TỨC</span> MỚI NHẤT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => {
              const [day, month] = post.date.split(" ");
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-lg border border-slate-100 shadow-md overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white text-slate-900 rounded px-2.5 py-1 text-center leading-tight shadow">
                        <div className="text-xs font-black">{day || "30"}</div>
                        <div className="text-[9px] font-bold text-slate-500">
                          {month || "Th9"}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <div className="text-[10px] text-slate-400">
                        {data.business.name} • 2 Bình Luận
                      </div>
                      <h3 className="text-sm font-extrabold text-slate-900 hover:text-[#ff4d1c] line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <a
                      href="#lien-he"
                      className="inline-block px-4 py-2 bg-[#ff4d1c] hover:bg-[#e03e10] text-white text-[10px] font-extrabold uppercase tracking-wider rounded"
                    >
                      CHI TIẾT
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CONSULTATION SECTION */}
      <section className="py-16 bg-[#f7f8fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-900 leading-snug">
                BẠN ĐANG PHÂN VĂN VỀ{" "}
                <span className="text-[#ff4d1c]">DỊCH VỤ</span> CỦA CHÚNG TÔI?
              </h2>
              <p className="text-xs text-slate-500">
                Liên hệ trực tiếp để chúng tôi có thể hỗ trợ sớm nhất cho bạn
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultSubmitted(true);
                }}
                className="flex flex-wrap sm:flex-nowrap gap-2 pt-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập email..."
                  className="flex-1 px-4 py-3 rounded bg-white border border-slate-200 text-xs focus:outline-none focus:border-[#ff4d1c]"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#ff4d1c] hover:bg-[#e03e10] text-white text-xs font-extrabold uppercase tracking-wider rounded flex items-center gap-1.5 shrink-0"
                >
                  <span>GỬI LIÊN HỆ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {consultSubmitted && (
                <div className="text-xs font-bold text-[#ff4d1c]">
                  ✓ Đã nhận thông tin! Chuyên viên điều phối sẽ liên hệ ngay.
                </div>
              )}
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden shadow-lg aspect-[16/10]">
                <img
                  src={data.bottomConsultImage}
                  alt="Tư vấn vận tải quốc tế"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. DARK CHARCOAL FOOTER (`#1f2428`) */}
      <footer id="lien-he" className="bg-[#1f2428] text-slate-300 pt-14 pb-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-xs">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-[#ff4d1c] text-white flex items-center justify-center font-black">
                  ▲
                </div>
                <span className="text-base font-black uppercase text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Đội ngũ chuyên nghiệp và hệ thống vận chuyển tiên tiến, chúng
                tôi cam kết mang đến sự hài lòng cao nhất cho khách hàng.
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center text-[11px] font-bold"
                >
                  𝕏
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center text-[11px] font-bold"
                >
                  ▶
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white font-extrabold uppercase tracking-wider mb-3">
                DANH MỤC
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li className="text-[#ff4d1c]">Trang chủ</li>
                <li>Giới thiệu</li>
                <li>Dịch vụ vận chuyển</li>
                <li>Tin tức</li>
                <li>Liên hệ</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white font-extrabold uppercase tracking-wider mb-3">
                DỊCH VỤ
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>Vận tải đường bộ</li>
                <li>Vận tải đường biển</li>
                <li>Vận tải đường sắt</li>
                <li>Vận tải hàng không</li>
                <li>Kỹ thuật kho bãi</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-white font-extrabold uppercase tracking-wider mb-3">
                LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#ff4d1c] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#ff4d1c] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ff4d1c] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-slate-400">
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
