"use client";

import React, { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Plus,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Truck,
  Clock,
  CheckCircle2,
  Check,
  X,
  Send,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa10DefaultData,
  NhaKhoa10Data,
  NhaKhoa10Product,
} from "../../data/mockData";

interface Props {
  companyData?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ companyData }: Props) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData<NhaKhoa10Data>(
        nhaKhoa10DefaultData,
        companyData
      ),
    [companyData]
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cartCount, setCartCount] = useState<number>(2);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [activeProduct, setActiveProduct] = useState<NhaKhoa10Product | null>(
    null
  );
  const [consultOpen, setConsultOpen] = useState<boolean>(false);
  const [consultSuccess, setConsultSuccess] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    return data.products.filter((item) => {
      const matchCat =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchQuery =
        !searchTerm.trim() ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [data.products, selectedCategory, searchTerm]);

  const handleAddCart = (id: string) => {
    setCartCount((c) => c + 1);
    setAddedId(id);
    setTimeout(() => {
      setAddedId((prev) => (prev === id ? null : prev));
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-[#1e293b] antialiased selection:bg-[#059669] selection:text-white">
      {/* 1. MEDICAL SKY-BLUE & EMERALD TOP BAR */}
      <div className="bg-[#0284c7] text-[11px] font-medium text-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between px-4 py-2">
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#a7f3d0]" />
              Nhà Thuốc Dược Nha Khoa Chuẩn GPP &amp; Phòng Khám Chuyên Khoa
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <Clock className="h-3.5 w-3.5 text-[#a7f3d0]" />
              {data.business.workingHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold">
              <Phone className="h-3.5 w-3.5 text-[#a7f3d0]" />
              Hotline Dược Sĩ: {data.business.phone[0]}
            </span>
          </div>
        </div>
      </div>

      {/* 2. APOTHECARY WHITE HEADER WITH GLOWING GREEN CROSS LOGO + SEARCH BAR */}
      <header className="sticky top-0 z-40 border-b border-[#e2e8f0] bg-white/95 shadow-2xs backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-3.5">
          {/* Glowing Green Cross Brand Emblem */}
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#10b981] bg-[#ecfdf5] text-[#059669] shadow-[0_0_15px_rgba(16,185,129,0.28)]">
              <Plus className="h-7 w-7 stroke-[3]" />
            </div>
            <div>
              <span className="block text-lg font-black tracking-wide text-[#059669] uppercase">
                {data.business.name}
              </span>
              <span className="block text-[10px] font-semibold tracking-wider text-[#0284c7] uppercase">
                DENTAL PHARMACY &amp; CLINIC
              </span>
            </div>
          </a>

          {/* Center Tablet-Style Rounded Search Bar */}
          <div className="order-3 flex w-full max-w-md items-center rounded-full border border-[#bae6fd] bg-[#f0f9ff] px-4 py-2 lg:order-2 lg:w-auto lg:flex-1">
            <Search className="mr-2.5 h-4 w-4 shrink-0 text-[#0284c7]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm nước súc miệng, gel nướu, gói tẩy trắng răng..."
              className="w-full bg-transparent text-xs text-[#1e293b] outline-none placeholder:text-[#64748b]"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="text-xs text-[#64748b] hover:text-[#0f172a]"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Right Action Buttons */}
          <div className="order-2 flex items-center gap-3 lg:order-3">
            <button
              type="button"
              onClick={() => setConsultOpen(true)}
              className="rounded-full bg-[#059669] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#047857]"
            >
              GỬI TOA / ĐẶT LỊCH
            </button>
            <button
              type="button"
              onClick={() => setConsultOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#0f172a] transition hover:border-[#059669] hover:text-[#059669]"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0284c7] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Sub-navigation bar */}
        <div className="border-t border-[#f1f5f9] bg-white">
          <div className="mx-auto flex max-w-[1200px] items-center gap-7 overflow-x-auto px-4 py-2.5 text-xs font-bold text-[#334155]">
            <a href="#top" className="shrink-0 text-[#059669]">
              TRANG CHỦ
            </a>
            <a
              href="#san-pham-duoc-nha"
              className="shrink-0 transition hover:text-[#059669]"
            >
              DƯỢC PHẨM NHA KHOA
            </a>
            <a
              href="#dich-vu-lam-sang"
              className="shrink-0 transition hover:text-[#059669]"
            >
              DỊCH VỤ NHA KHOA THẨM MỸ
            </a>
            <a
              href="#cam-nang"
              className="shrink-0 transition hover:text-[#059669]"
            >
              CẨM NANG RĂNG HÀM MẶT
            </a>
            <a
              href="#lien-he"
              className="shrink-0 transition hover:text-[#059669]"
            >
              HỆ THỐNG NHÀ THUỐC &amp; PHÒNG KHÁM
            </a>
          </div>
        </div>
      </header>

      {/* 3. SOFT SKY-BLUE & EMERALD APOTHECARY HERO SHOWCASE */}
      <section
        id="top"
        className="bg-gradient-to-br from-[#e0f2fe] via-[#f0fdf4] to-[#dcfce7] py-10 md:py-14"
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-4 lg:grid-cols-12">
          {/* Left Hero Banner Card (matching the light-blue showcase card inside NK013) */}
          <div className="relative overflow-hidden rounded-2xl border border-white bg-gradient-to-r from-[#0284c7] to-[#059669] p-8 text-white shadow-xl lg:col-span-8 md:p-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-[11px] font-bold tracking-wider uppercase backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5" /> {data.hero.eyebrow}
            </span>
            <h1 className="mt-4 max-w-xl text-2xl leading-tight font-extrabold md:text-4xl">
              {data.hero.title}
            </h1>
            <p className="mt-3 max-w-lg text-xs leading-relaxed text-white/90 md:text-sm">
              {data.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={data.hero.ctaLink || "#san-pham-duoc-nha"}
                className="rounded-full bg-white px-6 py-3 text-xs font-extrabold tracking-wider text-[#059669] uppercase shadow-md transition hover:bg-[#f0fdf4]"
              >
                {data.hero.ctaText}
              </a>
              <button
                type="button"
                onClick={() => setConsultOpen(true)}
                className="rounded-full border border-white/70 bg-white/10 px-5 py-3 text-xs font-bold text-white uppercase backdrop-blur-xs transition hover:bg-white/20"
              >
                HỎI DƯỢC SĨ TRỰC TUYẾN
              </button>
            </div>
          </div>

          {/* Right Quick Pharmacist & Dentist Consultation Box */}
          <div className="rounded-2xl border border-[#d1fae5] bg-white p-6 shadow-lg lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ecfdf5] text-[#059669]">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-extrabold text-[#0f172a] uppercase">
                  TƯ VẤN TOA THUỐC &amp; KHÁM RĂNG
                </h2>
                <p className="text-[11px] text-[#64748b]">
                  Phản hồi trong 5 phút bởi Bác sĩ RHM
                </p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setConsultOpen(true);
                setConsultSuccess(true);
              }}
              className="mt-4 space-y-2.5"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên của bạn *"
                className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2 text-xs outline-none focus:border-[#059669] focus:bg-white"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại Zalo *"
                className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2 text-xs outline-none focus:border-[#059669] focus:bg-white"
              />
              <select className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2 text-xs text-[#334155] outline-none focus:border-[#059669] focus:bg-white">
                <option>Tư vấn sản phẩm chăm sóc sau Implant / Nhổ răng</option>
                <option>Tư vấn điều trị viêm nướu / Ê buốt chân răng</option>
                <option>Đặt lịch tẩy trắng răng / Bọc răng sứ sinh học</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#059669] py-2.5 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#047857]"
              >
                NHẬN TƯ VẤN MIỄN PHÍ
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. 4-PILLAR CLINICAL & PHARMA TRUST STRIP */}
      <section className="mx-auto -mt-5 max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {data.trustPillars.map((pillar, idx) => {
            const icons = [ShieldCheck, Stethoscope, Sparkles, Truck];
            const IconComp = icons[idx % icons.length];
            return (
              <div key={pillar.id} className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f9ff] text-[#0284c7]">
                  <IconComp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#0f172a]">
                    {pillar.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-[#64748b]">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. 4-COLUMN APOTHECARY & ORAL CARE PRODUCT GRID (MATCHING THE TABLET UI IN NK013) */}
      <section
        id="san-pham-duoc-nha"
        className="mx-auto max-w-[1200px] px-4 py-14"
      >
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-[#059669] uppercase">
              PHARCECO APOTHECARY
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-[#0f172a]">
              Dược Phẩm &amp; Chăm Sóc Răng Miệng Chuyên Sâu
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Tất cả sản phẩm" },
              { id: "nuoc-suc-mieng", label: "Sát khuẩn & Súc miệng" },
              { id: "gel-nuou", label: "Gel tái tạo nướu" },
              { id: "trang-rang", label: "Tái khoáng & Trắng răng" },
              { id: "implant-care", label: "Chăm sóc Implant" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                  selectedCategory === tab.id
                    ? "bg-[#0284c7] text-white shadow-xs"
                    : "border border-[#e2e8f0] bg-white text-[#475569] hover:border-[#0284c7] hover:text-[#0284c7]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Product Bottle Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-2xs transition duration-300 hover:-translate-y-1 hover:border-[#10b981] hover:shadow-lg"
            >
              {product.badge && (
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#059669] px-2.5 py-0.5 text-[10px] font-bold text-white">
                  {product.badge}
                </span>
              )}

              <div>
                <div
                  onClick={() => setActiveProduct(product)}
                  className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl bg-[#f0f9ff]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <span className="mt-3 block text-[10px] font-extrabold tracking-wider text-[#0284c7] uppercase">
                  {product.categoryLabel}
                </span>
                <h3
                  onClick={() => setActiveProduct(product)}
                  className="mt-1 line-clamp-2 cursor-pointer text-sm font-bold text-[#0f172a] transition group-hover:text-[#059669]"
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-[11px] text-[#64748b]">
                  {product.dosageOrSpec}
                </p>
              </div>

              <div className="mt-4 border-t border-[#f1f5f9] pt-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-base font-extrabold text-[#059669]">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="ml-2 text-xs text-[#94a3b8] line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddCart(product.id)}
                  className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#ecfdf5] py-2 text-xs font-bold text-[#059669] transition hover:bg-[#059669] hover:text-white"
                >
                  {addedId === product.id ? (
                    <>
                      <Check className="h-4 w-4" /> ĐÃ THÊM GIỎ THUỐC
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" /> CHỌN MUA
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CLINICAL DENTAL PACKAGES SECTION ("DỊCH VỤ NHA KHOA THẨM MỸ & ĐIỀU TRỊ") */}
      <section id="dich-vu-lam-sang" className="bg-white py-14">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center">
            <span className="text-xs font-extrabold tracking-widest text-[#0284c7] uppercase">
              PHÒNG KHÁM CHUYÊN KHOA RĂNG HÀM MẶT
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-[#0f172a]">
              Liệu Trình Nha Khoa Kết Hợp Dược Sinh Học
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-3">
            {data.clinicalServices.map((srv) => (
              <div
                key={srv.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] shadow-xs transition hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute right-3 bottom-3 rounded-full bg-[#0284c7] px-3 py-1 text-[10px] font-bold text-white">
                      {srv.duration}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-extrabold text-[#0f172a]">
                      {srv.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#059669]">
                      {srv.subtitle}
                    </p>
                    <p className="mt-3 text-lg font-black text-[#0284c7]">
                      {srv.price}
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-[#475569]">
                      {srv.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#10b981]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button
                    type="button"
                    onClick={() => setConsultOpen(true)}
                    className="w-full rounded-xl bg-[#059669] py-2.5 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#047857]"
                  >
                    ĐẶT LỊCH LIỆU TRÌNH NÀY
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CẨM NANG DƯỢC NHA KHOA (3-COLUMN BLOG) */}
      <section id="cam-nang" className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="mb-8 text-center">
          <span className="text-xs font-extrabold tracking-widest text-[#059669] uppercase">
            KIẾN THỨC Y KHOA
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-[#0f172a]">
            Cẩm Nang Dược Nha Khoa &amp; Chăm Sóc Nụ Cười
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {data.news?.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-2xs transition hover:shadow-md"
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
                <h3 className="mt-2 text-sm leading-snug font-extrabold text-[#0f172a] transition group-hover:text-[#059669]">
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

      {/* 8. CLEAN EMERALD & APOTHECARY FOOTER */}
      <footer
        id="lien-he"
        className="border-t border-[#d1fae5] bg-[#064e3b] pt-14 pb-8 text-xs text-white/85"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1 */}
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#10b981] text-white">
                  <Plus className="h-6 w-6 stroke-[3]" />
                </div>
                <span className="text-base font-black tracking-wide text-white uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-white/80">
                {data.business.aboutText[0]}
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#6ee7b7] uppercase">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#34d399]" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#34d399]" />
                  <span>{data.business.phone.join(" - ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#34d399]" />
                  <span>{data.business.email.join(" | ")}</span>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#6ee7b7] uppercase">
                DANH MỤC DƯỢC NHA KHOA
              </h4>
              <ul className="mt-4 space-y-2">
                <li>Nước súc miệng Chlorhexidine 0.12%</li>
                <li>Gel bôi tái tạo nướu Hyaluronic</li>
                <li>Kem tái khoáng men răng Nhật Bản</li>
                <li>Bọc răng sứ sinh học &amp; Veneer</li>
                <li>Tẩy trắng răng khoáng chất kép</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#6ee7b7] uppercase">
                NHẬN BẢNG GIÁ &amp; CẨM NANG
              </h4>
              <p className="mt-4 leading-relaxed text-white/80">
                Đăng ký email để nhận ưu đãi 15% dược phẩm chăm sóc răng miệng
                chính hãng.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultOpen(true);
                }}
                className="mt-3 flex overflow-hidden rounded-lg bg-white p-1"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập email..."
                  className="w-full px-3 py-1.5 text-xs text-[#0f172a] outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-md bg-[#059669] px-3 text-white"
                  aria-label="Gửi"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6 text-center text-[11px] text-white/70">
            © {new Date().getFullYear()} Bản quyền thuộc về{" "}
            <strong className="text-white">{data.business.name}</strong> – Chuẩn
            Dược Nha Khoa GPP.
          </div>
        </div>
      </footer>

      {/* PRODUCT QUICK VIEW MODAL */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative grid w-full max-w-xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-[#1e293b] hover:bg-[#059669] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-square bg-[#f0f9ff]">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-[#0284c7] uppercase">
                  {activeProduct.categoryLabel}
                </span>
                <h3 className="mt-1 text-base font-extrabold text-[#0f172a]">
                  {activeProduct.name}
                </h3>
                <p className="mt-1 text-xs text-[#64748b]">
                  {activeProduct.dosageOrSpec}
                </p>
                <p className="mt-2 text-lg font-black text-[#059669]">
                  {activeProduct.price}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#475569]">
                  {activeProduct.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleAddCart(activeProduct.id);
                  setActiveProduct(null);
                }}
                className="mt-5 w-full rounded-xl bg-[#059669] py-2.5 text-xs font-bold text-white uppercase transition hover:bg-[#047857]"
              >
                THÊM VÀO GIỎ THUỐC
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONSULTATION MODAL */}
      {consultOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setConsultOpen(false);
                setConsultSuccess(false);
              }}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#334155] hover:bg-[#059669] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-base font-extrabold text-[#0f172a]">
              Đặt Lịch Khám &amp; Tư Vấn Dược Sĩ {data.business.name}
            </h3>
            {consultSuccess ? (
              <div className="mt-4 rounded-xl bg-[#ecfdf5] p-4 text-center">
                <Check className="mx-auto h-6 w-6 text-[#059669]" />
                <p className="mt-1 text-sm font-bold text-[#065f46]">
                  Đã gửi yêu cầu thành công!
                </p>
                <p className="mt-1 text-xs text-[#047857]">
                  Dược sĩ &amp; Bác sĩ trực chuyên môn sẽ gọi tư vấn ngay.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultSuccess(true);
                }}
                className="mt-4 space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên *"
                  className="w-full rounded-lg border border-[#cbd5e1] px-3.5 py-2 text-xs outline-none focus:border-[#059669]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  className="w-full rounded-lg border border-[#cbd5e1] px-3.5 py-2 text-xs outline-none focus:border-[#059669]"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#059669] py-2.5 text-xs font-bold text-white uppercase"
                >
                  XÁC NHẬN GỬI YÊU CẦU
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
