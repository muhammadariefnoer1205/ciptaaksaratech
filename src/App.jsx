import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingWa from './components/FloatingWa.jsx'
import HomePage from './pages/HomePage.jsx'
import LayananPage from './pages/LayananPage.jsx'
import PortofolioPage from './pages/PortofolioPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-background text-on-surface font-body antialiased selection:bg-primary-container selection:text-surface-container-lowest min-h-screen relative overflow-x-hidden">
              <Navbar />
              <HomePage />
              <Footer />
              <FloatingWa />
            </div>
          }
        />
        <Route path="/layanan" element={<LayananPage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="*" element={<LayananPage />} />
      </Routes>
    </BrowserRouter>
  )
}
