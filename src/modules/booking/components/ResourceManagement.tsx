import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Search, UserCheck, DoorOpen, X } from 'lucide-react';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import { BookingService } from '../api/booking.service';
import { BookingResource } from '../types';
import toast from 'react-hot-toast';
import { getBookingConfig } from '../utils/templateConfig';

function inferCategory(res: { name?: string; type?: string; role_or_capacity?: string }): 'staff' | 'space' {
  if (res.type === 'space' || res.type === 'room' || res.type === 'table') return 'space';
  if (res.type === 'staff' || res.type === 'doctor' || res.type === 'stylist') return 'staff';
  const combined = `${res.name || ''} ${res.role_or_capacity || ''}`.toLowerCase();
  if (
    combined.includes('phòng') ||
    combined.includes('bàn') ||
    combined.includes('giường') ||
    combined.includes('ghế') ||
    combined.includes('khoang') ||
    combined.includes('studio') ||
    combined.includes('khu') ||
    combined.includes('khách')
  ) {
    return 'space';
  }
  return 'staff';
}

export default function ResourceManagement({ template }: { template: string }) {
  const { user } = useAuth();
  const config = getBookingConfig(template);

  const [resources, setResources] = useState<BookingResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    name: string;
    role: string;
    category: 'staff' | 'space';
  }>({
    name: '',
    role: '',
    category: template === 'nha_hang' || template === 'quan_cafe' ? 'space' : 'staff',
  });
  const [submitting, setSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'staff' | 'space'>('all');

  useEffect(() => {
    if (user?.tenant_id) {
      loadData();
    }
  }, [user?.tenant_id]);

  const loadData = async () => {
    if (!user?.tenant_id) return;
    setLoading(true);
    try {
      const res = await BookingService.getResources(user.tenant_id);
      setResources(res);
    } catch (error) {
      console.error('Failed to load resources', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !user?.tenant_id) return;

    setSubmitting(true);
    try {
      if (editingId) {
        const updatedFields = {
          name: formData.name.trim(),
          type: formData.category,
          role_or_capacity: formData.role.trim(),
        };
        setResources(prev =>
          prev.map(r => (r.id === editingId ? { ...r, ...updatedFields } : r))
        );
        await BookingService.updateResource(user.tenant_id, editingId, updatedFields);
        toast.success('Đã cập nhật thông tin.');
      } else {
        const created = await BookingService.createResource(user.tenant_id, {
          name: formData.name.trim(),
          type: formData.category,
          role_or_capacity: formData.role.trim(),
          status: 'active',
        });
        setResources(prev => [...prev, created]);
        toast.success(
          formData.category === 'staff'
            ? 'Đã thêm nhân sự phụ trách mới.'
            : 'Đã thêm phòng / khu vực mới.'
        );
      }
      setIsModalOpen(false);
      setFormData({
        name: '',
        role: '',
        category: template === 'nha_hang' || template === 'quan_cafe' ? 'space' : 'staff',
      });
      setEditingId(null);
    } catch {
      toast.error('Không thể lưu dữ liệu. Vui lòng thử lại.');
      loadData();
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (res: BookingResource) => {
    setEditingId(res.id);
    setFormData({
      name: res.name,
      role: res.role_or_capacity || '',
      category: inferCategory(res),
    });
    setIsModalOpen(true);
  };

  const handleToggleStatus = async (res: BookingResource) => {
    if (!user?.tenant_id) return;
    const nextStatus = res.status === 'active' ? 'inactive' : 'active';
    const prevResources = resources;
    setResources(prev =>
      prev.map(item => (item.id === res.id ? { ...item, status: nextStatus } : item))
    );
    try {
      await BookingService.updateResource(user.tenant_id, res.id, { status: nextStatus });
      toast.success(
        nextStatus === 'active'
          ? `Đã mở nhận lịch cho ${res.name}`
          : `Đã tạm ngưng nhận lịch cho ${res.name}`
      );
    } catch {
      setResources(prevResources);
      toast.error('Không thể đổi trạng thái.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!user?.tenant_id) return;
    if (!window.confirm('Bạn có chắc chắn muốn xóa mục này khỏi danh sách nhận lịch?')) return;
    const prevResources = resources;
    setResources(prev => prev.filter(item => item.id !== id));
    try {
      await BookingService.deleteResource(user.tenant_id, id);
      toast.success('Đã xóa thành công.');
    } catch {
      setResources(prevResources);
      toast.error('Không thể xóa mục này.');
    }
  };

  const filteredResources = resources.filter(r => {
    if (statusFilter !== 'all' && r.status !== statusFilter) return false;
    if (categoryFilter !== 'all' && inferCategory(r) !== categoryFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        r.name.toLowerCase().includes(q) ||
        (r.role_or_capacity || '').toLowerCase().includes(q)
      );
    }
    return true;
  });

  const staffCount = resources.filter(r => inferCategory(r) === 'staff').length;
  const spaceCount = resources.filter(r => inferCategory(r) === 'space').length;

  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(15,23,42,0.04)] border border-slate-200/80 flex flex-col h-full relative overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-800 flex items-center justify-center">
            {config.icon}
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900 tracking-tight">
              {config.resourceTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">{config.resourceDescription}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingId(null);
            setFormData({
              name: '',
              role: '',
              category: template === 'nha_hang' || template === 'quan_cafe' ? 'space' : 'staff',
            });
            setIsModalOpen(true);
          }}
          className="h-9 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-xs shadow-indigo-600/20 transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Thêm nhân sự / khu vực</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="px-6 py-3 bg-slate-50/50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Category Segmented Tabs */}
          <div className="flex items-center bg-slate-100/90 p-0.5 rounded-lg border border-slate-200/60 text-xs">
            <button
              type="button"
              onClick={() => setCategoryFilter('all')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                categoryFilter === 'all'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              Tất cả ({resources.length})
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('staff')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                categoryFilter === 'staff'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              Nhân sự ({staffCount})
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('space')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                categoryFilter === 'space'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              Phòng / Bàn ({spaceCount})
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên, chức danh, số giường..."
              className="h-8 pl-8 pr-3 bg-white border border-slate-200/80 rounded-lg text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 w-64"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as any)}
            className="h-8 text-xs font-medium text-slate-700 border border-slate-200/80 px-2.5 rounded-lg bg-white outline-none focus:border-slate-400"
          >
            <option value="all">Mọi trạng thái</option>
            <option value="active">Đang nhận lịch</option>
            <option value="inactive">Tạm nghỉ / Bảo trì</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        {loading ? (
          <div className="p-10 text-center text-xs text-slate-400">Đang tải danh sách...</div>
        ) : filteredResources.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400">
            Chưa có dữ liệu phù hợp với bộ lọc hiện tại.
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 text-slate-400 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200/70">
                <th className="px-6 py-3">{config.resourceNameColumn || 'Nhân sự / Khu vực'}</th>
                <th className="px-6 py-3">{config.resourceRoleColumn || 'Chức danh / Quy mô'}</th>
                <th className="px-6 py-3">Trạng thái nhận lịch</th>
                <th className="px-6 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredResources.map(res => {
                const cat = inferCategory(res);
                return (
                  <tr key={res.id} className="hover:bg-slate-50/70 transition-colors group">
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                            cat === 'staff'
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-amber-50 text-amber-800 border-amber-200/80'
                          }`}
                        >
                          {cat === 'staff' ? (
                            <UserCheck className="w-3.5 h-3.5" />
                          ) : (
                            <DoorOpen className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <span className="font-semibold text-slate-900 text-sm">{res.name}</span>
                      </div>
                    </td>

                    <td className="px-6 py-3.5 text-slate-600 font-medium">
                      {res.role_or_capacity ? (
                        <span>
                          <span className="text-slate-400 mr-1">
                            {cat === 'staff' ? 'Chức danh:' : 'Quy mô:'}
                          </span>
                          <span className="text-slate-800">{res.role_or_capacity}</span>
                        </span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>

                    <td className="px-6 py-3.5">
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(res)}
                        title="Bấm để chuyển trạng thái nhận lịch"
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors cursor-pointer ${
                          res.status === 'active'
                            ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/80'
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            res.status === 'active' ? 'bg-emerald-500' : 'bg-slate-400'
                          }`}
                        />
                        {res.status === 'active' ? 'Đang nhận lịch' : 'Tạm nghỉ'}
                      </button>
                    </td>

                    <td className="px-6 py-3.5 text-right space-x-1">
                      <button
                        type="button"
                        onClick={() => handleEdit(res)}
                        className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(res.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Xóa"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/10 w-full max-w-md overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 text-base">
                {editingId ? 'Cập nhật thông tin' : 'Thêm Nhân sự / Khu vực nhận lịch'}
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
                  Phân loại đối tượng nhận lịch
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200/70">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, category: 'staff' })}
                    className={`py-2 px-3 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      formData.category === 'staff'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Nhân sự / Chuyên gia</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, category: 'space' })}
                    className={`py-2 px-3 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      formData.category === 'space'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <DoorOpen className="w-3.5 h-3.5" />
                    <span>Phòng / Bàn / Khu vực</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-600 mb-1.5">
                  {formData.category === 'staff'
                    ? 'Họ tên Bác sĩ / Chuyên viên'
                    : 'Tên Phòng / Bàn / Khu vực'}{' '}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  required
                  autoFocus
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none text-slate-900"
                  placeholder={
                    formData.category === 'staff'
                      ? 'VD: Bác sĩ Minh Quân, Chuyên viên Tư vấn 01...'
                      : 'VD: Phòng VIP 01, Bàn Sân Vườn A2...'
                  }
                />
              </div>

              <div>
                <label className="block font-medium text-slate-600 mb-1.5">
                  {formData.category === 'staff'
                    ? 'Chức danh / Chuyên môn'
                    : 'Quy mô / Sức chứa'}
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={e => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none text-slate-900"
                  placeholder={
                    formData.category === 'staff'
                      ? 'VD: Trưởng khoa, Senior Consultant, Master Stylist...'
                      : 'VD: 2 giường VIP, 6 - 8 khách, Tầng 2...'
                  }
                />
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
                  {submitting ? 'Đang lưu...' : 'Lưu thông tin'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
