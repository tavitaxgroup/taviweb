"use client";

import React, { useState } from "react";
import {
  Search,
  GraduationCap,
  Bookmark,
  HelpCircle,
  BookOpen,
  Building2,
  Star,
  ChevronDown,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTam13DefaultData,
  type TrungTam13TemplateData,
  type TrungTam13MajorCard,
  type TrungTam13AdvisoryTile
} from "@/template-sources/trung_tam_tieng_anh_13/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: TrungTam13TemplateData = adaptClonedTemplateData(
    trungTam13DefaultData,
    incomingData
  );

  const [activeFacultyId, setActiveFacultyId] = useState<string>(
    data.facultyTabs?.[0]?.id || "fac-it"
  );
  const [activeReviewIdx, setActiveReviewIdx] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedMajor, setSelectedMajor] =
    useState<TrungTam13MajorCard | null>(null);
  const [selectedAdvisory, setSelectedAdvisory] =
    useState<TrungTam13AdvisoryTile | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState<boolean>(false);
  const [formDone, setFormDone] = useState<boolean>(false);
  const [applyForm, setApplyForm] = useState({
    fullName: "",
    phone: "",
    major: "Kỹ thuật phần mềm",
    highSchool: ""
  });

  const primaryPhone = data.business.phone?.[0] || "0907 922 016";
  const primaryEmail = data.business.email?.[0] || "tuyensinh@greenuni.edu.vn";

  const activeFaculty =
    (data.facultyTabs || []).find((f) => f.id === activeFacultyId) ||
    data.facultyTabs?.[0];

  const reviews = data.testimonials || [];
  const currentReview = reviews[activeReviewIdx] || reviews[0];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormDone(true);
    setTimeout(() => {
      setFormDone(false);
      setApplyModalOpen(false);
      setApplyForm({
        fullName: "",
        phone: "",
        major: "Kỹ thuật phần mềm",
        highSchool: ""
      });
    }, 3000);
  };

  const renderSectionDivider = (darkBg = false) => (
    <div className="flex items-center justify-center gap-3 my-4">
      <span
        className={`w-28 sm:w-44 h-px ${
          darkBg ? "bg-amber-400/50" : "bg-amber-400"
        }`}
      />
      <Bookmark className="w-4 h-4 text-amber-400 fill-amber-400/20" />
      <span
        className={`w-28 sm:w-44 h-px ${
          darkBg ? "bg-amber-400/50" : "bg-amber-400"
        }`}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0b5340] selection:text-white">
      {/* 1. STICKY WHITE HEADER WITH LIME GREEN ACTIVE TAB (#a3cd39) */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a3cd39] to-[#0b5340] text-white flex items-center justify-center shadow">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <span className="block text-[10px] font-semibold text-[#0b5340]">
                    University
                  </span>
                  <span className="block text-sm sm:text-base font-black text-[#0b5340] uppercase tracking-tight">
                    {data.business.name}
                  </span>
                </div>
              </div>
            )}
          </a>

          <nav className="hidden lg:flex items-stretch h-full text-xs font-bold uppercase tracking-wide text-slate-600">
            <a
              href="#"
              className="bg-[#a3cd39] text-white px-4 flex items-center justify-center"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="px-4 flex items-center hover:text-[#0b5340] transition"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="px-4 flex items-center gap-1 hover:text-[#0b5340] transition"
            >
              <span>HỌC BỔNG</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#chuyen-nganh"
              className="px-4 flex items-center gap-1 hover:text-[#0b5340] transition"
            >
              <span>HỘI THẢO</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#nhan-xet"
              className="px-4 flex items-center gap-1 hover:text-[#0b5340] transition"
            >
              <span>CHIA SẺ</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#lien-he"
              className="px-4 flex items-center hover:text-[#0b5340] transition"
            >
              LIÊN HỆ
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            {["f", "t"].map((soc) => (
              <a
                key={soc}
                href="#lien-he"
                className="w-7 h-7 rounded-full border border-slate-300 text-slate-500 hover:bg-[#0b5340] hover:text-white text-xs font-bold flex items-center justify-center transition"
              >
                {soc}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setApplyModalOpen(true)}
              aria-label="Tìm kiếm"
              className="w-7 h-7 rounded-full bg-[#a3cd39] text-white flex items-center justify-center shadow cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-slate-200 text-slate-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-2 text-xs font-bold uppercase">
            <a
              href="#chuyen-nganh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Chuyên ngành đào tạo
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Giới thiệu
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Dịch vụ tư vấn
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Tin tức tuyển sinh
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#0b5340]"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 2. CAMPUS STUDENTS HERO ("Trường đại học quốc tế") */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden bg-[#0b5340]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/35 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex justify-end">
          <div className="max-w-lg text-right text-white">
            <p className="text-lg sm:text-2xl font-medium text-white/95 mb-1">
              {data.hero.eyebrow || "Trường đại học quốc tế"}
            </p>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-wider text-white mb-2">
              {data.business.name}
            </h1>
            <p className="text-xs sm:text-sm text-white/90 mb-6">
              {data.hero.subtitle}
            </p>
            <a
              href={data.hero.ctaLink || "#chuyen-nganh"}
              className="inline-block bg-[#a3cd39] hover:bg-[#8eb828] text-white text-xs font-extrabold uppercase tracking-wider px-7 py-2.5 rounded shadow-lg transition"
            >
              {data.hero.ctaText || "TÌM HIỂU NGAY"}
            </a>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAJOR TABS "CHUYÊN NGÀNH ĐÀO TẠO" */}
      <section id="chuyen-nganh" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-800">
            CHUYÊN NGÀNH ĐÀO TẠO
          </h2>
          {renderSectionDivider(false)}

          <div className="mt-8">
            {/* 3 Faculty Tabs sitting flush above bordered box */}
            <div className="inline-flex flex-wrap justify-center border border-b-0 border-slate-200 bg-slate-100">
              {(data.facultyTabs || []).map((tab) => {
                const isSelected = activeFaculty?.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFacultyId(tab.id)}
                    className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition cursor-pointer ${
                      isSelected
                        ? "bg-white text-slate-900 border-t-2 border-t-[#a3cd39]"
                        : "text-slate-600 hover:bg-slate-200/60"
                    }`}
                  >
                    {tab.tabLabel}
                  </button>
                );
              })}
            </div>

            {activeFaculty && (
              <div className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {activeFaculty.majors.map((mj) => (
                    <div
                      key={mj.id}
                      onClick={() => setSelectedMajor(mj)}
                      className="group cursor-pointer text-center"
                    >
                      <div className="h-32 overflow-hidden border border-slate-200 mb-3">
                        <img
                          src={mj.image}
                          alt={mj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-[#0b5340]">
                        {mj.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. DARK FOREST GREEN "GIỚI THIỆU" SPLIT SECTION (#0b5340) */}
      <section
        id="gioi-thieu"
        className="py-16 lg:py-20 bg-[#0b5340] text-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider">
              GIỚI THIỆU
            </h2>
            {renderSectionDivider(true)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#a3cd39] mb-3">
                {data.business.aboutTitle || "VÀI NÉT VỀ CHÚNG TÔI"}
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-emerald-50/90 leading-relaxed mb-6">
                {(data.business.aboutText || []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setApplyModalOpen(true)}
                className="bg-amber-400 hover:bg-amber-300 text-slate-900 text-[11px] font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-full shadow transition cursor-pointer"
              >
                XEM CHI TIẾT
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded overflow-hidden shadow-2xl border-4 border-white/15 h-64 sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80"
                  alt="Khuôn viên trường đại học"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4 COLORFUL SQUARE TILES "DỊCH VỤ TƯ VẤN" */}
      <section id="dich-vu" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-800">
            DỊCH VỤ TƯ VẤN
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {data.business.name} tự hào là một trong những trường Đại học Quốc tế hàng đầu Việt Nam
          </p>
          {renderSectionDivider(false)}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {(data.advisoryTiles || []).map((tile) => (
              <div
                key={tile.id}
                onClick={() => setSelectedAdvisory(tile)}
                className={`${tile.bgColor} text-white aspect-square p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer group`}
              >
                <div className="mb-4 opacity-95 group-hover:scale-110 transition">
                  {tile.iconType === "major" && (
                    <HelpCircle className="w-12 h-12" />
                  )}
                  {tile.iconType === "admission" && (
                    <BookOpen className="w-12 h-12" />
                  )}
                  {tile.iconType === "scholarship" && (
                    <GraduationCap className="w-12 h-12" />
                  )}
                  {tile.iconType === "dorm" && (
                    <Building2 className="w-12 h-12" />
                  )}
                </div>
                <h3 className="text-base font-extrabold">{tile.title}</h3>
                <p className="text-[11px] text-white/90 mt-2 line-clamp-3">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DARK FOREST GREEN "SINH VIÊN NHẬN XÉT" (#0b5340) */}
      <section id="nhan-xet" className="py-16 lg:py-20 bg-[#0b5340] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase">
            SINH VIÊN NHẬN XÉT
          </h2>
          <p className="text-xs text-emerald-200 mt-1">
            Các bạn sinh viên đã & đang học tập tại trường
          </p>
          {renderSectionDivider(true)}

          {currentReview && (
            <div className="mt-8 flex flex-col items-center">
              <img
                src={
                  currentReview.avatar ||
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                }
                alt={currentReview.author}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4"
              />
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {Array.from({ length: currentReview.rating || 5 }).map(
                  (_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  )
                )}
              </div>
              <p className="text-xs sm:text-sm italic text-emerald-50/95 leading-relaxed max-w-2xl mb-4">
                {currentReview.content}
              </p>
              <p className="text-xs font-extrabold text-white">
                {currentReview.author}{" "}
                <span className="font-normal text-emerald-200">
                  / {currentReview.role}
                </span>
              </p>

              {reviews.length > 1 && (
                <div className="flex gap-2 mt-5">
                  {reviews.map((r, idx) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setActiveReviewIdx(idx)}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                        idx === activeReviewIdx
                          ? "bg-amber-400"
                          : "bg-white/30"
                      }`}
                      aria-label={`Nhận xét ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 7. 4-COLUMN "TIN TỨC" GRID */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-800">
            TIN TỨC
          </h2>
          {renderSectionDivider(false)}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-left">
            {(data.news || []).slice(0, 4).map((post) => (
              <article
                key={post.id}
                onClick={() => setApplyModalOpen(true)}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition cursor-pointer group flex flex-col"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold uppercase text-slate-800 group-hover:text-[#0b5340] line-clamp-2 mb-1">
                      {post.title}
                    </h3>
                    <span className="block text-[10px] text-slate-400 mb-2">
                      {post.date}
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3 mb-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#e53935]">
                    Xem Thêm ▸
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 3-COLUMN LIGHT GRAY FOOTER (#f5f5f5) + DARK COPYRIGHT BAR */}
      <footer id="lien-he" className="bg-[#f5f5f5] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Col 1 */}
            <div>
              <h4 className="text-sm font-extrabold uppercase text-slate-800 mb-4">
                LIÊN HỆ
              </h4>
              <div className="space-y-2 text-xs text-slate-600 mb-5">
                <p>
                  <strong className="text-slate-800">Địa chỉ:</strong>{" "}
                  {data.business.address}
                </p>
                <p>
                  <strong className="text-slate-800">Điện thoại:</strong>{" "}
                  {primaryPhone}
                </p>
                <p>
                  <strong className="text-slate-800">Email:</strong>{" "}
                  <span className="text-[#008a00]">{primaryEmail}</span>
                </p>
                <p>
                  <strong className="text-slate-800">Giờ làm việc:</strong>{" "}
                  {data.business.workingHours}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setApplyModalOpen(true)}
                  className="bg-amber-400 hover:bg-amber-500 text-white text-[11px] font-extrabold uppercase px-4 py-2 rounded cursor-pointer"
                >
                  LIÊN HỆ
                </button>
                {[
                  { label: "f", bg: "bg-[#1877f2]" },
                  { label: "t", bg: "bg-[#1da1f2]" },
                  { label: "G+", bg: "bg-[#db4437]" },
                  { label: "▶", bg: "bg-[#ff0000]" }
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#lien-he"
                    className={`w-7 h-7 rounded-full ${s.bg} text-white text-[10px] font-bold flex items-center justify-center`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-sm font-extrabold uppercase text-slate-800 mb-4">
                LIÊN KẾT
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-600">
                <a href="#" className="hover:text-[#008a00]">
                  ▸ Trang chủ
                </a>
                <a href="#chuyen-nganh" className="hover:text-[#008a00]">
                  ▸ Du học các nước
                </a>
                <a href="#gioi-thieu" className="hover:text-[#008a00]">
                  ▸ Giới thiệu
                </a>
                <a href="#dich-vu" className="hover:text-[#008a00]">
                  ▸ Học bổng
                </a>
                <a href="#lien-he" className="hover:text-[#008a00]">
                  ▸ Liên hệ
                </a>
                <a href="#tin-tuc" className="hover:text-[#008a00]">
                  ▸ Hội thảo
                </a>
                <a href="#nhan-xet" className="hover:text-[#008a00]">
                  ▸ Chia sẻ
                </a>
              </div>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-sm font-extrabold uppercase text-slate-800 mb-4">
                FACEBOOK FANPAGE
              </h4>
              <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm">
                <div className="relative h-28 bg-slate-800 p-3 flex flex-col justify-between text-white">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
                    alt="Fanpage"
                    className="absolute inset-0 w-full h-full object-cover opacity-55"
                  />
                  <div className="relative z-10 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded bg-white text-[#0b5340] flex items-center justify-center font-black">
                      GU
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">
                        {data.business.name}
                      </p>
                      <span className="text-[10px] text-slate-200">
                        24.600 người theo dõi
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setApplyModalOpen(true)}
                      className="bg-white text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded shadow cursor-pointer"
                    >
                      👍 Thích Trang
                    </button>
                    <button
                      type="button"
                      onClick={() => setApplyModalOpen(true)}
                      className="bg-white text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded shadow cursor-pointer"
                    >
                      💬 Gửi tin nhắn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#222222] text-slate-400 text-center text-xs py-3">
          © Bản quyền thuộc về {data.business.name}. Trường Quốc Tế & Đào Tạo Ngoại Ngữ.
        </div>
      </footer>

      {/* MAJOR DETAIL MODAL */}
      {selectedMajor && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedMajor(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48">
              <img
                src={selectedMajor.image}
                alt={selectedMajor.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedMajor(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="inline-block bg-[#a3cd39]/20 text-[#0b5340] text-[11px] font-extrabold px-3 py-1 rounded-full mb-2">
                {selectedMajor.degree} • {selectedMajor.duration}
              </span>
              <h3 className="text-lg font-extrabold text-[#0b5340] mb-2">
                Chuyên ngành: {selectedMajor.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {selectedMajor.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  setApplyForm({ ...applyForm, major: selectedMajor.title });
                  setSelectedMajor(null);
                  setApplyModalOpen(true);
                }}
                className="w-full bg-[#0b5340] hover:bg-[#008a00] text-white text-xs font-extrabold uppercase py-3 rounded-lg transition cursor-pointer"
              >
                Đăng ký xét tuyển ngành này
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADVISORY MODAL */}
      {selectedAdvisory && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedAdvisory(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAdvisory(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-xl font-extrabold text-[#0b5340] mb-2">
              {selectedAdvisory.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedAdvisory.description}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedAdvisory(null);
                setApplyModalOpen(true);
              }}
              className="w-full bg-[#a3cd39] text-white text-xs font-extrabold uppercase py-3 rounded-lg cursor-pointer"
            >
              Đăng ký tư vấn ngay
            </button>
          </div>
        </div>
      )}

      {/* ADMISSION MODAL */}
      {applyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setApplyModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setApplyModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-lg font-extrabold text-[#0b5340] mb-1">
              Đăng Ký Xét Tuyển & Học Bổng {data.business.name}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Nhận tư vấn chuyên ngành và xét học bổng đầu vào tới 100%.
            </p>
            {formDone ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-[#0b5340]">
                  Đã gửi hồ sơ đăng ký tư vấn thành công!
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên thí sinh *"
                  value={applyForm.fullName}
                  onChange={(e) =>
                    setApplyForm({ ...applyForm, fullName: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ *"
                  value={applyForm.phone}
                  onChange={(e) =>
                    setApplyForm({ ...applyForm, phone: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs"
                />
                <input
                  type="text"
                  placeholder="Chuyên ngành quan tâm"
                  value={applyForm.major}
                  onChange={(e) =>
                    setApplyForm({ ...applyForm, major: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0b5340] hover:bg-[#008a00] text-white text-xs font-extrabold uppercase py-3 rounded-lg cursor-pointer"
                >
                  GỬI ĐĂNG KÝ XÉT TUYỂN
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
