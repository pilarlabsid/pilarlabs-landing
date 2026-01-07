import { motion } from 'framer-motion'
import { Portfolio } from '@/types/portfolio'
import { useTranslation } from 'react-i18next'

interface ProjectCardProps {
    project: Portfolio
    index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const { t } = useTranslation()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-2xl bg-foundation border border-structural/10 hover:border-precision/30 transition-all duration-300">
                {/* Cover Image */}
                <div className="relative h-64 overflow-hidden bg-structural/5">
                    {/* Actual cover image */}
                    <img
                        src={project.coverImage}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foundation/90" />
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 text-xs font-medium bg-precision/10 text-precision rounded">
                                {t(`caseStudies.filters.${project.category === 'web-app' ? 'webApp' : project.category === 'landing-page' ? 'landingPage' : 'mobileApp'}`)}
                            </span>
                            {project.featured && (
                                <span className="px-2 py-1 text-xs font-medium bg-energy/10 text-energy rounded">
                                    {t('caseStudies.labels.featuredTag')}
                                </span>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-calm mb-1">
                            {t(project.title)}
                        </h3>
                        <p className="text-sm text-calm/60">
                            {project.client} • {project.year}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-sm text-calm/70 mb-4 line-clamp-2">
                        {t(project.description)}
                    </p>

                    {/* Results */}
                    <div className="mb-4">
                        <h4 className="text-xs font-semibold text-calm/60 mb-2 uppercase">
                            {t('caseStudies.labels.results')}
                        </h4>
                        <ul className="space-y-1">
                            {(Array.isArray(project.results)
                                ? project.results
                                : t(project.results, { returnObjects: true }) as string[]
                            ).slice(0, 2).map((result, idx) => (
                                <li key={idx} className="flex items-start text-xs text-calm/70">
                                    <span className="mr-2 text-precision">✓</span>
                                    {result}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 text-xs bg-structural/10 text-calm/70 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="px-2 py-1 text-xs text-calm/50">
                                    +{project.technologies.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-precision/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
        </motion.div>
    )
}
