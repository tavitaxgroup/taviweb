import React, { useState } from 'react';
import { Equipment, EQUIPMENT_CATALOG } from '../data/equipment';
import { generateRfqCode } from '../utils/machinery';

interface QuoteModalProps {
  initialProduct?: Equipment | null;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ initialProduct, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || EQUIPMENT_CATALOG[0].id
  );
  const [auxiliaries, setAuxiliaries] = useState({
    chiller: true,
    transformer: true,
    installation: true,
    cadConsulting: true,
  });

  const [formData, setFormData] = useState({
    companyName: 'Công ty Cổ phần Cơ khí Chính xác Tân Phát',
    taxCode: '0316889922',
    contactPerson: 'Nguyễn Văn Minh',
    phone: '0908 123 456',
    email: 'minh.nguyen@tanphat-mech.vn',
    factoryLocation: 'Bình Dương (KCN VSIP 2)',
    projectTimeline: 'Q4 / 2025 (Cần máy trong 60 ngày)',
    notes: 'Yêu cầu hỗ trợ chạy thử phôi thép SUS304 dày 12mm và kiểm tra độ vuông góc tại xưởng.',
  });

  const [rfqResult, setRfqResult] = useState<{
    rfqCode: string;
    totalUsd: number;
    totalVnd: number;
    leadTimeWeeks: number;
  } | null>(null);

  const currentEquipment = EQUIPMENT_CATALOG.find((e) => e.id === selectedProductId) || EQUIPMENT_CATALOG[0];

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleCalculateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    let total = currentEquipment.priceEstimateUsd;
    if (auxiliaries.chiller) total += 3500;
    if (auxiliaries.transformer) total += 2800;
    if (auxiliaries.installation) total += 2200;
    if (auxiliaries.cadConsulting) total += 1500;

    const rfqCode = generateRfqCode(currentEquipment.ref);
    setRfqResult({
      rfqCode,
      totalUsd: total,
      totalVnd: Math.round(total * 25400),
      leadTimeWeeks: currentEquipment.keyParameters.stockStatus === 'IN_STOCK' ? 1 : 4,
    });
    setStep(3);
  };

  const handlePrintQuotation = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0e11]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#121316] border border-[#f45b1c] w-full max-w-3xl shadow-2xl relative my-auto">
        {/* Top Header */}
        <div className="p-4 bg-[#16181d] border-b border-[#343538] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#f45b1c]"></span>
            <div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#f45b1c] uppercase tracking-widest font-semibold block">
                YÊU CẦU BÁO GIÁ THIẾT BỊ // INDUSTRIAL RFQ
              </span>
              <h2 className="font-['Space_Grotesk'] text-lg text-[#e3e2e6] uppercase font-medium">
                {step === 3 ? 'Bảng Báo Giá Dự Toán Chính Thức' : 'Cấu Hình & Thông Tin Doanh Nghiệp'}
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

        {/* Step indicator */}
        <div className="grid grid-cols-3 bg-[#0d0e11] border-b border-[#343538] text-center text-xs font-['JetBrains_Mono']">
          <div
            className={`py-2 border-r border-[#343538] ${
              step === 1 ? 'text-[#f45b1c] bg-[#1b1b1f] font-semibold' : 'text-[#707684]'
            }`}
          >
            01. CẤU HÌNH MÁY
          </div>
          <div
            className={`py-2 border-r border-[#343538] ${
              step === 2 ? 'text-[#f45b1c] bg-[#1b1b1f] font-semibold' : 'text-[#707684]'
            }`}
          >
            02. THÔNG TIN DOANH NGHIỆP
          </div>
          <div
            className={`py-2 ${
              step === 3 ? 'text-[#f45b1c] bg-[#1b1b1f] font-semibold' : 'text-[#707684]'
            }`}
          >
            03. BẢNG DỰ TOÁN RFQ
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {step === 1 && (
            <form onSubmit={handleNextStep1} className="flex flex-col gap-6">
              <div>
                <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-2">
                  Chọn Thiết Bị Cần Báo Giá:
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-3 focus:outline-none focus:border-[#f45b1c]"
                >
                  {EQUIPMENT_CATALOG.map((eq) => (
                    <option key={eq.id} value={eq.id}>
                      [{eq.ref}] {eq.name} — {eq.keyParameters.powerOrPayload}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Equipment Snapshot */}
              <div className="p-4 bg-[#16181d] border border-[#343538] flex flex-col sm:flex-row gap-4 items-center">
                <img
                  src={currentEquipment.imageUrl}
                  alt={currentEquipment.name}
                  className="w-28 h-20 object-cover grayscale border border-[#343538]"
                />
                <div className="flex-1 text-xs font-['JetBrains_Mono']">
                  <span className="text-[#f45b1c] font-semibold block">{currentEquipment.name}</span>
                  <span className="text-[#707684] block mt-1">
                    VÙNG LÀM VIỆC: {currentEquipment.keyParameters.workingEnvelope}
                  </span>
                  <span className="text-[#c4c7cc] block">
                    ĐỘ CHÍNH XÁC: {currentEquipment.keyParameters.precision}
                  </span>
                  <span className="text-green-400 block mt-1">
                    TRẠNG THÁI: {currentEquipment.keyParameters.stockStatus === 'IN_STOCK' ? 'CÓ SẴN TẠI KHO' : 'ĐẶT HÀNG 4 TUẦN'}
                  </span>
                </div>
              </div>

              {/* Auxiliary systems */}
              <div>
                <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-2 font-semibold">
                  Tùy Chọn Phụ Trợ Đi Kèm Cho Nhà Máy:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 p-3 bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#c4c7cc] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={auxiliaries.chiller}
                      onChange={(e) => setAuxiliaries({ ...auxiliaries, chiller: e.target.checked })}
                      className="accent-[#f45b1c]"
                    />
                    <span>Máy làm mát công nghiệp chuyên dụng (+ $3,500)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#c4c7cc] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={auxiliaries.transformer}
                      onChange={(e) => setAuxiliaries({ ...auxiliaries, transformer: e.target.checked })}
                      className="accent-[#f45b1c]"
                    />
                    <span>Biến áp cách ly 380V/220V ổn định điện lưới (+ $2,800)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#c4c7cc] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={auxiliaries.installation}
                      onChange={(e) => setAuxiliaries({ ...auxiliaries, installation: e.target.checked })}
                      className="accent-[#f45b1c]"
                    />
                    <span>Turnkey: Lắp đặt &amp; Chuyển giao tại xưởng (+ $2,200)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#c4c7cc] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={auxiliaries.cadConsulting}
                      onChange={(e) => setAuxiliaries({ ...auxiliaries, cadConsulting: e.target.checked })}
                      className="accent-[#f45b1c]"
                    />
                    <span>Hồ sơ thiết kế móng máy &amp; Khảo sát mặt bằng (+ $1,500)</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#343538]">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#c4c7cc] hover:text-white"
                >
                  HỦY
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#f45b1c] text-white text-xs font-['JetBrains_Mono'] uppercase tracking-wider font-semibold hover:bg-[#d94e16] cursor-pointer"
                >
                  TIẾP TỤC: THÔNG TIN DOANH NGHIỆP →
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleCalculateQuote} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Tên Doanh Nghiệp / Nhà Máy *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  />
                </div>
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Mã Số Thuế *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.taxCode}
                    onChange={(e) => setFormData({ ...formData, taxCode: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  />
                </div>
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Người Phụ Trách Kỹ Thuật / Mua Hàng *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  />
                </div>
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Số Điện Thoại Trực Tiếp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  />
                </div>
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Email Nhận Báo Giá *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  />
                </div>
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Địa Điểm Lắp Đặt Nhà Xưởng *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.factoryLocation}
                    onChange={(e) => setFormData({ ...formData, factoryLocation: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                  Kế Hoạch &amp; Yêu Cầu Kỹ Thuật Riêng
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[#343538]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#c4c7cc] hover:text-white"
                >
                  ← QUAY LẠI
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#f45b1c] text-white text-xs font-['JetBrains_Mono'] uppercase tracking-wider font-semibold hover:bg-[#d94e16] cursor-pointer"
                >
                  TẠO BẢNG DỰ TOÁN BÁO GIÁ →
                </button>
              </div>
            </form>
          )}

          {step === 3 && rfqResult && (
            <div className="flex flex-col gap-6">
              {/* Official Quote Sheet Card */}
              <div className="p-6 bg-[#16181d] border-2 border-[#f45b1c] flex flex-col gap-4" id="printable-rfq">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start border-b border-[#343538] pb-4 gap-2">
                  <div>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#f45b1c] font-semibold block">
                      VULCAN PRECISION INDUSTRIAL // OFFICIAL QUOTATION
                    </span>
                    <span className="font-['Space_Grotesk'] text-lg text-[#e3e2e6] font-medium block">
                      MÃ BÁO GIÁ: {rfqResult.rfqCode}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#707684]">
                      NGÀY BAN HÀNH: 15/10/2025 // HIỆU LỰC: 30 NGÀY
                    </span>
                  </div>
                  <div className="text-right text-xs font-['JetBrains_Mono'] text-[#c4c7cc]">
                    <span className="block font-semibold text-[#e3e2e6]">{formData.companyName}</span>
                    <span className="block text-[#707684]">MST: {formData.taxCode}</span>
                    <span className="block text-[#707684]">ĐỊA BÀN: {formData.factoryLocation}</span>
                  </div>
                </div>

                {/* Itemized lines */}
                <div className="flex flex-col divide-y divide-[#343538] text-xs font-['JetBrains_Mono']">
                  <div className="py-2 flex justify-between">
                    <span className="text-[#e3e2e6]">{currentEquipment.name} ({currentEquipment.ref})</span>
                    <span className="text-[#e3e2e6]">${currentEquipment.priceEstimateUsd.toLocaleString()} USD</span>
                  </div>
                  {auxiliaries.chiller && (
                    <div className="py-2 flex justify-between text-[#c4c7cc]">
                      <span>Máy làm mát công nghiệp chuyên dụng</span>
                      <span>$3,500 USD</span>
                    </div>
                  )}
                  {auxiliaries.transformer && (
                    <div className="py-2 flex justify-between text-[#c4c7cc]">
                      <span>Biến áp cách ly 380V/220V</span>
                      <span>$2,800 USD</span>
                    </div>
                  )}
                  {auxiliaries.installation && (
                    <div className="py-2 flex justify-between text-[#c4c7cc]">
                      <span>Turnkey lắp đặt &amp; nghiệm thu CMM tại xưởng</span>
                      <span>$2,200 USD</span>
                    </div>
                  )}
                  {auxiliaries.cadConsulting && (
                    <div className="py-2 flex justify-between text-[#c4c7cc]">
                      <span>Hồ sơ thiết kế móng &amp; bố trí mặt bằng CAD 3D</span>
                      <span>$1,500 USD</span>
                    </div>
                  )}
                </div>

                {/* Totals */}
                <div className="pt-4 border-t-2 border-[#f45b1c] flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#0d0e11] p-4">
                  <div>
                    <span className="block font-['JetBrains_Mono'] text-xs text-[#707684]">
                      TỔNG GIÁ TRỊ DỰ TOÁN (CIF / DDP):
                    </span>
                    <span className="font-['Space_Grotesk'] text-2xl text-[#f45b1c] font-semibold">
                      ${rfqResult.totalUsd.toLocaleString()} USD
                    </span>
                    <span className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc]">
                      ≈ {rfqResult.totalVnd.toLocaleString()} VNĐ (chưa bao gồm VAT)
                    </span>
                  </div>
                  <div className="text-right mt-2 sm:mt-0 font-['JetBrains_Mono'] text-xs">
                    <span className="text-green-400 block font-semibold">
                      THỜI GIAN GIAO HÀNG: {rfqResult.leadTimeWeeks === 1 ? '1 TUẦN (SẴN TẠI KHO)' : '4 TUẦN'}
                    </span>
                    <span className="text-[#707684] block">BẢO HÀNH CHÍNH HÃNG 24 THÁNG</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  type="button"
                  onClick={handlePrintQuotation}
                  className="px-4 py-2.5 bg-[#1f1f23] text-[#e3e2e6] border border-[#343538] font-['JetBrains_Mono'] text-xs uppercase tracking-wider hover:bg-[#343538] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">print</span>
                  <span>IN BẢN BÁO GIÁ PDF</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#f45b1c] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold hover:bg-[#d94e16] cursor-pointer"
                >
                  XÁC NHẬN GỬI KỸ SƯ LIÊN HỆ TRONG 2 GIỜ
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
