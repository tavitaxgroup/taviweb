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
            <div className="text-2xl sm:text-3xl font-bold tracking-normal text-brand-primary mb-6 leading-tight">
              {business.name || business.logoText || 'STUDIO NỘI THẤT'}
            </div>
            <p className="text-sm text-brand-primary/75 leading-relaxed max-w-sm mb-8 font-normal">
              Đơn vị thiết kế và thi công nội thất cao cấp hàng đầu, kiến tạo những không gian sống đầy cảm hứng và mang đậm dấu ấn cá nhân.
            </p>
            
            {/* Share action */}
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-none border border-brand-secondary/20 flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-300 relative cursor-pointer"
              title="Sao chép liên kết"
            >
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-brand-primary text-white text-[10px] px-2 py-1 uppercase tracking-wider whitespace-nowrap animate-[fadeIn_0.2s_ease]">
                  Đã sao chép!
                </span>
              )}
            </button>
          </div>

          {/* Col 2 - Services */}
          <div className="md:col-span-2">
            <h5 className="text-xs font-bold text-brand-primary tracking-wider uppercase mb-6">
              Dịch vụ
            </h5>
            <ul className="space-y-4 text-sm text-brand-primary/70">
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Căn hộ
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Nhà phố
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Văn phòng
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">
                  Biệt thự
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 - Company Links */}
          <div className="md:col-span-2">
            <h5 className="text-xs font-bold text-brand-primary tracking-wider uppercase mb-6">
              Về chúng tôi
            </h5>
            <ul className="space-y-4 text-sm text-brand-primary/70">
              <li>
                <a href="#about" className="hover:text-brand-secondary transition-colors">
                  Triết lý
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-brand-secondary transition-colors">
                  Giá trị cốt lõi
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-secondary transition-colors">
                  Báo giá
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-secondary transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div className="md:col-span-4">
            <h5 className="text-xs font-bold text-brand-primary tracking-wider uppercase mb-6">
              Bản tin
            </h5>
            <p className="text-sm text-brand-primary/70 mb-6 leading-relaxed">
              Đăng ký để nhận những cảm hứng thiết kế và phong cách sống mới nhất.
            </p>

            <form onSubmit={handleSubscribe} className="flex border-b border-brand-secondary/40 pb-2 relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? "Cảm ơn bạn đã đăng ký!" : "Email của bạn"}
                disabled={subscribed}
                className="bg-transparent border-none focus:outline-none focus:ring-0 w-full placeholder:text-brand-primary/45 text-brand-primary text-sm pr-10"
              />
              <button
                type="submit"
                disabled={subscribed}
                aria-label="Đăng ký nhận tin"
                className="absolute right-0 text-brand-secondary hover:text-brand-primary transition-colors cursor-pointer"
              >
                {subscribed ? <Check size={18} className="text-brand-accent" /> : <ArrowRight size={18} />}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-secondary/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-primary/70 tracking-normal">
          <div>
            © {new Date().getFullYear()} {business.name}. Mọi quyền được bảo lưu.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-primary transition-colors tracking-wider text-xs font-medium uppercase">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors tracking-wider text-xs font-medium uppercase">
              Điều khoản dịch vụ
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
