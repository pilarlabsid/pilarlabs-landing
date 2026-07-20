// SEO Configuration for Pilar Labs
export const siteConfig = {
    siteName: 'Pilar Labs',
    siteUrl: 'https://pilarlabs.id',
    defaultTitle: 'Pilar Labs | Jasa Web Development & Digital Agency Jakarta',
    titleTemplate: '%s | Pilar Labs',
    description: 'Pilar Labs – jasa web development profesional di Jakarta. Kami membangun website, aplikasi web, dan sistem digital yang cepat, aman, dan scalable untuk bisnis Anda.',
    keywords: [
        'jasa web development Jakarta',
        'software house Indonesia',
        'digital agency Jakarta',
        'pembuatan website profesional',
        'React TypeScript developer',
        'custom web application',
        'Pilar Labs',
    ],
    author: 'Pilar Labs',
    siteLanguage: 'id-ID',
    ogLanguage: 'id_ID',

    // Social
    social: {
        email: 'hello@pilarlabs.id',
        phone: '+6281226027578',
        whatsapp: 'https://wa.me/6281226027578',
        linkedin: 'https://www.linkedin.com/in/ujangsprr/',
        instagram: 'https://instagram.com/pilarlabs',
    },

    // Company Info
    company: {
        name: 'Pilar Labs',
        legalName: 'PT Pilar Inovasi Teknologi',
        foundedYear: '2024',
        address: {
            street: 'Jakarta Selatan',
            city: 'Jakarta',
            region: 'DKI Jakarta',
            postalCode: '12160',
            country: 'Indonesia',
        },
    },

    // Default OG Image
    defaultOgImage: '/og-image.jpg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
}

// Page-specific SEO configurations
export const pageSEO = {
    home: {
        title: 'Jasa Web Development & Digital Agency Profesional Jakarta',
        description: 'Pilar Labs – partner web development Jakarta. Kami bangun website, aplikasi web, dan sistem digital yang cepat, aman, dan scalable. Konsultasi gratis.',
        keywords: [
            'jasa web development Jakarta',
            'software house Jakarta',
            'pembuatan website bisnis',
            'digital agency Indonesia',
            'jasa pembuatan aplikasi web',
            'React developer Jakarta',
            'landing page profesional',
        ],
        ogImage: '/og-image.jpg',
        pathname: '/',
    },
    about: {
        title: 'Tentang Pilar Labs – Tim Web Developer Jakarta',
        description: 'Pilar Labs adalah tim web developer profesional di Jakarta. Kami fokus pada kualitas kode, arsitektur yang kokoh, dan kerja sama jangka panjang bersama bisnis Anda.',
        keywords: [
            'tentang Pilar Labs',
            'tim web developer Jakarta',
            'software house terpercaya Indonesia',
            'digital agency Jakarta Selatan',
            'profil perusahaan teknologi',
            'developer React TypeScript Indonesia',
        ],
        pathname: '/about',
    },
    services: {
        title: 'Layanan Web Development – Landing Page hingga Aplikasi Custom',
        description: 'Layanan web development Pilar Labs: landing page, company profile, web app, WebGIS, AI integration. Harga transparan, kode berkualitas, hasil nyata.',
        keywords: [
            'jasa landing page Jakarta',
            'jasa company profile website',
            'pembuatan aplikasi web custom',
            'jasa WebGIS Indonesia',
            'integrasi AI website',
            'harga jasa web development',
            'web development Next.js React',
        ],
        pathname: '/services',
    },
    contact: {
        title: 'Hubungi Pilar Labs – Konsultasi Project Digital Gratis',
        description: 'Hubungi Pilar Labs untuk konsultasi project website atau aplikasi digital Anda. Respons cepat via WhatsApp, email, atau form online. Jakarta Selatan.',
        keywords: [
            'kontak Pilar Labs',
            'konsultasi web development gratis',
            'hire web developer Jakarta',
            'order website Jakarta',
            'jasa developer freelance Jakarta',
            'tanya harga website',
        ],
        pathname: '/contact',
    },
    portfolio: {
        title: 'Portofolio Pilar Labs – Proyek Website & Aplikasi Digital',
        description: 'Lihat portofolio proyek Pilar Labs: WebGIS kehutanan, e-commerce, AI customer agent, landing page, dan lebih banyak lagi. Bukti nyata kualitas kami.',
        keywords: [
            'portofolio web developer Jakarta',
            'contoh website buatan Pilar Labs',
            'proyek WebGIS Indonesia',
            'aplikasi AI bisnis Indonesia',
            'studi kasus web development',
            'showcase landing page',
        ],
        pathname: '/portfolio',
    },
    internship: {
        title: 'Program Magang IT – Frontend, Backend, UI/UX, Mobile & DevOps',
        description: 'Buka kesempatan magang 3–6 bulan di Pilar Labs Jakarta. Posisi: Frontend, Backend, Full-Stack, UI/UX, Mobile, Data Analyst, dan DevOps. Daftar sekarang.',
        keywords: [
            'magang IT Jakarta',
            'program magang web developer',
            'lowongan magang frontend developer',
            'magang UI UX designer Jakarta',
            'magang full stack developer Indonesia',
            'internship software engineer Jakarta',
            'magang mahasiswa teknologi informatika',
        ],
        pathname: '/internship',
    },
    privacy: {
        title: 'Kebijakan Privasi – Pilar Labs',
        description: 'Kebijakan privasi Pilar Labs mengenai pengumpulan, penggunaan, dan perlindungan data pribadi pengguna layanan kami.',
        keywords: ['kebijakan privasi Pilar Labs', 'privacy policy', 'perlindungan data'],
        pathname: '/privacy',
        noindex: true,
    },
    terms: {
        title: 'Syarat & Ketentuan – Pilar Labs',
        description: 'Syarat dan ketentuan penggunaan layanan Pilar Labs, mencakup ketentuan proyek, pembayaran, dan hak kekayaan intelektual.',
        keywords: ['syarat ketentuan Pilar Labs', 'terms of service', 'perjanjian layanan'],
        pathname: '/terms',
        noindex: true,
    },
    blog: {
        title: 'Blog – Insights & Tips Web Development',
        description: 'Artikel, tutorial, dan insights seputar web development, best practices, teknologi modern, dan tips membangun produk digital dari tim Pilar Labs.',
        keywords: ['blog web development', 'tips React TypeScript', 'tutorial pemrograman', 'insight digital agency'],
        pathname: '/blog',
    },
}

export type PageKey = keyof typeof pageSEO
