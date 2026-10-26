"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Package,
  Mail,
  Zap,
  Globe as Facebook,
  Camera as Instagram,
  PlayCircle as Youtube,
  Share2,
  X,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym10DefaultData,
  type PhongGym10Data,
  type PhongGym10SneakerModel
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongGym10Data = adaptClonedTemplateData(
    phongGym10DefaultData,
    incomingData
  );

  const [selectedSneaker, setSelectedSneaker] =
    useState<PhongGym10SneakerModel | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const block1 = data.editorialBlocks[0];
  const block2 = data.editorialBlocks[1];
  const block3 = data.editorialBlocks[2];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. THREE-TIER ATHLETIC HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        {/* Tier 1: Top Utility Bar */}
        <div className="border-b border-neutral-100 text-[10px] text-neutral-500">
          <div className="max-w-6xl mx-auto px-4 h-7 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-neutral-700">
                {data.business.name.split(" ")[0]}
              </span>
              <span className="text-neutral-300">|</span>
              <span> Thể Thao Chuyên Nghiệp</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="#lien-he" className="hover:text-black">
                Đăng nhập
              </a>
              <a href="#lien-he" className="hover:text-black font-bold">
                TRỢ GIÚP
              </a>
              <button
                type="button"
                onClick={() => setSelectedSneaker(data.sneakerModels[0])}
                className="inline-flex items-center gap-1 hover:text-black"
                aria-label="Giỏ hàng"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                {cartCount > 0 && (
                  <span className="font-bold text-black">({cartCount})</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tier 2: Main Nav + Search */}
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <a
            href="#trang-chu"
            className="w-9 h-9 rounded-full border-2 border-neutral-900 flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            <Zap className="w-4 h-4 fill-current" />
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[11px] font-extrabold uppercase tracking-wider text-neutral-800">
            <a href="#air-max-270" className="hover:text-neutral-500">
              NAM
            </a>
            <a href="#air-max-270" className="hover:text-neutral-500">
              NỮ
            </a>
            <a href="#van-dong-vien-tre" className="hover:text-neutral-500">
              NAM TRẺ
            </a>
            <a href="#van-dong-vien-tre" className="hover:text-neutral-500">
              NỮ TRẺ
            </a>
            <a href="#bo-suu-tap" className="hover:text-neutral-500">
              CỬA HÀNG
            </a>
            <a href="#lien-he" className="hover:text-neutral-500">
              LIÊN HỆ
            </a>
          </nav>

          <div className="relative w-44 sm:w-52">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full border border-neutral-200 rounded-xs px-3 py-1.5 pr-8 text-xs focus:outline-none focus:border-neutral-900"
            />
            <Search className="w-3.5 h-3.5 text-neutral-600 absolute right-2.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Tier 3: Free Delivery Ticker Bar */}
        <div className="bg-[#f5f5f5] border-t border-neutral-200/70 py-2">
          <div className="max-w-2xl mx-auto px-4 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-500 cursor-pointer" />
            <div className="inline-flex items-center gap-2">
              <Package className="w-3.5 h-3.5" />
              <span>{data.promoTickerText}</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* 2. RETRO-TECH SNEAKER HERO BANNER (DOT GRID BACKDROP) */}
      <section
        id="trang-chu"
        className="relative py-16 md:py-24 overflow-hidden border-b border-neutral-100"
        style={{
          backgroundColor: "#f3f3f3",
          backgroundImage:
            "radial-gradient(#cccccc 1px, transparent 1px)",
          backgroundSize: "10px 10px"
        }}
      >
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Floating White-Ice Sneaker */}
          <div className="md:col-span-6 relative flex justify-center">
            <div className="relative">
              <img
                src={data.heroLeftShoeImage}
                alt="Air Max Ice"
                className="w-72 sm:w-80 h-56 object-cover rounded shadow-xl transform -rotate-12 border-4 border-white"
              />
              <div className="absolute -bottom-3 -right-3 bg-white/95 border border-neutral-400 px-3 py-1.5 shadow-md text-[10px] font-mono">
                <div className="border-b border-neutral-300 pb-0.5 mb-1 font-bold">
                  ĐỆM KHÍ AIR 93
                </div>
                <span className="text-sky-600 font-extrabold">ÁP SUẤT TỐI ĐA</span>
              </div>
            </div>
          </div>

          {/* Right Floating Black-Neon Sneaker + Retro 180 Window */}
          <div className="md:col-span-6 relative flex justify-center">
            <div className="relative">
              <div className="hidden sm:flex absolute -top-6 -left-12 z-10 bg-black text-white px-4 py-3 border-2 border-neutral-300 shadow-lg font-mono text-2xl font-black tracking-widest">
                <span className="text-cyan-400">1</span>
                <span className="text-pink-500">8</span>
                <span className="text-amber-400">0</span>
              </div>
              <img
                src={data.heroRightShoeImage}
                alt="Air Max Retro"
                className="w-72 sm:w-80 h-56 object-cover rounded shadow-2xl transform rotate-6 border-4 border-amber-300"
              />
              <div className="mt-4 text-right font-black italic tracking-widest text-xl uppercase text-neutral-900">
                {data.business.name.split(" ")[0]}
                <div className="text-[10px] font-normal tracking-[0.5em] not-italic text-neutral-500">
                  A I R
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL BLOCK 1: AIR MAX 270 */}
      {block1 && (
        <section id="air-max-270" className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-3 mb-14">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              {block1.title}
            </h2>
            <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
              {block1.subtitle}
            </p>
            <div className="flex items-center justify-center gap-6 pt-2 text-xs font-extrabold text-neutral-900">
              <a
                href="#bo-suu-tap"
                className="border-b-2 border-neutral-900 pb-0.5 hover:text-neutral-600"
              >
                {block1.leftLinkLabel}
              </a>
              <a
                href="#bo-suu-tap"
                className="border-b-2 border-neutral-900 pb-0.5 hover:text-neutral-600"
              >
                {block1.rightLinkLabel}
              </a>
            </div>
          </div>

          {/* Dual Tilted Multi-Frame Collage Portraits */}
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative p-4">
              <div className="absolute inset-2 bg-neutral-900/5 transform -rotate-3" />
              <img
                src={block1.leftCollageImage}
                alt="Phong cách tập luyện Nữ"
                className="relative z-10 w-full h-[420px] object-cover shadow-xl transform rotate-2"
              />
            </div>

            <div className="relative p-4">
              <div className="absolute inset-2 bg-amber-400/15 transform rotate-3" />
              <img
                src={block1.rightCollageImage}
                alt="Phong cách tập luyện Nam"
                className="relative z-10 w-full h-[420px] object-cover shadow-xl transform -rotate-2"
              />
            </div>
          </div>
        </section>
      )}

      {/* 4. SPLIT SNEAKER SHOWCASE (MAX MONDAYS) */}
      <section className="py-14 bg-[#f8f8f8] border-y border-neutral-200/70">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative p-6 flex flex-col items-center">
            <div className="self-start mb-4">
              <div className="text-2xl font-black tracking-tight uppercase leading-none">
                MAX
              </div>
              <div className="text-[9px] tracking-[0.35em] uppercase text-neutral-500 mt-0.5">
                M O N D A Y S
              </div>
            </div>
            <img
              src={data.splitBannerLeftShoe}
              alt="VaporMax Anthracite"
              className="w-full max-w-md h-60 object-cover rounded shadow-lg"
            />
          </div>

          <div className="p-6 flex flex-col items-center justify-center">
            <div className="h-9 mb-4" />
            <img
              src={data.splitBannerRightShoe}
              alt="Air Max Black White"
              className="w-full max-w-md h-60 object-cover rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL BLOCK 2: AIR VAPORMAX FLYKNIT 2 */}
      {block2 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-3 mb-14">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              {block2.title}
            </h2>
            <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
              {block2.subtitle}
            </p>
            <div className="flex items-center justify-center gap-6 pt-2 text-xs font-extrabold text-neutral-900">
              <a
                href="#bo-suu-tap"
                className="border-b-2 border-neutral-900 pb-0.5 hover:text-neutral-600"
              >
                {block2.leftLinkLabel}
              </a>
              <a
                href="#bo-suu-tap"
                className="border-b-2 border-neutral-900 pb-0.5 hover:text-neutral-600"
              >
                {block2.rightLinkLabel}
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative p-3 bg-sky-600/10">
              <img
                src={block2.leftCollageImage}
                alt="Chạy bộ bứt tốc Nữ"
                className="w-full h-[420px] object-cover shadow-xl transform -rotate-1"
              />
            </div>

            <div className="relative p-3 bg-sky-600/10">
              <img
                src={block2.rightCollageImage}
                alt="Chạy bộ bứt tốc Nam"
                className="w-full h-[420px] object-cover shadow-xl transform rotate-1"
              />
            </div>
          </div>
        </section>
      )}

      {/* 6. EDITORIAL BLOCK 3: AIR MAX CHO VẬN ĐỘNG VIÊN TRẺ */}
      {block3 && (
        <section id="van-dong-vien-tre" className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-3 mb-14">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              {block3.title}
            </h2>
            <p className="text-xs text-neutral-500 max-w-lg mx-auto leading-relaxed">
              {block3.subtitle}
            </p>
            <div className="flex items-center justify-center gap-6 pt-2 text-xs font-extrabold text-neutral-900">
              <a
                href="#bo-suu-tap"
                className="border-b-2 border-neutral-900 pb-0.5 hover:text-neutral-600"
              >
                {block3.leftLinkLabel}
              </a>
              <a
                href="#bo-suu-tap"
                className="border-b-2 border-neutral-900 pb-0.5 hover:text-neutral-600"
              >
                {block3.rightLinkLabel}
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-sky-100/60 p-4">
              <img
                src={block3.leftCollageImage}
                alt="Vận động viên trẻ Nữ"
                className="w-full h-[420px] object-cover shadow-lg"
              />
            </div>

            <div className="bg-sky-100/60 p-4">
              <img
                src={block3.rightCollageImage}
                alt="Vận động viên trẻ Nam"
                className="w-full h-[420px] object-cover shadow-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* 7. KHÁM PHÁ TOÀN BỘ DÒNG AIR MAX (4x2 SNEAKER GRID) */}
      <section id="bo-suu-tap" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-3 mb-14">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              KHÁM PHÁ TOÀN BỘ AIR MAX
            </h2>
            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              Cổ điển, thế hệ mới hoặc tùy chỉnh cá nhân hóa — chọn ngay đôi Air Max phù hợp nhất với mục tiêu tập luyện của bạn.
            </p>
            <div className="flex items-center justify-center gap-6 pt-2 text-xs font-extrabold text-neutral-900">
              <a
                href="#bo-suu-tap"
                className="border-b-2 border-neutral-900 pb-0.5 hover:text-neutral-600"
              >
                Xem Tất Cả Air Max
              </a>
              <button
                type="button"
                onClick={() => setSelectedSneaker(data.sneakerModels[0])}
                className="border-b-2 border-neutral-900 pb-0.5 hover:text-neutral-600"
              >
                Tự Thiết Kế &amp; Đặt Mua
              </button>
            </div>
          </div>

          {/* 4x2 Sneaker Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-12">
            {data.sneakerModels.map((shoe) => (
              <div
                key={shoe.id}
                onClick={() => setSelectedSneaker(shoe)}
                className="group cursor-pointer text-center flex flex-col items-center"
              >
                <div className="w-full h-44 bg-[#f6f6f6] flex items-center justify-center p-4 mb-4 overflow-hidden">
                  <img
                    src={shoe.image}
                    alt={shoe.codeName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 group-hover:border-neutral-900">
                  {shoe.codeName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EMAIL SIGN-UP BANNER + MATTE BLACK FOOTER */}
      <section className="py-14 bg-[#f3f3f3] text-center border-t border-neutral-200">
        <div className="max-w-xl mx-auto px-4 space-y-2.5">
          <Mail className="w-8 h-8 text-neutral-700 mx-auto stroke-[1.5]" />
          <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide text-neutral-800">
            {data.newsletterHeading}
          </h2>
          <p className="text-xs text-neutral-500">{data.newsletterSubtext}</p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setEmailModalOpen(true)}
              className="text-xs font-extrabold uppercase text-neutral-700 border-b border-neutral-500 pb-0.5 hover:text-black hover:border-black"
            >
              {data.newsletterCta}
            </button>
          </div>
        </div>
      </section>

      <footer id="lien-he" className="bg-[#191919] text-neutral-400 pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-neutral-800 text-[10px]">
            <div className="md:col-span-3 space-y-2.5 font-extrabold uppercase text-white">
              <div>TÌM CỬA HÀNG</div>
              <div>ĐĂNG KÝ NHẬN TIN</div>
              <div>TRỞ THÀNH HỘI VIÊN</div>
              <div>GỬI PHẢN HỒI</div>
            </div>

            <div className="md:col-span-3 space-y-2">
              <h4 className="font-extrabold uppercase text-white mb-2.5">
                TRỢ GIÚP
              </h4>
              <div>Trạng thái đơn hàng</div>
              <div>Vận chuyển &amp; Giao nhận</div>
              <div>Đổi trả trong 30 ngày</div>
              <div>Phương thức thanh toán</div>
              <div>Liên hệ: {data.business.phone[0]}</div>
            </div>

            <div className="md:col-span-3 space-y-2">
              <h4 className="font-extrabold uppercase text-white mb-2.5">
                VỀ {data.business.name}
              </h4>
              <div>Tin tức thể thao</div>
              <div>Tuyển dụng huấn luyện viên</div>
              <div>Nhà đầu tư &amp; Đối tác</div>
              <div>{data.business.address}</div>
            </div>

            <div className="md:col-span-3 flex items-start md:justify-end gap-2.5">
              {[Facebook, Instagram, Share2, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#lien-he"
                  className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-white hover:text-black flex items-center justify-center text-neutral-400 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-5 text-center text-[10px] text-neutral-500">
            © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
          </div>
        </div>
      </footer>

      {/* SNEAKER QUICK-BUY MODAL */}
      {selectedSneaker && (
        <div
          onClick={() => setSelectedSneaker(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white p-6 relative shadow-2xl border-t-4 border-neutral-900"
          >
            <button
              type="button"
              onClick={() => setSelectedSneaker(null)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-3">
              <img
                src={selectedSneaker.image}
                alt={selectedSneaker.codeName}
                className="w-full h-52 object-cover rounded"
              />
              <h4 className="text-lg font-black uppercase text-neutral-900">
                {selectedSneaker.codeName}
              </h4>
              <p className="text-xs text-neutral-500">
                {selectedSneaker.subtitle}
              </p>
              <div className="text-base font-extrabold text-neutral-900">
                {selectedSneaker.price}
              </div>
              <button
                type="button"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  setSelectedSneaker(null);
                }}
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-700 text-white text-xs font-extrabold uppercase tracking-widest transition-colors"
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EMAIL SIGN-UP MODAL */}
      {emailModalOpen && (
        <div
          onClick={() => setEmailModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-white p-6 relative shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setEmailModalOpen(false)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="text-base font-black uppercase text-neutral-900 mb-2">
              {data.newsletterHeading}
            </h4>
            <p className="text-xs text-neutral-500 mb-4">
              {data.newsletterSubtext}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmailSent(true);
                setTimeout(() => {
                  setEmailSent(false);
                  setEmailModalOpen(false);
                }, 2000);
              }}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Nhập địa chỉ email của bạn..."
                className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-neutral-900"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-neutral-900 text-white text-xs font-extrabold uppercase tracking-wider"
              >
                ĐĂNG KÝ NGAY
              </button>
              {emailSent && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đăng ký nhận thông báo thành công!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
