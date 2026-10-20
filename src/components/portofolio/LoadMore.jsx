import { Icon } from '../ui.jsx'

export default function LoadMore({ shown, total, onLoad }) {
  const pct = Math.round((shown / total) * 100)
  return (
    <section className="pb-20 text-center max-w-7xl mx-auto px-6 lg:px-12">
      <div className="bg-surface-container-low/80 border border-white/[0.08] rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-md">
        <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
          Menampilkan <span className="text-on-surface font-semibold">{shown}</span> dari <span className="text-on-surface font-semibold">{total}</span> proyek unggulan
        </p>
        <div className="w-48 h-1.5 bg-surface-container-highest rounded-full mx-auto mb-6 overflow-hidden">
          <div className="h-full bg-primary-container rounded-full transition-all" style={{ width: `${pct}%` }}></div>
        </div>
        <button onClick={onLoad} className="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-variant border border-primary-container/30 text-on-surface hover:text-primary px-8 py-3.5 rounded-xl font-label-lg font-bold hover:shadow-[0_0_28px_rgba(183,216,148,0.38)] transition-all duration-200 active:scale-[0.98]">
          <Icon name="expand_circle_down" className="text-[20px]" />
          Muat Lebih Banyak Proyek ({total - shown})
        </button>
        <p className="text-label-md font-label-md text-outline mt-4">
          Mencari contoh proyek di industri spesifik Anda? Diskusikan dengan tim kami.
        </p>
      </div>
    </section>
  )
}
