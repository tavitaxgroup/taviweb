"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  studioChupAnh8DefaultData,
  type StudioChupAnh8Data,
  type DazzleJewelryItem
} from "../../data/mockData";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Crown,
  Star,
  Truck,
  CreditCard,
  Headphones,
  Send
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: StudioChupAnh8Data = adaptClonedTemplateData(
    studioChupAnh8DefaultData,
    incomingData || customData
  );

  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedJewelry, setSelectedJewelry] =
    useState<DazzleJewelryItem | null>(null);
  const [newsletterSent, setNewsletterSent] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const renderOrnament = () => (
    <div className="flex items-center justify-center gap-2 mt-2 mb-8 text-[#c69253]">
      <span className="w-10 h-[1px] bg-[#c69253]/40" />
      <span className="text-xs">❖</span>
      <span className="w-10 h-[1px] bg-[#c69253]/40" />
    </div>
  );

  const renderJewelryCard = (item: DazzleJewelryItem) => (
    <div
      key={item.id}
      onClick={() => {
        setCartCount((c) => c + 1);
        setSelectedJewelry(item);
      }}
      className="group cursor-pointer bg-white flex flex-col justify-between transition-all"
    >
      <div>
        <div className="relative aspect-square bg-[#faf8f5] overflow-hidden mb-3">
          {/* Top-Left Badges */}
          <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
            {item.isSale && (
              <span className="px-2 py-0.5 bg-[#e65540] text-white text-[9px] font-bold uppercase tracking-wider">
                SALE
              </span>
            )}
            {item.isPopular && (
              <span className="px-2 py-0.5 bg-[#059669] text-white text-[9px] font-bold uppercase tracking-wider">
                PHỔ BIẾN
              </span>
            )}
          </div>

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Individual Countdown Overlay */}
          {item.hasTimer && (
            <div className="absolute bottom-2.5 inset-x-3 bg-white/95 border border-stone-200 py-1.5 px-2 grid grid-cols-4 text-center shadow-sm">
              {[
                { v: "242", l: "NGÀY" },
                { v: "12", l: "GIỜ" },
                { v: "53", l: "PHÚT" },
                { v: "40", l: "GIÂY" }
              ].map((t) => (
                <div key={t.l} className="leading-tight">
                  <div className="text-[11px] font-extrabold text-slate-800">
                    {t.v}
                  </div>
                  <div className="text-[7px] uppercase text-slate-400">
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-1 text-left">
          <div className="flex items-center gap-2 text-xs">
            {item.oldPrice && (
              <span className="text-slate-400 line-through text-[11px]">
                {item.oldPrice}
              </span>
            )}
            <span className="font-bold text-[#c69253]">{item.price}</span>
          </div>
          <div className="text-[10px] text-slate-400">{item.brand}</div>
          <h3 className="text-xs font-semibold text-slate-800 group-hover:text-[#c69253] transition-colors line-clamp-1">
            {item.name}
          </h3>
          {item.rating && (
            <div className="flex items-center gap-0.5 text-amber-400 pt-0.5">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="text-[10px] text-slate-400 ml-1">2</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#c69253] selection:text-white">
      {/* 1. TOP UTILITY STRIP */}
      <div className="bg-[#f6f4f0] text-slate-500 text-[11px] border-b border-stone-200/60">
        <div className="max-w-6xl mx-auto px-4 h-8 flex items-center justify-between">
          <span className="truncate">
            Giao hàng miễn phí cho tất cả đơn hàng trên 10,000,000₫
          </span>
          <span className="hidden sm:inline">{primaryEmail}</span>
        </div>
      </div>

      {/* 2. MAIN HEADER (CENTERED CROWN LOGO) */}
      <header className="bg-white border-b border-stone-100 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-20 grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
          {/* Left Nav */}
          <nav className="hidden lg:flex lg:col-span-5 items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#" className="text-[#c69253] font-bold">
              Trang chủ
            </a>
            <a
              href="#thu-cong"
              className="hover:text-[#c69253] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#danh-muc"
              className="hover:text-[#c69253] transition-colors"
            >
              Sản phẩm
            </a>
            <a
              href="#noi-bat"
              className="hover:text-[#c69253] transition-colors"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#c69253] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          {/* Center Crown Logo */}
          <div className="lg:col-span-2 flex justify-start lg:justify-center">
            <a href="#" className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5">
                <Crown className="w-5 h-5 text-[#c69253]" />
                <span className="text-lg font-serif font-bold tracking-widest uppercase text-slate-900">
                  {data.business.name.split(" ")[0] || "MONA"}
                </span>
              </div>
              <span className="text-[8px] tracking-[0.22em] uppercase text-[#c69253]">
                {data.business.name}
              </span>
            </a>
          </div>

          {/* Right Hotline + Icons */}
          <div className="lg:col-span-5 flex items-center justify-end gap-4 text-slate-700">
            <div className="hidden sm:block text-right leading-tight pr-2 border-r border-stone-200">
              <div className="text-[10px] text-slate-400">Gọi hỗ trợ</div>
              <a
                href={`tel:${primaryPhone}`}
                className="text-xs font-bold text-slate-800 hover:text-[#c69253]"
              >
                {primaryPhone}
              </a>
            </div>

            <button
              type="button"
              aria-label="Tìm kiếm"
              className="hover:text-[#c69253]"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Tài khoản"
              className="hidden sm:inline-block hover:text-[#c69253]"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedJewelry(data.limitedSaleProducts[0])}
              className="relative hover:text-[#c69253]"
            >
              <Heart className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#c69253] text-white text-[9px] font-bold flex items-center justify-center">
                12
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedJewelry(data.limitedSaleProducts[0])}
              className="relative hover:text-[#c69253]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#c69253] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO BANNER */}
      <section className="relative bg-[#d9d6d1] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[460px] items-center">
          <div className="lg:col-span-5 px-6 sm:px-12 lg:pl-20 py-14 space-y-5 z-10">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-[1.18]">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              {data.hero.subtitle}
            </p>
            <div className="pt-1">
              <a
                href={data.hero.ctaLink || "#giam-gia"}
                className="inline-block px-6 py-2.5 bg-[#c69253] hover:bg-[#b07d3f] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                {data.hero.ctaText || "TÌM HIỂU THÊM"}
              </a>
            </div>
            <div className="pt-8 text-lg font-serif text-slate-700">
              <strong>01</strong>{" "}
              <span className="text-xs text-slate-400">/03</span>
            </div>
          </div>

          <div className="lg:col-span-7 h-full min-h-[340px] lg:min-h-[460px]">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <button
          type="button"
          aria-label="Trước"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/15 hover:bg-[#c69253] text-white items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Tiếp"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/15 hover:bg-[#c69253] text-white items-center justify-center transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </section>

      {/* 4. 3-COLUMN PROMO BANNERS */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.threePromoBanners.map((b) => (
            <div
              key={b.id}
              className="bg-[#f9f6f2] p-6 flex items-center justify-between gap-3 group"
            >
              <div className="space-y-1.5 max-w-[58%]">
                <div className="text-[9px] font-bold uppercase tracking-widest text-[#c69253]">
                  {b.eyebrow}
                </div>
                <h3 className="text-sm sm:text-base font-serif font-bold text-slate-900 leading-snug">
                  {b.title}
                </h3>
                <div className="pt-2">
                  <a
                    href="#giam-gia"
                    className="text-[10px] font-bold uppercase border-b border-slate-400 pb-0.5 hover:text-[#c69253]"
                  >
                    {b.ctaText}
                  </a>
                </div>
              </div>
              <img
                src={b.image}
                alt={b.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded group-hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. HANDCRAFTED STORY SECTION */}
      <section id="thu-cong" className="py-12 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-snug">
              {data.handcraftedStory.title}
            </h2>

            {data.handcraftedStory.blocks.map((bl) => (
              <div key={bl.heading} className="space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {bl.heading}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {bl.text}
                </p>
              </div>
            ))}

            <div className="pt-2">
              <a
                href="#danh-muc"
                className="inline-block px-6 py-2.5 bg-[#c69253] hover:bg-[#b07d3f] text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
              >
                TÌM HIỂU THÊM
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3.4] overflow-hidden rounded-lg bg-[#faf8f5]">
              <img
                src={data.handcraftedStory.image}
                alt={data.handcraftedStory.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIMITED DISCOUNT SECTION (`Giảm giá giới hạn`) */}
      <section id="giam-gia" className="py-14 max-w-5xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Giảm giá giới hạn
          </h2>
          {renderOrnament()}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.limitedSaleProducts.map((item) => renderJewelryCard(item))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#noi-bat"
            className="inline-block px-6 py-2 bg-[#f3e6d6] hover:bg-[#c69253] text-[#a67335] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
          >
            XEM TẤT CẢ
          </a>
        </div>
      </section>

      {/* 7. PRODUCT CATEGORIES SHOWCASE (`Danh mục sản phẩm` — 6 Staggered Portrait Columns) */}
      <section id="danh-muc" className="py-14 max-w-5xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Danh mục sản phẩm
          </h2>
          {renderOrnament()}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-start">
          {data.categoryColumns.map((col, idx) => (
            <div
              key={col.id}
              className={`text-center space-y-3 ${
                idx % 2 === 1 ? "lg:mt-5" : ""
              }`}
            >
              <div className="aspect-[3/4.2] overflow-hidden bg-stone-100">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xs font-serif font-bold text-slate-900">
                {col.title}
              </h3>
              <div className="w-5 h-[1px] bg-[#c69253] mx-auto" />
              <ul className="space-y-1 text-[11px] text-slate-400">
                {col.subItems.map((sub) => (
                  <li
                    key={sub}
                    className="hover:text-[#c69253] cursor-pointer transition-colors"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FEATURED JEWELRY SECTION (`Trang sức nổi bật`) */}
      <section id="noi-bat" className="py-14 max-w-5xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Trang sức nổi bật
          </h2>
          {renderOrnament()}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.featuredJewelry.map((item) => renderJewelryCard(item))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#lien-he"
            className="inline-block px-6 py-2 bg-[#f3e6d6] hover:bg-[#c69253] text-[#a67335] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
          >
            XEM TẤT CẢ
          </a>
        </div>
      </section>

      {/* 9. FULL-WIDTH PEARL & GOLD BANNER (`Thế giới trang sức đa dạng`) */}
      <section className="relative py-24 bg-[#ece7df] text-center overflow-hidden">
        <img
          src={data.worldBanner.image}
          alt={data.worldBanner.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-xl mx-auto px-4 space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            {data.worldBanner.title}
          </h2>
          <p className="text-xs text-slate-600">{data.worldBanner.subtitle}</p>
          <div className="pt-2">
            <a
              href="#lien-he"
              className="inline-block px-6 py-2.5 bg-[#c69253] hover:bg-[#b07d3f] text-white text-[11px] font-bold uppercase tracking-wider"
            >
              {data.worldBanner.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* 10. 6 DIAMOND RING CUTS SHOWCASE STRIP */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {data.diamondRingCuts.map((cut) => (
            <div
              key={cut.id}
              onClick={() => setSelectedJewelry(data.limitedSaleProducts[0])}
              className="group cursor-pointer text-center space-y-2"
            >
              <div className="aspect-square overflow-hidden rounded-full bg-[#faf8f5] p-3 border border-stone-100">
                <img
                  src={cut.image}
                  alt={cut.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="text-[11px] font-serif font-semibold text-slate-600 group-hover:text-[#c69253]">
                {cut.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. CREAM NEWSLETTER & FOOTER */}
      <footer id="lien-he" className="bg-[#f5efe9] text-slate-700 pt-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Top 3 Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center pb-10">
            <div className="space-y-1">
              <Truck className="w-6 h-6 text-[#c69253] mx-auto" />
              <div className="text-xs font-bold text-slate-900">
                Giao hàng uy tín
              </div>
              <div className="text-[11px] text-slate-500">
                1–2 ngày sau khi đặt hàng
              </div>
            </div>
            <div className="space-y-1">
              <CreditCard className="w-6 h-6 text-[#c69253] mx-auto" />
              <div className="text-xs font-bold text-slate-900">
                Hoàn trả trong vòng 14 ngày
              </div>
              <div className="text-[11px] text-slate-500">
                Đối với tất cả đơn hàng
              </div>
            </div>
            <div className="space-y-1">
              <Headphones className="w-6 h-6 text-[#c69253] mx-auto" />
              <div className="text-xs font-bold text-slate-900">
                Hỗ trợ 24/7
              </div>
              <div className="text-[11px] text-slate-500">
                Qua số điện thoại hoặc email
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center pb-12 border-b border-stone-200">
            <div className="text-xs font-semibold text-slate-700 mb-4">
              Đăng ký ngay để nhận các tin mới nhất từ trang web !
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSent(true);
              }}
              className="max-w-md mx-auto flex border border-stone-300 bg-white"
            >
              <input
                type="email"
                required
                placeholder="Nhập email..."
                className="flex-1 px-3.5 py-2.5 text-xs focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#c69253] hover:bg-[#b07d3f] text-white text-[11px] font-bold uppercase flex items-center gap-1.5"
              >
                <span>ĐĂNG KÝ</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
            {newsletterSent && (
              <div className="text-xs text-[#c69253] font-bold mt-2">
                ✓ Cảm ơn bạn đã đăng ký nhận ưu đãi!
              </div>
            )}
          </div>

          {/* 4 Columns */}
          <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-xs">
            <div className="space-y-2.5">
              <h4 className="font-serif font-bold text-slate-900">Trang sức</h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Nhẫn cầu hôn</li>
                <li>Bông tai kim cương</li>
                <li>Kim cương tự nhiên</li>
                <li>Dây chuyền vàng 18K</li>
                <li>Mặt dây & Charm</li>
                <li>Phụ kiện cưới</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-serif font-bold text-slate-900">
                Giới thiệu
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Khởi nguồn thương hiệu</li>
                <li>Giá trị & Cam kết</li>
                <li>Góc báo chí</li>
                <li>Chính sách bảo mật</li>
                <li>Thông tin pháp lý</li>
                <li>Điều khoản dịch vụ</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-serif font-bold text-slate-900">Sản phẩm</h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Cửa hàng Quận 1</li>
                <li>Cửa hàng Tân Bình</li>
                <li>Bộ sưu tập Lễ Cưới</li>
                <li>Xưởng chế tác kim hoàn</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-serif font-bold text-slate-900">Dịch vụ</h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Liên hệ tư vấn</li>
                <li>Thanh toán & Biểu giá</li>
                <li>Vận chuyển bảo đảm</li>
                <li>Đổi trả trong 14 ngày</li>
                <li>Bảo hành & Làm mới</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 py-4 text-center text-[11px] text-slate-500">
          © Thiết kế và lập trình bởi{" "}
          <strong className="text-slate-800">{data.business.name}</strong> |{" "}
          <strong className="text-slate-800">{primaryPhone}</strong> |{" "}
          {primaryEmail}
        </div>
      </footer>

      {/* MODAL */}
      {selectedJewelry && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 shadow-2xl border-t-4 border-[#c69253]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-serif font-bold text-slate-900">
                Đặt lịch Tư vấn Trang sức Cưới
              </h3>
              <button
                type="button"
                onClick={() => setSelectedJewelry(null)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#faf8f5] mb-4">
              <img
                src={selectedJewelry.image}
                alt={selectedJewelry.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <div className="text-xs font-bold text-slate-900">
                  {selectedJewelry.name}
                </div>
                <div className="text-xs font-bold text-[#c69253] mt-0.5">
                  {selectedJewelry.price}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Liên hệ hotline{" "}
              <strong className="text-[#c69253]">{primaryPhone}</strong> của{" "}
              <strong>{data.business.name}</strong> để đặt lịch thử nhẫn và chụp
              ảnh lookbook trang sức cưới.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedJewelry(null)}
                className="px-4 py-2 border border-stone-300 text-xs font-bold text-slate-600"
              >
                Đóng
              </button>
              <a
                href={`tel:${primaryPhone}`}
                className="px-5 py-2 bg-[#c69253] text-white text-xs font-bold"
              >
                Gọi ngay: {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
