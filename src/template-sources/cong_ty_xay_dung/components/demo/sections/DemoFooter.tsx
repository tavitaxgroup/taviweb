"use client";
import React from "react";
import { MapPin, Phone, Mail, MessageCircle, Share2 } from "lucide-react";
import { BusinessInfo } from "../../../types/demo";

interface DemoFooterProps {
  business: BusinessInfo;
}

export function DemoFooter({ business }: DemoFooterProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-12 py-20 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col space-y-6">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-sans text-2xl font-black text-amber-500 uppercase tracking-tighter"
          >
            {business.name}
          </a>
          <p className="text-slate-400 text-sm leading-relaxed">
            ÄÆ¡n vá»‹ tÆ° váº¥n thiáº¿t káº¿ vÃ  thi cÃ´ng xÃ¢y dá»±ng chuyÃªn nghiá»‡p, mang Ä‘áº¿n giáº£i phÃ¡p bá»n vá»¯ng cho má»i cÃ´ng trÃ¬nh cá»§a báº¡n.
          </p>
          <div className="flex space-x-3">
            <a 
              href="#" 
              aria-label="MessageCircle Link"
              className="w-10 h-10 border border-slate-700 hover:border-amber-500 rounded flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-slate-800 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="Share Link"
              className="w-10 h-10 border border-slate-700 hover:border-amber-500 rounded flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-slate-800 transition-colors duration-200"
            >
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services Links Column */}
        <div>
          <h4 className="font-sans text-xs font-bold text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-3">
            Dá»‹ch vá»¥
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <button onClick={() => handleScrollTo("services")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                XÃ¢y nhÃ  trá»n gÃ³i
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("services")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                Sá»­a chá»¯a cáº£i táº¡o
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("services")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                Thi cÃ´ng pháº§n thÃ´
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("services")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                HoÃ n thiá»‡n ná»™i tháº¥t
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("services")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                TÆ° váº¥n dá»± toÃ¡n cÃ´ng trÃ¬nh
              </button>
            </li>
          </ul>
        </div>

        {/* Company Links Column */}
        <div>
          <h4 className="font-sans text-xs font-bold text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-3">
            CÃ´ng ty
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <button onClick={() => handleScrollTo("about")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                Vá» chÃºng tÃ´i
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("gallery")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                Dá»± Ã¡n Ä‘Ã£ thá»±c hiá»‡n
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("why-choose-us")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                Quy trÃ¬nh lÃ m viá»‡c
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("why-choose-us")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                Sá»± khÃ¡c biá»‡t
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo("contact")} className="text-slate-400 hover:text-amber-500 transition-colors text-left cursor-pointer">
                LiÃªn há»‡ tÆ° váº¥n
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-5">
          <h4 className="font-sans text-xs font-bold text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-3">
            LiÃªn há»‡
          </h4>
          <ul className="space-y-4 text-sm">
            {business.address && (
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{business.address}</span>
              </li>
            )}
            {business.phone && (
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href={`tel:${business.phone.replace(/\s+/g, '')}`} className="hover:text-amber-500 transition-colors">
                  {business.phone}
                </a>
              </li>
            )}
            {business.email && (
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-amber-500 transition-colors break-all">
                  {business.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Footer Bottom copyright area */}
      <div className="border-t border-slate-800/80 py-8 px-4 md:px-12 text-center text-xs text-slate-500">
        <p>Â© {new Date().getFullYear()} {business.name}. Má»i quyá»n Ä‘Æ°á»£c báº£o lÆ°u.</p>
      </div>
    </footer>
  );
}

