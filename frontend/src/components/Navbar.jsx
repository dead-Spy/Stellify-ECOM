import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, X, ChevronRight, Menu } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = async () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-2 md:px-10 pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`mx-auto max-w-7xl pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between relative z-[130] ${
          scrolled 
          ? "bg-white/80 backdrop-blur-2xl py-3 px-6 md:px-10 rounded-full border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.08)]" 
          : "bg-white/10 backdrop-blur-[4px] py-4 md:py-6 px-4 md:px-6 rounded-none border-b border-white/10"
        }`}
      >
        <Link to="/" className="group">
          <img
            src={assets.logo}
            className={`transition-all duration-500 brightness-0 ${scrolled ? "w-20 md:w-24" : "w-28 md:w-32"}`}
            alt="Stellify"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">
          {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item) => (
            <li key={item} className="relative">
              <NavLink
                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) => `
                  relative px-5 py-2 text-[10px] tracking-[0.3em] font-bold transition-all duration-500 z-10 block
                  ${isActive ? "text-white" : "text-slate-500 hover:text-slate-900"}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-20">{item}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-slate-900 rounded-full z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 md:gap-4">
          <button onClick={() => setShowSearch(true)} className="p-2 text-slate-700">
            <Search size={18} strokeWidth={2} />
          </button>

          <div className="group relative">
            <button onClick={() => (token ? null : navigate("/login"))} className="p-2 text-slate-700">
              <User size={18} strokeWidth={2} />
            </button>
            {token && (
              <div className="absolute hidden group-hover:block right-0 pt-4 w-48">
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-xl">
                  <p onClick={() => navigate("/orders")} className="text-[10px] font-bold tracking-widest text-slate-500 hover:text-slate-900 cursor-pointer p-2 uppercase">Orders</p>
                  <p onClick={logout} className="text-[10px] font-bold tracking-widest text-red-400 hover:text-red-600 cursor-pointer p-2 uppercase">Logout</p>
                </div>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative p-2 md:p-2.5 bg-slate-900 text-white rounded-full transition-all">
            <ShoppingBag size={16} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-slate-900 flex items-center justify-center rounded-full text-[8px] font-black border border-slate-900">
              {getCartCount()}
            </span>
          </Link>

          <button 
            onClick={() => setVisible(!visible)} 
            className="md:hidden p-2 ml-1 text-slate-900 outline-none"
          >
            {visible ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
      
      {/* Top-Down Dropdown Menu */}
      <AnimatePresence>
        {visible && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 bg-white shadow-[0_25px_50px_rgba(0,0,0,0.1)] rounded-b-[2.5rem] pt-32 pb-10 px-8 z-[110] pointer-events-auto border-x border-b border-slate-100"
          >
            <div className="flex flex-col gap-1">
              {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item) => (
                <NavLink
                  key={item}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setVisible(false)}
                  className={({ isActive }) => `
                    flex items-center justify-between py-5 border-b border-slate-50 transition-all
                    ${isActive ? "text-[#8D7B68] font-black pl-2" : "text-slate-600 font-medium"}
                  `}
                >
                  <span className="text-sm tracking-[0.3em] uppercase italic font-serif">
                    {item}
                  </span>
                  {/* no function used in ClassRoom */}
                  <ChevronRight size={14} className="opacity-40" />
                </NavLink>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div 
                onClick={() => {navigate(token ? "/orders" : "/login"); setVisible(false);}}
                className="flex items-center justify-center gap-3 py-4 bg-slate-50 rounded-2xl cursor-pointer active:scale-[0.98] transition-all"
              >
                <User size={16} className="text-[#8D7B68]" />
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-900">
                  {token ? "My History & Orders" : "Account Access"}
                </span>
              </div>
              
              {token && (
                <button 
                  onClick={() => {logout(); setVisible(false);}} 
                  className="w-full py-4 text-red-400 text-[10px] font-black tracking-widest uppercase border border-red-50 rounded-2xl"
                >
                  Sign Out
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVisible(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] pointer-events-auto"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;