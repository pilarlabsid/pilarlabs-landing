import { Portfolio } from '@/types/portfolio'

export const portfolioData: Portfolio[] = [
    {
        id: 'webgis-land-monitoring',
        title: 'caseStudies.projects.webgisLand.title',
        client: 'Instansi Kehutanan',
        industry: 'caseStudies.projects.webgisLand.industry',
        year: '2026',
        description: 'caseStudies.projects.webgisLand.description',
        challenge: 'caseStudies.projects.webgisLand.challenge',
        solution: 'caseStudies.projects.webgisLand.solution',
        results: 'caseStudies.projects.webgisLand.results',
        coverImage: '/images/projects/webgis-cover.png',
        images: [
            '/images/projects/webgis-1.jpg',
            '/images/projects/webgis-2.jpg'
        ],
        technologies: ['PostgreSQL', 'PostGIS', 'Leaflet', 'React'],
        featured: true,
        category: 'gis',
        url: '#'
    },
    {
        id: 'web-portal-ecommerce',
        title: 'caseStudies.projects.portalEcommerce.title',
        client: 'Mitra E-Commerce',
        industry: 'caseStudies.projects.portalEcommerce.industry',
        year: '2026',
        description: 'caseStudies.projects.portalEcommerce.description',
        challenge: 'caseStudies.projects.portalEcommerce.challenge',
        solution: 'caseStudies.projects.portalEcommerce.solution',
        results: 'caseStudies.projects.portalEcommerce.results',
        coverImage: '/images/projects/ecommerce-cover.png',
        images: [
            '/images/projects/ecommerce-1.jpg',
            '/images/projects/ecommerce-2.jpg'
        ],
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
        featured: true,
        category: 'web-app',
        url: '#'
    },
    {
        id: 'ai-customer-agent-ocr',
        title: 'caseStudies.projects.aiCustomerAgent.title',
        client: 'Mitra Otomasi',
        industry: 'caseStudies.projects.aiCustomerAgent.industry',
        year: '2026',
        description: 'caseStudies.projects.aiCustomerAgent.description',
        challenge: 'caseStudies.projects.aiCustomerAgent.challenge',
        solution: 'caseStudies.projects.aiCustomerAgent.solution',
        results: 'caseStudies.projects.aiCustomerAgent.results',
        coverImage: '/images/projects/ai-cover.png',
        images: [
            '/images/projects/ai-1.jpg',
            '/images/projects/ai-2.jpg'
        ],
        technologies: ['LangChain', 'FastAPI', 'Python', 'LLM'],
        featured: true,
        category: 'ai',
        url: '#'
    },
    {
        id: 'nurasa-store',
        title: 'caseStudies.projects.nurasaStore.title',
        client: 'Nurasa',
        industry: 'caseStudies.projects.nurasaStore.industry',
        year: '2025',
        description: 'caseStudies.projects.nurasaStore.description',
        challenge: 'caseStudies.projects.nurasaStore.challenge',
        solution: 'caseStudies.projects.nurasaStore.solution',
        results: 'caseStudies.projects.nurasaStore.results',
        coverImage: '/images/projects/nurasa-cover.jpg',
        images: [
            '/images/projects/nurasa-1.jpg',
            '/images/projects/nurasa-2.jpg'
        ],
        technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
        featured: false,
        category: 'landing-page',
        url: 'https://nurasa.store'
    },
    {
        id: 'yogi-busana',
        title: 'caseStudies.projects.yogiBusana.title',
        client: 'Yogi Busana',
        industry: 'caseStudies.projects.yogiBusana.industry',
        year: '2024',
        description: 'caseStudies.projects.yogiBusana.description',
        challenge: 'caseStudies.projects.yogiBusana.challenge',
        solution: 'caseStudies.projects.yogiBusana.solution',
        results: 'caseStudies.projects.yogiBusana.results',
        coverImage: '/images/projects/yogibusana-cover.jpg',
        images: [
            '/images/projects/yogibusana-1.jpg',
            '/images/projects/yogibusana-2.jpg'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'i18n'],
        featured: false,
        category: 'landing-page',
        url: 'https://yogibusana.com'
    }
]
