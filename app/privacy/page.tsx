import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Natural Capital ReBank",
  description:
    "Privacy Policy for Natural Capital ReBank. Learn how we collect, use, and protect your personal information in compliance with GDPR and data protection regulations.",
  openGraph: {
    title: "Privacy Policy - Natural Capital ReBank",
    description:
      "Privacy Policy for Natural Capital ReBank. Learn how we collect, use, and protect your personal information in compliance with GDPR and data protection regulations.",
    url: "https://ncrb.world/privacy",
    siteName: "Natural Capital ReBank",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Natural Capital ReBank",
    description:
      "Privacy Policy for Natural Capital ReBank. Learn how we collect, use, and protect your personal information in compliance with GDPR and data protection regulations.",
  },
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> October 6, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Natural Capital ReBank is a financial technology company focused
              on building the next generation of natural capital and
              environmental asset tokenization solutions. We are committed to
              protecting your privacy and handling your personal data with care
              and transparency.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We fully comply with the General Data Protection Regulation
              (GDPR) and the Data Protection Act 2018 (DPA). Our commitment to
              data protection ensures that your personal information is handled
              securely and in accordance with the highest industry standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Protection Principles
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Six foundational principles guide our approach to data protection:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Accountability:</strong> We take responsibility for data
                protection and demonstrate compliance
              </li>
              <li>
                <strong>Accuracy, Integrity and Confidentiality:</strong> We
                ensure data is accurate, secure, and kept confidential
              </li>
              <li>
                <strong>Lawfulness, Fairness, and Transparency:</strong> We
                process data legally, fairly, and transparently
              </li>
              <li>
                <strong>Purpose Limitation:</strong> We collect data only for
                specified, legitimate purposes
              </li>
              <li>
                <strong>Data Minimization:</strong> We collect only data that is
                necessary and relevant
              </li>
              <li>
                <strong>Storage Limitation:</strong> We retain data only as long
                as necessary
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Collection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Contact details (name, email, phone number, address)</li>
              <li>Professional and employment information</li>
              <li>Identification documents</li>
              <li>Financial and transaction records</li>
              <li>References and credentials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Usage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Providing and maintaining our services</li>
              <li>Client record maintenance and communications</li>
              <li>Legal compliance and regulatory obligations</li>
              <li>Service improvements and product development</li>
              <li>
                Processing transactions and managing financial relationships
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Legal Basis for Processing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data based on:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Consent:</strong> Where you have given clear consent for
                specific purposes
              </li>
              <li>
                <strong>Contractual Necessity:</strong> To fulfill our
                contractual obligations
              </li>
              <li>
                <strong>Legal Obligations:</strong> To comply with applicable
                laws and regulations
              </li>
              <li>
                <strong>Legitimate Interests:</strong> For our legitimate
                business interests, balanced against your rights
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your data with third parties including financial
              institutions, government agencies, and service providers, with
              adequate protections in place. We ensure all third parties respect
              the security of your data and treat it in accordance with
              applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under data protection law, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Right to Information:</strong> To be informed about how
                your data is used
              </li>
              <li>
                <strong>Right to Access:</strong> To request copies of your
                personal data
              </li>
              <li>
                <strong>Right to Rectification:</strong> To request correction
                of inaccurate data
              </li>
              <li>
                <strong>Right to Erasure:</strong> To request deletion of your
                data
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> To request
                limitation of data processing
              </li>
              <li>
                <strong>Right to Data Portability:</strong> To receive your data
                in a portable format
              </li>
              <li>
                <strong>Right to Object:</strong> To object to certain types of
                processing
              </li>
              <li>
                <strong>Rights Related to Automated Decision-Making:</strong> To
                not be subject to automated decisions
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to
              exercise your data protection rights, please contact us at:{" "}
              <a
                href="mailto:privacy@ncrb.world"
                className="text-green-600 hover:text-green-700 underline"
              >
                privacy@ncrb.world
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
