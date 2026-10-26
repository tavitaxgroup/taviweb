'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  ShoppingBag,
  MapPin,
  MessageCircle,
  CheckCircle2,
  X,
  Plus,
  Minus,
  Trash2
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultNoiThat29Data,
  type NoiThat29TemplateData,
  type FurneutralProduct,
  type FurneutralProject
} from '../../data/mockData';

interface Props {
  data?: Record<string, any>;
}

const formatVND = (amount: number) =>
  `${amount.toLocaleString('vi-VN')} ₫`;

export function DemoTemplateRenderer({ data }: Props) {
  const templateData = useMemo(
    () => adaptClonedTemplateData(defaultNoiThat29Data, data) as NoiThat29TemplateData,
    [data]
  );

  const [activeSlide, setActiveSlide] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<FurneutralProduct | null>(null);
  const [selectedProject, setSelectedProject] = useState<FurneutralProject | null>(null);
  const [comboModalOpen, setComboModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<{ product: FurneutralProduct; qty: number }[]>([]);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2600);
  };

  const addToCart = (product: FurneutralProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    showToast(`Đã thêm mã "${product.code}" vào giỏ hàng Furneutral`);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalCartAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  const matchesSearch = (p: FurneutralProduct) =>
    !searchQuery.trim() ||
    p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.name.toLowerCase().includes(searchQuery.toLowerCase());

  const newProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.group === 'new' && matchesSearch(p))
        .slice(0, 2),
    [templateData.products, searchQuery]
  );

  const promoProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.group === 'promo' && matchesSearch(p))
        .slice(0, 3),
    [templateData.products, searchQuery]
  );

  const row1Mosaic = templateData.mosaicCategories.filter((m) => m.row === 1);
  const row2Mosaic = templateData.mosaicCategories.filter((m) => m.row === 2);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentSlide =
    templateData.heroSlides[activeSlide % templateData.heroSlides.length] ||
    templateData.heroSlides[0];

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white"
    >
      {/* Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded shadow-xl text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Floating Messenger Support Bubble (matching right edge of screenshot) */}
      <button
        type="button"
        onClick={() => scrollToSection('section-footer')}
        className="fixed right-3 top-24 z-40 w-9 h-9 rounded-full bg-[#0084ff] text-white shadow-lg flex items-center justify-center hover:scale-105 transition"
        aria-label="Hỗ trợ trực tuyến"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
      </button>

      {/* 1. Full-Bleed Industrial Loft Hero with Transparent Overlay Navbar */}
      <section className="relative h-[480px] sm:h-[620px] bg-stone-900 overflow-hidden">
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/45" />

        {/* Overlay Header */}
        <header className="relative z-20 max-w-[1360px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4 text-white text-[11px] font-bold tracking-wider uppercase">
          {/* Left Mit Badge Logo + Nav */}
          <div className="flex items-center gap-6">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setSearchQuery('');
              }}
              className="bg-[#0e1b29] border border-amber-400/40 px-3 py-1.5 flex flex-col items-center justify-center leading-none shrink-0"
            >
              <span className="text-lg font-serif italic text-amber-300 capitalize">
                Mit
              </span>
              <span className="text-[7px] tracking-widest text-slate-300">
                INTERIOR DESIGN
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              <button
                type="button"
                onClick={() => scrollToSection('top')}
                className="hover:text-amber-300 transition"
              >
                HOME
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('section-new')}
                className="hover:text-amber-300 transition"
              >
                GIỚI THIỆU
              </button>
            </nav>
          </div>

          {/* Center Framed [ furneutral ] Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setSearchQuery('');
            }}
            className="border border-white/85 px-5 py-1.5 text-lg sm:text-xl font-light tracking-[0.18em] lowercase text-white hover:bg-white/10 transition"
          >
            {templateData.business.productBrand}
          </a>

          {/* Right Nav + Hotline + Search + Cart */}
          <div className="flex items-center gap-5">
            <nav className="hidden xl:flex items-center gap-5">
              <button
                type="button"
                onClick={() => scrollToSection('section-projects')}
                className="hover:text-amber-300 transition"
              >
                DỰ ÁN
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('section-promo')}
                className="hover:text-amber-300 transition"
              >
                TIN TỨC
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('section-footer')}
                className="hover:text-amber-300 transition"
              >
                LIÊN HỆ
              </button>
              <span className="text-white/95">
                HOTLINE: {templateData.business.hotline}
              </span>
            </nav>

            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-amber-300 transition"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 hover:text-amber-300 transition"
            >
              <span className="hidden sm:inline">
                GIỎ HÀNG / {formatVND(totalCartAmount)}
              </span>
              <span className="w-6 h-6 border border-white flex items-center justify-center text-[10px]">
                {totalCartItems}
              </span>
            </button>
          </div>
        </header>

        {/* Optional Floating Search Input */}
        {searchOpen && (
          <div className="relative z-20 max-w-md mx-auto px-4 mt-2">
            <div className="bg-white/95 backdrop-blur-xs p-2 flex items-center shadow-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm mã sản phẩm SH08, CU506, DE01..."
                className="flex-1 px-3 py-1.5 text-xs text-slate-900 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="px-3 text-slate-500 hover:text-slate-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Slider Dots at Bottom Center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {templateData.heroSlides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full border border-white transition ${
                idx === activeSlide ? 'bg-white' : 'bg-transparent'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. SECTION: SẢN PHẨM MỚI (3-Column Minimalist Layout) */}
      <section id="section-new" className="py-16 px-4 max-w-[1320px] mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.12em] text-slate-800">
            SẢN PHẨM MỚI
          </h2>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-[10px] font-extrabold uppercase tracking-widest text-slate-800 hover:underline"
          >
            XEM TẤT CẢ
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Col 1: Combo 3 sản phẩm bất kì, giảm 15% */}
          <div className="flex flex-col items-center text-center">
            <div
              onClick={() => setComboModalOpen(true)}
              className="w-full h-[360px] bg-white border border-slate-100 flex flex-col items-center justify-center p-6 cursor-pointer hover:border-slate-300 transition"
            >
              <p className="text-xl sm:text-2xl font-extrabold text-[#ff1d25] tracking-tight">
                {templateData.comboPromoCard.headline}
              </p>
              <p className="text-xs font-medium text-[#00bcd4] mt-1.5">
                {templateData.comboPromoCard.dateRange}
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <h3 className="text-xs font-extrabold text-slate-900">
                {templateData.comboPromoCard.cardTitle}
              </h3>
              <button
                type="button"
                onClick={() => setComboModalOpen(true)}
                className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 hover:text-[#16a34a] hover:border-[#16a34a] transition"
              >
                {templateData.comboPromoCard.ctaLabel}
              </button>
            </div>
          </div>

          {/* Cols 2 & 3: SH08 and CU506 */}
          {newProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center group"
            >
              <div
                onClick={() => setSelectedProduct(product)}
                className="w-full h-[360px] bg-[#f7f7f7] overflow-hidden cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.code}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="pt-4 space-y-1.5">
                <h3
                  onClick={() => setSelectedProduct(product)}
                  className="text-xs font-extrabold uppercase text-slate-900 cursor-pointer"
                >
                  {product.code}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <span className="font-semibold text-[#16a34a]">
                    {formatVND(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-slate-400 line-through text-[11px]">
                      {formatVND(product.oldPrice)}
                    </span>
                  )}
                  {product.discountPercent && (
                    <span className="text-[#dc2626] font-semibold text-[11px]">
                      -{product.discountPercent}%
                    </span>
                  )}
                </div>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 hover:text-[#16a34a] hover:border-[#16a34a] transition"
                  >
                    THÊM VÀO GIỎ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION: CHƯƠNG TRÌNH KHUYẾN MÃI (3 Work Desks: DE01, DE04, DE09) */}
      <section id="section-promo" className="py-12 px-4 max-w-[1320px] mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.12em] text-slate-800">
            CHƯƠNG TRÌNH KHUYẾN MÃI
          </h2>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-[10px] font-extrabold uppercase tracking-widest text-slate-800 hover:underline"
          >
            XEM TẤT CẢ
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {promoProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center group"
            >
              <div
                onClick={() => setSelectedProduct(product)}
                className="w-full h-[360px] bg-[#f7f7f7] overflow-hidden cursor-pointer relative"
              >
                <img
                  src={product.image}
                  alt={product.code}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="pt-4 space-y-1.5">
                <h3
                  onClick={() => setSelectedProduct(product)}
                  className="text-xs font-extrabold uppercase text-slate-900 cursor-pointer"
                >
                  {product.code}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <span className="font-semibold text-[#16a34a]">
                    {formatVND(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-slate-400 line-through text-[11px]">
                      {formatVND(product.oldPrice)}
                    </span>
                  )}
                  {product.discountPercent && (
                    <span className="text-[#dc2626] font-semibold text-[11px]">
                      -{product.discountPercent}%
                    </span>
                  )}
                </div>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 hover:text-[#16a34a] hover:border-[#16a34a] transition"
                  >
                    THÊM VÀO GIỎ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Seamless Full-Width 2-Row Bento Category Mosaic with [ BRACKETED ] Titles */}
      <section className="mt-10">
        {/* Row 1: 3 cols + 6 cols + 3 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {row1Mosaic.map((tile) => (
            <div
              key={tile.id}
              onClick={() => scrollToSection('section-promo')}
              className={`${
                tile.spanCols === 6 ? 'lg:col-span-6' : 'lg:col-span-3'
              } relative h-[340px] sm:h-[400px] overflow-hidden cursor-pointer group`}
            >
              <img
                src={tile.image}
                alt={tile.bracketTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors flex flex-col items-center justify-center text-center p-4 text-white">
                <h3 className="text-base sm:text-lg font-light tracking-[0.15em] uppercase">
                  {tile.bracketTitle}
                </h3>
                {tile.countLabel && (
                  <p className="text-[10px] tracking-widest uppercase text-white/80 mt-1">
                    {tile.countLabel}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 4 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {row2Mosaic.map((tile) => (
            <div
              key={tile.id}
              onClick={() => scrollToSection('section-new')}
              className="relative h-[340px] sm:h-[400px] overflow-hidden cursor-pointer group"
            >
              <img
                src={tile.image}
                alt={tile.bracketTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors flex flex-col items-center justify-center text-center p-4 text-white">
                <h3 className="text-base sm:text-lg font-light tracking-[0.15em] uppercase">
                  {tile.bracketTitle}
                </h3>
                {tile.countLabel && (
                  <p className="text-[10px] tracking-widest uppercase text-white/80 mt-1">
                    {tile.countLabel}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SECTION: DỰ ÁN (3x2 = 6 Project Portfolio Cards with Top-Left Black Date Badge) */}
      <section id="section-projects" className="py-16 px-4 max-w-[1320px] mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.12em] text-slate-800">
            DỰ ÁN
          </h2>
          <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-800">
            XEM TẤT CẢ
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {templateData.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-full h-60 overflow-hidden relative bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Top-Left Black Date Badge ("03 Th11") */}
                <div className="absolute top-3 left-3 bg-black text-white w-9 h-10 flex flex-col items-center justify-center leading-none">
                  <span className="text-xs font-extrabold">{project.dateDay}</span>
                  <span className="text-[9px] text-slate-300 mt-0.5">
                    {project.dateMonth}
                  </span>
                </div>
              </div>

              <div className="pt-3.5 space-y-1">
                <h3 className="text-xs text-slate-600 group-hover:text-slate-900 font-medium">
                  {project.title}
                </h3>
                <span className="block text-slate-400 text-xs">...</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Pure Black 5-Column Footer matching NT032 screenshot */}
      <footer id="section-footer" className="bg-[#080808] text-slate-300 text-[11px] pt-14">
        <div className="max-w-[1320px] mx-auto px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1 (2 cols) */}
          <div className="lg:col-span-2 space-y-3 font-bold uppercase text-white tracking-wider">
            <p
              onClick={() => scrollToSection('top')}
              className="cursor-pointer hover:text-amber-400"
            >
              HOME
            </p>
            <p
              onClick={() => scrollToSection('section-new')}
              className="cursor-pointer hover:text-amber-400"
            >
              GIỚI THIỆU
            </p>
            <p
              onClick={() => scrollToSection('section-promo')}
              className="cursor-pointer hover:text-amber-400"
            >
              FURNEUTRAL
            </p>
            <p
              onClick={() => scrollToSection('section-projects')}
              className="cursor-pointer hover:text-amber-400"
            >
              DỰ ÁN
            </p>
          </div>

          {/* Col 2 (2 cols) */}
          <div className="lg:col-span-2 space-y-3 font-bold uppercase text-white tracking-wider">
            <p className="cursor-pointer hover:text-amber-400">TIN TỨC</p>
            <p className="cursor-pointer hover:text-amber-400">LIÊN HỆ</p>
            <p className="cursor-pointer hover:text-amber-400">BẢN ĐỒ</p>
            <p className="cursor-pointer hover:text-amber-400">TUYỂN DỤNG</p>
          </div>

          {/* Col 3: MIT INTERIOR DESIGN (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5 text-slate-400">
            <h4 className="font-extrabold uppercase text-white tracking-wider">
              {templateData.business.studioBrand}
            </h4>
            <p>{templateData.business.address}</p>
            <p>{templateData.business.districtCity}</p>
            <p>Hotline: {templateData.business.hotline}</p>
            <p>CSKH: {templateData.business.cskh}</p>
          </div>

          {/* Col 4: FURNEUTRAL (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5 text-slate-400">
            <h4 className="font-extrabold uppercase text-white tracking-wider">
              FURNEUTRAL
            </h4>
            <p>{templateData.business.address}</p>
            <p>{templateData.business.districtCity}</p>
            <p>Hotline: {templateData.business.hotline}</p>
            <p>CSKH: {templateData.business.cskh}</p>
          </div>

          {/* Col 5: BẢN ĐỒ (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-extrabold uppercase text-white tracking-wider">
              BẢN ĐỒ
            </h4>
            <div className="bg-slate-100 rounded-xs p-3 text-slate-800 relative overflow-hidden h-28 flex flex-col justify-between border border-slate-700">
              <div className="flex items-start justify-between">
                <span className="bg-white px-2 py-0.5 text-[10px] text-sky-700 font-semibold shadow-2xs">
                  Xem bản đồ lớn hơn
                </span>
                <span className="text-[10px] font-bold text-slate-500">
                  PHƯỜNG 11 • BÌNH THẠNH
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/95 p-2 rounded shadow-xs">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 fill-current" />
                <div className="text-[10px] leading-tight">
                  <strong className="text-slate-900 block">
                    {templateData.business.address}, {templateData.business.districtCity}
                  </strong>
                  <span className="text-slate-500">
                    Showroom & Xưởng Thiết Kế Furneutral
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-[11px] text-slate-500">
          © Bản quyền thuộc về . Thiết kế website{' '}
          <strong className="text-slate-300">Mona Media</strong>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white max-w-xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span>FURNEUTRAL • MÃ SP: {selectedProduct.code}</span>
              <button type="button" onClick={() => setSelectedProduct(null)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-xs">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-56 object-cover"
              />
              <div className="space-y-3">
                <h3 className="text-base font-extrabold text-slate-900">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-[#16a34a]">
                    {formatVND(selectedProduct.price)}
                  </span>
                  {selectedProduct.oldPrice && (
                    <span className="text-slate-400 line-through">
                      {formatVND(selectedProduct.oldPrice)}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="bg-slate-50 p-3 space-y-1 border border-slate-100">
                  <p>
                    <strong>Kích thước:</strong> {selectedProduct.dimensions}
                  </p>
                  <p>
                    <strong>Vật liệu:</strong> {selectedProduct.material}
                  </p>
                  <p>
                    <strong>Bảo hành:</strong> {selectedProduct.warranty}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-slate-900 hover:bg-[#16a34a] text-white font-bold py-2.5 uppercase tracking-wider transition"
                >
                  THÊM VÀO GIỎ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Combo 3 Sản Phẩm Modal */}
      {comboModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setComboModalOpen(false)}
        >
          <div
            className="bg-white max-w-md w-full p-6 space-y-4 shadow-2xl text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-extrabold uppercase text-[#ff1d25]">
                {templateData.comboPromoCard.headline}
              </span>
              <button type="button" onClick={() => setComboModalOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[#00bcd4] font-semibold">
              {templateData.comboPromoCard.dateRange}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {templateData.comboPromoCard.details}
            </p>
            <button
              type="button"
              onClick={() => setComboModalOpen(false)}
              className="w-full bg-slate-900 text-white font-bold py-2.5 uppercase tracking-wider"
            >
              ĐÃ HIỂU & CHỌN SẢN PHẨM
            </button>
          </div>
        </div>
      )}

      {/* Project Portfolio Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-lg w-full overflow-hidden shadow-2xl text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-slate-400">
                <span className="font-bold text-slate-900 uppercase">
                  {selectedProject.style}
                </span>
                <span>
                  {selectedProject.location} • {selectedProject.area}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {selectedProject.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {selectedProject.summary}
              </p>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="bg-slate-900 text-white font-bold px-5 py-2 uppercase tracking-wider"
              >
                Đóng dự án
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-end"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span>Giỏ Hàng Furneutral ({totalCartItems})</span>
              <button type="button" onClick={() => setCartOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-xs">
                  Giỏ hàng đang trống.
                </div>
              ) : (
                cart.map(({ product, qty }) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 border border-slate-200 p-2.5 text-xs"
                  >
                    <img
                      src={product.image}
                      alt={product.code}
                      className="w-14 h-14 object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-slate-900">
                        {product.code} — {product.name}
                      </p>
                      <p className="text-[#16a34a] font-bold">
                        {formatVND(product.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => updateCartQty(product.id, -1)}
                          className="w-6 h-6 border border-slate-200 flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold">{qty}</span>
                        <button
                          type="button"
                          onClick={() => updateCartQty(product.id, 1)}
                          className="w-6 h-6 border border-slate-200 flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateCartQty(product.id, -qty)}
                      className="text-slate-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>Tổng cộng:</span>
                <span className="text-[#16a34a]">
                  {formatVND(totalCartAmount)}
                </span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setCartOpen(false);
                  showToast('Đặt hàng thành công! Furneutral sẽ liên hệ giao lắp.');
                }}
                className="w-full py-2.5 bg-slate-900 hover:bg-[#16a34a] disabled:bg-slate-300 text-white text-xs font-bold uppercase tracking-wider transition"
              >
                HOÀN TẤT ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
