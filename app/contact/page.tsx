'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

type FormState = typeof initialFormData;
type FieldErrors = Partial<Record<keyof FormState, string>>;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmissionState =
  | { type: 'idle'; message: '' }
  | { type: 'success' | 'error'; message: string };

type ContactApiResponse = {
  success?: boolean;
  message?: string;
  error?: string;
};

function validateFormData(formData: FormState) {
  const errors: FieldErrors = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!emailPattern.test(formData.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    type: 'idle',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setFieldErrors((currentErrors) => {
      if (!currentErrors[name as keyof FormState]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name as keyof FormState];
      return nextErrors;
    });

    if (submissionState.type !== 'idle') {
      setSubmissionState({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };
    const validationErrors = validateFormData(trimmedFormData);

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setSubmissionState({ type: 'idle', message: '' });
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});
    setSubmissionState({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedFormData),
      });

      const payload = (await response.json().catch(() => null)) as ContactApiResponse | null;

      if (!response.ok) {
        throw new Error(payload?.error ?? 'Something went wrong. Please try again.');
      }

      setSubmissionState({
        type: 'success',
        message: 'Your message has been sent!',
      });
      setFormData(initialFormData);
    } catch (error) {
      setSubmissionState({
        type: 'error',
        message: error instanceof Error ? 'Something went wrong. Please try again.' : 'Something went wrong. Please try again.',
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
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                  {fieldErrors.name ? (
                    <p className="mt-2 text-sm text-red-600">{fieldErrors.name}</p>
                  ) : null}
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
                  {fieldErrors.email ? (
                    <p className="mt-2 text-sm text-red-600">{fieldErrors.email}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="How can we help?"
                  />
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
                  {fieldErrors.message ? (
                    <p className="mt-2 text-sm text-red-600">{fieldErrors.message}</p>
                  ) : null}
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
                  <p className="text-gray-600">ranjhah03@gmail.com</p>
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
