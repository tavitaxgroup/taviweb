import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/content';

interface PortfolioGalleryProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'office' | 'showroom' | 'residence'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.typology === activeFilter);

  return (
    <section className="w-full px-5 lg:px-16 py-12 lg:py-24 bg-[#ffffff]" id="du-an">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e5e2e1]">
        <div>
          <span className="font-mono-code text-[11px] uppercase text-[#ac2e00] tracking-widest block mb-1 font-bold">
            [ HỒ SƠ DỰ ÁN THỰC THI ]
          </span>
          <h2 className="font-syne text-3xl lg:text-4xl text-[#1c1b1b] tracking-tight uppercase font-bold">
            Bộ Sưu Tập Không Gian Độc Bản
          </h2>
        </div>
        <span className="font-mono-code text-xs text-[#44423c] mt-2 md:mt-0">
          TUYỂN TẬP CÔNG TRÌNH TIÊU BIỂU 2024 — 2025
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: 'all', label: 'Tất cả dự án' },
          { id: 'office', label: 'Văn phòng trụ sở' },
          { id: 'showroom', label: 'Showroom & Flagship' },
          { id: 'residence', label: 'Biệt thự & Penthouse' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-4 py-2 font-mono-code text-xs uppercase transition-all cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-[#1c1b1b] text-white font-bold shadow-[2px_2px_0px_#0038ff]'
                : 'bg-[#f6f3f2] text-[#444657] hover:bg-[#e5e2e1]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer border border-[#e5e2e1] bg-[#fcf9f8] p-4 lg:p-6 transition-all hover:shadow-[4px_4px_0px_#1c1b1b] hover:border-[#1c1b1b]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#e5e2e1] mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#1c1b1b] text-white px-2.5 py-1 font-mono-code text-[10px] uppercase">
                {project.typology}
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 font-mono-code text-[10px] text-[#1c1b1b]">
                {project.area} — {project.year}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono-code text-[#ac2e00]">
                <span>{project.location}</span>
                <span>{project.coordinates}</span>
              </div>

              <h3 className="font-syne text-xl font-bold uppercase text-[#1c1b1b] group-hover:text-[#0038ff] transition-colors">
                {project.title}
              </h3>

              <p className="font-body text-xs text-[#44423c] line-clamp-2">
                {project.description}
              </p>

              <div className="pt-3 border-t border-[#e5e2e1] flex items-center justify-between">
                <span className="font-mono-code text-[11px] text-[#747689]">
                  Chủ đầu tư: <strong>{project.client}</strong>
                </span>
                <span className="font-mono-code text-xs text-[#0038ff] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Khám phá chi tiết →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
