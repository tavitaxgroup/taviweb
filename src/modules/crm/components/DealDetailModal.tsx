import React, { useEffect, useState } from 'react';
import { CRMDeal, CRMActivity, CRMCustomField, CRMStage } from '../types';
import { CRMService } from '../api/crm.service';
import QuoteGenerator from './QuoteGenerator';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import {
  X,
  Phone,
  MessageCircle,
  FileText,
  Trash2,
  Sparkles,
  RefreshCw,
  Pencil,
  CalendarClock,
  MessageSquare,
  ChevronDown,
  Globe,
  ExternalLink,
} from 'lucide-react';

interface DealDetailModalProps {
  deal: CRMDeal | null;
  stages?: CRMStage[];
  onClose: () => void;
  onDelete?: (dealId: string) => void;
  onRefresh?: () => void;
}

export default function DealDetailModal({
  deal,
  stages = [],
  onClose,
  onDelete,
  onRefresh,
}: DealDetailModalProps) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline'>('overview');
  const [activities, setActivities] = useState<CRMActivity[]>([]);
  const [newNote, setNewNote] = useState('');
  const [activityType, setActivityType] = useState<'note' | 'reminder'>('note');
  const [reminderDate, setReminderDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuoteGen, setShowQuoteGen] = useState(false);
  const [customFields, setCustomFields] = useState<CRMCustomField[]>([]);
  const [editingCustomField, setEditingCustomField] = useState<string | null>(null);
  const [customFieldValue, setCustomFieldValue] = useState<string>('');

  // Title & Value Edit State
  const [editingTitle, setEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState('');

  const [editingValue, setEditingValue] = useState(false);
  const [dealValueNum, setDealValueNum] = useState(0);

  // Contact & Stage Edit State
  const [editingContactField, setEditingContactField] = useState<string | null>(null);
  const [contactFieldValue, setContactFieldValue] = useState('');

  // AI Summary State
  const [aiSummary, setAiSummary] = useState<any>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    if (deal) {
      loadActivities();
      loadCustomFields();
      setAiSummary(null);
    }
  }, [deal?.id]);

  const loadCustomFields = async () => {
    if (!user?.tenant_id) return;
    try {
      const fields = await CRMService.getCustomFields(user.tenant_id, 'deal');
      setCustomFields(fields);
    } catch (error) {
      console.error('Failed to load custom fields', error);
    }
  };

  const fetchAiSummary = async () => {
    if (!deal) return;
    setLoadingAi(true);
    try {
      const res = await fetch(`/api/admin/crm/deals/${deal.id}/ai-summary`);
      if (res.ok) {
        const data = await res.json();
        setAiSummary(data);
      }
    } catch (error) {
      console.error('Failed to fetch AI summary', error);
    } finally {
      setLoadingAi(false);
    }
  };

  const loadActivities = async () => {
    if (!deal || !user?.tenant_id) return;
    try {
      const acts = await CRMService.getActivities(user.tenant_id, deal.id);
      setActivities(acts);
    } catch (error) {
      console.error('Failed to load activities', error);
    }
  };

  const handleAddActivity = async () => {
    if (!newNote.trim() || !deal || !user?.tenant_id) return;
    if (activityType === 'reminder' && !reminderDate) {
      toast.error('Vui lòng chọn thời gian hẹn gọi lại.');
      return;
    }
    setLoading(true);
    try {
      let content = newNote.trim();
      if (activityType === 'reminder') {
        const d = new Date(reminderDate);
        content = `⏰ NHẮC LỊCH: ${d.toLocaleString('vi-VN')} - ${content}`;
      }

      await CRMService.createActivity(user.tenant_id, {
        deal_id: deal.id,
        type: activityType === 'reminder' ? 'note' : activityType,
        content,
      });
      setNewNote('');
      setActivityType('note');
      setReminderDate('');
      toast.success(
        activityType === 'reminder' ? 'Đã lưu lịch nhắc hẹn.' : 'Đã thêm ghi chú chăm sóc.'
      );
      loadActivities();
    } catch (error) {
      console.error('Failed to add activity', error);
      toast.error('Không thể lưu tương tác.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDeal = async () => {
    if (!deal || !user?.tenant_id) return;
    const confirmDelete = window.confirm('Xác nhận xóa cơ hội bán hàng này khỏi CRM?');
    if (confirmDelete) {
      try {
        await CRMService.deleteDeal(user.tenant_id, deal.id);
        toast.success('Đã xóa cơ hội.');
        if (onDelete) {
          onDelete(deal.id);
        }
        onClose();
      } catch (error) {
        console.error('Failed to delete deal', error);
        toast.error('Có lỗi xảy ra khi xóa cơ hội.');
      }
    }
  };

  if (!deal) return null;

  const phoneClean = deal.contact?.phone ? String(deal.contact.phone).replace(/\s+/g, '') : '';
  const reminderCount = activities.filter(a => a.content.startsWith('⏰ NHẮC LỊCH:')).length;

  return (
    <>
      <div className="h-full w-full flex flex-col bg-white overflow-hidden">
        {/* Top Sheet Header */}
        <div className="px-6 pt-5 pb-4 border-b border-slate-100 bg-white shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              {editingTitle ? (
                <input
                  autoFocus
                  value={titleValue}
                  onChange={e => setTitleValue(e.target.value)}
                  onBlur={async () => {
                    if (titleValue.trim() && titleValue !== deal.title && user?.tenant_id) {
                      await CRMService.updateDeal(user.tenant_id, deal.id, {
                        title: titleValue.trim(),
                      });
                      deal.title = titleValue.trim();
                      if (onRefresh) onRefresh();
                    }
                    setEditingTitle(false);
                  }}
                  onKeyDown={e => e.key === 'Enter' && e.currentTarget.blur()}
                  className="text-lg font-semibold text-slate-900 bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 outline-none w-full"
                />
              ) : (
                <h2
                  onClick={() => {
                    setTitleValue(deal.title);
                    setEditingTitle(true);
                  }}
                  className="text-lg font-semibold text-slate-900 tracking-[-0.02em] leading-snug cursor-pointer hover:text-slate-700 inline-flex items-center gap-2 group"
                >
                  <span>{deal.title}</span>
                  <Pencil className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </h2>
              )}

              {/* Value + Stage Selector Row */}
              <div className="flex flex-wrap items-center gap-3 mt-2.5">
                {editingValue ? (
                  <input
                    autoFocus
                    type="number"
                    value={dealValueNum}
                    onChange={e => setDealValueNum(Number(e.target.value))}
                    onBlur={async () => {
                      if (dealValueNum !== deal.value && user?.tenant_id) {
                        await CRMService.updateDeal(user.tenant_id, deal.id, {
                          value: dealValueNum,
                        });
                        deal.value = dealValueNum;
                        if (onRefresh) onRefresh();
                      }
                      setEditingValue(false);
                    }}
                    onKeyDown={e => e.key === 'Enter' && e.currentTarget.blur()}
                    className="font-mono tabular-nums text-sm font-semibold text-slate-900 bg-slate-50 border border-slate-300 rounded-md px-2 py-0.5 outline-none w-[150px]"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setDealValueNum(deal.value || 0);
                      setEditingValue(true);
                    }}
                    className="font-mono tabular-nums text-sm font-semibold text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/70 px-2.5 py-1 rounded-lg transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>
                      {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                        maximumFractionDigits: 0,
                      }).format(deal.value || 0)}
                    </span>
                    <Pencil className="w-3 h-3 opacity-60" />
                  </button>
                )}

                {/* Stage Select Pill */}
                <div className="relative">
                  <select
                    value={deal.stage_id}
                    onChange={async e => {
                      const nextStageId = e.target.value;
                      if (nextStageId !== deal.stage_id && user?.tenant_id) {
                        await CRMService.updateDealStage(user.tenant_id, deal.id, nextStageId);
                        deal.stage_id = nextStageId;
                        toast.success('Đã chuyển giai đoạn.');
                        if (onRefresh) onRefresh();
                      }
                    }}
                    className="appearance-none bg-slate-100 hover:bg-slate-200/70 text-slate-800 text-xs font-medium pl-3 pr-7 py-1.5 rounded-lg border border-slate-200/80 outline-none cursor-pointer transition-colors"
                  >
                    {stages.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg border border-slate-200/80 text-slate-400 hover:text-slate-800 hover:bg-slate-50 flex items-center justify-center transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3.5 border-t border-slate-100">
            <div className="flex items-center gap-2">
              {phoneClean && (
                <>
                  <a
                    href={`tel:${phoneClean}`}
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Gọi điện</span>
                  </a>
                  <a
                    href={`https://zalo.me/${phoneClean}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Nhắn Zalo</span>
                  </a>
                </>
              )}
              <button
                type="button"
                onClick={() => setShowQuoteGen(true)}
                className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-xs shadow-indigo-600/15 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Lập báo giá A4</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleDeleteDeal}
              title="Xóa cơ hội"
              className="h-8 w-8 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 flex items-center justify-center transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Segmented Tab Switcher */}
          <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60 mt-4">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-1.5 text-xs rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              Tổng quan & Phân tích AI
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('timeline')}
              className={`flex-1 py-1.5 text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'timeline'
                  ? 'bg-white text-slate-900 font-semibold shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <span>Nhật ký & Nhắc lịch</span>
              <span className="font-mono tabular-nums text-[10px] px-1.5 py-0.2 rounded bg-slate-200/70 text-slate-600">
                {activities.length}
              </span>
              {reminderCount > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" title="Có lịch nhắc hẹn" />
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Sheet Body */}
        <div className="flex-1 min-h-0 overflow-y-auto p-6 flex flex-col gap-5 custom-scrollbar bg-[#FAF9F6]/60">
          {activeTab === 'overview' ? (
            <>
              {/* AI Deal Intelligence — Executive Card */}
              <div className="bg-gradient-to-br from-indigo-50/75 via-white to-emerald-50/40 border border-indigo-200/70 p-5 rounded-2xl shadow-[0_1px_3px_rgba(15,23,42,0.04)] relative overflow-hidden shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-100/80 text-indigo-600 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-semibold tracking-wide text-slate-900">
                      Trợ lý AI Phân tích Cơ hội
                    </h3>
                  </div>
                  {!loadingAi && (
                    <button
                      type="button"
                      onClick={fetchAiSummary}
                      className="inline-flex items-center gap-1.5 text-[11px] bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg font-semibold shadow-xs shadow-indigo-600/15 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>{aiSummary ? 'Phân tích lại' : 'Chạy phân tích'}</span>
                    </button>
                  )}
                </div>

                {!aiSummary && !loadingAi && (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nhấn <strong className="text-indigo-700">Chạy phân tích</strong> để AI tổng hợp lịch sử tương tác, đánh giá xác suất chốt và gợi ý kịch bản tư vấn tiếp theo.
                  </p>
                )}

                {loadingAi && (
                  <div className="flex items-center gap-2.5 py-3 text-xs text-slate-600">
                    <div className="w-4 h-4 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
                    <span>Đang phân tích dữ liệu tương tác của khách hàng...</span>
                  </div>
                )}

                {aiSummary && !loadingAi && (
                  <div className="space-y-3.5">
                    <div className="text-xs text-slate-700 leading-relaxed bg-white/90 p-3.5 rounded-xl border border-indigo-100">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: aiSummary.summary.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-slate-900 font-semibold">$1</strong>'
                          ),
                        }}
                      />
                    </div>

                    {aiSummary.next_steps && aiSummary.next_steps.length > 0 && (
                      <div>
                        <div className="text-[11px] font-semibold text-slate-500 mb-2">
                          Hành động khuyến nghị tiếp theo:
                        </div>
                        <ul className="space-y-1.5">
                          {aiSummary.next_steps.map((step: string, i: number) => (
                            <li
                              key={i}
                              className="text-xs text-slate-700 flex items-start gap-2 bg-white/80 border border-slate-200/60 px-3 py-2 rounded-lg"
                            >
                              <span className="font-mono text-[10px] font-bold text-indigo-600 mt-0.5">
                                0{i + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-[11px] text-slate-400">Chỉ số tín nhiệm chốt đơn</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-400 rounded-full"
                            style={{ width: `${aiSummary.confidence_score}%` }}
                          />
                        </div>
                        <span className="font-mono tabular-nums text-xs font-semibold text-emerald-400">
                          {aiSummary.confidence_score}%
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Information Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-semibold text-slate-900">Hồ sơ khách hàng</h3>
                  <span className="text-[11px] text-slate-400">Nhấn vào từng mục để sửa</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {[
                    { key: 'name', label: 'Họ và tên', value: deal.contact?.name, mono: false },
                    { key: 'phone', label: 'Số điện thoại', value: deal.contact?.phone, mono: true },
                    { key: 'website', label: 'Website', value: deal.contact?.website, mono: false },
                    {
                      key: 'facebook_url',
                      label: 'Facebook / Mạng XH',
                      value: deal.contact?.facebook_url,
                      mono: false,
                    },
                  ].map(field => (
                    <div key={field.key} className="group p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                      <span className="text-[11px] text-slate-400 block mb-1 font-medium">
                        {field.label}
                      </span>
                      {editingContactField === field.key ? (
                        <input
                          autoFocus
                          value={contactFieldValue}
                          onChange={e => setContactFieldValue(e.target.value)}
                          onBlur={async () => {
                            if (
                              contactFieldValue !== field.value &&
                              user?.tenant_id &&
                              deal.contact_id
                            ) {
                              await CRMService.updateContact(user.tenant_id, deal.contact_id, {
                                [field.key]: contactFieldValue.trim(),
                              });
                              if (deal.contact) {
                                (deal.contact as any)[field.key] = contactFieldValue.trim();
                              }
                              toast.success('Đã cập nhật thông tin khách hàng.');
                              if (onRefresh) onRefresh();
                            }
                            setEditingContactField(null);
                          }}
                          onKeyDown={e => e.key === 'Enter' && e.currentTarget.blur()}
                          className="bg-white border border-slate-300 rounded-md px-2 py-1 outline-none w-full font-semibold text-slate-900 text-xs"
                        />
                      ) : (
                        <div
                          onClick={() => {
                            setContactFieldValue(field.value || '');
                            setEditingContactField(field.key);
                          }}
                          className={`font-semibold text-slate-900 cursor-pointer flex items-center justify-between gap-2 ${
                            field.mono ? 'font-mono tabular-nums' : ''
                          }`}
                        >
                          <span className="truncate">{field.value || 'Chưa cập nhật'}</span>
                          <Pencil className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Data & Fields Card */}
              {(customFields.length > 0 ||
                (deal.custom_data && Object.keys(deal.custom_data).length > 0)) && (
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] shrink-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-semibold text-slate-900">
                      Thuộc tính & Dữ liệu bổ sung
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {customFields.map(field => {
                      const currentValue = deal.custom_data?.[field.name] || '';
                      return (
                        <div
                          key={field.id}
                          className="group p-2.5 rounded-xl bg-slate-50/70 border border-slate-100"
                        >
                          <span className="text-[11px] text-slate-400 block mb-1 font-medium">
                            {field.label}
                          </span>
                          {editingCustomField === field.name ? (
                            <input
                              autoFocus
                              type={
                                field.type === 'date'
                                  ? 'date'
                                  : field.type === 'number'
                                  ? 'number'
                                  : 'text'
                              }
                              value={customFieldValue}
                              onChange={e => setCustomFieldValue(e.target.value)}
                              onBlur={async () => {
                                if (!user?.tenant_id || !deal) return;
                                const newData = {
                                  ...(deal.custom_data || {}),
                                  [field.name]: customFieldValue,
                                };
                                try {
                                  await CRMService.updateDeal(user.tenant_id, deal.id, {
                                    custom_data: newData,
                                  });
                                  deal.custom_data = newData;
                                  if (onRefresh) onRefresh();
                                } catch (e) {
                                  console.error('Failed to save custom field', e);
                                }
                                setEditingCustomField(null);
                              }}
                              className="bg-white border border-slate-300 rounded-md px-2 py-1 w-full text-xs font-semibold text-slate-900 outline-none"
                            />
                          ) : (
                            <div
                              onClick={() => {
                                setCustomFieldValue(String(currentValue));
                                setEditingCustomField(field.name);
                              }}
                              className="font-semibold text-slate-800 cursor-pointer flex items-center justify-between gap-2"
                            >
                              <span className="truncate">
                                {currentValue ? (
                                  String(currentValue)
                                ) : (
                                  <span className="text-slate-400 font-normal">Chưa nhập</span>
                                )}
                              </span>
                              <Pencil className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {deal.custom_data &&
                      Object.keys(deal.custom_data)
                        .filter(k => !customFields.some(cf => cf.name === k))
                        .map(key => {
                          const currentValue = deal.custom_data![key];
                          const isUrl =
                            typeof currentValue === 'string' && currentValue.startsWith('http');
                          return (
                            <div
                              key={key}
                              className="group p-2.5 rounded-xl bg-slate-50/70 border border-slate-100"
                            >
                              <span className="text-[11px] text-slate-400 block mb-1 font-medium">
                                {key.replace(/_/g, ' ')}
                              </span>
                              {editingCustomField === key ? (
                                <input
                                  autoFocus
                                  type="text"
                                  value={customFieldValue}
                                  onChange={e => setCustomFieldValue(e.target.value)}
                                  onBlur={async () => {
                                    if (!user?.tenant_id || !deal) return;
                                    const newData = {
                                      ...(deal.custom_data || {}),
                                      [key]: customFieldValue,
                                    };
                                    try {
                                      await CRMService.updateDeal(user.tenant_id, deal.id, {
                                        custom_data: newData,
                                      });
                                      deal.custom_data = newData;
                                      if (onRefresh) onRefresh();
                                    } catch (e) {
                                      console.error('Failed to save custom field', e);
                                    }
                                    setEditingCustomField(null);
                                  }}
                                  className="bg-white border border-slate-300 rounded-md px-2 py-1 w-full text-xs font-semibold text-slate-900 outline-none"
                                />
                              ) : isUrl ? (
                                <a
                                  href={String(currentValue)}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:underline truncate max-w-full"
                                >
                                  <Globe className="w-3 h-3 shrink-0" />
                                  <span className="truncate">Mở liên kết</span>
                                  <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-60" />
                                </a>
                              ) : (
                                <div
                                  onClick={() => {
                                    setCustomFieldValue(String(currentValue));
                                    setEditingCustomField(key);
                                  }}
                                  className="font-semibold text-slate-800 cursor-pointer flex items-center justify-between gap-2"
                                >
                                  <span className="break-words line-clamp-2">
                                    {String(currentValue)}
                                  </span>
                                  <Pencil className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                </div>
                              )}
                            </div>
                          );
                        })}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Tab 2: Activity Composer & Hairline Timeline */
            <div className="space-y-5">
              {/* Composer */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                <div className="flex items-center gap-1 bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60 mb-3 w-fit">
                  <button
                    type="button"
                    onClick={() => setActivityType('note')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-md transition-all ${
                      activityType === 'note'
                        ? 'bg-white text-slate-900 font-semibold shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 font-medium'
                    }`}
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Ghi chú chăm sóc</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivityType('reminder')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-md transition-all ${
                      activityType === 'reminder'
                        ? 'bg-white text-slate-900 font-semibold shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 font-medium'
                    }`}
                  >
                    <CalendarClock className="w-3 h-3" />
                    <span>Hẹn gọi lại (Nhắc việc)</span>
                  </button>
                </div>

                {activityType === 'reminder' && (
                  <div className="mb-3">
                    <label className="block text-[11px] font-medium text-slate-500 mb-1">
                      Thời điểm nhắc hẹn (đồng bộ lên chuông thông báo)
                    </label>
                    <input
                      type="datetime-local"
                      value={reminderDate}
                      onChange={e => setReminderDate(e.target.value)}
                      className="w-full sm:w-64 text-xs font-mono rounded-lg border border-slate-200/90 px-3 py-2 focus:border-slate-400 outline-none bg-slate-50/50"
                    />
                  </div>
                )}

                <textarea
                  value={newNote}
                  onChange={e => setNewNote(e.target.value)}
                  placeholder={
                    activityType === 'note'
                      ? 'Ghi lại nội dung trao đổi, nhu cầu hoặc phản hồi của khách hàng...'
                      : 'Nhập nội dung cần nhắc (VD: Gọi xác nhận báo giá gói VIP)...'
                  }
                  className="w-full text-xs rounded-xl border border-slate-200/90 p-3 focus:border-slate-400 outline-none bg-slate-50/40 text-slate-900 placeholder:text-slate-400 mb-3 resize-none"
                  rows={3}
                />

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleAddActivity}
                    disabled={loading || !newNote.trim()}
                    className="h-8 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg disabled:opacity-40 transition-all"
                  >
                    {loading
                      ? 'Đang lưu...'
                      : activityType === 'note'
                      ? 'Lưu ghi chú'
                      : 'Đặt lịch nhắc'}
                  </button>
                </div>
              </div>

              {/* Hairline Vertical Timeline */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                <h4 className="text-xs font-semibold text-slate-900 mb-4">
                  Lịch sử tương tác ({activities.length})
                </h4>

                {activities.length === 0 ? (
                  <div className="text-xs text-slate-400 text-center py-8 border border-dashed border-slate-200 rounded-xl">
                    Chưa có ghi chú hoặc lịch nhắc nào cho cơ hội này.
                  </div>
                ) : (
                  <div className="relative pl-4 border-l border-slate-200 space-y-4">
                    {activities.map(act => {
                      const isReminder = act.content.startsWith('⏰ NHẮC LỊCH:');
                      return (
                        <div key={act.id} className="relative group">
                          <span
                            className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-white ${
                              isReminder ? 'bg-amber-500' : 'bg-slate-900'
                            }`}
                          />
                          <div
                            className={`p-3.5 rounded-xl border text-xs ${
                              isReminder
                                ? 'bg-amber-50/60 border-amber-200/80'
                                : 'bg-slate-50/70 border-slate-200/60'
                            }`}
                          >
                            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                              <span className="font-semibold text-slate-700">
                                {act.user?.name || 'Hệ thống / Nhân sự'}
                              </span>
                              <span className="font-mono tabular-nums">
                                {new Date(act.created_at).toLocaleString('vi-VN')}
                              </span>
                            </div>
                            <div className="text-slate-800 whitespace-pre-wrap leading-relaxed">
                              {act.content}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {showQuoteGen && (
        <QuoteGenerator
          deal={deal}
          onClose={() => setShowQuoteGen(false)}
          onQuoteCreated={() => {
            setShowQuoteGen(false);
            loadActivities();
            if (onRefresh) onRefresh();
          }}
        />
      )}
    </>
  );
}
