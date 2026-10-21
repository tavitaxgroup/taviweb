"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ContactSectionProps {
  phones: string[];
  emails: string[];
  skypes: string[];
}

export function ContactSection({ phones, emails, skypes }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn! Yêu cầu của bạn đã được gửi thành công.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-zinc-900 border-t border-zinc-100">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-6">
            <div className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2">
              CONTACT
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-zinc-900 leading-tight mb-6">
              Let&apos;s start new project.
            </h2>

            <p className="text-[14px] text-zinc-600 leading-relaxed font-light mb-10">
              Now, as you were able to get a picture of who we are, it is up to you to contact us and lay the foundation for a new and successful business relationship. Our team consists
            </p>

            {/* 3 Columns: PHONE, EMAIL, SKYPE */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-200">
              {/* PHONE */}
              <div>
                <div className="w-5 h-[1px] bg-zinc-900 mb-3" />
                <h4 className="text-[12px] font-bold tracking-[0.15em] text-zinc-900 uppercase mb-2">
                  PHONE
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
                  EMAIL
                </h4>
                {emails.map((e, idx) => (
                  <p key={idx} className="text-[13px] text-zinc-600 hover:text-black truncate">
                    <a href={`mailto:${e}`}>{e}</a>
                  </p>
                ))}
              </div>

              {/* SKYPE */}
              <div>
                <div className="w-5 h-[1px] bg-zinc-900 mb-3" />
                <h4 className="text-[12px] font-bold tracking-[0.15em] text-zinc-900 uppercase mb-2">
                  SKYPE
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#f4f4f4] border-0 px-4 py-3 text-[14px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                />
                <input
                  type="text"
                  required
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#f4f4f4] border-0 px-4 py-3 text-[14px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#f4f4f4] border-0 px-4 py-3 text-[14px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  required
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#f4f4f4] border-0 px-4 py-3 text-[14px] text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#1b1b1b] hover:bg-black text-white px-8 py-3 text-[12px] font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  <span>Send</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
