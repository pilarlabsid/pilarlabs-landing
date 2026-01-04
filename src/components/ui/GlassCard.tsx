import React from 'react'
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "rounded-xl border border-structural/20 bg-foundation/70 backdrop-blur-md p-6",
                "shadow-xl shadow-black/20",
                className
            )}
            whileHover={hoverEffect ? { y: -5, transition: { duration: 0.3 } } : {}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
