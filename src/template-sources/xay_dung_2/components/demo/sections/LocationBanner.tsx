import React from "react";
import { Compass } from "lucide-react";

interface LocationBannerProps {
  city?: string;
  address?: string;
}

export function LocationBanner({
  city = "Hà Nội, Việt Nam",
  address = "Tầng 8, Tòa nhà Văn phòng Tổng công ty, Số 68 Đường Cầu Giấy, Hà Nội",
}: LocationBannerProps) {
  return (
    <section className="py-16 bg-[#eef1f4] text-zinc-800 text-center border-t border-zinc-200">
      <div className="max-w-xl mx-auto px-6 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-zinc-700 text-white flex items-center justify-center mb-4">
          <Compass size={20} />
        </div>
        <h4 className="text-[15px] font-bold text-zinc-900 mb-1">
          {city}
        </h4>
        <p className="text-[13px] text-zinc-500 font-light">
          {address}
        </p>
      </div>
    </section>
  );
}
