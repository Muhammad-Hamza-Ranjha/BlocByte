import Link from 'next/link';
import { ArrowRight, CheckCircle } from '../../../components/Icons';

export default function AmazonEcommerce() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Amazon & eCommerce — Done For You.</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-service Amazon management and eCommerce solutions for brands that want results, not reports.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">Everything your store needs. Nothing left to chance.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Amazon Store Setup & Optimization',
              'Product Listing & SEO Copywriting',
              'Amazon PPC Campaign Management',
              'Brand Registry & Protection',
              'Inventory & Supply Chain Management',
              'Shopify / WooCommerce Development',
              'Conversion Rate Optimization',
              'Analytics & Reporting Dashboards'
            ].map((service) => (
              <div key={service} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">{service}</h3>
                <p className="text-gray-600">Comprehensive eCommerce solutions for modern brands.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is the Done-For-You Model Right for You */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">You are a fit if any of these describe you.</h2>
          <div className="space-y-4">
            {[
              "You're a brand owner who wants Amazon revenue without the operational burden",
              "You've tried Amazon before but haven't found consistent growth",
              "You're launching a new product and want expert-led market entry",
              "You want a transparent partner who reports results, not just activity"
            ].map((item) => (
              <div key={item} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Case */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">The numbers that make this decision easy.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">$600B+</div>
              <p className="text-gray-600">in Amazon GMV</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">58%</div>
              <p className="text-gray-600">of sales from third-party sellers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">3–6x</div>
              <p className="text-gray-600">Average ROI on managed accounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BlocBytes */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">What separates us from every other agency making promises.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              'Data-driven strategy',
              'Full transparency',
              'End-to-end management',
              'Proven track record'
            ].map((reason) => (
              <div key={reason} className="text-center">
                <h3 className="text-lg font-semibold text-brand-dark">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Conquer Amazon?</h2>
          <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg">
            Book Your Free Amazon Audit <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
