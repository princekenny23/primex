import Link from 'next/link';

export default function Home() {
  const erpModules = [
    {
      title: "Prime POS",
      icon: "🛒",
      description: "Complete point-of-sale solution for retail and restaurant management with real-time inventory tracking."
    },
    {
      title: "Prime Fleet",
      icon: "🚚",
      description: "Advanced logistics and GPS tracking system for fleet management and route optimization."
    },
    {
      title: "Prime HR & Payroll",
      icon: "👥",
      description: "Comprehensive human resource management with automated payroll processing and employee self-service."
    },
    {
      title: "Prime Accounting",
      icon: "💰",
      description: "Full-featured accounting software with financial reporting, invoicing, and expense management."
    },
    {
      title: "Prime Analytics",
      icon: "📊",
      description: "AI-powered business intelligence with predictive analytics and customizable dashboards."
    }
  ];

  const whyChoose = [
    {
      title: "Integrated Ecosystem",
      description: "All modules work seamlessly together, sharing data in real-time for better decision making."
    },
    {
      title: "Localized Solutions",
      description: "Built specifically for African markets with local compliance and currency support."
    },
    {
      title: "Scalable SaaS",
      description: "Cloud-based platform that grows with your business, from startup to enterprise."
    },
    {
      title: "Reliable Support",
      description: "24/7 dedicated customer support with local expertise and rapid response times."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise Software Solutions
              <span className="block text-blue-600 mt-2">Built for African Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business operations with PrimeX's integrated ERP ecosystem. 
              Streamline processes, boost productivity, and drive growth with our comprehensive suite of business tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book a Demo
              </Link>
              <Link
                href="/erp"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore ERP Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About PrimeX Ltd
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We are a leading technology company specializing in integrated enterprise software solutions. 
                Our mission is to empower African businesses with world-class ERP tools that drive efficiency and growth.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience and a deep understanding of local business needs, we've built a comprehensive 
                ecosystem that adapts to your unique requirements.
              </p>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
              >
                Learn more about us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Active Clients</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Modules Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our ERP Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five powerful modules working together to give you complete control over your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {erpModules.map((module, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border border-gray-100"
              >
                <div className="text-5xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
            ))}
            <div className="bg-linear-to-br from-blue-600 to-blue-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-xl font-bold mb-3">Explore All Modules</h3>
              <p className="mb-4">Discover how our integrated ecosystem can transform your business</p>
              <Link
                href="/erp"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PrimeX Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PrimeX?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just software - we're your partner in business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using PrimeX to streamline their operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
