"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import { EcommerceService } from '../api/ecommerce.service';
import { StoreProduct, StoreOrder, StoreSettings } from '../types';
import {
  ShoppingBag,
  Package,
  ClipboardList,
  CreditCard,
  Plus,
  Search,
  Edit2,
  Trash2,
  Bot,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Truck,
  X,
  Eye,
  Sparkles,
  QrCode,
  Phone,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

const BANK_LIST = [
  { bin: 'MB', name: 'MBBank - Ngân hàng Quân Đội' },
  { bin: 'VCB', name: 'Vietcombank - Ngoại thương VN' },
  { bin: 'TCB', name: 'Techcombank - Kỹ thương VN' },
  { bin: 'ACB', name: 'ACB - Ngân hàng Á Châu' },
  { bin: 'BIDV', name: 'BIDV - Đầu tư & Phát triển VN' },
  { bin: 'ICB', name: 'VietinBank - Công thương VN' },
  { bin: 'VPB', name: 'VPBank - Việt Nam Thịnh Vượng' },
  { bin: 'TPB', name: 'TPBank - Tiên Phong' },
];

const ORDER_STATUS_MAP: Record<string, { label: string; color: string }> = {
  pending: { label: 'Chờ xác nhận', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  confirmed: { label: 'Đã xác nhận', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  shipping: { label: 'Đang giao hàng', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  completed: { label: 'Hoàn thành', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  cancelled: { label: 'Đã hủy', color: 'bg-rose-100 text-rose-800 border-rose-200' },
};

const PAYMENT_STATUS_MAP: Record<string, { label: string; color: string }> = {
  unpaid: { label: 'Chưa thanh toán', color: 'bg-slate-100 text-slate-700' },
  paid: { label: 'Đã thanh toán', color: 'bg-emerald-100 text-emerald-700' },
  refunded: { label: 'Đã hoàn tiền', color: 'bg-rose-100 text-rose-700' },
};

export default function EcommerceDashboard() {
  const { user } = useAuth();
  const tenantId = user?.tenant_id || '00000000-0000-0000-0000-000000000000';
  const tenantSlug = user?.tenant?.slug || 'tavi';

  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'settings'>('orders');
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [orders, setOrders] = useState<StoreOrder[]>([]);
  const [settings, setSettings] = useState<StoreSettings>({
    bank_bin: 'MB',
    bank_name: 'MBBank - Ngân hàng Quân Đội',
    bank_account: '0901234567',
    bank_owner: 'TAVI STORE DEMO',
    shipping_fee: 30000,
    free_shipping_threshold: 500000,
    store_notice: 'Miễn phí vận chuyển cho đơn từ 500.000đ',
    auto_sync_crm: true,
  });

  const [loading, setLoading] = useState(true);
  const [syncingAi, setSyncingAi] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);

  // Filters
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>('all');
  const [productSearch, setProductSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Modals
  const [selectedOrder, setSelectedOrder] = useState<StoreOrder | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<StoreProduct | null>(null);
  const [productForm, setProductForm] = useState({
    name: '',
    sku: '',
    category: 'Thời trang Nữ',
    price: 0,
    compare_price: 0,
    stock: 20,
    imageUrl: '',
    variantsText: 'Size S, Size M, Size L',
    description: '',
    is_featured: false,
    status: 'active' as 'active' | 'draft' | 'out_of_stock',
  });

  useEffect(() => {
    if (tenantId) {
      loadAllData();
    }
  }, [tenantId]);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [prods, ords, st] = await Promise.all([
        EcommerceService.getProducts(tenantId),
        EcommerceService.getOrders(tenantId),
        EcommerceService.getStoreSettings(tenantId),
      ]);
      setProducts(prods);
      setOrders(ords);
      setSettings(st);
    } catch (e) {
      console.error('Error loading ecommerce data:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreateProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: '',
      sku: 'SP-' + Math.floor(100 + Math.random() * 900),
      category: 'Sản phẩm nổi bật',
      price: 350000,
      compare_price: 450000,
      stock: 25,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      variantsText: 'Tiêu chuẩn',
      description: '',
      is_featured: true,
      status: 'active',
    });
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (p: StoreProduct) => {
    setEditingProduct(p);
    setProductForm({
      name: p.name,
      sku: p.sku || '',
      category: p.category || 'Sản phẩm nổi bật',
      price: p.price,
      compare_price: p.compare_price || 0,
      stock: p.stock,
      imageUrl: p.images?.[0] || '',
      variantsText: (p.variants || []).map(v => v.name).join(', '),
      description: p.description || '',
      is_featured: p.is_featured,
      status: p.status,
    });
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const variants = productForm.variantsText
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .map(name => ({ name }));

      await EcommerceService.saveProduct(tenantId, {
        id: editingProduct?.id,
        name: productForm.name,
        sku: productForm.sku,
        category: productForm.category,
        price: Number(productForm.price),
        compare_price: Number(productForm.compare_price),
        stock: Number(productForm.stock),
        images: productForm.imageUrl ? [productForm.imageUrl] : [],
        variants,
        description: productForm.description,
        is_featured: productForm.is_featured,
        status: productForm.status,
      });

      toast.success(editingProduct ? 'Đã cập nhật sản phẩm!' : 'Đã thêm sản phẩm mới!');
      setIsProductModalOpen(false);
      const updated = await EcommerceService.getProducts(tenantId);
      setProducts(updated);
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi lưu sản phẩm');
    }
  };

  const handleDeleteProduct = async (p: StoreProduct) => {
    if (!confirm(`Bạn có chắc muốn xóa sản phẩm "${p.name}"?`)) return;
    try {
      await EcommerceService.deleteProduct(tenantId, p.id);
      toast.success('Đã xóa sản phẩm');
      setProducts(prev => prev.filter(item => item.id !== p.id));
    } catch (err) {
      toast.error('Không thể xóa sản phẩm');
    }
  };

  const handleSyncToAi = async () => {
    setSyncingAi(true);
    try {
      const count = await EcommerceService.syncProductsToChatbotKnowledge(tenantId);
      toast.success(`Đã nạp ${count} sản phẩm vào bộ nhớ AI Chatbot của cửa hàng!`);
    } catch (err) {
      toast.error('Lỗi đồng bộ sản phẩm sang AI Chatbot');
    } finally {
      setSyncingAi(false);
    }
  };

  const handleOrderStatusChange = async (orderId: string, status: StoreOrder['status']) => {
    try {
      await EcommerceService.updateOrder(tenantId, orderId, { status });
      setOrders(prev => prev.map(o => (o.id === orderId ? { ...o, status } : o)));
      if (selectedOrder?.id === orderId) {
        setSelectedOrder(prev => (prev ? { ...prev, status } : null));
      }
      // Refresh products so any restocked/deducted inventory is reflected immediately
      const freshProducts = await EcommerceService.getProducts(tenantId);
      setProducts(freshProducts);
      toast.success(
        status === 'cancelled'
          ? 'Đã hủy đơn & tự động hoàn trả tồn kho!'
          : 'Đã cập nhật trạng thái đơn hàng'
      );
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi cập nhật đơn hàng');
    }
  };

  const handlePaymentStatusChange = async (orderId: string, payment_status: StoreOrder['payment_status']) => {
    try {
      await EcommerceService.updateOrder(tenantId, orderId, { payment_status });
      setOrders(prev => prev.map(o => (o.id === orderId ? { ...o, payment_status } : o)));
      if (selectedOrder?.id === orderId) {
        setSelectedOrder(prev => (prev ? { ...prev, payment_status } : null));
      }
      toast.success('Đã cập nhật trạng thái thanh toán');
    } catch (err) {
      toast.error('Lỗi cập nhật thanh toán');
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      await EcommerceService.updateStoreSettings(tenantId, settings);
      toast.success('Đã lưu cấu hình thanh toán & vận chuyển của cửa hàng!');
    } catch (err) {
      toast.error('Lỗi lưu cấu hình cửa hàng');
    } finally {
      setSavingSettings(false);
    }
  };

  // KPIs
  const totalRevenue = orders
    .filter(o => o.status !== 'cancelled')
    .reduce((sum, o) => sum + Number(o.total_amount || 0), 0);
  const pendingOrdersCount = orders.filter(o => o.status === 'pending').length;
  const activeProductsCount = products.filter(p => p.status === 'active').length;
  const lowStockCount = products.filter(p => p.stock <= 5).length;

  const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean)));

  const filteredOrders = orders.filter(o => {
    if (orderStatusFilter !== 'all' && o.status !== orderStatusFilter) return false;
    if (!orderSearch) return true;
    const q = orderSearch.toLowerCase();
    return (
      o.order_code?.toLowerCase().includes(q) ||
      o.customer_name?.toLowerCase().includes(q) ||
      o.customer_phone?.includes(q)
    );
  });

  const filteredProducts = products.filter(p => {
    if (categoryFilter !== 'all' && p.category !== categoryFilter) return false;
    if (!productSearch) return true;
    const q = productSearch.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      (p.sku || '').toLowerCase().includes(q) ||
      (p.category || '').toLowerCase().includes(q)
    );
  });

  const formatVND = (val: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val || 0);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6 font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Hệ thống Bán hàng & Quản lý Kho (Storefront)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Quản lý sản phẩm, đơn hàng trên website{' '}
              <Link href={`/${tenantSlug}`} target="_blank" className="text-indigo-600 font-bold hover:underline">
                /{tenantSlug}
              </Link>{' '}
              và tự động đồng bộ về CRM & AI Chatbot.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleSyncToAi}
            disabled={syncingAi}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 transition-colors cursor-pointer"
          >
            <Bot className="w-4 h-4" />
            <span>{syncingAi ? 'Đang nạp AI...' : 'Nạp SP vào AI Chatbot'}</span>
          </button>

          <Link
            href={`/${tenantSlug}#cua-hang`}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-colors"
          >
            <span>Mở Cửa Hàng (/{tenantSlug})</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tổng doanh thu đơn</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{formatVND(totalRevenue)}</p>
            <p className="text-xs text-emerald-600 font-semibold mt-1">{orders.length} đơn hàng trên web</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CreditCard className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Đơn chờ xác nhận</p>
            <p className="text-2xl font-black text-amber-600 mt-1">{pendingOrdersCount}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Tự động đẩy sang CRM</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <ClipboardList className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sản phẩm đang bán</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">{activeProductsCount}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Trên tổng {products.length} mã SP</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Package className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sắp hết hàng (≤ 5)</p>
            <p className="text-2xl font-black text-rose-600 mt-1">{lowStockCount}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Cần nhập thêm tồn kho</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2 bg-slate-200/60 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'orders' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            <span>Đơn hàng ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'products' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Sản phẩm & Kho ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'settings' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Cấu hình VietQR Chủ Shop & Ship</span>
          </button>
        </div>

        {activeTab === 'products' && (
          <button
            onClick={handleOpenCreateProduct}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm Sản phẩm mới</span>
          </button>
        )}
      </div>

      {/* TAB 1: ORDERS */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-50/50">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={orderSearch}
                onChange={e => setOrderSearch(e.target.value)}
                placeholder="Tìm mã đơn, tên khách, SĐT..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-1.5 flex-wrap w-full sm:w-auto">
              {[
                { key: 'all', label: 'Tất cả' },
                { key: 'pending', label: 'Chờ xác nhận' },
                { key: 'confirmed', label: 'Đã xác nhận' },
                { key: 'shipping', label: 'Đang giao' },
                { key: 'completed', label: 'Hoàn thành' },
                { key: 'cancelled', label: 'Đã hủy' },
              ].map(st => (
                <button
                  key={st.key}
                  onClick={() => setOrderStatusFilter(st.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    orderStatusFilter === st.key
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="p-4">Mã Đơn</th>
                  <th className="p-4">Khách hàng</th>
                  <th className="p-4">Sản phẩm</th>
                  <th className="p-4">Tổng tiền</th>
                  <th className="p-4">Thanh toán</th>
                  <th className="p-4">Trạng thái đơn</th>
                  <th className="p-4 text-right">Chi tiết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="p-12 text-center text-slate-400">
                      Đang tải danh sách đơn hàng...
                    </td>
                  </tr>
                ) : filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-12 text-center text-slate-400">
                      Chưa có đơn hàng nào khớp bộ lọc.
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map(order => (
                    <tr key={order.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4">
                        <span className="font-mono font-bold text-indigo-600">#{order.order_code}</span>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {new Date(order.created_at).toLocaleString('vi-VN')}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900">{order.customer_name}</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <Phone className="w-3 h-3" /> {order.customer_phone}
                        </div>
                        {order.customer_address && (
                          <div className="text-xs text-slate-400 truncate max-w-[200px] mt-0.5" title={order.customer_address}>
                            {order.customer_address}
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="space-y-1 max-w-[240px]">
                          {(order.items || []).slice(0, 2).map((item, idx) => (
                            <div key={idx} className="text-xs text-slate-700 truncate">
                              • <span className="font-semibold">{item.name}</span>{' '}
                              {item.variant ? `(${item.variant})` : ''} <strong className="text-indigo-600">x{item.quantity}</strong>
                            </div>
                          ))}
                          {(order.items || []).length > 2 && (
                            <div className="text-[11px] text-slate-400">
                              +{(order.items || []).length - 2} sản phẩm khác
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-extrabold text-slate-900">{formatVND(order.total_amount)}</div>
                        <div className="text-[11px] text-slate-500 uppercase font-semibold">
                          {order.payment_method === 'bank_transfer' ? 'Chuyển khoản VietQR' : 'Thu hộ COD'}
                        </div>
                      </td>
                      <td className="p-4">
                        <select
                          value={order.payment_status}
                          onChange={e => handlePaymentStatusChange(order.id, e.target.value as any)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold border-0 outline-none cursor-pointer ${
                            PAYMENT_STATUS_MAP[order.payment_status]?.color || 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          <option value="unpaid">Chưa thanh toán</option>
                          <option value="paid">Đã thanh toán</option>
                          <option value="refunded">Đã hoàn tiền</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <select
                          value={order.status}
                          onChange={e => handleOrderStatusChange(order.id, e.target.value as any)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold border outline-none cursor-pointer ${
                            ORDER_STATUS_MAP[order.status]?.color || 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          <option value="pending">Chờ xác nhận</option>
                          <option value="confirmed">Đã xác nhận</option>
                          <option value="shipping">Đang giao hàng</option>
                          <option value="completed">Hoàn thành</option>
                          <option value="cancelled">Đã hủy</option>
                        </select>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Xem</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: PRODUCTS */}
      {activeTab === 'products' && (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-50/50">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={productSearch}
                onChange={e => setProductSearch(e.target.value)}
                placeholder="Tìm tên sản phẩm, mã SKU..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  categoryFilter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Tất cả danh mục
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    categoryFilter === cat
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="p-4">Sản phẩm</th>
                  <th className="p-4">Danh mục</th>
                  <th className="p-4">Giá bán</th>
                  <th className="p-4">Tồn kho</th>
                  <th className="p-4">Phân loại</th>
                  <th className="p-4">Trạng thái</th>
                  <th className="p-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-12 text-center text-slate-400">
                      Chưa có sản phẩm nào. Hãy bấm &ldquo;Thêm Sản phẩm mới&rdquo; để bắt đầu bán hàng!
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map(prod => (
                    <tr key={prod.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                            {prod.images?.[0] ? (
                              <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-400">
                                <Package className="w-5 h-5" />
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 flex items-center gap-1.5">
                              <span>{prod.name}</span>
                              {prod.is_featured && (
                                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-700 rounded">
                                  HOT
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-400 font-mono mt-0.5">
                              SKU: {prod.sku || 'N/A'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                          {prod.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="font-extrabold text-slate-900">{formatVND(prod.price)}</div>
                        {prod.compare_price && prod.compare_price > prod.price ? (
                          <div className="text-xs text-slate-400 line-through">
                            {formatVND(prod.compare_price)}
                          </div>
                        ) : null}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                            prod.stock === 0
                              ? 'bg-rose-100 text-rose-700'
                              : prod.stock <= 5
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-50 text-emerald-700'
                          }`}
                        >
                          {prod.stock} sản phẩm
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1 max-w-[180px]">
                          {(prod.variants || []).map((v, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium"
                            >
                              {v.name}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            prod.status === 'active'
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {prod.status === 'active' ? 'Đang bán' : 'Tạm ẩn'}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEditProduct(prod)}
                            className="p-2 rounded-lg bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
                            title="Sửa sản phẩm"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(prod)}
                            className="p-2 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 transition-colors cursor-pointer"
                            title="Xóa sản phẩm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: STORE PAYMENT & SHIPPING SETTINGS (VIETQR OF TENANT) */}
      {activeTab === 'settings' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form
            onSubmit={handleSaveSettings}
            className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-5"
          >
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-indigo-600" />
                Tài khoản Ngân hàng Nhận tiền của Cửa hàng (VietQR)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Khi khách mua lẻ đặt hàng trên website <strong>/{tenantSlug}</strong>, mã QR chuyển khoản sẽ tự động tạo theo Số tài khoản này để tiền về thẳng tài khoản của Chủ shop.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Ngân hàng thụ hưởng
                </label>
                <select
                  value={settings.bank_bin}
                  onChange={e => {
                    const found = BANK_LIST.find(b => b.bin === e.target.value);
                    setSettings({
                      ...settings,
                      bank_bin: e.target.value,
                      bank_name: found?.name || e.target.value,
                    });
                  }}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {BANK_LIST.map(b => (
                    <option key={b.bin} value={b.bin}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Số tài khoản nhận tiền
                </label>
                <input
                  type="text"
                  required
                  value={settings.bank_account}
                  onChange={e => setSettings({ ...settings, bank_account: e.target.value })}
                  placeholder="VD: 0901234567"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-mono font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Tên chủ tài khoản (Viết hoa không dấu)
                </label>
                <input
                  type="text"
                  required
                  value={settings.bank_owner}
                  onChange={e => setSettings({ ...settings, bank_owner: e.target.value.toUpperCase() })}
                  placeholder="VD: NGUYEN VAN A"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold uppercase outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-4">
                <Truck className="w-4 h-4 text-indigo-600" />
                Cấu hình Phí vận chuyển & CRM
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Phí giao hàng mặc định (VNĐ)
                  </label>
                  <input
                    type="number"
                    value={settings.shipping_fee}
                    onChange={e => setSettings({ ...settings, shipping_fee: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Miễn phí vận chuyển cho đơn từ (VNĐ)
                  </label>
                  <input
                    type="number"
                    value={settings.free_shipping_threshold}
                    onChange={e =>
                      setSettings({ ...settings, free_shipping_threshold: Number(e.target.value) })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={savingSettings}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                {savingSettings ? 'Đang lưu...' : 'Lưu Cấu Hình Cửa Hàng'}
              </button>
            </div>
          </form>

          {/* Live VietQR Preview */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3">
              Xem trước VietQR Khách quét
            </div>
            <div className="w-56 h-56 bg-slate-50 rounded-2xl border border-slate-200 p-2 flex items-center justify-center overflow-hidden">
              <img
                src={`https://img.vietqr.io/image/${settings.bank_bin}-${settings.bank_account}-compact2.png?amount=500000&addInfo=DH8801&accountName=${encodeURIComponent(
                  settings.bank_owner
                )}`}
                alt="VietQR Preview"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm font-extrabold text-slate-800 mt-3">{settings.bank_owner}</p>
            <p className="text-xs text-slate-500 font-mono">
              {settings.bank_bin} • {settings.bank_account}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Mã QR này sẽ hiển thị ở bước Thanh toán trên Website của cửa hàng.
            </p>
          </div>
        </div>
      )}

      {/* MODAL ADD/EDIT PRODUCT */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-slate-900">
                {editingProduct ? 'Chỉnh sửa Sản phẩm' : 'Thêm Sản phẩm mới'}
              </h3>
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Tên sản phẩm *
                  </label>
                  <input
                    type="text"
                    required
                    value={productForm.name}
                    onChange={e => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="VD: Áo Blazer Linen Cao Cấp"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Mã SKU
                  </label>
                  <input
                    type="text"
                    value={productForm.sku}
                    onChange={e => setProductForm({ ...productForm, sku: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm font-mono outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="BLZ-001"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Giá bán (VNĐ) *
                  </label>
                  <input
                    type="number"
                    required
                    value={productForm.price}
                    onChange={e => setProductForm({ ...productForm, price: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Giá gốc (Gạch ngang)
                  </label>
                  <input
                    type="number"
                    value={productForm.compare_price}
                    onChange={e =>
                      setProductForm({ ...productForm, compare_price: Number(e.target.value) })
                    }
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Tồn kho *
                  </label>
                  <input
                    type="number"
                    required
                    value={productForm.stock}
                    onChange={e => setProductForm({ ...productForm, stock: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Danh mục
                  </label>
                  <input
                    type="text"
                    value={productForm.category}
                    onChange={e => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="VD: Thời trang Nữ, Phụ kiện..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phân loại (cách nhau dấu phẩy)
                  </label>
                  <input
                    type="text"
                    value={productForm.variantsText}
                    onChange={e => setProductForm({ ...productForm, variantsText: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Size S, Size M, Size L"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Link Ảnh sản phẩm (URL)
                </label>
                <input
                  type="text"
                  value={productForm.imageUrl}
                  onChange={e => setProductForm({ ...productForm, imageUrl: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mô tả chi tiết (Dùng cho cả Web & AI Chatbot tư vấn)
                </label>
                <textarea
                  rows={3}
                  value={productForm.description}
                  onChange={e => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Chất liệu, công dụng, chính sách bảo hành/đổi trả..."
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={productForm.is_featured}
                    onChange={e => setProductForm({ ...productForm, is_featured: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600"
                  />
                  <span className="text-sm font-semibold text-slate-700">Gắn nhãn Sản phẩm HOT / Nổi bật</span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsProductModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm cursor-pointer"
                  >
                    Lưu sản phẩm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL ORDER DETAILS */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-xs font-bold uppercase text-indigo-600">Chi tiết đơn hàng</span>
                <h3 className="text-lg font-extrabold text-slate-900">#{selectedOrder.order_code}</h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto text-sm">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 space-y-1.5">
                <div className="font-bold text-slate-900 text-base">{selectedOrder.customer_name}</div>
                <div className="text-slate-600 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedOrder.customer_phone}</span>
                </div>
                {selectedOrder.customer_address && (
                  <div className="text-slate-600 flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span>{selectedOrder.customer_address}</span>
                  </div>
                )}
                {selectedOrder.notes && (
                  <div className="text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 mt-2">
                    Ghi chú: {selectedOrder.notes}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase text-slate-400">Danh sách sản phẩm</div>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                  {(selectedOrder.items || []).map((item, i) => (
                    <div key={i} className="p-3 flex items-center justify-between bg-white">
                      <div>
                        <div className="font-bold text-slate-800">{item.name}</div>
                        <div className="text-xs text-slate-500">
                          {item.variant ? `Phân loại: ${item.variant} • ` : ''}
                          SL: <strong>x{item.quantity}</strong>
                        </div>
                      </div>
                      <div className="font-bold text-slate-900">
                        {formatVND(Number(item.price) * Number(item.quantity))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl space-y-1.5">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Tạm tính:</span>
                  <span>{formatVND(selectedOrder.subtotal_amount)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Phí vận chuyển:</span>
                  <span>{formatVND(selectedOrder.shipping_fee)}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-900 pt-1 border-t border-slate-200">
                  <span>Tổng thanh toán:</span>
                  <span className="text-indigo-600">{formatVND(selectedOrder.total_amount)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/admin/crm"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Đã đồng bộ sang CRM Kanban</span>
                </Link>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
