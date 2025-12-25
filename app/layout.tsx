import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Natural Capital ReBank - Tokenizing Nature into an Investable Asset Class",
  description: "NCRB is a blockchain-powered infrastructure that transforms natural capital credits and ecosystem services into transparent, liquid digital instruments for institutional investors.",
  keywords: "natural capital, carbon credits, tokenization, blockchain, climate finance, biodiversity, ESG, sustainable finance, RWA",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
