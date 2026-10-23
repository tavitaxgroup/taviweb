"use client";

import React from "react";
import { TeamMemberItem } from "@/template-sources/xay_dung_3/types/demo";

interface TeamSectionProps {
  badge: string;
  title: string;
  description?: string;
  members: TeamMemberItem[];
}

export function TeamSection({ badge, title, members }: TeamSectionProps) {
  return (
    <section id="team" className="py-24 lg:py-32 bg-white text-[#1e1e1e]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        
        {/* Header with Scroll Reveal */}
        <div className="text-center max-w-[700px] mx-auto mb-16 bim-reveal">
          <div className="bim-font-playfair italic text-sm text-[#b19777] mb-2 font-normal">
            {badge || "professionals"}
          </div>
          <h2 className="bim-font-playfair text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1e1e1e] leading-tight">
            {title || "Our team"}
          </h2>
        </div>

        {/* 3 Members Grid with Scroll Reveal & Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {members.map((member, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <div
                key={member.id}
                className={`bim-team-card group relative overflow-hidden flex flex-col cursor-pointer bim-reveal ${delays[idx % delays.length]}`}
              >
                {/* Portrait Container */}
                <div className="team-img-wrap relative h-[420px] sm:h-[480px] w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Dark Hover Overlay with Socials and Sliding Content */}
                  <div className="team-overlay absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <div className="team-overlay-content">
                      <div className="flex items-center gap-3 mb-4">
                        {["f", "in", "x"].map((icon) => (
                          <span
                            key={icon}
                            className="team-social-btn w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-semibold backdrop-blur-sm cursor-pointer"
                          >
                            {icon}
                          </span>
                        ))}
                      </div>

                      <h3 className="bim-font-playfair text-2xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <div className="bim-font-poppins text-xs font-medium text-[#b19777] uppercase tracking-wider">
                        {member.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption Underneath */}
                <div className="p-6 text-center transition-all duration-300">
                  <h3 className="bim-font-playfair text-xl font-bold text-[#1e1e1e] group-hover:text-[#b19777] transition-colors mb-1">
                    {member.name}
                  </h3>
                  <div className="bim-font-poppins text-xs text-[#777777] font-light">
                    {member.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
