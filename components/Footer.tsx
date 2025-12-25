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
                  src="/images/ncrb-logo.png"
                  alt="NCRB Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg">NCRB</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Tokenizing nature into an investable asset class through blockchain-powered verification and institutional-grade infrastructure.
            </p>
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
