import React from "react";
import Link from "next/link";

interface FooterProps {
  businessName?: string;
  logo?: string;
  phone?: string[];
  email?: string[];
  address?: string;
}

export function Footer({
  businessName = "PRAGUE ARCHITECTS",
  logo = "/templates/xay-dung-2/logo-white.png",
  phone = ["0912 345 678", "024 3988 9999"],
  email = ["lienhe@prague-arch.vn"],
  address = "Tầng 8, Tòa nhà Văn phòng Tổng công ty, Số 68 Đường Cầu Giấy, Cầu Giấy, Hà Nội",
}: FooterProps) {
  const isDefaultPrague = !businessName || businessName === "PRAGUE ARCHITECTS" || businessName === "PRAGUE";

  const brandName = React.useMemo(() => {
    if (isDefaultPrague) return "PRAGUE";
    const cleaned = businessName
      .replace(/^(công ty|cty)\s+(cổ phần|cp|tnhh|tập đoàn|mtv)?\s*/i, "")
      .replace(/^(tư vấn|thiết kế|kiến trúc|xây dựng)\s*/i, "")
      .trim();
    return cleaned.length > 0 && cleaned.length <= 25 ? cleaned : businessName;
  }, [businessName, isDefaultPrague]);

  return (
    <footer
      className="relative bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url(/templates/xay-dung-2/footer-bg.jpg)" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-20 pb-12">
        
        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo & Principle */}
          <div className="md:col-span-8 space-y-6">
            <Link href="#top" className="inline-block">
              {logo && logo !== "/templates/xay-dung-2/logo-white.png" ? (
                <img
                  src={logo}
                  alt={businessName}
                  className="h-8 w-auto object-contain"
                />
              ) : isDefaultPrague ? (
                <img
                  src="/templates/xay-dung-2/logo-white.png"
                  alt="PRAGUE"
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <div className="flex flex-col text-left">
                  <span className="text-xl font-bold tracking-[0.2em] text-white uppercase font-sans leading-none">
                    {brandName}
                  </span>
                  <span className="text-[9px] tracking-[0.3em] text-zinc-400 uppercase mt-1 font-mono">
                    ARCHITECTS &amp; BUILDERS
                  </span>
                </div>
              )}
            </Link>

            <p className="text-[13px] sm:text-[14px] text-white/70 font-light leading-relaxed max-w-2xl">
              {businessName} - Đơn vị tiên phong trong lĩnh vực tư vấn thiết kế kiến trúc và tổng thầu thi công xây dựng cao cấp. Chúng tôi cam kết kiến tạo không gian sống đẳng cấp, bền vững và trường tồn cùng thời gian.
            </p>
          </div>

          {/* GET IN TOUCH */}
          <div className="md:col-span-4 space-y-3">
            <h6 className="text-[12px] font-bold tracking-[0.2em] uppercase text-white/90">
              KẾT NỐI VỚI CHÚNG TÔI
            </h6>

            <div className="space-y-1 text-[13px] text-white/70 font-light leading-relaxed">
              {phone.map((p, idx) => (
                <p key={idx}>
                  <a href={`tel:${p.replace(/[^\d+]/g, "")}`} className="hover:text-white transition-colors">
                    Hotline: {p}
                  </a>
                </p>
              ))}
              {email.map((e, idx) => (
                <p key={idx}>
                  <a href={`mailto:${e}`} className="hover:text-white transition-colors">
                    Email: {e}
                  </a>
                </p>
              ))}
              <p className="pt-1 text-white/60">Trụ sở: {address}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[12px] text-white/60">
          <p className="tracking-wider uppercase">
            {businessName.toUpperCase()} © {new Date().getFullYear()}. BẢO LƯU MỌI QUYỀN.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-white/80">
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-white text-xs font-bold" title="Behance">
              Bē
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white text-xs font-bold" title="Facebook">
              f
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white text-xs font-bold" title="YouTube">
              ▶
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-white text-xs font-bold" title="Pinterest">
              P
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
