import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ERP Ecosystem - PrimeX Ltd',
  description: 'Explore PrimeX\'s comprehensive ERP ecosystem including Prime POS, Fleet, HR & Payroll, Accounting, and Analytics.',
};

export default function ERPPage() {
  const modules = [
    {
      name: "Prime POS",
      icon: "🛒",
      tagline: "Complete Point of Sale Solution",
      description: "Streamline your retail or restaurant operations with our comprehensive POS system. Manage sales, inventory, customers, and employees all in one place.",
      features: [
        "Multi-location support",
        "Real-time inventory tracking",
        "Customer loyalty programs",
        "Sales analytics and reporting",
        "Offline mode capability",
        "Multiple payment methods"
      ]
    },
    {
      name: "Prime Fleet",
      icon: "🚚",
      tagline: "Logistics & GPS Tracking",
      description: "Take control of your fleet with real-time GPS tracking, route optimization, and comprehensive logistics management. Reduce costs and improve delivery efficiency.",
      features: [
        "Real-time GPS tracking",
        "Route optimization",
        "Fuel management",
        "Maintenance scheduling",
        "Driver performance monitoring",
        "Delivery proof of delivery"
      ]
    },
    {
      name: "Prime HR & Payroll",
      icon: "👥",
      tagline: "Human Resource Management",
      description: "Simplify HR operations with automated payroll processing, leave management, employee self-service portals, and comprehensive HR analytics.",
      features: [
        "Automated payroll processing",
        "Leave and attendance tracking",
        "Employee self-service portal",
        "Performance management",
        "Recruitment and onboarding",
        "Compliance management"
      ]
    },
    {
      name: "Prime Accounting",
      icon: "💰",
      tagline: "Financial Management System",
      description: "Manage your finances with confidence using our full-featured accounting software. From invoicing to financial reporting, we've got you covered.",
      features: [
        "General ledger management",
        "Accounts payable/receivable",
        "Invoice creation and tracking",
        "Expense management",
        "Financial reporting",
        "Multi-currency support"
      ]
    },
    {
      name: "Prime Analytics",
      icon: "📊",
      tagline: "AI-Powered Business Intelligence",
      description: "Make data-driven decisions with our AI-powered analytics platform. Get insights, predictions, and customizable dashboards that help you stay ahead.",
      features: [
        "Customizable dashboards",
        "Predictive analytics",
        "Real-time reporting",
        "Data visualization",
        "AI-powered insights",
        "Cross-module analytics"
      ]
    }
  ];

  const benefits = [
    {
      title: "Fully Integrated",
      description: "All modules share data seamlessly, eliminating duplicate entry and ensuring consistency across your organization."
    },
    {
      title: "Cloud-Based",
      description: "Access your business data from anywhere, anytime. No infrastructure costs, automatic updates, and enterprise-grade security."
    },
    {
      title: "Scalable",
      description: "Start with what you need and add modules as you grow. Our solutions scale from small businesses to large enterprises."
    },
    {
      title: "Customizable",
      description: "Tailor the system to your unique business processes with flexible configurations and custom fields."
    },
    {
      title: "Mobile-Ready",
      description: "All modules are optimized for mobile devices, allowing you to run your business on the go."
    },
    {
      title: "Local Support",
      description: "Get help when you need it with 24/7 local support that understands your business context."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our ERP Ecosystem
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Five powerful modules working together to streamline your entire business operation. 
              Choose what you need, integrate seamlessly, and scale as you grow.
            </p>
            <Link
              href="/book-demo"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-6xl mb-4">{module.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{module.name}</h2>
                  <p className="text-blue-600 font-semibold mb-4">{module.tagline}</p>
                  <p className="text-lg text-gray-600 mb-6">{module.description}</p>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-blue-600 mr-3 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our ERP Ecosystem?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just software - a comprehensive solution designed for your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See our ERP ecosystem in action. Book a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
