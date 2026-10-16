import React, { useState } from 'react';
import { Equipment } from '../data/equipment';

interface ProductDetailModalProps {
  product: Equipment | null;
  onClose: () => void;
  onOpenQuote: (product: Equipment) => void;
  onOpenCad: (product: Equipment) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuote,
  onOpenCad,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'blueprint' | 'options'>('specs');
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['turnkey_install']);

  if (!product) return null;

  const toggleOption = (optId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optId) ? prev.filter((o) => o !== optId) : [...prev, optId]
    );
  };

  const optionsList = [
    { id: 'turnkey_install', label: 'Gói lắp đặt Turnkey & Cân chỉnh Laser quang học', price: 2500 },
    { id: 'spare_parts_kit', label: 'Bộ linh kiện dự phòng tiêu hao 12 tháng (Béc cắt, thấu kính, seal)', price: 3800 },
    { id: 'renishaw_probe', label: 'Đầu dò phôi quang học tự động Renishaw OMP60 (±0.0005 mm)', price: 5400 },
    { id: 'dust_collector', label: 'Hệ thống hút bụi lọc khói dập tia lửa chống cháy nổ ATEX', price: 6200 },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0e11]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#121316] border border-[#f45b1c] w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl relative">
        {/* Top Header */}
        <div className="p-4 bg-[#16181d] border-b border-[#343538] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#f45b1c]"></span>
            <div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#f45b1c] uppercase tracking-widest block font-semibold">
                BẢN VẼ KỸ THUẬT &amp; HỒ SƠ THIẾT BỊ // {product.ref}
              </span>
              <h2 className="font-['Space_Grotesk'] text-xl text-[#e3e2e6] uppercase font-medium">
                {product.name}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#c4c7cc] hover:text-white hover:bg-[#292a2d] transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-[#343538] bg-[#0d0e11] px-4">
          <button
            onClick={() => setActiveTab('specs')}
            className={`py-2.5 px-4 font-['JetBrains_Mono'] text-xs uppercase tracking-wider cursor-pointer border-b-2 ${
              activeTab === 'specs'
                ? 'border-[#f45b1c] text-[#f45b1c] font-semibold'
                : 'border-transparent text-[#c4c7cc] hover:text-white'
            }`}
          >
            THÔNG SỐ KỸ THUẬT (DATASHEET)
          </button>
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`py-2.5 px-4 font-['JetBrains_Mono'] text-xs uppercase tracking-wider cursor-pointer border-b-2 ${
              activeTab === 'blueprint'
                ? 'border-[#f45b1c] text-[#f45b1c] font-semibold'
                : 'border-transparent text-[#c4c7cc] hover:text-white'
            }`}
          >
            SƠ ĐỒ HÌNH HỌC &amp; KÍCH THƯỚC (BLUEPRINT)
          </button>
          <button
            onClick={() => setActiveTab('options')}
            className={`py-2.5 px-4 font-['JetBrains_Mono'] text-xs uppercase tracking-wider cursor-pointer border-b-2 ${
              activeTab === 'options'
                ? 'border-[#f45b1c] text-[#f45b1c] font-semibold'
                : 'border-transparent text-[#c4c7cc] hover:text-white'
            }`}
          >
            TÙY CHỌN MỞ RỘNG (ACCESSORIES)
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Image & Quick summary */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="w-full aspect-[4/3] bg-[#0d0e11] border border-[#343538] overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
                <div className="p-3 bg-[#1b1b1f] border border-[#343538]/60">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#707684] uppercase block">
                    MÔ TẢ KỸ THUẬT TIÊU CHUẨN
                  </span>
                  <p className="font-['Hanken_Grotesk'] text-xs text-[#c4c7cc] mt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="p-3 bg-[#1b1b1f] border border-[#343538]/60 font-['JetBrains_Mono'] text-xs text-[#c4c7cc] flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="text-[#707684]">TRỌNG LƯỢNG MÁY:</span>
                    <span className="text-[#e3e2e6]">{product.keyParameters.weightKg.toLocaleString()} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707684]">TIÊU CHUẨN ISO:</span>
                    <span className="text-[#e3e2e6]">ISO 230-2 / DIN 8615</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707684]">NGUỒN ĐIỆN YÊU CẦU:</span>
                    <span className="text-[#e3e2e6]">3-Phase 380V ±10% / 50Hz</span>
                  </div>
                </div>
              </div>

              {/* Specs Detailed Table */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-lg text-[#e3e2e6] uppercase mb-3 font-medium">
                    Bảng Dung Sai &amp; Khả Năng Vận Hành
                  </h3>
                  <div className="flex flex-col divide-y divide-[#343538] border border-[#343538]">
                    {product.specs.map((sp, idx) => (
                      <div
                        key={idx}
                        className={`p-3 flex justify-between items-center text-xs font-['JetBrains_Mono'] ${
                          sp.highlight ? 'bg-[#1f1f23] border-l-2 border-[#f45b1c]' : 'bg-[#16181d]'
                        }`}
                      >
                        <span className="text-[#8b919f] uppercase">{sp.label}</span>
                        <span className="text-[#e3e2e6] font-semibold">{sp.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CAD Files Available */}
                  <div className="mt-6">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] uppercase tracking-wider block mb-2 font-semibold">
                      TẬP TIN THIẾT KẾ ĐÍNH KÈM SẴN CÓ:
                    </span>
                    <div className="flex flex-col gap-2">
                      {product.cadFiles.map((f, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-2.5 bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono']"
                        >
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm text-[#f45b1c]">
                              description
                            </span>
                            <span className="text-[#e3e2e6]">{f.name}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[#707684]">
                            <span>{f.format}</span>
                            <span>{f.sizeMb} MB</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'blueprint' && (
            <div className="flex flex-col items-center">
              <div className="w-full bg-[#0d0e11] border border-[#343538] p-6 relative overflow-hidden">
                {/* Simulated SVG Blueprint with exact dimensions and mechanical markers */}
                <svg
                  className="w-full h-80 stroke-[#f45b1c] text-[#c4c7cc]"
                  viewBox="0 0 800 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#292a2d" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="800" height="350" fill="url(#grid)" />

                  {/* Machine Chassis Outline */}
                  <rect x="140" y="80" width="520" height="200" stroke="#ffb59c" strokeWidth="1.5" />
                  <rect x="180" y="110" width="440" height="140" stroke="#343538" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Working Envelope */}
                  <circle cx="400" cy="180" r="50" stroke="#f45b1c" strokeWidth="1" />
                  <line x1="400" y1="120" x2="400" y2="240" stroke="#f45b1c" strokeWidth="0.75" strokeDasharray="3 3" />
                  <line x1="340" y1="180" x2="460" y2="180" stroke="#f45b1c" strokeWidth="0.75" strokeDasharray="3 3" />

                  {/* Dimension Lines (X-Axis) */}
                  <line x1="140" y1="50" x2="660" y2="50" stroke="#e3e2e6" strokeWidth="1" />
                  <line x1="140" y1="40" x2="140" y2="60" stroke="#e3e2e6" strokeWidth="1" />
                  <line x1="660" y1="40" x2="660" y2="60" stroke="#e3e2e6" strokeWidth="1" />
                  <text x="400" y="42" fill="#e3e2e6" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">
                    CHIEU DAI TONG THE L = {product.category === 'laser' ? '7,200 mm' : '2,800 mm'}
                  </text>

                  {/* Dimension Lines (Y-Axis) */}
                  <line x1="700" y1="80" x2="700" y2="280" stroke="#e3e2e6" strokeWidth="1" />
                  <line x1="690" y1="80" x2="710" y2="80" stroke="#e3e2e6" strokeWidth="1" />
                  <line x1="690" y1="280" x2="710" y2="280" stroke="#e3e2e6" strokeWidth="1" />
                  <text x="715" y="185" fill="#e3e2e6" fontSize="11" fontFamily="JetBrains Mono">
                    W = {product.category === 'laser' ? '3,800 mm' : '1,950 mm'}
                  </text>

                  {/* Origin Coordinate Datum */}
                  <circle cx="140" cy="280" r="4" fill="#f45b1c" />
                  <text x="140" y="305" fill="#f45b1c" fontSize="11" fontFamily="JetBrains Mono">
                    DATUM [0,0,0]
                  </text>
                </svg>

                <div className="flex justify-between items-center mt-3 text-xs font-['JetBrains_Mono'] text-[#707684]">
                  <span>QUY CHUẨN DUNG SAI: ISO 2768-mK</span>
                  <span>TỈ LỆ BẢN VẼ: 1:25 ARCH-D</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'options' && (
            <div className="flex flex-col gap-4">
              <h3 className="font-['Space_Grotesk'] text-lg text-[#e3e2e6] uppercase font-medium">
                Cấu Hình Tùy Chọn Thêm Cho Dự Án
              </h3>
              <p className="font-['Hanken_Grotesk'] text-xs text-[#c4c7cc]">
                Chọn các module bổ trợ để bao gồm trong bảng tính báo giá chi tiết và phương án lắp đặt nhà xưởng.
              </p>

              <div className="flex flex-col gap-3">
                {optionsList.map((opt) => {
                  const active = selectedOptions.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleOption(opt.id)}
                      className={`p-4 border flex items-center justify-between cursor-pointer transition-colors ${
                        active
                          ? 'border-[#f45b1c] bg-[#1f1f23]'
                          : 'border-[#343538] bg-[#16181d] hover:border-[#707684]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#f45b1c]">
                          {active ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <div>
                          <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] block font-medium">
                            {opt.label}
                          </span>
                          <span className="font-['JetBrains_Mono'] text-[10px] text-[#707684]">
                            Linh kiện OEM chính hãng bảo hành 24 tháng
                          </span>
                        </div>
                      </div>
                      <span className="font-['JetBrains_Mono'] text-xs text-[#ffb59c] font-semibold">
                        +${opt.price.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-[#16181d] border-t border-[#343538] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-['JetBrains_Mono'] text-[#c4c7cc]">
            <span>MỨC GIÁ DỰ TOÁN CƠ SỞ: </span>
            <span className="text-[#f45b1c] font-semibold text-sm">
              ${product.priceEstimateUsd.toLocaleString()} USD
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenCad(product)}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-[#1f1f23] text-[#e3e2e6] font-['JetBrains_Mono'] text-xs uppercase tracking-wider hover:bg-[#343538] border border-[#343538] cursor-pointer"
            >
              Tải hồ sơ CAD (.STEP/.DWG)
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(product);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#f45b1c] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-widest hover:bg-[#d94e16] font-semibold cursor-pointer"
            >
              Yêu cầu báo giá chính thức →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
