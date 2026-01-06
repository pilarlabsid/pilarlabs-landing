import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/seo/SEO'
import { pageSEO } from '@/config/seo-config'
import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { GlassCard } from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'
import { ShieldCheck, TrendingUp, Award } from 'lucide-react'

export function About() {
    const { t } = useTranslation()
    const seo = pageSEO.about
    const values = [
        { icon: ShieldCheck, key: 'structured' },
        { icon: TrendingUp, key: 'longTerm' },
        { icon: Award, key: 'excellence' }
    ]

    return (
        <>
            <SEO
                title={t('seo.about')}
                description={seo.description}
                keywords={seo.keywords}
            />
            <PageHeader
                title={t('about.pageHeader.title')}
                description={t('about.pageHeader.description')}
                badge={t('about.pageHeader.badge')}
            />

            {/* Philosophy Section - Company Vision & Mission */}
            <section className="py-20 border-b border-structural/10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold text-calm mb-6">{t('about.philosophy.title')}</h2>
                            <p className="text-calm/80 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.philosophy.content') }} />
                        </div>
                        <div className="bg-structural/5 p-8 rounded-2xl border border-structural/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                            <div className="relative z-10 font-mono text-sm text-precision space-y-2">
                                <div className="opacity-50">// Our Philosophy</div>
                                <div>class DigitalArchitecture implements Foundation <span className="text-structural">{`{`}</span></div>
                                <div className="pl-4">public readonly precision: <span className="text-calm">"High"</span>;</div>
                                <div className="pl-4">private complexity: <span className="text-calm">"Hidden"</span>;</div>
                                <div className="pl-4">public async function grow() <span className="text-structural">{`{`}</span></div>
                                <div className="pl-8">await this.buildStrongBase();</div>
                                <div className="pl-8">return "Sustainable Growth";</div>
                                <div className="pl-4"><span className="text-structural">{`}`}</span></div>
                                <div><span className="text-structural">{`}`}</span></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Our Story - Merged from Vision + Approach */}
            <section className="py-24 bg-structural/5">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <GlassCard className="p-8 md:p-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-calm mb-6">{t('about.story.title')}</h2>
                            <div className="space-y-4 text-calm/80 text-lg leading-relaxed">
                                {(t('about.story.content', { returnObjects: true }) as string[]).map((paragraph, i) => (
                                    <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </Container>
            </section>

            {/* Values Grid */}
            <section className="py-24">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">{t('about.values.title')}</h2>
                        <p className="text-calm/70 max-w-2xl mx-auto">{t('about.values.subtitle')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {values.map((v, i) => (
                            <GlassCard key={i} className="hover:bg-structural/5 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-precision/10 flex items-center justify-center text-precision mb-4">
                                    <v.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-calm mb-2">{t(`about.values.items.${v.key}.title`)}</h3>
                                <p className="text-sm text-calm/70">{t(`about.values.items.${v.key}.description`)}</p>
                            </GlassCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Commitment to Indonesia - with founder photo */}
            <section className="py-24 bg-structural/5 border-t border-structural/10">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <GlassCard className="p-8 md:p-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-calm mb-8 text-center">{t('about.founder.commitment.title')}</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                    {/* Founder Photo - Left Column */}
                                    <div className="flex flex-col items-center text-center">
                                        <a
                                            href="https://www.linkedin.com/in/ujangsprr/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <div className="relative mb-4 group cursor-pointer">
                                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-precision/20 shadow-lg">
                                                    <img
                                                        src="/team/ujang.png"
                                                        alt={t('about.founder.name')}
                                                        className="w-full h-full object-cover grayscale"
                                                    />
                                                </div>
                                                {/* Decorative ring */}
                                                <div className="absolute inset-0 rounded-full border-2 border-precision/30 animate-pulse" />
                                            </div>
                                        </a>
                                        <h3 className="text-xl font-bold text-calm mb-1">{t('about.founder.name')}</h3>
                                        <p className="text-sm text-precision font-medium mb-1">{t('about.founder.role')}</p>
                                        <p className="text-xs text-calm/60 mb-2">{t('about.founder.company')}</p>
                                    </div>

                                    {/* Content - Right Column (2 columns span) */}
                                    <div className="md:col-span-2">
                                        <div className="space-y-4 text-calm/80 text-base leading-relaxed">
                                            {(t('about.founder.commitment.content', { returnObjects: true }) as string[]).map((paragraph, i) => (
                                                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                            ))}
                                        </div>

                                        {/* Quote - moved here */}
                                        <div className="pt-6 mt-6 border-t border-structural/10">
                                            <p className="text-calm/70 italic text-lg">
                                                {t('about.founder.commitment.quote')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </>
    )
}
