import React, { useState, useEffect, useRef } from 'react';
import { CRMService } from '../api/crm.service';
import { CRMProduct, CRMDeal } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { X, Plus, Printer, QrCode, Trash2 } from 'lucide-react';

interface QuoteGeneratorProps {
  deal: CRMDeal;
  onClose: () => void;
  onQuoteCreated: () => void;
}

export default function QuoteGenerator({ deal, onClose, onQuoteCreated }: QuoteGeneratorProps) {
  const { user } = useAuth();
  const [products, setProducts] = useState<CRMProduct[]>([]);
  const [selectedItems, setSelectedItems] = useState<
    Array<{ product: CRMProduct; quantity: number }>
  >([]);
  const [loading, setLoading] = useState(false);

  // Custom item state (allows adding ad-hoc line items even if crm_products is empty)
  const [customName, setCustomName] = useState('');
  const [customDesc, setCustomDesc] = useState('');
  const [customPrice, setCustomPrice] = useState<number>(deal.value || 5000000);

  // VietQR Bank Info (loaded from tenant theme_config or editable inline)
  const [bankInfo, setBankInfo] = useState({
    bankBin: '970436', // Vietcombank default
    bankName: 'Vietcombank',
    accountNo: '',
    accountName: '',
  });

  const printRef = useRef<HTMLDivElement>(null);

  const [tenantBrand, setTenantBrand] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
  }>({
    name: user?.tenant?.name || 'DOANH NGHIỆP CỦA BẠN',
    email: user?.email || 'contact@doanhnghiep.vn',
    phone: '0901 234 567',
    address: 'Việt Nam',
  });

  useEffect(() => {
    loadProducts();
    loadTenantInfo();
  }, [user?.tenant_id]);

  const loadTenantInfo = async () => {
    if (!user?.tenant_id) return;
    try {
      const { supabase } = await import('@/lib/supabase');
      const { data } = await supabase
        .from('tenants')
        .select('name, contact_info, theme_config')
        .eq('id', user.tenant_id)
        .single();
      if (data) {
        setTenantBrand({
          name: data.name || user?.tenant?.name || 'DOANH NGHIỆP CỦA BẠN',
          email: data.contact_info?.email || user?.email || 'contact@doanhnghiep.vn',
          phone: data.contact_info?.phone || '0901 234 567',
          address: data.contact_info?.address || 'Việt Nam',
        });
        const tc = data.theme_config || {};
        const paymentCfg = tc.payment_config || {};
        setBankInfo({
          bankBin: paymentCfg.bank_bin || tc.bank_bin || '970436',
          bankName: paymentCfg.bank_name || tc.bank_name || 'Vietcombank',
          accountNo: paymentCfg.bank_account_no || tc.bank_account_no || '',
          accountName:
            paymentCfg.bank_account_name ||
            tc.bank_account_name ||
            data.name ||
            'DOANH NGHIỆP',
        });
      }
    } catch (e) {
      console.error('Failed to load tenant brand info', e);
    }
  };

  const loadProducts = async () => {
    if (!user?.tenant_id) return;
    try {
      const prods = await CRMService.getProducts(user.tenant_id);
      setProducts(prods);
    } catch (error) {
      console.error('Lỗi khi tải danh mục sản phẩm', error);
    }
  };

  const handleAddItem = (product: CRMProduct) => {
    const existing = selectedItems.find(i => i.product.id === product.id);
    if (existing) {
      setSelectedItems(
        selectedItems.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setSelectedItems([...selectedItems, { product, quantity: 1 }]);
    }
  };

  const handleAddCustomItem = () => {
    if (!customName.trim()) {
      toast.error('Vui lòng nhập tên hạng mục dịch vụ.');
      return;
    }
    const syntheticProduct: CRMProduct = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      description: customDesc.trim() || 'Hạng mục theo yêu cầu',
      price: Number(customPrice) || 0,
      created_at: new Date().toISOString(),
    };
    setSelectedItems(prev => [...prev, { product: syntheticProduct, quantity: 1 }]);
    setCustomName('');
    setCustomDesc('');
  };

  const handleRemoveItem = (productId: string) => {
    setSelectedItems(selectedItems.filter(i => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, qty: number) => {
    if (qty < 1) return;
    setSelectedItems(
      selectedItems.map(i => (i.product.id === productId ? { ...i, quantity: qty } : i))
    );
  };

  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const quoteCode = `QTE-${deal.id.slice(0, 6).toUpperCase()}`;
  const vietQrUrl =
    bankInfo.accountNo && totalAmount > 0
      ? `https://img.vietqr.io/image/${bankInfo.bankBin}-${bankInfo.accountNo}-compact2.png?amount=${totalAmount}&addInfo=${encodeURIComponent(
          `TT ${quoteCode}`
        )}&accountName=${encodeURIComponent(bankInfo.accountName)}`
      : null;

  const handleGenerateQuote = async () => {
    if (selectedItems.length === 0) {
      toast.error('Vui lòng thêm ít nhất 1 hạng mục báo giá.');
      return;
    }
    setLoading(true);
    try {
      const itemsPayload = selectedItems.map(i => ({
        product_id: i.product.id,
        product_name: i.product.name,
        quantity: i.quantity,
        unit_price: i.product.price,
        total: i.product.price * i.quantity,
      }));
      if (!user) return;
      await CRMService.createQuote(user.tenant_id || '', deal.id, itemsPayload);

      if (printRef.current) {
        const printWindow = window.open('', '_blank', 'width=960,height=840');
        if (printWindow) {
          printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="vi">
              <head>
                <meta charset="utf-8" />
                <title>Báo giá ${quoteCode} - ${deal.contact?.name || deal.title}</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                  .print-hidden { display: none !important; }
                  .print-visible { display: inline !important; }
                  @page { size: A4; margin: 12mm; }
                  body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 0; color: #0f172a; }
                </style>
              </head>
              <body>
                ${printRef.current.innerHTML}
                <script>
                  window.onload = function() {
                    setTimeout(function() {
                      window.print();
                      window.close();
                    }, 400);
                  };
                </script>
              </body>
            </html>
          `);
          printWindow.document.close();
        } else {
          window.print();
        }
      }
      toast.success('Đã cập nhật giá trị cơ hội và xuất bản in A4.');
      onQuoteCreated();
    } catch (error) {
      console.error(error);
      toast.error('Không thể tạo báo giá.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/40 backdrop-blur-xs p-4">
      <div className="bg-[#FAF9F6] w-full max-w-6xl h-[92vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200/90">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-slate-200/80">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Soạn Báo Giá Dịch Vụ — {deal.title}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Chọn từ danh mục hoặc nhập hạng mục tùy chỉnh, tự động tính tổng và đính kèm mã VietQR
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-800 hover:bg-slate-50 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body: Left Controls - Right A4 Preview */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel */}
          <div className="w-full lg:w-[360px] bg-white border-r border-slate-200/80 p-5 overflow-y-auto custom-scrollbar space-y-6 shrink-0">
            {/* Add Custom Item */}
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="text-xs font-semibold text-slate-900">
                Thêm hạng mục báo giá tùy chỉnh
              </div>
              <input
                type="text"
                value={customName}
                onChange={e => setCustomName(e.target.value)}
                placeholder="Tên dịch vụ / sản phẩm..."
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200/90 rounded-lg outline-none focus:border-slate-400"
              />
              <input
                type="text"
                value={customDesc}
                onChange={e => setCustomDesc(e.target.value)}
                placeholder="Mô tả chi tiết / quy cách..."
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200/90 rounded-lg outline-none focus:border-slate-400"
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  value={customPrice}
                  onChange={e => setCustomPrice(Number(e.target.value))}
                  placeholder="Đơn giá (VNĐ)"
                  className="flex-1 px-3 py-2 text-xs font-mono bg-white border border-slate-200/90 rounded-lg outline-none focus:border-slate-400"
                />
                <button
                  type="button"
                  onClick={handleAddCustomItem}
                  className="inline-flex items-center gap-1 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Thêm</span>
                </button>
              </div>
            </div>

            {/* Catalog Items */}
            <div>
              <h3 className="font-semibold text-slate-800 mb-2.5 text-xs">
                Danh mục có sẵn ({products.length})
              </h3>
              {products.length === 0 ? (
                <div className="text-xs text-slate-400 p-4 rounded-xl border border-dashed border-slate-200 text-center">
                  Chưa có gói cố định. Bạn có thể dùng khung thêm hạng mục tùy chỉnh bên trên.
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {products.map(prod => (
                    <div
                      key={prod.id}
                      onClick={() => handleAddItem(prod)}
                      className="border border-slate-200/80 p-3 rounded-xl hover:border-slate-400 bg-white transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-slate-900 text-xs">{prod.name}</h4>
                        <span className="font-mono tabular-nums font-semibold text-slate-900 text-xs shrink-0">
                          {new Intl.NumberFormat('vi-VN').format(prod.price)}đ
                        </span>
                      </div>
                      {prod.description && (
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                          {prod.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* VietQR Optional Config */}
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                <QrCode className="w-3.5 h-3.5 text-slate-600" />
                <span>Tài khoản nhận thanh toán (VietQR)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={bankInfo.bankName}
                  onChange={e => setBankInfo({ ...bankInfo, bankName: e.target.value })}
                  placeholder="Tên NH (VD: VCB)"
                  className="px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg outline-none"
                />
                <input
                  type="text"
                  value={bankInfo.bankBin}
                  onChange={e => setBankInfo({ ...bankInfo, bankBin: e.target.value })}
                  placeholder="Mã BIN (970436)"
                  className="px-2.5 py-1.5 text-xs font-mono bg-white border border-slate-200 rounded-lg outline-none"
                />
              </div>
              <input
                type="text"
                value={bankInfo.accountNo}
                onChange={e => setBankInfo({ ...bankInfo, accountNo: e.target.value })}
                placeholder="Nhập Số tài khoản để hiện QR trên báo giá..."
                className="w-full px-2.5 py-1.5 text-xs font-mono bg-white border border-slate-200 rounded-lg outline-none"
              />
              <input
                type="text"
                value={bankInfo.accountName}
                onChange={e => setBankInfo({ ...bankInfo, accountName: e.target.value })}
                placeholder="Chủ tài khoản"
                className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg outline-none"
              />
            </div>
          </div>

          {/* Right Panel: A4 Paper Preview */}
          <div className="flex-1 p-6 overflow-y-auto bg-slate-100/70 flex flex-col items-center custom-scrollbar">
            <div
              ref={printRef}
              className="bg-white p-10 shadow-[0_8px_30px_rgba(15,23,42,0.06)] w-full max-w-[21cm] min-h-[29.7cm] border border-slate-200/80 relative print-area flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start border-b border-slate-900 pb-6 mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                      BẢNG BÁO GIÁ
                    </h1>
                    <p className="text-xs font-mono text-slate-500 mt-2">Số: {quoteCode}</p>
                    <p className="text-xs font-mono text-slate-500">
                      Ngày lập: {new Date().toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                  <div className="text-right max-w-[260px]">
                    <p className="font-bold text-slate-900 text-sm uppercase">
                      {tenantBrand.name}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">{tenantBrand.email}</p>
                    <p className="text-xs font-mono text-slate-600">{tenantBrand.phone}</p>
                    {tenantBrand.address && (
                      <p className="text-xs text-slate-500 mt-0.5">{tenantBrand.address}</p>
                    )}
                  </div>
                </div>

                {/* Recipient */}
                <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                    Kính gửi Quý khách hàng
                  </div>
                  <p className="text-base font-semibold text-slate-900">
                    {deal.contact?.name || deal.title}
                  </p>
                  {deal.contact?.phone && (
                    <p className="text-xs font-mono text-slate-600 mt-1">
                      Điện thoại: {deal.contact.phone}
                    </p>
                  )}
                  {deal.contact?.website && (
                    <p className="text-xs text-slate-600 mt-0.5">Website: {deal.contact.website}</p>
                  )}
                </div>

                {/* Line Items Table */}
                <table className="w-full mb-8 text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-900 text-slate-900 text-xs">
                      <th className="py-3 font-semibold w-10 text-center">STT</th>
                      <th className="py-3 font-semibold">Nội dung hạng mục</th>
                      <th className="py-3 font-semibold text-center w-20">SL</th>
                      <th className="py-3 font-semibold text-right w-32">Đơn giá</th>
                      <th className="py-3 font-semibold text-right w-36">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {selectedItems.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-10 text-slate-400">
                          Chưa có hạng mục nào. Hãy thêm hạng mục ở cột bên trái.
                        </td>
                      </tr>
                    ) : (
                      selectedItems.map((item, idx) => (
                        <tr key={item.product.id} className="group">
                          <td className="py-3.5 font-mono text-slate-500 text-center">
                            {idx + 1}
                          </td>
                          <td className="py-3.5 pr-3">
                            <p className="font-semibold text-slate-900">{item.product.name}</p>
                            {item.product.description && (
                              <p className="text-[11px] text-slate-500 mt-0.5">
                                {item.product.description}
                              </p>
                            )}
                          </td>
                          <td className="py-3.5 text-center font-mono">
                            <div className="flex items-center justify-center gap-1.5 print-hidden">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="w-5 h-5 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-semibold text-slate-700"
                              >
                                -
                              </button>
                              <span className="font-semibold w-5 text-center">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="w-5 h-5 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-semibold text-slate-700"
                              >
                                +
                              </button>
                            </div>
                            <span className="hidden print-visible font-semibold">
                              {item.quantity}
                            </span>
                          </td>
                          <td className="py-3.5 text-right font-mono tabular-nums text-slate-700">
                            {new Intl.NumberFormat('vi-VN').format(item.product.price)}đ
                          </td>
                          <td className="py-3.5 text-right font-mono tabular-nums font-semibold text-slate-900 relative">
                            {new Intl.NumberFormat('vi-VN').format(
                              item.product.price * item.quantity
                            )}
                            đ
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(item.product.id)}
                              className="ml-2 text-slate-300 hover:text-rose-600 print-hidden inline-flex align-middle"
                              title="Xóa dòng"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>

                {/* Total & VietQR Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pt-6 border-t border-slate-900">
                  {vietQrUrl ? (
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50/60">
                      <img
                        src={vietQrUrl}
                        alt="VietQR Payment"
                        className="w-24 h-24 object-contain rounded-lg border border-slate-200 bg-white p-1"
                      />
                      <div className="text-xs space-y-0.5">
                        <div className="font-semibold text-slate-900">Quét mã VietQR thanh toán</div>
                        <div className="text-slate-600">{bankInfo.bankName}</div>
                        <div className="font-mono font-semibold text-slate-900">
                          STK: {bankInfo.accountNo}
                        </div>
                        <div className="text-[11px] text-slate-500 uppercase">
                          {bankInfo.accountName}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400">
                      Ghi chú: Báo giá có hiệu lực trong vòng 15 ngày kể từ ngày lập.
                    </div>
                  )}

                  <div className="w-full sm:w-64 ml-auto">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-slate-500 font-semibold text-xs uppercase">
                        Tổng thanh toán
                      </span>
                      <span className="text-xl font-mono tabular-nums font-bold text-slate-900">
                        {new Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                          maximumFractionDigits: 0,
                        }).format(totalAmount)}
                      </span>
                    </div>
                    <p className="text-right text-[11px] text-slate-400">
                      Đã bao gồm đầy đủ hạng mục liệt kê phía trên
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-8 mt-12 border-t border-slate-100 flex justify-between items-center text-[11px] text-slate-400">
                <span>{tenantBrand.name}</span>
                <span>Trân trọng cảm ơn sự hợp tác của Quý khách!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-white border-t border-slate-200/80 flex justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Đóng
          </button>
          <button
            type="button"
            onClick={handleGenerateQuote}
            disabled={loading || selectedItems.length === 0}
            className="inline-flex items-center gap-2 px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-all disabled:opacity-40"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{loading ? 'Đang lưu...' : 'Lưu vào CRM & In Báo Giá A4'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
