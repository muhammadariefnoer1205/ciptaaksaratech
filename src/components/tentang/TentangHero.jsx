import { Icon } from '../ui.jsx'
import { MILESTONES } from '../../data/about.js'

export default function TentangHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-24 relative">
      <div className="bg-grid-pattern relative">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant mb-6">
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
            <span className="material-symbols-outlined text-sm">home</span>
            Beranda
          </a>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Tentang Kami</span>
        </nav>

        {/* Badge Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary font-label-md text-label-md mb-8 glow-pistachio-subtle">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>Perjalanan &amp; Komitmen Kami</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
              Merancang Ekosistem Digital Berperforma Tinggi untuk <span className="text-primary italic">Pertumbuhan Bisnis Nyata</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Didirikan di Jakarta dengan misi menjembatani standar rekayasa perangkat lunak enterprise dan estetika desain modern yang presisi. Kami menggantikan template lambat dan generik dengan arsitektur web aplikasi kustom, scalable, berkecepatan ultra-tinggi, serta dirancang khusus untuk memacu konversi bisnis modern di Indonesia.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface font-label-lg text-label-lg hover:border-primary/50 hover:text-primary transition-all" href="#visi-misi">
                <span>Jelajahi Prinsip Kami</span>
                <span className="material-symbols-outlined text-base">arrow_downward</span>
              </a>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md px-4 py-2 bg-surface-container-low rounded-lg border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-base fill-icon">verified</span>
                <span>100% In-house Indonesian Tech Talent</span>
              </div>
            </div>
          </div>

          {/* Hero Milestone Card Visual */}
          <div className="lg:col-span-4">
            <div className="relative bg-surface-container/70 backdrop-blur-md border border-white/10 rounded-xl p-space-lg shadow-2xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
              <div className="absolute -right-12 -top-12 w-36 h-36 bg-primary/15 rounded-full blur-2xl group-hover:bg-primary/25 transition-all"></div>
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                </div>
                <span className="font-label-sm text-label-sm text-primary tracking-wider font-mono">SYS.HEALTH: 100%</span>
              </div>
              <div className="space-y-4 pt-4">
                {MILESTONES.map((m) => (
                  <div key={m.label} className="p-3 bg-surface-container-low/80 rounded-lg border border-outline-variant/20">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">{m.label}</span>
                      <span className={`font-label-sm text-label-sm ${m.valueColor} font-mono font-bold`}>{m.value}</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className={`${m.barColor} h-full ${m.width} rounded-full`}></div>
                    </div>
                  </div>
                ))}
                <div className="pt-2 text-center">
                  <p className="font-label-sm text-label-sm text-on-surface-variant/70">Arsitektur Digital Terverifikasi Standar Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}