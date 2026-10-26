"use client";

import React, { useMemo, useState } from "react";
import {
  Phone,
  Clock,
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Mail,
  ShieldCheck,
  Award,
  Check,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa12DefaultData,
  NhaKhoa12Data,
  NhaKhoa12ServiceCard,
} from "../../data/mockData";

interface Props {
  companyData?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ companyData }: Props) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData<NhaKhoa12Data>(
        nhaKhoa12DefaultData,
        companyData
      ),
    [companyData]
  );

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [selectedService, setSelectedService] =
    useState<NhaKhoa12ServiceCard | null>(null);
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [bookingSent, setBookingSent] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1f2937] antialiased selection:bg-[#0d8a47] selection:text-white">
      {/* 1. TOP UTILITY BAR WITH ORANGE PHONE & CLOCK ICONS + RIGHT SEARCH */}
      <div className="border-b border-[#e5e7eb] bg-[#f8faf9] text-[11px] text-[#374151]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 py-2">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 font-bold text-[#111827]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f26522] text-white">
                <Phone className="h-2.5 w-2.5" />
              </span>
              {data.business.phone[0]}
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-[#374151]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f26522] text-white">
                <Clock className="h-2.5 w-2.5" />
              </span>
              THỜI GIAN LÀM VIỆC: {data.business.workingHours}
            </span>
          </div>

          <div className="flex w-48 items-center rounded-xs border border-[#d1d5db] bg-white px-2.5 py-1">
            <Search className="mr-1.5 h-3.5 w-3.5 text-[#9ca3af]" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full text-[11px] outline-none"
            />
          </div>
        </div>
      </div>

      {/* 2. SPLIT NAVIGATION HEADER WITH CENTERED HOSPITAL GREEN CROSS EMBLEM */}
      <header className="sticky top-0 z-40 border-b border-[#e5e7eb] bg-white/95 shadow-2xs backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
          {/* Left Navigation Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {[
              { label: "Trang chủ", href: "#top", active: true },
              { label: "Về chúng tôi", href: "#chuyen-gia", active: false },
              { label: "Dịch vụ", href: "#cac-dich-vu", active: false },
              { label: "Bác sĩ", href: "#chuyen-gia", active: false },
            ].map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                className={`pb-1 text-xs font-bold transition ${
                  nav.active
                    ? "border-b-2 border-[#0d8a47] text-[#0d8a47]"
                    : "text-[#374151] hover:text-[#0d8a47]"
                }`}
              >
                {nav.label}
              </a>
            ))}
          </nav>

          {/* Center Hospital Eye & Green Cross Emblem Logo (matching NK015) */}
          <a
            href="#top"
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-9 w-16 items-center justify-center rounded-full border-2 border-[#0d8a47] bg-[#ecfdf5]">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0d8a47] text-white">
                <Plus className="h-4 w-4 stroke-[3]" />
              </div>
            </div>
            <span className="mt-1 text-xs font-black tracking-wider text-[#065f46] uppercase">
              SÀI GÒN ĐỒNG THÁP
            </span>
            <span className="text-[8px] font-bold tracking-[0.22em] text-[#0d8a47] uppercase">
              BỆNH VIỆN RHM &amp; MẮT
            </span>
          </a>

          {/* Right Navigation Links */}
          <div className="flex items-center gap-7">
            <nav className="hidden items-center gap-7 lg:flex">
              {[
                { label: "Thông tin", href: "#tin-tuc-bv" },
                { label: "Giá cả", href: "#bang-gia" },
                { label: "Tuyển dụng", href: "#lien-he-bv" },
                { label: "Liên hệ", href: "#lien-he-bv" },
              ].map((nav) => (
                <a
                  key={nav.label}
                  href={nav.href}
                  className="text-xs font-bold text-[#374151] transition hover:text-[#0d8a47]"
                >
                  {nav.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="rounded-xs bg-[#0d8a47] px-3.5 py-1.5 text-xs font-bold text-white lg:hidden"
            >
              ĐẶT LỊCH
            </button>
          </div>
        </div>
      </header>

      {/* 3. HOSPITAL GREEN-TINTED HERO WITH CALLIGRAPHY + RIGHT VERTICAL GREEN SIDEBAR + BOTTOM TAB BAR */}
      <section id="top" className="relative overflow-hidden bg-[#0a6e38]">
        <div className="relative flex min-h-[420px] w-full md:min-h-[480px]">
          {/* Main Hero Image + Green Gradient Overlay */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d8a47]/90 via-[#0d8a47]/55 to-transparent" />

            {/* Left Script Calligraphy Title matching NK015 */}
            <div className="relative z-10 mx-auto flex h-full max-w-[1140px] flex-col justify-center px-6 py-12 text-white md:px-12">
              <p className="font-serif text-4xl italic tracking-wide text-white/95 sm:text-5xl md:text-6xl">
                {data.hero.eyebrow}
              </p>
              <h1 className="mt-2 text-xl font-bold tracking-wider text-white md:text-2xl">
                {data.hero.title}
              </h1>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-white/90 sm:text-sm">
                {data.hero.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="rounded-full bg-[#f26522] px-6 py-2.5 text-xs font-extrabold tracking-wider text-white uppercase shadow-md transition hover:bg-[#d95316]"
                >
                  {data.hero.ctaText}
                </button>
                <a
                  href="#bang-gia"
                  className="rounded-full border border-white/80 bg-white/10 px-5 py-2.5 text-xs font-bold text-white uppercase backdrop-blur-xs transition hover:bg-white hover:text-[#0d8a47]"
                >
                  BẢNG GIÁ BHYT
                </a>
              </div>
            </div>
          </div>

          {/* Right Vertical Solid Green Bar with 2 Orange Floating Action Circles */}
          <div className="hidden w-14 shrink-0 flex-col items-center justify-end gap-3 bg-[#08723a] pb-8 sm:flex">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              title="Đặt lịch khám"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f26522] text-white shadow-md transition hover:scale-110"
            >
              <Calendar className="h-4 w-4" />
            </button>
            <a
              href={`tel:${data.business.phone[0]}`}
              title="Gọi cấp cứu / Tư vấn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f26522] text-white shadow-md transition hover:scale-110"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Hero Slider Control + 3-Tab Green Bar matching NK015 */}
        <div className="grid grid-cols-1 border-t border-white/15 md:grid-cols-12">
          {/* Left White Counter Box: < 01 / 04 > */}
          <div className="flex items-center justify-center gap-3 bg-white py-3.5 text-xs font-bold text-[#374151] md:col-span-3">
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 2) % 3)}
              className="text-[#f26522] hover:opacity-75"
              aria-label="Slide trước"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span>
              <strong className="text-[#f26522]">0{activeSlide + 1}</strong> /
              03
            </span>
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
              className="text-[#f26522] hover:opacity-75"
              aria-label="Slide tiếp"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right 3 Green Tabs */}
          <div className="grid grid-cols-1 bg-[#0b7f41] text-white sm:grid-cols-3 md:col-span-9">
            {data.heroTabs.map((tabLabel, idx) => (
              <button
                key={tabLabel}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`border-r border-white/15 px-4 py-3.5 text-center text-xs font-bold transition ${
                  activeSlide === idx
                    ? "bg-[#086835] text-white"
                    : "text-white/80 hover:bg-[#09723a]"
                }`}
              >
                {tabLabel}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION "Chúng tôi cung cấp — Các dịch vụ" (4-COLUMN CARDS WITH WHITE PILL TAGS) */}
      <section id="cac-dich-vu" className="mx-auto max-w-[1140px] px-4 py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold text-[#0d8a47]">
              Chúng tôi cung cấp
            </span>
            <h2 className="mt-0.5 text-2xl font-extrabold text-[#111827]">
              Các dịch vụ chuyên khoa
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Trước"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d1d5db] text-[#6b7280] transition hover:border-[#0d8a47] hover:text-[#0d8a47]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Sau"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0d8a47] text-[#0d8a47] transition hover:bg-[#0d8a47] hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Service Cards matching NK015 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.hospitalServices.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border-t-4 border-[#0d8a47] shadow-md"
            >
              <img
                src={srv.image}
                alt={srv.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Bottom-Right White Pill Label matching NK015 */}
              <div className="absolute right-3 bottom-4 left-3 flex justify-end">
                <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#111827] shadow-md transition group-hover:bg-[#0d8a47] group-hover:text-white">
                  {srv.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="rounded-full border border-[#0d8a47] px-7 py-2 text-xs font-bold text-[#0d8a47] uppercase transition hover:bg-[#0d8a47] hover:text-white"
          >
            XEM TẤT CẢ
          </button>
        </div>
      </section>

      {/* 5. SPECIALIST DOCTORS SECTION ("QUY TỤ CÁC CHUYÊN GIA UY TÍN TRONG NGÀNH") */}
      <section id="chuyen-gia" className="bg-[#f0fdf4] py-14">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="text-center">
            <span className="text-xs font-bold tracking-wider text-[#0d8a47] uppercase">
              ĐỘI NGŨ Y BÁC SĨ ĐẦU NGÀNH
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-[#064e3b] uppercase">
              Quy Tụ Các Chuyên Gia Răng Hàm Mặt &amp; Nhãn Khoa Uy Tín
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-3">
            {data.doctors.map((doc) => (
              <div
                key={doc.id}
                className="overflow-hidden rounded-2xl border border-[#bbf7d0] bg-white shadow-xs transition hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#dcfce7]">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <span className="inline-block rounded-full bg-[#ecfdf5] px-3 py-0.5 text-[11px] font-bold text-[#0d8a47]">
                    {doc.degree} • {doc.experience}
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-[#111827]">
                    {doc.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#4b5563]">{doc.specialty}</p>
                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="mt-4 rounded-full bg-[#0d8a47] px-5 py-1.5 text-xs font-bold text-white transition hover:bg-[#065f46]"
                  >
                    Đặt lịch với Bác sĩ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOSPITAL BHYT PRICE TABLE SECTION */}
      <section id="bang-gia" className="mx-auto max-w-[1140px] px-4 py-14">
        <div className="mb-8 text-center">
          <span className="text-xs font-bold text-[#0d8a47] uppercase">
            MINH BẠCH CHI PHÍ ĐIỀU TRỊ
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-[#111827]">
            Bảng Giá Niêm Yết &amp; Quyền Lợi Bảo Hiểm Y Tế
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#d1fae5] shadow-xs">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="bg-[#0d8a47] text-white">
                <th className="px-4 py-3.5 font-bold">Danh mục kỹ thuật</th>
                <th className="px-4 py-3.5 font-bold">Đơn vị</th>
                <th className="px-4 py-3.5 font-bold">Giá niêm yết</th>
                <th className="px-4 py-3.5 font-bold">Mức hưởng BHYT / Ưu đãi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e7eb] bg-white">
              {data.priceList.map((row) => (
                <tr key={row.id} className="hover:bg-[#f0fdf4]">
                  <td className="px-4 py-3.5 font-bold text-[#111827]">
                    {row.serviceName}
                  </td>
                  <td className="px-4 py-3.5 text-[#6b7280]">{row.unit}</td>
                  <td className="px-4 py-3.5 font-semibold text-[#374151]">
                    {row.standardPrice}
                  </td>
                  <td className="px-4 py-3.5 font-bold text-[#0d8a47]">
                    {row.bhytPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. TIN TỨC BỆNH VIỆN */}
      <section id="tin-tuc-bv" className="bg-[#f8faf9] py-14">
        <div className="mx-auto max-w-[1140px] px-4">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#111827]">
            Tin Tức Y Khoa &amp; Hoạt Động Cộng Đồng
          </h2>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {data.news?.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-2xs transition hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold text-[#0d8a47]">
                    {post.category} • {post.date}
                  </span>
                  <h3 className="mt-1.5 text-sm leading-snug font-extrabold text-[#111827]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[#6b7280]">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOSPITAL GREEN FOOTER */}
      <footer
        id="lien-he-bv"
        className="bg-[#065f46] pt-14 pb-8 text-xs text-white/85"
      >
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0d8a47]">
                  <Plus className="h-5 w-5 stroke-[3]" />
                </div>
                <span className="text-sm font-black text-white uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-white/80">
                {data.business.aboutText[0]}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-extrabold text-[#fde047] uppercase">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#fde047]" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#fde047]" />
                  <span>{data.business.phone.join(" - ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#fde047]" />
                  <span>{data.business.email.join(" | ")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold text-[#fde047] uppercase">
                CHUYÊN KHOA MŨI NHỌN
              </h4>
              <ul className="mt-4 space-y-2">
                <li>Cấy ghép Implant &amp; Tiểu phẫu Răng khôn</li>
                <li>Bọc răng sứ &amp; Chỉnh nha thẩm mỹ</li>
                <li>Phẫu thuật Phaco Đục thủy tinh thể</li>
                <li>Khám Bảo Hiểm Y Tế thông tuyến</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold text-[#fde047] uppercase">
                TỔNG ĐÀI ĐẶT LỊCH KHÁM
              </h4>
              <p className="mt-3 text-lg font-black text-white">
                {data.business.phone[0]}
              </p>
              <p className="mt-1 text-[11px] text-white/80">
                Làm việc cả Thứ 7 &amp; Chủ Nhật: {data.business.workingHours}
              </p>
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="mt-4 w-full rounded-full bg-[#f26522] py-2.5 text-xs font-bold text-white uppercase shadow-md"
              >
                ĐẶT LỊCH HẸN KHÁM NGAY
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6 text-center text-[11px] text-white/75">
            © {new Date().getFullYear()} Bản quyền thuộc về{" "}
            <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white hover:bg-[#0d8a47]"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-[16/10] w-full">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold text-[#0d8a47] uppercase">
                {selectedService.category} • {selectedService.bhytSupport}
              </span>
              <h3 className="mt-1 text-lg font-extrabold text-[#111827]">
                {selectedService.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#4b5563]">
                {selectedService.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  setBookingOpen(true);
                }}
                className="mt-5 w-full rounded-full bg-[#0d8a47] py-2.5 text-xs font-bold text-white uppercase"
              >
                ĐẶT LỊCH KHÁM CHUYÊN KHOA NÀY
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setBookingOpen(false);
                setBookingSent(false);
              }}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#374151] hover:bg-[#0d8a47] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-base font-extrabold text-[#065f46] uppercase">
              Đặt Lịch Khám {data.business.name}
            </h3>
            {bookingSent ? (
              <div className="mt-4 rounded-xl bg-[#ecfdf5] p-4 text-center">
                <Check className="mx-auto h-6 w-6 text-[#0d8a47]" />
                <p className="mt-1 text-sm font-bold text-[#065f46]">
                  Đã đăng ký số thứ tự khám ưu tiên!
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSent(true);
                }}
                className="mt-4 space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên người bệnh *"
                  className="w-full rounded-lg border border-[#d1d5db] px-3.5 py-2 text-xs outline-none focus:border-[#0d8a47]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  className="w-full rounded-lg border border-[#d1d5db] px-3.5 py-2 text-xs outline-none focus:border-[#0d8a47]"
                />
                <select className="w-full rounded-lg border border-[#d1d5db] px-3.5 py-2 text-xs outline-none focus:border-[#0d8a47]">
                  <option>Khoa Răng Hàm Mặt &amp; Cấy ghép Implant</option>
                  <option>Tiểu phẫu răng khôn (Thanh toán BHYT)</option>
                  <option>Chuyên khoa Mắt &amp; Phẫu thuật Phaco</option>
                </select>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#0d8a47] py-2.5 text-xs font-bold text-white uppercase"
                >
                  XÁC NHẬN ĐẶT LỊCH
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
