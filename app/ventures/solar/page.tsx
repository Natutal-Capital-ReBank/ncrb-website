import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Energy & Carbon Credits | NCRB Ventures",
  description:
    "NCRB Solar ventures: Renewable energy generation with carbon credit co-benefits. Investing in solar installations that produce clean power and verified environmental credits.",
  openGraph: {
    title: "Solar Energy & Carbon Credits | NCRB Ventures",
    description:
      "Renewable energy generation with carbon credit co-benefits. Clean power production with verified carbon credits.",
    url: "https://ncrb.world/ventures/solar",
  },
};

const benefits = [
  {
    title: "Dual Revenue Streams",
    description: "Generate income from both energy sales and carbon credit sales for optimized returns",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Grid Independence",
    description: "Reduce reliance on fossil fuel-based grid power while supporting energy transition",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Scalable Projects",
    description: "From rooftop installations to utility-scale solar farms with proven technology",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "25+ Year Lifespan",
    description: "Long-term asset with predictable credit generation and established degradation curves",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const creditTypes = [
  {
    type: "Renewable Energy Certificates (RECs)",
    description: "1 REC = 1 MWh of renewable electricity generated and delivered to the grid",
    standard: "Green-e, I-REC Standard",
  },
  {
    type: "Carbon Avoidance Credits",
    description: "Credits for avoided emissions by displacing fossil fuel electricity generation",
    standard: "Verra VCS, Gold Standard",
  },
  {
    type: "Article 6 ITMOs",
    description: "Internationally Transferred Mitigation Outcomes for country-level NDC achievement",
    standard: "Paris Agreement Article 6",
  },
];

export default function SolarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
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
                Solar Energy & Carbon Credits
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Clean renewable energy generation paired with verified carbon credits.
                Our solar projects deliver both environmental impact and attractive
                returns through dual revenue streams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/investors"
                  className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Invest in Solar
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4">Project Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">Credit Types</span>
                  <span className="font-medium">RECs + Carbon</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">Project Scale</span>
                  <span className="font-medium">1 MW - 100+ MW</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">Certification</span>
                  <span className="font-medium">I-REC, Gold Standard</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">NCRB Rating</span>
                  <span className="font-medium">AA High Quality</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Regions</span>
                  <span className="font-medium">Asia, Africa, Americas</span>
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
            Why Solar Ventures?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Types Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Credit Generation
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Solar projects can generate multiple types of environmental credits,
            maximizing value and impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {creditTypes.map((credit, index) => (
              <div key={index} className="bg-gradient-to-b from-yellow-50 to-white rounded-xl p-6 border border-yellow-100">
                <h3 className="font-semibold text-gray-900 mb-3">{credit.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{credit.description}</p>
                <div className="text-xs text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full inline-block">
                  {credit.standard}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Pipeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Project Pipeline
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: "Southeast Asia",
                capacity: "50 MW",
                status: "In Development",
                description: "Utility-scale solar farm with community benefit sharing program",
              },
              {
                region: "East Africa",
                capacity: "25 MW",
                status: "Feasibility",
                description: "Grid-connected solar with battery storage for rural electrification",
              },
              {
                region: "Latin America",
                capacity: "100 MW",
                status: "Planning",
                description: "Large-scale solar with agrivoltaics integration",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-gray-900">{project.region}</h3>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-2xl font-bold text-yellow-600 mb-2">{project.capacity}</p>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Power the Clean Energy Transition</h2>
          <p className="text-white/90 mb-8 text-lg">
            Join us in developing solar projects that generate clean energy and
            verified environmental credits. Opportunities available for project
            developers, landowners, and institutional investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partnership"
              className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:shadow-lg transition-all"
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
