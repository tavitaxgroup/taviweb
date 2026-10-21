import type { Metadata } from "next";
import { XayDung2Template } from "@/template-sources/xay_dung_2";

export const metadata: Metadata = {
  title: "PRAGUE ARCHITECTS - Thiết Kế Kiến Trúc & Xây Dựng Cao Cấp | Mẫu XD002",
  description: "Mẫu website thiết kế kiến trúc, nội thất và thi công xây dựng cao cấp phong cách tối giản châu Âu. Tích hợp chỉ số năng lực, thư viện dự án, dịch vụ và biểu mẫu báo giá chuẩn SEO.",
  openGraph: {
    title: "PRAGUE ARCHITECTS - Thiết Kế Kiến Trúc & Xây Dựng Cao Cấp",
    description: "Mẫu website thiết kế kiến trúc và thi công xây dựng cao cấp được phát triển trên nền tảng Next.js.",
    images: ["/templates/xay-dung-2/hero-banner.jpg"],
  },
};

export default function XayDung2Page() {
  return <XayDung2Template />;
}
