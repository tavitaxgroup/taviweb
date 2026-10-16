import React, { useState, useEffect } from 'react';
import { CRMClassSession, CRMEnrollment, CRMAttendance } from '../types';
import { EduService } from '../api/edu.service';
import { X, Save, Check, X as XIcon, Clock } from 'lucide-react';
import { useAuth } from '../../crm/contexts/AuthContext';

interface Props {
  session: CRMClassSession;
  classId: string;
  onClose: () => void;
}

export default function AttendanceModal({ session, classId, onClose }: Props) {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<CRMEnrollment[]>([]);
  const [attendanceRecords, setAttendanceRecords] = useState<Record<string, CRMAttendance>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user?.tenant_id) loadData();
  }, [user, session.id, classId]);

  const loadData = async () => {
    if (!user?.tenant_id) return;
    setLoading(true);
    try {
      // Load all students in the class
      const enrData = await EduService.getEnrollmentsByClass(user.tenant_id, classId);
      // Filter out dropped/completed if needed, but usually we show all active
      const activeEnrollments = enrData.filter(e => e.status === 'active');
      setEnrollments(activeEnrollments);

      // Load existing attendance for this session
      const attData = await EduService.getAttendance(user.tenant_id, session.id);
      
      const attMap: Record<string, CRMAttendance> = {};
      attData.forEach(att => {
        attMap[att.contact_id] = att;
      });
      setAttendanceRecords(attMap);

    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (contactId: string, status: 'present' | 'absent' | 'late') => {
    setAttendanceRecords(prev => ({
      ...prev,
      [contactId]: {
        ...(prev[contactId] || {}),
        session_id: session.id,
        contact_id: contactId,
        status,
        notes: prev[contactId]?.notes || ''
      } as CRMAttendance
    }));
  };

  const handleNoteChange = (contactId: string, notes: string) => {
    setAttendanceRecords(prev => ({
      ...prev,
      [contactId]: {
        ...(prev[contactId] || { session_id: session.id, contact_id: contactId, status: 'present' }), // default to present if no status yet
        notes
      } as CRMAttendance
    }));
  };

  const handleSaveAll = async () => {
    if (!user?.tenant_id) return;
    setSaving(true);
    try {
      const recordsToSave = Object.values(attendanceRecords);
      if (recordsToSave.length > 0) {
        await EduService.upsertAttendance(user.tenant_id, recordsToSave);
      }
      onClose(); // Close after save
    } catch (e) {
      console.error(e);
      alert('Có lỗi khi lưu điểm danh');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="font-bold text-lg text-slate-800">Điểm danh - {session.title}</h3>
            <p className="text-sm text-slate-500">{new Date(session.date).toLocaleDateString('vi-VN')} {new Date(session.date).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 bg-white p-2 rounded-full shadow-sm">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex justify-center p-8"><div className="animate-spin h-6 w-6 border-4 border-indigo-600 border-t-transparent rounded-full"></div></div>
          ) : enrollments.length === 0 ? (
            <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
              <p className="text-slate-500 font-medium">Lớp chưa có học viên nào.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                <div className="col-span-4">Học viên</div>
                <div className="col-span-4 text-center">Trạng thái</div>
                <div className="col-span-4">Ghi chú</div>
              </div>
              
              <div className="space-y-3">
                {enrollments.map((enr, i) => {
                  const contactId = enr.contact_id;
                  const currentAtt = attendanceRecords[contactId];
                  const currentStatus = currentAtt?.status; // undefined, 'present', 'absent', 'late'

                  return (
                    <div key={enr.id} className="grid grid-cols-12 gap-4 items-center p-3 border border-slate-200 rounded-xl bg-white shadow-sm hover:border-indigo-300 transition-colors">
                      <div className="col-span-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-xs">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-bold text-slate-800 text-sm">{enr.contact?.name}</div>
                          <div className="text-xs text-slate-500">{enr.contact?.phone}</div>
                        </div>
                      </div>
                      
                      <div className="col-span-4 flex justify-center gap-2">
                        <button 
                          onClick={() => handleStatusChange(contactId, 'present')}
                          className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors border ${currentStatus === 'present' ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100'}`}
                          title="Có mặt"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleStatusChange(contactId, 'absent')}
                          className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors border ${currentStatus === 'absent' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100'}`}
                          title="Vắng mặt"
                        >
                          <XIcon className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleStatusChange(contactId, 'late')}
                          className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors border ${currentStatus === 'late' ? 'bg-amber-100 border-amber-500 text-amber-700' : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100'}`}
                          title="Đi trễ"
                        >
                          <Clock className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="col-span-4">
                        <input 
                          type="text" 
                          placeholder="Ghi chú..." 
                          className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                          value={currentAtt?.notes || ''}
                          onChange={(e) => handleNoteChange(contactId, e.target.value)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors">Hủy</button>
          <button onClick={handleSaveAll} disabled={saving} className="px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded-xl shadow-sm transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" /> {saving ? 'Đang lưu...' : 'Lưu Điểm danh'}
          </button>
        </div>
      </div>
    </div>
  );
}
