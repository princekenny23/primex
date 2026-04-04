import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: "PrimeX ERP (Under Development)",
      description: "A unified ERP platform in active development that includes eCommerce capabilities and connects operations, finance, inventory, and reporting in one intelligent workflow.",
    },
    {
      title: "WaaS (Website as a Service)",
      description: "Subscription-based website delivery where PrimeX designs, hosts, and continuously improves your website as a managed service.",
    },
    {
      title: "PrimePOS",
      description: "Smart point-of-sale solution for retail and restaurant businesses with fast billing, inventory control, and sales tracking.",
      ctaLabel: "Book Demo",
      ctaHref: "/contact",
    },
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3MscHJvZmVzc2lvbmFsLHRlY2h8fHx8fHwxNzc0Nzg2NTg4&ixlib=rb-4.0.3&q=80&w=1920"
          alt="Professional development team working together"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with Smart Digital Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              PrimeX Ltd is your trusted business partner, helping you streamline operations, increase revenue,
              and scale with confidence through PrimeX ERP (under development) with eCommerce capabilities,
              Website-as-a-Service (WaaS), and mobile app development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:justify-start">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Talk to PrimeX
              </Link>
              <Link
                href="/erp"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore ERP Solutions
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
                PrimeX is a technology company delivering scalable business solutions through PrimeX ERP with built-in
                eCommerce capabilities, WaaS, and mobile app development.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We help businesses improve productivity, maintain stronger online operations, and support long-term digital
                growth with reliable systems and practical service delivery.
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
            <div className="relative min-h-80 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/hero-image.jpg"
                alt="PrimeX technology solutions dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-blue-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                  Digital Solutions Built for Growth
                </div>
                <p className="mt-4 max-w-md text-lg text-white/90">
                  PrimeX combines operational software and managed web services to help businesses run with clarity and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PrimeX delivers practical digital services that help businesses operate better, sell more, and scale confidently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                {service.ctaLabel && service.ctaHref && (
                  <Link
                    href={service.ctaHref}
                    className="inline-block mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                  >
                    {service.ctaLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PrimeX Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PrimeX?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver practical business solutions backed by local insight and reliable support.
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
            Partner with PrimeX to modernize operations, improve transparency, and scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
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
