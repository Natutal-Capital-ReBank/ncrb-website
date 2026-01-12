import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/ncrb-icon.png"
                  alt="NCRB Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg">Natural Capital ReBank</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Tokenizing nature into an investable asset class through blockchain-powered verification and institutional-grade infrastructure.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 mt-4">
              <a
                href="https://x.com/NCRBplatform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-black flex items-center justify-center transition-colors group"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/natural-capital-rebank/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/problem-market" className="text-gray-400 hover:text-white transition-colors">
                  Problem & Market
                </Link>
              </li>
              <li>
                <Link href="/solution" className="text-gray-400 hover:text-white transition-colors">
                  Our Solution
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products & Roadmap
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Team & Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* For Stakeholders */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Stakeholders</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/investors" className="text-gray-400 hover:text-white transition-colors">
                  For Investors
                </Link>
              </li>
              <li>
                <Link href="/contact?type=corporate" className="text-gray-400 hover:text-white transition-colors">
                  For Corporates
                </Link>
              </li>
              <li>
                <Link href="/contact?type=developer" className="text-gray-400 hover:text-white transition-colors">
                  For Project Developers
                </Link>
              </li>
              <li>
                <Link href="/contact?type=partner" className="text-gray-400 hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Insights & Articles
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-400 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Global Offices:</p>
              <p className="text-gray-400 text-xs">US | Americas | Europe | Asia-Pacific</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Natural Capital ReBank. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
