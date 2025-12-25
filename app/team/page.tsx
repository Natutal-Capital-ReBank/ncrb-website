import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team",
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
    title: "Leadership Team | Natural Capital ReBank",
    description: "Meet our founding team: experts in sustainable finance, blockchain architecture, and environmental science driving the natural capital tokenization revolution.",
    url: "https://naturalcapitalrebank.com/team",
    images: [
      {
        url: "/images/ncrb-icon.png",
        width: 845,
        height: 340,
        alt: "NCRB Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership Team | Natural Capital ReBank",
    description: "World-class expertise in ESG finance, blockchain technology, and environmental sciences.",
    images: ["/images/ncrb-icon.png"],
  },
};

export default function Team() {
  const team = [
    {
      name: "Dr. Rubens Talukder",
      role: "Managing Partner",
      specialty: "Finance",
      image: "/images/Rubens.png",
      imagePosition: "object-top",
      bio: "Deep expertise in sustainable finance and institutional investment strategies, with a proven track record in ESG fund management and nature-based solutions across global markets.",
      linkedin: "https://linkedin.com/in/rubens-t-2145982a",
      twitter: "https://x.com/RubensTalukder",
    },
    {
      name: "Zaki Alam",
      role: "Managing Partner",
      specialty: "Technology",
      image: "/images/Zaki.jpg",
      imagePosition: "object-top",
      bio: "Pioneer in blockchain architecture and tokenization frameworks, bringing enterprise-grade technical leadership from DeFi and real-world asset markets with institutional security standards.",
      linkedin: "https://linkedin.com/in/ZakiAlam",
      twitter: "https://x.com/AlamZaki",
    },
    {
      name: "Arno Neumann",
      role: "Managing Partner",
      specialty: "Environmental Science",
      image: "/images/Arno.png",
      imagePosition: "object-[center_20%]",
      bio: "Leading authority in natural capital accounting and ecosystem services valuation, with extensive experience in carbon markets, regulatory compliance, and environmental impact assessment.",
      linkedin: "https://linkedin.com/in/arno-neumann-a6913b19",
      twitter: "https://x.com/ArnoNeumann",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Natural Capital ReBank",
    "url": "https://naturalcapitalrebank.com",
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
            Leadership Team
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
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover border border-gray-100"
              >
                <div className="relative w-full h-80 bg-gradient-to-br from-green-100 to-blue-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.imagePosition}`}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors group"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-gray-900 hover:bg-gray-700 flex items-center justify-center transition-colors group"
                        aria-label={`${member.name} X Profile`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-0">
                    {member.role}
                  </p>
                  <p className="text-base font-semibold text-green-600 mb-4">
                    {member.specialty}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
