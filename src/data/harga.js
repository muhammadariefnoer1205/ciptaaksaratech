export const TRUST_BADGES = [
  { icon: 'code', label: '100% Source Code Milik Anda' },
  { icon: 'verified_user', label: 'Garansi Bug 60 Hari' },
  { icon: 'payments', label: 'Bisa Pembayaran Bertahap (Termin 3x)' },
  { icon: 'speed', label: 'SLA Uptime 99.9%' }
]

export const PRICE_CARDS = [
  {
    id: 'starter',
    name: 'Starter / Basic',
    tagline: 'Ideal untuk UMKM & Profil Bisnis Baru',
    icon: 'rocket_launch',
    featured: false,
    cta: 'Pilih Paket Starter',
    eta: 'Estimasi selesai: 7 - 10 Hari Kerja',
    onetime: { price: 'Rp 3.500.000', sub: 'Satu kali bayar / One-time' },
    retainer: { price: 'Rp 1.250.000', sub: 'per bulan (Maintenance & Backup)' },
    features: [
      'Hingga 5 Halaman Responsif (Beranda, Tentang, Layanan, Galeri/Porto, Kontak)',
      'Desain UI/UX Bespoke Berbasis Riset (Bukan template murah)',
      'Kecepatan Loading < 1.5s (Google Core Web Vitals Grade A)',
      'Integrasi WhatsApp Click-to-Chat & Google Maps',
      'Domain .com & Cloud Hosting Premium 1 Tahun Termasuk',
      'Setup Google Analytics 4 & Google Search Console',
      'Garansi Bug & Kendala Teknis 30 Hari'
    ]
  },
  {
    id: 'bisnis',
    name: 'Bisnis Pro',
    tagline: 'Paling Diminati Startup & Perusahaan Berkembang',
    icon: 'trending_up',
    featured: true,
    badge: 'Paling Populer & Best ROI',
    cta: 'Pilih Paket Bisnis Pro',
    eta: 'Estimasi selesai: 2 - 3 Minggu Kerja',
    onetime: { price: 'Rp 7.500.000', sub: 'Satu kali bayar / One-time' },
    retainer: { price: 'Rp 2.800.000', sub: 'per bulan (DevOps & Sprint Update)' },
    features: [
      'Semua fitur pada Paket Starter, ditambah:',
      'Hingga 12 Halaman + Blog / Berita Dinamis',
      'Sistem CMS Mudah Kelola (Sanity / Strapi / Custom Admin)',
      'Integrasi Multi-Payment Gateway (QRIS, VA Bank, Kartu Kredit via Midtrans/Xendit)',
      'Kalkulator Ongkir Otomatis RajaOngkir API (Khusus E-commerce)',
      'Optimasi SEO On-Page Mendalam & Rich Snippets Schema',
      'Desain Interaktif & Animasi Transisi Halus (Framer Motion feel)',
      'Garansi Penuh 60 Hari & Grup WhatsApp Prioritas'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise / Custom',
    tagline: 'Solusi Kompleks, Portal Korporat & SaaS Web App',
    icon: 'corporate_fare',
    featured: false,
    cta: 'Konsultasi Paket Enterprise',
    eta: 'Estimasi: 4 - 8 Minggu (Sprint Terjadwal)',
    onetime: { price: 'Mulai Rp 15.000.000+', sub: 'Fleksibel sesuai scope' },
    retainer: { price: 'Mulai Rp 6.500.000+', sub: 'per bulan (Dedicated SLA & Tech Support)' },
    features: [
      'Halaman & Modul Kustom Tanpa Batas',
      'Arsitektur Microservices / Headless API Kustom (Next.js 14, Go/Node.js, PostgreSQL)',
      'Dashboard Manajemen Data Kompleks & Role-Based Access Control (RBAC)',
      'Integrasi Multi-API Pihak Ketiga (ERP, CRM, Logistik, Akuntansi)',
      'Standar Keamanan Enterprise, Audit Enkripsi & DDoS Shield',
      'Dedicated Technical Lead & Manajer Proyek Khusus',
      'Garansi Bug 12 Bulan & Dukungan SLA 99.9%'
    ]
  }
]
