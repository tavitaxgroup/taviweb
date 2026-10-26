"use client";

import React, { useMemo, useState } from "react";
import {
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Crown,
  Flame,
  Gift,
  MapPin,
  Menu,
  Music,
  Phone,
  Sparkles,
  Star,
  Users,
  Utensils,
  Wine,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import leadGeneration15DefaultData, {
  type ChaoDinnerComboItem,
  type LeadGeneration15Data
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = useMemo(
    () => adaptClonedTemplateData(leadGeneration15DefaultData, incomingData) as LeadGeneration15Data,
    [incomingData]
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeComboCategory, setActiveComboCategory] = useState<string>("Tất cả Combo");
  const [selectedCombo, setSelectedCombo] = useState<ChaoDinnerComboItem | null>(null);
  const [selectedZoneId, setSelectedZoneId] = useState<string>(
    data.seatingZones[0]?.id || "zone-vip"
  );
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    phone: "",
    date: "",
    guestCount: "2 thực khách",
    comboName: data.dinnerCombos[1]?.name || "Set Tiệc Hoàng Gia Chào Show",
    note: ""
  });

  const primaryPhone = data.business.phone[0] || "0901 888 999";
  const primaryEmail = data.business.email[0] || "booking@chaodinner.vn";

  const filteredCombos = useMemo(() => {
    if (activeComboCategory === "Tất cả Combo") return data.dinnerCombos;
    return data.dinnerCombos.filter((item) => item.category === activeComboCategory);
  }, [data.dinnerCombos, activeComboCategory]);

  const activeZone = useMemo(
    () =>
      data.seatingZones.find((z) => z.id === selectedZoneId) ||
      data.seatingZones[0],
    [data.seatingZones, selectedZoneId]
  );

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setSelectedCombo(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#260705] text-[#FDF6E9] font-sans selection:bg-[#F2D28B] selection:text-[#3A0A07]">
      {/* 1. STICKY LACQUER CRIMSON & GOLD HEADER */}
      <header className="sticky top-0 z-40 bg-[#3B0A07]/95 backdrop-blur-md border-b border-[#F2D28B]/20">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Organic Gold Ring "CHÀO SHOW" Emblem matching LD018 */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="px-4 py-1.5 rounded-[45%_55%_48%_52%/55%_45%_55%_45%] border-2 border-[#F2D28B] bg-[#5E110B] shadow-md shadow-black/40 flex items-center gap-1.5">
              <span className="text-xl font-black tracking-wider text-[#F2D28B]">CHÀO</span>
              <span className="h-5 w-5 rounded-full bg-[#F2D28B] text-[#4A0D08] text-[7px] font-black flex items-center justify-center uppercase">
                SHOW
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2D28B]">
                ChaoDinner Sài Gòn
              </p>
              <p className="text-[11px] text-[#E6C79C]/80">Nghệ Thuật &amp; Ẩm Thực Bản Địa</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#FDF6E9]/90">
            <a href="#chuong-trinh" className="hover:text-[#F2D28B] transition">
              Chương Trình Nghệ Thuật
            </a>
            <a href="#thuc-don" className="hover:text-[#F2D28B] transition">
              Thực Đơn &amp; Ưu Đãi
            </a>
            <a href="#so-do-ghe" className="hover:text-[#F2D28B] transition">
              Khán Phòng VIP
            </a>
            <a href="#danh-gia" className="hover:text-[#F2D28B] transition">
              Cảm Nhận Thực Khách
            </a>
            <a href="#dat-tiec" className="hover:text-[#F2D28B] transition">
              Đặt Bàn
            </a>
          </nav>

          {/* Right Hotline + CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="hidden md:flex items-center gap-1.5 text-xs font-bold text-[#F2D28B] px-3 py-2 rounded-full border border-[#F2D28B]/30 bg-black/20 hover:bg-black/40 transition"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{primaryPhone}</span>
            </a>

            <a
              href="#dat-tiec"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F2D28B] via-[#E5B85B] to-[#D49B38] text-[#3B0A07] font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#F2D28B]/20 hover:brightness-110 transition"
            >
              Đặt Tiệc Ngay
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#F2D28B]/30 text-[#F2D28B]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#2E0805] border-t border-[#F2D28B]/20 px-4 py-4 space-y-2.5 text-xs font-bold uppercase tracking-wider">
            <a
              href="#chuong-trinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#F2D28B]"
            >
              Chương Trình Nghệ Thuật 3 Miền
            </a>
            <a
              href="#thuc-don"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#FDF6E9]"
            >
              Thực Đơn Tiệc Tối &amp; Combo -25%
            </a>
            <a
              href="#so-do-ghe"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#FDF6E9]"
            >
              Sơ Đồ Khán Phòng &amp; Bàn VIP
            </a>
            <a
              href="#dat-tiec"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#F2D28B]"
            >
              Đặt Bàn &amp; Nhận Voucher
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (CRIMSON STAGE + TRADITIONAL INSTRUMENT PERFORMER + WARM OCHRE WAVES) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#8B1E16] via-[#68140E] to-[#3B0A07] pt-10 pb-24 lg:py-20">
        {/* Stage Ambient Background Image Overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: `url(${data.heroMeta.stageBackgroundImage})` }}
        />
        {/* Theatrical Warm Spotlight Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#E89B48]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-10 h-96 w-96 rounded-full bg-[#D93829]/25 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Gold CHÀO Emblem + Tall Condensed Gold Display Headline */}
            <div className="lg:col-span-7 space-y-6">
              {/* Organic Gold Oval Logo Badge */}
              <div className="inline-flex items-center gap-3">
                <div className="px-6 py-2.5 rounded-[46%_54%_50%_50%/55%_45%_55%_45%] border-[3px] border-[#F2D28B] bg-[#6E160F]/90 shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-black tracking-widest text-[#F2D28B]">
                      CHÀO
                    </span>
                    <span className="h-7 w-7 rounded-full bg-[#F2D28B] text-[#5E110B] text-[9px] font-black flex items-center justify-center uppercase">
                      SHOW
                    </span>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-black/30 border border-[#F2D28B]/40 text-[#F2D28B] text-xs font-bold">
                  ★ {data.heroMeta.showTime}
                </span>
              </div>

              {/* Bold Condensed Gold Display Headline matching LD018 */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black uppercase tracking-tight text-[#F2D28B] leading-[1.06] drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
                CHƯƠNG TRÌNH
                <span className="block">NGHỆ THUẬT ĐẬM</span>
                <span className="block">BẢN SẮC DÂN TỘC</span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-[#F5DCAB] max-w-2xl leading-relaxed">
                Tạo nên đêm tiệc ẩm thực hiện đại mà vẫn{" "}
                <span className="text-[#F2D28B] font-extrabold underline decoration-[#E08E45]">
                  “đậm vị” Việt Nam
                </span>{" "}
                — thưởng thức thực đơn 9 món Bắc - Trung - Nam cùng 12 nhạc cụ dân tộc biểu diễn
                sống động.
              </p>

              {/* 3 Key Highlights */}
              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                {data.heroMeta.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/25 border border-[#F2D28B]/25 flex items-start gap-2.5"
                  >
                    <Sparkles className="h-4 w-4 text-[#F2D28B] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#FDF6E9]/90 leading-snug font-medium">
                      {hl}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#dat-tiec"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F2D28B] via-[#E5B85B] to-[#D49B38] text-[#3B0A07] font-black text-sm uppercase tracking-wider shadow-xl shadow-black/30 hover:scale-[1.02] transition"
                >
                  {data.hero.ctaText}
                </a>
                <a
                  href="#thuc-don"
                  className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-[#F2D28B]/40 text-[#F2D28B] font-bold text-sm transition flex items-center gap-2"
                >
                  <Utensils className="h-4 w-4" />
                  <span>Xem Thực Đơn 9 Món</span>
                </a>
              </div>
            </div>

            {/* Right Column: Traditional Vietnamese Musician Stage Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl p-3 bg-gradient-to-b from-[#F2D28B]/40 via-[#F2D28B]/15 to-transparent border border-[#F2D28B]/40 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#3B0A07]">
                  <img
                    src={data.heroMeta.musicianImage}
                    alt="Nghệ sĩ biểu diễn nhạc cụ dân tộc Chào Show"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#260705] via-transparent to-transparent" />

                  {/* Bottom Stage Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#3B0A07]/90 backdrop-blur-md border border-[#F2D28B]/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#F2D28B]">
                          Biểu Diễn Trực Tiếp Hàng Đêm
                        </p>
                        <p className="text-sm font-extrabold text-white mt-0.5">
                          Độc Tấu Đàn T&apos;rưng, K&apos;ni &amp; Dàn Nhạc Dân Tộc
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-[#F2D28B] text-[#3B0A07] flex items-center justify-center shrink-0">
                        <Music className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Promo Pill */}
                <div className="absolute -top-4 -right-3 px-4 py-2 rounded-full bg-[#F2D28B] text-[#3B0A07] font-black text-xs shadow-lg flex items-center gap-1.5">
                  <Flame className="h-4 w-4 text-[#8B1E16]" />
                  <span>ƯU ĐÃI ĐẶT SỚM -25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Warm Ochre / Amber Curved Waves at Bottom Left matching LD018 */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 w-full h-16 sm:h-24 text-[#260705]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C320,120 620,0 1440,90 L1440,120 L0,120 Z"
            fill="#C86D2D"
            fillOpacity="0.45"
          />
          <path
            d="M0,70 C400,130 820,30 1440,105 L1440,120 L0,120 Z"
            fill="#260705"
          />
        </svg>
      </section>

      {/* 3. CULTURAL & MUSICAL 3-ACT JOURNEY ("HÀNH TRÌNH DI SẢN BẮC - TRUNG - NAM") */}
      <section id="chuong-trinh" className="py-16 lg:py-20 bg-[#260705]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#4A0E0A] border border-[#F2D28B]/30 text-[#F2D28B] text-xs font-bold uppercase tracking-widest">
              <Music className="h-3.5 w-3.5" /> Ba Chương Nghệ Thuật &amp; Ẩm Thực
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#F2D28B] tracking-tight">
              Hành Trình Di Sản Bắc – Trung – Nam
            </h2>
            <p className="text-sm text-[#E6C79C]/80">
              Mỗi chương nhạc mở ra một vùng đất văn hóa cùng các tuyệt phẩm ẩm thực được dâng lên
              bàn tiệc theo đúng nhịp điệu sân khấu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {data.culturalActs.map((act) => (
              <div
                key={act.id}
                className="rounded-2xl bg-gradient-to-b from-[#3E0C08] to-[#2B0805] border border-[#F2D28B]/25 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#F2D28B]/60 transition"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E0C08] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#F2D28B] text-[#3B0A07] font-black text-xs">
                      {act.actNumber}
                    </span>
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#F2D28B] text-xs font-semibold flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {act.duration}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#E08E45]">
                      {act.region}
                    </p>
                    <h3 className="text-xl font-extrabold text-[#F2D28B] leading-snug">
                      {act.title}
                    </h3>
                    <p className="text-xs text-[#FDF6E9]/80 leading-relaxed">{act.description}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#F2D28B]/15 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <Music className="h-4 w-4 text-[#F2D28B] shrink-0 mt-0.5" />
                    <p className="text-[#FDF6E9]/90">
                      <strong className="text-[#F2D28B]">Nhạc cụ:</strong> {act.instruments}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Utensils className="h-4 w-4 text-[#E08E45] shrink-0 mt-0.5" />
                    <p className="text-[#FDF6E9]/90">
                      <strong className="text-[#F2D28B]">Ẩm thực:</strong> {act.culinaryPairing}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DINNER COMBOS & PROMOTIONS ("THỰC ĐƠN ĐẶT TIỆC & KHUYẾN MÃI") */}
      <section id="thuc-don" className="py-16 lg:py-20 bg-[#310906] border-y border-[#F2D28B]/15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E08E45]">
                ƯU ĐÃI ĐẶT BÀN TRỰC TUYẾN
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#F2D28B]">
                Thực Đơn Tiệc Tối &amp; Combo Vé Show
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {data.comboCategories.map((cat) => {
                const active = activeComboCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveComboCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                      active
                        ? "bg-[#F2D28B] text-[#3B0A07] shadow-md"
                        : "bg-[#4A0E0A] text-[#FDF6E9]/80 hover:text-[#F2D28B] border border-[#F2D28B]/20"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3x2 Combo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCombos.map((combo) => (
              <div
                key={combo.id}
                className="rounded-2xl bg-[#240604] border border-[#F2D28B]/25 hover:border-[#F2D28B] overflow-hidden shadow-xl flex flex-col justify-between transition group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={combo.image}
                      alt={combo.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    {combo.badgeText && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#D93829] text-[#F2D28B] border border-[#F2D28B]/50 font-black text-[11px] uppercase shadow-md">
                        {combo.badgeText}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/75 text-[#F2D28B] text-xs font-bold">
                      {combo.coursesCount}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#E6C79C]">
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-[#F2D28B]" /> {combo.guestCount}
                      </span>
                      <span className="text-[#E08E45] font-semibold">{combo.category}</span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#F2D28B] leading-snug">
                      {combo.name}
                    </h3>

                    <ul className="space-y-2 text-xs text-[#FDF6E9]/85">
                      {combo.highlights.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#F2D28B] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-[#F2D28B]/15 flex items-center justify-between gap-3 bg-[#1D0403]">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-[#F2D28B]">{combo.price}</span>
                      {combo.oldPrice && (
                        <span className="text-xs text-[#E6C79C]/50 line-through">
                          {combo.oldPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#E6C79C]/75">{combo.unit}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCombo(combo);
                      setBookingForm((prev) => ({ ...prev, comboName: combo.name }));
                    }}
                    className="px-4 py-2.5 rounded-full bg-[#F2D28B] hover:bg-[#e5be6b] text-[#3B0A07] font-extrabold text-xs uppercase tracking-wider transition shrink-0"
                  >
                    Giữ Chỗ Ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEATING ZONES & STAGE EXPERIENCE ("SƠ ĐỒ KHÁN PHÒNG & KHÔNG GIAN") */}
      <section id="so-do-ghe" className="py-16 lg:py-20 bg-[#260705]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Interactive Seating Selector (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E08E45]">
                <Crown className="h-4 w-4 text-[#F2D28B]" /> Không Gian Thưởng Lãm Đẳng Cấp
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#F2D28B] leading-tight">
                Lựa Chọn Vị Trí Bàn Tiệc Lý Tưởng Của Bạn
              </h2>
              <p className="text-xs sm:text-sm text-[#E6C79C]/85 leading-relaxed">
                Khán phòng Chào Show được thiết kế theo kiến trúc nhà rông và đình làng Việt đương
                đại với chất liệu tre uốn lượn, sơn mài đỏ son và âm học tự nhiên hoàn hảo.
              </p>

              <div className="space-y-3">
                {data.seatingZones.map((zone) => {
                  const isSelected = zone.id === activeZone?.id;
                  return (
                    <div
                      key={zone.id}
                      onClick={() => setSelectedZoneId(zone.id)}
                      className={`cursor-pointer p-5 rounded-2xl border transition ${
                        isSelected
                          ? "bg-[#4A0E0A] border-[#F2D28B] shadow-lg"
                          : "bg-[#310906]/70 border-[#F2D28B]/20 hover:border-[#F2D28B]/50"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base font-extrabold text-[#F2D28B]">{zone.name}</h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F2D28B]/20 text-[#F2D28B] text-[10px] font-bold">
                          {zone.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#E08E45] font-semibold mb-3">
                        {zone.priceNote} • {zone.capacity}
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#FDF6E9]/85">
                        {zone.perks.map((perk, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#F2D28B] shrink-0 mt-0.5" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 2x2 Gallery & Stage Visual (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {data.galleryImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden border-2 border-[#F2D28B]/30 aspect-[4/3] shadow-lg"
                  >
                    <img
                      src={imgUrl}
                      alt={`Không gian ẩm thực Chào Show ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#5E110B] to-[#3B0A07] border border-[#F2D28B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-12 rounded-xl bg-[#F2D28B] text-[#3B0A07] flex items-center justify-center shrink-0">
                    <Wine className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#F2D28B]">
                      Đặt Tiệc Đoàn &amp; Gala Doanh Nghiệp (10 – 80 khách)
                    </h4>
                    <p className="text-xs text-[#FDF6E9]/80">
                      Tặng gói thiết kế Menu riêng &amp; màn chào mừng nhạc cụ dân tộc độc quyền.
                    </p>
                  </div>
                </div>
                <a
                  href="#dat-tiec"
                  className="px-4 py-2.5 rounded-full bg-[#F2D28B] text-[#3B0A07] font-extrabold text-xs shrink-0"
                >
                  Nhận Báo Giá Đoàn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GUEST REVIEWS ("CẢM NHẬN THỰC KHÁCH & DU KHÁCH QUỐC TẾ") */}
      <section id="danh-gia" className="py-16 bg-[#310906] border-t border-[#F2D28B]/15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E08E45]">
              4.96/5 SAO TRÊN TRIPADVISOR &amp; GOOGLE MAPS
            </span>
            <h2 className="text-3xl font-black uppercase text-[#F2D28B]">
              Thực Khách Nói Gì Về Đêm Tiệc Chào Show?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((item: any) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#240604] border border-[#F2D28B]/20 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#F2D28B]">
                    {Array.from({ length: item.rating || 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F2D28B]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#FDF6E9]/90 leading-relaxed italic">
                    “{item.content}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#F2D28B]/15">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="h-11 w-11 rounded-full object-cover border border-[#F2D28B]"
                  />
                  <div>
                    <h4 className="text-xs font-extrabold text-[#F2D28B]">{item.author}</h4>
                    <p className="text-[11px] text-[#E6C79C]/75">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RESERVATION & VOUCHER FUNNEL FORM ("ĐẶT BÀN & NHẬN VOUCHER -25%") */}
      <section
        id="dat-tiec"
        className="py-16 lg:py-20 bg-gradient-to-b from-[#4A0E0A] to-[#220604] border-t border-[#F2D28B]/25"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Perks & Contact Info (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2D28B]/15 border border-[#F2D28B]/40 text-[#F2D28B] text-xs font-bold">
                <Gift className="h-3.5 w-3.5" /> GIỮ CHỖ SỚM — ƯU ĐÃI ĐẶC QUYỀN
              </span>

              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#F2D28B] leading-tight">
                Đặt Bàn Tiệc Chào Show &amp; Nhận Ngay Ưu Đãi 25%
              </h2>

              <p className="text-sm text-[#E6C79C]/90 leading-relaxed">
                Do số lượng ghế VIP sát sân khấu giới hạn chỉ 120 thực khách mỗi đêm để đảm bảo
                chất lượng phục vụ Fine Dining, quý khách vui lòng đặt lịch trước để được giữ vị
                trí đẹp nhất.
              </p>

              <div className="space-y-4">
                {data.vipPartyPerks.map((perk) => (
                  <div
                    key={perk.id}
                    className="p-4 rounded-xl bg-black/25 border border-[#F2D28B]/20 flex items-start gap-3.5"
                  >
                    <div className="h-9 w-9 rounded-lg bg-[#F2D28B] text-[#3B0A07] flex items-center justify-center shrink-0 font-black">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#F2D28B]">{perk.title}</h4>
                      <p className="text-xs text-[#FDF6E9]/80 mt-0.5">{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 space-y-2 text-xs text-[#E6C79C]">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#F2D28B]" />
                  <span>
                    <strong>Địa chỉ:</strong> {data.business.address}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#F2D28B]" />
                  <span>
                    <strong>Giờ mở cửa:</strong> {data.business.workingHours}
                  </span>
                </p>
              </div>
            </div>

            {/* Right Gold-Framed Reservation Form Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#2B0805] border-2 border-[#F2D28B] p-6 sm:p-8 shadow-2xl">
                {bookingSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-[#F2D28B] text-[#3B0A07] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h3 className="text-2xl font-black text-[#F2D28B] uppercase">
                      Giữ Chỗ &amp; Kích Hoạt Ưu Đãi Thành Công!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FDF6E9]/85 max-w-md mx-auto">
                      Bộ phận Lễ tân VIP của <strong>{data.business.name}</strong> sẽ liên hệ qua số
                      điện thoại <strong>{bookingForm.phone}</strong> trong vòng 5 phút để gửi sơ đồ
                      bàn và mã giảm 25%.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="text-center pb-3 border-b border-[#F2D28B]/20">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#E08E45]">
                        PHIẾU ĐẶT TIỆC &amp; VÉ XEM SHOW
                      </span>
                      <h3 className="text-xl font-black uppercase text-[#F2D28B] mt-1">
                        Đăng Ký Giữ Bàn VIP Hàng Đầu
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#F2D28B] mb-1.5">
                          Họ và tên quý khách *
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingForm.fullName}
                          onChange={(e) =>
                            setBookingForm({ ...bookingForm, fullName: e.target.value })
                          }
                          placeholder="Nguyễn Minh Quân"
                          className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-4 py-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F2D28B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#F2D28B] mb-1.5">
                          Số điện thoại nhận vé Zalo *
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookingForm.phone}
                          onChange={(e) =>
                            setBookingForm({ ...bookingForm, phone: e.target.value })
                          }
                          placeholder="0901 xxx xxx"
                          className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-4 py-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F2D28B]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#F2D28B] mb-1.5">
                          Ngày dự tiệc *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={bookingForm.date}
                            onChange={(e) =>
                              setBookingForm({ ...bookingForm, date: e.target.value })
                            }
                            className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#F2D28B]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#F2D28B] mb-1.5">
                          Số lượng thực khách *
                        </label>
                        <select
                          value={bookingForm.guestCount}
                          onChange={(e) =>
                            setBookingForm({ ...bookingForm, guestCount: e.target.value })
                          }
                          className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#F2D28B]"
                        >
                          <option value="2 thực khách (Bàn Cặp Đôi)">
                            2 thực khách (Bàn Cặp Đôi)
                          </option>
                          <option value="4 - 6 thực khách (Bàn Gia Đình)">
                            4 - 6 thực khách (Bàn Gia Đình)
                          </option>
                          <option value="8 - 12 thực khách (Bàn VIP Đối Tác)">
                            8 - 12 thực khách (Bàn VIP Đối Tác)
                          </option>
                          <option value="Đoàn từ 15+ khách (Gala / Sự kiện)">
                            Đoàn từ 15+ khách (Gala / Sự kiện)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#F2D28B] mb-1.5">
                        Chọn Gói Thực Đơn / Combo Ưu Đãi
                      </label>
                      <select
                        value={bookingForm.comboName}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, comboName: e.target.value })
                        }
                        className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#F2D28B]"
                      >
                        {data.dinnerCombos.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name} — {c.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#F2D28B] mb-1.5">
                        Yêu cầu đặc biệt (Trang trí sinh nhật, kỷ niệm, ăn chay...)
                      </label>
                      <textarea
                        rows={2}
                        value={bookingForm.note}
                        onChange={(e) => setBookingForm({ ...bookingForm, note: e.target.value })}
                        placeholder="Ví dụ: Bàn sát sân khấu, tặng hoa kỷ niệm ngày cưới..."
                        className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F2D28B]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F2D28B] via-[#E5B85B] to-[#D49B38] text-[#3B0A07] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition"
                    >
                      Xác Nhận Giữ Bàn &amp; Nhận Voucher -25%
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#160302] border-t border-[#F2D28B]/15 py-8 px-4 text-xs text-[#E6C79C]/70">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong className="text-[#F2D28B]">{data.business.name}</strong> —{" "}
            {data.business.address}
          </p>
          <div className="flex items-center gap-5">
            <a href={`tel:${primaryPhone.replace(/\s+/g, "")}`} className="hover:text-[#F2D28B]">
              Hotline: {primaryPhone}
            </a>
            <a href={`mailto:${primaryEmail}`} className="hover:text-[#F2D28B]">
              {primaryEmail}
            </a>
          </div>
        </div>
      </footer>

      {/* QUICK COMBO MODAL */}
      {selectedCombo && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#2B0805] border-2 border-[#F2D28B] rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCombo(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-[#F2D28B]"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#F2D28B]/20">
                <img
                  src={selectedCombo.image}
                  alt={selectedCombo.name}
                  className="h-14 w-20 rounded-lg object-cover"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#E08E45]">
                    {selectedCombo.price} {selectedCombo.unit}
                  </span>
                  <h4 className="text-xs font-extrabold text-[#F2D28B] line-clamp-2">
                    {selectedCombo.name}
                  </h4>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={bookingForm.fullName}
                  onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })}
                  placeholder="Họ và tên quý khách *"
                  className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-3.5 py-2.5 text-xs text-white"
                />
                <input
                  type="tel"
                  required
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  placeholder="Số điện thoại Zalo *"
                  className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-3.5 py-2.5 text-xs text-white"
                />
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-3 py-2.5 text-xs text-white"
                  />
                  <select
                    value={bookingForm.guestCount}
                    onChange={(e) => setBookingForm({ ...bookingForm, guestCount: e.target.value })}
                    className="w-full rounded-xl bg-[#1A0402] border border-[#F2D28B]/30 px-3 py-2.5 text-xs text-white"
                  >
                    <option value="2 khách">2 khách</option>
                    <option value="4 khách">4 khách</option>
                    <option value="6 - 10 khách">6 - 10 khách</option>
                    <option value="Đoàn 10+ khách">Đoàn 10+ khách</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#F2D28B] text-[#3B0A07] font-black text-xs uppercase tracking-wider"
                >
                  Hoàn Tất Giữ Chỗ Ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
