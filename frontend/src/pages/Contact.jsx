import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 md:pt-44 font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* Minimalist Intro */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center mb-24">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] tracking-[0.8em] text-[#8B8B8B] uppercase mb-4"
        >
          Exclusive Access
        </motion.p>
        <h1 className="text-4xl md:text-7xl font-serif text-[#1A1A1A] italic tracking-tight">
          Let’s talk about your <span className="shimmer-gold">Perfect Fit.</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#D4AF37]/20">
        
        {/* Immersive Visual */}
        <div className="relative h-[500px] lg:h-auto overflow-hidden border-r border-[#D4AF37]/20">
          <img
            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-[2s]"
            src={assets.contact_img}
            alt="Bangle_Craftsmanship"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/20"></div>
          <div className="absolute bottom-10 left-10">
            <p className="text-white text-[10px] tracking-[0.5em] uppercase font-bold">The Craft</p>
            <div className="h-[1px] w-12 bg-[#D4AF37] mt-2"></div>
          </div>
        </div>

        {/* Artisanal Form */}
        <div className="bg-white p-10 md:p-20 flex flex-col justify-center">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">Inquiry for Bespoke Bangles</h3>
              <p className="text-xs text-[#8B8B8B] tracking-widest uppercase">Size Consultations & Custom Orders</p>
            </div>

            <form className="space-y-10">
              <div className="group relative">
                <label className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-3 text-sm outline-none focus:border-[#D4AF37] transition-colors placeholder:text-transparent"
                />
              </div>

              <div className="group relative">
                <label className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-3 text-sm outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div className="group relative">
                <label className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold">Message / Bangle Size</label>
                <textarea 
                  rows="2"
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-3 text-sm outline-none focus:border-[#D4AF37] transition-colors resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ gap: "25px" }}
                className="flex items-center gap-4 text-[10px] font-black tracking-[0.5em] text-[#1A1A1A] uppercase border-b-2 border-[#D4AF37] pb-2 transition-all"
              >
                Send Inquiry <ArrowRight size={16} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 flex flex-col md:flex-row justify-between items-center gap-10 border-x border-b border-[#D4AF37]/20 mb-20">
        <div className="text-center md:text-left">
          <p className="text-[9px] tracking-[0.4em] text-[#8B8B8B] uppercase mb-2">Location</p>
          <p className="text-sm font-serif italic text-[#1A1A1A]">Stellify Plaza, Dhaka, Bangladesh</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[9px] tracking-[0.4em] text-[#8B8B8B] uppercase mb-2">Connect</p>
          <div className="flex gap-6">
            <Instagram size={18} className="text-[#1A1A1A] hover:text-[#D4AF37] cursor-pointer" />
            <Mail size={18} className="text-[#1A1A1A] hover:text-[#D4AF37] cursor-pointer" />
            <Phone size={18} className="text-[#1A1A1A] hover:text-[#D4AF37] cursor-pointer" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[9px] tracking-[0.4em] text-[#8B8B8B] uppercase mb-2">Availability</p>
          <p className="text-sm font-serif italic text-[#1A1A1A]">Mon — Sat, 10am — 6pm</p>
        </div>
      </div>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
        
        .shimmer-gold {
          display: inline-block;
          background: linear-gradient(
            to right, 
            #D4AF37 0%, 
            #D4AF37 40%, 
            #F9F0B3 50%, 
            #D4AF37 60%, 
            #D4AF37 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 4s linear infinite;
          padding-right: 0.1em;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default Contact;