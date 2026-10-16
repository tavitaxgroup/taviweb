import type { Metadata } from "next";
import {
  Be_Vietnam_Pro,
  Playfair_Display,
  Inter,
  Newsreader,
  Plus_Jakarta_Sans,
  Space_Grotesk,
  Hanken_Grotesk,
  JetBrains_Mono
} from "next/font/google";
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

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken-grotesk",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
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

const fontVariables = `${beVietnamPro.variable} ${playfairDisplay.variable} ${newsreader.variable} ${inter.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${fontVariables} ${beVietnamPro.className}`}>
      <body className={`${fontVariables} ${beVietnamPro.className}`}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          precedence="default"
        />
        {children}
      </body>
    </html>
  );
}

