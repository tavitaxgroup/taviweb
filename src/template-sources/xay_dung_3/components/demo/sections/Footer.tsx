"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, ChevronRight } from "lucide-react";
import { BimTextLogo } from "./Header";

interface FooterProps {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  logoWhite?: string;
}

export function Footer({
  businessName,
  tagline,
  phone,
  email,
  address,
  logoWhite,
}: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="bg-[#18191b] text-white/70 text-xs sm:text-sm pt-20 pb-12 bim-font-poppins relative">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              {logoWhite ? (
                <img
                  src={logoWhite}
                  alt={businessName}
                  className="h-9 w-auto object-contain"
                />
              ) : (
                <BimTextLogo name={businessName} className="text-3xl max-w-[280px]" />
              )}
            </div>

            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-8 max-w-[320px]">
              {tagline || "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
            </p>

            {/* Social Icons matching original */}
            <div className="flex items-center gap-2.5">
              {[
                { label: "f", href: "#" },
                { label: "x", href: "#" },
                { label: "Be", href: "#" },
                { label: "p", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#b19777] text-white flex items-center justify-center text-xs font-semibold transition-all duration-300 border border-white/10"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-white mb-6">
              LIÊN KẾT NHANH
            </h4>
            <ul className="space-y-3 text-xs tracking-wider font-light">
              {[
                { label: "Thiết Kế Kiến Trúc", href: "#services" },
                { label: "Thiết Kế Nội Thất", href: "#services" },
                { label: "Dự Án Tiêu Biểu", href: "#portfolio" },
                { label: "Về Chúng Tôi", href: "#about" },
                { label: "Liên Hệ Tư Vấn", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#b19777] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={12} className="text-[#b19777] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Call Us & Write */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-[2px] text-white mb-4">
                HOTLINE TƯ VẤN
              </h4>
              <div className="space-y-1.5 text-xs text-white/70 font-light">
                <a href={`tel:${(phone || "").replace(/[^\d+]/g, "")}`} className="block hover:text-[#b19777] transition-colors">
                  {phone || "0988 123 456"}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[2px] text-white mb-4">
                HÒM THƯ DỰ ÁN
              </h4>
              <div className="space-y-1.5 text-xs text-white/70 font-light">
                <a href={`mailto:${email || "contact@bimcreative.vn"}`} className="block break-all hover:text-[#b19777] transition-colors">
                  {email || "contact@bimcreative.vn"}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Visit */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-white mb-4">
              VĂN PHÒNG
            </h4>
            <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
              {address || "Số 18 Hoàng Hoa Thám, Quận Ba Đình, Hà Nội"}
            </p>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {(businessName || "BIM").replace(/\.+$/, "")}. Tất cả quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Trang Chủ</a>
            <span>|</span>
            <a href="#about" className="hover:text-white transition-colors">Chính Sách</a>
            <span>|</span>
            <a href="#contact" className="hover:text-white transition-colors">Hỏi Đáp</a>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Gold Circle Button matching original */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full bg-[#b19777] hover:bg-white text-white hover:text-[#18191b] shadow-2xl flex items-center justify-center transition-all duration-400 hover:scale-110 ${
          showBackToTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        aria-label="Về đầu trang"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}

