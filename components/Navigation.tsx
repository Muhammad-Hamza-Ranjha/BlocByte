import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { ChevronDown } from './Icons';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  return (
    <nav className="site-nav sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3 gap-4">
          <BrandLogo className="shrink-0" imageClassName="h-8 md:h-9 w-auto" priority />

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-brand-blue transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-panel absolute top-full left-0 mt-3 w-64 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible translate-y-2 scale-[0.98] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300">
                <div className="py-2">
                  <Link href="/services/web-app-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue">Web & App Development</Link>
                  <Link href="/services/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue">Mobile Development</Link>
                  <Link href="/services/ai-ml" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue">AI & ML Services</Link>
                  <Link href="/services/blockchain-web3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue">Blockchain & Web3</Link>
                  <Link href="/services/gis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue">GIS Services</Link>
                  <Link href="/services/staff-augmentation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue">Staff Augmentation</Link>
                  <Link href="/services/amazon-ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue">Amazon & eCommerce</Link>
                </div>
              </div>
            </div>
            <Link href="/trading-platform" className="text-gray-700 hover:text-brand-blue transition-colors">Trading Platform</Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-blue transition-colors">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-blue transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <Link href="/contact" className="bg-brand-blue text-white px-6 py-2.5 rounded-lg hover:bg-blue-600 transition-colors">
                Book a Consultation
              </Link>
            </div>
            <div className="md:hidden">
              <button className="theme-toggle" aria-label="Open menu" title="Open menu">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
