import { PORTFOLIO_IMAGE } from '../data/site.js'
import { Icon, SectionBadge } from './ui.jsx'

const SMALL = [
  { tag: 'Toko Online & D2C', stat: '+64% Konversi', title: 'Aura Botanical Skincare', desc: 'Toko e-commerce modern dengan checkout 1-klik dan katalog ultra-responsif.', foot: 'E-Commerce Architecture' },
  { tag: 'Corporate Website', stat: '100k+ Kunjungan/Bln', title: 'Nusantara Logistics Group', desc: 'Portal korporat multibahasa dengan pelacakan armada dan kalkulator tarif.', foot: 'Enterprise CMS' }
]

export default function Portfolio() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto" id="portofolio">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <SectionBadge>PORTOFOLIO PILIHAN</SectionBadge>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg mt-4">Karya Nyata yang Menghasilkan Dampak Nyata</h2>
        </div>
        <a className="inline-flex items-center gap-2 text-label-lg font-bold text-primary-container hover:text-primary" href="#kontak">
          <span>Lihat Semua Proyek (24+)</span><Icon name="arrow_forward" className="text-[18px]" />
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 group rounded-3xl bg-surface-container/70 border border-white/5 overflow-hidden hover:border-primary-container/40 transition-all">
          <div className="p-8 pb-4">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-container/15 text-primary-container text-label-sm border border-primary-container/30">Aplikasi Web Kustom</span>
              <span className="text-label-md text-primary font-bold">+210% User Adoption</span>
            </div>
            <h3 className="text-headline-md font-headline-md group-hover:text-primary">FinanSync Dashboard Multi-Bank</h3>
            <p className="text-body-sm text-on-surface-variant mt-2 max-w-lg">Aplikasi analitik keuangan B2B dengan integrasi API perbankan dan monitoring real-time.</p>
          </div>
          <div className="px-8 pb-8 pt-4">
            <div className="w-full h-64 rounded-xl overflow-hidden relative border border-outline-variant/30">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Dashboard FinanSync" src={PORTFOLIO_IMAGE} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-4">
                <span className="inline-flex items-center gap-1.5 text-label-md font-semibold bg-surface-container/90 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  <span>Lihat Studi Kasus</span><Icon name="open_in_new" className="text-[16px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-8">
          {SMALL.map((p) => (
            <div key={p.title} className="group rounded-3xl bg-surface-container/70 border border-white/5 hover:border-primary-container/40 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary-container/15 text-primary-container text-label-sm border border-primary-container/30">{p.tag}</span>
                  <span className="text-label-md text-primary font-bold">{p.stat}</span>
                </div>
                <h3 className="text-headline-sm font-headline-sm group-hover:text-primary">{p.title}</h3>
                <p className="text-body-sm text-on-surface-variant mt-2">{p.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-label-sm text-outline">{p.foot}</span>
                <a className="text-label-md text-primary-container font-semibold flex items-center gap-1" href="#kontak"><span>Studi Kasus</span><Icon name="arrow_forward" className="text-[16px]" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
