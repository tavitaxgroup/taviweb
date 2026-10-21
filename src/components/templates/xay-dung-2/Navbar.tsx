"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  businessName?: string;
  logo?: string;
}

export function Navbar({ businessName = "PRAGUE", logo = "/templates/xay-dung-2/logo-white.png" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Pages", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Project Details", href: "#services" },
    { label: "Shop", href: "#clients" },
    { label: "Blog", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-sm py-4 border-b border-white/10"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#top" className="flex items-center">
            {logo ? (
              <img
                src={logo}
                alt={businessName}
                className="h-7 w-auto object-contain brightness-100"
              />
            ) : (
              <span className="text-xl font-bold tracking-[0.3em] text-white uppercase font-sans">
                {businessName}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-normal tracking-[0.05em] text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pl-6 border-l border-white/20 text-white/80">
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-white text-xs">
                <span className="font-bold">Bē</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white text-xs">
                <span>𝕏</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white text-xs">
                <span className="font-bold">f</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-white text-xs">
                <span className="font-bold">P</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1 text-white hover:text-zinc-300 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden transition-all duration-300 flex flex-col justify-center px-8 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-widest text-zinc-300 hover:text-white uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
