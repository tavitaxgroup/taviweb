"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Phone,
  MapPin,
  FileText,
  User,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  ExternalLink
} from "lucide-react";
import type { BusinessLead } from "@/types/demo";

interface UnderDevelopmentViewProps {
  lead: BusinessLead;
}

const FEATURED_TEMPLATES = [
  {
    title: "Công ty Xây dựng & Thi công",
    desc: "Giao diện uy tín, hồ sơ năng lực công trình, bảng dự toán",
    demoSlug: "cong_ty_xay_dung",
    sampleId: "mock-cong_ty_xay_dung"
  },
  {
    title: "Thiết kế Nội thất & Decor",
    desc: "Showroom hình ảnh sang trọng, thư viện dự án hoàn thiện",
    demoSlug: "noi_that",
    sampleId: "mock-noi_that"
  },
  {
    title: "Nhà hàng & Ẩm thực",
    desc: "Thực đơn món ăn bắt mắt, đặt bàn trực tuyến, định vị chỉ đường",
    demoSlug: "nha_hang",
    sampleId: "mock-nha_hang"
  },
  {
    title: "Quán Cafe & Đồ uống",
    desc: "Check-in không gian quán, menu đồ uống, liên kết mạng xã hội",
    demoSlug: "quan_cafe",
    sampleId: "mock-quan_cafe"
  },
  {
    title: "Phòng khám Nha khoa",
    desc: "Bảng giá dịch vụ rõ ràng, đặt hẹn nhanh, giới thiệu bác sĩ",
    demoSlug: "nha_khoa",
    sampleId: "mock-nha_khoa"
  },
  {
    title: "Spa & Trị liệu dưỡng sinh",
    desc: "Tone màu thư giãn, giới thiệu liệu trình chăm sóc, ưu đãi",
    demoSlug: "spa",
    sampleId: "mock-spa"
  }
];

export function UnderDevelopmentView({ lead }: UnderDevelopmentViewProps) {
  const companyName = lead.name || "Quý Doanh Nghiệp";
  const rawIndustry = lead.raw_industry || "Chuyên ngành theo đăng ký kinh doanh";
  const phone = lead.formatted_phone_number || "0961 803 804";
  const address = lead.formatted_address || "Đang cập nhật địa chỉ trụ sở";
  const taxCode = lead.tax_code || "Đang cập nhật MST";
  const representative = lead.representative;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
              T
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Tavi<span className="text-blue-600">Web</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                Demo Studio
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="tel:0961803804"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="hidden md:inline">Hotline:</span> 0961 803 804
            </a>
            <a
              href="https://zalo.me/0961803804"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span>Tư vấn Zalo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 md:py-16">
        {/* Status Alert Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-600">
            <Clock className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100/80 px-2.5 py-0.5 rounded-full mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
              Đang phát triển mẫu giao diện chuyên sâu
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              Mẫu website chuyên biệt cho ngành <strong>{rawIndustry}</strong> đang được đội ngũ thiết kế TaviWeb phát triển. Quý khách có thể yêu cầu thiết kế giao diện tùy biến riêng theo nhận diện thương hiệu chỉ trong 24 giờ.
            </p>
          </div>
          <a
            href="https://zalo.me/0961803804"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-xs sm:text-sm font-semibold bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl shadow-sm transition-colors whitespace-nowrap"
          >
            Đăng ký thiết kế riêng
          </a>
        </div>

        {/* Business Profile Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium mb-3">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Doanh nghiệp đã đăng ký kinh doanh hợp pháp</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {companyName}
              </h1>
              <p className="text-slate-500 text-sm mt-1">
                Bản xem trước dữ liệu hồ sơ doanh nghiệp trên hệ sinh thái TaviWeb
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
              <a
                href="https://zalo.me/0961803804"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/15 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Nhận demo thiết kế riêng</span>
              </a>
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>Gọi liên hệ</span>
              </a>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Mã số thuế
                </div>
                <div className="text-base font-bold text-slate-900 mt-0.5 tracking-wide">
                  {taxCode}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Lĩnh vực kinh doanh
                </div>
                <div className="text-sm font-medium text-slate-800 mt-0.5 leading-snug">
                  {rawIndustry}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Địa chỉ trụ sở
                </div>
                <div className="text-sm font-medium text-slate-800 mt-0.5 leading-snug">
                  {address}
                </div>
              </div>
            </div>

            {representative && (
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Người đại diện pháp luật
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {representative}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Why Build Website With TaviWeb */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Giải pháp website chuyên nghiệp cho doanh nghiệp mới
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              TaviWeb hỗ trợ doanh nghiệp xây dựng sự hiện diện uy tín trên Internet ngay từ những ngày đầu hoạt động
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Chuẩn nhận diện thương hiệu</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tích hợp logo, thông tin doanh nghiệp, mã số thuế, hotline và địa chỉ thực tế từ hồ sơ đăng ký kinh doanh.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Tốc độ cao & Chuẩn SEO</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tối ưu Google PageSpeed 95+, hỗ trợ hiển thị đẹp trên mọi kích thước màn hình từ điện thoại đến máy tính.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Bàn giao nhanh 24h</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Quy trình tự động hóa giúp hoàn thiện và xuất bản website với chi phí hợp lý nhất cho doanh nghiệp vừa và nhỏ.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Sample Templates */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Tham khảo các mẫu website ngành có sẵn
              </h2>
              <p className="text-slate-500 text-sm mt-0.5">
                Trải nghiệm thực tế các bộ giao diện đã được TaviWeb chuẩn hóa và vận hành
              </p>
            </div>
            <Link
              href="/"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              <span>Xem tất cả giao diện</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {FEATURED_TEMPLATES.map((tpl) => (
              <div
                key={tpl.demoSlug}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                    Template mẫu
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {tpl.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {tpl.desc}
                  </p>
                </div>
                <a
                  href={`/demo/${tpl.sampleId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 py-2.5 px-3 rounded-xl border border-slate-200 transition-colors w-full"
                >
                  <span>Xem demo trực tiếp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TaviWeb. Nền tảng thiết kế & xuất bản website tự động cho doanh nghiệp.
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:0961803804" className="hover:text-blue-600">
              Hotline: 0961 803 804
            </a>
            <a href="mailto:support@tavitax.vn" className="hover:text-blue-600">
              support@tavitax.vn
            </a>
            <Link href="/" className="hover:text-blue-600">
              Trang chủ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
