"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Send,
  Compass,
  CheckCircle2,
  X,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto13DefaultData,
  type GarageOto13Data,
  type GarageOto13Package,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: GarageOto13Data = adaptClonedTemplateData(
    garageOto13DefaultData,
    incomingData
  );

  const [searchTab, setSearchTab] = useState<"tour" | "rental">("tour");
  const [selectedPkg, setSelectedPkg] = useState<GarageOto13Package | null>(
    null
  );
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@roadkings.vn";

  const renderPackageCard = (pkg: GarageOto13Package) => (
    <div
      key={pkg.id}
      onClick={() => setSelectedPkg(pkg)}
      className="bg-[#F2F2F2] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {pkg.saleBadge && (
          <span className="absolute top-3 left-3 bg-[#E53935] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            • Sale!
          </span>
        )}
      </div>

      <div className="p-5 text-center flex-1 flex flex-col justify-between">
        <div>
          <span className="inline-block border border-[#cccccc] bg-white text-[#666666] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-xs">
            {pkg.tag}
          </span>
          <h3 className="mt-2.5 text-xs font-medium text-[#444444] group-hover:text-[#111111] leading-snug line-clamp-2">
            {pkg.title}
          </h3>
        </div>

        <div className="mt-3 pt-2 flex items-center justify-center gap-2 text-xs">
          {pkg.oldPrice && (
            <span className="text-[#999999] line-through text-[11px]">
              {pkg.oldPrice}
            </span>
          )}
          <span className="font-extrabold text-[#111111]">{pkg.price}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#222222] selection:text-white">
      {/* HEADER (Clean White Navbar matching OTO013-garage_oto_13.png) */}
      <header className="bg-white sticky top-0 z-40 border-b border-[#efefef]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-8 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-extrabold text-[#1E3A8A] leading-none">
                    {data.business.name}
                  </span>
                  <span className="block text-[9px] text-[#777777]">
                    Off-Road & Motor Garage
                  </span>
                </div>
              </div>
            )}
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold text-[#222222]">
            <a href="#goi-dich-vu" className="hover:text-[#1E3A8A]">
              Hành Trình Địa Hình ⌄
            </a>
            <a href="#checkerboard" className="hover:text-[#1E3A8A]">
              Thuê Mô Tô & Độ Xe ⌄
            </a>
            <a href="#xuyen-viet" className="hover:text-[#1E3A8A]">
              Đặt Lịch Bảo Dưỡng ⌄
            </a>
            <a href="#tin-tuc" className="hover:text-[#1E3A8A]">
              Kinh Nghiệm
            </a>
            <a href="#lien-he" className="hover:text-[#1E3A8A]">
              Liên Hệ
            </a>
            <span className="text-[#555555] flex items-center gap-1">
              🇻🇳 Tiếng Việt ⌄
            </span>
          </nav>

          <a
            href="#goi-dich-vu"
            aria-label="Tìm kiếm"
            className="text-[#333333] hover:text-[#111111]"
          >
            <Search className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO BANNER WITH SCRIPT TITLE & 2-TAB SEARCH BOX */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex flex-col justify-between overflow-hidden bg-[#1e2923]">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="div-spacer h-8" />

        {/* Center Script Title */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white my-auto py-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif italic font-bold drop-shadow-md">
            {data.hero.title || "Chiến Mã Đường Đèo"}
          </h1>
          <p className="mt-3 text-base sm:text-xl font-light text-white/95 max-w-lg mx-auto leading-snug">
            {data.hero.subtitle}
          </p>

          {/* Left/Right Slider Arrows */}
          <button
            type="button"
            aria-label="Trước"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/50 items-center justify-center text-white/80 hover:bg-white/20"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Tiếp"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/50 items-center justify-center text-white/80 hover:bg-white/20"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom 2-Tab Selector (FIND TOUR | FIND HOTEL) */}
        <div className="relative z-20 flex justify-center">
          <div className="inline-flex rounded-t-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setSearchTab("tour")}
              className={`px-7 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                searchTab === "tour"
                  ? "bg-white text-[#222222]"
                  : "bg-[#9E9E9E]/90 text-white"
              }`}
            >
              TÌM HÀNH TRÌNH
            </button>
            <button
              type="button"
              onClick={() => setSearchTab("rental")}
              className={`px-7 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                searchTab === "rental"
                  ? "bg-white text-[#222222]"
                  : "bg-[#9E9E9E]/90 text-white"
              }`}
            >
              THUÊ XE & BẢO DƯỠNG
            </button>
          </div>
        </div>
      </section>

      {/* FILTER BAR BELOW HERO */}
      <div className="bg-white py-6 border-b border-[#f0f0f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#222222] mb-4">
            {searchTab === "tour"
              ? "TÌM HÀNH TRÌNH ĐỊA HÌNH CHO BẠN"
              : "ĐẶT THUÊ MÔ TÔ & GÓI ĐỘ XE OFF-ROAD"}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <select className="px-3.5 py-2 border border-[#e0e0e0] rounded-full text-xs text-[#666666] bg-white focus:outline-none">
              <option>Dòng xe / Hành trình</option>
              <option>Mô tô Adventure 500cc</option>
              <option>Xe Cào Cào Địa Hình</option>
              <option>Xe Bán Tải Độ Off-Road</option>
            </select>
            <select className="px-3.5 py-2 border border-[#e0e0e0] rounded-full text-xs text-[#666666] bg-white focus:outline-none">
              <option>Mức giá</option>
              <option>Dưới 5,000,000 ₫</option>
              <option>5,000,000 ₫ - 10,000,000 ₫</option>
            </select>
            <select className="px-3.5 py-2 border border-[#e0e0e0] rounded-full text-xs text-[#666666] bg-white focus:outline-none">
              <option>Số ngày</option>
              <option>2 Ngày 1 Đêm</option>
              <option>4 Ngày 3 Đêm</option>
              <option>5 Ngày 4 Đêm</option>
            </select>
            <select className="px-3.5 py-2 border border-[#e0e0e0] rounded-full text-xs text-[#666666] bg-white focus:outline-none">
              <option>Điểm khởi hành</option>
              <option>Hà Giang</option>
              <option>Hà Nội</option>
              <option>TP. Hồ Chí Minh</option>
            </select>
            <label className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-[#e0e0e0] rounded-full text-xs text-[#666666]">
              <span>Đang ưu đãi</span>
              <input type="checkbox" className="rounded-xs" />
            </label>
            <a
              href="#goi-dich-vu"
              className="px-6 py-2 bg-[#222222] hover:bg-black text-white text-xs font-extrabold uppercase rounded-full transition-colors"
            >
              TÌM KIẾM
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 2: DIVERSE DESTINATIONS BENTO COLLAGE */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mb-8 pl-4 border-l-2 border-[#222222]">
            <h2 className="text-xl sm:text-2xl font-light text-[#333333] leading-snug">
              Những Cung Đường Đa Dạng Đang{" "}
              <strong className="font-extrabold text-[#111111]">
                Chờ Bạn Khám Phá!
              </strong>
            </h2>
            <p className="mt-2 text-xs text-[#777777] leading-relaxed">
              {data.business.aboutText?.[0]}
            </p>
          </div>

          {/* Multi-Tile Bento Grid with Center Text Box */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <div className="col-span-1 h-40 rounded-xl overflow-hidden">
              <img
                src={data.collageImages[0]}
                alt="Cung đường 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 h-80 sm:h-[332px] rounded-xl overflow-hidden">
              <img
                src={data.collageImages[1]}
                alt="Cung đường 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 h-40 rounded-xl overflow-hidden">
              <img
                src={data.collageImages[2]}
                alt="Cung đường 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 h-40 rounded-xl overflow-hidden">
              <img
                src={data.collageImages[3]}
                alt="Cung đường 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 h-40 rounded-xl overflow-hidden">
              <img
                src={data.collageImages[4]}
                alt="Cung đường 5"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Row 2 & 3 */}
            <div className="col-span-1 row-span-2 h-80 sm:h-[332px] rounded-xl overflow-hidden">
              <img
                src={data.collageImages[5]}
                alt="Đoàn xe mô tô"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center Text Tile */}
            <div className="col-span-2 h-40 rounded-xl bg-[#F4F5F7] flex items-center justify-center p-6 text-center">
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#222222]">
                THIÊN ĐƯỜNG OFF-ROAD & ĐỘ XE TẠI {data.business.name}
              </h3>
            </div>

            <div className="col-span-1 row-span-2 h-80 sm:h-[332px] rounded-xl overflow-hidden">
              <img
                src={data.collageImages[6]}
                alt="Biker"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-1 h-40 rounded-xl overflow-hidden">
              <img
                src={data.collageImages[7]}
                alt="Đèo núi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 h-40 rounded-xl overflow-hidden">
              <img
                src={data.collageImages[8]}
                alt="Thung lũng"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 h-40 rounded-xl overflow-hidden">
              <img
                src={data.collageImages[0]}
                alt="Hành trình"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3x3 CHECKERBOARD GRID (Go ANYWHERE with just a few CLICKS) */}
      <section id="checkerboard" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <div className="max-w-md pl-4 border-l-2 border-[#222222]">
            <h2 className="text-sm sm:text-base font-normal text-[#333333] uppercase leading-snug">
              Đi <strong className="font-extrabold">BẤT CỨ ĐÂU</strong> cùng{" "}
              <strong className="font-extrabold">{data.business.name}</strong>{" "}
              chỉ với vài <strong className="font-extrabold">CÚ NHẤP.</strong>
            </h2>
            <p className="mt-2 text-xs text-[#777777]">
              Đội xe mô tô địa hình, bán tải 2 cầu và xưởng bảo dưỡng chuyên sâu
              luôn sẵn sàng đồng hành cùng bạn chinh phục miền Bắc.
            </p>
          </div>
        </div>

        {/* Full-Width 3x3 Checkerboard */}
        <div className="max-w-7xl mx-auto">
          {data.checkerboardRows.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-1 md:grid-cols-3 items-stretch"
            >
              {row.textPosition === "left" && (
                <div className="p-8 sm:p-12 flex flex-col justify-center bg-white">
                  <h3 className="text-sm font-extrabold text-[#222222]">
                    {row.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                    {row.description}
                  </p>
                  <a
                    href="#goi-dich-vu"
                    className="mt-4 inline-block text-[11px] font-bold text-[#222222] border-b border-[#222222] pb-0.5 self-start"
                  >
                    Xem thêm
                  </a>
                </div>
              )}

              <div className="h-64 sm:h-72 overflow-hidden">
                <img
                  src={row.image1}
                  alt={row.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {row.textPosition === "center" && (
                <div className="p-8 sm:p-12 flex flex-col justify-center bg-white">
                  <h3 className="text-sm font-extrabold text-[#222222]">
                    {row.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                    {row.description}
                  </p>
                  <a
                    href="#goi-dich-vu"
                    className="mt-4 inline-block text-[11px] font-bold text-[#222222] border-b border-[#222222] pb-0.5 self-start"
                  >
                    Xem thêm
                  </a>
                </div>
              )}

              <div className="h-64 sm:h-72 overflow-hidden">
                <img
                  src={row.image2}
                  alt={row.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {row.textPosition === "right" && (
                <div className="p-8 sm:p-12 flex flex-col justify-center bg-white">
                  <h3 className="text-sm font-extrabold text-[#222222]">
                    {row.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                    {row.description}
                  </p>
                  <a
                    href="#goi-dich-vu"
                    className="mt-4 inline-block text-[11px] font-bold text-[#222222] border-b border-[#222222] pb-0.5 self-start"
                  >
                    Xem thêm
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: BEST SELLING PACKAGES */}
      <section id="goi-dich-vu" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-lg mb-8 pl-4 border-l-2 border-[#222222]">
            <h2 className="text-lg sm:text-xl font-light uppercase text-[#333333]">
              {data.business.name} 2026{" "}
              <strong className="font-extrabold text-[#111111]">
                GÓI DỊCH VỤ BÁN CHẠY NHẤT
              </strong>
            </h2>
            <p className="mt-1.5 text-xs text-[#777777]">
              Các gói thuê xe địa hình và bảo dưỡng hành trình được lựa chọn
              nhiều nhất trong năm. Gọi ngay HOTLINE để nhận tư vấn lịch trình
              chi tiết.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.bestSellingPackages.map(renderPackageCard)}
          </div>
        </div>
      </section>

      {/* SECTION 5: OFFERS UP TO 30% CANYON BANNER */}
      <section className="relative py-20 bg-[#1a2e22] text-white text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85"
          alt="Ưu đãi 30%"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 max-w-xl mx-auto px-4">
          <span className="block text-xl sm:text-2xl font-bold">
            Ưu đãi lên đến 30%
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold">
            Đặt Xe & Bảo Dưỡng Ngay
          </h2>
          <a
            href="#lien-he"
            className="mt-5 inline-block px-7 py-2.5 bg-white text-[#222222] hover:bg-[#222222] hover:text-white text-xs font-extrabold uppercase rounded-full shadow-md transition-colors"
          >
            LIÊN HỆ CHÚNG TÔI
          </a>
        </div>
      </section>

      {/* SECTION 6: TRAVEL IN THE COUNTRY (3 Cards with Sale! Badge) */}
      <section id="xuyen-viet" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-lg mb-8 pl-4 border-l-2 border-[#222222]">
            <h2 className="text-lg sm:text-xl font-light uppercase text-[#333333]">
              Hành Trình {data.business.name}{" "}
              <strong className="font-extrabold text-[#111111]">
                XUYÊN VIỆT
              </strong>
            </h2>
            <p className="mt-1.5 text-xs text-[#777777]">
              Với hơn 3.260km đường bờ biển, những khu bảo tồn thiên nhiên tuyệt
              đẹp và các cung đường đèo kỳ vĩ, đội xe của chúng tôi sẵn sàng đưa
              bạn đi khắp Việt Nam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.countryPackages.map(renderPackageCard)}
          </div>
        </div>
      </section>

      {/* SECTION 7: REVIEWS FROM CUSTOMERS */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 pl-4 border-l-2 border-[#222222]">
            <h2 className="text-lg sm:text-xl font-light text-[#333333]">
              Đánh giá từ{" "}
              <strong className="font-extrabold uppercase text-[#111111]">
                KHÁCH HÀNG
              </strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <img
                src={data.customerReview.image}
                alt={data.customerReview.author}
                className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-md"
              />
            </div>

            <div className="lg:col-span-6 relative p-6 sm:p-10">
              {/* Giant Quote Watermark */}
              <div className="pointer-events-none select-none absolute -top-6 left-6 text-[160px] font-serif font-black text-[#F0F0F0] leading-none -z-10">
                ”
              </div>

              <div className="flex items-center gap-0.5 text-[#E53935] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#E53935] text-[#E53935]"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm italic text-[#555555] leading-relaxed">
                {data.customerReview.content}
              </p>
              <div className="mt-4 text-xs">
                <strong className="text-[#222222]">
                  {data.customerReview.author}
                </strong>{" "}
                /{" "}
                <span className="text-[#888888]">
                  {data.customerReview.source}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: LATEST TRAVEL NEWS AND OFFERS */}
      <section id="tin-tuc" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 pl-4 border-l-2 border-[#222222]">
            <h2 className="text-lg sm:text-xl font-light text-[#333333]">
              <strong className="font-extrabold uppercase text-[#111111]">
                MỚI NHẤT
              </strong>{" "}
              Tin Tức Kỹ Thuật & Ưu Đãi Hành Trình
            </h2>
            <p className="text-xs text-[#777777] mt-1">
              Cập nhật nhanh kinh nghiệm bảo dưỡng xe và xu hướng du lịch địa
              hình
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <div
                key={post.id}
                className="relative h-56 rounded-2xl overflow-hidden group shadow-xs"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-5">
                  <h3 className="text-xs font-bold text-white leading-snug">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CONTACT NOW OVER MOUNTAIN BACKGROUND + FULL-WIDTH MAP */}
      <section
        id="lien-he"
        className="relative py-16 bg-[#2A3B2C] text-white overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt="Liên hệ"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider mb-6">
            LIÊN HỆ ĐẶT LỊCH NGAY
          </h2>

          {contactSubmitted ? (
            <div className="p-5 bg-white/15 backdrop-blur-xs rounded-lg border border-white/30 inline-flex items-center gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#8CE99A]" />
              <span>
                Đã gửi thông tin! Bộ phận điều hành {data.business.name} sẽ gọi
                lại ngay.
              </span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactSubmitted(true);
              }}
              className="space-y-3 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên*"
                  className="px-4 py-2.5 bg-white/15 backdrop-blur-xs border border-white/40 rounded-md text-xs text-white placeholder-white/75 focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email*"
                  className="px-4 py-2.5 bg-white/15 backdrop-blur-xs border border-white/40 rounded-md text-xs text-white placeholder-white/75 focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại*"
                  className="px-4 py-2.5 bg-white/15 backdrop-blur-xs border border-white/40 rounded-md text-xs text-white placeholder-white/75 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Địa chỉ / Dòng xe quan tâm"
                  className="px-4 py-2.5 bg-white/15 backdrop-blur-xs border border-white/40 rounded-md text-xs text-white placeholder-white/75 focus:outline-none"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Nội dung yêu cầu thuê xe hoặc bảo dưỡng..."
                className="w-full px-4 py-2.5 bg-white/15 backdrop-blur-xs border border-white/40 rounded-md text-xs text-white placeholder-white/75 focus:outline-none"
              />
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="px-12 py-2.5 bg-black hover:bg-[#222222] text-white text-xs font-extrabold uppercase tracking-widest rounded-md transition-colors"
                >
                  GỬI NGAY
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FULL-WIDTH MAP BANNER */}
      <div className="relative h-64 w-full bg-[#e8eef5] overflow-hidden border-b border-[#eeeeee]">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80"
          alt="Bản đồ RoadKings"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-4 left-4 bg-white p-3 rounded-md shadow-md border border-[#e0e0e0] max-w-xs text-xs">
          <p className="font-bold text-[#111111]">{data.business.name}</p>
          <p className="text-[11px] text-[#666666] mt-0.5">
            {data.business.address}
          </p>
          <span className="mt-1 inline-block text-[10px] font-bold text-[#1E3A8A]">
            5.0 ★★★★★ (490 đánh giá)
          </span>
        </div>
      </div>

      {/* FOOTER (4-Column Clean White Footer + Black Bottom Bar) */}
      <footer className="bg-white pt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-[#666666]">
          <div className="lg:col-span-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-sm font-extrabold text-[#1E3A8A]">
                {data.business.name}
              </span>
            </div>
            <p className="text-[11px] leading-relaxed">
              {data.business.aboutText?.[0]}
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-extrabold text-[#222222] text-sm mb-3">
              Liên hệ
            </h4>
            <ul className="space-y-2.5 text-[11px]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#222222] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-extrabold text-[#222222] text-sm mb-3">
              Danh mục
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>Hành trình xuyên Việt</li>
              <li>Thuê mô tô địa hình</li>
              <li>Đặt phòng & Homestay</li>
              <li>Bảo dưỡng xe phượt</li>
              <li>Điều khoản dịch vụ</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-extrabold text-[#222222] text-sm mb-3">
              Đăng ký tư vấn
            </h4>
            <p className="text-[11px] mb-3">
              Để lại số điện thoại nhận tư vấn ngay
            </p>
            <div className="flex items-center border border-[#dddddd] rounded-full px-3 py-1.5 mb-3">
              <input
                type="tel"
                placeholder="Số điện thoại..."
                className="w-full text-[11px] focus:outline-none"
              />
              <Send className="w-3.5 h-3.5 text-[#222222] shrink-0" />
            </div>
          </div>
        </div>

        <div className="bg-[#111111] text-white/70 py-3 text-center text-[11px]">
          © Thiết kế và lập trình bởi <strong>{data.business.name}</strong> •
          TaviWeb
        </div>
      </footer>

      {/* PACKAGE BOOKING MODAL */}
      {selectedPkg && (
        <div
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
          onClick={() => setSelectedPkg(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPkg(null)}
              className="absolute top-4 right-4 text-[#666666] hover:text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPkg.image}
              alt={selectedPkg.title}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />
            <span className="text-[10px] font-bold uppercase text-[#E53935]">
              {selectedPkg.tag}
            </span>
            <h3 className="mt-1 text-sm font-extrabold text-[#222222]">
              {selectedPkg.title}
            </h3>
            <p className="mt-2 text-base font-extrabold text-[#111111]">
              {selectedPkg.price}
            </p>
            <a
              href="#lien-he"
              onClick={() => setSelectedPkg(null)}
              className="mt-4 block w-full py-2.5 bg-[#222222] hover:bg-black text-white text-center text-xs font-bold uppercase rounded-full transition-colors"
            >
              ĐẶT LỊCH NGAY
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
