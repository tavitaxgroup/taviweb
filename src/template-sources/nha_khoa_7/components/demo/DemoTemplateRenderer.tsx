"use client";

import React, { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Globe,
  Sparkles,
  Smile,
  ShieldCheck,
  Award,
  HeartHandshake,
  Calendar,
  Check,
  ArrowUp,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { nhaKhoa7DefaultData, NhaKhoa7Data } from "../../data/mockData";

interface Props {
  companyData?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ companyData }: Props) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData<NhaKhoa7Data>(nhaKhoa7DefaultData, companyData),
    [companyData]
  );

  const [formState, setFormState] = useState({
    parentName: "",
    childName: "",
    dob: "",
    email: "",
    phone: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const renderZigzagDivider = (centered = true) => (
    <div
      className={`mt-2 flex items-center ${
        centered ? "justify-center" : "justify-start"
      }`}
    >
      <svg
        width="76"
        height="8"
        viewBox="0 0 76 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6.5L7 1.5L13 6.5L19 1.5L25 6.5L31 1.5L37 6.5L43 1.5L49 6.5L55 1.5L61 6.5L67 1.5L73 6.5"
          stroke="#f26522"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333] antialiased selection:bg-[#2b6777] selection:text-white">
      {/* 1. DEEP TEAL TOP BAR */}
      <div className="bg-[#2b6777] text-[11px] text-white">
        <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between px-4 py-2">
          <div className="flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5 text-white/90" />
            <span>facebook.com/maitridental.kids</span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              EMAIL : {data.business.email[0]}
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Phone className="h-3.5 w-3.5" />
              HOTLINE: {data.business.phone[0]}
            </span>
          </div>
        </div>
      </div>

      {/* 2. WHITE MAIN HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#ececec] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-3.5">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b6777] text-white shadow-xs">
              <Smile className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-base font-extrabold tracking-tight text-[#2b6777]">
                MAITRI.<span className="text-[#7c4dff]">Dental</span>{" "}
                <span className="text-[#f26522]">/ Kids</span>
              </span>
              <span className="block text-[10px] text-[#888888]">
                Pediatric &amp; Ortho Care
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {[
              { label: "TRANG CHỦ", href: "#top", active: true },
              { label: "GIỚI THIỆU", href: "#ve-maitri", active: false },
              {
                label: "CHƯƠNG TRÌNH KHÁM",
                href: "#chuong-trinh",
                active: false,
              },
              { label: "ĐỘI NGŨ BÁC SĨ", href: "#phuong-phap", active: false },
              { label: "TIN TỨC", href: "#tin-tuc", active: false },
              { label: "LIÊN HỆ", href: "#dang-ky-kham", active: false },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`pb-1 text-[12px] font-bold tracking-wide uppercase transition ${
                  item.active
                    ? "border-b-2 border-[#f26522] text-[#2b6777]"
                    : "text-[#444444] hover:text-[#2b6777]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#dang-ky-kham"
              aria-label="Tìm kiếm"
              className="text-[#555555] transition hover:text-[#2b6777]"
            >
              <Search className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* 3. HERO BANNER WITH FROSTED WHITE ROUNDED CENTER CARD */}
      <section
        id="top"
        className="relative flex h-[430px] w-full items-center justify-center overflow-hidden md:h-[500px]"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Frosted White Center Card */}
        <div className="relative z-10 mx-4 w-full max-w-xl rounded-xl bg-white/85 px-6 py-9 text-center shadow-xl backdrop-blur-xs md:px-12">
          <p className="text-lg font-medium text-[#555555] md:text-xl">
            {data.hero.eyebrow}
          </p>
          <h1 className="mt-1.5 text-2xl font-bold text-[#f26522] md:text-[32px]">
            {data.hero.title}
          </h1>
          <div className="mt-5">
            <a
              href={data.hero.ctaLink || "#dang-ky-kham"}
              className="inline-block rounded-xs bg-[#2b6777] px-6 py-2.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-sm transition hover:bg-[#1f4e5b]"
            >
              {data.hero.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* 4. 5-ICON CIRCULAR HIGHLIGHT STRIP ON SOFT GRAY */}
      <section className="bg-[#f5f6f8] py-10">
        <div className="mx-auto max-w-[1060px] px-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {data.circleHighlights.map((item, idx) => {
              const icons = [
                Award,
                Smile,
                Sparkles,
                ShieldCheck,
                HeartHandshake,
              ];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full text-white shadow-sm"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <IconComp className="h-8 w-8" />
                  </div>
                  <p className="mt-3 max-w-[170px] text-[11px] leading-relaxed text-[#555555]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 4-COLUMN COLORFUL PILLARS ("Chăm sóc răng đối với trẻ nhỏ...") */}
      <section id="phuong-phap" className="mx-auto max-w-[1100px] px-4 py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg leading-snug font-bold text-[#2b6777] md:text-[21px]">
            Chăm sóc nha khoa đối với trẻ nhỏ không chỉ bảo vệ răng sữa, mà
            chuẩn bị nụ cười tự tin cho cuộc đời.
          </h2>
          {renderZigzagDivider(true)}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="flex flex-col items-center justify-between rounded-md border border-[#efefef] bg-white p-6 text-center shadow-2xs transition hover:shadow-md"
            >
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-[#fff8e7] p-2">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3
                  className="mt-5 text-[14px] font-bold"
                  style={{ color: pillar.color }}
                >
                  {pillar.title}
                </h3>
                <p className="mt-3 text-justify text-[11.5px] leading-relaxed text-[#555555]">
                  {pillar.description}
                </p>
              </div>
              <a
                href="#dang-ky-kham"
                className="mt-5 inline-block rounded-xs px-5 py-1.5 text-[11px] font-bold text-white uppercase transition hover:opacity-90"
                style={{ backgroundColor: pillar.color }}
              >
                ĐỌC THÊM
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TEAL PATTERNED SECTION: "Chương trình nha khoa theo độ tuổi" */}
      <section id="chuong-trinh" className="bg-[#3d7c8e] py-16 text-white">
        <div className="mx-auto max-w-[1060px] px-4">
          <div className="text-center">
            <h2 className="text-xl font-bold md:text-2xl">
              Chương trình chăm sóc răng theo độ tuổi
            </h2>
            {renderZigzagDivider(true)}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {data.agePrograms.map((prog) => (
              <div
                key={prog.id}
                className="group overflow-hidden rounded-xl bg-white p-2.5 text-[#333333] shadow-lg"
              >
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="py-4 text-center">
                  <h3 className="text-[15px] font-bold text-[#333333]">
                    {prog.title}
                  </h3>
                  <p className="mx-auto mt-1 max-w-md px-3 text-xs text-[#666666]">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "Về Maitri Dental" COLORFUL BENTO GRID */}
      <section id="ve-maitri" className="mx-auto max-w-[1060px] px-4 py-16">
        <div className="text-center">
          <h2 className="text-xl font-bold text-[#2b6777] md:text-2xl">
            {data.business.aboutTitle}
          </h2>
          {renderZigzagDivider(true)}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Top-Left: Large Photo */}
          <div className="overflow-hidden bg-[#fdf3d7]">
            <img
              src={data.aboutBento.mainImage}
              alt="Về Maitri Dental"
              className="h-full min-h-[290px] w-full object-cover"
            />
          </div>

          {/* Top-Right: Teal Vision Box + 2 Sub Photos */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#2b6777] p-7 text-white">
              <h3 className="text-base font-bold">
                {data.aboutBento.visionTitle}
              </h3>
              <div className="mt-2.5 border-l-2 border-[#8bc34a] pl-3.5 text-xs leading-relaxed text-white/90">
                {data.aboutBento.visionText}
              </div>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-5">
              <div className="overflow-hidden">
                <img
                  src={data.aboutBento.subImages[0]}
                  alt="Phòng khám nhi"
                  className="h-full min-h-[135px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={data.aboutBento.subImages[1]}
                  alt="Không gian vui chơi"
                  className="h-full min-h-[135px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom-Left: Deep Pink / Crimson Mission Box */}
          <div className="bg-[#d81b60] p-8 text-white">
            <h3 className="text-base font-bold">
              {data.aboutBento.missionTitle}
            </h3>
            <div className="mt-3 border-l-2 border-[#8bc34a] pl-3.5 text-xs leading-relaxed text-white/95">
              {data.aboutBento.missionText}
            </div>
          </div>

          {/* Bottom-Right: Vibrant Orange Core Values Box */}
          <div className="bg-[#f4511e] p-8 text-white">
            <h3 className="text-base font-bold">{data.aboutBento.coreTitle}</h3>
            <div className="mt-3 border-r-2 border-[#8bc34a] pr-3.5 text-xs leading-relaxed whitespace-pre-line text-white/95">
              {data.aboutBento.coreText}
            </div>
          </div>
        </div>
      </section>

      {/* 8. ĐĂNG KÝ THAM QUAN & KHÁM RĂNG FORM SECTION */}
      <section id="dang-ky-kham" className="bg-[#f4f5f7] py-16">
        <div className="mx-auto max-w-[680px] px-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2b6777] md:text-2xl">
              Đăng ký tham quan &amp; khám răng cho bé
            </h2>
            {renderZigzagDivider(true)}
          </div>

          {submitted ? (
            <div className="mt-8 rounded-md border border-[#2b6777]/30 bg-white p-8 text-center shadow-sm">
              <Check className="mx-auto h-8 w-8 text-[#2b6777]" />
              <h3 className="mt-2 text-base font-bold text-[#2b6777]">
                Đăng ký lịch hẹn thành công!
              </h3>
              <p className="mt-1 text-xs text-[#666666]">
                Bộ phận Chăm sóc khách hàng nhí Maitri Dental sẽ liên hệ xác
                nhận cùng ba mẹ ngay.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 rounded-xs bg-[#2b6777] px-5 py-2 text-xs font-bold text-white uppercase"
              >
                Đặt lịch thêm
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 space-y-3"
            >
              <input
                type="text"
                required
                value={formState.parentName}
                onChange={(e) =>
                  setFormState({ ...formState, parentName: e.target.value })
                }
                placeholder="Họ tên phụ huynh*"
                className="w-full border border-[#e2e5ea] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#2b6777]"
              />
              <input
                type="text"
                required
                value={formState.childName}
                onChange={(e) =>
                  setFormState({ ...formState, childName: e.target.value })
                }
                placeholder="Họ tên bé*"
                className="w-full border border-[#e2e5ea] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#2b6777]"
              />
              <div className="relative">
                <input
                  type="date"
                  value={formState.dob}
                  onChange={(e) =>
                    setFormState({ ...formState, dob: e.target.value })
                  }
                  className="w-full border border-[#e2e5ea] bg-white px-4 py-2.5 text-xs text-[#555555] outline-none focus:border-[#2b6777]"
                />
                <Calendar className="pointer-events-none absolute top-2.5 right-3 h-4 w-4 text-[#888888]" />
              </div>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                placeholder="Email của phụ huynh*"
                className="w-full border border-[#e2e5ea] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#2b6777]"
              />
              <input
                type="tel"
                required
                value={formState.phone}
                onChange={(e) =>
                  setFormState({ ...formState, phone: e.target.value })
                }
                placeholder="Số điện thoại*"
                className="w-full border border-[#e2e5ea] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#2b6777]"
              />
              <textarea
                rows={4}
                value={formState.note}
                onChange={(e) =>
                  setFormState({ ...formState, note: e.target.value })
                }
                placeholder="Ghi chú tình trạng răng của bé (răng sữa, sún răng, thay răng, chỉnh nha...)"
                className="w-full border border-[#e2e5ea] bg-white px-4 py-2.5 text-xs outline-none focus:border-[#2b6777]"
              />
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="inline-block rounded-xs bg-[#2b6777] px-8 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-sm transition hover:bg-[#1f4e5b]"
                >
                  ĐĂNG KÝ THAM QUAN
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 9. TIN TỨC (3-COLUMN BLOG CARDS) */}
      <section id="tin-tuc" className="mx-auto max-w-[1060px] px-4 py-16">
        <div className="text-center">
          <h2 className="text-xl font-bold text-[#2b6777] md:text-2xl">
            Tin tức
          </h2>
          {renderZigzagDivider(true)}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
          {data.news?.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between overflow-hidden rounded-md border border-[#eeeeee] bg-white shadow-2xs transition hover:shadow-md"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[13.5px] leading-snug font-bold text-[#2b6777]">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-[10px] text-[#999999]">{post.date}</p>
                  <p className="mt-2.5 line-clamp-3 text-[11.5px] leading-relaxed text-[#666666]">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  href="#dang-ky-kham"
                  className="inline-block rounded-xs bg-[#2b6777] px-4 py-1.5 text-[10px] font-bold tracking-wider text-white uppercase transition hover:bg-[#1f4e5b]"
                >
                  ĐỌC THÊM
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. TEAL PATTERNED BOTTOM CTA BANNER + RAINBOW DIVIDER */}
      <section className="bg-[#3d7c8e] py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h3 className="text-lg leading-snug font-bold md:text-xl">
            Làm cho nụ cười của con bạn trở nên đặc biệt bằng cách đăng ký khám
            tầm soát tại phòng khám của chúng tôi
          </h3>
          <a
            href="#dang-ky-kham"
            className="mt-5 inline-block rounded-xs bg-[#225563] px-6 py-2.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-sm transition hover:bg-[#183f4a]"
          >
            GHI DANH NGAY
          </a>
        </div>
      </section>

      {/* Rainbow Multi-Color Divider Bar */}
      <div className="grid h-1.5 w-full grid-cols-6">
        <div className="bg-[#8bc34a]" />
        <div className="bg-[#26a69a]" />
        <div className="bg-[#e91e63]" />
        <div className="bg-[#ffca28]" />
        <div className="bg-[#ab47bc]" />
        <div className="bg-[#29b6f6]" />
      </div>

      {/* 11. WHITE 3-COLUMN FOOTER WITH 3x2 GALLERY */}
      <footer className="bg-white pt-12 pb-10 text-xs text-[#666666]">
        <div className="mx-auto max-w-[1060px] px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Col 1: Brand Info */}
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b6777] text-white">
                  <Smile className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-base font-extrabold text-[#2b6777]">
                    MAITRI.<span className="text-[#7c4dff]">Dental</span>{" "}
                    <span className="text-[#f26522]">/ Kids</span>
                  </span>
                  <span className="block text-[10px] text-[#888888]">
                    Nha Khoa Trẻ Em Chuẩn Quốc Tế
                  </span>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-[#777777]">
                {data.business.aboutText[0]}
              </p>
            </div>

            {/* Col 2: Liên hệ */}
            <div>
              <h4 className="text-sm font-bold text-[#2b6777]">Liên hệ</h4>
              {renderZigzagDivider(false)}
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2b6777]" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#2b6777]" />
                  <span>{data.business.phone.join(" - ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#2b6777]" />
                  <span>{data.business.email.join(" | ")}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Thư viện 3x2 Grid */}
            <div>
              <h4 className="text-sm font-bold text-[#2b6777]">Thư viện</h4>
              {renderZigzagDivider(false)}
              <div className="mt-4 grid grid-cols-3 gap-1.5">
                {data.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-xs bg-[#f0f0f0]"
                  >
                    <img
                      src={imgUrl}
                      alt={`Thư viện ${i + 1}`}
                      className="h-full w-full object-cover transition hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Copyright Bar */}
      <div className="relative bg-[#2b6777] py-3 text-center text-[11px] text-white">
        <p>
          © Thiết kế và lập trình bởi <strong>{data.business.name}</strong>
        </p>
        <a
          href="#top"
          aria-label="Lên đầu trang"
          className="absolute top-1/2 right-4 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-[#2b6777]"
        >
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export default DemoTemplateRenderer;
