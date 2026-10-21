import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { DemoPageData } from "../../../types/demo";

interface DemoNavbarProps {
  data: DemoPageData;
}

export default function DemoNavbar({ data }: DemoNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const anyData = data as any;
  const blogHref = anyData.blogUrl || "#cms-magazine-section";
  const bookingHref =
    anyData.bookingUrl || data.hero?.primaryAction?.href || "#crm-lead-section";

  const navLinks = [
    { label: "Dịch vụ", href: "#services-section" },
    { label: "Bảng giá & Đặt lịch", href: "#live-booking-services" },
    { label: "Tư vấn 1:1 (CRM)", href: "#crm-lead-section" },
    { label: "Tạp chí & Blog", href: blogHref },
    { label: "Đánh giá", href: "#reviews-section" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-outline/20">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center gap-5">
        {/* Logo text */}
        <div
          className="min-w-0 max-w-[320px] whitespace-normal break-words font-serif text-lg font-bold leading-tight tracking-[0.06em] text-brand-primary uppercase sm:max-w-[380px] md:text-xl"
          title={data.business.name}
        >
          {data.business.logoText || data.business.name}
        </div>

        {/* Desktop Links */}
        <div className="hidden shrink-0 lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-brand-secondary hover:text-brand-primary font-sans font-medium text-sm tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden shrink-0 md:flex items-center">
          <a
            href={bookingHref}
            className="bg-brand-primary !text-white hover:bg-brand-primary/90 px-6 py-2.5 rounded-full font-sans font-semibold text-sm tracking-wide shadow-md hover:scale-95 transition-all duration-200"
          >
            <span className="!text-white">
              {data.hero?.primaryAction?.label || "Đặt lịch hẹn"}
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-brand-primary p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="lg:hidden bg-brand-bg border-t border-brand-outline/20 absolute left-0 right-0 py-6 px-6 shadow-xl space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-brand-secondary hover:text-brand-primary font-sans font-medium text-lg py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={bookingHref}
            onClick={() => setIsOpen(false)}
            className="bg-brand-primary !text-white w-full text-center py-3 rounded-full font-sans font-semibold text-sm tracking-wide shadow-md mt-4"
          >
            <span className="!text-white">
              {data.hero?.primaryAction?.label || "Đặt lịch hẹn"}
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
