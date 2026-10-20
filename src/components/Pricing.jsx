import { PRICING } from '../data/pricing.js'
import { Icon, SectionBadge } from './ui.jsx'

export default function Pricing() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto" id="paket-harga">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <SectionBadge>PAKET TRANSPARAN</SectionBadge>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">Investasi Terukur untuk Hasil Digital Maksimal</h2>
        <p className="text-body-md text-on-surface-variant">Pilihan skema biaya yang transparan tanpa biaya tersembunyi. Skalabel dan siap bertumbuh bersama bisnis Anda.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING.map((p) => (
          <div key={p.name} className={p.featured
            ? 'p-8 rounded-3xl bg-surface-container-high border-2 border-primary-container shadow-[0_0_40px_rgba(183,216,148,0.18)] flex flex-col justify-between relative lg:-translate-y-2'
            : 'p-8 rounded-3xl bg-surface-container/60 border border-outline-variant/30 flex flex-col justify-between'}>
            {p.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-container text-[#0F172A] font-label-sm font-bold uppercase tracking-wider shadow-md">{p.badge}</div>
            )}
            <div>
              <h3 className="text-headline-sm font-headline-sm">{p.name}</h3>
              <p className="text-body-sm text-on-surface-variant mt-1">{p.tagline}</p>
              <div className="my-6">
                <span className="text-label-sm text-outline uppercase tracking-wider">Mulai dari</span>
                <div className={`text-[28px] leading-9 font-bold mt-1 ${p.featured ? 'text-primary-container' : 'text-on-surface'}`}>{p.price}</div>
              </div>
              <ul className="space-y-3.5 text-body-sm text-on-surface-variant my-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Icon name="check_circle" className="text-primary-container text-[18px]" />
                    <span className={p.featured && (f.includes('12 Halaman') || f.includes('Kustom')) ? 'text-on-surface font-medium' : ''}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#kontak" className={p.featured
              ? 'w-full text-center py-3.5 px-4 rounded-xl bg-primary-container text-[#0F172A] font-label-lg font-bold hover:bg-primary shadow-lg'
              : 'w-full text-center py-3.5 px-4 rounded-xl bg-surface-variant font-label-lg font-semibold border border-outline-variant/40 hover:border-primary-container/60 hover:text-primary'}>
              {p.cta}
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a className="inline-flex items-center gap-2 text-label-lg text-on-surface-variant hover:text-primary" href="#kontak">
          <span>Butuh solusi dengan spesifikasi khusus? Minta penawaran kustom</span>
          <Icon name="arrow_forward" className="text-[18px]" />
        </a>
      </div>
    </section>
  )
}
