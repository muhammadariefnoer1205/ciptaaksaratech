import { Icon } from '../ui.jsx'

export default function LighthouseVisual() {
  const metrics = [['FCP', '0.6s'], ['LCP', '0.9s'], ['CLS', '0.00']]
  return (
    <div className="relative bg-surface-container-highest/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-error/70"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
          <span className="w-3 h-3 rounded-full bg-primary/70"></span>
        </div>
        <Icon name="lock" className="text-on-surface-variant text-[18px]" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-white/5">
          <div>
            <p className="text-label-md font-label-md text-on-surface">Lighthouse Performance</p>
            <p className="text-body-sm text-on-surface-variant">Audited Desktop &amp; Mobile</p>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-bold text-primary font-mono text-sm">99</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {metrics.map(([k, v]) => (
            <div key={k} className="p-3 rounded-lg bg-surface-container-low/80 border border-white/5">
              <span className="text-label-sm text-on-surface-variant">{k}</span>
              <p className="text-headline-sm font-headline-sm text-primary mt-1">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
