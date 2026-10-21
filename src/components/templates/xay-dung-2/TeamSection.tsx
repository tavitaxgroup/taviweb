import React from "react";
import { TeamMember } from "./types";

interface TeamSectionProps {
  team: TeamMember[];
}

export function TeamSection({ team }: TeamSectionProps) {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white text-zinc-900">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2">
            TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-zinc-900 leading-tight">
            Experts ready to serve.
          </h2>
        </div>

        {/* 6 Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {team.map((member) => (
            <div key={member.id} className="group">
              {/* Photo */}
              <div className="relative w-full h-[360px] sm:h-[380px] overflow-hidden bg-zinc-100 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              {/* Position & Name */}
              <div className="text-[11px] tracking-[0.15em] text-zinc-400 uppercase mb-1">
                {member.position}
              </div>
              <h3 className="text-xl font-bold text-zinc-900">
                {member.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
