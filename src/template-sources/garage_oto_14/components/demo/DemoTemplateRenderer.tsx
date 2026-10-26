"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Truck,
  Gift,
  PiggyBank,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto14DefaultData,
  type GarageOto14Data,
  type GarageOto14Product,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: GarageOto14Data = adaptClonedTemplateData(
    garageOto14DefaultData,
    incomingData
  );

  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<GarageOto14Product | null>(
    null
  );
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@smartcar.vn";

  const renderSectionTitle = (title: string) => (
    <div className="text-center mb-10">
      <h2 className="text-lg sm:text-xl font-serif font-bold uppercase tracking-wider text-[#222222]">
        {title}
      </h2>
      <div className="w-10 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
    </div>
  );

  const renderProductCard = (product: GarageOto14Product) => (
    <div
      key={product.id}
      onClick={() => setSelectedItem(product)}
      className="group cursor-pointer flex flex-col items-center text-center"
    >
      <div className="relative w-full aspect-[4/4.5] bg-white overflow-hidden mb-3 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
        />
        {product.discount && (
          <span className="absolute top-2 left-2 w-9 h-9 rounded-full bg-[#C8A951] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
            {product.discount}
          </span>
        )}
      </div>

      <span className="text-[9px] uppercase tracking-widest text-[#999999]">
        {product.category}
      </span>
      <h3 className="mt-1 text-[11px] font-medium uppercase text-[#444444] group-hover:text-[#C8A951] transition-colors line-clamp-2 leading-snug px-2">
        {product.title}
      </h3>
      <div className="mt-1.5 flex items-center justify-center gap-2 text-[11px]">
        {product.oldPrice && (
          <span className="text-[#999999] line-through">
            {product.oldPrice}
          </span>
        )}
        <span className="font-extrabold text-[#111111]">{product.price}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#C8A951] selection:text-white">
      {/* PITCH BLACK HEADER (Matches OTO014-garage_oto_14.jpg) */}
      <header className="bg-[#0A0A0A] text-white sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-8 w-auto object-contain"
              />
            ) : (
              <span className="text-2xl font-black uppercase tracking-widest text-white">
                {data.business.name}
              </span>
            )}
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-white/90">
            <a href="#" className="hover:text-[#C8A951] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#bo-suu-tap-1"
              className="hover:text-[#C8A951] transition-colors"
            >
              MÀN HÌNH & HUD
            </a>
            <a
              href="#bo-suu-tap-2"
              className="hover:text-[#C8A951] transition-colors"
            >
              CAMERA HÀNH TRÌNH
            </a>
            <a
              href="#combo-doi"
              className="hover:text-[#C8A951] transition-colors"
            >
              COMBO ĐỘ XE
            </a>
            <a
              href="#phu-kien"
              className="hover:text-[#C8A951] transition-colors"
            >
              PHỤ KIỆN
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#C8A951] transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#C8A951] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4 text-white/90">
            <a
              href="#bo-suu-tap-1"
              aria-label="Tìm kiếm"
              className="hover:text-[#C8A951]"
            >
              <Search className="w-4 h-4" />
            </a>
            <a
              href="#lien-he"
              aria-label="Tài khoản"
              className="hover:text-[#C8A951]"
            >
              <User className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="relative hover:text-[#C8A951]"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#C8A951] text-black text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO BANNER (Dark Luxury Chrono/Cockpit Dial Close-up) */}
      <section className="relative min-h-[420px] lg:min-h-[480px] bg-[#0B0B0B] text-white flex items-center overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/55 to-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 py-16 flex justify-end">
          <div className="max-w-lg text-right">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight uppercase tracking-[0.18em] text-white/90 leading-snug whitespace-pre-line">
              {data.hero.title}
            </h1>
            <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/60">
              {data.hero.subtitle}
            </p>
            <div className="mt-6">
              <a
                href={data.hero.ctaLink || "#bo-suu-tap-1"}
                className="inline-block text-xs uppercase tracking-[0.25em] text-white/80 hover:text-[#C8A951] border-b border-white/40 hover:border-[#C8A951] pb-1 transition-colors"
              >
                {data.hero.ctaText || "KHÁM PHÁ"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRIMARY 4x2 COLLECTION */}
      <section id="bo-suu-tap-1" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderSectionTitle(data.primaryCollectionTitle)}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {data.primaryProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 3: DARK MECHANICAL GEAR STRIP WITH 3 GUARANTEES */}
      <section className="py-9 bg-[#0E0E0E] text-white border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <Truck className="w-8 h-8 text-white shrink-0 stroke-[1.5]" />
            <div>
              <h3 className="text-sm font-bold">Miễn Phí Giao Hàng & Lắp Đặt</h3>
              <p className="text-xs text-white/60 mt-0.5">
                Lắp đặt cắm giắc zin tận nơi trên toàn quốc
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Gift className="w-8 h-8 text-white shrink-0 stroke-[1.5]" />
            <div>
              <h3 className="text-sm font-bold">Quà Tặng Đặc Biệt</h3>
              <p className="text-xs text-white/60 mt-0.5">
                Tặng bản đồ dẫn đường cảnh báo tốc độ trọn đời
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <PiggyBank className="w-8 h-8 text-white shrink-0 stroke-[1.5]" />
            <div>
              <h3 className="text-sm font-bold">
                Tiết Kiệm Khi Mua Ở {data.business.name}
              </h3>
              <p className="text-xs text-white/60 mt-0.5">
                Ưu đãi thêm 10% khi nâng cấp combo màn hình & camera
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SECONDARY 4x2 COLLECTION */}
      <section id="bo-suu-tap-2" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderSectionTitle(data.secondaryCollectionTitle)}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {data.secondaryProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 5: 50/50 DARK SPLIT PROMO BANNER */}
      <section className="bg-[#0B0B0B] text-white grid grid-cols-1 md:grid-cols-2">
        {/* Left Banner */}
        <div className="relative h-72 sm:h-80 overflow-hidden flex items-center justify-end p-8 sm:p-12">
          <img
            src={data.splitBanners.leftImage}
            alt="Đẳng cấp khoang lái"
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black/90" />
          <div className="relative z-10 text-right max-w-xs">
            <h3 className="text-2xl sm:text-3xl font-light text-[#D4AF37] leading-tight whitespace-pre-line">
              {data.splitBanners.leftTitle}
            </h3>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white">
              {data.splitBanners.leftSubtitle}
            </p>
            <a
              href="#combo-doi"
              className="mt-5 inline-block px-5 py-1.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[10px] font-bold uppercase tracking-widest transition-colors"
            >
              CHI TIẾT
            </a>
          </div>
        </div>

        {/* Right Banner */}
        <div className="relative h-72 sm:h-80 overflow-hidden flex items-center justify-end p-8 sm:p-12 border-t md:border-t-0 md:border-l border-white/10">
          <img
            src={data.splitBanners.rightImage}
            alt="Analog & Digital"
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black/90" />
          <div className="relative z-10 text-right max-w-xs">
            <h3 className="text-2xl sm:text-3xl font-light text-[#D4AF37] leading-tight whitespace-pre-line">
              {data.splitBanners.rightTitle}
            </h3>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white">
              {data.splitBanners.rightSubtitle}
            </p>
            <a
              href="#phu-kien"
              className="mt-5 inline-block px-5 py-1.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[10px] font-bold uppercase tracking-widest transition-colors"
            >
              CHI TIẾT
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMBO NÂNG CẤP ĐÔI */}
      <section id="combo-doi" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderSectionTitle(data.comboCollectionTitle)}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.comboProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 7: PHỤ KIỆN */}
      <section id="phu-kien" className="py-16 bg-white border-t border-[#f3f3f3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderSectionTitle("PHỤ KIỆN")}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.accessoryProducts.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* SECTION 8: THÔNG TIN HỮU ÍCH */}
      <section id="tin-tuc" className="py-16 bg-white border-t border-[#f3f3f3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderSectionTitle("THÔNG TIN HỮU ÍCH")}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="h-44 overflow-hidden bg-[#111111] mb-3.5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-extrabold uppercase text-[#222222] group-hover:text-[#C8A951] transition-colors line-clamp-1">
                  {post.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#777777] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (Pitch Black #0A0A0A with 3 Divided Columns matching OTO014-garage_oto_14.jpg) */}
      <footer id="lien-he" className="bg-[#0A0A0A] text-white/75 pt-14 pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: ĐIỀU HƯỚNG */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                ĐIỀU HƯỚNG
              </h4>
              <ul className="space-y-2 text-xs text-white/65">
                <li>
                  <a href="#" className="text-[#C8A951]">
                    ▸ Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#bo-suu-tap-1" className="hover:text-white">
                    ▸ Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#bo-suu-tap-2" className="hover:text-white">
                    ▸ Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-white">
                    ▸ Điểm tin hữu ích
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    ▸ Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: CENTER LOGO & PILL NEWSLETTER */}
            <div className="md:col-span-6 md:border-x md:border-white/10 md:px-8 text-center flex flex-col items-center justify-center">
              <span className="text-2xl font-black uppercase tracking-widest text-white">
                {data.business.name}
              </span>
              <p className="mt-3 text-xs text-white/60 leading-relaxed max-w-sm">
                {data.business.aboutText?.[0]}
              </p>

              {newsletterDone ? (
                <div className="mt-5 text-xs text-[#C8A951] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã đăng ký nhận ưu đãi!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="mt-5 flex items-center bg-white rounded-full overflow-hidden px-4 py-2 w-full max-w-xs"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    className="w-full text-xs text-[#222222] focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Đăng ký"
                    className="text-[#222222] hover:text-[#C8A951]"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Col 3: THÔNG TIN LIÊN HỆ */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                THÔNG TIN LIÊN HỆ
              </h4>
              <div className="space-y-2 text-xs text-white/65 leading-relaxed">
                <p>{data.business.address}</p>
                <p>{primaryPhone}</p>
                <p>{primaryEmail}</p>
              </div>
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-white/50">
            © All rights reserved. Thiết kế website{" "}
            <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* QUICK VIEW MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-52 object-cover mb-4"
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A951]">
              {selectedItem.category}
            </span>
            <h3 className="mt-1 text-sm font-extrabold text-[#111111]">
              {selectedItem.title}
            </h3>
            <p className="mt-2 text-base font-extrabold text-[#111111]">
              {selectedItem.price}
            </p>
            <button
              type="button"
              onClick={() => {
                setCartCount((c) => c + 1);
                setSelectedItem(null);
              }}
              className="mt-5 w-full py-2.5 bg-[#0A0A0A] hover:bg-[#C8A951] text-white hover:text-black text-xs font-bold uppercase tracking-widest transition-colors"
            >
              ĐẶT LẮP ĐẶT NGAY
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
