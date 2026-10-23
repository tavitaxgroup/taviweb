"use client";

import React from "react";
import { ServiceItem } from "@/template-sources/xay_dung_3/types/demo";

interface ServicesSectionProps {
  badge: string;
  title: string;
  items: ServiceItem[];
}

export function ServicesSection({ badge, title, items }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#fafafa] text-[#1e1e1e]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        
        {/* Header with Scroll Reveal */}
        <div className="text-center max-w-[700px] mx-auto mb-16 bim-reveal">
          <div className="bim-font-poppins text-xs font-semibold tracking-[3px] text-[#b19777] uppercase mb-2">
            {badge || "BEST FEATURES"}
          </div>
          <h2 className="bim-font-playfair text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1e1e1e] leading-tight">
            {title || "Our Services"}
          </h2>
        </div>

        {/* 4 Columns Services Grid with iconic hover inversion & scroll reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((service, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
            return (
              <div
                key={service.id}
                className={`bim-service-box p-8 lg:p-10 flex flex-col justify-between cursor-pointer bim-reveal ${delays[idx % delays.length]}`}
              >
                <div>
                  {/* Outlined Teko Number */}
                  <div className="bim-font-teko service-num text-6xl lg:text-7xl font-normal leading-none mb-6">
                    {service.number}
                  </div>

                  {/* Service Title */}
                  <h3 className="bim-font-poppins service-title text-lg lg:text-xl font-bold mb-4 leading-snug">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="bim-font-poppins service-desc text-sm font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Read More Link */}
                <div className="pt-4">
                  <a
                    href={service.link || "#services"}
                    className="bim-font-poppins service-btn text-xs font-semibold uppercase tracking-[1.5px] inline-flex items-center gap-1.5"
                  >
                    <span>Xem Thêm</span>
                    <span className="transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
