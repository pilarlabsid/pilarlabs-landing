
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { pageSEO } from '@/config/seo-config'
import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'

export function Privacy() {
    const { t } = useTranslation()
    const seo = pageSEO.privacy
    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
            />
            <PageHeader
                title={t('privacy.pageHeader.title')}
                description={t('privacy.pageHeader.description')}
                badge={t('privacy.pageHeader.badge')}
            />

            <section className="py-20">
                <Container>
                    <div className="max-w-3xl mx-auto prose prose-invert">
                        <p className="text-calm/70 mb-8">
                            {t('privacy.lastUpdated')} {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('privacy.sections.collection.title')}</h2>
                                <p className="text-calm/80 mb-4">{t('privacy.sections.collection.intro')}</p>
                                <ul className="list-disc list-inside text-calm/70 space-y-2 ml-4">
                                    {(t('privacy.sections.collection.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('privacy.sections.usage.title')}</h2>
                                <p className="text-calm/80 mb-4">{t('privacy.sections.usage.intro')}</p>
                                <ul className="list-disc list-inside text-calm/70 space-y-2 ml-4">
                                    {(t('privacy.sections.usage.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('privacy.sections.sharing.title')}</h2>
                                <p className="text-calm/80 mb-4">
                                    {t('privacy.sections.sharing.intro')}
                                </p>
                                <ul className="list-disc list-inside text-calm/70 space-y-2 ml-4">
                                    {(t('privacy.sections.sharing.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('privacy.sections.security.title')}</h2>
                                <p className="text-calm/80">
                                    {t('privacy.sections.security.content')}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('privacy.sections.rights.title')}</h2>
                                <p className="text-calm/80 mb-4">{t('privacy.sections.rights.intro')}</p>
                                <ul className="list-disc list-inside text-calm/70 space-y-2 ml-4">
                                    {(t('privacy.sections.rights.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('privacy.sections.cookies.title')}</h2>
                                <p className="text-calm/80">
                                    {t('privacy.sections.cookies.content')}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('privacy.sections.changes.title')}</h2>
                                <p className="text-calm/80">
                                    {t('privacy.sections.changes.content')}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-structural/10">
                                <h2 className="text-2xl font-bold text-calm mb-4">{t('privacy.sections.contact.title')}</h2>
                                <p className="text-calm/80 mb-4">
                                    {t('privacy.sections.contact.intro')}
                                </p>
                                <ul className="text-calm/70 space-y-2">
                                    <li>{t('privacy.sections.contact.email')} <a href="mailto:hello@pilarlabs.id" className="text-precision hover:underline">hello@pilarlabs.id</a></li>
                                    <li>{t('privacy.sections.contact.phone')} <a href="tel:+6281226027578" className="text-precision hover:underline">+62 812-2602-7578</a></li>
                                    <li>{t('privacy.sections.contact.address')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
