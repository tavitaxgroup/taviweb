import React, { useState } from 'react';
import { PRACTICES, type PracticeArea } from '../data/advisoryData';

interface CapabilitiesScreenProps {
  onNavigate: (path: string) => void;
  onSelectPractice?: (practiceId: string) => void;
}

export const CapabilitiesScreen: React.FC<CapabilitiesScreenProps> = ({
  onNavigate,
}) => {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>(PRACTICES[0].id);
  const activePractice = PRACTICES.find((p) => p.id === selectedPracticeId) || PRACTICES[0];

  const methodologyPhases = [
    {
      step: '01',
      title: 'Thẩm định Thể chế & Ma trận Rủi ro',
      desc: 'Rà soát toàn diện cấu trúc pháp lý, phân cấp quyền lực và rủi ro ẩn dưới bảng cân đối.',
      duration: '4 – 6 tuần',
    },
    {
      step: '02',
      title: 'Kiến trúc Giải pháp & Khung Định vị',
      desc: 'Mô hình hóa kịch bản đa chiều, xác lập ma trận thẩm quyền RACI và hệ thống chỉ số sống còn.',
      duration: '6 – 8 tuần',
    },
    {
      step: '03',
      title: 'Tái cấu trúc Chuyển dịch Thực địa',
      desc: 'Triển khai tái cấu trúc luồng vận hành, kết nối hệ thống dữ liệu thời gian thực và đàm phán vốn.',
      duration: '3 – 6 tháng',
    },
    {
      step: '04',
      title: 'Song hành Thực thi & Giám sát',
      desc: 'Tham gia trực tiếp các kỳ họp HĐQT, giải quyết các nút thắt phát sinh và bảo toàn cam kết hiệu năng.',
      duration: '6 – 12 tháng',
    },
    {
      step: '05',
      title: 'Chuyển giao Tự chủ & Nghiệm thu Độc lập',
      desc: 'Bàn giao quyền kiểm soát tự động hóa hoàn toàn, nghiệm thu cùng đơn vị kiểm toán quốc tế Big 4.',
      duration: '2 – 4 tuần',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#faf9f6]">
      {/* Top Banner / Breadcrumb */}
      <section className="w-full px-5 md:px-16 pt-12 pb-8 border-b border-[#c7c7c0]/30">
        <div className="w-full flex justify-between items-baseline pb-4">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              01 / NĂNG LỰC THỂ CHẾ
            </span>
            <span className="text-[#c7c7c0]">—</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              LĨNH VỰC CỐ VẤN CHUYÊN BIỆT
            </span>
          </div>
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium hidden sm:inline-block">
            CHUẨN MỰC THỤY SĨ · DÀNH CHO C-SUITE &amp; HĐQT
          </span>
        </div>

        <div className="max-w-4xl pt-4 space-y-4">
          <h1 className="font-display-xl text-[40px] md:text-[54px] lg:text-[62px] text-black tracking-tight leading-[1.05]">
            Kiến trúc giải pháp cho những quyết sách sinh tử.
          </h1>
          <p className="font-body-lg text-[18px] text-[#464742] font-light leading-relaxed max-w-2xl">
            Chúng tôi tiếp cận bài toán của doanh nghiệp với kỷ luật của một nhà phẫu thuật thể chế: loại bỏ tận gốc sự trì trệ vận hành và bảo vệ tính trường tồn của tổ chức trước những biến động địa chính trị.
          </p>
        </div>
      </section>

      {/* 4 Practices Interactive Tabs */}
      <section className="w-full px-5 md:px-16 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-[#c7c7c0]/30">
          {PRACTICES.map((practice) => {
            const isSelected = practice.id === selectedPracticeId;
            return (
              <button
                key={practice.id}
                onClick={() => setSelectedPracticeId(practice.id)}
                className={`text-left p-4 transition-all border cursor-pointer ${
                  isSelected
                    ? 'border-black bg-black text-white shadow-sm'
                    : 'border-[#c7c7c0]/40 bg-[#f4f3f0]/60 hover:bg-[#efeeeb] text-[#1a1c1a]'
                }`}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span
                    className={`font-label-sm text-[11px] uppercase tracking-widest ${
                      isSelected ? 'text-[#c9c6c4]' : 'text-[#5a614f]'
                    }`}
                  >
                    {practice.code} / {practice.sectionCode}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  )}
                </div>
                <h3 className="font-headline-sm text-[16px] leading-tight mb-1">
                  {practice.titleVi}
                </h3>
                <p
                  className={`font-label-sm text-[11px] ${
                    isSelected ? 'text-[#858382]' : 'text-[#464742]'
                  }`}
                >
                  {practice.titleEn}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Practice Detail Pane */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-10">
          {/* Left Summary & Focus Areas (7 cols) */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f]">
                {activePractice.sectionCode} // PHẠM VI CAN THIỆP THỂ CHẾ
              </span>
              <h2 className="font-display-lg text-[32px] md:text-[40px] text-black">
                {activePractice.titleVi}
              </h2>
              <p className="font-body-lg text-[17px] text-[#464742] font-light leading-relaxed">
                {activePractice.description}
              </p>
            </div>

            {/* Focus areas list */}
            <div className="pt-4 space-y-3">
              <h4 className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
                Trọng tâm can thiệp chiến lược:
              </h4>
              <div className="grid grid-cols-1 gap-2 border-t border-[#c7c7c0]/30 pt-3">
                {activePractice.focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 py-2 border-b border-[#c7c7c0]/20"
                  >
                    <span className="font-label-sm text-[11px] text-[#5a614f] shrink-0 pt-0.5">
                      0{index + 1}.
                    </span>
                    <p className="font-body-md text-[14px] text-[#1a1c1a] font-normal leading-relaxed">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('lien-he')}
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 font-label-md text-[11px] uppercase tracking-wider hover:bg-[#5a614f] transition-colors cursor-pointer"
              >
                <span>Yêu cầu phiên thẩm định sơ bộ chuyên môn này</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Right Analytical Specs & Precedent (5 cols) */}
          <div className="md:col-span-5 bg-[#f4f3f0] p-6 md:p-8 border border-[#c7c7c0]/40 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="pb-4 border-b border-[#c7c7c0]/40">
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#5a614f] block mb-1">
                  CHỈ SỐ HIỆU QUẢ CAM KẾT (BENCHMARK)
                </span>
                <p className="font-headline-sm text-[17px] text-black font-medium leading-snug">
                  {activePractice.metricsHighlight}
                </p>
              </div>

              <div>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#464742] block mb-1">
                  KHUNG PHƯƠNG PHÁP LUẬN
                </span>
                <p className="font-body-md text-[14px] text-[#1a1c1a] font-light">
                  {activePractice.methodology}
                </p>
              </div>

              <div>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#464742] block mb-1">
                  ĐẶC TÍNH NHIỆM KỲ ĐỒNG HÀNH
                </span>
                <p className="font-body-md text-[14px] text-[#1a1c1a] font-light">
                  {activePractice.typicalMandate}
                </p>
              </div>

              <div className="pt-2 border-t border-[#c7c7c0]/30">
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#5a614f] block mb-1">
                  DỰ ÁN TIÊU BIỂU ĐÃ HOÀN TẤT
                </span>
                <p className="font-body-md text-[14px] text-black font-medium">
                  {activePractice.samplePrecedent}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#c7c7c0]/40 flex justify-between items-center text-[#5a614f]">
              <span className="font-label-sm text-[10px] uppercase tracking-widest">
                ĐỘC LẬP TƯ VẤN · BẢO MẬT CẤP ĐỘ I
              </span>
              <button
                onClick={() => onNavigate('du-an')}
                className="font-label-sm text-[11px] uppercase tracking-wider text-black underline underline-offset-4 hover:text-[#5a614f] cursor-pointer"
              >
                Xem Case Studies →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SWISS 5-PHASE METHODOLOGY FRAMEWORK */}
      <section className="w-full px-5 md:px-16 py-12 border-t border-[#c7c7c0]/30 bg-[#efeeeb]/40">
        <div className="w-full flex justify-between items-baseline pb-6 border-b border-[#c7c7c0]/30">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              QUY TRÌNH THỰC THI 5 BƯỚC
            </span>
            <span className="text-[#c7c7c0]">—</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              SWISS INSTITUTIONAL PROTOCOL
            </span>
          </div>
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
            KỶ LUẬT THỰC THI THỤY SĨ
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-8">
          {methodologyPhases.map((phase) => (
            <div
              key={phase.step}
              className="bg-[#faf9f6] p-5 border border-[#c7c7c0]/40 space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="font-display-xl text-[32px] text-[#5a614f] block leading-none mb-2">
                  {phase.step}
                </span>
                <h4 className="font-headline-sm text-[16px] text-black font-normal leading-snug mb-2">
                  {phase.title}
                </h4>
                <p className="font-body-sm text-[13px] text-[#464742] font-light leading-relaxed">
                  {phase.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-[#c7c7c0]/20 flex justify-between items-center">
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#777871]">
                  Thời lượng:
                </span>
                <span className="font-label-sm text-[11px] text-[#1a1c1a] font-medium">
                  {phase.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
