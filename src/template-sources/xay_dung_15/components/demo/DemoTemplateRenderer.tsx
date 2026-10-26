"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Building2,
  Play,
  MessageCircle,
  Star,
  Download,
  CheckCircle2,
  Compass
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { xayDung15DefaultData, type XayDung15Data } from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: XayDung15Data = adaptClonedTemplateData(xayDung15DefaultData, incomingData);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFloorId, setActiveFloorId] = useState<string>(
    data.floorTabs[0]?.id || "fl-1"
  );
  const [selectedSampleUnitId, setSelectedSampleUnitId] = useState<string>(
    data.sampleUnits[0]?.id || "unit-a4"
  );
  const [activeVideoModal, setActiveVideoModal] = useState<{
    title: string;
    caption: string;
    thumbnail: string;
  } | null>(null);
  const [formSent, setFormSent] = useState(false);

  const activeFloor =
    data.floorTabs.find((f) => f.id === activeFloorId) || data.floorTabs[0];
  const mainSampleUnit =
    data.sampleUnits.find((u) => u.id === selectedSampleUnitId) || data.sampleUnits[0];
  const sideSampleUnits = data.sampleUnits.filter((u) => u.id !== mainSampleUnit?.id);

  const featuredVideos = data.videos.filter((v) => v.featured);
  const subVideos = data.videos.filter((v) => !v.featured);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#745d3c] selection:text-white">
      {/* 1. TOP HEADER BAR (HAMBURGER LEFT, CENTER LOGO, HOTLINE RIGHT) */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Mở menu"
            className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-[#d49a2a] hover:text-[#d49a2a] transition-colors"
          >
            {drawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <a href="#trang-chu" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xs bg-gradient-to-br from-[#d49a2a] to-rose-700 text-white flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-sm font-extrabold tracking-wider text-rose-700 uppercase leading-none">
                {data.business.name}
              </div>
              <div className="text-[9px] tracking-[0.2em] text-[#d49a2a] uppercase font-semibold mt-0.5">
                Real Estate & Construction
              </div>
            </div>
          </a>

          <a
            href={`tel:${data.business.phone[0]}`}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#d49a2a]"
          >
            <Phone className="w-3.5 h-3.5 text-[#d49a2a]" />
            <span>{data.business.phone[0]}</span>
          </a>
        </div>

        {drawerOpen && (
          <div className="bg-white border-t border-slate-100 px-6 py-4 shadow-lg">
            <div className="max-w-5xl mx-auto flex flex-wrap gap-6 text-xs font-bold uppercase text-slate-700">
              {[
                { label: "Tổng quan", href: "#tong-quan" },
                { label: "Vị trí", href: "#vi-tri" },
                { label: "Chủ đầu tư", href: "#chu-dau-tu" },
                { label: "Quy mô", href: "#quy-mo" },
                { label: "Mặt bằng", href: "#mat-bang" },
                { label: "Thiết kế nội thất", href: "#noi-that" },
                { label: "Tiện ích", href: "#tien-ich" },
                { label: "Video", href: "#video" },
                { label: "Nhận thông tin", href: "#nhan-thong-tin" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="hover:text-[#d49a2a] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER */}
      <section id="trang-chu" className="relative w-full h-[460px] md:h-[580px] overflow-hidden bg-slate-900">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 via-transparent to-slate-950/55" />

        {/* Top-left Gold Project Crest */}
        <div className="absolute top-6 left-6 md:left-12 bg-white/85 backdrop-blur-xs px-5 py-3 border border-[#d49a2a]/40 shadow-md text-center">
          <Building2 className="w-7 h-7 text-[#d49a2a] mx-auto mb-1" />
          <div className="text-xs font-serif font-bold tracking-widest text-slate-800 uppercase">
            {data.hero.eyebrow || "HA LONG BAY VIEW"}
          </div>
          <div className="text-[9px] text-[#745d3c] uppercase tracking-wider">
            Ramada By Wyndham
          </div>
        </div>
      </section>

      {/* 3. TỔNG QUAN DỰ ÁN */}
      <section id="tong-quan" className="py-14 md:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-3.5">
            <h2 className="text-lg md:text-xl font-bold text-[#d49a2a] uppercase tracking-wide">
              TỔNG QUAN DỰ ÁN
            </h2>
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed text-justify">
              {data.business.aboutText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <p className="pt-1">
              <a
                href="#nhan-thong-tin"
                className="text-xs font-bold italic text-slate-800 hover:text-[#d49a2a]"
              >
                Chi tiết &gt;&gt; Tổng quan Dự án Hạ Long Bay View
              </a>
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="overflow-hidden shadow-lg border border-slate-100">
              <img
                src={data.overviewImage}
                alt="Tổng quan dự án Hạ Long Bay View"
                className="w-full h-[250px] md:h-[280px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. VỊ TRÍ ĐẮC ĐỊA (WARM BRONZE #745d3c WITH WATERMARK) */}
      <section id="vi-tri" className="relative py-14 md:py-18 bg-[#745d3c] text-white overflow-hidden">
        <div className="hidden lg:block absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 text-3xl font-bold tracking-[0.35em] text-white/10 uppercase select-none pointer-events-none whitespace-nowrap">
          HA LONG BAY VIEW
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <div className="bg-white p-1.5 shadow-xl">
              <img
                src={data.locationMapImage}
                alt="Bản đồ vị trí Hạ Long Bay View"
                className="w-full h-[240px] md:h-[260px] object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-6 space-y-3 text-xs leading-relaxed">
            <h2 className="text-lg md:text-xl font-bold text-[#f5b82e] uppercase tracking-wide">
              VỊ TRÍ ĐẮC ĐỊA
            </h2>
            <p className="text-amber-50/90 text-justify">{data.locationDescription}</p>
            <h3 className="text-sm font-bold text-[#f5b82e] uppercase pt-1">
              {data.locationViewTitle}
            </h3>
            <p className="text-amber-50/90 text-justify">{data.locationViewDesc}</p>
            <p className="pt-1">
              <a
                href="#nhan-thong-tin"
                className="font-bold italic text-white hover:text-[#f5b82e]"
              >
                Chi tiết &gt;&gt; Vị trí Dự án Hạ Long Bay View
              </a>
            </p>
            <p className="text-[11px] italic text-amber-200/80">
              Click vào ảnh để xem bản đồ quy hoạch phóng to
            </p>
          </div>
        </div>
      </section>

      {/* 5. GIỚI THIỆU CHỦ ĐẦU TƯ & CHÍNH SÁCH */}
      <section id="chu-dau-tu" className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-lg md:text-xl font-bold text-[#d49a2a] uppercase tracking-wide">
              GIỚI THIỆU CHỦ ĐẦU TƯ
            </h2>
            <div className="w-24 h-0.5 bg-[#d49a2a]/40 mx-auto mt-2" />
          </div>

          {/* Top Row: Developer Bio + Gold Wireframe Towers */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
            <div className="md:col-span-7 space-y-3 text-xs text-slate-600 leading-relaxed">
              <h3 className="text-sm font-bold text-slate-800 uppercase">
                {data.developerTitle}
              </h3>
              <p className="text-justify">{data.developerDesc}</p>
              <p className="pt-1">
                <a
                  href="#nhan-thong-tin"
                  className="font-bold italic text-slate-800 hover:text-[#d49a2a]"
                >
                  Chi tiết &gt;&gt; Chủ đầu tư Dự án Hạ Long Bay View
                </a>
              </p>
            </div>

            <div className="md:col-span-5 flex items-end justify-center gap-6 py-4">
              {/* Architectural Gold Tower Wireframes */}
              {[150, 175].map((height, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    style={{ height: `${height}px` }}
                    className="w-20 border-2 border-[#d49a2a] bg-gradient-to-b from-[#d49a2a]/25 to-[#d49a2a]/5 grid grid-cols-3 gap-1 p-1.5 shadow-md"
                  >
                    {Array.from({ length: 24 }).map((_, cell) => (
                      <div key={cell} className="border border-[#d49a2a]/45 bg-white/50" />
                    ))}
                  </div>
                  <div className="w-24 h-2 bg-[#745d3c] mt-0.5" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Sales Policy & Financial Policy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4 border-t border-slate-100">
            <div>
              <h3 className="text-xs font-bold text-[#d49a2a] uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                CHÍNH SÁCH BÁN HÀNG
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {data.salesPolicies.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d49a2a] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <a
                  href="#nhan-thong-tin"
                  className="text-xs font-bold italic text-slate-800 hover:text-[#d49a2a]"
                >
                  Chi tiết &gt;&gt; Chính sách bán hàng Hạ Long Bay View
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-[#d49a2a] uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                CHÍNH SÁCH ƯU ĐÃI TÀI CHÍNH
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {data.financialPolicies.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d49a2a] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <a
                  href="#nhan-thong-tin"
                  className="text-xs font-bold italic text-slate-800 hover:text-[#d49a2a]"
                >
                  Chi tiết &gt;&gt; Chính sách ưu đãi tài chính Hạ Long Bay View
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUY MÔ DỰ ÁN (WARM BRONZE #745d3c) */}
      <section id="quy-mo" className="relative py-14 md:py-18 bg-[#745d3c] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-2">
            <div className="overflow-hidden shadow-xl border border-amber-200/20">
              <img
                src={data.scaleImage}
                alt="Quy mô dự án Hạ Long Bay View"
                className="w-full h-[250px] md:h-[270px] object-cover"
              />
            </div>
            <p className="text-xs font-bold italic text-amber-100">
              Xem thêm &gt;&gt; Quy mô Dự án Hạ Long Bay View
            </p>
          </div>

          <div className="md:col-span-6 space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#f5b82e] uppercase tracking-wide">
              QUY MÔ DỰ ÁN
            </h2>
            <ul className="space-y-1.5 text-xs text-amber-50/95">
              {data.scaleSpecs.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#f5b82e]">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. MẶT BẰNG DỰ ÁN & 8. CĂN HỘ MẪU */}
      <section id="mat-bang" className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Floor Plan Section */}
          <div className="text-center mb-6">
            <h2 className="text-lg md:text-xl font-bold text-[#d49a2a] uppercase tracking-wide">
              MẶT BẰNG DỰ ÁN
            </h2>
            <div className="w-24 h-0.5 bg-[#d49a2a]/40 mx-auto mt-1.5" />
          </div>

          {/* Floor Tabs */}
          <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-2 mb-6 text-[11px] font-bold uppercase">
            {data.floorTabs.map((tab) => {
              const active = tab.id === activeFloor?.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFloorId(tab.id)}
                  className={`pb-1 transition-colors ${
                    active
                      ? "text-slate-900 border-b-2 border-[#d49a2a]"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Master Floorplate Blueprint */}
          {activeFloor && (
            <div className="border border-slate-200 p-4 md:p-6 bg-slate-50/50 mb-14 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-bold text-[#745d3c] uppercase">
                  View Vịnh Cửa Lục, Hồ Yết Kiêu
                </div>
                <h3 className="text-sm md:text-base font-extrabold text-slate-800 uppercase">
                  {activeFloor.title}
                </h3>
              </div>

              <div className="overflow-hidden bg-white border border-slate-200 p-2">
                <img
                  src={activeFloor.image}
                  alt={activeFloor.title}
                  className="w-full h-[280px] md:h-[340px] object-cover"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                <span>View Vịnh Hạ Long, Công viên Hạ Long, Sun World</span>
                <span className="inline-flex items-center gap-1 text-[#745d3c]">
                  <Compass className="w-4 h-4" /> Hướng Đông Nam đón gió biển
                </span>
              </div>
            </div>
          )}

          {/* CĂN HỘ MẪU HẠ LONG BAY VIEW */}
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-xl font-bold text-[#d49a2a] uppercase tracking-wide">
              CĂN HỘ MẪU HẠ LONG BAY VIEW
            </h2>
            <div className="w-24 h-0.5 bg-[#d49a2a]/40 mx-auto mt-1.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-14">
            {/* Main Left Sample Unit Card */}
            {mainSampleUnit && (
              <div className="md:col-span-8 border border-slate-200 p-4 bg-white shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#d49a2a]">HA LONG BAY VIEW</span>
                  <h3 className="text-sm font-extrabold text-slate-800 uppercase">
                    {mainSampleUnit.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-8">
                    <img
                      src={mainSampleUnit.image}
                      alt={mainSampleUnit.title}
                      className="w-full h-[220px] object-cover border border-slate-100"
                    />
                  </div>
                  <div className="sm:col-span-4 text-[10px] text-slate-600 space-y-1">
                    <div className="font-bold text-slate-800 uppercase mb-1">GHI CHÚ NỘI THẤT:</div>
                    {mainSampleUnit.rooms.map((r, idx) => (
                      <div key={idx}>{r}</div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap gap-6 text-[11px]">
                  <div>
                    <span className="text-slate-500">DIỆN TÍCH THÔNG THỦY:</span>{" "}
                    <strong className="text-slate-800">{mainSampleUnit.carpetArea}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">DIỆN TÍCH TIM TƯỜNG:</span>{" "}
                    <strong className="text-slate-800">{mainSampleUnit.wallArea}</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Right Stacked Clickable Units */}
            <div className="md:col-span-4 flex flex-col gap-4">
              {sideSampleUnits.map((unit) => (
                <button
                  key={unit.id}
                  type="button"
                  onClick={() => setSelectedSampleUnitId(unit.id)}
                  className="text-left border border-slate-200 p-3 bg-white hover:border-[#d49a2a] transition-colors flex-1"
                >
                  <div className="text-[11px] font-bold text-slate-800 uppercase mb-2 text-center">
                    {unit.title}
                  </div>
                  <img
                    src={unit.image}
                    alt={unit.title}
                    className="w-full h-28 object-cover mb-2"
                  />
                  <div className="text-[10px] text-slate-500 text-center">
                    Thông thủy: <strong>{unit.carpetArea}</strong> | Tim tường:{" "}
                    <strong>{unit.wallArea}</strong>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 9. THIẾT KẾ NỘI THẤT */}
          <div id="noi-that" className="text-center mb-8">
            <h2 className="text-lg md:text-xl font-bold text-[#d49a2a] uppercase tracking-wide">
              THIẾT KẾ NỘI THẤT
            </h2>
            <div className="w-24 h-0.5 bg-[#d49a2a]/40 mx-auto mt-1.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-6 h-[260px] md:h-[310px] overflow-hidden">
              <img
                src={data.interiorGallery[0]}
                alt="Nội thất phòng tắm đá cẩm thạch"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[260px] md:h-[310px]">
              {data.interiorGallery.slice(1, 5).map((imgUrl, idx) => (
                <div key={idx} className="overflow-hidden h-full">
                  <img
                    src={imgUrl}
                    alt={`Thiết kế nội thất ${idx + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. TIỆN ÍCH DỰ ÁN (WARM BRONZE #745d3c) */}
      <section id="tien-ich" className="py-14 md:py-18 bg-[#745d3c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-xl font-bold text-[#f5b82e] uppercase tracking-wide">
              TIỆN ÍCH DỰ ÁN
            </h2>
            <div className="w-24 h-0.5 bg-[#f5b82e]/40 mx-auto mt-1.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 relative">
              <div className="overflow-hidden shadow-xl border border-amber-100/20">
                <img
                  src={data.amenitiesImage}
                  alt="Tiện ích bể bơi Hạ Long Bay View"
                  className="w-full h-[250px] md:h-[280px] object-cover"
                />
              </div>
              <div className="flex justify-center gap-1.5 mt-3">
                {[0, 1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    className={`w-2 h-2 rounded-full ${
                      dot === 0 ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="md:col-span-5 space-y-2 text-xs">
              <ul className="space-y-1.5 text-amber-50">
                {data.amenitiesList.map((am, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#f5b82e]">•</span>
                    <span>{am}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                <a
                  href="#nhan-thong-tin"
                  className="font-bold italic text-white hover:text-[#f5b82e]"
                >
                  Chi tiết &gt;&gt; Tiện ích Dự án
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. VIDEO SECTION */}
      <section id="video" className="py-14 md:py-18 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            VIDEO
          </h2>

          {/* Featured Large Videos */}
          {featuredVideos.map((vid) => (
            <div key={vid.id} className="space-y-2">
              <div
                onClick={() => setActiveVideoModal(vid)}
                className="relative group cursor-pointer overflow-hidden bg-black shadow-md h-[260px] md:h-[380px]"
              >
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="w-16 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white" />
                  </div>
                </div>
                <div className="absolute top-3 left-4 text-white text-xs font-medium drop-shadow">
                  {vid.title}
                </div>
                <div className="absolute bottom-3 left-3 bg-black/75 text-white text-[10px] px-2.5 py-1 rounded-xs">
                  Xem trên YouTube
                </div>
              </div>
              <p className="text-center text-[11px] font-bold uppercase text-slate-600">
                {vid.caption}
              </p>
            </div>
          ))}

          {/* 3-Column Sub Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            {subVideos.map((sub) => (
              <div
                key={sub.id}
                onClick={() => setActiveVideoModal(sub)}
                className="cursor-pointer group space-y-2"
              >
                <div className="relative h-36 overflow-hidden bg-black shadow-xs">
                  <img
                    src={sub.thumbnail}
                    alt={sub.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-8 rounded bg-red-600 text-white flex items-center justify-center shadow">
                      <Play className="w-4 h-4 fill-white" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-[#d49a2a]">
                  {sub.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. NHẬN THÔNG TIN (COASTAL TWILIGHT LEAD FORM) */}
      <section
        id="nhan-thong-tin"
        className="relative py-16 md:py-20 bg-slate-900 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${data.hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative z-10 max-w-md mx-auto px-4 text-center space-y-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#f5b82e] text-[#f5b82e] flex items-center justify-center mx-auto">
            <MessageCircle className="w-6 h-6" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-[#f5b82e] leading-relaxed">
            Liên hệ với chúng tôi ngay hôm nay để được các chuyên gia tư vấn cụ thể nhất về dự án.
          </p>

          <form onSubmit={handleLeadSubmit} className="space-y-3 pt-2">
            <input
              type="text"
              required
              placeholder="Nhập tên của bạn"
              className="w-full bg-slate-900/75 border border-slate-500/60 px-4 py-2.5 text-xs text-white placeholder-slate-300 focus:outline-none focus:border-[#f5b82e]"
            />
            <input
              type="tel"
              required
              placeholder="Nhập số điện thoại"
              className="w-full bg-slate-900/75 border border-slate-500/60 px-4 py-2.5 text-xs text-white placeholder-slate-300 focus:outline-none focus:border-[#f5b82e]"
            />
            <input
              type="email"
              required
              placeholder="Nhập địa chỉ email"
              className="w-full bg-slate-900/75 border border-slate-500/60 px-4 py-2.5 text-xs text-white placeholder-slate-300 focus:outline-none focus:border-[#f5b82e]"
            />
            <div className="pt-1">
              <button
                type="submit"
                className="px-7 py-2 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs uppercase rounded-xs shadow-lg transition-colors"
              >
                NHẬN THÔNG TIN
              </button>
            </div>
            {formSent && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 pt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Chuyên viên dự án đã tiếp nhận yêu cầu của bạn!</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* 13. TIN TỨC TỪ CHỦ ĐẦU TƯ & TESTIMONIAL BANNER */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-lg md:text-xl font-bold text-[#d49a2a] uppercase tracking-wide">
              TIN TỨC TỪ CHỦ ĐẦU TƯ
            </h2>
            <div className="w-24 h-0.5 bg-[#d49a2a]/40 mx-auto mt-1.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {(data.news || []).map((item) => (
              <article
                key={item.id}
                className="border border-slate-200 bg-white shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xs font-bold text-slate-800 line-clamp-1 mb-1">
                      {item.title}
                    </h3>
                    <div className="text-[10px] text-slate-400 mb-2">{item.date}</div>
                    <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <a
                    href="#nhan-thong-tin"
                    className="inline-block px-3 py-1 border border-sky-500 text-sky-600 text-[10px] font-semibold uppercase hover:bg-sky-500 hover:text-white transition-colors"
                  >
                    XEM THÊM
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Dark Rounded Testimonial & Director Consultation Box */}
          {data.testimonials && data.testimonials[0] && (
            <div className="rounded-xl bg-[#23272d] text-white overflow-hidden shadow-xl">
              <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={data.testimonials[0].avatar}
                  alt={data.testimonials[0].author}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#f59e0b] shrink-0"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-[#f59e0b]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-200 italic leading-relaxed">
                    “{data.testimonials[0].content}”
                  </p>
                  <div className="text-xs font-bold text-[#f59e0b]">
                    {data.testimonials[0].author} / {data.testimonials[0].role}
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1d22] px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-700/70">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  TƯ VẤN TRỰC TIẾP TỪ GIÁM ĐỐC KINH DOANH DỰ ÁN
                </span>
                <a
                  href="#nhan-thong-tin"
                  className="px-4 py-1 border border-slate-400 rounded text-[11px] font-bold uppercase text-white hover:bg-[#f59e0b] hover:border-[#f59e0b] transition-colors"
                >
                  ĐĂNG KÝ
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM COPYRIGHT BAR & FLOATING DOWNLOAD PILL */}
      <footer className="bg-[#181b20] text-slate-400 py-4 text-center text-[11px] relative">
        <span>
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
        </span>
        <a
          href="#nhan-thong-tin"
          className="fixed bottom-4 right-4 z-40 bg-[#0072bc] hover:bg-[#005a96] text-white text-xs font-semibold px-4 py-2 rounded-t-md shadow-lg flex items-center gap-2"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Tải đầy đủ tài liệu dự án</span>
        </a>
      </footer>

      {/* VIDEO MODAL */}
      {activeVideoModal && (
        <div
          onClick={() => setActiveVideoModal(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 text-white">
              <span className="text-xs font-bold">{activeVideoModal.title}</span>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-[360px] bg-black flex items-center justify-center">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-3 shadow-lg">
                  <Play className="w-7 h-7 fill-white" />
                </div>
                <p className="text-sm font-bold">{activeVideoModal.caption}</p>
                <p className="text-xs text-slate-300 mt-1">
                  Hotline hỗ trợ xem thực tế sa bàn: {data.business.phone[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
