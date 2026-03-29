import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "Proposals Program — Fund Blue & Green Projects | Natural Capital ReBank",
  description:
    "The NCRB Proposals Program lets NCSC token holders vote on funding ocean and land conservation projects from the natural capital treasury.",
};

const projectTypes = [
  {
    color: "blue",
    title: "Blue Projects",
    subtitle: "Ocean & Coastal Conservation",
    description:
      "Marine reserves, wetland and mangrove restoration, seagrass and kelp protection, coastal habitat rehabilitation. Blue projects protect aquatic and coastal ecosystems that provide carbon sequestration, biodiversity habitat, and coastal resilience.",
    examples: [
      "Marine reserve establishment",
      "Wetlands and mangrove restoration",
      "Seagrass and kelp forest protection",
      "Coastal habitat rehabilitation",
      "Ocean plastic remediation",
    ],
  },
  {
    color: "green",
    title: "Green Projects",
    subtitle: "Land & Biodiversity",
    description:
      "Tropical forest protection (REDD+), agroforestry programs, soil carbon and grassland restoration, biodiversity corridor establishment. Green projects protect terrestrial ecosystems that store carbon, regulate water, and sustain biodiversity.",
    examples: [
      "Tropical forest protection (REDD+)",
      "Agroforestry and ARR programs",
      "Soil carbon sequestration",
      "Biodiversity corridor establishment",
      "Indigenous land stewardship",
    ],
  },
];

const votingProcess = [
  {
    step: "01",
    title: "Submit a Proposal",
    description:
      "Any qualifying organisation can submit a funding proposal with project scope, methodology, expected impact, requested funding amount, and supporting documentation stored on IPFS. All submissions are public and permanently on-chain.",
  },
  {
    step: "02",
    title: "NCSC Balance Snapshot",
    description:
      "When voting opens, NCSC token balances are snapshotted at the proposal block. Voting weight equals your NCSC balance at snapshot — the more NCSC you hold, the more influence you have.",
  },
  {
    step: "03",
    title: "14-Day Voting Window",
    description:
      "NCSC holders vote Yes, No, or Abstain during the 14-day voting period. Abstain counts toward participation (helping reach the 40% threshold) but not toward the Yes/No outcome.",
  },
  {
    step: "04",
    title: "Threshold & Disbursement",
    description:
      "A proposal passes when ≥40% of total NCSC supply participates AND ≥60% of votes cast are Yes. Approved proposals receive funding from the NCRB treasury — no administrator veto.",
  },
];

export default function ProposalsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full">
              Launches with NCSC Trading
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fund Blue &amp; Green Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            A community-governed funding program that puts ocean and land conservation decisions
            in the hands of NCSC token holders — powered by the NCRB natural capital treasury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/stablecoin" variant="primary">
              Learn about NCSC
            </Button>
            <Button href="/coming-soon" variant="outline">
              Launch WebApp
            </Button>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is the Proposals Program?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The NCRB Proposals Program is a decentralised funding mechanism that allows NCSC
                token holders to vote on which blue and green conservation projects receive funding
                from the platform treasury.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Every time a natural capital certificate is minted on NCRB, 1% of the tokens are
                permanently locked in the on-chain treasury. As more certificates are issued, the
                treasury grows — and so does the community&apos;s capacity to fund real-world
                conservation impact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This is not a grant committee or an ESG fund managed by staff. Funding decisions
                are made entirely by NCSC holders through on-chain governance — decentralised,
                transparent, and immune to administrative discretion.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-teal-700 mb-2">40%</div>
                <div className="text-sm text-teal-800 font-medium">Participation threshold</div>
                <div className="text-xs text-gray-500 mt-1">of total NCSC supply must vote</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">60%</div>
                <div className="text-sm text-green-800 font-medium">Approval threshold</div>
                <div className="text-xs text-gray-500 mt-1">of votes cast must be Yes</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">14d</div>
                <div className="text-sm text-blue-800 font-medium">Voting window</div>
                <div className="text-xs text-gray-500 mt-1">fixed per proposal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue vs Green */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eligible Project Types
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The program funds two categories of conservation projects that align directly with
              the natural capital assets backing NCSC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projectTypes.map((type) => (
              <Card key={type.title} hover>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                    type.color === "blue"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {type.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((ex) => (
                    <li key={ex} className="flex items-center text-gray-700 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 ${
                          type.color === "blue" ? "bg-blue-500" : "bg-green-500"
                        }`}
                      />
                      {ex}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How voting works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Voting Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              On-chain governance from submission to disbursement — fully transparent,
              no admin veto.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {votingProcess.map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-green-600 text-white rounded-xl flex items-center justify-center font-bold font-mono text-sm mr-5">
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

      {/* Who can apply */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Can Apply?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Any credible organisation with a qualifying blue or green conservation project can
              submit a proposal. NCSC holders decide — not NCRB staff.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🌊", label: "Ocean & coastal NGOs", desc: "Marine conservation organisations, wetland trusts, coastal habitat groups" },
              { icon: "🌳", label: "Forest restoration organisations", desc: "REDD+ project developers, ARR programs, agroforestry initiatives" },
              { icon: "🏛️", label: "Government agencies", desc: "National parks, environmental ministries, regional conservation bodies" },
              { icon: "🤝", label: "Indigenous programs", desc: "Land stewardship programs, traditional ecological knowledge projects" },
              { icon: "🦋", label: "Biodiversity projects", desc: "Rewilding initiatives, species corridor programs, habitat banks" },
              { icon: "💧", label: "Wetland & water groups", desc: "Wetland restoration, mangrove planting, seagrass protection programs" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-green-300 hover:shadow-sm transition-all">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-900 mb-1">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NCSC dependency + CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            When Does It Launch?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            The Proposals Program launches once NCSC is actively traded and regulatory approvals
            for fiat redemption are in place. NCSC is planned for Phase 2b (v2.0.0, Q1 2027).
            In the meantime, you can explore the NCRB platform, trade RWA tokens, and prepare
            for when your NCSC balance becomes your governance vote.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            The smart contract implementation and on-chain voting mechanism will be documented in
            full before launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/stablecoin" variant="primary">
              Learn about NCSC
            </Button>
            <Button href="/coming-soon" variant="outline">
              Launch WebApp
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
