export default function FunnelVisual() {
  const rows = [
    ['Impression to Click', '14.8% CTR', 'w-[85%]', 'bg-primary'],
    ['Scroll Depth > 75%', '72.4%', 'w-[72%]', 'bg-primary/80']
  ]
  return (
    <div className="bg-surface-container-highest/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <span className="text-label-md font-label-md text-on-surface">Conversion Funnel</span>
        <span className="text-label-sm font-mono text-primary font-semibold">+148% Traffic</span>
      </div>
      <div className="space-y-3">
        {rows.map(([t, v, w, c]) => (
          <div key={t} className="p-3 rounded-lg bg-surface-container-low border border-white/5">
            <div className="flex justify-between text-body-sm mb-1">
              <span className="text-on-surface">{t}</span>
              <span className="text-primary font-mono">{v}</span>
            </div>
            <div className="w-full bg-surface-bright h-2 rounded-full overflow-hidden">
              <div className={`${c} h-full ${w} rounded-full`}></div>
            </div>
          </div>
        ))}
        <div className="p-4 rounded-xl bg-surface-container border border-primary/30 flex items-center justify-between">
          <span className="text-label-sm text-on-surface-variant">Conversion Boost Rerata</span>
          <span className="text-headline-md font-headline-md text-primary font-extrabold">+42%</span>
        </div>
      </div>
    </div>
  )
}
