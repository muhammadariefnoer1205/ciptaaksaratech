import { useState } from 'react'
import { Icon, Logo } from './ui.jsx'

const LAYANAN = ['Layanan Web Development', 'Paket Pembuatan Website', 'Toko Online E-Commerce', 'Aplikasi Web Kustom']
const PERUSAHAAN = [
  { label: 'Portofolio Klien', href: '#portofolio' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Syarat & Ketentuan', href: '#' },
  { label: 'Kebijakan Privasi', href: '#' },
  { label: 'Hubungi Tim', href: '#kontak' }
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="w-full px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-headline-sm font-headline-sm font-bold text-on-surface">CIPTA AKSARA TECH</span>
            </div>
            <p className="text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              Agensi rekayasa perangkat lunak dan pembuatan website premium di Indonesia. Berfokus pada estetika modern, kecepatan kilat, dan pertumbuhan bisnis terukur.
            </p>
            <div className="pt-2 text-body-sm text-outline">
              <p className="flex items-center gap-2"><Icon name="location_on" className="text-[16px]" /> Jakarta Selatan &amp; Bandung, Indonesia</p>
              <p className="flex items-center gap-2 mt-1"><Icon name="mail" className="text-[16px]" /> halo@ciptaaksara.tech</p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider">Layanan</h4>
            <ul className="space-y-2.5">
              {LAYANAN.map((l) => (<li key={l}><a className="text-on-surface-variant text-body-sm hover:text-on-surface" href="#layanan">{l}</a></li>))}
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider">Perusahaan</h4>
            <ul className="space-y-2.5">
              {PERUSAHAAN.map((l) => (<li key={l.label}><a className="text-on-surface-variant text-body-sm hover:text-on-surface" href={l.href}>{l.label}</a></li>))}
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider">Buletin Digital</h4>
            <p className="text-body-sm text-on-surface-variant">Dapatkan wawasan teknologi dan tren desain website terkini langsung ke email Anda.</p>
            {done ? (
              <p className="text-body-sm text-primary-container border border-primary-container/40 bg-primary-container/10 rounded-lg px-4 py-3">Terima kasih telah berlangganan!</p>
            ) : (
              <form className="space-y-2" onSubmit={(e) => { e.preventDefault(); if (email) setDone(true) }}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Masukkan email Anda"
                  className="w-full bg-surface-container border border-outline-variant/40 rounded-lg px-4 py-2.5 text-body-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container" />
                <button className="w-full bg-surface-variant font-label-md font-semibold py-2.5 rounded-lg border border-outline-variant/40 hover:border-primary-container hover:text-primary" type="submit">
                  Langganan Sekarang
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="border-t border-outline-variant/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-outline text-center md:text-left">&copy; 2025 CIPTA AKSARA TECH. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center space-x-6 text-outline">
            {['LinkedIn', 'Instagram', 'GitHub'].map((s) => (<a key={s} className="hover:text-primary" href="#"><span className="text-label-sm">{s}</span></a>))}
          </div>
        </div>
      </div>
    </footer>
  )
}
