"use client";

import React, { useState } from "react";
import {
  Bike,
  User,
  Search,
  ShoppingBag,
  Star,
  Award,
  Medal,
  Calendar,
  Tag,
  Globe as Facebook,
  Camera as Instagram,
  PlayCircle as Youtube,
  Share2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym9DefaultData,
  type PhongGym9Data,
  type PhongGym9BikeProduct
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongGym9Data = adaptClonedTemplateData(
    phongGym9DefaultData,
    incomingData
  );

  const [activeCategory, setActiveCategory] = useState<string>("XE ĐẠP LEO NÚI");
  const [selectedBike, setSelectedBike] = useState<PhongGym9BikeProduct | null>(null);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#2299e6] selection:text-white">
      {/* 1. STICKY WHITE HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#trang-chu" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#2299e6]/10 text-[#2299e6] flex items-center justify-center">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black tracking-wider text-slate-900 uppercase leading-none">
                {data.business.name.split(" ")[0]}
              </div>
              <div className="text-[8px] font-bold tracking-widest text-[#2299e6] uppercase">
                BICYCLE &amp; SPORT
              </div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-slate-700">
            <a
              href="#trang-chu"
              className="text-[#2299e6] border-t-2 border-[#2299e6] pt-1"
            >
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#2299e6] pt-1">
              GIỚI THIỆU
            </a>
            <a href="#xe-dap-noi-bat" className="hover:text-[#2299e6] pt-1">
              CỬA HÀNG
            </a>
            <a href="#chia-se" className="hover:text-[#2299e6] pt-1">
              TIN TỨC
            </a>
            <a href="#kham-pha" className="hover:text-[#2299e6] pt-1">
              CÂU HỎI THƯỜNG GẶP
            </a>
            <a href="#lien-he" className="hover:text-[#2299e6] pt-1">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3.5 text-slate-600">
            <a href="#lien-he" aria-label="Tài khoản" className="hover:text-[#2299e6]">
              <User className="w-4 h-4" />
            </a>
            <button type="button" aria-label="Tìm kiếm" className="hover:text-[#2299e6]">
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              aria-label="Giỏ hàng"
              className="relative hover:text-[#2299e6]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 text-[9px] font-bold text-slate-800">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SPLIT SHOWCASE (XE ĐẠP ĐIỆN TỬ MONA) */}
      <section
        id="trang-chu"
        className="relative py-12 md:py-20 bg-white overflow-hidden"
      >
        {/* Giant Subtle Watermark */}
        <div className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 text-[140px] font-black tracking-widest text-slate-100/80 select-none pointer-events-none">
          MONA
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#2299e6]">
              {data.hero.eyebrow}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2299e6] uppercase leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#xe-dap-noi-bat"}
                className="inline-block px-6 py-2.5 rounded-full border border-[#2299e6] text-[#2299e6] hover:bg-[#2299e6] hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
              >
                {data.hero.ctaText || "MUA NGAY BÂY GIỜ"}
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="w-full h-[300px] sm:h-[360px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          <span className="w-2 h-2 rounded-full bg-slate-900" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      </section>

      {/* 3. FEATURED MTB SPOTLIGHT + 3 ACTION PHOTOS */}
      <section id="gioi-thieu" className="pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <img
                src={data.mtbSpotlight.image}
                alt={data.mtbSpotlight.title}
                className="w-full h-56 object-cover rounded"
              />
            </div>

            <div className="md:col-span-6 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2299e6] leading-tight">
                {data.mtbSpotlight.title}
              </h2>
              <p className="text-xs text-slate-500 italic leading-relaxed">
                {data.mtbSpotlight.quote}
              </p>
              <div className="pt-1">
                <a
                  href="#xe-dap-noi-bat"
                  className="inline-block px-6 py-2 rounded-full bg-[#2299e6] hover:bg-[#1a82c7] text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
                >
                  {data.mtbSpotlight.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Action Trail Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {data.actionStripImages.map((imgUrl, idx) => (
            <div key={idx} className="h-60 overflow-hidden">
              <img
                src={imgUrl}
                alt={`Đua xe địa hình ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. XE ĐẠP NỔI BẬT (4 PILL TABS + 3x2 PRODUCT GRID) */}
      <section id="xe-dap-noi-bat" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 text-[#2299e6] mb-1">
              <span className="w-8 h-px bg-[#2299e6]/40" />
              <Bike className="w-4 h-4" />
              <span className="w-8 h-px bg-[#2299e6]/40" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2299e6]">
              Xe đạp nổi bật
            </h2>
          </div>

          {/* 4 Pill Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {data.bikeCategories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-colors ${
                    active
                      ? "bg-[#2299e6] border-[#2299e6] text-white"
                      : "border-[#2299e6]/40 text-[#2299e6] hover:bg-[#2299e6]/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3x2 Bike Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.featuredBikes.map((bike) => (
              <div
                key={bike.id}
                onClick={() => setSelectedBike(bike)}
                className="group cursor-pointer text-center flex flex-col justify-between"
              >
                <div className="relative h-44 flex items-center justify-center p-2 mb-3 overflow-hidden">
                  {/* Top Badges */}
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1">
                    <span className="bg-[#2299e6] text-white text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-xs">
                      MỚI
                    </span>
                    {bike.discountBadge && (
                      <span className="bg-red-500 text-white text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-xs">
                        {bike.discountBadge}
                      </span>
                    )}
                  </div>

                  {/* Sold Out Circle Overlay */}
                  {bike.soldOut && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-slate-900/80 text-white text-[9px] font-bold flex items-center justify-center">
                        Hết hàng
                      </span>
                    </div>
                  )}

                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-[11px] font-bold text-slate-700 group-hover:text-[#2299e6] transition-colors">
                    {bike.name}
                  </h3>
                  <div className="text-[11px] mt-1">
                    {bike.oldPrice && (
                      <span className="text-slate-400 line-through mr-1.5">
                        {bike.oldPrice}
                      </span>
                    )}
                    <span className="font-extrabold text-slate-900">
                      {bike.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH SUNLIT CYCLIST BANNER (MONA BICYCLE) */}
      <section
        className="relative h-[340px] md:h-[420px] bg-sky-100 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${data.sunlitBanner.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/85" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex justify-end">
          <div className="text-right space-y-2">
            <div className="text-xs font-semibold text-[#2299e6]">
              {data.sunlitBanner.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2299e6]">
              {data.sunlitBanner.title}
            </h2>
            <div className="pt-2">
              <a
                href="#xe-dap-noi-bat"
                className="inline-block px-7 py-2.5 rounded-full bg-[#2299e6] hover:bg-[#1a82c7] text-white text-[10px] font-bold uppercase tracking-wider shadow"
              >
                {data.sunlitBanner.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ASYMMETRIC ADVENTURE COLLAGE + 3 CORE VALUES */}
      <section className="py-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            {/* Tall Cliffside Rider */}
            <div className="relative h-[380px] md:h-[460px] overflow-hidden">
              <img
                src={data.adventureCollage.cliffImage}
                alt={data.adventureCollage.cliffTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-sm font-extrabold uppercase max-w-xs leading-snug">
                  {data.adventureCollage.cliffTitle}
                </h3>
                <p className="text-[11px] text-slate-200 mt-1 mb-4">
                  {data.adventureCollage.cliffSubtitle}
                </p>
                <div>
                  <a
                    href="#xe-dap-noi-bat"
                    className="inline-block px-6 py-2 rounded-full bg-white text-[#2299e6] text-[10px] font-bold uppercase tracking-wider hover:bg-[#2299e6] hover:text-white transition-colors"
                  >
                    MUA SẮM NGAY
                  </a>
                </div>
              </div>
            </div>

            {/* Short Vintage City Bike */}
            <div className="h-[220px] md:h-[260px] overflow-hidden">
              <img
                src={data.adventureCollage.vintageBikeImage}
                alt="Xe đạp đường phố"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            {/* Short Forest Dirt Jump */}
            <div className="h-[220px] md:h-[260px] overflow-hidden">
              <img
                src={data.adventureCollage.jumpImage}
                alt="Đổ đèo mạo hiểm"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tall Group Road Cyclists */}
            <div className="h-[380px] md:h-[460px] overflow-hidden">
              <img
                src={data.adventureCollage.teamRideImage}
                alt="Câu lạc bộ đạp xe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Core Values Row */}
        <div className="max-w-4xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {data.coreValues.map((cv) => (
            <div key={cv.id} className="flex flex-col items-center space-y-2">
              <div className="text-slate-900">
                {cv.icon === "star" && <Star className="w-7 h-7 fill-slate-900" />}
                {cv.icon === "seal" && <Award className="w-7 h-7" />}
                {cv.icon === "medal" && <Medal className="w-7 h-7" />}
              </div>
              <h3 className="text-xs font-extrabold uppercase text-slate-900">
                {cv.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
                {cv.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CHIA SẺ KINH NGHIỆM (3 BLOG CARDS) */}
      <section id="chia-se" className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-[#2299e6] mb-1">
              <span className="w-8 h-px bg-[#2299e6]/40" />
              <Bike className="w-4 h-4" />
              <span className="w-8 h-px bg-[#2299e6]/40" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2299e6] uppercase">
              CHIA SẺ KINH NGHIỆM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group text-center">
                <div className="h-44 overflow-hidden mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#2299e6] mb-1.5">
                  {post.title}
                </h3>
                <div className="flex items-center justify-center gap-3 text-[9px] text-slate-400 uppercase">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Tag className="w-3 h-3" /> VIỆT NAM
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. KHÁM PHÁ THẾ GIỚI XE ĐẠP + MATTE BLACK FOOTER */}
      <section
        id="kham-pha"
        className="relative h-[320px] md:h-[380px] bg-slate-900 bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: `url(${data.exploreForestBanner.image})` }}
      >
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          <div className="max-w-sm space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase leading-tight">
              {data.exploreForestBanner.title}
            </h2>
            <p className="text-xs text-slate-200">
              {data.exploreForestBanner.subtitle}
            </p>
            <div className="pt-2">
              <a
                href="#xe-dap-noi-bat"
                className="inline-block px-6 py-2 rounded-full bg-white text-[#2299e6] text-[10px] font-bold uppercase tracking-wider hover:bg-[#2299e6] hover:text-white transition-colors"
              >
                {data.exploreForestBanner.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="lien-he" className="bg-[#141414] text-neutral-400 pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-800 text-[11px]">
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase">VỀ CHÚNG TÔI</h4>
              <p className="leading-relaxed text-[10px]">
                {data.business.aboutText[0]}
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                {[Facebook, Share2, Youtube, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#lien-he"
                    className="w-7 h-7 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-[#2299e6] hover:text-[#2299e6]"
                  >
                    <Icon className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase mb-3">THÔNG TIN</h4>
              <div>Chính sách bảo mật</div>
              <div>Điều khoản và điều kiện</div>
              <div>Liên hệ: {data.business.phone[0]}</div>
              <div>Về chúng tôi</div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase mb-3">
                TÀI KHOẢN CỦA TÔI
              </h4>
              <div>Tài khoản của tôi</div>
              <div>Lịch sử đơn hàng</div>
              <div>Chính sách bảo hành</div>
              <div>Câu hỏi thường gặp</div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase mb-3">
                NGƯỜI DÙNG HỮU ÍCH
              </h4>
              <div>Thủ tục thanh toán</div>
              <div>Theo dõi đơn hàng</div>
              <div>Giỏ hàng ({cartCount})</div>
            </div>
          </div>

          <div className="pt-5 text-center text-[10px] text-neutral-500">
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-neutral-300">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* BIKE DETAIL MODAL */}
      {selectedBike && (
        <div
          onClick={() => setSelectedBike(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white rounded-xl p-6 relative shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedBike(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-3">
              <img
                src={selectedBike.image}
                alt={selectedBike.name}
                className="w-full h-48 object-cover rounded"
              />
              <span className="text-[10px] font-bold uppercase text-[#2299e6]">
                {selectedBike.category}
              </span>
              <h4 className="text-base font-extrabold text-slate-900">
                {selectedBike.name}
              </h4>
              <div className="text-sm font-black text-[#2299e6]">
                {selectedBike.price}
              </div>
              <button
                type="button"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  setSelectedBike(null);
                }}
                className="w-full py-2.5 rounded-full bg-[#2299e6] hover:bg-[#1a82c7] text-white text-xs font-bold uppercase tracking-wider"
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
