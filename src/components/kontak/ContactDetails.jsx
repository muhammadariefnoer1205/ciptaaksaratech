import { Icon } from '../ui.jsx'
import { KONTACT_DETAILS } from '../../data/kontak.js'

export default function ContactDetails() {
  const { title, icon, email, phone, hours } = KONTACT_DETAILS
  return (
    <div className="p-6 rounded-2xl bg-surface-container-low/90 border border-outline-variant/30 space-y-5">
      <h3 className="text-label-lg font-label-lg text-on-surface font-bold flex items-center gap-2 border-b border-outline-variant/20 pb-3">
        <Icon name={icon} className="text-primary text-[20px]" filled={true} />
        {title}
      </h3>
      <div className="space-y-4">
        {/* Email Item */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Icon name="mail" className="text-[18px]" />
          </div>
          <div>
            <p className="text-label-md font-label-md text-on-surface">{email.label}</p>
            <p className="text-body-sm font-body-sm text-primary font-medium hover:underline">
              <a href={`mailto:${email.primary}`}>{email.primary}</a>
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              <a className="hover:underline" href={`mailto:${email.secondary}`}>
                {email.secondary}
              </a>{' '}
              {email.secondaryLabel}
            </p>
          </div>
        </div>
        {/* Phone Item */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Icon name="call" className="text-[18px]" />
          </div>
          <div>
            <p className="text-label-md font-label-md text-on-surface">{phone.label}</p>
            <p className="text-body-sm font-body-sm text-on-surface font-medium">{phone.hunting}</p>
            <p className="text-body-sm font-body-sm text-on-surface-variant">{phone.wa}</p>
          </div>
        </div>
        {/* Operational Hours */}
        <div className="flex items-start gap-3.5 pt-2 border-t border-outline-variant/20">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Icon name="schedule" className="text-[18px]" />
          </div>
          <div className="text-body-sm font-body-sm space-y-1">
            <p className="text-label-md font-label-md text-on-surface">{hours.label}</p>
            <p className="text-on-surface-variant flex justify-between gap-4">
              <span>{hours.weekdays[0]}</span>
              <span className="text-on-surface font-medium">{hours.weekdays[1]}</span>
            </p>
            <p className="text-on-surface-variant flex justify-between gap-4">
              <span>{hours.saturday[0]}</span>
              <span className="text-on-surface font-medium">{hours.saturday[1]}</span>
            </p>
            <div className="flex items-center gap-1.5 text-primary text-[12px] font-label-md pt-1">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span>{hours.emergency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}