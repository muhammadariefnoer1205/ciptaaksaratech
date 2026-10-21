import { Link } from 'react-router-dom'
import { Icon } from '../ui.jsx'
import { KONTACT_HERO } from '../../data/kontak.js'

export default function KontakHero() {
  const { breadcrumb, badge, headline, subheadline, trustHighlights } = KONTACT_HERO
  return (
    <section className="relative pt-10 pb-12 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="flex flex-col items-start gap-4">
        <nav className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
          {breadcrumb.map((b, i) => (
            <>
              {b.current ? (
                <span className="text-primary font-medium">{b.label}</span>
              ) : (
                <Link to={b.to} className="hover:text-primary transition-colors">
                  {b.label}
                </Link>
              )}
              {i < breadcrumb.length - 1 && <span className="text-outline-variant">/</span>}
            </>
          ))}
        </nav>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/15 border border-primary-container/30 text-primary text-label-md font-label-md">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span>{badge}</span>
        </div>
        <h1 className="text-headline-lg font-headline-lg text-on-surface max-w-4xl tracking-tight mt-1">
          {headline}
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {subheadline}
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-outline-variant/30">
          {trustHighlights.map((t) => (
            <div key={t.title} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/20">
              <div className="w-9 h-9 rounded-lg bg-primary-container/20 flex items-center justify-center shrink-0">
                <Icon name={t.icon} className="text-primary text-[20px]" filled={t.filled} />
              </div>
              <div>
                <p className="text-label-md font-label-md text-on-surface">{t.title}</p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}