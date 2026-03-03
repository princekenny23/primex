'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employeeCount: '',
    modules: [] as string[],
    preferredDate: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const availableModules = [
    'Prime POS',
    'Prime Fleet',
    'Prime HR & Payroll',
    'Prime Accounting',
    'Prime Analytics'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          employeeCount: '',
          modules: [],
          preferredDate: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleModuleChange = (module: string) => {
    setFormData({
      ...formData,
      modules: formData.modules.includes(module)
        ? formData.modules.filter(m => m !== module)
        : [...formData.modules, module]
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-brfrom-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book a Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our ERP ecosystem in action. Schedule a personalized demo with our team and discover how PrimeX can transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Schedule Your Demo
            </h2>

            {status === 'success' && (
              <div className="mb-8 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                <p className="font-semibold">Demo Requested Successfully!</p>
                <p className="mt-1">Thank you for your interest. Our team will contact you within 24 hours to confirm your demo session.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                Sorry, something went wrong. Please try again or contact us directly at sales@primexltd.com
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees *
                </label>
                <select
                  id="employeeCount"
                  name="employeeCount"
                  required
                  value={formData.employeeCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Modules of Interest *
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {availableModules.map((module) => (
                    <label key={module} className="flex items-center p-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
                      <input
                        type="checkbox"
                        checked={formData.modules.includes(module)}
                        onChange={() => handleModuleChange(module)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-gray-700">{module}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Demo Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Our team will contact you to confirm the final date and time</p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Comments
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business needs or any specific questions you have..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Submitting...' : 'Request Demo'}
              </button>
            </form>
          </div>

          {/* What to Expect */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Request</h3>
              <p className="text-gray-600">Fill out the form above with your details and preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We'll Contact You</h3>
              <p className="text-gray-600">Our team will reach out within 24 hours to schedule your demo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Demo</h3>
              <p className="text-gray-600">Experience our ERP ecosystem with a personalized walkthrough</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
