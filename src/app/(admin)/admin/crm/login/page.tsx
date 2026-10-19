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
  MapPin,
  FileText,
  LayoutTemplate,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Clock,
  Settings,
} from 'lucide-react';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // Login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register & Website Builder states
  const [templateKey, setTemplateKey] = useState('noi_that');
  const [businessName, setBusinessName] = useState('');
  const [tagline, setTagline] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  // Live provisioning step
  const [buildStep, setBuildStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [createdTenant, setCreatedTenant] = useState<{
    name: string;
    slug: string;
    template_key: string;
  } | null>(null);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const selectedIndustry =
    industryCatalog.find((i) => i.key === templateKey) || industryCatalog[0];

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
    setBuildStep(1);

    try {
      const stepTimer1 = setTimeout(() => setBuildStep(2), 900);
      const stepTimer2 = setTimeout(() => setBuildStep(3), 1850);

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        setError(data.error || 'Không thể đăng ký tài khoản. Vui lòng kiểm tra lại.');
        setLoading(false);
        return;
      }

      setTimeout(() => {
        const tenantInfo = data.user?.tenant || {
          name: businessName,
          slug: 'website',
          template_key: templateKey,
        };
        setCreatedTenant(tenantInfo);
        setBuildStep(4);
        setLoading(false);

        setTimeout(() => {
          window.location.href = `/${tenantInfo.slug}`;
        }, 1800);
      }, 2600);
    } catch (err) {
      setBuildStep(0);
      setError('Không thể kết nối đến máy chủ');
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

      <div className="w-full max-w-[490px] m-auto px-6 py-12 relative z-10 flex flex-col justify-center">
        {/* Brand Header */}
        <div className="text-center mb-7">
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

          {buildStep > 0 ? (
            <div className="py-4 text-center space-y-5">
              {buildStep < 4 ? (
                <>
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto">
                    <Loader2 className="w-8 h-8 animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      Đang khởi tạo Website &quot;{businessName}&quot;...
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Hệ thống đang lắp ráp giao diện mẫu <strong className="text-indigo-300">{selectedIndustry?.name}</strong>
                    </p>
                  </div>

                  <div className="bg-[#0a0d16] border border-slate-800 rounded-2xl p-4 text-left space-y-3 text-xs font-semibold">
                    <div className="flex items-center gap-2.5 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>1. Khởi tạo tài khoản Quản trị & không gian dữ liệu</span>
                    </div>
                    <div className={`flex items-center gap-2.5 ${buildStep >= 2 ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {buildStep >= 2 ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                      ) : (
                        <Loader2 className="w-4 h-4 shrink-0 animate-spin text-indigo-400" />
                      )}
                      <span>2. Áp dụng mẫu giao diện &quot;{selectedIndustry?.name}&quot; & thông tin doanh nghiệp</span>
                    </div>
                    <div className={`flex items-center gap-2.5 ${buildStep >= 3 ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {buildStep >= 3 ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                      ) : (
                        <Loader2 className="w-4 h-4 shrink-0 animate-spin text-indigo-400" />
                      )}
                      <span>3. Kích hoạt gói Dùng thử miễn phí 7 ngày & xuất bản Website</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-extrabold mb-2">
                      🎉 KHỞI TẠO WEBSITE THÀNH CÔNG
                    </span>
                    <h3 className="text-xl font-extrabold text-white">
                      Website &quot;{createdTenant?.name}&quot; đã sẵn sàng!
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Đang tự động mở Website của bạn tại{' '}
                      <strong className="text-indigo-400 font-mono">/{createdTenant?.slug}</strong>...
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs text-left flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong>Thời hạn dùng thử miễn phí: 7 ngày.</strong> Sau 7 ngày nếu chưa đăng ký gói hoặc gia hạn, website sẽ tự động tạm ngưng hoạt động.
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <a
                      href={`/${createdTenant?.slug}`}
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-md transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Xem Website (/{createdTenant?.slug})</span>
                    </a>
                    <a
                      href="/admin"
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-extrabold text-xs transition-all"
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
                  Đăng nhập Quản trị
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
                  🚀 Tạo Web (Free 7 ngày)
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
                <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 text-xs flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong>Miễn phí 7 ngày đầu:</strong> Website xuất hiện ngay sau khi đăng ký. Sau 7 ngày nếu không gia hạn hoặc đăng ký gói, website sẽ tạm ngưng.
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1">
                      1. Chọn mẫu giao diện ngành nghề *
                    </label>
                    <div className="relative">
                      <LayoutTemplate className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={templateKey}
                        onChange={(e) => setTemplateKey(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white text-sm"
                      >
                        {industryCatalog.map((ind) => (
                          <option key={ind.key} value={ind.key} className="bg-slate-900 text-white">
                            Mẫu Website {ind.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1">
                      2. Tên Doanh nghiệp / Cửa hàng *
                    </label>
                    <div className="relative">
                      <Building2 className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                        placeholder="VD: Nha Khoa Quốc Tế Sài Gòn"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1">
                        Hotline trên Web *
                      </label>
                      <div className="relative">
                        <Phone className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-3 py-2.5 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                          placeholder="0901234567"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1">
                        Địa chỉ hiển thị
                      </label>
                      <div className="relative">
                        <MapPin className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full pl-10 pr-3 py-2.5 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                          placeholder="Quận 1, TP.HCM"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1">
                      Slogan / Giới thiệu ngắn trên Trang chủ
                    </label>
                    <div className="relative">
                      <FileText className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                        placeholder="VD: Uy tín hàng đầu - Dịch vụ tận tâm chuẩn 5 sao"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1">
                        3. Email đăng nhập *
                      </label>
                      <div className="relative">
                        <Mail className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          className="w-full pl-10 pr-3 py-2.5 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                          placeholder="email@congty.vn"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block ml-1 mb-1">
                        Mật khẩu *
                      </label>
                      <div className="relative">
                        <Lock className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          required
                          minLength={6}
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          className="w-full pl-10 pr-3 py-2.5 bg-[#0a0d16]/90 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none text-white placeholder-slate-600 text-sm"
                          placeholder="Tối thiểu 6 ký tự"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Tạo Website Ngay (Dùng thử 7 ngày)</span>
                  </button>
                </form>
              )}
            </>
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
