"use client";
import { Scale, Share2 } from "lucide-react";
import { DemoPageData } from "../../../types/demo";

interface SectionProps {
  data: DemoPageData;
}

export default function DemoFooter({ data }: SectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 sm:px-8 bg-blue-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand name & Copyright info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <span className="font-headline-md font-bold text-xl text-amber-500">
            {data.business.name}
          </span>
          <p className="font-sans text-xs text-gray-400 max-w-md">
            Â© {currentYear} {data.business.name}. Báº£o lÆ°u má»i quyá»n. TÆ° váº¥n phÃ¡p lÃ½ chuyÃªn nghiá»‡p vÃ  táº­n tÃ¢m.
          </p>
        </div>

        {/* Footer legal links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300">
          <a href="#" className="hover:text-amber-500 transition-colors">
            Äiá»u khoáº£n dá»‹ch vá»¥
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            ChÃ­nh sÃ¡ch báº£o máº­t
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            SÆ¡ Ä‘á»“ trang web
          </a>
        </div>

        {/* Social interactions */}
        <div className="flex gap-4">
          <a
            href="#"
            title="Äáº¡o Ä‘á»©c nghá» nghiá»‡p"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all"
          >
            <Scale className="w-4 h-4" />
          </a>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: data.seo.title,
                  text: data.seo.description,
                  url: window.location.href,
                }).catch(() => {});
              }
            }}
            title="Chia sáº»"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

