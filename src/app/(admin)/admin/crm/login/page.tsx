"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import { industryCatalog } from '@/lib/templates/templateCatalog';
import {
  Lock,
  User,
  ArrowRight,
  Loader2,
  Globe,
  Building2,
  Phone,
  Mail,
  LayoutTemplate,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // Login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register states
  const [businessName, setBusinessName] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [templateKey, setTemplateKey] = useState('noi_that');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        login(data.user);
      } else {
        setError(data.error || 'Tài khoản hoặc mật khẩu không chính xác');
      }
    } catch (err) {
      setError('Không thể kết nối đến máy chủ');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        login(data.user);
      } else {
        setError(data.error || 'Không thể đăng ký tài khoản. Vui lòng kiểm tra lại.');
      }
    } catch (err) {
      setError('Không thể kết nối đến máy chủ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#07090e] relative overflow-hidden font-sans selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-600/15 blur-[120px] mix-blend-screen animate-pulse duration-10000" />
        <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-purple-600/15 blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Top Back to Home Link */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold backdrop-blur-md transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về trang chủ TAVIWEB</span>
        </Link>
      </div>

      <div className="w-full max-w-[460px] m-auto px-6 py-12 relative z-10 flex flex-col justify-center">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-500 p-[1px] shadow-[0_0_40px_rgba(99,102,241,0.4)] mb-4">
            <div className="w-full h-full bg-[#0c101a] rounded-[15px] flex items-center justify-center">
              <Globe className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            TAVIWEB
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Hệ thống Quản trị Website & Kinh doanh Doanh nghiệp
          </p>
        </div>

        {/* Login / Register Card */}
        <div className="bg-[#111624]/85 backdrop-blur-xl rounded-3xl p-7 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/[0.08] relative group">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-80" />

          {/* Mode Switch Tabs */}
          <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-[#0a0d16] rounded-2xl border border-slate-800/80 mb-6">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
              }}
              className={`py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Đăng nhập
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setError('');
              }}
              className={`py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                mode === 'register'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Đăng ký tạo Web
            </button>
          </div>

          {error && (
            <div className="mb-5 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm p-3.5 rounded-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0 animate-ping" />
              <p className="font-medium">{error}</p>
            </div>
          )}

          {mode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1">
                  Tài khoản / Email quản trị
                </label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all text-white placeholder-slate-600 font-medium text-sm"
                    placeholder="Nhập email hoặc tên đăng nhập..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Mật khẩu
                  </label>
                </div>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all text-white placeholder-slate-600 font-medium text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>Đăng nhập Quản trị</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1.5">
                  Tên Doanh nghiệp / Cửa hàng *
                </label>
                <div className="relative">
                  <Building2 className="h-4 w-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                    placeholder="VD: Nha Khoa Quốc Tế Sài Gòn"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1.5">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <User className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1.5">
                    Số điện thoại *
                  </label>
                  <div className="relative">
                    <Phone className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                      placeholder="0901234567"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1.5">
                  Email đăng nhập *
                </label>
                <div className="relative">
                  <Mail className="h-4 w-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                    placeholder="email@congty.vn"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1.5">
                  Mật khẩu (tối thiểu 6 ký tự) *
                </label>
                <div className="relative">
                  <Lock className="h-4 w-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1.5">
                  Ngành nghề mẫu giao diện
                </label>
                <div className="relative">
                  <LayoutTemplate className="h-4 w-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={templateKey}
                    onChange={(e) => setTemplateKey(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white text-sm"
                  >
                    {industryCatalog.map((ind) => (
                      <option key={ind.key} value={ind.key} className="bg-slate-900 text-white">
                        {ind.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Khởi tạo Website & Vào Quản trị</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Footer Info */}
        <p className="text-center text-xs text-slate-500 mt-6">
          © {new Date().getFullYear()} TAVIWEB — Hệ sinh thái Website, Bán hàng & Tự động hóa AI
        </p>
      </div>
    </div>
  );
}
