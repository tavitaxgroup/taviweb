"use client";

import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Globe,
  Headphones,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Share2,
  Sparkles,
  Volume2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh21DefaultData,
  type TrungTamTiengAnh21Data
} from "../../data/mockData";

interface Props {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: Props) {
  const merged = adaptClonedTemplateData(
    trungTamTiengAnh21DefaultData,
    data
  ) as TrungTamTiengAnh21Data;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryTab, setGalleryTab] = useState<
    "all" | "facility" | "activity" | "opening"
  >("all");
  const [selectedLightbox, setSelectedLightbox] = useState<{
    title: string;
    image: string;
  } | null>(null);
  const [consultForm, setConsultForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const primaryPhone = merged.business.phone[0] || "076 922 0162";
  const primaryEmail = merged.business.email[0] || "mon@mona.media";

  const filteredGallery =
    galleryTab === "all"
      ? merged.galleryItems
      : merged.galleryItems.filter((item) => item.category === galleryTab);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultForm.name.trim() || !consultForm.phone.trim()) return;
    setConsultSubmitted(true);
  };

  const renderColorfulLogo = () => (
    <a
      href="#top"
      className="inline-flex items-baseline font-extrabold tracking-tight"
    >
      <span className="text-2xl text-[#e6004c] sm:text-3xl">K</span>
      <span className="text-2xl text-[#ff9800] sm:text-3xl">i</span>
      <span className="text-2xl text-[#7ab82e] sm:text-3xl">d</span>
      <span className="text-2xl text-[#0081c9] sm:text-3xl">s</span>
      <span className="ml-0.5 text-2xl text-[#4a32a8] sm:text-3xl">M</span>
      <span className="text-2xl text-[#ff5722] sm:text-3xl">o</span>
      <span className="text-2xl text-[#009688] sm:text-3xl">n</span>
      <span className="text-2xl text-[#e91e63] sm:text-3xl">a</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Purple Topbar */}
      <div className="bg-[#4a32a8] py-2 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 text-[11px] font-medium">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[#ffed00]" />
              EMAIL: {primaryEmail}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#ffed00]" />
              HOTLINE: {primaryPhone}
            </span>
          </div>
          <a
            href="#contact-register"
            className="rounded-full bg-[#ffed00] px-3 py-0.5 text-[10px] font-black uppercase text-[#4a32a8] transition hover:bg-white"
          >
            Tư vấn trực tiếp
          </a>
        </div>
      </div>

      {/* 2. White KidsMona Header */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          {renderColorfulLogo()}

          <nav className="hidden items-center gap-6 text-xs font-extrabold uppercase tracking-wide text-slate-700 lg:flex">
            <a href="#top" className="text-[#ff5c8a]">
              TRANG CHỦ
            </a>
            <a href="#activities" className="transition hover:text-[#ff5c8a]">
              GIỚI THIỆU
            </a>
            <a href="#innovation" className="transition hover:text-[#ff5c8a]">
              DỊCH VỤ
            </a>
            <a href="#teachers" className="transition hover:text-[#ff5c8a]">
              ĐỘI NGŨ GIÁO VIÊN
            </a>
            <a href="#news-feb" className="transition hover:text-[#ff5c8a]">
              TIN TỨC
            </a>
            <a
              href="#contact-register"
              className="transition hover:text-[#ff5c8a]"
            >
              LIÊN HỆ
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded p-1.5 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2.5 text-xs font-bold uppercase text-slate-700">
              <a href="#activities" onClick={() => setMobileMenuOpen(false)}>
                GIỚI THIỆU
              </a>
              <a href="#innovation" onClick={() => setMobileMenuOpen(false)}>
                PHƯƠNG PHÁP ĐỔI MỚI
              </a>
              <a href="#teachers" onClick={() => setMobileMenuOpen(false)}>
                ĐỘI NGŨ GIÁO VIÊN
              </a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>
                THƯ VIỆN ẢNH
              </a>
              <a href="#news-feb" onClick={() => setMobileMenuOpen(false)}>
                TIN TỨC
              </a>
              <a
                href="#contact-register"
                onClick={() => setMobileMenuOpen(false)}
              >
                LIÊN HỆ
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Ocean Blue Group Portrait Hero ("Mẫu giáo Kids School cho mọi trẻ em") */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-[#0b7fab] to-[#1aa3d8] pt-10 text-white"
      >
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-2xl font-black sm:text-4xl">
            <span>{merged.hero.eyebrow}</span>
            <span className="rounded-lg bg-[#ffed00] px-4 py-1 text-[#0b7fab] shadow">
              {merged.hero.title}
            </span>
          </div>
          <p className="mt-2 text-xl font-extrabold text-sky-100 sm:text-2xl">
            {merged.hero.subtitle}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-xs text-sky-100 sm:text-sm">
            {merged.hero.description}
          </p>

          <div className="mt-8 overflow-hidden rounded-t-3xl border-4 border-b-0 border-white/30 shadow-2xl">
            <img
              src={merged.hero.backgroundImage}
              alt="Group of smiling Kids School students"
              className="h-64 w-full object-cover sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* 4. Soft Sky (#d8edf8) 4 Rounded Activity Cards */}
      <section id="activities" className="bg-[#d8edf8] py-12">
        <div className="mx-auto max-w-6xl px-4">
          {/* Top Question & Social Strip */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-sky-200 pb-4">
            <div className="flex items-center gap-2 text-sm font-black uppercase text-[#0b7fab] sm:text-base">
              <Phone className="h-4 w-4 text-[#ff5c8a]" />
              <span>ĐẶT CÂU HỎI ? {primaryPhone}</span>
            </div>
            <div className="flex items-center gap-2">
              {["#3b5998", "#00aced", "#dd4b39", "#ff5c8a"].map((clr, idx) => (
                <a
                  key={idx}
                  href="#contact-register"
                  style={{ backgroundColor: clr }}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white shadow-sm transition hover:scale-110"
                  aria-label="Kênh kết nối KidsMona"
                >
                  {idx % 2 === 0 ? (
                    <Globe className="h-3.5 w-3.5" />
                  ) : (
                    <Share2 className="h-3.5 w-3.5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* 4 Activity Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merged.activityCards.map((card) => (
              <div
                key={card.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white p-3.5 text-center shadow-md transition hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="h-40 overflow-hidden rounded-xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="mt-4 text-base font-black"
                  style={{ color: card.titleColor }}
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Wavy Lime Green (#7ab82e) "PHƯƠNG PHÁP HỌC TẬP ĐỔI MỚI" Split Section */}
      <section
        id="innovation"
        className="relative overflow-hidden bg-[#7ab82e] py-14 text-white"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-12">
          {/* Left Content + 2x2 Grid */}
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider">
              Giáo dục mầm non & Anh ngữ thế hệ mới
            </span>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-wide sm:text-3xl">
              PHƯƠNG PHÁP HỌC TẬP ĐỔI MỚI
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-lime-50 sm:text-sm">
              {merged.business.aboutText[0]}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {merged.innovationMethods.map((m) => (
                <div
                  key={m.id}
                  className="flex items-start gap-3.5 rounded-2xl bg-white/15 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffed00] text-[#4a32a8] shadow">
                    {m.icon === "sound" && <Volume2 className="h-6 w-6" />}
                    {m.icon === "method" && <Sparkles className="h-6 w-6" />}
                    {m.icon === "ebook" && <BookOpen className="h-6 w-6" />}
                    {m.icon === "online" && <Laptop className="h-6 w-6" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white">{m.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-lime-50">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Scalloped / Flower-Shaped Photo Frame */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative p-3">
              <div className="overflow-hidden rounded-[48px] border-8 border-white/90 shadow-2xl">
                <img
                  src={merged.innovationPhoto}
                  alt="Phương pháp học tập đổi mới KidsMona"
                  className="h-72 w-72 object-cover sm:h-80 sm:w-80"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 rounded-2xl bg-[#ff5c8a] px-4 py-2 text-xs font-black text-white shadow-lg">
                100% Trực quan & Tương tác
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Chalkboard Smart Kid Banner ("A+ AWESOME GALLERY") */}
      <section className="relative h-56 w-full overflow-hidden bg-slate-900 sm:h-64">
        <img
          src={merged.chalkboardBannerImage}
          alt="A+ Awesome Gallery Chalkboard"
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <span className="font-serif text-4xl font-black text-[#ffed00] drop-shadow sm:text-5xl">
            A+
          </span>
          <h3 className="mt-1 text-xl font-black uppercase tracking-[0.2em] sm:text-3xl">
            AWESOME KIDS ACADEMY
          </h3>
          <p className="mt-1 text-xs text-slate-200 sm:text-sm">
            Ươm mầm trí tuệ, rèn nét chữ đẹp và phản xạ tiếng Anh tự nhiên mỗi
            ngày
          </p>
        </div>
      </section>

      {/* 7. Coral Pink (#ff5c8a) "Đội ngũ giáo viên" Section */}
      <section id="teachers" className="bg-[#ff5c8a] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-black sm:text-3xl">Đội ngũ giáo viên</h2>
          <p className="mt-1 text-xs text-pink-100 sm:text-sm">
            Tận tâm – Yêu trẻ – Chuẩn sư phạm Mầm non & Anh ngữ Quốc tế
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {merged.teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex flex-col items-center text-center"
              >
                <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-xl">
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-sm font-black uppercase tracking-wide text-white">
                  {teacher.name}
                </h3>
                <span className="mt-0.5 text-[11px] font-extrabold uppercase text-[#ffed00]">
                  {teacher.role}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-pink-50">
                  {teacher.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Origami Craft Banner + Bright Blue (#0081c9) "Thư viện ảnh MONA Kids" */}
      <section id="gallery" className="bg-[#0081c9] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-black sm:text-3xl">
              Thư viện ảnh MONA Kids
            </h2>

            {/* 4 Filter Tabs */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {[
                { id: "all", label: "Tất cả" },
                { id: "facility", label: "Cơ sở vật chất" },
                { id: "activity", label: "Các hoạt động" },
                { id: "opening", label: "Khai giảng" }
              ].map((t) => {
                const active = galleryTab === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() =>
                      setGalleryTab(
                        t.id as "all" | "facility" | "activity" | "opening"
                      )
                    }
                    className={`rounded-full px-5 py-1.5 text-xs font-extrabold transition ${
                      active
                        ? "bg-[#ffed00] text-slate-900 shadow"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4x2 Photo Grid */}
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  setSelectedLightbox({ title: item.title, image: item.image })
                }
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border-2 border-white/30 bg-sky-900 shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/75 via-transparent to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                  <p className="text-xs font-bold text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Vivid Yellow (#ffed00) "Tin tức tháng 2" Section */}
      <section id="news-feb" className="bg-[#ffed00] py-14 text-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#4a32a8] sm:text-3xl">
              Tin tức tháng 2
            </h2>
            <p className="mt-1 text-xs font-semibold text-slate-700">
              Cẩm nang nuôi dạy con, phương pháp học tiếng Anh và luyện chữ đẹp
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {merged.februaryNews.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-bold text-slate-400">
                    {post.date}
                  </span>
                  <h3 className="mt-1 text-base font-black text-slate-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedLightbox({
                          title: post.title,
                          image: post.image
                        })
                      }
                      style={{ backgroundColor: post.buttonColor }}
                      className="rounded-full px-5 py-1.5 text-[11px] font-black uppercase text-white shadow transition hover:opacity-90"
                    >
                      ĐỌC THÊM
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. White Split "Địa chỉ của chúng tôi" & "Đăng kí để được tư vấn trực tiếp" */}
      <section id="contact-register" className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-12">
          {/* Left: Địa chỉ của chúng tôi + Kid on Phone ("Alo... alo... Tổng đài KidsMona") */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-black text-[#4a32a8]">
              Địa chỉ của chúng tôi
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              Quý phụ huynh có thể ghé thăm trực tiếp khuôn viên lớp học hoặc
              gọi ngay tổng đài KidsMona để đặt lịch kiểm tra năng lực tiếng Anh
              miễn phí cho bé.
            </p>

            <div className="mt-5 space-y-2.5 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#ff5c8a]" />
                <span>{merged.business.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#7ab82e]" />
                <span>Hotline: {primaryPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#0081c9]" />
                <span>Email: {primaryEmail}</span>
              </div>
            </div>

            {/* Kid on Phone Callout */}
            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#d8edf8] p-4">
              <img
                src={merged.callCenterKidImage}
                alt="Tổng đài KidsMona"
                className="h-24 w-24 shrink-0 rounded-full border-4 border-white object-cover shadow"
              />
              <div className="relative rounded-2xl bg-white p-3.5 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#ff5c8a]">
                  <Headphones className="h-4 w-4" />
                  <span>“Alo... alo... Tổng đài KidsMona xin nghe ạ!”</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-600">
                  Hỗ trợ giải đáp học phí, thực đơn dinh dưỡng và lịch khai
                  giảng lớp Mẫu giáo & Luyện chữ đẹp 24/7.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Đăng kí để được tư vấn trực tiếp */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-md sm:p-8 lg:col-span-6">
            <h2 className="text-xl font-black text-[#0081c9] sm:text-2xl">
              Đăng kí để được tư vấn trực tiếp
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Nhận ưu đãi học bổng 20% và bộ quà tặng nhập học KidsMona
            </p>

            {consultSubmitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-5 text-xs text-emerald-800">
                <p className="text-sm font-black">
                  Đã ghi nhận thông tin đăng ký!
                </p>
                <p className="mt-1">
                  Cảm ơn phụ huynh <strong>{consultForm.name}</strong>. Cô giáo
                  tư vấn tuyển sinh KidsMona sẽ liên hệ số{" "}
                  <strong>{consultForm.phone}</strong> ngay hôm nay.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="mt-5 space-y-3">
                <input
                  type="text"
                  required
                  value={consultForm.name}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, name: e.target.value })
                  }
                  placeholder="Họ và tên Phụ huynh *"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs focus:border-[#0081c9] focus:outline-none"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="email"
                    value={consultForm.email}
                    onChange={(e) =>
                      setConsultForm({ ...consultForm, email: e.target.value })
                    }
                    placeholder="Email"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs focus:border-[#0081c9] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={consultForm.phone}
                    onChange={(e) =>
                      setConsultForm({ ...consultForm, phone: e.target.value })
                    }
                    placeholder="Số điện thoại *"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs focus:border-[#0081c9] focus:outline-none"
                  />
                </div>
                <textarea
                  rows={3}
                  value={consultForm.message}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, message: e.target.value })
                  }
                  placeholder="Độ tuổi của bé và lớp học Phụ huynh quan tâm..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs focus:border-[#0081c9] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff5c8a] px-7 py-2.5 text-xs font-black uppercase text-white shadow transition hover:bg-[#e04875]"
                >
                  <Send className="h-3.5 w-3.5" />
                  GỬI ĐI
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 11. Fullwidth Map + Yellow KidsMona Banner Strip */}
      <section className="h-60 w-full bg-slate-200">
        <iframe
          title="Bản đồ Học viện KidsMona"
          src="https://www.google.com/maps?q=319+L%C3%BD+Th%C6%B0%E1%BB%9Dng+Ki%E1%BB%87t,+Qu%E1%BA%ADn+11,+TP.HCM&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </section>

      <div className="bg-[#ffed00] py-5 text-center">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4">
          {renderColorfulLogo()}
          <p className="text-xs font-bold text-[#4a32a8]">
            Nơi ươm mầm tài năng nhí – Tự tin giao tiếp Anh ngữ & Nét chữ nết
            người
          </p>
        </div>
      </div>

      {/* 12. White 4-Column Footer */}
      <footer className="border-t border-slate-200 bg-white text-slate-700">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            {renderColorfulLogo()}
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              {merged.business.aboutText[0]}
            </p>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              {(merged.business.highlights || []).map((h, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7ab82e]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-900">Thư viện</h3>
            <div className="mt-1 h-0.5 w-8 bg-[#ff5c8a]" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {merged.galleryItems.slice(0, 6).map((g) => (
                <div
                  key={g.id}
                  className="aspect-square overflow-hidden rounded bg-slate-100"
                >
                  <img
                    src={g.image}
                    alt={g.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-900">Liên hệ</h3>
            <div className="mt-1 h-0.5 w-8 bg-[#7ab82e]" />
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ff5c8a]" />
                <span>{merged.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#0081c9]" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#7ab82e]" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-900">Bài viết mới</h3>
            <div className="mt-1 h-0.5 w-8 bg-[#0081c9]" />
            <div className="mt-4 space-y-3">
              {merged.februaryNews.slice(0, 2).map((n) => (
                <div key={n.id} className="flex gap-2.5">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="h-12 w-12 shrink-0 rounded object-cover"
                  />
                  <div>
                    <h4 className="line-clamp-2 text-xs font-bold text-slate-800">
                      {n.title}
                    </h4>
                    <span className="text-[10px] text-slate-400">{n.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 py-3 text-center text-[11px] text-slate-500">
          © Bản quyền thuộc về {merged.business.name}.
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-4 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedLightbox(null)}
              className="absolute right-3 top-3 rounded-full bg-slate-900/70 p-1.5 text-white"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={selectedLightbox.image}
              alt={selectedLightbox.title}
              className="h-64 w-full rounded-xl object-cover"
            />
            <h3 className="mt-3 text-base font-black text-slate-900">
              {selectedLightbox.title}
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Hoạt động thực tế tại {merged.business.name} – Hotline tư vấn:{" "}
              <strong>{primaryPhone}</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
