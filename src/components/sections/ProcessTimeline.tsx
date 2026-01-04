import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Search, Map, PenTool, Code2, Rocket, LineChart } from 'lucide-react'

export function ProcessTimeline() {
    const { t } = useTranslation()

    const steps = [
        { icon: Search, key: 'discovery' },
        { icon: Map, key: 'strategy' },
        { icon: PenTool, key: 'design' },
        { icon: Code2, key: 'development' },
        { icon: Rocket, key: 'launch' },
        { icon: LineChart, key: 'improvement' }
    ]

    return (
        <section className="py-24 bg-foundation relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-structural/5 -skew-x-12" />

            <Container>
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">{t('process.title')}</h2>
                    <p className="text-calm/70 text-base">
                        {t('process.subtitle')}
                    </p>
                    <div className="h-1 w-20 bg-precision mt-6 rounded-full mx-auto" />
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-8 left-0 w-full h-0.5 bg-structural/20 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative group">
                                {/* Dot */}
                                <div className="w-4 h-4 bg-foundation border-2 border-precision rounded-full absolute top-6 left-1/2 -translate-x-1/2 hidden md:block z-10 group-hover:scale-125 transition-transform" />

                                <div className="pt-0 md:pt-16 text-center">
                                    <div className="w-12 h-12 bg-structural/10 rounded-xl flex items-center justify-center text-calm mx-auto mb-4 md:hidden">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-calm mb-2">{t(`process.steps.${step.key}.title`)}</h3>
                                    <p className="text-sm text-calm/70">{t(`process.steps.${step.key}.description`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
