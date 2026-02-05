import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ventures | NCRB - Natural Capital ReBank",
  description:
    "NCRB Ventures: Investing in biochar carbon credits, solar renewable energy, and water purification projects. Real-world assets backed by natural capital.",
  openGraph: {
    title: "NCRB Ventures - Real World Asset Projects",
    description:
      "Investing in biochar, solar, and water purification projects that generate verified environmental credits.",
    url: "https://ncrb.world/ventures",
  },
};

const ventures = [
  {
    title: "Biochar",
    href: "/ventures/biochar",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    description:
      "Carbon sequestration through biochar production. Locking carbon in soil for centuries while improving agricultural productivity.",
    credits: "Carbon Credits",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Solar",
    href: "/ventures/solar",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description:
      "Renewable energy generation through solar installations. Clean power production with verified carbon credit generation.",
    credits: "Renewable Energy & Carbon Credits",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Water Purification",
    href: "/ventures/water",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description:
      "Clean water initiatives through advanced purification technology. Generating water credits while providing essential resources to communities.",
    credits: "Water Credits",
    color: "from-blue-400 to-cyan-500",
  },
];

export default function VenturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            NCRB{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Ventures
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Investing in real-world assets that generate verified environmental credits.
            Our ventures create measurable impact while building a diversified portfolio
            of natural capital assets.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
              Carbon Sequestration
            </span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium">
              Renewable Energy
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
              Water Resources
            </span>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {ventures.map((venture) => (
              <Link
                key={venture.title}
                href={venture.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${venture.color} p-8 text-white`}>
                  <div className="flex justify-between items-start">
                    {venture.icon}
                    <svg
                      className="w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mt-4">{venture.title}</h2>
                  <p className="text-white/80 text-sm mt-1">{venture.credits}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{venture.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ventures Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why NCRB Ventures?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Verified Credits",
                description: "All projects generate credits verified by international standards (Verra, Gold Standard, ISO 14064)",
              },
              {
                title: "Tokenized Assets",
                description: "Credits are tokenized on blockchain for transparency, liquidity, and fractional ownership",
              },
              {
                title: "Real Impact",
                description: "Measurable environmental outcomes with third-party verification and monitoring",
              },
              {
                title: "Portfolio Diversification",
                description: "Multiple asset classes reduce risk while maximizing environmental impact",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-gray-600 mb-8">
            Interested in developing natural capital projects or investing in our ventures?
            We&apos;re looking for project developers, landowners, and institutional investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partnership"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Become a Partner
            </Link>
            <Link
              href="/investors"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all"
            >
              Investor Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
