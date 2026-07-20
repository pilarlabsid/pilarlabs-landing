import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Clock, Share2, Coins, Hourglass, EyeOff, MapPin, Cpu, AlertTriangle } from 'lucide-react'

export function Problem() {
    const { t } = useTranslation()

    const col1Items = t('problem.column1.items', { returnObjects: true }) as string[]
    const col2Items = t('problem.column2.items', { returnObjects: true }) as string[]

    const col1Icons = [Clock, Share2, Coins, Hourglass]
    const col2Icons = [EyeOff, MapPin, Cpu]

    return (
        <section className="py-24 bg-structural/5">
            <Container>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold uppercase tracking-wider mb-4">
                        {t('problem.title')}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-calm mb-4">
                        {t('problem.title')}
                    </h2>
                    <p className="text-base md:text-lg text-calm/70 leading-relaxed">
                        {t('problem.subtitle')}
                    </p>
                    <div className="h-1 w-20 bg-red-400 mt-6 rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Column 1 - Kebocoran Waktu & Biaya */}
                    <div className="p-8 rounded-2xl bg-foundation border border-red-500/10 hover:border-red-500/20 shadow-sm transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-calm">
                                {t('problem.column1.title')}
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {col1Items.map((item, idx) => {
                                const IconComp = col1Icons[idx] || AlertTriangle
                                return (
                                    <li key={idx} className="flex gap-3 text-calm/80 text-sm md:text-base leading-relaxed">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/5 flex items-center justify-center mt-1 text-red-400">
                                            <IconComp className="w-4 h-4" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Column 2 - Kebutaan Arah & Kehilangan Momentum */}
                    <div className="p-8 rounded-2xl bg-foundation border border-red-500/10 hover:border-red-500/20 shadow-sm transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-calm">
                                {t('problem.column2.title')}
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {col2Items.map((item, idx) => {
                                const IconComp = col2Icons[idx] || AlertTriangle
                                return (
                                    <li key={idx} className="flex gap-3 text-calm/80 text-sm md:text-base leading-relaxed">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/5 flex items-center justify-center mt-1 text-red-400">
                                            <IconComp className="w-4 h-4" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}
