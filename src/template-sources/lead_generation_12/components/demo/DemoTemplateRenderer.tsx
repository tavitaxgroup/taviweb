"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  Play,
  Star,
  MapPin,
  Phone,
  Mail,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration12DefaultData,
  type LeadGeneration12Data,
  type GetawayTourCard
} from "@/template-sources/lead_generation_12/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration12Data = adaptClonedTemplateData(
    leadGeneration12DefaultData,
    incomingData
  );

  const [searchMode, setSearchMode] = useState<"tour" | "hotel">("tour");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedDeal, setSelectedDeal] = useState<string>("Săn Ưu Đãi Nghỉ Dưỡng");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const openDealModal = (title?: string) => {
    if (title) setSelectedDeal(title);
    setSubmitted(false);
    setModalOpen(true);
  };

  const renderTourGrid = (items: GetawayTourCard[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => openDealModal(item.title)}
          className="bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition cursor-pointer group relative"
        >
          {item.discountRibbon && (
            <span className="absolute top-3 left-0 z-10 bg-[#EC008C] text-white text-[10px] font-black uppercase px-3 py-1 shadow">
              {item.discountRibbon}
            </span>
          )}
          <div className="h-56 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="bg-white p-5 text-center border-t border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              {item.regionTag}
            </span>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-600 transition line-clamp-1 mb-2">
              {item.title}
            </h3>
            <div className="flex items-center justify-center gap-2 text-xs">
              {item.oldPrice && (
                <span className="text-slate-400 line-through">
                  {item.oldPrice}
                </span>
              )}
              <strong className="font-black text-slate-950">{item.price}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#FFE600] selection:text-slate-950">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 font-black text-sm uppercase tracking-wider text-slate-900">
            <span className="w-5 h-5 rounded-full bg-[#FFE600] border border-slate-900 inline-block" />
            <span>{data.business.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold text-slate-700">
            <a
              href="#trang-chu"
              className="text-slate-950 border-b-2 border-[#FFE600] pb-1"
            >
              Trang chủ
            </a>
            <a href="#trong-nuoc" className="hover:text-slate-950">
              Tour trong nước
            </a>
            <a href="#best-selling" className="hover:text-slate-950">
              Tour nước ngoài
            </a>
            <a href="#diem-den" className="hover:text-slate-950">
              Khách sạn
            </a>
            <a href="#tin-tuc" className="hover:text-slate-950">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-slate-950">
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-3 text-slate-700">
            <button
              onClick={() => openDealModal("Tìm kiếm ưu đãi nghỉ dưỡng")}
              className="hover:text-slate-950 cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => openDealModal("Tài khoản thành viên")}
              className="hover:text-slate-950 cursor-pointer"
              aria-label="Tài khoản"
            >
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO BANNER + YELLOW TABBED SEARCH BAR */}
      <section id="trang-chu" className="relative">
        <div className="relative h-[460px] sm:h-[540px] overflow-hidden bg-slate-900 flex items-center">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-white">
            {/* Yellow Zig-Zag Wave */}
            <div className="text-[#FFE600] font-black tracking-widest text-lg mb-1">
              〰〰〰
            </div>
            <p className="text-lg sm:text-2xl font-light">{data.hero.eyebrow}</p>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-2">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-100 mb-5">
              {data.hero.subtitle}
            </p>
            <button
              onClick={() => openDealModal(`Ưu đãi ${data.hero.title}`)}
              className="px-6 py-2 rounded-full bg-[#FFE600] hover:bg-yellow-300 text-slate-950 text-xs font-extrabold cursor-pointer shadow-lg"
            >
              {data.hero.ctaText}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center -mt-9 relative z-20">
          <button
            onClick={() => setSearchMode("tour")}
            className={`px-6 py-2.5 text-[11px] font-extrabold uppercase cursor-pointer ${
              searchMode === "tour"
                ? "bg-[#FFE600] text-slate-950"
                : "bg-[#111111] text-white"
            }`}
          >
            TÌM TOUR
          </button>
          <button
            onClick={() => setSearchMode("hotel")}
            className={`px-6 py-2.5 text-[11px] font-extrabold uppercase cursor-pointer ${
              searchMode === "hotel"
                ? "bg-[#FFE600] text-slate-950"
                : "bg-[#111111] text-white"
            }`}
          >
            TÌM HOTEL
          </button>
        </div>

        {/* Full-Width Bright Yellow Search Bar */}
        <div className="bg-[#FFE600] py-7 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-950 mb-4">
              TÌM TOUR PHÙ HỢP VỚI BẠN
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                openDealModal("Tìm kiếm gói nghỉ dưỡng phù hợp");
              }}
              className="flex flex-wrap items-center justify-center gap-2.5"
            >
              <select className="px-3.5 py-2 bg-white text-xs text-slate-700 min-w-[130px]">
                <option>Danh mục</option>
                <option>Nghỉ dưỡng 5 sao</option>
                <option>Du thuyền Vịnh</option>
              </select>
              <select className="px-3.5 py-2 bg-white text-xs text-slate-700 min-w-[110px]">
                <option>Giá</option>
                <option>Dưới 5 triệu</option>
                <option>Trên 10 triệu</option>
              </select>
              <select className="px-3.5 py-2 bg-white text-xs text-slate-700 min-w-[110px]">
                <option>Số ngày</option>
                <option>3 ngày 2 đêm</option>
                <option>5 ngày 4 đêm</option>
              </select>
              <select className="px-3.5 py-2 bg-white text-xs text-slate-700 min-w-[130px]">
                <option>Nơi khởi hành</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Hà Nội</option>
              </select>
              <label className="px-3.5 py-2 bg-white text-xs text-slate-700 flex items-center gap-2">
                <span>Giảm giá</span>
                <input type="checkbox" defaultChecked />
              </label>
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-[#111111] text-white text-[11px] font-extrabold uppercase cursor-pointer"
              >
                TÌM KIẾM
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXCITING DESTINATIONS MASONRY BENTO */}
      <section id="diem-den" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="border-l-2 border-slate-300 pl-4">
            <h2 className="text-xl sm:text-2xl font-light text-slate-800">
              Những điểm đến <strong className="font-black">THÚ VỊ</strong>
              <br />
              đang <strong className="font-black">CHỜ ĐÓN</strong> bạn{" "}
              <strong className="font-black">KHÁM PHÁ !</strong>
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-3 max-w-lg">
            {data.business.aboutText[0]}
          </p>
        </div>

        {/* Mosaic Bento Grid */}
        <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left 2 stacked */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <img
              src={data.bentoMosaic.images[0]}
              alt="Mosaic 1"
              className="w-full h-36 object-cover"
            />
            <img
              src={data.bentoMosaic.images[5]}
              alt="Mosaic 2"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Center-Left Large Boat + 2 Bottom */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <img
              src={data.bentoMosaic.images[1]}
              alt="Lagoon Boat"
              className="w-full h-68 object-cover"
            />
            <div className="grid grid-cols-2 gap-2">
              <img
                src={data.bentoMosaic.images[3]}
                alt="Coast"
                className="w-full h-32 object-cover"
              />
              <img
                src={data.bentoMosaic.images[4]}
                alt="Beach"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>

          {/* Center-Right Yellow Maldives Card + Top/Bottom */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <img
                src={data.bentoMosaic.images[2]}
                alt="Castle"
                className="w-full h-32 object-cover"
              />
              <img
                src={data.bentoMosaic.images[6]}
                alt="Santorini"
                className="w-full h-32 object-cover"
              />
            </div>

            {/* Yellow Maldives Highlight Box */}
            <div
              onClick={() => openDealModal(data.bentoMosaic.highlightTitle)}
              className="bg-[#FFE600] text-slate-950 p-5 text-center flex flex-col justify-center h-36 cursor-pointer"
            >
              <h3 className="text-sm font-black uppercase mb-1">
                {data.bentoMosaic.highlightTitle}
              </h3>
              <p className="text-[11px] text-slate-800 leading-snug line-clamp-2 mb-2">
                {data.bentoMosaic.highlightDesc}
              </p>
              <span className="text-[11px] font-extrabold underline">
                Xem thêm
              </span>
            </div>

            <img
              src={data.bentoMosaic.images[7]}
              alt="Couple"
              className="w-full h-32 object-cover"
            />
          </div>

          {/* Far Right 2 Stacked */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <img
              src={data.bentoMosaic.images[8]}
              alt="Village"
              className="w-full h-36 object-cover"
            />
            <img
              src={data.bentoMosaic.images[1]}
              alt="Mountain"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: 3X3 CHECKERBOARD CONTINENTS GRID (EUROPE / ASIA / AMERICA) */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="border-l-2 border-slate-300 pl-4">
            <h2 className="text-xl sm:text-2xl font-light text-slate-800">
              Đi đến <strong className="font-black">BẤT KÌ</strong> nơi đâu trên{" "}
              <strong className="font-black">THẾ GIỚI</strong>
              <br />
              Chỉ với vài <strong className="font-black">CLICK</strong> chuột
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-3 max-w-lg">
            Bạn có đam mê &ldquo;xê dịch&rdquo;? Mọi miền tổ quốc và năm châu bốn bể đang chờ đón bạn trải nghiệm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Row 1: Photo | Yellow Europe | White Info */}
          <div className="h-80 overflow-hidden">
            <img
              src={data.continentsGrid[0].image}
              alt={data.continentsGrid[0].vnTitle}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80 bg-[#FFE600] flex items-center justify-center relative overflow-hidden">
            <span className="font-serif italic font-black text-6xl sm:text-7xl text-slate-950 z-10">
              {data.continentsGrid[0].scriptTitle}
            </span>
          </div>
          <div className="h-80 bg-white p-8 sm:p-12 flex flex-col justify-center">
            <h3 className="text-base font-black text-slate-900 mb-2">
              {data.continentsGrid[0].vnTitle}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {data.continentsGrid[0].description}
            </p>
            <button
              onClick={() => openDealModal(data.continentsGrid[0].vnTitle)}
              className="text-xs font-extrabold text-amber-500 hover:underline w-fit cursor-pointer"
            >
              Xem thêm
            </button>
          </div>

          {/* Row 2: White Info | Photo | Black Asia */}
          <div className="h-80 bg-white p-8 sm:p-12 flex flex-col justify-center">
            <h3 className="text-base font-black text-slate-900 mb-2">
              {data.continentsGrid[1].vnTitle}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {data.continentsGrid[1].description}
            </p>
            <button
              onClick={() => openDealModal(data.continentsGrid[1].vnTitle)}
              className="text-xs font-extrabold text-amber-500 hover:underline w-fit cursor-pointer"
            >
              Xem thêm
            </button>
          </div>
          <div className="h-80 overflow-hidden">
            <img
              src={data.continentsGrid[1].image}
              alt={data.continentsGrid[1].vnTitle}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80 bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden">
            <span className="font-serif italic font-black text-6xl sm:text-7xl text-[#FFE600] z-10">
              {data.continentsGrid[1].scriptTitle}
            </span>
          </div>

          {/* Row 3: Yellow America | White Info | Photo */}
          <div className="h-80 bg-[#FFE600] flex items-center justify-center relative overflow-hidden">
            <span className="font-serif italic font-black text-6xl sm:text-7xl text-slate-950 z-10">
              {data.continentsGrid[2].scriptTitle}
            </span>
          </div>
          <div className="h-80 bg-white p-8 sm:p-12 flex flex-col justify-center">
            <h3 className="text-base font-black text-slate-900 mb-2">
              {data.continentsGrid[2].vnTitle}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {data.continentsGrid[2].description}
            </p>
            <button
              onClick={() => openDealModal(data.continentsGrid[2].vnTitle)}
              className="text-xs font-extrabold text-amber-500 hover:underline w-fit cursor-pointer"
            >
              Xem thêm
            </button>
          </div>
          <div className="h-80 overflow-hidden">
            <img
              src={data.continentsGrid[2].image}
              alt={data.continentsGrid[2].vnTitle}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: BEST SELLING TOURS */}
      <section id="best-selling" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border-l-2 border-slate-300 pl-4 mb-3">
          <h2 className="text-xl sm:text-2xl font-light text-slate-800">
            Chùm tour <strong className="font-black">BÁN CHẠY NHẤT</strong>
            <br />
            của năm <strong className="font-black">2026</strong>
          </h2>
        </div>
        <p className="text-xs text-slate-400 mb-8 max-w-lg">
          Những tour bán chạy nhất năm nay theo thống kê của chúng tôi. Gọi ngay HOTLINE để được tư vấn cụ thể và thưởng cho mình kì nghỉ dưỡng tuyệt vời.
        </p>

        {renderTourGrid(data.bestSellingTours)}
      </section>

      {/* SECTION 5: UNDERWATER VIDEO BANNER + YELLOW SUBSCRIBE BAR */}
      <section>
        <div
          onClick={() => openDealModal("Khám phá tour lặn biển ngắm san hô")}
          className="relative h-80 sm:h-96 overflow-hidden cursor-pointer group"
        >
          <img
            src={data.underwaterVideoImage}
            alt="Lặn biển khám phá đại dương"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border-2 border-white text-white flex items-center justify-center group-hover:scale-110 transition">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
        </div>

        <div className="bg-[#FFE600] py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-light text-slate-950 mb-4">
              <strong className="font-black">ĐĂNG KÍ NGAY</strong> để không bỏ lỡ
              <br />
              bất kỳ <strong className="font-black">ƯU ĐÃI</strong> nào từ chúng tôi !
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                openDealModal("Đăng ký nhận bản tin Ưu đãi VIP");
              }}
              className="max-w-md space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Email của bạn"
                className="w-full pb-2 bg-transparent border-b border-slate-950 text-xs text-slate-950 placeholder:text-slate-700 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#111111] text-white text-[11px] font-extrabold uppercase cursor-pointer"
              >
                ĐĂNG KÍ
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 6: DOMESTIC TOURS ("CHÙM TOUR DU LỊCH TRONG NƯỚC") */}
      <section id="trong-nuoc" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border-l-2 border-slate-300 pl-4 mb-3">
          <h2 className="text-xl sm:text-2xl font-light text-slate-800">
            Chùm tour du lịch
            <br />
            <strong className="font-black">TRONG NƯỚC</strong>
          </h2>
        </div>
        <p className="text-xs text-slate-400 mb-8 max-w-lg">
          Với đường bờ biển dài hơn 3260km, những khu bảo tồn thiên nhiên tuyệt vời, những thành phố nhộn nhịp và nền ẩm thực đặc sắc, Việt Nam có tất cả những điều đó.
        </p>

        {renderTourGrid(data.domesticTours)}
      </section>

      {/* SECTION 7: 50/50 YELLOW SCRIPT QUOTE & CUSTOMER REVIEW */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#FFE600] p-10 sm:p-16 flex items-center justify-center text-center">
          <h3 className="font-serif italic font-black text-3xl sm:text-5xl text-slate-950 leading-tight">
            {data.quoteSplit.leftScriptText}
          </h3>
        </div>
        <div className="bg-[#F8F9FA] p-10 sm:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="flex items-center gap-1 text-red-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-red-500" />
            ))}
          </div>
          <p className="text-xs sm:text-sm italic text-slate-600 leading-relaxed mb-4 max-w-md">
            “{data.quoteSplit.reviewContent}”
          </p>
          <div className="text-xs text-slate-800">
            <strong>{data.quoteSplit.reviewerName}</strong> |{" "}
            <span className="text-slate-400">{data.quoteSplit.reviewerSource}</span>
          </div>
        </div>
      </section>

      {/* SECTION 8: LATEST NEWS ("TIN TỨC & ƯU ĐÃI DU LỊCH MỚI NHẤT") */}
      <section id="tin-tuc" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border-l-2 border-slate-300 pl-4 mb-2">
          <h2 className="text-xl sm:text-2xl font-light text-slate-800">
            Tin tức & Ưu đãi
            <br />
            du lịch <strong className="font-black">MỚI NHẤT</strong>
          </h2>
        </div>
        <p className="text-xs text-slate-400 mb-8">
          Cập nhật xu hướng du lịch nhanh chóng
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(data.news || []).map((post) => (
            <article
              key={post.id}
              onClick={() => openDealModal(post.title)}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="h-52 overflow-hidden mb-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-amber-600">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 9: MAP STRIP + 6-PHOTO STRIP + DARK FOOTER */}
      <footer id="lien-he">
        {/* Map Visual */}
        <div className="h-64 bg-sky-50 border-t border-slate-200 relative flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(#0284c7 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px"
            }}
          />
          <div className="relative z-10 bg-white p-4 rounded shadow-lg border border-slate-200 text-xs">
            <strong className="block text-slate-900">{data.business.name}</strong>
            <span className="text-slate-500">{data.business.address}</span>
          </div>
        </div>

        {/* 6-Photo Flush Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {data.stripGallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Travel Strip"
              className="w-full h-36 object-cover"
            />
          ))}
        </div>

        {/* Dark Footer */}
        <div className="bg-[#1A1A1A] text-slate-400 pt-12 pb-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10 text-xs">
              <div className="lg:col-span-3">
                <span className="text-base font-black uppercase text-white block mb-3">
                  {data.business.name}
                </span>
                <p className="text-slate-400 leading-relaxed">
                  {data.business.aboutText[1]}
                </p>
              </div>

              <div className="lg:col-span-3">
                <h4 className="font-extrabold uppercase text-white mb-3">
                  Liên Hệ
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FFE600] shrink-0 mt-0.5" />
                    <span>{data.business.address}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#FFE600] shrink-0" />
                    <span>{data.business.phone[0]}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#FFE600] shrink-0" />
                    <span>{data.business.email[0]}</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3">
                <h4 className="font-extrabold uppercase text-white mb-3">
                  Tin Tức
                </h4>
                <ul className="space-y-2">
                  <li><a href="#tin-tuc" className="hover:text-white">• Bản tin Du Lịch Việt</a></li>
                  <li><a href="#tin-tuc" className="hover:text-white">• Cẩm nang du lịch</a></li>
                  <li><a href="#tin-tuc" className="hover:text-white">• Tư vấn du lịch</a></li>
                  <li><a href="#tin-tuc" className="hover:text-white">• Tuyển dụng Du Lịch</a></li>
                </ul>
              </div>

              <div className="lg:col-span-3">
                <h4 className="font-extrabold uppercase text-white mb-3">
                  Tour Phổ Biến
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {data.stripGallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Popular Tour"
                      className="w-full h-12 object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-5 text-center text-xs text-slate-500">
              © Bản quyền thuộc về {data.business.name}
            </div>
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
                <div className="w-12 h-12 rounded-full bg-[#FFE600] text-slate-950 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-slate-900 mb-1">
                  Đã Giữ Suất Ưu Đãi!
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Chuyên viên tư vấn kỳ nghỉ <strong>{data.business.name}</strong> sẽ liên hệ với bạn ngay.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2 rounded-full bg-[#111111] text-white text-xs font-bold cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <>
                <span className="inline-block px-2.5 py-0.5 bg-[#FFE600] text-slate-950 text-[10px] font-black uppercase mb-2">
                  Deal Nghỉ Dưỡng Cao Cấp
                </span>
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  {selectedDeal}
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
                    placeholder="Họ và tên *"
                    className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-[#FFE600] hover:bg-yellow-300 text-slate-950 text-xs font-extrabold uppercase cursor-pointer"
                  >
                    Nhận Báo Giá Ưu Đãi Ngay
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
