"use client";

import React, { useState } from 'react';
import CourseManagement from './CourseManagement';
import ClassManagement from './ClassManagement';
import EnrollmentManagement from './EnrollmentManagement';
import EduDashboard from './EduDashboard';
import { LayoutDashboard, BookOpen, Users, Wallet, Video } from 'lucide-react';
import Link from 'next/link';

export default function EduCenterView() {
  const [viewMode, setViewMode] = useState<'dashboard' | 'courses' | 'classes' | 'enrollments'>('dashboard');

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-50 font-sans relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[50%] rounded-full bg-purple-200/40 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* Top Navigation */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/70 px-6 py-3.5 flex flex-wrap gap-4 items-center justify-between shadow-sm relative z-50 shrink-0">
        <div className="flex items-center bg-slate-100/80 backdrop-blur-md p-1 rounded-xl border border-slate-200/60">
          <button
            onClick={() => setViewMode('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              viewMode === 'dashboard' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" /> Tổng quan
          </button>
          <div className="h-4 w-px bg-slate-300 mx-1"></div>
          <button
            onClick={() => setViewMode('courses')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              viewMode === 'courses' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Hệ đào tạo / Môn học
          </button>
          <button
            onClick={() => setViewMode('classes')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              viewMode === 'classes' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60'
            }`}
          >
            <Users className="w-4 h-4" /> Lớp học & Điểm danh
          </button>
          <button
            onClick={() => setViewMode('enrollments')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              viewMode === 'enrollments' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60'
            }`}
          >
            <Wallet className="w-4 h-4" /> Học viên & Học phí
          </button>
        </div>

        <Link
          href="/admin/lms"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 transition-colors"
        >
          <Video className="w-4 h-4" />
          Khóa học Video Online (LMS) →
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative flex bg-slate-50">
        <div className="flex-1 overflow-hidden flex flex-col pt-6 pb-6 transition-all duration-300 z-10 w-full">
          {viewMode === 'dashboard' ? (
            <EduDashboard onChangeView={setViewMode} />
          ) : viewMode === 'courses' ? (
            <CourseManagement />
          ) : viewMode === 'classes' ? (
            <ClassManagement />
          ) : (
            <EnrollmentManagement />
          )}
        </div>
      </div>
    </div>
  );
}
