"use client";

import React from "react";
import { PortfolioStripItem } from "@/template-sources/xay_dung_3/types/demo";

interface PortfolioStripProps {
  badge: string;
  title: string;
  items: PortfolioStripItem[];
}

export function PortfolioStrip({ items }: PortfolioStripProps) {
  return (
    <section id="portfolio" className="w-full bg-[#18191b] overflow-hidden">
      {/* 4 Full-Width Seamless Columns matching original template */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
        {items.map((item, idx) => {
          const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
          return (
            <div
              key={item.id}
              className={`bim-portfolio-strip-item relative h-[450px] sm:h-[500px] lg:h-[580px] w-full cursor-pointer group bim-reveal ${delays[idx % delays.length]}`}
            >
              {/* Background Image with Zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />

              {/* Dark Overlay */}
              <div className="strip-overlay absolute inset-0 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/40 pointer-events-none" />

              {/* Content at Top matching original */}
              <div className="absolute top-10 left-8 right-8 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="bim-font-poppins text-[#b19777] text-[11px] font-semibold tracking-[3px] uppercase mb-1">
                  {item.category || "INTERIOR"}
                </div>
                <h3 className="bim-font-playfair text-white text-xl sm:text-2xl font-bold leading-snug group-hover:text-[#b19777] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* View More Link at Bottom sliding up on hover matching original */}
              <div className="portfolio-view-more absolute bottom-10 left-8 z-10">
                <span className="bim-font-poppins text-white/90 text-xs font-semibold tracking-[2px] uppercase flex items-center gap-2 group-hover:text-[#b19777] transition-colors">
                  <span>Xem Chi Tiết</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
