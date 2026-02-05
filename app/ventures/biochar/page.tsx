import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biochar Carbon Credits | NCRB Ventures",
  description:
    "NCRB Biochar ventures: Long-term carbon sequestration through biochar production. Generating high-quality carbon credits while improving soil health and agricultural productivity.",
  openGraph: {
    title: "Biochar Carbon Credits | NCRB Ventures",
    description:
      "Long-term carbon sequestration through biochar production. High-quality carbon credits with 100+ year permanence.",
    url: "https://ncrb.world/ventures/biochar",
  },
};

const benefits = [
  {
    title: "100+ Year Permanence",
    description: "Biochar locks carbon in soil for centuries, far exceeding typical carbon credit requirements",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Soil Health",
    description: "Improves water retention, nutrient availability, and microbial activity in agricultural soils",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Waste Utilization",
    description: "Converts agricultural waste and biomass into valuable carbon storage medium",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "SBTi Aligned",
    description: "Meets Science Based Targets initiative requirements for high-permanence carbon removal",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const process = [
  {
    step: 1,
    title: "Biomass Collection",
    description: "Agricultural waste, forestry residues, and dedicated energy crops are collected from partner farms and facilities.",
  },
  {
    step: 2,
    title: "Pyrolysis",
    description: "Biomass is converted to biochar through controlled pyrolysis at 400-700°C in oxygen-limited conditions.",
  },
  {
    step: 3,
    title: "Quality Testing",
    description: "Biochar is tested for carbon content, stability, and safety per IBI and EBC standards.",
  },
  {
    step: 4,
    title: "Soil Application",
    description: "Certified biochar is applied to agricultural land with GPS tracking and documentation.",
  },
  {
    step: 5,
    title: "Credit Issuance",
    description: "Carbon credits are issued based on verified sequestration, then tokenized on NCRB platform.",
  },
];

export default function BiocharPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
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
                Biochar Carbon Credits
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Long-term carbon sequestration through biochar production. Locking carbon
                in soil for centuries while improving agricultural productivity and
                generating premium carbon credits.
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
                  Invest in Biochar
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4">Credit Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">Credit Type</span>
                  <span className="font-medium">Carbon Removal (CDR)</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">Permanence</span>
                  <span className="font-medium">100+ years</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">Certification</span>
                  <span className="font-medium">Puro.earth, Verra</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80">NCRB Rating</span>
                  <span className="font-medium">AAA Premium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">SBTi Eligible</span>
                  <span className="font-medium">Yes - BVCM & Residual</span>
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
            Why Biochar?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            From Biomass to Carbon Credits
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our rigorous process ensures every biochar credit represents genuine,
            permanent carbon sequestration with full traceability.
          </p>
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300" />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Certifications & Standards
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Puro.earth",
                description: "Leading biochar carbon removal certification with stringent permanence and additionality requirements.",
              },
              {
                name: "European Biochar Certificate (EBC)",
                description: "Quality standard ensuring biochar safety and carbon stability for agricultural applications.",
              },
              {
                name: "ISO 14064-2",
                description: "International standard for GHG project quantification and reporting at the project level.",
              },
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Whether you&apos;re a landowner with biomass resources, an investor seeking
            high-permanence carbon credits, or a corporation with net-zero commitments,
            we&apos;d love to hear from you.
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
