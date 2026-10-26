"use client";

import React, { useMemo, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronRight,
  ChevronDown,
  Globe,
  Share2,
  Video,
  Rss,
  CreditCard,
  Wallet,
  MessageCircle,
  Check,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa8DefaultData,
  NhaKhoa8Data,
  NhaKhoa8Item,
} from "../../data/mockData";

interface Props {
  companyData?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ companyData }: Props) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData<NhaKhoa8Data>(nhaKhoa8DefaultData, companyData),
    [companyData]
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<NhaKhoa8Item | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const implantItems = useMemo(
    () => data.items.filter((i) => i.section === "implant"),
    [data.items]
  );
  const veneerItems = useMemo(
    () => data.items.filter((i) => i.section === "veneer"),
    [data.items]
  );
  const alignerItems = useMemo(
    () => data.items.filter((i) => i.section === "aligner"),
    [data.items]
  );
  const accessoryItems = useMemo(
    () => data.items.filter((i) => i.section === "accessories"),
    [data.items]
  );

  const handleAdd = (id: string) => {
    setCartCount((c) => c + 1);
    setAddedId(id);
    setTimeout(() => {
      setAddedId((prev) => (prev === id ? null : prev));
    }, 1200);
  };

  // Distinctive NK011 boxed left header with extending line and right chevron
  const renderBoxedHeader = (title: string) => (
    <div className="mb-7 flex items-center">
      <div className="border border-[#e0e0e0] bg-white px-5 py-2.5 text-[14px] font-extrabold tracking-wide text-[#222222] uppercase">
        {title}
      </div>
      <div className="h-[1px] flex-1 bg-[#ebebeb]" />
      <span className="ml-2 text-[#aaaaaa]">
        <ChevronRight className="h-4 w-4" />
      </span>
    </div>
  );

  const renderCardGrid = (items: NhaKhoa8Item[]) => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative flex flex-col justify-between border border-[#eeeeee] bg-white p-5 text-center transition hover:border-[#b58952] hover:shadow-md"
        >
          {item.discountBadge && (
            <span className="absolute top-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#b59475] text-[11px] font-bold text-white">
              {item.discountBadge}
            </span>
          )}
          <div>
            <div
              onClick={() => setSelectedItem(item)}
              className="relative mx-auto flex aspect-square w-full cursor-pointer items-center justify-center overflow-hidden bg-white p-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3
              onClick={() => setSelectedItem(item)}
              className="mt-4 cursor-pointer text-[13px] font-bold text-[#222222] transition group-hover:text-[#b58952]"
            >
              {item.name}
            </h3>
            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-1.5 text-[12px]">
              {item.oldPrice && (
                <span className="text-[#999999] line-through">
                  {item.oldPrice}
                </span>
              )}
              <span className="font-bold text-[#b58952]">{item.price}</span>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => handleAdd(item.id)}
              className="inline-flex items-center justify-center gap-1.5 bg-[#1c1c1c] px-5 py-2 text-[10px] font-bold tracking-wider text-white uppercase transition hover:bg-[#b58952]"
            >
              {addedId === item.id ? (
                <>
                  <Check className="h-3 w-3" /> ĐÃ CHỌN
                </>
              ) : (
                "THÊM VÀO GIỎ"
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-[#222222] antialiased selection:bg-[#b58952] selection:text-white">
      {/* 1. 3-TIER EXECUTIVE DARK HEADER */}
      <header className="sticky top-0 z-40">
        {/* Tier 1: Top Utility Strip */}
        <div className="border-b border-white/10 bg-[#141414] text-[11px] text-[#cccccc]">
          <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between px-4 py-1.5">
            <div className="flex flex-wrap items-center gap-5">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-[#b58952]" />
                {data.business.address}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-[#b58952]" />
                {data.business.phone[0]}
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-white/80">
              <Globe className="h-3.5 w-3.5 cursor-pointer hover:text-[#b58952]" />
              <Share2 className="h-3.5 w-3.5 cursor-pointer hover:text-[#b58952]" />
              <Video className="h-3.5 w-3.5 cursor-pointer hover:text-[#b58952]" />
            </div>
          </div>
        </div>

        {/* Tier 2: Main Brand + Search + Icons */}
        <div className="border-b border-white/10 bg-[#1c1c1c] py-4 text-white">
          <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-4 px-4">
            {/* Left Logo */}
            <a href="#top" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b58952] text-xs font-black text-[#b58952]">
                VS
              </div>
              <div className="leading-tight">
                <span className="block text-[10px] font-semibold text-[#aaaaaa]">
                  VIOSMILE.Dental / Clinic
                </span>
                <span className="block text-sm font-extrabold tracking-wider text-white uppercase">
                  {data.business.name}
                </span>
              </div>
            </a>

            {/* Center Wide Search Bar with Bronze Button */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-1 items-center max-w-md"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm trụ Implant, răng sứ, khay niềng..."
                className="w-full bg-white px-3.5 py-2 text-xs text-[#222222] outline-none"
              />
              <button
                type="submit"
                aria-label="Tìm kiếm"
                className="flex h-[32px] w-11 shrink-0 items-center justify-center bg-[#b58952] text-white transition hover:bg-[#9c7340]"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>

            {/* Right User, Wishlist, Bag Box */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Tài khoản"
                className="text-white/85 transition hover:text-[#b58952]"
              >
                <User className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Yêu thích"
                className="text-white/85 transition hover:text-[#b58952]"
              >
                <Heart className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center border border-white/60 text-[11px] font-bold text-white transition hover:border-[#b58952] hover:text-[#b58952]"
              >
                {cartCount}
              </button>
            </div>
          </div>
        </div>

        {/* Tier 3: Centered Navigation Bar */}
        <div className="bg-[#242424] text-white">
          <div className="mx-auto flex max-w-[1140px] items-center justify-center gap-7 overflow-x-auto px-4 py-2.5 text-[11px] font-bold tracking-wider uppercase">
            {[
              { label: "TRANG CHỦ", href: "#top", active: true, drop: false },
              {
                label: "IMPLANT THỤY SĨ",
                href: "#implant-section",
                active: false,
                drop: true,
              },
              {
                label: "RĂNG SỨ & VENEER",
                href: "#veneer-section",
                active: false,
                drop: true,
              },
              {
                label: "KHAY NIỀNG 3D",
                href: "#aligner-section",
                active: false,
                drop: true,
              },
              {
                label: "THIẾT BỊ NHA KHOA",
                href: "#accessories-section",
                active: false,
                drop: true,
              },
              { label: "BLOGS", href: "#blog-section", active: false, drop: false },
              {
                label: "LIÊN HỆ",
                href: "#footer-section",
                active: false,
                drop: false,
              },
            ].map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                className={`flex shrink-0 items-center gap-1 pb-0.5 transition ${
                  nav.active
                    ? "border-b-2 border-[#b58952] text-[#b58952]"
                    : "text-white/85 hover:text-[#b58952]"
                }`}
              >
                <span>{nav.label}</span>
                {nav.drop && <ChevronDown className="h-3 w-3 opacity-70" />}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* 2. DARK LUXURY SPOTLIGHT HERO BANNER */}
      <section
        id="top"
        className="relative h-[420px] w-full overflow-hidden bg-[#0a0a0a] md:h-[480px]"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1140px] items-center justify-between px-4">
          <div className="max-w-lg text-white">
            <h1 className="text-3xl font-extrabold tracking-wide md:text-4xl">
              {data.hero.title}
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-white/80 md:text-sm">
              {data.hero.subtitle}
            </p>
            <div className="mt-6">
              <a
                href={data.hero.ctaLink || "#implant-section"}
                className="inline-block border border-[#b58952] px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#b58952]"
              >
                {data.hero.ctaText}
              </a>
            </div>
          </div>

          <div className="hidden text-right lg:block">
            <span className="font-serif text-3xl tracking-[0.25em] text-white/30 uppercase">
              CITIZEN SMILE
            </span>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: TRỒNG RĂNG IMPLANT */}
      <section id="implant-section" className="mx-auto max-w-[1140px] px-4 py-12">
        {renderBoxedHeader("TRỒNG RĂNG IMPLANT")}
        {renderCardGrid(implantItems)}
      </section>

      {/* 4. FULL-WIDTH MID LIFESTYLE PARALLAX BANNER ("CÔNG NGHỆ BỌC SỨ VIOF") */}
      <section className="relative my-4 h-[300px] w-full overflow-hidden md:h-[360px]">
        <img
          src={data.midBanner.image}
          alt={data.midBanner.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="text-2xl font-extrabold tracking-wider uppercase md:text-3xl">
            {data.midBanner.title}
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-white/85 md:text-sm">
            {data.midBanner.subtitle}
          </p>
        </div>
      </section>

      {/* 5. SECTION 2: RĂNG SỨ & VENEER THẨM MỸ */}
      <section id="veneer-section" className="mx-auto max-w-[1140px] px-4 py-12">
        {renderBoxedHeader("RĂNG SỨ & VENEER CÔNG SỞ")}
        {renderCardGrid(veneerItems)}
      </section>

      {/* 6. SECTION 3: KHAY NIỀNG RĂNG 3D */}
      <section id="aligner-section" className="mx-auto max-w-[1140px] px-4 py-8">
        {renderBoxedHeader("KHAY NIỀNG 3D")}
        {renderCardGrid(alignerItems)}
      </section>

      {/* 7. SECTION 4: THIẾT BỊ NHA KHOA CÔNG SỞ */}
      <section
        id="accessories-section"
        className="mx-auto max-w-[1140px] px-4 py-12"
      >
        {renderBoxedHeader("THIẾT BỊ NHA KHOA SỐ")}
        {renderCardGrid(accessoryItems)}
      </section>

      {/* 8. TIN TỨC / BLOG (3-COLUMN CARDS) */}
      <section id="blog-section" className="mx-auto max-w-[1140px] px-4 py-10">
        {renderBoxedHeader("TIN TỨC / BLOG")}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {data.news?.map((post) => (
            <article key={post.id} className="group flex flex-col">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#f5f5f5]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-[13.5px] leading-snug font-bold text-[#222222] transition group-hover:text-[#b58952]">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-[#777777]">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 9. NEWSLETTER BAR ("ĐĂNG KÝ NHẬN THÔNG TIN") */}
      <section className="mx-auto max-w-[1140px] border-t border-[#ebebeb] px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h3 className="text-base font-extrabold tracking-wide text-[#222222] uppercase">
            ĐĂNG KÝ NHẬN THÔNG TIN ƯU ĐÃI IMPLANT
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newsletterEmail.trim()) {
                setNewsletterSent(true);
                setNewsletterEmail("");
              }
            }}
            className="flex w-full max-w-md"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Email ..."
              className="w-full bg-[#f0f0f0] px-4 py-2.5 text-xs text-[#333333] outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-[#141414] px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#b58952]"
            >
              ĐĂNG KÝ
            </button>
          </form>
        </div>
        {newsletterSent && (
          <p className="mt-2 text-right text-xs font-semibold text-[#b58952]">
            Cảm ơn quý khách đã đăng ký nhận bảng giá từ VioSmile!
          </p>
        )}
      </section>

      {/* 10. DARK 4-COLUMN FOOTER */}
      <footer
        id="footer-section"
        className="bg-[#262626] pt-14 pb-8 text-xs text-[#cccccc]"
      >
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: THÔNG TIN LIÊN HỆ */}
            <div>
              <h4 className="text-[13px] font-bold text-white uppercase">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b58952]" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#b58952]" />
                  <span>{data.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#b58952]" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
              <div className="mt-5 flex items-center gap-2">
                {[Globe, Share2, Video, Rss].map((Icon, idx) => (
                  <span
                    key={idx}
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:border-[#b58952] hover:text-[#b58952]"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                ))}
              </div>
            </div>

            {/* Col 2: LIÊN KẾT */}
            <div>
              <h4 className="text-[13px] font-bold text-white uppercase">
                LIÊN KẾT
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#implant-section" className="hover:text-[#b58952]">
                    Trồng răng Implant
                  </a>
                </li>
                <li>
                  <a href="#veneer-section" className="hover:text-[#b58952]">
                    Răng sứ &amp; Mặt dán Veneer
                  </a>
                </li>
                <li>
                  <a href="#aligner-section" className="hover:text-[#b58952]">
                    Khay niềng 3D
                  </a>
                </li>
                <li>
                  <a
                    href="#accessories-section"
                    className="hover:text-[#b58952]"
                  >
                    Thiết bị nha khoa số
                  </a>
                </li>
                <li>
                  <a href="#blog-section" className="hover:text-[#b58952]">
                    Blogs kiến thức
                  </a>
                </li>
                <li>
                  <a href="#footer-section" className="hover:text-[#b58952]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: HỖ TRỢ */}
            <div>
              <h4 className="text-[13px] font-bold text-white uppercase">
                HỖ TRỢ
              </h4>
              <ul className="mt-4 space-y-2">
                <li>Hướng dẫn đặt lịch hẹn</li>
                <li>Hướng dẫn trả góp 0% lãi suất</li>
                <li>Chính sách bảo hành Implant trọn đời</li>
                <li>Chính sách bảo hành răng sứ</li>
                <li>Tư vấn bác sĩ chuyên khoa</li>
              </ul>
            </div>

            {/* Col 4: GỌI ĐỂ ĐẶT LỊCH NHANH HƠN */}
            <div>
              <h4 className="text-[13px] font-bold text-white uppercase">
                GỌI ĐỂ ĐẶT LỊCH NHANH HƠN
              </h4>
              <p className="mt-2 text-sm font-bold text-white">
                {data.business.phone[0]}
              </p>
              <h5 className="mt-4 text-[12px] font-bold text-white uppercase">
                CHÍNH SÁCH THANH TOÁN
              </h5>
              <p className="mt-1">Miễn phí chụp phim CT 3D toàn hàm</p>
              <p className="mt-2">Thanh toán linh hoạt:</p>
              <ul className="mt-1 list-inside list-disc space-y-1 text-[11px]">
                <li>Trực tiếp tại phòng khám</li>
                <li>Chuyển khoản : Ngân hàng / Ví MoMo / Trả góp thẻ tín dụng</li>
              </ul>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-md bg-[#f59e0b] px-3 py-2 text-[#111111]">
                  <CreditCard className="h-6 w-6" />
                  <span className="text-[10px] font-black uppercase">
                    CREDIT CARD
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-[#7c2d12] px-3 py-2 text-white">
                  <Wallet className="h-6 w-6 text-[#4ade80]" />
                  <span className="text-[10px] font-bold uppercase">
                    E-WALLET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Copyright */}
      <div className="bg-[#1a1a1a] py-3 text-center text-[11px] text-[#999999]">
        © Thiết Kế Và Lập Trình Bởi <strong>{data.business.name}</strong>
      </div>

      {/* Floating Green Chat Button */}
      <a
        href="#implant-section"
        aria-label="Hỗ trợ trực tuyến"
        className="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#10b981] text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Quick View Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs">
          <div className="relative grid w-full max-w-xl grid-cols-1 overflow-hidden bg-white shadow-2xl sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-[#222222] hover:bg-[#b58952] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-square bg-[#f9f9f9]">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#b58952] uppercase">
                  VIOSMILE SWISS STANDARD
                </span>
                <h3 className="mt-1 text-base font-bold text-[#111111]">
                  {selectedItem.name}
                </h3>
                <p className="mt-2 text-base font-extrabold text-[#b58952]">
                  {selectedItem.price}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#555555]">
                  {selectedItem.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleAdd(selectedItem.id);
                  setSelectedItem(null);
                }}
                className="mt-6 w-full bg-[#141414] py-2.5 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#b58952]"
              >
                ĐẶT LỊCH TƯ VẤN GÓI NÀY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
