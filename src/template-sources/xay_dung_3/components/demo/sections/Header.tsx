"use client";

import React, { useState, useEffect } from "react";
import { Phone, Search, ShoppingBag, Menu, X } from "lucide-react";

interface HeaderProps {
  businessName: string;
  phone: string;
  logo?: string;
  logoWhite?: string;
}

/** Text logo fallback: business name + signature gold dot (used when no light logo exists). */
export function BimTextLogo({ name, className = "" }: { name: string; className?: string }) {
  const clean = (name || "BIM").replace(/\.+$/, "").trim();
  return (
    <span className={`font-black tracking-tight text-white inline-flex items-end leading-none ${className}`}>
      <span className="truncate">{clean}</span>
      <span className="w-2 h-2 rounded-full bg-[#b19777] ml-1 mb-1 inline-block shrink-0" />
    </span>
  );
}

const navLinks = [
  { label: "Trang Chủ", href: "#hero" },
  { label: "Về Chúng Tôi", href: "#about" },
  { label: "Dịch Vụ", href: "#services" },
  { label: "Dự Án", href: "#portfolio" },
  { label: "Đội Ngũ", href: "#team" },
  { label: "Trước & Sau", href: "#before-after" },
  { label: "Tin Tức", href: "#articles" },
  { label: "Liên Hệ", href: "#contact" },
];

export function Header({ businessName, phone, logoWhite }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const telHref = `tel:${(phone || "").replace(/[^\d+]/g, "")}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll + close on Escape while the mobile drawer is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bim-font-poppins ${
          isScrolled || mobileMenuOpen
            ? "bg-[#18191b]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10"
            : "bg-transparent py-5 border-b border-white/15"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4 lg:gap-6">
          {/* Logo */}
          <a href="#hero" className="flex items-center shrink-0 min-w-0" aria-label={businessName}>
            {logoWhite ? (
              <img src={logoWhite} alt={businessName} className="h-7 md:h-8 w-auto object-contain" />
            ) : (
              <BimTextLogo name={businessName} className="text-2xl md:text-[28px] max-w-[200px]" />
            )}
          </a>

          {/* Desktop Navigation (visible on laptops & desktops: lg 1024px+) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-7 text-[11px] lg:text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] font-medium tracking-wider uppercase text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 whitespace-nowrap hover:text-[#b19777] transition-colors group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b19777] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Icons & Contact */}
          <div className="flex items-center gap-3 sm:gap-4 text-white/80 shrink-0">
            <div className="hidden 2xl:flex items-center gap-3 pr-4 border-r border-white/20 text-xs">
              {["f", "x", "in"].map((s) => (
                <a key={s} href="#hero" className="hover:text-[#b19777] transition-colors font-semibold" aria-label={s}>
                  {s}
                </a>
              ))}
            </div>

            <button className="hidden md:block hover:text-[#b19777] transition-colors" aria-label="Search">
              <Search size={16} />
            </button>

            <div className="hidden md:block relative cursor-pointer hover:text-[#b19777] transition-colors" aria-label="Cart">
              <ShoppingBag size={17} />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#b19777] text-white text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </div>

            <a
              href={telHref}
              className="hidden sm:inline-flex ml-1 items-center gap-1.5 xl:gap-2 px-3 py-2 xl:px-4 xl:py-2.5 bg-[#b19777] hover:bg-white text-white hover:text-[#18191b] text-[11px] xl:text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300"
            >
              <Phone size={13} />
              <span>{phone}</span>
            </a>

            {/* Hamburger (mobile & tablet only: below lg) */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden p-1.5 text-white hover:text-[#b19777] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-[#18191b]/98 backdrop-blur-xl flex flex-col justify-center px-8 bim-font-poppins transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col gap-5 text-center text-base font-semibold tracking-wider uppercase text-white">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#b19777] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-10 text-center">
          <a
            href={telHref}
            tabIndex={mobileMenuOpen ? 0 : -1}
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#b19777] text-white text-xs font-bold tracking-widest uppercase"
          >
            <Phone size={15} />
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </>
  );
}
