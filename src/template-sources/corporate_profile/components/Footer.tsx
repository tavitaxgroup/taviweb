import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
  business?: any;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, business }) => {
  const brandName = business?.shortName || business?.name || 'Monogram Strategic Advisory';
  const address = business?.address || 'Số 15 Lý Thái Tổ, Hoàn Kiếm, Hà Nội · Bahnhofstrasse 45, 8001 Zurich';

  return (
    <footer className="w-full bg-[#f4f3f0] pt-10 pb-10 border-t border-[#c7c7c0]/30 mt-16 text-[#1a1c1a]">
      <div className="w-full px-5 md:px-16">
        {/* Top 3-column index grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-6 items-baseline border-b border-[#c7c7c0]/30 pb-10">
          <div className="md:col-span-4 space-y-2">
            <p className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              Folio Index
            </p>
            <p className="font-headline-sm text-[18px] text-[#1a1c1a] font-normal">
              Architectural Strategy &amp; Monograph
            </p>
            <p className="font-body-sm text-[13px] text-[#464742] font-light leading-relaxed">
              Ấn phẩm chiến lược độc quyền phát hành định kỳ hàng năm dành riêng cho Hội đồng Quản trị và các đối tác ủy thác thể chế.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-[12px] font-label-md uppercase tracking-wider text-[#464742]">
              <button
                onClick={() => onNavigate('nang-luc')}
                className="hover:text-black underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0 text-left"
              >
                Năng lực
              </button>
              <span>·</span>
              <button
                onClick={() => onNavigate('du-an')}
                className="hover:text-black underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0 text-left"
              >
                Dự án điển hình
              </button>
              <span>·</span>
              <button
                onClick={() => onNavigate('tu-tuong')}
                className="hover:text-black underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0 text-left"
              >
                Tư tưởng &amp; Tập san
              </button>
              <span>·</span>
              <button
                onClick={() => onNavigate('lien-he')}
                className="hover:text-black underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0 text-left"
              >
                Liên hệ chuyên trách
              </button>
            </div>
          </div>

          <div className="md:col-span-5 space-y-2">
            <p className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              Network Offices
            </p>
            <p className="font-label-md text-[13px] uppercase tracking-widest text-[#1a1c1a] font-medium">
              Zurich — Tokyo — Hanoi
            </p>
            <p className="font-body-sm text-[13px] text-[#464742] font-light leading-relaxed">
              Bahnhofstrasse 45, 8001 Zurich · Marunouchi 1-Chome, Chiyoda-ku, Tokyo · Số 15 Lý Thái Tổ, Hoàn Kiếm, Hà Nội
            </p>
            <p className="font-label-sm text-[11px] text-[#5a614f] tracking-wider pt-1">
              Điều phối múi giờ: CET (UTC+1) · JST (UTC+9) · ICT (UTC+7)
            </p>
          </div>

          <div className="md:col-span-3 md:text-right space-y-1">
            <p className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              Chronicle
            </p>
            <p className="font-label-sm text-[12px] uppercase tracking-wider text-[#1a1c1a] font-medium">
              © {new Date().getFullYear()} {brandName.toUpperCase()}
            </p>
            <p className="font-label-sm text-[11px] text-[#5a614f]">
              Swiss Grid Rigor · Private Registry
            </p>
            <p className="font-label-sm text-[11px] text-[#777871]">
              REGISTRY NO. CH-020.3.033-CH
            </p>
          </div>
        </div>

        {/* Bottom copyright rule */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 gap-2">
          <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#464742]">
            Publication Discipline · Swiss Editorial Standard
          </span>
          <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#464742]">
            All Rights Reserved · Private Circulation Only · ID: MGR-2025-V4
          </span>
        </div>
      </div>
    </footer>
  );
};
