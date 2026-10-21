import { Icon } from '../ui.jsx'
import { COMPANY_VALUES } from '../../data/about.js'

export default function CompanyValues() {
  return (
    <section className="bg-surface-container-lowest/70 border-t border-outline-variant/20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-label-md mb-3">
            <span className="material-symbols-outlined text-sm">shield</span>
            <span>Nilai-Nilai Fondasi Kami</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
            Nilai yang Memandu Setiap Baris Kode Kami
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3">
            Kami menolak jalan pintas teknis. Enam pilar etos kerja inilah yang membedakan produk buatan CIPTA AKSARA TECH dengan agensi biasa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_VALUES.map((v) => (
            <div key={v.no} className="bg-surface-container/70 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-dim transition-all mb-5">
                <span className={`material-symbols-outlined text-2xl ${v.icon === 'code_blocks' ? '' : 'fill-icon'}`}>{v.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">{v.no}. {v.title}</h3>
              <span className="font-label-sm text-label-sm text-primary mb-3 block">{v.subtitle}</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}