import React from 'react';

interface FooterProps {
  onNavigate: (screen: 'showroom' | 'catalog' | 'services' | 'dealers') => void;
  business?: any;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, business }) => {
  const brandName = business?.name || business?.shortName || 'VULCAN // PRECISION INDUSTRIAL';
  const phone = business?.phone || '+84 (0) 28 3900 8899';
  const email = business?.email || 'SALES@VULCAN-INDUSTRIAL.VN';
  const address = business?.address || 'Khu Công Nghệ Cao (SHTP), TP. Thủ Đức, TP. Hồ Chí Minh';

  return (
    <footer className="w-full bg-[#0d0e11] text-[#c4c7cc] py-16 border-t border-[#343538]/40">
      <div className="w-full px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#f45b1c] inline-block"></span>
              <span className="font-sans text-sm tracking-wide text-[#e3e2e6] uppercase font-bold">
                {brandName}
              </span>
            </div>
            <p className="font-sans text-sm text-[#c4c7cc] max-w-sm mt-3 leading-relaxed">
              Tổng kho phân phối thiết bị gia công cơ khí chính xác, máy laser công suất cao và giải pháp tự động hóa công nghiệp.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="inline-block px-2.5 py-1 bg-[#1b1b1f] border border-[#343538] font-['JetBrains_Mono'] text-[10px] text-[#ffb59c]">
                ĐẠI DIỆN ĐỘC QUYỀN IPG &amp; NABTESCO
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-sans text-xs text-[#e3e2e6] tracking-wider uppercase mb-2 font-semibold">
              Hệ thống phân phối
            </span>
            <button
              onClick={() => {
                onNavigate('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-sans text-xs text-[#c4c7cc] hover:text-[#e3e2e6] transition-colors py-1 cursor-pointer"
            >
              Danh mục thiết bị kho
            </button>
            <button
              onClick={() => {
                onNavigate('showroom');
                setTimeout(() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="text-left font-sans text-xs text-[#c4c7cc] hover:text-[#e3e2e6] transition-colors py-1 cursor-pointer"
            >
              Sản phẩm tiêu biểu
            </button>
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-sans text-xs text-[#c4c7cc] hover:text-[#e3e2e6] transition-colors py-1 cursor-pointer"
            >
              Dịch vụ CAD &amp; Chạy mẫu
            </button>
            <button
              onClick={() => {
                onNavigate('dealers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-sans text-xs text-[#c4c7cc] hover:text-[#e3e2e6] transition-colors py-1 cursor-pointer"
            >
              Chính sách đại lý
            </button>
          </div>

          {/* Showroom & Contact */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="font-sans text-xs text-[#e3e2e6] tracking-wider uppercase mb-2 font-semibold">
              Showroom &amp; Kho hàng
            </span>
            <span className="font-sans text-xs text-[#c4c7cc]">
              HOTLINE KỸ THUẬT: <strong className="font-['JetBrains_Mono']">{phone}</strong>
            </span>
            <span className="font-sans text-xs text-[#c4c7cc]">
              EMAIL BÁO GIÁ: <strong className="font-['JetBrains_Mono']">{email.toUpperCase()}</strong>
            </span>
            <span className="font-sans text-xs text-[#f45b1c] font-semibold mt-1">
              TRẠNG THÁI: TIẾP NHẬN BÁO GIÁ 24/7
            </span>
            <span className="font-sans text-xs text-[#707684] mt-1 leading-relaxed">
              {address}
            </span>
          </div>
        </div>

        {/* Legal & Coordinates */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-[#343538]/30">
          <div className="font-sans text-xs tracking-normal text-[#8b919f]">
            © {new Date().getFullYear()} {brandName}. Mọi quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-6">
            <span className="font-['JetBrains_Mono'] text-xs text-[#8b919f]">
              LAT: 10.7769° N // LONG: 106.7009° E
            </span>
            <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] border border-[#343538] px-2 py-0.5">
              ISO 9001:2015
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
