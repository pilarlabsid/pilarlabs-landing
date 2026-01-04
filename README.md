# Pilar Labs Landing Page

Project ini adalah landing page modern untuk **Pilar Labs**, dibangun menggunakan teknologi web terkini untuk performa tinggi dan pengalaman pengguna yang seamless.

## 🚀 Anggota Tim & Teknologi

Project ini dibangun dengan stack modern:

*   **Core:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Internationalization:** [i18next](https://www.i18next.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **SEO:** [React Helmet Async](https://github.com/staylor/react-helmet-async)

## ✨ Fitur Utama

*   **Desain Responsif & Premium:** Tampilan "Calm Premium" yang aesthetic dan konsisten di berbagai ukuran layar.
*   **Dark Mode Support:** Mendukung tema gelap dan terang yang dapat disesuaikan.
*   **Multibahasa (i18n):** Mendukung Bahasa Indonesia dan Bahasa Inggris.
*   **Sistem Komponen:** Menggunakan komponen UI yang reusable dan terstruktur (UI Components & Sections).
*   **Smooth Animations:** Transisi halaman dan elemen interaktif yang halus.

## 📂 Struktur Project

```bash
src/
├── components/     # Komponen UI reusable (Button, Navbar, Footer, dll)
├── config/         # Konfigurasi project
├── data/           # Data statis
├── i18n/           # Konfigurasi i18n
├── lib/            # Utility functions (cn, clsx helpers)
├── locales/        # File terjemahan (id, en)
├── pages/          # Halaman utama (Home, About, Services, Contact)
├── types/          # Definisi TypeScript types
└── App.tsx         # Root component & Routing setup
```

## 🛠️ Cara Menjalankan Project

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda:

### 1. Clone & Install Dependencies

Pastikan Anda sudah menginstall [Node.js](https://nodejs.org/) di komputer Anda.

```bash
# Install dependencies
npm install
```

### 2. Jalankan Development Server

Untuk memulai mode pengembangan:

```bash
npm run dev
```

Aplikasi dapat diakses di `http://localhost:5173`.

### 3. Build untuk Production

Untuk membuat build yang siap deploy:

```bash
npm run build
```

Hasil build akan berada di folder `dist`.

### 4. Linting

Untuk memeriksa kualitas kode:

```bash
npm run lint
```

## 📝 Lisensi

[Pilar Labs](https://pilarlabs.id) © 2026. All Rights Reserved.
