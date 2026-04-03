'use client';

import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  honeypot: '',
};

type FormState = typeof initialFormData;
type FieldErrors = Partial<Record<keyof FormState, string>>;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[\p{L}\s]+$/u;

type SubmissionState =
  | { type: 'idle'; message: '' }
  | { type: 'success' | 'error'; message: string };

type ContactApiResponse = {
  success?: boolean;
  message?: string;
  error?: string;
};

function sanitizeFormData(formData: FormState) {
  return {
    name: formData.name.trim().replace(/\s+/g, ' '),
    email: formData.email.trim(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
    honeypot: formData.honeypot.trim(),
  };
}

function validateFormData(formData: FormState) {
  const errors: FieldErrors = {};
  const sanitizedFormData = sanitizeFormData(formData);

  if (!sanitizedFormData.name) {
    errors.name = 'Name is required.';
  } else if (sanitizedFormData.name.length < 2 || sanitizedFormData.name.length > 100) {
    errors.name = 'Name must be between 2 and 100 characters.';
  } else if (!namePattern.test(sanitizedFormData.name)) {
    errors.name = 'Name may only contain letters and spaces.';
  }

  if (!sanitizedFormData.email) {
    errors.email = 'Email is required.';
  } else if (!emailPattern.test(sanitizedFormData.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (sanitizedFormData.subject.length > 150) {
    errors.subject = 'Subject must be 150 characters or fewer.';
  }

  if (!sanitizedFormData.message) {
    errors.message = 'Message is required.';
  } else if (
    sanitizedFormData.message.length < 10 ||
    sanitizedFormData.message.length > 2000
  ) {
    errors.message = 'Message must be between 10 and 2000 characters.';
  }

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormData);
  const [touchedFields, setTouchedFields] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    type: 'idle',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fieldErrors = validateFormData(formData);
  const isFormValid = Object.keys(fieldErrors).length === 0;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    if (submissionState.type !== 'idle') {
      setSubmissionState({ type: 'idle', message: '' });
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;

    setTouchedFields((currentTouchedFields) => ({
      ...currentTouchedFields,
      [name]: true,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedFormData = sanitizeFormData(formData);
    const validationErrors = validateFormData(trimmedFormData);
    setHasTriedSubmit(true);

    if (Object.keys(validationErrors).length > 0) {
      setSubmissionState({ type: 'idle', message: '' });
      return;
    }

    setIsSubmitting(true);
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
      setTouchedFields({});
      setHasTriedSubmit(false);
    } catch (error) {
      setSubmissionState({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
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
                  <label
                    htmlFor="honeypot"
                    className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                  >
                    Leave this field empty
                  </label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                    aria-hidden="true"
                  />
                </div>
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
                    onBlur={handleBlur}
                    autoComplete="name"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                  {fieldErrors.name && (touchedFields.name || hasTriedSubmit) ? (
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
                    onBlur={handleBlur}
                    autoComplete="email"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                  {fieldErrors.email && (touchedFields.email || hasTriedSubmit) ? (
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
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="How can we help?"
                  />
                  {fieldErrors.subject && (touchedFields.subject || hasTriedSubmit) ? (
                    <p className="mt-2 text-sm text-red-600">{fieldErrors.subject}</p>
                  ) : null}
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
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                  {fieldErrors.message && (touchedFields.message || hasTriedSubmit) ? (
                    <p className="mt-2 text-sm text-red-600">{fieldErrors.message}</p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="w-full bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
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
