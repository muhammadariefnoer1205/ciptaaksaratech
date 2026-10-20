import { Link } from 'react-router-dom'
import { Icon } from '../ui.jsx'

const STATS = [
  { big: '6', bigClass: 'text-headline-md font-headline-md font-bold text-primary', small: 'Layanan Utama' },
  { big: '100% Custom Code', bigClass: 'text-headline-sm font-headline-sm font-bold text-on-surface', small: 'Bukan Template Pasaran' },
  { big: 'Garansi Penuh', bigClass: 'text-headline-sm font-headline-sm font-bold text-on-surface', small: 'Bug & Pemeliharaan' }
]

export default function LayananHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-16">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant mb-6">
        <Link className="hover:text-primary transition-colors" to="/">Beranda</Link>
        <Icon name="chevron_right" className="text-[14px]" />
        <span className="text-primary font-semibold">Layanan</span>
      </nav>
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-label-md font-label-md mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Solusi Rekayasa Web &amp; Perangkat Lunak
        </div>
        <h1 className="text-headline-lg-mobile md:text-display-hero font-headline-lg md:font-display-hero text-on-surface mb-6 leading-tight">
          Layanan Rekayasa Web Berstandar Industri untuk Akselerasi Bisnis Anda
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mb-12">
          Dari identitas korporat prestisius hingga aplikasi web kustom berskala enterprise, kami menggabungkan arsitektur kode modern, performa ultra-cepat, dan konversi terukur.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full bg-surface-container-high/80 border border-white/5 rounded-xl p-4 md:p-6 backdrop-blur-md shadow-lg">
          {STATS.map((s) => (
            <div key={s.small} className="flex flex-col items-center justify-center p-3 text-center border-r border-outline-variant/20 last:border-0">
              <span className={s.bigClass}>{s.big}</span>
              <span className="text-label-md font-label-md text-on-surface-variant mt-1">{s.small}</span>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center p-3 text-center">
            <span className="text-headline-md font-headline-md font-bold text-primary flex items-center gap-1">
              95+
              <Icon name="speed" filled className="text-primary text-[20px]" />
            </span>
            <span className="text-label-md font-label-md text-on-surface-variant mt-1">Skor Google PageSpeed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
