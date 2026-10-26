"use client";

import React, { useState } from "react";
import {
  Search,
  Mail,
  Users,
  Gift,
  ChevronDown,
  MapPin,
  Building2,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile13DefaultData,
  type CorporateProfile13Data,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: CorporateProfile13Data = adaptClonedTemplateData(
    corporateProfile13DefaultData,
    incomingData
  );

  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@asiawhitecollar.vn";

  const renderServiceIcon = (iconName?: string) => {
    switch (iconName) {
      case "mail":
        return <Mail className="w-11 h-11 text-[#7A1C1C] stroke-[1.5]" />;
      case "users":
        return <Users className="w-11 h-11 text-[#7A1C1C] stroke-[1.5]" />;
      default:
        return <Gift className="w-11 h-11 text-[#7A1C1C] stroke-[1.5]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#262626] font-sans selection:bg-[#7A1C1C] selection:text-white">
      {/* HERO SECTION + OVERLAY HEADER (Matches DN016-corporate_profile_13.png) */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex flex-col justify-between overflow-hidden bg-[#1e242b]">
        {/* Architectural Skyscraper Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1A2129]/65" />
        </div>

        {/* Transparent Top Navbar */}
        <header className="relative z-20 max-w-6xl mx-auto w-full px-4 sm:px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-white text-[#1A2129] flex items-center justify-center font-extrabold text-sm shadow-md">
                AW
              </div>
            )}
            <div className="text-white">
              <span className="block text-sm sm:text-base font-bold tracking-wide leading-none">
                {data.business.name}
              </span>
              <span className="block text-[10px] italic text-white/80 mt-0.5">
                Executive Search & Advisory
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[11px] font-serif font-semibold uppercase tracking-widest text-white">
            <a href="#" className="hover:text-[#f2b6b6] transition-colors">
              TRANG CHỦ
            </a>
            <a
              href="#vi-sao-chon"
              className="hover:text-[#f2b6b6] transition-colors"
            >
              VỀ CHÚNG TÔI
            </a>
            <a
              href="#dich-vu"
              className="flex items-center gap-1 hover:text-[#f2b6b6] transition-colors"
            >
              <span>DỊCH VỤ</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#f2b6b6] transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#f2b6b6] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          <a
            href="#co-hoi-nghe-nghiep"
            aria-label="Tìm kiếm"
            className="text-white hover:text-[#f2b6b6] transition-colors"
          >
            <Search className="w-4 h-4" />
          </a>
        </header>

        {/* Center Hero Lockup */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 my-auto py-16 text-center text-white">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-full bg-white text-[#1A2129] flex items-center justify-center shadow-xl">
              <Building2 className="w-8 h-8 text-[#7A1C1C]" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {data.business.name}
              </h1>
              <p className="text-sm sm:text-base font-serif italic text-white/90 mt-0.5">
                Giải Pháp Tuyển Dụng & Tư Vấn Nhân Sự Cấp Cao
              </p>
            </div>
          </div>

          <p className="mt-3 text-base sm:text-lg font-serif font-semibold text-white/95 tracking-wide">
            {data.hero.subtitle}
          </p>
        </div>

        <div className="h-8" />
      </section>

      {/* SECTION 2: DỊCH VỤ CỦA CHÚNG TÔI (OUR SERVICES) */}
      <section id="dich-vu" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#7A1C1C]">
            DỊCH VỤ CỦA CHÚNG TÔI
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {(data.services || []).map((srv) => (
              <div
                key={srv.id}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {renderServiceIcon(srv.icon)}
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#222222] group-hover:text-[#7A1C1C] transition-colors">
                  {srv.title}
                </h3>
                <p className="mt-2.5 text-xs text-[#666666] leading-relaxed max-w-xs">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VÌ SAO CHỌN CHÚNG TÔI? (WHY CHOOSE US? Asymmetric Split) */}
      <section id="vi-sao-chon" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Text Column */}
          <div className="lg:col-span-5 px-6 sm:px-12 lg:pl-16 lg:pr-12 py-12 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#7A1C1C]">
              {data.business.aboutTitle || data.whyChooseUs.title}
            </h2>
            <div className="w-24 h-px bg-[#7A1C1C] my-4" />
            <p className="text-xs sm:text-sm font-serif text-[#444444] leading-relaxed">
              {data.business.aboutText?.[0] || data.whyChooseUs.description}
            </p>
            {data.business.aboutText?.[1] && (
              <p className="mt-3 text-xs sm:text-sm font-serif text-[#444444] leading-relaxed">
                {data.business.aboutText[1]}
              </p>
            )}
            <div className="mt-7">
              <a
                href="#lien-he"
                className="inline-block px-6 py-2.5 border border-[#7A1C1C] text-[#7A1C1C] hover:bg-[#7A1C1C] hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
              >
                {data.whyChooseUs.buttonText}
              </a>
            </div>
          </div>

          {/* Right Skyscraper Image with 3 Large Metrics */}
          <div className="lg:col-span-7 relative min-h-[440px] flex items-center p-8 sm:p-14 lg:p-16 overflow-hidden bg-[#2b3847]">
            <img
              src={data.whyChooseUs.backgroundImage}
              alt={data.whyChooseUs.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2C3A4A]/75" />

            <div className="relative z-10 max-w-xl space-y-8 text-white">
              {data.whyChooseUs.metrics.map((m) => (
                <div
                  key={m.id}
                  className="grid grid-cols-12 gap-4 items-center"
                >
                  <div className="col-span-4 sm:col-span-3 text-center">
                    <span className="block text-4xl sm:text-5xl font-extrabold leading-none">
                      {m.number}
                    </span>
                    <span className="block text-xs font-bold tracking-wider mt-1">
                      {m.unit}
                    </span>
                  </div>
                  <div className="col-span-8 sm:col-span-9">
                    <h3 className="text-base sm:text-lg font-extrabold">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-xs font-serif text-white/90 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ĐỐI TÁC & KHÁCH HÀNG (OUR CLIENTS) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#7A1C1C]">
            KHÁCH HÀNG TIÊU BIỂU
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {(data.clients || []).map((cl, idx) => (
              <div
                key={cl.id}
                className={`py-3 px-4 flex items-center justify-center text-xs font-extrabold uppercase tracking-wider transition-all ${
                  idx === 3
                    ? "bg-[#1A1A1A] text-[#D4AF37] py-4 shadow-sm"
                    : "text-[#333333] hover:text-[#7A1C1C]"
                }`}
              >
                {cl.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CƠ HỘI NGHỀ NGHIỆP (CAREER OPPORTUNITIES) */}
      <section id="co-hoi-nghe-nghiep" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#7A1C1C] mb-10">
            CƠ HỘI NGHỀ NGHIỆP CẤP CAO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.careerOpportunities.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group shadow-sm"
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-full bg-white/65 backdrop-blur-[2px] py-4 px-4 text-center">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-white drop-shadow-sm">
                      {job.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#lien-he"
              className="inline-block px-6 py-2 border border-[#7A1C1C] text-[#7A1C1C] hover:bg-[#7A1C1C] hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
            >
              ỨNG TUYỂN NGAY!
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: DỰ ÁN ĐIỂN HÌNH (CASE STUDY Dark Skyline Banner) */}
      <section className="relative py-20 bg-[#181818] text-white text-center overflow-hidden">
        <img
          src={data.caseStudy.backgroundImage}
          alt={data.caseStudy.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181818]/90 via-[#181818]/65 to-[#181818]/90" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider">
            {data.caseStudy.title}
          </h2>
          <p className="mt-5 text-xs sm:text-sm font-serif text-white/90 leading-relaxed">
            {data.caseStudy.description}
          </p>
          <div className="mt-7">
            <a
              href="#lien-he"
              className="inline-block px-7 py-2.5 border border-white/70 hover:bg-white hover:text-[#181818] text-[10px] font-bold uppercase tracking-widest transition-colors"
            >
              {data.caseStudy.buttonText}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: TIN TỨC (NEWS 3-Column Grid) */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#7A1C1C] mb-10">
            TIN TỨC & PHÂN TÍCH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-full aspect-[4/3] overflow-hidden mb-4 bg-[#f2f2f2]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-wide text-[#222222] group-hover:text-[#7A1C1C] transition-colors leading-snug px-2">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-xs font-serif text-[#666666] leading-relaxed line-clamp-2 px-2">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: LIÊN HỆ VỚI CHÚNG TÔI (CONTACT US over Dark Skyscraper Background) */}
      <section
        id="lien-he"
        className="relative py-20 bg-[#1C2632] text-white overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt="Liên hệ"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#1B2531]/80" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider mb-8">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h2>

          {contactSubmitted ? (
            <div className="p-6 bg-white/10 border border-white/30 backdrop-blur-xs inline-flex items-center gap-3 text-xs text-white">
              <CheckCircle2 className="w-5 h-5 text-[#a8d886]" />
              <span>
                Cảm ơn Quý đối tác! Ban cố vấn của{" "}
                <strong>{data.business.name}</strong> sẽ phản hồi trong 24 giờ.
              </span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactSubmitted(true);
              }}
              className="space-y-3 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên *"
                  className="px-4 py-2.5 bg-white text-[#222222] text-xs focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email doanh nghiệp *"
                  className="px-4 py-2.5 bg-white text-[#222222] text-xs focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  className="px-4 py-2.5 bg-white text-[#222222] text-xs focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Địa chỉ / Tên công ty"
                  className="px-4 py-2.5 bg-white text-[#222222] text-xs focus:outline-none"
                />
              </div>
              <textarea
                rows={4}
                required
                placeholder="Nội dung yêu cầu tư vấn tuyển dụng hoặc hợp tác..."
                className="w-full px-4 py-3 bg-white text-[#222222] text-xs focus:outline-none"
              />
              <div className="text-center pt-3">
                <button
                  type="submit"
                  className="px-10 py-2.5 border border-white/70 hover:bg-white hover:text-[#1B2531] text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  GỬI YÊU CẦU
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER (Dark Charcoal #222222 with Global Offices + Map Card) */}
      <footer className="bg-[#232323] text-white/75 pt-14 pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
            {/* Col 1: Brand */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-white text-[#232323] flex items-center justify-center font-extrabold text-xs">
                  AW
                </div>
                <div>
                  <span className="block text-sm font-bold text-white leading-none">
                    {data.business.name}
                  </span>
                  <span className="block text-[9px] italic text-white/70 mt-0.5">
                    Executive Search Group
                  </span>
                </div>
              </div>
              <p className="text-[11px] font-serif text-white/65 leading-relaxed">
                Tại {data.business.name}, chúng tôi tin rằng sự phát triển bền
                vững của đội ngũ chuyên gia tư vấn và ứng viên chính là chìa
                khóa tạo nên vị thế dẫn đầu trong ngành nhân sự cấp cao.
              </p>
            </div>

            {/* Col 2: Trụ sở chính & Canada */}
            <div className="lg:col-span-3 space-y-5 text-[11px] font-serif">
              <div>
                <h4 className="font-sans font-bold text-white text-xs mb-1.5">
                  Trụ Sở Chính {data.business.name}
                </h4>
                <p className="italic text-white/60">Địa chỉ:</p>
                <p className="text-white/80">{data.business.address}</p>
                <p className="mt-1">
                  <span className="italic text-white/60">Điện thoại:</span>{" "}
                  (+84) {primaryPhone}
                </p>
                <p>
                  <span className="italic text-white/60">Email:</span>{" "}
                  {primaryEmail}
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-xs mb-1">
                  Văn Phòng Bắc Mỹ (Canada)
                </h4>
                <p>
                  <span className="italic text-white/60">Điện thoại:</span> (+1){" "}
                  {primaryPhone}
                </p>
                <p>
                  <span className="italic text-white/60">Email:</span>{" "}
                  {primaryEmail}
                </p>
              </div>
            </div>

            {/* Col 3: HCM, Korea, HK */}
            <div className="lg:col-span-3 space-y-4 text-[11px] font-serif">
              <div>
                <h4 className="font-sans font-bold text-white text-xs mb-1">
                  Văn Phòng TP.HCM
                </h4>
                <p>
                  <span className="italic text-white/60">Điện thoại:</span>{" "}
                  (+84) {primaryPhone}
                </p>
                <p>
                  <span className="italic text-white/60">Email:</span>{" "}
                  {primaryEmail}
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-xs mb-1">
                  Văn Phòng Hàn Quốc
                </h4>
                <p>
                  <span className="italic text-white/60">Email:</span>{" "}
                  {primaryEmail}
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-xs mb-1">
                  Văn Phòng Hồng Kông / Trung Quốc
                </h4>
                <p>
                  <span className="italic text-white/60">Email:</span>{" "}
                  {primaryEmail}
                </p>
              </div>
            </div>

            {/* Col 4: Interactive Map Visual Card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xs p-2 text-[#222222] shadow-md">
                <div className="bg-[#f4f6f8] p-2.5 border border-[#e2e6ea] mb-2">
                  <span className="block text-[11px] font-bold text-[#1a73e8]">
                    {data.business.name} Việt Nam
                  </span>
                  <span className="block text-[10px] text-[#555555] line-clamp-1 mt-0.5">
                    {data.business.address}
                  </span>
                </div>
                <div className="relative h-32 bg-[#e8eef5] flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=500&q=80"
                    alt="Bản đồ văn phòng"
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#D93025] text-white flex items-center justify-center shadow-lg">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-white/10 text-center text-[11px] text-white/60">
            © Thiết kế và phát triển bởi <strong>{data.business.name}</strong> •
            TaviWeb
          </div>
        </div>
      </footer>

      {/* JOB QUICK VIEW MODAL */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedJob.image}
              alt={selectedJob.title}
              className="w-full h-44 object-cover mb-4"
            />
            <h3 className="text-sm font-extrabold uppercase text-[#7A1C1C]">
              {selectedJob.title}
            </h3>
            <p className="mt-2 text-xs text-[#555555]">
              Địa điểm: <strong>{selectedJob.location}</strong>
            </p>
            <p className="mt-1 text-xs text-[#555555]">
              Mức đãi ngộ: <strong>{selectedJob.salary}</strong>
            </p>
            <a
              href="#lien-he"
              onClick={() => setSelectedJob(null)}
              className="mt-5 block w-full text-center py-2.5 bg-[#7A1C1C] hover:bg-[#5e1414] text-white text-xs font-bold uppercase tracking-widest transition-colors"
            >
              NỘP HỒ SƠ ỨNG TUYỂN
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
