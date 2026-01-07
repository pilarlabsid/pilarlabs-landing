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
        <div className="relative">
            <motion.div
                animate={{
                    boxShadow: animationPhase === 'typing'
                        ? '0 0 30px rgba(5, 181, 240, 0.15)'
                        : '0 0 0px rgba(5, 181, 240, 0)'
                }}
                transition={{ duration: 0.5 }}
                className="bg-structural/5 dark:bg-structural/10 border border-structural/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden"
            >
                {/* Animated gradient background */}
                <motion.div
                    animate={{
                        opacity: animationPhase === 'typing' ? 0.1 : 0
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-precision/10 via-transparent to-precision/10"
                />

                {/* AI Prompt Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                    </div>

                    {/* Control buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className="p-1.5 rounded-lg hover:bg-structural/10 transition-colors text-calm/50 hover:text-calm"
                            aria-label={isPaused ? 'Resume' : 'Pause'}
                        >
                            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                        </button>
                        <button
                            onClick={handleSkip}
                            className="p-1.5 rounded-lg hover:bg-structural/10 transition-colors text-calm/50 hover:text-calm"
                            aria-label="Skip"
                        >
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* Category Tag */}
                <motion.div
                    key={currentPromptIndex}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-2 py-1 rounded text-xs font-medium bg-precision/10 text-precision mb-3 relative z-10"
                >
                    {currentPrompt.category}
                </motion.div>

                {/* Typing Animation */}
                <div className="min-h-[140px] md:min-h-[120px] flex flex-col justify-center relative z-10 space-y-3">
                    <p className="text-lg md:text-xl font-medium text-calm">
                        <span className="text-precision/70">&gt;</span>{' '}
                        <span>{displayedText}</span>
                        {animationPhase === 'typing' && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-0.5 h-5 md:h-6 bg-precision ml-1 align-middle"
                            />
                        )}
                    </p>

                    {/* Processing Animation */}
                    {animationPhase === 'thinking' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2 text-calm/50"
                        >
                            <div className="flex gap-1">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }}
                                        className="w-2 h-2 rounded-full bg-precision"
                                    />
                                ))}
                            </div>
                            <span className="text-sm italic">Pilar Labs processing...</span>
                        </motion.div>
                    )}

                    {/* Response Animation */}
                    {(animationPhase === 'response' || animationPhase === 'metrics') && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-3"
                        >
                            <div className="flex items-center gap-2 text-sm text-precision">
                                <span className="text-green-500">✓</span>
                                <span className="italic">{currentPrompt.response}</span>
                            </div>

                            {/* Tech Stack Tags */}
                            {animationPhase === 'metrics' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {currentPrompt.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs bg-structural/20 text-calm/70 rounded border border-structural/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </motion.div>
                            )}

                            {/* Success Metrics */}
                            {animationPhase === 'metrics' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap gap-3 text-xs"
                                >
                                    {currentPrompt.metrics.map((metric, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 text-calm/60">
                                            {metric.icon === 'trending' ? (
                                                <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                                            ) : (
                                                <Zap className="w-3.5 h-3.5 text-yellow-500" />
                                            )}
                                            <span>{metric.text}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {/* Stats Counter - Outside main container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-2 text-right text-xs text-calm/40 font-mono"
            >
                {t('hero.statsCounter', { count: clientsHelped })}
            </motion.div>

            {/* Progress indicator */}
            <div className="flex gap-2 mt-4 justify-center">
                {prompts.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${index === currentPromptIndex
                            ? 'w-8 bg-precision'
                            : 'w-1 bg-structural/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
