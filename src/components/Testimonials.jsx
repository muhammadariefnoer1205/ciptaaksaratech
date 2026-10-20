import { TESTIMONIALS } from '../data/social.js'
import { Icon, SectionBadge } from './ui.jsx'

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low/40 border-y border-outline-variant/20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SectionBadge>TESTIMONI KLIEN</SectionBadge>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg">Apa Kata Mereka Tentang Kerjasama Bersama Kami</h2>
          <p className="text-body-md text-on-surface-variant">Kepercayaan klien adalah aset terbesar kami. Simak bagaimana solusi digital kami mendorong efisiensi bisnis nyata.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="p-8 rounded-2xl bg-surface-container/70 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex text-primary-container gap-1 mb-6">
                  {[0, 1, 2, 3, 4].map((i) => (<Icon key={i} name="star" filled className="text-[20px]" />))}
                </div>
                <p className="text-body-md text-on-surface italic leading-relaxed">&quot;{t.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-outline-variant/20">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-container/40">
                  <img className="w-full h-full object-cover" src={t.img} alt={t.name} loading="lazy" />
                </div>
                <div>
                  <h5 className="text-label-lg font-bold text-on-surface">{t.name}</h5>
                  <p className="text-label-sm text-outline">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
