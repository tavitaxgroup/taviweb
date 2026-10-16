import React, { useState } from 'react';

interface DealerModalProps {
  onClose: () => void;
}

export const DealerModal: React.FC<DealerModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: 'Công ty TNHH Thương mại & Kỹ thuật Cơ Điện Việt Đức',
    taxCode: '0108923411',
    region: 'Miền Bắc (Hà Nội, Bắc Ninh, Hải Phòng)',
    tier: 'tier1_exclusive',
    showroomSqmMtr: '450',
    currentBrands: 'Fanuc, Mitsubishi, Yaskawa',
    contactPerson: 'Trần Đình Quân',
    phone: '0912 345 678',
    email: 'quan.tran@vietduc-tech.com',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0e11]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121316] border border-[#f45b1c] w-full max-w-2xl shadow-2xl relative my-auto">
        {/* Header */}
        <div className="p-4 bg-[#16181d] border-b border-[#343538] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#f45b1c]"></span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e3e2e6] font-semibold">
              HỢP TÁC ĐẠI LÝ PHÂN PHỐI // PARTNER APPLICATION
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

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="font-['Hanken_Grotesk'] text-sm text-[#c4c7cc]">
                Đăng ký để nhận bảng giá đại lý chiết khấu cao, cam kết độc quyền dự án khu vực và tài trợ 100% tài liệu thiết kế trưng bày showroom.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Tên Doanh Nghiệp Phân Phối *
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
                    Mã Số Thuế Doanh Nghiệp *
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
                    Khu Vực Đăng Ký Phân Phối *
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  >
                    <option value="Miền Bắc (Hà Nội, Bắc Ninh, Hải Phòng)">Miền Bắc (Hà Nội, Bắc Ninh, Hải Phòng)</option>
                    <option value="Miền Nam (TP.HCM, Bình Dương, Đồng Nai)">Miền Nam (TP.HCM, Bình Dương, Đồng Nai)</option>
                    <option value="Miền Trung (Đà Nẵng, Quảng Nam)">Miền Trung (Đà Nẵng, Quảng Nam)</option>
                    <option value="Tây Nam Bộ (Cần Thơ, Long An)">Tây Nam Bộ (Cần Thơ, Long An)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Cấp Độ Hợp Tác Mong Muốn *
                  </label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  >
                    <option value="tier1_exclusive">Cấp 1: Tổng Đại Lý Vùng (Độc quyền + Chiết khấu 25%)</option>
                    <option value="tier2_authorized">Cấp 2: Đại Lý Ủy Quyền Thương Mại (Chiết khấu 18%)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Diện Tích Showroom / Kho Sẵn Có (m²)
                  </label>
                  <input
                    type="number"
                    value={formData.showroomSqmMtr}
                    onChange={(e) => setFormData({ ...formData, showroomSqmMtr: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  />
                </div>
                <div>
                  <label className="block font-['JetBrains_Mono'] text-xs text-[#c4c7cc] uppercase mb-1">
                    Họ Tên Người Đại Diện &amp; Chức Vụ *
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
                    Số Điện Thoại *
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
                    Email Công Ty *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#e3e2e6] p-2.5 focus:outline-none focus:border-[#f45b1c]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#343538]">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#c4c7cc] hover:text-white"
                >
                  ĐÓNG
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#f45b1c] text-white text-xs font-['JetBrains_Mono'] uppercase tracking-wider font-semibold hover:bg-[#d94e16] cursor-pointer"
                >
                  GỬI HỒ SƠ ĐĂNG KÝ ĐẠI LÝ →
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <div className="w-12 h-12 bg-[#1b1b1f] border border-[#f45b1c] flex items-center justify-center text-[#f45b1c]">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl text-[#e3e2e6] uppercase font-medium">
                Hồ Sơ Đăng Ký Đại Lý Đã Được Tiếp Nhận
              </h3>
              <p className="font-['Hanken_Grotesk'] text-xs md:text-sm text-[#c4c7cc] max-w-md">
                Cảm ơn <strong>{formData.companyName}</strong>. Mã số hồ sơ đối tác của bạn là:{' '}
                <span className="text-[#f45b1c] font-['JetBrains_Mono'] font-bold">
                  DEALER-2025-VUL-{Math.floor(1000 + Math.random() * 9000)}
                </span>
                . Giám đốc phát triển mạng lưới phân phối sẽ liên hệ trong 4 giờ làm việc.
              </p>
              <div className="p-3 bg-[#1b1b1f] border border-[#343538] text-xs font-['JetBrains_Mono'] text-[#707684]">
                CHÍNH SÁCH BẢO VỆ DỰ ÁN &amp; CHIẾT KHẤU ĐÃ ĐƯỢC GỬI VÀO EMAIL {formData.email}
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-[#f45b1c] text-white text-xs font-['JetBrains_Mono'] uppercase tracking-wider"
              >
                HOÀN TẤT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
