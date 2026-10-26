"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Phone,
  Stethoscope,
  GraduationCap,
  Home,
  Utensils,
  Award,
  CheckCircle2,
  Star,
  Play,
  Share2,
  Tag,
  MessageSquare,
  Send,
  MapPin,
  Clock,
  Mail,
  ChevronUp,
  X
} from "lucide-react";
import { adaptClonedTemplateData, type ClonedTemplateInput } from "@/lib/demo/clonedTemplateUtils";
import { phongKham9DefaultData, type PhongKham9Data } from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  companyName?: string;
}

export function DemoTemplateRenderer({ data, companyName }: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData(phongKham9DefaultData, {
    ...(data || {}),
    ...(companyName ? { companyName } : {})
  });

  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(merged.quoteFormOptions.petTypes[0] || "");
  const [selectedService, setSelectedService] = useState(
    merged.quoteFormOptions.serviceTypes[0] || ""
  );
  const [quotePhone, setQuotePhone] = useState("");
  const [stayDays, setStayDays] = useState<number>(3);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSaved, setNewsletterSaved] = useState(false);

  const currentReview =
    (merged.testimonials || [])[activeTestimonialIdx] || (merged.testimonials || [])[0];

  return (
    <div id="top" className="min-h-screen bg-white font-sans text-[#1e293b] antialiased">
      {/* Video Preview Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-1.5 text-gray-600 hover:bg-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#f15a24]">
              🐾 KHÁM PHÁ BỆNH VIỆN THÚ Y {merged.business.name}
            </span>
            <h3 className="mt-1 text-lg font-extrabold text-gray-900">
              Quy Trình Khám Sức Khỏe, Spa &amp; Khách Sạn Thú Cưng 5 Sao
            </h3>
            <div className="mt-4 overflow-hidden rounded-2xl">
              <img
                src={merged.videoPreviewImage}
                alt="Video phòng khám"
                className="h-72 w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-gray-600">
              Hệ thống phòng khám chuẩn quốc tế tại {merged.business.address} — Đội ngũ 28+ Bác
              sĩ Thú y và Chuyên viên Grooming luôn tận tâm chăm sóc thú cưng của bạn.
            </p>
          </div>
        </div>
      )}

      {/* ==================== 1. TOP HEADER BAR ==================== */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5">
          {/* Left Circular Orange Emblem Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f15a24] to-[#ff8c00] text-2xl text-white shadow-md">
              🐾
            </div>
            <div className="leading-none">
              <span className="block text-base font-black uppercase tracking-tight text-[#1e293b]">
                {merged.business.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f15a24]">
                MONA MEDIA
              </span>
            </div>
          </a>

          {/* Center Navigation */}
          <nav className="hidden items-center gap-7 text-xs font-bold text-gray-700 lg:flex">
            <a href="#top" className="text-[#f15a24]">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#f15a24]">
              Giới thiệu
            </a>
            <a href="#dich-vu-tan-tam" className="hover:text-[#f15a24]">
              Dịch vụ
            </a>
            <a href="#nhan-bao-gia" className="hover:text-[#f15a24]">
              Sản phẩm
            </a>
            <a href="#tin-tuc" className="hover:text-[#f15a24]">
              Tin tức
            </a>
            <a href="#footer-contact" className="hover:text-[#f15a24]">
              Liên hệ
            </a>
          </nav>

          {/* Right Quick Actions & Orange Phone Pill Button */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-gray-600 hover:text-[#f15a24]"
              aria-label="Tìm kiếm"
            >
              <Search className="h-4 w-4" />
            </button>
            <a
              href="#nhan-bao-gia"
              className="relative text-gray-600 hover:text-[#f15a24]"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#f15a24] text-[9px] font-bold text-white">
                0
              </span>
            </a>
            <button
              type="button"
              className="hidden text-gray-600 hover:text-[#f15a24] sm:inline-flex"
              aria-label="Tài khoản"
            >
              <User className="h-4 w-4" />
            </button>
            <a
              href={`tel:${merged.business.phone[0].replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#f15a24] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#d94b18]"
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>{merged.business.phone[0]}</span>
            </a>
          </div>
        </div>
      </header>

      {/* ==================== 2. HERO SECTION WITH ORGANIC BLOB MASK ==================== */}
      <section className="relative overflow-hidden py-12 lg:py-16">
        {/* Subtle Decorative Paw Watermarks on Left */}
        <div className="pointer-events-none absolute left-6 top-10 select-none text-6xl opacity-[0.04]">
          🐾 🐾 🐾
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-12">
          {/* Left Hero Copy (5 cols) */}
          <div className="lg:col-span-5">
            <h1 className="whitespace-pre-line text-4xl font-black leading-[1.12] tracking-tight text-[#1e293b] sm:text-6xl">
              {merged.hero.title}
            </h1>
            <p className="mt-5 max-w-md text-xs leading-relaxed text-gray-500 sm:text-sm">
              {merged.hero.subtitle}
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href={merged.hero.ctaLink}
                className="inline-block rounded-full bg-[#f15a24] px-7 py-3 text-xs font-extrabold text-white shadow-md transition hover:bg-[#d94b18]"
              >
                {merged.hero.ctaText}
              </a>
              <span className="text-2xl text-[#f9a825]">↝</span>
            </div>
          </div>

          {/* Right Organic Masked Image with Coral, Teal & Yellow Blob Accents (7 cols) */}
          <div className="relative flex items-center justify-center lg:col-span-7">
            {/* Coral blob top-left */}
            <div className="absolute left-8 top-8 z-10 h-14 w-10 rotate-12 rounded-full bg-[#f15a24]" />
            {/* Teal blob bottom-right */}
            <div className="absolute -bottom-6 right-16 z-0 h-28 w-44 rounded-full bg-[#00839b]" />
            {/* Yellow dot bottom-right */}
            <div className="absolute -bottom-8 right-6 z-10 h-9 w-12 rotate-12 rounded-full bg-[#f9a825]" />

            <div className="relative z-10 overflow-hidden rounded-[60px_120px_50px_100px] border-4 border-white shadow-2xl">
              <img
                src={merged.hero.backgroundImage}
                alt={merged.hero.title}
                className="h-[360px] w-full max-w-[640px] object-cover sm:h-[440px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. DỊCH VỤ TẬN TÂM (4 ARCHED SERVICE CARDS + 3 STAT CARDS) ==================== */}
      <section id="dich-vu-tan-tam" className="mx-auto max-w-[1140px] px-4 py-14">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f15a24]">
            🐾 DỊCH VỤ TẬN TÂM
          </p>
          <h2 className="mt-1.5 text-2xl font-black text-[#1e293b] sm:text-3xl">
            Cung cấp dịch vụ
            <br />
            tốt nhất cho thú cưng
          </h2>
        </div>

        {/* 4 Arched Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {merged.serviceCards.map((card) => {
            const IconComp =
              card.iconType === "medical"
                ? Stethoscope
                : card.iconType === "training"
                  ? GraduationCap
                  : card.iconType === "boarding"
                    ? Home
                    : Utensils;
            return (
              <div
                key={card.id}
                className="group flex flex-col items-center rounded-t-[130px] rounded-b-3xl border border-gray-100 bg-white p-4 pb-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Circular Image Top */}
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-[#fff5f0]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlapping Icon Circle */}
                <div className="-mt-6 relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#fff5f0] text-[#f15a24] shadow-sm group-hover:bg-[#f15a24] group-hover:text-white transition-colors">
                  <IconComp className="h-5 w-5" />
                </div>

                <h3 className="mt-4 whitespace-pre-line text-base font-extrabold leading-snug text-[#1e293b]">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-gray-500">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3 Outlined Stat Counter Cards (180 / 68+ / 28+) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {merged.statCounters.map((stat) => (
            <div
              key={stat.id}
              className={`relative flex items-center gap-4 overflow-hidden rounded-2xl border ${stat.borderColor} ${stat.bgColor} px-7 py-5`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-2xs ${stat.iconColor}`}
              >
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-[#1e293b]">{stat.number}</p>
                <p className="text-xs font-medium text-gray-500">{stat.label}</p>
              </div>
              <span className="pointer-events-none absolute -bottom-2 right-3 select-none text-5xl opacity-10">
                🐾
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 4. GIỚI THIỆU (2-COLUMN SPLIT) ==================== */}
      <section id="gioi-thieu" className="mx-auto max-w-[1140px] px-4 py-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Organic Image with Dashed Orange Outline */}
          <div className="relative lg:col-span-6">
            <div className="rounded-[40px_110px_50px_90px] border-2 border-dashed border-[#f15a24] p-3">
              <img
                src={merged.aboutSection.image}
                alt={merged.aboutSection.title}
                className="h-[360px] w-full rounded-[35px_100px_45px_80px] object-cover sm:h-[420px]"
              />
            </div>
          </div>

          {/* Right Copy & Quote Box */}
          <div className="lg:col-span-6">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f15a24]">
              🐾 {merged.aboutSection.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-[#1e293b] sm:text-4xl">
              {merged.aboutSection.title}
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-gray-500 sm:text-sm">
              {merged.aboutSection.description}
            </p>

            {/* Warm Cream Highlight Quote Box */}
            <div className="mt-5 rounded-2xl border-l-4 border-[#f9a825] bg-[#fdf8f3] p-4 text-xs font-semibold italic leading-relaxed text-gray-700">
              {merged.aboutSection.quote}
            </div>

            {/* 2 Feature Columns */}
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {merged.aboutSection.features.map((feat) => (
                <div key={feat.title}>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00839b]" />
                    <h4 className="whitespace-pre-line text-xs font-extrabold text-[#1e293b]">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-gray-500">
                    {feat.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <a
                href="#nhan-bao-gia"
                className="inline-block rounded-full bg-[#f15a24] px-7 py-3 text-xs font-extrabold text-white shadow-md transition hover:bg-[#d94b18]"
              >
                Khám phá
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. 5-PHOTO STRIP & ĐỐI TÁC KINH DOANH ==================== */}
      <section className="mt-6 bg-[#fdf8f3] pb-14 pt-6">
        {/* 5 Photo Cards */}
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-5">
          {merged.galleryStrip.map((imgUrl, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src={imgUrl}
                alt={`Thú cưng ${idx + 1}`}
                className="h-56 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Partner Strip */}
        <div className="mx-auto mt-12 max-w-[1000px] px-4 text-center">
          <p className="text-xs font-extrabold text-[#1e293b]">Đối tác kinh doanh</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {merged.partnerLogos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-black tracking-wider text-gray-400 transition hover:text-[#f15a24]"
              >
                🐾 {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. KHÁCH HÀNG PHẢN HỒI + VIDEO PREVIEW ==================== */}
      <section className="mx-auto max-w-[1140px] px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Testimonial (5 cols) */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f15a24]">
              🐾 KHÁCH HÀNG PHẢN HỒI
            </p>
            <h2 className="mt-1.5 text-2xl font-black leading-tight text-[#1e293b] sm:text-3xl">
              Khách hàng đánh giá
              <br />
              về dịch vụ
            </h2>

            {currentReview && (
              <div className="mt-6">
                <div className="flex items-center gap-3.5">
                  <img
                    src={
                      currentReview.avatar ||
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                    }
                    alt={currentReview.name}
                    className="h-14 w-14 rounded-full border-2 border-[#f9a825] object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-0.5 text-[#f9a825]">
                      {Array.from({ length: currentReview.rating || 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <h4 className="mt-0.5 text-sm font-extrabold text-[#1e293b]">
                      {currentReview.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-[#5eb946]">
                      {currentReview.role}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-gray-500">
                  &ldquo;{currentReview.content}&rdquo;
                </p>

                {/* Carousel Dots */}
                <div className="mt-5 flex items-center gap-2">
                  {(merged.testimonials || []).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveTestimonialIdx(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        activeTestimonialIdx === idx ? "bg-[#f15a24]" : "bg-orange-200"
                      }`}
                      aria-label={`Đánh giá ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Wavy Video Thumbnail (7 cols) */}
          <div className="lg:col-span-7">
            <div
              onClick={() => setVideoModalOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-[70px_40px_80px_40px] shadow-xl"
            >
              <img
                src={merged.videoPreviewImage}
                alt="Video chăm sóc thú cưng"
                className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[360px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#f15a24] shadow-2xl transition group-hover:scale-110">
                  <Play className="ml-0.5 h-6 w-6 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. GẶP GỠ CÁC CHUYÊN GIA ĐƯỢC CHỨNG NHẬN (3 BLOB PORTRAITS) ==================== */}
      <section className="mx-auto max-w-[1040px] px-4 py-12 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f15a24]">
          🐾 NHÂN VIÊN CHĂM SÓC
        </p>
        <h2 className="mt-1.5 text-2xl font-black text-[#1e293b] sm:text-3xl">
          Gặp gỡ các chuyên gia
          <br />
          được chứng nhận
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {merged.specialists.map((sp) => (
            <div key={sp.id} className="flex flex-col items-center">
              {/* Colorful Organic Blob Backing + Circular Portrait */}
              <div className="relative flex h-60 w-60 items-center justify-center">
                <div
                  className="absolute inset-2 rotate-12 rounded-[45%_55%_60%_40%/50%_45%_55%_50%]"
                  style={{ backgroundColor: sp.blobColor }}
                />
                <div className="relative z-10 h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <img
                    src={sp.image}
                    alt={sp.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  className="absolute bottom-2 left-1/2 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:text-[#f15a24]"
                  aria-label="Chia sẻ"
                >
                  <Share2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <h3 className="mt-4 text-base font-extrabold text-[#1e293b]">{sp.name}</h3>
              <p className={`mt-0.5 text-[10px] font-bold uppercase ${sp.roleColor}`}>
                {sp.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 8. LET'S MAKE A NEW FRIEND + NHẬN BÁO GIÁ FORM ==================== */}
      <section id="nhan-bao-gia" className="mx-auto max-w-[1140px] px-4 py-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Colorful Typography & Ginger Cat Image (6 cols) */}
          <div className="relative lg:col-span-6">
            <div className="mb-4">
              <span className="block text-xl font-bold text-[#1e293b]">Let&apos;s</span>
              <span className="block text-5xl font-black leading-none text-[#5eb946] sm:text-6xl">
                make
              </span>
              <span className="block text-xl font-bold text-[#f9a825]">a new</span>
              <span className="block text-5xl font-black leading-none text-[#f15a24] sm:text-6xl">
                Friend
              </span>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=85"
                alt="Let's make a new friend"
                className="h-72 w-full object-cover sm:h-80"
              />
            </div>
          </div>

          {/* Right White Quote Card ("🐾 ĐẶT LỊCH NGAY — Nhận báo giá") (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl sm:p-10">
              <div className="text-center">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f15a24]">
                  🐾 ĐẶT LỊCH NGAY
                </p>
                <h3 className="mt-1 text-2xl font-black text-[#1e293b]">Nhận báo giá</h3>
              </div>

              {quoteSubmitted ? (
                <div className="mt-6 rounded-2xl bg-green-50 p-6 text-center text-xs text-green-800">
                  <CheckCircle2 className="mx-auto mb-2 h-9 w-9 text-[#5eb946]" />
                  <p className="text-sm font-extrabold">Đã gửi yêu cầu báo giá &amp; đặt lịch!</p>
                  <p className="mt-1">
                    Chuyên viên {merged.business.name} sẽ gọi lại số{" "}
                    <strong>{quotePhone}</strong> trong 5 phút cho gói{" "}
                    <strong>{selectedService}</strong> ({stayDays} ngày).
                  </p>
                  <button
                    type="button"
                    onClick={() => setQuoteSubmitted(false)}
                    className="mt-4 rounded-full bg-[#f15a24] px-5 py-2 text-xs font-bold text-white"
                  >
                    Đặt lịch thêm
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuoteSubmitted(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div>
                    <select
                      aria-label="Chọn thú cưng"
                      value={selectedPet}
                      onChange={(e) => setSelectedPet(e.target.value)}
                      className="w-full rounded-full bg-[#f7f4f0] px-5 py-3 text-xs font-medium text-gray-700 focus:outline-2 focus:outline-[#f15a24]"
                    >
                      {merged.quoteFormOptions.petTypes.map((pt) => (
                        <option key={pt} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <select
                      aria-label="Chọn dịch vụ"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full rounded-full bg-[#f7f4f0] px-5 py-3 text-xs font-medium text-gray-700 focus:outline-2 focus:outline-[#f15a24]"
                    >
                      {merged.quoteFormOptions.serviceTypes.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      value={quotePhone}
                      onChange={(e) => setQuotePhone(e.target.value)}
                      placeholder="Số điện thoại *"
                      className="w-full rounded-full bg-[#f7f4f0] px-5 py-3 text-xs font-medium text-gray-700 placeholder-gray-400 focus:outline-2 focus:outline-[#f15a24]"
                    />
                  </div>

                  <div className="pt-1">
                    <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-gray-600">
                      <span>Số ngày</span>
                      <span className="rounded-full bg-[#5eb946] px-2.5 py-0.5 text-[11px] text-white">
                        {stayDays}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={14}
                      value={stayDays}
                      onChange={(e) => setStayDays(Number(e.target.value))}
                      className="w-full accent-[#5eb946]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#f15a24] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition hover:bg-[#d94b18]"
                  >
                    Gửi
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 9. TIN TỨC MỚI NHẤT (4 CARDS WITH 04 TH5 GREEN RIBBON) ==================== */}
      <section id="tin-tuc" className="bg-[#fdf8f3] py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f15a24]">
            🐾 TIN TỨC
          </p>
          <h2 className="mt-1 text-2xl font-black text-[#1e293b] sm:text-3xl">
            Tin tức mới nhất
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merged.blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {/* Green vertical date ribbon on left */}
                    <span className="absolute bottom-3 left-0 rounded-r-full bg-[#5eb946] px-3 py-1 text-[10px] font-extrabold uppercase text-white shadow-xs">
                      {post.dateRibbon}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[11px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <Tag className="h-3 w-3 text-[#00839b]" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3 text-[#00839b]" />
                        {post.commentsCount} Bình luận
                      </span>
                    </div>

                    <h3 className="mt-2.5 line-clamp-2 text-sm font-extrabold leading-snug text-[#1e293b] group-hover:text-[#f15a24]">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <a
                    href="#nhan-bao-gia"
                    className="inline-block rounded-full bg-[#f7f4f0] px-4 py-1.5 text-[11px] font-bold text-gray-700 transition group-hover:bg-[#f15a24] group-hover:text-white"
                  >
                    Đọc thêm
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 10. OVERLAPPING GOLDEN NEWSLETTER + DARK CHARCOAL FOOTER ==================== */}
      <footer id="footer-contact" className="relative bg-[#1e1e1e] pt-24 text-gray-300">
        {/* Overlapping Golden Newsletter Banner */}
        <div className="mx-auto -mt-36 mb-12 max-w-[1000px] px-4">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#fbb03b] px-6 py-7 text-white shadow-xl md:flex-row md:px-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base font-extrabold leading-snug sm:text-lg">
                Đăng ký ngay để được
                <br />
                nhận tin tức mới nhất.
              </h3>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) {
                  setNewsletterSaved(true);
                  setNewsletterEmail("");
                }
              }}
              className="flex w-full max-w-md items-center border-b border-white/70 pb-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Địa chỉ email..."
                className="flex-1 bg-transparent text-xs text-white placeholder-white/80 focus:outline-none"
              />
              <button
                type="submit"
                className="text-white hover:scale-110"
                aria-label="Đăng ký"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
          {newsletterSaved && (
            <p className="mt-2 text-center text-xs font-bold text-[#fbb03b]">
              ✓ Đã đăng ký nhận bản tin Chăm sóc Thú cưng thành công!
            </p>
          )}
        </div>

        {/* 4-Column Footer */}
        <div className="mx-auto max-w-[1140px] px-4 pb-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f15a24] text-xl text-white">
                  🐾
                </div>
                <div>
                  <span className="block text-sm font-black uppercase text-white">
                    {merged.business.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-[#f15a24]">
                    MONA MEDIA
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-400">
                Hệ thống Bệnh viện &amp; Phòng khám Thú y Quốc tế chuyên khám chữa bệnh, tiêm
                phòng, spa grooming và khách sạn thú cưng uy tín.
              </p>
              <div className="mt-5 flex items-center gap-2.5">
                {["tw", "fb", "pi", "ig"].map((soc) => (
                  <a
                    key={soc}
                    href="#top"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white hover:bg-[#f15a24]"
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Links */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-white">
                Danh mục
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <a href="#dich-vu-tan-tam" className="hover:text-[#f15a24]">
                    Dịch vụ Thú y
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#f15a24]">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#nhan-bao-gia" className="hover:text-[#f15a24]">
                    Khách sạn thú cưng
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#f15a24]">
                    Tin tức mới nhất
                  </a>
                </li>
                <li>
                  <a href="#footer-contact" className="hover:text-[#f15a24]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Gallery 2x3 */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-white">
                Thư viện ảnh
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {merged.footerGallery.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`Gallery ${idx + 1}`}
                    className="h-14 w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-white">
                Liên hệ
              </h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f15a24]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#f15a24]" />
                  <span>{merged.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-[#f15a24]" />
                  <span>{merged.business.workingHours}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#f15a24]" />
                  <span>{merged.business.email[0]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 py-4 text-center text-[11px] text-gray-400">
          © Thiết kế và lập trình bởi <strong className="text-white">MONA.Media / Website</strong>
        </div>

        {/* Scroll To Top Button */}
        <a
          href="#top"
          className="fixed bottom-5 right-5 z-40 flex h-9 w-9 items-center justify-center rounded bg-[#fbb03b] text-white shadow-lg hover:bg-[#f15a24]"
          aria-label="Lên đầu trang"
        >
          <ChevronUp className="h-4 w-4" />
        </a>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
