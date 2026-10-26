"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  ChevronDown,
  SlidersHorizontal,
  MapPin,
  Phone,
  Award,
  CheckCircle2,
  Star,
  X,
  Plus,
  Minus,
  Trash2,
  PackageSearch,
  GraduationCap,
  Store,
  Globe,
  Sparkles,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type FBShopMockData,
  type FBShopProduct,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  business?: Record<string, unknown>;
  customConfig?: Record<string, unknown>;
}

function formatVnd(amount: number): string {
  return amount.toLocaleString("vi-VN") + " VND";
}

export function DemoTemplateRenderer({
  business,
  customConfig,
}: DemoTemplateRendererProps) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData(
        mockData,
        business,
        customConfig
      ) as FBShopMockData,
    [business, customConfig]
  );

  // Filter states matching the exact screenshot sidebar & search bar
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(70000000);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  // Order lookup state
  const [orderLookupInput, setOrderLookupInput] = useState("FB8892");

  // Cart & Quick View
  const [cart, setCart] = useState<
    { item: FBShopProduct; qty: number; tension: string }[]
  >([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickProduct, setQuickProduct] = useState<FBShopProduct | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const primaryPhone = data.business.phone?.[0] || "0979 170 274";

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filteredProducts = useMemo(() => {
    return data.products.filter((prod) => {
      const matchCat =
        selectedCategory === "ALL" || prod.category === selectedCategory;
      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(prod.brand);
      const matchPrice = prod.price <= maxPrice;
      const matchKeyword =
        !searchKeyword.trim() ||
        prod.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        prod.brand.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        prod.sku.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchCat && matchBrand && matchPrice && matchKeyword;
    });
  }, [
    data.products,
    selectedCategory,
    selectedBrands,
    maxPrice,
    searchKeyword,
  ]);

  const matchedOrder = useMemo(() => {
    const q = orderLookupInput.trim().toLowerCase();
    if (!q) return null;
    return data.sampleOrders.find(
      (o) =>
        o.orderCode.toLowerCase().includes(q) ||
        o.phone.toLowerCase().includes(q)
    );
  }, [data.sampleOrders, orderLookupInput]);

  const cartCount = useMemo(
    () => cart.reduce((acc, e) => acc + e.qty, 0),
    [cart]
  );
  const cartTotal = useMemo(
    () => cart.reduce((acc, e) => acc + e.item.price * e.qty, 0),
    [cart]
  );

  const handleAddToCart = (item: FBShopProduct, tension = "11.0 kg (Chuẩn)") => {
    setCart((prev) => {
      const existing = prev.find((p) => p.item.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.item.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { item, qty: 1, tension }];
    });
    setToastMsg(`Đã thêm "${item.name}" (Căng cước ${tension}) vào giỏ hàng!`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.item.id === id ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    );
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 font-sans">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 border-l-4 border-[#f37021] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-bold">
          <CheckCircle2 className="w-5 h-5 text-[#f37021] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. EXACT WHITE HEADER WITH ORANGE CIRCULAR FB LOGO & NAV LINKS */}
      <header className="bg-white sticky top-0 z-40 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Circular Orange FBSHOP Logo matching screenshot */}
          <a href="#top" className="flex items-center gap-2.5 shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#f37021] flex flex-col items-center justify-center text-white shadow-md">
              <span className="text-xl font-black leading-none tracking-tighter">
                FB
              </span>
              <span className="text-[7px] font-bold tracking-widest uppercase">
                FBSHOP
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-black tracking-tight text-slate-900 leading-none">
                {data.business.brandShort || "FBSHOP"}
              </div>
              <div className="text-[10px] font-semibold text-[#f37021] uppercase mt-0.5">
                Cầu Lông Chính Hãng
              </div>
            </div>
          </a>

          {/* Center Navigation Links matching screenshot */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold uppercase tracking-wide text-slate-800">
            {data.navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-1 transition-colors ${
                  idx === 0 || item.highlight
                    ? "text-[#f37021]"
                    : "hover:text-[#f37021]"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
            ))}
          </nav>

          {/* Right Circular Icon Buttons matching screenshot */}
          <div className="flex items-center gap-2.5">
            <a
              href="#search-bar"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#f37021] flex items-center justify-center text-slate-700 hover:text-[#f37021] transition-colors"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </a>
            <a
              href="#san-pham"
              className="relative w-10 h-10 rounded-full border border-slate-200 hover:border-[#f37021] flex items-center justify-center text-slate-700 hover:text-[#f37021] transition-colors"
              aria-label="Yêu thích"
            >
              <Heart className="w-4 h-4" />
              {wishlistIds.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f37021] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistIds.length}
                </span>
              )}
            </a>
            <a
              href="#tra-cuu"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#f37021] flex items-center justify-center text-slate-700 hover:text-[#f37021] transition-colors"
              aria-label="Tài khoản"
            >
              <User className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative w-10 h-10 rounded-full bg-[#f37021] hover:bg-[#d95d12] text-white flex items-center justify-center shadow-md transition-colors"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 2. EXACT BADMINTON SUMMER HERO BANNER FROM SCREENSHOT B2B028 */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-[#c7c9cc] via-[#d5d7da] to-[#e2e4e7] border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Polaroid Collage */}
            <div className="hidden lg:flex lg:col-span-2 flex-col gap-3">
              <div className="bg-white p-2 rounded shadow-lg -rotate-6 border border-slate-200">
                <img
                  src={data.hero.leftPolaroid}
                  alt="Showroom FBShop"
                  className="w-full h-28 object-cover"
                />
                <p className="text-[9px] font-bold text-center text-slate-600 mt-1">
                  Showroom Chính Hãng
                </p>
              </div>
              <div className="bg-white p-2 rounded shadow-lg rotate-3 border border-slate-200">
                <img
                  src={data.hero.rightPolaroid}
                  alt="Đan vợt điện tử"
                  className="w-full h-28 object-cover"
                />
                <p className="text-[9px] font-bold text-center text-slate-600 mt-1">
                  Đan Vợt Chuẩn BWF
                </p>
              </div>
            </div>

            {/* Center Giant Typography BAD-MIN-TON + Shuttlecock + CHÀO HÈ RỰC RỠ */}
            <div className="lg:col-span-8 relative flex flex-col md:flex-row items-center justify-center gap-6 py-4">
              {/* Giant Stacked BAD / MIN / TON */}
              <div className="text-center md:text-left select-none relative">
                <div className="text-5xl sm:text-7xl font-black italic tracking-tighter text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)] leading-[0.92]">
                  <div>BAD</div>
                  <div>MIN</div>
                  <div>TON</div>
                </div>
                <span className="inline-block -mt-2 bg-slate-900 text-white text-xs sm:text-sm font-black italic px-3 py-1 rounded rotate-[-6deg] shadow">
                  SUMMER TIME !
                </span>
              </div>

              {/* Center Shuttlecock Showcase */}
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white/80 p-3 shadow-2xl border-4 border-white flex items-center justify-center relative">
                <img
                  src={data.hero.shuttlecockImage}
                  alt="Badminton Shuttlecock FBShop"
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="absolute -bottom-2 bg-[#f37021] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shadow">
                  Yonex • Lining • Victor
                </span>
              </div>

              {/* Right Orange Script Headline & Parallelogram FBSHOP.VN Badge */}
              <div className="text-center md:text-left space-y-2.5">
                <h1 className="text-3xl sm:text-4xl font-black italic text-[#f37021] drop-shadow-sm leading-tight">
                  {data.hero.scriptHeadline}
                </h1>
                <div className="inline-block bg-[#f37021] text-white font-black text-lg sm:text-xl px-5 py-1.5 -skew-x-12 shadow-md">
                  <span className="inline-block skew-x-12">
                    {data.hero.subBadge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-black italic text-slate-800 tracking-wide">
                  {data.hero.passionText}
                </p>
              </div>
            </div>

            {/* Right Store Photo Card */}
            <div className="hidden lg:flex lg:col-span-2 justify-end">
              <div className="bg-white p-2.5 rounded shadow-xl rotate-3 border border-slate-200 w-full">
                <img
                  src={data.hero.rightPolaroid}
                  alt="FBShop Store"
                  className="w-full h-44 object-cover rounded-sm"
                />
                <p className="text-[10px] font-extrabold text-center text-[#f37021] mt-1.5 uppercase">
                  10+ Cửa Hàng Toàn Quốc
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orange Store Branches Ribbon matching screenshot */}
        <div className="bg-[#f37021] text-white py-2 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-3 text-[11px] sm:text-xs font-black uppercase tracking-wider">
            {data.branchesTicker.map((branch) => (
              <span key={branch} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                {branch}
              </span>
            ))}
          </div>
        </div>

        {/* Social Handle Pill Strip matching screenshot */}
        <div className="py-2.5 flex justify-center bg-[#dcdde0]">
          <div className="bg-slate-800 text-white px-6 py-1.5 rounded-full text-xs font-bold flex items-center gap-6 shadow">
            <span>{data.business.socialHandle}</span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#f37021]" />
              {data.business.website}
            </span>
          </div>
        </div>
      </section>

      {/* 3. WARM PEACH SEARCH BAR ("Bạn đang tìm gì?") FROM SCREENSHOT */}
      <section
        id="search-bar"
        className="bg-gradient-to-r from-[#f8e2cc] via-[#fae8d4] to-[#f8dec4] border-b border-orange-200/70 py-5 px-4"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 shrink-0">
            Bạn đang tìm gì?
          </h2>

          <div className="flex-1 w-full flex flex-col sm:flex-row items-center gap-2.5 bg-white/80 backdrop-blur-sm p-2 rounded-full border border-orange-200 shadow-sm">
            <select
              aria-label="Chọn danh mục cầu lông"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-52 bg-white text-slate-700 text-xs font-bold px-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#f37021]"
            >
              {data.searchCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Nhập từ khóa: Astrox 100ZZ, Axforce 90, Giày 65Z3, Máy đan vợt..."
              className="flex-1 w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />

            <button
              type="button"
              className="w-full sm:w-auto bg-[#f37021] hover:bg-[#d95d12] text-white font-extrabold text-xs uppercase px-6 py-2.5 rounded-full flex items-center justify-center gap-1.5 shadow transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Tìm kiếm</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. MAIN CATALOG: LEFT FILTER SIDEBAR (MỨC GIÁ SLIDER) + RIGHT RACKET & GEAR GRID (MATCHING SECOND LAYER OF SCREENSHOT) */}
      <main id="san-pham" className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 3-Col Filter Sidebar matching screenshot */}
          <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-6 sticky top-24">
            {/* Keyword Search */}
            <div>
              <h3 className="text-base font-black text-[#f37021] mb-2.5">
                Tìm kiếm sản phẩm
              </h3>
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Nhập từ khóa..."
                className="w-full border border-slate-200 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-[#f37021]"
              />
            </div>

            {/* Price Range Slider matching screenshot */}
            <div>
              <h3 className="text-base font-black text-[#f37021] mb-2.5">
                Mức giá
              </h3>
              <input
                type="range"
                min={500000}
                max={70000000}
                step={500000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#f37021] cursor-pointer"
              />
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mt-1">
                <span>Giá: 0 VND</span>
                <span className="text-[#f37021]">{formatVnd(maxPrice)}</span>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-black uppercase text-slate-900 mb-2.5">
                Danh mục dụng cụ
              </h3>
              <div className="space-y-1.5">
                {data.searchCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-orange-50 text-[#f37021] border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Checkboxes */}
            <div>
              <h3 className="text-sm font-black uppercase text-slate-900 mb-2.5">
                Thương hiệu chính hãng
              </h3>
              <div className="space-y-2">
                {data.brands.map((brand) => {
                  const checked = selectedBrands.includes(brand);
                  return (
                    <label
                      key={brand}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleBrand(brand)}
                        className="rounded accent-[#f37021] w-4 h-4"
                      />
                      <span>{brand} Chính Hãng</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSearchKeyword("");
                setSelectedCategory("ALL");
                setSelectedBrands([]);
                setMaxPrice(70000000);
              }}
              className="w-full py-2 rounded-full border border-[#f37021] text-[#f37021] hover:bg-[#f37021] hover:text-white text-xs font-extrabold uppercase transition-colors"
            >
              Đặt lại bộ lọc
            </button>
          </aside>

          {/* Right 9-Col Product Grid */}
          <div className="lg:col-span-9 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200/80 px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-base sm:text-lg font-black uppercase text-slate-900">
                  KHO VỢT CẦU LÔNG, GIÀY &amp; THIẾT BỊ SÂN ĐẤU CHÍNH HÃNG
                </h2>
                <p className="text-xs text-slate-500">
                  Hiển thị {filteredProducts.length} sản phẩm • Cam kết chính
                  hãng 100% có tem chống giả Bộ Công An
                </p>
              </div>
              <span className="text-xs font-bold text-[#f37021] bg-orange-50 px-3 py-1 rounded-full">
                Tặng cước đan + Quấn cán VS chính hãng
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#f37021] p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-xl relative"
                >
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase bg-slate-900 text-white px-2.5 py-0.5 rounded-full">
                      {prod.brand}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {prod.discountBadge && (
                        <span className="text-[10px] font-black bg-[#f37021] text-white px-2 py-0.5 rounded-full">
                          {prod.discountBadge}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleWishlist(prod.id)}
                        className={`p-1.5 rounded-full border ${
                          wishlistIds.includes(prod.id)
                            ? "bg-rose-50 border-rose-200 text-rose-600"
                            : "border-slate-200 text-slate-400 hover:text-rose-500"
                        }`}
                        aria-label="Yêu thích"
                      >
                        <Heart className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    {/* Isometric / Clean Rounded Card Image */}
                    <div
                      onClick={() => setQuickProduct(prod)}
                      className="h-48 w-full rounded-xl bg-slate-50 overflow-hidden mb-3 flex items-center justify-center cursor-pointer"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3
                      onClick={() => setQuickProduct(prod)}
                      className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#f37021] line-clamp-2 min-h-[40px] leading-snug cursor-pointer"
                    >
                      {prod.name}
                    </h3>

                    {/* Technical Specs Grid */}
                    <div className="grid grid-cols-2 gap-1.5 mt-2.5 bg-slate-50 p-2 rounded-xl border border-slate-100 text-[10px] text-slate-600">
                      <div>
                        <strong>Trọng lượng:</strong> {prod.specs.weight}
                      </div>
                      <div>
                        <strong>Điểm cân bằng:</strong> {prod.specs.balance}
                      </div>
                      <div>
                        <strong>Độ cứng:</strong> {prod.specs.stiffness}
                      </div>
                      <div>
                        <strong>Mức căng:</strong> {prod.specs.maxTension}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-2.5">
                      <div>
                        <span className="text-base font-black text-[#f37021]">
                          {prod.priceFormatted}
                        </span>
                        {prod.oldPriceFormatted && (
                          <span className="text-xs text-slate-400 line-through ml-1.5">
                            {prod.oldPriceFormatted}
                          </span>
                        )}
                      </div>
                      <span className="flex items-center gap-0.5 text-[11px] font-bold text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {prod.rating} ({prod.reviewsCount})
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(prod)}
                      className="w-full py-2 px-3 rounded-full bg-[#f37021] hover:bg-[#d95d12] text-white font-extrabold text-xs uppercase tracking-wide transition-colors shadow-sm"
                    >
                      Đặt Mua &amp; Chọn Mức Căng Cước
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. TRA CỨU ĐƠN HÀNG & TRẠNG THÁI ĐAN VỢT (MATCHING NAV ITEM "TRA CỨU ĐƠN HÀNG") */}
        <section
          id="tra-cuu"
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-orange-100 text-[#f37021] text-xs font-black px-3 py-1 rounded-full uppercase">
                <PackageSearch className="w-4 h-4" />
                Tra Cứu Đơn Hàng &amp; Lịch Sử Đan Vợt
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 uppercase">
                Kiểm Tra Tiến Độ Đan Cước Điện Tử &amp; Vận Chuyển
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Nhập mã đơn hàng (thử nghiệm: <strong>FB8892</strong> hoặc{" "}
                <strong>FB9901</strong>) để xem thông số cước đan và trạng thái
                giao nhận.
              </p>
              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={orderLookupInput}
                  onChange={(e) => setOrderLookupInput(e.target.value)}
                  placeholder="Nhập mã đơn (VD: FB8892) hoặc SĐT..."
                  className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-xs font-bold focus:outline-none focus:border-[#f37021]"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              {matchedOrder ? (
                <div className="bg-orange-50/70 border border-orange-200 rounded-2xl p-4 space-y-2 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-orange-200 pb-2">
                    <span className="font-black text-sm text-[#f37021]">
                      Mã đơn: #{matchedOrder.orderCode} —{" "}
                      {matchedOrder.customerName}
                    </span>
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {matchedOrder.updatedAt}
                    </span>
                  </div>
                  <p>
                    <strong>Sản phẩm:</strong> {matchedOrder.items}
                  </p>
                  <p>
                    <strong>Thông số căng vợt:</strong>{" "}
                    <span className="text-[#f37021] font-bold">
                      {matchedOrder.stringTension}
                    </span>
                  </p>
                  <p>
                    <strong>Trạng thái hiện tại:</strong>{" "}
                    <span className="text-emerald-700 font-bold">
                      {matchedOrder.status}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-500">
                  Không tìm thấy mã đơn. Gợi ý thử mã <strong>FB8892</strong>{" "}
                  hoặc <strong>FB9901</strong>.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 6. HỌC VIỆN ĐÀO TẠO CẦU LÔNG & HỆ THỐNG CỬA HÀNG FBSHOP */}
        <section id="dao-tao" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Đào tạo */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <GraduationCap className="w-6 h-6 text-[#f37021]" />
              <h2 className="text-base sm:text-lg font-black uppercase text-slate-900">
                HỌC VIỆN ĐÀO TẠO CẦU LÔNG &amp; DẠY NGHỀ STRINGER
              </h2>
            </div>
            <div className="space-y-3">
              {data.trainingCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-slate-900 text-sm">
                      {course.title}
                    </h3>
                    <span className="bg-[#f37021] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                      Còn {course.spotsLeft} suất
                    </span>
                  </div>
                  <p className="text-slate-600">
                    <strong>Giảng viên:</strong> {course.coach}
                  </p>
                  <p className="text-slate-600">
                    <strong>Lịch học:</strong> {course.schedule} •{" "}
                    <strong>Học phí:</strong>{" "}
                    <span className="text-[#f37021] font-bold">
                      {course.fee}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hệ thống cửa hàng */}
          <div
            id="cua-hang"
            className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 space-y-4"
          >
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Store className="w-6 h-6 text-[#f37021]" />
              <h2 className="text-base sm:text-lg font-black uppercase text-slate-900">
                HỆ THỐNG CỬA HÀNG FBSHOP HÀ NỘI &amp; TP.HCM
              </h2>
            </div>
            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {data.storeBranches.map((br) => (
                <div
                  key={br.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3 text-xs"
                >
                  <div>
                    <h4 className="font-black text-[#f37021]">{br.name}</h4>
                    <p className="text-slate-700 mt-0.5">{br.address}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Trang bị: {br.stringingMachines}
                    </p>
                  </div>
                  <span className="font-black text-slate-900 shrink-0">
                    {br.hotline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="lien-he"
        className="bg-slate-900 text-slate-300 border-t-4 border-[#f37021] mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#f37021] flex items-center justify-center text-white font-black text-lg">
                FB
              </div>
              <span className="text-lg font-black text-white">FBSHOP.VN</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {data.business.tagline}. Nhà phân phối sỉ &amp; lẻ vợt cầu lông
              Yonex, Lining, Victor, Mizuno và máy đan vợt điện tử toàn quốc.
            </p>
            <p className="text-[#f37021] font-bold">
              Hotline B2B &amp; Đại lý: {primaryPhone}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase text-white mb-3">
              CHÍNH SÁCH KHÁCH HÀNG
            </h4>
            <ul className="space-y-2">
              <li>• Bảo hành chính hãng 1 đổi 1 theo tiêu chuẩn hãng</li>
              <li>• Đan vợt chuẩn 4 nút quốc tế bằng máy điện tử</li>
              <li>• Chính sách chiết khấu sỉ cho CLB &amp; Chủ sân cầu lông</li>
              <li>• Ship COD kiểm tra hàng toàn quốc</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase text-white mb-3">
              HỆ THỐNG SHOWROOM
            </h4>
            <ul className="space-y-2">
              {data.branchesTicker.slice(0, 5).map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>

          <div id="tuyen-dung">
            <h4 className="text-sm font-black uppercase text-[#f37021] mb-3">
              TUYỂN DỤNG &amp; HỢP TÁC ĐẠI LÝ
            </h4>
            <p className="text-slate-400 leading-relaxed mb-2">
              FBShop liên tục tuyển dụng Kỹ thuật viên đan vợt (Stringer), Tư
              vấn viên tại Hà Nội &amp; TP.HCM với thu nhập hấp dẫn.
            </p>
            <p>Email: {data.business.email?.[0]}</p>
          </div>
        </div>
        <div className="bg-slate-950 text-slate-500 text-[11px] py-3 text-center">
          © {new Date().getFullYear()} {data.business.name} ({data.business.website}).
        </div>
      </footer>

      {/* QUICK PRODUCT MODAL */}
      {quickProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="bg-[#f37021] text-white px-5 py-3 flex items-center justify-between font-black text-xs uppercase">
              <span>Thông số kỹ thuật dụng cụ cầu lông FBShop</span>
              <button type="button" onClick={() => setQuickProduct(null)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <img
                src={quickProduct.image}
                alt={quickProduct.name}
                className="w-full h-52 object-cover rounded-xl"
              />
              <h3 className="text-base font-black text-slate-900">
                {quickProduct.name}
              </h3>
              <p className="text-lg font-black text-[#f37021]">
                {quickProduct.priceFormatted}
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl">
                <div>Trọng lượng: {quickProduct.specs.weight}</div>
                <div>Cân bằng: {quickProduct.specs.balance}</div>
                <div>Độ cứng: {quickProduct.specs.stiffness}</div>
                <div>Mức căng tối đa: {quickProduct.specs.maxTension}</div>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleAddToCart(quickProduct);
                  setQuickProduct(null);
                }}
                className="w-full bg-[#f37021] text-white font-black text-xs uppercase py-3 rounded-full"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl">
            <div>
              <div className="bg-[#f37021] text-white px-5 py-4 flex items-center justify-between font-black text-sm uppercase">
                <span>Giỏ Hàng FBSHOP ({cartCount})</span>
                <button type="button" onClick={() => setIsCartOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-3 overflow-y-auto max-h-[70vh]">
                {cart.length === 0 ? (
                  <p className="text-center py-12 text-xs text-slate-400">
                    Giỏ hàng của bạn đang trống.
                  </p>
                ) : (
                  cart.map(({ item, qty, tension }) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 border-b border-slate-100 pb-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Căng cước: {tension}
                        </p>
                        <p className="text-xs font-black text-[#f37021]">
                          {item.priceFormatted}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, -1)}
                            className="p-1 border rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, 1)}
                            className="p-1 border rounded"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.id, -qty)}
                        className="text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-4 border-t bg-slate-50 space-y-3">
              <div className="flex justify-between text-sm font-black">
                <span>Tổng thanh toán:</span>
                <span className="text-[#f37021]">{formatVnd(cartTotal)}</span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setIsCartOpen(false);
                  setToastMsg(
                    "Đặt hàng thành công! Kỹ thuật viên FBShop sẽ liên hệ xác nhận mức căng cước ngay."
                  );
                }}
                className="w-full bg-[#f37021] disabled:bg-slate-300 text-white font-black text-xs uppercase py-3 rounded-full"
              >
                Hoàn Tất Đặt Mua
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
