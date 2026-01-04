import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ArchitectureDiagram } from '@/components/ui/ArchitectureDiagram'

export function Hero() {
    const { t } = useTranslation()

    return (
        <section className="relative min-h-[85vh] flex items-center pt-8 overflow-hidden group">


            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="space-y-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                        >
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.2] text-calm">
                                {t('hero.title')} <br />
                                <span className="text-precision font-semibold relative">
                                    {t('hero.subtitle')}
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-base md:text-lg text-calm/70 max-w-xl leading-relaxed"
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link to="/contact">
                                <Button size="lg" className="h-14 px-8 text-lg text-white dark:text-foundation">
                                    {t('hero.startProject')} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link to="/portfolio">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-structural/30">
                                    {t('hero.viewWork')}
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right side - Architecture visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative group">
                            {/* Glow effect behind diagram */}
                            <div className="absolute inset-0 bg-precision/10 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

                            {/* Interactive Architecture Diagram */}
                            <div className="relative">
                                <ArchitectureDiagram />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
