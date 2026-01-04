import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { GlassCard } from '@/components/ui/GlassCard'
import { Box, Eye, TrendingUp, Zap } from 'lucide-react'

export function FourPillars() {
    const { t } = useTranslation()

    const pillars = [
        { icon: Box, key: 'foundation' },
        { icon: Eye, key: 'clarity' },
        { icon: TrendingUp, key: 'progress' },
        { icon: Zap, key: 'precision' }
    ]

    return (
        <section className="py-24 relative overflow-hidden">
            <Container>
                <div className="mb-16 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-calm">{t('pillars.title')}</h2>
                    <div className="h-1 w-20 bg-precision mt-4 rounded-full mx-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((p, i) => (
                        <GlassCard key={i} className="hover:bg-structural/10">
                            <div className="w-12 h-12 rounded-full bg-precision/20 flex items-center justify-center text-precision mb-4">
                                <p.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-calm mb-2">{t(`pillars.items.${p.key}.title`)}</h3>
                            <p className="text-sm text-calm/70">{t(`pillars.items.${p.key}.description`)}</p>
                        </GlassCard>
                    ))}
                </div>
            </Container>
        </section>
    )
}
