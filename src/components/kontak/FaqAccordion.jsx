import { Icon } from '../ui.jsx'
import { KONTACT_FAQ } from '../../data/kontak.js'

export default function FaqAccordion() {
  return (
    <div className="mt-16 pt-12 border-t border-outline-variant/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-headline-md font-headline-md text-on-surface font-bold">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">
            Transparansi proses komunikasi dan komitmen teknis sebelum proyek dimulai.
          </p>
        </div>
        <div className="space-y-4">
          {KONTACT_FAQ.map((faq, i) => (
            <details key={i} className="group bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 open:bg-surface-container transition-all duration-200">
              <summary className="flex justify-between items-center cursor-pointer list-none text-label-lg font-label-lg text-on-surface font-semibold group-hover:text-primary">
                <span className="flex items-center gap-3">
                  <Icon name="help" className="text-primary text-[20px]" />
                  {faq.q}
                </span>
                <Icon name="keyboard_arrow_down" className="text-on-surface-variant transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-3.5 pl-8 text-body-md font-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}