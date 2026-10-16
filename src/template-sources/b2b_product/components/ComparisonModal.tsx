import React from 'react';
import { Equipment } from '../data/equipment';

interface ComparisonModalProps {
  items: Equipment[];
  onClose: () => void;
  onRemoveItem: (id: string) => void;
  onSelectForQuote: (product: Equipment) => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  items,
  onClose,
  onRemoveItem,
  onSelectForQuote,
}) => {
  if (items.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0e11]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#121316] border border-[#f45b1c] w-full max-w-5xl shadow-2xl relative my-auto">
        {/* Header */}
        <div className="p-4 bg-[#16181d] border-b border-[#343538] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f45b1c]">compare_arrows</span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e3e2e6] font-semibold">
              MA TRẬN SO SÁNH THÔNG SỐ KỸ THUẬT ({items.length} MODEL)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#c4c7cc] hover:text-white hover:bg-[#292a2d] transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-4 sm:p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse font-['JetBrains_Mono'] text-xs">
            <thead>
              <tr className="border-b border-[#343538]">
                <th className="p-3 text-[#707684] w-48">TIÊU CHÍ KỸ THUẬT</th>
                {items.map((item) => (
                  <th key={item.id} className="p-3 min-w-[220px] bg-[#16181d]">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[#f45b1c] font-semibold">{item.ref}</span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#707684] hover:text-red-400 text-[10px] cursor-pointer"
                      >
                        [XÓA]
                      </button>
                    </div>
                    <span className="text-[#e3e2e6] font-medium block">{item.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#343538]/60">
              <tr>
                <td className="p-3 text-[#8b919f] font-medium">HÌNH ẢNH MÁY</td>
                {items.map((item) => (
                  <td key={item.id} className="p-3">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-24 object-cover grayscale border border-[#343538]"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-[#8b919f]">CÔNG SUẤT / TẢI TRỌNG</td>
                {items.map((item) => (
                  <td key={item.id} className="p-3 text-[#f45b1c] font-semibold">
                    {item.keyParameters.powerOrPayload}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-[#8b919f]">VÙNG KHÔNG GIAN GIA CÔNG</td>
                {items.map((item) => (
                  <td key={item.id} className="p-3 text-[#e3e2e6]">
                    {item.keyParameters.workingEnvelope}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-[#8b919f]">ĐỘ CHÍNH XÁC / DUNG SAI</td>
                {items.map((item) => (
                  <td key={item.id} className="p-3 text-[#e3e2e6] font-semibold">
                    {item.keyParameters.precision}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-[#8b919f]">TRỌNG LƯỢNG TOÀN HỆ THỐNG</td>
                {items.map((item) => (
                  <td key={item.id} className="p-3 text-[#c4c7cc]">
                    {item.keyParameters.weightKg.toLocaleString()} kg
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-[#8b919f]">TÌNH TRẠNG KHO</td>
                {items.map((item) => (
                  <td key={item.id} className="p-3">
                    <span
                      className={`px-2 py-0.5 text-[10px] ${
                        item.keyParameters.stockStatus === 'IN_STOCK'
                          ? 'text-green-300 bg-green-950/80 border border-green-800'
                          : 'text-[#c4c7cc] bg-[#292a2d]'
                      }`}
                    >
                      {item.keyParameters.stockStatus === 'IN_STOCK' ? 'SẴN TẠI KHO' : 'ĐẶT HÀNG 4 TUẦN'}
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-[#8b919f]">GIÁ DỰ TOÁN THAM KHẢO</td>
                {items.map((item) => (
                  <td key={item.id} className="p-3 text-[#ffb59c] font-semibold">
                    ${item.priceEstimateUsd.toLocaleString()} USD
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 text-[#8b919f]">THAO TÁC TIẾP THEO</td>
                {items.map((item) => (
                  <td key={item.id} className="p-3">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectForQuote(item);
                      }}
                      className="w-full py-2 bg-[#f45b1c] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#d94e16] cursor-pointer"
                    >
                      BÁO GIÁ MODEL NÀY →
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
