import React from 'react'
import { motion } from 'framer-motion'
import { Award, TrendingUp, Layers, DollarSign, Truck, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Every batch of footwear undergoes rigorous QA tests. We select premium grade leather, knit, and composite outsoles to guarantee premium durability.',
  },
  {
    icon: TrendingUp,
    title: 'Latest Trends',
    desc: 'Our design researchers actively track global runways and street styles. We launch brand new collections weekly so your business stays ahead.',
  },
  {
    icon: Layers,
    title: 'Bulk Orders',
    desc: 'Whether you need 500 pairs or 50,000 pairs, our production lines scale dynamically. We keep critical SKUs consistently stocked.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    desc: 'Direct-from-factory partnerships bypass intermediaries, providing you with high-quality shoes at competitive margins.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Equipped with dedicated logistics coordinators, we ship bulk cargo rapidly across Maharashtra, ensuring zero delivery bottlenecks.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Partner',
    desc: 'Operating since 2021, Brand Walk is built on integrity. We resolve logistical queries within hours, ensuring absolute reliability.',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden border-t border-[#d4b483]/10">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#d4b483]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#d4b483]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-2">
            WHY PARTNER WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight mb-4">
            Uncompromised Bulk Footwear Supply
          </h2>
          <p className="text-[#888888] font-light text-sm sm:text-base">
            We provide local retailers with the infrastructure, competitive pricing, and trending footwear designs required to grow their business.
          </p>
        </div>

        {/* Reason Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                variants={cardVariants}
                key={reason.title}
                className="relative overflow-hidden group p-8 rounded-sm bg-white/[0.02] border border-[#d4b483]/10 hover:bg-white/[0.04] hover:border-accent/50 transition-all duration-500 flex flex-col text-left justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-500">
                    <Icon size={22} />
                  </div>
                  {/* Card Title */}
                  <h3 className="font-serif text-lg font-bold text-white mb-3 tracking-wider">
                    {reason.title}
                  </h3>
                  {/* Card Desc */}
                  <p className="text-[#888888] font-light leading-relaxed text-xs sm:text-sm">
                    {reason.desc}
                  </p>
                </div>

                {/* Decorative Bottom Corner Glow */}
                <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-accent/5 blur-xl group-hover:bg-accent/10 transition-all duration-500"></div>
                {/* Micro golden hover border details */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4b483]/0 to-transparent group-hover:via-[#d4b483]/60 transition-all duration-700"></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
