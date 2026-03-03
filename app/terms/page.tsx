import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - PrimeX Ltd',
  description: 'Terms of Service for PrimeX Ltd',
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the PrimeX Ltd website and services, you accept and agree to be bound by 
              the terms and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on PrimeX Ltd's website for personal, 
              non-commercial viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Service Terms</h2>
            <p>Our ERP services are provided under the following terms:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services are provided on a subscription basis</li>
              <li>Pricing and features may change with notice</li>
              <li>Service availability is subject to maintenance and updates</li>
              <li>Users are responsible for data security and backups</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              PrimeX Ltd shall not be liable for any indirect, incidental, special, consequential or punitive 
              damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Modifications</h2>
            <p>
              PrimeX Ltd reserves the right to revise these terms at any time. By using this website and our 
              services, you agree to be bound by the current version of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact:
              <br />
              Email: legal@primexltd.com
              <br />
              Phone: +XXX XXX XXXX
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
