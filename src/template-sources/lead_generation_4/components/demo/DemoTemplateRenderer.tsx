"use client";

import React, { useState } from "react";
import {
  Search,
  Star,
  Phone,
  MapPin,
  Mail,
  Play,
  CheckCircle2,
  X,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration4DefaultData,
  type LeadGeneration4Data,
  type HerbalgyProductItem
} from "@/template-sources/lead_generation_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function StarDivider() {
  return (
    <div className="flex items-center justify-center gap-2 my-2">
      <span className="w-12 h-[1px] bg-slate-300" />
      <Star className="w-3.5 h-3.5 text-slate-600 fill-current" />
      <span className="w-12 h-[1px] bg-slate-300" />
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration4Data = adaptClonedTemplateData(
    leadGeneration4DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<HerbalgyProductItem | null>(
    null
  );
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Order form state in footer
  const [orderName, setOrderName] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderQty, setOrderQty] = useState("2 Chai Herbalgy 25ml");
  const [orderNote, setOrderNote] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@herbalgy.vn";

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setOrderName("");
    setOrderEmail("");
    setOrderPhone("");
    setOrderNote("");
    setTimeout(() => setOrderSubmitted(false), 5000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#2e7d32] selection:text-white"
    >
      {/* 1. TRANSLUCENT TOP NAVBAR + OFFICE WELLNESS HERO */}
      <section className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] overflow-hidden bg-slate-100">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/25 to-black/20" />

        {/* Top Navbar */}
        <header className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <a
            href="#top"
            className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-[#2e7d32]"
          >
            {data.business.name}
          </a>

          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-800">
            <a href="#top" className="text-[#2e7d32]">
              Trang chủ
            </a>
            <a href="#about" className="hover:text-[#2e7d32] transition-colors">
              Về chúng tôi
            </a>
            <a href="#products" className="hover:text-[#2e7d32] transition-colors">
              Sản phẩm
            </a>
            <a href="#usage" className="hover:text-[#2e7d32] transition-colors">
              Công dụng
            </a>
            <a href="#gallery" className="hover:text-[#2e7d32] transition-colors">
              Hình ảnh
            </a>
            <a href="#video" className="hover:text-[#2e7d32] transition-colors">
              Video
            </a>
            <a href="#branches" className="hover:text-[#2e7d32] transition-colors">
              Phân phối
            </a>
            <a href="#order-form" className="hover:text-[#2e7d32] transition-colors">
              Liên hệ
            </a>
            <a href="#products" aria-label="Tìm kiếm" className="text-slate-700 hover:text-[#2e7d32]">
              <Search className="w-3.5 h-3.5" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </header>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="relative z-30 lg:hidden bg-white/95 backdrop-blur-md px-6 py-4 space-y-2 text-xs font-bold text-slate-700 border-b border-slate-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#2e7d32]"
            >
              Về chúng tôi
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#2e7d32]"
            >
              Sản phẩm dầu thảo dược
            </a>
            <a
              href="#usage"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#2e7d32]"
            >
              Công dụng & Hướng dẫn
            </a>
            <a
              href="#branches"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#2e7d32]"
            >
              Hệ thống đại lý
            </a>
            <a
              href="#order-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#2e7d32]"
            >
              Đặt mua ngay
            </a>
          </div>
        )}

        {/* Top-Left Hero Callout Overlay (Matches LD007) */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
          <div className="max-w-md bg-white/75 backdrop-blur-xs p-5 rounded-xl shadow-xs">
            <p className="font-serif italic text-lg sm:text-xl text-slate-700 mb-1">
              {data.hero.eyebrow || "Một ngày làm việc đầy"}
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold italic tracking-wide text-[#00acc1] leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl font-extrabold italic text-[#2e7d32] mt-0.5">
              {data.hero.subtitle || `cùng ${data.business.name}`}
            </p>
          </div>
        </div>
      </section>

      {/* 2. "TẠI SAO LẠI LÀ HERBALGY?" (#f4f5f7 gray background) */}
      <section id="about" className="py-16 lg:py-20 bg-[#f4f5f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-slate-800">
              {data.business.aboutTitle || data.storySection.title}
            </h2>
            <StarDivider />
          </div>

          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-8 text-justify">
            {data.business.aboutText[0] || data.storySection.originParagraph}
          </p>

          {/* Centerpiece Burlap & Pinecones Product Photo */}
          <div className="mb-8 overflow-hidden shadow-md bg-white p-2">
            <img
              src={data.storySection.productHeroImage}
              alt="Herbalgy Touch-Cool"
              className="w-full h-80 sm:h-[440px] object-cover"
            />
          </div>

          {/* Giới thiệu Viet Beauty & Sứ mệnh */}
          <div className="space-y-5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            <div>
              <h3 className="text-sm font-extrabold text-slate-800 mb-1.5">
                {data.storySection.distributorTitle}
              </h3>
              {data.storySection.distributorParagraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "italic text-slate-500 mb-2" : "mb-2 text-justify"}
                >
                  {p}
                </p>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-slate-800 mb-1.5">
                {data.storySection.missionTitle}
              </h3>
              {data.storySection.missionParagraphs.map((p, idx) => (
                <p key={idx} className="mb-2 text-justify">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. "DẦU THẢO DƯỢC GIẢM ĐAU KHÁNG VIÊM" (White Section) */}
      <section id="products" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#2e7d32]">
              {data.productSection.title}
            </h2>
            <StarDivider />
          </div>

          {/* 3 Product Variants Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-end text-center mb-12">
            {data.productSection.variants.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedVariant(item)}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div
                  className={`w-44 ${
                    idx === 1 ? "h-64" : "h-52"
                  } rounded-xl overflow-hidden mb-4 bg-emerald-50/40 p-3 flex items-center justify-center border border-transparent group-hover:border-[#2e7d32]/40 transition-all`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-bold text-[#2e7d32] group-hover:underline max-w-[180px]">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">{item.price}</p>
              </div>
            ))}
          </div>

          {/* Wooden Board Flatlay Showcase */}
          <div id="gallery" className="mb-8 overflow-hidden rounded-lg shadow-sm border border-slate-100">
            <img
              src={data.productSection.flatlayImage}
              alt="Bộ sản phẩm Herbalgy Touch Cool"
              className="w-full h-80 sm:h-[420px] object-cover"
            />
          </div>

          {/* Centered Green-Bordered Phone CTA Button */}
          <div className="text-center mb-8">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 border border-[#2e7d32] text-[#2e7d32] hover:bg-[#2e7d32] hover:text-white text-xs sm:text-sm font-bold px-8 py-2.5 rounded transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi {primaryPhone} để mua hàng</span>
            </a>
          </div>

          {/* Problem & Solution Paragraphs */}
          <div className="space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-10 text-justify">
            {data.productSection.problemParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* 3 Natural Ingredients Visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {data.productSection.ingredients.map((ing) => (
              <div key={ing.id} className="text-center">
                <div className="h-36 rounded-xl overflow-hidden mb-3 bg-slate-50">
                  <img
                    src={ing.image}
                    alt={ing.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-extrabold text-[#2e7d32]">{ing.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{ing.benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-justify">
            <strong className="text-[#2e7d32]">Dầu thảo dược Herbalgy Touch - Cool</strong>{" "}
            {data.productSection.ingredientSummary}
          </p>
        </div>
      </section>

      {/* 4. "CÔNG DỤNG" & "HƯỚNG DẪN SỬ DỤNG" & "LƯU Ý" (#eaecef background) */}
      <section id="usage" className="py-16 lg:py-20 bg-[#eaecef]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          {/* CÔNG DỤNG */}
          <div>
            <h2 className="text-sm sm:text-base font-extrabold uppercase text-slate-800 mb-3">
              CÔNG DỤNG
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              {data.usageSection.benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>

          {/* 5 Circular Green-Bordered Pain-Point Illustrations */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 py-4">
            {data.usageSection.painZones.map((zone) => (
              <div key={zone.id} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#2e7d32] p-1 bg-white shadow-xs overflow-hidden relative">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Red pain target pulse dot */}
                  <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 border border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span className="text-[11px] font-bold text-slate-700 mt-2">{zone.title}</span>
              </div>
            ))}
          </div>

          {/* HƯỚNG DẪN SỬ DỤNG */}
          <div>
            <h2 className="text-sm sm:text-base font-extrabold uppercase text-slate-800 mb-3">
              HƯỚNG DẪN SỬ DỤNG
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              {data.usageSection.instructions.map((ins, idx) => (
                <li key={idx}>{ins}</li>
              ))}
            </ul>
          </div>

          {/* LƯU Ý */}
          <div>
            <h2 className="text-sm sm:text-base font-extrabold uppercase text-slate-800 mb-3">
              LƯU Ý
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              {data.usageSection.cautions.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT STILL-LIFE SHOWCASE + VIDEO BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <img
            src={data.storySection.productHeroImage}
            alt="Herbalgy Natural"
            className="w-full h-60 object-cover rounded shadow-sm"
          />
        </div>
      </section>

      <section id="video" className="py-14 bg-[#eaecef]">
        <div className="max-w-xl mx-auto px-4">
          <div
            onClick={() => setVideoModalOpen(true)}
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group bg-white p-6 sm:p-8 border border-emerald-200 flex items-center justify-between gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-[#2e7d32] text-white flex flex-col items-center justify-center shrink-0 font-extrabold text-[10px] leading-tight shadow">
              <span>ECO</span>
              <span>100%</span>
            </div>

            <div className="text-center flex-1">
              <h3 className="font-serif italic text-3xl sm:text-4xl font-bold text-[#1b5e20] mb-1">
                {data.videoBanner.title}
              </h3>
              <p className="text-xs font-bold text-[#2e7d32]">{data.videoBanner.subtitle}</p>
              <button
                type="button"
                className="mt-3 inline-flex items-center gap-1.5 bg-slate-800/80 group-hover:bg-[#2e7d32] text-white text-[11px] font-bold px-4 py-1.5 rounded-full transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Xem Video Giới Thiệu</span>
              </button>
            </div>

            <img
              src={data.videoBanner.thumbnail}
              alt="Herbalgy Box"
              className="w-20 h-28 object-cover rounded border border-emerald-100 shrink-0"
            />
          </div>
        </div>
      </section>

      {/* 6. "CÁC ĐẠI LÝ BÁN HERBALGY" (4 Regional Branches) + DARK BOTANICAL FOOTER WITH "ĐẶT MUA NGAY" */}
      <section id="branches" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="text-base sm:text-lg font-extrabold uppercase text-slate-800">
              CÁC ĐẠI LÝ BÁN {data.business.name}
            </h2>
            <StarDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {data.branches.map((br) => (
              <div key={br.id} className="p-4">
                <h3 className="text-xs sm:text-sm font-extrabold text-[#2e7d32] mb-2">
                  {br.city}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{br.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK BOTANICAL FOOTER WITH CENTER "ĐẶT MUA NGAY" ORDER FORM */}
      <footer
        id="order-form"
        className="bg-[#08130c] text-white/80 pt-14 pb-8 border-t-4 border-[#2e7d32]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
            {/* Left Col: HERBALGY Contact */}
            <div className="lg:col-span-3 space-y-3 text-xs">
              <h3 className="text-lg font-extrabold uppercase text-[#4caf50] mb-3">
                {data.business.name}
              </h3>
              <p className="flex items-start gap-2 text-white/70">
                <MapPin className="w-3.5 h-3.5 text-[#4caf50] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-white/70">
                <Phone className="w-3.5 h-3.5 text-[#4caf50] shrink-0" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-center gap-2 text-white/70">
                <Mail className="w-3.5 h-3.5 text-[#4caf50] shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>

            {/* Center Col: ĐẶT MUA NGAY Form */}
            <div className="lg:col-span-6">
              <h3 className="text-xs sm:text-sm font-extrabold uppercase text-center text-white mb-4">
                ĐẶT MUA NGAY
              </h3>

              {orderSubmitted ? (
                <div className="bg-emerald-950/90 border border-[#4caf50] p-6 text-center rounded space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#4caf50] mx-auto" />
                  <h4 className="text-sm font-bold text-white">Đã gửi đơn đặt hàng thành công!</h4>
                  <p className="text-xs text-white/75">
                    Bộ phận CSKH {data.business.name} sẽ gọi xác nhận đơn hàng trong ít phút.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleOrderSubmit} className="space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      required
                      value={orderName}
                      onChange={(e) => setOrderName(e.target.value)}
                      placeholder="Họ và tên"
                      className="bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                    />
                    <input
                      type="email"
                      value={orderEmail}
                      onChange={(e) => setOrderEmail(e.target.value)}
                      placeholder="Email"
                      className="bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      value={orderPhone}
                      onChange={(e) => setOrderPhone(e.target.value)}
                      placeholder="Số điện thoại"
                      className="bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                    />
                    <input
                      type="text"
                      value={orderQty}
                      onChange={(e) => setOrderQty(e.target.value)}
                      placeholder="Số lượng"
                      className="bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                    />
                  </div>
                  <textarea
                    rows={3}
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Lời nhắn (địa chỉ nhận hàng, gói dung tích 5ml / 25ml / cây lăn...)"
                    className="w-full bg-white text-slate-800 px-3 py-2 text-xs focus:outline-none"
                  />
                  <div className="text-center pt-1">
                    <button
                      type="submit"
                      className="bg-[#1b8a2f] hover:bg-[#146c24] text-white text-xs font-bold uppercase px-16 py-2.5 transition-colors"
                    >
                      GỬI
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Col: LIÊN KẾT VỚI CHÚNG TÔI */}
            <div className="lg:col-span-3 space-y-3 text-xs">
              <h3 className="text-xs sm:text-sm font-extrabold uppercase text-white mb-3">
                LIÊN KẾT VỚI CHÚNG TÔI
              </h3>
              <p className="text-white/65 leading-relaxed">
                Sản phẩm thảo dược thiên nhiên phân phối độc quyền chính ngạch, cam kết hoàn tiền
                100% nếu phát hiện hàng giả.
              </p>
              <div className="flex items-center gap-3 pt-1 text-white/80 font-bold">
                <a href="#order-form" className="hover:text-[#4caf50]">
                  FB
                </a>
                <a href="#order-form" className="hover:text-[#4caf50]">
                  IG
                </a>
                <a href="#order-form" className="hover:text-[#4caf50]">
                  ZALO
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-white/45">
            © Bản quyền thuộc về {data.business.name} • Thiết kế chuẩn Chăm sóc Sức khỏe Thảo dược
          </div>
        </div>
      </footer>

      {/* Product Variant Quick Modal */}
      {selectedVariant && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedVariant(null)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVariant(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedVariant.image}
              alt={selectedVariant.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-base font-extrabold text-[#2e7d32]">{selectedVariant.name}</h3>
            <p className="text-sm font-bold text-slate-800 mt-1">{selectedVariant.price}</p>
            <p className="text-xs text-slate-500 mt-2 mb-5">{selectedVariant.volume}</p>
            <a
              href="#order-form"
              onClick={() => {
                setOrderQty(selectedVariant.name);
                setSelectedVariant(null);
              }}
              className="block w-full bg-[#2e7d32] text-white text-center text-xs font-bold uppercase py-3 rounded hover:bg-[#1b5e20]"
            >
              Chọn mua sản phẩm này
            </a>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-3 right-3 text-slate-500 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-extrabold text-[#2e7d32] mb-2">
              Giới thiệu {data.business.name} Touch - Cool
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Quy trình chiết xuất tinh dầu thảo mộc tự nhiên Methyl Salicylate & L-Menthol theo
              tiêu chuẩn Hong Kong kết hợp đầu lăn massage tiện dụng.
            </p>
            <img
              src={data.productSection.flatlayImage}
              alt="Video Preview"
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
