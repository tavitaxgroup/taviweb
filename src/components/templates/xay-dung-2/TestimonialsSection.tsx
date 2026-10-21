"use client";

import React, { useState } from "react";
import { TestimonialItem } from "./types";
import { Quote } from "lucide-react";

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Default to Lesley Grand (index 2) matching screenshot
  const current = testimonials[activeIndex] || testimonials[0];

  return (
    <section className="py-20 lg:py-28 bg-white text-zinc-900">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-zinc-900 leading-tight">
            They love us.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Author Names List (Vertical selector as in original) */}
          <div className="lg:col-span-3 flex lg:flex-col flex-wrap gap-4 text-left">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`text-[14px] text-left transition-colors font-medium ${
                  activeIndex === index
                    ? "text-zinc-900 font-bold underline underline-offset-4"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                {item.author}
              </button>
            ))}
          </div>

          {/* Right: Big White Testimonial Card */}
          <div className="lg:col-span-9 bg-white border border-zinc-200 p-8 sm:p-14 shadow-lg text-center">
            <div className="inline-flex mb-6 text-zinc-800">
              <Quote size={28} />
            </div>

            <blockquote className="text-[15px] sm:text-[17px] font-light text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-6">
              {current.content}
            </blockquote>

            <h4 className="text-[16px] font-bold text-zinc-900">
              {current.author}
            </h4>
          </div>

        </div>

      </div>
    </section>
  );
}
