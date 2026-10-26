"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Tv,
  Refrigerator,
  Wind,
  Printer,
  Monitor,
  ChevronRight,
  MapPin,
  Phone,
  Truck,
  CreditCard,
  CheckCircle2,
  X,
  Sparkles,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct21DefaultData,
  B2bProduct21Data,
  TranAnhProduct,
} from "@/template-sources/b2b_product_21/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function TranAnhLogo({ brandName }: { brandName: string }) {
  return (
    <a href="#" className="inline-flex items-center gap-2.5 select-none">
      <div className="w-9 h-9 rounded-full bg-[#ed1c24] text-white flex items-center justify-center shadow-sm shrink-0">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-wider uppercase text-white">
          {brandName}
        </span>
        <span className="text-[10px] italic text-sky-200 mt-0.5">
          Chuyên gia điện máy
        </span>
      </div>
    </a>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: B2bProduct21Data = adaptClonedTemplateData(
    b2bProduct21DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] =
    useState<TranAnhProduct | null>(null);
  const [storeModalOpen, setStoreModalOpen] = useState(false);

  const sidebarIcons = [
    Smartphone,
    Laptop,
    Tablet,
    Headphones,
    Sparkles,
    Tv,
    Refrigerator,
    Wind,
    Printer,
    Monitor,
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-800 font-sans selection:bg-[#183883] selection:text-white overflow-x-hidden">
      {/* 1. ROYAL BLUE HEADER + RED CATEGORY BAR */}
      <header className="sticky top-0 z-40 shadow-md">
        <div className="bg-[#183883] text-white">
          {/* Top Mini Nav */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-1.5 flex justify-end gap-5 text-[10px] font-bold uppercase text-sky-100">
            <a href="#" className="hover:text-white">
              TRANG CHỦ
            </a>
            <a href="#dien-thoai" className="hover:text-white">
              GIỚI THIỆU
            </a>
            <a href="#gia-dung" className="hover:text-white">
              SẢN PHẨM
            </a>
            <a href="#lien-he" className="hover:text-white">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-white">
              LIÊN HỆ
            </a>
          </div>

          {/* Main Header Row */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
            <TranAnhLogo brandName={data.business.name} />

            {/* Middle Info */}
            <div className="hidden lg:flex items-center gap-6 text-xs">
              <div>
                <a
                  href={`tel:${data.business.phone[0]}`}
                  className="font-extrabold text-white block"
                >
                  {data.business.phone[0]}
                </a>
                <span className="text-[10px] text-sky-200">
                  Hỗ trợ mua hàng
                </span>
              </div>
              <div
                onClick={() => setStoreModalOpen(true)}
                className="cursor-pointer"
              >
                <span className="font-extrabold text-white block uppercase">
                  HỆ THỐNG SIÊU THỊ
                </span>
                <span className="text-[10px] text-sky-200">
                  {data.business.workingHours}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCartCount((c) => c + 1)}
                className="inline-flex items-center gap-2 font-bold text-xs cursor-pointer"
              >
                <span>GIỎ HÀNG / 0 ₫</span>
                <span className="w-7 h-7 rounded border border-white/50 flex items-center justify-center text-xs font-extrabold">
                  {cartCount}
                </span>
              </button>
            </div>

            {/* Search Input */}
            <div className="flex-1 max-w-xs flex items-center bg-white rounded-xs overflow-hidden">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Bạn tìm gì..."
                className="w-full px-3 py-1.5 text-xs text-slate-800 focus:outline-none"
              />
              <button
                type="button"
                aria-label="Tìm"
                className="px-3 py-1.5 text-slate-600 hover:text-[#183883]"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bright Red Bar */}
        <div className="bg-[#ed1c24] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide cursor-pointer"
            >
              <Menu className="w-4 h-4" />
              <span>DANH MỤC SẢN PHẨM ▾</span>
            </button>
            <span className="hidden sm:inline text-[11px] font-bold">
              Giao hàng &amp; Lắp đặt miễn phí 100km • Đổi mới trong 30 ngày
            </span>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (3-Col Megamenu + 6-Col Main Promo + 3-Col Store Locator) */}
      <section className="py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Left 3-Col Vertical Menu */}
            <div
              className={`lg:col-span-3 bg-white border border-slate-200 divide-y divide-slate-100 ${
                mobileMenuOpen ? "block" : "hidden lg:block"
              }`}
            >
              {data.sidebarCategories.map((cat, idx) => {
                const IconComp = sidebarIcons[idx % sidebarIcons.length];
                return (
                  <a
                    key={cat}
                    href="#dien-thoai"
                    className="px-3.5 py-2.5 flex items-center justify-between text-xs text-slate-700 hover:bg-blue-50 hover:text-[#183883] transition-colors"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <IconComp className="w-3.5 h-3.5 text-slate-500" />
                      <span>{cat}</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                );
              })}
            </div>

            {/* Center 6-Col Festive Banner */}
            <div className="lg:col-span-6 bg-white border border-slate-200 flex flex-col">
              <div className="relative flex-1 bg-gradient-to-br from-[#0245a3] via-[#0369a1] to-[#1e3a8a] text-white p-6 flex flex-col justify-between overflow-hidden min-h-[270px]">
                <div className="z-10 space-y-2">
                  <span className="inline-block bg-[#ed1c24] text-white text-[11px] font-black uppercase px-3 py-0.5 rounded-full">
                    {data.hero.eyebrow}
                  </span>
                  <h1 className="text-xl sm:text-2xl font-black uppercase text-amber-300 leading-tight">
                    {data.hero.title}
                  </h1>
                  <div className="inline-block bg-[#ed1c24] text-white text-xs font-extrabold px-3 py-1 rounded">
                    Tặng quà 200 ngàn - 2 triệu • Giảm 5 - 20%
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 items-end z-10">
                  <img
                    src={data.hero.backgroundImage}
                    alt="Khuyến mãi điện máy"
                    className="w-full h-32 object-cover rounded-lg border-2 border-white/30 shadow-lg"
                  />
                  <div className="bg-amber-400 text-slate-950 p-3 rounded-lg text-center font-black">
                    <div className="text-[10px] uppercase">Cơ hội trúng</div>
                    <div className="text-lg leading-none mt-0.5">8 XE SH</div>
                  </div>
                </div>
              </div>
              <div className="py-2.5 px-4 text-center text-xs font-semibold text-[#183883] border-t border-slate-100">
                {data.hero.subtitle}
              </div>
            </div>

            {/* Right 3-Col Store System & 2 Mini Banners */}
            <div className="lg:col-span-3 flex flex-col gap-2.5">
              {/* Store Box */}
              <div className="bg-white border border-slate-200 p-3.5 space-y-2.5">
                <h3 className="text-xs font-extrabold text-slate-900">
                  Hệ thống cửa hàng
                </h3>
                {data.storeLocations.map((st) => (
                  <div
                    key={st.id}
                    className="flex items-start gap-2 text-[11px] text-slate-600 leading-snug"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#ed1c24] shrink-0 mt-0.5" />
                    <span>{st.address}</span>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setStoreModalOpen(true)}
                  className="text-[11px] font-bold text-[#183883] hover:underline cursor-pointer"
                >
                  Xem thêm ▸
                </button>
              </div>

              {/* Ariston Promo */}
              <div className="bg-gradient-to-r from-sky-100 to-cyan-200 border border-sky-300 p-4 rounded-xs text-center">
                <div className="text-xs font-extrabold text-[#183883]">
                  {data.rightPromoBanners.topTitle}
                </div>
                <div className="mt-1 inline-block bg-emerald-700 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  {data.rightPromoBanners.topSubtitle}
                </div>
              </div>

              {/* Gia Dụng Promo */}
              <div className="bg-gradient-to-r from-[#ed1c24] to-orange-500 text-white p-4 rounded-xs text-center shadow-xs">
                <div className="text-xs font-black uppercase">
                  {data.rightPromoBanners.bottomTitle}
                </div>
                <div className="mt-1 bg-white text-[#ed1c24] text-xs font-black uppercase py-1 px-2 rounded-xs">
                  {data.rightPromoBanners.bottomSubtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALL 5 CATEGORY PRODUCT SECTIONS (ĐIỆN THOẠI, LAPTOP, MÁY TÍNH BẢNG, GIA DỤNG, PHỤ KIỆN) */}
      {data.sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200">
              {/* Header Bar */}
              <div className="border-b border-slate-200 px-4 flex flex-wrap items-center gap-6">
                <h2 className="text-xs sm:text-sm font-extrabold uppercase text-[#183883] border-b-2 border-[#183883] py-2.5">
                  {sec.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 py-2">
                  {sec.subLinks.map((sub) => (
                    <a
                      key={sub}
                      href={`#${sec.id}`}
                      className="hover:text-[#183883]"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div
                className={`grid grid-cols-2 sm:grid-cols-3 ${
                  sec.columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"
                } divide-x divide-y divide-slate-100`}
              >
                {sec.products.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className="p-4 bg-white hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-40 flex items-center justify-center mb-3 overflow-hidden">
                        {prod.discountBadge && (
                          <span className="absolute top-1 left-1 z-10 w-9 h-9 rounded-full bg-[#ed1c24] text-white text-[10px] font-extrabold flex items-center justify-center shadow">
                            {prod.discountBadge}
                          </span>
                        )}
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-[11px] text-[#183883] group-hover:text-[#ed1c24] leading-snug line-clamp-2 min-h-[32px]">
                        {prod.title}
                      </h3>
                    </div>
                    <div className="mt-2 text-xs font-extrabold text-[#b91c1c]">
                      {prod.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 4. ROYAL BLUE FOOTER + WHITE PAYMENT/SHIPPING + RED STORE STRIP */}
      <footer id="lien-he" className="mt-8">
        <div className="bg-[#183883] text-white py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
            <div className="space-y-2.5">
              <h4 className="font-extrabold uppercase tracking-wider">
                TIN TỨC
              </h4>
              <ul className="space-y-1.5 text-[11px] text-sky-100">
                <li>▸ Giới thiệu</li>
                <li>▸ Tin tức</li>
                <li>▸ Tin khuyến mãi</li>
                <li>▸ Tuyển dụng</li>
                <li>▸ Quan hệ cổ đông</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-extrabold uppercase tracking-wider">
                HỖ TRỢ MUA HÀNG
              </h4>
              <ul className="space-y-1.5 text-[11px] text-sky-100">
                <li>▸ Hỗ trợ mua hàng trực tuyến</li>
                <li>▸ Các hình thức thanh toán</li>
                <li>▸ Hướng dẫn mua hàng trực tuyến</li>
                <li>▸ Phát hành hóa đơn</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-extrabold uppercase tracking-wider">
                CHÍNH SÁCH CHUNG
              </h4>
              <ul className="space-y-1.5 text-[11px] text-sky-100">
                <li>▸ Chính sách bảo hành</li>
                <li>▸ Chính sách đổi trả 30 ngày</li>
                <li>▸ Chính sách vận chuyển &amp; lắp đặt</li>
                <li>▸ Bảo mật thông tin khách hàng</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-extrabold uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>LIÊN HỆ</span>
              </h4>
              <p className="text-[11px] text-sky-100">
                CSKH:{" "}
                <a
                  href={`tel:${data.business.phone[0]}`}
                  className="font-extrabold text-white"
                >
                  {data.business.phone[0]}
                </a>
              </p>
              <p className="text-[11px] text-sky-100">
                Địa chỉ: {data.business.address}
              </p>
              <p className="text-[11px] text-sky-100">
                Email: {data.business.email[0]}
              </p>
            </div>
          </div>
        </div>

        {/* White Payment & Free Delivery Row */}
        <div className="bg-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-800 flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4 text-[#183883]" />
                <span>HỖ TRỢ THANH TOÁN</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "VISA",
                  "MasterCard",
                  "VIB",
                  "Vietcombank",
                  "Techcombank",
                  "ACB",
                  "VPBank",
                  "BIDV",
                  "VietinBank",
                  "Agribank",
                ].map((bk) => (
                  <span
                    key={bk}
                    className="border border-slate-200 px-2.5 py-1 rounded-2xs text-[10px] font-bold text-slate-600"
                  >
                    {bk}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase text-slate-800 flex items-center gap-2 mb-3">
                <Truck className="w-4 h-4 text-[#183883]" />
                <span>DỊCH VỤ GIAO HÀNG</span>
              </h4>
              <div className="inline-flex items-center gap-3 bg-[#183883] text-white px-4 py-2.5 rounded-md">
                <Truck className="w-6 h-6 text-amber-300 shrink-0" />
                <div className="text-[11px] font-bold uppercase leading-tight">
                  GIAO HÀNG MIỄN PHÍ TẬN NHÀ TRONG VÒNG 100KM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Red Store System Bar */}
        <div className="bg-[#ed1c24] text-white py-2 text-center text-xs font-extrabold uppercase tracking-wider">
          HỆ THỐNG CỬA HÀNG {data.business.name}
        </div>

        <div className="bg-slate-200 py-3 text-center text-[11px] text-slate-600">
          © Bản quyền thuộc về <strong>{data.business.name}</strong>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-52 bg-slate-50 flex items-center justify-center p-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="max-h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {selectedProduct.discountBadge && (
                <span className="inline-block bg-red-50 text-[#ed1c24] text-xs font-bold px-2.5 py-0.5 rounded-full">
                  Khuyến mãi {selectedProduct.discountBadge}
                </span>
              )}
              <h3 className="mt-2 text-base font-extrabold text-slate-900">
                {selectedProduct.title}
              </h3>
              <div className="mt-2 text-lg font-extrabold text-[#ed1c24]">
                {selectedProduct.price}
              </div>
              <div className="mt-3 space-y-1.5">
                {selectedProduct.specs.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-600"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#183883] shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="text-xs font-bold text-slate-500 px-4 py-2"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSelectedProduct(null);
                  }}
                  className="bg-[#ed1c24] text-white text-xs font-bold uppercase px-5 py-2.5 cursor-pointer"
                >
                  Mua Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STORE SYSTEM MODAL */}
      {storeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setStoreModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-extrabold text-[#183883] uppercase">
              Hệ Thống Siêu Thị Điện Máy {data.business.name}
            </h3>
            <div className="mt-4 space-y-3 text-xs text-slate-600">
              {data.storeLocations.map((st) => (
                <div
                  key={st.id}
                  className="p-3 bg-slate-50 rounded border border-slate-200 flex items-start gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#ed1c24] shrink-0 mt-0.5" />
                  <span>{st.address}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
