import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Builder Agent Website",
  description: "Dynamic demo website renderer for local businesses.",
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beVietnamPro.className}>
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  );
}

