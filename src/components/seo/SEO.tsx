import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/seo-config'

interface SEOProps {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: string
    ogType?: 'website' | 'article' | 'profile'
    canonicalUrl?: string
    pathname?: string
    noindex?: boolean
    structuredData?: Record<string, unknown>
}

export function SEO({
    title,
    description = siteConfig.description,
    keywords = siteConfig.keywords,
    ogImage = siteConfig.defaultOgImage,
    ogType = 'website',
    canonicalUrl,
    pathname,
    noindex = false,
    structuredData,
}: SEOProps) {
    // Construct full title
    const fullTitle = title
        ? `${title} | ${siteConfig.siteName}`
        : siteConfig.defaultTitle

    // Construct canonical URL — prefer explicit > pathname > domain root
    const canonical = canonicalUrl
        || (pathname ? `${siteConfig.siteUrl}${pathname}` : siteConfig.siteUrl)

    // Construct full OG image URL
    const fullOgImage = ogImage.startsWith('http')
        ? ogImage
        : `${siteConfig.siteUrl}${ogImage}`

    // Keywords string
    const keywordsString = keywords.join(', ')

    // Default Organization JSON-LD (on every page)
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.company.name,
        legalName: siteConfig.company.legalName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/favicon-color.png`,
        foundingDate: siteConfig.company.foundedYear,
        description: siteConfig.description,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.company.address.street,
            addressLocality: siteConfig.company.address.city,
            addressRegion: siteConfig.company.address.region,
            postalCode: siteConfig.company.address.postalCode,
            addressCountry: 'ID',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: siteConfig.social.phone,
                contactType: 'customer service',
                availableLanguage: ['Indonesian', 'English'],
            },
        ],
        sameAs: [
            siteConfig.social.linkedin,
            siteConfig.social.instagram,
        ],
    }

    // WebSite JSON-LD (for sitelinks searchbox + breadcrumbs)
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        inLanguage: siteConfig.siteLanguage,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.siteUrl}/?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    }

    // LocalBusiness Schema
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.siteUrl}/#localbusiness`,
        name: siteConfig.company.name,
        image: `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`,
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
            addressCountry: 'ID',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -6.2607,
            longitude: 106.8106,
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

    // Merge custom structured data if provided
    const finalStructuredData = structuredData ?? organizationSchema

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywordsString} />
            <meta name="author" content={siteConfig.author} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Robots */}
            <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'} />

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:image:width" content={siteConfig.ogImageWidth} />
            <meta property="og:image:height" content={siteConfig.ogImageHeight} />
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteConfig.siteName} />
            <meta property="og:locale" content={siteConfig.ogLanguage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />
            <meta name="twitter:image:alt" content={fullTitle} />

            {/* Language & hreflang */}
            <meta httpEquiv="content-language" content={siteConfig.siteLanguage} />
            <link rel="alternate" hrefLang="id" href={canonical} />
            <link rel="alternate" hrefLang="x-default" href={siteConfig.siteUrl} />

            {/* Structured Data — Organization */}
            <script type="application/ld+json">
                {JSON.stringify(finalStructuredData)}
            </script>

            {/* Structured Data — LocalBusiness */}
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>

            {/* Structured Data — WebSite */}
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>

            {/* Structured Data — Sitelinks / Navigation */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    'itemListElement': [
                        {
                            '@type': 'SiteNavigationElement',
                            'position': 1,
                            'name': 'Layanan (Services)',
                            'description': 'Layanan web development, AI, dan WebGIS dari Pilar Labs.',
                            'url': `${siteConfig.siteUrl}/services`
                        },
                        {
                            '@type': 'SiteNavigationElement',
                            'position': 2,
                            'name': 'Portofolio',
                            'description': 'Lihat hasil karya dan proyek digital dari Pilar Labs.',
                            'url': `${siteConfig.siteUrl}/portfolio`
                        },
                        {
                            '@type': 'SiteNavigationElement',
                            'position': 3,
                            'name': 'Internship Program',
                            'description': 'Program magang untuk mahasiswa dan fresh graduate IT.',
                            'url': `${siteConfig.siteUrl}/internship`
                        },
                        {
                            '@type': 'SiteNavigationElement',
                            'position': 4,
                            'name': 'About Us',
                            'description': 'Pelajari visi, misi, dan tim di balik Pilar Labs.',
                            'url': `${siteConfig.siteUrl}/about`
                        }
                    ]
                })}
            </script>
        </Helmet>
    )
}
