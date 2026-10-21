import { Link } from 'react-router-dom'
import { TRUST_BADGES } from '../../data/harga.js'
import { Icon } from '../ui.jsx'

export default function HargaHero({ mode, onMode }) {
  const btn = (active) =>
    active
      ? 'px-5 py-2 rounded-lg font-label-lg text-label-lg font-bold bg-primary text-on-primary transition-all duration-200 shadow'
      : 'px-5 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-all duration-200'

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden border-b border-outline-variant/20">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-container/20 rounded-full blur-[90px] pointer-events-none -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <nav className="flex items-center justify-center gap-2 mb-6 font-label-md text-label-md text-on-surface-variant">
          <Link className="hover:text-primary transition-colors" to="/">Beranda</Link>
          <span className="text-outline">/</span>
          <span className="text-primary font-semibold">Paket Harga</span>
        </nav>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6 font-label-md text-label-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>Transparansi Investasi &amp; Tanpa Biaya Tersembunyi</span>
        </div>
        <h1 className="text-headline-lg-mobile md:text-display-hero font-display-hero text-on-surface max-w-4xl mx-auto mb-6 tracking-tight">
          Investasi Terukur untuk Ekosistem Digital Berkinerja Tinggi
        </h1>
        <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed">
          Pilih skema pengerjaan website dan aplikasi web yang sesuai dengan skala bisnis Anda. Seluruh paket mencakup 100% kepemilikan source code, garansi bug, dan standar PageSpeed kelas dunia.
        </p>
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-surface-container-high p-1.5 rounded-xl border border-outline-variant/40 shadow-inner mb-8">
          <div className="flex items-center gap-1">
            <button className={btn(mode === 'onetime')} onClick={() => onMode('onetime')}>
              Biaya Proyek (One-time)
            </button>
            <button className={btn(mode === 'retainer')} onClick={() => onMode('retainer')}>
              Retainer Bulanan (Maintenance &amp; Dev Ops)
            </button>
          </div>
          <span className="px-3 py-1 rounded-full text-label-sm font-label-sm bg-primary/15 text-primary border border-primary/20 sm:mr-1">
            Hemat hingga 20% untuk komitmen tahunan
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-outline-variant/20">
          {TRUST_BADGES.map((t) => (
            <div key={t.label} className="flex items-center justify-center gap-2 text-on-surface-variant font-label-md text-label-md">
              <Icon name={t.icon} className="text-primary text-lg" />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
