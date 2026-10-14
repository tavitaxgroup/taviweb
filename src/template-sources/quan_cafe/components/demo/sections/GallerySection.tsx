"use client";
import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { DemoPageData } from '../../../types/demo';

interface SectionProps {
  data: DemoPageData;
}

export default function GallerySection({ data }: SectionProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const items = data.gallery;

  if (items.length === 0) return null;

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#553722] mb-4">
            Nhá»‹p thá»Ÿ táº¡i QuÃ¡n
          </h2>
          <div className="w-16 h-1 bg-[#553722] mx-auto mb-6"></div>
          <p className="max-w-xl mx-auto text-[#50453e] text-base sm:text-lg">
            LÆ°u giá»¯ nhá»¯ng khoáº£nh kháº¯c Ä‘á»i thÆ°á»ng, nhá»¯ng gÃ³c nhá» bÃ¬nh yÃªn vÃ  nghá»‡ thuáº­t pha cháº¿ táº¡i {data.business.name}.
          </p>
        </div>

        {/* Masonry-Inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          {/* Main Large Column - Left */}
          {items[0] && (
            <div
              onClick={() => setLightboxImage(items[0].src)}
              className="md:col-span-7 aspect-[4/3] md:aspect-auto md:h-[650px] relative overflow-hidden rounded-[2rem] group cursor-pointer border border-outline-variant/10 shadow-sm"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={items[0].src}
                alt={items[0].alt}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 md:p-10">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-white text-xl sm:text-2xl font-bold mb-1">
                  {items[0].title || 'GÃ³c bÃ¬nh yÃªn'}
                </h4>
                <p className="text-white/80 text-sm font-medium">
                  {items[0].subtitle || 'ChiÃªm ngÆ°á»¡ng khÃ´ng gian má»™c máº¡c.'}
                </p>
              </div>
            </div>
          )}

          {/* Right Column Layout */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Top row of right column */}
            <div className="grid grid-cols-2 gap-6">
              {items[1] && (
                <div
                  onClick={() => setLightboxImage(items[1].src)}
                  className="aspect-square relative overflow-hidden rounded-[1.5rem] group cursor-pointer border border-outline-variant/10 shadow-sm"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={items[1].src}
                    alt={items[1].alt}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}

              {items[2] && (
                <div
                  onClick={() => setLightboxImage(items[2].src)}
                  className="aspect-square relative overflow-hidden rounded-[1.5rem] group cursor-pointer border border-outline-variant/10 shadow-sm"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={items[2].src}
                    alt={items[2].alt}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom row of right column */}
            {items[3] && (
              <div
                onClick={() => setLightboxImage(items[3].src)}
                className="aspect-[4/3] md:aspect-auto md:h-[314px] relative overflow-hidden rounded-[1.5rem] group cursor-pointer border border-outline-variant/10 shadow-sm"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={items[3].src}
                  alt={items[3].alt}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="text-white text-lg font-bold mb-1">
                    {items[3].title || 'Khoáº£nh kháº¯c trá»n váº¹n'}
                  </h4>
                  <p className="text-white/80 text-sm font-medium">
                    {items[3].subtitle || 'Chia sáº» nhá»¯ng cÃ¢u chuyá»‡n áº¥m lÃ²ng.'}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Fallback extra images if list is longer */}
        {items.length > 4 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {items.slice(4).map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item.src)}
                className="aspect-square relative overflow-hidden rounded-[1.5rem] group cursor-pointer border border-outline-variant/10 shadow-sm"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.src}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img
            className="max-w-full max-h-[90vh] object-contain rounded-xl select-none"
            src={lightboxImage}
            alt="View full size"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
}

