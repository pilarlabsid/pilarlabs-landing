import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { BackToTop } from '@/components/ui/BackToTop'
import { Home } from '@/pages/Home'

// Lazy-load secondary pages to shrink initial homepage bundle size
const About = lazy(() => import('@/pages/About').then(m => ({ default: m.About })))
const Services = lazy(() => import('@/pages/Services').then(m => ({ default: m.Services })))
const Portfolio = lazy(() => import('@/pages/Portfolio').then(m => ({ default: m.Portfolio })))
const Internship = lazy(() => import('@/pages/Internship').then(m => ({ default: m.Internship })))
const Contact = lazy(() => import('@/pages/Contact').then(m => ({ default: m.Contact })))
const Privacy = lazy(() => import('@/pages/Privacy').then(m => ({ default: m.Privacy })))
const Terms = lazy(() => import('@/pages/Terms').then(m => ({ default: m.Terms })))

function PageFallback() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-precision border-t-transparent rounded-full animate-spin" />
        </div>
    )
}

function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <ScrollToTop />
            <Layout>
                <Suspense fallback={<PageFallback />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/internship" element={<Internship />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                    </Routes>
                </Suspense>
            </Layout>
            <BackToTop />
        </Router>
    )
}

export default App
