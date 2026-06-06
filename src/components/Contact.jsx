import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)
    // Simulate API request
    setTimeout(() => {
      setIsSending(false)
      setIsSent(true)
      setFormData({ name: '', businessName: '', email: '', phone: '', message: '' })
      setTimeout(() => setIsSent(false), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-[#111111] text-white relative overflow-hidden border-t border-[#d4b483]/10">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4b483]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-[#d4b483]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-2">
            CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight mb-4">
            Contact Our Virar Headquarters
          </h2>
          <p className="text-[#888888] font-light text-sm sm:text-base">
            Inquire about pricing catalogues, sample batches, custom designs, or logistical shipping schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Premium Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-sm border border-accent/10 relative"
            >
              {/* Sent Overlay */}
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#111111]/95 z-20 flex flex-col items-center justify-center p-6 rounded-sm text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-14 h-14 rounded-full bg-accent/25 border border-accent flex items-center justify-center text-accent mb-4"
                    >
                      <Check size={28} />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">Message Transmitted</h3>
                    <p className="text-[#888888] text-xs max-w-xs mb-4">
                      Thank you for contacting Brand Walk. Our Virar customer representative will reply to your email or WhatsApp shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#888888] mb-2 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-accent text-white px-4 py-3 text-xs outline-none transition-colors duration-300 rounded-sm"
                      placeholder="e.g. Anand Shah"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#888888] mb-2 font-semibold">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-accent text-white px-4 py-3 text-xs outline-none transition-colors duration-300 rounded-sm"
                      placeholder="e.g. Shah Footwear Store"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#888888] mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-accent text-white px-4 py-3 text-xs outline-none transition-colors duration-300 rounded-sm"
                      placeholder="e.g. mail@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#888888] mb-2 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-accent text-white px-4 py-3 text-xs outline-none transition-colors duration-300 rounded-sm"
                      placeholder="e.g. +91 99887 76655"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#888888] mb-2 font-semibold">
                    Inquiry Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-accent text-white px-4 py-3 text-xs outline-none transition-colors duration-300 rounded-sm resize-none"
                    placeholder="Specify footwear types, estimated order sizes, or distribution questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 bg-accent hover:bg-[#c29f6b] text-primary transition-colors duration-500 font-bold uppercase tracking-widest text-xs rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-accent/15 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    'Transmitting Inquiry...'
                  ) : (
                    <>
                      Transmit Inquiry Message
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right: Map Placeholder + Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-left"
            >
              {/* Map container */}
              <div className="relative w-full h-[220px] rounded-sm overflow-hidden border border-accent/25 group shadow-xl">
                {/* Custom simulated luxury map overlay */}
                <div className="absolute inset-0 bg-[#1e1a15] flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="w-10 h-10 rounded-full bg-accent/25 flex items-center justify-center text-accent mb-3 animate-bounce">
                    <MapPin size={20} />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-1">Brand Walk Headquarters</h4>
                  <p className="text-[10px] text-[#888888] uppercase tracking-widest max-w-[200px] mb-2">Virar West, Palghar, Maharashtra</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[9px] uppercase tracking-wider text-accent border-b border-accent/40 hover:text-white hover:border-white transition-colors duration-300"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>

              {/* Info Details List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#d4b483]">Location</h4>
                    <p className="text-[#AAAAAA] text-xs font-light leading-relaxed mt-1">
                      Shop No. 4, Ground Floor, Royal Arcade, Station Road, Virar West, Maharashtra - 401303
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#d4b483]">Phone / Email</h4>
                    <p className="text-[#AAAAAA] text-xs font-light mt-1">
                      +91 88888 12345<br />
                      +91 99999 54321
                    </p>
                    <p className="text-[#AAAAAA] text-xs font-light mt-1">
                      wholesale@brandwalk.in
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#d4b483]">Operational Hours</h4>
                    <p className="text-[#AAAAAA] text-xs font-light mt-1">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
