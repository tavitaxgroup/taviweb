"use client";

import React, { useState } from "react";
import {
  Sun,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration11DefaultData,
  type LeadGeneration11Data
} from "@/template-sources/lead_generation_11/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration11Data = adaptClonedTemplateData(
    leadGeneration11DefaultData,
    incomingData
  );

  const [searchTab, setSearchTab] = useState<"tour" | "hotel">("tour");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedTitle, setSelectedTitle] = useState<string>("Đặt Tour Khuyến Mãi");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const openModal = (title?: string) => {
    if (title) setSelectedTitle(title);
    setSubmitted(false);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#FF6600] selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo LET'S ☀️ TRAVEL */}
          <a href="#" className="flex items-center gap-1.5 font-black tracking-wider text-sm sm:text-base uppercase text-slate-900">
            <span>LET&apos;S</span>
            <Sun className="w-5 h-5 text-[#FF6600] fill-[#FF6600]" />
            <span>{data.business.name.replace(/LET'S\s*/i, "") || "TRAVEL"}</span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-700">
            <a href="#trang-chu" className="text-[#FF6600]">
              TRANG CHỦ
            </a>
            <a href="#tour-hap-dan" className="hover:text-[#FF6600] transition">
              GIỚI THIỆU
            </a>
            <a href="#tour-hut-khach" className="hover:text-[#FF6600] transition">
              TOUR DU LỊCH
            </a>
            <a href="#dia-diem" className="hover:text-[#FF6600] transition">
              KHÁCH SẠN
            </a>
            <a href="#thanh-pho" className="hover:text-[#FF6600] transition">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#FF6600] transition">
              LIÊN HỆ
            </a>
          </nav>
        </div>
      </header>

      {/* HERO BANNER + OVERLAPPING ORANGE SEARCH BOX */}
      <section id="trang-chu" className="relative">
        <div className="relative h-[440px] sm:h-[520px] flex items-center justify-center text-center text-white overflow-hidden bg-slate-900">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 max-w-2xl px-4 pb-10">
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-wide mb-2">
              CÔNG TY <span className="text-[#FF6600]">{data.heroHighlightWord}</span> TRAVEL
            </h1>
            <p className="text-sm sm:text-base font-bold text-white mb-3">
              {data.hero.title}
            </p>
            <p className="text-xs text-slate-200 leading-relaxed mb-6">
              {data.hero.subtitle}
            </p>
            <button
              onClick={() => openModal("Khám phá các gói tour ưu đãi")}
              className="inline-flex items-center gap-1.5 bg-[#FF6600] hover:bg-orange-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg transition cursor-pointer"
            >
              <span>{data.hero.ctaText}</span>
              <MapPin className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Overlapping Tabbed Orange Search Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="flex justify-center">
            <button
              onClick={() => setSearchTab("tour")}
              className={`px-6 py-2.5 text-[11px] font-extrabold uppercase cursor-pointer transition ${
                searchTab === "tour"
                  ? "bg-[#FF6600] text-white"
                  : "bg-[#1A1A1A] text-white"
              }`}
            >
              TÌM TOUR
            </button>
            <button
              onClick={() => setSearchTab("hotel")}
              className={`px-6 py-2.5 text-[11px] font-extrabold uppercase cursor-pointer transition ${
                searchTab === "hotel"
                  ? "bg-[#FF6600] text-white"
                  : "bg-[#1A1A1A] text-white"
              }`}
            >
              TÌM HOTEL
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              openModal(
                searchTab === "tour" ? "Tìm kiếm Tour du lịch" : "Tìm kiếm Khách sạn"
              );
            }}
            className="bg-[#FF6600] p-5 sm:p-6 shadow-xl flex flex-wrap items-center justify-center gap-3"
          >
            <select className="px-3.5 py-2 rounded-xs bg-white text-xs text-slate-700 min-w-[130px] focus:outline-none">
              <option>Danh mục</option>
              <option>Tour Biển Đảo</option>
              <option>Tour Miền Bắc</option>
              <option>Tour Miền Tây</option>
            </select>
            <select className="px-3.5 py-2 rounded-xs bg-white text-xs text-slate-700 min-w-[110px] focus:outline-none">
              <option>Giá</option>
              <option>Dưới 3 triệu</option>
              <option>3 - 5 triệu</option>
            </select>
            <select className="px-3.5 py-2 rounded-xs bg-white text-xs text-slate-700 min-w-[110px] focus:outline-none">
              <option>Số ngày</option>
              <option>3 ngày 2 đêm</option>
              <option>5 ngày 4 đêm</option>
            </select>
            <select className="px-3.5 py-2 rounded-xs bg-white text-xs text-slate-700 min-w-[130px] focus:outline-none">
              <option>Nơi khởi hành</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
            </select>
            <label className="px-3.5 py-2 rounded-xs bg-white text-xs text-slate-700 flex items-center gap-2 cursor-pointer">
              <span>Giảm giá</span>
              <input type="checkbox" defaultChecked className="accent-[#FF6600]" />
            </label>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-[#1A1A1A] hover:bg-slate-800 text-white text-[11px] font-extrabold uppercase cursor-pointer"
            >
              TÌM KIẾM
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 2: CÁC TOUR HẤP DẪN (3X2 SQUARE OVERLAY CARDS) */}
      <section id="tour-hap-dan" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
            CÁC TOUR HẤP DẪN
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Khám phá những hành trình du lịch đặc sắc được yêu thích nhất
          </p>
          <span className="w-10 h-0.5 bg-[#FF6600] block mx-auto mt-2.5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.attractiveTours.map((tour) => (
            <div
              key={tour.id}
              onClick={() => openModal(tour.name)}
              className="relative h-72 overflow-hidden group cursor-pointer shadow-md"
            >
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex flex-col items-center justify-center text-center text-white p-4">
                <h3 className="text-lg font-extrabold mb-1">{tour.name}</h3>
                <div className="flex items-center gap-0.5 text-amber-400 mb-2">
                  {[...Array(tour.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold mb-3">Giá tour: {tour.price}</p>
                <span className="px-5 py-1.5 rounded-full bg-[#FF6600] text-white text-[10px] font-extrabold uppercase">
                  XEM NGAY
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FULL-WIDTH PHU QUOC PROMO BANNER */}
      <section className="relative h-72 sm:h-80 flex items-center justify-center text-center text-white overflow-hidden my-4">
        <img
          src={data.midPromoBanner.backgroundImage}
          alt={data.midPromoBanner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="relative z-10 px-4">
          <span className="text-xs sm:text-sm font-extrabold block mb-1">
            {data.midPromoBanner.discountText}
          </span>
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-wide mb-2">
            {data.midPromoBanner.title}
          </h2>
          <p className="text-xs text-slate-200 mb-5">
            {data.midPromoBanner.dateRange}
          </p>
          <button
            onClick={() => openModal(data.midPromoBanner.title)}
            className="px-6 py-2 rounded-full bg-[#FF6600] hover:bg-orange-600 text-white text-[11px] font-extrabold uppercase cursor-pointer"
          >
            {data.midPromoBanner.ctaText}
          </button>
        </div>
      </section>

      {/* SECTION 4: NHỮNG TOUR HÚT KHÁCH (FLUSH 3X3 GRID) */}
      <section id="tour-hut-khach" className="pt-14 pb-8">
        <div className="text-center mb-10 px-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
            NHỮNG TOUR HÚT KHÁCH
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Lịch trình 5 ngày 4 đêm khởi hành hàng tuần trên toàn quốc
          </p>
          <span className="w-10 h-0.5 bg-[#FF6600] block mx-auto mt-2.5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {data.popularGridTours.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(`Tour ${item.name} (${item.duration})`)}
              className="relative h-56 sm:h-64 overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition flex flex-col items-center justify-center text-white text-center">
                <h3 className="text-lg font-extrabold">{item.name}</h3>
                <span className="text-xs text-slate-200 mt-1">
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: NHỮNG ĐỊA ĐIỂM DU LỊCH NỔI TIẾNG */}
      <section id="dia-diem" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
            NHỮNG ĐỊA ĐIỂM DU LỊCH NỔI TIẾNG
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Trải nghiệm những danh thắng hàng đầu tại Việt Nam
          </p>
          <span className="w-10 h-0.5 bg-[#FF6600] block mx-auto mt-2.5" />
        </div>

        <div className="relative flex items-center">
          <button
            className="hidden md:flex w-8 h-8 items-center justify-center text-[#FF6600] -ml-10 cursor-pointer"
            aria-label="Trước"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {data.famousLandmarks.map((lm) => (
              <div
                key={lm.id}
                onClick={() => openModal(lm.name)}
                className="relative h-96 overflow-hidden group cursor-pointer shadow-lg"
              >
                <img
                  src={lm.image}
                  alt={lm.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25 p-6 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-0.5 text-amber-400 mb-2">
                    {[...Array(lm.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-lg font-black uppercase">{lm.name}</h3>
                  <span className="text-xs text-slate-300 mb-3 block">
                    {lm.city}
                  </span>
                  <p className="text-[11px] text-slate-200 leading-relaxed mb-5">
                    {lm.description}
                  </p>
                  <div>
                    <span className="inline-block px-5 py-1.5 rounded-full bg-[#FF6600] text-white text-[10px] font-extrabold uppercase">
                      TÌM HIỂU
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="hidden md:flex w-8 h-8 items-center justify-center text-[#FF6600] -mr-10 cursor-pointer"
            aria-label="Tiếp"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* SECTION 6: CÁC THÀNH PHỐ DU LỊCH (MIỀN BẮC & MIỀN NAM) */}
      <section id="thanh-pho" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
            CÁC THÀNH PHỐ DU LỊCH
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Hành trình xuyên Việt từ Bắc vào Nam với ưu đãi hấp dẫn
          </p>
          <span className="w-10 h-0.5 bg-[#FF6600] block mx-auto mt-2.5" />
        </div>

        {/* Row 1: Miền Bắc */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
          {/* Left 2x2 Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {data.northRegion.cards.map((card) => (
              <div
                key={card.id}
                onClick={() => openModal(`Tour ${card.name}`)}
                className="relative h-40 overflow-hidden group cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/45 p-4 flex flex-col justify-center text-white">
                  <h4 className="text-base font-extrabold">{card.name}</h4>
                  <p className="text-[11px] mb-2">
                    Giá: <span className="text-[#FF6600] font-bold">{card.price}</span>
                  </p>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#FF6600] text-white text-[9px] font-extrabold uppercase">
                      XEM NGAY
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Region Summary Box */}
          <div className="lg:col-span-6 bg-[#F4F5F7] p-7 flex flex-col justify-center relative overflow-hidden">
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {data.northRegion.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {data.northRegion.description}
            </p>
            <span className="text-xs font-extrabold text-slate-900 mb-2 block">
              Các thành phố:
            </span>
            <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-600">
              {data.northRegion.citiesList.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: Miền Nam */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Region Summary Box */}
          <div className="lg:col-span-6 bg-[#F4F5F7] p-7 flex flex-col justify-center relative overflow-hidden">
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              {data.southRegion.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {data.southRegion.description}
            </p>
            <span className="text-xs font-extrabold text-slate-900 mb-2 block">
              Các thành phố:
            </span>
            <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-600">
              {data.southRegion.citiesList.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
          </div>

          {/* Right 2x2 Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {data.southRegion.cards.map((card) => (
              <div
                key={card.id}
                onClick={() => openModal(`Tour ${card.name}`)}
                className="relative h-40 overflow-hidden group cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/45 p-4 flex flex-col justify-center text-white">
                  <h4 className="text-base font-extrabold">{card.name}</h4>
                  <p className="text-[11px] mb-2">
                    Giá: <span className="text-[#FF6600] font-bold">{card.price}</span>
                  </p>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#FF6600] text-white text-[9px] font-extrabold uppercase">
                      XEM NGAY
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="lien-he" className="bg-[#1A1A1A] text-slate-300 pt-14 pb-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Col 1 */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-1.5 font-black uppercase text-white text-base mb-4">
                <span>LET&apos;S</span>
                <Sun className="w-5 h-5 text-[#FF6600] fill-[#FF6600]" />
                <span>TRAVEL</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-400 mb-4">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{data.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
              <p className="text-[11px] text-slate-400 mb-3">
                Đăng ký để được nhận thông tin khuyến mãi một cách nhanh chóng.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  openModal("Đăng ký nhận khuyến mãi");
                }}
                className="flex"
              >
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-3 py-2 bg-white text-slate-900 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FF6600] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  GỬI
                </button>
              </form>
            </div>

            {/* Col 2: Tin Tức */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Tin Tức
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#tour-hap-dan" className="hover:text-white">• Bản tin Du Lịch Việt</a></li>
                <li><a href="#tour-hap-dan" className="hover:text-white">• Cẩm nang du lịch</a></li>
                <li><a href="#tour-hap-dan" className="hover:text-white">• Khám phá du lịch</a></li>
                <li><a href="#tour-hap-dan" className="hover:text-white">• Sự kiện du lịch</a></li>
                <li><a href="#tour-hap-dan" className="hover:text-white">• Tuyển dụng Du Lịch</a></li>
              </ul>
            </div>

            {/* Col 3: Góc Khách Hàng */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Góc Khách Hàng
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#lien-he" className="hover:text-white">• Điều kiện & điều khoản</a></li>
                <li><a href="#lien-he" className="hover:text-white">• Quyền riêng tư</a></li>
                <li><a href="#lien-he" className="hover:text-white">• Chính sách bảo mật và thông tin</a></li>
                <li><a href="#lien-he" className="hover:text-white">• Ý kiến khách hàng</a></li>
                <li><a href="#lien-he" className="hover:text-white">• Phương thức thanh toán</a></li>
              </ul>
            </div>

            {/* Col 4: Tour Phổ Biến */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Tour Phổ Biến
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {data.footerGallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Tour"
                    className="w-full h-14 object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 text-center text-xs text-slate-500">
            © Bản quyền thuộc về {data.business.name}
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#FF6600] text-white flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-slate-900 mb-1">
                  Đăng Ký Thành Công!
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Nhân viên điều hành tour <strong>{data.business.name}</strong> sẽ gọi lại cho bạn ngay.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2 rounded-full bg-[#FF6600] text-white text-xs font-bold cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <>
                <span className="text-[11px] font-extrabold uppercase text-[#FF6600] block mb-1">
                  Nhận ưu đãi giảm 30%
                </span>
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  {selectedTitle}
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên của bạn *"
                    className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại liên hệ *"
                    className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#FF6600] hover:bg-orange-600 text-white text-xs font-extrabold uppercase cursor-pointer"
                  >
                    Gửi Yêu Cầu Đặt Tour
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
