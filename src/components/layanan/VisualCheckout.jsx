import { Icon } from '../ui.jsx'

export default function CheckoutVisual() {
  return (
    <div className="bg-surface-container-highest/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
        <span className="text-label-md font-label-md text-primary font-mono">Checkout Pipeline</span>
        <span className="px-2 py-0.5 rounded text-label-sm bg-primary/20 text-primary">Active Socket</span>
      </div>
      <div className="space-y-3">
        <div className="p-3.5 rounded-lg bg-surface-container-low border border-white/5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Icon name="qr_code_2" className="text-[20px]" />
            </div>
            <div>
              <p className="text-label-md font-label-md text-on-surface">QRIS &amp; VA Auto-Sync</p>
              <p className="text-label-sm text-on-surface-variant">Midtrans / Xendit Ready</p>
            </div>
          </div>
          <span className="text-label-sm text-primary font-mono font-semibold">99.98%</span>
        </div>
        <div className="p-4 rounded-xl bg-surface-container border border-primary/30 flex items-center justify-between">
          <div>
            <span className="text-label-sm text-on-surface-variant block">Drop-off Keranjang:</span>
            <span className="text-headline-sm font-headline-sm text-primary font-bold">Turun -38%</span>
          </div>
          <Icon name="trending_up" className="text-primary text-[32px]" />
        </div>
      </div>
    </div>
  )
}
