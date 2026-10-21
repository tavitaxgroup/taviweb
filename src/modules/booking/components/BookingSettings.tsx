import React, { useState, useEffect } from 'react';
import { Save, Clock } from 'lucide-react';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import { BookingService } from '../api/booking.service';
import toast from 'react-hot-toast';

export default function BookingSettings() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    opening_time: '08:00',
    closing_time: '21:00',
  });

  useEffect(() => {
    if (user?.tenant_id) {
      loadSettings();
    }
  }, [user?.tenant_id]);

  const loadSettings = async () => {
    if (!user?.tenant_id) return;
    try {
      const data = await BookingService.getSettings(user.tenant_id);
      setSettings(data);
    } catch (error) {
      console.error('Failed to load settings', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.tenant_id) return;

    setSaving(true);
    try {
      await BookingService.updateSettings(user.tenant_id, settings);
      toast.success('Đã lưu cấu hình khung giờ hoạt động.');
    } catch {
      toast.error('Không thể lưu cấu hình.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-10 text-center text-xs text-slate-400">Đang tải cài đặt...</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(15,23,42,0.04)] border border-slate-200/80 overflow-hidden max-w-2xl mx-auto mt-4">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 bg-slate-100 text-slate-800 rounded-xl border border-slate-200/80 flex items-center justify-center">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900 tracking-tight">
            Khung giờ Mở cửa & Nhận lịch hẹn
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Thiết lập thời gian bắt đầu và kết thúc nhận khách trên bảng điều phối & trang đặt lịch
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="p-6 space-y-6 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="block font-medium text-slate-700">
              Giờ bắt đầu nhận lịch <span className="text-rose-500">*</span>
            </label>
            <input
              type="time"
              required
              value={settings.opening_time}
              onChange={e => setSettings({ ...settings, opening_time: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none font-mono text-sm text-slate-900"
            />
            <p className="text-[11px] text-slate-400">
              Khung giờ đầu tiên hiển thị cho khách hàng chọn.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="block font-medium text-slate-700">
              Giờ kết thúc nhận lịch <span className="text-rose-500">*</span>
            </label>
            <input
              type="time"
              required
              value={settings.closing_time}
              onChange={e => setSettings({ ...settings, closing_time: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none font-mono text-sm text-slate-900"
            />
            <p className="text-[11px] text-slate-400">
              Khung giờ cuối cùng nhận lịch hẹn trong ngày.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="h-9 bg-[#0F172A] hover:bg-slate-800 text-white font-semibold px-5 rounded-lg shadow-2xs transition-all inline-flex items-center gap-1.5 disabled:opacity-50"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{saving ? 'Đang lưu...' : 'Lưu khung giờ'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
