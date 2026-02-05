import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advisory Board | NCRB - Natural Capital ReBank",
  description:
    "Meet the NCRB Advisory Board - experts in carbon markets, blockchain technology, sustainable finance, and environmental policy guiding our strategic direction.",
  openGraph: {
    title: "Advisory Board | NCRB",
    description:
      "Expert advisors in carbon markets, blockchain, sustainable finance, and environmental policy.",
    url: "https://ncrb.world/advisors",
  },
};

const expertiseAreas = [
  {
    area: "Carbon Markets",
    description: "Deep expertise in voluntary and compliance carbon markets, credit verification, and market mechanisms",
    icon: "🌿",
  },
  {
    area: "Blockchain & Web3",
    description: "Technical knowledge in tokenization, smart contracts, DeFi, and blockchain infrastructure",
    icon: "⛓️",
  },
  {
    area: "Sustainable Finance",
    description: "Experience with ESG investing, impact funds, green bonds, and climate finance structures",
    icon: "💚",
  },
  {
    area: "Environmental Policy",
    description: "Regulatory expertise in climate policy, international agreements, and environmental law",
    icon: "📜",
  },
  {
    area: "Technology & Startups",
    description: "Track record building and scaling technology companies in emerging markets",
    icon: "🚀",
  },
  {
    area: "Institutional Investing",
    description: "Experience with asset management, institutional due diligence, and portfolio construction",
    icon: "🏛️",
  },
];

export default function AdvisorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advisory Board
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our advisors bring decades of experience in carbon markets, blockchain technology,
            sustainable finance, and environmental policy to guide NCRB&apos;s strategic direction.
          </p>
        </div>
      </section>

      {/* Advisory Board Placeholder */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Building Our Advisory Network
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are actively building our advisory board with industry leaders.
              Advisor profiles will be published as partnerships are finalized.
            </p>
          </div>

          {/* Placeholder Advisory Board Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-1">Coming Soon</h3>
                <p className="text-gray-400 text-sm">Advisor Profile</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Areas of Expertise
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We seek advisors with deep knowledge in the following domains
            critical to NCRB&apos;s mission.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.area}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Advisory Board Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Interested in Advising NCRB?
                </h2>
                <p className="text-white/90 mb-6">
                  We&apos;re looking for experienced professionals who share our vision
                  of transparent, accessible natural capital markets. Advisory roles
                  include strategic guidance, network access, and equity participation.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Contact Us
                </Link>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-1">Strategic Guidance</h3>
                  <p className="text-white/80 text-sm">
                    Quarterly advisory sessions and ad-hoc consultations on key decisions
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-1">Network Access</h3>
                  <p className="text-white/80 text-sm">
                    Introductions to partners, investors, and industry stakeholders
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-1">Equity Participation</h3>
                  <p className="text-white/80 text-sm">
                    Advisory shares with vesting aligned to long-term engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Link Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Meet the Core Team</h2>
          <p className="text-gray-600 mb-6">
            Learn about the founders and team members building NCRB.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
          >
            View Team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
