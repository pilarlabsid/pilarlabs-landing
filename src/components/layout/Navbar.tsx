import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Menu } from 'lucide-react'

import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

export function Navbar() {
    const { t } = useTranslation()
    const location = useLocation()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    // Helper function to check if link is active
    const isActive = (path: string) => {
        return location.pathname === path
    }

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-foundation/80 backdrop-blur-md border-b border-structural/5' : 'bg-transparent border-b border-transparent'}`}>
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight text-calm">
                        Pilar<span className="text-precision">Labs</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors relative ${isActive('/')
                                ? 'text-precision'
                                : 'text-calm hover:text-precision'
                                }`}
                        >
                            {t('navbar.home')}
                            {isActive('/') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-precision" />}
                        </Link>
                        <Link
                            to="/about"
                            className={`text-sm font-medium transition-colors relative ${isActive('/about')
                                ? 'text-precision'
                                : 'text-calm hover:text-precision'
                                }`}
                        >
                            {t('navbar.about')}
                            {isActive('/about') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-precision" />}
                        </Link>
                        <Link
                            to="/services"
                            className={`text-sm font-medium transition-colors relative ${isActive('/services')
                                ? 'text-precision'
                                : 'text-calm hover:text-precision'
                                }`}
                        >
                            {t('navbar.services')}
                            {isActive('/services') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-precision" />}
                        </Link>
                        <Link
                            to="/portfolio"
                            className={`text-sm font-medium transition-colors relative ${isActive('/portfolio')
                                ? 'text-precision'
                                : 'text-calm hover:text-precision'
                                }`}
                        >
                            {t('navbar.caseStudies')}
                            {isActive('/portfolio') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-precision" />}
                        </Link>
                        <Link
                            to="/internship"
                            className={`text-sm font-medium transition-colors relative ${isActive('/internship')
                                ? 'text-precision'
                                : 'text-calm hover:text-precision'
                                }`}
                        >
                            {t('navbar.internship')}
                            {isActive('/internship') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-precision" />}
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-sm font-medium transition-colors relative ${isActive('/contact')
                                ? 'text-precision'
                                : 'text-calm hover:text-precision'
                                }`}
                        >
                            {t('navbar.contact')}
                            {isActive('/contact') && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-precision" />}
                        </Link>
                        <div className="pl-4 border-l border-structural/20 flex items-center gap-3">
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <button className="text-calm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-foundation border-b border-structural/20">
                    <Container className="py-4 flex flex-col gap-4">
                        <Link
                            to="/"
                            className={`text-sm font-medium ${isActive('/') ? 'text-precision font-semibold' : 'text-calm'
                                }`}
                        >
                            {t('navbar.home')}
                        </Link>
                        <Link
                            to="/about"
                            className={`text-sm font-medium ${isActive('/about') ? 'text-precision font-semibold' : 'text-calm'
                                }`}
                        >
                            {t('navbar.about')}
                        </Link>
                        <Link
                            to="/services"
                            className={`text-sm font-medium ${isActive('/services') ? 'text-precision font-semibold' : 'text-calm'
                                }`}
                        >
                            {t('navbar.services')}
                        </Link>
                        <Link
                            to="/portfolio"
                            className={`text-sm font-medium ${isActive('/portfolio') ? 'text-precision font-semibold' : 'text-calm'
                                }`}
                        >
                            {t('navbar.caseStudies')}
                        </Link>
                        <Link
                            to="/internship"
                            className={`text-sm font-medium ${isActive('/internship') ? 'text-precision font-semibold' : 'text-calm'
                                }`}
                        >
                            {t('navbar.internship')}
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-sm font-medium ${isActive('/contact') ? 'text-precision font-semibold' : 'text-calm'
                                }`}
                        >
                            {t('navbar.contact')}
                        </Link>
                        <Button className="w-full">{t('navbar.startProject')}</Button>
                    </Container>
                </div>
            )}
        </header>
    )
}
