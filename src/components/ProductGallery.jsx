import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import sportsShoe from '../assets/sports_shoe.png'
import casualShoe from '../assets/casual_shoe.png'
import formalShoe from '../assets/formal_shoe.png'
import womenShoe from '../assets/women_shoe.png'
import kidsShoe from '../assets/kids_shoe.png'
import heroShoe from '../assets/hero_shoe.png'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const galleryProducts = [
  {
    id: 1,
    name: 'Aero Gold Sneaker',
    category: 'Trending',
    desc: 'Virar Wholesale Exclusive',
    img: heroShoe,
    priceRange: '₹1,200 - ₹1,800',
  },
  {
    id: 2,
    name: 'Impact Pro Run',
    category: 'Sports',
    desc: 'Lightweight Breathable Mesh',
    img: sportsShoe,
    priceRange: '₹950 - ₹1,400',
  },
  {
    id: 3,
    name: 'Royal Leather Oxford',
    category: 'Formal',
    desc: 'Handcrafted Polished Calfskin',
    img: formalShoe,
    priceRange: '₹1,400 - ₹2,100',
  },
  {
    id: 4,
    name: 'Suede Modern Loafer',
    category: 'Casual',
    desc: 'Slip-On Daily Wear',
    img: casualShoe,
    priceRange: '₹800 - ₹1,200',
  },
  {
    id: 5,
    name: 'Chic Stiletto Gold',
    category: 'Women',
    desc: 'High-Fashion Party Wear',
    img: womenShoe,
    priceRange: '₹1,100 - ₹1,650',
  },
  {
    id: 6,
    name: 'Trendy Active Kid',
    category: 'Kids',
    desc: 'Robust Velcro Running Shoe',
    img: kidsShoe,
    priceRange: '₹500 - ₹850',
  },
]

export default function ProductGallery() {
  const triggerRef = useRef(null)
  const pinRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const trigger = triggerRef.current
    const pin = pinRef.current
    const scroll = scrollRef.current

    if (!trigger || !pin || !scroll) return

    // Calculate the total horizontal scrolling width
    const getScrollWidth = () => {
      return scroll.scrollWidth - window.innerWidth
    }

    let ctx = gsap.context(() => {
      const scrollWidth = getScrollWidth()
      if (scrollWidth <= 0) return

      // Create horizontal scroll animation
      gsap.to(scroll, {
        x: () => -getScrollWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          pin: pin,
          scrub: 1.2,
          start: 'top top',
          end: () => `+=${getScrollWidth()}`,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])

  const handleRequestCatalog = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={triggerRef} className="relative z-20">
      {/* Pinned section wrapper */}
      <div ref={pinRef} className="h-screen w-full overflow-hidden bg-[#F8F8F8] flex flex-col justify-center relative">
        
        {/* Intro absolute title panel */}
        <div className="absolute top-16 left-6 md:left-12 max-w-lg text-left">
          <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block mb-1">
            EXPLORE THE SHOWCASE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary tracking-tight">
            Wholesale Catalog Gallery
          </h2>
          <span className="text-xs text-[#888888] font-light">
            [Scroll vertically to explore catalog horizontally]
          </span>
        </div>

        {/* Horizontal scroll track container */}
        <div className="overflow-hidden w-full flex items-center pt-24">
          <div
            ref={scrollRef}
            className="horizontal-scroll-container flex gap-12 px-6 md:px-12 items-center flex-nowrap"
          >
            {galleryProducts.map((product) => (
              <div
                key={product.id}
                className="w-[280px] sm:w-[360px] flex-shrink-0 bg-white border border-[#d4b483]/10 p-6 rounded-sm shadow-md group relative transition-all duration-500 hover:shadow-xl hover:border-accent/40"
              >
                {/* Category & Badge */}
                <div className="flex justify-between items-center mb-6">
                  <span className="px-2 py-0.5 bg-[#111111] text-accent text-[9px] uppercase tracking-widest font-semibold rounded-sm">
                    {product.category}
                  </span>
                  <span className="text-[10px] text-accent font-semibold uppercase tracking-wider">
                    {product.priceRange} <span className="text-[#888888] font-light">/ Bulk</span>
                  </span>
                </div>

                {/* Product Image */}
                <div className="h-[180px] sm:h-[240px] flex items-center justify-center relative overflow-hidden select-none mb-6">
                  {/* Subtle radial shadow behind the shoe */}
                  <div className="absolute w-[60%] aspect-square rounded-full bg-accent/5 blur-2xl pointer-events-none"></div>
                  
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-[85%] h-auto object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:translate-y-[-10px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                  />
                </div>

                {/* Info Text */}
                <div className="text-left">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-primary mb-1 uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-[#777777] text-xs font-light mb-4">
                    {product.desc}
                  </p>
                  
                  {/* Action */}
                  <button
                    onClick={handleRequestCatalog}
                    className="w-full py-2.5 bg-transparent group-hover:bg-[#111111] border border-[#111111]/10 group-hover:border-[#111111] group-hover:text-accent text-primary text-[10px] uppercase font-bold tracking-widest transition-all duration-500 flex items-center justify-center gap-1.5 rounded-sm"
                  >
                    Select for Quote
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            ))}

            {/* Final Call to Action Box */}
            <div className="w-[280px] sm:w-[360px] h-[380px] sm:h-[460px] flex-shrink-0 bg-gradient-to-br from-[#111111] to-[#251e18] p-8 rounded-sm shadow-md border border-[#d4b483]/10 flex flex-col justify-between text-left group">
              <div>
                <span className="text-[10px] text-accent font-semibold tracking-widest uppercase block mb-4">
                  READY TO ELEVATE?
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-snug">
                  Get Wholesale Access
                </h3>
                <p className="text-[#AAAAAA] text-xs font-light leading-relaxed">
                  Join 100+ partner retailers across Maharashtra receiving direct logistics, live stock tracking, and uncompromised quality.
                </p>
              </div>

              <div>
                <button
                  onClick={handleRequestCatalog}
                  className="w-full py-3 bg-accent hover:bg-white hover:text-primary transition-colors duration-500 text-primary text-xs uppercase font-bold tracking-widest rounded-sm text-center"
                >
                  Request Partnership
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
