import React from 'react';

interface ZaloModalProps {
  isOpen: boolean;
  onClose: () => void;
  business?: any;
}

export const ZaloModal: React.FC<ZaloModalProps> = ({ isOpen, onClose, business }) => {
  if (!isOpen) return null;
  const brandName = business?.shortName || business?.name || 'ORIGIN STUDIO';
  const phone = business?.phone || '090 123 4567';
  const cleanPhone = phone.replace(/[^\d+]/g, '');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="zalo-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-md bg-[#ffffff] border-2 border-[#1c1b1b] shadow-[6px_6px_0px_#1c1b1b] p-6 text-[#1c1b1b]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e5e2e1] mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#0038ff] rounded-full animate-pulse"></span>
            <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#ac2e00] font-bold">
              [ KẾT NỐI TRỰC TIẾP 24/7 ]
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#444657] hover:text-[#1c1b1b] hover:bg-[#f0edec] transition-colors"
            aria-label="Đóng cửa sổ"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <h3
          id="zalo-dialog-title"
          className="font-syne text-xl font-bold uppercase tracking-tight mb-2"
        >
          Tư Vấn Kiến Trúc Qua Zalo Official
        </h3>
        <p className="font-body text-sm text-[#44423c] mb-5">
          Quý khách có thể quét mã QR bên dưới hoặc nhắn tin trực tiếp tới số Hotline của Origin Studio để nhận phản hồi ngay lập tức từ kiến trúc sư trưởng.
        </p>

        {/* QR Code Container */}
        <div className="bg-[#f6f3f2] border border-[#c4c5da] p-5 flex flex-col items-center justify-center mb-5">
          <div className="w-44 h-44 bg-white p-2 border border-[#e5e2e1] flex items-center justify-center shadow-xs">
            {/* High visual fidelity QR code representation */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#1c1b1b]"
              fill="currentColor"
            >
              <rect x="0" y="0" width="30" height="30" rx="2" fill="#0038ff" />
              <rect x="5" y="5" width="20" height="20" fill="white" />
              <rect x="9" y="9" width="12" height="12" fill="#0038ff" />

              <rect x="70" y="0" width="30" height="30" rx="2" fill="#1c1b1b" />
              <rect x="75" y="5" width="20" height="20" fill="white" />
              <rect x="79" y="9" width="12" height="12" fill="#1c1b1b" />

              <rect x="0" y="70" width="30" height="30" rx="2" fill="#1c1b1b" />
              <rect x="5" y="75" width="20" height="20" fill="white" />
              <rect x="9" y="79" width="12" height="12" fill="#1c1b1b" />

              <rect x="36" y="8" width="8" height="8" />
              <rect x="48" y="14" width="8" height="12" />
              <rect x="36" y="24" width="14" height="6" />
              <rect x="10" y="38" width="12" height="8" />
              <rect x="28" y="36" width="44" height="8" fill="#0038ff" />
              <rect x="36" y="48" width="16" height="16" />
              <rect x="56" y="48" width="8" height="8" />
              <rect x="72" y="38" width="18" height="10" />
              <rect x="74" y="56" width="16" height="8" />
              <rect x="36" y="70" width="8" height="20" />
              <rect x="48" y="76" width="14" height="14" fill="#0038ff" />
              <rect x="68" y="70" width="22" height="20" />
            </svg>
          </div>
          <span className="font-mono-code text-[11px] text-[#444657] mt-3">
            Zalo ID: <strong>{phone}</strong> ({brandName})
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <a
            href={`https://zalo.me/${cleanPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0038ff] text-white hover:bg-[#ac2e00] font-mono-code text-xs uppercase font-semibold py-3 px-4 shadow-[3px_3px_0px_#1c1b1b] transition-all"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            Mở Ứng Dụng Zalo Ngay
          </a>

          <a
            href={`tel:${cleanPhone}`}
            className="w-full inline-flex items-center justify-center gap-2 border border-[#1c1b1b] text-[#1c1b1b] hover:bg-[#f0edec] font-mono-code text-xs uppercase font-semibold py-2.5 px-4 transition-colors"
          >
            <span className="material-symbols-outlined text-base text-[#ac2e00]">call</span>
            Gọi Trực Tiếp: {phone}
          </a>
        </div>

        <div className="mt-4 pt-3 border-t border-[#e5e2e1] flex items-center justify-between text-[11px] font-mono-code text-[#747689]">
          <span>Phản hồi trung bình: &lt; 15 phút</span>
          <span>8:30 — 20:30 Hàng ngày</span>
        </div>
      </div>
    </div>
  );
};
