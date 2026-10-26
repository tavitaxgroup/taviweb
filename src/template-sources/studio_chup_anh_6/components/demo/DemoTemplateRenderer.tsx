"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  studioChupAnh6DefaultData,
  type StudioChupAnh6Data,
  type DiamondProductItem
} from "../../data/mockData";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Truck,
  CreditCard,
  Headphones,
  Star,
  Gem,
  Send
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: StudioChupAnh6Data = adaptClonedTemplateData(
    studioChupAnh6DefaultData,
    incomingData || customData
  );

  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<DiamondProductItem | null>(
    null
  );
  const [newsletterSent, setNewsletterSent] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const renderOrnament = (light = false) => (
    <div
      className={`flex items-center justify-center gap-2 mt-2 mb-8 ${
        light ? "text-white/80" : "text-[#9e7b66]"
      }`}
    >
      <span
        className={`w-10 h-[1px] ${light ? "bg-white/40" : "bg-[#9e7b66]/40"}`}
      />
      <span className="text-xs">❖</span>
      <span
        className={`w-10 h-[1px] ${light ? "bg-white/40" : "bg-[#9e7b66]/40"}`}
      />
    </div>
  );

  const renderProductCard = (
    item: DiamondProductItem,
    showSoldBar = false
  ) => (
    <div
      key={item.id}
      onClick={() => {
        setCartCount((c) => c + 1);
        setSelectedItem(item);
      }}
      className="group cursor-pointer bg-white flex flex-col justify-between transition-all"
    >
      <div>
        <div className="relative aspect-square bg-[#f9f8f6] overflow-hidden mb-3">
          <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
            {item.badge && (
              <span className="px-2 py-0.5 bg-[#9e7b66] text-white text-[9px] font-bold uppercase tracking-wider">
                {item.badge}
              </span>
            )}
            {item.popular && (
              <span className="px-2 py-0.5 bg-[#059669] text-white text-[9px] font-bold uppercase tracking-wider">
                PHỔ BIẾN
              </span>
            )}
          </div>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-1 text-left">
          <div className="flex items-center gap-2 text-xs">
            {item.oldPrice && (
              <span className="text-slate-400 line-through text-[11px]">
                {item.oldPrice}
              </span>
            )}
            <span className="font-bold text-[#9e7b66]">{item.price}</span>
          </div>
          <div className="text-[10px] text-slate-400">{item.brand}</div>
          <h3 className="text-xs font-semibold text-slate-800 group-hover:text-[#9e7b66] transition-colors line-clamp-1">
            {item.name}
          </h3>
          {item.rating && (
            <div className="flex items-center gap-0.5 text-amber-400 pt-0.5">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="text-[10px] text-slate-400 ml-1">1</span>
            </div>
          )}
        </div>
      </div>

      {showSoldBar && item.soldText && (
        <div className="pt-3">
          <div className="text-[10px] font-bold text-slate-700 mb-1">
            {item.soldText}
          </div>
          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#9e7b66]"
              style={{ width: `${item.soldPercent || 30}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#9e7b66] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#f6f3ef] text-slate-500 text-[11px] border-b border-stone-200/60">
        <div className="max-w-6xl mx-auto px-4 h-8 flex items-center justify-between">
          <span className="truncate">
            Giao hàng miễn phí cho tất cả đơn hàng trên 10,000,000₫
          </span>
          <span className="hidden sm:inline">{primaryEmail}</span>
        </div>
      </div>

      {/* 2. MAIN HEADER (CENTERED LOGO) */}
      <header className="bg-white border-b border-stone-100 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-20 grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
          {/* Left Nav */}
          <nav className="hidden lg:flex lg:col-span-5 items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#" className="text-[#9e7b66] font-bold">
              Trang chủ
            </a>
            <a
              href="#lua-chon"
              className="hover:text-[#9e7b66] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#9e7b66] transition-colors"
            >
              Sản phẩm
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#9e7b66] transition-colors"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#9e7b66] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          {/* Center Logo */}
          <div className="lg:col-span-2 flex justify-start lg:justify-center">
            <a href="#" className="flex items-center gap-2 text-center">
              <Gem className="w-6 h-6 text-[#9e7b66]" />
              <div className="leading-none text-left">
                <div className="text-lg font-serif font-bold tracking-widest uppercase text-slate-900">
                  {data.business.name.split(" ")[0] || "MONA"}
                </div>
                <div className="text-[8px] tracking-[0.2em] uppercase text-[#9e7b66]">
                  {data.business.name}
                </div>
              </div>
            </a>
          </div>

          {/* Right Icons + CTA */}
          <div className="lg:col-span-5 flex items-center justify-end gap-3.5 text-slate-700">
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="hover:text-[#9e7b66]"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Tài khoản"
              className="hidden sm:inline-block hover:text-[#9e7b66]"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedItem(data.flashSaleProducts[0])}
              className="relative hover:text-[#9e7b66]"
            >
              <Heart className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#9e7b66] text-white text-[9px] font-bold flex items-center justify-center">
                12
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedItem(data.flashSaleProducts[0])}
              className="relative hover:text-[#9e7b66] mr-1"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#9e7b66] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <a
              href="#lien-he"
              className="px-4 py-2 bg-[#9e7b66] hover:bg-[#866552] text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              TƯ VẤN NGAY
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO BANNER */}
      <section className="relative bg-[#dad7d2] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[460px] items-center">
          <div className="lg:col-span-5 px-6 sm:px-12 lg:pl-20 py-14 space-y-5 z-10">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-[1.18]">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              {data.hero.subtitle}
            </p>
            <div className="pt-1">
              <a
                href={data.hero.ctaLink || "#khuyen-mai"}
                className="inline-block px-6 py-2.5 bg-[#9e7b66] hover:bg-[#866552] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                {data.hero.ctaText || "TÌM HIỂU"}
              </a>
            </div>
            <div className="pt-8 text-lg font-serif text-slate-700">
              <strong>02</strong>{" "}
              <span className="text-xs text-slate-400">/03</span>
            </div>
          </div>

          <div className="lg:col-span-7 h-full min-h-[340px] lg:min-h-[460px] relative">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left & Right Slider Arrows */}
        <button
          type="button"
          aria-label="Trước"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/15 hover:bg-[#9e7b66] text-white items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Tiếp"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/15 hover:bg-[#9e7b66] text-white items-center justify-center transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </section>

      {/* 4. 3-COLUMN TRUST STRIP + 2 PROMO BANNERS */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
          <div className="flex items-center justify-center gap-3.5">
            <Truck className="w-6 h-6 text-[#9e7b66] shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">
                Miễn phí giao hàng
              </div>
              <div className="text-[11px] text-slate-400">
                Với đơn hàng trên 10,000,000₫
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3.5">
            <CreditCard className="w-6 h-6 text-[#9e7b66] shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">
                Thanh toán tối ưu
              </div>
              <div className="text-[11px] text-slate-400">
                Bảo mật an toàn khi thanh toán
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3.5">
            <Headphones className="w-6 h-6 text-[#9e7b66] shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">
                Hỗ trợ 24/7
              </div>
              <div className="text-[11px] text-slate-400">
                Hỗ trợ tận tâm và nhiệt tình
              </div>
            </div>
          </div>
        </div>

        {/* 2 Promo Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.topPromoBanners.map((banner) => (
            <div
              key={banner.id}
              className="group relative bg-[#f7f5f2] overflow-hidden p-7 sm:p-9 flex items-center justify-between min-h-[210px]"
            >
              <div className="relative z-10 max-w-[55%] space-y-2">
                <div className="text-[11px] font-bold text-[#9e7b66] uppercase tracking-wider">
                  {banner.discount}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-snug">
                  {banner.title}
                </h3>
                <div className="pt-2">
                  <a
                    href="#san-pham"
                    className="text-[11px] font-bold uppercase tracking-wider text-slate-700 border-b border-slate-400 pb-0.5 hover:text-[#9e7b66] hover:border-[#9e7b66]"
                  >
                    {banner.ctaText}
                  </a>
                </div>
              </div>
              <div className="w-40 h-36 sm:w-48 sm:h-40 shrink-0 overflow-hidden rounded">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LIMITED FLASH SALE SECTION (`Khuyến mãi giới hạn`) */}
      <section id="khuyen-mai" className="py-10 max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between border-b border-stone-200 pb-3 mb-8 gap-4">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
            Khuyến mãi giới hạn
          </h2>

          {/* Countdown */}
          <div className="flex items-center gap-3 text-center">
            {[
              { val: data.flashSaleCountdown.days, label: "NGÀY" },
              { val: data.flashSaleCountdown.hours, label: "GIỜ" },
              { val: data.flashSaleCountdown.minutes, label: "PHÚT" },
              { val: data.flashSaleCountdown.seconds, label: "GIÂY" }
            ].map((t, i) => (
              <div key={t.label} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-slate-400 font-bold -mt-3">:</span>
                )}
                <div>
                  <div className="text-base sm:text-lg font-black text-slate-900 leading-none">
                    {t.val}
                  </div>
                  <div className="text-[8px] font-bold uppercase text-slate-400 mt-0.5">
                    {t.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.flashSaleProducts.map((item) => renderProductCard(item, true))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#san-pham"
            className="inline-block px-6 py-2 bg-[#f3ece6] hover:bg-[#9e7b66] text-[#9e7b66] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
          >
            XEM TẤT CẢ
          </a>
        </div>
      </section>

      {/* 6. BEST SELLERS SECTION (`Sản phẩm bán chạy`) + 6 VINTAGE STAMPS */}
      <section id="san-pham" className="py-12 max-w-5xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Sản phẩm bán chạy
          </h2>
          {renderOrnament()}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.bestSellerProducts.map((item) =>
            renderProductCard(item, false)
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href="#lien-he"
            className="inline-block px-6 py-2 bg-[#f3ece6] hover:bg-[#9e7b66] text-[#9e7b66] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
          >
            XEM TẤT CẢ
          </a>
        </div>

        {/* 6 Vintage Stamp Emblems */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center pt-14">
          {(data.clients || []).map((cl) => (
            <div
              key={cl.id}
              className="w-24 h-24 rounded-full border border-dashed border-stone-200 mx-auto flex items-center justify-center p-3 text-center"
            >
              <span className="text-[9px] font-serif font-bold uppercase tracking-widest text-stone-400">
                {cl.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. IDEAL CHOICES SECTION (`Lựa chọn lý tưởng` on Taupe `#9e7b66`) */}
      <section id="lua-chon" className="py-16 bg-[#9e7b66] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-bold">
              Lựa chọn lý tưởng
            </h2>
            {renderOrnament(true)}
          </div>

          {/* 5 Circular Category Portraits */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {data.idealCategories.map((cat) => (
              <div key={cat.id} className="text-center group cursor-pointer">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white p-2 mx-auto overflow-hidden shadow-lg mb-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-serif font-bold text-white">
                  {cat.name}
                </h3>
                <div className="text-[11px] text-stone-200">
                  {cat.countText}
                </div>
              </div>
            ))}
          </div>

          {/* 2 Bottom Collection Banners */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 bg-[#f9f6f3] text-slate-900 p-7 sm:p-9 flex items-center justify-between gap-4">
              <div className="space-y-2 max-w-[55%]">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#9e7b66]">
                  {data.collectionBanners[0]?.eyebrow}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold leading-snug">
                  {data.collectionBanners[0]?.title}
                </h3>
                <div className="pt-2">
                  <a
                    href="#lien-he"
                    className="text-[11px] font-bold uppercase border-b border-slate-400 pb-0.5 hover:text-[#9e7b66]"
                  >
                    {data.collectionBanners[0]?.ctaText}
                  </a>
                </div>
              </div>
              <img
                src={data.collectionBanners[0]?.image}
                alt={data.collectionBanners[0]?.title}
                className="w-36 h-36 sm:w-44 sm:h-40 object-cover rounded"
              />
            </div>

            <div className="md:col-span-5 bg-[#f9f6f3] text-slate-900 p-7 sm:p-9 flex items-center justify-between gap-4">
              <div className="space-y-2 max-w-[55%]">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#9e7b66]">
                  {data.collectionBanners[1]?.eyebrow}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold leading-snug">
                  {data.collectionBanners[1]?.title}
                </h3>
                <div className="pt-2">
                  <a
                    href="#lien-he"
                    className="text-[11px] font-bold uppercase border-b border-slate-400 pb-0.5 hover:text-[#9e7b66]"
                  >
                    {data.collectionBanners[1]?.ctaText}
                  </a>
                </div>
              </div>
              <img
                src={data.collectionBanners[1]?.image}
                alt={data.collectionBanners[1]?.title}
                className="w-28 h-32 sm:w-32 sm:h-36 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. POPULAR PRODUCTS (`Sản phẩm phổ biến` on soft cream wave background) */}
      <section className="py-16 bg-[#f7f2ec]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Sản phẩm phổ biến
            </h2>
            {renderOrnament()}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.popularProducts.map((item) => renderProductCard(item, false))}
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER REVIEWS (`Khách hàng đánh giá`) */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Khách hàng đánh giá
            </h2>
            {renderOrnament()}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((rv, idx) => {
              const titles = [
                "“Dịch vụ tuyệt vời”",
                "“Sản phẩm chất lượng”",
                "“Hỗ trợ tận tình”"
              ];
              return (
                <div
                  key={rv.id}
                  className="bg-white border border-stone-200 p-7 shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <img
                        src={rv.avatar}
                        alt={rv.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: rv.rating || 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-sm font-serif font-bold text-slate-900">
                      {titles[idx % titles.length]}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {rv.content}
                    </p>
                  </div>

                  <div className="border-l-2 border-[#9e7b66] pl-3">
                    <div className="text-xs font-bold text-slate-900">
                      {rv.author}
                    </div>
                    <div className="text-[10px] text-slate-400">{rv.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. LATEST NEWS (`Tin tức mới nhất`) */}
      <section id="tin-tuc" className="py-14 max-w-5xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Tin tức mới nhất
          </h2>
          {renderOrnament()}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(data.news || []).map((post) => (
            <article key={post.id} className="group space-y-2.5">
              <div className="aspect-[16/11] overflow-hidden bg-stone-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-[10px] font-bold text-[#9e7b66]">
                {post.category}
              </div>
              <div className="text-[10px] text-slate-400">{post.date}</div>
              <h3 className="text-xs sm:text-sm font-serif font-bold text-slate-900 group-hover:text-[#9e7b66] line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-[11px] text-slate-500 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 11. YOU MIGHT ALSO LIKE (`Có thể bạn thích`) */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Có thể bạn thích
          </h2>
          {renderOrnament()}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-stone-200 divide-y sm:divide-y-0 lg:divide-x divide-stone-200">
          {data.recommendedMini.map((rm) => (
            <div
              key={rm.id}
              onClick={() => setSelectedItem(rm)}
              className="p-3.5 flex items-center gap-3 cursor-pointer hover:bg-stone-50"
            >
              <img
                src={rm.image}
                alt={rm.name}
                className="w-12 h-12 object-cover shrink-0 bg-stone-100"
              />
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-slate-800 truncate">
                  {rm.name}
                </div>
                <div className="text-[11px] font-bold text-[#9e7b66]">
                  {rm.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. CREAM NEWSLETTER & FOOTER */}
      <footer id="lien-he" className="bg-[#f5efe9] text-slate-700 pt-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Top 3 Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center pb-10">
            <div className="space-y-1">
              <Truck className="w-6 h-6 text-[#9e7b66] mx-auto" />
              <div className="text-xs font-bold text-slate-900">
                Giao hàng uy tín
              </div>
              <div className="text-[11px] text-slate-500">
                1–2 ngày sau khi đặt hàng
              </div>
            </div>
            <div className="space-y-1">
              <CreditCard className="w-6 h-6 text-[#9e7b66] mx-auto" />
              <div className="text-xs font-bold text-slate-900">
                Hoàn trả trong vòng 14 ngày
              </div>
              <div className="text-[11px] text-slate-500">
                Đối với tất cả đơn hàng
              </div>
            </div>
            <div className="space-y-1">
              <Headphones className="w-6 h-6 text-[#9e7b66] mx-auto" />
              <div className="text-xs font-bold text-slate-900">
                Hỗ trợ 24/7
              </div>
              <div className="text-[11px] text-slate-500">
                Qua số điện thoại hoặc email
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="text-center pb-12 border-b border-stone-200">
            <div className="text-xs font-semibold text-slate-700 mb-4">
              Đăng ký ngay để nhận các tin mới nhất từ trang web !
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSent(true);
              }}
              className="max-w-md mx-auto flex border border-stone-300 bg-white"
            >
              <input
                type="email"
                required
                placeholder="Nhập email..."
                className="flex-1 px-3.5 py-2.5 text-xs focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#9e7b66] hover:bg-[#866552] text-white text-[11px] font-bold uppercase flex items-center gap-1.5"
              >
                <span>ĐĂNG KÝ</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
            {newsletterSent && (
              <div className="text-xs text-[#9e7b66] font-bold mt-2">
                ✓ Cảm ơn bạn đã đăng ký bản tin trang sức cưới!
              </div>
            )}
          </div>

          {/* 4 Footer Columns */}
          <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-xs">
            <div className="space-y-2.5">
              <h4 className="font-serif font-bold text-slate-900">Trang sức</h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Nhẫn cưới kim cương</li>
                <li>Bông tai ngọc trai</li>
                <li>Kim cương kiểm định GIA</li>
                <li>Dây chuyền cô dâu</li>
                <li>Mặt dây chuyền & Charm</li>
                <li>Phụ kiện cưới</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-serif font-bold text-slate-900">
                Giới thiệu
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Câu chuyện thương hiệu</li>
                <li>Giá trị cốt lõi</li>
                <li>Truyền thông & Báo chí</li>
                <li>Chính sách bảo mật</li>
                <li>Thông tin pháp lý</li>
                <li>Điều khoản dịch vụ</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-serif font-bold text-slate-900">Sản phẩm</h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Showroom Quận 1</li>
                <li>Showroom Tân Bình</li>
                <li>Bộ sưu tập Hoàng Gia</li>
                <li>Xưởng chế tác thủ công</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-serif font-bold text-slate-900">Dịch vụ</h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Liên hệ tư vấn</li>
                <li>Thanh toán & Trả góp</li>
                <li>Chính sách giao hàng</li>
                <li>Đổi trả & Bảo hành</li>
                <li>Làm sạch kim cương</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 py-4 text-center text-[11px] text-slate-500">
          © Thiết kế và lập trình bởi{" "}
          <strong className="text-slate-800">{data.business.name}</strong> |{" "}
          <strong className="text-slate-800">{primaryPhone}</strong> |{" "}
          {primaryEmail}
        </div>
      </footer>

      {/* CONSULTATION MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 shadow-2xl border-t-4 border-[#9e7b66]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-serif font-bold text-slate-900">
                Tư vấn Trang sức & Đặt lịch Thử nhẫn
              </h3>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#f9f6f3] mb-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <div className="text-xs font-bold text-slate-900">
                  {selectedItem.name}
                </div>
                <div className="text-xs font-bold text-[#9e7b66] mt-0.5">
                  {selectedItem.price}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Liên hệ chuyên viên tư vấn kim hoàn của{" "}
              <strong>{data.business.name}</strong> qua số{" "}
              <strong className="text-[#9e7b66]">{primaryPhone}</strong> để đặt
              lịch thử mẫu trực tiếp tại showroom.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 border border-stone-300 text-xs font-bold text-slate-600"
              >
                Đóng
              </button>
              <a
                href={`tel:${primaryPhone}`}
                className="px-5 py-2 bg-[#9e7b66] text-white text-xs font-bold"
              >
                Gọi ngay: {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
