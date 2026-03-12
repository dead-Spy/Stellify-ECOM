import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const termsData = [
    {
      id: "01",
      title: "Digital Conduct",
      desc: "By engaging with the Stellify platform, you commit to a standard of interaction that respects our artisanal heritage. Unauthorized data mining or commercial extraction is strictly prohibited."
    },
    {
      id: "02",
      title: "Intellectual Property",
      desc: "Every silhouette, gemstone arrangement, and narrative text is the sole property of Stellify. Reproduction of our single-piece designs is protected by international copyright laws."
    },
    {
      id: "03",
      title: "Bespoke Orders",
      desc: "Custom commissions represent a unique collaboration. Once the artisan begins the crafting process, modifications or cancellations are subject to atelier discretion."
    },
    {
      id: "04",
      title: "Authentication",
      desc: "All Stellify jewels are accompanied by a digital or physical Certificate of Authenticity. Resale of items without original documentation may void our lifetime artisan warranty."
    }
  ];

  return (
    <div className="bg-[#F9F7F4] text-[#2C261F] min-h-screen pt-32 pb-24 px-6 md:px-16 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAE3DC] blur-[150px] rounded-full -z-10 opacity-40"></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#8D7B68]"></div>
            <span className="text-[10px] tracking-[0.5em] text-[#8D7B68] font-bold uppercase">Legal & Governance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none mb-8">
            Terms of <br /> <span className="italic text-[#8D7B68]">Engagement</span>
          </h1>
          <p className="max-w-xl text-[#4A4238] opacity-70 leading-relaxed tracking-wide text-sm">
            Our terms are designed to protect the integrity of our craftsmanship and ensure a transparent relationship between the artisan and the collector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#8D7B68]/10 border border-[#8D7B68]/10">
          {termsData.map((term, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F9F7F4] p-12 hover:bg-white transition-all duration-700 group"
            >
              <span className="text-[10px] font-black text-[#8D7B68]/40 group-hover:text-[#8D7B68] transition-colors duration-500 mb-6 block tracking-widest">
                SECTION — {term.id}
              </span>
              <h2 className="text-xl font-serif mb-6 group-hover:translate-x-2 transition-transform duration-500 italic">
                {term.title}
              </h2>
              <p className="text-[#4A4238] text-sm leading-[1.8] opacity-80 group-hover:opacity-100 transition-opacity">
                {term.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-[#8D7B68]/10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-[9px] tracking-[0.3em] uppercase opacity-50">Last Revised: February 18, 2026</p>
          <div className="flex gap-12">
            <p className="text-[9px] tracking-[0.4em] uppercase font-bold border-b border-[#8D7B68]/30 pb-1 cursor-pointer hover:border-[#2C261F] transition-all">Download PDF</p>
            <p className="text-[9px] tracking-[0.4em] uppercase font-bold border-b border-[#8D7B68]/30 pb-1 cursor-pointer hover:border-[#2C261F] transition-all">Previous Versions</p>
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

export default Terms;