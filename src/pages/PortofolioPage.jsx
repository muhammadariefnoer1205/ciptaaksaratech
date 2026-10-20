import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingWa from '../components/FloatingWa.jsx'
import PortofolioHero from '../components/portofolio/PortofolioHero.jsx'
import FilterBar from '../components/portofolio/FilterBar.jsx'
import CaseGrid from '../components/portofolio/CaseGrid.jsx'
import LoadMore from '../components/portofolio/LoadMore.jsx'
import QuoteBanner from '../components/portofolio/QuoteBanner.jsx'
import PortofolioCta from '../components/portofolio/PortofolioCta.jsx'
import { CASE_STUDIES } from '../data/cases1.js'
import { MORE_CASES } from '../data/cases2.js'

const ALL = [...CASE_STUDIES, ...MORE_CASES]
const PAGE = 6

export default function PortofolioPage() {
  const [filter, setFilter] = useState('semua')
  const [sort, setSort] = useState('terbaru')
  const [limit, setLimit] = useState(PAGE)

  const items = useMemo(() => {
    let list = filter === 'semua' ? [...ALL] : ALL.filter((c) => c.cat === filter)
    if (sort === 'populer') list = [...list].reverse()
    if (sort === 'dampak') list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    return list.slice(0, limit)
  }, [filter, sort, limit])

  const pickFilter = (id) => {
    setFilter(id)
    setLimit(PAGE)
  }

  return (
    <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen antialiased flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <PortofolioHero />
        <FilterBar active={filter} onFilter={pickFilter} sort={sort} onSort={setSort} />
        <CaseGrid items={items} />
        {items.length >= PAGE && <LoadMore shown={items.length} total={24} onLoad={() => setLimit((v) => v + PAGE)} />}
        <QuoteBanner />
        <PortofolioCta />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  )
}
