"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    type: "investor",
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Whether you&apos;re an investor, corporate buyer, project developer, or potential partner—we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card hover className="text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Investors</h3>
              <p className="text-sm text-gray-600">
                Seed round opportunities, data room access, and LP onboarding.
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Corporates</h3>
              <p className="text-sm text-gray-600">
                High-quality credits, BaaS solutions, and ESG compliance tools.
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Project Developers</h3>
              <p className="text-sm text-gray-600">
                Tokenization services, immediate liquidity, and zero-risk structures.
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnerships</h3>
              <p className="text-sm text-gray-600">
                Strategic alliances, technology integrations, and government agencies.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    I am a...
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  >
                    <option value="investor">Investor</option>
                    <option value="corporate">Corporate Buyer</option>
                    <option value="developer">Project Developer</option>
                    <option value="partner">Potential Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Presence</h2>
            <p className="text-xl text-gray-600">
              NCRB operates across major financial and environmental centers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card hover className="text-center">
              <div className="text-3xl mb-3">🇺🇸</div>
              <h3 className="font-semibold text-gray-900 mb-2">United States (HQ)</h3>
              <p className="text-sm text-gray-600">
                New York, NY<br />
                San Francisco, CA
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="text-3xl mb-3">🌎</div>
              <h3 className="font-semibold text-gray-900 mb-2">Americas</h3>
              <p className="text-sm text-gray-600">
                São Paulo, Brazil<br />
                Toronto, Canada
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="text-3xl mb-3">🇪🇺</div>
              <h3 className="font-semibold text-gray-900 mb-2">Europe</h3>
              <p className="text-sm text-gray-600">
                London, UK<br />
                Frankfurt, Germany
              </p>
            </Card>

            <Card hover className="text-center">
              <div className="text-3xl mb-3">🌏</div>
              <h3 className="font-semibold text-gray-900 mb-2">Asia-Pacific</h3>
              <p className="text-sm text-gray-600">
                Singapore<br />
                Sydney, Australia
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Response</h3>
              <p className="text-sm text-gray-600">
                We&apos;ll review your inquiry and respond within 24-48 hours with next steps.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">NDA & Discovery</h3>
              <p className="text-sm text-gray-600">
                Sign NDA for confidential materials, schedule discovery call with relevant team members.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center">
                <span className="text-teal-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Room / Pilot</h3>
              <p className="text-sm text-gray-600">
                Access detailed documentation, financial models, and begin pilot engagement or due diligence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
