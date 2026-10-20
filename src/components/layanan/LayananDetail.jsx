import { WA_CHAT_URL } from '../../data/site.js'
import { SERVICE_DETAIL } from '../../data/layanan.js'
import { Icon } from '../ui.jsx'
import LighthouseVisual from './VisualLighthouse.jsx'
import CheckoutVisual from './VisualCheckout.jsx'
import FunnelVisual from './VisualFunnel.jsx'
import SaasVisual from './VisualSaas.jsx'
import BeforeAfterVisual from './VisualBeforeAfter.jsx'
import SentinelVisual from './VisualSentinel.jsx'

const VISUALS = {
  '01': LighthouseVisual,
  '02': CheckoutVisual,
  '03': FunnelVisual,
  '04': SaasVisual,
  '05': BeforeAfterVisual,
  '06': SentinelVisual
}

export default function LayananDetail() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col gap-24">
      {SERVICE_DETAIL.map((s, i) => {
        const Visual = VISUALS[s.no]
        const flip = i % 2 === 1
        return (
          <div key={s.no} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" id={`layanan-${s.no}`}>
            <div className={`lg:col-span-6 flex flex-col items-start ${flip ? 'order-1 lg:order-2' : ''}`}>
              <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-4">
                {s.no} • {s.kicker}
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-3">{s.title}</h2>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">{s.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Icon name="check_circle" filled className="text-primary text-[20px] shrink-0" />
                    <span className="text-body-sm font-body-sm text-on-surface">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 p-3.5 rounded-lg bg-surface-container-high border border-white/5 w-full mb-6">
                <div>
                  <span className="text-label-sm font-label-sm text-on-surface-variant block">{s.etaLabel}</span>
                  <span className="text-label-md font-label-md text-on-surface font-semibold">{s.eta}</span>
                </div>
                <div className="h-8 w-px bg-outline-variant/30 hidden sm:block"></div>
                <div>
                  <span className="text-label-sm font-label-sm text-on-surface-variant block">{s.techLabel}</span>
                  <span className="text-label-md font-label-md text-primary font-mono">{s.tech}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a className="inline-flex items-center gap-2 bg-primary-container text-on-primary font-label-lg px-6 py-3 rounded-lg font-semibold hover:bg-tertiary transition-all active:scale-[0.98]" href="#kontak-form">
                  <span>Minta Penawaran Layanan Ini</span>
                  <Icon name="arrow_forward" className="text-[18px]" />
                </a>
                <a className="inline-flex items-center gap-2 text-on-surface hover:text-primary font-label-lg px-4 py-3 transition-colors" href={WA_CHAT_URL} target="_blank" rel="noreferrer">
                  <Icon name="chat" className="text-[20px]" />
                  <span>Konsultasi via WhatsApp</span>
                </a>
              </div>
            </div>
            <div className={`lg:col-span-6 ${flip ? 'order-2 lg:order-1' : ''}`}>
              <Visual />
            </div>
          </div>
        )
      })}
    </section>
  )
}
