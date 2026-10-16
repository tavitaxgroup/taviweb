import React, { useState, useEffect } from 'react';
import { CRMClass, CRMClassSession } from '../types';
import { EduService } from '../api/edu.service';
import { X, Calendar, Plus, Trash2, Users } from 'lucide-react';
import AttendanceModal from './AttendanceModal';
import { useAuth } from '../../crm/contexts/AuthContext';

interface Props {
  cls: CRMClass;
  onClose: () => void;
}

export default function SessionManagementModal({ cls, onClose }: Props) {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<CRMClassSession[]>([]);
  const [loading, setLoading] = useState(true);

  // Auto Generate form
  const [numSessions, setNumSessions] = useState(10);
  const [startDate, setStartDate] = useState(cls.start_date || '');
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [timeOfDay, setTimeOfDay] = useState('19:00');

  // Attendance
  const [selectedSessionForAttendance, setSelectedSessionForAttendance] = useState<CRMClassSession | null>(null);

  useEffect(() => {
    if (user?.tenant_id) loadSessions();
  }, [user, cls.id]);

  const loadSessions = async () => {
    if (!user?.tenant_id) return;
    setLoading(true);
    try {
      const data = await EduService.getSessions(user.tenant_id, cls.id);
      setSessions(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const toggleDay = (day: number) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day].sort());
    }
  };

  const generateSessions = async () => {
    if (!user?.tenant_id || selectedDays.length === 0 || !startDate) {
      alert("Vui lòng chọn ngày bắt đầu và ít nhất 1 thứ trong tuần.");
      return;
    }
    
    const [year, month, day] = startDate.split('-').map(Number);
    let current = new Date(year, month - 1, day);
    const newSessions: Partial<CRMClassSession>[] = [];
    let count = 0;
    let titleIndex = sessions.length + 1;

    while (count < numSessions) {
      // getDay() returns 0 for Sun, 1 for Mon...
      if (selectedDays.includes(current.getDay())) {
        const y = current.getFullYear();
        const m = String(current.getMonth() + 1).padStart(2, '0');
        const d = String(current.getDate()).padStart(2, '0');
        const dateStr = `${y}-${m}-${d}`;
        newSessions.push({
          class_id: cls.id,
          title: `Buổi ${titleIndex}`,
          date: `${dateStr}T${timeOfDay}:00`,
          status: 'scheduled',
        });
        count++;
        titleIndex++;
      }
      current.setDate(current.getDate() + 1);
    }

    try {
      await EduService.createSessions(user.tenant_id, newSessions);
      loadSessions();
      // reset generator
      setSelectedDays([]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    if (!user?.tenant_id) return;
    if (!confirm('Bạn có chắc muốn xóa buổi học này?')) return;
    try {
      await EduService.deleteSession(user.tenant_id, id);
      loadSessions();
    } catch (e) {
      console.error(e);
    }
  };

  const daysOfWeek = [
    { value: 1, label: 'T2' },
    { value: 2, label: 'T3' },
    { value: 3, label: 'T4' },
    { value: 4, label: 'T5' },
    { value: 5, label: 'T6' },
    { value: 6, label: 'T7' },
    { value: 0, label: 'CN' },
  ];

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <div>
              <h3 className="font-bold text-lg text-slate-800">Quản lý Buổi học - {cls.name}</h3>
              <p className="text-sm text-slate-500">Tạo lịch học tự động và điểm danh</p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 bg-white p-2 rounded-full shadow-sm">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
            {/* Generator Section */}
            <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100">
              <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Tạo lịch học tự động
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Số buổi</label>
                  <input type="number" min="1" max="100" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-sm" value={numSessions} onChange={e => setNumSessions(Number(e.target.value))} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Ngày bắt đầu</label>
                  <input type="date" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-sm" value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Giờ học</label>
                  <input type="time" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-sm" value={timeOfDay} onChange={e => setTimeOfDay(e.target.value)} />
                </div>
                <div className="col-span-2 md:col-span-4">
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Thứ trong tuần</label>
                  <div className="flex gap-2 flex-wrap">
                    {daysOfWeek.map(day => (
                      <button 
                        key={day.value}
                        onClick={() => toggleDay(day.value)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold border transition-colors ${selectedDays.includes(day.value) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-300 hover:border-indigo-300'}`}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={generateSessions} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" /> Phát sinh lịch học
              </button>
            </div>

            {/* Sessions List */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4">Danh sách buổi học ({sessions.length})</h4>
              {loading ? (
                <div className="flex justify-center p-8"><div className="animate-spin h-6 w-6 border-4 border-indigo-600 border-t-transparent rounded-full"></div></div>
              ) : sessions.length === 0 ? (
                <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
                  <p className="text-slate-500 font-medium">Chưa có buổi học nào.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {sessions.map((s) => {
                    const dateObj = new Date(s.date);
                    return (
                      <div key={s.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-white shadow-sm hover:border-indigo-300 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-slate-100 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-slate-500">T{dateObj.getDay() === 0 ? 'CN' : dateObj.getDay() + 1}</span>
                            <span className="text-sm font-black text-slate-800">{dateObj.getDate()}</span>
                          </div>
                          <div>
                            <div className="font-bold text-slate-800">{s.title}</div>
                            <div className="text-sm text-slate-500 flex items-center gap-2">
                              {dateObj.toLocaleDateString('vi-VN')} • {dateObj.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button onClick={() => setSelectedSessionForAttendance(s)} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 rounded-lg text-sm font-bold transition-colors">
                            <Users className="w-4 h-4" /> Điểm danh
                          </button>
                          <button onClick={() => handleDelete(s.id)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedSessionForAttendance && (
        <AttendanceModal 
          session={selectedSessionForAttendance} 
          classId={cls.id} 
          onClose={() => setSelectedSessionForAttendance(null)} 
        />
      )}
    </>
  );
}
