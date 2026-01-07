import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Pause, Play } from 'lucide-react'

export function AIPromptAnimation() {
    const { t } = useTranslation()
    const [currentPromptIndex, setCurrentPromptIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [displayedResponse, setDisplayedResponse] = useState('')
    const [isTyping, setIsTyping] = useState(true)
    const [isResponseTyping, setIsResponseTyping] = useState(false)
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
                }, 2500)
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

    // Auto-trigger response after button shows
    useEffect(() => {
        if (showStartButton && !showResponse) {
            const timeout = setTimeout(() => {
                setShowResponse(true)
                setIsResponseTyping(true)
                setDisplayedResponse('')
            }, 1500) // Button visible for 1.5 seconds before response
            return () => clearTimeout(timeout)
        }
    }, [showStartButton, showResponse])

    // Response typing effect
    useEffect(() => {
        if (isResponseTyping && showResponse) {
            if (displayedResponse.length < currentResponse.length) {
                const timeout = setTimeout(() => {
                    setDisplayedResponse(currentResponse.slice(0, displayedResponse.length + 1))
                }, 30) // Fast typing for response
                return () => clearTimeout(timeout)
            } else {
                // Finished typing response
                setIsResponseTyping(false)
            }
        }
    }, [displayedResponse, isResponseTyping, currentResponse, showResponse])

    const handleSkip = () => {
        setDisplayedText('')
        setDisplayedResponse('')
        setShowResponse(false)
        setShowStartButton(false)
        setIsTyping(true)
        setIsResponseTyping(false)
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

                {/* Prompt Box - Like AI Chat Input */}
                <div className="relative z-10 space-y-3">
                    <div className="bg-structural/10 dark:bg-structural/20 border border-structural/20 rounded-xl p-4 min-h-[100px] flex items-center">
                        <div className="flex-1">
                            <p className="text-sm md:text-base text-calm leading-relaxed">
                                {displayedText}
                            </p>
                            {/* Typing Indicator */}
                            {isTyping && !showStartButton && (
                                <div className="flex items-center gap-1 mt-2">
                                    <motion.div
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="w-2 h-2 rounded-full bg-precision"
                                    />
                                    <motion.div
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                        className="w-2 h-2 rounded-full bg-precision"
                                    />
                                    <motion.div
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                                        className="w-2 h-2 rounded-full bg-precision"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Start Button - Outside Box */}
                    {showStartButton && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-end"
                        >
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-precision text-white dark:text-foundation rounded-lg shadow-lg">
                                <span className="text-sm font-semibold">{t('hero.startButton')}</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    )}

                    {/* Response Box - Below Button */}
                    {showResponse && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-precision/5 dark:bg-precision/10 border border-precision/20 rounded-xl p-4"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-precision/20 flex items-center justify-center">
                                    <span className="text-green-500 text-xs">✓</span>
                                </div>
                                <span className="text-xs font-semibold text-precision">Pilar Labs</span>
                            </div>
                            <p className="text-sm md:text-base text-calm leading-relaxed">
                                {displayedResponse}
                                {isResponseTyping && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-0.5 h-4 bg-precision ml-1 align-middle"
                                    />
                                )}
                            </p>
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
