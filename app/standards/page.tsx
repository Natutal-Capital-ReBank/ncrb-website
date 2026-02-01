import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "Standards & Compliance - Natural Capital ReBank",
  description: "NCRB aligns with leading international frameworks: SBTi, Paris Agreement Article 6, ISO 14064, VCMI Claims Code, and ISO 14068-1 for institutional-grade carbon credit integrity.",
};

const frameworks = [
  {
    icon: "🎯",
    name: "SBTi Net-Zero Standard",
    fullName: "Science Based Targets initiative",
    purpose: "Corporate Climate Targets",
    description: "The global benchmark for corporate climate action with over 12,000 companies committed.",
    ncrbAlignment: [
      "BVCM-eligible credits for Beyond Value Chain Mitigation investments",
      "High-permanence removal credits (100+ years) for residual neutralization",
      "Reduction-first hierarchy enforcement before offset purchases",
      "AAA/Premium tier credits meet SBTi requirements for carbon removals",
    ],
    buyerBenefit: "Corporate buyers can confidently use NCRB credits within their SBTi-validated pathways.",
  },
  {
    icon: "🌍",
    name: "Paris Agreement Article 6",
    fullName: "UNFCCC Article 6.2 & 6.4",
    purpose: "International Credit Integrity",
    description: "The international framework ensuring no double counting between countries under the Paris Agreement.",
    ncrbAlignment: [
      "Corresponding adjustments tracked and displayed for all credits",
      "Letter of Authorization (LoA) documentation required",
      "Host country authorization and NDC alignment verified",
      "Article 6.4 mechanism readiness as methodologies finalize in 2026",
    ],
    buyerBenefit: "Credits with corresponding adjustments provide legal certainty for compliance and carbon neutral claims.",
  },
  {
    icon: "📊",
    name: "ISO 14064-1/2/3",
    fullName: "GHG MRV Standards",
    purpose: "Quantification & Verification",
    description: "The international standard for greenhouse gas quantification, project requirements, and verification.",
    ncrbAlignment: [
      "ISO 14064-1: Organizational GHG inventory validation",
      "ISO 14064-2: Project-level quantification methodology compliance",
      "ISO 14064-3: Third-party verification by accredited bodies (ANAB, UKAS)",
      "Continuous monitoring and reporting protocol enforcement",
    ],
    buyerBenefit: "ISO 14064-compliant credits meet CDP requirements and provide audit-ready CSRD/ISSB documentation.",
  },
  {
    icon: "✅",
    name: "ISAE 3000 / ISSA 5000",
    fullName: "ESG Assurance Standards",
    purpose: "Audit & Assurance",
    description: "IAASB standards for non-financial assurance, including ESG and sustainability disclosures.",
    ncrbAlignment: [
      "Limited assurance ready with negative form conclusion support",
      "Reasonable assurance path for premium credits with full audit trail",
      "ESG materiality documentation for stakeholder decision-making",
      "ISSA 5000 transition alignment for sustainability-specific assurance",
    ],
    buyerBenefit: "Credits include assurance-ready documentation packages for external auditor verification.",
  },
  {
    icon: "🏆",
    name: "VCMI Claims Code",
    fullName: "Voluntary Carbon Markets Integrity Initiative",
    purpose: "Buyer Acceptance Framework",
    description: "The framework for credible corporate climate claims involving carbon credits.",
    ncrbAlignment: [
      "Foundational criteria compliance verified for buyers",
      "ICVCM Core Carbon Principles (CCP) quality threshold alignment",
      "Monitoring, Reporting & Assurance (MRA) framework documentation",
      "Silver, Gold, and Platinum tier documentation packages",
    ],
    buyerBenefit: "Turnkey documentation for VCMI Carbon Integrity Claims with full tier support.",
  },
  {
    icon: "🌿",
    name: "ISO 14068-1",
    fullName: "Carbon Neutrality Standard",
    purpose: "Neutrality Certification",
    description: "The international carbon neutrality standard replacing PAS 2060 from January 2025.",
    ncrbAlignment: [
      "Reduce-Remove-Offset hierarchy enforcement",
      "13-element carbon neutrality management plan template",
      "Credit quality criteria: additionality, permanence, leakage, no double counting",
      "Retirement evidence with serial numbers, vintage, and timestamps",
    ],
    buyerBenefit: "Complete ISO 14068-1 compliance package for defensible carbon neutrality claims.",
  },
];

const ratingBands = [
  { range: "85-100", band: "AAA / Premium", sylvera: "A+, A", bezero: "AAA, AA", interpretation: "Institutional-grade, premium pricing", color: "green" },
  { range: "75-84", band: "AA / High", sylvera: "A-, BBB", bezero: "A, BBB", interpretation: "High-quality compliance & voluntary", color: "blue" },
  { range: "65-74", band: "A / Standard", sylvera: "BB, B", bezero: "BB, B", interpretation: "Tradable with risk discount", color: "teal" },
  { range: "50-64", band: "BBB / Review", sylvera: "CCC", bezero: "CCC", interpretation: "Limited buyers, price pressure", color: "orange" },
  { range: "<50", band: "Not Eligible", sylvera: "D / NR", bezero: "D / NR", interpretation: "High integrity risk", color: "red" },
];

