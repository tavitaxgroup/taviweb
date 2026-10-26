"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Truck,
  Gift,
  PhoneCall,
  Star,
  Send,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym14DefaultData,
  type Gym14Data,
  type Gym14WatchProduct
} from "@/template-sources/phong_gym_14/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function DarkTargetHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white mb-2.5">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <span className="w-8 h-px bg-white/30" />
        <span className="w-3.5 h-3.5 rounded-full border-2 border-[#e52222] flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
        </span>
        <span className="w-8 h-px bg-white/30" />
      </div>
    </div>
  );
}

function WatchProductCard({
  watch,
  onAdd
}: {
  watch: Gym14WatchProduct;
  onAdd: (name: string) => void;
}) {
  return (
    <div className="text-center group flex flex-col justify-between">
      <div>
        <div className="relative h-56 sm:h-60 overflow-hidden mb-4 flex items-center justify-center bg-[#151515] rounded-xs border border-white/5">
          <img
            src={watch.image}
            alt={watch.code}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {watch.discountBadge && (
            <span className="absolute top-2.5 left-2.5 bg-[#e52222] text-white text-[10px] font-extrabold px-2 py-1 rounded-xs shadow">
              {watch.discountBadge}
            </span>
          )}
        </div>

        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 group-hover:text-[#e52222] transition-colors mb-1">
          {watch.code}
        </h3>

        <div className="text-xs mb-3.5 space-x-1.5">
          {watch.oldPrice && (
            <span className="line-through text-gray-500 text-[11px]">
              {watch.oldPrice}
            </span>
          )}
          <span className="font-extrabold text-white">{watch.price}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onAdd(`${watch.code} (${watch.price})`)}
        className="bg-[#444444] hover:bg-[#e52222] text-white text-[10px] font-extrabold uppercase tracking-wider px-4 py-2 mx-auto transition-colors cursor-pointer"
      >
        THÊM VÀO GIỎ
      </button>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Gym14Data = adaptClonedTemplateData(
    phongGym14DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedWatch, setLastAddedWatch] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@gwatchsport.vn";

  const handleAddToCart = (watchLabel: string) => {
    setCartCount((c) => c + 1);
    setLastAddedWatch(watchLabel);
    setTimeout(() => {
      setLastAddedWatch(null);
    }, 2600);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-[#e52222] selection:text-white">
      {/* Floating Cart Toast */}
      {lastAddedWatch && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#1f1f1f] text-white px-4 py-3 shadow-2xl border-l-4 border-[#e52222] flex items-center gap-2.5 text-xs">
          <CheckCircle2 className="w-4 h-4 text-[#e52222] shrink-0" />
          <span>
            Đã thêm <strong>{lastAddedWatch}</strong> vào giỏ hàng ({cartCount})
          </span>
        </div>
      )}

      {/* 1. TOP DARK MICRO BAR + CENTER-LOGO DARK NAVBAR */}
      <div className="bg-[#080808] border-b border-white/10 py-1.5 text-[10px] text-gray-300">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#e52222]" />
            <span>SHOP: {data.business.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#e52222]" />
              HOTLINE: <strong className="text-white">{primaryPhone}</strong>
            </span>
            <a href="#lien-he" className="hover:text-[#e52222] border-l border-white/20 pl-3">
              Đăng nhập / Đăng ký
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-extrabold uppercase tracking-wider">
            <a href="#trang-chu" className="text-[#e52222]">
              TRANG CHỦ
            </a>
            <a href="#danh-muc" className="text-white/90 hover:text-[#e52222] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#san-pham-giam-gia"
              className="text-white/90 hover:text-[#e52222] transition-colors inline-flex items-center gap-1"
            >
              SHOP <ChevronDown className="w-3 h-3 opacity-75" />
            </a>
            <a href="#tin-tuc" className="text-white/90 hover:text-[#e52222] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="text-white/90 hover:text-[#e52222] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Center M-WATCH / G-WATCH Logo */}
          <a href="#trang-chu" className="flex items-center gap-1 shrink-0">
            <span className="text-3xl sm:text-4xl font-black tracking-tighter bg-gradient-to-tr from-[#e52222] via-[#e52222] to-white bg-clip-text text-transparent leading-none">
              G
            </span>
            <div className="leading-none">
              <span className="block text-base sm:text-lg font-extrabold tracking-widest text-white uppercase border-b-2 border-[#e52222] pb-0.5">
                -WATCH
              </span>
              <span className="block text-[9px] text-gray-400 tracking-wider mt-0.5">
                {data.business.name}
              </span>
            </div>
          </a>

          {/* Right Search + Cart */}
          <div className="hidden sm:flex items-center gap-4">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white/10 border border-white/20 rounded-full h-8 px-3 w-44 lg:w-52"
            >
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full bg-transparent text-xs text-white placeholder:text-gray-400 focus:outline-none"
              />
              <Search className="w-3.5 h-3.5 text-gray-300 shrink-0" />
            </form>

            <button
              type="button"
              className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white hover:text-[#e52222] cursor-pointer"
            >
              <span>GIỎ HÀNG</span>
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#e52222]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#e52222] text-white text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#e52222]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#181818] border-t border-white/10 px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#e52222]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#danh-muc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              DANH MỤC
            </a>
            <a
              href="#san-pham-giam-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              SẢN PHẨM GIẢM GIÁ
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              TIN TỨC
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

      {/* 2. DARK TACTICAL SPORT WATCH HERO */}
      <section
        id="trang-chu"
        className="relative h-[440px] sm:h-[520px] w-full overflow-hidden flex items-center"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-md">
            <h1 className="text-3xl sm:text-5xl font-black uppercase leading-tight text-[#e52222] mb-3">
              <span className="block">{data.heroTitleLine1 || "G-SHOCK"}</span>
              <span className="block">{data.heroTitleLine2 || "VIỆT NAM"}</span>
            </h1>
            <p className="text-sm sm:text-base font-bold text-white leading-snug mb-6">
              {data.hero.subtitle}
            </p>
            <a
              href={data.hero.ctaLink || "#san-pham-giam-gia"}
              className="inline-block bg-[#e52222] hover:bg-[#c41919] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 shadow-lg transition-colors"
            >
              {data.hero.ctaText || "MUA NGAY"}
            </a>
          </div>
        </div>

        {/* Bottom Slider Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
        </div>
      </section>

      {/* 3. 3-COLUMN DARK RED-ICON TRUST STRIP */}
      <section className="py-10 bg-[#121212] border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#e52222] text-[#e52222] flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <span className="text-sm sm:text-base font-bold text-white">
              Phục vụ 24/7
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#e52222] text-[#e52222] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <span className="text-sm sm:text-base font-bold text-white">
              Giao hàng tận nơi
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#e52222] text-[#e52222] flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <span className="text-sm sm:text-base font-bold text-white">
              Miễn phí vận chuyển
            </span>
          </div>
        </div>
      </section>

      {/* 4. DANH MỤC SẢN PHẨM (4 WATCH CATEGORIES) */}
      <section id="danh-muc" className="py-14 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-4">
          <DarkTargetHeading title="DANH MỤC SẢN PHẨM" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {(
              data.watchCategories || phongGym14DefaultData.watchCategories
            ).map((cat) => (
              <a
                key={cat.id}
                href="#san-pham-giam-gia"
                className="group block"
              >
                <div className="h-56 overflow-hidden mb-3 bg-[#151515] rounded-xs border border-white/5 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-white group-hover:text-[#e52222] transition-colors">
                  {cat.name}
                </h3>
                <span className="block text-[10px] uppercase text-gray-400 mt-0.5">
                  {cat.countText}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SẢN PHẨM GIẢM GIÁ */}
      <section id="san-pham-giam-gia" className="py-14 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-4">
          <DarkTargetHeading title="SẢN PHẨM GIẢM GIÁ" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {(data.saleWatches || phongGym14DefaultData.saleWatches).map((w) => (
              <WatchProductCard
                key={w.id}
                watch={w}
                onAdd={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. SẢN PHẨM NỔI BẬT */}
      <section className="py-14 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-4">
          <DarkTargetHeading title="SẢN PHẨM NỔI BẬT" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {(
              data.featuredWatches || phongGym14DefaultData.featuredWatches
            ).map((w) => (
              <WatchProductCard
                key={w.id}
                watch={w}
                onAdd={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIN TỨC SỰ KIỆN (3 DARK GRAY BLOG CARDS) */}
      <section id="tin-tuc" className="py-14 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-4">
          <DarkTargetHeading title="TIN TỨC SỰ KIỆN" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || phongGym14DefaultData.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-[#2b2b2b] rounded-md overflow-hidden group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="h-44 overflow-hidden bg-black">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xs sm:text-sm text-white group-hover:text-[#e52222] transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-gray-300 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <a
                      href="#lien-he"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-white hover:text-[#e52222]"
                    >
                      <span>Đọc Thêm</span>
                      <ChevronRight className="w-3 h-3 text-[#e52222]" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEEDBACK TỪ KHÁCH HÀNG (3 CIRCULAR AVATARS + 5 RED STARS) */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-4">
          <DarkTargetHeading title="FEEDBACK TỪ KHÁCH HÀNG" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {(
              data.testimonials || phongGym14DefaultData.testimonials || []
            ).map((fb) => (
              <div key={fb.id} className="flex flex-col items-center">
                <img
                  src={fb.avatar}
                  alt={fb.author}
                  className="w-20 h-20 rounded-full object-cover border-2 border-white/20 mb-3 shadow-md"
                />
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((st) => (
                    <Star
                      key={st}
                      className="w-3.5 h-3.5 text-[#e52222] fill-[#e52222]"
                    />
                  ))}
                </div>
                <p className="text-xs italic text-gray-300 leading-relaxed mb-3 px-2">
                  {fb.content}
                </p>
                <div className="text-xs text-gray-400">
                  <strong className="text-white">{fb.author}</strong> / {fb.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DARK FOOTER */}
      <footer id="lien-he" className="bg-[#161616] border-t border-white/10 pt-14 pb-10 text-gray-300">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          {/* Col 1 (4 Cols): Logo & Contact */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-3xl font-black tracking-tighter bg-gradient-to-tr from-[#e52222] via-[#e52222] to-white bg-clip-text text-transparent leading-none">
                G
              </span>
              <div className="leading-none">
                <span className="block text-base font-extrabold tracking-widest text-white uppercase border-b-2 border-[#e52222] pb-0.5">
                  -WATCH
                </span>
                <span className="block text-[9px] text-gray-400 mt-0.5">
                  {data.business.name}
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-[11px] text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 2 (2 Cols): MENU */}
          <div className="lg:col-span-2">
            <h4 className="font-extrabold uppercase text-white mb-3">MENU</h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a href="#trang-chu" className="text-[#e52222]">
                  ▸ Trang chủ
                </a>
              </li>
              <li>
                <a href="#danh-muc" className="text-gray-400 hover:text-white">
                  ▸ Giới thiệu
                </a>
              </li>
              <li>
                <a href="#tin-tuc" className="text-gray-400 hover:text-white">
                  ▸ Tin tức
                </a>
              </li>
              <li>
                <a href="#lien-he" className="text-gray-400 hover:text-white">
                  ▸ Liên hệ
                </a>
              </li>
              <li className="text-gray-400">▸ Kiểm tra đơn hàng</li>
              <li className="text-gray-400">▸ Đăng ký Affiliate</li>
            </ul>
          </div>

          {/* Col 3 (2 Cols): SẢN PHẨM */}
          <div className="lg:col-span-2">
            <h4 className="font-extrabold uppercase text-white mb-3">
              SẢN PHẨM
            </h4>
            <ul className="space-y-2 text-[11px] text-gray-400">
              <li>▸ Aviator</li>
              <li>▸ Baby-G</li>
              <li>▸ Edifice</li>
              <li>▸ G-Shock</li>
              <li>▸ G-Steel</li>
              <li>▸ Gravity Master</li>
              <li>▸ Mudmaster</li>
            </ul>
          </div>

          {/* Col 4 (4 Cols): ĐĂNG KÝ */}
          <div className="lg:col-span-4">
            <h4 className="font-extrabold uppercase text-white mb-2">
              ĐĂNG KÝ
            </h4>
            <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">
              Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
            </p>
            {newsletterDone ? (
              <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã đăng ký nhận thông tin thành công!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterDone(true);
                }}
                className="flex items-center bg-white rounded-xs overflow-hidden h-9 mb-5"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email ..."
                  className="w-full px-3 text-xs text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Gửi"
                  className="h-full px-3 text-[#e52222] hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <h5 className="font-extrabold uppercase text-white text-[11px] mb-2">
              KẾT NỐI VỚI CHÚNG TÔI
            </h5>
            <div className="flex items-center gap-2.5">
              {["f", "ig", "tw"].map((s) => (
                <span
                  key={s}
                  className="w-7 h-7 rounded bg-white/10 hover:bg-[#e52222] text-white text-[10px] font-bold flex items-center justify-center transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#090909] py-3 text-center text-[11px] text-gray-500">
        © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
      </div>
    </div>
  );
}

export default DemoTemplateRenderer;
