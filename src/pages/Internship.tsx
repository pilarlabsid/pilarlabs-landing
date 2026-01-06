
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { pageSEO } from '@/config/seo-config'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/layout/Container'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { Code, Palette, Server, Boxes, CheckCircle, ArrowRight, Clock, Award, Users } from 'lucide-react'

export function Internship() {
    const { t } = useTranslation()
    const seo = pageSEO.blog // Using blog key for backward compatibility

    const positions = [
        {
            icon: Code,
            title: t('internship.positions.frontend.title'),
            description: t('internship.positions.frontend.description'),
            skills: t('internship.positions.frontend.skills', { returnObjects: true }) as string[],
        },
        {
            icon: Server,
            title: t('internship.positions.backend.title'),
            description: t('internship.positions.backend.description'),
            skills: t('internship.positions.backend.skills', { returnObjects: true }) as string[],
        },
        {
            icon: Boxes,
            title: t('internship.positions.fullstack.title'),
            description: t('internship.positions.fullstack.description'),
            skills: t('internship.positions.fullstack.skills', { returnObjects: true }) as string[],
        },
        {
            icon: Palette,
            title: t('internship.positions.uiux.title'),
            description: t('internship.positions.uiux.description'),
            skills: t('internship.positions.uiux.skills', { returnObjects: true }) as string[],
        },
    ]

    const benefits = [
        {
            icon: Users,
            title: t('internship.benefits.mentorship.title'),
            description: t('internship.benefits.mentorship.description'),
        },
        {
            icon: Award,
            title: t('internship.benefits.projects.title'),
            description: t('internship.benefits.projects.description'),
        },
        {
            icon: CheckCircle,
            title: t('internship.benefits.certificate.title'),
            description: t('internship.benefits.certificate.description'),
        },
        {
            icon: Clock,
            title: t('internship.benefits.flexible.title'),
            description: t('internship.benefits.flexible.description'),
        },
    ]

    const requirements = t('internship.requirements.items', { returnObjects: true }) as string[]

    const process = [
        { step: '1', title: t('internship.process.apply.title'), description: t('internship.process.apply.description') },
        { step: '2', title: t('internship.process.review.title'), description: t('internship.process.review.description') },
        { step: '3', title: t('internship.process.interview.title'), description: t('internship.process.interview.description') },
        { step: '4', title: t('internship.process.onboarding.title'), description: t('internship.process.onboarding.description') },
    ]

    return (
        <>
            <SEO
                title={t('seo.internship')}
                description={seo.description}
                keywords={seo.keywords}
            />
            <PageHeader
                title={t('internship.pageHeader.title')}
                description={t('internship.pageHeader.description')}
                badge={t('internship.pageHeader.badge')}
            />

            {/* Available Positions */}
            <section className="py-20 border-b border-structural/10">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">{t('internship.positions.title')}</h2>
                        <p className="text-calm/70 max-w-2xl mx-auto">
                            {t('internship.positions.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {positions.map((position, i) => (
                            <GlassCard key={i} className="hover:border-precision/30 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-precision/10 flex items-center justify-center text-precision mb-4">
                                    <position.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-calm mb-2">{position.title}</h3>
                                <p className="text-calm/70 text-sm mb-4">{position.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {position.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-structural/10 text-precision text-xs font-medium rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Requirements */}
            <section className="py-20 bg-structural/5">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-bold text-calm mb-8 text-center">{t('internship.requirements.title')}</h2>
                        <GlassCard className="p-8">
                            <ul className="space-y-4">
                                {requirements.map((req, i) => (
                                    <li key={i} className="flex items-start text-calm/80">
                                        <CheckCircle className="w-5 h-5 text-precision mr-3 mt-0.5 shrink-0" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                </Container>
            </section>

            {/* Benefits */}
            <section className="py-20 border-b border-structural/10">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">{t('internship.benefits.title')}</h2>
                        <p className="text-calm/70 max-w-2xl mx-auto">
                            {t('internship.benefits.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, i) => (
                            <GlassCard key={i} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-precision/10 flex items-center justify-center text-precision mb-4 mx-auto">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-calm mb-2">{benefit.title}</h3>
                                <p className="text-sm text-calm/70">{benefit.description}</p>
                            </GlassCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Application Process */}
            <section className="py-20 bg-structural/5">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">{t('internship.process.title')}</h2>
                        <p className="text-calm/70">{t('internship.process.subtitle')}</p>
                    </div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                        {process.map((item, i) => (
                            <div key={i} className="relative">
                                <GlassCard className="text-center h-full">
                                    <div className="w-12 h-12 rounded-full bg-precision text-white font-bold text-xl flex items-center justify-center mb-4 mx-auto">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-semibold text-calm mb-2">{item.title}</h3>
                                    <p className="text-sm text-calm/70">{item.description}</p>
                                </GlassCard>
                                {i < process.length - 1 && (
                                    <ArrowRight className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-precision/30 w-6 h-6" />
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24">
                <Container>
                    <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-precision/10 to-calm/5 rounded-2xl p-12 border border-precision/20">
                        <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">{t('internship.cta.title')}</h2>
                        <p className="text-calm/70 mb-8 text-lg">
                            {t('internship.cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={() => window.location.href = 'mailto:careers@pilarlabs.id?subject=Internship Application'}
                                className="h-12 px-8"
                            >
                                {t('internship.cta.emailButton')} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => window.open('https://wa.me/6281226027578?text=Hi, saya tertarik dengan program internship Pilar Labs', '_blank')}
                                className="h-12 px-8 border-structural/30"
                            >
                                {t('internship.cta.whatsappButton')}
                            </Button>
                        </div>
                        <p className="text-sm text-calm/60 mt-6">
                            {t('internship.cta.contact')} <a href="mailto:careers@pilarlabs.id" className="text-precision hover:underline">careers@pilarlabs.id</a>
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}
