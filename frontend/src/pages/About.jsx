import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-32 md:pt-44">
      {/* Header Section */}
      <div className="px-6 md:px-16">
        <div className="text-center pb-12 border-b border-[#2C261F]/10">
          <Title text1={"OUR"} text2={"STORY"} />
        </div>

        {/* Main Story Content */}
        <div className="my-24 flex flex-col lg:flex-row gap-20 items-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <img
              className="w-full rounded-[2px] shadow-2xl border-[12px] border-white"
              src={assets.about_img}
              alt="Stellify_Craftsmanship"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-8 lg:w-1/2 text-[#4A4238]"
          >
            <p className="text-xl md:text-2xl font-serif italic text-[#2C261F] leading-snug">
              Stellify was born out of a profound appreciation for handcrafted artistry. 
            </p>
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] leading-loose opacity-80">
              Our journey began with a vision to redefine luxury—not as something mass-produced, 
              but as a unique expression of elegance, carefully forged by hand. Every curve and detail is a testament to our dedication.
            </p>
            
            <div className="py-10 border-y border-[#2C261F]/10 my-4">
              <b className="text-[#2C261F] font-serif text-3xl tracking-tight italic">Our Mission</b>
              <p className="mt-6 text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase leading-relaxed text-[#8D7B68]">
                To empower individuals to express their timeless elegance 
                through handcrafted artifacts, maintaining the highest standards of artisan craft.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Choose Us Section */}
        <div className="text-center mb-16">
          <Title text1={"THE"} text2={"PROMISE"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-32 border border-[#2C261F]/10 bg-white">
          {[
            {
              title: "Exquisite Quality",
              desc: "We source only the finest materials, ensuring each piece meets our stringent luxury benchmarks."
            },
            {
              title: "Artisanal Craft",
              desc: "Every artifact is a single-piece creation, meticulously crafted to preserve the soul of jewelry making."
            },
            {
              title: "Concierge Service",
              desc: "Experience a bespoke service tailored to your unique needs, available through our private assistance."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="px-12 py-20 flex flex-col gap-6 hover:bg-[#2C261F] hover:text-white transition-all duration-500 group border-[#2C261F]/10 border-r last:border-r-0"
            >
              <b className="font-serif text-2xl tracking-tight uppercase italic">
                {item.title}
              </b>
              <p className="text-[#8D7B68] text-[10px] font-bold tracking-[0.3em] uppercase leading-relaxed group-hover:text-white/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <NewsLetter />

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
      `}</style>
    </div>
  );
};

export default About;