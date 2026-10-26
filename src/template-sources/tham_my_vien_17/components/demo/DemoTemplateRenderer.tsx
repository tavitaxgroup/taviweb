"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Truck,
  Gift,
  Layers,
  ShieldCheck,
  X
} from "lucide-react";
import {
  adaptClonedTemplateData,
  type ClonedTemplateInput
} from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien17DefaultData,
  type SongMocAestheticData,
  type SongMocProductItem
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  template?: ClonedTemplateInput;
  companyName?: string;
}

/**
 * Reusable Hexagonal "SM" Song Mộc Monogram Emblem matching TMV020-tham_my_vien_17.png
 */
function SongMocHexLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim =
    size === "lg" ? "h-24 w-24" : size === "sm" ? "h-9 w-9" : "h-12 w-12";
  return (
    <svg viewBox="0 0 100 100" className={dim} fill="none">
      {/* Outer Green Hexagon Frame */}
      <polygon
        points="50,5 90,28 90,72 50,95 10,72 10,28"
        stroke="#009a44"
        strokeWidth="9"
        strokeLinejoin="round"
      />
      {/* Stylized Interlocking M / S Bars */}
      <path
        d="M28 65 L28 38 L50 52 L72 38 L72 65"
        stroke="#009a44"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Reusable BEE PVCMascot Emblem matching Top-Right Card in TMV020-tham_my_vien_17.png
 */
function BeePvcMascotCard({ label }: { label: string }) {
  return (
    <div className="inline-flex flex-col items-center rounded-2xl bg-white px-6 py-4 shadow-2xl">
      <svg viewBox="0 0 120 90" className="h-20 w-28" fill="none">
        {/* Bee Wings */}
        <path
          d="M68 32 C68 12, 92 8, 96 18 C92 32, 78 38, 68 32 Z"
          fill="#009a44"
        />
        <path
          d="M74 38 C84 22, 108 22, 108 34 C104 46, 86 46, 74 38 Z"
          fill="#68c38f"
        />
        {/* Bee Striped Body */}
        <ellipse cx="78" cy="56" rx="24" ry="18" fill="#68c38f" />
        <path d="M68 40 L68 72" stroke="#00682e" strokeWidth="7" />
        <path d="M84 39 L84 73" stroke="#00682e" strokeWidth="7" />
        <path d="M102 56 L108 56" stroke="#00682e" strokeWidth="4" />
        {/* Bee Cute Head & Eyes */}
        <circle cx="44" cy="48" r="16" fill="#8fd6ad" stroke="#007a37" strokeWidth="2.5" />
        <circle cx="38" cy="44" r="5" fill="#ffffff" stroke="#00682e" strokeWidth="2" />
        <circle cx="38" cy="44" r="2" fill="#00682e" />
        <circle cx="50" cy="44" r="5" fill="#ffffff" stroke="#00682e" strokeWidth="2" />
        <circle cx="50" cy="44" r="2" fill="#00682e" />
        <path d="M38 55 Q44 60 50 55" stroke="#00682e" strokeWidth="2" fill="none" />
        {/* Antennae */}
        <path d="M38 32 Q32 22 26 24" stroke="#00682e" strokeWidth="2.5" fill="none" />
        <circle cx="26" cy="24" r="3" fill="#00682e" />
        <path d="M48 32 Q46 20 40 20" stroke="#00682e" strokeWidth="2.5" fill="none" />
        <circle cx="40" cy="20" r="3" fill="#00682e" />
      </svg>
      <span className="mt-1 font-sans text-lg font-black uppercase tracking-wider text-[#007a37]">
        {label}
      </span>
    </div>
  );
}

/**
 * Green Centered Section Heading with Dashed Underline matching TMV020
 */
function GreenDashedHeading({ title }: { title: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-lg font-extrabold uppercase tracking-wider text-[#00883b] sm:text-xl">
        {title}
      </h2>
      <div className="mx-auto mt-2 w-24 border-b-2 border-dashed border-neutral-300" />
    </div>
  );
}

export function DemoTemplateRenderer({
  data,
  template,
  companyName
}: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<SongMocAestheticData>(
    thamMyVien17DefaultData,
    {
      ...(data || template || {}),
      ...(companyName ? { companyName } : {})
    }
  );

  const [selectedProduct, setSelectedProduct] =
    useState<SongMocProductItem | null>(null);
  const [agencyName, setAgencyName] = useState("");
  const [agencyPhone, setAgencyPhone] = useState("");
  const [agencyAddress, setAgencyAddress] = useState("");
  const [sampleSubmitted, setSampleSubmitted] = useState(false);

  const primaryPhone =
    Array.isArray(merged.business.phone) && merged.business.phone.length > 0
      ? merged.business.phone[0]
      : "0909 888 397";
  const primaryEmail =
    Array.isArray(merged.business.email) && merged.business.email.length > 0
      ? merged.business.email[0]
      : "kinhdoanh@songmoc.vn";

  const handleSampleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleSubmitted(true);
    setTimeout(() => setSampleSubmitted(false), 4500);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white font-sans text-neutral-800 selection:bg-[#009a44] selection:text-white"
    >
      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border-2 border-[#009a44] bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-[#009a44] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded bg-[#009a44] px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                    MÃ: {selectedProduct.code}
                  </span>
                  <h3 className="mt-2 text-sm font-extrabold uppercase text-neutral-900">
                    {selectedProduct.title}
                  </h3>
                  <p className="mt-2 text-xs font-bold text-[#00883b]">
                    {selectedProduct.specs}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                    {selectedProduct.application}
                  </p>
                </div>
                <a
                  href="#nhan-mau"
                  onClick={() => setSelectedProduct(null)}
                  className="mt-5 block w-full rounded-lg bg-[#009a44] py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#007a37]"
                >
                  Yêu cầu báo giá &amp; gửi mẫu
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 1. CLEAN EMERALD & WHITE HEADER ==================== */}
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <SongMocHexLogo size="sm" />
            <div className="leading-tight">
              <span className="block text-base font-black uppercase tracking-wider text-[#009a44]">
                {merged.business.name}
              </span>
              <span className="block text-[10px] font-bold text-neutral-500">
                BEE PVC • KLEBMAISTER
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {merged.navigation.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-extrabold uppercase tracking-wider transition ${
                  idx === 0
                    ? "text-[#009a44]"
                    : "text-neutral-600 hover:text-[#009a44]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#009a44] px-4 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-[#007a37]"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{primaryPhone}</span>
          </a>
        </div>
      </header>

      {/* ==================== 2. EMERALD GREEN SHOWCASE HERO (MATCHING TMV020) ==================== */}
      <section className="relative overflow-hidden bg-[#009a44] pt-10 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Top Row: Left Stacked Purple & Pink Ribbons + Right BEE PVC Mascot Card */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex flex-col items-start gap-2.5">
              <div className="inline-block bg-[#6e0dd0] px-6 py-2.5 shadow-xl sm:px-8 sm:py-3">
                <h1 className="font-sans text-2xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  {merged.heroPurpleRibbon}
                </h1>
              </div>
              <div className="inline-block bg-[#f01888] px-6 py-2.5 shadow-xl sm:px-8 sm:py-3">
                <p className="font-sans text-xl font-black uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
                  {merged.heroPinkRibbon}
                </p>
              </div>
            </div>

            {/* Right Floating BEE PVC Mascot Card */}
            <div className="rotate-6 transition-transform duration-500 hover:rotate-0">
              <BeePvcMascotCard label={merged.beePartnerBrand} />
            </div>
          </div>

          {/* Lower Showcase Row: Left White Curved Arrow & Hexagonal SM Logo Card + Right White Website Preview Sheet */}
          <div className="mt-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            {/* Left 3 Cols: Curved White Arrow + White Square Hex Logo Box */}
            <div className="flex flex-col items-center gap-6 lg:col-span-3 lg:items-start">
              {/* Curved White Arrow matching TMV020 */}
              <svg
                viewBox="0 0 140 130"
                className="hidden h-28 w-32 pl-4 lg:block"
                fill="none"
              >
                <path
                  d="M25 10 C5 65, 35 105, 95 110 L85 95 L122 114 L84 126 L90 116 C22 110, -8 65, 25 10 Z"
                  fill="#ffffff"
                />
              </svg>

              <p className="text-xs leading-relaxed text-emerald-50">
                {merged.hero.subtitle}
              </p>

              {/* Bottom-Left White Square Logo Card with Hexagonal SM Emblem */}
              <div className="flex h-44 w-44 items-center justify-center rounded-2xl bg-white p-6 shadow-2xl">
                <SongMocHexLogo size="lg" />
              </div>
            </div>

            {/* Right 9 Cols: Main White Sheet Previewing NẸP CHỈ NHỰA + Facility Banner + KLEBMAISTER */}
            <div
              id="nep-chi-nhua"
              className="overflow-hidden rounded-2xl bg-white shadow-2xl lg:col-span-9"
            >
              {/* Part A: NẸP CHỈ NHỰA 4-Column Grid */}
              <div className="p-6 sm:p-8">
                <GreenDashedHeading title={merged.edgeBandingSectionTitle} />

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {merged.edgeBandingProducts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedProduct(item)}
                      className="group cursor-pointer text-center"
                    >
                      <div className="aspect-square overflow-hidden border border-neutral-100 bg-neutral-50">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-2.5 text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                        {item.categoryLabel}
                      </p>
                      <h3 className="mt-0.5 line-clamp-2 text-[11px] font-extrabold uppercase text-neutral-800 group-hover:text-[#009a44]">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part B: Dark Gray SONG MỘC 双木 Facility Banner with 2 Green Hex Emblems */}
              <div
                id="cam-ket-nha-may"
                className="relative overflow-hidden bg-neutral-600 px-6 py-10 text-white sm:px-10"
              >
                {/* Background Architectural Watermark Text "SONG MỘC 双木" */}
                <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none text-right font-sans text-3xl font-black uppercase tracking-widest text-neutral-800/35 sm:text-5xl">
                  {merged.facilityBanner.brandCn}
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {merged.facilityBanner.perks.map((pk) => (
                    <div
                      key={pk.id}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="rounded-xl bg-white/10 p-2 backdrop-blur-xs">
                        <SongMocHexLogo size="sm" />
                      </div>
                      <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-emerald-300">
                        SONG MỘC
                      </span>
                      <h3 className="mt-1 text-sm font-extrabold text-white sm:text-base">
                        {pk.title}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-200">
                        {pk.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part C: KEO NHỰA DÁN CẠNH KLEBMAISTER + Floating Yellow/Blue Bag Card */}
              <div id="keo-klebmaister" className="p-6 sm:p-8">
                <GreenDashedHeading title={merged.klebmaisterSectionTitle} />

                <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                  {/* Left 7 Cols: 4 Klebmaister Items */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                    {merged.klebmaisterProducts.map((kl) => (
                      <div
                        key={kl.id}
                        onClick={() => setSelectedProduct(kl)}
                        className="group cursor-pointer rounded-xl border border-neutral-200 p-3.5 transition hover:border-[#009a44] hover:shadow-md"
                      >
                        <span className="text-[9px] font-bold uppercase text-[#00883b]">
                          {kl.categoryLabel}
                        </span>
                        <h4 className="mt-1 text-xs font-extrabold uppercase text-neutral-900 group-hover:text-[#009a44]">
                          {kl.title}
                        </h4>
                        <p className="mt-1 text-[11px] text-neutral-500">
                          {kl.specs}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Right 5 Cols: Iconic Blue & Yellow KLEBMAISTER Schmelz-Klebstoff Packaging Card matching TMV020 Bottom-Right */}
                  <div className="lg:col-span-5">
                    <div className="overflow-hidden rounded-2xl border-2 border-[#009a44] bg-gradient-to-br from-[#15489c] via-[#1d4ed8] to-[#eab308] p-5 text-white shadow-xl">
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-white/20 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest">
                          KLEBMAISTER
                        </span>
                        <span className="rounded bg-[#ffd400] px-2.5 py-0.5 text-[10px] font-black text-neutral-900">
                          180 - 210°C
                        </span>
                      </div>

                      <div className="my-4 rounded-xl bg-[#ffd400] p-4 text-neutral-900 shadow-inner">
                        <p className="font-serif text-lg font-black italic leading-none">
                          Schmelz-
                        </p>
                        <p className="font-sans text-2xl font-black tracking-tight">
                          Klebstoff
                        </p>
                        <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-neutral-800">
                          EXPORT QUALITY • HOT MELT ADHESIVE
                        </p>
                      </div>

                      <p className="text-xs leading-relaxed text-blue-50">
                        Keo hạt nhiệt chuyên dụng dán cạnh nẹp chỉ nhựa PVC,
                        ABS, Acrylic chịu nhiệt &amp; chống bong tróc cho nội
                        thất Spa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. CÔNG TRÌNH NỘI THẤT THẨM MỸ VIỆN & SPA TIÊU BIỂU ==================== */}
      <section id="du-an-spa" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <GreenDashedHeading title="ỨNG DỤNG THI CÔNG NỘI THẤT THẨM MỸ VIỆN & SPA" />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {merged.clinicProjects.map((pj) => (
            <div
              key={pj.id}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-56 overflow-hidden bg-neutral-100">
                <img
                  src={pj.image}
                  alt={pj.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold text-[#009a44]">
                  📍 {pj.location}
                </span>
                <h3 className="mt-1 text-base font-extrabold text-neutral-900">
                  {pj.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-500">
                  <strong>Vật tư sử dụng:</strong> {pj.materialsUsed}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 4. ĐĂNG KÝ NHẬN BỘ CHỈ MẪU BEE PVC MIỄN PHÍ ==================== */}
      <section id="nhan-mau" className="bg-[#f2fbf6] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border-2 border-[#009a44] bg-white p-6 shadow-xl sm:p-10">
            <div className="text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-extrabold uppercase text-[#00883b]">
                CHƯƠNG TRÌNH HỖ TRỢ ĐẠI LÝ &amp; XƯỞNG NỘI THẤT SPA
              </span>
              <h2 className="mt-2 text-2xl font-black uppercase text-neutral-900 sm:text-3xl">
                Đăng Ký Nhận Bộ Chỉ Mẫu BEE PVC &amp; Báo Giá Sỉ
              </h2>
              <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                Song Mộc gửi tặng miễn phí hộp mẫu hơn 300 mã màu chỉ nhựa PVC
                và mẫu thử keo hạt Klebmaister tận nơi trên toàn quốc.
              </p>
            </div>

            <form
              onSubmit={handleSampleRequest}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              <input
                type="text"
                required
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value)}
                placeholder="Tên đơn vị / Xưởng / Spa *"
                className="rounded-xl border border-neutral-200 px-4 py-3 text-xs focus:border-[#009a44] focus:outline-none"
              />
              <input
                type="tel"
                required
                value={agencyPhone}
                onChange={(e) => setAgencyPhone(e.target.value)}
                placeholder="Số điện thoại nhận mẫu *"
                className="rounded-xl border border-neutral-200 px-4 py-3 text-xs focus:border-[#009a44] focus:outline-none"
              />
              <input
                type="text"
                required
                value={agencyAddress}
                onChange={(e) => setAgencyAddress(e.target.value)}
                placeholder="Tỉnh / Thành phố nhận hàng *"
                className="rounded-xl border border-neutral-200 px-4 py-3 text-xs focus:border-[#009a44] focus:outline-none"
              />
              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#009a44] py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#007a37]"
                >
                  ĐĂNG KÝ NHẬN BỘ CHỈ MẪU MIỄN PHÍ NGAY
                </button>
              </div>
            </form>

            {sampleSubmitted && (
              <p className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#00883b]">
                <CheckCircle2 className="h-4 w-4" />
                <span>
                  Đã ghi nhận thông tin! Bộ phận kinh doanh Song Mộc sẽ gửi bộ
                  chỉ mẫu BEE PVC tới {agencyAddress}.
                </span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ==================== 5. FOOTER ==================== */}
      <footer className="bg-neutral-900 py-12 text-neutral-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white p-1.5">
                  <SongMocHexLogo size="sm" />
                </div>
                <span className="text-lg font-black uppercase text-white">
                  {merged.business.name} (双木)
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                {merged.business.tagline}. Đối tác cung ứng nẹp chỉ nhựa BEE PVC
                và keo dán cạnh Klebmaister uy tín hàng đầu.
              </p>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#009a44]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#009a44]" />
                  <span className="font-bold text-white">{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#009a44]" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                SẢN PHẨM CHÍNH
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs">
                <li>• Nẹp chỉ nhựa PVC đồng màu</li>
                <li>• Nẹp chỉ nhựa Pastel Thẩm mỹ viện</li>
                <li>• Keo hạt nhiệt Klebmaister (180-210°C)</li>
                <li>• Phụ gia đánh bóng cạnh BEE Clean</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
            © Bản quyền thuộc về{" "}
            <strong className="text-white">{merged.business.name}</strong> • BEE
            PVC &amp; KLEBMAISTER.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
