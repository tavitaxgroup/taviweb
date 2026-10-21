"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { BusinessLead } from "@/types/demo";
import type { TemplateCatalogItem } from "@/lib/templates/templateCatalog";
import { 
  Eye, 
  X, 
  ExternalLink,
  CheckCircle2,
  PhoneCall,
  ArrowRight
} from "lucide-react";

interface IndustryTemplateHubProps {
  lead: BusinessLead;
  placeId: string;
  industryName: string;
  renderTemplates: TemplateCatalogItem[];
  referenceTemplates?: TemplateCatalogItem[];
}

const hotline = "0337.367.643";
const hotlineTel = "0337367643";

export function IndustryTemplateHub({
  lead,
  placeId,
  industryName,
  renderTemplates,
}: IndustryTemplateHubProps) {
  const [selectedPreviewTemplate, setSelectedPreviewTemplate] = useState<TemplateCatalogItem | null>(null);

  const businessName = lead.name || "Quý doanh nghiệp";

  return (
    <main className="gallery-page min-h-screen bg-[#f8fafc] text-zinc-900 font-sans selection:bg-[#073b8e] selection:text-white">
      
      {/* 1. Official TaviWeb Header */}
      <header className="gallery-header">
        <Link href="/" className="gallery-brand" aria-label="TAVIWEB">
          <img
            src="/assets/logo.png"
            alt="TAVIWEB"
            className="gallery-brand-logo"
            width={140}
            height={55}
          />
        </Link>
        <nav aria-label="Điều hướng">
          <Link href="/kho-giao-dien" className="text-sm font-semibold hover:text-[#073b8e] transition-colors">
            Kho giao diện
          </Link>
          <Link href="/#contact" className="text-sm font-semibold hover:text-[#073b8e] transition-colors">
            Liên hệ
          </Link>
          <a
            href={`tel:${hotlineTel}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#e20b12] hover:bg-[#c80910] px-4 py-2 rounded-full transition-colors shadow-sm"
          >
            <PhoneCall size={13} />
            <span>Hotline: {hotline}</span>
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Condensed Header */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[#dbe5f2]">
          <div>
            <span className="text-[#e20b12] text-xs font-black uppercase tracking-wider block mb-1">
              BẢN THIẾT KẾ DEMO
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#073b8e] uppercase tracking-tight">
              Mẫu Website Cho {businessName}
            </h1>
          </div>
          <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Rê chuột vào ảnh để cuộn xem website</span>
          </div>
        </div>

        {/* Available Live Templates Section */}
        <section className="mb-12">
          {/* Template Cards Grid matching TaviWeb system style */}
          <div className="gallery-reference-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {renderTemplates.map((template, idx) => {
              const templateTargetKey = template.templateKey || (template.id === "XD002" ? "xay_dung_2" : "cong_ty_xay_dung");
              const demoUrl = `/demo/${encodeURIComponent(placeId)}?template=${templateTargetKey}`;
              const image = template.longPreviewImage ?? template.thumbnail;

              return (
                <article 
                  key={template.id} 
                  className="gallery-reference-card group relative bg-white border border-[#dbe5f2] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  {/* Long Image Preview Container with Native TaviWeb Hover-Scroll Effect */}
                  <div 
                    className="gallery-reference-image relative h-[360px] sm:h-[460px] overflow-hidden bg-[#eef4fb] cursor-pointer"
                    aria-label={`Ảnh mẫu ${template.name}`}
                  >
                    <img 
                      src={image} 
                      alt={template.name} 
                      loading="lazy"
                      className="absolute top-0 left-0 w-full min-h-full object-cover object-top transition-transform duration-[8000ms] ease-linear group-hover:-translate-y-[calc(100%-460px)]"
                    />

                    {/* Badge top-left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-[#073b8e] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow uppercase tracking-wider">
                        MẪU {idx + 1} • {template.id}
                      </span>
                    </div>

                    {/* Scroll Hint at bottom */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full pointer-events-none group-hover:opacity-0 transition-opacity duration-300 shadow">
                      ↓ Rê chuột để cuộn xem toàn bộ website
                    </div>

                    {/* Hover Overlay with Action Buttons */}
                    <div className="gallery-reference-overlay absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col items-center justify-center gap-3 p-6 z-20">
                      <Link 
                        href={demoUrl}
                        className="min-w-[190px] text-center bg-[#e20b12] hover:bg-[#c80910] text-white text-xs font-black uppercase tracking-wider py-3 px-6 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Eye size={15} />
                        <span>Xem demo trực tiếp</span>
                      </Link>

                      <button 
                        type="button" 
                        onClick={() => setSelectedPreviewTemplate(template)}
                        className="min-w-[190px] text-center bg-[#073b8e] hover:bg-[#052c6e] text-white text-xs font-black uppercase tracking-wider py-3 px-6 rounded-full shadow-xl transition-transform hover:scale-105"
                      >
                        Xem ảnh cuộn dài
                      </button>
                    </div>
                  </div>

                  {/* Card Info Section */}
                  <div className="gallery-reference-info p-5 sm:p-6 flex flex-col justify-between flex-grow text-left">
                    <div>
                      {/* Top sync badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                          <CheckCircle2 size={12} className="text-emerald-600" />
                          <span>Đã đồng bộ thương hiệu</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-black text-[#073b8e] uppercase leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                        {template.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-2 mb-4">
                        {template.description}
                      </p>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <Link
                        href={demoUrl}
                        className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#073b8e] hover:bg-[#052c6e] px-4 py-2 rounded-lg transition-colors shadow-xs"
                      >
                        <span>Trải nghiệm bản demo</span>
                        <ArrowRight size={13} />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setSelectedPreviewTemplate(template)}
                        className="text-xs font-semibold text-slate-500 hover:text-[#073b8e] underline underline-offset-4 cursor-pointer"
                      >
                        Xem ảnh toàn trang
                      </button>
                    </div>
                  </div>

                </article>
              );
            })}
          </div>
        </section>

        {/* 4. Bottom Consultation Card matching TaviWeb system style */}
        <section className="bg-white border border-[#dbe5f2] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-black text-[#073b8e] uppercase mb-1">
              Bạn muốn tùy biến riêng về tính năng &amp; bố cục cho {businessName}?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Mọi mẫu giao diện đều có thể tùy biến 100% về cấu trúc, màu sắc nhận diện, danh mục dự án, hồ sơ năng lực và các biểu mẫu báo giá chuẩn SEO theo yêu cầu của bạn.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={`tel:${hotlineTel}`}
              className="inline-flex items-center gap-2 bg-[#e20b12] hover:bg-[#c80910] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full shadow transition-transform hover:scale-105"
            >
              <PhoneCall size={14} />
              <span>Hotline tư vấn: {hotline}</span>
            </a>
          </div>
        </section>

      </div>

      {/* 5. Long Preview Image Auto-Scroll Modal */}
      {selectedPreviewTemplate && (
        <TemplatePreviewModal
          template={selectedPreviewTemplate}
          placeId={placeId}
          onClose={() => setSelectedPreviewTemplate(null)}
        />
      )}

    </main>
  );
}

function TemplatePreviewModal({
  template,
  placeId,
  onClose,
}: {
  template: TemplateCatalogItem;
  placeId: string;
  onClose: () => void;
}) {
  const image = template.longPreviewImage ?? template.thumbnail;
  const imageScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = imageScrollRef.current;
    if (!container) return;

    let animationFrame = 0;
    let startTimer = 0;
    let retryTimer = 0;
    let cancelled = false;
    let lastTimestamp = 0;

    const stopAutoScroll = () => {
      cancelled = true;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      if (retryTimer) window.clearTimeout(retryTimer);
    };

    const runAutoScroll = () => {
      if (cancelled) return;
      container.scrollTop = 0;
      const maxScrollTop = container.scrollHeight - container.clientHeight;

      if (maxScrollTop <= 8) {
        retryTimer = window.setTimeout(runAutoScroll, 350);
        return;
      }

      lastTimestamp = window.performance.now();

      const step = (timestamp: number) => {
        if (cancelled) return;
        const elapsed = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        container.scrollTop = Math.min(container.scrollTop + elapsed * 0.04, maxScrollTop);

        if (container.scrollTop < maxScrollTop - 1) {
          animationFrame = window.requestAnimationFrame(step);
        }
      };

      animationFrame = window.requestAnimationFrame(step);
    };

    const stopOnUserInteraction = () => stopAutoScroll();

    container.addEventListener("wheel", stopOnUserInteraction, { passive: true });
    container.addEventListener("touchstart", stopOnUserInteraction, { passive: true });
    container.addEventListener("pointerdown", stopOnUserInteraction);

    startTimer = window.setTimeout(runAutoScroll, 700);

    return () => {
      cancelled = true;
      if (startTimer) window.clearTimeout(startTimer);
      if (retryTimer) window.clearTimeout(retryTimer);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      container.removeEventListener("wheel", stopOnUserInteraction);
      container.removeEventListener("touchstart", stopOnUserInteraction);
      container.removeEventListener("pointerdown", stopOnUserInteraction);
    };
  }, [template.id]);

  const templateTargetKey = template.templateKey || (template.id === "XD002" ? "xay_dung_2" : "cong_ty_xay_dung");
  const demoUrl = `/demo/${encodeURIComponent(placeId)}?template=${templateTargetKey}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[92vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#dbe5f2] bg-slate-50">
          <div>
            <h4 className="text-base font-black text-[#073b8e] uppercase">{template.name}</h4>
            <p className="text-xs text-slate-500">
              Ảnh cuộn toàn trang • Cuộn chuột để xem chi tiết
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={demoUrl}
              className="bg-[#e20b12] hover:bg-[#c80910] text-white text-xs font-black uppercase tracking-wider py-2 px-4 rounded-full shadow transition-colors flex items-center gap-1.5"
            >
              <span>Trải nghiệm demo trực tiếp</span>
              <ExternalLink size={13} />
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Đóng cửa sổ"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Image Container */}
        <div
          ref={imageScrollRef}
          className="flex-grow overflow-y-auto bg-[#eef4fb] p-4 sm:p-6 flex justify-center"
        >
          <img
            src={image}
            alt={template.name}
            className="w-full max-w-3xl object-contain shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default IndustryTemplateHub;
