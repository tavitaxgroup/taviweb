'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Box,
  CheckCircle2,
  ChevronDown,
  Globe,
  Compass,
  DollarSign,
  Download,
  FileSpreadsheet,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  PackageSearch,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Warehouse,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  CleanSupplyTemplateData,
  CleanSupplyWholesaleItem,
  defaultCleanSupplyData,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const templateData = useMemo(
    () =>
      adaptClonedTemplateData(
        defaultCleanSupplyData,
        data
      ) as CleanSupplyTemplateData,
    [data]
  );

  // Hero Tabbed Search / Tracking State (matching reference screenshot)
  const [heroTab, setHeroTab] = useState<'search' | 'tracking'>('search');
  const [selectedSource, setSelectedSource] = useState<string>(
    templateData.hero.catalogSources[0] || 'KHO MÁY CHÀ SÀN'
  );
  const [searchKeyword, setSearchKeyword] = useState('');
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  const [wholesaleCart, setWholesaleCart] = useState<CleanSupplyWholesaleItem[]>(
    []
  );
  const [selectedItemModal, setSelectedItemModal] =
    useState<CleanSupplyWholesaleItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const q = searchKeyword.trim().toLowerCase();
    return templateData.wholesaleProducts.filter((item) => {
      const matchesKeyword = q
        ? item.name.toLowerCase().includes(q) ||
          item.sku.toLowerCase().includes(q)
        : true;
      return matchesKeyword;
    });
  }, [templateData.wholesaleProducts, searchKeyword]);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const code = trackingCode.trim() || 'VS016-8892';
    setTrackingResult(
      `Mã vận đơn [${code.toUpperCase()}]: Đã xuất Kho Tổng Quận 12 — Đang trung chuyển xe tải 5 tấn (Dự kiến giao trong 18 giờ).`
    );
  };

  return (
    <div
      id="gioi-thieu"
      className="min-h-screen bg-[#f4f5f7] text-neutral-800 antialiased selection:bg-[#d49a2a] selection:text-white"
    >
      {/* 1. GOLDEN AMBER TOP BAR (#c89128) — EXACT MATCH TO SCREENSHOT */}
      <div className="bg-gradient-to-r from-[#b8821e] via-[#d49a2a] to-[#c48b22] text-xs font-semibold text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <DollarSign className="h-3.5 w-3.5 rounded-full bg-white p-0.5 text-[#b8821e]" />
              <span>{templateData.business.exchangeNotice}</span>
            </span>
            <span className="hidden text-white/50 sm:inline">|</span>
            <a
              href={`tel:${templateData.business.phone[0]}`}
              className="inline-flex items-center gap-1.5 font-extrabold text-white hover:underline"
            >
              <Phone className="h-3.5 w-3.5 rounded-full bg-white p-0.5 text-[#b8821e]" />
              <span>Hotline: {templateData.business.phone[0]}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider">
            <a href="#chinh-sach" className="hover:underline">
              Đăng ký Đại lý
            </a>
            <span className="text-white/50">|</span>
            <a href="#lien-he-kho" className="hover:underline">
              Đăng nhập Kho Sỉ
            </a>
          </div>
        </div>
      </div>

      {/* 2. DARK CHARCOAL MAIN HEADER (#1e2126) */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1e2126] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5">
          {/* Golden Emblem Logo */}
          <a href="#gioi-thieu" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d49a2a]/50 bg-gradient-to-br from-[#e5a93c] to-[#a87214] text-neutral-950 shadow-sm">
              <Warehouse className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-base font-black tracking-wide text-[#e5a93c] sm:text-lg">
                {templateData.business.domain}
              </span>
              <span className="block text-[10px] font-medium text-neutral-400">
                Tổng Kho Thiết Bị Vệ Sinh Công Nghiệp
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-6 lg:flex">
            {templateData.navigation.map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                className="flex items-center gap-1 text-xs font-bold text-neutral-200 transition hover:text-[#e5a93c]"
              >
                <span>{nav.label}</span>
                {nav.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-[#e5a93c]" />
                )}
              </a>
            ))}
          </nav>

          {/* Wholesale Quote Cart Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('kho-thiet-bi');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 rounded-lg border border-[#d49a2a]/60 bg-[#2a2e35] px-3.5 py-2 text-xs font-bold text-[#e5a93c] transition hover:bg-[#d49a2a] hover:text-neutral-950"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Đơn Sỉ ({wholesaleCart.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="rounded-lg border border-neutral-700 p-2 text-neutral-200 lg:hidden"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-neutral-800 bg-[#181a1f] px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2">
              {templateData.navigation.map((nav) => (
                <a
                  key={nav.label}
                  href={nav.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-xs font-bold text-neutral-200 hover:text-[#e5a93c]"
                >
                  {nav.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 3. INDUSTRIAL PORT/WAREHOUSE HERO WITH TABBED SEARCH & FLOATING LIVE NOTICES */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-14 text-white lg:py-20"
        style={{
          backgroundImage: `url(${templateData.hero.backgroundImage})`,
        }}
      >
        {/* Warm Golden Amber & Dark Industrial Overlay (matching screenshot) */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-[#5a3e0d]/80 to-[#8f6214]/75" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left 4 Cols: 3 Translucent Glassmorphism Live Warehouse Feed Cards (exact match to left stack in screenshot!) */}
            <div className="order-2 space-y-3 lg:order-1 lg:col-span-4">
              {templateData.hero.liveNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="rounded-xl border border-white/15 bg-neutral-950/65 p-4 backdrop-blur-md transition hover:border-[#e5a93c]/60"
                >
                  <div className="flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="font-mono">{notice.date}</span>
                    <span className="rounded-sm bg-[#d49a2a]/25 px-2 py-0.5 text-[10px] font-bold text-[#f5c156]">
                      {notice.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-semibold leading-relaxed text-neutral-100">
                    {notice.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Right 8 Cols: Main Headline + 2-Tab Search / Tracking Box + Extension Buttons */}
            <div className="order-1 text-center lg:order-2 lg:col-span-8">
              <p className="text-sm font-extrabold uppercase tracking-widest text-[#f5c156] sm:text-base">
                {templateData.hero.preTitle}
              </p>
              <h1 className="mt-2 text-2xl font-black tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
                {templateData.hero.mainTitle}
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-neutral-200 sm:text-sm">
                {templateData.hero.subtitle}
              </p>

              {/* TABBED SEARCH / TRACKING WIDGET (matching exact trapezoid tab bar in screenshot) */}
              <div className="mx-auto mt-8 max-w-3xl text-left shadow-2xl">
                {/* Tab Headers */}
                <div className="grid grid-cols-2 overflow-hidden rounded-t-xl">
                  <button
                    type="button"
                    onClick={() => setHeroTab('search')}
                    className={`flex items-center justify-center gap-2 py-3.5 text-xs font-extrabold uppercase tracking-wider transition sm:text-sm ${
                      heroTab === 'search'
                        ? 'bg-white text-neutral-900'
                        : 'bg-[#c89128] text-white hover:bg-[#b5801e]'
                    }`}
                  >
                    <Search className="h-4 w-4 text-[#c89128]" />
                    <span>Tìm kiếm sản phẩm</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroTab('tracking')}
                    className={`flex items-center justify-center gap-2 py-3.5 text-xs font-extrabold uppercase tracking-wider transition sm:text-sm ${
                      heroTab === 'tracking'
                        ? 'bg-white text-neutral-900'
                        : 'bg-[#c89128] text-white hover:bg-[#b5801e]'
                    }`}
                  >
                    <PackageSearch className="h-4 w-4" />
                    <span>Tra cứu mã vận đơn</span>
                  </button>
                </div>

                {/* Tab Body */}
                <div className="rounded-b-xl border-2 border-[#d49a2a] bg-white p-3 text-neutral-800 sm:p-4">
                  {heroTab === 'search' ? (
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      {/* Source Dropdown */}
                      <div className="relative flex items-center gap-2 border-b border-neutral-200 pb-2 sm:border-r sm:border-b-0 sm:pr-3 sm:pb-0">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-[10px] font-black text-white">
                          VN
                        </span>
                        <select
                          value={selectedSource}
                          onChange={(e) => setSelectedSource(e.target.value)}
                          className="bg-transparent pr-2 text-xs font-extrabold text-neutral-800 outline-none"
                        >
                          {templateData.hero.catalogSources.map((src) => (
                            <option key={src} value={src}>
                              {src}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Search Input */}
                      <input
                        type="text"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        placeholder="Nhập tên máy chà sàn, máy hút bụi, mã phụ tùng bạn muốn tìm kiếm..."
                        className="w-full flex-1 px-2 py-2 text-xs text-neutral-700 outline-none placeholder:text-neutral-400 sm:text-sm"
                      />

                      {/* Search Action Button */}
                      <a
                        href="#kho-thiet-bi"
                        className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#d49a2a] px-5 py-2.5 text-xs font-extrabold uppercase text-neutral-950 transition hover:bg-neutral-900 hover:text-white"
                      >
                        <Search className="h-4 w-4" />
                        <span>Tìm Kho</span>
                      </a>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleTrackOrder}
                      className="flex flex-col gap-2 sm:flex-row sm:items-center"
                    >
                      <input
                        type="text"
                        value={trackingCode}
                        onChange={(e) => setTrackingCode(e.target.value)}
                        placeholder="Nhập mã vận đơn lô hàng sỉ (VD: VS016-8892)..."
                        className="w-full flex-1 px-3 py-2 text-xs text-neutral-800 outline-none sm:text-sm"
                      />
                      <button
                        type="submit"
                        className="rounded-lg bg-[#d49a2a] px-6 py-2.5 text-xs font-extrabold uppercase text-neutral-950 transition hover:bg-neutral-900 hover:text-white"
                      >
                        Kiểm Tra Lô Hàng
                      </button>
                    </form>
                  )}

                  {trackingResult && heroTab === 'tracking' && (
                    <div className="mt-3 rounded-lg bg-emerald-50 p-2.5 text-xs font-semibold text-emerald-800">
                      {trackingResult}
                    </div>
                  )}
                </div>
              </div>

              {/* BOTTOM ORDERING TOOLS PILL BUTTONS (matching CỐC CỐC / GOOGLE CHROME pill buttons in screenshot!) */}
              <div className="mt-7">
                <p className="text-xs font-extrabold uppercase tracking-widest text-white/90">
                  {templateData.hero.toolHeading}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#bang-gia-si"
                    className="flex items-center gap-3 rounded-full bg-white/95 px-5 py-2.5 text-left text-neutral-900 shadow-lg transition hover:scale-105"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <Compass className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block text-[10px] font-semibold text-neutral-500">
                        Tải về cho trình duyệt
                      </span>
                      <span className="block text-xs font-black uppercase text-emerald-700">
                        CỐC CỐC (ĐẶT HÀNG SỈ)
                      </span>
                    </div>
                  </a>

                  <a
                    href="#bang-gia-si"
                    className="flex items-center gap-3 rounded-full bg-white/95 px-5 py-2.5 text-left text-neutral-900 shadow-lg transition hover:scale-105"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-white">
                      <Globe className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block text-[10px] font-semibold text-neutral-500">
                        Tải về cho trình duyệt
                      </span>
                      <span className="block text-xs font-black uppercase text-red-600">
                        GOOGLE CHROME
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4-COLUMN WHOLESALE WAREHOUSE CATEGORIES */}
      <section className="mx-auto -mt-8 relative z-20 max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {templateData.categories.map((cat) => (
            <a
              key={cat.id}
              href="#kho-thiet-bi"
              className="group flex overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-md transition hover:-translate-y-1 hover:border-[#d49a2a]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-20 w-20 shrink-0 rounded-lg object-cover"
              />
              <div className="ml-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-xs bg-amber-100 px-2 py-0.5 text-[10px] font-extrabold text-amber-800">
                    {cat.count}
                  </span>
                  <h3 className="mt-1 text-xs font-black text-neutral-900 group-hover:text-[#b8821e] sm:text-sm">
                    {cat.name}
                  </h3>
                </div>
                <p className="line-clamp-2 text-[11px] text-neutral-500">
                  {cat.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 5. WHOLESALE EQUIPMENT & SUPPLY CATALOG GRID */}
      <section id="kho-thiet-bi" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-neutral-200 pb-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#b8821e]">
              XUẤT KHO NGUYÊN ĐAI NGUYÊN KIỆN CO/CQ
            </span>
            <h2 className="mt-1 text-2xl font-black text-neutral-900 sm:text-3xl">
              Danh Mục Thiết Bị Làm Sạch &amp; Vật Tư Giá Sỉ Tận Xưởng
            </h2>
          </div>

          <a
            href="#bang-gia-si"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1e2126] px-4 py-2.5 text-xs font-bold text-[#e5a93c] transition hover:bg-[#d49a2a] hover:text-neutral-950"
          >
            <FileSpreadsheet className="h-4 w-4" />
            <span>Tải Bảng Giá Sỉ Excel (350+ Mã)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xs transition hover:border-[#d49a2a] hover:shadow-lg"
            >
              <div>
                <div
                  onClick={() => setSelectedItemModal(item)}
                  className="relative h-48 cursor-pointer overflow-hidden bg-neutral-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 rounded-xs bg-[#1e2126]/90 px-2 py-0.5 text-[10px] font-bold text-[#e5a93c]">
                    Mã: {item.sku}
                  </span>
                  {item.badge && (
                    <span className="absolute top-2.5 right-2.5 rounded-xs bg-red-600 px-2 py-0.5 text-[10px] font-extrabold uppercase text-white">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between text-[10px] font-bold text-emerald-700">
                    <span>● {item.stockStatus}</span>
                    <span className="text-neutral-400">{item.moq}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedItemModal(item)}
                    className="mt-1.5 line-clamp-2 cursor-pointer text-xs font-bold leading-snug text-neutral-900 hover:text-[#b8821e] sm:text-sm"
                  >
                    {item.name}
                  </h3>

                  {/* Wholesale vs Retail Price Comparison Box */}
                  <div className="mt-3 rounded-lg border border-amber-200/80 bg-amber-50/60 p-2.5">
                    <div className="flex items-center justify-between text-[11px] text-neutral-500">
                      <span>Giá bán lẻ:</span>
                      <span className="line-through">{item.retailPrice}</span>
                    </div>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-[11px] font-extrabold uppercase text-[#9a6b13]">
                        Giá Sỉ Đại Lý:
                      </span>
                      <span className="text-sm font-black text-red-600 sm:text-base">
                        {item.wholesalePrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-neutral-100 px-4 py-3">
                <button
                  type="button"
                  onClick={() =>
                    setWholesaleCart((prev) => [...prev, item])
                  }
                  className="flex-1 rounded-lg bg-[#d49a2a] py-2 text-xs font-extrabold uppercase text-neutral-950 transition hover:bg-[#1e2126] hover:text-white"
                >
                  + Thêm Đơn Sỉ
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedItemModal(item)}
                  className="rounded-lg border border-neutral-300 px-3 py-2 text-xs font-bold text-neutral-600 hover:bg-neutral-100"
                >
                  Chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHOLESALE DISCOUNT TIER TABLE & 4-STEP PROCUREMENT */}
      <section
        id="bang-gia-si"
        className="border-y border-neutral-200 bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#b8821e]">
              CHÍNH SÁCH CHIẾT KHẤU ĐẠI LÝ &amp; NHÀ THẦU VỆ SINH
            </span>
            <h2 className="mt-1 text-2xl font-black text-neutral-900 sm:text-3xl">
              Bảng Biểu Mức Chiết Khấu Sỉ Theo Giá Trị Đơn Hàng
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1e2126] text-xs font-extrabold uppercase text-[#e5a93c]">
                <tr>
                  <th className="px-5 py-4">Cấp Độ Đại Lý</th>
                  <th className="px-5 py-4">Doanh Số Đơn Hàng</th>
                  <th className="px-5 py-4">Mức Chiết Khấu</th>
                  <th className="px-5 py-4">Hỗ Trợ Vận Chuyển</th>
                  <th className="px-5 py-4">Chế Độ Bảo Hành</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                {templateData.discountTiers.map((tier) => (
                  <tr key={tier.tierName} className="hover:bg-amber-50/40">
                    <td className="px-5 py-4 font-extrabold text-neutral-900">
                      {tier.tierName}
                    </td>
                    <td className="px-5 py-4 font-semibold text-neutral-700">
                      {tier.orderValue}
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-md bg-red-50 px-2.5 py-1 font-black text-red-600">
                        {tier.discountRate}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-neutral-600">
                      {tier.shippingPolicy}
                    </td>
                    <td className="px-5 py-4 text-neutral-600">
                      {tier.warrantySupport}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 4-Step Warehouse Dispatch Workflow */}
          <div id="quy-trinh-nhap" className="mt-14">
            <h3 className="mb-6 text-center text-lg font-black uppercase tracking-wider text-neutral-800">
              Quy Trình Xuất Kho &amp; Giao Nhận Sỉ Toàn Quốc
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {templateData.warehouseSteps.map((ws) => (
                <div
                  key={ws.step}
                  className="rounded-xl border border-neutral-200 bg-[#f9fafb] p-5"
                >
                  <span className="inline-block rounded-md bg-[#d49a2a] px-2.5 py-1 text-xs font-black text-neutral-950">
                    {ws.step}
                  </span>
                  <h4 className="mt-3 text-sm font-extrabold text-neutral-900">
                    {ws.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">
                    {ws.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DARK CHARCOAL FOOTER (#181b20) */}
      <footer
        id="lien-he-kho"
        className="bg-[#181b20] pt-14 text-xs text-neutral-400"
      >
        <div className="mx-auto max-w-7xl px-4 pb-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand & Contact (4 cols) */}
            <div className="space-y-3 lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <Warehouse className="h-6 w-6 text-[#e5a93c]" />
                <span className="text-lg font-black text-white">
                  {templateData.business.domain}
                </span>
              </div>
              <p className="leading-relaxed text-neutral-400">
                {templateData.business.tagline}
              </p>
              <div className="space-y-2 pt-2 text-neutral-300">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e5a93c]" />
                  <span>{templateData.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#e5a93c]" />
                  <span>{templateData.business.phone.join(' - ')}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#e5a93c]" />
                  <span>{templateData.business.email.join(' / ')}</span>
                </p>
              </div>
            </div>

            {/* 3 Regional Warehouses (4 cols) */}
            <div className="lg:col-span-4">
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#e5a93c]">
                Hệ Thống Tổng Kho 3 Miền
              </h4>
              <div className="space-y-2.5">
                {templateData.footer.warehouses.map((wh) => (
                  <div
                    key={wh.city}
                    className="rounded-lg border border-neutral-800 bg-[#20242b] p-2.5"
                  >
                    <p className="font-bold text-white">{wh.city}</p>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      {wh.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies & Guides (4 cols) */}
            <div id="chinh-sach" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-4">
              <div>
                <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white">
                  Chính Sách Sỉ
                </h4>
                <ul className="space-y-2">
                  {templateData.footer.policies.map((p) => (
                    <li key={p}>
                      <a
                        href="#bang-gia-si"
                        className="transition hover:text-[#e5a93c]"
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white">
                  Hỗ Trợ Đại Lý
                </h4>
                <ul className="space-y-2">
                  {templateData.footer.supportGuides.map((g) => (
                    <li key={g}>
                      <a
                        href="#gioi-thieu"
                        className="transition hover:text-[#e5a93c]"
                      >
                        {g}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 py-4 text-center text-[11px] text-neutral-500">
          {templateData.business.copyright}
        </div>
      </footer>

      {/* WHOLESALE ITEM MODAL */}
      {selectedItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4">
          <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedItemModal(null)}
              className="absolute top-3 right-3 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <img
                src={selectedItemModal.image}
                alt={selectedItemModal.name}
                className="h-52 w-full rounded-lg border border-neutral-200 object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-xs bg-neutral-900 px-2 py-0.5 text-[10px] font-bold text-[#e5a93c]">
                    SKU: {selectedItemModal.sku}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-neutral-900">
                    {selectedItemModal.name}
                  </h3>
                  <p className="mt-1 text-xs text-emerald-700 font-semibold">
                    {selectedItemModal.origin} ({selectedItemModal.stockStatus})
                  </p>
                  <div className="mt-3 rounded-lg bg-amber-50 p-2.5">
                    <span className="block text-[10px] uppercase text-neutral-500">
                      Giá sỉ xuất kho ({selectedItemModal.moq}):
                    </span>
                    <span className="text-xl font-black text-red-600">
                      {selectedItemModal.wholesalePrice}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setWholesaleCart((prev) => [...prev, selectedItemModal]);
                    setSelectedItemModal(null);
                  }}
                  className="mt-4 w-full rounded-lg bg-[#d49a2a] py-2.5 text-xs font-extrabold uppercase text-neutral-950 hover:bg-neutral-900 hover:text-white"
                >
                  Thêm Vào Đơn Đặt Hàng Sỉ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
