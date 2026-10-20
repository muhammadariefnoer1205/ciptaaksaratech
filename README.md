# Cipta Aksara Tech — Company Profile (React + Vite + Tailwind)

Homepage agensi jasa pembuatan website & aplikasi web, dikonversi dari desain `desain/cipta_aksara_tech_homepage/code.html` ke React + Vite + Tailwind CSS.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output ke dist/
npm run preview  # pratinjau hasil build
```

## Struktur

```
index.html
vite.config.js
tailwind.config.js   # token warna + font dari desain asli
postcss.config.js
src/
  main.jsx
  index.css
  App.jsx
  data/
    site.js       # nav, klien, link WA, gambar
    services.js   # layanan, keunggulan, proses
    pricing.js    # paket harga
    social.js     # testimoni, FAQ
  components/
    ui.jsx, Navbar.jsx, Hero.jsx, ClientStrip.jsx,
    Services.jsx, WhyUs.jsx, Portfolio.jsx, Process.jsx,
    Pricing.jsx, Testimonials.jsx, Faq.jsx,
    CtaBanner.jsx, Footer.jsx, FloatingWa.jsx
```

## Routing

- `/` — Homepage (semua section lama)
- `/layanan` — Halaman Layanan detail (hero + breadcrumb + 6 layanan selang-seling + garansi + CTA)

Navigasi memakai `react-router-dom`. Menu **Layanan** membuka `/layanan`; menu section lain (Beranda, Portofolio, Paket Harga, Tentang, Kontak) kembali ke `/` lalu smooth-scroll ke section terkait.


1. Sticky Navbar + mobile drawer
2. Hero + badge, dual CTA, trust badges, mockup + floating chips
3. Strip logo klien
4. Layanan (6 kartu)
5. Keunggulan / Tentang + kartu metrik kualitas
6. Portofolio bento grid
7. Proses kerja 5 langkah
8. Paket harga (Starter / Bisnis Pro / Enterprise)
9. Testimoni (3 kartu)
10. FAQ accordion
11. CTA banner + Footer + tombol WhatsApp mengambang (6281234567890)

Font: Plus Jakarta Sans + Inter. Ikon: Material Symbols Outlined.
