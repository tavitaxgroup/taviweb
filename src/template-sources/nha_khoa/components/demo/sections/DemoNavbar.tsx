import React from 'react';
import { BusinessInfo } from '../../../types/demo';
import { Phone, Calendar } from 'lucide-react';

interface DemoNavbarProps {
  business: BusinessInfo;
  bookingUrl?: string;
  blogUrl?: string;
}

export default function DemoNavbar({
  business,
  bookingUrl,
  blogUrl,
}: DemoNavbarProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cleanPhone = business.phone ? business.phone.replace(/\s+/g, '') : '';

  return (
    <nav
      id="navbar-main"
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md transition-all duration-300"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="min-w-0 flex items-center gap-2">
          <span
            className="block max-w-[300px] whitespace-normal break-words text-lg font-bold leading-tight tracking-tight text-teal-800 font-sans sm:max-w-[360px]"
            title={business.name}
          >
            {business.name}
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden shrink-0 lg:flex items-center gap-7">
          <a
            href="#services"
            onClick={(e) => handleScroll(e, 'services')}
            className="text-sm font-medium text-gray-600 hover:text-teal-700 transition-colors"
          >
            Dịch vụ
          </a>
          <a
            href="#live-booking-services"
            onClick={(e) => handleScroll(e, 'live-booking-services')}
            className="text-sm font-medium text-gray-600 hover:text-teal-700 transition-colors"
          >
            Bảng giá & Đặt lịch
          </a>
          <a
            href="#crm-lead-section"
            onClick={(e) => handleScroll(e, 'crm-lead-section')}
            className="text-sm font-medium text-gray-600 hover:text-teal-700 transition-colors"
          >
            Tư vấn 1:1 (CRM)
          </a>
          <a
            href={blogUrl || '#cms-magazine-section'}
            onClick={(e) => {
              if (document.getElementById('cms-magazine-section')) {
                handleScroll(e, 'cms-magazine-section');
              }
            }}
            className="text-sm font-medium text-gray-600 hover:text-teal-700 transition-colors"
          >
            Tạp chí & Blog (CMS)
          </a>
          <a
            href="#reviews"
            onClick={(e) => handleScroll(e, 'reviews')}
            className="text-sm font-medium text-gray-600 hover:text-teal-700 transition-colors"
          >
            Đánh giá
          </a>
        </div>

        {/* Call to Actions */}
        <div className="shrink-0 flex items-center gap-3">
          {business.phone && (
            <a
              href={`tel:${cleanPhone}`}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-teal-600/30 px-4 py-2 text-xs font-semibold text-teal-800 hover:bg-teal-50 transition-all font-sans"
            >
              <Phone className="h-3.5 w-3.5" />
              {business.phone}
            </a>
          )}
          <a
            href={bookingUrl || '#crm-lead-section'}
            className="inline-flex items-center gap-1.5 rounded-full bg-teal-700 px-5 py-2 text-xs font-semibold !text-white shadow-sm hover:bg-teal-800 active:scale-95 transition-all font-sans"
          >
            <Calendar className="h-3.5 w-3.5 !text-white" />
            <span className="!text-white">Đặt lịch hẹn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
