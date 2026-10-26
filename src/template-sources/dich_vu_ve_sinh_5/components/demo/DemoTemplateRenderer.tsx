"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Newspaper,
  PartyPopper,
  ShieldCheck
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { dichVuVeSinh5DefaultData, type DichVuVeSinh5Data } from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<DichVuVeSinh5Data>(
    dichVuVeSinh5DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState<
    Array<{ id: string; name: string; price: number; image: string; qty: number }>
  >([
    {
      id: "init-1",
      name: "Bảng Chalkboard Store",
      price: 700000,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=80",
      qty: 1
    }
  ]);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const handleAddItem = (item: { id: string; name: string; price: string; image: string }) => {
    const numeric = parseInt(item.price.replace(/\D/g, ""), 10) || 350000;
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { id: item.id, name: item.name, price: numeric, image: item.image, qty: 1 }];
    });
    setCartOpen(true);
  };

  /* Colorful Rainbow Emblem Logo matching PARTYLAND badge in VS008 */
  const renderRainbowEmblem = (small = false) => (
    <div
      className={`inline-flex flex-col items-center select-none ${
        small ? "scale-90" : ""
      }`}
    >
      <div className="relative w-16 h-12 flex items-end justify-center">
        {/* Rainbow Arc */}
        <div className="w-14 h-7 rounded-t-full border-t-4 border-x-4 border-[#f4436c] flex items-end justify-center p-0.5">
          <div className="w-11 h-5 rounded-t-full border-t-4 border-x-4 border-[#f9c623] flex items-end justify-center p-0.5">
            <div className="w-8 h-3.5 rounded-t-full bg-[#00b4e5]" />
          </div>
        </div>
        <Sparkles className="w-4 h-4 text-[#f9c623] absolute -top-1 right-1 fill-current" />
      </div>
      <span className="text-[11px] font-black tracking-tight bg-gradient-to-r from-[#f4436c] via-[#f9c623] to-[#00b4e5] bg-clip-text text-transparent uppercase leading-none">
        {data.business.name}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-slate-700 font-sans selection:bg-[#00b4e5] selection:text-white relative">
      {/* Floating Right Dots & Messenger */}
      <div className="fixed right-4 top-1/3 z-40 hidden lg:flex flex-col items-center gap-2">
        <a
          href="#he-thong"
          className="w-9 h-9 rounded-full bg-[#1890ff] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform mb-1"
          title="Tư vấn dịch vụ"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
        </a>
        {["#block-1", "#block-2", "#block-3", "#block-4"].map((href, i) => (
          <a
            key={href}
            href={href}
            className={`w-2.5 h-2.5 rounded-full ${
              i === 0 ? "bg-[#00b4e5]" : "bg-[#00b4e5]/50 hover:bg-[#00b4e5]"
            }`}
          />
        ))}
      </div>

      {/* Top White Bar: Hotline Left + Rainbow Logo Center + Cart Right */}
      <div className="bg-white border-b border-slate-100 relative z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left: Hotline + Search Button */}
          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-600">
              Hotline:{" "}
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="font-extrabold text-slate-900 hover:text-[#00b4e5]"
              >
                {primaryPhone}
              </a>
            </span>
            <button
              type="button"
              className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#00b4e5] hover:text-[#00b4e5]"
              aria-label="Tìm kiếm"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center: Rainbow Emblem Logo */}
          <a href="#" className="shrink-0">
            {renderRainbowEmblem(false)}
          </a>

          {/* Right: Cart Trigger + Floating Cart Dropdown matching VS008 */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCartOpen(!cartOpen)}
              className="flex items-center gap-2 text-xs text-slate-700 hover:text-[#00b4e5] cursor-pointer"
            >
              <span>
                Giỏ hàng / <strong>{totalAmount.toLocaleString("vi-VN")} đ</strong>
              </span>
              <span className="w-6 h-6 rounded-xs bg-[#00b4e5] text-white text-[11px] font-extrabold flex items-center justify-center shadow-xs">
                {totalQty}
              </span>
            </button>

            {/* Floating Cart Dropdown Preview matching top-right of VS008 */}
            {cartOpen && cartItems.length > 0 && (
              <div className="hidden sm:block absolute right-0 top-11 w-64 bg-white border border-slate-200 shadow-2xl p-4 z-50 rounded-xs">
                {cartItems.slice(-1).map((ci) => (
                  <div
                    key={ci.id}
                    className="flex items-start justify-between gap-2.5 pb-3 border-b border-slate-100"
                  >
                    <img
                      src={ci.image}
                      alt={ci.name}
                      className="w-10 h-10 object-cover rounded-xs border border-slate-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0 text-[11px]">
                      <p className="font-bold text-slate-800 leading-tight truncate">{ci.name}</p>
                      <p className="text-slate-500 mt-0.5">
                        {ci.qty} × {ci.price.toLocaleString("vi-VN")} đ
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCartOpen(false)}
                      className="text-slate-400 hover:text-slate-700"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                <div className="py-2.5 text-center text-xs border-b border-slate-100">
                  <span className="text-slate-600">Tổng cộng: </span>
                  <strong className="text-slate-900">
                    {totalAmount.toLocaleString("vi-VN")} đ
                  </strong>
                </div>

                <div className="pt-2.5 space-y-2">
                  <a
                    href="#block-1"
                    onClick={() => setCartOpen(false)}
                    className="block w-full bg-[#00b4e5] hover:bg-[#0099c4] text-white text-center text-xs font-bold py-2 rounded-xs transition-colors"
                  >
                    Xem giỏ hàng
                  </a>
                  <a
                    href="#he-thong"
                    onClick={() => setCartOpen(false)}
                    className="block w-full bg-[#f4436c] hover:bg-[#d93259] text-white text-center text-xs font-bold py-2 rounded-xs transition-colors"
                  >
                    Thanh toán
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cyan Blue Navigation Bar (#00b4e5) */}
      <header className="sticky top-0 z-40 bg-[#00b4e5] text-white shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-10 flex items-center">
          {/* Left Pink Category Header Tab (#f4436c) */}
          <div className="w-56 bg-[#f4436c] h-full px-4 flex items-center gap-2 text-xs font-bold shrink-0">
            <Menu className="w-4 h-4" />
            <span>Danh mục sản phẩm</span>
          </div>

          {/* Horizontal Links */}
          <nav className="hidden md:flex items-center gap-6 pl-6 text-xs font-bold text-white">
            <a href="#block-1" className="hover:underline">
              Các lễ kỷ niệm
            </a>
            <a href="#block-2" className="hover:underline">
              Các dịp lễ hội
            </a>
            <a href="#block-3" className="hover:underline">
              Tiệc theo chủ đề
            </a>
            <a href="#tin-tuc" className="hover:underline">
              Tin tức – Sự kiện
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-auto p-2 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Hero Section: Left 10-Item Vertical Sidebar + Right Festive Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-0 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white shadow-xs border border-slate-200/80">
          {/* Left Vertical Sidebar */}
          <div className="lg:col-span-3 border-r border-slate-100 divide-y divide-slate-100">
            {(data.sidebarCategories || []).map((cat) => (
              <a
                key={cat.id}
                href="#block-1"
                className="flex items-center justify-between px-3.5 py-2.5 text-[11px] text-slate-600 hover:text-[#00b4e5] hover:bg-slate-50 transition-colors"
              >
                <span className="flex items-center gap-2 truncate">
                  <PartyPopper className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{cat.label}</span>
                  {cat.isNew && (
                    <span className="bg-[#00b4e5] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-xs uppercase">
                      NEW
                    </span>
                  )}
                </span>
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              </a>
            ))}
          </div>

          {/* Right Festive Hero Poster */}
          <div className="lg:col-span-9 relative min-h-[320px] sm:min-h-[380px] overflow-hidden bg-[#fdf8ed] flex items-center justify-center">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/80 to-white/40" />

            <div className="relative z-10 text-center max-w-md px-6 py-8 bg-white/85 backdrop-blur-xs border-2 border-[#d4af37]/50 shadow-lg">
              <div className="bg-[#d4af37] text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1 inline-block mb-2">
                {data.hero.eyebrow}
              </div>
              <p className="font-serif italic text-xl text-slate-800">come to</p>
              <h1 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-wider text-[#c59b27] uppercase leading-tight my-1">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-700 mt-2">
                {data.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Side-by-Side Holiday Promo Banners */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(data.promoBanners || []).map((banner, idx) => (
            <div
              key={banner.id}
              className="relative h-36 sm:h-40 rounded-xs overflow-hidden shadow-xs group cursor-pointer"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 ${
                  idx === 0
                    ? "bg-gradient-to-r from-sky-900/55 via-red-700/45 to-sky-900/55"
                    : "bg-gradient-to-r from-red-950/80 via-red-800/65 to-red-950/80"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white drop-shadow-md">
                  {banner.title}
                </h3>
                <p className="text-xs text-amber-200 font-semibold mt-1">{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Category Showcase Blocks matching exact 3-Zone Layout of VS008 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6 pb-8">
        {(data.categoryBlocks || []).map((block) => (
          <section
            key={block.id}
            id={block.id}
            className="bg-white border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Col 1 (2/12): Colored Top Header + Emblem + Subcategory List */}
            <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col">
              <div
                className="px-3 py-2.5 text-white text-xs font-extrabold flex items-center gap-2"
                style={{ backgroundColor: block.headerColor }}
              >
                <PartyPopper className="w-4 h-4 shrink-0" />
                <span className="leading-tight">{block.title}</span>
              </div>

              <div className="p-4 flex flex-col items-center border-b border-slate-100">
                {renderRainbowEmblem(true)}
              </div>

              <ul className="p-3.5 space-y-2 text-[11px] text-slate-600 flex-1">
                {block.subcategories.map((sub, sIdx) => (
                  <li key={sIdx}>
                    <a href="#he-thong" className="hover:text-[#00b4e5] transition-colors block">
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 (4/12): Tall Featured Poster Illustration */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 relative min-h-[280px] overflow-hidden group">
              <img
                src={block.posterImage}
                alt={block.posterTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/25 to-white/60 flex flex-col justify-between p-5 text-center">
                <h3
                  className="text-xl sm:text-2xl font-serif italic font-black drop-shadow-xs"
                  style={{ color: block.headerColor }}
                >
                  {block.posterTitle}
                </h3>
                <p className="text-xs font-bold text-slate-700 bg-white/90 py-1.5 px-3 rounded shadow-xs">
                  {block.posterSubtitle}
                </p>
              </div>
            </div>

            {/* Col 3 (6/12): 3x2 Product/Service Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 divide-x divide-y divide-slate-100">
              {block.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleAddItem(item)}
                  className="p-3 flex flex-col justify-between hover:bg-slate-50/80 transition-colors cursor-pointer group"
                >
                  <div className="aspect-square rounded-xs overflow-hidden bg-slate-100 mb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-[11px] text-slate-600 group-hover:text-[#00b4e5] line-clamp-2 leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs font-extrabold text-slate-900 mt-1">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Section 5: Tin tức hữu ích (Brown Left Tab #6d4c41 + 4 Article Cards) */}
        <section
          id="tin-tuc"
          className="bg-white border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col">
            <div className="bg-[#6d4c41] text-white px-3 py-2.5 text-xs font-extrabold flex items-center gap-2">
              <Newspaper className="w-4 h-4 shrink-0" />
              <span>Tin tức hữu ích</span>
            </div>
            <div className="p-5 flex-1 flex items-center justify-center">
              {renderRainbowEmblem(true)}
            </div>
          </div>

          <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {(data.news || []).slice(0, 4).map((post) => (
              <article key={post.id} className="p-3.5 group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden rounded-xs bg-slate-100 mb-2.5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xs font-extrabold text-slate-800 group-hover:text-[#00b4e5] line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Section 6: Full-Width Store Banner with Centered Cyan Pill Button HỆ THỐNG CỬA HÀNG */}
      <section id="he-thong" className="relative h-52 sm:h-64 overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1920&q=80"
          alt="Hệ thống cửa hàng"
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-black/35 flex items-center justify-center p-4">
          <a
            href="#footer"
            className="bg-[#00b4e5] hover:bg-[#0099c4] text-white text-sm sm:text-base font-extrabold uppercase tracking-wider px-10 py-3.5 rounded-full shadow-2xl transition-transform hover:scale-105"
          >
            HỆ THỐNG CỬA HÀNG
          </a>
        </div>
      </section>

      {/* Footer — Light Gray #f5f5f5 with 4 Columns + Company Info & Bộ Công Thương Badge */}
      <footer id="footer" className="bg-[#f5f5f5] text-slate-600 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200 text-xs">
            {/* Col 1: MENU */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase text-[#f4436c] mb-3">MENU</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#00b4e5] font-semibold">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#block-1" className="hover:text-[#00b4e5]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#00b4e5]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#block-2" className="hover:text-[#00b4e5]">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#block-3" className="hover:text-[#00b4e5]">
                    Khuyến mại
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-[#00b4e5]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: HƯỚNG DẪN, HỖ TRỢ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-[#f4436c] mb-3">
                HƯỚNG DẪN, HỖ TRỢ
              </h4>
              <ul className="space-y-2">
                <li>Hướng dẫn mua hàng</li>
                <li>Vận chuyển – Giao hàng</li>
                <li>Phương thức thanh toán</li>
                <li>Hướng dẫn tạo tài khoản</li>
                <li>Phương thức đổi – trả hàng</li>
              </ul>
            </div>

            {/* Col 3: QUY ĐỊNH CHÍNH SÁCH */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-[#f4436c] mb-3">
                QUY ĐỊNH CHÍNH SÁCH
              </h4>
              <ul className="space-y-2">
                <li>Chính sách tích điểm</li>
                <li>Chính sách bán sỉ</li>
                <li>Chính sách bảo hành</li>
                <li>Bảo mật thông tin cá nhân</li>
                <li>Sử dụng thông tin</li>
              </ul>
            </div>

            {/* Col 4: FANPAGE Widget */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-extrabold uppercase text-[#f4436c] mb-3">FANPAGE</h4>
              <div className="bg-white border border-slate-200 rounded-xs overflow-hidden shadow-xs">
                <div className="relative h-24 bg-slate-800 p-3 flex items-start gap-2.5 text-white">
                  <img
                    src={data.hero.backgroundImage}
                    alt="Fanpage"
                    className="absolute inset-0 w-full h-full object-cover opacity-45"
                  />
                  <div className="relative z-10 w-10 h-10 bg-white rounded-xs flex items-center justify-center text-[#00b4e5] font-black shrink-0">
                    P
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-bold leading-tight">{data.business.name}</p>
                    <p className="text-[10px] text-slate-200">8,8K lượt thích</p>
                  </div>
                </div>
                <div className="p-2.5 bg-slate-50 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Hãy là người đầu tiên trong số bạn bè của bạn thích nội dung này</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Company Legal Registration + Bộ Công Thương Badge */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs">
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <h5 className="font-extrabold text-slate-800 uppercase">
                CÔNG TY TNHH {data.business.name}
              </h5>
              <p>Giấy phép kinh doanh: 0313728397 Sở kế hoạch và đầu tư TP.Hồ Chí Minh</p>
              <p>Dịch vụ trang trí sự kiện, vệ sinh công nghiệp &amp; chăm sóc không gian</p>
              <p>Địa Chỉ: {data.business.address}</p>
              <p>Điện Thoại: {primaryPhone}</p>
            </div>

            <div className="bg-[#0072bc] text-white px-4 py-2 rounded flex items-center gap-2 shadow-xs shrink-0">
              <CheckCircle2 className="w-6 h-6" />
              <div className="leading-tight">
                <span className="block text-[10px] font-black uppercase">ĐÃ THÔNG BÁO</span>
                <span className="block text-[9px] uppercase">BỘ CÔNG THƯƠNG</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-3 text-center text-[11px] text-slate-400 border-t border-slate-100">
          © All rights reserved. Thiết kế website{" "}
          <span className="text-slate-700 font-semibold">{data.business.name}</span>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
