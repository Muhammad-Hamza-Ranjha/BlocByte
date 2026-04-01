import Link from 'next/link';
import { ArrowRight, CheckCircle } from '../../components/Icons';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 mb-6">About BlocBytes</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Senior engineering teams for companies that care about outcomes.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
                BlocBytes partners with founders, CTOs, and product leaders to turn complex ideas into dependable software, shipped with clarity and accountability.
              </p>
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center"
              >
                Book a Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                We operate like a product-minded engineering partner, not a ticket-taking vendor.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our work spans product strategy, architecture, delivery, and long-term support. We help teams launch MVPs, modernize critical systems, and scale delivery capacity without lowering standards.
              </p>
              <p className="text-lg text-gray-600">
                The goal is simple: build the right thing, build it well, and stay accountable for what happens after launch.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-accent-gray rounded-lg p-6">
                <div className="text-4xl font-bold text-brand-blue mb-2">500+</div>
                <p className="text-brand-dark font-semibold mb-1">Pre-vetted developers</p>
                <p className="text-sm text-gray-600">Deep coverage across product, cloud, mobile, data, and blockchain.</p>
              </div>
              <div className="bg-brand-accent-gray rounded-lg p-6">
                <div className="text-4xl font-bold text-brand-blue mb-2">97%</div>
                <p className="text-brand-dark font-semibold mb-1">Customer satisfaction</p>
                <p className="text-sm text-gray-600">Measured by delivery consistency, communication, and business impact.</p>
              </div>
              <div className="bg-brand-accent-gray rounded-lg p-6">
                <div className="text-4xl font-bold text-brand-blue mb-2">5</div>
                <p className="text-brand-dark font-semibold mb-1">Global markets</p>
                <p className="text-sm text-gray-600">USA, UK, Canada, Australia, and the Middle East.</p>
              </div>
              <div className="bg-brand-accent-gray rounded-lg p-6">
                <div className="text-4xl font-bold text-brand-blue mb-2">1-2</div>
                <p className="text-brand-dark font-semibold mb-1">Weeks to staff</p>
                <p className="text-sm text-gray-600">Fast onboarding without sacrificing technical screening quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">What clients count on us for</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our delivery approach is built around trust, technical judgment, and shared ownership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Clear technical leadership',
                copy: 'We make architecture, trade-offs, and delivery risks visible early so teams can make better decisions faster.',
              },
              {
                title: 'Reliable execution',
                copy: 'From sprint planning to production support, we focus on predictable delivery rather than presentation-heavy process.',
              },
              {
                title: 'Flexible engagement',
                copy: 'Dedicated teams, staff augmentation, and project-based delivery models are structured around what the business actually needs.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How we like to work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Senior engineers involved from discovery through delivery',
                'Direct communication with the team doing the work',
                'Practical product thinking, not just implementation',
                'Honest recommendations, even when the answer is no',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-300 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            If you need a team that can think deeply and ship reliably, we should talk.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tell us what you are building, where delivery is blocked, or what capability you need to add next.
          </p>
          <Link
            href="/contact"
            className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg"
          >
            Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
