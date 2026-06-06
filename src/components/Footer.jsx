import React from 'react'
import { Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react'

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#111111] text-[#AAAAAA] pt-16 pb-8 border-t border-[#d4b483]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-16">
        
        {/* Col 1: About Logo */}
        <div>
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="inline-block mb-6 group">
            <span className="font-serif text-2xl font-bold tracking-[0.25em] text-white group-hover:text-accent transition-colors duration-300">
              BRAND<span className="text-accent group-hover:text-white transition-colors duration-300">WALK</span>
            </span>
          </a>
          <p className="text-xs font-light leading-relaxed text-[#888888] mb-6">
            Where Fashion Meets Elegance. The premier wholesale footwear distributor in Virar, Maharashtra. Delivering quality, trends, and supply chain reliability since 2021.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center transition-colors duration-300">
              <Instagram size={14} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center transition-colors duration-300">
              <Facebook size={14} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center transition-colors duration-300">
              <Linkedin size={14} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center transition-colors duration-300">
              <Twitter size={14} />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-6">
            Quick Navigation
          </h4>
          <ul className="space-y-3 text-xs font-light">
            <li>
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-accent transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-accent transition-colors duration-300">
                About Brand Walk
              </a>
            </li>
            <li>
              <a href="#collections" onClick={(e) => handleLinkClick(e, '#collections')} className="hover:text-accent transition-colors duration-300">
                Collections Catalog
              </a>
            </li>
            <li>
              <a href="#wholesale" onClick={(e) => handleLinkClick(e, '#wholesale')} className="hover:text-accent transition-colors duration-300">
                Wholesale Portal
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')} className="hover:text-accent transition-colors duration-300">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-accent transition-colors duration-300">
                Contact Address
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Categories */}
        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-6">
            Our Collections
          </h4>
          <ul className="space-y-3 text-xs font-light text-[#888888]">
            <li>
              <a href="#collections" onClick={(e) => handleLinkClick(e, '#collections')} className="hover:text-accent transition-colors duration-300">
                Sports Footwear
              </a>
            </li>
            <li>
              <a href="#collections" onClick={(e) => handleLinkClick(e, '#collections')} className="hover:text-accent transition-colors duration-300">
                Casual Loafers & Slip-ons
              </a>
            </li>
            <li>
              <a href="#collections" onClick={(e) => handleLinkClick(e, '#collections')} className="hover:text-accent transition-colors duration-300">
                Formal Leather Oxfords
              </a>
            </li>
            <li>
              <a href="#collections" onClick={(e) => handleLinkClick(e, '#collections')} className="hover:text-accent transition-colors duration-300">
                Women's Premium Heels
              </a>
            </li>
            <li>
              <a href="#collections" onClick={(e) => handleLinkClick(e, '#collections')} className="hover:text-accent transition-colors duration-300">
                Kids Active Sneakers
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Corporate Contact */}
        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-6">
            Corporate Office
          </h4>
          <p className="text-xs font-light leading-relaxed text-[#888888] mb-4">
            Shop No. 4, Ground Floor, Royal Arcade, Station Road, Virar West, Palghar, Maharashtra - 401303
          </p>
          <p className="text-xs font-light text-[#888888]">
            Phone: +91 88888 12345<br />
            Email: wholesale@brandwalk.in
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-[#666666]">
        <div>
          © 2026 Brand Walk. All Rights Reserved. Crafted for Retail Growth.
        </div>
        <div className="flex gap-6 items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-accent transition-colors">
            Privacy Policy
          </a>
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-accent transition-colors">
            Terms of Service
          </a>
          
          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="w-8 h-8 rounded-sm bg-accent/10 border border-accent/25 hover:bg-accent hover:text-primary flex items-center justify-center text-accent transition-colors duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
