import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { AlertCircle, Layers, Fingerprint } from 'lucide-react'

export function Problem() {
    const { t } = useTranslation()

    const problems = [
        { icon: Layers, key: 'scale' },
        { icon: AlertCircle, key: 'structure' },
        { icon: Fingerprint, key: 'direction' }
    ]

    return (
        <section className="py-24 bg-structural/5">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">{t('problem.title')}</h2>
                    <p className="text-base text-calm/70">{t('problem.subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((p, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-foundation border border-destructive/20 hover:border-precision/30 transition-colors">
                            <div className="w-12 h-12 bg-red-400/10 rounded-lg flex items-center justify-center text-red-400 mb-6">
                                <p.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-calm mb-3">{t(`problem.items.${p.key}.title`)}</h3>
                            <p className="text-base text-calm/80 leading-relaxed">{t(`problem.items.${p.key}.description`)}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
