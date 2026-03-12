import React from 'react';
import { motion } from 'framer-motion';

const Accessibility = () => {
  const standards = [
    { title: "Visual Clarity", desc: "High-contrast color palettes and scalable typography for effortless readability." },
    { title: "Navigation", desc: "Fully optimized keyboard and screen-reader paths for seamless digital transit." },
    { title: "Alt-Narratives", desc: "Detailed textual descriptions for every artisanal masterpiece in our gallery." }
  ];

  return (
    <div className="bg-[#F9F7F4] text-[#2C261F] min-h-screen pt-32 pb-24 px-6 md:px-16 relative overflow-hidden">
      
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#EAE3DC] blur-[100px] rounded-full opacity-50 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] tracking-[0.5em] text-[#8D7B68] font-bold uppercase">Inclusion</span>
              <div className="h-[1px] w-12 bg-[#8D7B68]/30"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter leading-tight mb-8">
              Beauty for <br /> <span className="italic text-[#8D7B68]">Everyone.</span>
            </h1>
            <p className="text-[#4A4238] leading-relaxed opacity-80 text-justify mb-10 tracking-wide">
              Stellify is dedicated to ensuring that the digital expression of our craft is accessible to every individual, regardless of their physical or cognitive journey. We view accessibility not as a requirement, but as an essential part of our hospitality.
            </p>
            <div className="p-8 border border-[#8D7B68]/10 bg-white/30 backdrop-blur-md">
               <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-4">Direct Assistance</p>
               <p className="text-lg font-serif italic mb-2">+1-800-STELLIFY</p>
               <p className="text-xs text-[#8D7B68] tracking-widest uppercase font-bold">concierge@stellify.com</p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-px bg-[#8D7B68]/10 border border-[#8D7B68]/10 mt-12">
            {standards.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#F9F7F4] p-10 md:p-14 hover:bg-white transition-colors duration-500 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-serif italic">{item.title}</h3>
                  <span className="text-[10px] text-[#8D7B68]/40 font-bold group-hover:text-[#8D7B68]">0{index + 1}</span>
                </div>
                <p className="text-sm text-[#4A4238] leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-32 text-center"
        >
          <div className="inline-block relative px-10 py-5">
            <div className="absolute inset-0 border border-[#8D7B68]/20 rotate-1"></div>
            <p className="text-[9px] tracking-[0.6em] uppercase font-bold text-[#8D7B68] relative z-10">
              WCAG 2.1 AA Compliant Interface
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: 'Prata', serif;
        }
      `}</style>
    </div>
  );
};

export default Accessibility;