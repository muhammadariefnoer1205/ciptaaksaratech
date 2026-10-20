import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ClientStrip from './components/ClientStrip.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Portfolio from './components/Portfolio.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Footer from './components/Footer.jsx'
import FloatingWa from './components/FloatingWa.jsx'

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body antialiased selection:bg-primary-container selection:text-surface-container-lowest min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ClientStrip />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  )
}
