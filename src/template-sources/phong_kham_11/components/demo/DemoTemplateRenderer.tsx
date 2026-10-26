"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Bell,
  Award,
  PlusSquare,
  Star,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  UserCheck,
  ShieldCheck
} from "lucide-react";
import { adaptClonedTemplateData, type ClonedTemplateInput } from "@/lib/demo/clonedTemplateUtils";
import { phongKham11DefaultData, type PhongKham11Data } from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  companyName?: string;
}

export function DemoTemplateRenderer({ data, companyName }: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<PhongKham11Data>(phongKham11DefaultData, {
    ...(data || {}),
    ...(companyName ? { companyName } : {})
  });

  const [heroName, setHeroName] = useState("");
  const [heroPhone, setHeroPhone] = useState("");
  const [heroConsultSubmitted, setHeroConsultSubmitted] = useState(false);

  const [midName, setMidName] = useState("");
  const [midPhone, setMidPhone] = useState("");
  const [midSubmitted, setMidSubmitted] = useState(false);

  const [orderName, setOrderName] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderQty, setOrderQty] = useState("1");
  const [orderNote, setOrderNote] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);

  const renderDoctorDivider = () => (
    <div className="my-2.5 flex items-center justify-center gap-2 text-[#1b6b3a]">
      <span className="h-[1px] w-8 bg-[#1b6b3a]/40" />
      <UserCheck className="h-4 w-4" />
      <span className="h-[1px] w-8 bg-[#1b6b3a]/40" />
    </div>
  );

  const leftHerbs = merged.herbalIngredients.filter((h) => h.position === "left");
  const topHerb = merged.herbalIngredients.find((h) => h.position === "top");
  const rightHerbs = merged.herbalIngredients.filter((h) => h.position === "right");

  return (
    <div id="top" className="min-h-screen bg-white font-sans text-gray-800 antialiased">
      {/* ==================== 1. DEEP HERBAL GREEN HEADER & HERO ==================== */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1a4d2e] via-[#1e5e37] to-[#144225] text-white">
        {/* Background Herbal Leaf Texture */}
        <img
          src={merged.hero.backgroundImage}
          alt={merged.productName}
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
        />

        {/* Top Split Navigation Bar with Center Circular Emblem */}
        <header className="relative z-20 border-b border-white/15 bg-black/15">
          <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between px-4 py-3">
            {/* Left Nav Links */}
            <nav className="hidden items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-white/90 lg:flex">
              <a href="#top" className="text-[#c6ff00]">
                HOME
              </a>
              <a href="#lieu-trinh" className="hover:text-[#c6ff00]">
                LIỆU TRÌNH
              </a>
              <a href="#lich-su" className="hover:text-[#c6ff00]">
                GIỚI THIỆU
              </a>
              <a href="#dau-hieu" className="hover:text-[#c6ff00]">
                DẤU HIỆU
              </a>
              <a href="#bien-chung" className="hover:text-[#c6ff00]">
                BIẾN CHỨNG
              </a>
            </nav>

            {/* Center Circular Yin-Yang Herbal Emblem */}
            <a
              href="#top"
              className="mx-auto flex flex-col items-center justify-center lg:mx-0"
            >
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-[#aeea00] bg-[#145a32] text-center shadow-lg">
                <span className="text-xl leading-none">🌿</span>
                <span className="mt-0.5 text-[7px] font-extrabold uppercase tracking-tighter text-[#c6ff00]">
                  {merged.business.name}
                </span>
              </div>
            </a>

            {/* Right Nav Links */}
            <nav className="hidden items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-white/90 lg:flex">
              <a href="#san-pham" className="hover:text-[#c6ff00]">
                SẢN PHẨM
              </a>
              <a href="#hieu-qua" className="hover:text-[#c6ff00]">
                HIỆU QUẢ
              </a>
              <a href="#tin-dung" className="hover:text-[#c6ff00]">
                TIN DÙNG
              </a>
              <a href="#cam-nhan" className="hover:text-[#c6ff00]">
                CẢM NHẬN
              </a>
              <a href="#dat-mua-ngay" className="hover:text-[#c6ff00]">
                ĐẶT MUA
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Main Content */}
        <div className="relative z-10 mx-auto max-w-[1080px] px-4 pb-14 pt-8 text-center">
          <h1 className="text-2xl font-black uppercase tracking-wide text-[#d4ff33] drop-shadow-xs sm:text-3xl">
            {merged.hero.eyebrow}
          </h1>
          <p className="mt-1 text-base font-extrabold uppercase tracking-wide text-[#e2ff70] sm:text-xl">
            {merged.hero.title}
          </p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-gray-200">
            {merged.licenseNumber}
          </p>

          {/* 2-Column Hero Showcase: Left Product Box + Right Frosted Consultation Form */}
          <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            {/* Left Product Box & Bottle */}
            <div className="flex flex-col items-center justify-center md:col-span-6">
              <div className="relative flex items-center justify-center gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-xs">
                {/* Herbal Green Box */}
                <div className="flex h-56 w-36 flex-col justify-between rounded-lg border-2 border-[#aeea00] bg-gradient-to-b from-[#2e7d32] to-[#1b5e20] p-3 text-center shadow-2xl">
                  <span className="text-[9px] font-bold uppercase text-[#d4ff33]">
                    {merged.business.name}
                  </span>
                  <div className="rounded bg-white py-3 text-[#1b5e20]">
                    <p className="text-sm font-black leading-tight">
                      TÂM
                      <br />
                      AN
                      <br />
                      LẠC
                      <br />
                      TIÊN
                    </p>
                  </div>
                  <span className="text-[8px] uppercase text-white/90">
                    100% Thảo Dược Tự Nhiên
                  </span>
                </div>

                {/* Pill Bottle */}
                <div className="flex h-48 w-32 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-3 text-center text-[#1b5e20] shadow-2xl">
                  <div className="mx-auto h-5 w-20 rounded-t bg-gray-100" />
                  <div className="rounded border border-[#2e7d32] bg-[#f1f8e9] py-2.5">
                    <span className="text-lg">🌿</span>
                    <p className="mt-0.5 text-[10px] font-black uppercase">
                      TÂM AN LẠC TIÊN
                    </p>
                  </div>
                  <span className="text-[8px] font-semibold text-gray-500">
                    Hộp 60 viên hoàn
                  </span>
                </div>
              </div>
            </div>

            {/* Right Frosted Consultation Card */}
            <div className="md:col-span-6">
              <div className="mx-auto max-w-md rounded-xl border border-white/25 bg-white/15 p-6 text-center shadow-2xl backdrop-blur-md">
                <h2 className="text-base font-extrabold uppercase tracking-wider text-white">
                  ĐĂNG KÝ TƯ VẤN
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-100">
                  {merged.hero.subtitle}
                </p>

                {heroConsultSubmitted ? (
                  <div className="mt-4 rounded-lg bg-[#145a32] p-4 text-xs text-[#d4ff33]">
                    <CheckCircle2 className="mx-auto mb-1.5 h-7 w-7" />
                    <p className="font-bold">Đã đăng ký tư vấn thành công!</p>
                    <p className="mt-1 text-white">
                      Bác sĩ Đông Y {merged.business.name} sẽ liên hệ SĐT{" "}
                      <strong>{heroPhone}</strong> ngay.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setHeroConsultSubmitted(true);
                    }}
                    className="mt-4 space-y-3"
                  >
                    <input
                      type="text"
                      required
                      value={heroName}
                      onChange={(e) => setHeroName(e.target.value)}
                      placeholder="Họ và tên"
                      className="w-full rounded-xs bg-white px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      value={heroPhone}
                      onChange={(e) => setHeroPhone(e.target.value)}
                      placeholder="Số điện thoại"
                      className="w-full rounded-xs bg-white px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="mt-1 inline-block rounded-xs border border-[#aeea00] bg-[#145a32] px-8 py-2 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#aeea00] hover:text-[#145a32]"
                    >
                      {merged.hero.ctaText}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 2. CHỈ MỘT LIỆU TRÌNH HẾT NGAY (4 CIRCULAR ICONS) ==================== */}
      <section id="lieu-trinh" className="mx-auto max-w-[1100px] px-4 py-12 text-center">
        <h2 className="text-xl font-extrabold text-[#145a32] sm:text-2xl">
          Chỉ Một Liệu Trình Hết Ngay
        </h2>
        {renderDoctorDivider()}

        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {merged.quickBenefits.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#f4f9f5] text-4xl shadow-inner">
                {item.iconEmoji}
              </div>
              <p className="mt-3 max-w-[210px] text-xs font-bold leading-snug text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 3. LỊCH SỬ VẠN XUÂN ĐƯỜNG + CÔNG NGHỆ BÀO CHẾ HIỆN ĐẠI ==================== */}
      <section id="lich-su" className="border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Lịch Sử Vạn Xuân Đường (6 cols) */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-12 lg:col-span-6">
            <div>
              <h2 className="text-center text-xl font-extrabold text-[#145a32] sm:text-2xl">
                {merged.historySection.title}
              </h2>
              {renderDoctorDivider()}

              <ul className="mt-6 space-y-4">
                {merged.historySection.paragraphs.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-gray-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#145a32] text-[11px] text-white">
                      ⚕
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 text-center">
              <Bell className="mx-auto mb-1.5 h-5 w-5 text-amber-500" />
              <p className="mx-auto max-w-md text-xs font-bold text-[#d32f2f]">
                {merged.historySection.warningNote}
              </p>
            </div>
          </div>

          {/* Right: CÔNG NGHỆ CHIẾT XUẤT & BÀO CHẾ HIỆN ĐẠI (6 cols) */}
          <div className="bg-gradient-to-br from-[#2b1d12] via-[#3b2818] to-[#1f140d] p-6 text-white sm:p-10 lg:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <div className="sm:col-span-5">
                <h3 className="text-lg font-black uppercase leading-tight text-amber-300">
                  {merged.historySection.techTitle}
                </h3>
              </div>
              <div className="sm:col-span-7">
                <p className="text-[11px] leading-relaxed text-gray-200">
                  {merged.historySection.techDescription}
                </p>
              </div>
            </div>

            {/* 4 Cleanroom Extraction Photos */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {merged.historySection.techImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded border-2 border-amber-200/40 bg-white"
                >
                  <img
                    src={imgUrl}
                    alt={`Công nghệ chiết xuất ${idx + 1}`}
                    className="h-28 w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Certification Badges Row */}
            <p className="mt-5 text-center text-[10px] text-amber-200">
              Đến nay Vạn Xuân Đường là doanh nghiệp tự hào là đơn vị đạt đầy đủ các chứng chỉ
              quốc tế cao:
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              {merged.historySection.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1 rounded-full border border-amber-400 bg-amber-500/20 px-3 py-1 text-[10px] font-extrabold text-amber-300"
                >
                  <Award className="h-3 w-3" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. DẤU HIỆU NGUY HIỂM CỦA MẤT NGỦ (DARK SLATE BANNER) ==================== */}
      <section id="dau-hieu" className="bg-[#1e2a38] py-12 text-white">
        <div className="mx-auto max-w-[1040px] px-4">
          <div className="text-center">
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">
              Dấu Hiệu Nguy Hiểm Của Mất Ngủ
            </h2>
            <div className="my-2 flex items-center justify-center gap-2 text-sky-400">
              <span className="h-[1px] w-8 bg-sky-400/40" />
              <UserCheck className="h-4 w-4" />
              <span className="h-[1px] w-8 bg-sky-400/40" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {merged.dangerSigns.map((sign, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3.5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#aeea00]" />
                <span className="text-xs font-medium text-gray-100">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. MẤT NGỦ MÃN TÍNH DẪN ĐẾN BIẾN CHỨNG NGUY HIỂM (ĐỘT QUỴ) ==================== */}
      <section id="bien-chung" className="mx-auto max-w-[1040px] px-4 py-12">
        <div className="text-center">
          <h2 className="text-xl font-extrabold text-[#145a32] sm:text-2xl">
            {merged.complicationSection.heading}
          </h2>
          {renderDoctorDivider()}
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="flex justify-center md:col-span-5">
            <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-gray-100 shadow-lg">
              <img
                src={merged.complicationSection.image}
                alt="Biến chứng đột quỵ do mất ngủ"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:col-span-7">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded bg-amber-100 text-amber-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black uppercase text-[#d32f2f]">
              {merged.complicationSection.alertTitle}
            </h3>
            {renderDoctorDivider()}
            <p className="mt-3 text-xs leading-relaxed text-gray-600">
              {merged.complicationSection.description}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 6. TÂM AN LẠC TIÊN — GIẢI PHÁP ĐIỀU TRỊ MẤT NGỦ MÃN TÍNH ==================== */}
      <section id="san-pham" className="bg-[#f4f7f4] py-14">
        <div className="mx-auto max-w-[1100px] px-4">
          <div className="text-center">
            <h2 className="text-xl font-black uppercase text-[#145a32] sm:text-2xl">
              {merged.solutionSection.heading}
            </h2>
            <p className="mt-0.5 text-lg font-extrabold text-[#145a32]">
              {merged.solutionSection.subheading}
            </p>
            {renderDoctorDivider()}
          </div>

          {/* 3-Column Solution Grid */}
          <div className="mt-8 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* Left Copy (4 cols) */}
            <div className="text-center text-xs leading-relaxed text-gray-700 lg:col-span-4">
              <h3 className="text-sm font-extrabold text-[#145a32]">
                {merged.solutionSection.commitmentTitle}
              </h3>
              <p className="mt-3">{merged.solutionSection.commitmentDetails}</p>
              <p className="mt-3">{merged.solutionSection.secondaryDetails}</p>
            </div>

            {/* Center Product Image (4 cols) */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-xl border-2 border-[#4caf50] bg-gradient-to-b from-[#aeea00]/40 to-[#2e7d32] p-5 text-center shadow-lg">
                <img
                  src={merged.solutionSection.productImage}
                  alt={merged.productName}
                  className="mx-auto h-52 w-full rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Right Pricing & Quick Consultation Form (4 cols) */}
            <div className="rounded-xl bg-white p-5 shadow-sm lg:col-span-4">
              <h3 className="text-center text-sm font-extrabold uppercase text-[#145a32]">
                {merged.productName}
              </h3>
              <p className="mt-2 text-xs font-extrabold text-[#d32f2f]">
                Giá chỉ: {merged.solutionSection.priceSingle} – {merged.solutionSection.priceCombo}
              </p>
              <p className="mt-1 text-[11px] font-bold text-[#145a32]">
                {merged.solutionSection.promoNote}
              </p>

              {midSubmitted ? (
                <div className="mt-4 rounded bg-green-50 p-3 text-center text-xs text-green-800">
                  ✓ Đã nhận thông tin đặt giữ ưu đãi Mua 3 Tặng 1 cho SĐT{" "}
                  <strong>{midPhone}</strong>!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMidSubmitted(true);
                  }}
                  className="mt-3 space-y-2.5"
                >
                  <input
                    type="text"
                    required
                    value={midName}
                    onChange={(e) => setMidName(e.target.value)}
                    placeholder="Họ và tên"
                    className="w-full rounded border border-gray-200 px-3 py-2 text-xs focus:border-[#145a32] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={midPhone}
                    onChange={(e) => setMidPhone(e.target.value)}
                    placeholder="Số điện thoại"
                    className="w-full rounded border border-gray-200 px-3 py-2 text-xs focus:border-[#145a32] focus:outline-none"
                  />
                  <div className="text-center">
                    <button
                      type="submit"
                      className="rounded bg-[#145a32] px-7 py-2 text-xs font-extrabold uppercase text-white hover:bg-[#1e7b44]"
                    >
                      TƯ VẤN
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Old vs Improved Packaging Banner */}
          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-xl border-2 border-[#4caf50] bg-gradient-to-r from-[#e8f5e9] via-[#c8e6c9] to-[#a5d6a7] p-5 text-center shadow-md">
            <h4 className="text-sm font-black uppercase text-[#145a32]">
              GIÁ KHÔNG ĐỔI VỚI CHẤT LƯỢNG TỐT HƠN
            </h4>
            <div className="mt-4 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <div className="rounded-lg bg-white/90 p-3 shadow-xs">
                <span className="text-[11px] font-extrabold uppercase text-gray-600">
                  SẢN PHẨM CŨ
                </span>
                <p className="mt-1 text-xs font-bold text-[#145a32]">Mẫu hộp truyền thống</p>
              </div>
              <ArrowRight className="h-6 w-6 text-[#145a32]" />
              <div className="rounded-lg border-2 border-[#145a32] bg-white p-3 shadow-md">
                <span className="text-[11px] font-extrabold uppercase text-[#d32f2f]">
                  ĐÃ CẢI TIẾN
                </span>
                <p className="mt-1 text-xs font-bold text-[#145a32]">
                  Tăng gấp đôi hàm lượng Lạc Tiên &amp; Liên Tâm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. TẠI SAO TÂM AN LẠC TIÊN LẠI RẤT HIỆU QUẢ (11-HERB DIAGRAM) ==================== */}
      <section id="hieu-qua" className="mx-auto max-w-[1060px] px-4 py-14">
        <div className="text-center">
          <h2 className="text-xl font-extrabold text-[#145a32] sm:text-2xl">
            Tại Sao {merged.productName} Lại Rất Hiệu Quả
            <br />
            Trong Việc Điều Trị ?
          </h2>
          {renderDoctorDivider()}
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-xs font-semibold text-[#145a32]">
          Với sự kết hợp tinh túy từng thành phần với nhau đã tạo nên phương thuốc với dược
          tính tối đa. Để đảm bảo chữa khỏi bệnh cho bệnh nhân sử dụng đúng liệu trình.
        </p>

        {/* Green Bordered Herbal Formula Diagram */}
        <div className="mt-4 rounded-xl border-2 border-[#2e7d32] bg-white p-6 shadow-md">
          {/* Top Herb (BẠCH THƯỢC) */}
          {topHerb && (
            <div className="mx-auto mb-6 flex max-w-sm items-center gap-3 rounded-lg bg-[#f9fbf9] p-3">
              <img
                src={topHerb.image}
                alt={topHerb.name}
                className="h-14 w-14 shrink-0 rounded-full border-2 border-[#4caf50] object-cover"
              />
              <div>
                <h4 className="text-xs font-extrabold uppercase text-[#d84315]">
                  {topHerb.name}
                </h4>
                <p className="text-[11px] leading-snug text-gray-600">{topHerb.benefit}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* Left 5 Herbs */}
            <div className="space-y-4 lg:col-span-4">
              {leftHerbs.map((herb) => (
                <div key={herb.id} className="flex items-center gap-3">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="h-12 w-12 shrink-0 rounded-full border border-[#4caf50] object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-[#d84315]">
                      {herb.name}
                    </h4>
                    <p className="text-[11px] leading-snug text-gray-600">
                      {herb.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Product Box */}
            <div className="flex flex-col items-center justify-center lg:col-span-4">
              <div className="rounded-2xl border-2 border-[#aeea00] bg-gradient-to-b from-[#2e7d32] to-[#145a32] p-6 text-center text-white shadow-xl">
                <span className="text-3xl">🌿</span>
                <h3 className="mt-2 text-lg font-black uppercase text-[#d4ff33]">
                  {merged.productName}
                </h3>
                <p className="mt-1 text-[11px] text-white/90">
                  Tinh Hoa 11 Vị Thảo Dược Tự Nhiên
                </p>
              </div>
            </div>

            {/* Right 5 Herbs */}
            <div className="space-y-4 lg:col-span-4">
              {rightHerbs.map((herb) => (
                <div key={herb.id} className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-[#d84315]">
                      {herb.name}
                    </h4>
                    <p className="text-[11px] leading-snug text-gray-600">
                      {herb.benefit}
                    </p>
                  </div>
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="h-12 w-12 shrink-0 rounded-full border border-[#4caf50] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 8. TẠI SAO KHÁCH HÀNG LẠI TIN DÙNG (BỘ Y TẾ + HIỆU QUẢ) ==================== */}
      <section id="tin-dung" className="bg-[#edf2ed] py-14">
        <div className="mx-auto max-w-[1060px] px-4">
          <div className="text-center">
            <h2 className="text-xl font-extrabold text-[#145a32] sm:text-2xl">
              Tại Sao Khách Hàng Lại Tin Dùng
              <br />
              {merged.productName}
            </h2>
            {renderDoctorDivider()}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left: + BỘ Y TẾ CẤP PHÉP */}
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded bg-[#b71c1c] px-4 py-2 text-xs font-extrabold uppercase text-white shadow-sm">
                <PlusSquare className="h-4 w-4" />
                <span>BỘ Y TẾ CẤP PHÉP</span>
              </div>

              <div className="w-full rounded-xl border-2 border-[#4caf50] bg-white p-6 text-center shadow-md">
                <ShieldCheck className="mx-auto h-10 w-10 text-[#145a32]" />
                <p className="mt-2 text-[10px] font-bold uppercase text-gray-500">
                  CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                </p>
                <h3 className="mt-1 text-sm font-black uppercase text-[#145a32]">
                  CỤC AN TOÀN THỰC PHẨM — BỘ Y TẾ
                </h3>
                <p className="mt-2 text-xs font-extrabold text-[#b71c1c]">
                  XÁC NHẬN CÔNG BỐ PHÙ HỢP QUY ĐỊNH AN TOÀN THỰC PHẨM
                </p>
                <div className="mt-4 rounded bg-[#f4f9f5] p-4 text-left text-[11px] leading-relaxed text-gray-700">
                  <p>
                    <strong>Tổ chức, cá nhân:</strong> CÔNG TY CỔ PHẦN DƯỢC PHẨM VẠN XUÂN ĐƯỜNG
                  </p>
                  <p className="mt-1">
                    <strong>Sản phẩm:</strong> Thực phẩm bảo vệ sức khỏe{" "}
                    <strong>{merged.productName}</strong>
                  </p>
                  <p className="mt-1">
                    <strong>Số cấp phép:</strong> 12281/2016/ATTP-XNCB
                  </p>
                </div>
              </div>
            </div>

            {/* Right: + HIỆU QUẢ SAU KHI SỬ DỤNG */}
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded bg-[#b71c1c] px-4 py-2 text-xs font-extrabold uppercase text-white shadow-sm">
                <PlusSquare className="h-4 w-4" />
                <span>HIỆU QUẢ SAU KHI SỬ DỤNG</span>
              </div>

              <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-md">
                <div className="overflow-hidden rounded-lg bg-gradient-to-r from-[#2e7d32] to-[#66bb6a] p-4 text-center text-white">
                  <h4 className="text-sm font-black uppercase">{merged.productName}</h4>
                  <p className="text-[11px] text-white/90">
                    Lộ trình phục hồi giấc ngủ tự nhiên theo từng giai đoạn
                  </p>
                </div>

                <div className="mt-4 space-y-3 text-xs leading-relaxed text-gray-700">
                  {merged.trustSection.timelineSteps.map((step) => (
                    <p key={step.stage}>
                      <strong className="text-[#d32f2f]">{step.stage}</strong> {step.text}
                    </p>
                  ))}
                  <p className="rounded bg-amber-50 p-2.5 text-[11px] italic text-gray-700">
                    {merged.trustSection.recommendationNote}
                  </p>
                  <p className="pt-1 text-center text-[11px] font-bold uppercase text-gray-700">
                    {merged.licenseNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 9. CẢM NHẬN CỦA KHÁCH HÀNG (4 CIRCULAR PATIENT CARDS) ==================== */}
      <section id="cam-nhan" className="mx-auto max-w-[1140px] px-4 py-14 text-center">
        <h2 className="text-xl font-extrabold text-[#145a32] sm:text-2xl">
          Cảm Nhận Của Khách Hàng
        </h2>
        {renderDoctorDivider()}

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(merged.testimonials || []).map((t: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={
                  t.avatar ||
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
                }
                alt={t.name}
                className="h-28 w-28 rounded-full border-4 border-[#e8f5e9] object-cover shadow-md"
              />
              <div className="mt-3 flex items-center gap-0.5 text-gray-800">
                {Array.from({ length: t.rating || 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-2.5 text-xs italic leading-relaxed text-gray-600">
                {t.content}
              </p>
              <p className="mt-2 text-xs font-extrabold text-gray-900">
                {t.name} <span className="font-normal text-gray-500">/ {t.role}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 10. DEEP GREEN FOOTER & COUNTDOWN ORDER FORM ==================== */}
      <footer
        id="dat-mua-ngay"
        className="bg-gradient-to-b from-[#164a2b] to-[#0f351e] pt-12 text-white"
      >
        <div className="mx-auto max-w-[1140px] px-4 pb-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Column: Brand & Contact Info (3 cols) */}
            <div className="lg:col-span-3">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-[#aeea00] bg-[#145a32] text-center">
                <span className="text-xl leading-none">🌿</span>
                <span className="text-[7px] font-bold text-[#c6ff00]">
                  {merged.business.name}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5 text-xs text-gray-200">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#aeea00]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#aeea00]" />
                  <span>{merged.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#aeea00]" />
                  <span>{merged.business.email.join(" / ")}</span>
                </li>
              </ul>
            </div>

            {/* Center Column: Đặt Ngay Thời Gian Ưu Đãi Còn + Form (6 cols) */}
            <div className="lg:col-span-6">
              <div className="text-center">
                <h3 className="text-lg font-extrabold text-white">
                  Đặt Ngay
                  <br />
                  Thời Gian Ưu Đãi Còn
                </h3>
              </div>

              {/* 5 Countdown Boxes */}
              <div className="mt-4 grid grid-cols-5 gap-2">
                {[
                  { val: merged.countdown.weeks, label: "WEEKS" },
                  { val: merged.countdown.days, label: "DAYS" },
                  { val: merged.countdown.hours, label: "HOUR" },
                  { val: merged.countdown.minutes, label: "MIN" },
                  { val: merged.countdown.seconds, label: "SEC" }
                ].map((box) => (
                  <div
                    key={box.label}
                    className="rounded border border-white/20 bg-black/50 py-2.5 text-center"
                  >
                    <span className="block text-xl font-black text-white sm:text-2xl">
                      {box.val}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-300">
                      {box.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Order Form */}
              {orderSuccess ? (
                <div className="mt-5 rounded-lg border border-[#aeea00] bg-[#145a32] p-5 text-center text-xs">
                  <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-[#aeea00]" />
                  <p className="text-sm font-extrabold text-[#d4ff33]">
                    Đặt mua {orderQty} liệu trình {merged.productName} thành công!
                  </p>
                  <p className="mt-1 text-gray-100">
                    Nhà thuốc {merged.business.name} sẽ gọi xác nhận qua số{" "}
                    <strong>{orderPhone}</strong> trong ít phút.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setOrderSuccess(true);
                  }}
                  className="mt-4 space-y-2.5"
                >
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      value={orderName}
                      onChange={(e) => setOrderName(e.target.value)}
                      placeholder="Họ và tên:"
                      className="w-full rounded-xs bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                    <input
                      type="email"
                      value={orderEmail}
                      onChange={(e) => setOrderEmail(e.target.value)}
                      placeholder="Email:"
                      className="w-full rounded-xs bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    <input
                      type="tel"
                      required
                      value={orderPhone}
                      onChange={(e) => setOrderPhone(e.target.value)}
                      placeholder="Số điện thoại:"
                      className="w-full rounded-xs bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                    <input
                      type="number"
                      min={1}
                      value={orderQty}
                      onChange={(e) => setOrderQty(e.target.value)}
                      placeholder="Số lượng"
                      className="w-full rounded-xs bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <textarea
                    rows={3}
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Lời nhắn"
                    className="w-full rounded-xs bg-white px-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-xs border border-white/60 bg-[#145a32] py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#aeea00] hover:text-[#145a32]"
                  >
                    ĐẶT MUA
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Working Hours & License (3 cols) */}
            <div className="space-y-5 text-xs lg:col-span-3">
              <div>
                <h4 className="font-extrabold uppercase text-white">THỜI GIAN LÀM VIỆC</h4>
                <p className="mt-1.5 text-gray-200">Làm việc tất cả các ngày trong tuần</p>
                <p className="mt-0.5 font-bold text-[#d4ff33]">
                  Thời gian làm việc: 08h00 - 21h30
                </p>
              </div>

              <div>
                <h4 className="font-extrabold uppercase text-white">GIẤY PHÉP HOẠT ĐỘNG</h4>
                <p className="mt-1.5 text-gray-200">{merged.businessLicenseInfo}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/40 py-3 text-center text-[11px] text-gray-300">
          © Bản quyền thuộc về {merged.business.name} - Thiết kế website{" "}
          <strong className="text-white">Mona Media</strong>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
