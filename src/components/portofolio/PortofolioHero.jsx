import { Link } from 'react-router-dom'
import { PROOF_METRICS } from '../../data/portofolio.js'
import { Icon } from '../ui.jsx'

export default function PortofolioHero() {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden border-b border-white/[0.06]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(183,216,148,0.12),transparent_70%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant mb-6">
          <Link className="hover:text-primary transition-colors" to="/">Beranda</Link>
          <Icon name="chevron_right" className="text-sm text-outline" />
          <span className="text-primary font-medium">Portofolio</span>
        </div>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/25 text-primary text-label-md font-label-md mb-5">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            Karya Nyata &amp; Studi Kasus
          </div>
          <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero text-on-surface tracking-tight mb-6">
            Portofolio Proyek Rekayasa Web yang Terbukti <span className="text-primary inline-block underline decoration-primary/40 underline-offset-8">Mendorong Pertumbuhan</span>.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed mb-12">
            Eksplorasi ragam situs korporat, platform e-commerce, landing page konversi tinggi, hingga aplikasi web kustom yang kami bangun dengan standar performa kelas dunia.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-6">
          {PROOF_METRICS.map((m) => (
            <div key={m.label} className="bg-surface-container-high/60 backdrop-blur-md border border-white/[0.08] rounded-xl p-5 hover:border-primary-container/40 transition-all">
              <div className="text-primary text-display-hero-mobile md:text-headline-lg font-headline-lg mb-1 tracking-tight">{m.value}</div>
              <div className="text-label-md font-label-md text-on-surface-variant">{m.label}</div>
              <div className="mt-2 text-label-sm font-label-sm text-primary/80 flex items-center gap-1">
                <Icon name={m.icon} className="text-xs" />
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
