"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Fingerprint,
  Grid,
  Key,
  Wifi,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Lock,
  Unlock,
  Home,
  ArrowRight,
  Sparkles,
  Wrench,
  Clock,
  Award,
  X,
  Menu,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile23MockData,
  CorporateProfile23Data,
  HichiSmartLockProduct,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  companyName?: string;
  customData?: Partial<CorporateProfile23Data>;
}

export function DemoTemplateRenderer({
  companyName,
  customData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData(corporateProfile23MockData, {
    ...customData,
    business: {
      ...corporateProfile23MockData.business,
      ...(customData?.business || {}),
      ...(companyName ? { name: companyName } : {}),
    },
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [selectedBrand, setSelectedBrand] = useState<string>("Tất cả");
  const [activeTechCode, setActiveTechCode] = useState<
    "fingerprint" | "keypad" | "key" | "wifi"
  >("fingerprint");
  const [isDoorUnlocked, setIsDoorUnlocked] = useState<boolean>(false);
  const [activeLockModal, setActiveLockModal] =
    useState<HichiSmartLockProduct | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [consultPhone, setConsultPhone] = useState<string>("");
  const [consultSent, setConsultSent] = useState<boolean>(false);

  const handleTriggerUnlock = (
    code: "fingerprint" | "keypad" | "key" | "wifi"
  ) => {
    setActiveTechCode(code);
    setIsDoorUnlocked(true);
    setTimeout(() => {
      setIsDoorUnlocked(false);
    }, 3500);
  };

  const renderUnlockIcon = (
    code: "fingerprint" | "keypad" | "key" | "wifi",
    sizeClass = "w-6 h-6"
  ) => {
    switch (code) {
      case "fingerprint":
        return <Fingerprint className={sizeClass} />;
      case "keypad":
        return <Grid className={sizeClass} />;
      case "key":
        return <Key className={sizeClass} />;
      case "wifi":
      default:
        return <Wifi className={sizeClass} />;
    }
  };

  const filteredLocks = data.smartLockProducts.filter((lock) => {
    const matchCat =
      selectedCategory === "Tất cả" || lock.category === selectedCategory;
    const matchBrand =
      selectedBrand === "Tất cả" ||
      lock.brand.toLowerCase() === selectedBrand.toLowerCase();
    return matchCat && matchBrand;
  });

  const activeTechObj =
    data.unlockTechnologies.find((t) => t.code === activeTechCode) ||
    data.unlockTechnologies[0];

  return (
    <div className="min-h-screen bg-[#f5f8fa] text-[#0f2537] font-sans antialiased selection:bg-[#00527a] selection:text-white">
      {/* 1. TOP TRUST BAR & HEADER */}
      <div className="bg-[#003d5b] text-white text-xs">
        <div className="max-w-[1240px] mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f58220]" />
              <span>Hệ Thống Phân Phối Khóa Vân Tay Chính Hãng Toàn Quốc</span>
            </span>
          </div>
          <div className="flex items-center gap-5 ml-auto">
            <span className="hidden sm:inline text-sky-200">
              Lắp đặt miễn phí tận nhà trong 2 giờ
            </span>
            <a
              href={`tel:${data.business.phone[0].replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 font-extrabold text-[#f58220] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hotline: {data.business.phone[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-[1240px] mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* HichiHome Logo (Matching exact shield + HichiHome + orange tagline in DN026) */}
          <a
            href="#"
            onClick={() => {
              setSelectedCategory("Tất cả");
              setSelectedBrand("Tất cả");
            }}
            className="flex items-center gap-3 select-none group"
          >
            {/* Shield + Smart Home Waves Emblem */}
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-b from-[#00527a] to-[#003652] flex flex-col items-center justify-center text-white shadow-md">
              <Home className="w-5 h-5 text-[#f58220] -mb-0.5" />
              <Wifi className="w-4 h-4 text-sky-200" />
            </div>
            <div className="leading-none">
              <div className="text-2xl sm:text-[26px] font-black tracking-tight text-[#00527a] flex items-center">
                <span>HichiH</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f58220]/15 text-[#f58220] mx-0.5">
                  <Home className="w-4 h-4" />
                </span>
                <span>me</span>
              </div>
              <span className="block text-[11px] font-semibold tracking-wide text-[#f58220] mt-0.5">
                Khóa vân tay chính hãng
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {data.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-extrabold uppercase tracking-wider text-[#0f2537] hover:text-[#00527a] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#bo-suu-tap-khoa"
              className="hidden sm:inline-flex items-center gap-2 bg-[#00527a] hover:bg-[#003d5b] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded-lg shadow transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-[#f58220]" />
              <span>Báo Giá Lắp Đặt</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#00527a]"
              aria-label="Mở menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2">
            {data.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-xs font-extrabold uppercase text-[#0f2537] hover:text-[#00527a]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (EXACT MATCH TO HICHIHOME DN026 SHOWCASE: LEFT TEAL HEADLINE + 4 CIRCULAR BIOMETRIC ICONS + RIGHT WOOD DOOR WITH BOSCH SMART LOCK) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#f1f6f9] to-[#e2ecf2] border-b border-slate-200">
        {/* Decorative Biometric Fingerprint Arcs in Center Background */}
        <div
          className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border-[2px] border-dashed border-[#00527a]/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-[#00527a]/20"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 6 Cols: HichiHome Brand Identity & Bold Uppercase Teal Headline */}
            <div className="lg:col-span-6 space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#00527a]/10 border border-[#00527a]/20 text-[#00527a] text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#f58220]" />
                <span>{data.hero.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-[#00527a] leading-[1.15]">
                GIẢI PHÁP CÔNG NGHỆ
                <span className="block">KHÓA CỬA ĐIỆN TỬ</span>
                <span className="block text-[#003d5b]">HÀNG ĐẦU VIỆT NAM</span>
              </h1>

              <p className="text-base sm:text-xl font-medium text-[#00527a]/90 leading-relaxed max-w-xl">
                {data.hero.subtitle}
              </p>

              {/* Interactive Active Unlock Mode Status Box */}
              <div className="p-4 rounded-xl bg-white border border-[#00527a]/20 shadow-sm max-w-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black uppercase text-[#00527a]">
                    ⚡ {activeTechObj.title}
                  </span>
                  <span
                    className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                      isDoorUnlocked
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-sky-100 text-[#00527a]"
                    }`}
                  >
                    {isDoorUnlocked ? "OPEN • ĐÃ MỞ KHÓA" : activeTechObj.subtitle}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeTechObj.description}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#bo-suu-tap-khoa"
                  className="inline-flex items-center gap-2 bg-[#00527a] hover:bg-[#003d5b] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg transition-all"
                >
                  <span>{data.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#lien-he-hichihome"
                  className="inline-flex items-center gap-2 bg-[#f58220] hover:bg-[#d96b11] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>{data.hero.secondaryCta}</span>
                </a>
              </div>
            </div>

            {/* Right 6 Cols: 4 Vertical Circular Unlock Icons + Realistic Wood Door & Bosch Push-Pull Smart Lock */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-6 sm:gap-10 relative z-10">
              {/* Vertical Column of 4 Circular Biometric Unlock Icons (Matches DN026 Screenshot) */}
              <div className="flex flex-col items-center gap-4">
                {data.unlockTechnologies.map((tech) => {
                  const isActive = activeTechCode === tech.code;
                  return (
                    <button
                      key={tech.id}
                      type="button"
                      onClick={() => handleTriggerUnlock(tech.code)}
                      title={tech.title}
                      className={`group relative w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full flex items-center justify-center border-2 transition-all shadow-md ${
                        isActive
                          ? "bg-[#00527a] text-white border-[#00527a] scale-110 shadow-[#00527a]/30"
                          : "bg-white text-[#4b6b88] border-[#6b8ba4] hover:border-[#00527a] hover:text-[#00527a]"
                      }`}
                    >
                      {renderUnlockIcon(tech.code, "w-7 h-7")}
                      <span className="sr-only">{tech.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Wood-Grain Door Panel with Sleek Black BOSCH Smart Push-Pull Lock */}
              <div className="relative w-[240px] sm:w-[270px] h-[470px] rounded-2xl bg-gradient-to-r from-[#7c6a5a] via-[#6d5c4d] to-[#594a3e] p-5 shadow-2xl border-l-8 border-[#4a3d33] flex items-center justify-center">
                {/* Subtle Vertical Wood Grain Lines */}
                <div
                  className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] bg-[length:18px_100%]"
                  aria-hidden="true"
                />

                {/* Sleek Black Push-Pull Smart Door Lock Body */}
                <div className="relative w-36 h-[410px] rounded-[26px] bg-gradient-to-b from-[#26292e] via-[#141619] to-[#0a0b0d] border-[3px] border-zinc-400/70 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-3.5 flex flex-col items-center justify-between text-white select-none">
                  {/* Top Dual IR Face ID 3D Cameras & Biometric Sensor */}
                  <div className="w-full flex flex-col items-center pt-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-500" />
                      <span className="w-3.5 h-3.5 rounded-full bg-sky-950 border border-sky-400/60 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-500" />
                    </div>

                    {/* CLOSE / OPEN Status Indicator Row (Exact match to screenshot) */}
                    <div className="w-full flex items-center justify-between px-2 py-1 rounded bg-black/60 text-[10px] font-black tracking-wider mb-2">
                      <span
                        className={
                          !isDoorUnlocked
                            ? "text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]"
                            : "text-zinc-600"
                        }
                      >
                        CLOSE
                      </span>
                      <span
                        className={
                          isDoorUnlocked
                            ? "text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.9)]"
                            : "text-zinc-600"
                        }
                      >
                        OPEN
                      </span>
                    </div>

                    {/* Illuminated Touch Numeric Keypad (1-9, *, 0, #) */}
                    <div className="grid grid-cols-3 gap-x-3 gap-y-1.5 text-center w-full px-1 py-1">
                      {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
                        (digit) => (
                          <button
                            key={digit}
                            type="button"
                            onClick={() => handleTriggerUnlock("keypad")}
                            className="text-xs font-bold text-zinc-200 hover:text-sky-400 py-0.5 rounded hover:bg-white/10 transition-colors"
                          >
                            {digit}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Lower Ergonomic Offset Push-Pull Handle with BOSCH Logo */}
                  <div className="relative w-full flex items-center justify-start mt-2 mb-4">
                    <div
                      onClick={() => handleTriggerUnlock("fingerprint")}
                      title="Chạm vân tay để mở khóa"
                      className="w-24 h-36 -ml-5 rounded-2xl bg-gradient-to-b from-[#2d3138] via-[#1c1f24] to-[#121417] border-2 border-zinc-500/60 shadow-2xl flex flex-col items-center justify-between p-3 cursor-pointer hover:border-sky-400 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-600 flex items-center justify-center text-sky-400">
                        <Fingerprint className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                        BOSCH
                      </span>
                      <div className="w-6 h-1 rounded-full bg-zinc-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUTHORIZED SMART LOCK BRANDS STRIP */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {data.authorizedBrands.map((brand) => {
              const active = selectedBrand === brand.name;
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() =>
                    setSelectedBrand(active ? "Tất cả" : brand.name)
                  }
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    active
                      ? "bg-[#00527a] text-white border-[#00527a] shadow-md"
                      : "bg-slate-50 text-[#0f2537] border-slate-200 hover:border-[#00527a]"
                  }`}
                >
                  <span className="block text-base font-black tracking-wider">
                    {brand.name}
                  </span>
                  <span
                    className={`text-[10px] font-semibold uppercase ${
                      active ? "text-sky-200" : "text-slate-400"
                    }`}
                  >
                    Công nghệ {brand.origin}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SMART LOCK PRODUCT CATALOG */}
      <section id="bo-suu-tap-khoa" className="py-16 bg-[#f5f8fa]">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f58220]">
                SẢN PHẨM BÁN CHẠY NHẤT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#00527a] mt-1">
                BỘ SƯU TẬP KHÓA CỬA ĐIỆN TỬ CHÍNH HÃNG
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {data.productCategories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                      active
                        ? "bg-[#00527a] text-white shadow"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-[#00527a]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredLocks.map((lock) => (
              <div
                key={lock.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={lock.image}
                      alt={lock.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#00527a] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                      {lock.brand}
                    </span>
                    <span className="absolute top-3 right-3 bg-[#f58220] text-white text-xs font-black px-2.5 py-1 rounded-full">
                      {lock.discountBadge}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-bold text-[#00527a] uppercase">
                      {lock.category}
                    </span>
                    <h3 className="text-base font-black text-slate-900 group-hover:text-[#00527a] transition-colors mt-1 mb-3">
                      {lock.name}
                    </h3>

                    {/* Unlock Method Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {lock.unlockMethods.map((method) => (
                        <span
                          key={method}
                          className="text-[10px] font-bold bg-sky-50 text-[#00527a] border border-sky-200/60 px-2 py-0.5 rounded"
                        >
                          {method}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-slate-500 mb-1">
                      <strong>Loại cửa:</strong> {lock.doorRequirement}
                    </p>
                    <p className="text-xs text-emerald-700 font-semibold">
                      ✓ {lock.warranty}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-slate-400 line-through">
                      {lock.oldPrice}
                    </span>
                    <span className="text-lg font-black text-[#e11d48]">
                      {lock.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveLockModal(lock)}
                    className="bg-[#00527a] hover:bg-[#f58220] text-white text-xs font-extrabold uppercase px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Đặt Lắp Đặt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CÔNG NGHỆ MỞ KHÓA THÔNG MINH 4 TRONG 1 */}
      <section id="cong-nghe-mo-khoa" className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f58220]">
              AN NINH ĐA LỚP CHUẨN CHÂU ÂU
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#00527a] mt-1">
              4 PHƯƠNG THỨC MỞ KHÓA THÔNG MINH HICHIHOME
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.unlockTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="p-6 rounded-2xl bg-[#f5f8fa] border border-slate-200 hover:border-[#00527a] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#00527a] text-white flex items-center justify-center mb-4 shadow-md">
                    {renderUnlockIcon(tech.code, "w-7 h-7")}
                  </div>
                  <h3 className="text-base font-black text-[#00527a] mb-1">
                    {tech.title}
                  </h3>
                  <p className="text-xs font-bold text-[#f58220] mb-2.5">
                    {tech.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HÌNH ẢNH LẮP ĐẶT THỰC TẾ & 4 CAM KẾT VÀNG */}
      <section
        id="cong-trinh-thuc-te"
        className="py-16 bg-[#003d5b] text-white"
      >
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f58220]">
              HƠN 25.000 GIA CHỦ TIN DÙNG
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase mt-1">
              CÔNG TRÌNH LẮP ĐẶT KHÓA VÂN TAY THỰC TẾ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
            {data.installationGallery.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-[#002b42] border border-white/10 shadow-lg"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.projectTitle}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold text-[#f58220] uppercase">
                    {item.lockModel}
                  </span>
                  <h3 className="text-base font-black text-white mt-1 mb-2">
                    {item.projectTitle}
                  </h3>
                  <p className="text-xs text-sky-200">
                    {item.doorType} • {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 4 Service Commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.serviceCommitments.map((sc) => (
              <div
                key={sc.id}
                className="p-5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15"
              >
                <CheckCircle2 className="w-6 h-6 text-[#f58220] mb-2.5" />
                <h4 className="text-sm font-black uppercase text-white mb-1">
                  {sc.title}
                </h4>
                <p className="text-xs text-sky-100 leading-relaxed">
                  {sc.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER HICHIHOME */}
      <footer
        id="lien-he-hichihome"
        className="bg-[#061826] text-slate-300 pt-14 pb-8"
      >
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00527a] flex items-center justify-center text-[#f58220]">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-black text-white">
                    HichiHome
                  </span>
                  <span className="block text-[10px] text-[#f58220] font-bold">
                    Khóa vân tay chính hãng
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.business.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
                Sản Phẩm Chủ Lực
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Khóa vân tay Bosch CHLB Đức</li>
                <li>Khóa Face ID 3D Philips Hà Lan</li>
                <li>Khóa vân tay Kaadas & Solity</li>
                <li>Khóa cửa nhôm Xingfa chống nước</li>
                <li>Khóa đại sảnh biệt thự mạ vàng 24K</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
                Showroom & Bảo Hành
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#f58220] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#f58220] shrink-0" />
                  <span>Hotline Kỹ thuật 24/7: {data.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#f58220] shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
                Đặt Lịch Khảo Sát Đố Cửa Miễn Phí
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!consultPhone.trim()) return;
                  setConsultSent(true);
                  setConsultPhone("");
                }}
                className="space-y-2.5"
              >
                <input
                  type="tel"
                  value={consultPhone}
                  onChange={(e) => setConsultPhone(e.target.value)}
                  placeholder="Số điện thoại gia chủ..."
                  required
                  className="w-full h-10 px-3.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white focus:outline-none focus:border-[#f58220]"
                />
                <button
                  type="submit"
                  className="w-full h-10 rounded-lg bg-[#f58220] hover:bg-[#d96b11] text-white font-extrabold text-xs uppercase tracking-wider transition-colors"
                >
                  Yêu Cầu Kỹ Thuật Viên Tận Nơi
                </button>
              </form>
              {consultSent && (
                <p className="text-xs text-emerald-400 mt-2">
                  ✓ Đã tiếp nhận! Kỹ thuật viên HichiHome sẽ gọi lại ngay.
                </p>
              )}
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-500">
            © Bản quyền thuộc về{" "}
            <span className="text-white font-bold">{data.business.name}</span>.
            Giải pháp công nghệ khóa cửa điện tử hàng đầu Việt Nam.
          </div>
        </div>
      </footer>

      {/* LOCK CONSULTATION MODAL */}
      {activeLockModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="p-5 bg-[#00527a] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#f58220]">
                  {activeLockModal.brand} • {activeLockModal.category}
                </span>
                <h3 className="text-base font-black">{activeLockModal.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveLockModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50">
                <span className="text-xs text-slate-500">
                  Giá trọn gói lắp đặt:
                </span>
                <span className="text-lg font-black text-[#e11d48]">
                  {activeLockModal.price}
                </span>
              </div>
              <p className="text-xs text-slate-600">
                <strong>Yêu cầu đố cửa:</strong>{" "}
                {activeLockModal.doorRequirement}
              </p>
              <p className="text-xs text-emerald-700 font-semibold">
                ✓ Miễn phí công lắp đặt tận nhà tại Hà Nội & TP.HCM trong 2 giờ.
              </p>
              <div className="flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveLockModal(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-lg"
                >
                  Đóng
                </button>
                <a
                  href={`tel:${data.business.phone[0].replace(/\s+/g, "")}`}
                  onClick={() => setActiveLockModal(null)}
                  className="px-5 py-2 text-xs font-bold bg-[#f58220] text-white rounded-lg"
                >
                  Gọi Đặt Lắp Ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
