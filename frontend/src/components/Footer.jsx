import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#F9F7F4] text-[#2C261F] pt-32 pb-10 px-6 md:px-16 mt-40 border-t border-[#8D7B68]/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8D7B68]/20 to-transparent"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#EAE3DC] blur-[120px] rounded-full pointer-events-none opacity-40"></div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:grid grid-cols-[2fr_1fr_1fr] gap-20 text-sm">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <img src={assets.logo} className="mb-10 w-40 mix-blend-multiply opacity-90 transition-all duration-500 hover:scale-105" alt="Stellify_Logo" />
            <p className="w-full md:w-4/5 text-[#4A4238] leading-[1.8] tracking-widest font-medium text-justify md:text-left opacity-70">
              Stellify is a sanctuary of handcrafted brilliance. Our ateliers breathe life into metal, 
              creating single-piece masterpieces that bridge the gap between ancient heritage 
              and the ethereal future of luxury.
            </p>
            
            <div className="flex gap-8 mt-12">
              {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                <span key={social} className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#8D7B68] hover:text-[#2C261F] transition-all cursor-pointer">
                  {social}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[11px] font-black tracking-[0.5em] text-[#2C261F] uppercase mb-10">Department</p>
            <ul className="flex flex-col gap-6 text-[#4A4238] font-medium opacity-80">
              <li>
                <Link to="/" className="group flex items-center gap-3 hover:text-[#8D7B68] transition-all duration-500">
                  <span className="w-0 h-[1px] bg-[#8D7B68] group-hover:w-4 transition-all duration-500"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-500 tracking-widest text-[11px] uppercase">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/collection" className="group flex items-center gap-3 hover:text-[#8D7B68] transition-all duration-500">
                  <span className="w-0 h-[1px] bg-[#8D7B68] group-hover:w-4 transition-all duration-500"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-500 tracking-widest text-[11px] uppercase">The Collection</span>
                </Link>
              </li>
              <li>
                <Link to="/artisan-story" className="group flex items-center gap-3 hover:text-[#8D7B68] transition-all duration-500">
                  <span className="w-0 h-[1px] bg-[#8D7B68] group-hover:w-4 transition-all duration-500"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-500 tracking-widest text-[11px] uppercase">Artisan Story</span>
                </Link>
              </li>
              <li>
                <Link to="/shipping-guide" className="group flex items-center gap-3 hover:text-[#8D7B68] transition-all duration-500">
                  <span className="w-0 h-[1px] bg-[#8D7B68] group-hover:w-4 transition-all duration-500"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-500 tracking-widest text-[11px] uppercase">Shipping Guide</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="group flex items-center gap-3 hover:text-[#8D7B68] transition-all duration-500">
                  <span className="w-0 h-[1px] bg-[#8D7B68] group-hover:w-4 transition-all duration-500"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-500 tracking-widest text-[11px] uppercase">Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-[11px] font-black tracking-[0.5em] text-[#2C261F] uppercase mb-10">The Atelier</p>
            <div className="flex flex-col gap-9">
              <div>
                <p className="text-[9px] text-[#8D7B68] uppercase tracking-[0.3em] font-bold mb-3">Concierge</p>
                <p className="text-[#2C261F] font-serif text-lg tracking-widest hover:text-[#8D7B68] transition-colors cursor-pointer">+1-800-STELLIFY</p>
              </div>
              <div>
                <p className="text-[9px] text-[#8D7B68] uppercase tracking-[0.3em] font-bold mb-3">Inquiries</p>
                <p className="text-[#2C261F] font-serif text-lg tracking-widest hover:text-[#8D7B68] transition-colors cursor-pointer">atelier@stellify.com</p>
              </div>
              <div className="pt-2">
                <p className="text-[10px] text-[#8D7B68] italic tracking-[0.1em] leading-relaxed opacity-80">
                  Our artisans are available <br /> Mon-Fri | 10:00 AM — 06:00 PM EST
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-32 pt-12 border-t border-[#8D7B68]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[9px] text-[#8D7B68] tracking-[0.4em] uppercase font-bold text-center md:text-left"
            >
              © 2026 Stellify Artisan Jewels. Crafted with soul.
            </motion.p>
            
            <div className="flex gap-10">
               <Link to="/terms" className="text-[9px] text-[#8D7B68] tracking-[0.4em] uppercase hover:text-[#2C261F] cursor-pointer transition-colors font-bold">Terms</Link>
               <Link to="/accessibility" className="text-[9px] text-[#8D7B68] tracking-[0.4em] uppercase hover:text-[#2C261F] cursor-pointer transition-colors font-bold">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center">
        <h1 className="text-[18vw] font-black tracking-tighter whitespace-nowrap bg-professional-shimmer">
          STELLIFY
        </h1>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: 'Prata', serif;
        }

        .bg-professional-shimmer {
          display: inline-block;
          background: linear-gradient(
            to right, 
            rgba(44, 38, 31, 0) 0%, 
            rgba(44, 38, 31, 0.03) 25%, 
            rgba(141, 123, 104, 0.12) 50%, 
            rgba(44, 38, 31, 0.03) 75%, 
            rgba(44, 38, 31, 0) 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: ambientLight 12s ease-in-out infinite;
        }

        @keyframes ambientLight {
          0% { background-position: -100% center; }
          100% { background-position: 100% center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;