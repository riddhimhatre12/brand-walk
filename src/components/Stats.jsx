import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const statsData = [
  { value: 5000, suffix: '+', label: 'Products Delivered' },
  { value: 100, suffix: '+', label: 'Retail Partners' },
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
]

function StatCounter({ value, suffix, duration = 2 }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    if (start === end) return

    const totalMiliseconds = duration * 1000
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20)

    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime))
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={elementRef} className="text-4xl sm:text-5xl font-black font-serif text-accent tracking-tight">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden border-y border-[#d4b483]/10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,180,131,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 glass-panel border border-[#d4b483]/5 rounded-sm relative group hover:border-[#d4b483]/30 transition-colors duration-500"
            >
              <div className="mb-2">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#888888] group-hover:text-white transition-colors duration-300">
                {stat.label}
              </span>
              {/* Highlight top border decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent group-hover:w-[40%] transition-all duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
