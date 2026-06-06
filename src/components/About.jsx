import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Eye, Target } from 'lucide-react'
import formalShoe from '../assets/formal_shoe.png'
import casualShoe from '../assets/casual_shoe.png'
import sportsShoe from '../assets/sports_shoe.png'

export default function About() {
  const containerRef = useRef(null)

  // Setup scroll-linked transformations for the image collage items
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const yImage1 = useTransform(scrollYProgress, [0, 1], [-20, 50])
  const yImage2 = useTransform(scrollYProgress, [0, 1], [30, -60])
  const yImage3 = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 bg-[#F8F8F8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Overlapping Image Collage */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] w-full">
            
            {/* Background Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>

            {/* Collage Image 1: Sports (Top Left) */}
            <motion.div
              style={{ y: yImage1 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-4 w-[50%] aspect-square bg-white border border-[#d4b483]/10 p-4 rounded-sm shadow-xl flex items-center justify-center group"
            >
              <img
                src={sportsShoe}
                alt="Premium sports sneakers"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-accent text-primary text-[8px] tracking-widest uppercase font-semibold">
                ACTIVE
              </div>
            </motion.div>

            {/* Collage Image 2: Formal (Bottom Center) */}
            <motion.div
              style={{ y: yImage2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-4 left-[20%] w-[60%] aspect-video bg-[#111111] p-4 rounded-sm shadow-2xl flex items-center justify-center group z-10"
            >
              <img
                src={formalShoe}
                alt="Luxury Leather Oxford Dress Shoes"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 select-none rotate-[-6deg]"
              />
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-accent text-primary text-[8px] tracking-widest uppercase font-semibold">
                CRAFTED
              </div>
            </motion.div>

            {/* Collage Image 3: Casual (Top Right) */}
            <motion.div
              style={{ y: yImage3 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-12 right-0 w-[45%] aspect-square bg-white border border-[#d4b483]/10 p-4 rounded-sm shadow-lg flex items-center justify-center group"
            >
              <img
                src={casualShoe}
                alt="Premium Men's Loafers"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-accent text-primary text-[8px] tracking-widest uppercase font-semibold">
                TREND
              </div>
            </motion.div>

          </div>

          {/* Right Side: Company Story & Cards */}
          <div className="lg:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Small Header */}
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-2">
                ESTABLISHED IN 2021
              </span>
              
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#111111] tracking-tight leading-[1.2] mb-6">
                Where Fashion Meets Elegance
              </h2>

              {/* Story Description */}
              <p className="text-[#555555] font-light leading-relaxed mb-6 text-sm sm:text-base">
                Brand Walk is the premier shoe wholesaler in Virar, Maharashtra. Since 2021, we have dedicated ourselves to delivering premium, high-quality, and trendy footwear collections to retailers, boutiques, and large businesses.
              </p>
              <p className="text-[#555555] font-light leading-relaxed mb-10 text-sm sm:text-base">
                Our operations focus heavily on ensuring a reliable wholesale supply of the latest sports footwear, classy formals, and trendy casual shoes at competitive bulk pricing. By bridging the gap between top manufacturers and businesses, we keep your inventory filled with high-demand models.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 bg-white border border-[#d4b483]/10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                  <Target size={18} />
                </div>
                <h4 className="font-serif text-base font-bold text-primary mb-2">Our Mission</h4>
                <p className="text-[#666666] text-xs font-light leading-relaxed">
                  To empower footwear retailers by providing access to the latest trends, guaranteed premium quality, and consistent, reliable bulk supply.
                </p>
                <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-300"></div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-white border border-[#d4b483]/10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                  <Eye size={18} />
                </div>
                <h4 className="font-serif text-base font-bold text-primary mb-2">Our Vision</h4>
                <p className="text-[#666666] text-xs font-light leading-relaxed">
                  To become Maharashtra's benchmark for footwear wholesale, bridging state-of-the-art designs with absolute customer satisfaction.
                </p>
                <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-300"></div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
