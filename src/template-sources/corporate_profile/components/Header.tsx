import React, { useState } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenVault: () => void;
  isVaultUnlocked?: boolean;
  business?: any;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenVault,
  isVaultUnlocked = false,
  business,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const brandName = business?.name || business?.shortName || 'TẬP ĐOÀN ĐỐI TÁC CHIẾN LƯỢC';

  const navItems = [
    { id: 'nang-luc', label: 'Năng lực' },
    { id: 'du-an', label: 'Dự án' },
    { id: 'tu-tuong', label: 'Tư tưởng' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-3 md:px-8 pointer-events-none transition-all duration-500">
      <div className="mx-auto max-w-7xl pointer-events-auto bg-[#faf9f6]/90 backdrop-blur-2xl border border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full h-16 md:h-18 px-5 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 md:gap-5 shrink-0">
          <button
            onClick={() => handleNavClick('trang-chu')}
            className="flex items-center gap-2 group text-left cursor-pointer border-0 bg-transparent p-0 transition-opacity hover:opacity-80"
            aria-label={`${brandName} Strategic Advisory - Trang chủ`}
          >
            <span className="w-2 h-2 rounded-full bg-[#5a614f] animate-pulse"></span>
            <span className="font-display-xl tracking-wider text-[17px] md:text-[20px] font-semibold text-black uppercase max-w-[220px] sm:max-w-xs md:max-w-none truncate">
              {brandName}
            </span>
            <span className="text-[#c7c7c0] font-light text-[13px] hidden lg:inline">|</span>
            <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] text-[#5a614f] font-medium hidden lg:inline">
              STRATEGIC ADVISORY
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8" aria-label="Điều hướng chính">
            {navItems.map((item) => {
              const isActive = currentPath === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative py-1.5 font-label-md text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer border-0 bg-transparent ${
                    isActive ? 'text-black font-semibold' : 'text-[#5a5c54] hover:text-black'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5a614f] rounded-full"></span>
                  ) : (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Button-in-Button + Confidential Vault */}
          <div className="flex items-center gap-3 pl-3 md:pl-5 border-l border-black/10">
            <button
              onClick={() => handleNavClick('lien-he')}
              className={`group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full font-label-md text-[11px] uppercase tracking-wider transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer shadow-sm ${
                currentPath === 'lien-he'
                  ? 'bg-[#5a614f] text-white ring-1 ring-[#5a614f]'
                  : 'bg-black text-white hover:bg-[#303429]'
              }`}
            >
              <span>Liên hệ</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
              </span>
            </button>

            {/* Confidential Client Vault Button with Double Bezel */}
            <div className="p-0.5 rounded-full bg-black/5 ring-1 ring-black/10">
              <button
                onClick={onOpenVault}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer active:scale-95 ${
                  isVaultUnlocked
                    ? 'bg-[#5a614f] text-white shadow-sm'
                    : 'bg-[#faf9f6] text-black hover:bg-black hover:text-white'
                }`}
                title={isVaultUnlocked ? 'Kho tài liệu mật (Đã xác thực)' : 'Kho lưu trữ bảo mật (Cần mật mã)'}
                aria-label="Cổng lưu trữ bảo mật Hội đồng"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isVaultUnlocked ? 'lock_open' : 'lock'}
                </span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-black hover:bg-black/5 active:scale-95 transition-all"
              aria-label="Mở danh mục menu"
            >
              <span className="material-symbols-outlined text-[18px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#c7c7c0]/30 bg-[#faf9f6] px-5 py-6 space-y-4 shadow-sm animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('trang-chu')}
              className={`text-left py-2 font-label-md text-[13px] uppercase tracking-wider border-b border-[#c7c7c0]/20 ${
                currentPath === 'trang-chu' ? 'text-black font-semibold' : 'text-[#464742]'
              }`}
            >
              00 / Trang chủ
            </button>
            <button
              onClick={() => handleNavClick('nang-luc')}
              className={`text-left py-2 font-label-md text-[13px] uppercase tracking-wider border-b border-[#c7c7c0]/20 ${
                currentPath === 'nang-luc' ? 'text-black font-semibold' : 'text-[#464742]'
              }`}
            >
              01 / Năng lực thể chế
            </button>
            <button
              onClick={() => handleNavClick('du-an')}
              className={`text-left py-2 font-label-md text-[13px] uppercase tracking-wider border-b border-[#c7c7c0]/20 ${
                currentPath === 'du-an' ? 'text-black font-semibold' : 'text-[#464742]'
              }`}
            >
              02 / Dự án & Case Study
            </button>
            <button
              onClick={() => handleNavClick('tu-tuong')}
              className={`text-left py-2 font-label-md text-[13px] uppercase tracking-wider border-b border-[#c7c7c0]/20 ${
                currentPath === 'tu-tuong' ? 'text-black font-semibold' : 'text-[#464742]'
              }`}
            >
              03 / Tư tưởng & Ấn bản Folio
            </button>
            <button
              onClick={() => handleNavClick('lien-he')}
              className={`text-left py-2 font-label-md text-[13px] uppercase tracking-wider border-b border-[#c7c7c0]/20 ${
                currentPath === 'lien-he' ? 'text-black font-semibold' : 'text-[#464742]'
              }`}
            >
              04 / Trao đổi hợp tác & Liên hệ
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVault();
              }}
              className="flex items-center gap-2 py-2 text-left font-label-md text-[13px] uppercase tracking-wider text-[#5a614f]"
            >
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span>Cổng thẩm định bảo mật Hội đồng</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
