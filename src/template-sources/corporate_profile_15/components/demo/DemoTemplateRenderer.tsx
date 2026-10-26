"use client";

import React, { useState } from "react";
import {
  Search,
  Menu,
  UserCheck,
  Crown,
  Award,
  Smartphone,
  Rocket,
  Settings,
  Layout,
  Presentation,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile15DefaultData,
  type CorporateProfile15Data,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: CorporateProfile15Data = adaptClonedTemplateData(
    corporateProfile15DefaultData,
    incomingData
  );

  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [newsletterSubscribed, setNewsletterSubscribed] =
    useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "contact@tkwthuonghieu.vn";

  const renderPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case "user":
        return <UserCheck className="w-5 h-5 text-white" />;
      case "crown":
        return <Crown className="w-5 h-5 text-white" />;
      case "award":
        return <Award className="w-5 h-5 text-white" />;
      case "smartphone":
        return <Smartphone className="w-5 h-5 text-white" />;
      case "rocket":
        return <Rocket className="w-5 h-5 text-white" />;
      default:
        return <Settings className="w-5 h-5 text-white" />;
    }
  };

  const renderServiceIcon = (iconName?: string) => {
    switch (iconName) {
      case "search":
        return <Search className="w-10 h-10 text-[#444444] stroke-[1.4]" />;
      case "layout":
        return <Layout className="w-10 h-10 text-[#444444] stroke-[1.4]" />;
      case "presentation":
        return (
          <Presentation className="w-10 h-10 text-[#444444] stroke-[1.4]" />
        );
      default:
        return <Rocket className="w-10 h-10 text-[#444444] stroke-[1.4]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#555CE8] selection:text-white">
      {/* HERO + ROYAL BLUE-PURPLE HEADER (Matches DN018-corporate_profile_15.jpg) */}
      <section className="relative bg-gradient-to-br from-[#4D54E2] via-[#565DE8] to-[#474ED9] text-white overflow-hidden pb-16">
        {/* Decorative Subtle Geometric Background Shapes */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-white/5" />

        {/* Top Navbar */}
        <header className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-white text-[#4D54E2] flex items-center justify-center font-black text-sm shadow-md">
                TKW
              </div>
            )}
          </a>

          {/* Center Search Input */}
          <div className="hidden sm:flex items-center bg-white/20 backdrop-blur-xs rounded-full px-4 py-1.5 w-56 lg:w-64">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="bg-transparent text-xs text-white placeholder-white/80 w-full focus:outline-none"
            />
            <Search className="w-3.5 h-3.5 text-white shrink-0 ml-2" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-[#19C37D] transition-colors">
              TRANG CHỦ
            </a>
            <a
              href="#nguyen-tac"
              className="hover:text-[#19C37D] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#19C37D] transition-colors"
            >
              DỊCH VỤ ⌄
            </a>
            <a
              href="#chia-se"
              className="hover:text-[#19C37D] transition-colors"
            >
              BLOG
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#19C37D] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Social + Green Circle Menu Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setConsultModalOpen(true)}
              aria-label="Mở tư vấn"
              className="w-8 h-8 rounded-full bg-[#19C37D] hover:bg-[#13a468] text-white flex items-center justify-center shadow-md transition-colors"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Hero Split Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6">
            <span className="font-serif font-bold text-sm text-white/95">
              {data.hero.eyebrow || `Thiết Kế Web ${data.business.name} !`}
            </span>
            <h1 className="mt-2 text-2xl sm:text-3xl lg:text-[34px] font-serif font-extrabold leading-snug whitespace-pre-line">
              {data.hero.title}
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-white/90 leading-relaxed">
              {data.hero.subtitle}
            </p>
            <div className="mt-7">
              <a
                href={data.hero.ctaLink || "#nguyen-tac"}
                className="inline-block px-7 py-2.5 rounded-full border border-white/80 hover:bg-white hover:text-[#4D54E2] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                {data.hero.ctaText || "XEM THÊM"}
              </a>
            </div>
          </div>

          {/* Right Team Strategy Visual Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/20 shadow-2xl">
              <img
                src={data.hero.backgroundImage}
                alt={data.business.name}
                className="w-full h-64 sm:h-72 object-cover rounded-xl"
              />
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/15 rounded-lg py-2 px-2">
                  <span className="block text-sm font-extrabold">100%</span>
                  <span className="block text-[10px] text-white/80">
                    Chuẩn SEO Google
                  </span>
                </div>
                <div className="bg-white/15 rounded-lg py-2 px-2">
                  <span className="block text-sm font-extrabold">&lt; 0.8s</span>
                  <span className="block text-[10px] text-white/80">
                    Tốc độ phản hồi
                  </span>
                </div>
                <div className="bg-white/15 rounded-lg py-2 px-2">
                  <span className="block text-sm font-extrabold">24/7</span>
                  <span className="block text-[10px] text-white/80">
                    Bảo hành trọn đời
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NGUYÊN TẮC LÀM VIỆC CỦA CHÚNG TÔI (6 White Cards with Colorful Icon Badges) */}
      <section id="nguyen-tac" className="py-16 lg:py-20 bg-[#FAFAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="font-serif font-bold text-xs text-[#333333]">
              Thiết Kế Web {data.business.name}
            </span>
            <h2 className="mt-1 text-xl sm:text-2xl font-serif font-extrabold text-[#111111]">
              Nguyên Tắc Làm Việc Của Chúng Tôi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.principles.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 shadow-sm border border-[#f0f0f5] hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    style={{ backgroundColor: item.badgeColor }}
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-xs"
                  >
                    {renderPrincipleIcon(item.icon)}
                  </div>
                  <h3 className="text-xs font-serif font-extrabold text-[#111111] leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CHÚNG TÔI CÓ MỘT ĐỘI NGŨ CHUYÊN VIÊN NHIỀU KINH NGHIỆM + ANALYTICS WIDGET */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Text */}
            <div className="lg:col-span-6">
              <span className="font-serif font-bold text-xs text-[#333333]">
                {data.expertSection.eyebrow}
              </span>
              <h2 className="mt-1.5 text-xl sm:text-2xl font-serif font-extrabold text-[#111111] leading-snug">
                {data.business.aboutTitle || data.expertSection.title}
              </h2>
              {(data.business.aboutText || data.expertSection.paragraphs).map(
                (p, idx) => (
                  <p
                    key={idx}
                    className="mt-3.5 text-xs text-[#666666] leading-relaxed"
                  >
                    {p}
                  </p>
                )
              )}
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => setConsultModalOpen(true)}
                  className="px-7 py-2.5 rounded-full bg-[#19C37D] hover:bg-[#13a468] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                >
                  {data.expertSection.ctaText}
                </button>
              </div>
            </div>

            {/* Right Interactive Analytics Donut & Bar Chart Card (Matches screenshot) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative flex items-center gap-4">
                {/* Main Donut Card */}
                <div className="bg-white rounded-xl shadow-xl border border-[#eef0f6] p-6 w-64 text-center relative z-10">
                  <h4 className="text-xs font-bold text-[#333333] mb-4">
                    Chỉ Số Tối Ưu Liên Kết & SEO
                  </h4>
                  {/* CSS Donut Ring */}
                  <div className="w-28 h-28 mx-auto rounded-full border-[14px] border-[#555CE8] border-r-[#E91E63] border-b-[#9C27B0] flex items-center justify-center">
                    <span className="text-sm font-extrabold text-[#222222]">
                      98.4%
                    </span>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2 text-left">
                    <div className="bg-[#EEF0FF] p-2.5 rounded-md">
                      <span className="block text-sm font-extrabold text-[#4D54E2]">
                        58%
                      </span>
                      <span className="block text-[9px] text-[#666666]">
                        Tăng trưởng tự nhiên
                      </span>
                    </div>
                    <div className="bg-[#FCE8EF] p-2.5 rounded-md">
                      <span className="block text-sm font-extrabold text-[#E91E63]">
                        23%
                      </span>
                      <span className="block text-[9px] text-[#666666]">
                        Tối ưu chuyển đổi
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Bar Chart Card */}
                <div className="hidden sm:flex flex-col justify-end bg-white rounded-xl shadow-lg border border-[#eef0f6] p-5 w-44 h-48 -ml-6 mt-8">
                  <div className="flex items-end justify-between gap-2 h-28 px-2">
                    <div className="w-4 bg-[#3B82F6] h-24 rounded-t-xs" />
                    <div className="w-4 bg-[#60A5FA] h-14 rounded-t-xs" />
                    <div className="w-4 bg-[#3B82F6] h-20 rounded-t-xs" />
                    <div className="w-4 bg-[#2563EB] h-16 rounded-t-xs" />
                  </div>
                  <div className="mt-3 border-t border-[#f0f0f0] pt-2 flex justify-between text-[9px] text-[#888888]">
                    <span>Tốc độ</span>
                    <span>Bảo mật</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LÝ DO BẠN NÊN CHỌN CHÚNG TÔI (Lavender-Gray #F2F3F9 Section) */}
      <section className="py-16 lg:py-20 bg-[#F2F3F9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Team Consulting Visual */}
            <div className="lg:col-span-6">
              <div className="bg-white p-3 rounded-2xl shadow-md">
                <img
                  src={data.whyChooseSection.image}
                  alt={data.whyChooseSection.title}
                  className="w-full h-64 sm:h-72 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6">
              <span className="font-serif font-bold text-xs text-[#333333]">
                {data.whyChooseSection.eyebrow}
              </span>
              <h2 className="mt-1.5 text-xl sm:text-2xl font-serif font-extrabold text-[#111111] leading-snug">
                {data.whyChooseSection.title}
              </h2>
              <p className="mt-3.5 text-xs text-[#666666] leading-relaxed">
                {data.whyChooseSection.description}
              </p>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => setConsultModalOpen(true)}
                  className="px-7 py-2.5 rounded-full bg-[#19C37D] hover:bg-[#13a468] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                >
                  {data.whyChooseSection.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DỊCH VỤ CỦA CHÚNG TÔI (Royal Blue-Purple #555CE8 Banner with 4 White Cards) */}
      <section
        id="dich-vu"
        className="py-16 lg:py-20 bg-gradient-to-br from-[#4D54E2] via-[#565DE8] to-[#474ED9] text-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="font-serif font-bold text-xs text-white/90">
            Thiết Kế Web {data.business.name}
          </span>
          <h2 className="mt-1 text-xl sm:text-2xl font-serif font-extrabold">
            Dịch Vụ Của Chúng Tôi
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.services || []).map((srv) => (
              <div
                key={srv.id}
                className="bg-white text-[#222222] rounded-lg p-6 shadow-lg flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
              >
                <div className="mb-4">{renderServiceIcon(srv.icon)}</div>
                <h3 className="text-sm font-serif font-extrabold text-[#111111] group-hover:text-[#555CE8] transition-colors">
                  {srv.title}
                </h3>
                <p className="mt-2.5 text-xs text-[#666666] leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => setConsultModalOpen(true)}
              className="px-8 py-2.5 rounded-full bg-[#19C37D] hover:bg-[#13a468] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
            >
              XEM THÊM
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: CHIA SẺ KINH NGHIỆM (3 Blog Cards + Purple Button) */}
      <section id="chia-se" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-serif font-bold text-xs text-[#333333]">
              Thiết Kế Web {data.business.name}
            </span>
            <h2 className="mt-1 text-xl sm:text-2xl font-serif font-extrabold text-[#111111]">
              Chia Sẻ Kinh Nghiệm
            </h2>
            <p className="mt-3 text-xs text-[#666666] leading-relaxed">
              Chúng tôi là công ty chuyên thiết kế website giúp các doanh nghiệp
              xây dựng thương hiệu trên internet. Với những kinh nghiệm mà chúng
              tôi có được, chúng tôi muốn chia sẻ những kiến thức này cho những
              người muốn xây dựng thương hiệu online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="h-44 overflow-hidden rounded-xs mb-3.5 bg-[#f2f3f8]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-serif font-extrabold text-[#111111] group-hover:text-[#555CE8] transition-colors leading-snug">
                  {post.title}
                </h3>
                <span className="mt-1.5 flex items-center gap-1 text-[10px] text-[#999999]">
                  <Calendar className="w-3 h-3 text-[#F5B841]" />
                  {post.date}
                </span>
                <p className="mt-2 text-xs text-[#666666] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href="#lien-he"
                  className="mt-2.5 inline-block text-[11px] font-bold text-[#19C37D] hover:underline self-start"
                >
                  Xem Thêm ›
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#lien-he"
              className="inline-block px-8 py-2.5 rounded-full bg-[#555CE8] hover:bg-[#4148d1] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
            >
              XEM THÊM
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (Dark Charcoal #1E2022 matching DN018-corporate_profile_15.jpg) */}
      <footer id="lien-he" className="bg-[#1E2022] text-white/75 pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Col 1: Brand */}
            <div className="lg:col-span-3">
              <div className="w-12 h-12 rounded-full bg-white text-[#1E2022] flex items-center justify-center font-black text-base mb-3">
                TKW
              </div>
              <p className="text-[11px] leading-relaxed text-white/70">
                <strong className="text-white">
                  Công Ty Thiết Kế Web {data.business.name}
                </strong>{" "}
                là công ty chuyên hỗ trợ tư vấn, thiết kế và xây dựng thương
                hiệu số cho các doanh nghiệp, giúp doanh nghiệp sở hữu những
                thương hiệu độc quyền và thu hút khách hàng.
              </p>
            </div>

            {/* Col 2: Thông tin liên hệ */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-serif font-bold text-white mb-4">
                Thông tin liên hệ
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Địa chỉ:</strong>{" "}
                    {data.business.address}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>
                    <strong className="text-white">Hotline:</strong>{" "}
                    {primaryPhone}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>
                    <strong className="text-white">Email:</strong>{" "}
                    {primaryEmail}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>
                    <strong className="text-white">Web:</strong>{" "}
                    {data.business.name}
                  </span>
                </li>
              </ul>
            </div>

            {/* Col 3: Điều hướng */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-serif font-bold text-white mb-4">
                Điều hướng
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#" className="text-[#19C37D] font-semibold">
                    ▸ Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#nguyen-tac" className="hover:text-white">
                    ▸ Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    ▸ Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#chia-se" className="hover:text-white">
                    ▸ Chia sẻ kinh nghiệm
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    ▸ Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Đăng ký */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-serif font-bold text-white mb-4">
                Đăng ký
              </h4>
              <p className="text-[11px] text-white/70 mb-3">
                Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
              </p>
              {newsletterSubscribed ? (
                <div className="text-xs text-[#19C37D] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã đăng ký thành công!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubscribed(true);
                  }}
                  className="flex items-center bg-white rounded-xs overflow-hidden"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    className="w-full px-3 py-2 text-xs text-[#222222] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#4D54E2] hover:bg-[#3a41c7] text-white text-[10px] font-bold uppercase whitespace-nowrap transition-colors"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-white/50">
            © Bản quyền thuộc về <strong>{data.business.name}</strong> • TaviWeb
          </div>
        </div>
      </footer>

      {/* CONSULTATION MODAL */}
      {consultModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setConsultModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setConsultModalOpen(false)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-serif font-extrabold text-[#111111]">
              Tư Vấn Giải Pháp Website & SEO
            </h3>
            <p className="text-xs text-[#666666] mt-1">
              Project Manager của {data.business.name} sẽ liên hệ trao đổi trực
              tiếp cùng bạn.
            </p>
            {submitted ? (
              <div className="mt-4 p-4 bg-[#EEFBF5] text-[#148F5A] text-xs font-semibold rounded-lg text-center">
                Đã gửi yêu cầu! Chúng tôi sẽ liên hệ trong ít phút.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-4 space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên *"
                  className="w-full px-3.5 py-2.5 border border-[#dddddd] rounded-md text-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  className="w-full px-3.5 py-2.5 border border-[#dddddd] rounded-md text-xs"
                />
                <textarea
                  rows={3}
                  placeholder="Lĩnh vực kinh doanh hoặc ý tưởng website của bạn..."
                  className="w-full px-3.5 py-2.5 border border-[#dddddd] rounded-md text-xs"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#19C37D] hover:bg-[#13a468] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  NHẬN TƯ VẤN MIỄN PHÍ
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
