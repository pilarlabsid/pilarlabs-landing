
import { useTranslation } from 'react-i18next'

import { SEO } from '@/components/seo/SEO'
import { pageSEO } from '@/config/seo-config'
import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { Check, ArrowRight } from 'lucide-react'

export function Services() {
    const { t } = useTranslation()
    const seo = pageSEO.services
    const packages = [
        {
            titleKey: 'servicesPage.packages.landing.title',
            subtitleKey: 'servicesPage.packages.landing.subtitle',
            descriptionKey: 'servicesPage.packages.landing.description',
            features: t('servicesPage.packages.landing.features', { returnObjects: true }) as string[],
            idealForKey: 'servicesPage.packages.landing.idealFor',
            ctaKey: 'servicesPage.packages.landing.cta'
        },
        {
            titleKey: 'servicesPage.packages.companyProfile.title',
            subtitleKey: 'servicesPage.packages.companyProfile.subtitle',
            descriptionKey: 'servicesPage.packages.companyProfile.description',
            features: t('servicesPage.packages.companyProfile.features', { returnObjects: true }) as string[],
            idealForKey: 'servicesPage.packages.companyProfile.idealFor',
            ctaKey: 'servicesPage.packages.companyProfile.cta'
        },
        {
            titleKey: 'servicesPage.packages.ecommerce.title',
            subtitleKey: 'servicesPage.packages.ecommerce.subtitle',
            descriptionKey: 'servicesPage.packages.ecommerce.description',
            features: t('servicesPage.packages.ecommerce.features', { returnObjects: true }) as string[],
            idealForKey: 'servicesPage.packages.ecommerce.idealFor',
            ctaKey: 'servicesPage.packages.ecommerce.cta'
        },
        {
            titleKey: 'servicesPage.packages.webApp.title',
            subtitleKey: 'servicesPage.packages.webApp.subtitle',
            descriptionKey: 'servicesPage.packages.webApp.description',
            features: t('servicesPage.packages.webApp.features', { returnObjects: true }) as string[],
            idealForKey: 'servicesPage.packages.webApp.idealFor',
            ctaKey: 'servicesPage.packages.webApp.cta'
        },
        {
            titleKey: 'servicesPage.packages.blog.title',
            subtitleKey: 'servicesPage.packages.blog.subtitle',
            descriptionKey: 'servicesPage.packages.blog.description',
            features: t('servicesPage.packages.blog.features', { returnObjects: true }) as string[],
            idealForKey: 'servicesPage.packages.blog.idealFor',
            ctaKey: 'servicesPage.packages.blog.cta'
        }
    ]

    return (
        <>
            <SEO
                title={t('servicesPage.seo.title')}
                description={seo.description}
                keywords={seo.keywords}
            />
            <PageHeader
                title={t('servicesPage.pageHeader.title')}
                description={t('servicesPage.pageHeader.description')}
                badge={t('servicesPage.pageHeader.badge')}
            />

            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {packages.map((pkg, i) => (
                            <GlassCard key={i} className={`flex flex-col h-full ${i === 1 ? 'border-precision/50 bg-foundation/80 relative overflow-hidden' : ''}`}>
                                {i === 1 && (
                                    <div className="absolute top-0 right-0 bg-precision text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        {t('servicesPage.mostPopular')}
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-calm mb-1">{t(pkg.titleKey)}</h3>
                                    <div className="text-precision text-sm font-medium mb-4">{t(pkg.subtitleKey)}</div>
                                    <p className="text-calm/80 text-sm leading-relaxed min-h-[60px]">
                                        {t(pkg.descriptionKey)}
                                    </p>
                                </div>

                                <div className="flex-1">
                                    <div className="text-xs font-semibold text-cyan-muted uppercase tracking-wider mb-4">{t('servicesPage.includes')}</div>
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-calm/70">
                                                <Check className="w-4 h-4 text-precision mr-2 mt-0.5 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 pt-6 border-t border-structural/10">
                                    <div className="text-xs text-calm/60 mb-2">{t('servicesPage.idealFor')} <span className="text-calm">{t(pkg.idealForKey)}</span></div>
                                    <a
                                        href={`https://wa.me/6281226027578?text=${encodeURIComponent(`Halo Pilar Labs, saya tertarik dengan layanan *${t(pkg.titleKey)}*. \n\nBisa tolong info lebih lanjut?`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Button className={`w-full justify-between group ${i === 1 ? 'bg-precision hover:bg-precision/90' : 'bg-transparent border border-gray-600'}`} variant={i === 1 ? 'default' : 'outline'}>
                                            {t(pkg.ctaKey)}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </a>
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                    <div className="mt-24 text-center bg-structural/5 rounded-2xl p-12">
                        <h3 className="text-xl md:text-2xl font-bold text-calm mb-4">{t('servicesPage.custom.title')}</h3>
                        <p className="text-calm/70 max-w-2xl mx-auto mb-8">
                            {t('servicesPage.custom.description')}
                        </p>
                        <a
                            href={`https://wa.me/6281226027578?text=${encodeURIComponent("Halo Pilar Labs, saya butuh solusi custom/khusus. \n\nBisa konsultasi gratis?")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" variant="outline" className="border-structural/30">
                                {t('servicesPage.custom.cta')}
                            </Button>
                        </a>
                    </div>
                </Container>
            </section>
        </>
    )
}
