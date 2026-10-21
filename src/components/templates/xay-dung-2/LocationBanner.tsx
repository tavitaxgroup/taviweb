import React from "react";
import { Compass } from "lucide-react";

export function LocationBanner() {
  return (
    <section className="py-16 bg-[#eef1f4] text-zinc-800 text-center border-t border-zinc-200">
      <div className="max-w-md mx-auto px-6 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-zinc-700 text-white flex items-center justify-center mb-4">
          <Compass size={20} />
        </div>
        <h4 className="text-[15px] font-bold text-zinc-900 mb-1">
          Prague, Czech Republic
        </h4>
        <p className="text-[13px] text-zinc-500 font-light">
          Litačka, Jungmannova 35/29, Nové Město, Czech Republic
        </p>
      </div>
    </section>
  );
}
