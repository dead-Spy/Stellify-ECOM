import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/frontend_assets/assets';

const ArtisanStory = () => {
  return (
    <div className="bg-[#F9F7F4] text-[#2C261F] min-h-screen pt-28 pb-20 px-6 md:px-16 overflow-hidden">
      
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] tracking-[0.6em] text-[#8D7B68] font-bold uppercase mb-4 block">Our Heritage</span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-8">The Soul Behind the <br /> <span className="italic">Stellify Craft</span></h1>
          <div className="w-24 h-[1px] bg-[#8D7B68]/30 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#EAE3DC] overflow-hidden rounded-sm shadow-2xl">
               <img 
                src={assets.about_img} 
                alt="Artisan at work" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-[#8D7B68]/20 -z-10 hidden md:block"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-2xl font-serif italic tracking-wide">"Jewelry is not just an ornament; it's a silent poem of the hands."</h2>
            <p className="text-[#4A4238] leading-[1.8] text-justify opacity-80 font-medium tracking-wide">
              At Stellify, our story begins in the quiet, focused corners of our atelier. Every piece is a testament 
              to the mastery of artisans who have spent decades perfecting the art of metalwork and gemstone setting. 
              We don't believe in mass production; we believe in the rhythm of the hammer and the precision of the flame.
            </p>
            <p className="text-[#4A4238] leading-[1.8] text-justify opacity-80 font-medium tracking-wide">
              Our philosophy is simple: bridge the gap between ancient heritage and ethereal luxury. By using 
              sustainably sourced materials and age-old techniques, we create 'single-piece' masterpieces that 
              carry the energy of their creator into the hands of their wearer.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-40">
          {[
            { title: "Pure Craft", desc: "Each design is sketched by hand and brought to life without the use of industrial casting." },
            { title: "Rare Spirit", desc: "We source only the most exceptional gemstones, each with its own unique character and story." },
            { title: "Legacy Built", desc: "Our jewels are designed to transcend seasons, becoming heirlooms that tell your story for generations." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-10 border border-[#8D7B68]/10 hover:border-[#8D7B68]/30 transition-all duration-500 bg-white/50 backdrop-blur-sm group"
            >
              <h3 className="text-[11px] font-black tracking-[0.4em] uppercase mb-6 text-[#2C261F] group-hover:text-[#8D7B68] transition-colors">{item.title}</h3>
              <p className="text-sm text-[#4A4238] leading-relaxed opacity-70 italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-40 text-center"
        >
          <div className="inline-block relative px-12 py-6">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#8D7B68]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#8D7B68]"></div>
            <p className="text-[10px] tracking-[0.8em] uppercase font-bold text-[#8D7B68]">Stellify Artisan Guild</p>
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

export default ArtisanStory;