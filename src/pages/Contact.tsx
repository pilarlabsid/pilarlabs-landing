import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { pageSEO } from '@/config/seo-config'
import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
    const { t } = useTranslation()
    const seo = pageSEO.contact
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const projectType = formData.get('projectType')
        const message = formData.get('message')

        // Format WhatsApp message
        const whatsappMessage = `*Inquiry Proyek Baru*\n\n` +
            `*Nama:* ${name}\n` +
            `*Email:* ${email}\n` +
            `*Jenis Proyek:* ${projectType}\n\n` +
            `*Pesan:*\n${message}\n\n` +
            `_Dikirim dari pilarlabs.id_`

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/6281226027578?text=${encodeURIComponent(whatsappMessage)}`
        window.open(whatsappUrl, '_blank')

        // Reset form after short delay
        setTimeout(() => {
            setIsSubmitting(false)
            e.currentTarget.reset()
        }, 1000)
    }

    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
            />
            <PageHeader
                title={t('contactPage.pageHeader.title')}
                description={t('contactPage.pageHeader.description')}
                badge={t('contactPage.pageHeader.badge')}
            />

            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-bold text-calm mb-6">{t('contactPage.getInTouch.title')}</h2>
                                <p className="text-structural text-lg">
                                    {t('contactPage.getInTouch.subtitle')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <GlassCard className="flex items-center space-x-4 p-4" hoverEffect={false}>
                                    <div className="w-12 h-12 bg-precision/10 rounded-full flex items-center justify-center text-precision">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-structural uppercase tracking-wider">{t('contactPage.info.email')}</div>
                                        <div className="text-calm font-medium">projects@pilarlabs.id</div>
                                    </div>
                                </GlassCard>

                                <GlassCard className="flex items-center space-x-4 p-4" hoverEffect={false}>
                                    <div className="w-12 h-12 bg-precision/10 rounded-full flex items-center justify-center text-precision">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-structural uppercase tracking-wider">{t('contactPage.info.whatsapp')}</div>
                                        <div className="text-calm font-medium">+62 812 3456 7890</div>
                                    </div>
                                </GlassCard>

                                <GlassCard className="flex items-center space-x-4 p-4" hoverEffect={false}>
                                    <div className="w-12 h-12 bg-precision/10 rounded-full flex items-center justify-center text-precision">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-structural uppercase tracking-wider">{t('contactPage.info.office')}</div>
                                        <div className="text-calm font-medium">{t('contactPage.info.location')}</div>
                                    </div>
                                </GlassCard>
                            </div>
                        </div>

                        <GlassCard className="p-8" hoverEffect={false}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-calm">{t('contactPage.form.name')}</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="w-full bg-foundation/50 border border-structural/20 rounded-md px-4 py-2.5 text-calm focus:outline-none focus:ring-2 focus:ring-precision/50 placeholder:text-structural/30"
                                            placeholder={t('contactPage.form.namePlaceholder')}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-calm">{t('contactPage.form.email')}</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full bg-foundation/50 border border-structural/20 rounded-md px-4 py-2.5 text-calm focus:outline-none focus:ring-2 focus:ring-precision/50 placeholder:text-structural/30"
                                            placeholder={t('contactPage.form.emailPlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="projectType" className="text-sm font-medium text-calm">{t('contactPage.form.projectType')}</label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        className="w-full bg-foundation/50 border border-structural/20 rounded-md px-4 py-2.5 text-calm focus:outline-none focus:ring-2 focus:ring-precision/50 *:bg-foundation"
                                    >
                                        <option>{t('contactPage.form.projectOptions.foundation')}</option>
                                        <option>{t('contactPage.form.projectOptions.structure')}</option>
                                        <option>{t('contactPage.form.projectOptions.ecommerce')}</option>
                                        <option>{t('contactPage.form.projectOptions.webApp')}</option>
                                        <option>{t('contactPage.form.projectOptions.blog')}</option>
                                        <option>{t('contactPage.form.projectOptions.other')}</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-calm">{t('contactPage.form.message')}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-foundation/50 border border-structural/20 rounded-md px-4 py-2.5 text-calm focus:outline-none focus:ring-2 focus:ring-precision/50 placeholder:text-structural/30 resize-none"
                                        placeholder={t('contactPage.form.messagePlaceholder')}
                                    />
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full h-11 text-base">
                                    {isSubmitting ? t('contactPage.form.sending') : (
                                        <span className="flex items-center">
                                            {t('contactPage.form.submit')} <Send className="w-4 h-4 ml-2" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </GlassCard>
                    </div>
                </Container>
            </section>
        </>
    )
}
