import { SERVICES } from '../data/services.js'
import { Icon, SectionBadge } from './ui.jsx'

export default function Services() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto" id="layanan">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <SectionBadge>LAYANAN KAMI</SectionBadge>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface">
          Solusi Digital Terpadu Sesuai Skala Bisnis Anda
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Dari tahap konsep desain hingga infrastruktur kode yang kokoh, kami menghadirkan kapabilitas rekayasa web mutakhir untuk memastikan target bisnis Anda tercapai secara nyata.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="group p-8 rounded-2xl bg-surface-container/70 backdrop-blur-md border border-white/5 hover:border-primary-container/40 hover:-translate-y-1 transition-all duration-300 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-surface-variant flex items-center justify-center text-primary mb-6 group-hover:bg-primary-container group-hover:text-[#0F172A] transition-colors">
                <Icon name={s.icon} className="text-[32px]" />
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3">{s.title}</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
            </div>
            <a className="inline-flex items-center gap-1.5 text-label-md font-semibold text-primary-container hover:underline mt-6" href="#kontak">
              <span>Pelajari lebih lanjut</span>
              <Icon name="arrow_forward" className="text-[16px]" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
