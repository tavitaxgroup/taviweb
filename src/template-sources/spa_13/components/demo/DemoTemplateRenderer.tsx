'use client';

import React, { useMemo, useState } from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  Compass,
  Flame,
  Flower2,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { SubpageData } from '@/components/demo/shared/SubpageLayout';
import {
  adaptClonedTemplateData,
  ClonedTemplateInput,
} from '@/lib/demo/clonedTemplateUtils';
import * as defaultMockData from '../../data/mockData';

interface DemoTemplateRendererProps {
  companyName?: string;
  subpageData?: SubpageData;
  templateInput?: ClonedTemplateInput;
}

function OrientalDivider({ light = false }: { light?: boolean }) {
  return (
    <div className="my-3 flex items-center justify-center gap-3">
      <span
        className={`h-[1px] w-14 ${
          light ? 'bg-[#d4a359]/60' : 'bg-[#8c2d24]/40'
        }`}
      />
      <span
        className={`inline-flex h-6 w-6 rotate-45 items-center justify-center border text-[10px] font-bold ${
          light
            ? 'border-[#d4a359] text-[#d4a359]'
            : 'border-[#6b201b] text-[#6b201b]'
        }`}
      >
        <span className="-rotate-45">❖</span>
      </span>
      <span
        className={`h-[1px] w-14 ${
          light ? 'bg-[#d4a359]/60' : 'bg-[#8c2d24]/40'
        }`}
      />
    </div>
  );
}

