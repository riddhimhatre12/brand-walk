import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import sportsShoe from '../assets/sports_shoe.png'
import casualShoe from '../assets/casual_shoe.png'
import formalShoe from '../assets/formal_shoe.png'
import womenShoe from '../assets/women_shoe.png'
import kidsShoe from '../assets/kids_shoe.png'

const collections = [
  {
    name: 'Sports Shoes',
    tagline: 'High-Performance Athletics',
    desc: 'Lightweight design, high stability, and ultimate flexibility built for peak performance.',
    img: sportsShoe,
    bgClass: 'bg-gradient-to-br from-[#111111] to-[#251e18]',
    size: 'lg:col-span-2 lg:row-span-1',
    lightText: true,
  },
  {
    name: 'Casual Shoes',
    tagline: 'Effortless Modern Style',
    desc: 'Versatile loafers, slip-ons, and canvas shoes blending everyday style with maximum comfort.',
    img: casualShoe,
    bgClass: 'bg-[#FFFFFF]',
    size: 'lg:col-span-1 lg:row-span-1',
    lightText: false,
  },
  {
    name: 'Formal Shoes',
    tagline: 'Handcrafted Heritage Oxford',
    desc: 'Polished calfskin leather, hand-stitched detailing, and premium comfort for the boardroom.',
    img: formalShoe,
    bgClass: 'bg-[#FFFFFF]',
    size: 'lg:col-span-1 lg:row-span-1',
    lightText: false,
  },
  {
    name: "Women's Collection",
    tagline: 'High Fashion & Elegance',
    desc: 'Sensational designer heels, chic sandals, and everyday flats curated for high-fashion boutique retailers.',
    img: womenShoe,
    bgClass: 'bg-gradient-to-br from-[#1c1a17] to-[#111111]',
    size: 'lg:col-span-1 lg:row-span-1',
    lightText: true,
  },
  {
    name: 'Kids Collection',
    tagline: 'Playful Durability',
    desc: 'Comfortable, easy-to-wear sneakers and shoes crafted to endure active play.',
    img: kidsShoe,
    bgClass: 'bg-[#FFFFFF]',
    size: 'lg:col-span-1 lg:row-span-1',
    lightText: false,
  },
]

export default function Collections() {
  const handleScrollToContact = () => {
    const contact = document.querySelector('#contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="collections" className="py-24 bg-[#F8F8F8] border-t border-[#d4b483]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-2">
            CURATED RANGES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary tracking-tight mb-4">
            The Featured Collections
          </h2>
          <p className="text-[#666666] font-light text-sm sm:text-base">
            Explore our diverse wholesale portfolio. We offer bulk retailers the latest trends with certified premium quality and secure stock supply.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              key={item.name}
              className={`relative overflow-hidden rounded-sm group flex flex-col justify-between p-8 min-h-[360px] shadow-sm hover:shadow-xl transition-all duration-500 border border-[#d4b483]/10 ${item.bgClass} ${item.size}`}
            >
              {/* Card Content Top */}
              <div className="relative z-10 text-left">
                <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2">
                  {item.tagline}
                </span>
                <h3 className={`text-xl font-bold font-serif mb-3 ${item.lightText ? 'text-white' : 'text-primary'}`}>
                  {item.name}
                </h3>
                <p className={`text-xs font-light leading-relaxed max-w-md ${item.lightText ? 'text-[#AAAAAA]' : 'text-[#666666]'}`}>
                  {item.desc}
                </p>
              </div>

              {/* Shoe Image (Centered/Positioned dynamically) */}
              <div className="absolute inset-0 flex items-end justify-center pointer-events-none p-6 pb-4 overflow-hidden select-none">
                <motion.img
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  src={item.img}
                  alt={item.name}
                  className="w-[65%] max-w-[200px] h-auto object-contain transition-transform duration-700 group-hover:scale-115 group-hover:rotate-[5deg]"
                />
              </div>

              {/* Luxury Gold/Black Gradient Overlay (Reveals on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d4b483]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Action Button Bottom Left */}
              <div className="relative z-10 text-left pt-24">
                <button
                  onClick={handleScrollToContact}
                  className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 ${
                    item.lightText ? 'text-white hover:text-accent' : 'text-primary hover:text-accent'
                  }`}
                >
                  Request Catalog
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
