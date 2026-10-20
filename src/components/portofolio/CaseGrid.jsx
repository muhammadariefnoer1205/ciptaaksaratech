import CaseCard from './CaseCard.jsx'

export default function CaseGrid({ items }) {
  if (!items.length) {
    return (
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center text-on-surface-variant py-16 border border-dashed border-white/10 rounded-2xl">
          Belum ada studi kasus pada kategori ini.
        </div>
      </section>
    )
  }
  return (
    <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((c) => (<CaseCard key={c.id} c={c} />))}
      </div>
    </section>
  )
}
