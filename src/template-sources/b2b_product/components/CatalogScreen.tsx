import React, { useState, useMemo } from 'react';
import { Equipment, EQUIPMENT_CATALOG } from '../data/equipment';

interface CatalogScreenProps {
  initialCategory?: string;
  onSelectProductForQuote: (product: Equipment) => void;
  onOpenCadModal: (product: Equipment) => void;
  onViewProductDetail: (product: Equipment) => void;
  comparisonList: Equipment[];
  onToggleComparison: (product: Equipment) => void;
  onOpenComparisonModal: () => void;
}

export const CatalogScreen: React.FC<CatalogScreenProps> = ({
  initialCategory = 'all',
  onSelectProductForQuote,
  onOpenCadModal,
  onViewProductDetail,
  comparisonList,
  onToggleComparison,
  onOpenComparisonModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [stockOnly, setStockOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredEquipment = useMemo(() => {
    return EQUIPMENT_CATALOG.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStock = !stockOnly || item.keyParameters.stockStatus === 'IN_STOCK';
      return matchesCategory && matchesSearch && matchesStock;
    });
  }, [selectedCategory, searchQuery, stockOnly]);

  const categories = [
    { id: 'all', label: 'TẤT CẢ THIẾT BỊ (54)', count: EQUIPMENT_CATALOG.length },
    { id: 'robotics', label: 'TỰ ĐỘNG HÓA & ROBOTICS', count: 18 },
    { id: 'motion', label: 'TRUYỀN ĐỘNG & SERVO', count: 24 },
    { id: 'laser', label: 'GIA CÔNG TẤM & LASER', count: 12 },
    { id: 'cnc', label: 'PHAY CNC 5 TRỤC', count: 6 },
  ];

  return (
    <div className="w-full bg-[#121316] min-h-screen py-8 px-5 md:px-10 lg:px-16">
      {/* Header Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#707684] mb-4">
        <span>VULCAN</span>
        <span>//</span>
        <span className="text-[#f45b1c]">DANH MỤC THIẾT BỊ PHÂN PHỐI</span>
        <span>//</span>
        <span className="text-[#e3e2e6] uppercase">{selectedCategory}</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 border-b border-[#343538] pb-6">
        <div>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#f45b1c] tracking-widest uppercase block mb-1 font-semibold">
            INVENTORY &amp; SPECIFICATIONS
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl md:text-4xl text-[#e3e2e6] uppercase tracking-tight font-medium">
            Hệ thống phân cấp &amp; Kho thiết bị
          </h1>
          <p className="font-['Hanken_Grotesk'] text-sm text-[#c4c7cc] mt-2 max-w-xl">
            Toàn bộ thiết bị đều có sẵn bản vẽ CAD 3D (.step), hồ sơ kiểm định dung sai CMM và linh kiện phụ tùng thay thế dự phòng tại kho.
          </p>
        </div>

        {/* View mode toggle and stock filter */}
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#c4c7cc] cursor-pointer bg-[#1b1b1f] border border-[#343538] px-3 py-2">
            <input
              type="checkbox"
              checked={stockOnly}
              onChange={(e) => setStockOnly(e.target.checked)}
              className="accent-[#f45b1c]"
            />
            <span>CHỈ HIỆN HÀNG CÓ SẴN TẠI KHO</span>
          </label>

          <div className="flex border border-[#343538] bg-[#1b1b1f]">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#f45b1c] text-white' : 'text-[#c4c7cc] hover:text-white'
              }`}
              title="Dạng lưới thẻ"
            >
              <span className="material-symbols-outlined text-sm">grid_view</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 cursor-pointer ${
                viewMode === 'table' ? 'bg-[#f45b1c] text-white' : 'text-[#c4c7cc] hover:text-white'
              }`}
              title="Dạng bảng ma trận dung sai"
            >
              <span className="material-symbols-outlined text-sm">table_rows</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 flex-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-2 font-['JetBrains_Mono'] text-xs tracking-wider uppercase border cursor-pointer transition-colors ${
                selectedCategory === cat.id
                  ? 'border-[#f45b1c] bg-[#1f1f23] text-[#f45b1c] font-semibold'
                  : 'border-[#343538] text-[#c4c7cc] hover:border-[#707684] hover:text-white bg-[#1b1b1f]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm model, công suất, dung sai..."
            className="w-full bg-[#1b1b1f] border border-[#343538] px-3 py-2 text-xs font-['JetBrains_Mono'] text-[#e3e2e6] placeholder-[#707684] focus:outline-none focus:border-[#f45b1c]"
          />
          <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[#707684] text-base">
            search
          </span>
        </div>
      </div>

      {/* Catalog Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => {
            const isCompared = comparisonList.some((c) => c.id === item.id);
            return (
              <div
                key={item.id}
                className="bg-[#1b1b1f] border border-[#343538]/60 flex flex-col justify-between group hover:border-[#f45b1c] transition-colors"
              >
                <div>
                  {/* Card Header */}
                  <div className="p-3 border-b border-[#343538]/50 flex justify-between items-center bg-[#16181d]">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#f45b1c] tracking-widest uppercase font-semibold">
                      REF: {item.ref}
                    </span>
                    <span
                      className={`font-['JetBrains_Mono'] text-[9px] px-1.5 py-0.5 uppercase tracking-wider ${
                        item.keyParameters.stockStatus === 'IN_STOCK'
                          ? 'bg-green-950 text-green-300 border border-green-800'
                          : 'bg-[#292a2d] text-[#c4c7cc] border border-[#343538]'
                      }`}
                    >
                      {item.keyParameters.stockStatus === 'IN_STOCK' ? 'SẴN TẠI KHO' : 'ĐẶT HÀNG 4 TUẦN'}
                    </span>
                  </div>

                  {/* Image Viewport */}
                  <div
                    onClick={() => onViewProductDetail(item)}
                    className="w-full aspect-[16/10] bg-[#0d0e11] overflow-hidden relative cursor-pointer group"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-2 left-2 bg-[#f45b1c] text-white font-['JetBrains_Mono'] text-[9px] px-2 py-0.5 font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#707684] tracking-wider uppercase block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3
                      onClick={() => onViewProductDetail(item)}
                      className="font-['Space_Grotesk'] text-lg text-[#e3e2e6] uppercase font-medium hover:text-[#f45b1c] cursor-pointer transition-colors mb-2 line-clamp-1"
                    >
                      {item.name}
                    </h3>
                    <p className="font-['Hanken_Grotesk'] text-xs text-[#c4c7cc] line-clamp-2 leading-relaxed mb-4">
                      {item.tagline}
                    </p>

                    {/* Quick Specs Readout */}
                    <div className="flex flex-col gap-1.5 bg-[#121316] p-2.5 border border-[#343538]/40 mb-3">
                      <div className="flex justify-between items-center text-[11px] font-['JetBrains_Mono']">
                        <span className="text-[#707684]">THÔNG SỐ CHÍNH</span>
                        <span className="text-[#ffb59c] font-medium">{item.keyParameters.powerOrPayload}</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-['JetBrains_Mono']">
                        <span className="text-[#707684]">VÙNG LÀM VIỆC</span>
                        <span className="text-[#e3e2e6]">{item.keyParameters.workingEnvelope}</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-['JetBrains_Mono']">
                        <span className="text-[#707684]">ĐỘ CHÍNH XÁC</span>
                        <span className="text-[#f45b1c] font-semibold">{item.keyParameters.precision}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-3 border-t border-[#343538]/50 bg-[#16181d] flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => onToggleComparison(item)}
                      className={`text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider flex items-center gap-1 cursor-pointer ${
                        isCompared ? 'text-[#f45b1c]' : 'text-[#707684] hover:text-[#c4c7cc]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {isCompared ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                      <span>{isCompared ? 'ĐÃ CHỌN SO SÁNH' : 'SO SÁNH'}</span>
                    </button>

                    <button
                      onClick={() => onOpenCadModal(item)}
                      className="text-[10px] font-['JetBrains_Mono'] text-[#c4c7cc] hover:text-[#f45b1c] flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">download</span>
                      <span>TẢI CAD</span>
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => onViewProductDetail(item)}
                      className="flex-1 py-1.5 px-2 bg-[#1f1f23] border border-[#343538] text-[11px] font-['JetBrains_Mono'] text-[#c4c7cc] hover:text-white uppercase tracking-wider text-center cursor-pointer"
                    >
                      BẢN VẼ CHI TIẾT
                    </button>
                    <button
                      onClick={() => onSelectProductForQuote(item)}
                      className="flex-1 py-1.5 px-2 bg-[#f45b1c] hover:bg-[#d94e16] text-white text-[11px] font-['JetBrains_Mono'] font-medium uppercase tracking-wider text-center cursor-pointer"
                    >
                      BÁO GIÁ →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Technical Tolerance Matrix Table View */
        <div className="w-full overflow-x-auto border border-[#343538]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#16181d] border-b border-[#343538] text-[11px] font-['JetBrains_Mono'] text-[#707684] uppercase">
                <th className="p-3">MÃ THIẾT BỊ</th>
                <th className="p-3">TÊN DÒNG MÁY</th>
                <th className="p-3">PHÂN HỆ</th>
                <th className="p-3">CÔNG SUẤT / TẢI</th>
                <th className="p-3">VÙNG THAO TÁC</th>
                <th className="p-3">ĐỘ CHÍNH XÁC</th>
                <th className="p-3">TRẠNG THÁI</th>
                <th className="p-3 text-right">THAO TÁC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#343538]/60 text-xs font-['JetBrains_Mono']">
              {filteredEquipment.map((item) => (
                <tr key={item.id} className="hover:bg-[#1b1b1f] transition-colors">
                  <td className="p-3 text-[#f45b1c] font-semibold">{item.ref}</td>
                  <td className="p-3 text-[#e3e2e6] font-medium">
                    <button
                      onClick={() => onViewProductDetail(item)}
                      className="hover:text-[#f45b1c] cursor-pointer text-left"
                    >
                      {item.name}
                    </button>
                  </td>
                  <td className="p-3 text-[#707684]">{item.category.toUpperCase()}</td>
                  <td className="p-3 text-[#ffb59c]">{item.keyParameters.powerOrPayload}</td>
                  <td className="p-3 text-[#c4c7cc]">{item.keyParameters.workingEnvelope}</td>
                  <td className="p-3 text-[#f45b1c] font-semibold">{item.keyParameters.precision}</td>
                  <td className="p-3">
                    <span
                      className={`px-1.5 py-0.5 text-[10px] ${
                        item.keyParameters.stockStatus === 'IN_STOCK'
                          ? 'text-green-400 bg-green-950/60'
                          : 'text-[#c4c7cc] bg-[#292a2d]'
                      }`}
                    >
                      {item.keyParameters.stockStatus === 'IN_STOCK' ? 'SẴN KHO' : '4 TUẦN'}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onOpenCadModal(item)}
                        className="px-2 py-1 bg-[#1f1f23] text-[#c4c7cc] hover:text-white border border-[#343538] cursor-pointer"
                        title="Tải file CAD"
                      >
                        CAD
                      </button>
                      <button
                        onClick={() => onSelectProductForQuote(item)}
                        className="px-2.5 py-1 bg-[#f45b1c] text-white hover:bg-[#d94e16] cursor-pointer"
                      >
                        BÁO GIÁ
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Floating Comparison Drawer if items are selected */}
      {comparisonList.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[#0d0e11] border-2 border-[#f45b1c] p-3 shadow-2xl flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#f45b1c] animate-ping"></span>
            <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-semibold">
              SO SÁNH ({comparisonList.length}/3 MODEL):
            </span>
            <div className="hidden sm:flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#ffb59c]">
              {comparisonList.map((c) => (
                <span key={c.id} className="bg-[#1f1f23] px-2 py-0.5 border border-[#343538]">
                  {c.ref}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onOpenComparisonModal}
            className="px-4 py-1.5 bg-[#f45b1c] hover:bg-[#d94e16] text-white text-xs font-['JetBrains_Mono'] uppercase tracking-wider font-semibold cursor-pointer"
          >
            XEM BẢNG SO SÁNH →
          </button>
        </div>
      )}
    </div>
  );
};
