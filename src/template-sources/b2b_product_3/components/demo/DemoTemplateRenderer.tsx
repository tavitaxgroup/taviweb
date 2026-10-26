"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct3DefaultData,
  type B2BProduct3Data,
  type RollerDoorProduct
} from "../../data/mockData";
import {
  Search,
  ShoppingBag,
  ArrowRight,
  Home,
  Phone,
  ShieldCheck,
  MonitorCheck,
  Layers,
  Calendar,
  Play,
  PlusCircle,
  MapPin,
  Mail,
  ThumbsUp,
  Share2
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: B2BProduct3Data = adaptClonedTemplateData(
    b2bProduct3DefaultData,
    incomingData || customData
  );

  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedDoor, setSelectedDoor] = useState<RollerDoorProduct | null>(null);
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "1900 6828";
  const secondaryPhone = data.business.phone?.[1] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "mon@mona.media";

  const renderSectionDivider = () => (
    <div className="flex items-center justify-center gap-3 mt-2 mb-8">
      <span className="w-16 h-[1px] bg-amber-300" />
      <span className="w-7 h-7 rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center text-[#f59e0b]">
        <Home className="w-3.5 h-3.5" />
      </span>
      <span className="w-16 h-[1px] bg-amber-300" />
    </div>
  );

  const renderDoorCard = (door: RollerDoorProduct) => (
    <div
      key={door.id}
      onClick={() => {
        setCartCount((c) => c + 1);
        setSelectedDoor(door);
      }}
      className="group cursor-pointer bg-white border border-slate-200 hover:border-[#005aab] hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-2.5"
    >
      <div className="relative aspect-[4/3.6] overflow-hidden bg-slate-100 mb-3">
        {door.isDeal && (
          <div className="absolute top-2.5 left-2.5 z-10 w-10 h-10 rounded-full bg-[#f59e0b] text-white text-xs font-bold flex items-center justify-center shadow-md">
            Deal
          </div>
        )}
        <img
          src={door.image}
          alt={door.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#005aab]/90 text-white text-[9px] font-bold uppercase tracking-wider">
          AUSTDOOR
        </div>
      </div>

      <div className="text-center px-1 pb-1.5">
        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
          {door.category}
        </div>
        <h3 className="text-xs font-bold text-[#005aab] group-hover:text-[#f59e0b] transition-colors line-clamp-1 mb-1">
          {door.name}
        </h3>
        <div className="flex items-center justify-center gap-2 text-xs">
          {door.oldPrice && (
            <span className="text-slate-400 line-through text-[11px]">
              {door.oldPrice}
            </span>
          )}
          <span className="font-extrabold text-slate-900">{door.price}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* 1. TOPBAR (`#004e96`) */}
      <div className="bg-[#004e96] text-white text-[11px]">
        <div className="max-w-6xl mx-auto px-4 h-8 flex items-center justify-between">
          <div className="font-bold tracking-wider uppercase truncate">
            {data.slogan}
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <a href="#lien-he" className="hover:text-[#f59e0b]">
              f
            </a>
            <a href="#lien-he" className="hover:text-[#f59e0b]">
              ◎
            </a>
            <a href="#lien-he" className="hover:text-[#f59e0b]">
              𝕏
            </a>
            <a href={`mailto:${primaryEmail}`} className="hover:text-[#f59e0b]">
              ✉
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-[#005aab] text-white flex items-center justify-center shadow-sm">
              <Home className="w-6 h-6" />
            </div>
            <div className="leading-tight">
              <div className="text-xl font-black tracking-tight text-[#003b73] uppercase">
                {data.business.name}
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Cửa vững nhà an
              </div>
            </div>
          </a>

          {/* Navigation + Cart */}
          <div className="flex items-center gap-2 sm:gap-5">
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-extrabold uppercase">
              <a
                href="#"
                className="px-3.5 py-2 rounded bg-[#f59e0b] text-white shadow-sm"
              >
                TRANG CHỦ
              </a>
              <a
                href="#ve-chung-toi"
                className="px-3 py-2 text-slate-700 hover:text-[#005aab] transition-colors"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#san-pham"
                className="px-3 py-2 text-slate-700 hover:text-[#005aab] transition-colors"
              >
                SẢN PHẨM
              </a>
              <a
                href="#tin-tuc"
                className="px-3 py-2 text-slate-700 hover:text-[#005aab] transition-colors"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he"
                className="px-3 py-2 text-slate-700 hover:text-[#005aab] transition-colors"
              >
                LIÊN HỆ
              </a>
            </nav>

            <button
              type="button"
              aria-label="Tìm kiếm"
              className="p-2 text-slate-600 hover:text-[#005aab]"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedDoor(data.daylightDoors[0])}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700"
            >
              <span>0 ₫</span>
              <span className="px-2 py-0.5 border-2 border-[#005aab] text-[#005aab] rounded text-[11px] font-extrabold">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO BANNER (ROYAL BLUE + 4x3 MOSAIC GRID) */}
      <section className="relative bg-gradient-to-r from-[#004a8f] via-[#0063be] to-[#007be5] text-white overflow-hidden py-12 lg:py-16">
        {/* Subtle Geometric Diagonal Overlay */}
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline & CTA */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-2">
              <div className="text-xl sm:text-2xl font-bold text-blue-100">
                {data.hero.eyebrow || "Thương hiệu"}
              </div>
              <div className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white">
                {data.hero.subtitle || "CỬA CUỐN"}
              </div>
              <h1
                className="text-4xl sm:text-5xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 py-1"
                style={{
                  WebkitTextStroke: "1.5px #ffffff"
                }}
              >
                {data.hero.title || "HÀNG ĐẦU"}
              </h1>
              <div className="text-xl sm:text-2xl font-bold text-white pb-4">
                {data.hero.description || "Việt Nam"}
              </div>

              <div className="pt-2">
                <a
                  href={data.hero.ctaLink || "#san-pham"}
                  className="inline-flex items-center bg-[#f59e0b] hover:bg-[#d97706] text-white font-extrabold text-sm rounded-lg overflow-hidden shadow-lg transition-all"
                >
                  <span className="px-5 py-2.5">
                    {data.hero.ctaText || "Tìm hiểu thêm"}
                  </span>
                  <span className="bg-white text-[#005aab] px-3 py-2.5 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right 4x3 Mosaic Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-4 gap-2 sm:gap-2.5 bg-white/10 p-2.5 rounded-xl backdrop-blur-sm border border-white/20">
                {data.heroMosaicImages.slice(0, 12).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="aspect-[4/3] rounded overflow-hidden border border-white/40 shadow-sm bg-slate-900"
                  >
                    <img
                      src={imgUrl}
                      alt={`Công trình cửa cuốn ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
            <span className="w-2.5 h-2.5 rounded-full border border-white/70" />
            <span className="w-2.5 h-2.5 rounded-full border border-white/70" />
          </div>
        </div>
      </section>

      {/* 4. SECTION 1: CỬA CUỐN XUYÊN SÁNG */}
      <section id="san-pham" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-800 tracking-wide">
            CỬA CUỐN XUYÊN SÁNG
          </h2>
          {renderSectionDivider()}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.daylightDoors.map((door) => renderDoorCard(door))}
          </div>
        </div>
      </section>

      {/* 5. SECTION 2: CỬA CUỐN THẾ HỆ MỚI */}
      <section className="py-14 bg-[#f5f6f8]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-800 tracking-wide">
            CỬA CUỐN THẾ HỆ MỚI
          </h2>
          {renderSectionDivider()}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.newGenDoors.map((door) => renderDoorCard(door))}
          </div>
        </div>
      </section>

      {/* 6. AUSTCARE SERVICE BANNER */}
      <section className="relative bg-gradient-to-r from-[#004482] via-[#005eb4] to-[#004482] text-white overflow-hidden border-y-4 border-[#f59e0b]">
        <div className="max-w-6xl mx-auto px-4 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Austcare Logo */}
          <div className="lg:col-span-3 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-4 border-[#f59e0b] flex items-center justify-center text-[#f59e0b] mb-2 bg-white/5">
              <PlusCircle className="w-9 h-9" />
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-white">
              {data.austcareBanner.brand}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-200 mt-0.5">
              {data.austcareBanner.subtitle}
            </div>
          </div>

          {/* Center Customer Support Team Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-xl overflow-hidden border-2 border-white/30 shadow-xl max-h-48 w-full">
              <img
                src={data.austcareBanner.teamImage}
                alt="Đội ngũ CSKH Austcare"
                className="w-full h-48 object-cover object-center"
              />
            </div>
          </div>

          {/* Right Hotline Call Box */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-2">
            <div className="text-base sm:text-lg font-extrabold uppercase text-white">
              • {data.austcareBanner.bullets[0]}
            </div>
            <div className="text-base sm:text-lg font-extrabold uppercase text-[#fbbf24]">
              • {data.austcareBanner.bullets[1]}
            </div>

            <a
              href={`tel:${primaryPhone}`}
              className="mt-2 bg-white text-[#004e96] rounded-2xl px-6 py-3 shadow-lg flex flex-col items-center border-2 border-[#fbbf24] hover:scale-105 transition-transform"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#004e96]">
                HÃY GỌI CHO CHÚNG TÔI!
              </span>
              <div className="flex items-center gap-2 text-2xl sm:text-3xl font-black text-[#004e96]">
                <Phone className="w-6 h-6 text-[#f59e0b] fill-[#f59e0b]" />
                <span>{primaryPhone}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 7. SECTION 3: CÁC SẢN PHẨM ĐẶC BIỆT */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-800 tracking-wide">
            CÁC SẢN PHẨM ĐẶC BIỆT
          </h2>
          {renderSectionDivider()}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.specialDoors.map((door) => (
              <div key={door.id} className="space-y-3">
                {/* Framed Blue Header Box */}
                <div className="border-2 border-[#005aab] py-2 px-3 text-center text-xs font-extrabold text-slate-800 bg-white">
                  {door.headerBoxTitle}
                </div>
                {renderDoorCard(door)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4 CORE VALUES ARCHITECTURAL BLUE BANNER */}
      <section className="relative bg-[#0a4b8c] text-white py-14 overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt="Công nghệ cửa cuốn"
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/15">
            {data.coreValues.map((val, idx) => (
              <div key={val.id} className="px-5 py-4 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  {idx === 0 ? (
                    <Calendar className="w-7 h-7" />
                  ) : idx === 1 ? (
                    <MonitorCheck className="w-7 h-7" />
                  ) : idx === 2 ? (
                    <ShieldCheck className="w-7 h-7" />
                  ) : (
                    <Layers className="w-7 h-7" />
                  )}
                </div>
                <h3 className="text-sm font-extrabold text-white">
                  {val.title}
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION 4: TIN TỨC – SỰ KIỆN */}
      <section id="tin-tuc" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-800 tracking-wide">
            TIN TỨC – SỰ KIỆN
          </h2>
          {renderSectionDivider()}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.news || []).map((post) => {
              const [day, month] = post.date.split(" ");
              return (
                <article
                  key={post.id}
                  className="bg-white border border-slate-200 hover:shadow-lg transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-white border border-[#005aab] text-[#005aab] px-2 py-1 text-center leading-none shadow">
                        <div className="text-xs font-extrabold">
                          {day || "27"}
                        </div>
                        <div className="text-[9px] font-bold">
                          {month || "Th11"}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 text-center">
                      <h3 className="text-xs font-extrabold text-slate-800 hover:text-[#005aab] line-clamp-2 mb-2">
                        {post.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-slate-200 mx-auto mb-2" />
                      <p className="text-[11px] text-slate-500 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. SECTION 5: VỀ CHÚNG TÔI + FACTORY VIDEO */}
      <section id="ve-chung-toi" className="py-14 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-800 tracking-wide">
            VỀ CHÚNG TÔI
          </h2>
          {renderSectionDivider()}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Corporate Story */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-sm font-extrabold uppercase text-slate-800">
                {data.business.aboutTitle || `CỬA CUỐN ${data.business.name}`}
              </h3>
              {(data.business.aboutText || []).map((para, idx) => (
                <p
                  key={idx}
                  className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Right Aerial Factory Video Preview */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setShowVideoModal(true)}
                className="group cursor-pointer relative rounded overflow-hidden shadow-lg aspect-[16/9] bg-slate-900 border border-slate-200"
              >
                <img
                  src={data.factoryVideo.thumbnail}
                  alt={data.factoryVideo.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/50" />

                <div className="absolute top-3 left-4 right-4 text-xs font-bold text-white truncate">
                  {data.factoryVideo.title}
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-10 rounded-xl bg-black/75 group-hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-lg">
                    <Play className="w-5 h-5 fill-white" />
                  </div>
                </div>

                {/* Bottom Left Capacity Highlight */}
                <div className="absolute bottom-3 left-4 text-white leading-none">
                  <div className="text-[10px] font-bold uppercase text-blue-200">
                    CÔNG SUẤT NHÀ MÁY
                  </div>
                  <div className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    {data.factoryVideo.capacityNumber}
                  </div>
                  <div className="inline-block px-2 py-0.5 bg-[#005aab] text-white text-[9px] font-bold uppercase mt-0.5">
                    {data.factoryVideo.capacityUnit}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SECTION 6: ĐỐI TÁC CỦA CHÚNG TÔI */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-800 tracking-wide">
            ĐỐI TÁC CỦA CHÚNG TÔI
          </h2>
          {renderSectionDivider()}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {(data.clients || []).map((partner, idx) => (
              <div
                key={partner.id}
                className="h-16 border border-slate-100 bg-slate-50 flex items-center justify-center px-3 text-center hover:border-[#005aab] transition-colors"
              >
                <span
                  className={`text-xs sm:text-sm font-black uppercase tracking-wider ${
                    idx % 3 === 0
                      ? "text-[#f59e0b]"
                      : idx % 3 === 1
                      ? "text-[#005aab]"
                      : "text-red-600"
                  }`}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. ROYAL BLUE FOOTER (`#0a4d8c`) */}
      <footer id="lien-he" className="bg-[#0a4d8c] text-white pt-12">
        <div className="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          {/* Column 1: Product Tags */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider mb-4">
              SẢN PHẨM
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.productTags.map((tag) => (
                <a
                  key={tag}
                  href="#san-pham"
                  className="px-2.5 py-1.5 border border-white/35 hover:bg-[#f59e0b] hover:border-[#f59e0b] text-white/90 text-[11px] transition-colors"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider mb-4">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h3>
            <div className="space-y-2 text-blue-100 leading-relaxed">
              <div className="font-extrabold text-white uppercase">
                CÔNG TY TNHH {data.business.name}
              </div>
              <div>Địa chỉ: {data.business.address}</div>
              <div>Điện thoại: {secondaryPhone}</div>
              <div>Email: {primaryEmail}</div>
              <div>Giấy phép kinh doanh: {data.licenseNumber}</div>
            </div>
          </div>

          {/* Column 3: Fanpage Card */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider mb-4">
              FANPAGE
            </h3>
            <div className="bg-white text-slate-800 rounded overflow-hidden shadow-md">
              <div className="relative h-28 overflow-hidden">
                <img
                  src={data.factoryVideo.thumbnail}
                  alt={data.business.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/45 p-3 flex flex-col justify-between text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded bg-[#005aab] flex items-center justify-center font-black text-xs border border-white">
                      MD
                    </div>
                    <div>
                      <div className="text-xs font-bold line-clamp-1">
                        Hệ thống cửa cuốn {data.business.name}
                      </div>
                      <div className="text-[10px] text-slate-200">
                        3.850 lượt thích
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDoor(data.daylightDoors[0])}
                      className="px-2.5 py-1 bg-white text-slate-800 rounded text-[10px] font-bold flex items-center gap-1"
                    >
                      <ThumbsUp className="w-3 h-3 text-[#005aab]" />
                      <span>Thích Trang</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDoor(data.daylightDoors[0])}
                      className="px-2.5 py-1 bg-white text-slate-800 rounded text-[10px] font-bold flex items-center gap-1"
                    >
                      <Share2 className="w-3 h-3 text-slate-600" />
                      <span>Chia sẻ</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-2.5 bg-slate-50 text-[11px] text-slate-500">
                Hãy là người đầu tiên trong số bạn bè của bạn thích nội dung này
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#073b6e] py-3 text-center text-[11px] text-blue-200">
          © Bản quyền thuộc về Nhà máy Sản xuất & Lắp đặt Cửa cuốn{" "}
          <strong className="text-white">{data.business.name}</strong>
        </div>
      </footer>

      {/* DOOR QUOTE MODAL */}
      {selectedDoor && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full rounded-xl p-6 shadow-2xl border-t-4 border-[#005aab]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-extrabold uppercase text-[#005aab]">
                Tư vấn & Báo giá lắp đặt cửa cuốn
              </h3>
              <button
                type="button"
                onClick={() => setSelectedDoor(null)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded border border-slate-200 mb-4">
              <img
                src={selectedDoor.image}
                alt={selectedDoor.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <div className="text-xs font-bold text-slate-800">
                  {selectedDoor.name}
                </div>
                <div className="text-sm font-extrabold text-[#f59e0b] mt-0.5">
                  {selectedDoor.price} / m²
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Liên hệ tổng đài <strong>{data.austcareBanner.brand}</strong> của{" "}
              <strong>{data.business.name}</strong> qua số{" "}
              <strong className="text-[#005aab]">{primaryPhone}</strong> để được
              khảo sát kích thước thực tế và báo giá đồng bộ miễn phí.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedDoor(null)}
                className="px-4 py-2 border border-slate-300 rounded text-xs font-bold text-slate-600"
              >
                Đóng
              </button>
              <a
                href={`tel:${primaryPhone}`}
                className="px-4 py-2 bg-[#f59e0b] text-white rounded text-xs font-bold"
              >
                Gọi ngay: {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FACTORY VIDEO MODAL */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white max-w-xl w-full rounded-xl overflow-hidden shadow-2xl border border-white/20">
            <div className="px-5 py-3 bg-[#004e96] flex items-center justify-between">
              <span className="text-xs font-bold uppercase">
                {data.factoryVideo.title}
              </span>
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="text-white/80 hover:text-white font-bold"
              >
                ✕
              </button>
            </div>
            <div className="p-6 text-center space-y-4">
              <img
                src={data.factoryVideo.thumbnail}
                alt="Nhà máy sản xuất cửa cuốn"
                className="w-full h-56 object-cover rounded-lg"
              />
              <p className="text-xs text-slate-300 leading-relaxed">
                Hệ thống nhà máy {data.business.name} quy mô{" "}
                <strong>{data.factoryVideo.capacityNumber} m² cửa/năm</strong>{" "}
                với dây chuyền sơn tĩnh điện và cán nan tự động tiêu chuẩn Đức.
              </p>
              <a
                href={`tel:${primaryPhone}`}
                className="inline-block px-6 py-2.5 bg-[#f59e0b] text-white text-xs font-extrabold rounded-full"
              >
                Đặt lịch tham quan nhà máy: {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
