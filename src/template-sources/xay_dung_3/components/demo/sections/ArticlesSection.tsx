"use client";

import React from "react";
import { ArticleItem } from "@/template-sources/xay_dung_3/types/demo";
import { User, Calendar } from "lucide-react";

interface ArticlesSectionProps {
  badge: string;
  title: string;
  items: ArticleItem[];
}

const EXCERPT =
  "Council are celebrating the incredible achievement of the Companies and Stakeholders. Due to BIM's fast invasion in all over the world specially in ...";

const FALLBACK_ARTICLES: ArticleItem[] = [
  { id: "b1", category: "Interior | Modern", title: "In Good Taste: Mark Finlay Architects and Interiors", author: "Andres Alfaro", date: "February 26, 2020", excerpt: EXCERPT, image: "/templates/xay-dung-3/03.jpg" },
  { id: "b2", category: "Modern Furniture", title: "Five Things You Should Know About Modern Furniture.", author: "Andres Alfaro", date: "February 26, 2020", excerpt: EXCERPT, image: "/templates/xay-dung-3/02.jpg" },
  { id: "b3", category: "Interior", title: "Stylish living room with the comfortable sofra room", author: "Andres Alfaro", date: "February 26, 2020", excerpt: EXCERPT, image: "/templates/xay-dung-3/port1-3.jpg" },
];

export function ArticlesSection({ badge, title, items }: ArticlesSectionProps) {
  const articles = (items && items.length > 0 ? items : FALLBACK_ARTICLES).slice(0, 3).map((a) => ({
    id: a.id,
    badge: a.category,
    title: a.title,
    author: (a.author || "").toUpperCase(),
    date: (a.date || "").toUpperCase(),
    excerpt: a.excerpt,
    image: a.image,
  }));

  return (
    <section id="articles" className="py-24 lg:py-32 bg-white text-[#1e1e1e]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        
        {/* Header with Scroll Reveal */}
        <div className="text-center max-w-[700px] mx-auto mb-16 bim-reveal">
          <div className="bim-font-playfair italic text-sm text-[#b19777] mb-2 font-normal">
            {badge || "our Blog"}
          </div>
          <h2 className="bim-font-playfair text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1e1e1e] leading-tight">
            {title || "Latest News"}
          </h2>
        </div>

        {/* 3 Articles Grid with Scroll Reveal & Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((art, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <article
                key={art.id}
                className={`bim-blog-card group flex flex-col justify-between cursor-pointer p-6 bim-reveal ${delays[idx % delays.length]}`}
              >
                <div>
                  {/* Featured Image with category badge & zoom tilt */}
                  <div className="relative h-64 overflow-hidden mb-6 bg-zinc-100">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="blog-img w-full h-full object-cover"
                    />
                    {/* Badge top-left */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 text-white text-[11px] font-semibold tracking-wider">
                      {art.badge}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="bim-font-playfair blog-title text-xl font-bold text-[#1e1e1e] mb-3 leading-snug">
                    {art.title}
                  </h3>

                  {/* Meta Row: Author & Date */}
                  <div className="bim-font-poppins flex items-center gap-4 text-[11px] uppercase tracking-wider text-[#b19777] font-semibold mb-4">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      <span>{art.author}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#888888]">
                      <Calendar size={12} />
                      <span>{art.date}</span>
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="bim-font-poppins text-xs sm:text-sm text-[#777777] font-light leading-relaxed mb-6">
                    {art.excerpt}
                  </p>
                </div>

                {/* Read More */}
                <div className="pt-2 border-t border-[#eeeeee]">
                  <a
                    href="#contact"
                    className="bim-font-poppins blog-btn text-xs font-semibold uppercase tracking-[1.5px] text-[#1e1e1e]"
                  >
                    <span>Đọc Tiếp</span>
                    <span className="transition-transform duration-300">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
