import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="bg-[#F9F7F4] overflow-hidden"
    >
      {/* Hero Section*/}
      <Hero />

      {/* Main Content*/}
      <div className="flex flex-col gap-12 md:gap-24">
        
        {/* Collections */}
        <section className="relative z-10">
          <LatestCollection />
        </section>

        <section className="relative z-10">
          <BestSeller />
        </section>
        
        {/* Artisanal Divider */}
        <div className="flex justify-center items-center py-20 opacity-60">
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#8D7B68] to-transparent"></div>
          <motion.div 
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="mx-6 text-[#8D7B68] text-xs tracking-[0.5em] font-light"
          >
            ✦
          </motion.div>
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#8D7B68] to-transparent"></div>
        </div>

        {/* Brand Philosophy & Engagement */}
        <section className="bg-white/40 backdrop-blur-sm border-y border-[#8D7B68]/5">
          <OurPolicy />
        </section>

        <section className="pb-20">
          <NewsLetter />
        </section>
      </div>

      {/* Subtle Grain Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[100]"></div>
    </motion.div>
  );
};

export default Home;