"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Check,
  CheckCircle2,
  Star,
  ArrowRight,
  Play,
  Stethoscope,
  Activity,
  ClipboardCheck,
  Award,
  Users,
  HeartPulse,
  Eye,
  Search,
  User,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongKham2DefaultData,
  type PhongKham2Data
} from "@/template-sources/phong_kham_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongKham2Data = adaptClonedTemplateData(
    phongKham2DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(
    data.departments?.[0]?.title || "Khoa Tim Mạch & Nội Tiết"
  );
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 6868";
  const primaryEmail = data.business.email?.[0] || "cskh@lifecareclinic.vn";

  const scrollToAppointment = (deptName?: string) => {
    if (deptName) setSelectedDepartment(deptName);
    setBookingSubmitted(false);
    const el = document.getElementById("dat-lich-kham");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#112d4e] font-sans selection:bg-[#00a8cc] selection:text-white">
      {/* 1. TOPBAR + WHITE MEDICAL HEADER */}
      <div className="bg-[#112d4e] text-white text-xs py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1.5 text-sky-100">
              <MapPin className="w-3.5 h-3.5 text-[#00a8cc] shrink-0" />
              <span>{data.business.address}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-sky-100">
              <Clock className="w-3.5 h-3.5 text-[#00a8cc] shrink-0" />
              <span>
                {data.business.workingHours || "Thứ 2 - Thứ 7: 07:30 - 19:00"}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-[#00a8cc] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Cấp cứu 24/7: {primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* White Sticky Medical Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Medical Cross + Brand Name */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00a8cc] to-[#112d4e] text-white flex items-center justify-center shadow-md">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold text-[#112d4e] tracking-tight leading-none">
                {data.business.name}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#00a8cc] mt-1">
                Multi-Specialty Clinic
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#112d4e]/85">
            <a href="#trang-chu" className="text-[#00a8cc]">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#00a8cc] transition-colors">
              Giới thiệu
            </a>
            <a href="#dich-vu" className="hover:text-[#00a8cc] transition-colors">
              Dịch vụ
            </a>
            <a href="#chuyen-khoa" className="hover:text-[#00a8cc] transition-colors">
              Chuyên khoa
            </a>
            <a href="#tin-tuc" className="hover:text-[#00a8cc] transition-colors">
              Tin tức
            </a>
            <a href="#dat-lich-kham" className="hover:text-[#00a8cc] transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => scrollToAppointment()}
              className="w-9 h-9 rounded-full bg-[#112d4e] text-white flex items-center justify-center hover:bg-[#00a8cc] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToAppointment()}
              className="bg-[#00a8cc] hover:bg-[#0284c7] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md shadow-[#00a8cc]/25 transition-all cursor-pointer"
            >
              Đặt lịch khám
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#112d4e]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2.5 text-sm font-semibold">
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#00a8cc]"
            >
              Dịch vụ y tế
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#00a8cc]"
            >
              Giới thiệu phòng khám
            </a>
            <a
              href="#chuyen-khoa"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#00a8cc]"
            >
              Chuyên khoa & Đội ngũ
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#00a8cc]"
            >
              Cẩm nang sức khỏe
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToAppointment();
              }}
              className="w-full bg-[#00a8cc] text-white py-3 rounded-full font-bold"
            >
              Đặt lịch khám
            </button>
          </div>
        )}
      </header>

      {/* 2. CYAN MEDICAL HERO (#00a8cc gradient) */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-r from-[#00a8cc] via-[#0284c7] to-[#00b4d8] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5 z-10">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {data.hero.eyebrow || "CHĂM SÓC SỨC KHỎE TOÀN DIỆN"}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.15]">
                {data.hero.title}
              </h1>

              <p className="text-sky-50 text-sm sm:text-base leading-relaxed max-w-xl">
                {data.hero.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={data.hero.ctaLink || "#dich-vu"}
                  className="bg-[#112d4e] hover:bg-[#0b1f36] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all"
                >
                  {data.hero.ctaText || "Xem dịch vụ"}
                </a>
                <button
                  onClick={() => scrollToAppointment()}
                  className="bg-white hover:bg-sky-50 text-[#112d4e] font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
                >
                  {data.hero.secondaryCtaText || "Đặt lịch khám"}
                </button>
              </div>
            </div>

            {/* Right Doctor Portrait */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.business.name}
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3 OVERLAPPING SERVICE PILLAR CARDS */}
      <section id="dich-vu" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-lg text-[#00a8cc]">
              Chăm sóc y tế & tổng quát
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#112d4e]">
              Dịch vụ hàng đầu
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-500">
              Mang đến trải nghiệm chăm sóc đáng tin cậy và đội ngũ chuyên gia tận tâm,
              giúp bạn sống một cuộc sống khỏe mạnh và tràn đầy năng lượng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.servicePillars || phongKham2DefaultData.servicePillars).map(
              (pillar, idx) => (
                <div
                  key={pillar.id}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-md hover:shadow-xl transition-all text-center flex flex-col justify-between"
                >
                  <div>
                    <div className="relative mb-9">
                      <div className="h-44 rounded-xl overflow-hidden">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Overlapping Circular Navy Icon */}
                      <div className="w-14 h-14 rounded-full bg-[#112d4e] text-white flex items-center justify-center shadow-lg border-4 border-white absolute -bottom-7 left-1/2 -translate-x-1/2">
                        {idx === 0 ? (
                          <ClipboardCheck className="w-6 h-6" />
                        ) : idx === 1 ? (
                          <Activity className="w-6 h-6" />
                        ) : (
                          <Stethoscope className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#112d4e] px-2">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-500 leading-relaxed px-2">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => scrollToAppointment(pillar.title)}
                      className="w-9 h-9 rounded-full bg-[#00a8cc] hover:bg-[#112d4e] text-white inline-flex items-center justify-center transition-colors cursor-pointer"
                      aria-label={pillar.title}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SPLIT SECTION ("Bất ngờ với dịch vụ chăm sóc sức khỏe chuẩn quốc tế") */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-[#f0f9ff]/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5">
              <span className="font-serif italic text-lg text-[#00a8cc] block">
                Chăm sóc y tế & tổng quát
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112d4e] leading-tight">
                {data.business.aboutTitle ||
                  "Bất ngờ với dịch vụ chăm sóc sức khỏe chuẩn quốc tế"}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {data.business.aboutText.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* 24/7 Phone Callout */}
              <div className="pt-2 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#00a8cc]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    DỊCH VỤ 24/7
                  </span>
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="text-lg font-extrabold text-[#112d4e] hover:text-[#00a8cc]"
                  >
                    {primaryPhone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => scrollToAppointment()}
                  className="bg-[#00a8cc] hover:bg-[#0284c7] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md transition-colors cursor-pointer"
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>

            {/* Right Clinical Team Photo Card with "30+ Năm Kinh Nghiệm Y Khoa" Badge + Play Button */}
            <div className="lg:col-span-6 relative">
              <div className="bg-white p-3.5 rounded-3xl shadow-xl relative">
                <div className="relative rounded-2xl overflow-hidden h-[360px]">
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
                    alt="Đội ngũ bác sĩ"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#112d4e]/20 flex items-center justify-center">
                    <button
                      onClick={() => setVideoModalOpen(true)}
                      className="w-16 h-16 rounded-full bg-[#00a8cc] hover:bg-[#0284c7] text-white flex items-center justify-center shadow-2xl ring-8 ring-white/40 transition-transform hover:scale-105 cursor-pointer"
                      aria-label="Xem giới thiệu phòng khám"
                    >
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </button>
                  </div>
                </div>

                {/* 30+ Years Experience Badge */}
                <div className="absolute -bottom-4 left-8 bg-white px-6 py-4 rounded-2xl shadow-lg border border-sky-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#00a8cc]">
                    {data.business.experienceYears || "30+"}
                  </div>
                  <div className="text-xs font-bold text-[#112d4e]">
                    Năm Kinh Nghiệm Y Khoa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3 LARGE STAT CARDS + 6. "CHÚNG TÔI Ở ĐÂY VÌ BẠN" SPLIT SECTION */}
      <section id="dat-lich-kham" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3 Large Stat Cards Bar */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.stats || phongKham2DefaultData.stats || []).map((st, idx) => (
              <div key={st.id} className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-[#112d4e] text-[#112d4e] flex items-center justify-center shrink-0">
                  {idx === 0 ? (
                    <Users className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <Stethoscope className="w-6 h-6" />
                  ) : (
                    <Award className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#00a8cc]">
                    {st.number}
                  </div>
                  <div className="text-sm font-extrabold text-[#112d4e]">
                    {st.title}
                  </div>
                  {st.subtitle && (
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                      {st.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 6. "Chúng tôi ở đây vì bạn" Split Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: 6 Medical Quality Checkmarks */}
            <div className="lg:col-span-6 space-y-5">
              <span className="font-serif italic text-lg text-[#00a8cc] block">
                Chăm sóc y tế & tổng quát
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112d4e]">
                Chúng tôi ở đây vì bạn
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dịch vụ chăm sóc sức khỏe tận tâm, đáng tin cậy và luôn đặt sự an toàn,
                thuận tiện của người bệnh lên hàng đầu.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {(
                  data.qualityCheckmarks ||
                  phongKham2DefaultData.qualityCheckmarks
                ).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-[#112d4e]">
                    <Check className="w-4 h-4 text-[#00a8cc] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 bg-[#00a8cc] hover:bg-[#0284c7] text-white text-xs font-bold px-6 py-3 rounded-full shadow-md transition-colors"
                >
                  <span>Liên hệ ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Side: Deep Navy (#112d4e) Header Appointment Booking Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white">
                {/* Deep Navy Card Header */}
                <div className="bg-[#112d4e] text-white p-6 sm:p-7 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold">Đặt lịch hẹn</h3>
                    <p className="text-xs text-sky-200 mt-0.5">
                      Hãy gọi hoặc điền thông tin để nhận số thứ tự ưu tiên
                    </p>
                  </div>
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="w-12 h-12 rounded-full bg-[#00a8cc] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

                {/* Form Body */}
                <div className="p-6 sm:p-8">
                  {bookingSubmitted ? (
                    <div className="text-center py-6 space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-[#00a8cc] mx-auto" />
                      <h4 className="text-lg font-extrabold text-[#112d4e]">
                        Đã đăng ký lịch khám thành công!
                      </h4>
                      <p className="text-xs text-slate-600">
                        Tổng đài viên của <strong>{data.business.name}</strong> sẽ gửi mã số khám ưu tiên
                        qua SMS/Zalo cho quý khách trong ít phút.
                      </p>
                      <button
                        onClick={() => setBookingSubmitted(false)}
                        className="bg-[#00a8cc] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
                      >
                        Đặt lịch khác
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setBookingSubmitted(true);
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <select
                          value={selectedDepartment}
                          onChange={(e) => setSelectedDepartment(e.target.value)}
                          className="w-full border border-slate-200 rounded-full px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-[#00a8cc]"
                        >
                          {(
                            data.departments ||
                            phongKham2DefaultData.departments
                          ).map((d) => (
                            <option key={d.id} value={d.title}>
                              {d.title}
                            </option>
                          ))}
                        </select>

                        <select className="w-full border border-slate-200 rounded-full px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-[#00a8cc]">
                          <option>— Chọn bác sĩ chuyên khoa —</option>
                          <option>PGS. TS. BS Nguyễn Văn Minh</option>
                          <option>TS. BS Trần Thị Thu Hà</option>
                          <option>BS. CKII Lê Hoàng Nam</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          required
                          placeholder="Họ và tên *"
                          className="w-full border border-slate-200 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-[#00a8cc]"
                        />
                        <input
                          type="email"
                          placeholder="Địa chỉ Email"
                          className="w-full border border-slate-200 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-[#00a8cc]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          required
                          placeholder="Số điện thoại *"
                          className="w-full border border-slate-200 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-[#00a8cc]"
                        />
                        <input
                          type="date"
                          required
                          className="w-full border border-slate-200 rounded-full px-4 py-2.5 text-xs text-slate-600 focus:outline-none focus:border-[#00a8cc]"
                        />
                      </div>

                      <div className="pt-2 text-center">
                        <button
                          type="submit"
                          className="bg-[#00a8cc] hover:bg-[#0284c7] text-white font-bold text-xs px-8 py-3 rounded-full shadow-md transition-colors cursor-pointer"
                        >
                          Đặt lịch hẹn
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEEP NAVY "CHUYÊN KHOA & ĐỘI NGŨ" SHOWCASE (#112d4e) */}
      <section id="chuyen-khoa" className="py-16 lg:py-24 bg-[#112d4e] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-lg text-[#00a8cc]">
              Quá trình nghiên cứu & điều trị
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold">
              Chuyên khoa & Đội ngũ
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-sky-200">
              Mang đến những giải pháp y khoa đột phá và tiên tiến nhất trong lĩnh vực
              chăm sóc sức khỏe đa chuyên khoa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.departments || phongKham2DefaultData.departments).map((dep) => (
              <div key={dep.id} className="group relative pb-10">
                <div className="h-72 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={dep.image}
                    alt={dep.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlapping White Label Card */}
                <div className="absolute bottom-0 inset-x-4 bg-white text-[#112d4e] rounded-xl p-5 shadow-xl text-center">
                  <button
                    onClick={() => scrollToAppointment(dep.title)}
                    className="w-8 h-8 rounded-full bg-[#00a8cc] text-white flex items-center justify-center shadow-md absolute -top-4 right-5 cursor-pointer"
                    aria-label={dep.title}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-semibold text-slate-400 block">
                    {dep.badge}
                  </span>
                  <h3 className="text-base font-extrabold text-[#112d4e] mt-0.5">
                    {dep.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {dep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 2 LARGE PATIENT TESTIMONIAL CARDS + 3 MEDICAL NEWS CARDS + DEEP NAVY FOOTER */}
      <section className="py-16 lg:py-24 bg-[#f0f9ff]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-lg text-[#00a8cc]">
              Lời đánh giá
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#112d4e]">
              Khách hàng đánh giá
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Sự hài lòng và tin tưởng từ bệnh nhân là động lực để chúng tôi nỗ lực mang đến
              dịch vụ chăm sóc sức khỏe tốt nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {(data.testimonials || phongKham2DefaultData.testimonials || [])
              .slice(0, 2)
              .map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-7 shadow-md border border-sky-100 flex flex-col justify-between"
                >
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    “{t.content}”
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-sm text-[#112d4e]">
                        {t.author}
                      </h3>
                      <span className="text-xs text-[#00a8cc] font-semibold">
                        {t.role || "Bệnh nhân"}
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#00a8cc]"
                      />
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 3 MEDICAL NEWS CARDS ("Cẩm nang sức khỏe") */}
      <section id="tin-tuc" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-lg text-[#00a8cc]">
              Cập nhật tin tức
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#112d4e]">
              Cẩm nang sức khỏe
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Cập nhật những thông tin y học dự phòng và xu hướng chăm sóc sức khỏe
              nhanh chóng, đáng tin cậy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || phongKham2DefaultData.news || []).map((post) => {
              const parts = post.date.split(" ");
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white text-[#112d4e] rounded-lg px-2.5 py-1.5 text-center shadow-md leading-tight">
                      <span className="block text-sm font-extrabold">
                        {parts[0] || "23"}
                      </span>
                      <span className="block text-[10px] text-slate-500">
                        {parts.slice(1).join(" ") || "Th10"}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                        <span>Chuyên mục: {post.category || "Y khoa"}</span>
                        <span>•</span>
                        <span>{data.business.name}</span>
                      </div>
                      <h3 className="font-extrabold text-base text-[#112d4e] line-clamp-2 hover:text-[#00a8cc] transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <button
                      onClick={() => scrollToAppointment()}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#00a8cc] hover:text-[#112d4e] transition-colors cursor-pointer"
                    >
                      <span>Đọc thêm</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEEP NAVY FOOTER (#112d4e) + CYAN BOTTOM BAR */}
      <footer className="bg-[#112d4e] text-white pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-xs">
            {/* Col 1: Giới thiệu */}
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-extrabold text-white">Giới thiệu</h4>
                <span className="inline-block w-8 h-0.5 bg-[#00a8cc] mt-1" />
              </div>
              <p className="text-sky-100/80 leading-relaxed">
                {data.business.name} cung cấp dịch vụ khám chữa bệnh đa khoa chất lượng cao,
                tầm soát chuyên sâu và bảo lãnh viện phí nhanh chóng.
              </p>
              <div className="space-y-2 pt-1 text-sky-100">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00a8cc]" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="font-bold text-white hover:text-[#00a8cc]"
                  >
                    {primaryPhone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00a8cc]" />
                  <span>{primaryEmail}</span>
                </p>
              </div>
            </div>

            {/* Col 2: Hoạt động */}
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-extrabold text-white">Hoạt động</h4>
                <span className="inline-block w-8 h-0.5 bg-[#00a8cc] mt-1" />
              </div>
              <div className="space-y-2 text-sky-100/90">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Thứ 2 - Thứ 6:</span>
                  <span className="font-semibold text-white">07:30 sáng - 19:00 tối</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Thứ 7:</span>
                  <span className="font-semibold text-white">07:30 sáng - 17:00 chiều</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Chủ nhật:</span>
                  <span className="font-semibold text-white">08:00 sáng - 12:00 trưa</span>
                </div>
              </div>
              <p className="flex items-start gap-2 text-sky-100 pt-1">
                <MapPin className="w-4 h-4 text-[#00a8cc] shrink-0 mt-0.5" />
                <span className="underline">{data.business.address}</span>
              </p>
            </div>

            {/* Col 3: Tin tức / Hình ảnh phòng khám */}
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-extrabold text-white">Hình ảnh Y khoa</h4>
                <span className="inline-block w-8 h-0.5 bg-[#00a8cc] mt-1" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(data.footerGallery || phongKham2DefaultData.footerGallery).map(
                  (img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="Clinic"
                      className="w-full h-16 object-cover rounded-lg"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Cyan Bottom Copyright Bar */}
        <div className="bg-[#00a8cc] text-white py-3.5 text-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} {data.business.name}. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#gioi-thieu" className="hover:underline">
                Chính sách
              </a>
              <a href="#dich-vu" className="hover:underline">
                Điều khoản
              </a>
              <a href="#chuyen-khoa" className="hover:underline">
                Giới thiệu
              </a>
              <a href="#dat-lich-kham" className="hover:underline">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* VIDEO / CLINIC HIGHLIGHT MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#112d4e]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#112d4e]">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00a8cc]">
              Tiêu chuẩn JCI Quốc Tế
            </span>
            <h3 className="text-xl font-extrabold mt-1">
              Hệ thống Y khoa {data.business.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Với hơn {data.business.experienceYears || "30+"} năm kinh nghiệm, phòng khám được
              trang bị trung tâm xét nghiệm tự động hóa hoàn toàn và đội ngũ Giáo sư, Bác sĩ
              đầu ngành trực tiếp thăm khám.
            </p>
            <div className="mt-4 rounded-2xl overflow-hidden h-52">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80"
                alt="Clinic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => {
                  setVideoModalOpen(false);
                  scrollToAppointment();
                }}
                className="bg-[#00a8cc] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
              >
                Đặt lịch khám ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
