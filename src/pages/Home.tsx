import { SEO } from '@/components/seo/SEO'
import { useTranslation } from 'react-i18next'
import { pageSEO } from '@/config/seo-config'
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
    const seo = pageSEO.home
    return (
        <>
            <SEO
                title={t('seo.home')}
                description={seo.description}
                keywords={seo.keywords}
                ogImage={seo.ogImage}
                ogType="website"
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
