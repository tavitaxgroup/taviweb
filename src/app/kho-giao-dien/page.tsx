import type { Metadata } from "next";
import Link from "next/link";
import { IndustryList, IndustrySidebar } from "@/components/template-gallery/TemplateGallery";
import { industryCatalog } from "@/lib/templates/templateCatalog";

export const metadata: Metadata = {
  title: "Kho giao diện website - TAVIWEB",
  description:
    "Kho giao diện website theo ngành nghề của TAVIWEB, gồm các mẫu website để khách tham khảo và lựa chọn."
};

export default function TemplateGalleryPage() {
  return (
    <main className="gallery-page">
      <header className="gallery-header">
        <Link href="/" className="gallery-brand">
          TAVIWEB
        </Link>
        <nav aria-label="Điều hướng kho giao diện">
          <Link href="/">Trang chủ</Link>
          <Link href="/kho-giao-dien">Kho giao diện</Link>
          <Link href="/#contact">Liên hệ</Link>
        </nav>
      </header>

      <div className="gallery-shell">
        <IndustrySidebar industries={industryCatalog} />
        <div className="gallery-content">
          <section className="gallery-hero">
            <p className="gallery-breadcrumb">Trang chủ / Kho giao diện</p>
            <p className="gallery-eyebrow">Kho giao diện</p>
            <h1>Chọn ngành nghề để xem mẫu website phù hợp</h1>
            <p>
              Kho giao diện được phân loại theo 15 nhóm ngành phổ biến. Mỗi ngành có
              một trang riêng để xem mẫu hiện có, sau này có thể bổ sung thêm nhiều ảnh
              preview dài của các mẫu website khác.
            </p>
          </section>

          <section className="gallery-section">
            <div className="gallery-section-heading">
              <h2>15 hạng mục ngành nghề</h2>
              <p>Chọn ngành phù hợp để mở trang kho giao diện của ngành đó.</p>
            </div>
            <IndustryList industries={industryCatalog} />
          </section>
        </div>
      </div>
    </main>
  );
}
