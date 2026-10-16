import React, { useState } from 'react';
import { IMAGES } from '../data/content';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenZalo: () => void;
  business?: any;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenConsultation,
  onOpenZalo,
  business,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const brandName = business?.name || business?.shortName || 'ORIGIN STUDIO';

  const navItems = [
    { id: 'trang-chu', label: 'Trang chủ' },
    { id: 'dich-vu', label: 'Dịch vụ' },
    { id: 'quy-trinh', label: 'Quy trình' },
    { id: 'du-an', label: 'Dự án' },
    { id: 'du-toan', label: 'Dự toán ngân sách' },
    { id: 'uy-tin', label: 'Uy tín / Về chúng tôi' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-3 md:px-8 pointer-events-none transition-all duration-500">
      <div className="mx-auto max-w-7xl pointer-events-auto bg-[#fcf9f8]/92 backdrop-blur-2xl border border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-full h-16 md:h-18 px-5 md:px-8 flex items-center justify-between">
        {/* Monogram Logo & Brand Name */}
        <button
          onClick={() => handleNavClick('trang-chu')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer border-0 bg-transparent p-0"
          aria-label={`${brandName} Trang chủ`}
        >
          <img
            alt={`${brandName} Monogram Logo`}
            className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src={IMAGES.logo}
          />
          <span className="font-syne text-lg md:text-xl uppercase tracking-tight text-[#1c1b1b] font-bold max-w-[200px] sm:max-w-xs md:max-w-none truncate">
            {brandName}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-6"
          aria-label="Thanh điều hướng chính"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-mono-code text-[11px] uppercase tracking-widest px-2 py-1 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer relative ${
                currentTab === item.id
                  ? 'text-[#0038ff] font-bold'
                  : 'text-[#444657] hover:text-[#1c1b1b]'
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#0038ff] rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Direct Action Controls: Button-in-Button & Hotline Pill */}
        <div className="flex items-center gap-3">
          <a
            className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.03] border border-black/5 font-mono-code text-xs text-[#1c1b1b] hover:text-[#0038ff] hover:bg-black/5 transition-all"
            href="tel:0901234567"
            aria-label="Gọi hotline 090 123 4567"
          >
            <span className="w-5 h-5 rounded-full bg-[#ac2e00]/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[13px] text-[#ac2e00]">call</span>
            </span>
            <span className="font-semibold">090 123 4567</span>
          </a>

          <button
            onClick={onOpenZalo}
            className="hidden sm:inline-flex items-center justify-center border border-black/15 text-[#1c1b1b] hover:bg-[#1c1b1b] hover:text-white font-mono-code text-[11px] uppercase px-3.5 py-1.5 rounded-full transition-all cursor-pointer active:scale-95"
            aria-label="Mở cửa sổ Chat Zalo"
          >
            Chat Zalo
          </button>

          {/* Button-in-Button Consultation CTA */}
          <button
            onClick={onOpenConsultation}
            className="group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 bg-[#0038ff] hover:bg-[#ac2e00] text-white rounded-full font-mono-code text-[11px] font-semibold uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-md cursor-pointer"
          >
            <span>Nhận tư vấn</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
            </span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 active:scale-95 transition-all"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            <span className="material-symbols-outlined text-[18px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fcf9f8] border-b border-[#e5e2e1] px-5 py-4 flex flex-col gap-3 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left font-mono-code text-xs uppercase tracking-wider py-2 text-[#1c1b1b] hover:text-[#0038ff] border-b border-[#f0edec]"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <a
              href="tel:0901234567"
              className="inline-flex items-center gap-2 font-mono-code text-xs text-[#1c1b1b] py-1"
            >
              <span className="material-symbols-outlined text-sm text-[#ac2e00]">call</span>
              Hotline: 090 123 4567
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenZalo();
              }}
              className="text-left inline-flex items-center gap-2 font-mono-code text-xs text-[#0038ff] py-1"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              Chat Zalo Trực tiếp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
