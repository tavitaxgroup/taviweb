import React, { useState } from 'react';
import {
  calculateQuotation,
  ProjectTypology,
  ServiceTier,
  TYPOLOGY_RATES,
  TIER_RATES,
} from '../utils/calculator';

interface CostCalculatorProps {
  onApplyToInquiry: (summary: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onApplyToInquiry }) => {
  const [areaM2, setAreaM2] = useState<number>(180);
  const [typology, setTypology] = useState<ProjectTypology>('office');
  const [tier, setTier] = useState<ServiceTier>('concept_design');
  const [expedited, setExpedited] = useState<boolean>(false);

  const quotation = calculateQuotation({
    areaM2,
    typology,
    tier,
    expedited,
  });

  return (
    <div className="p-2 md:p-3 rounded-[2.5rem] bg-black/[0.03] ring-1 ring-black/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]">
      <div className="w-full bg-[#fdfbf9] rounded-[calc(2.5rem-0.625rem)] border border-black/5 p-6 lg:p-10">
        {/* Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-black/10 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-0.5 bg-[#ac2e00]/10 text-[10px] uppercase font-mono-code tracking-[0.2em] text-[#ac2e00] font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ac2e00] animate-pulse"></span>
              <span>CÔNG CỤ DỰ TOÁN ĐỘC BẢN</span>
            </div>
            <h3 className="font-syne text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#1c1b1b]">
              Dự Toán Ngân Sách & Tiến Độ Sơ Bộ
            </h3>
          </div>
          <span className="font-mono-code text-xs text-[#747689] mt-2 sm:mt-0 font-medium">
            CẬP NHẬT BIỂU PHÍ MÙA 2025
          </span>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Typology */}
          <div>
            <label className="font-mono-code text-xs uppercase text-[#1c1b1b] font-bold block mb-2">
              1. Loại hình công trình kiến trúc:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(Object.keys(TYPOLOGY_RATES) as ProjectTypology[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTypology(key)}
                  className={`p-3 text-left border text-xs font-mono-code transition-all cursor-pointer ${
                    typology === key
                      ? 'border-[#0038ff] bg-white text-[#0038ff] font-bold shadow-[2px_2px_0px_#0038ff]'
                      : 'border-[#c4c5da] bg-[#ffffff] text-[#444657] hover:border-[#1c1b1b]'
                  }`}
                >
                  <span className="block font-bold">{TYPOLOGY_RATES[key].label.split('&')[0]}</span>
                  <span className="text-[10px] text-[#747689] block mt-1">Hệ số x{TYPOLOGY_RATES[key].multiplier}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Area slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="font-mono-code text-xs uppercase text-[#1c1b1b] font-bold">
                2. Diện tích sàn dự kiến (m²):
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="20"
                  max="3000"
                  value={areaM2}
                  onChange={(e) => setAreaM2(Number(e.target.value) || 20)}
                  className="w-20 px-2 py-1 text-right font-mono-code text-sm font-bold border border-[#1c1b1b] bg-white"
                  aria-label="Nhập số mét vuông"
                />
                <span className="font-mono-code text-xs font-bold">m²</span>
              </div>
            </div>

            <input
              type="range"
              min="30"
              max="1500"
              step="10"
              value={areaM2}
              onChange={(e) => setAreaM2(Number(e.target.value))}
              className="w-full h-2 bg-[#e5e2e1] accent-[#0038ff] cursor-pointer"
              aria-label="Thanh trượt diện tích sàn"
            />
            <div className="flex justify-between text-[10px] font-mono-code text-[#747689] mt-1">
              <span>30 m² (Studio)</span>
              <span>250 m² (Văn phòng tầm trung)</span>
              <span>800 m² (Trụ sở lớn)</span>
              <span>1500+ m²</span>
            </div>
          </div>

          {/* Step 3: Tier selection */}
          <div>
            <label className="font-mono-code text-xs uppercase text-[#1c1b1b] font-bold block mb-2">
              3. Gói giải pháp mong muốn:
            </label>
            <div className="space-y-2">
              {(Object.keys(TIER_RATES) as ServiceTier[]).map((key) => {
                const item = TIER_RATES[key];
                const isSelected = tier === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTier(key)}
                    className={`w-full p-3.5 text-left border flex items-center justify-between text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0038ff] bg-white text-[#1c1b1b] font-semibold shadow-[2px_2px_0px_#0038ff]'
                        : 'border-[#c4c5da] bg-[#ffffff] text-[#444657] hover:border-[#1c1b1b]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#0038ff] bg-[#0038ff]' : 'border-[#c4c5da]'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <span className="font-mono-code text-[11px] text-[#0038ff] font-bold">
                      {new Intl.NumberFormat('vi-VN').format(item.basePerM2)} đ/m²
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expedited checkbox */}
          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={expedited}
                onChange={(e) => setExpedited(e.target.checked)}
                className="w-4 h-4 accent-[#ac2e00]"
              />
              <span className="font-mono-code text-xs text-[#1c1b1b]">
                Kích hoạt chế độ <strong>Sprint Tốc hành (Rút ngắn 25% thời gian)</strong>
              </span>
            </label>
          </div>
        </div>

        {/* Right Output Card with Double Bezel */}
        <div className="lg:col-span-5 bg-white border border-black/10 rounded-2xl p-6 md:p-8 shadow-[0_12px_32px_rgba(0,56,255,0.08)]">
          <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-5">
            <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#ac2e00] font-bold">
              KẾT QUẢ DỰ BÁO
            </span>
            <span className="font-mono-code text-[10px] text-[#747689] font-medium">
              THỰC THI BỞI ORIGIN
            </span>
          </div>

          <div className="space-y-5 mb-6">
            <div>
              <span className="font-mono-code text-xs text-[#747689] block mb-1">Ước tính ngân sách:</span>
              <div className="font-syne text-3xl sm:text-4xl font-extrabold text-[#0038ff] tracking-tight">
                {quotation.formattedCost}
              </div>
              <span className="font-mono-code text-[11px] text-[#444657] mt-1.5 block">
                Tương đương ~{new Intl.NumberFormat('vi-VN').format(quotation.perM2CostVND)} đ / m² sàn
              </span>
            </div>

            <div className="p-3.5 bg-[#f6f3f2] rounded-xl border border-black/5 flex items-center justify-between">
              <div>
                <span className="font-mono-code text-[11px] text-[#747689] block">Tiến độ hoàn thiện:</span>
                <span className="font-syne text-lg font-bold text-[#1c1b1b]">
                  {quotation.estimatedDays} ngày làm việc
                </span>
              </div>
              <span className="material-symbols-outlined text-2xl text-[#ac2e00]">speed</span>
            </div>

            <div className="space-y-2 text-xs font-body text-[#44423c]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#0038ff]">verified</span>
                <span>Bóc tách dự toán chi tiết không phát sinh</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#0038ff]">verified</span>
                <span>Kiểm soát trực tiếp bởi KTS Trưởng</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#0038ff]">verified</span>
                <span>Cam kết đền bù tiến độ theo hợp đồng</span>
              </div>
            </div>
          </div>

          {/* Button-in-Button Action */}
          <button
            type="button"
            onClick={() => {
              const summary = `${quotation.summaryTitle} - Diện tích: ${areaM2}m² - Dự toán: ${quotation.formattedCost} (${quotation.estimatedDays} ngày)`;
              onApplyToInquiry(summary);
            }}
            className="group w-full py-2.5 pl-6 pr-2 rounded-full bg-[#0038ff] hover:bg-[#ac2e00] text-white flex items-center justify-between font-mono-code text-xs uppercase font-bold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-md cursor-pointer"
          >
            <span>Áp Dụng Vào Tư Vấn</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
