import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function AIPromptAnimation() {
    const { t } = useTranslation()
    const [currentPromptIndex, setCurrentPromptIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isTyping, setIsTyping] = useState(true)

    // Get prompts from translation
    const prompts = t('hero.aiPrompts', { returnObjects: true }) as string[]

    useEffect(() => {
        const currentPrompt = prompts[currentPromptIndex]

        if (isTyping) {
            // Typing effect
            if (displayedText.length < currentPrompt.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentPrompt.slice(0, displayedText.length + 1))
                }, 50) // Typing speed
                return () => clearTimeout(timeout)
            } else {
                // Finished typing, wait before deleting
                const timeout = setTimeout(() => {
                    setIsTyping(false)
                }, 2000) // Pause duration
                return () => clearTimeout(timeout)
            }
        } else {
            // Deleting effect
            if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1))
                }, 30) // Deleting speed
                return () => clearTimeout(timeout)
            } else {
                // Finished deleting, move to next prompt
                setCurrentPromptIndex((prev) => (prev + 1) % prompts.length)
                setIsTyping(true)
            }
        }
    }, [displayedText, isTyping, currentPromptIndex, prompts])

    return (
        <div className="relative">
            <div className="bg-structural/5 dark:bg-structural/10 border border-structural/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                {/* AI Prompt Header */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-calm/50">
                        {t('hero.aiPromptLabel')}
                    </span>
                </div>

                {/* Typing Animation */}
                <div className="min-h-[80px] md:min-h-[60px] flex items-center">
                    <p className="text-lg md:text-xl font-medium text-calm">
                        <span className="text-precision/70">&gt;</span>{' '}
                        <span>{displayedText}</span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-0.5 h-5 md:h-6 bg-precision ml-1 align-middle"
                        />
                    </p>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-precision/5 to-transparent rounded-2xl blur-xl -z-10" />
            </div>

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
