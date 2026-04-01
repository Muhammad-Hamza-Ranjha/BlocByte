import Link from 'next/link';
import { ArrowRight, CheckCircle } from '../../../components/Icons';

export default function WebAppDevelopment() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web & App Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Eight capabilities. One accountable team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose BlocBytes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Why Choose BlocBytes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Quality-first engineering</h3>
              <p className="text-gray-600">Senior developers with 5+ years experience, rigorous code reviews, and automated testing.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Transparent delivery</h3>
              <p className="text-gray-600">Agile sprints with daily standups, weekly demos, and real-time progress tracking.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Senior full-stack teams</h3>
              <p className="text-gray-600">No juniors or trainees. Every engineer is interview-vetted and production-ready.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-dark mb-2">On-time, on-budget delivery</h3>
              <p className="text-gray-600">Fixed-price contracts with milestone-based payments and guaranteed timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Our Web & App Development Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Full-stack web apps</h3>
              <p className="text-gray-600">End-to-end web applications with modern frameworks and scalable architecture.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">SaaS platforms</h3>
              <p className="text-gray-600">Multi-tenant SaaS solutions with subscription management and user analytics.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">E-commerce</h3>
              <p className="text-gray-600">Custom e-commerce platforms with payment integration and inventory management.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">CMS solutions</h3>
              <p className="text-gray-600">Content management systems with custom admin panels and API integrations.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">API development</h3>
              <p className="text-gray-600">RESTful and GraphQL APIs with comprehensive documentation and testing.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Cloud architecture</h3>
              <p className="text-gray-600">AWS, GCP, and Azure deployments with auto-scaling and monitoring.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">MVP development</h3>
              <p className="text-gray-600">Rapid MVP development to validate ideas and secure funding.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Legacy modernization</h3>
              <p className="text-gray-600">Migrate legacy systems to modern frameworks with zero downtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {['Healthcare', 'Fintech', 'Logistics', 'Real Estate', 'EdTech', 'Retail', 'Legal Tech', 'On-Demand'].map((industry) => (
              <div key={industry} className="bg-brand-accent-gray rounded-lg p-4 text-center">
                <span className="text-brand-dark font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Proven tools. Right choices. No lock-in.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'Node.js', 'Python', 'Django', 'Next.js', 'AWS', 'PostgreSQL', 'Docker', 'TypeScript', 'GraphQL', 'Kubernetes', 'MongoDB'].map((tech) => (
              <div key={tech} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-brand-dark font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Our Development Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Discovery</h3>
              <p className="text-gray-600">Requirements gathering, technical analysis, and project planning.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Architecture</h3>
              <p className="text-gray-600">System design, technology selection, and infrastructure planning.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Design</h3>
              <p className="text-gray-600">UI/UX design, prototyping, and user experience optimization.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Development</h3>
              <p className="text-gray-600">Agile development with regular code reviews and testing.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">QA</h3>
              <p className="text-gray-600">Comprehensive testing, performance optimization, and security audits.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">6</div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Deployment & Support</h3>
              <p className="text-gray-600">Production deployment, monitoring, and ongoing maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Web Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss your requirements and build something amazing together.
          </p>
          <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg">
            Start Your Web Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
