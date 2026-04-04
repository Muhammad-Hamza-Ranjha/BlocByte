import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { ChevronDown } from './Icons';
import MobileNavigation from './MobileNavigation';
import ThemeToggle from './ThemeToggle';
import { primaryLinks, serviceLinks } from './navigation-data';

export default function Navigation() {
  return (
    <nav className="site-nav sticky top-0 z-50 relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3 gap-4">
          <BrandLogo
            className="shrink-0"
            imageClassName="h-8 md:h-9 w-auto"
            preload
            sizes="(max-width: 768px) 176px, 196px"
          />

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                type="button"
                className="flex items-center space-x-1 text-gray-700 hover:text-brand-blue transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="nav-panel absolute top-full left-0 mt-3 w-64 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible translate-y-2 scale-[0.98] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300">
                <div className="py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch={false}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="text-gray-700 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <Link
                href="/contact"
                prefetch={false}
                className="bg-brand-blue text-white px-6 py-2.5 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
}
