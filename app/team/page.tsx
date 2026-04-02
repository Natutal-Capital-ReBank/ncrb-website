// app/team/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import TeamCardClient from "./team-card";

export const metadata: Metadata = {
  title: "Managing Partners",
  description: "Meet the NCRB founding team: Dr. Rubens Talukder (Finance), Zaki Alam (Technology), and Arno Neumann (Environmental Science). World-class expertise in ESG finance, blockchain technology, and natural capital accounting.",
  keywords: [
    "NCRB team",
    "natural capital experts",
    "blockchain leadership",
    "ESG fund management",
    "environmental finance",
    "carbon markets",
    "tokenization experts",
    "climate fintech founders",
  ],
  openGraph: {
    title: "Managing Partners | Natural Capital ReBank",
    description: "Meet our founding team: experts in sustainable finance, blockchain architecture, and environmental science driving the natural capital tokenization revolution.",
    url: "https://ncrb.world/team",
    images: [
      {
        url: "/images/ncrb-icon.png",
        width: 845,
        height: 340,
        alt: "NCRB Managing Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Managing Partners | Natural Capital ReBank",
    description: "World-class expertise in ESG finance, blockchain technology, and environmental sciences.",
    images: ["/images/ncrb-icon.png"],
  },
};

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  imagePosition: string;
  bio: string;
  linkedin: string;
  twitter: string;
  qrCode: string;
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "Zaki Alam",
      role: "CEO",
      specialty: "Technology",
      image: "/images/Zaki.jpg",
      imagePosition: "object-top",
      bio: "Pioneer in blockchain architecture and tokenization frameworks, bringing enterprise-grade technical leadership from DeFi and real-world asset markets with institutional security standards.",
      linkedin: "https://linkedin.com/in/ZakiAlam",
      twitter: "https://x.com/AlamZaki",
      qrCode: "/images/qr/zaki_qrcode.svg",
    },
    {
      name: "Dr. Rubens Talukder",
      role: "COO",
      specialty: "Finance",
      image: "/images/Rubens.png",
      imagePosition: "object-top",
      bio: "Deep expertise in sustainable finance and institutional investment strategies, with a proven track record in ESG fund management and nature-based solutions across global markets.",
      linkedin: "https://linkedin.com/in/rubens-t-2145982a",
      twitter: "https://x.com/RubensTalukder",
      qrCode: "/images/qr/rubens_qrcode.svg",
    },
    {
      name: "Arno Neumann",
      role: "CDO",
      specialty: "Environmental Science",
      image: "/images/Arno.png",
      imagePosition: "object-top",
      bio: "Leading authority in natural capital accounting and ecosystem services valuation, with extensive experience in carbon markets, regulatory compliance, and environmental impact assessment.",
      linkedin: "https://linkedin.com/in/arno-neumann-a6913b19",
      twitter: "https://x.com/ArnoNeumann",
      qrCode: "/images/qr/arno_qrcode.svg",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Natural Capital ReBank",
    "url": "https://ncrb.world",
    "employee": team.map((member) => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "worksFor": {
        "@type": "Organization",
        "name": "Natural Capital ReBank",
      },
      "sameAs": [member.linkedin, member.twitter],
      "description": member.bio,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      {/* Structured Data for SEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-teal-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Managing Partners
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
            World-class expertise in ESG finance, blockchain technology, and environmental sciences.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, index) => (
              <TeamCardClient key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}