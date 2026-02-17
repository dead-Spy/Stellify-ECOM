import React, { useContext, useEffect, useState, useMemo } from "react";
import { ShopContext } from "../contexts/ShopContext";
import ProductItem from "./ProductItem";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

const BestSeller = () => {
  const { products, addToCart, navigate } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [ripple, setRipple] = useState(false);

  const selectedBestSellerIds = useMemo(() => 
    ["pro_id2", "pro_id52", "pro_id50", "pro_id51", "pro_id40", "pro_id49"], 
  []);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = selectedBestSellerIds.length > 0
        ? products.filter((item) => selectedBestSellerIds.includes(item._id))
        : products.filter((item) => item.bestseller);
      
      setBestSeller(filtered.slice(0, 6));
    }
  }, [products, selectedBestSellerIds]);

  const handleMobileClick = () => {
    setRipple(true);
    setTimeout(() => {
      setRipple(false);
      navigate('/collection');
    }, 400);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative my-28 py-28 bg-[#F9F7F4] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-[#F3EEEA] blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-[#8D7B68]/5 blur-[100px] rounded-full pointer-events-none opacity-20"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
          <div className="w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-[1px] bg-[#8D7B68]"></span>
              <p className="text-[#8D7B68] font-bold tracking-[0.5em] text-[10px] uppercase">
                Curated Series
              </p>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="font-serif text-[#2C261F] text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none whitespace-nowrap"
            >
              Signature <span className="text-[#8D7B68] italic font-light shimmer-text">Essentials</span>
            </motion.h2>
          </div>

          <motion.button 
            whileHover={{ x: 8 }}
            onClick={() => navigate('/collection')}
            className="hidden md:flex items-center gap-4 text-[11px] font-black tracking-[0.4em] uppercase text-[#2C261F] pb-2 border-b-2 border-[#2C261F]/10 hover:border-[#2C261F] transition-all duration-300 whitespace-nowrap"
          >
            Discover All <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Bestseller Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-10"
        >
          {bestSeller.map((item, index) => (
            <motion.div
              key={item._id}
              variants={cardVariants}
              className={`group ${index === 5 ? 'lg:hidden' : ''}`}
            >
              <div className="relative bg-white rounded-[2.2rem] p-2 md:p-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(141,123,104,0.12)] transition-all duration-700 border border-transparent hover:border-[#8D7B68]/10">
                
                <div className="relative overflow-hidden rounded-[1.8rem] aspect-[3/4] bg-[#F8F7F5]">
                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                  
                  <div className="absolute inset-0 bg-[#2C261F]/30 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex flex-col items-center justify-center gap-3 z-20">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => addToCart(item._id, "Standard")}
                      className="bg-white text-[#2C261F] p-4 rounded-full shadow-xl hover:bg-[#2C261F] hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </motion.button>
                    <motion.button 
                      onClick={() => navigate(`/product/${item._id}`)}
                      className="bg-white/95 text-[#2C261F] px-5 py-2.5 rounded-full text-[9px] font-bold tracking-widest uppercase shadow-xl transform translate-y-4 group-hover:translate-y-0 delay-75 transition-all"
                    >
                      Quick View
                    </motion.button>
                  </div>

                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      <p className="text-[8px] font-black tracking-widest text-[#2C261F]">BEST SELLER</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center md:hidden">
           <button 
            onClick={handleMobileClick}
            className="relative overflow-hidden flex items-center gap-4 bg-[#2C261F] text-white px-10 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95 transition-transform"
          >
            <span className="relative z-10">Discover All</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
            
            <AnimatePresence>
              {ripple && (
                <motion.span
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 4, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-white/20 rounded-full"
                  style={{ originX: 0.5, originY: 0.5 }}
                />
              )}
            </AnimatePresence>
          </button>
        </div>

        <div className="absolute -bottom-8 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] flex items-center">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            <h2 className="text-[16vw] font-black text-[#2C261F] tracking-tighter uppercase mr-32">
              Timeless Collection — Timeless Collection —
            </h2>
            <h2 className="text-[16vw] font-black text-[#2C261F] tracking-tighter uppercase mr-32">
              Timeless Collection — Timeless Collection —
            </h2>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
        .shimmer-text {
          display: inline-block;
          background: linear-gradient(
            to right, 
            #8D7B68 0%, 
            #8D7B68 30%, 
            #D4AF37 50%, 
            #8D7B68 70%, 
            #8D7B68 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 4s linear infinite;
          padding-right: 0.2em; /* শেষের অক্ষর যাতে কেটে না যায় */
          margin-right: -0.2em; /* লেআউট ঠিক রাখতে সামান্য নেগেটিভ মার্জিন */
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default BestSeller;