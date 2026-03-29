import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ERP Ecosystem - PrimeX Ltd',
  description: 'Explore PrimeX\'s comprehensive ERP ecosystem including Prime POS, Fleet, HR & Payroll, Accounting, and Analytics.',
};

export default function ERPPage() {
  const modules = [
    {
      name: "Prime POS",
      logo: "/modules/pos.png",
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
      logo: "/modules/fleet.png",
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
      logo: "/modules/payroll.png",
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
      logo: "/modules/account.png",
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
      logo: "/modules/ai.png",
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

  const moduleCardStyles = [
    'bg-blue-50 border-blue-100',
    'bg-indigo-50 border-indigo-100',
    'bg-violet-50 border-violet-100',
    'bg-sky-50 border-sky-100',
    'bg-cyan-50 border-cyan-100',
  ];

  const benefitCardStyles = [
    'bg-blue-50 border-blue-100',
    'bg-indigo-50 border-indigo-100',
    'bg-violet-50 border-violet-100',
    'bg-sky-50 border-sky-100',
    'bg-cyan-50 border-cyan-100',
    'bg-teal-50 border-teal-100',
  ];

  const iconChipStyles = [
    'bg-blue-100 text-blue-900',
    'bg-indigo-100 text-indigo-900',
    'bg-violet-100 text-violet-900',
    'bg-sky-100 text-sky-900',
    'bg-cyan-100 text-cyan-900',
    'bg-teal-100 text-teal-900',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3MscHJvZmVzc2lvbmFsLHRlY2h8fHx8fHwxNzc0Nzg2NTg4&ixlib=rb-4.0.3&q=80&w=1920"
          alt="Modern team collaborating in office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/45 to-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our ERP Ecosystem
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Five powerful modules working together to streamline your entire business operation. 
              Choose what you need, integrate seamlessly, and scale as you grow.
            </p>

          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Every Module
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each module is powerful on its own and even more valuable when connected as one unified ecosystem.
            </p>
          </div>
          <div className="space-y-16">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-5 inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-white border border-gray-200 shadow-sm">
                    <Image
                      src={module.logo}
                      alt={`${module.name} logo`}
                      width={72}
                      height={72}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{module.name}</h2>
                  <p className="text-blue-900 font-semibold mb-4 tracking-wide">{module.tagline}</p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{module.description}</p>
                  <Link
                    href="/contact"
                    className="text-blue-900 hover:text-blue-950 font-semibold inline-flex items-center transition-all duration-200 hover:translate-x-0.5"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className={`p-8 rounded-2xl border shadow-md shadow-gray-200/50 ${moduleCardStyles[index % moduleCardStyles.length]}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-5">Key Features</h3>
                    <ul className="space-y-3">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-blue-900 mr-3 shrink-0 mt-0.5"
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
      <section className="py-20 bg-gray-100">
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
              <div key={index} className={`p-7 rounded-2xl border shadow-md shadow-gray-300/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${benefitCardStyles[index % benefitCardStyles.length]}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${iconChipStyles[index % iconChipStyles.length]}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See our ERP ecosystem in action. Book a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold shadow-lg"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-blue-900 transition-colors duration-200 font-semibold"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

