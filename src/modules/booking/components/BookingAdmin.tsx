import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Users, User, Scissors, Utensils, ChevronLeft, ChevronRight, Plus, CheckCircle2, XCircle, Trash2, RefreshCcw, LayoutGrid, CalendarDays } from 'lucide-react';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import { BookingService } from '../api/booking.service';
import { BookingResource, BookingAppointment, BookingServiceItem } from '../types';
import { getBookingConfig } from '../utils/templateConfig';
import toast from 'react-hot-toast';

const TIME_SLOTS = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];

export default function BookingAdmin({ template }: { template: string }) {
  const { user } = useAuth();
  const config = getBookingConfig(template);

  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [resources, setResources] = useState<BookingResource[]>([]);
  const [services, setServices] = useState<BookingServiceItem[]>([]);
  const [bookings, setBookings] = useState<BookingAppointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({ opening_time: '08:00', closing_time: '21:00' });
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (user?.tenant_id) {
      loadData();
    }
  }, [user?.tenant_id, selectedDate]);

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
        BookingService.getSettings(user.tenant_id)
      ]);
      setResources(res.filter(r => r.status === 'active'));
      setServices(svcs);
      setBookings(apps);
      setSettings(cfg);

      // Generate time slots based on settings
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

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-blue-500 border-blue-600 text-white shadow-blue-500/20';
      case 'completed': return 'bg-emerald-500 border-emerald-600 text-white shadow-emerald-500/20';
      case 'pending': return 'bg-amber-400 border-amber-500 text-amber-950 shadow-amber-400/20';
      default: return 'bg-slate-200 border-slate-300 text-slate-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'confirmed': return <CheckCircle2 className="w-3 h-3" />;
      case 'completed': return <CheckCircle2 className="w-3 h-3" />;
      case 'pending': return <Clock className="w-3 h-3" />;
      default: return <XCircle className="w-3 h-3" />;
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
  });
  const [submitting, setSubmitting] = useState(false);
  
  const [selectedAppointment, setSelectedAppointment] = useState<BookingAppointment | null>(null);
  const [dragOverInfo, setDragOverInfo] = useState<{ resourceId: string, timeText: string, leftPercent: number } | null>(null);

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

      await BookingService.createAppointment(user.tenant_id, {
        resource_id: res?.id,
        service_id: svc?.id,
        service_name: svc?.name || 'Dịch vụ tiêu chuẩn',
        customer_name: formData.customerName,
        customer_phone: formData.customerPhone,
        notes: formData.notes,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        status: 'confirmed'
      });
      toast.success('Đã tạo lịch hẹn thành công!');
      setIsModalOpen(false);
      setFormData({ customerName: '', customerPhone: '', resourceId: '', serviceId: '', time: '09:00', notes: '' });
      loadData(false);
    } catch (error) {
      toast.error('Lỗi tạo lịch hẹn');
    } finally {
      setSubmitting(false);
    }
  };

  const handleStatusChange = async (appointmentId: string, newStatus: string) => {
    if (!user?.tenant_id) return;
    try {
      await BookingService.updateAppointmentStatus(user.tenant_id, appointmentId, newStatus);
      toast.success('Đã cập nhật trạng thái lịch hẹn');
      loadData(false);
      setSelectedAppointment(null);
    } catch (error) {
      console.error(error);
      toast.error('Không thể cập nhật trạng thái');
    }
  };

  const handleDeleteAppointment = async (appointmentId: string) => {
    if (!user?.tenant_id) return;
    if (!window.confirm('Bạn có chắc muốn xóa vĩnh viễn lịch hẹn này?')) return;
    try {
      await BookingService.deleteAppointment(user.tenant_id, appointmentId);
      toast.success('Đã xóa lịch hẹn');
      loadData(false);
      setSelectedAppointment(null);
    } catch (error) {
      toast.error('Không thể xóa lịch hẹn');
    }
  };

  const handleAppointmentDrop = async (appointmentId: string, newStart: Date, newEnd: Date, newResourceId?: string) => {
    if (!user?.tenant_id) return;
    try {
      const updates: Partial<BookingAppointment> = {
        start_time: newStart.toISOString(),
        end_time: newEnd.toISOString()
      };
      if (newResourceId && newResourceId !== 'unassigned') {
        updates.resource_id = newResourceId;
      } else if (newResourceId === 'unassigned') {
        updates.resource_id = null as any;
      }
      await BookingService.updateAppointment(user.tenant_id, appointmentId, updates);
      loadData(false);
    } catch (error) {
      console.error(error);
      alert('Không thể cập nhật lịch hẹn');
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full animate-in fade-in duration-500 relative">
      
      {/* Header Panel */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-2xl shadow-inner border flex items-center justify-center transition-colors ${config.color}`}>
            {config.icon}
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800">Điều phối Lịch hẹn</h2>
            <p className="text-sm text-slate-500 font-medium">Quản lý {config.resourceLabel} theo thời gian thực</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => loadData(true)} className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-xl font-bold text-sm shadow-sm flex items-center gap-2 transition-colors">
            <RefreshCcw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-indigo-500' : ''}`} /> Tải lại
          </button>
          <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" /> Đặt lịch mới
          </button>
        </div>
      </div>

      {/* Date Navigator & Filters */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-4">
          <button onClick={() => changeDate(-1)} className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
            <CalendarIcon className="w-5 h-5 text-indigo-500" /> {selectedDate}
          </div>
          <button onClick={() => changeDate(1)} className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"><ChevronRight className="w-5 h-5" /></button>
          <button onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 ml-2 bg-indigo-50 px-3 py-1.5 rounded-lg">Hôm nay</button>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-amber-400"></div> Chờ xác nhận</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Đã xác nhận</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Đã phục vụ</div>
          </div>
        </div>
      </div>

      {/* Time Grid (Resource on Y, Time on X) */}
      <div className="flex-1 overflow-auto bg-slate-50 relative custom-scrollbar flex flex-col" ref={scrollContainerRef}>
        {loading ? (
          <div className="flex items-center justify-center h-full text-slate-400 font-medium">Đang tải dữ liệu...</div>
        ) : resources.length === 0 ? (
          <div className="flex items-center justify-center h-full text-slate-400 font-medium flex-col gap-2">
            <CalendarIcon className="w-12 h-12 text-slate-200" />
            Chưa có tài nguyên (Nhân sự/Bàn) nào.
            <div className="text-sm text-slate-400 mt-2">Hãy qua tab Tài Nguyên để thêm mới.</div>
          </div>
        ) : (
          <div className="inline-block min-w-full">
            
            {/* Grid Header (Time) */}
            <div className="flex sticky top-0 bg-white z-20 border-b border-slate-200 shadow-sm">
              <div className="w-48 shrink-0 border-r border-slate-200 bg-slate-50/80 backdrop-blur p-4 sticky left-0 z-30 font-bold text-slate-500 text-sm flex items-center justify-center">
                {config.resourceTitle}
              </div>
              <div className="flex-1 flex">
                {timeSlots.map(time => (
                  <div key={time} className="flex-1 border-r border-slate-100 p-3 text-center text-sm font-bold text-slate-400 min-w-[40px]">
                    {time}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Body (Resources) */}
            <div className="relative">
              {/* Background Grid Lines */}
              <div className="absolute top-0 left-48 right-0 bottom-0 flex pointer-events-none">
                 {timeSlots.map(time => (
                   <div key={time} className="flex-1 border-r border-slate-200/50 h-full"></div>
                 ))}
              </div>

              {resources.map((res) => (
                <div key={res.id} className="flex border-b border-slate-200 bg-white hover:bg-slate-50/50 transition-colors group">
                  
                  {/* Resource Card */}
                  <div className="w-48 shrink-0 border-r border-slate-200 bg-white p-4 sticky left-0 z-10 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm ${config.avatarBg || 'bg-indigo-600'}`}>
                      {res.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm truncate w-28" title={res.name}>{res.name}</div>
                      <div className="text-xs text-slate-400 font-medium">
                        {res.role_or_capacity ? res.role_or_capacity : '-'}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Row */}
                  <div 
                    className="flex-1 relative h-24"
                    onDragOver={(e) => {
                      e.preventDefault();
                      const rect = e.currentTarget.getBoundingClientRect();
                      const offsetX = e.clientX - rect.left;
                      const totalSlots = timeSlots.length;
                      const percent = offsetX / rect.width;
                      const slotIdx = percent * totalSlots;
                      const baseHour = parseInt(settings.opening_time.split(':')[0], 10);
                      const newHour = Math.floor(baseHour + slotIdx);
                      const newMinutes = Math.floor((slotIdx % 1) * 60);
                      const snappedMinutes = Math.round(newMinutes / 15) * 15;
                      
                      // Convert snapped time to percent
                      const finalHour = newHour + Math.floor(snappedMinutes / 60);
                      const finalMin = snappedMinutes % 60;
                      const snappedSlotIdx = (finalHour - baseHour) + (finalMin / 60);
                      const snappedPercent = (snappedSlotIdx / totalSlots) * 100;

                      const timeStr = `${finalHour.toString().padStart(2, '0')}:${finalMin.toString().padStart(2, '0')}`;
                      setDragOverInfo({ resourceId: res.id, timeText: timeStr, leftPercent: snappedPercent });
                    }}
                    onDragLeave={() => setDragOverInfo(null)}
                    onDrop={(e) => {
                       e.preventDefault();
                       setDragOverInfo(null);
                       const bookingId = e.dataTransfer.getData('booking_id');
                       if(!bookingId) return;
                       
                       const rect = e.currentTarget.getBoundingClientRect();
                       const offsetX = e.clientX - rect.left;
                       
                       const totalSlots = timeSlots.length;
                       const percent = offsetX / rect.width;
                       
                       const slotIdx = percent * totalSlots;
                       const baseHour = parseInt(settings.opening_time.split(':')[0], 10);
                       const newHour = Math.floor(baseHour + slotIdx);
                       const newMinutes = Math.floor((slotIdx % 1) * 60);
                       
                       // Snap to 15 mins
                       const snappedMinutes = Math.round(newMinutes / 15) * 15;
                       
                       const booking = bookings.find(b => b.id === bookingId);
                       if(!booking) return;
                       
                       const newStart = new Date(booking.start_time);
                       newStart.setHours(newHour, snappedMinutes, 0, 0);
                       
                       const duration = new Date(booking.end_time).getTime() - new Date(booking.start_time).getTime();
                       const newEnd = new Date(newStart.getTime() + duration);
                       
                       handleAppointmentDrop(bookingId, newStart, newEnd, res.id);
                    }}
                  >
                    {/* Drag Over Indicator */}
                    {dragOverInfo?.resourceId === res.id && (
                      <div 
                        className="absolute top-0 bottom-0 w-0.5 bg-indigo-500 z-50 pointer-events-none"
                        style={{ left: `calc(${dragOverInfo.leftPercent}% + 4px)` }}
                      >
                        <div className="absolute top-1 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
                          {dragOverInfo.timeText}
                        </div>
                      </div>
                    )}
                    
                    {bookings.filter(b => b.resource_id === res.id).map(booking => {
                      // Calculate position based on start_time
                      const startTime = new Date(booking.start_time);
                      const endTime = new Date(booking.end_time);
                      const hour = startTime.getHours();
                      const minutes = startTime.getMinutes();
                      
                      // Duration in hours
                      const durationHours = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);

                      const baseStartHour = parseInt(settings.opening_time.split(':')[0], 10);
                      const startSlotIdx = (hour - baseStartHour) + (minutes / 60);
                      if (startSlotIdx < 0) return null; // Outside grid
                      
                      const totalSlots = timeSlots.length;
                      const leftPosPercent = (startSlotIdx / totalSlots) * 100;
                      const widthPercent = (durationHours / totalSlots) * 100;
                      
                      return (
                        <div 
                          key={booking.id}
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData('booking_id', booking.id);
                          }}
                          onDragEnd={() => setDragOverInfo(null)}
                          onClick={() => setSelectedAppointment(booking)}
                          className={`absolute top-3 h-18 rounded-xl p-2.5 shadow-md border cursor-pointer hover:brightness-110 hover:-translate-y-0.5 transition-all overflow-hidden active:scale-95 active:shadow-sm ${getStatusColor(booking.status)}`}
                          style={{ left: `calc(${leftPosPercent}% + 4px)`, width: `calc(${widthPercent}% - 8px)` }}
                        >
                           <div className="flex items-center gap-1.5 font-bold text-sm mb-0.5 truncate drop-shadow-sm">
                             {getStatusIcon(booking.status)}
                             {startTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} - {booking.customer_name}
                           </div>
                           <div className="text-xs opacity-90 truncate font-medium">
                             {booking.service_name || 'Dịch vụ mặc định'}
                           </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              {/* Unassigned Bookings Row */}
              {bookings.some(b => !b.resource_id) && (
                <div className="flex border-b border-slate-200 bg-amber-50/30 hover:bg-amber-50/60 transition-colors group">
                  <div className="w-48 shrink-0 border-r border-slate-200 bg-amber-50/50 p-4 sticky left-0 z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-400 text-white font-bold text-sm shadow-sm">
                      ?
                    </div>
                    <div>
                      <div className="font-bold text-amber-800 text-sm truncate w-28">Chưa xếp chỗ</div>
                      <div className="text-xs text-amber-600 font-medium">Đợi phân bổ</div>
                    </div>
                  </div>
                  <div 
                    className="flex-1 relative h-24"
                    onDragOver={(e) => {
                      e.preventDefault();
                      const rect = e.currentTarget.getBoundingClientRect();
                      const offsetX = e.clientX - rect.left;
                      const totalSlots = timeSlots.length;
                      const percent = offsetX / rect.width;
                      const slotIdx = percent * totalSlots;
                      const baseHour = parseInt(settings.opening_time.split(':')[0], 10);
                      const newHour = Math.floor(baseHour + slotIdx);
                      const newMinutes = Math.floor((slotIdx % 1) * 60);
                      const snappedMinutes = Math.round(newMinutes / 15) * 15;
                      
                      // Convert snapped time to percent
                      const finalHour = newHour + Math.floor(snappedMinutes / 60);
                      const finalMin = snappedMinutes % 60;
                      const snappedSlotIdx = (finalHour - baseHour) + (finalMin / 60);
                      const snappedPercent = (snappedSlotIdx / totalSlots) * 100;

                      const timeStr = `${finalHour.toString().padStart(2, '0')}:${finalMin.toString().padStart(2, '0')}`;
                      setDragOverInfo({ resourceId: 'unassigned', timeText: timeStr, leftPercent: snappedPercent });
                    }}
                    onDragLeave={() => setDragOverInfo(null)}
                    onDrop={(e) => {
                       e.preventDefault();
                       setDragOverInfo(null);
                       const bookingId = e.dataTransfer.getData('booking_id');
                       if(!bookingId) return;
                       
                       const rect = e.currentTarget.getBoundingClientRect();
                       const offsetX = e.clientX - rect.left;
                       
                       const totalSlots = timeSlots.length;
                       const percent = offsetX / rect.width;
                       
                       const slotIdx = percent * totalSlots;
                       const baseHour = parseInt(settings.opening_time.split(':')[0], 10);
                       const newHour = Math.floor(baseHour + slotIdx);
                       const newMinutes = Math.floor((slotIdx % 1) * 60);
                       
                       // Snap to 15 mins
                       const snappedMinutes = Math.round(newMinutes / 15) * 15;
                       
                       const booking = bookings.find(b => b.id === bookingId);
                       if(!booking) return;
                       
                       const newStart = new Date(booking.start_time);
                       newStart.setHours(newHour, snappedMinutes, 0, 0);
                       
                       const duration = new Date(booking.end_time).getTime() - new Date(booking.start_time).getTime();
                       const newEnd = new Date(newStart.getTime() + duration);
                       
                       handleAppointmentDrop(bookingId, newStart, newEnd, 'unassigned');
                    }}
                  >
                    {/* Drag Over Indicator */}
                    {dragOverInfo?.resourceId === 'unassigned' && (
                      <div 
                        className="absolute top-0 bottom-0 w-0.5 bg-indigo-500 z-50 pointer-events-none"
                        style={{ left: `calc(${dragOverInfo.leftPercent}% + 4px)` }}
                      >
                        <div className="absolute top-1 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
                          {dragOverInfo.timeText}
                        </div>
                      </div>
                    )}
                    
                    {bookings.filter(b => !b.resource_id).map(booking => {
                      const startTime = new Date(booking.start_time);
                      const endTime = new Date(booking.end_time);
                      const hour = startTime.getHours();
                      const minutes = startTime.getMinutes();
                      const durationHours = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
                      const baseStartHour = parseInt(settings.opening_time.split(':')[0], 10);
                      const startSlotIdx = (hour - baseStartHour) + (minutes / 60);
                      if (startSlotIdx < 0) return null;
                      const totalSlots = timeSlots.length;
                      const leftPosPercent = (startSlotIdx / totalSlots) * 100;
                      const widthPercent = (durationHours / totalSlots) * 100;
                      
                      return (
                        <div 
                          key={booking.id}
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData('booking_id', booking.id);
                          }}
                          onDragEnd={() => setDragOverInfo(null)}
                          onClick={() => setSelectedAppointment(booking)}
                          className={`absolute top-3 h-18 rounded-xl p-2.5 shadow-md border cursor-pointer hover:brightness-110 hover:-translate-y-0.5 transition-all overflow-hidden active:scale-95 active:shadow-sm ${getStatusColor(booking.status)}`}
                          style={{ left: `calc(${leftPosPercent}% + 4px)`, width: `calc(${widthPercent}% - 8px)` }}
                        >
                           <div className="flex items-center gap-1.5 font-bold text-sm mb-0.5 truncate drop-shadow-sm">
                             {getStatusIcon(booking.status)}
                             {startTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} - {booking.customer_name}
                           </div>
                           <div className="text-xs opacity-90 truncate font-medium">
                             {booking.service_name || 'Dịch vụ mặc định'}
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="font-bold text-slate-800 text-lg">Đặt lịch mới</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                 <span className="text-2xl leading-none">&times;</span>
              </button>
            </div>
            <form onSubmit={handleAddAppointment} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Tên khách hàng <span className="text-red-500">*</span></label>
                  <input required autoFocus type="text" value={formData.customerName} onChange={e => setFormData({...formData, customerName: e.target.value})} className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Số điện thoại</label>
                  <input type="text" value={formData.customerPhone} onChange={e => setFormData({...formData, customerPhone: e.target.value})} className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" placeholder="0901234567" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">{config.resourceTitle} <span className="text-red-500">*</span></label>
                  <select required value={formData.resourceId} onChange={e => setFormData({...formData, resourceId: e.target.value})} className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-white">
                    <option value="">-- Chọn {config.resourceLabel} --</option>
                    {resources.map(r => (
                      <option key={r.id} value={r.id}>{r.name} ({r.role_or_capacity || '-'})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Giờ hẹn <span className="text-red-500">*</span></label>
                  <input required type="time" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">{config.serviceLabel}</label>
                <select value={formData.serviceId} onChange={e => setFormData({...formData, serviceId: e.target.value})} className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-white">
                  <option value="">-- Dịch vụ mặc định (60 phút) --</option>
                  {services.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration_minutes}p - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(s.price)})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Ghi chú</label>
                <input type="text" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" placeholder="Yêu cầu đặc biệt của khách..." />
              </div>
              <div className="pt-3 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors">Hủy</button>
                <button type="submit" disabled={submitting} className="flex-1 px-4 py-2.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-50">
                  {submitting ? 'Đang lưu...' : 'Tạo lịch hẹn'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Appointment Detail Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="font-bold text-slate-800 text-lg">Chi tiết Lịch hẹn</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDeleteAppointment(selectedAppointment.id)}
                  className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Xóa lịch hẹn này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button onClick={() => setSelectedAppointment(null)} className="text-slate-400 hover:text-slate-600 transition-colors">
                   <span className="text-2xl leading-none">&times;</span>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
               <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Khách hàng</div>
                  <div className="font-bold text-slate-800 text-lg flex items-center gap-2">
                     <User className="w-4 h-4 text-slate-400" />
                     {selectedAppointment.customer_name}
                  </div>
                  {selectedAppointment.customer_phone && (
                     <div className="text-sm text-slate-600 mt-1">{selectedAppointment.customer_phone}</div>
                  )}
               </div>

               <div className="h-px bg-slate-100"></div>

               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Thời gian</div>
                    <div className="font-bold text-slate-800 flex items-center gap-2">
                       <Clock className="w-4 h-4 text-indigo-500" />
                       {new Date(selectedAppointment.start_time).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  <div>
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{config.resourceTitle}</div>
                     {selectedAppointment.resource_id ? (
                       <div className="font-bold text-slate-800 flex items-center gap-2">
                          <div className={`${config.iconColor}`}>{config.smallIcon}</div>
                          {resources.find(r => r.id === selectedAppointment.resource_id)?.name || 'N/A'}
                       </div>
                     ) : (
                       <select 
                          className="w-full text-sm border border-slate-200 rounded-lg p-1.5 focus:ring-2 focus:ring-indigo-500/20 outline-none"
                          onChange={async (e) => {
                             if (!e.target.value) return;
                             try {
                               await BookingService.updateAppointmentResource(user!.tenant_id!, selectedAppointment.id, e.target.value);
                               loadData(false);
                               setSelectedAppointment(null);
                             } catch (err) { toast.error('Lỗi xếp chỗ!'); }
                          }}
                       >
                          <option value="">-- Chọn chỗ / nhân sự --</option>
                          {resources.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                       </select>
                     )}
                  </div>
               </div>

               <div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{config.serviceLabel}</div>
                 <div className="font-medium text-slate-700">{selectedAppointment.service_name || 'Mặc định (Chưa chọn dịch vụ cụ thể)'}</div>
               </div>

               {selectedAppointment.notes && (
                 <div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Ghi chú</div>
                   <div className="text-sm text-slate-600 bg-amber-50 p-3 rounded-lg border border-amber-100 italic">{selectedAppointment.notes}</div>
                 </div>
               )}
            </div>

            <div className="p-6 pt-2 flex gap-3 bg-slate-50 border-t border-slate-100 flex-wrap">
              {selectedAppointment.status === 'pending' && (
                <>
                  <button onClick={() => handleStatusChange(selectedAppointment.id, 'confirmed')} className="flex-1 px-4 py-2 rounded-xl font-bold text-white bg-blue-500 hover:bg-blue-600 shadow-sm shadow-blue-500/30 transition-colors">Xác nhận</button>
                  <button onClick={() => handleStatusChange(selectedAppointment.id, 'cancelled')} className="flex-1 px-4 py-2 rounded-xl font-bold text-white bg-rose-500 hover:bg-rose-600 shadow-sm shadow-rose-500/30 transition-colors">Hủy lịch</button>
                </>
              )}
              {selectedAppointment.status === 'confirmed' && (
                <>
                  <button onClick={() => handleStatusChange(selectedAppointment.id, 'completed')} className="flex-1 px-4 py-2 rounded-xl font-bold text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm shadow-emerald-500/30 transition-colors">Đã phục vụ</button>
                  <button onClick={() => handleStatusChange(selectedAppointment.id, 'cancelled')} className="flex-1 px-4 py-2 rounded-xl font-bold text-white bg-rose-500 hover:bg-rose-600 shadow-sm shadow-rose-500/30 transition-colors">Hủy lịch</button>
                </>
              )}
              <button onClick={() => setSelectedAppointment(null)} className="flex-1 px-4 py-2 rounded-xl font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors min-w-[100px]">Đóng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
