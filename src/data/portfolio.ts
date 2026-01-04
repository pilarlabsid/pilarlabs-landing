import { Portfolio } from '@/types/portfolio'

export const portfolioData: Portfolio[] = [
    {
        id: 'nurasa-store',
        title: 'Nurasa - Landing Page Jajanan Kering Premium',
        client: 'Nurasa',
        industry: 'E-Commerce / Food & Beverage',
        year: '2025',
        description: 'Landing page modern untuk brand jajanan kering premium Nusantara dengan fokus pada brand storytelling dan konversi pemesanan via WhatsApp',
        challenge: 'Membangun brand presence digital dari nol dengan budget terbatas dan perlu launch cepat untuk mulai menerima pesanan online',
        solution: 'Landing page single-page yang fokus pada storytelling brand, product showcase, dan WhatsApp integration untuk kemudahan pemesanan. Desain warm & premium dengan aesthetic yang mencerminkan cerita di setiap rasa',
        results: [
            'Launch dalam 2 minggu dari konsep ke production',
            'WhatsApp integration untuk direct ordering',
            'Mobile-first responsive design',
            'Trust badges untuk kredibilitas (Bahan Berkualitas, Higienis & Aman)',
            'Clean navigation dan smooth scrolling UX'
        ],
        coverImage: '/images/projects/nurasa-cover.jpg',
        images: [
            '/images/projects/nurasa-1.jpg',
            '/images/projects/nurasa-2.jpg'
        ],
        technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
        featured: true,
        category: 'landing-page',
        url: 'https://nurasa.store'
    },
    {
        id: 'yogi-busana',
        title: 'Yogi Busana - Rental Pakaian Adat Bali',
        client: 'Yogi Busana',
        industry: 'Tourism / Cultural Services',
        year: '2024',
        description: 'Website bilingual (English/Indonesian) untuk layanan rental pakaian tradisional Bali, melayani wisatawan domestik dan internasional',
        challenge: 'Menjangkau market internasional sekaligus lokal dengan komunikasi yang jelas tentang layanan rental pakaian adat untuk acara keagamaan dan budaya di Bali',
        solution: 'Website dengan multi-language support (EN/ID), clean design yang mencerminkan budaya Bali, dan informasi lengkap tentang layanan rental. Focus pada user experience untuk wisatawan yang butuh pakaian adat',
        results: [
            'Bilingual support (English & Indonesian)',
            'Cultural branding yang authentic',
            'Clean dan easy navigation',
            'Mobile responsive untuk wisatawan on-the-go',
            'Contact integration untuk booking inquiry'
        ],
        coverImage: '/images/projects/yogibusana-cover.jpg',
        images: [
            '/images/projects/yogibusana-1.jpg',
            '/images/projects/yogibusana-2.jpg'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'i18n'],
        featured: true,
        category: 'landing-page',
        url: 'https://yogibusana.com'
    }
]
