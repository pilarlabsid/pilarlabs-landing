import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Pause, Play } from 'lucide-react'

export function AIPromptAnimation() {
    const { t } = useTranslation()
    const [currentPromptIndex, setCurrentPromptIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isTyping, setIsTyping] = useState(true)
    const [showResponse, setShowResponse] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [clientsHelped, setClientsHelped] = useState(50)

    // Get prompts and categories from translation
    const prompts = t('hero.aiPrompts', { returnObjects: true }) as Array<{ text: string; category: string }>
    const response = t('hero.aiResponse')

    // Realistic typing speed with variation
    const getTypingSpeed = () => {
        const char = displayedText[displayedText.length - 1]
        if (char === ',' || char === '.') return 200 // Pause at punctuation
        return Math.random() * 50 + 30 // 30-80ms variation
    }

    useEffect(() => {
        if (isPaused) return

        const currentPrompt = prompts[currentPromptIndex].text

        if (isTyping) {
            // Typing effect
            if (displayedText.length < currentPrompt.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentPrompt.slice(0, displayedText.length + 1))
                }, getTypingSpeed())
                return () => clearTimeout(timeout)
            } else {
                // Finished typing, show response
                const timeout = setTimeout(() => {
                    setShowResponse(true)
                }, 500)
                return () => clearTimeout(timeout)
            }
        } else {
            // Deleting effect
            if (showResponse) {
                // Wait before deleting response
                const timeout = setTimeout(() => {
                    setShowResponse(false)
                }, 1500)
                return () => clearTimeout(timeout)
            } else if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1))
                }, 20) // Fast delete
                return () => clearTimeout(timeout)
            } else {
                // Finished deleting, move to next prompt
                setCurrentPromptIndex((prev) => (prev + 1) % prompts.length)
                setIsTyping(true)
                // Increment clients helped counter
                setClientsHelped(prev => prev + 1)
            }
        }
    }, [displayedText, isTyping, currentPromptIndex, prompts, isPaused, showResponse])

    useEffect(() => {
        if (showResponse) {
            const timeout = setTimeout(() => {
                setIsTyping(false)
            }, 2000)
            return () => clearTimeout(timeout)
        }
    }, [showResponse])

    const handleSkip = () => {
        setDisplayedText('')
        setShowResponse(false)
        setIsTyping(true)
        setCurrentPromptIndex((prev) => (prev + 1) % prompts.length)
    }

    return (
        <div className="relative">
            <motion.div
                animate={{
                    boxShadow: isTyping && !showResponse
                        ? '0 0 30px rgba(5, 181, 240, 0.15)'
                        : '0 0 0px rgba(5, 181, 240, 0)'
                }}
                transition={{ duration: 0.5 }}
                className="bg-structural/5 dark:bg-structural/10 border border-structural/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden"
            >
                {/* Animated gradient background */}
                <motion.div
                    animate={{
                        opacity: isTyping && !showResponse ? 0.1 : 0
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
                    {prompts[currentPromptIndex].category}
                </motion.div>

                {/* Typing Animation */}
                <div className="min-h-[80px] md:min-h-[60px] flex items-center relative z-10">
                    <p className="text-lg md:text-xl font-medium text-calm">
                        <span className="text-precision/70">&gt;</span>{' '}
                        <span>{displayedText}</span>
                        {!showResponse && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-0.5 h-5 md:h-6 bg-precision ml-1 align-middle"
                            />
                        )}
                    </p>
                </div>

                {/* Response Animation */}
                {showResponse && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 flex items-center gap-2 text-sm text-precision relative z-10"
                    >
                        <span className="text-green-500">✓</span>
                        <span className="italic">{response}</span>
                        <ArrowRight className="w-4 h-4 animate-pulse" />
                    </motion.div>
                )}

                {/* Stats Counter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-4 right-6 text-xs text-calm/40 font-mono relative z-10"
                >
                    {t('hero.statsCounter', { count: clientsHelped })}
                </motion.div>
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
