import type { Metadata } from "next";
import "./public.css";

export const metadata: Metadata = {
  title: "TaviWeb - Thiết kế website chuyên nghiệp",
  description: "Dynamic demo website renderer for local businesses.",
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="taviweb-public-root" style={{ fontFamily: "var(--font-be-vietnam-pro), 'Be Vietnam Pro', Inter, sans-serif" }}>
      {children}
    </div>
  );
}
