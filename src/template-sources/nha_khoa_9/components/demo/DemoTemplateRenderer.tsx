"use client";

import React, { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Crown,
  Calendar,
  Check,
  X,
  Plus,
  Minus,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa9DefaultData,
  NhaKhoa9Data,
  NhaKhoa9Package,
} from "../../data/mockData";

interface Props {
  companyData?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ companyData }: Props) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData<NhaKhoa9Data>(nhaKhoa9DefaultData, companyData),
    [companyData]
  );

  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    phone: "",
    visitDate: "",
    followDate: "",
    guests: "",
  });
  const [bookingSent, setBookingSent] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<NhaKhoa9Package | null>(null);

  const modernPackages = useMemo(
    () => data.packages.filter((p) => p.tier === "modern"),
    [data.packages]
  );
  const luxuryPackages = useMemo(
    () => data.packages.filter((p) => p.tier === "luxury"),
    [data.packages]
  );

  const renderPackageCard = (pkg: NhaKhoa9Package) => (
    <div
      key={pkg.id}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between px-6 py-6 text-center">
        <div>
          <h3 className="text-[15px] font-extrabold tracking-wide text-[#222222] uppercase">
            {pkg.name}
          </h3>
          <ul className="mt-3 space-y-1 text-[11.5px] text-[#666666]">
            {pkg.specs.map((spec, idx) => (
              <li key={idx}>
                <strong className="font-semibold text-[#555555]">
                  {spec.label}:
                </strong>{" "}
                {spec.value}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setSelectedPkg(pkg)}
          className="mt-5 inline-block rounded-xs bg-[#4a4a4a] px-5 py-2 text-[11px] font-bold text-white transition hover:bg-[#222222]"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333] antialiased selection:bg-[#4a4a4a] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="border-b border-[#efefef] bg-white text-[11px] text-[#666666]">
        <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between px-4 py-1.5">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-[#4a4a4a]" />
              {data.business.phone[0]}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-[#4a4a4a]" />
              {data.business.email[0]}
            </span>
          </div>
          <span className="hidden sm:inline">
            Chào mừng bạn đến với Mona Royal Smile
          </span>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER WITH ROYAL CREST LOGO */}
      <header className="sticky top-0 z-40 border-b border-[#eaeaea] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-3">
          {/* Ornate Royal Crest Logo */}
          <a href="#top" className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-[#555555]">
              <span className="h-[1px] w-6 bg-[#888888]" />
              <Crown className="h-5 w-5 text-[#555555]" />
              <span className="h-[1px] w-6 bg-[#888888]" />
            </div>
            <span className="mt-0.5 font-serif text-sm font-bold tracking-[0.18em] text-[#333333] uppercase">
              MONA ROYAL
            </span>
            <span className="text-[8px] tracking-[0.26em] text-[#888888] uppercase">
              DENTAL &amp; RESORT
            </span>
          </a>

          {/* Navigation + CTA */}
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {[
                { label: "TRANG CHỦ", href: "#top", active: true },
                { label: "GIỚI THIỆU", href: "#dich-vu-hap-dan", active: false },
                {
                  label: "PHÒNG & DỊCH VỤ",
                  href: "#dich-vu-hien-dai",
                  active: false,
                },
                { label: "TIN TỨC", href: "#thong-ke", active: false },
                { label: "LIÊN HỆ", href: "#ban-do", active: false },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-[11.5px] font-bold tracking-wider uppercase transition ${
                    item.active
                      ? "text-[#222222]"
                      : "text-[#666666] hover:text-[#222222]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              aria-label="Tìm kiếm"
              className="text-[#444444] transition hover:text-[#111111]"
            >
              <Search className="h-4 w-4" />
            </button>

            <a
              href="#booking-box"
              className="rounded-md bg-[#4a4a4a] px-4 py-2 text-[11px] font-bold tracking-wider text-white uppercase transition hover:bg-[#222222]"
            >
              ĐẶT LỊCH HẸN
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO BANNER WITH FLOATING RIGHT DARK TRANSLUCENT BOOKING CARD */}
      <section
        id="top"
        className="relative min-h-[480px] w-full overflow-hidden py-10 md:py-14"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex max-w-[1140px] items-center justify-end px-4">
          {/* Floating Dark Charcoal Booking Card matching NK012 */}
          <div
            id="booking-box"
            className="w-full max-w-[340px] rounded-xl bg-[#424242]/92 p-6 text-white shadow-2xl backdrop-blur-md"
          >
            <h2 className="text-center text-lg font-extrabold tracking-wider uppercase">
              ĐẶT PHÒNG VIP &amp; LỊCH HẸN
            </h2>

            {bookingSent ? (
              <div className="mt-5 rounded-md border border-white/20 bg-white/10 p-4 text-center">
                <Check className="mx-auto h-6 w-6 text-[#4ade80]" />
                <p className="mt-1.5 text-xs font-bold">
                  Đã ghi nhận lịch hẹn VIP!
                </p>
                <p className="mt-1 text-[11px] text-white/80">
                  Quản gia nha khoa Mona Royal sẽ liên hệ đón tiếp quý khách.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingSent(false)}
                  className="mt-3 rounded-xs bg-[#1f1f1f] px-4 py-1.5 text-[10px] font-bold uppercase"
                >
                  Đặt lịch mới
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSent(true);
                }}
                className="mt-4 space-y-3 text-[11px]"
              >
                <div>
                  <label className="mb-1 block font-semibold text-white/90">
                    Họ &amp; Tên
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.fullName}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full rounded-xs border border-white/30 bg-transparent px-3 py-1.5 text-xs text-white outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-semibold text-white/90">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, phone: e.target.value })
                    }
                    placeholder="..."
                    className="w-full rounded-xs border border-white/30 bg-transparent px-3 py-1.5 text-xs text-white outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-semibold text-white/90">
                    Ngày khám
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={bookingForm.visitDate}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          visitDate: e.target.value,
                        })
                      }
                      className="w-full rounded-xs border border-white/30 bg-transparent px-3 py-1.5 text-xs text-white outline-none focus:border-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-semibold text-white/90">
                    Ngày tái khám dự kiến
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={bookingForm.followDate}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          followDate: e.target.value,
                        })
                      }
                      className="w-full rounded-xs border border-white/30 bg-transparent px-3 py-1.5 text-xs text-white outline-none focus:border-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-semibold text-white/90">
                    Số người
                  </label>
                  <select
                    value={bookingForm.guests}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, guests: e.target.value })
                    }
                    className="w-full rounded-xs border border-white/30 bg-[#424242] px-3 py-1.5 text-xs text-white outline-none focus:border-white"
                  >
                    <option value="">---Vui lòng chọn---</option>
                    <option value="1">1 Khách (Phòng VIP đơn)</option>
                    <option value="2">2 Khách (Cặp đôi)</option>
                    <option value="4">Gia đình 4 thành viên</option>
                  </select>
                </div>
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-28 rounded-xs bg-[#1c1c1c] py-2 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-black"
                  >
                    GỬI
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. SECTION "DỊCH VỤ HẤP DẪN" (3 ROUNDED IMAGE CARDS) */}
      <section id="dich-vu-hap-dan" className="mx-auto max-w-[1000px] px-4 py-14">
        <div className="text-center">
          <h2 className="text-xl font-extrabold tracking-wide text-[#222222] uppercase md:text-2xl">
            DỊCH VỤ HẤP DẪN
          </h2>
          <p className="mt-1 text-xs text-[#777777]">
            Tận hưởng trải nghiệm dịch vụ nha khoa nghỉ dưỡng cao cấp
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.highlightServices.map((srv) => (
            <div
              key={srv.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={srv.image}
                alt={srv.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-4 text-center">
                <h3 className="text-sm font-bold text-white">{srv.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SECTION 1: "PHÒNG KHÁM & DỊCH VỤ HIỆN ĐẠI" ON LIGHT GRAY BACKGROUND */}
      <section id="dich-vu-hien-dai" className="bg-[#f4f4f4] py-14">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-[#222222] uppercase md:text-xl">
                PHÒNG ĐIỀU TRỊ HIỆN ĐẠI
              </h2>
              <p className="text-xs text-[#777777]">
                Chọn gói phòng &amp; dịch vụ phù hợp với bạn
              </p>
            </div>
            <a
              href="#booking-box"
              className="rounded-md bg-[#4a4a4a] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#222222]"
            >
              Xem tất cả
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {modernPackages.map(renderPackageCard)}
          </div>
        </div>
      </section>

      {/* 6. SECTION 2: "DỊCH VỤ NHA KHOA CAO CẤP" */}
      <section className="bg-[#f4f4f4] pt-2 pb-16">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-[#222222] uppercase md:text-xl">
                PHÒNG NHA KHOA CAO CẤP
              </h2>
              <p className="text-xs text-[#777777]">
                Chọn gói điều trị phù hợp với bạn
              </p>
            </div>
            <a
              href="#booking-box"
              className="rounded-md bg-[#4a4a4a] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#222222]"
            >
              Xem tất cả
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {luxuryPackages.map(renderPackageCard)}
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH LUXURY SUITE PARALLAX BANNER WITH 3 PILL STAT CARDS */}
      <section
        id="thong-ke"
        className="relative flex h-[380px] w-full items-center justify-center overflow-hidden md:h-[440px]"
      >
        <img
          src={data.statsBannerImage}
          alt="Thống kê Royal Smile"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-[980px] px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.pillStats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center rounded-full bg-white py-5 text-center shadow-xl"
              >
                <span className="text-xl font-extrabold text-[#222222] md:text-2xl">
                  {stat.number}
                </span>
                <span className="mt-1 text-[10px] font-semibold tracking-wider text-[#666666] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE MAP SECTION */}
      <section
        id="ban-do"
        className="relative h-[320px] w-full overflow-hidden border-t border-b border-[#e5e5e5] bg-[#eef2f6]"
      >
        {/* Stylized Map Grid Canvas */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "20px 20px, 60px 60px, 60px 60px",
          }}
        />
        {/* Simulated Major Roads */}
        <div className="absolute inset-x-0 top-1/2 h-4 -rotate-6 bg-[#fde047]/70" />
        <div className="absolute inset-y-0 left-1/2 w-3 rotate-12 bg-white/90" />

        {/* Center Red Map Pin */}
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ef4444] text-white shadow-lg">
            <MapPin className="h-5 w-5" />
          </div>
          <span className="mt-1 rounded-xs bg-white px-2.5 py-0.5 text-[10px] font-bold text-[#222222] shadow-sm">
            {data.business.name}
          </span>
        </div>

        {/* Top-Left Google Map Info Card */}
        <div className="absolute top-4 left-4 max-w-[260px] rounded-xs bg-white p-3.5 shadow-md">
          <h4 className="text-xs font-bold text-[#222222]">
            {data.business.address}
          </h4>
          <p className="mt-1 text-[11px] text-[#666666]">
            {data.business.name} – Tân Bình, TP. Hồ Chí Minh
          </p>
          <a
            href="#booking-box"
            className="mt-2 inline-block text-[11px] font-semibold text-[#0284c7] hover:underline"
          >
            Xem bản đồ lớn hơn
          </a>
        </div>

        {/* Bottom-Right Map Zoom Controls */}
        <div className="absolute right-4 bottom-4 flex flex-col overflow-hidden rounded-xs bg-white shadow-md">
          <button
            type="button"
            aria-label="Phóng to"
            className="flex h-7 w-7 items-center justify-center border-b border-[#eeeeee] text-[#555555] hover:bg-[#f5f5f5]"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            aria-label="Thu nhỏ"
            className="flex h-7 w-7 items-center justify-center text-[#555555] hover:bg-[#f5f5f5]"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* 9. CLEAN WHITE 4-COLUMN FOOTER */}
      <footer className="relative bg-white pt-12 pb-10 text-xs text-[#666666]">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Royal Crest Logo & Intro */}
            <div className="text-center sm:text-left">
              <div className="inline-flex flex-col items-center">
                <div className="flex items-center gap-1 text-[#555555]">
                  <span className="h-[1px] w-6 bg-[#888888]" />
                  <Crown className="h-5 w-5 text-[#555555]" />
                  <span className="h-[1px] w-6 bg-[#888888]" />
                </div>
                <span className="mt-0.5 font-serif text-sm font-bold tracking-[0.18em] text-[#333333] uppercase">
                  MONA ROYAL
                </span>
                <span className="text-[8px] tracking-[0.26em] text-[#888888] uppercase">
                  DENTAL &amp; RESORT
                </span>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-[#777777]">
                {data.business.aboutText[0]}
              </p>
            </div>

            {/* Col 2: MONA ROYAL GLOBAL APARTMENT / DENTAL */}
            <div>
              <h4 className="text-[12px] font-bold text-[#333333] uppercase">
                MONA ROYAL GLOBAL DENTAL
              </h4>
              <ul className="mt-3 space-y-2 text-[11.5px]">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#555555]" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#555555]" />
                  <span>{data.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#555555]" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: LIÊN KẾT */}
            <div>
              <h4 className="text-[12px] font-bold text-[#333333] uppercase">
                LIÊN KẾT
              </h4>
              <ul className="mt-3 space-y-2 text-[11.5px]">
                <li>
                  <a href="#top" className="hover:text-[#111111]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#dich-vu-hap-dan" className="hover:text-[#111111]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#thong-ke" className="hover:text-[#111111]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#ban-do" className="hover:text-[#111111]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: LIÊN HỆ */}
            <div>
              <h4 className="text-[12px] font-bold text-[#333333] uppercase">
                LIÊN HỆ
              </h4>
              <ul className="mt-3 space-y-2 text-[11.5px]">
                <li>
                  <a href="#booking-box" className="hover:text-[#111111]">
                    Đặt Phòng &amp; Lịch Hẹn
                  </a>
                </li>
                <li>
                  <a href="#ban-do" className="hover:text-[#111111]">
                    Liên Hệ Tư Vấn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Floating Red Mail Icon at Bottom Right */}
        <a
          href="#booking-box"
          aria-label="Gửi yêu cầu"
          className="fixed right-5 bottom-12 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#ef4444] text-white shadow-lg transition hover:scale-105"
        >
          <Mail className="h-4 w-4" />
        </a>
      </footer>

      {/* Dark Bottom Copyright Bar */}
      <div className="bg-[#333333] py-3 text-center text-[11px] text-white/90">
        © Thiết kế và lập trình bởi <strong>{data.business.name}</strong>
      </div>

      {/* PACKAGE DETAIL MODAL */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative grid w-full max-w-xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-2xl sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setSelectedPkg(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-[#333333] hover:bg-[#333333] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-square bg-[#f4f4f4]">
              <img
                src={selectedPkg.image}
                alt={selectedPkg.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#777777] uppercase">
                  MONA ROYAL SUITE
                </span>
                <h3 className="mt-1 text-lg font-extrabold text-[#222222]">
                  {selectedPkg.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-[#4a4a4a]">
                  {selectedPkg.price}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#555555]">
                  {selectedPkg.description}
                </p>
                <ul className="mt-3 space-y-1 text-[11px] text-[#555555]">
                  {selectedPkg.specs.map((s, i) => (
                    <li key={i}>
                      • <strong>{s.label}:</strong> {s.value}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#booking-box"
                onClick={() => setSelectedPkg(null)}
                className="mt-5 block w-full rounded-xs bg-[#4a4a4a] py-2.5 text-center text-xs font-bold text-white uppercase transition hover:bg-[#222222]"
              >
                ĐẶT LỊCH GÓI NÀY
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
