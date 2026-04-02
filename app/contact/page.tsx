'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

const initialFormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
};
const fallbackContactEmail = 'ranjhah03@gmail.com';

type FormState = typeof initialFormData;

type SubmissionState =
  | { type: 'idle'; message: '' }
  | { type: 'success' | 'error'; message: string };

type ContactApiResponse = {
  message?: string;
  error?: string;
  code?: string;
};

function buildMailtoLink(formData: FormState) {
  const subject = formData.service
    ? `Website inquiry: ${formData.service}`
    : 'Website inquiry';
  const body = [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    `Company: ${formData.company || 'Not provided'}`,
    `Service: ${formData.service || 'Not selected'}`,
    '',
    'Message:',
    formData.message,
  ].join('\n');

  return `mailto:${fallbackContactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormData);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    type: 'idle',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fallbackMailtoHref, setFallbackMailtoHref] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (submissionState.type !== 'idle') {
      setSubmissionState({ type: 'idle', message: '' });
    }

    if (fallbackMailtoHref) {
      setFallbackMailtoHref('');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmissionState({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json().catch(() => null)) as ContactApiResponse | null;

      if (!response.ok) {
        if (response.status === 503 || payload?.code === 'CONTACT_NOT_CONFIGURED') {
          setFallbackMailtoHref(buildMailtoLink(formData));
          throw new Error(
            'The website form is temporarily unavailable. You can still send this message directly by email using the button below.'
          );
        }

        throw new Error(payload?.error ?? 'We could not send your message right now. Please try again.');
      }

      setSubmissionState({
        type: 'success',
        message:
          payload?.message ??
          'Thanks for reaching out. Your message is on its way to our team.',
      });
      setFormData(initialFormData);
    } catch (error) {
      setSubmissionState({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'We could not send your message right now. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
                {submissionState.type !== 'idle' ? (
                  <div
                    aria-live="polite"
                    className={`rounded-lg border px-4 py-3 text-sm ${
                      submissionState.type === 'success'
                        ? 'border-green-200 bg-green-50 text-green-800'
                        : 'border-red-200 bg-red-50 text-red-800'
                    }`}
                  >
                    {submissionState.message}
                  </div>
                ) : null}
                {fallbackMailtoHref ? (
                  <a
                    href={fallbackMailtoHref}
                    className="inline-flex items-center justify-center rounded-lg border border-brand-blue px-4 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                  >
                    Send via Email App
                  </a>
                ) : null}
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
                    autoComplete="name"
                    disabled={isSubmitting}
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
                    autoComplete="email"
                    disabled={isSubmitting}
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
                    autoComplete="organization"
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
