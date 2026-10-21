import { Icon } from '../ui.jsx'
import { VISI, MISI_POINTS, MISI_FOOTER } from '../../data/about.js'

export default function VisiMisi() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28" id="visi-misi">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-label-md mb-3">
          <span className="material-symbols-outlined text-sm">explore</span>
          <span>Arah &amp; Tujuan Kami</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
          Fondasi Strategis Menuju Masa Depan Digital
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-3">
          Menyatukan presisi rekayasa komputasi dengan ketajaman tujuan bisnis untuk menghasilkan dampak nyata berjangka panjang.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Card Visi (5 cols) */}
        <div className="lg:col-span-5 bg-surface-container/70 backdrop-blur-md rounded-2xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-all duration-300">
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
          <div>
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl fill-icon">{VISI.icon}</span>
            </div>
            <span className="font-label-sm text-label-sm text-primary tracking-widest block uppercase mb-1">{VISI.badge}</span>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">{VISI.title}</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{VISI.description}</p>
          </div>
          <div className="pt-8 border-t border-outline-variant/20 mt-8 flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface-variant">{VISI.footerLabel}</span>
            <span className="font-label-sm text-label-sm text-primary font-mono px-2.5 py-1 rounded bg-primary/10 border border-primary/20">{VISI.footerValue}</span>
          </div>
        </div>

        {/* Card Misi (7 cols) */}
        <div className="lg:col-span-7 bg-surface-container/70 backdrop-blur-md rounded-2xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-all duration-300">
          <div>
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl fill-icon">rocket</span>
            </div>
            <span className="font-label-sm text-label-sm text-primary tracking-widest block uppercase mb-1">KOMITMEN OPERASIONAL</span>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-6">Misi Kami</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MISI_POINTS.map((point, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex gap-3.5 items-start">
                  <span className={`material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5 fill-icon`}>{point.icon}</span>
                  <p className="font-body-sm text-body-sm text-on-surface leading-normal">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface-variant">{MISI_FOOTER.label}</span>
            <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md">
              <span className={`material-symbols-outlined text-sm fill-icon`}>{MISI_FOOTER.icon}</span>
              <span>{MISI_FOOTER.value}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}