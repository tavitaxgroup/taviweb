"use client";

import React, { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  Search,
  ShoppingBag,
  Sparkles,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh23DefaultData,
  type TravelVnPackage,
  type TrungTamTiengAnh23Data
} from "../../data/mockData";

interface Props {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: Props) {
  const merged = adaptClonedTemplateData(
    trungTamTiengAnh23DefaultData,
    data
  ) as TrungTamTiengAnh23Data;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [discountOnly, setDiscountOnly] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<TravelVnPackage | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    note: ""
  });

  const primaryPhone = merged.business.phone[0] || "0126 922 0162";
  const primaryEmail = merged.business.email[0] || "demonhunter@gmail.com";

  const filteredPackages = merged.tourPackages.filter((pkg) => {
    if (categoryFilter !== "all" && pkg.category !== categoryFilter) {
      return false;
    }
    if (discountOnly && !pkg.saleBadge) {
      return false;
    }
    return true;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name.trim() || !bookingForm.phone.trim()) return;
    setBookingDone(true);
  };

  const renderTravelLogo = () => (
    <a href="#top" className="inline-flex items-center gap-1.5">
      <span className="font-serif text-2xl font-black italic tracking-wide text-white sm:text-3xl">
        Travel
      </span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffa800] text-slate-950 shadow">
        <Plane className="h-3.5 w-3.5" />
      </span>
    </a>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Hero + Transparent Top Navigation */}
      <section id="top" className="relative min-h-[540px] w-full overflow-hidden">
        <img
          src={merged.hero.backgroundImage}
          alt={merged.hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/35 to-slate-950/80" />

        {/* Top Navbar */}
        <header className="relative z-30 border-b border-white/15">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            {renderTravelLogo()}

            <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wider text-white lg:flex">
              <a href="#top" className="text-[#ffa800]">
                TRANG CHỦ
              </a>
              <a href="#destinations" className="transition hover:text-[#ffa800]">
                ĐIỂM ĐẾN
              </a>
              <a href="#packages" className="transition hover:text-[#ffa800]">
                TRẠI HÈ & DỊCH VỤ
              </a>
              <a href="#news-exp" className="transition hover:text-[#ffa800]">
                TIN TỨC
              </a>
              <a href="#specialties" className="transition hover:text-[#ffa800]">
                GIỚI THIỆU
              </a>
              <a href="#footer" className="transition hover:text-[#ffa800]">
                LIÊN HỆ
              </a>
            </nav>

            <div className="flex items-center gap-3 text-white">
              <a
                href="#packages"
                className="rounded-full bg-white/15 p-2 transition hover:bg-[#ffa800] hover:text-slate-950"
                aria-label="Tìm kiếm"
              >
                <Search className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedPkg(merged.tourPackages[0] || null)}
                className="relative rounded-full bg-white/15 p-2 transition hover:bg-[#ffa800] hover:text-slate-950"
                aria-label="Giỏ khóa học"
              >
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ffa800] text-[10px] font-black text-slate-950">
                  2
                </span>
              </button>
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
                <a href="#destinations" onClick={() => setMobileMenuOpen(false)}>
                  ĐIỂM ĐẾN
                </a>
                <a href="#packages" onClick={() => setMobileMenuOpen(false)}>
                  TRẠI HÈ TRỌN GÓI
                </a>
                <a href="#specialties" onClick={() => setMobileMenuOpen(false)}>
                  VĂN HÓA & ẨM THỰC
                </a>
                <a href="#news-exp" onClick={() => setMobileMenuOpen(false)}>
                  TIN TỨC & KINH NGHIỆM
                </a>
                <a href="#footer" onClick={() => setMobileMenuOpen(false)}>
                  LIÊN HỆ
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Typography Bottom-Left */}
        <div className="relative z-20 mx-auto flex min-h-[430px] max-w-6xl flex-col justify-end px-4 pb-14 pt-20 text-white">
          <span className="w-fit rounded bg-[#ffa800] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-950">
            {merged.hero.eyebrow}
          </span>
          <h1 className="mt-3 max-w-xl text-3xl font-bold leading-tight drop-shadow sm:text-5xl">
            {merged.hero.title}
          </h1>
          <p className="mt-2 text-xs text-amber-200 sm:text-sm">
            {merged.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Light Gray 5-Field Search & Filter Bar */}
      <section className="border-b border-slate-200 bg-[#f4f5f7] py-6">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-10 rounded border border-slate-300 bg-white px-3.5 text-xs font-medium text-slate-700 focus:border-[#ffa800] focus:outline-none"
            >
              <option value="all">Danh mục</option>
              <option value="summer-camp">Trại hè Anh ngữ</option>
              <option value="study-tour">Study Tour Quốc tế</option>
              <option value="cultural">Giao lưu Văn hóa</option>
            </select>

            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
              className="h-10 rounded border border-slate-300 bg-white px-3.5 text-xs font-medium text-slate-700 focus:border-[#ffa800] focus:outline-none"
            >
              <option value="all">Loại chương trình / Lưu trú</option>
              <option value="homestay">Homestay Bản xứ</option>
              <option value="resort">Resort 4 - 5 Sao</option>
            </select>

            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="h-10 rounded border border-slate-300 bg-white px-3.5 text-xs font-medium text-slate-700 focus:border-[#ffa800] focus:outline-none"
            >
              <option value="all">Mức học phí (Price)</option>
              <option value="low">Dưới 10.000.000 ₫</option>
              <option value="high">Trọn gói Cao cấp</option>
            </select>

            <label className="flex h-10 cursor-pointer items-center gap-2 rounded border border-slate-300 bg-white px-3.5 text-xs font-medium text-slate-700">
              <span>Giảm giá</span>
              <input
                type="checkbox"
                checked={discountOnly}
                onChange={(e) => setDiscountOnly(e.target.checked)}
                className="h-3.5 w-3.5 accent-[#ffa800]"
              />
            </label>

            <a
              href="#packages"
              className="inline-flex h-10 items-center justify-center rounded bg-[#ffa800] px-6 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#e69500]"
            >
              TÌM KIẾM
            </a>
          </div>
        </div>
      </section>

      {/* 3. "Điểm đến không thể bỏ qua" — 3 Rounded Landscape Cards */}
      <section id="destinations" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Điểm đến không thể bỏ qua
            </h2>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              CHIÊM NGƯỠNG TUYỆT TÁC THIÊN NHIÊN & VĂN HÓA
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {merged.mustVisitDestinations.map((dest) => (
              <div
                key={dest.id}
                className="group relative h-60 overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-bold">{dest.title}</h3>
                  <p className="text-xs text-amber-200">{dest.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dark Ancient Wall Parallax "Tour tham quan trọn gói" */}
      <section
        id="packages"
        className="relative overflow-hidden bg-slate-900 py-16 text-white"
      >
        <img
          src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80"
          alt="Tour tham quan trọn gói"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Tour tham quan & Trại hè trọn gói
            </h2>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-300">
              ĐƠN GIẢN HÓA LỊCH TRÌNH KHÁM PHÁ
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => {
                  setBookingDone(false);
                  setSelectedPkg(pkg);
                }}
                className="group flex cursor-pointer flex-col"
              >
                {/* Top Rounded Image with Cyan "Giảm giá!" Ribbon */}
                <div className="relative h-44 overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {pkg.saleBadge && (
                    <span className="absolute left-0 top-3 rounded-r bg-[#00a8e8] px-3 py-1 text-xs font-bold text-white shadow">
                      Giảm giá!
                    </span>
                  )}
                </div>

                {/* Overlapping White Card Below */}
                <div className="relative z-10 mx-2 -mt-6 flex flex-1 flex-col rounded-xl bg-white p-4 text-slate-800 shadow-xl transition group-hover:-translate-y-1">
                  <h3 className="line-clamp-1 text-sm font-bold text-slate-900 group-hover:text-[#00a8e8]">
                    {pkg.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs">
                    {pkg.oldPrice && (
                      <span className="text-slate-400 line-through">
                        {pkg.oldPrice}
                      </span>
                    )}
                    <span className="font-extrabold text-[#00a8e8]">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="mt-2.5 line-clamp-4 text-[11px] leading-relaxed text-slate-500">
                    {pkg.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "Thưởng thức đặc sản miền Trung" — 3x2 Rounded Grid */}
      <section id="specialties" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Thưởng thức đặc sản miền Trung
            </h2>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              CẢM NHẬN TINH HOA ẨM THỰC TRONG HÀNH TRÌNH TRẢI NGHIỆM
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {merged.culturalSpecialties.map((item) => (
              <div
                key={item.id}
                className="group relative h-52 overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-sm font-bold text-white drop-shadow">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Night Hoi An River Promo Banner ("Tour thưởng ngoạn Đà Nẵng – Hội An") */}
      <section className="relative overflow-hidden py-20 text-white">
        <img
          src={merged.promoBanner.backgroundImage}
          alt={merged.promoBanner.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#072a60]/85 via-[#0a3d8f]/65 to-slate-950/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-200">
            {merged.promoBanner.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
            {merged.promoBanner.title}
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
            {merged.promoBanner.priceInfo}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedPkg(merged.tourPackages[0] || null)}
              className="rounded bg-[#ffa800] px-6 py-2.5 text-xs font-bold uppercase text-white shadow transition hover:bg-[#e69500]"
            >
              ĐẶT NGAY
            </button>
            <a
              href="#packages"
              className="rounded bg-[#00a8e8] px-6 py-2.5 text-xs font-bold uppercase text-white shadow transition hover:bg-[#0284c7]"
            >
              XEM CHI TIẾT
            </a>
          </div>
        </div>
      </section>

      {/* 7. "Tin tức & kinh nghiệm du lịch" — 3x2 Checkerboard Grid */}
      <section id="news-exp" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Tin tức & kinh nghiệm du lịch
            </h2>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              ĐI & TRẢI NGHIỆM MỌI THỨ BẠN THÍCH
            </p>
          </div>

          {/* 3x2 Checkerboard matching screenshot */}
          <div className="grid grid-cols-1 border border-slate-100 shadow-sm md:grid-cols-3">
            {/* Cell 1: Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={merged.checkerboardArticles[0]?.image}
                alt={merged.checkerboardArticles[0]?.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Cell 2: Text Card */}
            <div className="flex flex-col justify-center bg-white p-7">
              <h3 className="text-base font-bold text-slate-800">
                {merged.checkerboardArticles[0]?.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                {merged.checkerboardArticles[0]?.excerpt}
              </p>
              <button
                type="button"
                onClick={() => setSelectedPkg(merged.tourPackages[0] || null)}
                className="mt-4 w-fit border-b border-[#ffa800] pb-0.5 text-[11px] font-bold uppercase text-[#ffa800] hover:text-amber-600"
              >
                ĐỌC THÊM
              </button>
            </div>

            {/* Cell 3: Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={merged.checkerboardArticles[1]?.image}
                alt={merged.checkerboardArticles[1]?.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Cell 4: Text Card */}
            <div className="flex flex-col justify-center bg-white p-7">
              <h3 className="text-base font-bold text-slate-800">
                {merged.checkerboardArticles[1]?.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                {merged.checkerboardArticles[1]?.excerpt}
              </p>
              <button
                type="button"
                onClick={() => setSelectedPkg(merged.tourPackages[1] || null)}
                className="mt-4 w-fit border-b border-[#ffa800] pb-0.5 text-[11px] font-bold uppercase text-[#ffa800] hover:text-amber-600"
              >
                ĐỌC THÊM
              </button>
            </div>

            {/* Cell 5: Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={merged.checkerboardArticles[2]?.image}
                alt={merged.checkerboardArticles[2]?.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Cell 6: Text Card */}
            <div className="flex flex-col justify-center bg-white p-7">
              <h3 className="text-base font-bold text-slate-800">
                {merged.checkerboardArticles[2]?.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                {merged.checkerboardArticles[2]?.excerpt}
              </p>
              <button
                type="button"
                onClick={() => setSelectedPkg(merged.tourPackages[2] || null)}
                className="mt-4 w-fit border-b border-[#ffa800] pb-0.5 text-[11px] font-bold uppercase text-[#ffa800] hover:text-amber-600"
              >
                ĐỌC THÊM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Ocean Blue "ĐĂNG KÝ NHẬN ƯU ĐÃI TỪ CHÚNG TÔI" */}
      <section className="relative overflow-hidden bg-[#0077b6] py-16 text-center text-white">
        <img
          src={merged.newsletterBg}
          alt="Đăng ký nhận ưu đãi"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <h2 className="text-xl font-bold uppercase tracking-wide sm:text-2xl">
            ĐĂNG KÝ NHẬN ƯU ĐÃI TỪ CHÚNG TÔI
          </h2>
          <p className="mt-1 text-[11px] uppercase tracking-widest text-sky-100">
            TRỞ THÀNH NHỮNG NGƯỜI CÓ THÔNG TIN NHANH NHẤT
          </p>

          {newsletterDone ? (
            <div className="mx-auto mt-6 max-w-md rounded bg-white/20 p-3 text-xs font-bold text-amber-200">
              Cảm ơn bạn đã đăng ký! Ưu đãi 30% đã được gửi vào hộp thư.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) setNewsletterDone(true);
              }}
              className="mx-auto mt-6 flex max-w-md overflow-hidden rounded shadow-lg"
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
                className="bg-[#ffa800] px-6 py-2.5 text-xs font-bold uppercase text-white transition hover:bg-[#e69500]"
              >
                ĐĂNG KÍ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 9. Dark #1a1d24 4-Column Footer */}
      <footer id="footer" className="bg-[#1a1d24] text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo */}
          <div className="flex flex-col justify-center">
            {renderTravelLogo()}
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              {merged.business.aboutText[0]}
            </p>
          </div>

          {/* Col 2: Liên Hệ */}
          <div>
            <h3 className="text-sm font-bold text-white">Liên Hệ</h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ffa800]" />
                <span>{merged.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#ffa800]" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#ffa800]" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Tin Tức */}
          <div>
            <h3 className="text-sm font-bold text-white">Tin Tức</h3>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li>• Bản tin Trại hè Việt</li>
              <li>• Cẩm nang du học trải nghiệm</li>
              <li>• Tư vấn lộ trình ngoại khóa</li>
              <li>• Tuyển dụng Mentor Tiếng Anh</li>
            </ul>
          </div>

          {/* Col 4: Tour Phổ Biến 3x2 Grid */}
          <div>
            <h3 className="text-sm font-bold text-white">Tour Phổ Biến</h3>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {merged.culturalSpecialties.map((s) => (
                <div
                  key={s.id}
                  className="aspect-square overflow-hidden rounded-sm bg-slate-800"
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-[11px] text-slate-500">
          © All rights reserved. Thiết kế website{" "}
          <strong className="text-slate-300">Mona Media</strong>
        </div>
      </footer>

      {/* Package Booking Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedPkg(null)}
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={selectedPkg.image}
              alt={selectedPkg.title}
              className="h-44 w-full rounded-xl object-cover"
            />
            <h3 className="mt-3 text-base font-bold text-slate-900">
              {selectedPkg.title}
            </h3>
            <p className="mt-1 text-sm font-extrabold text-[#00a8e8]">
              {selectedPkg.price} ({selectedPkg.duration})
            </p>

            {bookingDone ? (
              <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-xs text-emerald-800">
                <p className="font-bold">Đăng ký giữ chỗ thành công!</p>
                <p className="mt-1">
                  Tư vấn viên sẽ gọi số <strong>{bookingForm.phone}</strong>{" "}
                  trong 15 phút.
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
                  placeholder="Họ và tên Học viên / Phụ huynh *"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-xs focus:border-[#ffa800] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  value={bookingForm.phone}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, phone: e.target.value })
                  }
                  placeholder="Số điện thoại *"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-xs focus:border-[#ffa800] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded bg-[#ffa800] py-2.5 text-xs font-bold uppercase text-white shadow hover:bg-[#e69500]"
                >
                  Xác nhận đặt lịch
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
