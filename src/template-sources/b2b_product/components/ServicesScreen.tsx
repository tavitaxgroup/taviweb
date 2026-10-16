import React, { useState } from 'react';
import { EQUIPMENT_CATALOG, Equipment } from '../data/equipment';
import { calculateLaserCuttingParams, calculateEquipmentRoi } from '../utils/machinery';

interface ServicesScreenProps {
  onOpenCadModal: (product: Equipment) => void;
  onOpenQuote: () => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onOpenCadModal, onOpenQuote }) => {
  // Laser simulator state
  const [calcMaterial, setCalcMaterial] = useState<'carbon_steel' | 'stainless_steel' | 'aluminum'>('carbon_steel');
  const [calcThickness, setCalcThickness] = useState(12);
  const [calcPower, setCalcPower] = useState(20);

  // ROI calculator state
  const [roiMachineCost, setRoiMachineCost] = useState(185000);
  const [roiHours, setRoiHours] = useState(360);
  const [roiLaborRate, setRoiLaborRate] = useState(30);
  const [roiOutputGain, setRoiOutputGain] = useState(45);

  // Booking test-run form state
  const [testRunBooked, setTestRunBooked] = useState(false);
  const [testRunData, setTestRunData] = useState({
    company: 'Công ty Cơ khí Khuôn mẫu Alpha',
    phone: '0938 888 999',
    materialSample: 'Inox SUS304 dày 16mm và Nhôm 6061',
    preferredDate: '2025-11-05',
  });

  const laserResult = calculateLaserCuttingParams({
    material: calcMaterial,
    thicknessMm: calcThickness,
    powerKw: calcPower,
  });

  const roiResult = calculateEquipmentRoi({
    machineCostUsd: roiMachineCost,
    monthlyProductionHours: roiHours,
    hourlyOperatorLaborUsd: roiLaborRate,
    outputIncreasePercent: roiOutputGain,
  });

  const handleBookTestRun = (e: React.FormEvent) => {
    e.preventDefault();
    setTestRunBooked(true);
  };

  return (
    <div className="w-full bg-[#121316] min-h-screen py-8 px-5 md:px-10 lg:px-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#707684] mb-4">
        <span>VULCAN</span>
        <span>//</span>
        <span className="text-[#f45b1c]">DỊCH VỤ KỸ THUẬT &amp; THƯ VIỆN CAD 3D</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#343538] pb-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase block mb-1 font-semibold">
            ENGINEERING &amp; METROLOGY INFRASTRUCTURE
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl md:text-4xl text-[#e3e2e6] uppercase tracking-tight font-medium">
            Hạ tầng kỹ thuật &amp; Đo kiểm mẫu CMM
          </h1>
          <p className="font-['Hanken_Grotesk'] text-sm text-[#c4c7cc] mt-2 max-w-2xl leading-relaxed">
            Hỗ trợ toàn diện từ tải bản vẽ 3D STEP phục vụ mô phỏng lắp đặt nhà máy, tính toán tốc độ gia công tối ưu, đến đo đạc kiểm định dung sai trên thiết bị quang học trước khi bàn giao.
          </p>
        </div>

        <button
          onClick={onOpenQuote}
          className="px-6 py-2.5 bg-[#f45b1c] hover:bg-[#d94e16] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-semibold cursor-pointer shrink-0"
        >
          YÊU CẦU TƯ VẤN KỸ THUẬT →
        </button>
      </div>

      {/* Grid of Tools: Tool 1 - Laser Speed & Tool 2 - ROI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Tool 1: Interactive Laser Cutting Parameter Engine */}
        <div className="bg-[#1b1b1f] border border-[#343538] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-[#343538] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f45b1c]"></span>
                <h3 className="font-['Space_Grotesk'] text-lg uppercase text-[#e3e2e6] font-medium">
                  01. Tính Toán Tốc Độ Cắt Laser &amp; Tiêu Hao Khí
                </h3>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#8b919f]">IPG OPTICAL LAB</span>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <div>
                <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-2">
                  Vật liệu cắt:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'carbon_steel', label: 'Thép Carbon (SS400/Q235)' },
                    { id: 'stainless_steel', label: 'Inox (SUS304/SUS316)' },
                    { id: 'aluminum', label: 'Hợp kim nhôm (6061)' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setCalcMaterial(m.id as any)}
                      className={`p-2 font-['JetBrains_Mono'] text-xs text-center border cursor-pointer ${
                        calcMaterial === m.id
                          ? 'border-[#f45b1c] bg-[#1f1f23] text-[#f45b1c] font-semibold'
                          : 'border-[#343538] text-[#c4c7cc]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-['JetBrains_Mono'] mb-1">
                  <span className="text-[#c4c7cc]">ĐỘ DÀY TẤM GIA CÔNG:</span>
                  <span className="text-[#f45b1c] font-semibold">{calcThickness} mm</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={calcThickness}
                  onChange={(e) => setCalcThickness(Number(e.target.value))}
                  className="w-full accent-[#f45b1c] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-['JetBrains_Mono'] mb-1">
                  <span className="text-[#c4c7cc]">CÔNG SUẤT NGUỒN LASER:</span>
                  <span className="text-[#f45b1c] font-semibold">{calcPower} kW</span>
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
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#121316] border border-[#343538] grid grid-cols-2 gap-4">
            <div>
              <span className="block font-['JetBrains_Mono'] text-[10px] text-[#707684]">TỐC ĐỘ GIA CÔNG:</span>
              <span className="font-['JetBrains_Mono'] text-lg text-[#e3e2e6] font-semibold">
                {laserResult.feedrateMPerMin} m/min
              </span>
            </div>
            <div>
              <span className="block font-['JetBrains_Mono'] text-[10px] text-[#707684]">KHÍ TRỢ LỰC &amp; ÁP:</span>
              <span className="font-['JetBrains_Mono'] text-lg text-[#f45b1c] font-semibold">
                {laserResult.assistGas} ({laserResult.gasPressureBar} bar)
              </span>
            </div>
          </div>
        </div>

        {/* Tool 2: ROI and Equipment Payback Calculator */}
        <div className="bg-[#1b1b1f] border border-[#343538] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-[#343538] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f45b1c]"></span>
                <h3 className="font-['Space_Grotesk'] text-lg uppercase text-[#e3e2e6] font-medium">
                  02. Dự Toán Thu Hồi Vốn Đầu Tư (ROI Model)
                </h3>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#8b919f]">FINANCIAL ENGINE</span>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <div>
                <div className="flex justify-between items-center text-xs font-['JetBrains_Mono'] mb-1">
                  <span className="text-[#c4c7cc]">VỐN ĐẦU TƯ THIẾT BỊ:</span>
                  <span className="text-[#f45b1c] font-semibold">${roiMachineCost.toLocaleString()} USD</span>
                </div>
                <input
                  type="range"
                  min="40000"
                  max="350000"
                  step="10000"
                  value={roiMachineCost}
                  onChange={(e) => setRoiMachineCost(Number(e.target.value))}
                  className="w-full accent-[#f45b1c] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-['JetBrains_Mono'] mb-1">
                  <span className="text-[#c4c7cc]">SỐ GIỜ VẬN HÀNH / THÁNG (2 CA):</span>
                  <span className="text-[#e3e2e6] font-semibold">{roiHours} giờ/tháng</span>
                </div>
                <input
                  type="range"
                  min="160"
                  max="600"
                  step="20"
                  value={roiHours}
                  onChange={(e) => setRoiHours(Number(e.target.value))}
                  className="w-full accent-[#f45b1c] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-['JetBrains_Mono'] mb-1">
                  <span className="text-[#c4c7cc]">MỨC ĐỘ TĂNG NĂNG SUẤT SO VỚI MÁY CŨ:</span>
                  <span className="text-[#f45b1c] font-semibold">+{roiOutputGain}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={roiOutputGain}
                  onChange={(e) => setRoiOutputGain(Number(e.target.value))}
                  className="w-full accent-[#f45b1c] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#121316] border border-[#343538] grid grid-cols-2 gap-4">
            <div>
              <span className="block font-['JetBrains_Mono'] text-[10px] text-[#707684]">THỜI GIAN HOÀN VỐN:</span>
              <span className="font-['JetBrains_Mono'] text-lg text-green-400 font-semibold">
                {roiResult.paybackMonths} Tháng
              </span>
            </div>
            <div>
              <span className="block font-['JetBrains_Mono'] text-[10px] text-[#707684]">LỢI NHUẬN THUẦN 5 NĂM:</span>
              <span className="font-['JetBrains_Mono'] text-lg text-[#f45b1c] font-semibold">
                +${roiResult.fiveYearNetSavingsUsd.toLocaleString()} USD
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Central CAD Library Downloads Table */}
      <div className="bg-[#1b1b1f] border border-[#343538] p-6 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-[#343538] gap-2">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] uppercase font-semibold block mb-1">
              TRUNG TÂM TẢI BẢN VẼ KỸ THUẬT CAD / STEP
            </span>
            <h2 className="font-['Space_Grotesk'] text-xl text-[#e3e2e6] uppercase font-medium">
              Thư viện dữ liệu số hóa 3D cho kiến trúc sư &amp; kỹ sư layout xưởng
            </h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#8b919f]">
            FREE OPEN DOWNLOAD // NO SIGN-IN REQUIRED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EQUIPMENT_CATALOG.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-[#16181d] border border-[#343538] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] font-semibold">
                    {item.ref}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#707684]">
                    {item.cadFiles.length} FILES
                  </span>
                </div>
                <h4 className="font-['Space_Grotesk'] text-sm text-[#e3e2e6] font-medium mb-1">
                  {item.name}
                </h4>
                <p className="font-['Hanken_Grotesk'] text-xs text-[#c4c7cc] line-clamp-2 mb-4">
                  {item.tagline}
                </p>
              </div>

              <button
                onClick={() => onOpenCadModal(item)}
                className="w-full py-2 bg-[#1f1f23] hover:bg-[#f45b1c] hover:text-white border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#c4c7cc] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                <span>TẢI GÓI CAD (.STEP / .DWG)</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Book Showroom Test-Run Section */}
      <div className="bg-[#16181d] border-2 border-[#f45b1c] p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] uppercase tracking-wider font-semibold block mb-1">
              KIỂM CHỨNG TRƯỚC KHI ĐẦU TƯ
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl text-[#e3e2e6] uppercase font-medium mb-3">
              Đăng ký mang phôi mẫu chạy thử thực tế
            </h2>
            <p className="font-['Hanken_Grotesk'] text-sm text-[#c4c7cc] leading-relaxed mb-4">
              Quý doanh nghiệp có thể gửi file bản vẽ và vật liệu mẫu tới Showroom Vulcan. Đội ngũ kỹ sư ứng dụng sẽ lập trình chạy máy trực tiếp và gửi kèm báo cáo đo dung sai trên máy CMM Mitutoyo quang học 3 chiều.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-['JetBrains_Mono'] text-[#8b919f]">
              <span>✓ MIỄN PHÍ GIA CÔNG PHÔI MẪU</span>
              <span>✓ BÁO CÁO CMM QUANG HỌC CHUẨN ISO</span>
              <span>✓ ĐO ĐẠC ĐỘ BÓNG BỀ MẶT RA/RZ</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0d0e11] border border-[#343538] p-5">
            {!testRunBooked ? (
              <form onSubmit={handleBookTestRun} className="flex flex-col gap-3">
                <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold block">
                  ĐĂNG KÝ LỊCH TEST-RUN TẠI SHOWROOM:
                </span>
                <input
                  type="text"
                  required
                  placeholder="Tên doanh nghiệp / Nhà xưởng"
                  value={testRunData.company}
                  onChange={(e) => setTestRunData({ ...testRunData, company: e.target.value })}
                  className="bg-[#1b1b1f] border border-[#343538] p-2 text-xs font-['JetBrains_Mono'] text-[#e3e2e6] focus:outline-none focus:border-[#f45b1c]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ"
                  value={testRunData.phone}
                  onChange={(e) => setTestRunData({ ...testRunData, phone: e.target.value })}
                  className="bg-[#1b1b1f] border border-[#343538] p-2 text-xs font-['JetBrains_Mono'] text-[#e3e2e6] focus:outline-none focus:border-[#f45b1c]"
                />
                <input
                  type="text"
                  required
                  placeholder="Quy cách phôi (Vd: Inox 12mm)"
                  value={testRunData.materialSample}
                  onChange={(e) => setTestRunData({ ...testRunData, materialSample: e.target.value })}
                  className="bg-[#1b1b1f] border border-[#343538] p-2 text-xs font-['JetBrains_Mono'] text-[#e3e2e6] focus:outline-none focus:border-[#f45b1c]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#f45b1c] hover:bg-[#d94e16] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-semibold cursor-pointer mt-1"
                >
                  XÁC NHẬN LỊCH CHẠY THỬ MẪU →
                </button>
              </form>
            ) : (
              <div className="text-center py-4 text-xs font-['JetBrains_Mono']">
                <span className="material-symbols-outlined text-green-400 text-3xl block mb-2">
                  task_alt
                </span>
                <span className="text-[#e3e2e6] font-semibold block mb-1">
                  ĐÃ XÁC NHẬN YÊU CẦU CHẠY THỬ PHÔI
                </span>
                <span className="text-[#c4c7cc] block">
                  Kỹ sư phụ trách Showroom sẽ liên hệ lại với {testRunData.company} qua số {testRunData.phone} để tiếp nhận file CAD và đón tiếp.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
