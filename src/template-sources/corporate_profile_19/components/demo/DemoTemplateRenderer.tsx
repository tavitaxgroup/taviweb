"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  ShoppingBag,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe,
  Star,
  Calendar,
  Compass,
  CheckCircle2,
  X,
  Menu,
  Send,
  Clock,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile19MockData,
  CorporateProfile19Data,
  BestSellerTourItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  companyName?: string;
  customData?: Partial<CorporateProfile19Data>;
}

export function DemoTemplateRenderer({
  companyName,
  customData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData(corporateProfile19MockData, {
    ...customData,
    business: {
      ...corporateProfile19MockData.business,
      ...(customData?.business || {}),
      ...(companyName ? { name: companyName } : {}),
    },
  });

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(
    data.searchFilterOptions.categories[0]
  );
  const [selectedPrice, setSelectedPrice] = useState(
    data.searchFilterOptions.priceRanges[0]
  );
  const [selectedDuration, setSelectedDuration] = useState(
    data.searchFilterOptions.durations[0]
  );
  const [selectedDeparture, setSelectedDeparture] = useState(
    data.searchFilterOptions.departures[0]
  );
  const [discountOnly, setDiscountOnly] = useState(false);
  const [filteredNotice, setFilteredNotice] = useState<string | null>(null);

  const [countdown, setCountdown] = useState({
    hours: data.countdownPromo.initialHours,
    minutes: data.countdownPromo.initialMinutes,
    seconds: data.countdownPromo.initialSeconds,
  });

  const [cartItems, setCartItems] = useState<BestSellerTourItem[]>([]);
  const [activeBookingTour, setActiveBookingTour] =
    useState<BestSellerTourItem | null>(null);
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    title: string;
    location: string;
    image: string;
  } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [footerForm, setFooterForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [footerSubmitted, setFooterSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 14, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide =
    data.heroSlides[activeSlideIndex] || data.heroSlides[0];

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) =>
      prev === 0 ? data.heroSlides.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) =>
      prev === data.heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const handleSearchFilter = (e: React.FormEvent) => {
    e.preventDefault();
    const parts: string[] = [];
    if (selectedCategory !== data.searchFilterOptions.categories[0]) {
      parts.push(selectedCategory);
    }
    if (selectedPrice !== data.searchFilterOptions.priceRanges[0]) {
      parts.push(selectedPrice);
    }
    if (selectedDuration !== data.searchFilterOptions.durations[0]) {
      parts.push(selectedDuration);
    }
    if (selectedDeparture !== data.searchFilterOptions.departures[0]) {
      parts.push(`Khởi hành: ${selectedDeparture}`);
    }
    if (discountOnly) {
      parts.push("Đang giảm giá");
    }

    setFilteredNotice(
      parts.length > 0
        ? `Đang hiển thị các hành trình phù hợp với bộ lọc: ${parts.join(" • ")}`
        : "Đang hiển thị tất cả 6 hành trình Tour Mua Nhiều nổi bật nhất."
    );
    const target = document.getElementById("tour-mua-nhieu");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookTour = (tour: BestSellerTourItem) => {
    setCartItems((prev) => [...prev, tour]);
    setActiveBookingTour(tour);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };

  const handleFooterFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerForm.name.trim() || !footerForm.phone.trim()) return;
    setFooterSubmitted(true);
    setFooterForm({ name: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased selection:bg-[#2ecc71] selection:text-white">
      {/* 1. DARK NAVY TOPBAR */}
      <div className="bg-[#0c2340] text-white text-xs border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between min-h-[40px] py-1.5 gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span
              title={data.topbar.address}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#2ecc71] transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#2ecc71]" />
              <span className="font-semibold uppercase tracking-wide">
                ĐỊA CHỈ
              </span>
            </span>
            <a
              href={`mailto:${data.topbar.email}`}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#2ecc71] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#2ecc71]" />
              <span className="font-semibold uppercase tracking-wide">
                EMAIL
              </span>
            </a>
            <a
              href={`tel:${data.topbar.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 text-white font-bold hover:text-[#2ecc71] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2ecc71]" />
              <span>{data.topbar.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href="#tour-mua-nhieu"
              className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold text-xs px-4 py-1.5 rounded-sm transition-colors shadow-sm"
            >
              {data.topbar.ctaLabel}
            </a>
          </div>
        </div>
      </div>

      {/* 2. HERO WITH TRANSLUCENT DARK NAVBAR + OVERLAPPING WHITE SEARCH FILTER BAR */}
      <section className="relative">
        {/* Hero Background Image */}
        <div className="relative h-[560px] sm:h-[620px] w-full overflow-hidden bg-[#0c2340]">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover object-center transition-all duration-700 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/65" />

          {/* Dark Translucent Navigation Header */}
          <header className="relative z-20 bg-black/35 backdrop-blur-[2px] border-b border-white/15">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
              {/* Brand Logo M🌐NA */}
              <a
                href="#"
                className="flex items-center gap-1 text-white font-extrabold text-3xl tracking-tight select-none"
              >
                <span>M</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2ecc71]/20 border border-[#2ecc71] text-[#2ecc71]">
                  <Globe className="w-5 h-5" />
                </span>
                <span className="text-[#2ecc71]">NA</span>
              </a>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-7">
                {data.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider text-white hover:text-[#2ecc71] transition-colors py-2"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                    )}
                    {item.badge && (
                      <span className="ml-1 px-1.5 py-0.5 text-[10px] font-extrabold bg-[#e74c3c] text-white rounded-sm leading-none">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </nav>

              {/* Right Search & Cart */}
              <div className="flex items-center gap-4 text-white">
                <a
                  href="#tour-mua-nhieu"
                  aria-label="Tìm kiếm tour"
                  className="p-2 hover:text-[#2ecc71] transition-colors"
                >
                  <Search className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    if (cartItems.length > 0) {
                      setActiveBookingTour(cartItems[cartItems.length - 1]);
                    } else {
                      setActiveBookingTour(data.bestSellerTours[0]);
                    }
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold hover:text-[#2ecc71] transition-colors"
                >
                  <span>
                    {cartItems.length > 0
                      ? `${cartItems.length} Tour`
                      : "0 ₫"}
                  </span>
                  <div className="relative">
                    <ShoppingBag className="w-4 h-4" />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#2ecc71] text-white text-[10px] flex items-center justify-center font-extrabold">
                        {cartItems.length}
                      </span>
                    )}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-white hover:text-[#2ecc71]"
                  aria-label="Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden bg-[#0c2340] border-t border-white/10 px-4 py-4 space-y-2">
                {data.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-bold text-white hover:text-[#2ecc71]"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[10px] bg-[#e74c3c] text-white rounded">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </header>

          {/* Slider Prev / Next Arrows */}
          <button
            type="button"
            onClick={handlePrevSlide}
            aria-label="Slide trước"
            className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/50 bg-black/25 hover:bg-[#2ecc71] hover:border-[#2ecc71] text-white items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNextSlide}
            aria-label="Slide tiếp theo"
            className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/50 bg-black/25 hover:bg-[#2ecc71] hover:border-[#2ecc71] text-white items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Hero Center Headline Content */}
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 h-[calc(100%-80px)] flex flex-col items-center justify-center text-center pb-14">
            <p className="text-white/95 text-base sm:text-xl font-medium tracking-wide mb-2 drop-shadow">
              {currentSlide.subtitle}
            </p>
            <h1 className="text-white text-3xl sm:text-5xl md:text-[54px] font-extrabold uppercase tracking-wider leading-tight mb-6 drop-shadow-md">
              {currentSlide.title}
            </h1>
            <a
              href="#tour-mua-nhieu"
              className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              {currentSlide.ctaText}
            </a>
          </div>
        </div>

        {/* Overlapping White Tour Filter Card */}
        <div className="relative z-20 max-w-[1140px] mx-auto px-4 sm:px-6 -mt-12">
          <form
            onSubmit={handleSearchFilter}
            className="bg-white rounded shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-gray-100 p-4 sm:p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 items-center">
              {/* Danh mục */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-11 pl-3.5 pr-8 text-sm text-gray-700 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#2ecc71] appearance-none cursor-pointer"
                >
                  {data.searchFilterOptions.categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Giá */}
              <div className="relative">
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full h-11 pl-3.5 pr-8 text-sm text-gray-700 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#2ecc71] appearance-none cursor-pointer"
                >
                  {data.searchFilterOptions.priceRanges.map((price) => (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Số ngày */}
              <div className="relative">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full h-11 pl-3.5 pr-8 text-sm text-gray-700 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#2ecc71] appearance-none cursor-pointer"
                >
                  {data.searchFilterOptions.durations.map((dur) => (
                    <option key={dur} value={dur}>
                      {dur}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Nơi khởi hành */}
              <div className="relative">
                <select
                  value={selectedDeparture}
                  onChange={(e) => setSelectedDeparture(e.target.value)}
                  className="w-full h-11 pl-3.5 pr-8 text-sm text-gray-700 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#2ecc71] appearance-none cursor-pointer"
                >
                  {data.searchFilterOptions.departures.map((dep) => (
                    <option key={dep} value={dep}>
                      {dep}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Giảm giá Checkbox */}
              <label className="flex items-center justify-between h-11 px-3.5 text-sm text-gray-600 bg-white border border-gray-200 rounded cursor-pointer select-none hover:border-[#2ecc71]">
                <span>Giảm giá</span>
                <input
                  type="checkbox"
                  checked={discountOnly}
                  onChange={(e) => setDiscountOnly(e.target.checked)}
                  className="w-4 h-4 accent-[#2ecc71] rounded cursor-pointer"
                />
              </label>

              {/* Nút TÌM KIẾM */}
              <button
                type="submit"
                className="w-full h-11 bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold text-sm uppercase tracking-wider rounded-full transition-colors shadow-sm"
              >
                TÌM KIẾM
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. TOUR MUA NHIỀU (3x2 FRAMED CARDS WITH STAMP & PINK CATEGORY) */}
      <section id="tour-mua-nhieu" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Section Title + 3 Green Dots */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-wide text-[#222222]">
              TOUR MUA NHIỀU
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
            </div>
            {filteredNotice && (
              <div className="mt-4 inline-flex items-center gap-2 bg-[#2ecc71]/10 border border-[#2ecc71]/30 text-[#1e8449] text-xs font-semibold px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                <span>{filteredNotice}</span>
              </div>
            )}
          </div>

          {/* 3x2 Framed Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.bestSellerTours.map((tour) => (
              <div
                key={tour.id}
                onClick={() => handleBookTour(tour)}
                className="group bg-white p-3.5 border-[6px] border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_32px_rgba(46,204,113,0.18)] hover:border-[#2ecc71]/30 transition-all cursor-pointer flex flex-col"
              >
                {/* Square Image with Circular Stamp Overlay at Bottom-Left */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Circular Postage Stamp Badge at bottom-left */}
                  <div className="absolute bottom-3 left-3 w-14 h-14 rounded-full border-2 border-dashed border-white/90 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-1 shadow-md -rotate-12">
                    <Compass className="w-4 h-4 text-[#2ecc71] mb-0.5" />
                    <span className="text-[8px] font-extrabold uppercase tracking-tighter text-center leading-tight">
                      {tour.stampText}
                    </span>
                  </div>
                  {/* Duration pill on top-right */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm">
                    {tour.duration}
                  </div>
                </div>

                {/* Card Body: Pink Category + Tour Title + Bold Price */}
                <div className="pt-4 pb-2 px-1 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#e84393] mb-1">
                      {tour.category}
                    </p>
                    <h3 className="text-xs sm:text-[13px] font-semibold text-gray-600 line-clamp-1 mb-2 group-hover:text-[#2ecc71] transition-colors">
                      {tour.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-[17px] font-extrabold text-[#111111]">
                    {tour.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FULL-WIDTH DARK PARALLAX COUNTDOWN PROMO BANNER */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <img
          src={data.countdownPromo.backgroundImage}
          alt={data.countdownPromo.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-xl sm:text-3xl font-bold tracking-wide mb-2">
            {data.countdownPromo.title}{" "}
            <span className="text-2xl sm:text-4xl font-extrabold text-white underline decoration-[#2ecc71] decoration-2 underline-offset-8">
              {data.countdownPromo.highlight}
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-white/90 font-medium mt-3 mb-8">
            {data.countdownPromo.subtitle}
          </p>

          {/* 3 Translucent Countdown Boxes: GIỜ - PHÚT - GIÂY */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-8">
            <div className="w-24 sm:w-28 py-3.5 rounded bg-white/20 backdrop-blur-sm border border-white/25 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold leading-none">
                {String(countdown.hours).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest mt-1.5 text-white/90">
                GIỜ
              </span>
            </div>
            <div className="w-24 sm:w-28 py-3.5 rounded bg-white/20 backdrop-blur-sm border border-white/25 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold leading-none">
                {String(countdown.minutes).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest mt-1.5 text-white/90">
                PHÚT
              </span>
            </div>
            <div className="w-24 sm:w-28 py-3.5 rounded bg-white/20 backdrop-blur-sm border border-white/25 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-extrabold leading-none">
                {String(countdown.seconds).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest mt-1.5 text-white/90">
                GIÂY
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleBookTour(data.bestSellerTours[0])}
            className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3 rounded shadow-lg transition-all"
          >
            {data.countdownPromo.ctaLabel}
          </button>
        </div>
      </section>

      {/* 5. ĐIỂM ĐẾN PHỔ BIẾN (3 TALL OVERLAY CARDS) */}
      <section id="diem-den-pho-bien" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-wide text-[#222222]">
              ĐIỂM ĐẾN PHỔ BIẾN
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.popularDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() =>
                  handleBookTour({
                    id: dest.id,
                    category: dest.cityTitle,
                    title: `${dest.cityTitle} — ${dest.subtitle}`,
                    price: dest.price,
                    duration: "3 Ngày 2 Đêm",
                    transport: "Máy bay khứ hồi",
                    image: dest.image,
                    stampText: dest.cityTitle,
                  })
                }
                className="group relative h-[250px] sm:h-[270px] rounded overflow-hidden shadow-md cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={dest.cityTitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Bottom Centered White Text Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-center text-white">
                  <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide mb-1 drop-shadow">
                    {dest.cityTitle}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/95 leading-relaxed">
                    {dest.subtitle}{" "}
                    <span className="text-[#2ecc71] font-extrabold">
                      {dest.price}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LÝ DO CHỌN MONA TRAVEL (PARALLAX BEACH + 3x2 WHITE CARDS WITH GREEN 01..06) */}
      <section
        id="ly-do-chon"
        className="relative py-16 sm:py-20 overflow-hidden"
      >
        <img
          src={data.whyChooseBgImage}
          alt="Lý do chọn MONA Travel"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-wide text-white">
              LÝ DO CHỌN MONA TRAVEL
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyChooseReasons.map((reason) => (
              <div
                key={reason.id}
                className="bg-white rounded p-6 shadow-lg flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-[#2ecc71] leading-none shrink-0">
                  {reason.number}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-[#222222] mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CẨM NANG DU LỊCH TỪ A – Z (3 BLOG CARDS WITH XEM THÊM BUTTON) */}
      <section id="cam-nang-du-lich" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-wide text-[#222222]">
              CẨM NANG DU LỊCH TỪ A – Z
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.travelGuides.map((guide) => (
              <article
                key={guide.id}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold uppercase text-[#222222] leading-snug mb-1.5 hover:text-[#2ecc71] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 mb-3">
                      {guide.date}
                    </p>
                    <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-5 line-clamp-3">
                      {guide.excerpt}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#lien-he"
                      className="inline-block border border-gray-300 hover:border-[#2ecc71] hover:bg-[#2ecc71] hover:text-white text-gray-600 text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-sm transition-colors"
                    >
                      XEM THÊM
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. KHÁCH HÀNG NHẬN XÉT (PARALLAX SCENIC BAY + 3 CIRCULAR PORTRAITS & 5 STARS) */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <img
          src={data.reviewsBgImage}
          alt="Khách hàng nhận xét"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0c2340]/65" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-wide text-white">
              KHÁCH HÀNG NHẬN XÉT
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.customerReviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col items-center text-center px-3"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md mb-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-1 text-[#f39c12] mb-3">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 fill-[#f39c12] text-[#f39c12]"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-[13px] italic text-white/95 leading-relaxed mb-3">
                  “{review.comment}”
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-white">
                  {review.name}{" "}
                  <span className="font-normal text-white/75">
                    / {review.role}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. THIÊN ĐƯỜNG HỘI TỤ (3x2 PHOTO GALLERY GRID) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-wide text-[#222222]">
              THIÊN ĐƯỜNG HỘI TỤ
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.paradiseGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxImage(item)}
                className="group relative aspect-[16/10] rounded-sm overflow-hidden shadow-sm cursor-pointer bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100">
                  <p className="text-white font-extrabold text-sm uppercase tracking-wider">
                    {item.title}
                  </p>
                  <p className="text-[#2ecc71] text-xs font-semibold mt-1">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. GREEN HILLS NEWSLETTER BANNER + ĐỐI TÁC CỦA CHÚNG TÔI */}
      <section className="relative py-14 sm:py-16 overflow-hidden">
        <img
          src={data.newsletterBanner.backgroundImage}
          alt={data.newsletterBanner.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white mb-4">
              {data.newsletterBanner.title}
            </h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row items-center gap-2 max-w-lg mx-auto lg:mx-0 bg-white rounded-full p-1.5 shadow-lg"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={data.newsletterBanner.placeholder}
                required
                className="w-full flex-1 px-4 py-2 text-sm text-gray-700 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-colors shrink-0"
              >
                ĐĂNG KÝ
              </button>
            </form>
            {newsletterSubscribed && (
              <p className="text-xs text-[#2ecc71] font-bold mt-2">
                ✓ Cảm ơn bạn đã đăng ký nhận bản tin khuyến mãi từ MONA Travel!
              </p>
            )}
          </div>

          {/* Large M🌐NA Logo on Right */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 text-white font-extrabold text-5xl sm:text-6xl tracking-tight select-none drop-shadow-lg">
              <span>M</span>
              <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2ecc71]/25 border-2 border-[#2ecc71] text-[#2ecc71]">
                <Globe className="w-8 h-8 sm:w-10 sm:h-10" />
              </span>
              <span className="text-[#2ecc71]">NA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ĐỐI TÁC CỦA CHÚNG TÔI */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#222222]">
              ĐỐI TÁC CỦA CHÚNG TÔI
            </h3>
            <div className="flex items-center justify-center gap-1.5 mt-2.5">
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {data.partnerBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex flex-col items-center justify-center p-4 rounded border border-gray-100 hover:border-[#2ecc71]/40 transition-colors text-center"
              >
                <span
                  className="text-xl sm:text-2xl font-extrabold tracking-tight"
                  style={{ color: brand.accentColor }}
                >
                  {brand.name}
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                  {brand.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. DARK CHARCOAL 4-COLUMN FOOTER (#191919) */}
      <footer id="lien-he" className="bg-[#191919] text-gray-300 pt-14 pb-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: M🌐NA Intro */}
            <div>
              <div className="flex items-center gap-1 text-white font-extrabold text-3xl tracking-tight mb-4">
                <span>M</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2ecc71]/20 border border-[#2ecc71] text-[#2ecc71]">
                  <Globe className="w-5 h-5" />
                </span>
                <span className="text-[#2ecc71]">NA</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {data.business.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#2ecc71] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Giấy phép Lữ hành Quốc tế & Nội địa</span>
              </div>
            </div>

            {/* Col 2: Liên Hệ */}
            <div>
              <h4 className="text-white font-bold text-base mb-4">Liên Hệ</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#2ecc71] shrink-0 mt-0.5" />
                  <span>{data.topbar.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#2ecc71] shrink-0" />
                  <a
                    href={`tel:${data.topbar.phone.replace(/\s+/g, "")}`}
                    className="hover:text-[#2ecc71] transition-colors"
                  >
                    {data.topbar.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#2ecc71] shrink-0" />
                  <a
                    href={`mailto:${data.topbar.email}`}
                    className="hover:text-[#2ecc71] transition-colors"
                  >
                    {data.topbar.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#2ecc71] shrink-0" />
                  <span>{data.business.workingHours}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Tour Phổ Biến (3x2 Mini Photo Grid) */}
            <div>
              <h4 className="text-white font-bold text-base mb-4">
                Tour Phổ Biến
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {data.footerPopularThumbnails.map((thumbUrl, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      handleBookTour(
                        data.bestSellerTours[
                          index % data.bestSellerTours.length
                        ]
                      )
                    }
                    className="aspect-square rounded-sm overflow-hidden bg-gray-800 group"
                  >
                    <img
                      src={thumbUrl}
                      alt={`Tour phổ biến ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Col 4: Để Lại Lời Nhắn */}
            <div>
              <h4 className="text-white font-bold text-base mb-4">
                Để Lại Lời Nhắn
              </h4>
              <form onSubmit={handleFooterFormSubmit} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  value={footerForm.name}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, name: e.target.value })
                  }
                  required
                  className="w-full h-9 px-3 text-xs bg-white text-gray-800 rounded-sm focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={footerForm.email}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, email: e.target.value })
                  }
                  className="w-full h-9 px-3 text-xs bg-white text-gray-800 rounded-sm focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  value={footerForm.phone}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, phone: e.target.value })
                  }
                  required
                  className="w-full h-9 px-3 text-xs bg-white text-gray-800 rounded-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full h-9 bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>GỬI</span>
                </button>
              </form>
              {footerSubmitted && (
                <p className="text-[11px] text-[#2ecc71] mt-2">
                  ✓ Đã gửi thông tin! Tư vấn viên sẽ liên hệ quý khách ngay.
                </p>
              )}
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-gray-500">
            © Bản quyền thuộc về{" "}
            <span className="text-white font-semibold">
              {data.business.name}
            </span>
            . Thiết kế & Vận hành bởi hệ thống Lữ hành Quốc tế MONA Travel.
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {activeBookingTour && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-md max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-48">
              <img
                src={activeBookingTour.image}
                alt={activeBookingTour.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveBookingTour(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#e74c3c]"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-[#e84393] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-sm">
                {activeBookingTour.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-extrabold text-[#222222] mb-2">
                {activeBookingTour.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 mb-4">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#2ecc71]" />
                  {activeBookingTour.duration}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Plane className="w-3.5 h-3.5 text-[#2ecc71]" />
                  {activeBookingTour.transport}
                </span>
                <span className="text-base font-extrabold text-[#2ecc71] ml-auto">
                  {activeBookingTour.price}
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-5">
                Quý khách đã chọn hành trình này. Vui lòng gọi trực tiếp Hotline{" "}
                <strong className="text-[#0c2340]">{data.topbar.phone}</strong>{" "}
                hoặc xác nhận đặt giữ chỗ ưu đãi 30% ngay bên dưới.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveBookingTour(null)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 border border-gray-200 rounded hover:bg-gray-50"
                >
                  Đóng
                </button>
                <a
                  href="#lien-he"
                  onClick={() => setActiveBookingTour(null)}
                  className="px-5 py-2 text-xs font-bold bg-[#2ecc71] hover:bg-[#27ae60] text-white rounded"
                >
                  Xác Nhận Giữ Chỗ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GALLERY LIGHTBOX MODAL */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded overflow-hidden shadow-2xl"
          >
            <img
              src={activeLightboxImage.image}
              alt={activeLightboxImage.title}
              className="w-full max-h-[75vh] object-cover"
            />
            <div className="p-4 flex items-center justify-between bg-[#0c2340] text-white">
              <div>
                <h4 className="font-bold text-sm uppercase">
                  {activeLightboxImage.title}
                </h4>
                <p className="text-xs text-[#2ecc71]">
                  {activeLightboxImage.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveLightboxImage(null)}
                className="px-3 py-1 text-xs font-bold bg-white/10 hover:bg-white/20 rounded"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
