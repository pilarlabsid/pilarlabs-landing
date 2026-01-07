import { Portfolio } from '@/types/portfolio'

export const portfolioData: Portfolio[] = [
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
        featured: true,
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
        featured: true,
        category: 'landing-page',
        url: 'https://yogibusana.com'
    }
]
