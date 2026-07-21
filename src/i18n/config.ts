import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import id_navbar from '@/locales/id/navbar.json'
import en_navbar from '@/locales/en/navbar.json'
import id_seo from '@/locales/id/seo.json'
import en_seo from '@/locales/en/seo.json'
import id_hero from '@/locales/id/hero.json'
import en_hero from '@/locales/en/hero.json'
import id_howWeBuild from '@/locales/id/howWeBuild.json'
import en_howWeBuild from '@/locales/en/howWeBuild.json'
import id_positioning from '@/locales/id/positioning.json'
import en_positioning from '@/locales/en/positioning.json'
import id_trustedBy from '@/locales/id/trustedBy.json'
import en_trustedBy from '@/locales/en/trustedBy.json'
import id_problem from '@/locales/id/problem.json'
import en_problem from '@/locales/en/problem.json'
import id_services from '@/locales/id/services.json'
import en_services from '@/locales/en/services.json'
import id_pillars from '@/locales/id/pillars.json'
import en_pillars from '@/locales/en/pillars.json'
import id_process from '@/locales/id/process.json'
import en_process from '@/locales/en/process.json'
import id_finalCta from '@/locales/id/finalCta.json'
import en_finalCta from '@/locales/en/finalCta.json'
import id_footer from '@/locales/id/footer.json'
import en_footer from '@/locales/en/footer.json'
import id_about from '@/locales/id/about.json'
import en_about from '@/locales/en/about.json'
import id_servicesPage from '@/locales/id/servicesPage.json'
import en_servicesPage from '@/locales/en/servicesPage.json'
import id_contactPage from '@/locales/id/contactPage.json'
import en_contactPage from '@/locales/en/contactPage.json'
import id_internship from '@/locales/id/internship.json'
import en_internship from '@/locales/en/internship.json'
import id_caseStudies from '@/locales/id/caseStudies.json'
import en_caseStudies from '@/locales/en/caseStudies.json'
import id_privacy from '@/locales/id/privacy.json'
import en_privacy from '@/locales/en/privacy.json'
import id_terms from '@/locales/id/terms.json'
import en_terms from '@/locales/en/terms.json'


const idTranslation = {
    navbar: id_navbar,
    seo: id_seo,
    hero: id_hero,
    howWeBuild: id_howWeBuild,
    positioning: id_positioning,
    trustedBy: id_trustedBy,
    problem: id_problem,
    services: id_services,
    pillars: id_pillars,
    process: id_process,
    finalCta: id_finalCta,
    footer: id_footer,
    about: id_about,
    servicesPage: id_servicesPage,
    contactPage: id_contactPage,
    internship: id_internship,
    caseStudies: id_caseStudies,
    privacy: id_privacy,
    terms: id_terms,
}


const enTranslation = {
    navbar: en_navbar,
    seo: en_seo,
    hero: en_hero,
    howWeBuild: en_howWeBuild,
    positioning: en_positioning,
    trustedBy: en_trustedBy,
    problem: en_problem,
    services: en_services,
    pillars: en_pillars,
    process: en_process,
    finalCta: en_finalCta,
    footer: en_footer,
    about: en_about,
    servicesPage: en_servicesPage,
    contactPage: en_contactPage,
    internship: en_internship,
    caseStudies: en_caseStudies,
    privacy: en_privacy,
    terms: en_terms,
}


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            id: { translation: idTranslation }
        },
        fallbackLng: 'id',
        lng: 'id',
        debug: false,
        interpolation: { escapeValue: false },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    })

export default i18n
