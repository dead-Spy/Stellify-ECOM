import React from "react";
import { motion } from "framer-motion";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center mb-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2"
      >
        <p className="prata-regular text-2xl md:text-3xl text-gray-400 font-light">
          {text1} 
          <span className="text-[#091B2C] font-normal ml-2 tracking-tight">
            {text2}
          </span>
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "3rem" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-[1px] bg-[#E1E1B3] hidden sm:block"
      ></motion.div>
    </div>
  );
};

export default Title;