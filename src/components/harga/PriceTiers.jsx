import { PRICE_CARDS } from '../../data/harga.js'
import { Icon } from '../ui.jsx'

export default function PriceTiers({ mode }) {
  return (
    <section className="py-10 max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICE_CARDS.map((p) => {
          const show = mode === 'retainer' ? p.retainer : p.onetime
          return (
            <div
              key={p.id}
              className={p.featured
                ? 'relative glass-card rounded-xl p-6 border-2 border-primary glow-accent flex flex-col justify-between lg:-translate-y-3 bg-surface-container-high/90 shadow-2xl'
                : 'glass-card rounded-xl p-6 border border-white/10 flex flex-col justify-between hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 shadow-xl'}
            >
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold tracking-wide uppercase shadow whitespace-nowrap">
                  {p.badge}
                </div>
              )}
              <div>
                <div className="flex justify-between items-start mb-4 pt-1">
                  <div>
                    <h3 className={`text-headline-sm font-headline-sm ${p.featured ? 'text-primary' : 'text-on-surface'}`}>{p.name}</h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">{p.tagline}</p>
                  </div>
                  <span className={p.featured
                    ? 'p-2 rounded-lg bg-primary/20 border border-primary text-primary'
                    : 'p-2 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface-variant'}>
                    <Icon name={p.icon} className="text-[20px]" />
                  </span>
                </div>
                <div className={`my-6 pb-6 border-b ${p.featured ? 'border-primary/20' : 'border-outline-variant/30'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-on-surface tracking-tight">{show.price}</span>
                  </div>
                  <p className="text-label-md font-label-md text-primary mt-1">{show.sub}</p>
                  <div className={`inline-flex items-center gap-1.5 mt-3 text-body-sm ${p.featured ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                    <Icon name="schedule" className={`text-base ${p.featured ? 'text-primary' : ''}`} />
                    <span className={p.featured ? 'font-medium' : ''}>{p.eta}</span>
                  </div>
                </div>
                <ul className="space-y-3.5 mb-8 text-body-sm font-body-sm text-on-surface">
                  {p.features.map((f, i) => (
                    <li key={f} className="flex items-start gap-3">
                      <Icon name="check_circle" filled={p.featured} className="text-primary text-lg shrink-0 mt-0.5" />
                      <span className={p.featured && i === 0 ? 'font-semibold text-primary' : ''}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                className={p.featured
                  ? 'w-full py-3.5 px-4 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold text-center hover:bg-tertiary transition-all duration-200 shadow-md'
                  : 'w-full py-3 px-4 rounded-lg bg-surface-container border border-primary/30 text-on-surface font-label-lg text-label-lg font-bold text-center hover:bg-surface-container-high hover:text-primary transition-all duration-200'}
                href="#custom-quote"
              >
                {p.cta}
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
