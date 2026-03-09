import Link from "next/link";
import Card from "@/components/Card";
import { Metadata } from "next";
import HeroSection from "@/components/Hero";

export const metadata: Metadata = {
  title: "Natural Capital ReBank - Tokenizing Nature into an Investable Asset Class",
  description: "NCRB transforms natural capital into transparent, liquid digital assets. Protecting $2.7T at-risk value, unlocking $10T market opportunity through blockchain-powered verification.",
  openGraph: {
    title: "Natural Capital ReBank - Tokenizing Nature",
    description: "Blockchain-powered platform transforming carbon credits, biodiversity, and ecosystem services into institutional-grade digital assets.",
    url: "https://ncrb.world",
    images: [
      {
        url: "/images/ncrb-icon.png",
        width: 845,
        height: 340,
        alt: "NCRB - Natural Capital Tokenization Platform",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      {/* Hero Section with Environmental Background */}
      <HeroSection/>

      {/* Problem Section - Modern Card Layout */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Natural Capital Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over half of global GDP depends on nature, yet markets systematically under-price it—creating massive economic risk and unprecedented opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-3xl mb-6">
                ⚠️
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-4">
                $2.7T
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Economic Risk by 2030</h3>
              <p className="text-gray-600 leading-relaxed">
                At-risk economic value from nature loss and climate impacts on global supply chains.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl mb-6">
                📉
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                $200B
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Annual Finance Gap</h3>
              <p className="text-gray-600 leading-relaxed">
                Biodiversity conservation and ecosystem restoration funding shortfall.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-3xl mb-6">
                💎
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-4">
                $10T
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Market Opportunity</h3>
              <p className="text-gray-600 leading-relaxed">
                Total addressable market for natural capital tokenization globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Grid Layout */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The NCRB Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Institutional-grade blockchain infrastructure transforming natural capital into transparent, liquid, and verifiable digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {[
              { icon: '🔗', title: 'Tokenization Platform', desc: 'Transform credits into blockchain-based digital assets with immutable verification' },
              { icon: '⚡', title: 'Blockchain as a Service', desc: 'White-label infrastructure for corporates to tokenize without building from scratch' },
              { icon: '📊', title: 'Investment Vehicles', desc: 'Curated portfolios delivering uncorrelated returns with ESG alignment' },
              { icon: '💠', title: 'Natural Capital Stablecoins', desc: 'Stable digital assets backed by verified natural capital (roadmap)' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 card-hover border border-gray-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits Row */}
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Platform Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <h4 className="font-semibold text-white mb-2 text-lg">High-Quality Credits</h4>
                <p className="text-green-100 text-sm">Proprietary verification framework ensures only the highest quality assets</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <h4 className="font-semibold text-white mb-2 text-lg">Full Transparency</h4>
                <p className="text-blue-100 text-sm">Immutable audit trails and real-time reporting for all stakeholders</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <h4 className="font-semibold text-white mb-2 text-lg">Instant Liquidity</h4>
                <p className="text-teal-100 text-sm">Fractional ownership and instant settlement for global investors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Asset Types Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Supported Asset Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-asset platform targets <span className="font-bold text-green-600">$1.5 trillion</span> in addressable natural capital markets across 10 distinct asset categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              { icon: '🌱', title: 'Carbon Credits', unit: 'tCO2e', market: '$850B', addressable: '$425B', desc: 'Verified carbon offset credits' },
              { icon: '♻️', title: 'Plastic Credits', unit: 'kg', market: '$150B', addressable: '$75B', desc: 'Plastic waste removal credits' },
              { icon: '🌾', title: 'Nitrogen Credits', unit: 'kg N', market: '$80B', addressable: '$24B', desc: 'Nitrogen pollution reduction' },
              { icon: '💧', title: 'Phosphorus Credits', unit: 'kg P', market: '$60B', addressable: '$18B', desc: 'Phosphorus runoff reduction' },
              { icon: '🚜', title: 'Agricultural Land', unit: 'hectares', market: '$12T', addressable: '$360B', desc: 'Agricultural land parcels' },
              { icon: '⛏️', title: 'Mining Rights', unit: 'hectares', market: '$1.5T', addressable: '$150B', desc: 'Mining rights & mineral deposits' },
              { icon: '💦', title: 'Water Rights', unit: 'm³', market: '$350B', addressable: '$105B', desc: 'Water usage rights' },
              { icon: '⚡', title: 'Renewable Energy', unit: 'MWh', market: '$200B', addressable: '$100B', desc: 'Renewable energy credits' },
              { icon: '🌲', title: 'Forestry', unit: 'hectares', market: '$800B', addressable: '$80B', desc: 'Forestry & timber rights' },
              { icon: '🦋', title: 'Biodiversity Credits', unit: 'hectares', market: '$600B', addressable: '$180B', desc: 'Biodiversity offset credits' }
            ].map((asset, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 card-hover border border-gray-100 text-center">
                <div className="text-5xl mb-3">{asset.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{asset.title}</h3>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
                  {asset.unit}
                </div>
                <div className="mb-3">
                  <div className="text-sm text-gray-500">Market Size</div>
                  <div className="text-xl font-bold text-green-600">{asset.market}</div>
                </div>
                <div className="mb-3">
                  <div className="text-sm text-gray-500">NCRB Target</div>
                  <div className="text-lg font-semibold text-blue-600">{asset.addressable}</div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{asset.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 h-80">
    {/* Left: Stats with clean layout */}
    <div className="flex flex-col justify-between border-l-4 border-green-600 pl-8 py-6">
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-8">Market Metrics</p>
      </div>
      
      <div className="space-y-8">
        <div>
          <div className="text-5xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">$16.5T+</div>
          <p className="text-sm text-gray-600 mt-2">Total Market Size</p>
        </div>
        
        <div>
          <div className="text-5xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">$1.5T+</div>
          <p className="text-sm text-gray-600 mt-2">NCRB Addressable</p>
        </div>
        
        <div>
          <div className="text-5xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">$15B</div>
          <p className="text-sm text-gray-600 mt-2">Year 5 Target (1%)</p>
        </div>
      </div>
    </div>

    {/* Right: Feature highlight */}
    <div className="flex flex-col justify-between border-l-4 border-green-600 pl-8 py-6">
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-8">Architecture</p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="text-4xl font-black text-green-600 flex-shrink-0">245</div>
          <div>
            <p className="text-gray-900 font-semibold leading-tight">Additional Asset Type Slots</p>
            <p className="text-sm text-gray-600 mt-2">Extensible architecture for future growth without core changes</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-green-600 font-bold uppercase tracking-widest">✓ Future-proof Design</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regulatory momentum and maturing blockchain technology create perfect timing for institutional natural capital markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '📜', title: 'Regulatory Tailwinds', items: ['TNFD framework adoption', 'EU CSRD reporting mandates', 'Net-zero commitments'] },
              { icon: '🔬', title: 'Technology Maturity', items: ['Enterprise blockchain proven', 'Smart contract security', 'IoT + satellite integration'] },
              { icon: '💰', title: 'Market Demand', items: ['VCM billions by 2030', 'ESG compliance needs', 'Institutional capital seeking impact'] }
            ].map((col, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="text-6xl mb-6">{col.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/problem-market" className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
              Explore Market Opportunity →
            </Link>
          </div>
        </div>
      </section>

      {/* Investment CTA Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-teal-900"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Investment Opportunity
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass rounded-3xl p-8 card-hover">
                <div className="text-4xl font-bold text-white mb-2">$1M</div>
                <div className="text-green-200">Seed Round</div>
              </div>
              <div className="glass rounded-3xl p-8 card-hover">
                <div className="text-4xl font-bold text-white mb-2">8–12x</div>
                <div className="text-blue-200">Target Multiple</div>
              </div>
              <div className="glass rounded-3xl p-8 card-hover">
                <div className="text-4xl font-bold text-white mb-2">3–5 yrs</div>
                <div className="text-teal-200">Horizon</div>
              </div>
            </div>

            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Strategic capital deployment for platform development, pilot partnerships, regulatory compliance, and market expansion.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/investors" className="bg-white text-green-900 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                View Investment Details
              </Link>
              <Link href="/contact?type=investor" className="glass border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-900 transition-all transform hover:scale-105">
                Request Meeting
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 text-8xl animate-float">💎</div>
          <div className="absolute bottom-10 left-10 text-8xl animate-float" style={{ animationDelay: '1.5s' }}>🌍</div>
        </div>
      </section>
    </main>
  );
}
