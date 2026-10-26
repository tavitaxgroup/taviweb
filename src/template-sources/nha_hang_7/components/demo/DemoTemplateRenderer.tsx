"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Search,
  LayoutGrid,
  Wine,
  Grape,
  Cylinder,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Star,
  Play,
  Send,
  ArrowUp,
  Menu,
  X,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaHang7DefaultData,
  type NhaHang7Data,
  type NhaHang7WineProduct
} from "@/template-sources/nha_hang_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NhaHang7Data = adaptClonedTemplateData(
    nhaHang7DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedVoucherCode, setCopiedVoucherCode] = useState<string | null>(
    null
  );
  const [selectedWine, setSelectedWine] =
    useState<NhaHang7WineProduct | null>(null);
  const [orderSent, setOrderSent] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const vouchers = data.vouchers || nhaHang7DefaultData.vouchers || [];
  const craftCards =
    data.craftSection?.cards || nhaHang7DefaultData.craftSection.cards || [];
  const portfolioImages =
    data.portfolioSection?.images ||
    nhaHang7DefaultData.portfolioSection.images ||
    [];
  const wineProducts =
    data.wineProducts || nhaHang7DefaultData.wineProducts || [];
  const statsList = data.stats || nhaHang7DefaultData.stats || [];
  const newsList = data.news || nhaHang7DefaultData.news || [];
  const instagramStrip =
    data.instagramStrip || nhaHang7DefaultData.instagramStrip || [];

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSent(true);
    setTimeout(() => {
      setOrderSent(false);
      setSelectedWine(null);
    }, 2200);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1e232a] font-sans selection:bg-[#a68256] selection:text-white"
    >
      {/* 1. VINEYARD HERO BANNER + TRANSPARENT HEADER (Matches NH007) */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex flex-col justify-between overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.hero.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-black/35" />

        {/* Header */}
        <header className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 flex items-center justify-between text-white">
          <a href="#top" className="flex items-center gap-2">
            <Wine className="w-6 h-6 text-[#d4b07b]" />
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] uppercase">
              {data.business.name.split(" ")[1] || "WINERY"}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-white/90">
            <a
              href="#top"
              className="text-white border-b border-white pb-0.5"
            >
              Trang chủ
            </a>
            <a href="#about" className="hover:text-[#d4b07b] transition-colors">
              Giới thiệu
            </a>
            <a
              href="#wine-shop"
              className="hover:text-[#d4b07b] transition-colors"
            >
              Cửa hàng
            </a>
            <a href="#craft" className="hover:text-[#d4b07b] transition-colors">
              Dịch vụ
            </a>
            <a href="#news" className="hover:text-[#d4b07b] transition-colors">
              Blog
            </a>
            <a
              href="#newsletter"
              className="hover:text-[#d4b07b] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center gap-4 text-white">
            <button
              type="button"
              onClick={() => setSelectedWine(wineProducts[0])}
              aria-label="Giỏ hàng"
              className="hover:text-[#d4b07b]"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <a
              href="#wine-shop"
              aria-label="Tìm kiếm"
              className="hover:text-[#d4b07b]"
            >
              <Search className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="hover:text-[#d4b07b]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <LayoutGrid className="w-4 h-4" />
              )}
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden relative z-30 bg-[#181b20]/95 text-white px-6 py-4 space-y-2.5 text-xs border-t border-white/10">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#d4b07b] font-bold"
            >
              Trang chủ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Thế giới rượu vang
            </a>
            <a
              href="#wine-shop"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Bộ sưu tập rượu vang
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tin tức & Hầm rượu
            </a>
          </div>
        )}

        {/* Center Hero Typography */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white my-auto py-12">
          <p className="text-xs sm:text-sm font-medium text-white/90 mb-2 tracking-wide">
            {data.hero.eyebrow}
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide mb-7 drop-shadow">
            {data.hero.title}
          </h1>
          <a
            href={data.hero.ctaLink || "#wine-shop"}
            className="inline-block bg-[#567c39] hover:bg-[#45662c] text-white text-xs font-semibold px-7 py-2.5 rounded-full shadow-md transition-colors"
          >
            {data.hero.ctaText || "Khám Phá Ngay"}
          </a>
        </div>

        {/* Scroll Down */}
        <div className="relative z-10 pb-6 text-center">
          <a
            href="#vouchers"
            className="inline-block text-white/85 hover:text-white text-[11px]"
          >
            Cuộn Xuống
          </a>
        </div>
      </section>

      {/* 2. FOUR PERFORATED GOLD VOUCHER TICKETS */}
      <section id="vouchers" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vouchers.map((vc) => {
              const isCopied = copiedVoucherCode === vc.code;
              return (
                <div
                  key={vc.id}
                  onClick={() => setCopiedVoucherCode(vc.code)}
                  className="relative bg-[#a88455] text-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-0.5 transition-transform"
                >
                  {/* Side Perforation Cutouts */}
                  <span className="absolute left-0 bottom-9 -ml-2.5 w-5 h-5 rounded-full bg-white" />
                  <span className="absolute right-0 bottom-9 -mr-2.5 w-5 h-5 rounded-full bg-white" />

                  <div className="p-4 text-center border-b border-white/25">
                    <div className="text-xs font-extrabold uppercase tracking-wider">
                      {vc.title}
                    </div>
                  </div>

                  <div className="px-4 py-3 text-[11px] space-y-0.5 border-b border-dashed border-white/40">
                    <div>{vc.billText}</div>
                    <div className="font-semibold">{vc.discountText}</div>
                  </div>

                  <div className="px-4 py-2.5 flex items-center justify-between text-[10px] text-white/90">
                    <span className="font-mono font-bold">
                      {isCopied ? "ĐÃ SAO CHÉP!" : vc.code}
                    </span>
                    <span>{vc.validDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ĐỒ UỐNG TUYỆT VỜI: CHÚNG TÔI CUNG CẤP NHỮNG CHAI RƯỢU CAO CẤP */}
      <section id="about" className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Sommelier Wine Glass Image */}
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden shadow-md bg-slate-100">
              <img
                src={data.fineDrinkSection.leftPortraitImage}
                alt={data.fineDrinkSection.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Copy + Vineyard Image */}
          <div className="md:col-span-7 space-y-8">
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                {data.fineDrinkSection.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1e232a] leading-snug mb-3">
                {data.fineDrinkSection.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {data.fineDrinkSection.description}
              </p>
            </div>

            <div className="aspect-[16/10] overflow-hidden shadow-md bg-slate-100">
              <img
                src={data.fineDrinkSection.rightVineyardImage}
                alt="Vườn nho hữu cơ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHÚNG TÔI LÀ: NHÀ MÁY RƯỢU CỔ ĐIỂN DỰA TRÊN KỸ THUẬT TRUYỀN THỐNG */}
      <section id="craft" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1.5">
              {data.craftSection.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1e232a] leading-snug">
              {data.craftSection.title}
            </h2>
            <ChevronDown className="w-4 h-4 text-slate-400 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {craftCards.map((card) => (
              <div
                key={card.id}
                className="border border-slate-100 bg-white p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-amber-50/70 text-[#a88455] flex items-center justify-center mx-auto mb-4">
                  {card.icon === "grape" && <Grape className="w-6 h-6 stroke-[1.5]" />}
                  {card.icon === "barrel" && (
                    <Cylinder className="w-6 h-6 stroke-[1.5]" />
                  )}
                  {card.icon === "bottle" && <Wine className="w-6 h-6 stroke-[1.5]" />}
                </div>
                <h3 className="font-serif text-base font-bold text-[#1e232a] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-5">
                  {card.description}
                </p>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 mx-auto" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#wine-shop"
              className="inline-block bg-[#9c7a4c] hover:bg-[#84653c] text-white text-xs font-medium px-7 py-2.5 rounded-full transition-colors"
            >
              Thêm thông tin
            </a>
          </div>
        </div>
      </section>

      {/* 5. DANH MỤC ĐẦU TƯ: HÃY NHÌN VÀO CÔNG VIỆC + 4-PHOTO CELLAR STRIP */}
      <section className="pt-12 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">
                {data.portfolioSection.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1e232a] leading-tight">
                {data.portfolioSection.title}
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {data.portfolioSection.description}
              </p>
            </div>
            <div className="md:col-span-2 flex items-center md:justify-end gap-2">
              <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500">
                <ChevronLeft className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500">
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-3">
          {portfolioImages.map((img, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden bg-slate-900 group"
            >
              <img
                src={img}
                alt={`Hầm rượu ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 6. CHUYẾN THAM QUAN QUOTE + 4 WINE BOTTLE PRODUCT CARDS */}
      <section id="wine-shop" className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Quote */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
              {data.tourQuote.eyebrow}
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1e232a] leading-snug mb-4">
              {data.tourQuote.quote}{" "}
              <span className="underline decoration-1 underline-offset-4">
                {data.tourQuote.highlightWord}
              </span>
              .
            </h2>
            <div className="text-xs font-bold text-slate-700">
              {data.tourQuote.author}
            </div>
            <div className="text-[10px] text-slate-400">
              {data.tourQuote.role}
            </div>
          </div>

          {/* 4 Wine Bottle Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {wineProducts.map((wine) => (
              <div
                key={wine.id}
                onClick={() => setSelectedWine(wine)}
                className="relative bg-white p-5 text-center shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-all cursor-pointer group"
              >
                {wine.discountBadge && (
                  <span className="absolute top-3 left-3 z-10 bg-[#a88455] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    {wine.discountBadge}
                  </span>
                )}

                <div className="aspect-[3/4] overflow-hidden bg-white mb-4 flex items-center justify-center">
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-serif text-xs font-bold text-[#1e232a] mb-1 group-hover:text-[#a88455]">
                  {wine.name}
                </h3>

                <div className="text-[11px] text-slate-500 mb-1.5">
                  {wine.oldPrice && (
                    <span className="line-through text-slate-300 mr-1.5">
                      {wine.oldPrice}
                    </span>
                  )}
                  <span className="font-semibold text-slate-700">
                    {wine.price}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-0.5 text-amber-400">
                  {[...Array(wine.rating || 5)].map((_, s) => (
                    <Star key={s} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setSelectedWine(wineProducts[0])}
              className="bg-[#0b132b] hover:bg-[#1c2541] text-white text-xs font-medium px-8 py-2.5 rounded-full transition-colors"
            >
              Đến cửa hàng
            </button>
          </div>
        </div>
      </section>

      {/* 7. DECANTER POURING VIDEO BANNER + 4 WATERMARK NUMBER STATS */}
      <section className="bg-white">
        <div className="relative h-[280px] sm:h-[380px] overflow-hidden flex items-center justify-center">
          <img
            src={data.decanterVideoImage}
            alt="Rót rượu vang Decanter"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <button
            type="button"
            onClick={() => setSelectedWine(wineProducts[0])}
            aria-label="Xem video hầm rượu"
            className="relative z-10 w-16 h-16 rounded-full border border-white/80 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-transform hover:scale-110"
          >
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </button>
        </div>

        {/* 4 Watermark Number Stats */}
        <div className="max-w-4xl mx-auto px-4 py-14 border-b border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-slate-100">
            {statsList.slice(0, 4).map((st) => (
              <div
                key={st.id}
                className="relative py-4 text-center flex items-center justify-center"
              >
                <span className="font-serif text-5xl sm:text-6xl text-slate-100 select-none pointer-events-none">
                  {st.number}
                </span>
                <span className="absolute text-xs font-serif font-bold text-[#1e232a]">
                  {st.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TIN TỨC & BÀI VIẾT MỚI NHẤT */}
      <section id="news" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">
              TIN TỨC
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1e232a]">
              Tin tức & bài viết mới nhất
            </h2>
            <ChevronDown className="w-4 h-4 text-slate-400 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-3.5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[9px] uppercase tracking-wider text-slate-400 mb-1.5">
                  —{" "}
                  <strong className="text-slate-700">
                    {post.category || "WINE HISTORY"}
                  </strong>{" "}
                  • {post.date}
                </div>
                <h3 className="font-serif text-sm font-bold text-[#1e232a] leading-snug group-hover:text-[#a88455] transition-colors">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER + 6-PHOTO INSTAGRAM STRIP + FOOTER */}
      <footer id="newsletter" className="bg-[#f7f7f5] pt-14 text-slate-600">
        {/* Newsletter Block */}
        <div className="max-w-xl mx-auto px-4 text-center mb-12">
          <Wine className="w-6 h-6 text-slate-700 mx-auto mb-3 stroke-[1.5]" />
          <h3 className="font-serif text-xl sm:text-2xl text-[#1e232a] leading-snug mb-6">
            Nhận những tin tức mới nhất <br />
            vào hộp thư của bạn
          </h3>

          {newsletterSent ? (
            <div className="text-xs font-semibold text-[#567c39] py-2">
              Cảm ơn quý khách đã đăng ký bản tin Sommelier của {data.business.name}!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSent(true);
                setNewsletterEmail("");
              }}
              className="space-y-3"
            >
              <div className="flex bg-white rounded-full p-1 shadow-sm border border-slate-200/80 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập địa chỉ Email của bạn..."
                  className="flex-1 px-4 py-2 text-xs bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100 flex items-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  <span>ĐĂNG KÝ</span>
                </button>
              </div>
              <label className="inline-flex items-center gap-1.5 text-[10px] text-slate-400">
                <input type="checkbox" defaultChecked className="accent-[#a88455]" />
                <span>
                  Tôi đồng ý với <span className="underline">Chính sách bảo mật</span>.
                </span>
              </label>
            </form>
          )}
        </div>

        {/* 6-Photo Horizontal Strip */}
        <div className="max-w-4xl mx-auto px-4 mb-10">
          <div className="grid grid-cols-3 sm:grid-cols-6">
            {instagramStrip.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-slate-200">
                <img
                  src={img}
                  alt={`Vineyard ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-5xl mx-auto px-4 py-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-slate-900">{data.business.name}</strong>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#top" className="hover:text-slate-900">
              Trang chủ
            </a>
            <a href="#about" className="hover:text-slate-900">
              Giới thiệu
            </a>
            <a href="#wine-shop" className="hover:text-slate-900">
              Cửa hàng
            </a>
            <a href="#craft" className="hover:text-slate-900">
              Dịch vụ
            </a>
            <a href="#news" className="hover:text-slate-900">
              Blog
            </a>
          </div>

          <div className="flex items-center gap-3 text-slate-700 font-bold">
            <a href="#top">f</a>
            <a href="#top">tw</a>
            <a href="#top">ig</a>
            <a href="#top">▶</a>
          </div>
        </div>
      </footer>

      {/* WINE RESERVATION / PURCHASE MODAL */}
      {selectedWine && (
        <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedWine(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSent ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#567c39] mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                  Đặt rượu & Bàn thưởng thức thành công!
                </h3>
                <p className="text-xs text-slate-500">
                  Chuyên gia Sommelier của {data.business.name} sẽ liên hệ xác nhận ngay.
                </p>
              </div>
            ) : (
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedWine.image}
                    alt={selectedWine.name}
                    className="w-16 h-20 object-cover rounded border border-slate-100"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#a88455]">
                      {selectedWine.vintageNote}
                    </span>
                    <h3 className="font-serif text-base font-bold text-slate-900">
                      {selectedWine.name}
                    </h3>
                    <div className="text-xs font-extrabold text-[#567c39] mt-0.5">
                      {selectedWine.price}
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên quý khách"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#a88455]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại nhận tư vấn Sommelier"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#a88455]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0b132b] hover:bg-[#567c39] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-colors"
                >
                  XÁC NHẬN ĐẶT MUA / GIỮ BÀN HẦM RƯỢU
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
