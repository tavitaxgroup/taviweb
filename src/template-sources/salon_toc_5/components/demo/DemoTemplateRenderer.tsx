"use client";

import React, { useState } from "react";
import {
  User,
  LayoutGrid,
  ShoppingBag,
  Heart,
  RefreshCw,
  Search,
  ChevronLeft,
  ChevronRight,
  Star,
  Calendar,
  Share2,
  X,
  CheckCircle2
} from "lucide-react";
import { Facebook, Instagram } from "@/components/icons/BrandIcons";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  salonToc5DefaultData,
  type SalonToc5Data,
  type SalonToc5Product
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: SalonToc5Data = adaptClonedTemplateData(
    salonToc5DefaultData,
    incomingData
  );

  const [selectedDealThumb, setSelectedDealThumb] = useState(
    data.dealSpotlight.mainImage
  );
  const [selectedProduct, setSelectedProduct] = useState<SalonToc5Product | null>(
    null
  );
  const [cartCount, setCartCount] = useState(1);
  const [showToast, setShowToast] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const renderProductCard = (prod: SalonToc5Product) => (
    <div
      key={prod.id}
      onClick={() => setSelectedProduct(prod)}
      className="group cursor-pointer flex flex-col justify-between"
    >
      <div className="relative bg-[#f5f5f5] h-52 flex items-center justify-center p-4 mb-2.5 overflow-hidden">
        {/* Badges Stack */}
        {prod.badges && prod.badges.length > 0 && (
          <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
            {prod.badges.map((b, i) => (
              <span
                key={i}
                className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full text-white ${
                  b.color === "red"
                    ? "bg-[#f05a5b]"
                    : b.color === "green"
                    ? "bg-[#4caf50]"
                    : "bg-[#8d8038]"
                }`}
              >
                {b.text}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
          }}
          aria-label="Yêu thích"
          className="absolute top-2.5 right-2.5 z-10 text-slate-400 hover:text-[#f05a5b]"
        >
          <Heart className="w-3.5 h-3.5" />
        </button>

        <img
          src={prod.image}
          alt={prod.name}
          className="w-36 h-36 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div>
        <h3 className="text-xs font-medium text-slate-700 group-hover:text-[#f05a5b] line-clamp-1">
          {prod.name}
        </h3>
        <div className="mt-1 flex items-center justify-between">
          <div className="text-[11px]">
            {prod.oldPrice && (
              <span className="text-slate-400 line-through mr-1.5">
                {prod.oldPrice}
              </span>
            )}
            <span className="font-bold text-slate-800">{prod.price}</span>
          </div>

          {prod.swatches && (
            <div className="flex items-center gap-1">
              {prod.swatches.map((hex, idx) => (
                <span
                  key={idx}
                  style={{ backgroundColor: hex }}
                  className="w-2.5 h-2.5 rounded-full border border-slate-300"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#f05a5b] selection:text-white">
      {/* 1. TOP UTILITY BAR & MINIMALIST HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="border-b border-slate-100 text-[10px] text-slate-500">
          <div className="max-w-5xl mx-auto px-4 h-7 flex items-center justify-between">
            <span>Đăng ký tài khoản nhận ngay ưu đãi 20% đơn hàng đầu tiên</span>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1 hover:text-[#f05a5b]"
            >
              <User className="w-3 h-3" />
              <span>Đăng nhập / Đăng ký</span>
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <a
            href="#trang-chu"
            className="text-xl font-black tracking-tight text-slate-900 lowercase"
          >
            {data.business.name.replace(".", "")}
            <span className="text-[#f05a5b]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
            <a
              href="#trang-chu"
              className="text-slate-900 font-semibold border-b border-slate-900 pb-0.5"
            >
              Trang chủ
            </a>
            <a href="#nu-gioi" className="hover:text-[#f05a5b]">
              Giới thiệu
            </a>
            <a href="#moi-nhat" className="hover:text-[#f05a5b]">
              Sản phẩm
            </a>
            <a href="#xu-huong" className="hover:text-[#f05a5b]">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-[#f05a5b]">
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-3.5 text-slate-600">
            <button type="button" aria-label="Danh mục" className="hover:text-[#f05a5b]">
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              aria-label="Giỏ hàng"
              className="relative hover:text-[#f05a5b]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#f05a5b] text-white text-[8px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button type="button" aria-label="Yêu thích" className="hover:text-[#f05a5b]">
              <Heart className="w-4 h-4" />
            </button>
            <button type="button" aria-label="So sánh" className="hover:text-[#f05a5b]">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button type="button" aria-label="Tìm kiếm" className="hover:text-[#f05a5b]">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. EDITORIAL HERO BANNER */}
      <section
        id="trang-chu"
        className="relative w-full h-[440px] md:h-[520px] bg-[#f4f4f4] overflow-hidden flex items-center"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-y-0 right-0 w-full md:w-3/5 h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f4f4] via-[#f4f4f4]/90 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
          <div className="max-w-md space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.35em] text-slate-500 uppercase">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-5xl font-normal text-slate-900 leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xs text-slate-500">{data.hero.subtitle}</p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#moi-nhat"}
                className="inline-block px-7 py-2.5 bg-[#f05a5b] hover:bg-[#d94849] text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                {data.hero.ctaText || "MUA NGAY"}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slider Dots */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-10">
          <span className="w-4 h-1 rounded-full bg-[#f05a5b]" />
          <span className="w-1.5 h-1 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1 rounded-full bg-slate-300" />
        </div>
      </section>

      {/* 3. NỮ GIỚI (LEFT PORTRAIT 5 COLS + RIGHT 3x2 GRID 7 COLS) */}
      <section id="nu-gioi" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Portrait */}
          <div className="lg:col-span-5 relative overflow-hidden bg-[#f8e6e6] min-h-[420px]">
            <img
              src={data.womenPortrait}
              alt="Phong cách Nữ giới"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right 3x2 Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                NỮ GIỚI
              </h2>
              <div className="flex items-center gap-2 text-slate-400">
                <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-slate-800" />
                <ChevronRight className="w-4 h-4 cursor-pointer hover:text-slate-800" />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.womenProducts.map(renderProductCard)}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 2-COLUMN PASTEL PROMO BANNERS */}
      <section className="py-4 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.midBanners.map((b, idx) => (
            <div
              key={b.id}
              className={`${b.bgClass} p-7 h-40 flex items-center justify-between overflow-hidden`}
            >
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-800">{b.title}</h3>
                <p
                  className={
                    idx === 1
                      ? "text-2xl font-light text-slate-800"
                      : "text-xs text-slate-400"
                  }
                >
                  {b.subtitle}
                </p>
              </div>
              <img
                src={b.image}
                alt={b.title}
                className="w-28 h-28 object-cover rounded-lg shadow-xs"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. NAM GIỚI (LEFT 3x2 GRID 7 COLS + RIGHT PORTRAIT 5 COLS) */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 3x2 Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-400">
                <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-slate-800" />
                <ChevronRight className="w-4 h-4 cursor-pointer hover:text-slate-800" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                NAM GIỚI
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.menProducts.map(renderProductCard)}
            </div>
          </div>

          {/* Right Portrait */}
          <div className="lg:col-span-5 relative overflow-hidden bg-[#eef3f4] min-h-[420px]">
            <img
              src={data.menPortrait}
              alt="Phong cách Nam giới"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH CORAL ANNOUNCEMENT STRIP (#f05a5b) */}
      <section className="bg-[#f05a5b] text-white py-3.5 text-center px-4">
        <p className="text-[11px] font-bold uppercase tracking-wider">
          GIẢM GIÁ 20 % CHO ĐƠN HÀNG ĐẦU TIÊN KHI TẠO TÀI KHOẢN TẠI{" "}
          <span className="underline">{data.business.name.toUpperCase()}</span>
        </p>
      </section>

      {/* 7. 3-COLUMN MINI PRODUCT LISTS (PHỔ BIẾN | BÁN CHẠY | KHUYẾN MÃI) */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Phổ biến", items: data.miniLists.popular },
            { title: "Bán chạy", items: data.miniLists.bestseller },
            { title: "Khuyến mãi", items: data.miniLists.promo }
          ].map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-xs font-bold text-slate-800 pb-2 border-b border-slate-100">
                {col.title}
              </h3>
              <div className="space-y-3.5">
                {col.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className="flex items-center gap-3.5 cursor-pointer group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-16 object-cover bg-[#f5f5f5] p-1 shrink-0"
                    />
                    <div className="space-y-1">
                      <h4 className="text-xs font-medium text-slate-700 group-hover:text-[#f05a5b]">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <div className="text-[11px]">
                        {item.oldPrice && (
                          <span className="text-slate-400 line-through mr-1.5">
                            {item.oldPrice}
                          </span>
                        )}
                        <span className="font-bold text-slate-800">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. MỚI NHẤT (5x2 PRODUCT GRID) */}
      <section id="moi-nhat" className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-sm font-bold text-slate-800 mb-6">Mới nhất</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.newestProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* 9. DEAL OF THE DAY SPOTLIGHT BANNER */}
      <section className="py-14 bg-[#f3f1ee] border-y border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-6 sm:p-8 shadow-md border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Main Image */}
            <div className="md:col-span-5 bg-[#f7f7f7] p-4 flex items-center justify-center h-64">
              <img
                src={selectedDealThumb}
                alt={data.dealSpotlight.title}
                className="w-48 h-48 object-cover"
              />
            </div>

            {/* Center Info & Countdown */}
            <div className="md:col-span-5 space-y-3">
              <h3 className="text-base font-bold text-slate-800">
                {data.dealSpotlight.title}
              </h3>
              <div className="text-sm">
                <span className="text-slate-400 line-through mr-2">
                  {data.dealSpotlight.oldPrice}
                </span>
                <span className="font-bold text-slate-900">
                  {data.dealSpotlight.price}
                </span>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                  <span>
                    Đã bán:{" "}
                    <strong className="text-[#f05a5b]">
                      {data.dealSpotlight.sold}
                    </strong>
                  </span>
                  <span>
                    Có sẵn: <strong>{data.dealSpotlight.available}</strong>
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-2/5 h-full bg-[#f05a5b]" />
                </div>
              </div>

              {/* 4 Countdown Boxes */}
              <div className="flex items-center gap-2 pt-1">
                {[
                  { val: "265", label: "NGÀY" },
                  { val: "13", label: "GIỜ" },
                  { val: "05", label: "PHÚT" },
                  { val: "35", label: "GIÂY" }
                ].map((box) => (
                  <div
                    key={box.label}
                    className="w-12 py-1.5 border border-slate-200 text-center"
                  >
                    <div className="text-xs font-extrabold text-slate-800">
                      {box.val}
                    </div>
                    <div className="text-[8px] text-slate-400">{box.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setCartCount((c) => c + 1)}
                  className="px-6 py-2.5 bg-[#f05a5b] hover:bg-[#d94849] text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors"
                >
                  THÊM VÀO GIỎ HÀNG
                </button>
              </div>

              <div className="flex items-center gap-4 text-[10px] text-slate-400 pt-1">
                <span className="cursor-pointer hover:text-slate-700">&lt; Trước</span>
                <span>|</span>
                <span className="cursor-pointer hover:text-slate-700">
                  Tiếp theo &gt;
                </span>
              </div>
            </div>

            {/* Right Thumbnail Switchers */}
            <div className="md:col-span-2 flex md:flex-col gap-3 justify-center">
              {data.dealSpotlight.thumbs.map((thumb, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedDealThumb(thumb)}
                  className={`p-2 bg-[#f7f7f7] border transition-colors ${
                    selectedDealThumb === thumb
                      ? "border-[#f05a5b]"
                      : "border-slate-200"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Ảnh ${idx + 1}`}
                    className="w-16 h-16 object-cover mx-auto"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. XU HƯỚNG THỜI TRANG & BRAND LOGOS */}
      <section id="xu-huong" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-base font-bold text-slate-800 text-center mb-8">
            Xu hướng thời trang
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="h-56 overflow-hidden bg-[#f8e6e6] mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {post.category}
                </div>
                <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#f05a5b] mb-1.5">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-[10px] text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span>• Đọc thêm</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#lien-he"
              className="inline-block px-6 py-2 bg-[#f05a5b] hover:bg-[#d94849] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors"
            >
              TẤT CẢ BÀI VIẾT
            </a>
          </div>

          {/* 6 Brand Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 pt-8 border-t border-slate-100 text-center">
            {data.brandLogos.map((logo, idx) => (
              <div
                key={idx}
                className="py-2 text-xs font-serif font-extrabold tracking-widest text-slate-500 uppercase"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer id="lien-he" className="bg-[#f9f9f9] border-t border-slate-200/70 pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4">
          {/* Top Newsletter Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-8 border-b border-slate-200">
            <div className="lg:col-span-3">
              <span className="text-xl font-black tracking-tight text-slate-900 lowercase">
                {data.business.name.replace(".", "")}
                <span className="text-[#f05a5b]">.</span>
              </span>
            </div>

            <div className="lg:col-span-3 flex items-center gap-4 text-slate-600">
              {[Facebook, Instagram, Share2].map((Icon, i) => (
                <a key={i} href="#lien-he" className="hover:text-[#f05a5b]">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="lg:col-span-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập địa chỉ Email..."
                  className="flex-1 bg-white border border-slate-200 px-4 py-2 text-xs focus:outline-none focus:border-[#f05a5b]"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#f05a5b] hover:bg-[#d94849] text-white text-xs font-bold uppercase transition-colors"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#f05a5b] mt-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Đã đăng ký nhận xu hướng tạo mẫu mới nhất!</span>
                </div>
              )}
            </div>
          </div>

          {/* 4 Info Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 py-8 text-xs text-slate-600">
            <div className="lg:col-span-4 space-y-2">
              <p>
                <strong>Địa chỉ:</strong> {data.business.address}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {data.business.phone[0]}
              </p>
              <p>
                <strong>Email:</strong> {data.business.email[0]}
              </p>
            </div>

            <div className="lg:col-span-3 space-y-2">
              <div>Thông tin giao hàng</div>
              <div>Chính sách bảo mật</div>
              <div>Chính sách giao hàng</div>
              <div>Thanh toán an toàn</div>
              <div>Chính sách hoàn trả</div>
            </div>

            <div className="lg:col-span-2 space-y-2">
              <div className="font-bold text-slate-900">Trang chủ</div>
              <div>Giới thiệu</div>
              <div>Sản phẩm</div>
              <div>Tin tức</div>
              <div>Liên hệ</div>
            </div>

            <div className="lg:col-span-3 space-y-2">
              <div className="flex justify-between">
                <span>Thứ 2 - Thứ 6</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Thứ 7</span>
                <span>09:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Chủ nhật</span>
                <span>09:00 - 12:00</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
            <span>
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-slate-700">{data.business.name}</strong>
            </span>
            <div className="flex gap-4">
              <span>Điều khoản &amp; Điều kiện</span>
              <span>Chính sách bảo mật</span>
              <span>Chính sách giao hàng</span>
              <span>Giới thiệu</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING SOCIAL PROOF PURCHASE TOAST (BOTTOM-LEFT) */}
      {showToast && (
        <div className="fixed bottom-4 left-4 z-40 bg-white border border-slate-200 rounded-md shadow-xl p-3 flex items-center gap-3 max-w-xs">
          <img
            src={data.menProducts[1].image}
            alt="Sản phẩm vừa mua"
            className="w-11 h-11 object-cover rounded bg-slate-100 shrink-0"
          />
          <div className="text-[10px] leading-tight pr-4">
            <div className="text-slate-500">Nguyễn Sâm đã mua</div>
            <div className="font-bold text-slate-800">
              {data.menProducts[1].name}
            </div>
            <div className="text-slate-400 mt-0.5 flex items-center gap-1">
              <span>5 phút trước</span>
              <span className="text-emerald-600 font-semibold">• ✓ Đã xác minh</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            aria-label="Đóng"
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-700"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* PRODUCT QUICK VIEW MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white p-6 relative shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-3">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-44 h-44 object-cover mx-auto rounded"
              />
              <h4 className="text-base font-bold text-slate-900">
                {selectedProduct.name}
              </h4>
              <div className="text-sm font-bold text-[#f05a5b]">
                {selectedProduct.price}
              </div>
              <button
                type="button"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  setSelectedProduct(null);
                }}
                className="w-full py-2.5 bg-[#f05a5b] hover:bg-[#d94849] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
