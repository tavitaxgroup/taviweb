"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Search,
  BatteryCharging,
  Wrench,
  ShieldCheck,
  Zap,
  ShoppingCart,
  CheckCircle2,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Star,
  Calendar,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto17DefaultData,
  type GarageOto17Data,
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
  templateSlug?: string;
}

export function DemoTemplateRenderer({
  data: rawData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<GarageOto17Data>(
    rawData,
    garageOto17DefaultData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<
    "ALL" | "VARTA" | "ROCKET" | "GS" | "DELKOR"
  >("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [quickOrderProduct, setQuickOrderProduct] = useState<string | null>(
    null
  );

  const phone1 = data.business.phone?.[0] || "0763 100 100";
  const phone2 = data.business.phone?.[1] || "0707 838 383";

  const filteredProducts = data.batteryProducts.filter((product) => {
    const matchesBrand =
      selectedBrand === "ALL" || product.brand === selectedBrand;
    const matchesSearch =
      !searchQuery.trim() ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.compatibleCars.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F6F9F6] text-slate-900 font-sans selection:bg-[#2E7D32] selection:text-white">
      {/* Top White Header matching OTO017: Circular Green Emblem + Search Bar + Red Support Hotline Pill */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          {/* Circular Green Battery+Wrench Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#43A047] to-[#1B5E20] border-2 border-[#81C784] shadow-md flex flex-col items-center justify-center text-white shrink-0">
              <div className="flex items-center gap-0.5">
                <BatteryCharging className="w-5 h-5 text-[#FFEB3B]" />
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <span className="text-[7px] font-black tracking-tighter uppercase mt-0.5">
                VIỆT NHẬT
              </span>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-[#2E7D32] uppercase tracking-tight leading-none">
                ẮC QUY VIỆT NHẬT
              </div>
              <div className="text-xs font-semibold text-slate-600 italic mt-1">
                Phục vụ là niềm vui • Chính hãng 100%
              </div>
            </div>
          </a>

          {/* Search Input Bar */}
          <div className="flex-1 max-w-md mx-auto w-full order-3 md:order-2">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm bình ắc quy theo mã (55D23L, DIN80) hoặc dòng xe..."
                className="w-full rounded-full border-2 border-[#43A047] bg-slate-50 pl-4 pr-11 py-2 text-xs sm:text-sm focus:outline-none focus:bg-white"
              />
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="absolute right-1.5 w-8 h-8 rounded-full bg-[#2E7D32] text-white flex items-center justify-center hover:bg-[#1B5E20]"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Support Hotline Pill matching screenshot: Hỗ trợ : 0763 100 100 - 0707 838 383 */}
          <div className="order-2 md:order-3 flex items-center gap-2">
            <div className="bg-[#FFF3E0] border border-[#FFCC80] rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-xs">
              <span className="w-7 h-7 rounded-full bg-[#F4511E] text-white flex items-center justify-center shrink-0 animate-pulse">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <div className="text-xs sm:text-sm font-black text-[#D84315]">
                <span className="text-slate-700 font-bold">Hỗ trợ : </span>
                <a href={`tel:${phone1.replace(/\s+/g, "")}`} className="hover:underline">
                  {phone1}
                </a>{" "}
                -{" "}
                <a href={`tel:${phone2.replace(/\s+/g, "")}`} className="hover:underline">
                  {phone2}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#2E7D32] border border-[#2E7D32]/30"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Signature Green Navigation Bar matching OTO017 */}
      <nav className="sticky top-0 z-40 bg-gradient-to-r from-[#2E7D32] via-[#388E3C] to-[#43A047] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
          {/* Left Category Menu Pill */}
          <div className="relative group h-full flex items-center">
            <button
              type="button"
              className="h-full px-4 bg-[#1B5E20] hover:bg-[#144718] font-extrabold text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2.5 transition-colors"
            >
              <Menu className="w-4 h-4 text-[#FFEB3B]" />
              <span>Danh mục sản phẩm</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-80" />
            </button>
            {/* Hover Category Dropdown */}
            <div className="hidden group-hover:block absolute left-0 top-full w-64 bg-white text-slate-800 shadow-xl rounded-b-lg border border-slate-200 py-1.5 z-50">
              {data.categoryMenu.map((cat, idx) => (
                <a
                  key={idx}
                  href="#san-pham"
                  className="flex items-center justify-between px-4 py-2 text-xs font-bold hover:bg-[#E8F5E9] hover:text-[#2E7D32] transition-colors"
                >
                  <span>{cat}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#43A047]" />
                </a>
              ))}
            </div>
          </div>

          {/* Horizontal Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-extrabold">
            <a
              href="#"
              className="text-[#FFEB3B] border-b-2 border-[#FFEB3B] py-1"
            >
              Trang chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#FFEB3B] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#FFEB3B] transition-colors inline-flex items-center gap-1"
            >
              Sản Phẩm <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#cuu-ho"
              className="hover:text-[#FFEB3B] transition-colors inline-flex items-center gap-1"
            >
              Dịch Vụ <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#FFEB3B] transition-colors"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#FFEB3B] transition-colors"
            >
              Liên Hệ
            </a>
          </div>

          {/* Right Quick Badge */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-extrabold bg-white/15 px-3 py-1 rounded-full">
            <Zap className="w-3.5 h-3.5 text-[#FFEB3B]" />
            <span>Cứu Hộ Kích Bình 15 Phút</span>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1B5E20] px-4 py-3 space-y-2 text-sm font-bold border-t border-white/15">
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#FFEB3B]"
            >
              Bảng giá Ắc Quy Varta / Rocket / GS
            </a>
            <a
              href="#cuu-ho"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Dịch vụ cứu hộ kích bình 24/7
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Giới thiệu Ắc Quy Việt Nhật
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Tin tức &amp; Kinh nghiệm
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Liên hệ: {phone1}
            </a>
          </div>
        )}
      </nav>

      {/* Composite Hero Banner matching OTO017: CỨU HỘ ẮC QUY TP.HCM 24/7 + ★ DỊCH VỤ ★ + Purple/Magenta Ribbon */}
      <section className="relative overflow-hidden bg-[#102814] text-white">
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt="Cứu hộ ắc quy TP.HCM 24/7"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2612]/95 via-[#1B4D24]/85 to-[#1B5E20]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left / Center Rescue Banner matching screenshot */}
            <div className="lg:col-span-7 space-y-4">
              {/* Top Headline: CỨU HỘ ẮC QUY TP.HCM 24/7 */}
              <div className="inline-flex items-center gap-2 bg-[#2E7D32] border border-[#81C784] px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-[#FFEB3B] shadow">
                <BatteryCharging className="w-4 h-4" />
                {data.hero.eyebrow}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none text-white drop-shadow">
                CỨU HỘ ẮC QUY{" "}
                <span className="text-[#FFEB3B]">TP.HCM 24/7</span>
              </h1>

              {/* Yellow ★ DỊCH VỤ ★ Pill */}
              <div className="flex items-center gap-2 text-[#FFEB3B] font-black text-base sm:text-lg tracking-widest uppercase">
                <Star className="w-5 h-5 fill-[#FFEB3B]" />
                <span>DỊCH VỤ TRỰC CHIẾN 24/24</span>
                <Star className="w-5 h-5 fill-[#FFEB3B]" />
              </div>

              {/* Purple & Magenta Callout Banner matching screenshot */}
              <div className="bg-gradient-to-r from-[#6D28D9] via-[#AD1457] to-[#E91E63] p-4 sm:p-5 rounded-xl border-2 border-white/80 shadow-2xl max-w-2xl">
                <p className="text-base sm:text-xl font-extrabold text-white leading-snug">
                  {data.hero.title}
                </p>
                <p className="text-xs sm:text-sm text-white/90 mt-1.5">
                  {data.hero.subtitle}
                </p>
              </div>

              {/* Hotline & Address Strip matching bottom of OTO017 hero */}
              <div className="bg-black/45 backdrop-blur-xs border border-white/20 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-black text-[#FFEB3B]">
                    <Phone className="w-4 h-4 text-[#F4511E]" />
                    <span>
                      {phone1} - {phone2}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-[#81C784] shrink-0" />
                    <span>{data.business.address}</span>
                  </div>
                </div>
                <a
                  href={`tel:${phone1.replace(/\s+/g, "")}`}
                  className="bg-[#F4511E] hover:bg-[#D84315] text-white font-black text-xs sm:text-sm uppercase px-5 py-3 rounded-lg shadow-lg text-center shrink-0 transition-transform active:scale-95"
                >
                  Gọi Kích Bình Ngay
                </a>
              </div>
            </div>

            {/* Right: Genuine Battery Showcase Card (Varta, Rocket, GS, Delkor) */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border-4 border-[#43A047]">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-[#2E7D32] text-white flex items-center justify-center">
                      <BatteryCharging className="w-5 h-5 text-[#FFEB3B]" />
                    </div>
                    <div>
                      <h2 className="text-sm font-black uppercase text-[#2E7D32]">
                        ĐẠI LÝ ẮC QUY CHÍNH HÃNG
                      </h2>
                      <p className="text-[11px] text-slate-500 font-semibold">
                        VARTA • ROCKET • GS • DELKOR • AMARON
                      </p>
                    </div>
                  </div>
                  <span className="bg-[#F4511E] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                    Giao nhanh 15p
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {data.batteryProducts.slice(0, 4).map((bat) => (
                    <div
                      key={bat.id}
                      className="border border-[#43A047]/40 rounded-lg p-2.5 bg-[#F6F9F6] hover:bg-white transition-colors"
                    >
                      <img
                        src={bat.image}
                        alt={bat.name}
                        className="w-full h-20 object-cover rounded mb-2"
                      />
                      <div className="text-[11px] font-extrabold text-slate-800 line-clamp-1">
                        {bat.name}
                      </div>
                      <div className="text-xs font-black text-[#F4511E] mt-0.5">
                        {bat.price}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#E8F5E9] rounded-xl p-3.5 text-xs text-[#1B5E20] font-bold space-y-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>Thu bình cũ đổi bình mới trợ giá đến 400.000đ</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>Miễn phí công lắp đặt &amp; đo sạc Dynamo tận nơi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Battery Product Catalog matching OTO017: Green-Bordered Cards + Circular Green Emblem + Red Price + Red "Mua ngay" Button */}
      <section id="san-pham" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#2E7D32] bg-[#E8F5E9] px-3 py-1 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                BẢNG GIÁ NIÊM YẾT CHÍNH HÃNG
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20] uppercase mt-2">
                SẢN PHẨM ẮC QUY Ô TÔ NỔI BẬT
              </h2>
            </div>

            {/* Brand Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "ALL", label: "Tất cả thương hiệu" },
                { id: "VARTA", label: "Ắc Quy VARTA" },
                { id: "ROCKET", label: "Ắc Quy ROCKET" },
                { id: "GS", label: "Ắc Quy GS" },
                { id: "DELKOR", label: "Ắc Quy DELKOR" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setSelectedBrand(
                      tab.id as "ALL" | "VARTA" | "ROCKET" | "GS" | "DELKOR"
                    )
                  }
                  className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase transition-all ${
                    selectedBrand === tab.id
                      ? "bg-[#2E7D32] text-white shadow-md"
                      : "bg-white text-slate-700 border border-[#43A047]/40 hover:border-[#2E7D32]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4-Column Product Grid matching OTO017 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border-2 border-[#43A047] hover:border-[#1B5E20] shadow-sm hover:shadow-xl transition-all p-4 flex flex-col justify-between relative group"
              >
                {/* Top-Left Circular Green Battery Emblem matching OTO017 product cards */}
                <div className="flex items-center justify-between mb-2">
                  <div
                    title="Ắc Quy Việt Nhật Chính Hãng"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#43A047] to-[#1B5E20] text-white flex flex-col items-center justify-center shadow border border-[#81C784]"
                  >
                    <BatteryCharging className="w-4 h-4 text-[#FFEB3B]" />
                    <span className="text-[6px] font-black leading-none">
                      VIỆT NHẬT
                    </span>
                  </div>
                  {product.badge && (
                    <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#81C784] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Image */}
                <div className="relative h-44 rounded-xl overflow-hidden bg-slate-50 mb-3 border border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {product.voltageCapacity}
                  </span>
                </div>

                {/* Product Name & Specs */}
                <div className="text-center space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#2E7D32] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      Phù hợp: {product.compatibleCars}
                    </p>
                    <p className="text-[11px] font-bold text-[#2E7D32] mt-1">
                      {product.warranty} • {product.terminalType}
                    </p>
                  </div>

                  {/* Bold Red-Orange Price & Red-Orange "Mua ngay" Button matching OTO017 */}
                  <div className="pt-3 space-y-2">
                    <div className="text-lg sm:text-xl font-black text-[#EA4335]">
                      {product.price}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500">
                      Đổi bù bình cũ:{" "}
                      <strong className="text-slate-700">
                        {product.tradeInPrice}
                      </strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => setQuickOrderProduct(product.name)}
                      className="w-full sm:w-auto mx-auto inline-flex items-center justify-center gap-1.5 bg-[#F4511E] hover:bg-[#D84315] text-white font-extrabold text-xs uppercase px-6 py-2.5 rounded-md shadow transition-all"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Order Notification Toast */}
          {quickOrderProduct && (
            <div className="mt-6 bg-[#1B5E20] text-white rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FFEB3B] shrink-0" />
                <div className="text-xs sm:text-sm">
                  Bạn đã chọn đặt nhanh:{" "}
                  <strong className="text-[#FFEB3B]">{quickOrderProduct}</strong>.
                  Kỹ thuật viên Việt Nhật sẽ giao và lắp tận nơi trong 15 phút!
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${phone1.replace(/\s+/g, "")}`}
                  className="bg-[#F4511E] text-white text-xs font-black uppercase px-4 py-2 rounded-md"
                >
                  Gọi xác nhận: {phone1}
                </a>
                <button
                  type="button"
                  onClick={() => setQuickOrderProduct(null)}
                  className="text-xs underline text-slate-200 px-2"
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 24/7 Emergency Battery Rescue Services */}
      <section
        id="cuu-ho"
        className="py-14 bg-white border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F4511E]">
              ★ DỊCH VỤ CỨU HỘ ẮC QUY 24/7 ★
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20] uppercase mt-1">
              CÂU BÌNH, KÍCH NỔ &amp; THAY ẮC QUY LƯU ĐỘNG TẬN NƠI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Phục vụ xuyên đêm tại Quận 1, Quận 3, Quận 5, Quận 7, Quận 10, Tân
              Bình, Bình Thạnh, TP. Thủ Đức và toàn TP.HCM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.rescueServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#F6F9F6] rounded-xl p-5 border-2 border-[#43A047]/30 hover:border-[#2E7D32] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#2E7D32] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                      {srv.responseTime}
                    </span>
                    <Zap className="w-5 h-5 text-[#F4511E]" />
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#EA4335]">
                    {srv.priceNote}
                  </span>
                  <a
                    href={`tel:${phone1.replace(/\s+/g, "")}`}
                    className="text-xs font-black text-[#2E7D32] hover:underline"
                  >
                    Gọi ngay →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="gioi-thieu" className="py-14 bg-[#E8F5E9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2E7D32]">
                VỀ ĐẠI LÝ ẮC QUY VIỆT NHẬT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1B5E20]">
                {data.business.aboutTitle}
              </h2>
              {data.business.aboutText?.map((p, i) => (
                <p
                  key={i}
                  className="text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {data.stats?.map((st) => (
                <div
                  key={st.id}
                  className="bg-white rounded-xl p-5 border-2 border-[#43A047] text-center shadow-sm"
                >
                  <div className="text-2xl font-black text-[#EA4335]">
                    {st.number}
                  </div>
                  <div className="text-[11px] font-extrabold text-[#1B5E20] uppercase mt-1">
                    {st.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Battery Maintenance Knowledge */}
      <section id="tin-tuc" className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase text-[#F4511E]">
                TƯ VẤN KỸ THUẬT
              </span>
              <h2 className="text-2xl font-black text-[#1B5E20] uppercase">
                KINH NGHIỆM SỬ DỤNG &amp; BẢO DƯỠNG ẮC QUY Ô TÔ
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.news?.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#43A047] shadow-sm transition-all flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-[#2E7D32] mb-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.category}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 text-xs font-extrabold text-[#F4511E]">
                    Xem chi tiết →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="lien-he" className="bg-[#143318] text-slate-200 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/15 text-xs sm:text-sm">
            <div className="space-y-3">
              <div className="text-lg font-black text-[#FFEB3B] uppercase">
                {data.business.name}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Đại lý phân phối ắc quy Varta, Rocket, GS, Delkor, Amaron chính
                hãng. Dịch vụ câu bình, kích nổ và thay bình ắc quy tận nơi tại
                TP.HCM 24/7.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase text-[#FFEB3B]">
                Thông tin liên hệ
              </h4>
              <p className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-[#81C784] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-xs font-bold text-white">
                <Phone className="w-4 h-4 text-[#F4511E] shrink-0" />
                <span>
                  Hotline 24/7: {phone1} - {phone2}
                </span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Clock className="w-4 h-4 text-[#81C784] shrink-0" />
                <span>{data.business.workingHours}</span>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase text-[#FFEB3B]">
                Cam kết dịch vụ
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• 100% Hàng mới chính hãng, tem bảo hành điện tử</li>
                <li>• Lắp đặt tận nơi miễn phí trong 15 - 20 phút</li>
                <li>• Hỗ trợ thu mua bình cũ giá cao nhất thị trường</li>
                <li>• Bảo hành 1 đổi 1 tận nơi nếu lỗi nhà sản xuất</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} {data.business.name}. Phục vụ là niềm
            vui.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
