import React from "react";
import { ClientItem } from "@/template-sources/xay_dung_2/types/demo";
import { ArrowRight } from "lucide-react";

interface ClientsSectionProps {
  clients: ClientItem[];
}

export function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <section
      id="clients"
      className="relative py-28 lg:py-36 bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url(/templates/xay-dung-2/clients-bg.jpg)" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14">
          <div className="text-[11px] font-bold tracking-[0.25em] text-white/70 uppercase mb-2">
            ĐỐI TÁC CHIẾN LƯỢC
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-light text-white leading-tight">
            Đồng hành cùng các đối tác &amp; <span className="font-bold">chủ đầu tư uy tín.</span>
          </h2>
        </div>

        {/* 4 White Square Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative bg-white h-44 sm:h-52 p-6 flex items-center justify-center shadow-lg transition-all duration-300 overflow-hidden"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-[140px] object-contain"
                loading="lazy"
              />

              {/* Hover overlay with button */}
              <div className="absolute inset-0 bg-zinc-900/90 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest text-white uppercase hover:underline"
                >
                  <span>XEM CHI TIẾT</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
