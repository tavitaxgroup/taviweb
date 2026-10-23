"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  titlePrefix: string;
  titleOutline: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  sliderImages?: string[];
  backgroundImage: string;
}

const AUTOPLAY_MS = 7000;

export function HeroSection({
  titlePrefix,
  titleOutline,
  titleHighlight,
  description,
  ctaText,
  ctaLink,
  sliderImages,
  backgroundImage,
}: HeroSectionProps) {
  const slides = [
    {
      image: sliderImages && sliderImages[0] ? sliderImages[0] : (backgroundImage || "/templates/xay-dung-3/2.jpg"),
      title1: titlePrefix || "Kiến Trúc",
      titleOutline: titleOutline || "Hiện Đại",
      titleSolid: titleHighlight || "Đột Phá",
      desc: description || "Chúng tôi phát triển phương pháp tiếp cận toàn diện, kết hợp hài hòa giữa kiến trúc biểu tượng, quy hoạch đô thị và cảnh quan sinh thái.",
      cta: ctaText || "KHÁM PHÁ DỰ ÁN",
      link: ctaLink || "#portfolio",
    },
    {
      image: sliderImages && sliderImages[1] ? sliderImages[1] : "/templates/xay-dung-3/04.jpg",
      title1: "Không Gian",
      titleOutline: "Độc Bản",
      titleSolid: "Tinh Tế",
      desc: "Tôn vinh giá trị sống thượng lưu qua từng đường nét thiết kế nội thất chỉn chu, mang đậm dấu ấn cá nhân hóa cho từng gia chủ.",
      cta: "HỒ SƠ NĂNG LỰC",
      link: "#about",
    },
  ];

  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setCurrent((prev) => (prev + dir + total) % total);
  }, [total]);

  // Autoplay timer
  useEffect(() => {
    if (total < 2 || paused) return;
    const timer = window.setTimeout(() => {
      go(1);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [current, paused, total, go]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      go(dx < 0 ? 1 : -1);
    }
    touchStartX.current = null;
  };

  const activeSlide = slides[current];

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[650px] max-h-[1050px] w-full overflow-hidden bg-[#18191b] select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* 100% Full-Width Edge-to-Edge Background Slides */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {slides.map((s, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={s.image}
                alt=""
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                loading={idx === 0 ? "eager" : "lazy"}
                draggable={false}
              />
              {/* Luxury Cinematic Contrast Overlays */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
            </div>
          );
        })}
      </div>

      {/* Main Centered Content (Centered Across 100% Screen Width) */}
      <div className="relative z-20 h-full w-full max-w-[1380px] mx-auto px-6 lg:px-12 flex flex-col justify-center items-center text-center">
        <div className="max-w-[960px] mx-auto pt-16">
          <div key={current} className="bim-hero-anim">
            {/* Main Headline with Outline Typography */}
            <h1 className="bim-font-playfair text-white text-5xl sm:text-6xl md:text-7xl lg:text-[86px] xl:text-[94px] font-bold leading-[1.08] tracking-tight mb-6">
              <span className="block drop-shadow-lg">{activeSlide.title1}</span>
              <span className="flex items-center justify-center gap-x-4 sm:gap-x-6 flex-wrap">
                <span className="bim-stroke-hero italic font-normal tracking-wide">
                  {activeSlide.titleOutline}
                </span>
                <span className="drop-shadow-lg">{activeSlide.titleSolid}</span>
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="bim-font-poppins text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-[720px] mx-auto mb-10 tracking-wide">
              {activeSlide.desc}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href={activeSlide.link}
                className="bim-font-poppins inline-flex items-center justify-center px-10 py-4 bg-[#b19777] hover:bg-white text-white hover:text-[#18191b] font-medium text-xs sm:text-sm uppercase tracking-[2.5px] transition-all duration-300 shadow-2xl hover:scale-105"
              >
                {activeSlide.cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows: Left & Right Balanced (matching original Slick Slider) */}
      {total > 1 && (
        <>
          {/* Previous Arrow (Left Edge) */}
          <button
            onClick={() => go(-1)}
            className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/35 hover:bg-[#b19777] hover:border-[#b19777] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md hover:scale-110 shadow-xl"
            aria-label="Slide trước"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow (Right Edge) */}
          <button
            onClick={() => go(1)}
            className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/35 hover:bg-[#b19777] hover:border-[#b19777] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md hover:scale-110 shadow-xl"
            aria-label="Slide tiếp theo"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Bottom Controls Bar across 100% width */}
      <div className="absolute bottom-8 left-0 right-0 z-30 max-w-[1380px] mx-auto px-6 lg:px-12 flex items-center justify-between pointer-events-none">
        {/* Bottom Left: Social Media Icons */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {[
            { label: "f", href: "#hero" },
            { label: "x", href: "#hero" },
            { label: "Be", href: "#hero" },
            { label: "p", href: "#hero" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-8 h-8 rounded-full border border-white/20 bg-white/10 hover:bg-[#b19777] hover:border-[#b19777] text-white flex items-center justify-center text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center Bottom: Mouse Scroll Down Indicator (Dead-Center on entire screen) */}
        <a
          href="#about"
          className="absolute left-1/2 -translate-x-1/2 pointer-events-auto flex flex-col items-center group text-white/70 hover:text-[#b19777] transition-colors"
          aria-label="Cuộn xuống"
        >
          <div className="w-[20px] h-[34px] rounded-full border border-white/40 group-hover:border-[#b19777] transition-colors flex justify-center pt-2">
            <div className="w-[5px] h-[5px] rounded-full bg-[#b19777] bim-scroll-dot" />
          </div>
        </a>

        {/* Bottom Right: Slide Counter (e.g. 01 / 02) */}
        <div className="bim-font-poppins text-white/90 text-sm font-semibold tracking-widest pointer-events-auto flex items-center gap-1">
          <span className="text-white">0{current + 1}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/60">0{total}</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
