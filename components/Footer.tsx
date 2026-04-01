import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="site-footer bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <BrandLogo className="mb-4" imageClassName="h-10 w-auto" surface="dark" />
            <p className="text-gray-300 mb-4">Engineering Ideas. Delivering Impact.</p>
            <p className="text-sm text-gray-400">
              Premium engineering partner for founders, CTOs, and product teams who refuse to compromise on quality.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/web-app-development" className="text-gray-300 hover:text-brand-blue transition-colors">Web & App Development</Link></li>
              <li><Link href="/services/mobile-development" className="text-gray-300 hover:text-brand-blue transition-colors">Mobile Development</Link></li>
              <li><Link href="/services/ai-ml" className="text-gray-300 hover:text-brand-blue transition-colors">AI & ML Services</Link></li>
              <li><Link href="/services/blockchain-web3" className="text-gray-300 hover:text-brand-blue transition-colors">Blockchain & Web3</Link></li>
              <li><Link href="/services/gis" className="text-gray-300 hover:text-brand-blue transition-colors">GIS Services</Link></li>
              <li><Link href="/services/staff-augmentation" className="text-gray-300 hover:text-brand-blue transition-colors">Staff Augmentation</Link></li>
              <li><Link href="/services/amazon-ecommerce" className="text-gray-300 hover:text-brand-blue transition-colors">Amazon & eCommerce</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-brand-blue transition-colors">About</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-brand-blue transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-brand-blue transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Contact</p>
              <p className="text-sm">hello@blocbytes.com</p>
              <p className="text-sm">www.blocbytes.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 BlocBytes. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-400">Microsoft Solutions Partner</span>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-gray-600 rounded" />
              <div className="w-6 h-6 bg-gray-600 rounded" />
              <div className="w-6 h-6 bg-gray-600 rounded" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
