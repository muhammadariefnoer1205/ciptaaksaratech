import { FILTERS } from '../../data/portofolio.js'
import { Icon } from '../ui.jsx'

export default function FilterBar({ active, onFilter, sort, onSort }) {
  return (
    <section className="py-8 border-b border-white/[0.06] bg-surface-container-lowest/50 sticky top-20 z-40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {FILTERS.map((f) => {
            const on = active === f.id
            return (
              <button
                key={f.id}
                onClick={() => onFilter(f.id)}
                className={on
                  ? 'px-4 py-2 rounded-full bg-primary-container text-surface font-label-md font-semibold text-label-md whitespace-nowrap active:scale-95 transition-transform'
                  : 'px-4 py-2 rounded-full bg-surface-container-high/80 hover:bg-surface-container-highest border border-white/[0.08] text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors'}
              >
                {f.label} ({f.count})
              </button>
            )
          })}
        </div>
        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
          <span className="text-label-md font-label-md text-on-surface-variant">Urutkan:</span>
          <div className="relative inline-block">
            <select value={sort} onChange={(e) => onSort(e.target.value)} className="bg-surface-container border border-white/[0.12] rounded-lg px-3 py-1.5 pr-8 text-label-md font-label-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container cursor-pointer appearance-none">
              <option value="terbaru">Terbaru</option>
              <option value="dampak">Dampak Tertinggi</option>
              <option value="populer">Paling Populer</option>
            </select>
            <Icon name="unfold_more" className="absolute right-2 top-2 text-sm text-outline pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
