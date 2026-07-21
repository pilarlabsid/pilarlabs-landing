import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Portfolio } from '@/types/portfolio'

interface ProjectModalProps {
    project: Portfolio | null
    onClose: () => void
}

const categoryLabelMap = {
    'web-app': 'webApp',
    'landing-page': 'landingPage',
    'mobile-app': 'mobileApp',
    'gis': 'gis',
    'ai': 'ai',
} as const

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    const { t } = useTranslation()

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        },
        [onClose]
    )

    useEffect(() => {
        if (project) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [project, handleKeyDown])

    const modalContent = (
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Modal Container with Scrolling */}
                    <div className="fixed inset-0 z-[100] overflow-y-auto pointer-events-none">
                        <div className="flex min-h-full items-center justify-center p-4 md:p-8">
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.3, type: 'spring', damping: 25, stiffness: 300 }}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-title"
                                className="relative w-full max-w-4xl bg-foundation border border-structural/20 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden my-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                            {/* Hero Image */}
                            <div className="relative h-56 md:h-72 overflow-hidden rounded-t-2xl">
                                <img
                                    src={project.coverImage}
                                    alt={t(project.title)}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-foundation/95" />

                                {/* Close Button */}
                                <button
                                    id="modal-close-btn"
                                    onClick={onClose}
                                    className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-sm"
                                    aria-label="Tutup modal"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>

                                {/* Badges on image */}
                                <div className="absolute bottom-4 left-6 flex items-center gap-2 flex-wrap">
                                    <span className="px-2.5 py-1 text-xs font-medium bg-precision/20 text-precision border border-precision/30 rounded-full backdrop-blur-sm">
                                        {t(`caseStudies.filters.${categoryLabelMap[project.category] ?? 'webApp'}`)}
                                    </span>
                                    {project.featured && (
                                        <span className="px-2.5 py-1 text-xs font-medium bg-energy/20 text-energy border border-energy/30 rounded-full backdrop-blur-sm">
                                            {t('caseStudies.labels.featuredTag')}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Title & Meta */}
                                <div>
                                    <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-calm mb-2">
                                        {t(project.title)}
                                    </h2>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-calm/60">
                                        <span>
                                            <span className="font-medium text-calm/80">{t('caseStudies.labels.client')}:</span>{' '}
                                            {project.client}
                                        </span>
                                        <span>
                                            <span className="font-medium text-calm/80">{t('caseStudies.labels.industry')}:</span>{' '}
                                            {t(project.industry)}
                                        </span>
                                        <span>
                                            <span className="font-medium text-calm/80">{t('caseStudies.labels.year')}:</span>{' '}
                                            {project.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-calm/75 leading-relaxed">
                                    {t(project.description)}
                                </p>

                                {/* Challenge & Solution Grid */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="rounded-xl bg-structural/5 border border-structural/10 p-4">
                                        <h3 className="text-sm font-semibold text-energy mb-2 flex items-center gap-2">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <circle cx="12" cy="12" r="6"></circle>
                                                <circle cx="12" cy="12" r="2"></circle>
                                            </svg>
                                            {t('caseStudies.labels.challenge')}
                                        </h3>
                                        <p className="text-sm text-calm/70 leading-relaxed">
                                            {t(project.challenge)}
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-structural/5 border border-structural/10 p-4">
                                        <h3 className="text-sm font-semibold text-precision mb-2 flex items-center gap-2">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            {t('caseStudies.labels.solution')}
                                        </h3>
                                        <p className="text-sm text-calm/70 leading-relaxed">
                                            {t(project.solution)}
                                        </p>
                                    </div>
                                </div>

                                {/* Results */}
                                <div>
                                    <h3 className="text-sm font-semibold text-calm/80 uppercase tracking-wider mb-3">
                                        {t('caseStudies.labels.results')}
                                    </h3>
                                    <ul className="space-y-2">
                                        {(Array.isArray(project.results)
                                            ? project.results
                                            : t(project.results, { returnObjects: true }) as string[]
                                        ).map((result, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-calm/75">
                                                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-precision/15 text-precision flex items-center justify-center">
                                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </span>
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h3 className="text-sm font-semibold text-calm/80 uppercase tracking-wider mb-3">
                                        {t('caseStudies.labels.technologies')}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 text-xs font-medium bg-structural/10 text-calm/80 border border-structural/20 rounded-lg"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                {project.url && project.url !== '#' && (
                                    <a
                                        id={`modal-view-project-${project.id}`}
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-precision text-white text-sm font-semibold hover:bg-precision/90 transition-colors"
                                    >
                                        {t('caseStudies.labels.viewProject')}
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
                </>
            )}
        </AnimatePresence>
    )

    if (typeof document === 'undefined') return null
    return createPortal(modalContent, document.body)
}
