import type { Metadata } from "next";
import { Playfair_Display, Outfit, Noto_Serif_SC, Noto_Sans_SC, Fira_Code } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mooov - Mastering Claude/AI",
  description: "A comprehensive bilingual tutorial on leveraging Claude AI for business productivity - by Mooov AI Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${playfair.variable} ${outfit.variable} ${notoSerif.variable} ${notoSans.variable} ${firaCode.variable} antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
