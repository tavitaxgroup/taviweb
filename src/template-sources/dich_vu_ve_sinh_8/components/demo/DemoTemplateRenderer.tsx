"use client";

import React, { useState } from "react";
import {
  Gem,
  ChevronDown,
  ShoppingBag,
  Search,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Share2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  dichVuVeSinh8DefaultData,
  type DichVuVeSinh8Data,
  type DichVuVeSinh8ServiceItem
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: DichVuVeSinh8Data = adaptClonedTemplateData(
    dichVuVeSinh8DefaultData,
    incomingData
  );

  const [selectedService, setSelectedService] =
    useState<DichVuVeSinh8ServiceItem | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("TẤT CẢ");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const categories = [
    "TẤT CẢ",
    "CẢNH QUAN XANH",
    "TIỂU CẢNH ĐÁ",
    "ĐÁ HỘ MỆNH",
    "VỆ SINH BIỆT THỰ"
  ];

  const filteredServices =
    activeCategoryFilter === "TẤT CẢ"
      ? data.gardenServices
      : data.gardenServices.filter((s) => s.category === activeCategoryFilter);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedService(null);
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-slate-900 selection:text-white">
      {/* 1. PITCH-BLACK LUXURY HEADER WITH DIAMOND CREST */}
      <header className="bg-[#050505] text-white sticky top-0 z-50">
        {/* Top Brand Row */}
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-center">
          <a href="#trang-chu" className="inline-flex items-center gap-3 group">
            <Gem className="w-10 h-10 text-white stroke-[1.5] group-hover:scale-105 transition-transform" />
            <span className="text-2xl sm:text-3xl font-serif tracking-[0.15em] uppercase text-white">
              {data.business.name.split(" ")[0]}
            </span>
          </a>
        </div>

        {/* Bordered Navigation Bar */}
        <div className="border-y border-white/25 bg-[#080808]">
          <div className="max-w-5xl mx-auto px-4 h-11 flex items-center justify-between">
            <div className="w-12 hidden sm:block" />

            <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-[11px] font-bold uppercase tracking-wider text-neutral-200">
              <a
                href="#gioi-thieu"
                className="inline-flex items-center gap-1 hover:text-emerald-400 transition-colors"
              >
                <span>GIỚI THIỆU</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </a>
              <a
                href="#tin-tuc"
                className="inline-flex items-center gap-1 hover:text-emerald-400 transition-colors"
              >
                <span>BLOG</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </a>
              <a
                href="#cac-loai-da"
                className="inline-flex items-center gap-1 hover:text-emerald-400 transition-colors"
              >
                <span>TRANG SỨC &amp; ĐÁ</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </a>
              <a
                href="#dich-vu-san-vuon"
                className="hover:text-emerald-400 transition-colors"
              >
                SÂN VƯỜN BIỆT THỰ
              </a>
              <a
                href="#cac-loai-da"
                className="inline-flex items-center gap-1 hover:text-emerald-400 transition-colors"
              >
                <span>ĐÁ CẢNH</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </a>
            </nav>

            <div className="flex items-center gap-3 text-neutral-300">
              <button
                type="button"
                onClick={() => setSelectedService(data.gardenServices[0])}
                aria-label="Giỏ dịch vụ"
                className="hover:text-white border-r border-white/20 pr-3"
              >
                <ShoppingBag className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="hover:text-white"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. PITCH-BLACK HERO WITH 3 NATURAL MINERAL/GARDEN SPHERES */}
      <section
        id="trang-chu"
        className="relative bg-[#050505] text-white py-20 md:py-28 overflow-hidden"
      >
        {/* 3 Glowing Mineral / Garden Spheres in Background */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-4 items-center opacity-70">
          <div className="flex justify-start">
            <img
              src={data.heroStones[0]}
              alt="Đá Lam Ngọc"
              className="w-52 h-52 sm:w-64 sm:h-64 object-cover rounded-full blur-[0.5px] brightness-75"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={data.heroStones[1]}
              alt="Thạch Anh Tím"
              className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-full brightness-75"
            />
          </div>
          <div className="flex justify-end">
            <img
              src={data.heroStones[2]}
              alt="Ngọc Lục Bảo"
              className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-full blur-[0.5px] brightness-75"
            />
          </div>
        </div>

        {/* Centered Text & White CTA Button Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider uppercase text-white mb-5 drop-shadow">
            ĐÁ HỘ MỆNH
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed mb-8">
            {data.hero.subtitle}
          </p>
          <a
            href={data.hero.ctaLink || "#dich-vu-san-vuon"}
            className="px-8 py-3 rounded-md bg-white text-slate-900 text-xs font-extrabold uppercase tracking-wider shadow-xl hover:bg-emerald-500 hover:text-white transition-colors"
          >
            {data.hero.ctaText || "MUA NGAY"}
          </a>
        </div>
      </section>

      {/* 3. CÁC LOẠI ĐÁ & TIỂU CẢNH SÂN VƯỜN (CIRCULAR MEDALLIONS ON WHITE) */}
      <section id="cac-loai-da" className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
            {data.stoneCategoriesTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-3xl mx-auto leading-relaxed mb-14">
            {data.stoneCategoriesSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.categoryCircles.map((circle) => (
              <div
                key={circle.id}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl border-4 border-slate-100 mb-5">
                  <img
                    src={circle.image}
                    alt={circle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {circle.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 max-w-xs">
                  {circle.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DỊCH VỤ CHĂM SÓC SÂN VƯỜN, ĐÁ CẢNH & VỆ SINH BIỆT THỰ */}
      <section id="dich-vu-san-vuon" className="py-16 md:py-20 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Dịch Vụ Chuyên Sâu
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Chăm Sóc Cảnh Quan &amp; Vệ Sinh Biệt Thự
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategoryFilter === cat
                    ? "bg-[#050505] text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {filteredServices.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-xs hover:shadow-xl border border-slate-100 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <span className="absolute top-3 left-3 z-10 bg-black/80 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-extrabold text-emerald-700">
                      {item.price}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {" "}
                      {item.unit}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedService(item)}
                    className="px-4 py-1.5 rounded bg-[#050505] hover:bg-emerald-700 text-white text-[11px] font-bold uppercase transition-colors"
                  >
                    Đặt lịch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUY TRÌNH 4 BƯỚC */}
      <section id="gioi-thieu" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Quy Trình Chăm Sóc &amp; Bảo Dưỡng Tiêu Chuẩn
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Sự kết hợp hài hòa giữa kỹ thuật vệ sinh hiện đại và nghệ thuật chăm sóc cảnh quan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 border border-slate-200 rounded-lg hover:border-slate-900 transition-colors"
              >
                <div className="text-2xl font-serif font-bold text-emerald-700 mb-2">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BLOG / CẨM NANG */}
      <section id="tin-tuc" className="py-16 bg-[#f8f9fa] border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
            Cẩm Nang Đá Cảnh &amp; Sân Vườn Biệt Thự
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-xs border border-slate-100"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-[10px] font-bold uppercase text-emerald-700">
                    {post.category} • {post.date}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PITCH-BLACK LUXURY FOOTER */}
      <footer className="bg-[#050505] text-neutral-300 pt-14 pb-8 border-t border-white/15">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/15 text-xs">
            <div className="md:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2.5 text-white">
                <Gem className="w-7 h-7" />
                <span className="text-xl font-serif tracking-widest uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="#trang-chu"
                  className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center hover:border-white"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#trang-chu"
                  className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center hover:border-white"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-2">
              <h4 className="font-bold uppercase text-white mb-3">
                Dịch Vụ Trọng Tâm
              </h4>
              <div>Chăm sóc sân vườn biệt thự</div>
              <div>Thanh tẩy &amp; đánh bóng đá cảnh</div>
              <div>Vệ sinh hồ cá Koi &amp; tiểu cảnh</div>
              <div>Tổng vệ sinh biệt thự định kỳ</div>
            </div>

            <div className="md:col-span-4 space-y-2.5">
              <h4 className="font-bold uppercase text-white mb-3">
                Thông Tin Liên Hệ
              </h4>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{data.business.phone[0]}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{data.business.email[0]}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{data.business.workingHours}</span>
              </p>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-neutral-500">
            © Bản quyền thuộc về{" "}
            <strong className="text-neutral-300">{data.business.name}</strong>.
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white rounded-lg p-6 relative shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              {selectedService.name}
            </h3>
            <p className="text-xs font-bold text-emerald-700 mb-4">
              Chi phí tham khảo: {selectedService.price} {selectedService.unit}
            </p>
            <form onSubmit={handleBookingSubmit} className="space-y-3 text-xs">
              <input
                type="text"
                required
                placeholder="Họ và tên gia chủ"
                className="w-full border border-slate-200 rounded px-3.5 py-2.5 focus:outline-none focus:border-slate-900"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại liên hệ"
                className="w-full border border-slate-200 rounded px-3.5 py-2.5 focus:outline-none focus:border-slate-900"
              />
              <input
                type="text"
                placeholder="Địa chỉ biệt thự / sân vườn cần khảo sát"
                className="w-full border border-slate-200 rounded px-3.5 py-2.5 focus:outline-none focus:border-slate-900"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded bg-[#050505] hover:bg-emerald-700 text-white font-bold uppercase tracking-wider transition-colors"
              >
                XÁC NHẬN ĐẶT LỊCH KHẢO SÁT MIỄN PHÍ
              </button>
              {bookingSuccess && (
                <div className="flex items-center justify-center gap-1.5 text-emerald-600 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã gửi yêu cầu tư vấn thành công!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
