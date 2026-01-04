import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { motion } from 'framer-motion'

const clients = [
    {
        name: 'Yogi Busana',
        logo: '/clients/yogibusana.jpg',
        description: 'Fashion & Apparel'
    },
    {
        name: 'Nurasa',
        logo: '/clients/nurasa.png',
        description: 'Food & Beverage'
    }
]

export function TrustedBy() {
    const { t } = useTranslation()

    return (
        <section className="py-20 border-t border-structural/10">
            <Container>
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-precision/10 border border-precision/20 text-precision text-xs font-medium uppercase tracking-wider mb-4">
                            {t('trustedBy.badge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-calm mb-4">
                            {t('trustedBy.title')}
                        </h2>
                        <p className="text-calm/70 max-w-2xl mx-auto">
                            {t('trustedBy.description')}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {clients.map((client, i) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="bg-foundation border border-structural/10 rounded-2xl p-8 hover:border-precision/30 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                                <div className="mb-4 w-full h-24 flex items-center justify-center">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-calm mb-1">{client.name}</h3>
                                <p className="text-sm text-calm/60">{client.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-sm text-calm/60">
                        {t('trustedBy.cta')} <Link to="/contact" className="text-precision hover:underline">{t('trustedBy.ctaLink')}</Link>
                    </p>
                </motion.div>
            </Container>
        </section>
    )
}
