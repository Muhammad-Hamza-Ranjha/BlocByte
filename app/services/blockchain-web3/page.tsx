import Link from 'next/link';
import { ArrowRight } from '../../../components/Icons';

export default function BlockchainWeb3() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blockchain & Web3 Development</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Twelve capabilities across the full decentralized stack.
            </p>
            <p className="text-lg text-gray-400">15 years of software depth. 5 years of blockchain focus.</p>
          </div>
        </div>
      </section>

      {/* What is Web3 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              The decentralized web — explained without the jargon.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">What it is</h3>
              <p className="text-gray-600">A new internet architecture where users own their data and digital assets.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Why it matters</h3>
              <p className="text-gray-600">Eliminates intermediaries, reduces costs, and creates new business models.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">What it enables</h3>
              <p className="text-gray-600">NFTs, DAOs, DeFi, decentralized identity, and programmable money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Smart Contract Development',
              'DeFi Protocol Engineering',
              'NFT Platforms',
              'DAO Architecture',
              'Token Development (ERC-20/721/1155)',
              'Web3 Wallet Integration',
              'Blockchain Consulting',
              'dApp Development',
              'Cross-Chain Bridges',
              'Layer 2 Solutions',
              'Blockchain Security Audits',
              'Web3 Backend Infrastructure'
            ].map((service) => (
              <div key={service} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{service}</h3>
                <p className="text-gray-600">Comprehensive blockchain development services.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Ethereum', 'Solidity', 'Hardhat', 'IPFS', 'Polygon', 'Binance Smart Chain', 'The Graph', 'Chainlink', 'OpenZeppelin', 'Rust', 'Web3.js', 'Ethers.js'].map((tech) => (
              <div key={tech} className="bg-brand-accent-gray rounded-lg p-4 text-center">
                <span className="text-brand-dark font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">DeFi</h3>
              <p className="text-gray-600">Lending, yield, DEX protocols</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">NFT & Digital Ownership</h3>
              <p className="text-gray-600">Marketplaces, collections</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Supply Chain</h3>
              <p className="text-gray-600">Provenance, traceability</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Enterprise Blockchain</h3>
              <p className="text-gray-600">Private chains, consortium networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              'Decentralization',
              'Immutability',
              'Transparency',
              'Programmability',
              'Trustlessness'
            ].map((property) => (
              <div key={property} className="text-center">
                <h3 className="text-lg font-semibold text-brand-dark">{property}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BlocBytes */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Why BlocBytes for Web3
          </h2>
          <ul className="text-left max-w-2xl mx-auto space-y-4">
            <li>• 5 years of dedicated blockchain experience</li>
            <li>• Full-stack: smart contracts → frontend → infrastructure</li>
            <li>• Security-first development practices</li>
            <li>• Production deployments on mainnet</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build on Blockchain?
          </h2>
          <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg">
            Talk to a Web3 Specialist <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
