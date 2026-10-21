export const KONTACT_HERO = {
  breadcrumb: [{ label: 'Beranda', to: '/' }, { label: 'Kontak & Konsultasi', current: true }],
  badge: 'Respon Cepat < 15 Menit Jam Kerja • Non-Disclosure Agreement (NDA) Tersedia',
  headline: 'Mari Diskusikan Arsitektur Digital & Proyek Perangkat Lunak Anda',
  subheadline:
    'Ceritakan tantangan bisnis dan visi teknis Anda. Tim Principal Engineer dan UI/UX Solution Architect kami siap memberikan estimasi, rencana arsitektur (RAB), dan konsultasi teknis tanpa komitmen awal.',
  trustHighlights: [
    {
      icon: 'lock',
      filled: true,
      title: 'Garansi Kerahasiaan Ide (NDA)',
      desc: 'Legalitas & privasi 100% terjaga',
    },
    {
      icon: 'description',
      filled: true,
      title: 'Proposal Teknis & RAB dlm 1x24 Jam',
      desc: 'Transparan, terinci & realistis',
    },
    {
      icon: 'terminal',
      filled: true,
      title: 'Senior Engineer (Bukan Sales)',
      desc: 'Diskusi langsung teknis arsitektur',
    },
  ],
}

export const KONTACT_FORM = {
  title: 'Formulir Eksplorasi Proyek',
  icon: 'assignment',
  eta: 'EST. 3 MENIT',
  desc: 'Lengkapi informasi di bawah agar kami dapat mempersiapkan studi teknis awal.',
  successTitle: 'Permintaan Terkirim!',
  successSub: '(Simulasi State Berhasil)',
  successDesc:
    'Tim Senior Engineer kami akan menganalisis kebutuhan Anda dan mengirimkan roadmap teknis dalam kurun waktu 1x24 jam kerja.',
  fields: [
    {
      name: 'name',
      label: 'Nama Lengkap',
      type: 'text',
      placeholder: 'cth. Dimas Arya Suryo',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Perusahaan / Profesional',
      type: 'email',
      placeholder: 'cth. dimas@perusahaan.co.id',
      required: true,
      error: true,
      errorText:
        'Harap masukkan email kerja yang valid (domain perusahaan disarankan).',
    },
    {
      name: 'phone',
      label: 'Nomor WhatsApp / Telepon',
      type: 'tel',
      placeholder: '812-3456-7890',
      required: true,
      prefix: '+62',
    },
    {
      name: 'timeline',
      label: 'Target Waktu Peluncuran / Deadline',
      type: 'text',
      placeholder: 'cth. 4 - 6 Minggu / Q2 2025',
    },
    {
      name: 'service',
      label: 'Layanan yang Dibutuhkan',
      type: 'select',
      required: true,
      options: [
        { label: 'Pilih Kategori Kebutuhan', value: '' },
        { label: 'Aplikasi Web Kustom & SaaS', value: 'saas' },
        { label: 'Company Profile & Portal Korporat', value: 'corporate' },
        { label: 'Toko Online / E-Commerce Berperforma', value: 'ecommerce' },
        { label: 'High-Converting Landing Page', value: 'landing' },
        { label: 'Redesign & Modernisasi Website Lama', value: 'redesign' },
        { label: 'Pemeliharaan Berkala & Keamanan Cloud', value: 'maintenance' },
      ],
    },
    {
      name: 'budget',
      label: 'Estimasi Alokasi Anggaran',
      type: 'select',
      required: true,
      options: [
        { label: 'Pilih Kisaran Anggaran', value: '' },
        { label: '< Rp 10 Juta (Proyek Skala Kecil)', value: 'small' },
        { label: 'Rp 10 - 25 Juta (Paket Bisnis Pro)', value: 'medium' },
        { label: 'Rp 25 - 50 Juta (Aplikasi Web & E-Commerce)', value: 'growth', selected: true },
        { label: '> Rp 50 Juta (Solusi Kustom Enterprise / SaaS)', value: 'enterprise' },
      ],
    },
  ],
  textarea: {
    name: 'description',
    label: 'Deskripsi Kebutuhan & Ekspektasi Fitur',
    placeholder:
      'Jelaskan ringkas mengenai sistem yang ingin dibangun, target pengguna, dan fitur utama...',
    rows: 4,
    required: true,
  },
  upload: {
    label: 'File Brief / Dokumen Spesifikasi Tambahan',
    optional: '(Opsional)',
    text: 'Unggah dokumen brief / RFP (PDF, DOCX maks. 10MB)',
    hint: 'Tarik & lepas dokumen di sini atau telusuri file',
  },
  privacy:
    'Saya menyetujui Kebijakan Privasi dan mengizinkan CIPTA AKSARA TECH menghubungi saya mengenai penawaran ini.',
  submit: 'Kirim Permintaan Konsultasi & RAB',
  tls: '🔒 Data Anda dilindungi oleh enkripsi TLS 1.3 standar keamanan industri.',
}
export const KONTACT_QUICK_ACTION = {
  badge: 'Respon Tercepat',
  avg: 'Avg: ~4 Menit',
  title: 'Butuh Tanggapan Mendesak?',
  desc:
    'Hubungi Principal Engineer kami langsung via WhatsApp untuk diskusi teknis real-time, audit ringkas, atau konsultasi tender.',
  button: 'Chat Langsung via WhatsApp',
  url: 'https://wa.me/6281198765432',
}

