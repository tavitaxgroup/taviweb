'use client';

import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Cpu,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultITCleanCareData,
  ITCleanCareServiceItem,
  ITCleanCareTemplateData,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const templateData = useMemo(
    () =>
      adaptClonedTemplateData(
        defaultITCleanCareData,
        data
      ) as ITCleanCareTemplateData,
    [data]
  );

  const [selectedTab, setSelectedTab] = useState<string>(
    templateData.macAndWorkstationSection.tabs[0] || 'Tất cả gói'
  );
  const [cartItems, setCartItems] = useState<ITCleanCareServiceItem[]>([]);
  const [selectedModalItem, setSelectedModalItem] =
    useState<ITCleanCareServiceItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filteredMacItems = useMemo(() => {
    if (
      !selectedTab ||
      selectedTab === templateData.macAndWorkstationSection.tabs[0]
    ) {
      return templateData.macAndWorkstationSection.items;
    }
    const matched = templateData.macAndWorkstationSection.items.filter(
      (item) => item.category.toLowerCase() === selectedTab.toLowerCase()
    );
    return matched.length > 0
      ? matched
      : templateData.macAndWorkstationSection.items;
  }, [templateData.macAndWorkstationSection, selectedTab]);

  const handleAddToCart = (item: ITCleanCareServiceItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  // Renders the exact card architecture seen in VS018-dich_vu_ve_sinh_15.png:
  // Top-left red discount tag + Device photo + Blue-bordered 2x2 spec pill box + Bold title + Red price + Gray strikethrough price
  const renderAppleStyleServiceCard = (item: ITCleanCareServiceItem) => (
    <div
      key={item.id}
      className="group relative flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#0066cc] hover:shadow-xl"
    >
      <div>
        {/* Top-Left Red Discount Badge (exact match to screenshot) */}
        <span className="absolute top-3 left-3 z-10 rounded-xs bg-[#e53935] px-2 py-0.5 text-[11px] font-extrabold text-white shadow-2xs">
          {item.discountBadge}
        </span>

        {/* Product / Device Image */}
        <div
          onClick={() => setSelectedModalItem(item)}
          className="relative mb-3 flex h-40 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-50/70 p-3"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* SIGNATURE BLUE-BORDERED 2-ROW TECHNICAL SPEC PILL BOX (exact match to screenshot!) */}
        <div className="mx-auto mb-3 overflow-hidden rounded-lg border border-[#0066cc] bg-white text-[10px]">
          {/* Row 1: Two light gray spec cells */}
          <div className="grid grid-cols-2 divide-x divide-slate-200 bg-slate-50 px-1.5 py-1 font-bold text-slate-700">
            <span className="truncate px-1">{item.specTopLeft}</span>
            <span className="truncate px-1">{item.specTopRight}</span>
          </div>
          {/* Row 2: Solid Blue Bar (#0066cc) with 2 white spec cells */}
          <div className="grid grid-cols-2 divide-x divide-white/25 bg-[#0066cc] px-1.5 py-1 font-extrabold text-white">
            <span className="truncate px-1">{item.specBottomLeft}</span>
            <span className="truncate px-1">{item.specBottomRight}</span>
          </div>
        </div>

        {/* Bold Title */}
        <h3
          onClick={() => setSelectedModalItem(item)}
          className="line-clamp-2 cursor-pointer text-xs font-extrabold leading-snug text-slate-900 transition hover:text-[#0066cc] sm:text-[13px]"
        >
          {item.name}
        </h3>
      </div>

      {/* Red Price + Strikethrough Original Price Below */}
      <div className="mt-3 pt-2">
        <p className="text-sm font-black text-[#e53935] sm:text-base">
          {item.price}
        </p>
        <p className="text-[11px] font-medium text-slate-400 line-through">
          {item.originalPrice}
        </p>

        <button
          type="button"
          onClick={() => handleAddToCart(item)}
          className="mt-2.5 w-full rounded-lg bg-slate-900 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#0066cc]"
        >
          + Đặt gói bảo dưỡng
        </button>
      </div>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-[#f4f8fd] text-slate-800 antialiased selection:bg-[#0066cc] selection:text-white"
    >
      {/* 1. DARK CHARCOAL HEADER BAR (#2b2d30) WITH MACVN LOGO & RED-BADGED CART PILL */}
      <header className="sticky top-0 z-40 bg-[#2b2d30] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          {/* MACVN / IT CleanCare Brand Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex items-baseline tracking-tight">
              <span className="text-2xl font-black tracking-tighter text-white">
                MAC
              </span>
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-2xl font-black italic text-transparent">
                VN
              </span>
            </div>
            <span className="hidden rounded-md border border-sky-400/30 bg-sky-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-300 sm:inline-block">
              IT CleanCare
            </span>
          </a>

          {/* Center Dropdown Navigation Links (Mac ⌄, iMac ⌄, iPad ⌄, Phụ kiện ⌄, Dịch vụ ⌄, Tin tức) */}
          <nav className="hidden items-center gap-7 lg:flex">
            {templateData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-xs font-semibold text-neutral-200 transition hover:text-sky-400"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Pill Cart Button with Red Circle Count Badge (exact match to screenshot!) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('goi-macbook');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 rounded-full bg-[#3f4246] py-1.5 pr-4 pl-1.5 text-xs font-semibold text-neutral-100 shadow-inner transition hover:bg-[#4e5257]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ef4444] text-[11px] font-extrabold text-white">
                {cartItems.length}
              </span>
              <ShoppingCart className="h-3.5 w-3.5 text-neutral-200" />
              <span>Giỏ hàng</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="rounded-lg border border-neutral-600 p-1.5 text-neutral-200 lg:hidden"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-neutral-700 bg-[#222427] px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2">
              {templateData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-xs font-semibold text-neutral-200 hover:text-sky-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 2. DANH MỤC SẢN PHẨM (5-COLUMN APPLE/IT HARDWARE & CLEANING CATEGORY SHOWCASE) */}
      <section
        id="danh-muc"
        className="bg-gradient-to-b from-[#e8f1fc] via-[#f2f7fd] to-white py-12"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
              <Sparkles className="h-3.5 w-3.5" />
              {templateData.heroBanner.badge}
            </span>
            <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
              {templateData.categorySection.heading}
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-slate-600 sm:text-sm">
              {templateData.heroBanner.subtitle}
            </p>
          </div>

          {/* 5 Category Cards matching screenshot's clean floating Apple hardware layout */}
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {templateData.categorySection.categories.map((cat) => (
              <a
                key={cat.id}
                href="#goi-macbook"
                className="group flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-xs transition duration-300 hover:-translate-y-1.5 hover:border-[#0066cc] hover:shadow-lg"
              >
                <div className="mb-4 flex h-32 w-full items-center justify-center overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
                <h2 className="text-sm font-extrabold text-slate-900 group-hover:text-[#0066cc]">
                  {cat.title}
                </h2>
                <p className="mt-1 text-[11px] text-slate-500">
                  {cat.subtitle}
                </p>
                <span className="mt-2 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0066cc]">
                  {cat.itemCount}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5-COLUMN MACBOOK / IMAC CLEANING & THERMAL PASTE PACKAGES (EXACT CARD DESIGN FROM SCREENSHOT) */}
      <section id="goi-macbook" className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0066cc]">
              CHĂM SÓC PHẦN CỨNG CHUYÊN SÂU
            </span>
            <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
              {templateData.macAndWorkstationSection.heading}
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              {templateData.macAndWorkstationSection.subheading}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {templateData.macAndWorkstationSection.tabs.map((tab) => {
              const active = selectedTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedTab(tab)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                    active
                      ? 'bg-[#0066cc] text-white shadow-xs'
                      : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-[#0066cc]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5-Column Product/Service Cards with Red Discount Tag & Blue Spec Box */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {filteredMacItems.map((item) => renderAppleStyleServiceCard(item))}
        </div>
      </section>

      {/* 4. OPTICAL CLEANING KITS & THERMAL PASTE PRODUCTS (5-COLUMN GRID) */}
      <section
        id="bo-kit-ve-sinh"
        className="mx-auto max-w-7xl px-4 pb-16"
      >
        <div className="mb-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0066cc]">
            PHỤ KIỆN &amp; HÓA CHẤT AN TOÀN MÀN HÌNH RETINA
          </span>
          <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
            {templateData.cleaningKitsSection.heading}
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            {templateData.cleaningKitsSection.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {templateData.cleaningKitsSection.items.map((item) =>
            renderAppleStyleServiceCard(item)
          )}
        </div>
      </section>

      {/* 5. ENTERPRISE SERVER ROOM (DATA CENTER) & WORKSTATION MAINTENANCE SECTION */}
      <section
        id="phong-server"
        className="bg-gradient-to-br from-slate-900 via-[#16253b] to-slate-950 py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-300 ring-1 ring-sky-400/30">
                <Server className="h-3.5 w-3.5" />
                {templateData.serverRoomSection.badge}
              </span>
              <h2 className="text-2xl font-black leading-tight sm:text-3xl">
                {templateData.serverRoomSection.title}
              </h2>
              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                {templateData.serverRoomSection.description}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setBookingSuccess(true)}
                  className="rounded-xl bg-[#0066cc] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition hover:bg-sky-500"
                >
                  Đặt Lịch Khảo Sát Phòng Server Miễn Phí
                </button>
                {bookingSuccess && (
                  <p className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" /> Kỹ sư Hệ thống Server sẽ liên hệ xác nhận lịch!
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {templateData.serverRoomSection.packages.map((sp) => (
                <div
                  key={sp.id}
                  className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xs"
                >
                  <div>
                    <span className="inline-block rounded-md bg-sky-500/20 px-2.5 py-1 text-[10px] font-bold uppercase text-sky-300">
                      {sp.standard}
                    </span>
                    <h3 className="mt-3 text-base font-black text-white">
                      {sp.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-slate-300">
                      Quy mô: {sp.scale}
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-300">
                      {sp.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <span className="block text-[10px] uppercase text-slate-400">
                      Chi phí trọn gói
                    </span>
                    <span className="text-lg font-black text-sky-400">
                      {sp.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer id="lien-he" className="bg-[#1e2022] pt-12 text-xs text-neutral-400">
        <div className="mx-auto max-w-7xl px-4 pb-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand (4 cols) */}
            <div className="space-y-3 lg:col-span-4">
              <div className="flex items-baseline">
                <span className="text-2xl font-black text-white">MAC</span>
                <span className="text-2xl font-black italic text-sky-400">
                  VN
                </span>
                <span className="ml-2 text-xs font-bold text-neutral-300">
                  {templateData.business.brandSub}
                </span>
              </div>
              <p className="leading-relaxed text-neutral-400">
                {templateData.business.tagline}
              </p>
              <div className="space-y-2 pt-1 text-neutral-300">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <span>{templateData.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-sky-400" />
                  <span>{templateData.business.phone.join(' - ')}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                  <span>{templateData.business.email.join(' / ')}</span>
                </p>
              </div>
            </div>

            {/* Services (4 cols) */}
            <div className="lg:col-span-4">
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white">
                Dịch Vụ Vệ Sinh Thiết Bị IT
              </h4>
              <ul className="space-y-2">
                {templateData.footer.serviceLinks.map((s) => (
                  <li key={s}>
                    <a
                      href="#goi-macbook"
                      className="transition hover:text-sky-400"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies & Centers (4 cols) */}
            <div className="space-y-4 lg:col-span-4">
              <div>
                <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white">
                  Cam Kết Kỹ Thuật ESD
                </h4>
                <ul className="space-y-2">
                  {templateData.footer.policyLinks.map((p) => (
                    <li key={p}>
                      <a
                        href="#phong-server"
                        className="transition hover:text-sky-400"
                      >
                        {p}
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

      {/* TECHNICAL SPEC MODAL */}
      {selectedModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedModalItem(null)}
              className="absolute top-4 right-4 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4">
                <img
                  src={selectedModalItem.image}
                  alt={selectedModalItem.name}
                  className="max-h-44 object-contain"
                />
              </div>
              <div>
                <span className="inline-block rounded-xs bg-[#e53935] px-2 py-0.5 text-[10px] font-extrabold text-white">
                  Ưu đãi {selectedModalItem.discountBadge}
                </span>
                <h3 className="mt-2 text-base font-black text-slate-900">
                  {selectedModalItem.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-black text-[#e53935]">
                    {selectedModalItem.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    {selectedModalItem.originalPrice}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                  {selectedModalItem.details.map((dt) => (
                    <li key={dt} className="flex items-start gap-1.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0066cc]" />
                      <span>{dt}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(selectedModalItem);
                    setSelectedModalItem(null);
                  }}
                  className="mt-4 w-full rounded-lg bg-[#0066cc] py-2 text-xs font-extrabold uppercase text-white hover:bg-slate-900"
                >
                  Đặt lịch gói này
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
