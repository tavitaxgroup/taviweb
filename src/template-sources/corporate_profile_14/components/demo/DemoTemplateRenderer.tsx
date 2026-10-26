"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Compass,
  Clock,
  DollarSign,
  Globe,
  CheckCircle2,
  Zap,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Plane,
  Building2,
  Sparkles,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile14DefaultData,
  type CorporateProfile14Data,
  type CorporateProfile14Tour,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: CorporateProfile14Data = adaptClonedTemplateData(
    corporateProfile14DefaultData,
    incomingData
  );

  const [selectedDealIdx, setSelectedDealIdx] = useState<number>(0);
  const [activeDestIdx, setActiveDestIdx] = useState<number>(3);
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);
  const [selectedTour, setSelectedTour] =
    useState<CorporateProfile14Tour | null>(null);
  const [bookingDone, setBookingDone] = useState<boolean>(false);
  const [newsletterSubscribed, setNewsletterSubscribed] =
    useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@peakjourneys.vn";
  const activeDeal = data.hotDeals[selectedDealIdx] || data.hotDeals[0];

  const renderCommitmentIcon = (iconName: string) => {
    switch (iconName) {
      case "globe":
        return <Globe className="w-6 h-6 text-[#3DAE49]" />;
      case "check":
        return <CheckCircle2 className="w-6 h-6 text-[#3DAE49]" />;
      case "zap":
        return <Zap className="w-6 h-6 text-[#3DAE49]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#3DAE49]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#3DAE49] selection:text-white">
      {/* HEADER (Topbar + Main Nav matching DN017-corporate_profile_14.png) */}
      <header className="bg-white sticky top-0 z-40 shadow-xs">
        <div className="border-b border-[#efefef] text-[11px] text-[#555555]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span className="hidden sm:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3DAE49]" />
                <span>{data.business.address}</span>
              </span>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 font-semibold text-[#222222] hover:text-[#3DAE49]"
              >
                <Phone className="w-3.5 h-3.5 text-[#3DAE49]" />
                <span>(+84) {primaryPhone}</span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <a href="#hoi-dap" className="hover:text-[#3DAE49]">
                FAQs
              </a>
              <span>|</span>
              <a href="#lien-he" className="hover:text-[#3DAE49]">
                Hỗ trợ
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#3DAE49] text-white flex items-center justify-center shadow-xs">
                <Compass className="w-6 h-6" />
              </div>
            )}
            <div>
              <span className="block text-lg font-extrabold text-[#222222] leading-none">
                {data.business.name}
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-[#3DAE49] font-bold mt-0.5">
                TRAVEL & TOURISM AGENCY
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#333333]">
            <a href="#" className="text-[#3DAE49]">
              Trang Chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#3DAE49] transition-colors"
            >
              Giới Thiệu
            </a>
            <a
              href="#chuyen-di-pho-bien"
              className="hover:text-[#3DAE49] transition-colors"
            >
              Tour
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#3DAE49] transition-colors"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#3DAE49] transition-colors"
            >
              Liên Hệ
            </a>
          </nav>

          <a
            href="#chuyen-di-pho-bien"
            className="px-5 py-2 bg-[#3DAE49] hover:bg-[#31913b] text-white text-xs font-bold uppercase rounded-md shadow-xs transition-colors"
          >
            {data.hero.ctaText || "ĐẶT NGAY"}
          </a>
        </div>
      </header>

      {/* HERO BANNER WITH TILTED POLAROIDS + OVERLAPPING SEARCH BAR */}
      <section className="relative bg-[#0E6BA8] pt-12 pb-24 overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b4f82]/50 via-[#0d5d94]/40 to-[#0b4f82]/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Polaroid Stack */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-center relative">
            <div className="w-36 h-44 bg-white p-2 shadow-xl transform -rotate-12 rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
                alt="Biển nhiệt đới"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-44 bg-white p-2 shadow-2xl transform rotate-6 -ml-10 mt-10 rounded-xs relative">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=500&q=80"
                alt="Nghỉ dưỡng"
                className="w-full h-full object-cover"
              />
              <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-[#1F3A2E] border-2 border-white text-white flex flex-col items-center justify-center text-[10px] font-extrabold shadow-lg">
                <span>20%</span>
                <span className="text-[#FFC107]">ƯU ĐÃI</span>
              </div>
            </div>
          </div>

          {/* Center Script Headline */}
          <div className="lg:col-span-6 text-center text-white">
            <span className="block text-3xl sm:text-5xl font-serif italic font-extrabold text-[#FFC107] drop-shadow-md">
              Du Lịch Kỳ Thú
            </span>
            <h1 className="mt-1 text-4xl sm:text-6xl font-serif italic font-black text-[#2E7D32] bg-white/90 px-6 py-2 rounded-2xl inline-block shadow-lg">
              {data.business.name}
            </h1>
            <p className="mt-4 text-sm sm:text-lg font-medium text-white drop-shadow">
              {data.hero.subtitle}
            </p>
          </div>

          {/* Right Polaroid Stack */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-center">
            <div className="w-36 h-44 bg-white p-2 shadow-xl transform -rotate-6 rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80"
                alt="Kayak"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-44 bg-white p-2 shadow-2xl transform rotate-12 -ml-8 mt-12 rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=500&q=80"
                alt="Đảo xanh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAPPING TOUR SEARCH BAR */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-10 relative z-30">
        <div className="bg-white rounded-xl shadow-lg border border-[#e5f0e6] p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
          <div className="flex items-center gap-2 border border-[#e2e8f0] rounded-lg px-3 py-2.5">
            <MapPin className="w-4 h-4 text-[#3DAE49] shrink-0" />
            <select className="w-full text-xs text-[#444444] bg-transparent focus:outline-none">
              <option>Điểm đến</option>
              <option>Hà Giang - Đông Bắc</option>
              <option>Hà Nội - Hạ Long</option>
              <option>Đà Nẵng - Hội An</option>
              <option>Ninh Thuận - Vĩnh Hy</option>
              <option>Đà Lạt Săn Mây</option>
            </select>
          </div>

          <div className="flex items-center gap-2 border border-[#e2e8f0] rounded-lg px-3 py-2.5">
            <Clock className="w-4 h-4 text-[#3DAE49] shrink-0" />
            <select className="w-full text-xs text-[#444444] bg-transparent focus:outline-none">
              <option>0 Ngày - 5 Ngày</option>
              <option>3 Ngày - 2 Đêm</option>
              <option>4 Ngày - 3 Đêm</option>
              <option>5 Ngày - 4 Đêm</option>
            </select>
          </div>

          <div className="flex items-center gap-2 border border-[#e2e8f0] rounded-lg px-3 py-2.5">
            <DollarSign className="w-4 h-4 text-[#3DAE49] shrink-0" />
            <select className="w-full text-xs text-[#444444] bg-transparent focus:outline-none">
              <option>1,599,000đ - 2,799,000đ</option>
              <option>2,800,000đ - 4,999,000đ</option>
              <option>Tour Cao Cấp 5 Sao</option>
            </select>
          </div>

          <a
            href="#chuyen-di-pho-bien"
            className="w-full py-2.5 bg-[#3DAE49] hover:bg-[#2f9139] text-white text-xs font-bold uppercase text-center rounded-lg transition-colors"
          >
            TÌM KIẾM
          </a>
        </div>
      </div>

      {/* SECTION 2: KHÁM PHÁ THẾ GIỚI — TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO */}
      <section id="gioi-thieu" className="py-16 lg:py-20 bg-[#F2FAF3] -mt-6 pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Text + 2 Beach Thumbnails */}
            <div className="lg:col-span-6">
              <span className="font-serif italic text-sm text-[#3DAE49]">
                Khám phá thế giới
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#222222] leading-snug">
                {data.business.aboutTitle}
              </h2>
              <p className="mt-3 text-xs text-[#666666] leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                  alt="Biển xanh"
                  className="w-full h-44 object-cover rounded-xl shadow-xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80"
                  alt="Bờ biển"
                  className="w-full h-44 object-cover rounded-xl shadow-xs"
                />
              </div>
            </div>

            {/* Right Kayak Image + 2 Feature Highlights */}
            <div className="lg:col-span-6">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85"
                alt="Trải nghiệm chèo thuyền"
                className="w-full h-56 object-cover rounded-xl shadow-md mb-6"
              />

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FFC107] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#222222]">
                      Đa dạng điểm đến
                    </h3>
                    <p className="text-xs text-[#666666] mt-0.5">
                      Khám phá hàng trăm điểm đến hấp dẫn trên toàn thế giới
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FFC107] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#222222]">
                      Dịch vụ đáng tin
                    </h3>
                    <p className="text-xs text-[#666666] mt-0.5">
                      Trải nghiệm dịch vụ chuyên nghiệp và hỗ trợ khách hàng 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#chuyen-di-pho-bien"
                  className="inline-block px-6 py-2.5 bg-[#3DAE49] hover:bg-[#2f9139] text-white text-xs font-bold uppercase rounded-md transition-colors"
                >
                  KHÁM PHÁ NGAY
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DU LỊCH TUYỆT VỜI — GIÁ & ƯU ĐÃI HẤP DẪN */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Countdown */}
            <div className="lg:col-span-5">
              <span className="font-serif italic text-sm text-[#3DAE49]">
                Du lịch tuyệt vời
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#222222]">
                GIÁ & ƯU ĐÃI HẤP DẪN
              </h2>

              <div className="mt-5 flex items-center gap-2 sm:gap-3">
                {[
                  { val: "32", label: "Ngày" },
                  { val: "20", label: "Giờ" },
                  { val: "34", label: "Phút" },
                  { val: "40", label: "Giây" },
                ].map((t, i) => (
                  <React.Fragment key={t.label}>
                    <div className="w-14 h-14 rounded-full border border-[#d6e9d8] flex flex-col items-center justify-center bg-[#f9fdf9]">
                      <span className="text-sm font-extrabold text-[#222222] leading-none">
                        {t.val}
                      </span>
                      <span className="text-[9px] text-[#777777] mt-0.5">
                        {t.label}
                      </span>
                    </div>
                    {i < 3 && (
                      <span className="font-bold text-[#999999]">:</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#chuyen-di-pho-bien"
                  className="inline-block px-6 py-2 bg-[#3DAE49] hover:bg-[#2f9139] text-white text-xs font-bold uppercase rounded-md transition-colors"
                >
                  KHÁM PHÁ NGAY
                </a>
              </div>
            </div>

            {/* Center Destination Selector */}
            <div className="lg:col-span-4 divide-y divide-[#eeeeee] border-y border-[#eeeeee]">
              {data.hotDeals.map((deal, idx) => {
                const isSelected = selectedDealIdx === idx;
                return (
                  <button
                    key={deal.id}
                    type="button"
                    onClick={() => setSelectedDealIdx(idx)}
                    className="w-full py-3 px-2 flex items-center justify-between text-left hover:bg-[#f7fcf8] transition-colors"
                  >
                    <div>
                      <span className="block text-xs font-bold text-[#222222]">
                        {deal.destination}
                      </span>
                      {isSelected && (
                        <span className="block text-[11px] font-bold text-[#3DAE49] mt-0.5">
                          {deal.price}
                        </span>
                      )}
                    </div>
                    {isSelected ? (
                      <ChevronDown className="w-4 h-4 text-[#3DAE49]" />
                    ) : (
                      <ChevronUp className="w-4 h-4 text-[#999999]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Tilted Terraced Photo */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="w-52 h-60 rounded-2xl overflow-hidden shadow-xl transform rotate-3 border-4 border-white">
                <img
                  src={activeDeal.image}
                  alt={activeDeal.destination}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CÁC CHUYẾN ĐI PHỔ BIẾN */}
      <section id="chuyen-di-pho-bien" className="py-16 bg-[#F2FAF3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="font-serif italic text-sm text-[#3DAE49]">
              Trải nghiệm tuyệt vời
            </span>
            <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#222222]">
              CÁC CHUYẾN ĐI PHỔ BIẾN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.popularTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-xl overflow-hidden shadow-xs border border-[#e3f1e5] flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {tour.badge && (
                      <span className="absolute top-3 left-3 bg-[#FFC107] text-[#222222] text-[10px] font-bold px-2.5 py-0.5 rounded-xs">
                        {tour.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-xs font-extrabold text-[#222222] group-hover:text-[#3DAE49] transition-colors leading-snug line-clamp-2">
                      {tour.title}
                    </h3>

                    <div className="mt-3 py-2.5 border-y border-[#f0f0f0] flex items-center justify-between text-[11px]">
                      <div className="space-y-1 text-[#666666]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#3DAE49]" />
                          {tour.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#3DAE49]" />
                          {tour.duration}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block text-xs font-extrabold text-[#222222]">
                          {tour.price}
                        </span>
                        {tour.oldPrice && (
                          <span className="block text-[10px] text-[#999999] line-through">
                            {tour.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="mt-3 text-[11px] text-[#666666] leading-relaxed line-clamp-2">
                      {tour.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <button
                    type="button"
                    onClick={() => setSelectedTour(tour)}
                    className="px-4 py-2 bg-[#3DAE49] hover:bg-[#2f9139] text-white text-[10px] font-bold uppercase rounded-xs transition-colors"
                  >
                    XEM CHI TIẾT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TRẢI NGHIỆM DU LỊCH HOÀN HẢO + ĐIỂM ĐẾN NỔI BẬT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-serif italic text-sm text-[#3DAE49]">
              Cam kết của chúng tôi
            </span>
            <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#222222]">
              TRẢI NGHIỆM DU LỊCH HOÀN HẢO
            </h2>
            <p className="mt-1.5 text-xs text-[#666666]">
              Chúng tôi cam kết cung cấp cho bạn trải nghiệm du lịch tuyệt vời và
              đáng nhớ, từ việc đặt vé đến khám phá điểm đến.
            </p>
          </div>

          {/* 4 Light-Green Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {data.commitments.map((cm) => (
              <div
                key={cm.id}
                className="bg-[#EEF8F0] rounded-xl p-5 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-2xs">
                  {renderCommitmentIcon(cm.icon)}
                </div>
                <h3 className="text-xs font-extrabold text-[#222222]">
                  {cm.title}
                </h3>
                <p className="mt-1.5 text-[11px] text-[#666666] leading-relaxed">
                  {cm.description}
                </p>
              </div>
            ))}
          </div>

          {/* ĐIỂM ĐẾN NỔI BẬT (Interactive Expanding Accordion Cards) */}
          <div className="text-center mb-8">
            <span className="font-serif italic text-sm text-[#3DAE49]">
              Địa điểm yêu thích
            </span>
            <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#222222]">
              ĐIỂM ĐẾN NỔI BẬT
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-3 h-[340px]">
            {data.featuredDestinations.map((dest, idx) => {
              const isExpanded = activeDestIdx === idx;
              return (
                <div
                  key={dest.id}
                  onClick={() => setActiveDestIdx(idx)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                    isExpanded ? "flex-[3]" : "flex-1"
                  }`}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white">
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold">
                        {dest.name}
                      </h3>
                      {isExpanded && (
                        <p className="text-xs text-white/85 mt-0.5">
                          {dest.subtitle}
                        </p>
                      )}
                    </div>
                    {isExpanded && (
                      <a
                        href="#chuyen-di-pho-bien"
                        className="px-4 py-1.5 rounded-full border border-white/80 bg-black/30 hover:bg-[#3DAE49] text-[11px] font-semibold transition-colors"
                      >
                        Khám Phá
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#chuyen-di-pho-bien"
              className="inline-block px-6 py-2 bg-[#3DAE49] hover:bg-[#2f9139] text-white text-xs font-bold uppercase rounded-md transition-colors"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: KHU NGHỈ MÁT SANG TRỌNG */}
      <section className="py-16 bg-[#F2FAF3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-md lg:-mr-12 relative z-10">
              <span className="font-serif italic text-sm text-[#3DAE49]">
                {data.luxuryResort.eyebrow}
              </span>
              <h2 className="mt-1 text-xl font-extrabold uppercase text-[#222222]">
                {data.luxuryResort.title}
              </h2>
              <p className="mt-2.5 text-xs text-[#666666] leading-relaxed">
                {data.luxuryResort.description}
              </p>

              <div className="mt-5 space-y-4">
                {data.luxuryResort.features.map((feat, idx) => (
                  <div key={feat.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E6F4FF] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                      {idx === 0 ? (
                        <Plane className="w-4 h-4" />
                      ) : idx === 1 ? (
                        <Building2 className="w-4 h-4" />
                      ) : (
                        <Sparkles className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#222222]">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-[#666666] mt-0.5">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#lien-he"
                  className="inline-block px-5 py-2 bg-[#3DAE49] hover:bg-[#2f9139] text-white text-[11px] font-bold uppercase rounded-md transition-colors"
                >
                  TÌM HIỂU THÊM
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <img
                src={data.luxuryResort.image}
                alt={data.luxuryResort.title}
                className="w-full h-[380px] sm:h-[420px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: HÌNH ẢNH CHUYẾN ĐI (Bento Grid) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="font-serif italic text-sm text-[#3DAE49]">
              Khung cảnh tuyệt đẹp
            </span>
            <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#222222]">
              HÌNH ẢNH CHUYẾN ĐI
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden h-72 sm:h-80">
              <img
                src={data.tripGallery[0]}
                alt="Hình ảnh chuyến đi 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 sm:h-[154px]">
              <img
                src={data.tripGallery[1]}
                alt="Hình ảnh chuyến đi 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 sm:h-[154px]">
              <img
                src={data.tripGallery[2]}
                alt="Hình ảnh chuyến đi 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 sm:h-[154px]">
              <img
                src={data.tripGallery[3]}
                alt="Hình ảnh chuyến đi 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 sm:h-[154px]">
              <img
                src={data.tripGallery[4]}
                alt="Hình ảnh chuyến đi 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: 4 CIRCULAR STATS + CÁC CÂU HỎI THƯỜNG GẶP */}
      <section id="hoi-dap" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* 4 Circular Orbital Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center mb-16">
            {(data.stats || []).map((st) => (
              <div
                key={st.id}
                className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-[#bce3c2] bg-[#F5FBF6] flex flex-col items-center justify-center text-center p-3 shadow-2xs"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#3DAE49] absolute top-2 right-5" />
                <span className="text-xl sm:text-2xl font-extrabold text-[#222222]">
                  {st.number}
                </span>
                <span className="text-[11px] text-[#555555] mt-1">
                  {st.title}
                </span>
              </div>
            ))}
          </div>

          {/* Traveler Cutout + FAQ Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 h-80 rounded-3xl bg-[#3DAE49] p-3 shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80"
                  alt="Du khách"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="font-serif italic text-sm text-[#3DAE49]">
                Hỗ trợ 24/7
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#222222] mb-5">
                CÁC CÂU HỎI THƯỜNG GẶP
              </h2>

              <div className="space-y-3">
                {data.faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={faq.id}
                      className="border border-[#e2e8f0] rounded-lg overflow-hidden bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                        className="w-full px-4 py-3 text-left flex items-center justify-between text-xs font-bold text-[#222222] hover:text-[#3DAE49]"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#666666] transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-3.5 text-xs text-[#666666] leading-relaxed border-t border-[#f3f4f6] pt-2.5">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CẢM NHẬN KHÁCH HÀNG + TRAVEL LOGOS */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="font-serif italic text-sm text-[#3DAE49]">
            Đánh giá tích cực
          </span>
          <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#222222] mb-10">
            CẢM NHẬN KHÁCH HÀNG
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((rv) => (
              <div
                key={rv.id}
                className="bg-white border border-[#edf2ed] rounded-xl p-6 shadow-xs flex flex-col items-center text-center"
              >
                <img
                  src={rv.avatar}
                  alt={rv.author}
                  className="w-12 h-12 rounded-full object-cover mb-3"
                />
                <h3 className="text-xs font-bold text-[#222222]">
                  {rv.author}
                </h3>
                <p className="mt-2 text-[11px] text-[#666666] leading-relaxed">
                  {rv.content}
                </p>
              </div>
            ))}
          </div>

          {/* Adventure Partner Badges */}
          <div className="mt-12 pt-8 border-t border-[#f0f0f0] grid grid-cols-2 sm:grid-cols-5 gap-6 items-center">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="text-xs font-extrabold tracking-widest text-[#1D63B8] uppercase"
              >
                ⛰️ {cl.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: TIN TỨC VÀ KINH NGHIỆM */}
      <section id="tin-tuc" className="py-16 bg-[#F2FAF3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="font-serif italic text-sm text-[#3DAE49]">
                Tin tức mới nhất
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold uppercase text-[#222222]">
                TIN TỨC VÀ KINH NGHIỆM
              </h2>
            </div>
            <a
              href="#lien-he"
              className="px-4 py-1.5 border border-[#cccccc] rounded-xs text-[10px] font-bold uppercase text-[#555555] hover:border-[#3DAE49] hover:text-[#3DAE49]"
            >
              XEM TẤT CẢ
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-[#e4f0e5] p-3.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 rounded-lg overflow-hidden mb-3.5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] text-[#888888]">
                    {post.date}
                  </span>
                  <h3 className="mt-1 text-xs font-extrabold text-[#222222] group-hover:text-[#3DAE49] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
                <div className="mt-4">
                  <a
                    href="#lien-he"
                    className="inline-block px-3.5 py-1.5 border border-[#dddddd] rounded-xs text-[10px] font-bold uppercase text-[#444444] hover:bg-[#3DAE49] hover:text-white hover:border-[#3DAE49] transition-colors"
                  >
                    XEM THÊM
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (Dark #212923 with Top Newsletter Bar + Instagram Grid) */}
      <footer id="lien-he" className="bg-[#212923] text-white pt-10 pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Newsletter Top Row */}
          <div className="pb-8 border-b border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-lg sm:text-xl font-bold">
              Đăng ký ngay nhận tin tức & ưu đãi tour
            </h3>

            {newsletterSubscribed ? (
              <div className="text-xs text-[#8CE99A] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cảm ơn bạn đã đăng ký nhận bản tin du lịch!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSubscribed(true);
                }}
                className="flex items-center bg-white/10 rounded-full p-1 w-full sm:w-80"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập địa chỉ email..."
                  className="bg-transparent text-xs text-white placeholder-white/60 px-4 py-2 flex-1 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#3DAE49] hover:bg-[#2f9139] text-white text-[11px] font-bold uppercase px-5 py-2 rounded-full transition-colors"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>

          {/* 4 Footer Columns */}
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-white/75">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#3DAE49] text-white flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-base font-extrabold text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-white/65">
                Với sự tận tâm và chuyên nghiệp, chúng tôi cam kết mang đến cho
                bạn những kỷ niệm vô giá và độc đáo trên mỗi hành trình.
              </p>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-3">Danh mục</h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#" className="hover:text-[#3DAE49]">
                    › Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#3DAE49]">
                    › Giới thiệu
                  </a>
                </li>
                <li>
                  <a
                    href="#chuyen-di-pho-bien"
                    className="hover:text-[#3DAE49]"
                  >
                    › Tour du lịch
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#3DAE49]">
                    › Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#3DAE49]">
                    › Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-bold text-white mb-3">Liên hệ</h4>
              <ul className="space-y-2.5 text-[11px]">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#3DAE49] shrink-0" />
                  <span>(+84) {primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#3DAE49] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#3DAE49] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-bold text-white mb-3">Instagram</h4>
              <div className="grid grid-cols-3 gap-1.5">
                {data.tripGallery.slice(0, 6).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Tour ${i + 1}`}
                    className="w-full aspect-square object-cover rounded-xs"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-white/10 text-center text-[11px] text-white/50">
            © Thiết kế và lập trình bởi <strong>{data.business.name}</strong> •
            TaviWeb
          </div>
        </div>
      </footer>

      {/* TOUR QUICK BOOKING MODAL */}
      {selectedTour && (
        <div
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedTour(null);
            setBookingDone(false);
          }}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedTour(null);
                setBookingDone(false);
              }}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedTour.image}
              alt={selectedTour.title}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />
            <h3 className="text-sm font-extrabold text-[#222222]">
              {selectedTour.title}
            </h3>
            <p className="mt-1 text-xs font-bold text-[#3DAE49]">
              Giá ưu đãi: {selectedTour.price} / khách ({selectedTour.duration})
            </p>
            {bookingDone ? (
              <div className="mt-4 p-4 bg-[#EEF8F0] rounded-lg text-xs text-[#2E7D32] font-semibold text-center">
                Đã giữ chỗ thành công! Điều hành viên {data.business.name} sẽ
                gọi xác nhận ngay.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingDone(true);
                }}
                className="mt-4 space-y-2.5"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên quý khách *"
                  className="w-full px-3.5 py-2 border border-[#dddddd] rounded-md text-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ *"
                  className="w-full px-3.5 py-2 border border-[#dddddd] rounded-md text-xs"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#3DAE49] hover:bg-[#2f9139] text-white text-xs font-bold uppercase rounded-md transition-colors"
                >
                  XÁC NHẬN ĐẶT TOUR
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
