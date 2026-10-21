import { COMPARE_GROUPS } from '../../data/compare.js'
import { Icon } from '../ui.jsx'

function Cell({ value, highlight, strong }) {
  if (value === 'check') {
    return <span className="inline-flex justify-center"><Icon name="check" className="text-primary text-xl" /></span>
  }
  if (value === 'check_circle') {
    return <span className="inline-flex justify-center"><Icon name="check_circle" filled className="text-primary text-xl" /></span>
  }
  if (value === 'none') {
    return <span className="inline-flex justify-center"><Icon name="horizontal_rule" className="text-outline" /></span>
  }
  const cls = strong ? 'text-primary font-semibold' : ''
  return <span className={cls}>{value}</span>
}

export default function CompareTable() {
  return (
    <section className="py-10 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-on-surface mb-3 tracking-tight">
          Komparasi Fitur &amp; Kapabilitas Detail
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant">
          Bandingkan spesifikasi teknis dan lingkup pekerjaan di setiap tier paket kami.
        </p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-outline-variant/30 glass-card shadow-2xl">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-surface-container-high/90 border-b border-outline-variant/40">
              <th className="py-5 px-6 font-label-lg text-label-lg text-on-surface w-2/5">Fitur &amp; Kapabilitas Teknis</th>
              <th className="py-5 px-6 font-label-lg text-label-lg text-on-surface text-center w-1/5">
                <div>Starter</div>
                <div className="text-body-sm font-normal text-on-surface-variant">Rp 3.5jt</div>
              </th>
              <th className="py-5 px-6 font-label-lg text-label-lg text-primary text-center w-1/5 bg-primary/10 border-x border-primary/20">
                <div className="font-bold">Bisnis Pro</div>
                <div className="text-body-sm font-normal text-primary">Rp 7.5jt</div>
              </th>
              <th className="py-5 px-6 font-label-lg text-label-lg text-on-surface text-center w-1/5">
                <div>Enterprise</div>
                <div className="text-body-sm font-normal text-on-surface-variant">Rp 15jt+</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/20 font-body-sm text-body-sm text-on-surface">
            {COMPARE_GROUPS.map((g) => (
              <>
                <tr key={g.title} className="bg-surface-container-lowest/60">
                  <td className="py-3 px-6 font-label-md text-label-md font-bold text-primary tracking-wider uppercase" colSpan={4}>
                    {g.title}
                  </td>
                </tr>
                {g.rows.map((r) => (
                  <tr key={r.feature}>
                    <td className="py-4 px-6 text-on-surface">{r.feature}</td>
                    <td className="py-4 px-6 text-center text-on-surface-variant"><Cell value={r.starter} /></td>
                    <td className="py-4 px-6 text-center font-medium bg-primary/5 border-x border-primary/15 text-on-surface">
                      <Cell value={r.bisnis} strong={r.strong === 'bisnis' || r.strong === 'both'} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Cell value={r.enterprise} strong={r.strong === 'enterprise' || r.strong === 'both'} />
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
