"use client";

import React from "react";
import { motion } from "motion/react";
import { GalleryItem } from "../../../types/demo";

interface GalleryProps {
  gallery: GalleryItem[];
}

export default function GallerySection({ gallery }: GalleryProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="py-24 bg-[#f6f3ee] overflow-hidden border-t border-b border-[#dec0bd]/25" 
      id="gallery-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Brand Text & Callouts */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-[#7c580f] font-semibold text-xs md:text-sm tracking-widest uppercase mb-4 block">
              Nghệ Thuật Bày Trí
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1c1c19] mb-8 leading-tight">
              Mỗi món ăn là một bản giao hưởng màu sắc
            </h2>
            
            <div className="font-sans text-sm md:text-base text-[#574240] mb-10 italic border-l-2 border-[#7c580f] pl-6 leading-relaxed">
              "Chúng tôi không chỉ phục vụ thức ăn, chúng tôi kể những câu chuyện về mùa vụ, về đất đai và về bàn tay khéo léo của người nông dân qua ngôn ngữ của ẩm thực hiện đại."
            </div>

            <button 
              onClick={() => handleScrollTo("services-section")}
              className="border-b-2 border-[#5f030a] text-[#5f030a] hover:text-[#7c580f] hover:border-[#7c580f] font-semibold text-xs md:text-sm uppercase pb-1 tracking-widest transition-colors cursor-pointer"
              id="gallery-explore-btn"
            >
              Khám phá thực đơn
            </button>
          </div>

          {/* Right Side: Masonry Polaroid Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col sm:flex-row gap-6">
            
            {gallery[0] && (
              <div className="w-full sm:w-1/2 mt-0 sm:mt-12">
                <motion.div 
                  initial={{ opacity: 0, rotate: -2, y: 20 }}
                  whileInView={{ opacity: 1, rotate: 2, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="aspect-[4/5] overflow-hidden border border-[#dec0bd]/30 p-3 bg-white shadow-lg transition-transform hover:rotate-0 duration-500"
                  id="gallery-item-0"
                >
                  <img
                    alt={gallery[0].title}
                    className="w-full h-[85%] object-cover mb-3"
                    src={(gallery[0]?.image as any)?.src ?? (gallery[0] as any)?.src ?? (typeof gallery[0]?.image === "string" ? gallery[0].image : "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80")}
                  />
                  <div className="text-center">
                    <h4 className="font-serif text-sm font-semibold text-[#1c1c19]">
                      {gallery[0].title}
                    </h4>
                    {gallery[0].subtitle && (
                      <p className="text-[10px] text-[#574240] tracking-widest uppercase mt-0.5">
                        {gallery[0].subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            )}

            {gallery[1] && (
              <div className="w-full sm:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, rotate: 2, y: -20 }}
                  whileInView={{ opacity: 1, rotate: -2, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="aspect-[4/5] overflow-hidden border border-[#dec0bd]/30 p-3 bg-white shadow-lg transition-transform hover:rotate-0 duration-500"
                  id="gallery-item-1"
                >
                  <img
                    alt={gallery[1].title}
                    className="w-full h-[85%] object-cover mb-3"
                    src={(gallery[1]?.image as any)?.src ?? (gallery[1] as any)?.src ?? (typeof gallery[1]?.image === "string" ? gallery[1].image : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80")}
                  />
                  <div className="text-center">
                    <h4 className="font-serif text-sm font-semibold text-[#1c1c19]">
                      {gallery[1].title}
                    </h4>
                    {gallery[1].subtitle && (
                      <p className="text-[10px] text-[#574240] tracking-widest uppercase mt-0.5">
                        {gallery[1].subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
