import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { motion } from 'framer-motion'
import { ArchitectureDiagram } from '@/components/ui/ArchitectureDiagram'

export function HowWeBuild() {
    const { t } = useTranslation()

    return (
        <section className="py-24 bg-structural/5 border-y border-structural/10">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Architecture Diagram */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative order-2 lg:order-1"
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

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 order-1 lg:order-2"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-precision/10 border border-precision/20 text-precision text-xs font-medium uppercase tracking-wider">
                            {t('howWeBuild.badge')}
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-calm">
                            {t('howWeBuild.title')}
                        </h2>

                        <p className="text-lg text-calm/70 leading-relaxed">
                            {t('howWeBuild.description')}
                        </p>

                        {/* Key Points */}
                        <div className="space-y-4 pt-4">
                            {(t('howWeBuild.points', { returnObjects: true }) as Array<{ title: string; description: string }>).map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-3"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-precision/10 flex items-center justify-center mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-precision" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-calm mb-1">
                                            {point.title}
                                        </h3>
                                        <p className="text-sm text-calm/60">
                                            {point.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
