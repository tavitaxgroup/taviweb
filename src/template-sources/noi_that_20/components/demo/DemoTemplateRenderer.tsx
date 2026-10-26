"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Truck,
  Gift,
  PiggyBank,
  MapPin,
  Phone,
  Mail,
  Share2,
  Globe,
  Video,
  X,
  Menu,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat20DefaultData,
  NoiThat20Data,
  NoiThat20Product,
} from "@/template-sources/noi_that_20/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-xl sm:text-2xl font-medium uppercase tracking-wide text-zinc-800">
        {title}
      </h2>
      <div className="w-16 border-b border-dashed border-gray-300 mx-auto mt-2" />
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: NoiThat20Data = adaptClonedTemplateData(
    noiThat20DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [selectedProductModal, setSelectedProductModal] =
    useState<NoiThat20Product | null>(null);
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    sizeNote: "Kích thước chuẩn 1m8 x 2m",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const bedProducts = data.products.filter((p) => p.section === "beds");
  const bunkBedProducts = data.products.filter((p) => p.section === "bunkbeds");
  const accessoryProducts = data.products.filter(
    (p) => p.section === "accessories"
  );

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "contact@sleepwell.vn";

  const openOrder = (p: NoiThat20Product) => {
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
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-[#00b5ad] selection:text-white">
      {/* 1. CLEAN WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="#trang-chu"
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className="w-6 h-6 bg-zinc-800 flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-[#00b5ad] block" />
            </div>
            <div className="leading-none">
              <span className="block text-lg font-black tracking-wider text-zinc-800 uppercase">
                {data.business.name.split(" ")[0] || "MONA"}
              </span>
              <span className="block text-[8px] font-bold tracking-[0.28em] text-zinc-400 uppercase">
                FURNITURE
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[11.5px] font-medium uppercase tracking-wider text-zinc-600">
            <a
              href="#ve-chung-toi"
              className="hover:text-[#00b5ad] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#giuong-ngu"
              className="hover:text-[#00b5ad] transition-colors"
            >
              GIƯỜNG NGỦ
            </a>
            <a
              href="#giuong-tang"
              className="hover:text-[#00b5ad] transition-colors"
            >
              GIƯỜNG TẦNG
            </a>
            <a
              href="#phu-kien"
              className="hover:text-[#00b5ad] transition-colors"
            >
              PHỤ KIỆN
            </a>
            <a
              href="#thong-tin"
              className="hover:text-[#00b5ad] transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#00b5ad] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          <div className="flex items-center gap-4 text-zinc-700">
            <a
              href="#giuong-ngu"
              aria-label="Tìm kiếm"
              className="hover:text-[#00b5ad] transition-colors"
            >
              <Search className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => openOrder(bedProducts[0])}
              aria-label="Tài khoản"
              className="hover:text-[#00b5ad] transition-colors cursor-pointer"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => openOrder(bedProducts[0])}
              aria-label="Giỏ hàng"
              className="relative hover:text-[#00b5ad] transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-[#00b5ad] text-white text-[8px] font-bold flex items-center justify-center">
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

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2 text-xs font-bold uppercase tracking-wider">
            <a
              href="#giuong-ngu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#00b5ad]"
            >
              GIƯỜNG NGỦ
            </a>
            <a
              href="#giuong-tang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              GIƯỜNG TẦNG
            </a>
            <a
              href="#phu-kien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              PHỤ KIỆN PHÒNG NGỦ
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
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. MASTER BEDROOM HERO (SILK BED LINEN) */}
      <section
        id="trang-chu"
        className="relative min-h-[420px] md:min-h-[500px] bg-zinc-100 flex flex-col justify-between overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/35" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-12 md:pt-16 text-center space-y-2.5">
          <h1 className="text-3xl sm:text-5xl font-normal tracking-wide uppercase">
            <span className="text-[#14b8a6]">
              {data.hero.eyebrow || "SILK"}{" "}
            </span>
            <span className="text-zinc-900">{data.hero.title}</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600">
            {data.hero.subtitle}
          </p>
          <div className="pt-2">
            <a
              href={data.hero.ctaLink || "#giuong-ngu"}
              className="inline-block bg-[#00b5ad] hover:bg-[#00968f] text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-xs transition-colors shadow-xs"
            >
              {data.hero.ctaText || "MUA NGAY"}
            </a>
          </div>
        </div>

        {/* Bottom Slider Bar Indicators */}
        <div className="relative z-10 pb-5 flex justify-center gap-2">
          <span className="w-8 h-0.5 bg-white" />
          <span className="w-8 h-0.5 bg-white/50" />
        </div>
      </section>

      {/* 3. "GIƯỜNG NGỦ" (4-COLUMN ROW) */}
      <section id="giuong-ngu" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 relative">
          <SectionTitle title="GIƯỜNG NGỦ" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bedProducts.map((product, idx) => (
              <div
                key={product.id}
                onClick={() => openOrder(product)}
                className={`group text-center cursor-pointer p-2 transition-all ${
                  idx === 3
                    ? "border border-dashed border-gray-300"
                    : "border border-transparent hover:border-gray-200"
                }`}
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-100 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {idx === 3 && (
                    <span className="absolute bottom-2.5 left-2.5 w-7 h-7 border border-[#00b5ad] text-[#00b5ad] bg-white/90 flex items-center justify-center">
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
                <p className="text-[9px] font-semibold uppercase tracking-widest text-zinc-400">
                  {product.category}
                </p>
                <h3 className="text-xs font-medium text-zinc-700 group-hover:text-[#00b5ad] transition-colors mt-1 mb-1.5 line-clamp-2 min-h-[32px] px-2">
                  {product.name}
                </h3>
                <p className="text-xs font-bold text-zinc-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DARK PARALLAX 3-COLUMN PERKS BANNER */}
      <section
        id="ve-chung-toi"
        className="relative py-14 bg-zinc-800 text-white overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
          alt="Ưu đãi SleepWell"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {data.perks.map((perk) => (
              <div
                key={perk.id}
                className="flex flex-col items-center space-y-2"
              >
                <div className="text-white mb-1">
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

      {/* 5. "GIƯỜNG TẦNG" (4-COLUMN ROW) */}
      <section id="giuong-tang" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="GIƯỜNG TẦNG" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bunkBedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => openOrder(product)}
                className="group text-center cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-zinc-100 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[9px] font-semibold uppercase tracking-widest text-zinc-400">
                  {product.category}
                </p>
                <h3 className="text-xs font-medium text-zinc-700 group-hover:text-[#00b5ad] transition-colors mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-xs font-bold text-zinc-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH 3-TILE PROMO STRIP */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3">
        {/* Tile 1: Finish the look with BEDDING */}
        <div className="relative h-64 overflow-hidden bg-zinc-100 flex items-center">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=700&q=80"
            alt="Chăn ga gối"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-white/95 px-6 py-4 shadow-md">
            <p className="text-xs font-bold text-zinc-800">
              Hoàn thiện phòng ngủ cùng
            </p>
            <p className="text-2xl font-black text-[#e11d48] tracking-tight uppercase">
              BEDDING
            </p>
          </div>
        </div>

        {/* Tile 2: SILK BEDDING SETS 20% OFF */}
        <div className="relative h-64 overflow-hidden bg-zinc-800 flex flex-col items-center justify-start pt-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=700&q=80"
            alt="Silk Bedding Sets"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-white/85 px-6 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-700">
              SILK BEDDING SETS
            </p>
            <p className="text-2xl font-black text-[#e11d48] leading-tight">
              20% OFF
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
              HOME DECOR
            </p>
          </div>
        </div>

        {/* Tile 3: TOP BRAND MATTRESSES */}
        <div className="relative h-64 overflow-hidden bg-zinc-100 flex flex-col items-center justify-start pt-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80"
            alt="Nệm cao cấp"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 bg-white/90 px-5 py-2.5 shadow-xs">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">
              THƯƠNG HIỆU HÀNG ĐẦU
            </p>
            <p className="text-xl font-serif font-bold text-[#e11d48] tracking-wide">
              MATTRESSES
            </p>
            <span className="inline-block mt-1 bg-[#00b5ad] text-white text-[10px] font-bold px-3 py-0.5 uppercase">
              ƯU ĐÃI TỪ 2.990K
            </span>
          </div>
        </div>
      </section>

      {/* 7. "PHỤ KIỆN" (4-COLUMN BEDDING & MATTRESS ROW) */}
      <section id="phu-kien" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="PHỤ KIỆN" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessoryProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => openOrder(product)}
                className="group text-center cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-zinc-100 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[9px] font-semibold uppercase tracking-widest text-zinc-400">
                  {product.category}
                </p>
                <h3 className="text-xs font-medium text-zinc-700 group-hover:text-[#00b5ad] transition-colors mt-1 mb-2 line-clamp-2 min-h-[32px] px-2">
                  {product.name}
                </h3>
                <p className="text-xs font-bold text-zinc-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "THÔNG TIN HỮU ÍCH" (3 BLOG CARDS WITH TEAL ĐỌC THÊM LINKS) */}
      <section id="thong-tin" className="py-10 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="THÔNG TIN HỮU ÍCH" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-zinc-100 mb-3.5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-bold uppercase text-zinc-800 group-hover:text-[#00b5ad] transition-colors line-clamp-1 mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <div>
                  <a
                    href="#lien-he"
                    className="text-[10px] font-bold uppercase tracking-wider text-[#00b5ad] hover:underline"
                  >
                    ĐỌC THÊM
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DARK BEDROOM BOTTOM CTA BANNER + CLEAN WHITE 3-COLUMN FOOTER */}
      <section className="relative py-20 bg-zinc-900 text-white text-center overflow-hidden">
        <img
          src={data.bottomBanner.backgroundImage}
          alt={data.bottomBanner.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-normal uppercase tracking-wide">
            {data.bottomBanner.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {data.bottomBanner.subtitle}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openOrder(bedProducts[0])}
              className="bg-[#00b5ad] hover:bg-[#00968f] text-white text-xs font-bold uppercase tracking-wider px-7 py-2.5 rounded-xs transition-colors cursor-pointer"
            >
              {data.bottomBanner.ctaText}
            </button>
          </div>
        </div>
      </section>

      {/* 3-Column White Footer */}
      <footer id="lien-he" className="bg-white pt-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-xs text-zinc-500">
            {/* Col 1: Brand + About */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-zinc-800 flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#00b5ad] block" />
                </div>
                <div className="leading-none">
                  <span className="block text-base font-black tracking-wider text-zinc-800 uppercase">
                    {data.business.name.split(" ")[0] || "MONA"}
                  </span>
                  <span className="block text-[7px] font-bold tracking-[0.28em] text-zinc-400 uppercase">
                    FURNITURE
                  </span>
                </div>
              </div>
              <p className="leading-relaxed">{data.business.aboutText[0]}</p>
              <div className="flex items-center gap-2 pt-1 text-zinc-500">
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00b5ad] hover:text-[#00b5ad]"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00b5ad] hover:text-[#00b5ad]"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00b5ad] hover:text-[#00b5ad]"
                >
                  <Video className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Col 2: VỀ CHÚNG TÔI */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-bold uppercase text-zinc-800 mb-3">
                VỀ CHÚNG TÔI
              </h4>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-700 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-700 shrink-0" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-700 shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>

            {/* Col 3: ĐĂNG KÝ NHẬN TIN */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase text-zinc-800 mb-3">
                ĐĂNG KÝ NHẬN TIN
              </h4>
              {newsletterSent ? (
                <div className="text-xs font-bold text-[#00b5ad] py-2">
                  Cảm ơn bạn đã đăng ký nhận bản tin từ {data.business.name}!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newsletterEmail.trim()) return;
                    setNewsletterSent(true);
                  }}
                  className="flex items-stretch"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 border border-gray-200 px-3.5 py-2 text-xs text-zinc-700 focus:outline-none focus:border-[#00b5ad]"
                  />
                  <button
                    type="submit"
                    className="bg-zinc-700 hover:bg-[#00b5ad] text-white text-[11px] font-bold uppercase px-5 py-2 ml-1.5 transition-colors cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Bạn có thể hủy đăng ký bất cứ lúc nào. Thông tin liên hệ của bạn
                được bảo mật tuyệt đối.
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
            <div className="bg-[#00b5ad] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Đặt Mua Sản Phẩm — {data.business.name}
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
                  <CheckCircle2 className="w-12 h-12 text-[#00b5ad] mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">
                    Đặt hàng thành công!
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Cảm ơn <strong>{orderForm.name}</strong>. Chuyên viên nội
                    thất phòng ngủ của <strong>{data.business.name}</strong> sẽ
                    gọi lại số <strong>{orderForm.phone}</strong> ngay.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(null)}
                    className="bg-[#00b5ad] text-white text-xs font-bold px-6 py-2"
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
                      <p className="font-bold text-[#00b5ad] mt-0.5">
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
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#00b5ad]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    value={orderForm.phone}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#00b5ad]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#00b5ad] hover:bg-[#00968f] text-white font-bold uppercase tracking-wider py-2.5 cursor-pointer"
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