const benchmarkDimensions = [
  { dimension: "Technical Quality", weight: "25%", description: "Asset-specific rigor, methodology strength, third-party ratings" },
  { dimension: "Additionality", weight: "20%", description: "Financial/regulatory additionality vs baseline scenario" },
  { dimension: "Permanence", weight: "20%", description: "Durability of benefits, reversal risk management, buffer pools" },
  { dimension: "Certification Level", weight: "15%", description: "Registry strength, verification rigor, CCP alignment" },
  { dimension: "Social Impact", weight: "12%", description: "Co-benefits, community outcomes, indigenous engagement" },
  { dimension: "Vintage/Condition", weight: "8%", description: "Data freshness, recency of issuance, asset condition" },
];

const buyerWorkflow = [
  { step: 1, title: "Verify Reduction Progress", description: "Demonstrate emission reduction efforts before credit purchase" },
  { step: 2, title: "Select Quality Tier", description: "Choose credits matching claim requirements (VCMI tier, ISO 14068-1)" },
  { step: 3, title: "Review Documentation", description: "Access MRV reports, verification statements, CA status" },
  { step: 4, title: "Retire Credits", description: "On-chain retirement with serial numbers and timestamps" },
  { step: 5, title: "Generate Reports", description: "Export compliance packages for CSRD, CDP, SBTi, or auditors" },
];

export default function Standards() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              International Standards & Compliance
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              NCRB credits are designed for institutional acceptance across leading climate frameworks,
              enabling credible corporate claims and audit-ready documentation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["SBTi", "Article 6", "ISO 14064", "VCMI", "ISO 14068-1"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Standards Matter */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Standards Alignment Matters
            </h2>
            <p className="text-lg text-gray-600">
              Corporate buyers face increasing scrutiny on their climate claims. Regulatory requirements like
              CSRD, SEC climate disclosure rules, and TNFD demand verifiable, high-integrity credits with
              clear audit trails. NCRB provides the framework alignment buyers need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover gradient className="text-center">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Meet CSRD, TNFD, and SEC disclosure requirements with audit-ready documentation and verified metrics.
              </p>
            </Card>

            <Card hover gradient className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Greenwashing Protection</h3>
              <p className="text-gray-600">
                Defend climate claims with VCMI-aligned documentation and third-party verified credit quality.
              </p>
            </Card>

            <Card hover gradient className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Institutional Acceptance</h3>
              <p className="text-gray-600">
                Access premium markets with SBTi-eligible credits and ISO-standard MRV assurance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Framework Details */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Framework Alignment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NCRB integrates with six key international standards for comprehensive credit integrity.
            </p>
          </div>

          <div className="space-y-8">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center text-4xl">
                        {framework.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{framework.name}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {framework.purpose}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-3">{framework.fullName}</p>
                      <p className="text-gray-600 mb-4">{framework.description}</p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">NCRB Integration:</h4>
                          <ul className="space-y-2">
                            {framework.ncrbAlignment.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-green-600 mt-1">✓</span>
                                <span className="text-gray-600 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Buyer Benefit:</h4>
                          <p className="text-gray-700 text-sm">{framework.buyerBenefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NCRB Benchmark */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              NCRB Quality Benchmark
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A programmatic quality score (0-100) calculated across six weighted dimensions,
              aligned with ICVCM Core Carbon Principles and industry rating methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Benchmark Dimensions */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Scoring Dimensions</h3>
              <div className="space-y-4">
                {benchmarkDimensions.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-8 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      {item.weight}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.dimension}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating Bands */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Credit Rating Bands</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-900">Score</th>
                      <th className="text-left py-2 font-semibold text-gray-900">NCRB Band</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Industry Alignment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ratingBands.map((band, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 font-mono text-gray-600">{band.range}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            band.color === 'green' ? 'bg-green-100 text-green-700' :
                            band.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                            band.color === 'teal' ? 'bg-teal-100 text-teal-700' :
                            band.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {band.band}
                          </span>
                        </td>
                        <td className="py-3 text-gray-600">{band.interpretation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Aligned with Sylvera, BeZero, and ICVCM Core Carbon Principles rating methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Workflow */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Buyer Claims Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured 5-step process for corporate buyers to make credible climate claims
              with full documentation support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {buyerWorkflow.map((item, index) => (
              <div key={index} className="relative">
                <Card hover className="h-full text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
                {index < buyerWorkflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-300 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Documentation Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Export-ready documentation for regulatory compliance and third-party audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover gradient className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">MRV Reports</h3>
              <p className="text-gray-600 text-sm">
                ISO 14064-compliant monitoring, reporting, and verification documentation.
              </p>
            </Card>

            <Card hover gradient className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Verification Statements</h3>
              <p className="text-gray-600 text-sm">
                Third-party verification certificates from accredited bodies.
              </p>
            </Card>

            <Card hover gradient className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-semibold text-gray-900 mb-2">CA Certificates</h3>
              <p className="text-gray-600 text-sm">
                Corresponding adjustment proof for Article 6 compliance.
              </p>
            </Card>

            <Card hover gradient className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">CSRD/CDP Templates</h3>
              <p className="text-gray-600 text-sm">
                Pre-formatted exports for corporate sustainability reporting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Credible Climate Claims?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Access institutional-grade carbon credits with full standards alignment,
            audit-ready documentation, and buyer claims support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact?type=corporate" variant="primary" size="lg">
              Contact for Corporates
            </Button>
            <Button href="/investors" variant="outline" size="lg">
              Learn About Investment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
