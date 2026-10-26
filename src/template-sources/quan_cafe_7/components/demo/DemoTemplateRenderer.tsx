"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  Gift,
  Coffee,
  Sparkles,
  CheckCircle2,
  Phone
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  quanCafe7DefaultData,
  type QuanCafe7Data,
  type QuanCafe7VisualPanel
} from "@/template-sources/quan_cafe_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: QuanCafe7Data = adaptClonedTemplateData(
    quanCafe7DefaultData,
    incomingData
  );

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [selectedSet, setSelectedSet] =
    useState<QuanCafe7VisualPanel | null>(null);
  const [orderSent, setOrderSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0909 888 202";
  const subsections =
    data.subsections || quanCafe7DefaultData.subsections || [];
  const rightVisualPanels =
    data.rightVisualPanels || quanCafe7DefaultData.rightVisualPanels || [];

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSent(true);
    setTimeout(() => {
      setOrderSent(false);
      setSelectedSet(null);
      setCatalogModalOpen(false);
    }, 2200);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#9e0b12] selection:text-white"
    >
      {/* 50/50 SPLIT-SCREEN EDITORIAL & FESTIVE VISUAL SHOWCASE (Matches CF007) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* LEFT COLUMN (5 Columns on Desktop): Editorial Story & Gift Guide */}
        <div className="lg:col-span-5 bg-white relative flex flex-col justify-between">
          {/* Top-Left Grey Brand Badge (`☰ THE MONA`) */}
          <div className="sticky top-0 z-30 flex items-center justify-between bg-white/95 backdrop-blur-sm border-b border-slate-100 lg:border-none">
            <button
              type="button"
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="bg-[#949494] hover:bg-[#7a7a7a] text-white px-5 py-3.5 flex items-center gap-3 transition-colors"
            >
              {drawerOpen ? (
                <X className="w-4 h-4 text-[#f5c542]" />
              ) : (
                <Menu className="w-4 h-4 text-[#f5c542]" />
              )}
              <span className="font-serif text-xs sm:text-sm tracking-[0.2em] uppercase">
                {data.business.name === "TetHoliday"
                  ? "THE MONA"
                  : data.business.name}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCatalogModalOpen(true)}
              className="mr-4 text-[11px] font-bold text-[#9e0b12] hover:underline flex items-center gap-1"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Bộ sưu tập Trà & Quà Tết</span>
            </button>
          </div>

          {/* Slide-Out Navigation Drawer */}
          {drawerOpen && (
            <div className="bg-[#faf6f0] border-b border-amber-200/70 px-8 py-6 space-y-3 text-xs">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#9e0b12]">
                Danh mục thưởng trà & Quà lễ hội
              </div>
              <a
                href="#section-1"
                onClick={() => setDrawerOpen(false)}
                className="block py-1 font-semibold text-slate-800 hover:text-[#9e0b12]"
              >
                1. Nét đẹp tặng Trà & Quà Tết cổ truyền
              </a>
              <a
                href="#section-2"
                onClick={() => setDrawerOpen(false)}
                className="block py-1 font-semibold text-slate-800 hover:text-[#9e0b12]"
              >
                2. Ý nghĩa từng hộp quà Tết trao gửi yêu thương
              </a>
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  setCatalogModalOpen(true);
                }}
                className="block py-1 font-bold text-[#b48327] hover:underline"
              >
                3. Xem bảng giá Set Trà, Cà Phê & Hộp Quà Tết 2026
              </button>
              <div className="pt-2 border-t border-amber-200/60 text-[11px] text-slate-500">
                Hotline đặt quà doanh nghiệp: <strong>{primaryPhone}</strong>
              </div>
            </div>
          )}

          {/* Main Editorial Article Container */}
          <div className="px-6 sm:px-10 lg:px-12 py-10 sm:py-12 max-w-xl mx-auto">
            {/* Framed Gold-Square Title: [ Ấ ] M TRÀ TẾT */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 border border-[#e0b84c] flex items-center justify-center mr-1">
                <span className="text-2xl sm:text-3xl font-light text-[#e0b84c]">
                  {data.editorialHeader.highlightLetter}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-light uppercase tracking-widest text-slate-800">
                {data.editorialHeader.restOfTitle}
              </h1>
            </div>

            {/* Intro Paragraph */}
            <p className="text-xs text-slate-500 leading-relaxed mb-8">
              Tết là thời khắc mang đến sự ấm áp, thiêng liêng. Việc trao nhau những hộp quà Tết ý nghĩa sẽ là dấu hiệu để báo tin mở màn một năm mới sung túc, hạnh phúc. Ngoài ra việc{" "}
              <strong className="text-slate-700">tặng quà Tết</strong> cũng là một cách thể hiện tấm lòng của người tặng với người nhận. Và ý nghĩa của việc{" "}
              <strong className="text-slate-700">tặng quà Tết</strong> là gì? Hãy cùng{" "}
              <strong className="text-slate-800">{data.business.name}</strong>{" "}
              tìm hiểu trong bài viết sau nhé!
            </p>

            {/* Section 1 */}
            <div id="section-1" className="mb-10">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-800 leading-snug mb-4">
                {data.section1.title}
              </h2>

              <div className="aspect-[16/10] overflow-hidden mb-4 bg-slate-100">
                <img
                  src={data.section1.image}
                  alt={data.section1.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3.5 text-xs text-slate-500 leading-relaxed">
                {data.section1.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Section 2 + Subsections 2.1 -> 2.6 */}
            <div id="section-2" className="space-y-8">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-800 leading-snug">
                {data.section2Title}
              </h2>

              {subsections.map((sub) => (
                <div key={sub.id} className="space-y-3.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-snug">
                    {sub.heading}
                  </h3>

                  {sub.image && (
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={sub.image}
                        alt={sub.heading}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-3 text-xs text-slate-500 leading-relaxed">
                    {sub.paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Closing Paragraph with Gold Link */}
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                Nếu như bạn vẫn chưa biết tặng quà gì cho người thân, đối tác và nhân viên của mình vào dịp Tết này, bạn có thể tham khảo thêm về{" "}
                <button
                  type="button"
                  onClick={() => setCatalogModalOpen(true)}
                  className="font-bold text-[#d4a038] hover:underline"
                >
                  {data.closingHighlightLinkText}
                </button>{" "}
                của nhà <strong className="text-slate-800">{data.business.name}</strong> nhé!
              </p>
            </div>

            {/* Bottom Post Navigation Bar (`←  ⊞  →`) */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-center gap-8 text-slate-600">
              <a
                href="#section-1"
                aria-label="Bài trước"
                className="hover:text-[#9e0b12] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setCatalogModalOpen(true)}
                aria-label="Mở danh mục quà Tết"
                className="hover:text-[#9e0b12] transition-colors"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setCatalogModalOpen(true)}
                aria-label="Bài tiếp theo"
                className="hover:text-[#9e0b12] transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (7 Columns on Desktop): Full-Bleed Stack of 4 Crimson & Gold Festive Still-Life Panels */}
        <div className="lg:col-span-7 bg-[#7c0a0e] flex flex-col">
          {rightVisualPanels.map((panel, idx) => (
            <div
              key={panel.id}
              onClick={() => setSelectedSet(panel)}
              className="relative flex-1 min-h-[380px] sm:min-h-[480px] overflow-hidden group cursor-pointer border-b border-[#9e0b12]/40 last:border-none"
            >
              {/* Crimson & Gold Festive Still-Life Backdrop */}
              <img
                src={panel.image}
                alt={panel.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Rich Crimson-Gold Festive Duotone Glaze */}
              <div
                className={`absolute inset-0 transition-opacity ${
                  idx % 2 === 0
                    ? "bg-gradient-to-br from-[#8f080d]/55 via-[#680509]/35 to-[#3d0205]/65"
                    : "bg-gradient-to-tr from-[#590609]/65 via-[#8f080d]/30 to-amber-900/40"
                }`}
              />

              {/* Top-Right Social Bar on First Panel */}
              {idx === 0 && (
                <div className="absolute top-5 right-5 z-20 flex flex-col items-end gap-2 text-white">
                  <span className="w-8 h-0.5 bg-[#f5c542] mb-1" />
                  <span className="text-[11px] font-bold hover:text-[#f5c542]">
                    f
                  </span>
                  <span className="text-[11px] font-bold hover:text-[#f5c542]">
                    in
                  </span>
                  <span className="text-[11px] font-bold hover:text-[#f5c542]">
                    G+
                  </span>
                </div>
              )}

              {/* Decorative Festive Gold Badge & Set Details Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-between text-white">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#f5c542] mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>BỘ SƯU TẬP ẤM TRÀ TẾT 0{idx + 1}</span>
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {panel.title}
                  </h3>
                  <p className="text-xs text-amber-100/85 mt-0.5">
                    {panel.subtitle}
                  </p>
                </div>

                <div className="text-right shrink-0 ml-4">
                  <div className="text-sm sm:text-base font-extrabold text-[#f5c542]">
                    {panel.price}
                  </div>
                  <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider bg-[#f5c542] text-slate-950 px-3 py-1 rounded-full">
                    Đặt hộp quà
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FESTIVE TEA & GIFT BOX CATALOG MODAL */}
      {(catalogModalOpen || selectedSet) && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => {
                setCatalogModalOpen(false);
                setSelectedSet(null);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSent ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-[#9e0b12] mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">
                  Đặt Set Trà & Quà Tết thành công!
                </h3>
                <p className="text-xs text-slate-500">
                  Nghệ nhân trà của {data.business.name} sẽ liên hệ xác nhận thiệp chúc Tết và địa chỉ giao quà cho quý khách.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-[#9e0b12] text-[10px] font-bold uppercase tracking-widest mb-1">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>{data.business.name} • Ấm Trà Tết</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                  {selectedSet
                    ? selectedSet.title
                    : "Bộ Sưu Tập Hộp Quà Trà Thượng Hạng & Cà Phê Tết"}
                </h3>

                {/* 4 Gift Sets Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {rightVisualPanels.map((item) => {
                    const isPicked = selectedSet?.id === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedSet(item)}
                        className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                          isPicked
                            ? "border-[#9e0b12] bg-red-50/40"
                            : "border-slate-200 hover:border-amber-400"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-14 h-14 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {item.subtitle}
                          </div>
                          <div className="text-xs font-extrabold text-[#9e0b12] mt-0.5">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <form onSubmit={handleOrderSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên người đặt"
                      className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#9e0b12]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại liên hệ"
                      className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#9e0b12]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Số lượng hộp quà & Yêu cầu in logo / viết thiệp chúc Tết"
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#9e0b12]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#9e0b12] hover:bg-[#7c080d] text-[#f5c542] text-xs font-bold uppercase tracking-wider py-3 rounded-lg transition-colors shadow"
                  >
                    ĐẶT MUA & NHẬN BÁO GIÁ CHIẾT KHẤU
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
