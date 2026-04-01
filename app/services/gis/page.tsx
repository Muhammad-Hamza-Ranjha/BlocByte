import Link from 'next/link';
import { ArrowRight } from '../../../components/Icons';

export default function GIS() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Turn Geographic Data Into Strategic Intelligence</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enterprise GIS software engineered for precision, scale, and real-world impact.
            </p>
            <p className="text-lg text-gray-400 mb-12">From spatial analysis to AI-powered mapping — custom-built for your industry.</p>
            <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center">
              Schedule a Free GIS Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why GIS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">📍 Spatial Data as a Business Asset</h2>
              <p className="text-lg text-gray-600">
                70% of all business decisions have a geographic dimension — yet most organizations treat location data as an afterthought. GIS transforms raw spatial information into actionable intelligence: smarter site selection, optimized logistics routes, real-time environmental monitoring.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">🌐 From Maps to Competitive Advantage</h2>
              <p className="text-lg text-gray-600">
                Modern GIS extends far beyond cartography. With advanced geoprocessing, ML integration, and real-time data pipelines, organizations predict demand zones, assess climate risk, automate land-use compliance, and visualize infrastructure in 3D.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              '🖥️ GIS Software Development — C++, Java, Python; end-to-end geospatial systems',
              '⚙️ GIS Programming Services — ESRI ArcGIS, ArcIMS, custom scripts & geoprocessing',
              '📱 GIS Application Development — Web/desktop apps, REST/SOAP APIs, real-time feeds',
              '🗄️ GIS Database Design — PostgreSQL/PostGIS, Oracle Spatial, MySQL',
              '🗺️ Geospatial Mapping Software — Vector tiles, raster overlays, satellite imagery',
              '🏗️ 3D Visualization Software — Autodesk Civil 3D, terrain/infrastructure modeling',
              '📍 Geoprocessing & Geocoding — Address geocoding, proximity analysis, spatial interpolation',
              '📡 Data Capture Solutions — Drone interfaces, field survey tools, remote sensing',
              '🔄 Data Management Solutions — Version control, metadata, ETL pipelines',
              '🛰️ Image Management Solutions — Satellite imagery, aerial photography, drone ortho-mosaics'
            ].map((service) => (
              <div key={service} className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-600">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">🗺️ Mapping & Visualization</h3>
              <p className="text-gray-600">Dynamic web maps to 3D terrain rendering</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">📐 Spatial Analysis</h3>
              <p className="text-gray-600">Network analysis, watershed delineation, hotspot detection</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">📍 Location Intelligence</h3>
              <p className="text-gray-600">Market expansion, infrastructure planning, risk assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-brand-accent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['C++', 'Java', 'Python', 'ArcGIS', 'ArcIMS', 'ERDAS', 'PostgreSQL', 'Oracle', 'MySQL', 'REST/SOAP', 'Civil 3D', 'Drone APIs'].map((tech) => (
              <div key={tech} className="bg-white rounded-lg p-4 text-center">
                <span className="text-brand-dark font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              '🌡️ Climate Research',
              '🏙️ Urban Planning',
              '🚚 Logistics',
              '🌾 Precision Farming',
              '🌿 Environmental Monitoring'
            ].map((industry) => (
              <div key={industry} className="text-center">
                <span className="text-lg text-brand-dark">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl mb-8">
            BlocBytes has delivered production GIS systems across five continents — for government agencies, Fortune 500 enterprises, and high-growth technology companies.
          </p>
          <Link href="/contact" className="bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center text-lg">
            Talk to a GIS Specialist <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
