import React, { useState, useEffect } from 'react';
import { CRMCourse, CRMClass } from '../types';
import { EduService } from '../api/edu.service';
import { useAuth } from '../../crm/contexts/AuthContext';
import { Plus, X, BookOpen, CreditCard, ChevronRight, LayoutList, Layers } from 'lucide-react';

export default function CourseManagement() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<CRMCourse[]>([]);
  const [courseClasses, setCourseClasses] = useState<CRMClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingClasses, setLoadingClasses] = useState(false);
  
  // Modals & Drawers
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CRMCourse | null>(null);
  const [drawerTab, setDrawerTab] = useState<'info' | 'classes'>('info');

  const [formData, setFormData] = useState<Partial<CRMCourse>>({ name: '', description: '', price: 0, status: 'active' });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (user?.tenant_id) loadCourses();
  }, [user]);

  const loadCourses = async () => {
    if (!user?.tenant_id) return;
    try {
      setLoading(true);
      const data = await EduService.getCourses(user.tenant_id);
      setCourses(data);
      
      if (selectedCourse) {
        const updated = data.find(c => c.id === selectedCourse.id);
        if (updated) setSelectedCourse(updated);
      }
    } catch (error: any) {
      console.error('Lỗi khi tải khoá học:', error?.message || error);
    } finally {
      setLoading(false);
    }
  };

  const loadCourseClasses = async (courseId: string) => {
    if (!user?.tenant_id) return;
    try {
      setLoadingClasses(true);
      const classesData = await EduService.getClasses(user.tenant_id);
      setCourseClasses(classesData.filter(c => c.course_id === courseId));
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingClasses(false);
    }
  };

  const handleSave = async () => {
    if (!user?.tenant_id || !formData.name) return;
    try {
      await EduService.upsertCourse(user.tenant_id, {
        id: editingId || undefined,
        ...formData
      });
      setIsModalOpen(false);
      loadCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const openEdit = (course: CRMCourse, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFormData({ name: course.name, description: course.description, price: course.price, status: course.status });
    setEditingId(course.id);
    setIsModalOpen(true);
  };

  const openNew = () => {
    setFormData({ name: '', description: '', price: 0, status: 'active' });
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openDetailsDrawer = (course: CRMCourse) => {
    setSelectedCourse(course);
    setDrawerTab('info');
    loadCourseClasses(course.id);
  };

  const formatCurrency = (val: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  return (
    <div className="flex h-full animate-fade-in relative">
      <div className={`flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mx-6 my-6 transition-all duration-300 ${selectedCourse ? 'mr-0 rounded-r-none border-r-0' : ''}`}>
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-white">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Danh mục Khóa học</h2>
            <p className="text-sm text-slate-500 mt-0.5">Quản lý nội dung và mức học phí các khóa học</p>
          </div>
          <button 
            onClick={openNew} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Thêm Khóa Mới
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-slate-50/50">
          {loading ? (
            <div className="flex justify-center p-12"><div className="animate-spin h-8 w-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => {
                const isSelected = selectedCourse?.id === course.id;
                return (
                  <div 
                    key={course.id} 
                    onClick={() => openDetailsDrawer(course)}
                    className={`rounded-2xl p-5 cursor-pointer transition-all duration-200 group relative border-2 ${isSelected ? 'border-indigo-500 bg-indigo-50/30 shadow-md ring-4 ring-indigo-50' : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md'}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white shadow-sm mb-2">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase ${course.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                        {course.status}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg text-slate-800 line-clamp-1 mb-1 group-hover:text-indigo-700 transition-colors">{course.name}</h3>
                    
                    <div className="flex gap-4 mb-4">
                      <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-slate-400" />
                        <span className="font-bold text-slate-700">{course.classes?.[0]?.count || 0}</span> lớp đang mở
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      <span className="font-extrabold text-indigo-700 text-lg">{formatCurrency(course.price)}</span>
                      <div className="flex items-center gap-2">
                        <button onClick={(e) => openEdit(course, e)} className="text-sm bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-600 font-medium hover:text-indigo-600 hover:border-indigo-300 transition-colors opacity-0 group-hover:opacity-100">
                          Sửa
                        </button>
                        <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-indigo-600' : 'text-slate-300 group-hover:text-indigo-400 transition-colors'}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
              {courses.length === 0 && (
                <div className="col-span-full py-16 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-white">
                  <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-indigo-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-700 mb-1">Chưa có khóa học nào</h3>
                  <p className="text-slate-500 mb-4">Hãy tạo khóa học đầu tiên để bắt đầu quản lý trung tâm.</p>
                  <button onClick={openNew} className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-colors">Tạo Khóa Học</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Slide-over Drawer for Course Details */}
      {selectedCourse && (
        <div className="w-[450px] bg-white border-l border-slate-200 shadow-2xl flex flex-col z-40 animate-slide-left my-6 mr-6 rounded-r-2xl overflow-hidden relative">
          
          <div className="p-6 border-b border-slate-200 bg-indigo-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BookOpen className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase mb-3 inline-block ${selectedCourse.status === 'active' ? 'bg-emerald-400/20 text-emerald-100 border border-emerald-400/30' : 'bg-white/20 text-white border border-white/30'}`}>
                  {selectedCourse.status === 'active' ? 'Đang triển khai' : 'Lưu trữ'}
                </span>
                <button onClick={() => setSelectedCourse(null)} className="p-1.5 hover:bg-white/20 rounded-full transition-colors text-white/80">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h3 className="font-extrabold text-2xl text-white leading-tight mb-1">{selectedCourse.name}</h3>
              <p className="text-indigo-200 font-medium flex items-center gap-1.5 mt-2">
                <CreditCard className="w-4 h-4" /> {formatCurrency(selectedCourse.price)}
              </p>
            </div>
          </div>

          <div className="flex border-b border-slate-200 px-2 bg-slate-50">
            <button 
              onClick={() => setDrawerTab('info')}
              className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors ${drawerTab === 'info' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Thông tin
            </button>
            <button 
              onClick={() => setDrawerTab('classes')}
              className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${drawerTab === 'classes' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Danh sách Lớp
              <span className="bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded text-xs">{selectedCourse.classes?.[0]?.count || 0}</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-white">
            {drawerTab === 'info' ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Mô tả chi tiết</h4>
                  <div className="text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 whitespace-pre-wrap leading-relaxed text-sm">
                    {selectedCourse.description || <span className="text-slate-400 italic">Chưa có mô tả chi tiết cho khóa học này.</span>}
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button onClick={() => openEdit(selectedCourse)} className="bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 px-4 py-2 rounded-xl font-bold transition-colors">
                    Chỉnh sửa Khóa học
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {loadingClasses ? (
                  <div className="flex justify-center p-8"><div className="animate-spin h-6 w-6 border-4 border-indigo-600 border-t-transparent rounded-full"></div></div>
                ) : courseClasses.length === 0 ? (
                  <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-xl">
                    <LayoutList className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500 font-medium">Khóa học này chưa có lớp nào.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {courseClasses.map((cls) => (
                      <div key={cls.id} className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm hover:border-indigo-300 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-bold text-slate-800">{cls.name}</div>
                          <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${cls.status === 'ongoing' ? 'bg-emerald-100 text-emerald-700' : cls.status === 'upcoming' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                            {cls.status === 'ongoing' ? 'Đang học' : cls.status === 'upcoming' ? 'Sắp mở' : 'Kết thúc'}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 font-medium flex items-center gap-4">
                          <span>Giáo viên: <strong className="text-slate-700">{cls.teacher?.name || '---'}</strong></span>
                          <span>Sĩ số: <strong className="text-slate-700">{cls.enrollments?.[0]?.count || 0}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Course Modal (Create/Edit) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-slide-up">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-lg text-slate-800">{editingId ? 'Sửa Khóa Học' : 'Tạo Khóa Học Mới'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 bg-white p-1 rounded-full shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tên khóa học *</label>
                <input type="text" className="w-full border border-slate-300 rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="VD: IELTS Intensive" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mô tả ngắn</label>
                <textarea className="w-full border border-slate-300 rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none resize-none h-24" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} placeholder="Mục tiêu đầu ra, nội dung khóa học..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Học phí trọn khóa (VNĐ)</label>
                <input type="number" className="w-full border border-slate-300 rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-indigo-700" value={formData.price} onChange={e => setFormData({ ...formData, price: Number(e.target.value) })} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Trạng thái</label>
                <select className="w-full border border-slate-300 rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none font-medium" value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value as any })}>
                  <option value="active">Đang mở (Active)</option>
                  <option value="draft">Bản nháp (Draft)</option>
                  <option value="archived">Lưu trữ (Archived)</option>
                </select>
              </div>
            </div>
            <div className="p-5 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors">Hủy</button>
              <button onClick={handleSave} disabled={!formData.name} className="px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-sm transition-colors">
                {editingId ? 'Cập nhật' : 'Lưu khóa học'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
