import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { BackToTop } from '@/components/ui/BackToTop'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Services } from '@/pages/Services'
import { Contact } from '@/pages/Contact'
import { Portfolio } from '@/pages/Portfolio'
import { Internship } from '@/pages/Internship'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
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
            </Layout>
            <BackToTop />
        </Router>
    )
}

export default App
