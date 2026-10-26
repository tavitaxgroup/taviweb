"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Rocket,
  Radar,
  Satellite,
  Star,
  MapPin,
  Phone,
  Mail,
  Send,
  Monitor,
  Smartphone,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile17DefaultData,
  type Corp17Data,
  type Corp17BlogItem
} from "@/template-sources/corporate_profile_17/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Corp17Data = adaptClonedTemplateData(
    corporateProfile17DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Corp17BlogItem | null>(null);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  // Consult modal state
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [serviceType, setServiceType] = useState("Cloud Hosting & Tên miền");
  const [consultSent, setConsultSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "demonhunter@gmail.com";
  const testimonials =
    data.testimonials || corporateProfile17DefaultData.testimonials || [];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSent(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSent(true);
    setClientName("");
    setClientPhone("");
    setTimeout(() => {
      setConsultSent(false);
      setConsultModalOpen(false);
    }, 3000);
  };

  const renderBrandLogo = () => {
    const rawName = data.business.name || "Mona-web";
    const parts = rawName.split("-");
    const firstPart = parts[0] || rawName;
    const secondPart = parts[1] ? `-${parts.slice(1).join("-")}` : "";

    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center relative">
          <span className="w-2 h-2 rounded-full bg-slate-800 mr-1" />
          <span className="w-2 h-2 rounded-full bg-slate-800" />
        </div>
        <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
          <span className="text-[#eb3b3b]">{firstPart}</span>
          <span className="text-[#3253dc]">{secondPart}</span>
        </span>
      </div>
    );
  };

  const renderMissionIcon = (type: "ufo" | "radar" | "satellite") => {
    switch (type) {
      case "ufo":
        return (
          <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-slate-700 flex items-center justify-center text-[#eb3b3b]">
            <Rocket className="w-10 h-10" />
          </div>
        );
      case "radar":
        return (
          <div className="w-20 h-20 rounded-full bg-cyan-50 border-2 border-slate-700 flex items-center justify-center text-[#eb3b3b]">
            <Radar className="w-10 h-10" />
          </div>
        );
      default:
        return (
          <div className="w-20 h-20 rounded-full bg-purple-50 border-2 border-slate-700 flex items-center justify-center text-[#3253dc]">
            <Satellite className="w-10 h-10" />
          </div>
        );
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#2d3748] font-sans selection:bg-[#eb3b3b] selection:text-white"
    >
      {/* 1. CLEAN WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
          <a href="#top">{renderBrandLogo()}</a>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#top" className="text-[#eb3b3b] font-semibold">
              Trang chủ
            </a>
            <a href="#about" className="hover:text-[#eb3b3b] transition-colors">
              Giới thiệu
            </a>
            <a
              href="#missions"
              className="flex items-center gap-1 hover:text-[#eb3b3b] transition-colors"
            >
              <span>Tên miền</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#missions"
              className="flex items-center gap-1 hover:text-[#eb3b3b] transition-colors"
            >
              <span>Cloud Hosting</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#about"
              className="flex items-center gap-1 hover:text-[#eb3b3b] transition-colors"
            >
              <span>Chứng chỉ SSL</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#blog" className="hover:text-[#eb3b3b] transition-colors">
              Thiết kế logo
            </a>
            <a
              href="#footer-contact"
              className="hover:text-[#eb3b3b] transition-colors"
            >
              Liên hệ
            </a>
            <button
              type="button"
              onClick={() => setConsultModalOpen(true)}
              className="text-slate-500 hover:text-[#eb3b3b]"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-medium text-slate-700">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#eb3b3b] font-bold"
            >
              Trang chủ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Giới thiệu
            </a>
            <a
              href="#missions"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Tên miền & Cloud Hosting
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Thiết kế website & Logo
            </a>
            <a
              href="#footer-contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (WHITE WITH ORGANIC RED BLOB ILLUSTRATION RIGHT) */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6 space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2b3445] tracking-tight uppercase">
              {data.hero.title}
            </h1>
            <p className="text-lg sm:text-2xl text-slate-600 font-normal">
              {data.hero.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-1">
              {data.hero.description}
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href={data.hero.ctaLink || "#about"}
                className="bg-[#eb3b3b] hover:bg-[#d62c2c] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded shadow-md shadow-red-500/20 transition-colors"
              >
                {data.hero.ctaText || "VỀ CHÚNG TÔI"}
              </a>
              <button
                type="button"
                onClick={() => setConsultModalOpen(true)}
                className="border border-[#eb3b3b] text-[#eb3b3b] hover:bg-[#eb3b3b] hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded transition-colors"
              >
                {data.hero.secondaryCtaText || "LIÊN HỆ"}
              </button>
            </div>
          </div>

          {/* Right Organic Red Blob Illustration */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Organic Red Blob */}
              <div
                className="absolute inset-2 bg-[#eb3b3b] shadow-2xl"
                style={{
                  borderRadius: "58% 42% 48% 52% / 46% 56% 44% 54%"
                }}
              />
              {/* Floating Red Circle Accent */}
              <span className="w-10 h-10 rounded-full bg-[#c92a2a] absolute bottom-16 left-2 shadow-md" />
              {/* Workspace Image inside Blob */}
              <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-white/90 shadow-xl rotate-3">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NHIỆM VỤ ("Những công việc mà chúng tôi làm" — 3 DASHED CIRCLES ON #f6f8fc) */}
      <section id="missions" className="bg-[#f6f8fc] py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-semibold text-slate-500 block">
            {data.missionsSection.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2b3445] mt-1 mb-14">
            {data.missionsSection.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.missionsSection.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-40 h-40 rounded-full bg-white border border-dashed border-slate-300 shadow-sm flex items-center justify-center">
                  {renderMissionIcon(item.iconType)}
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#2b3445] pt-2">
                  {item.numberTitle}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VỀ CHÚNG TÔI (DASHBOARD ILLUSTRATION LEFT + COPY RIGHT ON WHITE) */}
      <section id="about" className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Dashboard & Mobile Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md p-6">
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-sky-200" />
              <div className="relative bg-white rounded-xl border-2 border-slate-700 shadow-xl overflow-hidden">
                <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#eb3b3b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <img
                  src={data.aboutDetailSection.illustrationImage}
                  alt="Hệ thống quản trị web và ứng dụng"
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Floating Mobile Screen Bottom-Right */}
              <div className="w-28 bg-slate-800 rounded-2xl p-1.5 shadow-2xl ml-auto -mt-20 mr-2 relative z-10 border-2 border-white">
                <div className="bg-white rounded-xl p-3 text-center space-y-2">
                  <Smartphone className="w-6 h-6 text-[#3253dc] mx-auto" />
                  <span className="text-[9px] font-bold text-slate-700 block">
                    Cloud App 99.9%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#eb3b3b]" />
              <span className="text-xs font-bold text-slate-600">
                {data.aboutDetailSection.eyebrow}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#2b3445] leading-snug">
              {data.business.aboutTitle || data.aboutDetailSection.title}
            </h2>

            {(data.business.aboutText?.length
              ? data.business.aboutText
              : data.aboutDetailSection.paragraphs
            ).map((para, idx) => (
              <p
                key={idx}
                className="text-xs text-slate-400 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHẢN HỒI ("Khách hàng nói về chúng tôi" — 2 HORIZONTAL BLOCKS ON #f6f8fc) */}
      <section className="bg-[#f6f8fc] py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-slate-500 block">
              {data.reviewsSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2b3445] mt-1">
              {data.reviewsSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-5"
              >
                <img
                  src={
                    rev.avatar ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  }
                  alt={rev.author}
                  className="w-20 h-20 rounded-full object-cover shrink-0 shadow-md border-2 border-white"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-0.5 text-[#3253dc]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs italic text-slate-500 leading-relaxed">
                    {rev.content}
                  </p>
                  <p className="text-xs font-bold text-[#2b3445] pt-1">
                    {rev.author}{" "}
                    <span className="font-normal text-slate-400">
                      / {rev.role}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BLOG ("Nơi chia sẻ những thông tin bổ ích" — LEFT INTRO + 3 CARDS RIGHT) */}
      <section id="blog" className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 3 Cols */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#eb3b3b]" />
              <span className="text-xs font-bold text-slate-600">
                {data.blogSection.eyebrow}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#2b3445] leading-snug">
              {data.blogSection.title}
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              {data.blogSection.description}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedBlog(data.blogSection.posts[0])}
                className="bg-[#eb3b3b] hover:bg-[#d62c2c] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md shadow-red-500/20 transition-colors"
              >
                {data.blogSection.ctaText}
              </button>
            </div>
          </div>

          {/* Right 9 Cols: 3 CMS Blog Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.blogSection.posts.map((post, idx) => (
              <article
                key={post.id}
                onClick={() => setSelectedBlog(post)}
                className="cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Graphic Header matching CMS banners */}
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center p-4 text-center ${
                        idx === 0
                          ? "bg-emerald-900/75"
                          : idx === 1
                          ? "bg-sky-900/75"
                          : "bg-slate-900/75"
                      }`}
                    >
                      <span className="text-white font-black text-sm uppercase tracking-wider drop-shadow">
                        {post.badgeText}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-sm font-extrabold text-[#2b3445] line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-[#eb3b3b]">
                    <span>Xem Thêm</span>
                    <ChevronRight className="w-3 h-3 text-[#eb3b3b]" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOFT WAVE FOOTER (#f6f8fc) + DARK COPYRIGHT BAR */}
      <footer id="footer-contact" className="bg-[#f6f8fc] border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 text-xs text-slate-500">
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-3 space-y-3">
            {renderBrandLogo()}
            <ul className="space-y-2 text-[11px] pt-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#eb3b3b]"
                >
                  {primaryPhone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  {data.business.email.map((em) => (
                    <div key={em}>{em}</div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Col 2: Menu */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-extrabold text-[#2b3445]">Menu</h3>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a href="#top" className="text-[#eb3b3b] font-semibold">
                  ▸ Trang chủ
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#eb3b3b]">
                  ▸ Giới thiệu
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#eb3b3b]">
                  ▸ Blog chia sẻ
                </a>
              </li>
              <li>
                <a href="#missions" className="hover:text-[#eb3b3b]">
                  ▸ Tin tức sự kiện
                </a>
              </li>
              <li>
                <a href="#footer-contact" className="hover:text-[#eb3b3b]">
                  ▸ Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Blogs */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-extrabold text-[#2b3445]">Blogs</h3>
            <div className="space-y-3">
              {data.blogSection.posts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedBlog(post)}
                  className="cursor-pointer group"
                >
                  <h4 className="text-[11px] font-bold text-[#2b3445] group-hover:text-[#eb3b3b] leading-snug">
                    {post.title}
                  </h4>
                  <span className="text-[10px] text-slate-400">{post.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Đăng ký & Kết nối */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold text-[#2b3445]">Đăng ký</h3>
            <p className="text-[11px] text-slate-400">
              Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
            </p>
            <form onSubmit={handleNewsletter} className="relative flex">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email ..."
                className="w-full bg-white border border-slate-200 rounded px-3 py-2 pr-9 text-xs focus:outline-none focus:border-[#3253dc]"
              />
              <button
                type="submit"
                className="absolute right-0 inset-y-0 px-2.5 text-[#3253dc] hover:text-[#eb3b3b]"
                aria-label="Gửi"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {newsletterSent && (
              <p className="text-[11px] text-emerald-600 font-semibold">
                Đã đăng ký bản tin thành công!
              </p>
            )}

            <div className="pt-2">
              <h4 className="text-xs font-extrabold text-[#2b3445] mb-2">
                Kết nối với chúng tôi
              </h4>
              <div className="flex items-center gap-3 text-slate-400 font-bold">
                <a href="#top" className="hover:text-[#3253dc]">
                  f
                </a>
                <a href="#top" className="hover:text-[#eb3b3b]">
                  ig
                </a>
                <a href="#top" className="hover:text-[#3253dc]">
                  t
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1b1b1b] text-stone-400 text-[11px] py-3.5 px-4 text-center">
          © Bản quyền thuộc về {data.business.name}. Thiết kế website chuẩn SEO.
        </div>
      </footer>

      {/* BLOG DETAIL MODAL */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-extrabold text-[#2b3445]">
                {selectedBlog.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedBlog(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedBlog.fullContent}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedBlog(null);
                setConsultModalOpen(true);
              }}
              className="w-full bg-[#eb3b3b] text-white text-xs font-bold py-2.5 rounded-full"
            >
              Nhận Tư Vấn Giải Pháp Website & Cloud
            </button>
          </div>
        </div>
      )}

      {/* CONSULT MODAL */}
      {consultModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setConsultModalOpen(false)}
        >
          <div
            className="bg-white max-w-md w-full rounded-2xl p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-[#2b3445]">
                Đăng Ký Tư Vấn Hạ Tầng Số
              </h3>
              <button
                type="button"
                onClick={() => setConsultModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {consultSent ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <p className="text-sm font-bold text-[#2b3445]">
                  Đã gửi yêu cầu tư vấn!
                </p>
                <p className="text-xs text-slate-500">
                  Chuyên viên giải pháp của {data.business.name} sẽ liên hệ lại
                  ngay.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-3 text-xs">
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Họ và tên của bạn"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#eb3b3b]"
                />
                <input
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="Số điện thoại liên hệ"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#eb3b3b]"
                />
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#eb3b3b]"
                >
                  <option>Cloud Hosting & Tên miền</option>
                  <option>Thiết kế Website & Lập trình App</option>
                  <option>Chứng chỉ bảo mật SSL</option>
                  <option>Thiết kế bộ nhận diện & Logo</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#eb3b3b] hover:bg-[#d62c2c] text-white font-bold py-2.5 rounded-lg"
                >
                  Gửi Yêu Cầu Tư Vấn
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
