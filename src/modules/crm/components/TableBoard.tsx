import React, { useState, useEffect } from 'react';
import { CRMStage, CRMDeal, CRMUser } from '../types';
import { CRMService } from '../api/crm.service';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { Phone, MessageCircle, X, Users } from 'lucide-react';

interface TableBoardProps {
  stages: CRMStage[];
  deals: CRMDeal[];
  onDealClick: (deal: CRMDeal) => void;
  onRefresh?: () => void;
}

export default function TableBoard({ stages, deals, onDealClick, onRefresh }: TableBoardProps) {
  const { user } = useAuth();
  const [editingCell, setEditingCell] = useState<{ dealId: string; field: string } | null>(null);
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
      toast.success('Đã phân bổ khách hàng cho nhân sự.');
      setSelectedDealIds([]);
      setShowBulkAssign(false);
      setSelectedAssignees([]);
      if (onRefresh) onRefresh();
    } catch (err) {
      console.error(err);
      toast.error('Không thể phân bổ khách hàng. Vui lòng thử lại.');
    } finally {
      setAssigning(false);
    }
  };

  const handleCellClick = (
    e: React.MouseEvent,
    deal: CRMDeal,
    field: string,
    currentValue: string | number
  ) => {
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

  const dotColors = [
    'bg-slate-400',
    'bg-indigo-500',
    'bg-amber-500',
    'bg-emerald-500',
    'bg-sky-500',
    'bg-rose-500',
  ];

  return (
    <div className="overflow-auto border border-slate-200/80 bg-white flex-1 h-full custom-scrollbar rounded-2xl shadow-[0_1px_2px_rgba(15,23,42,0.03)] relative">
      {selectedDealIds.length > 0 && (
        <div className="sticky top-0 left-0 right-0 bg-slate-900 text-white px-5 py-2.5 flex items-center justify-between z-30">
          <div className="text-xs font-medium flex items-center gap-2">
            <span className="font-mono tabular-nums px-2 py-0.5 rounded bg-white/15 font-semibold">
              {selectedDealIds.length}
            </span>
            <span>cơ hội đang được chọn</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedDealIds([])}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Bỏ chọn
            </button>
            <button
              type="button"
              onClick={() => setShowBulkAssign(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Phân bổ nhân sự</span>
            </button>
          </div>
        </div>
      )}

      {showBulkAssign && (
        <div className="fixed inset-0 bg-slate-950/30 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/10 w-full max-w-md overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-semibold text-slate-900 text-sm">
                Phân bổ {selectedDealIds.length} cơ hội cho nhân sự
              </h3>
              <button
                type="button"
                onClick={() => setShowBulkAssign(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-xs text-slate-500 mb-3">
                Chọn các nhân sự để hệ thống chia đều danh sách khách hàng đã chọn:
              </p>
              <div className="space-y-1.5 max-h-[38vh] overflow-y-auto pr-1 custom-scrollbar">
                {users.length === 0 ? (
                  <div className="text-xs text-slate-400 text-center py-6">Đang tải danh sách nhân sự...</div>
                ) : (
                  users.map(u => (
                    <label
                      key={u.id}
                      className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl cursor-pointer border border-transparent hover:border-slate-200/80 transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-slate-900 rounded border-slate-300"
                        checked={selectedAssignees.includes(u.id)}
                        onChange={e => {
                          if (e.target.checked) setSelectedAssignees([...selectedAssignees, u.id]);
                          else setSelectedAssignees(selectedAssignees.filter(id => id !== u.id));
                        }}
                      />
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-slate-100 border border-slate-200/80 flex items-center justify-center text-xs font-semibold text-slate-700">
                          {u.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-xs font-medium text-slate-800">{u.name}</span>
                      </div>
                    </label>
                  ))
                )}
              </div>
            </div>
            <div className="px-5 py-3.5 border-t border-slate-100 bg-slate-50/60 flex justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowBulkAssign(false)}
                className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-200/60 rounded-lg transition-colors"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleBulkAssign}
                disabled={assigning || selectedAssignees.length === 0}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-40"
              >
                {assigning ? 'Đang xử lý...' : `Chia đều (${selectedAssignees.length} nhân sự)`}
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="min-w-full border-collapse text-left">
        <thead className="bg-slate-50/90 backdrop-blur-md text-slate-500 text-[11px] font-medium sticky top-0 z-20 border-b border-slate-200/80">
          <tr>
            <th className="px-4 py-3 w-10 text-center">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 accent-slate-900 rounded border-slate-300 cursor-pointer"
                checked={deals.length > 0 && selectedDealIds.length === deals.length}
                onChange={e => {
                  if (e.target.checked) setSelectedDealIds(deals.map(d => d.id));
                  else setSelectedDealIds([]);
                }}
              />
            </th>
            <th className="px-4 py-3 font-medium">Cơ hội bán hàng</th>
            <th className="px-4 py-3 font-medium">Khách hàng & Liên hệ</th>
            <th className="px-4 py-3 font-medium">Giai đoạn</th>
            <th className="px-4 py-3 font-medium text-right">Giá trị dự kiến</th>
            <th className="px-4 py-3 font-medium">Phụ trách</th>
            <th className="px-4 py-3 font-medium text-right">Ngày tạo</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white text-[13px]">
          {deals.map(deal => {
            const stage = stages.find(s => s.id === deal.stage_id);
            const stageIndex = stages.findIndex(s => s.id === deal.stage_id);
            const dotColor = stageIndex >= 0 ? dotColors[stageIndex % dotColors.length] : 'bg-slate-400';
            const phoneClean = deal.contact?.phone
              ? String(deal.contact.phone).replace(/\s+/g, '')
              : '';

            return (
              <tr
                key={deal.id}
                onClick={() => onDealClick(deal)}
                className="hover:bg-slate-50/80 cursor-pointer transition-colors group"
              >
                <td className="px-4 py-3 text-center" onClick={e => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 accent-slate-900 rounded border-slate-300 cursor-pointer"
                    checked={selectedDealIds.includes(deal.id)}
                    onChange={e => {
                      if (e.target.checked) setSelectedDealIds([...selectedDealIds, deal.id]);
                      else setSelectedDealIds(selectedDealIds.filter(id => id !== deal.id));
                    }}
                  />
                </td>

                {/* Deal Title */}
                <td
                  className="px-4 py-3 font-semibold text-slate-900 max-w-[280px]"
                  onClick={e => handleCellClick(e, deal, 'title', deal.title)}
                >
                  {editingCell?.dealId === deal.id && editingCell?.field === 'title' ? (
                    <input
                      autoFocus
                      className="w-full bg-white border border-slate-400 rounded-md px-2 py-1 text-xs text-slate-900 outline-none"
                      value={editValue as string}
                      onChange={e => setEditValue(e.target.value)}
                      onBlur={() => handleSaveCell(deal)}
                      onKeyDown={e => e.key === 'Enter' && e.currentTarget.blur()}
                    />
                  ) : (
                    <div className="truncate">{deal.title}</div>
                  )}
                </td>

                {/* Customer & Quick Actions */}
                <td className="px-4 py-3 text-slate-600 max-w-[240px]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="font-medium text-slate-800 truncate">
                        {deal.contact?.name || 'Chưa cập nhật'}
                      </div>
                      {deal.contact?.phone && (
                        <div className="font-mono tabular-nums text-[11px] text-slate-400">
                          {deal.contact.phone}
                        </div>
                      )}
                    </div>
                    {phoneClean && (
                      <div
                        className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                        onClick={e => e.stopPropagation()}
                      >
                        <a
                          href={`tel:${phoneClean}`}
                          title="Gọi điện"
                          className="w-6 h-6 rounded-md bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                        </a>
                        <a
                          href={`https://zalo.me/${phoneClean}`}
                          target="_blank"
                          rel="noreferrer"
                          title="Nhắn Zalo"
                          className="w-6 h-6 rounded-md bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                        >
                          <MessageCircle className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </td>

                {/* Stage */}
                <td
                  className="px-4 py-3 whitespace-nowrap"
                  onClick={e => handleCellClick(e, deal, 'stage_id', deal.stage_id)}
                >
                  {editingCell?.dealId === deal.id && editingCell?.field === 'stage_id' ? (
                    <select
                      autoFocus
                      className="bg-white border border-slate-400 rounded-md px-2 py-1 text-xs text-slate-900 outline-none"
                      value={editValue as string}
                      onChange={e => setEditValue(e.target.value)}
                      onBlur={() => handleSaveCell(deal)}
                      onKeyDown={e => e.key === 'Enter' && e.currentTarget.blur()}
                    >
                      {stages.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/70">
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                      {stage?.name || 'Chưa phân loại'}
                    </span>
                  )}
                </td>

                {/* Value */}
                <td
                  className="px-4 py-3 text-slate-900 text-right whitespace-nowrap font-mono tabular-nums font-semibold text-xs"
                  onClick={e => handleCellClick(e, deal, 'value', deal.value || 0)}
                >
                  {editingCell?.dealId === deal.id && editingCell?.field === 'value' ? (
                    <input
                      autoFocus
                      type="number"
                      className="w-[120px] text-right bg-white border border-slate-400 rounded-md px-2 py-1 text-xs text-slate-900 outline-none"
                      value={editValue as number}
                      onChange={e => setEditValue(Number(e.target.value))}
                      onBlur={() => handleSaveCell(deal)}
                      onKeyDown={e => e.key === 'Enter' && e.currentTarget.blur()}
                    />
                  ) : (
                    new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                      maximumFractionDigits: 0,
                    }).format(deal.value || 0)
                  )}
                </td>

                {/* Assignee */}
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                  {deal.assignee ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-slate-100 border border-slate-200/80 text-slate-700 flex items-center justify-center text-[10px] font-semibold">
                        {(deal.assignee?.name || 'U').charAt(0).toUpperCase()}
                      </span>
                      <span className="truncate max-w-[130px] text-xs font-medium text-slate-700">
                        {deal.assignee.name}
                      </span>
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">—</span>
                  )}
                </td>

                {/* Created At */}
                <td className="px-4 py-3 text-slate-400 text-right whitespace-nowrap font-mono tabular-nums text-xs">
                  {new Date(deal.created_at).toLocaleDateString('vi-VN')}
                </td>
              </tr>
            );
          })}
          {deals.length === 0 && (
            <tr>
              <td colSpan={7} className="px-6 py-16 text-center text-slate-400 text-xs">
                Chưa có cơ hội bán hàng nào phù hợp với bộ lọc hiện tại.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
