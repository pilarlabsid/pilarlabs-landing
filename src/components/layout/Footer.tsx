import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react'

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="relative z-10 bg-foundation border-t border-structural/10 py-16 mt-auto">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-calm">Pilar<span className="text-precision">Labs</span></h3>
                        <p className="text-calm/70 text-sm leading-relaxed">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-structural/10 hover:bg-precision/20 flex items-center justify-center text-calm hover:text-precision transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-structural/10 hover:bg-precision/20 flex items-center justify-center text-calm hover:text-precision transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://wa.me/6281226027578"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-structural/10 hover:bg-precision/20 flex items-center justify-center text-calm hover:text-precision transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-calm mb-4">{t('footer.company.title')}</h4>
                        <ul className="space-y-3 text-sm text-calm/70">
                            <li><Link to="/about" className="hover:text-precision transition-colors">{t('footer.company.aboutUs')}</Link></li>
                            <li><Link to="/services" className="hover:text-precision transition-colors">{t('footer.company.services')}</Link></li>
                            <li><Link to="/portfolio" className="hover:text-precision transition-colors">{t('footer.company.caseStudies')}</Link></li>
                            <li><Link to="/internship" className="hover:text-precision transition-colors">{t('footer.company.internship')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-calm mb-4">{t('footer.contact.title')}</h4>
                        <ul className="space-y-3 text-sm text-calm/70">
                            <li className="flex items-start gap-2">
                                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-precision" />
                                <a href="mailto:hello@pilarlabs.id" className="hover:text-precision transition-colors">
                                    hello@pilarlabs.id
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-precision" />
                                <a href="tel:+6281226027578" className="hover:text-precision transition-colors">
                                    +62 812-2602-7578
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-precision" />
                                <span>{t('contactPage.info.location')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-calm mb-4">{t('footer.legal.title')}</h4>
                        <ul className="space-y-3 text-sm text-calm/70">
                            <li><Link to="/privacy" className="hover:text-precision transition-colors">{t('footer.legal.privacy')}</Link></li>
                            <li><Link to="/terms" className="hover:text-precision transition-colors">{t('footer.legal.terms')}</Link></li>
                            <li><Link to="/contact" className="hover:text-precision transition-colors">{t('footer.legal.getInTouch')}</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-structural/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-calm/60">
                    <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
                    <p>{t('footer.taglineBottom')}</p>
                </div>
            </Container>
        </footer>
    )
}
