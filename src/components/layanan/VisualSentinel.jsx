import { Icon } from '../ui.jsx'

const ROWS = [
  ['security', 'DDoS Shield & WAF', 'Cloudflare Guard', 'Protected'],
  ['cloud_sync', 'Cloud Snapshot', 'Snapshot harian', 'Daily 03:00'],
  ['manage_search', 'Search Console Audit', '0 Errors, 100% CWV', 'Clean']
]

export default function SentinelVisual() {
  return (
    <div className="bg-surface-container-highest/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <span className="text-label-md font-label-md text-on-surface">Health Sentinel</span>
        <span className="flex items-center gap-1.5 text-label-sm text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>Online 99.98%
        </span>
      </div>
      <div className="space-y-3">
        {ROWS.map(([icon, t, s, st]) => (
          <div key={t} className="p-3.5 rounded-lg bg-surface-container-low border border-white/5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Icon name={icon} className="text-primary text-[20px]" />
              <div>
                <p className="text-label-md font-label-md text-on-surface">{t}</p>
                <p className="text-label-sm text-on-surface-variant">{s}</p>
              </div>
            </div>
            <span className="text-label-sm text-primary font-mono">{st}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
