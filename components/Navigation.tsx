"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  href: string;
  label: string;
}

interface NavDropdown {
  label: string;
  items: NavItem[];
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navDropdowns: NavDropdown[] = [
    {
      label: "Platform",
      items: [
        { href: "/problem-market", label: "Problem & Market" },
        { href: "/solution", label: "Solution" },
        { href: "/standards", label: "Standards" },
        { href: "/products", label: "Products" },
      ],
    },
    {
      label: "Ventures",
      items: [
        { href: "/ventures", label: "Overview" },
        { href: "/ventures/biochar", label: "Biochar" },
        { href: "/ventures/solar", label: "Solar" },
        { href: "/ventures/water", label: "Water Purification" },
      ],
    },
    {
      label: "Investors",
      items: [
        { href: "/investors", label: "For Investors" },
        { href: "/partnership", label: "Partnership" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "/team", label: "Team" },
        { href: "/advisors", label: "Advisors" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if any item in dropdown is active
  const isDropdownActive = (dropdown: NavDropdown) => {
    return dropdown.items.some((item) => pathname === item.href);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/ncrb-icon.png"
                alt="NCRB Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              Natural Capital ReBank
            </span>
            <span className="font-bold text-xl text-gray-900 sm:hidden">
              NCRB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
            {/* Home Link */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              Home
            </Link>

            {/* Dropdown Menus */}
            {navDropdowns.map((dropdown) => (
              <div
                key={dropdown.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(dropdown.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                    isDropdownActive(dropdown)
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                  }`}
                  onClick={() => setOpenDropdown(openDropdown === dropdown.label ? null : dropdown.label)}
                >
                  {dropdown.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === dropdown.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {openDropdown === dropdown.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {dropdown.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive
                              ? "bg-green-50 text-green-700"
                              : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                          }`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/investors"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Invest Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1">
              {/* Home Link */}
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Dropdown Menus */}
              {navDropdowns.map((dropdown) => (
                <div key={dropdown.label} className="space-y-1">
                  <button
                    className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      isDropdownActive(dropdown)
                        ? "bg-green-50 text-green-700"
                        : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                    }`}
                    onClick={() =>
                      setMobileOpenDropdown(
                        mobileOpenDropdown === dropdown.label ? null : dropdown.label
                      )
                    }
                  >
                    {dropdown.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        mobileOpenDropdown === dropdown.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mobile Dropdown Items */}
                  {mobileOpenDropdown === dropdown.label && (
                    <div className="pl-4 space-y-1">
                      {dropdown.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                              isActive
                                ? "bg-green-50 text-green-700"
                                : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                            }`}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileOpenDropdown(null);
                            }}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/investors"
                className="mt-4 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Invest Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
