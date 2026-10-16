import React, { useState } from 'react';

interface HeaderProps {
  currentScreen: 'showroom' | 'catalog' | 'services' | 'dealers';
  setCurrentScreen: (screen: 'showroom' | 'catalog' | 'services' | 'dealers') => void;
  onOpenQuote: () => void;
  comparisonCount: number;
  onOpenComparison: () => void;
  business?: any;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  setCurrentScreen,
  onOpenQuote,
  comparisonCount,
  onOpenComparison,
  business,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const brandName = business?.name || business?.shortName || 'VULCAN // PRECISION INDUSTRIAL';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-3 md:px-8 pointer-events-none transition-all duration-500">
      <div className="mx-auto max-w-7xl pointer-events-auto bg-[#0d0e11]/92 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] rounded-full h-16 md:h-18 px-5 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setCurrentScreen('showroom');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group text-left cursor-pointer border-0 bg-transparent p-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#f45b1c] inline-block animate-pulse shadow-[0_0_8px_rgba(244,91,28,0.8)]"></span>
            <span className="font-['JetBrains_Mono'] text-xs tracking-widest text-[#e3e2e6] uppercase group-hover:text-[#ffb59c] transition-colors max-w-[210px] sm:max-w-xs md:max-w-none truncate">
              {brandName}
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => {
              setCurrentScreen('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer py-1 relative ${
              currentScreen === 'catalog'
                ? 'text-[#f45b1c] font-semibold'
                : 'text-[#c4c7cc] hover:text-white'
            }`}
          >
            Thiết bị
            {currentScreen === 'catalog' && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#f45b1c] rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => {
              setCurrentScreen('showroom');
              setTimeout(() => {
                const el = document.getElementById('products');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#c4c7cc] hover:text-white transition-colors cursor-pointer py-1"
          >
            Sản phẩm tiêu biểu
          </button>
          <button
            onClick={() => {
              setCurrentScreen('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer py-1 relative ${
              currentScreen === 'services'
                ? 'text-[#f45b1c] font-semibold'
                : 'text-[#c4c7cc] hover:text-white'
            }`}
          >
            Dịch vụ &amp; CAD
            {currentScreen === 'services' && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#f45b1c] rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => {
              setCurrentScreen('dealers');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer py-1 relative ${
              currentScreen === 'dealers'
                ? 'text-[#f45b1c] font-semibold'
                : 'text-[#c4c7cc] hover:text-white'
            }`}
          >
            Đại lý phân phối
            {currentScreen === 'dealers' && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#f45b1c] rounded-full"></span>
            )}
          </button>
        </nav>

        {/* Actions & Utilities: Button-in-Button RFQ & Comparison */}
        <div className="flex items-center gap-3">
          {/* Comparison Tray Indicator Pill */}
          {comparisonCount > 0 && (
            <button
              onClick={onOpenComparison}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1b1b1f] border border-[#f45b1c]/60 rounded-full text-xs font-['JetBrains_Mono'] text-[#ffb59c] hover:bg-[#292a2d] transition-all cursor-pointer shadow-sm active:scale-95"
              title="So sánh thông số kỹ thuật"
            >
              <span className="w-2 h-2 rounded-full bg-[#f45b1c] animate-ping"></span>
              <span>SO SÁNH ({comparisonCount})</span>
            </button>
          )}

          {/* Primary RFQ Button-in-Button */}
          <button
            onClick={onOpenQuote}
            className="group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 bg-[#f45b1c] hover:bg-[#d94e16] text-white font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-[0_4px_20px_rgba(244,91,28,0.35)] cursor-pointer"
          >
            <span>Báo giá RFQ</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <span className="material-symbols-outlined text-[13px]">precision_manufacturing</span>
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#c4c7cc] hover:text-white active:scale-95 transition-all"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[18px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e11] border-b border-[#343538] px-5 py-4 flex flex-col gap-3">
          <button
            onClick={() => {
              setCurrentScreen('showroom');
              setMobileMenuOpen(false);
            }}
            className="text-left font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e3e2e6] py-2 border-b border-[#1f1f23]"
          >
            Trang chủ // Showroom
          </button>
          <button
            onClick={() => {
              setCurrentScreen('catalog');
              setMobileMenuOpen(false);
            }}
            className="text-left font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e3e2e6] py-2 border-b border-[#1f1f23]"
          >
            Danh mục thiết bị (54 cấu hình)
          </button>
          <button
            onClick={() => {
              setCurrentScreen('services');
              setMobileMenuOpen(false);
            }}
            className="text-left font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e3e2e6] py-2 border-b border-[#1f1f23]"
          >
            Dịch vụ kỹ thuật & Thư viện CAD 3D
          </button>
          <button
            onClick={() => {
              setCurrentScreen('dealers');
              setMobileMenuOpen(false);
            }}
            className="text-left font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e3e2e6] py-2 border-b border-[#1f1f23]"
          >
            Chính sách đối tác & Đại lý phân phối
          </button>
          {comparisonCount > 0 && (
            <button
              onClick={() => {
                onOpenComparison();
                setMobileMenuOpen(false);
              }}
              className="text-left font-['JetBrains_Mono'] text-xs text-[#f45b1c] py-2"
            >
              Xem so sánh cấu hình ({comparisonCount}) →
            </button>
          )}
        </div>
      )}
    </header>
  );
};
