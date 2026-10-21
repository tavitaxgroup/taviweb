import React from "react";
import Link from "next/link";

interface FooterProps {
  businessName?: string;
  logo?: string;
  phone?: string[];
  email?: string[];
  address?: string;
}

export function Footer({
  businessName = "PRAGUE",
  logo = "/templates/xay-dung-2/logo-white.png",
  phone = ["+7 (885) 589 69 85"],
  email = ["prague-architects@info.com"],
  address = "Litačka, Jungmannova 35/29, Nové Město, Czech Republic",
}: FooterProps) {
  return (
    <footer
      className="relative bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/templates/xay-dung-2/footer-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-20 pb-12">
        
        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo & Principle */}
          <div className="md:col-span-8 space-y-6">
            <Link href="#top" className="inline-block">
              {logo ? (
                <img
                  src={logo}
                  alt={businessName}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <span className="text-2xl font-bold tracking-[0.3em] uppercase">
                  {businessName}
                </span>
              )}
            </Link>

            <p className="text-[13px] sm:text-[14px] text-white/70 font-light leading-relaxed max-w-2xl">
              The company principle of Architecture-Studio is the collective conception. From the very beginning, the practice has believed in the virtues of exchange, crossing ideas, common effort, shared knowledge and enthusiasm.
            </p>
          </div>

          {/* GET IN TOUCH */}
          <div className="md:col-span-4 space-y-3">
            <h6 className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/90">
              GET IN TOUCH
            </h6>

            <div className="space-y-1 text-[13px] text-white/70 font-light leading-relaxed">
              {phone.map((p, idx) => (
                <p key={idx}>
                  <a href={`tel:${p.replace(/[^\d+]/g, "")}`} className="hover:text-white transition-colors">
                    {p}
                  </a>
                </p>
              ))}
              {email.map((e, idx) => (
                <p key={idx}>
                  <a href={`mailto:${e}`} className="hover:text-white transition-colors">
                    {e}
                  </a>
                </p>
              ))}
              <p className="pt-1 text-white/60">{address}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[12px] text-white/60">
          <p className="tracking-wider">
            PRAGUE (C) 2019 ALL RIGHTS RESERVED
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-white/80">
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-white text-xs font-bold">
              Bē
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white text-xs">
              𝕏
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white text-xs font-bold">
              f
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-white text-xs font-bold">
              P
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
