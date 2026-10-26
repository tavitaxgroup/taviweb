"use client";

import React, { useState } from "react";
import {
  Building2,
  Castle,
  Lightbulb,
  Settings,
  ChevronDown,
  MapPin,
  Phone,
  Clock,
  Check,
  MessageCircle,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung18DefaultData,
  type XayDung18Data
} from "@/template-sources/xay_dung_18/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function InvestLandLogoCard({
  brandName,
  dark = false
}: {
  brandName: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center select-none ${
        dark ? "" : "bg-white px-5 py-4 shadow-md"
      }`}
    >
      {/* 3D Golden Building Graphic */}
      <div className="relative w-12 h-12 flex items-end justify-center mb-1.5">
        <div className="w-5 h-11 bg-gradient-to-b from-[#f5be3b] to-[#c99218] transform -skew-y-12 shadow-xs" />
        <div className="w-4 h-8 bg-gradient-to-b from-[#333333] to-[#111111] transform skew-y-12 -ml-1 flex flex-col justify-center items-center gap-1 p-0.5">
          <div className="grid grid-cols-2 gap-0.5">
            <span className="w-1 h-1 bg-[#f5be3b]" />
            <span className="w-1 h-1 bg-[#f5be3b]" />
            <span className="w-1 h-1 bg-[#f5be3b]" />
            <span className="w-1 h-1 bg-[#f5be3b]" />
          </div>
        </div>
      </div>

      <span
        className={`font-serif text-xs font-bold uppercase tracking-wider leading-none ${
          dark ? "text-white" : "text-neutral-800"
        }`}
      >
        {brandName.includes("MONA") ? "MONA MEDIA" : brandName}
      </span>
      <span
        className={`text-[7px] uppercase tracking-[0.25em] mt-0.5 ${
          dark ? "text-neutral-400" : "text-neutral-400"
        }`}
      >
        REAL ESTATE
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: XayDung18Data = adaptClonedTemplateData(
    xayDung18DefaultData,
    incomingData
  );

  const pillars = data.corporatePillars || xayDung18DefaultData.corporatePillars;
  const projectStrip =
    data.featuredProjectsStrip || xayDung18DefaultData.featuredProjectsStrip;
  const events = data.events || xayDung18DefaultData.events;
  const partners = data.partners || xayDung18DefaultData.partners;
  const newsList = data.news || xayDung18DefaultData.news || [];
  const footerLeft =
    data.footerProjectsLeft || xayDung18DefaultData.footerProjectsLeft;
  const footerRight =
    data.footerProjectsRight || xayDung18DefaultData.footerProjectsRight;

  const [selectedProjectModal, setSelectedProjectModal] = useState<string | null>(
    null
  );
  const [contactSent, setContactSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0902.848.440";
  const secondaryPhone = data.business.phone?.[1] || "0938.460.400";
  const primaryEmail = data.business.email?.[0] || "investmentland01@gmail.com";

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-[#eab338] selection:text-white">
      {/* =====================================================================
          1. WHITE HEADER WITH HANGING GOLD BUILDING LOGO + SKYLINE HERO
         ===================================================================== */}
      <header className="sticky top-0 z-40 bg-white border-b border-neutral-100 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between relative">
          {/* Hanging White Logo Box Overlapping Hero */}
          <a
            href="#trang-chu"
            className="lg:absolute lg:top-0 lg:left-4 z-30"
          >
            <InvestLandLogoCard brandName={data.business.name} />
          </a>

          <div className="hidden lg:block w-32" />

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase text-neutral-700">
            <a href="#gioi-thieu" className="hover:text-[#d4a024] transition">
              GIỚI THIỆU
            </a>
            <a
              href="#du-an"
              className="hover:text-[#d4a024] flex items-center gap-1 transition"
            >
              DỰ ÁN NỔI BẬT <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#su-kien" className="hover:text-[#d4a024] transition">
              SỰ KIỆN
            </a>
            <a href="#doi-tac" className="hover:text-[#d4a024] transition">
              ĐỐI TÁC
            </a>
            <a href="#tin-tuc" className="hover:text-[#d4a024] transition">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#d4a024] transition">
              LIÊN HỆ
            </a>
          </nav>

          {/* Golden Hotline Pill Button */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${primaryPhone.replace(/[^\d+]/g, "")}`}
              className="bg-[#eab338] hover:bg-[#d49e26] text-white text-[10px] sm:text-[11px] font-extrabold uppercase px-3.5 py-1.5 rounded-xs shadow-2xs transition"
            >
              HOTLINE: {data.hotlineBanner || `${primaryPhone} - ${secondaryPhone}`}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-1.5 text-neutral-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giới thiệu
            </a>
            <a
              href="#du-an"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Dự án nổi bật
            </a>
            <a
              href="#su-kien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Sự kiện mở bán
            </a>
            <a
              href="#doi-tac"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Đối tác chiến lược
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tin tức thị trường
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#d4a024]"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* Panoramic Metropolis Skyline Hero */}
      <section
        id="trang-chu"
        className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full overflow-hidden bg-slate-900"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

        {/* Slider Indicator Dots Bottom Center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
          <span className="w-2.5 h-2.5 rounded-full border border-white/80" />
        </div>
      </section>

      {/* =====================================================================
          2. GIỚI THIỆU (4 Corporate Pillar Cards with Gold Icons)
         ===================================================================== */}
      <section id="gioi-thieu" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-bold uppercase text-neutral-800">
              GIỚI THIỆU
            </h2>
            <div className="w-10 h-0.5 bg-[#eab338] mx-auto mt-1.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pil) => (
              <div
                key={pil.id}
                className="border border-neutral-200 p-6 text-center flex flex-col justify-between hover:shadow-md transition"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto text-[#eab338] flex items-center justify-center">
                    {pil.iconType === "founded" && (
                      <Building2 className="w-10 h-10" />
                    )}
                    {pil.iconType === "mission" && <Castle className="w-10 h-10" />}
                    {pil.iconType === "vision" && (
                      <Lightbulb className="w-10 h-10" />
                    )}
                    {pil.iconType === "values" && (
                      <Settings className="w-10 h-10" />
                    )}
                  </div>
                  <h3 className="text-xs font-extrabold uppercase text-neutral-800">
                    {pil.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    {pil.description}
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="#du-an"
                    className="text-[11px] font-semibold text-[#eab338] hover:underline"
                  >
                    Xem thêm
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. DỰ ÁN NỔI BẬT (Gold Header/Footer Band + 5 Edge-to-Edge Strips)
         ===================================================================== */}
      <section id="du-an" className="w-full overflow-hidden">
        {/* Top Gold Band */}
        <div className="bg-[#cbb06a] py-8 text-center">
          <h2 className="text-lg sm:text-xl font-bold uppercase text-neutral-900">
            DỰ ÁN NỔI BẬT
          </h2>
          <div className="w-10 h-0.5 bg-neutral-800 mx-auto mt-1.5" />
        </div>

        {/* 5 Edge-to-Edge Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 bg-white">
          {projectStrip.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProjectModal(proj.name)}
              className="group cursor-pointer border-r border-neutral-100 last:border-none"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white py-3 px-2 text-center border-b border-neutral-100">
                <h3 className="text-xs font-semibold text-neutral-700 group-hover:text-[#d4a024] transition">
                  {proj.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gold Band with CTA */}
        <div className="bg-[#cbb06a] py-7 text-center">
          <button
            type="button"
            onClick={() => setSelectedProjectModal("Danh mục 25+ Dự án Đầu tư")}
            className="bg-[#f2ca6b] hover:bg-[#eab338] text-neutral-900 text-xs font-bold px-6 py-2 rounded-xs shadow-xs transition cursor-pointer"
          >
            Xem tất cả dự án
          </button>
        </div>
      </section>

      {/* =====================================================================
          4. SỰ KIỆN (6 Event Cards 3x2)
         ===================================================================== */}
      <section id="su-kien" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-bold uppercase text-neutral-800">
              SỰ KIỆN
            </h2>
            <div className="w-10 h-0.5 bg-[#eab338] mx-auto mt-1.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {events.map((ev) => (
              <article
                key={ev.id}
                className="border border-neutral-200 bg-white overflow-hidden hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1.5">
                    <h3 className="text-xs font-bold text-neutral-800">
                      {ev.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500">{ev.timeText}</p>
                  </div>
                </div>
                <div className="px-4 pb-3.5">
                  <button
                    type="button"
                    onClick={() => setSelectedProjectModal(ev.title)}
                    className="text-[10px] font-bold uppercase text-neutral-600 hover:text-[#eab338] cursor-pointer"
                  >
                    XEM THÊM
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setSelectedProjectModal("Lịch Sự Kiện Mở Bán 2026")}
              className="bg-[#eab338] hover:bg-[#d49e26] text-white text-xs font-bold px-6 py-2 rounded-xs shadow-xs transition cursor-pointer"
            >
              Xem tất cả sự kiện
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. ĐỐI TÁC (Gold Skyline Overlay + 2x5 Partner Grid)
         ===================================================================== */}
      <section
        id="doi-tac"
        className="relative py-14 px-4 bg-[#d4a64a] overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt="Đối tác chiến lược"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply"
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl font-bold uppercase text-neutral-900">
              ĐỐI TÁC
            </h2>
            <div className="w-10 h-0.5 bg-neutral-900 mx-auto mt-1" />
          </div>

          <div className="bg-white grid grid-cols-2 sm:grid-cols-5 border border-neutral-200 shadow-md">
            {partners.map((pt) => (
              <div
                key={pt.id}
                className="h-24 p-3 border-r border-b border-neutral-200 flex flex-col items-center justify-center text-center hover:bg-amber-50/40 transition"
              >
                <span
                  className="text-sm sm:text-base font-black tracking-tight uppercase"
                  style={{ color: pt.color }}
                >
                  {pt.name}
                </span>
                <span className="text-[8px] text-neutral-500 uppercase tracking-wider mt-0.5">
                  {pt.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. TIN TỨC (Asymmetric Bento Grid: 1 Large Left + 3 Right)
         ===================================================================== */}
      <section id="tin-tuc" className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-bold uppercase text-neutral-800">
              TIN TỨC
            </h2>
            <div className="w-10 h-0.5 bg-[#eab338] mx-auto mt-1.5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Large Featured Article (6 cols) */}
            {newsList[0] && (
              <article className="lg:col-span-6 border border-neutral-200 bg-white flex flex-col justify-between">
                <div>
                  <div className="h-72 sm:h-80 overflow-hidden">
                    <img
                      src={newsList[0].image}
                      alt={newsList[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-sm font-extrabold uppercase text-neutral-800">
                      {newsList[0].title}
                    </h3>
                    <p className="text-[10px] text-neutral-400">
                      {newsList[0].date}
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {newsList[0].excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4">
                  <a
                    href="#lien-he"
                    className="text-[10px] font-bold uppercase text-neutral-600 hover:text-[#eab338]"
                  >
                    XEM THÊM
                  </a>
                </div>
              </article>
            )}

            {/* Right Stack: 1 Top Card + 2 Bottom Side-by-Side Cards (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              {newsList[1] && (
                <article className="border border-neutral-200 bg-white overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src={newsList[1].image}
                      alt={newsList[1].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-1.5">
                    <h3 className="text-xs font-extrabold uppercase text-neutral-800">
                      {newsList[1].title}
                    </h3>
                    <p className="text-[10px] text-neutral-400">
                      {newsList[1].date}
                    </p>
                    <p className="text-[11px] text-neutral-500 line-clamp-2">
                      {newsList[1].excerpt}
                    </p>
                    <a
                      href="#lien-he"
                      className="inline-block text-[10px] font-bold uppercase text-neutral-600 hover:text-[#eab338] pt-1"
                    >
                      XEM THÊM
                    </a>
                  </div>
                </article>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                {newsList.slice(2, 4).map((item) => (
                  <article
                    key={item.id}
                    className="border border-neutral-200 bg-white overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-28 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 space-y-1">
                        <h3 className="text-xs font-extrabold uppercase text-neutral-800 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-neutral-400">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="px-4 pb-3.5">
                      <a
                        href="#lien-he"
                        className="text-[10px] font-bold uppercase text-neutral-600 hover:text-[#eab338]"
                      >
                        XEM THÊM
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#lien-he"
              className="inline-block bg-[#eab338] hover:bg-[#d49e26] text-white text-xs font-bold px-6 py-2 rounded-xs shadow-xs transition"
            >
              Xem tất cả tin tức
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. GOLD AERIAL SKYLINE "LIÊN HỆ" FORM SECTION
         ===================================================================== */}
      <section
        id="lien-he"
        className="relative py-16 px-4 bg-[#d4a64a] overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt="Liên hệ chủ đầu tư"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-multiply"
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl font-bold uppercase text-neutral-900">
              LIÊN HỆ
            </h2>
            <div className="w-10 h-0.5 bg-neutral-900 mx-auto mt-1" />
          </div>

          {contactSent ? (
            <div className="bg-white p-8 text-center rounded-xs shadow-lg space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold uppercase text-neutral-800">
                Đã gửi thông tin thành công!
              </h3>
              <p className="text-xs text-neutral-500">
                Giám đốc Kinh doanh Dự án của {data.business.name} sẽ gửi bảng
                giá và chính sách chiết khấu mới nhất trong 15 phút.
              </p>
              <button
                type="button"
                onClick={() => setContactSent(false)}
                className="bg-[#eab338] text-white text-xs font-bold uppercase px-6 py-2"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactSent(true);
              }}
              className="space-y-3 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên"
                  className="w-full bg-white text-neutral-800 px-3.5 py-2.5 focus:outline-none shadow-2xs"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-white text-neutral-800 px-3.5 py-2.5 focus:outline-none shadow-2xs"
                />
              </div>
              <input
                type="tel"
                required
                placeholder="Số điện thoại"
                className="w-full bg-white text-neutral-800 px-3.5 py-2.5 focus:outline-none shadow-2xs"
              />
              <textarea
                rows={4}
                placeholder="Nội dung tin nhắn / Dự án quan tâm"
                className="w-full bg-white text-neutral-800 px-3.5 py-2.5 focus:outline-none shadow-2xs resize-none"
              />
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-[#eab338] hover:bg-[#c5921d] text-white font-bold uppercase text-xs px-10 py-2.5 shadow-sm transition cursor-pointer"
                >
                  GỬI TIN
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* =====================================================================
          8. DARK SLATE 4-COLUMN FOOTER (#424242)
         ===================================================================== */}
      <footer className="bg-[#424242] text-neutral-300 pt-12 pb-6 px-4 text-xs">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-neutral-600">
            {/* Col 1: Logo + Contact Info (5 cols) */}
            <div className="md:col-span-5 flex items-start gap-5">
              <div className="shrink-0">
                <InvestLandLogoCard brandName={data.business.name} dark />
              </div>

              <div className="space-y-3 text-[11px]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#eab338] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-neutral-400">Địa chỉ :</span>
                    <span className="text-white">{data.business.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#eab338] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-neutral-400">
                      Số điện thoại &amp; Email :
                    </span>
                    <span className="block text-white">
                      {primaryPhone} - {secondaryPhone}
                    </span>
                    <span className="block text-white">{primaryEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#eab338] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-neutral-400">Giờ làm việc :</span>
                    <span className="text-white">
                      {data.business.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2: DỰ ÁN (4 cols) */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                DỰ ÁN
              </h4>
              <div className="grid grid-cols-2 gap-4 text-[11px]">
                <ul className="space-y-1.5">
                  {footerLeft.map((p, i) => (
                    <li key={i}>
                      <a href="#du-an" className="hover:text-[#eab338]">
                        › {p}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1.5">
                  {footerRight.map((p, i) => (
                    <li key={i}>
                      <a href="#du-an" className="hover:text-[#eab338]">
                        › {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Col 3: LIÊN KẾT + SOCIAL (3 cols) */}
            <div className="md:col-span-3 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                  LIÊN KẾT
                </h4>
                <ul className="space-y-1.5 text-[11px]">
                  <li>
                    <a href="#trang-chu" className="text-[#eab338]">
                      › Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="#su-kien" className="hover:text-white">
                      › Sự kiện
                    </a>
                  </li>
                  <li>
                    <a href="#tin-tuc" className="hover:text-white">
                      › Tin tức
                    </a>
                  </li>
                  <li>
                    <a href="#lien-he" className="hover:text-white">
                      › Liên hệ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                  SOCIAL
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="#lien-he"
                    className="w-6 h-6 rounded-xs bg-[#3b5998] text-white flex items-center justify-center text-[11px] font-bold"
                  >
                    f
                  </a>
                  <a
                    href="#lien-he"
                    className="w-6 h-6 rounded-xs bg-[#cd201f] text-white flex items-center justify-center text-[11px] font-bold"
                  >
                    yt
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-neutral-400">
            © All rights reserved. Thiết kế website{" "}
            <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* PROJECT INQUIRY MODAL */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-xs shadow-2xl relative border-t-4 border-[#eab338]">
            <button
              type="button"
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-sm font-extrabold uppercase text-neutral-800 mb-1">
              Nhận Bảng Giá &amp; Mặt Bằng Chi Tiết
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Dự án / Sự kiện:{" "}
              <strong className="text-[#d4a024]">{selectedProjectModal}</strong>
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSelectedProjectModal(null);
                setContactSent(true);
              }}
              className="space-y-3 text-xs"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên nhà đầu tư *"
                className="w-full border border-neutral-200 px-3 py-2.5 focus:outline-none focus:border-[#eab338]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại nhận bảng giá Zalo *"
                className="w-full border border-neutral-200 px-3 py-2.5 focus:outline-none focus:border-[#eab338]"
              />
              <button
                type="submit"
                className="w-full bg-[#eab338] hover:bg-[#d49e26] text-white font-bold uppercase py-3 transition cursor-pointer"
              >
                TẢI BẢNG GIÁ &amp; CHÍNH SÁCH NGAY
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
