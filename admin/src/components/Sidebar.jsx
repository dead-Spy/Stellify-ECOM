import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  PlusCircle, 
  ListOrdered, 
  ShoppingBag, 
  Gem,
  Percent,
  BarChart3, 
  Settings, 
  Zap,
  MessageSquare,
  Truck,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ setToken }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setToken("");
    navigate("/");
  };

  const navItems = [
    { group: "Core Operations", items: [
      { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { to: "/orders", icon: ShoppingBag, label: "Client Orders" },
    ]},
    { group: "The Archive", items: [
      { to: "/add", icon: PlusCircle, label: "Add Masterpiece" },
      { to: "/list", icon: ListOrdered, label: "Inventory List" },
      { to: "/collections", icon: Gem, label: "Collections" },
    ]},
    { group: "Relations", items: [
      { to: "/coupons", icon: Percent, label: "Elite Coupons" },
      { to: "/messages", icon: MessageSquare, label: "Concierge Inbox" },
    ]},
    { group: "System", items: [
      { to: "/analytics", icon: BarChart3, label: "Performance" },
      { to: "/shipping", icon: Truck, label: "Shipping Zones" },
      { to: "/settings", icon: Settings, label: "Atelier Settings" },
    ]}
  ];

  const SidebarContent = () => (
    <>
      <div className="mb-8 px-4 py-5 bg-[#F9F7F4] rounded-2xl border border-[#8D7B68]/10 hidden lg:block">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={14} className="text-[#8D7B68]" />
          <p className="text-[10px] font-black tracking-widest text-[#2C261F] uppercase">Atelier Pulse</p>
        </div>
        <p className="text-[18px] font-serif text-[#8D7B68] italic">94% <span className="text-[10px] tracking-normal font-sans not-italic text-slate-400">Efficiency</span></p>
      </div>

      <div className="flex flex-col gap-1 pb-10 flex-1">
        {navItems.map((section, idx) => (
          <React.Fragment key={idx}>
            <p className="px-4 text-[9px] font-black tracking-[0.3em] text-slate-300 uppercase mb-3 mt-6 first:mt-2">
              {section.group}
            </p>
            {section.items.map((item) => (
              <NavLink 
                key={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${isActive ? "bg-[#2C261F] text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"}`} 
                to={item.to}
              >
                <item.icon size={18} strokeWidth={2} />
                <p className="text-[11px] font-bold tracking-widest uppercase">{item.label}</p>
              </NavLink>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-auto border-t border-slate-50 pt-4 pb-8">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3.5 text-red-400 hover:bg-red-50 rounded-xl transition-all duration-300"
        >
          <LogOut size={18} strokeWidth={2} />
          <p className="text-[11px] font-bold tracking-widest uppercase">Exit Atelier</p>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Top Header Bar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white border-b border-slate-100 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex flex-col">
          <h2 className="font-serif text-xl text-[#2C261F] leading-none italic">Stellify</h2>
          <span className="text-[8px] tracking-[0.3em] uppercase text-[#8D7B68] font-bold mt-1">Atelier Portal</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 bg-[#F9F7F4] text-[#2C261F] rounded-xl active:scale-95 transition-all"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-[22%] h-screen sticky top-0 left-0 border-r border-slate-100 bg-white flex-col pt-8 px-4 overflow-y-auto shrink-0 scrollbar-hide">
        <div className="px-4 mb-10">
           <h1 className="font-serif text-3xl text-[#2C261F] italic">Stellify</h1>
           <p className="text-[9px] tracking-[0.4em] uppercase text-[#8D7B68] font-black">Management</p>
        </div>
        <SidebarContent />
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] lg:hidden"
            />
            
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-white z-[60] p-6 flex flex-col overflow-y-auto lg:hidden pt-24"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{` .font-serif { font-family: 'Prata', serif; } .scrollbar-hide::-webkit-scrollbar { display: none; } `}</style>
    </>
  );
};

export default Sidebar;