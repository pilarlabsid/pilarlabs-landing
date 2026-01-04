import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Initialize theme immediately
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark'
            // Apply immediately to prevent flash
            document.documentElement.classList.remove('light', 'dark')
            document.documentElement.classList.add(savedTheme)
            return savedTheme
        }
        return 'dark'
    })

    useEffect(() => {
        const root = document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-structural/10 text-calm transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    )
}
