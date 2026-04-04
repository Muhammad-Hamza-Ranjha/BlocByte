import Link from 'next/link';
import { ArrowRight, CheckCircle } from '../components/Icons';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Engineering Ideas.<br />Delivering Impact.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
                We Don&apos;t Just Build Software. We Build What Your Business Becomes.
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0">
                BlocBytes is a premium engineering partner for founders, CTOs, and product teams who refuse to compromise on quality. From first wireframe to production deployment - we own the outcome alongside you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" prefetch={false} className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="#services" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-dark transition-colors">
                  View Our Work
                </Link>
              </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Six Disciplines. One Accountable Partner.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re launching a startup MVP or modernizing enterprise infrastructure, BlocBytes delivers across the full engineering stack - with the same senior team, the same standards, and the same ownership mindset on every engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Link href="/services/web-app-development" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Web & App Development</h3>
                <p className="text-gray-600 mb-4">Full-stack web applications, SaaS platforms, and scalable digital solutions.</p>
                <div className="flex items-center text-brand-blue group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/services/mobile-development" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Mobile Development</h3>
                <p className="text-gray-600 mb-4">Native and cross-platform mobile apps that users actually love.</p>
                <div className="flex items-center text-brand-blue group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/services/ai-ml" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-4">Custom AI models and ML solutions that drive real business outcomes.</p>
                <div className="flex items-center text-brand-blue group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/services/blockchain-web3" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⛓️</div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Blockchain & Web3</h3>
                <p className="text-gray-600 mb-4">Decentralized applications and blockchain solutions for the future.</p>
                <div className="flex items-center text-brand-blue group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/services/gis" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">GIS Services</h3>
                <p className="text-gray-600 mb-4">Geospatial software and location intelligence solutions.</p>
                <div className="flex items-center text-brand-blue group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/services/staff-augmentation" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Staff Augmentation</h3>
                <p className="text-gray-600 mb-4">Pre-vetted engineering talent ready to integrate with your team.</p>
                <div className="flex items-center text-brand-blue group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center">
            <Link href="#services" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center">
              Explore All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Engineering Built on Partnership, Not Transactions.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">500+</div>
              <p className="text-gray-600">Pre-Vetted Developers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">97%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">5</div>
              <p className="text-gray-600">Global Markets</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">1-2</div>
              <p className="text-gray-600">Weeks to Staff</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Real Projects. Real Outcomes.</h2>
            <p className="text-lg text-gray-600">Every case study represents a problem solved, a deadline met, and a business measurably changed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-brand-blue font-semibold mb-2">FINTECH</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Payment Platform MVP</h3>
              <p className="text-gray-600 mb-4">Reduced transaction processing time by 60% with real-time analytics dashboard.</p>
              <Link href="#" className="text-brand-blue hover:underline">View Case Study -&gt;</Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-brand-blue font-semibold mb-2">HEALTHCARE</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Telemedicine App</h3>
              <p className="text-gray-600 mb-4">Connected 10,000+ patients with healthcare providers in 3 months.</p>
              <Link href="#" className="text-brand-blue hover:underline">View Case Study -&gt;</Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-brand-blue font-semibold mb-2">LOGISTICS</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Supply Chain Platform</h3>
              <p className="text-gray-600 mb-4">Improved delivery efficiency by 40% with AI-powered routing.</p>
              <Link href="#" className="text-brand-blue hover:underline">View Case Study -&gt;</Link>
            </div>
          </div>
          <div className="text-center">
            <Link href="#" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center">
              See the Full Portfolio <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Partnerships That Speak for Themselves.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 mb-4">&ldquo;BlocBytes delivered our MVP in 8 weeks with quality that exceeded our expectations. Their engineering team became an extension of ours.&rdquo;</p>
              <div className="font-semibold text-brand-dark">Sarah Chen</div>
              <div className="text-sm text-gray-500">CTO, HealthTech Solutions</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 mb-4">&ldquo;The transparency and communication were outstanding. They didn&apos;t just build our app - they helped us think through the product strategy.&rdquo;</p>
              <div className="font-semibold text-brand-dark">Michael Rodriguez</div>
              <div className="text-sm text-gray-500">Founder, FinFlow</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 mb-4">&ldquo;From concept to production, BlocBytes owned every aspect of the delivery. The result was a platform that scaled beyond our initial projections.&rdquo;</p>
              <div className="font-semibold text-brand-dark">Emma Thompson</div>
              <div className="text-sm text-gray-500">VP Engineering, LogiCorp</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Next Product Starts With One Conversation.</h2>
          <p className="text-xl text-gray-300 mb-8">No Pitch Decks. No Sales Calls. Just a Real Discussion About Your Problem.</p>
          <p className="text-lg text-gray-400 mb-12">
            Tell us what you&apos;re building. We&apos;ll tell you exactly how we&apos;d approach it, what it would take, and whether we&apos;re the right fit. If we&apos;re not, we&apos;ll tell you that too.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Free initial consultation - we come prepared, not empty-handed</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Response within 24 hours - always, without exception</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Flexible engagement models - fixed price, retainer, or dedicated team</span>
            </div>
          </div>
          <div className="space-y-4">
            <Link href="/contact" prefetch={false} className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg">
              Book Your Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="text-gray-400">Or email us directly: hello@blocbytes.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
