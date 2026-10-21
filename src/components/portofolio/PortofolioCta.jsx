import { WA_CHAT_URL, WA_CONSULT_URL } from '../../data/site.js'
import { Icon } from '../ui.jsx'

export default function PortofolioCta() {
  return (
    <section className="py-24 relative overflow-hidden" id="kontak">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(183,216,148,0.15),transparent_70%)] pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/15 border border-primary-container/30 text-primary text-label-md font-label-md mb-6">
          <Icon name="rocket_launch" className="text-sm" />
          Mulai Proyek Impian Anda
        </div>
        <h2 className="text-display-hero-mobile md:text-headline-lg font-headline-lg text-on-surface tracking-tight max-w-3xl mx-auto mb-6">
          Siap Membawa Bisnis Anda ke Level Digital yang Lebih Tinggi?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Jadwalkan sesi konsultasi gratis 30 menit bersama Principal Engineer dan Lead Designer kami. Dapatkan audit arsitektur dan estimasi strategi yang terukur.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-[#E0F8C7] text-surface font-label-lg font-bold px-8 py-4 rounded-xl shadow-[0_0_24px_rgba(183,216,148,0.28)] transition-all duration-200 active:scale-[0.98]" href={WA_CONSULT_URL} target="_blank" rel="noreferrer">
            <Icon name="calendar_month" className="text-[20px]" />
            <span>Jadwalkan Konsultasi Gratis</span>
          </a>
          <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high border border-primary-container/30 text-on-surface hover:text-primary font-label-lg font-bold px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.98]" href={WA_CHAT_URL} target="_blank" rel="noreferrer">
            <Icon name="forum" className="text-primary text-[20px]" />
            <span>Chat WhatsApp Tim Teknis</span>
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-label-sm font-label-sm text-outline">
          <Icon name="bolt" className="text-primary text-xs" />
          Respons instan dalam waktu {'<'} 15 menit pada jam operasional.
        </div>
      </div>
    </section>
  )
}
