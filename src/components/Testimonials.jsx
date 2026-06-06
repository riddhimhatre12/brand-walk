import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Partnering with Brand Walk has transformed our footwear inventory. Their sports shoe collection sells out within days of arrival. The direct logistics to our Virar shops save us hours of work weekly.",
    author: "Rahul Verma",
    role: "Founder, Verma Shoes",
    location: "Virar, Maharashtra",
    rating: 5,
  },
  {
    quote: "The quality of leather Oxfords from their formal collection matches premium international brands at a fraction of the cost. Our margins have increased by 35% since we partnered with them in 2022.",
    author: "Anand Shah",
    role: "Proprietor, Shah Footwear",
    location: "Mumbai, Maharashtra",
    rating: 5,
  },
  {
    quote: "Their women's designer sandals are a huge hit in our boutiques across Pune. The bulk ordering system is extremely simple, and the customer service is outstanding.",
    author: "Priya Patil",
    role: "Design Director, Patil Collections",
    location: "Pune, Maharashtra",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [activeIdx])

  const handlePrev = () => {
    setDirection(-1)
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  // Slide variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    }),
  }

  return (
    <section id="testimonials" className="py-24 bg-[#F8F8F8] relative overflow-hidden border-t border-[#d4b483]/10">
      
      {/* Background graphic */}
      <div className="absolute top-1/2 left-12 w-[200px] h-[200px] rounded-full bg-[#d4b483]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-2">
            RETAILER VOICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary tracking-tight">
            Trusted by 100+ Partners
          </h2>
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              key={activeIdx}
              className="w-full bg-white border border-[#d4b483]/10 p-8 sm:p-12 rounded-sm shadow-md flex flex-col items-center text-center relative"
            >
              {/* Quote Mark */}
              <div className="text-accent/20 mb-6">
                <Quote size={48} className="rotate-180 fill-current" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-accent justify-center">
                {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="font-sans text-[#444444] text-sm sm:text-base font-light italic leading-relaxed max-w-2xl mb-8">
                "{testimonials[activeIdx].quote}"
              </p>

              {/* Author Profile */}
              <div>
                <h4 className="font-serif text-base font-bold text-primary tracking-wide uppercase">
                  {testimonials[activeIdx].author}
                </h4>
                <p className="text-[10px] text-accent font-semibold uppercase tracking-widest mt-1">
                  {testimonials[activeIdx].role} <span className="text-[#888888] font-light">| {testimonials[activeIdx].location}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 border border-[#111111]/10 hover:border-accent hover:text-accent text-primary flex items-center justify-center rounded-sm transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          
          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIdx ? 1 : -1)
                  setActiveIdx(idx)
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIdx ? 'w-6 bg-accent' : 'w-1.5 bg-[#111111]/10'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 border border-[#111111]/10 hover:border-accent hover:text-accent text-primary flex items-center justify-center rounded-sm transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}
