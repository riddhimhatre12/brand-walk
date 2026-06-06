import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Collections', href: '#collections' },
  { name: 'Wholesale', href: '#wholesale' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-[#111111]/85 backdrop-blur-md border-b border-[#d4b483]/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-accent">
            BRAND<span className="text-accent group-hover:text-white transition-colors duration-300">WALK</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-2 text-sm uppercase tracking-widest text-[#CCCCCC] hover:text-white transition-colors duration-300 group text-[11px]"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#wholesale"
            onClick={(e) => handleLinkClick(e, '#wholesale')}
            className="px-6 py-2.5 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500 rounded-sm text-xs uppercase tracking-widest font-semibold flex items-center gap-2"
          >
            <ShoppingBag size={14} />
            Partner Portal
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-accent transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden w-full bg-[#111111]/95 backdrop-blur-lg border-b border-[#d4b483]/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg uppercase tracking-widest text-[#CCCCCC] hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="#wholesale"
                onClick={(e) => handleLinkClick(e, '#wholesale')}
                className="w-full text-center px-6 py-3 bg-accent text-primary transition-colors rounded-sm text-sm uppercase tracking-widest font-bold"
              >
                Become a Partner
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
