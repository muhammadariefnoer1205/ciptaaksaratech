import { Icon } from '../ui.jsx'
import { ABOUT_STATS } from '../../data/about.js'

export default function AchievementsRow() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-lowest py-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.icon} className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className={`material-symbols-outlined text-primary text-2xl fill-icon`}>{stat.icon}</span>
                <span className={`font-headline-lg text-headline-lg font-bold ${stat.valueColor} tracking-tight`}>{stat.value}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}