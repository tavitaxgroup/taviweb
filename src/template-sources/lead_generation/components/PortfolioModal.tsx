import React from 'react';
import { PortfolioProject } from '../data/content';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquireSimilar: (projectName: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 border-[#1c1b1b] shadow-[6px_6px_0px_#1c1b1b] p-6 lg:p-8 text-[#1c1b1b]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#e5e2e1] mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#ac2e00] font-bold">
              [ HỒ SƠ KIẾN TRÚC THỰC HIỆN ]
            </span>
            <span className="font-mono-code text-[10px] text-[#747689]">{project.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#444657] hover:text-[#1c1b1b] hover:bg-[#f0edec] transition-colors"
            aria-label="Đóng hồ sơ dự án"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Large Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e5e2e1] mb-6 border border-[#c4c5da]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-[#1c1b1b]/80 backdrop-blur-xs text-white px-3 py-1 font-mono-code text-xs">
            {project.coordinates}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          <div className="md:col-span-8">
            <h2
              id="portfolio-modal-title"
              className="font-syne text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-3"
            >
              {project.title}
            </h2>
            <p className="font-body text-sm text-[#44423c] leading-relaxed mb-4">
              {project.description}
            </p>

            <h4 className="font-mono-code text-xs uppercase text-[#0038ff] font-bold mb-2">
              Vật liệu chủ đạo tuyển chọn:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((mat, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[#f6f3f2] border border-[#c4c5da] font-mono-code text-xs text-[#1c1b1b]"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 bg-[#f6f3f2] p-4 border border-[#e5e2e1] space-y-3 font-mono-code text-xs">
            <div>
              <span className="text-[#747689] block">Địa điểm:</span>
              <strong className="text-[#1c1b1b]">{project.location}</strong>
            </div>
            <div>
              <span className="text-[#747689] block">Diện tích sàn:</span>
              <strong className="text-[#1c1b1b]">{project.area}</strong>
            </div>
            <div>
              <span className="text-[#747689] block">Chủ đầu tư:</span>
              <strong className="text-[#1c1b1b]">{project.client}</strong>
            </div>
            <div>
              <span className="text-[#747689] block">Trạng thái:</span>
              <strong className="text-[#0028c2]">Đã hoàn thiện & Bàn giao</strong>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#e5e2e1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 border border-[#1c1b1b] text-xs font-mono-code uppercase hover:bg-[#f0edec]"
          >
            Đóng
          </button>
          <button
            onClick={() => {
              onInquireSimilar(project.title);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#0038ff] text-white hover:bg-[#ac2e00] text-xs font-mono-code uppercase font-semibold shadow-[3px_3px_0px_#1c1b1b] transition-all"
          >
            Tư Vấn Thiết Kế Theo Phong Cách Này →
          </button>
        </div>
      </div>
    </div>
  );
};
