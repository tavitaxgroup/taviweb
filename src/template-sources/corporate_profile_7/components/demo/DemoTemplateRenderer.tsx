"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Building2,
  Home,
  Hotel,
  Trees,
  Play,
  BedDouble,
  Bath,
  Maximize2,
  Calendar,
  Target,
  Award,
  Handshake,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile7DefaultData,
  type CorporateProfile7TemplateData,
  type CorporateProfile7Listing
} from "@/template-sources/corporate_profile_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: CorporateProfile7TemplateData = adaptClonedTemplateData(
    corporateProfile7DefaultData,
    incomingData
  );

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("Tất cả");
  const [filterType, setFilterType] = useState<string>("Tất cả");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedListing, setSelectedListing] =
    useState<CorporateProfile7Listing | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0909 313 728";
  const primaryEmail = data.business.email?.[0] || "info@primeluxe.vn";

  const filteredListings = (data.listings || []).filter((item) => {
    const matchKeyword =
      !searchKeyword.trim() ||
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.address.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchStatus =
      filterStatus === "Tất cả" || item.statusBadge === filterStatus;
    const matchType =
      filterType === "Tất cả" ||
      item.typeBadge.toLowerCase() === filterType.toLowerCase();
    return matchKeyword && matchStatus && matchType;
  });

  const renderListingCard = (item: CorporateProfile7Listing) => (
    <div
      key={item.id}
      onClick={() => setSelectedListing(item)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition cursor-pointer group flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <span className="bg-[#f97316] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
            {item.typeBadge}
          </span>
          <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
            {item.statusBadge}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-extrabold text-[#0b162c] group-hover:text-[#00aeff] transition line-clamp-1 mb-1">
            {item.title}
          </h3>
          <p className="text-xs text-slate-400 flex items-center gap-1 mb-4 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-[#00aeff] shrink-0" />
            <span>{item.address}</span>
          </p>

          {/* 3 Spec Columns */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs text-slate-500 mb-3">
            <div>
              <span className="block text-[11px] text-slate-400">Phòng ngủ</span>
              <span className="inline-flex items-center gap-1 font-bold text-slate-700 mt-0.5">
                <BedDouble className="w-3.5 h-3.5 text-[#00aeff]" />
                {item.bedrooms}
              </span>
            </div>
            <div>
              <span className="block text-[11px] text-slate-400">Phòng tắm</span>
              <span className="inline-flex items-center gap-1 font-bold text-slate-700 mt-0.5">
                <Bath className="w-3.5 h-3.5 text-[#00aeff]" />
                {item.bathrooms}
              </span>
            </div>
            <div>
              <span className="block text-[11px] text-slate-400">Diện tích</span>
              <span className="inline-flex items-center gap-1 font-bold text-slate-700 mt-0.5">
                <Maximize2 className="w-3.5 h-3.5 text-[#00aeff]" />
                {item.area}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-extrabold text-[#f97316]">
            {item.price}
          </span>
          <span className="text-[11px] text-slate-400 inline-flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {item.date}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#0b162c] font-sans selection:bg-[#00aeff] selection:text-white">
      {/* 1. DARK NAVY TOPBAR (#0b162c) + STICKY WHITE NAVBAR */}
      <div className="bg-[#0b162c] text-slate-300 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#00aeff]" />
            <span>{data.business.address}</span>
          </div>
          <div className="flex items-center gap-2">
            {["FB", "TW", "YT"].map((s) => (
              <a
                key={s}
                href="#lien-he"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#00aeff] text-[10px] font-bold text-white flex items-center justify-center transition"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-[#00aeff]/10 border border-[#00aeff]/30 text-[#00aeff] flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
            )}
            <span className="text-xl sm:text-2xl font-extrabold text-[#00aeff] tracking-tight">
              {data.business.name}
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-semibold text-slate-700">
            <a href="#" className="text-[#00aeff]">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#00aeff] transition">
              Giới thiệu
            </a>
            <a href="#du-an-moi" className="hover:text-[#00aeff] transition">
              Danh sách BĐS
            </a>
            <a href="#tin-tuc" className="hover:text-[#00aeff] transition">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-[#00aeff] transition">
              Liên hệ
            </a>
          </nav>

          {/* Cyan CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="bg-[#00aeff] hover:bg-[#0294db] text-white text-xs font-bold px-5 py-3 rounded-lg shadow-md shadow-[#00aeff]/25 inline-flex items-center gap-2 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{data.hero.ctaText || "Liên hệ tư vấn"}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-slate-200 text-slate-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-2.5 text-sm font-semibold">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Giới thiệu
            </a>
            <a
              href="#du-an-moi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Danh sách BĐS
            </a>
            <a
              href="#danh-muc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Danh mục tiêu biểu
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Tin tức thị trường
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#00aeff]"
            >
              Liên hệ tư vấn
            </a>
          </div>
        )}
      </header>

      {/* 2. DARK NAVY SEARCH HERO ("Tìm ngôi nhà lý tưởng của bạn") */}
      <section className="relative py-20 lg:py-24 bg-[#0b162c] text-white overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b162c]/95 via-[#0f1d38]/90 to-[#0b162c]/95" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif italic text-lg sm:text-xl text-slate-200 mb-2">
            {data.hero.eyebrow || "Khám phá căn hộ mơ ước của bạn"}
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight mb-4">
            Tìm <span className="text-[#00aeff]">ngôi nhà</span> lý tưởng của bạn
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            {data.hero.subtitle}
          </p>

          {/* Interactive White Search Bar */}
          <div className="bg-white rounded-xl p-2.5 shadow-2xl grid grid-cols-1 sm:grid-cols-12 gap-2 items-center text-slate-700 mb-12">
            <div className="sm:col-span-5 flex items-center px-3">
              <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Tìm kiếm bất động sản, quận, tên đường..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full text-xs sm:text-sm py-2.5 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-3 border-t sm:border-t-0 sm:border-l border-slate-200 px-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full text-xs sm:text-sm py-2.5 bg-transparent focus:outline-none"
              >
                <option value="Tất cả">Chọn trạng thái (Tất cả)</option>
                <option value="Đang bán">Đang bán</option>
                <option value="Cho thuê">Cho thuê</option>
              </select>
            </div>

            <div className="sm:col-span-2 border-t sm:border-t-0 sm:border-l border-slate-200 px-3">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full text-xs sm:text-sm py-2.5 bg-transparent focus:outline-none"
              >
                <option value="Tất cả">Loại nhà đất</option>
                <option value="Nhà phố">Nhà phố</option>
                <option value="Biệt thự hiện đại">Biệt thự hiện đại</option>
                <option value="Căn hộ">Căn hộ</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <a
                href="#du-an-moi"
                className="w-full bg-[#00aeff] hover:bg-[#0294db] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-lg block text-center transition"
              >
                Tìm kiếm
              </a>
            </div>
          </div>

          {/* 5 Dark Glass Category Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Chung cư", icon: Building2, type: "Căn hộ" },
              { label: "Căn hộ", icon: Hotel, type: "Căn hộ" },
              { label: "Biệt thự", icon: Home, type: "Biệt thự hiện đại" },
              { label: "Nhà phố", icon: Building2, type: "Nhà phố" },
              { label: "Nhà vườn", icon: Trees, type: "Tất cả" }
            ].map((cat) => {
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setFilterType(cat.type)}
                  className="bg-white/10 hover:bg-[#00aeff]/25 backdrop-blur-sm border border-white/15 hover:border-[#00aeff] rounded-xl py-5 px-4 flex flex-col items-center justify-center gap-2 transition cursor-pointer"
                >
                  <IconComp className="w-7 h-7 text-slate-200" />
                  <span className="text-xs font-bold text-white">
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WELCOME SPLIT SECTION ("CHÀO MỪNG ĐẾN VỚI PRIMELUXE") */}
      <section id="gioi-thieu" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 2x2 Photo Collage with Centered Play Button */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  alt="Không gian 1"
                  className="w-full h-44 object-cover rounded-tl-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                  alt="Không gian 2"
                  className="w-full h-44 object-cover rounded-tr-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
                  alt="Không gian 3"
                  className="w-full h-44 object-cover rounded-bl-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                  alt="Không gian 4"
                  className="w-full h-44 object-cover rounded-br-2xl"
                />
              </div>
              <a
                href="#du-an-moi"
                aria-label="Xem video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white text-[#00aeff] shadow-2xl flex items-center justify-center ring-8 ring-white/40 hover:scale-105 transition"
              >
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </a>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b162c] uppercase mb-4">
                {data.business.aboutTitle || "CHÀO MỪNG ĐẾN VỚI PRIMELUXE"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-7">
                {data.business.aboutText?.[0]}
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#f0f9ff] text-[#00aeff] flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0b162c]">
                      Tầm nhìn
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      {data.business.name} quyết tâm vươn mình trở thành đơn vị tư vấn mua, bán và đầu tư bất động sản uy tín tại Việt Nam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#f0f9ff] text-[#00aeff] flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0b162c]">
                      Giá trị cốt lõi
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      {data.business.aboutText?.[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "DỰ ÁN MỚI NHẤT" (3x2 PROPERTY LISTING GRID ON #f0f9ff) */}
      <section id="du-an-moi" className="py-20 bg-[#f0f9ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-lg text-[#00aeff] block">
              {data.business.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b162c] uppercase mt-1">
              DỰ ÁN MỚI NHẤT
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Tổng hợp các dự án bất động sản tại Hà Nội, Đà Nẵng, TP. Hồ Chí Minh và các tỉnh thành khác hot nhất thời điểm hiện tại
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredListings.map(renderListingCard)}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setFilterStatus("Tất cả");
                setFilterType("Tất cả");
                setSearchKeyword("");
              }}
              className="bg-[#00aeff] hover:bg-[#0294db] text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-lg shadow-md transition cursor-pointer"
            >
              XEM TẤT CẢ
            </button>
          </div>
        </div>
      </section>

      {/* 5. "CÁC DANH MỤC TIÊU BIỂU" (6-CARD ASYMMETRIC BENTO GRID) */}
      <section id="danh-muc" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-lg text-[#00aeff] block">
              {data.business.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b162c] uppercase mt-1">
              CÁC DANH MỤC TIÊU BIỂU
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Tổng hợp các loại hình bất động sản đầu tư và an cư thanh khoản cao nhất hiện nay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {(data.categoryBento || []).map((cat) => (
              <div
                key={cat.id}
                onClick={() => setFilterType("Tất cả")}
                className={`${
                  cat.wide ? "md:col-span-6" : "md:col-span-3"
                } group relative h-64 rounded-2xl overflow-hidden shadow-sm cursor-pointer`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c]/85 via-[#0b162c]/20 to-transparent" />
                <div className="absolute bottom-4 left-5 text-white">
                  <h3 className="text-base font-extrabold">{cat.name}</h3>
                  <span className="text-xs text-slate-300">
                    {cat.countLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "CÁC DỰ ÁN PHỔ BIẾN" (3x2 PROPERTY GRID ON #f0f9ff) */}
      <section className="py-20 bg-[#f0f9ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-lg text-[#00aeff] block">
              {data.business.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b162c] uppercase mt-1">
              CÁC DỰ ÁN PHỔ BIẾN
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Tổng hợp các dự án bất động sản được nhà đầu tư quan tâm nhiều nhất trong tháng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {(data.listings || []).slice(0, 6).map(renderListingCard)}
          </div>

          <div className="text-center">
            <a
              href="#lien-he"
              className="inline-block bg-[#00aeff] hover:bg-[#0294db] text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-lg shadow-md transition"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* 7. "TẦM NHÌN VÀ SỨ MỆNH" (3 WHITE CARDS) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-lg text-[#00aeff] block">
              {data.business.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b162c] uppercase mt-1">
              TẦM NHÌN VÀ SỨ MỆNH
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Cam kết đồng hành minh bạch cùng mọi quyết định đầu tư của khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.visionCards || []).map((vc, idx) => (
              <div
                key={vc.id}
                className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <div className="w-16 h-16 rounded-full bg-[#f0f9ff] text-[#00aeff] flex items-center justify-center mx-auto mb-5">
                  {idx === 0 && <Target className="w-8 h-8" />}
                  {idx === 1 && <Award className="w-8 h-8" />}
                  {idx >= 2 && <Handshake className="w-8 h-8" />}
                </div>
                <h3 className="text-base font-extrabold text-[#0b162c] mb-2.5">
                  {vc.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {vc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "NHỮNG CON SỐ ẤN TƯỢNG" (DARK SKYLINE PARALLAX COUNTER BANNER) */}
      <section className="relative py-20 bg-[#0b162c] text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Những con số ấn tượng"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#0b162c]/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-serif italic text-lg text-[#00aeff] block">
            {data.business.name}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase mt-1 mb-2">
            NHỮNG CON SỐ ẤN TƯỢNG
          </h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto mb-12">
            {data.business.name} tự hào về những thành tựu đã đạt được trong những năm qua. Dưới đây là một số cột mốc nổi bật:
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.stats || []).map((st, idx) => (
              <div
                key={st.id}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-3">
                  {idx === 0 && <Building2 className="w-6 h-6" />}
                  {idx === 1 && <Home className="w-6 h-6" />}
                  {idx === 2 && <Hotel className="w-6 h-6" />}
                  {idx >= 3 && <Award className="w-6 h-6" />}
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  {st.number}
                </span>
                <span className="text-xs text-slate-300 mt-1">{st.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. "ĐÁNH GIÁ TỪ KHÁCH HÀNG" (3 CARDS WITH OVERLAPPING TOP AVATARS) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-serif italic text-lg text-[#00aeff] block">
              {data.business.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b162c] uppercase mt-1">
              ĐÁNH GIÁ TỪ KHÁCH HÀNG
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Hàng trăm nhà đầu tư và gia đình đã tìm thấy bất động sản ưng ý cùng chúng tôi
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {(data.testimonials || []).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl pt-12 pb-7 px-6 text-center border border-slate-100 shadow-md relative mt-6"
                >
                  <img
                    src={
                      item.avatar ||
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                    }
                    alt={item.author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md absolute -top-8 left-1/2 -translate-x-1/2"
                  />
                  <h4 className="text-sm font-extrabold text-[#0b162c]">
                    {item.author}
                  </h4>
                  <span className="text-[11px] text-slate-400 block mb-4">
                    {item.role}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              <span className="w-6 h-1.5 rounded-full bg-[#00aeff]" />
              <span className="w-2.5 h-1.5 rounded-full bg-slate-200" />
              <span className="w-2.5 h-1.5 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. "TIN TỨC THỊ TRƯỜNG" (3 REAL ESTATE NEWS CARDS ON #f0f9ff) */}
      <section id="tin-tuc" className="py-20 bg-[#f0f9ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-lg text-[#00aeff] block">
              {data.business.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b162c] uppercase mt-1">
              TIN TỨC THỊ TRƯỜNG
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Cập nhật biến động giá nhà đất, quy hoạch hạ tầng và kinh nghiệm đầu tư sinh lời
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition group flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-900/75 text-white text-[11px] px-2.5 py-1 rounded flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#00aeff]" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0b162c] group-hover:text-[#00aeff] transition mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <a
                    href="#lien-he"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00aeff]"
                  >
                    <span>Chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#lien-he"
              className="inline-block bg-[#00aeff] hover:bg-[#0294db] text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-lg shadow-md transition"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* 11. DEEP NAVY FOOTER (#0b162c) */}
      <footer id="lien-he" className="bg-[#0b162c] text-slate-300 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#00aeff]/20 text-[#00aeff] flex items-center justify-center">
                  <Home className="w-5 h-5" />
                </div>
                <span className="text-xl font-extrabold text-white">
                  {data.business.name}
                </span>
              </div>
              <div className="space-y-2.5 text-xs">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#00aeff]" />
                  <span>{primaryPhone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00aeff]" />
                  <span>{primaryEmail}</span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00aeff] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </p>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Danh mục</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#00aeff]">
                    › Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#du-an-moi" className="hover:text-[#00aeff]">
                    › Danh sách BĐS
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#00aeff]">
                    › Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#00aeff]">
                    › Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Liên kết</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#00aeff]">
                    › Điều khoản dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#00aeff]">
                    › Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#00aeff]">
                    › Hướng dẫn ký gửi
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#00aeff]">
                    › Quy chế khiếu nại
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3">
                Đăng ký tin tức
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Hãy đăng ký tại đây để cập nhật thông tin bảng giá và dự án mới nhất của chúng tôi.
              </p>
              {newsletterSubscribed ? (
                <p className="text-xs font-bold text-emerald-400">
                  Đã đăng ký nhận thông tin dự án thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubscribed(true);
                  }}
                  className="flex rounded-lg overflow-hidden bg-white"
                >
                  <input
                    type="email"
                    required
                    placeholder="Nhập email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs text-slate-800 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#00aeff] hover:bg-[#0294db] text-white text-xs font-bold px-4 py-2.5 shrink-0 cursor-pointer"
                  >
                    Đăng ký
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <p>© {new Date().getFullYear()} {data.business.name}. Bảo lưu mọi quyền.</p>
            <div className="flex gap-2">
              {["FB", "IG", "TW", "YT"].map((s) => (
                <span
                  key={s}
                  className="w-7 h-7 rounded bg-white/5 text-slate-400 text-[10px] font-bold flex items-center justify-center"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* LISTING DETAIL MODAL */}
      {selectedListing && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedListing(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedListing.image}
                alt={selectedListing.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedListing(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 flex gap-2">
                <span className="bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded">
                  {selectedListing.typeBadge}
                </span>
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded">
                  {selectedListing.statusBadge}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-[#0b162c] mb-1">
                {selectedListing.title}
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                {selectedListing.address}
              </p>
              <p className="text-lg font-extrabold text-[#f97316] mb-4">
                Giá: {selectedListing.price}
              </p>
              <div className="grid grid-cols-3 gap-2 bg-[#f0f9ff] p-3.5 rounded-xl text-xs font-bold text-[#0b162c] mb-6">
                <span>{selectedListing.bedrooms} Phòng ngủ</span>
                <span>{selectedListing.bathrooms} Phòng tắm</span>
                <span>Diện tích: {selectedListing.area}</span>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedListing(null)}
                  className="px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-bold"
                >
                  Đóng
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="px-5 py-2.5 rounded-lg bg-[#00aeff] text-white text-xs font-bold uppercase"
                >
                  Liên hệ chuyên viên: {primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
