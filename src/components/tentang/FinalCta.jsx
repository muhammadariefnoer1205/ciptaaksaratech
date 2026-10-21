import { Icon } from '../ui.jsx'

export default function FinalCta() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24" id="konsultasi">
      <div className="relative bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container-low rounded-3xl p-10 md:p-16 border border-primary/30 shadow-2xl overflow-hidden glow-pistachio-subtle">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/15 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary-container/30 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary font-label-md text-label-md">
            <span className="material-symbols-outlined text-sm fill-icon">forum</span>
            <span>Mulai Diskusi Teknis</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight leading-tight">
            Siap Mewujudkan Visi Digital Bisnis Anda Bersama Kami?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Konsultasikan arsitektur teknis dan kebutuhan produk Anda bersama Principal Engineer kami dalam sesi 30 menit gratis tanpa kewajiban komersial.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-lg text-label-lg font-bold bg-primary-container text-on-primary-container px-8 py-3.5 rounded-lg shadow-md hover:bg-primary transition-all duration-200 active:scale-95 glow-pistachio" href="#">
              <span className="material-symbols-outlined text-xl fill-icon">calendar_month</span>
              <span>Jadwalkan Konsultasi Gratis</span>
            </a>
            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-lg text-label-lg font-semibold bg-surface-container-highest/80 border border-primary/30 text-on-surface px-8 py-3.5 rounded-lg hover:border-primary hover:text-primary transition-all duration-200 active:scale-95" href="#">
              <span className="material-symbols-outlined text-xl text-primary fill-icon">chat</span>
              <span>Chat WhatsApp Tim Teknis</span>
            </a>
          </div>
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base fill-icon">timer</span>
              Respon Cepat &lt; 2 Jam Kerja
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base fill-icon">description</span>
              Non-Disclosure Agreement (NDA) Tersedia
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base fill-icon">verified</span>
              Arsitek Senior Langsung
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}