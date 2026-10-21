import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingWa from '../components/FloatingWa.jsx'
import KontakHero from '../components/kontak/KontakHero.jsx'
import ProjectInquiryForm from '../components/kontak/ProjectInquiryForm.jsx'
import QuickActionBox from '../components/kontak/QuickActionBox.jsx'
import ContactDetails from '../components/kontak/ContactDetails.jsx'
import OfficeMap from '../components/kontak/OfficeMap.jsx'
import TransparencyCommitment from '../components/kontak/TransparencyCommitment.jsx'
import FaqAccordion from '../components/kontak/FaqAccordion.jsx'

export default function KontakPage() {
  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-on-primary min-h-screen relative overflow-x-hidden font-body-md text-body-md">
      <Navbar />
      <main className="w-full relative">
        <KontakHero />
        <div className="px-6 lg:px-12 max-w-7xl mx-auto pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <ProjectInquiryForm />
            <div className="lg:col-span-5 space-y-6">
              <QuickActionBox />
              <ContactDetails />
              <OfficeMap />
              <TransparencyCommitment />
            </div>
          </div>
        </div>
        <FaqAccordion />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  )
}