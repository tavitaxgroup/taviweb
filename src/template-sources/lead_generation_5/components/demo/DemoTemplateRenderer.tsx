"use client";

import React, { useState } from "react";
import {
  Heart,
  Play,
  ShieldCheck,
  ChefHat,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ShoppingBag,
  X,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration5DefaultData,
  type LeadGeneration5Data,
  type MonaCakeProduct,
  type MonaCakeValueBlock
} from "@/template-sources/lead_generation_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function RedLotusDivider() {
  return (
    <div className="flex items-center justify-center gap-2 my-3">
      <span className="w-6 h-[1.5px] bg-[#c8232c]" />
      <span className="w-3.5 h-3.5 rounded-full bg-[#c8232c] flex items-center justify-center text-[8px] text-white font-bold">
        ❀
      </span>
      <span className="w-6 h-[1.5px] bg-[#c8232c]" />
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration5Data = adaptClonedTemplateData(
    leadGeneration5DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<MonaCakeProduct[]>([]);
  const [selectedStoryBlock, setSelectedStoryBlock] =
    useState<MonaCakeValueBlock | null>(null);

  // Order form state
  const [orderName, setOrderName] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderQty, setOrderQty] = useState("2 Hộp Phú Quý Đoàn Viên");
  const [orderNote, setOrderNote] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@monacake.vn";
  const testimonials = data.testimonials || leadGeneration5DefaultData.testimonials || [];

  const handleAddToCart = (prod: MonaCakeProduct) => {
    setCartItems((prev) => [...prev, prod]);
    setOrderQty(`${prod.name} (x${cartItems.length + 1})`);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setOrderName("");
    setOrderEmail("");
    setOrderPhone("");
    setOrderNote("");
    setTimeout(() => setOrderSubmitted(false), 5000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#221c18] font-sans selection:bg-[#c8232c] selection:text-white"
    >
      {/* 1. TRANSLUCENT TOP NAVBAR + MOONCAKE GIFT BOX HERO */}
      <section className="relative min-h-[460px] sm:min-h-[540px] flex flex-col justify-between overflow-hidden bg-[#1e1210] text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/75" />

        {/* Top Navbar */}
        <header className="relative z-20 max-w-6xl w-full mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white text-[#c8232c] flex items-center justify-center font-serif font-extrabold text-sm shadow">
              MC
            </div>
            <span className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white">
              {data.business.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-bold">
            <a href="#top" className="text-white hover:text-[#f1c40f]">
              Đầu trang
            </a>
            <a href="#collection" className="text-white hover:text-[#f1c40f]">
              Sản phẩm
            </a>
            <a href="#order-section" className="text-[#f1c40f] underline underline-offset-4">
              Đặt hàng {cartItems.length > 0 ? `(${cartItems.length})` : ""}
            </a>
            <a href="#footer" className="text-white hover:text-[#f1c40f]">
              Liên hệ
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </header>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="relative z-30 md:hidden bg-black/90 px-6 py-4 space-y-2 text-xs font-bold">
            <a
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white hover:text-[#f1c40f]"
            >
              Bộ sưu tập bánh
            </a>
            <a
              href="#traditional"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white hover:text-[#f1c40f]"
            >
              Bánh nướng & Bánh dẻo
            </a>
            <a
              href="#order-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#f1c40f]"
            >
              Đặt hàng ngay
            </a>
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white hover:text-[#f1c40f]"
            >
              Liên hệ
            </a>
          </div>
        )}

        {/* Centered Hero Title & Yellow Poetic Couplet */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center my-auto py-14">
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold uppercase tracking-wide text-white mb-2 drop-shadow">
            {data.hero.title}
          </h1>
          <p className="text-base sm:text-xl font-bold text-white/95 mb-5">
            {data.hero.subtitle}
          </p>
          <div className="space-y-1 text-xs sm:text-sm italic font-semibold text-[#f1c40f]">
            {data.heroPoem.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DARK WOOD POETIC BANNER ("Tết đoàn viên gia đình sung túc" & "Tết giàu có") */}
      <section className="bg-[#1b1615] text-white py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Red Heart Icon */}
            <div className="md:col-span-3 flex justify-center">
              <div className="w-28 h-28 rounded-full bg-[#c8232c]/20 border-2 border-[#c8232c] flex items-center justify-center shadow-lg">
                <Heart className="w-14 h-14 text-[#e74c3c] fill-current" />
              </div>
            </div>

            {/* Middle Col: Tết đoàn viên gia đình sung túc */}
            <div className="md:col-span-5 space-y-1.5 text-center md:text-left">
              <h2 className="text-base sm:text-lg font-extrabold text-[#e74c3c] mb-2">
                {data.poeticBanner.leftTitle}
              </h2>
              {data.poeticBanner.leftLines.map((line, idx) => (
                <p key={idx} className="text-xs text-white/85">
                  {line}
                </p>
              ))}
            </div>

            {/* Right Col: Tết giàu có */}
            <div className="md:col-span-4 space-y-1.5 text-center md:text-left">
              <h2 className="text-base sm:text-lg font-extrabold text-[#e74c3c] mb-2">
                {data.poeticBanner.rightTitle}
              </h2>
              {data.poeticBanner.rightLines.map((line, idx) => (
                <p key={idx} className="text-xs text-white/85">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WARM PARCHMENT (#efe4c8) "BỘ SƯU TẬP — PHÚ QUÝ ĐOÀN VIÊN" */}
      <section id="collection" className="py-16 lg:py-20 bg-[#efe4c8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-sm sm:text-base font-extrabold text-[#b31b22] mb-1">
              {data.collectionSection.eyebrow}
            </p>
            <p className="text-sm sm:text-base font-extrabold uppercase text-[#d35400] mb-4">
              {data.collectionSection.subtitle}
            </p>
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#221c18]">
              {data.collectionSection.title}
            </h2>
            <RedLotusDivider />
          </div>

          {/* 4 White Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.collectionSection.products.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded shadow-sm overflow-hidden flex flex-col justify-between text-center pb-5 group hover:shadow-lg transition-all"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-stone-100 mb-4">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-xs font-bold text-stone-700 leading-snug mb-2 min-h-[34px]">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-extrabold text-[#221c18] mb-3">{prod.price}</p>
                  </div>
                </div>

                <div className="px-4">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(prod)}
                    className="bg-[#d9232e] hover:bg-[#b31b22] text-white text-[11px] font-bold uppercase px-5 py-2 rounded-xs transition-colors inline-flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>THÊM VÀO GIỎ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHITE VIDEO + 4 TRUST BADGES SPLIT SECTION */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Video Player Preview */}
            <div className="lg:col-span-6 relative rounded overflow-hidden shadow-md group bg-black h-64 sm:h-72">
              <img
                src={data.videoHighlights.videoThumbnail}
                alt={data.videoHighlights.videoTitle}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/60" />
              <p className="absolute top-3 left-4 right-4 text-xs font-semibold text-white truncate">
                {data.videoHighlights.videoTitle}
              </p>
              <a
                href="#order-section"
                aria-label="Xem video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-10 rounded-lg bg-[#c8232c] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
              >
                <Play className="w-5 h-5 fill-current" />
              </a>
            </div>

            {/* Right 2x2 Trust Badges Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 text-center">
              {data.videoHighlights.badges.map((bg) => (
                <div key={bg.id} className="flex flex-col items-center p-3">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-xs ${
                      bg.icon === "new"
                        ? "bg-amber-400 text-white"
                        : bg.icon === "shield"
                        ? "bg-emerald-600 text-white"
                        : bg.icon === "chef"
                        ? "bg-amber-100 text-[#b31b22]"
                        : "bg-sky-100 text-[#c8232c]"
                    }`}
                  >
                    {bg.icon === "new" && <Sparkles className="w-7 h-7" />}
                    {bg.icon === "shield" && <ShieldCheck className="w-7 h-7" />}
                    {bg.icon === "chef" && <ChefHat className="w-7 h-7" />}
                    {bg.icon === "phone" && <PhoneCall className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xs font-extrabold text-stone-800">
                    {bg.icon === "phone" ? `HOTLINE : ${primaryPhone}` : bg.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK PARALLAX "BÁNH NƯỚNG TRUYỀN THỐNG" & "BÁNH DẺO TRUYỀN THỐNG" */}
      <section
        id="traditional"
        className="relative py-16 lg:py-20 bg-[#231d1b] text-white overflow-hidden space-y-16"
      >
        {/* Top Half: Bánh nướng truyền thống */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {data.traditionalShowcases.bakedTitle}
          </h2>
          <p className="text-xs sm:text-sm font-bold text-white/90 mb-3">
            {data.traditionalShowcases.bakedSubtitle}
          </p>
          <div className="space-y-1 text-[11px] sm:text-xs font-semibold text-[#f1c40f] max-w-2xl mx-auto mb-8">
            {data.traditionalShowcases.bakedDesc.map((d, idx) => (
              <p key={idx}>{d}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.traditionalShowcases.bakedImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white p-1.5 rounded shadow-lg overflow-hidden h-48 sm:h-52"
              >
                <img
                  src={img}
                  alt={`Bánh nướng truyền thống ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Half: Bánh dẻo truyền thống */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center pt-4 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {data.traditionalShowcases.snowSkinTitle}
          </h2>
          <p className="text-xs sm:text-sm font-bold text-white/90 mb-3">
            {data.traditionalShowcases.snowSkinSubtitle}
          </p>
          <div className="space-y-1.5 text-[11px] sm:text-xs font-semibold text-[#f1c40f] max-w-3xl mx-auto mb-8">
            {data.traditionalShowcases.snowSkinDesc.map((d, idx) => (
              <p key={idx}>{d}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.traditionalShowcases.snowSkinImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white p-1.5 rounded shadow-lg overflow-hidden h-48 sm:h-52"
              >
                <img
                  src={img}
                  alt={`Bánh dẻo truyền thống ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WARM PARCHMENT (#efe4c8) "CÓ MỘT CÂU CHUYỆN KỂ RẰNG" */}
      <section className="py-16 lg:py-20 bg-[#efe4c8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#c8232c]">
              {data.business.aboutTitle || data.artisanStory.title}
            </h2>
            <RedLotusDivider />
          </div>

          <div className="space-y-4 text-xs sm:text-[13px] text-stone-700 leading-relaxed text-justify">
            {data.artisanStory.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHITE ZIG-ZAG "CHÂN – THIỆN – MỸ" EDITORIAL BLOCKS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#c8232c] mb-1">
              {data.philosophyBlocks.title}
            </h2>
            <p className="text-xs sm:text-sm italic font-bold text-stone-700 mb-2">
              {data.philosophyBlocks.subtitle}
            </p>
            <p className="text-sm sm:text-base font-extrabold uppercase text-[#c8232c]">
              {data.philosophyBlocks.pillarsLabel}
            </p>
            <RedLotusDivider />
          </div>

          <div className="border border-stone-100 shadow-xs">
            {data.philosophyBlocks.items.map((block) => (
              <div
                key={block.id}
                className="grid grid-cols-1 md:grid-cols-12 items-center bg-[#fafafa]"
              >
                {block.imagePosition === "left" ? (
                  <>
                    <div className="md:col-span-6 h-64 sm:h-72 overflow-hidden">
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-6 p-7 sm:p-10 space-y-3">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#c8232c]">
                        {block.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {block.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSelectedStoryBlock(block)}
                        className="bg-[#d9232e] hover:bg-[#b31b22] text-white text-[11px] font-bold px-4 py-1.5 rounded-xs transition-colors"
                      >
                        Đọc thêm
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-6 p-7 sm:p-10 space-y-3 order-2 md:order-1">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#c8232c]">
                        {block.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {block.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSelectedStoryBlock(block)}
                        className="bg-[#d9232e] hover:bg-[#b31b22] text-white text-[11px] font-bold px-4 py-1.5 rounded-xs transition-colors"
                      >
                        Đọc thêm
                      </button>
                    </div>
                    <div className="md:col-span-6 h-64 sm:h-72 overflow-hidden order-1 md:order-2">
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WARM PARCHMENT (#efe4c8) SPLIT "MONA CAKE CAM KẾT" & "CẢM NHẬN KHÁCH HÀNG" */}
      <section className="py-16 bg-[#efe4c8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Cam kết với khách hàng */}
            <div className="lg:col-span-6">
              <div className="text-center mb-6">
                <h2 className="text-base sm:text-lg font-extrabold text-[#c8232c]">
                  {data.business.name} cam kết với khách hàng
                </h2>
                <RedLotusDivider />
              </div>

              <ul className="space-y-3 text-xs text-stone-700">
                {data.commitments.map((cm, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c8232c] shrink-0 mt-0.5" />
                    <span>{cm}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Cảm nhận khách hàng */}
            <div className="lg:col-span-6">
              <div className="text-center mb-6">
                <h2 className="text-base sm:text-lg font-extrabold text-[#c8232c]">
                  Cảm nhận khách hàng
                </h2>
                <RedLotusDivider />
              </div>

              {testimonials[0] && (
                <div className="text-xs text-stone-700 leading-relaxed space-y-2">
                  <p className="font-extrabold text-stone-900">{testimonials[0].author}</p>
                  <p className="text-justify">{testimonials[0].content}</p>
                  <div className="flex items-center justify-center gap-1.5 pt-2">
                    <span className="w-2 h-2 rounded-full bg-stone-600" />
                    <span className="w-2 h-2 rounded-full bg-stone-400" />
                    <span className="w-2 h-2 rounded-full bg-stone-400" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHITE SPLIT "ĐẶT HÀNG NGAY" DARK FORM CARD & "CHÍNH SÁCH MỚI DÀNH CHO KHÁCH HÀNG" */}
      <section id="order-section" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Dark Order Form Card */}
            <div className="lg:col-span-5 bg-[#221c1a] text-white p-7 sm:p-8 rounded shadow-xl">
              <h2 className="text-lg sm:text-xl font-extrabold text-center text-white mb-5">
                Đặt hàng ngay
              </h2>

              {orderSubmitted ? (
                <div className="bg-[#c8232c]/20 border border-[#c8232c] p-5 text-center rounded space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#f1c40f] mx-auto" />
                  <h3 className="text-sm font-bold">Đã tiếp nhận đơn đặt bánh!</h3>
                  <p className="text-xs text-white/80">
                    Cảm ơn quý khách! {data.business.name} sẽ liên hệ xác nhận số lượng hộp và địa
                    chỉ giao hàng ngay.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleOrderSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={orderName}
                      onChange={(e) => setOrderName(e.target.value)}
                      placeholder="Họ và tên"
                      className="bg-white text-stone-800 px-3 py-2 text-xs focus:outline-none"
                    />
                    <input
                      type="email"
                      value={orderEmail}
                      onChange={(e) => setOrderEmail(e.target.value)}
                      placeholder="Email"
                      className="bg-white text-stone-800 px-3 py-2 text-xs focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      value={orderPhone}
                      onChange={(e) => setOrderPhone(e.target.value)}
                      placeholder="Số điện thoại"
                      className="bg-white text-stone-800 px-3 py-2 text-xs focus:outline-none"
                    />
                    <input
                      type="text"
                      value={orderQty}
                      onChange={(e) => setOrderQty(e.target.value)}
                      placeholder="Số lượng"
                      className="bg-white text-stone-800 px-3 py-2 text-xs focus:outline-none"
                    />
                  </div>
                  <textarea
                    rows={3}
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Lời nhắn (yêu cầu xuất hóa đơn VAT, in logo doanh nghiệp...)"
                    className="w-full bg-white text-stone-800 px-3 py-2 text-xs focus:outline-none"
                  />
                  <div className="text-center pt-1">
                    <button
                      type="submit"
                      className="bg-[#d9232e] hover:bg-[#b31b22] text-white text-xs font-bold uppercase px-12 py-2.5 transition-colors"
                    >
                      GỬI
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Customer Policies */}
            <div className="lg:col-span-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#c8232c]">
                {data.policies.title}
              </h2>
              <h3 className="text-base sm:text-lg font-extrabold text-[#c8232c] mb-4">
                {data.policies.subtitle}
              </h3>
              <ul className="space-y-3 text-xs text-stone-600">
                {data.policies.items.map((item, idx) => (
                  <li key={idx} className="pb-2 border-b border-stone-100">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DARK FOOTER WITH MAP */}
      <footer id="footer" className="bg-[#141110] text-white/80 pt-14 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-center">
            {/* Left Contact Info */}
            <div className="lg:col-span-6 space-y-3 text-xs">
              <h3 className="text-xl font-extrabold text-white mb-4">Liên hệ với chúng tôi</h3>
              <p className="flex items-start gap-2.5 text-white/75">
                <MapPin className="w-4 h-4 text-[#f1c40f] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2.5 text-white/75">
                <Phone className="w-4 h-4 text-[#f1c40f] shrink-0" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-center gap-2.5 text-white/75">
                <Mail className="w-4 h-4 text-[#f1c40f] shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>

            {/* Right Map Embed */}
            <div className="lg:col-span-6 rounded overflow-hidden border border-white/20 h-48 bg-stone-800">
              <iframe
                title="Bản đồ Mona Cake"
                src="https://www.openstreetmap.org/export/embed.html?bbox=106.645%2C10.765%2C106.665%2C10.780&layer=mapnik"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-white/45">
            © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* Story Detail Modal */}
      {selectedStoryBlock && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedStoryBlock(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedStoryBlock(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={selectedStoryBlock.image}
              alt={selectedStoryBlock.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-extrabold text-[#c8232c]">
                {selectedStoryBlock.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedStoryBlock.description}
              </p>
              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                {selectedStoryBlock.fullStory}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
