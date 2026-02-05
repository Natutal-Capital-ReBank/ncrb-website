import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Water Purification & Water Credits | NCRB Ventures",
  description:
    "NCRB Water ventures: Clean water initiatives through advanced purification technology. Generating water credits while providing essential resources to communities in need.",
  openGraph: {
    title: "Water Purification & Water Credits | NCRB Ventures",
    description:
      "Clean water initiatives generating water credits while providing essential resources to communities.",
    url: "https://ncrb.world/ventures/water",
  },
};

const benefits = [
  {
    title: "SDG 6 Alignment",
    description: "Directly contributes to UN Sustainable Development Goal 6: Clean Water and Sanitation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Community Impact",
    description: "Provides safe drinking water to underserved communities while creating economic opportunities",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Measurable Outcomes",
    description: "Liters purified, contaminants removed, and health outcomes tracked with IoT monitoring",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Carbon Co-Benefits",
    description: "Reduces emissions from water boiling and bottled water transport in developing regions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const technologies = [
  {
    name: "Reverse Osmosis (RO)",
    description: "Membrane filtration removing 95-99% of dissolved solids, bacteria, and contaminants",
    applications: "Brackish water, seawater desalination, industrial water treatment",
  },
  {
    name: "UV Disinfection",
    description: "Ultraviolet light treatment destroying bacteria, viruses, and pathogens without chemicals",
    applications: "Point-of-use systems, community water systems, hospital facilities",
  },
  {
    name: "Solar-Powered Purification",
    description: "Off-grid water treatment systems powered entirely by solar energy",
    applications: "Rural communities, emergency relief, remote installations",
  },
  {
    name: "Atmospheric Water Generation",
    description: "Extracting water from air humidity in water-scarce regions",
    applications: "Arid regions, island communities, disaster response",
  },
];

export default function WaterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/ventures"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Ventures
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Water Purification & Credits
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Clean water initiatives that generate verified water credits while
                providing essential resources to communities. Addressing water scarcity
                with innovative purification technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/investors"
                  className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Invest in Water
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4">Credit Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">Credit Type</span>
                  <span className="font-medium">Water Credits</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">Unit</span>
                  <span className="font-medium">1,000 Liters (m³)</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">Verification</span>
                  <span className="font-medium">Gold Standard, WASH</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">NCRB Rating</span>
                  <span className="font-medium">A Standard</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">SDG Impact</span>
                  <span className="font-medium">SDG 6, 3, 13</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Water Credits?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Purification Technologies
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We deploy a range of proven water purification technologies
            matched to local conditions and needs.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Applications:</span> {tech.applications}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Impact Metrics
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2B+", label: "People lack safe water", sublabel: "Global challenge" },
              { value: "1M+", label: "Liters purified", sublabel: "NCRB target Year 1" },
              { value: "50+", label: "Communities served", sublabel: "Planned installations" },
              { value: "30%", label: "Carbon co-benefits", sublabel: "Reduced boiling emissions" },
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <p className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</p>
                <p className="font-medium text-gray-900">{metric.label}</p>
                <p className="text-sm text-gray-500">{metric.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Credit Framework Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Water Credit Framework
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Measurement",
                description: "IoT-enabled flow meters track every liter purified with real-time data transmission",
                icon: "📊",
              },
              {
                title: "Verification",
                description: "Third-party auditors verify water quality and volume against international standards",
                icon: "✓",
              },
              {
                title: "Tokenization",
                description: "Verified water credits are tokenized on NCRB platform for transparent trading",
                icon: "🔗",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Make Water Accessible</h2>
          <p className="text-white/90 mb-8 text-lg">
            Join us in bringing clean water to communities while generating
            verified environmental credits. Partner with NCRB to develop water
            projects that create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partnership"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Become a Project Partner
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
