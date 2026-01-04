import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { LayoutTemplate, Building2, Cpu } from 'lucide-react'

export function ServicesPreview() {
    const { t } = useTranslation()

    const services = [
        {
            icon: LayoutTemplate,
            key: 'landing',
            featureKeys: ['fast', 'conversion', 'analytics']
        },
        {
            icon: Building2,
            key: 'companyProfile',
            featureKeys: ['pages', 'cms', 'multilang']
        },
        {
            icon: Cpu,
            key: 'ecommerce',
            featureKeys: ['catalog', 'payment', 'admin']
        }
    ]

    return (
        <section className="py-24 relative">
            <Container>
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">{t('services.title')}</h2>
                    <p className="text-lg text-calm/70">{t('services.subtitle')}</p>
                    <div className="h-1 w-20 bg-precision rounded-full mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <GlassCard key={i} className="flex flex-col h-full hover:border-precision/50 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-lg bg-foundation border border-structural/20 flex items-center justify-center mb-6 text-precision">
                                <s.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-calm mb-3">{t(`services.items.${s.key}.title`)}</h3>
                            <p className="text-base text-calm/80 mb-6 flex-1">{t(`services.items.${s.key}.description`)}</p>
                            <ul className="space-y-2 mb-8">
                                {s.featureKeys.map((fKey, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-calm/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-precision mr-2" />
                                        {t(`services.items.${s.key}.features.${fKey}`)}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/services" className="block">
                                <Button variant="outline" className="w-full justify-between group">
                                    {t('services.learnMore')}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Button>
                            </Link>
                        </GlassCard>
                    ))}
                </div>
            </Container>
        </section>
    )
}
