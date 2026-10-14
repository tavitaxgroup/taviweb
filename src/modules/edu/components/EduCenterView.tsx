"use client";

import React, { useState } from 'react';
import CourseManagement from './CourseManagement';
import ClassManagement from './ClassManagement';
import EnrollmentManagement from './EnrollmentManagement';
import EduDashboard from './EduDashboard';
import { LayoutDashboard, BookOpen, Users, Wallet } from 'lucide-react';

export default function EduCenterView() {
  const [viewMode, setViewMode] = useState<'dashboard' | 'courses' | 'classes' | 'enrollments'>('dashboard');

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[50%] rounded-full bg-purple-200/40 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* Top Navigation */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-white/40 px-6 py-4 flex gap-4 items-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative z-50">
        <div className="flex items-center bg-white/50 backdrop-blur-md p-1.5 rounded-xl border border-white/60 shadow-sm">
          <button
            onClick={() => setViewMode('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
              viewMode === 'dashboard' ? 'bg-white shadow-md text-indigo-700 scale-105' : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" /> Tổng quan
          </button>
          <div className="h-4 w-px bg-slate-300 mx-1"></div>
          <button
            onClick={() => setViewMode('courses')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
              viewMode === 'courses' ? 'bg-white shadow-md text-indigo-700 scale-105' : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Khóa học
          </button>
          <button
            onClick={() => setViewMode('classes')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
              viewMode === 'classes' ? 'bg-white shadow-md text-indigo-700 scale-105' : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60'
            }`}
          >
            <Users className="w-4 h-4" /> Lớp học
          </button>
          <button
            onClick={() => setViewMode('enrollments')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
              viewMode === 'enrollments' ? 'bg-white shadow-md text-indigo-700 scale-105' : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60'
            }`}
          >
            <Wallet className="w-4 h-4" /> Học viên & Học phí
          </button>
        </div>
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
