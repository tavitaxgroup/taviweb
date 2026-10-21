import React, { useMemo, useEffect, useState } from 'react';
import { CRMDeal, CRMStage } from '../types';
import { CRMService } from '../api/crm.service';
import { useAuth } from '../contexts/AuthContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

interface ReportDashboardProps {
  deals: CRMDeal[];
  stages: CRMStage[];
}

export default function ReportDashboard({ deals, stages }: ReportDashboardProps) {
  const { user } = useAuth();
  const [kpis, setKpis] = useState<any[]>([]);

  useEffect(() => {
    if (user?.tenant_id) {
      loadKpis();
    }
  }, [user?.tenant_id]);

  const loadKpis = async () => {
    if (!user?.tenant_id) return;
    try {
      const now = new Date();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      const fetchedKpis = await CRMService.getKpis(user.tenant_id, month, year);
      setKpis(fetchedKpis);
    } catch (error) {
      console.error('Failed to load KPIs', error);
    }
  };

  const totalDeals = deals.length;
  const totalValue = deals.reduce((acc, deal) => acc + Number(deal.value || 0), 0);

  // Recognize all Vietnamese & English completion stage names, falling back to last stage if needed
  const wonStages = useMemo(() => {
    const matched = stages.filter(s => {
      const name = s.name.toLowerCase();
      return (
        name.includes('won') ||
        name.includes('chốt') ||
        name.includes('hoàn thành') ||
        name.includes('thành công') ||
        name.includes('đã ký')
      );
    });
    if (matched.length > 0) return matched;
    return stages.length > 0 ? [stages[stages.length - 1]] : [];
  }, [stages]);

  const wonStageIds = useMemo(() => wonStages.map(s => s.id), [wonStages]);
  const wonDeals = deals.filter(d => wonStageIds.includes(d.stage_id));
  const wonValue = wonDeals.reduce((acc, deal) => acc + Number(deal.value || 0), 0);
  const winRate = totalDeals > 0 ? ((wonDeals.length / totalDeals) * 100).toFixed(1) : '0.0';

  const funnelData = {
    labels: stages.map(s => s.name),
    datasets: [
      {
        label: 'Số lượng cơ hội',
        data: stages.map(stage => deals.filter(d => d.stage_id === stage.id).length),
        backgroundColor: stages.map(stage =>
          wonStageIds.includes(stage.id) ? '#10b981' : '#0f172a'
        ),
        borderRadius: 6,
        maxBarThickness: 44,
      },
    ],
  };

  const salesStats = useMemo(() => {
    const stats: Record<
      string,
      {
        name: string;
        totalDeals: number;
        wonDeals: number;
        totalValue: number;
        wonValue: number;
        targetRevenue: number;
      }
    > = {};

    deals.forEach(deal => {
      if (deal.assignee) {
        const uid = deal.assignee.id;
        if (!stats[uid]) {
          stats[uid] = {
            name: deal.assignee.name,
            totalDeals: 0,
            wonDeals: 0,
            totalValue: 0,
            wonValue: 0,
            targetRevenue: 100000000,
          };
        }
        stats[uid].totalDeals += 1;
        stats[uid].totalValue += deal.value || 0;

        if (wonStageIds.includes(deal.stage_id)) {
          stats[uid].wonDeals += 1;
          stats[uid].wonValue += deal.value || 0;
        }
      }
    });

    kpis.forEach(k => {
      if (stats[k.user_id]) {
        stats[k.user_id].targetRevenue = k.target_revenue;
      }
    });

    return Object.values(stats).sort((a, b) => b.wonValue - a.wonValue);
  }, [deals, wonStageIds, kpis]);

  const formatVND = (val: number) =>
    new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto w-full pb-12 overflow-y-auto custom-scrollbar pr-1">
      <div className="flex items-end justify-between pt-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 tracking-[-0.02em]">
            Hiệu suất kinh doanh & Phễu chuyển đổi
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Số liệu tổng hợp theo thời gian thực từ các cơ hội trên quy trình hiện tại
          </p>
        </div>
      </div>

      {/* Executive Financial Strip */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70 overflow-hidden">
        <div className="p-5">
          <div className="text-xs font-medium text-slate-500 mb-2">Tổng cơ hội (Pipeline)</div>
          <div className="text-2xl font-mono tabular-nums font-semibold text-slate-900">
            {totalDeals}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Đang theo dõi trong phễu</div>
        </div>

        <div className="p-5">
          <div className="text-xs font-medium text-slate-500 mb-2">Tổng giá trị dự kiến</div>
          <div className="text-2xl font-mono tabular-nums font-semibold text-slate-900">
            {formatVND(totalValue)}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Tổng quy mô cơ hội</div>
        </div>

        <div className="p-5 bg-emerald-50/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-600">Doanh thu đã chốt</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <div className="text-2xl font-mono tabular-nums font-semibold text-emerald-700">
            {formatVND(wonValue)}
          </div>
          <div className="text-[11px] font-mono tabular-nums text-emerald-600 mt-1">
            {wonDeals.length} cơ hội hoàn thành
          </div>
        </div>

        <div className="p-5">
          <div className="text-xs font-medium text-slate-500 mb-2">Tỷ lệ chuyển đổi (Win Rate)</div>
          <div className="text-2xl font-mono tabular-nums font-semibold text-slate-900">
            {winRate}%
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Tính trên cột {wonStages.map(s => s.name).join(', ') || 'Hoàn thành'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sales Funnel Chart */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Phân bổ cơ hội theo giai đoạn</h3>
              <p className="text-xs text-slate-400 mt-0.5">Số lượng khách hàng ở từng bước chăm sóc</p>
            </div>
          </div>
          <div className="h-72">
            <Bar
              data={funnelData}
              options={{
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1, color: '#64748b', font: { size: 11 } },
                    grid: { color: '#f1f5f9' },
                  },
                  x: {
                    ticks: { color: '#334155', font: { size: 11, weight: 500 } },
                    grid: { display: false },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Sales Leaderboard */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-slate-900">Hiệu suất theo nhân sự</h3>
            <p className="text-xs text-slate-400 mt-0.5">Tiến độ doanh thu so với chỉ tiêu tháng</p>
          </div>

          <div className="flex flex-col gap-3">
            {salesStats.length === 0 ? (
              <div className="text-center py-12 text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl">
                Chưa có cơ hội nào được gán nhân sự phụ trách.
              </div>
            ) : (
              salesStats.map((stat, index) => {
                const progressPct =
                  Math.min(100, Math.round((stat.wonValue / stat.targetRevenue) * 100)) || 0;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-white border border-slate-200/80 flex items-center justify-center font-mono text-xs font-semibold text-slate-700">
                          {index + 1}
                        </span>
                        <div>
                          <div className="text-xs font-semibold text-slate-900">{stat.name}</div>
                          <div className="text-[11px] font-mono tabular-nums text-slate-400">
                            Đã chốt {stat.wonDeals}/{stat.totalDeals} cơ hội
                          </div>
                        </div>
                      </div>
                      <div className="text-right font-mono tabular-nums text-xs font-semibold text-emerald-700">
                        {formatVND(stat.wonValue)}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1 text-slate-500">
                        <span>Mục tiêu: {formatVND(stat.targetRevenue)}</span>
                        <span className="font-mono tabular-nums font-semibold text-slate-700">
                          {progressPct}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200/80 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            progressPct >= 100 ? 'bg-emerald-600' : 'bg-slate-900'
                          }`}
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
