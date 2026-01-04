import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { VisibleGrid } from '@/components/ui/VisibleGrid'
import { StructuredData } from '@/components/seo/StructuredData'

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <HelmetProvider>
            <StructuredData />
            <div className="min-h-screen bg-foundation text-calm font-sans selection:bg-precision selection:text-white flex flex-col relative">
                <VisibleGrid />
                <Navbar />
                <main className="flex-1 w-full relative z-10 pt-20">
                    {children}
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    )
}
