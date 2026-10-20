import { WA_CONSULT_URL } from '../data/site.js'
import { Icon } from './ui.jsx'

export default function FloatingWa() {
  return (
    <a
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-primary-container text-[#0F172A] px-4 py-3 rounded-full font-label-lg font-bold shadow-2xl hover:bg-primary transition-all duration-300 hover:scale-105 border border-surface"
      href={WA_CONSULT_URL}
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Chat WhatsApp Cipta Aksara Tech"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F172A] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0F172A]"></span>
      </span>
      <Icon name="chat" className="text-[22px]" />
      <span className="hidden sm:inline">Chat Kami</span>
    </a>
  )
}
