import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neoeng.co"),
  title: "Neoeng Engenharia | Execução Técnica de Obras Complexas em Fortaleza",
  description: "Execução técnica e gestão de obras comerciais, industriais e residenciais em Fortaleza, com controle físico-financeiro, transparência e acompanhamento digital pelo NeoFlow.",
  other: {
    "build-version": "2026-05-19-v1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-deep-navy relative">
        <svg
          className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-5"
          style={{ mixBlendMode: "overlay" }}
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {children}
      </body>
    </html>
  );
}
