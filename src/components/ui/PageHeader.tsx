import { Container } from '@/components/layout/Container'
import { motion } from 'framer-motion'

interface PageHeaderProps {
    title: string
    description?: string
    badge?: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-structural/5 -z-10" />
            <Container>
                <div className="max-w-3xl">
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-precision uppercase bg-precision/10 rounded-full"
                        >
                            {badge}
                        </motion.div>
                    )}
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-calm mb-6 tracking-tight leading-tight"
                    >
                        {title}
                    </motion.h1>
                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-calm/80 leading-relaxed max-w-2xl"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            </Container>
        </section>
    )
}
