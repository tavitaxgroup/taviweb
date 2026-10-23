import type { Metadata } from "next";
import { XayDung3Template } from "@/template-sources/xay_dung_3";

export const metadata: Metadata = {
  title: "BIM CREATIVE - Thiết Kế Kiến Trúc & Nội Thất Cao Cấp | Mẫu XD003",
  description: "Mẫu website thiết kế kiến trúc, mô hình BIM và hoàn thiện nội thất phong cách BIM Creative Studio. Tích hợp thanh trượt so sánh bản vẽ trước/sau (Before/After), hồ sơ năng lực và đăng ký tư vấn trực tuyến.",
  openGraph: {
    title: "BIM CREATIVE - Thiết Kế Kiến Trúc & Nội Thất Cao Cấp",
    description: "Mẫu website kiến trúc, thiết kế nội thất và công nghệ BIM hiện đại hàng đầu được phát triển trên nền tảng Next.js.",
    images: ["/templates/xay-dung-3/2.jpg"],
  },
};

export default function XayDung3Page() {
  return <XayDung3Template />;
}
