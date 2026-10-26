'use client';

import React, { useMemo, useState } from 'react';
import {
  Home,
  Smartphone,
  Mail,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CheckCircle2,
  X,
  Headphones,
  Clock,
  ThumbsUp,
  Sun,
  Snowflake,
  Droplets,
  ShieldCheck,
  Share2,
  Eye
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultNoiThat25Data,
  type NoiThat25TemplateData,
  type HdpProductItem
} from '../../data/mockData';

interface Props {
  data?: Record<string, any>;
}

export function DemoTemplateRenderer({ data }: Props) {
  const templateData = useMemo(
    () => adaptClonedTemplateData(defaultNoiThat25Data, data) as NoiThat25TemplateData,
    [data]
  );

  const [carouselOffset, setCarouselOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] =
    useState<NoiThat25TemplateData['productCategories'][number]['key']>('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<HdpProductItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2600);
  };

  const slides = templateData.desireSection.carouselSlides;
  const visibleCarouselSlides = useMemo(() => {
    if (slides.length <= 3) return slides;
    return [0, 1, 2].map((i) => slides[(carouselOffset + i) % slides.length]);
  }, [slides, carouselOffset]);

  const filteredCatalog = useMemo(() => {
    return templateData.catalogProducts.filter((item) => {
      const matchCat =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [templateData.catalogProducts, selectedCategory, searchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderWhyIcon = (
    type: NoiThat25TemplateData['whyChooseUs']['items'][number]['iconType']
  ) => {
    switch (type) {
      case 'consistent':
        return (
          <div className="w-24 h-24 rounded-full border-4 border-[#66cc33] flex flex-col items-center justify-center text-[#66cc33] relative shadow-2xs">
            <div className="w-20 h-20 rounded-full border border-dashed border-[#66cc33] flex flex-col items-center justify-center p-1 text-center">
              <span className="text-[7px] font-extrabold tracking-widest uppercase">
                ĐẢM BẢO
              </span>
              <span className="bg-[#66cc33] text-white text-[8px] font-black px-2 py-0.5 my-0.5 rounded-2xs tracking-wider uppercase">
                KIỂM ĐỊNH QC
              </span>
              <CheckCircle2 className="w-4 h-4 text-[#66cc33]" />
            </div>
          </div>
        );
      case 'structure':
        return (
          <div className="w-24 h-24 flex items-center justify-center text-[#66cc33]">
            <svg
              viewBox="0 0 100 100"
              className="w-22 h-22 stroke-[#66cc33] fill-none"
              strokeWidth="4"
            >
              <line x1="50" y1="22" x2="24" y2="74" />
              <line x1="50" y1="22" x2="76" y2="74" />
              <line x1="24" y1="74" x2="76" y2="74" />
              <circle cx="50" cy="20" r="10" className="fill-white" />
              <circle cx="22" cy="74" r="10" className="fill-white" />
              <circle cx="78" cy="74" r="10" className="fill-white" />
            </svg>
          </div>
        );
      case 'weather':
        return (
          <div className="w-24 h-24 flex flex-col items-center justify-center text-[#66cc33] gap-1">
            <Droplets className="w-7 h-7 stroke-[2]" />
            <div className="flex items-center gap-3">
              <Sun className="w-8 h-8 stroke-[2]" />
              <Snowflake className="w-8 h-8 stroke-[2]" />
            </div>
          </div>
        );
      case 'service':
        return (
          <div className="w-24 h-24 rounded-full border-2 border-[#66cc33]/50 flex items-center justify-center text-[#66cc33]">
            <Headphones className="w-12 h-12 stroke-[2]" />
          </div>
        );
      case 'delivery':
        return (
          <div className="w-24 h-24 flex items-center justify-center text-[#66cc33]">
            <div className="relative flex items-center">
              <div className="flex flex-col gap-1.5 mr-1">
                <span className="w-5 h-1 bg-[#66cc33] rounded-full" />
                <span className="w-7 h-1 bg-[#66cc33] rounded-full" />
                <span className="w-4 h-1 bg-[#66cc33] rounded-full" />
              </div>
              <Clock className="w-16 h-16 stroke-[2.2]" />
            </div>
          </div>
        );
      case 'price':
      default:
        return (
          <div className="w-24 h-24 flex items-center justify-center text-[#66cc33]">
            <div className="flex items-center -space-x-2">
              <div className="w-14 h-14 rounded-full border-4 border-[#66cc33] bg-white flex items-center justify-center text-2xl font-black">
                $
              </div>
              <div className="w-14 h-14 rounded-full bg-[#66cc33] text-white flex items-center justify-center shadow-xs">
                <ThumbsUp className="w-7 h-7 fill-current" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#6cb43f] selection:text-white"
    >
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#6cb43f] text-white px-4 py-3 rounded shadow-xl text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. Top Contact Utility Bar */}
      <div className="bg-white border-b border-slate-100 text-[11px] text-slate-600">
        <div className="max-w-[1180px] mx-auto px-4 h-8 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-slate-700" />
              <span>{templateData.business.officeAddress}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-slate-700" />
              <span>{templateData.business.phone.join(' | ')}</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-600" />
            <span>{templateData.business.email[0]}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-[1180px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('top');
            }}
            className="flex items-center gap-2.5 shrink-0"
          >
            <div className="w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center font-black text-sm text-[#6cb43f]">
              HDP
            </div>
            <div className="leading-tight">
              <div className="text-sm font-black tracking-tight text-slate-900">
                {templateData.business.brandTitle}
                <span className="text-[#7c3aed]">
                  {templateData.business.brandHighlight}
                </span>
              </div>
              <div className="text-[10px] text-slate-400">
                {templateData.business.brandTagline}
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-800">
            {templateData.navigation.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.targetId)}
                className={`flex items-center gap-1 transition hover:text-[#6cb43f] ${
                  idx === 0 ? 'text-[#6cb43f]' : 'text-slate-800'
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Search + Language Selector */}
          <div className="flex items-center gap-4 text-xs">
            {searchOpen ? (
              <div className="flex items-center border border-[#6cb43f] rounded-xs overflow-hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm mã sofa, bàn trà..."
                  className="px-2.5 py-1 text-xs focus:outline-none w-40"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    scrollToSection('section-catalog');
                  }}
                  className="px-2 py-1 bg-[#6cb43f] text-white"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="text-slate-700 hover:text-[#6cb43f] p-1"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setQuoteSuccess(false);
                setQuoteModalOpen(true);
              }}
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#6cb43f] font-medium"
            >
              <span>{templateData.business.languageLabel}</span>
              <span className="inline-block px-1 py-0.2 bg-red-600 text-amber-300 text-[9px] font-bold rounded-2xs">
                VN
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Studio Hero Section (#f2f2f2 background) */}
      <section className="bg-[#f2f2f2] py-10 sm:py-14 px-4 border-b border-slate-200/60">
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#6cb43f]">
            {templateData.hero.heading}
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#6cb43f]">
            {templateData.hero.subheading}
          </p>

          {/* Main Studio Cutout Product Display */}
          <div className="mt-8 relative bg-white/80 rounded-md p-4 sm:p-8 shadow-xs border border-slate-200/70 max-w-4xl mx-auto">
            <img
              src={templateData.hero.mainImage}
              alt={templateData.hero.heading}
              className="w-full h-[260px] sm:h-[380px] object-cover rounded-xs"
            />
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <span className="font-medium">{templateData.hero.caption}</span>
              <button
                type="button"
                onClick={() => {
                  setQuoteSuccess(false);
                  setQuoteModalOpen(true);
                }}
                className="px-4 py-1.5 bg-[#6cb43f] hover:bg-[#5aa032] text-white font-bold rounded-xs transition shrink-0"
              >
                Nhận Báo Giá Nhà Máy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Right Outdoor Furniture For Your Desire" Section */}
      <section id="section-desire" className="py-12 sm:py-16 px-4 max-w-[1140px] mx-auto">
        {/* Centered Title */}
        <div className="text-center">
          <h2 className="text-base sm:text-xl font-extrabold text-slate-900">
            {templateData.desireSection.quoteTitle}
          </h2>

          {/* Minimalist Hanging Lamp Line-Art Graphic (matching screenshot) */}
          <div className="mt-4 mb-6 flex justify-center">
            <svg
              viewBox="0 0 180 60"
              className="w-36 h-12 stroke-slate-700 fill-none"
              strokeWidth="1.4"
            >
              <line x1="90" y1="0" x2="90" y2="24" strokeWidth="2.5" />
              <ellipse cx="90" cy="28" rx="68" ry="8" />
              <path d="M22 28 Q 90 56 158 28" />
              <path d="M38 25 Q 90 46 142 25" strokeOpacity="0.6" />
              <circle cx="75" cy="31" r="2.5" />
              <circle cx="95" cy="33" r="2.5" />
              <circle cx="110" cy="29" r="2.5" />
            </svg>
          </div>
        </div>

        {/* Centerpiece Bistro Table & Chairs Showcase */}
        <div
          onClick={() => setSelectedProduct(templateData.catalogProducts[4])}
          className="max-w-xl mx-auto cursor-pointer group text-center mb-10"
        >
          <div className="overflow-hidden rounded-sm bg-white p-2">
            <img
              src={templateData.desireSection.featuredCenterImage}
              alt={templateData.desireSection.featuredCenterTitle}
              className="w-full h-[260px] sm:h-[320px] object-contain mx-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="mt-2 text-xs font-bold text-slate-800 group-hover:text-[#6cb43f]">
            {templateData.desireSection.featuredCenterTitle}
          </p>
          <p className="text-[11px] text-slate-500">
            {templateData.desireSection.featuredCenterSpecs}
          </p>
        </div>

        {/* 3-Column Green-Bordered Product Carousel with Green Left/Right Arrow Buttons */}
        <div className="relative flex items-center">
          {/* Left Circular Green Button */}
          <button
            type="button"
            onClick={() =>
              setCarouselOffset((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="hidden sm:flex -ml-4 z-10 w-8 h-8 rounded-full bg-[#8cc63f] hover:bg-[#6cb43f] text-white items-center justify-center shadow transition shrink-0"
            aria-label="Trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
            {visibleCarouselSlides.map((slide) => (
              <div
                key={slide.id}
                onClick={() => {
                  const matched =
                    templateData.catalogProducts.find(
                      (c) => c.categoryLabel.includes(slide.categoryLabel)
                    ) || templateData.catalogProducts[0];
                  setSelectedProduct({
                    ...matched,
                    name: slide.name,
                    code: slide.code,
                    dimensions: slide.dimensions,
                    weaveMaterial: slide.material,
                    image: slide.image,
                    description: slide.description
                  });
                }}
                className="border border-[#76b843] bg-white p-4 relative group cursor-pointer hover:shadow-md transition flex flex-col justify-between h-[240px]"
              >
                <div className="flex-1 flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="pt-2 flex items-end justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#6cb43f] block">
                      {slide.categoryLabel}
                    </span>
                    <h3 className="text-xs font-semibold text-slate-800 line-clamp-1">
                      {slide.name}
                    </h3>
                  </div>

                  {/* Subtle HDP Furniture Watermark */}
                  <div className="text-[10px] text-slate-400 font-bold leading-none text-right shrink-0">
                    <span className="text-[#6cb43f]">HDP</span>
                    <span className="block text-[8px] font-normal">Furniture</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Circular Green Button */}
          <button
            type="button"
            onClick={() => setCarouselOffset((prev) => (prev + 1) % slides.length)}
            className="hidden sm:flex -mr-4 z-10 w-8 h-8 rounded-full bg-[#8cc63f] hover:bg-[#6cb43f] text-white items-center justify-center shadow transition shrink-0"
            aria-label="Tiếp"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {[0, 1].map((dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCarouselOffset(dotIdx)}
              className={`w-2.5 h-2.5 rounded-full border transition ${
                carouselOffset % 2 === dotIdx
                  ? 'bg-slate-900 border-slate-900'
                  : 'bg-white border-slate-400'
              }`}
              aria-label={`Trang ${dotIdx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE HDP PRODUCTS ? (2x3 Green Icon Grid) */}
      <section id="section-why-choose" className="py-10 px-4 max-w-[1060px] mx-auto">
        <div className="text-center">
          <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-[#6cb43f]">
            {templateData.whyChooseUs.heading}
          </h2>
          {/* Thin divider line with centered small green circle */}
          <div className="mt-3 flex items-center justify-center">
            <div className="h-px bg-slate-100 flex-1" />
            <span className="mx-3 w-3 h-3 rounded-full border-2 border-[#6cb43f] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#6cb43f]" />
            </span>
            <div className="h-px bg-slate-100 flex-1" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {templateData.whyChooseUs.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="transition-transform group-hover:scale-105">
                {renderWhyIcon(item.iconType)}
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 max-w-xs leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Interactive Export & Project Catalog Filter Section */}
      <section
        id="section-catalog"
        className="py-12 px-4 max-w-[1140px] mx-auto border-t border-slate-100"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#6cb43f]">
              DANH MỤC CHẾ TÁC & XUẤT KHẨU
            </span>
            <h2 className="text-lg font-extrabold text-slate-900 mt-0.5">
              Bộ Sưu Tập Nội Ngoại Thất HDP Furniture
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {templateData.productCategories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xs border transition ${
                  selectedCategory === cat.key
                    ? 'bg-[#6cb43f] text-white border-[#6cb43f]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#6cb43f]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCatalog.map((item) => (
            <div
              key={item.id}
              className="border border-slate-200 hover:border-[#6cb43f] bg-white p-4 flex flex-col justify-between group transition"
            >
              <div>
                <div
                  onClick={() => setSelectedProduct(item)}
                  className="h-52 overflow-hidden bg-slate-50 flex items-center justify-center cursor-pointer relative"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-white/95 text-[#6cb43f] text-[10px] font-extrabold px-2 py-0.5 border border-[#6cb43f]/40">
                    {item.code}
                  </span>
                </div>

                <div className="pt-3.5">
                  <p className="text-[10px] font-bold uppercase text-[#6cb43f]">
                    {item.categoryLabel}
                  </p>
                  <h3
                    onClick={() => setSelectedProduct(item)}
                    className="text-sm font-bold text-slate-900 group-hover:text-[#6cb43f] cursor-pointer mt-0.5 line-clamp-1"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-900">
                  {item.priceLabel}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(item)}
                    className="text-slate-600 hover:text-[#6cb43f] font-medium flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Thông số</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setQuoteSuccess(false);
                      setQuoteModalOpen(true);
                    }}
                    className="bg-[#6cb43f] hover:bg-[#589931] text-white font-bold px-3 py-1 rounded-xs transition"
                  >
                    Báo giá sỉ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Footer (#f2f2f2 background matching screenshot) */}
      <footer id="section-footer" className="bg-[#f2f2f2] border-t border-slate-200/80 text-xs text-slate-700 mt-8">
        <div className="max-w-[1060px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Col 1: Contact (6 cols) */}
          <div className="md:col-span-6 space-y-2.5">
            <h3 className="text-sm font-extrabold text-[#6cb43f]">
              Liên hệ
            </h3>
            <div className="flex items-center">
              <span className="w-10 h-0.5 bg-[#6cb43f]" />
              <span className="flex-1 h-px bg-slate-300" />
            </div>
            <div className="pt-2 space-y-2 text-[11px] leading-relaxed">
              <p>
                <strong className="text-slate-900">Địa chỉ văn phòng:</strong>{' '}
                {templateData.business.officeAddress}
              </p>
              <p>
                <strong className="text-slate-900">Địa chỉ nhà máy:</strong>{' '}
                {templateData.business.factoryAddress}
              </p>
              <p>
                <strong className="text-slate-900">Điện thoại:</strong>{' '}
                {templateData.business.phone.join(' | ')}
              </p>
              <p>
                <strong className="text-slate-900">Email:</strong>{' '}
                {templateData.business.email.join(' | ')}
              </p>
            </div>
          </div>

          {/* Col 2: Product (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h3 className="text-sm font-extrabold text-[#6cb43f]">
              Sản phẩm
            </h3>
            <div className="flex items-center">
              <span className="w-10 h-0.5 bg-[#6cb43f]" />
              <span className="flex-1 h-px bg-slate-300" />
            </div>
            <ul className="pt-2 space-y-1.5 text-[11px] uppercase text-slate-600">
              {templateData.productCategories
                .filter((c) => c.key !== 'all')
                .map((cat) => (
                  <li key={cat.key}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.key);
                        scrollToSection('section-catalog');
                      }}
                      className="hover:text-[#6cb43f] transition text-left"
                    >
                      {cat.label} ({cat.enLabel})
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Col 3: Menu (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h3 className="text-sm font-extrabold text-[#6cb43f]">
              Menu
            </h3>
            <div className="flex items-center">
              <span className="w-10 h-0.5 bg-[#6cb43f]" />
              <span className="flex-1 h-px bg-slate-300" />
            </div>
            <ul className="pt-2 space-y-1.5 text-[11px]">
              {templateData.navigation.map((item, idx) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.targetId)}
                    className={`hover:text-[#6cb43f] transition ${
                      idx === 0 ? 'text-[#6cb43f] font-semibold' : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom White Copyright Strip with Scroll-to-Top Circle */}
        <div className="bg-white border-t border-slate-200 py-3.5 px-4 relative">
          <div className="max-w-[1060px] mx-auto text-center text-[11px] text-slate-500">
            © Thiết kế và lập trình bởi{' '}
            <strong className="text-slate-900">HDP.</strong>
            <strong className="text-[#7c3aed]">Furniture / Website</strong>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection('top')}
            className="fixed bottom-4 right-4 z-30 w-8 h-8 rounded-full border border-slate-400 bg-white/90 hover:border-[#6cb43f] hover:text-[#6cb43f] flex items-center justify-center text-slate-600 shadow-xs transition"
            aria-label="Lên đầu trang"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Product Specification Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded max-w-2xl w-full overflow-hidden shadow-2xl border border-[#6cb43f]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#6cb43f] text-white px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider">
                Thông Số Chế Tác HDP • Mã: {selectedProduct.code}
              </span>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="text-white/90 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-xs">
              <div className="border border-[#76b843]/40 p-3 h-60 flex items-center justify-center bg-slate-50">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-extrabold uppercase text-[#6cb43f]">
                  {selectedProduct.categoryLabel}
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  {selectedProduct.name}
                </h3>
                <p className="text-base font-black text-[#6cb43f]">
                  Giá tham khảo: {selectedProduct.priceLabel}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="bg-slate-50 p-3 rounded border border-slate-100 space-y-1">
                  <p>
                    <strong>Kích thước:</strong> {selectedProduct.dimensions}
                  </p>
                  <p>
                    <strong>Khung sườn:</strong> {selectedProduct.frameMaterial}
                  </p>
                  <p>
                    <strong>Vật liệu đan:</strong> {selectedProduct.weaveMaterial}
                  </p>
                  <p>
                    <strong>Bảo hành:</strong> {selectedProduct.warranty}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct(null);
                    setQuoteSuccess(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full bg-[#6cb43f] hover:bg-[#589931] text-white font-bold py-2.5 rounded-xs uppercase transition"
                >
                  Yêu Cầu Báo Giá Đơn Hàng / Dự Án
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Factory Export / Project Quote Modal */}
      {quoteModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setQuoteModalOpen(false)}
        >
          <div
            className="bg-white rounded max-w-md w-full overflow-hidden shadow-2xl border border-[#6cb43f]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#6cb43f] text-white px-5 py-3 flex items-center justify-between text-xs font-bold uppercase">
              <span>Nhận Báo Giá Nhà Máy HDP Furniture</span>
              <button type="button" onClick={() => setQuoteModalOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            {quoteSuccess ? (
              <div className="p-6 text-center space-y-3 text-xs">
                <CheckCircle2 className="w-10 h-10 text-[#6cb43f] mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">
                  Đã Gửi Yêu Cầu Báo Giá Thành Công!
                </h4>
                <p className="text-slate-600">
                  Bộ phận Kinh doanh Dự án & Xuất khẩu của HDP Furniture sẽ gửi catalog PDF và bảng giá nhà máy qua email/Zalo của quý khách trong 15 phút.
                </p>
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(false)}
                  className="bg-[#6cb43f] text-white font-bold px-5 py-2 rounded-xs"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSuccess(true);
                  showToast('Đã gửi yêu cầu báo giá trực tiếp tới nhà máy HDP!');
                }}
                className="p-5 space-y-3 text-xs"
              >
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Họ tên / Tên doanh nghiệp *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Khu nghỉ dưỡng / Chủ đầu tư..."
                    className="w-full border border-slate-300 px-3 py-2 rounded-xs focus:outline-none focus:border-[#6cb43f]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Số điện thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0909 xxx xxx"
                    className="w-full border border-slate-300 px-3 py-2 rounded-xs focus:outline-none focus:border-[#6cb43f]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Hạng mục quan tâm
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Số lượng sofa sân vườn, ghế hồ bơi sunbed, bàn ăn ngoài trời..."
                    className="w-full border border-slate-300 px-3 py-2 rounded-xs focus:outline-none focus:border-[#6cb43f]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#6cb43f] hover:bg-[#589931] text-white font-bold py-2.5 rounded-xs uppercase transition"
                >
                  Gửi Yêu Cầu Báo Giá Gốc
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
