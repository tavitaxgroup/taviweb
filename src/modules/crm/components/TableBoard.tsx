import React, { useState, useEffect } from 'react';
import { CRMStage, CRMDeal, CRMUser } from '../types';
import { CRMService } from '../api/crm.service';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';

interface TableBoardProps {
  stages: CRMStage[];
  deals: CRMDeal[];
  onDealClick: (deal: CRMDeal) => void;
  onRefresh?: () => void;
}

export default function TableBoard({ stages, deals, onDealClick, onRefresh }: TableBoardProps) {
  const { user } = useAuth();
  const [editingCell, setEditingCell] = useState<{ dealId: string, field: string } | null>(null);
  const [editValue, setEditValue] = useState<string | number>('');

  const [selectedDealIds, setSelectedDealIds] = useState<string[]>([]);
  const [showBulkAssign, setShowBulkAssign] = useState(false);
  const [users, setUsers] = useState<CRMUser[]>([]);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);
  const [assigning, setAssigning] = useState(false);

  useEffect(() => {
    if (showBulkAssign && user?.tenant_id && users.length === 0) {
      CRMService.getUsers(user.tenant_id).then(setUsers).catch(console.error);
    }
  }, [showBulkAssign, user?.tenant_id]);

  const handleBulkAssign = async () => {
    if (!user?.tenant_id || selectedAssignees.length === 0) return;
    setAssigning(true);
    try {
      await CRMService.bulkAssignLeads(user.tenant_id, selectedDealIds, selectedAssignees);
      toast.success('Chia số thành công!');
      setSelectedDealIds([]);
      setShowBulkAssign(false);
      setSelectedAssignees([]);
      if (onRefresh) onRefresh();
    } catch (err) {
      console.error(err);
      toast.error('Có lỗi xảy ra khi chia số');
    } finally {
      setAssigning(false);
    }
  };

  const handleCellClick = (e: React.MouseEvent, deal: CRMDeal, field: string, currentValue: string | number) => {
    e.stopPropagation();
    setEditValue(currentValue);
    setEditingCell({ dealId: deal.id, field });
  };

  const handleSaveCell = async (deal: CRMDeal) => {
    if (!editingCell || !user?.tenant_id) return;
    try {
      if (editingCell.field === 'title' && editValue !== deal.title) {
        await CRMService.updateDeal(user.tenant_id, deal.id, { title: editValue as string });
        deal.title = editValue as string;
      } else if (editingCell.field === 'value' && editValue !== deal.value) {
        await CRMService.updateDeal(user.tenant_id, deal.id, { value: Number(editValue) });
        deal.value = Number(editValue);
      } else if (editingCell.field === 'stage_id' && editValue !== deal.stage_id) {
        await CRMService.updateDealStage(user.tenant_id, deal.id, editValue as string);
        deal.stage_id = editValue as string;
      }
      if (onRefresh) onRefresh();
    } catch (err) {
      console.error(err);
    }
    setEditingCell(null);
  };
  return (
    <div className="overflow-auto border border-slate-200 bg-white flex-1 h-full custom-scrollbar rounded-xl shadow-sm relative">
      {selectedDealIds.length > 0 && (
        <div className="sticky top-0 left-0 right-0 bg-indigo-50 border-b border-indigo-200 px-4 py-2 flex items-center justify-between z-30 shadow-sm">
          <div className="text-sm font-medium text-indigo-800">
            Đã chọn {selectedDealIds.length} lead
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedDealIds([])}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50"
            >
              Bỏ chọn
            </button>
            <button
              onClick={() => setShowBulkAssign(true)}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700 shadow-sm"
            >
              Chia số (Bulk Assign)
            </button>
          </div>
        </div>
      )}

      {showBulkAssign && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-800">Chia số ({selectedDealIds.length} leads)</h3>
              <button onClick={() => setShowBulkAssign(false)} className="text-slate-400 hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600 mb-4">Chọn các nhân sự để phân bổ đều số lượng leads này:</p>
              <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {users.length === 0 ? (
                  <div className="text-sm text-slate-500 text-center py-4">Đang tải nhân sự...</div>
                ) : (
                  users.map(u => (
                    <label key={u.id} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer border border-transparent hover:border-slate-200 transition-colors">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-600"
                        checked={selectedAssignees.includes(u.id)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedAssignees([...selectedAssignees, u.id]);
                          else setSelectedAssignees(selectedAssignees.filter(id => id !== u.id));
                        }}
                      />
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                          {u.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{u.name}</span>
                      </div>
                    </label>
                  ))
                )}
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button 
                onClick={() => setShowBulkAssign(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 bg-slate-100 rounded-lg transition-colors"
              >
                Hủy
              </button>
              <button 
                onClick={handleBulkAssign}
                disabled={assigning || selectedAssignees.length === 0}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {assigning ? 'Đang chia...' : `Chia đều cho ${selectedAssignees.length} người`}
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="min-w-full divide-y divide-slate-200 border-collapse">
        <thead className="bg-slate-50 text-slate-500 text-xs font-semibold sticky top-0 z-20 shadow-sm border-b border-slate-200">
          <tr className="divide-x divide-slate-100">
            <th className="px-3 py-2 w-10 text-center">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-600 cursor-pointer"
                checked={deals.length > 0 && selectedDealIds.length === deals.length}
                onChange={(e) => {
                  if (e.target.checked) setSelectedDealIds(deals.map(d => d.id));
                  else setSelectedDealIds([]);
                }}
              />
            </th>
            <th className="px-3 py-2 font-medium text-slate-500 whitespace-nowrap"><div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>Tiêu đề Deal</div></th>
            <th className="px-3 py-2 font-medium text-slate-500 whitespace-nowrap"><div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>Khách hàng</div></th>
            <th className="px-3 py-2 font-medium text-slate-500 whitespace-nowrap"><div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l0 4l2 2"/></svg>Trạng thái</div></th>
            <th className="px-3 py-2 font-medium text-slate-500 text-right whitespace-nowrap">Giá trị</th>
            <th className="px-3 py-2 font-medium text-slate-500 whitespace-nowrap"><div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/></svg>Người phụ trách</div></th>
            <th className="px-3 py-2 font-medium text-slate-500 whitespace-nowrap"><div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/><path d="M11 15h1"/><path d="M12 15v3"/></svg>Ngày tạo</div></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {deals.map((deal) => {
            const stage = stages.find(s => s.id === deal.stage_id);
            const stageIndex = stages.findIndex(s => s.id === deal.stage_id);
            
            // Dynamic badge color based on stage index
            const badgeColors = [
              'bg-blue-50 text-blue-700 border-blue-200',
              'bg-indigo-50 text-indigo-700 border-indigo-200',
              'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
              'bg-orange-50 text-orange-700 border-orange-200',
              'bg-emerald-50 text-emerald-700 border-emerald-200',
              'bg-slate-50 text-slate-700 border-slate-200',
            ];
            const badgeClass = stageIndex >= 0 ? badgeColors[stageIndex % badgeColors.length] : badgeColors[5];

            return (
              <tr 
                key={deal.id} 
                onClick={() => onDealClick(deal)}
                className="hover:bg-slate-50 cursor-pointer transition-none group text-[13px] divide-x divide-slate-100"
              >
                <td className="px-3 py-2 text-center" onClick={(e) => e.stopPropagation()}>
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-600 cursor-pointer"
                    checked={selectedDealIds.includes(deal.id)}
                    onChange={(e) => {
                      if (e.target.checked) setSelectedDealIds([...selectedDealIds, deal.id]);
                      else setSelectedDealIds(selectedDealIds.filter(id => id !== deal.id));
                    }}
                  />
                </td>
                <td 
                  className="px-3 py-2 font-medium text-slate-900 group-hover:text-indigo-600 truncate max-w-[250px] border-l-2 border-transparent hover:border-l-indigo-500 cursor-text"
                  onClick={(e) => handleCellClick(e, deal, 'title', deal.title)}
                >
                  {editingCell?.dealId === deal.id && editingCell?.field === 'title' ? (
                    <input 
                      autoFocus
                      className="w-full bg-white border border-indigo-400 rounded px-1.5 py-0.5 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-indigo-500"
                      value={editValue as string}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={() => handleSaveCell(deal)}
                      onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
                    />
                  ) : deal.title}
                </td>
                <td className="px-3 py-2 text-slate-600 truncate max-w-[200px]">{deal.contact?.name || '-'}</td>
                <td 
                  className="px-3 py-2 text-center whitespace-nowrap cursor-pointer hover:bg-slate-100"
                  onClick={(e) => handleCellClick(e, deal, 'stage_id', deal.stage_id)}
                >
                  {editingCell?.dealId === deal.id && editingCell?.field === 'stage_id' ? (
                    <select 
                      autoFocus
                      className="w-full bg-white border border-indigo-400 rounded px-1 py-0.5 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-indigo-500"
                      value={editValue as string}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={() => handleSaveCell(deal)}
                      onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
                    >
                      {stages.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                  ) : (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${badgeClass}`}>
                      {stage?.name || 'Unknown'}
                    </span>
                  )}
                </td>
                <td 
                  className="px-3 py-2 text-slate-700 text-right whitespace-nowrap font-mono text-[13px] cursor-text hover:bg-slate-100"
                  onClick={(e) => handleCellClick(e, deal, 'value', deal.value || 0)}
                >
                  {editingCell?.dealId === deal.id && editingCell?.field === 'value' ? (
                    <input 
                      autoFocus
                      type="number"
                      className="w-[100px] text-right bg-white border border-indigo-400 rounded px-1.5 py-0.5 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-indigo-500"
                      value={editValue as number}
                      onChange={(e) => setEditValue(Number(e.target.value))}
                      onBlur={() => handleSaveCell(deal)}
                      onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
                    />
                  ) : (
                    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(deal.value)
                  )}
                </td>
                <td className="px-3 py-2 text-slate-600 whitespace-nowrap">
                  {deal.assignee ? (
                    <span className="inline-flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                        {(deal.assignee?.name || 'U').charAt(0).toUpperCase()}
                      </div>
                      <span className="truncate max-w-[120px]">{deal.assignee.name}</span>
                    </span>
                  ) : '-'}
                </td>
                <td className="px-3 py-2 text-slate-500 whitespace-nowrap">
                  {new Date(deal.created_at).toLocaleDateString('vi-VN')}
                </td>
              </tr>
            );
          })}
          {deals.length === 0 && (
            <tr>
              <td colSpan={7} className="px-6 py-12 text-center text-slate-400 font-medium">
                <div className="flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <span>Chưa có deal nào.</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
