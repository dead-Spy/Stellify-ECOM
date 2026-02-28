import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { LogOut, ShieldCheck, UserCircle, Bell } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ setToken }) => {
  return (
    <nav className="flex items-center py-4 px-8 md:px-12 justify-between bg-white border-b border-slate-100 sticky top-0 z-[100] h-20">
      
      <div className="flex items-center gap-12">
        <div className="flex flex-col">
          <img className="w-24 md:w-28 brightness-0" src={assets.logo} alt="logo" />
          <div className="flex items-center gap-2 mt-1">
             <div className="w-1 h-1 bg-[#8D7B68] rounded-full"></div>
             <span className="text-[8px] tracking-[0.5em] uppercase font-black text-[#8D7B68]">
               Admin Atelier
             </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 border-l border-slate-100 pl-12">
           <div className="flex flex-col">
             <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-0.5">System Status</p>
             <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
               <p className="text-[11px] font-bold text-[#2C261F]">Archive Synchronized</p>
             </div>
           </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-[#2C261F] transition-colors">
          <Bell size={20} strokeWidth={1.5} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-amber-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-4 border-l border-slate-100 pl-6 group cursor-pointer">
          <div className="flex flex-col items-end sm:flex">
            <p className="text-[11px] font-black text-[#2C261F] uppercase tracking-tighter">Master Artisan</p>
            <p className="text-[9px] text-slate-400 font-medium italic tracking-wide">Primary Authority</p>
          </div>
          <div className="w-10 h-10 bg-[#F9F7F4] rounded-full flex items-center justify-center border border-slate-100 group-hover:border-[#8D7B68] transition-all overflow-hidden">
             <UserCircle size={24} strokeWidth={1.5} className="text-[#8D7B68]" />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setToken("")}
          className="flex items-center justify-center w-10 h-10 md:w-auto md:px-6 md:h-11 bg-[#2C261F] text-white rounded-full transition-all duration-300 hover:bg-[#4A4238] shadow-lg shadow-black/5 gap-2"
        >
          <LogOut size={16} strokeWidth={2} />
          <span className="hidden md:block text-[10px] font-black tracking-[0.2em] uppercase">
            Exit
          </span>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;