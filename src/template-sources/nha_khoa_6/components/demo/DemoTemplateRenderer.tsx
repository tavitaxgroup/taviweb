"use client";

import React, { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Home,
  Sparkles,
  FileText,
  Leaf,
  Plane,
  UserCheck,
  Undo2,
  Lock,
  Send,
  ShieldCheck,
  Check,
  X,
  ArrowUp,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa6DefaultData,
  NhaKhoa6Data,
  NhaKhoa6Product,
} from "../../data/mockData";

interface Props {
  companyData?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ companyData }: Props) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData<NhaKhoa6Data>(nhaKhoa6DefaultData, companyData),
    [companyData]
  );

  const [activeTab, setActiveTab] = useState<string>("all");
  const [cartCount, setCartCount] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<NhaKhoa6Product | null>(
    null
  );
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const featuredProducts = useMemo(() => {
    const base = data.products.filter((p) => p.section === "featured");
    if (activeTab === "all") return base;
    const filtered = data.products.filter((p) => p.tab === activeTab);
    return filtered.length > 0 ? filtered.slice(0, 5) : base;
  }, [data.products, activeTab]);

  const intensiveProducts = useMemo(
    () => data.products.filter((p) => p.section === "intensive"),
    [data.products]
  );

  const homecareProducts = useMemo(
    () => data.products.filter((p) => p.section === "homecare"),
    [data.products]
  );

  const renderSectionHeading = (title: string, subtitle: string) => (
    <div className="mb-8 text-center">
      <h2 className="font-serif text-[26px] font-bold text-[#5e7728] md:text-[30px]">
        {title}
      </h2>
      <p className="mt-1.5 text-[13px] text-[#777777]">{subtitle}</p>
      <div className="mx-auto mt-3 h-[2px] w-14 bg-[#6b8e23]" />
    </div>
  );

  const renderProductGrid = (items: NhaKhoa6Product[]) => (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelectedItem(item)}
          className="group relative flex cursor-pointer flex-col items-center bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          {item.discountBadge && (
            <span className="absolute top-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#5e7728] text-[11px] font-bold text-white shadow-xs">
              {item.discountBadge}
            </span>
          )}
          <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-xs bg-[#fbfcf8] p-3">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="mt-4 line-clamp-1 text-[11px] font-bold tracking-wide text-[#5e7728] uppercase transition group-hover:text-[#3e5018]">
            {item.name}
          </h3>
          <div className="mt-1.5 flex items-center justify-center gap-2 text-[12px]">
            {item.oldPrice && (
              <span className="text-[#aaaaaa] line-through">
                {item.oldPrice}
              </span>
            )}
            <span className="font-bold text-[#5e7728]">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333] antialiased selection:bg-[#5e7728] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="border-b border-[#efefef] bg-white text-[11px] text-[#666666]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between px-4 py-2">
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-[#5e7728]" />
              {data.business.phone[0]}
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Mail className="h-3 w-3 text-[#5e7728]" />
              {data.business.email[0]}
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <MapPin className="h-3 w-3 text-[#5e7728]" />
              Hệ thống phòng khám
            </span>
          </div>
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="font-medium text-[#666666] transition hover:text-[#5e7728]"
          >
            Đăng nhập / Đặt lịch hẹn
          </button>
        </div>
      </div>

      {/* 2. MAIN HEADER WITH ICON-OVER-TEXT NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-[#ececec] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5">
          {/* Olive Serif Brand Logo */}
          <a href="#top" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-[0.08em] text-[#5e7728] uppercase md:text-[28px]">
              HACHI DENTAL
            </span>
          </a>

          {/* Center Icon-Over-Text Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "TRANG CHỦ", href: "#top", icon: Home, active: true },
              {
                label: "DỊCH VỤ",
                href: "#san-pham-noi-bat",
                icon: Sparkles,
                active: false,
              },
              {
                label: "VỀ HACHI",
                href: "#ve-hachi",
                icon: Leaf,
                active: false,
              },
              {
                label: "TIN TỨC",
                href: "#tin-tuc",
                icon: FileText,
                active: false,
              },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group flex flex-col items-center gap-1.5 pb-1 text-[11px] font-bold tracking-wider uppercase transition ${
                    item.active
                      ? "border-b-2 border-[#5e7728] text-[#5e7728]"
                      : "text-[#555555] hover:text-[#5e7728]"
                  }`}
                >
                  <IconComponent className="h-5 w-5 stroke-[1.6] text-[#5e7728] transition-transform group-hover:-translate-y-0.5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Search & Cart / Booking */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              aria-label="Tìm kiếm"
              className="text-[#555555] transition hover:text-[#5e7728]"
            >
              <Search className="h-4 w-4" />
            </button>
            <div className="h-4 w-[1px] bg-[#e0e0e0]" />
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#444444] uppercase transition hover:text-[#5e7728]"
            >
              <span>GIỎ HÀNG</span>
              <div className="relative">
                <ShoppingBag className="h-5 w-5 text-[#5e7728]" />
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#5e7728] text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* 3. 4-PANEL VERTICAL COLLAGE HERO + OVERLAPPING 3-CARD PROMO SHOWCASE */}
      <section id="top" className="relative">
        {/* 4-Column Full-Bleed Hero Collage */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {data.heroPanels.map((panel) => (
            <div
              key={panel.id}
              className="group relative h-[280px] overflow-hidden sm:h-[360px] lg:h-[440px]"
            >
              <img
                src={panel.image}
                alt={panel.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-12 p-5 text-center text-white">
                <span className="inline-block rounded-full bg-[#5e7728]/85 px-3 py-0.5 text-[10px] font-bold tracking-[0.18em] uppercase">
                  {panel.title}
                </span>
                <p className="mt-1.5 text-xs font-medium text-white/90">
                  {panel.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overlapping 3-Card Promo Strip */}
        <div className="relative z-10 mx-auto -mt-10 max-w-[1060px] px-4 md:-mt-16">
          <div className="grid grid-cols-1 gap-5 bg-white p-4 shadow-lg md:grid-cols-3">
            {data.promoTriplets.map((card) => (
              <div
                key={card.id}
                onClick={() => setBookingOpen(true)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-[#f4f7ee]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="text-xs font-bold tracking-wider uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-white/85">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 4-COLUMN POLICY / TRUST STRIP */}
      <section className="mx-auto max-w-[1100px] px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.policies.map((pol) => (
            <div key={pol.id} className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9e2c6] text-[#5e7728]">
                {pol.icon === "plane" && <Plane className="h-4 w-4" />}
                {pol.icon === "user-check" && <UserCheck className="h-4 w-4" />}
                {pol.icon === "undo" && <Undo2 className="h-4 w-4" />}
                {pol.icon === "lock" && <Lock className="h-4 w-4" />}
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-[#5e7728]">
                  {pol.title}
                </h4>
                <p className="mt-1 text-[11px] leading-relaxed text-[#777777]">
                  {pol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SẢN PHẨM & DỊCH VỤ NỔI BẬT (WITH 5 PILL TABS + 5-COL GRID) */}
      <section
        id="san-pham-noi-bat"
        className="mx-auto max-w-[1140px] px-4 py-10"
      >
        {renderSectionHeading(
          "Dịch vụ & Sản phẩm nổi bật",
          "Các giải pháp nha khoa sinh học và chăm sóc răng miệng theo từng nhu cầu"
        )}

        {/* 5 Filter Pill Buttons */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          {[
            { id: "all", label: "BỌC RĂNG SỨ" },
            { id: "implant", label: "TRỒNG IMPLANT" },
            { id: "nieng-rang", label: "NIỀNG RĂNG" },
            { id: "tay-trang", label: "TẨY TRẮNG" },
            { id: "cham-soc", label: "TRẺ EM & NƯỚU" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-xs border px-5 py-1.5 text-[11px] font-bold tracking-wider uppercase transition ${
                activeTab === tab.id
                  ? "border-[#5e7728] bg-white text-[#5e7728] shadow-xs"
                  : "border-[#e2e2e2] bg-white text-[#777777] hover:border-[#5e7728] hover:text-[#5e7728]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {renderProductGrid(featuredProducts)}
      </section>

      {/* 6. 2-COLUMN SPLIT BRAND STORY BANNER ("Hachi — Hồi Sinh Bí Quyết...") */}
      <section id="ve-hachi" className="my-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {data.storyBanners.map((banner, idx) => (
            <div
              key={banner.id}
              className={`relative flex min-h-[340px] items-center overflow-hidden px-8 py-12 md:px-14 ${
                idx === 0 ? "bg-[#dce7b8]" : "bg-[#e9e4d8]"
              }`}
            >
              <img
                src={banner.image}
                alt={banner.headline}
                className="absolute inset-0 h-full w-full object-cover opacity-85"
              />
              <div
                className={`absolute inset-0 ${
                  idx === 0
                    ? "bg-gradient-to-r from-[#d4e1a7]/95 via-[#d4e1a7]/70 to-transparent"
                    : "bg-gradient-to-r from-[#e5dfd3]/95 via-[#e5dfd3]/70 to-transparent"
                }`}
              />
              <div className="relative z-10 max-w-sm">
                <div className="flex items-center gap-2 text-[#4b6020]">
                  <span className="font-serif text-4xl font-bold tracking-tight">
                    {banner.brand}
                  </span>
                  <Leaf className="h-7 w-7" />
                </div>
                <p className="text-[9px] font-bold tracking-[0.25em] text-[#5e7728] uppercase">
                  {banner.tagline}
                </p>
                <h3 className="mt-4 font-serif text-xl leading-snug font-bold whitespace-pre-line text-[#2c351d] italic md:text-2xl">
                  {banner.headline}
                </h3>
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="mt-5 inline-block rounded-xs bg-[#5e7728] px-5 py-2 text-[11px] font-bold tracking-wider text-white uppercase transition hover:bg-[#495d1e]"
                >
                  TÌM HIỂU THÊM
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CHĂM SÓC NỤ CƯỜI CHUYÊN SÂU (FIRST 5-COL ROW) */}
      <section className="mx-auto max-w-[1140px] px-4 py-10">
        {renderSectionHeading(
          "Chăm sóc nụ cười chuyên sâu",
          "Dịch vụ phục hình thẩm mỹ và điều trị nha khoa chuẩn Nhật Bản"
        )}
        {renderProductGrid(intensiveProducts)}
      </section>

      {/* 8. CHĂM SÓC RĂNG MIỆNG TẠI NHÀ (SECOND 5-COL ROW) */}
      <section className="mx-auto max-w-[1140px] px-4 py-10">
        {renderSectionHeading(
          "Chăm sóc răng thảo mộc",
          "Sản phẩm chăm sóc răng nướu nổi bật chiết xuất thiên nhiên lành tính"
        )}
        {renderProductGrid(homecareProducts)}
      </section>

      {/* 9. TIN TỨC (3-COLUMN BLOG CARDS) */}
      <section id="tin-tuc" className="mx-auto max-w-[1140px] px-4 py-12">
        {renderSectionHeading("Tin tức", "Tin mới nhất, nóng hổi nhất")}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {data.news?.map((post) => (
            <article key={post.id} className="group flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden bg-[#f4f6f0]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 flex items-center gap-1 rounded-xs bg-[#5e7728] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                  HACHI <Leaf className="h-3 w-3" />
                </span>
              </div>
              <h3 className="mt-4 text-[13px] leading-snug font-bold text-[#333333] uppercase transition group-hover:text-[#5e7728]">
                {post.title}
              </h3>
              <span className="mt-1 text-[11px] text-[#999999]">
                {post.date}
              </span>
              <p className="mt-2 line-clamp-3 text-[12px] leading-relaxed text-[#666666]">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 10. LIGHT GRAY 4-COLUMN FOOTER */}
      <footer className="mt-8 border-t border-[#ebebeb] bg-[#f8f8f8] pt-14 pb-6 text-[12px] text-[#666666]">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Brand & Contact */}
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5e7728] text-white">
                  <Leaf className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-serif text-base font-bold tracking-wider text-[#333333] uppercase">
                    {data.business.name}
                  </span>
                  <span className="block text-[9px] tracking-widest text-[#777777] uppercase">
                    DENTAL &amp; HERBAL CARE
                  </span>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5 text-[12px]">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5e7728]" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#5e7728]" />
                  <span>{data.business.phone.join(" - ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#5e7728]" />
                  <span>{data.business.email.join(" / ")}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: VỀ CHÚNG TÔI */}
            <div>
              <h4 className="text-[13px] font-bold text-[#333333] uppercase">
                VỀ CHÚNG TÔI
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#ve-hachi" className="hover:text-[#5e7728]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham-noi-bat" className="hover:text-[#5e7728]">
                    Hệ thống phòng khám
                  </a>
                </li>
                <li>
                  <a href="#ve-hachi" className="hover:text-[#5e7728]">
                    Tầm nhìn – Sứ mệnh – Giá trị cốt lõi
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="hover:text-[#5e7728]"
                  >
                    Liên hệ đặt lịch
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: CHÍNH SÁCH */}
            <div>
              <h4 className="text-[13px] font-bold text-[#333333] uppercase">
                CHÍNH SÁCH
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#top" className="hover:text-[#5e7728]">
                    Chính sách bảo hành răng sứ
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#5e7728]">
                    Chính sách bảo mật hồ sơ
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#5e7728]">
                    Chính sách trả góp 0%
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#5e7728]">
                    Điều khoản dịch vụ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div>
              <h4 className="text-[13px] font-bold text-[#333333] uppercase">
                ĐĂNG KÝ
              </h4>
              <p className="mt-4 leading-relaxed">
                Đăng ký để nhận được thông tin ưu đãi tầm soát răng miệng mới
                nhất từ chúng tôi.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) {
                    setNewsletterDone(true);
                    setNewsletterEmail("");
                  }
                }}
                className="mt-3 flex bg-white p-1 shadow-2xs"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email ..."
                  className="w-full px-3 py-1.5 text-xs outline-none"
                />
                <button
                  type="submit"
                  aria-label="Gửi"
                  className="flex h-7 w-8 shrink-0 items-center justify-center rounded-xs bg-[#829b38] text-white transition hover:bg-[#5e7728]"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
              {newsletterDone && (
                <p className="mt-1.5 text-[11px] font-semibold text-[#5e7728]">
                  Đã đăng ký nhận bản tin Hachi Dental!
                </p>
              )}
              <p className="mt-3 text-[11px] leading-relaxed text-[#888888]">
                Chăm sóc nụ cười toàn diện chuẩn Bộ Y Tế, bảo hành chính hãng
                trên toàn hệ thống.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-xs bg-[#0284c7] px-3 py-1 text-[10px] font-bold text-white">
                <ShieldCheck className="h-4 w-4" /> ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-[#e5e5e5] pt-5 text-[11px] text-[#888888]">
            <p className="mx-auto">
              © Bản quyền thuộc về . Thiết kế website{" "}
              <strong className="text-[#5e7728]">{data.business.name}</strong>
            </p>
            <a
              href="#top"
              aria-label="Lên đầu trang"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#cccccc] text-[#666666] transition hover:border-[#5e7728] hover:text-[#5e7728]"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* QUICK VIEW MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative grid w-full max-w-xl grid-cols-1 overflow-hidden rounded-sm bg-white shadow-2xl sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-[#333333] hover:bg-[#5e7728] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-square bg-[#fbfcf8]">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#5e7728] uppercase">
                  HACHI DENTAL CARE
                </span>
                <h3 className="mt-1 text-base font-bold text-[#2c351d]">
                  {selectedItem.name}
                </h3>
                <p className="mt-2 text-lg font-extrabold text-[#5e7728]">
                  {selectedItem.price}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#555555]">
                  {selectedItem.description}
                </p>
              </div>
              <div className="mt-6 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSelectedItem(null);
                  }}
                  className="flex-1 bg-[#5e7728] py-2.5 text-xs font-bold text-white uppercase transition hover:bg-[#495d1e]"
                >
                  THÊM GIỎ HÀNG
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItem(null);
                    setBookingOpen(true);
                  }}
                  className="border border-[#5e7728] px-3 py-2.5 text-xs font-bold text-[#5e7728] uppercase hover:bg-[#f4f7ee]"
                >
                  ĐẶT LỊCH
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md rounded-sm bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setBookingOpen(false);
                setBookingSuccess(false);
              }}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#333333] hover:bg-[#5e7728] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-serif text-lg font-bold text-[#5e7728]">
              Đặt Lịch Khám &amp; Tư Vấn {data.business.name}
            </h3>
            <p className="mt-1 text-xs text-[#666666]">
              Miễn phí chụp phim CT ConeBeam 3D và tầm soát men răng sinh học.
            </p>
            {bookingSuccess ? (
              <div className="mt-4 rounded-xs border border-[#5e7728]/30 bg-[#f4f7ee] p-4 text-center">
                <Check className="mx-auto h-6 w-6 text-[#5e7728]" />
                <p className="mt-1 text-sm font-bold text-[#2c351d]">
                  Đặt lịch hẹn thành công!
                </p>
                <p className="mt-1 text-xs text-[#555555]">
                  Lễ tân Hachi Dental sẽ gọi xác nhận trong 10 phút.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSuccess(true);
                }}
                className="mt-4 space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên khách hàng *"
                  className="w-full border border-[#d4d4d4] px-3 py-2 text-xs outline-none focus:border-[#5e7728]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  className="w-full border border-[#d4d4d4] px-3 py-2 text-xs outline-none focus:border-[#5e7728]"
                />
                <select className="w-full border border-[#d4d4d4] px-3 py-2 text-xs outline-none focus:border-[#5e7728]">
                  <option>Bọc răng sứ sinh học Heritage</option>
                  <option>Trồng răng Implant Nhật Bản</option>
                  <option>Tẩy trắng răng khoáng thảo mộc</option>
                  <option>Khám tổng quát &amp; Chăm sóc nướu</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#5e7728] py-2.5 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#495d1e]"
                >
                  XÁC NHẬN ĐẶT LỊCH
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
