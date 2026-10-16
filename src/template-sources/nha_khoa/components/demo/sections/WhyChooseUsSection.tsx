"use client";
import { motion } from 'motion/react';
import * as Lucide from 'lucide-react';

interface WhyChooseUsSectionProps {
  features?: string[];
}

export default function WhyChooseUsSection({ features }: WhyChooseUsSectionProps) {
  const points = features && features.length > 0
    ? features.map((feat, index) => {
        const parts = feat.split(/[:\-]/);
        const title = parts[0]?.trim() || "Æ¯u Ä‘iá»ƒm";
        const desc = parts.slice(1).join("-")?.trim() || "Dá»‹ch vá»¥ nha khoa chuyÃªn nghiá»‡p chuáº©n y khoa.";
        const iconNames = ["MessageSquare", "ShieldAlert", "CheckCircle"];
        const iconName = iconNames[index % iconNames.length];
        
        return {
          title,
          desc,
          iconName
        };
      })
    : [
        {
          title: "TÆ° váº¥n rÃµ rÃ ng",
          desc: "Má»i tháº¯c máº¯c vá» lá»™ trÃ¬nh Ä‘iá»u trá»‹, chi phÃ­ hay chÃ­nh sÃ¡ch báº£o hÃ nh Ä‘á»u Ä‘Æ°á»£c tÆ° váº¥n chi tiáº¿t, minh báº¡ch ngay tá»« Ä‘áº§u.",
          iconName: "MessageSquare"
        },
        {
          title: "KhÃ´ng gian sáº¡ch",
          desc: "PhÃ²ng Ä‘iá»u trá»‹ vÃ´ trÃ¹ng khÃ©p kÃ­n nghiÃªm ngáº·t, sá»­ dá»¥ng dá»¥ng cá»¥ riÃªng biá»‡t cho tá»«ng khÃ¡ch hÃ ng Ä‘á»ƒ chá»‘ng lÃ¢y nhiá»…m chÃ©o.",
          iconName: "ShieldAlert"
        },
        {
          title: "Dá»… Ä‘áº·t lá»‹ch",
          desc: "Há»‡ thá»‘ng tá»•ng Ä‘Ã i vÃ  Ä‘áº·t háº¹n trá»±c tuyáº¿n sáºµn sÃ ng 24/7, giÃºp báº¡n chá»§ Ä‘á»™ng sáº¯p xáº¿p thá»i gian khÃ¡m nhanh gá»n, khÃ´ng chá» Ä‘á»£i.",
          iconName: "CheckCircle"
        }
      ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {points.map((point, index) => {
            const IconComponent = (Lucide as any)[point.iconName] || Lucide.CheckCircle;
            return (
              <motion.div
                key={`choose-${index}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 shadow-sm mb-6">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-sans mb-3">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-550 font-sans">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

