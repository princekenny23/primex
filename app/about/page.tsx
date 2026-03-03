import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - PrimeX Ltd',
  description: 'Learn about PrimeX Ltd, a leading technology company specializing in integrated enterprise software solutions for African businesses.',
};

export default function AboutPage() {
  const values = [
    {
      title: "Innovation",
      description: "We continuously evolve our solutions to meet the changing needs of modern businesses."
    },
    {
      title: "Excellence",
      description: "We deliver high-quality products and services that exceed customer expectations."
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices."
    },
    {
      title: "Partnership",
      description: "We succeed when our clients succeed, building long-term collaborative relationships."
    }
  ];

  const team = [
    {
      role: "Executive Team",
      description: "Seasoned leaders with decades of combined experience in enterprise software and African markets."
    },
    {
      role: "Engineering Team",
      description: "World-class developers committed to building robust, scalable, and secure solutions."
    },
    {
      role: "Support Team",
      description: "Dedicated professionals providing 24/7 assistance to ensure your business never stops."
    },
    {
      role: "Sales Team",
      description: "Consultative experts who understand your business needs and recommend tailored solutions."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-brfrom-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About PrimeX Ltd
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering African businesses with world-class enterprise software solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To empower African businesses with integrated enterprise software solutions that drive 
                efficiency, productivity, and sustainable growth. We believe every business deserves 
                access to world-class tools that are tailored to their unique needs and local context.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To become Africa's leading provider of integrated ERP solutions, recognized for 
                innovation, reliability, and exceptional customer service. We envision a future where 
                every African business, regardless of size, has the tools to compete globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                PrimeX Ltd was founded with a simple yet powerful vision: to transform how African 
                businesses operate through technology. We recognized that many existing ERP solutions 
                were not designed with African businesses in mind, often lacking local compliance 
                features, currency support, and the flexibility needed for diverse markets.
              </p>
              <p>
                Starting with a small team of passionate developers and business analysts, we spent 
                years understanding the unique challenges faced by African businesses across different 
                sectors. This research formed the foundation of our integrated ERP ecosystem.
              </p>
              <p>
                Today, we serve over 500 active clients across 15+ countries, helping them streamline 
                operations, reduce costs, and scale their businesses. Our success is measured not by 
                the features we build, but by the tangible impact we have on our clients' bottom line.
              </p>
              <p>
                As we continue to grow, our commitment remains unchanged: to build software that truly 
                serves the needs of African businesses, backed by exceptional support and a deep 
                understanding of local markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Active Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
