"use client";
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BusinessInfo } from '../../../types/demo';

interface DemoNavbarProps {
  business: BusinessInfo;
}

export default function DemoNavbar({ business }: DemoNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass =
    'font-sans text-xs font-semibold uppercase tracking-widest border-b border-transparent hover:border-[#f6e5c8] transition-all pb-1';
  const navLinkStyle = { color: 'rgba(255, 255, 255, 0.88)' };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-[#0a1422] shadow-lg py-4 border-white/10'
          : 'bg-[#0a1422]/95 backdrop-blur-md py-6 border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-5">
        <a
          href="#"
          className="min-w-0 max-w-[360px] whitespace-normal break-words text-lg font-bold leading-tight tracking-[0.02em] transition-colors duration-300 sm:max-w-[440px] md:max-w-[520px] md:text-xl"
          style={{ color: '#ffffff', fontFamily: 'Cambria, "Times New Roman", Georgia, serif' }}
          title={business.name}
        >
          {business.name || business.logoText || 'STUDIO'}
        </a>

        <nav className="hidden shrink-0 md:flex items-center gap-8 lg:gap-10">
          <a href="#services" className={navLinkClass} style={navLinkStyle}>
            Dá»‹ch vá»¥
          </a>
          <a href="#gallery" className={navLinkClass} style={navLinkStyle}>
            Dá»± Ã¡n
          </a>
          <a href="#why-choose-us" className={navLinkClass} style={navLinkStyle}>
            Vá» chÃºng tÃ´i
          </a>
          <a href="#contact" className={navLinkClass} style={navLinkStyle}>
            LiÃªn há»‡
          </a>
        </nav>

        <div className="hidden shrink-0 md:block">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#f6e5c8] text-[#0a1422] text-[11px] font-sans font-bold tracking-[0.2em] uppercase transition-transform duration-200 hover:bg-white active:scale-95"
            style={{ color: '#0a1422' }}
          >
            Nháº­n tÆ° váº¥n thiáº¿t káº¿
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          style={{ color: '#ffffff' }}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1422]/96 border-b border-white/10 py-6 px-8 flex flex-col gap-5 animate-[fadeIn_0.3s_ease]">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm font-medium tracking-wide" style={navLinkStyle}>
            Dá»‹ch vá»¥ cá»§a chÃºng tÃ´i
          </a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm font-medium tracking-wide" style={navLinkStyle}>
            Dá»± Ã¡n tiÃªu biá»ƒu
          </a>
          <a href="#why-choose-us" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm font-medium tracking-wide" style={navLinkStyle}>
            Vá» chÃºng tÃ´i
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-sans text-sm font-medium tracking-wide" style={navLinkStyle}>
            LiÃªn há»‡ & tÆ° váº¥n
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center py-3 bg-[#f6e5c8] text-[#0a1422] text-xs font-sans font-bold tracking-widest uppercase"
          >
            Nháº­n tÆ° váº¥n thiáº¿t káº¿
          </a>
        </div>
      )}
    </header>
  );
}

