import { useEffect } from 'react'
import { motion, useMotionTemplate, useSpring, useMotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

export const Spotlight = ({ className }: { className?: string }) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Spring physics for smooth movement
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    // Auto-move for ambient effect when idle
    useEffect(() => {
        const timer = setInterval(() => {
            if (mouseX.get() === 0 && mouseY.get() === 0) {
                const time = Date.now() / 2000;
                mouseX.set(window.innerWidth / 2 + Math.cos(time) * 200)
                mouseY.set(window.innerHeight / 2 + Math.sin(time) * 100)
            }
        }, 50)
        return () => clearInterval(timer)
    }, [])

    return (
        <div
            className={cn("absolute inset-0 overflow-hidden pointer-events-auto", className)}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${springX}px ${springY}px,
              rgba(61, 90, 128, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            {/* Ambient layer that is always visible */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-30"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              800px circle at ${springX}px ${springY}px,
              rgba(152, 193, 217, 0.1),
              transparent 80%
            )
          `,
                }}
            />
        </div>
    )
}
