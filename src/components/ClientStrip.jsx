import { CLIENTS } from '../data/site.js'
import { Icon } from './ui.jsx'

export default function ClientStrip() {
  return (
    <section className="border-y border-outline-variant/20 bg-surface-container-lowest/60 py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-8">
          Dipercaya oleh 50+ Brand, Startup &amp; Institusi di Seluruh Indonesia
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {CLIENTS.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center gap-2 p-3 rounded-lg bg-surface-container-low/40 border border-outline-variant/20 hover:border-outline-variant/60 transition-colors"
            >
              <Icon name={c.icon} className="text-outline" />
              <span className="font-headline-sm text-sm font-semibold text-secondary">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
