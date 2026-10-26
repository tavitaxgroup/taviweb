"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Eye,
  Star,
  X
} from "lucide-react";
import {
  adaptClonedTemplateData,
  type ClonedTemplateInput
} from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien14DefaultData,
  type VivisionBeautyData,
  type VivisionEyeServiceItem
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  template?: ClonedTemplateInput;
  companyName?: string;
}

/**
 * Reusable Vivision Blue Dot-Cross Emblem matching TMV017-tham_my_vien_14.png
 */
function VivisionDotCrossLogo({
  brandName,
  size = "md"
}: {
  brandName: string;
  size?: "sm" | "md" | "lg";
}) {
  const textSize =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
      ? "text-xl"
      : "text-2xl";

  return (
    <div className="inline-flex items-center gap-3">
      {/* Dot-Cross SVG */}
      <svg
        viewBox="0 0 44 44"
        className={
          size === "lg" ? "h-11 w-11" : size === "sm" ? "h-7 w-7" : "h-9 w-9"
        }
        fill="#0044ff"
      >
        {/* Vertical arm of cross */}
        <circle cx="22" cy="4" r="2.2" />
        <circle cx="22" cy="11" r="2.5" />
        <circle cx="17" cy="16" r="2" />
        <circle cx="22" cy="16" r="2.6" />
        <circle cx="27" cy="16" r="2" />
        {/* Horizontal arm of cross */}
        <circle cx="4" cy="22" r="2.2" />
        <circle cx="11" cy="22" r="2.5" />
        <circle cx="16" cy="22" r="2.6" />
        <circle cx="22" cy="22" r="3" />
        <circle cx="28" cy="22" r="2.6" />
        <circle cx="33" cy="22" r="2.5" />
        <circle cx="40" cy="22" r="2.2" />
        {/* Lower vertical arm */}
        <circle cx="17" cy="28" r="2" />
        <circle cx="22" cy="28" r="2.6" />
        <circle cx="27" cy="28" r="2" />
        <circle cx="22" cy="33" r="2.5" />
        <circle cx="22" cy="40" r="2.2" />
      </svg>

      <span
        className={`font-sans font-semibold tracking-tight text-[#0044ff] ${textSize}`}
      >
        {brandName}
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({
  data,
  template,
  companyName
}: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<VivisionBeautyData>(
    thamMyVien14DefaultData,
    {
      ...(data || template || {}),
      ...(companyName ? { companyName } : {})
    }
  );

  const [selectedService, setSelectedService] =
    useState<VivisionEyeServiceItem | null>(null);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [selectedServiceName, setSelectedServiceName] = useState(
    merged.eightEyeCareGrid[0]?.title || "Khám khúc xạ liệt điều tiết"
  );
  const [appointmentDate, setAppointmentDate] = useState("2026-07-20");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const primaryPhone =
    Array.isArray(merged.business.phone) && merged.business.phone.length > 0
      ? merged.business.phone[0]
      : "1800 6989";
  const primaryEmail =
    Array.isArray(merged.business.email) && merged.business.email.length > 0
      ? merged.business.email[0]
      : "cskh@vivisionbeauty.vn";

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 4500);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#0044ff] selection:text-white"
    >
      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border-2 border-[#0044ff] bg-[#fff7df] p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0044ff] shadow hover:bg-[#0044ff] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="aspect-square overflow-hidden rounded-xl border border-[#0044ff]/20 bg-white">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-[#0044ff] px-3 py-0.5 text-[10px] font-bold uppercase text-white">
                    {selectedService.category}
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0044ff]">
                    {selectedService.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-slate-600">
                    Chi phí niêm yết:{" "}
                    <span className="text-sm text-[#e61982]">
                      {selectedService.price}
                    </span>{" "}
                    ({selectedService.duration})
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-700">
                    {selectedService.description}
                  </p>
                </div>
                <a
                  href="#dat-lich"
                  onClick={() => {
                    setSelectedServiceName(selectedService.title);
                    setSelectedService(null);
                  }}
                  className="mt-5 block w-full rounded-xl bg-[#0044ff] py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#0033cc]"
                >
                  Đặt lịch chuyên khoa này
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 1. CLEAN CLINICAL HEADER ==================== */}
      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <a href="#top">
            <VivisionDotCrossLogo brandName={merged.business.name} size="md" />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {merged.navigation.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-bold transition ${
                  idx === 0
                    ? "text-[#0044ff]"
                    : "text-slate-600 hover:text-[#0044ff]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
              className="hidden items-center gap-1.5 rounded-full border border-[#0044ff]/30 bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-[#0044ff] sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{primaryPhone}</span>
            </a>
            <a
              href="#dat-lich"
              className="rounded-full bg-[#0044ff] px-5 py-2 text-xs font-bold text-white shadow-md transition hover:bg-[#0033cc]"
            >
              Đặt lịch khám
            </a>
          </div>
        </div>
      </header>

      {/* ==================== 2. HERO SHOWCASE & TILTED CREAM 8-SERVICE CARD (MATCHING TMV017) ==================== */}
      <section className="relative overflow-hidden bg-slate-900 pt-10 pb-20">
        {/* Clinical Interior Background */}
        <img
          src={merged.hero.backgroundImage}
          alt={merged.hero.title}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        {/* Royal Blue Bottom Gradient Overlay matching TMV017 */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-[#0038d6]/65 to-[#0033cc]" />

        {/* Wall Motto Sign ("new vision / new life.") on Top Right */}
        <div className="pointer-events-none absolute right-8 top-12 hidden select-none text-right font-sans text-3xl font-light leading-tight text-white/35 lg:block">
          {merged.heroWallMotto}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          {/* Top Stacked Purple & Hot-Pink Ribbons */}
          <div className="flex flex-col items-start gap-2.5">
            <div className="inline-block bg-[#6e11b0] px-5 py-2.5 shadow-lg sm:px-7 sm:py-3">
              <h1 className="font-sans text-xl font-black uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                {merged.heroPurpleRibbon}
              </h1>
            </div>
            <div className="inline-block bg-[#f01e8c] px-5 py-2.5 shadow-lg sm:px-7 sm:py-3">
              <p className="font-sans text-lg font-extrabold uppercase tracking-wide text-white sm:text-2xl lg:text-3xl">
                {merged.heroPinkRibbon}
              </p>
            </div>
          </div>

          {/* Lower Asymmetric Showcase Row: Left White Logo Pill + Pink Curved Arrow + Right Cream 8-Service Card */}
          <div
            id="tam-chuyen-khoa"
            className="mt-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-12"
          >
            {/* Left 4 Cols: Curved Pink Arrow + White Rounded Vivision Logo Box */}
            <div className="flex flex-col items-start justify-end gap-6 lg:col-span-4">
              {/* Curved Pink Arrow SVG matching TMV017 */}
              <div className="hidden pl-12 lg:block">
                <svg
                  viewBox="0 0 180 150"
                  className="h-36 w-44 drop-shadow-md"
                  fill="none"
                >
                  <path
                    d="M35 10 C15 70, 50 115, 130 125 L122 108 L162 132 L118 145 L127 132 C35 120, 0 70, 35 10 Z"
                    fill="#f01e8c"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <p className="max-w-sm text-xs leading-relaxed text-blue-100 sm:text-sm">
                {merged.hero.subtitle}
              </p>

              {/* White Rounded Card with Vivision Blue Dot-Cross Logo */}
              <div className="rounded-2xl bg-white px-7 py-5 shadow-2xl">
                <VivisionDotCrossLogo
                  brandName={merged.business.name}
                  size="lg"
                />
              </div>
            </div>

            {/* Right 8 Cols: Tilted Warm Cream Card with Blue Border & 4x2 Service Grid */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border-[2.5px] border-[#0044ff] bg-[#fff7df] p-5 shadow-2xl transition-transform duration-500 sm:p-7 lg:-rotate-1 lg:hover:rotate-0">
                <h2 className="mb-5 text-sm font-bold text-[#0044ff] sm:text-base">
                  <span className="font-extrabold">
                    {merged.creamCardHeader.brandPrefix}
                  </span>{" "}
                  <span className="font-extrabold text-[#f5b000]">
                    {merged.creamCardHeader.goldHighlight}
                  </span>{" "}
                  <span className="underline decoration-[#0044ff]/40 underline-offset-4">
                    {merged.creamCardHeader.restTitle}
                  </span>
                </h2>

                {/* 4x2 = 8 Square Photo Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {merged.eightEyeCareGrid.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedService(item)}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-square overflow-hidden bg-white shadow-xs">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="mt-2 text-xs font-semibold leading-snug text-[#0044ff] group-hover:text-[#f01e8c]">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. GÓI THẨM MỸ VÙNG MẮT & TRẺ HÓA CHUYÊN SÂU ==================== */}
      <section id="goi-tham-my" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0044ff]">
            THẨM MỸ MẮT &amp; NHÃN KHOA CÔNG NGHỆ CAO
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Gói Giải Pháp Kiến Tạo Đôi Mắt Sáng Khỏe &amp; Trẻ Trung
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-slate-500 sm:text-sm">
            Kết hợp tiêu chuẩn an toàn nhãn khoa khắt khe cùng công nghệ thẩm mỹ
            vùng mắt không xâm lấn hàng đầu Hoa Kỳ.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
          {merged.aestheticPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#0044ff] hover:shadow-xl"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#f01e8c] px-3 py-1 text-[10px] font-extrabold uppercase text-white shadow">
                    {pkg.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-extrabold leading-snug text-slate-900">
                    {pkg.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xl font-black text-[#0044ff]">
                      {pkg.price}
                    </span>
                    {pkg.oldPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        {pkg.oldPrice}
                      </span>
                    )}
                  </div>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {pkg.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0044ff]" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6">
                <a
                  href="#dat-lich"
                  onClick={() => setSelectedServiceName(pkg.name)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0044ff] py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#0033cc]"
                >
                  <span>Nhận tư vấn phác đồ</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 4. QUY TRÌNH 5 BƯỚC CHUẨN NHÃN KHOA ==================== */}
      <section id="quy-trinh" className="bg-[#f4f7ff] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-[#0044ff] sm:text-3xl">
              Quy Trình 5 Bước Thăm Khám &amp; Thẩm Mỹ Mắt Chuẩn Y Khoa
            </h2>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Đảm bảo tuyệt đối chức năng thị giác và vẻ đẹp tự nhiên hài hòa cho
              đôi mắt
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {merged.clinicalSteps.map((st) => (
              <div
                key={st.step}
                className="rounded-2xl border border-[#0044ff]/15 bg-white p-5 shadow-xs"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0044ff] text-sm font-black text-white">
                  {st.step}
                </span>
                <h3 className="mt-4 text-sm font-extrabold text-slate-900">
                  {st.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. ĐỘI NGŨ BÁC SĨ CHUYÊN KHOA ==================== */}
      <section id="bac-si" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Đội Ngũ Bác Sĩ Chuyên Khoa Nhãn Khoa &amp; Thẩm Mỹ Mắt
          </h2>
          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            Trực tiếp thăm khám 1:1 và theo dõi suốt hành trình chăm sóc đôi mắt
            của bạn
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {merged.doctors.map((doc) => (
            <div
              key={doc.id}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white text-center shadow-sm"
            >
              <div className="h-72 overflow-hidden bg-blue-50">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-[#fff7df] px-3 py-0.5 text-[11px] font-bold text-[#0044ff]">
                  {doc.experience}
                </span>
                <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                  {doc.name}
                </h3>
                <p className="text-xs font-bold text-[#0044ff]">{doc.title}</p>
                <p className="mt-2 text-xs text-slate-500">{doc.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 6. ĐẶT LỊCH KHÁM & TƯ VẤN TRỰC TUYẾN ==================== */}
      <section id="dat-lich" className="bg-[#0044ff] py-16 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-block rounded bg-[#f01e8c] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider">
              ƯU ĐÃI ĐẶT LỊCH TRƯỚC
            </span>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
              Đặt Lịch Khám Mắt &amp; Tư Vấn Thẩm Mỹ Cùng Bác Sĩ Chuyên Khoa
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-blue-100 sm:text-sm">
              Miễn phí 100% phí đo khúc xạ tự động và phân tích cấu trúc vùng mí
              khi đặt hẹn trước qua hệ thống trực tuyến của{" "}
              <strong>{merged.business.name}</strong>.
            </p>
            <div className="mt-6 space-y-2.5 text-xs text-blue-100">
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#ffd400]" />
                <span>Cam kết bảo mật thông tin hồ sơ bệnh án 100%</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#ffd400]" />
                <span>Không phải chờ đợi — Chủ động khung giờ thăm khám</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleBookingSubmit}
              className="rounded-3xl bg-[#fff7df] p-6 text-slate-800 shadow-2xl sm:p-8"
            >
              <h3 className="text-lg font-extrabold text-[#0044ff]">
                Phiếu Đăng Ký Khám &amp; Tư Vấn Chuyên Khoa Mắt
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Họ và tên khách hàng *
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Nhập họ và tên..."
                    className="mt-1 w-full rounded-xl border border-blue-200 bg-white px-3.5 py-2.5 text-xs focus:border-[#0044ff] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="Nhập số điện thoại..."
                    className="mt-1 w-full rounded-xl border border-blue-200 bg-white px-3.5 py-2.5 text-xs focus:border-[#0044ff] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Dịch vụ quan tâm
                  </label>
                  <select
                    value={selectedServiceName}
                    onChange={(e) => setSelectedServiceName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-blue-200 bg-white px-3.5 py-2.5 text-xs focus:border-[#0044ff] focus:outline-none"
                  >
                    {merged.eightEyeCareGrid.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    {merged.aestheticPackages.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Ngày hẹn dự kiến
                  </label>
                  <input
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-blue-200 bg-white px-3.5 py-2.5 text-xs focus:border-[#0044ff] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-[#0044ff] py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition hover:bg-[#0033cc]"
              >
                XÁC NHẬN ĐẶT LỊCH HẸN NGAY
              </button>

              {bookingSuccess && (
                <p className="mt-3 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>
                    Đã ghi nhận lịch hẹn khám &ldquo;{selectedServiceName}&rdquo;
                    ngày {appointmentDate}!
                  </span>
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ==================== 7. FOOTER ==================== */}
      <footer className="bg-slate-950 py-12 text-slate-400">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="inline-block rounded-xl bg-white px-4 py-2">
                <VivisionDotCrossLogo
                  brandName={merged.business.name}
                  size="sm"
                />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                {merged.business.tagline}. Nâng tầm thị lực, nâng tầm cuộc sống
                với đội ngũ chuyên gia nhãn khoa &amp; tạo hình thẩm mỹ vùng mắt
                hàng đầu.
              </p>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0044ff]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#0044ff]" />
                  <span className="font-bold text-white">{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#0044ff]" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                CHUYÊN KHOA MẮT
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs">
                {merged.eightEyeCareGrid.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <a href="#tam-chuyen-khoa" className="hover:text-white">
                      • {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
            © Bản quyền thuộc về{" "}
            <strong className="text-white">{merged.business.name}</strong> •
            New Vision, New Life.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
