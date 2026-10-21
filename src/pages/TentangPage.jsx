import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingWa from '../components/FloatingWa.jsx'
import TentangHero from '../components/tentang/TentangHero.jsx'
import AchievementsRow from '../components/tentang/AchievementsRow.jsx'
import VisiMisi from '../components/tentang/VisiMisi.jsx'
import CompanyValues from '../components/tentang/CompanyValues.jsx'
import LeadershipTeam from '../components/tentang/LeadershipTeam.jsx'
import FinalCta from '../components/tentang/FinalCta.jsx'

export default function TentangPage() {
  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-x-hidden font-body-md text-body-md">
      <Navbar />
      <main className="w-full relative">
        <TentangHero />
        <AchievementsRow />
        <VisiMisi />
        <CompanyValues />
        <LeadershipTeam />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  )
}