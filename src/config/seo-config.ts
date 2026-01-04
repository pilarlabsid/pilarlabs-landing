// SEO Configuration for Pilar Labs
export const siteConfig = {
    siteName: 'Pilar Labs',
    siteUrl: 'https://pilarlabs.id',
    defaultTitle: 'Pilar Labs | Digital Foundation Partner',
    titleTemplate: '%s | Pilar Labs',
    description: 'Partner digital development yang membangun fondasi web yang kuat dan scalable untuk bisnis Anda. Arsitektur modern, kode berkualitas, pertumbuhan berkelanjutan.',
    keywords: ['web development', 'digital agency', 'React development', 'TypeScript', 'scalable architecture', 'custom web application', 'Jakarta', 'Indonesia'],
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
        legalName: 'PT Pilar Digital Indonesia',
        foundedYear: '2024',
        address: {
            street: 'Jakarta Selatan',
            city: 'Jakarta',
            region: 'DKI Jakarta',
            postalCode: '12345',
            country: 'Indonesia',
        },
    },

    // Default OG Image
    defaultOgImage: '/og-image.jpg',
}

// Page-specific SEO configurations
export const pageSEO = {
    home: {
        title: 'Bangun Fondasi Digital yang Kokoh',
        description: 'Partner digital development yang membangun fondasi web yang kuat dan scalable untuk bisnis Anda. Arsitektur modern, kode berkualitas, pertumbuhan berkelanjutan.',
        keywords: ['web development Jakarta', 'digital foundation', 'React TypeScript', 'scalable web app', 'custom development', 'software house Jakarta'],
        ogImage: '/og-home.jpg',
    },
    about: {
        title: 'Tentang Kami - Filosofi & Tim',
        description: 'Kenali filosofi kami dalam membangun fondasi digital yang kokoh. Tim development berpengalaman yang fokus pada kualitas, presisi, dan pertumbuhan jangka panjang.',
        keywords: ['about pilar labs', 'software development team', 'digital agency Jakarta', 'web development philosophy'],
    },
    services: {
        title: 'Layanan Development - Paket & Solusi Custom',
        description: 'Paket development mulai dari landing page, company profile, hingga full-stack web application. Solusi custom untuk kebutuhan digital bisnis Anda.',
        keywords: ['web development services', 'landing page', 'company profile website', 'custom web application', 'React development', 'TypeScript development'],
    },
    contact: {
        title: 'Hubungi Kami - Konsultasi Gratis',
        description: 'Hubungi tim Pilar Labs untuk konsultasi project digital Anda. Email, WhatsApp, atau form kontak. Lokasi: Jakarta, Indonesia.',
        keywords: ['contact pilar labs', 'web development consultation', 'Jakarta web developer', 'hire developer Indonesia'],
    },
    portfolio: {
        title: 'Portfolio',
        description: 'Lihat portfolio project dari klien Pilar Labs. Web development, landing pages, dan solusi digital yang telah kami bangun.',
        keywords: ['portfolio', 'web development projects', 'client projects', 'project showcase'],
    },
    blog: {
        title: 'Blog - Insights & Tips Development',
        description: 'Artikel, tutorial, dan insights tentang web development, best practices, teknologi modern, dan tips membangun produk digital.',
        keywords: ['web development blog', 'programming tutorials', 'React tips', 'TypeScript guide', 'development best practices'],
    },
    privacy: {
        title: 'Kebijakan Privasi',
        description: 'Kebijakan privasi Pilar Labs tentang pengumpulan, penggunaan, dan perlindungan data pribadi pengguna website kami.',
        keywords: ['privacy policy', 'data protection', 'GDPR compliance'],
    },
    terms: {
        title: 'Syarat & Ketentuan',
        description: 'Syarat dan ketentuan penggunaan layanan Pilar Labs. Ketentuan project development, pembayaran, dan hak kekayaan intelektual.',
        keywords: ['terms of service', 'terms and conditions', 'service agreement'],
    },
}

export type PageKey = keyof typeof pageSEO
