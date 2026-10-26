"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Disc,
  Wrench,
  Truck,
  ShieldCheck,
  Filter,
  ChevronRight,
  RotateCcw,
  Menu,
  X,
  Search,
  Calendar,
  Compass,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto18DefaultData,
  type GarageOto18Data,
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
  templateSlug?: string;
}

export function DemoTemplateRenderer({
  data: rawData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<GarageOto18Data>(
    rawData,
    garageOto18DefaultData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);
  const [featuredTab, setFeaturedTab] = useState<
    "ALL" | "BÁN CHẠY" | "HÀNG MỚI VỀ"
  >("ALL");

  const primaryPhone = data.business.phone?.[0] || "0909 885 779";
  const secondaryPhone = data.business.phone?.[1] || "028 3899 6688";

  const toggleItem = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSelectedSizes([]);
    setSelectedBrands([]);
    setSelectedVehicles([]);
  };

  const filteredCatalog = data.tireProducts.filter((tire) => {
    const matchSize =
      selectedSizes.length === 0 || selectedSizes.includes(tire.size);
    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(tire.brand);
    const matchVehicle =
      selectedVehicles.length === 0 ||
      selectedVehicles.includes(tire.vehicleType);
    return matchSize && matchBrand && matchVehicle;
  });

  const featuredProducts =
    featuredTab === "ALL"
      ? data.tireProducts.slice(0, 3)
      : data.tireProducts
          .filter((item) => item.featuredTag === featuredTab)
          .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1A1D20] font-sans selection:bg-[#A80000] selection:text-white">
      {/* Top Industrial Strip */}
      <div className="bg-[#1A1D20] text-slate-300 text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E53935]" />
              {data.business.address}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E53935]" />
              {data.business.workingHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="font-extrabold text-white hover:text-[#E53935] inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#E53935]" />
              Hotline OTR: {primaryPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main White Header matching OTO018 */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Tire Tread Emblem Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#1A1D20] border-4 border-[#A80000] flex items-center justify-center text-white shadow">
              <Disc className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#1A1D20] leading-none">
                LỐP XE <span className="text-[#A80000]">ĐẶC CHỦNG</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
                OTR Tires • Steel Rims • 3D Alignment
              </div>
            </div>
          </a>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-extrabold uppercase tracking-wider text-[#1A1D20]">
            <a
              href="#"
              className="text-[#A80000] border-b-2 border-[#A80000] py-2"
            >
              Trang chủ
            </a>
            <a
              href="#danh-muc"
              className="hover:text-[#A80000] transition-colors py-2"
            >
              Danh mục lốp OTR
            </a>
            <a
              href="#bo-loc-san-pham"
              className="hover:text-[#A80000] transition-colors py-2"
            >
              Kho lốp &amp; Bộ lọc
            </a>
            <a
              href="#san-pham-noi-bat"
              className="hover:text-[#A80000] transition-colors py-2"
            >
              Sản phẩm nổi bật
            </a>
            <a
              href="#dich-vu-mam-xe"
              className="hover:text-[#A80000] transition-colors py-2"
            >
              Thước lái &amp; Mâm xe
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#A80000] transition-colors py-2"
            >
              Tin tức
            </a>
          </nav>

          {/* Right Search & Quote Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#bo-loc-san-pham"
              aria-label="Tìm kích cỡ lốp"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#A80000] hover:text-white text-slate-700 flex items-center justify-center transition-colors"
            >
              <Search className="w-4 h-4" />
            </a>
            <a
              href="#lien-he"
              className="bg-[#A80000] hover:bg-[#850000] text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors"
            >
              Báo giá đại lý
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#1A1D20]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 text-xs font-extrabold uppercase">
            <a
              href="#danh-muc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#A80000]"
            >
              Danh mục 12 dòng lốp đặc chủng
            </a>
            <a
              href="#bo-loc-san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              Bộ lọc Kích cỡ &amp; Thương hiệu
            </a>
            <a
              href="#san-pham-noi-bat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              Sản phẩm nổi bật
            </a>
            <a
              href="#dich-vu-mam-xe"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              Cân chỉnh thước lái &amp; Ép lốp đặc
            </a>
          </div>
        )}
      </header>

      {/* Hero Banner matching OTO018: Port Crane & Heavy Loader + Dark Translucent Center Box */}
      <section className="relative h-[460px] sm:h-[520px] flex items-center justify-center overflow-hidden bg-[#1A1D20]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Centered Dark Translucent Box matching OTO018 screenshot */}
        <div className="relative z-10 max-w-2xl mx-4 w-full bg-[#1A1D20]/85 backdrop-blur-xs border border-white/25 px-6 sm:px-12 py-10 sm:py-12 text-center text-white shadow-2xl">
          <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#E53935] mb-2">
            {data.hero.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-wider mb-3">
            {data.hero.title}
          </h1>
          <p className="text-sm sm:text-lg font-bold tracking-[0.2em] uppercase text-slate-200 mb-7">
            {data.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={data.hero.ctaLink}
              className="inline-block border-2 border-white hover:bg-[#A80000] hover:border-[#A80000] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest px-8 py-3 transition-all"
            >
              {data.hero.ctaText}
            </a>
            <a
              href={data.hero.secondaryCtaLink}
              className="inline-block bg-[#A80000] hover:bg-[#850000] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest px-7 py-3.5 transition-all"
            >
              {data.hero.secondaryCtaText}
            </a>
          </div>
        </div>
      </section>

      {/* Section `= Danh mục sản phẩm =`: 2x6 Grid of 12 Circular Gray Icon Badges matching OTO018 */}
      <section id="danh-muc" className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative Section Title `= Danh mục sản phẩm =` */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-8 h-1 bg-[#A80000] inline-block" />
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-[#1A1D20]">
              Danh mục sản phẩm
            </h2>
            <span className="w-8 h-1 bg-[#A80000] inline-block" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {data.categoryCircles.map((cat, idx) => (
              <a
                key={cat.id}
                href="#bo-loc-san-pham"
                className="group flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-[#ECEFF1] border-4 border-slate-300 group-hover:border-[#A80000] group-hover:bg-[#A80000]/5 flex flex-col items-center justify-center transition-all shadow-inner">
                  {idx < 10 ? (
                    <Disc className="w-9 h-9 text-slate-700 group-hover:text-[#A80000] transition-colors" />
                  ) : idx === 10 ? (
                    <Truck className="w-9 h-9 text-slate-700 group-hover:text-[#A80000] transition-colors" />
                  ) : (
                    <Compass className="w-9 h-9 text-slate-700 group-hover:text-[#A80000] transition-colors" />
                  )}
                  <span className="text-[8px] font-black uppercase tracking-tighter text-slate-500 mt-1">
                    {cat.code}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-[#1A1D20] group-hover:text-[#A80000] mt-3 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-slate-500">{cat.count}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalog Section matching OTO018: Left Sidebar Filter (`Bộ lọc` #A80000) + Right 3x2 Product Card Grid */}
      <section id="bo-loc-san-pham" className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar Filter matching OTO018 screenshot */}
            <aside className="lg:col-span-3 bg-white rounded-sm shadow-sm border border-slate-200 overflow-hidden">
              {/* Crimson Header Bar `Bộ lọc` */}
              <div className="bg-[#A80000] text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wider">
                  <Filter className="w-4 h-4" />
                  <span>Bộ lọc</span>
                </div>
                {(selectedSizes.length > 0 ||
                  selectedBrands.length > 0 ||
                  selectedVehicles.length > 0) && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-[11px] font-bold underline inline-flex items-center gap-1 text-white/90 hover:text-white"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Xóa lọc
                  </button>
                )}
              </div>

              <div className="p-4 divide-y divide-slate-200 space-y-4">
                {/* Kích Cỡ */}
                <div className="pt-1">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#1A1D20] mb-2.5">
                    Kích Cỡ Thông Dụng
                  </h3>
                  <div className="space-y-2">
                    {data.filterSizes.map((sz) => (
                      <label
                        key={sz}
                        className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer hover:text-[#A80000]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(sz)}
                          onChange={() =>
                            toggleItem(selectedSizes, setSelectedSizes, sz)
                          }
                          className="w-4 h-4 accent-[#A80000] rounded-xs"
                        />
                        <span>Size {sz}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Nhãn Hiệu */}
                <div className="pt-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#1A1D20] mb-2.5">
                    Nhãn Hiệu
                  </h3>
                  <div className="space-y-2">
                    {data.filterBrands.map((brand) => (
                      <label
                        key={brand}
                        className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer hover:text-[#A80000]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() =>
                            toggleItem(selectedBrands, setSelectedBrands, brand)
                          }
                          className="w-4 h-4 accent-[#A80000] rounded-xs"
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Loại Xe */}
                <div className="pt-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#1A1D20] mb-2.5">
                    Loại Xe Chuyên Dụng
                  </h3>
                  <div className="space-y-2">
                    {data.filterVehicles.map((vh) => (
                      <label
                        key={vh}
                        className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer hover:text-[#A80000]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedVehicles.includes(vh)}
                          onChange={() =>
                            toggleItem(
                              selectedVehicles,
                              setSelectedVehicles,
                              vh
                            )
                          }
                          className="w-4 h-4 accent-[#A80000] rounded-xs"
                        />
                        <span>{vh}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Right 3x2 Product Card Grid matching OTO018 */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCatalog.map((tire, idx) => (
                  <div
                    key={tire.id}
                    className="bg-white rounded-sm shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden flex flex-col justify-between group transition-all"
                  >
                    <div>
                      {/* Tire Image */}
                      <div className="relative h-48 bg-white p-3 overflow-hidden border-b border-slate-100">
                        <img
                          src={tire.image}
                          alt={tire.model}
                          className="w-full h-full object-cover rounded-xs group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-3 right-3 bg-[#1A1D20]/85 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-xs">
                          Size {tire.size}
                        </span>
                      </div>

                      {/* Red Pill Category Badge + Bold Model Title */}
                      <div className="p-4 text-center space-y-2">
                        <span className="inline-block bg-[#A80000] text-white text-[11px] font-bold px-3 py-0.5 rounded-full">
                          {tire.categoryBadge}
                        </span>
                        <h3 className="text-base font-black uppercase text-[#1A1D20] tracking-tight">
                          {tire.model}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2">
                          {tire.treadCode}
                        </p>
                        <div className="text-xs font-extrabold text-[#A80000]">
                          {tire.plyRating} • {tire.price}
                        </div>
                      </div>
                    </div>

                    {/* Full-Width Bottom Button `Xem chi tiết ›` matching OTO018 */}
                    <a
                      href="#lien-he"
                      className={`w-full py-2.5 px-4 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors ${
                        idx === 0
                          ? "bg-[#A80000] text-white hover:bg-[#850000]"
                          : "bg-slate-200 text-slate-800 group-hover:bg-[#A80000] group-hover:text-white"
                      }`}
                    >
                      <span>Xem chi tiết</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section `= Sản phẩm nổi bật =` matching OTO018: Tabs + 3 Cards + Orange Wheel-Loader Graphic on Right */}
      <section
        id="san-pham-noi-bat"
        className="py-14 bg-white border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-1 bg-[#A80000] inline-block" />
              <h2 className="text-xl sm:text-2xl font-black uppercase text-[#1A1D20]">
                Sản phẩm nổi bật
              </h2>
              <span className="w-8 h-1 bg-[#A80000] inline-block" />
            </div>

            {/* Filter Tabs: TẤT CẢ | BÁN CHẠY | HÀNG MỚI VỀ */}
            <div className="flex items-center gap-2">
              {(["ALL", "BÁN CHẠY", "HÀNG MỚI VỀ"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFeaturedTab(tab)}
                  className={`px-5 py-2 text-xs font-black uppercase tracking-wider rounded-xs transition-colors ${
                    featuredTab === tab
                      ? "bg-[#A80000] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tab === "ALL" ? "TẤT CẢ" : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 3 Featured Tire Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {featuredProducts.map((tire) => (
                <div
                  key={tire.id}
                  className="bg-[#F4F5F7] border border-slate-200 rounded-sm overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={tire.image}
                      alt={tire.model}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 text-center space-y-1.5">
                      <span className="inline-block bg-[#A80000] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {tire.categoryBadge}
                      </span>
                      <h3 className="text-sm font-black uppercase text-[#1A1D20]">
                        {tire.model}
                      </h3>
                      <p className="text-xs font-bold text-slate-600">
                        Kích cỡ: {tire.size} ({tire.brand})
                      </p>
                      <p className="text-xs font-black text-[#A80000]">
                        {tire.price}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#lien-he"
                    className="w-full py-2 bg-[#A80000] hover:bg-[#850000] text-white text-xs font-bold uppercase text-center block"
                  >
                    Xem chi tiết ›
                  </a>
                </div>
              ))}
            </div>

            {/* Right Heavy Wheel-Loader Machinery Feature Banner matching OTO018 */}
            <div
              id="dich-vu-mam-xe"
              className="lg:col-span-4 bg-gradient-to-br from-[#1A1D20] via-[#262A30] to-[#A80000] text-white rounded-sm p-6 flex flex-col justify-between relative overflow-hidden shadow-lg"
            >
              <div className="space-y-3 relative z-10">
                <span className="inline-block bg-[#F57C00] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-xs">
                  GIẢI PHÁP CÔNG TRÌNH &amp; CẢNG BIỂN
                </span>
                <h3 className="text-xl font-black uppercase leading-tight">
                  MÂM XE CHỊU TẢI, ÉP LỐP ĐẶC &amp; CÂN CHỈNH THƯỚC LÁI 3D
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Phục vụ lắp đặt lưu động tại mỏ đá, cảng container, trạm trộn
                  bê tông và nhà máy khu công nghiệp bằng xe cẩu chuyên dụng.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-100 font-semibold pt-1">
                  <li className="flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-[#F57C00]" />
                    Ép mâm lốp đặc xe nâng máy thủy lực 200 tấn
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F57C00]" />
                    Bảo hành chính hãng độ mòn &amp; lỗi kỹ thuật
                  </li>
                </ul>
              </div>

              <div className="pt-5 relative z-10">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white font-black text-xs uppercase py-3 px-4 rounded-xs shadow"
                >
                  <Phone className="w-4 h-4" />
                  Tư vấn kỹ thuật: {primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical News Section */}
      <section id="tin-tuc" className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-8 h-1 bg-[#A80000] inline-block" />
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#1A1D20]">
              Kiến thức lốp xe đặc chủng &amp; Mâm xe
            </h2>
            <span className="w-8 h-1 bg-[#A80000] inline-block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.news?.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#A80000]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-[#1A1D20] line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Industrial Footer */}
      <footer id="lien-he" className="bg-[#1A1D20] text-slate-300 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10 text-xs">
            <div className="space-y-3">
              <div className="text-base font-black text-white uppercase">
                {data.business.name}
              </div>
              <p className="text-slate-400 leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-black uppercase text-[#E53935]">
                Kho bãi &amp; Xưởng dịch vụ
              </h4>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E53935] shrink-0" />
                <span>
                  {primaryPhone} - {secondaryPhone}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E53935] shrink-0" />
                <span>{data.business.email?.[0]}</span>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-black uppercase text-[#E53935]">
                Danh mục phân phối chính
              </h4>
              <ul className="space-y-1.5 text-slate-400">
                <li>• Lốp xe xúc lật 17.5-25, 20.5-25, 23.5-25</li>
                <li>• Lốp xe lu rung 23.1-26, lốp xe đào bánh lốp</li>
                <li>• Lốp đặc xe nâng &amp; lốp chụp Container cảng biển</li>
                <li>• Mâm thép công trình &amp; Cân chỉnh thước lái 3D</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {data.business.name}. Hiện đại - Mạnh
            mẽ - Cá tính.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
