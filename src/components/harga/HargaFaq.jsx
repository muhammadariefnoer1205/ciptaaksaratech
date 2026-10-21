import { useState } from 'react'
import { HARGA_FAQS } from '../../data/compare.js'
import { Icon } from '../ui.jsx'

export default function HargaFaq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-10 max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high border border-outline-variant/40 text-on-surface-variant font-label-md text-label-md mb-3">
          <Icon name="help" className="text-primary text-base" />
          <span>Pertanyaan Umum</span>
        </div>
        <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface tracking-tight">
          Pertanyaan Lazim Seputar Biaya &amp; Pembayaran
        </h2>
      </div>
      <div className="space-y-4">
        {HARGA_FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="glass-card rounded-xl border border-outline-variant/30 overflow-hidden">
              <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-surface-container-high/40 transition-colors gap-4">
                <span className="font-headline-sm text-on-surface text-base md:text-lg">{f.q}</span>
                <Icon name="expand_more" className={`text-primary transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant/20">
                  {f.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
