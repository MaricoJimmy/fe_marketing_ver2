import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalDataFlow from './components/GlobalDataFlow'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

import ProductPage from './pages/ProductPage'
import MiniUgatePage from './pages/MiniUgatePage'
import SolutionPage from './pages/SolutionPage'
import UseCasePage from './pages/UseCasePage'
import SustainabilityPage from './pages/SustainabilityPage'
import BlogPage from './pages/BlogPage'
import CareersPage from './pages/CareersPage'
import DemoPage from './pages/DemoPage'
import FreeTrial from './pages/FreeTrial'

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <GlobalDataFlow />
        <div className="sustainability-glow top-[-100px] right-[-100px]"></div>
        <div className="sustainability-glow bottom-[10%] left-[-200px]"></div>
        
        <Header />
        <main className="pt-[45px] relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/use-case" element={<UseCasePage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/product/miniugate" element={<MiniUgatePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/dung-thu" element={<FreeTrial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
