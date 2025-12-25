import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "For Investors - Natural Capital ReBank",
  description: "Investment opportunity in the $10T natural capital market through blockchain-powered infrastructure.",
};

export default function Investors() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Investment Opportunity
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Capture the $10T natural capital opportunity through institutional-grade blockchain infrastructure and diversified revenue streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#" variant="primary" size="lg">
                Download Full Deck
              </Button>
              <Button href="/contact?type=investor" variant="outline" size="lg">
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Thesis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NCRB combines massive TAM, regulatory tailwinds, proprietary verification infrastructure, and dual revenue models to deliver outsized returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card hover gradient>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Massive Addressable Market</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• $10T+ natural capital asset opportunity globally</li>
                <li>• VCM projected $10-40B by 2030 (carbon alone)</li>
                <li>• $200B/year biodiversity finance gap</li>
                <li>• Underserved segments: soil, water, plastic, SAF</li>
              </ul>
            </Card>

            <Card hover gradient>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">⚡ Perfect Timing</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• TNFD and CSRD mandates driving corporate demand</li>
                <li>• Net-zero commitments from Fortune 500s</li>
                <li>• Blockchain infrastructure now institutional-grade</li>
                <li>• Integrity crisis creating demand for verified solutions</li>
              </ul>
            </Card>

            <Card hover gradient>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">🛡️ Proprietary Moat</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Proprietary verification & governance framework</li>
                <li>• Integrated IoT, satellite, and registry infrastructure</li>
                <li>• Smart contracts enabling fractional ownership</li>
                <li>• Multi-asset architecture (carbon, biodiversity, etc.)</li>
              </ul>
            </Card>

            <Card hover gradient>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">💰 Dual Revenue Model</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• BaaS subscriptions (70% gross margin)</li>
                <li>• Asset management fees (1.5-2% of AUM)</li>
                <li>• Trading commissions (0.5-1% per transaction)</li>
                <li>• Scalable with minimal marginal cost</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Round & Use of Funds */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seed Round: $1M
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic capital deployment to build platform, secure pilots, and achieve regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Use of Funds</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">Platform Development</span>
                    <span className="font-bold text-green-600">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Core infrastructure, smart contracts, security audits</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">Sales & Marketing</span>
                    <span className="font-bold text-blue-600">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Pilot partnerships, market entry, brand positioning</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">Legal & Compliance</span>
                    <span className="font-bold text-teal-600">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-teal-600 h-3 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Regulatory clearance, multi-jurisdiction licensing</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">Operations & Team</span>
                    <span className="font-bold text-orange-600">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-orange-600 h-3 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Key hires, infrastructure, working capital</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">12-Month Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-bold">Q1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Platform MVP Launch</h4>
                    <p className="text-sm text-gray-600">Core tokenization engine, registry integrations, dashboard</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">Q2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pilot Partnerships</h4>
                    <p className="text-sm text-gray-600">2-3 Fortune 500 BaaS clients, first credit tokenization</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-teal-600 font-bold">Q3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
                    <p className="text-sm text-gray-600">US, EU licensing secured; TNFD alignment certified</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 font-bold">Q4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Series A Readiness</h4>
                    <p className="text-sm text-gray-600">$10M+ AUM, proven unit economics, Series A pitch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economics & Growth */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Economics & Growth Trajectory
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-margin revenue streams with capital-efficient scaling and predictable AUM growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card hover gradient className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Revenue Levers</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Management Fees</span>
                  <span className="text-sm font-semibold text-gray-900">1.5-2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Trading Commission</span>
                  <span className="text-sm font-semibold text-gray-900">0.5-1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">BaaS Subscriptions</span>
                  <span className="text-sm font-semibold text-gray-900">$50-200K</span>
                </div>
              </div>
            </Card>

            <Card hover gradient className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Margin Profile</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">BaaS Gross Margin</span>
                  <span className="text-sm font-semibold text-green-600">~70%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">AUM Fees Margin</span>
                  <span className="text-sm font-semibold text-green-600">~80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Blended Margin</span>
                  <span className="text-sm font-semibold text-green-600">~65%</span>
                </div>
              </div>
            </Card>

            <Card hover gradient className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3-Year Targets</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">AUM</span>
                  <span className="text-sm font-semibold text-blue-600">$500M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Annual Revenue</span>
                  <span className="text-sm font-semibold text-blue-600">$15M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">BaaS Clients</span>
                  <span className="text-sm font-semibold text-blue-600">20-30</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Target Returns</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div>
                <div className="text-5xl font-bold gradient-feature bg-clip-text text-transparent mb-2">8-12x</div>
                <p className="text-gray-600">Multiple on invested capital</p>
              </div>
              <div className="text-4xl text-gray-300 hidden md:block">•</div>
              <div>
                <div className="text-5xl font-bold gradient-feature bg-clip-text text-transparent mb-2">3-5 years</div>
                <p className="text-gray-600">Investment horizon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Mitigation */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Risk & Mitigation Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span> Regulatory Risk
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Risk:</strong> Evolving digital asset and carbon market regulations across jurisdictions.
              </p>
              <p className="text-gray-600">
                <strong>Mitigation:</strong> Multi-jurisdiction legal team, proactive engagement with regulators, modular architecture allowing rapid compliance pivots, advisory board with ex-regulators.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">📉</span> Market Adoption Risk
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Risk:</strong> Slower-than-expected corporate and institutional uptake of tokenized natural capital.
              </p>
              <p className="text-gray-600">
                <strong>Mitigation:</strong> BaaS model de-risks via diversified client base; dual revenue (BaaS + AUM); pilot partnerships proving concept before full rollout.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🔒</span> Technology Risk
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Risk:</strong> Smart contract vulnerabilities, blockchain scalability, or interoperability challenges.
              </p>
              <p className="text-gray-600">
                <strong>Mitigation:</strong> Third-party security audits, multi-chain strategy, established infrastructure partners, continuous monitoring and incident response protocols.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">⚡</span> Execution Risk
              </h3>
              <p className="text-gray-600 mb-3">
                <strong>Risk:</strong> Team scaling, capital burn rate, or inability to meet milestones.
              </p>
              <p className="text-gray-600">
                <strong>Mitigation:</strong> Experienced founding team with track record in ESG finance, tokenization, and environmental sciences; phased rollout with clear go/no-go gates; lean operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exit & Upside */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exit Pathways & Investor Upside
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple liquidity options targeting 8-12x returns over 3-7 year horizon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover gradient className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Acquisition</h3>
              <p className="text-gray-600 text-sm mb-4">
                Climate-tech platforms, traditional financial institutions, or ESG-focused asset managers seeking to integrate natural capital capabilities.
              </p>
              <div className="text-sm font-semibold text-green-600">Primary Exit (3-5 years)</div>
            </Card>

            <Card hover gradient className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secondary Sales</h3>
              <p className="text-gray-600 text-sm mb-4">
                Institutional investors or family offices seeking exposure to natural capital infrastructure at later stages.
              </p>
              <div className="text-sm font-semibold text-blue-600">Interim Liquidity (2-4 years)</div>
            </Card>

            <Card hover gradient className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IPO / Public Markets</h3>
              <p className="text-gray-600 text-sm mb-4">
                Public listing on major exchange once AUM and revenue scales justify institutional analyst coverage.
              </p>
              <div className="text-sm font-semibold text-teal-600">Long-term Option (5-7 years)</div>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Download our full investment deck or schedule a confidential investor call to discuss terms, data room access, and due diligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#" variant="secondary" size="lg">
                Request Full Financial Model
              </Button>
              <Button href="/contact?type=investor" variant="outline" size="lg">
                Book Investor Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
