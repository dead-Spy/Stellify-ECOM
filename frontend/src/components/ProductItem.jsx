import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link 
      className="cursor-pointer group block" 
      to={`/product/${id}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE3DC]/30">
        
        {/* cinematic scale */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0.2, 1] }}
          className="w-full h-full object-cover object-center grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
          src={image[0]}
          alt={name}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C261F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Collection Series Tag */}
        <div className="absolute top-4 left-4 overflow-hidden">
          <motion.p 
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            className="text-[8px] tracking-[0.3em] font-black text-[#2C261F] uppercase"
          >
            Limited Edition
          </motion.p>
        </div>

        {/* Bottom Line Indicator */}
        <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8D7B68] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
      </div>

      <div className="mt-5 px-1 space-y-1">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[9px] tracking-[0.4em] text-[#8D7B68] uppercase font-bold mb-1">
              Atelier Series
            </p>
            <h3 className="font-serif text-[13px] md:text-[15px] text-[#2C261F] leading-tight group-hover:italic transition-all duration-500">
              {name}
            </h3>
          </div>
        </div>
        
        <div className="flex items-center gap-3 pt-1">
          <span className="text-[12px] font-bold text-[#2C261F]">
            {currency}{price}
          </span>
          <div className="h-[1px] w-0 bg-[#8D7B68]/40 group-hover:w-8 transition-all duration-700"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;