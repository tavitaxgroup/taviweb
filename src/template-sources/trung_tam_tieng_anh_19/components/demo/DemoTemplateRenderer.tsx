"use client";

import React, { useState } from "react";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  Search,
  Send,
  Sparkles,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh19DefaultData,
  type SingaporeArticleCard,
  type TrungTamTiengAnh19Data
} from "../../data/mockData";

interface Props {
  data?: Record<string, unknown>;
}

const TESTIMONIAL_SLIDES = [
  {
    name: "Nguyễn Minh Anh",
    role: "Du học sinh Đại học Curtin Singapore",
    quote:
      "“Nhờ sự hướng dẫn tận tình của các anh chị tư vấn tại trung tâm, mình đã hoàn tất hồ sơ visa Student Pass chỉ trong 3 tuần và chinh phục học bổng 50% ngành Logistics tại Đại học Curtin Singapore.”",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Trần Quốc Bảo",
    role: "Cựu học viên Học viện Quản lý SIM Singapore",
    quote:
      "“Mona Media hỗ trợ miễn phí 100% phí dịch thuật, tặng vé máy bay sang Changi và kết nối hội sinh viên Việt Nam tại SIM giúp mình hòa nhập cực nhanh ngay tuần đầu nhập học.”",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Lê Hoàng Khánh Vy",
    role: "Học bổng Danh dự Học viện Kaplan Singapore",
    quote:
      "“Lộ trình tiếng Anh học thuật kết hợp luyện phỏng vấn học bổng 1-1 đã giúp mình tự tin đạt GPA 3.8 và chuyển tiếp bằng Cử nhân Đại học Murdoch Úc ngay tại Singapore.”",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  }
];

