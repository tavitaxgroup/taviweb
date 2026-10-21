import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Layers, Check } from 'lucide-react';

interface PipelineSelectorProps {
  pipelines: { id: string; name: string }[];
  activeId: string | null;
  onChange: (id: string) => void;
  className?: string;
}

export default function PipelineSelector({ pipelines, activeId, onChange, className = '' }: PipelineSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activePipeline = pipelines.find(p => p.id === activeId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (pipelines.length === 0) return null;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2.5 h-9 px-3 bg-white border border-slate-200/80 hover:border-slate-300 rounded-lg text-xs font-semibold text-slate-900 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.99]"
      >
        <Layers className="w-3.5 h-3.5 text-slate-500 shrink-0" />
        <span className="truncate max-w-[180px]">
          {activePipeline?.name || 'Chọn quy trình'}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1.5 min-w-[230px] bg-white border border-slate-200/90 rounded-xl shadow-[0_12px_32px_-4px_rgba(15,23,42,0.08)] z-50 overflow-hidden p-1">
          <div className="px-2.5 py-1.5 text-[11px] font-medium text-slate-400">
            Quy trình bán hàng
          </div>
          <div className="max-h-60 overflow-y-auto custom-scrollbar space-y-0.5">
            {pipelines.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  onChange(p.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors ${
                  activeId === p.id
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'text-slate-700 font-medium hover:bg-slate-100/80'
                }`}
              >
                <span className="truncate pr-3">{p.name}</span>
                {activeId === p.id && <Check className="w-3.5 h-3.5 shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
