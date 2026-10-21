import { Icon } from '../ui.jsx'
import { KONTACT_QUICK_ACTION } from '../../data/kontak.js'

export default function QuickActionBox() {
  const { badge, avg, title, desc, button, url } = KONTACT_QUICK_ACTION
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-low border border-[#25D366]/30 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="px-2.5 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-label-sm font-label-sm uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping"></span>
          {badge}
        </span>
        <span className="text-body-sm font-body-sm text-on-surface-variant">{avg}</span>
      </div>
      <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
        {title}
      </h3>
      <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 mb-5 leading-relaxed">
        {desc}
      </p>
      <a href={url} rel="noopener noreferrer" target="_blank" className="w-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/30 font-label-lg font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-[0.98]">
        <Icon name="forum" className="text-[20px]" filled={true} />
        <span>{button}</span>
      </a>
    </div>
  )
}