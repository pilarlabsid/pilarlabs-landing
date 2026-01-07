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
    const [showStartButton, setShowStartButton] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [clientsHelped, setClientsHelped] = useState(50)

    // Get prompts and categories from translation
    const prompts = t('hero.aiPrompts', { returnObjects: true }) as Array<{ text: string; category: string; response: string }>
    const currentResponse = prompts[currentPromptIndex]?.response || ''

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
                // Finished typing, show Start button
                const timeout = setTimeout(() => {
                    setShowStartButton(true)
                }, 300)
                return () => clearTimeout(timeout)
            }
        } else {
            // Deleting effect
            if (showResponse) {
                // Wait before deleting response
                const timeout = setTimeout(() => {
                    setShowResponse(false)
                    setShowStartButton(false)
                }, 2000)
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
            }, 2500)
            return () => clearTimeout(timeout)
        }
    }, [showResponse])

    const handleStartClick = () => {
        setShowStartButton(false)
        setShowResponse(true)
    }

    const handleSkip = () => {
        setDisplayedText('')
        setShowResponse(false)
        setShowStartButton(false)
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

                {/* Chat Container */}
                <div className="space-y-3 relative z-10 min-h-[120px]">
                    {/* Client Message */}
                    <div className="flex justify-end">
                        <div className="max-w-[85%] bg-precision/10 rounded-2xl rounded-tr-sm px-4 py-3">
                            <p className="text-sm md:text-base font-medium text-calm">
                                {displayedText}
                                {isTyping && !showStartButton && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-0.5 h-4 bg-precision ml-1 align-middle"
                                    />
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Start Button */}
                    {showStartButton && !showResponse && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex justify-start"
                        >
                            <button
                                onClick={handleStartClick}
                                className="group flex items-center gap-2 px-4 py-2.5 bg-precision hover:bg-precision/90 text-white dark:text-foundation rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <span className="text-sm font-semibold">{t('hero.startButton')}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    )}

                    {/* Response Message */}
                    {showResponse && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                        >
                            <div className="max-w-[85%] bg-structural/20 dark:bg-structural/30 rounded-2xl rounded-tl-sm px-4 py-3">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-green-500 text-sm">✓</span>
                                    <span className="text-xs font-medium text-calm/60">Pilar Labs</span>
                                </div>
                                <p className="text-sm md:text-base text-calm">
                                    {currentResponse}
                                </p>
                            </div>
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
