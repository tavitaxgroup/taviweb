"use client";

import React, { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Sparkles,
  ShieldCheck,
  Smile,
  Stethoscope,
  Award,
  HeartHandshake,
  Check,
  X,
  Star,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa13DefaultData,
  NhaKhoa13Data,
  NhaKhoa13CoreCard,
} from "../../data/mockData";

interface Props {
  companyData?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ companyData }: Props) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData<NhaKhoa13Data>(
        nhaKhoa13DefaultData,
        companyData
      ),
    [companyData]
  );

  const [selectedCard, setSelectedCard] = useState<NhaKhoa13CoreCard | null>(
    null
  );
  const [bookingModal, setBookingModal] = useState<boolean>(false);
  const [bookingDone, setBookingDone] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1e293b] antialiased selection:bg-[#1565c0] selection:text-white">
      {/* 1. SOLID ROYAL BLUE HEADER BAR MATCHING NK016 */}
      <header className="sticky top-0 z-40 bg-[#1565c0] text-white shadow-md">
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-4 py-3.5">
          {/* Stylized Tooth Emblem + NHA KHOA NT */}
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#1565c0] shadow-xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 stroke-current stroke-[2.2]"
              >
                <path d="M7 3C4.5 3 3 5.2 3 8c0 3.2 1.8 5.5 2.5 8.5.5 2.1 1.2 4.5 2.5 4.5 1.1 0 1.7-2 2.5-3.5.5-1 1-1.5 1.5-1.5s1 .5 1.5 1.5c.8 1.5 1.4 3.5 2.5 3.5 1.3 0 2-2.4 2.5-4.5.7-3 2.5-5.3 2.5-8.5 0-2.8-1.5-5-4-5-1.8 0-3.2 1-5 1s-3.2-1-5-1Z" />
              </svg>
            </div>
            <div className="leading-none">
              <span className="text-lg font-black tracking-wider text-white uppercase md:text-xl">
                {data.business.name}
              </span>
            </div>
          </a>

          {/* Navigation with White Pill Active Button matching NK016 */}
          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-6 md:flex">
              <a
                href="#top"
                className="rounded-xs bg-white px-4 py-1.5 text-[11px] font-extrabold tracking-wider text-[#1565c0] uppercase shadow-2xs"
              >
                TRANG CHỦ
              </a>
              <a
                href="#gioi-thieu-nt"
                className="text-[11px] font-bold tracking-wider text-white/90 uppercase transition hover:text-white"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#dich-vu-nt"
                className="text-[11px] font-bold tracking-wider text-white/90 uppercase transition hover:text-white"
              >
                DỊCH VỤ
              </a>
              <a
                href="#tin-tuc-nt"
                className="text-[11px] font-bold tracking-wider text-white/90 uppercase transition hover:text-white"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he-nt"
                className="text-[11px] font-bold tracking-wider text-white/90 uppercase transition hover:text-white"
              >
                LIÊN HỆ
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setBookingModal(true)}
              aria-label="Tìm kiếm"
              className="text-white/90 transition hover:text-white"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setBookingModal(true)}
              className="rounded-xs bg-white px-3.5 py-1.5 text-[11px] font-extrabold text-[#1565c0] uppercase md:hidden"
            >
              ĐẶT LỊCH
            </button>
          </div>
        </div>
      </header>

      {/* 2. BRIGHT CLINIC RECEPTION HERO WITH FLOATING WHITE CARD & 2x3 ICON CHECKLIST */}
      <section id="top" className="relative overflow-hidden">
        <div className="relative min-h-[500px] w-full py-12 md:py-16">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent" />

          {/* Floating White Card matching NK016 */}
          <div
            id="gioi-thieu-nt"
            className="relative z-10 mx-auto max-w-[1160px] px-4"
          >
            <div className="max-w-xl rounded-xs border border-white bg-white/95 p-7 shadow-2xl backdrop-blur-sm md:p-10">
              <p className="text-sm font-bold text-[#334155]">
                {data.hero.eyebrow}
              </p>
              <h1 className="mt-1 text-3xl font-black tracking-wide text-[#1565c0] uppercase md:text-4xl">
                {data.hero.title}
              </h1>
              <p className="mt-3 text-xs leading-relaxed text-[#475569] md:text-[13px]">
                {data.hero.subtitle}
              </p>

              {/* 2x3 Blue Outline Icon Feature Grid matching NK016 */}
              <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {data.heroFeatures.map((feat, idx) => {
                  const icons = [
                    Stethoscope,
                    Sparkles,
                    Smile,
                    ShieldCheck,
                    Award,
                    HeartHandshake,
                  ];
                  const IconComp = icons[idx % icons.length];
                  return (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#93c5fd] bg-[#eff6ff] text-[#1565c0]">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold text-[#1e293b]">
                        {feat}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setBookingModal(true)}
                  className="rounded-xs bg-[#1565c0] px-6 py-2.5 text-xs font-extrabold tracking-wider text-white uppercase shadow-md transition hover:bg-[#0d47a1]"
                >
                  {data.hero.ctaText}
                </button>
                <a
                  href="#bang-gia-nt"
                  className="rounded-xs border border-[#1565c0] px-5 py-2.5 text-xs font-extrabold tracking-wider text-[#1565c0] uppercase transition hover:bg-[#eff6ff]"
                >
                  XEM BẢNG GIÁ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Royal Blue Accent Bar Below Hero matching NK016 */}
        <div className="h-8 w-full bg-[#1565c0]" />
      </section>

      {/* 3. 3-COLUMN BORDERED SERVICE CARDS SECTION (MATCHING FRONT FOREGROUND CARD IN NK016) */}
      <section id="dich-vu-nt" className="mx-auto max-w-[1160px] px-4 py-16">
        <div className="mb-10 text-center">
          <span className="text-xs font-extrabold tracking-widest text-[#1565c0] uppercase">
            CHUYÊN KHOA THẨM MỸ &amp; ĐIỀU TRỊ
          </span>
          <h2 className="mt-1 text-2xl font-black text-[#0f172a] uppercase md:text-3xl">
            Dịch Vụ Nha Khoa Uy Tín Tại TP. Hồ Chí Minh
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 bg-[#1565c0]" />
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {data.coreServiceCards.map((card) => (
            <div
              key={card.id}
              className={`group flex flex-col justify-between bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                card.featured
                  ? "border-2 border-[#1565c0] shadow-md"
                  : "border border-[#e2e8f0] hover:border-[#1565c0]"
              }`}
            >
              <div>
                <div
                  onClick={() => setSelectedCard(card)}
                  className="aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#f1f5f9]"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-6 pt-6 text-center">
                  <h3
                    onClick={() => setSelectedCard(card)}
                    className="cursor-pointer text-base font-extrabold text-[#1e293b] transition group-hover:text-[#1565c0]"
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#64748b]">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pt-5 pb-6 text-center">
                <button
                  type="button"
                  onClick={() => setSelectedCard(card)}
                  className="inline-flex flex-col items-center text-[11px] font-extrabold tracking-wider text-[#1565c0] uppercase"
                >
                  <span>LIÊN HỆ</span>
                  <span className="mt-1 h-[2px] w-7 bg-[#1565c0] transition-all group-hover:w-12" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRANSPARENT PRICE TABLE SECTION */}
      <section id="bang-gia-nt" className="bg-[#f0f7ff] py-16">
        <div className="mx-auto max-w-[1060px] px-4">
          <div className="mb-8 text-center">
            <span className="text-xs font-extrabold tracking-widest text-[#1565c0] uppercase">
              CAM KẾT KHÔNG PHÁT SINH CHI PHÍ
            </span>
            <h2 className="mt-1 text-2xl font-black text-[#0f172a] uppercase">
              Bảng Giá Răng Sứ, Veneer &amp; Implant Tại Nha Khoa NT
            </h2>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#bfdbfe] bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="bg-[#1565c0] text-white">
                  <th className="px-5 py-3.5 font-bold uppercase">
                    Dịch vụ nha khoa
                  </th>
                  <th className="px-5 py-3.5 font-bold uppercase">Xuất xứ</th>
                  <th className="px-5 py-3.5 font-bold uppercase">Bảo hành</th>
                  <th className="px-5 py-3.5 font-bold uppercase">
                    Chi phí trọn gói
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {data.priceTable.map((row) => (
                  <tr key={row.id} className="hover:bg-[#eff6ff]">
                    <td className="px-5 py-3.5 font-bold text-[#0f172a]">
                      {row.service}
                    </td>
                    <td className="px-5 py-3.5 text-[#475569]">{row.origin}</td>
                    <td className="px-5 py-3.5">
                      <span className="rounded-full bg-[#dbeafe] px-2.5 py-0.5 text-[11px] font-bold text-[#1565c0]">
                        {row.warranty}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 font-extrabold text-[#1565c0]">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. KHÁCH HÀNG NÓI GÌ VỀ NHA KHOA NT */}
      <section className="mx-auto max-w-[1160px] px-4 py-16">
        <div className="mb-10 text-center">
          <span className="text-xs font-extrabold tracking-widest text-[#1565c0] uppercase">
            HƠN 10,000+ NỤ CƯỜI RẠNG RỠ
          </span>
          <h2 className="mt-1 text-2xl font-black text-[#0f172a] uppercase">
            Cảm Nhận Khách Hàng Sau Khi Làm Răng Tại Nha Khoa NT
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {data.smileCases.map((sc) => (
            <div
              key={sc.id}
              className="flex flex-col justify-between rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-xs"
            >
              <div>
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#475569] italic">
                  &ldquo;{sc.comment}&rdquo;
                </p>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-[#f1f5f9] pt-4">
                <img
                  src={sc.image}
                  alt={sc.customerName}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-extrabold text-[#0f172a]">
                    {sc.customerName}
                  </h4>
                  <p className="text-[11px] font-semibold text-[#1565c0]">
                    {sc.serviceUsed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TIN TỨC NHA KHOA NT */}
      <section id="tin-tuc-nt" className="bg-[#f8fafc] py-16">
        <div className="mx-auto max-w-[1160px] px-4">
          <h2 className="mb-8 text-center text-2xl font-black text-[#0f172a] uppercase">
            Kiến Thức Chăm Sóc &amp; Thẩm Mỹ Răng Miệng
          </h2>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {data.news?.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden border border-[#e2e8f0] bg-white shadow-2xs transition hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold text-[#1565c0]">
                    {post.category} • {post.date}
                  </span>
                  <h3 className="mt-1.5 text-sm leading-snug font-extrabold text-[#0f172a]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[#64748b]">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ROYAL BLUE FOOTER */}
      <footer
        id="lien-he-nt"
        className="bg-[#0d47a1] pt-14 pb-8 text-xs text-white/85"
      >
        <div className="mx-auto max-w-[1160px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#1565c0]">
                  <Smile className="h-5 w-5" />
                </div>
                <span className="text-base font-black tracking-wider text-white uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-white/80">
                {data.business.aboutText[0]}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#93c5fd] uppercase">
                ĐỊA CHỈ PHÒNG KHÁM
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#93c5fd]" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#93c5fd]" />
                  <span>{data.business.phone.join(" - ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#93c5fd]" />
                  <span>{data.business.email.join(" | ")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#93c5fd] uppercase">
                DỊCH VỤ NỔI BẬT
              </h4>
              <ul className="mt-4 space-y-2">
                <li>Bọc răng sứ thẩm mỹ Đức / Mỹ</li>
                <li>Mặt dán sứ siêu mỏng Veneer Emax</li>
                <li>Cấy ghép Implant Thụy Sĩ</li>
                <li>Niềng răng trong suốt Invisalign</li>
                <li>Vệ sinh &amp; Tẩy trắng răng Laser</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold tracking-wider text-[#93c5fd] uppercase">
                ĐẶT LỊCH KHÁM MIỄN PHÍ
              </h4>
              <p className="mt-3 leading-relaxed text-white/80">
                Giờ mở cửa: {data.business.workingHours}. Miễn phí khám tổng
                quát và chụp phim X-Quang kỹ thuật số.
              </p>
              <button
                type="button"
                onClick={() => setBookingModal(true)}
                className="mt-4 w-full rounded-xs bg-white py-2.5 text-xs font-extrabold text-[#1565c0] uppercase shadow-md transition hover:bg-[#eff6ff]"
              >
                ĐẶT LỊCH HẸN NGAY
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6 text-center text-[11px] text-white/75">
            © {new Date().getFullYear()} Bản quyền thuộc về{" "}
            <strong className="text-white">{data.business.name}</strong> – Nha
            Khoa Thẩm Mỹ Uy Tín Tại TP. Hồ Chí Minh.
          </div>
        </div>
      </footer>

      {/* SERVICE CARD MODAL */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md overflow-hidden bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white hover:bg-[#1565c0]"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-[16/10] w-full">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-extrabold tracking-wider text-[#1565c0] uppercase">
                CHUYÊN KHOA NHA KHOA NT
              </span>
              <h3 className="mt-1 text-lg font-extrabold text-[#0f172a]">
                {selectedCard.title}
              </h3>
              <p className="mt-1 text-sm font-bold text-[#1565c0]">
                Chi phí tham khảo: {selectedCard.priceRange}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#475569]">
                {selectedCard.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCard(null);
                  setBookingModal(true);
                }}
                className="mt-5 w-full bg-[#1565c0] py-2.5 text-xs font-extrabold text-white uppercase hover:bg-[#0d47a1]"
              >
                NHẬN TƯ VẤN &amp; BÁO GIÁ CHI TIẾT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {bookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setBookingModal(false);
                setBookingDone(false);
              }}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#334155] hover:bg-[#1565c0] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-base font-extrabold text-[#1565c0] uppercase">
              Đặt Lịch Khám Tại {data.business.name}
            </h3>
            {bookingDone ? (
              <div className="mt-4 bg-[#eff6ff] p-4 text-center">
                <Check className="mx-auto h-6 w-6 text-[#1565c0]" />
                <p className="mt-1 text-sm font-bold text-[#0f172a]">
                  Đã ghi nhận lịch hẹn của quý khách!
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingDone(true);
                }}
                className="mt-4 space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên khách hàng *"
                  className="w-full border border-[#cbd5e1] px-3.5 py-2 text-xs outline-none focus:border-[#1565c0]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  className="w-full border border-[#cbd5e1] px-3.5 py-2 text-xs outline-none focus:border-[#1565c0]"
                />
                <select className="w-full border border-[#cbd5e1] px-3.5 py-2 text-xs outline-none focus:border-[#1565c0]">
                  <option>Bọc răng sứ thẩm mỹ</option>
                  <option>Mặt dán sứ Veneer siêu mỏng</option>
                  <option>Vệ sinh răng miệng &amp; Tẩy trắng</option>
                  <option>Trồng răng Implant / Niềng răng</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#1565c0] py-2.5 text-xs font-extrabold text-white uppercase"
                >
                  XÁC NHẬN ĐẶT LỊCH
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
