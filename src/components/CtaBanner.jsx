import { WA_CHAT_URL, WA_CONSULT_URL } from '../data/site.js'
import { Icon } from './ui.jsx'

export default function CtaBanner() {
  return (
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto" id="kontak">
      <div className="relative rounded-3xl bg-gradient-to-br from-surface-variant via-surface-container to-surface-container-high p-10 md:p-16 border border-primary-container/30 overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.5)] text-center space-y-8">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-primary-container/15 text-primary-container font-label-md uppercase tracking-wider border border-primary-container/30">
            MULAI PROYEK DIGITAL ANDA
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface">
            Siap Membawa Bisnis Anda ke Level Digital yang Lebih Tinggi?
          </h2>
          <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Jadwalkan sesi konsultasi gratis 30 menit bersama tim arsitek digital kami dan dapatkan estimasi strategi serta biaya secara transparan.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-2">
          <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-[#0F172A] font-label-lg font-bold px-8 py-4 rounded-xl hover:bg-primary transition-all active:scale-[0.98]" href={WA_CONSULT_URL} rel="noopener noreferrer" target="_blank">
            <span>Konsultasi Gratis Sekarang</span>
            <Icon name="send" className="text-[20px]" />
          </a>
          <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-container border border-outline-variant/60 text-on-surface font-label-lg font-semibold px-8 py-4 rounded-xl hover:border-primary-container hover:text-primary transition-all active:scale-[0.98]" href={WA_CHAT_URL} rel="noopener noreferrer" target="_blank">
            <Icon name="chat" className="text-[20px]" />
            <span>Chat WhatsApp Tim Kami</span>
          </a>
        </div>
      </div>
    </section>
  )
}
