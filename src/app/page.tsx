import Link from "next/link";

export default function HomePage() {
  return (
    <main className="system-home">
      <section>
        <p className="eyebrow">Builder Agent Website</p>
        <h1>Demo renderer is ready</h1>
        <p>
          Dùng <code>/demo/&#123;place_id&#125;</code> để render website demo theo dữ liệu lead từ
          Supabase. Khi chưa có cấu hình Supabase, hệ thống dùng mock data trong{" "}
          <code>src/lib/demo/mockDemoData.ts</code>.
        </p>
        <Link href="/demo/mock-nha_khoa">Mở demo nha khoa</Link>
      </section>
    </main>
  );
}
