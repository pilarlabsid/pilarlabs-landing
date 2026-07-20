import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Search, BarChart3, Palette, Code2, ShieldCheck, Rocket, HeartHandshake, Milestone } from 'lucide-react'

export function ProcessTimeline() {
    const { t } = useTranslation()

    const steps = [
        { icon: Search, key: 'discovery' },
        { icon: BarChart3, key: 'analysis' },
        { icon: Palette, key: 'design' },
        { icon: Code2, key: 'code' },
        { icon: ShieldCheck, key: 'testing' },
        { icon: Rocket, key: 'deploy' },
        { icon: HeartHandshake, key: 'support' },
        { icon: Milestone, key: 'evolve' }
    ]

    return (
        <section className="py-24 bg-foundation relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-structural/5 -skew-x-12" />

            <Container className="relative z-10">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-precision/10 border border-precision/20 text-precision text-xs font-semibold uppercase tracking-wider mb-4">
                        {t('process.title')}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">
                        {t('process.title')}
                    </h2>
                    <p className="text-calm/70 text-base md:text-lg">
                        {t('process.subtitle')}
                    </p>
                    <div className="h-1 w-20 bg-precision mt-6 rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {steps.map((step, i) => (
                        <div 
                            key={i} 
                            className="bg-foundation/50 dark:bg-foundation/30 border border-structural/10 hover:border-precision/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center text-center group"
                        >
                            {/* Icon Wrapper */}
                            <div className="w-12 h-12 rounded-xl bg-precision/10 text-precision flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <step.icon className="w-6 h-6" />
                            </div>

                            {/* Step Title */}
                            <h3 className="text-base md:text-lg font-bold text-calm mb-2">
                                {t(`process.steps.${step.key}.title`)}
                            </h3>

                            {/* Step Description */}
                            <p className="text-xs md:text-sm text-calm/70 leading-relaxed">
                                {t(`process.steps.${step.key}.description`)}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
