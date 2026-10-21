import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Search, Clock, X } from 'lucide-react';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import { BookingService } from '../api/booking.service';
import { BookingServiceItem } from '../types';
import toast from 'react-hot-toast';
import { getBookingConfig } from '../utils/templateConfig';

export default function ServiceManagement({ template }: { template: string }) {
  const { user } = useAuth();
  const config = getBookingConfig(template);

  const [services, setServices] = useState<BookingServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', price: '', duration: '60' });
  const [submitting, setSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (user?.tenant_id) {
      loadData();
    }
  }, [user?.tenant_id]);

  const loadData = async () => {
    if (!user?.tenant_id) return;
    setLoading(true);
    try {
      const svcs = await BookingService.getServices(user.tenant_id);
      setServices(svcs);
    } catch (error) {
      console.error('Failed to load services', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !user?.tenant_id) return;

    setSubmitting(true);
    const price = parseInt(formData.price || '0', 10);
    const duration = parseInt(formData.duration || '60', 10);
    const cleanPrice = isNaN(price) ? 0 : price;
    const cleanDuration = isNaN(duration) ? 60 : duration;

    try {
      if (editingId) {
        setServices(prev =>
          prev.map(s =>
            s.id === editingId
              ? { ...s, name: formData.name.trim(), price: cleanPrice, duration_minutes: cleanDuration }
              : s
          )
        );
        await BookingService.updateService(user.tenant_id, editingId, {
          name: formData.name.trim(),
          price: cleanPrice,
          duration_minutes: cleanDuration,
        });
        toast.success('Đã cập nhật dịch vụ.');
      } else {
        const created = await BookingService.createService(user.tenant_id, {
          name: formData.name.trim(),
          price: cleanPrice,
          duration_minutes: cleanDuration,
        });
        setServices(prev => [...prev, created]);
        toast.success('Đã thêm dịch vụ mới.');
      }
      setIsModalOpen(false);
      setFormData({ name: '', price: '', duration: '60' });
      setEditingId(null);
    } catch {
      toast.error('Không thể lưu dịch vụ.');
      loadData();
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (svc: BookingServiceItem) => {
    setEditingId(svc.id);
    setFormData({
      name: svc.name,
      price: String(svc.price),
      duration: String(svc.duration_minutes),
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!user?.tenant_id) return;
    if (!window.confirm('Bạn có chắc chắn muốn xóa dịch vụ này?')) return;
    const prevServices = services;
    setServices(prev => prev.filter(s => s.id !== id));
    try {
      await BookingService.deleteService(user.tenant_id, id);
      toast.success('Đã xóa dịch vụ.');
    } catch {
      setServices(prevServices);
      toast.error('Không thể xóa dịch vụ.');
    }
  };

  const filteredServices = services.filter(svc =>
    searchQuery ? svc.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );

  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(15,23,42,0.04)] border border-slate-200/80 flex flex-col h-full relative overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-800 flex items-center justify-center">
            {config.icon}
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900 tracking-tight">
              Danh mục Dịch vụ & Bảng giá
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">{config.serviceDescription}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setEditingId(null);
            setFormData({ name: '', price: '', duration: '60' });
            setIsModalOpen(true);
          }}
          className="h-9 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-xs shadow-indigo-600/20 transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Thêm {config.serviceLabel}</span>
        </button>
      </div>

      <div className="px-6 py-3 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between gap-3">
        <div className="relative w-full max-w-xs">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm tên dịch vụ..."
            className="w-full h-8 pl-8 pr-3 bg-white border border-slate-200/80 rounded-lg text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
          />
        </div>
        <div className="text-xs font-mono tabular-nums text-slate-500">
          Tổng cộng: <strong className="text-slate-900">{filteredServices.length}</strong> hạng mục
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {loading ? (
          <div className="p-10 text-center text-xs text-slate-400">Đang tải danh mục dịch vụ...</div>
        ) : filteredServices.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400">Chưa có dịch vụ nào.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 text-slate-400 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200/70">
                <th className="px-6 py-3">Tên hạng mục dịch vụ</th>
                <th className="px-6 py-3">Thời lượng tiêu chuẩn</th>
                <th className="px-6 py-3">Đơn giá niêm yết</th>
                <th className="px-6 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredServices.map(svc => (
                <tr key={svc.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-6 py-3.5 font-semibold text-slate-900 text-sm">{svc.name}</td>
                  <td className="px-6 py-3.5 text-slate-600 font-mono tabular-nums">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {svc.duration_minutes} phút
                    </span>
                  </td>
                  <td className="px-6 py-3.5 font-mono tabular-nums font-semibold text-slate-900 text-sm">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                      svc.price
                    )}
                  </td>
                  <td className="px-6 py-3.5 text-right space-x-1">
                    <button
                      type="button"
                      onClick={() => handleEdit(svc)}
                      className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                      title="Chỉnh sửa"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(svc.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Xóa"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/10 w-full max-w-md overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 text-base">
                {editingId ? `Cập nhật ${config.serviceLabel}` : `Thêm ${config.serviceLabel} mới`}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-600 mb-1.5">
                  Tên {config.serviceLabel} <span className="text-rose-500">*</span>
                </label>
                <input
                  required
                  autoFocus
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none text-slate-900"
                  placeholder={`VD: ${config.servicePlaceholder}`}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-600 mb-1.5">Đơn giá (VNĐ)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none font-mono text-slate-900"
                    placeholder="VD: 350000"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-600 mb-1.5">
                    Thời lượng (Phút)
                  </label>
                  <input
                    type="number"
                    value={formData.duration}
                    onChange={e => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none font-mono text-slate-900"
                    placeholder="VD: 60"
                  />
                </div>
              </div>
              <div className="pt-3 flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-lg font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-2.5 px-4 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors disabled:opacity-50"
                >
                  {submitting ? 'Đang lưu...' : 'Lưu dịch vụ'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
