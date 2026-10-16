import React, { useState } from 'react';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreCategories: () => void;
  onInspectHeroMachine: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onExploreCategories,
  onInspectHeroMachine,
}) => {
  const [wireframeMode, setWireframeMode] = useState(false);
  const [activeCallout, setActiveCallout] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-[#0d0e11] px-5 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 overflow-hidden">
      {/* Archival Coordinate Watermark */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center py-2 mb-8 border-b border-[#343538]/30 gap-2">
        <div className="flex items-center gap-3">
          <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] text-[#8b919f] tracking-widest uppercase">
            CATALOGUE // 2024–2025
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#f45b1c]"></span>
          <span className="hidden sm:inline-block font-['JetBrains_Mono'] text-[10px] text-[#707684]">
            HEIDENHAIN OPTICAL ENCODERS // DIN EN ISO 230-2
          </span>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <button
            onClick={() => setWireframeMode(!wireframeMode)}
            className="inline-flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] px-3 py-1 rounded-full bg-[#1b1b1f] border border-[#343538] text-[#c4c7cc] hover:text-[#f45b1c] hover:border-[#f45b1c]/50 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[14px]">
              {wireframeMode ? 'photo' : 'view_in_ar'}
            </span>
            <span>{wireframeMode ? 'ẢNH CHỤP' : 'BẢN VẼ WIREFRAME'}</span>
          </button>
          <span className="font-['JetBrains_Mono'] text-[11px] sm:text-xs text-[#c4c7cc] tracking-widest">
            SERIES 09 // CONTINUOUS 5-AXIS
          </span>
        </div>
      </div>

      {/* Editorial Header Block */}
      <div className="w-full max-w-4xl mb-10 relative z-20">
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[#f45b1c]/10 border border-[#f45b1c]/25 text-[10px] uppercase font-['JetBrains_Mono'] text-[#f45b1c] tracking-[0.2em] mb-3 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f45b1c] animate-pulse"></span>
          <span>INDUSTRIAL SOLUTIONS &amp; SHOWROOM</span>
        </div>
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium text-[#e3e2e6] tracking-tight uppercase leading-[0.98]">
          Thiết bị công nghiệp cho hiệu suất vượt trội.
        </h1>
        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="font-['Hanken_Grotesk'] text-base md:text-lg text-[#c4c7cc] max-w-md leading-relaxed">
            Giải pháp thiết bị và hệ thống cơ khí chính xác hàng đầu cho nhà máy và công trình. Nhập khẩu trực tiếp, bảo hành chính hãng và hỗ trợ lắp đặt turnkey.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {/* Button-in-Button Primary Action */}
            <button
              onClick={onOpenQuote}
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 bg-[#e3e2e6] hover:bg-[#f45b1c] text-[#0d0e11] hover:text-white rounded-full font-['JetBrains_Mono'] text-xs uppercase tracking-widest transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer font-semibold shadow-md"
            >
              <span>Yêu cầu báo giá</span>
              <span className="w-8 h-8 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </button>
            <button
              onClick={onExploreCategories}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-[#c4c7cc] hover:text-white hover:border-white font-['JetBrains_Mono'] text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer hover:bg-white/5"
            >
              <span>Khám phá danh mục</span>
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Artifact Viewport with Doppelrand (Double-Bezel Architecture) */}
      <div className="p-2 md:p-3 rounded-[2rem] bg-white/[0.03] ring-1 ring-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9)]">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#17181c] overflow-hidden group rounded-[calc(2rem-0.5rem)] border border-white/5">
          {/* Machinery Image */}
          <img
            alt="Exhibition-grade editorial studio photograph of a massive state-of-the-art precision 5-axis CNC industrial milling machine"
            className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-[1.01] ${
              wireframeMode ? 'brightness-50 contrast-150 invert sepia hue-rotate-180' : 'grayscale contrast-125'
            }`}
            src="/images/cnc-5x.jpg"
          />

          {/* Studio Chiaroscuro Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e11]/50 via-transparent to-transparent pointer-events-none"></div>

        {/* Wireframe Grid Blueprint Overlay when active */}
        {wireframeMode && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff15_1px,transparent_1px),linear-gradient(to_bottom,#00ffff15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none">
            <div className="absolute top-4 left-4 font-['JetBrains_Mono'] text-[10px] text-[#ffb59c] bg-[#0d0e11]/80 px-2 py-1 border border-[#f45b1c]/30">
              CAD WIREFRAME OVERLAY // KINEMATICS ACTIVE (60 FPS)
            </div>
          </div>
        )}

        {/* Technical Callout 01 (Spindle Vector) */}
        <div
          onMouseEnter={() => setActiveCallout('spindle')}
          onMouseLeave={() => setActiveCallout(null)}
          onClick={onInspectHeroMachine}
          className="absolute top-1/4 left-4 sm:left-8 md:left-16 z-20 flex flex-col gap-1 cursor-pointer group/callout"
        >
          <div className="flex items-center gap-1.5 bg-[#0d0e11]/85 backdrop-blur-sm border border-[#343538] px-2 py-1 transition-colors group-hover/callout:border-[#f45b1c]">
            <span className="w-1.5 h-1.5 bg-[#f45b1c] inline-block animate-ping"></span>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#e3e2e6] tracking-wider font-medium">
              CONTINUOUS SPINDLE: 24,000 RPM
            </span>
          </div>
          <div className="w-16 h-px bg-[#f45b1c]/60 group-hover/callout:w-28 transition-all"></div>
          {activeCallout === 'spindle' && (
            <div className="bg-[#121316] border border-[#f45b1c] p-2 text-[10px] font-['JetBrains_Mono'] text-[#c4c7cc] w-48 shadow-xl mt-1">
              Trục chính động cơ tích hợp đồng bộ làm mát chất lỏng, chuẩn đầu kẹp dao HSK-A63, độ đảo trục ≤ 0.001 mm.
            </div>
          )}
        </div>

        {/* Technical Callout 02 (Tolerance Coordinate) */}
        <div
          onMouseEnter={() => setActiveCallout('tolerance')}
          onMouseLeave={() => setActiveCallout(null)}
          onClick={onInspectHeroMachine}
          className="absolute bottom-1/4 right-4 sm:right-8 md:right-16 z-20 flex flex-col items-end gap-1 cursor-pointer group/callout"
        >
          <div className="flex items-center gap-1.5 bg-[#0d0e11]/85 backdrop-blur-sm border border-[#343538] px-2 py-1 transition-colors group-hover/callout:border-[#e3e2e6]">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#e3e2e6] tracking-wider font-medium">
              AXIS PRECISION: ±0.0015 MM
            </span>
            <span className="w-1.5 h-1.5 bg-[#e3e2e6] inline-block"></span>
          </div>
          <div className="w-20 h-px bg-[#e3e2e6]/50 group-hover/callout:w-32 transition-all"></div>
          {activeCallout === 'tolerance' && (
            <div className="bg-[#121316] border border-[#e3e2e6] p-2 text-[10px] font-['JetBrains_Mono'] text-[#c4c7cc] w-48 shadow-xl mt-1 text-right">
              Thước quang thủy tinh Heidenhain LC 485, độ phân giải 1 nanomet, bù giãn nở nhiệt 16 điểm thời gian thực.
            </div>
          )}
        </div>

        {/* Bottom Banner Inspection Trigger */}
        <div className="absolute bottom-3 left-4 sm:left-8 z-20">
          <button
            onClick={onInspectHeroMachine}
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#ffb59c] bg-[#0d0e11]/80 hover:bg-[#f45b1c] hover:text-white px-3 py-1.5 border border-[#343538] transition-colors cursor-pointer"
          >
            <span>XEM CHI TIẾT KỸ THUẬT SERIES 09</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);
};
