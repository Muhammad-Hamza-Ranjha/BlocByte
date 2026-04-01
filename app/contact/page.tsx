'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let&apos;s Build Something Great Together</h1>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-8">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="web-app-development">Web & App Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="ai-ml">AI & ML Services</option>
                    <option value="blockchain-web3">Blockchain & Web3</option>
                    <option value="gis">GIS Services</option>
                    <option value="staff-augmentation">Staff Augmentation</option>
                    <option value="amazon-ecommerce">Amazon & eCommerce</option>
                    <option value="trading-platform">Trading Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Email</h3>
                  <p className="text-gray-600">hello@blocbytes.com</p>
                  <p className="text-sm text-gray-500 mt-1">Response within 24 hours guaranteed</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Website</h3>
                  <p className="text-gray-600">www.blocbytes.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Global Offices</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🇺🇸</div>
                      <p className="text-sm text-gray-600">USA</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🇬🇧</div>
                      <p className="text-sm text-gray-600">UK</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🇨🇦</div>
                      <p className="text-sm text-gray-600">Canada</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🇦🇺</div>
                      <p className="text-sm text-gray-600">Australia</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🇦🇪</div>
                      <p className="text-sm text-gray-600">Middle East</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
