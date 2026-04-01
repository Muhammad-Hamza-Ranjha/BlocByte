import Link from 'next/link';
import { ArrowRight, Users, Clock, Shield, MessageSquare } from '../../../components/Icons';

export default function MobileDevelopment() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ship Mobile Apps That Users Actually Love
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">500+</div>
                <p className="text-gray-300">Pre-Vetted Developers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">97%</div>
                <p className="text-gray-300">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">1–2</div>
                <p className="text-gray-300">Weeks Staffing Turnaround</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">7-Day</div>
                <p className="text-gray-300">Risk-Free Trial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Android App Development</h3>
              <p className="text-gray-600">Kotlin, high-performance native apps for full Android ecosystem. Play Store compliant, scalable architecture.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">iOS App Development</h3>
              <p className="text-gray-600">Swift engineers, Apple HIG compliant, ARKit/HealthKit/CoreML integrations.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">React Native App Development</h3>
              <p className="text-gray-600">One codebase, two platforms, up to 40% faster development timeline.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔀</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Hybrid App Development</h3>
              <p className="text-gray-600">Ionic and web-native frameworks, unified codebase, broad device reach.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Cross-Platform (Flutter)</h3>
              <p className="text-gray-600">Single Dart codebase delivering native performance on iOS, Android, and web. 60+ products shipped.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BlocBytes */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Why BlocBytes for Mobile Development
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Staffed in 1–2 Weeks</h3>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-dark mb-2">7-Day Risk-Free Trial</h3>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-dark mb-2">500+ Pre-Vetted Developers</h3>
            </div>
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-dark mb-2">97% Customer Satisfaction</h3>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Daily Collaborative Meetings</h3>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Deep Industry Expertise</h3>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">Healthcare, Fintech, On-Demand Services</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Technology Stack
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['Flutter', 'React Native', 'Swift', 'Kotlin', 'Ionic', 'Elixir', 'Python'].map((tech) => (
              <div key={tech} className="bg-brand-accent-gray rounded-lg p-4 text-center">
                <span className="text-brand-dark font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Development Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
            {[
              'Planning',
              'Design',
              'MVP Dev',
              'Product Dev',
              'QA',
              'DevOps',
              'Support'
            ].map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-brand-dark">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
            Operating Globally. Delivering Locally.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { flag: '🇺🇸', country: 'USA' },
              { flag: '🇬🇧', country: 'UK' },
              { flag: '🇨🇦', country: 'Canada' },
              { flag: '🇦🇺', country: 'Australia' },
              { flag: '🇦🇪', country: 'Middle East' }
            ].map(({ flag, country }) => (
              <div key={country} className="text-center">
                <div className="text-4xl mb-2">{flag}</div>
                <span className="text-brand-dark font-semibold">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg">
            Book a Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
