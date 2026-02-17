import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const { search, showSearch, setSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return (
    <AnimatePresence>
      {showSearch && visible && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-[#F9F7F4] border-b border-[#8D7B68]/10 text-center py-8 sticky top-0 z-[90] shadow-sm"
        >
          <div className="inline-flex items-center justify-center border border-[#8D7B68]/30 px-6 py-3.5 rounded-full w-[92%] sm:w-1/2 bg-[#EAE3DC]/20 backdrop-blur-sm transition-all focus-within:border-[#2C261F] focus-within:shadow-lg">
            <input
              className="flex-1 outline-none bg-transparent text-[11px] text-[#2C261F] placeholder-[#8D7B68]/50 tracking-[0.2em] uppercase font-bold"
              type="text"
              placeholder="SEARCH THE ATELIER..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            <Search className="w-4 h-4 text-[#2C261F] opacity-70" />
          </div>
          <motion.div
            whileHover={{ rotate: 90 }}
            className="inline-block ml-6 align-middle"
          >
            <X
              className="w-5 h-5 cursor-pointer text-[#2C261F] opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => setShowSearch(false)}
            />
          </motion.div>
          
          {/* Subtle Decorative Line */}
          <div className="mt-4 text-[8px] tracking-[0.4em] text-[#8D7B68] uppercase font-medium opacity-60">
            Handcrafted Treasures • 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;