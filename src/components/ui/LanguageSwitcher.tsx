import React from 'react'
import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'

export function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const [isOpen, setIsOpen] = React.useState(false)

    const currentLanguage = i18n.language || 'id'

    const languages = [
        { code: 'id', label: 'ID', name: 'Indonesia' },
        { code: 'en', label: 'EN', name: 'English' }
    ]

    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-structural/10 hover:bg-structural/20 text-calm transition-colors border border-structural/20"
                aria-label="Change language"
            >
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">
                    {languages.find(lang => lang.code === currentLanguage)?.label || 'ID'}
                </span>
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown */}
                    <div className="absolute right-0 mt-2 w-40 bg-foundation border border-structural/20 rounded-lg shadow-lg overflow-hidden z-50">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full px-4 py-3 text-left text-sm hover:bg-structural/10 transition-colors flex items-center justify-between ${currentLanguage === lang.code
                                        ? 'bg-precision/10 text-precision font-semibold'
                                        : 'text-calm'
                                    }`}
                            >
                                <span>{lang.name}</span>
                                <span className="text-xs font-bold uppercase">{lang.label}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
