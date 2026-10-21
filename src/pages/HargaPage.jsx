import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingWa from '../components/FloatingWa.jsx'
import HargaHero from '../components/harga/HargaHero.jsx'
import PriceTiers from '../components/harga/PriceTiers.jsx'
import CompareTable from '../components/harga/CompareTable.jsx'
import HargaFaq from '../components/harga/HargaFaq.jsx'
import CustomQuote from '../components/harga/CustomQuote.jsx'

export default function HargaPage() {
  const [mode, setMode] = useState('onetime')

  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col font-body-md text-body-md overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <HargaHero mode={mode} onMode={setMode} />
        <PriceTiers mode={mode} />
        <CompareTable />
        <HargaFaq />
        <CustomQuote />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  )
}
