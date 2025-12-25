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
  metadataBase: new URL('https://naturalcapitalrebank.com'),
  title: {
    default: 'Natural Capital ReBank - Tokenizing Nature into an Investable Asset Class',
    template: '%s | Natural Capital ReBank',
  },
  description: "NCRB is a blockchain-powered infrastructure that transforms natural capital credits and ecosystem services into transparent, liquid digital instruments for institutional investors.",
  keywords: [
    'natural capital',
    'carbon credits',
    'tokenization',
    'blockchain',
    'climate finance',
    'biodiversity credits',
    'ESG investing',
    'sustainable finance',
    'RWA tokenization',
    'environmental assets',
    'carbon markets',
    'ecosystem services',
    'climate tech',
    'green finance',
    'impact investing',
  ],
  authors: [{ name: 'Natural Capital ReBank' }],
  creator: 'Natural Capital ReBank',
  publisher: 'Natural Capital ReBank',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://naturalcapitalrebank.com',
    title: 'Natural Capital ReBank - Tokenizing Nature into an Investable Asset Class',
    description: 'Blockchain-powered infrastructure transforming natural capital into transparent, liquid digital instruments. $10T market opportunity in carbon, biodiversity, and ecosystem services.',
    siteName: 'Natural Capital ReBank',
    images: [
      {
        url: '/images/ncrb-logo.png',
        width: 845,
        height: 340,
        alt: 'Natural Capital ReBank Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natural Capital ReBank - Tokenizing Nature',
    description: 'Blockchain-powered natural capital tokenization platform. Protecting $2.7T at-risk value, unlocking $10T opportunity.',
    images: ['/images/ncrb-logo.png'],
    creator: '@NCRBank',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://naturalcapitalrebank.com',
  },
  category: 'finance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Natural Capital ReBank",
              "alternateName": "NCRB",
              "url": "https://naturalcapitalrebank.com",
              "logo": "https://naturalcapitalrebank.com/images/ncrb-logo.png",
              "description": "Blockchain-powered infrastructure transforming natural capital credits and ecosystem services into transparent, liquid digital instruments.",
              "sameAs": ["https://www.linkedin.com/company/natural-capital-rebank/"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
