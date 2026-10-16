import React from 'react';
import { ServiceItem } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#ffffff] border-2 border-[#1c1b1b] shadow-[6px_6px_0px_#1c1b1b] p-6 lg:p-8 text-[#1c1b1b]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e5e2e1] mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono-code text-xs px-2 py-0.5 bg-[#0038ff] text-white font-bold">
              {service.number}
            </span>
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#ac2e00] font-bold">
              [ HỒ SƠ DỊCH VỤ ĐẶC QUYỀN ]
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#444657] hover:text-[#1c1b1b] hover:bg-[#f0edec] transition-colors"
            aria-label="Đóng chi tiết dịch vụ"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Hero image and title */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
          <div className="md:col-span-5 aspect-[4/3] overflow-hidden bg-[#f0edec] border border-[#e5e2e1]">
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <h2
              id="service-modal-title"
              className="font-syne text-2xl font-bold uppercase tracking-tight mb-2 leading-tight"
            >
              {service.title}
            </h2>
            <p className="font-body text-sm text-[#44423c] mb-4">
              {service.description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f6f3f2] border border-[#c4c5da] text-xs font-mono-code">
              <span className="material-symbols-outlined text-sm text-[#0038ff]">schedule</span>
              <span>Thời gian thực hiện tiêu chuẩn: <strong>{service.details.duration}</strong></span>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 border-t border-[#e5e2e1] pt-6">
          {/* Scope of Work */}
          <div>
            <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-[#ac2e00] mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">checklist</span>
              Phạm Vi Thực Hiện Chi Tiết
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.details.scope.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#f6f3f2] border-l-2 border-[#0038ff] text-xs text-[#1c1b1b] flex items-start gap-2"
                >
                  <span className="font-mono-code text-[10px] text-[#0038ff] mt-0.5">0{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-[#0038ff] mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">inventory_2</span>
              Hồ Sơ Bàn Giao Tiêu Chuẩn
            </h4>
            <ul className="space-y-2">
              {service.details.deliverables.map((deliv, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs font-body text-[#1c1b1b]"
                >
                  <span className="material-symbols-outlined text-sm text-[#ac2e00]">check_circle</span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal for */}
          <div className="p-3 bg-[#dee0ff]/30 border border-[#bbc3ff] text-xs font-body">
            <strong className="text-[#0028c2]">Phù hợp nhất cho: </strong>
            <span>{service.details.idealFor}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-4 border-t border-[#e5e2e1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 border border-[#1c1b1b] text-xs font-mono-code uppercase hover:bg-[#f0edec]"
          >
            Quay lại
          </button>
          <button
            onClick={() => {
              onBookService(service.title);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#0038ff] text-white hover:bg-[#ac2e00] text-xs font-mono-code uppercase font-semibold shadow-[3px_3px_0px_#1c1b1b] transition-all"
          >
            Đặt Lịch Tư Vấn Hạng Mục Này →
          </button>
        </div>
      </div>
    </div>
  );
};
