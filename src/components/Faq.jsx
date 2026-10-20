import { useState } from 'react'
import { FAQS } from '../data/social.js'
import { Icon, SectionBadge } from './ui.jsx'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <SectionBadge>PERTANYAAN UMUM</SectionBadge>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">Hal yang Sering Ditanyakan</h2>
        <p className="text-body-md text-on-surface-variant">Punya pertanyaan seputar durasi, kepemilikan aset, dan pemeliharaan website? Temukan jawabannya di sini.</p>
      </div>
      <div className="space-y-4">
        {FAQS.map((f, i) => {
          const open = openIndex === i
          return (
            <div key={f.q} className={`border rounded-2xl p-6 transition-all ${open ? 'bg-surface-container border-primary-container/40' : 'bg-surface-container/60 border-outline-variant/30'}`}>
              <button onClick={() => setOpenIndex(open ? -1 : i)} className="flex justify-between items-center cursor-pointer w-full text-left font-semibold text-base md:text-lg text-on-surface select-none gap-4">
                <span>{f.q}</span>
                <Icon name="expand_more" className={`text-primary-container transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
              </button>
              {open && <p className="text-body-sm text-on-surface-variant mt-4 leading-relaxed pt-2 border-t border-outline-variant/20">{f.a}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
