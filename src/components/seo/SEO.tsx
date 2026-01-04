import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/seo-config'

interface SEOProps {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: string
    ogType?: 'website' | 'article' | 'profile'
    canonicalUrl?: string
    noindex?: boolean
}

export function SEO({
    title,
    description = siteConfig.description,
    keywords = siteConfig.keywords,
    ogImage = siteConfig.defaultOgImage,
    ogType = 'website',
    canonicalUrl,
    noindex = false,
}: SEOProps) {
    // Construct full title
    const fullTitle = title
        ? `${title} | ${siteConfig.siteName}`
        : siteConfig.defaultTitle

    // Construct full canonical URL
    const canonical = canonicalUrl || siteConfig.siteUrl

    // Construct full OG image URL
    const fullOgImage = ogImage.startsWith('http')
        ? ogImage
        : `${siteConfig.siteUrl}${ogImage}`

    // Keywords string
    const keywordsString = keywords.join(', ')

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
            {noindex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteConfig.siteName} />
            <meta property="og:locale" content={siteConfig.ogLanguage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* Language */}
            <meta httpEquiv="content-language" content={siteConfig.siteLanguage} />
            <link rel="alternate" hrefLang={siteConfig.siteLanguage} href={canonical} />
            <link rel="alternate" hrefLang="x-default" href={siteConfig.siteUrl} />
        </Helmet>
    )
}
