import React, { useState, useMemo } from 'react';
import { CASE_STUDIES, type CaseStudy } from '../data/advisoryData';
import { filterProjectsBySector } from '../utils/advisory';

interface ProjectsScreenProps {
  onNavigate: (path: string) => void;
  onOpenCaseStudy: (study: CaseStudy) => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({
  onNavigate,
  onOpenCaseStudy,
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sectors = [
    { id: 'all', label: 'Tất cả lĩnh vực' },
    { id: 'energy', label: 'Năng lượng & Tài chính' },
    { id: 'logistics', label: 'Logistics & Cảng biển' },
    { id: 'governance', label: 'Quản trị Thể chế Gia tộc' },
    { id: 'private-wealth', label: 'Tài chính Tư nhân' },
    { id: 'capital', label: 'Tái cấu trúc Vốn & Nợ' },
  ];

  // Filter projects by sector and search query
  const filteredStudies = useMemo(() => {
    // Adapter for filterProjectsBySector pure function
    let list = filterProjectsBySector(CASE_STUDIES as any, selectedSector) as unknown as CaseStudy[];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.challenge.toLowerCase().includes(q) ||
          item.scale.toLowerCase().includes(q) ||
          item.leadPartner.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedSector, searchQuery]);

  return (
    <div className="flex flex-col w-full bg-[#faf9f6]">
      {/* Folio Header */}
      <section className="w-full px-5 md:px-16 pt-12 pb-8 border-b border-[#c7c7c0]/30">
        <div className="w-full flex justify-between items-baseline pb-4">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              02 / DỰ ÁN &amp; HỒ SƠ THỰC THI
            </span>
            <span className="text-[#c7c7c0]">—</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              CASE STUDY ARCHIVE // 2024–2025
            </span>
          </div>
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium hidden sm:inline-block">
            LƯU HÀNH BẢO MẬT · BIÊN BẢN NGHIỆM THU ĐÃ XÁC THỰC
          </span>
        </div>

        <div className="max-w-4xl pt-4 space-y-4">
          <h1 className="font-display-xl text-[40px] md:text-[54px] lg:text-[62px] text-black tracking-tight leading-[1.05]">
            Những thương vụ định hình thể chế.
          </h1>
          <p className="font-body-lg text-[18px] text-[#464742] font-light leading-relaxed max-w-2xl">
            Tuyển tập các can thiệp chiến lược, tái cấu trúc vận hành và kiến trúc vốn quy mô lớn được dẫn dắt bởi Monogram Strategic Advisory tại Châu Á và Châu Âu.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="w-full px-5 md:px-16 py-6 border-b border-[#c7c7c0]/30 bg-[#f4f3f0]/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Sector Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {sectors.map((sec) => {
              const isSelected = selectedSector === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSector(sec.id)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`px-3 py-1.5 font-label-md text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-black text-white'
                      : 'bg-[#efeeeb] text-[#464742] hover:bg-[#e3e2e0] hover:text-black'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo từ khóa, thành phố, quy mô..."
              aria-label="Tìm kiếm dự án"
              className="w-full bg-[#faf9f6] border border-[#c7c7c0]/60 px-3 py-2 pl-9 font-body-sm text-[13px] text-black placeholder:text-[#777871] focus:outline-none focus:border-black"
            />
            <span className="material-symbols-outlined text-[18px] text-[#777871] absolute left-2.5 top-2.5 pointer-events-none">
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-[#777871] hover:text-black cursor-pointer"
                aria-label="Xóa từ khóa tìm kiếm"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full px-5 md:px-16 py-10">
        {filteredStudies.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-[#f4f3f0] border border-[#c7c7c0]/30">
            <span className="material-symbols-outlined text-[36px] text-[#777871]">
              folder_off
            </span>
            <p className="font-headline-sm text-[18px] text-black">
              Không tìm thấy hồ sơ dự án phù hợp
            </p>
            <p className="font-body-sm text-[13px] text-[#464742]">
              Vui lòng thử lại với từ khóa khác hoặc bỏ chọn bộ lọc ngành.
            </p>
            <button
              onClick={() => {
                setSelectedSector('all');
                setSearchQuery('');
              }}
              className="mt-2 inline-block px-4 py-2 bg-black text-white font-label-md text-[11px] uppercase tracking-wider"
            >
              Xem tất cả hồ sơ
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <article
                key={study.id}
                className="group bg-[#faf9f6] border border-[#c7c7c0]/40 flex flex-col justify-between hover:border-black transition-colors duration-200"
              >
                <div>
                  {/* Image container */}
                  <div
                    onClick={() => onOpenCaseStudy(study)}
                    className="relative aspect-[16/10] w-full bg-[#efeeeb] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%]"
                      loading="lazy"
                    />
                    <div className="absolute top-0 left-0 bg-[#faf9f6]/95 px-3 py-1 font-label-sm text-[10px] uppercase tracking-widest text-black border-b border-r border-[#c7c7c0]/30">
                      {study.archivalRecord}
                    </div>
                    <div className="absolute bottom-0 right-0 bg-[#faf9f6]/95 px-3 py-1 font-label-sm text-[10px] uppercase tracking-widest text-[#1a1c1a] border-t border-l border-[#c7c7c0]/30 font-medium">
                      {study.location} · {study.year}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                        {study.sectorLabel}
                      </span>
                      <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold bg-[#efeeeb] px-2 py-0.5">
                        {study.scale}
                      </span>
                    </div>

                    <h2
                      onClick={() => onOpenCaseStudy(study)}
                      className="font-headline-sm text-[21px] text-black font-normal hover:text-[#5a614f] transition-colors cursor-pointer leading-snug"
                    >
                      {study.title}
                    </h2>

                    <p className="font-body-md text-[14px] text-[#464742] font-light leading-relaxed line-clamp-2">
                      {study.subtitle}
                    </p>

                    <div className="pt-3 border-t border-[#c7c7c0]/30 space-y-2">
                      <div>
                        <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#777871] block">
                          HIỆU QUẢ ĐỊNH LƯỢNG
                        </span>
                        <p className="font-body-sm text-[13px] text-black font-medium">
                          {study.quantitativeImpact}
                        </p>
                      </div>
                      <div>
                        <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#777871] block">
                          ĐƠN VỊ KIỂM ĐỊNH ĐỘC LẬP
                        </span>
                        <p className="font-label-sm text-[11px] text-[#5a614f]">
                          {study.auditSignOff}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer of card */}
                <div className="px-6 py-4 bg-[#f4f3f0] border-t border-[#c7c7c0]/30 flex justify-between items-center">
                  <span className="font-label-sm text-[11px] text-[#464742]">
                    Chủ trì: {study.leadPartner}
                  </span>
                  <button
                    onClick={() => onOpenCaseStudy(study)}
                    className="inline-flex items-center gap-1.5 font-label-md text-[11px] uppercase tracking-wider text-black group-hover:text-[#5a614f] cursor-pointer"
                  >
                    <span>Chi tiết hồ sơ</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Folio Bottom CTA */}
      <section className="w-full px-5 md:px-16 py-12 border-t border-[#c7c7c0]/30 bg-[#f4f3f0]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f]">
            YÊU CẦU BÁO CÁO TOÀN VĂN
          </span>
          <h3 className="font-display-lg text-[32px] md:text-[40px] text-black">
            Cần tham chiếu các case study tương tự trong ngành của quý vị?
          </h3>
          <p className="font-body-md text-[15px] text-[#464742] max-w-xl mx-auto font-light leading-relaxed">
            Do nguyên tắc bảo mật thông tin cấp độ I của khách hàng, nhiều hồ sơ giải pháp chỉ được trình bày trực tiếp trong phiên điều trần sơ bộ kín.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('lien-he')}
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-3.5 font-label-md text-[12px] uppercase tracking-wider hover:bg-[#5a614f] transition-colors cursor-pointer"
            >
              <span>Đăng ký phiên trình bày hồ sơ bảo mật</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
