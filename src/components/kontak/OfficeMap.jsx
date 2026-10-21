import { Icon } from '../ui.jsx'
import { KONTACT_OFFICE } from '../../data/kontak.js'

export default function OfficeMap() {
  const { title, icon, building, address, transit, mapLabel, mapCta, mapImage } = KONTACT_OFFICE
  return (
    <div className="p-6 rounded-2xl bg-surface-container-low/90 border border-outline-variant/30 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-label-lg font-label-lg text-on-surface font-bold flex items-center gap-2">
            <Icon name={icon} className="text-primary text-[20px]" filled={true} />
            {title}
          </h3>
          <p className="text-body-sm font-body-sm text-on-surface mt-1 font-medium">{building}</p>
          <p className="text-body-sm font-body-sm text-on-surface-variant">{address}</p>
          <p className="text-[12px] font-body-sm text-secondary mt-1 flex items-center gap-1">
            <Icon name="directions_subway" className="text-[15px]" />
            {transit}
          </p>
        </div>
      </div>
      <div className="w-full h-44 rounded-xl border border-outline-variant/40 overflow-hidden relative group bg-surface-container-highest cursor-pointer flex items-center justify-center" style={{ backgroundImage: `url(${mapImage})` }}>
        <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors backdrop-blur-[2px]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-primary-container/20 border-2 border-primary flex items-center justify-center shadow-[0_0_20px_#b7d894] animate-bounce">
            <Icon name="location_on" className="text-on-primary font-bold text-[20px]" filled={true} />
          </div>
          <div className="mt-1 px-3 py-1 rounded-md bg-surface-container-highest/95 border border-primary/40 text-[11px] font-label-sm text-primary shadow-lg backdrop-blur-md">
            {mapLabel}
          </div>
        </div>
        <div className="absolute bottom-2 right-2 z-10">
          <span className="px-2.5 py-1 rounded bg-surface-container-lowest/80 text-[11px] font-label-md text-on-surface hover:text-primary border border-outline-variant/30 flex items-center gap-1">
            {mapCta}
          </span>
        </div>
      </div>
    </div>
  )
}