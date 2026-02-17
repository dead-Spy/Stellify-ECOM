import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const NewsLetter = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    // ব্যাকগ্রাউন্ড কালার এখন #F9F7F4 যা আপনার কন্টাক্ট পেজের সাথে ম্যাচ করবে
    <div className="relative py-40 px-6 md:px-16 bg-[#F9F7F4]">
      <div className="max-w-7xl mx-auto py-24 relative border-y border-[#8D7B68]/10">
        
        {/* ব্যাকগ্রাউন্ডে টেক্সট - যা লুক আরও লাক্সারি করবে */}
        <div className="absolute top-0 left-0 text-[10vw] font-serif italic select-none pointer-events-none w-full h-full flex items-center justify-center overflow-hidden bg-elite-shimmer">
          Stellify Elite
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Section*/}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={14} className="text-[#8D7B68]" />
              <span className="text-[9px] tracking-[0.5em] text-[#8D7B68] uppercase font-black">
                Limited Access
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-[#2C261F] leading-tight">
              Join the <br /> 
              <span className="italic text-[#8D7B68] font-light">Inner Circle</span>
            </h2>
            
            <p className="mt-8 text-[11px] tracking-[0.2em] text-[#4A4238] uppercase max-w-sm leading-relaxed opacity-70">
              Receive private invitations to our artisan collection previews and bespoke bangle releases.
            </p>
          </motion.div>

          {/* ইনপুট ফর্ম সেকশন */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <form onSubmit={onSubmitHandler} className="space-y-10">
              <div className="group relative">
                <label className="text-[9px] tracking-[0.4em] text-[#8D7B68] uppercase font-bold group-focus-within:text-[#2C261F] transition-all">
                  Atelier Correspondence
                </label>
                <div className="flex items-center mt-2 border-b border-[#8D7B68]/30 group-focus-within:border-[#2C261F] transition-all duration-700">
                  <input
                    className="w-full bg-transparent outline-none py-6 text-sm text-[#2C261F] placeholder-[#8D7B68]/30 tracking-widest uppercase italic font-serif"
                    type="email"
                    placeholder="name@atelier.com"
                    required
                  />
                  <motion.button
                    whileHover={{ x: 5 }}
                    type="submit"
                    className="p-4 text-[#2C261F] hover:text-[#8D7B68] transition-colors"
                  >
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </motion.button>
                </div>
              </div>

              <p className="text-[8px] tracking-[0.3em] text-[#8D7B68] uppercase opacity-50">
                Crafted with discretion. No spam, only artisan excellence.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
        
        .bg-elite-shimmer {
          display: inline-block;
          background: linear-gradient(
            to right, 
            rgba(141, 123, 104, 0.05) 0%, 
            rgba(141, 123, 104, 0.05) 30%, 
            rgba(212, 175, 55, 0.2) 50%, 
            rgba(141, 123, 104, 0.05) 70%, 
            rgba(141, 123, 104, 0.05) 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 8s linear infinite;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default NewsLetter;