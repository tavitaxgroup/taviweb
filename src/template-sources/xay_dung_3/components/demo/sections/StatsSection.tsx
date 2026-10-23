"use client";

import React, { useState, useEffect, useRef } from "react";
import { StatItem } from "@/template-sources/xay_dung_3/types/demo";

interface StatsSectionProps {
  stats?: StatItem[];
}

const DEFAULT_STATS: StatItem[] = [
  { id: "1", value: "352", label: "DỰ ÁN HOÀN THÀNH", icon: "building" },
  { id: "2", value: "567", label: "KHÁCH HÀNG HÀI LÒNG", icon: "handshake" },
  { id: "3", value: "656", label: "CÔNG TRÌNH BÀN GIAO", icon: "chart" },
  { id: "4", value: "17", label: "GIẢI THƯỞNG DANH GIÁ", icon: "award" },
];
const ICONS = ["building", "handshake", "chart", "award"];

/** Split "1.200+" -> { num: 1200, prefix: "", suffix: "+" } so the counter keeps formatting. */
function parseValue(value: string) {
  const m = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
  if (!m) return { num: NaN, prefix: "", suffix: "" };
  const raw = m[2];
  const isInt = /^\d+$/.test(raw) || /^\d{1,3}([.,]\d{3})+$/.test(raw);
  if (!isInt) return { num: NaN, prefix: "", suffix: "" }; // decimals: render raw value
  return { num: Number(raw.replace(/[.,]/g, "")), prefix: m[1], suffix: m[3] };
}

export function StatsSection({ stats }: StatsSectionProps) {
  const items = (stats && stats.length > 0 ? stats : DEFAULT_STATS).slice(0, 4).map((s, i) => ({
    ...s,
    icon: s.icon || ICONS[i % ICONS.length],
    parsed: parseValue(s.value),
  }));

  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0); // 0 -> 1
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || started) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 2000);
      setProgress(1 - Math.pow(1 - p, 3)); // easeOutCubic
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  const display = (it: (typeof items)[number]) => {
    const { num, prefix, suffix } = it.parsed;
    if (Number.isNaN(num)) return it.value;
    return `${prefix}${Math.round(num * (started ? progress : 0)).toLocaleString("vi-VN")}${suffix}`;
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white text-[#1e1e1e] border-y border-[#eeeeee]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {items.map((item, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
            return (
              <div
                key={item.id}
                className={`text-center flex flex-col items-center justify-center p-6 group hover:-translate-y-2 bim-reveal ${delays[idx % delays.length]}`}
              >
                {/* Gold Outline Icon matching original SVG style with hover bounce */}
                <div className="w-14 h-14 mb-4 text-[#b19777] flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                  {item.icon === "building" && (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {item.icon === "handshake" && (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {item.icon === "chart" && (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )}
                  {item.icon === "award" && (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  )}
                </div>

                {/* Large Gold Number */}
                <div className="bim-font-playfair text-5xl sm:text-6xl font-bold text-[#b19777] tracking-tight mb-2 transition-transform duration-300 group-hover:scale-105">
                  {display(item)}
                </div>

                {/* Uppercase Subtitle */}
                <div className="bim-font-poppins text-xs font-semibold uppercase tracking-[2px] text-[#777777] group-hover:text-[#1e1e1e] transition-colors">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
