import Link from 'next/link';
import { ArrowRight } from '../../../components/Icons';

export default function AIML() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI & ML Services</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">Eight capabilities. End-to-end AI ownership.</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Artificial intelligence isn&apos;t a future technology - it&apos;s the operational backbone of companies winning right now. Businesses applying AI to the right problems eliminate guesswork, automate work, and surface insights humans can&apos;t process at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI in Business: Why intelligent systems are now a competitive necessity.</h2>
          <p className="text-lg">AI creates structural advantages that compound over time. Partners with Microsoft.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Custom AI Model Development',
              'Machine Learning Engineering',
              'Natural Language Processing (NLP)',
              'Computer Vision',
              'AI-Powered Automation',
              'Predictive Analytics',
              'LLM Integration & Fine-Tuning',
              'AI Strategy Consulting',
            ].map((service) => (
              <div key={service} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">{service}</h3>
                <p className="text-gray-600">Advanced AI solutions for modern business challenges.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Microsoft Solutions Partner - Verified expertise. Enterprise-grade delivery.</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600">Placeholder for Microsoft partner badge</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              'End-to-end ownership from strategy to deployment',
              'Enterprise-grade infrastructure',
              'Domain expertise across verticals',
              'Rapid prototyping to production',
            ].map((reason) => (
              <div key={reason} className="text-center">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Implement AI?</h2>
          <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg">
            Schedule an AI Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
