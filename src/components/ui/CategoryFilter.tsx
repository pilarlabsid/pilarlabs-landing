import { ProjectCategory } from '@/types/portfolio'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface CategoryFilterProps {
    activeCategory: ProjectCategory
    onCategoryChange: (category: ProjectCategory) => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
    const { t } = useTranslation()

    const categories: ProjectCategory[] = ['all', 'web-app', 'landing-page', 'mobile-app']

    const getCategoryLabel = (category: ProjectCategory) => {
        const labels: Record<ProjectCategory, string> = {
            'all': 'all',
            'web-app': 'webApp',
            'landing-page': 'landingPage',
            'mobile-app': 'mobileApp'
        }
        return t(`caseStudies.filters.${labels[category]}`)
    }

    return (
        <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => {
                const isActive = activeCategory === category

                return (
                    <motion.button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`
                            relative px-6 py-2.5 rounded-full font-medium transition-all duration-300
                            ${isActive
                                ? 'text-foundation bg-precision shadow-lg'
                                : 'text-calm/70 bg-structural/10 hover:bg-structural/20 hover:text-calm'
                            }
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {getCategoryLabel(category)}

                        {isActive && (
                            <motion.div
                                layoutId="activeCategory"
                                className="absolute inset-0 bg-precision rounded-full -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </motion.button>
                )
            })}
        </div>
    )
}
