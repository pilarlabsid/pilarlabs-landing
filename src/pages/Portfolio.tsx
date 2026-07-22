import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/layout/Container'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ProjectModal } from '@/components/ui/ProjectModal'
import { CategoryFilter } from '@/components/ui/CategoryFilter'
import { portfolioData } from '@/data/portfolio'
import { ProjectCategory, Portfolio as PortfolioType } from '@/types/portfolio'
import { motion, AnimatePresence } from 'framer-motion'

export function Portfolio() {
    const { t } = useTranslation(['portfolio', 'seo'])
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
    const [selectedProject, setSelectedProject] = useState<PortfolioType | null>(null)

    const displayedProjects = (() => {
        if (activeCategory !== 'all') {
            // When a specific category is selected, show ALL projects in that category
            return portfolioData.filter(p => p.category === activeCategory)
        }

        // When "all" is selected, show only the best (featured) project per category
        const seen = new Set<string>()
        return portfolioData.filter(p => {
            if (p.featured && !seen.has(p.category)) {
                seen.add(p.category)
                return true
            }
            return false
        })
    })()

    return (
        <>
            <SEO
                title={t('portfolio.title', { ns: 'seo' })}
                description={t('portfolio.description', { ns: 'seo' })}
                keywords={t('portfolio.keywords', { ns: 'seo', returnObjects: true }) as string[]}
                pathname="/portfolio"
            />
            <PageHeader
                title={t('caseStudies.pageHeader.title')}
                description={t('caseStudies.pageHeader.description')}
                badge={t('caseStudies.pageHeader.badge')}
            />

            <section className="py-16">
                <Container>
                    {/* Category Filter */}
                    <CategoryFilter
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />

                    {/* Projects Grid */}
                    {displayedProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence mode="wait">
                                {displayedProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        onClick={setSelectedProject}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <h3 className="text-xl font-semibold text-calm mb-2">
                                {t('caseStudies.empty.title')}
                            </h3>
                            <p className="text-calm/60">
                                {t('caseStudies.empty.description')}
                            </p>
                        </motion.div>
                    )}
                </Container>
            </section>

            {/* Project Details Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    )
}
