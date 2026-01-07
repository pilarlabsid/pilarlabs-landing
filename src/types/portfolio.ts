// Portfolio project types
export type ProjectCategory = 'web-app' | 'landing-page' | 'mobile-app' | 'all'

export interface Portfolio {
    id: string
    title: string
    client: string
    industry: string
    year: string
    description: string
    challenge: string
    solution: string
    results: string[] | string
    coverImage: string
    images: string[]
    technologies: string[]
    featured: boolean
    category: Exclude<ProjectCategory, 'all'>
    url?: string
}
