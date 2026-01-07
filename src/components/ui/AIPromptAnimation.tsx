import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Pause, Play, TrendingUp, Zap } from 'lucide-react'

export function AIPromptAnimation() {
    const { t } = useTranslation()
    const [currentPromptIndex, setCurrentPromptIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [animationPhase, setAnimationPhase] = useState<'typing' | 'thinking' | 'response' | 'metrics' | 'deleting'>('typing')
    const [isPaused, setIsPaused] = useState(false)
    const [clientsHelped, setClientsHelped] = useState(50)

    // Get prompts and categories from translation
    const prompts = t('hero.aiPrompts', { returnObjects: true }) as Array<{
        text: string
        category: string
        response: string
        techStack: string[]
        metrics: Array<{ icon: string; text: string }>
    }>
    const currentPrompt = prompts[currentPromptIndex]

    // Realistic typing speed with variation
    const getTypingSpeed = () => {
        const char = displayedText[displayedText.length - 1]
        if (char === ',' || char === '.') return 200 // Pause at punctuation
        return Math.random() * 50 + 30 // 30-80ms variation
    }

    useEffect(() => {
        if (isPaused) return

        const promptText = currentPrompt.text

        if (animationPhase === 'typing') {
            // Typing effect
            if (displayedText.length < promptText.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(promptText.slice(0, displayedText.length + 1))
                }, getTypingSpeed())
                return () => clearTimeout(timeout)
            } else {
                // Finished typing, move to thinking phase
                const timeout = setTimeout(() => {
                    setAnimationPhase('thinking')
                }, 300)
                return () => clearTimeout(timeout)
            }
        } else if (animationPhase === 'thinking') {
            // Show thinking animation for 1.5s then move to response
            const timeout = setTimeout(() => {
                setAnimationPhase('response')
            }, 1500)
            return () => clearTimeout(timeout)
        } else if (animationPhase === 'response') {
            // Show response for 800ms then show metrics
            const timeout = setTimeout(() => {
                setAnimationPhase('metrics')
            }, 800)
            return () => clearTimeout(timeout)
        } else if (animationPhase === 'metrics') {
            // Show metrics for 2.5s then start deleting
            const timeout = setTimeout(() => {
                setAnimationPhase('deleting')
            }, 2500)
            return () => clearTimeout(timeout)
        } else if (animationPhase === 'deleting') {
            // Deleting effect
            if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1))
                }, 20) // Fast delete
                return () => clearTimeout(timeout)
            } else {
                // Finished deleting, move to next prompt
                setCurrentPromptIndex((prev) => (prev + 1) % prompts.length)
                setAnimationPhase('typing')
                setClientsHelped(prev => prev + 1)
            }
        }
    }, [displayedText, animationPhase, currentPromptIndex, prompts, isPaused, currentPrompt.text])

    const handleSkip = () => {
        setDisplayedText('')
        setAnimationPhase('typing')
        setCurrentPromptIndex((prev) => (prev + 1) % prompts.length)
    }

    return (
        <div className="relative w-full max-w-full">
            <motion.div
                animate={{
                    boxShadow: animationPhase === 'typing'
                        ? '0 0 30px rgba(5, 181, 240, 0.15), 0 0 60px rgba(5, 181, 240, 0.05)'
                        : '0 0 15px rgba(5, 181, 240, 0.05)'
                }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-structural/10 via-structural/5 to-transparent dark:from-structural/20 dark:via-structural/10 border border-structural/30 dark:border-structural/40 rounded-2xl md:rounded-3xl p-5 md:p-8 backdrop-blur-xl overflow-hidden min-h-[360px] md:min-h-[380px]"
            >
                {/* Animated gradient background */}
                <motion.div
                    animate={{
                        opacity: animationPhase === 'typing' ? 0.15 : 0.05,
                        scale: animationPhase === 'typing' ? 1.02 : 1
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-precision/10 via-precision/5 to-transparent"
                />

                {/* Decorative corner accent - Hidden on small mobile */}
                <div className="hidden sm:block absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-precision/10 to-transparent rounded-bl-full blur-2xl" />

                {/* AI Prompt Header */}
                <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex gap-1.5 md:gap-2">
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg shadow-red-500/50"
                            />
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/50"
                            />
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/50"
                            />
                        </div>
                        <div className="h-3 md:h-4 w-px bg-structural/20" />
                        <span className="text-[10px] md:text-[11px] font-medium text-calm/40 tracking-wider uppercase">Pilar Labs Console</span>
                    </div>

                    {/* Control buttons */}
                    <div className="flex items-center gap-1.5 md:gap-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsPaused(!isPaused)}
                            className="p-1.5 md:p-2 rounded-xl hover:bg-structural/20 dark:hover:bg-structural/30 transition-all duration-300 text-calm/60 hover:text-calm border border-transparent hover:border-structural/30"
                            aria-label={isPaused ? 'Resume' : 'Pause'}
                        >
                            {isPaused ? <Play className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Pause className="w-3.5 h-3.5 md:w-4 md:h-4" />}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSkip}
                            className="p-1.5 md:p-2 rounded-xl hover:bg-precision/10 transition-all duration-300 text-precision/60 hover:text-precision border border-transparent hover:border-precision/30"
                            aria-label="Skip"
                        >
                            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </motion.button>
                    </div>
                </div>

                {/* Category Tag */}
                <motion.div
                    key={currentPromptIndex}
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-semibold bg-gradient-to-r from-precision/15 to-precision/10 text-precision border border-precision/20 mb-3 md:mb-4 relative z-10 shadow-lg shadow-precision/10"
                >
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-precision animate-pulse" />
                    {currentPrompt.category}
                </motion.div>

                {/* Main Content Area */}
                <div className="flex flex-col relative z-10 space-y-3 md:space-y-4">
                    {/* Client Prompt */}
                    <div className="space-y-1.5 md:space-y-2">
                        <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-calm/40 font-medium tracking-wide">
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded bg-gradient-to-br from-calm/10 to-calm/5 flex items-center justify-center border border-calm/20">
                                <span className="text-[9px] md:text-[10px]">👤</span>
                            </div>
                            <span>CLIENT REQUEST</span>
                        </div>
                        <motion.div
                            className="text-base md:text-xl font-semibold text-calm leading-snug md:leading-relaxed pl-6 md:pl-7 min-h-[50px] md:min-h-[60px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <div className="inline">
                                <span className="text-precision/70 font-mono mr-2">&gt;</span>
                                <span className="bg-gradient-to-r from-calm to-calm/80 bg-clip-text break-words">{displayedText}</span>
                                {animationPhase === 'typing' && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-0.5 h-4 md:h-6 bg-gradient-to-b from-precision to-precision/50 ml-1 align-middle shadow-lg shadow-precision/50"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Processing Animation */}
                    {animationPhase === 'thinking' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 md:gap-3 pl-6 md:pl-7 py-2 rounded-xl bg-precision/5 border border-precision/10 w-fit md:w-auto md:pr-4"
                        >
                            <div className="flex gap-1">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.4, 1, 0.4]
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: "easeInOut"
                                        }}
                                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-br from-precision to-precision/70 shadow-lg shadow-precision/50"
                                    />
                                ))}
                            </div>
                            <span className="text-xs md:text-[13px] font-medium text-precision/80 italic">{t('hero.processingText')}</span>
                        </motion.div>
                    )}

                    {/* Pilar Labs Response */}
                    {(animationPhase === 'response' || animationPhase === 'metrics') && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-3 md:space-y-4"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-precision/60 font-medium tracking-wide">
                                    <div className="w-4 h-4 md:w-5 md:h-5 rounded bg-gradient-to-br from-precision/20 to-precision/10 flex items-center justify-center border border-precision/30">
                                        <span className="text-[9px] md:text-[10px]">🏗️</span>
                                    </div>
                                    <span>PILAR LABS SOLUTION</span>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3 pl-6 md:pl-7">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                        className="mt-1 flex-shrink-0"
                                    >
                                        <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/50">
                                            <span className="text-white text-[9px] md:text-[10px] font-bold">✓</span>
                                        </div>
                                    </motion.div>
                                    <p className="text-sm md:text-base font-medium text-calm/90 leading-relaxed">
                                        {currentPrompt.response}
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack Tags */}
                            {animationPhase === 'metrics' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-wrap gap-1.5 md:gap-2 pl-6 md:pl-7"
                                >
                                    {currentPrompt.techStack.map((tech, idx) => (
                                        <motion.span
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                            className="px-2 py-1 text-[10px] md:text-xs font-semibold bg-gradient-to-r from-structural/30 to-structural/20 text-calm/80 rounded-md border border-structural/40 shadow-sm"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            )}

                            {/* Success Metrics */}
                            {animationPhase === 'metrics' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap gap-x-3 gap-y-2 md:gap-4 pl-6 md:pl-7"
                                >
                                    {currentPrompt.metrics.map((metric, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + idx * 0.1 }}
                                            className="flex items-center gap-1.5 px-2 py-1 rounded bg-gradient-to-r from-calm/5 to-transparent border border-calm/10"
                                        >
                                            {metric.icon === 'trending' ? (
                                                <TrendingUp className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-500" />
                                            ) : (
                                                <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-500" />
                                            )}
                                            <span className="text-[10px] md:text-xs font-medium text-calm/70">{metric.text}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {/* Stats Counter & Progress - Combined for mobile space saving */}
            <div className="flex items-center justify-between mt-3 px-1">
                <div className="flex gap-1.5">
                    {prompts.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-1 rounded-full transition-all duration-500 ${index === currentPromptIndex
                                    ? 'w-6 md:w-8 bg-gradient-to-r from-precision to-precision/70 shadow-lg shadow-precision/50'
                                    : 'w-1 md:w-1.5 bg-structural/30'
                                }`}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-[10px] md:text-[11px] text-calm/40 font-mono bg-structural/10 px-2 py-0.5 rounded-full border border-structural/20"
                >
                    {t('hero.statsCounter', { count: clientsHelped })}
                </motion.div>
            </div>
        </div>
    )
}
