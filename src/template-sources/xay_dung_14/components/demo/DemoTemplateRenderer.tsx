"use client";

import React, { useState } from "react";
import {
  Search,
  Send,
  ChevronRight,
  Building2,
  MapPin,
  Phone,
  Mail,
  Sofa,
  BedDouble,
  Bath,
  UtensilsCrossed,
  Menu,
  X,
  Share2,
  CheckCircle2
} from "lucide-react";
import { Facebook, Instagram } from "@/components/icons/BrandIcons";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { xayDung14DefaultData, type XayDung14Data } from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: XayDung14Data = adaptClonedTemplateData(xayDung14DefaultData, incomingData);

  const [selectedApartmentId, setSelectedApartmentId] = useState<string>(
    data.apartmentProducts[0]?.id || "type-a"
  );
  const [selectedUnitCode, setSelectedUnitCode] = useState<string>("A1");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const activeApartment =
    data.apartmentProducts.find((item) => item.id === selectedApartmentId) ||
    data.apartmentProducts[0];

  const navItems = [
    { label: "TRANG CHỦ", href: "#trang-chu" },
    { label: "TỔNG QUAN", href: "#tong-quan" },
    { label: "VỊ TRÍ", href: "#vi-tri" },
    { label: "THIẾT KẾ", href: "#thiet-ke" },
    { label: "TIỆN ÍCH", href: "#tien-ich" },
    { label: "SƠ ĐỒ", href: "#so-do" },
    { label: "SẢN PHẨM", href: "#san-pham" },
    { label: "GIÁ BÁN", href: "#gia-ban" },
    { label: "LIÊN HỆ", href: "#lien-he" }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#0d303e] selection:text-[#f5b82e]">
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#trang-chu" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded bg-[#0d303e] text-[#f5b82e] flex items-center justify-center shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold tracking-wider text-[#0d303e] uppercase">
                {data.business.name}
              </div>
              <div className="text-[10px] text-amber-600 font-medium tracking-widest uppercase">
                Landmark Residence
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[11px] font-bold tracking-wider uppercase transition-colors ${
                  idx === 0
                    ? "text-[#0d303e] border-b-2 border-[#f5b82e] pb-1"
                    : "text-slate-600 hover:text-[#0d303e]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="p-1.5 text-slate-600 hover:text-[#0d303e]"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0d303e]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-xs font-bold text-[#0d303e]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. NIGHT SKYLINE HERO BANNER */}
      <section
        id="trang-chu"
        className="relative w-full h-[540px] md:h-[640px] flex items-center justify-center overflow-hidden bg-[#081c24]"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061826]/65 via-[#082233]/40 to-[#061826]/75" />

        <div className="relative z-10 max-w-3xl mx-4 px-8 sm:px-14 py-10 border border-white/35 bg-slate-950/45 backdrop-blur-xs text-center shadow-2xl">
          <p className="text-base md:text-xl font-serif text-white tracking-wide mb-3">
            {data.hero.eyebrow || "M Landmark Residence"}
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#f5b82e] uppercase leading-tight tracking-wide drop-shadow">
            {data.hero.title}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            {data.hero.subtitle}
          </p>
          <div className="mt-6">
            <a
              href={data.hero.ctaLink || "#tong-quan"}
              className="inline-flex items-center gap-1.5 px-6 py-2 border border-white/80 text-white text-xs font-medium rounded-xs hover:bg-[#f5b82e] hover:border-[#f5b82e] hover:text-slate-950 transition-colors"
            >
              <span>{data.hero.ctaText || "Chi tiết"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. TỔNG QUAN DỰ ÁN */}
      <section id="tong-quan" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Vertical Skyscraper Photo */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden shadow-xl border border-slate-100">
              <img
                src={data.overviewImage}
                alt="Phối cảnh tháp M Landmark Residences"
                className="w-full h-[460px] md:h-[540px] object-cover"
              />
            </div>
          </div>

          {/* Right Specification List */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-xl md:text-2xl font-bold text-[#0d303e] uppercase tracking-wide border-b border-slate-200 pb-3">
              TỔNG QUAN DỰ ÁN
            </h2>
            <ul className="space-y-3 text-xs md:text-sm">
              {data.overviewSpecs.map((spec, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <Send className="w-3.5 h-3.5 text-[#0d303e] mt-1 shrink-0 rotate-45" />
                  <div>
                    <strong className="font-bold text-slate-800">{spec.label}:</strong>{" "}
                    <span className="text-slate-600">{spec.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. VỊ TRÍ "KIM CƯƠNG" TẠI ĐÀ NẴNG (DARK PETROL #0d303e) */}
      <section id="vi-tri" className="py-16 md:py-20 bg-[#0d303e] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-normal uppercase tracking-wider text-white inline-block pb-3 border-b border-teal-500/40">
              VỊ TRÍ “KIM CƯƠNG” TẠI ĐÀ NẴNG
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4 text-xs md:text-sm text-slate-200 leading-relaxed">
              <p>
                Siêu dự án tổ hợp khách sạn{" "}
                <span className="text-[#a3e635] font-semibold">Landmark Residences</span> sở hữu vị trí “Kim Cương” tại Đà Nẵng nằm ngay mặt tiền đường “triệu đô” Bạch Đằng – cung đường du lịch và phố đi bộ về đêm nổi tiếng bậc nhất Đà Nẵng. Nằm ngay bên cạnh cầu quay Sông Hàn – một biểu tượng cho thành phố đáng sống bậc nhất cả nước:
              </p>

              <ul className="space-y-1.5 font-medium">
                {data.locationBullets.map((bullet, idx) => (
                  <li key={idx} className="text-white">
                    <span className="text-[#a3e635] font-semibold">
                      {bullet.split("giáp")[0]}
                    </span>
                    giáp{bullet.split("giáp")[1]}
                  </li>
                ))}
              </ul>

              <p>
                Phóng tầm nhìn ra sông Hàn thơ mộng, đỉnh Sơn Trà hùng vĩ, vịnh Đà Nẵng đẹp phẳng phiu và biển Đông tráng lệ. Dự án tọa trên thế đất địa linh hội tụ, mang lại dòng chảy vượng khí và tài lộc cho chủ nhân căn hộ.
              </p>

              <p>
                <span className="text-[#a3e635] font-semibold">M Landmark Residence</span> được đánh giá là vị trí “Kim Cương” còn sót lại tại Đà Nẵng nằm ngay trung tâm thành phố, sở hữu mặt tiền 100% View Sông Hàn vĩnh cửu.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative bg-white p-2 rounded-xs shadow-2xl">
                <img
                  src={data.locationMapImage}
                  alt="Bản đồ vị trí Kim Cương bên sông Hàn"
                  className="w-full h-[300px] md:h-[340px] object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-[#0d303e]/95 text-white px-4 py-2 text-xs font-semibold flex items-center gap-2 border border-[#f5b82e]">
                  <MapPin className="w-4 h-4 text-[#f5b82e]" />
                  <span>58 Bạch Đằng – Trực diện Cầu Quay Sông Hàn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THIẾT KẾ TINH TẾ & HIỆN ĐẠI (OVERLAPPING GOLD-BORDERED CARDS) */}
      <section id="thiet-ke" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-xl md:text-2xl font-normal uppercase tracking-wider text-slate-800">
              THIẾT KẾ <span className="text-[#1496b7] font-semibold">TINH TẾ & HIỆN ĐẠI</span>
            </h2>
            <div className="w-16 h-0.5 bg-slate-300 mx-auto mt-2" />
          </div>

          <div className="space-y-16">
            {data.designBlocks.map((block) => (
              <div
                key={block.id}
                className="grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Left Luxury Image with Gold Border */}
                <div className="lg:col-span-6 z-10">
                  <div className="border-2 border-[#d4af37] shadow-xl overflow-hidden bg-white">
                    <img
                      src={block.image}
                      alt={block.highlightBrand}
                      className="w-full h-[290px] md:h-[340px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Right Overlapping Dark Petrol Card */}
                <div className="lg:col-span-6 lg:-ml-8 mt-4 lg:mt-0">
                  <div className="bg-[#0d303e] text-white p-8 md:p-12 lg:pl-14 shadow-2xl space-y-4 text-xs md:text-sm leading-relaxed">
                    {block.paragraphs.map((p, i) => (
                      <p key={i} className="text-slate-100">
                        {p.includes(block.highlightBrand) ? (
                          <>
                            {p.split(block.highlightBrand)[0]}
                            <span className="text-[#a3e635] font-semibold">
                              {block.highlightBrand}
                            </span>
                            {p.split(block.highlightBrand)[1]}
                          </>
                        ) : (
                          p
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TIỆN ÍCH ĐẲNG CẤP KHÁCH SẠN 5 SAO (4x2 GRID ON #0d303e) */}
      <section id="tien-ich" className="py-16 md:py-20 bg-[#0d303e] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-normal uppercase tracking-wider">
              TIỆN ÍCH ĐẲNG CẤP{" "}
              <span className="text-[#a3e635] font-semibold">KHÁCH SẠN 5 SAO</span>
            </h2>
            <div className="w-16 h-0.5 bg-teal-400/50 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {data.amenitiesFiveStar.map((item) => (
              <div key={item.id} className="group text-center flex flex-col">
                <div className="h-44 overflow-hidden mb-3.5 border border-teal-800/60 shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#a3e635] mb-1.5">{item.title}</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SƠ ĐỒ PHÂN TẦNG */}
      <section id="so-do" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-normal text-slate-800 uppercase tracking-wider">
              SƠ ĐỒ PHÂN TẦNG
            </h2>
            <div className="w-16 h-0.5 bg-slate-300 mx-auto mt-2" />
          </div>

          {/* Top Unit Callout Numbers */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4 text-center">
            {data.topFloorUnits.map((u) => {
              const active = selectedUnitCode === u.code;
              return (
                <button
                  key={u.code}
                  type="button"
                  onClick={() => setSelectedUnitCode(u.code)}
                  className={`py-2 px-3 rounded border transition-all ${
                    active
                      ? "border-[#0d303e] bg-[#0d303e]/5 shadow-xs"
                      : "border-transparent hover:border-slate-200"
                  }`}
                >
                  <div className="text-lg md:text-xl font-light text-slate-600 border-b border-slate-300 pb-0.5">
                    {u.code}
                  </div>
                  <div className="text-[11px] text-slate-400 pt-1">{u.area}</div>
                </button>
              );
            })}
          </div>

          {/* Master Floorplate Diagram */}
          <div className="relative border-2 border-[#0d303e]/20 bg-slate-900 p-3 md:p-5 shadow-lg overflow-hidden">
            <img
              src={data.floorMapImage}
              alt="Sơ đồ mặt bằng phân tầng điển hình"
              className="w-full h-[260px] md:h-[360px] object-cover opacity-90"
            />
            <div className="absolute top-5 right-5 bg-[#0d303e]/95 text-white px-4 py-2 text-xs border border-[#f5b82e]">
              Đang chọn mã căn:{" "}
              <strong className="text-[#f5b82e]">{selectedUnitCode}</strong>
            </div>
          </div>

          {/* Bottom Unit Callout Numbers */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mt-4 text-center">
            {data.bottomFloorUnits.map((u) => {
              const active = selectedUnitCode === u.code;
              return (
                <button
                  key={u.code}
                  type="button"
                  onClick={() => setSelectedUnitCode(u.code)}
                  className={`py-2 px-1 rounded border transition-all ${
                    active
                      ? "border-[#0d303e] bg-[#0d303e]/5"
                      : "border-transparent hover:border-slate-200"
                  }`}
                >
                  <div className="text-base md:text-lg font-light text-slate-600 border-b border-slate-300 pb-0.5">
                    {u.code}
                  </div>
                  <div className="text-[10px] text-slate-400 pt-1">{u.area}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. SẢN PHẨM (5 APARTMENT TABS + 2-COLUMN FLOORPLAN & SPECS) */}
      <section id="san-pham" className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-normal text-slate-800 uppercase tracking-wider">
              SẢN PHẨM
            </h2>
            <div className="w-16 h-0.5 bg-slate-300 mx-auto mt-2" />
          </div>

          {/* 5 Product Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-10">
            {data.apartmentProducts.map((prod) => {
              const isSelected = prod.id === activeApartment?.id;
              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => setSelectedApartmentId(prod.id)}
                  className={`px-5 py-2 text-xs font-semibold transition-colors ${
                    isSelected
                      ? "bg-[#0d303e] text-white shadow-sm"
                      : "bg-[#6c8591] text-white/90 hover:bg-[#0d303e]/80"
                  }`}
                >
                  {prod.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Selected Product Detail */}
          {activeApartment && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left 2D/3D Floorplan Image */}
              <div className="lg:col-span-6 bg-slate-50 p-4 border border-slate-200 shadow-sm">
                <img
                  src={activeApartment.floorplanImage}
                  alt={activeApartment.tabLabel}
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />
              </div>

              {/* Right Detailed Specs */}
              <div className="lg:col-span-6 space-y-4 text-xs md:text-sm text-slate-700">
                <p>
                  <strong className="font-bold text-slate-900">Diện tích căn hộ:</strong>{" "}
                  {activeApartment.area}
                </p>
                <p>
                  <strong className="font-bold text-slate-900">Tầng:</strong>{" "}
                  {activeApartment.floors}
                </p>

                <div className="space-y-2.5 py-2">
                  <div className="flex items-center gap-3">
                    <Sofa className="w-4 h-4 text-[#0d303e]" />
                    <span className="font-bold text-slate-800">{activeApartment.livingRooms}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BedDouble className="w-4 h-4 text-[#0d303e]" />
                    <span className="font-bold text-slate-800">{activeApartment.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bath className="w-4 h-4 text-[#0d303e]" />
                    <span className="font-bold text-slate-800">{activeApartment.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <UtensilsCrossed className="w-4 h-4 text-[#0d303e]" />
                    <span className="font-bold text-slate-800">{activeApartment.kitchens}</span>
                  </div>
                </div>

                <p className="leading-relaxed text-justify">
                  <strong className="font-bold text-slate-900">Thiết kế căn hộ:</strong>{" "}
                  {activeApartment.description}
                </p>

                <ul className="space-y-1.5 pt-1">
                  {activeApartment.views.map((v, i) => (
                    <li key={i}>
                      <strong className="font-bold text-slate-900">+ {v.direction}:</strong>{" "}
                      <span>{v.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. GIÁ BÁN TỪNG CĂN HỘ (4-COLUMN PRICING TABLE) */}
      <section id="gia-ban" className="py-16 md:py-20 bg-[#f7f9fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-normal text-slate-800 uppercase tracking-wider">
              GIÁ BÁN TỪNG CĂN HỘ
            </h2>
            <div className="w-16 h-0.5 bg-slate-300 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {data.unitPricing.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white flex flex-col justify-between text-center transition-transform ${
                  plan.featured
                    ? "border-2 border-[#f5a623] shadow-xl lg:-translate-y-2"
                    : "border border-slate-200 shadow-sm"
                }`}
              >
                <div>
                  {/* Card Top Header */}
                  <div
                    className={`py-3 px-4 text-xs font-bold uppercase tracking-wider text-white ${
                      plan.featured ? "bg-[#f5a623]" : "bg-[#0d303e]"
                    }`}
                  >
                    {plan.unitType}
                  </div>

                  {/* Price Banner */}
                  <div
                    className={`py-5 px-4 text-2xl md:text-3xl font-normal text-white ${
                      plan.featured ? "bg-[#fbbf24]" : "bg-[#6c8591]"
                    }`}
                  >
                    {plan.depositPrice}
                  </div>

                  {/* Specs Rows */}
                  <ul className="divide-y divide-slate-100 px-6 py-4 text-xs text-slate-600">
                    {plan.specs.map((spec, idx) => (
                      <li key={idx} className="py-2.5">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pb-6 pt-2">
                  <a
                    href="#lien-he"
                    className="inline-block px-7 py-2 rounded-xs bg-[#1496b7] text-white text-xs font-semibold hover:bg-[#0d303e] transition-colors shadow-xs"
                  >
                    Liên hệ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER (DARK PETROL #0d303e 4 COLUMNS) */}
      <footer id="lien-he" className="bg-[#0d303e] text-white pt-14 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-teal-900/80">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-[#f5b82e]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-serif font-bold uppercase tracking-wider text-white">
                    {data.business.name}
                  </div>
                  <div className="text-[10px] text-slate-300">Landmark Residence</div>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#a3e635] shrink-0" />
                  <span>{data.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#a3e635] shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: MENU */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                MENU
              </h3>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-slate-300">
                {navItems.map((item, idx) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`hover:text-[#a3e635] transition-colors ${
                      idx === 0 ? "text-[#a3e635] font-semibold" : ""
                    }`}
                  >
                    {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: TIN TỨC */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                TIN TỨC
              </h3>
              <div className="space-y-3">
                {(data.news || []).slice(0, 3).map((post) => (
                  <a
                    key={post.id}
                    href="#tin-tuc"
                    className="flex items-center gap-3 group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-14 h-10 object-cover shrink-0 border border-white/15"
                    />
                    <span className="text-[10px] font-semibold text-slate-200 group-hover:text-[#a3e635] line-clamp-2 leading-snug">
                      {post.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                ĐĂNG KÝ
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Đăng ký để nhận được thông tin mới & bảng báo giá từ chúng tôi.
              </p>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  required
                  placeholder="Email ..."
                  className="w-full bg-white text-slate-800 px-3.5 py-2 pr-10 text-xs rounded-xs focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Gửi"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 text-[#0d303e] hover:text-[#1496b7]"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#a3e635]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Đã đăng ký nhận bảng giá thành công!</span>
                </div>
              )}

              <div className="flex items-center gap-3 pt-1">
                {[Facebook, Instagram, Share2].map((Icon, i) => (
                  <a
                    key={i}
                    href="#lien-he"
                    className="text-slate-300 hover:text-[#f5b82e] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-slate-400">
            © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
