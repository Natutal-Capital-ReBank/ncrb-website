import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "Problem & Market - Natural Capital ReBank",
  description: "Understanding the natural capital crisis, carbon market challenges, and the $10T opportunity in ecosystem services.",
};

export default function ProblemMarket() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Natural Capital Crisis
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
              Over half of global GDP depends on nature, yet markets systematically under-price it—creating massive economic risk and unprecedented opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Natural Capital Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is Natural Capital?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Natural capital is the world&apos;s stock of natural resources including geology, soils, air, water, and all living organisms. These assets provide essential ecosystem services that enable economic activity and human wellbeing.
            </p>
            <p className="text-lg text-gray-600">
              Despite supporting over 50% of global GDP ($44 trillion annually), natural capital is chronically undervalued in conventional markets, leading to degradation, climate risk, and systemic economic instability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover gradient className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <div className="text-4xl font-bold text-green-600 mb-2">$44T</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global GDP Dependent on Nature</h3>
              <p className="text-gray-600">More than half of world economic output relies on functioning ecosystems.</p>
            </Card>

            <Card hover gradient className="text-center">
              <div className="text-5xl mb-4">⚠️</div>
              <div className="text-4xl font-bold text-red-600 mb-2">$2.7T</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Economic Value at Risk by 2030</h3>
              <p className="text-gray-600">Projected losses from ecosystem collapse and climate impacts on supply chains.</p>
            </Card>

            <Card hover gradient className="text-center">
              <div className="text-5xl mb-4">📉</div>
              <div className="text-4xl font-bold text-orange-600 mb-2">68%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wildlife Population Decline Since 1970</h3>
              <p className="text-gray-600">Average decline in monitored vertebrate species populations worldwide.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Carbon Markets Challenge */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Carbon Markets: The Integrity & Friction Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Existing voluntary and compliance carbon markets are plagued by opacity, slow verification, and trust deficits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Voluntary Carbon Markets</h3>
              <p className="text-gray-600 mb-4">
                Companies purchase credits to offset emissions voluntarily, outside of regulatory mandates.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✕</span>
                  <p className="text-gray-600 text-sm">Manual verification takes 6–12 months, delaying project revenue</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✕</span>
                  <p className="text-gray-600 text-sm">Transparency gaps enable double-counting and fraudulent credits</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✕</span>
                  <p className="text-gray-600 text-sm">Fragmented registries create friction and high transaction costs</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Carbon Markets</h3>
              <p className="text-gray-600 mb-4">
                Government-mandated cap-and-trade systems for regulated emitters (EU ETS, California, etc.).
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✕</span>
                  <p className="text-gray-600 text-sm">Regulatory complexity limits accessibility for many organizations</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✕</span>
                  <p className="text-gray-600 text-sm">Limited interoperability between regional systems</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✕</span>
                  <p className="text-gray-600 text-sm">Does not address broader natural capital beyond carbon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Integrity Gap</h3>
            <p className="text-lg text-gray-700 mb-6">
              High-quality, independently verifiable carbon credits are scarce. Buyers struggle to distinguish legitimate projects from low-additionality or phantom offsets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Issues:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lack of real-time monitoring and verification</li>
                  <li>• Inconsistent methodologies across standards</li>
                  <li>• Permanence risk (carbon re-release)</li>
                  <li>• Leakage (emissions shifting location)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Corporate buyers face reputational risk</li>
                  <li>• Reduced investor confidence in VCM</li>
                  <li>• Project developers struggle to access capital</li>
                  <li>• Ecosystem degradation continues unchecked</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Carbon */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beyond Carbon: A Broader Credit Universe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NCRB is architected for the full spectrum of ecosystem services—not just CO₂ offsets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card hover>
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Soil Carbon Credits</h3>
              <p className="text-gray-600 text-sm">
                Sequestration via regenerative agriculture and soil health practices, unlocking revenue for farmers.
              </p>
            </Card>

            <Card hover>
              <div className="text-4xl mb-3">🦋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Biodiversity Credits</h3>
              <p className="text-gray-600 text-sm">
                Monetizing conservation outcomes—habitat restoration, species protection, and ecosystem integrity.
              </p>
            </Card>

            <Card hover>
              <div className="text-4xl mb-3">💧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Quality Credits</h3>
              <p className="text-gray-600 text-sm">
                Trading credits for watershed management, pollution reduction, and freshwater ecosystem services.
              </p>
            </Card>

            <Card hover>
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Blue Carbon / Ocean Credits</h3>
              <p className="text-gray-600 text-sm">
                Coastal and marine ecosystem restoration—mangroves, seagrass, kelp forests with high sequestration potential.
              </p>
            </Card>

            <Card hover>
              <div className="text-4xl mb-3">♻️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Plastic Credits</h3>
              <p className="text-gray-600 text-sm">
                Verified plastic collection and recycling credits, addressing the global pollution crisis at source.
              </p>
            </Card>

            <Card hover>
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Aviation Fuel (SAF)</h3>
              <p className="text-gray-600 text-sm">
                Credits linked to SAF production and adoption, critical for decarbonizing air travel and logistics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Size & Growth */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Size & Projected Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The natural capital opportunity spans trillions—with carbon as just one entry point into a multi-asset ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Voluntary Carbon Market (VCM)</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600">Current Market Size (2024)</span>
                    <span className="text-2xl font-bold text-blue-600">~$2B</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600">Projected 2030</span>
                    <span className="text-2xl font-bold text-green-600">$10-40B</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Nature-based solutions represent 30-40% of carbon removals needed to meet Paris Agreement targets.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Biodiversity Finance Gap</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600">Current Annual Funding</span>
                    <span className="text-2xl font-bold text-orange-600">$124B</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600">Required by 2030</span>
                    <span className="text-2xl font-bold text-teal-600">$200B+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Annual shortfall represents massive opportunity for private capital and innovative financing mechanisms.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="text-6xl font-bold gradient-feature bg-clip-text text-transparent mb-4">$10 Trillion</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Natural Capital Opportunity</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              When combining carbon, biodiversity, water, soil, plastic, and other ecosystem services into a unified, tokenized asset class, the addressable market exceeds $10 trillion globally.
            </p>
            <Button href="/solution" variant="primary" size="lg">
              See How NCRB Captures This Opportunity
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
