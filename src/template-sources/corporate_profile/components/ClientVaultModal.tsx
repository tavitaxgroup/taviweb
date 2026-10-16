import React, { useState } from 'react';
import { CONFIDENTIAL_VAULT_DOCUMENTS } from '../data/advisoryData';
import { verifyClientPasscode } from '../utils/advisory';

interface ClientVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  isUnlocked: boolean;
  setIsUnlocked: (status: boolean) => void;
  onNavigateContact: () => void;
}

export const ClientVaultModal: React.FC<ClientVaultModalProps> = ({
  isOpen,
  onClose,
  isUnlocked,
  setIsUnlocked,
  onNavigateContact,
}) => {
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeDocId, setActiveDocId] = useState<string>(CONFIDENTIAL_VAULT_DOCUMENTS[0].id);

  if (!isOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyClientPasscode(passcode)) {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Mật mã thẩm định không chính xác hoặc quyền truy cập đã hết hạn.');
    }
  };

  const handleQuickDemo = () => {
    setPasscode('MGR-2025');
    setIsUnlocked(true);
    setErrorMsg('');
  };

  const handleLockVault = () => {
    setIsUnlocked(false);
    setPasscode('');
    setErrorMsg('');
  };

  const activeDoc =
    CONFIDENTIAL_VAULT_DOCUMENTS.find((d) => d.id === activeDocId) ||
    CONFIDENTIAL_VAULT_DOCUMENTS[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="vault-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#faf9f6] border-2 border-black flex flex-col overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#c7c7c0]/40 flex justify-between items-center bg-black text-white">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[18px] text-[#dfe5cf]">
              {isUnlocked ? 'lock_open' : 'lock'}
            </span>
            <span id="vault-title" className="font-label-sm text-[11px] uppercase tracking-widest text-[#dfe5cf] font-semibold">
              KHO TÀI LIỆU BẢO MẬT HỘI ĐỒNG // REGISTRY CH-020.3.033-CH
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#858382] hover:text-white cursor-pointer"
            aria-label="Đóng kho tài liệu bảo mật"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-10 flex-1">
          {!isUnlocked ? (
            /* Locked State / Passcode Entry */
            <div className="max-w-md mx-auto py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full border border-black mx-auto flex items-center justify-center bg-[#f4f3f0]">
                <span className="material-symbols-outlined text-[32px] text-black">
                  shield_locked
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-headline-sm text-[22px] text-black">
                  Xác thực danh tính Hội đồng
                </h3>
                <p className="font-body-sm text-[13px] text-[#464742] leading-relaxed">
                  Khu vực lưu trữ các biên bản kiểm toán độc lập EY/KPMG và chứng thư thẩm quyền pháp lý dành riêng cho các thành viên HĐQT đã ký kết NDA.
                </p>
              </div>

              <form onSubmit={handleUnlock} className="space-y-4 text-left">
                <div className="space-y-1">
                  <label className="font-label-sm text-[11px] uppercase tracking-wider text-black block">
                    Mật mã phiên làm việc bảo mật
                  </label>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setErrorMsg('');
                    }}
                    placeholder="Nhập mã xác thực (VD: MGR-2025)"
                    className="w-full bg-[#f4f3f0] border border-black px-3 py-2.5 font-mono text-[14px] text-black focus:outline-none"
                    autoFocus
                  />
                  {errorMsg && (
                    <p className="font-label-sm text-[11px] text-red-600 pt-1">
                      {errorMsg}
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white py-2.5 font-label-md text-[11px] uppercase tracking-wider hover:bg-[#5a614f] transition-colors cursor-pointer"
                  >
                    Mở khóa hồ sơ
                  </button>
                </div>
              </form>

              {/* One-tap Demo Helper */}
              <div className="pt-4 border-t border-[#c7c7c0]/40 space-y-2">
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#777871] block">
                  TRẢI NGHIỆM THẨM ĐỊNH MẪU DÀNH CHO KHÁCH THĂM QUAN
                </span>
                <button
                  onClick={handleQuickDemo}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#dce2cc] text-[#181d10] font-label-sm text-[11px] uppercase tracking-wider hover:bg-[#c3c9b4] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[15px]">key</span>
                  <span>Mở khóa ngay với mật mã: MGR-2025</span>
                </button>
              </div>
            </div>
          ) : (
            /* Unlocked State: Document Viewer */
            <div className="space-y-8 animate-fadeIn">
              {/* Top Unlocked Banner */}
              <div className="flex flex-wrap justify-between items-center p-4 bg-[#dce2cc] text-[#181d10] border border-[#5f6553]/30 gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span className="font-label-sm text-[11px] uppercase tracking-widest font-semibold">
                    PHIÊN TRUY CẬP ĐÃ XÁC THỰC // QUYỀN TRUY CẬP CẤP ĐỘ I
                  </span>
                </div>
                <button
                  onClick={handleLockVault}
                  className="font-label-sm text-[11px] uppercase tracking-wider underline hover:text-black cursor-pointer"
                >
                  Khóa lại phiên
                </button>
              </div>

              {/* Documents Tabs & Viewer */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Doc List (4 cols) */}
                <div className="md:col-span-4 space-y-3">
                  <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] block pb-1 border-b border-[#c7c7c0]/30 font-semibold">
                    DANH MỤC HỒ SƠ LƯU TRỮ
                  </span>

                  <div className="space-y-2">
                    {CONFIDENTIAL_VAULT_DOCUMENTS.map((doc) => {
                      const isSelected = doc.id === activeDocId;
                      return (
                        <div
                          key={doc.id}
                          onClick={() => setActiveDocId(doc.id)}
                          className={`p-3 border text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'border-black bg-white shadow-sm'
                              : 'border-[#c7c7c0]/40 bg-[#f4f3f0] hover:bg-[#efeeeb]'
                          }`}
                        >
                          <span className="font-label-sm text-[10px] text-[#5a614f] block mb-1">
                            {doc.code}
                          </span>
                          <h4 className="font-headline-sm text-[14px] text-black font-normal leading-snug">
                            {doc.title}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Active Document Details (8 cols) */}
                <div className="md:col-span-8 bg-white p-6 border border-[#c7c7c0]/40 space-y-6">
                  <div className="space-y-2 border-b border-[#c7c7c0]/30 pb-4">
                    <div className="flex justify-between items-baseline">
                      <span className="font-label-sm text-[10px] uppercase tracking-widest text-red-700 font-semibold bg-red-50 px-2 py-0.5 border border-red-200">
                        {activeDoc.classification}
                      </span>
                      <span className="font-label-sm text-[11px] text-[#777871]">
                        Ngày phát hành: {activeDoc.date}
                      </span>
                    </div>

                    <h3 className="font-display-lg text-[22px] md:text-[26px] text-black leading-snug">
                      {activeDoc.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] font-body-sm">
                    <div>
                      <span className="text-[#777871] block font-label-sm text-[10px] uppercase">
                        ĐƠN VỊ KIỂM ĐỊNH PHÁP NHÂN
                      </span>
                      <strong className="text-black font-medium">{activeDoc.auditor}</strong>
                    </div>
                    <div>
                      <span className="text-[#777871] block font-label-sm text-[10px] uppercase">
                        TÌNH TRẠNG CHỨNG THỰC
                      </span>
                      <strong className="text-[#5a614f] font-medium">{activeDoc.status}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#c7c7c0]/20">
                    <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#777871] block">
                      PHẠM VI THẨM ĐỊNH &amp; GIÁM ĐỊNH
                    </span>
                    <p className="font-body-sm text-[13px] text-[#1a1c1a] leading-relaxed">
                      {activeDoc.scope}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#c7c7c0]/20">
                    <span className="font-label-sm text-[10px] uppercase tracking-widest text-black font-semibold block">
                      CÁC KẾT LUẬN QUAN TRỌNG ĐÃ CHỨNG THỰC
                    </span>
                    <div className="space-y-2">
                      {activeDoc.keyFindings.map((finding, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-[13px]">
                          <span className="material-symbols-outlined text-[16px] text-[#5a614f] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span className="text-[#1a1c1a] font-normal">{finding}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#c7c7c0]/30 flex flex-wrap justify-between items-center gap-3">
                    <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#777871]">
                      MÃ KIỂM ĐỊNH: SHA256-CERT-CH-910284
                    </span>
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-black font-label-md text-[11px] uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">print</span>
                      <span>Trích xuất chứng chỉ (PDF)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#f4f3f0] border-t border-[#c7c7c0]/40 flex justify-between items-center">
          <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#464742]">
            HỆ THỐNG KIỂM SOÁT BẢO MẬT MONOGRAM STRATEGIC ADVISORY
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black text-white font-label-md text-[11px] uppercase tracking-wider hover:bg-[#5a614f] cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
