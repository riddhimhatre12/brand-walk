import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ShieldAlert, Sparkles } from 'lucide-react'

const partnerFeatures = [
  {
    title: 'Bulk Pricing',
    desc: 'Unlock industry-leading margins with tier-based volume discounts engineered for growth.',
  },
  {
    title: 'Consistent Inventory',
    desc: 'Direct manufacturing partnerships buffer our warehouses, safeguarding your stock continuity.',
  },
  {
    title: 'Trend-Based Collections',
    desc: 'Offer styles designed using consumer data, keeping your storefront fresh and appealing.',
  },
  {
    title: 'Dedicated Support',
    desc: 'Get personal account executives reachable via phone or WhatsApp for prompt order status.',
  },
]

export default function Wholesale() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    volume: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.businessName || !formData.phone) {
      alert('Please fill out the business name and contact number.')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ businessName: '', ownerName: '', phone: '', volume: '' })
    }, 4000)
  }

  return (
    <section id="wholesale" className="py-24 bg-gold-gradient relative overflow-hidden text-white border-b border-[#d4b483]/10">
      
      {/* Moving Particles/Lighting Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#d4b483]/5 blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#d4b483]/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text details */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 w-fit mb-4">
                <Sparkles size={11} className="text-accent" />
                <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                  WHOLESALE ACCOUNT REGISTRATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-[1.15] text-white tracking-tight mb-8">
                Grow Your Footwear Business With Brand Walk
              </h2>
            </motion.div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {partnerFeatures.map((feat, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={feat.title}
                  className="flex gap-4 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-white font-bold mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-[#AAAAAA] text-xs font-light leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Partnership Request Card */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-sm text-left border border-accent/20 shadow-2xl relative"
            >
              {/* Submission Overlay */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#111111]/95 z-20 flex flex-col items-center justify-center p-6 rounded-sm text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', damping: 12 }}
                      className="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent mb-6"
                    >
                      <Check size={32} />
                    </motion.div>
                    <h3 className="font-serif text-2xl text-white font-bold mb-2">Request Received</h3>
                    <p className="text-[#AAAAAA] text-sm font-light max-w-xs mb-4">
                      Our wholesale coordinator will review your profile and contact you on WhatsApp or phone within 2 hours.
                    </p>
                    <span className="text-[10px] text-accent font-semibold tracking-widest uppercase">
                      BRAND WALK WHOLESALE
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">Request Wholesale Access</h3>
              <p className="text-[#888888] text-xs font-light mb-6">
                Fill in the details below to receive our live inventory sheet and bulk quote discounts.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#AAAAAA] font-semibold mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-accent text-white px-4 py-3 text-xs outline-none transition-colors duration-300 rounded-sm"
                    placeholder="e.g. Virar Footwear Hub"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#AAAAAA] font-semibold mb-1">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-accent text-white px-4 py-3 text-xs outline-none transition-colors duration-300 rounded-sm"
                    placeholder="Owner's / Manager's Name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#AAAAAA] font-semibold mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-accent text-white px-4 py-3 text-xs outline-none transition-colors duration-300 rounded-sm"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#AAAAAA] font-semibold mb-1">
                    Estimated Monthly Volume
                  </label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full bg-[#1c1a17] border border-white/10 focus:border-accent text-white px-4 py-3 text-xs outline-none transition-colors duration-300 rounded-sm cursor-pointer"
                  >
                    <option value="" disabled>Select average order size</option>
                    <option value="50-100">50 - 100 Pairs</option>
                    <option value="100-500">100 - 500 Pairs</option>
                    <option value="500+">500+ Pairs / Month</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent hover:bg-[#c29f6b] text-primary transition-colors duration-500 font-bold uppercase tracking-widest text-xs rounded-sm mt-4 shadow-lg shadow-accent/10 cursor-pointer"
                >
                  Request Wholesale Pricing
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
