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
  LayoutTemplate,
  ArrowRight,
  Loader2,
  Sparkles,
  Globe,
} from "lucide-react";

interface TaviAuthModalProps {
  isOpen: boolean;
  initialMode?: "login" | "register";
  onClose: () => void;
}

export function TaviAuthModal({
  isOpen,
  initialMode = "login",
  onClose,
}: TaviAuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(initialMode);

  // Login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register states
  const [businessName, setBusinessName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [templateKey, setTemplateKey] = useState("noi_that");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setError("");
    }
  }, [isOpen, initialMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          name: fullName || businessName,
          phone,
          email: regEmail,
          password: regPassword,
          templateKey,
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        window.location.href = "/admin";
      } else {
        setError(data.error || "Đăng ký không thành công. Vui lòng kiểm tra lại.");
      }
    } catch (err) {
      setError("Không thể kết nối đến máy chủ. Vui lòng thử lại.");
    } finally {
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
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="tavi-auth-modal">
        {/* Close button */}
        <button
          type="button"
          className="tavi-auth-close"
          onClick={onClose}
          aria-label="Đóng khung đăng nhập"
        >
          <X size={20} />
        </button>

        {/* Modal Brand Header */}
        <div className="tavi-auth-header">
          <div className="tavi-auth-logo-badge">
            <Globe size={24} />
          </div>
          <div>
            <span className="tavi-auth-eyebrow">CỔNG QUẢN TRỊ KHÁCH HÀNG</span>
            <h2 id="tavi-auth-modal-title">TAVIWEB</h2>
            <p>Hệ thống Quản trị Website, Bán hàng & Tự động hóa Doanh nghiệp</p>
          </div>
        </div>

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
            Đăng nhập
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
            Đăng ký khởi tạo Web
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
              <span>Bạn chưa có tài khoản quản trị Website?</span>{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setError("");
                }}
              >
                Đăng ký ngay →
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="tavi-auth-form">
            <div className="tavi-auth-field">
              <label htmlFor="tavi-reg-business">Tên Doanh nghiệp / Cửa hàng *</label>
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
                <label htmlFor="tavi-reg-name">Họ và tên</label>
                <div className="tavi-auth-input-wrap">
                  <User size={18} className="tavi-auth-input-icon" />
                  <input
                    id="tavi-reg-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                  />
                </div>
              </div>

              <div className="tavi-auth-field">
                <label htmlFor="tavi-reg-phone">Số điện thoại *</label>
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
            </div>

            <div className="tavi-auth-grid-2">
              <div className="tavi-auth-field">
                <label htmlFor="tavi-reg-email">Email đăng nhập *</label>
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
                <label htmlFor="tavi-reg-password">Mật khẩu *</label>
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

            <div className="tavi-auth-field">
              <label htmlFor="tavi-reg-template">Chọn ngành nghề mẫu giao diện</label>
              <div className="tavi-auth-input-wrap">
                <LayoutTemplate size={18} className="tavi-auth-input-icon" />
                <select
                  id="tavi-reg-template"
                  value={templateKey}
                  onChange={(e) => setTemplateKey(e.target.value)}
                >
                  {industryCatalog.map((ind) => (
                    <option key={ind.key} value={ind.key}>
                      {ind.name}
                    </option>
                  ))}
                </select>
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
                  <span>Đang khởi tạo Website...</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>Khởi tạo Website & Vào Quản trị</span>
                </>
              )}
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
      </div>
    </div>
  );
}
