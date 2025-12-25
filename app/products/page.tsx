import Button from "@/components/Button";

export const metadata = {
  title: "Products & Roadmap - Natural Capital ReBank",
  description: "NCRB's product suite from BaaS to natural capital stablecoins and green bonds.",
};

export default function Products() {
  return (
    <div className="min-h-screen">
      <section className="gradient-hero py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Products & Roadmap
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Three-phase deployment: Foundations → Regulatory Evolution → NeoBank & Capital Markets
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming Soon</h2>
          <p className="text-gray-600 mb-8">Detailed product breakdown and roadmap timeline.</p>
          <Button href="/" variant="primary">Back to Home</Button>
        </div>
      </section>
    </div>
  );
}
