import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "Our Solution - Natural Capital ReBank",
  description: "NCRB's blockchain-powered platform for natural capital tokenization and institutional investment.",
};

export default function Solution() {
  return (
    <div className="min-h-screen">
      <section className="gradient-hero py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The NCRB Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Institutional-grade blockchain infrastructure transforming natural capital into transparent, liquid, and verifiable digital assets.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming Soon</h2>
          <p className="text-gray-600 mb-8">Detailed solution architecture, platform capabilities, and use cases.</p>
          <Button href="/" variant="primary">Back to Home</Button>
        </div>
      </section>
    </div>
  );
}
