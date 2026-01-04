import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Particle {
    id: number
    x: number
    y: number
    vx: number
    vy: number
}

export function InteractiveParticles() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [particles, setParticles] = useState<Particle[]>([])
    const mouseX = useMotionValue(-100)
    const mouseY = useMotionValue(-100)

    const springConfig = { damping: 20, stiffness: 100 }
    const smoothMouseX = useSpring(mouseX, springConfig)
    const smoothMouseY = useSpring(mouseY, springConfig)

    // Initialize particles
    useEffect(() => {
        const particleCount = 20
        const newParticles: Particle[] = []

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
            })
        }

        setParticles(newParticles)
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(-100)
        mouseY.set(-100)
    }

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {particles.map((particle) => (
                <InteractiveParticle
                    key={particle.id}
                    particle={particle}
                    mouseX={smoothMouseX}
                    mouseY={smoothMouseY}
                />
            ))}
        </div>
    )
}

interface InteractiveParticleProps {
    particle: Particle
    mouseX: any
    mouseY: any
}

function InteractiveParticle({ particle, mouseX, mouseY }: InteractiveParticleProps) {
    const [pos, setPos] = useState({ x: particle.x, y: particle.y })
    const animationFrameRef = useRef<number>()

    useEffect(() => {
        let currentX = particle.x
        let currentY = particle.y
        let currentVx = particle.vx
        let currentVy = particle.vy

        const animate = () => {
            // Always update position with drift
            currentX += currentVx * 0.1
            currentY += currentVy * 0.1

            // Bounce off edges
            if (currentX < 0 || currentX > 100) currentVx *= -1
            if (currentY < 0 || currentY > 100) currentVy *= -1

            // Constrain to bounds
            currentX = Math.max(0, Math.min(100, currentX))
            currentY = Math.max(0, Math.min(100, currentY))

            // Get mouse position
            const mx = mouseX.get()
            const my = mouseY.get()

            // Calculate magnetic pull if mouse is in view
            if (mx > 0 && my > 0) {
                const dx = mx - currentX
                const dy = my - currentY
                const distance = Math.sqrt(dx * dx + dy * dy)

                const maxDistance = 15  // Reduced from 25
                if (distance < maxDistance && distance > 0) {
                    const force = (maxDistance - distance) / maxDistance
                    const pullX = (dx / distance) * force * 0.3  // Reduced from 0.8
                    const pullY = (dy / distance) * force * 0.3

                    currentX += pullX
                    currentY += pullY
                }
            }

            setPos({ x: currentX, y: currentY })
            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animationFrameRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [mouseX, mouseY, particle])

    return (
        <motion.div
            className="absolute w-1 h-1 rounded-full bg-precision dark:bg-precision/50"
            style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
            }}
            animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                delay: particle.id * 0.1,
            }}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-precision/50 dark:bg-precision/20 rounded-full blur-sm scale-150" />
        </motion.div>
    )
}
