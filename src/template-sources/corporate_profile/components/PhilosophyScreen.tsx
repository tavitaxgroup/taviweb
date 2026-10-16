import React, { useState } from 'react';
import { THOUGHT_PIECES, type ThoughtPiece } from '../data/advisoryData';

interface PhilosophyScreenProps {
  onNavigate: (path: string) => void;
}

export const PhilosophyScreen: React.FC<PhilosophyScreenProps> = ({ onNavigate }) => {
  const [selectedPiece, setSelectedPiece] = useState<ThoughtPiece | null>(THOUGHT_PIECES[0]);

  return (
    <div className="flex flex-col w-full bg-[#faf9f6]">
      {/* Top Folio Header */}
      <section className="w-full px-5 md:px-16 pt-12 pb-8 border-b border-[#c7c7c0]/30">
        <div className="w-full flex justify-between items-baseline pb-4">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              03 / TƯ TƯỞNG &amp; TẬP SAN CHIẾN LƯỢC
            </span>
            <span className="text-[#c7c7c0]">—</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              MONOGRAM MONOGRAPH FOLIO // 2025
            </span>
          </div>
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium hidden sm:inline-block">
            ZURICH · TOKYO · HANOI
          </span>
        </div>

        <div className="max-w-4xl pt-4 space-y-4">
          <h1 className="font-display-xl text-[40px] md:text-[54px] lg:text-[62px] text-black tracking-tight leading-[1.05]">
            Tính độc lập là phẩm giá tối thượng.
          </h1>
          <p className="font-body-lg text-[18px] text-[#464742] font-light leading-relaxed max-w-2xl">
            Những góc nhìn phản biện không thỏa hiệp về quản trị thể chế, rủi ro địa chính trị và sự toàn vẹn của quyết sách chiến lược trong thời kỳ bất định.
          </p>
        </div>
      </section>

      {/* Main Reading & Index Grid */}
      <section className="w-full px-5 md:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column: List of Monograph Articles (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium block pb-2 border-b border-[#c7c7c0]/40">
              CHUYÊN MỤC ẤN PHẨM // MỤC LỤC
            </span>

            <div className="space-y-4">
              {THOUGHT_PIECES.map((piece) => {
                const isSelected = selectedPiece?.id === piece.id;
                return (
                  <article
                    key={piece.id}
                    onClick={() => setSelectedPiece(piece)}
                    className={`p-5 border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-black bg-[#f4f3f0] shadow-sm'
                        : 'border-[#c7c7c0]/40 bg-[#faf9f6] hover:bg-[#efeeeb]'
                    }`}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#5a614f] font-medium">
                        {piece.issue}
                      </span>
                      <span className="font-label-sm text-[10px] text-[#777871]">
                        {piece.readTime}
                      </span>
                    </div>

                    <h3 className="font-headline-sm text-[17px] text-black font-normal leading-snug mb-2">
                      {piece.title}
                    </h3>

                    <p className="font-body-sm text-[12px] text-[#464742] font-light line-clamp-2">
                      {piece.abstract}
                    </p>

                    <div className="pt-3 mt-3 border-t border-[#c7c7c0]/30 flex justify-between items-center text-[11px] font-label-sm text-[#777871]">
                      <span>{piece.category}</span>
                      <span className="text-black group-hover:translate-x-1 transition-transform">
                        Đọc toàn văn →
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Swiss Editorial Manifesto Card */}
            <div className="p-6 bg-black text-white space-y-3 border border-white/10 mt-6">
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#c9c6c4]">
                NGUYÊN TẮC BIÊN TẬP THỤY SĨ
              </span>
              <p className="font-headline-sm text-[16px] leading-snug font-normal">
                Không quảng cáo · Không tài trợ thương mại · Khách quan tuyệt đối
              </p>
              <p className="font-body-sm text-[12px] text-[#858382] font-light leading-relaxed">
                Các bài viết trong Monogram Folio chỉ phản ánh nghiên cứu độc lập của các đối tác điều hành, không đại diện cho lợi ích của bất kỳ nhóm cổ đông nào.
              </p>
            </div>
          </div>

          {/* Right Column: Active Essay Long-Form Reading Pane (8 cols) */}
          {selectedPiece && (
            <div className="md:col-span-8 bg-[#faf9f6] border border-[#c7c7c0]/40 p-6 md:p-12 space-y-8">
              {/* Monograph Meta Header */}
              <div className="space-y-4 border-b border-[#c7c7c0]/30 pb-6">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                    {selectedPiece.folioId} // {selectedPiece.category}
                  </span>
                  <span className="font-label-sm text-[11px] text-[#777871]">
                    {selectedPiece.issue} · {selectedPiece.date}
                  </span>
                </div>

                <h2 className="font-display-xl text-[32px] md:text-[46px] text-black tracking-tight leading-[1.08]">
                  {selectedPiece.title}
                </h2>

                <p className="font-headline-sm text-[18px] text-[#464742] font-light leading-relaxed italic">
                  "{selectedPiece.subtitle}"
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between text-[#1a1c1a] border-t border-[#c7c7c0]/20 pt-4 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5a614f]"></span>
                    <span className="font-label-sm text-[12px] uppercase tracking-wider font-semibold">
                      Tác giả: {selectedPiece.author}
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f]">
                    Thời lượng đọc: {selectedPiece.readTime}
                  </span>
                </div>
              </div>

              {/* Abstract Callout */}
              <div className="p-6 bg-[#f4f3f0] border-l-2 border-black space-y-2">
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#5a614f] block font-semibold">
                  TÓM LƯỢC ĐIỀU HÀNH (EXECUTIVE ABSTRACT)
                </span>
                <p className="font-body-md text-[15px] text-black font-normal leading-relaxed">
                  {selectedPiece.abstract}
                </p>
              </div>

              {/* Main Paragraphs */}
              <div className="space-y-6 pt-2">
                {selectedPiece.contentParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className="font-body-lg text-[17px] text-[#1a1c1a] font-light leading-relaxed text-justify"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Citation & Archival Source */}
              <div className="pt-8 border-t border-[#c7c7c0]/30 space-y-2">
                <p className="font-label-sm text-[10px] uppercase tracking-widest text-[#777871]">
                  TRÍCH DẪN XUẤT BẢN THỂ CHẾ (INSTITUTIONAL CITATION)
                </p>
                <p className="font-body-sm text-[13px] text-[#464742] font-mono">
                  {selectedPiece.citation}
                </p>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 flex flex-wrap justify-between items-center gap-4">
                <button
                  onClick={() => onNavigate('lien-he')}
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 font-label-md text-[11px] uppercase tracking-wider hover:bg-[#5a614f] transition-colors cursor-pointer"
                >
                  <span>Đặt lịch thảo luận đề tài này với tác giả</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 border border-[#c7c7c0] text-[#1a1c1a] px-4 py-2 font-label-md text-[11px] uppercase tracking-wider hover:border-black transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">print</span>
                  <span>In bản ghi nhớ (PDF)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
