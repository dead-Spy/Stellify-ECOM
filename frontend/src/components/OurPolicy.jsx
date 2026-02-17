import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ruler, Sparkles, ShieldCheck, ArrowRight, X, Info } from "lucide-react";

const ArtisanStandard = () => {
  const [showChart, setShowChart] = useState(false);

  // স্ক্রল লক লজিক পুরোপুরি সরিয়ে ফেলা হয়েছে যাতে ওয়েবসাইট এবং পপআপ উভয়ই স্ক্রল করা যায়
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const sizingData = [
    { size: "2-4", diameter: "2.25\"", mm: "57.2 mm" },
    { size: "2-6", diameter: "2.37\"", mm: "60.3 mm" },
    { size: "2-8", diameter: "2.50\"", mm: "63.5 mm" },
    { size: "2-10", diameter: "2.62\"", mm: "66.7 mm" },
  ];

  const features = [
    {
      icon: <Ruler className="w-5 h-5" />,
      title: "Perfect Fit Guide",
      desc: "Our master artisans will assist you in finding the ideal diameter for your wrist."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Hand-Carved Soul",
      desc: "Each bangle is manually polished, ensuring a unique finish for every signature piece."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Heritage Warranty",
      desc: "We stand by our craftsmanship with a lifetime assurance on structural integrity."
    }
  ];

  return (
    <div className="bg-[#F9F7F4] py-32 px-6 md:px-16 border-y border-[#8D7B68]/10 relative overflow-hidden">
      
      <div className="absolute top-10 left-10 text-[12vw] font-serif italic pointer-events-none select-none leading-none bg-excellence-shimmer">
        Excellence
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="text-left">
            <span className="text-[10px] tracking-[0.8em] text-[#8D7B68] uppercase font-bold mb-4 block">The Standard</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-[#2C261F] leading-[1.1]">Signature <br /> Craftsmanship</h2>
          </div>
          
          <motion.button 
            onClick={() => setShowChart(true)}
            whileHover={{ y: -5 }}
            className="group flex items-center gap-6 bg-[#2C261F] text-[#F9F7F4] pl-10 pr-4 py-4 text-[10px] font-black tracking-[0.4em] uppercase rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all"
          >
            Find Your Size 
            <div className="w-10 h-10 rounded-full bg-[#8D7B68] flex items-center justify-center group-hover:bg-white group-hover:text-[#2C261F] transition-all">
              <ArrowRight size={14} />
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group p-12 bg-white/30 border border-[#8D7B68]/10 hover:border-[#8D7B68]/40 transition-all duration-1000"
            >
              <div className="mb-10 text-[#8D7B68]">{item.icon}</div>
              <h3 className="font-serif text-[#2C261F] text-2xl italic mb-4">{item.title}</h3>
              <p className="text-[11px] tracking-[0.15em] text-[#8D7B68] uppercase leading-relaxed opacity-70">{item.desc}</p>
              <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-[#8D7B68]/20 via-[#8D7B68] to-[#8D7B68]/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showChart && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop - pointer-events-none সরিয়ে ফেলা হয়েছে যাতে পেছনের স্ক্রল পাওয়া যায় */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowChart(false)}
              className="fixed inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white max-w-5xl w-full my-auto shadow-2xl rounded-2xl z-[110]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowChart(false)}
                className="absolute top-4 right-4 z-[120] p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-all"
              >
                <X size={20} className="text-[#2C261F]" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-10">
                {/* Left Side: Info */}
                <div className="lg:col-span-4 bg-[#F9F7F4] p-8 md:p-16">
                  <span className="text-[9px] tracking-[0.5em] text-[#8D7B68] uppercase font-black mb-6 block">Measurement Guide</span>
                  <h3 className="font-serif text-3xl italic text-[#2C261F] mb-8 leading-snug">The Perfect Fit</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-bold border shrink-0">1</div>
                      <p className="text-[11px] text-slate-500 uppercase leading-relaxed">Bring fingers together and tuck thumb towards palm.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-bold border shrink-0">2</div>
                      <p className="text-[11px] text-slate-500 uppercase leading-relaxed">Measure the circumference at the widest point.</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Sizes */}
                <div className="lg:col-span-6 p-8 md:p-16 bg-white">
                  <div className="flex items-center justify-between mb-8">
                     <h4 className="text-[10px] tracking-[0.4em] uppercase font-black text-[#2C261F]">Standard Sizes</h4>
                     <div className="flex items-center gap-2 text-[#8D7B68]">
                        <span className="text-[9px] font-bold uppercase">Inches & MM</span>
                        <Info size={14} />
                     </div>
                  </div>

                  <div className="space-y-1">
                    {sizingData.map((item, i) => (
                      <div key={i} className="grid grid-cols-3 py-6 px-2 border-b border-slate-50 items-center">
                        <span className="font-serif text-xl italic text-[#2C261F]">{item.size}</span>
                        <span className="text-center text-[11px] text-slate-400">{item.diameter}</span>
                        <span className="text-right text-[11px] font-black text-[#2C261F]">{item.mm}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setShowChart(false)}
                    className="w-full mt-10 py-5 bg-[#2C261F] text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-[#8D7B68] transition-all"
                  >
                    Confirm Selection
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
        .bg-excellence-shimmer {
          display: inline-block;
          background: linear-gradient(to right, rgba(141,123,104,0.05) 0%, rgba(212,175,55,0.25) 50%, rgba(141,123,104,0.05) 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 6s linear infinite;
        }
        @keyframes shine { to { background-position: 200% center; } }
      `}</style>
    </div>
  );
};

export default ArtisanStandard;