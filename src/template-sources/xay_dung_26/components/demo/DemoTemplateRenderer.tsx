"use client";

import React, { useState } from "react";
import {
  KeyRound,
  Search,
  Waves,
  Wifi,
  ChefHat,
  Bike,
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung26DefaultData,
  type XayDung26TemplateData,
  type XayDung26RoomItem
} from "@/template-sources/xay_dung_26/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung26TemplateData = adaptClonedTemplateData(
    xayDung26DefaultData,
    incomingData
  );

  const [activeMenuTab, setActiveMenuTab] = useState<
    "mon-chinh" | "trang-mieng" | "thuc-uong"
  >("mon-chinh");
  const [selectedRoom, setSelectedRoom] = useState<XayDung26RoomItem | null>(
    null
  );
  const [bookingSent, setBookingSent] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "demonhunterg@gmail.com";
  const secondaryEmail = data.business.email?.[1] || "mon@mona.media";
  const brandName = data.business.name || "Mona Media Resort";

  const filteredMenu = (data.menuItems || []).filter(
    (m) => m.tab === activeMenuTab
  );

  const SectionHeading = ({ title }: { title: string }) => (
    <div className="flex flex-wrap items-baseline gap-2.5 mb-8">
      <h2 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#111111]">
        {title}
      </h2>
      <span className="text-[#cccccc]">|</span>
      <span className="text-xs font-semibold text-[#b89b49]">
        {data.welcomeTagline || "Chào mừng đến với chúng tôi"}
      </span>
    </div>
  );

  const renderAmenityIcon = (icon: string) => {
    const cls = "w-8 h-8 text-[#b89b49] stroke-[1.5]";
    switch (icon) {
      case "pool":
        return <Waves className={cls} />;
      case "wifi":
        return <Wifi className={cls} />;
      case "restaurant":
        return <ChefHat className={cls} />;
      default:
        return <Bike className={cls} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#b89b49] selection:text-white">
      {/* 1. TOP PHONE UTILITY STRIP */}
      <div className="bg-white border-b border-[#eeeeee] text-[11px] text-[#555555]">
        <div className="max-w-[1060px] mx-auto px-4 h-7 flex items-center justify-center gap-3">
          <span>
            Để biết thông tin hoặc đặt phòng xin gọi:{" "}
            <strong className="text-[#222222]">{primaryPhone}</strong>
          </span>
          <div className="flex items-center gap-2 text-[#b89b49] font-bold">
            <a href="#lien-he">f</a>
            <a href="#lien-he">IG</a>
            <a href="#lien-he">𝕏</a>
          </div>
        </div>
      </div>

      {/* 2. HERO WITH HANGING SHIELD LOGO + BOTTOM BOOKING BAR */}
      <section
        id="trang-chu"
        className="relative min-h-[540px] sm:min-h-[620px] w-full overflow-hidden bg-[#0e2a38] flex flex-col justify-between"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#173d52]/65 via-black/35 to-[#1c4b5c]/80" />

        {/* Translucent Top Header Bar + Hanging White Shield Logo */}
        <header className="relative z-30 bg-[#4e6e82]/75 backdrop-blur-xs border-b border-white/15">
          <div className="max-w-[1060px] mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
            {/* Hanging Pennant Logo */}
            <div className="relative h-12">
              <a
                href="#trang-chu"
                className="bg-white shadow-lg px-4 pt-3 pb-5 flex flex-col items-center text-center rounded-b-full border-x border-b border-[#e5dec9] w-28"
              >
                <KeyRound className="w-5 h-5 text-[#b89b49] mb-1" />
                <span className="text-[10px] font-serif font-extrabold uppercase text-[#b89b49] leading-tight">
                  {brandName}
                </span>
                <span className="text-[8px] text-[#b89b49] tracking-widest mt-0.5">
                  ★★★★★
                </span>
              </a>
            </div>

            {/* Right Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-white">
              <a
                href="#trang-chu"
                className="border-b-2 border-white pb-1"
              >
                TRANG CHỦ
              </a>
              <a
                href="#gioi-thieu"
                className="hover:text-[#e6cf8b] transition-colors"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#loai-phong"
                className="hover:text-[#e6cf8b] transition-colors"
              >
                PHÒNG
              </a>
              <a
                href="#tin-tuc"
                className="hover:text-[#e6cf8b] transition-colors"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he"
                className="hover:text-[#e6cf8b] transition-colors"
              >
                LIÊN HỆ
              </a>
              <a
                href="#loai-phong"
                aria-label="Tìm kiếm"
                className="hover:text-[#e6cf8b]"
              >
                <Search className="w-3.5 h-3.5" />
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden text-white p-1.5"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-[#1e3d4f] text-white px-6 py-4 space-y-2 text-xs font-bold uppercase">
              <a
                href="#trang-chu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#e6cf8b]"
              >
                TRANG CHỦ
              </a>
              <a
                href="#gioi-thieu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#loai-phong"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                LOẠI PHÒNG
              </a>
              <a
                href="#thuc-don"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                THỰC ĐƠN NHÀ HÀNG
              </a>
              <a
                href="#tin-tuc"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                TIN TỨC
              </a>
            </div>
          )}
        </header>

        {/* Center Hero Typography */}
        <div className="relative z-20 max-w-[900px] mx-auto px-4 py-20 text-center text-white">
          <p className="text-sm sm:text-base font-medium mb-2 drop-shadow">
            {data.hero.eyebrow || "Chào mừng đến với"}
          </p>
          <h1 className="font-serif italic text-4xl sm:text-6xl font-bold tracking-wide mb-5 drop-shadow-md">
            {data.hero.title}
          </h1>
          <a
            href={data.hero.ctaLink || "#dat-phong"}
            className="inline-block border border-white/85 bg-black/35 hover:bg-[#b89b49] hover:border-[#b89b49] text-white text-xs sm:text-sm font-semibold px-7 py-2 rounded-xs transition-colors"
          >
            {data.hero.ctaText || "Đặt ngay"}
          </a>
        </div>

        {/* Bottom Translucent Teal Booking Bar */}
        <div
          id="dat-phong"
          className="relative z-20 bg-[#3c7382]/80 backdrop-blur-sm border-t border-white/20 py-5 px-4"
        >
          <div className="max-w-[1060px] mx-auto">
            {bookingSent ? (
              <div className="text-center text-white text-xs font-bold flex items-center justify-center gap-2 py-2">
                <CheckCircle2 className="w-4 h-4 text-[#facc15]" />
                <span>
                  Đã tiếp nhận yêu cầu đặt phòng! Bộ phận lễ tân {brandName} sẽ
                  liên hệ xác nhận ngay.
                </span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSent(true);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end text-xs text-white"
              >
                <div>
                  <label className="block mb-1 text-[11px]">Ngày nhận:</label>
                  <input
                    type="date"
                    required
                    className="w-full bg-white/15 border border-white/40 px-3 py-2 text-white placeholder:text-white/70 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-[11px]">Ngày trả:</label>
                  <input
                    type="date"
                    required
                    className="w-full bg-white/15 border border-white/40 px-3 py-2 text-white placeholder:text-white/70 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-[11px]">Số người:</label>
                  <select className="w-full bg-white/15 border border-white/40 px-3 py-2 text-white focus:outline-none">
                    <option className="text-black">1 Khách</option>
                    <option className="text-black">2 Khách</option>
                    <option className="text-black">4 Khách (Gia đình)</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-[11px]">Loại phòng:</label>
                  <select className="w-full bg-white/15 border border-white/40 px-3 py-2 text-white focus:outline-none">
                    <option className="text-black">Phòng Đơn Tiêu Chuẩn</option>
                    <option className="text-black">Phòng Đôi Hướng Biển</option>
                    <option className="text-black">Biệt Thự Gia Đình</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full border border-white/60 bg-white/15 hover:bg-[#b89b49] hover:border-[#b89b49] text-white font-bold uppercase py-2 transition-colors cursor-pointer"
                  >
                    GỬI
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION ("Mona Resort | Chào mừng đến với chúng tôi") */}
      <section id="gioi-thieu" className="py-14 sm:py-16 bg-[#f9f9f9]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <SectionHeading title={data.business.aboutTitle || "Mona Resort"} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
            <div className="aspect-[16/10] overflow-hidden shadow-xs">
              <img
                src={data.aboutShowcaseImage}
                alt={brandName}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-[#666666] leading-relaxed text-justify">
              {data.business.aboutText?.[0]}
            </p>
            <p className="text-xs text-[#666666] leading-relaxed text-justify">
              {data.business.aboutText?.[1] || data.business.aboutText?.[0]}
            </p>
          </div>
        </div>
      </section>

      {/* 4. ROOM TYPES ("Loại phòng | Chào mừng đến với chúng tôi") */}
      <section id="loai-phong" className="py-14 sm:py-16 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <SectionHeading title="Loại phòng" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.rooms || []).map((room) => (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 mb-3">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif italic text-xl font-bold text-[#111111] group-hover:text-[#b89b49] transition-colors mb-1">
                  {room.title}
                </h3>
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-bold text-[#b89b49]">{room.price}</span>
                  <span className="text-[#777777]">{room.guests}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setSelectedRoom(data.rooms?.[0] || null)}
              className="bg-[#b89b49] hover:bg-[#9f8438] text-white text-xs font-bold px-7 py-2.5 rounded-xs transition-colors"
            >
              Xem tất cả
            </button>
          </div>
        </div>
      </section>

      {/* 5. AVAILABLE AMENITIES ("Tiện ích sẵn có | Chào mừng đến với chúng tôi") */}
      <section className="py-14 sm:py-16 bg-[#f7f7f7]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <SectionHeading title="Tiện ích sẵn có" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {(data.amenities || []).map((am) => (
              <div key={am.id} className="space-y-2.5">
                <div>{renderAmenityIcon(am.icon)}</div>
                <h3 className="text-sm font-bold text-[#222222]">{am.title}</h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {am.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RESTAURANT MENU ("Thực đơn nhà hàng | Chào mừng đến với chúng tôi") */}
      <section id="thuc-don" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <SectionHeading title="Thực đơn nhà hàng" />

          {/* Framed Dashed-Gold Menu Card */}
          <div className="max-w-2xl mx-auto bg-white shadow-xl p-2 sm:p-3 border border-[#eeeeee]">
            <div className="border border-dashed border-[#c7b277] p-6 sm:p-10">
              {/* Menu Filter Tabs */}
              <div className="flex items-center justify-center gap-4 mb-8 text-[11px] font-bold uppercase">
                {[
                  { id: "mon-chinh", label: "MÓN CHÍNH" },
                  { id: "trang-mieng", label: "TRÁNG MIỆNG" },
                  { id: "thuc-uong", label: "THỨC UỐNG" }
                ].map((t) => {
                  const isActive = activeMenuTab === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() =>
                        setActiveMenuTab(
                          t.id as "mon-chinh" | "trang-mieng" | "thuc-uong"
                        )
                      }
                      className={`px-4 py-1 rounded-full transition-colors cursor-pointer ${
                        isActive
                          ? "border border-[#b89b49] text-[#b89b49]"
                          : "text-[#666666] hover:text-[#222222]"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>

              {/* Dishes List */}
              <div className="space-y-6">
                {filteredMenu.map((dish) => (
                  <div key={dish.id}>
                    <span className="block text-sm font-extrabold text-[#b89b49] mb-0.5">
                      {dish.price}
                    </span>
                    <h3 className="font-serif italic text-lg font-bold text-[#111111] mb-1">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#777777]">{dish.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 5-IMAGE FULL-BLEED RESORT MOSAIC */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {(data.mosaicTopRow || []).map((img, i) => (
            <div key={i} className="aspect-[16/10] overflow-hidden">
              <img
                src={img}
                alt={`Cảnh quan resort ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {(data.mosaicBottomRow || []).map((img, i) => (
            <div key={i} className="aspect-[16/9] overflow-hidden">
              <img
                src={img}
                alt={`Không gian biệt thự biển ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWS ("Tin tức | Chào mừng đến với chúng tôi") */}
      <section id="tin-tuc" className="py-14 sm:py-16 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <SectionHeading title="Tin tức" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="border border-[#eeeeee] flex flex-col bg-white hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#222222] mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[11.5px] text-[#777777] leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <a
                      href="#dat-phong"
                      className="inline-block border border-[#b89b49] text-[#b89b49] hover:bg-[#b89b49] hover:text-white text-[10px] font-bold uppercase px-4 py-1.5 transition-colors"
                    >
                      CHI TIẾT
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer
        id="lien-he"
        className="bg-white border-t border-[#eeeeee] pt-12 text-xs text-[#666666]"
      >
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Col 1: HÌNH ẢNH */}
            <div>
              <h3 className="font-bold uppercase text-[#222222] mb-3">
                HÌNH ẢNH
              </h3>
              <div className="grid grid-cols-3 gap-1.5">
                {(data.footerGallery || []).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Col 2: ĐĂNG KÝ + THEO DÕI TRÊN */}
            <div>
              <h3 className="font-bold uppercase text-[#222222] mb-3">
                ĐĂNG KÝ
              </h3>
              <p className="text-[11px] mb-3">
                Đăng ký để nhận được thông tin mới nhất từ chúng tôi.
              </p>
              {newsletterDone ? (
                <div className="bg-[#fdf9ed] border border-[#b89b49] p-2.5 text-[#876e26] text-xs font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Cảm ơn bạn đã đăng ký nhận bản tin!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="relative mb-5"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="w-full border border-[#dddddd] px-3 py-2 pr-9 text-xs focus:outline-none focus:border-[#b89b49]"
                  />
                  <button
                    type="submit"
                    aria-label="Đăng ký"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#b89b49]"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              <h4 className="font-bold uppercase text-[#222222] mb-2.5">
                THEO DÕI TRÊN
              </h4>
              <div className="flex items-center gap-2 text-white text-[10px] font-bold">
                <a
                  href="#lien-he"
                  className="w-6 h-6 rounded-full bg-[#3b5998] flex items-center justify-center"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="w-6 h-6 rounded-full bg-[#262626] flex items-center justify-center"
                >
                  IG
                </a>
                <a
                  href="#lien-he"
                  className="w-6 h-6 rounded-full bg-[#1da1f2] flex items-center justify-center"
                >
                  𝕏
                </a>
                <a
                  href="#lien-he"
                  className="w-6 h-6 rounded-full bg-[#f26522] flex items-center justify-center"
                >
                  ツ
                </a>
                <a
                  href="#lien-he"
                  className="w-6 h-6 rounded-full bg-[#0077b5] flex items-center justify-center"
                >
                  in
                </a>
                <a
                  href="#lien-he"
                  className="w-6 h-6 rounded-full bg-[#cd201f] flex items-center justify-center"
                >
                  ▶
                </a>
              </div>
            </div>

            {/* Col 3: THÔNG TIN LIÊN HỆ */}
            <div>
              <h3 className="font-bold uppercase text-[#222222] mb-3">
                THÔNG TIN LIÊN HỆ
              </h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#555555] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#555555] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#555555] shrink-0 mt-0.5" />
                  <span>
                    {primaryEmail}
                    <br />
                    {secondaryEmail}
                  </span>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-2 text-[11px]">
                <a href="#trang-chu" className="hover:text-[#b89b49]">
                  Trang chủ
                </a>
                <a href="#gioi-thieu" className="hover:text-[#b89b49]">
                  Giới thiệu
                </a>
                <a href="#loai-phong" className="hover:text-[#b89b49]">
                  Phòng
                </a>
                <a href="#tin-tuc" className="hover:text-[#b89b49]">
                  Tin tức
                </a>
                <a href="#lien-he" className="hover:text-[#b89b49]">
                  Liên hệ
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1b1b1b] text-zinc-400 py-3.5 text-center text-[11px]">
          © Bản quyền thuộc về {brandName}. Thiết kế website bởi{" "}
          <span className="text-white font-semibold">{brandName}</span>
        </div>
      </footer>

      {/* FLOATING MESSENGER ICON */}
      <a
        href="#dat-phong"
        aria-label="Hỗ trợ trực tuyến"
        className="fixed right-4 bottom-6 z-40 w-10 h-10 rounded-full bg-[#0084ff] text-white shadow-lg flex items-center justify-center"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </a>

      {/* ROOM MODAL */}
      {selectedRoom && (
        <div
          onClick={() => setSelectedRoom(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full overflow-hidden shadow-2xl border-t-4 border-[#b89b49]"
          >
            <img
              src={selectedRoom.image}
              alt={selectedRoom.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-[#b89b49] font-bold mb-1">
                <span>{selectedRoom.price}</span>
                <span>
                  {selectedRoom.guests} • {selectedRoom.area}
                </span>
              </div>
              <h3 className="font-serif italic text-xl font-bold text-[#111111] mb-2">
                {selectedRoom.title}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed mb-4">
                {selectedRoom.description}
              </p>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedRoom(null)}
                  className="px-4 py-2 border border-zinc-300 text-xs font-bold"
                >
                  Đóng
                </button>
                <a
                  href="#dat-phong"
                  onClick={() => setSelectedRoom(null)}
                  className="px-5 py-2 bg-[#b89b49] text-white text-xs font-bold uppercase"
                >
                  Đặt Phòng Ngay
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
