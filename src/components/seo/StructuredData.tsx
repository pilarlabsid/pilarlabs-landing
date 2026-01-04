import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/seo-config'

export function StructuredData() {
    // Organization Schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.company.name,
        legalName: siteConfig.company.legalName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/logo.png`,
        foundingDate: siteConfig.company.foundedYear,
        description: siteConfig.description,
        email: siteConfig.social.email,
        telephone: siteConfig.social.phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.company.address.street,
            addressLocality: siteConfig.company.address.city,
            addressRegion: siteConfig.company.address.region,
            postalCode: siteConfig.company.address.postalCode,
            addressCountry: siteConfig.company.address.country,
        },
        sameAs: [
            siteConfig.social.linkedin,
            siteConfig.social.instagram,
        ],
    }

    // LocalBusiness Schema
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.siteUrl}/#localbusiness`,
        name: siteConfig.company.name,
        image: `${siteConfig.siteUrl}/logo.png`,
        url: siteConfig.siteUrl,
        telephone: siteConfig.social.phone,
        email: siteConfig.social.email,
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.company.address.street,
            addressLocality: siteConfig.company.address.city,
            addressRegion: siteConfig.company.address.region,
            postalCode: siteConfig.company.address.postalCode,
            addressCountry: siteConfig.company.address.country,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -6.2088,
            longitude: 106.8456,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
        sameAs: [
            siteConfig.social.linkedin,
            siteConfig.social.instagram,
        ],
    }

    // WebSite Schema with Search Action
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.siteName,
        description: siteConfig.description,
        publisher: {
            '@id': `${siteConfig.siteUrl}/#organization`,
        },
        inLanguage: siteConfig.siteLanguage,
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    )
}
