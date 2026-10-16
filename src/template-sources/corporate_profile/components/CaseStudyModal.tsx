import React from 'react';
import { type CaseStudy } from '../data/advisoryData';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onNavigateContact,
}) => {
  if (!study) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#faf9f6] border border-black flex flex-col overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#c7c7c0]/40 flex justify-between items-center bg-[#f4f3f0]">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-semibold">
              {study.archivalRecord}
            </span>
            <span className="text-[#c7c7c0]">|</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#1a1c1a]">
              QUY MÔ: {study.scale}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#464742] hover:text-black cursor-pointer border border-transparent hover:border-black"
            aria-label="Đóng cửa sổ hồ sơ"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8">
          {/* Hero Banner with Title */}
          <div className="space-y-3 border-b border-[#c7c7c0]/30 pb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5a614f]"></span>
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f]">
                {study.categoryTag} · {study.location}
              </span>
            </div>
            <h2 id="case-study-title" className="font-display-xl text-[28px] md:text-[38px] text-black leading-tight">
              {study.title}
            </h2>
            <p className="font-body-lg text-[16px] text-[#464742] font-light leading-relaxed">
              {study.subtitle}
            </p>
          </div>

          {/* Featured Monograph Image */}
          <div className="relative aspect-[16/9] w-full bg-[#efeeeb] overflow-hidden border border-[#c7c7c0]/40">
            <img
              src={study.imageUrl}
              alt={study.title}
              className="w-full h-full object-cover grayscale-[10%]"
            />
            <div className="absolute bottom-0 right-0 bg-[#faf9f6]/95 px-3 py-1 font-label-sm text-[10px] uppercase tracking-widest text-[#1a1c1a]">
              HỒ SƠ KHẢO SÁT THỰC ĐỊA // {study.year}
            </div>
          </div>

          {/* 3-Column Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 bg-[#f4f3f0] border-l-2 border-[#777871] space-y-2">
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#464742] font-semibold block">
                01 / THÁCH THỨC CỐT LÕI
              </span>
              <p className="font-body-sm text-[13px] text-[#1a1c1a] leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="p-4 bg-[#f4f3f0] border-l-2 border-black space-y-2">
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-black font-semibold block">
                02 / CAN THIỆP THỂ CHẾ
              </span>
              <p className="font-body-sm text-[13px] text-[#1a1c1a] leading-relaxed">
                {study.intervention}
              </p>
            </div>

            <div className="p-4 bg-[#e9e8e5] border-l-2 border-[#5a614f] space-y-2">
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#5a614f] font-semibold block">
                03 / HIỆU QUẢ ĐỊNH LƯỢNG
              </span>
              <p className="font-body-sm text-[13px] text-black font-medium leading-relaxed">
                {study.quantitativeImpact}
              </p>
              <span className="font-label-sm text-[10px] text-[#464742] block pt-1">
                [{study.auditSignOff}]
              </span>
            </div>
          </div>

          {/* Key Deliverables & Timeline */}
          <div className="space-y-4 pt-2">
            <h4 className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              Các sản phẩm thể chế bàn giao đã nghiệm thu:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {study.keyDeliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-white border border-[#c7c7c0]/30"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#5a614f] shrink-0 mt-0.5">
                    check_box
                  </span>
                  <span className="font-body-sm text-[13px] text-[#1a1c1a] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Partner & Mandate Specs */}
          <div className="pt-4 border-t border-[#c7c7c0]/30 flex flex-wrap justify-between items-center gap-4 text-[12px] font-label-sm text-[#464742]">
            <div>
              <span>ĐỐI TÁC DẪN DẮT: </span>
              <strong className="text-black uppercase">{study.leadPartner}</strong>
            </div>
            <div>
              <span>THỜI GIAN TRIỂN KHAI: </span>
              <strong className="text-black uppercase">{study.timelineMonths} THÁNG</strong>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-[#f4f3f0] border-t border-[#c7c7c0]/40 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5a614f]"></span>
            <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#464742]">
              LƯU TRỮ TẠI KHO HỒ SƠ THỤY SĨ // ID: {study.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#c7c7c0] text-black font-label-md text-[11px] uppercase tracking-wider hover:border-black cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white font-label-md text-[11px] uppercase tracking-wider hover:bg-[#5a614f] transition-colors cursor-pointer"
            >
              <span>Yêu cầu phiên trình bày bảo mật</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
