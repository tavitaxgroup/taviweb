"use client";

import React, { useState } from "react";
import {
  Building2,
  ShieldCheck,
  Factory,
  Cpu,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Layers,
  ThermometerSnowflake,
  Wind,
  FileSpreadsheet,
  Award
} from "lucide-react";
import { adaptClonedTemplateData, type ClonedTemplateInput } from "@/lib/demo/clonedTemplateUtils";
import { phongKham12DefaultData, type PhongKham12Data } from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  companyName?: string;
}

export function DemoTemplateRenderer({ data, companyName }: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<PhongKham12Data>(phongKham12DefaultData, {
    ...(data || {}),
    ...(companyName ? { companyName } : {})
  });

  const [areaM2, setAreaM2] = useState<number>(200);
  const [selectedPanelId, setSelectedPanelId] = useState<string>(
    merged.panelCatalog[0]?.id || "pn-1"
  );
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [projectType, setProjectType] = useState("Phòng mổ & Phòng sạch Bệnh viện");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const unitPriceMap: Record<string, number> = {
    "pn-1": 520000,
    "pn-2": 465000,
    "pn-3": 265000,
    "pn-4": 680000
  };
  const estimatedCost = (unitPriceMap[selectedPanelId] || 450000) * areaM2;

  return (
    <div id="top" className="min-h-screen bg-[#f4f9fd] font-sans text-[#0c2d57] antialiased">
      {/* ==================== 1. TOP ENGINEERING UTILITY BAR & HEADER ==================== */}
      <div className="bg-[#0c2d57] text-[11px] text-sky-100">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-2 px-4 py-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <Factory className="h-3.5 w-3.5 text-[#38bdf8]" />2 Nhà Máy Sản Xuất 15.000m² — 90% Dây
              Chuyền Tự Động
            </span>
            <span className="hidden md:inline text-sky-300">|</span>
            <span className="hidden md:inline">
              Tiêu chuẩn: ISO 14644-1 • GMP-WHO • GSP Bộ Y Tế
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>
              Hotline Kỹ Thuật:{" "}
              <strong className="font-bold text-[#38bdf8]">{merged.business.phone[0]}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/95 shadow-2xs backdrop-blur-xs">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3.5">
          {/* Exact PANEL HOME Architectural Blue Tower + Green Window Logo */}
          <a href="#top" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 flex-col items-center justify-end rounded-lg bg-gradient-to-b from-[#0284c7] to-[#0369a1] p-1.5 text-white shadow-sm">
              <Building2 className="h-6 w-6 text-white" />
              {/* 2x2 Green Window Grid matching reference logo */}
              <div className="mt-0.5 grid grid-cols-2 gap-0.5 rounded-2xs bg-white p-0.5">
                <span className="h-1.5 w-1.5 bg-[#16a34a]" />
                <span className="h-1.5 w-1.5 bg-[#16a34a]" />
                <span className="h-1.5 w-1.5 bg-[#16a34a]" />
                <span className="h-1.5 w-1.5 bg-[#16a34a]" />
              </div>
            </div>
            <div>
              <span className="block text-lg font-black tracking-tight text-[#0c2d57]">
                {merged.business.name}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
                MEDICAL CLEANROOM &amp; PANEL
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wide text-[#0c2d57] lg:flex">
            <a href="#top" className="text-[#0284c7]">
              Trang chủ
            </a>
            <a href="#giai-phap-phong-sach" className="hover:text-[#0284c7]">
              Phòng Sạch Y Tế
            </a>
            <a href="#tam-panel-cach-nhiet" className="hover:text-[#0284c7]">
              Tấm Panel
            </a>
            <a href="#quy-trinh-thi-cong" className="hover:text-[#0284c7]">
              Quy Trình
            </a>
            <a href="#du-an-benh-vien" className="hover:text-[#0284c7]">
              Dự Án Bệnh Viện
            </a>
            <a href="#bao-gia-du-an" className="hover:text-[#0284c7]">
              Báo Giá
            </a>
          </nav>

          {/* Right CTA */}
          <a
            href="#bao-gia-du-an"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#4f46e5] px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition hover:opacity-95"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Tư Vấn Phòng Sạch</span>
          </a>
        </div>
      </header>

      {/* ==================== 2. EXACT HERO BANNER MATCHING PK015-phong_kham_12.jpg ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#eef7fc] via-[#e2f2fc] to-[#0284c7]">
        {/* Right side Cleanroom Corridor Background with soft left fade */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <img
            src={merged.hero.backgroundImage}
            alt="Hành lang phòng sạch bệnh viện"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef7fc] via-[#eef7fc]/85 to-sky-500/20" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-4 py-16 lg:min-h-[540px] lg:grid-cols-12">
          {/* Left Hero Typography matching exact screenshot */}
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0284c7] shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-[#16a34a]" />
              <span>{merged.hero.eyebrow}</span>
            </div>

            <h1 className="whitespace-pre-line text-3xl font-black uppercase leading-[1.15] tracking-tight text-[#0c2d57] sm:text-5xl">
              {merged.hero.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-[#334e68] sm:text-base">
              2 nhà máy 15.000m², 90% dây chuyền tự động, thi công phòng sạch, kho lạnh và
              nhà lắp ghép đạt chuẩn Bộ Y Tế &amp; GMP-WHO.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={merged.hero.ctaLink}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#6366f1] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition hover:scale-[1.02]"
              >
                <span>{merged.hero.ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#tam-panel-cach-nhiet"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0c2d57] bg-white/90 px-6 py-3 text-xs font-extrabold uppercase text-[#0c2d57] transition hover:bg-[#0c2d57] hover:text-white"
              >
                <span>Xem Bảng Thông Số Panel</span>
              </a>
            </div>
          </div>

          {/* Right Engineer Mascot & Insulated Panel Showcase Card */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-5">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-b from-sky-500/90 to-[#0284c7]/95 p-6 text-white shadow-2xl backdrop-blur-md">
              {/* Mascot Hard-Hat Engineer Badge */}
              <div className="flex items-center gap-3.5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-amber-300 bg-white text-3xl shadow-md">
                  🐼👷
                </div>
                <div>
                  <span className="inline-block rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-white">
                    AI Agent MONA • Kỹ Sư Phòng Sạch
                  </span>
                  <h3 className="mt-1 text-base font-black">
                    Tấm Panel Cách Nhiệt Kháng Khuẩn Thế Hệ Mới
                  </h3>
                </div>
              </div>

              {/* 3D Cross-Section Panel Layer Diagram */}
              <div className="mt-5 space-y-2 rounded-2xl bg-white/15 p-4 text-xs">
                <div className="flex items-center justify-between border-b border-white/15 pb-1.5">
                  <span className="font-bold text-sky-100">Lớp 1: Tôn mạ hợp kim kháng khuẩn</span>
                  <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold">
                    0.45 – 0.60mm
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/15 pb-1.5">
                  <span className="font-bold text-amber-200">
                    Lớp 2: Lõi cách nhiệt PU / PIR / Rockwool
                  </span>
                  <span className="rounded bg-amber-400/30 px-2 py-0.5 text-[10px] font-bold text-amber-100">
                    Chống cháy EI60–120
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sky-100">Lớp 3: Ngàm khóa Camlock kín khí</span>
                  <span className="rounded bg-emerald-400/30 px-2 py-0.5 text-[10px] font-bold text-emerald-100">
                    Kín khít 100%
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-sky-100">
                <span>✓ Chống thất thoát nhiệt &amp; áp suất</span>
                <span>✓ Thi công nhanh gấp 3 lần</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. FOUR FACTORY & CLEANROOM METRICS ==================== */}
      <section className="relative z-20 mx-auto -mt-8 max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {merged.factoryMetrics.map((m, idx) => {
            const icons = [Factory, Cpu, ShieldCheck, Building2];
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={m.id}
                className="rounded-2xl border border-sky-100 bg-white p-5 shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#0284c7]">{m.value}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#0284c7]">
                    <IconComp className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-2 text-xs font-extrabold uppercase tracking-wide text-[#0c2d57]">
                  {m.label}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-gray-500">{m.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 4. GIẢI PHÁP THI CÔNG PHÒNG SẠCH Y TẾ & BỆNH VIỆN ==================== */}
      <section id="giai-phap-phong-sach" className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="text-center">
          <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0284c7]">
            GIẢI PHÁP CHUYÊN SÂU CHO Y TẾ &amp; DƯỢC PHẨM
          </span>
          <h2 className="mt-2 text-2xl font-black uppercase text-[#0c2d57] sm:text-3xl">
            Thi Công Phòng Sạch Bệnh Viện, Phòng Mổ &amp; Kho Lạnh GSP
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-gray-500">
            Đáp ứng nghiêm ngặt các tiêu chuẩn kiểm soát hạt bụi, vi sinh, nhiệt độ, độ ẩm và
            chênh áp của Bộ Y Tế &amp; Tổ chức Y tế Thế giới (GMP-WHO).
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
          {merged.cleanroomSolutions.map((sol) => (
            <div
              key={sol.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition hover:shadow-xl sm:flex-row"
            >
              <div className="relative sm:w-5/12">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="h-56 w-full object-cover sm:h-full"
                />
                <span className="absolute left-3 top-3 rounded-md bg-[#0c2d57]/90 px-2.5 py-1 text-[10px] font-bold text-[#38bdf8]">
                  {sol.isoClass}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-base font-extrabold text-[#0c2d57] group-hover:text-[#0284c7]">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    {sol.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {sol.specs.map((sp) => (
                      <li
                        key={sp}
                        className="flex items-start gap-2 text-[11px] font-medium text-gray-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#16a34a]" />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-2">
                  <a
                    href="#bao-gia-du-an"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0284c7] hover:underline"
                  >
                    <span>Yêu cầu bản vẽ &amp; dự toán</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 5. DANH MỤC TẤM PANEL CÁCH NHIỆT SẢN XUẤT TẠI NHÀ MÁY ==================== */}
      <section id="tam-panel-cach-nhiet" className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0284c7]">
                SẢN XUẤT TRỰC TIẾP TẠI 2 NHÀ MÁY 15.000M²
              </span>
              <h2 className="mt-1 text-2xl font-black uppercase text-[#0c2d57] sm:text-3xl">
                Tấm Panel Cách Nhiệt &amp; Thiết Bị Phòng Sạch
              </h2>
            </div>
            <a
              href="#bao-gia-du-an"
              className="rounded-full bg-[#0284c7] px-5 py-2 text-xs font-extrabold text-white hover:bg-[#0369a1]"
            >
              Tải Catalogue Kỹ Thuật PDF
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merged.panelCatalog.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fbff] transition hover:-translate-y-1 hover:border-[#0284c7] hover:shadow-lg"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-2.5 top-2.5 rounded bg-[#7c3aed] px-2.5 py-0.5 text-[10px] font-bold text-white">
                      {item.badge}
                    </span>
                    <span className="absolute bottom-2 right-2 rounded bg-[#0c2d57]/85 px-2 py-0.5 text-[10px] font-mono text-white">
                      {item.code}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-extrabold text-[#0c2d57]">{item.name}</h3>

                    <div className="mt-3 space-y-1.5 border-t border-gray-200 pt-2.5 text-[11px] text-gray-600">
                      <p className="flex justify-between">
                        <span className="text-gray-400">Độ dày:</span>
                        <strong className="text-gray-800">{item.thickness}</strong>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-400">Tỷ trọng:</span>
                        <strong className="text-gray-800">{item.density}</strong>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-gray-400">Chống cháy:</span>
                        <strong className="text-[#16a34a]">{item.fireRating}</strong>
                      </p>
                      <p className="pt-1 text-[10px] text-gray-500">
                        Ứng dụng: {item.application}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-sky-100 bg-white px-4 py-3">
                  <div>
                    <span className="block text-[9px] uppercase text-gray-400">
                      Đơn giá nhà máy
                    </span>
                    <span className="text-sm font-black text-[#0284c7]">
                      {item.pricePerM2}
                    </span>
                  </div>
                  <a
                    href="#bao-gia-du-an"
                    onClick={() => setSelectedPanelId(item.id)}
                    className="rounded-lg bg-[#0c2d57] px-3 py-1.5 text-[11px] font-bold text-white hover:bg-[#0284c7]"
                  >
                    Tính Giá
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. QUY TRÌNH 4 BƯỚC THI CÔNG PHÒNG SẠCH ==================== */}
      <section
        id="quy-trinh-thi-cong"
        className="bg-gradient-to-r from-[#0c2d57] via-[#0f3b70] to-[#0284c7] py-16 text-white"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-300">
              QUY TRÌNH TỔNG THẦU KHÉP KÍN
            </span>
            <h2 className="mt-1 text-2xl font-black uppercase sm:text-3xl">
              Từ Nhà Máy Sản Xuất Tới Nghiệm Thu Phòng Sạch Bộ Y Tế
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merged.workflowSteps.map((wf) => (
              <div
                key={wf.step}
                className="relative rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xs"
              >
                <span className="text-3xl font-black text-[#38bdf8]">{wf.step}</span>
                <h3 className="mt-3 text-sm font-extrabold uppercase text-white">
                  {wf.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-sky-100">
                  {wf.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. DỰ ÁN BỆNH VIỆN & NHÀ MÁY DƯỢC TIÊU BIỂU ==================== */}
      <section id="du-an-benh-vien" className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0284c7]">
            NĂNG LỰC THỰC THI ĐÃ ĐƯỢC KIỂM CHỨNG
          </span>
          <h2 className="mt-1 text-2xl font-black uppercase text-[#0c2d57] sm:text-3xl">
            Dự Án Phòng Sạch Y Tế &amp; Bệnh Viện Tiêu Biểu
          </h2>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-3">
          {merged.hospitalProjects.map((proj) => (
            <div
              key={proj.id}
              className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded bg-[#0284c7] px-2.5 py-1 text-[10px] font-bold text-white">
                  {proj.standard}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-extrabold text-[#0c2d57]">{proj.name}</h3>
                <p className="mt-1 text-xs font-semibold text-[#0284c7]">{proj.client}</p>
                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-[11px] text-gray-500">
                  <span>Quy mô: {proj.area}</span>
                  <span>📍 {proj.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 8. INTERACTIVE PANEL CALCULATOR & TECHNICAL QUOTE FORM ==================== */}
      <section id="bao-gia-du-an" className="bg-[#eaf4fc] py-16">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-8 rounded-3xl bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-12">
            {/* Left: Interactive Area & Panel Cost Calculator (6 cols) */}
            <div className="flex flex-col justify-between rounded-2xl bg-[#0c2d57] p-6 text-white sm:p-8 lg:col-span-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-[#38bdf8]">
                  <FileSpreadsheet className="h-4 w-4" />
                  CÔNG CỤ TÍNH KHÁI TOÁN VẬT TƯ PANEL
                </span>
                <h3 className="mt-2 text-xl font-black">
                  Ước Tính Chi Phí Tấm Panel Tại Nhà Máy
                </h3>

                <div className="mt-6 space-y-5 text-xs">
                  <div>
                    <label className="mb-2 block font-bold text-sky-200">
                      1. Chọn chủng loại tấm Panel phòng sạch:
                    </label>
                    <select
                      aria-label="Chọn tấm Panel"
                      value={selectedPanelId}
                      onChange={(e) => setSelectedPanelId(e.target.value)}
                      className="w-full rounded-xl bg-white/10 px-4 py-3 text-xs font-bold text-white focus:outline-2 focus:outline-[#38bdf8]"
                    >
                      {merged.panelCatalog.map((p) => (
                        <option key={p.id} value={p.id} className="text-gray-900">
                          {p.name} ({p.pricePerM2})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between font-bold text-sky-200">
                      <span>2. Tổng diện tích vách &amp; trần dự kiến:</span>
                      <span className="rounded bg-[#0284c7] px-2.5 py-0.5 text-white">
                        {areaM2} m²
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={3000}
                      step={50}
                      value={areaM2}
                      onChange={(e) => setAreaM2(Number(e.target.value))}
                      className="w-full accent-[#38bdf8]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-sky-400/30 bg-white/10 p-5">
                <span className="text-[11px] uppercase text-sky-200">
                  Dự toán vật tư Panel tạm tính ({areaM2} m²):
                </span>
                <p className="mt-1 text-2xl font-black text-[#38bdf8] sm:text-3xl">
                  {estimatedCost.toLocaleString("vi-VN")} ₫
                </p>
                <p className="mt-1 text-[11px] text-sky-200">
                  * Giá xuất xưởng tại nhà máy {merged.business.name}. Chiết khấu thêm 5–12%
                  cho dự án bệnh viện &amp; nhà máy dược trên 500m².
                </p>
              </div>
            </div>

            {/* Right: Request Engineering Quote Form (6 cols) */}
            <div className="lg:col-span-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#7c3aed]">
                ĐĂNG KÝ KHẢO SÁT &amp; NHẬN BẢN VẼ THIẾT KẾ MIỄN PHÍ
              </span>
              <h3 className="mt-1 text-2xl font-black text-[#0c2d57]">
                Nhận Báo Giá Thi Công Phòng Sạch Trọn Gói
              </h3>

              {quoteSubmitted ? (
                <div className="mt-6 rounded-2xl bg-green-50 p-6 text-center text-xs text-green-900">
                  <CheckCircle2 className="mx-auto mb-2 h-10 w-10 text-[#16a34a]" />
                  <p className="text-sm font-extrabold">
                    Đã tiếp nhận yêu cầu báo giá kỹ thuật!
                  </p>
                  <p className="mt-1">
                    Phòng Dự Án {merged.business.name} sẽ liên hệ SĐT{" "}
                    <strong>{clientPhone}</strong> để gửi bảng bóc tách khối lượng cho hạng
                    mục <strong>{projectType}</strong> ({areaM2} m²).
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuoteSubmitted(true);
                  }}
                  className="mt-5 space-y-4 text-xs"
                >
                  <div>
                    <label className="mb-1 block font-bold text-gray-700">
                      Họ tên / Đơn vị Chủ đầu tư *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Ví dụ: Bệnh viện Đa khoa / Công ty Dược..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#0284c7] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block font-bold text-gray-700">
                      Số điện thoại nhận báo giá *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="Nhập số điện thoại..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#0284c7] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block font-bold text-gray-700">
                      Hạng mục cần tư vấn
                    </label>
                    <select
                      aria-label="Hạng mục cần tư vấn"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#0284c7] focus:outline-none"
                    >
                      <option value="Phòng mổ & Phòng sạch Bệnh viện">
                        Phòng mổ &amp; Phòng sạch Bệnh viện (ISO Class 5–8)
                      </option>
                      <option value="Nhà máy Dược phẩm / Mỹ phẩm GMP">
                        Nhà máy Dược phẩm / Mỹ phẩm chuẩn GMP-WHO
                      </option>
                      <option value="Kho lạnh bảo quản Vắc-xin & Dược phẩm GSP">
                        Kho lạnh bảo quản Vắc-xin &amp; Dược phẩm GSP
                      </option>
                      <option value="Mua vật tư Tấm Panel cách nhiệt giá nhà máy">
                        Mua vật tư Tấm Panel cách nhiệt giá nhà máy
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition hover:opacity-95"
                  >
                    Gửi Yêu Cầu Báo Giá Ngay
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 9. FOOTER ==================== */}
      <footer className="bg-[#081f3d] pt-12 text-xs text-sky-100">
        <div className="mx-auto max-w-[1200px] px-4 pb-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-lg font-black text-white">
                {merged.business.name}
              </span>
              <p className="mt-3 leading-relaxed text-sky-200/80">
                {merged.business.aboutText[0]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {merged.certifications.slice(0, 3).map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 rounded bg-white/10 px-2.5 py-1 text-[10px] font-bold text-[#38bdf8]"
                  >
                    <Award className="h-3 w-3" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-extrabold uppercase text-white">
                Giải Pháp Phòng Sạch
              </h4>
              <ul className="space-y-2 text-sky-200/80">
                <li>
                  <a href="#giai-phap-phong-sach" className="hover:text-white">
                    Phòng mổ bệnh viện áp lực dương
                  </a>
                </li>
                <li>
                  <a href="#giai-phap-phong-sach" className="hover:text-white">
                    Phòng sạch nhà máy Dược GMP
                  </a>
                </li>
                <li>
                  <a href="#giai-phap-phong-sach" className="hover:text-white">
                    Phòng Lab xét nghiệm PCR &amp; IVF
                  </a>
                </li>
                <li>
                  <a href="#giai-phap-phong-sach" className="hover:text-white">
                    Kho lạnh bảo quản vắc-xin GSP
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-extrabold uppercase text-white">
                Sản Phẩm Nhà Máy
              </h4>
              <ul className="space-y-2 text-sky-200/80">
                <li>
                  <a href="#tam-panel-cach-nhiet" className="hover:text-white">
                    Panel PU/PIR kháng khuẩn y tế
                  </a>
                </li>
                <li>
                  <a href="#tam-panel-cach-nhiet" className="hover:text-white">
                    Panel Rockwool chống cháy EI60-120
                  </a>
                </li>
                <li>
                  <a href="#tam-panel-cach-nhiet" className="hover:text-white">
                    Panel EPS tỷ trọng cao
                  </a>
                </li>
                <li>
                  <a href="#tam-panel-cach-nhiet" className="hover:text-white">
                    Cửa tự động phòng mổ &amp; Air Shower
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-extrabold uppercase text-white">
                Thông Tin Liên Hệ
              </h4>
              <ul className="space-y-2.5 text-sky-200/80">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#38bdf8]" />
                  <span>{merged.business.phone.join(" — ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#38bdf8]" />
                  <span>{merged.business.email[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-[#38bdf8]" />
                  <span>{merged.business.workingHours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-[11px] text-sky-300/70">
          © Bản quyền thuộc về <strong className="text-white">{merged.business.name}</strong> |
          Premium Website Design by <strong className="text-white">MONA.Media</strong>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
