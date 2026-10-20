export default function BeforeAfterVisual() {
  const oldRows = [['Load Time:', '4.8s'], ['PageSpeed:', '41 / 100'], ['Mobile UX:', 'Broken']]
  const newRows = [['Load Time:', '0.7s'], ['PageSpeed:', '98 / 100'], ['Mobile UX:', 'Fluid']]
  return (
    <div className="bg-surface-container-highest/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <span className="text-label-md font-label-md text-on-surface">Before vs After</span>
        <span className="px-2 py-0.5 rounded text-label-sm bg-primary/20 text-primary">Zero Downtime</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-surface-container-low border border-error/20">
          <span className="text-label-sm text-error font-semibold uppercase">Lama</span>
          <div className="mt-3 space-y-2">
            {oldRows.map(([k, v]) => (
              <div key={k} className="flex justify-between text-body-sm text-on-surface-variant">
                <span>{k}</span><span className="text-error font-mono">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-surface-container border border-primary/40 shadow-[0_0_20px_rgba(183,216,148,0.15)]">
          <span className="text-label-sm text-primary font-semibold uppercase">Baru</span>
          <div className="mt-3 space-y-2">
            {newRows.map(([k, v]) => (
              <div key={k} className="flex justify-between text-body-sm text-on-surface">
                <span>{k}</span><span className="text-primary font-mono font-bold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
