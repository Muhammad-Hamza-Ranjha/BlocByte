'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from './Icons';
import { primaryLinks, serviceLinks } from './navigation-data';

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
      return;
    }

    setIsMenuOpen(true);
  };

  useEffect(() => {
    if (!isMenuOpen) {
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
    <div ref={navRef} className="md:hidden static">
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

      <div
        id="mobile-navigation"
        className={[
          'absolute inset-x-0 top-full overflow-hidden border-b border-white/10 bg-brand-dark text-white shadow-2xl backdrop-blur-xl transition-all duration-300',
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
                <ChevronDown
                  className={[
                    'h-4 w-4 transition-transform duration-300',
                    isServicesOpen ? 'rotate-180' : 'rotate-0',
                  ].join(' ')}
                />
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
                      prefetch={false}
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
                prefetch={false}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              prefetch={false}
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-brand-blue px-4 py-3 text-center text-base font-semibold text-white hover:bg-blue-600"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
