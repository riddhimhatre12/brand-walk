import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Collections from './components/Collections'
import WhyChooseUs from './components/WhyChooseUs'
import ProductGallery from './components/ProductGallery'
import Wholesale from './components/Wholesale'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial asset loading/initialization
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Premium Preloader Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center"
          >
            <div className="relative overflow-hidden mb-4">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="block font-serif text-4xl sm:text-5xl font-bold tracking-[0.3em] text-gold-gradient"
              >
                BRAND WALK
              </motion.span>
            </div>
            
            <div className="w-[120px] h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[40px] h-full bg-accent"
              ></motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[9px] uppercase tracking-widest text-[#888888] mt-4 font-semibold"
            >
              Where Fashion Meets Elegance
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Wrapper */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="min-h-screen flex flex-col w-full overflow-hidden"
        >
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Stats />
            <About />
            <Collections />
            <WhyChooseUs />
            <ProductGallery />
            <Wholesale />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
