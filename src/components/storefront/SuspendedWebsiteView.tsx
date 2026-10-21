"use client";

import React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Clock,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Settings,
  PhoneCall,
  Globe,
} from "lucide-react";

interface SuspendedWebsiteViewProps {
  tenantName: string;
  tenantSlug: string;
  expiredAt?: string | null;
}

export function SuspendedWebsiteView({
  tenantName,
  tenantSlug,
  expiredAt,
}: SuspendedWebsiteViewProps) {
  const formattedDate = expiredAt
    ? new Date(expiredAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen w-full bg-[#070b14] text-white flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-rose-600/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10">
        <Link href="/" className="inline-flex items-center gap-2.5 text-white font-extrabold text-lg tracking-wide">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span>TAVIWEB</span>
        </Link>
        <Link
          href="/admin/crm/login"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-bold text-white transition-all"
        >
          <span>Đăng nhập Quản trị</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl bg-[#101726]/90 backdrop-blur-xl border border-rose-500/30 rounded-3xl p-8 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.65)] text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 mb-6 shadow-[0_0_40px_rgba(244,63,94,0.25)]">
            <ShieldAlert className="w-10 h-10" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-extrabold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Website Đã Tạm Ngưng Hoạt Động</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            {tenantName}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
            Website <span className="font-mono text-rose-300 font-bold">/{tenantSlug}</span> đã kết thúc{" "}
            <strong className="text-white">7 ngày dùng thử miễn phí</strong> (hoặc đã hết hạn gói cước dịch vụ
            {formattedDate ? ` vào ngày ${formattedDate}` : ""}) và hiện đang tạm ngưng hiển thị.
          </p>

          {/* Owner Action Box */}
          <div className="bg-[#0a0f1a] border border-slate-800 rounded-2xl p-6 text-left mb-7">
            <h2 className="text-sm font-extrabold text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Dành cho Chủ sở hữu Website</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
              Toàn bộ giao diện, thông tin doanh nghiệp, sản phẩm và dữ liệu khách hàng của bạn vẫn được{" "}
              <strong className="text-slate-200">bảo lưu an toàn 100%</strong> trên hệ thống TAVIWEB. Hãy đăng nhập vào
              Cổng Quản trị và đăng ký gói cước chính thức để mở khóa website hoạt động trở lại ngay lập tức.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/admin/settings"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-sm shadow-[0_10px_25px_rgba(99,102,241,0.35)] transition-all"
              >
                <span>Gia hạn / Đăng ký gói kích hoạt ngay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://zalo.me/0337367643"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Hỗ trợ Zalo: 0337.367.643</span>
              </a>
            </div>
          </div>

          <Link
            href="/"
            className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            ← Quay về trang chủ nền tảng TAVIWEB
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-5 text-center text-xs text-slate-500 border-t border-white/5">
        © {new Date().getFullYear()} TAVIWEB — Nền tảng Thiết kế Website & Tự động hóa Doanh nghiệp
      </footer>
    </div>
  );
}

interface TrialWebsiteBannerProps {
  tenantName: string;
  tenantSlug: string;
  expiresAt: string;
}

export function TrialWebsiteBanner({
  tenantName,
  expiresAt,
}: TrialWebsiteBannerProps) {
  const diffMs = new Date(expiresAt).getTime() - Date.now();
  const daysLeft = Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const formattedExpire = new Date(expiresAt).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="sticky top-0 z-[90] w-full bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-b border-indigo-500/30 px-4 py-2.5 shadow-md font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-extrabold shrink-0">
            <Clock className="w-3.5 h-3.5" />
            <span>Dùng thử 7 ngày (Còn {daysLeft} ngày)</span>
          </span>
          <span className="text-slate-200 font-medium">
            Website <strong className="text-white">{tenantName}</strong> miễn phí đến hết{" "}
            <strong className="text-amber-300">{formattedExpire}</strong>. Sau thời hạn này website sẽ tạm ngưng nếu chưa đăng ký gói.
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/admin/settings/website"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold border border-white/15 transition-colors"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Chỉnh sửa Web</span>
          </Link>
          <Link
            href="/admin/settings"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold shadow-sm transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Đăng ký gói chính thức</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
