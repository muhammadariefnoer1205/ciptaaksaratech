import { QUOTE } from '../../data/cases2.js'
import { Icon } from '../ui.jsx'

export default function QuoteBanner() {
  return (
    <section className="py-16 bg-surface-container-lowest border-y border-white/[0.06] relative overflow-hidden">
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0 bg-surface-container p-6 rounded-2xl border border-primary-container/30 text-center w-full md:w-64 shadow-[0_0_24px_rgba(183,216,148,0.28)]">
            <Icon name="auto_awesome" className="text-primary text-4xl mb-2" />
            <div className="text-headline-lg font-headline-lg text-primary tracking-tight font-bold">{QUOTE.metric}</div>
            <div className="text-label-md font-label-md text-on-surface-variant mt-1">{QUOTE.metricSub}</div>
            <div className="mt-4 pt-4 border-t border-white/[0.08] text-label-sm font-label-sm text-outline">{QUOTE.metricFoot}</div>
          </div>
          <div className="flex-grow">
            <div className="text-primary text-3xl font-serif mb-2">&ldquo;</div>
            <blockquote className="text-headline-sm md:text-headline-md font-headline-md text-on-surface leading-snug mb-6">
              &ldquo;{QUOTE.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container shrink-0">
                <img className="w-full h-full object-cover" alt={QUOTE.name} src={QUOTE.img} loading="lazy" />
              </div>
              <div>
                <div className="text-label-lg font-label-lg font-bold text-on-surface">{QUOTE.name}</div>
                <div className="text-label-md font-label-md text-on-surface-variant">{QUOTE.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
