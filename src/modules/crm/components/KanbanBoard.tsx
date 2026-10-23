import React, { useState } from 'react';
import { CRMStage, CRMDeal } from '../types';
import { Phone, MessageCircle, ArrowRight, Plus, Clock } from 'lucide-react';

interface KanbanBoardProps {
  stages: CRMStage[];
  deals: CRMDeal[];
  onDealMove: (dealId: string, newStageId: string) => void;
  onDealClick: (deal: CRMDeal) => void;
  onQuickAddDeal?: (stageId: string) => void;
}

export default function KanbanBoard({
  stages,
  deals,
  onDealMove,
  onDealClick,
  onQuickAddDeal,
}: KanbanBoardProps) {
  const [draggedDealId, setDraggedDealId] = useState<string | null>(null);
  const [dragOverStageId, setDragOverStageId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, dealId: string) => {
    setDraggedDealId(dealId);
    e.dataTransfer.setData('text/plain', dealId);
  };

  const handleDragOver = (e: React.DragEvent, stageId: string) => {
    e.preventDefault();
    if (dragOverStageId !== stageId) {
      setDragOverStageId(stageId);
    }
  };

  const handleDragLeave = () => {
    setDragOverStageId(null);
  };

  const handleDrop = (e: React.DragEvent, stageId: string) => {
    e.preventDefault();
    const dealId = e.dataTransfer.getData('text/plain');
    if (dealId && draggedDealId === dealId) {
      onDealMove(dealId, stageId);
    }
    setDraggedDealId(null);
    setDragOverStageId(null);
  };

  const isWonOrDoneStage = (name: string) => {
    const n = name.toLowerCase();
    return (
      n.includes('won') ||
      n.includes('chốt') ||
      n.includes('hoàn thành') ||
      n.includes('thành công') ||
      n.includes('đã ký')
    );
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
    <div className="flex flex-1 h-full gap-3.5 overflow-x-auto overflow-y-hidden pb-3 custom-scrollbar relative z-10 w-full">
      {stages.map((stage, index) => {
        const stageDeals = deals.filter(d => d.stage_id === stage.id);
        const stageTotalValue = stageDeals.reduce((sum, deal) => sum + Number(deal.value || 0), 0);
        const isStageDone = isWonOrDoneStage(stage.name);
        const dotClass = isStageDone ? 'bg-emerald-500' : dotColors[index % dotColors.length];
        const nextStage = stages[index + 1];
        const isDragOver = dragOverStageId === stage.id;

        return (
          <div
            key={stage.id}
            onDragOver={e => handleDragOver(e, stage.id)}
            onDragLeave={handleDragLeave}
            onDrop={e => handleDrop(e, stage.id)}
            className={`flex flex-col min-w-[300px] w-[300px] rounded-2xl p-2.5 border transition-colors duration-200 group/column ${
              isDragOver
                ? 'bg-slate-200/60 border-slate-400'
                : 'bg-slate-100/70 border-slate-200/70'
            }`}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between px-1.5 pt-1 pb-2.5 mb-1">
              <div className="flex items-center gap-2 min-w-0">
                <span className={`w-2 h-2 rounded-full shrink-0 ${dotClass}`} />
                <h3 className="font-semibold text-slate-800 text-[13px] tracking-[-0.01em] truncate">
                  {stage.name}
                </h3>
                <span className="font-mono tabular-nums text-[11px] font-medium text-slate-500 bg-white/90 border border-slate-200/70 px-1.5 py-0.5 rounded-md">
                  {stageDeals.length}
                </span>
              </div>

              <div className="font-mono tabular-nums text-[11px] font-medium text-slate-500">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  maximumFractionDigits: 0,
                }).format(stageTotalValue)}
              </div>
            </div>

            {/* Column Cards */}
            <div className="flex flex-col gap-2 flex-1 overflow-y-auto custom-scrollbar px-0.5 pb-6">
              {stageDeals.map(deal => {
                const isEcommerceDeal =
                  deal.custom_data?.source === 'ecommerce_checkout' ||
                  String(deal.title || '').startsWith('[Đơn hàng #');
                const isBookingDeal =
                  deal.custom_data?.['Nguồn'] === 'Web Booking' ||
                  deal.custom_data?.['Nguồn khách hàng'] === 'Web Booking' ||
                  String(deal.title || '').startsWith('Lịch hẹn:');

                const vehicleModel = deal.custom_data?.['Dòng xe'] || '';
                const vehicleType = deal.custom_data?.['Loại phương tiện'] || '';
                const memberTier = deal.custom_data?.['Hạng thẻ Thành viên'] || '';
                const sourceTag =
                  deal.custom_data?.['Nguồn khách hàng'] || deal.custom_data?.['Nguồn'] || '';

                const ageDays = deal.created_at
                  ? Math.floor(
                      (Date.now() - new Date(deal.created_at).getTime()) / (1000 * 60 * 60 * 24)
                    )
                  : 0;
                const isStale = !isStageDone && ageDays >= 3;
                const phoneClean = deal.contact?.phone
                  ? String(deal.contact.phone).replace(/\s+/g, '')
                  : '';

                return (
                  <div
                    key={deal.id}
                    draggable
                    onDragStart={e => handleDragStart(e, deal.id)}
                    onClick={() => onDealClick(deal)}
                    className="group bg-white p-3.5 rounded-xl border border-slate-200/80 cursor-grab active:cursor-grabbing hover:border-slate-300 shadow-[0_1px_2px_rgba(15,23,42,0.03)] hover:shadow-[0_6px_16px_-4px_rgba(15,23,42,0.06)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] relative"
                  >
                    {/* Top Meta Row */}
                    {(isEcommerceDeal || isBookingDeal || memberTier || sourceTag || isStale) && (
                      <div className="flex items-center justify-between gap-1.5 mb-2 flex-wrap">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {memberTier && memberTier !== 'Member' && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-900 text-amber-300">
                              {memberTier}
                            </span>
                          )}
                          {isBookingDeal ? (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                              Lịch hẹn Web
                            </span>
                          ) : sourceTag ? (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                              {sourceTag}
                            </span>
                          ) : null}
                        </div>
                        {isStale && (
                          <span
                            title={`Đã tạo ${ageDays} ngày trước`}
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono tabular-nums font-medium bg-amber-50 text-amber-700 border border-amber-200/60"
                          >
                            <Clock className="w-2.5 h-2.5" />
                            {ageDays}d
                          </span>
                        )}
                      </div>
                    )}

                    {/* Vehicle Profile Badge (For Garage / Automotive CRM) */}
                    {vehicleModel && (
                      <div className="mb-2 p-2 rounded-lg bg-slate-900 text-white flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold text-white truncate">
                            {vehicleModel || vehicleType || 'Phương tiện'}
                          </div>
                          {vehicleType && (
                            <div className="text-[10px] text-slate-400 truncate">
                              {vehicleType}
                              {deal.custom_data?.['Số ODO (Km)']
                                ? ` · ODO: ${deal.custom_data['Số ODO (Km)']}`
                                : ''}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Title */}
                    <h4 className="font-semibold text-slate-900 leading-snug text-[13.5px] tracking-[-0.01em] line-clamp-2 mb-1.5">
                      {deal.title}
                    </h4>

                    {/* Contact Info */}
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                      <span className="truncate font-medium text-slate-600">
                        {deal.contact?.name || 'Khách chưa rõ tên'}
                      </span>
                      {deal.contact?.phone && (
                        <span className="font-mono tabular-nums text-[11px] text-slate-400 shrink-0">
                          {deal.contact.phone}
                        </span>
                      )}
                    </div>

                    {/* Footer: Price + Hover Quick Actions + Assignee */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
                      <span className="font-mono tabular-nums text-xs font-semibold text-slate-900">
                        {new Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                          maximumFractionDigits: 0,
                        }).format(deal.value || 0)}
                      </span>

                      <div className="flex items-center gap-1">
                        {/* Quick Action Buttons (visible on card hover) */}
                        <div
                          className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                          onClick={e => e.stopPropagation()}
                        >
                          {phoneClean && (
                            <>
                              <a
                                href={`tel:${phoneClean}`}
                                title={`Gọi ${phoneClean}`}
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
                            </>
                          )}
                          {nextStage && (
                            <button
                              type="button"
                              onClick={() => onDealMove(deal.id, nextStage.id)}
                              title={`Chuyển sang: ${nextStage.name}`}
                              className="w-6 h-6 rounded-md bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white flex items-center justify-center transition-colors"
                            >
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>

                        {deal.assignee && (
                          <div
                            className="w-6 h-6 rounded-md bg-slate-100 border border-slate-200/80 flex items-center justify-center text-[10px] font-semibold text-slate-700 ml-0.5"
                            title={`Phụ trách: ${deal.assignee.name}`}
                          >
                            {(deal.assignee?.name || 'U').charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Empty Drop Zone */}
              {stageDeals.length === 0 && (
                <div className="flex flex-col items-center justify-center h-24 border border-dashed border-slate-200/90 rounded-xl bg-white/40">
                  <span className="text-xs text-slate-400">Chưa có cơ hội trong cột này</span>
                </div>
              )}

              {/* Quick Add Button */}
              {onQuickAddDeal && (
                <button
                  type="button"
                  onClick={() => onQuickAddDeal(stage.id)}
                  className="mt-1 w-full py-2 flex items-center justify-center gap-1.5 text-slate-500 hover:text-slate-900 hover:bg-white/80 rounded-xl text-xs font-medium transition-all opacity-0 group-hover/column:opacity-100"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Thêm cơ hội</span>
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
