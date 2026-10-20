import { Icon } from '../ui.jsx'

export default function CaseCard({ c }) {
  return (
    <div className={`${c.featured ? 'lg:col-span-2' : ''} group bg-surface-container/70 backdrop-blur-md rounded-2xl border border-white/[0.08] hover:border-primary-container/50 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.5)] transition-all duration-300 flex flex-col justify-between overflow-hidden`}>
      <div className="relative bg-surface-container-lowest p-6 border-b border-white/[0.06] overflow-hidden">
        {c.browserUrl && (
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.05]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-error/60"></span>
              <span className="w-3 h-3 rounded-full bg-tertiary-container/60"></span>
              <span className="w-3 h-3 rounded-full bg-primary/60"></span>
            </div>
            <div className="text-label-sm font-label-sm text-outline bg-surface-container px-3 py-0.5 rounded text-xs hidden sm:flex items-center gap-1">
              <Icon name="lock" className="text-xs" />
              {c.browserUrl}
            </div>
            <div className="text-outline">
              <Icon name="refresh" className="text-sm" />
            </div>
          </div>
        )}
        <div className={`relative rounded-lg overflow-hidden border border-white/10 group-hover:scale-[1.01] transition-transform duration-300 w-full ${c.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          <img className="w-full h-full object-cover" alt={c.title} src={c.img} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
        </div>
        <div className="absolute bottom-10 left-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high/90 border border-primary-container/40 text-primary font-label-md font-semibold backdrop-blur-md">
          <Icon name={c.impactIcon} className="text-sm" />
          {c.impact}
        </div>
      </div>
      <div className={`${c.featured ? 'p-8' : 'p-6'} flex flex-col justify-between flex-grow`}>
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider">{c.catLabel}</span>
            <span className="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
              <Icon name="schedule" className="text-xs" /> {c.duration}
            </span>
          </div>
          <h3 className={`${c.featured ? 'text-headline-md font-headline-md' : 'text-headline-sm font-headline-sm'} text-on-surface group-hover:text-primary transition-colors mb-2`}>
            {c.title}
          </h3>
          <p className={`${c.featured ? 'text-body-md font-body-md' : 'text-body-sm font-body-sm'} text-on-surface-variant mb-6 leading-relaxed`}>
            {c.desc}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {c.stack.map((t) => (
              <span key={t} className={`${c.featured ? 'px-2.5 py-1' : 'px-2 py-0.5'} bg-surface-container-highest rounded text-label-sm font-label-sm text-on-surface`}>{t}</span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
            <span className={`inline-flex items-center gap-1.5 text-primary font-semibold hover:underline cursor-pointer ${c.featured ? 'font-label-lg' : 'font-label-md text-sm'}`}>
              {c.cta}
              <Icon name="arrow_forward" className={c.featured ? 'text-base' : 'text-sm'} />
            </span>
            <span className="p-2 text-on-surface-variant hover:text-on-surface rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high transition-colors cursor-pointer" title="Kunjungi Website Live">
              <Icon name="open_in_new" className="text-base" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
