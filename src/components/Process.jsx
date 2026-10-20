import { PROCESS_STEPS } from '../data/services.js'
import { SectionBadge } from './ui.jsx'

export default function Process() {
  return (
    <section className="py-24 bg-surface-container-low/40 border-y border-outline-variant/20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SectionBadge>PROSES KERJA</SectionBadge>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">5 Langkah Mudah Mewujudkan Website Impian Anda</h2>
          <p className="text-body-md text-on-surface-variant">Metodologi pengembangan terstruktur yang transparan, tepat waktu, dan berorientasi pada pencapaian tujuan bisnis Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((s) => (
            <div key={s.no} className="p-6 rounded-2xl bg-surface-container/60 border border-outline-variant/30 hover:border-primary-container/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary-container/15 text-primary-container font-bold flex items-center justify-center mb-5 border border-primary-container/30">{s.no}</div>
              <h4 className="text-base font-headline-sm text-on-surface mb-2">{s.title}</h4>
              <p className="text-body-sm text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