export const KONTACT_DETAILS = {
  title: 'Informasi Kontak Resmi',
  icon: 'contact_phone',
  email: {
    label: 'Email Korespondensi',
    primary: 'halo@ciptaaksaratech.id',
    secondary: 'tender@ciptaaksaratech.id',
    secondaryLabel: '(Pengadaan / RFP)',
  },
  phone: {
    label: 'Telepon Kantor & Hotline',
    hunting: '+62 21 5088 9200 (Hunting)',
    wa: '+62 811 9876 5432 (WhatsApp Dedicated)',
  },
  hours: {
    label: 'Jam Operasional Tim',
    weekdays: ['Senin - Jumat:', '09:00 - 18:00 WIB'],
    saturday: ['Sabtu:', '10:00 - 15:00 WIB'],
    emergency: 'Emergency Server: 24/7 Monitoring Klien SLA',
  },
}

export const KONTACT_OFFICE = {
  title: 'Kantor Pusat Operasional',
  icon: 'apartment',
  building: 'Cyber 2 Tower, Lantai 18',
  address:
    'Jl. H. R. Rasuna Said Blok X-5 No. 13, Kuningan, Jakarta Selatan, DKI Jakarta 12950',
  transit:
    '5 menit jalan kaki dari Stasiun LRT Rasuna Said',
  mapLabel: 'CIPTA AKSARA TECH HQ - Cyber 2 Tower',
  mapCta: 'Buka Petunjuk Arah di Google Maps ↗',
  mapImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDbS2oB4X0sWfvGUxGh1QpmmAtP9Sk1hvs8RaHEM33HnpReXL7MQcfRcTc4uyQpFHAhtTluBM9nKfiHBtYZY7w9j3KVsbTSA2qgzVBJtmPOwmWpsC9DAeyuaZs36mPItY2bWJn3vLgkSSnMqiw_-9lIXte5mBIlPYgKdGPfrqHw0w5mFZnO0oAhe8FGu94TinqFf1uA0Rry0NpefKfmuwI5_XlVO11zUd9yasP7xil7JTsmeEXD5l2pXw',
}

export const KONTACT_COMMITMENT = [
  {
    icon: 'verified_user',
    filled: true,
    big: '100% NDA',
    small: 'Kerahasiaan Hukum',
  },
  {
    icon: 'speed',
    filled: true,
    big: '< 15 Menit',
    small: 'SLA Respon Kilat',
  },
  {
    icon: 'lock_open',
    filled: true,
    big: 'Zero Lock-in',
    small: 'Source Code Milik Anda',
  },
]

export const KONTACT_FAQ = [
  {
    q: 'Apakah sesi konsultasi 30 menit ini benar-benar gratis?',
    a:
      'Ya, 100% gratis tanpa ikatan kontrak komersial. Kami percaya diskusi awal yang solid membantu mengidentifikasi kelayakan arsitektur, pemilihan teknologi modern (React, Next.js, Node.js, Go), serta efisiensi anggaran perusahaan Anda.',
  },
  {
    q: 'Berapa lama kami menerima estimasi biaya dan proposal?',
    a:
      'Estimasi awal diberikan dalam 1x24 jam kerja setelah formulir diverifikasi dan parameter fitur telah dipahami oleh tim Technical Architect kami. Untuk kebutuhan RFP korporasi berskala enterprise, kami dapat menjadwalkan presentasi blueprint dalam 2-3 hari kerja.',
  },
  {
    q: 'Apakah data dan ide proyek kami dilindungi kerahasiaannya?',
    a:
      'Semua dokumen brief, sketsa arsitektur, dan diskusi verbal dilindungi NDA (Non-Disclosure Agreement) standar legal Indonesia. Kami dapat menandatangani dokumen NDA mutual perusahaan Anda sebelum detail spesifikasi teknis dibuka.',
  },
]