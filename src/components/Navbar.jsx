import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/site.js'
import { Icon, Logo } from './ui.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#beranda')

  useEffect(() => {
    const onHash = () => setActive(window.location.hash || '#beranda')
    onHash()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <header className="bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 shadow-sm top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 max-w-7xl mx-auto h-20">
        <a className="flex items-center gap-3 group" href="#beranda">
          <Logo />
          <div className="flex flex-col">
            <span className="text-headline-sm font-headline-sm font-bold tracking-tight text-on-surface">
              CIPTA AKSARA TECH
            </span>
            <span className="text-label-sm font-label-sm text-outline tracking-wider uppercase">
              Digital Architect &amp; Engineering
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className={
                active === l.href
                  ? 'text-primary font-label-lg font-semibold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant font-label-lg hover:text-primary transition-colors duration-200'
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <a
            className="hidden sm:inline-flex items-center gap-2 bg-primary-container text-[#0F172A] font-label-lg font-bold px-5 py-2.5 rounded-lg hover:bg-primary transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(183,216,148,0.4)] active:scale-[0.98]"
            href="#kontak"
          >
            <span>Konsultasi Gratis</span>
            <Icon name="chat" className="text-[18px]" />
          </a>
          <button
            aria-label="Buka Menu Navigasi"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-on-surface-variant hover:text-primary bg-surface-container-high border border-outline-variant/40"
          >
            <Icon name={open ? 'close' : 'menu'} className="text-[24px]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 bg-surface-container border-b border-outline-variant/40 space-y-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => {
                setActive(l.href)
                setOpen(false)
              }}
              className={`block py-2 ${active === l.href ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <a className="w-full text-center block bg-primary-container text-[#0F172A] font-bold py-2.5 rounded-lg" href="#kontak" onClick={() => setOpen(false)}>
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
