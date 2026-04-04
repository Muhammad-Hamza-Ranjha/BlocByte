'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import BrandLogo from './BrandLogo';
import { ChevronDown } from './Icons';
import ThemeToggle from './ThemeToggle';

const serviceLinks = [
  { href: '/services/web-app-development', label: 'Web & App Development' },
  { href: '/services/mobile-development', label: 'Mobile Development' },
  { href: '/services/ai-ml', label: 'AI & ML Services' },
  { href: '/services/blockchain-web3', label: 'Blockchain & Web3' },
  { href: '/services/gis', label: 'GIS Services' },
  { href: '/services/staff-augmentation', label: 'Staff Augmentation' },
  { href: '/services/amazon-ecommerce', label: 'Amazon & eCommerce' },
];

const primaryLinks = [
  { href: '/trading-platform', label: 'Trading Platform' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      setIsServicesOpen(false);
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!navRef.current || !(event.target instanceof Node)) {
        return;
      }

      if (!navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className="site-nav sticky top-0 z-50 relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3 gap-4">
          <BrandLogo className="shrink-0" imageClassName="h-8 md:h-9 w-auto" priority />

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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-700 hover:text-brand-blue transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <Link href="/contact" className="bg-brand-blue text-white px-6 py-2.5 rounded-lg hover:bg-blue-600 transition-colors">
                Book a Consultation
              </Link>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="theme-toggle"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-controls="mobile-navigation"
                aria-expanded={isMenuOpen}
                title={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={[
          'md:hidden absolute inset-x-0 top-full overflow-hidden border-b border-white/10 bg-brand-dark text-white shadow-2xl backdrop-blur-xl transition-all duration-300',
          isMenuOpen ? 'max-h-[85vh] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        ].join(' ')}
      >
        <div className="px-4 pb-6 pt-3">
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
              <button
                type="button"
                onClick={() => setIsServicesOpen((currentValue) => !currentValue)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-white hover:bg-white/8"
                aria-expanded={isServicesOpen}
                aria-controls="mobile-services-menu"
              >
                <span>Services</span>
                <ChevronDown className={['h-4 w-4 transition-transform duration-300', isServicesOpen ? 'rotate-180' : 'rotate-0'].join(' ')} />
              </button>

              <div
                id="mobile-services-menu"
                className={[
                  'overflow-hidden transition-all duration-300',
                  isServicesOpen ? 'max-h-[24rem] opacity-100 pt-2' : 'max-h-0 opacity-0',
                ].join(' ')}
              >
                <div className="border-t border-white/10 pt-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-3 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
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
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-brand-blue px-4 py-3 text-center text-base font-semibold text-white hover:bg-blue-600"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
