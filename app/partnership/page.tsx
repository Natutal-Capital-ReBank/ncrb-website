import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partnership Opportunities | NCRB - Natural Capital ReBank",
  description:
    "Partner with NCRB to develop natural capital projects, integrate our tokenization platform, or distribute verified environmental credits. Multiple partnership models available.",
  openGraph: {
    title: "Partnership Opportunities | NCRB",
    description:
      "Partner with NCRB to develop natural capital projects and distribute verified environmental credits.",
    url: "https://ncrb.world/partnership",
  },
};

const partnershipTypes = [
  {
    title: "Project Developer",
    description:
      "Develop carbon, renewable energy, or water projects using NCRB's infrastructure for credit verification and tokenization.",
    benefits: [
      "Access to NCRB tokenization platform",
      "Streamlined MRV and verification",
      "Global buyer network access",
      "Technical and regulatory support",
    ],
    ideal: "Carbon project developers, renewable energy companies, water infrastructure firms",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Registry Partner",
    description:
      "Integrate your certification registry with NCRB's blockchain infrastructure for enhanced transparency and liquidity.",
    benefits: [
      "Blockchain-backed certificate tracking",
      "Expanded market access",
      "API integration support",
      "Co-marketing opportunities",
    ],
    ideal: "Certification bodies, standards organizations, verification registries",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Technology Partner",
    description:
      "Integrate MRV technology, IoT sensors, or satellite monitoring solutions with NCRB's verification infrastructure.",
    benefits: [
      "Platform integration opportunities",
      "Joint solution development",
      "Access to project pipeline",
      "Revenue sharing models",
    ],
    ideal: "MRV technology providers, satellite imagery companies, IoT sensor manufacturers",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Distribution Partner",
    description:
      "Offer NCRB tokenized credits to your institutional clients, corporate buyers, or retail investors.",
    benefits: [
      "White-label solutions available",
      "Competitive commission structure",
      "Marketing and sales support",
      "Regulatory compliance guidance",
    ],
    ideal: "Brokers, wealth managers, sustainability consultants, corporate advisory firms",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partnership Opportunities
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join the NCRB ecosystem to develop natural capital projects, integrate
            our platform, or distribute tokenized environmental credits to your clients.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partnership Models
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl flex items-center justify-center text-green-600">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{type.description}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Partner Benefits</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">Ideal for:</span> {type.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partnership Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Initial Discussion",
                description: "Share your goals and explore partnership opportunities with our team",
              },
              {
                step: 2,
                title: "Due Diligence",
                description: "Mutual assessment of capabilities, alignment, and potential synergies",
              },
              {
                step: 3,
                title: "Agreement",
                description: "Formalize partnership terms, integration requirements, and timelines",
              },
              {
                step: 4,
                title: "Launch & Support",
                description: "Go-to-market with ongoing technical and business support",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Partner With NCRB?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cutting-Edge Platform",
                description:
                  "Blockchain-based infrastructure for transparent, liquid, and compliant environmental credit markets.",
              },
              {
                title: "Global Network",
                description:
                  "Access to institutional investors, corporate buyers, and project developers across multiple regions.",
              },
              {
                title: "Regulatory Expertise",
                description:
                  "Navigate complex carbon market regulations with our compliance and legal support.",
              },
              {
                title: "Standards Alignment",
                description:
                  "SBTi, Paris Agreement Article 6, ISO 14064, VCMI, and other major framework compliance.",
              },
              {
                title: "Technical Support",
                description:
                  "Dedicated integration support, API documentation, and developer resources.",
              },
              {
                title: "Revenue Opportunities",
                description:
                  "Multiple revenue models including revenue sharing, transaction fees, and white-label solutions.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Let&apos;s discuss how we can work together to scale natural capital markets
            and drive meaningful environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Contact Partnership Team
            </Link>
            <Link
              href="/investors"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Investor Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
