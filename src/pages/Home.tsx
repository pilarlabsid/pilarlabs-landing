import { SEO } from '@/components/seo/SEO'
import { useTranslation } from 'react-i18next'
import { Hero } from '@/components/sections/Hero'
import { Positioning } from '@/components/sections/Positioning'
import { HowWeBuild } from '@/components/sections/HowWeBuild'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { Problem } from '@/components/sections/Problem'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { FourPillars } from '@/components/sections/FourPillars'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { FinalCTA } from '@/components/sections/FinalCTA'

export function Home() {
    const { t } = useTranslation()

    return (
        <>
            <SEO
                title={t('seo.home.title')}
                description={t('seo.home.description')}
                keywords={t('seo.home.keywords', { returnObjects: true }) as string[]}
                ogType="website"
                pathname="/"
            />
            <Hero />
            <Positioning />
            <Problem />
            <ServicesPreview />
            <TrustedBy />
            <FourPillars />
            <HowWeBuild />
            <ProcessTimeline />
            <FinalCTA />
        </>
    )
}
