import React from 'react';

interface FinalCtaSectionProps {
  onOpenQuote: () => void;
  onOpenDealerRegister: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenQuote,
  onOpenDealerRegister,
}) => {
  return (
    <section
      className="w-full bg-[#0d0e11] px-5 md:px-10 lg:px-16 py-16 border-t border-[#343538]/40"
      id="quote"
    >
      <div className="mb-8">
        <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase block mb-1 font-semibold">
          TIẾP CẬN DỊCH VỤ
        </span>
        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#e3e2e6] uppercase tracking-tight font-medium">
          Bắt đầu hợp tác cùng Vulcan Industrial
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Path A for Product Buyers */}
        <div className="bg-[#1b1b1f] border border-[#343538]/60 p-6 md:p-8 flex flex-col justify-between group hover:border-[#f45b1c] transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] uppercase font-semibold">
                LỰA CHỌN A // KHÁCH HÀNG DOANH NGHIỆP
              </span>
              <span className="material-symbols-outlined text-[#c4c7cc] group-hover:text-[#f45b1c] transition-colors text-2xl">
                precision_manufacturing
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl text-[#e3e2e6] uppercase mb-3 font-medium">
              Yêu cầu báo giá thiết bị
            </h3>
            <p className="font-['Hanken_Grotesk'] text-sm md:text-base text-[#c4c7cc] leading-relaxed mb-8">
              Dành cho nhà máy, xưởng gia công cần báo giá thiết bị chi tiết, bản vẽ phối cảnh lắp đặt hoặc giải pháp tự động hóa đồng bộ.
            </p>
          </div>
          <div>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-[#e3e2e6] text-[#0d0e11] font-['JetBrains_Mono'] text-xs uppercase tracking-widest hover:bg-[#f45b1c] hover:text-white transition-colors duration-150 cursor-pointer font-semibold"
            >
              Yêu cầu báo giá
            </button>
          </div>
        </div>

        {/* Path B for Distribution Partners */}
        <div className="bg-[#1b1b1f] border border-[#343538]/60 p-6 md:p-8 flex flex-col justify-between group hover:border-[#f45b1c] transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] uppercase font-semibold">
                LỰA CHỌN B // ĐỐI TÁC KINH DOANH
              </span>
              <span className="material-symbols-outlined text-[#c4c7cc] group-hover:text-[#f45b1c] transition-colors text-2xl">
                storefront
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl text-[#e3e2e6] uppercase mb-3 font-medium">
              Hợp tác đại lý phân phối
            </h3>
            <p className="font-['Hanken_Grotesk'] text-sm md:text-base text-[#c4c7cc] leading-relaxed mb-8">
              Dành cho các công ty thiết bị công nghiệp, doanh nghiệp thương mại &amp; đại lý phân phối máy móc cần chính sách giá đại lý và bảo vệ thị phần khu vực.
            </p>
          </div>
          <div>
            <button
              onClick={onOpenDealerRegister}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-[#f45b1c] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-widest hover:bg-[#d94e16] transition-colors duration-150 cursor-pointer font-semibold"
            >
              Hợp tác đại lý
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
