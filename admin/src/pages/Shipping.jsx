import React, { useState } from "react";
import { 
  Truck, 
  MapPin, 
  Globe, 
  Navigation, 
  Plus, 
  Trash2, 
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

const Shipping = () => {
  const [zones, setZones] = useState([
    { id: 1, region: "Domestic (Inside Dhaka)", charge: "80", time: "24-48 Hours" },
    { id: 2, region: "Countrywide (Bangladesh)", charge: "150", time: "3-5 Days" },
    { id: 3, region: "International (Global)", charge: "2500", time: "7-15 Days" },
  ]);

  return (
    <div className="space-y-10 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl text-[#2C261F] mb-1 tracking-tight italic">Logistics & Shipping</h2>
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Configure Global Distribution & Rates</p>
        </div>
        <button className="flex items-center gap-2 bg-[#2C261F] text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#4A4238] transition-all shadow-lg shadow-black/5">
          <Plus size={14} /> Add New Zone
        </button>
      </div>

      {/* High Quality Animation: Moving Logistics Path */}
      <div className="relative w-full h-48 bg-[#F9F7F4] rounded-[40px] border border-slate-100 overflow-hidden group">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C150 100 250 50 400 100C550 150 650 100 800 100" stroke="#8D7B68" strokeWidth="2" strokeDasharray="8 8" />
          </svg>
        </div>

        {/* Animated Truck/Car */}
        <motion.div 
          animate={{ 
            x: ["0%", "85%", "0%"],
            rotateY: [0, 0, 180, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-[40%] left-10 flex flex-col items-center"
        >
          <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100 mb-2">
            <Truck className="text-[#8D7B68]" size={24} />
          </div>
          <div className="h-2 w-2 bg-[#8D7B68] rounded-full animate-ping"></div>
        </motion.div>

        {/* Decorative Map Points */}
        <div className="absolute top-[35%] left-[20%] opacity-40"><MapPin size={16} className="text-slate-300" /></div>
        <div className="absolute top-[65%] left-[50%] opacity-40"><MapPin size={16} className="text-slate-300" /></div>
        <div className="absolute top-[25%] left-[80%] opacity-40"><MapPin size={16} className="text-slate-300" /></div>

        <div className="absolute bottom-6 left-10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8D7B68]">Real-time Route Optimization</p>
          <p className="text-[18px] font-serif text-[#2C261F] italic text-sm">Synchronizing with global carriers...</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Rates Table */}
        <div className="lg:col-span-2 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F9F7F4]/50 border-b border-slate-50">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Region / Zone</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Rate</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Delivery Window</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {zones.map((zone) => (
                <tr key={zone.id} className="hover:bg-[#F9F7F4]/20 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#F9F7F4] rounded-lg text-[#8D7B68]">
                        <Globe size={14} />
                      </div>
                      <span className="text-sm font-bold text-[#2C261F]">{zone.region}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-black text-[#2C261F]">${zone.charge}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                      <Navigation size={12} className="text-[#8D7B68]" />
                      {zone.time}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Security & Efficiency Card */}
        <div className="space-y-6">
          <div className="bg-[#2C261F] p-8 rounded-[40px] text-white">
            <ShieldCheck className="text-[#8D7B68] mb-4" size={32} />
            <h4 className="font-serif text-xl mb-2">Transit Security</h4>
            <p className="text-xs text-white/50 leading-relaxed mb-6">All masterpieces are shipped via fully insured, secure courier services with mandatory signature upon receipt.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/5 p-3 rounded-xl border border-white/10">
              <TrendingUp size={14} className="text-emerald-500" />
              100% Secure Fulfillment
            </div>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
             <h4 className="font-serif text-lg text-[#2C261F] mb-4">Carrier Partners</h4>
             <div className="flex flex-wrap gap-3">
                {["DHL Express", "FedEx Luxury", "EMS Global"].map((p, i) => (
                  <span key={i} className="text-[9px] font-black uppercase tracking-widest px-3 py-2 bg-[#F9F7F4] text-slate-500 rounded-lg">{p}</span>
                ))}
             </div>
          </div>
        </div>
      </div>

      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Shipping;