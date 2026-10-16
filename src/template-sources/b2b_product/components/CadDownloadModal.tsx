import React, { useState } from 'react';
import { Equipment } from '../data/equipment';

interface CadDownloadModalProps {
  product: Equipment | null;
  onClose: () => void;
}

export const CadDownloadModal: React.FC<CadDownloadModalProps> = ({ product, onClose }) => {
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [completedFile, setCompletedFile] = useState<string | null>(null);

  if (!product) return null;

  const handleStartDownload = (fileName: string) => {
    setDownloadingFile(fileName);
    setDownloadProgress(0);
    setCompletedFile(null);

    let current = 0;
    const interval = setInterval(() => {
      current += 25;
      setDownloadProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setDownloadingFile(null);
        setCompletedFile(fileName);

        // Trigger dummy file download
        const blob = new Blob(
          [
            `ISO-10303-21;\nHEADER;\nFILE_DESCRIPTION(('VULCAN PRECISION INDUSTRIAL 3D CAD DATA'),'2;1');\nFILE_NAME('${fileName}','2025-10-15',('VULCAN ENGINEERING'),('PRECISION INDUSTRIAL'),'OpenCASCADE','VULCAN-STEP-V4',#1);\nFILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));\nENDSEC;\nDATA;\n#10=APPLICATION_CONTEXT('core data for precision manufacturing');\nENDSEC;\nEND-ISO-10303-21;`
          ],
          { type: 'text/plain' }
        );
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
      }
    }, 180);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0d0e11]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#121316] border border-[#f45b1c] w-full max-w-2xl shadow-2xl relative">
        {/* Header */}
        <div className="p-4 bg-[#16181d] border-b border-[#343538] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f45b1c]">
              deployed_code
            </span>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e3e2e6] font-semibold">
              KHO TÀI LIỆU CAD / STEP // {product.ref}
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
          <p className="font-['Hanken_Grotesk'] text-sm text-[#c4c7cc] mb-4">
            Bản vẽ 3D STEP và sơ đồ mặt bằng AutoCAD chính xác đến từng millimet, đã bao gồm vùng an toàn bảo trì và hướng cấp điện, khí nén.
          </p>

          {/* Download list */}
          <div className="flex flex-col gap-3 mb-6">
            {product.cadFiles.map((file, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#1b1b1f] border border-[#343538] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#e3e2e6] font-medium">
                      {file.name}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[9px] bg-[#292a2d] text-[#ffb59c] px-1.5 py-0.5">
                      {file.format}
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#707684] mt-1 block">
                    KÍCH THƯỚC: {file.sizeMb} MB // SHA256 VERIFIED
                  </span>
                </div>

                <button
                  disabled={downloadingFile === file.name}
                  onClick={() => handleStartDownload(file.name)}
                  className="px-4 py-2 bg-[#f45b1c] hover:bg-[#d94e16] disabled:bg-[#343538] text-white font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-medium cursor-pointer inline-flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span>{downloadingFile === file.name ? 'ĐANG TẢI...' : 'TẢI TẬP TIN'}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Download progress bar */}
          {downloadingFile && (
            <div className="p-3 bg-[#16181d] border border-[#f45b1c] mb-4">
              <div className="flex justify-between text-xs font-['JetBrains_Mono'] mb-1">
                <span className="text-[#c4c7cc]">Đang giải nén tập tin CAD từ server...</span>
                <span className="text-[#f45b1c]">{downloadProgress}%</span>
              </div>
              <div className="w-full bg-[#0d0e11] h-1.5 overflow-hidden">
                <div
                  className="bg-[#f45b1c] h-full transition-all duration-200"
                  style={{ width: `${downloadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {completedFile && (
            <div className="p-3 bg-green-950/40 border border-green-700/60 text-xs font-['JetBrains_Mono'] text-green-300 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span>Đã tải thành công tập tin: {completedFile}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#16181d] border-t border-[#343538] flex justify-between items-center text-[11px] font-['JetBrains_Mono'] text-[#707684]">
          <span>CHUẨN GIAO TIẾP: AP214 / AP242 STEP</span>
          <button
            onClick={onClose}
            className="text-[#c4c7cc] hover:text-white cursor-pointer uppercase"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
