import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/providers/ToastProvider";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaviWeb - Thiết kế website & Giải pháp AI/CRM doanh nghiệp",
  description: "Nền tảng thiết kế website tự động tích hợp AI Chatbot, CRM, Booking, CMS & LMS.",
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${inter.variable} ${robotoMono.variable} h-full antialiased font-sans`}
    >
      <body className="h-full w-full">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
