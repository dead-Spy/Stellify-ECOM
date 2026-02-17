import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/frontend_assets/hero.mp4"; 
import p1 from "../assets/frontend_assets/hero_img1.jpg";
import p2 from "../assets/frontend_assets/hero_img2.jpg";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yVideo = useTransform(smoothProgress, [0, 1], [0, -100]);
  const yImage1 = useTransform(smoothProgress, [0, 1], [0, -250]);
  const yImage2 = useTransform(smoothProgress, [0, 1], [0, -150]);
  const rotateImg = useTransform(smoothProgress, [0, 1], [0, 10]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[180vh] bg-[#F9F7F4] overflow-hidden flex flex-col items-center"
    >
      <motion.div 
        style={{ opacity }}
        className="sticky top-32 z-0 text-center pointer-events-none"
      >
        <h1 className="text-[15vw] md:text-[12rem] font-serif leading-none uppercase select-none bg-artisanal-shimmer">
          Artisanal
        </h1>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 mt-10 flex flex-col items-center">
        
        <div className="relative w-full max-w-6xl flex justify-center items-center">
          
          <motion.div 
            style={{ y: yImage1, rotate: -5 }}
            className="absolute -left-4 md:left-0 top-20 w-32 md:w-64 aspect-[3/4] z-20 shadow-2xl border-[8px] border-white overflow-hidden bg-white"
          >
            <img 
              src={p1} 
              className="w-full h-full object-cover"
              alt="Exclusive Bangle 01"
            />
          </motion.div>

          <motion.div 
            style={{ y: yVideo }}
            className="relative w-[70vw] md:w-[30vw] aspect-[4/5] z-10 border-[12px] md:border-[20px] border-white shadow-[0_60px_100px_rgba(0,0,0,0.1)] overflow-hidden bg-white"
          >
            <video
              autoPlay loop muted playsInline
              className="w-full h-full object-cover grayscale-[0.3] contrast-110"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </motion.div>

          <motion.div 
            style={{ y: yImage2, rotate: rotateImg }}
            className="absolute -right-4 md:right-10 bottom-[-10%] w-36 md:w-72 aspect-square z-20 shadow-2xl border-[8px] border-white overflow-hidden bg-white"
          >
            <img 
              src={p2} 
              className="w-full h-full object-cover"
              alt="Exclusive Bangle 02"
            />
          </motion.div>

        </div>

        <div className="mt-40 text-center max-w-2xl relative z-30 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-[#2C261F] leading-tight mb-8">
              Every curve tells a <br /> <span className="italic text-[#8D7B68] shimmer-text">silent story.</span>
            </h2>
            <p className="text-[10px] md:text-[12px] tracking-[0.5em] text-[#8D7B68] uppercase font-bold mb-12">
              Hand-forged • Timeless • Pure
            </p>
            
            <motion.button
              onClick={() => navigate('/collection')}
              whileHover={{ scale: 1.05, backgroundColor: "#1A1714" }}
              whileTap={{ scale: 0.98 }}
              className="px-14 py-6 bg-[#2C261F] text-white text-[10px] font-black tracking-[0.5em] uppercase transition-all shadow-2xl rounded-full"
            >
              Enter The Gallery
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 hidden xl:flex flex-col items-center gap-4">
        <p className="vertical-text text-[8px] tracking-[1em] text-[#8D7B68] uppercase opacity-40">
          Scroll to explore
        </p>
        <div className="h-20 w-[1px] bg-[#8D7B68]/30"></div>
      </div>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
        .vertical-text { writing-mode: vertical-rl; }
        
        /* Main shimmer effect */
        .shimmer-text {
          display: inline-block;
          background: linear-gradient(to right, #8D7B68 20%, #D4AF37 40%, #D4AF37 60%, #8D7B68 80%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 4s linear infinite;
          padding-right: 0.1em;
        }

        /* Subtle shimmer for background text */
        .bg-artisanal-shimmer {
          background: linear-gradient(
            to right, 
            rgba(44, 38, 31, 0.04) 20%, 
            rgba(212, 175, 55, 0.15) 40%, 
            rgba(212, 175, 55, 0.15) 60%, 
            rgba(44, 38, 31, 0.04) 80%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 6s linear infinite; /* ব্যাকগ্রাউন্ডের জন্য কিছুটা ধীর গতি */
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;