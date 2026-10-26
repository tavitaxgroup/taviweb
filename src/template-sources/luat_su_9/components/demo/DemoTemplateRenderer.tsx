"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Home,
  Search,
  ChevronDown,
  ChevronRight,
  CheckSquare,
  Send,
  BarChart3,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu9DefaultData,
  type Luat9Data
} from "@/template-sources/luat_su_9/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Luat9Data = adaptClonedTemplateData(luatSu9DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    data.services?.[0]?.title || "Chuyển đổi kinh doanh"
  );
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@yttranlaw.vn";

  const openConsultModal = (srvTitle?: string) => {
    if (srvTitle) setSelectedService(srvTitle);
    setConsultSubmitted(false);
    setConsultModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans selection:bg-[#0068a5] selection:text-white">
      {/* 1. TOP WHITE BRAND & CONTACT HEADER */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#trang-chu" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-[#0c2340] flex items-center justify-center text-[#00a8ff] shadow-xs">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg sm:text-xl font-extrabold text-[#0068a5]">
                {data.business.name}
              </span>
              <span className="block text-[10px] text-gray-500">
                {data.companyTagline || "Công ty tư vấn doanh nghiệp"}
              </span>
            </div>
          </a>

          {/* Contact Items */}
          <div className="hidden lg:flex items-center gap-6 text-xs text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#0068a5] text-white flex items-center justify-center shrink-0">
                <Home className="w-3.5 h-3.5" />
              </span>
              <span className="font-medium">{data.business.address}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#0068a5] text-white flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span className="font-medium">{primaryPhone}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#0068a5] text-white flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </span>
              <span className="font-medium">{primaryEmail}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0068a5]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 2. BLUE NAVIGATION BAR (#0068a5) */}
      <header className="sticky top-0 z-40 bg-[#0068a5] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center h-full">
            {/* White Home Icon Tab */}
            <a
              href="#trang-chu"
              aria-label="Trang chủ"
              className="h-full px-3.5 bg-white text-[#0068a5] flex items-center justify-center"
            >
              <Home className="w-4 h-4" />
            </a>

            <nav className="hidden lg:flex items-center h-full text-[11px] font-bold uppercase tracking-wide">
              <a
                href="#gioi-thieu"
                className="px-4 h-full flex items-center hover:bg-white/10 transition-colors"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#dich-vu"
                className="px-4 h-full flex items-center gap-1 hover:bg-white/10 transition-colors"
              >
                CHUYỂN ĐỔI KINH DOANH <ChevronDown className="w-3 h-3 opacity-80" />
              </a>
              <a
                href="#dich-vu"
                className="px-4 h-full flex items-center gap-1 hover:bg-white/10 transition-colors"
              >
                TƯ VẤN TIẾP THỊ &amp; THƯƠNG HIỆU{" "}
                <ChevronDown className="w-3 h-3 opacity-80" />
              </a>
              <a
                href="#dich-vu"
                className="px-4 h-full flex items-center hover:bg-white/10 transition-colors"
              >
                TƯ VẤN ĐẦU TƯ CỔ PHẦN VN
              </a>
              <a
                href="#nguyen-tac"
                className="px-4 h-full flex items-center hover:bg-white/10 transition-colors"
              >
                NGUYÊN TẮC
              </a>
              <a
                href="#lien-he"
                className="px-4 h-full flex items-center hover:bg-white/10 transition-colors"
              >
                LIÊN HỆ
              </a>
            </nav>
          </div>

          <button
            type="button"
            onClick={() => openConsultModal()}
            aria-label="Tìm kiếm"
            className="p-2 text-white/90 hover:text-white cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#00578a] px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              CHUYỂN ĐỔI KINH DOANH
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              TƯ VẤN TIẾP THỊ &amp; THƯƠNG HIỆU
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              TƯ VẤN ĐẦU TƯ CỔ PHẦN VN
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 3. CORPORATE HERO WITH DARK TRANSLUCENT LEFT BOX */}
      <section
        id="trang-chu"
        className="relative h-[440px] sm:h-[520px] w-full overflow-hidden flex items-center"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="bg-[#222222]/65 backdrop-blur-[2px] text-white p-6 sm:p-9 max-w-lg rounded-xs shadow-xl">
            <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
              {data.hero.eyebrow || "CÔNG TY TƯ VẤN DOANH NGHIỆP"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              {data.business.name}
            </h1>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-6">
              {data.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openConsultModal()}
                className="inline-flex items-center gap-1.5 bg-[#0068a5] hover:bg-[#005587] text-white text-xs font-bold px-5 py-2.5 rounded-sm transition-colors cursor-pointer"
              >
                <span>{data.hero.ctaText || "Liên hệ ngay"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={data.hero.secondaryCtaLink || "#dich-vu"}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-[#222222] text-xs font-bold px-5 py-2.5 rounded-sm transition-colors"
              >
                <span>{data.hero.secondaryCtaText || "Xem dịch vụ"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GIỚI THIỆU + 2x2 ENTERPRISE CLIENT CASE STUDIES */}
      <section id="gioi-thieu" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 4 Cols: Giới thiệu */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-extrabold text-[#222222] mb-4">
              {data.business.aboutTitle || "Giới thiệu"}
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed text-justify mb-6">
              {data.aboutLongParagraph || data.business.aboutText?.[0]}
            </p>
            <button
              type="button"
              onClick={() => openConsultModal("Tư vấn chiến lược & Pháp lý doanh nghiệp")}
              className="inline-flex items-center gap-1 bg-[#0068a5] hover:bg-[#005587] text-white text-xs font-bold px-5 py-2 rounded-sm transition-colors cursor-pointer"
            >
              <span>Tìm hiểu thêm</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right 8 Cols: 2x2 Client Case Studies Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(data.clientCases || luatSu9DefaultData.clientCases).map((item) => (
              <div key={item.id} className="group">
                <div className="h-40 overflow-hidden bg-gray-100 border border-gray-100 mb-2.5">
                  <img
                    src={item.image}
                    alt={item.companyName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-[#222222]">
                  {item.companyName}
                </h3>
                <p className="text-[11px] text-gray-500">{item.roleTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NGUYÊN TẮC HOẠT ĐỘNG (50/50 SPLIT WITH #0068a5 BLUE PANEL) */}
      <section id="nguyen-tac" className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Team Photo */}
        <div className="min-h-[300px] sm:min-h-[360px] overflow-hidden">
          <img
            src={data.principlesImage}
            alt="Đội ngũ chuyên gia tư vấn pháp lý & tài chính"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Solid Blue Panel */}
        <div className="bg-[#0068a5] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-extrabold mb-6">
            Nguyên tắc hoạt động
          </h2>

          <ul className="space-y-4 text-xs sm:text-sm text-white/95 leading-relaxed">
            {(
              data.operatingPrinciples || luatSu9DefaultData.operatingPrinciples
            ).map((principle, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckSquare className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. DỊCH VỤ (3 COLUMNS) */}
      <section id="dich-vu" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl font-extrabold text-[#222222] mb-10">
            Dịch vụ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.services || luatSu9DefaultData.services || []).map((srv) => (
              <div
                key={srv.id}
                onClick={() => openConsultModal(srv.title)}
                className="group cursor-pointer"
              >
                <div className="h-48 overflow-hidden mb-3 bg-gray-100 border border-gray-100">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-extrabold text-sm text-[#222222] group-hover:text-[#0068a5] transition-colors mb-1">
                  {srv.title}
                </h3>
                <span className="text-xs text-gray-500 group-hover:text-[#0068a5]">
                  Xem chi tiết
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK PARALLAX CONTACT STRIP + DARK NAVY FOOTER */}
      <footer id="lien-he" className="text-white">
        {/* Top Dark Parallax Contact Strip */}
        <div
          className="relative py-8 bg-cover bg-center border-b border-white/10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-[#07182e]/85" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#0088cc] text-white flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              <div>
                <span className="block font-bold text-white">Số điện thoại:</span>
                <span className="text-gray-300">{primaryPhone}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#0088cc] text-white flex items-center justify-center shrink-0">
                <Home className="w-4 h-4" />
              </span>
              <div>
                <span className="block font-bold text-white">Văn phòng chính:</span>
                <span className="text-gray-300">{data.business.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#0088cc] text-white flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <span className="block font-bold text-white">Email:</span>
                <span className="text-gray-300">{primaryEmail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dark Navy Footer */}
        <div className="bg-[#081c36] py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#0d2b52] flex items-center justify-center text-[#00a8ff]">
                <BarChart3 className="w-7 h-7" />
              </div>
              <div>
                <span className="block text-xl font-extrabold text-white">
                  {data.business.name}
                </span>
                <span className="block text-xs text-gray-300">
                  {data.companyTagline || "Công ty tư vấn doanh nghiệp"}
                </span>
              </div>
            </div>

            {/* Center Newsletter */}
            <div className="text-center">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-1.5">
                ĐĂNG KÝ
              </h4>
              <p className="text-[11px] text-gray-300 mb-3">
                Đăng ký để nhận được thông tin mới nhất từ chúng tôi.
              </p>

              {newsletterDone ? (
                <div className="bg-white/10 text-white text-xs py-2 px-3 rounded inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00a8ff]" />
                  <span>Đã đăng ký nhận bản tin pháp lý!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex items-center bg-white rounded-xs overflow-hidden h-9 max-w-xs mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email ..."
                    className="w-full px-3 text-xs text-gray-800 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Đăng ký"
                    className="h-full px-3 text-[#0068a5] hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Social Circles */}
            <div className="flex items-center justify-center md:justify-end gap-2.5">
              {["f", "t", "g+", "in"].map((soc) => (
                <a
                  key={soc}
                  href="#lien-he"
                  className="w-8 h-8 rounded-full border border-white/40 hover:border-white text-xs font-bold flex items-center justify-center transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="bg-[#040d1a] py-3 text-center text-[11px] text-gray-400">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
        </div>
      </footer>

      {/* Consultation Modal */}
      {consultModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setConsultModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-extrabold uppercase text-[#0068a5] mb-1">
              Đặt Lịch Tư Vấn Pháp Lý &amp; Doanh Nghiệp
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Đội ngũ luật sư &amp; cố vấn tài chính {data.business.name} sẽ liên hệ hỗ trợ Quý
              doanh nghiệp.
            </p>

            {consultSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#0068a5] mx-auto mb-3" />
                <p className="font-bold text-sm text-gray-800 mb-1">
                  Đã tiếp nhận yêu cầu tư vấn!
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Chuyên gia phụ trách mảng <strong>{selectedService}</strong> sẽ liên hệ với Quý
                  khách ngay.
                </p>
                <button
                  type="button"
                  onClick={() => setConsultModalOpen(false)}
                  className="bg-[#0068a5] text-white text-xs font-bold uppercase px-6 py-2 rounded-sm cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultSubmitted(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Tên doanh nghiệp / Cá nhân *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập tên doanh nghiệp hoặc họ tên"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#0068a5]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Nhập số điện thoại liên hệ"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#0068a5]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Lĩnh vực tư vấn
                  </label>
                  <input
                    type="text"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#0068a5]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0068a5] hover:bg-[#005587] text-white font-bold uppercase py-2.5 rounded-sm transition-colors cursor-pointer"
                >
                  GỬI YÊU CẦU TƯ VẤN
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
