import { Icon } from '../ui.jsx'
import { KONTACT_COMMITMENT } from '../../data/kontak.js'

export default function TransparencyCommitment() {
  return (
    <div className="p-4 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 flex items-center justify-between text-center gap-2">
      {KONTACT_COMMITMENT.map((item, i) => (
        <>
          <div className="flex-1">
            <Icon name={item.icon} className="text-primary text-[20px]" filled={item.filled} />
            <p className="text-label-sm font-label-sm text-on-surface mt-0.5">{item.big}</p>
            <p className="text-[11px] font-body-sm text-on-surface-variant">{item.small}</p>
          </div>
          {i < KONTACT_COMMITMENT.length - 1 && <div className="w-px h-8 bg-outline-variant/30"></div>}
        </>
      ))}
    </div>
  )
}