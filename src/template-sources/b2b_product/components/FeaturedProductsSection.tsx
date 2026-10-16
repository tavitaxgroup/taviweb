import React from 'react';
import { Equipment } from '../data/equipment';

interface FeaturedProductsSectionProps {
  onSelectProductForQuote: (product: Equipment) => void;
  onOpenCadModal: (product: Equipment) => void;
  onViewProductDetail: (product: Equipment) => void;
  laserProduct: Equipment;
  roboticsProduct: Equipment;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  onSelectProductForQuote,
  onOpenCadModal,
  onViewProductDetail,
  laserProduct,
  roboticsProduct,
}) => {
  return (
    <section
      className="w-full bg-[#0d0e11] px-5 md:px-10 lg:px-16 py-16 border-t border-[#343538]/40"
      id="products"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-2">
        <div>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase block mb-1 font-semibold">
            TIÊU ĐIỂM SẢN PHẨM TRƯNG BÀY
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl lg:text-4xl text-[#e3e2e6] uppercase tracking-tight font-medium">
            Thiết bị tiêu biểu có sẵn tại kho
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#f45b1c] animate-pulse"></span>
          <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase tracking-wider">
            SHOWROOM STOCK: ACTIVE
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {/* Product 1: FL-8000 Gantry Fiber Laser with Doppelrand */}
        <div
          className="p-2 md:p-3 rounded-[2rem] bg-white/[0.03] ring-1 ring-white/10 hover:ring-[#f45b1c]/40 transition-all duration-500 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
          id="featured-laser"
        >
          <div className="rounded-[calc(2rem-0.5rem)] bg-[#17181c] p-5 md:p-8 border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Column */}
            <div className="lg:col-span-7 w-full relative group">
              <div
                onClick={() => onViewProductDetail(laserProduct)}
                className="w-full aspect-[16/10] bg-[#0d0e11] overflow-hidden rounded-2xl border border-white/10 cursor-pointer shadow-inner"
              >
                <img
                  alt="FL-8000 Gantry Fiber Laser"
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  src={laserProduct.imageUrl}
                />
              </div>
              <div className="absolute top-3 left-3 bg-[#f45b1c] text-white font-['JetBrains_Mono'] text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-md">
                FLAGSHIP SERIES
              </div>
              <div className="absolute bottom-3 right-3 font-['JetBrains_Mono'] text-[10px] bg-[#0d0e11]/85 backdrop-blur-md text-[#c4c7cc] px-2.5 py-1 rounded-md border border-white/10">
                ZOOM / BẢN VẼ CHI TIẾT
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pl-0 lg:pl-2 py-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase font-semibold">
                    GIA CÔNG KIM LOẠI TẤM
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#8b919f] font-mono">
                    REF: {laserProduct.ref}
                  </span>
                </div>
                <h3
                  onClick={() => onViewProductDetail(laserProduct)}
                  className="font-['Space_Grotesk'] text-2xl md:text-3xl text-[#e3e2e6] tracking-tight uppercase mb-3 font-medium cursor-pointer hover:text-[#f45b1c] transition-colors"
                >
                  {laserProduct.name}
                </h3>
                <p className="font-['Hanken_Grotesk'] text-sm md:text-base text-[#c4c7cc] mb-6 leading-relaxed">
                  {laserProduct.tagline}
                </p>

                {/* Specs Table */}
                <div className="flex flex-col gap-2 mb-6">
                  <div className="py-2.5 flex justify-between items-baseline bg-[#1f1f23] px-3.5 rounded-lg border-l-2 border-[#f45b1c]">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase">
                      Công suất nguồn
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold">
                      20kW IPG
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between items-baseline bg-[#1f1f23] px-3.5 rounded-lg border-l-2 border-[#343538]">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase">
                      Khổ làm việc
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold">
                      6,000 × 2,500 mm
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between items-baseline bg-[#1f1f23] px-3.5 rounded-lg border-l-2 border-[#343538]">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase">
                      Gia tốc trục
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold">
                      2.8G
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions: Button-in-Button + CAD Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectProductForQuote(laserProduct)}
                  className="group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 bg-[#f45b1c] hover:bg-[#d94e16] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-widest rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-md cursor-pointer font-medium"
                >
                  <span>Báo giá model này</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                  </span>
                </button>
                <button
                  onClick={() => onOpenCadModal(laserProduct)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 text-[#e3e2e6] font-['JetBrains_Mono'] text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer border border-white/15"
                >
                  <span className="material-symbols-outlined text-[14px]">file_download</span>
                  <span>Tải CAD/STEP</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: V-Robotics 6-Axis Articulated Arm with Doppelrand */}
        <div
          className="p-2 md:p-3 rounded-[2rem] bg-white/[0.03] ring-1 ring-white/10 hover:ring-[#f45b1c]/40 transition-all duration-500 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
          id="featured-robotics"
        >
          <div className="rounded-[calc(2rem-0.5rem)] bg-[#17181c] p-5 md:p-8 border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Column (Order 2 on lg for staggered layout) */}
            <div className="lg:col-span-7 w-full relative group order-1 lg:order-2">
              <div
                onClick={() => onViewProductDetail(roboticsProduct)}
                className="w-full aspect-[16/10] bg-[#0d0e11] overflow-hidden rounded-2xl border border-white/10 cursor-pointer shadow-inner"
              >
                <img
                  alt="V-Robotics 6-Axis Articulated Arm"
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  src={roboticsProduct.imageUrl}
                />
              </div>
              <div className="absolute top-3 left-3 bg-[#343538] text-[#e3e2e6] font-['JetBrains_Mono'] text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-md">
                ROBOTICS AUTOMATION
              </div>
              <div className="absolute bottom-3 right-3 font-['JetBrains_Mono'] text-[10px] bg-[#0d0e11]/85 backdrop-blur-md text-[#c4c7cc] px-2.5 py-1 rounded-md border border-white/10">
                ZOOM / BẢN VẼ CHI TIẾT
              </div>
            </div>

            {/* Details Column (Order 1 on lg) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pr-0 lg:pr-2 py-1 order-2 lg:order-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase font-semibold">
                    ROBOT ĐA TRỤC CÔNG NGHIỆP
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#8b919f] font-mono">
                    REF: {roboticsProduct.ref}
                  </span>
                </div>
                <h3
                  onClick={() => onViewProductDetail(roboticsProduct)}
                  className="font-['Space_Grotesk'] text-2xl md:text-3xl text-[#e3e2e6] tracking-tight uppercase mb-3 font-medium cursor-pointer hover:text-[#f45b1c] transition-colors"
                >
                  {roboticsProduct.name}
                </h3>
                <p className="font-['Hanken_Grotesk'] text-sm md:text-base text-[#c4c7cc] mb-6 leading-relaxed">
                  {roboticsProduct.tagline}
                </p>

                {/* Specs Table */}
                <div className="flex flex-col gap-2 mb-6">
                  <div className="py-2.5 flex justify-between items-baseline bg-[#1f1f23] px-3.5 rounded-lg border-l-2 border-[#f45b1c]">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase">
                      Tải trọng nâng
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold">
                      25 kg
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between items-baseline bg-[#1f1f23] px-3.5 rounded-lg border-l-2 border-[#343538]">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase">
                      Bán kính thao tác
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold">
                      1,850 mm
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between items-baseline bg-[#1f1f23] px-3.5 rounded-lg border-l-2 border-[#343538]">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase">
                      Độ lặp lại
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold">
                      ±0.02 mm
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions: Button-in-Button + CAD Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectProductForQuote(roboticsProduct)}
                  className="group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 bg-[#f45b1c] hover:bg-[#d94e16] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-widest rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-md cursor-pointer font-medium"
                >
                  <span>Báo giá model này</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                  </span>
                </button>
                <button
                  onClick={() => onOpenCadModal(roboticsProduct)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 text-[#e3e2e6] font-['JetBrains_Mono'] text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer border border-white/15"
                >
                  <span className="material-symbols-outlined text-[14px]">file_download</span>
                  <span>Tải CAD/STEP</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
