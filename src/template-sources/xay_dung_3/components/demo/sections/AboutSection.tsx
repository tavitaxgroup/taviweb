"use client";

import React from "react";

interface AboutSectionProps {
  badge: string;
  experienceYears: string;
  experienceLabel: string;
  title: string;
  highlightTitle: string;
  paragraphs: string[];
  specialties: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
}

export function AboutSection({
  badge,
  experienceYears,
  experienceLabel,
  title,
  highlightTitle,
  paragraphs,
  specialties,
  ctaText,
  ctaLink,
  image,
}: AboutSectionProps) {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white text-[#1e1e1e]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Experience Box with Scroll Reveal */}
          <div className="lg:col-span-6 relative bim-reveal-left">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none shadow-xl overflow-hidden bg-white border border-[#eeeeee] group">
              
              {/* Architectural Image */}
              <div className="relative h-[480px] sm:h-[560px] overflow-hidden">
                <img
                  src={image || "/templates/xay-dung-3/exp.jpg"}
                  alt="Architecture Experience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlaid Inset White Experience Card with Hover Lift */}
                <div className="absolute bottom-4 left-4 right-4 p-5 sm:bottom-8 sm:left-8 sm:right-8 sm:p-8 bg-white shadow-2xl border border-[#eeeeee] flex flex-col justify-between transition-transform duration-400 group-hover:-translate-y-2">
                  <div className="text-right">
                    <span className="bim-font-playfair text-[#b19777] text-xs font-semibold tracking-[3px] uppercase">
                      TỪ NĂM 1999
                    </span>
                  </div>

                  <div className="my-2">
                    <div 
                      className="bim-font-playfair text-6xl sm:text-8xl lg:text-[110px] font-black leading-none tracking-tight select-none"
                      style={{
                        backgroundImage: "url('/templates/xay-dung-3/exp.jpg')",
                        backgroundPosition: "18% 65%",
                        backgroundRepeat: "no-repeat",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {experienceYears || "21"}
                    </div>
                    <div className="bim-font-playfair italic text-[#b19777] text-sm sm:text-lg mt-1 font-semibold tracking-wider">
                      {experienceLabel || "Years Experience"}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Editorial Copy with Scroll Reveal */}
          <div className="lg:col-span-6 lg:pl-6 bim-reveal-right">
            {/* Subtitle in gold */}
            <div className="bim-font-poppins text-xs font-semibold tracking-[2px] text-[#b19777] uppercase mb-3">
              {badge || "About us"}
            </div>

            {/* Main Heading in Playfair */}
            <h2 className="bim-font-playfair text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1e1e1e] leading-[1.2] mb-6">
              {title || "Best Designers"} <br />
              <span>{highlightTitle || "Architectures for You."}</span>
            </h2>

            {/* Paragraphs */}
            <div className="bim-font-poppins space-y-4 text-[#666666] text-sm sm:text-base leading-relaxed mb-8 font-light">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Horizontal Specialties with vertical bars: ARCHITECTURE | INTERIOR DESIGN | FURNITURE */}
            <div className="bim-font-poppins flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium tracking-[2px] uppercase text-[#888888] mb-10 pb-6 border-b border-[#eeeeee]">
              {specialties.map((spec, idx) => (
                <React.Fragment key={spec}>
                  <span className="hover:text-[#b19777] transition-colors">{spec}</span>
                  {idx < specialties.length - 1 && <span className="text-[#cccccc]">|</span>}
                </React.Fragment>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={ctaLink || "#services"}
                className="bim-font-poppins inline-flex items-center justify-center px-8 py-3.5 bg-[#b19777] hover:bg-[#1e1e1e] text-white font-medium text-xs uppercase tracking-[2px] transition-all duration-300 shadow-sm"
              >
                {ctaText || "TÌM HIỂU THÊM"}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
