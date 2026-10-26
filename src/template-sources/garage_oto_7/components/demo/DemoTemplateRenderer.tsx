"use client";

import React, { useState } from "react";
import {
  User,
  Search,
  ShoppingBag,
  Star,
  Award,
  Medal,
  Compass,
  Menu,
  X,
  CheckCircle2,
  ChevronUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto7DefaultData,
  type GarageOto7Data,
  type GarageOto7Product
} from "@/template-sources/garage_oto_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: GarageOto7Data = adaptClonedTemplateData(
    garageOto7DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(
    data.categoryTabs?.[0] || "XE ĐẠP LEO NÚI"
  );
  const [cartCount, setCartCount] = useState(0);
  const [selectedVehicle, setSelectedVehicle] =
    useState<GarageOto7Product | null>(null);
  const [bookingSent, setBookingSent] = useState(false);

  const categoryTabs =
    data.categoryTabs || garageOto7DefaultData.categoryTabs || [];
  const allProducts = data.products || garageOto7DefaultData.products || [];
  const valuePillars =
    data.valuePillars || garageOto7DefaultData.valuePillars || [];
  const articles = data.articles || garageOto7DefaultData.articles || [];

  const handleBookVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    setCartCount((c) => c + 1);
    setBookingSent(true);
    setTimeout(() => {
      setBookingSent(false);
      setSelectedVehicle(null);
    }, 2200);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#009688] selection:text-white"
    >
      {/* 1. MINIMALIST WHITE HEADER WITH TEAL TOP ACTIVE INDICATOR (Matches OTO007) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left Circular Sport Crest Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full border-2 border-[#009688] bg-teal-50/50 flex flex-col items-center justify-center leading-none">
              <Compass className="w-5 h-5 text-[#009688]" />
              <span className="text-[7px] font-black uppercase tracking-wider text-slate-900 mt-0.5">
                MOTOR
              </span>
            </div>
            <span className="hidden sm:inline-block text-sm font-black uppercase tracking-wider text-slate-900">
              {data.business.name}
            </span>
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-bold uppercase tracking-wider text-slate-600 h-full">
            <a
              href="#top"
              className="h-full flex items-center text-[#009688] border-t-2 border-[#009688]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#about"
              className="h-full flex items-center hover:text-[#009688] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#popular-vehicles"
              className="h-full flex items-center hover:text-[#009688] transition-colors"
            >
              SHOP
            </a>
            <a
              href="#blog"
              className="h-full flex items-center hover:text-[#009688] transition-colors"
            >
              BLOG
            </a>
            <a
              href="#values"
              className="h-full flex items-center hover:text-[#009688] transition-colors"
            >
              CÂU HỎI THƯỜNG GẶP
            </a>
            <a
              href="#footer"
              className="h-full flex items-center hover:text-[#009688] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 text-slate-700">
            <a
              href="#footer"
              aria-label="Tài khoản"
              className="hover:text-[#009688] transition-colors"
            >
              <User className="w-4 h-4" />
            </a>
            <a
              href="#popular-vehicles"
              aria-label="Tìm kiếm"
              className="hover:text-[#009688] transition-colors"
            >
              <Search className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setSelectedVehicle(allProducts[0])}
              aria-label="Giỏ hàng"
              className="relative hover:text-[#009688] transition-colors flex items-center gap-1"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-[10px] font-bold text-slate-500">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#009688]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#popular-vehicles"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              XE THỂ THAO PHỔ BIẾN
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              BÀI VIẾT MỚI NHẤT
            </a>
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION WITH GIANT FAINT WATERMARK & SIDE-PROFILE SPORT VEHICLE */}
      <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative">
          {/* Giant Faint Watermark Text */}
          <div className="hidden lg:block absolute top-6 left-1/3 text-[130px] font-black uppercase tracking-tight text-slate-100 select-none pointer-events-none leading-none z-0">
            {data.business.name.split(" ")[0] || "MONA"}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-800">
                {data.hero.eyebrow || "CHỦ ĐỀ THỂ THAO MẠNH MẼ"}
              </div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-950 leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                {data.hero.description}
              </p>
              <div className="pt-2">
                <a
                  href={data.hero.ctaLink || "#popular-vehicles"}
                  className="inline-block bg-[#009688] hover:bg-[#00796b] text-white text-[11px] font-bold uppercase tracking-wider px-7 py-3 transition-colors shadow-sm"
                >
                  {data.hero.ctaText || "MUA NGAY BÂY GIỜ"}
                </a>
              </div>
            </div>

            {/* Right Side-Profile Vehicle Showcase */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-xl aspect-[16/10] overflow-hidden rounded-2xl bg-white flex items-center justify-center">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Slider Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
          </div>
        </div>
      </section>

      {/* 3. VỀ CHÚNG TÔI (Rounded Action Photo Left + Story & Mission Right) */}
      <section id="about" className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 mb-10">
            {data.aboutSection.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Rounded Square Photo */}
            <div className="md:col-span-6">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg bg-slate-100">
                <img
                  src={data.aboutSection.image}
                  alt={data.aboutSection.heading}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Story Copy */}
            <div className="md:col-span-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                {data.aboutSection.intro}
              </p>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  {data.aboutSection.guideTitle}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {data.aboutSection.guideBody}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  {data.aboutSection.goalTitle}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {data.aboutSection.goalBody}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#popular-vehicles"
                  className="inline-block bg-[#009688] hover:bg-[#00796b] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 transition-colors"
                >
                  {data.aboutSection.ctaText || "ĐỌC THÊM"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. XE ĐẠP PHỔ BIẾN (4 Category Tabs + 5-Card Product Grid) */}
      <section id="popular-vehicles" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            Xe Đạp Phổ Biến
          </h2>

          {/* 4 Filter Tabs */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2.5 mb-10">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`text-[10px] font-bold uppercase tracking-wider px-4 py-2 border transition-colors ${
                    isActive
                      ? "bg-[#009688] border-[#009688] text-white"
                      : "bg-white border-[#009688] text-[#009688] hover:bg-teal-50"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 3+2 Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {allProducts.map((prd) => (
              <div
                key={prd.id}
                onClick={() => setSelectedVehicle(prd)}
                className="group cursor-pointer text-center"
              >
                {/* Badges Row */}
                <div className="flex items-center gap-1.5 mb-2 min-h-[20px]">
                  {prd.isNew && (
                    <span className="bg-[#009688] text-white text-[9px] font-bold uppercase px-2 py-0.5">
                      MỚI
                    </span>
                  )}
                  {prd.discountBadge && (
                    <span className="bg-[#ffeb3b] text-slate-900 text-[9px] font-extrabold px-2 py-0.5">
                      {prd.discountBadge}
                    </span>
                  )}
                </div>

                {/* Vehicle Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white mb-3 flex items-center justify-center">
                  <img
                    src={prd.image}
                    alt={prd.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prd.outOfStock && (
                    <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                      <span className="bg-white/95 border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1 rounded shadow-sm">
                        Đặt trước
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#009688] transition-colors mb-1">
                  {prd.name}
                </h3>

                <div className="flex items-center justify-center gap-1.5 text-xs">
                  {prd.oldPrice && (
                    <span className="text-slate-400 line-through text-[11px]">
                      {prd.oldPrice}
                    </span>
                  )}
                  <span className="font-extrabold text-slate-900">
                    {prd.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH ACTION BANNER WITH GIANT TEAL OVERLAY + 3 VALUE PILLARS */}
      <section id="values" className="pt-8 bg-white">
        {/* Full-Width Action Banner */}
        <div className="relative h-72 sm:h-96 overflow-hidden bg-slate-900 flex items-center">
          <img
            src={data.actionBannerImage}
            alt={data.business.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
            <div className="text-5xl sm:text-8xl font-black uppercase leading-[0.95] tracking-tight text-[#009688]/80 select-none">
              {data.business.name.split(" ")[0] || "MONA"} <br />
              MOTOR
            </div>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="max-w-4xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {valuePillars.map((vp) => (
            <div key={vp.id} className="flex flex-col items-center">
              <div className="mb-3 text-slate-900">
                {vp.icon === "star" && (
                  <Star className="w-8 h-8 fill-slate-900 text-slate-900" />
                )}
                {vp.icon === "seal" && <Award className="w-8 h-8" />}
                {vp.icon === "medal" && <Medal className="w-8 h-8" />}
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                {vp.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
                {vp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BÀI VIẾT MỚI NHẤT (3x2 Blog Grid with Teal Category Pills) */}
      <section id="blog" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 mb-10">
            Bài Viết Mới Nhất
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {articles.map((art) => (
              <article key={art.id} className="flex flex-col justify-between group">
                <div>
                  <div className="aspect-square overflow-hidden bg-slate-100 mb-3">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Teal Category Pills */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {art.tags.map((t, i) => (
                      <span
                        key={i}
                        className="bg-[#009688] text-white text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="text-[9px] text-slate-400 uppercase font-medium mb-1">
                    {art.date}
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 line-clamp-2 mb-3 group-hover:text-[#009688] transition-colors">
                    {art.title}
                  </h3>
                </div>

                <div>
                  <a
                    href="#footer"
                    className="inline-block bg-[#009688] hover:bg-[#00796b] text-white text-[10px] font-bold uppercase px-4 py-1.5 transition-colors"
                  >
                    ĐỌC THÊM ≫
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK TIRE-TRACK 4-COLUMN FOOTER */}
      <footer id="footer" className="bg-[#141414] text-slate-300">
        <div className="max-w-4xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Col 1: VỀ CHÚNG TÔI */}
          <div>
            <h4 className="text-xs font-extrabold uppercase text-white mb-4">
              VỀ CHÚNG TÔI
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-5">
              {data.business.aboutText?.[0]}
            </p>
            <div className="flex items-center gap-2">
              {["f", "t", "▶", "ig"].map((soc, i) => (
                <a
                  key={i}
                  href="#top"
                  className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center text-[10px] text-white hover:bg-[#009688] hover:border-[#009688] transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: THÔNG TIN */}
          <div>
            <h4 className="text-xs font-extrabold uppercase text-white mb-4">
              THÔNG TIN
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>Thông tin giao hàng</li>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản và điều kiện</li>
              <li>Liên hệ showroom</li>
              <li>Chính sách hoàn trả</li>
              <li>Về chúng tôi</li>
            </ul>
          </div>

          {/* Col 3: TÀI KHOẢN CỦA TÔI */}
          <div>
            <h4 className="text-xs font-extrabold uppercase text-white mb-4">
              TÀI KHOẢN CỦA TÔI
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>Tài khoản của tôi</li>
              <li>Lịch sử đơn hàng</li>
              <li>Danh sách yêu thích</li>
              <li>Đang vận chuyển</li>
              <li>Bảo hành điện tử</li>
              <li>Câu hỏi thường gặp</li>
            </ul>
          </div>

          {/* Col 4: NGƯỜI DÙNG HỮU ÍCH */}
          <div>
            <h4 className="text-xs font-extrabold uppercase text-white mb-4">
              NGƯỜI DÙNG HỮU ÍCH
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>Cộng đồng địa hình</li>
              <li>Diễn đàn kỹ thuật</li>
              <li>Gặp gỡ câu lạc bộ</li>
              <li>Trung tâm trợ giúp</li>
              <li>Đặt lịch bảo dưỡng</li>
              <li>Hotline: {data.business.phone?.[0]}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-[11px] text-slate-400 relative">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
          <a
            href="#top"
            aria-label="Lên đầu trang"
            className="hidden sm:flex fixed bottom-5 right-5 w-9 h-9 rounded-full bg-[#009688] hover:bg-[#00796b] text-white items-center justify-center shadow-lg transition-colors z-30"
          >
            <ChevronUp className="w-4 h-4" />
          </a>
        </div>
      </footer>

      {/* VEHICLE ORDER / TEST RIDE MODAL */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSent ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#009688] mx-auto mb-3" />
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  Đặt xe & Lịch lái thử thành công!
                </h3>
                <p className="text-xs text-slate-500">
                  Chuyên viên {data.business.name} sẽ liên hệ xác nhận size khung xe và thời gian giao xe cho bạn.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookVehicle} className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    className="w-20 h-14 object-cover rounded border border-slate-200"
                  />
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900">
                      {selectedVehicle.name}
                    </h3>
                    <div className="text-sm font-black text-[#009688] mt-0.5">
                      {selectedVehicle.price}
                    </div>
                  </div>
                </div>

                <input
                  type="text"
                  required
                  placeholder="Họ và tên khách hàng"
                  className="w-full border border-slate-200 rounded px-3.5 py-2 text-xs focus:outline-none focus:border-[#009688]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ"
                  className="w-full border border-slate-200 rounded px-3.5 py-2 text-xs focus:outline-none focus:border-[#009688]"
                />
                <select className="w-full border border-slate-200 rounded px-3.5 py-2 text-xs focus:outline-none focus:border-[#009688]">
                  <option>Size S (Chiều cao 1m55 - 1m68)</option>
                  <option>Size M (Chiều cao 1m68 - 1m78)</option>
                  <option>Size L (Chiều cao trên 1m78)</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#009688] hover:bg-[#00796b] text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors"
                >
                  XÁC NHẬN ĐẶT MUA / ĐĂNG KÝ LÁI THỬ
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
