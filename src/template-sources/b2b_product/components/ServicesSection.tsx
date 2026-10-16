import React, { useState } from 'react';
import { calculateLaserCuttingParams } from '../utils/machinery';

interface ServicesSectionProps {
  onOpenCadLibrary: () => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenCadLibrary,
  onOpenConsultation,
}) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcMaterial, setCalcMaterial] = useState<'carbon_steel' | 'stainless_steel' | 'aluminum'>('stainless_steel');
  const [calcThickness, setCalcThickness] = useState(6);
  const [calcPower, setCalcPower] = useState(20);

  const calcResult = calculateLaserCuttingParams({
    material: calcMaterial,
    thicknessMm: calcThickness,
    powerKw: calcPower,
  });

  return (
    <section
      className="w-full bg-[#121316] px-5 md:px-10 lg:px-16 py-16 border-t border-[#343538]/40"
      id="services"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase block mb-1 font-semibold">
            NĂNG LỰC DỊCH VỤ &amp; HẬU MÃI
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl lg:text-4xl text-[#e3e2e6] uppercase tracking-tight font-medium">
            Hạ tầng hỗ trợ kỹ thuật chuẩn xác
          </h2>
        </div>
        <p className="font-['Hanken_Grotesk'] text-sm md:text-base text-[#c4c7cc] max-w-md">
          Hệ sinh thái dịch vụ kỹ thuật chuyển giao trọn gói hỗ trợ doanh nghiệp tối ưu dây chuyền vận hành.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Pillar 1 */}
        <div
          onClick={onOpenCadLibrary}
          className="bg-[#1b1b1f] p-5 border border-[#343538]/50 flex flex-col justify-between group hover:border-[#f45b1c] transition-colors cursor-pointer"
        >
          <div>
            <div className="w-8 h-8 flex items-center justify-center bg-[#1f1f23] text-[#f45b1c] font-['JetBrains_Mono'] text-xs font-semibold mb-4 border border-[#343538]/50 group-hover:bg-[#f45b1c] group-hover:text-white transition-colors">
              01
            </div>
            <h3 className="font-['Space_Grotesk'] text-base md:text-lg text-[#e3e2e6] uppercase mb-2 font-medium">
              Tài liệu Kỹ thuật &amp; CAD 3D
            </h3>
            <p className="font-['Hanken_Grotesk'] text-xs md:text-sm text-[#c4c7cc] leading-relaxed">
              Tải trọn bộ catalogue thông số kỹ thuật và bản vẽ CAD/STEP phục vụ thiết kế lắp đặt trực tiếp vào mặt bằng nhà máy.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-[#343538]/40 flex items-center justify-between">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-wider uppercase font-medium">
              SẴN SÀNG: STEP / DWG / PDF
            </span>
            <span className="material-symbols-outlined text-xs text-[#f45b1c] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div
          onClick={onOpenConsultation}
          className="bg-[#1b1b1f] p-5 border border-[#343538]/50 flex flex-col justify-between group hover:border-[#f45b1c] transition-colors cursor-pointer"
        >
          <div>
            <div className="w-8 h-8 flex items-center justify-center bg-[#1f1f23] text-[#f45b1c] font-['JetBrains_Mono'] text-xs font-semibold mb-4 border border-[#343538]/50 group-hover:bg-[#f45b1c] group-hover:text-white transition-colors">
              02
            </div>
            <h3 className="font-['Space_Grotesk'] text-base md:text-lg text-[#e3e2e6] uppercase mb-2 font-medium">
              Tư vấn Lựa chọn Thiết bị
            </h3>
            <p className="font-['Hanken_Grotesk'] text-xs md:text-sm text-[#c4c7cc] leading-relaxed">
              Đội ngũ kỹ sư ứng dụng đánh giá nhu cầu gia công thực tế, tính toán chu kỳ sản xuất và tối ưu hóa chi phí đầu tư khấu hao.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-[#343538]/40 flex items-center justify-between">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#c4c7cc] tracking-wider uppercase">
              APPLICATION ENGINEERS
            </span>
            <span className="material-symbols-outlined text-xs text-[#c4c7cc] group-hover:text-[#f45b1c] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div
          onClick={() => setShowCalculator(!showCalculator)}
          className="bg-[#1b1b1f] p-5 border border-[#343538]/50 flex flex-col justify-between group hover:border-[#f45b1c] transition-colors cursor-pointer"
        >
          <div>
            <div className="w-8 h-8 flex items-center justify-center bg-[#1f1f23] text-[#f45b1c] font-['JetBrains_Mono'] text-xs font-semibold mb-4 border border-[#343538]/50 group-hover:bg-[#f45b1c] group-hover:text-white transition-colors">
              03
            </div>
            <h3 className="font-['Space_Grotesk'] text-base md:text-lg text-[#e3e2e6] uppercase mb-2 font-medium">
              Chạy Thử &amp; Đo Kiểm Mẫu
            </h3>
            <p className="font-['Hanken_Grotesk'] text-xs md:text-sm text-[#c4c7cc] leading-relaxed">
              Hỗ trợ gia công phôi mẫu thực tế trên máy tại showroom, đo đạc dung sai bằng thiết bị CMM quang học trước khi nghiệm thu.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-[#343538]/40 flex items-center justify-between">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-wider uppercase">
              {showCalculator ? 'ĐÓNG BỘ ĐO THỬ ▲' : 'BẬT MÔ PHỎNG THỰC TẾ ▼'}
            </span>
            <span className="material-symbols-outlined text-xs text-[#f45b1c]">
              tune
            </span>
          </div>
        </div>

        {/* Pillar 4 */}
        <div
          onClick={onOpenConsultation}
          className="bg-[#1b1b1f] p-5 border border-[#343538]/50 flex flex-col justify-between group hover:border-[#f45b1c] transition-colors cursor-pointer"
        >
          <div>
            <div className="w-8 h-8 flex items-center justify-center bg-[#1f1f23] text-[#f45b1c] font-['JetBrains_Mono'] text-xs font-semibold mb-4 border border-[#343538]/50 group-hover:bg-[#f45b1c] group-hover:text-white transition-colors">
              04
            </div>
            <h3 className="font-['Space_Grotesk'] text-base md:text-lg text-[#e3e2e6] uppercase mb-2 font-medium">
              Hỗ trợ Kỹ thuật &amp; Phụ tùng
            </h3>
            <p className="font-['Hanken_Grotesk'] text-xs md:text-sm text-[#c4c7cc] leading-relaxed">
              Dịch vụ bảo trì định kỳ, linh kiện thay thế dự phòng sẵn có trong kho nội địa với thời gian phản hồi kỹ thuật nhanh chóng.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-[#343538]/40 flex items-center justify-between">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-wider uppercase font-medium">
              KHO PHỤ TÙNG SẴN CÓ 100%
            </span>
            <span className="material-symbols-outlined text-xs text-[#f45b1c] group-hover:translate-x-1 transition-transform">
              verified
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Laser Cutting Simulator Dropdown */}
      {showCalculator && (
        <div className="mb-12 p-6 bg-[#0d0e11] border border-[#f45b1c]/60">
          <div className="flex items-center justify-between mb-4 border-b border-[#343538] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#f45b1c]"></span>
              <h4 className="font-['Space_Grotesk'] text-sm md:text-base uppercase text-[#e3e2e6] font-medium">
                Mô phỏng Chạy Thử Cắt Laser &amp; Đo Dung Sai Thực Tế
              </h4>
            </div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#8b919f]">
              ALGORITHM // LASER-PARAM-V4
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-2">
                Vật liệu gia công
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'carbon_steel', label: 'Thép SS400' },
                  { id: 'stainless_steel', label: 'Inox SUS304' },
                  { id: 'aluminum', label: 'Nhôm A6061' },
                ].map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setCalcMaterial(mat.id as any)}
                    className={`py-2 px-2 text-center font-['JetBrains_Mono'] text-[11px] border cursor-pointer ${
                      calcMaterial === mat.id
                        ? 'border-[#f45b1c] bg-[#f45b1c]/10 text-white font-semibold'
                        : 'border-[#343538] text-[#c4c7cc] hover:border-[#c4c7cc]'
                    }`}
                  >
                    {mat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase">
                  Độ dày phôi (mm)
                </label>
                <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] font-semibold">
                  {calcThickness} mm
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={calcThickness}
                onChange={(e) => setCalcThickness(Number(e.target.value))}
                className="w-full accent-[#f45b1c] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-['JetBrains_Mono'] text-[#707684] mt-1">
                <span>1 mm</span>
                <span>15 mm</span>
                <span>30 mm</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase">
                  Công suất nguồn Laser
                </label>
                <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] font-semibold">
                  {calcPower} kW
                </span>
              </div>
              <input
                type="range"
                min="6"
                max="30"
                step="2"
                value={calcPower}
                onChange={(e) => setCalcPower(Number(e.target.value))}
                className="w-full accent-[#f45b1c] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-['JetBrains_Mono'] text-[#707684] mt-1">
                <span>6 kW</span>
                <span>20 kW</span>
                <span>30 kW</span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#16181d] border border-[#343538]">
            <div>
              <span className="block font-['JetBrains_Mono'] text-[11px] text-[#707684] uppercase">
                Tốc độ cắt dự kiến
              </span>
              <span className="font-['JetBrains_Mono'] text-lg md:text-xl text-[#e3e2e6] font-semibold">
                {calcResult.feedrateMPerMin} m/min
              </span>
            </div>
            <div>
              <span className="block font-['JetBrains_Mono'] text-[11px] text-[#707684] uppercase">
                Khí trợ lực &amp; Áp suất
              </span>
              <span className="font-['JetBrains_Mono'] text-lg md:text-xl text-[#f45b1c] font-semibold">
                {calcResult.assistGas} @ {calcResult.gasPressureBar} bar
              </span>
            </div>
            <div>
              <span className="block font-['JetBrains_Mono'] text-[11px] text-[#707684] uppercase">
                Thời gian đục lỗ (Pierce)
              </span>
              <span className="font-['JetBrains_Mono'] text-lg md:text-xl text-[#e3e2e6] font-semibold">
                {calcResult.pierceTimeSec} s
              </span>
            </div>
            <div>
              <span className="block font-['JetBrains_Mono'] text-[11px] text-[#707684] uppercase">
                Độ nhám bề mặt Ra
              </span>
              <span className="font-['JetBrains_Mono'] text-lg md:text-xl text-[#e3e2e6] font-semibold">
                Ra ≤ {calcResult.edgeQualityRaUm} µm
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Subtle OEM Manufacturer Emblems */}
      <div className="p-4 bg-[#0d0e11] border border-[#343538]/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#8b919f] uppercase tracking-widest font-semibold">
            OEM / HÃNG LIÊN KẾT:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#c4c7cc] font-['JetBrains_Mono'] text-xs tracking-wider uppercase">
            <div className="flex items-center gap-2 border border-[#343538]/60 px-3 py-1.5 bg-[#1b1b1f]">
              <span className="w-2 h-2 bg-[#f45b1c]"></span>
              <span>IPG PHOTONICS // CORE</span>
            </div>
            <div className="flex items-center gap-2 border border-[#343538]/60 px-3 py-1.5 bg-[#1b1b1f]">
              <span className="w-2 h-2 bg-[#e3e2e6]"></span>
              <span>NABTESCO GEAR // ALLIANCE</span>
            </div>
            <div className="flex items-center gap-2 border border-[#343538]/60 px-3 py-1.5 bg-[#1b1b1f]">
              <span className="w-2 h-2 bg-[#c4c7cc]"></span>
              <span>THK LINEAR // MOTION</span>
            </div>
            <div className="flex items-center gap-2 border border-[#343538]/60 px-3 py-1.5 bg-[#1b1b1f]">
              <span className="w-2 h-2 bg-[#f45b1c]"></span>
              <span>SYNTEC CNC // CONTROLLER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
