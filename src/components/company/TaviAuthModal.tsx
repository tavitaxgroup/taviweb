"use client";

import React, { useEffect, useState } from "react";
import { industryCatalog } from "@/lib/templates/templateCatalog";
import {
  X,
  User,
  Lock,
  Building2,
  Phone,
  Mail,
  MapPin,
  FileText,
  LayoutTemplate,
  ArrowRight,
  Loader2,
  Sparkles,
  Globe,
  CheckCircle2,
  Clock,
  Settings,
} from "lucide-react";

interface TaviAuthModalProps {
  isOpen: boolean;
  initialMode?: "login" | "register";
  initialTemplateKey?: string;
  onClose: () => void;
}

export function TaviAuthModal({
  isOpen,
  initialMode = "login",
  initialTemplateKey = "noi_that",
  onClose,
}: TaviAuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(initialMode);

  // Login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register & Website Builder states
  const [templateKey, setTemplateKey] = useState(initialTemplateKey || "noi_that");
  const [businessName, setBusinessName] = useState("");
  const [tagline, setTagline] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  // Provisioning animation states
  const [buildStep, setBuildStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [createdTenant, setCreatedTenant] = useState<{
    name: string;
    slug: string;
    template_key: string;
    package_expires_at?: string;
  } | null>(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      if (initialTemplateKey) {
        setTemplateKey(initialTemplateKey);
      }
      setError("");
      setBuildStep(0);
      setCreatedTenant(null);
    }
  }, [isOpen, initialMode, initialTemplateKey]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && buildStep === 0) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, buildStep, onClose]);

  if (!isOpen) return null;

  const selectedIndustry =
    industryCatalog.find((i) => i.key === templateKey) || industryCatalog[0];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        window.location.href = "/admin";
      } else {
        setError(data.error || "Tài khoản hoặc mật khẩu không chính xác.");
      }
    } catch (err) {
      setError("Không thể kết nối đến máy chủ. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setBuildStep(1);

    try {
      const stepTimer1 = setTimeout(() => setBuildStep(2), 900);
      const stepTimer2 = setTimeout(() => setBuildStep(3), 1850);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          name: businessName,
          tagline,
          address,
          phone,
          email: regEmail,
          password: regPassword,
          templateKey,
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        clearTimeout(stepTimer1);
        clearTimeout(stepTimer2);
        setBuildStep(0);
        setError(data.error || "Đăng ký không thành công. Vui lòng kiểm tra lại.");
        setLoading(false);
        return;
      }

      // Wait until step 3 animation completes so user sees their website being assembled
      setTimeout(() => {
        const tenantInfo = data.user?.tenant || {
          name: businessName,
          slug: "website",
          template_key: templateKey,
        };
        setCreatedTenant(tenantInfo);
        setBuildStep(4);
        setLoading(false);

        // Automatically open the newly created website after 1.8s
        setTimeout(() => {
          window.location.href = `/${tenantInfo.slug}`;
        }, 1800);
      }, 2600);
    } catch (err) {
      setBuildStep(0);
      setError("Không thể kết nối đến máy chủ. Vui lòng thử lại.");
      setLoading(false);
    }
  };

  return (
    <div
      className="tavi-auth-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tavi-auth-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget && buildStep === 0) onClose();
      }}
    >
      <div className="tavi-auth-modal">
        {/* Close button */}
        {buildStep === 0 && (
          <button
            type="button"
            className="tavi-auth-close"
            onClick={onClose}
            aria-label="Đóng khung đăng nhập"
          >
            <X size={20} />
          </button>
        )}

        {/* Modal Brand Header */}
        <div className="tavi-auth-header">
          <div className="tavi-auth-logo-badge">
            <Globe size={24} />
          </div>
          <div>
            <span className="tavi-auth-eyebrow">
              {mode === "register"
                ? "KHỞI TẠO WEBSITE TỰ ĐỘNG — MIỄN PHÍ 7 NGÀY"
                : "CỔNG QUẢN TRỊ KHÁCH HÀNG"}
            </span>
            <h2 id="tavi-auth-modal-title">TAVIWEB</h2>
            <p>
              {mode === "register"
                ? "Chọn mẫu giao diện, điền thông tin và nhận ngay Website hoạt động sau 3 giây"
                : "Hệ thống Quản trị Website, Bán hàng & Tự động hóa Doanh nghiệp"}
            </p>
          </div>
        </div>

        {/* Live Provisioning Screen (when buildStep > 0) */}
        {buildStep > 0 ? (
          <div className="py-6 px-2 text-center space-y-5">
            {buildStep < 4 ? (
              <>
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto shadow-sm">
                  <Loader2 className="w-8 h-8 animate-spin" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Đang khởi tạo Website "{businessName}"...
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Hệ thống đang lắp ráp giao diện mẫu <strong>{selectedIndustry?.name}</strong> cho bạn
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-3 text-xs font-semibold">
                  <div className="flex items-center gap-2.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>1. Khởi tạo tài khoản Quản trị & không gian dữ liệu</span>
                  </div>
                  <div
                    className={`flex items-center gap-2.5 ${
                      buildStep >= 2 ? "text-emerald-700" : "text-slate-400"
                    }`}
                  >
                    {buildStep >= 2 ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    ) : (
                      <Loader2 className="w-4 h-4 shrink-0 animate-spin text-indigo-500" />
                    )}
                    <span>
                      2. Áp dụng mẫu giao diện "{selectedIndustry?.name}" & đồng bộ thông tin
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-2.5 ${
                      buildStep >= 3 ? "text-emerald-700" : "text-slate-400"
                    }`}
                  >
                    {buildStep >= 3 ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    ) : (
                      <Loader2 className="w-4 h-4 shrink-0 animate-spin text-indigo-500" />
                    )}
                    <span>3. Kích hoạt gói Dùng thử miễn phí 7 ngày & xuất bản Website</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold mb-2">
                    🎉 KHỞI TẠO WEBSITE THÀNH CÔNG
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Website "{createdTenant?.name}" đã sẵn sàng!
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Đang tự động mở Website của bạn tại đường dẫn{" "}
                    <strong className="text-indigo-700 font-mono">
                      /{createdTenant?.slug}
                    </strong>
                    ...
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Thời hạn dùng thử miễn phí: 7 ngày.</strong> Sau 7 ngày nếu chưa đăng ký gói hoặc gia hạn, website sẽ tự động tạm ngưng hoạt động.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <a
                    href={`/${createdTenant?.slug}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md transition-all no-underline"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Xem Website ngay (/{createdTenant?.slug})</span>
                  </a>
                  <a
                    href="/admin"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-extrabold text-xs transition-all no-underline"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Vào Cổng Quản trị (/admin)</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Mode Tabs */}
            <div className="tavi-auth-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={mode === "login"}
                className={`tavi-auth-tab${mode === "login" ? " is-active" : ""}`}
                onClick={() => {
                  setMode("login");
                  setError("");
                }}
              >
                Đăng nhập Quản trị
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "register"}
                className={`tavi-auth-tab${mode === "register" ? " is-active" : ""}`}
                onClick={() => {
                  setMode("register");
                  setError("");
                }}
              >
                🚀 Tạo Website (Miễn phí 7 ngày)
              </button>
            </div>

            {/* Error Banner */}
            {error && (
              <div className="tavi-auth-error" role="alert">
                <span>{error}</span>
              </div>
            )}

            {/* Forms */}
            {mode === "login" ? (
              <form onSubmit={handleLogin} className="tavi-auth-form">
                <div className="tavi-auth-field">
                  <label htmlFor="tavi-login-email">Tài khoản / Email quản trị</label>
                  <div className="tavi-auth-input-wrap">
                    <User size={18} className="tavi-auth-input-icon" />
                    <input
                      id="tavi-login-email"
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Nhập email hoặc tên đăng nhập..."
                      autoComplete="username"
                    />
                  </div>
                </div>

                <div className="tavi-auth-field">
                  <label htmlFor="tavi-login-password">Mật khẩu</label>
                  <div className="tavi-auth-input-wrap">
                    <Lock size={18} className="tavi-auth-input-icon" />
                    <input
                      id="tavi-login-password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập mật khẩu của bạn..."
                      autoComplete="current-password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="tavi-auth-submit"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Đang đăng nhập...</span>
                    </>
                  ) : (
                    <>
                      <span>Đăng nhập vào Quản trị</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <div className="tavi-auth-switch">
                  <span>Bạn muốn tạo Website mới dùng thử 7 ngày?</span>{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode("register");
                      setError("");
                    }}
                  >
                    Khởi tạo Website ngay →
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="tavi-auth-form">
                {/* 7-day trial notice pill */}
                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Miễn phí 100% trong 7 ngày đầu:</strong> Website xuất hiện ngay sau khi đăng ký. Sau 7 ngày nếu không gia hạn hoặc đăng ký gói, website sẽ tự động tạm ngưng.
                  </div>
                </div>

                <div className="tavi-auth-field">
                  <label htmlFor="tavi-reg-template">
                    1. Chọn mẫu giao diện ngành nghề *
                  </label>
                  <div className="tavi-auth-input-wrap">
                    <LayoutTemplate size={18} className="tavi-auth-input-icon" />
                    <select
                      id="tavi-reg-template"
                      value={templateKey}
                      onChange={(e) => setTemplateKey(e.target.value)}
                    >
                      {industryCatalog.map((ind) => (
                        <option key={ind.key} value={ind.key}>
                          Mẫu Website {ind.name} — {ind.description}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="tavi-auth-field">
                  <label htmlFor="tavi-reg-business">
                    2. Tên Doanh nghiệp / Cửa hàng hiển thị trên Web *
                  </label>
                  <div className="tavi-auth-input-wrap">
                    <Building2 size={18} className="tavi-auth-input-icon" />
                    <input
                      id="tavi-reg-business"
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="VD: Thẩm Mỹ Viện Quốc Tế Aura"
                    />
                  </div>
                </div>

                <div className="tavi-auth-grid-2">
                  <div className="tavi-auth-field">
                    <label htmlFor="tavi-reg-phone">Hotline trên Website *</label>
                    <div className="tavi-auth-input-wrap">
                      <Phone size={18} className="tavi-auth-input-icon" />
                      <input
                        id="tavi-reg-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0901234567"
                      />
                    </div>
                  </div>

                  <div className="tavi-auth-field">
                    <label htmlFor="tavi-reg-address">Địa chỉ Doanh nghiệp</label>
                    <div className="tavi-auth-input-wrap">
                      <MapPin size={18} className="tavi-auth-input-icon" />
                      <input
                        id="tavi-reg-address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="VD: Quận 1, TP.HCM"
                      />
                    </div>
                  </div>
                </div>

                <div className="tavi-auth-field">
                  <label htmlFor="tavi-reg-tagline">
                    Slogan / Giới thiệu ngắn trên Trang chủ
                  </label>
                  <div className="tavi-auth-input-wrap">
                    <FileText size={18} className="tavi-auth-input-icon" />
                    <input
                      id="tavi-reg-tagline"
                      type="text"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      placeholder="VD: Uy tín hàng đầu - Dịch vụ tận tâm chuẩn 5 sao"
                    />
                  </div>
                </div>

                <div className="tavi-auth-grid-2">
                  <div className="tavi-auth-field">
                    <label htmlFor="tavi-reg-email">3. Email tài khoản *</label>
                    <div className="tavi-auth-input-wrap">
                      <Mail size={18} className="tavi-auth-input-icon" />
                      <input
                        id="tavi-reg-email"
                        type="email"
                        required
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="email@congty.vn"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="tavi-auth-field">
                    <label htmlFor="tavi-reg-password">Mật khẩu quản trị *</label>
                    <div className="tavi-auth-input-wrap">
                      <Lock size={18} className="tavi-auth-input-icon" />
                      <input
                        id="tavi-reg-password"
                        type="password"
                        required
                        minLength={6}
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        placeholder="Tối thiểu 6 ký tự"
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="tavi-auth-submit"
                >
                  <Sparkles size={18} />
                  <span>Tạo Website Ngay (Dùng thử 7 ngày)</span>
                </button>

                <div className="tavi-auth-switch">
                  <span>Đã có tài khoản TAVIWEB?</span>{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setError("");
                    }}
                  >
                    Đăng nhập tại đây →
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
