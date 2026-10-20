import { HERO_IMAGE } from '../data/site.js'
import { Icon } from './ui.jsx'

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden" id="beranda">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary-container font-label-md">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>Agensi Web &amp; Rekayasa Perangkat Lunak Indonesia</span>
          </div>

          <h1 className="text-display-hero-mobile md:text-headline-lg lg:text-display-hero font-display-hero text-on-surface tracking-tight leading-tight">
            Bangun Website Berkelas Dunia yang Mengakselerasi Pertumbuhan Bisnis Anda
          </h1>

          <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Kami merancang dan mengembangkan website profesional, toko online berkonversi tinggi, dan aplikasi web khusus dengan standar performa terbaik untuk UMKM, startup, dan korporasi.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              className="inline-flex items-center justify-center gap-2 bg-primary-container text-[#0F172A] font-label-lg font-bold px-8 py-4 rounded-xl hover:bg-primary transition-all duration-200 shadow-[0_12px_24px_-8px_rgba(183,216,148,0.3)] hover:shadow-[0_0_24px_rgba(183,216,148,0.45)] active:scale-[0.98]"
              href="#kontak"
            >
              <span>Konsultasi Gratis</span>
              <Icon name="arrow_forward" className="text-[20px]" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 bg-surface-container-high border border-outline-variant/60 text-on-surface font-label-lg font-semibold px-7 py-4 rounded-xl hover:border-primary-container/60 hover:text-primary transition-all duration-200 active:scale-[0.98]"
              href="#portofolio"
            >
              <Icon name="visibility" className="text-[20px]" />
              <span>Lihat Portofolio</span>
            </a>
          </div>

          <div className="pt-6 border-t border-outline-variant/30 grid grid-cols-3 gap-4">
            <div>
              <div className="flex items-center gap-1 text-primary-container font-headline-sm font-bold">
                <span>50+</span>
                <Icon name="verified" className="text-[18px]" />
              </div>
              <p className="text-label-md text-on-surface-variant mt-0.5">Proyek Selesai</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-primary-container font-headline-sm font-bold">
                <span>4.9/5</span>
                <Icon name="star" filled className="text-[18px]" />
              </div>
              <p className="text-label-md text-on-surface-variant mt-0.5">Kepuasan Klien</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-primary-container font-headline-sm font-bold">
                <span>24/7</span>
                <Icon name="support_agent" className="text-[18px]" />
              </div>
              <p className="text-label-md text-on-surface-variant mt-0.5">Support Responsif</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl p-2 bg-gradient-to-tr from-surface-variant/40 to-outline-variant/20 border border-outline-variant/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <img
              alt="Cipta Aksara Tech Web Application Analytics Mockup Dashboard"
              className="w-full h-auto rounded-xl object-cover shadow-2xl"
              src={HERO_IMAGE}
              loading="eager"
            />
            <div className="absolute -top-6 -left-4 sm:-left-6 p-4 rounded-xl bg-surface-container-high/90 border border-primary-container/40 backdrop-blur-md shadow-2xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container">
                <Icon name="trending_up" className="text-[24px]" />
              </div>
              <div>
                <p className="text-label-lg font-bold text-primary-container">+148% Traffic</p>
                <p className="text-label-sm text-on-surface-variant">Optimalisasi SEO &amp; Kecepatan</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 p-4 rounded-xl bg-surface-container-high/90 border border-primary-container/40 backdrop-blur-md shadow-2xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container">
                <Icon name="rocket_launch" className="text-[24px]" />
              </div>
              <div>
                <p className="text-label-lg font-bold text-primary-container">42% Conversion Boost</p>
                <p className="text-label-sm text-on-surface-variant">Arsitektur UX Modern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
