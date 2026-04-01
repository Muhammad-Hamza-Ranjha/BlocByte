import Link from 'next/link';
import { ArrowRight, Clock, FileText, CreditCard, BarChart3 } from '../../components/Icons';

export default function TradingPlatform() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Source Smarter. Trade Faster. Close Every Deal with Confidence.</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pakistan&apos;s most complete B2B digital trading platform - built for procurement teams, exporters, and supply chain directors.
            </p>
            <p className="text-lg text-gray-400 mb-12">Cut sourcing time by 30%. Eliminate procurement bottlenecks. Get paid faster.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center">
                Start Sourcing Free - No Credit Card Required <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-dark transition-colors">
                Book a Live Platform Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-16 h-16 text-brand-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-dark mb-2">30% Faster Sourcing Cycles</h3>
              <p className="text-gray-600">Reduce time-to-market with automated sourcing workflows.</p>
            </div>
            <div className="text-center">
              <FileText className="w-16 h-16 text-brand-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Paperless RFQ Management</h3>
              <p className="text-gray-600">Digital RFQs with real-time collaboration and approval workflows.</p>
            </div>
            <div className="text-center">
              <CreditCard className="w-16 h-16 text-brand-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Escrow-Protected Payments</h3>
              <p className="text-gray-600">Secure transactions with escrow protection and milestone payments.</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-brand-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-dark mb-2">End-to-End Audit Trail</h3>
              <p className="text-gray-600">Complete transaction history with compliance-ready documentation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">Everything Your Procurement Team Needs - In One Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Supplier Discovery Engine - AI-powered supplier matching and verification',
              'Digital RFQ & Quotation Management - Streamlined bidding and negotiation',
              'Order & PO Management - Automated purchase order processing',
              'Escrow Payment System - Secure, milestone-based payments',
              'Shipment Tracking - Real-time logistics and delivery monitoring',
              'Compliance & Documentation Vault - Centralized document management',
              'Analytics Dashboard - Performance metrics and insights',
              'Multi-User Team Access - Role-based permissions and collaboration',
            ].map((feature) => (
              <div key={feature} className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">Built to Be Trusted</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Security</h3>
              <ul className="space-y-2 text-gray-600">
                <li>SSL encryption</li>
                <li>Escrow protection</li>
                <li>KYC verification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Compliance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Audit-ready records</li>
                <li>Document management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Results</h3>
              <ul className="space-y-2 text-gray-600">
                <li>500+ Pakistani businesses</li>
                <li>Sourcing on BlocBytes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-lg text-gray-600 mb-6 italic">
              &ldquo;We reduced our sourcing cycle from three weeks to four days. The RFQ tool alone saved us 40 hours a month in back-and-forth emails, and the escrow feature finally gave our finance team the confidence to release payments on time.&rdquo;
            </p>
            <cite className="font-semibold text-brand-dark">Tariq Mehmood, Head of Procurement, Indus Textile Group, Lahore</cite>
          </blockquote>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              'What are the platform pricing options?',
              'How long does onboarding take?',
              'How secure are the payments?',
              'How do you verify suppliers?',
              'What are the contract terms?',
            ].map((question) => (
              <div key={question} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{question}</h3>
                <p className="text-gray-600">Detailed answer about {question.toLowerCase()}...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Competitors Are Already Sourcing Digitally. Don&apos;t Let Manual Procurement Cost You Another Deal.</h2>
          <div className="space-y-4">
            <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg">
              Request Your Free 30-Day Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-300">
              <span>No setup fee</span>
              <span>No long-term contract</span>
              <span>Dedicated onboarding specialist included</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
