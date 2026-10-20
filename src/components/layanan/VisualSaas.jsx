import { Icon } from '../ui.jsx'

export default function SaasVisual() {
  return (
    <div className="bg-surface-container-highest/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <span className="text-label-md font-label-md text-on-surface">SaaS Engine &amp; Database</span>
        <Icon name="database" className="text-primary text-[20px]" />
      </div>
      <div className="p-4 rounded-lg bg-surface-container-low border border-white/5 font-mono text-label-sm text-on-surface-variant space-y-1">
        <p className="text-secondary"><span className="text-primary">interface</span> OrganizationTenant {'{'}</p>
        <p className="pl-4 text-on-surface">id: UUID;</p>
        <p className="pl-4 text-on-surface">roleBasedAccess: RBACMatrix;</p>
        <p className="text-secondary">{'}'}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 pt-3">
        <div className="p-3 rounded-lg bg-surface-container-low border border-white/5">
          <span className="text-on-surface-variant text-[11px] block">Latency DB</span>
          <span className="text-headline-sm font-headline-sm text-primary font-bold">&lt; 14ms</span>
        </div>
        <div className="p-3 rounded-lg bg-surface-container-low border border-white/5">
          <span className="text-on-surface-variant text-[11px] block">Permissions</span>
          <span className="text-headline-sm font-headline-sm text-on-surface font-bold">RBAC</span>
        </div>
      </div>
    </div>
  )
}
