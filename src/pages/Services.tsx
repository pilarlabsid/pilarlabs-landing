import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { Check, ArrowRight, Code, Brain, LineChart, Laptop, Smartphone, Eye, MessageSquare, BarChart, Map, Plane, Database, Activity } from 'lucide-react'

export function Services() {
    const { t } = useTranslation()

    const webDevPackages = [
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
        }
    ]

    const enterprisePackages = [
        {
            titleKey: 'servicesPage.packages.webApp.title',
            subtitleKey: 'servicesPage.packages.webApp.subtitle',
            descriptionKey: 'servicesPage.packages.webApp.description',
            features: t('servicesPage.packages.webApp.features', { returnObjects: true }) as string[],
            idealForKey: 'servicesPage.packages.webApp.idealFor',
            ctaKey: 'servicesPage.packages.webApp.cta'
        },
        {
            titleKey: 'servicesPage.packages.enterprise.title',
            subtitleKey: 'servicesPage.packages.enterprise.subtitle',
            descriptionKey: 'servicesPage.packages.enterprise.description',
            features: t('servicesPage.packages.enterprise.features', { returnObjects: true }) as string[],
            idealForKey: 'servicesPage.packages.enterprise.idealFor',
            ctaKey: 'servicesPage.packages.enterprise.cta'
        },
        {
            titleKey: 'servicesPage.packages.aiDeepTech.title',
            subtitleKey: 'servicesPage.packages.aiDeepTech.subtitle',
            descriptionKey: 'servicesPage.packages.aiDeepTech.description',
            features: t('servicesPage.packages.aiDeepTech.features', { returnObjects: true }) as string[],
            idealForKey: 'servicesPage.packages.aiDeepTech.idealFor',
            ctaKey: 'servicesPage.packages.aiDeepTech.cta'
        }
    ]

    return (
        <>
            <SEO
                title={t('seo.services.title')}
                description={t('seo.services.description')}
                keywords={t('seo.services.keywords', { returnObjects: true }) as string[]}
                pathname="/services"
            />
            <PageHeader
                title={t('servicesPage.pageHeader.title')}
                description={t('servicesPage.pageHeader.description')}
                badge={t('servicesPage.pageHeader.badge')}
            />

            {/* DETAILED SERVICES SECTIONS */}

            {/* 1. Software Development */}
            <section className="py-24 border-b border-structural/10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-precision/10 rounded-xl flex items-center justify-center">
                                    <Code className="w-6 h-6 text-precision" />
                                </div>
                                <h2 className="text-3xl font-bold text-calm">{t('servicesPage.detailedServices.software.title')}</h2>
                            </div>
                            <p className="text-lg text-calm/70 mb-10">{t('servicesPage.detailedServices.software.subtitle')}</p>
                            
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="flex items-center gap-2 text-cyan-400 font-semibold mb-4">
                                        <Laptop className="w-4 h-4" /> 
                                        {t('servicesPage.detailedServices.software.web.title')}
                                    </h4>
                                    <ul className="space-y-3">
                                        {(t('servicesPage.detailedServices.software.web.items', { returnObjects: true }) as string[]).map((item, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-calm/80">
                                                <Check className="w-4 h-4 text-precision mr-2 mt-0.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="flex items-center gap-2 text-emerald-400 font-semibold mb-4">
                                        <Code className="w-4 h-4" /> 
                                        {t('servicesPage.detailedServices.software.app.title')}
                                    </h4>
                                    <ul className="space-y-3">
                                        {(t('servicesPage.detailedServices.software.app.items', { returnObjects: true }) as string[]).map((item, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-calm/80">
                                                <Check className="w-4 h-4 text-precision mr-2 mt-0.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-precision/20 blur-[100px] rounded-full" />
                            <img src="/images/services/software-dev.png" alt="Pembuatan Custom Web Application dan Dashboard Bisnis oleh Pilar Labs Jakarta" className="relative rounded-2xl border border-structural/20 shadow-2xl object-cover h-[400px] w-full" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* 2. Mobile Application */}
            <section className="py-24 bg-structural/5 border-b border-structural/10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative hidden lg:block">
                             <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
                             <img src="/images/services/mobile-app.png" alt="Jasa Pembuatan Aplikasi Mobile iOS dan Android Berkualitas oleh Pilar Labs" className="relative rounded-2xl border border-structural/20 shadow-2xl object-cover h-[400px] w-full" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                    <Smartphone className="w-6 h-6 text-accent" />
                                </div>
                                <h2 className="text-3xl font-bold text-calm">{t('servicesPage.detailedServices.mobile.title')}</h2>
                            </div>
                            <h3 className="text-xl font-semibold text-calm mb-4">{t('servicesPage.detailedServices.mobile.subtitle')}</h3>
                            <p className="text-calm/70 mb-8 leading-relaxed">{t('servicesPage.detailedServices.mobile.description')}</p>
                            
                            <div className="flex flex-wrap gap-3 mb-8">
                                {(t('servicesPage.detailedServices.mobile.badges', { returnObjects: true }) as string[]).map((badge, idx) => (
                                    <span key={idx} className="px-4 py-1.5 rounded-full bg-structural/20 text-xs font-semibold text-calm/90">
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-4">
                                {(t('servicesPage.detailedServices.mobile.items', { returnObjects: true }) as string[]).map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-calm/80">
                                        <Check className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. Artificial Intelligence */}
            <section className="py-24 border-b border-structural/10">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Brain className="w-8 h-8 text-purple-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-calm mb-6">{t('servicesPage.detailedServices.ai.title')}</h2>
                        <p className="text-lg text-calm/70">{t('servicesPage.detailedServices.ai.subtitle')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard className="hover:-translate-y-2 transition-transform duration-300">
                            <Eye className="w-8 h-8 text-cyan-400 mb-6" />
                            <h3 className="text-xl font-bold text-calm mb-4">{t('servicesPage.detailedServices.ai.vision.title')}</h3>
                            <p className="text-sm text-calm/70 mb-6 min-h-[60px]">{t('servicesPage.detailedServices.ai.vision.description')}</p>
                            <ul className="space-y-3">
                                {(t('servicesPage.detailedServices.ai.vision.items', { returnObjects: true }) as string[]).map((item, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-calm/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>

                        <GlassCard className="hover:-translate-y-2 transition-transform duration-300">
                            <MessageSquare className="w-8 h-8 text-emerald-400 mb-6" />
                            <h3 className="text-xl font-bold text-calm mb-4">{t('servicesPage.detailedServices.ai.nlp.title')}</h3>
                            <p className="text-sm text-calm/70 mb-6 min-h-[60px]">{t('servicesPage.detailedServices.ai.nlp.description')}</p>
                            <ul className="space-y-3">
                                {(t('servicesPage.detailedServices.ai.nlp.items', { returnObjects: true }) as string[]).map((item, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-calm/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>

                        <GlassCard className="hover:-translate-y-2 transition-transform duration-300">
                            <Activity className="w-8 h-8 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold text-calm mb-4">{t('servicesPage.detailedServices.ai.predict.title')}</h3>
                            <p className="text-sm text-calm/70 mb-6 min-h-[60px]">{t('servicesPage.detailedServices.ai.predict.description')}</p>
                            <ul className="space-y-3">
                                {(t('servicesPage.detailedServices.ai.predict.items', { returnObjects: true }) as string[]).map((item, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-calm/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </Container>
            </section>

            {/* 4. GIS */}
            <section className="py-24 bg-structural/5 border-b border-structural/10">
                <Container>
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                                <Map className="w-6 h-6 text-amber-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-calm">{t('servicesPage.detailedServices.gis.title')}</h2>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <GlassCard>
                            <Map className="w-6 h-6 text-amber-400 mb-4" />
                            <h3 className="text-xl font-bold text-calm mb-4">{t('servicesPage.detailedServices.gis.webgis.title')}</h3>
                            <p className="text-sm text-calm/70 mb-6">{t('servicesPage.detailedServices.gis.webgis.description')}</p>
                            <ul className="space-y-3">
                                {(t('servicesPage.detailedServices.gis.webgis.items', { returnObjects: true }) as string[]).map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-calm/80">
                                        <Check className="w-4 h-4 text-amber-500 mr-2 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                        <GlassCard>
                            <Plane className="w-6 h-6 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold text-calm mb-4">{t('servicesPage.detailedServices.gis.drone.title')}</h3>
                            <p className="text-sm text-calm/70 mb-6">{t('servicesPage.detailedServices.gis.drone.description')}</p>
                            <ul className="space-y-3">
                                {(t('servicesPage.detailedServices.gis.drone.items', { returnObjects: true }) as string[]).map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-calm/80">
                                        <Check className="w-4 h-4 text-blue-400 mr-2 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </Container>
            </section>

            {/* 5. Data Analytics */}
            <section className="py-24 border-b border-structural/10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                            <div className="bg-structural/10 rounded-2xl p-6 flex flex-col items-center justify-center aspect-square border border-structural/20">
                                <Database className="w-10 h-10 text-cyan-400 mb-4" />
                                <div className="text-xs font-semibold text-calm text-center">Data Pipeline</div>
                            </div>
                            <div className="bg-structural/10 rounded-2xl p-6 flex flex-col items-center justify-center aspect-square border border-structural/20 mt-8">
                                <BarChart className="w-10 h-10 text-precision mb-4" />
                                <div className="text-xs font-semibold text-calm text-center">Business Intelligence</div>
                            </div>
                            <div className="bg-structural/10 rounded-2xl p-6 flex flex-col items-center justify-center aspect-square border border-structural/20 -mt-8">
                                <LineChart className="w-10 h-10 text-emerald-400 mb-4" />
                                <div className="text-xs font-semibold text-calm text-center">Executive Dashboard</div>
                            </div>
                            <div className="bg-structural/10 rounded-2xl p-6 flex flex-col items-center justify-center aspect-square border border-structural/20">
                                <Activity className="w-10 h-10 text-accent mb-4" />
                                <div className="text-xs font-semibold text-calm text-center">Real-time Metrics</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-precision/10 rounded-xl flex items-center justify-center">
                                    <BarChart className="w-6 h-6 text-precision" />
                                </div>
                                <h2 className="text-3xl font-bold text-calm">{t('servicesPage.detailedServices.data.title')}</h2>
                            </div>
                            <h3 className="text-xl font-semibold text-calm mb-4">{t('servicesPage.detailedServices.data.subtitle')}</h3>
                            <p className="text-calm/70 mb-8 leading-relaxed">{t('servicesPage.detailedServices.data.description')}</p>

                            <ul className="space-y-4">
                                {(t('servicesPage.detailedServices.data.items', { returnObjects: true }) as string[]).map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-calm/80">
                                        <Check className="w-5 h-5 text-precision mr-3 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>


            {/* PACKAGES SECTION */}
            <section className="py-24">
                <Container>
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-calm mb-6">{t('servicesPage.pageHeader.title')}</h2>
                        <p className="text-calm/70">{t('servicesPage.pageHeader.description')}</p>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-calm mb-10 text-center">Web Development</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {webDevPackages.map((pkg, i) => (
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
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-calm mb-10 text-center">Enterprise & Deep Tech</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {enterprisePackages.map((pkg, i) => (
                                <GlassCard key={i} className="flex flex-col h-full border-precision/20 bg-foundation/60">
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
                                            <Button className="w-full justify-between group bg-transparent border border-gray-600" variant="outline">
                                                {t(pkg.ctaKey)}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </a>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
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
