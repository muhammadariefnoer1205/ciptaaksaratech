import { GUARANTEES } from '../../data/layanan.js'
import { Icon } from '../ui.jsx'

export default function GuaranteeStrip() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="bg-surface-container-high/90 border border-white/5 rounded-2xl p-8 lg:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-label-md font-label-md inline-block mb-3">
            Jaminan Standar Rekayasa
          </div>
          <h2 className="text-headline-md font-headline-md text-on-surface">Standar Kualitas di Setiap Layanan Kami</h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">
            Setiap baris kode dan komponen visual yang kami serahkan telah melalui serangkaian pengujian ketat sebelum masuk ke lingkungan produksi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEES.map((g) => (
            <div key={g.title} className="p-6 rounded-xl bg-surface-container border border-white/5 hover:border-primary/40 transition-all">
              <Icon name={g.icon} className="text-primary text-[32px] mb-3" />
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">{g.title}</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
