import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import heroShoe from '../assets/hero_shoe.png'

export default function Hero() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const width = window.innerWidth
      const height = window.innerHeight
      // Normalize mouse coordinates to range [-0.5, 0.5]
      const x = (clientX / width) - 0.5
      const y = (clientY / height) - 0.5
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Parallax Scroll Effect
  const { scrollY } = useScroll()
  const yText = useTransform(scrollY, [0, 500], [0, 100])
  const yShoe = useTransform(scrollY, [0, 500], [0, -50])
  const opacityText = useTransform(scrollY, [0, 500], [1, 0])

  const handleScrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Heading word animation setup
  const sentence = "Where Fashion Meets Elegance"
  const words = sentence.split(" ")

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-gold-gradient flex items-center justify-center overflow-hidden pt-20 px-6 md:px-12"
    >
      {/* Luxury Background Glow Elements */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#d4b483]/10 luxury-glow animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#d4b483]/5 luxury-glow animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Subtle Noise / Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-30"></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content Column */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="lg:col-span-6 flex flex-col justify-center text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-[#d4b483]/20 w-fit mb-6"
          >
            <Sparkles size={12} className="text-accent" />
            <span className="text-xs uppercase tracking-widest text-[#d4b483] font-semibold">
              PREMIUM FOOTWEAR WHOLESALER
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-white font-serif mb-6">
            {words.map((word, index) => (
              <span key={index} className="inline-block overflow-hidden mr-3">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 + index * 0.1
                  }}
                  className={`inline-block ${word === "Elegance" ? "text-accent" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg font-serif text-accent/90 uppercase tracking-widest mb-4"
          >
            Partner Since 2021
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#AAAAAA] text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl mb-8"
          >
            Delivering stylish, durable, and trend-setting footwear collections for retailers across Maharashtra. Experience direct wholesale pricing, massive capacity, and premier logistics.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleScrollTo('#collections')}
              className="px-8 py-4 bg-accent hover:bg-[#c29f6b] text-primary font-bold rounded-sm tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/10"
            >
              Explore Collection
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => handleScrollTo('#wholesale')}
              className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 hover:border-accent text-white font-semibold rounded-sm tracking-widest uppercase text-xs transition-all duration-300"
            >
              Become a Partner
            </button>
          </motion.div>
        </motion.div>

        {/* Right Graphic Column */}
        <motion.div
          style={{ y: yShoe }}
          className="lg:col-span-6 flex justify-center items-center relative h-[400px] sm:h-[500px] lg:h-[600px] w-full"
        >
          {/* Circular Luxury Halo Effect */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.45, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-accent/20 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[80%] h-[80%] rounded-full border border-accent/10"></div>
          </motion.div>

          {/* Active Parallax Image Wrapper */}
          <motion.div
            style={{
              x: mousePosition.x * 40,
              y: mousePosition.y * 40,
              rotateX: mousePosition.y * -20,
              rotateY: mousePosition.x * 20,
            }}
            animate={{
              y: [0, -12, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-[85%] max-w-[420px] aspect-square flex items-center justify-center pointer-events-none"
          >
            {/* The Shoes Asset */}
            <img
              src={heroShoe}
              alt="Luxury Designer Sneakers"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(212,180,131,0.25)] select-none rotate-[-12deg]"
            />
          </motion.div>

          {/* Floating Callout UI Box (Awwwards Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              x: mousePosition.x * 20,
              y: mousePosition.y * 20,
            }}
            className="absolute bottom-10 right-4 sm:right-10 md:right-16 glass-card p-4 rounded-sm flex items-center gap-4 border-l-2 border-l-accent"
          >
            <div className="text-left">
              <span className="block text-[10px] text-accent tracking-widest font-semibold uppercase">Latest Drop</span>
              <span className="block font-serif text-sm font-bold text-white uppercase tracking-wider">Aero Gold Sneaker</span>
              <span className="block text-[9px] text-[#888] uppercase tracking-widest">Virar Wholesale Exclusive</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
        <span className="text-[10px] text-[#888888] tracking-widest uppercase mb-2">Scroll Down</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="w-[1.5px] h-6 bg-accent"
        ></motion.div>
      </div>
    </section>
  )
}
