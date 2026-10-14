"use client";
import { motion } from 'motion/react';
import * as Lucide from 'lucide-react';

interface WhyChooseUsSectionProps {
  features?: string[];
}

export default function WhyChooseUsSection({ features }: WhyChooseUsSectionProps) {
  const items = features && features.length > 0
    ? features.map((feat, index) => {
        const parts = feat.split(/[:\-]/);
        const title = parts[0]?.trim() || "Tháº¿ máº¡nh";
        const description = parts.slice(1).join("-")?.trim() || "ChÄƒm sÃ³c sá»©c khá»e toÃ n diá»‡n vá»›i cÃ´ng nghá»‡ y khoa hiá»‡n Ä‘áº¡i.";
        const iconNames = ["Cpu", "Users", "Heart"];
        const iconName = iconNames[index % iconNames.length];
        
        return {
          title,
          description,
          iconName
        };
      })
    : [
        {
          title: 'CÃ´ng Nghá»‡ Má»›i',
          description: 'Trang thiáº¿t bá»‹ cháº©n Ä‘oÃ¡n hÃ¬nh áº£nh vÃ  xÃ©t nghiá»‡m Ä‘áº¡t chuáº©n quá»‘c táº¿.',
          iconName: "Cpu"
        },
        {
          title: 'BÃ¡c SÄ© Äáº§u NgÃ nh',
          description: 'Äá»™i ngÅ© y bÃ¡c sÄ© cÃ³ trÃ¬nh Ä‘á»™ chuyÃªn mÃ´n cao, nhiá»u nÄƒm tu nghiá»‡p nÆ°á»›c ngoÃ i.',
          iconName: "Users"
        },
        {
          title: 'ThÃ¢n Thiá»‡n',
          description: 'MÃ´i trÆ°á»ng phÃ²ng khÃ¡m áº¥m cÃºng, phÃ¹ há»£p cho cáº£ tráº» nhá» vÃ  ngÆ°á»i cao tuá»•i.',
          iconName: "Heart"
        }
      ];

  return (
    <section className="py-20 bg-[#004ac6] text-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Táº¡i Sao Chá»n ChÃºng TÃ´i?
            </h2>
            <p className="text-blue-100 font-sans text-base leading-relaxed">
              ChÃºng tÃ´i cam káº¿t káº¿t há»£p cÃ´ng nghá»‡ hiá»‡n Ä‘áº¡i báº­c nháº¥t vá»›i sá»± tháº¥u cáº£m, chu Ä‘Ã¡o trong tá»«ng dá»‹ch vá»¥ chÄƒm sÃ³c.
            </p>
          </motion.div>
 
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => {
              const IconComponent = (Lucide as any)[item.iconName] || Lucide.Heart;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 bg-white/10 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-blue-100/80 text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

