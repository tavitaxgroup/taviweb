import React, { useState, useEffect, useMemo } from 'react';
import { CRMEnrollment, CRMClass, CRMContact } from '../types';
import { EduService } from '../api/edu.service';
import { useAuth } from '../../crm/contexts/AuthContext';
import { Search, Filter, X, Plus, CreditCard, User, Book, Calendar, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function EnrollmentManagement() {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<CRMEnrollment[]>([]);
  const [classes, setClasses] = useState<CRMClass[]>([]);
  const [contacts, setContacts] = useState<CRMContact[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modals & Drawers
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedEnrollment, setSelectedEnrollment] = useState<CRMEnrollment | null>(null);
  
  // Forms
  const [enrollForm, setEnrollForm] = useState({ contact_id: '', class_id: '' });
  const [newContactForm, setNewContactForm] = useState({ name: '', phone: '' });
  const [enrollMode, setEnrollMode] = useState<'existing' | 'new'>('existing');
  
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  
  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');

  useEffect(() => {
    if (user?.tenant_id) loadData();
  }, [user]);

  const loadData = async () => {
    if (!user?.tenant_id) return;
    try {
      setLoading(true);
      const [enrollData, classData, contactData] = await Promise.all([
        EduService.getAllEnrollments(user.tenant_id),
        EduService.getClasses(user.tenant_id),
        EduService.getContacts(user.tenant_id)
      ]);
      setEnrollments(enrollData);
      setClasses(classData);
      setContacts(contactData);
      
      // Update selected enrollment if it's open
      if (selectedEnrollment) {
        const updated = enrollData.find(e => e.id === selectedEnrollment.id);
        if (updated) {
          setSelectedEnrollment(updated);
          setPaymentAmount(updated.amount_paid || 0);
        } else {
          setSelectedEnrollment(null);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!user?.tenant_id || !enrollForm.class_id) return;
    if (enrollMode === 'existing' && !enrollForm.contact_id) return;
    if (enrollMode === 'new' && (!newContactForm.name || !newContactForm.phone)) return;
    
    try {
      let finalContactId = enrollForm.contact_id;
      
      if (enrollMode === 'new') {
        const { data: newContact, error: contactErr } = await supabase
          .from('crm_contacts')
          .insert([{
            tenant_id: user.tenant_id,
            name: newContactForm.name,
            phone: newContactForm.phone,
            type: 'lead',
            status: 'new'
          }])
          .select()
          .single();
          
        if (contactErr) throw contactErr;
        finalContactId = newContact.id;
      }

      await EduService.addEnrollment(user.tenant_id, {
        contact_id: finalContactId,
        class_id: enrollForm.class_id,
        payment_status: 'pending',
        amount_paid: 0,
        status: 'active'
      });
      setIsEnrollModalOpen(false);
      setNewContactForm({ name: '', phone: '' });
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = async () => {
    if (!user?.tenant_id || !selectedEnrollment) return;
    try {
      const tuition = selectedEnrollment.class?.course?.price || 0;
      let newStatus = selectedEnrollment.payment_status;
      if (paymentAmount >= tuition) newStatus = 'paid';
      else if (paymentAmount > 0) newStatus = 'partial';
      else newStatus = 'pending';

      await EduService.updateTuitionFee(user.tenant_id, selectedEnrollment.id, paymentAmount, newStatus);
      loadData(); // Will also refresh selectedEnrollment
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleStatusChange = async (newStatus: string) => {
    if (!user?.tenant_id || !selectedEnrollment) return;
    try {
      await EduService.updateEnrollmentStatus(user.tenant_id, selectedEnrollment.id, newStatus, selectedEnrollment.payment_status);
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const openDetailsDrawer = (enrollment: CRMEnrollment) => {
    setSelectedEnrollment(enrollment);
    setPaymentAmount(enrollment.amount_paid || 0);
  };

  const formatCurrency = (val: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  // Computed data
  const filteredEnrollments = useMemo(() => {
    return enrollments.filter(e => {
      const matchSearch = e.contact?.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          e.contact?.phone?.includes(searchQuery) ||
                          e.class?.name?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchStatus = statusFilter === 'all' || e.status === statusFilter;
      const matchPayment = paymentFilter === 'all' || e.payment_status === paymentFilter;
      return matchSearch && matchStatus && matchPayment;
    });
  }, [enrollments, searchQuery, statusFilter, paymentFilter]);

  return (
    <div className="flex h-full animate-fade-in relative">
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mx-6 my-6 transition-all duration-300 ${selectedEnrollment ? 'mr-0 rounded-r-none border-r-0' : ''}`}>
        {/* Header & Actions */}
        <div className="p-5 border-b border-slate-200 bg-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Quản lý Học viên</h2>
              <p className="text-sm text-slate-500">Ghi danh và theo dõi đóng học phí</p>
            </div>
            <button 
              onClick={() => { setEnrollForm({ contact_id: '', class_id: '' }); setIsEnrollModalOpen(true); }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Ghi danh mới
            </button>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[250px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Tìm tên học viên, SĐT, hoặc tên lớp..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select 
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium outline-none text-slate-700 focus:border-indigo-500"
              >
                <option value="all">Tất cả trạng thái học</option>
                <option value="active">Đang học</option>
                <option value="dropped">Bảo lưu/Nghỉ</option>
                <option value="completed">Đã hoàn thành</option>
              </select>
              <select 
                value={paymentFilter}
                onChange={e => setPaymentFilter(e.target.value)}
                className="py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium outline-none text-slate-700 focus:border-indigo-500"
              >
                <option value="all">Tất cả tình trạng đóng phí</option>
                <option value="paid">Đã đóng đủ</option>
                <option value="partial">Nợ một phần</option>
                <option value="pending">Chưa đóng</option>
              </select>
            </div>
          </div>
        </div>

        {/* List/Table View */}
        <div className="flex-1 overflow-x-auto custom-scrollbar bg-slate-50/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold tracking-wider sticky top-0 bg-slate-50/90 backdrop-blur-sm z-10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <th className="p-4 pl-6">Học viên</th>
                <th className="p-4">Khóa / Lớp học</th>
                <th className="p-4">Học tập</th>
                <th className="p-4">Học phí</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm bg-white">
              {loading ? (
                <tr><td colSpan={4} className="p-12 text-center"><div className="inline-block animate-spin h-6 w-6 border-4 border-indigo-600 border-t-transparent rounded-full"></div></td></tr>
              ) : filteredEnrollments.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="w-8 h-8 text-slate-300" />
                    </div>
                    <p className="text-slate-500 font-medium text-base">Không tìm thấy học viên nào</p>
                    <p className="text-slate-400 text-sm mt-1">Thử thay đổi bộ lọc hoặc tìm kiếm khác.</p>
                  </td>
                </tr>
              ) : (
                filteredEnrollments.map(enr => {
                  const tuition = enr.class?.course?.price || 0;
                  const debt = tuition - (enr.amount_paid || 0);
                  const isSelected = selectedEnrollment?.id === enr.id;
                  
                  return (
                    <tr 
                      key={enr.id} 
                      onClick={() => openDetailsDrawer(enr)}
                      className={`transition-colors cursor-pointer group ${isSelected ? 'bg-indigo-50 border-l-4 border-indigo-500' : 'hover:bg-slate-50 border-l-4 border-transparent'}`}
                    >
                      <td className="p-4 pl-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isSelected ? 'bg-indigo-200 text-indigo-700' : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'}`}>
                            {enr.contact?.name?.charAt(0).toUpperCase() || 'U'}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800">{enr.contact?.name || '---'}</div>
                            <div className="text-xs text-slate-500 mt-0.5 font-medium">{enr.contact?.phone || 'Chưa có SĐT'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-slate-700">{enr.class?.name || '---'}</div>
                        <div className="text-xs text-slate-500 mt-0.5 line-clamp-1 max-w-[200px]">{enr.class?.course?.name || '---'}</div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold ${
                          enr.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 
                          enr.status === 'completed' ? 'bg-blue-100 text-blue-700' : 
                          'bg-slate-200 text-slate-600'
                        }`}>
                          {enr.status === 'active' ? 'Đang học' : enr.status === 'completed' ? 'Hoàn thành' : 'Bảo lưu'}
                        </span>
                      </td>
                      <td className="p-4 relative">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`w-2 h-2 rounded-full ${
                            enr.payment_status === 'paid' ? 'bg-emerald-500' :
                            enr.payment_status === 'partial' ? 'bg-amber-500' : 'bg-red-500'
                          }`}></span>
                          <span className={`font-semibold ${
                            enr.payment_status === 'paid' ? 'text-emerald-700' :
                            enr.payment_status === 'partial' ? 'text-amber-700' : 'text-red-700'
                          }`}>
                            {enr.payment_status === 'paid' ? 'Đã thu đủ' :
                             enr.payment_status === 'partial' ? 'Nợ một phần' : 'Chưa thu'}
                          </span>
                        </div>
                        {enr.payment_status !== 'paid' && (
                          <div className="text-xs text-red-600 font-medium">Nợ: {formatCurrency(debt)}</div>
                        )}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
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

      {/* Slide-over Drawer for Details & Payment */}
      {selectedEnrollment && (
        <div className="w-[450px] bg-white border-l border-slate-200 shadow-2xl flex flex-col z-40 animate-slide-left my-6 mr-6 rounded-r-2xl overflow-hidden relative">
          <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-indigo-50/50">
            <h3 className="font-bold text-lg text-slate-800">Chi tiết Học viên</h3>
            <button onClick={() => setSelectedEnrollment(null)} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
            
            {/* Contact Info */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                {selectedEnrollment.contact?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">{selectedEnrollment.contact?.name}</h2>
                <p className="text-slate-500 font-medium mt-1">{selectedEnrollment.contact?.phone || 'Chưa có SĐT'}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500">Trạng thái:</span>
                  <select 
                    className={`text-xs border rounded-md px-2 py-1 outline-none font-bold cursor-pointer ${
                      selectedEnrollment.status === 'active' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 
                      selectedEnrollment.status === 'completed' ? 'bg-blue-50 border-blue-200 text-blue-700' : 
                      'bg-slate-100 border-slate-300 text-slate-700'
                    }`}
                    value={selectedEnrollment.status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                  >
                    <option value="active">Đang học</option>
                    <option value="dropped">Bảo lưu/Nghỉ</option>
                    <option value="completed">Đã hoàn thành</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Class Info */}
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Lớp đang theo học</h4>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <Book className="w-5 h-5 text-indigo-500" />
                  <span className="font-bold text-slate-800">{selectedEnrollment.class?.name}</span>
                </div>
                <div className="text-sm text-slate-600 ml-8 mb-2">
                  Khóa: <span className="font-medium text-slate-800">{selectedEnrollment.class?.course?.name}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 ml-8">
                  <Calendar className="w-3.5 h-3.5" />
                  Ghi danh: {new Date(selectedEnrollment.created_at).toLocaleDateString('vi-VN')}
                </div>
              </div>
            </div>

            {/* Tuition & Payment */}
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Thanh toán Học phí</h4>
              
              <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 mb-4">
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-slate-600 font-medium">Học phí trọn khóa:</span>
                  <span className="font-bold text-slate-800 text-base">{formatCurrency(selectedEnrollment.class?.course?.price || 0)}</span>
                </div>
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-slate-600 font-medium">Đã đóng lũy kế:</span>
                  <span className="font-bold text-emerald-600 text-base">{formatCurrency(selectedEnrollment.amount_paid || 0)}</span>
                </div>
                
                <div className="h-px bg-indigo-200/50 w-full my-3"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-800 font-bold">Còn nợ:</span>
                  <span className="font-extrabold text-red-600 text-lg">
                    {formatCurrency(Math.max(0, (selectedEnrollment.class?.course?.price || 0) - (selectedEnrollment.amount_paid || 0)))}
                  </span>
                </div>
              </div>

              {selectedEnrollment.payment_status !== 'paid' && (
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">Cập nhật số tiền đã thu (Lũy kế)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-lg font-bold text-indigo-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-white shadow-sm"
                      value={paymentAmount || ''}
                      onChange={e => setPaymentAmount(Number(e.target.value))}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">VND</div>
                  </div>
                  <button 
                    onClick={handlePayment} 
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" /> Xác nhận Thu tiền
                  </button>
                  <p className="text-xs text-center text-slate-400 font-medium">Nhập tổng số tiền tính tới thời điểm hiện tại.</p>
                </div>
              )}
              
              {selectedEnrollment.payment_status === 'paid' && (
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-200 font-bold flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Học viên đã hoàn thành học phí
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Enroll Modal (Keep as modal for quick add) */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-slide-up">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-lg text-slate-800">Ghi danh học viên</h3>
              <button onClick={() => setIsEnrollModalOpen(false)} className="text-slate-400 hover:text-slate-600 bg-white p-1 rounded-full shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              
              {/* Tabs */}
              <div className="flex p-1 bg-slate-100 rounded-lg">
                <button 
                  onClick={() => setEnrollMode('existing')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-md transition ${enrollMode === 'existing' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
                >
                  Khách từ CRM
                </button>
                <button 
                  onClick={() => setEnrollMode('new')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-md transition ${enrollMode === 'new' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
                >
                  Nhập mới
                </button>
              </div>

              {enrollMode === 'existing' ? (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Khách hàng / Học viên *</label>
                  <select 
                    className="w-full border border-slate-300 rounded-xl px-3 py-3 focus:ring-2 focus:ring-indigo-500 outline-none bg-white font-medium text-slate-700"
                    value={enrollForm.contact_id}
                    onChange={e => setEnrollForm({...enrollForm, contact_id: e.target.value})}
                  >
                    <option value="" disabled>-- Chọn học viên --</option>
                    {contacts.map(c => <option key={c.id} value={c.id}>{c.name} {c.phone ? `- ${c.phone}` : ''}</option>)}
                  </select>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Họ và tên *</label>
                    <input 
                      type="text"
                      className="w-full border border-slate-300 rounded-xl px-3 py-3 focus:ring-2 focus:ring-indigo-500 outline-none bg-white font-medium text-slate-700"
                      placeholder="Nhập tên học viên..."
                      value={newContactForm.name}
                      onChange={e => setNewContactForm({...newContactForm, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Số điện thoại *</label>
                    <input 
                      type="text"
                      className="w-full border border-slate-300 rounded-xl px-3 py-3 focus:ring-2 focus:ring-indigo-500 outline-none bg-white font-medium text-slate-700"
                      placeholder="Nhập số điện thoại..."
                      value={newContactForm.phone}
                      onChange={e => setNewContactForm({...newContactForm, phone: e.target.value})}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Lớp học đăng ký *</label>
                <select 
                  className="w-full border border-slate-300 rounded-xl px-3 py-3 focus:ring-2 focus:ring-indigo-500 outline-none bg-white font-medium text-slate-700"
                  value={enrollForm.class_id}
                  onChange={e => setEnrollForm({...enrollForm, class_id: e.target.value})}
                >
                  <option value="" disabled>-- Chọn lớp học --</option>
                  {classes.map(c => <option key={c.id} value={c.id}>{c.name} ({c.course?.name})</option>)}
                </select>
              </div>
            </div>
            <div className="p-5 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setIsEnrollModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors">Hủy</button>
              <button 
                onClick={handleEnroll} 
                disabled={(!enrollForm.class_id) || (enrollMode === 'existing' && !enrollForm.contact_id) || (enrollMode === 'new' && (!newContactForm.name || !newContactForm.phone))} 
                className="px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl disabled:opacity-50 transition-colors shadow-sm"
              >
                Xác nhận Ghi danh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
