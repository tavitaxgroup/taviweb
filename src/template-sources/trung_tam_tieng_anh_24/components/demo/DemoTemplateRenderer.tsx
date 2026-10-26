"use client";

import React, { useState } from "react";
import {
  Award,
  Bus,
  Globe,
  Headphones,
  Hotel,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  Star,
  Users,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh24DefaultData,
  type TravelWpTourCard,
  type TrungTamTiengAnh24Data
} from "../../data/mockData";

interface Props {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: Props) {
  const merged = adaptClonedTemplateData(
    trungTamTiengAnh24DefaultData,
    data
  ) as TrungTamTiengAnh24Data;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedTour, setSelectedTour] = useState<TravelWpTourCard | null>(
    null
  );
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    participants: "2 người"
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = merged.business.phone[0] || "0126 922 0162";
  const primaryEmail = merged.business.email[0] || "demonhunter@gmail.com";

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name.trim() || !bookingForm.phone.trim()) return;
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Golden Sunset Mountain Explorer Hero + Transparent Header */}
      <section
        id="top"
        className="relative min-h-[540px] w-full overflow-hidden bg-slate-900"
      >
        <img
          src={merged.hero.backgroundImage}
          alt={merged.hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-amber-950/25 to-slate-950/80" />

        {/* Header */}
        <header className="relative z-30">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
            <a
              href="#top"
              className="text-3xl font-light tracking-widest text-white"
            >
              mona
            </a>

            <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wider text-white lg:flex">
              <a href="#top" className="text-[#f5b400]">
                TRANG CHỦ
              </a>
              <a href="#why-choose" className="transition hover:text-[#f5b400]">
                GIỚI THIỆU
              </a>
              <a
                href="#domestic-tours"
                className="transition hover:text-[#f5b400]"
              >
                TOUR NỘI ĐỊA
              </a>
              <a
                href="#international-tours"
                className="inline-flex items-center gap-1.5 transition hover:text-[#f5b400]"
              >
                <span>TOUR NƯỚC NGOÀI</span>
                <span className="rounded bg-[#f5b400] px-1.5 py-0.5 text-[9px] font-black text-slate-950">
                  HOT
                </span>
              </a>
              <a href="#guides" className="transition hover:text-[#f5b400]">
                TIN TỨC
              </a>
              <a href="#footer" className="transition hover:text-[#f5b400]">
                LIÊN HỆ
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#international-tours"
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#f5b400] text-slate-950 shadow transition hover:bg-white"
                aria-label="Tìm kiếm"
              >
                <Search className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded p-1.5 text-white hover:bg-white/10 lg:hidden"
                aria-label="Menu"
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
            <div className="bg-slate-950/95 px-4 py-3 text-white lg:hidden">
              <div className="flex flex-col gap-2.5 text-xs font-bold uppercase">
                <a href="#why-choose" onClick={() => setMobileMenuOpen(false)}>
                  GIỚI THIỆU
                </a>
                <a
                  href="#domestic-tours"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  TOUR NỘI ĐỊA
                </a>
                <a
                  href="#international-tours"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  TOUR NƯỚC NGOÀI (HOT)
                </a>
                <a href="#guides" onClick={() => setMobileMenuOpen(false)}>
                  TIN TỨC
                </a>
                <a href="#footer" onClick={() => setMobileMenuOpen(false)}>
                  LIÊN HỆ
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Typography Bottom-Left */}
        <div className="relative z-20 mx-auto flex min-h-[430px] max-w-6xl flex-col justify-end px-4 pb-12 pt-16 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            {merged.hero.eyebrow}
          </p>
          <h1 className="mt-2 max-w-xl text-3xl font-black uppercase leading-tight drop-shadow sm:text-5xl">
            {merged.hero.title}
          </h1>

          {/* 3 Slider Dots Centered at Bottom */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
            <span className="h-2.5 w-2.5 rounded-full border border-white/60" />
            <span className="h-2.5 w-2.5 rounded-full border border-white/60" />
          </div>
        </div>
      </section>

      {/* 2. "THIÊN ĐƯỜNG HỘI TỤ" — 5 Circular Country Badges */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs italic text-slate-400">
              Những điểm đến trên cả tuyệt vời
            </p>
            <h2 className="mt-1 text-xl font-extrabold uppercase tracking-wide text-slate-800 sm:text-2xl">
              THIÊN ĐƯỜNG HỘI TỤ
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-12 bg-[#f5b400]" />
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {merged.paradiseCircles.map((circle) => {
              const isSelected = selectedCountry === circle.country;
              return (
                <div
                  key={circle.id}
                  onClick={() =>
                    setSelectedCountry(isSelected ? null : circle.country)
                  }
                  className="group flex cursor-pointer flex-col items-center"
                >
                  <div
                    className={`relative h-40 w-40 overflow-hidden rounded-full border-4 shadow-lg transition duration-500 group-hover:scale-105 sm:h-44 sm:w-44 ${
                      isSelected ? "border-[#f5b400]" : "border-white"
                    }`}
                  >
                    <img
                      src={circle.image}
                      alt={circle.country}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 transition group-hover:bg-slate-950/55">
                      <span className="border-b-2 border-[#f5b400] pb-0.5 text-sm font-black uppercase tracking-widest text-white">
                        {circle.country}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2.5 text-center text-[11px] font-semibold text-slate-500">
                    {circle.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Dark Bay Parallax "TOUR NƯỚC NGOÀI" */}
      <section
        id="international-tours"
        className="relative overflow-hidden bg-slate-900 py-16 text-white"
      >
        <img
          src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80"
          alt="Tour nước ngoài"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs italic text-slate-300">
              Chọn ngay cho bạn tour phù hợp
            </p>
            <h2 className="mt-1 text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl">
              TOUR NƯỚC NGOÀI
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-12 bg-[#f5b400]" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {merged.internationalTours.map((tour) => (
              <div
                key={tour.id}
                onClick={() => {
                  setBookingSubmitted(false);
                  setSelectedTour(tour);
                }}
                className="group relative h-64 cursor-pointer overflow-hidden rounded shadow-xl"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-300">
                    {tour.region}
                  </p>
                  <h3 className="mt-1 text-xs font-extrabold uppercase leading-snug group-hover:text-[#f5b400] sm:text-sm">
                    {tour.title}
                  </h3>
                  <p className="mt-1 text-sm font-black text-[#f5b400]">
                    {tour.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "LÝ DO CHỌN MONA TRAVEL" — 3 Illustrated Columns */}
      <section id="why-choose" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-slate-800 sm:text-2xl">
              LÝ DO CHỌN MONA TRAVEL
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-12 bg-[#f5b400]" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {merged.whyChooseItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-[#f5b400] shadow-inner">
                  {item.badgeType === "hotel" && <Hotel className="h-10 w-10" />}
                  {item.badgeType === "support" && (
                    <Headphones className="h-10 w-10 text-sky-500" />
                  )}
                  {item.badgeType === "price" && (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5b400] text-[10px] font-black uppercase leading-tight text-red-700 shadow">
                      BEST
                      <br />
                      PRICE
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-sm font-extrabold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dark Airplane Parallax "THÀNH QUẢ CỦA MONA TRAVEL" */}
      <section className="relative overflow-hidden bg-[#15202e] py-16 text-white">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
          alt="Thành quả của Mona Travel"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300">
            PHỤNG SỰ KHÁCH HÀNG 8 NĂM
          </p>
          <h2 className="mt-1 text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
            THÀNH QUẢ CỦA MONA TRAVEL
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-[#f5b400]" />

          <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {merged.achievementStats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                  {stat.icon === "globe" && <Globe className="h-8 w-8" />}
                  {stat.icon === "users" && <Users className="h-8 w-8" />}
                  {stat.icon === "map" && <MapPin className="h-8 w-8" />}
                  {stat.icon === "bus" && <Bus className="h-8 w-8" />}
                </div>
                <span className="mt-3 text-2xl font-black text-[#f5b400] sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs text-slate-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "TOUR NỘI ĐỊA" — 3 White Cards */}
      <section id="domestic-tours" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs italic text-slate-400">
              Chọn ngay cho bạn tour phù hợp
            </p>
            <h2 className="mt-1 text-xl font-extrabold uppercase tracking-wide text-slate-800 sm:text-2xl">
              TOUR NỘI ĐỊA
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-12 bg-[#f5b400]" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {merged.domesticTours.map((tour) => (
              <div
                key={tour.id}
                onClick={() => {
                  setBookingSubmitted(false);
                  setSelectedTour(tour);
                }}
                className="group cursor-pointer text-center"
              >
                <div className="h-52 overflow-hidden rounded shadow-md">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  {tour.region}
                </p>
                <h3 className="mt-1 text-xs font-bold uppercase text-slate-700 group-hover:text-[#f5b400] sm:text-sm">
                  {tour.title}
                </h3>
                <p className="mt-1 text-xs font-extrabold text-slate-900">
                  {tour.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Flash-Sale Countdown Parallax Banner */}
      <section className="relative overflow-hidden py-16 text-white">
        <img
          src={merged.flashSale.backgroundImage}
          alt="Flash sale countdown"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-xl font-extrabold leading-relaxed sm:text-2xl">
            {merged.flashSale.headline}{" "}
            <span className="inline-block rounded bg-[#f5b400] px-2.5 py-0.5 text-slate-950">
              {merged.flashSale.highlightBadge}
            </span>
          </h2>
          <p className="mt-2 text-xs italic text-slate-200">
            Thời gian chỉ còn lại
          </p>

          {/* 3 Golden Yellow Countdown Boxes */}
          <div className="mx-auto mt-6 grid max-w-xl grid-cols-3 gap-4">
            {[
              { val: merged.flashSale.hours, unit: "GIỜ" },
              { val: merged.flashSale.minutes, unit: "PHÚT" },
              { val: merged.flashSale.seconds, unit: "GIÂY" }
            ].map((box) => (
              <div
                key={box.unit}
                className="rounded bg-[#f5b400] py-5 text-slate-950 shadow-xl"
              >
                <div className="text-3xl font-black sm:text-4xl">{box.val}</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wider">
                  {box.unit}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() =>
                setSelectedTour(merged.internationalTours[0] || null)
              }
              className="inline-flex items-center gap-1.5 rounded bg-[#f5b400] px-6 py-2.5 text-xs font-black uppercase text-slate-950 shadow-lg transition hover:bg-white"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              ĐẶT NGAY
            </button>
          </div>
        </div>
      </section>

      {/* 8. Split "NHẬN XÉT" (1/3) & "CẨM NANG DU LỊCH TỪ A – Z" (2/3) */}
      <section id="guides" className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-12">
          {/* Left 4 cols: NHẬN XÉT */}
          <div className="lg:col-span-4">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-extrabold uppercase text-slate-800">
                NHẬN XÉT
              </h2>
              <div className="mx-auto mt-1.5 h-0.5 w-10 bg-[#f5b400]" />
            </div>

            <div className="flex flex-col items-center rounded bg-gradient-to-b from-[#f7c02b] to-[#efa810] p-7 text-center text-slate-900 shadow-lg">
              <img
                src={merged.testimonialCard.avatar}
                alt={merged.testimonialCard.name}
                className="h-20 w-20 rounded-full border-4 border-white/80 object-cover shadow"
              />
              <div className="mt-3 flex items-center gap-0.5 text-sky-700">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-sky-700 text-sky-700"
                  />
                ))}
              </div>
              <h3 className="mt-1.5 text-sm font-bold">
                {merged.testimonialCard.name}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-900/90">
                {merged.testimonialCard.quote}
              </p>
              <span className="mt-3 text-[11px] font-bold">
                - {merged.testimonialCard.trip} -
              </span>
            </div>
          </div>

          {/* Right 8 cols: CẨM NANG DU LỊCH TỪ A – Z */}
          <div className="lg:col-span-8">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-extrabold uppercase text-slate-800">
                CẨM NANG DU LỊCH TỪ A – Z
              </h2>
              <div className="mx-auto mt-1.5 h-0.5 w-10 bg-[#f5b400]" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {merged.guideArticles.map((art) => (
                <article key={art.id} className="group">
                  <div className="h-52 overflow-hidden rounded shadow">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 text-xs font-extrabold uppercase leading-snug text-slate-800 group-hover:text-[#f5b400] sm:text-sm">
                    {art.title}
                  </h3>
                  <p className="mt-1 text-[10px] text-slate-400">{art.date}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {art.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Dark Mountain 4-Column Footer */}
      <footer
        id="footer"
        className="relative overflow-hidden bg-[#141d28] text-slate-300"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: mona */}
          <div>
            <span className="text-3xl font-light tracking-widest text-white">
              mona
            </span>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f5b400]" />
                <span>{merged.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#f5b400]" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#f5b400]" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Tin Tức */}
          <div>
            <h3 className="text-sm font-bold text-white">Tin Tức</h3>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li>Bản tin Du Lịch Việt</li>
              <li>Khám phá du lịch</li>
              <li>Kinh nghiệm du lịch</li>
              <li>Sự kiện du lịch</li>
              <li>Tuyển dụng Du Lịch</li>
            </ul>
          </div>

          {/* Col 3: Menu */}
          <div>
            <h3 className="text-sm font-bold text-white">Menu</h3>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li>Giới thiệu</li>
              <li>Du lịch trong nước</li>
              <li>Du lịch nước ngoài</li>
              <li>Tin tức</li>
              <li>Liên hệ</li>
            </ul>
          </div>

          {/* Col 4: Tour Phổ Biến */}
          <div>
            <h3 className="text-sm font-bold text-white">Tour Phổ Biến</h3>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {[...merged.internationalTours, ...merged.domesticTours].map(
                (t) => (
                  <div
                    key={t.id}
                    className="aspect-square overflow-hidden rounded-sm bg-slate-800"
                  >
                    <img
                      src={t.image}
                      alt={t.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-3 text-center text-[11px] text-slate-400">
          © All rights reserved. Thiết kế website{" "}
          <strong className="text-white">Mona Media</strong>
        </div>

        {/* 10. Bottom Beach Umbrella "ĐĂNG KÍ ĐỂ NHẬN ƯU ĐÃI" Strip */}
        <div className="relative overflow-hidden bg-[#2b4c65] py-12 text-center text-white">
          <div className="relative z-10 mx-auto max-w-xl px-4">
            <p className="text-xs italic text-amber-200">
              Luôn là những người có thông tin sớm nhất
            </p>
            <h3 className="mt-1 text-lg font-extrabold uppercase tracking-wide sm:text-xl">
              ĐĂNG KÍ ĐỂ NHẬN ƯU ĐÃI
            </h3>

            {newsletterDone ? (
              <div className="mt-4 rounded bg-white/15 p-3 text-xs font-bold text-[#f5b400]">
                Cảm ơn bạn! Mã ưu đãi 40% đã được gửi tới email.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) setNewsletterDone(true);
                }}
                className="mx-auto mt-5 flex max-w-md overflow-hidden rounded shadow-lg"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email của bạn"
                  className="flex-1 bg-white px-4 py-2.5 text-xs text-slate-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#f5b400] px-6 py-2.5 text-xs font-extrabold uppercase text-slate-950 transition hover:bg-amber-400"
                >
                  GỬI
                </button>
              </form>
            )}
          </div>
        </div>
      </footer>

      {/* Tour Booking Modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedTour(null)}
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={selectedTour.image}
              alt={selectedTour.title}
              className="h-44 w-full rounded-xl object-cover"
            />
            <span className="mt-3 inline-block rounded bg-[#f5b400] px-2.5 py-0.5 text-[10px] font-black uppercase text-slate-950">
              {selectedTour.region}
            </span>
            <h3 className="mt-1.5 text-base font-extrabold text-slate-900">
              {selectedTour.title}
            </h3>
            <p className="mt-1 text-sm font-black text-amber-600">
              {selectedTour.price} • {selectedTour.duration}
            </p>

            {bookingSubmitted ? (
              <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-xs text-emerald-800">
                <p className="font-bold">Đặt giữ chỗ ưu đãi thành công!</p>
                <p className="mt-1">
                  Chuyên viên Mona Travel sẽ liên hệ số{" "}
                  <strong>{bookingForm.phone}</strong> trong ít phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="mt-4 space-y-2.5">
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, name: e.target.value })
                  }
                  placeholder="Họ và tên *"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-xs focus:border-[#f5b400] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  value={bookingForm.phone}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, phone: e.target.value })
                  }
                  placeholder="Số điện thoại *"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-xs focus:border-[#f5b400] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded bg-[#f5b400] py-2.5 text-xs font-black uppercase text-slate-950 shadow hover:bg-amber-400"
                >
                  Xác nhận đặt tour
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
