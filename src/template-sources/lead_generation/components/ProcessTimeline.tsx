import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="w-full px-5 lg:px-16 py-12 lg:py-24 bg-[#f6f3f2]" id="quy-trinh-5-buoc">
      <div className="max-w-4xl mb-12">
        <span className="font-mono-code text-[11px] uppercase text-[#ac2e00] tracking-widest block mb-1 font-bold">
          [ QUY TRÌNH THỰC THI 30 NGÀY ]
        </span>
        <h2 className="font-syne text-3xl lg:text-4xl text-[#1c1b1b] tracking-tight uppercase font-bold mb-3">
          Chuẩn Mực Vận Hành Tuyệt Đối Minh Bạch
        </h2>
        <p className="font-body text-base text-[#444657] max-w-2xl">
          Từng cột mốc được kiểm soát nghiêm ngặt với hệ thống báo cáo nhật ký số hàng ngày, loại bỏ 100% rủi ro trễ hạn hay đội vốn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className="bg-white border-t-4 border-[#0038ff] p-5 border-x border-b border-[#e5e2e1] flex flex-col justify-between shadow-xs hover:shadow-[3px_3px_0px_#1c1b1b] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-syne text-2xl font-black text-[#0038ff]">
                  {step.step}
                </span>
                <span className="font-mono-code text-[10px] bg-[#f6f3f2] px-2 py-0.5 border border-[#c4c5da] text-[#ac2e00] font-bold">
                  {step.duration}
                </span>
              </div>
              <h3 className="font-syne text-sm uppercase font-bold text-[#1c1b1b] mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="font-body text-xs text-[#44423c] leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f0edec] font-mono-code text-[10px] text-[#747689] flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-[#0038ff]">done_all</span>
              <span>Cột mốc {idx + 1}/5</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