export function DemoTemplateRenderer({
  companyName,
  subpageData,
  templateInput,
}: DemoTemplateRendererProps) {
  const mockData = useMemo(
    () =>
      adaptClonedTemplateData(defaultMockData, {
        companyName,
        subpageData,
        templateInput,
      }),
    [companyName, subpageData, templateInput]
  );

  const {
    business,
    NAV_ITEMS,
    HERO_DATA,
    SIGNATURE_RITUALS,
    FIVE_ELEMENT_THERAPIES,
    HERBAL_INGREDIENTS,
    ORIENTAL_PHYSICIANS,
  } = mockData;

  const primaryPhone = business.phone?.[0] || '0909 816 319';
  const primaryEmail = business.email?.[0] || 'duongsinh@nguyduongspa.vn';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedElementId, setSelectedElementId] = useState(
    FIVE_ELEMENT_THERAPIES[0]?.id || 'el-moc'
  );
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    phone: '',
    ritual: SIGNATURE_RITUALS[0]?.title || '',
    preferredTime: 'Khung giờ Vàng (14:00 - 17:00)',
    notes: '',
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const activeElement = useMemo(
    () =>
      FIVE_ELEMENT_THERAPIES.find((el) => el.id === selectedElementId) ||
      FIVE_ELEMENT_THERAPIES[0],
    [FIVE_ELEMENT_THERAPIES, selectedElementId]
  );

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.fullName.trim() || !bookingForm.phone.trim()) return;
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#faf4eb] text-[#2e1c14] antialiased selection:bg-[#6b201b] selection:text-[#f5e3c3]">
      {/* 1. IMPERIAL BURGUNDY HEADER (#4a1815 with Oriental Seal Emblem & Gold Accents) */}
      <header
        id="trang-chu"
        className="sticky top-0 z-50 border-b border-[#d4a359]/30 bg-[#4a1815] text-[#f5e6cc] shadow-lg"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-6">
          {/* Left Oriental Seal Logo */}
          <a href="#trang-chu" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#d4a359] bg-[#6b201b] text-[#d4a359] shadow-inner">
              <Flower2 className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-serif text-lg font-bold tracking-[0.16em] text-[#e6bd77] sm:text-xl">
                {business.sealTitle}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-[#e6bd77]/75">
                Dưỡng Sinh Đông Y Cổ Phong
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#f5e6cc]/90 transition hover:text-[#e6bd77]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Hotline & Gold CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#dat-lich"
              className="rounded-full border border-[#e6bd77] bg-gradient-to-r from-[#d4a359] to-[#e6bd77] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#3b110e] shadow transition hover:brightness-110"
            >
              ĐẶT LỊCH NGAY
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded border border-[#d4a359]/40 text-[#e6bd77] lg:hidden"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#d4a359]/20 bg-[#3a120f] px-4 py-3 lg:hidden">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-xs font-semibold uppercase tracking-wider text-[#f5e6cc] hover:text-[#e6bd77]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (Framed Oriental Herbal Spa Showcase Matching Tablet Screen in SPA016-spa_13.jpg) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3d1411] via-[#4a1815] to-[#2e1410] py-12 text-[#f7ebd7] lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {/* Framed Hero Stage */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#d4a359]/50 bg-[#26110e] shadow-2xl">
            <div className="grid items-center lg:grid-cols-12">
              {/* Left Oriental Calligraphy Copy */}
              <div className="p-8 sm:p-10 lg:col-span-6 lg:p-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a359]/50 bg-[#6b201b]/70 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#e6bd77]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{HERO_DATA.sealBadge}</span>
                </div>

                <h1 className="mt-4 font-serif text-3xl font-bold leading-snug text-[#fff5e4] sm:text-4xl lg:text-[42px]">
                  {HERO_DATA.title}
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-[#e6d5bc]/90">
                  {HERO_DATA.subtitle}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href="#lieu-trinh-co-phong"
                    className="rounded-full bg-[#d4a359] px-7 py-3 text-xs font-extrabold uppercase tracking-widest text-[#3b110e] shadow-lg transition hover:bg-[#e6bd77]"
                  >
                    Khám phá 3 tuyệt kỹ Cổ Phong
                  </a>
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#d4a359]/50 px-5 py-3 text-xs font-bold text-[#e6bd77] transition hover:bg-white/5"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Tư vấn Lương y: {primaryPhone}</span>
                  </a>
                </div>

                {/* 3 Mini Oriental Stat Pills */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#d4a359]/25 pt-6">
                  {HERO_DATA.stats.map((st, idx) => (
                    <div key={idx}>
                      <p className="font-serif text-xl font-bold text-[#e6bd77] sm:text-2xl">
                        {st.value}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-[#d8c3a5]">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Warm Lantern & Herbal Massage Image */}
              <div className="relative h-[340px] sm:h-[420px] lg:col-span-6 lg:h-[500px]">
                <img
                  src={HERO_DATA.heroImage}
                  alt={business.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26110e] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#26110e] lg:via-transparent lg:to-transparent" />
                <div className="absolute bottom-5 right-5 rounded-2xl border border-[#d4a359]/50 bg-[#3a120f]/90 px-4 py-3 text-xs text-[#f5e6cc] backdrop-blur-sm">
                  <p className="font-serif font-bold text-[#e6bd77]">
                    ✦ Không Gian Tĩnh Lặng Chuẩn Thiền Trà
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#d8c3a5]">
                    Tặng chẩn mạch Đông y & Trà Kỷ Tử Táo Đỏ miễn phí
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: 3 ARCHED/ROUNDED CỔ PHONG RITUAL CARDS (Matching the 3 Cards on the Tablet Screen in SPA016-spa_13.jpg) */}
      <section id="lieu-trinh-co-phong" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8c2d24]">
              Tuyệt Kỹ Dưỡng Sinh Cung Đình
            </span>
            <h2 className="mt-1.5 font-serif text-3xl font-bold text-[#3b1510] sm:text-4xl">
              Tam Đại Liệu Pháp Cổ Phong Chủ Đạo
            </h2>
            <OrientalDivider />
            <p className="mx-auto max-w-2xl text-sm text-[#5c3d2e]">
              Mỗi liệu trình là sự kết hợp chuẩn xác giữa y lý Đông phương, canh
              thang thảo mộc nấu tươi và thủ pháp bấm huyệt chuyên sâu.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SIGNATURE_RITUALS.map((ritual) => (
              <div
                key={ritual.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#d4a359]/45 bg-[#fffdf9] shadow-md transition hover:-translate-y-1 hover:border-[#6b201b] hover:shadow-2xl"
              >
                <div>
                  {/* Top Rounded Image Frame */}
                  <div className="relative m-3 h-56 overflow-hidden rounded-2xl">
                    <img
                      src={ritual.image}
                      alt={ritual.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b110e]/80 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full border border-[#d4a359] bg-[#4a1815]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#e6bd77]">
                      {ritual.code}
                    </span>
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs font-bold text-white">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-[#e6bd77]" />
                        {ritual.duration}
                      </span>
                      <span className="rounded-full bg-[#d4a359] px-3 py-0.5 text-xs font-extrabold text-[#3b110e]">
                        {ritual.price}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 pb-6 pt-2">
                    <span className="text-xs font-bold text-[#8c2d24]">
                      {ritual.subtitle}
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-[#3b1510]">
                      {ritual.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-[#5c3d2e] sm:text-sm">
                      {ritual.description}
                    </p>

                    <div className="mt-4 rounded-xl border border-[#d4a359]/30 bg-[#faf2e4] p-3 text-xs">
                      <strong className="text-[#6b201b]">
                        Bài thuốc sử dụng:
                      </strong>{' '}
                      <span className="text-[#4a3022]">
                        {ritual.herbalFormula}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {ritual.benefits.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-[#4a3022]"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8c2d24]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-[#e8dac5] bg-[#faf4eb] px-6 py-4 text-center">
                  <a
                    href="#dat-lich"
                    onClick={() =>
                      setBookingForm((prev) => ({
                        ...prev,
                        ritual: ritual.title,
                      }))
                    }
                    className="inline-block w-full rounded-full bg-[#6b201b] py-2.5 text-xs font-bold uppercase tracking-widest text-[#f5e6cc] transition hover:bg-[#4a1815]"
                  >
                    Đặt lịch liệu trình này
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: INTERACTIVE 5-ELEMENT DIAGNOSIS ("Chẩn Đoán Thể Trạng Ngũ Hành Đông Y") */}
      <section
        id="chan-doan-ngu-hanh"
        className="border-y border-[#d4a359]/30 bg-[#3a1612] py-16 text-[#f5e6cc] lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#e6bd77]">
              Biện Chứng Luận Trị Theo Ngũ Hành
            </span>
            <h2 className="mt-1.5 font-serif text-3xl font-bold text-white sm:text-4xl">
              Chọn Tình Trạng Cơ Thể Để Xem Phác Đồ Dưỡng Sinh
            </h2>
            <OrientalDivider light />
          </div>

          {/* 5 Element Selector Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {FIVE_ELEMENT_THERAPIES.map((el) => {
              const isSelected = el.id === activeElement.id;
              return (
                <button
                  key={el.id}
                  type="button"
                  onClick={() => setSelectedElementId(el.id)}
                  className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
                    isSelected
                      ? 'border-[#e6bd77] bg-[#d4a359] text-[#3b110e] shadow-lg'
                      : 'border-[#d4a359]/40 bg-[#4d1e19] text-[#f5e6cc] hover:border-[#e6bd77]'
                  }`}
                >
                  {el.element}
                </button>
              );
            })}
          </div>

          {/* Active Element Prescription Card */}
          <div className="mt-8 rounded-3xl border-2 border-[#d4a359]/50 bg-[#2b100d] p-6 shadow-2xl sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="space-y-4 lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#6b201b] px-3.5 py-1 text-xs font-bold text-[#e6bd77]">
                    Tạng phủ chủ quản: {activeElement.organTarget}
                  </span>
                  <span className="text-xs font-semibold text-amber-200">
                    • Thời lượng: {activeElement.duration} ({activeElement.price}
                    )
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#e6bd77] sm:text-3xl">
                  {activeElement.therapyName}
                </h3>

                <div className="rounded-xl border border-[#d4a359]/25 bg-[#3a1612] p-4 text-xs sm:text-sm">
                  <p className="font-bold text-amber-200">
                    Biểu hiện thường gặp cần trị liệu:
                  </p>
                  <p className="mt-1 text-[#f5e6cc]">
                    {activeElement.symptomFocus}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-[#e6d5bc]">
                  {activeElement.description}
                </p>

                <p className="text-xs text-[#e6bd77]">
                  <strong>Thảo dược phối ngũ:</strong>{' '}
                  {activeElement.herbalIngredients}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#d4a359]/30 bg-[#3a1612] p-6 text-center lg:col-span-4">
                <Compass className="h-12 w-12 text-[#e6bd77]" />
                <p className="mt-3 font-serif text-lg font-bold text-white">
                  Đặt Lịch Bắt Mạch & Trải Nghiệm
                </p>
                <p className="mt-1 text-xs text-[#d8c3a5]">
                  Ưu đãi giảm 20% cho khách hàng lần đầu trải nghiệm phác đồ{' '}
                  {activeElement.element}.
                </p>
                <a
                  href="#dat-lich"
                  onClick={() =>
                    setBookingForm((prev) => ({
                      ...prev,
                      ritual: activeElement.therapyName,
                    }))
                  }
                  className="mt-5 w-full rounded-full bg-[#d4a359] py-3 text-xs font-extrabold uppercase tracking-wider text-[#3b110e] transition hover:bg-[#e6bd77]"
                >
                  Nhận phác đồ này
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: "THANG DƯỢC QUÝ" (4 Herbal Ingredients Grid) + "ĐỘI NGŨ LƯƠNG Y" */}
      <section id="thang-duoc" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8c2d24]">
              Dược Liệu Sạch Tuyển Chọn
            </span>
            <h2 className="mt-1.5 font-serif text-3xl font-bold text-[#3b1510] sm:text-4xl">
              Thang Dược 36 Vị Thảo Mộc Tự Nhiên
            </h2>
            <OrientalDivider />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HERBAL_INGREDIENTS.map((herb) => (
              <div
                key={herb.id}
                className="overflow-hidden rounded-2xl border border-[#d4a359]/40 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8c2d24]">
                    {herb.origin}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-bold text-[#3b1510]">
                    {herb.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5c3d2e]">
                    {herb.effect}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Đội ngũ Lương Y */}
          <div id="luong-y" className="mt-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8c2d24]">
                Bàn Tay Vàng Trị Liệu
              </span>
              <h2 className="mt-1.5 font-serif text-3xl font-bold text-[#3b1510] sm:text-4xl">
                Hội Đồng Lương Y & Chuyên Gia Dưỡng Sinh
              </h2>
              <OrientalDivider />
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {ORIENTAL_PHYSICIANS.map((doc) => (
                <div
                  key={doc.id}
                  className="overflow-hidden rounded-2xl border border-[#d4a359]/40 bg-white text-center shadow-sm"
                >
                  <div className="h-64 overflow-hidden bg-[#efe5d5]">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-[#faf2e4] px-3 py-1 text-[11px] font-bold text-[#8c2d24]">
                      {doc.title}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-bold text-[#3b1510]">
                      {doc.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-amber-800">
                      {doc.experience}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#5c3d2e]">
                      {doc.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOOKING FORM & SANDALWOOD FOOTER (#2b1612) */}
      <footer id="dat-lich" className="bg-[#2b1612] text-[#f5e6cc]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Contact & Philosophy */}
            <div className="space-y-4 lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#d4a359] bg-[#6b201b] text-[#d4a359]">
                  <Flower2 className="h-5 w-5" />
                </div>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#e6bd77]">
                  {business.sealTitle}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#d8c3a5] sm:text-sm">
                {business.name} — {business.tagline}. Không gian dưỡng sinh
                tĩnh lặng dành riêng cho người trân quý sức khỏe tự nhiên.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-[#f5e6cc]">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e6bd77]" />
                  <span>{business.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#e6bd77]" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                    className="font-bold text-[#e6bd77] hover:underline"
                  >
                    {primaryPhone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#e6bd77]" />
                  <span>{primaryEmail}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-[#e6bd77]" />
                  <span>{business.workingHours}</span>
                </p>
              </div>
            </div>

            {/* Right Oriental Appointment Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#d4a359]/40 bg-[#3a1d17] p-6 shadow-xl sm:p-8">
                <h3 className="font-serif text-xl font-bold text-[#e6bd77] sm:text-2xl">
                  Đặt Lịch Hẹn Dưỡng Sinh & Bắt Mạch Miễn Phí
                </h3>
                <p className="mt-1 text-xs text-[#d8c3a5]">
                  Đặt lịch trước để Ngự Y Đường chuẩn bị phòng xông riêng và nấu
                  sẵn canh thang thảo dược theo đúng thể trạng của quý khách.
                </p>

                {bookingSubmitted ? (
                  <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/50 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-400" />
                    <h4 className="mt-2 font-serif text-lg font-bold text-white">
                      Đã Ghi Nhận Lịch Hẹn Tại {business.sealTitle}!
                    </h4>
                    <p className="mt-1 text-xs text-emerald-200">
                      Lễ tân sẽ liên hệ xác nhận qua số{' '}
                      <strong>{bookingForm.phone}</strong> trong ít phút.
                    </p>
                    <button
                      type="button"
                      onClick={() => setBookingSubmitted(false)}
                      className="mt-4 text-xs font-bold text-[#e6bd77] underline"
                    >
                      Đặt thêm lịch hẹn khác
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleBookingSubmit}
                    className="mt-5 space-y-3.5"
                  >
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên quý khách *"
                        value={bookingForm.fullName}
                        onChange={(e) =>
                          setBookingForm((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-[#d4a359]/30 bg-[#2b1612] px-4 py-3 text-xs text-white placeholder-[#b59b7d] focus:border-[#e6bd77] focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại liên hệ *"
                        value={bookingForm.phone}
                        onChange={(e) =>
                          setBookingForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-[#d4a359]/30 bg-[#2b1612] px-4 py-3 text-xs text-white placeholder-[#b59b7d] focus:border-[#e6bd77] focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <select
                        value={bookingForm.ritual}
                        onChange={(e) =>
                          setBookingForm((prev) => ({
                            ...prev,
                            ritual: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-[#d4a359]/30 bg-[#2b1612] px-4 py-3 text-xs text-white focus:border-[#e6bd77] focus:outline-none"
                      >
                        {SIGNATURE_RITUALS.map((r) => (
                          <option key={r.id} value={r.title}>
                            {r.title} ({r.price})
                          </option>
                        ))}
                        {FIVE_ELEMENT_THERAPIES.map((el) => (
                          <option key={el.id} value={el.therapyName}>
                            {el.therapyName} ({el.price})
                          </option>
                        ))}
                      </select>

                      <select
                        value={bookingForm.preferredTime}
                        onChange={(e) =>
                          setBookingForm((prev) => ({
                            ...prev,
                            preferredTime: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-[#d4a359]/30 bg-[#2b1612] px-4 py-3 text-xs text-white focus:border-[#e6bd77] focus:outline-none"
                      >
                        <option>Khung giờ Sáng (09:00 - 12:00)</option>
                        <option>Khung giờ Vàng (14:00 - 17:00)</option>
                        <option>Khung giờ Tối thư giãn (17:30 - 21:00)</option>
                      </select>
                    </div>

                    <textarea
                      rows={2}
                      placeholder="Triệu chứng đau mỏi hoặc yêu cầu phòng đôi / kỹ thuật viên..."
                      value={bookingForm.notes}
                      onChange={(e) =>
                        setBookingForm((prev) => ({
                          ...prev,
                          notes: e.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-[#d4a359]/30 bg-[#2b1612] px-4 py-2.5 text-xs text-white placeholder-[#b59b7d] focus:border-[#e6bd77] focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4a359] to-[#e6bd77] py-3.5 text-xs font-extrabold uppercase tracking-widest text-[#3b110e] shadow-lg transition hover:brightness-110"
                    >
                      <Send className="h-4 w-4" />
                      <span>XÁC NHẬN ĐẶT LỊCH DƯỠNG SINH</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4a359]/20 bg-[#1e0e0b] py-4 text-center text-xs text-[#b59b7d]">
          © {new Date().getFullYear()} {business.name}. Tinh hoa Dưỡng Sinh Cổ
          Phong chính thống.
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
