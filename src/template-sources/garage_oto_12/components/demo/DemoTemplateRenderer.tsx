"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Search,
  ShoppingCart,
  Truck,
  RefreshCw,
  Headphones,
  Crown,
  MapPin,
  Send,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto12DefaultData,
  type GarageOto12Data,
  type GarageOto12Product,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: GarageOto12Data = adaptClonedTemplateData(
    garageOto12DefaultData,
    incomingData
  );

  const [activeTab, setActiveTab] = useState<"ban-chay" | "noi-bat" | "gia-tot">(
    "ban-chay"
  );
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] =
    useState<GarageOto12Product | null>(null);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "cskh@nonsonauto.vn";

  const mainTestimonial = data.testimonials?.[0];

  const tabProducts =
    activeTab === "ban-chay"
      ? data.products.slice(0, 5)
      : activeTab === "noi-bat"
      ? data.products.slice(2, 7)
      : data.products.slice(6, 11);

  const non34List = data.products.filter((p) => p.group === "non-34").slice(0, 4);
  const fullfaceList = data.products
    .filter((p) => p.group === "non-fullface")
    .slice(0, 4);
  const phuKienList = data.products
    .filter((p) => p.group === "phu-kien")
    .slice(0, 4);

  const renderPolicyIcon = (icon: string) => {
    switch (icon) {
      case "truck":
        return <Truck className="w-5 h-5 text-[#B88B28]" />;
      case "refresh":
        return <RefreshCw className="w-5 h-5 text-[#B88B28]" />;
      default:
        return <Headphones className="w-5 h-5 text-[#B88B28]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#B88B28] selection:text-white">
      {/* TOPBAR & HEADER (Matches OTO012-garage_oto_12.jpg) */}
      <header className="sticky top-0 z-40 bg-white shadow-xs">
        {/* Dark Topbar */}
        <div className="bg-[#1A1A1A] text-white/80 text-[11px]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-7 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${primaryEmail}`}
                className="flex items-center gap-1 hover:text-[#B88B28]"
              >
                <Mail className="w-3 h-3" />
                <span>{primaryEmail}</span>
              </a>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1 hover:text-[#B88B28]"
              >
                <Phone className="w-3 h-3" />
                <span>{primaryPhone}</span>
              </a>
            </div>
            <a href="#lien-he" className="hover:text-[#B88B28]">
              Đăng nhập
            </a>
          </div>
        </div>

        {/* White Main Navbar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <span className="text-2xl font-black italic tracking-tight text-[#B88B28]">
                {data.business.name}
              </span>
            )}
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#333333]">
            <a href="#" className="text-[#B88B28]">
              Trang chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#B88B28] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#B88B28] transition-colors"
            >
              Sản phẩm ⌄
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#B88B28] transition-colors"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#B88B28] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#san-pham"
              aria-label="Tìm kiếm"
              className="text-[#444444] hover:text-[#B88B28]"
            >
              <Search className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="relative w-7 h-7 rounded-full bg-[#B88B28] text-white flex items-center justify-center shadow-xs"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#1A1A1A] text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO BANNER (Silver Geometric Background + Helmet Collection Showcase) */}
      <section className="relative bg-gradient-to-br from-[#D6D6D6] via-[#E5E5E5] to-[#C8C8C8] pt-8 pb-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Royal Emblem & M-139 Typography */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 text-center lg:text-left">
            <div className="inline-flex flex-col items-center lg:items-start">
              <div className="w-16 h-16 rounded-full bg-[#B88B28]/15 border-2 border-[#B88B28] flex items-center justify-center text-[#785311]">
                <Crown className="w-9 h-9" />
              </div>
              <span className="mt-1 text-2xl font-serif font-extrabold text-[#5A3E0C]">
                Royal
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#555555] leading-tight whitespace-pre-line">
                {data.hero.title}
              </h1>
              <span className="block text-5xl sm:text-6xl font-black text-white drop-shadow-md tracking-tight mt-1">
                {data.hero.subtitle || "M-139"}
              </span>
              <p className="mt-2 text-xs text-[#555555]">
                {data.hero.description}
              </p>
            </div>
          </div>

          {/* Right Helmet Collection Showcase */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
              {data.products.slice(0, 6).map((helmet, idx) => (
                <div
                  key={helmet.id}
                  onClick={() => setSelectedProduct(helmet)}
                  className="bg-white/75 backdrop-blur-xs rounded-2xl p-3 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-center"
                >
                  <img
                    src={helmet.image}
                    alt={helmet.title}
                    className="w-full h-28 sm:h-32 object-cover rounded-xl mb-2"
                  />
                  <span className="block text-[11px] font-bold text-[#222222] line-clamp-1">
                    {helmet.title}
                  </span>
                  <span className="block text-[10px] font-bold text-[#B88B28]">
                    {idx === 0 ? "CAFE RACER EDITION" : helmet.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OVERLAPPING 3 POLICY CARDS */}
      <section id="gioi-thieu" className="relative z-20 -mt-12 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.policies.map((pol) => (
            <div
              key={pol.id}
              className="bg-white rounded-xl border border-[#ececec] shadow-md p-6 text-center flex flex-col items-center"
            >
              <div className="w-11 h-11 rounded-full border border-[#B88B28]/40 bg-[#FDF9F0] flex items-center justify-center mb-3">
                {renderPolicyIcon(pol.icon)}
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#222222]">
                {pol.title}
              </h3>
              <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                {pol.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ASYMMETRIC BENTO PROMO BANNERS */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Main Motor Gear Banner */}
          <div className="lg:col-span-8 relative rounded-xl overflow-hidden min-h-[290px] bg-[#dcdcdc] flex flex-col justify-between p-6 shadow-xs group">
            <img
              src={data.promoBanners.mainImage}
              alt={data.promoBanners.mainTitle}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40" />
            <div className="relative z-10 text-center">
              <h2 className="text-xl sm:text-2xl font-serif italic font-bold text-white drop-shadow">
                {data.promoBanners.mainTitle}
              </h2>
            </div>
            <div className="relative z-10 flex items-center justify-between text-white">
              <p className="text-xs text-white/90">
                {data.promoBanners.mainSubtitle}
              </p>
              <a
                href="#san-pham"
                className="px-4 py-1.5 bg-[#B88B28] text-white text-[11px] font-bold uppercase rounded-full"
              >
                Khám phá
              </a>
            </div>
          </div>

          {/* Right 2 Stacked Banners */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Top Right: ĐỔI CŨ LẤY MỚI */}
            <div className="relative rounded-xl overflow-hidden h-36 bg-[#222222] p-5 flex items-center justify-between text-white shadow-xs">
              <img
                src={data.promoBanners.topRightImage}
                alt={data.promoBanners.topRightTitle}
                className="absolute inset-0 w-full h-full object-cover opacity-45"
              />
              <div className="relative z-10">
                <span className="inline-block bg-[#E53935] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-xs">
                  ƯU ĐÃI SINH NHẬT
                </span>
                <h3 className="mt-1 text-lg font-black uppercase leading-tight">
                  {data.promoBanners.topRightTitle}
                </h3>
              </div>
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#FFC107] text-[#B71C1C] flex flex-col items-center justify-center font-black text-center shadow-md shrink-0">
                <span className="text-[8px] uppercase leading-none">GIẢM</span>
                <span className="text-lg leading-none">79%</span>
              </div>
            </div>

            {/* Bottom Right: NÓN BẢO HIỂM TAI NGHE BLUETOOTH */}
            <div className="relative rounded-xl overflow-hidden h-36 bg-[#EAEAEA] p-5 flex items-center justify-between shadow-xs border border-[#e0e0e0]">
              <img
                src={data.promoBanners.bottomRightImage}
                alt="Tai nghe Bluetooth"
                className="w-24 h-24 object-cover rounded-lg shrink-0"
              />
              <div className="pl-3 text-right">
                <h3 className="text-xs font-extrabold uppercase text-[#111111] whitespace-pre-line leading-snug">
                  {data.promoBanners.bottomRightTitle}
                </h3>
                <p className="mt-1 text-[10px] text-[#666666]">
                  {data.promoBanners.bottomRightSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TABBED 5-COLUMN PRODUCT SHOWCASE (BÁN CHẠY | NỔI BẬT | GIÁ TỐT) */}
      <section id="san-pham" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Pill Tabs */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {[
              { id: "ban-chay", label: "BÁN CHẠY" },
              { id: "noi-bat", label: "NỔI BẬT" },
              { id: "gia-tot", label: "GIÁ TỐT" },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id as any)}
                className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase transition-colors ${
                  activeTab === t.id
                    ? "bg-[#B88B28] text-white shadow-xs"
                    : "text-[#555555] hover:text-[#B88B28]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* 5 Product Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {tabProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-[#f8f8f8] mb-3 p-2 border border-transparent group-hover:border-[#B88B28] transition-colors">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-bold text-[#222222] group-hover:text-[#B88B28] transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <span className="mt-1 text-xs font-bold text-[#B88B28]">
                  {product.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: GOLD TESTIMONIAL BANNER (#B88B28) */}
      {mainTestimonial && (
        <section className="py-12 bg-[#B88B28] text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center">
            <img
              src={mainTestimonial.avatar}
              alt={mainTestimonial.author}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mb-4"
            />
            <p className="text-xs sm:text-sm italic text-white/95 leading-relaxed">
              {mainTestimonial.content}
            </p>
            <div className="mt-3 text-xs">
              <strong>{mainTestimonial.author}</strong> /{" "}
              <span className="text-white/80">{mainTestimonial.role}</span>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: 4-COLUMN MULTI-LIST MATRIX (NÓN 3/4 | NÓN FULLFACE | PHỤ KIỆN | KHUYẾN MÃI) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: NÓN 3/4 */}
            <div>
              <h3 className="text-sm font-extrabold uppercase text-[#222222] mb-5">
                NÓN 3/4
              </h3>
              <div className="space-y-4">
                {non34List.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 rounded-lg object-cover bg-[#f5f5f5] shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#222222] group-hover:text-[#B88B28] line-clamp-1">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-bold text-[#B88B28]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: NÓN FULLFACE */}
            <div>
              <h3 className="text-sm font-extrabold uppercase text-[#222222] mb-5">
                NÓN FULLFACE
              </h3>
              <div className="space-y-4">
                {fullfaceList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 rounded-lg object-cover bg-[#f5f5f5] shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#222222] group-hover:text-[#B88B28] line-clamp-1">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-bold text-[#B88B28]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: PHỤ KIỆN */}
            <div>
              <h3 className="text-sm font-extrabold uppercase text-[#222222] mb-5">
                PHỤ KIỆN
              </h3>
              <div className="space-y-4">
                {phuKienList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 rounded-lg object-cover bg-[#f5f5f5] shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#222222] group-hover:text-[#B88B28] line-clamp-1">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-bold text-[#B88B28]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: KHUYẾN MÃI POSTER */}
            <div>
              <h3 className="text-sm font-extrabold uppercase text-[#222222] mb-5">
                KHUYẾN MÃI
              </h3>
              <div className="relative rounded-xl overflow-hidden bg-[#1A1A1A] text-white h-[268px] flex flex-col justify-between p-5 shadow-lg">
                <img
                  src={data.promoPoster.image}
                  alt={data.promoPoster.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10 text-right">
                  <span className="inline-block bg-[#B88B28] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-xs">
                    LIMITED
                  </span>
                </div>
                <div className="relative z-10 text-center">
                  <span className="block text-xl font-black text-[#FFC107] tracking-widest">
                    {data.promoPoster.code}
                  </span>
                  <h4 className="mt-1 text-xs font-extrabold uppercase tracking-wider text-[#F5D076]">
                    {data.promoPoster.title}
                  </h4>
                  <p className="text-[11px] font-bold uppercase text-white mt-0.5">
                    {data.promoPoster.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TIN TỨC (Dark Charcoal #141414 Background) */}
      <section id="tin-tuc" className="py-16 bg-[#141414] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-lg font-extrabold uppercase tracking-wider">
              TIN TỨC
            </h2>
            <div className="w-8 h-0.5 bg-[#B88B28] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="h-44 overflow-hidden mb-3.5 bg-[#222222]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-extrabold uppercase text-white group-hover:text-[#B88B28] transition-colors leading-snug">
                  {post.title}
                </h3>
                <span className="block text-[10px] text-white/50 mt-1">
                  {post.date}
                </span>
                <p className="mt-2 text-xs text-white/70 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PARTNER LOGOS + GOLD NEWSLETTER BAR + FOOTER */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-5 gap-6 items-center text-center">
          {(data.clients || []).map((cl) => (
            <div
              key={cl.id}
              className="text-sm font-extrabold uppercase tracking-wider text-[#444444] hover:text-[#B88B28] transition-colors"
            >
              {cl.name}
            </div>
          ))}
        </div>
      </section>

      {/* Gold Newsletter Strip (#B88B28) */}
      <div className="bg-[#B88B28] py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {newsletterDone ? (
            <div className="text-xs text-white font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Đã đăng ký nhận thông tin khuyến mãi!</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterDone(true);
              }}
              className="flex items-center w-full sm:w-80 bg-white rounded-xs overflow-hidden"
            >
              <input
                type="email"
                required
                placeholder="Email ..."
                className="w-full px-3 py-2 text-xs text-[#222222] focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#222222] hover:bg-black text-white text-[10px] font-bold uppercase whitespace-nowrap"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}

          <div className="flex items-center gap-2.5">
            {["f", "ig", "tw", "yt"].map((soc) => (
              <a
                key={soc}
                href="#lien-he"
                className="w-7 h-7 rounded-full bg-white text-[#B88B28] font-bold text-[11px] flex items-center justify-center hover:bg-[#222222] hover:text-white transition-colors uppercase"
              >
                {soc}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 5-Column White Footer */}
      <footer id="lien-he" className="bg-white pt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-[#555555]">
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[#222222] text-sm mb-3">Liên hệ</h4>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#222222] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#222222] text-sm mb-3">Menu</h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a href="#gioi-thieu" className="hover:text-[#B88B28]">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-[#B88B28]">
                  Cửa hàng
                </a>
              </li>
              <li>
                <a href="#tin-tuc" className="hover:text-[#B88B28]">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#lien-he" className="hover:text-[#B88B28]">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#222222] text-sm mb-3">Tài khoản</h4>
            <ul className="space-y-2 text-[11px]">
              <li>Tài khoản của tôi</li>
              <li>Kiểm tra đơn hàng</li>
              <li>Thanh toán</li>
              <li>Giỏ hàng</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#222222] text-sm mb-3">Dịch vụ</h4>
            <ul className="space-y-2 text-[11px]">
              <li>Bọc lót nón mới</li>
              <li>Lắp bộ đàm Intercom</li>
              <li>Bảo hành khóa kính</li>
              <li>Đổi mũ cũ lấy mới</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#222222] text-sm mb-3">Đăng ký</h4>
            <p className="text-[11px] leading-relaxed mb-3">
              Đăng ký để nhận được thông tin mới nhất từ chúng tôi.
            </p>
            <div className="flex items-center border border-[#dddddd] rounded-xs px-2.5 py-1.5">
              <input
                type="email"
                placeholder="Email..."
                className="w-full text-[11px] focus:outline-none"
              />
              <Send className="w-3.5 h-3.5 text-[#B88B28] shrink-0" />
            </div>
          </div>
        </div>

        <div className="bg-[#111111] text-white/60 py-3.5 text-center text-[11px]">
          © Bản quyền thuộc về <strong>{data.business.name}</strong> • TaviWeb
        </div>
      </footer>

      {/* PRODUCT QUICK VIEW MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="text-base font-extrabold text-[#222222]">
              {selectedProduct.title}
            </h3>
            <p className="mt-1 text-sm font-bold text-[#B88B28]">
              {selectedProduct.price}
            </p>
            <p className="mt-2 text-xs text-[#666666]">
              Vỏ nhựa ABS nguyên sinh chịu va đập cao • Lót kháng khuẩn tháo rời
              • Bảo hành chính hãng 24 tháng tại {data.business.name}.
            </p>
            <button
              type="button"
              onClick={() => {
                setCartCount((c) => c + 1);
                setSelectedProduct(null);
              }}
              className="mt-5 w-full py-2.5 bg-[#B88B28] hover:bg-[#9c741f] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
