"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Phone,
  ShoppingBag,
  Sparkles,
  X,
  CheckCircle2,
  IceCream
} from "lucide-react";
import { Facebook, Youtube } from "@/components/icons/BrandIcons";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  quanCafe4DefaultData,
  type QuanCafe4Data,
  type QuanCafe4Product
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: QuanCafe4Data = adaptClonedTemplateData(quanCafe4DefaultData, incomingData);

  const [selectedProduct, setSelectedProduct] = useState<QuanCafe4Product | null>(null);
  const [cartCount, setCartCount] = useState(1);
  const [orderSent, setOrderSent] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "cake" | "tub" | "drink">("all");

  const filteredProducts =
    activeFilter === "all"
      ? data.products
      : data.products.filter((p) => p.type === activeFilter);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCartCount((c) => c + 1);
    setOrderSent(true);
    setTimeout(() => {
      setOrderSent(false);
      setSelectedProduct(null);
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#d81b60] selection:text-white">
      {/* 1. TWO-TIER HEADER WITH OVERLAPPING CIRCULAR CREST */}
      <header className="relative z-40">
        {/* Top White Utility Bar */}
        <div className="bg-white border-b border-pink-100">
          <div className="max-w-5xl mx-auto px-4 h-7 flex items-center justify-center sm:justify-end gap-4 text-[10px] text-slate-500">
            <a href="#trang-chu" className="hover:text-[#d81b60]">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#d81b60]">
              Giới thiệu
            </a>
            <a href="#cua-hang" className="hover:text-[#d81b60]">
              Hệ thống cửa hàng
            </a>
            <a href="#lien-he" className="hover:text-[#d81b60]">
              Liên hệ
            </a>
            <a href="#lien-he" className="hover:text-[#d81b60] hidden sm:inline">
              Tuyển dụng
            </a>
            <button
              type="button"
              onClick={() => setSelectedProduct(data.products[0])}
              className="text-[#d81b60] font-semibold inline-flex items-center gap-1"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>Xem giỏ hàng ({cartCount})</span>
            </button>
          </div>
        </div>

        {/* Main Candy Pink Navigation Bar (#ec6ea5) */}
        <div className="bg-[#ec6ea5] text-white shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-10 flex items-center justify-between relative">
            {/* Overlapping Circular Mascot / Brand Crest */}
            <a
              href="#trang-chu"
              className="absolute -top-6 left-4 sm:left-8 z-30 w-20 h-20 rounded-full bg-white border-4 border-[#0288d1] shadow-lg flex flex-col items-center justify-center text-center p-1 hover:scale-105 transition-transform"
            >
              <IceCream className="w-6 h-6 text-[#d81b60]" />
              <span className="text-[10px] font-serif italic font-extrabold text-[#0288d1] leading-none mt-0.5">
                {data.business.name}
              </span>
            </a>

            <div className="w-28 sm:w-36" />

            <nav className="flex items-center gap-5 sm:gap-8 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="inline-flex items-center gap-1 hover:text-yellow-100"
              >
                <span>Kem</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <a
                href="#khuyen-mai"
                className="inline-flex items-center gap-1 hover:text-yellow-100"
              >
                <span>Khuyến mãi</span>
                <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="#tin-tuc"
                className="inline-flex items-center gap-1 hover:text-yellow-100"
              >
                <span>Tin tức – Sự kiện</span>
                <ChevronDown className="w-3 h-3" />
              </a>
              <a href="#danh-sach-san-pham" className="hover:text-yellow-100">
                Đặt hàng
              </a>
            </nav>

            <div className="hidden md:block w-16" />
          </div>
        </div>
      </header>

      {/* 2. DIAMOND-QUILTED PASTEL PINK HERO BANNER */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-b from-[#f9b4d0] via-[#fbd0e3] to-[#f8b2ce] pt-10 pb-16"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.65) 0%, rgba(248,178,206,0.4) 60%), repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0px, rgba(255,255,255,0.14) 24px, transparent 24px, transparent 48px)"
        }}
      >
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
          {/* Left Circular Oreo Gelato Cake */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#f48fb1] p-3 shadow-2xl border-4 border-white/80">
              <img
                src={data.heroCakeImage}
                alt={data.hero.title}
                className="w-full h-full object-cover rounded-full shadow-inner"
              />
            </div>
          </div>

          {/* Right Playful 150K & Ribbon Callout */}
          <div className="md:col-span-6 text-center flex flex-col items-center">
            <div className="relative inline-block">
              <Sparkles className="w-6 h-6 text-[#0288d1] absolute -top-4 -left-6 animate-pulse" />
              <Sparkles className="w-6 h-6 text-[#d81b60] absolute -top-2 -right-6 animate-pulse" />
              <div
                className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#0095da] leading-none"
                style={{
                  textShadow: "3px 4px 0px #ffffff, 5px 7px 12px rgba(2,136,209,0.35)"
                }}
              >
                {data.heroPriceHighlight}
              </div>
            </div>

            {/* Curved Magenta Ribbon */}
            <div className="-mt-2 bg-[#d81b60] text-white px-7 py-2 rounded-full shadow-lg border-2 border-white transform -rotate-2">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider">
                {data.heroRibbonText}
              </span>
            </div>

            <div className="mt-3 text-center">
              <div className="text-xs font-bold text-[#0077b5] uppercase tracking-wider">
                Giao tận nơi (Delivery)
              </div>
              <a
                href={`tel:${data.business.phone[0]}`}
                className="text-2xl sm:text-3xl font-black text-[#0077b5] tracking-wider hover:text-[#d81b60] transition-colors"
              >
                {data.business.phone[0]}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Blue Curved Wave Divider */}
        <div className="absolute inset-x-0 bottom-0 h-5 bg-[#0077b5]" />
      </section>

      {/* 3. 3-COLUMN PINK FEATURE STRIP (#ec6ea5) */}
      <section id="khuyen-mai" className="bg-[#ec6ea5] text-white py-7 border-t-2 border-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.pinkPillars.map((pillar) => (
            <div key={pillar.id} className="flex items-start gap-3.5">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md shrink-0"
              />
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wide text-white mb-1">
                  {pillar.title}
                </h2>
                <p className="text-[11px] text-pink-50 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DANH SÁCH SẢN PHẨM (20 ITEMS IN 4-COLUMN GRID) */}
      <section id="danh-sach-san-pham" className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              DANH SÁCH SẢN PHẨM
            </h2>

            <div className="flex items-center gap-2 text-[11px]">
              {[
                { key: "all", label: "Tất cả (20)" },
                { key: "cake", label: "Bánh kem lạnh" },
                { key: "tub", label: "Hộp kem tươi" },
                { key: "drink", label: "Thức uống đá xay" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key as any)}
                  className={`px-3 py-1 rounded-full font-semibold transition-colors ${
                    activeFilter === tab.key
                      ? "bg-[#d81b60] text-white"
                      : "bg-pink-50 text-[#d81b60] hover:bg-pink-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-10">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className="group cursor-pointer flex flex-col items-center text-center"
              >
                {/* Magenta Top Pill Header for Ice Cream Cakes */}
                {item.badgeTitle ? (
                  <div className="w-full bg-[#d81b60] text-white text-[10px] font-extrabold uppercase tracking-wider py-1 px-2 rounded-full mb-3 shadow-xs">
                    {item.badgeTitle}
                  </div>
                ) : (
                  <div className="h-6 mb-3" />
                )}

                {/* Product Image */}
                <div className="w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center p-2 mb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      item.type === "cake"
                        ? "rounded-full shadow-md border-2 border-pink-100"
                        : "rounded-xl shadow-sm"
                    }`}
                  />
                </div>

                {/* Flavor Scoop Tag */}
                {item.flavorTag && (
                  <div className="inline-flex items-center gap-1.5 bg-pink-50/90 border border-pink-100 px-2.5 py-0.5 rounded-full mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d81b60] shrink-0" />
                    <span className="text-[9px] font-bold text-[#d81b60] line-clamp-1">
                      {item.flavorTag}
                    </span>
                  </div>
                )}

                {/* Title & Price */}
                <h3 className="text-[11px] font-medium text-slate-600 group-hover:text-[#d81b60] transition-colors">
                  {item.name}
                </h3>
                <div className="text-[11px] font-extrabold text-slate-800 mt-0.5">
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="px-7 py-2 rounded-full bg-[#ec6ea5] hover:bg-[#d81b60] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
            >
              XEM THÊM
            </button>
          </div>
        </div>
      </section>

      {/* 5. TIN TỨC – SỰ KIỆN (LIGHT BLUE BOX #e6f3fb) */}
      <section id="tin-tuc" className="pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600">
              TIN TỨC – SỰ KIỆN
            </h2>
            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <a href="#lien-he" className="hover:text-[#0288d1]">
                Facebook
              </a>
              <a href="#lien-he" className="hover:text-[#d81b60]">
                Youtube
              </a>
            </div>
          </div>

          <div className="bg-[#e6f3fb] p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {(data.news || []).map((post) => (
              <article key={post.id} className="flex items-start gap-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-14 object-cover bg-white p-0.5 border border-sky-200 shrink-0"
                />
                <div className="space-y-1">
                  <h3 className="text-[10px] font-bold text-[#0077b5] hover:text-[#d81b60] cursor-pointer leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[9px] text-slate-500 line-clamp-2 leading-relaxed">
                    Ngày {post.date} vừa qua, {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER (#e2e2e2 WITH VERTICAL PINK GELATO SPOON) */}
      <footer id="lien-he" className="bg-[#e2e2e2] text-slate-600 pt-8 pb-10 relative">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
          {/* Col 1: Pink Spoon & Social Circles */}
          <div className="sm:col-span-3 flex items-start gap-5">
            {/* Iconic Pink Gelato Tasting Spoon */}
            <div className="-mt-11 flex flex-col items-center">
              <div className="w-5 h-8 rounded-full bg-[#ec6ea5] shadow-md" />
              <div className="w-2 h-14 bg-[#ec6ea5] -mt-1 rounded-b-full shadow-md" />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="#lien-he"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full border border-slate-400 flex items-center justify-center text-slate-500 hover:border-[#d81b60] hover:text-[#d81b60]"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#lien-he"
                aria-label="Youtube"
                className="w-7 h-7 rounded-full border border-slate-400 flex items-center justify-center text-slate-500 hover:border-[#d81b60] hover:text-[#d81b60]"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: KEM */}
          <div className="sm:col-span-3 space-y-1.5 text-[10px]">
            <h3 className="font-bold uppercase text-slate-700 mb-2">KEM</h3>
            {data.footerColumns.kem.map((item, idx) => (
              <div key={idx} className="hover:text-[#d81b60] cursor-pointer">
                {item}
              </div>
            ))}
          </div>

          {/* Col 3: ĐẶT HÀNG */}
          <div className="sm:col-span-3 space-y-1.5 text-[10px]">
            <h3 className="font-bold uppercase text-slate-700 mb-2">ĐẶT HÀNG</h3>
            <div className="font-semibold text-[#d81b60]">
              GIAO HÀNG: {data.business.phone[0]}
            </div>
            {data.footerColumns.datHang.slice(1).map((item, idx) => (
              <div key={idx} className="hover:text-[#d81b60] cursor-pointer">
                {item}
              </div>
            ))}
          </div>

          {/* Col 4: GIỚI THIỆU */}
          <div id="gioi-thieu" className="sm:col-span-3 space-y-1.5 text-[10px]">
            <h3 className="font-bold uppercase text-slate-700 mb-2">GIỚI THIỆU</h3>
            {data.footerColumns.gioiThieu.map((item, idx) => (
              <div key={idx} className="hover:text-[#d81b60] cursor-pointer">
                {item}
              </div>
            ))}
            <div id="cua-hang" className="pt-2 text-slate-500">
              {data.business.address}
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#555555] text-neutral-200 py-2.5 text-center text-[11px]">
        © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
      </div>

      {/* ORDER / PRODUCT MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ec6ea5]"
          >
            <div className="bg-[#d81b60] text-white px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider">
                {selectedProduct.badgeTitle || selectedProduct.name}
              </span>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 text-center space-y-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-pink-100 shadow-md"
              />
              <div>
                <h4 className="text-base font-bold text-slate-800">
                  {selectedProduct.name}
                </h4>
                {selectedProduct.flavorTag && (
                  <p className="text-xs text-[#d81b60] font-semibold mt-0.5">
                    Vị kem: {selectedProduct.flavorTag}
                  </p>
                )}
                <div className="text-lg font-black text-[#0077b5] mt-1">
                  {selectedProduct.price}
                </div>
              </div>

              <form onSubmit={handleOrderSubmit} className="space-y-2.5 text-left">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên người nhận"
                  className="w-full border border-pink-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#d81b60]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại giao bánh"
                  className="w-full border border-pink-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#d81b60]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#d81b60] hover:bg-[#ad1457] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-colors"
                >
                  ĐẶT GIAO KEM LẠNH NGAY
                </button>
                {orderSent && (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-600 pt-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Đã ghi nhận đơn đặt bánh kem lạnh!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
