'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  PhoneCall,
  Search,
  Waves,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Activity,
  Droplets,
  Menu,
  X,
  Users,
  Sparkles
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import { mockData as defaultMockData } from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, any>;
  templateId?: string;
}

export function DemoTemplateRenderer({ data, templateId = 'phong_gym_18' }: DemoTemplateRendererProps) {
  const content = adaptClonedTemplateData(defaultMockData, data, templateId);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive State for GYM018 Signature Multi-Section Registration & Assessment Form
  const [unitName, setUnitName] = useState('Gia đình Anh Minh (2 Người lớn + 1 Bé)');
  const [memberName, setMemberName] = useState('Nguyễn Hoàng Minh');
  const [email, setEmail] = useState('hoangminh.nguyen@gmail.com');
  const [phone, setPhone] = useState('0909 388 612');
  const [selectedServiceId, setSelectedServiceId] = useState('olympic-swim');
  const [currentLevel, setCurrentLevel] = useState('Chưa biết bơi / Muốn rèn sức bền tim mạch & giảm mỡ');
  const [targetGoal, setTargetGoal] = useState('Bơi sải 500m liên tục + Giảm 5kg mỡ trong 8 tuần');
  const [preferredSlot, setPreferredSlot] = useState('Ca sáng (06:00 - 07:30) hoặc Ca tối (18:00 - 19:30)');
  const [submitted, setSubmitted] = useState(false);

  const activeService =
    content.registrationSection.servicePills.find((s: any) => s.id === selectedServiceId) ||
    content.registrationSection.servicePills[0];

  return (
    <div id="top" className="min-h-screen bg-[#f5f7fa] text-slate-900 font-sans selection:bg-[#0d3b8c] selection:text-white">
      {/* 1. Top Royal Blue Utility Strip (Exact Match to GYM018 Top Bar) */}
      <div className="bg-[#0d3b8c] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold tracking-wider uppercase text-sky-200">
              GOLD MARINE AQUATIC & FITNESS CLUB
            </span>
            <span className="hidden md:inline text-white/75">
              | Hệ thống Hồ Bơi Muối Khoáng 50m & Thể Hình Chuẩn Quốc Tế
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-white/15 rounded px-2.5 py-1 border border-white/20">
              <input
                type="text"
                placeholder="Tìm khóa bơi, PT..."
                className="bg-transparent text-white placeholder:text-white/70 text-[11px] focus:outline-none w-32"
              />
              <Search className="w-3.5 h-3.5 text-white/80" />
            </div>
            <span className="px-2 py-0.5 rounded bg-sky-500 text-white text-[10px] font-black uppercase">
              VN / EN
            </span>
          </div>
        </div>
      </div>

      {/* 2. Light Gray Corporate Info Header (Matching GMA Logo + Address + Opening Hours + Call Us) */}
      <div className="bg-[#e9ecef] border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Left: GMA / GOLD MARINE CLUB Wave Logo */}
          <div className="lg:col-span-4 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0d3b8c] to-[#0284c7] flex items-center justify-center text-white shadow-md">
                <Waves className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black tracking-tight text-[#0d3b8c] leading-none">
                    {content.business.code}
                  </span>
                  <span className="text-sm font-black tracking-wider uppercase text-slate-800">
                    {content.business.name}
                  </span>
                </div>
                <span className="block text-[10px] font-bold tracking-[0.18em] text-[#0284c7] uppercase mt-1">
                  {content.business.subtitle}
                </span>
              </div>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white text-[#0d3b8c] border border-slate-300"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Center-Left: Location */}
          <div className="hidden lg:flex lg:col-span-3 items-center gap-2.5 text-xs text-slate-700">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0d3b8c] shadow-sm shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="leading-snug">
              <span className="block font-extrabold uppercase text-[#0d3b8c] text-[10px]">
                CƠ SỞ TRUNG TÂM
              </span>
              <span className="line-clamp-2 font-medium">{content.business.address}</span>
            </div>
          </div>

          {/* Center-Right: Opening Hours */}
          <div className="hidden lg:flex lg:col-span-2 items-center gap-2.5 text-xs text-slate-700">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0d3b8c] shadow-sm shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-extrabold uppercase text-[#0d3b8c] text-[10px]">
                GIỜ MỞ CỬA
              </span>
              <span className="font-bold">{content.business.hours}</span>
            </div>
          </div>

          {/* Right: Call Us */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-end gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#0d3b8c] flex items-center justify-center text-white shadow-sm shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-extrabold uppercase text-slate-500 text-[10px]">
                HOTLINE ĐẶT LỊCH BƠI & GYM
              </span>
              <a
                href={`tel:${content.business.phone[0]}`}
                className="text-base font-black text-[#0d3b8c] hover:underline"
              >
                {content.business.phone[0]}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Clean White Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 hidden lg:flex items-center justify-center gap-10">
          {content.navigation.map((item: any, idx: number) => (
            <a
              key={idx}
              href={item.href}
              className="text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-[#0d3b8c] transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1.5">
            {content.navigation.map((item: any, idx: number) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded text-xs font-extrabold uppercase text-slate-800 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 4. FULL-WIDTH AQUATIC & MARINE SPORTS HERO BANNER */}
      <section className="relative overflow-hidden bg-[#0a2351] text-white">
        <img
          src={content.hero.backgroundImage}
          alt="Hồ bơi Olympic và Trung tâm thể hình Gold Marine Club"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2351]/75 via-[#0d3b8c]/65 to-[#0a2351]/90" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center space-y-5">
          {/* Purple & Pink Achievement Ribbons from GYM018 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="px-4 py-1.5 rounded-xl bg-[#7b12d1] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
              {content.hero.purpleRibbon}
            </span>
            <span className="px-4 py-1.5 rounded-xl bg-[#f51b7a] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
              {content.hero.pinkRibbon}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white drop-shadow-md">
            {content.hero.englishTitle}
          </h1>

          <p className="text-base sm:text-xl font-extrabold uppercase tracking-wide text-sky-200 max-w-4xl mx-auto">
            {content.hero.vietnameseTitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto">
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 5. SIGNATURE MULTI-SECTION REGISTRATION & ASSESSMENT FORM CARD (Exact Match to GYM018 Centerpiece) */}
      <section id="registration-form" className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Blue Greeting Sentences at Top of Form */}
          <div className="mb-6 space-y-1 text-[#0d3b8c]">
            <p className="text-sm sm:text-base font-bold">{content.registrationSection.greetingLine1}</p>
            <p className="text-xs sm:text-sm font-semibold text-[#1e40af] leading-relaxed">
              {content.registrationSection.greetingLine2}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            {/* BOX 1: Contact Information (4 Horizontal Label + Input Rows) */}
            <div className="border border-slate-300 rounded-xl p-5 sm:p-7 bg-white shadow-sm">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-5 pb-2 border-b border-slate-200">
                Thông Tin Liên Hệ Hội Viên (Contact Information)
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-2 sm:gap-4">
                  <label className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-700 sm:text-right">
                    Đơn vị / Gia đình:
                  </label>
                  <div className="sm:col-span-8">
                    <input
                      type="text"
                      value={unitName}
                      onChange={(e) => setUnitName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded border border-slate-300 text-sm text-slate-900 focus:border-[#0d3b8c] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-2 sm:gap-4">
                  <label className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-700 sm:text-right">
                    Họ và tên học viên: <span className="text-red-500">*</span>
                  </label>
                  <div className="sm:col-span-8">
                    <input
                      type="text"
                      required
                      value={memberName}
                      onChange={(e) => setMemberName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded border border-slate-300 text-sm text-slate-900 focus:border-[#0d3b8c] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-2 sm:gap-4">
                  <label className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-700 sm:text-right">
                    Địa chỉ Email: <span className="text-red-500">*</span>
                  </label>
                  <div className="sm:col-span-8">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded border border-slate-300 text-sm text-slate-900 focus:border-[#0d3b8c] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-2 sm:gap-4">
                  <label className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-700 sm:text-right">
                    Số điện thoại liên hệ: <span className="text-red-500">*</span>
                  </label>
                  <div className="sm:col-span-8">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded border border-slate-300 text-sm text-slate-900 focus:border-[#0d3b8c] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* BOX 2: Select a Service — 4 Royal Blue Pill Radio Buttons (Exact Visual Match to GYM018 Middle Box) */}
            <div className="border border-slate-300 rounded-xl p-5 sm:p-7 bg-white shadow-sm">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-5 pb-2 border-b border-slate-200">
                Chọn Bộ Môn Huấn Luyện (Select a Service)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {content.registrationSection.servicePills.map((pill: any) => {
                  const isSelected = selectedServiceId === pill.id;
                  return (
                    <button
                      key={pill.id}
                      type="button"
                      onClick={() => setSelectedServiceId(pill.id)}
                      className={`rounded-full px-4 py-3 flex items-center justify-between gap-2 text-left transition shadow-sm ${
                        isSelected
                          ? 'bg-[#142d6f] text-white ring-2 ring-offset-2 ring-[#0284c7]'
                          : 'bg-[#142d6f]/90 hover:bg-[#142d6f] text-white/90'
                      }`}
                    >
                      <span className="text-[11px] font-black uppercase tracking-wider truncate">
                        {pill.code}
                      </span>
                      <span
                        className={`w-4 h-4 rounded-sm flex items-center justify-center border ${
                          isSelected ? 'bg-sky-400 border-white text-[#142d6f]' : 'bg-white border-slate-300'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#142d6f]" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Service Explanation Banner */}
              <div className="mt-5 rounded-lg bg-sky-50 border border-sky-200 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-black text-[#0d3b8c] uppercase">
                    Đã chọn: {activeService.title}
                  </span>
                  <p className="text-xs text-slate-600 mt-0.5">{activeService.schedule}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0d3b8c] text-white text-[10px] font-bold uppercase shrink-0 self-start sm:self-center">
                  Tặng 01 Buổi Test Nước & InBody
                </span>
              </div>
            </div>

            {/* BOX 3: Training Progression (From Current Level -> To Target Goal) */}
            <div className="border border-slate-300 rounded-xl p-5 sm:p-7 bg-white shadow-sm space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-2 sm:gap-4">
                <label className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-700 sm:text-right">
                  Trình độ hiện tại (From): <span className="text-red-500">*</span>
                </label>
                <div className="sm:col-span-8">
                  <input
                    type="text"
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(e.target.value)}
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-sm text-slate-900 focus:border-[#0d3b8c] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-2 sm:gap-4">
                <label className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-700 sm:text-right">
                  Mục tiêu mong muốn (To): <span className="text-red-500">*</span>
                </label>
                <div className="sm:col-span-8">
                  <input
                    type="text"
                    value={targetGoal}
                    onChange={(e) => setTargetGoal(e.target.value)}
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-sm text-slate-900 focus:border-[#0d3b8c] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-2 sm:gap-4">
                <label className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-700 sm:text-right">
                  Khung giờ tập ưu tiên:
                </label>
                <div className="sm:col-span-8">
                  <input
                    type="text"
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-sm text-slate-900 focus:border-[#0d3b8c] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-end gap-4">
                {submitted && (
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Đã gửi phiếu đăng ký cho {memberName}! HLV sẽ liên hệ trong 15 phút.
                  </span>
                )}
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#142d6f] hover:bg-[#0d3b8c] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md transition inline-flex items-center gap-2"
                >
                  <span>GỬI PHIẾU ĐĂNG KÝ & NHẬN LỊCH TẬP THỬ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* 6. OLYMPIC AQUATIC & FITNESS PROGRAMS */}
      <section id="programs" className="py-16 sm:py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0d3b8c]/10 text-[#0d3b8c] text-xs font-black uppercase tracking-widest">
              <Droplets className="w-3.5 h-3.5" />
              GOLD MARINE AQUATIC & GYM PROGRAMS
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase text-slate-900">
              Các Khóa Học Bơi Olympic, Thủy Trị Liệu & Thể Hình
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {content.aquaticPrograms.map((prog: any) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 relative min-h-[220px]">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#142d6f] text-white text-[10px] font-black uppercase tracking-wider">
                    {prog.badge}
                  </span>
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#0284c7]">{prog.duration}</div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{prog.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{prog.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-lg font-black text-[#0d3b8c]">{prog.price}</span>
                    <a
                      href="#registration-form"
                      className="px-4 py-2 rounded-full bg-[#142d6f] hover:bg-[#0284c7] text-white text-xs font-bold uppercase transition"
                    >
                      Đăng Ký Học
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERNATIONAL AQUATIC & GYM INFRASTRUCTURE METRICS */}
      <section id="facilities" className="py-16 bg-[#0d3b8c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.facilities.map((item: any, idx: number) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15 space-y-2"
              >
                <div className="text-3xl sm:text-4xl font-black text-sky-300">{item.metric}</div>
                <h3 className="text-base font-black text-white">{item.title}</h3>
                <p className="text-xs text-sky-100/85 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer id="contact" className="bg-[#081d47] text-slate-300 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <Waves className="w-6 h-6 text-sky-400" />
              <span className="text-xl font-black text-white">
                {content.business.code} — {content.business.name}
              </span>
            </div>
            <p className="text-xs text-slate-400">{content.business.address}</p>
            <p className="text-xs text-slate-400">{content.business.copyright}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#registration-form"
              className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-black uppercase tracking-wider transition"
            >
              Đăng Ký Test Nước & InBody
            </a>
            <a
              href={`tel:${content.business.phone[0]}`}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition"
            >
              Hotline: {content.business.phone[0]}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
