"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  LayoutGrid,
  Play,
  Music,
  ChevronRight,
  ChevronDown,
  Briefcase,
  Gamepad2,
  GraduationCap,
  Monitor,
  Shield,
  ShieldAlert,
  Wrench,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  X,
  Menu,
  Crown,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile21MockData,
  CorporateProfile21Data,
  WokuSoftwareProduct,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  companyName?: string;
  customData?: Partial<CorporateProfile21Data>;
}

export function DemoTemplateRenderer({
  companyName,
  customData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData(corporateProfile21MockData, {
    ...customData,
    business: {
      ...corporateProfile21MockData.business,
      ...(customData?.business || {}),
      ...(companyName ? { name: companyName } : {}),
    },
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Mặc định");
  const [workExpanded, setWorkExpanded] = useState<boolean>(true);
  const [cart, setCart] = useState<WokuSoftwareProduct[]>([]);
  const [activeModalProduct, setActiveModalProduct] =
    useState<WokuSoftwareProduct | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [b2bEmail, setB2bEmail] = useState<string>("");
  const [b2bSent, setB2bSent] = useState<boolean>(false);

  const renderSidebarIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-4 h-4" />;
      case "Gamepad2":
        return <Gamepad2 className="w-4 h-4" />;
      case "GraduationCap":
        return <GraduationCap className="w-4 h-4" />;
      case "LayoutGrid":
        return <LayoutGrid className="w-4 h-4" />;
      case "Monitor":
        return <Monitor className="w-4 h-4" />;
      case "Shield":
        return <Shield className="w-4 h-4" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-4 h-4" />;
      case "Wrench":
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  const handleSelectProduct = (prod: WokuSoftwareProduct) => {
    setCart((prev) => [...prev, prod]);
    setActiveModalProduct(prod);
  };

  const filteredProducts = data.softwareProducts.filter((prod) => {
    const matchesCategory =
      selectedCategory === "Tất cả" ||
      prod.subCategory.toLowerCase() === selectedCategory.toLowerCase() ||
      prod.categoryGroup.toLowerCase() === selectedCategory.toLowerCase() ||
      prod.brand.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      !searchQuery.trim() ||
      prod.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      prod.subtitle.toLowerCase().includes(searchQuery.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const aiProducts = data.softwareProducts.filter(
    (p) => p.subCategory === "Công Cụ AI"
  );
  const designProducts = data.softwareProducts.filter(
    (p) => p.subCategory === "Thiết Kế / Đồ Họa"
  );
  const officeAndEntertainmentProducts = data.softwareProducts.filter(
    (p) =>
      p.subCategory !== "Công Cụ AI" && p.subCategory !== "Thiết Kế / Đồ Họa"
  );

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#18181b] font-sans antialiased selection:bg-[#ef4444] selection:text-white">
      {/* 1. TOP PROMO GRADIENT BAR */}
      <div className="bg-gradient-to-r from-[#fff1eb] via-[#ff5858] to-[#9333ea] text-white text-xs">
        <div className="max-w-[1240px] mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#1e1b4b] sm:text-white font-semibold">
            <span className="inline-flex items-center gap-1 bg-[#ef4444] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
              HOT DEAL
            </span>
            <span className="text-[#1f2937] sm:text-white font-medium">
              {data.topPromoBanner.leftText}{" "}
              <strong className="font-extrabold underline decoration-white/60">
                {data.topPromoBanner.highlightBrand}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="text-xs sm:text-sm font-black tracking-tight text-white">
              {data.topPromoBanner.saleText}{" "}
              <span className="text-[#fde047] underline">
                {data.topPromoBanner.priceText}
              </span>
            </span>
            <a
              href="#workspace-catalog"
              className="inline-flex items-center gap-1 bg-[#0f0f14] hover:bg-black text-white text-[11px] font-bold px-3.5 py-1 rounded-full transition-colors"
            >
              <span>{data.topPromoBanner.ctaLabel}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. SLEEK DARK HEADER + HERO BANNER (#0c0c10) */}
      <div className="bg-[#0b0b0f] text-white relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#ef4444]/15 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 right-10 w-80 h-80 rounded-full bg-[#1db954]/15 blur-[100px]" />

        {/* Sub-navigation Row */}
        <div className="border-b border-white/10 text-[11px] text-gray-400">
          <div className="max-w-[1240px] mx-auto px-4 h-9 flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-6">
              {data.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4 ml-auto">
              <a
                href={`tel:${data.business.phone[0].replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#ff4d4d]"
              >
                <Phone className="w-3 h-3 text-[#ff4d4d]" />
                <span>Hotline: {data.business.phone[0]}</span>
              </a>
              <a
                href={`mailto:${data.business.email[0]}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-gray-300 hover:text-[#ff4d4d]"
              >
                <Mail className="w-3 h-3 text-[#ff4d4d]" />
                <span>{data.business.email[0]}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Header Row: WK Logo + Danh mục Pill + Search Bar + Cart & Login */}
        <header className="max-w-[1240px] mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* WK Gradient Monogram Logo */}
            <a
              href="#"
              onClick={() => {
                setSelectedCategory("Tất cả");
                setSearchQuery("");
              }}
              className="flex items-center gap-2.5 group select-none"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f97316] via-[#ef4444] to-[#9333ea] p-0.5 shadow-lg shadow-[#ef4444]/20">
                <div className="w-full h-full bg-[#0b0b0f] rounded-[10px] flex flex-col items-center justify-center">
                  <Crown className="w-3 h-3 text-[#f97316] -mb-0.5" />
                  <span className="font-black text-base tracking-tighter bg-gradient-to-r from-[#f97316] via-[#ef4444] to-[#a855f7] bg-clip-text text-transparent">
                    WK
                  </span>
                </div>
              </div>
              <div className="hidden sm:block leading-none">
                <span className="block text-lg font-black tracking-tight text-white">
                  WOKU
                </span>
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">
                  Licensed Software
                </span>
              </div>
            </a>

            {/* Red-Magenta Pill Button: Danh mục */}
            <a
              href="#workspace-catalog"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#f43f5e] to-[#ec4899] hover:opacity-95 text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-md transition-opacity"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Danh mục</span>
            </a>
          </div>

          {/* Center Dark Rounded Search Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const target = document.getElementById("workspace-catalog");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:flex items-center flex-1 max-w-lg mx-4"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm phần mềm ChatGPT, Adobe, YouTube, Office 365..."
                className="w-full h-10 pl-4 pr-11 text-xs bg-[#181820] border border-white/15 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#ef4444]"
              />
              <button
                type="submit"
                aria-label="Tìm kiếm"
                className="absolute right-1 top-1 bottom-1 w-8 rounded-full bg-gradient-to-r from-[#ef4444] to-[#ec4899] text-white flex items-center justify-center hover:opacity-90"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Right Cart & Account */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => {
                if (cart.length > 0) {
                  setActiveModalProduct(cart[cart.length - 1]);
                } else {
                  setActiveModalProduct(data.softwareProducts[0]);
                }
              }}
              className="inline-flex items-center gap-2 bg-[#181820] hover:bg-[#22222d] border border-white/10 text-white text-xs font-bold px-3.5 py-2 rounded-full transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-[#ef4444] text-white text-[10px] flex items-center justify-center font-black">
                {cart.length}
              </span>
              <ShoppingBag className="w-3.5 h-3.5 text-[#f43f5e]" />
              <span className="hidden sm:inline">Giỏ hàng</span>
            </button>

            <a
              href="#lien-he-woku"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#181820] hover:bg-[#22222d] border border-white/10 text-white text-xs font-bold px-3.5 py-2 rounded-full transition-colors"
            >
              <User className="w-3.5 h-3.5 text-[#f97316]" />
              <span>Đăng nhập</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 border-b border-white/10">
            {data.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs font-semibold text-gray-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* HERO BANNER SECTION (MATCHES YOUTUBE & SPOTIFY GLOSSY CARDS IN SCREENSHOT) */}
        <section className="max-w-[1240px] mx-auto px-4 pt-6 pb-12">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#161016] via-[#0e0d12] to-[#0c1410] border border-white/10 p-6 sm:p-10 overflow-hidden shadow-2xl">
            {/* Subtle Background Watermark Play Icon */}
            <div className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
              <div className="w-64 h-44 rounded-3xl border-4 border-[#ef4444] flex items-center justify-center">
                <Play className="w-20 h-20 text-[#ef4444] fill-[#ef4444]" />
              </div>
            </div>

            {/* Decorative Faint Gold Badges in Background */}
            <div className="hidden lg:flex absolute top-8 left-8 px-4 py-2 rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 text-[#f59e0b]/40 font-black text-xl tracking-tight rotate-[-6deg] select-none">
              SALE OFF 15%
            </div>
            <div className="hidden lg:flex absolute top-8 right-10 px-4 py-2 rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 text-[#f59e0b]/40 font-black text-xl tracking-tight rotate-[6deg] select-none">
              CHỈ TỪ 2X.000
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 5 Cols: Headline & CTA */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  <span>Trang chủ</span>
                  <span>•</span>
                  <span>Sản phẩm</span>
                  <span>•</span>
                  <span className="text-[#f43f5e]">Giải trí & AI</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black leading-tight tracking-tight text-white">
                  {data.hero.title}
                </h1>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {data.hero.subtitle}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#workspace-catalog"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 bg-white/5 hover:bg-[#ef4444] hover:border-[#ef4444] text-white text-xs font-bold transition-all"
                  >
                    <span>{data.hero.primaryCta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right 7 Cols: 2 Glossy Subscription Cards (YouTube Premium & Spotify Premium) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Card 1: YouTube Premium */}
                <div
                  onClick={() =>
                    handleSelectProduct(
                      data.softwareProducts.find(
                        (p) => p.brand === "YouTube"
                      ) || data.softwareProducts[0]
                    )
                  }
                  className="group relative rounded-2xl bg-gradient-to-br from-[#2d0609] via-[#1a0507] to-[#0d0405] border border-[#ff0033]/30 hover:border-[#ff0033] p-5 shadow-xl cursor-pointer transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow">
                      SALE OFF 15%
                    </span>
                    <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow">
                      CHỈ TỪ 2X.000
                    </span>
                  </div>

                  {/* Center Red Play Button Emblem */}
                  <div className="my-4 flex flex-col items-center justify-center">
                    <div className="w-20 h-14 rounded-2xl bg-[#ff0033] flex items-center justify-center shadow-lg shadow-[#ff0033]/40 group-hover:scale-105 transition-transform">
                      <Play className="w-8 h-8 text-white fill-white ml-0.5" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-300 mt-3">
                      Premium
                    </span>
                    <h3 className="text-xl font-black tracking-tight text-white">
                      YouTube
                    </h3>
                  </div>

                  <p className="text-[11px] text-center text-gray-400">
                    Xem video 4K không quảng cáo • YouTube Music
                  </p>
                </div>

                {/* Card 2: Spotify Premium */}
                <div
                  onClick={() =>
                    handleSelectProduct(
                      data.softwareProducts.find(
                        (p) => p.brand === "Netflix"
                      ) || data.softwareProducts[1]
                    )
                  }
                  className="group relative rounded-2xl bg-gradient-to-br from-[#052914] via-[#061c10] to-[#040f08] border border-[#1db954]/30 hover:border-[#1db954] p-5 shadow-xl cursor-pointer transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow">
                      SALE OFF 15%
                    </span>
                    <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow">
                      CHỈ TỪ 2X.000
                    </span>
                  </div>

                  {/* Center Green Spotify Emblem */}
                  <div className="my-4 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#1db954] flex items-center justify-center shadow-lg shadow-[#1db954]/40 group-hover:scale-105 transition-transform">
                      <Music className="w-8 h-8 text-black stroke-[2.5]" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-300 mt-3">
                      Premium
                    </span>
                    <h3 className="text-xl font-black tracking-tight text-white">
                      Spotify
                    </h3>
                  </div>

                  <p className="text-[11px] text-center text-gray-400">
                    Âm thanh Lossless • Nghe nhạc Offline mọi nơi
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar & Number 01 */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-3 flex-1 max-w-md">
                <div className="h-1 flex-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-[#f97316] via-[#ef4444] to-[#ec4899]" />
                </div>
              </div>
              <span className="text-lg font-black text-white">01</span>
            </div>
          </div>
        </section>
      </div>

      {/* 3. SOFTWARE BRAND QUICK-PILLS BAR */}
      <section className="bg-white border-b border-gray-200 py-3.5 shadow-2xs">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {data.brandQuickPills.map((pill) => {
              const isSelected = selectedCategory === pill.categoryFilter && pill.name !== "Tất cả";
              return (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(
                      pill.name === "Tất cả" ? "Tất cả" : pill.categoryFilter
                    )
                  }
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border transition-all shrink-0 ${
                    isSelected || (pill.name === "Tất cả" && selectedCategory === "Tất cả")
                      ? "bg-[#18181b] text-white border-[#18181b] shadow-xs"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#ef4444] hover:bg-white"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: pill.dotColor }}
                  />
                  <span>{pill.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MAIN 2-COLUMN WORKSPACE: LEFT SIDEBAR (DANH MỤC SẢN PHẨM) + RIGHT SOFTWARE CARDS */}
      <section
        id="workspace-catalog"
        className="max-w-[1240px] mx-auto px-4 py-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* LEFT 3 COLS: DANH MỤC SẢN PHẨM SIDEBAR + PROMO BANNERS */}
          <aside className="lg:col-span-3 space-y-5">
            {/* Rounded Sidebar Card with Coral-Red Border */}
            <div className="bg-white rounded-2xl border-2 border-[#fca5a5]/70 p-5 shadow-sm">
              <h2 className="text-lg font-black text-[#ef4444] leading-snug mb-4">
                Danh mục sản phẩm
              </h2>

              <ul className="space-y-1.5">
                {data.sidebarCategories.map((cat) => {
                  const isWork = cat.id === "side-work";
                  const isActive = selectedCategory === cat.label;
                  return (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onClick={() => {
                          if (isWork) {
                            setWorkExpanded(!workExpanded);
                          }
                          setSelectedCategory(cat.label);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-[13px] font-bold transition-colors ${
                          isActive
                            ? "bg-[#fef2f2] text-[#ef4444]"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#ef4444]"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={
                              isActive ? "text-[#ef4444]" : "text-gray-500"
                            }
                          >
                            {renderSidebarIcon(cat.iconName)}
                          </span>
                          <span>{cat.label}</span>
                        </span>
                        {cat.subItems && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              workExpanded ? "rotate-180 text-[#ef4444]" : ""
                            }`}
                          />
                        )}
                      </button>

                      {/* Tree Sub-items under Làm Việc */}
                      {isWork && workExpanded && cat.subItems && (
                        <ul className="mt-1 ml-5 pl-3 border-l-2 border-gray-200 space-y-1">
                          {cat.subItems.map((sub) => {
                            const subActive = selectedCategory === sub;
                            return (
                              <li key={sub}>
                                <button
                                  type="button"
                                  onClick={() => setSelectedCategory(sub)}
                                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 ${
                                    subActive
                                      ? "text-[#ef4444] font-extrabold bg-[#fef2f2]"
                                      : "text-gray-600 hover:text-[#ef4444]"
                                  }`}
                                >
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      subActive ? "bg-[#ef4444]" : "bg-gray-300"
                                    }`}
                                  />
                                  <span>{sub}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Sidebar Promo Banners (Microsoft Office 365 & Quizlet Plus) */}
            {data.sidebarPromoBanners.map((banner) => (
              <div
                key={banner.id}
                onClick={() => handleSelectProduct(data.softwareProducts[7])}
                className={`rounded-2xl bg-gradient-to-br ${banner.bgGradient} text-white p-5 shadow-md cursor-pointer hover:opacity-95 transition-opacity`}
              >
                <span className="inline-block bg-white/20 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-2">
                  {banner.badge}
                </span>
                <h3 className="text-base font-black leading-snug">
                  {banner.title}
                </h3>
                <p className="text-xs text-white/85 mt-1 mb-3">
                  {banner.subtitle}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/15">
                  <span className="text-xs font-black text-[#fde047]">
                    {banner.price}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold">
                    Nâng cấp <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </aside>

          {/* RIGHT 9 COLS: SOFTWARE SHOWCASE BLOCKS */}
          <div className="lg:col-span-9 space-y-10">
            {/* Filter Notice if Active */}
            {(selectedCategory !== "Tất cả" || searchQuery.trim() !== "") && (
              <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700">
                  <Sparkles className="w-4 h-4 text-[#ef4444]" />
                  <span>
                    Đang lọc theo:{" "}
                    <strong className="text-[#ef4444]">
                      {selectedCategory}
                    </strong>
                    {searchQuery && ` • Từ khóa: "${searchQuery}"`} (
                    {filteredProducts.length} sản phẩm)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("Tất cả");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold text-gray-500 hover:text-[#ef4444]"
                >
                  Xóa bộ lọc ✕
                </button>
              </div>
            )}

            {/* BLOCK 1: CÔNG CỤ AI (Matches Screenshot Top Right Grid) */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <h2 className="text-xl sm:text-2xl font-black text-[#ef4444] tracking-tight">
                  {selectedCategory === "Tất cả"
                    ? "Công Cụ AI"
                    : selectedCategory}
                </h2>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Sắp xếp:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#ef4444]"
                  >
                    <option value="Mặc định">Mặc định</option>
                    <option value="Bán chạy nhất">Bán chạy nhất</option>
                    <option value="Giá thấp đến cao">Giá thấp đến cao</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(selectedCategory === "Tất cả"
                  ? aiProducts
                  : filteredProducts
                ).map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => handleSelectProduct(prod)}
                    className="group bg-white rounded-2xl border border-gray-200 hover:border-[#ef4444] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Glossy Dark Top Visual Card */}
                    <div
                      className={`relative h-44 bg-gradient-to-br ${prod.cardBgGradient} p-4 flex flex-col justify-between text-white overflow-hidden`}
                    >
                      <div className="flex items-center justify-between gap-1 relative z-10">
                        <span className="bg-[#fbbf24] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded">
                          {prod.discountBadge}
                        </span>
                        <span className="bg-white/15 backdrop-blur-xs text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded">
                          {prod.StartingFromBadge}
                        </span>
                      </div>

                      {/* Center Brand Badge */}
                      <div className="relative z-10 my-auto text-center">
                        <span
                          className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1"
                          style={{
                            backgroundColor: `${prod.accentColor}33`,
                            color: prod.accentColor,
                            border: `1px solid ${prod.accentColor}66`,
                          }}
                        >
                          {prod.brand}
                        </span>
                        <h3 className="text-base font-black tracking-tight text-white drop-shadow">
                          {prod.badgeText}
                        </h3>
                      </div>

                      <div className="relative z-10 text-[10px] text-white/75 text-center truncate">
                        {prod.duration}
                      </div>
                    </div>

                    {/* White Bottom Product Details */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-extrabold text-gray-900 group-hover:text-[#ef4444] transition-colors line-clamp-2 mb-1">
                          {prod.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 line-clamp-2 mb-3">
                          {prod.subtitle}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          <span className="block text-[10px] text-gray-400 line-through">
                            {prod.oldPrice}
                          </span>
                          <span className="text-sm font-black text-[#ef4444]">
                            {prod.price}
                          </span>
                        </div>
                        <span className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#ef4444] group-hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOCK 2: THIẾT KẾ & SÁNG TẠO ĐỒ HỌA */}
            {selectedCategory === "Tất cả" && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                    Thiết Kế & Đồ Họa Bản Quyền
                  </h2>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("Thiết Kế / Đồ Họa")}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ef4444] hover:underline"
                  >
                    <span>Xem tất cả</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {designProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => handleSelectProduct(prod)}
                      className="group bg-white rounded-2xl border border-gray-200 hover:border-[#ef4444] overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div
                        className={`relative h-44 bg-gradient-to-br ${prod.cardBgGradient} p-4 flex flex-col justify-between text-white`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="bg-[#fbbf24] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded">
                            {prod.discountBadge}
                          </span>
                          <span className="bg-white/15 text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded">
                            {prod.StartingFromBadge}
                          </span>
                        </div>
                        <div className="text-center my-auto">
                          <h3 className="text-lg font-black text-white">
                            {prod.badgeText}
                          </h3>
                          <p className="text-[11px] text-white/80 mt-0.5">
                            {prod.duration}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-extrabold text-gray-900 group-hover:text-[#ef4444] mb-1">
                            {prod.name}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                            {prod.subtitle}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                          <div>
                            <span className="text-[11px] text-gray-400 line-through mr-2">
                              {prod.oldPrice}
                            </span>
                            <span className="text-base font-black text-[#ef4444]">
                              {prod.price}
                            </span>
                          </div>
                          <span className="px-3 py-1.5 rounded-full bg-[#fef2f2] group-hover:bg-[#ef4444] text-[#ef4444] group-hover:text-white text-xs font-bold transition-colors">
                            Mua ngay
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BLOCK 3: VĂN PHÒNG, HỆ ĐIỀU HÀNH & GIẢI TRÍ */}
            {selectedCategory === "Tất cả" && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                    Văn Phòng, Lập Trình & Giải Trí Đỉnh Cao
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {officeAndEntertainmentProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => handleSelectProduct(prod)}
                      className="group bg-white rounded-2xl border border-gray-200 hover:border-[#ef4444] overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div
                        className={`relative h-40 bg-gradient-to-br ${prod.cardBgGradient} p-4 flex flex-col justify-between text-white`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="bg-[#fbbf24] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded">
                            {prod.discountBadge}
                          </span>
                          <span className="bg-white/15 text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded">
                            {prod.StartingFromBadge}
                          </span>
                        </div>
                        <div className="text-center my-auto">
                          <h3 className="text-lg font-black text-white">
                            {prod.badgeText}
                          </h3>
                          <span className="text-[11px] text-white/80">
                            {prod.duration}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 group-hover:text-[#ef4444] mb-1">
                            {prod.name}
                          </h4>
                          <p className="text-[11px] text-gray-500 line-clamp-2 mb-3">
                            {prod.subtitle}
                          </p>
                        </div>

                        <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-gray-400 line-through block">
                              {prod.oldPrice}
                            </span>
                            <span className="text-sm font-black text-[#ef4444]">
                              {prod.price}
                            </span>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-gray-100 group-hover:bg-[#ef4444] text-gray-800 group-hover:text-white text-[11px] font-bold transition-colors">
                            Chọn gói
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. CAM KẾT BẢN QUYỀN DOANH NGHIỆP WOKU CORP */}
      <section
        id="uu-diem-woku"
        className="py-16 bg-white border-t border-gray-200"
      >
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ef4444] mb-2">
              HỒ SƠ NĂNG LỰC WOKU CORP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#18181b]">
              Đơn Vị Cung Cấp Phần Mềm Bản Quyền Hàng Đầu
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Giải pháp tối ưu chi phí bản quyền AI, thiết kế và văn phòng cho
              cá nhân và hơn 850+ doanh nghiệp tại Việt Nam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.b2bAdvantages.map((adv) => (
              <div
                key={adv.id}
                className="rounded-2xl bg-[#f8f9fc] border border-gray-200/80 p-6 hover:border-[#ef4444]/40 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f97316] to-[#ef4444] text-white font-black text-sm mb-4">
                  {adv.number}
                </span>
                <h3 className="text-base font-extrabold text-gray-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TIN TỨC & CẨM NANG PHẦN MỀM + DARK FOOTER */}
      <footer id="lien-he-woku" className="bg-[#0b0b0f] text-gray-300 pt-14 pb-8">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1 */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f97316] via-[#ef4444] to-[#9333ea] flex items-center justify-center text-white font-black">
                  WK
                </div>
                <span className="text-xl font-black text-white">WOKU CORP</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {data.business.description}
              </p>
              <p className="text-xs text-gray-400">
                MST:{" "}
                <strong className="text-white">{data.business.taxCode}</strong>
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
                Danh Mục Bản Quyền
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <a href="#workspace-catalog" className="hover:text-[#ef4444]">
                    Tài khoản ChatGPT Plus / Claude 3.5 Pro
                  </a>
                </li>
                <li>
                  <a href="#workspace-catalog" className="hover:text-[#ef4444]">
                    Adobe Creative Cloud Full Apps 1 Năm
                  </a>
                </li>
                <li>
                  <a href="#workspace-catalog" className="hover:text-[#ef4444]">
                    Microsoft 365 & Key Windows 11 Pro
                  </a>
                </li>
                <li>
                  <a href="#workspace-catalog" className="hover:text-[#ef4444]">
                    YouTube Premium & Spotify Premium
                  </a>
                </li>
                <li>
                  <a href="#workspace-catalog" className="hover:text-[#ef4444]">
                    JetBrains All Products & GitHub Copilot
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
                Hỗ Trợ Khách Hàng
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li>Địa chỉ: {data.business.address}</li>
                <li>Hotline mua lẻ: {data.business.phone[0]}</li>
                <li>Phòng dự án B2B: {data.business.phone[1]}</li>
                <li>Email: {data.business.email[0]}</li>
                <li>Giờ làm việc: {data.business.workingHours}</li>
              </ul>
            </div>

            {/* Col 4: Nhận Báo Giá B2B */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
                Báo Giá Doanh Nghiệp (VAT)
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                Để lại email công ty để nhận bảng giá chiết khấu đến 45% cho gói
                từ 5 license trở lên.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!b2bEmail.trim()) return;
                  setB2bSent(true);
                  setB2bEmail("");
                }}
                className="space-y-2"
              >
                <input
                  type="email"
                  value={b2bEmail}
                  onChange={(e) => setB2bEmail(e.target.value)}
                  placeholder="Email doanh nghiệp của bạn..."
                  required
                  className="w-full h-10 px-3.5 rounded-lg bg-[#181820] border border-white/15 text-xs text-white focus:outline-none focus:border-[#ef4444]"
                />
                <button
                  type="submit"
                  className="w-full h-10 rounded-lg bg-gradient-to-r from-[#f97316] via-[#ef4444] to-[#ec4899] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95"
                >
                  Nhận Bảng Giá B2B
                </button>
              </form>
              {b2bSent && (
                <p className="text-[11px] text-[#22c55e] mt-2">
                  ✓ Đã gửi bảng giá bản quyền doanh nghiệp qua email!
                </p>
              )}
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-gray-500">
            © Bản quyền thuộc về{" "}
            <span className="text-white font-semibold">
              {data.business.name}
            </span>
            . Đơn vị cung cấp phần mềm bản quyền chính hãng hàng đầu.
          </div>
        </div>
      </footer>

      {/* QUICK LICENSE MODAL */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div
              className={`p-5 bg-gradient-to-r ${activeModalProduct.cardBgGradient} text-white flex items-center justify-between`}
            >
              <div>
                <span className="text-[10px] font-bold uppercase text-[#fbbf24]">
                  {activeModalProduct.discountBadge}
                </span>
                <h3 className="text-base font-black">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProduct(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-xs text-gray-600 mb-4">
                {activeModalProduct.subtitle}
              </p>
              <ul className="space-y-2 mb-5">
                {activeModalProduct.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-xs text-gray-700 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-100 mb-5">
                <span className="text-xs font-semibold text-gray-500">
                  Thời hạn: {activeModalProduct.duration}
                </span>
                <span className="text-lg font-black text-[#ef4444]">
                  {activeModalProduct.price}
                </span>
              </div>
              <div className="flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Đóng
                </button>
                <a
                  href="#lien-he-woku"
                  onClick={() => setActiveModalProduct(null)}
                  className="px-5 py-2 text-xs font-bold bg-gradient-to-r from-[#f97316] to-[#ef4444] text-white rounded-lg"
                >
                  Kích Hoạt Bản Quyền Ngay
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
