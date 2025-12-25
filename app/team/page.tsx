import Image from "next/image";

export const metadata = {
  title: "Team & Governance - Natural Capital ReBank",
  description: "Meet the NCRB founding team and our proprietary governance framework.",
};

export default function Team() {
  const team = [
    {
      name: "Dr. Rubens Talukder",
      role: "Managing Partner, Finance",
      image: "/images/Rubens.jpg",
      bio: "Deep expertise in sustainable finance and institutional investment strategies, with a proven track record in ESG fund management and nature-based solutions across global markets.",
    },
    {
      name: "Zaki Alam",
      role: "Managing Partner, Technology",
      image: "/images/Zaki.jpg",
      bio: "Pioneer in blockchain architecture and tokenization frameworks, bringing enterprise-grade technical leadership from DeFi and real-world asset markets with institutional security standards.",
    },
    {
      name: "Arno Neumann",
      role: "Managing Partner, Environmental Science",
      image: "/images/Arno.jpg",
      bio: "Leading authority in natural capital accounting and ecosystem services valuation, with extensive experience in carbon markets, regulatory compliance, and environmental impact assessment.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-teal-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Leadership Team
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
            World-class expertise in ESG finance, blockchain technology, and environmental sciences.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover border border-gray-100"
              >
                <div className="relative w-full h-80 bg-gradient-to-br from-green-100 to-blue-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
