"use client";
import React, { useState } from 'react';
import { ArrowRight, Share2, Check, Copy } from 'lucide-react';
import { BusinessInfo } from '../../../types/demo';

interface DemoFooterProps {
  business: BusinessInfo;
}

export default function DemoFooter({ business }: DemoFooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#ffffff] border-t border-brand-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Col 1 - Bio */}
          <div className="md:col-span-4">
            <div className="font-serif text-2xl font-bold tracking-tight text-brand-primary mb-6">
              {business.name || business.logoText || 'STUDIO'}
            </div>
            <p className="font-sans text-sm text-brand-primary/70 leading-relaxed max-w-sm mb-8">
              ÄÆ¡n vá»‹ thiáº¿t káº¿ vÃ  thi cÃ´ng ná»™i tháº¥t cao cáº¥p hÃ ng Ä‘áº§u, kiáº¿n táº¡o nhá»¯ng khÃ´ng gian sá»‘ng Ä‘áº§y cáº£m há»©ng vÃ  mang Ä‘áº­m dáº¥u áº¥n cÃ¡ nhÃ¢n.
            </p>
            
            {/* Share action */}
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-none border border-brand-secondary/20 flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-300 relative"
              title="Copy link to clipboard"
            >
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-brand-primary text-white text-[10px] px-2 py-1 uppercase tracking-widest whitespace-nowrap animate-[fadeIn_0.2s_ease]">
                  Copied!
                </span>
              )}
            </button>
          </div>

          {/* Col 2 - Services */}
          <div className="md:col-span-2">
            <h5 className="font-sans text-[11px] font-bold text-brand-primary tracking-widest uppercase mb-6">
              Dá»‹ch vá»¥
            </h5>
            <ul className="space-y-4 font-sans text-sm text-brand-primary/70">
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  CÄƒn há»™
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  NhÃ  phá»‘
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  VÄƒn phÃ²ng
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Biá»‡t thá»±
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 - Company Links */}
          <div className="md:col-span-2">
            <h5 className="font-sans text-[11px] font-bold text-brand-primary tracking-widest uppercase mb-6">
              Vá» chÃºng tÃ´i
            </h5>
            <ul className="space-y-4 font-sans text-sm text-brand-primary/70">
              <li>
                <a href="#about" className="hover:text-brand-secondary transition-colors">
                  Triáº¿t lÃ½
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-brand-secondary transition-colors">
                  GiÃ¡ trá»‹ cá»‘t lÃµi
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-secondary transition-colors">
                  BÃ¡o giÃ¡
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-secondary transition-colors">
                  LiÃªn há»‡
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div className="md:col-span-4">
            <h5 className="font-sans text-[11px] font-bold text-brand-primary tracking-widest uppercase mb-6">
              Newsletter
            </h5>
            <p className="font-sans text-sm text-brand-primary/70 mb-6">
              ÄÄƒng kÃ½ Ä‘á»ƒ nháº­n nhá»¯ng cáº£m há»©ng thiáº¿t káº¿ vÃ  phong cÃ¡ch sá»‘ng má»›i nháº¥t.
            </p>

            <form onSubmit={handleSubscribe} className="flex border-b border-brand-secondary/40 pb-2 relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? "Cáº£m Æ¡n báº¡n Ä‘Ã£ Ä‘Äƒng kÃ½!" : "Email cá»§a báº¡n"}
                disabled={subscribed}
                className="bg-transparent border-none focus:outline-none focus:ring-0 w-full placeholder:text-brand-primary/45 text-brand-primary font-sans text-sm pr-10"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="absolute right-0 text-brand-secondary hover:text-brand-primary transition-colors cursor-pointer"
              >
                {subscribed ? <Check size={18} className="text-brand-accent" /> : <ArrowRight size={18} />}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-secondary/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-brand-primary/60 font-sans tracking-widest">
          <div>
            Â© {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-primary transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              TERMS OF SERVICE
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

