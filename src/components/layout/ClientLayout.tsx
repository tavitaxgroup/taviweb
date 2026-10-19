"use client";

import React, { createContext, useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { useAuth } from "@/modules/crm/contexts/AuthContext";
import ChatbotWidget from "../ChatbotWidget";
import {
  Clock,
  AlertTriangle,
  Sparkles,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export const SidebarContext = createContext({
  isSidebarOpen: true,
  toggleSidebar: () => {},
});
export const useSidebar = () => useContext(SidebarContext);

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, isSuperAdmin } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isAuthPage =
    pathname === "/admin/crm/login" ||
    pathname === "/crm/login" ||
    pathname === "/login" ||
    pathname?.includes("/login");

  if (isAuthPage) {
    return (
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50 h-full">
        <main className="flex-1 overflow-y-auto relative h-full">
          {children}
        </main>
      </div>
    );
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const expiresAt = user?.tenant?.package_expires_at;
  const isExpired =
    !isSuperAdmin &&
    Boolean(expiresAt) &&
    new Date(expiresAt!).getTime() < Date.now();

  const daysLeft =
    !isSuperAdmin && expiresAt && !isExpired
      ? Math.max(
          1,
          Math.ceil(
            (new Date(expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
          )
        )
      : null;

  const formattedExpireDate = expiresAt
    ? new Date(expiresAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  const isOnBillingPage = pathname === "/admin/settings";

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50/50">
        <AdminHeader />

        {/* Trial / Expiration Top Banner for Customers */}
        {!isSuperAdmin && expiresAt && (
          <div
            className={`px-4 py-2.5 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 border-b shrink-0 ${
              isExpired
                ? "bg-rose-600 text-white border-rose-700"
                : "bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white border-indigo-700"
            }`}
          >
            <div className="flex items-center gap-2 text-center sm:text-left">
              {isExpired ? (
                <>
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-200" />
                  <span className="font-semibold">
                    Website <strong>/{user?.tenant?.slug}</strong> đã tạm ngưng
                    hoạt động do hết hạn dùng thử 7 ngày ({formattedExpireDate}
                    ). Vui lòng đăng ký gói cước để mở khóa lại ngay!
                  </span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 shrink-0 text-amber-300" />
                  <span className="font-medium">
                    🎁 <strong>Gói Dùng thử 7 ngày miễn phí:</strong> Còn{" "}
                    <strong className="text-amber-300">{daysLeft} ngày</strong>{" "}
                    (đến hết {formattedExpireDate}). Sau thời hạn này website sẽ
                    tạm ngưng nếu chưa gia hạn hoặc đăng ký gói.
                  </span>
                </>
              )}
            </div>
            <Link
              href="/admin/settings"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-sm transition-all shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isExpired ? "Gia hạn mở khóa ngay" : "Đăng ký gói chính thức"}
              </span>
            </Link>
          </div>
        )}

        <main className="flex-1 overflow-y-auto relative">
          {isExpired && !isOnBillingPage ? (
            <div className="p-6 md:p-12 max-w-2xl mx-auto flex items-center justify-center min-h-[75vh]">
              <div className="bg-white rounded-3xl border border-rose-200 shadow-xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-5">
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-extrabold uppercase tracking-wider mb-3">
                  Hết thời hạn dùng thử 7 ngày
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                  Website /{user?.tenant?.slug} đang tạm ngưng hoạt động
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Thời gian dùng thử miễn phí 7 ngày của bạn đã kết thúc vào
                  ngày <strong>{formattedExpireDate}</strong>. Toàn bộ dữ liệu
                  giao diện, sản phẩm và khách hàng của bạn vẫn được giữ nguyên.
                  Hãy đăng ký hoặc gia hạn gói cước để kích hoạt lại Website và
                  toàn bộ công cụ quản trị ngay lập tức.
                </p>
                <Link
                  href="/admin/settings"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md transition-all"
                >
                  <span>Chuyển đến trang Đăng ký & Gia hạn Gói cước</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
      {user?.tenant_id && <ChatbotWidget tenantId={user.tenant_id} />}
    </SidebarContext.Provider>
  );
}
