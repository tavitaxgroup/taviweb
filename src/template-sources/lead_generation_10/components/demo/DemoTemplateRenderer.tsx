"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Headphones,
  Truck,
  CreditCard,
  Award,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration10DefaultData,
  type LeadGeneration10Data,
  type TetGiftBoxItem
} from "@/template-sources/lead_generation_10/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration10Data = adaptClonedTemplateData(
    leadGeneration10DefaultData,
    incomingData
  );

  const [cartCount, setCartCount] = useState<number>(3);
  const [selectedGift, setSelectedGift] = useState<TetGiftBoxItem | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [orderDone, setOrderDone] = useState<boolean>(false);
  const [b2bSubmitted, setB2bSubmitted] = useState<boolean>(false);

  const handleOrderGift = (gift?: TetGiftBoxItem) => {
    setSelectedGift(gift || null);
    setCartCount((c) => c + 1);
    setOrderDone(false);
    setModalOpen(true);
  };

  const renderGoldPlaque = (title: string) => (
    <div className="flex justify-center mb-10">
      <div className="relative inline-flex items-center justify-center bg-gradient-to-b from-[#F4DFB0] via-[#E5C384] to-[#C89D54] text-[#5A080A] px-8 sm:px-12 py-3.5 rounded-md border-2 border-[#FFF3D1] shadow-[0_6px_25px_rgba(0,0,0,0.35)]">
        <span className="w-2.5 h-2.5 rotate-45 bg-[#5A080A] mr-3 shrink-0" />
        <h2 className="text-base sm:text-xl font-serif font-black uppercase tracking-wider text-center">
          {title}
        </h2>
        <span className="w-2.5 h-2.5 rotate-45 bg-[#5A080A] ml-3 shrink-0" />
      </div>
    </div>
  );

  const renderGoldMeanderDivider = () => (
    <div className="w-full py-2.5 bg-[#550709] border-y border-[#D9B166]/50 overflow-hidden select-none">
      <div className="text-center text-[#D9B166]/70 text-xs tracking-[0.45em] font-mono whitespace-nowrap overflow-hidden">
        回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回回
      </div>
    </div>
  );

  const renderGiftCard = (gift: TetGiftBoxItem) => (
    <div
      key={gift.id}
      onClick={() => handleOrderGift(gift)}
      className="bg-[#FFF9ED] border-2 border-[#D9B166] rounded-lg p-3.5 text-slate-900 shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col justify-between group"
    >
      <div>
        <div className="h-52 rounded overflow-hidden mb-3.5 border border-[#D9B166]/60 bg-[#6E0B0E]">
          <img
            src={gift.image}
            alt={gift.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <h3 className="text-xs sm:text-sm font-extrabold text-[#5A080A] leading-snug mb-2.5">
          {gift.name}
        </h3>
        <ul className="space-y-1 text-[11px] text-slate-600 mb-4">
          {gift.bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="w-full py-2 px-4 rounded-full bg-gradient-to-r from-[#E5C384] via-[#F2D9A6] to-[#D4AC63] text-[#5A080A] text-xs font-black tracking-wide flex items-center justify-between shadow-sm cursor-pointer"
      >
        <span>•</span>
        <span>{gift.price}</span>
        <span>•</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#6E0B0E] text-white font-sans selection:bg-[#E5C384] selection:text-[#5A080A]">
      {/* 1. TOP BLACK LOGO & SEARCH BAR */}
      <div className="bg-[#080808] text-white py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left Search Input */}
          <div className="relative w-44 sm:w-60">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="w-full pl-4 pr-9 py-1.5 rounded-full bg-white text-slate-900 text-xs focus:outline-none"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Center Brand Logo */}
          <a href="#" className="text-center">
            <span className="text-2xl sm:text-3xl font-black tracking-[0.2em] uppercase text-white block leading-none">
              {data.business.name}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#E5C384]">
              • TẾT ĐOÀN VIÊN •
            </span>
          </a>

          {/* Right User & Cart */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleOrderGift()}
              className="text-slate-300 hover:text-[#E5C384] transition cursor-pointer"
              aria-label="Tài khoản"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleOrderGift()}
              className="relative text-slate-300 hover:text-[#E5C384] transition cursor-pointer"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#E5C384] text-[#5A080A] text-[9px] font-black flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. WHITE CATEGORY NAVBAR */}
      <header className="sticky top-0 z-40 bg-white text-slate-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-11 flex items-center justify-center overflow-x-auto">
          <nav className="flex items-center gap-5 text-[11px] font-extrabold uppercase whitespace-nowrap">
            {data.navCategories.map((cat, idx) => (
              <a
                key={idx}
                href="#bo-qua-tet"
                className="text-slate-800 hover:text-[#6E0B0E] transition"
              >
                {cat}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* 3. HERO SECTION ("QUÀ TẾT MANG TẾT VỀ MỌI NHÀ") */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#5A080A] via-[#781014] to-[#6E0B0E]">
        {/* Festive Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(229,195,132,0.22),transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E5C384] mb-2">
                {data.hero.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#F3DCAB] leading-tight mb-4">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-red-100 leading-relaxed max-w-lg mb-7">
                {data.hero.subtitle}
              </p>
              <a
                href={data.hero.ctaLink || "#bo-qua-tet"}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E5C384] to-[#D4AC63] text-[#5A080A] text-xs font-extrabold px-6 py-3 rounded shadow-lg hover:brightness-105 transition"
              >
                <span>{data.hero.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right Pedestal Gift Hamper */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 border-[#E5C384]/50 p-3 bg-[#4A0608]/60 shadow-[0_0_60px_rgba(229,195,132,0.28)]">
                  <img
                    src={data.hero.backgroundImage}
                    alt={data.hero.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="mt-2 h-5 w-72 sm:w-88 mx-auto rounded-full bg-gradient-to-r from-[#8C6528] via-[#F3DCAB] to-[#8C6528] shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {renderGoldMeanderDivider()}

      {/* 4. SECTION 2: BỘ QUÀ BIẾU TẾT DOANH NGHIỆP */}
      <section id="bo-qua-tet" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {renderGoldPlaque(data.corporateCombo.sectionTitle)}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Combo Details */}
          <div className="lg:col-span-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F3DCAB] mb-4">
              {data.corporateCombo.comboName}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-red-100 mb-6">
              {data.corporateCombo.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5C384] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-xs text-red-300 line-through">
                {data.corporateCombo.oldPrice}
              </span>
              <span className="text-xl sm:text-2xl font-serif font-black text-[#F3DCAB]">
                {data.corporateCombo.price}
              </span>
            </div>

            <button
              onClick={() => handleOrderGift()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E5C384] to-[#D4AC63] text-[#5A080A] text-xs font-extrabold px-6 py-2.5 rounded shadow-md cursor-pointer"
            >
              <span>{data.corporateCombo.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Octagonal Tray Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-72 h-72 sm:w-84 sm:h-84 rounded-full border-4 border-[#E5C384] overflow-hidden shadow-2xl">
              <img
                src={data.corporateCombo.image}
                alt={data.corporateCombo.comboName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: QUÀ TẾT TRUYỀN THỐNG NGƯỜI VIỆT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
        {renderGoldPlaque("QUÀ TẾT TRUYỀN THỐNG NGƯỜI VIỆT")}

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.traditionalGifts.map((gift) => renderGiftCard(gift))}
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: QUALITY COMMITMENT SPLIT BOX (GOLD FRAME) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="border-2 border-[#D9B166] rounded-xl p-4 sm:p-6 bg-[#59080A]/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 h-72 sm:h-80 rounded-lg overflow-hidden border border-[#D9B166]/40">
              <img
                src={data.qualityCommitments.image}
                alt="Cam kết chất lượng quà Tết"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-5">
              {data.qualityCommitments.items.map((item) => (
                <div
                  key={item.id}
                  className="border border-[#D9B166]/40 rounded-lg p-4 bg-[#6E0B0E]/60 flex items-start gap-3.5"
                >
                  <ShieldCheck className="w-6 h-6 text-[#E5C384] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#F3DCAB] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-red-100/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: QUÀ TẶNG SANG TRỌNG, Ý NGHĨA (6-CARD 2X3 GRID) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {renderGoldPlaque("QUÀ TẶNG SANG TRỌNG, Ý NGHĨA")}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.luxuryGifts.map((gift) => renderGiftCard(gift))}
        </div>
      </section>

      {/* 8. SECTION 6: B2B CORPORATE GIFT CONSULTATION FORM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Festive Golden Dragon / Artwork Visual */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="w-64 h-64 rounded-full border-4 border-[#E5C384] p-2 bg-[#4A0608] shadow-2xl mb-4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"
                alt="Quà Tết Kim Long"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#E5C384]">
              Chiết Khấu Doanh Nghiệp Tới 30%
            </span>
          </div>

          {/* Right Gold-Framed Form */}
          <div className="lg:col-span-7 border-2 border-[#D9B166] rounded-xl p-6 sm:p-8 bg-[#58080A] shadow-2xl">
            <h3 className="text-center text-sm sm:text-base font-serif font-bold uppercase tracking-wider text-[#F3DCAB] mb-6">
              NHẬN TƯ VẤN QUÀ TẾT CHO DOANH NGHIỆP
            </h3>

            {b2bSubmitted ? (
              <div className="text-center py-8">
                <Check className="w-12 h-12 text-[#E5C384] mx-auto mb-3" />
                <h4 className="text-base font-bold text-[#F3DCAB] mb-1">
                  Đã Gửi Yêu Cầu Báo Giá!
                </h4>
                <p className="text-xs text-red-100">
                  Bộ phận Quà Tết Doanh Nghiệp <strong>{data.business.name}</strong> sẽ gửi Catalogue và bảng chiết khấu ngay.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setB2bSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-[#F3DCAB] block mb-1">
                      Họ
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập họ của bạn"
                      className="w-full pb-2 bg-transparent border-b border-[#D9B166]/50 text-xs text-white placeholder:text-red-200/50 focus:outline-none focus:border-[#E5C384]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#F3DCAB] block mb-1">
                      Tên
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập tên của bạn"
                      className="w-full pb-2 bg-transparent border-b border-[#D9B166]/50 text-xs text-white placeholder:text-red-200/50 focus:outline-none focus:border-[#E5C384]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#F3DCAB] block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Nhập email của bạn"
                      className="w-full pb-2 bg-transparent border-b border-[#D9B166]/50 text-xs text-white placeholder:text-red-200/50 focus:outline-none focus:border-[#E5C384]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#F3DCAB] block mb-1">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Nhập số điện thoại của bạn"
                      className="w-full pb-2 bg-transparent border-b border-[#D9B166]/50 text-xs text-white placeholder:text-red-200/50 focus:outline-none focus:border-[#E5C384]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#F3DCAB] block mb-1">
                    Nhập nội dung yêu cầu
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Số lượng phần quà dự kiến & ngân sách..."
                    className="w-full pb-2 bg-transparent border-b border-[#D9B166]/50 text-xs text-white placeholder:text-red-200/50 focus:outline-none focus:border-[#E5C384]"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E5C384] to-[#D4AC63] text-[#5A080A] text-xs font-extrabold px-7 py-2.5 rounded shadow-md cursor-pointer"
                  >
                    <span>Gửi thông tin</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: QUÀ TẶNG DOANH NGHIỆP THƯƠNG HIỆU ĐỘC ĐÁO (CREAM STORY BOX) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {renderGoldPlaque("QUÀ TẶNG DOANH NGHIỆP THƯƠNG HIỆU ĐỘC ĐÁO")}

        <div className="border-2 border-[#D9B166] rounded-xl p-3 bg-[#5A080A]">
          <div className="bg-[#FFF9ED] text-slate-800 rounded-lg p-6 sm:p-8 space-y-5 max-h-80 overflow-y-auto">
            {data.brandStoryBlocks.map((block) => (
              <div key={block.id}>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#5A080A] mb-1">
                  {block.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {block.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {renderGoldMeanderDivider()}

      {/* 10. 4 GOLD TRUST BADGES ROW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {data.trustBadges.map((tb, idx) => (
            <div key={tb.id} className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full border border-[#E5C384]/60 flex items-center justify-center text-[#E5C384] mb-2.5">
                {idx === 0 ? (
                  <Truck className="w-5 h-5" />
                ) : idx === 1 ? (
                  <Headphones className="w-5 h-5" />
                ) : idx === 2 ? (
                  <CreditCard className="w-5 h-5" />
                ) : (
                  <Award className="w-5 h-5" />
                )}
              </div>
              <h4 className="text-xs font-bold text-[#F3DCAB] mb-0.5">
                {tb.title}
              </h4>
              <p className="text-[11px] text-red-200/80">{tb.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. BLACK LUXURY FOOTER */}
      <footer className="bg-[#080808] text-slate-300 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Center Brand Logo */}
          <div className="text-center mb-10">
            <span className="text-2xl sm:text-3xl font-black tracking-[0.2em] uppercase text-white block leading-none">
              {data.business.name}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#E5C384]">
              • TẾT •
            </span>
          </div>

          {/* 3 Branch Offices Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 mb-8 border-b border-white/10 text-xs">
            {data.branches.map((br) => (
              <div key={br.id} className="space-y-1.5">
                <h5 className="font-extrabold text-white">{br.name}</h5>
                <p className="flex items-start gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#E5C384] shrink-0 mt-0.5" />
                  <span>{br.address}</span>
                </p>
                <p className="flex items-center gap-2 text-slate-400">
                  <Phone className="w-3.5 h-3.5 text-[#E5C384] shrink-0" />
                  <span>{br.phone}</span>
                </p>
                <p className="flex items-center gap-2 text-slate-400">
                  <Mail className="w-3.5 h-3.5 text-[#E5C384] shrink-0" />
                  <span>{br.email}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Bottom 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10 text-xs">
            <div className="lg:col-span-4">
              <h5 className="font-extrabold text-white mb-2">
                {data.business.name} Việt Nam
              </h5>
              <p className="text-slate-400 leading-relaxed mb-4">
                {data.business.aboutText[1]}
              </p>
            </div>

            <div className="lg:col-span-2">
              <h5 className="font-extrabold uppercase text-white mb-3">
                GIỚI THIỆU
              </h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#bo-qua-tet" className="hover:text-white">Về chúng tôi</a></li>
                <li><a href="#bo-qua-tet" className="hover:text-white">Tin tức</a></li>
                <li><a href="#bo-qua-tet" className="hover:text-white">Sản phẩm</a></li>
                <li><a href="#bo-qua-tet" className="hover:text-white">Khuyến mãi</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h5 className="font-extrabold uppercase text-white mb-3">
                CHÍNH SÁCH
              </h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#bo-qua-tet" className="hover:text-white">Chính sách chiết khấu B2B</a></li>
                <li><a href="#bo-qua-tet" className="hover:text-white">Chính sách giao nhận toàn quốc</a></li>
                <li><a href="#bo-qua-tet" className="hover:text-white">Chính sách đổi trả & bảo hành</a></li>
                <li><a href="#bo-qua-tet" className="hover:text-white">In khắc Logo doanh nghiệp</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h5 className="font-extrabold uppercase text-white mb-3">
                FANPAGE
              </h5>
              <div className="rounded-lg overflow-hidden border border-white/15 bg-white/5 p-3">
                <div className="text-xs font-bold text-[#E5C384]">
                  {data.business.name} - Quà Tết Doanh Nghiệp
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Hotline đặt quà số lượng lớn: {data.business.phone[0]}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-500">
            © Bản quyền thuộc về {data.business.name}
          </div>
        </div>
      </footer>

      {/* QUICK ORDER MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFF9ED] text-slate-900 border-2 border-[#D9B166] rounded-xl max-w-md w-full p-6 sm:p-7 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-100 text-[#5A080A] flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {orderDone ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#6E0B0E] text-[#E5C384] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-serif font-black text-[#5A080A] mb-1">
                  Đặt Hộp Quà Thành Công!
                </h3>
                <p className="text-xs text-slate-600 mb-5">
                  Chuyên viên Quà Tết <strong>{data.business.name}</strong> sẽ liên hệ xác nhận đơn hàng và ưu đãi chiết khấu ngay.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded bg-[#6E0B0E] text-[#F3DCAB] text-xs font-bold cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <>
                <span className="text-[11px] font-bold uppercase text-[#6E0B0E] block mb-1">
                  Đặt Quà Biếu Tết Sang Trọng
                </span>
                <h3 className="text-base font-serif font-black text-[#5A080A] mb-3">
                  {selectedGift ? selectedGift.name : "Đặt Combo Quà Tết Doanh Nghiệp"}
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setOrderDone(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên người đặt *"
                    className="w-full px-4 py-2.5 rounded border border-[#D9B166] bg-white text-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại liên hệ *"
                    className="w-full px-4 py-2.5 rounded border border-[#D9B166] bg-white text-xs"
                  />
                  <input
                    type="number"
                    min={1}
                    defaultValue={10}
                    placeholder="Số lượng hộp quà"
                    className="w-full px-4 py-2.5 rounded border border-[#D9B166] bg-white text-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-[#6E0B0E] hover:bg-[#5A080A] text-[#F3DCAB] text-xs font-extrabold uppercase cursor-pointer"
                  >
                    Xác Nhận Đặt Quà & Nhận Báo Giá
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
