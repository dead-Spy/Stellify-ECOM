import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { motion } from "framer-motion";

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="relative w-full bg-[#FDFCFB] p-10 rounded-sm border border-[#8D7B68]/10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
      
      {/* Artisanal Background Detail */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#EAE3DC] blur-3xl rounded-full opacity-40"></div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <div className="flex items-center gap-4">
          <h2 className="font-serif text-2xl text-[#2C261F] tracking-tight">
            Order <span className="text-[#8D7B68] italic font-light">Summary</span>
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#8D7B68]/20 to-transparent"></div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-6 text-sm">
        {/* Subtotal */}
        <div className="flex justify-between items-center group">
          <p className="text-[#8D7B68] tracking-[0.2em] uppercase text-[9px] font-bold opacity-70">Subtotal</p>
          <p className="text-[#2C261F] font-medium tracking-widest font-serif">
            {currency} {getCartAmount().toLocaleString()}.00
          </p>
        </div>
        
        <div className="h-[1px] w-full bg-[#8D7B68]/5"></div>

        {/* Shipping */}
        <div className="flex justify-between items-center group">
          <p className="text-[#8D7B68] tracking-[0.2em] uppercase text-[9px] font-bold opacity-70">Shipping Fee</p>
          <p className="text-[#2C261F] font-medium tracking-widest font-serif">
            {currency} {deliveryFee}.00
          </p>
        </div>

        <div className="h-[1px] w-full bg-[#8D7B68]/10"></div>

        {/* Grand Total */}
        <motion.div 
          key={getCartAmount()}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-end pt-4"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[#2C261F] tracking-[0.3em] uppercase text-[10px] font-black">Estimated Total</span>
            <span className="text-[8px] text-[#8D7B68] italic tracking-[0.1em] uppercase opacity-60">Handcrafted Excellence Guaranteed</span>
          </div>
          <div className="flex flex-col items-end">
            <b className="text-4xl text-[#2C261F] font-light font-serif tracking-tighter">
              {currency} {getCartAmount() === 0 ? 0 : (getCartAmount() + deliveryFee).toLocaleString()}.00
            </b>
          </div>
        </motion.div>

        {/* Aesthetic Policy Box */}
        <div className="mt-6 p-5 border border-dashed border-[#8D7B68]/20 bg-[#F9F7F4]">
            <p className="text-[8px] text-[#8D7B68] tracking-[0.2em] text-center uppercase leading-relaxed font-bold">
              Premium artisanal packaging & <br /> secure shipping included.
            </p>
        </div>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: 'Prata', serif;
        }
      `}</style>
    </div>
  );
};

export default CartTotal;