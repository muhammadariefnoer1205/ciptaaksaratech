import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingWa from '../components/FloatingWa.jsx'
import LayananHero from '../components/layanan/LayananHero.jsx'
import LayananDetail from '../components/layanan/LayananDetail.jsx'
import GuaranteeStrip from '../components/layanan/GuaranteeStrip.jsx'
import LayananCta from '../components/layanan/LayananCta.jsx'

export default function LayananPage() {
  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary selection:text-on-primary min-h-screen">
      <Navbar />
      <main className="w-full relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-[1800px] -right-40 w-[600px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
        <LayananHero />
        <LayananDetail />
        <GuaranteeStrip />
        <LayananCta />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  )
}
