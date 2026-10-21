import React from "react";
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="relative w-full h-80 sm:h-96 bg-zinc-900 border-t border-zinc-800 overflow-hidden">
      {/* Google Maps Clean Embed iframe */}
      <iframe
        title="Prague Office Location"
        src="https://maps.google.com/maps?q=Prague%2C%20Czech%20Republic&t=&z=14&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full border-0 grayscale contrast-125 opacity-75 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Floating Location Card */}
      <div className="absolute top-6 left-6 z-10 bg-black/90 backdrop-blur-md text-white p-5 border border-white/20 shadow-2xl max-w-xs pointer-events-none sm:pointer-events-auto">
        <div className="flex items-center gap-2 text-zinc-300 mb-1">
          <MapPin size={16} className="text-white" />
          <span className="text-[11px] font-bold tracking-widest uppercase">TRỤ SỞ CHÍNH</span>
        </div>
        <p className="text-xs font-light text-zinc-300 leading-relaxed">
          Litačka, Jungmannova 35/29, Nové Město, Prague, Czech Republic
        </p>
      </div>
    </section>
  );
}
