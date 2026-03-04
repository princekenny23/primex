import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - PrimeX Ltd',
  description: 'Privacy Policy for PrimeX Ltd',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              PrimeX Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, company name</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process demo requests and service inquiries</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal 
              information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: primexltd876@gmail.com
              <br />
              Phone: +265 997575865
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
