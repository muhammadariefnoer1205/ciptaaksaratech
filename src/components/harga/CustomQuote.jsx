import { WA_CHAT_URL, WA_NUMBER } from '../../data/site.js'
import { Icon } from '../ui.jsx'

const RAB_URL = `https://wa.me/${WA_NUMBER}?text=Halo%20Cipta%20Aksara%20Tech,%20saya%20ingin%20minta%20penawaran%20kustom`

export default function CustomQuote() {
  return (
    <section className="py-10 max-w-7xl mx-auto px-6" id="custom-quote">
      <div className="relative rounded-2xl bg-surface-container border border-primary/40 p-8 md:p-12 overflow-hidden shadow-2xl glow-accent">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/15 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary-container/30 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="px-3.5 py-1 rounded-full text-label-sm font-label-sm bg-primary/20 text-primary border border-primary/30 inline-block mb-3">
              Konsultasi Teknis &amp; Arsitektur
            </span>
            <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface mb-3 tracking-tight">
              Punya Kebutuhan Spesifik atau Proyek Skala Besar?
            </h2>
            <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant mb-4">
              Dapatkan dokumen estimasi biaya (RAB) dan roadmap arsitektur teknis gratis dalam 1x24 jam dari tim Principal Engineer kami.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-label-md font-label-md text-primary">
              <Icon name="timer" className="text-base" />
              <span>Respon instan dalam waktu &lt; 15 menit pada jam kerja (09.00 - 18.00 WIB)</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 w-full lg:w-auto shrink-0">
            <a className="px-6 py-3.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold text-center hover:bg-tertiary transition-all duration-200 shadow-md flex items-center justify-center gap-2" href={RAB_URL} rel="noopener noreferrer" target="_blank">
              <Icon name="description" className="text-lg" />
              <span>Minta Penawaran Kustom (RAB)</span>
            </a>
            <a className="px-6 py-3.5 rounded-lg bg-surface-container-high border border-outline-variant/60 text-on-surface font-label-lg text-label-lg font-bold text-center hover:bg-surface-bright hover:border-primary/40 transition-all duration-200 flex items-center justify-center gap-2" href={WA_CHAT_URL} rel="noopener noreferrer" target="_blank">
              <Icon name="chat" className="text-primary text-lg" />
              <span>Diskusi Cepat via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
