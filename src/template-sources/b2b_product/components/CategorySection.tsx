import React from 'react';

interface CategorySectionProps {
  onSelectCategory: (categoryId: 'robotics' | 'motion' | 'laser' | 'all') => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="w-full bg-[#121316] px-5 md:px-10 lg:px-16 py-16 border-t border-[#343538]/40" id="categories">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-2">
        <div>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase block mb-1 font-semibold">
            DANH MỤC THIẾT BỊ PHÂN PHỐI
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl lg:text-4xl text-[#e3e2e6] uppercase tracking-tight font-medium">
            Hệ thống phân cấp thiết bị
          </h2>
        </div>
        <span className="font-['JetBrains_Mono'] text-xs text-[#c1c6d6] tracking-wider">
          3 PHÂN HỆ NÒNG CỐT // 54 CẤU HÌNH
        </span>
      </div>

      {/* Asymmetrical Exhibition Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Category 1: TỰ ĐỘNG HÓA & ROBOTICS (Tall Vertical Pillar) */}
        <div
          onClick={() => onSelectCategory('robotics')}
          className="md:col-span-5 flex flex-col justify-between bg-[#1b1b1f] group cursor-pointer border border-[#343538]/50 hover:border-[#f45b1c] transition-colors"
        >
          <div className="p-4 flex justify-between items-start z-10 border-b border-[#343538]/40">
            <div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] block font-medium">
                01 / TỰ ĐỘNG HÓA &amp; ROBOTICS
              </span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#c4c7cc] tracking-widest mt-1 block">
                18 CẤU HÌNH
              </span>
            </div>
            <span className="material-symbols-outlined text-[#c4c7cc] text-base group-hover:text-[#f45b1c] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              north_east
            </span>
          </div>
          <div className="w-full aspect-[3/4] overflow-hidden bg-[#0d0e11] relative">
            <img
              alt="High-precision multi-axis industrial robotic arm manipulator head"
              className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
              src="/images/robotics-arm.jpg"
            />
            <div className="absolute inset-0 bg-[#0d0e11]/20 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
          <div className="p-4 bg-[#1f1f23] flex items-center justify-between border-t border-[#343538]/40">
            <h3 className="font-['Space_Grotesk'] text-base md:text-lg text-[#e3e2e6] uppercase tracking-wide font-medium">
              Cánh tay robot &amp; Cụm gắp tự động
            </h3>
            <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Xem danh mục →
            </span>
          </div>
        </div>

        {/* Category 2 & 3: Staggered Architecture Column */}
        <div className="md:col-span-7 flex flex-col justify-between gap-6">
          {/* Category 2: TRUYỀN ĐỘNG & ĐỘNG CƠ SERVO */}
          <div
            onClick={() => onSelectCategory('motion')}
            className="flex flex-col bg-[#1b1b1f] group cursor-pointer flex-1 justify-between border border-[#343538]/50 hover:border-[#f45b1c] transition-colors"
          >
            <div className="p-4 flex justify-between items-start border-b border-[#343538]/40">
              <div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] block font-medium group-hover:text-[#f45b1c] transition-colors">
                  02 / TRUYỀN ĐỘNG &amp; ĐỘNG CƠ SERVO
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c4c7cc] tracking-widest mt-1 block">
                  24 HỆ THỐNG
                </span>
              </div>
              <span className="material-symbols-outlined text-[#c4c7cc] text-base group-hover:text-[#f45b1c] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                north_east
              </span>
            </div>
            <div className="w-full aspect-[16/9] overflow-hidden bg-[#0d0e11] relative">
              <img
                alt="Industrial high-torque servo motor and heavy-duty planetary gearbox assembly"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                src="/images/planetary-servo.jpg"
              />
              <div className="absolute inset-0 bg-[#0d0e11]/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-4 bg-[#1f1f23] flex items-center justify-between border-t border-[#343538]/40">
              <h3 className="font-['Space_Grotesk'] text-base md:text-lg text-[#e3e2e6] uppercase tracking-wide font-medium">
                Truyền động chính xác &amp; Hộp số hành tinh
              </h3>
              <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Xem danh mục →
              </span>
            </div>
          </div>

          {/* Category 3: HỆ THỐNG GIA CÔNG TẤM & LASER */}
          <div
            onClick={() => onSelectCategory('laser')}
            className="flex flex-col bg-[#1b1b1f] group cursor-pointer flex-1 justify-between border border-[#343538]/50 hover:border-[#f45b1c] transition-colors"
          >
            <div className="p-4 flex justify-between items-start border-b border-[#343538]/40">
              <div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#c4c7cc] block font-medium group-hover:text-[#f45b1c] transition-colors">
                  03 / HỆ THỐNG GIA CÔNG TẤM &amp; LASER
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#c4c7cc] tracking-widest mt-1 block">
                  12 MODEL
                </span>
              </div>
              <span className="material-symbols-outlined text-[#c4c7cc] text-base group-hover:text-[#f45b1c] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                north_east
              </span>
            </div>
            <div className="w-full aspect-[16/9] overflow-hidden bg-[#0d0e11] relative">
              <img
                alt="Massive industrial fiber laser cutting workstation or precision automated production cell"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                src="/images/fiber-laser.jpg"
              />
              <div className="absolute inset-0 bg-[#0d0e11]/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-4 bg-[#1f1f23] flex items-center justify-between border-t border-[#343538]/40">
              <h3 className="font-['Space_Grotesk'] text-base md:text-lg text-[#e3e2e6] uppercase tracking-wide font-medium">
                Máy cắt laser sợi quang khổ lớn
              </h3>
              <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Xem danh mục →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
