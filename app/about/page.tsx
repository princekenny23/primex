import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - PrimeX Ltd',
  description: 'Learn about PrimeX Ltd, a leading technology company specializing in integrated enterprise software solutions for African businesses.',
};

export default function AboutPage() {
  const values = [
    {
      title: "Innovation",
      description: "Building modern, forward-thinking systems."
    },
    {
      title: "Excellence",
      description: "Delivering high-quality, reliable solutions."
    },
    {
      title: "Scalability",
      description: "Designing systems that grow with clients' needs."
    },
    {
      title: "Impact",
      description: "Creating technology that solves real-world problems."
    },
    {
      title: "Integrity",
      description: "Operating with transparency and trust."
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
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="PrimeX background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About PrimeX Ltd
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Lead provider of integrated artificial intelligence and innovative digital solutions
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
                To partner with organizations to understand their needs and build intelligent systems
                that support long-term growth, operational transparency, and sustainable digital transformation.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                Empowering industries with efficient, user-friendly, and scalable artificial intelligence
                technologies.
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
                PrimeX Ltd is focused on developing integrated enterprise software solutions that help
                organizations manage operations efficiently from a single, unified platform.
              </p>
              <p>
                Our systems bring together key business functions—including operations, human resources,
                finance, inventory, and analytics—eliminating fragmented tools and manual processes that
                slow growth.
              </p>
              <p>
                We design secure and user-friendly digital solutions that provide real-time insights and
                streamline workflows to improve performance.
              </p>
              <p>
                At PrimeX, we go beyond software development by partnering with clients and building
                systems that support measurable and sustainable digital transformation.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-16 bg-blue-900">
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

