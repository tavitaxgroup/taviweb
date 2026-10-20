import React, { useState, useEffect, useMemo } from 'react';
import {
  Clock,
  User,
  ChevronLeft,
  ChevronRight,
  Plus,
  CheckCircle2,
  XCircle,
  Trash2,
  RefreshCcw,
  LayoutGrid,
  List,
  Search,
  Phone,
  MessageCircle,
  QrCode,
  UserPlus,
  X,
} from 'lucide-react';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import { BookingService } from '../api/booking.service';
import { BookingResource, BookingAppointment, BookingServiceItem } from '../types';
import { getBookingConfig } from '../utils/templateConfig';
import toast from 'react-hot-toast';

export default function BookingAdmin({ template }: { template: string }) {
  const { user } = useAuth();
  const config = getBookingConfig(template);

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [viewMode, setViewMode] = useState<'timeline' | 'list'>('timeline');
  const [statusFilter, setStatusFilter] = useState<
    'all' | 'pending' | 'confirmed' | 'completed'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [resources, setResources] = useState<BookingResource[]>([]);
  const [services, setServices] = useState<BookingServiceItem[]>([]);
  const [bookings, setBookings] = useState<BookingAppointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({ opening_time: '08:00', closing_time: '21:00' });
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Live current time for Today's Needle
  const [nowTime, setNowTime] = useState<Date>(new Date());

  // Bank info for VietQR payment in modal
  const [bankInfo, setBankInfo] = useState({
    bankBin: '970436',
    bankName: 'Vietcombank',
    accountNo: '',
    accountName: '',
  });
  const [showQrModal, setShowQrModal] = useState(false);
  const [syncingCrm, setSyncingCrm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setNowTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (user?.tenant_id) {
      loadStaticConfig();
      loadBankConfig();
    }
  }, [user?.tenant_id]);

  useEffect(() => {
    if (user?.tenant_id) {
      loadAppointmentsOnly();
    }
  }, [user?.tenant_id, selectedDate]);

  const loadBankConfig = async () => {
    if (!user?.tenant_id) return;
    try {
      const { supabase } = await import('@/lib/supabase');
      const { data } = await supabase
        .from('tenants')
        .select('name, theme_config')
        .eq('id', user.tenant_id)
        .single();
      if (data) {
        const tc = data.theme_config || {};
        const paymentCfg = tc.payment_config || {};
        setBankInfo({
          bankBin: paymentCfg.bank_bin || tc.bank_bin || '970436',
          bankName: paymentCfg.bank_name || tc.bank_name || 'Vietcombank',
          accountNo: paymentCfg.bank_account_no || tc.bank_account_no || '',
          accountName:
            paymentCfg.bank_account_name || tc.bank_account_name || data.name || 'DOANH NGHIỆP',
        });
      }
    } catch (e) {
      console.error('Failed to load tenant bank info', e);
    }
  };

  const loadStaticConfig = async () => {
    if (!user?.tenant_id) return;
    try {
      const [res, svcs, cfg] = await Promise.all([
        BookingService.getResources(user.tenant_id),
        BookingService.getServices(user.tenant_id),
        BookingService.getSettings(user.tenant_id),
      ]);
      setResources(res.filter(r => r.status === 'active'));
      setServices(svcs);
      setSettings(cfg);

      const slots = [];
      const startHour = parseInt(cfg.opening_time.split(':')[0], 10);
      const endHour = parseInt(cfg.closing_time.split(':')[0], 10);
      for (let i = startHour; i <= endHour; i++) {
        slots.push(`${i.toString().padStart(2, '0')}:00`);
      }
      setTimeSlots(slots);
    } catch (error) {
      console.error('Failed to load static booking config', error);
    }
  };

  const loadAppointmentsOnly = async () => {
    if (!user?.tenant_id) return;
    setLoading(true);
    try {
      const apps = await BookingService.getAppointments(
        user.tenant_id,
        new Date(new Date(selectedDate).setHours(0, 0, 0, 0)).toISOString(),
        new Date(new Date(selectedDate).setHours(23, 59, 59, 999)).toISOString()
      );
      setBookings(apps);
    } catch (error) {
      console.error('Failed to load appointments', error);
    } finally {
      setLoading(false);
    }
  };

  const loadData = async (showRefreshAnimation = false) => {
    if (!user?.tenant_id) return;
    if (showRefreshAnimation) {
      setIsRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      const [res, svcs, apps, cfg] = await Promise.all([
        BookingService.getResources(user.tenant_id),
        BookingService.getServices(user.tenant_id),
        BookingService.getAppointments(
          user.tenant_id,
          new Date(new Date(selectedDate).setHours(0, 0, 0, 0)).toISOString(),
          new Date(new Date(selectedDate).setHours(23, 59, 59, 999)).toISOString()
        ),
        BookingService.getSettings(user.tenant_id),
      ]);
      setResources(res.filter(r => r.status === 'active'));
      setServices(svcs);
      setBookings(apps);
      setSettings(cfg);

      const slots = [];
      const startHour = parseInt(cfg.opening_time.split(':')[0], 10);
      const endHour = parseInt(cfg.closing_time.split(':')[0], 10);
      for (let i = startHour; i <= endHour; i++) {
        slots.push(`${i.toString().padStart(2, '0')}:00`);
      }
      setTimeSlots(slots);
    } catch (error) {
      console.error('Failed to load booking data', error);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  // Resolve service price helper
  const getAppointmentPrice = (app: BookingAppointment): number => {
    if (app.service_id) {
      const found = services.find(s => s.id === app.service_id);
      if (found) return Number(found.price) || 0;
    }
    if (app.service_name) {
      const foundByName = services.find(
        s => s.name.toLowerCase() === app.service_name?.toLowerCase()
      );
      if (foundByName) return Number(foundByName.price) || 0;
    }
    return 0;
  };

  // Filtered bookings for Timeline & List
  const filteredBookings = useMemo(() => {
    return bookings.filter(b => {
      if (statusFilter !== 'all' && b.status !== statusFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = String(b.customer_name || '')
          .toLowerCase()
          .includes(q);
        const matchPhone = String(b.customer_phone || '').includes(q);
        const matchService = String(b.service_name || '')
          .toLowerCase()
          .includes(q);
        if (!matchName && !matchPhone && !matchService) return false;
      }
      return true;
    });
  }, [bookings, statusFilter, searchQuery]);

  // KPI calculations for the day
  const kpiStats = useMemo(() => {
    const active = bookings.filter(b => b.status !== 'cancelled');
    const pendingCount = bookings.filter(b => b.status === 'pending').length;
    const confirmedCount = bookings.filter(b => b.status === 'confirmed').length;
    const completedCount = bookings.filter(b => b.status === 'completed').length;
    const estimatedRevenue = active.reduce((sum, b) => sum + getAppointmentPrice(b), 0);
    return {
      total: active.length,
      pendingCount,
      confirmedCount,
      completedCount,
      estimatedRevenue,
    };
  }, [bookings, services]);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-slate-900 border-slate-800 text-white shadow-[0_2px_8px_rgba(15,23,42,0.12)]';
      case 'completed':
        return 'bg-emerald-50/95 border-emerald-300/80 text-emerald-950';
      case 'pending':
        return 'bg-amber-50/95 border-amber-300/80 text-amber-950';
      default:
        return 'bg-slate-100 border-slate-200 text-slate-500 line-through';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-900 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Đã xác nhận
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Hoàn thành
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Chờ xác nhận
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-500">
            Đã hủy
          </span>
        );
    }
  };

  const changeDate = (days: number) => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + days);
    setSelectedDate(d.toISOString().split('T')[0]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    resourceId: '',
    serviceId: '',
    time: '09:00',
    notes: '',
    syncToCrm: true,
  });
  const [submitting, setSubmitting] = useState(false);

  const [selectedAppointment, setSelectedAppointment] = useState<BookingAppointment | null>(null);
  const [dragOverInfo, setDragOverInfo] = useState<{
    resourceId: string;
    timeText: string;
    leftPercent: number;
  } | null>(null);

  // Sync customer & appointment to CRM helper
  const syncAppointmentToCrm = async (
    customerName: string,
    customerPhone: string,
    serviceName: string,
    servicePrice: number,
    startTimeIso: string,
    notes?: string
  ) => {
    if (!user?.tenant_id) return false;
    try {
      const { supabase } = await import('@/lib/supabase');
      const tenantId = user.tenant_id;

      let contactId = null;
      if (customerPhone) {
        const { data: existingContact } = await supabase
          .from('crm_contacts')
          .select('id')
          .eq('tenant_id', tenantId)
          .eq('phone', customerPhone)
          .maybeSingle();

        if (existingContact) {
          contactId = existingContact.id;
        }
      }

      if (!contactId) {
        const { data: newContact } = await supabase
          .from('crm_contacts')
          .insert([
            {
              tenant_id: tenantId,
              name: customerName,
              phone: customerPhone || '',
              source: 'Booking Admin',
            },
          ])
          .select()
          .single();
        contactId = newContact?.id;
      }

      if (contactId) {
        const { data: stages } = await supabase
          .from('crm_stages')
          .select('id, pipeline_id')
          .eq('tenant_id', tenantId)
          .order('order', { ascending: true })
          .limit(1);

        const stageId = stages && stages.length > 0 ? stages[0].id : null;
        const pipelineId = stages && stages.length > 0 ? (stages[0] as any).pipeline_id : null;

        const { data: deal } = await supabase
          .from('crm_deals')
          .insert([
            {
              tenant_id: tenantId,
              pipeline_id: pipelineId,
              contact_id: contactId,
              title: `Lịch hẹn: ${serviceName} - ${customerName}`,
              value: servicePrice,
              stage_id: stageId,
              custom_data: {
                Nguồn: 'Lễ tân đặt lịch',
                'Dịch vụ': serviceName,
                'Ngày Hẹn': startTimeIso,
              },
            },
          ])
          .select()
          .single();

        if (deal) {
          await supabase.from('crm_activities').insert([
            {
              tenant_id: tenantId,
              deal_id: deal.id,
              type: 'note',
              content: `Lễ tân đã ghi nhận lịch hẹn.\nDịch vụ: ${serviceName}\nThời gian: ${new Date(
                startTimeIso
              ).toLocaleString('vi-VN')}\nGhi chú: ${notes || 'Không có'}`,
            },
          ]);
        }
      }
      return true;
    } catch (e) {
      console.error('CRM sync error:', e);
      return false;
    }
  };

  const handleAddAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.tenant_id) return;

    setSubmitting(true);
    try {
      const res = resources.find(r => r.id === formData.resourceId) || resources[0];
      const svc = services.find(s => s.id === formData.serviceId);
      const start = new Date(selectedDate);
      const [h, m] = formData.time.split(':');
      start.setHours(parseInt(h || '9', 10), parseInt(m || '0', 10), 0, 0);

      const durationMinutes = svc?.duration_minutes || 60;
      const end = new Date(start.getTime() + durationMinutes * 60 * 1000);
      const serviceName = svc?.name || 'Dịch vụ tiêu chuẩn';

      const createdApp = await BookingService.createAppointment(user.tenant_id, {
        resource_id: res?.id,
        service_id: svc?.id,
        service_name: serviceName,
        customer_name: formData.customerName,
        customer_phone: formData.customerPhone,
        notes: formData.notes,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        status: 'confirmed',
      });

      setBookings(prev =>
        [...prev, createdApp].sort(
          (a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
        )
      );

      if (formData.syncToCrm) {
        void syncAppointmentToCrm(
          formData.customerName,
          formData.customerPhone,
          serviceName,
          Number(svc?.price || 0),
          start.toISOString(),
          formData.notes
        );
      }

      toast.success('Đã tạo lịch hẹn mới.');
      setIsModalOpen(false);
      setFormData({
        customerName: '',
        customerPhone: '',
        resourceId: '',
        serviceId: '',
        time: '09:00',
        notes: '',
        syncToCrm: true,
      });
    } catch (error) {
      toast.error('Không thể tạo lịch hẹn.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleStatusChange = async (appointmentId: string, newStatus: string) => {
    if (!user?.tenant_id) return;
    const prevBookings = bookings;
    setBookings(prev =>
      prev.map(b => (b.id === appointmentId ? { ...b, status: newStatus as any } : b))
    );
    if (selectedAppointment && selectedAppointment.id === appointmentId) {
      setSelectedAppointment({ ...selectedAppointment, status: newStatus as any });
    }
    try {
      await BookingService.updateAppointmentStatus(user.tenant_id, appointmentId, newStatus);
      toast.success('Đã cập nhật trạng thái lịch hẹn.');
    } catch (error) {
      console.error(error);
      setBookings(prevBookings);
      toast.error('Không thể cập nhật trạng thái.');
    }
  };

  const handleDeleteAppointment = async (appointmentId: string) => {
    if (!user?.tenant_id) return;
    if (!window.confirm('Xác nhận xóa vĩnh viễn lịch hẹn này?')) return;
    const prevBookings = bookings;
    setBookings(prev => prev.filter(b => b.id !== appointmentId));
    setSelectedAppointment(null);
    try {
      await BookingService.deleteAppointment(user.tenant_id, appointmentId);
      toast.success('Đã xóa lịch hẹn.');
    } catch (error) {
      setBookings(prevBookings);
      toast.error('Không thể xóa lịch hẹn.');
    }
  };

  const handleAppointmentDrop = async (
    appointmentId: string,
    newStart: Date,
    newEnd: Date,
    newResourceId?: string
  ) => {
    if (!user?.tenant_id) return;
    const prevBookings = bookings;
    const updates: Partial<BookingAppointment> = {
      start_time: newStart.toISOString(),
      end_time: newEnd.toISOString(),
    };
    if (newResourceId && newResourceId !== 'unassigned') {
      updates.resource_id = newResourceId;
    } else if (newResourceId === 'unassigned') {
      updates.resource_id = null as any;
    }
    setBookings(prev =>
      prev.map(b => (b.id === appointmentId ? { ...b, ...updates } : b))
    );
    try {
      await BookingService.updateAppointment(user.tenant_id, appointmentId, updates);
    } catch (error) {
      console.error(error);
      setBookings(prevBookings);
      toast.error('Không thể dời lịch hẹn.');
    }
  };

  const todayIso = new Date().toISOString().split('T')[0];
  const isToday = selectedDate === todayIso;

  // Calculate live time needle position
  const startHourInt = parseInt(settings.opening_time.split(':')[0], 10);
  const endHourInt = parseInt(settings.closing_time.split(':')[0], 10);
  const totalSlots = Math.max(1, endHourInt - startHourInt + 1);
  const currentHourFloat = nowTime.getHours() + nowTime.getMinutes() / 60;
  const liveNeedlePercent =
    isToday && currentHourFloat >= startHourInt && currentHourFloat <= endHourInt + 1
      ? ((currentHourFloat - startHourInt) / totalSlots) * 100
      : null;

  const formatVND = (val: number) =>
    new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Executive KPI Strip */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70 overflow-hidden shrink-0">
        <div className="px-5 py-4">
          <div className="text-xs font-medium text-slate-500 mb-1">Tổng lịch hẹn trong ngày</div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-mono tabular-nums font-semibold text-slate-900">
              {kpiStats.total}
            </span>
            <span className="text-[11px] font-mono text-slate-400">{selectedDate}</span>
          </div>
        </div>

        <div className="px-5 py-4">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
            <span>Chờ xác nhận</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-mono tabular-nums font-semibold text-amber-700">
              {kpiStats.pendingCount}
            </span>
            <span className="text-[11px] text-slate-400">Cần gọi xác nhận</span>
          </div>
        </div>

        <div className="px-5 py-4">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
            <span>Đã xác nhận & Phục vụ</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-mono tabular-nums font-semibold text-slate-900">
              {kpiStats.confirmedCount + kpiStats.completedCount}
            </span>
            <span className="text-[11px] font-mono text-emerald-600">
              {kpiStats.completedCount} hoàn tất
            </span>
          </div>
        </div>

        <div className="px-5 py-4 bg-slate-50/50">
          <div className="text-xs font-medium text-slate-500 mb-1">Doanh thu dịch vụ dự kiến</div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-mono tabular-nums font-semibold text-slate-900">
              {formatVND(kpiStats.estimatedRevenue)}
            </span>
          </div>
        </div>
      </div>

      {/* Main Calendar / List Container */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex flex-col flex-1 min-h-[500px] overflow-hidden">
        {/* Control Bar */}
        <div className="px-5 py-3.5 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3 bg-white shrink-0">
          {/* Left: Date Navigation & Status Filter */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Date Switcher */}
            <div className="inline-flex items-center bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
              <button
                type="button"
                onClick={() => changeDate(-1)}
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-white rounded-md transition-colors"
                title="Ngày trước"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedDate(todayIso)}
                className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                  isToday
                    ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                Hôm nay
              </button>
              <input
                type="date"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                className="bg-transparent text-xs font-mono tabular-nums font-semibold text-slate-800 px-2 py-1 outline-none cursor-pointer"
              />
              <button
                type="button"
                onClick={() => changeDate(1)}
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-white rounded-md transition-colors"
                title="Ngày tiếp theo"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            {/* Status Filter Pills */}
            <div className="flex items-center bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'pending', label: 'Chờ duyệt' },
                { id: 'confirmed', label: 'Đã xác nhận' },
                { id: 'completed', label: 'Hoàn thành' },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id as any)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                    statusFilter === tab.id
                      ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800 font-medium'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Customer */}
            <div className="relative flex items-center">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Tìm tên khách, SĐT..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="h-8 pl-8 pr-3 text-xs rounded-lg border border-slate-200/80 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 w-[180px] sm:w-[210px]"
              />
            </div>
          </div>

          {/* Right: View Mode Switcher + Refresh + Add */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
              <button
                type="button"
                onClick={() => setViewMode('timeline')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md transition-all ${
                  viewMode === 'timeline'
                    ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800 font-medium'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Sơ đồ giờ</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800 font-medium'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>Danh sách ({filteredBookings.length})</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => loadData(true)}
              className="h-8 w-8 rounded-lg border border-slate-200/80 hover:border-slate-300 bg-white text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors"
              title="Làm mới lịch hẹn"
            >
              <RefreshCcw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => {
                if (resources.length > 0 && !formData.resourceId) {
                  setFormData(prev => ({ ...prev, resourceId: resources[0].id }));
                }
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all active:scale-[0.985]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tạo lịch hẹn</span>
            </button>
          </div>
        </div>

        {/* Main Body: Timeline View vs List View */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-auto relative bg-white custom-scrollbar"
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center h-80 text-slate-400">
              <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-xs">Đang tải lịch điều phối...</p>
            </div>
          ) : viewMode === 'list' ? (
            /* AGENDA / LIST VIEW */
            <div className="min-w-full">
              <table className="min-w-full border-collapse text-left">
                <thead className="bg-slate-50/90 text-slate-500 text-[11px] font-medium sticky top-0 z-20 border-b border-slate-200/80">
                  <tr>
                    <th className="px-5 py-3 font-medium">Khung giờ</th>
                    <th className="px-5 py-3 font-medium">Khách hàng</th>
                    <th className="px-5 py-3 font-medium">{config.serviceLabel}</th>
                    <th className="px-5 py-3 font-medium">{config.resourceTitle}</th>
                    <th className="px-5 py-3 font-medium">Trạng thái</th>
                    <th className="px-5 py-3 font-medium text-right">Thao tác nhanh</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-16 text-center text-slate-400">
                        Không có lịch hẹn nào trong ngày {selectedDate} khớp với bộ lọc.
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map(booking => {
                      const start = new Date(booking.start_time);
                      const end = new Date(booking.end_time);
                      const resObj = resources.find(r => r.id === booking.resource_id);
                      const price = getAppointmentPrice(booking);
                      const phoneClean = booking.customer_phone
                        ? String(booking.customer_phone).replace(/\s+/g, '')
                        : '';

                      return (
                        <tr
                          key={booking.id}
                          onClick={() => setSelectedAppointment(booking)}
                          className="hover:bg-slate-50/80 cursor-pointer transition-colors group"
                        >
                          <td className="px-5 py-3.5 font-mono tabular-nums font-semibold text-slate-900 whitespace-nowrap">
                            {start.toLocaleTimeString('vi-VN', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}{' '}
                            –{' '}
                            {end.toLocaleTimeString('vi-VN', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </td>
                          <td className="px-5 py-3.5">
                            <div className="font-semibold text-slate-900">
                              {booking.customer_name}
                            </div>
                            {booking.customer_phone && (
                              <div className="font-mono tabular-nums text-[11px] text-slate-400 mt-0.5">
                                {booking.customer_phone}
                              </div>
                            )}
                          </td>
                          <td className="px-5 py-3.5">
                            <div className="font-medium text-slate-800">
                              {booking.service_name || 'Dịch vụ tiêu chuẩn'}
                            </div>
                            {price > 0 && (
                              <div className="font-mono tabular-nums text-[11px] text-slate-500 mt-0.5">
                                {formatVND(price)}
                              </div>
                            )}
                          </td>
                          <td className="px-5 py-3.5 text-slate-700 font-medium">
                            {resObj ? (
                              resObj.name
                            ) : (
                              <span className="text-amber-600">Chưa xếp nhân sự/chỗ</span>
                            )}
                          </td>
                          <td className="px-5 py-3.5">{getStatusBadge(booking.status)}</td>
                          <td
                            className="px-5 py-3.5 text-right whitespace-nowrap"
                            onClick={e => e.stopPropagation()}
                          >
                            <div className="inline-flex items-center gap-1.5">
                              {phoneClean && (
                                <>
                                  <a
                                    href={`tel:${phoneClean}`}
                                    title="Gọi điện"
                                    className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                                  >
                                    <Phone className="w-3.5 h-3.5" />
                                  </a>
                                  <a
                                    href={`https://zalo.me/${phoneClean}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Nhắn Zalo"
                                    className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                  </a>
                                </>
                              )}
                              {booking.status === 'pending' && (
                                <button
                                  type="button"
                                  onClick={() => handleStatusChange(booking.id, 'confirmed')}
                                  className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold transition-colors"
                                >
                                  Duyệt
                                </button>
                              )}
                              {booking.status === 'confirmed' && (
                                <button
                                  type="button"
                                  onClick={() => handleStatusChange(booking.id, 'completed')}
                                  className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-colors"
                                >
                                  Hoàn tất
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          ) : resources.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-80 text-slate-400">
              <p className="text-xs">
                Chưa có {config.resourceLabel} nào hoạt động. Vui lòng thêm trong tab Nhân sự & Khu
                vực.
              </p>
            </div>
          ) : (
            /* TIMELINE VIEW */
            <div className="min-w-[1000px] inline-block w-full relative">
              {/* Timeline Header (Time Slots) */}
              <div className="flex border-b border-slate-200/80 sticky top-0 bg-slate-50/95 backdrop-blur-md z-20">
                <div className="w-52 shrink-0 px-4 py-3 border-r border-slate-200/80 font-semibold text-slate-600 text-xs flex items-center gap-2">
                  <span>{config.resourceTitle}</span>
                </div>
                <div className="flex-1 flex relative">
                  {timeSlots.map(time => (
                    <div
                      key={time}
                      className="flex-1 min-w-[80px] py-3 text-center border-r border-slate-100 text-[11px] font-mono tabular-nums font-medium text-slate-500"
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>

              {/* Resource Rows */}
              <div className="divide-y divide-slate-100 relative">
                {resources.map(resource => {
                  const resourceBookings = filteredBookings.filter(
                    b => b.resource_id === resource.id && b.status !== 'cancelled'
                  );

                  return (
                    <div
                      key={resource.id}
                      className="flex min-h-[88px] group hover:bg-slate-50/50 transition-colors"
                    >
                      {/* Resource Info Column */}
                      <div className="w-52 shrink-0 px-4 py-3 border-r border-slate-200/80 flex flex-col justify-center bg-white group-hover:bg-slate-50/60 transition-colors z-10 sticky left-0">
                        <div className="font-semibold text-slate-900 text-xs flex items-center justify-between">
                          <span className="truncate">{resource.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        </div>
                        {resource.role_or_capacity && (
                          <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                            {resource.role_or_capacity}
                          </div>
                        )}
                      </div>

                      {/* Time Grid for this Resource */}
                      <div
                        className="flex-1 flex relative"
                        onDragOver={e => {
                          e.preventDefault();
                          const rect = e.currentTarget.getBoundingClientRect();
                          const offsetX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                          const percent = offsetX / rect.width;

                          const totalHours = timeSlots.length;
                          const startH = parseInt(settings.opening_time.split(':')[0], 10);
                          const exactHour = startH + percent * totalHours;

                          const snappedHour = Math.floor(exactHour);
                          const snappedMinutes = Math.round(((exactHour % 1) * 60) / 15) * 15;

                          const finalDate = new Date(selectedDate);
                          finalDate.setHours(snappedHour, snappedMinutes, 0, 0);

                          const snapPercent =
                            ((finalDate.getHours() - startH + finalDate.getMinutes() / 60) /
                              totalHours) *
                            100;
                          const timeText = finalDate.toLocaleTimeString('vi-VN', {
                            hour: '2-digit',
                            minute: '2-digit',
                          });

                          if (
                            !dragOverInfo ||
                            dragOverInfo.resourceId !== resource.id ||
                            dragOverInfo.timeText !== timeText
                          ) {
                            setDragOverInfo({
                              resourceId: resource.id,
                              timeText,
                              leftPercent: snapPercent,
                            });
                          }
                        }}
                        onDragLeave={() => setDragOverInfo(null)}
                        onDrop={e => {
                          e.preventDefault();
                          setDragOverInfo(null);
                          const bookingId = e.dataTransfer.getData('booking_id');
                          if (!bookingId) return;
                          const booking = bookings.find(b => b.id === bookingId);
                          if (!booking) return;

                          const rect = e.currentTarget.getBoundingClientRect();
                          const offsetX = e.clientX - rect.left;
                          const percent = Math.max(0, Math.min(1, offsetX / rect.width));

                          const totalHours = timeSlots.length;
                          const startH = parseInt(settings.opening_time.split(':')[0], 10);
                          const exactHour = startH + percent * totalHours;

                          const snappedHour = Math.floor(exactHour);
                          const snappedMinutes = Math.round(((exactHour % 1) * 60) / 15) * 15;

                          const oldStart = new Date(booking.start_time);
                          const oldEnd = new Date(booking.end_time);
                          const durationMs = oldEnd.getTime() - oldStart.getTime();

                          const newStart = new Date(selectedDate);
                          newStart.setHours(snappedHour, snappedMinutes, 0, 0);
                          const newEnd = new Date(newStart.getTime() + durationMs);

                          handleAppointmentDrop(booking.id, newStart, newEnd, resource.id);
                        }}
                      >
                        {timeSlots.map(time => (
                          <div
                            key={time}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, resourceId: resource.id, time }));
                              setIsModalOpen(true);
                            }}
                            className="flex-1 min-w-[80px] border-r border-slate-100/90 h-full hover:bg-slate-100/40 cursor-pointer transition-colors"
                          />
                        ))}

                        {/* Live Current Time Needle */}
                        {liveNeedlePercent !== null && (
                          <div
                            className="absolute top-0 bottom-0 w-px bg-rose-500 z-20 pointer-events-none"
                            style={{ left: `${liveNeedlePercent}%` }}
                          />
                        )}

                        {dragOverInfo && dragOverInfo.resourceId === resource.id && (
                          <div
                            className="absolute top-0 bottom-0 w-0.5 bg-slate-900 z-30 pointer-events-none"
                            style={{ left: `${dragOverInfo.leftPercent}%` }}
                          >
                            <div className="bg-slate-900 text-white text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded -translate-x-1/2 mt-1 whitespace-nowrap">
                              {dragOverInfo.timeText}
                            </div>
                          </div>
                        )}

                        {resourceBookings.map(booking => {
                          const startTime = new Date(booking.start_time);
                          const endTime = new Date(booking.end_time);

                          const startHour = startTime.getHours() + startTime.getMinutes() / 60;
                          const endHour = endTime.getHours() + endTime.getMinutes() / 60;
                          const duration = Math.max(0.5, endHour - startHour);

                          const openH = parseInt(settings.opening_time.split(':')[0], 10);
                          const totalCols = timeSlots.length;
                          const leftPosPercent = ((startHour - openH) / totalCols) * 100;
                          const widthPercent = (duration / totalCols) * 100;

                          if (leftPosPercent < 0 || leftPosPercent >= 100) return null;

                          return (
                            <div
                              key={booking.id}
                              draggable
                              onDragStart={e => {
                                e.dataTransfer.setData('booking_id', booking.id);
                              }}
                              onDragEnd={() => setDragOverInfo(null)}
                              onClick={() => setSelectedAppointment(booking)}
                              className={`absolute top-2.5 bottom-2.5 rounded-xl px-2.5 py-2 border cursor-pointer transition-all overflow-hidden flex flex-col justify-between ${getStatusStyle(
                                booking.status
                              )}`}
                              style={{
                                left: `calc(${leftPosPercent}% + 3px)`,
                                width: `calc(${widthPercent}% - 6px)`,
                              }}
                            >
                              <div className="flex items-center justify-between gap-1 truncate">
                                <span className="font-semibold text-xs truncate">
                                  {booking.customer_name}
                                </span>
                                <span className="font-mono tabular-nums text-[10px] opacity-80 shrink-0">
                                  {startTime.toLocaleTimeString('vi-VN', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })}
                                </span>
                              </div>
                              <div className="text-[11px] opacity-80 truncate">
                                {booking.service_name || 'Dịch vụ tiêu chuẩn'}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* Unassigned Row */}
                {filteredBookings.filter(b => !b.resource_id && b.status !== 'cancelled').length >
                  0 && (
                  <div className="flex min-h-[88px] bg-amber-50/30">
                    <div className="w-52 shrink-0 px-4 py-3 border-r border-slate-200/80 flex flex-col justify-center bg-amber-50/60 z-10 sticky left-0">
                      <div className="font-semibold text-amber-900 text-xs">
                        Chưa phân bổ nhân sự
                      </div>
                      <div className="text-[11px] text-amber-700 mt-0.5">
                        Kéo thả lên hàng trên để xếp lịch
                      </div>
                    </div>
                    <div className="flex-1 flex relative">
                      {timeSlots.map(time => (
                        <div
                          key={time}
                          className="flex-1 min-w-[80px] border-r border-amber-100/60 h-full"
                        />
                      ))}
                      {filteredBookings
                        .filter(b => !b.resource_id && b.status !== 'cancelled')
                        .map(booking => {
                          const startTime = new Date(booking.start_time);
                          const endTime = new Date(booking.end_time);
                          const startHour = startTime.getHours() + startTime.getMinutes() / 60;
                          const endHour = endTime.getHours() + endTime.getMinutes() / 60;
                          const duration = Math.max(0.5, endHour - startHour);
                          const openH = parseInt(settings.opening_time.split(':')[0], 10);
                          const totalCols = timeSlots.length;
                          const leftPosPercent = ((startHour - openH) / totalCols) * 100;
                          const widthPercent = (duration / totalCols) * 100;

                          if (leftPosPercent < 0 || leftPosPercent >= 100) return null;

                          return (
                            <div
                              key={booking.id}
                              draggable
                              onDragStart={e => e.dataTransfer.setData('booking_id', booking.id)}
                              onClick={() => setSelectedAppointment(booking)}
                              className={`absolute top-2.5 bottom-2.5 rounded-xl px-2.5 py-2 border cursor-pointer transition-all overflow-hidden ${getStatusStyle(
                                booking.status
                              )}`}
                              style={{
                                left: `calc(${leftPosPercent}% + 3px)`,
                                width: `calc(${widthPercent}% - 6px)`,
                              }}
                            >
                              <div className="font-semibold text-xs truncate">
                                {booking.customer_name}
                              </div>
                              <div className="text-[11px] opacity-80 truncate">
                                {booking.service_name || 'Dịch vụ tiêu chuẩn'}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Appointment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/10 w-full max-w-md overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-900 text-base">Tạo lịch hẹn mới</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Ngày hẹn: <span className="font-mono">{selectedDate}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddAppointment} className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-600 mb-1.5">
                    Họ tên khách hàng <span className="text-rose-500">*</span>
                  </label>
                  <input
                    required
                    autoFocus
                    type="text"
                    value={formData.customerName}
                    onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none text-slate-900"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-600 mb-1.5">Số điện thoại</label>
                  <input
                    type="text"
                    value={formData.customerPhone}
                    onChange={e => setFormData({ ...formData, customerPhone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none font-mono text-slate-900"
                    placeholder="0901234567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-600 mb-1.5">
                    {config.resourceTitle} <span className="text-rose-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.resourceId}
                    onChange={e => setFormData({ ...formData, resourceId: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none bg-white text-slate-900"
                  >
                    <option value="">-- Chọn {config.resourceLabel} --</option>
                    {resources.map(r => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-slate-600 mb-1.5">
                    Khung giờ <span className="text-rose-500">*</span>
                  </label>
                  <input
                    required
                    type="time"
                    value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none font-mono text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-600 mb-1.5">
                  {config.serviceLabel}
                </label>
                <select
                  value={formData.serviceId}
                  onChange={e => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none bg-white text-slate-900"
                >
                  <option value="">-- Dịch vụ tiêu chuẩn (60 phút) --</option>
                  {services.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration_minutes} phút · {formatVND(s.price)})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-600 mb-1.5">Ghi chú yêu cầu</label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200/90 focus:border-slate-400 outline-none text-slate-900"
                  placeholder="Yêu cầu đặc biệt của khách..."
                />
              </div>

              <label className="flex items-center gap-2.5 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.syncToCrm}
                  onChange={e => setFormData({ ...formData, syncToCrm: e.target.checked })}
                  className="w-4 h-4 accent-slate-900 rounded border-slate-300"
                />
                <span className="text-slate-600">
                  Tự động tạo hồ sơ khách hàng & cơ hội trên <strong>CRM Pipeline</strong>
                </span>
              </label>

              <div className="pt-3 flex justify-end gap-2.5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 rounded-lg font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors disabled:opacity-40"
                >
                  {submitting ? 'Đang lưu...' : 'Xác nhận đặt lịch'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Appointment Concierge Detail Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/10 w-full max-w-md overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <h3 className="font-semibold text-slate-900 text-base">Chi tiết phiếu hẹn</h3>
                {getStatusBadge(selectedAppointment.status)}
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleDeleteAppointment(selectedAppointment.id)}
                  className="w-8 h-8 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg flex items-center justify-center transition-colors"
                  title="Xóa lịch hẹn"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedAppointment(null);
                    setShowQrModal(false);
                  }}
                  className="w-8 h-8 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs">
              {/* Customer Info + Direct Call/Zalo/CRM Sync */}
              <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium mb-1">Khách hàng</div>
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedAppointment.customer_name}</span>
                  </div>
                  {selectedAppointment.customer_phone && (
                    <div className="font-mono tabular-nums text-xs text-slate-600 mt-1">
                      {selectedAppointment.customer_phone}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  {selectedAppointment.customer_phone && (
                    <>
                      <a
                        href={`tel:${selectedAppointment.customer_phone.replace(/\s+/g, '')}`}
                        className="h-8 px-2.5 rounded-lg bg-white border border-slate-200/80 hover:border-slate-300 text-slate-700 inline-flex items-center gap-1 font-medium transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Gọi</span>
                      </a>
                      <a
                        href={`https://zalo.me/${selectedAppointment.customer_phone.replace(
                          /\s+/g,
                          ''
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="h-8 px-2.5 rounded-lg bg-white border border-slate-200/80 hover:border-slate-300 text-slate-700 inline-flex items-center gap-1 font-medium transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Zalo</span>
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Time & Resource */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border border-slate-200/70">
                  <div className="text-[11px] text-slate-400 font-medium mb-1">Khung giờ hẹn</div>
                  <div className="font-mono tabular-nums font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>
                      {new Date(selectedAppointment.start_time).toLocaleTimeString('vi-VN', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-200/70">
                  <div className="text-[11px] text-slate-400 font-medium mb-1">
                    {config.resourceTitle}
                  </div>
                  <select
                    value={selectedAppointment.resource_id || ''}
                    onChange={async e => {
                      const newResId = e.target.value;
                      if (!newResId) return;
                      const prevBookings = bookings;
                      setBookings(prev =>
                        prev.map(b =>
                          b.id === selectedAppointment.id ? { ...b, resource_id: newResId } : b
                        )
                      );
                      setSelectedAppointment({
                        ...selectedAppointment,
                        resource_id: newResId,
                      });
                      try {
                        await BookingService.updateAppointmentResource(
                          user!.tenant_id!,
                          selectedAppointment.id,
                          newResId
                        );
                        toast.success('Đã cập nhật nhân sự / khu vực.');
                      } catch (err) {
                        setBookings(prevBookings);
                        toast.error('Không thể đổi nhân sự.');
                      }
                    }}
                    className="w-full font-semibold text-slate-900 bg-transparent outline-none cursor-pointer"
                  >
                    <option value="">-- Chưa phân bổ --</option>
                    {resources.map(r => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service & Price */}
              <div className="p-3.5 rounded-xl border border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium mb-0.5">
                    {config.serviceLabel}
                  </div>
                  <div className="font-semibold text-slate-900">
                    {selectedAppointment.service_name || 'Dịch vụ tiêu chuẩn'}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-400 font-medium mb-0.5">Chi phí</div>
                  <div className="font-mono tabular-nums font-semibold text-slate-900 text-sm">
                    {formatVND(getAppointmentPrice(selectedAppointment))}
                  </div>
                </div>
              </div>

              {selectedAppointment.notes && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600">
                  <span className="font-medium text-slate-800">Ghi chú: </span>
                  {selectedAppointment.notes}
                </div>
              )}

              {/* Quick CRM Sync & VietQR Payment Bar */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  disabled={syncingCrm}
                  onClick={async () => {
                    setSyncingCrm(true);
                    const ok = await syncAppointmentToCrm(
                      selectedAppointment.customer_name,
                      selectedAppointment.customer_phone || '',
                      selectedAppointment.service_name || 'Dịch vụ tiêu chuẩn',
                      getAppointmentPrice(selectedAppointment),
                      selectedAppointment.start_time,
                      selectedAppointment.notes
                    );
                    setSyncingCrm(false);
                    if (ok) toast.success('Đã đồng bộ khách & lịch hẹn sang CRM Pipeline.');
                    else toast.error('Không thể đồng bộ CRM.');
                  }}
                  className="flex-1 h-9 px-3 rounded-lg border border-slate-200/80 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-medium inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>{syncingCrm ? 'Đang đẩy CRM...' : 'Lưu khách vào CRM'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowQrModal(!showQrModal)}
                  className="flex-1 h-9 px-3 rounded-lg border border-slate-200/80 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-medium inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>{showQrModal ? 'Ẩn mã VietQR' : 'Mã VietQR thu tiền'}</span>
                </button>
              </div>

              {/* Expandable VietQR Box */}
              {showQrModal && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-4">
                  {bankInfo.accountNo ? (
                    <>
                      <img
                        src={`https://img.vietqr.io/image/${bankInfo.bankBin}-${
                          bankInfo.accountNo
                        }-compact2.png?amount=${getAppointmentPrice(
                          selectedAppointment
                        )}&addInfo=${encodeURIComponent(
                          `BOOKING ${selectedAppointment.customer_name}`
                        )}&accountName=${encodeURIComponent(bankInfo.accountName)}`}
                        alt="VietQR"
                        className="w-24 h-24 rounded-lg border border-slate-200 bg-white p-1 shrink-0"
                      />
                      <div className="space-y-1">
                        <div className="font-semibold text-slate-900">Quét VietQR thanh toán</div>
                        <div className="text-slate-600">
                          {bankInfo.bankName} ·{' '}
                          <span className="font-mono font-semibold">{bankInfo.accountNo}</span>
                        </div>
                        <div className="font-mono font-semibold text-emerald-700">
                          Số tiền: {formatVND(getAppointmentPrice(selectedAppointment))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-slate-500 leading-relaxed">
                      Chưa cấu hình Số tài khoản ngân hàng trong mục{' '}
                      <strong>Giao diện & Thanh toán Web</strong>.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Status Actions */}
            <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-end gap-2">
              {selectedAppointment.status === 'pending' && (
                <>
                  <button
                    type="button"
                    onClick={() => handleStatusChange(selectedAppointment.id, 'cancelled')}
                    className="px-3.5 py-2 rounded-lg font-medium text-rose-600 hover:bg-rose-50 text-xs transition-colors"
                  >
                    Hủy lịch
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatusChange(selectedAppointment.id, 'confirmed')}
                    className="px-4 py-2 rounded-lg font-semibold text-white bg-slate-900 hover:bg-slate-800 text-xs transition-colors"
                  >
                    Xác nhận lịch hẹn
                  </button>
                </>
              )}
              {selectedAppointment.status === 'confirmed' && (
                <>
                  <button
                    type="button"
                    onClick={() => handleStatusChange(selectedAppointment.id, 'cancelled')}
                    className="px-3.5 py-2 rounded-lg font-medium text-rose-600 hover:bg-rose-50 text-xs transition-colors"
                  >
                    Hủy lịch
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStatusChange(selectedAppointment.id, 'completed')}
                    className="px-4 py-2 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 text-xs transition-colors"
                  >
                    Hoàn thành dịch vụ
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => {
                  setSelectedAppointment(null);
                  setShowQrModal(false);
                }}
                className="px-4 py-2 rounded-lg font-medium text-slate-600 bg-white border border-slate-200/80 hover:bg-slate-50 text-xs transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
