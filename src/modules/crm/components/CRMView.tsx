"use client";

import React, { useEffect, useState } from 'react';
import { CRMService } from '../api/crm.service';
import { CRMPipeline, CRMStage, CRMDeal } from '../types';
import KanbanBoard from './KanbanBoard';
import TableBoard from './TableBoard';
import DealDetailModal from './DealDetailModal';
import ReportDashboard from './ReportDashboard';
import PipelineSelector from './PipelineSelector';
import { useAuth } from '../contexts/AuthContext';
import CommandPalette from './CommandPalette';
import CreateDealModal from './CreateDealModal';
import CRMSettings from './CRMSettings';
import QuoteCalculator from './QuoteCalculator';
import { Search, Plus, SlidersHorizontal, Kanban, List, BarChart3, Calculator } from 'lucide-react';

export default function CRMView() {
  const { user, loading: authLoading, hasPermission } = useAuth();

  const [viewMode, setViewMode] = useState<'kanban' | 'table' | 'report' | 'settings' | 'calculator'>('kanban');
  const [pipelines, setPipelines] = useState<CRMPipeline[]>([]);
  const [activePipeline, setActivePipeline] = useState<string>('');
  const [stages, setStages] = useState<CRMStage[]>([]);
  const [deals, setDeals] = useState<CRMDeal[]>([]);
  const [selectedDeal, setSelectedDeal] = useState<CRMDeal | null>(null);
  const [loading, setLoading] = useState(true);
  const [templateKey, setTemplateKey] = useState<string>('');

  // Filters & Views state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState<'all' | 'vip' | 'this_month' | 'ecommerce'>('all');
  const [cmdKOpen, setCmdKOpen] = useState(false);
  const [createDealOpen, setCreateDealOpen] = useState(false);
  const [createDealStageId, setCreateDealStageId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdKOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (user) {
      loadPipelines();

      import('@/lib/supabase').then(({ supabase }) => {
        supabase
          .from('tenants')
          .select('template_key')
          .eq('id', user.tenant_id)
          .single()
          .then(({ data }: { data: any }) => {
            if (data) setTemplateKey(data.template_key);
          });
      });
    }
  }, [user, viewMode]);

  useEffect(() => {
    if (activePipeline && user) {
      loadPipelineData(activePipeline);
    }
  }, [activePipeline, user]);

  const loadPipelines = async () => {
    if (!user?.tenant_id) {
      setLoading(false);
      return;
    }
    try {
      let p = await CRMService.getPipelines(user.tenant_id);

      if (p.length === 0) {
        const newPipeline = await CRMService.upsertPipeline(user.tenant_id, {
          name: 'Quy trình chuẩn',
          description: 'Quy trình chăm sóc khách hàng mặc định',
        });
        await CRMService.upsertStages(user.tenant_id, newPipeline.id, [
          { name: 'Mới (Leads)', order: 0, color: 'bg-slate-200 text-slate-700' },
          { name: 'Đang xử lý', order: 1, color: 'bg-indigo-100 text-indigo-700' },
          { name: 'Hoàn thành', order: 2, color: 'bg-emerald-100 text-emerald-700' },
        ]);
        p = await CRMService.getPipelines(user.tenant_id);
      }

      setPipelines(p);
      if (p.length > 0) {
        setActivePipeline(current => {
          if (current && p.some(pipe => pipe.id === current)) {
            return current;
          }
          return p[0].id;
        });
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Failed to load pipelines', error);
      setLoading(false);
    }
  };

  const loadPipelineData = async (pipelineId: string) => {
    if (!user?.tenant_id) return;
    setLoading(true);
    try {
      let s = await CRMService.getStages(user.tenant_id, pipelineId);

      if (s.length === 0) {
        await CRMService.upsertStages(user.tenant_id, pipelineId, [
          { name: 'Mới (Leads)', order: 0 },
          { name: 'Đang xử lý', order: 1 },
          { name: 'Hoàn thành', order: 2 },
        ]);
        s = await CRMService.getStages(user.tenant_id, pipelineId);
      }

      setStages(s);

      const stageIds = s.map(stage => stage.id);
      if (stageIds.length > 0) {
        const d = await CRMService.getDeals(
          user.tenant_id,
          pipelineId,
          user?.id,
          hasPermission('view_all_deals'),
          stageIds
        );
        setDeals(d);
      } else {
        setDeals([]);
      }
    } catch (error) {
      console.error('Failed to load pipeline data', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDealMove = async (dealId: string, newStageId: string) => {
    if (!user?.tenant_id) return;
    setDeals(prev => prev.map(d => (d.id === dealId ? { ...d, stage_id: newStageId } : d)));
    try {
      await CRMService.updateDealStage(user.tenant_id, dealId, newStageId);
    } catch (error) {
      console.error('Failed to move deal', error);
      if (activePipeline) loadPipelineData(activePipeline);
    }
  };

  if (authLoading) {
    return (
      <div className="flex h-full min-h-[560px] items-center justify-center bg-[#FAF9F6]">
        <div className="h-6 w-6 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const isBoardOrTable = viewMode === 'kanban' || viewMode === 'table';

  return (
    <div className="flex flex-col h-full min-h-[560px] bg-[#FAF9F6] font-sans relative overflow-hidden">
      {/* Unified Executive Control Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6 py-3 flex flex-wrap gap-3 justify-between items-center relative z-30 shrink-0">
        {/* Left: Pipeline + Segment Filters + Search */}
        <div className="flex flex-wrap items-center gap-2.5">
          {pipelines.length > 0 && viewMode !== 'report' && viewMode !== 'calculator' && (
            <PipelineSelector
              pipelines={pipelines}
              activeId={activePipeline}
              onChange={setActivePipeline}
            />
          )}

          {isBoardOrTable && (
            <>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              {/* Segmented Filter Pills */}
              <div className="flex items-center bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
                {[
                  { id: 'all', label: `Tất cả (${deals.length})` },
                  { id: 'ecommerce', label: 'Đơn Web' },
                  { id: 'vip', label: 'VIP > 50tr' },
                  { id: 'this_month', label: 'Tháng này' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveView(tab.id as any)}
                    className={`px-2.5 py-1 text-xs rounded-md transition-all duration-200 ${
                      activeView === tab.id
                        ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                        : 'text-slate-500 hover:text-slate-800 font-medium'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Input + CmdK */}
              <div className="relative flex items-center">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Tìm tên khách, SĐT, deal..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="h-9 pl-8 pr-14 text-xs rounded-lg border border-slate-200/80 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors w-[210px] sm:w-[240px]"
                />
                <button
                  type="button"
                  onClick={() => setCmdKOpen(true)}
                  title="Tìm kiếm toàn cục (Ctrl+K)"
                  className="absolute right-1.5 px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200/80 text-[10px] font-mono text-slate-500 transition-colors"
                >
                  ⌘K
                </button>
              </div>
            </>
          )}
        </div>

        {/* Right: View Switcher + Settings + Primary Action */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
            <button
              type="button"
              onClick={() => setViewMode('kanban')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200 ${
                viewMode === 'kanban'
                  ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <Kanban className="w-3.5 h-3.5" />
              <span>Kanban</span>
            </button>
            {hasPermission('view_all_deals') && (
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200 ${
                  viewMode === 'table'
                    ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                    : 'text-slate-500 hover:text-slate-800 font-medium'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>Danh sách</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setViewMode('report')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200 ${
                viewMode === 'report'
                  ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Báo cáo</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('calculator')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200 ${
                viewMode === 'calculator'
                  ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
              title="Tính giá dự án"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Tính giá</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setViewMode('settings')}
            className={`h-9 w-9 inline-flex items-center justify-center rounded-lg border transition-all duration-200 ${
              viewMode === 'settings'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200/80 hover:border-slate-300'
            }`}
            title="Cấu hình Phễu & Trường tùy chỉnh CRM"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              setCreateDealStageId(stages[0]?.id);
              setCreateDealOpen(true);
            }}
            className="inline-flex items-center gap-1.5 h-9 px-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.985]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tạo cơ hội</span>
          </button>
        </div>
      </div>

      {/* Main Content Canvas */}
      <div className="flex-1 overflow-hidden relative flex">
        <div className="flex-1 overflow-hidden flex flex-col pt-4 px-6 pb-4">
          {loading && viewMode !== 'report' ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="h-7 w-7 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
            </div>
          ) : viewMode === 'settings' ? (
            <CRMSettings
              pipelines={pipelines}
              onPipelinesChange={newPipelines => setPipelines(newPipelines)}
            />
          ) : viewMode === 'calculator' ? (
            <QuoteCalculator />
          ) : viewMode === 'report' ? (
            <ReportDashboard deals={deals} stages={stages} />
          ) : (
            (() => {
              let filteredDeals = deals;
              if (searchQuery) {
                const q = searchQuery.toLowerCase();
                filteredDeals = filteredDeals.filter(
                  d =>
                    String(d.title || '').toLowerCase().includes(q) ||
                    String(d.contact?.name || '').toLowerCase().includes(q) ||
                    String(d.contact?.phone || '').includes(q)
                );
              }
              if (activeView === 'vip') {
                filteredDeals = filteredDeals.filter(d => (d.value || 0) > 50000000);
              } else if (activeView === 'ecommerce') {
                filteredDeals = filteredDeals.filter(
                  d =>
                    d.custom_data?.source === 'ecommerce_checkout' ||
                    String(d.title || '').startsWith('[Đơn hàng #')
                );
              } else if (activeView === 'this_month') {
                const now = new Date();
                filteredDeals = filteredDeals.filter(d => {
                  const dDate = new Date(d.created_at);
                  return (
                    dDate.getMonth() === now.getMonth() &&
                    dDate.getFullYear() === now.getFullYear()
                  );
                });
              }

              return viewMode === 'kanban' ? (
                <KanbanBoard
                  stages={stages}
                  deals={filteredDeals}
                  onDealMove={handleDealMove}
                  onDealClick={setSelectedDeal}
                  onQuickAddDeal={stageId => {
                    setCreateDealStageId(stageId);
                    setCreateDealOpen(true);
                  }}
                />
              ) : (
                <TableBoard
                  stages={stages}
                  deals={filteredDeals}
                  onDealClick={setSelectedDeal}
                  onRefresh={() => {
                    if (activePipeline) loadPipelineData(activePipeline);
                  }}
                />
              );
            })()
          )}
        </div>

        {/* Floating Slide-over Sheet for Deal Details (Never squeezes Kanban) */}
        {selectedDeal && (
          <div
            className="fixed inset-0 z-50 flex justify-end bg-slate-950/20 backdrop-blur-[2px] animate-in fade-in duration-200"
            onClick={() => setSelectedDeal(null)}
          >
            <div
              className="w-full max-w-[540px] h-[calc(100dvh-16px)] m-2 rounded-2xl bg-white shadow-[0_24px_64px_-12px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/10 overflow-hidden flex flex-col animate-in slide-in-from-right-8 duration-300"
              onClick={e => e.stopPropagation()}
            >
              <DealDetailModal
                deal={selectedDeal}
                stages={stages}
                onClose={() => setSelectedDeal(null)}
                onRefresh={() => {
                  if (activePipeline) loadPipelineData(activePipeline);
                }}
                onDelete={() => {
                  if (activePipeline) loadPipelineData(activePipeline);
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Create Deal Modal */}
      {createDealOpen && (
        <CreateDealModal
          stages={stages}
          initialStageId={createDealStageId}
          onClose={() => setCreateDealOpen(false)}
          onSuccess={() => {
            if (activePipeline) loadPipelineData(activePipeline);
          }}
        />
      )}

      {/* Command Palette Modal */}
      {cmdKOpen && (
        <CommandPalette
          deals={deals}
          onClose={() => setCmdKOpen(false)}
          onSelect={deal => {
            setSelectedDeal(deal);
            setCmdKOpen(false);
          }}
        />
      )}
    </div>
  );
}
