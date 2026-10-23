"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactSectionProps {
  badge: string;
  title: string;
  subtitle?: string;
  cards: {
    call: { title: string; lines: string[] };
    email: { title: string; lines: string[] };
    address: { title: string; lines: string[] };
  };
}

const isPhone = (s: string) => /^[+\d][\d\s().-]{6,}$/.test(s.trim());

export function ContactSection({ badge, title, cards }: ContactSectionProps) {
  const address = cards?.address?.lines?.[0] || "B17 Princess Road, London, Greater London NW18JR, UK";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="pt-24 lg:pt-32 bg-[#faf8f6] text-[#1e1e1e]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        
        {/* Header matching Demo 2: keep in touch & Contact us */}
        <div className="text-center max-w-[700px] mx-auto mb-16 bim-reveal">
          <div className="bim-font-playfair italic text-sm text-[#b19777] mb-2 font-normal">
            {badge || "keep in touch"}
          </div>
          <h2 className="bim-font-playfair text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1e1e1e] leading-tight">
            {title || "Contact us"}
          </h2>
        </div>

        {/* 3 White Contact Cards matching Demo 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Call Us */}
          <div className="bim-contact-card bim-reveal delay-100 p-10 lg:p-12 text-center rounded-none flex flex-col items-center justify-center cursor-pointer">
            <div className="contact-icon w-14 h-14 mb-6 text-[#b19777] flex items-center justify-center">
              <Phone size={32} strokeWidth={1.5} />
            </div>
            <h3 className="bim-font-playfair text-2xl font-bold text-[#1e1e1e] mb-4">
              {cards?.call?.title || "Call Us"}
            </h3>
            <div className="bim-font-poppins space-y-1.5 text-sm text-[#777777] font-light">
              {(cards?.call?.lines || ["+7 (111) 1234 56789", "+1 (000) 9876 54321"]).map((line, idx) =>
                isPhone(line) ? (
                  <a key={idx} href={`tel:${line.replace(/[^\d+]/g, "")}`} className="block hover:text-[#b19777] transition-colors">
                    {line}
                  </a>
                ) : (
                  <p key={idx}>{line}</p>
                )
              )}
            </div>
          </div>

          {/* Card 2: Email Us */}
          <div className="bim-contact-card bim-reveal delay-200 p-10 lg:p-12 text-center rounded-none flex flex-col items-center justify-center cursor-pointer">
            <div className="contact-icon w-14 h-14 mb-6 text-[#b19777] flex items-center justify-center">
              <Mail size={32} strokeWidth={1.5} />
            </div>
            <h3 className="bim-font-playfair text-2xl font-bold text-[#1e1e1e] mb-4">
              {cards?.email?.title || "Email Us"}
            </h3>
            <div className="bim-font-poppins space-y-1.5 text-sm text-[#777777] font-light">
              {(cards?.email?.lines || ["contact@Archo.com", "Username@website.com"]).map((line, idx) => (
                <a key={idx} href={`mailto:${line}`} className="block break-all hover:text-[#b19777] transition-colors">
                  {line}
                </a>
              ))}
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="bim-contact-card bim-reveal delay-300 p-10 lg:p-12 text-center rounded-none flex flex-col items-center justify-center cursor-pointer">
            <div className="contact-icon w-14 h-14 mb-6 text-[#b19777] flex items-center justify-center">
              <MapPin size={32} strokeWidth={1.5} />
            </div>
            <h3 className="bim-font-playfair text-2xl font-bold text-[#1e1e1e] mb-4">
              {cards?.address?.title || "Address"}
            </h3>
            <div className="bim-font-poppins space-y-1.5 text-sm text-[#777777] font-light leading-relaxed">
              {(cards?.address?.lines || ["B17 Princess Road, London, Greater London NW18JR, UK"]).map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Full-Width Architectural Map matching Demo 2 */}
      <div className="w-full h-[400px] lg:h-[460px] relative overflow-hidden bg-[#242526] grayscale contrast-125 bim-reveal-scale">
        <iframe
          src={mapSrc}
          title={`Map: ${address}`}
          className="w-full h-full border-0 relative z-10 opacity-90 hover:opacity-100 transition-opacity"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        {/* Visual Map Fallback Layer underneath */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 bg-[#222325]">
          <div className="text-center text-white/40 px-6">
            <MapPin size={36} className="text-[#b19777] mx-auto mb-2 animate-bounce" />
            <p className="bim-font-playfair text-base text-white/80 font-bold">{address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
