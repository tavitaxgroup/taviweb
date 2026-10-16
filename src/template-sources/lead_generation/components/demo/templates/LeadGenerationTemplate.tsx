"use client";

import React, { useState } from "react";
import { Header } from "../../Header";
import { ZaloModal } from "../../ZaloModal";
import { ServiceDetailModal } from "../../ServiceDetailModal";
import { PortfolioModal } from "../../PortfolioModal";
import { CostCalculator } from "../../CostCalculator";
import { ConsultationForm } from "../../ConsultationForm";
import { PortfolioGallery } from "../../PortfolioGallery";
import { ProcessTimeline } from "../../ProcessTimeline";
import { IMAGES, SERVICES, ServiceItem, PortfolioProject } from "../../../data/content";

interface LeadGenerationTemplateProps {
  data: any;
}

export default function LeadGenerationTemplate({ data }: LeadGenerationTemplateProps) {
  const [currentTab, setCurrentTab] = useState<string>("trang-chu");
  const [zaloModalOpen, setZaloModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Form presets
  const [servicePreset, setServicePreset] = useState<string>("");
  const [notesPreset, setNotesPreset] = useState<string>("");

  const business = data?.business || {};
  const brandName = business?.shortName || business?.name || "ORIGIN STUDIO";
  const phone = business?.phone || "090 123 4567";
  const cleanPhone = phone.replace(/[^\d+]/g, "");
  const email = business?.email || "advisory@originstudio.vn";
  const address = business?.address || "Atelier Hoàn Kiếm, Hà Nội · Gallery Quận 1, TP. Hồ Chí Minh";

  const scrollToConsultation = (serviceTitle?: string, notes?: string) => {
    if (serviceTitle) setServicePreset(serviceTitle);
    if (notes) setNotesPreset(notes);

    const formElement = document.getElementById("tu-van");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      const firstInput = formElement.querySelector("input") as HTMLInputElement | null;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 400);
      }
    }
  };

  return (
    <div className="bg-[#fcf9f8] min-h-screen text-[#1c1b1b] selection:bg-[#0038ff] selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Fixed Editorial Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenConsultation={() => scrollToConsultation()}
        onOpenZalo={() => setZaloModalOpen(true)}
        business={business}
      />

      <main className="w-full pt-24 md:pt-32">
        <div className="flex flex-col w-full">
          {/* SECTION 1: HERO SECTION */}
          <section className="w-full px-5 lg:px-16 py-8 lg:py-16 relative" id="trang-chu">
            {/* Meta Editorial Indicator */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#e5e2e1] mb-10">
              <span className="font-mono-code text-[11px] uppercase text-[#444657] tracking-widest font-semibold">
                MÙA 2025 / CHIẾN DỊCH KHÁC BIỆT
              </span>
              <span className="font-mono-code text-xs text-[#44423c] font-medium">
                {brandName.toUpperCase()} — VOL. 04
              </span>
            </div>

            {/* Asymmetrical Editorial Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Typography & Action Column (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 z-10">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[#ac2e00]/10 border border-[#ac2e00]/20 text-[10px] uppercase font-mono-code font-bold tracking-[0.2em] text-[#ac2e00] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ac2e00] animate-pulse"></span>
                  <span>Tuyên ngôn định vị</span>
                </div>

                <h1 className="font-syne text-3xl sm:text-5xl lg:text-[58px] text-[#1c1b1b] tracking-tight uppercase leading-[1.08] mb-5 font-bold">
                  Tư Vấn &amp; Hiện Thực Hoá Không Gian Doanh Nghiệp &amp; Độc Bản
                  <span className="text-[#ac2e00]">.</span>
                </h1>

                <p className="font-body text-base lg:text-lg text-[#44423c] mb-8 max-w-md leading-relaxed">
                  Giải pháp trọn gói từ định hình chiến lược đến hoàn thiện vận hành trong 30 ngày.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {/* Button-in-Button Primary Action */}
                  <button
                    onClick={() => scrollToConsultation()}
                    className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-[#0038ff] hover:bg-[#ac2e00] text-white font-mono-code text-xs uppercase font-bold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-md cursor-pointer"
                  >
                    <span>Nhận tư vấn ngay</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                  </button>

                  <button
                    onClick={() => setZaloModalOpen(true)}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 bg-white text-[#1c1b1b] hover:border-black font-mono-code text-xs uppercase transition-all duration-300 shadow-xs cursor-pointer hover:bg-black/5"
                  >
                    <span className="material-symbols-outlined text-sm text-[#ac2e00]">chat</span>
                    <span>Chat Zalo</span>
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5">
                      arrow_forward
                    </span>
                  </button>
                </div>

                <div className="mt-12 pt-4 border-t border-[#e5e2e1] flex items-center justify-between text-[#444657] font-mono-code text-xs">
                  <span>TRỤ SỞ: {address.split("·")[0]?.trim() || "HÀ NỘI / TP. HỒ CHÍ MINH"}</span>
                  <span>HOTLINE: {phone}</span>
                </div>
              </div>

              {/* Asymmetrical Hero Visual with Doppelrand (Double-Bezel Architecture) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="p-2 md:p-3 rounded-[2.5rem] bg-black/[0.03] ring-1 ring-black/[0.08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]">
                  <div className="relative w-full aspect-[4/5] lg:aspect-[16/13] overflow-hidden bg-[#f0edec] rounded-[calc(2.5rem-0.625rem)] border border-black/5">
                    <img
                      className="w-full h-full object-cover object-center scale-100 hover:scale-103 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      alt={`Workshop Consultation by ${brandName}`}
                      src={IMAGES.heroStrategist}
                    />
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full font-mono-code text-[11px] text-[#1c1b1b] border border-black/10 shadow-sm">
                      FIG. 01 / WORKSHOP CONSULTATION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: THE SERVICE EXPERIENCE (TRIẾT LÝ VẬN HÀNH) */}
          <section className="w-full px-5 lg:px-16 py-12 lg:py-20 bg-[#f6f3f2]" id="quy-trinh">
            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-[11px] uppercase text-[#ac2e00] tracking-widest block mb-1 font-bold">
                [ 01 — TRIẾT LÝ VẬN HÀNH ]
              </span>
              <h2 className="font-syne text-3xl lg:text-4xl text-[#1c1b1b] tracking-tight uppercase mb-2 font-bold">
                Đơn giản hơn từ bước đầu tiên.
              </h2>
              <p className="font-body text-base lg:text-lg text-[#444657] max-w-2xl leading-relaxed">
                Mọi tương tác được tinh giản để mang lại giá trị trọn vẹn và an tâm tuyệt đối.
              </p>
            </div>

            {/* Monolithic Oversized Editorial Photograph */}
            <div className="w-full relative overflow-hidden bg-[#f0edec] border border-[#1c1b1b] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="aspect-[16/9] lg:aspect-[21/9] w-full">
                <img
                  className="w-full h-full object-cover object-center"
                  alt={`Không gian đàm thoại ${brandName}`}
                  src={IMAGES.atelierRoom}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8 bg-gradient-to-t from-[#1c1b1b]/90 via-[#1c1b1b]/40 to-transparent flex flex-col sm:flex-row items-start sm:items-end justify-between text-white">
                <div>
                  <span className="font-mono-code text-xs uppercase text-[#dee0ff] block font-semibold mb-1">
                    Không gian đàm thoại
                  </span>
                  <p className="font-syne text-xl lg:text-2xl uppercase tracking-tight font-bold">
                    {brandName} Gallery Room
                  </p>
                </div>
                <span className="font-mono-code text-xs text-[#e5e2e1] mt-2 sm:mt-0">
                  21°01'49.3"N 105°51'08.2"E
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 3: WHAT WE DO (EXACTLY THREE BESPOKE OFFERINGS) */}
          <section className="w-full px-5 lg:px-16 py-12 lg:py-24 bg-white" id="dich-vu">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-3 border-b border-[#e5e2e1]">
              <div>
                <span className="font-mono-code text-[11px] uppercase text-[#ac2e00] tracking-widest block mb-1 font-bold">
                  [ 02 — PHẠM VI DỊCH VỤ ]
                </span>
                <h2 className="font-syne text-3xl lg:text-4xl text-[#1c1b1b] tracking-tight uppercase font-bold">
                  Giải pháp đặc quyền.
                </h2>
              </div>
              <span className="font-mono-code text-xs text-[#44423c] mt-2 md:mt-0 font-semibold">
                3 HẠNG MỤC CHIẾN LƯỢC TOÀN DIỆN
              </span>
            </div>

            {/* Grid of 3 Service Offerings */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
              {SERVICES.map((srv: ServiceItem, index: number) => (
                <div
                  key={srv.id}
                  className={`md:col-span-4 flex flex-col group ${
                    index < 2 ? "border-b md:border-b-0 md:border-r border-[#e5e2e1] pb-8 md:pb-0 md:pr-6" : ""
                  }`}
                >
                  <div
                    onClick={() => setSelectedService(srv)}
                    className="aspect-[3/4] w-full overflow-hidden bg-[#f0edec] mb-4 relative cursor-pointer border border-[#e5e2e1]"
                  >
                    <img
                      alt={srv.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      src={srv.image}
                    />
                    <div
                      className={`absolute top-3 left-3 px-2 py-1 font-mono-code text-xs font-bold ${
                        srv.number === "02"
                          ? "bg-[#0038ff] text-white"
                          : "bg-[#1c1b1b] text-white"
                      }`}
                    >
                      {srv.number}
                    </div>
                  </div>

                  <h3
                    onClick={() => setSelectedService(srv)}
                    className="font-syne text-lg font-bold uppercase text-[#1c1b1b] tracking-tight mb-2 group-hover:text-[#0038ff] transition-colors cursor-pointer"
                  >
                    {srv.title}
                  </h3>

                  <p className="font-body text-xs text-[#44423c] mb-4 leading-relaxed">
                    {srv.description}
                  </p>

                  <button
                    onClick={() => setSelectedService(srv)}
                    className="inline-flex items-center gap-1.5 font-mono-code text-xs uppercase text-[#1c1b1b] hover:text-[#0038ff] transition-colors mt-auto pt-2 cursor-pointer font-semibold"
                  >
                    <span>Xem chi tiết →</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: 5-STEP STANDARD ARCHITECTURAL PROCESS */}
          <ProcessTimeline />

          {/* SECTION: PORTFOLIO & CASE STUDIES */}
          <PortfolioGallery onSelectProject={setSelectedProject} />

          {/* SECTION: INTERACTIVE COST & SCOPE CALCULATOR */}
          <section className="w-full px-5 lg:px-16 py-12 lg:py-20 bg-[#fcf9f8]" id="du-toan">
            <CostCalculator
              onApplyToInquiry={(summary: string) => {
                scrollToConsultation("Tư vấn toàn diện từ A-Z (Chìa khoá trao tay)", summary);
              }}
            />
          </section>

          {/* SECTION: TRUST & CREDIBILITY (CAM KẾT VẬN HÀNH) */}
          <section className="w-full px-5 lg:px-16 py-12 lg:py-24 bg-[#f6f3f2]" id="uy-tin">
            <div className="max-w-4xl mb-8">
              <span className="font-mono-code text-[11px] uppercase text-[#ac2e00] tracking-widest block mb-1 font-bold">
                [ 03 — CAM KẾT VẬN HÀNH ]
              </span>
              <h2 className="font-syne text-3xl lg:text-4xl text-[#1c1b1b] tracking-tight uppercase mb-2 font-bold">
                MINH BẠCH & TRÁCH NHIỆM TRỌN ĐỜI.
              </h2>
              <p className="font-body text-base lg:text-lg text-[#444657] max-w-2xl leading-relaxed">
                Ba nguyên tắc cốt lõi đảm bảo từng công trình đạt chuẩn mực cao cấp nhất mà không có rủi ro cho khách hàng.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="p-6 lg:p-8 bg-white border-t-4 border-[#0038ff] shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-x border-b border-[#e5e2e1]">
                <span className="font-mono-code text-xs text-[#ac2e00] font-bold block mb-1">
                  01 // CAM KẾT THỜI GIAN
                </span>
                <h3 className="font-syne text-xl uppercase text-[#1c1b1b] tracking-tight mb-2 font-bold">
                  Tiến độ chuẩn xác
                </h3>
                <p className="font-body text-xs text-[#444657] leading-relaxed">
                  Cam kết thời gian bàn giao rõ ràng từng giai đoạn với lộ trình minh bạch được theo dõi trực tuyến.
                </p>
              </div>

              <div className="p-6 lg:p-8 bg-white border-t-4 border-[#0038ff] shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-x border-b border-[#e5e2e1]">
                <span className="font-mono-code text-xs text-[#ac2e00] font-bold block mb-1">
                  02 // TÀI CHÍNH RÕ RÀNG
                </span>
                <h3 className="font-syne text-xl uppercase text-[#1c1b1b] tracking-tight mb-2 font-bold">
                  Chi phí minh bạch
                </h3>
                <p className="font-body text-xs text-[#444657] leading-relaxed">
                  100% bóc tách dự toán vật liệu chi tiết ngay từ đầu, tuyệt đối không phát sinh chi phí phụ hay ẩn giá.
                </p>
              </div>

              <div className="p-6 lg:p-8 bg-white border-t-4 border-[#0038ff] shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-x border-b border-[#e5e2e1]">
                <span className="font-mono-code text-xs text-[#ac2e00] font-bold block mb-1">
                  03 // DÀI HẠN & TẬN TÂM
                </span>
                <h3 className="font-syne text-xl uppercase text-[#1c1b1b] tracking-tight mb-2 font-bold">
                  Bảo hành & Đồng hành
                </h3>
                <p className="font-body text-xs text-[#444657] leading-relaxed">
                  Hỗ trợ kỹ thuật 24/7 và kiểm tra bảo dưỡng định kỳ sau bàn giao, đồng hành trọn vòng đời sử dụng.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: MINIMAL INQUIRY FORM */}
          <ConsultationForm
            selectedServicePreset={servicePreset}
            notesPreset={notesPreset}
          />

          {/* SECTION 4: CONTACT MOMENT (BOLD COBALT BLUE MONOLITH) */}
          <section className="w-full px-5 lg:px-16 pb-16 lg:pb-24">
            <div className="w-full bg-[#0038ff] text-white p-6 lg:p-14 relative overflow-hidden shadow-[4px_4px_0px_#1c1b1b]">
              <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-8 font-mono-code text-[11px] uppercase tracking-wider text-[#dee0ff]">
                <span>[ 04 — LIÊN HỆ ĐẶC QUYỀN ]</span>
                <span className="font-bold">TRỰC TIẾP 24/7 ADVISORY</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8 flex flex-col">
                  <h2 className="font-syne text-3xl sm:text-5xl lg:text-[56px] uppercase tracking-tight text-white leading-[1.05] mb-4 font-extrabold">
                    Sẵn Sàng Cho Không Gian
                    <br />
                    Độc Bản Của Bạn
                    <span className="text-[#ffdbd1]">?</span>
                  </h2>
                  <p className="font-body text-base text-[#dee0ff] max-w-xl">
                    Chúng tôi lắng nghe câu chuyện của bạn và phác thảo giải pháp trong vòng 24 giờ.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end w-full">
                  <button
                    onClick={() => scrollToConsultation()}
                    className="inline-flex items-center justify-center bg-white text-[#1c1b1b] font-mono-code text-xs uppercase px-8 py-3.5 hover:bg-[#ac2e00] hover:text-white transition-colors shadow-[2px_2px_0px_#1c1b1b] font-bold cursor-pointer"
                  >
                    Nhận tư vấn
                  </button>

                  <button
                    onClick={() => setZaloModalOpen(true)}
                    className="inline-flex items-center justify-center bg-[#d73b00] text-white font-mono-code text-xs uppercase px-8 py-3.5 hover:bg-[#1c1b1b] transition-colors shadow-[2px_2px_0px_#1c1b1b] font-bold cursor-pointer"
                  >
                    Chat qua Zalo
                  </button>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[#dee0ff]">
                <div>
                  <span className="font-mono-code text-[10px] uppercase block text-[#bbc3ff] mb-1">
                    Hotline trực tiếp
                  </span>
                  <a
                    href={`tel:${cleanPhone}`}
                    className="font-mono-code text-sm font-bold text-white hover:underline"
                  >
                    {phone}
                  </a>
                </div>

                <div>
                  <span className="font-mono-code text-[10px] uppercase block text-[#bbc3ff] mb-1">
                    Trụ sở chính
                  </span>
                  <span className="font-body text-xs text-white">
                    {address}
                  </span>
                </div>

                <div>
                  <span className="font-mono-code text-[10px] uppercase block text-[#bbc3ff] mb-1">
                    Email tiếp nhận
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="font-body text-xs text-white hover:underline"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#f6f3f2] border-t border-[#e5e2e1]">
        <div className="w-full px-5 lg:px-16 py-12 lg:py-16 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-2">
              <img src={IMAGES.logo} alt={`${brandName} Logo`} className="h-6 w-auto" />
              <div className="font-sans text-lg uppercase text-[#1c1b1b] font-extrabold tracking-normal">
                {brandName}
              </div>
            </div>
            <p className="font-body text-xs text-[#444657] leading-relaxed">
              Chiến dịch & Thiết kế Trải nghiệm Độc bản. Văn phòng tư vấn sáng tạo và chiến lược định vị cấp tiến.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
            <div className="flex flex-col gap-1.5 font-mono-code text-xs">
              <span className="uppercase text-[#444657] font-bold">Studio Coordinates</span>
              <span className="text-[#1c1b1b]">{address}</span>
            </div>

            <div className="flex flex-col gap-1.5 font-mono-code text-xs">
              <span className="uppercase text-[#444657] font-bold">Direct Inquiry</span>
              <a
                href={`mailto:${email}`}
                className="text-[#0038ff] hover:underline"
              >
                {email}
              </a>
              <span className="text-[#444657]">Hotline: {phone}</span>
            </div>
          </div>
        </div>

        <div className="w-full px-5 lg:px-16 py-4 bg-[#f0edec] border-t border-[#e5e2e1] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono-code text-[11px] uppercase text-[#444657]">
          <span>© {new Date().getFullYear()} {brandName.toUpperCase()} — Chiến dịch & Thiết kế Trải nghiệm Độc bản</span>
          <span>All Editorial Rights Reserved</span>
        </div>
      </footer>

      {/* MOBILE STICKY CALL-TO-ACTION BAR */}
      <div className="fixed bottom-0 left-0 w-full z-40 p-2.5 bg-white/95 backdrop-blur-md border-t border-[#e5e2e1] flex md:hidden gap-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <a
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0038ff] text-white font-mono-code text-[11px] uppercase py-2.5 px-2 shadow-[2px_2px_0px_#1c1b1b] font-bold"
          href={`tel:${cleanPhone}`}
        >
          <span className="material-symbols-outlined text-sm">call</span>
          <span>Gọi: {phone}</span>
        </a>
        <button
          onClick={() => setZaloModalOpen(true)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#d73b00] text-white font-mono-code text-[11px] uppercase py-2.5 px-2 shadow-[2px_2px_0px_#1c1b1b] font-bold"
        >
          <span className="material-symbols-outlined text-sm">chat</span>
          <span>Zalo: {phone}</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <ZaloModal
        isOpen={zaloModalOpen}
        onClose={() => setZaloModalOpen(false)}
        business={business}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceTitle: string) => scrollToConsultation(serviceTitle)}
      />

      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={(projectName: string) =>
          scrollToConsultation(
            "Thiết kế trải nghiệm thương hiệu & không gian",
            `Quan tâm đến phong cách dự án: ${projectName}`
          )
        }
      />
    </div>
  );
}
