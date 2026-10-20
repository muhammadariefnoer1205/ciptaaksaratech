import Hero from '../components/Hero.jsx'
import ClientStrip from '../components/ClientStrip.jsx'
import Services from '../components/Services.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Process from '../components/Process.jsx'
import Pricing from '../components/Pricing.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Faq from '../components/Faq.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

export default function HomePage() {
  return (
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
  )
}
