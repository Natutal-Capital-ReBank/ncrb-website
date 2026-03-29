import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "NCSC — Natural Capital Stablecoin | Natural Capital ReBank",
  description:
    "NCSC is a USD-pegged stablecoin backed by certified natural capital asset tokens locked on-chain. Every NCSC = $1 of verified environmental value.",
};

const assetClasses = [
  { name: "Carbon Credits", icon: "🌱" },
  { name: "Plastic Credits", icon: "♻️" },
  { name: "Nitrogen Credits", icon: "🧪" },
  { name: "Phosphorus Credits", icon: "🌾" },
  { name: "Agricultural Land", icon: "🏞️" },
  { name: "Mining Rights", icon: "⛏️" },
  { name: "Water Rights", icon: "💧" },
  { name: "Renewable Energy", icon: "⚡" },
  { name: "Forestry Rights", icon: "🌲" },
  { name: "Biodiversity Credits", icon: "🦋" },
];

const howItWorks = [
  {
    step: "01",
    title: "Certify & Tokenise",
    description:
      "Natural capital certificates are independently verified, quality-scored, and approved by multi-signature governance before being minted as RWA tokens on-chain.",
  },
  {
    step: "02",
    title: "Lock 1% in Treasury",
    description:
      "At every minting event, 1% of tokens are automatically locked in the TreasuryAssetContract — permanently. No withdrawal path. Tokens flow out only on asset retirement.",
  },
  {
    step: "03",
    title: "NCSC Supply = Treasury Value",
    description:
      "The oracle reads the total USD market value of all locked tokens every hour. NCSC supply is programmatically adjusted to match that value — $1.00 per NCSC at all times.",
  },
  {
    step: "04",
    title: "Trade, Hold, Vote",
    description:
      "NCSC is freely transferable and usable in DeFi from day one. Fiat redemption is gated until regulatory approvals are obtained. NCSC holders will vote on project funding proposals.",
  },
];

export default function StablecoinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full">
              Phase 2b — Q2 2028
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Natural Capital Stablecoin
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-4">
            NCSC is a USD-pegged digital currency backed entirely by certified natural capital asset
            tokens locked on-chain. Every NCSC in circulation represents one US dollar of verified
            environmental value.
          </p>
          <p className="text-teal-300 font-mono text-sm">
            Symbol: NCSC &nbsp;·&nbsp; Decimals: 6 &nbsp;·&nbsp; Standard: ERC-20 &nbsp;·&nbsp;
            Target peg: $1.00
          </p>
        </div>
      </section>

      {/* Key differentiators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not Like Other Stablecoins
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NCSC&apos;s collateral is not a bank account, not volatile crypto, and not an
              algorithm. It is a diversified portfolio of independently certified real-world
              environmental assets — locked on-chain, fully transparent, and verifiable by
              anyone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Non-Withdrawable Treasury</h3>
              <p className="text-gray-600">
                Locked tokens cannot be withdrawn. They enter the treasury at minting and exit only
                when the underlying environmental asset is retired. No custodian risk, no
                rehypothecation.
              </p>
            </Card>
            <Card hover>
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully On-Chain</h3>
              <p className="text-gray-600">
                Every locked token, price update, and supply adjustment is visible on-chain and
                exposed via a public API. No off-chain reporting required to verify backing.
                Real-time collateral ratio is always readable.
              </p>
            </Card>
            <Card hover>
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Programmatic Stability</h3>
              <p className="text-gray-600">
                Supply adjustments are deterministic and automated. The oracle triggers minting or
                burning every hour if the peg deviates more than 0.5%. No discretionary human
                intervention.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Backed by 10 asset classes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Backed by 10 Natural Capital Asset Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike a stablecoin backed by a single commodity, NCSC&apos;s collateral spans a
              diversified basket of environmental assets — reducing single-market risk and providing
              genuine ecological resilience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {assetClasses.map((asset) => (
              <div
                key={asset.name}
                className="bg-white border border-green-100 rounded-xl p-4 text-center hover:border-green-300 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-2">{asset.icon}</div>
                <div className="text-sm font-medium text-gray-800">{asset.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How NCSC Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, auditable four-step mechanism that ties NCSC supply to the real USD value
              of locked natural capital assets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-xl flex items-center justify-center font-bold mr-5 font-mono text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market opportunity */}
      <section className="py-16 bg-gradient-to-br from-green-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Opportunity</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              NCSC positions at the intersection of three massive and converging markets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">$28.7T</div>
              <div className="text-lg font-semibold mb-2">Green Finance by 2033</div>
              <p className="text-gray-300 text-sm">
                Global green finance projected at $28.7 trillion by 2033 at 21.25% CAGR
                (Spherical Insights, 2025)
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-300 mb-2">$24.3T</div>
              <div className="text-lg font-semibold mb-2">Sustainable Finance by 2030</div>
              <p className="text-gray-300 text-sm">
                Sustainable finance market expected to reach $24.3 trillion by 2030
                (Mordor Intelligence, 2025)
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-300 mb-2">$10T+</div>
              <div className="text-lg font-semibold mb-2">Natural Capital Market</div>
              <p className="text-gray-300 text-sm">
                Total addressable natural capital asset market across 10 asset classes on the
                NCRB platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built for Regulatory Compliance
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                NCSC&apos;s architecture is aligned with emerging global stablecoin frameworks,
                including the US GENIUS Act and STABLE Act (July 2025) and EU MiCA requirements.
                The design supports mandatory 1:1 backing, monthly reporting, independent
                audit capability, and AML/KYC compliance controls.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fiat redemption is enforced on-chain via a <code className="bg-gray-100 px-1 rounded text-sm">redemptionEnabled</code> flag
                that starts <code className="bg-gray-100 px-1 rounded text-sm">false</code> at
                deployment. This cannot be bypassed. NCSC can be issued, traded, and used in
                DeFi immediately — fiat redemption activates only once regulatory approvals are
                in place in each jurisdiction.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: "1:1 Backing",
                  desc: "NCSC supply tracks treasury USD value exactly (±0.5% adjustment threshold)",
                  ok: true,
                },
                {
                  label: "Monthly Reporting",
                  desc: "Public treasury reports with per-asset breakdown and collateral ratio",
                  ok: true,
                },
                {
                  label: "Independent Audit",
                  desc: "Third-party ecological certification + smart contract security audit",
                  ok: true,
                },
                {
                  label: "AML/KYC Controls",
                  desc: "Blacklist, pause, and admin role controls following USDC compliance pattern",
                  ok: true,
                },
                {
                  label: "Fiat Redemption Gate",
                  desc: "On-chain flag; only enabled by admin once regulatory approvals are in place",
                  ok: true,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start p-4 bg-gray-50 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                    <div className="text-gray-600 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn More</h2>
          <p className="text-gray-600 mb-8">
            Read the full NCSC whitepaper, explore the NCRB platform, or get in touch to discuss
            integration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/coming-soon" variant="primary">
              Launch WebApp
            </Button>
            <Button href="/proposals" variant="secondary">
              Proposals Program
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
