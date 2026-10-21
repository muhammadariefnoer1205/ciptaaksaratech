import { useState } from 'react'
import { Icon } from '../ui.jsx'
import { KONTACT_FORM } from '../../data/kontak.js'

export default function ProjectInquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('dimas@perusahaan')
  const emailValid = email.includes('@') && email.includes('.')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mb-6 p-4 rounded-xl bg-surface-container-low border border-primary/40 flex items-start gap-3 bg-gradient-to-r from-surface-container-low to-surface-container">
        <div className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center shrink-0 mt-0.5">
          <Icon name="check" className="text-on-primary text-[18px]" filled={true} />
        </div>
        <div className="flex-1">
          <p className="text-label-md font-label-md text-primary font-semibold">
            {KONTACT_FORM.successTitle}{' '}
            <span className="text-primary font-normal">{KONTACT_FORM.successSub}</span>
          </p>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5 leading-snug">
            {KONTACT_FORM.successDesc}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-3 inline-flex items-center gap-2 text-primary font-label-md hover:text-primary-container transition-colors"
          >
            Kirim Lagi
            <Icon name="refresh" className="text-[16px]" />
          </button>
        </div>
      </div>
    )
  }

  const { fields, textarea, upload, privacy, submit, tls } = KONTACT_FORM
  return (
    <section className="lg:col-span-7 custom-glass border border-outline-variant/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative" id="form-konsultasi">
      <div className="border-b border-outline-variant/30 pb-5 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-headline-sm font-headline-sm text-on-surface flex items-center gap-2">
            <Icon name="assignment" className="text-primary text-[22px]" />
            {KONTACT_FORM.title}
          </h2>
          <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-[11px] font-label-sm text-secondary">
            {KONTACT_FORM.eta}
          </span>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5">{KONTACT_FORM.desc}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Nama & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="full-name">
              {fields[0].label} <span className="text-primary">*</span>
            </label>
            <input
              id="full-name"
              name="name"
              type="text"
              placeholder={fields[0].placeholder}
              required
              className="w-full bg-surface-container-lowest/80 border border-outline-variant/40 rounded-xl px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all duration-200"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-label-md font-label-md text-on-surface" htmlFor="work-email">
                {fields[1].label} <span className="text-primary">*</span>
              </label>
            </div>
            <input
              id="work-email"
              name="email"
              type="email"
              placeholder={fields[1].placeholder}
              defaultValue={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-surface-container-lowest/80 border ${
                emailValid ? 'border-outline-variant/40' : 'border-error/60'
              } rounded-xl px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-${emailValid ? 'primary-container' : 'error'} focus:ring-2 focus:ring-${emailValid ? 'primary-container/20' : 'error/20'} transition-all duration-200`}
            />
            <div className="flex items-center gap-1.5 mt-1.5 text-error text-[12px] font-body-sm">
              <Icon name="error" className="text-[15px]" />
              <span>{fields[1].errorText}</span>
            </div>
          </div>
        </div>
        {/* Row 2: WhatsApp & Target Waktu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="whatsapp">
              {fields[2].label} <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-body-md font-body-md text-on-surface-variant">
                {fields[2].prefix}
              </span>
              <input
                id="whatsapp"
                name="phone"
                type="tel"
                placeholder={fields[2].placeholder}
                required
                className="w-full pl-14 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-xl px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all duration-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="timeline">
              {fields[3].label}
            </label>
            <input
              id="timeline"
              name="timeline"
              type="text"
              placeholder={fields[3].placeholder}
              className="w-full bg-surface-container-lowest/80 border border-outline-variant/40 rounded-xl px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all duration-200"
            />
          </div>
        </div>
        {/* Row 3: Dropdowns Layanan & Estimasi Anggaran */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="service-category">
              {fields[4].label} <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <select
                id="service-category"
                name="service"
                className="w-full appearance-none bg-surface-container-lowest/80 border border-outline-variant/40 rounded-xl px-4 py-3 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 pr-10 transition-all duration-200"
              >
                {fields[4].options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant pointer-events-none text-[20px]">
                expand_more
              </span>
            </div>
          </div>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="budget">
              {fields[5].label} <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <select
                id="budget"
                name="budget"
                defaultValue="growth"
                className="w-full appearance-none bg-surface-container-lowest/80 border border-outline-variant/40 rounded-xl px-4 py-3 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 pr-10 transition-all duration-200"
              >
                {fields[5].options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant pointer-events-none text-[20px]">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Deskripsi Kebutuhan */}
        <div>
          <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="project-desc">
            {textarea.label} <span className="text-primary">*</span>
          </label>
          <textarea
            id="project-desc"
            name="description"
            placeholder={textarea.placeholder}
            rows={textarea.rows}
            className="w-full bg-surface-container-lowest/80 border border-outline-variant/40 rounded-xl px-4 py-3 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all duration-200"
          />
        </div>
        {/* File Brief / RFP Upload Dropzone */}
        <div>
          <label className="block text-label-md font-label-md text-on-surface mb-2">
            {upload.label} <span className="text-on-surface-variant font-normal">{upload.optional}</span>
          </label>
          <div className="border-2 border-dashed border-outline-variant/50 hover:border-primary/50 transition-colors rounded-xl p-5 text-center bg-surface-container-lowest/40 cursor-pointer group">
            <Icon name="cloud_upload" className="text-outline group-hover:text-primary transition-colors text-[28px] mb-1 block" />
            <p className="text-label-md font-label-md text-on-surface group-hover:text-primary transition-colors">
              {upload.text}
            </p>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-1" dangerouslySetInnerHTML={{ __html: upload.hint }} />
          </div>
        </div>

        {/* Checkbox Privacy Policy */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input type="checkbox" defaultChecked className="mt-1 rounded border-outline-variant/50 bg-surface-container-lowest text-primary-container focus:ring-primary-container/30 focus:ring-offset-background w-4 h-4" />
            <span className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">{privacy}</span>
          </label>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-3">
          <button type="submit" className="w-full bg-primary-container text-[#0F172A] font-label-lg font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(183,216,148,0.3)] hover:shadow-[0_0_32px_rgba(183,216,148,0.5)] active:scale-[0.98] flex items-center justify-center gap-3 tracking-wide">
            <span>{submit}</span>
            <Icon name="send" className="text-[20px]" filled={true} />
          </button>
        </div>
        <p className="text-center text-[12px] font-body-sm text-on-surface-variant pt-1">
          {tls}
        </p>
      </form>
    </section>
  )
}