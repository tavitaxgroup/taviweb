"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSectionProps {
  badge: string;
  title: string;
  description?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSection({
  badge,
  title,
  beforeLabel = "BẢN VẼ",
  afterLabel = "THỰC TẾ",
  beforeImage,
  afterImage,
}: BeforeAfterSectionProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(980);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleInteractionEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleInteractionEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  const onContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-24 lg:py-32 bg-[#54595f] text-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        
        {/* Header matching original: BEST WORKS & Drag the Slider... */}
        <div className="text-center max-w-[840px] mx-auto mb-16 bim-reveal">
          <div className="bim-font-poppins text-xs font-semibold tracking-[3px] text-[#b19777] uppercase mb-2">
            {badge || "BEST WORKS"}
          </div>
          <h2 className="bim-font-playfair text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-tight">
            {title || "Drag the Slider to See the Transformation One of the Interior"}
          </h2>
        </div>

        {/* Twentytwenty Interactive Comparison Slider with Scroll Reveal Scale */}
        <div className="relative max-w-[980px] mx-auto bim-reveal-scale">
          <div
            ref={containerRef}
            onClick={onContainerClick}
            className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] overflow-hidden cursor-ew-resize select-none shadow-2xl border border-white/20 bg-black/40"
          >
            {/* After Image (Background: Full Width) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={afterImage || "/templates/xay-dung-3/after.jpg"}
                alt={afterLabel}
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* After Label Badge */}
              <div className="absolute bottom-6 right-6 px-4 py-1.5 bg-black/60 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-widest pointer-events-none z-10">
                {afterLabel}
              </div>
            </div>

            {/* Before Image (Foreground: Clipped Width via containerWidth) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative h-full"
                style={{ width: `${containerWidth}px`, minWidth: `${containerWidth}px` }}
              >
                <img
                  src={beforeImage || "/templates/xay-dung-3/before.jpg"}
                  alt={beforeLabel}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              {/* Before Label Badge */}
              <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-widest pointer-events-none z-10">
                {beforeLabel}
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div
              className="bim-twentytwenty-line pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            />

            {/* Center Handle Button with Left/Right Arrows */}
            <div
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="bim-twentytwenty-handle"
              style={{ left: `${sliderPosition}%` }}
              aria-label="Drag slider"
            >
              <div className="flex items-center text-white">
                <ChevronLeft size={16} className="-mr-1 text-white" />
                <ChevronRight size={16} className="-ml-1 text-white" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
