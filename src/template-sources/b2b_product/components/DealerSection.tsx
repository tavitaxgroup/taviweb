import React, { useState } from 'react';
import { calculateDealerPricing } from '../utils/machinery';

interface DealerSectionProps {
  onOpenDealerRegister: () => void;
}

export const DealerSection: React.FC<DealerSectionProps> = ({ onOpenDealerRegister }) => {
  const [interactiveMode, setInteractiveMode] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'tier1_exclusive' | 'tier2_authorized' | 'standard'>('tier1_exclusive');
  const [projectedUnits, setProjectedUnits] = useState(6);

  const calcResult = calculateDealerPricing({
    retailPriceUsd: 120000,
    tier: selectedTier,
    annualVolumeUnits: projectedUnits,
  });

  return (
    <section
      className="w-full bg-[#1b1b1f] px-5 md:px-10 lg:px-16 py-16 border-t border-[#343538]/40 relative overflow-hidden"
      id="dealers"
    >
      <div className="border border-[#343538]/60 bg-[#1f1f23] p-5 md:p-10 relative">
        <div className="w-10 h-1 bg-[#f45b1c] mb-6"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase mb-1 block font-semibold">
              MẠNG LƯỚI PHÂN PHỐI B2B TOÀN QUỐC
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#e3e2e6] uppercase tracking-tight leading-tight mb-4 font-medium">
              Cùng phát triển mạng lưới phân phối
            </h2>
            <p className="font-['Hanken_Grotesk'] text-base md:text-lg text-[#c4c7cc] max-w-xl mb-8 leading-relaxed">
              Chính sách chiết khấu thương mại hấp dẫn, hỗ trợ kỹ thuật chuyên sâu và tài trợ tài liệu trưng bày cho đối tác phân phối thiết bị trên toàn quốc.
            </p>

            {/* Key Partner Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 mb-8 border-t border-[#343538]/40">
              <div className="p-3 bg-[#0d0e11] border-l-2 border-[#f45b1c]">
                <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] block font-semibold">
                  Chiết khấu thương mại
                </span>
                <span className="font-['Hanken_Grotesk'] text-xs text-[#c4c7cc] mt-1 block">
                  Tỉ lệ biên lợi nhuận bảo vệ độc quyền dự án
                </span>
              </div>
              <div className="p-3 bg-[#0d0e11] border-l-2 border-[#f45b1c]">
                <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] block font-semibold">
                  Hỗ trợ kỹ thuật 24/7
                </span>
                <span className="font-['Hanken_Grotesk'] text-xs text-[#c4c7cc] mt-1 block">
                  Chuyên gia ứng dụng đồng hành đàm phán
                </span>
              </div>
              <div className="p-3 bg-[#0d0e11] border-l-2 border-[#f45b1c]">
                <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] block font-semibold">
                  Đào tạo chuyển giao
                </span>
                <span className="font-['Hanken_Grotesk'] text-xs text-[#c4c7cc] mt-1 block">
                  Tập huấn vận hành, demo máy cho đội ngũ đại lý
                </span>
              </div>
            </div>

            {/* Margin Calculation Quick Toggle */}
            <button
              onClick={() => setInteractiveMode(!interactiveMode)}
              className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#ffb59c] hover:text-[#f45b1c] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">
                calculate
              </span>
              <span>
                {interactiveMode
                  ? 'Ẩn bảng tính mô phỏng lợi nhuận'
                  : 'Bật bảng tính dự toán chiết khấu & lợi nhuận đại lý →'}
              </span>
            </button>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
            <div className="bg-[#0d0e11] border border-[#343538]/70 p-6 w-full max-w-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-[#f45b1c] inline-block"></span>
                <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#c4c7cc] font-semibold">
                  ĐỐI TÁC THƯƠNG MẠI &amp; MÁY MÓC
                </span>
              </div>
              <p className="font-['Hanken_Grotesk'] text-sm text-[#c4c7cc] mb-6 leading-relaxed">
                Đăng ký để nhận biểu giá phân phối, chính sách công nợ và gói tài liệu trưng bày tại showroom của bạn.
              </p>
              <button
                onClick={onOpenDealerRegister}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#f45b1c] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-widest hover:bg-[#d94e16] transition-colors cursor-pointer font-semibold shadow-sm"
              >
                Đăng ký làm đại lý
              </button>
              <div className="mt-4 pt-3 border-t border-[#343538]/50 flex justify-between text-[10px] font-['JetBrains_Mono'] text-[#707684]">
                <span>CAM KẾT PHẢN HỒI: TRONG 4 GIỜ</span>
                <span>BẢO MẬT B2B 100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Margin Calculation Expandable Panel */}
        {interactiveMode && (
          <div className="mt-8 pt-6 border-t border-[#343538] bg-[#0d0e11] p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-['Space_Grotesk'] text-sm uppercase text-[#e3e2e6] font-medium">
                Dự Toán Lợi Nhuận Gộp &amp; Thưởng Doanh Số Đại Lý (Hệ máy tiêu chuẩn 120,000 USD)
              </h4>
              <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c]">
                BẢO VỆ DỰ ÁN 100%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-2">
                  Cấp độ đối tác phân phối
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedTier('tier1_exclusive')}
                    className={`p-3 text-left border cursor-pointer ${
                      selectedTier === 'tier1_exclusive'
                        ? 'border-[#f45b1c] bg-[#1f1f23]'
                        : 'border-[#343538] hover:border-[#707684]'
                    }`}
                  >
                    <span className="block font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold">
                      Cấp 1: Tổng đại lý vùng
                    </span>
                    <span className="block font-['JetBrains_Mono'] text-[10px] text-[#f45b1c]">
                      Chiết khấu gốc 25% + Thưởng quý
                    </span>
                  </button>
                  <button
                    onClick={() => setSelectedTier('tier2_authorized')}
                    className={`p-3 text-left border cursor-pointer ${
                      selectedTier === 'tier2_authorized'
                        ? 'border-[#f45b1c] bg-[#1f1f23]'
                        : 'border-[#343538] hover:border-[#707684]'
                    }`}
                  >
                    <span className="block font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold">
                      Cấp 2: Đại lý ủy quyền
                    </span>
                    <span className="block font-['JetBrains_Mono'] text-[10px] text-[#c4c7cc]">
                      Chiết khấu gốc 18% + Hỗ trợ kỹ thuật
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase">
                    Kế hoạch doanh số (máy/năm)
                  </label>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] font-semibold">
                    {projectedUnits} thiết bị/năm
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="24"
                  step="1"
                  value={projectedUnits}
                  onChange={(e) => setProjectedUnits(Number(e.target.value))}
                  className="w-full accent-[#f45b1c] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-['JetBrains_Mono'] text-[#707684] mt-1">
                  <span>2 máy</span>
                  <span>12 máy</span>
                  <span>24 máy</span>
                </div>
              </div>
            </div>

            {/* Calculations Result */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#16181d] border border-[#343538]">
              <div>
                <span className="block font-['JetBrains_Mono'] text-[11px] text-[#707684] uppercase">
                  Tỉ lệ chiết khấu áp dụng
                </span>
                <span className="font-['JetBrains_Mono'] text-xl text-[#f45b1c] font-semibold">
                  {calcResult.discountPercent}%
                </span>
                <span className="block font-['JetBrains_Mono'] text-[10px] text-[#c4c7cc]">
                  Giá nhập: ${calcResult.wholesalePriceUsd.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="block font-['JetBrains_Mono'] text-[11px] text-[#707684] uppercase">
                  Thưởng đạt KPI hàng quý
                </span>
                <span className="font-['JetBrains_Mono'] text-xl text-[#e3e2e6] font-semibold">
                  ${calcResult.quarterlyRebateUsd.toLocaleString()} / quý
                </span>
              </div>
              <div>
                <span className="block font-['JetBrains_Mono'] text-[11px] text-[#707684] uppercase">
                  Lợi nhuận gộp dự kiến cả năm
                </span>
                <span className="font-['JetBrains_Mono'] text-xl text-green-400 font-semibold">
                  ${calcResult.annualProjectedGrossProfitUsd.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
