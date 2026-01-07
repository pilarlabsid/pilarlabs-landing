import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { pageSEO } from '@/config/seo-config'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/layout/Container'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { CategoryFilter } from '@/components/ui/CategoryFilter'
import { portfolioData } from '@/data/portfolio'
import { ProjectCategory } from '@/types/portfolio'
import { motion, AnimatePresence } from 'framer-motion'

export function Portfolio() {
    const { t } = useTranslation()
    const seo = pageSEO.portfolio
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

    // Filter projects based on active category
    const filteredProjects = activeCategory === 'all'
        ? portfolioData
        : portfolioData.filter(project => project.category === activeCategory)

    // Separate featured projects
    const featuredProjects = filteredProjects.filter(p => p.featured)
    const regularProjects = filteredProjects.filter(p => !p.featured)

    return (
        <>
            <SEO
                title={t('seo.portfolio')}
                description={seo.description}
                keywords={seo.keywords}
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

                    {/* Featured Projects */}
                    {featuredProjects.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-sm font-semibold text-calm/60 uppercase tracking-wider mb-6">
                                {t('caseStudies.labels.featured')}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <AnimatePresence mode="wait">
                                    {featuredProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            index={index}
                                        />
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    )}

                    {/* Regular Projects */}
                    {regularProjects.length > 0 && (
                        <div>
                            {featuredProjects.length > 0 && (
                                <h2 className="text-sm font-semibold text-calm/60 uppercase tracking-wider mb-6">
                                    {t('caseStudies.labels.all')}
                                </h2>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <AnimatePresence mode="wait">
                                    {regularProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            index={index}
                                        />
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
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
        </>
    )
}