export function DemoTemplateRenderer({ data }: Props) {
  const merged = adaptClonedTemplateData(
    trungTamTiengAnh19DefaultData,
    data
  ) as TrungTamTiengAnh19Data;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [selectedArticle, setSelectedArticle] =
    useState<SingaporeArticleCard | null>(null);
  const [footerForm, setFooterForm] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [footerSubmitted, setFooterSubmitted] = useState(false);

  const primaryPhone = merged.business.phone[0] || "076 922 0162";
  const primaryEmail = merged.business.email[0] || "mon@mona.media";

  const filterCards = (cards: SingaporeArticleCard[]) => {
    if (!searchQuery.trim()) return cards;
    const q = searchQuery.toLowerCase();
    return cards.filter(
      (c) =>
        c.title.toLowerCase().includes(q) || c.excerpt.toLowerCase().includes(q)
    );
  };

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerForm.name.trim() || !footerForm.phone.trim()) return;
    setFooterSubmitted(true);
  };

  const renderSectionTitle = (title: string) => (
    <div className="mb-8 text-center">
      <h2 className="text-xl font-extrabold uppercase tracking-wide text-[#0d5aa7] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="h-[2px] w-14 bg-[#0d5aa7]/30" />
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f59e0b]/15 text-[#f37933]">
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <span className="h-[2px] w-14 bg-[#0d5aa7]/30" />
      </div>
    </div>
  );

  const renderFourCardSection = (
    id: string,
    title: string,
    cards: SingaporeArticleCard[],
    bgClass = "bg-white"
  ) => {
    const visible = filterCards(cards);
    return (
      <section id={id} className={`${bgClass} py-12`}>
        <div className="mx-auto max-w-6xl px-4">
          {renderSectionTitle(title)}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((card) => (
              <article
                key={card.id}
                onClick={() => setSelectedArticle(card)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-40 overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {card.badge && (
                    <span className="absolute bottom-2 left-2 rounded bg-[#0d5aa7]/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {card.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-800 group-hover:text-[#0d5aa7]">
                    {card.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600">
                    {card.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 text-center">
            <button
              type="button"
              onClick={() => setSelectedArticle(cards[0] || null)}
              className="inline-flex items-center gap-1 rounded bg-[#f37933] px-5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#dc6520]"
            >
              Xem thêm
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Sky-Blue Topbar */}
      <div className="bg-[#1fa2e1] py-2 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 text-xs">
          <div className="flex items-center gap-2 font-semibold">
            <Phone className="h-3.5 w-3.5" />
            <span>HOTLINE: {primaryPhone}</span>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm..."
                className="h-7 w-48 rounded-sm bg-white px-2.5 pr-7 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none sm:w-56"
              />
              <Search className=" absolute right-2 top-1.5 h-3.5 w-3.5 text-slate-500" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. White Centered Brand Header */}
      <div className="bg-white py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 text-center">
          <div className="flex flex-col items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d5aa7]/10 text-[#0d5aa7]">
              <GraduationCap className="h-7 w-7" />
            </div>
            <span className="mt-1 font-serif text-2xl font-bold italic tracking-tight text-[#0d5aa7]">
              Mona Media
            </span>
            <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f37933]">
              CÔNG TY CHUYÊN DU HỌC SINGAPORE
            </span>
          </div>
        </div>
      </div>

      {/* 3. Royal Blue Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0d5aa7] text-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:justify-center">
          <span className="text-xs font-bold uppercase tracking-wider lg:hidden">
            Menu Du Học Singapore
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded p-1 hover:bg-white/10 lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wide lg:flex">
            <a href="#top" className="text-[#ffcf40] transition hover:text-white">
              TRANG CHỦ
            </a>
            <a href="#intro" className="transition hover:text-[#ffcf40]">
              GIỚI THIỆU
            </a>
            <a href="#seminars" className="transition hover:text-[#ffcf40]">
              HỘI THẢO - SỰ KIỆN
            </a>
            <a href="#scholarships" className="transition hover:text-[#ffcf40]">
              HỌC BỔNG DU HỌC
            </a>
            <a href="#advisory" className="transition hover:text-[#ffcf40]">
              TƯ VẤN DU HỌC
            </a>
            <a href="#experience" className="transition hover:text-[#ffcf40]">
              KINH NGHIỆM DU HỌC
            </a>
            <a href="#summer-camp" className="transition hover:text-[#ffcf40]">
              DU HỌC HÈ
            </a>
            <a href="#contact-footer" className="transition hover:text-[#ffcf40]">
              LIÊN HỆ
            </a>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/15 bg-[#0a4887] px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2.5 text-xs font-bold uppercase">
              <a href="#intro" onClick={() => setMobileMenuOpen(false)}>
                GIỚI THIỆU
              </a>
              <a href="#seminars" onClick={() => setMobileMenuOpen(false)}>
                HỘI THẢO - SỰ KIỆN
              </a>
              <a href="#scholarships" onClick={() => setMobileMenuOpen(false)}>
                HỌC BỔNG DU HỌC
              </a>
              <a href="#advisory" onClick={() => setMobileMenuOpen(false)}>
                TƯ VẤN DU HỌC
              </a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
                KINH NGHIỆM DU HỌC
              </a>
              <a href="#summer-camp" onClick={() => setMobileMenuOpen(false)}>
                DU HỌC HÈ
              </a>
              <a href="#contact-footer" onClick={() => setMobileMenuOpen(false)}>
                LIÊN HỆ
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 4. Singapore Skyline Hero Banner */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-r from-[#083d77] via-[#0d5aa7] to-[#1a75cf] text-white"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 lg:grid-cols-12 lg:py-16">
          <div className="relative z-10 lg:col-span-6">
            <p className="text-lg font-medium text-sky-200 sm:text-xl">
              {merged.hero.eyebrow}
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-sky-100 sm:text-sm">
              {merged.hero.subtitle}
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-wider text-white drop-shadow sm:text-6xl">
              {merged.hero.title}
            </h1>
            <div className="mt-6">
              <a
                href={merged.hero.ctaLink}
                className="inline-flex items-center gap-2 rounded bg-[#f37933] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-[#dc6520]"
              >
                {merged.hero.ctaText}
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto overflow-hidden rounded-xl border-4 border-white/25 shadow-2xl">
              <img
                src={merged.hero.backgroundImage}
                alt="Singapore Marina Bay Sands & Merlion"
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083d77]/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded bg-white/95 px-3.5 py-2 text-xs font-bold text-[#0d5aa7] shadow">
                <span>100% Tư vấn miễn phí & Săn học bổng Singapore</span>
                <span className="rounded bg-[#f37933] px-2 py-0.5 text-[10px] text-white">
                  EduTrust 4 Năm
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Three Hexagonal Icon Columns */}
      <section id="intro" className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {merged.hexFeatures.map((feat) => {
              const isBlue = feat.color === "blue";
              return (
                <div
                  key={feat.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Double-bordered hexagonal badge */}
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-2xl border-2 p-2 shadow-sm transition hover:scale-105 ${
                      isBlue
                        ? "border-[#1fa2e1] bg-[#1fa2e1]/10"
                        : "border-slate-500 bg-slate-100"
                    }`}
                    style={{
                      clipPath:
                        "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)"
                    }}
                  >
                    <div
                      className={`flex h-full w-full items-center justify-center text-white ${
                        isBlue ? "bg-[#1fa2e1]" : "bg-[#555555]"
                      }`}
                      style={{
                        clipPath:
                          "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)"
                      }}
                    >
                      {feat.icon === "cap" && (
                        <GraduationCap className="h-8 w-8" />
                      )}
                      {feat.icon === "plane" && <Plane className="h-8 w-8" />}
                      {feat.icon === "award" && <Award className="h-8 w-8" />}
                    </div>
                  </div>

                  <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-slate-800">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                    {feat.description}
                  </p>
                  <a
                    href="#contact-footer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#f37933] hover:underline"
                  >
                    Xem thêm <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Royal Blue "TIN TỨC NỔI BẬT" Bento Section */}
      <section className="bg-[#0d5aa7] py-12 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl">
              TIN TỨC NỔI BẬT
            </h2>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="h-[2px] w-14 bg-white/40" />
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffcf40]/20 text-[#ffcf40]">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span className="h-[2px] w-14 bg-white/40" />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {/* Left Large Featured Image */}
            <div className="overflow-hidden rounded border-2 border-white/20 bg-white shadow-lg lg:col-span-6">
              <div className="relative h-full min-h-[280px]">
                <img
                  src={merged.featuredNewsMainImage}
                  alt="Du học Singapore tiêu điểm"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded bg-[#f37933] px-2.5 py-1 text-[10px] font-bold uppercase">
                    Tiêu điểm Du học Singapore 2026
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold leading-snug">
                    Cẩm nang săn học bổng & chọn trường Đại học hàng đầu tại
                    Singapore
                  </h3>
                  <p className="mt-1 text-xs text-slate-200">
                    Tổng hợp điều kiện đầu vào, chi phí sinh hoạt và lộ trình
                    chuyển tiếp Úc - Anh - Mỹ tiết kiệm 40% chi phí.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 3 Horizontal White News Cards */}
            <div className="flex flex-col justify-between gap-4 lg:col-span-6">
              {merged.featuredNewsRight.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedArticle(item)}
                  className="group flex cursor-pointer gap-3.5 rounded bg-white p-3 text-slate-800 shadow transition hover:bg-sky-50"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-28 shrink-0 rounded object-cover sm:h-24 sm:w-36"
                  />
                  <div className="flex flex-col justify-center">
                    <h4 className="line-clamp-2 text-sm font-bold text-slate-800 group-hover:text-[#0d5aa7]">
                      {item.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. HỘI THẢO - SỰ KIỆN */}
      {renderFourCardSection(
        "seminars",
        "HỘI THẢO - SỰ KIỆN",
        merged.seminarCards,
        "bg-white"
      )}

      {/* 8. HỌC BỔNG DU HỌC SINGAPORE */}
      {renderFourCardSection(
        "scholarships",
        "HỌC BỔNG DU HỌC SINGAPORE",
        merged.scholarshipCards,
        "bg-slate-50"
      )}

      {/* 9. Curved Royal Blue "GÓC CHIA SẺ" Student Testimonial Banner */}
      <section className="relative overflow-hidden bg-slate-100">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-12">
          {/* Left Student Portrait */}
          <div className="relative flex items-center justify-center p-6 lg:col-span-5">
            <img
              src={merged.sharingBanner.studentPhoto}
              alt={TESTIMONIAL_SLIDES[testimonialIdx].name}
              className="h-72 w-full max-w-sm rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Right Curved Royal Blue Panel */}
          <div className="relative bg-[#0d5aa7] px-6 py-12 text-center text-white lg:col-span-7 lg:rounded-l-[120px] lg:px-14">
            <h2 className="text-xl font-extrabold uppercase tracking-wide">
              GÓC CHIA SẺ
            </h2>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="h-[2px] w-12 bg-white/40" />
              <Sparkles className="h-4 w-4 text-[#ffcf40]" />
              <span className="h-[2px] w-12 bg-white/40" />
            </div>

            <div className="mt-6 flex flex-col items-center">
              <img
                src={TESTIMONIAL_SLIDES[testimonialIdx].avatar}
                alt={TESTIMONIAL_SLIDES[testimonialIdx].name}
                className="h-16 w-16 rounded-full border-2 border-white object-cover shadow"
              />
              <p className="mt-2 text-xs font-bold text-[#ffcf40]">
                {TESTIMONIAL_SLIDES[testimonialIdx].name} —{" "}
                {TESTIMONIAL_SLIDES[testimonialIdx].role}
              </p>
              <p className="mt-3 max-w-xl text-xs italic leading-relaxed text-sky-100 sm:text-sm">
                {TESTIMONIAL_SLIDES[testimonialIdx].quote}
              </p>

              {/* Slider dots */}
              <div className="mt-5 flex items-center gap-2">
                {TESTIMONIAL_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTestimonialIdx(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      testimonialIdx === idx
                        ? "scale-125 bg-white"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TƯ VẤN DU HỌC SINGAPORE */}
      {renderFourCardSection(
        "advisory",
        "TƯ VẤN DU HỌC SINGAPORE",
        merged.advisoryCards,
        "bg-white"
      )}

      {/* 11. KINH NGHIỆM DU HỌC SINGAPORE */}
      {renderFourCardSection(
        "experience",
        "KINH NGHIỆM DU HỌC SINGAPORE",
        merged.experienceCards,
        "bg-slate-50"
      )}

      {/* 12. DU HỌC HÈ SINGAPORE */}
      {renderFourCardSection(
        "summer-camp",
        "DU HỌC HÈ SINGAPORE",
        merged.summerCampCards,
        "bg-white"
      )}

      {/* 13. Royal Blue 3-Column Footer */}
      <footer id="contact-footer" className="bg-[#1579c4] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          {/* Column 1: TRỤ SỞ CHÍNH */}
          <div>
            <h3 className="border-b border-white/25 pb-2 text-sm font-extrabold uppercase tracking-wider">
              TRỤ SỞ CHÍNH
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-sky-100">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ffcf40]" />
                <span>
                  <strong className="text-white">Trụ sở TP.HCM:</strong>{" "}
                  {merged.business.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#ffcf40]" />
                <span>Điện thoại: {primaryPhone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ffcf40]" />
                <span>
                  <strong className="text-white">Chi nhánh Hà Nội:</strong> Tầng
                  6 Tòa nhà Kim Ánh, Cầu Giấy, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#ffcf40]" />
                <span>Email: {primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Column 2: CÔNG TY DU HỌC MONA MEDIA */}
          <div>
            <h3 className="border-b border-white/25 pb-2 text-sm font-extrabold uppercase tracking-wider">
              CÔNG TY DU HỌC MONA MEDIA
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-sky-100">
              {merged.business.aboutText[0]}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-sky-100">
              {(merged.business.highlights || []).map((hl, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ffcf40]" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: ĐĂNG KÝ */}
          <div>
            <h3 className="border-b border-white/25 pb-2 text-sm font-extrabold uppercase tracking-wider">
              ĐĂNG KÝ NHẬN LỘ TRÌNH HỌC BỔNG
            </h3>
            {footerSubmitted ? (
              <div className="mt-4 rounded bg-white/15 p-4 text-xs text-white">
                <p className="font-bold text-[#ffcf40]">
                  Đăng ký tư vấn thành công!
                </p>
                <p className="mt-1">
                  Chuyên viên Du học Singapore sẽ liên hệ qua số{" "}
                  <strong>{footerForm.phone}</strong> trong 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFooterSubmit} className="mt-4 space-y-2.5">
                <input
                  type="text"
                  required
                  value={footerForm.name}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, name: e.target.value })
                  }
                  placeholder="Họ và tên..."
                  className="w-full rounded-sm bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
                />
                <input
                  type="email"
                  value={footerForm.email}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, email: e.target.value })
                  }
                  placeholder="Email..."
                  className="w-full rounded-sm bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  value={footerForm.phone}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, phone: e.target.value })
                  }
                  placeholder="Số điện thoại..."
                  className="w-full rounded-sm bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-sm bg-[#f37933] px-5 py-2 text-xs font-bold uppercase text-white shadow transition hover:bg-[#dc6520]"
                >
                  <Send className="h-3.5 w-3.5" />
                  GỬI
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/15 bg-[#0d5aa7] py-3 text-center text-[11px] text-sky-200">
          © Bản quyền thuộc về {merged.business.name} – Thiết kế chuẩn Giáo dục
          Quốc tế Singapore.
        </div>
      </footer>

      {/* Article / Scholarship Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <div className="relative w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-slate-900/70 p-1.5 text-white hover:bg-slate-900"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              {selectedArticle.badge && (
                <span className="inline-block rounded bg-[#0d5aa7] px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                  {selectedArticle.badge}
                </span>
              )}
              <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                {selectedArticle.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {selectedArticle.excerpt} Liên hệ trực tiếp văn phòng tư vấn Du
                học Singapore qua Hotline <strong>{primaryPhone}</strong> để
                nhận bộ hồ sơ học bổng, điều kiện đầu vào IELTS/GPA và chi phí
                chi tiết.
              </p>
              <div className="mt-5 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="rounded border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Đóng
                </button>
                <a
                  href="#contact-footer"
                  onClick={() => setSelectedArticle(null)}
                  className="rounded bg-[#f37933] px-5 py-2 text-xs font-bold text-white hover:bg-[#dc6520]"
                >
                  Đăng ký xét học bổng
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
