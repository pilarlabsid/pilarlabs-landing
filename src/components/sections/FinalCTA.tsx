import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
    const { t } = useTranslation()

    return (
        <section className="py-32 relative border-t border-structural/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-foundation to-precision/5 -z-10" />
            <Container className="text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-calm mb-6 tracking-tight">
                    {t('finalCta.title')}
                </h2>
                <p className="text-lg text-calm/80 max-w-2xl mx-auto mb-10">
                    {t('finalCta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="h-14 px-8 text-lg" onClick={() => window.location.href = '/contact'}>
                        {t('finalCta.button')} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </Container>
        </section>
    )
}
