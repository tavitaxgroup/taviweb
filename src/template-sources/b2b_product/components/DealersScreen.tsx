import React, { useState } from 'react';
import { calculateDealerPricing } from '../utils/machinery';

interface DealersScreenProps {
  onOpenDealerRegister: () => void;
  onOpenQuote: () => void;
}

export const DealersScreen: React.FC<DealersScreenProps> = ({ onOpenDealerRegister, onOpenQuote }) => {
  const [selectedTier, setSelectedTier] = useState<'tier1_exclusive' | 'tier2_authorized' | 'standard'>('tier1_exclusive');
  const [projectedSalesUnits, setProjectedSalesUnits] = useState(8);
  const [baseMachineCost, setBaseMachineCost] = useState(150000);

  const calc = calculateDealerPricing({
    retailPriceUsd: baseMachineCost,
    tier: selectedTier,
    annualVolumeUnits: projectedSalesUnits,
  });

  return (
    <div className="w-full bg-[#121316] min-h-screen py-8 px-5 md:px-10 lg:px-16">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#707684] mb-4">
        <span>VULCAN</span>
        <span>//</span>
        <span className="text-[#f45b1c]">CHƯƠNG TRÌNH ĐỐI TÁC &amp; ĐẠI LÝ B2B</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#343538] pb-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase block mb-1 font-semibold">
            B2B DISTRIBUTION &amp; TERRITORIAL ALLIANCE
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl md:text-4xl text-[#e3e2e6] uppercase tracking-tight font-medium">
            Mạng lưới đối tác thương mại &amp; Phân phối máy móc
          </h1>
          <p className="font-['Hanken_Grotesk'] text-sm text-[#c4c7cc] mt-2 max-w-2xl leading-relaxed">
            Hợp tác cùng Vulcan để phân phối các hệ máy cắt Laser sợi quang khổ lớn, robot tự động hóa và trung tâm phay 5 trục với chính sách bảo vệ dự án tuyệt đối và chiết khấu lên đến 30%.
          </p>
        </div>

        <button
          onClick={onOpenDealerRegister}
          className="px-6 py-2.5 bg-[#f45b1c] hover:bg-[#d94e16] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-semibold cursor-pointer shrink-0"
        >
          ĐĂNG KÝ LÀM ĐẠI LÝ NGAY →
        </button>
      </div>

      {/* Tier Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Tier 1 Card */}
        <div
          onClick={() => setSelectedTier('tier1_exclusive')}
          className={`p-6 border flex flex-col justify-between cursor-pointer transition-colors ${
            selectedTier === 'tier1_exclusive'
              ? 'border-[#f45b1c] bg-[#1b1b1f]'
              : 'border-[#343538] bg-[#16181d] hover:border-[#707684]'
          }`}
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] font-semibold">
                TIER 01 // PREMIER DISTRIBUTOR
              </span>
              <span className="px-2 py-0.5 bg-[#f45b1c] text-white font-['JetBrains_Mono'] text-[10px] font-semibold">
                ĐỘC QUYỀN KHU VỰC
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl text-[#e3e2e6] uppercase font-medium mb-3">
              Tổng Đại Lý Vùng Độc Quyền
            </h3>
            <p className="font-['Hanken_Grotesk'] text-sm text-[#c4c7cc] mb-6 leading-relaxed">
              Dành cho các đơn vị có showroom trưng bày máy mẫu tối thiểu 250m² và đội ngũ kỹ sư bảo trì tại chỗ.
            </p>

            <div className="flex flex-col gap-2 font-['JetBrains_Mono'] text-xs text-[#c4c7cc] mb-6">
              <div className="flex items-center gap-2">
                <span className="text-[#f45b1c]">✓</span>
                <span>Chiết khấu thương mại cố định: <strong>25% - 30%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f45b1c]">✓</span>
                <span>Thưởng quý vượt doanh số: <strong>3% tổng doanh thu</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f45b1c]">✓</span>
                <span>Tài trợ 100% chi phí bảng hiệu, catalogue và máy demo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f45b1c]">✓</span>
                <span>Bảo vệ quyền lợi độc quyền báo giá dự án 100%</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#343538] flex justify-between items-center text-xs font-['JetBrains_Mono']">
            <span className="text-[#707684]">YÊU CẦU: TỪ 6 MÁY / NĂM</span>
            <span className="text-[#f45b1c] font-semibold">CHỌN ĐỂ MÔ PHỎNG LỢI NHUẬN →</span>
          </div>
        </div>

        {/* Tier 2 Card */}
        <div
          onClick={() => setSelectedTier('tier2_authorized')}
          className={`p-6 border flex flex-col justify-between cursor-pointer transition-colors ${
            selectedTier === 'tier2_authorized'
              ? 'border-[#f45b1c] bg-[#1b1b1f]'
              : 'border-[#343538] bg-[#16181d] hover:border-[#707684]'
          }`}
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] font-semibold">
                TIER 02 // AUTHORIZED RESELLER
              </span>
              <span className="px-2 py-0.5 bg-[#292a2d] text-[#c4c7cc] font-['JetBrains_Mono'] text-[10px]">
                THƯƠNG MẠI DỰ ÁN
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl text-[#e3e2e6] uppercase font-medium mb-3">
              Đại Lý Ủy Quyền Thương Mại
            </h3>
            <p className="font-['Hanken_Grotesk'] text-sm text-[#c4c7cc] mb-6 leading-relaxed">
              Dành cho các công ty thương mại thiết bị cơ khí, nhà thầu cơ điện tham gia đấu thầu dự án nhà xưởng.
            </p>

            <div className="flex flex-col gap-2 font-['JetBrains_Mono'] text-xs text-[#c4c7cc] mb-6">
              <div className="flex items-center gap-2">
                <span className="text-[#f45b1c]">✓</span>
                <span>Chiết khấu theo từng hợp đồng: <strong>18% - 22%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f45b1c]">✓</span>
                <span>Kỹ sư Vulcan đồng hành bảo vệ giải pháp trước chủ đầu tư</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f45b1c]">✓</span>
                <span>Hỗ trợ hồ sơ năng lực, chứng nhận xuất xứ CO/CQ chính hãng</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f45b1c]">✓</span>
                <span>Không áp đặt chỉ tiêu doanh số năm bắt buộc</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#343538] flex justify-between items-center text-xs font-['JetBrains_Mono']">
            <span className="text-[#707684]">LINH HOẠT THEO DỰ ÁN</span>
            <span className="text-[#f45b1c] font-semibold">CHỌN ĐỂ MÔ PHỎNG LỢI NHUẬN →</span>
          </div>
        </div>
      </div>

      {/* Simulator Section */}
      <div className="bg-[#1b1b1f] border border-[#343538] p-6 md:p-8 mb-12">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#343538]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#f45b1c]"></span>
            <h3 className="font-['Space_Grotesk'] text-xl text-[#e3e2e6] uppercase font-medium">
              Bảng Mô Phỏng Lợi Nhuận Gộp &amp; Chiết Khấu Hàng Năm
            </h3>
          </div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#8b919f]">
            ĐANG CHỌN: {selectedTier === 'tier1_exclusive' ? 'TỔNG ĐẠI LÝ VÙNG' : 'ĐẠI LÝ ỦY QUYỀN'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex justify-between items-center text-xs font-['JetBrains_Mono'] mb-2">
              <span className="text-[#c4c7cc]">GIÁ TRỊ TRUNG BÌNH MỖI HỆ THỐNG MÁY:</span>
              <span className="text-[#f45b1c] font-semibold">${baseMachineCost.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min="50000"
              max="250000"
              step="10000"
              value={baseMachineCost}
              onChange={(e) => setBaseMachineCost(Number(e.target.value))}
              className="w-full accent-[#f45b1c] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-['JetBrains_Mono'] text-[#707684] mt-1">
              <span>$50,000 (Robot gắp)</span>
              <span>$150,000 (Máy Laser)</span>
              <span>$250,000 (CNC 5-Axis)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs font-['JetBrains_Mono'] mb-2">
              <span className="text-[#c4c7cc]">SỐ LƯỢNG MÁY PHÂN PHỐI / NĂM:</span>
              <span className="text-[#f45b1c] font-semibold">{projectedSalesUnits} Hệ thống</span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              step="1"
              value={projectedSalesUnits}
              onChange={(e) => setProjectedSalesUnits(Number(e.target.value))}
              className="w-full accent-[#f45b1c] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-['JetBrains_Mono'] text-[#707684] mt-1">
              <span>2 máy</span>
              <span>10 máy</span>
              <span>20 máy</span>
            </div>
          </div>
        </div>

        {/* Calculation Summary Bar */}
        <div className="p-6 bg-[#0d0e11] border border-[#f45b1c] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <span className="block font-['JetBrains_Mono'] text-xs text-[#707684] uppercase">
              TỈ LỆ CHIẾT KHẤU ĐẠT ĐƯỢC
            </span>
            <span className="font-['JetBrains_Mono'] text-2xl text-[#f45b1c] font-bold">
              {calc.discountPercent}%
            </span>
            <span className="block font-['JetBrains_Mono'] text-[11px] text-[#c4c7cc] mt-1">
              Giá nhập: ${calc.wholesalePriceUsd.toLocaleString()} USD/máy
            </span>
          </div>

          <div>
            <span className="block font-['JetBrains_Mono'] text-xs text-[#707684] uppercase">
              THƯỞNG CHỈ TIÊU HÀNG QUÝ
            </span>
            <span className="font-['JetBrains_Mono'] text-2xl text-[#e3e2e6] font-semibold">
              ${calc.quarterlyRebateUsd.toLocaleString()} USD
            </span>
            <span className="block font-['JetBrains_Mono'] text-[11px] text-[#c4c7cc] mt-1">
              Chi trả tự động sau mỗi 90 ngày
            </span>
          </div>

          <div>
            <span className="block font-['JetBrains_Mono'] text-xs text-[#707684] uppercase">
              LỢI NHUẬN GỘP KINH DOANH / NĂM
            </span>
            <span className="font-['JetBrains_Mono'] text-2xl text-green-400 font-bold">
              ${calc.annualProjectedGrossProfitUsd.toLocaleString()} USD
            </span>
            <span className="block font-['JetBrains_Mono'] text-[11px] text-green-300 mt-1">
              ≈ {(calc.annualProjectedGrossProfitUsd * 25400).toLocaleString()} VNĐ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
