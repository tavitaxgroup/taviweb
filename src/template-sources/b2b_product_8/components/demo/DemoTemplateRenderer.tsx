"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  ShoppingCart,
  Search,
  Sprout,
  Fish,
  Beef,
  Apple,
  Wheat,
  Wine,
  MapPin,
  Send,
  CheckCircle2,
  X,
  Menu,
  ChevronDown,
  MessageCircle,
  ShieldCheck
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct8DefaultData,
  type B2BProduct8TemplateData,
  type B2BProduct8ProductItem
} from "@/template-sources/b2b_product_8/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: B2BProduct8TemplateData = adaptClonedTemplateData(
    b2bProduct8DefaultData,
    incomingData
  );

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] =
    useState<B2BProduct8ProductItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);
  const [voucherModalOpen, setVoucherModalOpen] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const secondaryPhone = data.business.phone?.[1] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "mon@mona.media";
  const brandName = data.business.name || "MonaFresh";

  const filteredProducts = (data.featuredProducts || []).filter((p) => {
    const matchesCat =
      activeCategory === "all" || p.categoryKey === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.supplier.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAddToCart = (product: B2BProduct8ProductItem) => {
    setCartTotal((prev) => prev + (product.numericPrice || 75000));
    setCartCount((prev) => prev + 1);
  };

  const renderCategorySketchIcon = (iconType: string) => {
    const cls = "w-10 h-10 text-[#65b741] stroke-[1.4]";
    switch (iconType) {
      case "veggie":
        return <Sprout className={cls} />;
      case "seafood":
        return <Fish className={cls} />;
      case "meat":
        return <Beef className={cls} />;
      case "fruit":
        return <Apple className={cls} />;
      case "dry":
        return <Wheat className={cls} />;
      default:
        return <Wine className={cls} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#65b741] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="border-b border-[#eeeeee] bg-[#fafafa] text-[11.5px] text-[#666666]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${primaryEmail}`}
              className="inline-flex items-center gap-1.5 hover:text-[#65b741]"
            >
              <Mail className="w-3.5 h-3.5 text-[#888888]" />
              <span>{primaryEmail}</span>
            </a>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-[#65b741]"
            >
              <Phone className="w-3.5 h-3.5 text-[#888888]" />
              <span>{primaryPhone}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setVoucherModalOpen(true)}
              className="hover:text-[#65b741] hidden sm:inline"
            >
              Đăng nhập / Đăng ký
            </button>
            <span className="hidden sm:inline text-[#dddddd]">|</span>
            <button
              type="button"
              onClick={() =>
                setSelectedProduct(data.featuredProducts?.[0] || null)
              }
              className="inline-flex items-center gap-1.5 font-semibold text-[#444444] hover:text-[#65b741]"
            >
              <span>
                Giỏ hàng / {cartTotal.toLocaleString("vi-VN")} ₫
              </span>
              <ShoppingCart className="w-3.5 h-3.5 text-[#65b741]" />
              {cartCount > 0 && (
                <span className="bg-[#65b741] text-white text-[10px] px-1.5 py-0.2 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#eeeeee] shadow-2xs">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#trang-chu"
            className="flex items-center gap-2 shrink-0 group"
          >
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={brandName}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-[#eef8e8] border border-[#65b741]/40 flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-[#65b741]" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-[#4c9a2a]">
                  {brandName}
                </span>
              </>
            )}
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 text-[13px] font-medium text-[#444444]">
            <a
              href="#trang-chu"
              className="bg-[#65b741] text-white font-semibold px-4 py-1.5 rounded-md"
            >
              Trang chủ
            </a>
            <a
              href="#nha-vuon"
              className="px-3.5 py-1.5 hover:text-[#65b741] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#san-pham"
              className="px-3.5 py-1.5 hover:text-[#65b741] transition-colors inline-flex items-center gap-1"
            >
              <span>Cửa hàng</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#nha-vuon"
              className="px-3.5 py-1.5 hover:text-[#65b741] transition-colors"
            >
              Danh bạ nhà nông
            </a>
            <a
              href="#kien-thuc"
              className="px-3.5 py-1.5 hover:text-[#65b741] transition-colors"
            >
              Kiến thức
            </a>
            <a
              href="#lien-he"
              className="px-3.5 py-1.5 hover:text-[#65b741] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          {/* Rounded Search Input */}
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block w-48 xl:w-56">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm..."
                className="w-full rounded-full border border-[#dddddd] bg-[#fafafa] pl-4 pr-9 py-1.5 text-xs focus:outline-none focus:border-[#65b741]"
              />
              <Search className="w-3.5 h-3.5 text-[#666666] absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Mở menu"
              className="lg:hidden p-2 text-[#444444]"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#eeeeee] bg-white px-6 py-4 space-y-2.5 text-sm font-medium">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#65b741] font-bold"
            >
              Trang chủ
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Cửa hàng nông sản
            </a>
            <a
              href="#khuyen-mai"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Chương trình khuyến mãi
            </a>
            <a
              href="#nha-vuon"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Kết nối nhà vườn
            </a>
            <a
              href="#kien-thuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Hành trình Organic
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER */}
      <section
        id="trang-chu"
        className="relative h-[380px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden bg-[#1e2d1b]"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-[1000px] mx-auto h-full px-4 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold uppercase leading-tight drop-shadow-md max-w-3xl mb-4">
            {data.hero.title}
          </h1>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl mb-6 drop-shadow">
            {data.hero.subtitle}
          </p>
          <a
            href={data.hero.ctaLink || "#san-pham"}
            className="bg-[#65b741] hover:bg-[#529c32] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-md shadow-lg transition-colors"
          >
            {data.hero.ctaText || "MUA NGAY"}
          </a>
        </div>
      </section>

      {/* 4. GARDEN CATEGORIES ("Mua sản phẩm được lựa chọn từ vườn") */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-[#222222] mb-10">
            Mua sản phẩm được lựa chọn từ vườn
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {(data.gardenCategories || []).map((cat) => {
              const isSelected = activeCategory === cat.filterKey;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory((prev) =>
                      prev === cat.filterKey ? "all" : cat.filterKey
                    )
                  }
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div
                    className={`w-28 h-28 rounded-full border-2 flex items-center justify-center transition-all mb-3 ${
                      isSelected
                        ? "border-[#65b741] bg-[#eef8e8] scale-105 shadow-md"
                        : "border-[#9fd385] bg-white group-hover:border-[#65b741] group-hover:bg-[#f6fcf2]"
                    }`}
                  >
                    <div className="w-24 h-24 rounded-full border border-dashed border-[#9fd385] flex items-center justify-center">
                      {renderCategorySketchIcon(cat.iconType)}
                    </div>
                  </div>
                  <span
                    className={`text-sm font-bold transition-colors ${
                      isSelected
                        ? "text-[#65b741]"
                        : "text-[#222222] group-hover:text-[#65b741]"
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PROMOTIONS ("CHƯƠNG TRÌNH KHUYẾN MÃI") */}
      <section id="khuyen-mai" className="pb-14 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-bold uppercase text-[#222222] mb-8">
            CHƯƠNG TRÌNH KHUYẾN MÃI
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.promoCards || []).map((card) => (
              <div
                key={card.id}
                onClick={() => setVoucherModalOpen(true)}
                className={`relative rounded-md overflow-hidden border p-4 flex flex-col justify-between min-h-[175px] cursor-pointer group transition-shadow hover:shadow-md ${
                  card.bgTone === "green"
                    ? "bg-[#ecf8e5] border-[#bde4a8]"
                    : "bg-[#f8f3eb] border-[#e8dccb]"
                }`}
              >
                {card.bgTone === "green" ? (
                  <div className="my-auto bg-[#7ac143] text-white p-3.5 rounded text-center shadow-xs">
                    <p className="text-[11px] font-extrabold uppercase leading-snug mb-1">
                      {card.title}
                    </p>
                    <p className="text-[10px] opacity-95">{card.subtitle}</p>
                  </div>
                ) : (
                  <>
                    <div className="z-10 pr-20">
                      <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-[#2e6f18] bg-[#dff2d4] px-2 py-0.5 rounded mb-1.5">
                        {card.badge}
                      </span>
                      <h3 className="text-xs font-extrabold uppercase text-[#2d5a1e] leading-snug mb-1">
                        {card.title}
                      </h3>
                      <p className="text-[10px] text-[#666666] mb-2">
                        {card.subtitle}
                      </p>
                      {card.savingText && (
                        <span className="inline-block bg-[#eab308] text-white text-[9px] font-bold px-2 py-0.5 rounded-full mb-1">
                          {card.savingText}
                        </span>
                      )}
                      {card.newPrice && (
                        <div className="bg-[#e07a38] text-white px-2.5 py-1 rounded inline-block text-xs font-bold">
                          {card.oldPrice && (
                            <span className="block text-[9px] line-through opacity-80">
                              {card.oldPrice}
                            </span>
                          )}
                          <span>{card.newPrice}</span>
                        </div>
                      )}
                    </div>

                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-24 h-24 rounded-full object-cover border-2 border-white shadow absolute right-3 bottom-9 group-hover:scale-105 transition-transform"
                    />

                    <div className="mt-2 flex justify-end">
                      <span className="bg-[#65b741] text-white text-[9px] font-bold uppercase px-3 py-1 rounded-full">
                        {card.ctaText}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS ("Sản phẩm nổi bật" — 6x2 Grid) */}
      <section id="san-pham" className="pb-16 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mx-auto">
              Sản phẩm nổi bật
            </h2>
            {activeCategory !== "all" && (
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className="text-xs text-[#65b741] font-semibold underline"
              >
                Hiển thị tất cả (12)
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="border border-[#eeeeee] rounded-sm p-2.5 flex flex-col items-center text-center hover:shadow-md hover:border-[#65b741]/50 transition-all cursor-pointer group bg-white"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-[#f8f8f8] mb-2.5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-1.5 right-1.5 bg-[#65b741] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-xs shadow-2xs">
                    {product.certification}
                  </span>
                </div>

                <h3 className="text-xs font-bold text-[#333333] group-hover:text-[#65b741] line-clamp-1 mb-1">
                  {product.title}
                </h3>
                <p className="text-xs font-extrabold text-[#65b741] mb-2.5">
                  {product.price}
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  className="mt-auto bg-[#65b741] hover:bg-[#529c32] text-white text-[10px] font-bold uppercase px-3.5 py-1.5 rounded-xs transition-colors"
                >
                  THÊM VÀO GIỎ
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="bg-[#65b741] hover:bg-[#529c32] text-white text-xs font-semibold px-7 py-2 rounded-full transition-colors"
            >
              Xem thêm
            </button>
          </div>
        </div>
      </section>

      {/* 7. FARM SUPPLIERS ("Kết nối nhà vườn") */}
      <section id="nha-vuon" className="pb-16 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-[#222222] mb-8">
            Kết nối nhà vườn
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.farmSuppliers || []).map((sup) => (
              <div
                key={sup.id}
                className="border border-[#eeeeee] rounded-sm overflow-hidden hover:shadow-md transition-shadow bg-white flex flex-col"
              >
                {/* Stylized Partner Brand Header Card */}
                <div className="h-32 bg-[#fafafa] border-b border-[#f0f0f0] flex items-center justify-center p-4">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-full bg-[#65b741]/15 flex items-center justify-center">
                      <Sprout
                        className="w-5 h-5"
                        style={{ color: sup.badgeColor }}
                      />
                    </span>
                    <span
                      className="text-2xl font-black tracking-tight"
                      style={{ color: sup.badgeColor }}
                    >
                      {sup.shortCode}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#222222] mb-1.5">
                    {sup.name}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                    {sup.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ORGANIC KNOWLEDGE ("Hành trình Organic bắt đầu từ đây") */}
      <section id="kien-thuc" className="pb-16 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-[#222222] mb-8">
            Hành trình Organic bắt đầu từ đây
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || []).map((post, idx) => (
              <article key={post.id} className="group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden border border-[#eeeeee] mb-3 relative bg-[#f9fdf7]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {idx < 2 && (
                    <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center p-3 text-center">
                      <div className="border-2 border-[#2d7a22] rounded-full px-4 py-2">
                        <span className="block text-base font-black text-[#2d7a22] leading-none">
                          {idx === 0 ? "100% ORGANIC" : "Organic"}
                        </span>
                        <span className="block text-[9px] text-[#65b741] font-semibold mt-0.5">
                          {idx === 0
                            ? "CHỨNG NHẬN HỮU CƠ"
                            : "Tốt cho tự nhiên & sức khỏe"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="text-xs sm:text-[13px] font-bold text-[#222222] group-hover:text-[#65b741] transition-colors mb-1.5 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[11.5px] text-[#666666] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER TESTIMONIALS ON TERRACED FIELD BACKGROUND ("Khách hàng nói gì về MonaFresh") */}
      <section className="relative py-16 sm:py-20 bg-[#1e3d19] text-white overflow-hidden">
        <img
          src={data.testimonialsBgImage}
          alt="Đánh giá khách hàng"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[#173012]/70" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-10">
            Khách hàng nói gì về {brandName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.testimonials || []).map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md mb-4"
                />
                <p className="text-xs italic text-white/95 leading-relaxed mb-3 max-w-xs">
                  “{item.content}”
                </p>
                <span className="text-xs font-bold text-white">
                  {item.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ORGANIC CERTIFICATIONS ("Cam kết của chúng tôi") */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg sm:text-xl font-bold text-[#222222] mb-8">
            Cam kết của chúng tôi
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center">
            {(data.certifications || []).map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col items-center justify-center p-3 border border-[#e8e8e8] rounded-md bg-[#fafafa] text-[#777777] hover:border-[#65b741] hover:text-[#3d7d22] transition-colors"
              >
                <ShieldCheck className="w-8 h-8 mb-1 stroke-[1.5]" />
                <span className="text-[11px] font-extrabold uppercase text-center leading-tight">
                  {cert.code}
                </span>
                <span className="text-[9px] opacity-80 mt-0.5">
                  {cert.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. DARK SLATE FOOTER */}
      <footer
        id="lien-he"
        className="bg-[#1e242b] text-zinc-300 pt-12 pb-6 text-xs"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-3 space-y-2.5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#65b741]/20 flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-[#65b741]" />
                </div>
                <span className="text-xl font-bold text-[#65b741]">
                  {brandName}
                </span>
              </div>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{secondaryPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>

            {/* Col 2: SẢN PHẨM */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold uppercase mb-3">SẢN PHẨM</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Rau củ
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Hải sản
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Trái cây
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Đồ uống
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Thịt trứng
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: DANH MỤC */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold uppercase mb-3">DANH MỤC</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#trang-chu" className="text-[#65b741]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#nha-vuon" className="hover:text-[#65b741]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Cửa hàng
                  </a>
                </li>
                <li>
                  <a href="#kien-thuc" className="hover:text-[#65b741]">
                    Kiến thức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#65b741]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: DỊCH VỤ */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold uppercase mb-3">DỊCH VỤ</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Rau củ sỉ B2B
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Hải sản cấp đông
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Trái cây theo mùa
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Đồ uống hữu cơ
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#65b741]">
                    Thịt trứng sạch
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: ĐĂNG KÝ */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold uppercase mb-3">ĐĂNG KÝ</h3>
              <p className="text-zinc-400 mb-3 leading-relaxed">
                Đăng ký để nhận được bảng báo giá nông sản sỉ & thông tin mới
                nhất từ chúng tôi.
              </p>
              {newsletterDone ? (
                <div className="bg-[#65b741]/20 border border-[#65b741] text-white p-2.5 rounded text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#65b741] shrink-0" />
                  <span>Đã đăng ký nhận bảng giá nông sản thành công!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="relative mb-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="w-full bg-white text-[#222222] rounded px-3 py-2 pr-9 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Gửi"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#65b741]"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="flex items-center gap-3 text-zinc-400 pt-1">
                <a href="#lien-he" className="hover:text-white">
                  f
                </a>
                <a href="#lien-he" className="hover:text-white">
                  IG
                </a>
                <a href="#lien-he" className="hover:text-white">
                  𝕏
                </a>
                <a href="#lien-he" className="hover:text-white">
                  ▶
                </a>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-white/10 text-center text-[11px] text-zinc-400">
            © Bản quyền thuộc về {brandName}. Thiết kế website bởi{" "}
            <span className="text-white font-semibold">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* FLOATING MESSENGER ICON */}
      <button
        type="button"
        onClick={() => setVoucherModalOpen(true)}
        aria-label="Hỗ trợ trực tuyến"
        className="fixed right-4 bottom-6 z-40 w-10 h-10 rounded-full bg-[#0084ff] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </button>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full rounded-md overflow-hidden shadow-2xl"
          >
            <div className="aspect-video relative bg-[#f6f6f6]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-[#65b741] font-bold mb-1">
                <span>Nhà cung cấp: {selectedProduct.supplier}</span>
                <span>Chuẩn: {selectedProduct.certification}</span>
              </div>
              <h3 className="text-lg font-bold text-[#222222] mb-1">
                {selectedProduct.title}
              </h3>
              <p className="text-base font-extrabold text-[#65b741] mb-4">
                {selectedProduct.price} / {selectedProduct.unit}
              </p>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-[#65b741] hover:bg-[#529c32] text-white text-xs font-bold uppercase py-2.5 rounded"
                >
                  Thêm Vào Giỏ Hàng
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="border border-[#65b741] text-[#65b741] text-xs font-bold uppercase px-4 py-2.5 rounded"
                >
                  Gọi Đặt Sỉ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VOUCHER / PARTNER MODAL */}
      {voucherModalOpen && (
        <div
          onClick={() => setVoucherModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full p-6 rounded-md shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-[#222222]">
                Nhận Voucher 50.000đ & Báo Giá Sỉ B2B
              </h3>
              <button
                type="button"
                onClick={() => setVoucherModalOpen(false)}
                className="text-zinc-400 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#666666] mb-4">
              Đăng ký thông tin để nhận mã giảm 50.000đ cho đơn đầu tiên hoặc
              nhận bảng giá cung ứng nông sản định kỳ cho nhà hàng, siêu thị.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterDone(true);
                setVoucherModalOpen(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Họ tên hoặc Tên đơn vị thu mua"
                className="w-full border border-zinc-300 rounded px-3.5 py-2 text-xs"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại nhận mã"
                className="w-full border border-zinc-300 rounded px-3.5 py-2 text-xs"
              />
              <button
                type="submit"
                className="w-full bg-[#65b741] text-white text-xs font-bold uppercase py-2.5 rounded"
              >
                NHẬN VOUCHER NGAY
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
