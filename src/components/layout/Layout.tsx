import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { VisibleGrid } from '@/components/ui/VisibleGrid'

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <HelmetProvider>
            <div className="min-h-screen bg-foundation text-calm font-sans selection:bg-precision selection:text-white flex flex-col relative">
                <VisibleGrid />
                <Navbar />
                <main className="flex-1 w-full relative z-10 pt-20">
                    {children}
                </main>
                <Footer />
            </div>
            <Analytics />
        </HelmetProvider>
    )
}
