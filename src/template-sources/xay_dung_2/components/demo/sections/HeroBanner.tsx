import React from "react";
import Link from "next/link";

interface HeroBannerProps {
  subtitle?: string;
  title?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export function HeroBanner({
  subtitle = "THIẾT KẾ KIẾN TRÚC & THI CÔNG NỘI THẤT CAO CẤP",
  title = "Kiến Tạo Không Gian Sống Đẳng Cấp",
  ctaText = "XEM DỰ ÁN",
  ctaLink = "#projects",
  backgroundImage = "/templates/xay-dung-2/hero-banner.jpg",
}: HeroBannerProps) {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pt-24 pb-16">
        <div className="subtitle text-[12px] sm:text-[13px] font-normal tracking-[0.28em] text-white/90 uppercase mb-4">
          {subtitle}
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-[68px] font-light tracking-tight leading-[1.15] text-white mb-10 font-sans">
          {title}
        </h1>

        <div className="inline-block">
          <Link
            href={ctaLink}
            className="group inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] uppercase text-white hover:text-white/80 transition-all duration-300"
          >
            <span className="w-6 h-[1px] bg-white group-hover:w-10 transition-all duration-300" />
            <span>{ctaText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
