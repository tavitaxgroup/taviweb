'use client';

import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Scissors,
  Utensils,
  User,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Stethoscope,
  BriefcaseMedical,
  Coffee,
  Dumbbell,
  Paintbrush,
  Gavel,
  Wrench,
  Car,
  Bike,
} from 'lucide-react';
import { BookingService } from '../api/booking.service';
import { BookingResource, BookingServiceItem } from '../types';

interface Props {
  tenantId: string;
  tenantName: string;
  templateKey: string;
}

export default function PublicBookingForm({ tenantId, tenantName, templateKey }: Props) {
  const [resources, setResources] = useState<BookingResource[]>([]);
  const [services, setServices] = useState<BookingServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [bookedSlots, setBookedSlots] = useState<{ start: string; end: string }[]>([]);
  const [dates, setDates] = useState<
    { date: Date; label: string; dayName: string; fullDate: string }[]
  >([]);

  const isGarage = templateKey === 'garage_oto';

  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    notes: '',
    date: new Date().toISOString().split('T')[0],
    time: '',
    resourceId: '',
    serviceId: '',
    vehicleType: 'Ô tô',
    vehicleModel: '',
    licensePlate: '',
    odoKm: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res, svcs, config] = await Promise.all([
          BookingService.getResources(tenantId),
          BookingService.getServices(tenantId),
          BookingService.getSettings(tenantId),
        ]);
        const activeRes = res.filter(r => r.status === 'active');
        setResources(activeRes);
        setServices(svcs);

        const slots = [];
        const startHour = parseInt(config.opening_time.split(':')[0], 10);
        const endHour = parseInt(config.closing_time.split(':')[0], 10);
        for (let i = startHour; i <= endHour; i++) {
          slots.push(`${i.toString().padStart(2, '0')}:00`);
          if (i !== endHour) {
            slots.push(`${i.toString().padStart(2, '0')}:30`);
          }
        }
        setTimeSlots(slots);

        const nextDates: { date: Date; dayName: string; label: string; fullDate: string }[] = [];
        const today = new Date();
        for (let i = 0; i < 14; i++) {
          const d = new Date(today);
          d.setDate(d.getDate() + i);

          let dayName = d.toLocaleDateString('vi-VN', { weekday: 'short' });
          if (i === 0) dayName = 'Hôm nay';
          else if (i === 1) dayName = 'Ngày mai';

          nextDates.push({
            date: d,
            dayName,
            label: `${d.getDate()}/${d.getMonth() + 1}`,
            fullDate: d.toLocaleDateString('vi-VN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
          });
        }
        setDates(nextDates);
        let preselectedServiceId = '';
        let preselectedResourceId = '';
        let preVehicleType = '';
        let preVehicleModel = '';
        let preLicensePlate = '';
        if (typeof window !== 'undefined') {
          const sp = new URLSearchParams(window.location.search);
          const qServiceId = sp.get('serviceId');
          const qServiceName = sp.get('service');
          const qResourceId = sp.get('resourceId');
          preVehicleType = sp.get('vehicleType') || '';
          preVehicleModel = sp.get('vehicleModel') || '';
          preLicensePlate = sp.get('licensePlate') || '';
          if (qServiceId && svcs.some(s => s.id === qServiceId)) {
            preselectedServiceId = qServiceId;
          } else if (qServiceName) {
            const matched = svcs.find(
              s =>
                s.name.toLowerCase().includes(qServiceName.toLowerCase()) ||
                qServiceName.toLowerCase().includes(s.name.toLowerCase())
            );
            if (matched) preselectedServiceId = matched.id;
          }
          if (qResourceId && activeRes.some(r => r.id === qResourceId)) {
            preselectedResourceId = qResourceId;
          }
        }
        setFormData(f => ({
          ...f,
          date: nextDates[0].date.toISOString().split('T')[0],
          serviceId: preselectedServiceId || f.serviceId,
          resourceId: preselectedResourceId || f.resourceId,
          vehicleType: preVehicleType || f.vehicleType,
          vehicleModel: preVehicleModel || f.vehicleModel,
          licensePlate: preLicensePlate || f.licensePlate,
        }));
      } catch (err) {
        console.error('Lỗi khi tải dữ liệu booking', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [tenantId]);

  useEffect(() => {
    const fetchAvailability = async () => {
      if (!formData.date) return;
      try {
        let url = `/api/public/${tenantId}/booking?date=${formData.date}`;
        if (formData.resourceId) {
          url += `&resourceId=${formData.resourceId}`;
        }
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setBookedSlots(data.booked_slots || []);
        }
      } catch (err) {
        console.error('Failed to fetch availability', err);
      }
    };
    fetchAvailability();
  }, [formData.date, formData.resourceId, tenantId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.time) return;

    let finalResourceId = formData.resourceId;
    if (!finalResourceId && resources.length > 0) {
      finalResourceId = resources[0].id;
    }

    setSubmitting(true);
    try {
      const start = new Date(formData.date);
      const [h, m] = formData.time.split(':');
      start.setHours(parseInt(h, 10), parseInt(m, 10), 0, 0);

      const service = services.find(s => s.id === formData.serviceId);
      const duration = service?.duration_minutes || 60;

      const end = new Date(start);
      end.setMinutes(start.getMinutes() + duration);

      const vehicleSummary =
        isGarage && (formData.vehicleModel.trim() || formData.licensePlate.trim())
          ? `[${formData.vehicleType}] ${formData.vehicleModel.trim() || 'Chưa rõ dòng xe'}${
              formData.licensePlate.trim() ? ` · Biển số: ${formData.licensePlate.trim().toUpperCase()}` : ''
            }${formData.odoKm.trim() ? ` · ODO: ${formData.odoKm.trim()}km` : ''}`
          : '';
      const combinedNotes = [vehicleSummary, formData.notes.trim()]
        .filter(Boolean)
        .join(' — ');

      const res = await fetch(`/api/public/${tenantId}/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resource_id: finalResourceId,
          service_id: formData.serviceId || undefined,
          service_name: service?.name || undefined,
          customer_name: formData.customerName,
          customer_phone: formData.customerPhone,
          start_time: start.toISOString(),
          end_time: end.toISOString(),
          status: 'pending',
          notes: combinedNotes || 'Đặt lịch trực tuyến trên Website',
          vehicle_type: isGarage ? formData.vehicleType : undefined,
          vehicle_model: isGarage ? formData.vehicleModel.trim() : undefined,
          license_plate: isGarage ? formData.licensePlate.trim().toUpperCase() : undefined,
          odo_km: isGarage ? formData.odoKm.trim() : undefined,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        if (res.status === 409 || errData.error === 'double_booking') {
          setBookingError(
            errData.message ||
              'Khung giờ này vừa có khách đặt trước. Vui lòng chọn khung giờ khác.'
          );
          setFormData(prev => ({ ...prev, time: '' }));
          const tempDate = formData.date;
          setFormData(prev => ({ ...prev, date: '' }));
          setTimeout(() => setFormData(prev => ({ ...prev, date: tempDate })), 50);
          return;
        }
        throw new Error('Booking failed');
      }

      setSuccess(true);
      setBookingError(null);
    } catch (err) {
      setBookingError('Không thể kết nối máy chủ. Vui lòng thử lại sau.');
    } finally {
      setSubmitting(false);
    }
  };

  const getCoverPhoto = () => {
    switch (templateKey) {
      case 'salon_toc':
        return 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200';
      case 'spa':
        return 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200';
      case 'nha_hang':
        return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200';
      case 'quan_cafe':
        return 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200';
      case 'nha_khoa':
        return 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200';
      case 'phong_kham':
      case 'tham_my_vien':
        return 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200';
      case 'phong_gym':
        return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200';
      case 'noi_that':
        return 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200';
      case 'luat_su':
        return 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200';
      case 'studio_chup_anh':
        return 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200';
      case 'garage_oto':
        return 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=85&w=1400';
      default:
        return 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200';
    }
  };

  const getIcon = () => {
    switch (templateKey) {
      case 'salon_toc':
        return <Scissors className="w-4 h-4" />;
      case 'spa':
        return <Sparkles className="w-4 h-4" />;
      case 'nha_hang':
        return <Utensils className="w-4 h-4" />;
      case 'quan_cafe':
        return <Coffee className="w-4 h-4" />;
      case 'nha_khoa':
        return <BriefcaseMedical className="w-4 h-4" />;
      case 'phong_kham':
      case 'tham_my_vien':
        return <Stethoscope className="w-4 h-4" />;
      case 'phong_gym':
        return <Dumbbell className="w-4 h-4" />;
      case 'noi_that':
        return <Paintbrush className="w-4 h-4" />;
      case 'luat_su':
        return <Gavel className="w-4 h-4" />;
      case 'garage_oto':
        return <Wrench className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const selectedService = services.find(s => s.id === formData.serviceId);
  const selectedResource = resources.find(r => r.id === formData.resourceId);
  const selectedDateObj = dates.find(d => d.date.toISOString().split('T')[0] === formData.date);

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center max-w-lg w-full mx-auto border border-slate-200/80 min-h-[380px] flex flex-col justify-center items-center">
        <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-500 text-sm">Đang tải thông tin dịch vụ & khung giờ trống...</p>
      </div>
    );
  }

  if (success) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 max-w-xl w-full mx-auto border border-slate-200/80 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.08)]">
        <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
          <CheckCircle2 className="w-7 h-7 text-emerald-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-[-0.02em] mb-2">
          Phiếu hẹn của bạn đã được xác nhận
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          Cảm ơn <strong className="text-slate-900">{formData.customerName}</strong>. Đội ngũ lễ tân
          tại <strong className="text-slate-900">{tenantName}</strong> đã ghi nhận lịch hẹn của bạn.
        </p>

        {/* Concierge Pass Summary */}
        <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-slate-200/80 space-y-3 text-sm mb-8">
          <div className="flex justify-between py-1.5 border-b border-slate-200/60">
            <span className="text-slate-500">Dịch vụ</span>
            <span className="font-semibold text-slate-900">
              {selectedService ? selectedService.name : 'Dịch vụ tiêu chuẩn'}
            </span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-200/60">
            <span className="text-slate-500">Chuyên viên / Khu vực</span>
            <span className="font-semibold text-slate-900">
              {selectedResource ? selectedResource.name : 'Sắp xếp tự động'}
            </span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-200/60">
            <span className="text-slate-500">Khung giờ hẹn</span>
            <span className="font-mono tabular-nums font-semibold text-slate-900">
              {formData.time} · {selectedDateObj?.fullDate}
            </span>
          </div>
          <div className="flex justify-between py-1.5">
            <span className="text-slate-500">Số điện thoại</span>
            <span className="font-mono tabular-nums font-semibold text-slate-900">
              {formData.customerPhone}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSuccess(false);
            setFormData({ ...formData, time: '', serviceId: '', resourceId: '', notes: '' });
          }}
          className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 text-sm rounded-full transition-all inline-flex items-center justify-center gap-2"
        >
          <CalendarIcon className="w-4 h-4" />
          <span>Đặt thêm lịch hẹn khác</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* LEFT COLUMN: Selection Flow */}
      <div className="flex-1 min-w-0 w-full space-y-6">
        {/* Editorial Cover Header */}
        <div className="w-full h-44 sm:h-56 rounded-3xl overflow-hidden relative border border-slate-200/80">
          <img
            src={getCoverPhoto()}
            className="w-full h-full object-cover"
            alt={tenantName}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium mb-2.5 border border-white/20">
              {getIcon()}
              <span>{tenantName}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-[-0.02em]">
              Đặt lịch hẹn trực tuyến
            </h1>
          </div>
        </div>

        {/* STEP 1: SERVICE SELECTION */}
        {services.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-baseline justify-between mb-5">
              <h2 className="text-lg font-semibold text-slate-900 tracking-[-0.01em]">
                Chọn dịch vụ
              </h2>
              <span className="font-mono text-xs text-slate-400">
                {services.length} gói dịch vụ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {services.map(s => {
                const isSelected = formData.serviceId === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceId: s.id })}
                    className={`text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.25)]'
                        : 'bg-white hover:bg-slate-50/70 text-slate-900 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 w-full mb-4">
                      <h3 className="font-semibold text-base leading-snug">{s.name}</h3>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </div>

                    <div className="flex items-center justify-between w-full pt-3 border-t border-current/10">
                      <span className="font-mono tabular-nums font-semibold text-sm">
                        {new Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                          maximumFractionDigits: 0,
                        }).format(s.price)}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 font-mono tabular-nums text-xs ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        {s.duration_minutes} phút
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* STEP 2: RESOURCE SELECTION */}
        {resources.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-baseline justify-between mb-5">
              <h2 className="text-lg font-semibold text-slate-900 tracking-[-0.01em]">
                Chọn chuyên viên / khu vực
              </h2>
              <span className="text-xs text-slate-400">Không bắt buộc</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, resourceId: '' })}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                  formData.resourceId === ''
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white hover:bg-slate-50/70 text-slate-800 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    formData.resourceId === ''
                      ? 'bg-white/10 text-emerald-400'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="font-semibold text-sm">Sắp xếp tự động</div>
                <div
                  className={`text-xs mt-0.5 ${
                    formData.resourceId === '' ? 'text-slate-400' : 'text-slate-400'
                  }`}
                >
                  Ưu tiên khung giờ trống
                </div>
              </button>

              {resources.map(r => {
                const isSelected = formData.resourceId === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, resourceId: r.id })}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white hover:bg-slate-50/70 text-slate-800 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-semibold text-sm mb-3 ${
                        isSelected
                          ? 'bg-white/10 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="font-semibold text-sm truncate">{r.name}</div>
                    {r.role_or_capacity && (
                      <div
                        className={`text-xs mt-0.5 truncate ${
                          isSelected ? 'text-slate-300' : 'text-slate-400'
                        }`}
                      >
                        {r.role_or_capacity}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* STEP 3: DATE & TIME SELECTION */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-lg font-semibold text-slate-900 tracking-[-0.01em]">
              Chọn ngày & khung giờ hẹn
            </h2>
          </div>

          {/* Horizontal Date Scroller */}
          <div className="flex overflow-x-auto gap-2.5 pb-4 custom-scrollbar snap-x">
            {dates.map(d => {
              const dateStr = d.date.toISOString().split('T')[0];
              const isSelected = formData.date === dateStr;
              return (
                <button
                  key={dateStr}
                  type="button"
                  onClick={() => setFormData({ ...formData, date: dateStr, time: '' })}
                  className={`shrink-0 w-20 flex flex-col items-center justify-center py-3 px-2 rounded-2xl border snap-start transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70'
                  }`}
                >
                  <span
                    className={`text-[11px] font-medium mb-1 ${
                      isSelected ? 'text-slate-300' : 'text-slate-400'
                    }`}
                  >
                    {d.dayName}
                  </span>
                  <span className="text-xl font-mono tabular-nums font-semibold">
                    {d.date.getDate()}
                  </span>
                  <span
                    className={`text-[11px] font-mono ${
                      isSelected ? 'text-slate-400' : 'text-slate-400'
                    }`}
                  >
                    Th{d.date.getMonth() + 1}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="w-full h-px bg-slate-100 my-5" />

          {bookingError && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-medium">
              {bookingError}
            </div>
          )}

          {/* Time Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
            {timeSlots.map(t => {
              const isSelected = formData.time === t;
              const [h, m] = t.split(':');
              const slotStart = new Date(formData.date);
              slotStart.setHours(parseInt(h, 10), parseInt(m, 10), 0, 0);

              const isBooked = bookedSlots.some(slot => {
                const bStart = new Date(slot.start);
                const bEnd = new Date(slot.end);
                return slotStart >= bStart && slotStart < bEnd;
              });

              return (
                <button
                  key={t}
                  type="button"
                  disabled={isBooked}
                  onClick={() => {
                    setFormData({ ...formData, time: t });
                    setBookingError(null);
                  }}
                  className={`py-3 px-2 rounded-xl font-mono tabular-nums text-xs font-semibold transition-all border ${
                    isBooked
                      ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed line-through'
                      : isSelected
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-800 border-slate-200/80 hover:border-slate-400'
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </section>

        {/* STEP 4: CUSTOMER CONTACT & VEHICLE PROFILE */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          <h2 className="text-lg font-semibold text-slate-900 tracking-[-0.01em] mb-5">
            {isGarage ? 'Thông tin chủ xe & Hồ sơ phương tiện' : 'Thông tin liên hệ'}
          </h2>

          {isGarage && (
            <div className="mb-5 p-4 rounded-2xl bg-slate-900 text-white space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
                  HỒ SƠ PHƯƠNG TIỆN (ĐỒNG BỘ TRỰC TIẾP VÀO CRM)
                </span>
                <div className="flex items-center gap-1.5">
                  {['Ô tô', 'Xe máy - PKL'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, vehicleType: type })}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        formData.vehicleType === type
                          ? 'bg-orange-500 text-white'
                          : 'bg-white/10 text-slate-300 hover:text-white'
                      }`}
                    >
                      {type === 'Ô tô' ? (
                        <Car className="w-3.5 h-3.5" />
                      ) : (
                        <Bike className="w-3.5 h-3.5" />
                      )}
                      <span>{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-5">
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Hãng & Dòng xe <span className="text-orange-400">*</span>
                  </label>
                  <input
                    required={isGarage}
                    type="text"
                    value={formData.vehicleModel}
                    onChange={e => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-white/15 focus:outline-none focus:border-orange-400 text-white text-sm"
                    placeholder="VD: Porsche 911 / Mazda CX-5 / SH350i"
                  />
                </div>
                <div className="sm:col-span-4">
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Biển số xe <span className="text-orange-400">*</span>
                  </label>
                  <input
                    required={isGarage}
                    type="text"
                    value={formData.licensePlate}
                    onChange={e =>
                      setFormData({ ...formData, licensePlate: e.target.value.toUpperCase() })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-white/15 focus:outline-none focus:border-orange-400 text-amber-300 font-mono font-bold text-sm uppercase"
                    placeholder="VD: 51K-888.88"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Số ODO (Km)
                  </label>
                  <input
                    type="text"
                    value={formData.odoKm}
                    onChange={e => setFormData({ ...formData, odoKm: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-white/15 focus:outline-none focus:border-orange-400 text-white font-mono text-sm"
                    placeholder="15.000 km"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">
                Họ và tên <span className="text-rose-500">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.customerName}
                onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:outline-none focus:border-slate-400 bg-slate-50/50 focus:bg-white text-slate-900 text-sm transition-colors"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">
                Số điện thoại <span className="text-rose-500">*</span>
              </label>
              <input
                required
                type="tel"
                value={formData.customerPhone}
                onChange={e => setFormData({ ...formData, customerPhone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:outline-none focus:border-slate-400 bg-slate-50/50 focus:bg-white text-slate-900 font-mono text-sm transition-colors"
                placeholder="0901234567"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5">
              {isGarage
                ? 'Tình trạng xe hoặc yêu cầu kỹ thuật riêng (tùy chọn)'
                : 'Ghi chú hoặc yêu cầu riêng (tùy chọn)'}
            </label>
            <input
              type="text"
              value={formData.notes}
              onChange={e => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:outline-none focus:border-slate-400 bg-slate-50/50 focus:bg-white text-slate-900 text-sm transition-colors"
              placeholder={
                isGarage
                  ? 'Ví dụ: Cần kiểm tra thêm tiếng kêu gầm, xóa vết xước cản trước...'
                  : 'Ví dụ: Đi 2 người, cần tư vấn trước khi làm...'
              }
            />
          </div>
        </section>
      </div>

      {/* RIGHT COLUMN: Sticky Concierge Pass */}
      <div className="w-full lg:w-[360px] shrink-0 lg:sticky lg:top-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.25)]">
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
            <h3 className="text-sm font-semibold text-white">Phiếu tóm tắt lịch hẹn</h3>
            <span className="text-[11px] font-mono text-emerald-400">{tenantName}</span>
          </div>

          <div className="space-y-5 text-xs">
            <div className="flex justify-between items-start gap-4">
              <span className="text-slate-400">Dịch vụ</span>
              <div className="text-right">
                <div className="font-semibold text-white text-sm">
                  {selectedService ? selectedService.name : 'Chưa chọn'}
                </div>
                {selectedService && (
                  <div className="font-mono tabular-nums text-emerald-400 font-semibold mt-1">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                      maximumFractionDigits: 0,
                    }).format(selectedService.price)}
                  </div>
                )}
              </div>
            </div>

            {isGarage && (formData.vehicleModel || formData.licensePlate) && (
              <div className="flex justify-between items-start gap-4 pt-4 border-t border-white/10">
                <span className="text-slate-400">Phương tiện</span>
                <div className="text-right">
                  <div className="font-semibold text-white">
                    {formData.vehicleModel || formData.vehicleType}
                  </div>
                  {formData.licensePlate && (
                    <span className="inline-block mt-1 px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-mono font-bold text-[11px]">
                      {formData.licensePlate}
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-between items-start gap-4 pt-4 border-t border-white/10">
              <span className="text-slate-400">{isGarage ? 'Khoang / KTV' : 'Phụ trách'}</span>
              <span className="font-semibold text-white text-right">
                {selectedResource ? selectedResource.name : 'Sắp xếp tự động'}
              </span>
            </div>

            <div className="flex justify-between items-start gap-4 pt-4 border-t border-white/10">
              <span className="text-slate-400">Thời gian</span>
              <div className="text-right">
                <div className="font-mono tabular-nums font-semibold text-white text-sm">
                  {formData.time || 'Chưa chọn giờ'}
                </div>
                <div className="text-slate-400 mt-0.5">
                  {selectedDateObj ? selectedDateObj.fullDate : ''}
                </div>
              </div>
            </div>

            {formData.customerName && (
              <div className="flex justify-between items-start gap-4 pt-4 border-t border-white/10">
                <span className="text-slate-400">Khách hàng</span>
                <div className="text-right">
                  <div className="font-semibold text-white">{formData.customerName}</div>
                  {formData.customerPhone && (
                    <div className="font-mono text-slate-400 mt-0.5">{formData.customerPhone}</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-dashed border-white/15">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting || !formData.customerName || !formData.time}
              className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm py-3.5 pl-6 pr-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.985] disabled:opacity-40 disabled:pointer-events-none group flex items-center justify-between"
            >
              <span>{submitting ? 'Đang gửi yêu cầu...' : 'Xác nhận đặt lịch'}</span>
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-4">
              Lịch hẹn được xác nhận trực tiếp vào hệ thống điều phối của cửa hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
