import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslation from '@/locales/en/translation.json'
import idTranslation from '@/locales/id/translation.json'

i18n
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Pass i18n instance to react-i18next
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            id: {
                translation: idTranslation
            }
        },
        fallbackLng: 'id', // Default language is Indonesian
        lng: 'id', // Initial language
        debug: false, // Set to true for debugging
        interpolation: {
            escapeValue: false // React already escapes values
        },
        detection: {
            order: ['localStorage', 'navigator'], // Check localStorage first, then browser language
            caches: ['localStorage'] // Cache the language selection in localStorage
        }
    })

export default i18n
