"use client";

import React, { useState } from "react";
import {
  Search,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Star,
  Heart,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  X,
  Menu as MenuIcon,
  ShoppingBag,
  UtensilsCrossed,
  ArrowUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaHang2DefaultData,
  type NhaHang2Data,
  type NhaHang2MenuItem
} from "@/template-sources/nha_hang_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

const EXTRA_MENU_ITEMS: NhaHang2MenuItem[] = [
  {
    id: "menu-7",
    name: "Cá Tuyết Đại Tây Dương Áp Chảo Sốt Miso",
    price: "890,000 ₫",
    description:
      "Cá tuyết đen nhập khẩu ướp tương Miso ngọt 48 giờ, nướng vàng mặt dùng kèm măng tây và nấm Kim Châm.",
    category: "Khai Vị & Hải Sản"
  },
  {
    id: "menu-8",
    name: "Ức Vịt Pháp Áp Chảo Sốt Cam Grand Marnier",
    price: "650,000 ₫",
    description:
      "Ức vịt Magret da giòn thịt hồng mềm mọng, quyện sốt cam tươi và rượu hương cam Grand Marnier truyền thống.",
    category: "Món Chính"
  },
  {
    id: "menu-9",
    name: "Rượu Vang Đỏ Château Margaux Reserve (Ly / Chai)",
    price: "390,000 ₫",
    description:
      "Hương vị sâu lắng của quả mọng đen, gỗ sồi Pháp và hậu vị tannin mượt mà kéo dài.",
    category: "Rượu Vang"
  },
  {
    id: "menu-10",
    name: "Mì Ý Tươi Nấm Truffle Đen & Phô Mai Parmigiano",
    price: "520,000 ₫",
    description:
      "Sợi mì Tagliatelle thủ công trộn sốt kem nấm Truffle đen Ý bào tươi tại bàn.",
    category: "Món Chính"
  }
];

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NhaHang2Data = adaptClonedTemplateData(nhaHang2DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất Cả");
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);

  // Booking form state
  const [bookingDate, setBookingDate] = useState("2026-03-28");
  const [bookingTime, setBookingTime] = useState("19:30");
  const [bookingGuests, setBookingGuests] = useState("2 Khách");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const allMenuItems = showFullMenu
    ? [...data.menuItems, ...EXTRA_MENU_ITEMS]
    : data.menuItems;

  const filteredMenu =
    selectedCategory === "Tất Cả"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === selectedCategory);

  const testimonials = data.testimonials || nhaHang2DefaultData.testimonials || [];
  const currentTestimonial = testimonials[activeTestimonialIdx] || testimonials[0];
  const newsList = data.news || nhaHang2DefaultData.news || [];
  const activeBlog = newsList.find((item) => item.id === activeBlogId) || null;

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => setBookingSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-[#1c1917] font-sans selection:bg-[#f37021] selection:text-white relative">
      {/* Floating Quick-Action Side Rail (Matches NH002 right orange toolbar) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-0.5 shadow-lg">
        <a
          href="#menu"
          title="Thực đơn"
          className="w-10 h-10 bg-[#f37021] hover:bg-[#d95d12] text-white flex items-center justify-center transition-colors"
        >
          <UtensilsCrossed className="w-4 h-4" />
        </a>
        <a
          href="#booking"
          title="Đặt bàn nhanh"
          className="w-10 h-10 bg-[#f37021] hover:bg-[#d95d12] text-white flex items-center justify-center transition-colors"
        >
          <ShoppingBag className="w-4 h-4" />
        </a>
        <a
          href="#footer"
          title="Địa chỉ nhà hàng"
          className="w-10 h-10 bg-[#f37021] hover:bg-[#d95d12] text-white flex items-center justify-center transition-colors"
        >
          <MapPin className="w-4 h-4" />
        </a>
      </div>

      {/* 1. TRANSPARENT OVERLAY NAVBAR + 2. FULLSCREEN WINE & CHARCUTERIE HERO */}
      <section className="relative min-h-[680px] lg:min-h-[780px] flex flex-col justify-between overflow-hidden bg-[#120f0d] text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
        </div>

        {/* Top Navigation Bar */}
        <header className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-8 pt-6 pb-4 flex items-center justify-between border-b border-white/10">
          {/* Left Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-semibold tracking-[0.16em] uppercase text-white/90">
            <a href="#top" className="text-[#f37021] transition-colors">
              TRANG CHỦ
            </a>
            <a href="#about" className="hover:text-[#f37021] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#menu" className="hover:text-[#f37021] transition-colors">
              THỰC ĐƠN
            </a>
            <a href="#booking" className="hover:text-[#f37021] transition-colors">
              ĐẶT BÀN
            </a>
            <a href="#blog" className="hover:text-[#f37021] transition-colors">
              TIN TỨC
            </a>
            <a href="#footer" className="hover:text-[#f37021] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#f37021]"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          {/* Center Brand Logo (MONA food style) */}
          <a href="#top" className="flex flex-col items-center text-center group">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#f37021] font-semibold -mb-1">
              MONA
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {data.business.name.length > 22 ? "food" : data.business.name}
            </span>
          </a>

          {/* Right Search + Dark Book a Table CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#menu"
              aria-label="Tìm món ăn"
              className="text-white/80 hover:text-white transition-colors p-1.5"
            >
              <Search className="w-4 h-4" />
            </a>
            <a
              href="#booking"
              className="bg-[#111111]/90 hover:bg-[#f37021] text-white border border-white/20 hover:border-[#f37021] text-[11px] font-semibold uppercase tracking-[0.16em] px-5 py-2.5 transition-all"
            >
              ĐẶT BÀN NGAY
            </a>
          </div>
        </header>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="relative z-30 lg:hidden bg-[#1c1917]/95 backdrop-blur-md px-6 py-5 border-b border-white/10 space-y-3 text-xs uppercase tracking-widest">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white hover:text-[#f37021]"
            >
              Giới thiệu
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white hover:text-[#f37021]"
            >
              Thực đơn
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white hover:text-[#f37021]"
            >
              Đặt bàn
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white hover:text-[#f37021]"
            >
              Tin tức ẩm thực
            </a>
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-white hover:text-[#f37021]"
            >
              Liên hệ
            </a>
          </div>
        )}

        {/* Center Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center my-auto py-16">
          <div className="flex flex-col items-center mb-4">
            <span className="w-7 h-[1.5px] bg-[#f37021] mb-1" />
            <span className="w-4 h-[1.5px] bg-[#f37021]" />
          </div>
          <p className="text-sm sm:text-base font-serif italic text-white/90 tracking-wide mb-3">
            {data.hero.eyebrow || "Mona Foodie"}
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-medium leading-[1.18] text-white mb-8 max-w-3xl mx-auto drop-shadow-sm">
            {data.hero.title}
          </h1>
          <div>
            <a
              href={data.hero.ctaLink || "#menu"}
              className="inline-block bg-[#f37021] hover:bg-[#dc5e12] text-white text-[11px] font-semibold uppercase tracking-[0.2em] px-8 py-3.5 rounded-sm shadow-lg transition-all"
            >
              {data.hero.ctaText || "XEM MENU"}
            </a>
          </div>
        </div>

        {/* Bottom Opening Hours & Address Bar */}
        <div className="relative z-10 text-center pb-7 px-4 text-[11px] sm:text-xs text-white/75 space-y-1">
          <p>{data.business.workingHours || "Thứ Hai - Chủ Nhật: 11:30 - 15:00 & 18:00 - 23:00"}</p>
          <p className="text-white/65">{data.business.address}</p>
        </div>
      </section>

      {/* 3. QUALITY SERVICE SPLIT SECTION ("Bộ Sưu Tập Rượu Vang & Ẩm Thực Thượng Hạng") */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Overlapping Dual Photos */}
            <div className="lg:col-span-6 relative pb-16 sm:pb-24 pr-6 sm:pr-16">
              <div className="w-[82%] aspect-[4/5] overflow-hidden shadow-xl bg-stone-900">
                <img
                  src={data.qualitySection.mainImage}
                  alt="Không gian bàn tiệc"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-[62%] aspect-[4/4.6] overflow-hidden shadow-2xl border-8 border-white bg-stone-800 absolute right-0 bottom-0">
                <img
                  src={data.qualitySection.secondaryImage}
                  alt="Sommelier rót rượu vang"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Editorial Text */}
            <div className="lg:col-span-6 lg:pl-6">
              <div className="w-6 h-[1.5px] bg-[#f37021] mb-4" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-stone-500 mb-3">
                {data.qualitySection.eyebrow}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-[#1c1917] mb-6">
                {data.business.aboutTitle || data.qualitySection.title}
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] text-stone-600 leading-relaxed mb-8">
                {data.business.aboutText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <a
                href="#booking"
                className="inline-block bg-[#f37021] hover:bg-[#d95d12] text-white text-[11px] font-bold uppercase tracking-[0.18em] px-7 py-3.5 transition-all"
              >
                {data.qualitySection.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE MENU BLOCK (#f9f6f0 Warm Alabaster Cream background) */}
      <section id="menu" className="py-20 lg:py-24 bg-[#f9f6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-6 h-[1.5px] bg-[#f37021] mx-auto mb-3" />
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-stone-500 mb-2">
              THỰC ĐƠN ĐẶC SẮC
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] mb-3">
              Tinh Hoa Ẩm Thực Âu - Á
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Những tuyệt tác ẩm thực được chế biến từ nguyên liệu thượng hạng nhập khẩu mỗi ngày
            </p>

            {/* Interactive Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {["Tất Cả", "Món Chính", "Khai Vị & Hải Sản", "Rượu Vang"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    if (cat === "Rượu Vang") setShowFullMenu(true);
                  }}
                  className={`px-4 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-full ${
                    selectedCategory === cat
                      ? "bg-[#f37021] text-white shadow-sm"
                      : "bg-white text-stone-600 hover:text-[#f37021] border border-stone-200/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Dotted-Leader Menu List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            {filteredMenu.map((item) => (
              <div key={item.id} className="group">
                <div className="flex items-baseline gap-3 mb-1.5">
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#1c1917] group-hover:text-[#f37021] transition-colors shrink-0">
                    {item.name}
                  </h3>
                  <div className="flex-1 border-b border-stone-300 border-dotted min-w-[24px]" />
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#f37021] shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowFullMenu(!showFullMenu)}
              className="inline-block bg-[#f37021] hover:bg-[#d95d12] text-white text-[11px] font-bold uppercase tracking-[0.18em] px-8 py-3.5 transition-all"
            >
              {showFullMenu ? "THU GỌN THỰC ĐƠN" : "XEM TOÀN BỘ MENU"}
            </button>
          </div>
        </div>
      </section>

      {/* 5. FEATURED DINING SPACE BANNER */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white overflow-hidden">
            {/* Left White Story Card */}
            <div className="md:col-span-5 p-6 sm:p-8 flex items-center bg-white">
              <div className="flex items-start gap-4">
                <img
                  src={data.spaceHighlight.thumbnail}
                  alt="Không gian"
                  className="w-20 h-20 object-cover shrink-0 rounded-xs"
                />
                <div>
                  <span className="text-[11px] text-stone-400 block mb-1">
                    {data.spaceHighlight.tag}
                  </span>
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#f37021] leading-snug mb-2">
                    {data.spaceHighlight.title}
                  </h3>
                  <p className="text-[11px] text-stone-400">{data.spaceHighlight.date}</p>
                </div>
              </div>
            </div>

            {/* Right Wide Candlelit Table Photo */}
            <div className="md:col-span-7 h-64 sm:h-80 md:h-auto overflow-hidden">
              <img
                src={data.spaceHighlight.bannerImage}
                alt="Bàn tiệc lãng mạn"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FULL-BLEED ASYMMETRIC CULINARY COLLAGE */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 h-auto md:h-[560px] lg:h-[640px]">
          {/* Left Tall Dining Room Interior */}
          <div className="md:col-span-3 h-72 md:h-full overflow-hidden">
            <img
              src={data.collageImages.leftTall}
              alt="Nội thất nhà hàng sang trọng"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Center 2 Stacked Photos (Chef Plating + Artisan Cocktail) */}
          <div className="md:col-span-3 flex flex-col h-96 md:h-full">
            <div className="h-1/2 overflow-hidden">
              <img
                src={data.collageImages.centerTop}
                alt="Đầu bếp chế biến sốt"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-1/2 overflow-hidden">
              <img
                src={data.collageImages.centerBottom}
                alt="Cocktail thủ công"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Large Romantic Banquet Table */}
          <div className="md:col-span-6 h-80 md:h-full overflow-hidden">
            <img
              src={data.collageImages.rightLarge}
              alt="Không gian bàn tiệc tối dưới ánh nến"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 7. 3 FEATURE ICON COLUMNS + CENTERED TESTIMONIAL */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          {/* 3 Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center pb-16 border-b border-stone-100">
            {data.features.map((feat) => (
              <div key={feat.id} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#fff5ee] text-[#f37021] flex items-center justify-center mb-4">
                  {feat.icon === "star" && <Star className="w-5 h-5" />}
                  {feat.icon === "heart" && <Heart className="w-5 h-5" />}
                  {feat.icon === "clock" && <Clock className="w-5 h-5" />}
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1c1917] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-500 max-w-xs leading-relaxed mb-3">
                  {feat.description}
                </p>
                <a
                  href="#menu"
                  className="text-stone-400 hover:text-[#f37021] transition-colors"
                  aria-label={feat.title}
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Centered Customer Quote & Interactive Avatars */}
          {currentTestimonial && (
            <div className="pt-16 max-w-2xl mx-auto text-center">
              <div className="text-[#f37021] font-serif text-4xl leading-none mb-4">“</div>
              <p className="font-serif text-base sm:text-lg text-stone-700 leading-relaxed mb-6 italic">
                {currentTestimonial.content}
              </p>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1c1917]">
                  {currentTestimonial.author}
                </p>
                <p className="text-[11px] text-stone-400 mt-0.5">{currentTestimonial.role}</p>
              </div>

              {/* 3 Interactive Avatars */}
              <div className="flex items-center justify-center gap-4">
                {testimonials.map((t, index) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTestimonialIdx(index)}
                    className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                      activeTestimonialIdx === index
                        ? "border-[#f37021] scale-110 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8. "NHỮNG ĐIỀU THÚ VỊ — Những thông tin hữu ích" */}
      <section id="blog" className="py-20 lg:py-24 bg-[#f9f6f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <div className="w-6 h-[1.5px] bg-[#f37021] mx-auto mb-3" />
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-stone-500 mb-2">
              NHỮNG ĐIỀU THÚ VỊ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917]">
              Những thông tin hữu ích
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.map((post) => (
              <article
                key={post.id}
                onClick={() => setActiveBlogId(post.id)}
                className="group cursor-pointer bg-white border border-stone-200/70 hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 flex items-center justify-between gap-3">
                  <h3 className="font-serif text-sm sm:text-base font-medium text-[#1c1917] group-hover:text-[#f37021] transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                  <span className="w-7 h-7 rounded-full border border-stone-300 group-hover:border-[#f37021] group-hover:bg-[#f37021] group-hover:text-white flex items-center justify-center shrink-0 text-stone-500 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RESERVATION SPLIT CARD ("Đặt Bàn Trực Tuyến / Booking") */}
      <section id="booking" className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 shadow-[0_25px_70px_rgba(0,0,0,0.09)] bg-white overflow-hidden">
            {/* Left Sommelier Pouring Wine Photo */}
            <div className="lg:col-span-5 h-80 lg:h-auto overflow-hidden">
              <img
                src={data.reservationImage}
                alt="Đặt bàn thưởng thức rượu vang"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right White Card with Watermark "Booking" */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative bg-white">
              <div className="text-center mb-8 relative">
                <span className="font-serif text-5xl sm:text-6xl text-stone-200/70 select-none block leading-none">
                  Booking
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1917] -mt-9 relative z-10">
                  Đặt bàn trước
                </h2>
              </div>

              {bookingSubmitted ? (
                <div className="bg-[#fff5ee] border border-[#f37021]/30 p-6 text-center rounded-sm space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#f37021] mx-auto" />
                  <h3 className="font-serif text-lg font-semibold text-[#1c1917]">
                    Đã ghi nhận yêu cầu đặt bàn!
                  </h3>
                  <p className="text-xs text-stone-600">
                    Bàn cho <strong>{bookingGuests}</strong> vào lúc <strong>{bookingTime}</strong>{" "}
                    ngày <strong>{bookingDate}</strong> đã được giữ chỗ. Lễ tân {data.business.name}{" "}
                    sẽ liên hệ xác nhận ngay.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* NGÀY ĐẶT */}
                    <div className="border-b border-stone-300 pb-2">
                      <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1c1917] mb-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#f37021]" />
                        NGÀY ĐẶT
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full text-xs sm:text-sm text-stone-700 bg-transparent focus:outline-none"
                        required
                      />
                    </div>

                    {/* GIỜ ĐẾN */}
                    <div className="border-b border-stone-300 pb-2">
                      <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1c1917] mb-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#f37021]" />
                        GIỜ ĐẾN
                      </label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full text-xs sm:text-sm text-stone-700 bg-transparent focus:outline-none"
                      >
                        <option value="11:30">11:30 Trưa</option>
                        <option value="12:30">12:30 Trưa</option>
                        <option value="18:30">18:30 Tối</option>
                        <option value="19:30">19:30 Tối</option>
                        <option value="20:30">20:30 Tối</option>
                        <option value="21:15">21:15 Tối</option>
                      </select>
                    </div>

                    {/* SỐ KHÁCH */}
                    <div className="border-b border-stone-300 pb-2">
                      <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1c1917] mb-1.5">
                        <Users className="w-3.5 h-3.5 text-[#f37021]" />
                        SỐ KHÁCH
                      </label>
                      <select
                        value={bookingGuests}
                        onChange={(e) => setBookingGuests(e.target.value)}
                        className="w-full text-xs sm:text-sm text-stone-700 bg-transparent focus:outline-none"
                      >
                        <option value="1 Khách">1 Khách</option>
                        <option value="2 Khách">2 Khách (Bàn đôi)</option>
                        <option value="4 Khách">4 Khách (Gia đình)</option>
                        <option value="6 Khách">6 Khách</option>
                        <option value="8-12 Khách (Phòng VIP)">8-12 Khách (Phòng VIP)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      placeholder="Số điện thoại liên hệ xác nhận bàn (tuỳ chọn)..."
                      className="w-full border-b border-stone-200 pb-2 text-xs text-stone-600 bg-transparent focus:outline-none focus:border-[#f37021]"
                    />
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="bg-[#f37021] hover:bg-[#d95d12] text-white text-[11px] font-bold uppercase tracking-[0.18em] px-10 py-3.5 rounded-full shadow-md transition-all"
                    >
                      ĐẶT BÀN NGAY
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. 6-COLUMN FULL-BLEED FOOD GALLERY STRIP + WARM CREAM 4-COLUMN FOOTER */}
      <section className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
          {data.galleryImages.map((imgUrl, idx) => (
            <div key={idx} className="aspect-square overflow-hidden bg-stone-100">
              <img
                src={imgUrl}
                alt={`Thư viện ẩm thực ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* WARM CREAM 4-COLUMN FOOTER */}
      <footer id="footer" className="bg-[#f9f6f0] pt-16 pb-10 text-stone-600 mt-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-200">
            {/* Col 1: Giờ mở cửa */}
            <div>
              <h4 className="font-serif text-sm font-bold text-[#1c1917] mb-4">
                Giờ mở cửa
              </h4>
              <ul className="space-y-2 text-xs text-stone-500">
                <li>Thứ Hai - Thứ Sáu: 09:00 – 22:00</li>
                <li>Thứ Bảy: 09:00 – 23:00</li>
                <li>Chủ Nhật: 11:00 – 22:30</li>
              </ul>
            </div>

            {/* Col 2: Địa chỉ */}
            <div>
              <h4 className="font-serif text-sm font-bold text-[#1c1917] mb-4">
                Văn phòng & Nhà hàng
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed mb-3">
                {data.business.address}
              </p>
              <p className="text-xs text-stone-500 underline mb-3">{primaryEmail}</p>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="font-serif text-base font-bold text-[#1c1917] hover:text-[#f37021] transition-colors"
              >
                {primaryPhone}
              </a>
            </div>

            {/* Col 3: Liên kết */}
            <div>
              <h4 className="font-serif text-sm font-bold text-[#1c1917] mb-4">
                Liên kết
              </h4>
              <ul className="space-y-2 text-xs text-stone-500">
                <li>
                  <a href="#top" className="hover:text-[#f37021] transition-colors">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#f37021] transition-colors">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-[#f37021] transition-colors">
                    Thực đơn
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-[#f37021] transition-colors">
                    Đặt bàn
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-[#f37021] transition-colors">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Kết nối */}
            <div>
              <h4 className="font-serif text-sm font-bold text-[#1c1917] mb-4">
                Kết nối với chúng tôi
              </h4>
              <div className="flex items-center gap-2.5">
                {["FB", "IG", "YT"].map((label) => (
                  <a
                    key={label}
                    href="#footer"
                    className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-[10px] font-bold text-[#1c1917] hover:bg-[#f37021] hover:border-[#f37021] hover:text-white transition-all"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-4">
            <p>
              © Bản quyền thuộc về <strong className="text-stone-600">{data.business.name}</strong>.
              Thiết kế chuẩn Fine Dining.
            </p>
            <a
              href="#top"
              aria-label="Lên đầu trang"
              className="w-8 h-8 rounded-full bg-[#1c1917] text-white flex items-center justify-center hover:bg-[#f37021] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* Blog Detail Modal */}
      {activeBlog && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setActiveBlogId(null)}
        >
          <div
            className="bg-white max-w-lg w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveBlogId(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#f37021]"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={activeBlog.image}
              alt={activeBlog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f37021]">
                {activeBlog.category} • {activeBlog.date}
              </span>
              <h3 className="font-serif text-xl text-[#1c1917]">{activeBlog.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{activeBlog.excerpt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
