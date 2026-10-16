import React from 'react';
import { CASE_STUDIES, type CaseStudy } from '../data/advisoryData';

interface HomeScreenProps {
  onNavigate: (path: string) => void;
  onOpenCaseStudy: (study: CaseStudy) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenCaseStudy,
}) => {
  const case04 = CASE_STUDIES.find((c) => c.id === 'case-04') || CASE_STUDIES[0];
  const case01 = CASE_STUDIES.find((c) => c.id === 'case-01') || CASE_STUDIES[1];
  const case02 = CASE_STUDIES.find((c) => c.id === 'case-02') || CASE_STUDIES[2];
  const case03 = CASE_STUDIES.find((c) => c.id === 'case-03') || CASE_STUDIES[3];

  return (
    <div className="flex flex-col w-full bg-[#faf9f6]">
      {/* SECTION 1: HERO VIEWPORT (FOLIO MONOGRAPH 2025) */}
      <section className="w-full min-h-[100dvh] flex flex-col justify-between px-5 md:px-16 pt-24 md:pt-28 pb-10">
        {/* Top Folio Header Bar */}
        <div className="w-full flex justify-between items-baseline pb-4 border-b border-[#c7c7c0]/30">
          <div className="flex items-center gap-4">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              01 / Khởi Nguyên Chiến Lược
            </span>
            <span className="hidden md:inline-block text-[#c7c7c0]">—</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742] hidden md:inline-block">
              Tập san Cố vấn Thể chế &amp; Tái cấu trúc Vận hành
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-[11px] tracking-widest text-[#464742] font-mono">
              47°22'N 8°32'E · 21°01'N 105°51'E
            </span>
            <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] text-[#5a614f] font-semibold px-2.5 py-0.5 rounded-full bg-black/5 ring-1 ring-black/10 hidden md:inline-block">
              FOLIO EDITION 2025
            </span>
          </div>
        </div>

        {/* Hero 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end my-auto py-10">
          {/* Left Column: Editorial Statement (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-end space-y-6 order-2 md:order-1">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-black/[0.04] ring-1 ring-black/10 text-[10px] uppercase tracking-[0.2em] font-medium text-[#5a614f]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5a614f] animate-pulse"></span>
                <span>Khuôn khổ tư vấn độc lập</span>
              </div>
              <h1 className="font-display-xl text-[44px] md:text-[56px] lg:text-[66px] text-black tracking-tight leading-[1.02]">
                Năng lực tạo nên khác biệt.
              </h1>
            </div>

            <div className="space-y-6 max-w-md">
              <p className="font-body-lg text-[17px] md:text-[18px] text-[#464742] font-light leading-relaxed">
                Giải pháp chuyên sâu cho những quyết sách mang tính bước ngoặt và bảo vệ giá trị thể chế dài hạn.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                {/* Button-in-Button Primary Action */}
                <button
                  onClick={() => onNavigate('lien-he')}
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-black text-white hover:bg-[#303429] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-sm cursor-pointer"
                >
                  <span className="font-label-md text-[11px] uppercase tracking-[0.15em] font-medium">Trao đổi cùng chúng tôi</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </button>

                {/* Secondary Action Pill */}
                <button
                  onClick={() => onNavigate('du-an')}
                  className="inline-flex items-center px-5 py-2.5 rounded-full border border-black/15 text-[#32362b] hover:border-black hover:text-black font-label-md text-[11px] uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer hover:bg-black/5"
                >
                  Khám phá hồ sơ
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Monograph Photo with Doppelrand (Double-Bezel Architecture) */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="p-2 md:p-3 rounded-[2rem] bg-black/[0.03] ring-1 ring-black/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)]">
              <div className="relative w-full aspect-[16/10] bg-[#efeeeb] overflow-hidden rounded-[calc(2rem-0.5rem)] border border-black/5">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl73rKkloXxr9hY5KzH2VMSRpMLsoNGSPLrvTJPfY26mbaV_gj4r3789YAh3DqNokio_kKr0sbzn82hvWHl5i_bGdjQraNBxscce8be6KN8zJRHMEkqE8wZAZZKI64KFb4dEUXtL1JbdvhcwivTSkjwSG5bXtoHy5IyOAjdf3MBh8DVUc3SHjWdK-wBL2orPc9IDDamWQ1oLQ8tUcCK1pO-ElDK0int5y6Ff7UAvlxdNZFjQRAoocqkQ"
                  alt="Phòng họp điều hành cao cấp tư vấn chiến lược Monogram Advisory"
                  className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  loading="eager"
                />
                <div className="absolute top-3 left-3 bg-[#faf9f6]/95 px-3.5 py-1.5 backdrop-blur-md border border-black/10 rounded-full shadow-sm">
                  <span className="font-label-sm text-[10px] uppercase tracking-widest text-black font-semibold">
                    ARCHIVAL RECORD // 2024-25
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#faf9f6]/95 px-3.5 py-1.5 backdrop-blur-md border border-black/10 rounded-full shadow-sm">
                  <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#1a1c1a] font-medium">
                    CHIẾN LƯỢC TỔNG THỂ · ĐIỀU HÀNH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Footer Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-[#c7c7c0]/30 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5a614f]"></span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              Bản quyền lưu hành nội bộ — Thẩm định bảo mật cấp I
            </span>
          </div>
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
            Tập quán Tư vấn 2025 · Zurich &amp; Hanoi
          </span>
        </div>
      </section>

      {/* 4 SERVICE PILLARS STRIP */}
      <section className="w-full px-5 md:px-16 py-6 border-y border-[#c7c7c0]/40 bg-[#f4f3f0]/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#c7c7c0]/40">
          <div
            onClick={() => onNavigate('nang-luc')}
            className="py-3 md:py-0 md:pr-6 flex flex-col justify-between space-y-1 group cursor-pointer"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                01 / ADVISORY
              </span>
              <span className="font-label-sm text-[11px] text-[#777871] group-hover:text-black transition-colors">
                SEC. A
              </span>
            </div>
            <p className="font-headline-sm text-[16px] text-[#1a1c1a] group-hover:translate-x-0.5 transition-transform duration-150 font-normal">
              Cố vấn chiến lược cấp cao
            </p>
            <p className="font-label-sm text-[12px] text-[#464742] font-light">
              Executive Strategy Advisory
            </p>
          </div>

          <div
            onClick={() => onNavigate('nang-luc')}
            className="py-3 md:py-0 md:px-6 flex flex-col justify-between space-y-1 group cursor-pointer"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                02 / OPERATIONS
              </span>
              <span className="font-label-sm text-[11px] text-[#777871] group-hover:text-black transition-colors">
                SEC. B
              </span>
            </div>
            <p className="font-headline-sm text-[16px] text-[#1a1c1a] group-hover:translate-x-0.5 transition-transform duration-150 font-normal">
              Chuyển đổi số &amp; Vận hành
            </p>
            <p className="font-label-sm text-[12px] text-[#464742] font-light">
              Institutional Operations &amp; Tech
            </p>
          </div>

          <div
            onClick={() => onNavigate('nang-luc')}
            className="py-3 md:py-0 md:px-6 flex flex-col justify-between space-y-1 group cursor-pointer"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                03 / CAPITAL
              </span>
              <span className="font-label-sm text-[11px] text-[#777871] group-hover:text-black transition-colors">
                SEC. C
              </span>
            </div>
            <p className="font-headline-sm text-[16px] text-[#1a1c1a] group-hover:translate-x-0.5 transition-transform duration-150 font-normal">
              Tái cấu trúc vốn &amp; Đầu tư
            </p>
            <p className="font-label-sm text-[12px] text-[#464742] font-light">
              Capital &amp; M&amp;A Strategy
            </p>
          </div>

          <div
            onClick={() => onNavigate('nang-luc')}
            className="py-3 md:py-0 md:pl-6 flex flex-col justify-between space-y-1 group cursor-pointer"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                04 / GOVERNANCE
              </span>
              <span className="font-label-sm text-[11px] text-[#777871] group-hover:text-black transition-colors">
                SEC. D
              </span>
            </div>
            <p className="font-headline-sm text-[16px] text-[#1a1c1a] group-hover:translate-x-0.5 transition-transform duration-150 font-normal">
              Quản trị rủi ro &amp; Tuân thủ
            </p>
            <p className="font-label-sm text-[12px] text-[#464742] font-light">
              Enterprise Governance &amp; Compliance
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FULL-WIDTH PHOTOGRAPHIC STATEMENT (CASE STUDY NO. 04) */}
      <section className="w-full px-5 md:px-16 py-12">
        <div className="w-full flex justify-between items-baseline pb-2">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              DỰ ÁN ĐIỂN HÌNH // CASE STUDY NO. 04
            </span>
            <span className="text-[#c7c7c0]">—</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              CHÂU Á - THÁI BÌNH DƯƠNG
            </span>
          </div>
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
            NGÀNH NĂNG LƯỢNG &amp; TÀI CHÍNH
          </span>
        </div>

        {/* Large Photographic Banner */}
        <div className="relative w-full h-[65vh] min-h-[480px] bg-[#efeeeb] overflow-hidden flex flex-col justify-between p-6 md:p-12 border border-[#c7c7c0]/40">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaHOZIkXK50_R8DSwirRxaHxUpkUkdfetkLKZq0nmtr6tzYS920WU07829uAU5bYBPVuabdlHYQADFs02kYsmQfcT0v6EXjqasbwj86WGQHAF2-3VS_HEKeicDgjkgGlr84fLzDycCSnlQqvvdm3dP5etMerFHf9YdGSi7RbNq0414ka9jLw7pMcTjFBWpXywjkC422_0pYp8ku3Mz_x12pK_Q7x8PIXiScEKJEq5ftgBIoAvRji9hqw"
              alt="Trung tâm điều hành chiến lược fintech và phân tích dữ liệu thể chế"
              className="w-full h-full object-cover brightness-[0.88] contrast-[1.05]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
          </div>

          {/* Top Overlays */}
          <div className="relative z-10 flex flex-wrap justify-between items-start text-white gap-2">
            <div className="flex items-center gap-2 bg-[#faf9f6]/20 backdrop-blur-md px-4 py-2 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#faf9f6]"></span>
              <span className="font-label-sm text-[11px] uppercase tracking-widest opacity-95">
                Cố vấn Chuyển đổi Vận hành Đa quốc gia
              </span>
            </div>
            <span className="font-label-sm text-[11px] uppercase tracking-widest bg-[#faf9f6]/20 backdrop-blur-md px-4 py-2 border border-white/20 opacity-95">
              Quy mô thương vụ &gt; 1.2 Tỷ USD
            </span>
          </div>

          {/* Bottom Headline & Call to Action */}
          <div className="relative z-10 max-w-4xl space-y-3">
            <h2 className="font-display-xl text-[36px] md:text-[52px] lg:text-[62px] text-white tracking-tight leading-none">
              Tái thiết lập hệ thống quyết sách trong thời gian thực.
            </h2>
            <p className="font-label-sm text-[12px] md:text-[13px] uppercase tracking-widest text-white/85">
              Giải pháp kiến trúc tổ chức tinh gọn và chuyển đổi hệ quản trị phân tán đa thẩm quyền
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenCaseStudy(case04)}
                className="inline-flex items-center gap-2 bg-[#faf9f6] text-black px-5 py-2 font-label-md text-[11px] uppercase tracking-wider hover:bg-[#e9e8e5] transition-colors cursor-pointer"
              >
                <span>Xem toàn văn hồ sơ thẩm định &amp; can thiệp</span>
                <span className="material-symbols-outlined text-[16px]">visibility</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Analysis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-b border-[#c7c7c0]/30 pb-8">
          <div className="space-y-2">
            <p className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742] font-semibold">
              01 / Thách thức cốt lõi
            </p>
            <p className="font-body-md text-[14px] text-[#1a1c1a] font-light leading-relaxed">
              Tối ưu hoá mô hình vận hành đa quốc gia và phân cấp rủi ro trong bối cảnh tái cấu trúc chuỗi cung ứng khu vực Đông Nam Á.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742] font-semibold">
              02 / Can thiệp thể chế
            </p>
            <p className="font-body-md text-[14px] text-[#1a1c1a] font-light leading-relaxed">
              Định hình kiến trúc tổ chức tinh gọn, tích hợp hệ thống kiểm soát tuân thủ và trao quyền ra quyết định dữ liệu thời gian thực.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-semibold">
              03 / Hiệu quả định lượng
            </p>
            <p className="font-body-md text-[14px] text-[#1a1c1a] font-normal leading-relaxed">
              Giảm 28% độ trễ điều hành · Tăng trưởng biên lợi nhuận +14.2%
              <span className="text-[12px] text-[#464742] block mt-1 tracking-wider font-light">
                [Kiểm toán độc lập EY &amp; Biên bản nghiệm thu Q4/2024]
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3 CORE CAPABILITIES / SECTORS */}
      <section className="w-full px-5 md:px-16 py-12">
        <div className="w-full flex justify-between items-baseline pb-6 border-b border-[#c7c7c0]/30">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              03 / Năng Lực Thể Chế
            </span>
            <span className="text-[#c7c7c0]">—</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              Năng lực trọng yếu &amp; Lĩnh vực chuyên trách
            </span>
          </div>
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
            Ba Trọng Tâm Chiến Lược
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {/* Card 1: Logistics & Supply Chain */}
          <div className="group flex flex-col space-y-4">
            <div
              onClick={() => onOpenCaseStudy(case01)}
              className="relative aspect-[4/5] w-full bg-[#efeeeb] overflow-hidden cursor-pointer border border-[#c7c7c0]/30"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4umnLPOBdkHLV9rGF4wMrnghocYjfjSgoccQZXn5GQ6kA0balVlMwySf9kcQznGcPHAe-XpCPlFQCkoTcnQuk1m9ikW0M2kbe-uaDMZk90ABBm3hvN9J5K_0n46UAlbeaN2-XhGGPKxFMw0u6M-zQQFIderI2VfE9Ix675U6if9twSuDz9rhL_umX9rprlyFe_sPqvRO69EeuCHxAIaWVSIZtbOlLHcGT1ex0lOqQ4B3ISQx7VA9Jfg"
                alt="Tự động hóa vận hành logistics và kho trung chuyển"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-0 right-0 bg-[#faf9f6]/95 px-3 py-1 font-label-sm text-[11px] uppercase tracking-widest text-[#1a1c1a] border-b border-l border-[#c7c7c0]/30">
                HẢI PHÒNG · 2024
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                01 / LOGISTICS &amp; CHUỖI CUNG ỨNG
              </span>
              <div className="flex justify-between items-baseline gap-2">
                <h3 className="font-headline-sm text-[19px] text-[#1a1c1a] font-normal leading-snug">
                  Tự động hóa vận hành cảng &amp; kho trung chuyển
                </h3>
                <button
                  onClick={() => onOpenCaseStudy(case01)}
                  className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742] group-hover:text-black transition-colors duration-150 shrink-0 cursor-pointer"
                >
                  Chi tiết →
                </button>
              </div>
              <p className="font-body-sm text-[13px] text-[#464742] font-light leading-relaxed">
                Số hóa toàn diện hạ tầng cầu bến &amp; tối ưu hóa luân chuyển hàng hóa.
              </p>
            </div>
          </div>

          {/* Card 2: Institutional Governance */}
          <div className="group flex flex-col space-y-4">
            <div
              onClick={() => onOpenCaseStudy(case02)}
              className="relative aspect-[4/5] w-full bg-[#efeeeb] overflow-hidden cursor-pointer border border-[#c7c7c0]/30"
            >
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1U39mV2EUwJfENcuR-Y5cBTHyoLjHee2wptpwvPpgIATz5dWNS7aRGTn2Q4lRnpjHVE0g1tvob40AYNRp6Z1I5g8vszodKf-PBZxsgIOdlRA6l50zXicNwEGy-5e1i8O5J3TuMCF4XYDhTWu2cJCvBogONX-mjEKn5CpwAt4BUdWTSprbGH7XxW6Mu0Rcc2MyiRg1MuO7Y4nWEEPl0hemcW6THyK6eLjSbS1E-mUoBZGOM5zfeuMnWUWjKn"
                alt="Tái cơ cấu mô hình quản trị doanh nghiệp gia đình"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-0 right-0 bg-[#faf9f6]/95 px-3 py-1 font-label-sm text-[11px] uppercase tracking-widest text-[#1a1c1a] border-b border-l border-[#c7c7c0]/30">
                ZURICH · 2024
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                02 / TỔ CHỨC THỂ CHẾ
              </span>
              <div className="flex justify-between items-baseline gap-2">
                <h3 className="font-headline-sm text-[19px] text-[#1a1c1a] font-normal leading-snug">
                  Tái cơ cấu mô hình quản trị doanh nghiệp gia đình
                </h3>
                <button
                  onClick={() => onOpenCaseStudy(case02)}
                  className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742] group-hover:text-black transition-colors duration-150 shrink-0 cursor-pointer"
                >
                  Chi tiết →
                </button>
              </div>
              <p className="font-body-sm text-[13px] text-[#464742] font-light leading-relaxed">
                Thiết lập hội đồng gia tộc và cơ chế kiểm soát minh bạch đa thế hệ.
              </p>
            </div>
          </div>

          {/* Card 3: Private Wealth Strategy */}
          <div className="group flex flex-col space-y-4">
            <div
              onClick={() => onOpenCaseStudy(case03)}
              className="relative aspect-[4/5] w-full bg-[#efeeeb] overflow-hidden cursor-pointer border border-[#c7c7c0]/30"
            >
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1W-oLRyUt_jih4vtsx9Ce5jHcR4R9pKoRcjosX52qYMabIAbuNktOiKID_UWyZIoVheKtOEIO2PBFcfHLhlSGa9UbEFATXy-S7xdLdpVfV7qy3WtcejWDFr4AYPdF47BPcwv_aN5ettbNp__R4KQwYbRc24mqrdroJkeSIMTkjwvvIzgoqoSc1fKjRGQ2H-2pDdcmRJUnPiBhn8yGe2cq5hQHGd7I7B0S4rw2zDU_jVi7V5D1qcXf7291KV"
                alt="Chiến lược quản trị tài sản và chuyển giao thế hệ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-0 right-0 bg-[#faf9f6]/95 px-3 py-1 font-label-sm text-[11px] uppercase tracking-widest text-[#1a1c1a] border-b border-l border-[#c7c7c0]/30">
                TOKYO · 2025
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                03 / TÀI CHÍNH TƯ NHÂN
              </span>
              <div className="flex justify-between items-baseline gap-2">
                <h3 className="font-headline-sm text-[19px] text-[#1a1c1a] font-normal leading-snug">
                  Chiến lược quản trị tài sản và chuyển giao thế hệ
                </h3>
                <button
                  onClick={() => onOpenCaseStudy(case03)}
                  className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742] group-hover:text-black transition-colors duration-150 shrink-0 cursor-pointer"
                >
                  Chi tiết →
                </button>
              </div>
              <p className="font-body-sm text-[13px] text-[#464742] font-light leading-relaxed">
                Cấu trúc ủy thác tài phán chéo bảo toàn giá trị vốn dài hạn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SWISS METHODOLOGY & TEAM */}
      <section className="w-full px-5 md:px-16 py-12">
        <div className="w-full flex justify-between items-baseline pb-6 border-b border-[#c7c7c0]/30">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              04 / PHƯƠNG PHÁP &amp; NĂNG LỰC ĐỘI NGŨ
            </span>
            <span className="text-[#c7c7c0]">—</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              CHUẨN MỰC TƯ VẤN THỤY SĨ
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 border border-black rotate-45"></span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
              REGISTRY NO. CH-020.3.033-CH
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="space-y-3 border-l border-[#c7c7c0]/40 pl-6">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
              KỶ LUẬT THỰC ĐỊA
            </span>
            <h3 className="font-headline-sm text-[20px] text-[#1a1c1a] font-normal">
              Kinh nghiệm thực chiến
            </h3>
            <p className="font-body-md text-[14px] text-[#464742] font-light leading-relaxed">
              Đội ngũ đối tác với hơn 18 năm dẫn dắt các thương vụ M&amp;A và tái cấu trúc quy mô lớn tại Châu Á - Thái Bình Dương, mang đến góc nhìn đa chiều và tính thực tiễn cao nhất.
            </p>
          </div>

          <div className="space-y-3 border-l border-[#c7c7c0]/40 pl-6">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
              CHUẨN MỰC TƯ PHÁP
            </span>
            <h3 className="font-headline-sm text-[20px] text-[#1a1c1a] font-normal">
              Độc lập &amp; Bảo mật
            </h3>
            <p className="font-body-md text-[14px] text-[#464742] font-light leading-relaxed">
              Cam kết bảo mật tuyệt đối theo chuẩn mực quản trị thể chế Thụy Sĩ. Mỗi dự án được tổ chức như một văn phòng chuyên trách độc lập, loại bỏ triệt để mọi xung đột lợi ích.
            </p>
          </div>

          <div className="space-y-3 border-l border-[#c7c7c0]/40 pl-6">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
              TRÁCH NHIỆM KẾT QUẢ
            </span>
            <h3 className="font-headline-sm text-[20px] text-[#1a1c1a] font-normal">
              Đồng hành thực thi
            </h3>
            <p className="font-body-md text-[14px] text-[#464742] font-light leading-relaxed">
              Không dừng lại ở báo cáo khuyến nghị; chúng tôi trực tiếp tham gia cùng Hội đồng quản trị và Ban điều hành trong từng giai đoạn triển khai để đảm bảo giá trị chuyển hóa đo lường được.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: DRAMATIC BLACK CTA */}
      <section className="w-full px-5 md:px-16 py-12 my-6">
        <div className="bg-black text-white p-8 md:p-14 flex flex-col justify-between min-h-[460px] border border-[#c7c7c0]/20">
          {/* Top meta */}
          <div className="flex justify-between items-start border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#faf9f6]"></span>
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#c9c6c4]">
                05 / KHỞI TẠO ĐỒNG HÀNH
              </span>
            </div>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#c9c6c4] hidden md:inline-block">
              DÀNH CHO HỘI ĐỒNG QUẢN TRỊ &amp; NHÀ LÃNH ĐẠO CẤP CAO
            </span>
          </div>

          {/* Central Statement */}
          <div className="my-10 max-w-4xl space-y-6">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#858382] block">
              TƯ THẾ TƯ VẤN CHIẾN LƯỢC
            </span>
            <h2 className="font-display-xl text-[40px] md:text-[56px] lg:text-[66px] tracking-tight leading-[1.05]">
              Cùng tạo nên bước tiến tiếp theo.
            </h2>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('lien-he')}
                className="group inline-flex items-center gap-3 pl-8 pr-2.5 py-3 rounded-full bg-[#faf9f6] text-black hover:bg-white active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-md cursor-pointer"
              >
                <span className="font-label-md text-[11px] uppercase tracking-[0.18em] font-medium">Trao đổi hợp tác</span>
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <span className="material-symbols-outlined text-[16px] text-black">arrow_forward</span>
                </span>
              </button>
              <button
                onClick={() => onNavigate('du-an')}
                className="group inline-flex items-center gap-3 pl-7 pr-2.5 py-3 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/5 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer"
              >
                <span className="font-label-md text-[11px] uppercase tracking-[0.18em]">Xem hồ sơ năng lực</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-baseline text-[#858382] border-t border-white/10">
            <div className="md:col-span-6 space-y-1">
              <p className="font-label-sm text-[11px] uppercase tracking-widest text-[#c9c6c4]">
                Kênh liên lạc trực tiếp
              </p>
              <a
                href="mailto:advisory@monogram.vn"
                className="font-body-md text-[15px] text-white hover:underline underline-offset-4"
              >
                advisory@monogram.vn
              </a>
            </div>
            <div className="md:col-span-6 md:text-right space-y-1">
              <p className="font-label-sm text-[11px] uppercase tracking-widest text-[#c9c6c4]">
                Đường dây chuyên trách
              </p>
              <p className="font-body-md text-[15px] text-white font-medium">
                +84 (0) 24 8899 0000
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
