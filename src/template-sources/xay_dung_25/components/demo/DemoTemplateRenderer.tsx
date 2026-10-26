"use client";

import React, { useState } from "react";
import {
  Utensils,
  KeyRound,
  MapPin,
  Calendar,
  ConciergeBell,
  BedDouble,
  Phone,
  Mail,
  Award,
  MessageCircle,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung25DefaultData,
  type XayDung25TemplateData,
  type XayDung25TopCard
} from "@/template-sources/xay_dung_25/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung25TemplateData = adaptClonedTemplateData(
    xayDung25DefaultData,
    incomingData
  );

  const [activeAmenityIndex, setActiveAmenityIndex] = useState<number>(0);
  const [selectedCard, setSelectedCard] = useState<XayDung25TopCard | null>(
    null
  );
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "4 người",
    roomType: "BIỆT THỰ CỔ ĐIỂN"
  });

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "demonhunterg@gmail.com";
  const secondaryEmail = data.business.email?.[1] || "mon@mona.media";
  const brandName = data.business.name || "Mona Mount Resort";

  const amenities = data.amenitiesGallery || [];
  const currentAmenity = amenities[activeAmenityIndex] || amenities[0];

  const renderDarkFeatureIcon = (icon: string) => {
    const cls = "w-9 h-9 text-white stroke-[1.4]";
    switch (icon) {
      case "utensils":
        return <Utensils className={cls} />;
      case "key":
        return <KeyRound className={cls} />;
      case "map":
        return <MapPin className={cls} />;
      case "calendar":
        return <Calendar className={cls} />;
      case "bell":
        return <ConciergeBell className={cls} />;
      default:
        return <BedDouble className={cls} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#709638] selection:text-white">
      {/* 1. ALPINE MOUNTAIN HERO + CENTERED CHALET CREST HEADER */}
      <section
        id="trang-chu"
        className="relative min-h-[540px] sm:min-h-[640px] w-full overflow-hidden bg-[#2b3a24]"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-black/15 to-black/45" />

        {/* Top Centered Emblem Logo & Navigation */}
        <header className="relative z-30 pt-4 pb-3 px-4">
          <div className="max-w-[1060px] mx-auto flex flex-col items-center">
            {/* Chalet Roofline Crest Logo */}
            <a
              href="#trang-chu"
              className="flex flex-col items-center text-center group mb-3"
            >
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={brandName}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <div className="bg-white/90 backdrop-blur-xs border-2 border-[#b91c1c] px-5 py-1.5 rounded-t-xl shadow-sm">
                  <span className="block text-[8px] font-bold uppercase tracking-widest text-[#b91c1c]">
                    EST. 1998
                  </span>
                  <span className="block font-serif text-sm sm:text-base font-extrabold text-[#1f2937]">
                    {brandName}
                  </span>
                  <span className="inline-block bg-[#688f32] text-white text-[8px] font-bold uppercase tracking-[0.25em] px-3 py-0.5 rounded-xs mt-0.5">
                    RESORT
                  </span>
                </div>
              )}
            </a>

            {/* Desktop Centered Nav */}
            <nav className="hidden md:flex items-center gap-7 text-[11px] font-bold uppercase tracking-wider text-[#222222]">
              <a
                href="#trang-chu"
                className="text-[#4d6e1e] underline underline-offset-4"
              >
                TRANG CHỦ
              </a>
              <a
                href="#tien-nghi"
                className="hover:text-[#688f32] transition-colors"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#gia-dich-vu"
                className="hover:text-[#688f32] transition-colors"
              >
                PHÒNG
              </a>
              <a
                href="#dich-vu"
                className="hover:text-[#688f32] transition-colors"
              >
                DỊCH VỤ
              </a>
              <a
                href="#hinh-anh"
                className="hover:text-[#688f32] transition-colors"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he-dat-phong"
                className="hover:text-[#688f32] transition-colors"
              >
                LIÊN HỆ
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Mở menu"
              className="md:hidden bg-white/90 px-3 py-1 rounded text-xs font-bold inline-flex items-center gap-1"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
              <span>MENU</span>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden max-w-xs mx-auto mt-2 bg-white rounded shadow-lg p-4 text-center space-y-2 text-xs font-bold uppercase">
              <a
                href="#trang-chu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#688f32]"
              >
                TRANG CHỦ
              </a>
              <a
                href="#dich-vu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                DỊCH VỤ
              </a>
              <a
                href="#tien-nghi"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                TIỆN NGHI
              </a>
              <a
                href="#gia-dich-vu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                GIÁ DỊCH VỤ
              </a>
              <a
                href="#lien-he-dat-phong"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                LIÊN HỆ ĐẶT PHÒNG
              </a>
            </div>
          )}
        </header>

        {/* Centered Stacked White + Olive-Green Hero Banner Boxes */}
        <div className="relative z-20 max-w-[900px] mx-auto px-4 pt-16 pb-32 sm:pt-24 sm:pb-40 flex flex-col items-center text-center">
          <div className="bg-white/95 px-10 sm:px-16 py-2.5 shadow-md">
            <span className="text-base sm:text-xl font-bold text-[#222222]">
              {data.heroWelcomeLabel || "Chào mừng đến với"}
            </span>
          </div>
          <div className="bg-[#73983c]/95 px-10 sm:px-20 py-3.5 shadow-xl">
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-wide">
              {data.hero.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING WHITE CONTAINER ("Hotline đặt phòng" + 3 Highlight Cards) */}
      <section className="relative z-20 -mt-20 sm:-mt-24 pb-12">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-xl p-6 sm:p-10">
            <p className="text-center text-base sm:text-xl text-[#222222] mb-8">
              Hotline đặt phòng:{" "}
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="font-extrabold hover:text-[#688f32] transition-colors"
              >
                {primaryPhone}
              </a>
            </p>

            {/* 3 Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(data.topHighlightCards || []).map((card) => (
                <div
                  key={card.id}
                  className="bg-[#dbe4dc] flex flex-col overflow-hidden shadow-xs"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-800">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 text-center flex-1 flex flex-col">
                    <h3 className="text-base font-bold text-[#222222] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Dark Split Buttons: ĐẶT NGAY | CHI TIẾT */}
                  <div className="grid grid-cols-2 bg-[#262b33] text-white text-[11px] font-bold uppercase divide-x divide-white/20">
                    <a
                      href="#lien-he-dat-phong"
                      className="py-3 text-center hover:bg-[#688f32] transition-colors"
                    >
                      ĐẶT NGAY
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedCard(card)}
                      className="py-3 text-center hover:bg-[#373e49] transition-colors cursor-pointer"
                    >
                      CHI TIẾT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SNOWY MOUNTAIN PANORAMA BANNER ("Chinh phục đỉnh Phan Xi Păng") */}
      <section className="relative py-16 sm:py-20 bg-[#e8eff5] overflow-hidden text-center">
        <img
          src={data.mountainBanner.bgImage}
          alt={data.mountainBanner.heading}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/75 to-[#dce6f0]/85" />

        <div className="relative z-10 max-w-[820px] mx-auto px-4">
          <p className="font-serif italic text-xl sm:text-2xl text-[#666666] mb-1">
            {data.mountainBanner.scriptTitle}
          </p>
          <h2 className="text-lg sm:text-2xl font-bold text-[#222222] leading-snug mb-5">
            {data.mountainBanner.heading}
          </h2>
          <a
            href="#tien-nghi"
            className="inline-block border border-[#444444] hover:bg-[#262b33] hover:text-white text-[#222222] text-xs font-semibold px-6 py-2 transition-colors"
          >
            {data.mountainBanner.ctaText}
          </a>
        </div>
      </section>

      {/* 4. DARK SLATE 6-FEATURE GRID */}
      <section id="dich-vu" className="bg-[#282d35] text-white py-14 sm:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {(data.darkFeatures || []).map((feat) => (
              <div key={feat.id} className="space-y-2">
                <div>{renderDarkFeatureIcon(feat.icon)}</div>
                <h3 className="text-sm font-bold text-white">{feat.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AMENITIES INTERACTIVE GALLERY ("TIỆN NGHI") */}
      <section id="tien-nghi" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Description + 4 Thumbnails */}
            <div className="lg:col-span-6">
              <h2 className="text-lg sm:text-xl font-bold uppercase text-[#222222] mb-3">
                TIỆN NGHI
              </h2>
              <p className="text-xs text-[#666666] leading-relaxed mb-4">
                {data.amenitiesDescription}
              </p>
              <div className="w-28 h-[1px] bg-[#cccccc] mb-6" />

              <div className="grid grid-cols-4 gap-2.5">
                {amenities.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveAmenityIndex(idx)}
                    className={`aspect-[4/3] overflow-hidden border-2 transition-all cursor-pointer ${
                      activeAmenityIndex === idx
                        ? "border-[#688f32] scale-105 shadow"
                        : "border-transparent opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Framed Active Image */}
            <div className="lg:col-span-6">
              {currentAmenity && (
                <div className="border-4 border-white shadow-lg bg-[#222222] relative overflow-hidden aspect-[16/10]">
                  <img
                    src={currentAmenity.image}
                    alt={currentAmenity.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-white/90 text-[#222222] text-[10px] font-semibold px-2.5 py-0.5 shadow-xs">
                    {currentAmenity.title}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE PRICING ("GIÁ DỊCH VỤ") */}
      <section
        id="gia-dich-vu"
        className="py-14 sm:py-16 bg-white border-t border-[#f0f0f0]"
      >
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-bold uppercase text-[#222222] mb-2">
              GIÁ DỊCH VỤ
            </h2>
            <div className="w-16 h-[1px] bg-[#cccccc] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.priceCards || []).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#dbe4dc] flex flex-col overflow-hidden shadow-xs"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 text-center flex-1 flex flex-col">
                  <h3 className="text-sm font-bold uppercase text-[#222222] mb-4">
                    {pkg.name}
                  </h3>
                  <ul className="divide-y divide-[#c5d1c7] text-xs text-[#555555] mb-4">
                    <li className="py-2">{pkg.capacity}</li>
                    <li className="py-2">{pkg.bedrooms}</li>
                    <li className="py-2">{pkg.bathroom}</li>
                    <li className="py-2">{pkg.climate}</li>
                  </ul>
                  <p className="text-xs text-[#222222] mt-auto">
                    Giá: <strong className="font-extrabold">{pkg.priceText}</strong>
                  </p>
                </div>

                <a
                  href="#lien-he-dat-phong"
                  onClick={() =>
                    setBookingForm((prev) => ({
                      ...prev,
                      roomType: pkg.name
                    }))
                  }
                  className="bg-[#262b33] hover:bg-[#688f32] text-white text-center text-[11px] font-bold uppercase py-3 transition-colors"
                >
                  ĐẶT NGAY
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOKING CONTACT FORM ON MOUNTAIN CHALET BACKGROUND ("LIÊN HỆ ĐẶT PHÒNG") */}
      <section
        id="lien-he-dat-phong"
        className="relative py-16 sm:py-20 bg-[#1e281d] text-white overflow-hidden"
      >
        <img
          src={data.bookingBgImage}
          alt="Liên hệ đặt phòng"
          className="absolute inset-0 w-full h-full object-cover object-left opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/75" />

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5" />

          <div className="lg:col-span-7">
            <h2 className="text-lg sm:text-xl font-bold uppercase mb-5">
              LIÊN HỆ ĐẶT PHÒNG
            </h2>

            {bookingSubmitted ? (
              <div className="bg-white/95 text-[#222222] p-6 rounded shadow-xl space-y-2">
                <div className="flex items-center gap-2 text-[#688f32] font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Gửi yêu cầu đặt phòng thành công!</span>
                </div>
                <p className="text-xs text-[#555555]">
                  Cảm ơn <strong>{bookingForm.fullName}</strong>. Bộ phận lễ tân{" "}
                  {brandName} sẽ gọi điện xác nhận qua số{" "}
                  <strong>{bookingForm.phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingSubmitted(false)}
                  className="bg-[#688f32] text-white text-xs font-bold uppercase px-5 py-2 mt-2"
                >
                  Đặt thêm phòng khác
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
              >
                <div>
                  <label className="block font-bold mb-1">Họ và tên</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.fullName}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        fullName: e.target.value
                      })
                    }
                    placeholder="Nhập họ và tên"
                    className="w-full bg-white text-[#222222] px-3 py-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Số điện thoại</label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, phone: e.target.value })
                    }
                    placeholder="Nhập số điện thoại"
                    className="w-full bg-white text-[#222222] px-3 py-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Ngày đến</label>
                  <input
                    type="date"
                    value={bookingForm.checkIn}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        checkIn: e.target.value
                      })
                    }
                    className="w-full bg-white text-[#222222] px-3 py-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Ngày đi</label>
                  <input
                    type="date"
                    value={bookingForm.checkOut}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        checkOut: e.target.value
                      })
                    }
                    className="w-full bg-white text-[#222222] px-3 py-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Số người</label>
                  <select
                    value={bookingForm.guests}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, guests: e.target.value })
                    }
                    className="w-full bg-white text-[#222222] px-3 py-2.5 focus:outline-none"
                  >
                    <option>2 người</option>
                    <option>4 người</option>
                    <option>6 người (Gia đình)</option>
                    <option>Đoàn trên 10 người</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold mb-1">Chọn phòng</label>
                  <select
                    value={bookingForm.roomType}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        roomType: e.target.value
                      })
                    }
                    className="w-full bg-white text-[#222222] px-3 py-2.5 focus:outline-none"
                  >
                    <option>BIỆT THỰ CỔ ĐIỂN</option>
                    <option>BIỆT THỰ HIỆN ĐẠI</option>
                    <option>BUNGALOW HOÀI CỔ</option>
                  </select>
                </div>

                <div className="sm:col-span-2 text-center pt-2">
                  <button
                    type="submit"
                    className="bg-[#688f32] hover:bg-[#587a29] text-white text-xs font-bold uppercase px-16 py-2.5 transition-colors cursor-pointer"
                  >
                    GỬI
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. PHOTO GALLERY ("HÌNH ẢNH") */}
      <section id="hinh-anh" className="py-14 sm:py-16 bg-[#e2ece9]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-bold uppercase text-[#222222] mb-2">
              HÌNH ẢNH
            </h2>
            <div className="w-16 h-[1px] bg-[#9eb3ad] mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(data.galleryImages || []).map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(imgUrl)}
                className={`overflow-hidden bg-zinc-900 cursor-pointer group ${
                  idx % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Không gian nghỉ dưỡng ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LIGHT WARM GREY FOOTER */}
      <footer className="bg-[#f3f3ef] border-t border-[#e0e0d8] pt-12 pb-6 text-xs text-[#555555]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-3 space-y-2.5">
              <h3 className="font-bold uppercase text-[#222222] mb-3">
                {brandName.toUpperCase()}
              </h3>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#333333] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#333333] shrink-0" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#333333] shrink-0 mt-0.5" />
                <span>
                  {primaryEmail}
                  <br />
                  {secondaryEmail}
                </span>
              </p>
              <div className="pt-2">
                <a
                  href="#lien-he-dat-phong"
                  className="inline-block bg-[#262b33] hover:bg-[#688f32] text-white text-xs font-bold px-5 py-2 rounded-xs transition-colors"
                >
                  Đặt phòng
                </a>
              </div>
            </div>

            {/* Col 2: HÌNH ẢNH 3x3 */}
            <div className="lg:col-span-3">
              <h3 className="font-bold uppercase text-[#222222] mb-3">
                HÌNH ẢNH
              </h3>
              <div className="grid grid-cols-3 gap-1.5">
                {(data.galleryImages || []).slice(0, 6).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Thumb ${i + 1}`}
                    onClick={() => setLightboxImage(img)}
                    className="w-full aspect-square object-cover cursor-pointer hover:opacity-85"
                  />
                ))}
              </div>
            </div>

            {/* Col 3: MENU */}
            <div className="lg:col-span-3">
              <h3 className="font-bold uppercase text-[#222222] mb-3">MENU</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <a href="#trang-chu" className="hover:text-[#688f32]">
                  Trang chủ
                </a>
                <a href="#tien-nghi" className="hover:text-[#688f32]">
                  Giới thiệu
                </a>
                <a href="#gia-dich-vu" className="hover:text-[#688f32]">
                  Cửa hàng
                </a>
                <a href="#hinh-anh" className="hover:text-[#688f32]">
                  Tin tức
                </a>
                <a
                  href="#lien-he-dat-phong"
                  className="hover:text-[#688f32]"
                >
                  Liên hệ
                </a>
              </div>
              <div className="flex items-center gap-2">
                {["f", "IG", "𝕏", "▶"].map((soc, idx) => (
                  <a
                    key={idx}
                    href="#lien-he-dat-phong"
                    className="w-6 h-6 rounded-full bg-[#262b33] text-white text-[10px] font-bold flex items-center justify-center hover:bg-[#688f32]"
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: GIẢI THƯỞNG */}
            <div className="lg:col-span-3">
              <h3 className="font-bold uppercase text-[#222222] mb-3">
                GIẢI THƯỞNG
              </h3>
              <p className="text-[11px] leading-relaxed mb-4">
                {data.awardsDescription}
              </p>
              <div className="flex items-center gap-3">
                {["TOP RESORT", "GREEN ARCH", "BEST TOUR"].map((aw, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-[#d5d5cc] flex items-center justify-center text-[#eab308] shadow-2xs">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[8px] font-bold mt-1 text-[#444444]">
                      {aw}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-[#e0e0d8] text-center text-[11px] text-[#777777]">
            © Bản quyền thuộc về {brandName}. Thiết kế website bởi{" "}
            <span className="font-bold text-[#333333]">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* FLOATING MESSENGER ICON */}
      <a
        href="#lien-he-dat-phong"
        aria-label="Hỗ trợ đặt phòng"
        className="fixed right-4 bottom-6 z-40 w-10 h-10 rounded-full bg-[#0084ff] text-white shadow-lg flex items-center justify-center"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </a>

      {/* DETAIL MODAL */}
      {selectedCard && (
        <div
          onClick={() => setSelectedCard(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full overflow-hidden shadow-2xl"
          >
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-5">
              <span className="text-[10px] font-bold uppercase text-[#688f32]">
                {selectedCard.areaSpec}
              </span>
              <h3 className="text-lg font-bold text-[#222222] mt-1 mb-2">
                {selectedCard.title}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed mb-4">
                {selectedCard.description}
              </p>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCard(null)}
                  className="px-4 py-2 border border-zinc-300 text-xs font-bold"
                >
                  Đóng
                </button>
                <a
                  href="#lien-he-dat-phong"
                  onClick={() => setSelectedCard(null)}
                  className="px-5 py-2 bg-[#688f32] text-white text-xs font-bold uppercase"
                >
                  Đặt Ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
        >
          <div className="max-w-3xl w-full relative">
            <img
              src={lightboxImage}
              alt="Xem ảnh lớn"
              className="w-full max-h-[80vh] object-contain"
            />
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#688f32]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
