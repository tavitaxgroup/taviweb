"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ContactSectionProps {
  phones: string[];
  emails: string[];
  skypes: string[];
  businessName?: string;
}

export function ContactSection({ phones, emails, skypes, businessName }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-zinc-900 border-t border-zinc-100">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-6">
            <div className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2">
              LIÊN HỆ &amp; TƯ VẤN
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-zinc-900 leading-tight mb-6">
              Khởi tạo công trình tương lai.
            </h2>

            <p className="text-[14px] text-zinc-600 leading-relaxed font-light mb-10">
              Đội ngũ chuyên gia kiến trúc và kỹ sư kết cấu của {businessName || "Prague Architects"} luôn sẵn sàng đồng hành, lắng nghe nhu cầu và hiện thực hóa giải pháp không gian hoàn mỹ cho quý khách hàng.
            </p>

            {/* 3 Columns: PHONE, EMAIL, SKYPE/ZALO */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-200">
              {/* PHONE */}
              <div>
                <div className="w-5 h-[1px] bg-zinc-900 mb-3" />
                <h4 className="text-[12px] font-bold tracking-[0.15em] text-zinc-900 uppercase mb-2">
                  HOTLINE
                </h4>
                {phones.map((p, idx) => (
                  <p key={idx} className="text-[13px] text-zinc-600 hover:text-black">
                    <a href={`tel:${p.replace(/[^\d+]/g, "")}`}>{p}</a>
                  </p>
                ))}
              </div>

              {/* EMAIL */}
              <div>
                <div className="w-5 h-[1px] bg-zinc-900 mb-3" />
                <h4 className="text-[12px] font-bold tracking-[0.15em] text-zinc-900 uppercase mb-2">
                  EMAIL DỰ ÁN
                </h4>
                {emails.map((e, idx) => (
                  <p key={idx} className="text-[13px] text-zinc-600 hover:text-black truncate">
                    <a href={`mailto:${e}`}>{e}</a>
                  </p>
                ))}
              </div>

              {/* ZALO / SKYPE */}
              <div>
                <div className="w-5 h-[1px] bg-zinc-900 mb-3" />
                <h4 className="text-[12px] font-bold tracking-[0.15em] text-zinc-900 uppercase mb-2">
                  HỖ TRỢ TRỰC TUYẾN
                </h4>
                {skypes.map((s, idx) => (
                  <p key={idx} className="text-[13px] text-zinc-600">
                    {s}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Light Grey Form */}
          <div className="lg:col-span-6 lg:pt-6">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 text-center flex flex-col items-center justify-center">
                <CheckCircle2 size={40} className="text-emerald-600 mb-3" />
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Gửi yêu cầu thành công!</h3>
                <p className="text-sm text-zinc-600 max-w-md">
                  Cảm ơn Quý khách. Đội ngũ kiến trúc sư của {businessName || "Prague Architects"} đã nhận được thông tin và sẽ liên hệ tư vấn trong vòng 24 giờ làm việc.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#f4f4f4] border-0 px-4 py-3 text-[14px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#f4f4f4] border-0 px-4 py-3 text-[14px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Địa chỉ Email (tùy chọn)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#f4f4f4] border-0 px-4 py-3 text-[14px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                  />
                </div>

                <div>
                  <textarea
                    rows={5}
                    required
                    placeholder="Yêu cầu tư vấn (Ví dụ: Biệt thự nghỉ dưỡng 3 tầng, diện tích 350m2 tại Hạ Long...)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f4f4f4] border-0 px-4 py-3 text-[14px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#1b1b1b] hover:bg-black text-white px-8 py-3.5 text-[12px] font-bold tracking-[0.2em] uppercase transition-colors"
                  >
                    <span>GỬI YÊU CẦU TƯ VẤN</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
