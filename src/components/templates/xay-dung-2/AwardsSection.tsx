import React from "react";
import { AwardItem } from "./types";

interface AwardsSectionProps {
  awards: AwardItem[];
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  const mid = Math.ceil(awards.length / 2);
  const col1 = awards.slice(0, mid);
  const col2 = awards.slice(mid);

  return (
    <section id="awards" className="py-20 lg:py-28 bg-white text-zinc-900">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2">
            TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-zinc-900 leading-tight">
            Awards that we have.
          </h2>
        </div>

        {/* 2-Column Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          
          <div className="space-y-6">
            {col1.map((item) => (
              <div key={item.id} className="flex items-start gap-4 pb-4">
                <span className="text-[15px] font-bold text-zinc-400 w-12 flex-shrink-0">
                  {item.year}
                </span>
                <span className="text-zinc-300">—</span>
                <div className="flex-grow">
                  <h4 className="text-[15px] font-bold text-zinc-900 hover:text-blue-900 transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-[13px] text-zinc-400 font-light mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {col2.map((item) => (
              <div key={item.id} className="flex items-start gap-4 pb-4">
                <span className="text-[15px] font-bold text-zinc-400 w-12 flex-shrink-0">
                  {item.year}
                </span>
                <span className="text-zinc-300">—</span>
                <div className="flex-grow">
                  <h4 className="text-[15px] font-bold text-zinc-900 hover:text-blue-900 transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-[13px] text-zinc-400 font-light mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
