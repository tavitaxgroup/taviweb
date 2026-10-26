"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Shield,
  Dumbbell,
  Flame,
  Sparkles,
  CheckCircle2,
  Menu,
  X,
  ArrowUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym3DefaultData,
  type PhongGym3Data
} from "@/template-sources/phong_gym_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongGym3Data = adaptClonedTemplateData(
    phongGym3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTransIdx, setActiveTransIdx] = useState(0);
  const [selectedCityFilter, setSelectedCityFilter] = useState<string | null>(
    null
  );
  const [trialName, setTrialName] = useState("");
  const [trialPhone, setTrialPhone] = useState("");
  const [trialSubmitted, setTrialSubmitted] = useState(false);
  const [modalOpenTitle, setModalOpenTitle] = useState<string | null>(null);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const workoutGrid =
    data.workoutGrid || phongGym3DefaultData.workoutGrid || [];
  const cityMosaic = data.cityMosaic || phongGym3DefaultData.cityMosaic || [];
  const partnerBrands =
    data.partnerBrands || phongGym3DefaultData.partnerBrands || [];
  const masterTrainers =
    data.masterTrainers || phongGym3DefaultData.masterTrainers || [];
  const transformations =
    data.transformations || phongGym3DefaultData.transformations || [];
  const currentTrans = transformations[activeTransIdx] || transformations[0];
  const celebrities =
    data.celebrities || phongGym3DefaultData.celebrities || [];
  const newsList = data.news || phongGym3DefaultData.news || [];
  const specialOffers =
    data.specialOffers || phongGym3DefaultData.specialOffers || [];

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrialSubmitted(true);
    setTrialName("");
    setTrialPhone("");
    setTimeout(() => {
      setTrialSubmitted(false);
      setModalOpenTitle(null);
    }, 2800);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#d91f26] selection:text-white"
    >
      {/* 1. TOP DARK HEADER WITH ANGLED RED BRAND BLOCK (Matches GYM003) */}
      <header className="sticky top-0 z-40 bg-[#1a1a1a] text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-stretch justify-between">
          {/* Left Angled Red Brand Block */}
          <a
            href="#top"
            className="relative bg-[#d91f26] pl-5 pr-10 py-3 flex flex-col justify-center shrink-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)"
            }}
          >
            <span className="text-base sm:text-lg font-black tracking-wider uppercase leading-none">
              {data.business.name.split(" ")[0] || "CALIFORNIA"}
            </span>
            <span className="text-[9px] font-bold tracking-widest uppercase text-white/90 mt-0.5">
              FITNESS & YOGA
            </span>
          </a>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-white/90">
            <a href="#top" className="text-white hover:text-[#d91f26] transition-colors">
              Trang chủ
            </a>
            <a href="#clubs" className="hover:text-[#d91f26] transition-colors">
              Giới thiệu
            </a>
            <a
              href="#services"
              className="flex items-center gap-1 hover:text-[#d91f26] transition-colors"
            >
              <span>Các dịch vụ</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#news" className="hover:text-[#d91f26] transition-colors">
              Tin tức
            </a>
            <a href="#celebrities" className="hover:text-[#d91f26] transition-colors">
              Góp ý – Phản hồi
            </a>
            <a href="#trial-form" className="hover:text-[#d91f26] transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* Right Trial CTA */}
          <div className="hidden sm:flex items-center pr-4">
            <button
              type="button"
              onClick={() => setModalOpenTitle("ĐĂNG KÝ TẬP THỬ MIỄN PHÍ")}
              className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#d91f26] border-l border-white/15 pl-5 py-2 transition-colors"
            >
              ĐĂNG KÝ TẬP THỬ
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden px-4 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141414] border-t border-white/10 px-6 py-4 space-y-2.5 text-xs font-medium">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#d91f26] font-bold"
            >
              Trang chủ
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Các dịch vụ luyện tập
            </a>
            <a
              href="#clubs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Hệ thống câu lạc bộ
            </a>
            <a
              href="#trainers"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Chuyên gia thể hình
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tin tức & Ưu đãi
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setModalOpenTitle("ĐĂNG KÝ TẬP THỬ MIỄN PHÍ");
              }}
              className="w-full mt-2 bg-[#d91f26] text-white font-bold uppercase py-2.5 rounded"
            >
              ĐĂNG KÝ TẬP THỬ
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (YOGA TRẺ HÓA - DUY TRÌ VẺ ĐẸP RẠNG RỠ) */}
      <section className="relative bg-gradient-to-r from-[#e6f7f8] via-[#bce8ec] to-[#7bd2db] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-20 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Left Typography */}
          <div className="md:col-span-6 text-center md:text-left z-10">
            <h1 className="text-2xl sm:text-4xl font-light uppercase tracking-wide text-[#222222] leading-snug">
              YOGA{" "}
              <span className="font-bold text-[#14657b]">
                {data.hero.eyebrow?.replace(/^YOGA\s*/i, "") || "TRẺ HÓA"}
              </span>
              <span className="block font-normal mt-1">
                {data.hero.subtitle || "DUY TRÌ VẺ ĐẸP RẠNG RỠ"}
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-700 mt-3 max-w-md mx-auto md:mx-0">
              {data.hero.description}
            </p>
            <div className="mt-6">
              <a
                href={data.hero.ctaLink || "#services"}
                className="inline-block bg-[#1a6b82] hover:bg-[#135163] text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-full shadow-md transition-all"
              >
                {data.hero.ctaText || "TÌM HIỂU NGAY"}
              </a>
            </div>
          </div>

          {/* Right Yogi Image */}
          <div className="md:col-span-6 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white/60">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CÁC DỊCH VỤ LUYỆN TẬP VÀ NHỮNG CÁCH GIẢM CÂN HIỆU QUẢ (6-Tile Full-Bleed B&W Grid) */}
      <section id="services" className="pt-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center mb-10">
          <h2 className="text-lg sm:text-xl font-medium text-[#222222] leading-snug">
            Các dịch vụ luyện tập và
            <span className="block">những cách giảm cân hiệu quả</span>
          </h2>
          <div className="w-10 h-0.5 bg-[#d91f26] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {workoutGrid.map((item) => (
            <div
              key={item.id}
              onClick={() => setModalOpenTitle(`ĐĂNG KÝ LỚP ${item.title}`)}
              className="group relative aspect-[4/3] overflow-hidden bg-black cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-[#d91f26]/80 transition-colors" />
              <div className="absolute inset-x-0 bottom-5 text-center px-4 text-white">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/85 mt-1 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2 max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TÌM TRUNG TÂM THỂ HÌNH GẦN BẠN NHẤT (4-Row Checkerboard Mosaic) */}
      <section id="clubs" className="pt-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center mb-10">
          <h2 className="text-lg sm:text-xl font-medium text-[#222222]">
            Tìm trung tâm thể hình gần bạn nhất
          </h2>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-xl mx-auto">
            Hiện chúng tôi đã có mặt trên <strong>7 thành phố</strong> lớn trên khắp Việt Nam, hãy chọn trung tâm phù hợp nhất để bắt đầu tập luyện với cách giảm cân nhanh nhất của chúng tôi hoặc khám phá thêm về những trung tâm sắp mở ở gần nơi bạn sống.
          </p>
          <div className="w-10 h-0.5 bg-[#d91f26] mx-auto mt-3.5" />
          {selectedCityFilter && (
            <div className="mt-3 text-xs text-[#d91f26] font-bold">
              Đang xem khu vực: {selectedCityFilter} —{" "}
              <button
                type="button"
                onClick={() => setModalOpenTitle(`NHẬN VÉ TẬP THỬ TẠI ${selectedCityFilter}`)}
                className="underline"
              >
                Nhận vé tập thử miễn phí tại đây
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {cityMosaic.map((tile) => {
            const spanClass =
              tile.colSpan === 2 ? "col-span-2" : "col-span-1";
            if (tile.type === "city") {
              const isRed = tile.accent === "red";
              return (
                <button
                  key={tile.id}
                  type="button"
                  onClick={() => setSelectedCityFilter(tile.cityName || null)}
                  className={`${spanClass} group relative min-h-[190px] sm:min-h-[230px] overflow-hidden flex flex-col items-center justify-center text-white focus:outline-none`}
                >
                  <img
                    src={tile.image}
                    alt={tile.cityName}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 transition-colors ${
                      isRed
                        ? "bg-[#9e0b12]/80 group-hover:bg-[#d91f26]/85"
                        : "bg-black/75 group-hover:bg-[#9e0b12]/80"
                    }`}
                  />
                  <div className="relative z-10 text-center px-3">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest block">
                      {tile.cityName}
                    </span>
                    {tile.clubCount && (
                      <span className="text-[10px] text-white/80 mt-1 block">
                        {tile.clubCount}
                      </span>
                    )}
                  </div>
                </button>
              );
            }

            return (
              <div
                key={tile.id}
                className={`${spanClass} relative min-h-[190px] sm:min-h-[230px] overflow-hidden bg-black`}
              >
                <img
                  src={tile.image}
                  alt="California Athlete"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CÁC THƯƠNG HIỆU LIÊN KẾT KHÁC (4 Sub-Brand Columns) */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl font-medium text-[#222222]">
              Các thương hiệu liên kết khác
            </h2>
            <div className="w-10 h-0.5 bg-[#d91f26] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Stylized Sub-Brand Header Badge */}
                  <div className="h-16 flex flex-col items-center justify-center mb-6">
                    {brand.id === "brand-ufc" && (
                      <div className="text-center leading-none">
                        <span className="block text-2xl font-black italic tracking-tighter text-[#d91f26]">
                          UFC
                        </span>
                        <span className="block text-xs font-extrabold tracking-widest text-[#222222]">
                          GYM
                        </span>
                      </div>
                    )}
                    {brand.id === "brand-yoga" && (
                      <div className="text-center leading-none">
                        <span className="block text-xl font-light tracking-[0.25em] text-slate-600">
                          YOGA
                        </span>
                        <span className="block text-[10px] tracking-[0.3em] text-sky-600 mt-0.5">
                          — PLUS —
                        </span>
                      </div>
                    )}
                    {brand.id === "brand-centuryon" && (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-b from-amber-300 to-amber-600 border-2 border-slate-900 flex items-center justify-center shadow">
                        <Shield className="w-6 h-6 text-slate-900" />
                      </div>
                    )}
                    {brand.id === "brand-calikids" && (
                      <div className="text-center leading-none border-2 border-amber-400 px-3 py-1 rounded">
                        <span className="block text-sm font-black text-sky-600">
                          CALI
                        </span>
                        <span className="block text-sm font-black text-amber-500">
                          KIDS
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Locations List */}
                  <div className="space-y-4 mb-6">
                    {brand.locations.map((loc, idx) => (
                      <div key={idx}>
                        <h3 className="text-xs font-bold uppercase text-[#222222] mb-1">
                          {loc.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 pl-2.5 border-l-2 border-[#d91f26] leading-relaxed">
                          {loc.address}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setModalOpenTitle(`TÌM HIỂU HỆ THỐNG ${brand.brandName}`)
                    }
                    className="bg-[#d91f26] hover:bg-[#b5161c] text-white text-[10px] font-bold uppercase tracking-wider px-5 py-2 rounded-full transition-colors"
                  >
                    TÌM HIỂU CHUNG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GẶP GỠ NHỮNG CHUYÊN GIA THỂ HÌNH HÀNG ĐẦU (2x2 Master Trainer Cards) */}
      <section id="trainers" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-lg sm:text-xl font-medium text-[#222222]">
              Gặp gỡ những chuyên gia thể hình hàng đầu
            </h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Dù bạn yêu thích Yoga, đam mê bộ môn Dance đầy sôi động, hay môn võ MMA cực mạnh mẽ. Bạn sẽ luôn được hướng dẫn bởi những chuyên gia hàng đầu.
            </p>
            <div className="w-10 h-0.5 bg-[#d91f26] mx-auto mt-3.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {masterTrainers.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-[#efefef] grid grid-cols-12 items-stretch overflow-hidden"
              >
                {/* Trainer Portrait */}
                <div className="col-span-5 relative min-h-[220px]">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Red-Bordered Info Box */}
                <div className="col-span-7 p-3 sm:p-4 flex items-center">
                  <div className="w-full h-full bg-white border border-[#d91f26]/60 p-4 flex flex-col justify-center">
                    <h3 className="text-xs font-bold uppercase text-[#222222]">
                      {trainer.name}
                    </h3>
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      {trainer.role}
                    </div>
                    <ul className="space-y-1.5 text-[10px] text-slate-600 leading-relaxed">
                      {trainer.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#d91f26] font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setModalOpenTitle("ĐĂNG KÝ TẬP CÙNG CHUYÊN GIA")}
              className="bg-[#d91f26] hover:bg-[#b5161c] text-white text-xs font-bold uppercase tracking-wider px-10 py-3 rounded transition-colors shadow"
            >
              ĐĂNG KÝ NGAY
            </button>
          </div>
        </div>
      </section>

      {/* 7. CÂU CHUYỆN THÀNH CÔNG (Before / After Member Transformation) */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-lg sm:text-xl font-medium text-[#222222]">
              Câu chuyện thành công
            </h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Khám phá phương pháp đã giúp thay đổi cuộc sống của hàng trăm ngàn người tại Việt Nam, giúp họ thay đổi hoàn toàn cơ thể bằng phương pháp giảm cân nhanh nhất, truyền cảm hứng và đạt được vẻ ngoài như mơ ước.
            </p>
            <div className="w-10 h-0.5 bg-[#d91f26] mx-auto mt-3.5" />
          </div>

          {currentTrans && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Before Photo */}
              <div className="md:col-span-4 bg-white p-3 shadow-sm border border-slate-100">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={currentTrans.beforeImage}
                    alt={`Trước - ${currentTrans.memberName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center Comparison Metrics */}
              <div className="md:col-span-4 text-center px-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  HỘI VIÊN
                </div>
                <h3 className="text-base font-bold uppercase text-[#222222] mb-5">
                  {currentTrans.memberName}
                </h3>

                <div className="grid grid-cols-2 gap-4 text-[11px]">
                  {/* TRƯỚC Column */}
                  <div className="space-y-2">
                    <div className="bg-[#222222] text-white font-bold uppercase py-1 px-3 rounded-sm inline-block text-[10px] mb-1">
                      TRƯỚC
                    </div>
                    <p className="text-slate-600">
                      Tỷ lệ mỡ:{" "}
                      <strong className="text-slate-900">
                        {currentTrans.beforeStats.bodyFat}
                      </strong>
                    </p>
                    <p className="text-slate-600">
                      Trọng lượng:{" "}
                      <strong className="text-slate-900">
                        {currentTrans.beforeStats.weight}
                      </strong>
                    </p>
                    <p className="text-slate-600">
                      Lượng cơ:{" "}
                      <strong className="text-slate-900">
                        {currentTrans.beforeStats.muscleMass}
                      </strong>
                    </p>
                    <p className="text-slate-600">
                      Lượng mỡ cơ thể:{" "}
                      <strong className="text-slate-900">
                        {currentTrans.beforeStats.fatMass}
                      </strong>
                    </p>
                  </div>

                  {/* SAU Column */}
                  <div className="space-y-2 border-l border-slate-200 pl-3">
                    <div className="bg-[#d91f26] text-white font-bold uppercase py-1 px-4 rounded-sm inline-block text-[10px] mb-1">
                      SAU
                    </div>
                    <p className="text-slate-600">
                      Tỷ lệ mỡ:{" "}
                      <strong className="text-slate-900">
                        {currentTrans.afterStats.bodyFat}
                      </strong>
                    </p>
                    <p className="text-slate-600">
                      Trọng lượng:{" "}
                      <strong className="text-slate-900">
                        {currentTrans.afterStats.weight}
                      </strong>
                    </p>
                    <p className="text-slate-600">
                      Lượng cơ:{" "}
                      <strong className="text-slate-900">
                        {currentTrans.afterStats.muscleMass}
                      </strong>
                    </p>
                    <p className="text-slate-600">
                      Lượng mỡ cơ thể:{" "}
                      <strong className="text-slate-900">
                        {currentTrans.afterStats.fatMass}
                      </strong>
                    </p>
                  </div>
                </div>

                {transformations.length > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    {transformations.map((tf, i) => (
                      <button
                        key={tf.id}
                        type="button"
                        onClick={() => setActiveTransIdx(i)}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-colors ${
                          activeTransIdx === i
                            ? "bg-[#d91f26] text-white"
                            : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                        }`}
                      >
                        {tf.memberName}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* After Photo */}
              <div className="md:col-span-4 bg-white p-3 shadow-sm border border-slate-100">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={currentTrans.afterImage}
                    alt={`Sau - ${currentTrans.memberName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8. CÁC HỘI VIÊN NỔI TIẾNG (8 Circular Portraits on Dark Charcoal Background) */}
      <section id="celebrities" className="pt-14 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center mb-10">
          <h2 className="text-lg sm:text-xl font-medium text-[#222222]">
            Các hội viên nổi tiếng
          </h2>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            Chúng tôi luôn là lựa chọn hàng đầu cho các chính trị gia, ngôi sao giải trí, người mẫu thời trang và doanh nhân khi họ bắt đầu tập luyện.
          </p>
          <div className="w-10 h-0.5 bg-[#d91f26] mx-auto mt-3.5" />
        </div>

        <div className="bg-[#2c2c2c] py-14 text-white">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6">
            {celebrities.map((cel) => (
              <div
                key={cel.id}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border border-white/40 overflow-hidden mb-3">
                  <img
                    src={cel.image}
                    alt={cel.name}
                    className={`w-full h-full object-cover rounded-full transition-all duration-300 group-hover:scale-105 ${
                      cel.grayscale ? "grayscale group-hover:grayscale-0" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/90">
                  {cel.name}
                </h3>
                <span className="text-[10px] text-white/55 mt-0.5">
                  {cel.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NƠI BẠN CÓ THỂ ĐẶT TRỌN NIỀM TIN (3 Fitness Articles + 2 Special Offers) */}
      <section id="news" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-lg sm:text-xl font-medium text-[#222222]">
              Nơi bạn có thể đặt trọn niềm tin
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Những xu hướng tập luyện mới nhất về cách giảm cân hiệu quả, các lời tư vấn trực tiếp từ chuyên gia và vô số thông tin hữu ích về sức khỏe luôn được cập nhật.
            </p>
            <div className="w-10 h-0.5 bg-[#d91f26] mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((art) => (
              <article key={art.id} className="group">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-bold uppercase text-[#222222] leading-snug group-hover:text-[#d91f26] transition-colors">
                  {art.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#d91f26] my-2.5" />
                <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#trial-form"
              className="inline-block bg-[#d91f26] hover:bg-[#b5161c] text-white text-xs font-bold uppercase tracking-wider px-10 py-2.5 rounded transition-colors"
            >
              ĐỌC THÊM
            </a>
          </div>

          {/* ƯU ĐÃI ĐẶC BIỆT */}
          <div className="mt-14">
            <h3 className="text-sm font-bold uppercase text-[#222222] mb-5">
              ƯU ĐÃI ĐẶC BIỆT
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialOffers.map((offer) => {
                const isDark = offer.theme === "dark-red";
                return (
                  <div
                    key={offer.id}
                    className="relative h-52 sm:h-60 overflow-hidden flex items-center p-6 sm:p-8 shadow-sm"
                  >
                    <img
                      src={offer.image}
                      alt={offer.headline}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isDark
                          ? "bg-gradient-to-r from-black/85 via-black/55 to-transparent"
                          : "bg-gradient-to-r from-white/95 via-white/75 to-transparent"
                      }`}
                    />

                    <div className="relative z-10 max-w-xs">
                      {isDark ? (
                        <>
                          <div className="flex items-baseline gap-1.5 text-white">
                            <span className="text-xs font-bold uppercase">
                              {offer.headline}
                            </span>
                            <span className="text-3xl sm:text-4xl font-black text-[#d91f26]">
                              {offer.highlightText}
                            </span>
                          </div>
                          <div className="text-xs font-bold uppercase text-white mb-4">
                            {offer.subheadline}
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setModalOpenTitle(
                                `${offer.headline} ${offer.highlightText || ""} ${offer.subheadline}`
                              )
                            }
                            className="bg-[#d91f26] hover:bg-[#b5161c] text-white text-[10px] font-bold uppercase tracking-wider px-5 py-2 rounded-full transition-colors"
                          >
                            {offer.buttonText}
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="text-sm sm:text-base font-bold uppercase text-[#14657b]">
                            {offer.headline}
                          </div>
                          <div className="text-xs font-medium uppercase text-slate-600 mb-4">
                            {offer.subheadline}
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setModalOpenTitle(
                                `${offer.headline} - ${offer.subheadline}`
                              )
                            }
                            className="bg-[#1a6b82] hover:bg-[#135163] text-white text-[10px] font-bold uppercase tracking-wider px-5 py-2 rounded-full transition-colors"
                          >
                            {offer.buttonText}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. DARK FOOTER WITH EMBEDDED TRIAL REGISTRATION CARD + WHITE BRAND BAR */}
      <footer id="trial-form" className="bg-[#222222] text-slate-300">
        <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          {/* Col 1: LIÊN KẾT */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase text-white mb-4">
              LIÊN KẾT
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>
                <a href="#clubs" className="hover:text-white">
                  • Tuyển dụng
                </a>
              </li>
              <li>
                <a href="#celebrities" className="hover:text-white">
                  • Góp ý – Phản hồi
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  • Điều kiện sử dụng
                </a>
              </li>
              <li>
                <a href="#top" className="hover:text-white">
                  • Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: DỊCH VỤ */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase text-white mb-4">
              DỊCH VỤ
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>
                <a href="#services" className="hover:text-white">
                  • Giảm căng cơ
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  • Dance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  • Yoga
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  • HLV Cá nhân
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  • Kickfit/MMA
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  • Giảm cân
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: HOTLINE */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase text-white mb-4">
              HOTLINE
            </h4>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="block text-xl sm:text-2xl font-extrabold text-[#d91f26] tracking-wide mb-4"
            >
              {primaryPhone}
            </a>
            <div className="flex items-center gap-2.5 mb-4">
              <a
                href="#trial-form"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#d91f26] hover:border-[#d91f26] transition-colors"
              >
                f
              </a>
              <a
                href="#trial-form"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#d91f26] hover:border-[#d91f26] transition-colors"
              >
                t
              </a>
              <a
                href="#trial-form"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#d91f26] hover:border-[#d91f26] transition-colors"
              >
                ▶
              </a>
            </div>
            <p className="text-[10px] text-slate-500">
              © {data.business.name}
            </p>
          </div>

          {/* Col 4: ĐĂNG KÝ TẬP THỬ CARD */}
          <div className="lg:col-span-5">
            <div className="bg-[#2c2c2c] border border-white/10 p-5 rounded">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-xs font-bold uppercase text-white">
                  ĐĂNG KÝ TẬP THỬ
                </h4>
                <span className="bg-[#d91f26] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  FREE
                </span>
              </div>

              {trialSubmitted ? (
                <div className="py-4 text-center text-emerald-400 text-xs font-semibold">
                  Đăng ký thành công! Chuyên viên câu lạc bộ sẽ gọi xác nhận lịch tập thử cho bạn.
                </div>
              ) : (
                <form onSubmit={handleTrialSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    value={trialName}
                    onChange={(e) => setTrialName(e.target.value)}
                    placeholder="Họ và tên"
                    className="w-full bg-white text-slate-900 px-3 py-2 text-xs focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={trialPhone}
                    onChange={(e) => setTrialPhone(e.target.value)}
                    placeholder="Số điện thoại"
                    className="w-full bg-white text-slate-900 px-3 py-2 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#d91f26] hover:bg-[#b5161c] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2 transition-colors"
                  >
                    ĐĂNG KÝ NGAY
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom White Sub-Brand Strip */}
        <div className="bg-white py-4 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-around gap-6 text-slate-700">
            <div className="flex items-center gap-1.5 font-bold text-xs">
              <Shield className="w-5 h-5 text-amber-600" />
              <span>CENTURYON</span>
            </div>
            <div className="text-xs font-black tracking-wider text-sky-600">
              CALI<span className="text-amber-500">KIDS</span>
            </div>
            <div className="text-xs font-light tracking-[0.25em] text-slate-500">
              YOGA <span className="text-sky-600">PLUS</span>
            </div>
            <div className="text-sm font-black italic text-[#d91f26]">
              UFC <span className="not-italic text-slate-900">GYM</span>
            </div>
            <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              <span>ERI INTERNATIONAL</span>
            </div>
          </div>
        </div>
      </footer>

      {/* TRIAL REGISTRATION MODAL */}
      {modalOpenTitle && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setModalOpenTitle(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {trialSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#d91f26] mx-auto mb-3" />
                <h3 className="text-base font-bold uppercase text-slate-900 mb-1">
                  Đặt lịch tập thử thành công!
                </h3>
                <p className="text-xs text-slate-500">
                  {data.business.name} sẽ liên hệ qua số điện thoại của bạn trong ít phút để gửi mã QR vào cửa câu lạc bộ.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTrialSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d91f26]">
                    {data.business.name}
                  </span>
                  <h3 className="text-base font-extrabold uppercase text-slate-900 mt-1">
                    {modalOpenTitle}
                  </h3>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Họ và tên hội viên
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full border border-slate-300 px-3.5 py-2 text-xs focus:outline-none focus:border-[#d91f26]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số điện thoại nhận vé tập
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0909 xxx xxx"
                    className="w-full border border-slate-300 px-3.5 py-2 text-xs focus:outline-none focus:border-[#d91f26]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Thành phố / Câu lạc bộ mong muốn
                  </label>
                  <select className="w-full border border-slate-300 px-3.5 py-2 text-xs focus:outline-none focus:border-[#d91f26]">
                    <option>TP. Hồ Chí Minh (18 CLB)</option>
                    <option>Hà Nội (9 CLB)</option>
                    <option>Đà Nẵng (2 CLB)</option>
                    <option>Bình Dương (2 CLB)</option>
                    <option>Biên Hòa (2 CLB)</option>
                    <option>Nha Trang (1 CLB)</option>
                    <option>Cần Thơ (1 CLB)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d91f26] hover:bg-[#b5161c] text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors"
                >
                  NHẬN VÉ TẬP THỬ NGAY
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
