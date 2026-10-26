"use client";

import React, { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Cpu,
  Layers,
  FlaskConical,
  ShieldCheck,
  Search,
  Check,
  X,
  ArrowRight,
  Activity,
  Sparkles,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa11DefaultData,
  NhaKhoa11Data,
  NhaKhoa11Equipment,
} from "../../data/mockData";

interface Props {
  companyData?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ companyData }: Props) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData<NhaKhoa11Data>(
        nhaKhoa11DefaultData,
        companyData
      ),
    [companyData]
  );

  const [activeCat, setActiveCat] = useState<string>("all");
  const [selectedEq, setSelectedEq] = useState<NhaKhoa11Equipment | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);

  const filteredEquipment = useMemo(() => {
    if (activeCat === "all") return data.equipment;
    return data.equipment.filter((item) => item.category === activeCat);
  }, [data.equipment, activeCat]);

  return (
    <div className="min-h-screen bg-[#f4f8fb] font-sans text-[#0f172a] antialiased selection:bg-[#0284c7] selection:text-white">
      {/* 1. HIGH-TECH LAB TOP STATUS BAR */}
      <div className="border-b border-[#0284c7]/30 bg-[#0b1528] text-[11px] text-[#94a3b8]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between px-4 py-2">
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1.5 text-[#38bdf8]">
              <Activity className="h-3.5 w-3.5" />
              ISO 13485:2016 DIGITAL DENTAL LAB &amp; 3D BIO-PRINTING
            </span>
            <span className="hidden md:inline">{data.business.address}</span>
          </div>
          <div className="flex items-center gap-4 text-white">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#06b6d4]" />
              Hotline Kỹ Thuật Labo: <strong>{data.business.phone[0]}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 2. STERILE LAB STICKY HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#bae6fd] bg-white/95 shadow-xs backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5">
          {/* Lab Logo */}
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#38bdf8] bg-gradient-to-br from-[#0284c7] to-[#06b6d4] text-white shadow-[0_0_18px_rgba(6,182,212,0.35)]">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-base font-black tracking-wider text-[#0f172a] uppercase md:text-lg">
                {data.business.name}
              </span>
              <span className="block text-[10px] font-bold tracking-[0.2em] text-[#0284c7] uppercase">
                3D BIO-PRINTING &amp; IMPLANT SYSTEMS
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {[
              { label: "TRANG CHỦ", href: "#top" },
              { label: "MÁY IN 3D & VẬT LIỆU", href: "#he-thong-in-3d" },
              { label: "QUY TRÌNH CAD/CAM", href: "#quy-trinh-so" },
              { label: "TIN KHOA HỌC", href: "#tin-cong-nghe" },
              { label: "LIÊN HỆ LABO", href: "#footer-lab" },
            ].map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-extrabold tracking-wider uppercase transition ${
                  idx === 0
                    ? "text-[#0284c7]"
                    : "text-[#334155] hover:text-[#0284c7]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="rounded-lg bg-gradient-to-r from-[#0284c7] to-[#06b6d4] px-4 py-2.5 text-xs font-extrabold tracking-wider text-white uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)] transition hover:opacity-95"
            >
              GỬI FILE STL / ĐẶT IN 3D
            </button>
          </div>
        </div>
      </header>

      {/* 3. HIGH-TECH 3D LAB & BLUE LED CABINET HERO SECTION */}
      <section
        id="top"
        className="relative overflow-hidden bg-[#071120] py-14 text-white md:py-20"
      >
        {/* Glowing Cyan Lab LED Backlight Effect */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#06b6d4]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-0 h-80 w-80 rounded-full bg-[#0284c7]/25 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/40 bg-[#0284c7]/20 px-4 py-1 text-[11px] font-bold tracking-widest text-[#38bdf8] uppercase">
              <Sparkles className="h-3.5 w-3.5" /> {data.hero.eyebrow}
            </span>
            <h1 className="mt-4 text-2xl leading-tight font-black tracking-wide uppercase sm:text-4xl">
              {data.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#cbd5e1]">
              {data.hero.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={data.hero.ctaLink || "#he-thong-in-3d"}
                className="inline-flex items-center gap-2 rounded-lg bg-[#06b6d4] px-6 py-3 text-xs font-black tracking-wider text-[#071120] uppercase shadow-[0_0_20px_rgba(6,182,212,0.45)] transition hover:bg-[#22d3ee]"
              >
                {data.hero.ctaText} <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="rounded-lg border border-[#38bdf8]/60 bg-white/5 px-6 py-3 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-xs transition hover:bg-white/15"
              >
                NHẬN BẢNG GIÁ ĐẠI LÝ &amp; PHÒNG KHÁM
              </button>
            </div>

            {/* 4 Lab Metrics Strip */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {data.labMetrics.map((m) => (
                <div
                  key={m.id}
                  className="rounded-xl border border-[#38bdf8]/30 bg-[#0f1f38]/80 p-3.5 backdrop-blur-xs"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-[#38bdf8]">
                      {m.value}
                    </span>
                    <span className="text-xs font-bold text-[#67e8f9]">
                      {m.unit}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-snug text-[#94a3b8]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right 3D Bio-Printer Chamber & Implant Vial Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#38bdf8]/50 bg-[#0c1b33] p-4 shadow-[0_0_35px_rgba(6,182,212,0.28)]">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5 text-[11px]">
                <span className="flex items-center gap-2 font-bold text-[#38bdf8]">
                  <span className="h-2 w-2 rounded-full bg-[#22d3ee]" />
                  BUỒNG IN 3D LASER SLA • TRẠNG THÁI: ACTIVE
                </span>
                <span className="rounded-xs bg-[#0284c7]/40 px-2 py-0.5 font-mono text-[10px] text-[#bae6fd]">
                  405nm UV LASER
                </span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#38bdf8]/30">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/90 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-lg border border-[#38bdf8]/40 bg-[#071120]/85 px-4 py-2.5 backdrop-blur-xs">
                  <div>
                    <p className="text-[10px] font-bold text-[#38bdf8] uppercase">
                      TỦ BẢO QUẢN LỌ TRỤ IMPLANT &amp; MÁY IN 3D
                    </p>
                    <p className="text-xs font-bold text-white">
                      Chuẩn Phòng Sạch Vô Khuẩn Áp Lực Dương
                    </p>
                  </div>
                  <FlaskConical className="h-6 w-6 text-[#22d3ee]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4-COLUMN DIGITAL DENTAL 3D PRINTERS & IMPLANT VIAL SHOWCASE */}
      <section
        id="he-thong-in-3d"
        className="mx-auto max-w-[1200px] px-4 py-16"
      >
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-[#0284c7] uppercase">
              TRANG THIẾT BỊ &amp; VẬT LIỆU SINH HỌC
            </span>
            <h2 className="mt-1 text-2xl font-black text-[#0f172a] uppercase">
              Hệ Thống Máy In 3D, Lọ Trụ Implant &amp; Phôi Sứ CAD/CAM
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Tất cả hệ thống" },
              { id: "3d-printer", label: "Máy in 3D & Máng phẫu thuật" },
              { id: "implant-vial", label: "Lọ trụ Implant & Xương sinh học" },
              { id: "cadcam-block", label: "Phôi sứ & Nhựa Resin 3D" },
              { id: "scanner", label: "Máy quét & Tủ UV" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCat(tab.id)}
                className={`rounded-lg px-3.5 py-2 text-xs font-bold transition ${
                  activeCat === tab.id
                    ? "bg-[#0284c7] text-white shadow-sm"
                    : "border border-[#cbd5e1] bg-white text-[#334155] hover:border-[#0284c7] hover:text-[#0284c7]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Technical Equipment Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#bae6fd] bg-white shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#06b6d4] hover:shadow-[0_12px_28px_rgba(2,132,199,0.14)]"
            >
              <div>
                <div
                  onClick={() => setSelectedEq(item)}
                  className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#0f172a]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-xs bg-[#0f172a]/85 px-2.5 py-1 font-mono text-[10px] font-bold text-[#38bdf8]">
                    {item.code}
                  </span>
                </div>

                <div className="p-4">
                  <span className="text-[10px] font-extrabold tracking-wider text-[#0284c7] uppercase">
                    {item.categoryLabel}
                  </span>
                  <h3
                    onClick={() => setSelectedEq(item)}
                    className="mt-1 line-clamp-2 cursor-pointer text-sm font-extrabold text-[#0f172a] transition group-hover:text-[#0284c7]"
                  >
                    {item.name}
                  </h3>
                  <p className="mt-1.5 rounded-md bg-[#f0f9ff] px-2.5 py-1 text-[11px] font-semibold text-[#0369a1]">
                    {item.precisionSpec}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs text-[#64748b]">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#f1f5f9] px-4 py-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#0284c7]">
                    {item.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedEq(item)}
                    className="rounded-md bg-[#0f172a] px-3 py-1.5 text-[11px] font-bold text-white uppercase transition hover:bg-[#0284c7]"
                  >
                    THÔNG SỐ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 4-STEP DIGITAL 3D LAB WORKFLOW */}
      <section id="quy-trinh-so" className="bg-[#0b1528] py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center">
            <span className="text-xs font-extrabold tracking-widest text-[#38bdf8] uppercase">
              DIGITAL WORKFLOW
            </span>
            <h2 className="mt-1 text-2xl font-black uppercase">
              Quy Trình Chế Tác In 3D &amp; Cấy Ghép Implant Kỹ Thuật Số
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="relative rounded-2xl border border-[#38bdf8]/30 bg-[#112240] p-6"
              >
                <span className="font-mono text-3xl font-black text-[#06b6d4]">
                  {ws.step}
                </span>
                <h3 className="mt-3 text-base font-extrabold text-white">
                  {ws.title}
                </h3>
                <p className="mt-1 text-xs font-bold text-[#38bdf8]">
                  {ws.spec}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#cbd5e1]">
                  {ws.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TIN KHOA HỌC & CÔNG NGHỆ IN 3D (3-COLUMN ARTICLES) */}
      <section
        id="tin-cong-nghe"
        className="mx-auto max-w-[1200px] px-4 py-16"
      >
        <div className="mb-8 text-center">
          <span className="text-xs font-extrabold tracking-widest text-[#0284c7] uppercase">
            CHUYÊN SAN KỸ THUẬT LABO
          </span>
          <h2 className="mt-1 text-2xl font-black text-[#0f172a] uppercase">
            Nghiên Cứu Ứng Dụng In 3D Sinh Học &amp; Implant
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {data.news?.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-xs transition hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] font-bold text-[#0284c7]">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span className="font-normal text-[#94a3b8]">{post.date}</span>
                </div>
                <h3 className="mt-2 text-sm leading-snug font-extrabold text-[#0f172a] transition group-hover:text-[#0284c7]">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[#64748b]">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. DARK TECH LAB FOOTER */}
      <footer
        id="footer-lab"
        className="border-t border-[#38bdf8]/30 bg-[#071120] pt-14 pb-8 text-xs text-[#94a3b8]"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#06b6d4] text-[#071120]">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="text-sm font-black tracking-wider text-white uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="mt-4 leading-relaxed">{data.business.aboutText[0]}</p>
            </div>

            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#38bdf8] uppercase">
                TRUNG TÂM LABO &amp; SHOWROOM
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#06b6d4]" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#06b6d4]" />
                  <span>{data.business.phone.join(" - ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#06b6d4]" />
                  <span>{data.business.email.join(" | ")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#38bdf8] uppercase">
                GIẢI PHÁP KỸ THUẬT SỐ
              </h4>
              <ul className="mt-4 space-y-2">
                <li>Máy in 3D Laser SLA Nha khoa</li>
                <li>Máng hướng dẫn phẫu thuật Implant 3D</li>
                <li>Lọ trụ Implant ngâm dung dịch hoạt hóa</li>
                <li>Phôi sứ đa lớp Zirconia CAD/CAM</li>
                <li>Tủ bảo quản vô trùng tia UV-C</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#38bdf8] uppercase">
                CHỨNG NHẬN CHẤT LƯỢNG
              </h4>
              <div className="mt-4 rounded-xl border border-[#38bdf8]/30 bg-[#0f1f38] p-4 text-white">
                <div className="flex items-center gap-2 text-[#38bdf8]">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-bold">ISO 13485:2016 &amp; FDA</span>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-[#cbd5e1]">
                  Mỗi khay in 3D và trụ Implant đều đi kèm thẻ bảo hành mã vạch
                  truy xuất thông số kỹ thuật số.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-[11px]">
            © {new Date().getFullYear()} Thiết kế &amp; Vận hành bởi{" "}
            <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* TECHNICAL SPECIFICATION MODAL */}
      {selectedEq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs">
          <div className="relative grid w-full max-w-xl grid-cols-1 overflow-hidden rounded-2xl border border-[#38bdf8]/40 bg-white shadow-2xl sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setSelectedEq(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-[#0f172a] hover:bg-[#0284c7] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-square bg-[#0f172a]">
              <img
                src={selectedEq.image}
                alt={selectedEq.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#0284c7]">
                  MÃ THIẾT BỊ: {selectedEq.code}
                </span>
                <h3 className="mt-1 text-base font-extrabold text-[#0f172a]">
                  {selectedEq.name}
                </h3>
                <p className="mt-2 rounded-md bg-[#f0f9ff] px-2.5 py-1 text-xs font-bold text-[#0369a1]">
                  {selectedEq.precisionSpec}
                </p>
                <p className="mt-2 text-base font-black text-[#0284c7]">
                  {selectedEq.price}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#475569]">
                  {selectedEq.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedEq(null);
                  setQuoteModalOpen(true);
                }}
                className="mt-5 w-full rounded-lg bg-[#0284c7] py-2.5 text-xs font-bold text-white uppercase hover:bg-[#0369a1]"
              >
                YÊU CẦU BÁO GIÁ / ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LAB QUOTE / STL UPLOAD MODAL */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setQuoteModalOpen(false);
                setQuoteSubmitted(false);
              }}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#334155] hover:bg-[#0284c7] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-base font-extrabold text-[#0f172a] uppercase">
              Đặt Gia Công In 3D &amp; Báo Giá Thiết Bị
            </h3>
            {quoteSubmitted ? (
              <div className="mt-4 rounded-xl bg-[#f0f9ff] p-4 text-center">
                <Check className="mx-auto h-6 w-6 text-[#0284c7]" />
                <p className="mt-1 text-sm font-bold text-[#0369a1]">
                  Đã tiếp nhận yêu cầu kỹ thuật!
                </p>
                <p className="mt-1 text-xs text-[#475569]">
                  Kỹ sư CAD/CAM Phúc Thịnh sẽ phản hồi báo giá trong 15 phút.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSubmitted(true);
                }}
                className="mt-4 space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Tên Bác sĩ / Phòng khám nha khoa *"
                  className="w-full rounded-lg border border-[#cbd5e1] px-3.5 py-2 text-xs outline-none focus:border-[#0284c7]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ *"
                  className="w-full rounded-lg border border-[#cbd5e1] px-3.5 py-2 text-xs outline-none focus:border-[#0284c7]"
                />
                <select className="w-full rounded-lg border border-[#cbd5e1] px-3.5 py-2 text-xs outline-none focus:border-[#0284c7]">
                  <option>Đặt in 3D máng hướng dẫn phẫu thuật Implant</option>
                  <option>Báo giá máy in 3D Laser SLA &amp; Tủ UV</option>
                  <option>Đặt bộ Kit lọ trụ Implant ưa nước</option>
                </select>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#0284c7] py-2.5 text-xs font-bold text-white uppercase"
                >
                  GỬI YÊU CẦU TỚI LABO
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
