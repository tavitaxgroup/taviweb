import React from "react";
import Link from "next/link";
import { ServiceItem } from "./types";
import { Compass, Lightbulb, Layers } from "lucide-react";

interface ServicesSectionProps {
  services: ServiceItem[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "compass":
        return <Compass size={36} strokeWidth={1.5} className="text-zinc-700" />;
      case "lightbulb":
        return <Lightbulb size={36} strokeWidth={1.5} className="text-zinc-700" />;
      case "layers":
      default:
        return <Layers size={36} strokeWidth={1.5} className="text-zinc-700" />;
    }
  };

  return (
    <section
      id="services"
      className="relative py-28 lg:py-36 bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/templates/xay-dung-2/services-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14">
          <div className="text-[11px] font-bold tracking-[0.25em] text-white/70 uppercase mb-2">
            SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-light text-white leading-tight">
            This is what we do.
          </h2>
        </div>

        {/* 3 White Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white text-zinc-900 p-8 sm:p-10 shadow-xl flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="mb-6">{getIcon(service.icon)}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-[14px] text-zinc-500 leading-relaxed font-normal mb-8">
                  {service.description}
                </p>
              </div>

              <div>
                <Link
                  href={service.link || "#contact"}
                  className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-900 hover:text-black"
                >
                  <span className="w-5 h-[1px] bg-zinc-900 group-hover:w-8 transition-all" />
                  <span>READ</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
