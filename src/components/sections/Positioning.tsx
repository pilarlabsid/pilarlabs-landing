import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'

export function Positioning() {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-foundation border-b border-structural/10">
            <Container className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-calm mb-6">{t('positioning.title')}</h2>
                <p className="text-lg text-calm/80 max-w-3xl mx-auto leading-relaxed">
                    {t('positioning.description').split('<strong>').map((part, i) =>
                        i === 0 ? part : <React.Fragment key={i}><span className="text-precision font-semibold">{part.split('</strong>')[0]}</span>{part.split('</strong>')[1]}</React.Fragment>
                    )}
                </p>
            </Container>
        </section>
    )
}
