import React, { useState, useEffect } from 'react';
import { CRMClass, CRMCourse, CRMEnrollment } from '../types';
import { EduService } from '../api/edu.service';
import { useAuth } from '../../crm/contexts/AuthContext';
import { Plus, X, Users, BookOpen, Clock, Calendar, ChevronRight, Video, GraduationCap, CalendarDays } from 'lucide-react';
import SessionManagementModal from './SessionManagementModal';

export default function ClassManagement() {
  const { user } = useAuth();
  const [classes, setClasses] = useState<CRMClass[]>([]);
  const [courses, setCourses] = useState<CRMCourse[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modals & Drawers
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClassForSessions, setSelectedClassForSessions] = useState<CRMClass | null>(null);
  const [selectedClass, setSelectedClass] = useState<CRMClass | null>(null);
  const [classEnrollments, setClassEnrollments] = useState<CRMEnrollment[]>([]);
  const [loadingEnrollments, setLoadingEnrollments] = useState(false);
  const [drawerTab, setDrawerTab] = useState<'info' | 'students'>('info');
  
  // Forms
  const [formData, setFormData] = useState<Partial<CRMClass>>({ name: '', course_id: '', schedule_desc: '', google_meet_link: '', status: 'upcoming' });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (user?.tenant_id) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    if (!user?.tenant_id) return;
    try {
      setLoading(true);
      const [clsData, crsData] = await Promise.all([
        EduService.getClasses(user.tenant_id),
        EduService.getCourses(user.tenant_id)
      ]);
      setClasses(clsData);
      setCourses(crsData);
      
      // Update selected class if open
      if (selectedClass) {
        const updated = clsData.find(c => c.id === selectedClass.id);
        if (updated) setSelectedClass(updated);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadClassEnrollments = async (classId: string) => {
    if (!user?.tenant_id) return;
    try {
      setLoadingEnrollments(true);
      const data = await EduService.getEnrollmentsByClass(user.tenant_id, classId);
      setClassEnrollments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingEnrollments(false);
    }
  };

  const handleSave = async () => {
    if (!user?.tenant_id || !formData.name || !formData.course_id) return;
    try {
      await EduService.upsertClass(user.tenant_id, {
        id: editingId || undefined,
        ...formData
      });
      setIsModalOpen(false);
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const openEdit = (cls: CRMClass, e: React.MouseEvent) => {
    e.stopPropagation(); // Ngăn không cho mở drawer
    setFormData({ 
      name: cls.name, 
      course_id: cls.course_id, 
      schedule_desc: cls.schedule_desc, 
      google_meet_link: cls.google_meet_link,
      status: cls.status,
      start_date: cls.start_date,
      end_date: cls.end_date
    });
    setEditingId(cls.id);
    setIsModalOpen(true);
  };

  const openNew = () => {
    setFormData({ name: '', course_id: courses[0]?.id || '', schedule_desc: '', google_meet_link: '', status: 'upcoming' });
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openDetailsDrawer = (cls: CRMClass) => {
    setSelectedClass(cls);
    setDrawerTab('info');
    loadClassEnrollments(cls.id);
  };

  return (
    <div className="flex h-full animate-fade-in relative">
      {/* Main Content */}
      <div className={`flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mx-6 my-6 transition-all duration-300 ${selectedClass ? 'mr-0 rounded-r-none border-r-0' : ''}`}>
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-white flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Quản lý Lớp học</h2>
            <p className="text-sm text-slate-500 mt-0.5">Theo dõi lịch học, sĩ số và giáo viên.</p>
          </div>
          <button 
            onClick={openNew} 
            disabled={courses.length === 0} 
            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Mở lớp mới
          </button>
        </div>

        {/* List/Table View */}
        <div className="flex-1 overflow-x-auto custom-scrollbar bg-slate-50/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold tracking-wider sticky top-0 bg-slate-50/90 backdrop-blur-sm z-10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <th className="p-4 pl-6">Lớp / Khóa học</th>
                <th className="p-4">Lịch & Link học</th>
                <th className="p-4">Giáo viên & Sĩ số</th>
                <th className="p-4">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm bg-white">
              {loading ? (
                <tr><td colSpan={4} className="p-12 text-center"><div className="inline-block animate-spin h-6 w-6 border-4 border-indigo-600 border-t-transparent rounded-full"></div></td></tr>
              ) : classes.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-8 h-8 text-slate-300" />
                    </div>
                    <p className="text-slate-500 font-medium text-base">Chưa có lớp học nào</p>
                  </td>
                </tr>
              ) : (
                classes.map(cls => {
                  const isSelected = selectedClass?.id === cls.id;
                  return (
                    <tr 
                      key={cls.id} 
                      onClick={() => openDetailsDrawer(cls)}
                      className={`transition-colors cursor-pointer group ${isSelected ? 'bg-indigo-50 border-l-4 border-indigo-500' : 'hover:bg-slate-50 border-l-4 border-transparent'}`}
                    >
                      <td className="p-4 pl-5">
                        <div className="font-bold text-slate-800 text-base">{cls.name}</div>
                        <div className="text-xs text-indigo-600 font-medium mt-0.5">{cls.course?.name || '---'}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1.5 text-slate-700 font-medium mb-1">
                          <Clock className="w-4 h-4 text-slate-400" /> {cls.schedule_desc || 'Chưa xếp lịch'}
                        </div>
                        {cls.google_meet_link ? (
                          <a href={cls.google_meet_link} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-flex items-center gap-1 hover:bg-blue-100 transition-colors">
                            <Video className="w-3.5 h-3.5" /> Học trực tuyến
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400">Offline / Trực tiếp</span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-slate-700">{cls.teacher?.name || 'Chưa phân công GV'}</div>
                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" /> 
                          <span className="font-bold text-slate-700">{cls.enrollments?.[0]?.count || 0}</span> học viên
                        </div>
                      </td>
                      <td className="p-4 relative">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase ${
                          cls.status === 'ongoing' ? 'bg-emerald-100 text-emerald-700' :
                          cls.status === 'upcoming' ? 'bg-amber-100 text-amber-700' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {cls.status === 'ongoing' ? 'Đang diễn ra' : cls.status === 'upcoming' ? 'Sắp khai giảng' : 'Đã kết thúc'}
                        </span>
                        
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                          <button onClick={(e) => openEdit(cls, e)} className="text-xs bg-white border border-slate-200 shadow-sm px-2 py-1 rounded font-medium text-slate-600 hover:text-indigo-600 hover:border-indigo-300">Sửa</button>
                          <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slide-over Drawer for Class Details */}
      {selectedClass && (
        <div className="w-[500px] bg-white border-l border-slate-200 shadow-2xl flex flex-col z-40 animate-slide-left my-6 mr-6 rounded-r-2xl overflow-hidden relative">
          
          <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
            <div>
              <h3 className="font-bold text-xl text-slate-800">{selectedClass.name}</h3>
              <p className="text-sm text-indigo-600 font-medium">{selectedClass.course?.name}</p>
            </div>
            <button onClick={() => setSelectedClass(null)} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex border-b border-slate-200 px-2 bg-slate-50">
            <button 
              onClick={() => setDrawerTab('info')}
              className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors ${drawerTab === 'info' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Thông tin lớp
            </button>
            <button 
              onClick={() => setDrawerTab('students')}
              className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${drawerTab === 'students' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Học viên
              <span className="bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded text-xs">{selectedClass.enrollments?.[0]?.count || 0}</span>
            </button>
            <button 
              onClick={() => setSelectedClassForSessions(selectedClass)}
              className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors border-transparent text-slate-500 hover:text-slate-800 flex items-center gap-2`}
            >
              <CalendarDays className="w-4 h-4" /> Buổi học
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-white">
            {drawerTab === 'info' ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Trạng thái</h4>
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-bold uppercase ${
                    selectedClass.status === 'ongoing' ? 'bg-emerald-100 text-emerald-700' :
                    selectedClass.status === 'upcoming' ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {selectedClass.status === 'ongoing' ? 'Đang diễn ra' : selectedClass.status === 'upcoming' ? 'Sắp khai giảng' : 'Đã kết thúc'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-500 font-medium mb-1">Giáo viên phụ trách</div>
                    <div className="font-bold text-slate-800 flex items-center gap-2">
                      {selectedClass.teacher?.name || 'Chưa phân công'}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-500 font-medium mb-1">Ngày khai giảng</div>
                    <div className="font-bold text-slate-800 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      {selectedClass.start_date ? new Date(selectedClass.start_date).toLocaleDateString('vi-VN') : 'Chưa rõ'}
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Lịch học & Địa điểm
                  </h4>
                  <div className="font-bold text-indigo-900 text-lg mb-2">
                    {selectedClass.schedule_desc || 'Chưa thiết lập lịch học'}
                  </div>
                  {selectedClass.google_meet_link ? (
                    <a href={selectedClass.google_meet_link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-indigo-200 text-indigo-700 font-bold hover:bg-indigo-50 transition-colors shadow-sm">
                      <Video className="w-5 h-5" /> Tham gia Google Meet
                    </a>
                  ) : (
                    <div className="text-sm text-indigo-600 bg-white px-3 py-2 rounded-lg border border-indigo-100 inline-block">
                      Học offline tại trung tâm
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                {loadingEnrollments ? (
                  <div className="flex justify-center p-8"><div className="animate-spin h-6 w-6 border-4 border-indigo-600 border-t-transparent rounded-full"></div></div>
                ) : classEnrollments.length === 0 ? (
                  <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-xl">
                    <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500 font-medium">Lớp chưa có học viên nào.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {classEnrollments.map((enr, i) => (
                      <div key={enr.id} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                            {i + 1}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800 text-sm">{enr.contact?.name}</div>
                            <div className="text-xs text-slate-500">{enr.contact?.phone}</div>
                          </div>
                        </div>
                        <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${enr.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                          {enr.status === 'active' ? 'Đang học' : 'Bảo lưu'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Class Modal (Create/Edit) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-slide-up">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-lg">{editingId ? 'Sửa Lớp Học' : 'Mở Lớp Học Mới'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 bg-white p-1 rounded-full shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Tên lớp *</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="VD: IELTS-K99" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Thuộc khóa học *</label>
                  <select className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" value={formData.course_id} onChange={e => setFormData({ ...formData, course_id: e.target.value })}>
                    <option value="" disabled>-- Chọn khóa học --</option>
                    {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Lịch học</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" value={formData.schedule_desc} onChange={e => setFormData({ ...formData, schedule_desc: e.target.value })} placeholder="VD: Tối 2-4-6 (19:00 - 21:00)" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Link Google Meet / Zoom</label>
                  <input type="url" className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" value={formData.google_meet_link} onChange={e => setFormData({ ...formData, google_meet_link: e.target.value })} placeholder="https://meet.google.com/..." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Ngày khai giảng</label>
                  <input type="date" className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" value={formData.start_date || ''} onChange={e => setFormData({ ...formData, start_date: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Trạng thái</label>
                  <select className="w-full border border-slate-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value as any })}>
                    <option value="upcoming">Sắp khai giảng</option>
                    <option value="ongoing">Đang diễn ra</option>
                    <option value="completed">Đã kết thúc</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors">Hủy</button>
              <button onClick={handleSave} disabled={!formData.name || !formData.course_id} className="px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-sm transition-colors">
                {editingId ? 'Cập nhật' : 'Lưu lớp học'}
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedClassForSessions && (
        <SessionManagementModal 
          cls={selectedClassForSessions} 
          onClose={() => setSelectedClassForSessions(null)} 
        />
      )}
    </div>
  );
}
