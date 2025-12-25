import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Natural Capital ReBank",
  description:
    "Terms of Service for Natural Capital ReBank. Review our terms and conditions for using our services and platform.",
  openGraph: {
    title: "Terms of Service - Natural Capital ReBank",
    description:
      "Terms of Service for Natural Capital ReBank. Review our terms and conditions for using our services and platform.",
    url: "https://naturalcapitalrebank.com/terms",
    siteName: "Natural Capital ReBank",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Natural Capital ReBank",
    description:
      "Terms of Service for Natural Capital ReBank. Review our terms and conditions for using our services and platform.",
  },
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> July 1, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Use of Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users must be at least 18 years old. Services are restricted to
              lawful purposes and compliance with applicable laws and
              regulations. Misuse, interference with operations, and
              unauthorized system access are prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Natural Capital ReBank owns all website content, software,
              materials, trademarks, and licensed items. Users cannot copy,
              reproduce, distribute, modify, or create derivative works without
              prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Client Data & Confidentiality
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users retain data ownership. By sharing data, they grant Natural
              Capital ReBank a limited license to process, analyze, and use it
              in line with our Privacy Policy. The company complies with GDPR,
              CCPA, and data protection regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Disclaimers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Services are provided &quot;as is&quot; without warranties of any
              kind, express or implied. The company does not guarantee
              uninterrupted access, error-free operations, or expected outcomes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Natural Capital ReBank&apos;s liability is limited to the amount
              paid for the Services that gave rise to the claim. We are not
              liable for data loss or third-party unauthorized access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users agree to protect Natural Capital ReBank and its affiliates
              from claims or expenses resulting from service misuse or Terms
              violations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Termination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Access may be suspended for Terms violations, system misuse, or
              unlawful activity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Commonwealth of Massachusetts, USA
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us at:{" "}
              <a
                href="mailto:legal@naturalcapitalrebank.com"
                className="text-green-600 hover:text-green-700 underline"
              >
                legal@naturalcapitalrebank.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
