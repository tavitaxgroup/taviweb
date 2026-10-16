import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display, Inter, Newsreader } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap"
});

const newsreader = Newsreader({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-newsreader",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
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
    <html lang="vi" className={`${beVietnamPro.variable} ${playfairDisplay.variable} ${newsreader.variable} ${inter.variable} ${beVietnamPro.className}`}>
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} ${newsreader.variable} ${inter.variable} ${beVietnamPro.className}`}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          precedence="default"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          precedence="default"
        />
        {children}
      </body>
    </html>
  );
}

