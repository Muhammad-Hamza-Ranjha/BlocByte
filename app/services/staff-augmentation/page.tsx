import Link from 'next/link';
import { ArrowRight } from '../../../components/Icons';

export default function StaffAugmentation() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Scale Your Engineering Team. On Demand. On Budget. Without Compromise.</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access pre-vetted, top 1% engineering talent — ready to integrate with your team in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center">
                Build Your Team Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-dark transition-colors">
                Talk to a Solutions Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Staff Augmentation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 text-center">Understanding the Model</h2>
          <p className="text-lg text-gray-600 text-center">
            Staff augmentation is a flexible workforce strategy that embeds external engineering professionals directly into your existing team — without the overhead of traditional hiring. You define the role, set the standards, and we deliver engineers ready to contribute from day one. Unlike outsourcing, you keep full control of projects, processes, and timelines.
          </p>
        </div>
      </section>

      {/* 6 Reasons */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              '⚡ Top 1% Engineers — Rigorous technical screening, portfolio review, communication assessment',
              '🚀 Rapid Deployment — Engineers integrated within 1–2 weeks',
              '🔒 No Lock-In Contracts — Flexible terms with no hidden fees',
              '🌍 Global Talent Pool — 500+ specialists across every tech stack',
              '📊 Managed Quality — Structured workflows, proactive communication',
              '💰 Cost Efficiency — Offshore rates without offshore quality trade-offs'
            ].map((reason) => (
              <div key={reason} className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-600">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            <div className="text-center">
              <h3 className="font-semibold text-brand-dark mb-2">Frontend</h3>
              <p className="text-sm text-gray-600">React, Vue, Angular, Next.js</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-brand-dark mb-2">Backend</h3>
              <p className="text-sm text-gray-600">Node.js, Python, Java, .NET, Go</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-brand-dark mb-2">Mobile</h3>
              <p className="text-sm text-gray-600">Flutter, React Native, Swift, Kotlin</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-brand-dark mb-2">Data/AI</h3>
              <p className="text-sm text-gray-600">TensorFlow, PyTorch, Spark, Airflow</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-brand-dark mb-2">Cloud</h3>
              <p className="text-sm text-gray-600">AWS, GCP, Azure, Kubernetes, Docker</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-brand-dark mb-2">Blockchain</h3>
              <p className="text-sm text-gray-600">Solidity, Rust, Web3.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">Staff Aug vs Freelancing</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left font-semibold text-brand-dark">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-dark">Staff Augmentation (BlocBytes)</th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-dark">Freelancing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border-t">Accountability</td>
                  <td className="px-6 py-4 border-t">Full managed structure</td>
                  <td className="px-6 py-4 border-t">Individual only</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-t">Quality Control</td>
                  <td className="px-6 py-4 border-t">Vetted + monitored</td>
                  <td className="px-6 py-4 border-t">Inconsistent</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-t">Context Continuity</td>
                  <td className="px-6 py-4 border-t">Dedicated team member</td>
                  <td className="px-6 py-4 border-t">Juggling multiple clients</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-t">Onboarding Speed</td>
                  <td className="px-6 py-4 border-t">1–2 weeks</td>
                  <td className="px-6 py-4 border-t">Variable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-t">Cost Predictability</td>
                  <td className="px-6 py-4 border-t">Fixed rates</td>
                  <td className="px-6 py-4 border-t">Unpredictable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Global Cost Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Offshore augmentation that delivers — world-class talent at a fraction of local hiring cost, without the typical trade-offs.
          </h2>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              '📋 Define Your Needs — Share role requirements and team context',
              '🔍 We Match You — Shortlist of pre-vetted engineers in 48 hours',
              '🤝 You Interview & Approve — No surprises, full control',
              '🚀 Onboard & Ship — Engineer joins your workflow within days'
            ].map((step) => (
              <div key={step} className="text-center">
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Team?</h2>
          <p className="text-lg text-gray-300 mb-8">Schedule Your Free Strategy Call</p>
          <p className="text-gray-400 mb-8">No commitment. No sales pressure. Just a focused conversation about your engineering needs.</p>
          <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg">
            Schedule Your Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
