import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Builder Agent Website",
  description: "Dynamic demo website renderer for local businesses."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
