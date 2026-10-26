"use client";

import React, { useMemo, useState } from "react";
import {
  Award,
  Camera,
  CheckCircle2,
  ChevronDown,
  FileText,
  Flame,
  Lock,
  Mail,
  MapPin,
  Menu,
  Mic,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Video,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import leadGeneration16DefaultData, {
  type LeadGeneration16Data,
  type NgaDangBenefitBox
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

function renderBenefitIcon(icon: NgaDangBenefitBox["icon"]) {
  switch (icon) {
    case "target":
      return <Target className="h-5 w-5 text-[#FF3B9A]" />;
    case "script":
      return <FileText className="h-5 w-5 text-[#FF3B9A]" />;
    case "camera":
      return <Camera className="h-5 w-5 text-[#FF3B9A]" />;
    default:
      return <TrendingUp className="h-5 w-5 text-[#FF3B9A]" />;
  }
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = useMemo(
    () => adaptClonedTemplateData(leadGeneration16DefaultData, incomingData) as LeadGeneration16Data,
    [incomingData]
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string>(data.faqs[0]?.id || "faq-1");
  const [submitted, setSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    category: data.rightFormCard.businessCategories[0] || "Thời trang & Phụ kiện nữ/nam"
  });

  const primaryPhone = data.business.phone[0] || "0909 686 889";
  const primaryEmail = data.business.email[0] || "contact@ngadang.vn";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setLeadForm({
        fullName: "",
        phone: "",
        email: "",
        category: data.rightFormCard.businessCategories[0] || "Thời trang & Phụ kiện nữ/nam"
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#2B0652] text-white font-sans selection:bg-[#EC1E79] selection:text-white">
      {/* 1. HOT-PINK TOP UTILITY BAR (Matching LD019 top strip) */}
      <div className="bg-gradient-to-r from-[#EC1E79] via-[#D8167E] to-[#A61493] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
              <span>Học Viện Đào Tạo Livestream Thực Chiến Hàng Đầu Việt Nam</span>
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1 hover:text-yellow-200 transition font-semibold"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Hotline: {primaryPhone}</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href={`mailto:${primaryEmail}`}
              className="hidden sm:flex items-center gap-1 hover:text-yellow-200 transition"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{primaryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE NAVBAR (Matching LD019 NGADANG.VN header) */}
      <header className="sticky top-0 z-40 bg-white text-[#2B0652] shadow-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo: Pink Square [N] + NGADANG.VN LIVESTREAM NGHÌN ĐƠN */}
          <a href="#" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-[#FF1F8A] to-[#B5127B] text-white font-black text-2xl flex items-center justify-center shadow-md shadow-pink-500/30">
              N
            </div>
            <div className="leading-tight">
              <span className="block text-lg sm:text-xl font-black tracking-tight text-[#EC1E79]">
                NGADANG.VN
              </span>
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#5B189A]">
                LIVESTREAM NGHÌN ĐƠN
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold uppercase tracking-wider text-slate-700">
            <a href="#chuong-trinh-hoc" className="hover:text-[#EC1E79] transition">
              Chương trình học
            </a>
            <a href="#quyen-loi" className="hover:text-[#EC1E79] transition">
              Quyền lợi
            </a>
            <a href="#giang-vien" className="hover:text-[#EC1E79] transition">
              Giảng viên
            </a>
            <a href="#cam-nhan" className="hover:text-[#EC1E79] transition">
              Học viên thành công
            </a>
            <a href="#faqs" className="hover:text-[#EC1E79] transition">
              FAQs
            </a>
          </nav>

          {/* Right Auth & Hot-Pink Pill CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#dang-ky-funnel"
              className="hidden sm:inline-block text-xs font-bold text-slate-600 hover:text-[#EC1E79] transition"
            >
              Đăng nhập
            </a>
            <a
              href="#dang-ky-funnel"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EC1E79] to-[#9E198E] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-pink-500/30 hover:brightness-110 transition"
            >
              Đăng ký miễn phí ngay
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 text-[#2B0652]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 text-xs font-bold text-slate-700">
            <a
              href="#chuong-trinh-hoc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#EC1E79]"
            >
              Chương trình 200+ Videos
            </a>
            <a
              href="#quyen-loi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#EC1E79]"
            >
              Quyền lợi học viên
            </a>
            <a
              href="#cam-nhan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#EC1E79]"
            >
              Kết quả học viên nghìn đơn
            </a>
            <a
              href="#dang-ky-funnel"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#EC1E79] font-extrabold"
            >
              Đăng ký nhận vé miễn phí
            </a>
          </div>
        )}
      </header>

      {/* 3. CORE TWO-COLUMN LIVESTREAM ACADEMY FUNNEL (Exact match to LD019 webpage layout) */}
      <section className="relative py-10 lg:py-14 bg-gradient-to-b from-[#3A0B6E] via-[#2B0652] to-[#1F043D] overflow-hidden">
        {/* Ambient Magenta & Violet Glows */}
        <div className="pointer-events-none absolute -top-20 left-10 h-96 w-96 rounded-full bg-[#EC1E79]/25 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#8B2CF5]/25 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN (7 Cols): 200+ VIDEOS BADGE + SPEAKER BANNER + 2 FEATURE BOXES + CLASSROOM VIDEO + CHECKLIST */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Pill: (Play) 200+ VIDEOS */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF2A85] to-[#D8167E] text-white font-black text-xs uppercase tracking-wider shadow-lg">
                  <Play className="h-3.5 w-3.5 fill-white" />
                  <span>{data.funnelHero.videoCountBadge}</span>
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white leading-snug">
                  {data.funnelHero.topLeadLine}
                </h1>
              </div>

              {/* Featured Magenta-Purple Speaker Banner Card */}
              <div
                id="giang-vien"
                className="rounded-2xl bg-gradient-to-r from-[#5D139E] via-[#8E1689] to-[#D41876] p-5 sm:p-6 border border-pink-400/40 shadow-2xl grid sm:grid-cols-12 gap-5 items-center"
              >
                <div className="sm:col-span-4">
                  <div className="rounded-xl overflow-hidden border-2 border-white/50 aspect-[4/5] shadow-lg bg-[#3A0B6E]">
                    <img
                      src={data.funnelHero.speakerImage}
                      alt={data.funnelHero.speakerName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="sm:col-span-8 space-y-3">
                  <span className="inline-block px-3 py-1 rounded-md bg-white/15 text-yellow-300 text-[11px] font-extrabold uppercase tracking-wider">
                    LIVESTREAM &amp; TIKTOK SHOP MASTERCLASS
                  </span>
                  <h2 className="text-lg sm:text-xl font-black uppercase text-white leading-snug">
                    {data.funnelHero.bannerTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-pink-100 font-semibold">
                    {data.funnelHero.bannerSpeakerLine}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="px-3 py-1 rounded-full bg-black/25 text-[11px] font-bold text-white flex items-center gap-1">
                      <Mic className="h-3 w-3 text-yellow-300" /> Luyện giọng &amp; Kịch bản chốt sale
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/25 text-[11px] font-bold text-white flex items-center gap-1">
                      <Video className="h-3 w-3 text-yellow-300" /> Thực chiến đa sàn
                    </span>
                  </div>
                </div>
              </div>

              {/* 2x2 Glassmorphism Feature Boxes (Matching LD019 purple cards) */}
              <div id="quyen-loi" className="grid sm:grid-cols-2 gap-4">
                {data.coreFeatureBoxes.map((box) => (
                  <div
                    key={box.id}
                    className="p-5 rounded-2xl bg-[#3D0E75]/80 border border-purple-400/30 hover:border-[#FF3B9A] transition space-y-2.5 shadow-lg"
                  >
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                      {renderBenefitIcon(box.icon)}
                    </div>
                    <h3 className="text-sm font-extrabold text-white leading-snug">{box.title}</h3>
                    <p className="text-xs text-purple-200 leading-relaxed">{box.description}</p>
                  </div>
                ))}
              </div>

              {/* Highlighted Copy Paragraph */}
              <div className="p-4 rounded-xl bg-[#481188]/60 border-l-4 border-[#EC1E79] text-xs sm:text-sm text-purple-100 leading-relaxed">
                <strong className="text-yellow-300">Cam kết giá trị thực:</strong>{" "}
                {data.funnelHero.highlightParagraph}
              </div>

              {/* Classroom Training Hall Video Player Card */}
              <div className="rounded-2xl overflow-hidden border-2 border-purple-400/40 bg-[#1B0333] shadow-2xl">
                <div
                  onClick={() => setVideoModalOpen(true)}
                  className="relative aspect-[16/9] cursor-pointer group overflow-hidden"
                >
                  <img
                    src={data.funnelHero.classroomVideoThumbnail}
                    alt={data.funnelHero.classroomVideoCaption}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B0333] via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white text-[#EC1E79] flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
                      <Play className="h-8 w-8 fill-[#EC1E79] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                    <span className="font-bold bg-black/50 px-3 py-1 rounded-full">
                      ▶ Xem video giới thiệu lớp học thực chiến (03:45)
                    </span>
                  </div>
                </div>
                <div className="px-5 py-3 bg-[#2B0652] text-xs text-purple-200 font-medium">
                  {data.funnelHero.classroomVideoCaption}
                </div>
              </div>

              {/* Green Checkmark Takeaways List (Matching bottom left of LD019 preview) */}
              <div className="rounded-2xl bg-[#340963] border border-purple-400/25 p-6 space-y-4">
                <h3 className="text-lg font-black uppercase text-yellow-300">
                  Bí Quyết Độc Quyền Bạn Sẽ Nắm Vững Trong Khóa Học:
                </h3>
                <ul className="space-y-3">
                  {data.keyTakeawaysChecklist.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/95">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT STICKY LEAD CAPTURE CARD (5 Cols — Matching LD019 right column) */}
            <div id="dang-ky-funnel" className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              {/* Top Heading Above Card */}
              <div className="text-center space-y-1">
                <h2 className="text-lg sm:text-xl font-black uppercase text-white tracking-wide">
                  {data.rightFormCard.topHeaderTitle}
                </h2>
                <p className="text-xs sm:text-sm font-bold text-yellow-300 underline decoration-pink-400 underline-offset-4">
                  {data.rightFormCard.topHeaderSubtitle}
                </p>
              </div>

              {/* White Funnel Card with Green Header Banner & Pink Bordered Form */}
              <div className="rounded-3xl bg-white text-slate-800 shadow-2xl overflow-hidden border-2 border-pink-300">
                {/* Green Urgency Top Banner */}
                <div className="bg-[#00A651] text-white px-5 py-3.5 text-center text-xs font-extrabold leading-snug">
                  {data.rightFormCard.greenNoticeBanner}
                </div>

                <div className="p-6 space-y-5">
                  {/* Trust / Security Badge */}
                  <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-purple-50 border border-purple-100 text-[#5B189A] text-xs font-extrabold">
                    <ShieldCheck className="h-4 w-4 text-[#EC1E79]" />
                    <span>{data.rightFormCard.securityBadge}</span>
                  </div>

                  {/* Pink-Framed Form Box */}
                  <div className="rounded-2xl border-2 border-[#EC1E79] overflow-hidden">
                    <div className="bg-gradient-to-r from-[#EC1E79] to-[#A61493] text-white py-3 px-4 text-center text-xs font-black uppercase tracking-wider">
                      {data.rightFormCard.formTitle}
                    </div>

                    {submitted ? (
                      <div className="p-6 text-center space-y-3 bg-pink-50/50">
                        <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <h3 className="text-base font-black text-[#2B0652] uppercase">
                          Đăng Ký Nhận Khóa Học Thành Công!
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Trợ lý học vụ của <strong>Nga Đặng Academy</strong> đã gửi link học 200+
                          Videos và vé Zoom qua Zalo số <strong>{leadForm.phone}</strong>.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="p-5 space-y-3.5 bg-white">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Họ và tên của bạn *
                          </label>
                          <input
                            type="text"
                            required
                            value={leadForm.fullName}
                            onChange={(e) =>
                              setLeadForm({ ...leadForm, fullName: e.target.value })
                            }
                            placeholder="Nhập họ và tên..."
                            className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#EC1E79]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Số điện thoại Zalo (Nhận tài khoản &amp; lịch Zoom) *
                          </label>
                          <input
                            type="tel"
                            required
                            value={leadForm.phone}
                            onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                            placeholder="0909 xxx xxx"
                            className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#EC1E79]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Địa chỉ Email nhận 36 kịch bản mẫu
                          </label>
                          <input
                            type="email"
                            value={leadForm.email}
                            onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                            placeholder="email@domain.com"
                            className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#EC1E79]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Ngành hàng bạn đang kinh doanh
                          </label>
                          <select
                            value={leadForm.category}
                            onChange={(e) =>
                              setLeadForm({ ...leadForm, category: e.target.value })
                            }
                            className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#EC1E79]"
                          >
                            {data.rightFormCard.businessCategories.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8E1689] via-[#C91882] to-[#EC1E79] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-pink-500/30 transition"
                        >
                          {data.rightFormCard.ctaButtonText}
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Bonus Perks Footer inside Card */}
                  <div className="space-y-2 pt-1 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-[#EC1E79] shrink-0" />
                      <span>
                        Tặng kèm: <strong>Ebook 36 Kịch Bản Chốt Đơn Livestream</strong> trị giá
                        990.000đ
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Thông tin của bạn được cam kết bảo mật tuyệt đối 100%.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILED 4-MODULE CURRICULUM ("LỘ TRÌNH 200+ VIDEO ĐÀO TẠO") */}
      <section id="chuong-trinh-hoc" className="py-16 bg-[#230443] border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="px-4 py-1 rounded-full bg-[#EC1E79]/20 border border-[#EC1E79]/50 text-pink-300 text-xs font-extrabold uppercase tracking-widest">
              LỘ TRÌNH CẦM TAY CHỈ VIỆC
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
              Nội Dung Chi Tiết 4 Học Phần Thực Chiến
            </h2>
            <p className="text-xs sm:text-sm text-purple-200">
              Hệ thống bài giảng chia nhỏ từng bước ngắn gọn, xem lại trọn đời trên cả điện thoại và
              máy tính.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.courseModules.map((mod) => (
              <div
                key={mod.id}
                className="rounded-2xl bg-[#340963] border border-purple-400/30 p-6 space-y-4 hover:border-[#EC1E79] transition shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#EC1E79] to-[#9E198E] text-white text-xs font-black">
                    {mod.number}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-yellow-300 font-bold">
                    <span>{mod.duration}</span>
                    <span>•</span>
                    <span>{mod.lessonsCount}</span>
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-white">{mod.title}</h3>

                <ul className="space-y-2.5 text-xs sm:text-sm text-purple-100">
                  {mod.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STUDENT SUCCESS STORIES ("KẾT QUẢ HỌC VIÊN BÙNG NỔ NGHÌN ĐƠN") */}
      <section id="cam-nhan" className="py-16 bg-[#2B0652] border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-yellow-300">
              HƠN 15.000+ HỌC VIÊN ĐÃ ÁP DỤNG THÀNH CÔNG
            </span>
            <h2 className="text-3xl font-black uppercase text-white">
              Cảm Nhận Học Viên Sau Khóa Học Nga Đặng
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.studentResults.map((st) => (
              <div
                key={st.id}
                className="rounded-2xl bg-[#3A0B6E] border border-purple-400/30 p-6 flex flex-col justify-between space-y-5 shadow-xl"
              >
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold">
                    {st.revenueMetric}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
                    “{st.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-purple-400/20">
                  <img
                    src={st.avatar}
                    alt={st.name}
                    className="h-11 w-11 rounded-full object-cover border-2 border-[#EC1E79]"
                  />
                  <div>
                    <h4 className="text-xs font-extrabold text-white">{st.name}</h4>
                    <p className="text-[11px] text-pink-300">{st.shopName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs SECTION */}
      <section id="faqs" className="py-16 bg-[#1F043D] border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">
              Câu Hỏi Thường Gặp (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-purple-200">
              Giải đáp mọi thắc mắc trước khi bạn bắt đầu hành trình xây kênh &amp; Livestream nghìn
              đơn.
            </p>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#2E085A] border border-purple-400/30 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-extrabold text-sm text-white hover:text-yellow-300 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-[#EC1E79]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-purple-100 leading-relaxed border-t border-purple-400/15 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#15022B] border-t border-purple-500/20 py-8 px-4 text-xs text-purple-200/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-[#EC1E79] text-white font-black flex items-center justify-center">
              N
            </div>
            <p>
              © {new Date().getFullYear()} <strong>{data.business.name}</strong> —{" "}
              {data.business.address}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${primaryPhone.replace(/\s+/g, "")}`} className="hover:text-white">
              Hotline: {primaryPhone}
            </a>
            <a href="#dang-ky-funnel" className="text-yellow-300 font-bold hover:underline">
              Đăng ký miễn phí &uarr;
            </a>
          </div>
        </div>
      </footer>

      {/* VIDEO PREVIEW MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#2B0652] border-2 border-[#EC1E79] rounded-2xl max-w-lg w-full p-6 relative text-center space-y-4 shadow-2xl">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 text-white"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="h-14 w-14 rounded-full bg-[#EC1E79] text-white flex items-center justify-center mx-auto">
              <Video className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-black uppercase text-white">
              Trải Nghiệm Trọn Bộ 200+ Video Bài Giảng Nga Đặng Academy
            </h3>
            <p className="text-xs text-purple-200 leading-relaxed">
              Điền thông tin tại biểu mẫu đăng ký để nhận ngay tài khoản học thử miễn phí kèm bộ 36
              kịch bản Livestream nghìn đơn.
            </p>
            <a
              href="#dang-ky-funnel"
              onClick={() => setVideoModalOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#EC1E79] to-[#9E198E] text-white font-extrabold text-xs uppercase"
            >
              Điền Form Nhận Tài Khoản Ngay
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
