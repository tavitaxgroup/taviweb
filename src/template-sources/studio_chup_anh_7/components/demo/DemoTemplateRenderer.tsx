"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  studioChupAnh7DefaultData,
  type StudioChupAnh7Data
} from "../../data/mockData";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Flower2,
  Bell,
  Users,
  Video,
  Award,
  Camera,
  Clock
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: StudioChupAnh7Data = adaptClonedTemplateData(
    studioChupAnh7DefaultData,
    incomingData || customData
  );

  const [openAccId, setOpenAccId] = useState<string>(
    data.whyChooseUs?.accordions?.[0]?.id || "acc-1"
  );
  const [contactSent, setContactSent] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "031 3728 397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const renderBlossomStars = () => (
    <div className="flex items-center justify-center gap-1.5 text-amber-200 text-xs mb-1.5">
      <span>❀</span>
      <span className="text-sm text-pink-300">❀</span>
      <span>❀</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f252a] text-white font-sans selection:bg-[#ef4444] selection:text-white">
      {/* 1. HERO + OVERLAY TOPBAR & NAVBAR */}
      <header className="relative min-h-[540px] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#0f252a]" />
        </div>

        {/* Top Utility & Main Nav */}
        <div className="relative z-10">
          {/* Topbar */}
          <div className="border-b border-white/10 text-[11px] text-slate-300">
            <div className="max-w-5xl mx-auto px-4 h-9 flex items-center justify-between">
              <div className="flex items-center gap-4 truncate">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#ef4444]" />
                  <span>{primaryPhone}</span>
                </span>
                <span className="hidden sm:flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#ef4444]" />
                  <span>{primaryEmail}</span>
                </span>
                <span className="hidden md:flex items-center gap-1 truncate">
                  <MapPin className="w-3 h-3 text-[#ef4444]" />
                  <span className="truncate">{data.business.address}</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <a href="#lien-he" className="hover:text-[#ef4444]">
                  f
                </a>
                <a href="#lien-he" className="hover:text-[#ef4444]">
                  ▶
                </a>
                <a href="#lien-he" className="hover:text-[#ef4444]">
                  ◎
                </a>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-serif italic tracking-wider text-white">
                {data.business.name}
              </span>
              <Flower2 className="w-5 h-5 text-pink-400" />
            </a>

            <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-white/90">
              <a href="#" className="text-[#ef4444] font-bold">
                Trang Chủ
              </a>
              <a
                href="#san-pham"
                className="hover:text-[#ef4444] transition-colors"
              >
                Cửa Hàng
              </a>
              <a
                href="#gioi-thieu"
                className="hover:text-[#ef4444] transition-colors"
              >
                Tuyển Dụng
              </a>
              <a
                href="#tin-tuc"
                className="hover:text-[#ef4444] transition-colors"
              >
                Tin Tức
              </a>
              <a
                href="#lien-he"
                className="hover:text-[#ef4444] transition-colors"
              >
                Liên Hệ
              </a>
            </nav>

            <button
              type="button"
              aria-label="Tìm kiếm"
              className="text-white/80 hover:text-white"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Hero Headline */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-200">
            {data.hero.eyebrow || "THE MONA"}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-wide text-white">
            {data.hero.title}
          </h1>
          <div className="pt-2">
            <a
              href={data.hero.ctaLink || "#san-pham"}
              className="inline-block px-6 py-2 border border-white/60 hover:bg-white hover:text-[#0f252a] text-white text-xs font-bold uppercase tracking-widest transition-colors"
            >
              {data.hero.ctaText || "XEM THÊM"}
            </a>
          </div>
        </div>

        {/* Left / Right Arrows */}
        <button
          type="button"
          aria-label="Trước"
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          aria-label="Tiếp"
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="h-6" />
      </header>

      {/* 2. WHY CHOOSE US SECTION (`GIỚI THIỆU - TẠI SAO BẠN NÊN CHỌN CHÚNG TÔI?`) */}
      <section id="gioi-thieu" className="py-16 bg-[#0f252a]">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          {/* Top 3-Column Intro */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Framed Badge */}
            <div className="md:col-span-3">
              <div className="border-4 border-[#193840] bg-[#0b1c20] p-6 text-center">
                <div className="text-5xl font-black text-white leading-none">
                  {data.whyChooseUs.yearsNumber}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-300 mt-2">
                  NĂM
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400">
                  KINH NGHIỆM
                </div>
              </div>
            </div>

            {/* Center Heading */}
            <div className="md:col-span-4 space-y-1.5">
              <div className="flex items-center gap-1 text-pink-300 text-xs">
                <span>❀</span>
                <span>❀</span>
                <span>❀</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                GIỚI THIỆU
              </div>
              <h2 className="text-xl sm:text-2xl font-serif uppercase leading-snug text-white">
                {data.business.aboutTitle}
              </h2>
            </div>

            {/* Right Paragraphs */}
            <div className="md:col-span-5 space-y-3 text-[11px] text-slate-300 leading-relaxed">
              {(data.business.aboutText || []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div>
                <a
                  href="#san-pham"
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white hover:text-[#ef4444]"
                >
                  <span>XEM THÊM</span>
                  <span>⊕</span>
                </a>
              </div>
            </div>
          </div>

          {/* Middle 2-Column Image + White Accordion Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#142e35] shadow-2xl overflow-hidden">
            <div className="md:col-span-6 min-h-[280px]">
              <img
                src={data.whyChooseUs.image}
                alt="Nghệ nhân cắm hoa"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-6 bg-white text-slate-800 p-6 sm:p-8 flex flex-col justify-center divide-y divide-slate-100">
              {data.whyChooseUs.accordions.map((acc) => {
                const isOpen = openAccId === acc.id;
                return (
                  <div key={acc.id} className="py-3 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setOpenAccId(isOpen ? "" : acc.id)}
                      className="w-full flex items-center justify-between text-left text-xs font-extrabold text-slate-900"
                    >
                      <span>{acc.title}</span>
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
                        {acc.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {data.whyChooseUs.pillars.map((pl, idx) => (
              <div key={pl.id} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#17353d] text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  {idx === 0 ? (
                    <Flower2 className="w-4 h-4" />
                  ) : idx === 1 ? (
                    <Bell className="w-4 h-4" />
                  ) : (
                    <Users className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white mb-1">
                    {pl.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    {pl.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION (`Sản Phẩm Nổi Bật`) */}
      <section id="san-pham" className="py-16 bg-[#132c33]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            {renderBlossomStars()}
            <div className="text-[9px] uppercase tracking-[0.25em] text-slate-300">
              THE MONA
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1">
              Sản Phẩm Nổi Bật
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.flowerProducts.map((fp) => (
              <div
                key={fp.id}
                className="group bg-[#0f252a] border border-teal-800/60 rounded overflow-hidden hover:border-[#ef4444] transition-colors"
              >
                <div className="relative aspect-square overflow-hidden">
                  {fp.isSale && (
                    <span className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded bg-[#ef4444] text-white text-[9px] font-bold">
                      Sale!
                    </span>
                  )}
                  <img
                    src={fp.image}
                    alt={fp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-bold text-white truncate">
                    {fp.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] mt-1">
                    {fp.oldPrice && (
                      <span className="text-slate-400 line-through">
                        {fp.oldPrice}
                      </span>
                    )}
                    <span className="text-[#ef4444] font-bold">{fp.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#lien-he"
              className="inline-block px-6 py-2 bg-white text-[#0f252a] hover:bg-[#ef4444] hover:text-white text-xs font-bold rounded-sm transition-colors"
            >
              Xem Thêm
            </a>
          </div>
        </div>
      </section>

      {/* 4. ACHIEVEMENTS SECTION (`THÀNH TỰU CỦA CHÚNG TÔI`) */}
      <section className="relative py-16 bg-[#0b1b1f] overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt="Thành tựu"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            {renderBlossomStars()}
            <div className="text-[9px] uppercase tracking-[0.25em] text-slate-300">
              THE MONA
            </div>
            <h2 className="text-xl sm:text-2xl font-serif uppercase text-white mt-1">
              THÀNH TỰU CỦA CHÚNG TÔI
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(data.stats || []).map((st, idx) => (
              <div
                key={st.id}
                className="bg-[#0f252a]/90 border border-teal-900/80 p-6 text-center space-y-1.5"
              >
                <div className="text-[#ef4444] flex justify-center mb-1">
                  {idx === 0 ? (
                    <Users className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <Video className="w-6 h-6" />
                  ) : idx === 2 ? (
                    <Award className="w-6 h-6" />
                  ) : (
                    <Camera className="w-6 h-6" />
                  )}
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  {st.number}
                </div>
                <div className="text-[10px] text-slate-400">{st.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOOKBOOK PHOTO GALLERY (`VƯỜN HOA THE MONA`) */}
      <section className="py-16 bg-[#0f252a]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            {renderBlossomStars()}
            <div className="text-[9px] uppercase tracking-[0.25em] text-slate-300">
              MONA PHOTO
            </div>
            <h2 className="text-xl sm:text-2xl font-serif uppercase text-white mt-1">
              VƯỜN HOA {data.business.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.gardenGallery.map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden bg-[#132c33] group"
              >
                <img
                  src={imgUrl}
                  alt={`Vườn hoa nghệ thuật ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS BANNER */}
      <section className="relative py-16 bg-[#4a3f39] overflow-hidden">
        <img
          src={data.gardenGallery[2]}
          alt="Đánh giá khách hàng"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {(data.testimonials || []).map((rv) => (
            <div key={rv.id} className="space-y-4">
              <div className="text-4xl font-black text-[#f87171] leading-none">
                ❞
              </div>
              <p className="text-xs italic font-semibold text-white/95 leading-relaxed">
                {rv.content}
              </p>
              <div className="flex items-center gap-3 pt-1">
                <img
                  src={rv.avatar}
                  alt={rv.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/50"
                />
                <div>
                  <div className="text-xs font-bold text-white">
                    {rv.author}
                  </div>
                  <div className="text-[10px] text-amber-200">{rv.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LATEST NEWS SECTION (`TIN TỨC MỚI NHẤT`) */}
      <section id="tin-tuc" className="py-16 bg-[#0f252a]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            {renderBlossomStars()}
            <div className="text-[9px] uppercase tracking-[0.25em] text-slate-300">
              MONA POST
            </div>
            <h2 className="text-xl sm:text-2xl font-serif uppercase text-white mt-1">
              TIN TỨC MỚI NHẤT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-[#132c33] border border-teal-900/60 overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 px-2 py-0.5 bg-[#ef4444] text-white text-[9px] font-bold uppercase">
                    {post.category}
                  </span>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center space-y-3">
                  <h3 className="text-sm font-bold text-white hover:text-[#ef4444] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-2 border-t border-teal-800/50 text-[10px] text-slate-400">
                    {data.business.name} | {post.date} | 4 Bình luận
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT & STUDIO LOCATION SECTION (`LIÊN HỆ VỚI CHÚNG TÔI`) */}
      <section
        id="lien-he"
        className="relative py-16 bg-[#091619] overflow-hidden"
      >
        <img
          src={data.whyChooseUs.image}
          alt="Studio liên hệ"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Form */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-1 text-pink-300 text-xs">
              <span>❀</span>
              <span>❀</span>
              <span>❀</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
              LIÊN HỆ
            </div>
            <h2 className="text-2xl font-serif uppercase text-white">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h2>
            <p className="text-[11px] text-slate-300">
              Để lại lời nhắn của bạn chúng tôi sẽ phản hồi trong thời gian sớm
              nhất.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactSent(true);
              }}
              className="space-y-3 pt-1"
            >
              <input
                type="text"
                required
                placeholder="Tên của bạn*"
                className="w-full px-3.5 py-2.5 bg-black/45 border border-white/15 text-xs text-white focus:outline-none focus:border-[#ef4444]"
              />
              <input
                type="email"
                required
                placeholder="Nhập Địa Chỉ Email*"
                className="w-full px-3.5 py-2.5 bg-black/45 border border-white/15 text-xs text-white focus:outline-none focus:border-[#ef4444]"
              />
              <textarea
                rows={4}
                placeholder="Để Lại Lời Nhắn Của Bạn*"
                className="w-full px-3.5 py-2.5 bg-black/45 border border-white/15 text-xs text-white focus:outline-none focus:border-[#ef4444]"
              />
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="px-7 py-2 bg-white text-[#0f252a] hover:bg-[#ef4444] hover:text-white text-xs font-bold transition-colors"
                >
                  Gửi
                </button>
                {contactSent && (
                  <span className="text-xs text-emerald-400 font-semibold">
                    ✓ Đã gửi lời nhắn!
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Right 2x2 Dark Teal Info Cards */}
          <div className="md:col-span-6 grid grid-cols-2 gap-3">
            <div className="bg-[#112a30]/95 p-5 space-y-2 border border-teal-800/40">
              <MapPin className="w-5 h-5 text-teal-400" />
              <div className="text-xs font-bold text-white">Địa chỉ :</div>
              <div className="text-[10px] text-slate-300 leading-relaxed">
                {data.business.address}
              </div>
            </div>

            <div className="bg-[#112a30]/95 p-5 space-y-2 border border-teal-800/40">
              <Phone className="w-5 h-5 text-teal-400" />
              <div className="text-xs font-bold text-white">
                Số điện thoại :
              </div>
              <div className="text-[10px] text-slate-300">
                Điện thoại: {primaryPhone}
              </div>
            </div>

            <div className="bg-[#112a30]/95 p-5 space-y-2 border border-teal-800/40">
              <Mail className="w-5 h-5 text-teal-400" />
              <div className="text-xs font-bold text-white">
                Địa chỉ email :
              </div>
              <div className="text-[10px] text-slate-300 truncate">
                {primaryEmail}
              </div>
            </div>

            <div className="bg-[#112a30]/95 p-5 space-y-2 border border-teal-800/40">
              <Clock className="w-5 h-5 text-teal-400" />
              <div className="text-xs font-bold text-white">Giờ làm việc:</div>
              <div className="text-[10px] text-slate-300">
                {data.business.workingHours}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DARK TEAL FOOTER */}
      <footer className="bg-[#0d2024] text-slate-300 pt-12 pb-6 border-t border-teal-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-teal-900/50 text-xs">
            {/* Left Newsletter */}
            <div className="space-y-3 text-center">
              <h4 className="text-white font-serif uppercase tracking-wider">
                LIÊN HỆ
              </h4>
              <p className="text-[10px] text-slate-400">
                Để lại email của bạn để nhận thông tin khuyến mãi từ chúng tôi!
              </p>
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                className="w-full px-3 py-2 bg-[#091619] border border-teal-800/60 text-[11px] text-white focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setContactSent(true)}
                className="w-full py-2 bg-white text-[#0f252a] hover:bg-[#ef4444] hover:text-white text-xs font-bold transition-colors"
              >
                Đăng Ký Ngay
              </button>
            </div>

            {/* Center Brand Info */}
            <div className="space-y-2.5 text-center border-y md:border-y-0 md:border-x border-teal-900/50 py-6 md:py-0 px-4">
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-2xl font-serif italic text-white">
                  {data.business.name}
                </span>
                <Flower2 className="w-5 h-5 text-pink-400" />
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                {data.business.aboutText?.[1]}
              </p>
              <div className="text-[10px] text-slate-300 space-y-1 pt-1">
                <div>📞 {primaryPhone}</div>
                <div>📍 {data.business.address}</div>
                <div>✉ {primaryEmail}</div>
              </div>
            </div>

            {/* Right Mini Gallery */}
            <div className="space-y-3 text-center">
              <h4 className="text-white font-serif">Thư Viện</h4>
              <div className="grid grid-cols-3 gap-1.5">
                {data.footerGallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Hoa cưới ${i + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 flex flex-wrap items-center justify-between gap-4 text-[10px] text-slate-400">
            <div>
              © Thiết kế website và lập trình bởi{" "}
              <strong className="text-white">{data.business.name}</strong> |
              Điều khoản | Bảo mật
            </div>
            <div className="flex items-center gap-3 text-white">
              <span>f</span>
              <span>G</span>
              <span>◎</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
