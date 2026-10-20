import { BENEFITS } from '../data/services.js'
import { Icon, SectionBadge } from './ui.jsx'

const METRICS = [
  { label: 'Google PageSpeed Score', value: '98 / 100', width: 'w-[98%]' },
  { label: 'SEO Technical Indexing', value: '100%', width: 'w-full' },
  { label: 'Security & SSL A+ Grade', value: 'Terverifikasi', width: 'w-[95%]' }
]

const CHECKLIST = ['Framework Modern', 'Optimasi Core Web Vitals', 'Anti-DDoS Protection', 'Pencadangan Otomatis']

export default function WhyUs() {
  return (
    <section className="py-24 bg-surface-container-low/40 border-y border-outline-variant/20 px-6 lg:px-12" id="tentang">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div>
            <SectionBadge>KEUNGGULAN KAMI</SectionBadge>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface leading-snug mt-4">
              Mengapa Bisnis Mempercayakan Proyek Web ke Cipta Aksara Tech?
            </h2>
          </div>
          <div className="space-y-6">
            {BENEFITS.map((b) => (
              <div key={b.no} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-variant border border-outline-variant/40 flex-shrink-0 flex items-center justify-center font-headline-sm font-bold text-primary">
                  {b.no}
                </div>
                <div>
                  <h4 className="text-lg font-headline-sm text-on-surface mb-1">{b.title}</h4>
                  <p className="text-body-sm text-on-surface-variant">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="p-8 rounded-3xl bg-surface-variant/80 border border-outline-variant/40 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-headline-sm font-headline-sm text-on-surface mb-6 flex items-center gap-2">
              <Icon name="verified_user" className="text-primary-container" />
              <span>Jaminan Kualitas Kode</span>
            </h3>
            <div className="space-y-6">
              {METRICS.map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between items-center text-label-md mb-2">
                    <span className="text-on-surface-variant font-medium">{m.label}</span>
                    <span className="text-primary-container font-bold">{m.value}</span>
                  </div>
                  <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden p-0.5 border border-outline-variant/30">
                    <div className={`h-full bg-primary-container rounded-full ${m.width} shadow-[0_0_10px_rgba(183,216,148,0.5)]`}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/30 grid grid-cols-2 gap-3 text-label-sm text-on-surface-variant">
              {CHECKLIST.map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <Icon name="check_circle" className="text-primary-container text-[16px]" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
