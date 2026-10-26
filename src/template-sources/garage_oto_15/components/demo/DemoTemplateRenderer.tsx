"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto15DefaultData,
  type GarageOto15Data,
  type GarageOto15RouteCard,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: GarageOto15Data = adaptClonedTemplateData(
    garageOto15DefaultData,
    incomingData
  );

  const [selectedRoute, setSelectedRoute] =
    useState<GarageOto15RouteCard | null>(null);
  const [booked, setBooked] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@monajourney.vn";

  const renderRegionCard = (card: GarageOto15RouteCard) => (
    <div
      key={card.id}
      onClick={() => setSelectedRoute(card)}
      className="relative h-44 overflow-hidden cursor-pointer group bg-[#222222]"
    >
      <img
        src={card.image}
        alt={card.name}
        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20 p-4 flex flex-col justify-center">
        <h4 className="text-base font-extrabold text-white">{card.name}</h4>
        <p className="mt-0.5 text-[11px] font-bold text-white">
          Giá: <span className="text-[#FFA800]">{card.price}</span> / chuyến
        </p>
        <div className="mt-2.5">
          <span className="inline-block px-3 py-1 bg-[#FFA800] hover:bg-[#e09200] text-white text-[9px] font-extrabold uppercase rounded-full transition-colors">
            XEM NGAY
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#FFA800] selection:text-white">
      {/* HEADER (Clean White Navbar matching OTO015-garage_oto_15.png) */}
      <header className="bg-white sticky top-0 z-40 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="leading-none">
                <span className="block text-xl font-serif font-extrabold text-[#FFA800]">
                  {data.business.name.split(" ")[0] || "Mona"}
                </span>
                <span className="block text-lg font-serif font-bold text-[#784B12] -mt-1">
                  {data.business.name.split(" ").slice(1).join(" ") || "Journey"}
                </span>
              </div>
            )}
          </a>

          {/* Center Links */}
          <nav className="hidden lg:flex items-center gap-5 text-[10px] font-extrabold uppercase tracking-wider text-[#222222]">
            <a
              href="#"
              className="text-[#FFA800] border-b-2 border-[#FFA800] pb-1"
            >
              TRANG CHỦ
            </a>
            <a
              href="#cac-tuyen-xe"
              className="hover:text-[#FFA800] pb-1 transition-colors"
            >
              ĐỘI XE TRONG NƯỚC
            </a>
            <a
              href="#dia-diem"
              className="hover:text-[#FFA800] pb-1 transition-colors"
            >
              THUÊ XE HỢP ĐỒNG
            </a>
            <a
              href="#thanh-pho"
              className="hover:text-[#FFA800] pb-1 transition-colors"
            >
              DỊCH VỤ BẢO DƯỠNG
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#FFA800] pb-1 transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#FFA800] pb-1 transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Phone & Email */}
          <div className="hidden sm:flex flex-col text-[11px] text-[#333333]">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-semibold hover:text-[#FFA800]"
            >
              <Phone className="w-3 h-3 text-[#222222]" />
              <span>Hotline: {primaryPhone}</span>
            </a>
            <a
              href={`mailto:${primaryEmail}`}
              className="flex items-center gap-1.5 text-[#555555] hover:text-[#FFA800]"
            >
              <Mail className="w-3 h-3 text-[#222222]" />
              <span>{primaryEmail}</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO BANNER + OVERLAPPING ORANGE FILTER BOX (#FFA800) */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex flex-col justify-between overflow-hidden bg-[#0e3f5c]">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="h-8" />

        {/* Center Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white my-auto py-12">
          <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold uppercase tracking-wide">
            CÔNG TY{" "}
            <span className="text-[#FFA800]">{data.business.name}</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base font-bold text-white">
            {data.hero.subtitle}
          </p>
          <p className="mt-3 text-xs text-white/90 leading-relaxed max-w-2xl mx-auto">
            {data.hero.description}
          </p>

          <div className="mt-6">
            <a
              href={data.hero.ctaLink || "#cac-tuyen-xe"}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#FFA800] hover:bg-[#e09200] text-white text-xs font-extrabold uppercase rounded-full shadow-lg transition-colors"
            >
              <span>{data.hero.ctaText || "XEM NGAY"}</span>
              <MapPin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Left / Right Slider Arrows */}
        <button
          type="button"
          aria-label="Trước"
          className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-white/60 items-center justify-center text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Tiếp"
          className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-white/60 items-center justify-center text-white hover:bg-white/20"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Orange Search Box (#FFA800) */}
        <div className="relative z-20 max-w-3xl mx-auto w-full px-4">
          <div className="flex justify-center">
            <span className="bg-[#FFA800] text-white text-[10px] font-extrabold uppercase tracking-wider px-6 py-2 rounded-t-md">
              TÌM XE & HÀNH TRÌNH
            </span>
          </div>
          <div className="bg-[#FFA800] p-4 sm:p-5 shadow-xl flex flex-wrap items-center justify-center gap-2.5">
            <select className="px-3 py-2 bg-white rounded-xs text-xs text-[#555555] focus:outline-none">
              <option>Danh mục</option>
              <option>Xe Limousine 9 chỗ</option>
              <option>Xe Carnival / Sedona</option>
              <option>Xe Hợp Đồng 16-45 chỗ</option>
            </select>
            <select className="px-3 py-2 bg-white rounded-xs text-xs text-[#555555] focus:outline-none">
              <option>Giá</option>
              <option>2.000.000đ - 4.000.000đ</option>
              <option>4.500.000đ - 8.000.000đ</option>
            </select>
            <select className="px-3 py-2 bg-white rounded-xs text-xs text-[#555555] focus:outline-none">
              <option>Số ngày</option>
              <option>Trong ngày</option>
              <option>2 Ngày 1 Đêm</option>
              <option>3 Ngày 2 Đêm</option>
            </select>
            <select className="px-3 py-2 bg-white rounded-xs text-xs text-[#555555] focus:outline-none">
              <option>Nơi khởi hành</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
            </select>
            <label className="bg-white px-3 py-2 rounded-xs text-xs text-[#555555] inline-flex items-center gap-1.5">
              <span>Giảm giá</span>
              <input type="checkbox" />
            </label>
            <a
              href="#cac-tuyen-xe"
              className="px-5 py-2 bg-[#333333] hover:bg-black text-white text-xs font-extrabold uppercase rounded-full transition-colors"
            >
              TÌM KIẾM
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: CÁC TOUR & TUYẾN XE HẤP DẪN NHẤT (3x2 Grid of 6 Square Cards) */}
      <section id="cac-tuyen-xe" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#FFA800]">
              CÁC TUYẾN XE & HÀNH TRÌNH HẤP DẪN NHẤT 2026
            </h2>
            <p className="mt-1 text-xs text-[#777777]">
              Đội xe du lịch đời mới được bảo dưỡng kỹ thuật định kỳ, cam kết an
              toàn tuyệt đối
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {data.featuredRoutes.map((route) => (
              <div
                key={route.id}
                onClick={() => setSelectedRoute(route)}
                className="relative aspect-square overflow-hidden cursor-pointer group bg-[#222222]"
              >
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-center p-4 text-white">
                  <h3 className="text-base sm:text-lg font-extrabold">
                    {route.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-white/95">
                    Giá trọn gói: {route.price}
                  </p>
                  <span className="mt-3 px-4 py-1.5 bg-[#FFA800] hover:bg-[#e09200] text-white text-[10px] font-extrabold uppercase rounded-full transition-colors">
                    XEM NGAY
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: GIẢM GIÁ 30% NGHỈ DƯỠNG TẠI PHÚ QUỐC BANNER */}
      <section className="relative py-16 bg-[#0d1b2a] text-white text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=85"
          alt="Nghỉ dưỡng Phú Quốc"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <span className="block text-sm font-extrabold">Giảm giá 30%</span>
          <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold uppercase tracking-wide">
            ĐỘI XE & NGHỈ DƯỠNG TẠI PHÚ QUỐC
          </h2>
          <p className="mt-1.5 text-xs text-white/90">
            Ưu đãi đặc biệt cho khách hàng đặt xe khứ hồi sân bay & tham quan
            đảo
          </p>
          <a
            href="#lien-he"
            className="mt-5 inline-block px-6 py-2 bg-[#FFA800] hover:bg-[#e09200] text-white text-xs font-extrabold uppercase rounded-full shadow-md transition-colors"
          >
            XEM NGAY
          </a>
        </div>
      </section>

      {/* SECTION 4: NHỮNG ĐỊA ĐIỂM DU LỊCH NỔI TIẾNG (3 Tall Portrait Cards) */}
      <section id="dia-diem" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#FFA800]">
              NHỮNG ĐỊA ĐIỂM HÀNH TRÌNH NỔI TIẾNG
            </h2>
            <p className="mt-1 text-xs text-[#777777]">
              Trải nghiệm dịch vụ vận chuyển hành khách cao cấp và bảo dưỡng xe
              chuyên nghiệp
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.famousSpots.map((spot) => (
              <div
                key={spot.id}
                className="relative h-80 sm:h-96 overflow-hidden group bg-[#222222]"
              >
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25 p-6 flex flex-col justify-center text-white">
                  <h3 className="text-base font-extrabold uppercase">
                    {spot.title}
                  </h3>
                  <span className="text-xs font-semibold text-white/90">
                    {spot.city}
                  </span>
                  <p className="mt-2.5 text-[11px] text-white/85 leading-relaxed">
                    {spot.description}
                  </p>
                  <div className="mt-4">
                    <a
                      href="#lien-he"
                      className="inline-block px-4 py-1.5 bg-[#FFA800] hover:bg-[#e09200] text-white text-[10px] font-extrabold uppercase rounded-full transition-colors"
                    >
                      TÌM HIỂU
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CÁC THÀNH PHỐ DU LỊCH (MIỀN BẮC & MIỀN NAM ASYMMETRIC GRID) */}
      <section id="thanh-pho" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#FFA800]">
              CÁC THÀNH PHỐ & TRẠM ĐỘI XE
            </h2>
            <p className="mt-1 text-xs text-[#777777]">
              Mạng lưới đội xe Limousine và xưởng dịch vụ bảo dưỡng phủ sóng
              rộng khắp Bắc - Nam
            </p>
          </div>

          {/* Row 1: 4 North Cards Left + Miền Bắc Map Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6 items-stretch">
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {data.northRegion.cards.map(renderRegionCard)}
            </div>

            <div className="lg:col-span-6 bg-[#F2F2F2] p-7 sm:p-9 flex flex-col justify-center relative overflow-hidden">
              <h3 className="text-xl font-extrabold text-[#FFA800]">
                {data.northRegion.title}
              </h3>
              <p className="mt-2.5 text-xs text-[#555555] leading-relaxed">
                {data.northRegion.description}
              </p>
              <h4 className="mt-4 text-xs font-extrabold text-[#222222]">
                Các thành phố:
              </h4>
              <ul className="mt-2 space-y-1 text-[11px] text-[#555555] pl-4 list-disc">
                {data.northRegion.citiesList.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Miền Nam Map Card Left + 4 South Cards Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-6 bg-[#F2F2F2] p-7 sm:p-9 flex flex-col justify-center relative overflow-hidden">
              <h3 className="text-xl font-extrabold text-[#FFA800]">
                {data.southRegion.title}
              </h3>
              <p className="mt-2.5 text-xs text-[#555555] leading-relaxed">
                {data.southRegion.description}
              </p>
              <h4 className="mt-4 text-xs font-extrabold text-[#222222]">
                Các thành phố:
              </h4>
              <ul className="mt-2 space-y-1 text-[11px] text-[#555555] pl-4 list-disc">
                {data.southRegion.citiesList.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {data.southRegion.cards.map(renderRegionCard)}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (Dark Charcoal #1A1A1A + Bright Orange Bottom Bar #FFA800) */}
      <footer id="lien-he" className="bg-[#1A1A1A] text-white/80 pt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          {/* Col 1: Brand & Address */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <span className="block text-2xl font-serif font-extrabold text-[#FFA800] leading-none">
                {data.business.name.split(" ")[0] || "Mona"}
              </span>
              <span className="block text-2xl font-serif font-bold text-[#D99B26] leading-tight">
                {data.business.name.split(" ").slice(1).join(" ") || "Journey"}
              </span>
            </div>
            <ul className="space-y-2 text-[11px] text-white/75">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Tin Tức */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold text-white mb-4">Tin Tức</h4>
            <ul className="space-y-2 text-[11px] text-white/75 list-disc pl-4">
              <li>Bản tin Đội Xe & Lữ Hành Việt</li>
              <li>Cẩm nang bảo dưỡng xe đường dài</li>
              <li>Khám phá hành trình xuyên Việt</li>
              <li>Sự kiện & Hợp đồng đưa đón</li>
              <li>Tuyển dụng Tài xế & Kỹ thuật viên</li>
            </ul>
          </div>

          {/* Col 3: Hình Thức Thanh Toán */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold text-white mb-4">
              Hình Thức Thanh Toán
            </h4>
            <div className="space-y-2 text-[11px] text-white/75">
              <p>STK: {data.paymentInfo.accountNumber}</p>
              <p>Ngân hàng: {data.paymentInfo.bankName}</p>
              <p>Chủ tài khoản: {data.paymentInfo.accountHolder}</p>
            </div>
          </div>

          {/* Col 4: Mạng Xã Hội */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-white mb-4">
              Mạng Xã Hội
            </h4>
            <div className="flex items-center gap-2.5">
              {["f", "yt", "ig"].map((soc) => (
                <a
                  key={soc}
                  href="#lien-he"
                  className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-white text-[11px] font-bold uppercase hover:bg-[#FFA800] hover:border-[#FFA800] transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bright Orange Copyright Bar (#FFA800) */}
        <div className="bg-[#FFA800] text-white py-3 text-center text-[11px] font-semibold">
          © Thiết kế và lập trình bởi <strong>{data.business.name}</strong> •
          TaviWeb
        </div>
      </footer>

      {/* FLOATING RIGHT ZALO & PHONE BUTTONS */}
      <div className="fixed right-4 bottom-12 z-40 flex flex-col gap-2.5">
        <a
          href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
          className="w-10 h-10 rounded-full bg-[#0284C7] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Chat tư vấn"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
          className="w-10 h-10 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Gọi hotline"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* ROUTE BOOKING MODAL */}
      {selectedRoute && (
        <div
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedRoute(null);
            setBooked(false);
          }}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedRoute(null);
                setBooked(false);
              }}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedRoute.image}
              alt={selectedRoute.name}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />
            <h3 className="text-base font-extrabold text-[#222222]">
              Đặt Xe Tuyến {selectedRoute.name}
            </h3>
            <p className="mt-1 text-xs font-bold text-[#FFA800]">
              Giá trọn gói: {selectedRoute.price}
            </p>
            {booked ? (
              <div className="mt-4 p-4 bg-[#FFF8EB] border border-[#FFA800] rounded-lg text-xs text-[#222222] font-semibold text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFA800]" />
                <span>Đã đặt xe thành công! Điều hành viên sẽ gọi ngay.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBooked(true);
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
                  className="w-full py-2.5 bg-[#FFA800] hover:bg-[#e09200] text-white text-xs font-extrabold uppercase rounded-full transition-colors"
                >
                  XÁC NHẬN ĐẶT XE
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
