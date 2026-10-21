"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/template-sources/xay_dung_2/types/demo";

interface ProjectsGalleryProps {
  projects: ProjectItem[];
}

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(9);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white text-zinc-900">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10">
          <div className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2">
            DỰ ÁN TIÊU BIỂU
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-zinc-900 leading-tight">
            Dấu ấn kiến trúc trường tồn.
          </h2>
        </div>

        {/* 3x3 Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {projects.slice(0, visibleCount).map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-zinc-100 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Title & Location */}
              <div>
                <h4 className="text-[16px] font-bold text-zinc-900 mb-1 group-hover:text-zinc-600 transition-colors">
                  {project.title}
                </h4>
                <div className="text-[12px] text-zinc-400 tracking-wider">
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + 3, projects.length))}
            className="group inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] uppercase text-zinc-800 border-b border-zinc-800 pb-1 hover:text-black hover:border-black transition-all"
          >
            <span className="w-5 h-[1px] bg-zinc-800 group-hover:w-8 transition-all" />
            <span>XEM THÊM DỰ ÁN</span>
          </button>
        </div>

      </div>
    </section>
  );
}
