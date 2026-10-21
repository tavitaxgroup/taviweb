import React from "react";
import { StatItem } from "@/template-sources/xay_dung_2/types/demo";

interface CounterSectionProps {
  stats: StatItem[];
  aboutText: string[];
}

export function CounterSection({ stats, aboutText }: CounterSectionProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-zinc-900">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: 4 Stats Box (SVG Mask effect matching original Prague design) */}
          <div className="lg:col-span-6">
            <div
              className="relative p-2 bg-cover bg-center shadow-lg border border-zinc-200"
              style={{ backgroundImage: "url(/templates/xay-dung-2/counter-bg.jpg)" }}
            >
              <div className="grid grid-cols-2 gap-2 bg-white/92 backdrop-blur-[2px] p-6 sm:p-8">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.id}
                    className="p-4 sm:p-6 flex flex-col items-center justify-center text-center border-b sm:border-b-0 border-r-0 sm:border-r border-zinc-200 last:border-r-0 [&:nth-child(2)]:border-r-0 [&:nth-child(3)]:border-b-0"
                  >
                    <span
                      className="text-4xl sm:text-6xl font-bold tracking-tight mb-2 bg-cover bg-center bg-clip-text text-transparent font-sans"
                      style={{
                        backgroundImage: "url(/templates/xay-dung-2/counter-bg.jpg)",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      {stat.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                      {stat.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Intro Text */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-3">
              CHỈ SỐ NĂNG LỰC
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-zinc-900 leading-[1.2] mb-6">
              Tâm huyết kiến tạo<br />
              trong từng công trình.
            </h2>

            <div className="space-y-4 text-[14px] sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
              {aboutText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
