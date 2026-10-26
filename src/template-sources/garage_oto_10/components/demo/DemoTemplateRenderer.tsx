"use client";

import React, { useState } from "react";
import {
  User,
  Search,
  ShoppingBag,
  Bike,
  Disc,
  Star,
  Award,
  Medal,
  CheckCircle2,
  X,
  Menu,
  ChevronUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto10DefaultData,
  type GarageOto10TemplateData,
  type GarageOto10ProductItem
} from "@/template-sources/garage_oto_10/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: GarageOto10TemplateData = adaptClonedTemplateData(
    garageOto10DefaultData,
    incomingData
  );

  const [activeTab, setActiveTab] = useState<string>("tat-ca");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] =
    useState<GarageOto10ProductItem | null>(null);
  const [orderDone, setOrderDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const brandName = data.business.name || "Mona Media";

  const allProducts = data.products || [];
  const displayedProducts = allProducts.filter((item) => {
    const matchTab =
      activeTab === "tat-ca" || item.tabCategory === activeTab;
    const matchSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  const renderDarkSectionHeader = (title: string) => (
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2.5">
        {title}
      </h2>
      <div className="inline-flex items-center justify-center gap-3 text-white/70">
        <span className="w-8 h-px bg-white/40" />
        <Disc className="w-6 h-6 stroke-[1.5]" />
        <span className="w-8 h-px bg-white/40" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-[#d9232e] selection:text-white">
      {/* 1. TOP DARK HEADER (#090909) */}
      <header
        id="trang-chu"
        className="sticky top-0 z-40 bg-[#090909]/95 backdrop-blur-xs border-b border-white/10"
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left Logo: Mona Media Bicycle & Sport */}
          <a
            href="#trang-chu"
            className="flex items-center gap-2 shrink-0"
          >
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={brandName}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="leading-none">
                  <span className="block text-base sm:text-lg font-black tracking-tight text-white">
                    {brandName}
                  </span>
                  <span className="block text-[9px] italic text-white/60">
                    Bicycle &amp; Sport
                  </span>
                </div>
                <Bike className="w-7 h-7 text-[#d9232e] stroke-[2]" />
              </div>
            )}
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-bold uppercase tracking-wider text-white/85">
            <a
              href="#trang-chu"
              className="text-[#d9232e] border-t-2 border-[#d9232e] pt-1.5"
            >
              TRANG CHỦ
            </a>
            <a
              href="#ve-chung-toi"
              className="hover:text-[#d9232e] pt-1.5 transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#xe-dap-pho-bien"
              className="hover:text-[#d9232e] pt-1.5 transition-colors"
            >
              CỬA HÀNG
            </a>
            <a
              href="#bai-viet"
              className="hover:text-[#d9232e] pt-1.5 transition-colors"
            >
              BLOG
            </a>
            <a
              href="#gia-tri"
              className="hover:text-[#d9232e] pt-1.5 transition-colors"
            >
              CÂU HỎI THƯỜNG GẶP
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#d9232e] pt-1.5 transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 text-white/85">
            <a
              href="#lien-he"
              aria-label="Tài khoản"
              className="hover:text-[#d9232e] transition-colors"
            >
              <User className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Tìm kiếm"
              className="hover:text-[#d9232e] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                if (allProducts[0]) {
                  setSelectedProduct(allProducts[0]);
                  setOrderDone(false);
                }
              }}
              aria-label="Giỏ hàng"
              className="relative hover:text-[#d9232e] transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-1 text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Search Input */}
        {searchOpen && (
          <div className="border-t border-white/10 bg-[#141414] py-2.5 px-4">
            <div className="max-w-md mx-auto flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm xe địa hình carbon, phụ kiện..."
                className="flex-1 bg-[#1e1e1e] border border-white/15 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d9232e]"
              />
              <a
                href="#xe-dap-pho-bien"
                onClick={() => setSearchOpen(false)}
                className="bg-[#d9232e] text-white text-xs font-bold px-4 py-1.5"
              >
                Tìm
              </a>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#141414] px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#d9232e]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#ve-chung-toi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#xe-dap-pho-bien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              XE ĐẠP PHỔ BIẾN
            </a>
            <a
              href="#bai-viet"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              BÀI VIẾT MỚI NHẤT
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. DARK CARBON HERO BANNER */}
      <section className="relative overflow-hidden py-12 sm:py-16 bg-[#131313]">
        {/* Subtle MONA Watermark */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[90px] sm:text-[140px] font-black uppercase text-white/[0.04] tracking-widest select-none pointer-events-none leading-none">
          {brandName.split(" ")[0]}
        </div>

        <div className="relative z-10 max-w-[1060px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80 block">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed max-w-md">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#xe-dap-pho-bien"}
                className="inline-block bg-[#d9232e] hover:bg-[#b81b25] text-white text-[11px] font-extrabold uppercase tracking-wider px-7 py-3 transition-colors shadow-lg"
              >
                {data.hero.ctaText}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[520px] aspect-[4/3] rounded-lg overflow-hidden bg-[#1a1a1a] border border-white/10 shadow-2xl">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-8">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>
      </section>

      {/* 3. SECTION: VỀ CHÚNG TÔI */}
      <section id="ve-chung-toi" className="py-14 bg-[#0f0f0f]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          {renderDarkSectionHeader(data.business.aboutTitle || "Về Chúng Tôi")}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={data.aboutFeature.image}
                  alt="Về chúng tôi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-6 space-y-4">
              <p className="text-xs text-white/70 leading-relaxed">
                {data.aboutFeature.intro.replace(/MONA/gi, brandName)}
              </p>

              <div>
                <h3 className="text-sm font-extrabold text-white mb-1.5">
                  {data.aboutFeature.guideTitle}
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">
                  {data.aboutFeature.guideText}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-white mb-1.5">
                  {data.aboutFeature.goalTitle}
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">
                  {data.aboutFeature.goalText}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#xe-dap-pho-bien"
                  className="inline-block bg-[#d9232e] hover:bg-[#b81b25] text-white text-[11px] font-extrabold uppercase px-6 py-2.5 transition-colors"
                >
                  {data.aboutFeature.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: XE ĐẠP PHỔ BIẾN (WHITE STUDIO CARDS ON DARK BACKGROUND) */}
      <section id="xe-dap-pho-bien" className="py-12 bg-[#0f0f0f]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          {renderDarkSectionHeader("Xe Đạp Phổ Biến")}

          {/* 4 Rectangular Red/Outlined Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            <button
              type="button"
              onClick={() => setActiveTab("tat-ca")}
              className={`px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider border transition-colors ${
                activeTab === "tat-ca"
                  ? "bg-[#d9232e] border-[#d9232e] text-white"
                  : "border-[#d9232e]/50 text-white/75 hover:border-[#d9232e] hover:text-white"
              }`}
            >
              TẤT CẢ
            </button>
            {(data.productTabs || []).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider border transition-colors ${
                    isActive
                      ? "bg-[#d9232e] border-[#d9232e] text-white"
                      : "border-[#d9232e]/50 text-white/75 hover:border-[#d9232e] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Product Grid (White Studio Cards on Dark BG) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setOrderDone(false);
                }}
                className="group cursor-pointer text-center"
              >
                <div className="relative aspect-[16/11] bg-white overflow-hidden mb-3 flex items-center justify-center p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    {product.newBadge && (
                      <span className="bg-[#d9232e] text-white text-[9px] font-bold uppercase px-2 py-0.5">
                        MỚI
                      </span>
                    )}
                    {product.discountBadge && (
                      <span className="bg-[#ffe600] text-[#111111] text-[9px] font-extrabold px-2 py-0.5">
                        {product.discountBadge}
                      </span>
                    )}
                  </div>

                  {product.soldOut && (
                    <span className="absolute bg-[#111111]/85 text-white text-[10px] font-bold px-3 py-1">
                      Hết hàng
                    </span>
                  )}
                </div>

                <h3 className="text-xs font-bold text-white group-hover:text-[#d9232e] transition-colors mb-1">
                  {product.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs">
                  {product.oldPrice && (
                    <span className="text-white/45 line-through text-[11px]">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="font-extrabold text-white">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH CLOSE-UP FORK & WHEEL BANNER WITH GIANT RED WATERMARK */}
      <section className="py-8 bg-[#0f0f0f]">
        <div className="relative w-full h-[300px] sm:h-[420px] overflow-hidden bg-[#1a1a1a]">
          <img
            src={data.midBannerImage}
            alt={brandName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 select-none pointer-events-none">
            <span className="block text-5xl sm:text-8xl font-black uppercase text-[#d9232e]/75 leading-[0.9] tracking-tight">
              {brandName.split(" ")[0] || "MONA"}
            </span>
            <span className="block text-5xl sm:text-8xl font-black uppercase text-[#d9232e]/75 leading-[0.9] tracking-tight">
              {brandName.split(" ").slice(1).join(" ") || "MEDIA"}
            </span>
          </div>
        </div>
      </section>

      {/* 6. SECTION: BÀI VIẾT MỚI NHẤT (3x2 = 6 DARK BLOG CARDS) */}
      <section id="bai-viet" className="py-12 bg-[#0f0f0f]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          {renderDarkSectionHeader("Bài Viết Mới Nhất")}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {(data.articles || []).map((art) => (
              <article key={art.id} className="group flex flex-col">
                <div className="aspect-square overflow-hidden bg-[#1c1c1c] mb-3">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Red Tag Badges */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {art.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-[#d9232e] text-white text-[8px] font-bold uppercase px-1.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-[9px] text-white/50 uppercase mb-1">
                  {art.date}
                </span>
                <h3 className="text-sm font-extrabold text-white group-hover:text-[#d9232e] transition-colors line-clamp-1 mb-3">
                  {art.title}
                </h3>

                <div className="mt-auto">
                  <a
                    href="#lien-he"
                    className="inline-block bg-[#d9232e] hover:bg-[#b81b25] text-white text-[10px] font-extrabold uppercase px-3.5 py-1.5 transition-colors"
                  >
                    ĐỌC THÊM »
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 3 CORE VALUE BADGES ROW ("THÀNH TỰU", "GIÁ TRỊ CỐT LÕI", "MỤC TIÊU") */}
      <section id="gia-tri" className="py-14 bg-[#0f0f0f]">
        <div className="max-w-[920px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {(data.coreValues || []).map((val) => {
              const IconComp =
                val.icon === "star"
                  ? Star
                  : val.icon === "seal"
                  ? Award
                  : Medal;
              return (
                <div
                  key={val.id}
                  className="flex flex-col items-center space-y-2.5"
                >
                  <IconComp className="w-8 h-8 text-white fill-white/15" />
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
                    {val.title}
                  </h3>
                  <p className="text-[11px] text-white/65 leading-relaxed max-w-[240px]">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. DARK FOOTER (#151515) */}
      <footer
        id="lien-he"
        className="bg-[#151515] border-t border-white/10 pt-14 pb-8 text-xs text-white/70"
      >
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                VỀ CHÚNG TÔI
              </h3>
              <p className="text-[11px] leading-relaxed text-white/60">
                {data.business.aboutText?.[0]}
              </p>
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#d9232e] hover:border-[#d9232e]"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#d9232e] hover:border-[#d9232e]"
                >
                  𝕏
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#d9232e] hover:border-[#d9232e]"
                >
                  ▶
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#d9232e] hover:border-[#d9232e]"
                >
                  IG
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                THÔNG TIN
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#xe-dap-pho-bien" className="hover:text-[#d9232e]">
                    Thông tin giao hàng
                  </a>
                </li>
                <li>
                  <a href="#ve-chung-toi" className="hover:text-[#d9232e]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#ve-chung-toi" className="hover:text-[#d9232e]">
                    Điều khoản và điều kiện
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#d9232e]">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#ve-chung-toi" className="hover:text-[#d9232e]">
                    Hoàn trả & Bảo hành
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                TÀI KHOẢN CỦA TÔI
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#lien-he" className="hover:text-[#d9232e]">
                    Tài khoản của tôi
                  </a>
                </li>
                <li>
                  <a href="#xe-dap-pho-bien" className="hover:text-[#d9232e]">
                    Lịch sử đơn hàng
                  </a>
                </li>
                <li>
                  <a href="#xe-dap-pho-bien" className="hover:text-[#d9232e]">
                    Danh sách yêu thích
                  </a>
                </li>
                <li>
                  <a href="#xe-dap-pho-bien" className="hover:text-[#d9232e]">
                    Đang vận chuyển
                  </a>
                </li>
                <li>
                  <a href="#gia-tri" className="hover:text-[#d9232e]">
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                NGƯỜI DÙNG HỮU ÍCH
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#bai-viet" className="hover:text-[#d9232e]">
                    Cộng đồng Off-Road
                  </a>
                </li>
                <li>
                  <a href="#bai-viet" className="hover:text-[#d9232e]">
                    Diễn đàn độ xe
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#d9232e]">
                    Trung tâm trợ giúp kỹ thuật
                  </a>
                </li>
                <li>
                  <a href="#ve-chung-toi" className="hover:text-[#d9232e]">
                    Xưởng độ Carbon
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-white/50">
            © Thiết kế và lập trình bởi{" "}
            <span className="font-bold text-white">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* Scroll To Top */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-5 right-5 z-40 w-9 h-9 rounded-full bg-[#d9232e] hover:bg-[#b81b25] text-white shadow-lg flex items-center justify-center transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

      {/* PRODUCT QUICK-VIEW MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#181818] border border-white/15 max-w-2xl w-full overflow-hidden shadow-2xl text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-white aspect-square flex items-center justify-center p-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase text-[#d9232e]">
                      {selectedProduct.categoryName}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(null)}
                      className="text-white/60 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-2">
                    {selectedProduct.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-black text-[#d9232e]">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.oldPrice && (
                      <span className="text-xs text-white/40 line-through">
                        {selectedProduct.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className="space-y-1 text-xs text-white/75 border-y border-white/10 py-3 mb-4">
                    <p>
                      <strong>Cấu hình:</strong> {selectedProduct.specs}
                    </p>
                    <p>
                      <strong>Khung sườn:</strong>{" "}
                      {selectedProduct.frameMaterial}
                    </p>
                    <p>
                      <strong>Bảo hành:</strong> {selectedProduct.warranty}
                    </p>
                  </div>
                </div>

                {orderDone ? (
                  <div className="bg-[#d9232e]/20 border border-[#d9232e] p-3 text-xs text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d9232e] shrink-0" />
                    <span>
                      Đã thêm <strong>{selectedProduct.title}</strong> vào giỏ
                      hàng!
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setCartCount((c) => c + 1);
                        setOrderDone(true);
                      }}
                      className="flex-1 bg-[#d9232e] hover:bg-[#b81b25] text-white text-xs font-extrabold uppercase py-3 transition-colors"
                    >
                      Đặt mua ngay
                    </button>
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                      className="border border-white/40 text-white hover:bg-white hover:text-[#111111] text-xs font-bold uppercase py-3 px-4 transition-colors"
                    >
                      Gọi ngay
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
