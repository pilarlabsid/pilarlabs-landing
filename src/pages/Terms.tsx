
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { pageSEO } from '@/config/seo-config'
import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'

export function Terms() {
    const { t } = useTranslation()
    const seo = pageSEO.terms
    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
            />
            <PageHeader
                title={t('terms.pageHeader.title')}
                description={t('terms.pageHeader.description')}
                badge={t('terms.pageHeader.badge')}
            />

            <section className="py-20">
                <Container>
                    <div className="max-w-3xl mx-auto prose prose-invert">
                        <p className="text-calm/70 mb-8">
                            {t('terms.lastUpdated')} {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.acceptance.title')}</h2>
                                <p className="text-calm/80">
                                    {t('terms.sections.acceptance.content')}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.services.title')}</h2>
                                <p className="text-calm/80 mb-4">
                                    {t('terms.sections.services.intro')}
                                </p>
                                <ul className="list-disc list-inside text-calm/70 space-y-2 ml-4">
                                    {(t('terms.sections.services.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.obligations.title')}</h2>
                                <p className="text-calm/80 mb-4">{t('terms.sections.obligations.intro')}</p>
                                <ul className="list-disc list-inside text-calm/70 space-y-2 ml-4">
                                    {(t('terms.sections.obligations.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.payment.title')}</h2>
                                <p className="text-calm/80 mb-4">
                                    {t('terms.sections.payment.intro')}
                                </p>
                                <ul className="list-disc list-inside text-calm/70 space-y-2 ml-4">
                                    {(t('terms.sections.payment.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.intellectual.title')}</h2>
                                <p className="text-calm/80 mb-4">
                                    {t('terms.sections.intellectual.intro')}
                                </p>
                                <ul className="list-disc list-inside text-calm/70 space-y-2 ml-4">
                                    {(t('terms.sections.intellectual.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.timeline.title')}</h2>
                                <p className="text-calm/80">
                                    {t('terms.sections.timeline.content')}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.warranties.title')}</h2>
                                <p className="text-calm/80 mb-4">
                                    {t('terms.sections.warranties.intro')}
                                </p>
                                <ul className="list-disc list-inside text-calm/70 space-y-2 ml-4">
                                    {(t('terms.sections.warranties.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.liability.title')}</h2>
                                <p className="text-calm/80">
                                    {t('terms.sections.liability.content')}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.support.title')}</h2>
                                <p className="text-calm/80">
                                    {t('terms.sections.support.content')}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.termination.title')}</h2>
                                <p className="text-calm/80">
                                    {t('terms.sections.termination.content')}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.governing.title')}</h2>
                                <p className="text-calm/80">
                                    {t('terms.sections.governing.content')}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.changes.title')}</h2>
                                <p className="text-calm/80">
                                    {t('terms.sections.changes.content')}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-structural/10">
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('terms.sections.contact.title')}</h2>
                                <p className="text-calm/80 mb-4">
                                    {t('terms.sections.contact.intro')}
                                </p>
                                <ul className="text-calm/70 space-y-2">
                                    <li>{t('terms.sections.contact.company')}</li>
                                    <li>{t('terms.sections.contact.email')} <a href="mailto:hello@pilarlabs.id" className="text-precision hover:underline">hello@pilarlabs.id</a></li>
                                    <li>{t('terms.sections.contact.phone')} <a href="tel:+6281226027578" className="text-precision hover:underline">+62 812-2602-7578</a></li>
                                    <li>{t('terms.sections.contact.address')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
