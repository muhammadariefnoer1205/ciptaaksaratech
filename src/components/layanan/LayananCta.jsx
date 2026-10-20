import { WA_CHAT_URL, WA_CONSULT_URL } from '../../data/site.js'
import { Icon } from '../ui.jsx'

export default function LayananCta() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16" id="kontak-form">
      <div className="relative rounded-3xl bg-surface-container-high border border-primary/30 p-8 md:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-secondary/15 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-label-md font-label-md mb-6">
            <Icon name="schedule" className="text-[16px]" />
            Sesi Diskusi Solusi Teknis
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-4">
            Belum Yakin Layanan Mana yang Paling Tepat untuk Bisnis Anda?
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10">
            Diskusikan roadmap digital Anda bersama tim Principal Engineer dan Lead Designer kami. Konsultasi gratis 30 menit tanpa komitmen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary font-label-lg px-8 py-4 rounded-xl font-bold hover:bg-tertiary transition-all active:scale-[0.98] shadow-[0_0_24px_rgba(183,216,148,0.35)]" href={WA_CONSULT_URL} target="_blank" rel="noreferrer">
              <span>Jadwalkan Konsultasi Gratis</span>
              <Icon name="calendar_today" className="text-[20px]" />
            </a>
            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-container border border-primary/30 text-on-surface hover:text-primary hover:border-primary font-label-lg px-8 py-4 rounded-xl font-semibold transition-all" href={WA_CHAT_URL} target="_blank" rel="noreferrer">
              <Icon name="chat" className="text-[20px]" />
              <span>Chat WhatsApp Tim Teknis</span>
            </a>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant/70 mt-6">
            Respons instan dalam waktu &lt; 15 menit pada jam kerja (09.00 - 18.00 WIB)
          </p>
        </div>
      </div>
    </section>
  )
}
