"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Truck,
  Gift,
  PiggyBank,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Eye,
  Heart,
  Check,
  X,
  Send,
  Sparkles,
  Globe,
  Share2,
  Video,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat22DefaultData,
  NoiThat22Data,
  NoiThat22Product,
} from "../../data/mockData";

interface Props {
  companyData?: Record<string, unknown>;
}

export default function DemoTemplateRenderer({ companyData }: Props) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData<NoiThat22Data>(noiThat22DefaultData, companyData),
    [companyData]
  );

  const [cartCount, setCartCount] = useState<number>(2);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] =
    useState<NoiThat22Product | null>(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const fabricProducts = useMemo(
    () => data.products.filter((p) => p.section === "fabric"),
    [data.products]
  );
  const decorativeProducts = useMemo(
    () => data.products.filter((p) => p.section === "decorative"),
    [data.products]
  );
  const luxuryProducts = useMemo(
    () => data.products.filter((p) => p.section === "luxury"),
    [data.products]
  );
  const officeProducts = useMemo(
    () => data.products.filter((p) => p.section === "office"),
    [data.products]
  );

  const handleAddToCart = (id: string) => {
    setCartCount((c) => c + 1);
    setAddedId(id);
    setTimeout(() => {
      setAddedId((prev) => (prev === id ? null : prev));
    }, 1400);
  };

  const renderSectionTitle = (title: string) => (
    <div className="mb-8 text-center">
      <h2 className="text-[20px] font-bold tracking-[0.12em] text-[#333333] uppercase md:text-[22px]">
        {title}
      </h2>
      <div className="mx-auto mt-2.5 flex items-center justify-center gap-1.5">
        <span className="h-[2px] w-10 bg-[#0ea5e9]" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[#0ea5e9]" />
        <span className="h-[2px] w-10 bg-[#0ea5e9]" />
      </div>
    </div>
  );

  const renderProductRow = (items: NoiThat22Product[]) => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((product) => (
        <div
          key={product.id}
          className="group flex flex-col border border-[#eaeaea] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0ea5e9]/50 hover:shadow-lg"
        >
          {/* Product Thumbnail */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8fafc]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Quick Action Bar */}
            <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-black/65 py-2.5 backdrop-blur-xs transition-transform duration-300 group-hover:translate-y-0">
              <button
                type="button"
                onClick={() => handleAddToCart(product.id)}
                className="flex items-center gap-1.5 bg-[#0ea5e9] px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase transition hover:bg-[#0284c7]"
              >
                {addedId === product.id ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> ĐÃ THÊM
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-3.5 w-3.5" /> THÊM GIỎ HÀNG
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="flex h-7 w-7 items-center justify-center bg-white text-[#333333] transition hover:bg-[#0ea5e9] hover:text-white"
                title="Xem nhanh"
              >
                <Eye className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Product Meta */}
          <div className="flex flex-1 flex-col items-center justify-between px-4 py-4 text-center">
            <div>
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-[#999999] uppercase">
                {product.category}
              </span>
              <h3
                onClick={() => setSelectedProduct(product)}
                className="mt-1 cursor-pointer text-[13px] font-bold tracking-wide text-[#333333] uppercase transition hover:text-[#0ea5e9]"
              >
                {product.name}
              </h3>
            </div>
            <p className="mt-2 text-[13px] font-extrabold text-[#111111]">
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333] antialiased selection:bg-[#0ea5e9] selection:text-white">
      {/* 1. CLEAN WHITE HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#efefef] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5 md:px-6">
          {/* Brand Logo: Cerulean Curtain Arch Emblem + MONA CURTAINS */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-t-full border-2 border-[#0ea5e9] bg-[#f0f9ff] text-[#0ea5e9]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-none">
              <span className="block text-[19px] font-black tracking-[0.12em] text-[#0ea5e9] uppercase">
                MONA
              </span>
              <span className="block text-[10px] font-bold tracking-[0.28em] text-[#555555] uppercase">
                CURTAINS
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden items-center gap-6 lg:flex">
            {[
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "RÈM VẢI", href: "#rem-vai" },
              { label: "RÈM TRANG TRÍ", href: "#rem-trang-tri" },
              { label: "RÈM VĂN PHÒNG", href: "#rem-van-phong" },
              { label: "RÈM CAO CẤP", href: "#rem-cao-cap" },
              { label: "TIN TỨC", href: "#tin-tuc" },
            ].map((nav, idx) => (
              <a
                key={nav.label}
                href={nav.href}
                className={`text-[12px] font-bold tracking-[0.08em] uppercase transition ${
                  idx === 0
                    ? "text-[#0ea5e9]"
                    : "text-[#444444] hover:text-[#0ea5e9]"
                }`}
              >
                {nav.label}
              </a>
            ))}
          </nav>

          {/* Right Utility Icons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsConsultModalOpen(true)}
              className="hidden rounded-xs border border-[#0ea5e9] px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#0ea5e9] uppercase transition hover:bg-[#0ea5e9] hover:text-white sm:inline-block"
            >
              BÁO GIÁ RÈM
            </button>
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="text-[#444444] transition hover:text-[#0ea5e9]"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Tài khoản"
              onClick={() => setIsConsultModalOpen(true)}
              className="text-[#444444] transition hover:text-[#0ea5e9]"
            >
              <User className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Giỏ hàng"
              className="relative text-[#444444] transition hover:text-[#0ea5e9]"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#0ea5e9] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. WINDOW BLINDS & CURTAINS HERO BANNER */}
      <section
        id="top"
        className="relative h-[420px] w-full overflow-hidden md:h-[520px]"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/25" />

        {/* Slider Arrows */}
        <button
          type="button"
          aria-label="Slide trước"
          className="absolute top-1/2 left-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white transition hover:border-[#0ea5e9] hover:bg-[#0ea5e9] md:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Slide tiếp"
          className="absolute top-1/2 right-4 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white transition hover:border-[#0ea5e9] hover:bg-[#0ea5e9] md:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Center-Left Overlay Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-6">
          <div className="max-w-xl text-white">
            <h1 className="text-3xl leading-tight font-black tracking-[0.06em] uppercase sm:text-4xl md:text-[44px]">
              <span className="text-[#0ea5e9]">{data.hero.eyebrow}</span>{" "}
              <span>{data.hero.title}</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
              {data.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={data.hero.ctaLink || "#rem-vai"}
                className="inline-block bg-[#0ea5e9] px-7 py-3 text-[12px] font-bold tracking-[0.16em] text-white uppercase shadow-md transition hover:bg-[#0284c7]"
              >
                {data.hero.ctaText}
              </a>
              <button
                type="button"
                onClick={() => setIsConsultModalOpen(true)}
                className="inline-block border border-white/80 bg-white/10 px-6 py-3 text-[12px] font-bold tracking-[0.14em] text-white uppercase backdrop-blur-xs transition hover:bg-white hover:text-[#222222]"
              >
                MANG MẪU TẬN NHÀ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RÈM VẢI (4-COLUMN ROW) */}
      <section id="rem-vai" className="mx-auto max-w-[1200px] px-4 py-14 md:px-6">
        {renderSectionTitle("RÈM VẢI")}
        {renderProductRow(fabricProducts)}
      </section>

      {/* 4. "INTO THE CURTAIN — # LITTLE STAR CURTAIN #" EDITORIAL SPLIT BANNER */}
      <section
        id="gioi-thieu"
        className="mx-auto max-w-[1200px] px-4 py-4 md:px-6"
      >
        <div className="grid grid-cols-1 overflow-hidden border border-[#e5e7eb] bg-[#f8fafc] lg:grid-cols-12">
          {/* Left Framed Window Drapes Photo */}
          <div className="relative min-h-[280px] overflow-hidden p-4 lg:col-span-4">
            <div className="h-full w-full overflow-hidden border-4 border-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
                alt="Rèm cửa sổ cao cấp"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Center Editorial Typography Box */}
          <div className="flex flex-col items-center justify-center bg-white px-6 py-10 text-center lg:col-span-4">
            <p className="text-[12px] font-bold tracking-[0.25em] text-[#64748b] uppercase">
              &gt;&gt;&gt; INTO THE CURTAIN. &lt;&lt;&lt;
            </p>
            <h3 className="mt-3 text-xl font-black tracking-[0.12em] text-[#1e293b] uppercase md:text-2xl">
              # LITTLE STAR CURTAIN #
            </h3>
            <div className="my-4 h-[2px] w-12 bg-[#0ea5e9]" />
            <p className="max-w-xs text-[13px] leading-relaxed text-[#64748b]">
              Bộ sưu tập rèm vải 2 lớp dập ngôi sao xuyên sáng lãng mạn kết hợp
              vải bố cản nắng 100% cho phòng ngủ hiện đại.
            </p>
            <button
              type="button"
              onClick={() => setIsConsultModalOpen(true)}
              className="mt-5 border border-[#0ea5e9] px-5 py-2 text-[11px] font-bold tracking-[0.16em] text-[#0ea5e9] uppercase transition hover:bg-[#0ea5e9] hover:text-white"
            >
              KHÁM PHÁ BST
            </button>
          </div>

          {/* Right Close-up Star-Cutout Blackout Curtain Drape */}
          <div className="relative min-h-[280px] overflow-hidden lg:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
              alt="Little Star Curtain Drape"
              className="h-full w-full object-cover"
            />
            <div className="Jw absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
            <span className="absolute right-4 bottom-4 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#1e293b] uppercase">
              BLACKOUT 100%
            </span>
          </div>
        </div>
      </section>

      {/* 5. RÈM TRANG TRÍ (4-COLUMN ROW) */}
      <section
        id="rem-trang-tri"
        className="mx-auto max-w-[1200px] px-4 py-14 md:px-6"
      >
        {renderSectionTitle("RÈM TRANG TRÍ")}
        {renderProductRow(decorativeProducts)}
      </section>

      {/* 6. FULL-WIDTH LIVING ROOM DRAPES & YELLOW THROW PILLOWS LIFESTYLE BANNER */}
      <section className="mx-auto max-w-[1200px] px-4 py-2 md:px-6">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[380px]">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=1600&q=85"
            alt="Không gian phòng khách với rèm vải và sofa"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#38bdf8] uppercase">
              MONA INTERIOR DRAPERY
            </span>
            <h3 className="mt-2 max-w-lg text-2xl font-black tracking-wide text-white uppercase md:text-3xl">
              NÂNG TẦM ÁNH SÁNG &amp; CẢM XÚC CHO TỪNG Ô CỬA SỔ
            </h3>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-white/90 md:text-sm">
              May đo chuẩn xác theo kích thước thực tế, phụ kiện thanh ray nhôm
              đúc siêu êm bảo hành 5 năm.
            </p>
          </div>
        </div>
      </section>

      {/* 7. RÈM CAO CẤP (4-COLUMN ROW) */}
      <section
        id="rem-cao-cap"
        className="mx-auto max-w-[1200px] px-4 py-14 md:px-6"
      >
        {renderSectionTitle("RÈM CAO CẤP")}
        {renderProductRow(luxuryProducts)}
      </section>

      {/* 8. RÈM VĂN PHÒNG (4-COLUMN ROW) */}
      <section
        id="rem-van-phong"
        className="mx-auto max-w-[1200px] px-4 pt-2 pb-16 md:px-6"
      >
        {renderSectionTitle("RÈM VĂN PHÒNG")}
        {renderProductRow(officeProducts)}
      </section>

      {/* 9. DARK PARALLAX 3-COLUMN PERKS BANNER */}
      <section
        className="relative bg-cover bg-center py-12 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.perks.map((perk) => (
              <div
                key={perk.id}
                className="flex items-center gap-4 border border-white/15 bg-white/5 px-6 py-5 backdrop-blur-xs"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#0ea5e9] text-[#0ea5e9]">
                  {perk.icon === "truck" && <Truck className="h-6 w-6" />}
                  {perk.icon === "gift" && <Gift className="h-6 w-6" />}
                  {perk.icon === "piggy" && <PiggyBank className="h-6 w-6" />}
                </div>
                <div>
                  <h4 className="text-[15px] font-bold tracking-wide text-white">
                    {perk.title}
                  </h4>
                  <p className="mt-1 text-[12px] text-white/75">
                    {perk.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. THÔNG TIN HỮU ÍCH (3-COLUMN BLOG ROW) */}
      <section id="tin-tuc" className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
        {renderSectionTitle("THÔNG TIN HỮU ÍCH")}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {data.news?.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col border border-[#eaeaea] bg-white transition hover:shadow-md"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#f5f5f5]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5 text-center">
                <div>
                  <h3 className="text-[14px] font-bold tracking-wide text-[#222222] uppercase transition group-hover:text-[#0ea5e9]">
                    {post.title}
                  </h3>
                  <div className="mx-auto my-2.5 h-[1px] w-8 bg-[#d4d4d4]" />
                  <p className="text-[12px] leading-relaxed text-[#666666]">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setIsConsultModalOpen(true)}
                    className="inline-block text-[11px] font-bold tracking-[0.14em] text-[#555555] uppercase transition hover:text-[#0ea5e9]"
                  >
                    ĐỌC THÊM
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 11. DARK PATTERNED CURTAIN BOTTOM CTA BANNER + CLEAN WHITE 3-COLUMN FOOTER */}
      <section
        className="relative bg-cover bg-center py-16 text-center text-white"
        style={{
          backgroundImage: `url('${data.bottomBanner.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/80" />
        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <h3 className="text-xl font-bold tracking-[0.1em] uppercase md:text-2xl">
            {data.bottomBanner.title}
          </h3>
          <p className="mt-3 text-xs leading-relaxed text-white/85 md:text-sm">
            {data.bottomBanner.subtitle}
          </p>
          <button
            type="button"
            onClick={() => setIsConsultModalOpen(true)}
            className="mt-6 inline-block bg-[#0ea5e9] px-8 py-3 text-[12px] font-bold tracking-[0.18em] text-white uppercase shadow-md transition hover:bg-[#0284c7]"
          >
            {data.bottomBanner.ctaText}
          </button>
        </div>
      </section>

      {/* CLEAN WHITE 3-COLUMN FOOTER */}
      <footer className="border-t border-[#eaeaea] bg-white pt-14 pb-8 text-[#444444]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Left Column: MONA CURTAINS + Contact Info */}
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-t-full border-2 border-[#0ea5e9] bg-[#f0f9ff] text-[#0ea5e9]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="leading-none">
                  <span className="block text-[17px] font-black tracking-[0.12em] text-[#0ea5e9] uppercase">
                    MONA
                  </span>
                  <span className="block text-[9px] font-bold tracking-[0.26em] text-[#555555] uppercase">
                    CURTAINS
                  </span>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 text-[13px] text-[#555555]">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0ea5e9]" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#0ea5e9]" />
                  <span>{data.business.phone.join(" - ")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#0ea5e9]" />
                  <span>{data.business.email.join(" | ")}</span>
                </li>
              </ul>
            </div>

            {/* Center Column: VỀ CHÚNG TÔI */}
            <div>
              <h4 className="text-[14px] font-bold tracking-[0.12em] text-[#222222] uppercase">
                VỀ CHÚNG TÔI
              </h4>
              <div className="mt-2 h-[2px] w-8 bg-[#0ea5e9]" />
              <div className="mt-4 grid grid-cols-2 gap-2 text-[13px] text-[#555555]">
                <a href="#gioi-thieu" className="transition hover:text-[#0ea5e9]">
                  Giới thiệu
                </a>
                <a href="#rem-vai" className="transition hover:text-[#0ea5e9]">
                  Rèm vải
                </a>
                <a
                  href="#rem-trang-tri"
                  className="transition hover:text-[#0ea5e9]"
                >
                  Rèm trang trí
                </a>
                <a
                  href="#rem-van-phong"
                  className="transition hover:text-[#0ea5e9]"
                >
                  Rèm văn phòng
                </a>
                <a
                  href="#rem-cao-cap"
                  className="transition hover:text-[#0ea5e9]"
                >
                  Rèm cao cấp
                </a>
                <a href="#tin-tuc" className="transition hover:text-[#0ea5e9]">
                  Tin tức
                </a>
              </div>
              {/* Social circles */}
              <div className="mt-5 flex items-center gap-2.5">
                {[Globe, Share2, Video, Heart].map((Icon, i) => (
                  <button
                    key={i}
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4d4d4] text-[#555555] transition hover:border-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: ĐĂNG KÝ NHẬN TIN */}
            <div>
              <h4 className="text-[14px] font-bold tracking-[0.12em] text-[#222222] uppercase">
                ĐĂNG KÝ NHẬN TIN
              </h4>
              <div className="mt-2 h-[2px] w-8 bg-[#0ea5e9]" />
              <p className="mt-4 text-[13px] leading-relaxed text-[#666666]">
                Nhận bảng giá rèm cửa mới nhất và ưu đãi giảm 15% khi đặt may
                trọn gói căn hộ, nhà phố.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) {
                    setNewsletterSent(true);
                    setNewsletterEmail("");
                  }
                }}
                className="mt-4 flex"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  className="w-full border border-[#d4d4d4] px-3.5 py-2 text-[13px] outline-none focus:border-[#0ea5e9]"
                />
                <button
                  type="submit"
                  className=" flex shrink-0 items-center justify-center bg-[#0ea5e9] px-4 text-white transition hover:bg-[#0284c7]"
                  aria-label="Gửi đăng ký"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              {newsletterSent && (
                <p className="mt-2 text-xs font-medium text-[#0284c7]">
                  Cảm ơn bạn đã đăng ký nhận báo giá từ Mona Curtains!
                </p>
              )}
            </div>
          </div>

          <div className="mt-10 border-t border-[#efefef] pt-6 text-center text-[12px] text-[#888888]">
            © {new Date().getFullYear()} Thiết kế &amp; thi công bởi{" "}
            <span className="font-bold text-[#0ea5e9]">
              {data.business.name}
            </span>
            . Bảo lưu mọi quyền.
          </div>
        </div>
      </footer>

      {/* QUICK-VIEW PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative grid w-full max-w-2xl grid-cols-1 overflow-hidden bg-white shadow-2xl md:grid-cols-2">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-[#333333] transition hover:bg-[#0ea5e9] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-square w-full bg-[#f8fafc]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.16em] text-[#0ea5e9] uppercase">
                  {selectedProduct.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-[#222222] uppercase">
                  {selectedProduct.name}
                </h3>
                <p className="mt-2 text-xl font-black text-[#0ea5e9]">
                  {selectedProduct.price}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-[#555555]">
                  {selectedProduct.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-[#555555]">
                  <li>• Đơn giá tính theo mét ngang hoàn thiện (đã gồm thanh treo)</li>
                  <li>• Khảo sát đo đạc và mang mẫu vải tận nơi miễn phí</li>
                  <li>• Bảo hành phụ kiện &amp; đường may 36 tháng</li>
                </ul>
              </div>
              <div className="mt-6 flex gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-[#0ea5e9] py-2.5 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#0284c7]"
                >
                  THÊM VÀO GIỎ
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct(null);
                    setIsConsultModalOpen(true);
                  }}
                  className="border border-[#0ea5e9] px-4 py-2.5 text-xs font-bold text-[#0ea5e9] uppercase transition hover:bg-[#f0f9ff]"
                >
                  ĐẶT ĐO RÈM
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONSULTATION / SAMPLE BOOKING MODAL */}
      {isConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setIsConsultModalOpen(false);
                setConsultSubmitted(false);
              }}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[#333333] transition hover:bg-[#0ea5e9] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-base font-bold tracking-wider text-[#222222] uppercase">
              ĐẶT LỊCH MANG MẪU RÈM TẬN NHÀ
            </h3>
            <p className="mt-1 text-xs text-[#666666]">
              Kỹ thuật viên {data.business.name} sẽ mang 150+ mẫu rèm vải, rèm
              cầu vồng đến đo đạc &amp; báo giá miễn phí.
            </p>
            {consultSubmitted ? (
              <div className="mt-5 rounded-xs border border-[#0ea5e9]/30 bg-[#f0f9ff] p-4 text-center">
                <p className="text-sm font-bold text-[#0284c7]">
                  Đã ghi nhận yêu cầu khảo sát!
                </p>
                <p className="mt-1 text-xs text-[#555555]">
                  Chuyên viên rèm cửa sẽ liên hệ xác nhận lịch hẹn trong 15
                  phút.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultSubmitted(true);
                }}
                className="mt-4 space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên quý khách *"
                  className="w-full border border-[#d4d4d4] px-3.5 py-2 text-xs outline-none focus:border-[#0ea5e9]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ *"
                  className="w-full border border-[#d4d4d4] px-3.5 py-2 text-xs outline-none focus:border-[#0ea5e9]"
                />
                <input
                  type="text"
                  placeholder="Địa chỉ công trình / Căn hộ"
                  className="w-full border border-[#d4d4d4] px-3.5 py-2 text-xs outline-none focus:border-[#0ea5e9]"
                />
                <select className="w-full border border-[#d4d4d4] px-3.5 py-2 text-xs outline-none focus:border-[#0ea5e9]">
                  <option>Rèm vải 2 lớp cao cấp</option>
                  <option>Rèm trang trí / Rèm sợi</option>
                  <option>Rèm châu Âu tân cổ điển</option>
                  <option>Rèm sáo nhôm / Rèm cuốn văn phòng</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#0ea5e9] py-2.5 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#0284c7]"
                >
                  GỬI YÊU CẦU TƯ VẤN MIỄN PHÍ
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
