"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Truck,
  Gift,
  PiggyBank,
  Sofa,
  X,
  Menu,
  CheckCircle2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat21DefaultData,
  NoiThat21Data,
  NoiThat21Product,
} from "@/template-sources/noi_that_21/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function MonaSofaLogo({ brandName }: { brandName: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      {/* Golden Yellow Sofa Icon */}
      <div className="w-10 h-8 rounded-t-full bg-[#f59e0b] text-zinc-900 flex items-center justify-center shadow-2xs">
        <Sofa className="w-5 h-5" />
      </div>
      <div className="leading-none text-left">
        <span className="block text-xl font-black tracking-wider text-zinc-800 uppercase">
          {brandName.split(" ")[0] || "MONA"}
        </span>
        <span className="block text-[10px] font-serif italic text-[#f59e0b] tracking-widest">
          F u r n i t u r e
        </span>
      </div>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-xl sm:text-2xl font-normal uppercase tracking-wide text-zinc-800">
        {title}
      </h2>
      <div className="w-6 h-0.5 bg-gray-200 mx-auto mt-2" />
    </div>
  );
}

function ThickFramedProductCard({
  product,
  onSelect,
}: {
  product: NoiThat21Product;
  onSelect: (p: NoiThat21Product) => void;
}) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="border-[5px] border-[#eeeeee] hover:border-[#f59e0b]/60 bg-white p-4 flex flex-col justify-between text-center cursor-pointer transition-colors group"
    >
      <div className="relative aspect-[4/3] mb-3 flex items-center justify-center overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.hasBagBadge && (
          <span className="absolute bottom-1.5 left-1.5 w-6 h-6 border border-zinc-700 bg-white text-zinc-800 flex items-center justify-center">
            <ShoppingBag className="w-3.5 h-3.5" />
          </span>
        )}
      </div>

      <div>
        <p className="text-[9px] font-semibold uppercase tracking-widest text-zinc-400">
          {product.category}
        </p>
        <h3 className="text-xs font-medium text-zinc-700 group-hover:text-[#f59e0b] transition-colors mt-0.5 mb-2 line-clamp-2 min-h-[32px]">
          {product.name}
        </h3>
        <p className="text-xs font-bold text-zinc-900">{product.price}</p>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: NoiThat21Data = adaptClonedTemplateData(
    noiThat21DefaultData,
    incomingData
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProductModal, setSelectedProductModal] =
    useState<NoiThat21Product | null>(null);
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    note: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const sofaProducts = data.products.filter((p) => p.section === "sofa");
  const tvProducts = data.products.filter((p) => p.section === "tvstand");
  const diningProducts = data.products.filter((p) => p.section === "dining");

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "contact@monachair.vn";

  const openOrder = (p: NoiThat21Product) => {
    setOrderSubmitted(false);
    setSelectedProductModal(p);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderForm.name.trim() || !orderForm.phone.trim()) return;
    setCartCount((c) => c + 1);
    setOrderSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-[#f59e0b] selection:text-white">
      {/* 1. 2-TIER HEADER (LIGHT GRAY TOP BAR + WHITE CENTERED NAV) */}
      <header className="sticky top-0 z-40 bg-white shadow-2xs">
        {/* Top Row */}
        <div className="bg-[#f5f5f5] border-b border-gray-200/70">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            {/* Left Search Pill */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const el = document.getElementById("ban-ghe-sofa");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden sm:flex items-center bg-gray-200/70 rounded-full px-3.5 py-1.5 w-52"
            >
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-xs text-zinc-700 placeholder:text-zinc-400 focus:outline-none flex-1"
              />
              <button type="submit" aria-label="Tìm kiếm">
                <Search className="w-3.5 h-3.5 text-zinc-500" />
              </button>
            </form>

            {/* Center Sofa Logo */}
            <a href="#trang-chu" className="mx-auto focus:outline-none">
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={data.business.name}
                  className="h-9 w-auto object-contain"
                />
              ) : (
                <MonaSofaLogo brandName={data.business.name} />
              )}
            </a>

            {/* Right Login + Cart Bag */}
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase text-zinc-600">
              <button
                type="button"
                onClick={() => openOrder(sofaProducts[0])}
                className="hidden sm:inline hover:text-[#f59e0b] cursor-pointer"
              >
                ĐĂNG NHẬP
              </button>
              <span className="hidden sm:inline text-gray-300">|</span>
              <button
                type="button"
                onClick={() => openOrder(sofaProducts[0])}
                className="inline-flex items-center gap-1.5 hover:text-[#f59e0b] cursor-pointer"
              >
                <span className="hidden sm:inline">GIỎ HÀNG</span>
                <span className="w-6 h-6 border border-zinc-700 flex items-center justify-center text-[10px] font-extrabold text-zinc-800">
                  {cartCount}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1 text-zinc-800"
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
        </div>

        {/* Bottom White Nav Row */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-3 hidden md:flex items-center justify-center gap-8 text-[11.5px] font-medium uppercase tracking-wider text-zinc-600">
            <a href="#cam-ket" className="hover:text-[#f59e0b] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#ban-ghe" className="hover:text-[#f59e0b] transition-colors">
              BÀN GHẾ
            </a>
            <a
              href="#ban-ghe-sofa"
              className="hover:text-[#f59e0b] transition-colors"
            >
              BÀN GHẾ SOFA
            </a>
            <a href="#ke-tivi" className="hover:text-[#f59e0b] transition-colors">
              KỆ TIVI
            </a>
            <a
              href="#thong-tin"
              className="hover:text-[#f59e0b] transition-colors"
            >
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#f59e0b] transition-colors">
              LIÊN HỆ
            </a>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden px-4 py-3 space-y-2 text-xs font-bold uppercase border-t border-gray-100">
              <a
                href="#ban-ghe-sofa"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#f59e0b]"
              >
                BÀN GHẾ SOFA
              </a>
              <a
                href="#ke-tivi"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-zinc-700"
              >
                KỆ TIVI GỖ TỰ NHIÊN
              </a>
              <a
                href="#ban-ghe"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-zinc-700"
              >
                BỘ BÀN GHẾ ĂN
              </a>
              <a
                href="#thong-tin"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-zinc-700"
              >
                THÔNG TIN HỮU ÍCH
              </a>
              <a
                href="#lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-zinc-700"
              >
                LIÊN HỆ SHOWROOM
              </a>
            </div>
          )}
        </div>
      </header>

      {/* 2. MINIMALIST LIVING ROOM SOFA HERO (SOFA SET WITH LOUNGER) */}
      <section
        id="trang-chu"
        className="relative min-h-[420px] md:min-h-[500px] bg-zinc-800 flex items-center overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 py-16">
          <div className="max-w-xl text-white space-y-2.5">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-wide uppercase leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-sm sm:text-base font-medium text-white/95">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#ban-ghe-sofa"}
                className="inline-block border border-white hover:bg-[#f59e0b] hover:border-[#f59e0b] text-white text-xs font-bold uppercase tracking-wider px-5 py-2 transition-colors"
              >
                {data.hero.ctaText || "MUA NGAY"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "BÀN GHẾ SOFA" (4x2 THICK-FRAMED PRODUCT GRID) */}
      <section id="ban-ghe-sofa" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="BÀN GHẾ SOFA" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sofaProducts.map((product) => (
              <ThickFramedProductCard
                key={product.id}
                product={product}
                onSelect={openOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. DARK PARALLAX 3-COLUMN PERKS BANNER WITH AMBER-GOLD ICONS */}
      <section
        id="cam-ket"
        className="relative py-14 bg-zinc-800 text-white overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80"
          alt="Cam kết Mona Furniture"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {data.perks.map((perk) => (
              <div
                key={perk.id}
                className="flex flex-col items-center space-y-2"
              >
                <div className="text-[#f59e0b] mb-1">
                  {perk.icon === "truck" && <Truck className="w-8 h-8" />}
                  {perk.icon === "gift" && <Gift className="w-8 h-8" />}
                  {perk.icon === "piggy" && <PiggyBank className="w-8 h-8" />}
                </div>
                <h3 className="text-sm font-bold text-white">{perk.title}</h3>
                <p className="text-xs text-zinc-300">{perk.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "KỆ TIVI" (6 THICK-FRAMED CARDS: ROW OF 4 + ROW OF 2) */}
      <section id="ke-tivi" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="KỆ TIVI" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tvProducts.map((product) => (
              <ThickFramedProductCard
                key={product.id}
                product={product}
                onSelect={openOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. 2 SPLIT LIFESTYLE PROMO BANNERS */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Banner: BEST OFFERS from Elle 15% Off */}
            <div
              onClick={() => openOrder(sofaProducts[0])}
              className="relative h-60 overflow-hidden bg-zinc-900 p-8 flex items-center justify-end text-right cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                alt="Best Offers Elle"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10 text-white space-y-1">
                <p className="text-sm font-bold uppercase tracking-wider">
                  ƯU ĐÃI ĐẶC BIỆT
                </p>
                <p className="font-serif italic text-3xl">Elle Decor</p>
                <p className="text-xl font-black text-[#f59e0b]">15% Off</p>
              </div>
            </div>

            {/* Right Banner: Stylish Interior Sofas LUIGIANO */}
            <div
              onClick={() => openOrder(sofaProducts[1])}
              className="relative h-60 overflow-hidden bg-zinc-100 p-8 flex flex-col items-center justify-center text-center cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80"
                alt="Stylish Interior Sofas"
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10 bg-white/85 px-6 py-4 space-y-1.5">
                <p className="text-sm font-medium text-zinc-700">
                  Sofa Nội Thất Phong Cách
                </p>
                <p className="text-xl font-serif tracking-[0.2em] text-zinc-800 uppercase">
                  LUIGIANO
                </p>
                <span className="inline-block bg-zinc-700 text-white text-[10px] font-bold uppercase px-4 py-1">
                  MUA NGAY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "BÀN GHẾ" (4x2 THICK-FRAMED DINING TABLE SETS = 8 CARDS) */}
      <section id="ban-ghe" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="BÀN GHẾ" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diningProducts.map((product) => (
              <ThickFramedProductCard
                key={product.id}
                product={product}
                onSelect={openOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. "THÔNG TIN HỮU ÍCH" (3 LIVING ROOM BLOG CARDS WITH 08 Th3 DATE BADGE) */}
      <section id="thong-tin" className="py-10 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="THÔNG TIN HỮU ÍCH" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 mb-3.5">
                  <span className="absolute top-3 left-3 z-10 bg-white border border-zinc-700 px-2 py-1 text-[10px] font-bold text-zinc-800 leading-tight text-center">
                    {post.date}
                  </span>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-bold uppercase text-zinc-800 group-hover:text-[#f59e0b] transition-colors line-clamp-1 mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <div>
                  <a
                    href="#lien-he"
                    className="text-[10px] font-bold uppercase tracking-wider text-[#f59e0b] hover:underline"
                  >
                    ĐỌC THÊM
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CENTERED 3-COLUMN WHITE FOOTER */}
      <footer id="lien-he" className="bg-white border-t border-gray-100 pt-12">
        <div className="max-w-6xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs text-zinc-500 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Col 1: ĐIỀU HƯỚNG (3 Cols) */}
            <div className="md:col-span-3 text-center space-y-2.5 pb-6 md:pb-0">
              <h4 className="text-sm font-bold uppercase text-zinc-800 mb-3">
                ĐIỀU HƯỚNG
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#trang-chu"
                    className="text-[#f59e0b] font-semibold hover:underline"
                  >
                    › Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#cam-ket" className="hover:text-[#f59e0b]">
                    › Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#ban-ghe-sofa" className="hover:text-[#f59e0b]">
                    › Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#thong-tin" className="hover:text-[#f59e0b]">
                    › Điểm tin hữu ích
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#f59e0b]">
                    › Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: CENTER LOGO + NEWSLETTER (6 Cols) */}
            <div className="md:col-span-6 px-4 text-center space-y-4 py-6 md:py-0">
              <div className="flex justify-center">
                <MonaSofaLogo brandName={data.business.name} />
              </div>
              <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
                {data.business.aboutText[0]}
              </p>

              {newsletterSent ? (
                <div className="text-xs font-bold text-[#f59e0b]">
                  Cảm ơn bạn đã đăng ký nhận catalogue mới nhất từ{" "}
                  {data.business.name}!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newsletterEmail.trim()) return;
                    setNewsletterSent(true);
                  }}
                  className="flex max-w-sm mx-auto items-stretch"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 border border-gray-200 px-3.5 py-2 text-xs text-zinc-700 focus:outline-none focus:border-[#f59e0b]"
                  />
                  <button
                    type="submit"
                    className="bg-zinc-800 hover:bg-[#f59e0b] text-white text-[11px] font-bold uppercase px-5 py-2 ml-1.5 transition-colors cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>

            {/* Col 3: THÔNG TIN LIÊN HỆ (3 Cols) */}
            <div className="md:col-span-3 pl-4 text-center space-y-2 pt-6 md:pt-0">
              <h4 className="text-sm font-bold uppercase text-zinc-800 mb-3">
                THÔNG TIN LIÊN HỆ
              </h4>
              <p>
                <strong className="text-[#f59e0b]">A:</strong>{" "}
                {data.business.address}
              </p>
              <p>
                <strong className="text-[#f59e0b]">T:</strong> {primaryPhone}
              </p>
              <p>
                <strong className="text-[#f59e0b]">E:</strong> {primaryEmail}
              </p>
              <p>
                <strong className="text-[#f59e0b]">S:</strong> monachair
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-4 text-center text-[11px] text-zinc-400">
          © Bản quyền thuộc về{" "}
          <strong className="text-zinc-700">{data.business.name}</strong>. Thiết
          kế website bởi <strong className="text-zinc-700">TaviWeb</strong>
        </div>
      </footer>

      {/* ORDER MODAL */}
      {selectedProductModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProductModal(null)}
        >
          <div
            className="bg-white max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-zinc-900 text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#f59e0b]">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Đặt Hàng Nội Thất — {data.business.name}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedProductModal(null)}
                className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {orderSubmitted ? (
                <div className="text-center py-4 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">
                    Đặt hàng thành công!
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Cảm ơn <strong>{orderForm.name}</strong>. Chuyên viên
                    Showroom <strong>{data.business.name}</strong> sẽ liên hệ số{" "}
                    <strong>{orderForm.phone}</strong> ngay.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(null)}
                    className="bg-[#f59e0b] text-white text-xs font-bold px-6 py-2"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleOrderSubmit}
                  className="space-y-3 text-xs"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <img
                      src={selectedProductModal.image}
                      alt={selectedProductModal.name}
                      className="w-16 h-16 object-cover border border-gray-100"
                    />
                    <div>
                      <h4 className="font-bold text-zinc-800">
                        {selectedProductModal.name}
                      </h4>
                      <p className="font-bold text-[#f59e0b] mt-0.5">
                        {selectedProductModal.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-500 leading-relaxed">
                    {selectedProductModal.description}
                  </p>
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên khách hàng *"
                    value={orderForm.name}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, name: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#f59e0b]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    value={orderForm.phone}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#f59e0b]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold uppercase tracking-wider py-2.5 cursor-pointer"
                  >
                    XÁC NHẬN ĐẶT HÀNG
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
