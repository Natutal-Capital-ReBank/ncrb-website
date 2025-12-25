import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tokenizing Nature into an
              <br />
              <span className="gradient-accent bg-clip-text text-transparent">
                Investable Asset Class
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Protecting $2.7T in at-risk economic value and unlocking the $10T natural capital opportunity through blockchain-powered verification and institutional-grade infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/investors" variant="primary" size="lg">
                Download Investment Deck
              </Button>
              <Button href="/contact?type=investor" variant="outline" size="lg">
                Schedule Investor Call
              </Button>
            </div>
            <div className="mt-8 text-gray-300 text-sm">
              <p>Blockchain-powered verification • Natural capital assets beyond carbon • Institutional-grade infrastructure</p>
            </div>
          </div>
        </div>
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl animate-float">🌱</div>
          <div className="absolute top-40 right-20 text-6xl animate-float" style={{ animationDelay: '1s' }}>🌳</div>
          <div className="absolute bottom-20 left-1/4 text-6xl animate-float" style={{ animationDelay: '2s' }}>🌊</div>
          <div className="absolute bottom-40 right-1/3 text-6xl animate-float" style={{ animationDelay: '3s' }}>🦋</div>
        </div>
      </section>

      {/* Problem → Opportunity Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Natural Capital Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over half of global GDP depends on nature, yet markets under-price it—leading to massive economic risk and unprecedented opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card hover gradient>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">$2.7T</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Economic Risk by 2030</h3>
                <p className="text-gray-600">
                  At-risk economic value from nature loss and climate impacts on global supply chains.
                </p>
              </div>
            </Card>

            <Card hover gradient>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">$200B</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Biodiversity Finance Gap</h3>
                <p className="text-gray-600">
                  Annual funding shortfall to meet biodiversity conservation targets and ecosystem restoration.
                </p>
              </div>
            </Card>

            <Card hover gradient>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">$10T</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Capital Opportunity</h3>
                <p className="text-gray-600">
                  Total addressable market for natural capital and ecosystem services tokenization.
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Challenges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fragmented Carbon Markets</h4>
                  <p className="text-gray-600 text-sm">Slow manual verification, transparency gaps, and double-counting risks plague existing systems.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Verification Crisis</h4>
                  <p className="text-gray-600 text-sm">High-quality, independently verifiable credits are scarce and hard to access.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Supply Chain Risk</h4>
                  <p className="text-gray-600 text-sm">Corporates face regulatory pressure but lack reliable mechanisms for ESG compliance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Limited Asset Classes</h4>
                  <p className="text-gray-600 text-sm">Focus on carbon alone ignores soil, biodiversity, water, plastic, and SAF opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What NCRB Does Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NCRB transforms natural capital into transparent, liquid, and verifiable digital assets through institutional-grade blockchain infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-3xl">
                🔗
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tokenization Platform</h3>
              <p className="text-gray-600 text-sm">
                Transform natural capital credits into blockchain-based digital assets with immutable verification.
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-3xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blockchain as a Service</h3>
              <p className="text-gray-600 text-sm">
                White-label infrastructure enabling corporates and institutions to tokenize assets without building from scratch.
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-3xl">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Vehicles</h3>
              <p className="text-gray-600 text-sm">
                Curated portfolios and institutional products delivering uncorrelated returns with ESG alignment.
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-3xl">
                💎
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Capital Stablecoins</h3>
              <p className="text-gray-600 text-sm">
                Roadmap: Stable digital assets backed by verified natural capital for enhanced liquidity and trust.
              </p>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">✓</div>
                  <h4 className="font-semibold text-gray-900">High-Quality Credits</h4>
                </div>
                <p className="text-gray-600 text-sm">Proprietary verification framework ensures only the highest quality assets enter the platform.</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">✓</div>
                  <h4 className="font-semibold text-gray-900">Transparency</h4>
                </div>
                <p className="text-gray-600 text-sm">Blockchain provides immutable audit trails and real-time reporting for all stakeholders.</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">✓</div>
                  <h4 className="font-semibold text-gray-900">Liquidity</h4>
                </div>
                <p className="text-gray-600 text-sm">Tokenization enables fractional ownership and instant settlement for global investors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regulatory momentum and maturing blockchain technology create the perfect timing for institutional natural capital markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Tailwinds</h3>
              <p className="text-gray-600 mb-4">
                TNFD, CSRD, and global net-zero pledges mandate corporate nature disclosures and climate action.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• TNFD framework adoption accelerating</li>
                <li>• EU CSRD requiring sustainability reporting</li>
                <li>• Net-zero commitments from Fortune 500s</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Maturity</h3>
              <p className="text-gray-600 mb-4">
                Blockchain infrastructure has evolved to institutional-grade reliability, security, and compliance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Enterprise blockchain platforms proven</li>
                <li>• Smart contract security audited</li>
                <li>• IoT + satellite verification integrated</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Demand</h3>
              <p className="text-gray-600 mb-4">
                Investors seek uncorrelated returns while corporates need verified ESG solutions for compliance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• VCM projected to reach billions by 2030</li>
                <li>• ESG mandates driving corporate demand</li>
                <li>• Institutional capital seeking impact</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/problem-market" variant="primary" size="lg">
              Learn More About Our Vision
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Building the Future Together</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilot partnerships in development with Fortune 500 companies, government agencies, and leading environmental standards bodies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {/* Placeholder for partner logos */}
            <div className="text-center text-gray-400 font-semibold">Partner 1</div>
            <div className="text-center text-gray-400 font-semibold">Partner 2</div>
            <div className="text-center text-gray-400 font-semibold">Partner 3</div>
            <div className="text-center text-gray-400 font-semibold">Partner 4</div>
          </div>
        </div>
      </section>

      {/* Investment CTA Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Investment Opportunity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">$1M</div>
              <div className="text-gray-200">Seed Round</div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">8–12x</div>
              <div className="text-gray-200">Target Multiple</div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">3–5 yrs</div>
              <div className="text-gray-200">Investment Horizon</div>
            </div>
          </div>
          <p className="text-xl text-gray-200 mb-8">
            Platform development • Strategic pilots • Regulatory compliance • Market expansion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/investors" variant="primary" size="lg">
              View Investment Details
            </Button>
            <Button href="/contact?type=investor" variant="outline" size="lg">
              Request Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
