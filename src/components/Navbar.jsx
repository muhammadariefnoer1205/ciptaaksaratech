import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NAV_LINKS } from '../data/site.js'
import { Icon, Logo } from './ui.jsx'

export function scrollToId(id) {
  requestAnimationFrame(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

const ROUTES = ['/tentang', '/layanan', '/portofolio', '/paket-harga']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const go = (l) => {
    setOpen(false)
    if (ROUTES.includes(l.to)) {
      navigate(l.to)
      window.scrollTo({ top: 0 })
      return
    }
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToId(l.section), 150)
    } else {
      scrollToId(l.section)
    }
  }
  const isActive = (l) => location.pathname === l.to
  return (
    <header className="bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 shadow-sm top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 max-w-7xl mx-auto h-20">
        <Link className="flex items-center gap-3 group" to="/">
          <Logo />
          <div className="flex flex-col">
            <span className="text-headline-sm font-headline-sm font-bold tracking-tight text-on-surface">CIPTA AKSARA TECH</span>
            <span className="text-label-sm font-label-sm text-outline tracking-wider uppercase">Digital Architect &amp; Engineering</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((l) => (
            <button key={l.label} onClick={() => go(l)} className={isActive(l) ? 'text-primary font-label-lg font-semibold border-b-2 border-primary pb-1' : 'text-on-surface-variant font-label-lg hover:text-primary transition-colors duration-200'}>
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          <button className="hidden sm:inline-flex items-center gap-2 bg-primary-container text-[#0F172A] font-label-lg font-bold px-5 py-2.5 rounded-lg hover:bg-primary transition-all shadow-sm active:scale-[0.98]" onClick={() => go({ to: '/', section: 'kontak' })}>
            <span>Konsultasi Gratis</span>
            <Icon name="chat" className="text-[18px]" />
          </button>
          <button aria-label="Buka Menu Navigasi" onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-lg text-on-surface-variant hover:text-primary bg-surface-container-high border border-outline-variant/40">
            <Icon name={open ? 'close' : 'menu'} className="text-[24px]" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-6 py-4 bg-surface-container border-b border-outline-variant/40 space-y-3">
          {NAV_LINKS.map((l) => (
            <button key={l.label} onClick={() => go(l)} className="block py-2 text-left w-full text-on-surface-variant hover:text-primary">
              {l.label}
            </button>
          ))}
          <div className="pt-2">
            <button className="w-full text-center block bg-primary-container text-[#0F172A] font-bold py-2.5 rounded-lg" onClick={() => go({ to: '/', section: 'kontak' })}>
              Konsultasi Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
